import type { Checksum } from "@smithy/types";
import { toBase64 } from "@smithy/util-base64";
import * as Effect from "effect/Effect";
import { getCrc32ChecksumAlgorithmFunction } from "../hash/crc32.ts";
import { getMd5ChecksumAlgorithmFunction } from "../hash/md5.ts";
import { toUint8Array } from "../hash/utf8.ts";
import type { Middleware } from "./middleware.ts";

/**
 * Middleware that computes a checksum for the request body.
 * Reads the algorithm from a specified header and adds the checksum to another header.
 * Defaults to CRC32 if no algorithm is specified.
 *
 * @param options.algorithmHeader - The header that contains the algorithm name (e.g., "x-amz-checksum-algorithm")
 */
export const HttpChecksum = (options: {
  algorithmHeader: string;
  algorithm?: string;
}): Middleware => ({
  request: Effect.fnUntraced(function* (request) {
    const body = request.unsignedBody;

    // TODO(sam): support streaming
    if (!body || body instanceof ReadableStream) {
      return request;
    }

    const algorithm =
      request.unsignedHeaders[options.algorithmHeader]?.toLowerCase() ??
      options.algorithm ??
      "crc32";
    const checksumHeader = algorithm === "md5" ? "content-md5" : `x-amz-checksum-${algorithm}`;

    let hasher: ChecksumConstructor;
    if (algorithm === "crc32") {
      hasher = getCrc32ChecksumAlgorithmFunction();
    } else if (algorithm === "md5") {
      hasher = getMd5ChecksumAlgorithmFunction();
    } else {
      return yield* Effect.die(new Error(`Unsupported checksum algorithm: ${algorithm}`));
    }
    // @ts-expect-error - TODO(sam): we need to be able to write the Record
    request.unsignedHeaders[checksumHeader] = toBase64(yield* stringHasher(hasher, body));
    return request;
  }),
});

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
