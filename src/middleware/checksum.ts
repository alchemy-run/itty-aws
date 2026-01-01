import type { Checksum } from "@smithy/types";
import { toBase64 } from "@smithy/util-base64";
import * as Effect from "effect/Effect";
import type * as S from "effect/Schema";
import { getCrc32ChecksumAlgorithmFunction } from "../hash/crc32.ts";
import { getMd5ChecksumAlgorithmFunction } from "../hash/md5.ts";
import { toUint8Array } from "../hash/utf8.ts";
import type { Request as ProtocolRequest } from "../request.ts";
import { getAwsProtocolsHttpChecksum } from "../traits.ts";

export type SourceData = string | ArrayBuffer | ArrayBufferView;

export interface ChecksumConstructor {
  new (secret?: SourceData): Checksum;
}

export const stringHasher = (checksumAlgorithmFn: ChecksumConstructor, body: any) =>
  Effect.promise(async () => {
    const hash = new checksumAlgorithmFn();
    hash.update(toUint8Array(body || ""));
    return hash.digest();
  });

// =============================================================================
// AWS Chunked Encoding with Trailing Checksum
// =============================================================================

/**
 * Create an aws-chunked encoded stream with trailing checksum.
 * Format: <chunk-size-hex>\r\n<chunk-data>\r\n...0\r\n<trailer>\r\n\r\n
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-streaming.html
 */
function createAwsChunkedStream(
  source: ReadableStream<Uint8Array>,
  checksumAlgorithmFn: ChecksumConstructor,
  checksumLocationName: string,
): ReadableStream<Uint8Array> {
  const hash = new checksumAlgorithmFn();
  const reader = source.getReader();
  const encoder = new TextEncoder();

  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await reader.read();

      if (done) {
        // Send final chunk (size 0) and trailer with checksum
        const checksum = toBase64(await hash.digest());
        const trailer = `0\r\n${checksumLocationName}:${checksum}\r\n\r\n`;
        controller.enqueue(encoder.encode(trailer));
        controller.close();
        return;
      }

      // Update hash with chunk data
      hash.update(value);

      // Write chunk in aws-chunked format: <hex-size>\r\n<data>\r\n
      const chunkSize = value.byteLength.toString(16);
      const header = encoder.encode(`${chunkSize}\r\n`);
      const footer = encoder.encode("\r\n");

      // Combine header + data + footer
      const combined = new Uint8Array(header.length + value.length + footer.length);
      combined.set(header, 0);
      combined.set(value, header.length);
      combined.set(footer, header.length + value.length);

      controller.enqueue(combined);
    },
    cancel() {
      reader.cancel();
    },
  });
}

// =============================================================================
// Protocol-v2 Compatible Checksum Functions
// =============================================================================

/**
 * Apply checksum to a protocol Request based on schema annotations.
 * Uses the aws.protocols#httpChecksum trait to determine checksum requirements.
 *
 * For streaming bodies, uses aws-chunked encoding with trailing checksum.
 * For non-streaming bodies, computes checksum directly and adds header.
 *
 * @param schema - The request schema with checksum annotations
 * @param request - The protocol request to add checksum to
 * @returns Effect that produces the request with checksum header added
 */
export const applyHttpChecksum = (
  schema: S.Schema.AnyNoContext,
  request: ProtocolRequest,
): Effect.Effect<ProtocolRequest> =>
  Effect.gen(function* () {
    const checksumTrait = getAwsProtocolsHttpChecksum(schema.ast);

    // No checksum trait - return request as-is
    if (!checksumTrait) {
      return request;
    }

    const body = request.body;

    // No body - skip
    if (!body) {
      return request;
    }

    // Check if checksum is required or if algorithm was specified
    const algorithmHeader = checksumTrait.requestAlgorithmMember
      ? `x-amz-sdk-checksum-algorithm`
      : undefined;
    const specifiedAlgorithm = algorithmHeader
      ? request.headers[algorithmHeader]?.toLowerCase()
      : undefined;

    // If checksum not required and no algorithm specified, skip
    if (!checksumTrait.requestChecksumRequired && !specifiedAlgorithm) {
      return request;
    }

    // Determine algorithm: use specified, or default to CRC32 for streaming, MD5 for non-streaming
    const isStreaming = body instanceof ReadableStream;
    const algorithm = specifiedAlgorithm ?? (isStreaming ? "crc32" : "md5");
    const checksumHeader = algorithm === "md5" ? "Content-MD5" : `x-amz-checksum-${algorithm}`;

    // Skip if checksum header already provided
    if (request.headers[checksumHeader] || request.headers[checksumHeader.toLowerCase()]) {
      return request;
    }

    // Get the hasher
    let hasher: ChecksumConstructor;
    if (algorithm === "crc32") {
      hasher = getCrc32ChecksumAlgorithmFunction();
    } else if (algorithm === "md5") {
      hasher = getMd5ChecksumAlgorithmFunction();
    } else {
      // Unsupported algorithm - skip checksum
      return request;
    }

    // Handle streaming body with aws-chunked encoding
    if (isStreaming) {
      const chunkedBody = createAwsChunkedStream(body, hasher, checksumHeader);
      const contentLength = request.headers["Content-Length"] || request.headers["content-length"];

      return {
        ...request,
        body: chunkedBody,
        headers: {
          ...request.headers,
          "Content-Encoding": request.headers["Content-Encoding"]
            ? `${request.headers["Content-Encoding"]},aws-chunked`
            : "aws-chunked",
          "Transfer-Encoding": "chunked",
          "x-amz-decoded-content-length": contentLength,
          "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
          "x-amz-trailer": checksumHeader,
          // Remove content-length as it's now chunked
          "Content-Length": undefined as unknown as string,
        },
      };
    }

    // Non-streaming: compute checksum directly
    const checksum = toBase64(yield* stringHasher(hasher, body));

    return {
      ...request,
      headers: {
        ...request.headers,
        [checksumHeader]: checksum,
      },
    };
  });
