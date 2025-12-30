import { Schema, Effect } from "effect";
import { Region } from "./src/region";

import { BunContext, BunRuntime } from "@effect/platform-bun";
import { Logger, LogLevel } from "effect";
import { NodeProviderChainCredentialsLive } from "./src/credentials";
import { FetchHttpClient } from "@effect/platform";
// import { PutObject } from "./src/clients.gen/s3";

export class TestError extends Schema.TaggedError<TestError>()(
  "TestError",
  Schema.Struct({}),
) {}

const program = Effect.gen(function* () {
  const error = TestError.make({
    message: "Test error message",
  });
  return yield* Effect.fail(error);
  //todo(pear): make the errors more readable (probably just export from somewhere, idk)
  // const result = yield* PutObject({
  //   Bucket: "alchemy-7uzxjcr-test",
  //   Key: "test-2.txt",
  //   Body: "this is some text2",
  // });
  // yield* Effect.logDebug(result);
});

BunRuntime.runMain(
  program.pipe(
    //todo(pear): make this not a function so we can replace with like S3.testClient or something
    // Effect.provide(S3.clientLive),
    Effect.provideService(Region, "us-east-1"),
    Effect.provide(FetchHttpClient.layer),
    Effect.provide(NodeProviderChainCredentialsLive),
    Effect.provide(BunContext.layer),
    Logger.withMinimumLogLevel(LogLevel.Debug),
  ),
);
