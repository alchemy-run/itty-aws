/**
 * AWS EC2 Query Protocol Implementation
 *
 * https://smithy.io/2.0/aws/protocols/aws-ec2-query-protocol.html
 *
 * Key differences from awsQuery:
 * - All lists are flattened (no wrapper elements)
 * - Uses aws.protocols#ec2QueryName trait for custom query key names
 * - Response root is {OperationName}Response (no result wrapper)
 * - Errors wrapped in <Response><Errors><Error>...</Error></Errors><RequestID>...</RequestID></Response>
 * - HTTP binding traits are ignored
 */

import type * as S from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import { XMLParser } from "fast-xml-parser";
import type { Protocol } from "../protocol.ts";
import type { Request } from "../request.ts";
import type { Response } from "../response.ts";
import {
  getEc2QueryName,
  getServiceVersion,
  getTimestampFormat,
  getTimestampFormatFromAST,
  getXmlNameProp,
  hasXmlAttribute,
} from "../traits.ts";
import {
  getArrayElementAST,
  getEncodedPropertySignatures,
  getIdentifier,
  isArrayAST,
  isBooleanAST,
  isDateAST,
  isNumberAST,
} from "../util/ast.ts";
import { formatTimestamp } from "./util/timestamp.ts";

// =============================================================================
// Protocol Export
// =============================================================================

export const ec2QueryProtocol: Protocol = {
  serializeRequest(inputSchema: S.Schema.AnyNoContext, input: unknown): Request {
    const ast = inputSchema.ast;
    const request: Request = {
      method: "POST",
      path: "/",
      query: {},
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };

    // Get operation name from the identifier (e.g., "DescribeInstancesRequest" -> "DescribeInstances")
    const identifier = getIdentifier(ast) ?? "";
    const action = identifier.replace(/Request$/, "");

    // Get service version from annotations
    const version = getServiceVersion(ast) ?? "";

    // Build form-urlencoded body
    const params: string[] = [];
    params.push(`Action=${encodeURIComponent(action)}`);
    params.push(`Version=${encodeURIComponent(version)}`);

    // Serialize input members
    serializeMembers(ast, input as Record<string, unknown>, "", params);

    request.body = params.join("&");

    return request;
  },

  deserializeResponse(outputSchema: S.Schema.AnyNoContext, response: Response): unknown {
    const ast = outputSchema.ast;
    const result: Record<string, unknown> = {};

    // Parse body XML
    if (response.body) {
      const parsed = parseXml(response.body);

      // EC2 response root is {OperationName}Response
      // Find the response element (should be the only top-level element)
      const rootKeys = Object.keys(parsed).filter((k) => !k.startsWith("?"));
      const responseKey = rootKeys[0];
      const content = responseKey
        ? (parsed[responseKey] as Record<string, unknown>)
        : (parsed as Record<string, unknown>);

      if (content && typeof content === "object") {
        Object.assign(result, deserializeObject(ast, content));
      }
    }

    return result;
  },
};

// =============================================================================
// Query String Serialization
// =============================================================================

/**
 * Get the query key name for a member following EC2 query key resolution:
 * 1. Use ec2QueryName trait if present
 * 2. Use xmlName trait with first letter capitalized if present
 * 3. Use member name with first letter capitalized
 */
function getQueryKeyName(prop: AST.PropertySignature): string {
  const ec2QueryName = getEc2QueryName(prop);
  if (ec2QueryName) return ec2QueryName;

  const xmlName = getXmlNameProp(prop);
  if (xmlName) {
    return xmlName.charAt(0).toUpperCase() + xmlName.slice(1);
  }

  const memberName = String(prop.name);
  return memberName.charAt(0).toUpperCase() + memberName.slice(1);
}

/**
 * Serialize object members to query parameters
 */
function serializeMembers(
  ast: AST.AST,
  input: Record<string, unknown>,
  prefix: string,
  params: string[],
): void {
  for (const prop of getEncodedPropertySignatures(ast)) {
    const memberName = String(prop.name);
    const value = input[memberName];
    if (value === undefined || value === null) continue;

    const queryKey = getQueryKeyName(prop);
    const fullKey = prefix ? `${prefix}.${queryKey}` : queryKey;

    serializeValue(prop.type, value, fullKey, params, prop);
  }
}

/**
 * Serialize a value to query parameters
 */
function serializeValue(
  ast: AST.AST,
  value: unknown,
  key: string,
  params: string[],
  prop?: AST.PropertySignature,
): void {
  if (value === undefined || value === null) return;

  // Handle Date
  if (value instanceof Date) {
    // Default to date-time for EC2 query (RFC 3339 / ISO 8601)
    const format = prop
      ? (getTimestampFormat(prop) ?? getTimestampFormatFromAST(prop.type) ?? "date-time")
      : (getTimestampFormatFromAST(ast) ?? "date-time");
    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(formatTimestamp(value, format))}`);
    return;
  }

  // Handle primitives
  if (typeof value !== "object") {
    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    return;
  }

  // Handle Blob/Uint8Array (base64 encode)
  if (value instanceof Uint8Array) {
    const base64 = btoa(String.fromCharCode(...value));
    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(base64)}`);
    return;
  }

  // Handle arrays - EC2 always uses flattened lists with 1-based indexing
  if (Array.isArray(value)) {
    // Empty arrays are not serialized in EC2 query
    if (value.length === 0) return;

    const elementAST = getArrayElementAST(ast);
    for (let i = 0; i < value.length; i++) {
      const itemKey = `${key}.${i + 1}`;
      serializeValue(elementAST ?? ast, value[i], itemKey, params);
    }
    return;
  }

  // Handle objects (nested structures)
  if (typeof value === "object") {
    serializeMembers(ast, value as Record<string, unknown>, key, params);
  }
}

// =============================================================================
// XML Deserialization
// =============================================================================

function deserializeValue(ast: AST.AST, value: unknown): unknown {
  if (value == null || value === "") return undefined;

  // Handle arrays
  if (isArrayAST(ast)) {
    const elAST = getArrayElementAST(ast);
    if (!elAST) return Array.isArray(value) ? value : [value];

    // Handle wrapped arrays: { member: [...] } or { Item: [...] }
    const elTag = getIdentifier(elAST) ?? "member";
    if (typeof value === "object" && !Array.isArray(value)) {
      const objValue = value as Record<string, unknown>;
      // Check for common wrapper element names
      if (elTag in objValue) {
        value = objValue[elTag];
      } else if ("member" in objValue) {
        value = objValue["member"];
      } else if ("item" in objValue) {
        value = objValue["item"];
      }
    }

    const items = Array.isArray(value) ? value : [value];
    return items.map((item) => deserializeValue(elAST, item));
  }

  // Handle strings
  if (typeof value === "string") {
    if (isNumberAST(ast)) return Number(value);
    if (isBooleanAST(ast)) return value === "true";
    if (isDateAST(ast)) return new Date(value);
    return value;
  }

  // Handle numbers/booleans from parser
  if (typeof value === "number" || typeof value === "boolean") {
    return value;
  }

  // Handle objects
  if (typeof value === "object" && !Array.isArray(value)) {
    return deserializeObject(ast, value as Record<string, unknown>);
  }

  return value;
}

function deserializeObject(ast: AST.AST, value: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const prop of getEncodedPropertySignatures(ast)) {
    const key = String(prop.name);
    const xmlName = getXmlNameProp(prop) ?? key;

    // Handle XML attributes (parser prefixes attributes with @_)
    if (hasXmlAttribute(prop)) {
      const attrValue = value[`@_${xmlName}`];
      if (attrValue !== undefined) {
        result[key] = deserializeValue(prop.type, attrValue);
      }
      continue;
    }

    // Try member name first, then xmlName
    let propValue = value[key] ?? value[xmlName];

    // For response XML, try lowercase first character variations
    if (propValue === undefined) {
      const lcKey = key.charAt(0).toLowerCase() + key.slice(1);
      const lcXmlName = xmlName.charAt(0).toLowerCase() + xmlName.slice(1);
      propValue = value[lcKey] ?? value[lcXmlName];
    }

    if (propValue === undefined) continue;

    // Handle arrays (EC2 uses wrapped lists in responses with <item> elements)
    if (isArrayAST(prop.type)) {
      const elAST = getArrayElementAST(prop.type) ?? prop.type;

      // Unwrap list wrapper elements from XML parser output
      // EC2 XML responses wrap list items in <item> elements:
      //   <reservationSet><item>...</item><item>...</item></reservationSet>
      // Parser converts to: { item: [...] }
      // We need to extract the array from the wrapper.
      let arrayValue: unknown = propValue;
      if (typeof propValue === "object" && propValue !== null && !Array.isArray(propValue)) {
        const objValue = propValue as Record<string, unknown>;
        // First, try the element's schema identifier (e.g., "Reservation")
        const elTag = getIdentifier(elAST);
        if (elTag && elTag in objValue) {
          arrayValue = objValue[elTag];
        } else if ("item" in objValue) {
          // EC2 protocol convention: list items wrapped in <item>
          arrayValue = objValue["item"];
        } else if ("member" in objValue) {
          // awsQuery protocol convention: list items wrapped in <member>
          arrayValue = objValue["member"];
        }
      }

      const items = Array.isArray(arrayValue) ? arrayValue : [arrayValue];
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
