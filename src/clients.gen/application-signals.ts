import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteGroupingConfigurationOutput extends S.Class<DeleteGroupingConfigurationOutput>("DeleteGroupingConfigurationOutput")({}) {}
export class StartDiscoveryInput extends S.Class<StartDiscoveryInput>("StartDiscoveryInput")({}) {}
export class StartDiscoveryOutput extends S.Class<StartDiscoveryOutput>("StartDiscoveryOutput")({}) {}
export const ServiceLevelObjectiveIds = S.Array(S.String);
export const Auditors = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class BatchGetServiceLevelObjectiveBudgetReportInput extends S.Class<BatchGetServiceLevelObjectiveBudgetReportInput>("BatchGetServiceLevelObjectiveBudgetReportInput")({Timestamp: S.Date, SloIds: ServiceLevelObjectiveIds}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({Message: S.optional(S.String)}) {}
export const Attributes = S.Record({key: S.String, value: S.String});
export class ListEntityEventsInput extends S.Class<ListEntityEventsInput>("ListEntityEventsInput")({Entity: Attributes, StartTime: S.Date, EndTime: S.Date, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListGroupingAttributeDefinitionsInput extends S.Class<ListGroupingAttributeDefinitionsInput>("ListGroupingAttributeDefinitionsInput")({NextToken: S.optional(S.String), AwsAccountId: S.optional(S.String), IncludeLinkedAccounts: S.optional(S.Boolean)}) {}
export class ListServiceDependenciesInput extends S.Class<ListServiceDependenciesInput>("ListServiceDependenciesInput")({StartTime: S.Date, EndTime: S.Date, KeyAttributes: Attributes, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListServiceDependentsInput extends S.Class<ListServiceDependentsInput>("ListServiceDependentsInput")({StartTime: S.Date, EndTime: S.Date, KeyAttributes: Attributes, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListServiceLevelObjectiveExclusionWindowsInput extends S.Class<ListServiceLevelObjectiveExclusionWindowsInput>("ListServiceLevelObjectiveExclusionWindowsInput")({Id: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListServiceOperationsInput extends S.Class<ListServiceOperationsInput>("ListServiceOperationsInput")({StartTime: S.Date, EndTime: S.Date, KeyAttributes: Attributes, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListServicesInput extends S.Class<ListServicesInput>("ListServicesInput")({StartTime: S.Date, EndTime: S.Date, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), IncludeLinkedAccounts: S.optional(S.Boolean), AwsAccountId: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const AttributeFilterValues = S.Array(S.String);
export const GroupingSourceKeyStringList = S.Array(S.String);
export class AttributeFilter extends S.Class<AttributeFilter>("AttributeFilter")({AttributeFilterName: S.String, AttributeFilterValues: AttributeFilterValues}) {}
export const AttributeFilters = S.Array(AttributeFilter);
export class GroupingAttributeDefinition extends S.Class<GroupingAttributeDefinition>("GroupingAttributeDefinition")({GroupingName: S.String, GroupingSourceKeys: S.optional(GroupingSourceKeyStringList), DefaultGroupingValue: S.optional(S.String)}) {}
export const GroupingAttributeDefinitions = S.Array(GroupingAttributeDefinition);
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String)}) {}
export class GetServiceInput extends S.Class<GetServiceInput>("GetServiceInput")({StartTime: S.Date, EndTime: S.Date, KeyAttributes: Attributes}) {}
export class ListGroupingAttributeDefinitionsOutput extends S.Class<ListGroupingAttributeDefinitionsOutput>("ListGroupingAttributeDefinitionsOutput")({GroupingAttributeDefinitions: GroupingAttributeDefinitions, UpdatedAt: S.optional(S.Date), NextToken: S.optional(S.String)}) {}
export class Window extends S.Class<Window>("Window")({DurationUnit: S.String, Duration: S.Number}) {}
export class RecurrenceRule extends S.Class<RecurrenceRule>("RecurrenceRule")({Expression: S.String}) {}
export class ExclusionWindow extends S.Class<ExclusionWindow>("ExclusionWindow")({Window: Window, StartTime: S.optional(S.Date), RecurrenceRule: S.optional(RecurrenceRule), Reason: S.optional(S.String)}) {}
export const ExclusionWindows = S.Array(ExclusionWindow);
export class ListServiceLevelObjectiveExclusionWindowsOutput extends S.Class<ListServiceLevelObjectiveExclusionWindowsOutput>("ListServiceLevelObjectiveExclusionWindowsOutput")({ExclusionWindows: ExclusionWindows, NextToken: S.optional(S.String)}) {}
export class ListServiceStatesInput extends S.Class<ListServiceStatesInput>("ListServiceStatesInput")({StartTime: S.Date, EndTime: S.Date, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), IncludeLinkedAccounts: S.optional(S.Boolean), AwsAccountId: S.optional(S.String), AttributeFilters: S.optional(AttributeFilters)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class PutGroupingConfigurationInput extends S.Class<PutGroupingConfigurationInput>("PutGroupingConfigurationInput")({GroupingAttributeDefinitions: GroupingAttributeDefinitions}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({ResourceType: S.String, ResourceId: S.String, Message: S.String}) {}
export class ServiceLevelObjectiveBudgetReportError extends S.Class<ServiceLevelObjectiveBudgetReportError>("ServiceLevelObjectiveBudgetReportError")({Name: S.String, Arn: S.String, ErrorCode: S.String, ErrorMessage: S.String}) {}
export const ServiceLevelObjectiveBudgetReportErrors = S.Array(ServiceLevelObjectiveBudgetReportError);
export const LogGroupReferences = S.Array(Attributes);
export class ChangeEvent extends S.Class<ChangeEvent>("ChangeEvent")({Timestamp: S.Date, AccountId: S.String, Region: S.String, Entity: Attributes, ChangeEventType: S.String, EventId: S.String, UserName: S.optional(S.String), EventName: S.optional(S.String)}) {}
export const ChangeEvents = S.Array(ChangeEvent);
export class Dimension extends S.Class<Dimension>("Dimension")({Name: S.String, Value: S.String}) {}
export const Dimensions = S.Array(Dimension);
export class MetricReference extends S.Class<MetricReference>("MetricReference")({Namespace: S.String, MetricType: S.String, Dimensions: S.optional(Dimensions), MetricName: S.String, AccountId: S.optional(S.String)}) {}
export const MetricReferences = S.Array(MetricReference);
export class ServiceDependent extends S.Class<ServiceDependent>("ServiceDependent")({OperationName: S.optional(S.String), DependentKeyAttributes: Attributes, DependentOperationName: S.optional(S.String), MetricReferences: MetricReferences}) {}
export const ServiceDependents = S.Array(ServiceDependent);
export class ServiceOperation extends S.Class<ServiceOperation>("ServiceOperation")({Name: S.String, MetricReferences: MetricReferences}) {}
export const ServiceOperations = S.Array(ServiceOperation);
export class ServiceEntity extends S.Class<ServiceEntity>("ServiceEntity")({Type: S.optional(S.String), Name: S.optional(S.String), Environment: S.optional(S.String), AwsAccountId: S.optional(S.String)}) {}
export class ServiceLevelObjectiveEntity extends S.Class<ServiceLevelObjectiveEntity>("ServiceLevelObjectiveEntity")({SloName: S.optional(S.String), SloArn: S.optional(S.String)}) {}
export class ServiceOperationEntity extends S.Class<ServiceOperationEntity>("ServiceOperationEntity")({Service: S.optional(ServiceEntity), Operation: S.optional(S.String), MetricType: S.optional(S.String)}) {}
export class CanaryEntity extends S.Class<CanaryEntity>("CanaryEntity")({CanaryName: S.String}) {}
export class BatchUpdateExclusionWindowsInput extends S.Class<BatchUpdateExclusionWindowsInput>("BatchUpdateExclusionWindowsInput")({SloIds: ServiceLevelObjectiveIds, AddExclusionWindows: S.optional(ExclusionWindows), RemoveExclusionWindows: S.optional(ExclusionWindows)}) {}
export class ListEntityEventsOutput extends S.Class<ListEntityEventsOutput>("ListEntityEventsOutput")({StartTime: S.Date, EndTime: S.Date, ChangeEvents: ChangeEvents, NextToken: S.optional(S.String)}) {}
export class ListServiceDependentsOutput extends S.Class<ListServiceDependentsOutput>("ListServiceDependentsOutput")({StartTime: S.Date, EndTime: S.Date, ServiceDependents: ServiceDependents, NextToken: S.optional(S.String)}) {}
export class ListServiceOperationsOutput extends S.Class<ListServiceOperationsOutput>("ListServiceOperationsOutput")({StartTime: S.Date, EndTime: S.Date, ServiceOperations: ServiceOperations, NextToken: S.optional(S.String)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({Message: S.String}) {}
export const AuditTargetEntity = S.Union(ServiceEntity, ServiceLevelObjectiveEntity, ServiceOperationEntity, CanaryEntity);
export const AttributeMap = S.Record({key: S.String, value: S.String});
export const AttributeMaps = S.Array(AttributeMap);
export class ServiceGroup extends S.Class<ServiceGroup>("ServiceGroup")({GroupName: S.String, GroupValue: S.String, GroupSource: S.String, GroupIdentifier: S.String}) {}
export const ServiceGroups = S.Array(ServiceGroup);
export const LatestChangeEvents = S.Array(ChangeEvent);
export class Service extends S.Class<Service>("Service")({KeyAttributes: Attributes, AttributeMaps: S.optional(AttributeMaps), ServiceGroups: S.optional(ServiceGroups), MetricReferences: MetricReferences, LogGroupReferences: S.optional(LogGroupReferences)}) {}
export class AuditTarget extends S.Class<AuditTarget>("AuditTarget")({Type: S.String, Data: AuditTargetEntity}) {}
export const AuditTargets = S.Array(AuditTarget);
export class ServiceSummary extends S.Class<ServiceSummary>("ServiceSummary")({KeyAttributes: Attributes, AttributeMaps: S.optional(AttributeMaps), MetricReferences: MetricReferences, ServiceGroups: S.optional(ServiceGroups)}) {}
export const ServiceSummaries = S.Array(ServiceSummary);
export class ServiceState extends S.Class<ServiceState>("ServiceState")({AttributeFilters: S.optional(AttributeFilters), Service: Attributes, LatestChangeEvents: LatestChangeEvents}) {}
export const ServiceStates = S.Array(ServiceState);
export class GroupingConfiguration extends S.Class<GroupingConfiguration>("GroupingConfiguration")({GroupingAttributeDefinitions: GroupingAttributeDefinitions, UpdatedAt: S.Date}) {}
export class GetServiceOutput extends S.Class<GetServiceOutput>("GetServiceOutput")({Service: Service, StartTime: S.Date, EndTime: S.Date, LogGroupReferences: S.optional(LogGroupReferences)}) {}
export class ListAuditFindingsInput extends S.Class<ListAuditFindingsInput>("ListAuditFindingsInput")({StartTime: S.Date, EndTime: S.Date, Auditors: S.optional(Auditors), AuditTargets: AuditTargets, DetailLevel: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListServicesOutput extends S.Class<ListServicesOutput>("ListServicesOutput")({StartTime: S.Date, EndTime: S.Date, ServiceSummaries: ServiceSummaries, NextToken: S.optional(S.String)}) {}
export class ListServiceStatesOutput extends S.Class<ListServiceStatesOutput>("ListServiceStatesOutput")({StartTime: S.Date, EndTime: S.Date, ServiceStates: ServiceStates, NextToken: S.optional(S.String)}) {}
export class PutGroupingConfigurationOutput extends S.Class<PutGroupingConfigurationOutput>("PutGroupingConfigurationOutput")({GroupingConfiguration: GroupingConfiguration}) {}
export class DependencyConfig extends S.Class<DependencyConfig>("DependencyConfig")({DependencyKeyAttributes: Attributes, DependencyOperationName: S.String}) {}
export class Metric extends S.Class<Metric>("Metric")({Namespace: S.optional(S.String), MetricName: S.optional(S.String), Dimensions: S.optional(Dimensions)}) {}
export class MetricStat extends S.Class<MetricStat>("MetricStat")({Metric: Metric, Period: S.Number, Stat: S.String, Unit: S.optional(S.String)}) {}
export class MetricDataQuery extends S.Class<MetricDataQuery>("MetricDataQuery")({Id: S.String, MetricStat: S.optional(MetricStat), Expression: S.optional(S.String), Label: S.optional(S.String), ReturnData: S.optional(S.Boolean), Period: S.optional(S.Number), AccountId: S.optional(S.String)}) {}
export const MetricDataQueries = S.Array(MetricDataQuery);
export const MonitoredRequestCountMetricDataQueries = S.Union(MetricDataQueries, MetricDataQueries);
export class RollingInterval extends S.Class<RollingInterval>("RollingInterval")({DurationUnit: S.String, Duration: S.Number}) {}
export class CalendarInterval extends S.Class<CalendarInterval>("CalendarInterval")({StartTime: S.Date, DurationUnit: S.String, Duration: S.Number}) {}
export class BatchUpdateExclusionWindowsError extends S.Class<BatchUpdateExclusionWindowsError>("BatchUpdateExclusionWindowsError")({SloId: S.String, ErrorCode: S.String, ErrorMessage: S.String}) {}
export const BatchUpdateExclusionWindowsErrors = S.Array(BatchUpdateExclusionWindowsError);
export class ServiceDependency extends S.Class<ServiceDependency>("ServiceDependency")({OperationName: S.String, DependencyKeyAttributes: Attributes, DependencyOperationName: S.String, MetricReferences: MetricReferences}) {}
export const ServiceDependencies = S.Array(ServiceDependency);
export class RequestBasedServiceLevelIndicatorMetric extends S.Class<RequestBasedServiceLevelIndicatorMetric>("RequestBasedServiceLevelIndicatorMetric")({KeyAttributes: S.optional(Attributes), OperationName: S.optional(S.String), MetricType: S.optional(S.String), TotalRequestCountMetric: MetricDataQueries, MonitoredRequestCountMetric: MonitoredRequestCountMetricDataQueries, DependencyConfig: S.optional(DependencyConfig)}) {}
export const Interval = S.Union(RollingInterval, CalendarInterval);
export class BatchUpdateExclusionWindowsOutput extends S.Class<BatchUpdateExclusionWindowsOutput>("BatchUpdateExclusionWindowsOutput")({SloIds: ServiceLevelObjectiveIds, Errors: BatchUpdateExclusionWindowsErrors}) {}
export class ListServiceDependenciesOutput extends S.Class<ListServiceDependenciesOutput>("ListServiceDependenciesOutput")({StartTime: S.Date, EndTime: S.Date, ServiceDependencies: ServiceDependencies, NextToken: S.optional(S.String)}) {}
export class RequestBasedServiceLevelIndicator extends S.Class<RequestBasedServiceLevelIndicator>("RequestBasedServiceLevelIndicator")({RequestBasedSliMetric: RequestBasedServiceLevelIndicatorMetric, MetricThreshold: S.optional(S.Number), ComparisonOperator: S.optional(S.String)}) {}
export class Goal extends S.Class<Goal>("Goal")({Interval: S.optional(Interval), AttainmentGoal: S.optional(S.Number), WarningThreshold: S.optional(S.Number)}) {}
export class MetricGraph extends S.Class<MetricGraph>("MetricGraph")({MetricDataQueries: S.optional(MetricDataQueries), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date)}) {}
export class ServiceLevelIndicatorMetric extends S.Class<ServiceLevelIndicatorMetric>("ServiceLevelIndicatorMetric")({KeyAttributes: S.optional(Attributes), OperationName: S.optional(S.String), MetricType: S.optional(S.String), MetricDataQueries: MetricDataQueries, DependencyConfig: S.optional(DependencyConfig)}) {}
export const DataMap = S.Record({key: S.String, value: S.String});
export class Node extends S.Class<Node>("Node")({KeyAttributes: Attributes, Name: S.String, NodeId: S.String, Operation: S.optional(S.String), Type: S.optional(S.String), Duration: S.optional(S.Number), Status: S.optional(S.String)}) {}
export const Nodes = S.Array(Node);
export class Edge extends S.Class<Edge>("Edge")({SourceNodeId: S.optional(S.String), DestinationNodeId: S.optional(S.String), Duration: S.optional(S.Number), ConnectionType: S.optional(S.String)}) {}
export const Edges = S.Array(Edge);
export class ServiceLevelIndicator extends S.Class<ServiceLevelIndicator>("ServiceLevelIndicator")({SliMetric: ServiceLevelIndicatorMetric, MetricThreshold: S.Number, ComparisonOperator: S.String}) {}
export class AuditorResult extends S.Class<AuditorResult>("AuditorResult")({Auditor: S.optional(S.String), Description: S.optional(S.String), Data: S.optional(DataMap), Severity: S.optional(S.String)}) {}
export const AuditorResults = S.Array(AuditorResult);
export class DependencyGraph extends S.Class<DependencyGraph>("DependencyGraph")({Nodes: S.optional(Nodes), Edges: S.optional(Edges)}) {}
export class ServiceLevelObjectiveBudgetReport extends S.Class<ServiceLevelObjectiveBudgetReport>("ServiceLevelObjectiveBudgetReport")({Arn: S.String, Name: S.String, EvaluationType: S.optional(S.String), BudgetStatus: S.String, Attainment: S.optional(S.Number), TotalBudgetSeconds: S.optional(S.Number), BudgetSecondsRemaining: S.optional(S.Number), TotalBudgetRequests: S.optional(S.Number), BudgetRequestsRemaining: S.optional(S.Number), Sli: S.optional(ServiceLevelIndicator), RequestBasedSli: S.optional(RequestBasedServiceLevelIndicator), Goal: S.optional(Goal)}) {}
export const ServiceLevelObjectiveBudgetReports = S.Array(ServiceLevelObjectiveBudgetReport);
export class AuditFinding extends S.Class<AuditFinding>("AuditFinding")({KeyAttributes: Attributes, AuditorResults: S.optional(AuditorResults), Operation: S.optional(S.String), MetricGraph: S.optional(MetricGraph), DependencyGraph: S.optional(DependencyGraph), Type: S.optional(S.String)}) {}
export const AuditFindings = S.Array(AuditFinding);
export class BatchGetServiceLevelObjectiveBudgetReportOutput extends S.Class<BatchGetServiceLevelObjectiveBudgetReportOutput>("BatchGetServiceLevelObjectiveBudgetReportOutput")({Timestamp: S.Date, Reports: ServiceLevelObjectiveBudgetReports, Errors: ServiceLevelObjectiveBudgetReportErrors}) {}
export class ListAuditFindingsOutput extends S.Class<ListAuditFindingsOutput>("ListAuditFindingsOutput")({StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), AuditFindings: AuditFindings, NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const startDiscovery = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/start-discovery", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.StartDiscovery" }, StartDiscoveryInput, StartDiscoveryOutput, [AccessDeniedExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteGroupingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/grouping-configuration", method: "DELETE", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.DeleteGroupingConfiguration" }, S.Struct({}), DeleteGroupingConfigurationOutput, [AccessDeniedExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listGroupingAttributeDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/grouping-attribute-definitions", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListGroupingAttributeDefinitions" }, ListGroupingAttributeDefinitionsInput, ListGroupingAttributeDefinitionsOutput, [AccessDeniedExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listServiceLevelObjectiveExclusionWindows = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/slo/{Id}/exclusion-windows", method: "GET", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListServiceLevelObjectiveExclusionWindows" }, ListServiceLevelObjectiveExclusionWindowsInput, ListServiceLevelObjectiveExclusionWindowsOutput, [ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/tags", method: "GET", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/untag-resource", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEntityEvents = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/events", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListEntityEvents" }, ListEntityEventsInput, ListEntityEventsOutput, [ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listServiceDependents = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/service-dependents", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListServiceDependents" }, ListServiceDependentsInput, ListServiceDependentsOutput, [ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listServiceOperations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/service-operations", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListServiceOperations" }, ListServiceOperationsInput, ListServiceOperationsOutput, [ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/tag-resource", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getService = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/service", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.GetService" }, GetServiceInput, GetServiceOutput, [ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listServices = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/services", method: "GET", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListServices" }, ListServicesInput, ListServicesOutput, [ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listServiceStates = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/service/states", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListServiceStates" }, ListServiceStatesInput, ListServiceStatesOutput, [ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putGroupingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/grouping-configuration", method: "PUT", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.PutGroupingConfiguration" }, PutGroupingConfigurationInput, PutGroupingConfigurationOutput, [AccessDeniedExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchUpdateExclusionWindows = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/exclusion-windows", method: "PATCH", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.BatchUpdateExclusionWindows" }, BatchUpdateExclusionWindowsInput, BatchUpdateExclusionWindowsOutput, [ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listServiceDependencies = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/service-dependencies", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListServiceDependencies" }, ListServiceDependenciesInput, ListServiceDependenciesOutput, [ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetServiceLevelObjectiveBudgetReport = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/budget-report", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.BatchGetServiceLevelObjectiveBudgetReport" }, BatchGetServiceLevelObjectiveBudgetReportInput, BatchGetServiceLevelObjectiveBudgetReportOutput, [ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAuditFindings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-04-15", uri: "/auditFindings", method: "POST", sdkId: "Application Signals", sigV4ServiceName: "application-signals", name: "ApplicationSignals.ListAuditFindings" }, ListAuditFindingsInput, ListAuditFindingsOutput, [ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
