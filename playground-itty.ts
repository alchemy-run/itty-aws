import { Schema, Effect } from "effect";
import { Region } from "./src/region";
import {
  Operation,
  Path,
  Header,
  StreamBody,
  Body,
  Error,
} from "./src/schema-helpers";
import {
  FormatXMLResponse,
  makeOperation,
  NoopRequest,
  NoopResponse,
} from "./src/client";

const input = () =>
  Operation(
    {
      uri: "/{Bucket}/{Key+}?x-id=PutObject",
      method: "PUT",
      sdkId: "S3",
      sigV4ServiceName: "s3",
      name: "PutObject",
    },
    Schema.Struct({
      ACL: Schema.optional(
        Header(
          "x-amz-acl",
          Schema.Literal(
            "private",
            "public-read",
            "public-read-write",
            "authenticated-read",
          ),
        ),
      ),
      Body: StreamBody(),
      Bucket: Path("Bucket", Schema.String),
      Key: Path("Key", Schema.String),
    }),
    Schema.Struct({
      ETag: Header("etag", Schema.String),
    }),
    Schema.Void,
    //todo(pear): make empty struct the default
    // Schema.Union(
    //   Error(
    //     "NoSuchBucket",
    //     Schema.Struct({
    //       Code: Body("Error.Code", Schema.Literal("NoSuchBucket")),
    //       Message: Body("Error.Message", Schema.String),
    //       BucketName: Body("Error.BucketName", Schema.String),
    //     }),
    //   ),
    //   Error(
    //     "Test",
    //     Schema.Struct({
    //       Code: Body("Error.Code", Schema.Literal("Test")),
    //       Message: Body("Error.Message", Schema.String),
    //       BucketName: Body("Error.BucketName", Schema.String),
    //     }),
    //   ),
    // ),
  );

import { BunContext, BunRuntime } from "@effect/platform-bun";
import { Logger, LogLevel } from "effect";
import { NodeProviderChainCredentialsLive } from "./src/credentials";
import { FetchHttpClient } from "@effect/platform";

const program = Effect.gen(function* () {
  const PutObject = makeOperation(
    input(),
    NoopRequest,
    NoopResponse,
    FormatXMLResponse,
  );
  //todo(pear): make the errors more readable (probably just export from somewhere, idk)
  const result = PutObject({
    Bucket: "alchemy-7uzxjcr-test",
    Key: "test-2.txt",
    Body: "this is some text2",
  });
  yield* Effect.logDebug(result);
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
