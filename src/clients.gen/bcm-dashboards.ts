import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ResourceTagKeyList = S.Array(S.String);
export class DeleteDashboardRequest extends S.Class<DeleteDashboardRequest>("DeleteDashboardRequest")({arn: S.String}) {}
export class GetDashboardRequest extends S.Class<GetDashboardRequest>("GetDashboardRequest")({arn: S.String}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({resourceArn: S.String}) {}
export class ListDashboardsRequest extends S.Class<ListDashboardsRequest>("ListDashboardsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ResourceTag extends S.Class<ResourceTag>("ResourceTag")({key: S.String, value: S.String}) {}
export const ResourceTagList = S.Array(ResourceTag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, resourceTags: ResourceTagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, resourceTagKeys: ResourceTagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const MetricNames = S.Array(S.String);
export class DateTimeValue extends S.Class<DateTimeValue>("DateTimeValue")({type: S.String, value: S.String}) {}
export class DateTimeRange extends S.Class<DateTimeRange>("DateTimeRange")({startTime: DateTimeValue, endTime: DateTimeValue}) {}
export class GroupDefinition extends S.Class<GroupDefinition>("GroupDefinition")({key: S.String, type: S.optional(S.String)}) {}
export const GroupDefinitions = S.Array(GroupDefinition);
export const StringList = S.Array(S.String);
export const MatchOptions = S.Array(S.String);
export class DimensionValues extends S.Class<DimensionValues>("DimensionValues")({key: S.String, values: StringList, matchOptions: S.optional(MatchOptions)}) {}
export class TagValues extends S.Class<TagValues>("TagValues")({key: S.optional(S.String), values: S.optional(StringList), matchOptions: S.optional(MatchOptions)}) {}
export class CostCategoryValues extends S.Class<CostCategoryValues>("CostCategoryValues")({key: S.optional(S.String), values: S.optional(StringList), matchOptions: S.optional(MatchOptions)}) {}
export class Expression extends S.Class<Expression>("Expression")({or: S.optional(S.suspend(() => Expressions)), and: S.optional(S.suspend(() => Expressions)), not: S.optional(S.suspend((): S.Schema<Expression, any> => Expression)), dimensions: S.optional(DimensionValues), tags: S.optional(TagValues), costCategories: S.optional(CostCategoryValues)}) {}
export class CostAndUsageQuery extends S.Class<CostAndUsageQuery>("CostAndUsageQuery")({metrics: MetricNames, timeRange: DateTimeRange, granularity: S.String, groupBy: S.optional(GroupDefinitions), filter: S.optional(Expression)}) {}
export class SavingsPlansCoverageQuery extends S.Class<SavingsPlansCoverageQuery>("SavingsPlansCoverageQuery")({timeRange: DateTimeRange, metrics: S.optional(MetricNames), granularity: S.optional(S.String), groupBy: S.optional(GroupDefinitions), filter: S.optional(Expression)}) {}
export class SavingsPlansUtilizationQuery extends S.Class<SavingsPlansUtilizationQuery>("SavingsPlansUtilizationQuery")({timeRange: DateTimeRange, granularity: S.optional(S.String), filter: S.optional(Expression)}) {}
export class ReservationCoverageQuery extends S.Class<ReservationCoverageQuery>("ReservationCoverageQuery")({timeRange: DateTimeRange, groupBy: S.optional(GroupDefinitions), granularity: S.optional(S.String), filter: S.optional(Expression), metrics: S.optional(MetricNames)}) {}
export class ReservationUtilizationQuery extends S.Class<ReservationUtilizationQuery>("ReservationUtilizationQuery")({timeRange: DateTimeRange, groupBy: S.optional(GroupDefinitions), granularity: S.optional(S.String), filter: S.optional(Expression)}) {}
export const QueryParameters = S.Union(CostAndUsageQuery, SavingsPlansCoverageQuery, SavingsPlansUtilizationQuery, ReservationCoverageQuery, ReservationUtilizationQuery);
export class GraphDisplayConfig extends S.Class<GraphDisplayConfig>("GraphDisplayConfig")({visualType: S.String}) {}
export const GraphDisplayConfigMap = S.Record({key: S.String, value: GraphDisplayConfig});
export class TableDisplayConfigStruct extends S.Class<TableDisplayConfigStruct>("TableDisplayConfigStruct")({}) {}
export const DisplayConfig = S.Union(GraphDisplayConfigMap, TableDisplayConfigStruct);
export class WidgetConfig extends S.Class<WidgetConfig>("WidgetConfig")({queryParameters: QueryParameters, displayConfig: DisplayConfig}) {}
export const WidgetConfigList = S.Array(WidgetConfig);
export class Widget extends S.Class<Widget>("Widget")({title: S.String, description: S.optional(S.String), width: S.optional(S.Number), height: S.optional(S.Number), horizontalOffset: S.optional(S.Number), configs: WidgetConfigList}) {}
export const WidgetList = S.Array(Widget);
export class UpdateDashboardRequest extends S.Class<UpdateDashboardRequest>("UpdateDashboardRequest")({arn: S.String, name: S.optional(S.String), description: S.optional(S.String), widgets: S.optional(WidgetList)}) {}
export class DeleteDashboardResponse extends S.Class<DeleteDashboardResponse>("DeleteDashboardResponse")({arn: S.String}) {}
export class GetDashboardResponse extends S.Class<GetDashboardResponse>("GetDashboardResponse")({arn: S.String, name: S.String, description: S.optional(S.String), type: S.String, widgets: WidgetList, createdAt: S.Date, updatedAt: S.Date}) {}
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({resourceArn: S.String, policyDocument: S.String}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({resourceTags: S.optional(ResourceTagList)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export class UpdateDashboardResponse extends S.Class<UpdateDashboardResponse>("UpdateDashboardResponse")({arn: S.String}) {}
export class DashboardReference extends S.Class<DashboardReference>("DashboardReference")({arn: S.String, name: S.String, description: S.optional(S.String), type: S.String, createdAt: S.Date, updatedAt: S.Date}) {}
export const DashboardReferenceList = S.Array(DashboardReference);
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String}) {}
export class ListDashboardsResponse extends S.Class<ListDashboardsResponse>("ListDashboardsResponse")({dashboards: DashboardReferenceList, nextToken: S.optional(S.String)}) {}
export type Expressions = Expression[];
export const Expressions = S.Array(S.suspend((): S.Schema<Expression, any> => Expression)) as any as S.Schema<Expressions>;
export class CreateDashboardRequest extends S.Class<CreateDashboardRequest>("CreateDashboardRequest")({name: S.String, description: S.optional(S.String), widgets: WidgetList, resourceTags: S.optional(ResourceTagList)}) {}
export class CreateDashboardResponse extends S.Class<CreateDashboardResponse>("CreateDashboardResponse")({arn: S.String}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.String}) {}

//# Errors
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateDashboard = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.UpdateDashboard" }, UpdateDashboardRequest, UpdateDashboardResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteDashboard = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.DeleteDashboard" }, DeleteDashboardRequest, DeleteDashboardResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getDashboard = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.GetDashboard" }, GetDashboardRequest, GetDashboardResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listDashboards = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.ListDashboards" }, ListDashboardsRequest, ListDashboardsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createDashboard = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.CreateDashboard" }, CreateDashboardRequest, CreateDashboardResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
