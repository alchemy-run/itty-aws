import type { ProtocolHandler, ServiceMetadata } from "./interface.ts";

function customJsonStringify(value: unknown): string {
  return JSON.stringify(value, (_key, val) => {
    if (typeof val === "number") {
      if (Number.isNaN(val)) return "NaN";
      if (val === Number.POSITIVE_INFINITY) return "Infinity";
      if (val === Number.NEGATIVE_INFINITY) return "-Infinity";
    }
    return val;
  });
}

function extractErrorType(
  errorData: any,
  headers?: Headers,
): string | undefined {
  // Check for error type in multiple locations per AWS JSON 1.1 spec
  if (errorData.__type) {
    return sanitizeErrorType(errorData.__type);
  }
  if (errorData.code) {
    return sanitizeErrorType(errorData.code);
  }
  if (headers?.get("X-Amzn-Errortype")) {
    return sanitizeErrorType(headers.get("X-Amzn-Errortype")!);
  }
  return undefined;
}

function sanitizeErrorType(errorType: string): string {
  // Remove namespace prefixes as per AWS spec
  const colonIndex = errorType.indexOf(":");
  if (colonIndex !== -1) {
    return errorType.substring(colonIndex + 1);
  }
  // Remove hash fragments
  const hashIndex = errorType.indexOf("#");
  if (hashIndex !== -1) {
    return errorType.substring(hashIndex + 1);
  }
  return errorType;
}

export class AwsJson11Handler implements ProtocolHandler {
  readonly name = "awsJson1_1";
  readonly contentType = "application/x-amz-json-1.1";

  buildRequest(
    input: unknown,
    _action: string,
    _metadata: ServiceMetadata,
  ): string {
    // Ensure empty input becomes {}
    const payload = input === null || input === undefined ? {} : input;
    return customJsonStringify(payload);
  }

  getHeaders(
    action: string,
    metadata: ServiceMetadata,
    body?: string,
  ): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": this.contentType,
      "X-Amz-Target": `${metadata.targetPrefix}.${action}`,
      "User-Agent": "itty-aws",
    };

    // Add Content-Length if body is provided
    if (body !== undefined) {
      headers["Content-Length"] = new TextEncoder()
        .encode(body)
        .length.toString();
    }

    return headers;
  }

  parseResponse(responseText: string, _statusCode: number, _metadata?: import("./interface.ts").ServiceMetadata): unknown {
    if (!responseText || responseText.trim() === "") return {};

    try {
      return JSON.parse(responseText);
    } catch (error) {
      throw new Error(
        `Invalid JSON response: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  parseError(
    responseText: string,
    _statusCode: number,
    headers?: Headers,
  ): unknown {
    let errorData: any;

    try {
      errorData = JSON.parse(responseText);
    } catch {
      errorData = { message: responseText };
    }

    // Extract and add error type from multiple sources
    const errorType = extractErrorType(errorData, headers);
    if (errorType && !errorData.__type) {
      errorData.__type = errorType;
    }

    return errorData;
  }
}
