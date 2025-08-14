import { describe, expect, it } from "@effect/vitest";
import { Console, Effect } from "effect";
import { AWS } from "../../src/index.ts";

describe("IAM Smoke Tests", () => {
  const client = new AWS.IAM({ region: "us-east-1" });
  const TEST_USER_NAME = "itty-aws-test-user";
  const TEST_ROLE_NAME = "itty-aws-test-role";
  const TEST_POLICY_NAME = "itty-aws-test-policy";

  const deleteUserIfExists = (userName: string) =>
    client.deleteUser({ UserName: userName }).pipe(
      Effect.tap(() => Console.log(`Cleaned up existing user: ${userName}`)),
      Effect.catchTag("NoSuchEntityException", () => Effect.void),
      Effect.catchAll(() => Effect.void)
    );

  const deleteRoleIfExists = (roleName: string) =>
    client.deleteRole({ RoleName: roleName }).pipe(
      Effect.tap(() => Console.log(`Cleaned up existing role: ${roleName}`)),
      Effect.catchTag("NoSuchEntityException", () => Effect.void),
      Effect.catchAll(() => Effect.void)
    );

  const deletePolicyIfExists = (policyArn: string) =>
    client.deletePolicy({ PolicyArn: policyArn }).pipe(
      Effect.tap(() => Console.log(`Cleaned up existing policy: ${policyArn}`)),
      Effect.catchTag("NoSuchEntityException", () => Effect.void),
      Effect.catchAll(() => Effect.void)
    );

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
          `Found ${policiesResult.Policies?.length || 0} local IAM policies`,
        );

        // Verify policy structure if policies exist
        if (policiesResult.Policies && policiesResult.Policies.length > 0) {
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
            Effect.catchAll((error) =>
              Effect.succeed({
                success: false,
                error: (error as any)?._tag || "UnknownError",
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

  it.live(
    "should create and delete IAM user",
    () =>
      Effect.gen(function* () {
        yield* Console.log(`Testing IAM user creation and deletion: ${TEST_USER_NAME}`);

        // Step 0: Clean up any existing user
        yield* Console.log("Step 0: Cleaning up any existing user...");
        yield* deleteUserIfExists(TEST_USER_NAME);

        // Create user
        const createResult = yield* client.createUser({
          UserName: TEST_USER_NAME,
          Path: "/test/",
        });

        expect(createResult.User).toBeDefined();
        expect(createResult.User?.UserName).toBe(TEST_USER_NAME);
        expect(createResult.User?.Path).toBe("/test/");

        yield* Console.log(`Created user: ${createResult.User?.UserName}`);

        // Verify user exists by getting it
        const getResult = yield* client.getUser({
          UserName: TEST_USER_NAME,
        });

        expect(getResult.User).toBeDefined();
        expect(getResult.User.UserName).toBe(TEST_USER_NAME);

        // Delete user
        yield* client.deleteUser({
          UserName: TEST_USER_NAME,
        });

        yield* Console.log(`Deleted user: ${TEST_USER_NAME}`);

        // Verify user is deleted
        const deleteVerification = yield* client
          .getUser({
            UserName: TEST_USER_NAME,
          })
          .pipe(
            Effect.map(() => ({ exists: true })),
            Effect.catchAll(() =>
              Effect.succeed({ exists: false }),
            ),
          );

        expect(deleteVerification.exists).toBe(false);
      }),
    { timeout: 30000 },
  );

  it.live(
    "should create and delete IAM role",
    () =>
      Effect.gen(function* () {
        const assumeRolePolicyDocument = JSON.stringify({
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
        });

        yield* Console.log(`Testing IAM role creation and deletion: ${TEST_ROLE_NAME}`);

        // Step 0: Clean up any existing role
        yield* Console.log("Step 0: Cleaning up any existing role...");
        yield* deleteRoleIfExists(TEST_ROLE_NAME);

        // Create role
        const createResult = yield* client.createRole({
          RoleName: TEST_ROLE_NAME,
          AssumeRolePolicyDocument: assumeRolePolicyDocument,
          Path: "/test/",
          Description: "Test role for IAM smoke tests",
        });

        expect(createResult.Role).toBeDefined();
        expect(createResult.Role.RoleName).toBe(TEST_ROLE_NAME);
        expect(createResult.Role.Path).toBe("/test/");

        yield* Console.log(`Created role: ${createResult.Role.RoleName}`);

        // Verify role exists by getting it
        const getResult = yield* client.getRole({
          RoleName: TEST_ROLE_NAME,
        });

        expect(getResult.Role).toBeDefined();
        expect(getResult.Role.RoleName).toBe(TEST_ROLE_NAME);
        expect(typeof getResult.Role.AssumeRolePolicyDocument).toBe("object");

        // Delete role
        yield* client.deleteRole({
          RoleName: TEST_ROLE_NAME,
        });

        yield* Console.log(`Deleted role: ${TEST_ROLE_NAME}`);

        // Verify role is deleted
        const deleteVerification = yield* client
          .getRole({
            RoleName: TEST_ROLE_NAME,
          })
          .pipe(
            Effect.map(() => ({ exists: true })),
            Effect.catchAll(() =>
              Effect.succeed({ exists: false }),
            ),
          );

        expect(deleteVerification.exists).toBe(false);
      }),
    { timeout: 30000 },
  );

  it.live(
    "should create and delete IAM policy",
    () =>
      Effect.gen(function* () {
        const policyDocument = JSON.stringify({
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Action: ["s3:GetObject"],
              Resource: "arn:aws:s3:::test-bucket/*",
            },
          ],
        });

        yield* Console.log(`Testing IAM policy creation and deletion: ${TEST_POLICY_NAME}`);

        // Step 0: Clean up any existing policy
        yield* Console.log("Step 0: Cleaning up any existing policy...");
        const accountId = "123456789012"; // This would typically come from STS
        const policyArn = `arn:aws:iam::${accountId}:policy/test/${TEST_POLICY_NAME}`;
        yield* deletePolicyIfExists(policyArn);

        // Create policy
        const createResult = yield* client.createPolicy({
          PolicyName: TEST_POLICY_NAME,
          PolicyDocument: policyDocument,
          Path: "/test/",
          Description: "Test policy for IAM smoke tests",
        });

        expect(createResult.Policy).toBeDefined();
        expect(createResult.Policy?.PolicyName).toBe(TEST_POLICY_NAME);
        expect(createResult.Policy?.Path).toBe("/test/");

        yield* Console.log(`Created policy: ${createResult.Policy?.PolicyName}`);

        // Verify policy exists by getting it
        const getResult = yield* client.getPolicy({
          PolicyArn: createResult.Policy?.Arn || "",
        });

        expect(getResult.Policy).toBeDefined();
        expect(getResult.Policy?.PolicyName).toBe(TEST_POLICY_NAME);

        // Delete policy
        yield* client.deletePolicy({
          PolicyArn: createResult.Policy?.Arn || "",
        });

        yield* Console.log(`Deleted policy: ${TEST_POLICY_NAME}`);

        // Verify policy is deleted
        const deleteVerification = yield* client
          .getPolicy({
            PolicyArn: createResult.Policy?.Arn || "",
          })
          .pipe(
            Effect.map(() => ({ exists: true })),
            Effect.catchAll(() =>
              Effect.succeed({ exists: false }),
            ),
          );

        expect(deleteVerification.exists).toBe(false);
      }),
    { timeout: 30000 },
  );
});
