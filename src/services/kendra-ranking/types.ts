import type { Effect, Data as EffectData } from "effect";
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

export declare class KendraRanking extends AWSServiceClient {
  createRescoreExecutionPlan(
    input: CreateRescoreExecutionPlanRequest,
  ): Effect.Effect<
    CreateRescoreExecutionPlanResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRescoreExecutionPlan(
    input: DeleteRescoreExecutionPlanRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRescoreExecutionPlan(
    input: DescribeRescoreExecutionPlanRequest,
  ): Effect.Effect<
    DescribeRescoreExecutionPlanResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRescoreExecutionPlans(
    input: ListRescoreExecutionPlansRequest,
  ): Effect.Effect<
    ListRescoreExecutionPlansResponse,
    | AccessDeniedException
    | InternalServerException
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
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  rescore(
    input: RescoreRequest,
  ): Effect.Effect<
    RescoreResult,
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
    | ResourceUnavailableException
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
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRescoreExecutionPlan(
    input: UpdateRescoreExecutionPlanRequest,
  ): Effect.Effect<
    {},
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

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AmazonResourceName = string;

export type BodyTokensList = Array<string>;
export interface CapacityUnitsConfiguration {
  RescoreCapacityUnits: number;
}
export type ClientTokenName = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateRescoreExecutionPlanRequest {
  Name: string;
  Description?: string;
  CapacityUnits?: CapacityUnitsConfiguration;
  Tags?: Array<Tag>;
  ClientToken?: string;
}
export interface CreateRescoreExecutionPlanResponse {
  Id: string;
  Arn: string;
}
export interface DeleteRescoreExecutionPlanRequest {
  Id: string;
}
export interface DescribeRescoreExecutionPlanRequest {
  Id: string;
}
export interface DescribeRescoreExecutionPlanResponse {
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  CapacityUnits?: CapacityUnitsConfiguration;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  Status?: RescoreExecutionPlanStatus;
  ErrorMessage?: string;
}
export type Description = string;

export interface Document {
  Id: string;
  GroupId?: string;
  Title?: string;
  Body?: string;
  TokenizedTitle?: Array<string>;
  TokenizedBody?: Array<string>;
  OriginalScore: number;
}
export type DocumentBody = string;

export type DocumentId = string;

export type DocumentList = Array<Document>;
export type DocumentTitle = string;

export type ErrorMessage = string;

export type Float = number;

export type GroupId = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface ListRescoreExecutionPlansRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRescoreExecutionPlansResponse {
  SummaryItems?: Array<RescoreExecutionPlanSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MaxResultsIntegerForListRescoreExecutionPlansRequest = number;

export type NextToken = string;

export type RescoreCapacityUnit = number;

export type RescoreExecutionPlanArn = string;

export type RescoreExecutionPlanId = string;

export type RescoreExecutionPlanName = string;

export type RescoreExecutionPlanStatus =
  | "CREATING"
  | "UPDATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED";
export interface RescoreExecutionPlanSummary {
  Name?: string;
  Id?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  Status?: RescoreExecutionPlanStatus;
}
export type RescoreExecutionPlanSummaryList =
  Array<RescoreExecutionPlanSummary>;
export type RescoreId = string;

export interface RescoreRequest {
  RescoreExecutionPlanId: string;
  SearchQuery: string;
  Documents: Array<Document>;
}
export interface RescoreResult {
  RescoreId?: string;
  ResultItems?: Array<RescoreResultItem>;
}
export interface RescoreResultItem {
  DocumentId?: string;
  Score?: number;
}
export type RescoreResultItemList = Array<RescoreResultItem>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceUnavailableException extends EffectData.TaggedError(
  "ResourceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type SearchQuery = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
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
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export type TitleTokensList = Array<string>;
export type Tokens = string;

export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateRescoreExecutionPlanRequest {
  Id: string;
  Name?: string;
  Description?: string;
  CapacityUnits?: CapacityUnitsConfiguration;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace CreateRescoreExecutionPlan {
  export type Input = CreateRescoreExecutionPlanRequest;
  export type Output = CreateRescoreExecutionPlanResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRescoreExecutionPlan {
  export type Input = DeleteRescoreExecutionPlanRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRescoreExecutionPlan {
  export type Input = DescribeRescoreExecutionPlanRequest;
  export type Output = DescribeRescoreExecutionPlanResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRescoreExecutionPlans {
  export type Input = ListRescoreExecutionPlansRequest;
  export type Output = ListRescoreExecutionPlansResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
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
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace Rescore {
  export type Input = RescoreRequest;
  export type Output = RescoreResult;
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
    | ResourceUnavailableException
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
    | ResourceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRescoreExecutionPlan {
  export type Input = UpdateRescoreExecutionPlanRequest;
  export type Output = {};
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
