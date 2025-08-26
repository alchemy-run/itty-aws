import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class EMRcontainers extends AWSServiceClient {
  cancelJobRun(
    input: CancelJobRunRequest,
  ): Effect.Effect<
    CancelJobRunResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  createJobTemplate(
    input: CreateJobTemplateRequest,
  ): Effect.Effect<
    CreateJobTemplateResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createManagedEndpoint(
    input: CreateManagedEndpointRequest,
  ): Effect.Effect<
    CreateManagedEndpointResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createSecurityConfiguration(
    input: CreateSecurityConfigurationRequest,
  ): Effect.Effect<
    CreateSecurityConfigurationResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  createVirtualCluster(
    input: CreateVirtualClusterRequest,
  ): Effect.Effect<
    CreateVirtualClusterResponse,
    | EKSRequestThrottledException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteJobTemplate(
    input: DeleteJobTemplateRequest,
  ): Effect.Effect<
    DeleteJobTemplateResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  deleteManagedEndpoint(
    input: DeleteManagedEndpointRequest,
  ): Effect.Effect<
    DeleteManagedEndpointResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  deleteVirtualCluster(
    input: DeleteVirtualClusterRequest,
  ): Effect.Effect<
    DeleteVirtualClusterResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  describeJobRun(
    input: DescribeJobRunRequest,
  ): Effect.Effect<
    DescribeJobRunResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeJobTemplate(
    input: DescribeJobTemplateRequest,
  ): Effect.Effect<
    DescribeJobTemplateResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeManagedEndpoint(
    input: DescribeManagedEndpointRequest,
  ): Effect.Effect<
    DescribeManagedEndpointResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeSecurityConfiguration(
    input: DescribeSecurityConfigurationRequest,
  ): Effect.Effect<
    DescribeSecurityConfigurationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  describeVirtualCluster(
    input: DescribeVirtualClusterRequest,
  ): Effect.Effect<
    DescribeVirtualClusterResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getManagedEndpointSessionCredentials(
    input: GetManagedEndpointSessionCredentialsRequest,
  ): Effect.Effect<
    GetManagedEndpointSessionCredentialsResponse,
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listJobRuns(
    input: ListJobRunsRequest,
  ): Effect.Effect<
    ListJobRunsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listJobTemplates(
    input: ListJobTemplatesRequest,
  ): Effect.Effect<
    ListJobTemplatesResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listManagedEndpoints(
    input: ListManagedEndpointsRequest,
  ): Effect.Effect<
    ListManagedEndpointsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listSecurityConfigurations(
    input: ListSecurityConfigurationsRequest,
  ): Effect.Effect<
    ListSecurityConfigurationsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listVirtualClusters(
    input: ListVirtualClustersRequest,
  ): Effect.Effect<
    ListVirtualClustersResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  startJobRun(
    input: StartJobRunRequest,
  ): Effect.Effect<
    StartJobRunResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class EmrContainers extends EMRcontainers {}

export type ACMCertArn = string;

export type AllowAWSToRetainLogs = "ENABLED" | "DISABLED";
export interface AuthorizationConfiguration {
  lakeFormationConfiguration?: LakeFormationConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
}
export type Base64Encoded = string;

export type EmrContainersBoolean = boolean;

export interface CancelJobRunRequest {
  id: string;
  virtualClusterId: string;
}
export interface CancelJobRunResponse {
  id?: string;
  virtualClusterId?: string;
}
export interface Certificate {
  certificateArn?: string;
  certificateData?: string;
}
export type CertificateProviderType = "PEM";
export type ClientToken = string;

export interface CloudWatchMonitoringConfiguration {
  logGroupName: string;
  logStreamNamePrefix?: string;
}
export type ClusterId = string;

export interface Configuration {
  classification: string;
  properties?: Record<string, string>;
  configurations?: Array<Configuration>;
}
export type ConfigurationList = Array<Configuration>;
export interface ConfigurationOverrides {
  applicationConfiguration?: Array<Configuration>;
  monitoringConfiguration?: MonitoringConfiguration;
}
interface _ContainerInfo {
  eksInfo?: EksInfo;
}

export type ContainerInfo = _ContainerInfo & { eksInfo: EksInfo };
export interface ContainerLogRotationConfiguration {
  rotationSize: string;
  maxFilesToKeep: number;
}
export interface ContainerProvider {
  type: ContainerProviderType;
  id: string;
  info?: ContainerInfo;
}
export type ContainerProviderType = "EKS";
export interface CreateJobTemplateRequest {
  name: string;
  clientToken: string;
  jobTemplateData: JobTemplateData;
  tags?: Record<string, string>;
  kmsKeyArn?: string;
}
export interface CreateJobTemplateResponse {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date | string;
}
export interface CreateManagedEndpointRequest {
  name: string;
  virtualClusterId: string;
  type: string;
  releaseLabel: string;
  executionRoleArn: string;
  certificateArn?: string;
  configurationOverrides?: ConfigurationOverrides;
  clientToken: string;
  tags?: Record<string, string>;
}
export interface CreateManagedEndpointResponse {
  id?: string;
  name?: string;
  arn?: string;
  virtualClusterId?: string;
}
export interface CreateSecurityConfigurationRequest {
  clientToken: string;
  name: string;
  securityConfigurationData: SecurityConfigurationData;
  tags?: Record<string, string>;
}
export interface CreateSecurityConfigurationResponse {
  id?: string;
  name?: string;
  arn?: string;
}
export interface CreateVirtualClusterRequest {
  name: string;
  containerProvider: ContainerProvider;
  clientToken: string;
  tags?: Record<string, string>;
  securityConfigurationId?: string;
}
export interface CreateVirtualClusterResponse {
  id?: string;
  name?: string;
  arn?: string;
}
interface _Credentials {
  token?: string;
}

export type Credentials = _Credentials & { token: string };
export type CredentialType = string;

export type EmrContainersDate = Date | string;

export interface DeleteJobTemplateRequest {
  id: string;
}
export interface DeleteJobTemplateResponse {
  id?: string;
}
export interface DeleteManagedEndpointRequest {
  id: string;
  virtualClusterId: string;
}
export interface DeleteManagedEndpointResponse {
  id?: string;
  virtualClusterId?: string;
}
export interface DeleteVirtualClusterRequest {
  id: string;
}
export interface DeleteVirtualClusterResponse {
  id?: string;
}
export interface DescribeJobRunRequest {
  id: string;
  virtualClusterId: string;
}
export interface DescribeJobRunResponse {
  jobRun?: JobRun;
}
export interface DescribeJobTemplateRequest {
  id: string;
}
export interface DescribeJobTemplateResponse {
  jobTemplate?: JobTemplate;
}
export interface DescribeManagedEndpointRequest {
  id: string;
  virtualClusterId: string;
}
export interface DescribeManagedEndpointResponse {
  endpoint?: Endpoint;
}
export interface DescribeSecurityConfigurationRequest {
  id: string;
}
export interface DescribeSecurityConfigurationResponse {
  securityConfiguration?: SecurityConfiguration;
}
export interface DescribeVirtualClusterRequest {
  id: string;
}
export interface DescribeVirtualClusterResponse {
  virtualCluster?: VirtualCluster;
}
export interface EksInfo {
  namespace?: string;
}
export declare class EKSRequestThrottledException extends EffectData.TaggedError(
  "EKSRequestThrottledException",
)<{
  readonly message?: string;
}> {}
export interface EncryptionConfiguration {
  inTransitEncryptionConfiguration?: InTransitEncryptionConfiguration;
}
export interface Endpoint {
  id?: string;
  name?: string;
  arn?: string;
  virtualClusterId?: string;
  type?: string;
  state?: EndpointState;
  releaseLabel?: string;
  executionRoleArn?: string;
  certificateArn?: string;
  certificateAuthority?: Certificate;
  configurationOverrides?: ConfigurationOverrides;
  serverUrl?: string;
  createdAt?: Date | string;
  securityGroup?: string;
  subnetIds?: Array<string>;
  stateDetails?: string;
  failureReason?: FailureReason;
  tags?: Record<string, string>;
}
export type EndpointArn = string;

export type Endpoints = Array<Endpoint>;
export type EndpointState =
  | "CREATING"
  | "ACTIVE"
  | "TERMINATING"
  | "TERMINATED"
  | "TERMINATED_WITH_ERRORS";
export type EndpointStates = Array<EndpointState>;
export type EndpointType = string;

export type EndpointTypes = Array<string>;
export type EntryPointArgument = string;

export type EntryPointArguments = Array<string>;
export type EntryPointPath = string;

export type FailureReason =
  | "INTERNAL_ERROR"
  | "USER_ERROR"
  | "VALIDATION_ERROR"
  | "CLUSTER_UNAVAILABLE";
export interface GetManagedEndpointSessionCredentialsRequest {
  endpointIdentifier: string;
  virtualClusterIdentifier: string;
  executionRoleArn: string;
  credentialType: string;
  durationInSeconds?: number;
  logContext?: string;
  clientToken?: string;
}
export interface GetManagedEndpointSessionCredentialsResponse {
  id?: string;
  credentials?: Credentials;
  expiresAt?: Date | string;
}
export type IAMRoleArn = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export interface InTransitEncryptionConfiguration {
  tlsCertificateConfiguration?: TLSCertificateConfiguration;
}
export type JavaInteger = number;

export type JobArn = string;

export interface JobDriver {
  sparkSubmitJobDriver?: SparkSubmitJobDriver;
  sparkSqlJobDriver?: SparkSqlJobDriver;
}
export interface JobRun {
  id?: string;
  name?: string;
  virtualClusterId?: string;
  arn?: string;
  state?: JobRunState;
  clientToken?: string;
  executionRoleArn?: string;
  releaseLabel?: string;
  configurationOverrides?: ConfigurationOverrides;
  jobDriver?: JobDriver;
  createdAt?: Date | string;
  createdBy?: string;
  finishedAt?: Date | string;
  stateDetails?: string;
  failureReason?: FailureReason;
  tags?: Record<string, string>;
  retryPolicyConfiguration?: RetryPolicyConfiguration;
  retryPolicyExecution?: RetryPolicyExecution;
}
export type JobRuns = Array<JobRun>;
export type JobRunState =
  | "PENDING"
  | "SUBMITTED"
  | "RUNNING"
  | "FAILED"
  | "CANCELLED"
  | "CANCEL_PENDING"
  | "COMPLETED";
export type JobRunStates = Array<JobRunState>;
export interface JobTemplate {
  name?: string;
  id?: string;
  arn?: string;
  createdAt?: Date | string;
  createdBy?: string;
  tags?: Record<string, string>;
  jobTemplateData: JobTemplateData;
  kmsKeyArn?: string;
  decryptionError?: string;
}
export type JobTemplateArn = string;

export interface JobTemplateData {
  executionRoleArn: string;
  releaseLabel: string;
  configurationOverrides?: ParametricConfigurationOverrides;
  jobDriver: JobDriver;
  parameterConfiguration?: Record<string, TemplateParameterConfiguration>;
  jobTags?: Record<string, string>;
}
export type JobTemplates = Array<JobTemplate>;
export type KmsKeyArn = string;

export type KubernetesNamespace = string;

export interface LakeFormationConfiguration {
  authorizedSessionTagValue?: string;
  secureNamespaceInfo?: SecureNamespaceInfo;
  queryEngineRoleArn?: string;
}
export interface ListJobRunsRequest {
  virtualClusterId: string;
  createdBefore?: Date | string;
  createdAfter?: Date | string;
  name?: string;
  states?: Array<JobRunState>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListJobRunsResponse {
  jobRuns?: Array<JobRun>;
  nextToken?: string;
}
export interface ListJobTemplatesRequest {
  createdAfter?: Date | string;
  createdBefore?: Date | string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListJobTemplatesResponse {
  templates?: Array<JobTemplate>;
  nextToken?: string;
}
export interface ListManagedEndpointsRequest {
  virtualClusterId: string;
  createdBefore?: Date | string;
  createdAfter?: Date | string;
  types?: Array<string>;
  states?: Array<EndpointState>;
  maxResults?: number;
  nextToken?: string;
}
export interface ListManagedEndpointsResponse {
  endpoints?: Array<Endpoint>;
  nextToken?: string;
}
export interface ListSecurityConfigurationsRequest {
  createdAfter?: Date | string;
  createdBefore?: Date | string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSecurityConfigurationsResponse {
  securityConfigurations?: Array<SecurityConfiguration>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListVirtualClustersRequest {
  containerProviderId?: string;
  containerProviderType?: ContainerProviderType;
  createdAfter?: Date | string;
  createdBefore?: Date | string;
  states?: Array<VirtualClusterState>;
  maxResults?: number;
  nextToken?: string;
  eksAccessEntryIntegrated?: boolean;
}
export interface ListVirtualClustersResponse {
  virtualClusters?: Array<VirtualCluster>;
  nextToken?: string;
}
export type LogContext = string;

export type LogGroupName = string;

export interface ManagedLogs {
  allowAWSToRetainLogs?: AllowAWSToRetainLogs;
  encryptionKeyArn?: string;
}
export type MaxFilesToKeep = number;

export interface MonitoringConfiguration {
  managedLogs?: ManagedLogs;
  persistentAppUI?: PersistentAppUI;
  cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;
  s3MonitoringConfiguration?: S3MonitoringConfiguration;
  containerLogRotationConfiguration?: ContainerLogRotationConfiguration;
}
export type NextToken = string;

export interface ParametricCloudWatchMonitoringConfiguration {
  logGroupName?: string;
  logStreamNamePrefix?: string;
}
export interface ParametricConfigurationOverrides {
  applicationConfiguration?: Array<Configuration>;
  monitoringConfiguration?: ParametricMonitoringConfiguration;
}
export type ParametricIAMRoleArn = string;

export interface ParametricMonitoringConfiguration {
  persistentAppUI?: string;
  cloudWatchMonitoringConfiguration?: ParametricCloudWatchMonitoringConfiguration;
  s3MonitoringConfiguration?: ParametricS3MonitoringConfiguration;
}
export type ParametricReleaseLabel = string;

export interface ParametricS3MonitoringConfiguration {
  logUri?: string;
}
export type PersistentAppUI = "ENABLED" | "DISABLED";
export type ReleaseLabel = string;

export type RequestIdentityUserArn = string;

export declare class RequestThrottledException extends EffectData.TaggedError(
  "RequestThrottledException",
)<{
  readonly message?: string;
}> {}
export type ResourceIdString = string;

export type ResourceNameString = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RetryPolicyConfiguration {
  maxAttempts: number;
}
export interface RetryPolicyExecution {
  currentAttemptCount: number;
}
export type RotationSize = string;

export type RsiArn = string;

export interface S3MonitoringConfiguration {
  logUri: string;
}
export type SecretsManagerArn = string;

export interface SecureNamespaceInfo {
  clusterId?: string;
  namespace?: string;
}
export interface SecurityConfiguration {
  id?: string;
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  createdBy?: string;
  securityConfigurationData?: SecurityConfigurationData;
  tags?: Record<string, string>;
}
export type SecurityConfigurationArn = string;

export interface SecurityConfigurationData {
  authorizationConfiguration?: AuthorizationConfiguration;
}
export type SecurityConfigurations = Array<SecurityConfiguration>;
export type SensitivePropertiesMap = Record<string, string>;
export type SessionTagValue = string;

export interface SparkSqlJobDriver {
  entryPoint?: string;
  sparkSqlParameters?: string;
}
export type SparkSqlParameters = string;

export interface SparkSubmitJobDriver {
  entryPoint: string;
  entryPointArguments?: Array<string>;
  sparkSubmitParameters?: string;
}
export type SparkSubmitParameters = string;

export interface StartJobRunRequest {
  name?: string;
  virtualClusterId: string;
  clientToken: string;
  executionRoleArn?: string;
  releaseLabel?: string;
  jobDriver?: JobDriver;
  configurationOverrides?: ConfigurationOverrides;
  tags?: Record<string, string>;
  jobTemplateId?: string;
  jobTemplateParameters?: Record<string, string>;
  retryPolicyConfiguration?: RetryPolicyConfiguration;
}
export interface StartJobRunResponse {
  id?: string;
  name?: string;
  arn?: string;
  virtualClusterId?: string;
}
export type String1024 = string;

export type String128 = string;

export type String2048 = string;

export type String256 = string;

export type StringEmpty256 = string;

export type SubnetIds = Array<string>;
export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TemplateParameter = string;

export interface TemplateParameterConfiguration {
  type?: TemplateParameterDataType;
  defaultValue?: string;
}
export type TemplateParameterConfigurationMap = Record<
  string,
  TemplateParameterConfiguration
>;
export type TemplateParameterDataType = "NUMBER" | "STRING";
export type TemplateParameterInputMap = Record<string, string>;
export type TemplateParameterName = string;

export interface TLSCertificateConfiguration {
  certificateProviderType?: CertificateProviderType;
  publicCertificateSecretArn?: string;
  privateCertificateSecretArn?: string;
}
export type Token = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UriString = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export interface VirtualCluster {
  id?: string;
  name?: string;
  arn?: string;
  state?: VirtualClusterState;
  containerProvider?: ContainerProvider;
  createdAt?: Date | string;
  tags?: Record<string, string>;
  securityConfigurationId?: string;
}
export type VirtualClusterArn = string;

export type VirtualClusters = Array<VirtualCluster>;
export type VirtualClusterState =
  | "RUNNING"
  | "TERMINATING"
  | "TERMINATED"
  | "ARRESTED";
export type VirtualClusterStates = Array<VirtualClusterState>;
export declare namespace CancelJobRun {
  export type Input = CancelJobRunRequest;
  export type Output = CancelJobRunResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateJobTemplate {
  export type Input = CreateJobTemplateRequest;
  export type Output = CreateJobTemplateResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateManagedEndpoint {
  export type Input = CreateManagedEndpointRequest;
  export type Output = CreateManagedEndpointResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSecurityConfiguration {
  export type Input = CreateSecurityConfigurationRequest;
  export type Output = CreateSecurityConfigurationResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateVirtualCluster {
  export type Input = CreateVirtualClusterRequest;
  export type Output = CreateVirtualClusterResponse;
  export type Error =
    | EKSRequestThrottledException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteJobTemplate {
  export type Input = DeleteJobTemplateRequest;
  export type Output = DeleteJobTemplateResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteManagedEndpoint {
  export type Input = DeleteManagedEndpointRequest;
  export type Output = DeleteManagedEndpointResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteVirtualCluster {
  export type Input = DeleteVirtualClusterRequest;
  export type Output = DeleteVirtualClusterResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeJobRun {
  export type Input = DescribeJobRunRequest;
  export type Output = DescribeJobRunResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeJobTemplate {
  export type Input = DescribeJobTemplateRequest;
  export type Output = DescribeJobTemplateResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeManagedEndpoint {
  export type Input = DescribeManagedEndpointRequest;
  export type Output = DescribeManagedEndpointResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSecurityConfiguration {
  export type Input = DescribeSecurityConfigurationRequest;
  export type Output = DescribeSecurityConfigurationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeVirtualCluster {
  export type Input = DescribeVirtualClusterRequest;
  export type Output = DescribeVirtualClusterResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedEndpointSessionCredentials {
  export type Input = GetManagedEndpointSessionCredentialsRequest;
  export type Output = GetManagedEndpointSessionCredentialsResponse;
  export type Error =
    | InternalServerException
    | RequestThrottledException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobRuns {
  export type Input = ListJobRunsRequest;
  export type Output = ListJobRunsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobTemplates {
  export type Input = ListJobTemplatesRequest;
  export type Output = ListJobTemplatesResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedEndpoints {
  export type Input = ListManagedEndpointsRequest;
  export type Output = ListManagedEndpointsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSecurityConfigurations {
  export type Input = ListSecurityConfigurationsRequest;
  export type Output = ListSecurityConfigurationsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListVirtualClusters {
  export type Input = ListVirtualClustersRequest;
  export type Output = ListVirtualClustersResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartJobRun {
  export type Input = StartJobRunRequest;
  export type Output = StartJobRunResponse;
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
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
