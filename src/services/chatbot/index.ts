import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { chatbot as _chatbot } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "chatbot",
  version: "2017-10-11",
  protocol: "restJson1",
  sigV4ServiceName: "chatbot",
  endpointPrefix: "chatbot",
  operations: {
    AssociateToConfiguration: "POST /associate-to-configuration",
    CreateChimeWebhookConfiguration: "POST /create-chime-webhook-configuration",
    CreateMicrosoftTeamsChannelConfiguration:
      "POST /create-ms-teams-channel-configuration",
    CreateSlackChannelConfiguration: "POST /create-slack-channel-configuration",
    DeleteChimeWebhookConfiguration: "POST /delete-chime-webhook-configuration",
    DeleteMicrosoftTeamsChannelConfiguration:
      "POST /delete-ms-teams-channel-configuration",
    DeleteMicrosoftTeamsConfiguredTeam:
      "POST /delete-ms-teams-configured-teams",
    DeleteMicrosoftTeamsUserIdentity: "POST /delete-ms-teams-user-identity",
    DeleteSlackChannelConfiguration: "POST /delete-slack-channel-configuration",
    DeleteSlackUserIdentity: "POST /delete-slack-user-identity",
    DeleteSlackWorkspaceAuthorization:
      "POST /delete-slack-workspace-authorization",
    DescribeChimeWebhookConfigurations:
      "POST /describe-chime-webhook-configurations",
    DescribeSlackChannelConfigurations:
      "POST /describe-slack-channel-configurations",
    DescribeSlackUserIdentities: "POST /describe-slack-user-identities",
    DescribeSlackWorkspaces: "POST /describe-slack-workspaces",
    DisassociateFromConfiguration: "POST /disassociate-from-configuration",
    GetAccountPreferences: "POST /get-account-preferences",
    GetMicrosoftTeamsChannelConfiguration:
      "POST /get-ms-teams-channel-configuration",
    ListAssociations: "POST /list-associations",
    ListMicrosoftTeamsChannelConfigurations:
      "POST /list-ms-teams-channel-configurations",
    ListMicrosoftTeamsConfiguredTeams: "POST /list-ms-teams-configured-teams",
    ListMicrosoftTeamsUserIdentities: "POST /list-ms-teams-user-identities",
    ListTagsForResource: "POST /list-tags-for-resource",
    TagResource: "POST /tag-resource",
    UntagResource: "POST /untag-resource",
    UpdateAccountPreferences: "POST /update-account-preferences",
    UpdateChimeWebhookConfiguration: "POST /update-chime-webhook-configuration",
    UpdateMicrosoftTeamsChannelConfiguration:
      "POST /update-ms-teams-channel-configuration",
    UpdateSlackChannelConfiguration: "POST /update-slack-channel-configuration",
    CreateCustomAction: "POST /create-custom-action",
    DeleteCustomAction: "POST /delete-custom-action",
    GetCustomAction: "POST /get-custom-action",
    ListCustomActions: "POST /list-custom-actions",
    UpdateCustomAction: "POST /update-custom-action",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const chatbot = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _chatbot;
