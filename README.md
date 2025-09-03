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

`itty-aws` implements a standlone AWS SDK with a single PM package containing a `Proxy` and types generated from the Smithy spec. 

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
npm install itty-aws effect
```

> [!NOTE]
> `itty-aws` requires [Effect](https://effect.website) as a peer dependency for type-safe error handling and composable operations.

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

Each operation's `Effect.Effect` type specifies exactly which errors can occur:

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

The `DefaultCredentials` provider uses Node.js's standard credential chain, checking in order:
1. Environment variables (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`)
2. AWS credential files (`~/.aws/credentials`)
3. IAM instance profile (when running on EC2)
4. AWS SSO profiles
5. Container credentials (when running on ECS/Fargate)

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

## How It Works

We use the official AWS API models from the [`aws/api-models-aws`](https://github.com/aws/api-models-aws) repository as a git submodule to bring in the latest published models from AWS.

The Smithy specifications are then used to generate TypeScript types (types only, no runtime code) for each service in [src/services](src/services).

The [src/client.ts](src/client.ts) file contains the proxy that is used to dynamically construct:
1. the Client for a service.
2. TaggedError types for each error code.

The service's client is a Proxy that intercepts method calls to infer the API name and then submit the request to AWS via `aws4fetch` which signs the request.

All of the service's errors are modeled with TaggedErrors, except purely as `declare class` to avoid the code size cost of a physical class. The proxy detects constructs the correct `TaggedError` type on the fly from the AWS service response.

