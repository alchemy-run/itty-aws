import { Effect, Stream } from "effect";
import {
  // Bucket lifecycle operations
  createBucket,
  deleteBucket,
  deleteBucketCors,
  deleteBucketEncryption,
  deleteBucketLifecycle,
  deleteBucketOwnershipControls,
  deleteBucketPolicy,
  deleteBucketTagging,
  deleteBucketWebsite,
  deleteObject,
  deletePublicAccessBlock,
  getBucketAccelerateConfiguration,
  // ACL
  getBucketAcl,
  getBucketCors,
  getBucketEncryption,
  getBucketLifecycleConfiguration,
  getBucketLocation,
  getBucketOwnershipControls,
  getBucketPolicy,
  getBucketRequestPayment,
  getBucketTagging,
  getBucketVersioning,
  getBucketWebsite,
  // Object operations
  getObject,
  getPublicAccessBlock,
  headBucket,
  listBuckets,
  // Accelerate Configuration
  putBucketAccelerateConfiguration,
  // CORS
  putBucketCors,
  // Encryption
  putBucketEncryption,
  // Lifecycle
  putBucketLifecycleConfiguration,
  // Ownership Controls
  putBucketOwnershipControls,
  // Policy
  putBucketPolicy,
  // Request Payment
  putBucketRequestPayment,
  // Tagging
  putBucketTagging,
  // Versioning
  putBucketVersioning,
  // Website
  putBucketWebsite,
  putObject,
  // Public Access Block
  putPublicAccessBlock,
} from "../src/services/s3.ts";
import { test } from "./test.ts";

const TEST_BUCKET = "itty-aws-test";

// Helper to ensure cleanup happens even on failure
function withBucket<A, E, R>(testFn: Effect.Effect<A, E, R>) {
  return Effect.gen(function* () {
    yield* createBucket({ Bucket: TEST_BUCKET });
    return yield* testFn.pipe(
      Effect.ensuring(deleteBucket({ Bucket: TEST_BUCKET }).pipe(Effect.ignore)),
    );
  });
}

// ============================================================================
// Bucket Lifecycle Tests
// ============================================================================

test(
  "create bucket, head bucket, get location, list buckets, and delete",
  withBucket(
    Effect.gen(function* () {
      // Head bucket to verify it exists
      const headResult = yield* headBucket({ Bucket: TEST_BUCKET });
      // Should not throw - bucket exists

      // Get bucket location
      const locationResult = yield* getBucketLocation({ Bucket: TEST_BUCKET });
      // Location will be null for us-east-1, or the region name otherwise

      // List buckets and verify our bucket is in the list
      const listResult = yield* listBuckets({});
      const foundBucket = listResult.Buckets?.find((b) => b.Name === TEST_BUCKET);
      if (!foundBucket) {
        return yield* Effect.fail(new Error("Bucket not found in list"));
      }
    }),
  ),
);

// ============================================================================
// Tagging Tests
// ============================================================================

test(
  "bucket tagging: put, get, and delete tags",
  withBucket(
    Effect.gen(function* () {
      // Put tags
      yield* putBucketTagging({
        Bucket: TEST_BUCKET,
        Tagging: {
          TagSet: [
            { Key: "Environment", Value: "Test" },
            { Key: "Project", Value: "itty-aws" },
            { Key: "Team", Value: "Platform" },
          ],
        },
      });

      // Get and verify tags
      const tags = yield* getBucketTagging({ Bucket: TEST_BUCKET });
      if (tags.TagSet?.length !== 3) {
        return yield* Effect.fail(new Error(`Expected 3 tags, got ${tags.TagSet?.length}`));
      }

      const envTag = tags.TagSet?.find((t) => t.Key === "Environment");
      if (envTag?.Value !== "Test") {
        return yield* Effect.fail(new Error(`Expected Environment=Test, got ${envTag?.Value}`));
      }

      // Update tags (replace all)
      yield* putBucketTagging({
        Bucket: TEST_BUCKET,
        Tagging: {
          TagSet: [{ Key: "UpdatedTag", Value: "NewValue" }],
        },
      });

      // Verify update
      const updatedTags = yield* getBucketTagging({ Bucket: TEST_BUCKET });
      if (updatedTags.TagSet?.length !== 1) {
        return yield* Effect.fail(
          new Error(`Expected 1 tag after update, got ${updatedTags.TagSet?.length}`),
        );
      }

      // Delete tags
      yield* deleteBucketTagging({ Bucket: TEST_BUCKET });

      // Verify deletion - should throw NoSuchTagSet error
      const result = yield* getBucketTagging({ Bucket: TEST_BUCKET }).pipe(
        Effect.map(() => "success" as const),
        Effect.catchAll(() => Effect.succeed("error" as const)),
      );
      if (result !== "error") {
        return yield* Effect.fail(new Error("Expected error after deleting tags"));
      }
    }),
  ),
);

// ============================================================================
// Bucket Policy Tests
// ============================================================================

test(
  "bucket policy: put, get, and delete policy",
  withBucket(
    Effect.gen(function* () {
      // First we need to get the bucket owner account ID
      // We'll construct a simple policy
      const policy = JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "TestStatement",
            Effect: "Deny",
            Principal: "*",
            Action: "s3:DeleteBucket",
            Resource: `arn:aws:s3:::${TEST_BUCKET}`,
            Condition: {
              StringNotEquals: {
                "aws:PrincipalAccount": "000000000000", // Dummy account that won't match
              },
            },
          },
        ],
      });

      // Put policy
      yield* putBucketPolicy({
        Bucket: TEST_BUCKET,
        Policy: policy,
      });

      // Get and verify policy
      const policyResult = yield* getBucketPolicy({ Bucket: TEST_BUCKET });
      if (!policyResult.Policy) {
        return yield* Effect.fail(new Error("Expected policy to be returned"));
      }

      const parsedPolicy = JSON.parse(policyResult.Policy!);
      if (parsedPolicy.Statement[0].Sid !== "TestStatement") {
        return yield* Effect.fail(new Error("Policy Sid mismatch"));
      }

      // Delete policy
      yield* deleteBucketPolicy({ Bucket: TEST_BUCKET });

      // Verify deletion
      const result = yield* getBucketPolicy({ Bucket: TEST_BUCKET }).pipe(
        Effect.map(() => "success" as const),
        Effect.catchAll(() => Effect.succeed("error" as const)),
      );
      if (result !== "error") {
        return yield* Effect.fail(new Error("Expected error after deleting policy"));
      }
    }),
  ),
);

// ============================================================================
// CORS Tests
// ============================================================================

test(
  "bucket CORS: put, get, and delete CORS configuration",
  withBucket(
    Effect.gen(function* () {
      // Put CORS configuration
      yield* putBucketCors({
        Bucket: TEST_BUCKET,
        CORSConfiguration: {
          CORSRules: [
            {
              AllowedMethods: ["GET", "PUT", "POST"],
              AllowedOrigins: ["https://example.com", "https://app.example.com"],
              AllowedHeaders: ["*"],
              ExposeHeaders: ["ETag", "x-amz-meta-custom"],
              MaxAgeSeconds: 3600,
            },
            {
              AllowedMethods: ["GET"],
              AllowedOrigins: ["*"],
              MaxAgeSeconds: 86400,
            },
          ],
        },
      });

      // Get and verify CORS
      const corsResult = yield* getBucketCors({ Bucket: TEST_BUCKET });
      if (corsResult.CORSRules?.length !== 2) {
        return yield* Effect.fail(
          new Error(`Expected 2 CORS rules, got ${corsResult.CORSRules?.length}`),
        );
      }

      const firstRule = corsResult.CORSRules?.[0];
      if (!firstRule?.AllowedMethods?.includes("PUT")) {
        return yield* Effect.fail(new Error("Expected PUT in allowed methods"));
      }
      if (firstRule?.MaxAgeSeconds !== 3600) {
        return yield* Effect.fail(
          new Error(`Expected MaxAgeSeconds=3600, got ${firstRule?.MaxAgeSeconds}`),
        );
      }

      // Delete CORS
      yield* deleteBucketCors({ Bucket: TEST_BUCKET });

      // Verify deletion
      const result = yield* getBucketCors({ Bucket: TEST_BUCKET }).pipe(
        Effect.map(() => "success" as const),
        Effect.catchAll(() => Effect.succeed("error" as const)),
      );
      if (result !== "error") {
        return yield* Effect.fail(new Error("Expected error after deleting CORS"));
      }
    }),
  ),
);

// ============================================================================
// Versioning Tests
// ============================================================================

test(
  "bucket versioning: enable and suspend versioning",
  withBucket(
    Effect.gen(function* () {
      // Initially, versioning is not enabled
      const initialVersioning = yield* getBucketVersioning({
        Bucket: TEST_BUCKET,
      });
      // Status should be undefined or empty for new buckets

      // Enable versioning
      yield* putBucketVersioning({
        Bucket: TEST_BUCKET,
        VersioningConfiguration: {
          Status: "Enabled",
        },
      });

      // Verify enabled
      const enabledVersioning = yield* getBucketVersioning({
        Bucket: TEST_BUCKET,
      });
      if (enabledVersioning.Status !== "Enabled") {
        return yield* Effect.fail(
          new Error(`Expected Status=Enabled, got ${enabledVersioning.Status}`),
        );
      }

      // Suspend versioning (can't disable once enabled, only suspend)
      yield* putBucketVersioning({
        Bucket: TEST_BUCKET,
        VersioningConfiguration: {
          Status: "Suspended",
        },
      });

      // Verify suspended
      const suspendedVersioning = yield* getBucketVersioning({
        Bucket: TEST_BUCKET,
      });
      if (suspendedVersioning.Status !== "Suspended") {
        return yield* Effect.fail(
          new Error(`Expected Status=Suspended, got ${suspendedVersioning.Status}`),
        );
      }
    }),
  ),
);

// ============================================================================
// Website Configuration Tests
// ============================================================================

test(
  "bucket website: put, get, and delete website configuration",
  withBucket(
    Effect.gen(function* () {
      // Put website configuration
      yield* putBucketWebsite({
        Bucket: TEST_BUCKET,
        WebsiteConfiguration: {
          IndexDocument: {
            Suffix: "index.html",
          },
          ErrorDocument: {
            Key: "error.html",
          },
        },
      });

      // Get and verify website config
      const websiteResult = yield* getBucketWebsite({ Bucket: TEST_BUCKET });
      if (websiteResult.IndexDocument?.Suffix !== "index.html") {
        return yield* Effect.fail(
          new Error(
            `Expected IndexDocument.Suffix=index.html, got ${websiteResult.IndexDocument?.Suffix}`,
          ),
        );
      }
      if (websiteResult.ErrorDocument?.Key !== "error.html") {
        return yield* Effect.fail(
          new Error(
            `Expected ErrorDocument.Key=error.html, got ${websiteResult.ErrorDocument?.Key}`,
          ),
        );
      }

      // Update with routing rules
      yield* putBucketWebsite({
        Bucket: TEST_BUCKET,
        WebsiteConfiguration: {
          IndexDocument: {
            Suffix: "index.html",
          },
          RoutingRules: [
            {
              Condition: {
                KeyPrefixEquals: "docs/",
              },
              Redirect: {
                ReplaceKeyPrefixWith: "documents/",
              },
            },
          ],
        },
      });

      // Verify routing rules
      const updatedWebsite = yield* getBucketWebsite({ Bucket: TEST_BUCKET });
      if (updatedWebsite.RoutingRules?.length !== 1) {
        return yield* Effect.fail(
          new Error(`Expected 1 routing rule, got ${updatedWebsite.RoutingRules?.length}`),
        );
      }

      // Delete website config
      yield* deleteBucketWebsite({ Bucket: TEST_BUCKET });

      // Verify deletion
      const result = yield* getBucketWebsite({ Bucket: TEST_BUCKET }).pipe(
        Effect.map(() => "success" as const),
        Effect.catchAll(() => Effect.succeed("error" as const)),
      );
      if (result !== "error") {
        return yield* Effect.fail(new Error("Expected error after deleting website config"));
      }
    }),
  ),
);

// ============================================================================
// Encryption Tests
// ============================================================================

test(
  "bucket encryption: put, get, and delete encryption configuration",
  withBucket(
    Effect.gen(function* () {
      // Put encryption configuration (SSE-S3)
      yield* putBucketEncryption({
        Bucket: TEST_BUCKET,
        ServerSideEncryptionConfiguration: {
          Rules: [
            {
              ApplyServerSideEncryptionByDefault: {
                SSEAlgorithm: "AES256",
              },
              BucketKeyEnabled: true,
            },
          ],
        },
      });

      // Get and verify encryption
      const encryptionResult = yield* getBucketEncryption({
        Bucket: TEST_BUCKET,
      });
      const rule = encryptionResult.ServerSideEncryptionConfiguration?.Rules?.[0];
      if (rule?.ApplyServerSideEncryptionByDefault?.SSEAlgorithm !== "AES256") {
        return yield* Effect.fail(
          new Error(
            `Expected SSEAlgorithm=AES256, got ${rule?.ApplyServerSideEncryptionByDefault?.SSEAlgorithm}`,
          ),
        );
      }

      // Delete encryption
      yield* deleteBucketEncryption({ Bucket: TEST_BUCKET });

      // Note: After deleting, S3 may return default encryption settings
      // so we don't check for error here
    }),
  ),
);

// ============================================================================
// Lifecycle Configuration Tests
// ============================================================================

test(
  "bucket lifecycle: put, get, and delete lifecycle configuration",
  withBucket(
    Effect.gen(function* () {
      // Put lifecycle configuration
      yield* putBucketLifecycleConfiguration({
        Bucket: TEST_BUCKET,
        LifecycleConfiguration: {
          Rules: [
            {
              ID: "ExpireOldObjects",
              Status: "Enabled",
              Filter: {
                Prefix: "logs/",
              },
              Expiration: {
                Days: 90,
              },
            },
            {
              ID: "TransitionToGlacier",
              Status: "Enabled",
              Filter: {
                Prefix: "archive/",
              },
              Transitions: [
                {
                  Days: 30,
                  StorageClass: "GLACIER",
                },
              ],
            },
            {
              ID: "AbortIncompleteUploads",
              Status: "Enabled",
              Filter: {
                Prefix: "",
              },
              AbortIncompleteMultipartUpload: {
                DaysAfterInitiation: 7,
              },
            },
          ],
        },
      });

      // Get and verify lifecycle
      const lifecycleResult = yield* getBucketLifecycleConfiguration({
        Bucket: TEST_BUCKET,
      });
      if (lifecycleResult.Rules?.length !== 3) {
        return yield* Effect.fail(
          new Error(`Expected 3 lifecycle rules, got ${lifecycleResult.Rules?.length}`),
        );
      }

      const expireRule = lifecycleResult.Rules?.find((r) => r.ID === "ExpireOldObjects");
      if (expireRule?.Expiration?.Days !== 90) {
        return yield* Effect.fail(
          new Error(`Expected Expiration.Days=90, got ${expireRule?.Expiration?.Days}`),
        );
      }

      const transitionRule = lifecycleResult.Rules?.find((r) => r.ID === "TransitionToGlacier");
      if (transitionRule?.Transitions?.[0]?.StorageClass !== "GLACIER") {
        return yield* Effect.fail(new Error("Expected transition to GLACIER"));
      }

      // Delete lifecycle
      yield* deleteBucketLifecycle({ Bucket: TEST_BUCKET });

      // Verify deletion
      const result = yield* getBucketLifecycleConfiguration({
        Bucket: TEST_BUCKET,
      }).pipe(
        Effect.map(() => "success" as const),
        Effect.catchAll(() => Effect.succeed("error" as const)),
      );
      if (result !== "error") {
        return yield* Effect.fail(new Error("Expected error after deleting lifecycle config"));
      }
    }),
  ),
);

// ============================================================================
// Public Access Block Tests
// ============================================================================

test(
  "bucket public access block: put, get, and delete",
  withBucket(
    Effect.gen(function* () {
      // Put public access block
      yield* putPublicAccessBlock({
        Bucket: TEST_BUCKET,
        PublicAccessBlockConfiguration: {
          BlockPublicAcls: true,
          IgnorePublicAcls: true,
          BlockPublicPolicy: true,
          RestrictPublicBuckets: true,
        },
      });

      // Get and verify
      const pabResult = yield* getPublicAccessBlock({ Bucket: TEST_BUCKET });
      const config = pabResult.PublicAccessBlockConfiguration;
      if (config?.BlockPublicAcls !== true) {
        return yield* Effect.fail(new Error("Expected BlockPublicAcls=true"));
      }
      if (config?.IgnorePublicAcls !== true) {
        return yield* Effect.fail(new Error("Expected IgnorePublicAcls=true"));
      }
      if (config?.BlockPublicPolicy !== true) {
        return yield* Effect.fail(new Error("Expected BlockPublicPolicy=true"));
      }
      if (config?.RestrictPublicBuckets !== true) {
        return yield* Effect.fail(new Error("Expected RestrictPublicBuckets=true"));
      }

      // Update with partial block
      yield* putPublicAccessBlock({
        Bucket: TEST_BUCKET,
        PublicAccessBlockConfiguration: {
          BlockPublicAcls: true,
          IgnorePublicAcls: false,
          BlockPublicPolicy: false,
          RestrictPublicBuckets: false,
        },
      });

      // Verify update
      const updatedPab = yield* getPublicAccessBlock({ Bucket: TEST_BUCKET });
      if (updatedPab.PublicAccessBlockConfiguration?.IgnorePublicAcls !== false) {
        return yield* Effect.fail(new Error("Expected IgnorePublicAcls=false after update"));
      }

      // Delete public access block
      yield* deletePublicAccessBlock({ Bucket: TEST_BUCKET });

      // Verify deletion
      const result = yield* getPublicAccessBlock({ Bucket: TEST_BUCKET }).pipe(
        Effect.map(() => "success" as const),
        Effect.catchAll(() => Effect.succeed("error" as const)),
      );
      if (result !== "error") {
        return yield* Effect.fail(new Error("Expected error after deleting public access block"));
      }
    }),
  ),
);

// ============================================================================
// Ownership Controls Tests
// ============================================================================

test(
  "bucket ownership controls: put, get, and delete",
  withBucket(
    Effect.gen(function* () {
      // Put ownership controls - BucketOwnerEnforced disables ACLs
      yield* putBucketOwnershipControls({
        Bucket: TEST_BUCKET,
        OwnershipControls: {
          Rules: [
            {
              ObjectOwnership: "BucketOwnerEnforced",
            },
          ],
        },
      });

      // Get and verify
      const ownershipResult = yield* getBucketOwnershipControls({
        Bucket: TEST_BUCKET,
      });
      const rule = ownershipResult.OwnershipControls?.Rules?.[0];
      if (rule?.ObjectOwnership !== "BucketOwnerEnforced") {
        return yield* Effect.fail(
          new Error(`Expected ObjectOwnership=BucketOwnerEnforced, got ${rule?.ObjectOwnership}`),
        );
      }

      // Update to ObjectWriter (allows ACLs)
      yield* putBucketOwnershipControls({
        Bucket: TEST_BUCKET,
        OwnershipControls: {
          Rules: [
            {
              ObjectOwnership: "ObjectWriter",
            },
          ],
        },
      });

      // Verify update
      const updatedOwnership = yield* getBucketOwnershipControls({
        Bucket: TEST_BUCKET,
      });
      if (updatedOwnership.OwnershipControls?.Rules?.[0]?.ObjectOwnership !== "ObjectWriter") {
        return yield* Effect.fail(new Error("Expected ObjectOwnership=ObjectWriter after update"));
      }

      // Delete ownership controls
      yield* deleteBucketOwnershipControls({ Bucket: TEST_BUCKET });

      // Verify deletion
      const result = yield* getBucketOwnershipControls({
        Bucket: TEST_BUCKET,
      }).pipe(
        Effect.map(() => "success" as const),
        Effect.catchAll(() => Effect.succeed("error" as const)),
      );
      if (result !== "error") {
        return yield* Effect.fail(new Error("Expected error after deleting ownership controls"));
      }
    }),
  ),
);

// ============================================================================
// ACL Tests
// ============================================================================

test(
  "bucket ACL: get bucket ACL",
  withBucket(
    Effect.gen(function* () {
      // First set ownership to allow ACLs
      yield* putBucketOwnershipControls({
        Bucket: TEST_BUCKET,
        OwnershipControls: {
          Rules: [
            {
              ObjectOwnership: "ObjectWriter",
            },
          ],
        },
      });

      // Get bucket ACL
      const aclResult = yield* getBucketAcl({ Bucket: TEST_BUCKET });

      // Should have an owner
      if (!aclResult.Owner?.ID) {
        return yield* Effect.fail(new Error("Expected Owner.ID to be present"));
      }

      // Should have grants
      if (!aclResult.Grants || aclResult.Grants.length === 0) {
        return yield* Effect.fail(new Error("Expected at least one grant"));
      }

      // The owner should have FULL_CONTROL by default
      const fullControlGrant = aclResult.Grants?.find((g) => g.Permission === "FULL_CONTROL");
      if (!fullControlGrant) {
        return yield* Effect.fail(new Error("Expected FULL_CONTROL grant for bucket owner"));
      }
    }),
  ),
);

// ============================================================================
// Accelerate Configuration Tests
// ============================================================================

test(
  "bucket accelerate: put and get accelerate configuration",
  withBucket(
    Effect.gen(function* () {
      // Get initial state (should be Suspended or undefined)
      const initialAccelerate = yield* getBucketAccelerateConfiguration({
        Bucket: TEST_BUCKET,
      });
      // New buckets have no accelerate config

      // Enable accelerate (note: bucket name must not contain dots)
      yield* putBucketAccelerateConfiguration({
        Bucket: TEST_BUCKET,
        AccelerateConfiguration: {
          Status: "Enabled",
        },
      });

      // Get and verify
      const enabledAccelerate = yield* getBucketAccelerateConfiguration({
        Bucket: TEST_BUCKET,
      });
      if (enabledAccelerate.Status !== "Enabled") {
        return yield* Effect.fail(
          new Error(`Expected Status=Enabled, got ${enabledAccelerate.Status}`),
        );
      }

      // Disable accelerate
      yield* putBucketAccelerateConfiguration({
        Bucket: TEST_BUCKET,
        AccelerateConfiguration: {
          Status: "Suspended",
        },
      });

      // Verify suspended
      const suspendedAccelerate = yield* getBucketAccelerateConfiguration({
        Bucket: TEST_BUCKET,
      });
      if (suspendedAccelerate.Status !== "Suspended") {
        return yield* Effect.fail(
          new Error(`Expected Status=Suspended, got ${suspendedAccelerate.Status}`),
        );
      }
    }),
  ),
);

// ============================================================================
// Request Payment Tests
// ============================================================================

test(
  "bucket request payment: put and get request payment configuration",
  withBucket(
    Effect.gen(function* () {
      // Get initial state (should be BucketOwner)
      const initialPayment = yield* getBucketRequestPayment({
        Bucket: TEST_BUCKET,
      });
      if (initialPayment.Payer !== "BucketOwner") {
        return yield* Effect.fail(
          new Error(`Expected initial Payer=BucketOwner, got ${initialPayment.Payer}`),
        );
      }

      // Set to Requester pays
      yield* putBucketRequestPayment({
        Bucket: TEST_BUCKET,
        RequestPaymentConfiguration: {
          Payer: "Requester",
        },
      });

      // Get and verify
      const requesterPayment = yield* getBucketRequestPayment({
        Bucket: TEST_BUCKET,
      });
      if (requesterPayment.Payer !== "Requester") {
        return yield* Effect.fail(
          new Error(`Expected Payer=Requester, got ${requesterPayment.Payer}`),
        );
      }

      // Set back to BucketOwner
      yield* putBucketRequestPayment({
        Bucket: TEST_BUCKET,
        RequestPaymentConfiguration: {
          Payer: "BucketOwner",
        },
      });

      // Verify
      const ownerPayment = yield* getBucketRequestPayment({
        Bucket: TEST_BUCKET,
      });
      if (ownerPayment.Payer !== "BucketOwner") {
        return yield* Effect.fail(
          new Error(`Expected Payer=BucketOwner, got ${ownerPayment.Payer}`),
        );
      }
    }),
  ),
);

// ============================================================================
// Object Streaming Tests
// ============================================================================

test(
  "putObject and getObject with string body",
  withBucket(
    Effect.gen(function* () {
      const testKey = "test-string.txt";
      const testContent = "Hello, itty-aws! This is a test string.";

      // Put object with string body
      yield* putObject({
        Bucket: TEST_BUCKET,
        Key: testKey,
        Body: testContent,
        ContentType: "text/plain",
      });

      // Get object and verify
      const result = yield* getObject({
        Bucket: TEST_BUCKET,
        Key: testKey,
      });

      if (!result.Body) {
        return yield* Effect.fail(new Error("Expected Body in response"));
      }

      // Body should be an Effect Stream - consume it
      const chunks: Uint8Array[] = [];
      yield* Stream.runForEach(result.Body, (chunk) =>
        Effect.sync(() => {
          chunks.push(chunk);
        }),
      );

      const decoder = new TextDecoder();
      const receivedContent = decoder.decode(
        new Uint8Array(chunks.reduce((acc, c) => acc + c.length, 0)),
      );

      // Reconstruct the buffer properly
      let offset = 0;
      const fullBuffer = new Uint8Array(chunks.reduce((acc, c) => acc + c.length, 0));
      for (const chunk of chunks) {
        fullBuffer.set(chunk, offset);
        offset += chunk.length;
      }
      const actualContent = decoder.decode(fullBuffer);

      if (actualContent !== testContent) {
        return yield* Effect.fail(
          new Error(`Content mismatch: expected "${testContent}", got "${actualContent}"`),
        );
      }

      // Cleanup
      yield* deleteObject({ Bucket: TEST_BUCKET, Key: testKey });
    }),
  ),
);

test(
  "putObject with Uint8Array body",
  withBucket(
    Effect.gen(function* () {
      const testKey = "test-binary.bin";
      const testContent = new Uint8Array([0x00, 0x01, 0x02, 0x03, 0xff, 0xfe, 0xfd]);

      // Put object with Uint8Array body
      yield* putObject({
        Bucket: TEST_BUCKET,
        Key: testKey,
        Body: testContent,
        ContentType: "application/octet-stream",
      });

      // Get object and verify
      const result = yield* getObject({
        Bucket: TEST_BUCKET,
        Key: testKey,
      });

      if (!result.Body) {
        return yield* Effect.fail(new Error("Expected Body in response"));
      }

      // Consume the stream
      const chunks: Uint8Array[] = [];
      yield* Stream.runForEach(result.Body, (chunk) =>
        Effect.sync(() => {
          chunks.push(chunk);
        }),
      );

      let offset = 0;
      const fullBuffer = new Uint8Array(chunks.reduce((acc, c) => acc + c.length, 0));
      for (const chunk of chunks) {
        fullBuffer.set(chunk, offset);
        offset += chunk.length;
      }

      if (fullBuffer.length !== testContent.length) {
        return yield* Effect.fail(
          new Error(`Length mismatch: expected ${testContent.length}, got ${fullBuffer.length}`),
        );
      }

      for (let i = 0; i < testContent.length; i++) {
        if (fullBuffer[i] !== testContent[i]) {
          return yield* Effect.fail(new Error(`Byte mismatch at index ${i}`));
        }
      }

      // Cleanup
      yield* deleteObject({ Bucket: TEST_BUCKET, Key: testKey });
    }),
  ),
);

test(
  "putObject with Effect Stream body",
  withBucket(
    Effect.gen(function* () {
      const testKey = "test-stream.txt";
      const testChunks = ["Hello, ", "Effect ", "Stream!"];

      // Create an Effect Stream from chunks
      const encoder = new TextEncoder();
      const inputStream = Stream.fromIterable(testChunks.map((s) => encoder.encode(s)));

      // Put object with Effect Stream body
      yield* putObject({
        Bucket: TEST_BUCKET,
        Key: testKey,
        Body: inputStream,
        ContentType: "text/plain",
      });

      // Get object and verify
      const result = yield* getObject({
        Bucket: TEST_BUCKET,
        Key: testKey,
      });

      if (!result.Body) {
        return yield* Effect.fail(new Error("Expected Body in response"));
      }

      // Consume the stream
      const chunks: Uint8Array[] = [];
      yield* Stream.runForEach(result.Body, (chunk) =>
        Effect.sync(() => {
          chunks.push(chunk);
        }),
      );

      const decoder = new TextDecoder();
      let offset = 0;
      const fullBuffer = new Uint8Array(chunks.reduce((acc, c) => acc + c.length, 0));
      for (const chunk of chunks) {
        fullBuffer.set(chunk, offset);
        offset += chunk.length;
      }
      const actualContent = decoder.decode(fullBuffer);
      const expectedContent = testChunks.join("");

      if (actualContent !== expectedContent) {
        return yield* Effect.fail(
          new Error(`Content mismatch: expected "${expectedContent}", got "${actualContent}"`),
        );
      }

      // Cleanup
      yield* deleteObject({ Bucket: TEST_BUCKET, Key: testKey });
    }),
  ),
);

test(
  "getObject returns headers (ContentType, ContentLength, ETag)",
  withBucket(
    Effect.gen(function* () {
      const testKey = "test-headers.json";
      const testContent = JSON.stringify({ message: "hello" });

      // Put object
      yield* putObject({
        Bucket: TEST_BUCKET,
        Key: testKey,
        Body: testContent,
        ContentType: "application/json",
      });

      // Get object and check headers
      const result = yield* getObject({
        Bucket: TEST_BUCKET,
        Key: testKey,
      });

      if (result.ContentType !== "application/json") {
        return yield* Effect.fail(
          new Error(`Expected ContentType=application/json, got ${result.ContentType}`),
        );
      }

      if (result.ContentLength !== testContent.length) {
        return yield* Effect.fail(
          new Error(`Expected ContentLength=${testContent.length}, got ${result.ContentLength}`),
        );
      }

      if (!result.ETag) {
        return yield* Effect.fail(new Error("Expected ETag to be present"));
      }

      // Cleanup - need to consume the body first
      if (result.Body) {
        yield* Stream.runDrain(result.Body);
      }
      yield* deleteObject({ Bucket: TEST_BUCKET, Key: testKey });
    }),
  ),
);

// ============================================================================
// Multiple Configurations Combined Test
// ============================================================================

test(
  "apply multiple control plane configurations to a single bucket",
  withBucket(
    Effect.gen(function* () {
      // Apply multiple configurations in sequence

      // 1. Tagging
      yield* putBucketTagging({
        Bucket: TEST_BUCKET,
        Tagging: {
          TagSet: [
            { Key: "Environment", Value: "Integration" },
            { Key: "CostCenter", Value: "12345" },
          ],
        },
      });

      // 2. Versioning
      yield* putBucketVersioning({
        Bucket: TEST_BUCKET,
        VersioningConfiguration: {
          Status: "Enabled",
        },
      });

      // 3. Encryption
      yield* putBucketEncryption({
        Bucket: TEST_BUCKET,
        ServerSideEncryptionConfiguration: {
          Rules: [
            {
              ApplyServerSideEncryptionByDefault: {
                SSEAlgorithm: "AES256",
              },
            },
          ],
        },
      });

      // 4. Public Access Block
      yield* putPublicAccessBlock({
        Bucket: TEST_BUCKET,
        PublicAccessBlockConfiguration: {
          BlockPublicAcls: true,
          IgnorePublicAcls: true,
          BlockPublicPolicy: true,
          RestrictPublicBuckets: true,
        },
      });

      // 5. Lifecycle
      yield* putBucketLifecycleConfiguration({
        Bucket: TEST_BUCKET,
        LifecycleConfiguration: {
          Rules: [
            {
              ID: "CleanupIncompleteUploads",
              Status: "Enabled",
              Filter: { Prefix: "" },
              AbortIncompleteMultipartUpload: {
                DaysAfterInitiation: 7,
              },
            },
          ],
        },
      });

      // Verify all configurations are in place
      const [tags, versioning, encryption, pab, lifecycle] = yield* Effect.all([
        getBucketTagging({ Bucket: TEST_BUCKET }),
        getBucketVersioning({ Bucket: TEST_BUCKET }),
        getBucketEncryption({ Bucket: TEST_BUCKET }),
        getPublicAccessBlock({ Bucket: TEST_BUCKET }),
        getBucketLifecycleConfiguration({ Bucket: TEST_BUCKET }),
      ]);

      // Verify each config
      if (tags.TagSet?.length !== 2) {
        return yield* Effect.fail(new Error("Tags not applied correctly"));
      }
      if (versioning.Status !== "Enabled") {
        return yield* Effect.fail(new Error("Versioning not enabled"));
      }
      if (
        encryption.ServerSideEncryptionConfiguration?.Rules?.[0]?.ApplyServerSideEncryptionByDefault
          ?.SSEAlgorithm !== "AES256"
      ) {
        return yield* Effect.fail(new Error("Encryption not configured correctly"));
      }
      if (pab.PublicAccessBlockConfiguration?.BlockPublicAcls !== true) {
        return yield* Effect.fail(new Error("Public access block not configured correctly"));
      }
      if (lifecycle.Rules?.length !== 1) {
        return yield* Effect.fail(new Error("Lifecycle not configured correctly"));
      }
    }),
  ),
);
