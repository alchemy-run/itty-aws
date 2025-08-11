import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class Proton extends AWSServiceClient {
  cancelComponentDeployment(
    input: CancelComponentDeploymentInput,
  ): Effect.Effect<
    CancelComponentDeploymentOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelEnvironmentDeployment(
    input: CancelEnvironmentDeploymentInput,
  ): Effect.Effect<
    CancelEnvironmentDeploymentOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelServiceInstanceDeployment(
    input: CancelServiceInstanceDeploymentInput,
  ): Effect.Effect<
    CancelServiceInstanceDeploymentOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelServicePipelineDeployment(
    input: CancelServicePipelineDeploymentInput,
  ): Effect.Effect<
    CancelServicePipelineDeploymentOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRepositorySyncStatus(
    input: GetRepositorySyncStatusInput,
  ): Effect.Effect<
    GetRepositorySyncStatusOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResourcesSummary(
    input: GetResourcesSummaryInput,
  ): Effect.Effect<
    GetResourcesSummaryOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getServiceInstanceSyncStatus(
    input: GetServiceInstanceSyncStatusInput,
  ): Effect.Effect<
    GetServiceInstanceSyncStatusOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTemplateSyncStatus(
    input: GetTemplateSyncStatusInput,
  ): Effect.Effect<
    GetTemplateSyncStatusOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRepositorySyncDefinitions(
    input: ListRepositorySyncDefinitionsInput,
  ): Effect.Effect<
    ListRepositorySyncDefinitionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  notifyResourceDeploymentStatusChange(
    input: NotifyResourceDeploymentStatusChangeInput,
  ): Effect.Effect<
    NotifyResourceDeploymentStatusChangeOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export interface AcceptEnvironmentAccountConnectionInput {
  id: string;
}
export interface AcceptEnvironmentAccountConnectionOutput {
  environmentAccountConnection: EnvironmentAccountConnection;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AccountSettings {
  pipelineServiceRoleArn?: string;
  pipelineProvisioningRepository?: RepositoryBranch;
  pipelineCodebuildRoleArn?: string;
}
export type Arn = string;

export type AwsAccountId = string;

export type BlockerStatus = string;

export type BlockerType = string;

export interface CancelComponentDeploymentInput {
  componentName: string;
}
export interface CancelComponentDeploymentOutput {
  component: Component;
}
export interface CancelEnvironmentDeploymentInput {
  environmentName: string;
}
export interface CancelEnvironmentDeploymentOutput {
  environment: Environment;
}
export interface CancelServiceInstanceDeploymentInput {
  serviceInstanceName: string;
  serviceName: string;
}
export interface CancelServiceInstanceDeploymentOutput {
  serviceInstance: ServiceInstance;
}
export interface CancelServicePipelineDeploymentInput {
  serviceName: string;
}
export interface CancelServicePipelineDeploymentOutput {
  pipeline: ServicePipeline;
}
export type ClientToken = string;

export interface CompatibleEnvironmentTemplate {
  templateName: string;
  majorVersion: string;
}
export interface CompatibleEnvironmentTemplateInput {
  templateName: string;
  majorVersion: string;
}
export type CompatibleEnvironmentTemplateInputList =
  Array<CompatibleEnvironmentTemplateInput>;
export type CompatibleEnvironmentTemplateList =
  Array<CompatibleEnvironmentTemplate>;
export interface Component {
  name: string;
  description?: string;
  arn: string;
  environmentName: string;
  serviceName?: string;
  serviceInstanceName?: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  lastDeploymentAttemptedAt?: Date | string;
  lastDeploymentSucceededAt?: Date | string;
  deploymentStatus: string;
  deploymentStatusMessage?: string;
  serviceSpec?: string;
  lastClientRequestToken?: string;
  lastAttemptedDeploymentId?: string;
  lastSucceededDeploymentId?: string;
}
export type ComponentArn = string;

export type ComponentDeploymentIdList = Array<string>;
export type ComponentDeploymentUpdateType = string;

export interface ComponentState {
  serviceName?: string;
  serviceInstanceName?: string;
  serviceSpec?: string;
  templateFile?: string;
}
export interface ComponentSummary {
  name: string;
  arn: string;
  environmentName: string;
  serviceName?: string;
  serviceInstanceName?: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  lastDeploymentAttemptedAt?: Date | string;
  lastDeploymentSucceededAt?: Date | string;
  deploymentStatus: string;
  deploymentStatusMessage?: string;
  lastAttemptedDeploymentId?: string;
  lastSucceededDeploymentId?: string;
}
export type ComponentSummaryList = Array<ComponentSummary>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface CountsSummary {
  components?: ResourceCountsSummary;
  environments?: ResourceCountsSummary;
  environmentTemplates?: ResourceCountsSummary;
  serviceInstances?: ResourceCountsSummary;
  services?: ResourceCountsSummary;
  serviceTemplates?: ResourceCountsSummary;
  pipelines?: ResourceCountsSummary;
}
export interface CreateComponentInput {
  name: string;
  description?: string;
  serviceName?: string;
  serviceInstanceName?: string;
  environmentName?: string;
  templateFile: string;
  manifest: string;
  serviceSpec?: string;
  tags?: Array<Tag>;
  clientToken?: string;
}
export interface CreateComponentOutput {
  component: Component;
}
export interface CreateEnvironmentAccountConnectionInput {
  clientToken?: string;
  managementAccountId: string;
  roleArn?: string;
  environmentName: string;
  tags?: Array<Tag>;
  componentRoleArn?: string;
  codebuildRoleArn?: string;
}
export interface CreateEnvironmentAccountConnectionOutput {
  environmentAccountConnection: EnvironmentAccountConnection;
}
export interface CreateEnvironmentInput {
  name: string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion?: string;
  description?: string;
  spec: string;
  protonServiceRoleArn?: string;
  environmentAccountConnectionId?: string;
  tags?: Array<Tag>;
  provisioningRepository?: RepositoryBranchInput;
  componentRoleArn?: string;
  codebuildRoleArn?: string;
}
export interface CreateEnvironmentOutput {
  environment: Environment;
}
export interface CreateEnvironmentTemplateInput {
  name: string;
  displayName?: string;
  description?: string;
  encryptionKey?: string;
  provisioning?: string;
  tags?: Array<Tag>;
}
export interface CreateEnvironmentTemplateOutput {
  environmentTemplate: EnvironmentTemplate;
}
export interface CreateEnvironmentTemplateVersionInput {
  clientToken?: string;
  templateName: string;
  description?: string;
  majorVersion?: string;
  source: TemplateVersionSourceInput;
  tags?: Array<Tag>;
}
export interface CreateEnvironmentTemplateVersionOutput {
  environmentTemplateVersion: EnvironmentTemplateVersion;
}
export interface CreateRepositoryInput {
  provider: string;
  name: string;
  connectionArn: string;
  encryptionKey?: string;
  tags?: Array<Tag>;
}
export interface CreateRepositoryOutput {
  repository: Repository;
}
export interface CreateServiceInput {
  name: string;
  description?: string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion?: string;
  spec: string;
  repositoryConnectionArn?: string;
  repositoryId?: string;
  branchName?: string;
  tags?: Array<Tag>;
}
export interface CreateServiceInstanceInput {
  name: string;
  serviceName: string;
  spec: string;
  templateMajorVersion?: string;
  templateMinorVersion?: string;
  tags?: Array<Tag>;
  clientToken?: string;
}
export interface CreateServiceInstanceOutput {
  serviceInstance: ServiceInstance;
}
export interface CreateServiceOutput {
  service: Service;
}
export interface CreateServiceSyncConfigInput {
  serviceName: string;
  repositoryProvider: string;
  repositoryName: string;
  branch: string;
  filePath: string;
}
export interface CreateServiceSyncConfigOutput {
  serviceSyncConfig?: ServiceSyncConfig;
}
export interface CreateServiceTemplateInput {
  name: string;
  displayName?: string;
  description?: string;
  encryptionKey?: string;
  pipelineProvisioning?: string;
  tags?: Array<Tag>;
}
export interface CreateServiceTemplateOutput {
  serviceTemplate: ServiceTemplate;
}
export interface CreateServiceTemplateVersionInput {
  clientToken?: string;
  templateName: string;
  description?: string;
  majorVersion?: string;
  source: TemplateVersionSourceInput;
  compatibleEnvironmentTemplates: Array<CompatibleEnvironmentTemplateInput>;
  tags?: Array<Tag>;
  supportedComponentSources?: Array<string>;
}
export interface CreateServiceTemplateVersionOutput {
  serviceTemplateVersion: ServiceTemplateVersion;
}
export interface CreateTemplateSyncConfigInput {
  templateName: string;
  templateType: string;
  repositoryProvider: string;
  repositoryName: string;
  branch: string;
  subdirectory?: string;
}
export interface CreateTemplateSyncConfigOutput {
  templateSyncConfig?: TemplateSyncConfig;
}
export interface DeleteComponentInput {
  name: string;
}
export interface DeleteComponentOutput {
  component?: Component;
}
export interface DeleteDeploymentInput {
  id: string;
}
export interface DeleteDeploymentOutput {
  deployment?: Deployment;
}
export interface DeleteEnvironmentAccountConnectionInput {
  id: string;
}
export interface DeleteEnvironmentAccountConnectionOutput {
  environmentAccountConnection?: EnvironmentAccountConnection;
}
export interface DeleteEnvironmentInput {
  name: string;
}
export interface DeleteEnvironmentOutput {
  environment?: Environment;
}
export interface DeleteEnvironmentTemplateInput {
  name: string;
}
export interface DeleteEnvironmentTemplateOutput {
  environmentTemplate?: EnvironmentTemplate;
}
export interface DeleteEnvironmentTemplateVersionInput {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
}
export interface DeleteEnvironmentTemplateVersionOutput {
  environmentTemplateVersion?: EnvironmentTemplateVersion;
}
export interface DeleteRepositoryInput {
  provider: string;
  name: string;
}
export interface DeleteRepositoryOutput {
  repository?: Repository;
}
export interface DeleteServiceInput {
  name: string;
}
export interface DeleteServiceOutput {
  service?: Service;
}
export interface DeleteServiceSyncConfigInput {
  serviceName: string;
}
export interface DeleteServiceSyncConfigOutput {
  serviceSyncConfig?: ServiceSyncConfig;
}
export interface DeleteServiceTemplateInput {
  name: string;
}
export interface DeleteServiceTemplateOutput {
  serviceTemplate?: ServiceTemplate;
}
export interface DeleteServiceTemplateVersionInput {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
}
export interface DeleteServiceTemplateVersionOutput {
  serviceTemplateVersion?: ServiceTemplateVersion;
}
export interface DeleteTemplateSyncConfigInput {
  templateName: string;
  templateType: string;
}
export interface DeleteTemplateSyncConfigOutput {
  templateSyncConfig?: TemplateSyncConfig;
}
export interface Deployment {
  id: string;
  arn: string;
  targetArn: string;
  targetResourceCreatedAt: Date | string;
  targetResourceType: string;
  environmentName: string;
  serviceName?: string;
  serviceInstanceName?: string;
  componentName?: string;
  deploymentStatus: string;
  deploymentStatusMessage?: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  completedAt?: Date | string;
  lastAttemptedDeploymentId?: string;
  lastSucceededDeploymentId?: string;
  initialState?: DeploymentState;
  targetState?: DeploymentState;
}
export type DeploymentArn = string;

export type DeploymentId = string;

interface _DeploymentState {
  serviceInstance?: ServiceInstanceState;
  environment?: EnvironmentState;
  servicePipeline?: ServicePipelineState;
  component?: ComponentState;
}

export type DeploymentState =
  | (_DeploymentState & { serviceInstance: ServiceInstanceState })
  | (_DeploymentState & { environment: EnvironmentState })
  | (_DeploymentState & { servicePipeline: ServicePipelineState })
  | (_DeploymentState & { component: ComponentState });
export type DeploymentStatus = string;

export interface DeploymentSummary {
  id: string;
  arn: string;
  targetArn: string;
  targetResourceCreatedAt: Date | string;
  targetResourceType: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  completedAt?: Date | string;
  environmentName: string;
  serviceName?: string;
  serviceInstanceName?: string;
  componentName?: string;
  lastAttemptedDeploymentId?: string;
  lastSucceededDeploymentId?: string;
  deploymentStatus: string;
}
export type DeploymentSummaryList = Array<DeploymentSummary>;
export type DeploymentTargetResourceType = string;

export type DeploymentUpdateType = string;

export type Description = string;

export type DisplayName = string;

export type EmptyNextToken = string;

export interface Environment {
  name: string;
  description?: string;
  createdAt: Date | string;
  lastDeploymentAttemptedAt: Date | string;
  lastDeploymentSucceededAt: Date | string;
  arn: string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion: string;
  deploymentStatus: string;
  deploymentStatusMessage?: string;
  protonServiceRoleArn?: string;
  environmentAccountConnectionId?: string;
  environmentAccountId?: string;
  spec?: string;
  provisioning?: string;
  provisioningRepository?: RepositoryBranch;
  componentRoleArn?: string;
  codebuildRoleArn?: string;
  lastAttemptedDeploymentId?: string;
  lastSucceededDeploymentId?: string;
}
export interface EnvironmentAccountConnection {
  id: string;
  arn: string;
  managementAccountId: string;
  environmentAccountId: string;
  roleArn: string;
  environmentName: string;
  requestedAt: Date | string;
  lastModifiedAt: Date | string;
  status: string;
  componentRoleArn?: string;
  codebuildRoleArn?: string;
}
export type EnvironmentAccountConnectionArn = string;

export type EnvironmentAccountConnectionId = string;

export type EnvironmentAccountConnectionRequesterAccountType = string;

export type EnvironmentAccountConnectionStatus = string;

export type EnvironmentAccountConnectionStatusList = Array<string>;
export interface EnvironmentAccountConnectionSummary {
  id: string;
  arn: string;
  managementAccountId: string;
  environmentAccountId: string;
  roleArn: string;
  environmentName: string;
  requestedAt: Date | string;
  lastModifiedAt: Date | string;
  status: string;
  componentRoleArn?: string;
}
export type EnvironmentAccountConnectionSummaryList =
  Array<EnvironmentAccountConnectionSummary>;
export type EnvironmentArn = string;

export interface EnvironmentState {
  spec?: string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion: string;
}
export interface EnvironmentSummary {
  name: string;
  description?: string;
  createdAt: Date | string;
  lastDeploymentAttemptedAt: Date | string;
  lastDeploymentSucceededAt: Date | string;
  arn: string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion: string;
  deploymentStatus: string;
  deploymentStatusMessage?: string;
  protonServiceRoleArn?: string;
  environmentAccountConnectionId?: string;
  environmentAccountId?: string;
  provisioning?: string;
  componentRoleArn?: string;
  lastAttemptedDeploymentId?: string;
  lastSucceededDeploymentId?: string;
}
export type EnvironmentSummaryList = Array<EnvironmentSummary>;
export interface EnvironmentTemplate {
  name: string;
  arn: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  displayName?: string;
  description?: string;
  recommendedVersion?: string;
  encryptionKey?: string;
  provisioning?: string;
}
export type EnvironmentTemplateArn = string;

export interface EnvironmentTemplateFilter {
  templateName: string;
  majorVersion: string;
}
export type EnvironmentTemplateFilterList = Array<EnvironmentTemplateFilter>;
export interface EnvironmentTemplateSummary {
  name: string;
  arn: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  displayName?: string;
  description?: string;
  recommendedVersion?: string;
  provisioning?: string;
}
export type EnvironmentTemplateSummaryList = Array<EnvironmentTemplateSummary>;
export interface EnvironmentTemplateVersion {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
  recommendedMinorVersion?: string;
  status: string;
  statusMessage?: string;
  description?: string;
  arn: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  schema?: string;
}
export type EnvironmentTemplateVersionArn = string;

export interface EnvironmentTemplateVersionSummary {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
  recommendedMinorVersion?: string;
  status: string;
  statusMessage?: string;
  description?: string;
  arn: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
}
export type EnvironmentTemplateVersionSummaryList =
  Array<EnvironmentTemplateVersionSummary>;
export type ErrorMessage = string;

export type FullTemplateVersionNumber = string;

export interface GetAccountSettingsInput {}
export interface GetAccountSettingsOutput {
  accountSettings?: AccountSettings;
}
export interface GetComponentInput {
  name: string;
}
export interface GetComponentOutput {
  component?: Component;
}
export interface GetDeploymentInput {
  id: string;
  environmentName?: string;
  serviceName?: string;
  serviceInstanceName?: string;
  componentName?: string;
}
export interface GetDeploymentOutput {
  deployment?: Deployment;
}
export interface GetEnvironmentAccountConnectionInput {
  id: string;
}
export interface GetEnvironmentAccountConnectionOutput {
  environmentAccountConnection: EnvironmentAccountConnection;
}
export interface GetEnvironmentInput {
  name: string;
}
export interface GetEnvironmentOutput {
  environment: Environment;
}
export interface GetEnvironmentTemplateInput {
  name: string;
}
export interface GetEnvironmentTemplateOutput {
  environmentTemplate: EnvironmentTemplate;
}
export interface GetEnvironmentTemplateVersionInput {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
}
export interface GetEnvironmentTemplateVersionOutput {
  environmentTemplateVersion: EnvironmentTemplateVersion;
}
export interface GetRepositoryInput {
  provider: string;
  name: string;
}
export interface GetRepositoryOutput {
  repository: Repository;
}
export interface GetRepositorySyncStatusInput {
  repositoryName: string;
  repositoryProvider: string;
  branch: string;
  syncType: string;
}
export interface GetRepositorySyncStatusOutput {
  latestSync?: RepositorySyncAttempt;
}
export interface GetResourcesSummaryInput {}
export interface GetResourcesSummaryOutput {
  counts: CountsSummary;
}
export interface GetServiceInput {
  name: string;
}
export interface GetServiceInstanceInput {
  name: string;
  serviceName: string;
}
export interface GetServiceInstanceOutput {
  serviceInstance: ServiceInstance;
}
export interface GetServiceInstanceSyncStatusInput {
  serviceName: string;
  serviceInstanceName: string;
}
export interface GetServiceInstanceSyncStatusOutput {
  latestSync?: ResourceSyncAttempt;
  latestSuccessfulSync?: ResourceSyncAttempt;
  desiredState?: Revision;
}
export interface GetServiceOutput {
  service?: Service;
}
export interface GetServiceSyncBlockerSummaryInput {
  serviceName: string;
  serviceInstanceName?: string;
}
export interface GetServiceSyncBlockerSummaryOutput {
  serviceSyncBlockerSummary?: ServiceSyncBlockerSummary;
}
export interface GetServiceSyncConfigInput {
  serviceName: string;
}
export interface GetServiceSyncConfigOutput {
  serviceSyncConfig?: ServiceSyncConfig;
}
export interface GetServiceTemplateInput {
  name: string;
}
export interface GetServiceTemplateOutput {
  serviceTemplate: ServiceTemplate;
}
export interface GetServiceTemplateVersionInput {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
}
export interface GetServiceTemplateVersionOutput {
  serviceTemplateVersion: ServiceTemplateVersion;
}
export interface GetTemplateSyncConfigInput {
  templateName: string;
  templateType: string;
}
export interface GetTemplateSyncConfigOutput {
  templateSyncConfig?: TemplateSyncConfig;
}
export interface GetTemplateSyncStatusInput {
  templateName: string;
  templateType: string;
  templateVersion: string;
}
export interface GetTemplateSyncStatusOutput {
  latestSync?: ResourceSyncAttempt;
  latestSuccessfulSync?: ResourceSyncAttempt;
  desiredState?: Revision;
}
export type GitBranchName = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type LatestSyncBlockers = Array<SyncBlocker>;
export interface ListComponentOutputsInput {
  componentName: string;
  nextToken?: string;
  deploymentId?: string;
}
export interface ListComponentOutputsOutput {
  nextToken?: string;
  outputs: Array<Output>;
}
export interface ListComponentProvisionedResourcesInput {
  componentName: string;
  nextToken?: string;
}
export interface ListComponentProvisionedResourcesOutput {
  nextToken?: string;
  provisionedResources: Array<ProvisionedResource>;
}
export interface ListComponentsInput {
  nextToken?: string;
  environmentName?: string;
  serviceName?: string;
  serviceInstanceName?: string;
  maxResults?: number;
}
export interface ListComponentsOutput {
  nextToken?: string;
  components: Array<ComponentSummary>;
}
export interface ListDeploymentsInput {
  nextToken?: string;
  environmentName?: string;
  serviceName?: string;
  serviceInstanceName?: string;
  componentName?: string;
  maxResults?: number;
}
export interface ListDeploymentsOutput {
  nextToken?: string;
  deployments: Array<DeploymentSummary>;
}
export interface ListEnvironmentAccountConnectionsInput {
  requestedBy: string;
  environmentName?: string;
  statuses?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListEnvironmentAccountConnectionsOutput {
  environmentAccountConnections: Array<EnvironmentAccountConnectionSummary>;
  nextToken?: string;
}
export interface ListEnvironmentOutputsInput {
  environmentName: string;
  nextToken?: string;
  deploymentId?: string;
}
export interface ListEnvironmentOutputsOutput {
  nextToken?: string;
  outputs: Array<Output>;
}
export interface ListEnvironmentProvisionedResourcesInput {
  environmentName: string;
  nextToken?: string;
}
export interface ListEnvironmentProvisionedResourcesOutput {
  nextToken?: string;
  provisionedResources: Array<ProvisionedResource>;
}
export interface ListEnvironmentsInput {
  nextToken?: string;
  maxResults?: number;
  environmentTemplates?: Array<EnvironmentTemplateFilter>;
}
export interface ListEnvironmentsOutput {
  nextToken?: string;
  environments: Array<EnvironmentSummary>;
}
export interface ListEnvironmentTemplatesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListEnvironmentTemplatesOutput {
  nextToken?: string;
  templates: Array<EnvironmentTemplateSummary>;
}
export interface ListEnvironmentTemplateVersionsInput {
  nextToken?: string;
  maxResults?: number;
  templateName: string;
  majorVersion?: string;
}
export interface ListEnvironmentTemplateVersionsOutput {
  nextToken?: string;
  templateVersions: Array<EnvironmentTemplateVersionSummary>;
}
export interface ListRepositoriesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListRepositoriesOutput {
  nextToken?: string;
  repositories: Array<RepositorySummary>;
}
export interface ListRepositorySyncDefinitionsInput {
  repositoryName: string;
  repositoryProvider: string;
  syncType: string;
  nextToken?: string;
}
export interface ListRepositorySyncDefinitionsOutput {
  nextToken?: string;
  syncDefinitions: Array<RepositorySyncDefinition>;
}
export interface ListServiceInstanceOutputsInput {
  serviceInstanceName: string;
  serviceName: string;
  nextToken?: string;
  deploymentId?: string;
}
export interface ListServiceInstanceOutputsOutput {
  nextToken?: string;
  outputs: Array<Output>;
}
export interface ListServiceInstanceProvisionedResourcesInput {
  serviceName: string;
  serviceInstanceName: string;
  nextToken?: string;
}
export interface ListServiceInstanceProvisionedResourcesOutput {
  nextToken?: string;
  provisionedResources: Array<ProvisionedResource>;
}
export interface ListServiceInstancesFilter {
  key?: string;
  value?: string;
}
export type ListServiceInstancesFilterBy = string;

export type ListServiceInstancesFilterList = Array<ListServiceInstancesFilter>;
export type ListServiceInstancesFilterValue = string;

export interface ListServiceInstancesInput {
  serviceName?: string;
  nextToken?: string;
  maxResults?: number;
  filters?: Array<ListServiceInstancesFilter>;
  sortBy?: string;
  sortOrder?: string;
}
export interface ListServiceInstancesOutput {
  nextToken?: string;
  serviceInstances: Array<ServiceInstanceSummary>;
}
export type ListServiceInstancesSortBy = string;

export interface ListServicePipelineOutputsInput {
  serviceName: string;
  nextToken?: string;
  deploymentId?: string;
}
export interface ListServicePipelineOutputsOutput {
  nextToken?: string;
  outputs: Array<Output>;
}
export interface ListServicePipelineProvisionedResourcesInput {
  serviceName: string;
  nextToken?: string;
}
export interface ListServicePipelineProvisionedResourcesOutput {
  nextToken?: string;
  provisionedResources: Array<ProvisionedResource>;
}
export interface ListServicesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListServicesOutput {
  nextToken?: string;
  services: Array<ServiceSummary>;
}
export interface ListServiceTemplatesInput {
  nextToken?: string;
  maxResults?: number;
}
export interface ListServiceTemplatesOutput {
  nextToken?: string;
  templates: Array<ServiceTemplateSummary>;
}
export interface ListServiceTemplateVersionsInput {
  nextToken?: string;
  maxResults?: number;
  templateName: string;
  majorVersion?: string;
}
export interface ListServiceTemplateVersionsOutput {
  nextToken?: string;
  templateVersions: Array<ServiceTemplateVersionSummary>;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTagsForResourceOutput {
  tags: Array<Tag>;
  nextToken?: string;
}
export type MaxPageResults = number;

export type NextToken = string;

export interface NotifyResourceDeploymentStatusChangeInput {
  resourceArn: string;
  status?: string;
  outputs?: Array<Output>;
  deploymentId?: string;
  statusMessage?: string;
}
export interface NotifyResourceDeploymentStatusChangeOutput {}
export type OpsFilePath = string;

export interface Output {
  key?: string;
  valueString?: string;
}
export type OutputKey = string;

export type OutputsList = Array<Output>;
export type OutputValueString = string;

export interface ProvisionedResource {
  name?: string;
  identifier?: string;
  provisioningEngine?: string;
}
export type ProvisionedResourceEngine = string;

export type ProvisionedResourceIdentifier = string;

export type ProvisionedResourceList = Array<ProvisionedResource>;
export type ProvisionedResourceName = string;

export type Provisioning = string;

export interface RejectEnvironmentAccountConnectionInput {
  id: string;
}
export interface RejectEnvironmentAccountConnectionOutput {
  environmentAccountConnection: EnvironmentAccountConnection;
}
export interface Repository {
  arn: string;
  provider: string;
  name: string;
  connectionArn: string;
  encryptionKey?: string;
}
export type RepositoryArn = string;

export interface RepositoryBranch {
  arn: string;
  provider: string;
  name: string;
  branch: string;
}
export interface RepositoryBranchInput {
  provider: string;
  name: string;
  branch: string;
}
export type RepositoryId = string;

export type RepositoryName = string;

export type RepositoryProvider = string;

export interface RepositorySummary {
  arn: string;
  provider: string;
  name: string;
  connectionArn: string;
}
export type RepositorySummaryList = Array<RepositorySummary>;
export interface RepositorySyncAttempt {
  startedAt: Date | string;
  status: string;
  events: Array<RepositorySyncEvent>;
}
export interface RepositorySyncDefinition {
  target: string;
  parent: string;
  branch: string;
  directory: string;
}
export type RepositorySyncDefinitionList = Array<RepositorySyncDefinition>;
export interface RepositorySyncEvent {
  type: string;
  externalId?: string;
  time: Date | string;
  event: string;
}
export type RepositorySyncEvents = Array<RepositorySyncEvent>;
export type RepositorySyncStatus = string;

export interface ResourceCountsSummary {
  total: number;
  failed?: number;
  upToDate?: number;
  behindMajor?: number;
  behindMinor?: number;
}
export type ResourceDeploymentStatus = string;

export type ResourceName = string;

export type ResourceNameOrEmpty = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export interface ResourceSyncAttempt {
  initialRevision: Revision;
  targetRevision: Revision;
  target: string;
  startedAt: Date | string;
  status: string;
  events: Array<ResourceSyncEvent>;
}
export interface ResourceSyncEvent {
  type: string;
  externalId?: string;
  time: Date | string;
  event: string;
}
export type ResourceSyncEvents = Array<ResourceSyncEvent>;
export type ResourceSyncStatus = string;

export interface Revision {
  repositoryName: string;
  repositoryProvider: string;
  sha: string;
  directory: string;
  branch: string;
}
export type RoleArn = string;

export type RoleArnOrEmptyString = string;

export type S3Bucket = string;

export type S3Key = string;

export interface S3ObjectSource {
  bucket: string;
  key: string;
}
export interface Service {
  name: string;
  description?: string;
  arn: string;
  templateName: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  status: string;
  statusMessage?: string;
  spec: string;
  pipeline?: ServicePipeline;
  repositoryConnectionArn?: string;
  repositoryId?: string;
  branchName?: string;
}
export type ServiceArn = string;

export interface ServiceInstance {
  name: string;
  arn: string;
  createdAt: Date | string;
  lastDeploymentAttemptedAt: Date | string;
  lastDeploymentSucceededAt: Date | string;
  serviceName: string;
  environmentName: string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion: string;
  deploymentStatus: string;
  deploymentStatusMessage?: string;
  spec?: string;
  lastClientRequestToken?: string;
  lastAttemptedDeploymentId?: string;
  lastSucceededDeploymentId?: string;
}
export type ServiceInstanceArn = string;

export interface ServiceInstanceState {
  spec: string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion: string;
  lastSuccessfulComponentDeploymentIds?: Array<string>;
  lastSuccessfulEnvironmentDeploymentId?: string;
  lastSuccessfulServicePipelineDeploymentId?: string;
}
export interface ServiceInstanceSummary {
  name: string;
  arn: string;
  createdAt: Date | string;
  lastDeploymentAttemptedAt: Date | string;
  lastDeploymentSucceededAt: Date | string;
  serviceName: string;
  environmentName: string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion: string;
  deploymentStatus: string;
  deploymentStatusMessage?: string;
  lastAttemptedDeploymentId?: string;
  lastSucceededDeploymentId?: string;
}
export type ServiceInstanceSummaryList = Array<ServiceInstanceSummary>;
export interface ServicePipeline {
  arn: string;
  createdAt: Date | string;
  lastDeploymentAttemptedAt: Date | string;
  lastDeploymentSucceededAt: Date | string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion: string;
  deploymentStatus: string;
  deploymentStatusMessage?: string;
  spec?: string;
  lastAttemptedDeploymentId?: string;
  lastSucceededDeploymentId?: string;
}
export interface ServicePipelineState {
  spec?: string;
  templateName: string;
  templateMajorVersion: string;
  templateMinorVersion: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type ServiceStatus = string;

export interface ServiceSummary {
  name: string;
  description?: string;
  arn: string;
  templateName: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  status: string;
  statusMessage?: string;
}
export type ServiceSummaryList = Array<ServiceSummary>;
export interface ServiceSyncBlockerSummary {
  serviceName: string;
  serviceInstanceName?: string;
  latestBlockers?: Array<SyncBlocker>;
}
export interface ServiceSyncConfig {
  serviceName: string;
  repositoryProvider: string;
  repositoryName: string;
  branch: string;
  filePath: string;
}
export interface ServiceTemplate {
  name: string;
  arn: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  displayName?: string;
  description?: string;
  recommendedVersion?: string;
  encryptionKey?: string;
  pipelineProvisioning?: string;
}
export type ServiceTemplateArn = string;

export interface ServiceTemplateSummary {
  name: string;
  arn: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  displayName?: string;
  description?: string;
  recommendedVersion?: string;
  pipelineProvisioning?: string;
}
export type ServiceTemplateSummaryList = Array<ServiceTemplateSummary>;
export type ServiceTemplateSupportedComponentSourceInputList = Array<string>;
export type ServiceTemplateSupportedComponentSourceType = string;

export interface ServiceTemplateVersion {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
  recommendedMinorVersion?: string;
  status: string;
  statusMessage?: string;
  description?: string;
  arn: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
  compatibleEnvironmentTemplates: Array<CompatibleEnvironmentTemplate>;
  schema?: string;
  supportedComponentSources?: Array<string>;
}
export type ServiceTemplateVersionArn = string;

export interface ServiceTemplateVersionSummary {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
  recommendedMinorVersion?: string;
  status: string;
  statusMessage?: string;
  description?: string;
  arn: string;
  createdAt: Date | string;
  lastModifiedAt: Date | string;
}
export type ServiceTemplateVersionSummaryList =
  Array<ServiceTemplateVersionSummary>;
export type SHA = string;

export type SortOrder = string;

export type SpecContents = string;

export type StatusMessage = string;

export type Subdirectory = string;

export interface SyncBlocker {
  id: string;
  type: string;
  status: string;
  createdReason: string;
  createdAt: Date | string;
  contexts?: Array<SyncBlockerContext>;
  resolvedReason?: string;
  resolvedAt?: Date | string;
}
export interface SyncBlockerContext {
  key: string;
  value: string;
}
export type SyncBlockerContexts = Array<SyncBlockerContext>;
export type SyncType = string;

export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type TemplateFileContents = string;

export type TemplateManifestContents = string;

export type TemplateSchema = string;

export interface TemplateSyncConfig {
  templateName: string;
  templateType: string;
  repositoryProvider: string;
  repositoryName: string;
  branch: string;
  subdirectory?: string;
}
export type TemplateType = string;

export type TemplateVersionPart = string;

interface _TemplateVersionSourceInput {
  s3?: S3ObjectSource;
}

export type TemplateVersionSourceInput = _TemplateVersionSourceInput & {
  s3: S3ObjectSource;
};
export type TemplateVersionStatus = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateAccountSettingsInput {
  pipelineServiceRoleArn?: string;
  pipelineProvisioningRepository?: RepositoryBranchInput;
  deletePipelineProvisioningRepository?: boolean;
  pipelineCodebuildRoleArn?: string;
}
export interface UpdateAccountSettingsOutput {
  accountSettings: AccountSettings;
}
export interface UpdateComponentInput {
  name: string;
  deploymentType: string;
  description?: string;
  serviceName?: string;
  serviceInstanceName?: string;
  serviceSpec?: string;
  templateFile?: string;
  clientToken?: string;
}
export interface UpdateComponentOutput {
  component: Component;
}
export interface UpdateEnvironmentAccountConnectionInput {
  id: string;
  roleArn?: string;
  componentRoleArn?: string;
  codebuildRoleArn?: string;
}
export interface UpdateEnvironmentAccountConnectionOutput {
  environmentAccountConnection: EnvironmentAccountConnection;
}
export interface UpdateEnvironmentInput {
  name: string;
  description?: string;
  spec?: string;
  templateMajorVersion?: string;
  templateMinorVersion?: string;
  protonServiceRoleArn?: string;
  deploymentType: string;
  environmentAccountConnectionId?: string;
  provisioningRepository?: RepositoryBranchInput;
  componentRoleArn?: string;
  codebuildRoleArn?: string;
}
export interface UpdateEnvironmentOutput {
  environment: Environment;
}
export interface UpdateEnvironmentTemplateInput {
  name: string;
  displayName?: string;
  description?: string;
}
export interface UpdateEnvironmentTemplateOutput {
  environmentTemplate: EnvironmentTemplate;
}
export interface UpdateEnvironmentTemplateVersionInput {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
  description?: string;
  status?: string;
}
export interface UpdateEnvironmentTemplateVersionOutput {
  environmentTemplateVersion: EnvironmentTemplateVersion;
}
export interface UpdateServiceInput {
  name: string;
  description?: string;
  spec?: string;
}
export interface UpdateServiceInstanceInput {
  name: string;
  serviceName: string;
  deploymentType: string;
  spec?: string;
  templateMajorVersion?: string;
  templateMinorVersion?: string;
  clientToken?: string;
}
export interface UpdateServiceInstanceOutput {
  serviceInstance: ServiceInstance;
}
export interface UpdateServiceOutput {
  service: Service;
}
export interface UpdateServicePipelineInput {
  serviceName: string;
  spec: string;
  deploymentType: string;
  templateMajorVersion?: string;
  templateMinorVersion?: string;
}
export interface UpdateServicePipelineOutput {
  pipeline: ServicePipeline;
}
export interface UpdateServiceSyncBlockerInput {
  id: string;
  resolvedReason: string;
}
export interface UpdateServiceSyncBlockerOutput {
  serviceName: string;
  serviceInstanceName?: string;
  serviceSyncBlocker: SyncBlocker;
}
export interface UpdateServiceSyncConfigInput {
  serviceName: string;
  repositoryProvider: string;
  repositoryName: string;
  branch: string;
  filePath: string;
}
export interface UpdateServiceSyncConfigOutput {
  serviceSyncConfig?: ServiceSyncConfig;
}
export interface UpdateServiceTemplateInput {
  name: string;
  displayName?: string;
  description?: string;
}
export interface UpdateServiceTemplateOutput {
  serviceTemplate: ServiceTemplate;
}
export interface UpdateServiceTemplateVersionInput {
  templateName: string;
  majorVersion: string;
  minorVersion: string;
  description?: string;
  status?: string;
  compatibleEnvironmentTemplates?: Array<CompatibleEnvironmentTemplateInput>;
  supportedComponentSources?: Array<string>;
}
export interface UpdateServiceTemplateVersionOutput {
  serviceTemplateVersion: ServiceTemplateVersion;
}
export interface UpdateTemplateSyncConfigInput {
  templateName: string;
  templateType: string;
  repositoryProvider: string;
  repositoryName: string;
  branch: string;
  subdirectory?: string;
}
export interface UpdateTemplateSyncConfigOutput {
  templateSyncConfig?: TemplateSyncConfig;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace CancelComponentDeployment {
  export type Input = CancelComponentDeploymentInput;
  export type Output = CancelComponentDeploymentOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelEnvironmentDeployment {
  export type Input = CancelEnvironmentDeploymentInput;
  export type Output = CancelEnvironmentDeploymentOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelServiceInstanceDeployment {
  export type Input = CancelServiceInstanceDeploymentInput;
  export type Output = CancelServiceInstanceDeploymentOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelServicePipelineDeployment {
  export type Input = CancelServicePipelineDeploymentInput;
  export type Output = CancelServicePipelineDeploymentOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRepositorySyncStatus {
  export type Input = GetRepositorySyncStatusInput;
  export type Output = GetRepositorySyncStatusOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcesSummary {
  export type Input = GetResourcesSummaryInput;
  export type Output = GetResourcesSummaryOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceInstanceSyncStatus {
  export type Input = GetServiceInstanceSyncStatusInput;
  export type Output = GetServiceInstanceSyncStatusOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTemplateSyncStatus {
  export type Input = GetTemplateSyncStatusInput;
  export type Output = GetTemplateSyncStatusOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRepositorySyncDefinitions {
  export type Input = ListRepositorySyncDefinitionsInput;
  export type Output = ListRepositorySyncDefinitionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace NotifyResourceDeploymentStatusChange {
  export type Input = NotifyResourceDeploymentStatusChangeInput;
  export type Output = NotifyResourceDeploymentStatusChangeOutput;
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

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
