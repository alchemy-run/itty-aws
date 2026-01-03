/**
 * AWS JSON Protocol Implementation (shared between 1.0 and 1.1)
 *
 * https://smithy.io/2.0/aws/protocols/aws-json-1_0-protocol.html
 * https://smithy.io/2.0/aws/protocols/aws-json-1_1-protocol.html
 *
 * Key characteristics:
 * - All requests are POST to "/" with JSON body
 * - X-Amz-Target header: {ServiceName}.{OperationName}
 * - HTTP binding traits are ignored
 * - Default timestamp format is epoch-seconds
 * - jsonName trait for custom property names
 *
 * Differences between 1.0 and 1.1:
 * - Content-Type: application/x-amz-json-1.0 vs application/x-amz-json-1.1
 * - Error serialization: 1.0 uses full shape-id, 1.1 uses shape name only
 *   (clients must accept either format for both protocols)
 */

import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as AST from "effect/SchemaAST";
import { ParseError } from "../error-parser.ts";
import type { Operation } from "../operation.ts";
import type { Protocol, ProtocolHandler } from "../protocol.ts";
import type { Request } from "../request.ts";
import type { Response } from "../response.ts";
import {
  getAwsApiService,
  getServiceVersion,
  isStreamingType,
} from "../traits.ts";
import { getEncodedPropertySignatures, getIdentifier } from "../util/ast.ts";
import {
  extractJsonErrorCode,
  extractJsonErrorData,
  sanitizeErrorCode,
} from "../util/error.ts";
import { readStreamAsText } from "../util/stream.ts";

/** AWS JSON 1.0 Protocol */
export const awsJson1_0Protocol = createAwsJsonProtocol("1.0");

/** AWS JSON 1.1 Protocol */
export const awsJson1_1Protocol = createAwsJsonProtocol("1.1");

/**
 * Create an AWS JSON protocol handler for the specified version.
 */
function createAwsJsonProtocol(version: "1.0" | "1.1"): Protocol {
  const contentType = `application/x-amz-json-${version}`;

  return (operation: Operation): ProtocolHandler => {
    const inputSchema = operation.input;
    const outputSchema = operation.output;
    const inputAst = inputSchema.ast;
    const outputAst = outputSchema.ast;

    // Pre-compute encoder (done once at init)
    const encodeInput = Schema.encode(inputSchema);

    // Extract operation target from the input schema's identifier
    const identifier = getIdentifier(inputAst) ?? "";
    // Remove "Request" or "Input" suffix to get operation name
    const operationName = identifier.replace(/(?:Request|Input)$/, "");

    // Build X-Amz-Target from the identifier structure
    const targetHeader = buildXAmzTarget(inputAst, operationName);

    // Check for streaming output member (event stream)
    let streamingOutputProp: { name: string } | undefined;
    for (const prop of getEncodedPropertySignatures(outputAst)) {
      if (isStreamingType(prop.type)) {
        streamingOutputProp = { name: String(prop.name) };
        break;
      }
    }

    return {
      serializeRequest: Effect.fn(function* (input: unknown) {
        // Encode the input via schema - handles all transformations
        const encoded = yield* encodeInput(input);

        const request: Request = {
          method: "POST",
          path: "/",
          query: {},
          headers: {
            "Content-Type": contentType,
            "X-Amz-Target": targetHeader,
          },
        };

        // Serialize body - always JSON, no HTTP bindings
        // Effect Schema handles jsonName key renaming via S.fromKey
        request.body = JSON.stringify(encoded ?? {});

        return request;
      }),

      deserializeResponse: Effect.fn(function* (response: Response) {
        // Handle streaming output (event stream) - return the raw stream
        if (streamingOutputProp) {
          return {
            [streamingOutputProp.name]: response.body,
          };
        }

        // Read body as text
        const bodyText = yield* readStreamAsText(response.body);

        // Parse JSON body - Effect Schema handles jsonName key renaming via S.fromKey
        if (bodyText) {
          try {
            const parsed = JSON.parse(bodyText);
            if (parsed && typeof parsed === "object") {
              return parsed as Record<string, unknown>;
            }
          } catch {
            return yield* new ParseError({
              message: `Failed to parse JSON body: ${bodyText}`,
            });
          }
        }

        return {};
      }),

      deserializeError: Effect.fn(function* (response: Response) {
        // Read body as text
        const bodyText = yield* readStreamAsText(response.body);

        // Parse JSON body
        let body: Record<string, unknown> = {};
        if (bodyText) {
          try {
            const parsed = JSON.parse(bodyText);
            if (parsed && typeof parsed === "object") {
              body = parsed as Record<string, unknown>;
            }
          } catch {
            return yield* new ParseError({
              message: `Failed to parse error JSON body: ${bodyText}`,
            });
          }
        }

        // Extract error code: check X-Amzn-Errortype header first, then body fields
        const rawErrorCode =
          response.headers["x-amzn-errortype"] ??
          response.headers["X-Amzn-Errortype"] ??
          extractJsonErrorCode(body);

        if (!rawErrorCode) {
          return yield* new ParseError({
            message: `No error code found in response. Headers: ${JSON.stringify(response.headers)}, Body: ${bodyText}`,
          });
        }

        // Sanitize the error code
        const errorCode = sanitizeErrorCode(rawErrorCode);

        // Extract data (remove __type and code fields)
        const data = extractJsonErrorData(body);

        return { errorCode, data };
      }),
    };
  };
}

/**
 * Build the X-Amz-Target header value.
 * Format: ServiceName_ServiceVersion.OperationName
 * Example: Kinesis_20131202.CreateStream
 */
function buildXAmzTarget(ast: AST.AST, operationName: string): string {
  const awsApiService = getAwsApiService(ast);
  const serviceVersion = getServiceVersion(ast);

  // Use sdkId as the service name (e.g., "Kinesis", "DynamoDB")
  const serviceName = awsApiService?.sdkId ?? "";

  // Format version: remove hyphens from date (2013-12-02 -> 20131202)
  const versionSuffix = serviceVersion
    ? `_${serviceVersion.replace(/-/g, "")}`
    : "";

  if (serviceName) {
    return `${serviceName}${versionSuffix}.${operationName}`;
  }

  return operationName;
}
