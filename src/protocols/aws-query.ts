import { XMLParser } from "fast-xml-parser";
import { getServiceMeta } from "../awsquery-metadata/index.js";
import type {
  ParsedError,
  ProtocolHandler,
  ServiceMetadata,
} from "./interface.ts";

const xmlParser = new XMLParser({
  ignoreAttributes: true,
  attributeNamePrefix: "",
  parseTagValue: true,
  isArray: (name, _jpath, _isLeafNode, _isAttribute) => {
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

    default: {
      // Handle URL-encoded JSON policy documents
      // https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html
      // weird, but this is not defined in the smithy model at all -- very unfortunate
      if (
        typeof node === "string" &&
        shapeId === "com.amazonaws.iam#policyDocumentType" &&
        node.includes("%")
      ) {
        try {
          const decoded = decodeURIComponent(node);
          return JSON.parse(decoded);
        } catch {
          // If parsing fails, return the original string
          return node;
        }
      }
      return node?.toString?.() ?? node;
    }
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
          "AWS Query protocol requires shape metadata for proper serialization. ",
      );
    }

    const params: Record<string, string> = {
      Action: action,
      Version: serviceMeta.version,
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

  parseResponse(
    responseText: string,
    statusCode: number,
    metadata?: ServiceMetadata,
  ): unknown {
    if (statusCode >= 400) return this.parseError(responseText, statusCode);
    if (!responseText) return {};

    const doc = safeParseXml(responseText);
    if (!doc) return {};

    if (!metadata) {
      throw new Error(
        "AWS Query protocol requires service metadata for response parsing",
      );
    }

    const serviceMeta = getServiceMeta(metadata.sdkId);
    if (!serviceMeta) {
      throw new Error(
        `AWS Query metadata not found for service "${metadata.sdkId}". ` +
          "AWS Query protocol requires shape metadata for proper response parsing. " +
          `Please generate metadata using: bun scripts/generate-awsquery-metadata.ts "${metadata.sdkId}"`,
      );
    }

    const responseKey = Object.keys(doc).find((key) =>
      key.endsWith("Response"),
    );
    if (!responseKey) throw new Error("Invalid response.");

    const opName = responseKey.replace(/Response$/, "");
    const operation = serviceMeta.operations[opName];

    if (operation?.output) {
      const responseNode = doc[responseKey];
      const resultKey = responseKey.replace("Response", "Result");
      const resultNode = responseNode?.[resultKey] ?? responseNode;

      // Use shape-aware parsing
      return fromXml(serviceMeta.shapes, operation.output, resultNode);
    } else {
      throw new Error("Unable to parse response.");
    }
  }

  parseError(
    responseText: string,
    _statusCode: number,
    headers?: Headers,
  ): ParsedError {
    const doc = safeParseXml(responseText);

    if (!doc) {
      return {
        errorType: "UnknownError",
        message: responseText || "Unknown error",
        requestId:
          headers?.get("x-amzn-requestid") ||
          headers?.get("x-amz-request-id") ||
          undefined,
      };
    }

    // AWS Query error format: ErrorResponse -> Error
    const errorNode = doc.ErrorResponse?.Error || doc.Error;

    if (!errorNode) {
      return {
        errorType: "UnknownError",
        message: responseText || "Unknown error",
        requestId:
          headers?.get("x-amzn-requestid") ||
          headers?.get("x-amz-request-id") ||
          undefined,
      };
    }

    const errorType = errorNode.Code || "UnknownError";
    const message = errorNode.Message || "Unknown error";

    // Extract request ID from response metadata or headers
    const requestId =
      doc.ErrorResponse?.RequestId ||
      headers?.get("x-amzn-requestid") ||
      headers?.get("x-amz-request-id") ||
      undefined;

    return {
      errorType,
      message,
      requestId,
    };
  }
}
