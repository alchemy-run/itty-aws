import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SupportApp as _SupportApp } from "./types.ts";

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

export const SupportApp = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _SupportApp;
