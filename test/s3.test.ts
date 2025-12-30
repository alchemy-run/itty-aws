import { Effect } from "effect";
import {
  createBucket,
  deleteBucket,
  getBucketTagging,
  putBucketTagging,
} from "../src/services/s3.ts";
import { test } from "./test.ts";

const TEST_BUCKET = "itty-aws-test";

test(
  "create bucket and tag it",
  Effect.gen(function* () {
    // Create the bucket
    yield* createBucket({ Bucket: TEST_BUCKET });

    // Tag the bucket
    yield* putBucketTagging({
      Bucket: TEST_BUCKET,
      ChecksumAlgorithm: "CRC32",
      Tagging: {
        TagSet: [
          { Key: "Environment", Value: "Test" },
          { Key: "Project", Value: "itty-aws" },
        ],
      },
    });

    // Get and verify tags
    const tags = yield* getBucketTagging({ Bucket: TEST_BUCKET });

    // Cleanup
    yield* deleteBucket({ Bucket: TEST_BUCKET });
  }),
);
