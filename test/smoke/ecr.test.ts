import { describe, expect, it } from "@effect/vitest";
import { Console, Effect } from "effect";
import { ECR } from "../../src/services/ecr/index.ts";

describe("ECR Smoke Tests", () => {
  const testRepositoryName = "itty-aws-test-repo";
  const client = new ECR({ region: "us-east-1" });

  const deleteRepositoryIfExists = (repositoryName: string) =>
    client
      .deleteRepository({
        repositoryName,
        force: true,
      })
      .pipe(
        Effect.tap(() =>
          Console.log(`Cleaned up existing repository: ${repositoryName}`),
        ),
        Effect.catchTag("RepositoryNotFoundException", () =>
          Effect.succeed("Repository doesn't exist"),
        ),
      );

  it.live(
    "should perform complete ECR lifecycle: create repository, describe repositories, set policy, and cleanup",
    () =>
      Effect.gen(function* () {
        yield* Console.log(
          `Starting ECR smoke test with repository: ${testRepositoryName}`,
        );

        // Step 0: Clean up any existing repository
        yield* Console.log("Step 0: Cleaning up any existing repository...");
        yield* deleteRepositoryIfExists(testRepositoryName);

        // Step 1: Create a new repository
        yield* Console.log("Step 1: Creating ECR repository...");

        const createResult = yield* client.createRepository({
          repositoryName: testRepositoryName,
          imageScanningConfiguration: {
            scanOnPush: true,
          },
          imageTagMutability: "MUTABLE",
        });

        expect(createResult.repository).toBeDefined();
        expect(createResult.repository?.repositoryName).toBe(
          testRepositoryName,
        );
        expect(createResult.repository?.repositoryUri).toContain(
          testRepositoryName,
        );

        const repositoryArn = createResult.repository?.repositoryArn;
        const repositoryUri = createResult.repository?.repositoryUri;

        yield* Console.log(`Repository created with ARN: ${repositoryArn}`);
        yield* Console.log(`Repository URI: ${repositoryUri}`);

        // Step 2: Describe repositories to verify our repository exists
        yield* Console.log("Step 2: Describing repositories...");

        const describeResult = yield* client.describeRepositories({
          repositoryNames: [testRepositoryName],
        });

        expect(describeResult.repositories).toBeDefined();
        expect(describeResult.repositories?.length).toBe(1);
        expect(describeResult.repositories?.[0]?.repositoryName).toBe(
          testRepositoryName,
        );

        yield* Console.log("Successfully found our test repository");

        // Step 3: List all repositories
        yield* Console.log("Step 3: Listing all repositories...");

        const listResult = yield* client.describeRepositories({});

        expect(listResult.repositories).toBeDefined();
        const repoExists = listResult.repositories?.some(
          (repo) => repo.repositoryName === testRepositoryName,
        );
        expect(repoExists).toBe(true);

        yield* Console.log(
          `Found ${listResult.repositories?.length} repositories total`,
        );

        // Step 4: Set repository policy
        yield* Console.log("Step 4: Setting repository policy...");

        const policyDocument = JSON.stringify({
          Version: "2012-10-17",
          Statement: [
            {
              Sid: "AllowPull",
              Effect: "Allow",
              Principal: {
                AWS: `arn:aws:iam::${createResult.repository?.registryId}:root`,
              },
              Action: [
                "ecr:GetDownloadUrlForLayer",
                "ecr:BatchGetImage",
                "ecr:BatchCheckLayerAvailability",
              ],
            },
          ],
        });

        yield* client.setRepositoryPolicy({
          repositoryName: testRepositoryName,
          policyText: policyDocument,
        });

        yield* Console.log("Repository policy set successfully");

        // Step 5: Get repository policy
        yield* Console.log("Step 5: Getting repository policy...");

        const policyResult = yield* client.getRepositoryPolicy({
          repositoryName: testRepositoryName,
        });

        expect(policyResult.policyText).toBeDefined();
        expect(policyResult.repositoryName).toBe(testRepositoryName);

        yield* Console.log("Successfully retrieved repository policy");

        // Step 6: Test lifecycle policy operations
        yield* Console.log("Step 6: Testing lifecycle policy...");

        const lifecyclePolicyText = JSON.stringify({
          rules: [
            {
              rulePriority: 1,
              selection: {
                tagStatus: "untagged",
                countType: "sinceImagePushed",
                countUnit: "days",
                countNumber: 1,
              },
              action: {
                type: "expire",
              },
            },
          ],
        });

        yield* client.putLifecyclePolicy({
          repositoryName: testRepositoryName,
          lifecyclePolicyText,
        });

        const lifecycleResult = yield* client.getLifecyclePolicy({
          repositoryName: testRepositoryName,
        });

        expect(lifecycleResult.lifecyclePolicyText).toBeDefined();
        expect(lifecycleResult.repositoryName).toBe(testRepositoryName);

        yield* Console.log("Lifecycle policy operations completed");

        // Step 7: List images in repository (should be empty)
        yield* Console.log("Step 7: Listing images in repository...");

        const imagesResult = yield* client.listImages({
          repositoryName: testRepositoryName,
        });

        expect(imagesResult.imageIds).toBeDefined();
        expect(Array.isArray(imagesResult.imageIds)).toBe(true);
        expect(imagesResult.imageIds?.length).toBe(0); // Should be empty

        yield* Console.log("Image listing completed (repository is empty)");

        // Step 8: Test error handling - try to describe non-existent repository
        yield* Console.log("Step 8: Testing error handling...");

        const errorResult = yield* client
          .describeRepositories({
            repositoryNames: ["non-existent-repo-12345"],
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("RepositoryNotFoundException", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
          );

        expect(errorResult.success).toBe(false);
        expect(errorResult.error).toBeDefined();

        yield* Console.log("Error handling test completed successfully");

        // Step 9: Delete lifecycle policy
        yield* Console.log("Step 9: Deleting lifecycle policy...");

        yield* client.deleteLifecyclePolicy({
          repositoryName: testRepositoryName,
        });

        yield* Console.log("Lifecycle policy deleted");

        // Step 10: Delete repository policy
        yield* Console.log("Step 10: Deleting repository policy...");

        yield* client.deleteRepositoryPolicy({
          repositoryName: testRepositoryName,
        });

        yield* Console.log("Repository policy deleted");

        // Step 11: Cleanup - Delete the test repository
        yield* Console.log(
          "Step 11: Cleaning up - deleting test repository...",
        );

        yield* client.deleteRepository({
          repositoryName: testRepositoryName,
          force: true,
        });

        yield* Console.log("ECR smoke test completed successfully!");
      }),
    { timeout: 120000 }, // 2 minutes timeout for ECR operations
  );

  it.effect(
    "should handle repository pagination correctly",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing ECR repository pagination...");

        // Test with maxResults to limit results
        const paginatedResult = yield* client.describeRepositories({
          maxResults: 5,
        });

        expect(paginatedResult.repositories).toBeDefined();
        expect(Array.isArray(paginatedResult.repositories)).toBe(true);
        expect(paginatedResult.repositories?.length).toBeLessThanOrEqual(5);

        yield* Console.log(
          `Paginated result returned ${paginatedResult.repositories?.length} repositories (max 5)`,
        );
      }),
    { timeout: 10000 },
  );

  it.effect(
    "should handle authorization token operations",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing ECR authorization token...");

        // Get authorization token
        const authResult = yield* client.getAuthorizationToken({});

        expect(authResult.authorizationData).toBeDefined();
        expect(Array.isArray(authResult.authorizationData)).toBe(true);

        if (
          authResult.authorizationData &&
          authResult.authorizationData.length > 0
        ) {
          const authData = authResult.authorizationData[0];
          expect(authData.authorizationToken).toBeDefined();
          expect(authData.proxyEndpoint).toBeDefined();
          expect(authData.expiresAt).toBeDefined();

          yield* Console.log("Authorization token retrieved successfully");
        }
      }),
    { timeout: 10000 },
  );

  it.effect(
    "should handle repository creation errors gracefully",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing repository creation error handling...");

        // Try to create repository with invalid name
        const result = yield* client
          .createRepository({
            repositoryName: "Invalid_Repository_Name!", // Invalid characters
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("InvalidParameterException", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
          );

        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();

        yield* Console.log("Repository creation error handling completed");
      }),
    { timeout: 10000 },
  );

  it.effect(
    "should list registry scanning configuration",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing registry scanning configuration...");

        // Get registry scanning configuration
        const scanResult = yield* client.getRegistryScanningConfiguration({});

        expect(scanResult.registryId).toBeDefined();
        expect(scanResult.scanningConfiguration).toBeDefined();

        yield* Console.log(
          "Registry scanning configuration retrieved successfully",
        );
      }),
    { timeout: 10000 },
  );
});
