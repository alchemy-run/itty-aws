/**
 * AWS restJson1 Protocol Implementation
 *
 * https://smithy.io/2.0/aws/protocols/aws-restjson1-protocol.html
 *
 * Key characteristics:
 * - JSON payloads with HTTP binding traits
 * - jsonName trait for custom property names
 * - Default timestamp format is epoch-seconds
 */

import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as AST from "effect/SchemaAST";
import type { Operation } from "../operation.ts";
import type { Protocol, ProtocolHandler } from "../protocol.ts";
import type { Request } from "../request.ts";
import type { Response } from "../response.ts";
import {
  getHttpHeader,
  getHttpPrefixHeaders,
  hasHttpPayload,
  isStreamingType,
  jsonNameSymbol,
} from "../traits.ts";
import { getArrayElementAST, getEncodedPropertySignatures, unwrapUnion } from "../util/ast.ts";
import { extractStaticQueryParams } from "../util/query-params.ts";
import { applyHttpTrait, bindInputToRequest } from "../util/serialize-input.ts";

export const restJson1Protocol: Protocol = (operation: Operation): ProtocolHandler => {
  const inputSchema = operation.input;
  const outputSchema = operation.output;
  const inputAst = inputSchema.ast;
  const outputAst = outputSchema.ast;

  // Pre-compute encoder/decoder and property signatures (done once at init)
  const encodeInput = Schema.encode(inputSchema);
  const outputProps = getEncodedPropertySignatures(outputAst);

  return {
    serializeRequest: Effect.fn(function* (input: unknown) {
      const encoded = yield* encodeInput(input);

      const request: Request = {
        method: "POST",
        path: "/",
        query: {},
        headers: { "Content-Type": "application/json" },
      };

      applyHttpTrait(inputAst, request);
      const { payloadValue, payloadAst, bodyMembers, hasBodyMembers } = bindInputToRequest(
        inputAst,
        encoded as Record<string, unknown>,
        request,
      );
      extractStaticQueryParams(request);

      // Serialize body
      if (payloadValue !== undefined && payloadAst !== undefined) {
        request.body = isRawPayload(payloadAst)
          ? (payloadValue as string)
          : JSON.stringify(renameKeys(payloadAst, payloadValue, true));
      } else if (hasBodyMembers) {
        request.body = JSON.stringify(renameKeys(inputAst, bodyMembers, true));
      }

      return request;
    }),

    deserializeResponse: Effect.fn(function* (response: Response) {
      const result: Record<string, unknown> = {};

      // Extract header-bound and httpPayload values
      for (const prop of outputProps) {
        const name = String(prop.name);

        // Header binding
        const header = getHttpHeader(prop);
        if (header) {
          const v = response.headers[header.toLowerCase()] ?? response.headers[header];
          if (v !== undefined) result[name] = v;
          continue;
        }

        // Prefix headers binding
        const prefix = getHttpPrefixHeaders(prop);
        if (prefix) {
          const lowerPrefix = prefix.toLowerCase();
          const prefixed: Record<string, string> = {};
          for (const [k, v] of Object.entries(response.headers)) {
            if (k.toLowerCase().startsWith(lowerPrefix)) {
              prefixed[k.slice(prefix.length)] = v;
            }
          }
          if (Object.keys(prefixed).length) result[name] = prefixed;
          continue;
        }

        // httpPayload with raw body
        if (hasHttpPayload(prop) && isRawPayload(prop.type)) {
          result[name] = response.body;
        }
      }

      // Parse JSON body and decode
      if (response.body) {
        try {
          const parsed = JSON.parse(response.body);
          if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            const renamed = renameKeys(outputAst, parsed, false);
            Object.assign(result, renamed);
          }
        } catch {
          // Body might not be JSON
        }
      }

      return result;
    }),
  };
};

/** Check if AST represents a raw payload type (string, blob, stream) */
function isRawPayload(ast: AST.AST): boolean {
  if (isStreamingType(ast)) return true;
  if (ast._tag === "StringKeyword") return true;
  if (AST.isUnion(ast)) return ast.types.some(isRawPayload);
  return false;
}

/**
 * Bidirectional key renaming based on jsonName annotation.
 * @param toWire - true: internal→wire (serialize), false: wire→internal (deserialize)
 */
function renameKeys(ast: AST.AST, value: unknown, toWire: boolean): unknown {
  if (value == null || typeof value !== "object") return value;

  if (Array.isArray(value)) {
    const elemAst = getArrayElementAST(unwrapUnion(ast));
    return elemAst ? value.map((item) => renameKeys(elemAst, item, toWire)) : value;
  }

  const props = getEncodedPropertySignatures(ast);
  if (!props.length) return value; // Maps, primitives

  const obj = value as Record<string, unknown>;
  const out: Record<string, unknown> = {};

  for (const prop of props) {
    const internal = String(prop.name);
    const wire = (prop.annotations?.[jsonNameSymbol] as string) ?? internal;
    const [srcKey, dstKey] = toWire ? [internal, wire] : [wire, internal];

    const v = obj[srcKey];
    if (v !== undefined) {
      out[dstKey] = renameKeys(prop.type, v, toWire);
    }
  }

  return out;
}
