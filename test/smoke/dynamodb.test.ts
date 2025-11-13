import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { describe, expect, it } from "@effect/vitest";
import { Console, Effect, Schedule } from "effect";
import { DynamoDB } from "../../src/services/dynamodb/index.ts";

const credentials = await fromNodeProviderChain()();

describe("DynamoDB Smoke Tests", () => {
  const client = new DynamoDB({ region: "us-east-1", credentials });
  const TABLE_NAME = "test-itty-aws-smoke-test";
  const waitForTableActive = (tableName: string) =>
    client.describeTable({ TableName: tableName }).pipe(
      Effect.tap((d) =>
        Console.log(`Table status: ${d.Table?.TableStatus ?? "UNKNOWN"}`),
      ),
      Effect.flatMap((d) =>
        d.Table?.TableStatus === "ACTIVE"
          ? Effect.succeed(d)
          : Effect.fail("NotActive" as const),
      ),
      Effect.retry({ schedule: Schedule.spaced("1 second"), times: 60 }),
    );

  const waitForTableDelete = (tableName: string) =>
    client.describeTable({ TableName: tableName }).pipe(
      Effect.flatMap(() => Effect.fail("TableStillExists" as const)),
      Effect.catchTag("ResourceNotFoundException", () =>
        Effect.succeed("Table deleted"),
      ),
      Effect.retry({ schedule: Schedule.spaced("1 second"), times: 60 }),
    );

  const deleteTableIfExists = (tableName: string) =>
    client
      .deleteTable({ TableName: tableName })
      .pipe(
        Effect.catchTag("ResourceNotFoundException", () =>
          Effect.succeed("Table deleted"),
        ),
      );
  it.live(
    "should perform complete DynamoDB lifecycle: create table, wait for active, perform operations, delete table",
    () =>
      Effect.gen(function* () {
        yield* Console.log(
          `Starting DynamoDB smoke test with table: ${TABLE_NAME}`,
        );

        // Step 1: Clean up any existing table
        yield* Console.log("Step 1: Cleaning up any existing table...");
        yield* deleteTableIfExists(TABLE_NAME);
        yield* waitForTableDelete(TABLE_NAME);

        // Step 2: Create table
        yield* Console.log("Step 2: Creating table...");
        yield* client.createTable({
          TableName: TABLE_NAME,
          AttributeDefinitions: [
            {
              AttributeName: "id",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "id",
              KeyType: "HASH",
            },
          ],
          BillingMode: "PAY_PER_REQUEST",
        });

        // Step 3: Wait for table to become active
        yield* Console.log("Step 3: Waiting for table to become active...");
        const tableDescription = yield* waitForTableActive(TABLE_NAME);
        expect(tableDescription.Table?.TableStatus).toBe("ACTIVE");
        yield* Console.log("Table is now active");

        // Step 4: Perform basic operations
        yield* Console.log("Step 4: Performing basic table operations...");

        // Put item
        yield* client.putItem({
          TableName: TABLE_NAME,
          Item: {
            id: { S: "test-id" },
            name: { S: "test-name" },
            value: { N: "42" },
          },
        });
        yield* Console.log("Item inserted successfully");

        // Get item
        const getResult = yield* client.getItem({
          TableName: TABLE_NAME,
          Key: {
            id: { S: "test-id" },
          },
        });
        expect(getResult.Item).toBeDefined();
        expect(getResult.Item?.id?.S).toBe("test-id");
        expect(getResult.Item?.name?.S).toBe("test-name");
        expect(getResult.Item?.value?.N).toBe("42");
        yield* Console.log("Item retrieved successfully");

        // Scan table
        const scanResult = yield* client.scan({
          TableName: TABLE_NAME,
        });
        expect(scanResult.Items).toBeDefined();
        expect(scanResult.Items?.length).toBe(1);
        yield* Console.log("Table scanned successfully");

        // Step 5: Clean up - delete table
        yield* Console.log("Step 5: Cleaning up - deleting table...");
        yield* client.deleteTable({ TableName: TABLE_NAME });
        yield* waitForTableDelete(TABLE_NAME);
        yield* Console.log("Table deleted successfully");

        yield* Console.log("DynamoDB smoke test completed successfully!");

        return {
          tableCreated: true,
          operationsCompleted: true,
          tableDeleted: true,
        };
      }),
    { timeout: 300000 }, // 5 minutes timeout for table operations
  );

  it.effect(
    "should handle non-existent table gracefully",
    () =>
      Effect.gen(function* () {
        const nonExistentTable = `non-existent-${Date.now()}`;

        const result = yield* client
          .describeTable({ TableName: nonExistentTable })
          .pipe(
            Effect.map(() => ({ exists: true, error: undefined })),
            Effect.catch((error: any) =>
              Effect.succeed({
                exists: false,
                error:
                  // FIXME: truly atrocious
                  error._tag || error?.name || error?.Code || "UnknownError",
              }),
            ),
          );

        expect(result.exists).toBe(false);
        expect(result.error).toBe("ResourceNotFoundException");
      }),
    { timeout: 10000 },
  );
});
