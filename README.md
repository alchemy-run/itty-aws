# itty-aws

A lightweight AWS SDK implementation for [Effect](https://effect.website) implemented with a single [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and types generated from the AWS API specifications. 

`itty-aws` captures the entire AWS API surface area, including each API's exact error codes:

- **Effect**: Type-safe error handling, built-in retries, composable operations
- **Simple API**: `client.apiName(..)` instead of `client.send(Command)`
- **Lightweight**: Much smaller than AWS SDK v3
- **Fast cold starts**: No impact on Lambda startup times

```ts
import { DynamoDB } from "itty-aws/dynamodb";
import { Effect, Schedule } from "effect";

const ddb = new DynamoDB({ region: "us-east-1" });

// Type-safe operations with built-in error handling
const program = Effect.gen(function* () {
  const user = yield* ddb.getItem({
    TableName: "users",
    Key: { id: { S: "123" } }
  }).pipe(
    Effect.catchTag("ResourceNotFoundException", () => 
      Effect.succeed({ Item: undefined })
    ),
    Effect.retry({
      times: 3,
      schedule: Schedule.exponential("1 second")
    })
  );

  return user.Item;
});
```

## Why?

The official AWS SDK v3 is a massive 200+ NPM package monorepo with an awkward `client.send(new Command())` syntax that is a heavy dependency in your bundle. The `@effect-aws/*` project adapts the AWS SDK v3 to Effect, but at the cost of an additional 200+ NPM packages. 

`itty-aws` implements a standlone AWS SDK with a single NPM package containing a `Proxy` and types generated from the Smithy spec. 

`itty-aws` also brings back the good ol' days of `aws-sdk` (v2) where instead of the clunky `client.send(new Command())` syntax, `itty-aws` supports `client.apiName(..)` syntax:

```ts
const client = new DynamoDB({ region: "us-east-1" });

// instead of just simply calling a method
yield* client.getItem({
  TableName: "users",
  Key: { id: { S: "123" } }
})
```

Compare this to the official AWS SDK v3, which requires you to construct a Command:

```ts
import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });

// instead of just simply calling a method
await client.send(new GetItemCommand({
  TableName: "users",
  Key: { id: { S: "123" } }
}))
```

## Installation

```bash
npm install itty-aws
```

> [!NOTE]
> `itty-aws` requires [Effect](https://effect.website) as a peer dependency for type-safe error handling and composable operations. If your package manager does not automatically install peer dependencies, you will need to install `effect` as well.

## Usage

Create a client for the service you want to use. The service will expose each API as a method that returns an `Effect` value with the correct response and error types.

```ts
import { DynamoDB } from "itty-aws/dynamodb";
import { Effect, Console, Schedule } from "effect";

const ddb = new DynamoDB({ region: "us-east-1" });

const program = Effect.gen(function* () {
  // All operations return Effect values with typed errors
  const response = yield* ddb.getItem({
    TableName: "my-table",
    Key: { pk: { S: "user#123" } }
  }).pipe(
    // Handle specific AWS errors
    Effect.catchTag("ResourceNotFoundException", () => 
      Effect.succeed({ Item: undefined })
    ),
    // Built-in retry with exponential backoff
    Effect.retry({
      times: 3,
      schedule: Schedule.exponential("1 second"),
      while: (error) => error._tag === "ThrottlingException"
    }),
    Effect.timeout("30 seconds")
  );
  
  yield* Console.log("Item:", response.Item);
});

// Execute the program
Effect.runPromise(program);
```

## Exact Error Modeling

Each operation's `Effect.Effect` type specifies exactly which errors can occur. This robust error handling allows you to handle errors exactly as you choose.

```ts
putItem(
  input: PutItemInput,
): Effect.Effect<
  PutItemOutput,
  | ConditionalCheckFailedException
  | InternalServerError
  | InvalidEndpointException
  | ItemCollectionSizeLimitExceededException
  | ProvisionedThroughputExceededException
  | ReplicatedWriteConflictException
  | RequestLimitExceeded
  | ResourceNotFoundException
  | TransactionConflictException
  | CommonAwsError
>;
```

## Authentication

`itty-aws` provides flexible authentication options. You can pass credentials directly to the client or use the AWS credential provider chain via Effect's dependency injection.

### Option 1: Direct Credentials

Pass credentials directly in the client configuration:

```ts
import { DynamoDB } from "itty-aws/dynamodb";

const ddb = new DynamoDB({
  region: "us-east-1",
  credentials: {
    accessKeyId: "YOUR_ACCESS_KEY_ID",
    secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
    sessionToken: "YOUR_SESSION_TOKEN" // optional
  }
});
```

### Option 2: AWS Credential Provider Chain (Recommended)

For production applications, use the AWS credential provider chain that automatically resolves credentials from environment variables, IAM roles, SSO, credential files, etc.:

```ts
import { DynamoDB } from "itty-aws/dynamodb";
import { DefaultCredentials } from "itty-aws/credential.service";
import { Credentials } from "itty-aws/credentials";
import { Effect } from "effect";

const ddb = new DynamoDB({ region: "us-east-1" });

const program = Effect.gen(function* () {
  const response = yield* ddb.getItem({
    TableName: "my-table",
    Key: { pk: { S: "user#123" } }
  });
  
  return response.Item;
}).pipe(
  Effect.provideService(Credentials, DefaultCredentials)
);

Effect.runPromise(program);
```

The `DefaultCredentials` provider uses the AWS SDK v3 credential-providers module, calling `fromNodeProviderChain()`. See the [documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/#fromnodeproviderchain).

### Option 3: Custom Credential Provider

You can also create custom credential providers:

```ts
import { Credentials } from "itty-aws/credentials";
import { Effect } from "effect";

const customCredentials: Credentials = {
  getCredentials: async () => ({
    accessKeyId: await getAccessKeyFromVault(),
    secretAccessKey: await getSecretFromVault(),
    sessionToken: await getSessionTokenFromVault()
  })
};

const program = Effect.gen(function* () {
  // Your operations here
}).pipe(
  Effect.provideService(Credentials, customCredentials)
);
```

## How itty-aws Works

We use the official AWS API models from the [`aws/api-models-aws`](https://github.com/aws/api-models-aws) repository as a git submodule to bring in the latest published Smithy models from AWS.

Those models used to generate TypeScript types (types only, no runtime code) for each service in [src/services](src/services).

The [src/client.ts](src/client.ts) contains the proxy that is used to dynamically construct:
1. the Client for a service.
2. TaggedError types for each error code.

The service's client is a proxy that intercepts method calls to determine the API name and then submits the request to AWS. `aws4fetch` is used to sign the request.

Service endpoints, AWS service names (used for signing), SerDe for the 6 procotols AWS uses across it's services, and other internal details are all extracted from the Smithy models to make a simplified user experience when interacting with any of the 400+ AWS services. 

All service errors are modeled with Effect's TaggedErrors, purely as `declare class` to avoid the code size cost of a physical class. The proxy constructs the correct `TaggedError` type on the fly from the AWS service response.

<!-- BUNDLE_SIZE_REPORT -->
# Bundle Size Comparison (per service)

- Target: Node 18, ESM
- Minification: on; tree-shaking; NODE_ENV=production
- Services tested: 408
- aws-sdk-v3 failures: 6

| Service | itty-aws<br/>(KB) | vs<br/>aws-sdk-v3 | itty-aws<br/>(no Effect, KB) | vs<br/>aws-sdk-v3 | aws-sdk-v3<br/>(KB) |
|---------|--------------:|--------:|--------------------------:|--------:|----------------:|
| AccessAnalyzer | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| Account | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| ACM | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| ACMPCA | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| AIOps | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| amp | 46 | <span style="color: red;">▲ +194%</span> | 5 | <span style="color: green;">▼ -69%</span> | 16 |
| Amplify | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| AmplifyBackend | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| AmplifyUIBuilder | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| APIGateway | 47 | <span style="color: green;">▼ -30%</span> | 6 | <span style="color: green;">▼ -91%</span> | 67 |
| ApiGatewayManagementApi | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| ApiGatewayV2 | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| AppMesh | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| AppConfig | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| AppConfigData | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| AppFabric | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Appflow | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| AppIntegrations | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ApplicationAutoScaling | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| ApplicationDiscoveryService | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| ApplicationInsights | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| ApplicationSignals | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ApplicationCostProfiler | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| AppRunner | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| AppStream | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| AppSync | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| AppTest | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ARCZonalShift | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Artifact | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Athena | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| AuditManager | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| AutoScaling | 61 | <span style="color: green;">▼ -8%</span> | 20 | <span style="color: green;">▼ -69%</span> | 67 |
| AutoScalingPlans | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| b2bi | 45 | <span style="color: red;">▲ +202%</span> | 4 | <span style="color: green;">▼ -71%</span> | 15 |
| Backup | 47 | <span style="color: green;">▼ -30%</span> | 6 | <span style="color: green;">▼ -91%</span> | 67 |
| BackupGateway | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| BackupSearch | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Batch | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| BCMDataExports | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| BCMPricingCalculator | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| Bedrock | 46 | <span style="color: green;">▼ -33%</span> | 5 | <span style="color: green;">▼ -92%</span> | 69 |
| BedrockAgent | 46 | <span style="color: green;">▼ -33%</span> | 5 | <span style="color: green;">▼ -92%</span> | 69 |
| BedrockAgentRuntime | 46 | <span style="color: green;">▼ -39%</span> | 5 | <span style="color: green;">▼ -93%</span> | 75 |
| BedrockAgentCore | 46 | <span style="color: green;">▼ -38%</span> | 5 | <span style="color: green;">▼ -93%</span> | 74 |
| BedrockAgentCoreControl | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| BedrockDataAutomation | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| BedrockDataAutomationRuntime | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| BedrockRuntime | 46 | <span style="color: green;">▼ -43%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| Billing | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| billingconductor | 46 | <span style="color: red;">▲ +194%</span> | 5 | <span style="color: green;">▼ -68%</span> | 16 |
| Braket | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| chatbot | 46 | <span style="color: red;">▲ +183%</span> | 5 | <span style="color: green;">▼ -70%</span> | 16 |
| Chime | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| ChimeSDKIdentity | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ChimeSDKMediaPipelines | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ChimeSDKMeetings | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ChimeSDKMessaging | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| ChimeSDKVoice | 47 | <span style="color: green;">▼ -30%</span> | 6 | <span style="color: green;">▼ -91%</span> | 67 |
| CleanRooms | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| CleanRoomsML | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| Cloud9 | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| CloudControl | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| CloudDirectory | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -92%</span> | 68 |
| CloudFormation | 64 | <span style="color: green;">▼ -7%</span> | 23 | <span style="color: green;">▼ -66%</span> | 69 |
| CloudFront | 46 | <span style="color: green;">▼ -38%</span> | 5 | <span style="color: green;">▼ -93%</span> | 73 |
| CloudFrontKeyValueStore | 46 | <span style="color: green;">▼ -35%</span> | 5 | <span style="color: green;">▼ -93%</span> | 70 |
| CloudHSM | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| CloudHSMV2 | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| CloudSearch | 55 | <span style="color: green;">▼ -18%</span> | 14 | <span style="color: green;">▼ -79%</span> | 67 |
| CloudSearchDomain | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| CloudTrail | 45 | <span style="color: green;">▼ -35%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| CloudTrailData | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| CloudWatch | 58 | <span style="color: green;">▼ -17%</span> | 17 | <span style="color: green;">▼ -76%</span> | 69 |
| CloudWatchEvents | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| CloudWatchLogs | 45 | <span style="color: green;">▼ -39%</span> | 4 | <span style="color: green;">▼ -94%</span> | 74 |
| codeartifact | 46 | <span style="color: red;">▲ +187%</span> | 5 | <span style="color: green;">▼ -68%</span> | 16 |
| CodeBuild | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| CodeCatalyst | 46 | <span style="color: red;">▲ +2%</span> | 5 | <span style="color: green;">▼ -89%</span> | 45 |
| CodeCommit | 45 | <span style="color: green;">▼ -38%</span> | 4 | <span style="color: green;">▼ -94%</span> | 73 |
| CodeConnections | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| CodeDeploy | 45 | <span style="color: green;">▼ -36%</span> | 4 | <span style="color: green;">▼ -94%</span> | 70 |
| CodeGuruReviewer | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| CodeGuruSecurity | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| CodeGuruProfiler | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| CodePipeline | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| codestarnotifications | 46 | <span style="color: red;">▲ +194%</span> | 5 | <span style="color: green;">▼ -70%</span> | 16 |
| CognitoIdentity | 45 | <span style="color: green;">▼ -30%</span> | 4 | <span style="color: green;">▼ -93%</span> | 65 |
| CognitoIdentityProvider | 45 | <span style="color: green;">▼ -35%</span> | 4 | <span style="color: green;">▼ -94%</span> | 70 |
| CognitoSync | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Comprehend | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| ComprehendMedical | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| ComputeOptimizer | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| ConfigService | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| Connect | 49 | <span style="color: green;">▼ -28%</span> | 8 | <span style="color: green;">▼ -88%</span> | 68 |
| ConnectContactLens | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| ConnectCampaigns | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ConnectCampaignsV2 | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ConnectCases | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ConnectParticipant | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ControlCatalog | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ControlTower | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| CostExplorer | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| CostOptimizationHub | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| CustomerProfiles | 46 | <span style="color: green;">▼ -31%</span> | 6 | <span style="color: green;">▼ -92%</span> | 67 |
| DataPipeline | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| DatabaseMigrationService | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| DataBrew | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| DataExchange | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| DataSync | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| DataZone | 47 | <span style="color: green;">▼ -31%</span> | 6 | <span style="color: green;">▼ -91%</span> | 68 |
| DAX | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| deadline | 47 | <span style="color: red;">▲ +192%</span> | 6 | <span style="color: green;">▼ -64%</span> | 16 |
| Detective | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| DeviceFarm | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| DevOpsGuru | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| DirectConnect | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| DirectoryService | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| DirectoryServiceData | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| DLM | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| DocDB | 58 | <span style="color: green;">▼ -17%</span> | 17 | <span style="color: green;">▼ -75%</span> | 70 |
| DocDBElastic | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| drs | 46 | <span style="color: red;">▲ +195%</span> | 5 | <span style="color: green;">▼ -68%</span> | 16 |
| DSQL | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| DynamoDB | 45 | <span style="color: green;">▼ -39%</span> | 4 | <span style="color: green;">▼ -94%</span> | 74 |
| DynamoDBStreams | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| EBS | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| EC2 | 137 | <span style="color: red;">▲ +106%</span> | 96 | <span style="color: red;">▲ +45%</span> | 67 |
| EC2InstanceConnect | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| ECR | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| ECRPUBLIC | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| ECS | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| EFS | 46 | <span style="color: green;">▼ -34%</span> | 5 | <span style="color: green;">▼ -93%</span> | 69 |
| EKS | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| EKSAuth | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| ElasticBeanstalk | 59 | <span style="color: green;">▼ -13%</span> | 18 | <span style="color: green;">▼ -73%</span> | 67 |
| ElasticLoadBalancing | 56 | <span style="color: green;">▼ -18%</span> | 15 | <span style="color: green;">▼ -78%</span> | 68 |
| ElasticTranscoder | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| ElastiCache | 61 | <span style="color: green;">▼ -14%</span> | 20 | <span style="color: green;">▼ -71%</span> | 71 |
| ElasticsearchService | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| EMR | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| EMRServerless | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| EntityResolution | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| EventBridge | 45 | <span style="color: green;">▼ -35%</span> | 4 | <span style="color: green;">▼ -94%</span> | 70 |
| Evidently | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| evs | 45 | <span style="color: red;">▲ +221%</span> | 4 | <span style="color: green;">▼ -70%</span> | 14 |
| finspace | 46 | <span style="color: red;">▲ +175%</span> | 5 | <span style="color: green;">▼ -70%</span> | 17 |
| finspacedata | 46 | <span style="color: red;">▲ +194%</span> | 5 | <span style="color: green;">▼ -69%</span> | 16 |
| Firehose | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| fis | 46 | <span style="color: red;">▲ +189%</span> | 5 | <span style="color: green;">▼ -70%</span> | 16 |
| FMS | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| forecast | 45 | <span style="color: red;">▲ +221%</span> | 4 | <span style="color: green;">▼ -70%</span> | 14 |
| forecastquery | 45 | <span style="color: red;">▲ +212%</span> | 4 | <span style="color: green;">▼ -70%</span> | 15 |
| FraudDetector | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| FreeTier | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| FSx | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| GameLift | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| GameLiftStreams | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| GeoMaps | 46 | <span style="color: green;">▼ -33%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| GeoPlaces | 46 | <span style="color: green;">▼ -35%</span> | 5 | <span style="color: green;">▼ -93%</span> | 70 |
| GeoRoutes | 46 | <span style="color: green;">▼ -38%</span> | 5 | <span style="color: green;">▼ -94%</span> | 73 |
| Glacier | 46 | <span style="color: green;">▼ -33%</span> | 5 | <span style="color: green;">▼ -92%</span> | 69 |
| GlobalAccelerator | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| Glue | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| grafana | 46 | <span style="color: red;">▲ +193%</span> | 5 | <span style="color: green;">▼ -69%</span> | 16 |
| Greengrass | 46 | <span style="color: green;">▼ -31%</span> | 6 | <span style="color: green;">▼ -92%</span> | 67 |
| GreengrassV2 | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| GroundStation | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| GuardDuty | 46 | <span style="color: green;">▼ -30%</span> | 5 | <span style="color: green;">▼ -92%</span> | 66 |
| Health | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| HealthLake | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| IAM | 62 | <span style="color: green;">▼ -10%</span> | 22 | <span style="color: green;">▼ -69%</span> | 69 |
| identitystore | 45 | <span style="color: red;">▲ +208%</span> | 4 | <span style="color: green;">▼ -71%</span> | 15 |
| imagebuilder | 46 | <span style="color: red;">▲ +192%</span> | 5 | <span style="color: green;">▼ -67%</span> | 16 |
| Inspector | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| InspectorScan | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| Inspector2 | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| InternetMonitor | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| Invoicing | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| IoT | 48 | <span style="color: green;">▼ -29%</span> | 8 | <span style="color: green;">▼ -89%</span> | 68 |
| IoTDataPlane | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| IoTEvents | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| IoTEventsData | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| IoTJobsDataPlane | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| IoTManagedIntegrations | 46 | <span style="color: green;">▼ -30%</span> | 5 | <span style="color: green;">▼ -92%</span> | 66 |
| IoTWireless | 47 | <span style="color: green;">▼ -30%</span> | 6 | <span style="color: green;">▼ -91%</span> | 66 |
| IoTAnalytics | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| IotDeviceAdvisor | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| IoTFleetHub | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| IoTFleetWise | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| IoTSecureTunneling | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| IoTSiteWise | 47 | <span style="color: green;">▼ -37%</span> | 6 | <span style="color: green;">▼ -92%</span> | 74 |
| IoTThingsGraph | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| IoTTwinMaker | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| ivs | 46 | <span style="color: red;">▲ +200%</span> | 5 | <span style="color: green;">▼ -68%</span> | 15 |
| IVSRealTime | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ivschat | 46 | <span style="color: red;">▲ +175%</span> | 5 | <span style="color: green;">▼ -72%</span> | 17 |
| Kafka | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| KafkaConnect | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| kendra | 45 | <span style="color: red;">▲ +216%</span> | 4 | <span style="color: green;">▼ -70%</span> | 14 |
| KendraRanking | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| Keyspaces | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| KeyspacesStreams | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| Kinesis | 45 | <span style="color: green;">▼ -40%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| KinesisAnalytics | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| KinesisAnalyticsV2 | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| KinesisVideo | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| KinesisVideoArchivedMedia | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| KinesisVideoMedia | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| KinesisVideoSignaling | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| KinesisVideoWebRTCStorage | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| KMS | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| LakeFormation | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| Lambda | 46 | <span style="color: green;">▼ -38%</span> | 5 | <span style="color: green;">▼ -93%</span> | 75 |
| LaunchWizard | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| LexModelBuildingService | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| LexModelsV2 | 47 | <span style="color: green;">▼ -30%</span> | 6 | <span style="color: green;">▼ -91%</span> | 66 |
| LexRuntimeService | 46 | <span style="color: green;">▼ -33%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| LexRuntimeV2 | 46 | <span style="color: green;">▼ -40%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| LicenseManager | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| LicenseManagerLinuxSubscriptions | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| LicenseManagerUserSubscriptions | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Lightsail | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| Location | 46 | <span style="color: green;">▼ -30%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| LookoutEquipment | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| LookoutMetrics | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| LookoutVision | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| m2 | 46 | <span style="color: red;">▲ +187%</span> | 5 | <span style="color: green;">▼ -69%</span> | 16 |
| MachineLearning | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| Macie2 | 46 | <span style="color: green;">▼ -30%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| MailManager | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| ManagedBlockchain | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ManagedBlockchainQuery | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| MarketplaceAgreement | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| MarketplaceCatalog | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| MarketplaceCommerceAnalytics | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| MarketplaceDeployment | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| MarketplaceEntitlementService | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| MarketplaceMetering | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| MarketplaceReporting | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| MediaConnect | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| MediaConvert | 46 | <span style="color: green;">▼ -46%</span> | 5 | <span style="color: green;">▼ -94%</span> | 84 |
| MediaLive | 47 | <span style="color: green;">▼ -30%</span> | 6 | <span style="color: green;">▼ -91%</span> | 67 |
| MediaPackage | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| MediaPackageVod | 46 | <span style="color: green;">▼ -33%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| MediaPackageV2 | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| MediaStore | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| MediaStoreData | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| MediaTailor | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 66 |
| MedicalImaging | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| MemoryDB | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| mgn | 46 | <span style="color: red;">▲ +194%</span> | 5 | <span style="color: green;">▼ -67%</span> | 16 |
| MigrationHub | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| MigrationHubRefactorSpaces | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| MigrationHubConfig | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| MigrationHubOrchestrator | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| MigrationHubStrategy | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| MPA | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| mq | 46 | <span style="color: red;">▲ +167%</span> | 5 | <span style="color: green;">▼ -72%</span> | 17 |
| MTurk | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| MWAA | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Neptune | 60 | <span style="color: green;">▼ -15%</span> | 19 | <span style="color: green;">▼ -73%</span> | 70 |
| NeptuneGraph | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| neptunedata | 46 | <span style="color: red;">▲ +184%</span> | 5 | <span style="color: green;">▼ -69%</span> | 16 |
| NetworkFirewall | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| NetworkFlowMonitor | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| NetworkManager | 47 | <span style="color: green;">▼ -32%</span> | 6 | <span style="color: green;">▼ -92%</span> | 68 |
| NetworkMonitor | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| Notifications | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| NotificationsContacts | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| OAM | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| ObservabilityAdmin | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| odb | 45 | <span style="color: red;">▲ +219%</span> | 4 | <span style="color: green;">▼ -70%</span> | 14 |
| Omics | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| OpenSearch | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| OpenSearchServerless | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| OpsWorks | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| OpsWorksCM | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| Organizations | 45 | <span style="color: green;">▼ -35%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| OSIS | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Outposts | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Panorama | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| PartnerCentralSelling | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| PaymentCryptography | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| PaymentCryptographyData | 46 | <span style="color: green;">▼ -33%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| PcaConnectorAd | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| PcaConnectorScep | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| PCS | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| Personalize | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| PersonalizeEvents | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| PersonalizeRuntime | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| PI | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| Pinpoint | 47 | <span style="color: green;">▼ -31%</span> | 6 | <span style="color: green;">▼ -91%</span> | 68 |
| PinpointEmail | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 66 |
| PinpointSMSVoice | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| PinpointSMSVoiceV2 | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| Pipes | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Polly | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Pricing | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| PrivateNetworks | 46 | <span style="color: green;">▼ -35%</span> | 5 | <span style="color: green;">▼ -93%</span> | 70 |
| Proton | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| QApps | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| QBusiness | 46 | <span style="color: green;">▼ -39%</span> | 6 | <span style="color: green;">▼ -93%</span> | 77 |
| QConnect | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| QLDB | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| QLDBSession | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| QuickSight | 48 | <span style="color: green;">▼ -29%</span> | 7 | <span style="color: green;">▼ -89%</span> | 68 |
| RAM | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| rbin | 46 | <span style="color: red;">▲ +195%</span> | 5 | <span style="color: green;">▼ -70%</span> | 15 |
| RDS | 71 | <span style="color: green;">▼ -2%</span> | 30 | <span style="color: green;">▼ -58%</span> | 73 |
| RDSData | 45 | <span style="color: green;">▼ -33%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| Redshift | 66 | <span style="color: green;">▼ -10%</span> | 25 | <span style="color: green;">▼ -66%</span> | 73 |
| RedshiftData | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| RedshiftServerless | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| Rekognition | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| repostspace | 46 | <span style="color: red;">▲ +194%</span> | 5 | <span style="color: green;">▼ -70%</span> | 16 |
| resiliencehub | 46 | <span style="color: red;">▲ +202%</span> | 5 | <span style="color: green;">▼ -65%</span> | 15 |
| ResourceExplorer2 | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| ResourceGroups | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| ResourceGroupsTaggingAPI | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| RoboMaker | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| RolesAnywhere | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| Route53 | 45 | <span style="color: green;">▼ -37%</span> | 4 | <span style="color: green;">▼ -94%</span> | 71 |
| Route53Domains | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| Route53RecoveryCluster | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| Route53RecoveryControlConfig | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Route53RecoveryReadiness | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| Route53Profiles | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Route53Resolver | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| RUM | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| S3 | 46 | <span style="color: green;">▼ -49%</span> | 5 | <span style="color: green;">▼ -94%</span> | 90 |
| S3Control | 45 | <span style="color: green;">▼ -39%</span> | 4 | <span style="color: green;">▼ -95%</span> | 73 |
| S3Outposts | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| S3Tables | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| S3Vectors | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SageMaker | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| SageMakerA2IRuntime | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SagemakerEdge | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SageMakerFeatureStoreRuntime | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SageMakerGeospatial | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| SageMakerMetrics | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SageMakerRuntime | 46 | <span style="color: green;">▼ -39%</span> | 5 | <span style="color: green;">▼ -94%</span> | 74 |
| savingsplans | 46 | <span style="color: red;">▲ +198%</span> | 5 | <span style="color: green;">▼ -70%</span> | 15 |
| Scheduler | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| schemas | 46 | <span style="color: red;">▲ +179%</span> | 5 | <span style="color: green;">▼ -70%</span> | 16 |
| SecretsManager | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| SecurityIR | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SecurityHub | 47 | <span style="color: green;">▼ -30%</span> | 6 | <span style="color: green;">▼ -92%</span> | 67 |
| SecurityLake | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| ServerlessApplicationRepository | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ServiceCatalog | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| ServiceCatalogAppRegistry | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| ServiceQuotas | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| ServiceDiscovery | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| SES | 58 | <span style="color: green;">▼ -16%</span> | 17 | <span style="color: green;">▼ -75%</span> | 69 |
| SESv2 | 47 | <span style="color: green;">▼ -33%</span> | 6 | <span style="color: green;">▼ -92%</span> | 70 |
| SFN | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| Shield | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| signer | 46 | <span style="color: red;">▲ +191%</span> | 5 | <span style="color: green;">▼ -70%</span> | 16 |
| SimSpaceWeaver | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SMS | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| SnowDeviceManagement | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| Snowball | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| SNS | 56 | <span style="color: green;">▼ -19%</span> | 15 | <span style="color: green;">▼ -79%</span> | 68 |
| SocialMessaging | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SQS | 45 | <span style="color: green;">▼ -34%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| SSM | 45 | <span style="color: green;">▼ -37%</span> | 4 | <span style="color: green;">▼ -94%</span> | 71 |
| SSMContacts | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| SSMGuiConnect | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SSMIncidents | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| SSMQuickSetup | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SsmSap | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SSO | 45 | <span style="color: red;">▲ +32%</span> | 5 | <span style="color: green;">▼ -87%</span> | 34 |
| SSOAdmin | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| SSOOIDC | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| StorageGateway | 45 | <span style="color: green;">▼ -31%</span> | 4 | <span style="color: green;">▼ -93%</span> | 66 |
| STS | 54 | <span style="color: green;">▼ -22%</span> | 13 | <span style="color: green;">▼ -81%</span> | 69 |
| SupplyChain | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Support | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| SupportApp | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| SWF | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| synthetics | 46 | <span style="color: red;">▲ +185%</span> | 5 | <span style="color: green;">▼ -70%</span> | 16 |
| TaxSettings | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| Textract | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| TimestreamInfluxDB | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| TimestreamQuery | 45 | <span style="color: green;">▼ -36%</span> | 4 | <span style="color: green;">▼ -94%</span> | 71 |
| TimestreamWrite | 45 | <span style="color: green;">▼ -36%</span> | 4 | <span style="color: green;">▼ -94%</span> | 71 |
| tnb | 46 | <span style="color: red;">▲ +203%</span> | 5 | <span style="color: green;">▼ -67%</span> | 15 |
| Transcribe | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| TranscribeStreaming | 46 | <span style="color: green;">▼ -42%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| Transfer | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 66 |
| Translate | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| TrustedAdvisor | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| VerifiedPermissions | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| VoiceID | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| VPCLattice | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| WAF | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| WAFRegional | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| WAFV2 | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| WellArchitected | 46 | <span style="color: green;">▼ -30%</span> | 5 | <span style="color: green;">▼ -92%</span> | 66 |
| Wisdom | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| WorkDocs | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 68 |
| WorkMail | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| WorkMailMessageFlow | 45 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 66 |
| WorkSpaces | 45 | <span style="color: green;">▼ -33%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| WorkspacesInstances | 45 | <span style="color: green;">▼ -32%</span> | 4 | <span style="color: green;">▼ -94%</span> | 67 |
| WorkSpacesThinClient | 46 | <span style="color: green;">▼ -32%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |
| WorkSpacesWeb | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -92%</span> | 67 |
| XRay | 46 | <span style="color: green;">▼ -31%</span> | 5 | <span style="color: green;">▼ -93%</span> | 67 |