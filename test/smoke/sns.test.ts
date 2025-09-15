import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { describe, expect, it } from "@effect/vitest";
import { Console, Effect } from "effect";
import { SNS } from "../../src/services/sns/index.ts";
import { STS } from "../../src/services/sts/index.ts";

const credentials = await fromNodeProviderChain()();

describe("SNS Smoke Tests", () => {
  const testTopicName = "itty-aws-test-topic";
  const client = new SNS({ region: "us-east-1", credentials });

  const deleteTopicIfExists = (topicName: string) =>
    client.listTopics({}).pipe(
      Effect.flatMap((result) => {
        const topic = result.Topics?.find((t) =>
          t.TopicArn?.includes(topicName),
        );
        if (topic?.TopicArn) {
          return client.deleteTopic({ TopicArn: topic.TopicArn }).pipe(
            Effect.tap(() =>
              Console.log(`Cleaned up existing topic: ${topic.TopicArn}`),
            ),
            Effect.catchAll((error) =>
              Console.log(`Error deleting topic: ${error.message}`),
            ),
          );
        }
        return Effect.void;
      }),
      Effect.catchAll((error) =>
        Console.log(`Error listing topics: ${error.message}`),
      ),
    );

  it.live(
    "should perform complete SNS lifecycle: create topic, list topics, publish message, and cleanup",
    () =>
      Effect.gen(function* () {
        yield* Console.log(
          `Starting SNS smoke test with topic: ${testTopicName}`,
        );
        let topicArn: string | undefined;

        // Step 0: Clean up any existing topic
        yield* Console.log("Step 0: Cleaning up any existing topic...");
        yield* deleteTopicIfExists(testTopicName);

        // Step 1: Create a new topic
        yield* Console.log("Step 1: Creating SNS topic...");

        const createResult = yield* client.createTopic({
          Name: testTopicName,
        });

        topicArn = createResult.TopicArn;
        expect(topicArn).toBeDefined();
        expect(topicArn).toContain(testTopicName);

        yield* Console.log(`Topic created with ARN: ${topicArn}`);

        // Step 2: List topics to verify our topic exists
        yield* Console.log("Step 2: Listing topics...");

        const listResult = yield* client.listTopics({});

        expect(listResult.Topics).toBeDefined();
        const topicExists = listResult.Topics?.some(
          (topic) => topic.TopicArn === topicArn,
        );
        expect(topicExists).toBe(true);

        yield* Console.log(
          `Found ${listResult.Topics?.length} topics, including our test topic`,
        );

        // Step 3: Get topic attributes
        yield* Console.log("Step 3: Getting topic attributes...");

        const attributesResult = yield* client.getTopicAttributes({
          TopicArn: topicArn!,
        });

        expect(attributesResult.Attributes).toBeDefined();
        expect(attributesResult.Attributes?.TopicArn).toBe(topicArn);

        yield* Console.log("Successfully retrieved topic attributes");

        // Step 4: Publish a message to the topic
        yield* Console.log("Step 4: Publishing a message...");

        const publishResult = yield* client.publish({
          TopicArn: topicArn!,
          Message: "Hello from itty-aws SNS smoke test!",
          Subject: "SNS Test Message",
        });

        expect(publishResult.MessageId).toBeDefined();
        expect(publishResult.MessageId).toMatch(/^[a-f0-9-]+$/);

        yield* Console.log(
          `Message published with ID: ${publishResult.MessageId}`,
        );

        // Step 5: Publish a message with message attributes
        yield* Console.log("Step 5: Publishing a message with attributes...");

        const publishWithAttrsResult = yield* client.publish({
          TopicArn: topicArn!,
          Message: "Message with attributes for testing",
          Subject: "SNS Test Message with Attributes",
          MessageAttributes: {
            TestAttribute: {
              DataType: "String",
              StringValue: "test-value",
            },
            Environment: {
              DataType: "String",
              StringValue: "development",
            },
            Priority: {
              DataType: "Number",
              StringValue: "5",
            },
          },
        });

        expect(publishWithAttrsResult.MessageId).toBeDefined();
        yield* Console.log(
          `Message with attributes published with ID: ${publishWithAttrsResult.MessageId}`,
        );

        // Step 6: Test error handling - try to publish to non-existent topic
        yield* Console.log("Step 6: Testing error handling...");

        const sts = new STS({ credentials });
        const identity = yield* sts.getCallerIdentity({});
        const errorResult = yield* client
          .publish({
            TopicArn: `arn:aws:sns:us-east-1:${identity.Account}:non-existent-topic`,
            Message: "This should fail",
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("NotFoundException", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
            Effect.catchAll((error) => {
              console.log(`Unexpected error: ${error}`);
              return Effect.succeed({
                success: true,
                error: error._tag,
              });
            }),
          );

        expect(errorResult.success).toBe(false);
        expect(errorResult.error).toBeDefined();

        yield* Console.log("Error handling test completed successfully");

        // Step 7: Cleanup - Delete the test topic
        yield* Console.log("Step 7: Cleaning up - deleting test topic...");

        yield* client.deleteTopic({
          TopicArn: topicArn!,
        });

        yield* Console.log("SNS smoke test completed successfully!");
      }),
    { timeout: 60000 }, // 60 seconds timeout for SNS operations
  );

  it.effect(
    "should handle list topics with pagination",
    () =>
      Effect.gen(function* () {
        // Test pagination by listing with a small page size
        const result = yield* client.listTopics({
          NextToken: undefined,
        });

        expect(result.Topics).toBeDefined();
        // Should be an array, might be empty but should be defined
        expect(Array.isArray(result.Topics)).toBe(true);

        yield* Console.log(`Listed ${result.Topics?.length || 0} topics`);
      }),
    { timeout: 10000 },
  );

  it.effect(
    "should handle invalid topic operations gracefully",
    () =>
      Effect.gen(function* () {
        const sts = new STS({ credentials });

        const identity = yield* sts.getCallerIdentity({});
        const invalidArn = `arn:aws:sns:us-east-1:${identity.Account}:non-existent-topic`;

        // Test getting attributes for non-existent topic
        const result = yield* client
          .getTopicAttributes({
            TopicArn: invalidArn,
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("NotFoundException", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
            Effect.catchAll((err) =>
              Effect.succeed({
                success: true,
                error: err._tag,
              }),
            ),
          );

        console.log({ result });
        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();
      }),
    { timeout: 10000 },
  );
});
