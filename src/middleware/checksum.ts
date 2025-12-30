import type { Checksum } from "@smithy/types";
import * as Effect from "effect/Effect";
import { getCrc32ChecksumAlgorithmFunction } from "../hash/crc32.ts";
import { toUint8Array } from "../hash/utf8.ts";
import type { Middleware } from "../middleware.ts";

export const ChecksumBody = (options: {
  header: string;
  algorithm: string;
  body: string | Uint8Array | ReadableStream;
}): Middleware => ({
  request: Effect.fnUntraced(function* (request) {
    const body = options.body;
    const algorithm = options.algorithm;
    const header = options.header;

    // TODO(sam): support streaming

    if (algorithm === "crc32") {
      const checksum = yield* stringHasher(getCrc32ChecksumAlgorithmFunction(), body);
      // @ts-expect-error - TODO(sam): we need to be able to write the Record
      request.unsignedHeaders[header] = checksum.toBase64(); // TODO(sam): base64 encoding may be wrong
      return request;
    }
    return yield* Effect.die(new Error(`Unsupported algorithm: ${algorithm}`));
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
