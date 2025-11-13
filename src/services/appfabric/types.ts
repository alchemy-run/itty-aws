import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class AppFabric extends AWSServiceClient {
  batchGetUserAccessTasks(
    input: BatchGetUserAccessTasksRequest,
  ): Effect.Effect<
    BatchGetUserAccessTasksResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  connectAppAuthorization(
    input: ConnectAppAuthorizationRequest,
  ): Effect.Effect<
    ConnectAppAuthorizationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAppAuthorization(
    input: CreateAppAuthorizationRequest,
  ): Effect.Effect<
    CreateAppAuthorizationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createAppBundle(
    input: CreateAppBundleRequest,
  ): Effect.Effect<
    CreateAppBundleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createIngestion(
    input: CreateIngestionRequest,
  ): Effect.Effect<
    CreateIngestionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createIngestionDestination(
    input: CreateIngestionDestinationRequest,
  ): Effect.Effect<
    CreateIngestionDestinationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAppAuthorization(
    input: DeleteAppAuthorizationRequest,
  ): Effect.Effect<
    DeleteAppAuthorizationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteAppBundle(
    input: DeleteAppBundleRequest,
  ): Effect.Effect<
    DeleteAppBundleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteIngestion(
    input: DeleteIngestionRequest,
  ): Effect.Effect<
    DeleteIngestionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteIngestionDestination(
    input: DeleteIngestionDestinationRequest,
  ): Effect.Effect<
    DeleteIngestionDestinationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAppAuthorization(
    input: GetAppAuthorizationRequest,
  ): Effect.Effect<
    GetAppAuthorizationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAppBundle(
    input: GetAppBundleRequest,
  ): Effect.Effect<
    GetAppBundleResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getIngestion(
    input: GetIngestionRequest,
  ): Effect.Effect<
    GetIngestionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getIngestionDestination(
    input: GetIngestionDestinationRequest,
  ): Effect.Effect<
    GetIngestionDestinationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppAuthorizations(
    input: ListAppAuthorizationsRequest,
  ): Effect.Effect<
    ListAppAuthorizationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAppBundles(
    input: ListAppBundlesRequest,
  ): Effect.Effect<
    ListAppBundlesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIngestionDestinations(
    input: ListIngestionDestinationsRequest,
  ): Effect.Effect<
    ListIngestionDestinationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listIngestions(
    input: ListIngestionsRequest,
  ): Effect.Effect<
    ListIngestionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startIngestion(
    input: StartIngestionRequest,
  ): Effect.Effect<
    StartIngestionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startUserAccessTasks(
    input: StartUserAccessTasksRequest,
  ): Effect.Effect<
    StartUserAccessTasksResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopIngestion(
    input: StopIngestionRequest,
  ): Effect.Effect<
    StopIngestionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateAppAuthorization(
    input: UpdateAppAuthorizationRequest,
  ): Effect.Effect<
    UpdateAppAuthorizationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateIngestionDestination(
    input: UpdateIngestionDestinationRequest,
  ): Effect.Effect<
    UpdateIngestionDestinationResponse,
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

export declare class Appfabric extends AppFabric {}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface ApiKeyCredential {
  apiKey: string;
}
export interface AppAuthorization {
  appAuthorizationArn: string;
  appBundleArn: string;
  app: string;
  tenant: Tenant;
  authType: AuthType;
  status: AppAuthorizationStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
  persona?: Persona;
  authUrl?: string;
}
export type AppAuthorizationStatus =
  | "PendingConnect"
  | "Connected"
  | "ConnectionValidationFailed"
  | "TokenAutoRotationFailed";
export interface AppAuthorizationSummary {
  appAuthorizationArn: string;
  appBundleArn: string;
  app: string;
  tenant: Tenant;
  status: AppAuthorizationStatus;
  updatedAt: Date | string;
}
export type AppAuthorizationSummaryList = Array<AppAuthorizationSummary>;
export interface AppBundle {
  arn: string;
  customerManagedKeyArn?: string;
}
export interface AppBundleSummary {
  arn: string;
}
export type AppBundleSummaryList = Array<AppBundleSummary>;
export type Arn = string;

export interface AuditLogDestinationConfiguration {
  destination: Destination;
}
export interface AuditLogProcessingConfiguration {
  schema: Schema;
  format: Format;
}
export interface AuthRequest {
  redirectUri: string;
  code: string;
}
export type AuthType = "oauth2" | "apiKey";
export interface BatchGetUserAccessTasksRequest {
  appBundleIdentifier: string;
  taskIdList: Array<string>;
}
export interface BatchGetUserAccessTasksResponse {
  userAccessResultsList?: Array<UserAccessResultItem>;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ConnectAppAuthorizationRequest {
  appBundleIdentifier: string;
  appAuthorizationIdentifier: string;
  authRequest?: AuthRequest;
}
export interface ConnectAppAuthorizationResponse {
  appAuthorizationSummary: AppAuthorizationSummary;
}
export interface CreateAppAuthorizationRequest {
  appBundleIdentifier: string;
  app: string;
  credential: Credential;
  tenant: Tenant;
  authType: AuthType;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreateAppAuthorizationResponse {
  appAuthorization: AppAuthorization;
}
export interface CreateAppBundleRequest {
  clientToken?: string;
  customerManagedKeyIdentifier?: string;
  tags?: Array<Tag>;
}
export interface CreateAppBundleResponse {
  appBundle: AppBundle;
}
export interface CreateIngestionDestinationRequest {
  appBundleIdentifier: string;
  ingestionIdentifier: string;
  processingConfiguration: ProcessingConfiguration;
  destinationConfiguration: DestinationConfiguration;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreateIngestionDestinationResponse {
  ingestionDestination: IngestionDestination;
}
export interface CreateIngestionRequest {
  appBundleIdentifier: string;
  app: string;
  tenantId: string;
  ingestionType: IngestionType;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreateIngestionResponse {
  ingestion: Ingestion;
}
interface _Credential {
  oauth2Credential?: Oauth2Credential;
  apiKeyCredential?: ApiKeyCredential;
}

export type Credential =
  | (_Credential & { oauth2Credential: Oauth2Credential })
  | (_Credential & { apiKeyCredential: ApiKeyCredential });
export type DateTime = Date | string;

export interface DeleteAppAuthorizationRequest {
  appBundleIdentifier: string;
  appAuthorizationIdentifier: string;
}
export interface DeleteAppAuthorizationResponse {}
export interface DeleteAppBundleRequest {
  appBundleIdentifier: string;
}
export interface DeleteAppBundleResponse {}
export interface DeleteIngestionDestinationRequest {
  appBundleIdentifier: string;
  ingestionIdentifier: string;
  ingestionDestinationIdentifier: string;
}
export interface DeleteIngestionDestinationResponse {}
export interface DeleteIngestionRequest {
  appBundleIdentifier: string;
  ingestionIdentifier: string;
}
export interface DeleteIngestionResponse {}
interface _Destination {
  s3Bucket?: S3Bucket;
  firehoseStream?: FirehoseStream;
}

export type Destination =
  | (_Destination & { s3Bucket: S3Bucket })
  | (_Destination & { firehoseStream: FirehoseStream });
interface _DestinationConfiguration {
  auditLog?: AuditLogDestinationConfiguration;
}

export type DestinationConfiguration = _DestinationConfiguration & {
  auditLog: AuditLogDestinationConfiguration;
};
export type Email = string;

export interface FirehoseStream {
  streamName: string;
}
export type Format = "json" | "parquet";
export interface GetAppAuthorizationRequest {
  appBundleIdentifier: string;
  appAuthorizationIdentifier: string;
}
export interface GetAppAuthorizationResponse {
  appAuthorization: AppAuthorization;
}
export interface GetAppBundleRequest {
  appBundleIdentifier: string;
}
export interface GetAppBundleResponse {
  appBundle: AppBundle;
}
export interface GetIngestionDestinationRequest {
  appBundleIdentifier: string;
  ingestionIdentifier: string;
  ingestionDestinationIdentifier: string;
}
export interface GetIngestionDestinationResponse {
  ingestionDestination: IngestionDestination;
}
export interface GetIngestionRequest {
  appBundleIdentifier: string;
  ingestionIdentifier: string;
}
export interface GetIngestionResponse {
  ingestion: Ingestion;
}
export type Identifier = string;

export interface Ingestion {
  arn: string;
  appBundleArn: string;
  app: string;
  tenantId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  state: IngestionState;
  ingestionType: IngestionType;
}
export interface IngestionDestination {
  arn: string;
  ingestionArn: string;
  processingConfiguration: ProcessingConfiguration;
  destinationConfiguration: DestinationConfiguration;
  status?: IngestionDestinationStatus;
  statusReason?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type IngestionDestinationList = Array<IngestionDestinationSummary>;
export type IngestionDestinationStatus = "Active" | "Failed";
export interface IngestionDestinationSummary {
  arn: string;
}
export type IngestionList = Array<IngestionSummary>;
export type IngestionState = "enabled" | "disabled";
export interface IngestionSummary {
  arn: string;
  app: string;
  tenantId: string;
  state: IngestionState;
}
export type IngestionType = "auditLog";
export type Integer = number;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface ListAppAuthorizationsRequest {
  appBundleIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAppAuthorizationsResponse {
  appAuthorizationSummaryList: Array<AppAuthorizationSummary>;
  nextToken?: string;
}
export interface ListAppBundlesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListAppBundlesResponse {
  appBundleSummaryList: Array<AppBundleSummary>;
  nextToken?: string;
}
export interface ListIngestionDestinationsRequest {
  appBundleIdentifier: string;
  ingestionIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListIngestionDestinationsResponse {
  ingestionDestinations: Array<IngestionDestinationSummary>;
  nextToken?: string;
}
export interface ListIngestionsRequest {
  appBundleIdentifier: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListIngestionsResponse {
  ingestions: Array<IngestionSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export type MaxResults = number;

export interface Oauth2Credential {
  clientId: string;
  clientSecret: string;
}
export type Persona = "admin" | "endUser";
interface _ProcessingConfiguration {
  auditLog?: AuditLogProcessingConfiguration;
}

export type ProcessingConfiguration = _ProcessingConfiguration & {
  auditLog: AuditLogProcessingConfiguration;
};
export type RedirectUri = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResultStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED" | "EXPIRED";
export interface S3Bucket {
  bucketName: string;
  prefix?: string;
}
export type Schema = "ocsf" | "raw";
export type SensitiveString2048 = string;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export interface StartIngestionRequest {
  ingestionIdentifier: string;
  appBundleIdentifier: string;
}
export interface StartIngestionResponse {}
export interface StartUserAccessTasksRequest {
  appBundleIdentifier: string;
  email: string;
}
export interface StartUserAccessTasksResponse {
  userAccessTasksList?: Array<UserAccessTaskItem>;
}
export interface StopIngestionRequest {
  ingestionIdentifier: string;
  appBundleIdentifier: string;
}
export interface StopIngestionResponse {}
export type String120 = string;

export type String2048 = string;

export type String255 = string;

export type String63 = string;

export type String64 = string;

export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TaskError {
  errorCode?: string;
  errorMessage?: string;
}
export type TaskIdList = Array<string>;
export interface Tenant {
  tenantIdentifier: string;
  tenantDisplayName: string;
}
export type TenantIdentifier = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAppAuthorizationRequest {
  appBundleIdentifier: string;
  appAuthorizationIdentifier: string;
  credential?: Credential;
  tenant?: Tenant;
}
export interface UpdateAppAuthorizationResponse {
  appAuthorization: AppAuthorization;
}
export interface UpdateIngestionDestinationRequest {
  appBundleIdentifier: string;
  ingestionIdentifier: string;
  ingestionDestinationIdentifier: string;
  destinationConfiguration: DestinationConfiguration;
}
export interface UpdateIngestionDestinationResponse {
  ingestionDestination: IngestionDestination;
}
export interface UserAccessResultItem {
  app?: string;
  tenantId?: string;
  tenantDisplayName?: string;
  taskId?: string;
  resultStatus?: ResultStatus;
  email?: string;
  userId?: string;
  userFullName?: string;
  userFirstName?: string;
  userLastName?: string;
  userStatus?: string;
  taskError?: TaskError;
}
export type UserAccessResultsList = Array<UserAccessResultItem>;
export interface UserAccessTaskItem {
  app: string;
  tenantId: string;
  taskId?: string;
  error?: TaskError;
}
export type UserAccessTasksList = Array<UserAccessTaskItem>;
export type UUID = string;

export declare class ValidationException extends Data.TaggedError(
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
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other";
export declare namespace BatchGetUserAccessTasks {
  export type Input = BatchGetUserAccessTasksRequest;
  export type Output = BatchGetUserAccessTasksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ConnectAppAuthorization {
  export type Input = ConnectAppAuthorizationRequest;
  export type Output = ConnectAppAuthorizationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateAppAuthorization {
  export type Input = CreateAppAuthorizationRequest;
  export type Output = CreateAppAuthorizationResponse;
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

export declare namespace CreateAppBundle {
  export type Input = CreateAppBundleRequest;
  export type Output = CreateAppBundleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIngestion {
  export type Input = CreateIngestionRequest;
  export type Output = CreateIngestionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateIngestionDestination {
  export type Input = CreateIngestionDestinationRequest;
  export type Output = CreateIngestionDestinationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAppAuthorization {
  export type Input = DeleteAppAuthorizationRequest;
  export type Output = DeleteAppAuthorizationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAppBundle {
  export type Input = DeleteAppBundleRequest;
  export type Output = DeleteAppBundleResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIngestion {
  export type Input = DeleteIngestionRequest;
  export type Output = DeleteIngestionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteIngestionDestination {
  export type Input = DeleteIngestionDestinationRequest;
  export type Output = DeleteIngestionDestinationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAppAuthorization {
  export type Input = GetAppAuthorizationRequest;
  export type Output = GetAppAuthorizationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAppBundle {
  export type Input = GetAppBundleRequest;
  export type Output = GetAppBundleResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIngestion {
  export type Input = GetIngestionRequest;
  export type Output = GetIngestionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIngestionDestination {
  export type Input = GetIngestionDestinationRequest;
  export type Output = GetIngestionDestinationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppAuthorizations {
  export type Input = ListAppAuthorizationsRequest;
  export type Output = ListAppAuthorizationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAppBundles {
  export type Input = ListAppBundlesRequest;
  export type Output = ListAppBundlesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIngestionDestinations {
  export type Input = ListIngestionDestinationsRequest;
  export type Output = ListIngestionDestinationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListIngestions {
  export type Input = ListIngestionsRequest;
  export type Output = ListIngestionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartIngestion {
  export type Input = StartIngestionRequest;
  export type Output = StartIngestionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartUserAccessTasks {
  export type Input = StartUserAccessTasksRequest;
  export type Output = StartUserAccessTasksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopIngestion {
  export type Input = StopIngestionRequest;
  export type Output = StopIngestionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAppAuthorization {
  export type Input = UpdateAppAuthorizationRequest;
  export type Output = UpdateAppAuthorizationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateIngestionDestination {
  export type Input = UpdateIngestionDestinationRequest;
  export type Output = UpdateIngestionDestinationResponse;
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

export type AppFabricErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
