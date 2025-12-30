import * as Schema from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ResourceTagKeyList = Schema.Array(Schema.String);
export class DeleteDashboardRequest extends Schema.Class<DeleteDashboardRequest>("DeleteDashboardRequest")({arn: Schema.String}) {}
export class GetDashboardRequest extends Schema.Class<GetDashboardRequest>("GetDashboardRequest")({arn: Schema.String}) {}
export class GetResourcePolicyRequest extends Schema.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({resourceArn: Schema.String}) {}
export class ListDashboardsRequest extends Schema.Class<ListDashboardsRequest>("ListDashboardsRequest")({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class ResourceTag extends Schema.Class<ResourceTag>("ResourceTag")({key: Schema.String, value: Schema.String}) {}
export const ResourceTagList = Schema.Array(ResourceTag);
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, resourceTags: ResourceTagList}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, resourceTagKeys: ResourceTagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const MetricNames = Schema.Array(Schema.String);
export class DateTimeValue extends Schema.Class<DateTimeValue>("DateTimeValue")({type: Schema.String, value: Schema.String}) {}
export class DateTimeRange extends Schema.Class<DateTimeRange>("DateTimeRange")({startTime: DateTimeValue, endTime: DateTimeValue}) {}
export class GroupDefinition extends Schema.Class<GroupDefinition>("GroupDefinition")({key: Schema.String, type: Schema.optional(Schema.String)}) {}
export const GroupDefinitions = Schema.Array(GroupDefinition);
export const StringList = Schema.Array(Schema.String);
export const MatchOptions = Schema.Array(Schema.String);
export class DimensionValues extends Schema.Class<DimensionValues>("DimensionValues")({key: Schema.String, values: StringList, matchOptions: Schema.optional(MatchOptions)}) {}
export class TagValues extends Schema.Class<TagValues>("TagValues")({key: Schema.optional(Schema.String), values: Schema.optional(StringList), matchOptions: Schema.optional(MatchOptions)}) {}
export class CostCategoryValues extends Schema.Class<CostCategoryValues>("CostCategoryValues")({key: Schema.optional(Schema.String), values: Schema.optional(StringList), matchOptions: Schema.optional(MatchOptions)}) {}
export class Expression extends Schema.Class<Expression>("Expression")({or: Schema.optional(Schema.suspend(() => Expressions)), and: Schema.optional(Schema.suspend(() => Expressions)), not: Schema.optional(Schema.suspend((): Schema.Schema<Expression> => Expression)), dimensions: Schema.optional(DimensionValues), tags: Schema.optional(TagValues), costCategories: Schema.optional(CostCategoryValues)}) {}
export class CostAndUsageQuery extends Schema.Class<CostAndUsageQuery>("CostAndUsageQuery")({metrics: MetricNames, timeRange: DateTimeRange, granularity: Schema.String, groupBy: Schema.optional(GroupDefinitions), filter: Schema.optional(Expression)}) {}
export class SavingsPlansCoverageQuery extends Schema.Class<SavingsPlansCoverageQuery>("SavingsPlansCoverageQuery")({timeRange: DateTimeRange, metrics: Schema.optional(MetricNames), granularity: Schema.optional(Schema.String), groupBy: Schema.optional(GroupDefinitions), filter: Schema.optional(Expression)}) {}
export class SavingsPlansUtilizationQuery extends Schema.Class<SavingsPlansUtilizationQuery>("SavingsPlansUtilizationQuery")({timeRange: DateTimeRange, granularity: Schema.optional(Schema.String), filter: Schema.optional(Expression)}) {}
export class ReservationCoverageQuery extends Schema.Class<ReservationCoverageQuery>("ReservationCoverageQuery")({timeRange: DateTimeRange, groupBy: Schema.optional(GroupDefinitions), granularity: Schema.optional(Schema.String), filter: Schema.optional(Expression), metrics: Schema.optional(MetricNames)}) {}
export class ReservationUtilizationQuery extends Schema.Class<ReservationUtilizationQuery>("ReservationUtilizationQuery")({timeRange: DateTimeRange, groupBy: Schema.optional(GroupDefinitions), granularity: Schema.optional(Schema.String), filter: Schema.optional(Expression)}) {}
export const QueryParameters = Schema.Union(CostAndUsageQuery, SavingsPlansCoverageQuery, SavingsPlansUtilizationQuery, ReservationCoverageQuery, ReservationUtilizationQuery);
export class GraphDisplayConfig extends Schema.Class<GraphDisplayConfig>("GraphDisplayConfig")({visualType: Schema.String}) {}
export const GraphDisplayConfigMap = Schema.Record({key: Schema.String, value: GraphDisplayConfig});
export class TableDisplayConfigStruct extends Schema.Class<TableDisplayConfigStruct>("TableDisplayConfigStruct")({}) {}
export const DisplayConfig = Schema.Union(GraphDisplayConfigMap, TableDisplayConfigStruct);
export class WidgetConfig extends Schema.Class<WidgetConfig>("WidgetConfig")({queryParameters: QueryParameters, displayConfig: DisplayConfig}) {}
export const WidgetConfigList = Schema.Array(WidgetConfig);
export class Widget extends Schema.Class<Widget>("Widget")({title: Schema.String, description: Schema.optional(Schema.String), width: Schema.optional(Schema.Number), height: Schema.optional(Schema.Number), horizontalOffset: Schema.optional(Schema.Number), configs: WidgetConfigList}) {}
export const WidgetList = Schema.Array(Widget);
export class UpdateDashboardRequest extends Schema.Class<UpdateDashboardRequest>("UpdateDashboardRequest")({arn: Schema.String, name: Schema.optional(Schema.String), description: Schema.optional(Schema.String), widgets: Schema.optional(WidgetList)}) {}
export class DeleteDashboardResponse extends Schema.Class<DeleteDashboardResponse>("DeleteDashboardResponse")({arn: Schema.String}) {}
export class GetDashboardResponse extends Schema.Class<GetDashboardResponse>("GetDashboardResponse")({arn: Schema.String, name: Schema.String, description: Schema.optional(Schema.String), type: Schema.String, widgets: WidgetList, createdAt: Schema.Date, updatedAt: Schema.Date}) {}
export class GetResourcePolicyResponse extends Schema.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({resourceArn: Schema.String, policyDocument: Schema.String}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({resourceTags: Schema.optional(ResourceTagList)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String}) {}
export class UpdateDashboardResponse extends Schema.Class<UpdateDashboardResponse>("UpdateDashboardResponse")({arn: Schema.String}) {}
export class DashboardReference extends Schema.Class<DashboardReference>("DashboardReference")({arn: Schema.String, name: Schema.String, description: Schema.optional(Schema.String), type: Schema.String, createdAt: Schema.Date, updatedAt: Schema.Date}) {}
export const DashboardReferenceList = Schema.Array(DashboardReference);
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String}) {}
export class ListDashboardsResponse extends Schema.Class<ListDashboardsResponse>("ListDashboardsResponse")({dashboards: DashboardReferenceList, nextToken: Schema.optional(Schema.String)}) {}
export const Expressions = Schema.Array(Schema.suspend((): Schema.Schema<Expression> => Expression));
export class CreateDashboardRequest extends Schema.Class<CreateDashboardRequest>("CreateDashboardRequest")({name: Schema.String, description: Schema.optional(Schema.String), widgets: WidgetList, resourceTags: Schema.optional(ResourceTagList)}) {}
export class CreateDashboardResponse extends Schema.Class<CreateDashboardResponse>("CreateDashboardResponse")({arn: Schema.String}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: Schema.String}) {}

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateDashboard = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.UpdateDashboard" }, UpdateDashboardRequest, UpdateDashboardResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteDashboard = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.DeleteDashboard" }, DeleteDashboardRequest, DeleteDashboardResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getDashboard = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.GetDashboard" }, GetDashboardRequest, GetDashboardResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getResourcePolicy = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listDashboards = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.ListDashboards" }, ListDashboardsRequest, ListDashboardsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createDashboard = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-08-18", uri: "/", method: "POST", sdkId: "BCM Dashboards", sigV4ServiceName: "bcm-dashboards", name: "AWSBCMDashboardsService.CreateDashboard" }, CreateDashboardRequest, CreateDashboardResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
