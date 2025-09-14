import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import type { Credentials } from "./credentials.ts";

// Node.js default credential provider chain
export const DefaultCredentials: Credentials = {
  getCredentials: async () => {
    return await fromNodeProviderChain()();
  },
};
