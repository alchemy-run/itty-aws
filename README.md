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

## Bundle Size Comparison (per service)

- Target: Node 18, ESM
- Minification: on; tree-shaking; NODE_ENV=production
- Services tested: 408
- aws-sdk-v3 failures: 6

| Service | itty-aws<br/>(KB) | vs<br/>aws-sdk-v3 | itty-aws<br/>(no Effect, KB) | vs<br/>aws-sdk-v3 | aws-sdk-v3<br/>(KB) |
|---------|--------------:|--------:|--------------------------:|--------:|----------------:|
| AccessAnalyzer | 46 | ▼ -32% | 5 | ▼ -93% | 68 |
| Account | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| ACM | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| ACMPCA | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| AIOps | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| amp | 46 | ▲ +194% | 5 | ▼ -69% | 16 |
| Amplify | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| AmplifyBackend | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| AmplifyUIBuilder | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| APIGateway | 47 | ▼ -30% | 6 | ▼ -91% | 67 |
| ApiGatewayManagementApi | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| ApiGatewayV2 | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| AppMesh | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| AppConfig | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| AppConfigData | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| AppFabric | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Appflow | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| AppIntegrations | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| ApplicationAutoScaling | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| ApplicationDiscoveryService | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| ApplicationInsights | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| ApplicationSignals | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ApplicationCostProfiler | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| AppRunner | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| AppStream | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| AppSync | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| AppTest | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ARCZonalShift | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| Artifact | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Athena | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| AuditManager | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| AutoScaling | 61 | ▼ -8% | 20 | ▼ -69% | 67 |
| AutoScalingPlans | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| b2bi | 45 | ▲ +202% | 4 | ▼ -71% | 15 |
| Backup | 47 | ▼ -30% | 6 | ▼ -91% | 67 |
| BackupGateway | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| BackupSearch | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Batch | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| BCMDataExports | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| BCMPricingCalculator | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| Bedrock | 46 | ▼ -33% | 5 | ▼ -92% | 69 |
| BedrockAgent | 46 | ▼ -33% | 5 | ▼ -92% | 69 |
| BedrockAgentRuntime | 46 | ▼ -39% | 5 | ▼ -93% | 75 |
| BedrockAgentCore | 46 | ▼ -38% | 5 | ▼ -93% | 74 |
| BedrockAgentCoreControl | 46 | ▼ -32% | 5 | ▼ -93% | 68 |
| BedrockDataAutomation | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| BedrockDataAutomationRuntime | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| BedrockRuntime | 46 | ▼ -43% | 5 | ▼ -94% | 81 |
| Billing | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| billingconductor | 46 | ▲ +194% | 5 | ▼ -68% | 16 |
| Braket | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| chatbot | 46 | ▲ +183% | 5 | ▼ -70% | 16 |
| Chime | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| ChimeSDKIdentity | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| ChimeSDKMediaPipelines | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ChimeSDKMeetings | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ChimeSDKMessaging | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| ChimeSDKVoice | 47 | ▼ -30% | 6 | ▼ -91% | 67 |
| CleanRooms | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| CleanRoomsML | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| Cloud9 | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| CloudControl | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| CloudDirectory | 46 | ▼ -32% | 5 | ▼ -92% | 68 |
| CloudFormation | 64 | ▼ -7% | 23 | ▼ -66% | 69 |
| CloudFront | 46 | ▼ -38% | 5 | ▼ -93% | 73 |
| CloudFrontKeyValueStore | 46 | ▼ -35% | 5 | ▼ -93% | 70 |
| CloudHSM | 45 | ▼ -31% | 4 | ▼ -93% | 66 |
| CloudHSMV2 | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| CloudSearch | 55 | ▼ -18% | 14 | ▼ -79% | 67 |
| CloudSearchDomain | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| CloudTrail | 45 | ▼ -35% | 4 | ▼ -94% | 69 |
| CloudTrailData | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| CloudWatch | 58 | ▼ -17% | 17 | ▼ -76% | 69 |
| CloudWatchEvents | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| CloudWatchLogs | 45 | ▼ -39% | 4 | ▼ -94% | 74 |
| codeartifact | 46 | ▲ +187% | 5 | ▼ -68% | 16 |
| CodeBuild | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| CodeCatalyst | 46 | ▲ +2% | 5 | ▼ -89% | 45 |
| CodeCommit | 45 | ▼ -38% | 4 | ▼ -94% | 73 |
| CodeConnections | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| CodeDeploy | 45 | ▼ -36% | 4 | ▼ -94% | 70 |
| CodeGuruReviewer | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| CodeGuruSecurity | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| CodeGuruProfiler | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| CodePipeline | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| codestarnotifications | 46 | ▲ +194% | 5 | ▼ -70% | 16 |
| CognitoIdentity | 45 | ▼ -30% | 4 | ▼ -93% | 65 |
| CognitoIdentityProvider | 45 | ▼ -35% | 4 | ▼ -94% | 70 |
| CognitoSync | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| Comprehend | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| ComprehendMedical | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| ComputeOptimizer | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| ConfigService | 45 | ▼ -34% | 4 | ▼ -94% | 69 |
| Connect | 49 | ▼ -28% | 8 | ▼ -88% | 68 |
| ConnectContactLens | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| ConnectCampaigns | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| ConnectCampaignsV2 | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ConnectCases | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ConnectParticipant | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ControlCatalog | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ControlTower | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| CostExplorer | 45 | ▼ -34% | 4 | ▼ -94% | 68 |
| CostOptimizationHub | 45 | ▼ -34% | 4 | ▼ -94% | 68 |
| CustomerProfiles | 46 | ▼ -31% | 6 | ▼ -92% | 67 |
| DataPipeline | 45 | ▼ -31% | 4 | ▼ -93% | 66 |
| DatabaseMigrationService | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| DataBrew | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| DataExchange | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| DataSync | 45 | ▼ -31% | 4 | ▼ -93% | 66 |
| DataZone | 47 | ▼ -31% | 6 | ▼ -91% | 68 |
| DAX | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| deadline | 47 | ▲ +192% | 6 | ▼ -64% | 16 |
| Detective | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| DeviceFarm | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| DevOpsGuru | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| DirectConnect | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| DirectoryService | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| DirectoryServiceData | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| DLM | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| DocDB | 58 | ▼ -17% | 17 | ▼ -75% | 70 |
| DocDBElastic | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| drs | 46 | ▲ +195% | 5 | ▼ -68% | 16 |
| DSQL | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| DynamoDB | 45 | ▼ -39% | 4 | ▼ -94% | 74 |
| DynamoDBStreams | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| EBS | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| EC2 | 137 | ▲ +106% | 96 | ▲ +45% | 67 |
| EC2InstanceConnect | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| ECR | 45 | ▼ -34% | 4 | ▼ -94% | 68 |
| ECRPUBLIC | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| ECS | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| EFS | 46 | ▼ -34% | 5 | ▼ -93% | 69 |
| EKS | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| EKSAuth | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| ElasticBeanstalk | 59 | ▼ -13% | 18 | ▼ -73% | 67 |
| ElasticLoadBalancing | 56 | ▼ -18% | 15 | ▼ -78% | 68 |
| ElasticTranscoder | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| ElastiCache | 61 | ▼ -14% | 20 | ▼ -71% | 71 |
| ElasticsearchService | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| EMR | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| EMRServerless | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| EntityResolution | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| EventBridge | 45 | ▼ -35% | 4 | ▼ -94% | 70 |
| Evidently | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| evs | 45 | ▲ +221% | 4 | ▼ -70% | 14 |
| finspace | 46 | ▲ +175% | 5 | ▼ -70% | 17 |
| finspacedata | 46 | ▲ +194% | 5 | ▼ -69% | 16 |
| Firehose | 45 | ▼ -34% | 4 | ▼ -94% | 68 |
| fis | 46 | ▲ +189% | 5 | ▼ -70% | 16 |
| FMS | 45 | ▼ -31% | 4 | ▼ -93% | 66 |
| forecast | 45 | ▲ +221% | 4 | ▼ -70% | 14 |
| forecastquery | 45 | ▲ +212% | 4 | ▼ -70% | 15 |
| FraudDetector | 45 | ▼ -31% | 4 | ▼ -93% | 66 |
| FreeTier | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| FSx | 45 | ▼ -34% | 4 | ▼ -94% | 69 |
| GameLift | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| GameLiftStreams | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| GeoMaps | 46 | ▼ -33% | 5 | ▼ -93% | 68 |
| GeoPlaces | 46 | ▼ -35% | 5 | ▼ -93% | 70 |
| GeoRoutes | 46 | ▼ -38% | 5 | ▼ -94% | 73 |
| Glacier | 46 | ▼ -33% | 5 | ▼ -92% | 69 |
| GlobalAccelerator | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| Glue | 45 | ▼ -34% | 4 | ▼ -94% | 68 |
| grafana | 46 | ▲ +193% | 5 | ▼ -69% | 16 |
| Greengrass | 46 | ▼ -31% | 6 | ▼ -92% | 67 |
| GreengrassV2 | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| GroundStation | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| GuardDuty | 46 | ▼ -30% | 5 | ▼ -92% | 66 |
| Health | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| HealthLake | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| IAM | 62 | ▼ -10% | 22 | ▼ -69% | 69 |
| identitystore | 45 | ▲ +208% | 4 | ▼ -71% | 15 |
| imagebuilder | 46 | ▲ +192% | 5 | ▼ -67% | 16 |
| Inspector | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| InspectorScan | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| Inspector2 | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| InternetMonitor | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| Invoicing | 45 | ▼ -31% | 4 | ▼ -94% | 66 |
| IoT | 48 | ▼ -29% | 8 | ▼ -89% | 68 |
| IoTDataPlane | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| IoTEvents | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| IoTEventsData | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| IoTJobsDataPlane | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| IoTManagedIntegrations | 46 | ▼ -30% | 5 | ▼ -92% | 66 |
| IoTWireless | 47 | ▼ -30% | 6 | ▼ -91% | 66 |
| IoTAnalytics | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| IotDeviceAdvisor | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| IoTFleetHub | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| IoTFleetWise | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| IoTSecureTunneling | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| IoTSiteWise | 47 | ▼ -37% | 6 | ▼ -92% | 74 |
| IoTThingsGraph | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| IoTTwinMaker | 46 | ▼ -32% | 5 | ▼ -93% | 68 |
| ivs | 46 | ▲ +200% | 5 | ▼ -68% | 15 |
| IVSRealTime | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ivschat | 46 | ▲ +175% | 5 | ▼ -72% | 17 |
| Kafka | 46 | ▼ -32% | 5 | ▼ -92% | 67 |
| KafkaConnect | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| kendra | 45 | ▲ +216% | 4 | ▼ -70% | 14 |
| KendraRanking | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| Keyspaces | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| KeyspacesStreams | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| Kinesis | 45 | ▼ -40% | 4 | ▼ -94% | 76 |
| KinesisAnalytics | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| KinesisAnalyticsV2 | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| KinesisVideo | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| KinesisVideoArchivedMedia | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| KinesisVideoMedia | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| KinesisVideoSignaling | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| KinesisVideoWebRTCStorage | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| KMS | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| LakeFormation | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| Lambda | 46 | ▼ -38% | 5 | ▼ -93% | 75 |
| LaunchWizard | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| LexModelBuildingService | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| LexModelsV2 | 47 | ▼ -30% | 6 | ▼ -91% | 66 |
| LexRuntimeService | 46 | ▼ -33% | 5 | ▼ -93% | 68 |
| LexRuntimeV2 | 46 | ▼ -40% | 5 | ▼ -94% | 77 |
| LicenseManager | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| LicenseManagerLinuxSubscriptions | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| LicenseManagerUserSubscriptions | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Lightsail | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| Location | 46 | ▼ -30% | 5 | ▼ -92% | 67 |
| LookoutEquipment | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| LookoutMetrics | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| LookoutVision | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| m2 | 46 | ▲ +187% | 5 | ▼ -69% | 16 |
| MachineLearning | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| Macie2 | 46 | ▼ -30% | 5 | ▼ -92% | 67 |
| MailManager | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| ManagedBlockchain | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| ManagedBlockchainQuery | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| MarketplaceAgreement | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| MarketplaceCatalog | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| MarketplaceCommerceAnalytics | 45 | ▼ -31% | 4 | ▼ -93% | 66 |
| MarketplaceDeployment | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| MarketplaceEntitlementService | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| MarketplaceMetering | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| MarketplaceReporting | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| MediaConnect | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| MediaConvert | 46 | ▼ -46% | 5 | ▼ -94% | 84 |
| MediaLive | 47 | ▼ -30% | 6 | ▼ -91% | 67 |
| MediaPackage | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| MediaPackageVod | 46 | ▼ -33% | 5 | ▼ -93% | 68 |
| MediaPackageV2 | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| MediaStore | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| MediaStoreData | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| MediaTailor | 46 | ▼ -31% | 5 | ▼ -92% | 66 |
| MedicalImaging | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| MemoryDB | 45 | ▼ -34% | 4 | ▼ -94% | 69 |
| mgn | 46 | ▲ +194% | 5 | ▼ -67% | 16 |
| MigrationHub | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| MigrationHubRefactorSpaces | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| MigrationHubConfig | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| MigrationHubOrchestrator | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| MigrationHubStrategy | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| MPA | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| mq | 46 | ▲ +167% | 5 | ▼ -72% | 17 |
| MTurk | 45 | ▼ -31% | 4 | ▼ -93% | 66 |
| MWAA | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Neptune | 60 | ▼ -15% | 19 | ▼ -73% | 70 |
| NeptuneGraph | 46 | ▼ -32% | 5 | ▼ -93% | 68 |
| neptunedata | 46 | ▲ +184% | 5 | ▼ -69% | 16 |
| NetworkFirewall | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| NetworkFlowMonitor | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| NetworkManager | 47 | ▼ -32% | 6 | ▼ -92% | 68 |
| NetworkMonitor | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| Notifications | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| NotificationsContacts | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| OAM | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| ObservabilityAdmin | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| odb | 45 | ▲ +219% | 4 | ▼ -70% | 14 |
| Omics | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| OpenSearch | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| OpenSearchServerless | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| OpsWorks | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| OpsWorksCM | 45 | ▼ -34% | 4 | ▼ -94% | 69 |
| Organizations | 45 | ▼ -35% | 4 | ▼ -94% | 69 |
| OSIS | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Outposts | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| Panorama | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| PartnerCentralSelling | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| PaymentCryptography | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| PaymentCryptographyData | 46 | ▼ -33% | 5 | ▼ -93% | 68 |
| PcaConnectorAd | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| PcaConnectorScep | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| PCS | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| Personalize | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| PersonalizeEvents | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| PersonalizeRuntime | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| PI | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| Pinpoint | 47 | ▼ -31% | 6 | ▼ -91% | 68 |
| PinpointEmail | 46 | ▼ -31% | 5 | ▼ -92% | 66 |
| PinpointSMSVoice | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| PinpointSMSVoiceV2 | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| Pipes | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Polly | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Pricing | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| PrivateNetworks | 46 | ▼ -35% | 5 | ▼ -93% | 70 |
| Proton | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| QApps | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| QBusiness | 46 | ▼ -39% | 6 | ▼ -93% | 77 |
| QConnect | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| QLDB | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| QLDBSession | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| QuickSight | 48 | ▼ -29% | 7 | ▼ -89% | 68 |
| RAM | 46 | ▼ -32% | 5 | ▼ -93% | 68 |
| rbin | 46 | ▲ +195% | 5 | ▼ -70% | 15 |
| RDS | 71 | ▼ -2% | 30 | ▼ -58% | 73 |
| RDSData | 45 | ▼ -33% | 5 | ▼ -93% | 68 |
| Redshift | 66 | ▼ -10% | 25 | ▼ -66% | 73 |
| RedshiftData | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| RedshiftServerless | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| Rekognition | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| repostspace | 46 | ▲ +194% | 5 | ▼ -70% | 16 |
| resiliencehub | 46 | ▲ +202% | 5 | ▼ -65% | 15 |
| ResourceExplorer2 | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| ResourceGroups | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| ResourceGroupsTaggingAPI | 45 | ▼ -31% | 4 | ▼ -93% | 66 |
| RoboMaker | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| RolesAnywhere | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| Route53 | 45 | ▼ -37% | 4 | ▼ -94% | 71 |
| Route53Domains | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| Route53RecoveryCluster | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| Route53RecoveryControlConfig | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Route53RecoveryReadiness | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| Route53Profiles | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Route53Resolver | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| RUM | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| S3 | 46 | ▼ -49% | 5 | ▼ -94% | 90 |
| S3Control | 45 | ▼ -39% | 4 | ▼ -95% | 73 |
| S3Outposts | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| S3Tables | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| S3Vectors | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| SageMaker | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| SageMakerA2IRuntime | 46 | ▼ -32% | 5 | ▼ -93% | 66 |
| SagemakerEdge | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| SageMakerFeatureStoreRuntime | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| SageMakerGeospatial | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| SageMakerMetrics | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| SageMakerRuntime | 46 | ▼ -39% | 5 | ▼ -94% | 74 |
| savingsplans | 46 | ▲ +198% | 5 | ▼ -70% | 15 |
| Scheduler | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| schemas | 46 | ▲ +179% | 5 | ▼ -70% | 16 |
| SecretsManager | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| SecurityIR | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| SecurityHub | 47 | ▼ -30% | 6 | ▼ -92% | 67 |
| SecurityLake | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| ServerlessApplicationRepository | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| ServiceCatalog | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| ServiceCatalogAppRegistry | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| ServiceQuotas | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| ServiceDiscovery | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| SES | 58 | ▼ -16% | 17 | ▼ -75% | 69 |
| SESv2 | 47 | ▼ -33% | 6 | ▼ -92% | 70 |
| SFN | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| Shield | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| signer | 46 | ▲ +191% | 5 | ▼ -70% | 16 |
| SimSpaceWeaver | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| SMS | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| SnowDeviceManagement | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| Snowball | 45 | ▼ -32% | 4 | ▼ -93% | 66 |
| SNS | 56 | ▼ -19% | 15 | ▼ -79% | 68 |
| SocialMessaging | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| SQS | 45 | ▼ -34% | 4 | ▼ -94% | 69 |
| SSM | 45 | ▼ -37% | 4 | ▼ -94% | 71 |
| SSMContacts | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| SSMGuiConnect | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| SSMIncidents | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| SSMQuickSetup | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| SsmSap | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| SSO | 45 | ▲ +32% | 5 | ▼ -87% | 34 |
| SSOAdmin | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| SSOOIDC | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| StorageGateway | 45 | ▼ -31% | 4 | ▼ -93% | 66 |
| STS | 54 | ▼ -22% | 13 | ▼ -81% | 69 |
| SupplyChain | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| Support | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| SupportApp | 46 | ▼ -31% | 5 | ▼ -93% | 66 |
| SWF | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| synthetics | 46 | ▲ +185% | 5 | ▼ -70% | 16 |
| TaxSettings | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| Textract | 45 | ▼ -33% | 4 | ▼ -94% | 68 |
| TimestreamInfluxDB | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| TimestreamQuery | 45 | ▼ -36% | 4 | ▼ -94% | 71 |
| TimestreamWrite | 45 | ▼ -36% | 4 | ▼ -94% | 71 |
| tnb | 46 | ▲ +203% | 5 | ▼ -67% | 15 |
| Transcribe | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| TranscribeStreaming | 46 | ▼ -42% | 5 | ▼ -94% | 79 |
| Transfer | 45 | ▼ -32% | 4 | ▼ -94% | 66 |
| Translate | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| TrustedAdvisor | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| VerifiedPermissions | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| VoiceID | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| VPCLattice | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| WAF | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| WAFRegional | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| WAFV2 | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| WellArchitected | 46 | ▼ -30% | 5 | ▼ -92% | 66 |
| Wisdom | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
| WorkDocs | 46 | ▼ -32% | 5 | ▼ -93% | 68 |
| WorkMail | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| WorkMailMessageFlow | 45 | ▼ -31% | 5 | ▼ -93% | 66 |
| WorkSpaces | 45 | ▼ -33% | 4 | ▼ -94% | 67 |
| WorkspacesInstances | 45 | ▼ -32% | 4 | ▼ -94% | 67 |
| WorkSpacesThinClient | 46 | ▼ -32% | 5 | ▼ -93% | 67 |
| WorkSpacesWeb | 46 | ▼ -31% | 5 | ▼ -92% | 67 |
| XRay | 46 | ▼ -31% | 5 | ▼ -93% | 67 |
