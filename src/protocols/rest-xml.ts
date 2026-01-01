/**
 * AWS restXml Protocol Implementation
 *
 * https://smithy.io/2.0/aws/protocols/aws-restxml-protocol.html
 */

import type * as S from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import { XMLParser } from "fast-xml-parser";
import {
  getHttpHeader,
  getHttpPrefixHeaders,
  getHttpQuery,
  getTimestampFormatFromAST,
  getXmlNameProp,
  hasHttpLabel,
  hasHttpPayload,
  hasHttpQueryParams,
  hasXmlAttribute,
  hasXmlFlattened,
} from "../traits.ts";
import type { Protocol } from "../protocol.ts";
import type { Request } from "../request.ts";
import type { Response } from "../response.ts";
import {
  getArrayElementAST,
  getEncodedPropertySignatures,
  getIdentifier,
  getXmlNameFromAST,
  getXmlNamespace,
  isArrayAST,
  isBooleanAST,
  isNumberAST,
  unwrapUnion,
} from "../util/ast.ts";
import { extractStaticQueryParams } from "./util/query-params.ts";
import { applyHttpTrait, bindInputToRequest } from "./util/serialize-input.ts";
import { formatTimestamp } from "./util/timestamp.ts";

// =============================================================================
// Protocol Export
// =============================================================================

export const restXmlProtocol: Protocol = {
  serializeRequest(inputSchema: S.Schema.AnyNoContext, input: unknown): Request {
    const ast = inputSchema.ast;
    const request: Request = {
      method: "POST",
      path: "/",
      query: {},
      headers: { "Content-Type": "application/xml" },
    };

    applyHttpTrait(ast, request);
    const { payloadValue, payloadAst, bodyMembers, hasBodyMembers } = bindInputToRequest(
      ast,
      input as Record<string, unknown>,
      request,
    );
    extractStaticQueryParams(request);

    // Serialize body
    if (payloadValue !== undefined && payloadAst !== undefined) {
      if (typeof payloadValue === "string") {
        request.body = payloadValue;
      } else {
        const tagName = getXmlNameFromAST(payloadAst) ?? getIdentifier(payloadAst);
        request.body = serializeValue(payloadAst, payloadValue, tagName, getXmlNamespace(ast));
      }
    } else if (hasBodyMembers) {
      const tagName = getIdentifier(ast);
      request.body = serializeObject(ast, bodyMembers, tagName, getXmlNamespace(ast));
    }

    return request;
  },

  deserializeResponse(outputSchema: S.Schema.AnyNoContext, response: Response): unknown {
    const ast = outputSchema.ast;
    const result: Record<string, unknown> = {};

    for (const prop of getEncodedPropertySignatures(ast)) {
      const name = String(prop.name);
      const header = getHttpHeader(prop);
      const prefixHeader = getHttpPrefixHeaders(prop);

      if (header) {
        const v = response.headers[header.toLowerCase()] ?? response.headers[header];
        if (v !== undefined) {
          result[name] = isNumberAST(prop.type)
            ? Number(v)
            : isBooleanAST(prop.type)
              ? v === "true"
              : v;
        }
      } else if (prefixHeader) {
        const prefix = prefixHeader.toLowerCase();
        const prefixed: Record<string, string> = {};
        for (const [k, v] of Object.entries(response.headers)) {
          if (k.toLowerCase().startsWith(prefix)) prefixed[k.slice(prefix.length)] = v;
        }
        if (Object.keys(prefixed).length) result[name] = prefixed;
      } else if (hasHttpPayload(prop)) {
        const unwrapped = unwrapUnion(prop.type);
        if (unwrapped._tag === "Union" || unwrapped._tag === "StringKeyword") {
          result[name] = response.body;
        } else {
          const parsed = parseXml(response.body);
          const xmlName = getXmlNameFromAST(prop.type) ?? getIdentifier(prop.type);
          result[name] = deserializeValue(
            prop.type,
            xmlName ? (parsed[xmlName] ?? parsed) : parsed,
          );
        }
      }
    }

    // Parse body XML
    if (response.body) {
      const parsed = parseXml(response.body);
      const xmlName = getXmlNameFromAST(ast) ?? getIdentifier(ast);
      const content = (xmlName ? parsed[xmlName] : parsed) as Record<string, unknown> | undefined;
      if (content && typeof content === "object")
        Object.assign(result, deserializeObject(ast, content));
    }

    return result;
  },
};

// =============================================================================
// XML Serialization
// =============================================================================

const wrapTag = (tag: string, content: string, xmlns?: string) =>
  `<${tag}${xmlns ? ` xmlns="${escapeXml(xmlns)}"` : ""}>${content}</${tag}>`;

function serializeValue(ast: AST.AST, value: unknown, tagName?: string, xmlns?: string): string {
  if (value == null) return "";

  // Primitives and Dates
  if (typeof value !== "object") {
    const content = escapeXml(String(value));
    return tagName ? wrapTag(tagName, content, xmlns) : content;
  }

  if (value instanceof Date) {
    const content = formatTimestamp(value, getTimestampFormatFromAST(ast));
    return tagName ? wrapTag(tagName, content, xmlns) : content;
  }

  // Arrays
  if (Array.isArray(value)) {
    const elementAST = getArrayElementAST(ast);
    const tag = tagName ?? (elementAST && getIdentifier(elementAST));
    return value
      .map((item, i) => serializeValue(elementAST ?? ast, item, tag, i === 0 ? xmlns : undefined))
      .join("");
  }

  // Objects
  return serializeObject(ast, value as Record<string, unknown>, tagName, xmlns);
}

function serializeObject(
  ast: AST.AST,
  value: Record<string, unknown>,
  tagName?: string,
  xmlns?: string,
): string {
  const props = getEncodedPropertySignatures(ast);
  const attrs: string[] = [];
  const elems: string[] = [];

  for (const prop of props) {
    const key = String(prop.name);
    const v = value[key];
    if (v === undefined) continue;

    if (hasXmlAttribute(prop)) {
      attrs.push(`${getXmlNameProp(prop) ?? key}="${escapeXml(String(v))}"`);
      continue;
    }

    const xmlName = getXmlNameProp(prop) ?? key;
    if (!Array.isArray(v)) {
      elems.push(serializeValue(prop.type, v, xmlName));
      continue;
    }

    const elementAST = getArrayElementAST(prop.type);
    if (hasXmlFlattened(prop)) {
      elems.push(v.map((item) => serializeValue(elementAST ?? prop.type, item, xmlName)).join(""));
    } else {
      const itemTag = elementAST && getIdentifier(elementAST);
      elems.push(
        `<${xmlName}>${v.map((item) => serializeValue(elementAST ?? prop.type, item, itemTag)).join("")}</${xmlName}>`,
      );
    }
  }

  if (!tagName) return elems.join("");

  const ns = xmlns ?? getXmlNamespace(ast);
  const attrStr =
    (ns ? ` xmlns="${escapeXml(ns)}"` : "") + (attrs.length ? ` ${attrs.join(" ")}` : "");
  return `<${tagName}${attrStr}>${elems.join("")}</${tagName}>`;
}

// =============================================================================
// XML Deserialization
// =============================================================================

function deserializeValue(ast: AST.AST, value: unknown): unknown {
  if (value == null || value === "") return undefined;

  if (isArrayAST(ast)) {
    const elAST = getArrayElementAST(ast);
    if (!elAST) return Array.isArray(value) ? value : [value];

    // Handle wrapped arrays: { Item: [...] }
    const elTag = getIdentifier(elAST);
    if (elTag && typeof value === "object" && !Array.isArray(value) && elTag in (value as object)) {
      value = (value as Record<string, unknown>)[elTag];
    }

    const items = Array.isArray(value) ? value : [value];
    return items.map((item) => deserializeValue(elAST, item));
  }

  if (typeof value === "string") {
    return isNumberAST(ast) ? Number(value) : isBooleanAST(ast) ? value === "true" : value;
  }

  if (typeof value === "object" && !Array.isArray(value)) {
    return deserializeObject(ast, value as Record<string, unknown>);
  }

  return value;
}

function deserializeObject(ast: AST.AST, value: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const prop of getEncodedPropertySignatures(ast)) {
    const key = String(prop.name);

    // Skip HTTP-bound properties (headers, query, labels)
    if (
      getHttpHeader(prop) ||
      getHttpQuery(prop) ||
      hasHttpLabel(prop) ||
      getHttpPrefixHeaders(prop) ||
      hasHttpQueryParams(prop)
    )
      continue;

    if (hasHttpPayload(prop)) {
      result[key] = deserializeValue(prop.type, value);
      continue;
    }

    const xmlName = getXmlNameProp(prop) ?? key;

    // Handle XML attributes (parser prefixes attributes with @_)
    if (hasXmlAttribute(prop)) {
      const attrValue = value[`@_${xmlName}`];
      if (attrValue !== undefined) {
        result[key] = deserializeValue(prop.type, attrValue);
      }
      continue;
    }

    const propValue = value[xmlName];
    if (propValue === undefined) continue;

    if (hasXmlFlattened(prop) && isArrayAST(prop.type)) {
      const elAST = getArrayElementAST(prop.type) ?? prop.type;
      const items = Array.isArray(propValue) ? propValue : [propValue];
      result[key] = items.map((item) => deserializeValue(elAST, item));
    } else {
      result[key] = deserializeValue(prop.type, propValue);
    }
  }

  return result;
}

// =============================================================================
// XML Parsing
// =============================================================================

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  trimValues: true,
  parseTagValue: false, // Keep values as strings, let schema handle conversion
  parseAttributeValue: false,
  removeNSPrefix: false,
});

function parseXml(xml: string): Record<string, unknown> {
  if (!xml?.trim()) return {};
  return xmlParser.parse(xml) as Record<string, unknown>;
}

// =============================================================================
// XML Utilities
// =============================================================================

const xmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
const escapeXml = (s: string) => s.replace(/[&<>"']/g, (c) => xmlEscapes[c]);
