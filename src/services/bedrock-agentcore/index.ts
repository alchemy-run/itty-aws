import type { Effect, Stream, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class BedrockAgentCore extends AWSServiceClient {
  getResourceApiKey(
    input: GetResourceApiKeyRequest,
  ): Effect.Effect<
    GetResourceApiKeyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getResourceOauth2Token(
    input: GetResourceOauth2TokenRequest,
  ): Effect.Effect<
    GetResourceOauth2TokenResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getWorkloadAccessToken(
    input: GetWorkloadAccessTokenRequest,
  ): Effect.Effect<
    GetWorkloadAccessTokenResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getWorkloadAccessTokenForJWT(
    input: GetWorkloadAccessTokenForJWTRequest,
  ): Effect.Effect<
    GetWorkloadAccessTokenForJWTResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getWorkloadAccessTokenForUserId(
    input: GetWorkloadAccessTokenForUserIdRequest,
  ): Effect.Effect<
    GetWorkloadAccessTokenForUserIdResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  invokeCodeInterpreter(
    input: InvokeCodeInterpreterRequest,
  ): Effect.Effect<
    InvokeCodeInterpreterResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class BedrockAgentcore extends BedrockAgentCore {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccessTokenType = string;

export type ActorId = string;

export interface ActorSummary {
  actorId: string;
}
export type ActorSummaryList = Array<ActorSummary>;
export type ApiKeyType = string;

export interface AutomationStream {
  streamEndpoint: string;
  streamStatus: AutomationStreamStatus;
}
export type AutomationStreamStatus = "ENABLED" | "DISABLED";
export interface AutomationStreamUpdate {
  streamStatus?: AutomationStreamStatus;
}
export type Body = Uint8Array | string;

export interface Branch {
  rootEventId?: string;
  name: string;
}
export interface BranchFilter {
  name: string;
  includeParentBranches?: boolean;
}
export type BranchName = string;

export type BrowserSessionId = string;

export type BrowserSessionStatus = "READY" | "TERMINATED";
export interface BrowserSessionStream {
  automationStream: AutomationStream;
  liveViewStream?: LiveViewStream;
}
export type BrowserSessionSummaries = Array<BrowserSessionSummary>;
export interface BrowserSessionSummary {
  browserIdentifier: string;
  sessionId: string;
  name?: string;
  status: BrowserSessionStatus;
  createdAt: Date | string;
  lastUpdatedAt?: Date | string;
}
export type BrowserSessionTimeout = number;

export type BrowserStreamEndpoint = string;

export type ClientToken = string;

export interface CodeInterpreterResult {
  content: Array<ContentBlock>;
  structuredContent?: ToolResultStructuredContent;
  isError?: boolean;
}
export type CodeInterpreterSessionId = string;

export type CodeInterpreterSessionStatus = "READY" | "TERMINATED";
export type CodeInterpreterSessionSummaries =
  Array<CodeInterpreterSessionSummary>;
export interface CodeInterpreterSessionSummary {
  codeInterpreterIdentifier: string;
  sessionId: string;
  name?: string;
  status: CodeInterpreterSessionStatus;
  createdAt: Date | string;
  lastUpdatedAt?: Date | string;
}
export type CodeInterpreterSessionTimeout = number;

interface _CodeInterpreterStreamOutput {
  result?: CodeInterpreterResult;
  accessDeniedException?: AccessDeniedException;
  conflictException?: ConflictException;
  internalServerException?: InternalServerException;
  resourceNotFoundException?: ResourceNotFoundException;
  serviceQuotaExceededException?: ServiceQuotaExceededException;
  throttlingException?: ThrottlingException;
  validationException?: ValidationException;
}

export type CodeInterpreterStreamOutput =
  | (_CodeInterpreterStreamOutput & { result: CodeInterpreterResult })
  | (_CodeInterpreterStreamOutput & {
      accessDeniedException: AccessDeniedException;
    })
  | (_CodeInterpreterStreamOutput & { conflictException: ConflictException })
  | (_CodeInterpreterStreamOutput & {
      internalServerException: InternalServerException;
    })
  | (_CodeInterpreterStreamOutput & {
      resourceNotFoundException: ResourceNotFoundException;
    })
  | (_CodeInterpreterStreamOutput & {
      serviceQuotaExceededException: ServiceQuotaExceededException;
    })
  | (_CodeInterpreterStreamOutput & {
      throttlingException: ThrottlingException;
    })
  | (_CodeInterpreterStreamOutput & {
      validationException: ValidationException;
    });
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
interface _Content {
  text?: string;
}

export type Content = _Content & { text: string };
export interface ContentBlock {
  type: ContentBlockType;
  text?: string;
  data?: Uint8Array | string;
  mimeType?: string;
  uri?: string;
  name?: string;
  description?: string;
  size?: number;
  resource?: ResourceContent;
}
export type ContentBlockList = Array<ContentBlock>;
export type ContentBlockType =
  | "TEXT"
  | "IMAGE"
  | "EMBEDDED_RESOURCE"
  | "RESOURCE_LINK";
export interface Conversational {
  content: Content;
  role: Role;
}
export interface CreateEventInput {
  memoryId: string;
  actorId: string;
  sessionId?: string;
  eventTimestamp: Date | string;
  payload: Array<PayloadType>;
  branch?: Branch;
  clientToken?: string;
}
export interface CreateEventOutput {
  event: Event;
}
export type CredentialProviderName = string;

export type CustomRequestKeyType = string;

export type CustomRequestParametersType = Record<string, string>;
export type CustomRequestValueType = string;

export type DateTimestamp = Date | string;

export interface DeleteEventInput {
  memoryId: string;
  sessionId: string;
  eventId: string;
  actorId: string;
}
export interface DeleteEventOutput {
  eventId: string;
}
export interface DeleteMemoryRecordInput {
  memoryId: string;
  memoryRecordId: string;
}
export interface DeleteMemoryRecordOutput {
  memoryRecordId: string;
}
export type Document = unknown;

export interface Event {
  memoryId: string;
  actorId: string;
  sessionId: string;
  eventId: string;
  eventTimestamp: Date | string;
  payload: Array<PayloadType>;
  branch?: Branch;
}
export type EventId = string;

export type EventList = Array<Event>;
export interface FilterInput {
  branch?: BranchFilter;
}
export interface GetBrowserSessionRequest {
  browserIdentifier: string;
  sessionId: string;
}
export interface GetBrowserSessionResponse {
  browserIdentifier: string;
  sessionId: string;
  name?: string;
  createdAt: Date | string;
  viewPort?: ViewPort;
  sessionTimeoutSeconds?: number;
  status?: BrowserSessionStatus;
  streams?: BrowserSessionStream;
  sessionReplayArtifact?: string;
  lastUpdatedAt?: Date | string;
}
export interface GetCodeInterpreterSessionRequest {
  codeInterpreterIdentifier: string;
  sessionId: string;
}
export interface GetCodeInterpreterSessionResponse {
  codeInterpreterIdentifier: string;
  sessionId: string;
  name?: string;
  createdAt: Date | string;
  sessionTimeoutSeconds?: number;
  status?: CodeInterpreterSessionStatus;
}
export interface GetEventInput {
  memoryId: string;
  sessionId: string;
  actorId: string;
  eventId: string;
}
export interface GetEventOutput {
  event: Event;
}
export interface GetMemoryRecordInput {
  memoryId: string;
  memoryRecordId: string;
}
export interface GetMemoryRecordOutput {
  memoryRecord: MemoryRecord;
}
export interface GetResourceApiKeyRequest {
  workloadIdentityToken: string;
  resourceCredentialProviderName: string;
}
export interface GetResourceApiKeyResponse {
  apiKey: string;
}
export interface GetResourceOauth2TokenRequest {
  workloadIdentityToken: string;
  userId?: string;
  resourceCredentialProviderName: string;
  scopes: Array<string>;
  oauth2Flow: Oauth2FlowType;
  resourceOauth2ReturnUrl?: string;
  forceAuthentication?: boolean;
  customParameters?: Record<string, string>;
}
export interface GetResourceOauth2TokenResponse {
  authorizationUrl?: string;
  accessToken?: string;
}
export interface GetWorkloadAccessTokenForJWTRequest {
  workloadName: string;
  userToken: string;
}
export interface GetWorkloadAccessTokenForJWTResponse {
  workloadAccessToken: string;
}
export interface GetWorkloadAccessTokenForUserIdRequest {
  workloadName: string;
  userId: string;
}
export interface GetWorkloadAccessTokenForUserIdResponse {
  workloadAccessToken: string;
}
export interface GetWorkloadAccessTokenRequest {
  workloadName: string;
}
export interface GetWorkloadAccessTokenResponse {
  workloadAccessToken: string;
}
export type HttpResponseCode = number;

export interface InputContentBlock {
  path: string;
  text?: string;
  blob?: Uint8Array | string | Stream.Stream<Uint8Array>;
}
export type InputContentBlockList = Array<InputContentBlock>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidInputException extends EffectData.TaggedError(
  "InvalidInputException",
)<{
  readonly message: string;
}> {}
export interface InvokeAgentRuntimeRequest {
  contentType?: string;
  accept?: string;
  mcpSessionId?: string;
  runtimeSessionId?: string;
  mcpProtocolVersion?: string;
  runtimeUserId?: string;
  traceId?: string;
  traceParent?: string;
  traceState?: string;
  baggage?: string;
  agentRuntimeArn: string;
  qualifier?: string;
  payload: Uint8Array | string | Stream.Stream<Uint8Array>;
}
export interface InvokeAgentRuntimeResponse {
  runtimeSessionId?: string;
  mcpSessionId?: string;
  mcpProtocolVersion?: string;
  traceId?: string;
  traceParent?: string;
  traceState?: string;
  baggage?: string;
  contentType: string;
  response?: Uint8Array | string | Stream.Stream<Uint8Array>;
  statusCode?: number;
}
export interface InvokeCodeInterpreterRequest {
  codeInterpreterIdentifier: string;
  sessionId?: string;
  name: ToolName;
  arguments?: ToolArguments;
}
export interface InvokeCodeInterpreterResponse {
  sessionId?: string;
  stream: CodeInterpreterStreamOutput;
}
export interface ListActorsInput {
  memoryId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListActorsOutput {
  actorSummaries: Array<ActorSummary>;
  nextToken?: string;
}
export interface ListBrowserSessionsRequest {
  browserIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  status?: BrowserSessionStatus;
}
export interface ListBrowserSessionsResponse {
  items: Array<BrowserSessionSummary>;
  nextToken?: string;
}
export interface ListCodeInterpreterSessionsRequest {
  codeInterpreterIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  status?: CodeInterpreterSessionStatus;
}
export interface ListCodeInterpreterSessionsResponse {
  items: Array<CodeInterpreterSessionSummary>;
  nextToken?: string;
}
export interface ListEventsInput {
  memoryId: string;
  sessionId: string;
  actorId: string;
  includePayloads?: boolean;
  filter?: FilterInput;
  maxResults?: number;
  nextToken?: string;
}
export interface ListEventsOutput {
  events: Array<Event>;
  nextToken?: string;
}
export interface ListMemoryRecordsInput {
  memoryId: string;
  namespace: string;
  memoryStrategyId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListMemoryRecordsOutput {
  memoryRecordSummaries: Array<MemoryRecordSummary>;
  nextToken?: string;
}
export interface ListSessionsInput {
  memoryId: string;
  actorId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSessionsOutput {
  sessionSummaries: Array<SessionSummary>;
  nextToken?: string;
}
export interface LiveViewStream {
  streamEndpoint?: string;
}
export type MaxLenString = string;

export type MaxResults = number;

interface _MemoryContent {
  text?: string;
}

export type MemoryContent = _MemoryContent & { text: string };
export type MemoryId = string;

export interface MemoryRecord {
  memoryRecordId: string;
  content: MemoryContent;
  memoryStrategyId: string;
  namespaces: Array<string>;
  createdAt: Date | string;
}
export type MemoryRecordId = string;

export interface MemoryRecordSummary {
  memoryRecordId: string;
  content: MemoryContent;
  memoryStrategyId: string;
  namespaces: Array<string>;
  createdAt: Date | string;
  score?: number;
}
export type MemoryRecordSummaryList = Array<MemoryRecordSummary>;
export type MemoryStrategyId = string;

export type MimeType = string;

export type Name = string;

export type Namespace = string;

export type NamespacesList = Array<string>;
export type NextToken = string;

export type NonBlankString = string;

export type Oauth2FlowType = "USER_FEDERATION" | "M2M";
export type PaginationToken = string;

interface _PayloadType {
  conversational?: Conversational;
  blob?: unknown;
}

export type PayloadType =
  | (_PayloadType & { conversational: Conversational })
  | (_PayloadType & { blob: unknown });
export type PayloadTypeList = Array<PayloadType>;
export type ProgrammingLanguage = "PYTHON" | "JAVASCRIPT" | "TYPESCRIPT";
export interface ResourceContent {
  type: ResourceContentType;
  uri?: string;
  mimeType?: string;
  text?: string;
  blob?: Uint8Array | string;
}
export type ResourceContentType = "TEXT" | "BLOB";
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourceOauth2ReturnUrlType = string;

export type ResponseStream = Uint8Array | string;

export interface RetrieveMemoryRecordsInput {
  memoryId: string;
  namespace: string;
  searchCriteria: SearchCriteria;
  nextToken?: string;
  maxResults?: number;
}
export interface RetrieveMemoryRecordsOutput {
  memoryRecordSummaries: Array<MemoryRecordSummary>;
  nextToken?: string;
}
export type Role = "ASSISTANT" | "USER" | "TOOL" | "OTHER";
export declare class RuntimeClientError extends EffectData.TaggedError(
  "RuntimeClientError",
)<{
  readonly message?: string;
}> {}
export type ScopesListType = Array<string>;
export type ScopeType = string;

export interface SearchCriteria {
  searchQuery: string;
  memoryStrategyId?: string;
  topK?: number;
}
export type SensitiveString = string;

export declare class ServiceException extends EffectData.TaggedError(
  "ServiceException",
)<{
  readonly message: string;
}> {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type SessionId = string;

export interface SessionSummary {
  sessionId: string;
  actorId: string;
  createdAt: Date | string;
}
export type SessionSummaryList = Array<SessionSummary>;
export type SessionType = string;

export interface StartBrowserSessionRequest {
  browserIdentifier: string;
  name?: string;
  sessionTimeoutSeconds?: number;
  viewPort?: ViewPort;
  clientToken?: string;
}
export interface StartBrowserSessionResponse {
  browserIdentifier: string;
  sessionId: string;
  createdAt: Date | string;
  streams?: BrowserSessionStream;
}
export interface StartCodeInterpreterSessionRequest {
  codeInterpreterIdentifier: string;
  name?: string;
  sessionTimeoutSeconds?: number;
  clientToken?: string;
}
export interface StartCodeInterpreterSessionResponse {
  codeInterpreterIdentifier: string;
  sessionId: string;
  createdAt: Date | string;
}
export interface StopBrowserSessionRequest {
  browserIdentifier: string;
  sessionId: string;
  clientToken?: string;
}
export interface StopBrowserSessionResponse {
  browserIdentifier: string;
  sessionId: string;
  lastUpdatedAt: Date | string;
}
export interface StopCodeInterpreterSessionRequest {
  codeInterpreterIdentifier: string;
  sessionId: string;
  clientToken?: string;
}
export interface StopCodeInterpreterSessionResponse {
  codeInterpreterIdentifier: string;
  sessionId: string;
  lastUpdatedAt: Date | string;
}
interface _StreamUpdate {
  automationStreamUpdate?: AutomationStreamUpdate;
}

export type StreamUpdate = _StreamUpdate & {
  automationStreamUpdate: AutomationStreamUpdate;
};
export type StringList = Array<string>;
export type StringType = string;

export type TaskStatus =
  | "SUBMITTED"
  | "WORKING"
  | "COMPLETED"
  | "CANCELED"
  | "FAILED";
export declare class ThrottledException extends EffectData.TaggedError(
  "ThrottledException",
)<{
  readonly message: string;
}> {}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface ToolArguments {
  code?: string;
  language?: ProgrammingLanguage;
  clearContext?: boolean;
  command?: string;
  path?: string;
  paths?: Array<string>;
  content?: Array<InputContentBlock>;
  directoryPath?: string;
  taskId?: string;
}
export type ToolName =
  | "EXECUTE_CODE"
  | "EXECUTE_COMMAND"
  | "READ_FILES"
  | "LIST_FILES"
  | "REMOVE_FILES"
  | "WRITE_FILES"
  | "START_COMMAND_EXECUTION"
  | "GET_TASK"
  | "STOP_TASK";
export interface ToolResultStructuredContent {
  taskId?: string;
  taskStatus?: TaskStatus;
  stdout?: string;
  stderr?: string;
  exitCode?: number;
  executionTime?: number;
}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export interface UpdateBrowserStreamRequest {
  browserIdentifier: string;
  sessionId: string;
  streamUpdate: StreamUpdate;
  clientToken?: string;
}
export interface UpdateBrowserStreamResponse {
  browserIdentifier: string;
  sessionId: string;
  streams: BrowserSessionStream;
  updatedAt: Date | string;
}
export type UserIdType = string;

export type UserTokenType = string;

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
export interface ViewPort {
  width: number;
  height: number;
}
export type ViewPortHeight = number;

export type ViewPortWidth = number;

export type WorkloadIdentityNameType = string;

export type WorkloadIdentityTokenType = string;

export declare namespace GetResourceApiKey {
  export type Input = GetResourceApiKeyRequest;
  export type Output = GetResourceApiKeyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceOauth2Token {
  export type Input = GetResourceOauth2TokenRequest;
  export type Output = GetResourceOauth2TokenResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkloadAccessToken {
  export type Input = GetWorkloadAccessTokenRequest;
  export type Output = GetWorkloadAccessTokenResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkloadAccessTokenForJWT {
  export type Input = GetWorkloadAccessTokenForJWTRequest;
  export type Output = GetWorkloadAccessTokenForJWTResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWorkloadAccessTokenForUserId {
  export type Input = GetWorkloadAccessTokenForUserIdRequest;
  export type Output = GetWorkloadAccessTokenForUserIdResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace InvokeCodeInterpreter {
  export type Input = InvokeCodeInterpreterRequest;
  export type Output = InvokeCodeInterpreterResponse;
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
