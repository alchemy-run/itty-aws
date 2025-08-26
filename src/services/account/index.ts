import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Account as _Account } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Account",
  version: "2021-02-01",
  protocol: "restJson1",
  sigV4ServiceName: "account",
  operations: {
    AcceptPrimaryEmailUpdate: "POST /acceptPrimaryEmailUpdate",
    DeleteAlternateContact: "POST /deleteAlternateContact",
    DisableRegion: "POST /disableRegion",
    EnableRegion: "POST /enableRegion",
    GetAccountInformation: "POST /getAccountInformation",
    GetAlternateContact: "POST /getAlternateContact",
    GetContactInformation: "POST /getContactInformation",
    GetPrimaryEmail: "POST /getPrimaryEmail",
    GetRegionOptStatus: "POST /getRegionOptStatus",
    ListRegions: "POST /listRegions",
    PutAccountName: "POST /putAccountName",
    PutAlternateContact: "POST /putAlternateContact",
    PutContactInformation: "POST /putContactInformation",
    StartPrimaryEmailUpdate: "POST /startPrimaryEmailUpdate",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Account = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Account;
