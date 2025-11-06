import * as FastCheck from "effect/FastCheck";
import type { ServiceMetadata } from "../client.ts";
import type {
  ParsedError,
  ProtocolHandler,
  ProtocolRequest,
} from "./interface.ts";
import { XMLBuilder, XMLParser } from "fast-xml-parser";

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export class RestXmlHandler implements ProtocolHandler {
  readonly name = "restXml";
  readonly contentType = "application/xml";

  buildHttpRequest(
    input: Record<string, unknown>,
    operation: string,
    metadata: ServiceMetadata,
  ): Promise<ProtocolRequest> {
    const builder = new XMLBuilder();

    const operationMeta = metadata?.operations?.[operation];
    if (operationMeta == null || typeof operationMeta === "string") {
      throw new Error("idk man?");
    }

    const [method, urlTemplate] = operationMeta.http?.split?.(/ (.+)/) as [
      string,
      string,
    ];

    const request: Writeable<ProtocolRequest> = {
      path: urlTemplate,
      method,
      headers: { "Content-Type": this.contentType, "User-Agent": "itty-aws" },
    };

    let body = {};

    for (const [key, value] of Object.entries(input)) {
      const type = operationMeta.members?.[key];
      if (type == null) {
        request.path = request.path.replace(
          new RegExp(`\{${key}\+?\}`),
          value as string,
        );
      } else if (type === "httpPayload") {
        body[key] = value;
      } else {
        request.headers[type] = value as string;
      }
    }

    request.body = builder.build(body);

    return Promise.resolve(request);
  }

  parseResponse(
    responseText: string,
    _statusCode: number,
    metadata?: ServiceMetadata,
    headers?: Headers,
    operation?: string,
  ): Promise<unknown> {
    const operationMeta = metadata?.operations?.[operation!];
    if (operationMeta == null || typeof operationMeta === "string") {
      throw new Error("idk man?");
    }

    let headerData: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(operationMeta.traits ?? {})) {
      if (value === "httpPayload") {
        continue;
      } else {
        headerData[key] = headers?.get(value.toLowerCase());
      }
    }

    if (!responseText) return Promise.resolve(headerData);
    try {
      const parser = new XMLParser();
      return Promise.resolve({
        ...parser.parse(responseText),
        ...headerData,
      });
    } catch {
      return Promise.resolve({ data: responseText });
    }
  }

  parseError(
    responseText: string,
    _statusCode: number,
    headers?: Headers,
  ): ParsedError {
    const parser = new XMLParser();
    const error = responseText != null ? parser.parse(responseText) : null;
    return {
      errorType: error.Error.Code ?? "UnknownError",
      message: error.Error.Message ?? "Unknown error",
      requestId:
        headers?.get("x-amzn-requestid") ||
        headers?.get("x-amz-request-id") ||
        undefined,
    };
  }
}
