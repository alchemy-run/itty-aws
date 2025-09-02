import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import * as Context from "effect/Context";
import type { AwsCredentials } from "./client.ts";

// Service tag
export interface Credentials {
  readonly getCredentials: () => Promise<AwsCredentials>;
}

export const Credentials = Context.Tag("Credentials")<
  Credentials,
  {
    readonly getCredentials: () => Promise<AwsCredentials>;
  }
>();

export const DefaultCredentials: Credentials = {
  getCredentials: async () => {
    return await fromNodeProviderChain()();
  },
};

export const fromStaticCredentials = (creds: AwsCredentials): Credentials => ({
  getCredentials: () => Promise.resolve(creds),
});
