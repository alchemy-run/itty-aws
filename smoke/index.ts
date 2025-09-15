import * as Effect from "effect/Effect";
import { Lambda } from "itty-aws/lambda";
import { Workspaces } from "itty-aws/workspaces";

export const foo = Effect.gen(function* () {
  const workspaces = new Workspaces({});
  const result = yield* workspaces.acceptAccountLinkInvitation({
    LinkId: "123",
  });
  return result;
});

export const bar = Effect.gen(function* () {
  const lambda = new Lambda({});
  const result = yield* lambda.invoke({
    FunctionName: "test",
    Payload: "test",
  });
  return result;
});
