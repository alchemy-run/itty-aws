import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AddRemoveAttributesFindingArnList = S.Array(S.String);
export const AssessmentTemplateRulesPackageArnList = S.Array(S.String);
export const BatchDescribeArnList = S.Array(S.String);
export const BatchDescribeExclusionsArnList = S.Array(S.String);
export const ListParentArnList = S.Array(S.String);
export const UserAttributeKeyList = S.Array(S.String);
export class CreateAssessmentTargetRequest extends S.Class<CreateAssessmentTargetRequest>("CreateAssessmentTargetRequest")({assessmentTargetName: S.String, resourceGroupArn: S.optional(S.String)}) {}
export class Attribute extends S.Class<Attribute>("Attribute")({key: S.String, value: S.optional(S.String)}) {}
export const UserAttributeList = S.Array(Attribute);
export class CreateAssessmentTemplateRequest extends S.Class<CreateAssessmentTemplateRequest>("CreateAssessmentTemplateRequest")({assessmentTargetArn: S.String, assessmentTemplateName: S.String, durationInSeconds: S.Number, rulesPackageArns: AssessmentTemplateRulesPackageArnList, userAttributesForFindings: S.optional(UserAttributeList)}) {}
export class CreateExclusionsPreviewRequest extends S.Class<CreateExclusionsPreviewRequest>("CreateExclusionsPreviewRequest")({assessmentTemplateArn: S.String}) {}
export class DeleteAssessmentRunRequest extends S.Class<DeleteAssessmentRunRequest>("DeleteAssessmentRunRequest")({assessmentRunArn: S.String}) {}
export class DeleteAssessmentTargetRequest extends S.Class<DeleteAssessmentTargetRequest>("DeleteAssessmentTargetRequest")({assessmentTargetArn: S.String}) {}
export class DeleteAssessmentTemplateRequest extends S.Class<DeleteAssessmentTemplateRequest>("DeleteAssessmentTemplateRequest")({assessmentTemplateArn: S.String}) {}
export class DescribeAssessmentRunsRequest extends S.Class<DescribeAssessmentRunsRequest>("DescribeAssessmentRunsRequest")({assessmentRunArns: BatchDescribeArnList}) {}
export class DescribeAssessmentTargetsRequest extends S.Class<DescribeAssessmentTargetsRequest>("DescribeAssessmentTargetsRequest")({assessmentTargetArns: BatchDescribeArnList}) {}
export class DescribeAssessmentTemplatesRequest extends S.Class<DescribeAssessmentTemplatesRequest>("DescribeAssessmentTemplatesRequest")({assessmentTemplateArns: BatchDescribeArnList}) {}
export class DescribeCrossAccountAccessRoleResponse extends S.Class<DescribeCrossAccountAccessRoleResponse>("DescribeCrossAccountAccessRoleResponse")({roleArn: S.String, valid: S.Boolean, registeredAt: S.Date}) {}
export class DescribeExclusionsRequest extends S.Class<DescribeExclusionsRequest>("DescribeExclusionsRequest")({exclusionArns: BatchDescribeExclusionsArnList, locale: S.optional(S.String)}) {}
export class DescribeFindingsRequest extends S.Class<DescribeFindingsRequest>("DescribeFindingsRequest")({findingArns: BatchDescribeArnList, locale: S.optional(S.String)}) {}
export class DescribeResourceGroupsRequest extends S.Class<DescribeResourceGroupsRequest>("DescribeResourceGroupsRequest")({resourceGroupArns: BatchDescribeArnList}) {}
export class DescribeRulesPackagesRequest extends S.Class<DescribeRulesPackagesRequest>("DescribeRulesPackagesRequest")({rulesPackageArns: BatchDescribeArnList, locale: S.optional(S.String)}) {}
export class GetAssessmentReportRequest extends S.Class<GetAssessmentReportRequest>("GetAssessmentReportRequest")({assessmentRunArn: S.String, reportFileFormat: S.String, reportType: S.String}) {}
export class GetExclusionsPreviewRequest extends S.Class<GetExclusionsPreviewRequest>("GetExclusionsPreviewRequest")({assessmentTemplateArn: S.String, previewToken: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), locale: S.optional(S.String)}) {}
export class GetTelemetryMetadataRequest extends S.Class<GetTelemetryMetadataRequest>("GetTelemetryMetadataRequest")({assessmentRunArn: S.String}) {}
export class ListEventSubscriptionsRequest extends S.Class<ListEventSubscriptionsRequest>("ListEventSubscriptionsRequest")({resourceArn: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListExclusionsRequest extends S.Class<ListExclusionsRequest>("ListExclusionsRequest")({assessmentRunArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListRulesPackagesRequest extends S.Class<ListRulesPackagesRequest>("ListRulesPackagesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class PreviewAgentsRequest extends S.Class<PreviewAgentsRequest>("PreviewAgentsRequest")({previewAgentsArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class RegisterCrossAccountAccessRoleRequest extends S.Class<RegisterCrossAccountAccessRoleRequest>("RegisterCrossAccountAccessRoleRequest")({roleArn: S.String}) {}
export class RemoveAttributesFromFindingsRequest extends S.Class<RemoveAttributesFromFindingsRequest>("RemoveAttributesFromFindingsRequest")({findingArns: AddRemoveAttributesFindingArnList, attributeKeys: UserAttributeKeyList}) {}
export class StartAssessmentRunRequest extends S.Class<StartAssessmentRunRequest>("StartAssessmentRunRequest")({assessmentTemplateArn: S.String, assessmentRunName: S.optional(S.String)}) {}
export class StopAssessmentRunRequest extends S.Class<StopAssessmentRunRequest>("StopAssessmentRunRequest")({assessmentRunArn: S.String, stopAction: S.optional(S.String)}) {}
export class SubscribeToEventRequest extends S.Class<SubscribeToEventRequest>("SubscribeToEventRequest")({resourceArn: S.String, event: S.String, topicArn: S.String}) {}
export class UnsubscribeFromEventRequest extends S.Class<UnsubscribeFromEventRequest>("UnsubscribeFromEventRequest")({resourceArn: S.String, event: S.String, topicArn: S.String}) {}
export class UpdateAssessmentTargetRequest extends S.Class<UpdateAssessmentTargetRequest>("UpdateAssessmentTargetRequest")({assessmentTargetArn: S.String, assessmentTargetName: S.String, resourceGroupArn: S.optional(S.String)}) {}
export const AgentHealthList = S.Array(S.String);
export const AgentHealthCodeList = S.Array(S.String);
export const AssessmentRunStateList = S.Array(S.String);
export const FilterRulesPackageArnList = S.Array(S.String);
export const AgentIdList = S.Array(S.String);
export const AutoScalingGroupList = S.Array(S.String);
export const RuleNameList = S.Array(S.String);
export const SeverityList = S.Array(S.String);
export const AttributeList = S.Array(Attribute);
export class ResourceGroupTag extends S.Class<ResourceGroupTag>("ResourceGroupTag")({key: S.String, value: S.optional(S.String)}) {}
export const ResourceGroupTags = S.Array(ResourceGroupTag);
export const AssessmentRunInProgressArnList = S.Array(S.String);
export class AgentFilter extends S.Class<AgentFilter>("AgentFilter")({agentHealths: AgentHealthList, agentHealthCodes: AgentHealthCodeList}) {}
export class AssessmentTargetFilter extends S.Class<AssessmentTargetFilter>("AssessmentTargetFilter")({assessmentTargetNamePattern: S.optional(S.String)}) {}
export class DurationRange extends S.Class<DurationRange>("DurationRange")({minSeconds: S.optional(S.Number), maxSeconds: S.optional(S.Number)}) {}
export class AssessmentTemplateFilter extends S.Class<AssessmentTemplateFilter>("AssessmentTemplateFilter")({namePattern: S.optional(S.String), durationRange: S.optional(DurationRange), rulesPackageArns: S.optional(FilterRulesPackageArnList)}) {}
export const ListReturnedArnList = S.Array(S.String);
export class TimestampRange extends S.Class<TimestampRange>("TimestampRange")({beginDate: S.optional(S.Date), endDate: S.optional(S.Date)}) {}
export class FindingFilter extends S.Class<FindingFilter>("FindingFilter")({agentIds: S.optional(AgentIdList), autoScalingGroups: S.optional(AutoScalingGroupList), ruleNames: S.optional(RuleNameList), severities: S.optional(SeverityList), rulesPackageArns: S.optional(FilterRulesPackageArnList), attributes: S.optional(AttributeList), userAttributes: S.optional(AttributeList), creationTimeRange: S.optional(TimestampRange)}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class AddAttributesToFindingsRequest extends S.Class<AddAttributesToFindingsRequest>("AddAttributesToFindingsRequest")({findingArns: AddRemoveAttributesFindingArnList, attributes: UserAttributeList}) {}
export class CreateAssessmentTargetResponse extends S.Class<CreateAssessmentTargetResponse>("CreateAssessmentTargetResponse")({assessmentTargetArn: S.String}) {}
export class CreateAssessmentTemplateResponse extends S.Class<CreateAssessmentTemplateResponse>("CreateAssessmentTemplateResponse")({assessmentTemplateArn: S.String}) {}
export class CreateExclusionsPreviewResponse extends S.Class<CreateExclusionsPreviewResponse>("CreateExclusionsPreviewResponse")({previewToken: S.String}) {}
export class CreateResourceGroupRequest extends S.Class<CreateResourceGroupRequest>("CreateResourceGroupRequest")({resourceGroupTags: ResourceGroupTags}) {}
export class GetAssessmentReportResponse extends S.Class<GetAssessmentReportResponse>("GetAssessmentReportResponse")({status: S.String, url: S.optional(S.String)}) {}
export class ListAssessmentRunAgentsRequest extends S.Class<ListAssessmentRunAgentsRequest>("ListAssessmentRunAgentsRequest")({assessmentRunArn: S.String, filter: S.optional(AgentFilter), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssessmentTargetsRequest extends S.Class<ListAssessmentTargetsRequest>("ListAssessmentTargetsRequest")({filter: S.optional(AssessmentTargetFilter), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssessmentTemplatesRequest extends S.Class<ListAssessmentTemplatesRequest>("ListAssessmentTemplatesRequest")({assessmentTargetArns: S.optional(ListParentArnList), filter: S.optional(AssessmentTemplateFilter), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListExclusionsResponse extends S.Class<ListExclusionsResponse>("ListExclusionsResponse")({exclusionArns: ListReturnedArnList, nextToken: S.optional(S.String)}) {}
export class ListFindingsRequest extends S.Class<ListFindingsRequest>("ListFindingsRequest")({assessmentRunArns: S.optional(ListParentArnList), filter: S.optional(FindingFilter), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListRulesPackagesResponse extends S.Class<ListRulesPackagesResponse>("ListRulesPackagesResponse")({rulesPackageArns: ListReturnedArnList, nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: TagList}) {}
export class FailedItemDetails extends S.Class<FailedItemDetails>("FailedItemDetails")({failureCode: S.String, retryable: S.Boolean}) {}
export const FailedItems = S.Record({key: S.String, value: FailedItemDetails});
export class RemoveAttributesFromFindingsResponse extends S.Class<RemoveAttributesFromFindingsResponse>("RemoveAttributesFromFindingsResponse")({failedItems: FailedItems}) {}
export class SetTagsForResourceRequest extends S.Class<SetTagsForResourceRequest>("SetTagsForResourceRequest")({resourceArn: S.String, tags: S.optional(TagList)}) {}
export class StartAssessmentRunResponse extends S.Class<StartAssessmentRunResponse>("StartAssessmentRunResponse")({assessmentRunArn: S.String}) {}
export const AssessmentRulesPackageArnList = S.Array(S.String);
export class AssessmentTarget extends S.Class<AssessmentTarget>("AssessmentTarget")({arn: S.String, name: S.String, resourceGroupArn: S.optional(S.String), createdAt: S.Date, updatedAt: S.Date}) {}
export const AssessmentTargetList = S.Array(AssessmentTarget);
export class AssessmentTemplate extends S.Class<AssessmentTemplate>("AssessmentTemplate")({arn: S.String, name: S.String, assessmentTargetArn: S.String, durationInSeconds: S.Number, rulesPackageArns: AssessmentTemplateRulesPackageArnList, userAttributesForFindings: UserAttributeList, lastAssessmentRunArn: S.optional(S.String), assessmentRunCount: S.Number, createdAt: S.Date}) {}
export const AssessmentTemplateList = S.Array(AssessmentTemplate);
export class ResourceGroup extends S.Class<ResourceGroup>("ResourceGroup")({arn: S.String, tags: ResourceGroupTags, createdAt: S.Date}) {}
export const ResourceGroupList = S.Array(ResourceGroup);
export class RulesPackage extends S.Class<RulesPackage>("RulesPackage")({arn: S.String, name: S.String, version: S.String, provider: S.String, description: S.optional(S.String)}) {}
export const RulesPackageList = S.Array(RulesPackage);
export class TelemetryMetadata extends S.Class<TelemetryMetadata>("TelemetryMetadata")({messageType: S.String, count: S.Number, dataSize: S.optional(S.Number)}) {}
export const TelemetryMetadataList = S.Array(TelemetryMetadata);
export class AssessmentRunFilter extends S.Class<AssessmentRunFilter>("AssessmentRunFilter")({namePattern: S.optional(S.String), states: S.optional(AssessmentRunStateList), durationRange: S.optional(DurationRange), rulesPackageArns: S.optional(FilterRulesPackageArnList), startTimeRange: S.optional(TimestampRange), completionTimeRange: S.optional(TimestampRange), stateChangeTimeRange: S.optional(TimestampRange)}) {}
export class AgentPreview extends S.Class<AgentPreview>("AgentPreview")({hostname: S.optional(S.String), agentId: S.String, autoScalingGroup: S.optional(S.String), agentHealth: S.optional(S.String), agentVersion: S.optional(S.String), operatingSystem: S.optional(S.String), kernelVersion: S.optional(S.String), ipv4Address: S.optional(S.String)}) {}
export const AgentPreviewList = S.Array(AgentPreview);
export const Ipv4AddressList = S.Array(S.String);
export const Tags = S.Array(Tag);
export class AddAttributesToFindingsResponse extends S.Class<AddAttributesToFindingsResponse>("AddAttributesToFindingsResponse")({failedItems: FailedItems}) {}
export class CreateResourceGroupResponse extends S.Class<CreateResourceGroupResponse>("CreateResourceGroupResponse")({resourceGroupArn: S.String}) {}
export class DescribeAssessmentTargetsResponse extends S.Class<DescribeAssessmentTargetsResponse>("DescribeAssessmentTargetsResponse")({assessmentTargets: AssessmentTargetList, failedItems: FailedItems}) {}
export class DescribeAssessmentTemplatesResponse extends S.Class<DescribeAssessmentTemplatesResponse>("DescribeAssessmentTemplatesResponse")({assessmentTemplates: AssessmentTemplateList, failedItems: FailedItems}) {}
export class DescribeResourceGroupsResponse extends S.Class<DescribeResourceGroupsResponse>("DescribeResourceGroupsResponse")({resourceGroups: ResourceGroupList, failedItems: FailedItems}) {}
export class DescribeRulesPackagesResponse extends S.Class<DescribeRulesPackagesResponse>("DescribeRulesPackagesResponse")({rulesPackages: RulesPackageList, failedItems: FailedItems}) {}
export class GetTelemetryMetadataResponse extends S.Class<GetTelemetryMetadataResponse>("GetTelemetryMetadataResponse")({telemetryMetadata: TelemetryMetadataList}) {}
export class ListAssessmentRunsRequest extends S.Class<ListAssessmentRunsRequest>("ListAssessmentRunsRequest")({assessmentTemplateArns: S.optional(ListParentArnList), filter: S.optional(AssessmentRunFilter), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAssessmentTargetsResponse extends S.Class<ListAssessmentTargetsResponse>("ListAssessmentTargetsResponse")({assessmentTargetArns: ListReturnedArnList, nextToken: S.optional(S.String)}) {}
export class ListAssessmentTemplatesResponse extends S.Class<ListAssessmentTemplatesResponse>("ListAssessmentTemplatesResponse")({assessmentTemplateArns: ListReturnedArnList, nextToken: S.optional(S.String)}) {}
export class ListFindingsResponse extends S.Class<ListFindingsResponse>("ListFindingsResponse")({findingArns: ListReturnedArnList, nextToken: S.optional(S.String)}) {}
export class PreviewAgentsResponse extends S.Class<PreviewAgentsResponse>("PreviewAgentsResponse")({agentPreviews: AgentPreviewList, nextToken: S.optional(S.String)}) {}
export class AssessmentRunStateChange extends S.Class<AssessmentRunStateChange>("AssessmentRunStateChange")({stateChangedAt: S.Date, state: S.String}) {}
export const AssessmentRunStateChangeList = S.Array(AssessmentRunStateChange);
export class AssessmentRunNotification extends S.Class<AssessmentRunNotification>("AssessmentRunNotification")({date: S.Date, event: S.String, message: S.optional(S.String), error: S.Boolean, snsTopicArn: S.optional(S.String), snsPublishStatusCode: S.optional(S.String)}) {}
export const AssessmentRunNotificationList = S.Array(AssessmentRunNotification);
export const AssessmentRunFindingCounts = S.Record({key: S.String, value: S.Number});
export class Scope extends S.Class<Scope>("Scope")({key: S.optional(S.String), value: S.optional(S.String)}) {}
export const ScopeList = S.Array(Scope);
export class Exclusion extends S.Class<Exclusion>("Exclusion")({arn: S.String, title: S.String, description: S.String, recommendation: S.String, scopes: ScopeList, attributes: S.optional(AttributeList)}) {}
export class InspectorServiceAttributes extends S.Class<InspectorServiceAttributes>("InspectorServiceAttributes")({schemaVersion: S.Number, assessmentRunArn: S.optional(S.String), rulesPackageArn: S.optional(S.String)}) {}
export class EventSubscription extends S.Class<EventSubscription>("EventSubscription")({event: S.String, subscribedAt: S.Date}) {}
export const EventSubscriptionList = S.Array(EventSubscription);
export const Ipv6Addresses = S.Array(S.String);
export class AssessmentRun extends S.Class<AssessmentRun>("AssessmentRun")({arn: S.String, name: S.String, assessmentTemplateArn: S.String, state: S.String, durationInSeconds: S.Number, rulesPackageArns: AssessmentRulesPackageArnList, userAttributesForFindings: UserAttributeList, createdAt: S.Date, startedAt: S.optional(S.Date), completedAt: S.optional(S.Date), stateChangedAt: S.Date, dataCollected: S.Boolean, stateChanges: AssessmentRunStateChangeList, notifications: AssessmentRunNotificationList, findingCounts: AssessmentRunFindingCounts}) {}
export const AssessmentRunList = S.Array(AssessmentRun);
export const ExclusionMap = S.Record({key: S.String, value: Exclusion});
export class ExclusionPreview extends S.Class<ExclusionPreview>("ExclusionPreview")({title: S.String, description: S.String, recommendation: S.String, scopes: ScopeList, attributes: S.optional(AttributeList)}) {}
export const ExclusionPreviewList = S.Array(ExclusionPreview);
export class AssessmentRunAgent extends S.Class<AssessmentRunAgent>("AssessmentRunAgent")({agentId: S.String, assessmentRunArn: S.String, agentHealth: S.String, agentHealthCode: S.String, agentHealthDetails: S.optional(S.String), autoScalingGroup: S.optional(S.String), telemetryMetadata: TelemetryMetadataList}) {}
export const AssessmentRunAgentList = S.Array(AssessmentRunAgent);
export class Subscription extends S.Class<Subscription>("Subscription")({resourceArn: S.String, topicArn: S.String, eventSubscriptions: EventSubscriptionList}) {}
export const SubscriptionList = S.Array(Subscription);
export class AgentAlreadyRunningAssessment extends S.Class<AgentAlreadyRunningAssessment>("AgentAlreadyRunningAssessment")({agentId: S.String, assessmentRunArn: S.String}) {}
export const AgentAlreadyRunningAssessmentList = S.Array(AgentAlreadyRunningAssessment);
export class DescribeAssessmentRunsResponse extends S.Class<DescribeAssessmentRunsResponse>("DescribeAssessmentRunsResponse")({assessmentRuns: AssessmentRunList, failedItems: FailedItems}) {}
export class DescribeExclusionsResponse extends S.Class<DescribeExclusionsResponse>("DescribeExclusionsResponse")({exclusions: ExclusionMap, failedItems: FailedItems}) {}
export class GetExclusionsPreviewResponse extends S.Class<GetExclusionsPreviewResponse>("GetExclusionsPreviewResponse")({previewStatus: S.String, exclusionPreviews: S.optional(ExclusionPreviewList), nextToken: S.optional(S.String)}) {}
export class ListAssessmentRunAgentsResponse extends S.Class<ListAssessmentRunAgentsResponse>("ListAssessmentRunAgentsResponse")({assessmentRunAgents: AssessmentRunAgentList, nextToken: S.optional(S.String)}) {}
export class ListAssessmentRunsResponse extends S.Class<ListAssessmentRunsResponse>("ListAssessmentRunsResponse")({assessmentRunArns: ListReturnedArnList, nextToken: S.optional(S.String)}) {}
export class ListEventSubscriptionsResponse extends S.Class<ListEventSubscriptionsResponse>("ListEventSubscriptionsResponse")({subscriptions: SubscriptionList, nextToken: S.optional(S.String)}) {}
export class PrivateIp extends S.Class<PrivateIp>("PrivateIp")({privateDnsName: S.optional(S.String), privateIpAddress: S.optional(S.String)}) {}
export const PrivateIpAddresses = S.Array(PrivateIp);
export class SecurityGroup extends S.Class<SecurityGroup>("SecurityGroup")({groupName: S.optional(S.String), groupId: S.optional(S.String)}) {}
export const SecurityGroups = S.Array(SecurityGroup);
export class NetworkInterface extends S.Class<NetworkInterface>("NetworkInterface")({networkInterfaceId: S.optional(S.String), subnetId: S.optional(S.String), vpcId: S.optional(S.String), privateDnsName: S.optional(S.String), privateIpAddress: S.optional(S.String), privateIpAddresses: S.optional(PrivateIpAddresses), publicDnsName: S.optional(S.String), publicIp: S.optional(S.String), ipv6Addresses: S.optional(Ipv6Addresses), securityGroups: S.optional(SecurityGroups)}) {}
export const NetworkInterfaces = S.Array(NetworkInterface);
export class AssetAttributes extends S.Class<AssetAttributes>("AssetAttributes")({schemaVersion: S.Number, agentId: S.optional(S.String), autoScalingGroup: S.optional(S.String), amiId: S.optional(S.String), hostname: S.optional(S.String), ipv4Addresses: S.optional(Ipv4AddressList), tags: S.optional(Tags), networkInterfaces: S.optional(NetworkInterfaces)}) {}
export class Finding extends S.Class<Finding>("Finding")({arn: S.String, schemaVersion: S.optional(S.Number), service: S.optional(S.String), serviceAttributes: S.optional(InspectorServiceAttributes), assetType: S.optional(S.String), assetAttributes: S.optional(AssetAttributes), id: S.optional(S.String), title: S.optional(S.String), description: S.optional(S.String), recommendation: S.optional(S.String), severity: S.optional(S.String), numericSeverity: S.optional(S.Number), confidence: S.optional(S.Number), indicatorOfCompromise: S.optional(S.Boolean), attributes: AttributeList, userAttributes: UserAttributeList, createdAt: S.Date, updatedAt: S.Date}) {}
export const FindingList = S.Array(Finding);
export class DescribeFindingsResponse extends S.Class<DescribeFindingsResponse>("DescribeFindingsResponse")({findings: FindingList, failedItems: FailedItems}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class AssessmentRunInProgressException extends S.TaggedError<AssessmentRunInProgressException>()("AssessmentRunInProgressException", {}) {};
export class InternalException extends S.TaggedError<InternalException>()("InternalException", {}) {};
export class InvalidInputException extends S.TaggedError<InvalidInputException>()("InvalidInputException", {}) {};
export class NoSuchEntityException extends S.TaggedError<NoSuchEntityException>()("NoSuchEntityException", {}) {};
export class InvalidCrossAccountRoleException extends S.TaggedError<InvalidCrossAccountRoleException>()("InvalidCrossAccountRoleException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ServiceTemporarilyUnavailableException extends S.TaggedError<ServiceTemporarilyUnavailableException>()("ServiceTemporarilyUnavailableException", {}) {};
export class PreviewGenerationInProgressException extends S.TaggedError<PreviewGenerationInProgressException>()("PreviewGenerationInProgressException", {message: S.String}) {};
export class UnsupportedFeatureException extends S.TaggedError<UnsupportedFeatureException>()("UnsupportedFeatureException", {message: S.String, canRetry: S.Boolean}) {};
export class AgentsAlreadyRunningAssessmentException extends S.TaggedError<AgentsAlreadyRunningAssessmentException>()("AgentsAlreadyRunningAssessmentException", {message: S.String, agents: AgentAlreadyRunningAssessmentList, agentsTruncated: S.Boolean, canRetry: S.Boolean}) {};

//# Operations
/**
 * Describes the IAM role that enables Amazon Inspector to access your AWS
 * account.
 */export const describeCrossAccountAccessRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DescribeCrossAccountAccessRole" }, S.Struct({}), DescribeCrossAccountAccessRoleResponse, [InternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new assessment target using the ARN of the resource group that is generated
 * by CreateResourceGroup. If resourceGroupArn is not specified, all EC2
 * instances in the current AWS account and region are included in the assessment target. If
 * the service-linked role isn’t already registered, this action also creates and
 * registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 * perform security assessments. You can create up to 50 assessment targets per AWS account.
 * You can run up to 500 concurrent agents per AWS account. For more information, see
 * Amazon Inspector Assessment Targets.
 */export const createAssessmentTarget = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.CreateAssessmentTarget" }, CreateAssessmentTargetRequest, CreateAssessmentTargetResponse, [AccessDeniedException, InternalException, InvalidCrossAccountRoleException, InvalidInputException, LimitExceededException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an assessment template for the assessment target that is specified by the ARN
 * of the assessment target. If the service-linked role isn’t already registered, this action also creates and
 * registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 * perform security assessments.
 */export const createAssessmentTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.CreateAssessmentTemplate" }, CreateAssessmentTemplateRequest, CreateAssessmentTemplateResponse, [AccessDeniedException, InternalException, InvalidInputException, LimitExceededException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the assessment run that is specified by the ARN of the assessment
 * run.
 */export const deleteAssessmentRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DeleteAssessmentRun" }, DeleteAssessmentRunRequest, S.Struct({}), [AccessDeniedException, AssessmentRunInProgressException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the assessment target that is specified by the ARN of the assessment
 * target.
 */export const deleteAssessmentTarget = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DeleteAssessmentTarget" }, DeleteAssessmentTargetRequest, S.Struct({}), [AccessDeniedException, AssessmentRunInProgressException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the assessment template that is specified by the ARN of the assessment
 * template.
 */export const deleteAssessmentTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DeleteAssessmentTemplate" }, DeleteAssessmentTemplateRequest, S.Struct({}), [AccessDeniedException, AssessmentRunInProgressException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List exclusions that are generated by the assessment run.
 */export const listExclusions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.ListExclusions" }, ListExclusionsRequest, ListExclusionsResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all available Amazon Inspector rules packages.
 */export const listRulesPackages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.ListRulesPackages" }, ListRulesPackagesRequest, ListRulesPackagesResponse, [AccessDeniedException, InternalException, InvalidInputException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all tags associated with an assessment template.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Registers the IAM role that grants Amazon Inspector access to AWS Services needed to
 * perform security assessments.
 */export const registerCrossAccountAccessRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.RegisterCrossAccountAccessRole" }, RegisterCrossAccountAccessRoleRequest, S.Struct({}), [AccessDeniedException, InternalException, InvalidCrossAccountRoleException, InvalidInputException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes entire attributes (key and value pairs) from the findings that are specified
 * by the ARNs of the findings where an attribute with the specified key exists.
 */export const removeAttributesFromFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.RemoveAttributesFromFindings" }, RemoveAttributesFromFindingsRequest, RemoveAttributesFromFindingsResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets tags (key and value pairs) to the assessment template that is specified by the
 * ARN of the assessment template.
 */export const setTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.SetTagsForResource" }, SetTagsForResourceRequest, S.Struct({}), [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops the assessment run that is specified by the ARN of the assessment
 * run.
 */export const stopAssessmentRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.StopAssessmentRun" }, StopAssessmentRunRequest, S.Struct({}), [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables the process of sending Amazon Simple Notification Service (SNS) notifications
 * about a specified event to a specified SNS topic.
 */export const subscribeToEvent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.SubscribeToEvent" }, SubscribeToEventRequest, S.Struct({}), [AccessDeniedException, InternalException, InvalidInputException, LimitExceededException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables the process of sending Amazon Simple Notification Service (SNS)
 * notifications about a specified event to a specified SNS topic.
 */export const unsubscribeFromEvent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.UnsubscribeFromEvent" }, UnsubscribeFromEventRequest, S.Struct({}), [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the assessment target that is specified by the ARN of the assessment
 * target.
 * 
 * 
 * If resourceGroupArn is not specified, all EC2 instances in the current AWS account
 * and region are included in the assessment target.
 */export const updateAssessmentTarget = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.UpdateAssessmentTarget" }, UpdateAssessmentTargetRequest, S.Struct({}), [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns attributes (key and value pairs) to the findings that are specified by the
 * ARNs of the findings.
 */export const addAttributesToFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.AddAttributesToFindings" }, AddAttributesToFindingsRequest, AddAttributesToFindingsResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the generation of an exclusions preview for the specified assessment template.
 * The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can
 * detect before it runs the assessment.
 */export const createExclusionsPreview = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.CreateExclusionsPreview" }, CreateExclusionsPreviewRequest, CreateExclusionsPreviewResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException, PreviewGenerationInProgressException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a resource group using the specified set of tags (key and value pairs) that
 * are used to select the EC2 instances to be included in an Amazon Inspector assessment
 * target. The created resource group is then used to create an Amazon Inspector assessment
 * target. For more information, see CreateAssessmentTarget.
 */export const createResourceGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.CreateResourceGroup" }, CreateResourceGroupRequest, CreateResourceGroupResponse, [AccessDeniedException, InternalException, InvalidInputException, LimitExceededException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the assessment targets that are specified by the ARNs of the assessment
 * targets.
 */export const describeAssessmentTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DescribeAssessmentTargets" }, DescribeAssessmentTargetsRequest, DescribeAssessmentTargetsResponse, [InternalException, InvalidInputException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the assessment templates that are specified by the ARNs of the assessment
 * templates.
 */export const describeAssessmentTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DescribeAssessmentTemplates" }, DescribeAssessmentTemplatesRequest, DescribeAssessmentTemplatesResponse, [InternalException, InvalidInputException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the resource groups that are specified by the ARNs of the resource
 * groups.
 */export const describeResourceGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DescribeResourceGroups" }, DescribeResourceGroupsRequest, DescribeResourceGroupsResponse, [InternalException, InvalidInputException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the rules packages that are specified by the ARNs of the rules
 * packages.
 */export const describeRulesPackages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DescribeRulesPackages" }, DescribeRulesPackagesRequest, DescribeRulesPackagesResponse, [InternalException, InvalidInputException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Produces an assessment report that includes detailed and comprehensive results of a
 * specified assessment run.
 */export const getAssessmentReport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.GetAssessmentReport" }, GetAssessmentReportRequest, GetAssessmentReportResponse, [AccessDeniedException, AssessmentRunInProgressException, InternalException, InvalidInputException, NoSuchEntityException, ServiceTemporarilyUnavailableException, UnsupportedFeatureException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Information about the data that is collected for the specified assessment
 * run.
 */export const getTelemetryMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.GetTelemetryMetadata" }, GetTelemetryMetadataRequest, GetTelemetryMetadataResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the ARNs of the assessment targets within this AWS account. For more
 * information about assessment targets, see Amazon Inspector Assessment
 * Targets.
 */export const listAssessmentTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.ListAssessmentTargets" }, ListAssessmentTargetsRequest, ListAssessmentTargetsResponse, [AccessDeniedException, InternalException, InvalidInputException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the assessment templates that correspond to the assessment targets that are
 * specified by the ARNs of the assessment targets.
 */export const listAssessmentTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.ListAssessmentTemplates" }, ListAssessmentTemplatesRequest, ListAssessmentTemplatesResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists findings that are generated by the assessment runs that are specified by the
 * ARNs of the assessment runs.
 */export const listFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.ListFindings" }, ListFindingsRequest, ListFindingsResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Previews the agents installed on the EC2 instances that are part of the specified
 * assessment target.
 */export const previewAgents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.PreviewAgents" }, PreviewAgentsRequest, PreviewAgentsResponse, [AccessDeniedException, InternalException, InvalidCrossAccountRoleException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the assessment runs that are specified by the ARNs of the assessment
 * runs.
 */export const describeAssessmentRuns = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DescribeAssessmentRuns" }, DescribeAssessmentRunsRequest, DescribeAssessmentRunsResponse, [InternalException, InvalidInputException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the exclusions that are specified by the exclusions' ARNs.
 */export const describeExclusions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DescribeExclusions" }, DescribeExclusionsRequest, DescribeExclusionsResponse, [InternalException, InvalidInputException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by
 * the preview token. You can obtain the preview token by running the CreateExclusionsPreview
 * API.
 */export const getExclusionsPreview = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.GetExclusionsPreview" }, GetExclusionsPreviewRequest, GetExclusionsPreviewResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the agents of the assessment runs that are specified by the ARNs of the
 * assessment runs.
 */export const listAssessmentRunAgents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.ListAssessmentRunAgents" }, ListAssessmentRunAgentsRequest, ListAssessmentRunAgentsResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the assessment runs that correspond to the assessment templates that are
 * specified by the ARNs of the assessment templates.
 */export const listAssessmentRuns = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.ListAssessmentRuns" }, ListAssessmentRunsRequest, ListAssessmentRunsResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the event subscriptions for the assessment template that is specified by
 * the ARN of the assessment template. For more information, see SubscribeToEvent and UnsubscribeFromEvent.
 */export const listEventSubscriptions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.ListEventSubscriptions" }, ListEventSubscriptionsRequest, ListEventSubscriptionsResponse, [AccessDeniedException, InternalException, InvalidInputException, NoSuchEntityException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the assessment run specified by the ARN of the assessment template. For this
 * API to function properly, you must not exceed the limit of running up to 500 concurrent
 * agents per AWS account.
 */export const startAssessmentRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.StartAssessmentRun" }, StartAssessmentRunRequest, StartAssessmentRunResponse, [AccessDeniedException, AgentsAlreadyRunningAssessmentException, InternalException, InvalidCrossAccountRoleException, InvalidInputException, LimitExceededException, NoSuchEntityException, ServiceTemporarilyUnavailableException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the findings that are specified by the ARNs of the findings.
 */export const describeFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-02-16", uri: "/", method: "POST", sdkId: "Inspector", sigV4ServiceName: "inspector", name: "InspectorService.DescribeFindings" }, DescribeFindingsRequest, DescribeFindingsResponse, [InternalException, InvalidInputException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
