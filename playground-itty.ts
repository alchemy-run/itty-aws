import { BunContext, BunRuntime } from "@effect/platform-bun";
import * as Effect from "effect/Effect";
import * as S3 from "./src/clients.gen/s3";
import { NodeProviderChainCredentialsLive } from "./src/credentials";

const program = Effect.gen(function* () {
  const result = yield* S3.createBucket({
    Bucket: "alchemy-7uzxjcR",
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
  console.log(result);
}).pipe(Effect.provide(S3.createClient({})));

BunRuntime.runMain(
  program.pipe(
    //todo(pear): make this not a function so we can replace with like S3.testClient or something
    Effect.provide(S3.createClient({})),
    Effect.provide(NodeProviderChainCredentialsLive),
    Effect.provide(BunContext.layer),
  ),
);
