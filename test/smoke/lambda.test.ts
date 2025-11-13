import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { describe, expect, it } from "@effect/vitest";
import AdmZip from "adm-zip";
import { Console, Effect, Schedule } from "effect";
import { IAM } from "../../src/services/iam/index.ts";
import { Lambda } from "../../src/services/lambda/index.ts";

const credentials = await fromNodeProviderChain()();

describe("Lambda Smoke Tests", () => {
  const testFunctionName = "itty-aws-test-function";
  const client = new Lambda({ region: "us-east-1", credentials });

  const waitForFunctionActive = (functionName: string) =>
    client.getFunctionConfiguration({ FunctionName: functionName }).pipe(
      Effect.tap((config) =>
        Console.log(`Function state: ${config.State ?? "UNKNOWN"}`),
      ),
      Effect.flatMap((config) =>
        config.State === "Active"
          ? Effect.succeed(config)
          : Effect.fail("NotActive" as const),
      ),
      Effect.retry({ schedule: Schedule.spaced("2 seconds"), times: 30 }),
    );

  const waitForFunctionDeleted = (functionName: string) =>
    client.getFunction({ FunctionName: functionName }).pipe(
      Effect.flatMap(() => Effect.fail("FunctionStillExists" as const)),
      Effect.catchTag("ResourceNotFoundException", () => Effect.void),
      Effect.retry({ schedule: Schedule.spaced("2 seconds"), times: 30 }),
    );

  const deleteFunctionIfExists = (functionName: string) =>
    client.getFunction({ FunctionName: functionName }).pipe(
      Effect.flatMap(() =>
        client.deleteFunction({ FunctionName: functionName }).pipe(
          Effect.tap(() =>
            Console.log(`Cleaned up existing function: ${functionName}`),
          ),
          Effect.flatMap(() => waitForFunctionDeleted(functionName)),
        ),
      ),
      Effect.catchTag("ResourceNotFoundException", () => Effect.void),
    );

  it.live(
    "should perform complete Lambda lifecycle: create function, invoke, update configuration, and cleanup",
    () =>
      Effect.gen(function* () {
        yield* Console.log(
          `Starting Lambda smoke test with function: ${testFunctionName}`,
        );

        // Step 0: Clean up any existing function
        yield* Console.log("Step 0: Cleaning up any existing function...");
        yield* deleteFunctionIfExists(testFunctionName);

        // Step 1: Create a new Lambda function
        yield* Console.log("Step 1: Creating Lambda function...");

        const functionCode = `
exports.handler = async (event) => {
    console.log('Event:', JSON.stringify(event, null, 2));
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from itty-aws Lambda smoke test!',
            input: event,
            timestamp: new Date().toISOString()
        })
    };
};`;

        const zip = new AdmZip();
        zip.addFile("index.js", Buffer.from(functionCode));
        const zipBuffer = zip.toBuffer();

        const iam = new IAM({ credentials });

        const { Role } = yield* iam
          .createRole({
            RoleName: "lambda-execution-role",
            AssumeRolePolicyDocument: JSON.stringify({
              Version: "2012-10-17",
              Statement: [
                {
                  Effect: "Allow",
                  Principal: {
                    Service: "lambda.amazonaws.com",
                  },
                  Action: "sts:AssumeRole",
                },
              ],
            }),
            Description: "Lambda execution role for smoke test",
            Path: "/test/",
          })
          .pipe(
            Effect.catchTag("EntityAlreadyExistsException", () =>
              iam.getRole({ RoleName: "lambda-execution-role" }),
            ),
          );

        const createResult = yield* client.createFunction({
          FunctionName: testFunctionName,
          Runtime: "nodejs18.x",
          Role: Role.Arn,
          Handler: "index.handler",
          Code: {
            ZipFile: zipBuffer,
          },
          Description: "itty-aws smoke test function",
          Timeout: 30,
          MemorySize: 128,
          Tags: {
            Environment: "test",
            Project: "itty-aws",
          },
        });

        expect(createResult.FunctionName).toBe(testFunctionName);
        expect(createResult.FunctionArn).toBeDefined();
        expect(createResult.Runtime).toBe("nodejs18.x");

        const functionArn = createResult.FunctionArn!;
        yield* Console.log(`Function created with ARN: ${functionArn}`);

        // Step 2: Get function configuration
        yield* Console.log("Step 2: Getting function configuration...");

        const configResult = yield* client.getFunctionConfiguration({
          FunctionName: testFunctionName,
        });

        expect(configResult.FunctionName).toBe(testFunctionName);
        expect(configResult.Runtime).toBe("nodejs18.x");
        expect(configResult.State).toBeDefined();

        yield* Console.log(`Function state: ${configResult.State}`);

        // Step 3: Wait for function to be active
        yield* Console.log("Step 3: Waiting for function to be active...");
        const activeConfig = yield* waitForFunctionActive(testFunctionName);
        expect(activeConfig.State).toBe("Active");
        yield* Console.log("Function is now active");

        // Step 4: List functions to verify our function exists
        yield* Console.log("Step 4: Listing functions...");

        const listResult = yield* client.listFunctions({
          MaxItems: 50,
        });

        expect(listResult.Functions).toBeDefined();
        const functionExists = listResult.Functions?.some(
          (func) => func.FunctionName === testFunctionName,
        );
        expect(functionExists).toBe(true);

        yield* Console.log(
          `Found ${listResult.Functions?.length} functions, including our test function`,
        );

        // Step 5: Invoke function synchronously
        yield* Console.log("Step 5: Invoking function synchronously...");

        const invokeResult = yield* client.invoke({
          FunctionName: testFunctionName,
          InvocationType: "RequestResponse",
          Payload: JSON.stringify({
            test: "data",
            timestamp: Date.now(),
          }),
        });

        expect(invokeResult.StatusCode).toBe(200);
        expect(invokeResult.Payload).toBeDefined();

        if (invokeResult.Payload) {
          const responsePayload = JSON.parse(
            Buffer.from(invokeResult.Payload).toString(),
          );
          expect(responsePayload.statusCode).toBe(200);
        }

        yield* Console.log("Function invoked successfully");

        // Step 6: Invoke function asynchronously
        yield* Console.log("Step 6: Invoking function asynchronously...");

        const asyncInvokeResult = yield* client.invoke({
          FunctionName: testFunctionName,
          InvocationType: "Event",
          Payload: JSON.stringify({
            async: true,
            message: "async invocation test",
          }),
        });

        expect(asyncInvokeResult.StatusCode).toBeGreaterThanOrEqual(200);
        expect(asyncInvokeResult.StatusCode).toBeLessThan(300);
        yield* Console.log("Function invoked asynchronously");

        // Step 7: Update function configuration
        yield* Console.log("Step 7: Updating function configuration...");

        const updateConfigResult = yield* client.updateFunctionConfiguration({
          FunctionName: testFunctionName,
          Description: "Updated description from smoke test",
          Timeout: 60,
          MemorySize: 256,
          Environment: {
            Variables: {
              TEST_ENV: "smoke-test",
              NODE_ENV: "test",
            },
          },
        });

        expect(updateConfigResult.Description).toBe(
          "Updated description from smoke test",
        );
        expect(updateConfigResult.Timeout).toBe(60);
        expect(updateConfigResult.MemorySize).toBe(256);

        yield* Console.log("Function configuration updated successfully");

        // Wait for function to be active after configuration update
        yield* Console.log(
          "Waiting for function to be active after configuration update...",
        );
        yield* waitForFunctionActive(testFunctionName);
        yield* Console.log("Function is active after configuration update");

        // Step 8: Update function code
        yield* Console.log("Step 8: Updating function code...");

        const updatedCode = `
exports.handler = async (event) => {
    console.log('Updated function - Event:', JSON.stringify(event, null, 2));
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from UPDATED itty-aws Lambda function!',
            version: '2.0',
            input: event,
            timestamp: new Date().toISOString()
        })
    };
};`;

        const updatedZip = new AdmZip();
        updatedZip.addFile("index.js", Buffer.from(updatedCode));
        const updatedZipBuffer = updatedZip.toBuffer();

        const updateCodeResult = yield* client
          .updateFunctionCode({
            FunctionName: testFunctionName,
            ZipFile: updatedZipBuffer,
          })
          .pipe(
            Effect.retry({
              schedule: Schedule.spaced("2 seconds"),
              times: 30,
              while: (error) => error._tag === "ResourceConflictException",
            }),
          );

        expect(updateCodeResult.FunctionName).toBe(testFunctionName);
        expect(updateCodeResult.CodeSha256).toBeDefined();

        yield* Console.log("Function code updated successfully");

        // Wait for function to be active after code update
        yield* Console.log(
          "Waiting for function to be active after code update...",
        );
        yield* waitForFunctionActive(testFunctionName);
        yield* Console.log("Function is active after code update");

        // Step 9: Test function tagging
        yield* Console.log("Step 9: Testing function tagging...");

        const listTagsResult = yield* client.listTags({
          Resource: functionArn,
        });

        expect(listTagsResult.Tags).toBeDefined();
        expect(listTagsResult.Tags?.Environment).toBe("test");
        expect(listTagsResult.Tags?.Project).toBe("itty-aws");

        // Add additional tags
        yield* client.tagResource({
          Resource: functionArn,
          Tags: {
            Version: "1.0",
            TestTag: "smoke-test",
          },
        });

        const updatedTagsResult = yield* client.listTags({
          Resource: functionArn,
        });

        expect(
          Object.keys(updatedTagsResult.Tags || {}).length,
        ).toBeGreaterThan(2);
        expect(updatedTagsResult.Tags?.Version).toBe("1.0");

        yield* Console.log("Function tagging completed successfully");

        // Step 10: Test function aliases
        yield* Console.log("Step 10: Creating and testing function alias...");

        const aliasResult = yield* client.createAlias({
          FunctionName: testFunctionName,
          Name: "TEST",
          FunctionVersion: "$LATEST",
          Description: "Test alias for smoke test",
        });

        expect(aliasResult.Name).toBe("TEST");
        expect(aliasResult.AliasArn).toBeDefined();

        // Invoke function using alias
        const aliasInvokeResult = yield* client.invoke({
          FunctionName: `${testFunctionName}:TEST`,
          InvocationType: "RequestResponse",
          Payload: JSON.stringify({
            aliasTest: true,
          }),
        });

        expect(aliasInvokeResult.StatusCode).toBe(200);

        yield* Console.log("Function alias created and tested successfully");

        // Step 11: Test error handling
        yield* Console.log("Step 11: Testing error handling...");

        const errorResult = yield* client
          .getFunction({
            FunctionName: "non-existent-function",
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("ResourceNotFoundException", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
            Effect.catch((error) =>
              Effect.succeed({
                success: false,
                error: error._tag || "UnknownError",
              }),
            ),
          );

        expect(errorResult.success).toBe(false);
        expect(errorResult.error).toBeDefined();

        yield* Console.log("Error handling test completed successfully");

        // Step 12: Cleanup - Delete alias and function
        yield* Console.log(
          "Step 12: Cleaning up - deleting alias and function...",
        );

        yield* client.deleteAlias({
          FunctionName: testFunctionName,
          Name: "TEST",
        });

        yield* client.deleteFunction({
          FunctionName: testFunctionName,
        });

        // Wait for function to be fully deleted
        yield* Console.log("Waiting for function deletion to complete...");
        yield* waitForFunctionDeleted(testFunctionName);
        yield* Console.log("Function successfully deleted");

        yield* Console.log("Lambda smoke test completed successfully!");

        return {
          functionCreated: true,
          operationsCompleted: true,
          functionDeleted: true,
        };
      }),
    { timeout: 300000 }, // 5 minutes timeout for Lambda operations
  );

  it.live(
    "should handle Lambda layer operations",
    () =>
      Effect.gen(function* () {
        const layerName = "itty-aws-test-layer";

        yield* Console.log("Testing Lambda layer operations...");

        // Clean up any existing layer versions first
        const existingVersions = yield* client
          .listLayerVersions({
            LayerName: layerName,
          })
          .pipe(
            Effect.catchTag("ResourceNotFoundException", () =>
              Effect.succeed({ LayerVersions: [] }),
            ),
          );

        for (const version of existingVersions.LayerVersions || []) {
          if (version.Version) {
            yield* client
              .deleteLayerVersion({
                LayerName: layerName,
                VersionNumber: version.Version,
              })
              .pipe(Effect.catch(() => Effect.void));
          }
        }

        // Create a simple layer with valid ZIP format
        const layerZip = new AdmZip();
        layerZip.addFile(
          "nodejs/node_modules/test-module/index.js",
          Buffer.from("module.exports = { test: true };"),
        );
        const layerZipBuffer = layerZip.toBuffer();

        const createLayerResult = yield* client.publishLayerVersion({
          LayerName: layerName,
          Description: "Test layer for smoke tests",
          Content: {
            ZipFile: layerZipBuffer,
          },
          CompatibleRuntimes: ["nodejs18.x"],
        });

        expect(createLayerResult.LayerArn).toBeDefined();
        expect(createLayerResult.Version).toBeGreaterThanOrEqual(1);

        const layerArn = createLayerResult.LayerArn!;

        // List layer versions
        const listVersionsResult = yield* client.listLayerVersions({
          LayerName: layerName,
        });

        expect(listVersionsResult.LayerVersions).toBeDefined();
        expect(listVersionsResult.LayerVersions?.length).toBeGreaterThanOrEqual(
          1,
        );

        // Get layer version
        const getLayerResult = yield* client.getLayerVersion({
          LayerName: layerName,
          VersionNumber: createLayerResult.Version!,
        });

        expect(getLayerResult.LayerArn).toBe(layerArn);
        expect(getLayerResult.Version).toBeGreaterThanOrEqual(1);

        // Cleanup
        yield* client.deleteLayerVersion({
          LayerName: layerName,
          VersionNumber: createLayerResult.Version!,
        });

        yield* Console.log("Layer operations test completed");
      }),
    { timeout: 60000 },
  );

  it.effect(
    "should handle invalid function operations gracefully",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing invalid function operations...");

        // Test getting configuration for non-existent function
        const result = yield* client
          .getFunctionConfiguration({
            FunctionName: "non-existent-function-12345",
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("ResourceNotFoundException", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
            Effect.catch((error) =>
              Effect.succeed({
                success: false,
                error: error._tag || "UnknownError",
              }),
            ),
          );

        expect(result.success).toBe(false);
        expect(result.error).toBe("ResourceNotFoundException");

        yield* Console.log("Invalid operations handled gracefully");
      }),
    { timeout: 10000 },
  );
});
