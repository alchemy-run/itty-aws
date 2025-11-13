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

export declare class BCMDashboards extends AWSServiceClient {
  createDashboard(
    input: CreateDashboardRequest,
  ): Effect.Effect<
    CreateDashboardResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDashboard(
    input: DeleteDashboardRequest,
  ): Effect.Effect<
    DeleteDashboardResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDashboard(
    input: GetDashboardRequest,
  ): Effect.Effect<
    GetDashboardResponse,
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
  listDashboards(
    input: ListDashboardsRequest,
  ): Effect.Effect<
    ListDashboardsResponse,
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDashboard(
    input: UpdateDashboardRequest,
  ): Effect.Effect<
    UpdateDashboardResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class BcmDashboards extends BCMDashboards {}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface CostAndUsageQuery {
  metrics: Array<MetricName>;
  timeRange: DateTimeRange;
  granularity: Granularity;
  groupBy?: Array<GroupDefinition>;
  filter?: Expression;
}
export interface CostCategoryValues {
  key?: string;
  values?: Array<string>;
  matchOptions?: Array<MatchOption>;
}
export interface CreateDashboardRequest {
  name: string;
  description?: string;
  widgets: Array<Widget>;
  resourceTags?: Array<ResourceTag>;
}
export interface CreateDashboardResponse {
  arn: string;
}
export type DashboardArn = string;

export type DashboardName = string;

export interface DashboardReference {
  arn: string;
  name: string;
  description?: string;
  type: DashboardType;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export type DashboardReferenceList = Array<DashboardReference>;
export type DashboardType = "CUSTOM";
export interface DateTimeRange {
  startTime: DateTimeValue;
  endTime: DateTimeValue;
}
export type DateTimeType = "ABSOLUTE" | "RELATIVE";
export interface DateTimeValue {
  type: DateTimeType;
  value: string;
}
export interface DeleteDashboardRequest {
  arn: string;
}
export interface DeleteDashboardResponse {
  arn: string;
}
export type Description = string;

export type Dimension =
  | "AZ"
  | "INSTANCE_TYPE"
  | "LINKED_ACCOUNT"
  | "OPERATION"
  | "PURCHASE_TYPE"
  | "REGION"
  | "SERVICE"
  | "USAGE_TYPE"
  | "USAGE_TYPE_GROUP"
  | "RECORD_TYPE"
  | "RESOURCE_ID"
  | "SUBSCRIPTION_ID"
  | "TAG_KEY"
  | "OPERATING_SYSTEM"
  | "TENANCY"
  | "BILLING_ENTITY"
  | "RESERVATION_ID"
  | "COST_CATEGORY_NAME"
  | "DATABASE_ENGINE"
  | "LEGAL_ENTITY_NAME"
  | "SAVINGS_PLANS_TYPE"
  | "INSTANCE_TYPE_FAMILY"
  | "CACHE_ENGINE"
  | "DEPLOYMENT_OPTION"
  | "SCOPE"
  | "PLATFORM";
export interface DimensionValues {
  key: Dimension;
  values: Array<string>;
  matchOptions?: Array<MatchOption>;
}
interface _DisplayConfig {
  graph?: Record<string, GraphDisplayConfig>;
  table?: TableDisplayConfigStruct;
}

export type DisplayConfig =
  | (_DisplayConfig & { graph: Record<string, GraphDisplayConfig> })
  | (_DisplayConfig & { table: TableDisplayConfigStruct });
export interface Expression {
  or?: Array<Expression>;
  and?: Array<Expression>;
  not?: Expression;
  dimensions?: DimensionValues;
  tags?: TagValues;
  costCategories?: CostCategoryValues;
}
export type Expressions = Array<Expression>;
export type GenericString = string;

export type GenericTimeStamp = Date | string;

export interface GetDashboardRequest {
  arn: string;
}
export interface GetDashboardResponse {
  arn: string;
  name: string;
  description?: string;
  type: DashboardType;
  widgets: Array<Widget>;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
export interface GetResourcePolicyResponse {
  resourceArn: string;
  policyDocument: string;
}
export type Granularity = "HOURLY" | "DAILY" | "MONTHLY";
export interface GraphDisplayConfig {
  visualType: VisualType;
}
export type GraphDisplayConfigMap = Record<string, GraphDisplayConfig>;
export interface GroupDefinition {
  key: string;
  type?: GroupDefinitionType;
}
export type GroupDefinitions = Array<GroupDefinition>;
export type GroupDefinitionType = "DIMENSION" | "TAG" | "COST_CATEGORY";
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ListDashboardsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListDashboardsResponse {
  dashboards: Array<DashboardReference>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  resourceTags?: Array<ResourceTag>;
}
export type MatchOption =
  | "EQUALS"
  | "ABSENT"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "GREATER_THAN_OR_EQUAL"
  | "CASE_SENSITIVE"
  | "CASE_INSENSITIVE";
export type MatchOptions = Array<MatchOption>;
export type MaxResults = number;

export type MetricName =
  | "AmortizedCost"
  | "BlendedCost"
  | "NetAmortizedCost"
  | "NetUnblendedCost"
  | "NormalizedUsageAmount"
  | "UnblendedCost"
  | "UsageQuantity"
  | "SpendCoveredBySavingsPlans"
  | "Hour"
  | "Unit"
  | "Cost";
export type MetricNames = Array<MetricName>;
export type NextPageToken = string;

interface _QueryParameters {
  costAndUsage?: CostAndUsageQuery;
  savingsPlansCoverage?: SavingsPlansCoverageQuery;
  savingsPlansUtilization?: SavingsPlansUtilizationQuery;
  reservationCoverage?: ReservationCoverageQuery;
  reservationUtilization?: ReservationUtilizationQuery;
}

export type QueryParameters =
  | (_QueryParameters & { costAndUsage: CostAndUsageQuery })
  | (_QueryParameters & { savingsPlansCoverage: SavingsPlansCoverageQuery })
  | (_QueryParameters & {
      savingsPlansUtilization: SavingsPlansUtilizationQuery;
    })
  | (_QueryParameters & { reservationCoverage: ReservationCoverageQuery })
  | (_QueryParameters & {
      reservationUtilization: ReservationUtilizationQuery;
    });
export interface ReservationCoverageQuery {
  timeRange: DateTimeRange;
  groupBy?: Array<GroupDefinition>;
  granularity?: Granularity;
  filter?: Expression;
  metrics?: Array<MetricName>;
}
export interface ReservationUtilizationQuery {
  timeRange: DateTimeRange;
  groupBy?: Array<GroupDefinition>;
  granularity?: Granularity;
  filter?: Expression;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface ResourceTag {
  key: string;
  value: string;
}
export type ResourceTagKey = string;

export type ResourceTagKeyList = Array<string>;
export type ResourceTagList = Array<ResourceTag>;
export type ResourceTagValue = string;

export interface SavingsPlansCoverageQuery {
  timeRange: DateTimeRange;
  metrics?: Array<MetricName>;
  granularity?: Granularity;
  groupBy?: Array<GroupDefinition>;
  filter?: Expression;
}
export interface SavingsPlansUtilizationQuery {
  timeRange: DateTimeRange;
  granularity?: Granularity;
  filter?: Expression;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type StringList = Array<string>;
export interface TableDisplayConfigStruct {}
export interface TagResourceRequest {
  resourceArn: string;
  resourceTags: Array<ResourceTag>;
}
export interface TagResourceResponse {}
export interface TagValues {
  key?: string;
  values?: Array<string>;
  matchOptions?: Array<MatchOption>;
}
export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  resourceTagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateDashboardRequest {
  arn: string;
  name?: string;
  description?: string;
  widgets?: Array<Widget>;
}
export interface UpdateDashboardResponse {
  arn: string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export type VisualType = "LINE" | "BAR" | "STACK";
export interface Widget {
  title: string;
  description?: string;
  width?: number;
  height?: number;
  horizontalOffset?: number;
  configs: Array<WidgetConfig>;
}
export interface WidgetConfig {
  queryParameters: QueryParameters;
  displayConfig: DisplayConfig;
}
export type WidgetConfigList = Array<WidgetConfig>;
export type WidgetHeight = number;

export type WidgetList = Array<Widget>;
export type WidgetTitle = string;

export type WidgetWidth = number;

export declare namespace CreateDashboard {
  export type Input = CreateDashboardRequest;
  export type Output = CreateDashboardResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDashboard {
  export type Input = DeleteDashboardRequest;
  export type Output = DeleteDashboardResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDashboard {
  export type Input = GetDashboardRequest;
  export type Output = GetDashboardResponse;
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

export declare namespace ListDashboards {
  export type Input = ListDashboardsRequest;
  export type Output = ListDashboardsResponse;
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
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDashboard {
  export type Input = UpdateDashboardRequest;
  export type Output = UpdateDashboardResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type BCMDashboardsErrors =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
