import type { ProtocolHandler, ServiceMetadata } from "./interface.ts";

export class AwsJson10Handler implements ProtocolHandler {
  readonly name = "awsJson1_0";
  readonly contentType = "application/x-amz-json-1.0";

  buildRequest(
    input: unknown,
    _action: string,
    _metadata: ServiceMetadata,
  ): string {
    // AWS JSON 1.0 requires empty input to be serialized as {}
    if (input === undefined || input === null) {
      return "{}";
    }
    return JSON.stringify(input, this.jsonReplacer);
  }

  getHeaders(
    action: string,
    metadata: ServiceMetadata,
    _body?: string,
  ): Record<string, string> {
    return {
      "Content-Type": this.contentType,
      "X-Amz-Target": `${metadata.targetPrefix}.${action}`,
      "User-Agent": "itty-aws",
    };
  }

  parseResponse(
    responseText: string,
    _statusCode: number,
    _metadata?: import("./interface.ts").ServiceMetadata,
  ): unknown {
    // Empty response body should return empty object
    if (!responseText || responseText.trim() === "") return {};
    return JSON.parse(responseText);
  }

  parseError(
    responseText: string,
    _statusCode: number,
    headers?: Headers,
  ): unknown {
    let errorBody: any;
    try {
      errorBody = JSON.parse(responseText);
    } catch {
      return { message: responseText };
    }

    // Extract error type according to AWS JSON 1.0 spec
    let errorType = this.extractErrorType(errorBody, headers);

    return {
      ...errorBody,
      __type: errorType,
    };
  }

  private jsonReplacer(_key: string, value: any): any {
    // Handle special numeric values as per AWS JSON 1.0 spec
    if (typeof value === "number") {
      if (value === Number.POSITIVE_INFINITY) return "Infinity";
      if (value === Number.NEGATIVE_INFINITY) return "-Infinity";
      if (Number.isNaN(value)) return "NaN";
    }
    return value;
  }

  private extractErrorType(
    errorBody: any,
    headers?: Headers,
  ): string | undefined {
    // AWS JSON 1.0 spec: check __type, X-Amzn-Errortype header, or code field
    if (errorBody.__type) {
      return this.sanitizeErrorType(errorBody.__type);
    }

    const errorTypeHeader = headers?.get("X-Amzn-Errortype");
    if (errorTypeHeader) {
      return this.sanitizeErrorType(errorTypeHeader);
    }

    if (errorBody.code) {
      return this.sanitizeErrorType(errorBody.code);
    }

    return undefined;
  }

  private sanitizeErrorType(errorType: string): string {
    // Remove common prefixes and suffixes as per AWS spec
    let sanitized = errorType;

    // Remove timestamp suffix (e.g., ":2023-01-01T00:00:00Z")
    const colonIndex = sanitized.indexOf(":");
    if (colonIndex !== -1) {
      sanitized = sanitized.substring(0, colonIndex);
    }

    // Remove hash suffix (e.g., "#ValidationException")
    const hashIndex = sanitized.indexOf("#");
    if (hashIndex !== -1) {
      sanitized = sanitized.substring(hashIndex + 1);
    }

    return sanitized;
  }
}
