import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ApplicationInsights extends AWSServiceClient {
  addWorkload(
    input: AddWorkloadRequest,
  ): Effect.Effect<
    AddWorkloadResponse,
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | TagsAlreadyExistException
    | ValidationException
    | CommonAwsError
  >;
  createComponent(
    input: CreateComponentRequest,
  ): Effect.Effect<
    CreateComponentResponse,
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createLogPattern(
    input: CreateLogPatternRequest,
  ): Effect.Effect<
    CreateLogPatternResponse,
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteComponent(
    input: DeleteComponentRequest,
  ): Effect.Effect<
    DeleteComponentResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteLogPattern(
    input: DeleteLogPatternRequest,
  ): Effect.Effect<
    DeleteLogPatternResponse,
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeApplication(
    input: DescribeApplicationRequest,
  ): Effect.Effect<
    DescribeApplicationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeComponent(
    input: DescribeComponentRequest,
  ): Effect.Effect<
    DescribeComponentResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeComponentConfiguration(
    input: DescribeComponentConfigurationRequest,
  ): Effect.Effect<
    DescribeComponentConfigurationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeComponentConfigurationRecommendation(
    input: DescribeComponentConfigurationRecommendationRequest,
  ): Effect.Effect<
    DescribeComponentConfigurationRecommendationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeLogPattern(
    input: DescribeLogPatternRequest,
  ): Effect.Effect<
    DescribeLogPatternResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeObservation(
    input: DescribeObservationRequest,
  ): Effect.Effect<
    DescribeObservationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeProblem(
    input: DescribeProblemRequest,
  ): Effect.Effect<
    DescribeProblemResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeProblemObservations(
    input: DescribeProblemObservationsRequest,
  ): Effect.Effect<
    DescribeProblemObservationsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeWorkload(
    input: DescribeWorkloadRequest,
  ): Effect.Effect<
    DescribeWorkloadResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listComponents(
    input: ListComponentsRequest,
  ): Effect.Effect<
    ListComponentsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listConfigurationHistory(
    input: ListConfigurationHistoryRequest,
  ): Effect.Effect<
    ListConfigurationHistoryResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listLogPatterns(
    input: ListLogPatternsRequest,
  ): Effect.Effect<
    ListLogPatternsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listLogPatternSets(
    input: ListLogPatternSetsRequest,
  ): Effect.Effect<
    ListLogPatternSetsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listProblems(
    input: ListProblemsRequest,
  ): Effect.Effect<
    ListProblemsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listWorkloads(
    input: ListWorkloadsRequest,
  ): Effect.Effect<
    ListWorkloadsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  removeWorkload(
    input: RemoveWorkloadRequest,
  ): Effect.Effect<
    RemoveWorkloadResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateComponent(
    input: UpdateComponentRequest,
  ): Effect.Effect<
    UpdateComponentResponse,
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateComponentConfiguration(
    input: UpdateComponentConfigurationRequest,
  ): Effect.Effect<
    UpdateComponentConfigurationResponse,
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateLogPattern(
    input: UpdateLogPatternRequest,
  ): Effect.Effect<
    UpdateLogPatternResponse,
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateProblem(
    input: UpdateProblemRequest,
  ): Effect.Effect<
    UpdateProblemResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateWorkload(
    input: UpdateWorkloadRequest,
  ): Effect.Effect<
    UpdateWorkloadResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountId = string;

export interface AddWorkloadRequest {
  ResourceGroupName: string;
  ComponentName: string;
  WorkloadConfiguration: WorkloadConfiguration;
}
export interface AddWorkloadResponse {
  WorkloadId?: string;
  WorkloadConfiguration?: WorkloadConfiguration;
}
export type AffectedResource = string;

export type AmazonResourceName = string;

export interface ApplicationComponent {
  ComponentName?: string;
  ComponentRemarks?: string;
  ResourceType?: string;
  OsType?: OsType;
  Tier?: Tier;
  Monitor?: boolean;
  DetectedWorkload?: Record<Tier, Record<string, string>>;
}
export type ApplicationComponentList = Array<ApplicationComponent>;
export interface ApplicationInfo {
  AccountId?: string;
  ResourceGroupName?: string;
  LifeCycle?: string;
  OpsItemSNSTopicArn?: string;
  SNSNotificationArn?: string;
  OpsCenterEnabled?: boolean;
  CWEMonitorEnabled?: boolean;
  Remarks?: string;
  AutoConfigEnabled?: boolean;
  DiscoveryType?: DiscoveryType;
  AttachMissingPermission?: boolean;
}
export type ApplicationInfoList = Array<ApplicationInfo>;
export type AttachMissingPermission = boolean;

export type AutoConfigEnabled = boolean;

export type AutoCreate = boolean;

export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export type CloudWatchEventDetailType = string;

export type CloudWatchEventId = string;

export type CloudWatchEventSource = "EC2" | "CODE_DEPLOY" | "HEALTH" | "RDS";
export type CodeDeployApplication = string;

export type CodeDeployDeploymentGroup = string;

export type CodeDeployDeploymentId = string;

export type CodeDeployInstanceGroupId = string;

export type CodeDeployState = string;

export type ComponentConfiguration = string;

export type ComponentName = string;

export interface ConfigurationEvent {
  ResourceGroupName?: string;
  AccountId?: string;
  MonitoredResourceARN?: string;
  EventStatus?: ConfigurationEventStatus;
  EventResourceType?: ConfigurationEventResourceType;
  EventTime?: Date | string;
  EventDetail?: string;
  EventResourceName?: string;
}
export type ConfigurationEventDetail = string;

export type ConfigurationEventList = Array<ConfigurationEvent>;
export type ConfigurationEventMonitoredResourceARN = string;

export type ConfigurationEventResourceName = string;

export type ConfigurationEventResourceType =
  | "CLOUDWATCH_ALARM"
  | "CLOUDWATCH_LOG"
  | "CLOUDFORMATION"
  | "SSM_ASSOCIATION";
export type ConfigurationEventStatus = "INFO" | "WARN" | "ERROR";
export type ConfigurationEventTime = Date | string;

export interface CreateApplicationRequest {
  ResourceGroupName?: string;
  OpsCenterEnabled?: boolean;
  CWEMonitorEnabled?: boolean;
  OpsItemSNSTopicArn?: string;
  SNSNotificationArn?: string;
  Tags?: Array<Tag>;
  AutoConfigEnabled?: boolean;
  AutoCreate?: boolean;
  GroupingType?: GroupingType;
  AttachMissingPermission?: boolean;
}
export interface CreateApplicationResponse {
  ApplicationInfo?: ApplicationInfo;
}
export interface CreateComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
  ResourceList: Array<string>;
}
export interface CreateComponentResponse {}
export interface CreateLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
  Pattern: string;
  Rank: number;
}
export interface CreateLogPatternResponse {
  LogPattern?: LogPattern;
  ResourceGroupName?: string;
}
export type CustomComponentName = string;

export type CWEMonitorEnabled = boolean;

export interface DeleteApplicationRequest {
  ResourceGroupName: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
}
export interface DeleteComponentResponse {}
export interface DeleteLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
}
export interface DeleteLogPatternResponse {}
export interface DescribeApplicationRequest {
  ResourceGroupName: string;
  AccountId?: string;
}
export interface DescribeApplicationResponse {
  ApplicationInfo?: ApplicationInfo;
}
export interface DescribeComponentConfigurationRecommendationRequest {
  ResourceGroupName: string;
  ComponentName: string;
  Tier: Tier;
  WorkloadName?: string;
  RecommendationType?: RecommendationType;
}
export interface DescribeComponentConfigurationRecommendationResponse {
  ComponentConfiguration?: string;
}
export interface DescribeComponentConfigurationRequest {
  ResourceGroupName: string;
  ComponentName: string;
  AccountId?: string;
}
export interface DescribeComponentConfigurationResponse {
  Monitor?: boolean;
  Tier?: Tier;
  ComponentConfiguration?: string;
}
export interface DescribeComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
  AccountId?: string;
}
export interface DescribeComponentResponse {
  ApplicationComponent?: ApplicationComponent;
  ResourceList?: Array<string>;
}
export interface DescribeLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
  AccountId?: string;
}
export interface DescribeLogPatternResponse {
  ResourceGroupName?: string;
  AccountId?: string;
  LogPattern?: LogPattern;
}
export interface DescribeObservationRequest {
  ObservationId: string;
  AccountId?: string;
}
export interface DescribeObservationResponse {
  Observation?: Observation;
}
export interface DescribeProblemObservationsRequest {
  ProblemId: string;
  AccountId?: string;
}
export interface DescribeProblemObservationsResponse {
  RelatedObservations?: RelatedObservations;
}
export interface DescribeProblemRequest {
  ProblemId: string;
  AccountId?: string;
}
export interface DescribeProblemResponse {
  Problem?: Problem;
  SNSNotificationArn?: string;
}
export interface DescribeWorkloadRequest {
  ResourceGroupName: string;
  ComponentName: string;
  WorkloadId: string;
  AccountId?: string;
}
export interface DescribeWorkloadResponse {
  WorkloadId?: string;
  WorkloadRemarks?: string;
  WorkloadConfiguration?: WorkloadConfiguration;
}
export type DetectedWorkload = Record<Tier, Record<string, string>>;
export type DiscoveryType = "RESOURCE_GROUP_BASED" | "ACCOUNT_BASED";
export type EbsCause = string;

export type EbsEvent = string;

export type EbsRequestId = string;

export type EbsResult = string;

export type Ec2State = string;

export type EndTime = Date | string;

export type ErrorMsg = string;

export type ExceptionMessage = string;

export type Feedback = Record<FeedbackKey, FeedbackValue>;
export type FeedbackKey = "INSIGHTS_FEEDBACK";
export type FeedbackValue = "NOT_SPECIFIED" | "USEFUL" | "NOT_USEFUL";
export type GroupingType = "ACCOUNT_BASED";
export type HealthEventArn = string;

export type HealthEventDescription = string;

export type HealthEventTypeCategory = string;

export type HealthEventTypeCode = string;

export type HealthService = string;

export type Insights = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type LastRecurrenceTime = Date | string;

export type LifeCycle = string;

export type LineTime = Date | string;

export interface ListApplicationsRequest {
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export interface ListApplicationsResponse {
  ApplicationInfoList?: Array<ApplicationInfo>;
  NextToken?: string;
}
export interface ListComponentsRequest {
  ResourceGroupName: string;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export interface ListComponentsResponse {
  ApplicationComponentList?: Array<ApplicationComponent>;
  NextToken?: string;
}
export interface ListConfigurationHistoryRequest {
  ResourceGroupName?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  EventStatus?: ConfigurationEventStatus;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export interface ListConfigurationHistoryResponse {
  EventList?: Array<ConfigurationEvent>;
  NextToken?: string;
}
export interface ListLogPatternSetsRequest {
  ResourceGroupName: string;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export interface ListLogPatternSetsResponse {
  ResourceGroupName?: string;
  AccountId?: string;
  LogPatternSets?: Array<string>;
  NextToken?: string;
}
export interface ListLogPatternsRequest {
  ResourceGroupName: string;
  PatternSetName?: string;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export interface ListLogPatternsResponse {
  ResourceGroupName?: string;
  AccountId?: string;
  LogPatterns?: Array<LogPattern>;
  NextToken?: string;
}
export interface ListProblemsRequest {
  AccountId?: string;
  ResourceGroupName?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  MaxResults?: number;
  NextToken?: string;
  ComponentName?: string;
  Visibility?: Visibility;
}
export interface ListProblemsResponse {
  ProblemList?: Array<Problem>;
  NextToken?: string;
  ResourceGroupName?: string;
  AccountId?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListWorkloadsRequest {
  ResourceGroupName: string;
  ComponentName: string;
  MaxResults?: number;
  NextToken?: string;
  AccountId?: string;
}
export interface ListWorkloadsResponse {
  WorkloadList?: Array<Workload>;
  NextToken?: string;
}
export type LogFilter = "ERROR" | "WARN" | "INFO";
export type LogGroup = string;

export interface LogPattern {
  PatternSetName?: string;
  PatternName?: string;
  Pattern?: string;
  Rank?: number;
}
export type LogPatternList = Array<LogPattern>;
export type LogPatternName = string;

export type LogPatternRank = number;

export type LogPatternRegex = string;

export type LogPatternSetList = Array<string>;
export type LogPatternSetName = string;

export type LogText = string;

export type MaxEntities = number;

export type MetaDataKey = string;

export type MetaDataValue = string;

export type MetricName = string;

export type MetricNamespace = string;

export type MissingWorkloadConfig = boolean;

export type Monitor = boolean;

export interface Observation {
  Id?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  SourceType?: string;
  SourceARN?: string;
  LogGroup?: string;
  LineTime?: Date | string;
  LogText?: string;
  LogFilter?: LogFilter;
  MetricNamespace?: string;
  MetricName?: string;
  Unit?: string;
  Value?: number;
  CloudWatchEventId?: string;
  CloudWatchEventSource?: CloudWatchEventSource;
  CloudWatchEventDetailType?: string;
  HealthEventArn?: string;
  HealthService?: string;
  HealthEventTypeCode?: string;
  HealthEventTypeCategory?: string;
  HealthEventDescription?: string;
  CodeDeployDeploymentId?: string;
  CodeDeployDeploymentGroup?: string;
  CodeDeployState?: string;
  CodeDeployApplication?: string;
  CodeDeployInstanceGroupId?: string;
  Ec2State?: string;
  RdsEventCategories?: string;
  RdsEventMessage?: string;
  S3EventName?: string;
  StatesExecutionArn?: string;
  StatesArn?: string;
  StatesStatus?: string;
  StatesInput?: string;
  EbsEvent?: string;
  EbsResult?: string;
  EbsCause?: string;
  EbsRequestId?: string;
  XRayFaultPercent?: number;
  XRayThrottlePercent?: number;
  XRayErrorPercent?: number;
  XRayRequestCount?: number;
  XRayRequestAverageLatency?: number;
  XRayNodeName?: string;
  XRayNodeType?: string;
}
export type ObservationId = string;

export type ObservationList = Array<Observation>;
export type OpsCenterEnabled = boolean;

export type OpsItemSNSTopicArn = string;

export type OsType = "WINDOWS" | "LINUX";
export type PaginationToken = string;

export interface Problem {
  Id?: string;
  Title?: string;
  ShortName?: string;
  Insights?: string;
  Status?: Status;
  AffectedResource?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  SeverityLevel?: SeverityLevel;
  AccountId?: string;
  ResourceGroupName?: string;
  Feedback?: Record<FeedbackKey, FeedbackValue>;
  RecurringCount?: number;
  LastRecurrenceTime?: Date | string;
  Visibility?: Visibility;
  ResolutionMethod?: ResolutionMethod;
}
export type ProblemId = string;

export type ProblemList = Array<Problem>;
export type RdsEventCategories = string;

export type RdsEventMessage = string;

export type RecommendationType = "INFRA_ONLY" | "WORKLOAD_ONLY" | "ALL";
export type RecurringCount = number;

export interface RelatedObservations {
  ObservationList?: Array<Observation>;
}
export type Remarks = string;

export type RemoveSNSTopic = boolean;

export interface RemoveWorkloadRequest {
  ResourceGroupName: string;
  ComponentName: string;
  WorkloadId: string;
}
export interface RemoveWorkloadResponse {}
export type ResolutionMethod = "MANUAL" | "AUTOMATIC" | "UNRESOLVED";
export type ResourceARN = string;

export type ResourceGroupName = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export type ResourceList = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceType = string;

export type S3EventName = string;

export type SeverityLevel = "Informative" | "Low" | "Medium" | "High";
export type ShortName = string;

export type SNSNotificationArn = string;

export type SourceARN = string;

export type SourceType = string;

export type StartTime = Date | string;

export type StatesArn = string;

export type StatesExecutionArn = string;

export type StatesInput = string;

export type StatesStatus = string;

export type Status =
  | "IGNORE"
  | "RESOLVED"
  | "PENDING"
  | "RECURRING"
  | "RECOVERING";
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
export declare class TagsAlreadyExistException extends EffectData.TaggedError(
  "TagsAlreadyExistException",
)<{
  readonly Message?: string;
}> {}
export type TagValue = string;

export type Tier =
  | "CUSTOM"
  | "DEFAULT"
  | "DOT_NET_CORE"
  | "DOT_NET_WORKER"
  | "DOT_NET_WEB_TIER"
  | "DOT_NET_WEB"
  | "SQL_SERVER"
  | "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP"
  | "MYSQL"
  | "POSTGRESQL"
  | "JAVA_JMX"
  | "ORACLE"
  | "SAP_HANA_MULTI_NODE"
  | "SAP_HANA_SINGLE_NODE"
  | "SAP_HANA_HIGH_AVAILABILITY"
  | "SAP_ASE_SINGLE_NODE"
  | "SAP_ASE_HIGH_AVAILABILITY"
  | "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE"
  | "SHAREPOINT"
  | "ACTIVE_DIRECTORY"
  | "SAP_NETWEAVER_STANDARD"
  | "SAP_NETWEAVER_DISTRIBUTED"
  | "SAP_NETWEAVER_HIGH_AVAILABILITY";
export type Title = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export type Unit = string;

export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationRequest {
  ResourceGroupName: string;
  OpsCenterEnabled?: boolean;
  CWEMonitorEnabled?: boolean;
  OpsItemSNSTopicArn?: string;
  SNSNotificationArn?: string;
  RemoveSNSTopic?: boolean;
  AutoConfigEnabled?: boolean;
  AttachMissingPermission?: boolean;
}
export interface UpdateApplicationResponse {
  ApplicationInfo?: ApplicationInfo;
}
export interface UpdateComponentConfigurationRequest {
  ResourceGroupName: string;
  ComponentName: string;
  Monitor?: boolean;
  Tier?: Tier;
  ComponentConfiguration?: string;
  AutoConfigEnabled?: boolean;
}
export interface UpdateComponentConfigurationResponse {}
export interface UpdateComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
  NewComponentName?: string;
  ResourceList?: Array<string>;
}
export interface UpdateComponentResponse {}
export interface UpdateLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
  Pattern?: string;
  Rank?: number;
}
export interface UpdateLogPatternResponse {
  ResourceGroupName?: string;
  LogPattern?: LogPattern;
}
export interface UpdateProblemRequest {
  ProblemId: string;
  UpdateStatus?: UpdateStatus;
  Visibility?: Visibility;
}
export interface UpdateProblemResponse {}
export type UpdateStatus = "RESOLVED";
export interface UpdateWorkloadRequest {
  ResourceGroupName: string;
  ComponentName: string;
  WorkloadId?: string;
  WorkloadConfiguration: WorkloadConfiguration;
}
export interface UpdateWorkloadResponse {
  WorkloadId?: string;
  WorkloadConfiguration?: WorkloadConfiguration;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type Value = number;

export type Visibility = "IGNORED" | "VISIBLE";
export interface Workload {
  WorkloadId?: string;
  ComponentName?: string;
  WorkloadName?: string;
  Tier?: Tier;
  WorkloadRemarks?: string;
  MissingWorkloadConfig?: boolean;
}
export interface WorkloadConfiguration {
  WorkloadName?: string;
  Tier?: Tier;
  Configuration?: string;
}
export type WorkloadId = string;

export type WorkloadList = Array<Workload>;
export type WorkloadMetaData = Record<string, string>;
export type WorkloadName = string;

export type XRayErrorPercent = number;

export type XRayFaultPercent = number;

export type XRayNodeName = string;

export type XRayNodeType = string;

export type XRayRequestAverageLatency = number;

export type XRayRequestCount = number;

export type XRayThrottlePercent = number;

export declare namespace AddWorkload {
  export type Input = AddWorkloadRequest;
  export type Output = AddWorkloadResponse;
  export type Error =
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | TagsAlreadyExistException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateComponent {
  export type Input = CreateComponentRequest;
  export type Output = CreateComponentResponse;
  export type Error =
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLogPattern {
  export type Input = CreateLogPatternRequest;
  export type Output = CreateLogPatternResponse;
  export type Error =
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteComponent {
  export type Input = DeleteComponentRequest;
  export type Output = DeleteComponentResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLogPattern {
  export type Input = DeleteLogPatternRequest;
  export type Output = DeleteLogPatternResponse;
  export type Error =
    | BadRequestException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeApplication {
  export type Input = DescribeApplicationRequest;
  export type Output = DescribeApplicationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeComponent {
  export type Input = DescribeComponentRequest;
  export type Output = DescribeComponentResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeComponentConfiguration {
  export type Input = DescribeComponentConfigurationRequest;
  export type Output = DescribeComponentConfigurationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeComponentConfigurationRecommendation {
  export type Input = DescribeComponentConfigurationRecommendationRequest;
  export type Output = DescribeComponentConfigurationRecommendationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeLogPattern {
  export type Input = DescribeLogPatternRequest;
  export type Output = DescribeLogPatternResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeObservation {
  export type Input = DescribeObservationRequest;
  export type Output = DescribeObservationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeProblem {
  export type Input = DescribeProblemRequest;
  export type Output = DescribeProblemResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeProblemObservations {
  export type Input = DescribeProblemObservationsRequest;
  export type Output = DescribeProblemObservationsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeWorkload {
  export type Input = DescribeWorkloadRequest;
  export type Output = DescribeWorkloadResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListComponents {
  export type Input = ListComponentsRequest;
  export type Output = ListComponentsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConfigurationHistory {
  export type Input = ListConfigurationHistoryRequest;
  export type Output = ListConfigurationHistoryResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLogPatterns {
  export type Input = ListLogPatternsRequest;
  export type Output = ListLogPatternsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLogPatternSets {
  export type Input = ListLogPatternSetsRequest;
  export type Output = ListLogPatternSetsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProblems {
  export type Input = ListProblemsRequest;
  export type Output = ListProblemsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkloads {
  export type Input = ListWorkloadsRequest;
  export type Output = ListWorkloadsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveWorkload {
  export type Input = RemoveWorkloadRequest;
  export type Output = RemoveWorkloadResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateComponent {
  export type Input = UpdateComponentRequest;
  export type Output = UpdateComponentResponse;
  export type Error =
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateComponentConfiguration {
  export type Input = UpdateComponentConfigurationRequest;
  export type Output = UpdateComponentConfigurationResponse;
  export type Error =
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLogPattern {
  export type Input = UpdateLogPatternRequest;
  export type Output = UpdateLogPatternResponse;
  export type Error =
    | InternalServerException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProblem {
  export type Input = UpdateProblemRequest;
  export type Output = UpdateProblemResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkload {
  export type Input = UpdateWorkloadRequest;
  export type Output = UpdateWorkloadResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
