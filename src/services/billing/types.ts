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

export declare class Billing extends AWSServiceClient {
  associateSourceViews(
    input: AssociateSourceViewsRequest,
  ): Effect.Effect<
    AssociateSourceViewsResponse,
    | AccessDeniedException
    | BillingViewHealthStatusException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createBillingView(
    input: CreateBillingViewRequest,
  ): Effect.Effect<
    CreateBillingViewResponse,
    | AccessDeniedException
    | BillingViewHealthStatusException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteBillingView(
    input: DeleteBillingViewRequest,
  ): Effect.Effect<
    DeleteBillingViewResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateSourceViews(
    input: DisassociateSourceViewsRequest,
  ): Effect.Effect<
    DisassociateSourceViewsResponse,
    | AccessDeniedException
    | BillingViewHealthStatusException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getBillingView(
    input: GetBillingViewRequest,
  ): Effect.Effect<
    GetBillingViewResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listBillingViews(
    input: ListBillingViewsRequest,
  ): Effect.Effect<
    ListBillingViewsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSourceViewsForBillingView(
    input: ListSourceViewsForBillingViewRequest,
  ): Effect.Effect<
    ListSourceViewsForBillingViewResponse,
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
  updateBillingView(
    input: UpdateBillingViewRequest,
  ): Effect.Effect<
    UpdateBillingViewResponse,
    | AccessDeniedException
    | BillingViewHealthStatusException
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
  readonly message: string;
}> {}
export type AccountId = string;

export interface ActiveTimeRange {
  activeAfterInclusive: Date | string;
  activeBeforeInclusive: Date | string;
}
export interface AssociateSourceViewsRequest {
  arn: string;
  sourceViews: Array<string>;
}
export interface AssociateSourceViewsResponse {
  arn: string;
}
export type BillingViewArn = string;

export type BillingViewArnList = Array<string>;
export type BillingViewDescription = string;

export interface BillingViewElement {
  arn?: string;
  name?: string;
  description?: string;
  billingViewType?: BillingViewType;
  ownerAccountId?: string;
  sourceAccountId?: string;
  dataFilterExpression?: Expression;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  derivedViewCount?: number;
  sourceViewCount?: number;
  viewDefinitionLastUpdatedAt?: Date | string;
  healthStatus?: BillingViewHealthStatus;
}
export interface BillingViewHealthStatus {
  statusCode?: BillingViewStatus;
  statusReasons?: Array<BillingViewStatusReason>;
}
export declare class BillingViewHealthStatusException extends EffectData.TaggedError(
  "BillingViewHealthStatusException",
)<{
  readonly message: string;
}> {}
export type BillingViewList = Array<BillingViewListElement>;
export interface BillingViewListElement {
  arn?: string;
  name?: string;
  description?: string;
  ownerAccountId?: string;
  sourceAccountId?: string;
  billingViewType?: BillingViewType;
  healthStatus?: BillingViewHealthStatus;
}
export type BillingViewName = string;

export type BillingViewsMaxResults = number;

export type BillingViewSourceViewsList = Array<string>;
export type BillingViewStatus =
  | "HEALTHY"
  | "UNHEALTHY"
  | "CREATING"
  | "UPDATING";
export type BillingViewStatusReason =
  | "SOURCE_VIEW_UNHEALTHY"
  | "SOURCE_VIEW_UPDATING"
  | "SOURCE_VIEW_ACCESS_DENIED"
  | "SOURCE_VIEW_NOT_FOUND"
  | "CYCLIC_DEPENDENCY"
  | "SOURCE_VIEW_DEPTH_EXCEEDED"
  | "AGGREGATE_SOURCE"
  | "VIEW_OWNER_NOT_MANAGEMENT_ACCOUNT";
export type BillingViewStatusReasons = Array<BillingViewStatusReason>;
export type BillingViewType = "PRIMARY" | "BILLING_GROUP" | "CUSTOM";
export type BillingViewTypeList = Array<BillingViewType>;
export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateBillingViewRequest {
  name: string;
  description?: string;
  sourceViews: Array<string>;
  dataFilterExpression?: Expression;
  clientToken?: string;
  resourceTags?: Array<ResourceTag>;
}
export interface CreateBillingViewResponse {
  arn: string;
  createdAt?: Date | string;
}
export interface DeleteBillingViewRequest {
  arn: string;
  force?: boolean;
}
export interface DeleteBillingViewResponse {
  arn: string;
}
export type Dimension = "LINKED_ACCOUNT";
export interface DimensionValues {
  key: Dimension;
  values: Array<string>;
}
export interface DisassociateSourceViewsRequest {
  arn: string;
  sourceViews: Array<string>;
}
export interface DisassociateSourceViewsResponse {
  arn: string;
}
export type ErrorMessage = string;

export interface Expression {
  dimensions?: DimensionValues;
  tags?: TagValues;
  timeRange?: TimeRange;
}
export type FieldName = string;

export interface GetBillingViewRequest {
  arn: string;
}
export interface GetBillingViewResponse {
  billingView: BillingViewElement;
}
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
export interface GetResourcePolicyResponse {
  resourceArn: string;
  policy?: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ListBillingViewsRequest {
  activeTimeRange?: ActiveTimeRange;
  arns?: Array<string>;
  billingViewTypes?: Array<BillingViewType>;
  ownerAccountId?: string;
  sourceAccountId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListBillingViewsResponse {
  billingViews: Array<BillingViewListElement>;
  nextToken?: string;
}
export interface ListSourceViewsForBillingViewRequest {
  arn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSourceViewsForBillingViewResponse {
  sourceViews: Array<string>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  resourceTags?: Array<ResourceTag>;
}
export type PageToken = string;

export type PolicyDocument = string;

export type QuotaCode = string;

export type ResourceArn = string;

export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface ResourceTag {
  key: string;
  value?: string;
}
export type ResourceTagKey = string;

export type ResourceTagKeyList = Array<string>;
export type ResourceTagList = Array<ResourceTag>;
export type ResourceTagValue = string;

export type ResourceType = string;

export type ServiceCode = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type TagKey = string;

export interface TagResourceRequest {
  resourceArn: string;
  resourceTags: Array<ResourceTag>;
}
export interface TagResourceResponse {}
export interface TagValues {
  key: string;
  values: Array<string>;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface TimeRange {
  beginDateInclusive?: Date | string;
  endDateInclusive?: Date | string;
}
export interface UntagResourceRequest {
  resourceArn: string;
  resourceTagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateBillingViewRequest {
  arn: string;
  name?: string;
  description?: string;
  dataFilterExpression?: Expression;
}
export interface UpdateBillingViewResponse {
  arn: string;
  updatedAt?: Date | string;
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
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other";
export type Value = string;

export type Values = Array<string>;
export declare namespace AssociateSourceViews {
  export type Input = AssociateSourceViewsRequest;
  export type Output = AssociateSourceViewsResponse;
  export type Error =
    | AccessDeniedException
    | BillingViewHealthStatusException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateBillingView {
  export type Input = CreateBillingViewRequest;
  export type Output = CreateBillingViewResponse;
  export type Error =
    | AccessDeniedException
    | BillingViewHealthStatusException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBillingView {
  export type Input = DeleteBillingViewRequest;
  export type Output = DeleteBillingViewResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateSourceViews {
  export type Input = DisassociateSourceViewsRequest;
  export type Output = DisassociateSourceViewsResponse;
  export type Error =
    | AccessDeniedException
    | BillingViewHealthStatusException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBillingView {
  export type Input = GetBillingViewRequest;
  export type Output = GetBillingViewResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBillingViews {
  export type Input = ListBillingViewsRequest;
  export type Output = ListBillingViewsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSourceViewsForBillingView {
  export type Input = ListSourceViewsForBillingViewRequest;
  export type Output = ListSourceViewsForBillingViewResponse;
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

export declare namespace UpdateBillingView {
  export type Input = UpdateBillingViewRequest;
  export type Output = UpdateBillingViewResponse;
  export type Error =
    | AccessDeniedException
    | BillingViewHealthStatusException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type BillingErrors =
  | AccessDeniedException
  | BillingViewHealthStatusException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
