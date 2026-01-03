import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Schedule from "effect/Schedule";

export class RetryPolicy extends Context.Tag("RetryPolicy")<
  RetryPolicy,
  {
    readonly getSchedule: (
      error: unknown,
      errorDetails?: unknown,
    ) => Effect.Effect<
      Schedule.Schedule<unknown, unknown, unknown>,
      never,
      never
    >;
  }
>() {}
