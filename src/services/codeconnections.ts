import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateRepositoryLinkInput extends S.Class<CreateRepositoryLinkInput>("CreateRepositoryLinkInput")({ConnectionArn: S.String, OwnerId: S.String, RepositoryName: S.String, EncryptionKeyArn: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateSyncConfigurationInput extends S.Class<CreateSyncConfigurationInput>("CreateSyncConfigurationInput")({Branch: S.String, ConfigFile: S.String, RepositoryLinkId: S.String, ResourceName: S.String, RoleArn: S.String, SyncType: S.String, PublishDeploymentStatus: S.optional(S.String), TriggerResourceUpdateOn: S.optional(S.String), PullRequestComment: S.optional(S.String)}) {}
export class DeleteConnectionInput extends S.Class<DeleteConnectionInput>("DeleteConnectionInput")({ConnectionArn: S.String}) {}
export class DeleteConnectionOutput extends S.Class<DeleteConnectionOutput>("DeleteConnectionOutput")({}) {}
export class DeleteHostInput extends S.Class<DeleteHostInput>("DeleteHostInput")({HostArn: S.String}) {}
export class DeleteHostOutput extends S.Class<DeleteHostOutput>("DeleteHostOutput")({}) {}
export class DeleteRepositoryLinkInput extends S.Class<DeleteRepositoryLinkInput>("DeleteRepositoryLinkInput")({RepositoryLinkId: S.String}) {}
export class DeleteRepositoryLinkOutput extends S.Class<DeleteRepositoryLinkOutput>("DeleteRepositoryLinkOutput")({}) {}
export class DeleteSyncConfigurationInput extends S.Class<DeleteSyncConfigurationInput>("DeleteSyncConfigurationInput")({SyncType: S.String, ResourceName: S.String}) {}
export class DeleteSyncConfigurationOutput extends S.Class<DeleteSyncConfigurationOutput>("DeleteSyncConfigurationOutput")({}) {}
export class GetConnectionInput extends S.Class<GetConnectionInput>("GetConnectionInput")({ConnectionArn: S.String}) {}
export class GetHostInput extends S.Class<GetHostInput>("GetHostInput")({HostArn: S.String}) {}
export class GetRepositoryLinkInput extends S.Class<GetRepositoryLinkInput>("GetRepositoryLinkInput")({RepositoryLinkId: S.String}) {}
export class GetRepositorySyncStatusInput extends S.Class<GetRepositorySyncStatusInput>("GetRepositorySyncStatusInput")({Branch: S.String, RepositoryLinkId: S.String, SyncType: S.String}) {}
export class GetResourceSyncStatusInput extends S.Class<GetResourceSyncStatusInput>("GetResourceSyncStatusInput")({ResourceName: S.String, SyncType: S.String}) {}
export class GetSyncBlockerSummaryInput extends S.Class<GetSyncBlockerSummaryInput>("GetSyncBlockerSummaryInput")({SyncType: S.String, ResourceName: S.String}) {}
export class GetSyncConfigurationInput extends S.Class<GetSyncConfigurationInput>("GetSyncConfigurationInput")({SyncType: S.String, ResourceName: S.String}) {}
export class ListConnectionsInput extends S.Class<ListConnectionsInput>("ListConnectionsInput")({ProviderTypeFilter: S.optional(S.String), HostArnFilter: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListHostsInput extends S.Class<ListHostsInput>("ListHostsInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListRepositoryLinksInput extends S.Class<ListRepositoryLinksInput>("ListRepositoryLinksInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListRepositorySyncDefinitionsInput extends S.Class<ListRepositorySyncDefinitionsInput>("ListRepositorySyncDefinitionsInput")({RepositoryLinkId: S.String, SyncType: S.String}) {}
export class ListSyncConfigurationsInput extends S.Class<ListSyncConfigurationsInput>("ListSyncConfigurationsInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), RepositoryLinkId: S.String, SyncType: S.String}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({ResourceArn: S.String}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const SubnetIds = S.Array(S.String);
export const SecurityGroupIds = S.Array(S.String);
export class VpcConfiguration extends S.Class<VpcConfiguration>("VpcConfiguration")({VpcId: S.String, SubnetIds: SubnetIds, SecurityGroupIds: SecurityGroupIds, TlsCertificate: S.optional(S.String)}) {}
export class UpdateHostInput extends S.Class<UpdateHostInput>("UpdateHostInput")({HostArn: S.String, ProviderEndpoint: S.optional(S.String), VpcConfiguration: S.optional(VpcConfiguration)}) {}
export class UpdateHostOutput extends S.Class<UpdateHostOutput>("UpdateHostOutput")({}) {}
export class UpdateRepositoryLinkInput extends S.Class<UpdateRepositoryLinkInput>("UpdateRepositoryLinkInput")({ConnectionArn: S.optional(S.String), EncryptionKeyArn: S.optional(S.String), RepositoryLinkId: S.String}) {}
export class UpdateSyncBlockerInput extends S.Class<UpdateSyncBlockerInput>("UpdateSyncBlockerInput")({Id: S.String, SyncType: S.String, ResourceName: S.String, ResolvedReason: S.String}) {}
export class UpdateSyncConfigurationInput extends S.Class<UpdateSyncConfigurationInput>("UpdateSyncConfigurationInput")({Branch: S.optional(S.String), ConfigFile: S.optional(S.String), RepositoryLinkId: S.optional(S.String), ResourceName: S.String, RoleArn: S.optional(S.String), SyncType: S.String, PublishDeploymentStatus: S.optional(S.String), TriggerResourceUpdateOn: S.optional(S.String), PullRequestComment: S.optional(S.String)}) {}
export class Connection extends S.Class<Connection>("Connection")({ConnectionName: S.optional(S.String), ConnectionArn: S.optional(S.String), ProviderType: S.optional(S.String), OwnerAccountId: S.optional(S.String), ConnectionStatus: S.optional(S.String), HostArn: S.optional(S.String)}) {}
export const ConnectionList = S.Array(Connection);
export class RepositoryLinkInfo extends S.Class<RepositoryLinkInfo>("RepositoryLinkInfo")({ConnectionArn: S.String, EncryptionKeyArn: S.optional(S.String), OwnerId: S.String, ProviderType: S.String, RepositoryLinkArn: S.String, RepositoryLinkId: S.String, RepositoryName: S.String}) {}
export const RepositoryLinkList = S.Array(RepositoryLinkInfo);
export class SyncConfiguration extends S.Class<SyncConfiguration>("SyncConfiguration")({Branch: S.String, ConfigFile: S.optional(S.String), OwnerId: S.String, ProviderType: S.String, RepositoryLinkId: S.String, RepositoryName: S.String, ResourceName: S.String, RoleArn: S.String, SyncType: S.String, PublishDeploymentStatus: S.optional(S.String), TriggerResourceUpdateOn: S.optional(S.String), PullRequestComment: S.optional(S.String)}) {}
export const SyncConfigurationList = S.Array(SyncConfiguration);
export class CreateConnectionInput extends S.Class<CreateConnectionInput>("CreateConnectionInput")({ProviderType: S.optional(S.String), ConnectionName: S.String, Tags: S.optional(TagList), HostArn: S.optional(S.String)}) {}
export class CreateHostInput extends S.Class<CreateHostInput>("CreateHostInput")({Name: S.String, ProviderType: S.String, ProviderEndpoint: S.String, VpcConfiguration: S.optional(VpcConfiguration), Tags: S.optional(TagList)}) {}
export class GetHostOutput extends S.Class<GetHostOutput>("GetHostOutput")({Name: S.optional(S.String), Status: S.optional(S.String), ProviderType: S.optional(S.String), ProviderEndpoint: S.optional(S.String), VpcConfiguration: S.optional(VpcConfiguration)}) {}
export class GetRepositoryLinkOutput extends S.Class<GetRepositoryLinkOutput>("GetRepositoryLinkOutput")({RepositoryLinkInfo: RepositoryLinkInfo}) {}
export class GetSyncConfigurationOutput extends S.Class<GetSyncConfigurationOutput>("GetSyncConfigurationOutput")({SyncConfiguration: SyncConfiguration}) {}
export class ListConnectionsOutput extends S.Class<ListConnectionsOutput>("ListConnectionsOutput")({Connections: S.optional(ConnectionList), NextToken: S.optional(S.String)}) {}
export class ListRepositoryLinksOutput extends S.Class<ListRepositoryLinksOutput>("ListRepositoryLinksOutput")({RepositoryLinks: RepositoryLinkList, NextToken: S.optional(S.String)}) {}
export class ListSyncConfigurationsOutput extends S.Class<ListSyncConfigurationsOutput>("ListSyncConfigurationsOutput")({SyncConfigurations: SyncConfigurationList, NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: S.optional(TagList)}) {}
export class UpdateRepositoryLinkOutput extends S.Class<UpdateRepositoryLinkOutput>("UpdateRepositoryLinkOutput")({RepositoryLinkInfo: RepositoryLinkInfo}) {}
export class UpdateSyncConfigurationOutput extends S.Class<UpdateSyncConfigurationOutput>("UpdateSyncConfigurationOutput")({SyncConfiguration: SyncConfiguration}) {}
export class SyncBlockerContext extends S.Class<SyncBlockerContext>("SyncBlockerContext")({Key: S.String, Value: S.String}) {}
export const SyncBlockerContextList = S.Array(SyncBlockerContext);
export class SyncBlocker extends S.Class<SyncBlocker>("SyncBlocker")({Id: S.String, Type: S.String, Status: S.String, CreatedReason: S.String, CreatedAt: S.Date, Contexts: S.optional(SyncBlockerContextList), ResolvedReason: S.optional(S.String), ResolvedAt: S.optional(S.Date)}) {}
export const LatestSyncBlockerList = S.Array(SyncBlocker);
export class Revision extends S.Class<Revision>("Revision")({Branch: S.String, Directory: S.String, OwnerId: S.String, RepositoryName: S.String, ProviderType: S.String, Sha: S.String}) {}
export class SyncBlockerSummary extends S.Class<SyncBlockerSummary>("SyncBlockerSummary")({ResourceName: S.String, ParentResourceName: S.optional(S.String), LatestBlockers: S.optional(LatestSyncBlockerList)}) {}
export class Host extends S.Class<Host>("Host")({Name: S.optional(S.String), HostArn: S.optional(S.String), ProviderType: S.optional(S.String), ProviderEndpoint: S.optional(S.String), VpcConfiguration: S.optional(VpcConfiguration), Status: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export const HostList = S.Array(Host);
export class RepositorySyncDefinition extends S.Class<RepositorySyncDefinition>("RepositorySyncDefinition")({Branch: S.String, Directory: S.String, Parent: S.String, Target: S.String}) {}
export const RepositorySyncDefinitionList = S.Array(RepositorySyncDefinition);
export class CreateConnectionOutput extends S.Class<CreateConnectionOutput>("CreateConnectionOutput")({ConnectionArn: S.String, Tags: S.optional(TagList)}) {}
export class CreateHostOutput extends S.Class<CreateHostOutput>("CreateHostOutput")({HostArn: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateRepositoryLinkOutput extends S.Class<CreateRepositoryLinkOutput>("CreateRepositoryLinkOutput")({RepositoryLinkInfo: RepositoryLinkInfo}) {}
export class CreateSyncConfigurationOutput extends S.Class<CreateSyncConfigurationOutput>("CreateSyncConfigurationOutput")({SyncConfiguration: SyncConfiguration}) {}
export class GetConnectionOutput extends S.Class<GetConnectionOutput>("GetConnectionOutput")({Connection: S.optional(Connection)}) {}
export class GetSyncBlockerSummaryOutput extends S.Class<GetSyncBlockerSummaryOutput>("GetSyncBlockerSummaryOutput")({SyncBlockerSummary: SyncBlockerSummary}) {}
export class ListHostsOutput extends S.Class<ListHostsOutput>("ListHostsOutput")({Hosts: S.optional(HostList), NextToken: S.optional(S.String)}) {}
export class ListRepositorySyncDefinitionsOutput extends S.Class<ListRepositorySyncDefinitionsOutput>("ListRepositorySyncDefinitionsOutput")({RepositorySyncDefinitions: RepositorySyncDefinitionList, NextToken: S.optional(S.String)}) {}
export class RepositorySyncEvent extends S.Class<RepositorySyncEvent>("RepositorySyncEvent")({Event: S.String, ExternalId: S.optional(S.String), Time: S.Date, Type: S.String}) {}
export const RepositorySyncEventList = S.Array(RepositorySyncEvent);
export class ResourceSyncEvent extends S.Class<ResourceSyncEvent>("ResourceSyncEvent")({Event: S.String, ExternalId: S.optional(S.String), Time: S.Date, Type: S.String}) {}
export const ResourceSyncEventList = S.Array(ResourceSyncEvent);
export class RepositorySyncAttempt extends S.Class<RepositorySyncAttempt>("RepositorySyncAttempt")({StartedAt: S.Date, Status: S.String, Events: RepositorySyncEventList}) {}
export class ResourceSyncAttempt extends S.Class<ResourceSyncAttempt>("ResourceSyncAttempt")({Events: ResourceSyncEventList, InitialRevision: Revision, StartedAt: S.Date, Status: S.String, TargetRevision: Revision, Target: S.String}) {}
export class GetRepositorySyncStatusOutput extends S.Class<GetRepositorySyncStatusOutput>("GetRepositorySyncStatusOutput")({LatestSync: RepositorySyncAttempt}) {}
export class GetResourceSyncStatusOutput extends S.Class<GetResourceSyncStatusOutput>("GetResourceSyncStatusOutput")({DesiredState: S.optional(Revision), LatestSuccessfulSync: S.optional(ResourceSyncAttempt), LatestSync: ResourceSyncAttempt}) {}
export class UpdateSyncBlockerOutput extends S.Class<UpdateSyncBlockerOutput>("UpdateSyncBlockerOutput")({ResourceName: S.String, ParentResourceName: S.optional(S.String), SyncBlocker: SyncBlocker}) {}

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ResourceUnavailableException extends S.TaggedError<ResourceUnavailableException>()("ResourceUnavailableException", {Message: S.optional(S.String)}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class InvalidInputException extends S.TaggedError<InvalidInputException>()("InvalidInputException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {Message: S.optional(S.String)}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String)}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {}) {};
export class UnsupportedOperationException extends S.TaggedError<UnsupportedOperationException>()("UnsupportedOperationException", {Message: S.optional(S.String)}) {};
export class ConditionalCheckFailedException extends S.TaggedError<ConditionalCheckFailedException>()("ConditionalCheckFailedException", {Message: S.optional(S.String)}) {};
export class UpdateOutOfSyncException extends S.TaggedError<UpdateOutOfSyncException>()("UpdateOutOfSyncException", {}) {};
export class SyncConfigurationStillExistsException extends S.TaggedError<SyncConfigurationStillExistsException>()("SyncConfigurationStillExistsException", {Message: S.optional(S.String)}) {};
export class UnsupportedProviderTypeException extends S.TaggedError<UnsupportedProviderTypeException>()("UnsupportedProviderTypeException", {Message: S.optional(S.String)}) {};
export class RetryLatestCommitFailedException extends S.TaggedError<RetryLatestCommitFailedException>()("RetryLatestCommitFailedException", {Message: S.optional(S.String)}) {};
export class SyncBlockerDoesNotExistException extends S.TaggedError<SyncBlockerDoesNotExistException>()("SyncBlockerDoesNotExistException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Removes tags from an Amazon Web Services resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The connection to be deleted.
 */export const deleteConnection = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.DeleteConnection" }, DeleteConnectionInput, DeleteConnectionOutput, [ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.
 * 
 * 
 * 
 * 
 * A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.
 */export const deleteHost = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.DeleteHost" }, DeleteHostInput, DeleteHostOutput, [ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the host ARN and details such as status, provider type, endpoint, and, if
 * applicable, the VPC configuration.
 */export const getHost = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.GetHost" }, GetHostInput, GetHostOutput, [ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details about a sync configuration, including the sync type and resource name. A sync configuration allows the configuration to sync (push and pull) changes from the remote repository for a specified branch in a Git repository.
 */export const getSyncConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.GetSyncConfiguration" }, GetSyncConfigurationInput, GetSyncConfigurationOutput, [AccessDeniedException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the connections associated with your account.
 */export const listConnections = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.ListConnections" }, ListConnectionsInput, ListConnectionsOutput, [ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the repository links created for connections in your account.
 */export const listRepositoryLinks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.ListRepositoryLinks" }, ListRepositoryLinksInput, ListRepositoryLinksOutput, [AccessDeniedException, ConcurrentModificationException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of sync configurations for a specified repository.
 */export const listSyncConfigurations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.ListSyncConfigurations" }, ListSyncConfigurationsInput, ListSyncConfigurationsOutput, [AccessDeniedException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the set of key-value pairs (metadata) that are used to manage the resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used
 * to manage a resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.TagResource" }, TagResourceInput, TagResourceOutput, [LimitExceededException, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a connection that can then be given to other Amazon Web Services services like CodePipeline so
 * that it can access third-party code repositories. The connection is in pending status until
 * the third-party connection handshake is completed from the console.
 */export const createConnection = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.CreateConnection" }, CreateConnectionInput, CreateConnectionOutput, [LimitExceededException, ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a resource that represents the infrastructure where a third-party provider is
 * installed. The host is used when you create connections to an installed third-party provider
 * type, such as GitHub Enterprise Server. You create one host for all connections to that
 * provider.
 * 
 * 
 * 
 * 
 * A host created through the CLI or the SDK is in `PENDING` status by
 * default. You can make its status `AVAILABLE` by setting up the host in the console.
 */export const createHost = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.CreateHost" }, CreateHostInput, CreateHostOutput, [LimitExceededException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a sync configuration which allows Amazon Web Services to sync content from a Git
 * repository to update a specified Amazon Web Services resource. Parameters for the sync
 * configuration are determined by the sync type.
 */export const createSyncConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.CreateSyncConfiguration" }, CreateSyncConfigurationInput, CreateSyncConfigurationOutput, [AccessDeniedException, ConcurrentModificationException, InternalServerException, InvalidInputException, LimitExceededException, ResourceAlreadyExistsException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the sync configuration for a specified repository and connection.
 */export const deleteSyncConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.DeleteSyncConfiguration" }, DeleteSyncConfigurationInput, DeleteSyncConfigurationOutput, [AccessDeniedException, ConcurrentModificationException, InternalServerException, InvalidInputException, LimitExceededException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the connection ARN and details such as status, owner, and provider type.
 */export const getConnection = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.GetConnection" }, GetConnectionInput, GetConnectionOutput, [ResourceNotFoundException, ResourceUnavailableException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details about a repository link. A repository link allows Git sync to monitor
 * and sync changes from files in a specified Git repository.
 */export const getRepositoryLink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.GetRepositoryLink" }, GetRepositoryLinkInput, GetRepositoryLinkOutput, [AccessDeniedException, ConcurrentModificationException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the most recent sync blockers.
 */export const getSyncBlockerSummary = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.GetSyncBlockerSummary" }, GetSyncBlockerSummaryInput, GetSyncBlockerSummaryOutput, [AccessDeniedException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the hosts associated with your account.
 */export const listHosts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.ListHosts" }, ListHostsInput, ListHostsOutput, []), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the repository sync definitions for repository links in your account.
 */export const listRepositorySyncDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.ListRepositorySyncDefinitions" }, ListRepositorySyncDefinitionsInput, ListRepositorySyncDefinitionsOutput, [AccessDeniedException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a specified host with the provided configurations.
 */export const updateHost = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.UpdateHost" }, UpdateHostInput, UpdateHostOutput, [ConflictException, ResourceNotFoundException, ResourceUnavailableException, UnsupportedOperationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the association between your connection and a specified external Git repository.
 * A repository link allows Git sync to monitor and sync changes to files in a specified Git
 * repository.
 */export const updateRepositoryLink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.UpdateRepositoryLink" }, UpdateRepositoryLinkInput, UpdateRepositoryLinkOutput, [AccessDeniedException, ConditionalCheckFailedException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException, UpdateOutOfSyncException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the sync configuration for your connection and a specified external Git repository.
 */export const updateSyncConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.UpdateSyncConfiguration" }, UpdateSyncConfigurationInput, UpdateSyncConfigurationOutput, [AccessDeniedException, ConcurrentModificationException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException, UpdateOutOfSyncException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a link to a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
 */export const createRepositoryLink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.CreateRepositoryLink" }, CreateRepositoryLinkInput, CreateRepositoryLinkOutput, [AccessDeniedException, ConcurrentModificationException, InternalServerException, InvalidInputException, LimitExceededException, ResourceAlreadyExistsException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details about the sync status for a repository. A repository sync uses Git sync
 * to push and pull changes from your remote repository.
 */export const getRepositorySyncStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.GetRepositorySyncStatus" }, GetRepositorySyncStatusInput, GetRepositorySyncStatusOutput, [AccessDeniedException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the status of the sync with the Git repository for a specific Amazon Web Services
 * resource.
 */export const getResourceSyncStatus = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.GetResourceSyncStatus" }, GetResourceSyncStatusInput, GetResourceSyncStatusOutput, [AccessDeniedException, InternalServerException, InvalidInputException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the association between your connection and a specified external Git repository.
 */export const deleteRepositoryLink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.DeleteRepositoryLink" }, DeleteRepositoryLinkInput, DeleteRepositoryLinkOutput, [AccessDeniedException, ConcurrentModificationException, InternalServerException, InvalidInputException, ResourceNotFoundException, SyncConfigurationStillExistsException, ThrottlingException, UnsupportedProviderTypeException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows you to update the status of a sync blocker, resolving the blocker and allowing syncing to continue.
 */export const updateSyncBlocker = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-12-01", uri: "/", method: "POST", sdkId: "CodeConnections", sigV4ServiceName: "codeconnections", name: "CodeConnections_20231201.UpdateSyncBlocker" }, UpdateSyncBlockerInput, UpdateSyncBlockerOutput, [AccessDeniedException, InternalServerException, InvalidInputException, ResourceNotFoundException, RetryLatestCommitFailedException, SyncBlockerDoesNotExistException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
