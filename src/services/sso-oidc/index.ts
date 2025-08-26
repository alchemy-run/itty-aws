import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SSOOIDC as _SSOOIDC } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SSO OIDC",
  version: "2019-06-10",
  protocol: "restJson1",
  sigV4ServiceName: "sso-oauth",
  endpointPrefix: "oidc",
  operations: {
    CreateToken: "POST /token",
    CreateTokenWithIAM: "POST /token?aws_iam=t",
    RegisterClient: "POST /client/register",
    StartDeviceAuthorization: "POST /device_authorization",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SSOOIDC = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _SSOOIDC;
