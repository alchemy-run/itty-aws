import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ResourceArnList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class CancelTagSyncTaskInput extends S.Class<CancelTagSyncTaskInput>("CancelTagSyncTaskInput")({TaskArn: S.String}) {}
export class DeleteGroupInput extends S.Class<DeleteGroupInput>("DeleteGroupInput")({GroupName: S.optional(S.String), Group: S.optional(S.String)}) {}
export class GetGroupInput extends S.Class<GetGroupInput>("GetGroupInput")({GroupName: S.optional(S.String), Group: S.optional(S.String)}) {}
export class GetGroupConfigurationInput extends S.Class<GetGroupConfigurationInput>("GetGroupConfigurationInput")({Group: S.optional(S.String)}) {}
export class GetGroupQueryInput extends S.Class<GetGroupQueryInput>("GetGroupQueryInput")({GroupName: S.optional(S.String), Group: S.optional(S.String)}) {}
export class GetTagsInput extends S.Class<GetTagsInput>("GetTagsInput")({Arn: S.String}) {}
export class GetTagSyncTaskInput extends S.Class<GetTagSyncTaskInput>("GetTagSyncTaskInput")({TaskArn: S.String}) {}
export class GroupResourcesInput extends S.Class<GroupResourcesInput>("GroupResourcesInput")({Group: S.String, ResourceArns: ResourceArnList}) {}
export const GroupConfigurationParameterValueList = S.Array(S.String);
export class GroupConfigurationParameter extends S.Class<GroupConfigurationParameter>("GroupConfigurationParameter")({Name: S.String, Values: S.optional(GroupConfigurationParameterValueList)}) {}
export const GroupParameterList = S.Array(GroupConfigurationParameter);
export class GroupConfigurationItem extends S.Class<GroupConfigurationItem>("GroupConfigurationItem")({Type: S.String, Parameters: S.optional(GroupParameterList)}) {}
export const GroupConfigurationList = S.Array(GroupConfigurationItem);
export class PutGroupConfigurationInput extends S.Class<PutGroupConfigurationInput>("PutGroupConfigurationInput")({Group: S.optional(S.String), Configuration: S.optional(GroupConfigurationList)}) {}
export class PutGroupConfigurationOutput extends S.Class<PutGroupConfigurationOutput>("PutGroupConfigurationOutput")({}) {}
export class ResourceQuery extends S.Class<ResourceQuery>("ResourceQuery")({Type: S.String, Query: S.String}) {}
export class SearchResourcesInput extends S.Class<SearchResourcesInput>("SearchResourcesInput")({ResourceQuery: ResourceQuery, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class StartTagSyncTaskInput extends S.Class<StartTagSyncTaskInput>("StartTagSyncTaskInput")({Group: S.String, TagKey: S.optional(S.String), TagValue: S.optional(S.String), ResourceQuery: S.optional(ResourceQuery), RoleArn: S.String}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class TagInput extends S.Class<TagInput>("TagInput")({Arn: S.String, Tags: Tags}) {}
export class UngroupResourcesInput extends S.Class<UngroupResourcesInput>("UngroupResourcesInput")({Group: S.String, ResourceArns: ResourceArnList}) {}
export class UntagInput extends S.Class<UntagInput>("UntagInput")({Arn: S.String, Keys: TagKeyList}) {}
export class UpdateAccountSettingsInput extends S.Class<UpdateAccountSettingsInput>("UpdateAccountSettingsInput")({GroupLifecycleEventsDesiredStatus: S.optional(S.String)}) {}
export class UpdateGroupInput extends S.Class<UpdateGroupInput>("UpdateGroupInput")({GroupName: S.optional(S.String), Group: S.optional(S.String), Description: S.optional(S.String), Criticality: S.optional(S.Number), Owner: S.optional(S.String), DisplayName: S.optional(S.String)}) {}
export class UpdateGroupQueryInput extends S.Class<UpdateGroupQueryInput>("UpdateGroupQueryInput")({GroupName: S.optional(S.String), Group: S.optional(S.String), ResourceQuery: ResourceQuery}) {}
export const ListGroupingStatusesFilterValues = S.Array(S.String);
export const ResourceFilterValues = S.Array(S.String);
export const GroupFilterValues = S.Array(S.String);
export class AccountSettings extends S.Class<AccountSettings>("AccountSettings")({GroupLifecycleEventsDesiredStatus: S.optional(S.String), GroupLifecycleEventsStatus: S.optional(S.String), GroupLifecycleEventsStatusMessage: S.optional(S.String)}) {}
export class ListGroupingStatusesFilter extends S.Class<ListGroupingStatusesFilter>("ListGroupingStatusesFilter")({Name: S.String, Values: ListGroupingStatusesFilterValues}) {}
export const ListGroupingStatusesFilterList = S.Array(ListGroupingStatusesFilter);
export class ResourceFilter extends S.Class<ResourceFilter>("ResourceFilter")({Name: S.String, Values: ResourceFilterValues}) {}
export const ResourceFilterList = S.Array(ResourceFilter);
export class GroupFilter extends S.Class<GroupFilter>("GroupFilter")({Name: S.String, Values: GroupFilterValues}) {}
export const GroupFilterList = S.Array(GroupFilter);
export class ListTagSyncTasksFilter extends S.Class<ListTagSyncTasksFilter>("ListTagSyncTasksFilter")({GroupArn: S.optional(S.String), GroupName: S.optional(S.String)}) {}
export const ListTagSyncTasksFilterList = S.Array(ListTagSyncTasksFilter);
export class GetAccountSettingsOutput extends S.Class<GetAccountSettingsOutput>("GetAccountSettingsOutput")({AccountSettings: S.optional(AccountSettings)}) {}
export const ApplicationTag = S.Record({key: S.String, value: S.String});
export class Group extends S.Class<Group>("Group")({GroupArn: S.String, Name: S.String, Description: S.optional(S.String), Criticality: S.optional(S.Number), Owner: S.optional(S.String), DisplayName: S.optional(S.String), ApplicationTag: S.optional(ApplicationTag)}) {}
export class GetGroupOutput extends S.Class<GetGroupOutput>("GetGroupOutput")({Group: S.optional(Group)}) {}
export class GetTagsOutput extends S.Class<GetTagsOutput>("GetTagsOutput")({Arn: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class GetTagSyncTaskOutput extends S.Class<GetTagSyncTaskOutput>("GetTagSyncTaskOutput")({GroupArn: S.optional(S.String), GroupName: S.optional(S.String), TaskArn: S.optional(S.String), TagKey: S.optional(S.String), TagValue: S.optional(S.String), ResourceQuery: S.optional(ResourceQuery), RoleArn: S.optional(S.String), Status: S.optional(S.String), ErrorMessage: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export class ListGroupingStatusesInput extends S.Class<ListGroupingStatusesInput>("ListGroupingStatusesInput")({Group: S.String, MaxResults: S.optional(S.Number), Filters: S.optional(ListGroupingStatusesFilterList), NextToken: S.optional(S.String)}) {}
export class ListGroupResourcesInput extends S.Class<ListGroupResourcesInput>("ListGroupResourcesInput")({GroupName: S.optional(S.String), Group: S.optional(S.String), Filters: S.optional(ResourceFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListGroupsInput extends S.Class<ListGroupsInput>("ListGroupsInput")({Filters: S.optional(GroupFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagSyncTasksInput extends S.Class<ListTagSyncTasksInput>("ListTagSyncTasksInput")({Filters: S.optional(ListTagSyncTasksFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class StartTagSyncTaskOutput extends S.Class<StartTagSyncTaskOutput>("StartTagSyncTaskOutput")({GroupArn: S.optional(S.String), GroupName: S.optional(S.String), TaskArn: S.optional(S.String), TagKey: S.optional(S.String), TagValue: S.optional(S.String), ResourceQuery: S.optional(ResourceQuery), RoleArn: S.optional(S.String)}) {}
export class TagOutput extends S.Class<TagOutput>("TagOutput")({Arn: S.optional(S.String), Tags: S.optional(Tags)}) {}
export class FailedResource extends S.Class<FailedResource>("FailedResource")({ResourceArn: S.optional(S.String), ErrorMessage: S.optional(S.String), ErrorCode: S.optional(S.String)}) {}
export const FailedResourceList = S.Array(FailedResource);
export class PendingResource extends S.Class<PendingResource>("PendingResource")({ResourceArn: S.optional(S.String)}) {}
export const PendingResourceList = S.Array(PendingResource);
export class UngroupResourcesOutput extends S.Class<UngroupResourcesOutput>("UngroupResourcesOutput")({Succeeded: S.optional(ResourceArnList), Failed: S.optional(FailedResourceList), Pending: S.optional(PendingResourceList)}) {}
export class UntagOutput extends S.Class<UntagOutput>("UntagOutput")({Arn: S.optional(S.String), Keys: S.optional(TagKeyList)}) {}
export class UpdateAccountSettingsOutput extends S.Class<UpdateAccountSettingsOutput>("UpdateAccountSettingsOutput")({AccountSettings: S.optional(AccountSettings)}) {}
export class UpdateGroupOutput extends S.Class<UpdateGroupOutput>("UpdateGroupOutput")({Group: S.optional(Group)}) {}
export class GroupQuery extends S.Class<GroupQuery>("GroupQuery")({GroupName: S.String, ResourceQuery: ResourceQuery}) {}
export class UpdateGroupQueryOutput extends S.Class<UpdateGroupQueryOutput>("UpdateGroupQueryOutput")({GroupQuery: S.optional(GroupQuery)}) {}
export class GroupConfiguration extends S.Class<GroupConfiguration>("GroupConfiguration")({Configuration: S.optional(GroupConfigurationList), ProposedConfiguration: S.optional(GroupConfigurationList), Status: S.optional(S.String), FailureReason: S.optional(S.String)}) {}
export const GroupList = S.Array(Group);
export class ResourceIdentifier extends S.Class<ResourceIdentifier>("ResourceIdentifier")({ResourceArn: S.optional(S.String), ResourceType: S.optional(S.String)}) {}
export const ResourceIdentifierList = S.Array(ResourceIdentifier);
export class QueryError extends S.Class<QueryError>("QueryError")({ErrorCode: S.optional(S.String), Message: S.optional(S.String)}) {}
export const QueryErrorList = S.Array(QueryError);
export class CreateGroupInput extends S.Class<CreateGroupInput>("CreateGroupInput")({Name: S.String, Description: S.optional(S.String), ResourceQuery: S.optional(ResourceQuery), Tags: S.optional(Tags), Configuration: S.optional(GroupConfigurationList), Criticality: S.optional(S.Number), Owner: S.optional(S.String), DisplayName: S.optional(S.String)}) {}
export class GetGroupConfigurationOutput extends S.Class<GetGroupConfigurationOutput>("GetGroupConfigurationOutput")({GroupConfiguration: S.optional(GroupConfiguration)}) {}
export class GetGroupQueryOutput extends S.Class<GetGroupQueryOutput>("GetGroupQueryOutput")({GroupQuery: S.optional(GroupQuery)}) {}
export class GroupResourcesOutput extends S.Class<GroupResourcesOutput>("GroupResourcesOutput")({Succeeded: S.optional(ResourceArnList), Failed: S.optional(FailedResourceList), Pending: S.optional(PendingResourceList)}) {}
export class SearchResourcesOutput extends S.Class<SearchResourcesOutput>("SearchResourcesOutput")({ResourceIdentifiers: S.optional(ResourceIdentifierList), NextToken: S.optional(S.String), QueryErrors: S.optional(QueryErrorList)}) {}
export class GroupingStatusesItem extends S.Class<GroupingStatusesItem>("GroupingStatusesItem")({ResourceArn: S.optional(S.String), Action: S.optional(S.String), Status: S.optional(S.String), ErrorMessage: S.optional(S.String), ErrorCode: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export const GroupingStatusesList = S.Array(GroupingStatusesItem);
export class GroupIdentifier extends S.Class<GroupIdentifier>("GroupIdentifier")({GroupName: S.optional(S.String), GroupArn: S.optional(S.String), Description: S.optional(S.String), Criticality: S.optional(S.Number), Owner: S.optional(S.String), DisplayName: S.optional(S.String)}) {}
export const GroupIdentifierList = S.Array(GroupIdentifier);
export class TagSyncTaskItem extends S.Class<TagSyncTaskItem>("TagSyncTaskItem")({GroupArn: S.optional(S.String), GroupName: S.optional(S.String), TaskArn: S.optional(S.String), TagKey: S.optional(S.String), TagValue: S.optional(S.String), ResourceQuery: S.optional(ResourceQuery), RoleArn: S.optional(S.String), Status: S.optional(S.String), ErrorMessage: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export const TagSyncTaskList = S.Array(TagSyncTaskItem);
export class CreateGroupOutput extends S.Class<CreateGroupOutput>("CreateGroupOutput")({Group: S.optional(Group), ResourceQuery: S.optional(ResourceQuery), Tags: S.optional(Tags), GroupConfiguration: S.optional(GroupConfiguration)}) {}
export class DeleteGroupOutput extends S.Class<DeleteGroupOutput>("DeleteGroupOutput")({Group: S.optional(Group)}) {}
export class ListGroupingStatusesOutput extends S.Class<ListGroupingStatusesOutput>("ListGroupingStatusesOutput")({Group: S.optional(S.String), GroupingStatuses: S.optional(GroupingStatusesList), NextToken: S.optional(S.String)}) {}
export class ListGroupsOutput extends S.Class<ListGroupsOutput>("ListGroupsOutput")({GroupIdentifiers: S.optional(GroupIdentifierList), Groups: S.optional(GroupList), NextToken: S.optional(S.String)}) {}
export class ListTagSyncTasksOutput extends S.Class<ListTagSyncTasksOutput>("ListTagSyncTasksOutput")({TagSyncTasks: S.optional(TagSyncTaskList), NextToken: S.optional(S.String)}) {}
export class ResourceStatus extends S.Class<ResourceStatus>("ResourceStatus")({Name: S.optional(S.String)}) {}
export class ListGroupResourcesItem extends S.Class<ListGroupResourcesItem>("ListGroupResourcesItem")({Identifier: S.optional(ResourceIdentifier), Status: S.optional(ResourceStatus)}) {}
export const ListGroupResourcesItemList = S.Array(ListGroupResourcesItem);
export class ListGroupResourcesOutput extends S.Class<ListGroupResourcesOutput>("ListGroupResourcesOutput")({Resources: S.optional(ListGroupResourcesItemList), ResourceIdentifiers: S.optional(ResourceIdentifierList), NextToken: S.optional(S.String), QueryErrors: S.optional(QueryErrorList)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class InternalServerErrorException extends S.TaggedError<InternalServerErrorException>()("InternalServerErrorException", {}) {};
export class MethodNotAllowedException extends S.TaggedError<MethodNotAllowedException>()("MethodNotAllowedException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};

//# Operations
/**
 * Attaches a service configuration to the specified group. This occurs asynchronously,
 * and can take time to complete. You can use GetGroupConfiguration to
 * check the status of the update.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:PutGroupConfiguration`
 */export const putGroupConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/put-group-configuration", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.PutGroupConfiguration" }, PutGroupConfigurationInput, PutGroupConfigurationOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new tag-sync task to onboard and sync resources tagged with a specific tag key-value pair to an
 * application. To start a tag-sync task, you need a resource tagging role.
 * The resource tagging role grants permissions to tag and untag applications resources and must include a
 * trust policy that allows Resource Groups to assume the role and perform resource tagging tasks on your behalf.
 * 
 * For instructions on creating a tag-sync task, see Create a tag-sync
 * using the Resource Groups API in the *Amazon Web Services Service Catalog AppRegistry Administrator Guide*.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:StartTagSyncTask` on the application group
 * 
 * - `resource-groups:CreateGroup`
 * 
 * - `iam:PassRole` on the role provided in the request
 */export const startTagSyncTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/start-tag-sync-task", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.StartTagSyncTask" }, StartTagSyncTaskInput, StartTagSyncTaskOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds tags to a resource group with the specified Amazon resource name (ARN). Existing tags on a resource
 * group are not changed if they are not specified in the request parameters.
 * 
 * Do not store personally identifiable information (PII) or other confidential or
 * sensitive information in tags. We use tags to provide you with billing and
 * administration services. Tags are not intended to be used for private or sensitive
 * data.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:Tag`
 */export const tag = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/resources/{Arn}/tags", method: "PUT", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.Tag" }, TagInput, TagOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified resources from the specified group. This operation works only
 * with static groups that you populated using the GroupResources
 * operation. It doesn't work with any resource groups that are automatically populated by
 * tag-based or CloudFormation stack-based queries.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:UngroupResources`
 */export const ungroupResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/ungroup-resources", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.UngroupResources" }, UngroupResourcesInput, UngroupResourcesOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes tags from a specified resource group.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:Untag`
 */export const untag = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/resources/{Arn}/tags", method: "PATCH", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.Untag" }, UntagInput, UntagOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Turns on or turns off optional features in Resource Groups.
 * 
 * The preceding example shows that the request to turn on group lifecycle events is
 * `IN_PROGRESS`. You can call the GetAccountSettings
 * operation to check for completion by looking for `GroupLifecycleEventsStatus`
 * to change to `ACTIVE`.
 */export const updateAccountSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/update-account-settings", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.UpdateAccountSettings" }, UpdateAccountSettingsInput, UpdateAccountSettingsOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the description for an existing group. You cannot update the name of a
 * resource group.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:UpdateGroup`
 */export const updateGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/update-group", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.UpdateGroup" }, UpdateGroupInput, UpdateGroupOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the resource query of a group. For more information about resource queries,
 * see Create a tag-based group in Resource Groups.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:UpdateGroupQuery`
 */export const updateGroupQuery = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/update-group-query", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.UpdateGroupQuery" }, UpdateGroupQueryInput, UpdateGroupQueryOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels the specified tag-sync task.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:CancelTagSyncTask` on the application group
 * 
 * - `resource-groups:DeleteGroup`
 */export const cancelTagSyncTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/cancel-tag-sync-task", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.CancelTagSyncTask" }, CancelTagSyncTaskInput, S.Struct({}), [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current status of optional features in Resource Groups.
 */export const getAccountSettings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/get-account-settings", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.GetAccountSettings" }, S.Struct({}), GetAccountSettingsOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specified resource group.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:GetGroup`
 */export const getGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/get-group", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.GetGroup" }, GetGroupInput, GetGroupOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the service configuration associated with the specified resource group. For
 * details about the service configuration syntax, see Service configurations for Resource Groups.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:GetGroupConfiguration`
 */export const getGroupConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/get-group-configuration", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.GetGroupConfiguration" }, GetGroupConfigurationInput, GetGroupConfigurationOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the resource query associated with the specified resource group. For more
 * information about resource queries, see Create
 * a tag-based group in Resource Groups.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:GetGroupQuery`
 */export const getGroupQuery = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/get-group-query", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.GetGroupQuery" }, GetGroupQueryInput, GetGroupQueryOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of tags that are associated with a resource group, specified by an
 * Amazon resource name (ARN).
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:GetTags`
 */export const getTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/resources/{Arn}/tags", method: "GET", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.GetTags" }, GetTagsInput, GetTagsOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a specified tag-sync task.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:GetTagSyncTask` on the application group
 */export const getTagSyncTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/get-tag-sync-task", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.GetTagSyncTask" }, GetTagSyncTaskInput, GetTagSyncTaskOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified resources to the specified group.
 * 
 * You can only use this operation with the following groups:
 * 
 * - `AWS::EC2::HostManagement`
 * 
 * - `AWS::EC2::CapacityReservationPool`
 * 
 * - `AWS::ResourceGroups::ApplicationGroup`
 * 
 * Other resource group types and resource types are not currently supported by this
 * operation.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:GroupResources`
 */export const groupResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/group-resources", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.GroupResources" }, GroupResourcesInput, GroupResourcesOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of Amazon Web Services resource identifiers that matches the specified query. The
 * query uses the same format as a resource query in a CreateGroup or
 * UpdateGroupQuery operation.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:SearchResources`
 * 
 * - `cloudformation:DescribeStacks`
 * 
 * - `cloudformation:ListStackResources`
 * 
 * - `tag:GetResources`
 */export const searchResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/resources/search", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.SearchResources" }, SearchResourcesInput, SearchResourcesOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a resource group with the specified name and description. You can optionally
 * include either a resource query or a service configuration. For more information about
 * constructing a resource query, see Build queries and groups in
 * Resource Groups in the *Resource Groups User Guide*. For more information
 * about service-linked groups and service configurations, see Service configurations for Resource Groups.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:CreateGroup`
 */export const createGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/groups", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.CreateGroup" }, CreateGroupInput, CreateGroupOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified resource group. Deleting a resource group does not delete any
 * resources that are members of the group; it only deletes the group structure.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:DeleteGroup`
 */export const deleteGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/delete-group", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.DeleteGroup" }, DeleteGroupInput, DeleteGroupOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the status of the last grouping or ungrouping action for
 * each resource in the specified application group.
 */export const listGroupingStatuses = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/list-grouping-statuses", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.ListGroupingStatuses" }, ListGroupingStatusesInput, ListGroupingStatusesOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of existing Resource Groups in your account.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:ListGroups`
 */export const listGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/groups-list", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.ListGroups" }, ListGroupsInput, ListGroupsOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of tag-sync tasks.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:ListTagSyncTasks` with the group passed in the filters as the resource
 * or * if using no filters
 */export const listTagSyncTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/list-tag-sync-tasks", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.ListTagSyncTasks" }, ListTagSyncTasksInput, ListTagSyncTasksOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of Amazon resource names (ARNs) of the resources that are members of a specified resource
 * group.
 * 
 * **Minimum permissions**
 * 
 * To run this command, you must have the following permissions:
 * 
 * - `resource-groups:ListGroupResources`
 * 
 * - `cloudformation:DescribeStacks`
 * 
 * - `cloudformation:ListStackResources`
 * 
 * - `tag:GetResources`
 */export const listGroupResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-11-27", uri: "/list-group-resources", sdkId: "Resource Groups", sigV4ServiceName: "resource-groups", name: "Ardi.ListGroupResources" }, ListGroupResourcesInput, ListGroupResourcesOutput, [BadRequestException, ForbiddenException, InternalServerErrorException, MethodNotAllowedException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
