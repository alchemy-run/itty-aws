import { XMLParser } from "fast-xml-parser";
import type { ProtocolHandler, ServiceMetadata } from "./interface.ts";

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

export class AwsQueryHandler implements ProtocolHandler {
    readonly name = "awsQuery";
    readonly contentType = "application/x-www-form-urlencoded";

    buildRequest(
        input: unknown,
        action: string,
        metadata: ServiceMetadata,
    ): string {
        const params = new URLSearchParams();
        params.append("Action", action);

        // Use service-specific version from metadata
        params.append("Version", metadata.version);

        // Flatten the input object into query parameters
        this.flattenObject(input, "", params);

        return params.toString();
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

    parseResponse(responseText: string, _statusCode: number): unknown {
        if (!responseText) return {};

        const doc = safeParseXml(responseText);
        if (!doc) {
            // For malformed XML, return empty object like other successful responses
            return {};
        }

        // AWS Query responses have format: {OperationName}Response -> {OperationName}Result
        const responseKey = Object.keys(doc).find(key => key.endsWith('Response'));
        if (!responseKey) {
            return this.processAwsQueryArrays(doc);
        }

        const responseNode = doc[responseKey];
        const resultKey = responseKey.replace('Response', 'Result');

        let result;
        if (responseNode && responseNode[resultKey]) {
            result = responseNode[resultKey];
        } else {
            result = responseNode || doc;
        }

        return this.processAwsQueryArrays(result);
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
                        if (this.isPlainObject(value) || this.isMessageAttributesMap(value, paramKey)) {
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

  private isMessageAttributesMap(obj: any, paramKey: string): boolean {
    // Special handling for SNS MessageAttributes which should be serialized as maps
    // MessageAttributes contains objects with DataType and StringValue/BinaryValue fields
    if (paramKey === "MessageAttributes" || paramKey.endsWith(".MessageAttributes")) {
      return true;
    }
    return false;
  }
}
