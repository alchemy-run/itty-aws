import { describe, expect, it } from "@effect/vitest";
import { Console, Effect } from "effect";
import { AWS } from "../../src/index.ts";

describe("SecretsManager Smoke Tests", () => {
  const testSecretName = "itty-aws-test-secret";
  const binarySecretName = "itty-aws-test-secret-binary";
  const rotationSecretName = "itty-aws-test-secret-rotation";
  const client = new AWS.SecretsManager({ region: "us-east-1" });

  const deleteSecretIfExists = (secretName: string) =>
    client
      .deleteSecret({
        SecretId: secretName,
        ForceDeleteWithoutRecovery: true,
      })
      .pipe(
        Effect.tap(() =>
          Console.log(`Cleaned up existing secret: ${secretName}`),
        ),
        Effect.catchTag("ResourceNotFoundException", () => Effect.void),
        Effect.catchAll(() => Effect.void),
      );

  it.live(
    "should perform complete SecretsManager lifecycle: create secret, get secret, update secret, and cleanup",
    () =>
      Effect.gen(function* () {
        yield* Console.log(
          `Starting SecretsManager smoke test with secret: ${testSecretName}`,
        );

        // Step 0: Clean up any existing secret
        yield* Console.log("Step 0: Cleaning up any existing secret...");
        yield* deleteSecretIfExists(testSecretName);

        // Step 1: Create a new secret
        yield* Console.log("Step 1: Creating secret...");

        const secretValue = JSON.stringify({
          username: "testuser",
          password: "testpassword123",
          database: "testdb",
        });

        const createResult = yield* client.createSecret({
          Name: testSecretName,
          Description: "Test secret for itty-aws smoke tests",
          SecretString: secretValue,
          ClientRequestToken: `${crypto.randomUUID()}`,
          Tags: [
            { Key: "Environment", Value: "test" },
            { Key: "Project", Value: "itty-aws" },
          ],
        });

        expect(createResult.ARN).toBeDefined();
        expect(createResult.Name).toBe(testSecretName);
        expect(createResult.VersionId).toBeDefined();

        const secretArn = createResult.ARN;
        yield* Console.log(`Secret created with ARN: ${secretArn}`);

        // Step 2: Get secret value
        yield* Console.log("Step 2: Retrieving secret value...");

        const getResult = yield* client.getSecretValue({
          SecretId: testSecretName,
        });

        expect(getResult.ARN).toBe(secretArn);
        expect(getResult.Name).toBe(testSecretName);
        expect(getResult.SecretString).toBeDefined();
        expect(getResult.VersionId).toBeDefined();

        const retrievedSecret = JSON.parse(getResult.SecretString || "{}");
        expect(retrievedSecret.username).toBe("testuser");
        expect(retrievedSecret.password).toBe("testpassword123");
        expect(retrievedSecret.database).toBe("testdb");

        yield* Console.log("Secret value retrieved and validated successfully");

        // Step 3: Describe secret
        yield* Console.log("Step 3: Describing secret...");

        const describeResult = yield* client.describeSecret({
          SecretId: testSecretName,
        });

        expect(describeResult.ARN).toBe(secretArn);
        expect(describeResult.Name).toBe(testSecretName);
        expect(describeResult.Description).toBe(
          "Test secret for itty-aws smoke tests",
        );
        expect(describeResult.Tags).toBeDefined();
        expect(describeResult.Tags?.length).toBe(2);

        yield* Console.log("Secret description retrieved successfully");

        // Step 4: Update secret value
        yield* Console.log("Step 4: Updating secret value...");

        const updatedSecretValue = JSON.stringify({
          username: "updateduser",
          password: "updatedpassword456",
          database: "updateddb",
          port: 5432,
        });

        const updateResult = yield* client.updateSecret({
          SecretId: testSecretName,
          SecretString: updatedSecretValue,
          Description: "Updated test secret for itty-aws smoke tests",
          ClientRequestToken: `${crypto.randomUUID()}`,
        });

        expect(updateResult.ARN).toBe(secretArn);
        expect(updateResult.Name).toBe(testSecretName);
        expect(updateResult.VersionId).toBeDefined();
        expect(updateResult.VersionId).not.toBe(getResult.VersionId);

        yield* Console.log("Secret updated successfully");

        // Step 5: Get updated secret value
        yield* Console.log("Step 5: Retrieving updated secret value...");

        const getUpdatedResult = yield* client.getSecretValue({
          SecretId: testSecretName,
        });

        const updatedSecret = JSON.parse(getUpdatedResult.SecretString || "{}");
        expect(updatedSecret.username).toBe("updateduser");
        expect(updatedSecret.password).toBe("updatedpassword456");
        expect(updatedSecret.database).toBe("updateddb");
        expect(updatedSecret.port).toBe(5432);

        yield* Console.log("Updated secret value retrieved and validated");

        // Step 6: List secret versions
        yield* Console.log("Step 6: Listing secret versions...");

        const versionsResult = yield* client.listSecretVersionIds({
          SecretId: testSecretName,
        });

        expect(versionsResult.Versions).toBeDefined();
        expect(versionsResult.Versions?.length).toBeGreaterThanOrEqual(2);

        yield* Console.log(
          `Found ${versionsResult.Versions?.length} secret versions`,
        );

        // Step 7: Tag resource operations
        yield* Console.log("Step 7: Testing tag operations...");

        yield* client.tagResource({
          SecretId: testSecretName,
          Tags: [
            { Key: "NewTag", Value: "NewValue" },
            { Key: "Status", Value: "Testing" },
          ],
        });

        const taggedDescribeResult = yield* client.describeSecret({
          SecretId: testSecretName,
        });

        expect(taggedDescribeResult.Tags?.length).toBe(4); // Original 2 + new 2

        yield* Console.log("Tags added successfully");

        // Step 8: Untag resource
        yield* Console.log("Step 8: Removing tags...");

        yield* client.untagResource({
          SecretId: testSecretName,
          TagKeys: ["NewTag"],
        });

        const untaggedDescribeResult = yield* client.describeSecret({
          SecretId: testSecretName,
        });

        expect(untaggedDescribeResult.Tags?.length).toBe(3);

        yield* Console.log("Tag removed successfully");

        // Step 9: Test error handling - try to get non-existent secret
        yield* Console.log("Step 9: Testing error handling...");

        const errorResult = yield* client
          .getSecretValue({
            SecretId: "non-existent-secret-12345",
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("ResourceNotFoundException", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
            Effect.catchAll((error) =>
              Effect.succeed({
                success: false,
                error: error._tag || "UnknownError",
              }),
            ),
          );

        expect(errorResult.success).toBe(false);
        expect(errorResult.error).toBeDefined();

        yield* Console.log("Error handling test completed successfully");

        // Step 10: Create a binary secret
        yield* Console.log("Step 10: Testing binary secret...");

        // Clean up any existing binary secret
        yield* deleteSecretIfExists(binarySecretName);

        const binaryData = Buffer.from("binary-test-data");

        const binaryCreateResult = yield* client.createSecret({
          Name: binarySecretName,
          Description: "Binary test secret",
          SecretBinary: binaryData,
          ClientRequestToken: `${crypto.randomUUID()}`,
        });

        expect(binaryCreateResult.ARN).toBeDefined();

        const binaryGetResult = yield* client.getSecretValue({
          SecretId: binarySecretName,
        });

        expect(binaryGetResult.SecretBinary).toBeDefined();
        expect(binaryGetResult.SecretString).toBeUndefined();

        if (typeof binaryGetResult.SecretBinary === "string") {
          expect(
            Buffer.from(binaryGetResult.SecretBinary, "base64").toString(),
          ).toBe("binary-test-data");
        } else if (binaryGetResult.SecretBinary instanceof Uint8Array) {
          expect(Buffer.from(binaryGetResult.SecretBinary).toString()).toBe(
            "binary-test-data",
          );
        } else {
          throw new Error("SecretBinary should be string or Uint8Array");
        }

        yield* Console.log("Binary secret operations completed successfully");

        // Step 11: Cleanup - Delete the binary secret
        yield* Console.log("Step 11: Deleting binary secret...");

        yield* client.deleteSecret({
          SecretId: binarySecretName,
          ForceDeleteWithoutRecovery: true,
        });

        yield* Console.log("Binary secret deleted");

        // Step 12: Cleanup - Delete the test secret
        yield* Console.log("Step 12: Cleaning up - deleting test secret...");

        yield* client.deleteSecret({
          SecretId: testSecretName,
          ForceDeleteWithoutRecovery: true,
        });

        yield* Console.log("SecretsManager smoke test completed successfully!");
      }),
    { timeout: 120000 }, // 2 minutes timeout for SecretsManager operations
  );

  it.effect(
    "should handle secret listing and pagination",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing SecretsManager secret listing...");

        // List secrets with pagination
        const listResult = yield* client.listSecrets({
          MaxResults: 10,
        });

        expect(listResult.SecretList).toBeDefined();
        expect(Array.isArray(listResult.SecretList)).toBe(true);
        expect(listResult.SecretList!.length).toBeLessThanOrEqual(10);

        yield* Console.log(
          `Listed ${listResult.SecretList!.length} secrets (max 10)`,
        );

        // Test filtering by name
        if (listResult.SecretList!.length > 0) {
          const firstSecret = listResult.SecretList![0];
          const filterResult = yield* client.listSecrets({
            Filters: [
              {
                Key: "name",
                Values: [firstSecret.Name || ""],
              },
            ],
          });

          expect(filterResult.SecretList).toBeDefined();
          yield* Console.log(
            `Filter by name returned ${filterResult.SecretList?.length || 0} secrets`,
          );
        }
      }),
    { timeout: 15000 },
  );

  it.effect(
    "should handle secret creation errors gracefully",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing secret creation error handling...");

        // Try to create secret with invalid name (too long)
        const longName = "a".repeat(513); // Max is 512 characters

        const result = yield* client
          .createSecret({
            Name: longName,
            SecretString: "test",
            ClientRequestToken: `${crypto.randomUUID()}`,
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("InvalidParameterException", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
            Effect.catchAll((error) =>
              Effect.succeed({
                success: false,
                error: error._tag || "UnknownError",
              }),
            ),
          );

        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();

        yield* Console.log("Secret creation error handling completed");
      }),
    { timeout: 10000 },
  );

  it.live(
    "should handle secret rotation configuration",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing secret rotation configuration...");

        // Step 0: Clean up any existing rotation test secret
        yield* Console.log(
          "Step 0: Cleaning up any existing rotation test secret...",
        );
        yield* deleteSecretIfExists(rotationSecretName);

        // Create a secret for rotation testing
        const createResult = yield* client.createSecret({
          Name: rotationSecretName,
          SecretString: JSON.stringify({ password: "initial-password" }),
          Description: "Secret for rotation testing",
          ClientRequestToken: `${crypto.randomUUID()}`,
        });

        expect(createResult.ARN).toBeDefined();

        // Describe the secret to check rotation status
        const describeResult = yield* client.describeSecret({
          SecretId: rotationSecretName,
        });

        // RotationEnabled might not be in the response if it's false by default
        expect(describeResult.RotationEnabled ?? false).toBe(false); // Should not be enabled by default

        yield* Console.log("Secret rotation status checked successfully");

        // Cleanup
        yield* client.deleteSecret({
          SecretId: rotationSecretName,
          ForceDeleteWithoutRecovery: true,
        });

        yield* Console.log("Rotation test secret cleaned up");
      }),
    { timeout: 20000 },
  );

  it.effect(
    "should generate random password",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing random password generation...");

        const randomResult = yield* client.getRandomPassword({
          PasswordLength: 32,
          ExcludeCharacters: "\"'\\",
          ExcludeNumbers: false,
          ExcludePunctuation: false,
          ExcludeUppercase: false,
          ExcludeLowercase: false,
          IncludeSpace: false,
          RequireEachIncludedType: true,
        });

        expect(randomResult.RandomPassword).toBeDefined();
        expect(randomResult.RandomPassword?.length).toBe(32);

        yield* Console.log("Random password generated successfully");
      }),
    { timeout: 10000 },
  );
});
