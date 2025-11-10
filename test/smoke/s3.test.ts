import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { describe, expect, it } from "@effect/vitest";
import { Console, Effect, Stream } from "effect";
import { S3 } from "../../src/services/s3/index.ts";
import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";
import path from "pathe";

const credentials = await fromNodeProviderChain()();

describe("S3 Smoke Tests", () => {
  const client = new S3({ region: "us-east-1", credentials });
  const BUCKET_NAME = "alchemy-test-bucket-vikmplkp";
  const FILE_KEY = "test.jpg";
  const dirname = path.join(import.meta.dirname, "s3");
  const inputFilePath = path.join(dirname, "input.jpg");
  const outputFilePath = path.join(dirname, "output.jpg");

  it.live("perform file upload and download", () =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem;

      yield* Console.log(
        `Starting DynamoDB smoke test with table: ${BUCKET_NAME}`,
      );

      yield* Console.log("Step 1: Create bucket");
      yield* client.createBucket({ Bucket: BUCKET_NAME });

      yield* Console.log("Step 2: Upload a file");
      const rawInput = yield* fs.readFile(inputFilePath);
      yield* client.putObject({
        Bucket: BUCKET_NAME,
        Key: FILE_KEY,
        Body: rawInput,
      });

      yield* Console.log("Step 3: Download the file");
      const file = yield* client.getObject({
        Bucket: BUCKET_NAME,
        Key: FILE_KEY,
      });
      yield* file.Body!.pipe(Stream.run(fs.sink(outputFilePath)));

      yield* Console.log("Step 4: compare the 2 files");
      const rawOutput = yield* fs.readFile(outputFilePath);
      expect(rawInput).toEqual(rawOutput);

      yield* Console.log("Step 5: clean up");
      yield* client.deleteBucket({ Bucket: BUCKET_NAME });
      yield* fs.remove(outputFilePath);
    }).pipe(Effect.provide(NodeFileSystem.layer)),
  );
});
