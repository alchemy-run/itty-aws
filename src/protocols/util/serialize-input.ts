/**
 * Input Serialization
 *
 * Binds input values to HTTP request parts (headers, path labels, query params)
 * based on Smithy HTTP trait annotations.
 */

import * as AST from "effect/SchemaAST";
import {
  getHttpHeader,
  getHttpPrefixHeaders,
  getHttpQuery,
  getHttpTrait,
  getTimestampFormatFromAST,
  hasHttpLabel,
  hasHttpPayload,
  hasHttpQueryParams,
} from "../../traits.ts";
import type { Request } from "../../request.ts";
import { formatTimestamp } from "./timestamp.ts";

/**
 * Apply the @http trait (method, uri) to the request.
 */
export function applyHttpTrait(ast: AST.AST, request: Request): void {
  const httpTrait = getHttpTrait(ast);
  if (httpTrait) {
    request.method = httpTrait.method;
    request.path = httpTrait.uri;
  }
}

/**
 * Bind input values to HTTP request based on trait annotations.
 *
 * This processes each input member and:
 * - Adds @httpHeader values to request.headers
 * - Substitutes @httpLabel values in request.path
 * - Adds @httpQuery values to request.query
 * - Adds @httpPrefixHeaders values to request.headers
 * - Collects @httpPayload for body serialization
 * - Collects remaining members as body content
 */
export function bindInputToRequest(ast: AST.AST, input: Record<string, unknown>, request: Request) {
  const structAst = AST.isTransformation(ast) ? ast.from : ast;
  const props = AST.isTypeLiteral(structAst) ? structAst.propertySignatures : [];

  let payloadValue: unknown = undefined;
  let payloadAst: AST.AST | undefined = undefined;
  const bodyMembers: Record<string, unknown> = {};
  let hasBodyMembers = false;

  for (const prop of props) {
    const name = prop.name as string;
    const value = input[name];
    if (value === undefined) continue;

    const header = getHttpHeader(prop);
    const label = hasHttpLabel(prop);
    const queryParam = getHttpQuery(prop);
    const queryParams = hasHttpQueryParams(prop);
    const prefixHeaders = getHttpPrefixHeaders(prop);
    const isPayload = hasHttpPayload(prop);

    if (header !== undefined) {
      // HTTP headers default to http-date for timestamps
      if (value instanceof Date) {
        const format = getTimestampFormatFromAST(prop.type) ?? "http-date";
        request.headers[header] = formatTimestamp(value, format);
      } else {
        request.headers[header] = String(value);
      }
    } else if (label) {
      request.path = request.path.replace(
        new RegExp(`\\{${name}\\+?\\}`),
        encodeURIComponent(String(value)),
      );
    } else if (queryParam !== undefined) {
      request.query[queryParam] = String(value);
    } else if (queryParams && typeof value === "object") {
      Object.assign(request.query, value);
    } else if (prefixHeaders !== undefined && typeof value === "object") {
      for (const [k, v] of Object.entries(value as Record<string, string>)) {
        request.headers[`${prefixHeaders}${k}`] = v;
      }
    } else if (isPayload) {
      payloadValue = value;
      payloadAst = prop.type;
    } else {
      bodyMembers[name] = value;
      hasBodyMembers = true;
    }
  }

  return { payloadValue, payloadAst, bodyMembers, hasBodyMembers };
}
