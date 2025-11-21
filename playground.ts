// import { BunContext, BunRuntime } from "@effect/platform-bun";
import * as Effect from "effect/Effect";

export const program = Effect.gen(function* () {
  const result = yield* Effect.succeed({ hello: "world" });
  console.log(result);
});

// BunRuntime.runMain(program.pipe(Effect.provide(BunContext.layer)));
