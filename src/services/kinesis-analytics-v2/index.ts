import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class KinesisAnalyticsV2 extends AWSServiceClient {
  addApplicationCloudWatchLoggingOption(
    input: AddApplicationCloudWatchLoggingOptionRequest,
  ): Effect.Effect<
    AddApplicationCloudWatchLoggingOptionResponse,
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  addApplicationInput(
    input: AddApplicationInputRequest,
  ): Effect.Effect<
    AddApplicationInputResponse,
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  addApplicationInputProcessingConfiguration(
    input: AddApplicationInputProcessingConfigurationRequest,
  ): Effect.Effect<
    AddApplicationInputProcessingConfigurationResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  addApplicationOutput(
    input: AddApplicationOutputRequest,
  ): Effect.Effect<
    AddApplicationOutputResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  addApplicationReferenceDataSource(
    input: AddApplicationReferenceDataSourceRequest,
  ): Effect.Effect<
    AddApplicationReferenceDataSourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  addApplicationVpcConfiguration(
    input: AddApplicationVpcConfigurationRequest,
  ): Effect.Effect<
    AddApplicationVpcConfigurationResponse,
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | LimitExceededException
    | ResourceInUseException
    | TooManyTagsException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  createApplicationPresignedUrl(
    input: CreateApplicationPresignedUrlRequest,
  ): Effect.Effect<
    CreateApplicationPresignedUrlResponse,
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createApplicationSnapshot(
    input: CreateApplicationSnapshotRequest,
  ): Effect.Effect<
    CreateApplicationSnapshotResponse,
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteApplicationCloudWatchLoggingOption(
    input: DeleteApplicationCloudWatchLoggingOptionRequest,
  ): Effect.Effect<
    DeleteApplicationCloudWatchLoggingOptionResponse,
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteApplicationInputProcessingConfiguration(
    input: DeleteApplicationInputProcessingConfigurationRequest,
  ): Effect.Effect<
    DeleteApplicationInputProcessingConfigurationResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteApplicationOutput(
    input: DeleteApplicationOutputRequest,
  ): Effect.Effect<
    DeleteApplicationOutputResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteApplicationReferenceDataSource(
    input: DeleteApplicationReferenceDataSourceRequest,
  ): Effect.Effect<
    DeleteApplicationReferenceDataSourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteApplicationSnapshot(
    input: DeleteApplicationSnapshotRequest,
  ): Effect.Effect<
    DeleteApplicationSnapshotResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  deleteApplicationVpcConfiguration(
    input: DeleteApplicationVpcConfigurationRequest,
  ): Effect.Effect<
    DeleteApplicationVpcConfigurationResponse,
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeApplication(
    input: DescribeApplicationRequest,
  ): Effect.Effect<
    DescribeApplicationResponse,
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeApplicationOperation(
    input: DescribeApplicationOperationRequest,
  ): Effect.Effect<
    DescribeApplicationOperationResponse,
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  describeApplicationSnapshot(
    input: DescribeApplicationSnapshotRequest,
  ): Effect.Effect<
    DescribeApplicationSnapshotResponse,
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  describeApplicationVersion(
    input: DescribeApplicationVersionRequest,
  ): Effect.Effect<
    DescribeApplicationVersionResponse,
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  discoverInputSchema(
    input: DiscoverInputSchemaRequest,
  ): Effect.Effect<
    DiscoverInputSchemaResponse,
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceProvisionedThroughputExceededException
    | ServiceUnavailableException
    | UnableToDetectSchemaException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listApplicationOperations(
    input: ListApplicationOperationsRequest,
  ): Effect.Effect<
    ListApplicationOperationsResponse,
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    InvalidRequestException | CommonAwsError
  >;
  listApplicationSnapshots(
    input: ListApplicationSnapshotsRequest,
  ): Effect.Effect<
    ListApplicationSnapshotsResponse,
    InvalidArgumentException | UnsupportedOperationException | CommonAwsError
  >;
  listApplicationVersions(
    input: ListApplicationVersionsRequest,
  ): Effect.Effect<
    ListApplicationVersionsResponse,
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  rollbackApplication(
    input: RollbackApplicationRequest,
  ): Effect.Effect<
    RollbackApplicationResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  startApplication(
    input: StartApplicationRequest,
  ): Effect.Effect<
    StartApplicationResponse,
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopApplication(
    input: StopApplicationRequest,
  ): Effect.Effect<
    StopApplicationResponse,
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateApplicationMaintenanceConfiguration(
    input: UpdateApplicationMaintenanceConfigurationRequest,
  ): Effect.Effect<
    UpdateApplicationMaintenanceConfigurationResponse,
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
}

export interface AddApplicationCloudWatchLoggingOptionRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  CloudWatchLoggingOption: CloudWatchLoggingOption;
  ConditionalToken?: string;
}
export interface AddApplicationCloudWatchLoggingOptionResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
  OperationId?: string;
}
export interface AddApplicationInputProcessingConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  InputId: string;
  InputProcessingConfiguration: InputProcessingConfiguration;
}
export interface AddApplicationInputProcessingConfigurationResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  InputId?: string;
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}
export interface AddApplicationInputRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  Input: Input;
}
export interface AddApplicationInputResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  InputDescriptions?: Array<InputDescription>;
}
export interface AddApplicationOutputRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  Output: Output;
}
export interface AddApplicationOutputResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  OutputDescriptions?: Array<OutputDescription>;
}
export interface AddApplicationReferenceDataSourceRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  ReferenceDataSource: ReferenceDataSource;
}
export interface AddApplicationReferenceDataSourceResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
}
export interface AddApplicationVpcConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  VpcConfiguration: VpcConfiguration;
  ConditionalToken?: string;
}
export interface AddApplicationVpcConfigurationResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  VpcConfigurationDescription?: VpcConfigurationDescription;
  OperationId?: string;
}
export interface ApplicationCodeConfiguration {
  CodeContent?: CodeContent;
  CodeContentType: CodeContentType;
}
export interface ApplicationCodeConfigurationDescription {
  CodeContentType: CodeContentType;
  CodeContentDescription?: CodeContentDescription;
}
export interface ApplicationCodeConfigurationUpdate {
  CodeContentTypeUpdate?: CodeContentType;
  CodeContentUpdate?: CodeContentUpdate;
}
export interface ApplicationConfiguration {
  SqlApplicationConfiguration?: SqlApplicationConfiguration;
  FlinkApplicationConfiguration?: FlinkApplicationConfiguration;
  EnvironmentProperties?: EnvironmentProperties;
  ApplicationCodeConfiguration?: ApplicationCodeConfiguration;
  ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;
  ApplicationSystemRollbackConfiguration?: ApplicationSystemRollbackConfiguration;
  VpcConfigurations?: Array<VpcConfiguration>;
  ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
}
export interface ApplicationConfigurationDescription {
  SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;
  ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;
  RunConfigurationDescription?: RunConfigurationDescription;
  FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;
  EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions;
  ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;
  ApplicationSystemRollbackConfigurationDescription?: ApplicationSystemRollbackConfigurationDescription;
  VpcConfigurationDescriptions?: Array<VpcConfigurationDescription>;
  ZeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription;
}
export interface ApplicationConfigurationUpdate {
  SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;
  ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;
  FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;
  EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates;
  ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;
  ApplicationSystemRollbackConfigurationUpdate?: ApplicationSystemRollbackConfigurationUpdate;
  VpcConfigurationUpdates?: Array<VpcConfigurationUpdate>;
  ZeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate;
}
export type ApplicationDescription = string;

export interface ApplicationDetail {
  ApplicationARN: string;
  ApplicationDescription?: string;
  ApplicationName: string;
  RuntimeEnvironment: RuntimeEnvironment;
  ServiceExecutionRole?: string;
  ApplicationStatus: ApplicationStatus;
  ApplicationVersionId: number;
  CreateTimestamp?: Date | string;
  LastUpdateTimestamp?: Date | string;
  ApplicationConfigurationDescription?: ApplicationConfigurationDescription;
  CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
  ApplicationVersionUpdatedFrom?: number;
  ApplicationVersionRolledBackFrom?: number;
  ApplicationVersionCreateTimestamp?: Date | string;
  ConditionalToken?: string;
  ApplicationVersionRolledBackTo?: number;
  ApplicationMode?: ApplicationMode;
}
export interface ApplicationMaintenanceConfigurationDescription {
  ApplicationMaintenanceWindowStartTime: string;
  ApplicationMaintenanceWindowEndTime: string;
}
export interface ApplicationMaintenanceConfigurationUpdate {
  ApplicationMaintenanceWindowStartTimeUpdate: string;
}
export type ApplicationMaintenanceWindowEndTime = string;

export type ApplicationMaintenanceWindowStartTime = string;

export type ApplicationMode = "STREAMING" | "INTERACTIVE";
export type ApplicationName = string;

export interface ApplicationOperationInfo {
  Operation?: string;
  OperationId?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  OperationStatus?: OperationStatus;
}
export interface ApplicationOperationInfoDetails {
  Operation: string;
  StartTime: Date | string;
  EndTime: Date | string;
  OperationStatus: OperationStatus;
  ApplicationVersionChangeDetails?: ApplicationVersionChangeDetails;
  OperationFailureDetails?: OperationFailureDetails;
}
export type ApplicationOperationInfoList = Array<ApplicationOperationInfo>;
export interface ApplicationRestoreConfiguration {
  ApplicationRestoreType: ApplicationRestoreType;
  SnapshotName?: string;
}
export type ApplicationRestoreType =
  | "SKIP_RESTORE_FROM_SNAPSHOT"
  | "RESTORE_FROM_LATEST_SNAPSHOT"
  | "RESTORE_FROM_CUSTOM_SNAPSHOT";
export interface ApplicationSnapshotConfiguration {
  SnapshotsEnabled: boolean;
}
export interface ApplicationSnapshotConfigurationDescription {
  SnapshotsEnabled: boolean;
}
export interface ApplicationSnapshotConfigurationUpdate {
  SnapshotsEnabledUpdate: boolean;
}
export type ApplicationStatus =
  | "DELETING"
  | "STARTING"
  | "STOPPING"
  | "READY"
  | "RUNNING"
  | "UPDATING"
  | "AUTOSCALING"
  | "FORCE_STOPPING"
  | "ROLLING_BACK"
  | "MAINTENANCE"
  | "ROLLED_BACK";
export type ApplicationSummaries = Array<ApplicationSummary>;
export interface ApplicationSummary {
  ApplicationName: string;
  ApplicationARN: string;
  ApplicationStatus: ApplicationStatus;
  ApplicationVersionId: number;
  RuntimeEnvironment: RuntimeEnvironment;
  ApplicationMode?: ApplicationMode;
}
export interface ApplicationSystemRollbackConfiguration {
  RollbackEnabled: boolean;
}
export interface ApplicationSystemRollbackConfigurationDescription {
  RollbackEnabled: boolean;
}
export interface ApplicationSystemRollbackConfigurationUpdate {
  RollbackEnabledUpdate: boolean;
}
export interface ApplicationVersionChangeDetails {
  ApplicationVersionUpdatedFrom: number;
  ApplicationVersionUpdatedTo: number;
}
export type ApplicationVersionId = number;

export type ApplicationVersionSummaries = Array<ApplicationVersionSummary>;
export interface ApplicationVersionSummary {
  ApplicationVersionId: number;
  ApplicationStatus: ApplicationStatus;
}
export type ArtifactType = "UDF" | "DEPENDENCY_JAR";
export type AuthorizedUrl = string;

export type BasePath = string;

export type BooleanObject = boolean;

export type BucketARN = string;

export interface CatalogConfiguration {
  GlueDataCatalogConfiguration: GlueDataCatalogConfiguration;
}
export interface CatalogConfigurationDescription {
  GlueDataCatalogConfigurationDescription: GlueDataCatalogConfigurationDescription;
}
export interface CatalogConfigurationUpdate {
  GlueDataCatalogConfigurationUpdate: GlueDataCatalogConfigurationUpdate;
}
export interface CheckpointConfiguration {
  ConfigurationType: ConfigurationType;
  CheckpointingEnabled?: boolean;
  CheckpointInterval?: number;
  MinPauseBetweenCheckpoints?: number;
}
export interface CheckpointConfigurationDescription {
  ConfigurationType?: ConfigurationType;
  CheckpointingEnabled?: boolean;
  CheckpointInterval?: number;
  MinPauseBetweenCheckpoints?: number;
}
export interface CheckpointConfigurationUpdate {
  ConfigurationTypeUpdate?: ConfigurationType;
  CheckpointingEnabledUpdate?: boolean;
  CheckpointIntervalUpdate?: number;
  MinPauseBetweenCheckpointsUpdate?: number;
}
export type CheckpointInterval = number;

export interface CloudWatchLoggingOption {
  LogStreamARN: string;
}
export interface CloudWatchLoggingOptionDescription {
  CloudWatchLoggingOptionId?: string;
  LogStreamARN: string;
  RoleARN?: string;
}
export type CloudWatchLoggingOptionDescriptions =
  Array<CloudWatchLoggingOptionDescription>;
export type CloudWatchLoggingOptions = Array<CloudWatchLoggingOption>;
export interface CloudWatchLoggingOptionUpdate {
  CloudWatchLoggingOptionId: string;
  LogStreamARNUpdate?: string;
}
export type CloudWatchLoggingOptionUpdates =
  Array<CloudWatchLoggingOptionUpdate>;
export interface CodeContent {
  TextContent?: string;
  ZipFileContent?: Uint8Array | string;
  S3ContentLocation?: S3ContentLocation;
}
export interface CodeContentDescription {
  TextContent?: string;
  CodeMD5?: string;
  CodeSize?: number;
  S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;
}
export type CodeContentType = "PLAINTEXT" | "ZIPFILE";
export interface CodeContentUpdate {
  TextContentUpdate?: string;
  ZipFileContentUpdate?: Uint8Array | string;
  S3ContentLocationUpdate?: S3ContentLocationUpdate;
}
export type CodeMD5 = string;

export type CodeSize = number;

export declare class CodeValidationException extends EffectData.TaggedError(
  "CodeValidationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export type ConditionalToken = string;

export type ConfigurationType = "DEFAULT" | "CUSTOM";
export interface CreateApplicationPresignedUrlRequest {
  ApplicationName: string;
  UrlType: UrlType;
  SessionExpirationDurationInSeconds?: number;
}
export interface CreateApplicationPresignedUrlResponse {
  AuthorizedUrl?: string;
}
export interface CreateApplicationRequest {
  ApplicationName: string;
  ApplicationDescription?: string;
  RuntimeEnvironment: RuntimeEnvironment;
  ServiceExecutionRole: string;
  ApplicationConfiguration?: ApplicationConfiguration;
  CloudWatchLoggingOptions?: Array<CloudWatchLoggingOption>;
  Tags?: Array<Tag>;
  ApplicationMode?: ApplicationMode;
}
export interface CreateApplicationResponse {
  ApplicationDetail: ApplicationDetail;
}
export interface CreateApplicationSnapshotRequest {
  ApplicationName: string;
  SnapshotName: string;
}
export interface CreateApplicationSnapshotResponse {}
export interface CSVMappingParameters {
  RecordRowDelimiter: string;
  RecordColumnDelimiter: string;
}
export interface CustomArtifactConfiguration {
  ArtifactType: ArtifactType;
  S3ContentLocation?: S3ContentLocation;
  MavenReference?: MavenReference;
}
export interface CustomArtifactConfigurationDescription {
  ArtifactType?: ArtifactType;
  S3ContentLocationDescription?: S3ContentLocation;
  MavenReferenceDescription?: MavenReference;
}
export type CustomArtifactsConfigurationDescriptionList =
  Array<CustomArtifactConfigurationDescription>;
export type CustomArtifactsConfigurationList =
  Array<CustomArtifactConfiguration>;
export type DatabaseARN = string;

export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  CloudWatchLoggingOptionId: string;
  ConditionalToken?: string;
}
export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
  OperationId?: string;
}
export interface DeleteApplicationInputProcessingConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  InputId: string;
}
export interface DeleteApplicationInputProcessingConfigurationResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
}
export interface DeleteApplicationOutputRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  OutputId: string;
}
export interface DeleteApplicationOutputResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
}
export interface DeleteApplicationReferenceDataSourceRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
  ReferenceId: string;
}
export interface DeleteApplicationReferenceDataSourceResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
}
export interface DeleteApplicationRequest {
  ApplicationName: string;
  CreateTimestamp: Date | string;
}
export interface DeleteApplicationResponse {}
export interface DeleteApplicationSnapshotRequest {
  ApplicationName: string;
  SnapshotName: string;
  SnapshotCreationTimestamp: Date | string;
}
export interface DeleteApplicationSnapshotResponse {}
export interface DeleteApplicationVpcConfigurationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  VpcConfigurationId: string;
  ConditionalToken?: string;
}
export interface DeleteApplicationVpcConfigurationResponse {
  ApplicationARN?: string;
  ApplicationVersionId?: number;
  OperationId?: string;
}
export interface DeployAsApplicationConfiguration {
  S3ContentLocation: S3ContentBaseLocation;
}
export interface DeployAsApplicationConfigurationDescription {
  S3ContentLocationDescription: S3ContentBaseLocationDescription;
}
export interface DeployAsApplicationConfigurationUpdate {
  S3ContentLocationUpdate?: S3ContentBaseLocationUpdate;
}
export interface DescribeApplicationOperationRequest {
  ApplicationName: string;
  OperationId: string;
}
export interface DescribeApplicationOperationResponse {
  ApplicationOperationInfoDetails?: ApplicationOperationInfoDetails;
}
export interface DescribeApplicationRequest {
  ApplicationName: string;
  IncludeAdditionalDetails?: boolean;
}
export interface DescribeApplicationResponse {
  ApplicationDetail: ApplicationDetail;
}
export interface DescribeApplicationSnapshotRequest {
  ApplicationName: string;
  SnapshotName: string;
}
export interface DescribeApplicationSnapshotResponse {
  SnapshotDetails: SnapshotDetails;
}
export interface DescribeApplicationVersionRequest {
  ApplicationName: string;
  ApplicationVersionId: number;
}
export interface DescribeApplicationVersionResponse {
  ApplicationVersionDetail?: ApplicationDetail;
}
export interface DestinationSchema {
  RecordFormatType: RecordFormatType;
}
export interface DiscoverInputSchemaRequest {
  ResourceARN?: string;
  ServiceExecutionRole: string;
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
  S3Configuration?: S3Configuration;
  InputProcessingConfiguration?: InputProcessingConfiguration;
}
export interface DiscoverInputSchemaResponse {
  InputSchema?: SourceSchema;
  ParsedInputRecords?: Array<Array<string>>;
  ProcessedInputRecords?: Array<string>;
  RawInputRecords?: Array<string>;
}
export interface EnvironmentProperties {
  PropertyGroups: Array<PropertyGroup>;
}
export interface EnvironmentPropertyDescriptions {
  PropertyGroupDescriptions?: Array<PropertyGroup>;
}
export interface EnvironmentPropertyUpdates {
  PropertyGroups: Array<PropertyGroup>;
}
export interface ErrorInfo {
  ErrorString?: string;
}
export type ErrorMessage = string;

export type ErrorString = string;

export type FileKey = string;

export interface FlinkApplicationConfiguration {
  CheckpointConfiguration?: CheckpointConfiguration;
  MonitoringConfiguration?: MonitoringConfiguration;
  ParallelismConfiguration?: ParallelismConfiguration;
}
export interface FlinkApplicationConfigurationDescription {
  CheckpointConfigurationDescription?: CheckpointConfigurationDescription;
  MonitoringConfigurationDescription?: MonitoringConfigurationDescription;
  ParallelismConfigurationDescription?: ParallelismConfigurationDescription;
  JobPlanDescription?: string;
}
export interface FlinkApplicationConfigurationUpdate {
  CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate;
  MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate;
  ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
}
export interface FlinkRunConfiguration {
  AllowNonRestoredState?: boolean;
}
export interface GlueDataCatalogConfiguration {
  DatabaseARN: string;
}
export interface GlueDataCatalogConfigurationDescription {
  DatabaseARN: string;
}
export interface GlueDataCatalogConfigurationUpdate {
  DatabaseARNUpdate: string;
}
export type Id = string;

export type InAppStreamName = string;

export type InAppStreamNames = Array<string>;
export type InAppTableName = string;

export interface Input {
  NamePrefix: string;
  InputProcessingConfiguration?: InputProcessingConfiguration;
  KinesisStreamsInput?: KinesisStreamsInput;
  KinesisFirehoseInput?: KinesisFirehoseInput;
  InputParallelism?: InputParallelism;
  InputSchema: SourceSchema;
}
export interface InputDescription {
  InputId?: string;
  NamePrefix?: string;
  InAppStreamNames?: Array<string>;
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;
  InputSchema?: SourceSchema;
  InputParallelism?: InputParallelism;
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
}
export type InputDescriptions = Array<InputDescription>;
export interface InputLambdaProcessor {
  ResourceARN: string;
}
export interface InputLambdaProcessorDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface InputLambdaProcessorUpdate {
  ResourceARNUpdate: string;
}
export interface InputParallelism {
  Count?: number;
}
export type InputParallelismCount = number;

export interface InputParallelismUpdate {
  CountUpdate: number;
}
export interface InputProcessingConfiguration {
  InputLambdaProcessor: InputLambdaProcessor;
}
export interface InputProcessingConfigurationDescription {
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}
export interface InputProcessingConfigurationUpdate {
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
}
export type Inputs = Array<Input>;
export interface InputSchemaUpdate {
  RecordFormatUpdate?: RecordFormat;
  RecordEncodingUpdate?: string;
  RecordColumnUpdates?: Array<RecordColumn>;
}
export type InputStartingPosition =
  | "NOW"
  | "TRIM_HORIZON"
  | "LAST_STOPPED_POINT";
export interface InputStartingPositionConfiguration {
  InputStartingPosition?: InputStartingPosition;
}
export interface InputUpdate {
  InputId: string;
  NamePrefixUpdate?: string;
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;
  InputSchemaUpdate?: InputSchemaUpdate;
  InputParallelismUpdate?: InputParallelismUpdate;
}
export type InputUpdates = Array<InputUpdate>;
export declare class InvalidApplicationConfigurationException extends EffectData.TaggedError(
  "InvalidApplicationConfigurationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidArgumentException extends EffectData.TaggedError(
  "InvalidArgumentException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export type JobPlanDescription = string;

export interface JSONMappingParameters {
  RecordRowPath: string;
}
export type KinesisAnalyticsARN = string;

export interface KinesisFirehoseInput {
  ResourceARN: string;
}
export interface KinesisFirehoseInputDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface KinesisFirehoseInputUpdate {
  ResourceARNUpdate: string;
}
export interface KinesisFirehoseOutput {
  ResourceARN: string;
}
export interface KinesisFirehoseOutputDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface KinesisFirehoseOutputUpdate {
  ResourceARNUpdate: string;
}
export interface KinesisStreamsInput {
  ResourceARN: string;
}
export interface KinesisStreamsInputDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface KinesisStreamsInputUpdate {
  ResourceARNUpdate: string;
}
export interface KinesisStreamsOutput {
  ResourceARN: string;
}
export interface KinesisStreamsOutputDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface KinesisStreamsOutputUpdate {
  ResourceARNUpdate: string;
}
export interface LambdaOutput {
  ResourceARN: string;
}
export interface LambdaOutputDescription {
  ResourceARN: string;
  RoleARN?: string;
}
export interface LambdaOutputUpdate {
  ResourceARNUpdate: string;
}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ListApplicationOperationsInputLimit = number;

export interface ListApplicationOperationsRequest {
  ApplicationName: string;
  Limit?: number;
  NextToken?: string;
  Operation?: string;
  OperationStatus?: OperationStatus;
}
export interface ListApplicationOperationsResponse {
  ApplicationOperationInfoList?: Array<ApplicationOperationInfo>;
  NextToken?: string;
}
export type ListApplicationsInputLimit = number;

export interface ListApplicationSnapshotsRequest {
  ApplicationName: string;
  Limit?: number;
  NextToken?: string;
}
export interface ListApplicationSnapshotsResponse {
  SnapshotSummaries?: Array<SnapshotDetails>;
  NextToken?: string;
}
export interface ListApplicationsRequest {
  Limit?: number;
  NextToken?: string;
}
export interface ListApplicationsResponse {
  ApplicationSummaries: Array<ApplicationSummary>;
  NextToken?: string;
}
export type ListApplicationVersionsInputLimit = number;

export interface ListApplicationVersionsRequest {
  ApplicationName: string;
  Limit?: number;
  NextToken?: string;
}
export interface ListApplicationVersionsResponse {
  ApplicationVersionSummaries?: Array<ApplicationVersionSummary>;
  NextToken?: string;
}
export type ListSnapshotsInputLimit = number;

export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type LogLevel = "INFO" | "WARN" | "ERROR" | "DEBUG";
export type LogStreamARN = string;

export interface MappingParameters {
  JSONMappingParameters?: JSONMappingParameters;
  CSVMappingParameters?: CSVMappingParameters;
}
export type MavenArtifactId = string;

export type MavenGroupId = string;

export interface MavenReference {
  GroupId: string;
  ArtifactId: string;
  Version: string;
}
export type MavenVersion = string;

export type MetricsLevel = "APPLICATION" | "TASK" | "OPERATOR" | "PARALLELISM";
export type MinPauseBetweenCheckpoints = number;

export interface MonitoringConfiguration {
  ConfigurationType: ConfigurationType;
  MetricsLevel?: MetricsLevel;
  LogLevel?: LogLevel;
}
export interface MonitoringConfigurationDescription {
  ConfigurationType?: ConfigurationType;
  MetricsLevel?: MetricsLevel;
  LogLevel?: LogLevel;
}
export interface MonitoringConfigurationUpdate {
  ConfigurationTypeUpdate?: ConfigurationType;
  MetricsLevelUpdate?: MetricsLevel;
  LogLevelUpdate?: LogLevel;
}
export type NextToken = string;

export type ObjectVersion = string;

export type Operation = string;

export interface OperationFailureDetails {
  RollbackOperationId?: string;
  ErrorInfo?: ErrorInfo;
}
export type OperationId = string;

export type OperationStatus =
  | "IN_PROGRESS"
  | "CANCELLED"
  | "SUCCESSFUL"
  | "FAILED";
export interface Output {
  Name: string;
  KinesisStreamsOutput?: KinesisStreamsOutput;
  KinesisFirehoseOutput?: KinesisFirehoseOutput;
  LambdaOutput?: LambdaOutput;
  DestinationSchema: DestinationSchema;
}
export interface OutputDescription {
  OutputId?: string;
  Name?: string;
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;
  LambdaOutputDescription?: LambdaOutputDescription;
  DestinationSchema?: DestinationSchema;
}
export type OutputDescriptions = Array<OutputDescription>;
export type Outputs = Array<Output>;
export interface OutputUpdate {
  OutputId: string;
  NameUpdate?: string;
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;
  LambdaOutputUpdate?: LambdaOutputUpdate;
  DestinationSchemaUpdate?: DestinationSchema;
}
export type OutputUpdates = Array<OutputUpdate>;
export type Parallelism = number;

export interface ParallelismConfiguration {
  ConfigurationType: ConfigurationType;
  Parallelism?: number;
  ParallelismPerKPU?: number;
  AutoScalingEnabled?: boolean;
}
export interface ParallelismConfigurationDescription {
  ConfigurationType?: ConfigurationType;
  Parallelism?: number;
  ParallelismPerKPU?: number;
  CurrentParallelism?: number;
  AutoScalingEnabled?: boolean;
}
export interface ParallelismConfigurationUpdate {
  ConfigurationTypeUpdate?: ConfigurationType;
  ParallelismUpdate?: number;
  ParallelismPerKPUUpdate?: number;
  AutoScalingEnabledUpdate?: boolean;
}
export type ParallelismPerKPU = number;

export type ParsedInputRecord = Array<string>;
export type ParsedInputRecordField = string;

export type ParsedInputRecords = Array<Array<string>>;
export type ProcessedInputRecord = string;

export type ProcessedInputRecords = Array<string>;
export interface PropertyGroup {
  PropertyGroupId: string;
  PropertyMap: Record<string, string>;
}
export type PropertyGroups = Array<PropertyGroup>;
export type PropertyKey = string;

export type PropertyMap = Record<string, string>;
export type PropertyValue = string;

export type RawInputRecord = string;

export type RawInputRecords = Array<string>;
export interface RecordColumn {
  Name: string;
  Mapping?: string;
  SqlType: string;
}
export type RecordColumnDelimiter = string;

export type RecordColumnMapping = string;

export type RecordColumnName = string;

export type RecordColumns = Array<RecordColumn>;
export type RecordColumnSqlType = string;

export type RecordEncoding = string;

export interface RecordFormat {
  RecordFormatType: RecordFormatType;
  MappingParameters?: MappingParameters;
}
export type RecordFormatType = "JSON" | "CSV";
export type RecordRowDelimiter = string;

export type RecordRowPath = string;

export interface ReferenceDataSource {
  TableName: string;
  S3ReferenceDataSource?: S3ReferenceDataSource;
  ReferenceSchema: SourceSchema;
}
export interface ReferenceDataSourceDescription {
  ReferenceId: string;
  TableName: string;
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;
  ReferenceSchema?: SourceSchema;
}
export type ReferenceDataSourceDescriptions =
  Array<ReferenceDataSourceDescription>;
export type ReferenceDataSources = Array<ReferenceDataSource>;
export interface ReferenceDataSourceUpdate {
  ReferenceId: string;
  TableNameUpdate?: string;
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;
  ReferenceSchemaUpdate?: SourceSchema;
}
export type ReferenceDataSourceUpdates = Array<ReferenceDataSourceUpdate>;
export type ResourceARN = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceProvisionedThroughputExceededException extends EffectData.TaggedError(
  "ResourceProvisionedThroughputExceededException",
)<{
  readonly Message?: string;
}> {}
export type RoleARN = string;

export interface RollbackApplicationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId: number;
}
export interface RollbackApplicationResponse {
  ApplicationDetail: ApplicationDetail;
  OperationId?: string;
}
export interface RunConfiguration {
  FlinkRunConfiguration?: FlinkRunConfiguration;
  SqlRunConfigurations?: Array<SqlRunConfiguration>;
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}
export interface RunConfigurationDescription {
  ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;
  FlinkRunConfigurationDescription?: FlinkRunConfiguration;
}
export interface RunConfigurationUpdate {
  FlinkRunConfiguration?: FlinkRunConfiguration;
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}
export type RuntimeEnvironment =
  | "SQL-1_0"
  | "FLINK-1_6"
  | "FLINK-1_8"
  | "ZEPPELIN-FLINK-1_0"
  | "FLINK-1_11"
  | "FLINK-1_13"
  | "ZEPPELIN-FLINK-2_0"
  | "FLINK-1_15"
  | "ZEPPELIN-FLINK-3_0"
  | "FLINK-1_18"
  | "FLINK-1_19"
  | "FLINK-1_20";
export interface S3ApplicationCodeLocationDescription {
  BucketARN: string;
  FileKey: string;
  ObjectVersion?: string;
}
export interface S3Configuration {
  BucketARN: string;
  FileKey: string;
}
export interface S3ContentBaseLocation {
  BucketARN: string;
  BasePath?: string;
}
export interface S3ContentBaseLocationDescription {
  BucketARN: string;
  BasePath?: string;
}
export interface S3ContentBaseLocationUpdate {
  BucketARNUpdate?: string;
  BasePathUpdate?: string;
}
export interface S3ContentLocation {
  BucketARN: string;
  FileKey: string;
  ObjectVersion?: string;
}
export interface S3ContentLocationUpdate {
  BucketARNUpdate?: string;
  FileKeyUpdate?: string;
  ObjectVersionUpdate?: string;
}
export interface S3ReferenceDataSource {
  BucketARN?: string;
  FileKey?: string;
}
export interface S3ReferenceDataSourceDescription {
  BucketARN: string;
  FileKey: string;
  ReferenceRoleARN?: string;
}
export interface S3ReferenceDataSourceUpdate {
  BucketARNUpdate?: string;
  FileKeyUpdate?: string;
}
export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type SessionExpirationDurationInSeconds = number;

export interface SnapshotDetails {
  SnapshotName: string;
  SnapshotStatus: SnapshotStatus;
  ApplicationVersionId: number;
  SnapshotCreationTimestamp?: Date | string;
  RuntimeEnvironment?: RuntimeEnvironment;
}
export type SnapshotName = string;

export type SnapshotStatus = "CREATING" | "READY" | "DELETING" | "FAILED";
export type SnapshotSummaries = Array<SnapshotDetails>;
export interface SourceSchema {
  RecordFormat: RecordFormat;
  RecordEncoding?: string;
  RecordColumns: Array<RecordColumn>;
}
export interface SqlApplicationConfiguration {
  Inputs?: Array<Input>;
  Outputs?: Array<Output>;
  ReferenceDataSources?: Array<ReferenceDataSource>;
}
export interface SqlApplicationConfigurationDescription {
  InputDescriptions?: Array<InputDescription>;
  OutputDescriptions?: Array<OutputDescription>;
  ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
}
export interface SqlApplicationConfigurationUpdate {
  InputUpdates?: Array<InputUpdate>;
  OutputUpdates?: Array<OutputUpdate>;
  ReferenceDataSourceUpdates?: Array<ReferenceDataSourceUpdate>;
}
export interface SqlRunConfiguration {
  InputId: string;
  InputStartingPositionConfiguration: InputStartingPositionConfiguration;
}
export type SqlRunConfigurations = Array<SqlRunConfiguration>;
export interface StartApplicationRequest {
  ApplicationName: string;
  RunConfiguration?: RunConfiguration;
}
export interface StartApplicationResponse {
  OperationId?: string;
}
export interface StopApplicationRequest {
  ApplicationName: string;
  Force?: boolean;
}
export interface StopApplicationResponse {
  OperationId?: string;
}
export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Array<Tag>;
export type TagValue = string;

export type TextContent = string;

export type Timestamp = Date | string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export declare class UnableToDetectSchemaException extends EffectData.TaggedError(
  "UnableToDetectSchemaException",
)<{
  readonly Message?: string;
  readonly RawInputRecords?: Array<string>;
  readonly ProcessedInputRecords?: Array<string>;
}> {}
export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateApplicationMaintenanceConfigurationRequest {
  ApplicationName: string;
  ApplicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdate;
}
export interface UpdateApplicationMaintenanceConfigurationResponse {
  ApplicationARN?: string;
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
}
export interface UpdateApplicationRequest {
  ApplicationName: string;
  CurrentApplicationVersionId?: number;
  ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate;
  ServiceExecutionRoleUpdate?: string;
  RunConfigurationUpdate?: RunConfigurationUpdate;
  CloudWatchLoggingOptionUpdates?: Array<CloudWatchLoggingOptionUpdate>;
  ConditionalToken?: string;
  RuntimeEnvironmentUpdate?: RuntimeEnvironment;
}
export interface UpdateApplicationResponse {
  ApplicationDetail: ApplicationDetail;
  OperationId?: string;
}
export type UrlType = "FLINK_DASHBOARD_URL" | "ZEPPELIN_UI_URL";
export interface VpcConfiguration {
  SubnetIds: Array<string>;
  SecurityGroupIds: Array<string>;
}
export interface VpcConfigurationDescription {
  VpcConfigurationId: string;
  VpcId: string;
  SubnetIds: Array<string>;
  SecurityGroupIds: Array<string>;
}
export type VpcConfigurationDescriptions = Array<VpcConfigurationDescription>;
export type VpcConfigurations = Array<VpcConfiguration>;
export interface VpcConfigurationUpdate {
  VpcConfigurationId: string;
  SubnetIdUpdates?: Array<string>;
  SecurityGroupIdUpdates?: Array<string>;
}
export type VpcConfigurationUpdates = Array<VpcConfigurationUpdate>;
export type VpcId = string;

export interface ZeppelinApplicationConfiguration {
  MonitoringConfiguration?: ZeppelinMonitoringConfiguration;
  CatalogConfiguration?: CatalogConfiguration;
  DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration;
  CustomArtifactsConfiguration?: Array<CustomArtifactConfiguration>;
}
export interface ZeppelinApplicationConfigurationDescription {
  MonitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription;
  CatalogConfigurationDescription?: CatalogConfigurationDescription;
  DeployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription;
  CustomArtifactsConfigurationDescription?: Array<CustomArtifactConfigurationDescription>;
}
export interface ZeppelinApplicationConfigurationUpdate {
  MonitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;
  CatalogConfigurationUpdate?: CatalogConfigurationUpdate;
  DeployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;
  CustomArtifactsConfigurationUpdate?: Array<CustomArtifactConfiguration>;
}
export interface ZeppelinMonitoringConfiguration {
  LogLevel: LogLevel;
}
export interface ZeppelinMonitoringConfigurationDescription {
  LogLevel?: LogLevel;
}
export interface ZeppelinMonitoringConfigurationUpdate {
  LogLevelUpdate: LogLevel;
}
export type ZipFileContent = Uint8Array | string;

export declare namespace AddApplicationCloudWatchLoggingOption {
  export type Input = AddApplicationCloudWatchLoggingOptionRequest;
  export type Output = AddApplicationCloudWatchLoggingOptionResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AddApplicationInput {
  export type Input = AddApplicationInputRequest;
  export type Output = AddApplicationInputResponse;
  export type Error =
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AddApplicationInputProcessingConfiguration {
  export type Input = AddApplicationInputProcessingConfigurationRequest;
  export type Output = AddApplicationInputProcessingConfigurationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AddApplicationOutput {
  export type Input = AddApplicationOutputRequest;
  export type Output = AddApplicationOutputResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AddApplicationReferenceDataSource {
  export type Input = AddApplicationReferenceDataSourceRequest;
  export type Output = AddApplicationReferenceDataSourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AddApplicationVpcConfiguration {
  export type Input = AddApplicationVpcConfigurationRequest;
  export type Output = AddApplicationVpcConfigurationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | LimitExceededException
    | ResourceInUseException
    | TooManyTagsException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace CreateApplicationPresignedUrl {
  export type Input = CreateApplicationPresignedUrlRequest;
  export type Output = CreateApplicationPresignedUrlResponse;
  export type Error =
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateApplicationSnapshot {
  export type Input = CreateApplicationSnapshotRequest;
  export type Output = CreateApplicationSnapshotResponse;
  export type Error =
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteApplicationCloudWatchLoggingOption {
  export type Input = DeleteApplicationCloudWatchLoggingOptionRequest;
  export type Output = DeleteApplicationCloudWatchLoggingOptionResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteApplicationInputProcessingConfiguration {
  export type Input = DeleteApplicationInputProcessingConfigurationRequest;
  export type Output = DeleteApplicationInputProcessingConfigurationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteApplicationOutput {
  export type Input = DeleteApplicationOutputRequest;
  export type Output = DeleteApplicationOutputResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteApplicationReferenceDataSource {
  export type Input = DeleteApplicationReferenceDataSourceRequest;
  export type Output = DeleteApplicationReferenceDataSourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteApplicationSnapshot {
  export type Input = DeleteApplicationSnapshotRequest;
  export type Output = DeleteApplicationSnapshotResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DeleteApplicationVpcConfiguration {
  export type Input = DeleteApplicationVpcConfigurationRequest;
  export type Output = DeleteApplicationVpcConfigurationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeApplication {
  export type Input = DescribeApplicationRequest;
  export type Output = DescribeApplicationResponse;
  export type Error =
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeApplicationOperation {
  export type Input = DescribeApplicationOperationRequest;
  export type Output = DescribeApplicationOperationResponse;
  export type Error =
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeApplicationSnapshot {
  export type Input = DescribeApplicationSnapshotRequest;
  export type Output = DescribeApplicationSnapshotResponse;
  export type Error =
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DescribeApplicationVersion {
  export type Input = DescribeApplicationVersionRequest;
  export type Output = DescribeApplicationVersionResponse;
  export type Error =
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace DiscoverInputSchema {
  export type Input = DiscoverInputSchemaRequest;
  export type Output = DiscoverInputSchemaResponse;
  export type Error =
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceProvisionedThroughputExceededException
    | ServiceUnavailableException
    | UnableToDetectSchemaException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListApplicationOperations {
  export type Input = ListApplicationOperationsRequest;
  export type Output = ListApplicationOperationsResponse;
  export type Error =
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error = InvalidRequestException | CommonAwsError;
}

export declare namespace ListApplicationSnapshots {
  export type Input = ListApplicationSnapshotsRequest;
  export type Output = ListApplicationSnapshotsResponse;
  export type Error =
    | InvalidArgumentException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListApplicationVersions {
  export type Input = ListApplicationVersionsRequest;
  export type Output = ListApplicationVersionsResponse;
  export type Error =
    | InvalidArgumentException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RollbackApplication {
  export type Input = RollbackApplicationRequest;
  export type Output = RollbackApplicationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace StartApplication {
  export type Input = StartApplicationRequest;
  export type Output = StartApplicationResponse;
  export type Error =
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopApplication {
  export type Input = StopApplicationRequest;
  export type Output = StopApplicationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | CodeValidationException
    | ConcurrentModificationException
    | InvalidApplicationConfigurationException
    | InvalidArgumentException
    | InvalidRequestException
    | LimitExceededException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateApplicationMaintenanceConfiguration {
  export type Input = UpdateApplicationMaintenanceConfigurationRequest;
  export type Output = UpdateApplicationMaintenanceConfigurationResponse;
  export type Error =
    | ConcurrentModificationException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "Kinesis Analytics V2",
  version: "2018-05-23",
  protocol: "awsJson1_1",
  endpointPrefix: "kinesisanalytics",
  targetPrefix: "KinesisAnalytics_20180523",
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;
