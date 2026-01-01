/**
 * AWS JSON 1.0 Protocol Implementation
 *
 * https://smithy.io/2.0/aws/protocols/aws-json-1_0-protocol.html
 *
 * Key characteristics:
 * - All requests are POST to "/" with JSON body
 * - X-Amz-Target header: {ServiceName}.{OperationName}
 * - Content-Type: application/x-amz-json-1.0
 * - HTTP binding traits are ignored
 * - Default timestamp format is epoch-seconds
 * - jsonName trait for custom property names
 */

import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as AST from "effect/SchemaAST";
import type { Operation } from "../operation.ts";
import type { Protocol, ProtocolHandler } from "../protocol.ts";
import type { Request } from "../request.ts";
import type { Response } from "../response.ts";
import { getAwsApiService, getAwsAuthSigv4, jsonNameSymbol } from "../traits.ts";
import {
  getArrayElementAST,
  getEncodedPropertySignatures,
  getIdentifier,
  unwrapUnion,
} from "../util/ast.ts";
import { readStreamAsText } from "../util/stream.ts";

export const awsJson1_0Protocol: Protocol = (operation: Operation): ProtocolHandler => {
  const inputSchema = operation.input;
  const outputSchema = operation.output;
  const inputAst = inputSchema.ast;
  const outputAst = outputSchema.ast;

  // Pre-compute encoder (done once at init)
  const encodeInput = Schema.encode(inputSchema);

  // Extract operation target from the input schema's identifier
  // Format: ServiceName.OperationName (e.g., "DynamoDB_20120810.PutItem")
  const identifier = getIdentifier(inputAst) ?? "";
  // Remove "Request" or "Input" suffix to get operation name
  const operationName = identifier.replace(/(?:Request|Input)$/, "");

  // Build X-Amz-Target from the identifier structure
  // The identifier usually follows pattern: OperationNameRequest
  // We need to find the service name from annotations
  const targetHeader = buildXAmzTarget(inputAst, operationName);

  return {
    serializeRequest: Effect.fn(function* (input: unknown) {
      // Encode the input via schema - handles all transformations
      const encoded = yield* encodeInput(input);

      const request: Request = {
        method: "POST",
        path: "/",
        query: {},
        headers: {
          "Content-Type": "application/x-amz-json-1.0",
          "X-Amz-Target": targetHeader,
        },
      };

      // Serialize body - always JSON, no HTTP bindings
      // Empty input becomes empty JSON object
      const body = renameKeys(inputAst, encoded, true);
      request.body = JSON.stringify(body ?? {});

      return request;
    }),

    deserializeResponse: Effect.fn(function* (response: Response) {
      // Read body as text
      const bodyText = yield* readStreamAsText(response.body);

      // Parse JSON body and decode
      if (bodyText) {
        try {
          const parsed = JSON.parse(bodyText);
          if (parsed && typeof parsed === "object") {
            return renameKeys(outputAst, parsed, false) as Record<string, unknown>;
          }
        } catch {
          // Body might not be valid JSON
        }
      }

      return {};
    }),
  };
};

/**
 * Build the X-Amz-Target header value.
 * Format: ServiceShapeName.OperationName
 *
 * We extract this from the schema annotations which contain aws.api#service
 * and the operation identifier.
 */
function buildXAmzTarget(ast: AST.AST, operationName: string): string {
  // Use the proper trait helpers from traits.ts
  const awsAuthSigv4 = getAwsAuthSigv4(ast);
  const awsApiService = getAwsApiService(ast);

  // For AWS JSON protocols, the target uses the service shape name
  // which typically matches the sigv4 signing name or can be derived
  // from the sdkId. Fall back to a default pattern if not available.
  const serviceName = awsAuthSigv4?.name ?? awsApiService?.sdkId ?? "";

  // If we have a service name, format it properly
  if (serviceName) {
    // The service name for X-Amz-Target is typically the service shape identifier
    // For DynamoDB it's "DynamoDB_20120810", for SQS it's "AmazonSQS", etc.
    // This comes from the service shape ID in the model
    return `${serviceName}.${operationName}`;
  }

  // Fallback: just use operation name (shouldn't happen in practice)
  return operationName;
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
    // When deserializing (toWire=false), convert null to undefined
    if (v === null && !toWire) {
      continue; // Skip null values, treating them as undefined
    }
    if (v !== undefined) {
      out[dstKey] = renameKeys(prop.type, v, toWire);
    }
  }

  return out;
}
