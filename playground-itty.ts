import { BunContext, BunRuntime } from "@effect/platform-bun";
import { Logger, LogLevel, Effect } from "effect";
import * as S3 from "./src/clients.gen/s3";
import { NodeProviderChainCredentialsLive } from "./src/credentials";
import { Region } from "./src/region";
import { FetchHttpClient } from "@effect/platform";

const program = Effect.gen(function* () {
  const result = yield* S3.createBucket({
    Bucket: "alchemy-7uzxjcr",
    ACL: "private",
    GrantWrite: "",
    CreateBucketConfiguration: {
      Tags: [
        {
          Key: "Name",
          Value: "Alchemy",
        },
      ],
    },
  });
  yield* Effect.logDebug(result);
});

BunRuntime.runMain(
  program.pipe(
    //todo(pear): make this not a function so we can replace with like S3.testClient or something
    Effect.provide(S3.clientLive),
    Effect.provideService(Region, "us-east-1"),
    Effect.provide(FetchHttpClient.layer),
    Effect.provide(NodeProviderChainCredentialsLive),
    Effect.provide(BunContext.layer),
    Logger.withMinimumLogLevel(LogLevel.Debug),
  ),
);
