import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";
import { describe, expect, it } from "@effect/vitest";
import { Console, Effect, Stream } from "effect";
import path from "pathe";
import { S3 } from "../../src/services/s3/index.ts";

const credentials = await fromNodeProviderChain()();

describe.sequential("S3 Smoke Tests", () => {
  const client = new S3({ region: "us-east-1", credentials });
  const BUCKET_NAME = "alchemy-test-bucket-vikmplkp";
  const FILE_KEY = "test.jpg";
  const dirname = path.join(import.meta.dirname, "s3");
  const inputFilePath = path.join(dirname, "input.jpg");
  const outputFilePath = path.join(dirname, "output.jpg");

  it.live(
    "perform file upload and download",
    () =>
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
        yield* client.deleteObject({
          Bucket: BUCKET_NAME,
          Key: FILE_KEY,
        });
        yield* client.deleteBucket({ Bucket: BUCKET_NAME });
        yield* fs.remove(outputFilePath);
      }).pipe(Effect.provide(NodeFileSystem.layer)),
    { timeout: 600_000 },
  );

  it.live(
    "headBucket and headObject",
    () =>
      Effect.gen(function* () {
        const fs = yield* FileSystem.FileSystem;

        yield* Console.log("Step 1: Create bucket");
        yield* client.createBucket({ Bucket: BUCKET_NAME });

        yield* Console.log("Step 2: HeadBucket");
        const bucketHead = yield* client.headBucket({ Bucket: BUCKET_NAME });
        expect(bucketHead.BucketRegion).toBe("us-east-1");

        yield* Console.log("Step 3: Upload a file");
        const rawInput = yield* fs.readFile(inputFilePath);
        yield* client.putObject({
          Bucket: BUCKET_NAME,
          Key: FILE_KEY,
          Body: rawInput,
          ContentType: "image/jpeg",
        });

        yield* Console.log("Step 4: HeadObject");
        const objectHead = yield* client.headObject({
          Bucket: BUCKET_NAME,
          Key: FILE_KEY,
        });
        expect(objectHead.ContentType).toBe("image/jpeg");
        expect(objectHead.ContentLength).toBe(String(rawInput.byteLength));

        yield* Console.log("Step 5: clean up");
        yield* client.deleteObject({
          Bucket: BUCKET_NAME,
          Key: FILE_KEY,
        });
        yield* client.deleteBucket({ Bucket: BUCKET_NAME });
      }).pipe(Effect.provide(NodeFileSystem.layer)),
    { timeout: 1000000 },
  );

  it.live(
    "operations on non-existent bucket return NoSuchBucket",
    () =>
      Effect.gen(function* () {
        const NON_EXISTENT_BUCKET =
          "this-bucket-definitely-does-not-exist-xyz123";

        yield* Console.log("Test 1: headBucket on non-existent bucket");
        const headBucketResult = yield* client
          .headBucket({ Bucket: NON_EXISTENT_BUCKET })
          .pipe(
            Effect.flip,
            Effect.tap((error) => Console.log("headBucket error:", error._tag)),
          );
        expect(headBucketResult._tag).toBe("NotFound");

        yield* Console.log("Test 2: getBucketLocation on non-existent bucket");
        const getBucketLocationResult = yield* client
          .getBucketLocation({ Bucket: NON_EXISTENT_BUCKET })
          .pipe(
            Effect.flip,
            Effect.tap((error) =>
              Console.log("getBucketLocation error:", error._tag),
            ),
          );
        expect(getBucketLocationResult._tag).toBe("NoSuchBucket");

        yield* Console.log("Test 3: listObjectsV2 on non-existent bucket");
        const listObjectsResult = yield* client
          .listObjectsV2({ Bucket: NON_EXISTENT_BUCKET })
          .pipe(
            Effect.flip,
            Effect.tap((error) =>
              Console.log("listObjectsV2 error:", error._tag),
            ),
          );
        expect(listObjectsResult._tag).toBe("NoSuchBucket");

        yield* Console.log("Test 4: putObject on non-existent bucket");
        const putObjectResult = yield* client
          .putObject({
            Bucket: NON_EXISTENT_BUCKET,
            Key: "test.txt",
            Body: "test content",
          })
          .pipe(
            Effect.flip,
            Effect.tap((error) => Console.log("putObject error:", error._tag)),
          );
        expect(putObjectResult._tag).toBe("NoSuchBucket");

        yield* Console.log("Test 5: getObject on non-existent bucket");
        const getObjectResult = yield* client
          .getObject({ Bucket: NON_EXISTENT_BUCKET, Key: "test.txt" })
          .pipe(
            Effect.flip,
            Effect.tap((error) => Console.log("getObject error:", error._tag)),
          );
        expect(getObjectResult._tag).toBe("NoSuchBucket");
      }),
    { timeout: 600_000 },
  );

  it.live(
    "object operations on non-existent key return NoSuchKey",
    () =>
      Effect.gen(function* () {
        const NON_EXISTENT_KEY =
          "this-key-definitely-does-not-exist-xyz123.txt";

        yield* Console.log("Step 1: Create bucket");
        yield* client.createBucket({ Bucket: BUCKET_NAME });

        try {
          yield* Console.log("Test 1: getObject on non-existent key");
          const getObjectResult = yield* client
            .getObject({ Bucket: BUCKET_NAME, Key: NON_EXISTENT_KEY })
            .pipe(
              Effect.flip,
              Effect.tap((error) =>
                Console.log("getObject error:", error._tag),
              ),
            );
          expect(getObjectResult._tag).toBe("NoSuchKey");

          yield* Console.log("Test 2: headObject on non-existent key");
          const headObjectResult = yield* client
            .headObject({ Bucket: BUCKET_NAME, Key: NON_EXISTENT_KEY })
            .pipe(
              Effect.flip,
              Effect.tap((error) =>
                Console.log("headObject error:", error._tag),
              ),
            );
          // headObject returns 404 which maps to NotFound for missing keys
          expect(headObjectResult._tag).toBe("NotFound");

          yield* Console.log("Test 3: getObjectAcl on non-existent key");
          const getObjectAclResult = yield* client
            .getObjectAcl({ Bucket: BUCKET_NAME, Key: NON_EXISTENT_KEY })
            .pipe(
              Effect.flip,
              Effect.tap((error) =>
                Console.log("getObjectAcl error:", error._tag),
              ),
            );
          expect(getObjectAclResult._tag).toBe("NoSuchKey");

          yield* Console.log("Test 4: getObjectTagging on non-existent key");
          const getObjectTaggingResult = yield* client
            .getObjectTagging({ Bucket: BUCKET_NAME, Key: NON_EXISTENT_KEY })
            .pipe(
              Effect.flip,
              Effect.tap((error) =>
                Console.log("getObjectTagging error:", error._tag),
              ),
            );
          expect(getObjectTaggingResult._tag).toBe("NoSuchKey");
        } finally {
          yield* Console.log("Cleanup: delete bucket");
          yield* client.deleteBucket({ Bucket: BUCKET_NAME });
        }
      }),
    { timeout: 600_000 },
  );

  it.live(
    "createBucket on bucket owned by another account returns BucketAlreadyExists",
    () =>
      Effect.gen(function* () {
        // Well-known bucket names that are likely owned by AWS or other accounts
        const WELL_KNOWN_BUCKET = "aws";

        yield* Console.log(
          "Test: createBucket on bucket owned by another account",
        );
        const createBucketResult = yield* client
          .createBucket({ Bucket: WELL_KNOWN_BUCKET })
          .pipe(
            Effect.flip,
            Effect.tap((error) =>
              Console.log("createBucket error:", error._tag),
            ),
          );
        expect(createBucketResult._tag).toBe("BucketAlreadyExists");
      }),
    { timeout: 600_000 },
  );

  it.live(
    "createBucket twice on own bucket returns BucketAlreadyOwnedByYou",
    () =>
      Effect.gen(function* () {
        // Use us-west-2 because us-east-1 has legacy behavior that returns 200 OK
        // when recreating a bucket you already own
        const westClient = new S3({ region: "us-west-2", credentials });
        const WEST_BUCKET_NAME = "alchemy-test-bucket-west-vikmplkp";

        yield* Console.log("Step 1: Create bucket first time in us-west-2");
        yield* westClient.createBucket({
          Bucket: WEST_BUCKET_NAME,
          CreateBucketConfiguration: {
            LocationConstraint: "us-west-2",
          },
        });

        try {
          yield* Console.log("Step 2: Create same bucket again");
          const createBucketResult = yield* westClient
            .createBucket({
              Bucket: WEST_BUCKET_NAME,
              CreateBucketConfiguration: {
                LocationConstraint: "us-west-2",
              },
            })
            .pipe(
              Effect.flip,
              Effect.tap((error) =>
                Console.log("createBucket error:", error._tag),
              ),
            );
          expect(createBucketResult._tag).toBe("BucketAlreadyOwnedByYou");
        } finally {
          yield* Console.log("Cleanup: delete bucket");
          yield* westClient.deleteBucket({ Bucket: WEST_BUCKET_NAME });
        }
      }),
    { timeout: 60_000 },
  );

  it.live(
    "putObject with invalid checksum returns InvalidRequest",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Step 1: Create bucket");
        yield* client.createBucket({ Bucket: BUCKET_NAME });

        try {
          yield* Console.log(
            "Test: putObject with mismatched checksum should fail",
          );
          // Provide a checksum that doesn't match the actual content
          const putResult = yield* client
            .putObject({
              Bucket: BUCKET_NAME,
              Key: "test-checksum.txt",
              Body: "this is the actual content",
              // Provide a wrong CRC32 checksum (base64 encoded)
              ChecksumCRC32: "AAAAAAAA",
            })
            .pipe(
              Effect.flip,
              Effect.tap((error) =>
                Console.log("putObject error:", error._tag),
              ),
            );
          // AWS returns InvalidRequest when checksum is malformed/invalid
          expect(putResult._tag).toBe("InvalidRequest");
        } finally {
          yield* Console.log("Cleanup: delete bucket");
          yield* client
            .deleteObject({ Bucket: BUCKET_NAME, Key: "test-checksum.txt" })
            .pipe(Effect.ignore);
          yield* client.deleteBucket({ Bucket: BUCKET_NAME });
        }
      }),
    { timeout: 60_000 },
  );

  it.live(
    "putObject with If-None-Match on existing object returns PreconditionFailed",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Step 1: Create bucket");
        yield* client.createBucket({ Bucket: BUCKET_NAME });

        try {
          yield* Console.log("Step 2: Upload initial object");
          yield* client.putObject({
            Bucket: BUCKET_NAME,
            Key: "existing-object.txt",
            Body: "initial content",
          });

          yield* Console.log(
            "Test: putObject with If-None-Match=* on existing object should fail",
          );
          // If-None-Match: * means "only upload if object doesn't exist"
          const putResult = yield* client
            .putObject({
              Bucket: BUCKET_NAME,
              Key: "existing-object.txt",
              Body: "new content",
              IfNoneMatch: "*",
            })
            .pipe(
              Effect.flip,
              Effect.tap((error) =>
                Console.log("putObject error:", error._tag),
              ),
            );
          // AWS returns 412 Precondition Failed
          expect(putResult._tag).toBe("PreconditionFailed");
        } finally {
          yield* Console.log("Cleanup: delete object and bucket");
          yield* client
            .deleteObject({ Bucket: BUCKET_NAME, Key: "existing-object.txt" })
            .pipe(Effect.ignore);
          yield* client.deleteBucket({ Bucket: BUCKET_NAME });
        }
      }),
    { timeout: 60_000 },
  );

  it.live(
    "listParts on aborted upload returns NoSuchKey",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Step 1: Create bucket");
        yield* client.createBucket({ Bucket: BUCKET_NAME });

        try {
          yield* Console.log("Step 2: Create multipart upload");
          const createResult = yield* client.createMultipartUpload({
            Bucket: BUCKET_NAME,
            Key: "test-multipart.txt",
          });
          const uploadId = createResult.UploadId!;

          yield* Console.log("Step 3: Abort the multipart upload");
          yield* client.abortMultipartUpload({
            Bucket: BUCKET_NAME,
            Key: "test-multipart.txt",
            UploadId: uploadId,
          });

          yield* Console.log(
            "Test: listParts on aborted upload should fail with NoSuchKey",
          );
          const listPartsResult = yield* client
            .listParts({
              Bucket: BUCKET_NAME,
              Key: "test-multipart.txt",
              UploadId: uploadId,
            })
            .pipe(
              Effect.flip,
              Effect.tap((error) =>
                Console.log("listParts error:", error._tag),
              ),
            );
          expect(listPartsResult._tag).toBe("NoSuchKey");
        } finally {
          yield* Console.log("Cleanup: delete bucket");
          yield* client.deleteBucket({ Bucket: BUCKET_NAME });
        }
      }),
    { timeout: 60_000 },
  );

  it.live(
    "putObjectTagging and getObjectTagging",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Step 1: Create bucket");
        yield* client.createBucket({ Bucket: BUCKET_NAME });

        try {
          yield* Console.log("Step 2: Upload an object");
          yield* client.putObject({
            Bucket: BUCKET_NAME,
            Key: "tagged-object.txt",
            Body: "test content for tagging",
          });

          yield* Console.log("Step 3: Put object tags");
          yield* client.putObjectTagging({
            Bucket: BUCKET_NAME,
            Key: "tagged-object.txt",
            Tagging: {
              TagSet: [
                { Key: "Environment", Value: "Test" },
                { Key: "Project", Value: "itty-aws" },
              ],
            },
          });

          yield* Console.log("Step 4: Get object tags");
          const taggingResult = yield* client.getObjectTagging({
            Bucket: BUCKET_NAME,
            Key: "tagged-object.txt",
          });

          yield* Console.log(
            "Tagging result:",
            JSON.stringify(taggingResult, null, 2),
          );

          expect(taggingResult.TagSet).toBeDefined();
          expect(taggingResult.TagSet?.length).toBe(2);

          const envTag = taggingResult.TagSet?.find(
            (t) => t.Key === "Environment",
          );
          const projTag = taggingResult.TagSet?.find(
            (t) => t.Key === "Project",
          );
          expect(envTag?.Value).toBe("Test");
          expect(projTag?.Value).toBe("itty-aws");
        } finally {
          yield* Console.log("Cleanup: delete object and bucket");
          yield* client
            .deleteObject({ Bucket: BUCKET_NAME, Key: "tagged-object.txt" })
            .pipe(Effect.ignore);
          yield* client.deleteBucket({ Bucket: BUCKET_NAME });
        }
      }),
    { timeout: 60_000 },
  );
});
