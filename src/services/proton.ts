import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetResourcesSummaryInput extends S.Class<GetResourcesSummaryInput>("GetResourcesSummaryInput")({}) {}
export const TagKeyList = S.Array(S.String);
export class CancelComponentDeploymentInput extends S.Class<CancelComponentDeploymentInput>("CancelComponentDeploymentInput")({componentName: S.String}) {}
export class CancelEnvironmentDeploymentInput extends S.Class<CancelEnvironmentDeploymentInput>("CancelEnvironmentDeploymentInput")({environmentName: S.String}) {}
export class CancelServiceInstanceDeploymentInput extends S.Class<CancelServiceInstanceDeploymentInput>("CancelServiceInstanceDeploymentInput")({serviceInstanceName: S.String, serviceName: S.String}) {}
export class CancelServicePipelineDeploymentInput extends S.Class<CancelServicePipelineDeploymentInput>("CancelServicePipelineDeploymentInput")({serviceName: S.String}) {}
export class GetRepositorySyncStatusInput extends S.Class<GetRepositorySyncStatusInput>("GetRepositorySyncStatusInput")({repositoryName: S.String, repositoryProvider: S.String, branch: S.String, syncType: S.String}) {}
export class GetServiceInstanceSyncStatusInput extends S.Class<GetServiceInstanceSyncStatusInput>("GetServiceInstanceSyncStatusInput")({serviceName: S.String, serviceInstanceName: S.String}) {}
export class GetTemplateSyncStatusInput extends S.Class<GetTemplateSyncStatusInput>("GetTemplateSyncStatusInput")({templateName: S.String, templateType: S.String, templateVersion: S.String}) {}
export class ListRepositorySyncDefinitionsInput extends S.Class<ListRepositorySyncDefinitionsInput>("ListRepositorySyncDefinitionsInput")({repositoryName: S.String, repositoryProvider: S.String, syncType: S.String, nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export class Output extends S.Class<Output>("Output")({key: S.optional(S.String), valueString: S.optional(S.String)}) {}
export const OutputsList = S.Array(Output);
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class Revision extends S.Class<Revision>("Revision")({repositoryName: S.String, repositoryProvider: S.String, sha: S.String, directory: S.String, branch: S.String}) {}
export class ResourceSyncEvent extends S.Class<ResourceSyncEvent>("ResourceSyncEvent")({type: S.String, externalId: S.optional(S.String), time: S.Date, event: S.String}) {}
export const ResourceSyncEvents = S.Array(ResourceSyncEvent);
export class ResourceSyncAttempt extends S.Class<ResourceSyncAttempt>("ResourceSyncAttempt")({initialRevision: Revision, targetRevision: Revision, target: S.String, startedAt: S.Date, status: S.String, events: ResourceSyncEvents}) {}
export class GetTemplateSyncStatusOutput extends S.Class<GetTemplateSyncStatusOutput>("GetTemplateSyncStatusOutput")({latestSync: S.optional(ResourceSyncAttempt), latestSuccessfulSync: S.optional(ResourceSyncAttempt), desiredState: S.optional(Revision)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: TagList, nextToken: S.optional(S.String)}) {}
export class NotifyResourceDeploymentStatusChangeInput extends S.Class<NotifyResourceDeploymentStatusChangeInput>("NotifyResourceDeploymentStatusChangeInput")({resourceArn: S.String, status: S.optional(S.String), outputs: S.optional(OutputsList), deploymentId: S.optional(S.String), statusMessage: S.optional(S.String)}) {}
export class NotifyResourceDeploymentStatusChangeOutput extends S.Class<NotifyResourceDeploymentStatusChangeOutput>("NotifyResourceDeploymentStatusChangeOutput")({}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class ResourceCountsSummary extends S.Class<ResourceCountsSummary>("ResourceCountsSummary")({total: S.Number, failed: S.optional(S.Number), upToDate: S.optional(S.Number), behindMajor: S.optional(S.Number), behindMinor: S.optional(S.Number)}) {}
export class Component extends S.Class<Component>("Component")({name: S.String, description: S.optional(S.String), arn: S.String, environmentName: S.String, serviceName: S.optional(S.String), serviceInstanceName: S.optional(S.String), createdAt: S.Date, lastModifiedAt: S.Date, lastDeploymentAttemptedAt: S.optional(S.Date), lastDeploymentSucceededAt: S.optional(S.Date), deploymentStatus: S.String, deploymentStatusMessage: S.optional(S.String), serviceSpec: S.optional(S.String), lastClientRequestToken: S.optional(S.String), lastAttemptedDeploymentId: S.optional(S.String), lastSucceededDeploymentId: S.optional(S.String)}) {}
export class ServiceInstance extends S.Class<ServiceInstance>("ServiceInstance")({name: S.String, arn: S.String, createdAt: S.Date, lastDeploymentAttemptedAt: S.Date, lastDeploymentSucceededAt: S.Date, serviceName: S.String, environmentName: S.String, templateName: S.String, templateMajorVersion: S.String, templateMinorVersion: S.String, deploymentStatus: S.String, deploymentStatusMessage: S.optional(S.String), spec: S.optional(S.String), lastClientRequestToken: S.optional(S.String), lastAttemptedDeploymentId: S.optional(S.String), lastSucceededDeploymentId: S.optional(S.String)}) {}
export class ServicePipeline extends S.Class<ServicePipeline>("ServicePipeline")({arn: S.String, createdAt: S.Date, lastDeploymentAttemptedAt: S.Date, lastDeploymentSucceededAt: S.Date, templateName: S.String, templateMajorVersion: S.String, templateMinorVersion: S.String, deploymentStatus: S.String, deploymentStatusMessage: S.optional(S.String), spec: S.optional(S.String), lastAttemptedDeploymentId: S.optional(S.String), lastSucceededDeploymentId: S.optional(S.String)}) {}
export class CountsSummary extends S.Class<CountsSummary>("CountsSummary")({components: S.optional(ResourceCountsSummary), environments: S.optional(ResourceCountsSummary), environmentTemplates: S.optional(ResourceCountsSummary), serviceInstances: S.optional(ResourceCountsSummary), services: S.optional(ResourceCountsSummary), serviceTemplates: S.optional(ResourceCountsSummary), pipelines: S.optional(ResourceCountsSummary)}) {}
export class RepositorySyncDefinition extends S.Class<RepositorySyncDefinition>("RepositorySyncDefinition")({target: S.String, parent: S.String, branch: S.String, directory: S.String}) {}
export const RepositorySyncDefinitionList = S.Array(RepositorySyncDefinition);
export class CancelComponentDeploymentOutput extends S.Class<CancelComponentDeploymentOutput>("CancelComponentDeploymentOutput")({component: Component}) {}
export class CancelServiceInstanceDeploymentOutput extends S.Class<CancelServiceInstanceDeploymentOutput>("CancelServiceInstanceDeploymentOutput")({serviceInstance: ServiceInstance}) {}
export class CancelServicePipelineDeploymentOutput extends S.Class<CancelServicePipelineDeploymentOutput>("CancelServicePipelineDeploymentOutput")({pipeline: ServicePipeline}) {}
export class GetResourcesSummaryOutput extends S.Class<GetResourcesSummaryOutput>("GetResourcesSummaryOutput")({counts: CountsSummary}) {}
export class ListRepositorySyncDefinitionsOutput extends S.Class<ListRepositorySyncDefinitionsOutput>("ListRepositorySyncDefinitionsOutput")({nextToken: S.optional(S.String), syncDefinitions: RepositorySyncDefinitionList}) {}
export class RepositoryBranch extends S.Class<RepositoryBranch>("RepositoryBranch")({arn: S.String, provider: S.String, name: S.String, branch: S.String}) {}
export class RepositorySyncEvent extends S.Class<RepositorySyncEvent>("RepositorySyncEvent")({type: S.String, externalId: S.optional(S.String), time: S.Date, event: S.String}) {}
export const RepositorySyncEvents = S.Array(RepositorySyncEvent);
export class Environment extends S.Class<Environment>("Environment")({name: S.String, description: S.optional(S.String), createdAt: S.Date, lastDeploymentAttemptedAt: S.Date, lastDeploymentSucceededAt: S.Date, arn: S.String, templateName: S.String, templateMajorVersion: S.String, templateMinorVersion: S.String, deploymentStatus: S.String, deploymentStatusMessage: S.optional(S.String), protonServiceRoleArn: S.optional(S.String), environmentAccountConnectionId: S.optional(S.String), environmentAccountId: S.optional(S.String), spec: S.optional(S.String), provisioning: S.optional(S.String), provisioningRepository: S.optional(RepositoryBranch), componentRoleArn: S.optional(S.String), codebuildRoleArn: S.optional(S.String), lastAttemptedDeploymentId: S.optional(S.String), lastSucceededDeploymentId: S.optional(S.String)}) {}
export class RepositorySyncAttempt extends S.Class<RepositorySyncAttempt>("RepositorySyncAttempt")({startedAt: S.Date, status: S.String, events: RepositorySyncEvents}) {}
export class CancelEnvironmentDeploymentOutput extends S.Class<CancelEnvironmentDeploymentOutput>("CancelEnvironmentDeploymentOutput")({environment: Environment}) {}
export class GetRepositorySyncStatusOutput extends S.Class<GetRepositorySyncStatusOutput>("GetRepositorySyncStatusOutput")({latestSync: S.optional(RepositorySyncAttempt)}) {}
export class GetServiceInstanceSyncStatusOutput extends S.Class<GetServiceInstanceSyncStatusOutput>("GetServiceInstanceSyncStatusOutput")({latestSync: S.optional(ResourceSyncAttempt), latestSuccessfulSync: S.optional(ResourceSyncAttempt), desiredState: S.optional(Revision)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String}) {};

//# Operations
/**
 * Attempts to cancel a component deployment (for a component that is in the `IN_PROGRESS` deployment status).
 * 
 * For more information about components, see
 * Proton components in the
 * *Proton User Guide*.
 */export const cancelComponentDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.CancelComponentDeployment" }, CancelComponentDeploymentInput, CancelComponentDeploymentOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attempts to cancel a service instance deployment on an UpdateServiceInstance action, if the deployment is `IN_PROGRESS`. For
 * more information, see Update a service instance
 * in the *Proton User guide*.
 * 
 * The following list includes potential cancellation scenarios.
 * 
 * - If the cancellation attempt succeeds, the resulting deployment state is
 * `CANCELLED`.
 * 
 * - If the cancellation attempt fails, the resulting deployment state is
 * `FAILED`.
 * 
 * - If the current UpdateServiceInstance action succeeds before the
 * cancellation attempt starts, the resulting deployment state is `SUCCEEDED` and
 * the cancellation attempt has no effect.
 */export const cancelServiceInstanceDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.CancelServiceInstanceDeployment" }, CancelServiceInstanceDeploymentInput, CancelServiceInstanceDeploymentOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attempts to cancel a service pipeline deployment on an UpdateServicePipeline action, if the deployment is `IN_PROGRESS`. For
 * more information, see Update a service pipeline
 * in the *Proton User guide*.
 * 
 * The following list includes potential cancellation scenarios.
 * 
 * - If the cancellation attempt succeeds, the resulting deployment state is
 * `CANCELLED`.
 * 
 * - If the cancellation attempt fails, the resulting deployment state is
 * `FAILED`.
 * 
 * - If the current UpdateServicePipeline action succeeds before the
 * cancellation attempt starts, the resulting deployment state is `SUCCEEDED` and
 * the cancellation attempt has no effect.
 */export const cancelServicePipelineDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.CancelServicePipelineDeployment" }, CancelServicePipelineDeploymentInput, CancelServicePipelineDeploymentOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get counts of Proton resources.
 * 
 * For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A
 * resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.
 * 
 * The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor
 * version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components,
 * environments, and service templates return less information - see the `components`, `environments`, and
 * `serviceTemplates` field descriptions.
 * 
 * For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.
 * 
 * For more information, see Proton dashboard in the
 * *Proton User Guide*.
 */export const getResourcesSummary = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.GetResourcesSummary" }, GetResourcesSummaryInput, GetResourcesSummaryOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the status of a template sync.
 */export const getTemplateSyncStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.GetTemplateSyncStatus" }, GetTemplateSyncStatusInput, GetTemplateSyncStatusOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List repository sync definitions with detail data.
 */export const listRepositorySyncDefinitions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.ListRepositorySyncDefinitions" }, ListRepositorySyncDefinitionsInput, ListRepositorySyncDefinitionsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List tags for a resource. For more information, see Proton
 * resources and tagging in the *Proton User Guide*.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource.
 * 
 * For more information, see Proton resources and tagging in
 * the *Proton User Guide*.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.TagResource" }, TagResourceInput, TagResourceOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource.
 * 
 * For more information, see Proton resources and tagging in
 * the *Proton User Guide*.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.UntagResource" }, UntagResourceInput, UntagResourceOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attempts to cancel an environment deployment on an UpdateEnvironment action, if the deployment is `IN_PROGRESS`. For more
 * information, see Update an environment in the Proton
 * User guide.
 * 
 * The following list includes potential cancellation scenarios.
 * 
 * - If the cancellation attempt succeeds, the resulting deployment state is `CANCELLED`.
 * 
 * - If the cancellation attempt fails, the resulting deployment state is `FAILED`.
 * 
 * - If the current UpdateEnvironment action succeeds before the cancellation attempt starts, the resulting deployment state is
 * `SUCCEEDED` and the cancellation attempt has no effect.
 */export const cancelEnvironmentDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.CancelEnvironmentDeployment" }, CancelEnvironmentDeploymentInput, CancelEnvironmentDeploymentOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the sync status of a repository used for Proton template sync. For more information about template sync, see .
 * 
 * A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource
 * have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control
 * (ABAC).
 * 
 * For more information about ABAC, see ABAC in the Proton User
 * Guide.
 */export const getRepositorySyncStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.GetRepositorySyncStatus" }, GetRepositorySyncStatusInput, GetRepositorySyncStatusOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the status of the synced service instance.
 */export const getServiceInstanceSyncStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.GetServiceInstanceSyncStatus" }, GetServiceInstanceSyncStatusInput, GetServiceInstanceSyncStatusOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.
 * 
 * For more information, see Self-managed provisioning in the *Proton User Guide*.
 */export const notifyResourceDeploymentStatusChange = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-20", sdkId: "Proton", sigV4ServiceName: "proton", name: "AwsProton20200720.NotifyResourceDeploymentStatusChange" }, NotifyResourceDeploymentStatusChangeInput, NotifyResourceDeploymentStatusChangeOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
