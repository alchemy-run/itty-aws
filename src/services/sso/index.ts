import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SSO as _SSO } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SSO",
  version: "2019-06-10",
  protocol: "restJson1",
  sigV4ServiceName: "awsssoportal",
  endpointPrefix: "portal.sso",
  operations: {
    GetRoleCredentials: "GET /federation/credentials",
    ListAccountRoles: "GET /assignment/roles",
    ListAccounts: "GET /assignment/accounts",
    Logout: "POST /logout",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SSO = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _SSO;
