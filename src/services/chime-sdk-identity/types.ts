import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ChimeSDKIdentity extends AWSServiceClient {
  createAppInstance(
    input: CreateAppInstanceRequest,
  ): Effect.Effect<
    CreateAppInstanceResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createAppInstanceAdmin(
    input: CreateAppInstanceAdminRequest,
  ): Effect.Effect<
    CreateAppInstanceAdminResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createAppInstanceBot(
    input: CreateAppInstanceBotRequest,
  ): Effect.Effect<
    CreateAppInstanceBotResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createAppInstanceUser(
    input: CreateAppInstanceUserRequest,
  ): Effect.Effect<
    CreateAppInstanceUserResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteAppInstance(
    input: DeleteAppInstanceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteAppInstanceAdmin(
    input: DeleteAppInstanceAdminRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteAppInstanceBot(
    input: DeleteAppInstanceBotRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteAppInstanceUser(
    input: DeleteAppInstanceUserRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deregisterAppInstanceUserEndpoint(
    input: DeregisterAppInstanceUserEndpointRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeAppInstance(
    input: DescribeAppInstanceRequest,
  ): Effect.Effect<
    DescribeAppInstanceResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeAppInstanceAdmin(
    input: DescribeAppInstanceAdminRequest,
  ): Effect.Effect<
    DescribeAppInstanceAdminResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeAppInstanceBot(
    input: DescribeAppInstanceBotRequest,
  ): Effect.Effect<
    DescribeAppInstanceBotResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeAppInstanceUser(
    input: DescribeAppInstanceUserRequest,
  ): Effect.Effect<
    DescribeAppInstanceUserResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeAppInstanceUserEndpoint(
    input: DescribeAppInstanceUserEndpointRequest,
  ): Effect.Effect<
    DescribeAppInstanceUserEndpointResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getAppInstanceRetentionSettings(
    input: GetAppInstanceRetentionSettingsRequest,
  ): Effect.Effect<
    GetAppInstanceRetentionSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listAppInstanceAdmins(
    input: ListAppInstanceAdminsRequest,
  ): Effect.Effect<
    ListAppInstanceAdminsResponse,
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listAppInstanceBots(
    input: ListAppInstanceBotsRequest,
  ): Effect.Effect<
    ListAppInstanceBotsResponse,
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listAppInstances(
    input: ListAppInstancesRequest,
  ): Effect.Effect<
    ListAppInstancesResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listAppInstanceUserEndpoints(
    input: ListAppInstanceUserEndpointsRequest,
  ): Effect.Effect<
    ListAppInstanceUserEndpointsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listAppInstanceUsers(
    input: ListAppInstanceUsersRequest,
  ): Effect.Effect<
    ListAppInstanceUsersResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putAppInstanceRetentionSettings(
    input: PutAppInstanceRetentionSettingsRequest,
  ): Effect.Effect<
    PutAppInstanceRetentionSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putAppInstanceUserExpirationSettings(
    input: PutAppInstanceUserExpirationSettingsRequest,
  ): Effect.Effect<
    PutAppInstanceUserExpirationSettingsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  registerAppInstanceUserEndpoint(
    input: RegisterAppInstanceUserEndpointRequest,
  ): Effect.Effect<
    RegisterAppInstanceUserEndpointResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateAppInstance(
    input: UpdateAppInstanceRequest,
  ): Effect.Effect<
    UpdateAppInstanceResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateAppInstanceBot(
    input: UpdateAppInstanceBotRequest,
  ): Effect.Effect<
    UpdateAppInstanceBotResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateAppInstanceUser(
    input: UpdateAppInstanceUserRequest,
  ): Effect.Effect<
    UpdateAppInstanceUserResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateAppInstanceUserEndpoint(
    input: UpdateAppInstanceUserEndpointRequest,
  ): Effect.Effect<
    UpdateAppInstanceUserEndpointResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
}

export declare class ChimeSdkIdentity extends ChimeSDKIdentity {}

export type AllowMessages = "ALL" | "NONE";
export interface AppInstance {
  AppInstanceArn?: string;
  Name?: string;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  Metadata?: string;
}
export interface AppInstanceAdmin {
  Admin?: Identity;
  AppInstanceArn?: string;
  CreatedTimestamp?: Date | string;
}
export type AppInstanceAdminList = Array<AppInstanceAdminSummary>;
export interface AppInstanceAdminSummary {
  Admin?: Identity;
}
export interface AppInstanceBot {
  AppInstanceBotArn?: string;
  Name?: string;
  Configuration?: Configuration;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  Metadata?: string;
}
export type AppInstanceBotList = Array<AppInstanceBotSummary>;
export interface AppInstanceBotSummary {
  AppInstanceBotArn?: string;
  Name?: string;
  Metadata?: string;
}
export type AppInstanceList = Array<AppInstanceSummary>;
export interface AppInstanceRetentionSettings {
  ChannelRetentionSettings?: ChannelRetentionSettings;
}
export interface AppInstanceSummary {
  AppInstanceArn?: string;
  Name?: string;
  Metadata?: string;
}
export interface AppInstanceUser {
  AppInstanceUserArn?: string;
  Name?: string;
  Metadata?: string;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  ExpirationSettings?: ExpirationSettings;
}
export interface AppInstanceUserEndpoint {
  AppInstanceUserArn?: string;
  EndpointId?: string;
  Name?: string;
  Type?: AppInstanceUserEndpointType;
  ResourceArn?: string;
  EndpointAttributes?: EndpointAttributes;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  AllowMessages?: AllowMessages;
  EndpointState?: EndpointState;
}
export interface AppInstanceUserEndpointSummary {
  AppInstanceUserArn?: string;
  EndpointId?: string;
  Name?: string;
  Type?: AppInstanceUserEndpointType;
  AllowMessages?: AllowMessages;
  EndpointState?: EndpointState;
}
export type AppInstanceUserEndpointSummaryList =
  Array<AppInstanceUserEndpointSummary>;
export type AppInstanceUserEndpointType = "APNS" | "APNS_SANDBOX" | "GCM";
export type AppInstanceUserList = Array<AppInstanceUserSummary>;
export interface AppInstanceUserSummary {
  AppInstanceUserArn?: string;
  Name?: string;
  Metadata?: string;
}
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface ChannelRetentionSettings {
  RetentionDays?: number;
}
export type ChimeArn = string;

export type ClientRequestToken = string;

export interface Configuration {
  Lex: LexConfiguration;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface CreateAppInstanceAdminRequest {
  AppInstanceAdminArn: string;
  AppInstanceArn: string;
}
export interface CreateAppInstanceAdminResponse {
  AppInstanceAdmin?: Identity;
  AppInstanceArn?: string;
}
export interface CreateAppInstanceBotRequest {
  AppInstanceArn: string;
  Name?: string;
  Metadata?: string;
  ClientRequestToken: string;
  Tags?: Array<Tag>;
  Configuration: Configuration;
}
export interface CreateAppInstanceBotResponse {
  AppInstanceBotArn?: string;
}
export interface CreateAppInstanceRequest {
  Name: string;
  Metadata?: string;
  ClientRequestToken: string;
  Tags?: Array<Tag>;
}
export interface CreateAppInstanceResponse {
  AppInstanceArn?: string;
}
export interface CreateAppInstanceUserRequest {
  AppInstanceArn: string;
  AppInstanceUserId: string;
  Name: string;
  Metadata?: string;
  ClientRequestToken: string;
  Tags?: Array<Tag>;
  ExpirationSettings?: ExpirationSettings;
}
export interface CreateAppInstanceUserResponse {
  AppInstanceUserArn?: string;
}
export interface DeleteAppInstanceAdminRequest {
  AppInstanceAdminArn: string;
  AppInstanceArn: string;
}
export interface DeleteAppInstanceBotRequest {
  AppInstanceBotArn: string;
}
export interface DeleteAppInstanceRequest {
  AppInstanceArn: string;
}
export interface DeleteAppInstanceUserRequest {
  AppInstanceUserArn: string;
}
export interface DeregisterAppInstanceUserEndpointRequest {
  AppInstanceUserArn: string;
  EndpointId: string;
}
export interface DescribeAppInstanceAdminRequest {
  AppInstanceAdminArn: string;
  AppInstanceArn: string;
}
export interface DescribeAppInstanceAdminResponse {
  AppInstanceAdmin?: AppInstanceAdmin;
}
export interface DescribeAppInstanceBotRequest {
  AppInstanceBotArn: string;
}
export interface DescribeAppInstanceBotResponse {
  AppInstanceBot?: AppInstanceBot;
}
export interface DescribeAppInstanceRequest {
  AppInstanceArn: string;
}
export interface DescribeAppInstanceResponse {
  AppInstance?: AppInstance;
}
export interface DescribeAppInstanceUserEndpointRequest {
  AppInstanceUserArn: string;
  EndpointId: string;
}
export interface DescribeAppInstanceUserEndpointResponse {
  AppInstanceUserEndpoint?: AppInstanceUserEndpoint;
}
export interface DescribeAppInstanceUserRequest {
  AppInstanceUserArn: string;
}
export interface DescribeAppInstanceUserResponse {
  AppInstanceUser?: AppInstanceUser;
}
export interface EndpointAttributes {
  DeviceToken: string;
  VoipDeviceToken?: string;
}
export interface EndpointState {
  Status: EndpointStatus;
  StatusReason?: EndpointStatusReason;
}
export type EndpointStatus = "ACTIVE" | "INACTIVE";
export type EndpointStatusReason =
  | "INVALID_DEVICE_TOKEN"
  | "INVALID_PINPOINT_ARN";
export type ErrorCode =
  | "BadRequest"
  | "Conflict"
  | "Forbidden"
  | "NotFound"
  | "PreconditionFailed"
  | "ResourceLimitExceeded"
  | "ServiceFailure"
  | "AccessDenied"
  | "ServiceUnavailable"
  | "Throttled"
  | "Throttling"
  | "Unauthorized"
  | "Unprocessable"
  | "VoiceConnectorGroupAssociationsExist"
  | "PhoneNumberAssociationsExist";
export type ExpirationCriterion = "CREATED_TIMESTAMP";
export type ExpirationDays = number;

export interface ExpirationSettings {
  ExpirationDays: number;
  ExpirationCriterion: ExpirationCriterion;
}
export declare class ForbiddenException extends Data.TaggedError(
  "ForbiddenException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface GetAppInstanceRetentionSettingsRequest {
  AppInstanceArn: string;
}
export interface GetAppInstanceRetentionSettingsResponse {
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
  InitiateDeletionTimestamp?: Date | string;
}
export interface Identity {
  Arn?: string;
  Name?: string;
}
export interface InvokedBy {
  StandardMessages: StandardMessages;
  TargetedMessages: TargetedMessages;
}
export type LexBotAliasArn = string;

export interface LexConfiguration {
  RespondsTo?: RespondsTo;
  InvokedBy?: InvokedBy;
  LexBotAliasArn: string;
  LocaleId: string;
  WelcomeIntent?: string;
}
export type LexIntentName = string;

export interface ListAppInstanceAdminsRequest {
  AppInstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAppInstanceAdminsResponse {
  AppInstanceArn?: string;
  AppInstanceAdmins?: Array<AppInstanceAdminSummary>;
  NextToken?: string;
}
export interface ListAppInstanceBotsRequest {
  AppInstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAppInstanceBotsResponse {
  AppInstanceArn?: string;
  AppInstanceBots?: Array<AppInstanceBotSummary>;
  NextToken?: string;
}
export interface ListAppInstancesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAppInstancesResponse {
  AppInstances?: Array<AppInstanceSummary>;
  NextToken?: string;
}
export interface ListAppInstanceUserEndpointsRequest {
  AppInstanceUserArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAppInstanceUserEndpointsResponse {
  AppInstanceUserEndpoints?: Array<AppInstanceUserEndpointSummary>;
  NextToken?: string;
}
export interface ListAppInstanceUsersRequest {
  AppInstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAppInstanceUsersResponse {
  AppInstanceArn?: string;
  AppInstanceUsers?: Array<AppInstanceUserSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MaxResults = number;

export type Metadata = string;

export type NextToken = string;

export type NonEmptyResourceName = string;

export type NonEmptySensitiveString1600 = string;

export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface PutAppInstanceRetentionSettingsRequest {
  AppInstanceArn: string;
  AppInstanceRetentionSettings: AppInstanceRetentionSettings;
}
export interface PutAppInstanceRetentionSettingsResponse {
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
  InitiateDeletionTimestamp?: Date | string;
}
export interface PutAppInstanceUserExpirationSettingsRequest {
  AppInstanceUserArn: string;
  ExpirationSettings?: ExpirationSettings;
}
export interface PutAppInstanceUserExpirationSettingsResponse {
  AppInstanceUserArn?: string;
  ExpirationSettings?: ExpirationSettings;
}
export interface RegisterAppInstanceUserEndpointRequest {
  AppInstanceUserArn: string;
  Name?: string;
  Type: AppInstanceUserEndpointType;
  ResourceArn: string;
  EndpointAttributes: EndpointAttributes;
  ClientRequestToken: string;
  AllowMessages?: AllowMessages;
}
export interface RegisterAppInstanceUserEndpointResponse {
  AppInstanceUserArn?: string;
  EndpointId?: string;
}
export declare class ResourceLimitExceededException extends Data.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type ResourceName = string;

export type RespondsTo = "STANDARD_MESSAGES";
export type RetentionDays = number;

export type SensitiveChimeArn = string;

export type SensitiveString1600 = string;

export declare class ServiceFailureException extends Data.TaggedError(
  "ServiceFailureException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type StandardMessages = "AUTO" | "ALL" | "MENTIONS" | "NONE";
export type ChimeSdkIdentityString = string;

export type String1600 = string;

export type String64 = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export type TagValue = string;

export type TargetedMessages = "ALL" | "NONE";
export declare class ThrottledClientException extends Data.TaggedError(
  "ThrottledClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export declare class UnauthorizedClientException extends Data.TaggedError(
  "UnauthorizedClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UpdateAppInstanceBotRequest {
  AppInstanceBotArn: string;
  Name: string;
  Metadata: string;
  Configuration?: Configuration;
}
export interface UpdateAppInstanceBotResponse {
  AppInstanceBotArn?: string;
}
export interface UpdateAppInstanceRequest {
  AppInstanceArn: string;
  Name: string;
  Metadata: string;
}
export interface UpdateAppInstanceResponse {
  AppInstanceArn?: string;
}
export interface UpdateAppInstanceUserEndpointRequest {
  AppInstanceUserArn: string;
  EndpointId: string;
  Name?: string;
  AllowMessages?: AllowMessages;
}
export interface UpdateAppInstanceUserEndpointResponse {
  AppInstanceUserArn?: string;
  EndpointId?: string;
}
export interface UpdateAppInstanceUserRequest {
  AppInstanceUserArn: string;
  Name: string;
  Metadata: string;
}
export interface UpdateAppInstanceUserResponse {
  AppInstanceUserArn?: string;
}
export type UserId = string;

export type UserName = string;

export declare namespace CreateAppInstance {
  export type Input = CreateAppInstanceRequest;
  export type Output = CreateAppInstanceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateAppInstanceAdmin {
  export type Input = CreateAppInstanceAdminRequest;
  export type Output = CreateAppInstanceAdminResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateAppInstanceBot {
  export type Input = CreateAppInstanceBotRequest;
  export type Output = CreateAppInstanceBotResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateAppInstanceUser {
  export type Input = CreateAppInstanceUserRequest;
  export type Output = CreateAppInstanceUserResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteAppInstance {
  export type Input = DeleteAppInstanceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteAppInstanceAdmin {
  export type Input = DeleteAppInstanceAdminRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteAppInstanceBot {
  export type Input = DeleteAppInstanceBotRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteAppInstanceUser {
  export type Input = DeleteAppInstanceUserRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeregisterAppInstanceUserEndpoint {
  export type Input = DeregisterAppInstanceUserEndpointRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeAppInstance {
  export type Input = DescribeAppInstanceRequest;
  export type Output = DescribeAppInstanceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeAppInstanceAdmin {
  export type Input = DescribeAppInstanceAdminRequest;
  export type Output = DescribeAppInstanceAdminResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeAppInstanceBot {
  export type Input = DescribeAppInstanceBotRequest;
  export type Output = DescribeAppInstanceBotResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeAppInstanceUser {
  export type Input = DescribeAppInstanceUserRequest;
  export type Output = DescribeAppInstanceUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeAppInstanceUserEndpoint {
  export type Input = DescribeAppInstanceUserEndpointRequest;
  export type Output = DescribeAppInstanceUserEndpointResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetAppInstanceRetentionSettings {
  export type Input = GetAppInstanceRetentionSettingsRequest;
  export type Output = GetAppInstanceRetentionSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListAppInstanceAdmins {
  export type Input = ListAppInstanceAdminsRequest;
  export type Output = ListAppInstanceAdminsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListAppInstanceBots {
  export type Input = ListAppInstanceBotsRequest;
  export type Output = ListAppInstanceBotsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListAppInstances {
  export type Input = ListAppInstancesRequest;
  export type Output = ListAppInstancesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListAppInstanceUserEndpoints {
  export type Input = ListAppInstanceUserEndpointsRequest;
  export type Output = ListAppInstanceUserEndpointsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListAppInstanceUsers {
  export type Input = ListAppInstanceUsersRequest;
  export type Output = ListAppInstanceUsersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutAppInstanceRetentionSettings {
  export type Input = PutAppInstanceRetentionSettingsRequest;
  export type Output = PutAppInstanceRetentionSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutAppInstanceUserExpirationSettings {
  export type Input = PutAppInstanceUserExpirationSettingsRequest;
  export type Output = PutAppInstanceUserExpirationSettingsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace RegisterAppInstanceUserEndpoint {
  export type Input = RegisterAppInstanceUserEndpointRequest;
  export type Output = RegisterAppInstanceUserEndpointResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateAppInstance {
  export type Input = UpdateAppInstanceRequest;
  export type Output = UpdateAppInstanceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateAppInstanceBot {
  export type Input = UpdateAppInstanceBotRequest;
  export type Output = UpdateAppInstanceBotResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateAppInstanceUser {
  export type Input = UpdateAppInstanceUserRequest;
  export type Output = UpdateAppInstanceUserResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateAppInstanceUserEndpoint {
  export type Input = UpdateAppInstanceUserEndpointRequest;
  export type Output = UpdateAppInstanceUserEndpointResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export type ChimeSDKIdentityErrors =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonAwsError;
