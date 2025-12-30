import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const QIamActions = S.Array(S.String);
export const UserGroups = S.Array(S.String);
export const DataSourceIds = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export class CancelSubscriptionRequest extends S.Class<CancelSubscriptionRequest>("CancelSubscriptionRequest")({applicationId: S.String, subscriptionId: S.String}) {}
export class CheckDocumentAccessRequest extends S.Class<CheckDocumentAccessRequest>("CheckDocumentAccessRequest")({applicationId: S.String, indexId: S.String, userId: S.String, documentId: S.String, dataSourceId: S.optional(S.String)}) {}
export class CreateAnonymousWebExperienceUrlRequest extends S.Class<CreateAnonymousWebExperienceUrlRequest>("CreateAnonymousWebExperienceUrlRequest")({applicationId: S.String, webExperienceId: S.String, sessionDurationInMinutes: S.optional(S.Number)}) {}
export class DeleteAttachmentRequest extends S.Class<DeleteAttachmentRequest>("DeleteAttachmentRequest")({applicationId: S.String, conversationId: S.String, attachmentId: S.String, userId: S.optional(S.String)}) {}
export class DeleteAttachmentResponse extends S.Class<DeleteAttachmentResponse>("DeleteAttachmentResponse")({}) {}
export class DeleteChatControlsConfigurationRequest extends S.Class<DeleteChatControlsConfigurationRequest>("DeleteChatControlsConfigurationRequest")({applicationId: S.String}) {}
export class DeleteChatControlsConfigurationResponse extends S.Class<DeleteChatControlsConfigurationResponse>("DeleteChatControlsConfigurationResponse")({}) {}
export class DeleteChatResponseConfigurationRequest extends S.Class<DeleteChatResponseConfigurationRequest>("DeleteChatResponseConfigurationRequest")({applicationId: S.String, chatResponseConfigurationId: S.String}) {}
export class DeleteChatResponseConfigurationResponse extends S.Class<DeleteChatResponseConfigurationResponse>("DeleteChatResponseConfigurationResponse")({}) {}
export class DeleteConversationRequest extends S.Class<DeleteConversationRequest>("DeleteConversationRequest")({conversationId: S.String, applicationId: S.String, userId: S.optional(S.String)}) {}
export class DeleteConversationResponse extends S.Class<DeleteConversationResponse>("DeleteConversationResponse")({}) {}
export class DeleteGroupRequest extends S.Class<DeleteGroupRequest>("DeleteGroupRequest")({applicationId: S.String, indexId: S.String, groupName: S.String, dataSourceId: S.optional(S.String)}) {}
export class DeleteGroupResponse extends S.Class<DeleteGroupResponse>("DeleteGroupResponse")({}) {}
export class DeleteUserRequest extends S.Class<DeleteUserRequest>("DeleteUserRequest")({applicationId: S.String, userId: S.String}) {}
export class DeleteUserResponse extends S.Class<DeleteUserResponse>("DeleteUserResponse")({}) {}
export class DisassociatePermissionRequest extends S.Class<DisassociatePermissionRequest>("DisassociatePermissionRequest")({applicationId: S.String, statementId: S.String}) {}
export class DisassociatePermissionResponse extends S.Class<DisassociatePermissionResponse>("DisassociatePermissionResponse")({}) {}
export class GetChatControlsConfigurationRequest extends S.Class<GetChatControlsConfigurationRequest>("GetChatControlsConfigurationRequest")({applicationId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class GetChatResponseConfigurationRequest extends S.Class<GetChatResponseConfigurationRequest>("GetChatResponseConfigurationRequest")({applicationId: S.String, chatResponseConfigurationId: S.String}) {}
export class GetDocumentContentRequest extends S.Class<GetDocumentContentRequest>("GetDocumentContentRequest")({applicationId: S.String, indexId: S.String, dataSourceId: S.optional(S.String), documentId: S.String, outputFormat: S.optional(S.String)}) {}
export class GetGroupRequest extends S.Class<GetGroupRequest>("GetGroupRequest")({applicationId: S.String, indexId: S.String, groupName: S.String, dataSourceId: S.optional(S.String)}) {}
export class GetMediaRequest extends S.Class<GetMediaRequest>("GetMediaRequest")({applicationId: S.String, conversationId: S.String, messageId: S.String, mediaId: S.String}) {}
export class GetPolicyRequest extends S.Class<GetPolicyRequest>("GetPolicyRequest")({applicationId: S.String}) {}
export class GetUserRequest extends S.Class<GetUserRequest>("GetUserRequest")({applicationId: S.String, userId: S.String}) {}
export class ListAttachmentsRequest extends S.Class<ListAttachmentsRequest>("ListAttachmentsRequest")({applicationId: S.String, conversationId: S.optional(S.String), userId: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListChatResponseConfigurationsRequest extends S.Class<ListChatResponseConfigurationsRequest>("ListChatResponseConfigurationsRequest")({applicationId: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListConversationsRequest extends S.Class<ListConversationsRequest>("ListConversationsRequest")({applicationId: S.String, userId: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDataSourceSyncJobsRequest extends S.Class<ListDataSourceSyncJobsRequest>("ListDataSourceSyncJobsRequest")({dataSourceId: S.String, applicationId: S.String, indexId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), startTime: S.optional(S.Date), endTime: S.optional(S.Date), statusFilter: S.optional(S.String)}) {}
export class ListDocumentsRequest extends S.Class<ListDocumentsRequest>("ListDocumentsRequest")({applicationId: S.String, indexId: S.String, dataSourceIds: S.optional(DataSourceIds), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListGroupsRequest extends S.Class<ListGroupsRequest>("ListGroupsRequest")({applicationId: S.String, indexId: S.String, updatedEarlierThan: S.Date, dataSourceId: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListMessagesRequest extends S.Class<ListMessagesRequest>("ListMessagesRequest")({conversationId: S.String, applicationId: S.String, userId: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPluginActionsRequest extends S.Class<ListPluginActionsRequest>("ListPluginActionsRequest")({applicationId: S.String, pluginId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPluginTypeActionsRequest extends S.Class<ListPluginTypeActionsRequest>("ListPluginTypeActionsRequest")({pluginType: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListPluginTypeMetadataRequest extends S.Class<ListPluginTypeMetadataRequest>("ListPluginTypeMetadataRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListSubscriptionsRequest extends S.Class<ListSubscriptionsRequest>("ListSubscriptionsRequest")({applicationId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceARN: S.String}) {}
export class StartDataSourceSyncJobRequest extends S.Class<StartDataSourceSyncJobRequest>("StartDataSourceSyncJobRequest")({dataSourceId: S.String, applicationId: S.String, indexId: S.String}) {}
export class StopDataSourceSyncJobRequest extends S.Class<StopDataSourceSyncJobRequest>("StopDataSourceSyncJobRequest")({dataSourceId: S.String, applicationId: S.String, indexId: S.String}) {}
export class StopDataSourceSyncJobResponse extends S.Class<StopDataSourceSyncJobResponse>("StopDataSourceSyncJobResponse")({}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const Tags = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceARN: S.String, tags: Tags}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceARN: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class InstructionCollection extends S.Class<InstructionCollection>("InstructionCollection")({responseLength: S.optional(S.String), targetAudience: S.optional(S.String), perspective: S.optional(S.String), outputStyle: S.optional(S.String), identity: S.optional(S.String), tone: S.optional(S.String), customInstructions: S.optional(S.String), examples: S.optional(S.String)}) {}
export class ResponseConfiguration extends S.Class<ResponseConfiguration>("ResponseConfiguration")({instructionCollection: S.optional(InstructionCollection)}) {}
export const ResponseConfigurations = S.Record({key: S.String, value: ResponseConfiguration});
export class UpdateChatResponseConfigurationRequest extends S.Class<UpdateChatResponseConfigurationRequest>("UpdateChatResponseConfigurationRequest")({applicationId: S.String, chatResponseConfigurationId: S.String, displayName: S.optional(S.String), responseConfigurations: ResponseConfigurations, clientToken: S.optional(S.String)}) {}
export class UpdateChatResponseConfigurationResponse extends S.Class<UpdateChatResponseConfigurationResponse>("UpdateChatResponseConfigurationResponse")({}) {}
export class UpdateSubscriptionRequest extends S.Class<UpdateSubscriptionRequest>("UpdateSubscriptionRequest")({applicationId: S.String, subscriptionId: S.String, type: S.String}) {}
export class UserAlias extends S.Class<UserAlias>("UserAlias")({indexId: S.optional(S.String), dataSourceId: S.optional(S.String), userId: S.String}) {}
export const UserAliases = S.Array(UserAlias);
export class UpdateUserRequest extends S.Class<UpdateUserRequest>("UpdateUserRequest")({applicationId: S.String, userId: S.String, userAliasesToUpdate: S.optional(UserAliases), userAliasesToDelete: S.optional(UserAliases)}) {}
export const PermissionConditionValues = S.Array(S.String);
export class EndOfInputEvent extends S.Class<EndOfInputEvent>("EndOfInputEvent")({}) {}
export type AttributeFilters = AttributeFilter[];
export const AttributeFilters = S.Array(S.suspend((): S.Schema<AttributeFilter, any> => AttributeFilter)) as any as S.Schema<AttributeFilters>;
export const BlockedPhrases = S.Array(S.String);
export const ExampleChatMessages = S.Array(S.String);
export class PermissionCondition extends S.Class<PermissionCondition>("PermissionCondition")({conditionOperator: S.String, conditionKey: S.String, conditionValues: PermissionConditionValues}) {}
export const PermissionConditions = S.Array(PermissionCondition);
export class DeleteDocument extends S.Class<DeleteDocument>("DeleteDocument")({documentId: S.String}) {}
export const DeleteDocuments = S.Array(DeleteDocument);
export const DocumentAttributeStringListValue = S.Array(S.String);
export const DocumentAttributeValue = S.Union(S.String, DocumentAttributeStringListValue, S.Number, S.Date);
export class DocumentAttribute extends S.Class<DocumentAttribute>("DocumentAttribute")({name: S.String, value: DocumentAttributeValue}) {}
export class AttributeFilter extends S.Class<AttributeFilter>("AttributeFilter")({andAllFilters: S.optional(S.suspend(() => AttributeFilters)), orAllFilters: S.optional(S.suspend(() => AttributeFilters)), notFilter: S.optional(S.suspend((): S.Schema<AttributeFilter, any> => AttributeFilter)), equalsTo: S.optional(DocumentAttribute), containsAll: S.optional(DocumentAttribute), containsAny: S.optional(DocumentAttribute), greaterThan: S.optional(DocumentAttribute), greaterThanOrEquals: S.optional(DocumentAttribute), lessThan: S.optional(DocumentAttribute), lessThanOrEquals: S.optional(DocumentAttribute)}) {}
export const SubscriptionPrincipal = S.Union(S.String, S.String);
export class ErrorDetail extends S.Class<ErrorDetail>("ErrorDetail")({errorMessage: S.optional(S.String), errorCode: S.optional(S.String)}) {}
export class GroupStatusDetail extends S.Class<GroupStatusDetail>("GroupStatusDetail")({status: S.optional(S.String), lastUpdatedAt: S.optional(S.Date), errorDetail: S.optional(ErrorDetail)}) {}
export const GroupStatusDetails = S.Array(GroupStatusDetail);
export class MessageUsefulnessFeedback extends S.Class<MessageUsefulnessFeedback>("MessageUsefulnessFeedback")({usefulness: S.String, reason: S.optional(S.String), comment: S.optional(S.String), submittedAt: S.Date}) {}
export class OrchestrationConfiguration extends S.Class<OrchestrationConfiguration>("OrchestrationConfiguration")({control: S.String}) {}
export class BlockedPhrasesConfigurationUpdate extends S.Class<BlockedPhrasesConfigurationUpdate>("BlockedPhrasesConfigurationUpdate")({blockedPhrasesToCreateOrUpdate: S.optional(BlockedPhrases), blockedPhrasesToDelete: S.optional(BlockedPhrases), systemMessageOverride: S.optional(S.String)}) {}
export class CreatorModeConfiguration extends S.Class<CreatorModeConfiguration>("CreatorModeConfiguration")({creatorModeControl: S.String}) {}
export class HallucinationReductionConfiguration extends S.Class<HallucinationReductionConfiguration>("HallucinationReductionConfiguration")({hallucinationReductionControl: S.optional(S.String)}) {}
export class AssociatePermissionRequest extends S.Class<AssociatePermissionRequest>("AssociatePermissionRequest")({applicationId: S.String, statementId: S.String, actions: QIamActions, conditions: S.optional(PermissionConditions), principal: S.String}) {}
export class BatchDeleteDocumentRequest extends S.Class<BatchDeleteDocumentRequest>("BatchDeleteDocumentRequest")({applicationId: S.String, indexId: S.String, documents: DeleteDocuments, dataSourceSyncId: S.optional(S.String)}) {}
export class CreateAnonymousWebExperienceUrlResponse extends S.Class<CreateAnonymousWebExperienceUrlResponse>("CreateAnonymousWebExperienceUrlResponse")({anonymousUrl: S.optional(S.String)}) {}
export class CreateSubscriptionRequest extends S.Class<CreateSubscriptionRequest>("CreateSubscriptionRequest")({applicationId: S.String, principal: SubscriptionPrincipal, type: S.String, clientToken: S.optional(S.String)}) {}
export class CreateUserRequest extends S.Class<CreateUserRequest>("CreateUserRequest")({applicationId: S.String, userId: S.String, userAliases: S.optional(UserAliases), clientToken: S.optional(S.String)}) {}
export class CreateUserResponse extends S.Class<CreateUserResponse>("CreateUserResponse")({}) {}
export class GetDocumentContentResponse extends S.Class<GetDocumentContentResponse>("GetDocumentContentResponse")({presignedUrl: S.String, mimeType: S.String}) {}
export class GetMediaResponse extends S.Class<GetMediaResponse>("GetMediaResponse")({mediaBytes: S.optional(H.StreamBody()), mediaMimeType: S.optional(S.String)}) {}
export class GetPolicyResponse extends S.Class<GetPolicyResponse>("GetPolicyResponse")({policy: S.optional(S.String)}) {}
export class GetUserResponse extends S.Class<GetUserResponse>("GetUserResponse")({userAliases: S.optional(UserAliases)}) {}
export class ActionSummary extends S.Class<ActionSummary>("ActionSummary")({actionIdentifier: S.optional(S.String), displayName: S.optional(S.String), instructionExample: S.optional(S.String), description: S.optional(S.String)}) {}
export const Actions = S.Array(ActionSummary);
export class ListPluginTypeActionsResponse extends S.Class<ListPluginTypeActionsResponse>("ListPluginTypeActionsResponse")({nextToken: S.optional(S.String), items: S.optional(Actions)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(Tags)}) {}
export class PutFeedbackRequest extends S.Class<PutFeedbackRequest>("PutFeedbackRequest")({applicationId: S.String, userId: S.optional(S.String), conversationId: S.String, messageId: S.String, messageCopiedAt: S.optional(S.Date), messageUsefulness: S.optional(MessageUsefulnessFeedback)}) {}
export class StartDataSourceSyncJobResponse extends S.Class<StartDataSourceSyncJobResponse>("StartDataSourceSyncJobResponse")({executionId: S.optional(S.String)}) {}
export class SubscriptionDetails extends S.Class<SubscriptionDetails>("SubscriptionDetails")({type: S.optional(S.String)}) {}
export class UpdateSubscriptionResponse extends S.Class<UpdateSubscriptionResponse>("UpdateSubscriptionResponse")({subscriptionArn: S.optional(S.String), currentSubscription: S.optional(SubscriptionDetails), nextSubscription: S.optional(SubscriptionDetails)}) {}
export class UpdateUserResponse extends S.Class<UpdateUserResponse>("UpdateUserResponse")({userAliasesAdded: S.optional(UserAliases), userAliasesUpdated: S.optional(UserAliases), userAliasesDeleted: S.optional(UserAliases)}) {}
export class S3 extends S.Class<S3>("S3")({bucket: S.String, key: S.String}) {}
export const DocumentContent = S.Union(H.StreamBody(), S3);
export class PluginConfiguration extends S.Class<PluginConfiguration>("PluginConfiguration")({pluginId: S.String}) {}
export const ChatModeConfiguration = S.Union(PluginConfiguration);
export class ConfigurationEvent extends S.Class<ConfigurationEvent>("ConfigurationEvent")({chatMode: S.optional(S.String), chatModeConfiguration: S.optional(ChatModeConfiguration), attributeFilter: S.optional(AttributeFilter)}) {}
export class TextInputEvent extends S.Class<TextInputEvent>("TextInputEvent")({userMessage: S.String}) {}
export class ConversationSource extends S.Class<ConversationSource>("ConversationSource")({conversationId: S.String, attachmentId: S.String}) {}
export const CopyFromSource = S.Union(ConversationSource);
export class AttachmentInput extends S.Class<AttachmentInput>("AttachmentInput")({data: S.optional(H.StreamBody()), name: S.optional(S.String), copyFrom: S.optional(CopyFromSource)}) {}
export class AttachmentInputEvent extends S.Class<AttachmentInputEvent>("AttachmentInputEvent")({attachment: S.optional(AttachmentInput)}) {}
export class ActionExecutionPayloadField extends S.Class<ActionExecutionPayloadField>("ActionExecutionPayloadField")({value: S.Any}) {}
export const ActionExecutionPayload = S.Record({key: S.String, value: ActionExecutionPayloadField});
export class ActionExecutionEvent extends S.Class<ActionExecutionEvent>("ActionExecutionEvent")({pluginId: S.String, payload: ActionExecutionPayload, payloadFieldNameSeparator: S.String}) {}
export const AuthorizationResponseMap = S.Record({key: S.String, value: S.String});
export class AuthChallengeResponseEvent extends S.Class<AuthChallengeResponseEvent>("AuthChallengeResponseEvent")({responseMap: AuthorizationResponseMap}) {}
export class MemberGroup extends S.Class<MemberGroup>("MemberGroup")({groupName: S.String, type: S.optional(S.String)}) {}
export const MemberGroups = S.Array(MemberGroup);
export class MemberUser extends S.Class<MemberUser>("MemberUser")({userId: S.String, type: S.optional(S.String)}) {}
export const MemberUsers = S.Array(MemberUser);
export class RetrieverContentSource extends S.Class<RetrieverContentSource>("RetrieverContentSource")({retrieverId: S.String}) {}
export const UserIds = S.Array(S.String);
export const ChatInputStream = S.Union(ConfigurationEvent, TextInputEvent, AttachmentInputEvent, ActionExecutionEvent, EndOfInputEvent, AuthChallengeResponseEvent);
export class AuthChallengeResponse extends S.Class<AuthChallengeResponse>("AuthChallengeResponse")({responseMap: AuthorizationResponseMap}) {}
export class AssociatedGroup extends S.Class<AssociatedGroup>("AssociatedGroup")({name: S.optional(S.String), type: S.optional(S.String)}) {}
export const AssociatedGroups = S.Array(AssociatedGroup);
export class AssociatedUser extends S.Class<AssociatedUser>("AssociatedUser")({id: S.optional(S.String), type: S.optional(S.String)}) {}
export const AssociatedUsers = S.Array(AssociatedUser);
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFields = S.Array(ValidationExceptionField);
export class AppliedOrchestrationConfiguration extends S.Class<AppliedOrchestrationConfiguration>("AppliedOrchestrationConfiguration")({control: S.String}) {}
export class BlockedPhrasesConfiguration extends S.Class<BlockedPhrasesConfiguration>("BlockedPhrasesConfiguration")({blockedPhrases: S.optional(BlockedPhrases), systemMessageOverride: S.optional(S.String)}) {}
export class AppliedCreatorModeConfiguration extends S.Class<AppliedCreatorModeConfiguration>("AppliedCreatorModeConfiguration")({creatorModeControl: S.String}) {}
export class Attachment extends S.Class<Attachment>("Attachment")({attachmentId: S.optional(S.String), conversationId: S.optional(S.String), name: S.optional(S.String), copyFrom: S.optional(CopyFromSource), fileType: S.optional(S.String), fileSize: S.optional(S.Number), md5chksum: S.optional(S.String), createdAt: S.optional(S.Date), status: S.optional(S.String), error: S.optional(ErrorDetail)}) {}
export const AttachmentList = S.Array(Attachment);
export class ChatResponseConfiguration extends S.Class<ChatResponseConfiguration>("ChatResponseConfiguration")({chatResponseConfigurationId: S.String, chatResponseConfigurationArn: S.String, displayName: S.String, responseConfigurationSummary: S.optional(S.String), status: S.String, createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date)}) {}
export const ChatResponseConfigurations = S.Array(ChatResponseConfiguration);
export class Conversation extends S.Class<Conversation>("Conversation")({conversationId: S.optional(S.String), title: S.optional(S.String), startTime: S.optional(S.Date)}) {}
export const Conversations = S.Array(Conversation);
export class DocumentDetails extends S.Class<DocumentDetails>("DocumentDetails")({documentId: S.optional(S.String), status: S.optional(S.String), error: S.optional(ErrorDetail), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date)}) {}
export const DocumentDetailList = S.Array(DocumentDetails);
export class GroupSummary extends S.Class<GroupSummary>("GroupSummary")({groupName: S.optional(S.String)}) {}
export const GroupSummaryList = S.Array(GroupSummary);
export class PluginTypeMetadataSummary extends S.Class<PluginTypeMetadataSummary>("PluginTypeMetadataSummary")({type: S.optional(S.String), category: S.optional(S.String), description: S.optional(S.String)}) {}
export const ListPluginTypeMetadataSummaries = S.Array(PluginTypeMetadataSummary);
export class Subscription extends S.Class<Subscription>("Subscription")({subscriptionId: S.optional(S.String), subscriptionArn: S.optional(S.String), principal: S.optional(SubscriptionPrincipal), currentSubscription: S.optional(SubscriptionDetails), nextSubscription: S.optional(SubscriptionDetails)}) {}
export const Subscriptions = S.Array(Subscription);
export class GroupMembers extends S.Class<GroupMembers>("GroupMembers")({memberGroups: S.optional(MemberGroups), memberUsers: S.optional(MemberUsers), s3PathForGroupMembers: S.optional(S3)}) {}
export const ContentSource = S.Union(RetrieverContentSource);
export class DocumentAttributeCondition extends S.Class<DocumentAttributeCondition>("DocumentAttributeCondition")({key: S.String, operator: S.String, value: S.optional(DocumentAttributeValue)}) {}
export class HookConfiguration extends S.Class<HookConfiguration>("HookConfiguration")({invocationCondition: S.optional(DocumentAttributeCondition), lambdaArn: S.optional(S.String), s3BucketName: S.optional(S.String), roleArn: S.optional(S.String)}) {}
export class ImageExtractionConfiguration extends S.Class<ImageExtractionConfiguration>("ImageExtractionConfiguration")({imageExtractionStatus: S.String}) {}
export class AudioExtractionConfiguration extends S.Class<AudioExtractionConfiguration>("AudioExtractionConfiguration")({audioExtractionStatus: S.String}) {}
export class VideoExtractionConfiguration extends S.Class<VideoExtractionConfiguration>("VideoExtractionConfiguration")({videoExtractionStatus: S.String}) {}
export class UsersAndGroups extends S.Class<UsersAndGroups>("UsersAndGroups")({userIds: S.optional(UserIds), userGroups: S.optional(UserGroups)}) {}
export class AssociatePermissionResponse extends S.Class<AssociatePermissionResponse>("AssociatePermissionResponse")({statement: S.optional(S.String)}) {}
export class CancelSubscriptionResponse extends S.Class<CancelSubscriptionResponse>("CancelSubscriptionResponse")({subscriptionArn: S.optional(S.String), currentSubscription: S.optional(SubscriptionDetails), nextSubscription: S.optional(SubscriptionDetails)}) {}
export class ChatInput extends S.Class<ChatInput>("ChatInput")({applicationId: S.String, userId: S.optional(S.String), userGroups: S.optional(UserGroups), conversationId: S.optional(S.String), parentMessageId: S.optional(S.String), clientToken: S.optional(S.String), inputStream: S.optional(H.Body("undefined", ChatInputStream))}) {}
export class CreateSubscriptionResponse extends S.Class<CreateSubscriptionResponse>("CreateSubscriptionResponse")({subscriptionId: S.optional(S.String), subscriptionArn: S.optional(S.String), currentSubscription: S.optional(SubscriptionDetails), nextSubscription: S.optional(SubscriptionDetails)}) {}
export class ContentBlockerRule extends S.Class<ContentBlockerRule>("ContentBlockerRule")({systemMessageOverride: S.optional(S.String)}) {}
export class EligibleDataSource extends S.Class<EligibleDataSource>("EligibleDataSource")({indexId: S.optional(S.String), dataSourceId: S.optional(S.String)}) {}
export const EligibleDataSources = S.Array(EligibleDataSource);
export class ContentRetrievalRule extends S.Class<ContentRetrievalRule>("ContentRetrievalRule")({eligibleDataSources: S.optional(EligibleDataSources)}) {}
export const RuleConfiguration = S.Union(ContentBlockerRule, ContentRetrievalRule);
export class Rule extends S.Class<Rule>("Rule")({includedUsersAndGroups: S.optional(UsersAndGroups), excludedUsersAndGroups: S.optional(UsersAndGroups), ruleType: S.String, ruleConfiguration: S.optional(RuleConfiguration)}) {}
export const Rules = S.Array(Rule);
export class TopicConfiguration extends S.Class<TopicConfiguration>("TopicConfiguration")({name: S.String, description: S.optional(S.String), exampleChatMessages: S.optional(ExampleChatMessages), rules: Rules}) {}
export const TopicConfigurations = S.Array(TopicConfiguration);
export class GetChatControlsConfigurationResponse extends S.Class<GetChatControlsConfigurationResponse>("GetChatControlsConfigurationResponse")({responseScope: S.optional(S.String), orchestrationConfiguration: S.optional(AppliedOrchestrationConfiguration), blockedPhrases: S.optional(BlockedPhrasesConfiguration), topicConfigurations: S.optional(TopicConfigurations), creatorModeConfiguration: S.optional(AppliedCreatorModeConfiguration), nextToken: S.optional(S.String), hallucinationReductionConfiguration: S.optional(HallucinationReductionConfiguration)}) {}
export class GetGroupResponse extends S.Class<GetGroupResponse>("GetGroupResponse")({status: S.optional(GroupStatusDetail), statusHistory: S.optional(GroupStatusDetails)}) {}
export class ListAttachmentsResponse extends S.Class<ListAttachmentsResponse>("ListAttachmentsResponse")({attachments: S.optional(AttachmentList), nextToken: S.optional(S.String)}) {}
export class ListChatResponseConfigurationsResponse extends S.Class<ListChatResponseConfigurationsResponse>("ListChatResponseConfigurationsResponse")({chatResponseConfigurations: S.optional(ChatResponseConfigurations), nextToken: S.optional(S.String)}) {}
export class ListConversationsResponse extends S.Class<ListConversationsResponse>("ListConversationsResponse")({nextToken: S.optional(S.String), conversations: S.optional(Conversations)}) {}
export class ListDocumentsResponse extends S.Class<ListDocumentsResponse>("ListDocumentsResponse")({documentDetailList: S.optional(DocumentDetailList), nextToken: S.optional(S.String)}) {}
export class ListGroupsResponse extends S.Class<ListGroupsResponse>("ListGroupsResponse")({nextToken: S.optional(S.String), items: S.optional(GroupSummaryList)}) {}
export class ListPluginActionsResponse extends S.Class<ListPluginActionsResponse>("ListPluginActionsResponse")({nextToken: S.optional(S.String), items: S.optional(Actions)}) {}
export class ListPluginTypeMetadataResponse extends S.Class<ListPluginTypeMetadataResponse>("ListPluginTypeMetadataResponse")({nextToken: S.optional(S.String), items: S.optional(ListPluginTypeMetadataSummaries)}) {}
export class ListSubscriptionsResponse extends S.Class<ListSubscriptionsResponse>("ListSubscriptionsResponse")({nextToken: S.optional(S.String), subscriptions: S.optional(Subscriptions)}) {}
export class PutGroupRequest extends S.Class<PutGroupRequest>("PutGroupRequest")({applicationId: S.String, indexId: S.String, groupName: S.String, dataSourceId: S.optional(S.String), type: S.String, groupMembers: GroupMembers, roleArn: S.optional(S.String)}) {}
export class PutGroupResponse extends S.Class<PutGroupResponse>("PutGroupResponse")({}) {}
export class SearchRelevantContentRequest extends S.Class<SearchRelevantContentRequest>("SearchRelevantContentRequest")({applicationId: S.String, queryText: S.String, contentSource: ContentSource, attributeFilter: S.optional(AttributeFilter), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export const DocumentAttributes = S.Array(DocumentAttribute);
export class MediaExtractionConfiguration extends S.Class<MediaExtractionConfiguration>("MediaExtractionConfiguration")({imageExtractionConfiguration: S.optional(ImageExtractionConfiguration), audioExtractionConfiguration: S.optional(AudioExtractionConfiguration), videoExtractionConfiguration: S.optional(VideoExtractionConfiguration)}) {}
export class DataSourceSyncJobMetrics extends S.Class<DataSourceSyncJobMetrics>("DataSourceSyncJobMetrics")({documentsAdded: S.optional(S.String), documentsModified: S.optional(S.String), documentsDeleted: S.optional(S.String), documentsFailed: S.optional(S.String), documentsScanned: S.optional(S.String)}) {}
export class AttachmentOutput extends S.Class<AttachmentOutput>("AttachmentOutput")({name: S.optional(S.String), status: S.optional(S.String), error: S.optional(ErrorDetail), attachmentId: S.optional(S.String), conversationId: S.optional(S.String)}) {}
export const AttachmentsOutput = S.Array(AttachmentOutput);
export class DocumentAttributeTarget extends S.Class<DocumentAttributeTarget>("DocumentAttributeTarget")({key: S.String, value: S.optional(DocumentAttributeValue), attributeValueOperator: S.optional(S.String)}) {}
export class FailedDocument extends S.Class<FailedDocument>("FailedDocument")({id: S.optional(S.String), error: S.optional(ErrorDetail), dataSourceId: S.optional(S.String)}) {}
export const FailedDocuments = S.Array(FailedDocument);
export const AttachmentsInput = S.Array(AttachmentInput);
export class ActionExecution extends S.Class<ActionExecution>("ActionExecution")({pluginId: S.String, payload: ActionExecutionPayload, payloadFieldNameSeparator: S.String}) {}
export class ChatResponseConfigurationDetail extends S.Class<ChatResponseConfigurationDetail>("ChatResponseConfigurationDetail")({responseConfigurations: S.optional(ResponseConfigurations), responseConfigurationSummary: S.optional(S.String), status: S.optional(S.String), error: S.optional(ErrorDetail), updatedAt: S.optional(S.Date)}) {}
export class DataSourceSyncJob extends S.Class<DataSourceSyncJob>("DataSourceSyncJob")({executionId: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), status: S.optional(S.String), error: S.optional(ErrorDetail), dataSourceErrorCode: S.optional(S.String), metrics: S.optional(DataSourceSyncJobMetrics)}) {}
export const DataSourceSyncJobs = S.Array(DataSourceSyncJob);
export class InlineDocumentEnrichmentConfiguration extends S.Class<InlineDocumentEnrichmentConfiguration>("InlineDocumentEnrichmentConfiguration")({condition: S.optional(DocumentAttributeCondition), target: S.optional(DocumentAttributeTarget), documentContentOperator: S.optional(S.String)}) {}
export const InlineDocumentEnrichmentConfigurations = S.Array(InlineDocumentEnrichmentConfiguration);
export class BatchDeleteDocumentResponse extends S.Class<BatchDeleteDocumentResponse>("BatchDeleteDocumentResponse")({failedDocuments: S.optional(FailedDocuments)}) {}
export class PrincipalUser extends S.Class<PrincipalUser>("PrincipalUser")({id: S.optional(S.String), access: S.String, membershipType: S.optional(S.String)}) {}
export class PrincipalGroup extends S.Class<PrincipalGroup>("PrincipalGroup")({name: S.optional(S.String), access: S.String, membershipType: S.optional(S.String)}) {}
export class ChatSyncInput extends S.Class<ChatSyncInput>("ChatSyncInput")({applicationId: S.String, userId: S.optional(S.String), userGroups: S.optional(UserGroups), userMessage: S.optional(S.String), attachments: S.optional(AttachmentsInput), actionExecution: S.optional(ActionExecution), authChallengeResponse: S.optional(AuthChallengeResponse), conversationId: S.optional(S.String), parentMessageId: S.optional(S.String), attributeFilter: S.optional(AttributeFilter), chatMode: S.optional(S.String), chatModeConfiguration: S.optional(ChatModeConfiguration), clientToken: S.optional(S.String)}) {}
export class CreateChatResponseConfigurationRequest extends S.Class<CreateChatResponseConfigurationRequest>("CreateChatResponseConfigurationRequest")({applicationId: S.String, displayName: S.String, clientToken: S.optional(S.String), responseConfigurations: ResponseConfigurations, tags: S.optional(Tags)}) {}
export class GetChatResponseConfigurationResponse extends S.Class<GetChatResponseConfigurationResponse>("GetChatResponseConfigurationResponse")({chatResponseConfigurationId: S.optional(S.String), chatResponseConfigurationArn: S.optional(S.String), displayName: S.optional(S.String), createdAt: S.optional(S.Date), inUseConfiguration: S.optional(ChatResponseConfigurationDetail), lastUpdateConfiguration: S.optional(ChatResponseConfigurationDetail)}) {}
export class ListDataSourceSyncJobsResponse extends S.Class<ListDataSourceSyncJobsResponse>("ListDataSourceSyncJobsResponse")({history: S.optional(DataSourceSyncJobs), nextToken: S.optional(S.String)}) {}
export class DocumentEnrichmentConfiguration extends S.Class<DocumentEnrichmentConfiguration>("DocumentEnrichmentConfiguration")({inlineConfigurations: S.optional(InlineDocumentEnrichmentConfigurations), preExtractionHookConfiguration: S.optional(HookConfiguration), postExtractionHookConfiguration: S.optional(HookConfiguration)}) {}
export const Principal = S.Union(PrincipalUser, PrincipalGroup);
export const Principals = S.Array(Principal);
export class DocumentAclUser extends S.Class<DocumentAclUser>("DocumentAclUser")({id: S.optional(S.String), type: S.optional(S.String)}) {}
export const DocumentAclUsers = S.Array(DocumentAclUser);
export class DocumentAclGroup extends S.Class<DocumentAclGroup>("DocumentAclGroup")({name: S.optional(S.String), type: S.optional(S.String)}) {}
export const DocumentAclGroups = S.Array(DocumentAclGroup);
export class SnippetExcerpt extends S.Class<SnippetExcerpt>("SnippetExcerpt")({text: S.optional(S.String)}) {}
export class AccessControl extends S.Class<AccessControl>("AccessControl")({principals: Principals, memberRelation: S.optional(S.String)}) {}
export const AccessControls = S.Array(AccessControl);
export class DocumentAclCondition extends S.Class<DocumentAclCondition>("DocumentAclCondition")({memberRelation: S.optional(S.String), users: S.optional(DocumentAclUsers), groups: S.optional(DocumentAclGroups)}) {}
export const DocumentAclConditions = S.Array(DocumentAclCondition);
export class CreateChatResponseConfigurationResponse extends S.Class<CreateChatResponseConfigurationResponse>("CreateChatResponseConfigurationResponse")({chatResponseConfigurationId: S.String, chatResponseConfigurationArn: S.String}) {}
export class ImageSourceDetails extends S.Class<ImageSourceDetails>("ImageSourceDetails")({mediaId: S.optional(S.String), mediaMimeType: S.optional(S.String)}) {}
export class AudioSourceDetails extends S.Class<AudioSourceDetails>("AudioSourceDetails")({mediaId: S.optional(S.String), mediaMimeType: S.optional(S.String), startTimeMilliseconds: S.optional(S.Number), endTimeMilliseconds: S.optional(S.Number), audioExtractionType: S.optional(S.String)}) {}
export class VideoSourceDetails extends S.Class<VideoSourceDetails>("VideoSourceDetails")({mediaId: S.optional(S.String), mediaMimeType: S.optional(S.String), startTimeMilliseconds: S.optional(S.Number), endTimeMilliseconds: S.optional(S.Number), videoExtractionType: S.optional(S.String)}) {}
export class ActionReviewPayloadFieldAllowedValue extends S.Class<ActionReviewPayloadFieldAllowedValue>("ActionReviewPayloadFieldAllowedValue")({value: S.optional(S.Any), displayValue: S.optional(S.Any)}) {}
export const ActionReviewPayloadFieldAllowedValues = S.Array(ActionReviewPayloadFieldAllowedValue);
export class AccessConfiguration extends S.Class<AccessConfiguration>("AccessConfiguration")({accessControls: AccessControls, memberRelation: S.optional(S.String)}) {}
export class TextOutputEvent extends S.Class<TextOutputEvent>("TextOutputEvent")({systemMessageType: S.optional(S.String), conversationId: S.optional(S.String), userMessageId: S.optional(S.String), systemMessageId: S.optional(S.String), systemMessage: S.optional(S.String)}) {}
export const SourceDetails = S.Union(ImageSourceDetails, AudioSourceDetails, VideoSourceDetails);
export class TextSegment extends S.Class<TextSegment>("TextSegment")({beginOffset: S.optional(S.Number), endOffset: S.optional(S.Number), snippetExcerpt: S.optional(SnippetExcerpt), mediaId: S.optional(S.String), mediaMimeType: S.optional(S.String), sourceDetails: S.optional(SourceDetails)}) {}
export const TextSegmentList = S.Array(TextSegment);
export class SourceAttribution extends S.Class<SourceAttribution>("SourceAttribution")({title: S.optional(S.String), snippet: S.optional(S.String), url: S.optional(S.String), citationNumber: S.optional(S.Number), updatedAt: S.optional(S.Date), textMessageSegments: S.optional(TextSegmentList), documentId: S.optional(S.String), indexId: S.optional(S.String), datasourceId: S.optional(S.String)}) {}
export const SourceAttributions = S.Array(SourceAttribution);
export class MetadataEvent extends S.Class<MetadataEvent>("MetadataEvent")({conversationId: S.optional(S.String), userMessageId: S.optional(S.String), systemMessageId: S.optional(S.String), sourceAttributions: S.optional(SourceAttributions), finalTextMessage: S.optional(S.String)}) {}
export class ActionReviewPayloadField extends S.Class<ActionReviewPayloadField>("ActionReviewPayloadField")({displayName: S.optional(S.String), displayOrder: S.optional(S.Number), displayDescription: S.optional(S.String), type: S.optional(S.String), value: S.optional(S.Any), allowedValues: S.optional(ActionReviewPayloadFieldAllowedValues), allowedFormat: S.optional(S.String), arrayItemJsonSchema: S.optional(S.Any), required: S.optional(S.Boolean)}) {}
export const ActionReviewPayload = S.Record({key: S.String, value: ActionReviewPayloadField});
export class ActionReviewEvent extends S.Class<ActionReviewEvent>("ActionReviewEvent")({conversationId: S.optional(S.String), userMessageId: S.optional(S.String), systemMessageId: S.optional(S.String), pluginId: S.optional(S.String), pluginType: S.optional(S.String), payload: S.optional(ActionReviewPayload), payloadFieldNameSeparator: S.optional(S.String)}) {}
export class FailedAttachmentEvent extends S.Class<FailedAttachmentEvent>("FailedAttachmentEvent")({conversationId: S.optional(S.String), userMessageId: S.optional(S.String), systemMessageId: S.optional(S.String), attachment: S.optional(AttachmentOutput)}) {}
export class AuthChallengeRequestEvent extends S.Class<AuthChallengeRequestEvent>("AuthChallengeRequestEvent")({authorizationUrl: S.String}) {}
export class DocumentAclMembership extends S.Class<DocumentAclMembership>("DocumentAclMembership")({memberRelation: S.optional(S.String), conditions: S.optional(DocumentAclConditions)}) {}
export class ScoreAttributes extends S.Class<ScoreAttributes>("ScoreAttributes")({scoreConfidence: S.optional(S.String)}) {}
export class Document extends S.Class<Document>("Document")({id: S.String, attributes: S.optional(DocumentAttributes), content: S.optional(DocumentContent), contentType: S.optional(S.String), title: S.optional(S.String), accessConfiguration: S.optional(AccessConfiguration), documentEnrichmentConfiguration: S.optional(DocumentEnrichmentConfiguration), mediaExtractionConfiguration: S.optional(MediaExtractionConfiguration)}) {}
export const Documents = S.Array(Document);
export const ChatOutputStream = S.Union(TextOutputEvent, MetadataEvent, ActionReviewEvent, FailedAttachmentEvent, AuthChallengeRequestEvent);
export class AuthChallengeRequest extends S.Class<AuthChallengeRequest>("AuthChallengeRequest")({authorizationUrl: S.String}) {}
export class DocumentAcl extends S.Class<DocumentAcl>("DocumentAcl")({allowlist: S.optional(DocumentAclMembership), denyList: S.optional(DocumentAclMembership)}) {}
export class RelevantContent extends S.Class<RelevantContent>("RelevantContent")({content: S.optional(S.String), documentId: S.optional(S.String), documentTitle: S.optional(S.String), documentUri: S.optional(S.String), documentAttributes: S.optional(DocumentAttributes), scoreAttributes: S.optional(ScoreAttributes)}) {}
export const RelevantContentList = S.Array(RelevantContent);
export class BatchPutDocumentRequest extends S.Class<BatchPutDocumentRequest>("BatchPutDocumentRequest")({applicationId: S.String, indexId: S.String, documents: Documents, roleArn: S.optional(S.String), dataSourceSyncId: S.optional(S.String)}) {}
export class ChatOutput extends S.Class<ChatOutput>("ChatOutput")({outputStream: S.optional(H.Body("undefined", ChatOutputStream))}) {}
export class ActionReview extends S.Class<ActionReview>("ActionReview")({pluginId: S.optional(S.String), pluginType: S.optional(S.String), payload: S.optional(ActionReviewPayload), payloadFieldNameSeparator: S.optional(S.String)}) {}
export class ChatSyncOutput extends S.Class<ChatSyncOutput>("ChatSyncOutput")({conversationId: S.optional(S.String), systemMessage: S.optional(S.String), systemMessageId: S.optional(S.String), userMessageId: S.optional(S.String), actionReview: S.optional(ActionReview), authChallengeRequest: S.optional(AuthChallengeRequest), sourceAttributions: S.optional(SourceAttributions), failedAttachments: S.optional(AttachmentsOutput)}) {}
export class CheckDocumentAccessResponse extends S.Class<CheckDocumentAccessResponse>("CheckDocumentAccessResponse")({userGroups: S.optional(AssociatedGroups), userAliases: S.optional(AssociatedUsers), hasAccess: S.optional(S.Boolean), documentAcl: S.optional(DocumentAcl)}) {}
export class SearchRelevantContentResponse extends S.Class<SearchRelevantContentResponse>("SearchRelevantContentResponse")({relevantContent: S.optional(RelevantContentList), nextToken: S.optional(S.String)}) {}
export class UpdateChatControlsConfigurationRequest extends S.Class<UpdateChatControlsConfigurationRequest>("UpdateChatControlsConfigurationRequest")({applicationId: S.String, clientToken: S.optional(S.String), responseScope: S.optional(S.String), orchestrationConfiguration: S.optional(OrchestrationConfiguration), blockedPhrasesConfigurationUpdate: S.optional(BlockedPhrasesConfigurationUpdate), topicConfigurationsToCreateOrUpdate: S.optional(TopicConfigurations), topicConfigurationsToDelete: S.optional(TopicConfigurations), creatorModeConfiguration: S.optional(CreatorModeConfiguration), hallucinationReductionConfiguration: S.optional(HallucinationReductionConfiguration)}) {}
export class UpdateChatControlsConfigurationResponse extends S.Class<UpdateChatControlsConfigurationResponse>("UpdateChatControlsConfigurationResponse")({}) {}
export class Message extends S.Class<Message>("Message")({messageId: S.optional(S.String), body: S.optional(S.String), time: S.optional(S.Date), type: S.optional(S.String), attachments: S.optional(AttachmentsOutput), sourceAttribution: S.optional(SourceAttributions), actionReview: S.optional(ActionReview), actionExecution: S.optional(ActionExecution)}) {}
export const Messages = S.Array(Message);
export class BatchPutDocumentResponse extends S.Class<BatchPutDocumentResponse>("BatchPutDocumentResponse")({failedDocuments: S.optional(FailedDocuments)}) {}
export class ListMessagesResponse extends S.Class<ListMessagesResponse>("ListMessagesResponse")({messages: S.optional(Messages), nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class LicenseNotFoundException extends S.TaggedError<LicenseNotFoundException>()("LicenseNotFoundException", {}) {};
export class MediaTooLargeException extends S.TaggedError<MediaTooLargeException>()("MediaTooLargeException", {message: S.String}) {};
export class ExternalResourceException extends S.TaggedError<ExternalResourceException>()("ExternalResourceException", {}) {};

//# Operations
/**
 * Stops an Amazon Q Business data source connector synchronization job already in progress.
 */export const stopDataSourceSyncJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/stopsync", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.StopDataSourceSyncJob" }, StopDataSourceSyncJobRequest, StopDataSourceSyncJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified tag to the specified Amazon Q Business application or data source resource. If the tag already exists, the existing value is replaced with the new value.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/v1/tags/{resourceARN}", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from an Amazon Q Business application or a data source.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/v1/tags/{resourceARN}", method: "DELETE", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing chat response configuration in an Amazon Q Business application. This operation allows administrators to modify configuration settings, display name, and response parameters to refine how the system generates responses.
 */export const updateChatResponseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}", method: "PUT", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.UpdateChatResponseConfiguration" }, UpdateChatResponseConfigurationRequest, UpdateChatResponseConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a universally unique identifier (UUID) mapped to a list of local user ids within an application.
 */export const createUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/users", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.CreateUser" }, CreateUserRequest, CreateUserResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an attachment associated with a specific Amazon Q Business conversation.
 */export const deleteAttachment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/conversations/{conversationId}/attachments/{attachmentId}", method: "DELETE", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.DeleteAttachment" }, DeleteAttachmentRequest, DeleteAttachmentResponse, [AccessDeniedException, InternalServerException, LicenseNotFoundException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes chat controls configured for an existing Amazon Q Business application.
 */export const deleteChatControlsConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/chatcontrols", method: "DELETE", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.DeleteChatControlsConfiguration" }, DeleteChatControlsConfigurationRequest, DeleteChatControlsConfigurationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a specified chat response configuration from an Amazon Q Business application.
 */export const deleteChatResponseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}", method: "DELETE", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.DeleteChatResponseConfiguration" }, DeleteChatResponseConfigurationRequest, DeleteChatResponseConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Amazon Q Business web experience conversation.
 */export const deleteConversation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/conversations/{conversationId}", method: "DELETE", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.DeleteConversation" }, DeleteConversationRequest, DeleteConversationResponse, [AccessDeniedException, ConflictException, InternalServerException, LicenseNotFoundException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their chat results.
 * 
 * If you want to delete, update, or replace users or sub groups of a group, you need to use the `PutGroup` operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling `PutGroup`.
 */export const deleteGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/indices/{indexId}/groups/{groupName}", method: "DELETE", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.DeleteGroup" }, DeleteGroupRequest, DeleteGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a user by email id.
 */export const deleteUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/users/{userId}", method: "DELETE", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.DeleteUser" }, DeleteUserRequest, DeleteUserResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the content of a document that was ingested into Amazon Q Business. This API validates user authorization against document ACLs before returning a pre-signed URL for secure document access. You can download or view source documents referenced in chat responses through the URL.
 */export const getDocumentContent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/index/{indexId}/documents/{documentId}/content", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.GetDocumentContent" }, GetDocumentContentRequest, GetDocumentContentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current permission policy for a Amazon Q Business application. The policy is returned as a JSON-formatted string and defines the IAM actions that are allowed or denied for the application's resources.
 */export const getPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/policy", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.GetPolicy" }, GetPolicyRequest, GetPolicyResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the universally unique identifier (UUID) associated with a local user in a data source.
 */export const getUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/users/{userId}", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.GetUser" }, GetUserRequest, GetUserResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists configured Amazon Q Business actions for any plugin type—both built-in and custom.
 */export const listPluginTypeActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/pluginTypes/{pluginType}/actions", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListPluginTypeActions" }, ListPluginTypeActionsRequest, ListPluginTypeActionsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of tags associated with a specified resource. Amazon Q Business applications and data sources can have tags associated with them.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/v1/tags/{resourceARN}", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables your end user to provide feedback on their Amazon Q Business generated chat responses.
 */export const putFeedback = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/feedback", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.PutFeedback" }, PutFeedbackRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a data source connector synchronization job. If a synchronization job is already in progress, Amazon Q Business returns a `ConflictException`.
 */export const startDataSourceSyncJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/startsync", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.StartDataSourceSyncJob" }, StartDataSourceSyncJobRequest, StartDataSourceSyncJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the pricing tier for an Amazon Q Business subscription. Upgrades are instant. Downgrades apply at the start of the next month. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see Amazon Q Business pricing.
 */export const updateSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/subscriptions/{subscriptionId}", method: "PUT", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.UpdateSubscription" }, UpdateSubscriptionRequest, UpdateSubscriptionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a information associated with a user id.
 */export const updateUser = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/users/{userId}", method: "PUT", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.UpdateUser" }, UpdateUserRequest, UpdateUserResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates a permission policy for a Amazon Q Business application, allowing cross-account access for an ISV. This operation creates a new policy statement for the specified Amazon Q Business application. The policy statement defines the IAM actions that the ISV is allowed to perform on the Amazon Q Business application's resources.
 */export const associatePermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/policy", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.AssociatePermission" }, AssociatePermissionRequest, AssociatePermissionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Unsubscribes a user or a group from their pricing tier in an Amazon Q Business application. An unsubscribed user or group loses all Amazon Q Business feature access at the start of next month.
 */export const cancelSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/subscriptions/{subscriptionId}", method: "DELETE", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.CancelSubscription" }, CancelSubscriptionRequest, CancelSubscriptionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a unique URL for anonymous Amazon Q Business web experience. This URL can only be used once and must be used within 5 minutes after it's generated.
 */export const createAnonymousWebExperienceUrl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/experiences/{webExperienceId}/anonymous-url", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.CreateAnonymousWebExperienceUrl" }, CreateAnonymousWebExperienceUrlRequest, CreateAnonymousWebExperienceUrlResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Subscribes an IAM Identity Center user or a group to a pricing tier for an Amazon Q Business application.
 * 
 * Amazon Q Business offers two subscription tiers: `Q_LITE` and `Q_BUSINESS`. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see Amazon Q Business pricing.
 * 
 * For an example IAM role policy for assigning subscriptions, see Set up required permissions in the Amazon Q Business User Guide.
 */export const createSubscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/subscriptions", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.CreateSubscription" }, CreateSubscriptionRequest, CreateSubscriptionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a permission policy from a Amazon Q Business application, revoking the cross-account access that was previously granted to an ISV. This operation deletes the specified policy statement from the application's permission policy.
 */export const disassociatePermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/policy/{statementId}", method: "DELETE", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.DisassociatePermission" }, DisassociatePermissionRequest, DisassociatePermissionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about chat controls configured for an existing Amazon Q Business application.
 */export const getChatControlsConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/chatcontrols", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.GetChatControlsConfiguration" }, GetChatControlsConfigurationRequest, GetChatControlsConfigurationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a group by group name.
 */export const getGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/indices/{indexId}/groups/{groupName}", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.GetGroup" }, GetGroupRequest, GetGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the image bytes corresponding to a media object. If you have implemented your own application with the Chat and ChatSync APIs, and have enabled content extraction from visual data in Amazon Q Business, you use the GetMedia API operation to download the images so you can show them in your UI with responses.
 * 
 * For more information, see Extracting semantic meaning from images and visuals.
 */export const getMedia = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/media/{mediaId}", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.GetMedia" }, GetMediaRequest, GetMediaResponse, [AccessDeniedException, InternalServerException, LicenseNotFoundException, MediaTooLargeException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of attachments associated with an Amazon Q Business web experience or a list of attachements associated with a specific Amazon Q Business conversation.
 */export const listAttachments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/attachments", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListAttachments" }, ListAttachmentsRequest, ListAttachmentsResponse, [AccessDeniedException, InternalServerException, LicenseNotFoundException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all chat response configurations available in a specified Amazon Q Business application. This operation returns summary information about each configuration to help administrators manage and select appropriate response settings.
 */export const listChatResponseConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/chatresponseconfigurations", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListChatResponseConfigurations" }, ListChatResponseConfigurationsRequest, ListChatResponseConfigurationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists one or more Amazon Q Business conversations.
 */export const listConversations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/conversations", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListConversations" }, ListConversationsRequest, ListConversationsResponse, [AccessDeniedException, InternalServerException, LicenseNotFoundException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A list of documents attached to an index.
 */export const listDocuments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/index/{indexId}/documents", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListDocuments" }, ListDocumentsRequest, ListDocumentsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a list of groups that are mapped to users.
 */export const listGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/indices/{indexId}/groups", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListGroups" }, ListGroupsRequest, ListGroupsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists configured Amazon Q Business actions for a specific plugin in an Amazon Q Business application.
 */export const listPluginActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/plugins/{pluginId}/actions", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListPluginActions" }, ListPluginActionsRequest, ListPluginActionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists metadata for all Amazon Q Business plugin types.
 */export const listPluginTypeMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/pluginTypeMetadata", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListPluginTypeMetadata" }, ListPluginTypeMetadataRequest, ListPluginTypeMetadataResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all subscriptions created in an Amazon Q Business application.
 */export const listSubscriptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/subscriptions", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListSubscriptions" }, ListSubscriptionsRequest, ListSubscriptionsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create, or updates, a mapping of users—who have access to a document—to groups.
 * 
 * You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their Amazon Q Business chat results.
 * 
 * There are two options for creating groups, either passing group members inline or using an S3 file via the S3PathForGroupMembers field. For inline groups, there is a limit of 1000 members per group and for provided S3 files there is a limit of 100 thousand members. When creating a group using an S3 file, you provide both an S3 file and a `RoleArn` for Amazon Q Buisness to access the file.
 */export const putGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/indices/{indexId}/groups", method: "PUT", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.PutGroup" }, PutGroupRequest, PutGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Asynchronously deletes one or more documents added using the `BatchPutDocument` API from an Amazon Q Business index.
 * 
 * You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
 */export const batchDeleteDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/indices/{indexId}/documents/delete", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.BatchDeleteDocument" }, BatchDeleteDocumentRequest, BatchDeleteDocumentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves detailed information about a specific chat response configuration from an Amazon Q Business application. This operation returns the complete configuration settings and metadata.
 */export const getChatResponseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.GetChatResponseConfiguration" }, GetChatResponseConfigurationRequest, GetChatResponseConfigurationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about an Amazon Q Business data source connector synchronization.
 */export const listDataSourceSyncJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/syncjobs", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListDataSourceSyncJobs" }, ListDataSourceSyncJobsRequest, ListDataSourceSyncJobsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new chat response configuration for an Amazon Q Business application. This operation establishes a set of parameters that define how the system generates and formats responses to user queries in chat interactions.
 */export const createChatResponseConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/chatresponseconfigurations", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.CreateChatResponseConfiguration" }, CreateChatResponseConfigurationRequest, CreateChatResponseConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts or continues a non-streaming Amazon Q Business conversation.
 */export const chatSync = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/conversations?sync", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ChatSync" }, ChatSyncInput, ChatSyncOutput, [AccessDeniedException, ConflictException, ExternalResourceException, InternalServerException, LicenseNotFoundException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Verifies if a user has access permissions for a specified document and returns the actual ACL attached to the document. Resolves user access on the document via user aliases and groups when verifying user access.
 */export const checkDocumentAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/index/{indexId}/users/{userId}/documents/{documentId}/check-document-access", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.CheckDocumentAccess" }, CheckDocumentAccessRequest, CheckDocumentAccessResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Searches for relevant content in a Amazon Q Business application based on a query. This operation takes a search query text, the Amazon Q Business application identifier, and optional filters (such as content source and maximum results) as input. It returns a list of relevant content items, where each item includes the content text, the unique document identifier, the document title, the document URI, any relevant document attributes, and score attributes indicating the confidence level of the relevance.
 */export const searchRelevantContent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/relevant-content", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.SearchRelevantContent" }, SearchRelevantContentRequest, SearchRelevantContentResponse, [AccessDeniedException, InternalServerException, LicenseNotFoundException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a set of chat controls configured for an existing Amazon Q Business application.
 */export const updateChatControlsConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/chatcontrols", method: "PATCH", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.UpdateChatControlsConfiguration" }, UpdateChatControlsConfigurationRequest, UpdateChatControlsConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds one or more documents to an Amazon Q Business index.
 * 
 * You use this API to:
 * 
 * - ingest your structured and unstructured documents and documents stored in an Amazon S3 bucket into an Amazon Q Business index.
 * 
 * - add custom attributes to documents in an Amazon Q Business index.
 * 
 * - attach an access control list to the documents added to an Amazon Q Business index.
 * 
 * You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
 */export const batchPutDocument = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/indices/{indexId}/documents", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.BatchPutDocument" }, BatchPutDocumentRequest, BatchPutDocumentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts or continues a streaming Amazon Q Business conversation.
 */export const chat = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/conversations", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.Chat" }, ChatInput, ChatOutput, [AccessDeniedException, ConflictException, ExternalResourceException, InternalServerException, LicenseNotFoundException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a list of messages associated with an Amazon Q Business web experience.
 */export const listMessages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-11-27", uri: "/applications/{applicationId}/conversations/{conversationId}", method: "GET", sdkId: "QBusiness", sigV4ServiceName: "qbusiness", name: "ExpertQ.ListMessages" }, ListMessagesRequest, ListMessagesResponse, [AccessDeniedException, InternalServerException, LicenseNotFoundException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
