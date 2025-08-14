import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class BedrockAgentCoreControl extends AWSServiceClient {
  getTokenVault(
    input: GetTokenVaultRequest,
  ): Effect.Effect<
    GetTokenVaultResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  setTokenVaultCMK(
    input: SetTokenVaultCMKRequest,
  ): Effect.Effect<
    SetTokenVaultCMKResponse,
    | AccessDeniedException
    | ConcurrentModificationException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createAgentRuntime(
    input: CreateAgentRuntimeRequest,
  ): Effect.Effect<
    CreateAgentRuntimeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAgentRuntimeEndpoint(
    input: CreateAgentRuntimeEndpointRequest,
  ): Effect.Effect<
    CreateAgentRuntimeEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createApiKeyCredentialProvider(
    input: CreateApiKeyCredentialProviderRequest,
  ): Effect.Effect<
    CreateApiKeyCredentialProviderResponse,
    | AccessDeniedException
    | ConflictException
    | DecryptionFailure
    | EncryptionFailure
    | InternalServerException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createBrowser(
    input: CreateBrowserRequest,
  ): Effect.Effect<
    CreateBrowserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCodeInterpreter(
    input: CreateCodeInterpreterRequest,
  ): Effect.Effect<
    CreateCodeInterpreterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGateway(
    input: CreateGatewayRequest,
  ): Effect.Effect<
    CreateGatewayResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createGatewayTarget(
    input: CreateGatewayTargetRequest,
  ): Effect.Effect<
    CreateGatewayTargetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createMemory(
    input: CreateMemoryInput,
  ): Effect.Effect<
    CreateMemoryOutput,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceException
    | ServiceQuotaExceededException
    | ThrottledException
    | ValidationException
    | CommonAwsError
  >;
  createOauth2CredentialProvider(
    input: CreateOauth2CredentialProviderRequest,
  ): Effect.Effect<
    CreateOauth2CredentialProviderResponse,
    | AccessDeniedException
    | ConflictException
    | DecryptionFailure
    | EncryptionFailure
    | InternalServerException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createWorkloadIdentity(
    input: CreateWorkloadIdentityRequest,
  ): Effect.Effect<
    CreateWorkloadIdentityResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deleteAgentRuntime(
    input: DeleteAgentRuntimeRequest,
  ): Effect.Effect<
    DeleteAgentRuntimeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAgentRuntimeEndpoint(
    input: DeleteAgentRuntimeEndpointRequest,
  ): Effect.Effect<
    DeleteAgentRuntimeEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteApiKeyCredentialProvider(
    input: DeleteApiKeyCredentialProviderRequest,
  ): Effect.Effect<
    DeleteApiKeyCredentialProviderResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deleteBrowser(
    input: DeleteBrowserRequest,
  ): Effect.Effect<
    DeleteBrowserResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCodeInterpreter(
    input: DeleteCodeInterpreterRequest,
  ): Effect.Effect<
    DeleteCodeInterpreterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGateway(
    input: DeleteGatewayRequest,
  ): Effect.Effect<
    DeleteGatewayResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteGatewayTarget(
    input: DeleteGatewayTargetRequest,
  ): Effect.Effect<
    DeleteGatewayTargetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteMemory(
    input: DeleteMemoryInput,
  ): Effect.Effect<
    DeleteMemoryOutput,
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceException
    | ThrottledException
    | ValidationException
    | CommonAwsError
  >;
  deleteOauth2CredentialProvider(
    input: DeleteOauth2CredentialProviderRequest,
  ): Effect.Effect<
    DeleteOauth2CredentialProviderResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorkloadIdentity(
    input: DeleteWorkloadIdentityRequest,
  ): Effect.Effect<
    DeleteWorkloadIdentityResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getAgentRuntime(
    input: GetAgentRuntimeRequest,
  ): Effect.Effect<
    GetAgentRuntimeResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAgentRuntimeEndpoint(
    input: GetAgentRuntimeEndpointRequest,
  ): Effect.Effect<
    GetAgentRuntimeEndpointResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getApiKeyCredentialProvider(
    input: GetApiKeyCredentialProviderRequest,
  ): Effect.Effect<
    GetApiKeyCredentialProviderResponse,
    | AccessDeniedException
    | DecryptionFailure
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getBrowser(
    input: GetBrowserRequest,
  ): Effect.Effect<
    GetBrowserResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  getCodeInterpreter(
    input: GetCodeInterpreterRequest,
  ): Effect.Effect<
    GetCodeInterpreterResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  getGateway(
    input: GetGatewayRequest,
  ): Effect.Effect<
    GetGatewayResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getGatewayTarget(
    input: GetGatewayTargetRequest,
  ): Effect.Effect<
    GetGatewayTargetResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getMemory(
    input: GetMemoryInput,
  ): Effect.Effect<
    GetMemoryOutput,
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceException
    | ThrottledException
    | ValidationException
    | CommonAwsError
  >;
  getOauth2CredentialProvider(
    input: GetOauth2CredentialProviderRequest,
  ): Effect.Effect<
    GetOauth2CredentialProviderResponse,
    | AccessDeniedException
    | DecryptionFailure
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getWorkloadIdentity(
    input: GetWorkloadIdentityRequest,
  ): Effect.Effect<
    GetWorkloadIdentityResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listAgentRuntimeEndpoints(
    input: ListAgentRuntimeEndpointsRequest,
  ): Effect.Effect<
    ListAgentRuntimeEndpointsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAgentRuntimeVersions(
    input: ListAgentRuntimeVersionsRequest,
  ): Effect.Effect<
    ListAgentRuntimeVersionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAgentRuntimes(
    input: ListAgentRuntimesRequest,
  ): Effect.Effect<
    ListAgentRuntimesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listApiKeyCredentialProviders(
    input: ListApiKeyCredentialProvidersRequest,
  ): Effect.Effect<
    ListApiKeyCredentialProvidersResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listBrowsers(
    input: ListBrowsersRequest,
  ): Effect.Effect<
    ListBrowsersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCodeInterpreters(
    input: ListCodeInterpretersRequest,
  ): Effect.Effect<
    ListCodeInterpretersResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGatewayTargets(
    input: ListGatewayTargetsRequest,
  ): Effect.Effect<
    ListGatewayTargetsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listGateways(
    input: ListGatewaysRequest,
  ): Effect.Effect<
    ListGatewaysResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listMemories(
    input: ListMemoriesInput,
  ): Effect.Effect<
    ListMemoriesOutput,
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceException
    | ThrottledException
    | ValidationException
    | CommonAwsError
  >;
  listOauth2CredentialProviders(
    input: ListOauth2CredentialProvidersRequest,
  ): Effect.Effect<
    ListOauth2CredentialProvidersResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listWorkloadIdentities(
    input: ListWorkloadIdentitiesRequest,
  ): Effect.Effect<
    ListWorkloadIdentitiesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateAgentRuntime(
    input: UpdateAgentRuntimeRequest,
  ): Effect.Effect<
    UpdateAgentRuntimeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAgentRuntimeEndpoint(
    input: UpdateAgentRuntimeEndpointRequest,
  ): Effect.Effect<
    UpdateAgentRuntimeEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateApiKeyCredentialProvider(
    input: UpdateApiKeyCredentialProviderRequest,
  ): Effect.Effect<
    UpdateApiKeyCredentialProviderResponse,
    | AccessDeniedException
    | ConflictException
    | DecryptionFailure
    | EncryptionFailure
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateGateway(
    input: UpdateGatewayRequest,
  ): Effect.Effect<
    UpdateGatewayResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateGatewayTarget(
    input: UpdateGatewayTargetRequest,
  ): Effect.Effect<
    UpdateGatewayTargetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateMemory(
    input: UpdateMemoryInput,
  ): Effect.Effect<
    UpdateMemoryOutput,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceException
    | ServiceQuotaExceededException
    | ThrottledException
    | ValidationException
    | CommonAwsError
  >;
  updateOauth2CredentialProvider(
    input: UpdateOauth2CredentialProviderRequest,
  ): Effect.Effect<
    UpdateOauth2CredentialProviderResponse,
    | AccessDeniedException
    | ConflictException
    | DecryptionFailure
    | EncryptionFailure
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateWorkloadIdentity(
    input: UpdateWorkloadIdentityRequest,
  ): Effect.Effect<
    UpdateWorkloadIdentityResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class BedrockAgentcoreControl extends BedrockAgentCoreControl {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface Agent {
  agentRuntimeArn: string;
  agentRuntimeId: string;
  agentRuntimeVersion: string;
  agentRuntimeName: string;
  description: string;
  lastUpdatedAt: Date | string;
  status: AgentStatus;
}
interface _AgentArtifact {
  containerConfiguration?: ContainerConfiguration;
}

export type AgentArtifact = _AgentArtifact & {
  containerConfiguration: ContainerConfiguration;
};
export interface AgentEndpoint {
  name: string;
  liveVersion?: string;
  targetVersion?: string;
  agentRuntimeEndpointArn: string;
  agentRuntimeArn: string;
  status: AgentEndpointStatus;
  id: string;
  description?: string;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export type AgentEndpointDescription = string;

export type AgentEndpoints = Array<AgentEndpoint>;
export type AgentEndpointStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING";
export type AgentRuntimeArn = string;

export type AgentRuntimeEndpointArn = string;

export type AgentRuntimeEndpointId = string;

export type AgentRuntimeId = string;

export type AgentRuntimeName = string;

export type AgentRuntimeVersion = string;

export type Agents = Array<Agent>;
export type AgentStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING";
export type AllowedAudience = string;

export type AllowedAudienceList = Array<string>;
export type AllowedClient = string;

export type AllowedClientsList = Array<string>;
export type ApiKeyCredentialLocation = "HEADER" | "QUERY_PARAMETER";
export type ApiKeyCredentialParameterName = string;

export type ApiKeyCredentialPrefix = string;

export type ApiKeyCredentialProviderArn = string;

export type ApiKeyCredentialProviderArnType = string;

export interface ApiKeyCredentialProviderItem {
  name: string;
  credentialProviderArn: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
}
export type ApiKeyCredentialProviders = Array<ApiKeyCredentialProviderItem>;
export type ApiKeyType = string;

interface _ApiSchemaConfiguration {
  s3?: S3Configuration;
  inlinePayload?: string;
}

export type ApiSchemaConfiguration =
  | (_ApiSchemaConfiguration & { s3: S3Configuration })
  | (_ApiSchemaConfiguration & { inlinePayload: string });
export type Arn = string;

export type AuthorizationEndpointType = string;

interface _AuthorizerConfiguration {
  customJWTAuthorizer?: CustomJWTAuthorizerConfiguration;
}

export type AuthorizerConfiguration = _AuthorizerConfiguration & {
  customJWTAuthorizer: CustomJWTAuthorizerConfiguration;
};
export type AuthorizerType = "CUSTOM_JWT";
export type AwsAccountId = string;

export type BrowserArn = string;

export type BrowserId = string;

export interface BrowserNetworkConfiguration {
  networkMode: BrowserNetworkMode;
}
export type BrowserNetworkMode = "PUBLIC";
export type BrowserStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | "DELETED";
export type BrowserSummaries = Array<BrowserSummary>;
export interface BrowserSummary {
  browserId: string;
  browserArn: string;
  name?: string;
  description?: string;
  status: BrowserStatus;
  createdAt: Date | string;
  lastUpdatedAt?: Date | string;
}
export type ClientIdType = string;

export type ClientSecretType = string;

export type ClientToken = string;

export type CodeInterpreterArn = string;

export type CodeInterpreterId = string;

export interface CodeInterpreterNetworkConfiguration {
  networkMode: CodeInterpreterNetworkMode;
}
export type CodeInterpreterNetworkMode = "PUBLIC" | "SANDBOX";
export type CodeInterpreterStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | "DELETED";
export type CodeInterpreterSummaries = Array<CodeInterpreterSummary>;
export interface CodeInterpreterSummary {
  codeInterpreterId: string;
  codeInterpreterArn: string;
  name?: string;
  description?: string;
  status: CodeInterpreterStatus;
  createdAt: Date | string;
  lastUpdatedAt?: Date | string;
}
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
interface _ConsolidationConfiguration {
  customConsolidationConfiguration?: CustomConsolidationConfiguration;
}

export type ConsolidationConfiguration = _ConsolidationConfiguration & {
  customConsolidationConfiguration: CustomConsolidationConfiguration;
};
export interface ContainerConfiguration {
  containerUri: string;
}
export interface CreateAgentRuntimeEndpointRequest {
  agentRuntimeId: string;
  name: string;
  agentRuntimeVersion?: string;
  description?: string;
  clientToken?: string;
}
export interface CreateAgentRuntimeEndpointResponse {
  targetVersion: string;
  agentRuntimeEndpointArn: string;
  agentRuntimeArn: string;
  status: AgentEndpointStatus;
  createdAt: Date | string;
}
export interface CreateAgentRuntimeRequest {
  agentRuntimeName: string;
  description?: string;
  agentRuntimeArtifact: AgentArtifact;
  roleArn: string;
  networkConfiguration: NetworkConfiguration;
  protocolConfiguration?: ProtocolConfiguration;
  clientToken?: string;
  environmentVariables?: Record<string, string>;
  authorizerConfiguration?: AuthorizerConfiguration;
}
export interface CreateAgentRuntimeResponse {
  agentRuntimeArn: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  agentRuntimeId: string;
  agentRuntimeVersion: string;
  createdAt: Date | string;
  status: AgentStatus;
}
export interface CreateApiKeyCredentialProviderRequest {
  name: string;
  apiKey: string;
}
export interface CreateApiKeyCredentialProviderResponse {
  apiKeySecretArn: Secret;
  name: string;
  credentialProviderArn: string;
}
export interface CreateBrowserRequest {
  name: string;
  description?: string;
  executionRoleArn?: string;
  networkConfiguration: BrowserNetworkConfiguration;
  recording?: RecordingConfig;
  clientToken?: string;
}
export interface CreateBrowserResponse {
  browserId: string;
  browserArn: string;
  createdAt: Date | string;
  status: BrowserStatus;
}
export interface CreateCodeInterpreterRequest {
  name: string;
  description?: string;
  executionRoleArn?: string;
  networkConfiguration: CodeInterpreterNetworkConfiguration;
  clientToken?: string;
}
export interface CreateCodeInterpreterResponse {
  codeInterpreterId: string;
  codeInterpreterArn: string;
  createdAt: Date | string;
  status: CodeInterpreterStatus;
}
export interface CreateGatewayRequest {
  name: string;
  description?: string;
  clientToken?: string;
  roleArn: string;
  protocolType: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration: AuthorizerConfiguration;
  kmsKeyArn?: string;
  exceptionLevel?: ExceptionLevel;
}
export interface CreateGatewayResponse {
  gatewayArn: string;
  gatewayId: string;
  gatewayUrl?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  status: GatewayStatus;
  statusReasons?: Array<string>;
  name: string;
  description?: string;
  roleArn?: string;
  protocolType: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  kmsKeyArn?: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  exceptionLevel?: ExceptionLevel;
}
export interface CreateGatewayTargetRequest {
  gatewayIdentifier: string;
  name: string;
  description?: string;
  clientToken?: string;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations: Array<CredentialProviderConfiguration>;
}
export interface CreateGatewayTargetResponse {
  gatewayArn: string;
  targetId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  status: TargetStatus;
  statusReasons?: Array<string>;
  name: string;
  description?: string;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations: Array<CredentialProviderConfiguration>;
}
export interface CreateMemoryInput {
  clientToken?: string;
  name: string;
  description?: string;
  encryptionKeyArn?: string;
  memoryExecutionRoleArn?: string;
  eventExpiryDuration: number;
  memoryStrategies?: Array<MemoryStrategyInput>;
}
export interface CreateMemoryOutput {
  memory?: Memory;
}
export interface CreateOauth2CredentialProviderRequest {
  name: string;
  credentialProviderVendor: CredentialProviderVendorType;
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput;
}
export interface CreateOauth2CredentialProviderResponse {
  clientSecretArn: Secret;
  name: string;
  credentialProviderArn: string;
}
export interface CreateWorkloadIdentityRequest {
  name: string;
  allowedResourceOauth2ReturnUrls?: Array<string>;
}
export interface CreateWorkloadIdentityResponse {
  name: string;
  workloadIdentityArn: string;
  allowedResourceOauth2ReturnUrls?: Array<string>;
}
interface _CredentialProvider {
  oauthCredentialProvider?: OAuthCredentialProvider;
  apiKeyCredentialProvider?: GatewayApiKeyCredentialProvider;
}

export type CredentialProvider =
  | (_CredentialProvider & { oauthCredentialProvider: OAuthCredentialProvider })
  | (_CredentialProvider & {
      apiKeyCredentialProvider: GatewayApiKeyCredentialProvider;
    });
export type CredentialProviderArnType = string;

export interface CredentialProviderConfiguration {
  credentialProviderType: CredentialProviderType;
  credentialProvider?: CredentialProvider;
}
export type CredentialProviderConfigurations =
  Array<CredentialProviderConfiguration>;
export type CredentialProviderName = string;

export type CredentialProviderType = "GATEWAY_IAM_ROLE" | "OAUTH" | "API_KEY";
export type CredentialProviderVendorType =
  | "GoogleOauth2"
  | "GithubOauth2"
  | "SlackOauth2"
  | "SalesforceOauth2"
  | "MicrosoftOauth2"
  | "CustomOauth2";
interface _CustomConfigurationInput {
  semanticOverride?: SemanticOverrideConfigurationInput;
  summaryOverride?: SummaryOverrideConfigurationInput;
  userPreferenceOverride?: UserPreferenceOverrideConfigurationInput;
}

export type CustomConfigurationInput =
  | (_CustomConfigurationInput & {
      semanticOverride: SemanticOverrideConfigurationInput;
    })
  | (_CustomConfigurationInput & {
      summaryOverride: SummaryOverrideConfigurationInput;
    })
  | (_CustomConfigurationInput & {
      userPreferenceOverride: UserPreferenceOverrideConfigurationInput;
    });
interface _CustomConsolidationConfiguration {
  semanticConsolidationOverride?: SemanticConsolidationOverride;
  summaryConsolidationOverride?: SummaryConsolidationOverride;
  userPreferenceConsolidationOverride?: UserPreferenceConsolidationOverride;
}

export type CustomConsolidationConfiguration =
  | (_CustomConsolidationConfiguration & {
      semanticConsolidationOverride: SemanticConsolidationOverride;
    })
  | (_CustomConsolidationConfiguration & {
      summaryConsolidationOverride: SummaryConsolidationOverride;
    })
  | (_CustomConsolidationConfiguration & {
      userPreferenceConsolidationOverride: UserPreferenceConsolidationOverride;
    });
interface _CustomConsolidationConfigurationInput {
  semanticConsolidationOverride?: SemanticOverrideConsolidationConfigurationInput;
  summaryConsolidationOverride?: SummaryOverrideConsolidationConfigurationInput;
  userPreferenceConsolidationOverride?: UserPreferenceOverrideConsolidationConfigurationInput;
}

export type CustomConsolidationConfigurationInput =
  | (_CustomConsolidationConfigurationInput & {
      semanticConsolidationOverride: SemanticOverrideConsolidationConfigurationInput;
    })
  | (_CustomConsolidationConfigurationInput & {
      summaryConsolidationOverride: SummaryOverrideConsolidationConfigurationInput;
    })
  | (_CustomConsolidationConfigurationInput & {
      userPreferenceConsolidationOverride: UserPreferenceOverrideConsolidationConfigurationInput;
    });
interface _CustomExtractionConfiguration {
  semanticExtractionOverride?: SemanticExtractionOverride;
  userPreferenceExtractionOverride?: UserPreferenceExtractionOverride;
}

export type CustomExtractionConfiguration =
  | (_CustomExtractionConfiguration & {
      semanticExtractionOverride: SemanticExtractionOverride;
    })
  | (_CustomExtractionConfiguration & {
      userPreferenceExtractionOverride: UserPreferenceExtractionOverride;
    });
interface _CustomExtractionConfigurationInput {
  semanticExtractionOverride?: SemanticOverrideExtractionConfigurationInput;
  userPreferenceExtractionOverride?: UserPreferenceOverrideExtractionConfigurationInput;
}

export type CustomExtractionConfigurationInput =
  | (_CustomExtractionConfigurationInput & {
      semanticExtractionOverride: SemanticOverrideExtractionConfigurationInput;
    })
  | (_CustomExtractionConfigurationInput & {
      userPreferenceExtractionOverride: UserPreferenceOverrideExtractionConfigurationInput;
    });
export interface CustomJWTAuthorizerConfiguration {
  discoveryUrl: string;
  allowedAudience?: Array<string>;
  allowedClients?: Array<string>;
}
export interface CustomMemoryStrategyInput {
  name: string;
  description?: string;
  namespaces?: Array<string>;
  configuration?: CustomConfigurationInput;
}
export interface CustomOauth2ProviderConfigInput {
  oauthDiscovery: Oauth2Discovery;
  clientId: string;
  clientSecret: string;
}
export interface CustomOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
}
export type DateTimestamp = Date | string;

export declare class DecryptionFailure extends EffectData.TaggedError(
  "DecryptionFailure",
)<{
  readonly message: string;
}> {}
export interface DeleteAgentRuntimeEndpointRequest {
  agentRuntimeId: string;
  endpointName: string;
  clientToken?: string;
}
export interface DeleteAgentRuntimeEndpointResponse {
  status: AgentEndpointStatus;
}
export interface DeleteAgentRuntimeRequest {
  agentRuntimeId: string;
}
export interface DeleteAgentRuntimeResponse {
  status: AgentStatus;
}
export interface DeleteApiKeyCredentialProviderRequest {
  name: string;
}
export interface DeleteApiKeyCredentialProviderResponse {}
export interface DeleteBrowserRequest {
  browserId: string;
  clientToken?: string;
}
export interface DeleteBrowserResponse {
  browserId: string;
  status: BrowserStatus;
  lastUpdatedAt: Date | string;
}
export interface DeleteCodeInterpreterRequest {
  codeInterpreterId: string;
  clientToken?: string;
}
export interface DeleteCodeInterpreterResponse {
  codeInterpreterId: string;
  status: CodeInterpreterStatus;
  lastUpdatedAt: Date | string;
}
export interface DeleteGatewayRequest {
  gatewayIdentifier: string;
}
export interface DeleteGatewayResponse {
  gatewayId: string;
  status: GatewayStatus;
  statusReasons?: Array<string>;
}
export interface DeleteGatewayTargetRequest {
  gatewayIdentifier: string;
  targetId: string;
}
export interface DeleteGatewayTargetResponse {
  gatewayArn: string;
  targetId: string;
  status: TargetStatus;
  statusReasons?: Array<string>;
}
export interface DeleteMemoryInput {
  clientToken?: string;
  memoryId: string;
}
export interface DeleteMemoryOutput {
  memoryId: string;
  status?: MemoryStatus;
}
export type DeleteMemoryStrategiesList = Array<DeleteMemoryStrategyInput>;
export interface DeleteMemoryStrategyInput {
  memoryStrategyId: string;
}
export interface DeleteOauth2CredentialProviderRequest {
  name: string;
}
export interface DeleteOauth2CredentialProviderResponse {}
export interface DeleteWorkloadIdentityRequest {
  name: string;
}
export interface DeleteWorkloadIdentityResponse {}
export type Description = string;

export type DiscoveryUrl = string;

export type DiscoveryUrlType = string;

export declare class EncryptionFailure extends EffectData.TaggedError(
  "EncryptionFailure",
)<{
  readonly message: string;
}> {}
export type EndpointName = string;

export type EnvironmentVariableKey = string;

export type EnvironmentVariablesMap = Record<string, string>;
export type EnvironmentVariableValue = string;

export type ExceptionLevel = "DEBUG";
interface _ExtractionConfiguration {
  customExtractionConfiguration?: CustomExtractionConfiguration;
}

export type ExtractionConfiguration = _ExtractionConfiguration & {
  customExtractionConfiguration: CustomExtractionConfiguration;
};
export interface GatewayApiKeyCredentialProvider {
  providerArn: string;
  credentialParameterName?: string;
  credentialPrefix?: string;
  credentialLocation?: ApiKeyCredentialLocation;
}
export type GatewayArn = string;

export type GatewayDescription = string;

export type GatewayId = string;

export type GatewayIdentifier = string;

export type GatewayMaxResults = number;

export type GatewayName = string;

export type GatewayNextToken = string;

interface _GatewayProtocolConfiguration {
  mcp?: MCPGatewayConfiguration;
}

export type GatewayProtocolConfiguration = _GatewayProtocolConfiguration & {
  mcp: MCPGatewayConfiguration;
};
export type GatewayProtocolType = "MCP";
export type GatewayStatus =
  | "CREATING"
  | "UPDATING"
  | "UPDATE_UNSUCCESSFUL"
  | "DELETING"
  | "READY"
  | "FAILED";
export type GatewaySummaries = Array<GatewaySummary>;
export interface GatewaySummary {
  gatewayId: string;
  name: string;
  status: GatewayStatus;
  description?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  authorizerType: AuthorizerType;
  protocolType: GatewayProtocolType;
}
export type GatewayUrl = string;

export interface GetAgentRuntimeEndpointRequest {
  agentRuntimeId: string;
  endpointName: string;
}
export interface GetAgentRuntimeEndpointResponse {
  liveVersion?: string;
  targetVersion?: string;
  agentRuntimeEndpointArn: string;
  agentRuntimeArn: string;
  description?: string;
  status: AgentEndpointStatus;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
  failureReason?: string;
  name: string;
  id: string;
}
export interface GetAgentRuntimeRequest {
  agentRuntimeId: string;
  agentRuntimeVersion?: string;
}
export interface GetAgentRuntimeResponse {
  agentRuntimeArn: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  agentRuntimeName: string;
  description?: string;
  agentRuntimeId: string;
  agentRuntimeVersion: string;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
  roleArn: string;
  agentRuntimeArtifact?: AgentArtifact;
  networkConfiguration: NetworkConfiguration;
  protocolConfiguration?: ProtocolConfiguration;
  environmentVariables?: Record<string, string>;
  authorizerConfiguration?: AuthorizerConfiguration;
  status: AgentStatus;
}
export interface GetApiKeyCredentialProviderRequest {
  name: string;
}
export interface GetApiKeyCredentialProviderResponse {
  apiKeySecretArn: Secret;
  name: string;
  credentialProviderArn: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
}
export interface GetBrowserRequest {
  browserId: string;
}
export interface GetBrowserResponse {
  browserId: string;
  browserArn: string;
  name: string;
  description?: string;
  executionRoleArn?: string;
  networkConfiguration: BrowserNetworkConfiguration;
  recording?: RecordingConfig;
  status: BrowserStatus;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface GetCodeInterpreterRequest {
  codeInterpreterId: string;
}
export interface GetCodeInterpreterResponse {
  codeInterpreterId: string;
  codeInterpreterArn: string;
  name: string;
  description?: string;
  executionRoleArn?: string;
  networkConfiguration: CodeInterpreterNetworkConfiguration;
  status: CodeInterpreterStatus;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface GetGatewayRequest {
  gatewayIdentifier: string;
}
export interface GetGatewayResponse {
  gatewayArn: string;
  gatewayId: string;
  gatewayUrl?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  status: GatewayStatus;
  statusReasons?: Array<string>;
  name: string;
  description?: string;
  roleArn?: string;
  protocolType: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  kmsKeyArn?: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  exceptionLevel?: ExceptionLevel;
}
export interface GetGatewayTargetRequest {
  gatewayIdentifier: string;
  targetId: string;
}
export interface GetGatewayTargetResponse {
  gatewayArn: string;
  targetId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  status: TargetStatus;
  statusReasons?: Array<string>;
  name: string;
  description?: string;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations: Array<CredentialProviderConfiguration>;
}
export interface GetMemoryInput {
  memoryId: string;
}
export interface GetMemoryOutput {
  memory: Memory;
}
export interface GetOauth2CredentialProviderRequest {
  name: string;
}
export interface GetOauth2CredentialProviderResponse {
  clientSecretArn: Secret;
  name: string;
  credentialProviderArn: string;
  credentialProviderVendor: CredentialProviderVendorType;
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
}
export interface GetTokenVaultRequest {
  tokenVaultId?: string;
}
export interface GetTokenVaultResponse {
  tokenVaultId: string;
  kmsConfiguration: KmsConfiguration;
  lastModifiedDate: Date | string;
}
export interface GetWorkloadIdentityRequest {
  name: string;
}
export interface GetWorkloadIdentityResponse {
  name: string;
  workloadIdentityArn: string;
  allowedResourceOauth2ReturnUrls?: Array<string>;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
}
export interface GithubOauth2ProviderConfigInput {
  clientId: string;
  clientSecret: string;
}
export interface GithubOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
}
export interface GoogleOauth2ProviderConfigInput {
  clientId: string;
  clientSecret: string;
}
export interface GoogleOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
}
export type InlinePayload = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type IssuerUrlType = string;

export type KeyType = "CustomerManagedKey" | "ServiceManagedKey";
export interface KmsConfiguration {
  keyType: KeyType;
  kmsKeyArn?: string;
}
export type KmsKeyArn = string;

export type LambdaFunctionArn = string;

export interface ListAgentRuntimeEndpointsRequest {
  agentRuntimeId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentRuntimeEndpointsResponse {
  runtimeEndpoints: Array<AgentEndpoint>;
  nextToken?: string;
}
export interface ListAgentRuntimesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentRuntimesResponse {
  agentRuntimes: Array<Agent>;
  nextToken?: string;
}
export interface ListAgentRuntimeVersionsRequest {
  agentRuntimeId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAgentRuntimeVersionsResponse {
  agentRuntimes: Array<Agent>;
  nextToken?: string;
}
export interface ListApiKeyCredentialProvidersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListApiKeyCredentialProvidersResponse {
  credentialProviders: Array<ApiKeyCredentialProviderItem>;
  nextToken?: string;
}
export interface ListBrowsersRequest {
  maxResults?: number;
  nextToken?: string;
  type?: ResourceType;
}
export interface ListBrowsersResponse {
  browserSummaries: Array<BrowserSummary>;
  nextToken?: string;
}
export interface ListCodeInterpretersRequest {
  maxResults?: number;
  nextToken?: string;
  type?: ResourceType;
}
export interface ListCodeInterpretersResponse {
  codeInterpreterSummaries: Array<CodeInterpreterSummary>;
  nextToken?: string;
}
export interface ListGatewaysRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListGatewaysResponse {
  items: Array<GatewaySummary>;
  nextToken?: string;
}
export interface ListGatewayTargetsRequest {
  gatewayIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListGatewayTargetsResponse {
  items: Array<TargetSummary>;
  nextToken?: string;
}
export interface ListMemoriesInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListMemoriesOutput {
  memories: Array<MemorySummary>;
  nextToken?: string;
}
export interface ListOauth2CredentialProvidersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListOauth2CredentialProvidersResponse {
  credentialProviders: Array<Oauth2CredentialProviderItem>;
  nextToken?: string;
}
export interface ListWorkloadIdentitiesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListWorkloadIdentitiesResponse {
  workloadIdentities: Array<WorkloadIdentityType>;
  nextToken?: string;
}
export type MaxResults = number;

export interface MCPGatewayConfiguration {
  supportedVersions?: Array<string>;
  instructions?: string;
  searchType?: SearchType;
}
export type McpInstructions = string;

export interface McpLambdaTargetConfiguration {
  lambdaArn: string;
  toolSchema: ToolSchema;
}
export type McpSupportedVersions = Array<string>;
interface _McpTargetConfiguration {
  openApiSchema?: ApiSchemaConfiguration;
  smithyModel?: ApiSchemaConfiguration;
  lambda?: McpLambdaTargetConfiguration;
}

export type McpTargetConfiguration =
  | (_McpTargetConfiguration & { openApiSchema: ApiSchemaConfiguration })
  | (_McpTargetConfiguration & { smithyModel: ApiSchemaConfiguration })
  | (_McpTargetConfiguration & { lambda: McpLambdaTargetConfiguration });
export type McpVersion = string;

export interface Memory {
  arn: string;
  id: string;
  name: string;
  description?: string;
  encryptionKeyArn?: string;
  memoryExecutionRoleArn?: string;
  eventExpiryDuration: number;
  status: MemoryStatus;
  failureReason?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  strategies?: Array<MemoryStrategy>;
}
export type MemoryArn = string;

export type MemoryId = string;

export type MemoryStatus = "CREATING" | "ACTIVE" | "FAILED" | "DELETING";
export interface MemoryStrategy {
  strategyId: string;
  name: string;
  description?: string;
  configuration?: StrategyConfiguration;
  type: MemoryStrategyType;
  namespaces: Array<string>;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  status?: MemoryStrategyStatus;
}
export type MemoryStrategyId = string;

interface _MemoryStrategyInput {
  semanticMemoryStrategy?: SemanticMemoryStrategyInput;
  summaryMemoryStrategy?: SummaryMemoryStrategyInput;
  userPreferenceMemoryStrategy?: UserPreferenceMemoryStrategyInput;
  customMemoryStrategy?: CustomMemoryStrategyInput;
}

export type MemoryStrategyInput =
  | (_MemoryStrategyInput & {
      semanticMemoryStrategy: SemanticMemoryStrategyInput;
    })
  | (_MemoryStrategyInput & {
      summaryMemoryStrategy: SummaryMemoryStrategyInput;
    })
  | (_MemoryStrategyInput & {
      userPreferenceMemoryStrategy: UserPreferenceMemoryStrategyInput;
    })
  | (_MemoryStrategyInput & {
      customMemoryStrategy: CustomMemoryStrategyInput;
    });
export type MemoryStrategyInputList = Array<MemoryStrategyInput>;
export type MemoryStrategyList = Array<MemoryStrategy>;
export type MemoryStrategyStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED";
export type MemoryStrategyType =
  | "SEMANTIC"
  | "SUMMARIZATION"
  | "USER_PREFERENCE"
  | "CUSTOM";
export interface MemorySummary {
  arn?: string;
  id?: string;
  status?: MemoryStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type MemorySummaryList = Array<MemorySummary>;
export interface MicrosoftOauth2ProviderConfigInput {
  clientId: string;
  clientSecret: string;
}
export interface MicrosoftOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
}
interface _ModifyConsolidationConfiguration {
  customConsolidationConfiguration?: CustomConsolidationConfigurationInput;
}

export type ModifyConsolidationConfiguration =
  _ModifyConsolidationConfiguration & {
    customConsolidationConfiguration: CustomConsolidationConfigurationInput;
  };
interface _ModifyExtractionConfiguration {
  customExtractionConfiguration?: CustomExtractionConfigurationInput;
}

export type ModifyExtractionConfiguration = _ModifyExtractionConfiguration & {
  customExtractionConfiguration: CustomExtractionConfigurationInput;
};
export interface ModifyMemoryStrategies {
  addMemoryStrategies?: Array<MemoryStrategyInput>;
  modifyMemoryStrategies?: Array<ModifyMemoryStrategyInput>;
  deleteMemoryStrategies?: Array<DeleteMemoryStrategyInput>;
}
export type ModifyMemoryStrategiesList = Array<ModifyMemoryStrategyInput>;
export interface ModifyMemoryStrategyInput {
  memoryStrategyId: string;
  description?: string;
  namespaces?: Array<string>;
  configuration?: ModifyStrategyConfiguration;
}
export interface ModifyStrategyConfiguration {
  extraction?: ModifyExtractionConfiguration;
  consolidation?: ModifyConsolidationConfiguration;
}
export type Name = string;

export type Namespace = string;

export type NamespacesList = Array<string>;
export interface NetworkConfiguration {
  networkMode: NetworkMode;
}
export type NetworkMode = "PUBLIC";
export type NextToken = string;

export type NonBlankString = string;

export type NonEmptyString = string;

export interface Oauth2AuthorizationServerMetadata {
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  responseTypes?: Array<string>;
}
export interface Oauth2CredentialProviderItem {
  name: string;
  credentialProviderVendor: CredentialProviderVendorType;
  credentialProviderArn: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
}
export type Oauth2CredentialProviders = Array<Oauth2CredentialProviderItem>;
interface _Oauth2Discovery {
  discoveryUrl?: string;
  authorizationServerMetadata?: Oauth2AuthorizationServerMetadata;
}

export type Oauth2Discovery =
  | (_Oauth2Discovery & { discoveryUrl: string })
  | (_Oauth2Discovery & {
      authorizationServerMetadata: Oauth2AuthorizationServerMetadata;
    });
interface _Oauth2ProviderConfigInput {
  customOauth2ProviderConfig?: CustomOauth2ProviderConfigInput;
  googleOauth2ProviderConfig?: GoogleOauth2ProviderConfigInput;
  githubOauth2ProviderConfig?: GithubOauth2ProviderConfigInput;
  slackOauth2ProviderConfig?: SlackOauth2ProviderConfigInput;
  salesforceOauth2ProviderConfig?: SalesforceOauth2ProviderConfigInput;
  microsoftOauth2ProviderConfig?: MicrosoftOauth2ProviderConfigInput;
}

export type Oauth2ProviderConfigInput =
  | (_Oauth2ProviderConfigInput & {
      customOauth2ProviderConfig: CustomOauth2ProviderConfigInput;
    })
  | (_Oauth2ProviderConfigInput & {
      googleOauth2ProviderConfig: GoogleOauth2ProviderConfigInput;
    })
  | (_Oauth2ProviderConfigInput & {
      githubOauth2ProviderConfig: GithubOauth2ProviderConfigInput;
    })
  | (_Oauth2ProviderConfigInput & {
      slackOauth2ProviderConfig: SlackOauth2ProviderConfigInput;
    })
  | (_Oauth2ProviderConfigInput & {
      salesforceOauth2ProviderConfig: SalesforceOauth2ProviderConfigInput;
    })
  | (_Oauth2ProviderConfigInput & {
      microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigInput;
    });
interface _Oauth2ProviderConfigOutput {
  customOauth2ProviderConfig?: CustomOauth2ProviderConfigOutput;
  googleOauth2ProviderConfig?: GoogleOauth2ProviderConfigOutput;
  githubOauth2ProviderConfig?: GithubOauth2ProviderConfigOutput;
  slackOauth2ProviderConfig?: SlackOauth2ProviderConfigOutput;
  salesforceOauth2ProviderConfig?: SalesforceOauth2ProviderConfigOutput;
  microsoftOauth2ProviderConfig?: MicrosoftOauth2ProviderConfigOutput;
}

export type Oauth2ProviderConfigOutput =
  | (_Oauth2ProviderConfigOutput & {
      customOauth2ProviderConfig: CustomOauth2ProviderConfigOutput;
    })
  | (_Oauth2ProviderConfigOutput & {
      googleOauth2ProviderConfig: GoogleOauth2ProviderConfigOutput;
    })
  | (_Oauth2ProviderConfigOutput & {
      githubOauth2ProviderConfig: GithubOauth2ProviderConfigOutput;
    })
  | (_Oauth2ProviderConfigOutput & {
      slackOauth2ProviderConfig: SlackOauth2ProviderConfigOutput;
    })
  | (_Oauth2ProviderConfigOutput & {
      salesforceOauth2ProviderConfig: SalesforceOauth2ProviderConfigOutput;
    })
  | (_Oauth2ProviderConfigOutput & {
      microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigOutput;
    });
export interface OAuthCredentialProvider {
  providerArn: string;
  scopes: Array<string>;
  customParameters?: Record<string, string>;
}
export type OAuthCredentialProviderArn = string;

export type OAuthCustomParameters = Record<string, string>;
export type OAuthCustomParametersKey = string;

export type OAuthCustomParametersValue = string;

export type OAuthScope = string;

export type OAuthScopes = Array<string>;
export type OverrideType =
  | "SEMANTIC_OVERRIDE"
  | "SUMMARY_OVERRIDE"
  | "USER_PREFERENCE_OVERRIDE";
export type Prompt = string;

export interface ProtocolConfiguration {
  serverProtocol: ServerProtocol;
}
export interface RecordingConfig {
  enabled?: boolean;
  s3Location?: S3Location;
}
export type RequiredProperties = Array<string>;
export declare class ResourceLimitExceededException extends EffectData.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourceOauth2ReturnUrlListType = Array<string>;
export type ResourceOauth2ReturnUrlType = string;

export type ResourceType = "SYSTEM" | "CUSTOM";
export type ResponseListType = Array<string>;
export type ResponseType = string;

export type RoleArn = string;

export type RuntimeContainerUri = string;

export type S3BucketUri = string;

export interface S3Configuration {
  uri?: string;
  bucketOwnerAccountId?: string;
}
export interface S3Location {
  bucket: string;
  prefix: string;
}
export interface SalesforceOauth2ProviderConfigInput {
  clientId: string;
  clientSecret: string;
}
export interface SalesforceOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
}
export type SandboxName = string;

export interface SchemaDefinition {
  type: SchemaType;
  properties?: Record<string, SchemaDefinition>;
  required?: Array<string>;
  items?: SchemaDefinition;
  description?: string;
}
export type SchemaProperties = Record<string, SchemaDefinition>;
export type SchemaType =
  | "STRING"
  | "NUMBER"
  | "OBJECT"
  | "ARRAY"
  | "BOOLEAN"
  | "INTEGER";
export type SearchType = "SEMANTIC";
export interface Secret {
  secretArn: string;
}
export type SecretArn = string;

export interface SemanticConsolidationOverride {
  appendToPrompt: string;
  modelId: string;
}
export interface SemanticExtractionOverride {
  appendToPrompt: string;
  modelId: string;
}
export interface SemanticMemoryStrategyInput {
  name: string;
  description?: string;
  namespaces?: Array<string>;
}
export interface SemanticOverrideConfigurationInput {
  extraction?: SemanticOverrideExtractionConfigurationInput;
  consolidation?: SemanticOverrideConsolidationConfigurationInput;
}
export interface SemanticOverrideConsolidationConfigurationInput {
  appendToPrompt: string;
  modelId: string;
}
export interface SemanticOverrideExtractionConfigurationInput {
  appendToPrompt: string;
  modelId: string;
}
export type ServerProtocol = "MCP" | "HTTP";
export declare class ServiceException extends EffectData.TaggedError(
  "ServiceException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SetTokenVaultCMKRequest {
  tokenVaultId?: string;
  kmsConfiguration: KmsConfiguration;
}
export interface SetTokenVaultCMKResponse {
  tokenVaultId: string;
  kmsConfiguration: KmsConfiguration;
  lastModifiedDate: Date | string;
}
export interface SlackOauth2ProviderConfigInput {
  clientId: string;
  clientSecret: string;
}
export interface SlackOauth2ProviderConfigOutput {
  oauthDiscovery: Oauth2Discovery;
}
export type StatusReason = string;

export type StatusReasons = Array<string>;
export interface StrategyConfiguration {
  type?: OverrideType;
  extraction?: ExtractionConfiguration;
  consolidation?: ConsolidationConfiguration;
}
export interface SummaryConsolidationOverride {
  appendToPrompt: string;
  modelId: string;
}
export interface SummaryMemoryStrategyInput {
  name: string;
  description?: string;
  namespaces?: Array<string>;
}
export interface SummaryOverrideConfigurationInput {
  consolidation?: SummaryOverrideConsolidationConfigurationInput;
}
export interface SummaryOverrideConsolidationConfigurationInput {
  appendToPrompt: string;
  modelId: string;
}
interface _TargetConfiguration {
  mcp?: McpTargetConfiguration;
}

export type TargetConfiguration = _TargetConfiguration & {
  mcp: McpTargetConfiguration;
};
export type TargetDescription = string;

export type TargetId = string;

export type TargetMaxResults = number;

export type TargetName = string;

export type TargetNextToken = string;

export type TargetStatus =
  | "CREATING"
  | "UPDATING"
  | "UPDATE_UNSUCCESSFUL"
  | "DELETING"
  | "READY"
  | "FAILED";
export type TargetSummaries = Array<TargetSummary>;
export interface TargetSummary {
  targetId: string;
  name: string;
  status: TargetStatus;
  description?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export declare class ThrottledException extends EffectData.TaggedError(
  "ThrottledException",
)<{
  readonly message?: string;
}> {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TokenEndpointType = string;

export type TokenVaultIdType = string;

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: SchemaDefinition;
  outputSchema?: SchemaDefinition;
}
export type ToolDefinitions = Array<ToolDefinition>;
interface _ToolSchema {
  s3?: S3Configuration;
  inlinePayload?: Array<ToolDefinition>;
}

export type ToolSchema =
  | (_ToolSchema & { s3: S3Configuration })
  | (_ToolSchema & { inlinePayload: Array<ToolDefinition> });
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UpdateAgentRuntimeEndpointRequest {
  agentRuntimeId: string;
  endpointName: string;
  agentRuntimeVersion?: string;
  description?: string;
  clientToken?: string;
}
export interface UpdateAgentRuntimeEndpointResponse {
  liveVersion?: string;
  targetVersion?: string;
  agentRuntimeEndpointArn: string;
  agentRuntimeArn: string;
  status: AgentEndpointStatus;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
}
export interface UpdateAgentRuntimeRequest {
  agentRuntimeId: string;
  description?: string;
  agentRuntimeArtifact: AgentArtifact;
  roleArn: string;
  networkConfiguration: NetworkConfiguration;
  protocolConfiguration?: ProtocolConfiguration;
  clientToken?: string;
  environmentVariables?: Record<string, string>;
  authorizerConfiguration?: AuthorizerConfiguration;
}
export interface UpdateAgentRuntimeResponse {
  agentRuntimeArn: string;
  agentRuntimeId: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  agentRuntimeVersion: string;
  createdAt: Date | string;
  lastUpdatedAt: Date | string;
  status: AgentStatus;
}
export interface UpdateApiKeyCredentialProviderRequest {
  name: string;
  apiKey: string;
}
export interface UpdateApiKeyCredentialProviderResponse {
  apiKeySecretArn: Secret;
  name: string;
  credentialProviderArn: string;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
}
export interface UpdateGatewayRequest {
  gatewayIdentifier: string;
  name: string;
  description?: string;
  roleArn: string;
  protocolType: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration: AuthorizerConfiguration;
  kmsKeyArn?: string;
  exceptionLevel?: ExceptionLevel;
}
export interface UpdateGatewayResponse {
  gatewayArn: string;
  gatewayId: string;
  gatewayUrl?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  status: GatewayStatus;
  statusReasons?: Array<string>;
  name: string;
  description?: string;
  roleArn?: string;
  protocolType: GatewayProtocolType;
  protocolConfiguration?: GatewayProtocolConfiguration;
  authorizerType: AuthorizerType;
  authorizerConfiguration?: AuthorizerConfiguration;
  kmsKeyArn?: string;
  workloadIdentityDetails?: WorkloadIdentityDetails;
  exceptionLevel?: ExceptionLevel;
}
export interface UpdateGatewayTargetRequest {
  gatewayIdentifier: string;
  targetId: string;
  name: string;
  description?: string;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations: Array<CredentialProviderConfiguration>;
}
export interface UpdateGatewayTargetResponse {
  gatewayArn: string;
  targetId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  status: TargetStatus;
  statusReasons?: Array<string>;
  name: string;
  description?: string;
  targetConfiguration: TargetConfiguration;
  credentialProviderConfigurations: Array<CredentialProviderConfiguration>;
}
export interface UpdateMemoryInput {
  clientToken?: string;
  memoryId: string;
  description?: string;
  eventExpiryDuration?: number;
  memoryExecutionRoleArn?: string;
  memoryStrategies?: ModifyMemoryStrategies;
}
export interface UpdateMemoryOutput {
  memory?: Memory;
}
export interface UpdateOauth2CredentialProviderRequest {
  name: string;
  credentialProviderVendor: CredentialProviderVendorType;
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput;
}
export interface UpdateOauth2CredentialProviderResponse {
  clientSecretArn: Secret;
  name: string;
  credentialProviderVendor: CredentialProviderVendorType;
  credentialProviderArn: string;
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
}
export interface UpdateWorkloadIdentityRequest {
  name: string;
  allowedResourceOauth2ReturnUrls?: Array<string>;
}
export interface UpdateWorkloadIdentityResponse {
  name: string;
  workloadIdentityArn: string;
  allowedResourceOauth2ReturnUrls?: Array<string>;
  createdTime: Date | string;
  lastUpdatedTime: Date | string;
}
export interface UserPreferenceConsolidationOverride {
  appendToPrompt: string;
  modelId: string;
}
export interface UserPreferenceExtractionOverride {
  appendToPrompt: string;
  modelId: string;
}
export interface UserPreferenceMemoryStrategyInput {
  name: string;
  description?: string;
  namespaces?: Array<string>;
}
export interface UserPreferenceOverrideConfigurationInput {
  extraction?: UserPreferenceOverrideExtractionConfigurationInput;
  consolidation?: UserPreferenceOverrideConsolidationConfigurationInput;
}
export interface UserPreferenceOverrideConsolidationConfigurationInput {
  appendToPrompt: string;
  modelId: string;
}
export interface UserPreferenceOverrideExtractionConfigurationInput {
  appendToPrompt: string;
  modelId: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "IDEMPOTENT_PARAMETER_MISMATCH_EXCEPTION"
  | "ROOT_EVENT_IN_OTHER_SESSION"
  | "RESOURCE_CONFLICT";
export type WorkloadIdentityArn = string;

export type WorkloadIdentityArnType = string;

export interface WorkloadIdentityDetails {
  workloadIdentityArn: string;
}
export type WorkloadIdentityList = Array<WorkloadIdentityType>;
export type WorkloadIdentityNameType = string;

export interface WorkloadIdentityType {
  name: string;
  workloadIdentityArn: string;
}
export declare namespace GetTokenVault {
  export type Input = GetTokenVaultRequest;
  export type Output = GetTokenVaultResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetTokenVaultCMK {
  export type Input = SetTokenVaultCMKRequest;
  export type Output = SetTokenVaultCMKResponse;
  export type Error =
    | AccessDeniedException
    | ConcurrentModificationException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAgentRuntime {
  export type Input = CreateAgentRuntimeRequest;
  export type Output = CreateAgentRuntimeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAgentRuntimeEndpoint {
  export type Input = CreateAgentRuntimeEndpointRequest;
  export type Output = CreateAgentRuntimeEndpointResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApiKeyCredentialProvider {
  export type Input = CreateApiKeyCredentialProviderRequest;
  export type Output = CreateApiKeyCredentialProviderResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DecryptionFailure
    | EncryptionFailure
    | InternalServerException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBrowser {
  export type Input = CreateBrowserRequest;
  export type Output = CreateBrowserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCodeInterpreter {
  export type Input = CreateCodeInterpreterRequest;
  export type Output = CreateCodeInterpreterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGateway {
  export type Input = CreateGatewayRequest;
  export type Output = CreateGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateGatewayTarget {
  export type Input = CreateGatewayTargetRequest;
  export type Output = CreateGatewayTargetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMemory {
  export type Input = CreateMemoryInput;
  export type Output = CreateMemoryOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceException
    | ServiceQuotaExceededException
    | ThrottledException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateOauth2CredentialProvider {
  export type Input = CreateOauth2CredentialProviderRequest;
  export type Output = CreateOauth2CredentialProviderResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DecryptionFailure
    | EncryptionFailure
    | InternalServerException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkloadIdentity {
  export type Input = CreateWorkloadIdentityRequest;
  export type Output = CreateWorkloadIdentityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAgentRuntime {
  export type Input = DeleteAgentRuntimeRequest;
  export type Output = DeleteAgentRuntimeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAgentRuntimeEndpoint {
  export type Input = DeleteAgentRuntimeEndpointRequest;
  export type Output = DeleteAgentRuntimeEndpointResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteApiKeyCredentialProvider {
  export type Input = DeleteApiKeyCredentialProviderRequest;
  export type Output = DeleteApiKeyCredentialProviderResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBrowser {
  export type Input = DeleteBrowserRequest;
  export type Output = DeleteBrowserResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCodeInterpreter {
  export type Input = DeleteCodeInterpreterRequest;
  export type Output = DeleteCodeInterpreterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGateway {
  export type Input = DeleteGatewayRequest;
  export type Output = DeleteGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteGatewayTarget {
  export type Input = DeleteGatewayTargetRequest;
  export type Output = DeleteGatewayTargetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMemory {
  export type Input = DeleteMemoryInput;
  export type Output = DeleteMemoryOutput;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceException
    | ThrottledException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOauth2CredentialProvider {
  export type Input = DeleteOauth2CredentialProviderRequest;
  export type Output = DeleteOauth2CredentialProviderResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkloadIdentity {
  export type Input = DeleteWorkloadIdentityRequest;
  export type Output = DeleteWorkloadIdentityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAgentRuntime {
  export type Input = GetAgentRuntimeRequest;
  export type Output = GetAgentRuntimeResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAgentRuntimeEndpoint {
  export type Input = GetAgentRuntimeEndpointRequest;
  export type Output = GetAgentRuntimeEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetApiKeyCredentialProvider {
  export type Input = GetApiKeyCredentialProviderRequest;
  export type Output = GetApiKeyCredentialProviderResponse;
  export type Error =
    | AccessDeniedException
    | DecryptionFailure
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBrowser {
  export type Input = GetBrowserRequest;
  export type Output = GetBrowserResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetCodeInterpreter {
  export type Input = GetCodeInterpreterRequest;
  export type Output = GetCodeInterpreterResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetGateway {
  export type Input = GetGatewayRequest;
  export type Output = GetGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetGatewayTarget {
  export type Input = GetGatewayTargetRequest;
  export type Output = GetGatewayTargetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMemory {
  export type Input = GetMemoryInput;
  export type Output = GetMemoryOutput;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceException
    | ThrottledException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOauth2CredentialProvider {
  export type Input = GetOauth2CredentialProviderRequest;
  export type Output = GetOauth2CredentialProviderResponse;
  export type Error =
    | AccessDeniedException
    | DecryptionFailure
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkloadIdentity {
  export type Input = GetWorkloadIdentityRequest;
  export type Output = GetWorkloadIdentityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAgentRuntimeEndpoints {
  export type Input = ListAgentRuntimeEndpointsRequest;
  export type Output = ListAgentRuntimeEndpointsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAgentRuntimeVersions {
  export type Input = ListAgentRuntimeVersionsRequest;
  export type Output = ListAgentRuntimeVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAgentRuntimes {
  export type Input = ListAgentRuntimesRequest;
  export type Output = ListAgentRuntimesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApiKeyCredentialProviders {
  export type Input = ListApiKeyCredentialProvidersRequest;
  export type Output = ListApiKeyCredentialProvidersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBrowsers {
  export type Input = ListBrowsersRequest;
  export type Output = ListBrowsersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCodeInterpreters {
  export type Input = ListCodeInterpretersRequest;
  export type Output = ListCodeInterpretersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGatewayTargets {
  export type Input = ListGatewayTargetsRequest;
  export type Output = ListGatewayTargetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListGateways {
  export type Input = ListGatewaysRequest;
  export type Output = ListGatewaysResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMemories {
  export type Input = ListMemoriesInput;
  export type Output = ListMemoriesOutput;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceException
    | ThrottledException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOauth2CredentialProviders {
  export type Input = ListOauth2CredentialProvidersRequest;
  export type Output = ListOauth2CredentialProvidersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkloadIdentities {
  export type Input = ListWorkloadIdentitiesRequest;
  export type Output = ListWorkloadIdentitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAgentRuntime {
  export type Input = UpdateAgentRuntimeRequest;
  export type Output = UpdateAgentRuntimeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAgentRuntimeEndpoint {
  export type Input = UpdateAgentRuntimeEndpointRequest;
  export type Output = UpdateAgentRuntimeEndpointResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApiKeyCredentialProvider {
  export type Input = UpdateApiKeyCredentialProviderRequest;
  export type Output = UpdateApiKeyCredentialProviderResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DecryptionFailure
    | EncryptionFailure
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGateway {
  export type Input = UpdateGatewayRequest;
  export type Output = UpdateGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateGatewayTarget {
  export type Input = UpdateGatewayTargetRequest;
  export type Output = UpdateGatewayTargetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMemory {
  export type Input = UpdateMemoryInput;
  export type Output = UpdateMemoryOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceException
    | ServiceQuotaExceededException
    | ThrottledException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOauth2CredentialProvider {
  export type Input = UpdateOauth2CredentialProviderRequest;
  export type Output = UpdateOauth2CredentialProviderResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | DecryptionFailure
    | EncryptionFailure
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkloadIdentity {
  export type Input = UpdateWorkloadIdentityRequest;
  export type Output = UpdateWorkloadIdentityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}
