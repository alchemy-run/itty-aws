import * as Stream from "effect/Stream";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import type { ServiceMetadata } from "../client.ts";
import type {
  ParsedError,
  ProtocolHandler,
  ProtocolRequest,
} from "./interface.ts";

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

    const hasBody = method !== "GET" && method !== "HEAD";

    const request: Writeable<ProtocolRequest> = {
      path: urlTemplate,
      method,
      headers: {
        "User-Agent": "itty-aws",
      },
    };

    // Only set Content-Type for methods that have a body
    if (hasBody) {
      request.headers["Content-Type"] =
        operationMeta?.inputTraits?.Body === "httpStreaming"
          ? "application/octet-stream"
          : this.contentType;
    }

    let body: Record<string, unknown> = {};
    let streamingBody = false;

    for (const [key, value] of Object.entries(input)) {
      const type = operationMeta.inputTraits?.[key];
      if (type == null) {
        request.path = request.path.replace(
          new RegExp(`\\{${key}\\+?\\}`, "g"),
          value as string,
        );
      } else if (type === "httpPayload") {
        body[key] = value;
      } else if (type === "httpStreaming") {
        streamingBody = true;
        request.body = value as any;
      } else {
        request.headers[type] = value as string;
      }
    }

    // Only set body for methods that support it
    if (!streamingBody && hasBody) {
      request.body = builder.build(body);
    }

    return Promise.resolve(request);
  }

  async parseResponse(
    response: Response,
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

    for (const [key, value] of Object.entries(
      operationMeta.outputTraits ?? {},
    )) {
      if (value !== "httpPayload" && value !== "httpStreaming") {
        headerData[key] = headers?.get(value.toLowerCase());
      }
    }

    try {
      if (operationMeta?.outputTraits?.Body === "httpStreaming") {
        return {
          ...headerData,
          Body: Stream.fromReadableStream(
            () => response.body!,
            (error) => new Error(`Stream error: ${error}`),
          ),
        };
      } else {
        const parser = new XMLParser();
        return {
          ...headerData,
          ...parser.parse(await response.text()),
        };
      }
    } catch {
      return { data: await response.text() };
    }
  }

  async parseError(
    response: Response,
    statusCode: number,
    headers: Headers | undefined,
    operation: string,
  ): Promise<ParsedError> {
    const responseText = await response.text();
    const parser = new XMLParser();
    const error = responseText != null ? parser.parse(responseText) : null;
    const notFoundMappings: Record<string, string | undefined> = {
      HeadBucket: "NoSuchBucket",
      HeadObject: "NoSuchKey",
    };
    return {
      errorType:
        (error?.Error?.Code ?? statusCode === 404)
          ? (notFoundMappings[operation] ?? "NotFound")
          : "UnknownError",
      message:
        (error?.Error?.Message ?? statusCode === 404)
          ? "Not Found"
          : "Unknown error",
      requestId:
        headers?.get("x-amzn-requestid") ||
        headers?.get("x-amz-request-id") ||
        undefined,
    };
  }
}
