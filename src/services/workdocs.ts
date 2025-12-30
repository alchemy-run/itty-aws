import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const SharedLabels = S.Array(S.String);
export const CustomMetadataKeyList = S.Array(S.String);
export const SearchQueryScopeTypeList = S.Array(S.String);
export const AdditionalResponseFieldsList = S.Array(S.String);
export class AbortDocumentVersionUploadRequest extends S.Class<AbortDocumentVersionUploadRequest>("AbortDocumentVersionUploadRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, VersionId: S.String}) {}
export class ActivateUserRequest extends S.Class<ActivateUserRequest>("ActivateUserRequest")({UserId: S.String, AuthenticationToken: S.optional(H.Header("Authentication"))}) {}
export class CreateCommentRequest extends S.Class<CreateCommentRequest>("CreateCommentRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, VersionId: S.String, ParentId: S.optional(S.String), ThreadId: S.optional(S.String), Text: S.String, Visibility: S.optional(S.String), NotifyCollaborators: S.optional(S.Boolean)}) {}
export class CreateFolderRequest extends S.Class<CreateFolderRequest>("CreateFolderRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), Name: S.optional(S.String), ParentFolderId: S.String}) {}
export class CreateLabelsRequest extends S.Class<CreateLabelsRequest>("CreateLabelsRequest")({ResourceId: S.String, Labels: SharedLabels, AuthenticationToken: S.optional(H.Header("Authentication"))}) {}
export class CreateLabelsResponse extends S.Class<CreateLabelsResponse>("CreateLabelsResponse")({}) {}
export class CreateNotificationSubscriptionRequest extends S.Class<CreateNotificationSubscriptionRequest>("CreateNotificationSubscriptionRequest")({OrganizationId: S.String, Endpoint: S.String, Protocol: S.String, SubscriptionType: S.String}) {}
export class DeactivateUserRequest extends S.Class<DeactivateUserRequest>("DeactivateUserRequest")({UserId: S.String, AuthenticationToken: S.optional(H.Header("Authentication"))}) {}
export class DeleteCommentRequest extends S.Class<DeleteCommentRequest>("DeleteCommentRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, VersionId: S.String, CommentId: S.String}) {}
export class DeleteCustomMetadataRequest extends S.Class<DeleteCustomMetadataRequest>("DeleteCustomMetadataRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), ResourceId: S.String, VersionId: S.optional(S.String), Keys: S.optional(CustomMetadataKeyList), DeleteAll: S.optional(S.Boolean)}) {}
export class DeleteCustomMetadataResponse extends S.Class<DeleteCustomMetadataResponse>("DeleteCustomMetadataResponse")({}) {}
export class DeleteDocumentRequest extends S.Class<DeleteDocumentRequest>("DeleteDocumentRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String}) {}
export class DeleteDocumentVersionRequest extends S.Class<DeleteDocumentVersionRequest>("DeleteDocumentVersionRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, VersionId: S.String, DeletePriorVersions: S.Boolean}) {}
export class DeleteFolderRequest extends S.Class<DeleteFolderRequest>("DeleteFolderRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), FolderId: S.String}) {}
export class DeleteFolderContentsRequest extends S.Class<DeleteFolderContentsRequest>("DeleteFolderContentsRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), FolderId: S.String}) {}
export class DeleteLabelsRequest extends S.Class<DeleteLabelsRequest>("DeleteLabelsRequest")({ResourceId: S.String, AuthenticationToken: S.optional(H.Header("Authentication")), Labels: S.optional(SharedLabels), DeleteAll: S.optional(S.Boolean)}) {}
export class DeleteLabelsResponse extends S.Class<DeleteLabelsResponse>("DeleteLabelsResponse")({}) {}
export class DeleteNotificationSubscriptionRequest extends S.Class<DeleteNotificationSubscriptionRequest>("DeleteNotificationSubscriptionRequest")({SubscriptionId: S.String, OrganizationId: S.String}) {}
export class DeleteUserRequest extends S.Class<DeleteUserRequest>("DeleteUserRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), UserId: S.String}) {}
export class DescribeActivitiesRequest extends S.Class<DescribeActivitiesRequest>("DescribeActivitiesRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), StartTime: S.optional(S.Date), EndTime: S.optional(S.Date), OrganizationId: S.optional(S.String), ActivityTypes: S.optional(S.String), ResourceId: S.optional(S.String), UserId: S.optional(S.String), IncludeIndirectActivities: S.optional(S.Boolean), Limit: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeCommentsRequest extends S.Class<DescribeCommentsRequest>("DescribeCommentsRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, VersionId: S.String, Limit: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeDocumentVersionsRequest extends S.Class<DescribeDocumentVersionsRequest>("DescribeDocumentVersionsRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, Marker: S.optional(S.String), Limit: S.optional(S.Number), Include: S.optional(S.String), Fields: S.optional(S.String)}) {}
export class DescribeFolderContentsRequest extends S.Class<DescribeFolderContentsRequest>("DescribeFolderContentsRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), FolderId: S.String, Sort: S.optional(S.String), Order: S.optional(S.String), Limit: S.optional(S.Number), Marker: S.optional(S.String), Type: S.optional(S.String), Include: S.optional(S.String)}) {}
export class DescribeGroupsRequest extends S.Class<DescribeGroupsRequest>("DescribeGroupsRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), SearchQuery: S.String, OrganizationId: S.optional(S.String), Marker: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class DescribeNotificationSubscriptionsRequest extends S.Class<DescribeNotificationSubscriptionsRequest>("DescribeNotificationSubscriptionsRequest")({OrganizationId: S.String, Marker: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class DescribeResourcePermissionsRequest extends S.Class<DescribeResourcePermissionsRequest>("DescribeResourcePermissionsRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), ResourceId: S.String, PrincipalId: S.optional(S.String), Limit: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeRootFoldersRequest extends S.Class<DescribeRootFoldersRequest>("DescribeRootFoldersRequest")({AuthenticationToken: H.Header("Authentication"), Limit: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class DescribeUsersRequest extends S.Class<DescribeUsersRequest>("DescribeUsersRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), OrganizationId: S.optional(S.String), UserIds: S.optional(S.String), Query: S.optional(S.String), Include: S.optional(S.String), Order: S.optional(S.String), Sort: S.optional(S.String), Marker: S.optional(S.String), Limit: S.optional(S.Number), Fields: S.optional(S.String)}) {}
export class GetCurrentUserRequest extends S.Class<GetCurrentUserRequest>("GetCurrentUserRequest")({AuthenticationToken: H.Header("Authentication")}) {}
export class GetDocumentRequest extends S.Class<GetDocumentRequest>("GetDocumentRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, IncludeCustomMetadata: S.optional(S.Boolean)}) {}
export class GetDocumentPathRequest extends S.Class<GetDocumentPathRequest>("GetDocumentPathRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, Limit: S.optional(S.Number), Fields: S.optional(S.String), Marker: S.optional(S.String)}) {}
export class GetDocumentVersionRequest extends S.Class<GetDocumentVersionRequest>("GetDocumentVersionRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, VersionId: S.String, Fields: S.optional(S.String), IncludeCustomMetadata: S.optional(S.Boolean)}) {}
export class GetFolderRequest extends S.Class<GetFolderRequest>("GetFolderRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), FolderId: S.String, IncludeCustomMetadata: S.optional(S.Boolean)}) {}
export class GetFolderPathRequest extends S.Class<GetFolderPathRequest>("GetFolderPathRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), FolderId: S.String, Limit: S.optional(S.Number), Fields: S.optional(S.String), Marker: S.optional(S.String)}) {}
export class GetResourcesRequest extends S.Class<GetResourcesRequest>("GetResourcesRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), UserId: S.optional(S.String), CollectionType: S.optional(S.String), Limit: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class InitiateDocumentVersionUploadRequest extends S.Class<InitiateDocumentVersionUploadRequest>("InitiateDocumentVersionUploadRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), Id: S.optional(S.String), Name: S.optional(S.String), ContentCreatedTimestamp: S.optional(S.Date), ContentModifiedTimestamp: S.optional(S.Date), ContentType: S.optional(S.String), DocumentSizeInBytes: S.optional(S.Number), ParentFolderId: S.optional(S.String)}) {}
export class RemoveAllResourcePermissionsRequest extends S.Class<RemoveAllResourcePermissionsRequest>("RemoveAllResourcePermissionsRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), ResourceId: S.String}) {}
export class RemoveResourcePermissionRequest extends S.Class<RemoveResourcePermissionRequest>("RemoveResourcePermissionRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), ResourceId: S.String, PrincipalId: S.String, PrincipalType: S.optional(S.String)}) {}
export class RestoreDocumentVersionsRequest extends S.Class<RestoreDocumentVersionsRequest>("RestoreDocumentVersionsRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String}) {}
export class UpdateDocumentRequest extends S.Class<UpdateDocumentRequest>("UpdateDocumentRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, Name: S.optional(S.String), ParentFolderId: S.optional(S.String), ResourceState: S.optional(S.String)}) {}
export class UpdateDocumentVersionRequest extends S.Class<UpdateDocumentVersionRequest>("UpdateDocumentVersionRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), DocumentId: S.String, VersionId: S.String, VersionStatus: S.optional(S.String)}) {}
export class UpdateFolderRequest extends S.Class<UpdateFolderRequest>("UpdateFolderRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), FolderId: S.String, Name: S.optional(S.String), ParentFolderId: S.optional(S.String), ResourceState: S.optional(S.String)}) {}
export class StorageRuleType extends S.Class<StorageRuleType>("StorageRuleType")({StorageAllocatedInBytes: S.optional(S.Number), StorageType: S.optional(S.String)}) {}
export class UpdateUserRequest extends S.Class<UpdateUserRequest>("UpdateUserRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), UserId: S.String, GivenName: S.optional(S.String), Surname: S.optional(S.String), Type: S.optional(S.String), StorageRule: S.optional(StorageRuleType), TimeZoneId: S.optional(S.String), Locale: S.optional(S.String), GrantPoweruserPrivileges: S.optional(S.String)}) {}
export const TextLocaleTypeList = S.Array(S.String);
export const SearchContentCategoryTypeList = S.Array(S.String);
export const SearchResourceTypeList = S.Array(S.String);
export const SearchLabelList = S.Array(S.String);
export const SearchAncestorIdList = S.Array(S.String);
export const SearchCollectionTypeList = S.Array(S.String);
export class SharePrincipal extends S.Class<SharePrincipal>("SharePrincipal")({Id: S.String, Type: S.String, Role: S.String}) {}
export const SharePrincipalList = S.Array(SharePrincipal);
export class NotificationOptions extends S.Class<NotificationOptions>("NotificationOptions")({SendEmail: S.optional(S.Boolean), EmailMessage: S.optional(S.String)}) {}
export const CustomMetadataMap = S.Record({key: S.String, value: S.String});
export const EntityIdList = S.Array(S.String);
export class UserStorageMetadata extends S.Class<UserStorageMetadata>("UserStorageMetadata")({StorageUtilizedInBytes: S.optional(S.Number), StorageRule: S.optional(StorageRuleType)}) {}
export class User extends S.Class<User>("User")({Id: S.optional(S.String), Username: S.optional(S.String), EmailAddress: S.optional(S.String), GivenName: S.optional(S.String), Surname: S.optional(S.String), OrganizationId: S.optional(S.String), RootFolderId: S.optional(S.String), RecycleBinFolderId: S.optional(S.String), Status: S.optional(S.String), Type: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), ModifiedTimestamp: S.optional(S.Date), TimeZoneId: S.optional(S.String), Locale: S.optional(S.String), Storage: S.optional(UserStorageMetadata)}) {}
export class Comment extends S.Class<Comment>("Comment")({CommentId: S.String, ParentId: S.optional(S.String), ThreadId: S.optional(S.String), Text: S.optional(S.String), Contributor: S.optional(User), CreatedTimestamp: S.optional(S.Date), Status: S.optional(S.String), Visibility: S.optional(S.String), RecipientId: S.optional(S.String)}) {}
export const CommentList = S.Array(Comment);
export class FolderMetadata extends S.Class<FolderMetadata>("FolderMetadata")({Id: S.optional(S.String), Name: S.optional(S.String), CreatorId: S.optional(S.String), ParentFolderId: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), ModifiedTimestamp: S.optional(S.Date), ResourceState: S.optional(S.String), Signature: S.optional(S.String), Labels: S.optional(SharedLabels), Size: S.optional(S.Number), LatestVersionSize: S.optional(S.Number)}) {}
export const FolderMetadataList = S.Array(FolderMetadata);
export class Subscription extends S.Class<Subscription>("Subscription")({SubscriptionId: S.optional(S.String), EndPoint: S.optional(S.String), Protocol: S.optional(S.String)}) {}
export const SubscriptionList = S.Array(Subscription);
export const OrganizationUserList = S.Array(User);
export class SearchSortResult extends S.Class<SearchSortResult>("SearchSortResult")({Field: S.optional(S.String), Order: S.optional(S.String)}) {}
export const SearchResultSortList = S.Array(SearchSortResult);
export const SearchPrincipalRoleList = S.Array(S.String);
export class AddResourcePermissionsRequest extends S.Class<AddResourcePermissionsRequest>("AddResourcePermissionsRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), ResourceId: S.String, Principals: SharePrincipalList, NotificationOptions: S.optional(NotificationOptions)}) {}
export class CreateCustomMetadataRequest extends S.Class<CreateCustomMetadataRequest>("CreateCustomMetadataRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), ResourceId: S.String, VersionId: S.optional(S.String), CustomMetadata: CustomMetadataMap}) {}
export class CreateCustomMetadataResponse extends S.Class<CreateCustomMetadataResponse>("CreateCustomMetadataResponse")({}) {}
export class CreateUserRequest extends S.Class<CreateUserRequest>("CreateUserRequest")({OrganizationId: S.optional(S.String), Username: S.String, EmailAddress: S.optional(S.String), GivenName: S.String, Surname: S.String, Password: S.String, TimeZoneId: S.optional(S.String), StorageRule: S.optional(StorageRuleType), AuthenticationToken: S.optional(H.Header("Authentication"))}) {}
export class DescribeCommentsResponse extends S.Class<DescribeCommentsResponse>("DescribeCommentsResponse")({Comments: S.optional(CommentList), Marker: S.optional(S.String)}) {}
export class DescribeNotificationSubscriptionsResponse extends S.Class<DescribeNotificationSubscriptionsResponse>("DescribeNotificationSubscriptionsResponse")({Subscriptions: S.optional(SubscriptionList), Marker: S.optional(S.String)}) {}
export class DescribeRootFoldersResponse extends S.Class<DescribeRootFoldersResponse>("DescribeRootFoldersResponse")({Folders: S.optional(FolderMetadataList), Marker: S.optional(S.String)}) {}
export class DescribeUsersResponse extends S.Class<DescribeUsersResponse>("DescribeUsersResponse")({Users: S.optional(OrganizationUserList), TotalNumberOfUsers: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class GetCurrentUserResponse extends S.Class<GetCurrentUserResponse>("GetCurrentUserResponse")({User: S.optional(User)}) {}
export const DocumentThumbnailUrlMap = S.Record({key: S.String, value: S.String});
export const DocumentSourceUrlMap = S.Record({key: S.String, value: S.String});
export class DocumentVersionMetadata extends S.Class<DocumentVersionMetadata>("DocumentVersionMetadata")({Id: S.optional(S.String), Name: S.optional(S.String), ContentType: S.optional(S.String), Size: S.optional(S.Number), Signature: S.optional(S.String), Status: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), ModifiedTimestamp: S.optional(S.Date), ContentCreatedTimestamp: S.optional(S.Date), ContentModifiedTimestamp: S.optional(S.Date), CreatorId: S.optional(S.String), Thumbnail: S.optional(DocumentThumbnailUrlMap), Source: S.optional(DocumentSourceUrlMap)}) {}
export class DocumentMetadata extends S.Class<DocumentMetadata>("DocumentMetadata")({Id: S.optional(S.String), CreatorId: S.optional(S.String), ParentFolderId: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), ModifiedTimestamp: S.optional(S.Date), LatestVersionMetadata: S.optional(DocumentVersionMetadata), ResourceState: S.optional(S.String), Labels: S.optional(SharedLabels)}) {}
export class GetDocumentResponse extends S.Class<GetDocumentResponse>("GetDocumentResponse")({Metadata: S.optional(DocumentMetadata), CustomMetadata: S.optional(CustomMetadataMap)}) {}
export class GetDocumentVersionResponse extends S.Class<GetDocumentVersionResponse>("GetDocumentVersionResponse")({Metadata: S.optional(DocumentVersionMetadata), CustomMetadata: S.optional(CustomMetadataMap)}) {}
export class GetFolderResponse extends S.Class<GetFolderResponse>("GetFolderResponse")({Metadata: S.optional(FolderMetadata), CustomMetadata: S.optional(CustomMetadataMap)}) {}
export class ResourcePathComponent extends S.Class<ResourcePathComponent>("ResourcePathComponent")({Id: S.optional(S.String), Name: S.optional(S.String)}) {}
export const ResourcePathComponentList = S.Array(ResourcePathComponent);
export class ResourcePath extends S.Class<ResourcePath>("ResourcePath")({Components: S.optional(ResourcePathComponentList)}) {}
export class GetFolderPathResponse extends S.Class<GetFolderPathResponse>("GetFolderPathResponse")({Path: S.optional(ResourcePath)}) {}
export const DocumentMetadataList = S.Array(DocumentMetadata);
export class GetResourcesResponse extends S.Class<GetResourcesResponse>("GetResourcesResponse")({Folders: S.optional(FolderMetadataList), Documents: S.optional(DocumentMetadataList), Marker: S.optional(S.String)}) {}
export class UpdateUserResponse extends S.Class<UpdateUserResponse>("UpdateUserResponse")({User: S.optional(User)}) {}
export class SearchPrincipalType extends S.Class<SearchPrincipalType>("SearchPrincipalType")({Id: S.String, Roles: S.optional(SearchPrincipalRoleList)}) {}
export const SearchPrincipalTypeList = S.Array(SearchPrincipalType);
export class LongRangeType extends S.Class<LongRangeType>("LongRangeType")({StartValue: S.optional(S.Number), EndValue: S.optional(S.Number)}) {}
export class DateRangeType extends S.Class<DateRangeType>("DateRangeType")({StartValue: S.optional(S.Date), EndValue: S.optional(S.Date)}) {}
export class GroupMetadata extends S.Class<GroupMetadata>("GroupMetadata")({Id: S.optional(S.String), Name: S.optional(S.String)}) {}
export const GroupMetadataList = S.Array(GroupMetadata);
export class Filters extends S.Class<Filters>("Filters")({TextLocales: S.optional(TextLocaleTypeList), ContentCategories: S.optional(SearchContentCategoryTypeList), ResourceTypes: S.optional(SearchResourceTypeList), Labels: S.optional(SearchLabelList), Principals: S.optional(SearchPrincipalTypeList), AncestorIds: S.optional(SearchAncestorIdList), SearchCollectionTypes: S.optional(SearchCollectionTypeList), SizeRange: S.optional(LongRangeType), CreatedRange: S.optional(DateRangeType), ModifiedRange: S.optional(DateRangeType)}) {}
export class UserMetadata extends S.Class<UserMetadata>("UserMetadata")({Id: S.optional(S.String), Username: S.optional(S.String), GivenName: S.optional(S.String), Surname: S.optional(S.String), EmailAddress: S.optional(S.String)}) {}
export const UserMetadataList = S.Array(UserMetadata);
export class CreateCommentResponse extends S.Class<CreateCommentResponse>("CreateCommentResponse")({Comment: S.optional(Comment)}) {}
export class CreateFolderResponse extends S.Class<CreateFolderResponse>("CreateFolderResponse")({Metadata: S.optional(FolderMetadata)}) {}
export class CreateNotificationSubscriptionResponse extends S.Class<CreateNotificationSubscriptionResponse>("CreateNotificationSubscriptionResponse")({Subscription: S.optional(Subscription)}) {}
export class CreateUserResponse extends S.Class<CreateUserResponse>("CreateUserResponse")({User: S.optional(User)}) {}
export class DescribeFolderContentsResponse extends S.Class<DescribeFolderContentsResponse>("DescribeFolderContentsResponse")({Folders: S.optional(FolderMetadataList), Documents: S.optional(DocumentMetadataList), Marker: S.optional(S.String)}) {}
export class DescribeGroupsResponse extends S.Class<DescribeGroupsResponse>("DescribeGroupsResponse")({Groups: S.optional(GroupMetadataList), Marker: S.optional(S.String)}) {}
export class SearchResourcesRequest extends S.Class<SearchResourcesRequest>("SearchResourcesRequest")({AuthenticationToken: S.optional(H.Header("Authentication")), QueryText: S.optional(S.String), QueryScopes: S.optional(SearchQueryScopeTypeList), OrganizationId: S.optional(S.String), AdditionalResponseFields: S.optional(AdditionalResponseFieldsList), Filters: S.optional(Filters), OrderBy: S.optional(SearchResultSortList), Limit: S.optional(S.Number), Marker: S.optional(S.String)}) {}
export class Participants extends S.Class<Participants>("Participants")({Users: S.optional(UserMetadataList), Groups: S.optional(GroupMetadataList)}) {}
export class ResourceMetadata extends S.Class<ResourceMetadata>("ResourceMetadata")({Type: S.optional(S.String), Name: S.optional(S.String), OriginalName: S.optional(S.String), Id: S.optional(S.String), VersionId: S.optional(S.String), Owner: S.optional(UserMetadata), ParentId: S.optional(S.String)}) {}
export class CommentMetadata extends S.Class<CommentMetadata>("CommentMetadata")({CommentId: S.optional(S.String), Contributor: S.optional(User), CreatedTimestamp: S.optional(S.Date), CommentStatus: S.optional(S.String), RecipientId: S.optional(S.String), ContributorId: S.optional(S.String)}) {}
export class PermissionInfo extends S.Class<PermissionInfo>("PermissionInfo")({Role: S.optional(S.String), Type: S.optional(S.String)}) {}
export const PermissionInfoList = S.Array(PermissionInfo);
export const SignedHeaderMap = S.Record({key: S.String, value: S.String});
export class ShareResult extends S.Class<ShareResult>("ShareResult")({PrincipalId: S.optional(S.String), InviteePrincipalId: S.optional(S.String), Role: S.optional(S.String), Status: S.optional(S.String), ShareId: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export const ShareResultsList = S.Array(ShareResult);
export class Activity extends S.Class<Activity>("Activity")({Type: S.optional(S.String), TimeStamp: S.optional(S.Date), IsIndirectActivity: S.optional(S.Boolean), OrganizationId: S.optional(S.String), Initiator: S.optional(UserMetadata), Participants: S.optional(Participants), ResourceMetadata: S.optional(ResourceMetadata), OriginalParent: S.optional(ResourceMetadata), CommentMetadata: S.optional(CommentMetadata)}) {}
export const UserActivities = S.Array(Activity);
export const DocumentVersionMetadataList = S.Array(DocumentVersionMetadata);
export class Principal extends S.Class<Principal>("Principal")({Id: S.optional(S.String), Type: S.optional(S.String), Roles: S.optional(PermissionInfoList)}) {}
export const PrincipalList = S.Array(Principal);
export class UploadMetadata extends S.Class<UploadMetadata>("UploadMetadata")({UploadUrl: S.optional(S.String), SignedHeaders: S.optional(SignedHeaderMap)}) {}
export class ActivateUserResponse extends S.Class<ActivateUserResponse>("ActivateUserResponse")({User: S.optional(User)}) {}
export class AddResourcePermissionsResponse extends S.Class<AddResourcePermissionsResponse>("AddResourcePermissionsResponse")({ShareResults: S.optional(ShareResultsList)}) {}
export class DescribeActivitiesResponse extends S.Class<DescribeActivitiesResponse>("DescribeActivitiesResponse")({UserActivities: S.optional(UserActivities), Marker: S.optional(S.String)}) {}
export class DescribeDocumentVersionsResponse extends S.Class<DescribeDocumentVersionsResponse>("DescribeDocumentVersionsResponse")({DocumentVersions: S.optional(DocumentVersionMetadataList), Marker: S.optional(S.String)}) {}
export class DescribeResourcePermissionsResponse extends S.Class<DescribeResourcePermissionsResponse>("DescribeResourcePermissionsResponse")({Principals: S.optional(PrincipalList), Marker: S.optional(S.String)}) {}
export class GetDocumentPathResponse extends S.Class<GetDocumentPathResponse>("GetDocumentPathResponse")({Path: S.optional(ResourcePath)}) {}
export class InitiateDocumentVersionUploadResponse extends S.Class<InitiateDocumentVersionUploadResponse>("InitiateDocumentVersionUploadResponse")({Metadata: S.optional(DocumentMetadata), UploadMetadata: S.optional(UploadMetadata)}) {}
export class ResponseItem extends S.Class<ResponseItem>("ResponseItem")({ResourceType: S.optional(S.String), WebUrl: S.optional(S.String), DocumentMetadata: S.optional(DocumentMetadata), FolderMetadata: S.optional(FolderMetadata), CommentMetadata: S.optional(CommentMetadata), DocumentVersionMetadata: S.optional(DocumentVersionMetadata)}) {}
export const ResponseItemsList = S.Array(ResponseItem);
export class SearchResourcesResponse extends S.Class<SearchResourcesResponse>("SearchResourcesResponse")({Items: S.optional(ResponseItemsList), Marker: S.optional(S.String)}) {}

//# Errors
export class EntityNotExistsException extends S.TaggedError<EntityNotExistsException>()("EntityNotExistsException", {}) {};
export class FailedDependencyException extends S.TaggedError<FailedDependencyException>()("FailedDependencyException", {}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class ConflictingOperationException extends S.TaggedError<ConflictingOperationException>()("ConflictingOperationException", {}) {};
export class ProhibitedStateException extends S.TaggedError<ProhibitedStateException>()("ProhibitedStateException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class UnauthorizedOperationException extends S.TaggedError<UnauthorizedOperationException>()("UnauthorizedOperationException", {}) {};
export class UnauthorizedResourceAccessException extends S.TaggedError<UnauthorizedResourceAccessException>()("UnauthorizedResourceAccessException", {}) {};
export class InvalidOperationException extends S.TaggedError<InvalidOperationException>()("InvalidOperationException", {}) {};
export class EntityAlreadyExistsException extends S.TaggedError<EntityAlreadyExistsException>()("EntityAlreadyExistsException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class DocumentLockedForCommentsException extends S.TaggedError<DocumentLockedForCommentsException>()("DocumentLockedForCommentsException", {Message: S.optional(S.String)}) {};
export class InvalidArgumentException extends S.TaggedError<InvalidArgumentException>()("InvalidArgumentException", {}) {};
export class InvalidPasswordException extends S.TaggedError<InvalidPasswordException>()("InvalidPasswordException", {}) {};
export class CustomMetadataLimitExceededException extends S.TaggedError<CustomMetadataLimitExceededException>()("CustomMetadataLimitExceededException", {Message: S.optional(S.String)}) {};
export class TooManyLabelsException extends S.TaggedError<TooManyLabelsException>()("TooManyLabelsException", {Message: S.optional(S.String)}) {};
export class RequestedEntityTooLargeException extends S.TaggedError<RequestedEntityTooLargeException>()("RequestedEntityTooLargeException", {Message: S.optional(S.String)}) {};
export class DeactivatingLastSystemUserException extends S.TaggedError<DeactivatingLastSystemUserException>()("DeactivatingLastSystemUserException", {Message: S.optional(S.String), Code: S.optional(S.String)}) {};
export class InvalidCommentOperationException extends S.TaggedError<InvalidCommentOperationException>()("InvalidCommentOperationException", {Message: S.optional(S.String)}) {};
export class TooManySubscriptionsException extends S.TaggedError<TooManySubscriptionsException>()("TooManySubscriptionsException", {Message: S.optional(S.String)}) {};
export class IllegalUserStateException extends S.TaggedError<IllegalUserStateException>()("IllegalUserStateException", {Message: S.optional(S.String)}) {};
export class DraftUploadOutOfSyncException extends S.TaggedError<DraftUploadOutOfSyncException>()("DraftUploadOutOfSyncException", {Message: S.optional(S.String)}) {};
export class ResourceAlreadyCheckedOutException extends S.TaggedError<ResourceAlreadyCheckedOutException>()("ResourceAlreadyCheckedOutException", {Message: S.optional(S.String)}) {};
export class StorageLimitExceededException extends S.TaggedError<StorageLimitExceededException>()("StorageLimitExceededException", {Message: S.optional(S.String)}) {};
export class StorageLimitWillExceedException extends S.TaggedError<StorageLimitWillExceedException>()("StorageLimitWillExceedException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes the specified user from a Simple AD or Microsoft AD directory.
 * 
 * 
 * 
 * 
 * Deleting a user immediately and permanently deletes all content in that user's folder structure. Site retention policies do NOT apply to this type of deletion.
 */export const deleteUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/users/{UserId}", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeleteUser" }, DeleteUserRequest, S.Struct({}), [EntityNotExistsException, FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes all the permissions from the specified resource.
 */export const removeAllResourcePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/resources/{ResourceId}/permissions", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.RemoveAllResourcePermissions" }, RemoveAllResourcePermissionsRequest, S.Struct({}), [FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the permission for the specified principal from the specified
 * resource.
 */export const removeResourcePermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/resources/{ResourceId}/permissions/{PrincipalId}", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.RemoveResourcePermission" }, RemoveResourcePermissionRequest, S.Struct({}), [FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Recovers a deleted version of an Amazon WorkDocs document.
 */export const restoreDocumentVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documentVersions/restore/{DocumentId}", method: "POST", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.RestoreDocumentVersions" }, RestoreDocumentVersionsRequest, S.Struct({}), [ConcurrentModificationException, ConflictingOperationException, EntityNotExistsException, FailedDependencyException, InvalidOperationException, ProhibitedStateException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes the status of the document version to ACTIVE.
 * 
 * 
 * Amazon WorkDocs also sets its document container to ACTIVE. This is the last step
 * in a document upload, after the client uploads the document to an S3-presigned URL
 * returned by InitiateDocumentVersionUpload.
 */export const updateDocumentVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}/versions/{VersionId}", method: "PATCH", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.UpdateDocumentVersion" }, UpdateDocumentVersionRequest, S.Struct({}), [ConcurrentModificationException, EntityNotExistsException, FailedDependencyException, InvalidOperationException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified attributes of the specified folder. The user must have access
 * to both the folder and its parent folder, if applicable.
 */export const updateFolder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/folders/{FolderId}", method: "PATCH", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.UpdateFolder" }, UpdateFolderRequest, S.Struct({}), [ConcurrentModificationException, ConflictingOperationException, EntityAlreadyExistsException, EntityNotExistsException, FailedDependencyException, LimitExceededException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Aborts the upload of the specified document version that was previously initiated
 * by InitiateDocumentVersionUpload. The client should make this call
 * only when it no longer intends to upload the document version, or fails to do
 * so.
 */export const abortDocumentVersionUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}/versions/{VersionId}", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.AbortDocumentVersionUpload" }, AbortDocumentVersionUploadRequest, S.Struct({}), [ConcurrentModificationException, EntityNotExistsException, FailedDependencyException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deactivates the specified user, which revokes the user's access to Amazon
 * WorkDocs.
 */export const deactivateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/users/{UserId}/activation", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeactivateUser" }, DeactivateUserRequest, S.Struct({}), [EntityNotExistsException, FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified comment from the document version.
 */export const deleteComment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeleteComment" }, DeleteCommentRequest, S.Struct({}), [DocumentLockedForCommentsException, EntityNotExistsException, FailedDependencyException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes custom metadata from the specified resource.
 */export const deleteCustomMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/resources/{ResourceId}/customMetadata", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeleteCustomMetadata" }, DeleteCustomMetadataRequest, DeleteCustomMetadataResponse, [EntityNotExistsException, FailedDependencyException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Permanently deletes the specified document and its associated metadata.
 */export const deleteDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeleteDocument" }, DeleteDocumentRequest, S.Struct({}), [ConcurrentModificationException, ConflictingOperationException, EntityNotExistsException, FailedDependencyException, LimitExceededException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specific version of a document.
 */export const deleteDocumentVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documentVersions/{DocumentId}/versions/{VersionId}", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeleteDocumentVersion" }, DeleteDocumentVersionRequest, S.Struct({}), [ConcurrentModificationException, ConflictingOperationException, EntityNotExistsException, FailedDependencyException, InvalidOperationException, ProhibitedStateException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Permanently deletes the specified folder and its contents.
 */export const deleteFolder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/folders/{FolderId}", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeleteFolder" }, DeleteFolderRequest, S.Struct({}), [ConcurrentModificationException, ConflictingOperationException, EntityNotExistsException, FailedDependencyException, LimitExceededException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the contents of the specified folder.
 */export const deleteFolderContents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/folders/{FolderId}/contents", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeleteFolderContents" }, DeleteFolderContentsRequest, S.Struct({}), [ConflictingOperationException, EntityNotExistsException, FailedDependencyException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified list of labels from a resource.
 */export const deleteLabels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/resources/{ResourceId}/labels", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeleteLabels" }, DeleteLabelsRequest, DeleteLabelsResponse, [EntityNotExistsException, FailedDependencyException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified subscription from the specified organization.
 */export const deleteNotificationSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}", method: "DELETE", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DeleteNotificationSubscription" }, DeleteNotificationSubscriptionRequest, S.Struct({}), [EntityNotExistsException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all the comments for the specified document version.
 */export const describeComments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}/versions/{VersionId}/comments", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DescribeComments" }, DescribeCommentsRequest, DescribeCommentsResponse, [EntityNotExistsException, FailedDependencyException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the specified notification subscriptions.
 */export const describeNotificationSubscriptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/organizations/{OrganizationId}/subscriptions", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DescribeNotificationSubscriptions" }, DescribeNotificationSubscriptionsRequest, DescribeNotificationSubscriptionsResponse, [EntityNotExistsException, ServiceUnavailableException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details of the current user for whom the authentication token was
 * generated. This is not a valid action for SigV4 (administrative API) clients.
 * 
 * 
 * This action requires an authentication token. To get an authentication token,
 * register an application with Amazon WorkDocs. For more information, see Authentication and Access
 * Control for User Applications in the
 * Amazon
 * WorkDocs Developer Guide.
 */export const getCurrentUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/me", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.GetCurrentUser" }, GetCurrentUserRequest, GetCurrentUserResponse, [EntityNotExistsException, FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves version metadata for the specified document.
 */export const getDocumentVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}/versions/{VersionId}", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.GetDocumentVersion" }, GetDocumentVersionRequest, GetDocumentVersionResponse, [EntityNotExistsException, FailedDependencyException, InvalidPasswordException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the metadata of the specified folder.
 */export const getFolder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/folders/{FolderId}", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.GetFolder" }, GetFolderRequest, GetFolderResponse, [EntityNotExistsException, FailedDependencyException, InvalidArgumentException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the path information (the hierarchy from the root folder) for the
 * specified folder.
 * 
 * 
 * By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 * requested folder and only includes the IDs of the parent folders in the path. You can
 * limit the maximum number of levels. You can also request the parent folder
 * names.
 */export const getFolderPath = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/folders/{FolderId}/path", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.GetFolderPath" }, GetFolderPathRequest, GetFolderPathResponse, [EntityNotExistsException, FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a collection of resources, including folders and documents. The only
 * `CollectionType` supported is `SHARED_WITH_ME`.
 */export const getResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/resources", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.GetResources" }, GetResourcesRequest, GetResourcesResponse, [FailedDependencyException, InvalidArgumentException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified attributes of a document. The user must have access to both
 * the document and its parent folder, if applicable.
 */export const updateDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}", method: "PATCH", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.UpdateDocument" }, UpdateDocumentRequest, S.Struct({}), [ConcurrentModificationException, ConflictingOperationException, EntityAlreadyExistsException, EntityNotExistsException, FailedDependencyException, LimitExceededException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more custom properties to the specified resource (a folder, document,
 * or version).
 */export const createCustomMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/resources/{ResourceId}/customMetadata", method: "PUT", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.CreateCustomMetadata" }, CreateCustomMetadataRequest, CreateCustomMetadataResponse, [CustomMetadataLimitExceededException, EntityNotExistsException, FailedDependencyException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a folder with the specified name and parent folder.
 */export const createFolder = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/folders", method: "POST", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.CreateFolder" }, CreateFolderRequest, CreateFolderResponse, [ConcurrentModificationException, ConflictingOperationException, EntityAlreadyExistsException, EntityNotExistsException, FailedDependencyException, LimitExceededException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified list of labels to the given resource (a document or
 * folder)
 */export const createLabels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/resources/{ResourceId}/labels", method: "PUT", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.CreateLabels" }, CreateLabelsRequest, CreateLabelsResponse, [EntityNotExistsException, FailedDependencyException, ServiceUnavailableException, TooManyLabelsException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a user in a Simple AD or Microsoft AD directory. The status of a newly
 * created user is "ACTIVE". New users can access Amazon WorkDocs.
 */export const createUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/users", method: "POST", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.CreateUser" }, CreateUserRequest, CreateUserResponse, [EntityAlreadyExistsException, FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the contents of the specified folder, including its documents and
 * subfolders.
 * 
 * 
 * By default, Amazon WorkDocs returns the first 100 active document and folder
 * metadata items. If there are more results, the response includes a marker that you can
 * use to request the next set of results. You can also request initialized
 * documents.
 */export const describeFolderContents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/folders/{FolderId}/contents", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DescribeFolderContents" }, DescribeFolderContentsRequest, DescribeFolderContentsResponse, [EntityNotExistsException, FailedDependencyException, InvalidArgumentException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the groups specified by the query. Groups are defined by the underlying
 * Active Directory.
 */export const describeGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/groups", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DescribeGroups" }, DescribeGroupsRequest, DescribeGroupsResponse, [FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the current user's special folders; the `RootFolder` and the
 * `RecycleBin`. `RootFolder` is the root of user's files and
 * folders and `RecycleBin` is the root of recycled items. This is not a valid
 * action for SigV4 (administrative API) clients.
 * 
 * 
 * This action requires an authentication token. To get an authentication token,
 * register an application with Amazon WorkDocs. For more information, see Authentication and Access
 * Control for User Applications in the
 * Amazon
 * WorkDocs Developer Guide.
 */export const describeRootFolders = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/me/root", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DescribeRootFolders" }, DescribeRootFoldersRequest, DescribeRootFoldersResponse, [FailedDependencyException, InvalidArgumentException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified users. You can describe all users or filter the results
 * (for example, by status or organization).
 * 
 * 
 * By default, Amazon WorkDocs returns the first 24 active or pending users. If there
 * are more results, the response includes a marker that you can use to request the next
 * set of results.
 */export const describeUsers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/users", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DescribeUsers" }, DescribeUsersRequest, DescribeUsersResponse, [EntityNotExistsException, FailedDependencyException, InvalidArgumentException, RequestedEntityTooLargeException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details of a document.
 */export const getDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.GetDocument" }, GetDocumentRequest, GetDocumentResponse, [EntityNotExistsException, FailedDependencyException, InvalidArgumentException, InvalidPasswordException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Activates the specified user. Only active users can access Amazon
 * WorkDocs.
 */export const activateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/users/{UserId}/activation", method: "POST", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.ActivateUser" }, ActivateUserRequest, ActivateUserResponse, [EntityNotExistsException, FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a set of permissions for the specified folder or document. The resource
 * permissions are overwritten if the principals already have different
 * permissions.
 */export const addResourcePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/resources/{ResourceId}/permissions", method: "POST", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.AddResourcePermissions" }, AddResourcePermissionsRequest, AddResourcePermissionsResponse, [FailedDependencyException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a new comment to the specified document version.
 */export const createComment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment", method: "POST", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.CreateComment" }, CreateCommentRequest, CreateCommentResponse, [DocumentLockedForCommentsException, EntityNotExistsException, FailedDependencyException, InvalidCommentOperationException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a
 * confirmation message, and must confirm the subscription.
 * 
 * 
 * For more information, see Setting up notifications for an IAM user or role in the Amazon WorkDocs Developer
 * Guide.
 */export const createNotificationSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/organizations/{OrganizationId}/subscriptions", method: "POST", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.CreateNotificationSubscription" }, CreateNotificationSubscriptionRequest, CreateNotificationSubscriptionResponse, [InvalidArgumentException, ServiceUnavailableException, TooManySubscriptionsException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the user activities in a specified time period.
 */export const describeActivities = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/activities", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DescribeActivities" }, DescribeActivitiesRequest, DescribeActivitiesResponse, [FailedDependencyException, InvalidArgumentException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the document versions for the specified document.
 * 
 * 
 * By default, only active versions are returned.
 */export const describeDocumentVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}/versions", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DescribeDocumentVersions" }, DescribeDocumentVersionsRequest, DescribeDocumentVersionsResponse, [EntityNotExistsException, FailedDependencyException, InvalidArgumentException, InvalidPasswordException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the permissions of a specified resource.
 */export const describeResourcePermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/resources/{ResourceId}/permissions", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.DescribeResourcePermissions" }, DescribeResourcePermissionsRequest, DescribeResourcePermissionsResponse, [FailedDependencyException, InvalidArgumentException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the path information (the hierarchy from the root folder) for the
 * requested document.
 * 
 * 
 * By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 * requested document and only includes the IDs of the parent folders in the path. You can
 * limit the maximum number of levels. You can also request the names of the parent
 * folders.
 */export const getDocumentPath = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents/{DocumentId}/path", method: "GET", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.GetDocumentPath" }, GetDocumentPathRequest, GetDocumentPathResponse, [EntityNotExistsException, FailedDependencyException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified attributes of the specified user, and grants or revokes
 * administrative privileges to the Amazon WorkDocs site.
 */export const updateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/users/{UserId}", method: "PATCH", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.UpdateUser" }, UpdateUserRequest, UpdateUserResponse, [DeactivatingLastSystemUserException, EntityNotExistsException, FailedDependencyException, IllegalUserStateException, InvalidArgumentException, ProhibitedStateException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Searches metadata and the content of folders, documents, document versions, and comments.
 */export const searchResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/search", method: "POST", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.SearchResources" }, SearchResourcesRequest, SearchResourcesResponse, [InvalidArgumentException, ServiceUnavailableException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new document object and version object.
 * 
 * 
 * The client specifies the parent folder ID and name of the document to upload. The
 * ID is optionally specified when creating a new version of an existing document. This is
 * the first step to upload a document. Next, upload the document to the URL returned from
 * the call, and then call UpdateDocumentVersion.
 * 
 * 
 * To cancel the document upload, call AbortDocumentVersionUpload.
 */export const initiateDocumentVersionUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-05-01", uri: "/api/v1/documents", method: "POST", sdkId: "WorkDocs", sigV4ServiceName: "workdocs", name: "AWSGorillaBoyService.InitiateDocumentVersionUpload" }, InitiateDocumentVersionUploadRequest, InitiateDocumentVersionUploadResponse, [DraftUploadOutOfSyncException, EntityAlreadyExistsException, EntityNotExistsException, FailedDependencyException, InvalidArgumentException, InvalidPasswordException, LimitExceededException, ProhibitedStateException, ResourceAlreadyCheckedOutException, ServiceUnavailableException, StorageLimitExceededException, StorageLimitWillExceedException, UnauthorizedOperationException, UnauthorizedResourceAccessException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
