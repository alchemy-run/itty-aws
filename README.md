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
- Services tested: 411
- aws-sdk-v3 failures: 6

| Service | itty-aws<br/>(KB) | vs<br/>aws-sdk-v3 | itty-aws<br/>(no Effect, KB) | vs<br/>aws-sdk-v3 | aws-sdk-v3<br/>(KB) |
|---------|--------------:|--------:|--------------------------:|--------:|----------------:|
| AccessAnalyzer | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 82 |
| Account | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| ACM | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| ACMPCA | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| AIOps | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| amp | 16 | <span style="color: red;">▲ +6%</span> | 5 | <span style="color: green;">▼ -67%</span> | 15 |
| Amplify | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| AmplifyBackend | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| AmplifyUIBuilder | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| APIGateway | 16 | <span style="color: green;">▼ -81%</span> | 6 | <span style="color: green;">▼ -93%</span> | 85 |
| ApiGatewayManagementApi | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| ApiGatewayV2 | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| AppMesh | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 82 |
| AppConfig | 16 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| AppConfigData | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| AppFabric | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| Appflow | 15 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| AppIntegrations | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| ApplicationAutoScaling | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| ApplicationDiscoveryService | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| ApplicationInsights | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| ApplicationSignals | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| ApplicationCostProfiler | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| AppRunner | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| AppStream | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| AppSync | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| AppTest | 15 | <span style="color: green;">▼ -78%</span> | 5 | <span style="color: green;">▼ -93%</span> | 70 |
| ARCZonalShift | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| Artifact | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 77 |
| Athena | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| AuditManager | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| AutoScaling | 31 | <span style="color: green;">▼ -60%</span> | 20 | <span style="color: green;">▼ -73%</span> | 76 |
| AutoScalingPlans | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| b2bi | 15 | <span style="color: red;">▲ +3%</span> | 4 | <span style="color: green;">▼ -71%</span> | 14 |
| Backup | 16 | <span style="color: green;">▼ -81%</span> | 6 | <span style="color: green;">▼ -93%</span> | 86 |
| BackupGateway | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| BackupSearch | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| Batch | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 84 |
| BCMDashboards | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| BCMDataExports | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| BCMPricingCalculator | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| BCMRecommendedActions | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| Bedrock | 16 | <span style="color: green;">▼ -82%</span> | 6 | <span style="color: green;">▼ -94%</span> | 93 |
| BedrockAgent | 16 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -94%</span> | 89 |
| BedrockAgentRuntime | 16 | <span style="color: green;">▼ -83%</span> | 5 | <span style="color: green;">▼ -95%</span> | 94 |
| BedrockAgentCore | 16 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -94%</span> | 88 |
| BedrockAgentCoreControl | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 84 |
| BedrockDataAutomation | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| BedrockDataAutomationRuntime | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| BedrockRuntime | 15 | <span style="color: green;">▼ -83%</span> | 5 | <span style="color: green;">▼ -95%</span> | 92 |
| Billing | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| billingconductor | 15 | <span style="color: red;">▲ +5%</span> | 5 | <span style="color: green;">▼ -67%</span> | 15 |
| Braket | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| chatbot | 15 | <span style="color: red;">▲ +8%</span> | 5 | <span style="color: green;">▼ -66%</span> | 14 |
| Chime | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 82 |
| ChimeSDKIdentity | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| ChimeSDKMediaPipelines | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| ChimeSDKMeetings | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| ChimeSDKMessaging | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| ChimeSDKVoice | 16 | <span style="color: green;">▼ -81%</span> | 6 | <span style="color: green;">▼ -93%</span> | 84 |
| CleanRooms | 16 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -94%</span> | 87 |
| CleanRoomsML | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 82 |
| Cloud9 | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| CloudControl | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| CloudDirectory | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| CloudFormation | 33 | <span style="color: green;">▼ -57%</span> | 23 | <span style="color: green;">▼ -70%</span> | 77 |
| CloudFront | 26 | <span style="color: green;">▼ -73%</span> | 15 | <span style="color: green;">▼ -84%</span> | 98 |
| CloudFrontKeyValueStore | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -94%</span> | 80 |
| CloudHSM | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| CloudHSMV2 | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| CloudSearch | 25 | <span style="color: green;">▼ -68%</span> | 14 | <span style="color: green;">▼ -81%</span> | 76 |
| CloudSearchDomain | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 77 |
| CloudTrail | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 80 |
| CloudTrailData | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| CloudWatch | 27 | <span style="color: green;">▼ -65%</span> | 17 | <span style="color: green;">▼ -79%</span> | 77 |
| CloudWatchEvents | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| CloudWatchLogs | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 85 |
| codeartifact | 16 | <span style="color: red;">▲ +2%</span> | 5 | <span style="color: green;">▼ -68%</span> | 15 |
| CodeBuild | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| CodeCatalyst | 16 | <span style="color: green;">▼ -73%</span> | 5 | <span style="color: green;">▼ -92%</span> | 57 |
| CodeCommit | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 83 |
| CodeConnections | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| CodeDeploy | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 80 |
| CodeGuruReviewer | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| CodeGuruSecurity | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| CodeGuruProfiler | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| CodePipeline | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| codestarnotifications | 15 | <span style="color: red;">▲ +30%</span> | 5 | <span style="color: green;">▼ -62%</span> | 12 |
| CognitoIdentity | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| CognitoIdentityProvider | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 79 |
| CognitoSync | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| Comprehend | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| ComprehendMedical | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| ComputeOptimizer | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| ConfigService | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 79 |
| Connect | 19 | <span style="color: green;">▼ -83%</span> | 8 | <span style="color: green;">▼ -93%</span> | 110 |
| ConnectContactLens | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| ConnectCampaigns | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| ConnectCampaignsV2 | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| ConnectCases | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| ConnectParticipant | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| ControlCatalog | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 77 |
| ControlTower | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| CostExplorer | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| CostOptimizationHub | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 79 |
| CustomerProfiles | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 86 |
| DataPipeline | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| DatabaseMigrationService | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 84 |
| DataBrew | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| DataExchange | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| DataSync | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| DataZone | 17 | <span style="color: green;">▼ -83%</span> | 6 | <span style="color: green;">▼ -93%</span> | 99 |
| DAX | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| deadline | 16 | <span style="color: green;">▼ -30%</span> | 6 | <span style="color: green;">▼ -76%</span> | 23 |
| Detective | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| DeviceFarm | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| DevOpsGuru | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| DirectConnect | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| DirectoryService | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| DirectoryServiceData | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| DLM | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -94%</span> | 78 |
| DocDB | 27 | <span style="color: green;">▼ -66%</span> | 17 | <span style="color: green;">▼ -79%</span> | 81 |
| DocDBElastic | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| drs | 16 | <span style="color: green;">▼ -9%</span> | 5 | <span style="color: green;">▼ -71%</span> | 17 |
| DSQL | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| DynamoDB | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 83 |
| DynamoDBStreams | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| EBS | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| EC2 | 106 | <span style="color: green;">▼ -44%</span> | 96 | <span style="color: green;">▼ -49%</span> | 189 |
| EC2InstanceConnect | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| ECR | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| ECRPUBLIC | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| ECS | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 81 |
| EFS | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| EKS | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 84 |
| EKSAuth | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| ElasticBeanstalk | 28 | <span style="color: green;">▼ -63%</span> | 18 | <span style="color: green;">▼ -77%</span> | 76 |
| ElasticLoadBalancing | 25 | <span style="color: green;">▼ -67%</span> | 15 | <span style="color: green;">▼ -81%</span> | 77 |
| ElasticTranscoder | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| ElastiCache | 30 | <span style="color: green;">▼ -63%</span> | 20 | <span style="color: green;">▼ -76%</span> | 83 |
| ElasticsearchService | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| EMR | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| EMRServerless | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| EntityResolution | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| EventBridge | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 80 |
| Evidently | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| evs | 15 | <span style="color: red;">▲ +36%</span> | 4 | <span style="color: green;">▼ -62%</span> | 11 |
| finspace | 16 | <span style="color: green;">▼ -3%</span> | 5 | <span style="color: green;">▼ -69%</span> | 16 |
| finspacedata | 15 | <span style="color: red;">▲ +12%</span> | 5 | <span style="color: green;">▼ -65%</span> | 14 |
| Firehose | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 80 |
| fis | 15 | <span style="color: red;">▲ +9%</span> | 5 | <span style="color: green;">▼ -67%</span> | 14 |
| FMS | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| forecast | 15 | <span style="color: red;">▲ +33%</span> | 4 | <span style="color: green;">▼ -63%</span> | 11 |
| forecastquery | 15 | <span style="color: red;">▲ +41%</span> | 4 | <span style="color: green;">▼ -60%</span> | 11 |
| FraudDetector | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| FreeTier | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| FSx | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 80 |
| GameLift | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| GameLiftStreams | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| GeoMaps | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| GeoPlaces | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -94%</span> | 80 |
| GeoRoutes | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 85 |
| Glacier | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| GlobalAccelerator | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| Glue | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| grafana | 15 | <span style="color: red;">▲ +11%</span> | 5 | <span style="color: green;">▼ -66%</span> | 14 |
| Greengrass | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -93%</span> | 83 |
| GreengrassV2 | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| GroundStation | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| GuardDuty | 16 | <span style="color: green;">▼ -83%</span> | 5 | <span style="color: green;">▼ -94%</span> | 95 |
| Health | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| HealthLake | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| IAM | 32 | <span style="color: green;">▼ -59%</span> | 21 | <span style="color: green;">▼ -72%</span> | 78 |
| identitystore | 15 | <span style="color: red;">▲ +35%</span> | 4 | <span style="color: green;">▼ -62%</span> | 11 |
| imagebuilder | 16 | <span style="color: green;">▼ -22%</span> | 5 | <span style="color: green;">▼ -75%</span> | 20 |
| Inspector | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| InspectorScan | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| Inspector2 | 16 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -94%</span> | 89 |
| InternetMonitor | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| Invoicing | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| IoT | 18 | <span style="color: green;">▼ -83%</span> | 7 | <span style="color: green;">▼ -93%</span> | 104 |
| IoTDataPlane | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| IoTEvents | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| IoTEventsData | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| IoTJobsDataPlane | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 77 |
| IoTManagedIntegrations | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 84 |
| IoTWireless | 16 | <span style="color: green;">▼ -81%</span> | 6 | <span style="color: green;">▼ -94%</span> | 88 |
| IoTAnalytics | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| IotDeviceAdvisor | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| IoTFleetHub | 15 | <span style="color: green;">▼ -78%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| IoTFleetWise | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 83 |
| IoTSecureTunneling | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| IoTSiteWise | 16 | <span style="color: green;">▼ -83%</span> | 6 | <span style="color: green;">▼ -94%</span> | 97 |
| IoTThingsGraph | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| IoTTwinMaker | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 82 |
| ivs | 15 | <span style="color: red;">▲ +9%</span> | 5 | <span style="color: green;">▼ -67%</span> | 14 |
| IVSRealTime | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| ivschat | 15 | <span style="color: red;">▲ +25%</span> | 5 | <span style="color: green;">▼ -63%</span> | 12 |
| Kafka | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 84 |
| KafkaConnect | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| kendra | 15 | <span style="color: red;">▲ +33%</span> | 4 | <span style="color: green;">▼ -63%</span> | 11 |
| KendraRanking | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| Keyspaces | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| KeyspacesStreams | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| Kinesis | 15 | <span style="color: green;">▼ -83%</span> | 4 | <span style="color: green;">▼ -95%</span> | 86 |
| KinesisAnalytics | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| KinesisAnalyticsV2 | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| KinesisVideo | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| KinesisVideoArchivedMedia | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 77 |
| KinesisVideoMedia | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| KinesisVideoSignaling | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| KinesisVideoWebRTCStorage | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| KMS | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| LakeFormation | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 82 |
| Lambda | 16 | <span style="color: green;">▼ -83%</span> | 5 | <span style="color: green;">▼ -94%</span> | 92 |
| LaunchWizard | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| LexModelBuildingService | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| LexModelsV2 | 16 | <span style="color: green;">▼ -82%</span> | 6 | <span style="color: green;">▼ -94%</span> | 93 |
| LexRuntimeService | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| LexRuntimeV2 | 15 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -95%</span> | 87 |
| LicenseManager | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| LicenseManagerLinuxSubscriptions | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| LicenseManagerUserSubscriptions | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| Lightsail | 15 | <span style="color: green;">▼ -84%</span> | 4 | <span style="color: green;">▼ -95%</span> | 92 |
| Location | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| LookoutEquipment | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| LookoutMetrics | 15 | <span style="color: green;">▼ -78%</span> | 5 | <span style="color: green;">▼ -93%</span> | 69 |
| LookoutVision | 15 | <span style="color: green;">▼ -78%</span> | 5 | <span style="color: green;">▼ -93%</span> | 70 |
| m2 | 16 | <span style="color: green;">▼ -1%</span> | 5 | <span style="color: green;">▼ -69%</span> | 16 |
| MachineLearning | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| Macie2 | 16 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -94%</span> | 88 |
| MailManager | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| ManagedBlockchain | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| ManagedBlockchainQuery | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 78 |
| MarketplaceAgreement | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| MarketplaceCatalog | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| MarketplaceCommerceAnalytics | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| MarketplaceDeployment | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| MarketplaceEntitlementService | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| MarketplaceMetering | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| MarketplaceReporting | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| MediaConnect | 16 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -94%</span> | 85 |
| MediaConvert | 15 | <span style="color: green;">▼ -84%</span> | 5 | <span style="color: green;">▼ -95%</span> | 97 |
| MediaLive | 16 | <span style="color: green;">▼ -85%</span> | 6 | <span style="color: green;">▼ -95%</span> | 107 |
| MediaPackage | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| MediaPackageVod | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| MediaPackageV2 | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| MediaStore | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| MediaStoreData | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 76 |
| MediaTailor | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| MedicalImaging | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| MemoryDB | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 80 |
| mgn | 16 | <span style="color: green;">▼ -12%</span> | 5 | <span style="color: green;">▼ -72%</span> | 18 |
| MigrationHub | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| MigrationHubRefactorSpaces | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| MigrationHubConfig | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| MigrationHubOrchestrator | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| MigrationHubStrategy | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| MPA | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| mq | 15 | <span style="color: red;">▲ +6%</span> | 5 | <span style="color: green;">▼ -68%</span> | 14 |
| MTurk | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| MWAA | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| Neptune | 29 | <span style="color: green;">▼ -65%</span> | 19 | <span style="color: green;">▼ -77%</span> | 82 |
| NeptuneGraph | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| neptunedata | 16 | <span style="color: green;">▼ -5%</span> | 5 | <span style="color: green;">▼ -70%</span> | 16 |
| NetworkFirewall | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| NetworkFlowMonitor | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| NetworkManager | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 85 |
| NetworkMonitor | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| Notifications | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| NotificationsContacts | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| OAM | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 77 |
| ObservabilityAdmin | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| odb | 15 | <span style="color: red;">▲ +32%</span> | 4 | <span style="color: green;">▼ -63%</span> | 11 |
| Omics | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 86 |
| OpenSearch | 16 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -94%</span> | 87 |
| OpenSearchServerless | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| OpsWorks | 15 | <span style="color: green;">▼ -78%</span> | 4 | <span style="color: green;">▼ -94%</span> | 68 |
| OpsWorksCM | 15 | <span style="color: green;">▼ -78%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| Organizations | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| OSIS | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| Outposts | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| Panorama | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| PartnerCentralSelling | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 81 |
| PaymentCryptography | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| PaymentCryptographyData | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| PcaConnectorAd | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| PcaConnectorScep | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| PCS | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| Personalize | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| PersonalizeEvents | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| PersonalizeRuntime | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| PI | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| Pinpoint | 17 | <span style="color: green;">▼ -82%</span> | 6 | <span style="color: green;">▼ -93%</span> | 91 |
| PinpointEmail | 16 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| PinpointSMSVoice | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| PinpointSMSVoiceV2 | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| Pipes | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -94%</span> | 81 |
| Polly | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| Pricing | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| PrivateNetworks | 15 | <span style="color: green;">▼ -78%</span> | 5 | <span style="color: green;">▼ -93%</span> | 70 |
| Proton | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| QApps | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| QBusiness | 16 | <span style="color: green;">▼ -83%</span> | 5 | <span style="color: green;">▼ -94%</span> | 97 |
| QConnect | 16 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -94%</span> | 89 |
| QLDB | 15 | <span style="color: green;">▼ -78%</span> | 5 | <span style="color: green;">▼ -93%</span> | 69 |
| QLDBSession | 15 | <span style="color: green;">▼ -79%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| QuickSight | 18 | <span style="color: green;">▼ -86%</span> | 7 | <span style="color: green;">▼ -94%</span> | 128 |
| RAM | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| rbin | 15 | <span style="color: red;">▲ +33%</span> | 4 | <span style="color: green;">▼ -61%</span> | 11 |
| RDS | 40 | <span style="color: green;">▼ -55%</span> | 30 | <span style="color: green;">▼ -66%</span> | 90 |
| RDSData | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -94%</span> | 77 |
| Redshift | 35 | <span style="color: green;">▼ -60%</span> | 25 | <span style="color: green;">▼ -71%</span> | 87 |
| RedshiftData | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| RedshiftServerless | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| Rekognition | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| repostspace | 15 | <span style="color: red;">▲ +21%</span> | 5 | <span style="color: green;">▼ -63%</span> | 13 |
| resiliencehub | 16 | <span style="color: green;">▼ -12%</span> | 5 | <span style="color: green;">▼ -71%</span> | 18 |
| ResourceExplorer2 | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| ResourceGroups | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| ResourceGroupsTaggingAPI | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| RoboMaker | 16 | <span style="color: green;">▼ -78%</span> | 5 | <span style="color: green;">▼ -93%</span> | 70 |
| RolesAnywhere | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| Route53 | 25 | <span style="color: green;">▼ -72%</span> | 14 | <span style="color: green;">▼ -84%</span> | 88 |
| Route53Domains | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| Route53RecoveryCluster | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| Route53RecoveryControlConfig | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| Route53RecoveryReadiness | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| Route53Profiles | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| Route53Resolver | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| RTBFabric | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| RUM | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| S3 | 28 | <span style="color: green;">▼ -75%</span> | 17 | <span style="color: green;">▼ -85%</span> | 112 |
| S3Control | 25 | <span style="color: green;">▼ -73%</span> | 14 | <span style="color: green;">▼ -85%</span> | 94 |
| S3Outposts | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| S3Tables | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| S3Vectors | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 77 |
| SageMaker | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| SageMakerA2IRuntime | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| SagemakerEdge | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| SageMakerFeatureStoreRuntime | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| SageMakerGeospatial | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| SageMakerMetrics | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| SageMakerRuntime | 15 | <span style="color: green;">▼ -82%</span> | 5 | <span style="color: green;">▼ -95%</span> | 84 |
| savingsplans | 15 | <span style="color: red;">▲ +28%</span> | 4 | <span style="color: green;">▼ -62%</span> | 12 |
| Scheduler | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 78 |
| schemas | 15 | <span style="color: red;">▲ +19%</span> | 5 | <span style="color: green;">▼ -63%</span> | 13 |
| SecretsManager | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| SecurityIR | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| SecurityHub | 16 | <span style="color: green;">▼ -86%</span> | 6 | <span style="color: green;">▼ -95%</span> | 120 |
| SecurityLake | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| ServerlessApplicationRepository | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| ServiceCatalog | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| ServiceCatalogAppRegistry | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| ServiceQuotas | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| ServiceDiscovery | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| SES | 27 | <span style="color: green;">▼ -65%</span> | 17 | <span style="color: green;">▼ -78%</span> | 78 |
| SESv2 | 16 | <span style="color: green;">▼ -82%</span> | 6 | <span style="color: green;">▼ -94%</span> | 90 |
| SFN | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| Shield | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| signer | 15 | <span style="color: red;">▲ +18%</span> | 5 | <span style="color: green;">▼ -64%</span> | 13 |
| SimSpaceWeaver | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| SMS | 15 | <span style="color: green;">▼ -78%</span> | 4 | <span style="color: green;">▼ -94%</span> | 69 |
| SnowDeviceManagement | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| Snowball | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| SNS | 25 | <span style="color: green;">▼ -68%</span> | 15 | <span style="color: green;">▼ -81%</span> | 77 |
| SocialMessaging | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| SQS | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 79 |
| SSM | 15 | <span style="color: green;">▼ -83%</span> | 4 | <span style="color: green;">▼ -95%</span> | 85 |
| SSMContacts | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| SSMGuiConnect | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| SSMIncidents | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 80 |
| SSMQuickSetup | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| SsmSap | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| SSO | 15 | <span style="color: green;">▼ -68%</span> | 4 | <span style="color: green;">▼ -90%</span> | 47 |
| SSOAdmin | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| SSOOIDC | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 77 |
| StorageGateway | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| STS | 24 | <span style="color: green;">▼ -69%</span> | 13 | <span style="color: green;">▼ -83%</span> | 76 |
| SupplyChain | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| Support | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| SupportApp | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 76 |
| SWF | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| synthetics | 15 | <span style="color: red;">▲ +13%</span> | 5 | <span style="color: green;">▼ -66%</span> | 14 |
| TaxSettings | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 79 |
| Textract | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| TimestreamInfluxDB | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| TimestreamQuery | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 82 |
| TimestreamWrite | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 82 |
| tnb | 15 | <span style="color: red;">▲ +12%</span> | 5 | <span style="color: green;">▼ -65%</span> | 14 |
| Transcribe | 15 | <span style="color: green;">▼ -82%</span> | 4 | <span style="color: green;">▼ -95%</span> | 81 |
| TranscribeStreaming | 16 | <span style="color: green;">▼ -83%</span> | 5 | <span style="color: green;">▼ -94%</span> | 89 |
| Transfer | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| Translate | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| TrustedAdvisor | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 77 |
| VerifiedPermissions | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| VoiceID | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 76 |
| VPCLattice | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| WAF | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| WAFRegional | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| WAFV2 | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 80 |
| WellArchitected | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| Wisdom | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| WorkDocs | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |
| WorkMail | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| WorkMailMessageFlow | 15 | <span style="color: green;">▼ -80%</span> | 4 | <span style="color: green;">▼ -94%</span> | 76 |
| WorkSpaces | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 77 |
| WorkspacesInstances | 15 | <span style="color: green;">▼ -81%</span> | 4 | <span style="color: green;">▼ -95%</span> | 78 |
| WorkSpacesThinClient | 15 | <span style="color: green;">▼ -80%</span> | 5 | <span style="color: green;">▼ -94%</span> | 78 |
| WorkSpacesWeb | 16 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 83 |
| XRay | 15 | <span style="color: green;">▼ -81%</span> | 5 | <span style="color: green;">▼ -94%</span> | 81 |