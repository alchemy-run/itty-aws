import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { BedrockAgentCoreControl as _BedrockAgentCoreControl } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Bedrock AgentCore Control",
  version: "2023-06-05",
  protocol: "restJson1",
  sigV4ServiceName: "bedrock-agentcore",
  endpointPrefix: "bedrock-agentcore-control",
  operations: {
    GetTokenVault: "POST /identities/get-token-vault",
    SetTokenVaultCMK: "POST /identities/set-token-vault-cmk",
    CreateAgentRuntime: "PUT /runtimes/",
    CreateAgentRuntimeEndpoint:
      "PUT /runtimes/{agentRuntimeId}/runtime-endpoints/",
    CreateApiKeyCredentialProvider:
      "POST /identities/CreateApiKeyCredentialProvider",
    CreateBrowser: "PUT /browsers",
    CreateCodeInterpreter: "PUT /code-interpreters",
    CreateGateway: "POST /gateways/",
    CreateGatewayTarget: "POST /gateways/{gatewayIdentifier}/targets/",
    CreateMemory: "POST /memories/create",
    CreateOauth2CredentialProvider:
      "POST /identities/CreateOauth2CredentialProvider",
    CreateWorkloadIdentity: "POST /identities/CreateWorkloadIdentity",
    DeleteAgentRuntime: "DELETE /runtimes/{agentRuntimeId}/",
    DeleteAgentRuntimeEndpoint:
      "DELETE /runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/",
    DeleteApiKeyCredentialProvider:
      "POST /identities/DeleteApiKeyCredentialProvider",
    DeleteBrowser: "DELETE /browsers/{browserId}",
    DeleteCodeInterpreter: "DELETE /code-interpreters/{codeInterpreterId}",
    DeleteGateway: "DELETE /gateways/{gatewayIdentifier}/",
    DeleteGatewayTarget:
      "DELETE /gateways/{gatewayIdentifier}/targets/{targetId}/",
    DeleteMemory: "DELETE /memories/{memoryId}/delete",
    DeleteOauth2CredentialProvider:
      "POST /identities/DeleteOauth2CredentialProvider",
    DeleteWorkloadIdentity: "POST /identities/DeleteWorkloadIdentity",
    GetAgentRuntime: "GET /runtimes/{agentRuntimeId}/",
    GetAgentRuntimeEndpoint:
      "GET /runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/",
    GetApiKeyCredentialProvider: "POST /identities/GetApiKeyCredentialProvider",
    GetBrowser: "GET /browsers/{browserId}",
    GetCodeInterpreter: "GET /code-interpreters/{codeInterpreterId}",
    GetGateway: "GET /gateways/{gatewayIdentifier}/",
    GetGatewayTarget: "GET /gateways/{gatewayIdentifier}/targets/{targetId}/",
    GetMemory: "GET /memories/{memoryId}/details",
    GetOauth2CredentialProvider: "POST /identities/GetOauth2CredentialProvider",
    GetWorkloadIdentity: "POST /identities/GetWorkloadIdentity",
    ListAgentRuntimeEndpoints:
      "POST /runtimes/{agentRuntimeId}/runtime-endpoints/",
    ListAgentRuntimeVersions: "POST /runtimes/{agentRuntimeId}/versions/",
    ListAgentRuntimes: "POST /runtimes/",
    ListApiKeyCredentialProviders:
      "POST /identities/ListApiKeyCredentialProviders",
    ListBrowsers: "POST /browsers",
    ListCodeInterpreters: "POST /code-interpreters",
    ListGatewayTargets: "GET /gateways/{gatewayIdentifier}/targets/",
    ListGateways: "GET /gateways/",
    ListMemories: "POST /memories/",
    ListOauth2CredentialProviders:
      "POST /identities/ListOauth2CredentialProviders",
    ListWorkloadIdentities: "POST /identities/ListWorkloadIdentities",
    UpdateAgentRuntime: "PUT /runtimes/{agentRuntimeId}/",
    UpdateAgentRuntimeEndpoint:
      "PUT /runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/",
    UpdateApiKeyCredentialProvider:
      "POST /identities/UpdateApiKeyCredentialProvider",
    UpdateGateway: "PUT /gateways/{gatewayIdentifier}/",
    UpdateGatewayTarget:
      "PUT /gateways/{gatewayIdentifier}/targets/{targetId}/",
    UpdateMemory: "PUT /memories/{memoryId}/update",
    UpdateOauth2CredentialProvider:
      "POST /identities/UpdateOauth2CredentialProvider",
    UpdateWorkloadIdentity: "POST /identities/UpdateWorkloadIdentity",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const BedrockAgentCoreControl = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _BedrockAgentCoreControl;
