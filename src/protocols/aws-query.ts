import { XMLParser } from "fast-xml-parser";
import type { ProtocolHandler, ServiceMetadata } from "./interface.ts";
import { getServiceMeta, type AwsQueryServiceMeta } from "../awsquery-metadata/index.js";

const xmlParser = new XMLParser({
    ignoreAttributes: true,
    attributeNamePrefix: "",
    parseTagValue: true,
    isArray: (name, jpath, isLeafNode, isAttribute) => {
        // AWS Query protocol uses 'member' elements for array items
        return name === "member";
    },
});

function safeParseXml(xmlText: string): any {
    try {
        return xmlParser.parse(xmlText);
    } catch {
        return null;
    }
}

// Shape-aware serialization functions adapted from EC2 implementation
function toParams(
    shapes: Record<string, any>,
    shapeId: string,
    value: any,
    prefix: string,
    out: Record<string, string>,
) {
    const shape = shapes?.[shapeId];
    if (!shape) return;

    switch (shape.type) {
        case "structure": {
            if (value == null) return;
            for (const [memberName, member] of Object.entries(shape.members ?? {})) {
                const fieldName = (member as any).locationName ?? memberName;
                const nextPrefix = prefix ? `${prefix}.${fieldName}` : fieldName;
                toParams(
                    shapes,
                    (member as any).target,
                    value[memberName],
                    nextPrefix,
                    out,
                );
            }
            break;
        }

        case "list": {
            if (!Array.isArray(value)) return;
            const memberName =
                shape.member?.locationName ?? shape.member?.queryName ?? "member";
            const flattened = shape.member?.flattened || shape.flattened;
            value.forEach((item, i) => {
                const idx = i + 1;
                const base = flattened
                    ? `${prefix}.${idx}` // e.g., "GroupId.1"
                    : `${prefix}.${memberName}.${idx}`; // e.g., "TagSet.member.1"
                toParams(shapes, shape.member!.target, item, base, out);
            });
            break;
        }

        case "map": {
            if (!value || typeof value !== "object") return;
            let i = 1;
            for (const [k, v] of Object.entries(value)) {
                const entryBase = `${prefix}.entry.${i}`;
                toParams(shapes, shape.key!.target, k, `${entryBase}.key`, out);
                toParams(shapes, shape.value!.target, v, `${entryBase}.value`, out);
                i++;
            }
            break;
        }

        case "timestamp": {
            if (value == null) return;
            const fmt = (shape as any).timestampFormat ?? "iso8601";
            const str =
                fmt === "epoch-seconds"
                    ? Math.floor(new Date(value).getTime() / 1000).toString()
                    : fmt === "http-date"
                        ? new Date(value).toUTCString()
                        : new Date(value).toISOString();
            out[prefix] = str;
            break;
        }

        case "boolean": {
            if (value == null) return;
            out[prefix] = value ? "true" : "false";
            break;
        }

        case "integer": {
            if (value == null) return;
            out[prefix] = String(value);
            break;
        }

        case "blob": {
            if (value == null) return;
            out[prefix] =
                typeof value === "string"
                    ? value
                    : Buffer.from(value).toString("base64");
            break;
        }

        default: /* string, etc. */ {
            if (value == null) return;
            out[prefix] = String(value);
        }
    }
}

function fromXml(shapes: Record<string, any>, shapeId: string, node: any): any {
    const shape = shapes?.[shapeId];
    if (!shape) return node;

    switch (shape.type) {
        case "structure": {
            const out: any = {};
            for (const [memberName, member] of Object.entries(shape.members ?? {})) {
                const key = (member as any).locationName ?? memberName;
                const child = node?.[key];
                if (child !== undefined) {
                    out[memberName] = fromXml(shapes, (member as any).target, child);
                }
            }
            return out;
        }

        case "list": {
            const memberName =
                shape.member?.locationName ?? shape.member?.queryName ?? "member";
            const flattened = shape.member?.flattened || shape.flattened;
            const arrNode = flattened ? node : node?.[memberName];
            const items = Array.isArray(arrNode)
                ? arrNode
                : arrNode != null
                    ? [arrNode]
                    : [];
            return items.map((it: any) => fromXml(shapes, shape.member!.target, it));
        }

        case "map": {
            const entry = shape.flattened ? node : node?.entry;
            const items = Array.isArray(entry) ? entry : entry != null ? [entry] : [];
            const out: any = {};
            for (const it of items) {
                const k = fromXml(shapes, shape.key!.target, it.key);
                const v = fromXml(shapes, shape.value!.target, it.value);
                out[k] = v;
            }
            return out;
        }

        case "timestamp": {
            if (typeof node === "number") return new Date(node * 1000).toISOString();
            if (/^\d+$/.test(String(node)))
                return new Date(Number(node) * 1000).toISOString();
            const d = new Date(node);
            return Number.isNaN(+d) ? node : d.toISOString();
        }

        case "boolean":
            return String(node) === "true";

        case "integer":
            return Number(node);

        case "blob":
            return typeof node === "string" ? node : node?.toString?.("base64");

        default:
            return node?.toString?.() ?? node;
    }
}

export class AwsQueryHandler implements ProtocolHandler {
    readonly name = "awsQuery";
    readonly contentType = "application/x-www-form-urlencoded";

    buildRequest(
        input: unknown,
        action: string,
        metadata: ServiceMetadata,
    ): string {
        const serviceMeta = getServiceMeta(metadata.sdkId);
        
        if (!serviceMeta) {
            throw new Error(
                `AWS Query metadata not found for service "${metadata.sdkId}". ` +
                `AWS Query protocol requires shape metadata for proper serialization. ` +
                `Please generate metadata using: bun scripts/generate-awsquery-metadata.ts "${metadata.sdkId}"`
            );
        }

        const params: Record<string, string> = {
            Action: action,
            Version: serviceMeta.version
        };

        const operation = serviceMeta.operations[action];
        if (operation?.input && input) {
            // Use shape-aware serialization
            toParams(serviceMeta.shapes, operation.input, input, "", params);
        }

        return new URLSearchParams(params).toString();
    }

    getHeaders(
        _action: string,
        _metadata: ServiceMetadata,
        _body?: string,
    ): Record<string, string> {
        return {
            "Content-Type": this.contentType,
            "User-Agent": "itty-aws",
        };
    }

    parseResponse(responseText: string, statusCode: number, metadata?: ServiceMetadata): unknown {
        if (statusCode >= 400) return this.parseError(responseText, statusCode);
        if (!responseText) return {};

        const doc = safeParseXml(responseText);
        if (!doc) return {};

        if (!metadata) {
            throw new Error("AWS Query protocol requires service metadata for response parsing");
        }

        const serviceMeta = getServiceMeta(metadata.sdkId);
        if (!serviceMeta) {
            throw new Error(
                `AWS Query metadata not found for service "${metadata.sdkId}". ` +
                `AWS Query protocol requires shape metadata for proper response parsing. ` +
                `Please generate metadata using: bun scripts/generate-awsquery-metadata.ts "${metadata.sdkId}"`
            );
        }

        const responseKey = Object.keys(doc).find(key => key.endsWith('Response'));
        if (!responseKey) return this.processAwsQueryArrays(doc);

        const opName = responseKey.replace(/Response$/, '');
        const operation = serviceMeta.operations[opName];
        
        if (operation?.output) {
            const responseNode = doc[responseKey];
            const resultKey = responseKey.replace('Response', 'Result');
            const resultNode = responseNode?.[resultKey] ?? responseNode;
            
            // Use shape-aware parsing
            return fromXml(serviceMeta.shapes, operation.output, resultNode);
        }

        return this.processAwsQueryArrays(doc[responseKey] || doc);
    }

    parseError(
        responseText: string,
        statusCode: number,
        headers?: Headers,
    ): unknown {
        const doc = safeParseXml(responseText);

        if (!doc) {
            return { message: responseText };
        }

        // AWS Query error format: ErrorResponse -> Error
        const errorNode = doc.ErrorResponse?.Error || doc.Error;

        if (!errorNode) {
            return { message: responseText };
        }

        const code = errorNode.Code || "UnknownError";
        const message = errorNode.Message || "Unknown error";
        const type = errorNode.Type || "Sender";

        // Extract request ID from response metadata or headers
        const requestId =
            doc.ErrorResponse?.RequestId ||
            headers?.get("x-amzn-requestid") ||
            headers?.get("x-amz-request-id") ||
            undefined;

        const error: any = new Error(message);
        error.name = code;
        error.Type = type;
        error.$metadata = {
            statusCode,
            requestId,
        };

        return error;
    }

    private processAwsQueryArrays(obj: any): any {
        if (!obj || typeof obj !== "object") {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => this.processAwsQueryArrays(item));
        }

        const processed: any = {};
        for (const key in obj) {
            if (Object.hasOwn(obj, key)) {
                const value = obj[key];

                // Handle member arrays - convert { member: [...] } to [...]
                // This is the standard AWS Query way to represent arrays
                if (value && typeof value === "object" && "member" in value) {
                    const memberValue = value.member;
                    if (Array.isArray(memberValue)) {
                        processed[key] = memberValue.map(item => this.processAwsQueryArrays(item));
                    } else {
                        // Single member becomes array of one
                        processed[key] = [this.processAwsQueryArrays(memberValue)];
                    }
                }
                // Handle entry arrays for key-value maps - convert { entry: [{key: "x", value: "y"}] } to {"x": "y"}
                else if (value && typeof value === "object" && "entry" in value) {
                    const entries = Array.isArray(value.entry) ? value.entry : [value.entry];
                    const map: any = {};
                    for (const entry of entries) {
                        if (entry && typeof entry === "object" && "key" in entry && "value" in entry) {
                            map[entry.key] = this.processAwsQueryArrays(entry.value);
                        }
                    }
                    processed[key] = map;
                }
                // Handle empty elements that could be arrays or objects
                else if (value === "") {
                    // Empty strings in AWS Query typically represent empty collections
                    // We can't determine if it should be an array or object without schema info,
                    // so we'll leave it as an empty string and let the caller handle it
                    processed[key] = value;
                }
                else {
                    processed[key] = this.processAwsQueryArrays(value);
                }
            }
        }

        return processed;
    }

    private flattenObject(
        obj: any,
        prefix: string,
        params: URLSearchParams,
    ): void {
        if (!obj || typeof obj !== "object") return;

        for (const key in obj) {
            if (Object.hasOwn(obj, key)) {
                const value = obj[key];
                const paramKey = prefix ? `${prefix}.${key}` : key;

                if (value !== null && value !== undefined) {
                    if (Array.isArray(value)) {
                        // AWS Query protocol: arrays use .member.N format
                        value.forEach((item, index) => {
                            if (typeof item === "object" && item !== null) {
                                this.flattenObject(item, `${paramKey}.member.${index + 1}`, params);
                            } else {
                                params.append(`${paramKey}.member.${index + 1}`, String(item));
                            }
                        });
                    } else if (value instanceof Date) {
                        params.append(paramKey, value.toISOString());
                    } else if (typeof value === "object") {
                        // Check if this looks like a map (plain object with string keys)
                        if (this.isPlainObject(value)) {
                            // AWS Query protocol: maps use .entry.N.key/.entry.N.value format
                            const entries = Object.entries(value);
                            entries.forEach(([mapKey, mapValue], index) => {
                                params.append(`${paramKey}.entry.${index + 1}.key`, String(mapKey));
                                if (typeof mapValue === "object" && mapValue !== null) {
                                    this.flattenObject(mapValue, `${paramKey}.entry.${index + 1}.value`, params);
                                } else {
                                    params.append(`${paramKey}.entry.${index + 1}.value`, String(mapValue));
                                }
                            });
                        } else {
                            // Regular nested object
                            this.flattenObject(value, paramKey, params);
                        }
                    } else {
                        params.append(paramKey, String(value));
                    }
                }
            }
        }
    }

    private isPlainObject(obj: any): boolean {
    // In AWS Query protocol, we need to distinguish between:
    // 1. Structured objects (which use dot notation: NestedStruct.Foo=value)
    // 2. Map objects (which use entry format: MapParam.entry.N.key=key&MapParam.entry.N.value=value)
    //
    // Without schema information, this is challenging. For now, we'll be conservative
    // and assume all objects are structured objects unless they have a specific pattern
    // that suggests they're intended as maps.
    //
    // A better approach would be to have the caller specify map types explicitly
    // or use schema information to determine the correct serialization.
    return false;
    }


}
