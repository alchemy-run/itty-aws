import { describe, expect, it } from "@effect/vitest";
import { Console, Effect } from "effect";
import { AWS } from "../../src/index.ts";

describe("SQS Smoke Tests", () => {
  const testQueueName = "itty-aws-test-queue";
  const client = new AWS.SQS({ region: "us-east-1" });

  it.effect(
    "should perform complete SQS lifecycle: create queue, send messages, receive messages, and cleanup",
    () =>
      Effect.gen(function* () {
        yield* Console.log(
          `Starting SQS smoke test with queue: ${testQueueName}`,
        );

        // Step 1: Create a new queue
        yield* Console.log("Step 1: Creating SQS queue...");

        const createResult = yield* client.createQueue({
          QueueName: testQueueName,
          Attributes: {
            VisibilityTimeout: "30",
            MessageRetentionPeriod: "1209600", // 14 days
            DelaySeconds: "0",
            ReceiveMessageWaitTimeSeconds: "0",
          },
          tags: {
            Environment: "test",
            Project: "itty-aws",
          },
        });

        expect(createResult.QueueUrl).toBeDefined();
        expect(createResult.QueueUrl).toContain(testQueueName);

        const queueUrl = createResult.QueueUrl!;
        yield* Console.log(`Queue created with URL: ${queueUrl}`);

        // Step 2: Get queue URL (alternative way to find queue)
        yield* Console.log("Step 2: Getting queue URL...");

        const urlResult = yield* client.getQueueUrl({
          QueueName: testQueueName,
        });

        expect(urlResult.QueueUrl).toBe(queueUrl);

        yield* Console.log("Queue URL retrieved successfully");

        // Step 3: Get queue attributes
        yield* Console.log("Step 3: Getting queue attributes...");

        const attributesResult = yield* client.getQueueAttributes({
          QueueUrl: queueUrl,
          AttributeNames: ["All"],
        });

        expect(attributesResult.Attributes).toBeDefined();
        expect(attributesResult.Attributes?.QueueArn).toBeDefined();
        expect(attributesResult.Attributes?.VisibilityTimeout).toBe("30");

        yield* Console.log("Queue attributes retrieved successfully");

        // Step 4: List queues to verify our queue exists
        yield* Console.log("Step 4: Listing queues...");

        const listResult = yield* client.listQueues({
          QueueNamePrefix: "itty-aws-test-queue",
        });

        expect(listResult.QueueUrls).toBeDefined();
        const queueExists = listResult.QueueUrls?.includes(queueUrl);
        expect(queueExists).toBe(true);

        yield* Console.log(
          `Found ${listResult.QueueUrls?.length} queues matching prefix`,
        );

        // Step 5: Send a simple message
        yield* Console.log("Step 5: Sending a simple message...");

        const sendResult = yield* client.sendMessage({
          QueueUrl: queueUrl,
          MessageBody: "Hello from itty-aws SQS smoke test!",
          DelaySeconds: 0,
        });

        expect(sendResult.MessageId).toBeDefined();
        expect(sendResult.MD5OfMessageBody).toBeDefined();

        yield* Console.log(`Message sent with ID: ${sendResult.MessageId}`);

        // Step 6: Send a message with attributes
        yield* Console.log("Step 6: Sending a message with attributes...");

        const attributesSendResult = yield* client.sendMessage({
          QueueUrl: queueUrl,
          MessageBody: JSON.stringify({
            type: "test",
            data: "message with attributes",
            timestamp: Date.now(),
          }),
          MessageAttributes: {
            MessageType: {
              DataType: "String",
              StringValue: "test-message",
            },
            Priority: {
              DataType: "Number",
              StringValue: "5",
            },
            Environment: {
              DataType: "String",
              StringValue: "smoke-test",
            },
          },
        });

        expect(attributesSendResult.MessageId).toBeDefined();
        expect(attributesSendResult.MD5OfMessageAttributes).toBeDefined();

        yield* Console.log("Message with attributes sent successfully");

        // Step 7: Send batch messages
        yield* Console.log("Step 7: Sending batch messages...");

        const batchResult = yield* client.sendMessageBatch({
          QueueUrl: queueUrl,
          Entries: [
            {
              Id: "msg1",
              MessageBody: "Batch message 1",
              MessageAttributes: {
                BatchIndex: {
                  DataType: "Number",
                  StringValue: "1",
                },
              },
            },
            {
              Id: "msg2",
              MessageBody: "Batch message 2",
              MessageAttributes: {
                BatchIndex: {
                  DataType: "Number",
                  StringValue: "2",
                },
              },
            },
            {
              Id: "msg3",
              MessageBody: "Batch message 3",
              MessageAttributes: {
                BatchIndex: {
                  DataType: "Number",
                  StringValue: "3",
                },
              },
            },
          ],
        });

        expect(batchResult.Successful).toBeDefined();
        expect(batchResult.Successful?.length).toBe(3);

        yield* Console.log(
          `Batch of ${batchResult.Successful?.length} messages sent`,
        );

        // Step 8: Receive messages
        yield* Console.log("Step 8: Receiving messages...");

        const receiveResult = yield* client.receiveMessage({
          QueueUrl: queueUrl,
          MaxNumberOfMessages: 5,
          MessageAttributeNames: ["All"],
          WaitTimeSeconds: 2,
        });

        expect(receiveResult.Messages).toBeDefined();
        expect(receiveResult.Messages?.length).toBeGreaterThan(0);

        const firstMessage = receiveResult.Messages?.[0];
        expect(firstMessage?.MessageId).toBeDefined();
        expect(firstMessage?.ReceiptHandle).toBeDefined();
        expect(firstMessage?.Body).toBeDefined();

        yield* Console.log(
          `Received ${receiveResult.Messages?.length} messages`,
        );

        // Step 9: Process and delete individual message
        if (firstMessage) {
          yield* Console.log("Step 9: Deleting processed message...");

          yield* client.deleteMessage({
            QueueUrl: queueUrl,
            ReceiptHandle: firstMessage.ReceiptHandle!,
          });

          yield* Console.log("Message deleted successfully");
        }

        // Step 10: Delete batch messages if we have multiple
        if (receiveResult.Messages && receiveResult.Messages.length > 1) {
          yield* Console.log("Step 10: Batch deleting remaining messages...");

          const deleteEntries = receiveResult.Messages.slice(1, 4).map(
            (msg, index) => ({
              Id: `delete-${index}`,
              ReceiptHandle: msg.ReceiptHandle!,
            }),
          );

          const batchDeleteResult = yield* client.deleteMessageBatch({
            QueueUrl: queueUrl,
            Entries: deleteEntries,
          });

          expect(batchDeleteResult.Successful).toBeDefined();
          yield* Console.log(
            `Batch deleted ${batchDeleteResult.Successful?.length} messages`,
          );
        }

        // Step 11: Test message visibility timeout
        yield* Console.log("Step 11: Testing message visibility...");

        // Send a test message for visibility testing
        yield* client.sendMessage({
          QueueUrl: queueUrl,
          MessageBody: "Visibility test message",
        });

        // Receive the message
        const visibilityReceiveResult = yield* client.receiveMessage({
          QueueUrl: queueUrl,
          MaxNumberOfMessages: 1,
        });

        if (visibilityReceiveResult.Messages?.[0]) {
          const testMessage = visibilityReceiveResult.Messages[0];

          // Change visibility timeout
          yield* client.changeMessageVisibility({
            QueueUrl: queueUrl,
            ReceiptHandle: testMessage.ReceiptHandle!,
            VisibilityTimeout: 60,
          });

          yield* Console.log("Message visibility timeout changed");

          // Clean up the test message
          yield* client.deleteMessage({
            QueueUrl: queueUrl,
            ReceiptHandle: testMessage.ReceiptHandle!,
          });
        }

        // Step 12: Test queue attributes modification
        yield* Console.log("Step 12: Modifying queue attributes...");

        yield* client.setQueueAttributes({
          QueueUrl: queueUrl,
          Attributes: {
            VisibilityTimeout: "60",
            MessageRetentionPeriod: "345600", // 4 days
          },
        });

        const updatedAttributesResult = yield* client.getQueueAttributes({
          QueueUrl: queueUrl,
          AttributeNames: ["VisibilityTimeout", "MessageRetentionPeriod"],
        });

        expect(updatedAttributesResult.Attributes?.VisibilityTimeout).toBe(
          "60",
        );

        yield* Console.log("Queue attributes updated successfully");

        // Step 13: Test error handling - try to receive from non-existent queue
        yield* Console.log("Step 13: Testing error handling...");

        const errorResult = yield* client
          .receiveMessage({
            QueueUrl:
              "https://sqs.us-east-1.amazonaws.com/123456789012/non-existent-queue",
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("QueueDoesNotExist", (error) =>
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

        // Step 14: Purge queue
        yield* Console.log("Step 14: Purging queue...");

        yield* client.purgeQueue({
          QueueUrl: queueUrl,
        });

        yield* Console.log("Queue purged successfully");

        // Step 15: Cleanup - Delete the test queue
        yield* Console.log("Step 15: Cleaning up - deleting test queue...");

        yield* client.deleteQueue({
          QueueUrl: queueUrl,
        });

        yield* Console.log("SQS smoke test completed successfully!");
      }),
    { timeout: 90000 }, // 90 seconds timeout for SQS operations
  );

  it.effect(
    "should handle dead letter queue configuration",
    () =>
      Effect.gen(function* () {
        const mainQueueName = "itty-aws-main-queue";
        const dlqName = "itty-aws-dlq";

        yield* Console.log("Testing dead letter queue configuration...");

        // Create DLQ first
        const dlqResult = yield* client.createQueue({
          QueueName: dlqName,
        });

        const dlqUrl = dlqResult.QueueUrl!;

        // Get DLQ ARN
        const dlqAttributes = yield* client.getQueueAttributes({
          QueueUrl: dlqUrl,
          AttributeNames: ["QueueArn"],
        });

        const dlqArn = dlqAttributes.Attributes?.QueueArn!;

        // Create main queue with DLQ configuration
        const mainQueueResult = yield* client.createQueue({
          QueueName: mainQueueName,
          Attributes: {
            RedrivePolicy: JSON.stringify({
              deadLetterTargetArn: dlqArn,
              maxReceiveCount: 3,
            }),
          },
        });

        const mainQueueUrl = mainQueueResult.QueueUrl!;

        // Verify DLQ configuration
        const mainQueueAttributes = yield* client.getQueueAttributes({
          QueueUrl: mainQueueUrl,
          AttributeNames: ["RedrivePolicy"],
        });

        expect(mainQueueAttributes.Attributes?.RedrivePolicy).toBeDefined();

        const redrivePolicy = JSON.parse(
          mainQueueAttributes.Attributes?.RedrivePolicy || "{}",
        );
        expect(redrivePolicy.deadLetterTargetArn).toBe(dlqArn);
        expect(redrivePolicy.maxReceiveCount).toBe(3);

        yield* Console.log("Dead letter queue configuration validated");

        // Cleanup
        yield* client.deleteQueue({ QueueUrl: mainQueueUrl });
        yield* client.deleteQueue({ QueueUrl: dlqUrl });

        yield* Console.log("DLQ test queues cleaned up");
      }),
    { timeout: 30000 },
  );

  it.effect(
    "should handle FIFO queue operations",
    () =>
      Effect.gen(function* () {
        const fifoQueueName = "itty-aws-fifo-test.fifo";

        yield* Console.log("Testing FIFO queue operations...");

        // Create FIFO queue
        const createResult = yield* client.createQueue({
          QueueName: fifoQueueName,
          Attributes: {
            FifoQueue: "true",
            ContentBasedDeduplication: "true",
          },
        });

        const fifoQueueUrl = createResult.QueueUrl!;
        expect(fifoQueueUrl).toContain(".fifo");

        // Send FIFO messages
        yield* client.sendMessage({
          QueueUrl: fifoQueueUrl,
          MessageBody: "FIFO message 1",
          MessageGroupId: "group1",
          MessageDeduplicationId: `dedup-${Date.now()}-1`,
        });

        yield* client.sendMessage({
          QueueUrl: fifoQueueUrl,
          MessageBody: "FIFO message 2",
          MessageGroupId: "group1",
          MessageDeduplicationId: `dedup-${Date.now()}-2`,
        });

        yield* Console.log("FIFO messages sent successfully");

        // Receive FIFO messages
        const receiveResult = yield* client.receiveMessage({
          QueueUrl: fifoQueueUrl,
          MaxNumberOfMessages: 2,
        });

        expect(receiveResult.Messages).toBeDefined();
        expect(receiveResult.Messages?.length).toBeGreaterThan(0);

        // Clean up messages
        if (receiveResult.Messages) {
          for (const message of receiveResult.Messages) {
            yield* client.deleteMessage({
              QueueUrl: fifoQueueUrl,
              ReceiptHandle: message.ReceiptHandle!,
            });
          }
        }

        // Cleanup queue
        yield* client.deleteQueue({ QueueUrl: fifoQueueUrl });

        yield* Console.log("FIFO queue test completed");
      }),
    { timeout: 30000 },
  );

  it.effect(
    "should handle queue tagging operations",
    () =>
      Effect.gen(function* () {
        const tagTestQueueName = "itty-aws-tag-test";

        yield* Console.log("Testing queue tagging operations...");

        // Create queue
        const createResult = yield* client.createQueue({
          QueueName: tagTestQueueName,
          tags: {
            InitialTag: "InitialValue",
            Environment: "test",
          },
        });

        const queueUrl = createResult.QueueUrl!;

        // List queue tags
        const listTagsResult = yield* client.listQueueTags({
          QueueUrl: queueUrl,
        });

        expect(listTagsResult.Tags).toBeDefined();
        expect(listTagsResult.Tags?.InitialTag).toBe("InitialValue");
        expect(listTagsResult.Tags?.Environment).toBe("test");

        // Add more tags
        yield* client.tagQueue({
          QueueUrl: queueUrl,
          Tags: {
            NewTag: "NewValue",
            Project: "itty-aws",
          },
        });

        // Verify tags were added
        const updatedTagsResult = yield* client.listQueueTags({
          QueueUrl: queueUrl,
        });

        expect(Object.keys(updatedTagsResult.Tags || {}).length).toBe(4);
        expect(updatedTagsResult.Tags?.NewTag).toBe("NewValue");

        // Remove tags
        yield* client.untagQueue({
          QueueUrl: queueUrl,
          TagKeys: ["NewTag"],
        });

        // Verify tag was removed
        const finalTagsResult = yield* client.listQueueTags({
          QueueUrl: queueUrl,
        });

        expect(Object.keys(finalTagsResult.Tags || {}).length).toBe(3);
        expect(finalTagsResult.Tags?.NewTag).toBeUndefined();

        // Cleanup
        yield* client.deleteQueue({ QueueUrl: queueUrl });

        yield* Console.log("Queue tagging test completed");
      }),
    { timeout: 20000 },
  );

  it.effect(
    "should handle invalid queue operations gracefully",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing invalid queue operations...");

        // Test creating queue with invalid name
        const invalidNameResult = yield* client
          .createQueue({
            QueueName: "invalid-queue-name-with-special-chars!", // Invalid characters
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("InvalidParameterValue", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
            Effect.catchAll((error) =>
              Effect.succeed({
                success: false,
                error: error._tag || "UnknownError",
              }),
            ),
          );

        expect(invalidNameResult.success).toBe(false);
        expect(invalidNameResult.error).toBeDefined();

        // Test getting non-existent queue URL
        const nonExistentResult = yield* client
          .getQueueUrl({
            QueueName: "non-existent-queue-12345",
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("QueueDoesNotExist", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
            Effect.catchAll((error) =>
              Effect.succeed({
                success: false,
                error: error._tag || "UnknownError",
              }),
            ),
          );

        expect(nonExistentResult.success).toBe(false);
        expect(nonExistentResult.error).toBeDefined();

        yield* Console.log("Invalid operations handled gracefully");
      }),
    { timeout: 15000 },
  );
});
