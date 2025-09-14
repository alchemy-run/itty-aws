import * as Context from "effect/Context";
import type { AwsCredentials } from "./client.ts";

// Minimal credentials service definitions that are safe to import everywhere
export interface Credentials {
  readonly getCredentials: () => Promise<AwsCredentials>;
}

export const Credentials = Context.Tag("Credentials")<
  Credentials,
  {
    readonly getCredentials: () => Promise<AwsCredentials>;
  }
>();

export const fromStaticCredentials = (creds: AwsCredentials): Credentials => ({
  getCredentials: () => Promise.resolve(creds),
});
