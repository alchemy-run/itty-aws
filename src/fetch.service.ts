// fetch.service.ts
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";

// Service tag
// export interface Fetch {
//   readonly fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>;
// }
// export const Fetch = Context.Tag<Fetch>("Fetch");
class Fetch extends Context.Tag("Fetch")<
  Fetch,
  {
    readonly fetch: (
      info: RequestInfo,
      init?: RequestInit,
    ) => Promise<Response>;
  }
>() {}

// Default layer (wrap global fetch)
export const FetchLive = Effect.sync(() => ({
  fetch: (info: RequestInfo, init?: RequestInit) =>
    globalThis.fetch(info, init),
})).pipe(Effect.provideServiceEffect(Fetch, Effect.succeed as any));
