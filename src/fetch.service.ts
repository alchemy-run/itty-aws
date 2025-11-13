import * as ServiceMap from "effect/ServiceMap";

export type Fetcher = (
  input: URL | RequestInfo,
  init?: RequestInit,
) => Promise<Response>;

export const Fetcher = ServiceMap.Reference<Fetcher>("Fetch", {
  defaultValue: () => globalThis.fetch,
});
