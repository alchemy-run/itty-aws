import * as Effect from "effect/Effect";
import { Workspaces } from "../../src/services/workspaces/index.ts";

export const foo = Effect.gen(function* () {
  const workspaces = new Workspaces({});
  const result = yield* workspaces.acceptAccountLinkInvitation({
    LinkId: "123",
  });
  return result;
});
