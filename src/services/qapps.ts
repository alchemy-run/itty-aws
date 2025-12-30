import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const DeleteCategoryInputList = S.Array(S.String);
export const CategoryIdList = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export class AssociateLibraryItemReviewInput extends S.Class<AssociateLibraryItemReviewInput>("AssociateLibraryItemReviewInput")({instanceId: H.Header("instance-id"), libraryItemId: S.String}) {}
export class AssociateQAppWithUserInput extends S.Class<AssociateQAppWithUserInput>("AssociateQAppWithUserInput")({instanceId: H.Header("instance-id"), appId: S.String}) {}
export class BatchDeleteCategoryInput extends S.Class<BatchDeleteCategoryInput>("BatchDeleteCategoryInput")({instanceId: H.Header("instance-id"), categories: DeleteCategoryInputList}) {}
export class CreateLibraryItemInput extends S.Class<CreateLibraryItemInput>("CreateLibraryItemInput")({instanceId: H.Header("instance-id"), appId: S.String, appVersion: S.Number, categories: CategoryIdList}) {}
export class CreatePresignedUrlInput extends S.Class<CreatePresignedUrlInput>("CreatePresignedUrlInput")({instanceId: H.Header("instance-id"), cardId: S.String, appId: S.String, fileContentsSha256: S.String, fileName: S.String, scope: S.String, sessionId: S.optional(S.String)}) {}
export class DeleteLibraryItemInput extends S.Class<DeleteLibraryItemInput>("DeleteLibraryItemInput")({instanceId: H.Header("instance-id"), libraryItemId: S.String}) {}
export class DeleteQAppInput extends S.Class<DeleteQAppInput>("DeleteQAppInput")({instanceId: H.Header("instance-id"), appId: S.String}) {}
export class DescribeQAppPermissionsInput extends S.Class<DescribeQAppPermissionsInput>("DescribeQAppPermissionsInput")({instanceId: H.Header("instance-id"), appId: S.String}) {}
export class DisassociateLibraryItemReviewInput extends S.Class<DisassociateLibraryItemReviewInput>("DisassociateLibraryItemReviewInput")({instanceId: H.Header("instance-id"), libraryItemId: S.String}) {}
export class DisassociateQAppFromUserInput extends S.Class<DisassociateQAppFromUserInput>("DisassociateQAppFromUserInput")({instanceId: H.Header("instance-id"), appId: S.String}) {}
export class ExportQAppSessionDataInput extends S.Class<ExportQAppSessionDataInput>("ExportQAppSessionDataInput")({instanceId: H.Header("instance-id"), sessionId: S.String}) {}
export class GetLibraryItemInput extends S.Class<GetLibraryItemInput>("GetLibraryItemInput")({instanceId: H.Header("instance-id"), libraryItemId: S.String, appId: S.optional(S.String)}) {}
export class GetQAppInput extends S.Class<GetQAppInput>("GetQAppInput")({instanceId: H.Header("instance-id"), appId: S.String, appVersion: S.optional(S.Number)}) {}
export class GetQAppSessionInput extends S.Class<GetQAppSessionInput>("GetQAppSessionInput")({instanceId: H.Header("instance-id"), sessionId: S.String}) {}
export class GetQAppSessionMetadataInput extends S.Class<GetQAppSessionMetadataInput>("GetQAppSessionMetadataInput")({instanceId: H.Header("instance-id"), sessionId: S.String}) {}
export class ImportDocumentInput extends S.Class<ImportDocumentInput>("ImportDocumentInput")({instanceId: H.Header("instance-id"), cardId: S.String, appId: S.String, fileContentsBase64: S.String, fileName: S.String, scope: S.String, sessionId: S.optional(S.String)}) {}
export class ListCategoriesInput extends S.Class<ListCategoriesInput>("ListCategoriesInput")({instanceId: H.Header("instance-id")}) {}
export class ListLibraryItemsInput extends S.Class<ListLibraryItemsInput>("ListLibraryItemsInput")({instanceId: H.Header("instance-id"), limit: S.optional(S.Number), nextToken: S.optional(S.String), categoryId: S.optional(S.String)}) {}
export class ListQAppsInput extends S.Class<ListQAppsInput>("ListQAppsInput")({instanceId: H.Header("instance-id"), limit: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListQAppSessionDataInput extends S.Class<ListQAppSessionDataInput>("ListQAppSessionDataInput")({instanceId: H.Header("instance-id"), sessionId: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceARN: S.String}) {}
export class StopQAppSessionInput extends S.Class<StopQAppSessionInput>("StopQAppSessionInput")({instanceId: H.Header("instance-id"), sessionId: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceARN: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateLibraryItemInput extends S.Class<UpdateLibraryItemInput>("UpdateLibraryItemInput")({instanceId: H.Header("instance-id"), libraryItemId: S.String, status: S.optional(S.String), categories: S.optional(CategoryIdList)}) {}
export class UpdateLibraryItemMetadataInput extends S.Class<UpdateLibraryItemMetadataInput>("UpdateLibraryItemMetadataInput")({instanceId: H.Header("instance-id"), libraryItemId: S.String, isVerified: S.optional(S.Boolean)}) {}
export class TextInputCardInput extends S.Class<TextInputCardInput>("TextInputCardInput")({title: S.String, id: S.String, type: S.String, placeholder: S.optional(S.String), defaultValue: S.optional(S.String)}) {}
export const DocumentAttributeStringListValue = S.Array(S.String);
export const DocumentAttributeValue = S.Union(S.String, DocumentAttributeStringListValue, S.Number, S.Date);
export class DocumentAttribute extends S.Class<DocumentAttribute>("DocumentAttribute")({name: S.String, value: DocumentAttributeValue}) {}
export class AttributeFilter extends S.Class<AttributeFilter>("AttributeFilter")({andAllFilters: S.optional(S.suspend(() => AttributeFilters)), orAllFilters: S.optional(S.suspend(() => AttributeFilters)), notFilter: S.optional(S.suspend((): S.Schema<AttributeFilter, any> => AttributeFilter)), equalsTo: S.optional(DocumentAttribute), containsAll: S.optional(DocumentAttribute), containsAny: S.optional(DocumentAttribute), greaterThan: S.optional(DocumentAttribute), greaterThanOrEquals: S.optional(DocumentAttribute), lessThan: S.optional(DocumentAttribute), lessThanOrEquals: S.optional(DocumentAttribute)}) {}
export class QQueryCardInput extends S.Class<QQueryCardInput>("QQueryCardInput")({title: S.String, id: S.String, type: S.String, prompt: S.String, outputSource: S.optional(S.String), attributeFilter: S.optional(AttributeFilter)}) {}
export class QPluginCardInput extends S.Class<QPluginCardInput>("QPluginCardInput")({title: S.String, id: S.String, type: S.String, prompt: S.String, pluginId: S.String, actionIdentifier: S.optional(S.String)}) {}
export class FileUploadCardInput extends S.Class<FileUploadCardInput>("FileUploadCardInput")({title: S.String, id: S.String, type: S.String, filename: S.optional(S.String), fileId: S.optional(S.String), allowOverride: S.optional(S.Boolean)}) {}
export class FormInputCardMetadata extends S.Class<FormInputCardMetadata>("FormInputCardMetadata")({schema: S.Any}) {}
export class FormInputCardInput extends S.Class<FormInputCardInput>("FormInputCardInput")({title: S.String, id: S.String, type: S.String, metadata: FormInputCardMetadata, computeMode: S.optional(S.String)}) {}
export const CardInput = S.Union(TextInputCardInput, QQueryCardInput, QPluginCardInput, FileUploadCardInput, FormInputCardInput);
export const CardList = S.Array(CardInput);
export class AppDefinitionInput extends S.Class<AppDefinitionInput>("AppDefinitionInput")({cards: CardList, initialPrompt: S.optional(S.String)}) {}
export class UpdateQAppInput extends S.Class<UpdateQAppInput>("UpdateQAppInput")({instanceId: H.Header("instance-id"), appId: S.String, title: S.optional(S.String), description: S.optional(S.String), appDefinition: S.optional(AppDefinitionInput)}) {}
export class SubmissionMutation extends S.Class<SubmissionMutation>("SubmissionMutation")({submissionId: S.String, mutationType: S.String}) {}
export class CardValue extends S.Class<CardValue>("CardValue")({cardId: S.String, value: S.String, submissionMutation: S.optional(SubmissionMutation)}) {}
export const CardValueList = S.Array(CardValue);
export class UpdateQAppSessionInput extends S.Class<UpdateQAppSessionInput>("UpdateQAppSessionInput")({instanceId: H.Header("instance-id"), sessionId: S.String, values: S.optional(CardValueList)}) {}
export class BatchCreateCategoryInputCategory extends S.Class<BatchCreateCategoryInputCategory>("BatchCreateCategoryInputCategory")({id: S.optional(S.String), title: S.String, color: S.optional(S.String)}) {}
export const BatchCreateCategoryInputCategoryList = S.Array(BatchCreateCategoryInputCategory);
export class CategoryInput extends S.Class<CategoryInput>("CategoryInput")({id: S.String, title: S.String, color: S.optional(S.String)}) {}
export const CategoryListInput = S.Array(CategoryInput);
export const TagMap = S.Record({key: S.String, value: S.String});
export const AppRequiredCapabilities = S.Array(S.String);
export class Category extends S.Class<Category>("Category")({id: S.String, title: S.String, color: S.optional(S.String), appCount: S.optional(S.Number)}) {}
export const CategoriesList = S.Array(Category);
export const Tags = S.Record({key: S.String, value: S.String});
export class PermissionInput extends S.Class<PermissionInput>("PermissionInput")({action: S.String, principal: S.String}) {}
export const PermissionsInputList = S.Array(PermissionInput);
export class SessionSharingConfiguration extends S.Class<SessionSharingConfiguration>("SessionSharingConfiguration")({enabled: S.Boolean, acceptResponses: S.optional(S.Boolean), revealCards: S.optional(S.Boolean)}) {}
export class BatchCreateCategoryInput extends S.Class<BatchCreateCategoryInput>("BatchCreateCategoryInput")({instanceId: H.Header("instance-id"), categories: BatchCreateCategoryInputCategoryList}) {}
export class BatchUpdateCategoryInput extends S.Class<BatchUpdateCategoryInput>("BatchUpdateCategoryInput")({instanceId: H.Header("instance-id"), categories: CategoryListInput}) {}
export class CreateLibraryItemOutput extends S.Class<CreateLibraryItemOutput>("CreateLibraryItemOutput")({libraryItemId: S.String, status: S.String, createdAt: S.Date, createdBy: S.String, updatedAt: S.optional(S.Date), updatedBy: S.optional(S.String), ratingCount: S.Number, isVerified: S.optional(S.Boolean)}) {}
export class ExportQAppSessionDataOutput extends S.Class<ExportQAppSessionDataOutput>("ExportQAppSessionDataOutput")({csvFileLink: S.String, expiresAt: S.Date, sessionArn: S.String}) {}
export class GetQAppSessionMetadataOutput extends S.Class<GetQAppSessionMetadataOutput>("GetQAppSessionMetadataOutput")({sessionId: S.String, sessionArn: S.String, sessionName: S.optional(S.String), sharingConfiguration: SessionSharingConfiguration, sessionOwner: S.optional(S.Boolean)}) {}
export class ImportDocumentOutput extends S.Class<ImportDocumentOutput>("ImportDocumentOutput")({fileId: S.optional(S.String)}) {}
export class ListCategoriesOutput extends S.Class<ListCategoriesOutput>("ListCategoriesOutput")({categories: S.optional(CategoriesList)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceARN: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const CategoryList = S.Array(Category);
export class UpdateLibraryItemOutput extends S.Class<UpdateLibraryItemOutput>("UpdateLibraryItemOutput")({libraryItemId: S.String, appId: S.String, appVersion: S.Number, categories: CategoryList, status: S.String, createdAt: S.Date, createdBy: S.String, updatedAt: S.optional(S.Date), updatedBy: S.optional(S.String), ratingCount: S.Number, isRatedByUser: S.optional(S.Boolean), userCount: S.optional(S.Number), isVerified: S.optional(S.Boolean)}) {}
export class UpdateQAppOutput extends S.Class<UpdateQAppOutput>("UpdateQAppOutput")({appId: S.String, appArn: S.String, title: S.String, description: S.optional(S.String), initialPrompt: S.optional(S.String), appVersion: S.Number, status: S.String, createdAt: S.Date, createdBy: S.String, updatedAt: S.Date, updatedBy: S.String, requiredCapabilities: S.optional(AppRequiredCapabilities)}) {}
export class UpdateQAppPermissionsInput extends S.Class<UpdateQAppPermissionsInput>("UpdateQAppPermissionsInput")({instanceId: H.Header("instance-id"), appId: S.String, grantPermissions: S.optional(PermissionsInputList), revokePermissions: S.optional(PermissionsInputList)}) {}
export class UpdateQAppSessionOutput extends S.Class<UpdateQAppSessionOutput>("UpdateQAppSessionOutput")({sessionId: S.String, sessionArn: S.String}) {}
export class UpdateQAppSessionMetadataInput extends S.Class<UpdateQAppSessionMetadataInput>("UpdateQAppSessionMetadataInput")({instanceId: H.Header("instance-id"), sessionId: S.String, sessionName: S.optional(S.String), sharingConfiguration: SessionSharingConfiguration}) {}
export class ConversationMessage extends S.Class<ConversationMessage>("ConversationMessage")({body: S.String, type: S.String}) {}
export const MessageList = S.Array(ConversationMessage);
export const PresignedUrlFields = S.Record({key: S.String, value: S.String});
export class LibraryItemMember extends S.Class<LibraryItemMember>("LibraryItemMember")({libraryItemId: S.String, appId: S.String, appVersion: S.Number, categories: CategoryList, status: S.String, createdAt: S.Date, createdBy: S.String, updatedAt: S.optional(S.Date), updatedBy: S.optional(S.String), ratingCount: S.Number, isRatedByUser: S.optional(S.Boolean), userCount: S.optional(S.Number), isVerified: S.optional(S.Boolean)}) {}
export const LibraryItemList = S.Array(LibraryItemMember);
export class UserAppItem extends S.Class<UserAppItem>("UserAppItem")({appId: S.String, appArn: S.String, title: S.String, description: S.optional(S.String), createdAt: S.Date, canEdit: S.optional(S.Boolean), status: S.optional(S.String), isVerified: S.optional(S.Boolean)}) {}
export const UserAppsList = S.Array(UserAppItem);
export const PredictQAppInputOptions = S.Union(MessageList, S.String);
export class CreatePresignedUrlOutput extends S.Class<CreatePresignedUrlOutput>("CreatePresignedUrlOutput")({fileId: S.String, presignedUrl: S.String, presignedUrlFields: PresignedUrlFields, presignedUrlExpiration: S.Date}) {}
export type AttributeFilters = AttributeFilter[];
export const AttributeFilters = S.Array(S.suspend((): S.Schema<AttributeFilter, any> => AttributeFilter)) as any as S.Schema<AttributeFilters>;
export class GetLibraryItemOutput extends S.Class<GetLibraryItemOutput>("GetLibraryItemOutput")({libraryItemId: S.String, appId: S.String, appVersion: S.Number, categories: CategoryList, status: S.String, createdAt: S.Date, createdBy: S.String, updatedAt: S.optional(S.Date), updatedBy: S.optional(S.String), ratingCount: S.Number, isRatedByUser: S.optional(S.Boolean), userCount: S.optional(S.Number), isVerified: S.optional(S.Boolean)}) {}
export class ListLibraryItemsOutput extends S.Class<ListLibraryItemsOutput>("ListLibraryItemsOutput")({libraryItems: S.optional(LibraryItemList), nextToken: S.optional(S.String)}) {}
export class ListQAppsOutput extends S.Class<ListQAppsOutput>("ListQAppsOutput")({apps: UserAppsList, nextToken: S.optional(S.String)}) {}
export class PredictQAppInput extends S.Class<PredictQAppInput>("PredictQAppInput")({instanceId: H.Header("instance-id"), options: S.optional(PredictQAppInputOptions)}) {}
export class StartQAppSessionInput extends S.Class<StartQAppSessionInput>("StartQAppSessionInput")({instanceId: H.Header("instance-id"), appId: S.String, appVersion: S.Number, initialValues: S.optional(CardValueList), sessionId: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class PrincipalOutput extends S.Class<PrincipalOutput>("PrincipalOutput")({userId: S.optional(S.String), userType: S.optional(S.String), email: S.optional(S.String)}) {}
export class PermissionOutput extends S.Class<PermissionOutput>("PermissionOutput")({action: S.String, principal: PrincipalOutput}) {}
export const PermissionsOutputList = S.Array(PermissionOutput);
export class UpdateQAppPermissionsOutput extends S.Class<UpdateQAppPermissionsOutput>("UpdateQAppPermissionsOutput")({resourceArn: S.optional(S.String), appId: S.optional(S.String), permissions: S.optional(PermissionsOutputList)}) {}
export class UpdateQAppSessionMetadataOutput extends S.Class<UpdateQAppSessionMetadataOutput>("UpdateQAppSessionMetadataOutput")({sessionId: S.String, sessionArn: S.String, sessionName: S.optional(S.String), sharingConfiguration: SessionSharingConfiguration}) {}
export class User extends S.Class<User>("User")({userId: S.optional(S.String)}) {}
export const DependencyList = S.Array(S.String);
export const MemoryReferenceList = S.Array(S.String);
export class QAppSessionData extends S.Class<QAppSessionData>("QAppSessionData")({cardId: S.String, value: S.optional(S.Any), user: User, submissionId: S.optional(S.String), timestamp: S.optional(S.Date)}) {}
export const QAppSessionDataList = S.Array(QAppSessionData);
export class TextInputCard extends S.Class<TextInputCard>("TextInputCard")({id: S.String, title: S.String, dependencies: DependencyList, type: S.String, placeholder: S.optional(S.String), defaultValue: S.optional(S.String)}) {}
export class QQueryCard extends S.Class<QQueryCard>("QQueryCard")({id: S.String, title: S.String, dependencies: DependencyList, type: S.String, prompt: S.String, outputSource: S.String, attributeFilter: S.optional(AttributeFilter), memoryReferences: S.optional(MemoryReferenceList)}) {}
export class QPluginCard extends S.Class<QPluginCard>("QPluginCard")({id: S.String, title: S.String, dependencies: DependencyList, type: S.String, prompt: S.String, pluginType: S.String, pluginId: S.String, actionIdentifier: S.optional(S.String)}) {}
export class FileUploadCard extends S.Class<FileUploadCard>("FileUploadCard")({id: S.String, title: S.String, dependencies: DependencyList, type: S.String, filename: S.optional(S.String), fileId: S.optional(S.String), allowOverride: S.optional(S.Boolean)}) {}
export class FormInputCard extends S.Class<FormInputCard>("FormInputCard")({id: S.String, title: S.String, dependencies: DependencyList, type: S.String, metadata: FormInputCardMetadata, computeMode: S.optional(S.String)}) {}
export class Submission extends S.Class<Submission>("Submission")({value: S.optional(S.Any), submissionId: S.optional(S.String), timestamp: S.optional(S.Date)}) {}
export const SubmissionList = S.Array(Submission);
export class DescribeQAppPermissionsOutput extends S.Class<DescribeQAppPermissionsOutput>("DescribeQAppPermissionsOutput")({resourceArn: S.optional(S.String), appId: S.optional(S.String), permissions: S.optional(PermissionsOutputList)}) {}
export class ListQAppSessionDataOutput extends S.Class<ListQAppSessionDataOutput>("ListQAppSessionDataOutput")({sessionId: S.String, sessionArn: S.String, sessionData: S.optional(QAppSessionDataList), nextToken: S.optional(S.String)}) {}
export class StartQAppSessionOutput extends S.Class<StartQAppSessionOutput>("StartQAppSessionOutput")({sessionId: S.String, sessionArn: S.String}) {}
export const Card = S.Union(TextInputCard, QQueryCard, QPluginCard, FileUploadCard, FormInputCard);
export const CardModelList = S.Array(Card);
export class CardStatus extends S.Class<CardStatus>("CardStatus")({currentState: S.String, currentValue: S.String, submissions: S.optional(SubmissionList)}) {}
export class AppDefinition extends S.Class<AppDefinition>("AppDefinition")({appDefinitionVersion: S.String, cards: CardModelList, canEdit: S.optional(S.Boolean)}) {}
export const CardStatusMap = S.Record({key: S.String, value: CardStatus});
export class PredictAppDefinition extends S.Class<PredictAppDefinition>("PredictAppDefinition")({title: S.String, description: S.optional(S.String), appDefinition: AppDefinitionInput}) {}
export class GetQAppOutput extends S.Class<GetQAppOutput>("GetQAppOutput")({appId: S.String, appArn: S.String, title: S.String, description: S.optional(S.String), initialPrompt: S.optional(S.String), appVersion: S.Number, status: S.String, createdAt: S.Date, createdBy: S.String, updatedAt: S.Date, updatedBy: S.String, requiredCapabilities: S.optional(AppRequiredCapabilities), appDefinition: AppDefinition}) {}
export class GetQAppSessionOutput extends S.Class<GetQAppSessionOutput>("GetQAppSessionOutput")({sessionId: S.String, sessionArn: S.String, sessionName: S.optional(S.String), appVersion: S.optional(S.Number), latestPublishedAppVersion: S.optional(S.Number), status: S.String, cardStatus: CardStatusMap, userIsHost: S.optional(S.Boolean)}) {}
export class PredictQAppOutput extends S.Class<PredictQAppOutput>("PredictQAppOutput")({app: PredictAppDefinition, problemStatement: S.String}) {}
export class CreateQAppInput extends S.Class<CreateQAppInput>("CreateQAppInput")({instanceId: H.Header("instance-id"), title: S.String, description: S.optional(S.String), appDefinition: AppDefinitionInput, tags: S.optional(TagMap)}) {}
export class CreateQAppOutput extends S.Class<CreateQAppOutput>("CreateQAppOutput")({appId: S.String, appArn: S.String, title: S.String, description: S.optional(S.String), initialPrompt: S.optional(S.String), appVersion: S.Number, status: S.String, createdAt: S.Date, createdBy: S.String, updatedAt: S.Date, updatedBy: S.String, requiredCapabilities: S.optional(AppRequiredCapabilities)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ContentTooLargeException extends S.TaggedError<ContentTooLargeException>()("ContentTooLargeException", {}) {};

//# Operations
/**
 * Disassociates tags from an Amazon Q Apps resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/tags/{resourceARN}", method: "DELETE", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the verification status of a library item for an Amazon Q App.
 */export const updateLibraryItemMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.updateItemMetadata", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.UpdateLibraryItemMetadata" }, UpdateLibraryItemMetadataInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a rating or review for a library item with the user submitting the request. This increments the rating count for the specified library item.
 */export const associateLibraryItemReview = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.associateItemRating", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.AssociateLibraryItemReview" }, AssociateLibraryItemReviewInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation creates a link between the user's identity calling the operation and a specific Q App. This is useful to mark the Q App as a *favorite* for the user if the user doesn't own the Amazon Q App so they can still run it and see it in their inventory of Q Apps.
 */export const associateQAppWithUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.install", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.AssociateQAppWithUser" }, AssociateQAppWithUserInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see Custom labels for Amazon Q Apps.
 */export const batchCreateCategory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.createCategories", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.BatchCreateCategory" }, BatchCreateCategoryInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see Custom labels for Amazon Q Apps.
 */export const batchDeleteCategory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.deleteCategories", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.BatchDeleteCategory" }, BatchDeleteCategoryInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see Custom labels for Amazon Q Apps.
 */export const batchUpdateCategory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.updateCategories", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.BatchUpdateCategory" }, BatchUpdateCategoryInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new library item for an Amazon Q App, allowing it to be discovered and used by other allowed users.
 */export const createLibraryItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.createItem", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.CreateLibraryItem" }, CreateLibraryItemInput, CreateLibraryItemOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a library item for an Amazon Q App, removing it from the library so it can no longer be discovered or used by other users.
 */export const deleteLibraryItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.deleteItem", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.DeleteLibraryItem" }, DeleteLibraryItemInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Amazon Q App owned by the user. If the Q App was previously published to the library, it is also removed from the library.
 */export const deleteQApp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.delete", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.DeleteQApp" }, DeleteQAppInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a rating or review previously submitted by the user for a library item.
 */export const disassociateLibraryItemReview = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.disassociateItemRating", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.DisassociateLibraryItemReview" }, DisassociateLibraryItemReviewInput, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a Q App from a user removing the user's access to run the Q App.
 */export const disassociateQAppFromUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.uninstall", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.DisassociateQAppFromUser" }, DisassociateQAppFromUserInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Exports the collected data of a Q App data collection session.
 */export const exportQAppSessionData = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/runtime.exportQAppSessionData", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.ExportQAppSessionData" }, ExportQAppSessionDataInput, ExportQAppSessionDataOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current configuration of a Q App session.
 */export const getQAppSessionMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/runtime.getQAppSessionMetadata", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.GetQAppSessionMetadata" }, GetQAppSessionMetadataInput, GetQAppSessionMetadataOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the categories of a Amazon Q Business application environment instance. For more information, see Custom labels for Amazon Q Apps.
 */export const listCategories = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.listCategories", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.ListCategories" }, ListCategoriesInput, ListCategoriesOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags associated with an Amazon Q Apps resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/tags/{resourceARN}", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops an active session for an Amazon Q App.This deletes all data related to the session and makes it invalid for future uses. The results of the session will be persisted as part of the conversation.
 */export const stopQAppSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/runtime.deleteMiniAppRun", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.StopQAppSession" }, StopQAppSessionInput, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates tags with an Amazon Q Apps resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/tags/{resourceARN}", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the library item for an Amazon Q App.
 */export const updateLibraryItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.updateItem", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.UpdateLibraryItem" }, UpdateLibraryItemInput, UpdateLibraryItemOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing Amazon Q App, allowing modifications to its title, description, and definition.
 */export const updateQApp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.update", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.UpdateQApp" }, UpdateQAppInput, UpdateQAppOutput, [AccessDeniedException, ContentTooLargeException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the session for a given Q App `sessionId`. This is only valid when at least one card of the session is in the `WAITING` state. Data for each `WAITING` card can be provided as input. If inputs are not provided, the call will be accepted but session will not move forward. Inputs for cards that are not in the `WAITING` status will be ignored.
 */export const updateQAppSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/runtime.updateQAppSession", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.UpdateQAppSession" }, UpdateQAppSessionInput, UpdateQAppSessionOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a presigned URL for an S3 POST operation to upload a file. You can use this URL to set a default file for a `FileUploadCard` in a Q App definition or to provide a file for a single Q App run. The `scope` parameter determines how the file will be used, either at the app definition level or the app session level.
 * 
 * 
 * The IAM permissions are derived from the `qapps:ImportDocument` action. For more information on the IAM policy for Amazon Q Apps, see IAM permissions for using Amazon Q Apps.
 */export const createPresignedUrl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.createPresignedUrl", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.CreatePresignedUrl" }, CreatePresignedUrlInput, CreatePresignedUrlOutput, [AccessDeniedException, InternalServerException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about a library item for an Amazon Q App, including its metadata, categories, ratings, and usage statistics.
 */export const getLibraryItem = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.getItem", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.GetLibraryItem" }, GetLibraryItemInput, GetLibraryItemOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Uploads a file that can then be used either as a default in a `FileUploadCard` from Q App definition or as a file that is used inside a single Q App run. The purpose of the document is determined by a scope parameter that indicates whether it is at the app definition level or at the app session level.
 */export const importDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.importDocument", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.ImportDocument" }, ImportDocumentInput, ImportDocumentOutput, [AccessDeniedException, ContentTooLargeException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the library items for Amazon Q Apps that are published and available for users in your Amazon Web Services account.
 */export const listLibraryItems = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/catalog.list", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.ListLibraryItems" }, ListLibraryItemsInput, ListLibraryItemsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Amazon Q Apps owned by or associated with the user either because they created it or because they used it from the library in the past. The user identity is extracted from the credentials used to invoke this operation..
 */export const listQApps = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.list", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.ListQApps" }, ListQAppsInput, ListQAppsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates read permissions for a Amazon Q App in Amazon Q Business application environment instance.
 */export const updateQAppPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.updateQAppPermissions", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.UpdateQAppPermissions" }, UpdateQAppPermissionsInput, UpdateQAppPermissionsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the configuration metadata of a session for a given Q App `sessionId`.
 */export const updateQAppSessionMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/runtime.updateQAppSessionMetadata", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.UpdateQAppSessionMetadata" }, UpdateQAppSessionMetadataInput, UpdateQAppSessionMetadataOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes read permissions for a Amazon Q App in Amazon Q Business application environment instance.
 */export const describeQAppPermissions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.describeQAppPermissions", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.DescribeQAppPermissions" }, DescribeQAppPermissionsInput, DescribeQAppPermissionsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the collected data of a Q App data collection session.
 */export const listQAppSessionData = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/runtime.listQAppSessionData", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.ListQAppSessionData" }, ListQAppSessionDataInput, ListQAppSessionDataOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a new session for an Amazon Q App, allowing inputs to be provided and the app to be run.
 * 
 * 
 * Each Q App session will be condensed into a single conversation in the web experience.
 */export const startQAppSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/runtime.startQAppSession", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.StartQAppSession" }, StartQAppSessionInput, StartQAppSessionOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the full details of an Q App, including its definition specifying the cards and flow.
 */export const getQApp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.get", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.GetQApp" }, GetQAppInput, GetQAppOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current state and results for an active session of an Amazon Q App.
 */export const getQAppSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/runtime.getQAppSession", method: "GET", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.GetQAppSession" }, GetQAppSessionInput, GetQAppSessionOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates an Amazon Q App definition based on either a conversation or a problem statement provided as input.The resulting app definition can be used to call `CreateQApp`. This API doesn't create Amazon Q Apps directly.
 */export const predictQApp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.predictQApp", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.PredictQApp" }, PredictQAppInput, PredictQAppOutput, [AccessDeniedException, InternalServerException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new Amazon Q App based on the provided definition. The Q App definition specifies the cards and flow of the Q App. This operation also calculates the dependencies between the cards by inspecting the references in the prompts.
 */export const createQApp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/apps.create", sdkId: "QApps", sigV4ServiceName: "qapps", name: "QAppsService.CreateQApp" }, CreateQAppInput, CreateQAppOutput, [AccessDeniedException, ConflictException, ContentTooLargeException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, UnauthorizedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
