import type { Checksum } from "@smithy/types";
import { toBase64 } from "@smithy/util-base64";
import * as Effect from "effect/Effect";
import type * as S from "effect/Schema";
import { getAwsProtocolsHttpChecksum } from "../traits.ts";
import { getCrc32ChecksumAlgorithmFunction } from "../hash/crc32.ts";
import { getMd5ChecksumAlgorithmFunction } from "../hash/md5.ts";
import { toUint8Array } from "../hash/utf8.ts";
import type { Request as ProtocolRequest } from "../request.ts";

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
// Protocol-v2 Compatible Checksum Functions
// =============================================================================

/**
 * Apply checksum to a protocol Request based on schema annotations.
 * Uses the aws.protocols#httpChecksum trait to determine checksum requirements.
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

    // No body or streaming body - can't compute checksum
    if (!body || body instanceof ReadableStream) {
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

    // Determine algorithm: use specified, or default to MD5 for required checksums
    const algorithm = specifiedAlgorithm ?? "md5";
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

    // Compute checksum
    const checksum = toBase64(yield* stringHasher(hasher, body));

    // Return new request with checksum header
    return {
      ...request,
      headers: {
        ...request.headers,
        [checksumHeader]: checksum,
      },
    };
  });
