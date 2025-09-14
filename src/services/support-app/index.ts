import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SupportApp as _SupportAppClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Support App",
  version: "2021-08-20",
  protocol: "restJson1",
  sigV4ServiceName: "supportapp",
  operations: {
    CreateSlackChannelConfiguration:
      "POST /control/create-slack-channel-configuration",
    DeleteAccountAlias: "POST /control/delete-account-alias",
    DeleteSlackChannelConfiguration:
      "POST /control/delete-slack-channel-configuration",
    DeleteSlackWorkspaceConfiguration:
      "POST /control/delete-slack-workspace-configuration",
    GetAccountAlias: "POST /control/get-account-alias",
    ListSlackChannelConfigurations:
      "POST /control/list-slack-channel-configurations",
    ListSlackWorkspaceConfigurations:
      "POST /control/list-slack-workspace-configurations",
    PutAccountAlias: "POST /control/put-account-alias",
    RegisterSlackWorkspaceForOrganization:
      "POST /control/register-slack-workspace-for-organization",
    UpdateSlackChannelConfiguration:
      "POST /control/update-slack-channel-configuration",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type SupportApp = typeof SupportApp;
export const SupportApp = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _SupportAppClient;
