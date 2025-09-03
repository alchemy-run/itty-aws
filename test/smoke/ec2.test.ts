import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { describe, expect, it } from "@effect/vitest";
import { Console, Effect, Schedule } from "effect";
import { EC2 } from "../../src/services/ec2/index.ts";

const credentials = await fromNodeProviderChain()();

describe("EC2 Smoke Tests", () => {
  const client = new EC2({ region: "us-east-1", credentials });
  const VPC_NAME = "itty-aws-test-vpc";

  const waitForVpcState = (vpcId: string, expectedState: string) =>
    client.describeVpcs({ VpcIds: [vpcId] }).pipe(
      Effect.tap((result) =>
        Console.log(`VPC state: ${result.Vpcs?.[0]?.State ?? "UNKNOWN"}`),
      ),
      Effect.flatMap((result) => {
        const state = result.Vpcs?.[0]?.State;
        return state === expectedState
          ? Effect.succeed(result)
          : Effect.fail("NotReady" as const);
      }),
      Effect.retry({ schedule: Schedule.spaced("2 seconds"), times: 30 }),
    );

  const waitForVpcDeletion = (vpcId: string) =>
    client.describeVpcs({ VpcIds: [vpcId] }).pipe(
      Effect.flatMap(() => Effect.fail("VpcStillExists" as const)),
      Effect.catchAll((error: any) => {
        const code = error?.name ?? error?.Code ?? error?.code;
        return code === "InvalidVpcID.NotFound"
          ? Effect.void
          : Effect.fail(error);
      }),
      Effect.retry({ schedule: Schedule.spaced("2 seconds"), times: 30 }),
    );

  const deleteVpcIfExists = (vpcName: string) =>
    client
      .describeVpcs({
        Filters: [
          {
            Name: "tag:Name",
            Values: [vpcName],
          },
        ],
      })
      .pipe(
        Effect.flatMap((result) => {
          if (result.Vpcs && result.Vpcs.length > 0) {
            const vpcId = result.Vpcs[0].VpcId!;
            return client.deleteVpc({ VpcId: vpcId }).pipe(
              Effect.tap(() =>
                Console.log(`Cleaned up existing VPC: ${vpcId}`),
              ),
              Effect.catchAll(() => Effect.void),
            );
          }
          return Effect.void;
        }),
        Effect.catchAll(() => Effect.void),
      );

  it.live(
    "should perform complete VPC lifecycle: create VPC, wait for available, delete VPC, and verify deletion",
    () =>
      Effect.gen(function* () {
        yield* Console.log(`Starting EC2 smoke test with VPC: ${VPC_NAME}`);

        // Step 0: Clean up any existing VPC
        yield* Console.log("Step 0: Cleaning up any existing VPC...");
        yield* deleteVpcIfExists(VPC_NAME);

        // Step 1: Create VPC
        yield* Console.log("Step 1: Creating VPC...");

        const createResult = yield* client.createVpc({
          CidrBlock: "10.0.0.0/16",
          TagSpecifications: [
            {
              ResourceType: "vpc",
              Tags: [{ Key: "Name", Value: VPC_NAME }],
            },
          ],
        });

        const vpcId = createResult.Vpc?.VpcId;
        expect(vpcId).toBeDefined();
        expect(createResult.Vpc?.CidrBlock).toBe("10.0.0.0/16");

        yield* Console.log(`Created VPC with ID: ${vpcId}`);

        // Step 2: Wait for VPC to become available
        yield* Console.log("Step 2: Waiting for VPC to become available...");

        const vpcDescription = yield* waitForVpcState(vpcId!, "available");
        expect(vpcDescription.Vpcs?.[0]?.State).toBe("available");

        yield* Console.log("VPC is now available");

        // Step 3: Delete VPC
        yield* Console.log("Step 3: Deleting VPC...");

        yield* client.deleteVpc({ VpcId: vpcId! });
        yield* Console.log("Delete VPC request sent");

        // Step 4: Verify VPC deletion
        yield* Console.log("Step 4: Verifying VPC deletion...");
        yield* waitForVpcDeletion(vpcId!);
        yield* Console.log("VPC successfully deleted");

        yield* Console.log("EC2 smoke test completed successfully!");

        return {
          vpcCreated: true,
          vpcAvailable: true,
          vpcDeleted: true,
        };
      }),
    { timeout: 180000 }, // 3 minutes timeout for VPC operations
  );

  it.effect(
    "should handle non-existent VPC gracefully",
    () =>
      Effect.gen(function* () {
        const nonExistentVpcId = `vpc-${Math.random().toString(36).substring(2, 11)}`;

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
                error:
                  error._tag || error?.name || error?.Code || "UnknownError",
              }),
            ),
          );

        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();
      }),
    { timeout: 10000 },
  );
});
