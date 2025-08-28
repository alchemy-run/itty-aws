// fetch.service.ts
import * as Context from "effect/Context";

// Service tag
export interface Fetch {
  readonly fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>;
}

export const Fetch = Context.Tag("Fetch")<
  Fetch,
  {
    readonly fetch: (
      info: RequestInfo,
      init?: RequestInit,
    ) => Promise<Response>;
  }
>();

export const DefaultFetch: Fetch = {
  fetch: (info, init) => globalThis.fetch(info as any, init as any),
};
