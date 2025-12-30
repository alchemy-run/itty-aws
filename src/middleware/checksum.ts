import type { Checksum } from "@smithy/types";
import * as Effect from "effect/Effect";
import { getCrc32ChecksumAlgorithmFunction } from "../hash/crc32.ts";
import { toUint8Array } from "../hash/utf8.ts";
import type { Middleware } from "../middleware.ts";

/**
 * Middleware that computes a checksum for the request body.
 * Reads the algorithm from a specified header and adds the checksum to another header.
 *
 * @param options.algorithmHeader - The header that contains the algorithm name (e.g., "x-amz-checksum-algorithm")
 */
export const HttpChecksum = (options: { algorithmHeader: string }): Middleware => ({
  request: Effect.fnUntraced(function* (request) {
    const algorithmRaw = request.unsignedHeaders[options.algorithmHeader];
    if (!algorithmRaw) {
      // No algorithm specified, skip checksum
      return request;
    }

    const algorithm = algorithmRaw.toLowerCase();
    const body = request.unsignedBody;

    // TODO(sam): support streaming
    if (!body || body instanceof ReadableStream) {
      return request;
    }

    const checksumHeader = `x-amz-checksum-${algorithm}`;

    if (algorithm === "crc32") {
      const checksum = yield* stringHasher(getCrc32ChecksumAlgorithmFunction(), body);
      // @ts-expect-error - TODO(sam): we need to be able to write the Record
      request.unsignedHeaders[checksumHeader] = checksum.toBase64();
      return request;
    }

    return yield* Effect.die(new Error(`Unsupported checksum algorithm: ${algorithm}`));
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
