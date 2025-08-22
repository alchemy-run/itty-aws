/**
 * Enhanced JSON serializer for AWS protocols that handles:
 * - Binary data (Buffer/Uint8Array) conversion to base64
 * - Null value removal
 * - Special number values (NaN, Infinity)
 */

function isBinaryData(value: unknown): value is Buffer | Uint8Array {
  return (
    value instanceof Buffer ||
    value instanceof Uint8Array ||
    (typeof value === "object" &&
      value !== null &&
      "buffer" in value &&
      "byteLength" in value)
  );
}

function isBufferJsonObject(value: unknown): value is { type: "Buffer"; data: number[] } {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as any).type === "Buffer" &&
    Array.isArray((value as any).data) &&
    (value as any).data.every((item: unknown) => typeof item === "number")
  );
}

/**
 * JSON replacer function for AWS JSON protocols
 */
export function awsJsonReplacer(_key: string, value: unknown): unknown {
  // Handle binary data - convert to base64
  if (isBinaryData(value)) {
    return Buffer.from(value as Buffer | Uint8Array).toString("base64");
  }

  // Handle Buffer JSON objects (from Buffer.toJSON())
  if (isBufferJsonObject(value)) {
    return Buffer.from(value.data).toString("base64");
  }

  // Handle special number values
  if (typeof value === "number") {
    if (Number.isNaN(value)) return "NaN";
    if (value === Number.POSITIVE_INFINITY) return "Infinity";
    if (value === Number.NEGATIVE_INFINITY) return "-Infinity";
  }

  // Remove null values (convert to undefined so they're omitted)
  if (value === null) return undefined;

  return value;
}

/**
 * JSON replacer function for restJson1 protocol (simpler - no special number handling)
 */
export function restJsonReplacer(_key: string, value: unknown): unknown {
  // Handle binary data - convert to base64
  if (isBinaryData(value)) {
    return Buffer.from(value as Buffer | Uint8Array).toString("base64");
  }

  // Handle Buffer JSON objects (from Buffer.toJSON())
  if (isBufferJsonObject(value)) {
    return Buffer.from(value.data).toString("base64");
  }

  // Remove null values (convert to undefined so they're omitted)
  if (value === null) return undefined;

  return value;
}

/**
 * Stringify with AWS-compatible JSON serialization
 */
export function stringifyAwsJson(value: unknown): string {
  return JSON.stringify(value, awsJsonReplacer);
}

/**
 * Stringify with restJson1-compatible JSON serialization
 */
export function stringifyRestJson(value: unknown): string {
  return JSON.stringify(value, restJsonReplacer);
}