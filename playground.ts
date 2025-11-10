import * as Effect from "effect/Effect";
import { SQS } from "./src/services/sqs";
import { S3 } from "./src/services/s3";
import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";

import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { Chunk, Stream } from "effect";

const credentials = await fromNodeProviderChain()();

const sqs = new SQS({
  region: "us-east-1",
  credentials,
});
const s3 = new S3({
  region: "us-east-1",
  credentials,
});

const main = Effect.fn(function* () {
  const fs = yield* FileSystem.FileSystem;

  const id = "qioelqvwrocfowe";
  const key = "test.jpg";
  const bucket = yield* s3.createBucket({
    Bucket: id,
  });
  // const bucket = yield s3.deleteBucket({
  //   Bucket: id,
  // })
  // const image = yield* Effect.tryPromise(() => Bun.file("./test.jpg").bytes());
  // console.log(image);
  // const file = yield* s3.putObject({
  //   Bucket: id,
  //   Key: key,
  //   Body: image,
  // });
  // const file = yield* s3.deleteObject({
  //   Bucket: id,
  //   Key: key,
  // });
  const file = yield* s3.getObject({
    Bucket: id,
    Key: key,
  });

  const response = yield* file.Body?.pipe(Stream.run(fs.sink("output.jpg")))!;

  return yield* Effect.succeed(file);
});

console.log(
  await Effect.runPromiseExit(
    main().pipe(Effect.provide(NodeFileSystem.layer)),
  ),
);
