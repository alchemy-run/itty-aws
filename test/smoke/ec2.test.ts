import { describe, expect, it } from "@effect/vitest";
import { Console, Effect } from "effect";
import { AWS } from "../../src/index.ts";

describe("EC2 Smoke Tests", () => {
  const client = new AWS.EC2({ region: "us-east-1" });

  it.effect(
    "should perform complete VPC lifecycle: create VPC, wait for available, delete VPC, and verify deletion",
    () =>
      Effect.gen(function* () {
        const timestamp = Date.now();
        const vpcName = `test-vpc-${timestamp}`;

        yield* Console.log(`Starting EC2 smoke test with VPC: ${vpcName}`);

        // Step 1: Create VPC
        yield* Console.log("Step 1: Creating VPC...");

        const createResult = yield* client.createVpc({
          CidrBlock: "10.0.0.0/16",
          TagSpecifications: [
            {
              ResourceType: "vpc",
              Tags: [{ Key: "Name", Value: vpcName }],
            },
          ],
        });

        const vpcId = createResult.Vpc?.VpcId;
        expect(vpcId).toBeDefined();
        expect(createResult.Vpc?.CidrBlock).toBe("10.0.0.0/16");

        yield* Console.log(`Created VPC with ID: ${vpcId}`);

        // Step 2: Wait for VPC to become available
        yield* Console.log("Step 2: Waiting for VPC to become available...");

        const waitAttempts = 30; // ~60s
        let ready = false;
        for (let i = 0; i < waitAttempts; i++) {
          const describeResult = yield* client.describeVpcs({ VpcIds: [vpcId!] });
          const state = describeResult.Vpcs?.[0]?.State;

          yield* Console.log(`VPC state check ${i + 1}/${waitAttempts}: ${state}`);

          if (state === "available") {
            ready = true;
            break;
          }
          if (state !== "pending") {
            throw new Error(`Unexpected VPC state: ${state}`);
          }
          yield* Effect.sleep(2000);
        }

        expect(ready).toBe(true);
        yield* Console.log("VPC is now available");

        // Step 3: Delete VPC
        yield* Console.log("Step 3: Deleting VPC...");

        yield* client.deleteVpc({ VpcId: vpcId! });
        yield* Console.log("Delete VPC request sent");

        // Step 4: Verify VPC deletion
        yield* Console.log("Step 4: Verifying VPC deletion...");

        const verifyAttempts = 30; // ~60s
        let deleted = false;
        for (let i = 0; i < verifyAttempts; i++) {
          const deleteCheck = yield* client
            .describeVpcs({ VpcIds: [vpcId!] })
            .pipe(
              Effect.map((result) => ({
                deleted: result.Vpcs?.length === 0,
                error: null,
              })),
              Effect.catchAll((error: any) => {
                const code = error?.name ?? error?.Code ?? error?.code;
                return Effect.succeed({
                  deleted: code === "InvalidVpcID.NotFound",
                  error: code,
                });
              }),
            );

          yield* Console.log(
            `Deletion check ${i + 1}/${verifyAttempts}: deleted=${deleteCheck.deleted}, error=${deleteCheck.error}`,
          );

          if (deleteCheck.deleted) {
            deleted = true;
            break;
          }
          yield* Effect.sleep(2000);
        }

        expect(deleted).toBe(true);
        yield* Console.log("VPC successfully deleted");

        yield* Console.log("EC2 smoke test completed successfully!");

        return { vpcId, ready, deleted };
      }),
    { timeout: 180000 }, // 3 minutes timeout for VPC operations
  );

  it.effect(
    "should handle non-existent VPC gracefully",
    () =>
      Effect.gen(function* () {
        const nonExistentVpcId = `vpc-${Math.random().toString(36).substr(2, 9)}`;

        const result = yield* client
          .describeVpcs({
            VpcIds: [nonExistentVpcId],
          })
          .pipe(
            Effect.map(() => ({
              exists: true,
              error: undefined,
            })),
            Effect.catchAll((error: any) => {
              const code = error?.name ?? error?.Code ?? error?.code;
              return Effect.succeed({
                exists: false,
                error: code,
              });
            }),
          );

        expect(result.exists).toBe(false);
        expect(result.error).toBe("InvalidVpcID.NotFound");
      }),
    { timeout: 10000 },
  );

  it.effect(
    "should handle invalid CIDR block gracefully",
    () =>
      Effect.gen(function* () {
        const result = yield* client
          .createVpc({
            CidrBlock: "invalid-cidr", // Invalid CIDR block
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchAll((error: any) =>
              Effect.succeed({
                success: false,
                error: error._tag || error?.name || error?.Code || "UnknownError",
              }),
            ),
          );

        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();
      }),
    { timeout: 10000 },
  );
});