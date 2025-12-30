import { Effect } from "effect";
import { Region } from "./src/region";
import { createBucket } from "./src/services/s3.ts";

import { BunContext, BunRuntime } from "@effect/platform-bun";
import { Logger, LogLevel } from "effect";
import { NodeProviderChainCredentialsLive } from "./src/credentials";
import { FetchHttpClient } from "@effect/platform";

const program = Effect.gen(function* () {
  const result = yield* createBucket({
    Bucket: "alchemy-7uzxjcl",
  });
  // const result2 = yield* PutObject({
  //   Bucket: "alchemy-7uzxjcl",
  // });
  // const result3 = yield* GetObject({
  //   Bucket: "alchemy-7uzxjcl",
  // });
  yield* Effect.logDebug(result);
  // yield* Effect.logDebug(result2);
  // yield* Effect.logDebug(result3);
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
