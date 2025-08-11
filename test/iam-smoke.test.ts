import { describe, expect, it } from "@effect/vitest";
import { Console, Effect } from "effect";
import { AWS } from "../src/index.ts";

describe("IAM Smoke Tests", () => {
  const client = new AWS.IAM({ region: "us-east-1" });

  it.effect(
    "should list IAM roles and parse AssumeRolePolicyDocument correctly",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Starting IAM listRoles test...");

        // List IAM roles
        const listResult = yield* client.listRoles({});

        expect(listResult.Roles).toBeDefined();
        expect(Array.isArray(listResult.Roles)).toBe(true);

        yield* Console.log(`Found ${listResult.Roles.length} IAM roles`);

        // Check that roles have required fields
        if (listResult.Roles.length > 0) {
          const firstRole = listResult.Roles[0];
          expect(firstRole.Path).toBeDefined();
          expect(firstRole.RoleName).toBeDefined();
          expect(firstRole.RoleId).toBeDefined();
          expect(firstRole.Arn).toBeDefined();
          expect(firstRole.CreateDate).toBeDefined();

          yield* Console.log(`First role: ${firstRole.RoleName}`);

          // Test AssumeRolePolicyDocument parsing if present
          if (firstRole.AssumeRolePolicyDocument) {
            // Should be parsed as JSON object, not URL-encoded string
            expect(typeof firstRole.AssumeRolePolicyDocument).toBe("object");

            // Common structure for assume role policy documents
            const policyDoc = firstRole.AssumeRolePolicyDocument as any;
            expect(policyDoc.Version).toBeDefined();
            expect(policyDoc.Statement).toBeDefined();
            expect(Array.isArray(policyDoc.Statement)).toBe(true);

            yield* Console.log(
              `AssumeRolePolicyDocument correctly parsed as JSON object for role: ${firstRole.RoleName}`,
            );
          }
        }
      }),
    { timeout: 30000 },
  );

  it.effect(
    "should handle IAM listRoles with pagination parameters",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing IAM listRoles with pagination...");

        // Test with MaxItems to limit results
        const paginatedResult = yield* client.listRoles({
          MaxItems: 5,
        });

        expect(paginatedResult.Roles).toBeDefined();
        expect(Array.isArray(paginatedResult.Roles)).toBe(true);
        expect(paginatedResult.Roles.length).toBeLessThanOrEqual(5);

        yield* Console.log(
          `Paginated result returned ${paginatedResult.Roles.length} roles (max 5)`,
        );

        // Test with PathPrefix if we want to filter by path
        const prefixResult = yield* client.listRoles({
          PathPrefix: "/",
        });

        expect(prefixResult.Roles).toBeDefined();
        expect(Array.isArray(prefixResult.Roles)).toBe(true);

        yield* Console.log(
          `PathPrefix result returned ${prefixResult.Roles.length} roles`,
        );
      }),
    { timeout: 20000 },
  );

  it.effect(
    "should perform basic IAM user operations",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing basic IAM user operations...");

        // List IAM users
        const usersResult = yield* client.listUsers({});

        expect(usersResult.Users).toBeDefined();
        expect(Array.isArray(usersResult.Users)).toBe(true);

        yield* Console.log(`Found ${usersResult.Users.length} IAM users`);

        // Verify user structure if users exist
        if (usersResult.Users.length > 0) {
          const firstUser = usersResult.Users[0];
          expect(firstUser.Path).toBeDefined();
          expect(firstUser.UserName).toBeDefined();
          expect(firstUser.UserId).toBeDefined();
          expect(firstUser.Arn).toBeDefined();
          expect(firstUser.CreateDate).toBeDefined();

          yield* Console.log(`First user: ${firstUser.UserName}`);
        }
      }),
    { timeout: 20000 },
  );

  it.effect(
    "should list IAM policies",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing IAM policy listing...");

        // List IAM policies (local only to avoid too many results)
        const policiesResult = yield* client.listPolicies({
          Scope: "Local",
          MaxItems: 10,
        });

        expect(policiesResult.Policies).toBeDefined();
        expect(Array.isArray(policiesResult.Policies)).toBe(true);

        yield* Console.log(
          `Found ${policiesResult.Policies.length} local IAM policies`,
        );

        // Verify policy structure if policies exist
        if (policiesResult.Policies.length > 0) {
          const firstPolicy = policiesResult.Policies[0];
          expect(firstPolicy.PolicyName).toBeDefined();
          expect(firstPolicy.PolicyId).toBeDefined();
          expect(firstPolicy.Arn).toBeDefined();
          expect(firstPolicy.Path).toBeDefined();

          yield* Console.log(`First policy: ${firstPolicy.PolicyName}`);
        }
      }),
    { timeout: 20000 },
  );

  it.effect(
    "should handle IAM error cases gracefully",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing IAM error handling...");

        // Test getting a non-existent user
        const errorResult = yield* client
          .getUser({
            UserName: "non-existent-user-12345",
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("NoSuchEntityException", (error) =>
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
      }),
    { timeout: 15000 },
  );

  it.effect(
    "should list IAM groups",
    () =>
      Effect.gen(function* () {
        yield* Console.log("Testing IAM group listing...");

        // List IAM groups
        const groupsResult = yield* client.listGroups({});

        expect(groupsResult.Groups).toBeDefined();
        expect(Array.isArray(groupsResult.Groups)).toBe(true);

        yield* Console.log(`Found ${groupsResult.Groups.length} IAM groups`);

        // Verify group structure if groups exist
        if (groupsResult.Groups.length > 0) {
          const firstGroup = groupsResult.Groups[0];
          expect(firstGroup.Path).toBeDefined();
          expect(firstGroup.GroupName).toBeDefined();
          expect(firstGroup.GroupId).toBeDefined();
          expect(firstGroup.Arn).toBeDefined();
          expect(firstGroup.CreateDate).toBeDefined();

          yield* Console.log(`First group: ${firstGroup.GroupName}`);
        }
      }),
    { timeout: 20000 },
  );
});
