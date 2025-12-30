import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ResourceTagKeyList = Schema.Array(Schema.String);
export const DeleteDashboardRequest = Schema.Struct({arn: Schema.String});
export const GetDashboardRequest = Schema.Struct({arn: Schema.String});
export const GetResourcePolicyRequest = Schema.Struct({resourceArn: Schema.String});
export const ListDashboardsRequest = Schema.Struct({maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const ResourceTag = Schema.Struct({key: Schema.String, value: Schema.String});
export const ResourceTagList = Schema.Array(ResourceTag);
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, resourceTags: ResourceTagList});
export const TagResourceResponse = Schema.Struct({});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, resourceTagKeys: ResourceTagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const MetricNames = Schema.Array(Schema.String);
export const DateTimeValue = Schema.Struct({type: Schema.String, value: Schema.String});
export const DateTimeRange = Schema.Struct({startTime: DateTimeValue, endTime: DateTimeValue});
export const GroupDefinition = Schema.Struct({key: Schema.String, type: Schema.optional(Schema.String)});
export const GroupDefinitions = Schema.Array(GroupDefinition);
export const Expressions = Schema.Array(Expression);
export const StringList = Schema.Array(Schema.String);
export const MatchOptions = Schema.Array(Schema.String);
export const DimensionValues = Schema.Struct({key: Schema.String, values: StringList, matchOptions: Schema.optional(MatchOptions)});
export const TagValues = Schema.Struct({key: Schema.optional(Schema.String), values: Schema.optional(StringList), matchOptions: Schema.optional(MatchOptions)});
export const CostCategoryValues = Schema.Struct({key: Schema.optional(Schema.String), values: Schema.optional(StringList), matchOptions: Schema.optional(MatchOptions)});
export const Expression = Schema.Struct({or: Schema.optional(Expressions), and: Schema.optional(Expressions), not: Schema.optional(Expression), dimensions: Schema.optional(DimensionValues), tags: Schema.optional(TagValues), costCategories: Schema.optional(CostCategoryValues)});
export const CostAndUsageQuery = Schema.Struct({metrics: MetricNames, timeRange: DateTimeRange, granularity: Schema.String, groupBy: Schema.optional(GroupDefinitions), filter: Schema.optional(Expression)});
export const SavingsPlansCoverageQuery = Schema.Struct({timeRange: DateTimeRange, metrics: Schema.optional(MetricNames), granularity: Schema.optional(Schema.String), groupBy: Schema.optional(GroupDefinitions), filter: Schema.optional(Expression)});
export const SavingsPlansUtilizationQuery = Schema.Struct({timeRange: DateTimeRange, granularity: Schema.optional(Schema.String), filter: Schema.optional(Expression)});
export const ReservationCoverageQuery = Schema.Struct({timeRange: DateTimeRange, groupBy: Schema.optional(GroupDefinitions), granularity: Schema.optional(Schema.String), filter: Schema.optional(Expression), metrics: Schema.optional(MetricNames)});
export const ReservationUtilizationQuery = Schema.Struct({timeRange: DateTimeRange, groupBy: Schema.optional(GroupDefinitions), granularity: Schema.optional(Schema.String), filter: Schema.optional(Expression)});
export const QueryParameters = Schema.Union(CostAndUsageQuery, SavingsPlansCoverageQuery, SavingsPlansUtilizationQuery, ReservationCoverageQuery, ReservationUtilizationQuery);
export const GraphDisplayConfig = Schema.Struct({visualType: Schema.String});
export const GraphDisplayConfigMap = Schema.Record({key: Schema.String, value: GraphDisplayConfig});
export const TableDisplayConfigStruct = Schema.Struct({});
export const DisplayConfig = Schema.Union(GraphDisplayConfigMap, TableDisplayConfigStruct);
export const WidgetConfig = Schema.Struct({queryParameters: QueryParameters, displayConfig: DisplayConfig});
export const WidgetConfigList = Schema.Array(WidgetConfig);
export const Widget = Schema.Struct({title: Schema.String, description: Schema.optional(Schema.String), width: Schema.optional(Schema.Number), height: Schema.optional(Schema.Number), horizontalOffset: Schema.optional(Schema.Number), configs: WidgetConfigList});
export const WidgetList = Schema.Array(Widget);
export const UpdateDashboardRequest = Schema.Struct({arn: Schema.String, name: Schema.optional(Schema.String), description: Schema.optional(Schema.String), widgets: Schema.optional(WidgetList)});
export const DeleteDashboardResponse = Schema.Struct({arn: Schema.String});
export const GetDashboardResponse = Schema.Struct({arn: Schema.String, name: Schema.String, description: Schema.optional(Schema.String), type: Schema.String, widgets: WidgetList, createdAt: Schema.Date, updatedAt: Schema.Date});
export const GetResourcePolicyResponse = Schema.Struct({resourceArn: Schema.String, policyDocument: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({resourceTags: Schema.optional(ResourceTagList)});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const UpdateDashboardResponse = Schema.Struct({arn: Schema.String});
export const DashboardReference = Schema.Struct({arn: Schema.String, name: Schema.String, description: Schema.optional(Schema.String), type: Schema.String, createdAt: Schema.Date, updatedAt: Schema.Date});
export const DashboardReferenceList = Schema.Array(DashboardReference);
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String});
export const ListDashboardsResponse = Schema.Struct({dashboards: DashboardReferenceList, nextToken: Schema.optional(Schema.String)});
export const CreateDashboardRequest = Schema.Struct({name: Schema.String, description: Schema.optional(Schema.String), widgets: WidgetList, resourceTags: Schema.optional(ResourceTagList)});
export const CreateDashboardResponse = Schema.Struct({arn: Schema.String});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String});

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

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
