import { XMLParser } from "fast-xml-parser";
import { ec2ModelMeta } from "../ec2-metadata.ts";
import { capitalizeFirst } from "../utils.ts";
import type { ProtocolHandler, ServiceMetadata } from "./interface.ts";

const xmlParser = new XMLParser({
  ignoreAttributes: true,
  attributeNamePrefix: "",
  parseTagValue: true,
  isArray: () => false, // we'll normalize arrays manually
});

function safeParseXml(xmlText: string): any {
  try {
    return xmlParser.parse(xmlText);
  } catch {
    return null;
  }
}

function toParams(
  shapes: Record<string, any>,
  shapeId: string,
  value: any,
  prefix: string,
  out: Record<string, string>,
) {
  const shape = shapes?.[shapeId];
  console.log("toParams: trying to find shape " + shapeId);
  if (!shape) return;

  switch (shape.type) {
    case "structure": {
      if (value == null) return;
      for (const [memberName, member] of Object.entries(shape.members ?? {})) {
        const rawFieldName = (member as any).xmlName ?? memberName;
        const fieldName = capitalizeFirst(rawFieldName);
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
      value.forEach((item, i) => {
        const idx = i + 1;
        const base = `${prefix}.${idx}`;
        toParams(shapes, shape.member!.target, item, base, out);
      });
      break;
    }

    case "map": {
      if (!value || typeof value !== "object") return;
      let i = 1;
      for (const [k, v] of Object.entries(value)) {
        const entryBase = `${prefix}."entry."${i}`.replace(/\.$/, "");
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
        const key = (member as any).xmlName ?? memberName;
        const child = node?.[key];
        if (child !== undefined) {
          out[memberName] = fromXml(shapes, (member as any).target, child);
        }
      }
      return out;
    }

    case "list": {
      const memberName = shape.member?.xmlName ?? "member";
      const arrNode = node?.[memberName];
      const items = Array.isArray(arrNode)
        ? arrNode
        : arrNode != null
          ? [arrNode]
          : [];
      return items.map((it: any) => fromXml(shapes, shape.member!.target, it));
    }

    case "map": {
      const entry = node?.entry;
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

function findResponseWrapperName(doc: any): string {
  const keys = Object.keys(doc);
  return keys.find((key) => key.endsWith("Response")) || keys[0];
}

export class Ec2QueryHandler implements ProtocolHandler {
  readonly name = "ec2Query";
  readonly contentType = "application/x-www-form-urlencoded; charset=utf-8";

  buildRequest(
    input: unknown,
    action: string,
    _metadata: ServiceMetadata,
  ): string {
    // if unknown operation, it's an error
    const op = ec2ModelMeta.operations[action];
    if (!op) throw new Error(`Unknown operation: ${action}`);

    const params: Record<string, string> = {
      Action: action,
      Version: ec2ModelMeta.version,
    };

    // if there is no exception for the operation input target,
    // then we fall back to defaults
    if (input) {
      if (op.input) toParams(ec2ModelMeta.shapes, op.input, input, "", params);
      else {
        const inputTarget = `${action}Request`;
        toParams(ec2ModelMeta.shapes, inputTarget, input, "", params);
      }
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
    _metadata?: import("./interface.ts").ServiceMetadata,
  ): unknown {
    if (statusCode >= 400) return this.parseError(responseText, statusCode);
    if (!responseText) return {};

    const doc = safeParseXml(responseText);
    if (!doc) return {};

    const wrapperName = findResponseWrapperName(doc);
    const payloadNode = doc[wrapperName] ?? doc;

    if (wrapperName) {
      const opName = wrapperName.replace(/Response$/, "");
      const opMeta = ec2ModelMeta.operations[opName];
      // if the operation exists, but there is not output
      // that means it follows the pattern and we can rebuild the target without metadata
      const outShape = opMeta?.output ?? `${opName}Result`;

      if (outShape) {
        return fromXml(ec2ModelMeta.shapes, outShape, payloadNode);
      }
    }

    // If no specific shape found, return the payload node
    return payloadNode;
  }

  parseError(
    responseText: string,
    statusCode: number,
    headers?: Headers,
  ): unknown {
    const doc = safeParseXml(responseText);

    const err =
      doc?.Response?.Errors?.Error ??
      doc?.ErrorResponse?.Error ??
      doc?.Response?.Error ??
      null;

    const code = err?.Code ?? err?.code ?? "UnknownError";
    const message = err?.Message ?? err?.message ?? "Unknown error";
    const requestId =
      doc?.Response?.RequestID ??
      doc?.ErrorResponse?.RequestId ??
      doc?.Response?.RequestId ??
      headers?.get("x-amzn-RequestId") ??
      null;

    const e: any = new Error(message);
    e.name = String(code);
    e.$metadata = { statusCode, requestId };
    return e;
  }
}
