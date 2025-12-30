import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const FindingIdList = S.Array(S.String);
export const EngagementSet = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class BatchGetIncidentFindingsInput extends S.Class<BatchGetIncidentFindingsInput>("BatchGetIncidentFindingsInput")({incidentRecordArn: S.String, findingIds: FindingIdList}) {}
export class DeleteIncidentRecordInput extends S.Class<DeleteIncidentRecordInput>("DeleteIncidentRecordInput")({arn: S.String}) {}
export class DeleteIncidentRecordOutput extends S.Class<DeleteIncidentRecordOutput>("DeleteIncidentRecordOutput")({}) {}
export class DeleteReplicationSetInput extends S.Class<DeleteReplicationSetInput>("DeleteReplicationSetInput")({arn: S.String}) {}
export class DeleteReplicationSetOutput extends S.Class<DeleteReplicationSetOutput>("DeleteReplicationSetOutput")({}) {}
export class DeleteResourcePolicyInput extends S.Class<DeleteResourcePolicyInput>("DeleteResourcePolicyInput")({resourceArn: S.String, policyId: S.String}) {}
export class DeleteResourcePolicyOutput extends S.Class<DeleteResourcePolicyOutput>("DeleteResourcePolicyOutput")({}) {}
export class DeleteResponsePlanInput extends S.Class<DeleteResponsePlanInput>("DeleteResponsePlanInput")({arn: S.String}) {}
export class DeleteResponsePlanOutput extends S.Class<DeleteResponsePlanOutput>("DeleteResponsePlanOutput")({}) {}
export class DeleteTimelineEventInput extends S.Class<DeleteTimelineEventInput>("DeleteTimelineEventInput")({incidentRecordArn: S.String, eventId: S.String}) {}
export class DeleteTimelineEventOutput extends S.Class<DeleteTimelineEventOutput>("DeleteTimelineEventOutput")({}) {}
export class GetIncidentRecordInput extends S.Class<GetIncidentRecordInput>("GetIncidentRecordInput")({arn: S.String}) {}
export class GetReplicationSetInput extends S.Class<GetReplicationSetInput>("GetReplicationSetInput")({arn: S.String}) {}
export class GetResourcePoliciesInput extends S.Class<GetResourcePoliciesInput>("GetResourcePoliciesInput")({resourceArn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class GetResponsePlanInput extends S.Class<GetResponsePlanInput>("GetResponsePlanInput")({arn: S.String}) {}
export class GetTimelineEventInput extends S.Class<GetTimelineEventInput>("GetTimelineEventInput")({incidentRecordArn: S.String, eventId: S.String}) {}
export class ListIncidentFindingsInput extends S.Class<ListIncidentFindingsInput>("ListIncidentFindingsInput")({incidentRecordArn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListRelatedItemsInput extends S.Class<ListRelatedItemsInput>("ListRelatedItemsInput")({incidentRecordArn: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListReplicationSetsInput extends S.Class<ListReplicationSetsInput>("ListReplicationSetsInput")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListResponsePlansInput extends S.Class<ListResponsePlansInput>("ListResponsePlansInput")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export const StringList = S.Array(S.String);
export const IntegerList = S.Array(S.Number);
export const AttributeValueList = S.Union(StringList, IntegerList);
export const Condition = S.Union(S.Date, S.Date, AttributeValueList);
export class Filter extends S.Class<Filter>("Filter")({key: S.String, condition: Condition}) {}
export const FilterList = S.Array(Filter);
export class ListTimelineEventsInput extends S.Class<ListTimelineEventsInput>("ListTimelineEventsInput")({incidentRecordArn: S.String, filters: S.optional(FilterList), sortBy: S.optional(S.String), sortOrder: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class PutResourcePolicyInput extends S.Class<PutResourcePolicyInput>("PutResourcePolicyInput")({resourceArn: S.String, policy: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateDeletionProtectionInput extends S.Class<UpdateDeletionProtectionInput>("UpdateDeletionProtectionInput")({arn: S.String, deletionProtected: S.Boolean, clientToken: S.optional(S.String)}) {}
export class UpdateDeletionProtectionOutput extends S.Class<UpdateDeletionProtectionOutput>("UpdateDeletionProtectionOutput")({}) {}
export const EventReference = S.Union(S.String, S.String);
export const EventReferenceList = S.Array(EventReference);
export class UpdateTimelineEventInput extends S.Class<UpdateTimelineEventInput>("UpdateTimelineEventInput")({clientToken: S.optional(S.String), incidentRecordArn: S.String, eventId: S.String, eventTime: S.optional(S.Date), eventType: S.optional(S.String), eventData: S.optional(S.String), eventReferences: S.optional(EventReferenceList)}) {}
export class UpdateTimelineEventOutput extends S.Class<UpdateTimelineEventOutput>("UpdateTimelineEventOutput")({}) {}
export class EmptyChatChannel extends S.Class<EmptyChatChannel>("EmptyChatChannel")({}) {}
export const ChatbotSnsConfigurationSet = S.Array(S.String);
export const NotificationTargetItem = S.Union(S.String);
export const NotificationTargetSet = S.Array(NotificationTargetItem);
export class IncidentTemplate extends S.Class<IncidentTemplate>("IncidentTemplate")({title: S.String, impact: S.Number, summary: S.optional(S.String), dedupeString: S.optional(S.String), notificationTargets: S.optional(NotificationTargetSet), incidentTags: S.optional(TagMap)}) {}
export const ChatChannel = S.Union(EmptyChatChannel, ChatbotSnsConfigurationSet);
export const ReplicationSetArnList = S.Array(S.String);
export class TriggerDetails extends S.Class<TriggerDetails>("TriggerDetails")({source: S.String, triggerArn: S.optional(S.String), timestamp: S.Date, rawData: S.optional(S.String)}) {}
export class PagerDutyIncidentDetail extends S.Class<PagerDutyIncidentDetail>("PagerDutyIncidentDetail")({id: S.String, autoResolve: S.optional(S.Boolean), secretId: S.optional(S.String)}) {}
export const ItemValue = S.Union(S.String, S.String, S.String, PagerDutyIncidentDetail);
export class ItemIdentifier extends S.Class<ItemIdentifier>("ItemIdentifier")({value: ItemValue, type: S.String}) {}
export class RelatedItem extends S.Class<RelatedItem>("RelatedItem")({identifier: ItemIdentifier, title: S.optional(S.String), generatedId: S.optional(S.String)}) {}
export const RelatedItemsUpdate = S.Union(RelatedItem, ItemIdentifier);
export const TagMapUpdate = S.Record({key: S.String, value: S.String});
export class CreateTimelineEventInput extends S.Class<CreateTimelineEventInput>("CreateTimelineEventInput")({clientToken: S.optional(S.String), incidentRecordArn: S.String, eventTime: S.Date, eventType: S.String, eventData: S.String, eventReferences: S.optional(EventReferenceList)}) {}
export const SsmParameterValues = S.Array(S.String);
export const SsmParameters = S.Record({key: S.String, value: SsmParameterValues});
export const DynamicSsmParameterValue = S.Union(S.String);
export const DynamicSsmParameters = S.Record({key: S.String, value: DynamicSsmParameterValue});
export class SsmAutomation extends S.Class<SsmAutomation>("SsmAutomation")({roleArn: S.String, documentName: S.String, documentVersion: S.optional(S.String), targetAccount: S.optional(S.String), parameters: S.optional(SsmParameters), dynamicParameters: S.optional(DynamicSsmParameters)}) {}
export const Action = S.Union(SsmAutomation);
export const ActionsList = S.Array(Action);
export class PagerDutyIncidentConfiguration extends S.Class<PagerDutyIncidentConfiguration>("PagerDutyIncidentConfiguration")({serviceId: S.String}) {}
export class PagerDutyConfiguration extends S.Class<PagerDutyConfiguration>("PagerDutyConfiguration")({name: S.String, secretId: S.String, pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration}) {}
export const Integration = S.Union(PagerDutyConfiguration);
export const Integrations = S.Array(Integration);
export class GetResponsePlanOutput extends S.Class<GetResponsePlanOutput>("GetResponsePlanOutput")({arn: S.String, name: S.String, displayName: S.optional(S.String), incidentTemplate: IncidentTemplate, chatChannel: S.optional(ChatChannel), engagements: S.optional(EngagementSet), actions: S.optional(ActionsList), integrations: S.optional(Integrations)}) {}
export const RelatedItemList = S.Array(RelatedItem);
export class ListRelatedItemsOutput extends S.Class<ListRelatedItemsOutput>("ListRelatedItemsOutput")({relatedItems: RelatedItemList, nextToken: S.optional(S.String)}) {}
export class ListReplicationSetsOutput extends S.Class<ListReplicationSetsOutput>("ListReplicationSetsOutput")({replicationSetArns: ReplicationSetArnList, nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: TagMap}) {}
export class PutResourcePolicyOutput extends S.Class<PutResourcePolicyOutput>("PutResourcePolicyOutput")({policyId: S.String}) {}
export class UpdateIncidentRecordInput extends S.Class<UpdateIncidentRecordInput>("UpdateIncidentRecordInput")({clientToken: S.optional(S.String), arn: S.String, title: S.optional(S.String), summary: S.optional(S.String), impact: S.optional(S.Number), status: S.optional(S.String), chatChannel: S.optional(ChatChannel), notificationTargets: S.optional(NotificationTargetSet)}) {}
export class UpdateIncidentRecordOutput extends S.Class<UpdateIncidentRecordOutput>("UpdateIncidentRecordOutput")({}) {}
export class UpdateRelatedItemsInput extends S.Class<UpdateRelatedItemsInput>("UpdateRelatedItemsInput")({clientToken: S.optional(S.String), incidentRecordArn: S.String, relatedItemsUpdate: RelatedItemsUpdate}) {}
export class UpdateRelatedItemsOutput extends S.Class<UpdateRelatedItemsOutput>("UpdateRelatedItemsOutput")({}) {}
export class UpdateResponsePlanInput extends S.Class<UpdateResponsePlanInput>("UpdateResponsePlanInput")({clientToken: S.optional(S.String), arn: S.String, displayName: S.optional(S.String), incidentTemplateTitle: S.optional(S.String), incidentTemplateImpact: S.optional(S.Number), incidentTemplateSummary: S.optional(S.String), incidentTemplateDedupeString: S.optional(S.String), incidentTemplateNotificationTargets: S.optional(NotificationTargetSet), chatChannel: S.optional(ChatChannel), engagements: S.optional(EngagementSet), actions: S.optional(ActionsList), incidentTemplateTags: S.optional(TagMapUpdate), integrations: S.optional(Integrations)}) {}
export class UpdateResponsePlanOutput extends S.Class<UpdateResponsePlanOutput>("UpdateResponsePlanOutput")({}) {}
export class RegionMapInputValue extends S.Class<RegionMapInputValue>("RegionMapInputValue")({sseKmsKeyId: S.optional(S.String)}) {}
export class AddRegionAction extends S.Class<AddRegionAction>("AddRegionAction")({regionName: S.String, sseKmsKeyId: S.optional(S.String)}) {}
export class DeleteRegionAction extends S.Class<DeleteRegionAction>("DeleteRegionAction")({regionName: S.String}) {}
export class BatchGetIncidentFindingsError extends S.Class<BatchGetIncidentFindingsError>("BatchGetIncidentFindingsError")({findingId: S.String, code: S.String, message: S.String}) {}
export const BatchGetIncidentFindingsErrorList = S.Array(BatchGetIncidentFindingsError);
export const RegionMapInput = S.Record({key: S.String, value: RegionMapInputValue});
export class ResourcePolicy extends S.Class<ResourcePolicy>("ResourcePolicy")({policyDocument: S.String, policyId: S.String, ramResourceShareRegion: S.String}) {}
export const ResourcePolicyList = S.Array(ResourcePolicy);
export class TimelineEvent extends S.Class<TimelineEvent>("TimelineEvent")({incidentRecordArn: S.String, eventId: S.String, eventTime: S.Date, eventUpdatedTime: S.Date, eventType: S.String, eventData: S.String, eventReferences: S.optional(EventReferenceList)}) {}
export class FindingSummary extends S.Class<FindingSummary>("FindingSummary")({id: S.String, lastModifiedTime: S.Date}) {}
export const FindingSummaryList = S.Array(FindingSummary);
export class ResponsePlanSummary extends S.Class<ResponsePlanSummary>("ResponsePlanSummary")({arn: S.String, name: S.String, displayName: S.optional(S.String)}) {}
export const ResponsePlanSummaryList = S.Array(ResponsePlanSummary);
export class EventSummary extends S.Class<EventSummary>("EventSummary")({incidentRecordArn: S.String, eventId: S.String, eventTime: S.Date, eventUpdatedTime: S.Date, eventType: S.String, eventReferences: S.optional(EventReferenceList)}) {}
export const EventSummaryList = S.Array(EventSummary);
export const UpdateReplicationSetAction = S.Union(AddRegionAction, DeleteRegionAction);
export const UpdateActionList = S.Array(UpdateReplicationSetAction);
export class CreateReplicationSetInput extends S.Class<CreateReplicationSetInput>("CreateReplicationSetInput")({regions: RegionMapInput, clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class CreateTimelineEventOutput extends S.Class<CreateTimelineEventOutput>("CreateTimelineEventOutput")({incidentRecordArn: S.String, eventId: S.String}) {}
export class GetResourcePoliciesOutput extends S.Class<GetResourcePoliciesOutput>("GetResourcePoliciesOutput")({resourcePolicies: ResourcePolicyList, nextToken: S.optional(S.String)}) {}
export class GetTimelineEventOutput extends S.Class<GetTimelineEventOutput>("GetTimelineEventOutput")({event: TimelineEvent}) {}
export class ListIncidentFindingsOutput extends S.Class<ListIncidentFindingsOutput>("ListIncidentFindingsOutput")({findings: FindingSummaryList, nextToken: S.optional(S.String)}) {}
export class ListResponsePlansOutput extends S.Class<ListResponsePlansOutput>("ListResponsePlansOutput")({responsePlanSummaries: ResponsePlanSummaryList, nextToken: S.optional(S.String)}) {}
export class ListTimelineEventsOutput extends S.Class<ListTimelineEventsOutput>("ListTimelineEventsOutput")({eventSummaries: EventSummaryList, nextToken: S.optional(S.String)}) {}
export class UpdateReplicationSetInput extends S.Class<UpdateReplicationSetInput>("UpdateReplicationSetInput")({arn: S.String, actions: UpdateActionList, clientToken: S.optional(S.String)}) {}
export class UpdateReplicationSetOutput extends S.Class<UpdateReplicationSetOutput>("UpdateReplicationSetOutput")({}) {}
export const AutomationExecution = S.Union(S.String);
export const AutomationExecutionSet = S.Array(AutomationExecution);
export class IncidentRecordSource extends S.Class<IncidentRecordSource>("IncidentRecordSource")({createdBy: S.String, invokedBy: S.optional(S.String), resourceArn: S.optional(S.String), source: S.String}) {}
export class IncidentRecord extends S.Class<IncidentRecord>("IncidentRecord")({arn: S.String, title: S.String, summary: S.optional(S.String), status: S.String, impact: S.Number, creationTime: S.Date, resolvedTime: S.optional(S.Date), lastModifiedTime: S.Date, lastModifiedBy: S.String, automationExecutions: S.optional(AutomationExecutionSet), incidentRecordSource: IncidentRecordSource, dedupeString: S.String, chatChannel: S.optional(ChatChannel), notificationTargets: S.optional(NotificationTargetSet)}) {}
export class CodeDeployDeployment extends S.Class<CodeDeployDeployment>("CodeDeployDeployment")({startTime: S.Date, endTime: S.optional(S.Date), deploymentGroupArn: S.String, deploymentId: S.String}) {}
export class CloudFormationStackUpdate extends S.Class<CloudFormationStackUpdate>("CloudFormationStackUpdate")({startTime: S.Date, endTime: S.optional(S.Date), stackArn: S.String}) {}
export class RegionInfo extends S.Class<RegionInfo>("RegionInfo")({sseKmsKeyId: S.optional(S.String), status: S.String, statusMessage: S.optional(S.String), statusUpdateDateTime: S.Date}) {}
export class CreateReplicationSetOutput extends S.Class<CreateReplicationSetOutput>("CreateReplicationSetOutput")({arn: S.String}) {}
export class GetIncidentRecordOutput extends S.Class<GetIncidentRecordOutput>("GetIncidentRecordOutput")({incidentRecord: IncidentRecord}) {}
export class ListIncidentRecordsInput extends S.Class<ListIncidentRecordsInput>("ListIncidentRecordsInput")({filters: S.optional(FilterList), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export const FindingDetails = S.Union(CodeDeployDeployment, CloudFormationStackUpdate);
export const RegionInfoMap = S.Record({key: S.String, value: RegionInfo});
export class Finding extends S.Class<Finding>("Finding")({id: S.String, creationTime: S.Date, lastModifiedTime: S.Date, details: S.optional(FindingDetails)}) {}
export const FindingList = S.Array(Finding);
export class ReplicationSet extends S.Class<ReplicationSet>("ReplicationSet")({arn: S.optional(S.String), regionMap: RegionInfoMap, status: S.String, deletionProtected: S.Boolean, createdTime: S.Date, createdBy: S.String, lastModifiedTime: S.Date, lastModifiedBy: S.String}) {}
export class BatchGetIncidentFindingsOutput extends S.Class<BatchGetIncidentFindingsOutput>("BatchGetIncidentFindingsOutput")({findings: FindingList, errors: BatchGetIncidentFindingsErrorList}) {}
export class CreateResponsePlanInput extends S.Class<CreateResponsePlanInput>("CreateResponsePlanInput")({clientToken: S.optional(S.String), name: S.String, displayName: S.optional(S.String), incidentTemplate: IncidentTemplate, chatChannel: S.optional(ChatChannel), engagements: S.optional(EngagementSet), actions: S.optional(ActionsList), tags: S.optional(TagMap), integrations: S.optional(Integrations)}) {}
export class GetReplicationSetOutput extends S.Class<GetReplicationSetOutput>("GetReplicationSetOutput")({replicationSet: ReplicationSet}) {}
export class StartIncidentInput extends S.Class<StartIncidentInput>("StartIncidentInput")({clientToken: S.optional(S.String), responsePlanArn: S.String, title: S.optional(S.String), impact: S.optional(S.Number), triggerDetails: S.optional(TriggerDetails), relatedItems: S.optional(RelatedItemList)}) {}
export class IncidentRecordSummary extends S.Class<IncidentRecordSummary>("IncidentRecordSummary")({arn: S.String, title: S.String, status: S.String, impact: S.Number, creationTime: S.Date, resolvedTime: S.optional(S.Date), incidentRecordSource: IncidentRecordSource}) {}
export const IncidentRecordSummaryList = S.Array(IncidentRecordSummary);
export class CreateResponsePlanOutput extends S.Class<CreateResponsePlanOutput>("CreateResponsePlanOutput")({arn: S.String}) {}
export class ListIncidentRecordsOutput extends S.Class<ListIncidentRecordsOutput>("ListIncidentRecordsOutput")({incidentRecordSummaries: IncidentRecordSummaryList, nextToken: S.optional(S.String)}) {}
export class StartIncidentOutput extends S.Class<StartIncidentOutput>("StartIncidentOutput")({incidentRecordArn: S.String}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String, resourceIdentifier: S.optional(S.String), resourceType: S.optional(S.String), serviceCode: S.String, quotaCode: S.String}) {};

//# Operations
/**
 * Removes a tag from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update deletion protection to either allow or deny deletion of the final Region in a
 * replication set.
 */export const updateDeletionProtection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/updateDeletionProtection", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.UpdateDeletionProtection" }, UpdateDeletionProtectionInput, UpdateDeletionProtectionOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a timeline event. You can update events of type `Custom Event`.
 */export const updateTimelineEvent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/updateTimelineEvent", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.UpdateTimelineEvent" }, UpdateTimelineEventInput, UpdateTimelineEventOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an incident record from Incident Manager.
 */export const deleteIncidentRecord = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/deleteIncidentRecord", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.DeleteIncidentRecord" }, DeleteIncidentRecordInput, DeleteIncidentRecordOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes all Regions in your replication set. Deleting the replication set deletes all
 * Incident Manager data.
 */export const deleteReplicationSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/deleteReplicationSet", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.DeleteReplicationSet" }, DeleteReplicationSetInput, DeleteReplicationSetOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the resource policy that Resource Access Manager uses to share your Incident Manager
 * resource.
 */export const deleteResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/deleteResourcePolicy", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.DeleteResourcePolicy" }, DeleteResourcePolicyInput, DeleteResourcePolicyOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response
 * plan.
 */export const deleteResponsePlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/deleteResponsePlan", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.DeleteResponsePlan" }, DeleteResponsePlanInput, DeleteResponsePlanOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a timeline event from an incident.
 */export const deleteTimelineEvent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/deleteTimelineEvent", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.DeleteTimelineEvent" }, DeleteTimelineEventInput, DeleteTimelineEventOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of the specified response plan.
 */export const getResponsePlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/getResponsePlan", method: "GET", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.GetResponsePlan" }, GetResponsePlanInput, GetResponsePlanOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all related items for an incident record.
 */export const listRelatedItems = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/listRelatedItems", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.ListRelatedItems" }, ListRelatedItemsInput, ListRelatedItemsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists details about the replication set configured in your account.
 */export const listReplicationSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/listReplicationSets", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.ListReplicationSets" }, ListReplicationSetsInput, ListReplicationSetsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags that are attached to the specified response plan or incident.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "GET", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a resource policy to the specified response plan. The resource policy is used to
 * share the response plan using Resource Access Manager (RAM). For more
 * information about cross-account sharing, see Cross-Region and cross-account incident management.
 */export const putResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/putResourcePolicy", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.PutResourcePolicy" }, PutResourcePolicyInput, PutResourcePolicyOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the details of an incident record. You can use this operation to update an incident
 * record from the defined chat channel. For more information about using actions in chat
 * channels, see Interacting through chat.
 */export const updateIncidentRecord = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/updateIncidentRecord", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.UpdateIncidentRecord" }, UpdateIncidentRecordInput, UpdateIncidentRecordOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add or remove related items from the related items tab of an incident record.
 */export const updateRelatedItems = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/updateRelatedItems", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.UpdateRelatedItems" }, UpdateRelatedItemsInput, UpdateRelatedItemsOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified response plan.
 */export const updateResponsePlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/updateResponsePlan", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.UpdateResponsePlan" }, UpdateResponsePlanInput, UpdateResponsePlanOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a custom timeline event on the incident details page of an incident record.
 * Incident Manager automatically creates timeline events that mark key moments during an incident.
 * You can create custom timeline events to mark important events that Incident Manager can detect
 * automatically.
 */export const createTimelineEvent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/createTimelineEvent", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.CreateTimelineEvent" }, CreateTimelineEventInput, CreateTimelineEventOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the resource policies attached to the specified response plan.
 */export const getResourcePolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/getResourcePolicies", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.GetResourcePolicies" }, GetResourcePoliciesInput, GetResourcePoliciesOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a timeline event based on its ID and incident record.
 */export const getTimelineEvent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/getTimelineEvent", method: "GET", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.GetTimelineEvent" }, GetTimelineEventInput, GetTimelineEventOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of the IDs of findings, plus their last modified times, that have been
 * identified for a specified incident. A finding represents a recent application environment
 * change made by an CloudFormation stack creation or update or an CodeDeploy
 * deployment that can be investigated as a potential cause of the incident.
 */export const listIncidentFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/listIncidentFindings", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.ListIncidentFindings" }, ListIncidentFindingsInput, ListIncidentFindingsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all response plans in your account.
 */export const listResponsePlans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/listResponsePlans", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.ListResponsePlans" }, ListResponsePlansInput, ListResponsePlansOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists timeline events for the specified incident record.
 */export const listTimelineEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/listTimelineEvents", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.ListTimelineEvents" }, ListTimelineEventsInput, ListTimelineEventsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a tag to a response plan.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add or delete Regions from your replication set.
 */export const updateReplicationSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/updateReplicationSet", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.UpdateReplicationSet" }, UpdateReplicationSetInput, UpdateReplicationSetOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A replication set replicates and encrypts your data to the provided Regions with the
 * provided KMS key.
 */export const createReplicationSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/createReplicationSet", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.CreateReplicationSet" }, CreateReplicationSetInput, CreateReplicationSetOutput, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the details for the specified incident record.
 */export const getIncidentRecord = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/getIncidentRecord", method: "GET", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.GetIncidentRecord" }, GetIncidentRecordInput, GetIncidentRecordOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about all specified findings for an incident, including descriptive details about each finding. A finding
 * represents a recent application environment change made by an CodeDeploy
 * deployment or an CloudFormation stack creation or update that can be investigated as a
 * potential cause of the incident.
 */export const batchGetIncidentFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/batchGetIncidentFindings", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.BatchGetIncidentFindings" }, BatchGetIncidentFindingsInput, BatchGetIncidentFindingsOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieve your Incident Manager replication set.
 */export const getReplicationSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/getReplicationSet", method: "GET", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.GetReplicationSet" }, GetReplicationSetInput, GetReplicationSetOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a response plan that automates the initial response to incidents. A response plan
 * engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning
 * of an incident.
 */export const createResponsePlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/createResponsePlan", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.CreateResponsePlan" }, CreateResponsePlanInput, CreateResponsePlanOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all incident records in your account. Use this command to retrieve the Amazon
 * Resource Name (ARN) of the incident record you want to update.
 */export const listIncidentRecords = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/listIncidentRecords", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.ListIncidentRecords" }, ListIncidentRecordsInput, ListIncidentRecordsOutput, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Used to start an incident from CloudWatch alarms, EventBridge events, or
 * manually.
 */export const startIncident = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/startIncident", sdkId: "SSM Incidents", sigV4ServiceName: "ssm-incidents", name: "SSMIncidents.StartIncident" }, StartIncidentInput, StartIncidentOutput, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
