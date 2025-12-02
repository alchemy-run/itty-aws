import { BunContext, BunRuntime } from "@effect/platform-bun";
import { Logger, LogLevel, Effect } from "effect";

export const program = Effect.gen(function* () {
  const result = yield* Effect.succeed({ hello: "world" });
  yield* Effect.logDebug(result);
});

BunRuntime.runMain(
  program.pipe(
    Effect.provide(BunContext.layer),
    Logger.withMinimumLogLevel(LogLevel.Debug),
  ),
);
