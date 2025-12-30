import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AppComponentNameList = S.Array(S.String);
export const RecommendationIdList = S.Array(S.String);
export const RenderRecommendationTypeList = S.Array(S.String);
export const ArnList = S.Array(S.String);
export class TerraformSource extends S.Class<TerraformSource>("TerraformSource")({s3StateFileUrl: S.String}) {}
export const TerraformSourceList = S.Array(TerraformSource);
export const AssessmentStatusList = S.Array(S.String);
export const RecommendationTemplateStatusList = S.Array(S.String);
export const EntityNameList = S.Array(S.String);
export const String255List = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const TagMap = S.Record({key: S.String, value: S.String});
export class CreateRecommendationTemplateRequest extends S.Class<CreateRecommendationTemplateRequest>("CreateRecommendationTemplateRequest")({recommendationIds: S.optional(RecommendationIdList), format: S.optional(S.String), recommendationTypes: S.optional(RenderRecommendationTypeList), assessmentArn: S.String, name: S.String, clientToken: S.optional(S.String), tags: S.optional(TagMap), bucketName: S.optional(S.String)}) {}
export class DeleteAppRequest extends S.Class<DeleteAppRequest>("DeleteAppRequest")({appArn: S.String, forceDelete: S.optional(S.Boolean), clientToken: S.optional(S.String)}) {}
export class DeleteAppAssessmentRequest extends S.Class<DeleteAppAssessmentRequest>("DeleteAppAssessmentRequest")({assessmentArn: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteAppVersionAppComponentRequest extends S.Class<DeleteAppVersionAppComponentRequest>("DeleteAppVersionAppComponentRequest")({appArn: S.String, id: S.String, clientToken: S.optional(S.String)}) {}
export class LogicalResourceId extends S.Class<LogicalResourceId>("LogicalResourceId")({identifier: S.String, logicalStackName: S.optional(S.String), resourceGroupName: S.optional(S.String), terraformSourceName: S.optional(S.String), eksSourceName: S.optional(S.String)}) {}
export class DeleteAppVersionResourceRequest extends S.Class<DeleteAppVersionResourceRequest>("DeleteAppVersionResourceRequest")({appArn: S.String, resourceName: S.optional(S.String), logicalResourceId: S.optional(LogicalResourceId), physicalResourceId: S.optional(S.String), awsRegion: S.optional(S.String), awsAccountId: S.optional(S.String), clientToken: S.optional(S.String)}) {}
export class DeleteRecommendationTemplateRequest extends S.Class<DeleteRecommendationTemplateRequest>("DeleteRecommendationTemplateRequest")({recommendationTemplateArn: S.String, clientToken: S.optional(S.String)}) {}
export class DeleteResiliencyPolicyRequest extends S.Class<DeleteResiliencyPolicyRequest>("DeleteResiliencyPolicyRequest")({policyArn: S.String, clientToken: S.optional(S.String)}) {}
export class DescribeAppRequest extends S.Class<DescribeAppRequest>("DescribeAppRequest")({appArn: S.String}) {}
export class DescribeAppAssessmentRequest extends S.Class<DescribeAppAssessmentRequest>("DescribeAppAssessmentRequest")({assessmentArn: S.String}) {}
export class DescribeAppVersionRequest extends S.Class<DescribeAppVersionRequest>("DescribeAppVersionRequest")({appArn: S.String, appVersion: S.String}) {}
export class DescribeAppVersionAppComponentRequest extends S.Class<DescribeAppVersionAppComponentRequest>("DescribeAppVersionAppComponentRequest")({appArn: S.String, appVersion: S.String, id: S.String}) {}
export class DescribeAppVersionResourceRequest extends S.Class<DescribeAppVersionResourceRequest>("DescribeAppVersionResourceRequest")({appArn: S.String, appVersion: S.String, resourceName: S.optional(S.String), logicalResourceId: S.optional(LogicalResourceId), physicalResourceId: S.optional(S.String), awsRegion: S.optional(S.String), awsAccountId: S.optional(S.String)}) {}
export class DescribeAppVersionResourcesResolutionStatusRequest extends S.Class<DescribeAppVersionResourcesResolutionStatusRequest>("DescribeAppVersionResourcesResolutionStatusRequest")({appArn: S.String, appVersion: S.String, resolutionId: S.optional(S.String)}) {}
export class DescribeAppVersionTemplateRequest extends S.Class<DescribeAppVersionTemplateRequest>("DescribeAppVersionTemplateRequest")({appArn: S.String, appVersion: S.String}) {}
export class DescribeDraftAppVersionResourcesImportStatusRequest extends S.Class<DescribeDraftAppVersionResourcesImportStatusRequest>("DescribeDraftAppVersionResourcesImportStatusRequest")({appArn: S.String}) {}
export class DescribeMetricsExportRequest extends S.Class<DescribeMetricsExportRequest>("DescribeMetricsExportRequest")({metricsExportId: S.String}) {}
export class DescribeResiliencyPolicyRequest extends S.Class<DescribeResiliencyPolicyRequest>("DescribeResiliencyPolicyRequest")({policyArn: S.String}) {}
export class DescribeResourceGroupingRecommendationTaskRequest extends S.Class<DescribeResourceGroupingRecommendationTaskRequest>("DescribeResourceGroupingRecommendationTaskRequest")({appArn: S.String, groupingId: S.optional(S.String)}) {}
export class ListAlarmRecommendationsRequest extends S.Class<ListAlarmRecommendationsRequest>("ListAlarmRecommendationsRequest")({assessmentArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAppAssessmentComplianceDriftsRequest extends S.Class<ListAppAssessmentComplianceDriftsRequest>("ListAppAssessmentComplianceDriftsRequest")({assessmentArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAppAssessmentResourceDriftsRequest extends S.Class<ListAppAssessmentResourceDriftsRequest>("ListAppAssessmentResourceDriftsRequest")({assessmentArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAppAssessmentsRequest extends S.Class<ListAppAssessmentsRequest>("ListAppAssessmentsRequest")({appArn: S.optional(S.String), assessmentName: S.optional(S.String), assessmentStatus: S.optional(AssessmentStatusList), complianceStatus: S.optional(S.String), invoker: S.optional(S.String), reverseOrder: S.optional(S.Boolean), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAppComponentCompliancesRequest extends S.Class<ListAppComponentCompliancesRequest>("ListAppComponentCompliancesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), assessmentArn: S.String}) {}
export class ListAppComponentRecommendationsRequest extends S.Class<ListAppComponentRecommendationsRequest>("ListAppComponentRecommendationsRequest")({assessmentArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAppInputSourcesRequest extends S.Class<ListAppInputSourcesRequest>("ListAppInputSourcesRequest")({appArn: S.String, appVersion: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAppsRequest extends S.Class<ListAppsRequest>("ListAppsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), name: S.optional(S.String), appArn: S.optional(S.String), fromLastAssessmentTime: S.optional(S.Date), toLastAssessmentTime: S.optional(S.Date), reverseOrder: S.optional(S.Boolean), awsApplicationArn: S.optional(S.String)}) {}
export class ListAppVersionAppComponentsRequest extends S.Class<ListAppVersionAppComponentsRequest>("ListAppVersionAppComponentsRequest")({appArn: S.String, appVersion: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAppVersionResourceMappingsRequest extends S.Class<ListAppVersionResourceMappingsRequest>("ListAppVersionResourceMappingsRequest")({appArn: S.String, appVersion: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAppVersionResourcesRequest extends S.Class<ListAppVersionResourcesRequest>("ListAppVersionResourcesRequest")({appArn: S.String, appVersion: S.String, resolutionId: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAppVersionsRequest extends S.Class<ListAppVersionsRequest>("ListAppVersionsRequest")({appArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), startTime: S.optional(S.Date), endTime: S.optional(S.Date)}) {}
export class ListRecommendationTemplatesRequest extends S.Class<ListRecommendationTemplatesRequest>("ListRecommendationTemplatesRequest")({assessmentArn: S.optional(S.String), reverseOrder: S.optional(S.Boolean), status: S.optional(RecommendationTemplateStatusList), recommendationTemplateArn: S.optional(S.String), name: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListResiliencyPoliciesRequest extends S.Class<ListResiliencyPoliciesRequest>("ListResiliencyPoliciesRequest")({policyName: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListResourceGroupingRecommendationsRequest extends S.Class<ListResourceGroupingRecommendationsRequest>("ListResourceGroupingRecommendationsRequest")({appArn: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListSopRecommendationsRequest extends S.Class<ListSopRecommendationsRequest>("ListSopRecommendationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), assessmentArn: S.String}) {}
export class ListSuggestedResiliencyPoliciesRequest extends S.Class<ListSuggestedResiliencyPoliciesRequest>("ListSuggestedResiliencyPoliciesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ListTestRecommendationsRequest extends S.Class<ListTestRecommendationsRequest>("ListTestRecommendationsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), assessmentArn: S.String}) {}
export class ListUnsupportedAppVersionResourcesRequest extends S.Class<ListUnsupportedAppVersionResourcesRequest>("ListUnsupportedAppVersionResourcesRequest")({appArn: S.String, appVersion: S.String, resolutionId: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class PublishAppVersionRequest extends S.Class<PublishAppVersionRequest>("PublishAppVersionRequest")({appArn: S.String, versionName: S.optional(S.String)}) {}
export class PutDraftAppVersionTemplateRequest extends S.Class<PutDraftAppVersionTemplateRequest>("PutDraftAppVersionTemplateRequest")({appArn: S.String, appTemplateBody: S.String}) {}
export class RemoveDraftAppVersionResourceMappingsRequest extends S.Class<RemoveDraftAppVersionResourceMappingsRequest>("RemoveDraftAppVersionResourceMappingsRequest")({appArn: S.String, resourceNames: S.optional(EntityNameList), logicalStackNames: S.optional(String255List), appRegistryAppNames: S.optional(EntityNameList), resourceGroupNames: S.optional(EntityNameList), terraformSourceNames: S.optional(String255List), eksSourceNames: S.optional(String255List)}) {}
export class ResolveAppVersionResourcesRequest extends S.Class<ResolveAppVersionResourcesRequest>("ResolveAppVersionResourcesRequest")({appArn: S.String, appVersion: S.String}) {}
export class StartAppAssessmentRequest extends S.Class<StartAppAssessmentRequest>("StartAppAssessmentRequest")({appArn: S.String, appVersion: S.String, assessmentName: S.String, clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class StartMetricsExportRequest extends S.Class<StartMetricsExportRequest>("StartMetricsExportRequest")({bucketName: S.optional(S.String), clientToken: S.optional(S.String)}) {}
export class StartResourceGroupingRecommendationTaskRequest extends S.Class<StartResourceGroupingRecommendationTaskRequest>("StartResourceGroupingRecommendationTaskRequest")({appArn: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const IamRoleArnList = S.Array(S.String);
export class PermissionModel extends S.Class<PermissionModel>("PermissionModel")({type: S.String, invokerRoleName: S.optional(S.String), crossAccountRoleArns: S.optional(IamRoleArnList)}) {}
export class EventSubscription extends S.Class<EventSubscription>("EventSubscription")({name: S.String, eventType: S.String, snsTopicArn: S.optional(S.String)}) {}
export const EventSubscriptionList = S.Array(EventSubscription);
export class UpdateAppRequest extends S.Class<UpdateAppRequest>("UpdateAppRequest")({appArn: S.String, description: S.optional(S.String), policyArn: S.optional(S.String), clearResiliencyPolicyArn: S.optional(S.Boolean), assessmentSchedule: S.optional(S.String), permissionModel: S.optional(PermissionModel), eventSubscriptions: S.optional(EventSubscriptionList)}) {}
export const AdditionalInfoValueList = S.Array(S.String);
export const AdditionalInfoMap = S.Record({key: S.String, value: AdditionalInfoValueList});
export class UpdateAppVersionRequest extends S.Class<UpdateAppVersionRequest>("UpdateAppVersionRequest")({appArn: S.String, additionalInfo: S.optional(AdditionalInfoMap)}) {}
export class UpdateAppVersionAppComponentRequest extends S.Class<UpdateAppVersionAppComponentRequest>("UpdateAppVersionAppComponentRequest")({appArn: S.String, id: S.String, name: S.optional(S.String), type: S.optional(S.String), additionalInfo: S.optional(AdditionalInfoMap)}) {}
export class UpdateAppVersionResourceRequest extends S.Class<UpdateAppVersionResourceRequest>("UpdateAppVersionResourceRequest")({appArn: S.String, resourceName: S.optional(S.String), logicalResourceId: S.optional(LogicalResourceId), physicalResourceId: S.optional(S.String), awsRegion: S.optional(S.String), awsAccountId: S.optional(S.String), resourceType: S.optional(S.String), appComponents: S.optional(AppComponentNameList), additionalInfo: S.optional(AdditionalInfoMap), excluded: S.optional(S.Boolean)}) {}
export class FailurePolicy extends S.Class<FailurePolicy>("FailurePolicy")({rtoInSecs: S.Number, rpoInSecs: S.Number}) {}
export const DisruptionPolicy = S.Record({key: S.String, value: FailurePolicy});
export class UpdateResiliencyPolicyRequest extends S.Class<UpdateResiliencyPolicyRequest>("UpdateResiliencyPolicyRequest")({policyArn: S.String, policyName: S.optional(S.String), policyDescription: S.optional(S.String), dataLocationConstraint: S.optional(S.String), tier: S.optional(S.String), policy: S.optional(DisruptionPolicy)}) {}
export const EksNamespaceList = S.Array(S.String);
export class AcceptGroupingRecommendationEntry extends S.Class<AcceptGroupingRecommendationEntry>("AcceptGroupingRecommendationEntry")({groupingRecommendationId: S.String}) {}
export const AcceptGroupingRecommendationEntries = S.Array(AcceptGroupingRecommendationEntry);
export class EksSourceClusterNamespace extends S.Class<EksSourceClusterNamespace>("EksSourceClusterNamespace")({eksClusterArn: S.String, namespace: S.String}) {}
export class EksSource extends S.Class<EksSource>("EksSource")({eksClusterArn: S.String, namespaces: EksNamespaceList}) {}
export const EksSourceList = S.Array(EksSource);
export class AppComponent extends S.Class<AppComponent>("AppComponent")({name: S.String, type: S.String, id: S.optional(S.String), additionalInfo: S.optional(AdditionalInfoMap)}) {}
export const AppComponentList = S.Array(AppComponent);
export class PhysicalResourceId extends S.Class<PhysicalResourceId>("PhysicalResourceId")({identifier: S.String, type: S.String, awsRegion: S.optional(S.String), awsAccountId: S.optional(S.String)}) {}
export class PhysicalResource extends S.Class<PhysicalResource>("PhysicalResource")({resourceName: S.optional(S.String), logicalResourceId: LogicalResourceId, physicalResourceId: PhysicalResourceId, resourceType: S.String, appComponents: S.optional(AppComponentList), additionalInfo: S.optional(AdditionalInfoMap), excluded: S.optional(S.Boolean), sourceType: S.optional(S.String), parentResourceName: S.optional(S.String)}) {}
export const PhysicalResourceList = S.Array(PhysicalResource);
export class Field extends S.Class<Field>("Field")({name: S.String, aggregation: S.optional(S.String)}) {}
export const FieldList = S.Array(Field);
export class Condition extends S.Class<Condition>("Condition")({field: S.String, operator: S.String, value: S.optional(S.String)}) {}
export const ConditionList = S.Array(Condition);
export class Sort extends S.Class<Sort>("Sort")({field: S.String, ascending: S.optional(S.Boolean)}) {}
export const SortList = S.Array(Sort);
export class S3Location extends S.Class<S3Location>("S3Location")({bucket: S.optional(S.String), prefix: S.optional(S.String)}) {}
export class RecommendationTemplate extends S.Class<RecommendationTemplate>("RecommendationTemplate")({templatesLocation: S.optional(S3Location), assessmentArn: S.String, appArn: S.optional(S.String), recommendationIds: S.optional(RecommendationIdList), recommendationTypes: RenderRecommendationTypeList, format: S.String, recommendationTemplateArn: S.String, message: S.optional(S.String), status: S.String, name: S.String, startTime: S.optional(S.Date), endTime: S.optional(S.Date), tags: S.optional(TagMap), needsReplacements: S.optional(S.Boolean)}) {}
export const RecommendationTemplateList = S.Array(RecommendationTemplate);
export class ResiliencyPolicy extends S.Class<ResiliencyPolicy>("ResiliencyPolicy")({policyArn: S.optional(S.String), policyName: S.optional(S.String), policyDescription: S.optional(S.String), dataLocationConstraint: S.optional(S.String), tier: S.optional(S.String), estimatedCostTier: S.optional(S.String), policy: S.optional(DisruptionPolicy), creationTime: S.optional(S.Date), tags: S.optional(TagMap)}) {}
export const ResiliencyPolicies = S.Array(ResiliencyPolicy);
export class RejectGroupingRecommendationEntry extends S.Class<RejectGroupingRecommendationEntry>("RejectGroupingRecommendationEntry")({groupingRecommendationId: S.String, rejectionReason: S.optional(S.String)}) {}
export const RejectGroupingRecommendationEntries = S.Array(RejectGroupingRecommendationEntry);
export class AcceptResourceGroupingRecommendationsRequest extends S.Class<AcceptResourceGroupingRecommendationsRequest>("AcceptResourceGroupingRecommendationsRequest")({appArn: S.String, entries: AcceptGroupingRecommendationEntries}) {}
export class CreateAppRequest extends S.Class<CreateAppRequest>("CreateAppRequest")({name: S.String, description: S.optional(S.String), policyArn: S.optional(S.String), tags: S.optional(TagMap), clientToken: S.optional(S.String), assessmentSchedule: S.optional(S.String), permissionModel: S.optional(PermissionModel), eventSubscriptions: S.optional(EventSubscriptionList), awsApplicationArn: S.optional(S.String)}) {}
export class CreateAppVersionAppComponentRequest extends S.Class<CreateAppVersionAppComponentRequest>("CreateAppVersionAppComponentRequest")({appArn: S.String, id: S.optional(S.String), name: S.String, type: S.String, additionalInfo: S.optional(AdditionalInfoMap), clientToken: S.optional(S.String)}) {}
export class CreateAppVersionResourceRequest extends S.Class<CreateAppVersionResourceRequest>("CreateAppVersionResourceRequest")({appArn: S.String, resourceName: S.optional(S.String), logicalResourceId: LogicalResourceId, physicalResourceId: S.String, awsRegion: S.optional(S.String), awsAccountId: S.optional(S.String), resourceType: S.String, appComponents: AppComponentNameList, additionalInfo: S.optional(AdditionalInfoMap), clientToken: S.optional(S.String)}) {}
export class DeleteAppResponse extends S.Class<DeleteAppResponse>("DeleteAppResponse")({appArn: S.String}) {}
export class DeleteAppAssessmentResponse extends S.Class<DeleteAppAssessmentResponse>("DeleteAppAssessmentResponse")({assessmentArn: S.String, assessmentStatus: S.String}) {}
export class DeleteAppInputSourceRequest extends S.Class<DeleteAppInputSourceRequest>("DeleteAppInputSourceRequest")({appArn: S.String, sourceArn: S.optional(S.String), terraformSource: S.optional(TerraformSource), clientToken: S.optional(S.String), eksSourceClusterNamespace: S.optional(EksSourceClusterNamespace)}) {}
export class DeleteRecommendationTemplateResponse extends S.Class<DeleteRecommendationTemplateResponse>("DeleteRecommendationTemplateResponse")({recommendationTemplateArn: S.String, status: S.String}) {}
export class DeleteResiliencyPolicyResponse extends S.Class<DeleteResiliencyPolicyResponse>("DeleteResiliencyPolicyResponse")({policyArn: S.String}) {}
export class DescribeAppVersionResponse extends S.Class<DescribeAppVersionResponse>("DescribeAppVersionResponse")({appArn: S.String, appVersion: S.String, additionalInfo: S.optional(AdditionalInfoMap)}) {}
export class DescribeAppVersionAppComponentResponse extends S.Class<DescribeAppVersionAppComponentResponse>("DescribeAppVersionAppComponentResponse")({appArn: S.String, appVersion: S.String, appComponent: S.optional(AppComponent)}) {}
export class DescribeAppVersionResourceResponse extends S.Class<DescribeAppVersionResourceResponse>("DescribeAppVersionResourceResponse")({appArn: S.String, appVersion: S.String, physicalResource: S.optional(PhysicalResource)}) {}
export class DescribeAppVersionResourcesResolutionStatusResponse extends S.Class<DescribeAppVersionResourcesResolutionStatusResponse>("DescribeAppVersionResourcesResolutionStatusResponse")({appArn: S.String, appVersion: S.String, resolutionId: S.String, status: S.String, errorMessage: S.optional(S.String)}) {}
export class DescribeAppVersionTemplateResponse extends S.Class<DescribeAppVersionTemplateResponse>("DescribeAppVersionTemplateResponse")({appArn: S.String, appVersion: S.String, appTemplateBody: S.String}) {}
export class DescribeResourceGroupingRecommendationTaskResponse extends S.Class<DescribeResourceGroupingRecommendationTaskResponse>("DescribeResourceGroupingRecommendationTaskResponse")({groupingId: S.String, status: S.String, errorMessage: S.optional(S.String)}) {}
export class ImportResourcesToDraftAppVersionRequest extends S.Class<ImportResourcesToDraftAppVersionRequest>("ImportResourcesToDraftAppVersionRequest")({appArn: S.String, sourceArns: S.optional(ArnList), terraformSources: S.optional(TerraformSourceList), importStrategy: S.optional(S.String), eksSources: S.optional(EksSourceList)}) {}
export class ListAppVersionAppComponentsResponse extends S.Class<ListAppVersionAppComponentsResponse>("ListAppVersionAppComponentsResponse")({appArn: S.String, appVersion: S.String, appComponents: S.optional(AppComponentList), nextToken: S.optional(S.String)}) {}
export class ResourceMapping extends S.Class<ResourceMapping>("ResourceMapping")({resourceName: S.optional(S.String), logicalStackName: S.optional(S.String), appRegistryAppName: S.optional(S.String), resourceGroupName: S.optional(S.String), mappingType: S.String, physicalResourceId: PhysicalResourceId, terraformSourceName: S.optional(S.String), eksSourceName: S.optional(S.String)}) {}
export const ResourceMappingList = S.Array(ResourceMapping);
export class ListAppVersionResourceMappingsResponse extends S.Class<ListAppVersionResourceMappingsResponse>("ListAppVersionResourceMappingsResponse")({resourceMappings: ResourceMappingList, nextToken: S.optional(S.String)}) {}
export class ListAppVersionResourcesResponse extends S.Class<ListAppVersionResourcesResponse>("ListAppVersionResourcesResponse")({physicalResources: PhysicalResourceList, resolutionId: S.String, nextToken: S.optional(S.String)}) {}
export class ListMetricsRequest extends S.Class<ListMetricsRequest>("ListMetricsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), fields: S.optional(FieldList), dataSource: S.optional(S.String), conditions: S.optional(ConditionList), sorts: S.optional(SortList)}) {}
export class ListRecommendationTemplatesResponse extends S.Class<ListRecommendationTemplatesResponse>("ListRecommendationTemplatesResponse")({nextToken: S.optional(S.String), recommendationTemplates: S.optional(RecommendationTemplateList)}) {}
export class ListResiliencyPoliciesResponse extends S.Class<ListResiliencyPoliciesResponse>("ListResiliencyPoliciesResponse")({resiliencyPolicies: ResiliencyPolicies, nextToken: S.optional(S.String)}) {}
export class ListSuggestedResiliencyPoliciesResponse extends S.Class<ListSuggestedResiliencyPoliciesResponse>("ListSuggestedResiliencyPoliciesResponse")({resiliencyPolicies: ResiliencyPolicies, nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class PublishAppVersionResponse extends S.Class<PublishAppVersionResponse>("PublishAppVersionResponse")({appArn: S.String, appVersion: S.optional(S.String), identifier: S.optional(S.Number), versionName: S.optional(S.String)}) {}
export class PutDraftAppVersionTemplateResponse extends S.Class<PutDraftAppVersionTemplateResponse>("PutDraftAppVersionTemplateResponse")({appArn: S.optional(S.String), appVersion: S.optional(S.String)}) {}
export class RejectResourceGroupingRecommendationsRequest extends S.Class<RejectResourceGroupingRecommendationsRequest>("RejectResourceGroupingRecommendationsRequest")({appArn: S.String, entries: RejectGroupingRecommendationEntries}) {}
export class RemoveDraftAppVersionResourceMappingsResponse extends S.Class<RemoveDraftAppVersionResourceMappingsResponse>("RemoveDraftAppVersionResourceMappingsResponse")({appArn: S.optional(S.String), appVersion: S.optional(S.String)}) {}
export class ResolveAppVersionResourcesResponse extends S.Class<ResolveAppVersionResourcesResponse>("ResolveAppVersionResourcesResponse")({appArn: S.String, appVersion: S.String, resolutionId: S.String, status: S.String}) {}
export class Cost extends S.Class<Cost>("Cost")({amount: S.Number, currency: S.String, frequency: S.String}) {}
export const DisruptionResiliencyScore = S.Record({key: S.String, value: S.Number});
export class ScoringComponentResiliencyScore extends S.Class<ScoringComponentResiliencyScore>("ScoringComponentResiliencyScore")({score: S.optional(S.Number), possibleScore: S.optional(S.Number), outstandingCount: S.optional(S.Number), excludedCount: S.optional(S.Number)}) {}
export const ScoringComponentResiliencyScores = S.Record({key: S.String, value: ScoringComponentResiliencyScore});
export class ResiliencyScore extends S.Class<ResiliencyScore>("ResiliencyScore")({score: S.Number, disruptionScore: DisruptionResiliencyScore, componentScore: S.optional(ScoringComponentResiliencyScores)}) {}
export class DisruptionCompliance extends S.Class<DisruptionCompliance>("DisruptionCompliance")({achievableRtoInSecs: S.optional(S.Number), currentRtoInSecs: S.optional(S.Number), rtoReferenceId: S.optional(S.String), rtoDescription: S.optional(S.String), currentRpoInSecs: S.optional(S.Number), rpoReferenceId: S.optional(S.String), rpoDescription: S.optional(S.String), complianceStatus: S.String, achievableRpoInSecs: S.optional(S.Number), message: S.optional(S.String)}) {}
export const AssessmentCompliance = S.Record({key: S.String, value: DisruptionCompliance});
export class ResourceError extends S.Class<ResourceError>("ResourceError")({logicalResourceId: S.optional(S.String), physicalResourceId: S.optional(S.String), reason: S.optional(S.String)}) {}
export const ResourceErrorList = S.Array(ResourceError);
export class ResourceErrorsDetails extends S.Class<ResourceErrorsDetails>("ResourceErrorsDetails")({resourceErrors: S.optional(ResourceErrorList), hasMoreErrors: S.optional(S.Boolean)}) {}
export class AssessmentRiskRecommendation extends S.Class<AssessmentRiskRecommendation>("AssessmentRiskRecommendation")({risk: S.optional(S.String), recommendation: S.optional(S.String), appComponents: S.optional(AppComponentNameList)}) {}
export const AssessmentRiskRecommendationList = S.Array(AssessmentRiskRecommendation);
export class AssessmentSummary extends S.Class<AssessmentSummary>("AssessmentSummary")({summary: S.optional(S.String), riskRecommendations: S.optional(AssessmentRiskRecommendationList)}) {}
export class AppAssessment extends S.Class<AppAssessment>("AppAssessment")({appArn: S.optional(S.String), appVersion: S.optional(S.String), invoker: S.String, cost: S.optional(Cost), resiliencyScore: S.optional(ResiliencyScore), compliance: S.optional(AssessmentCompliance), complianceStatus: S.optional(S.String), assessmentStatus: S.String, startTime: S.optional(S.Date), endTime: S.optional(S.Date), message: S.optional(S.String), assessmentName: S.optional(S.String), assessmentArn: S.String, policy: S.optional(ResiliencyPolicy), tags: S.optional(TagMap), resourceErrorsDetails: S.optional(ResourceErrorsDetails), versionName: S.optional(S.String), driftStatus: S.optional(S.String), summary: S.optional(AssessmentSummary)}) {}
export class StartAppAssessmentResponse extends S.Class<StartAppAssessmentResponse>("StartAppAssessmentResponse")({assessment: AppAssessment}) {}
export class StartMetricsExportResponse extends S.Class<StartMetricsExportResponse>("StartMetricsExportResponse")({metricsExportId: S.String, status: S.String}) {}
export class StartResourceGroupingRecommendationTaskResponse extends S.Class<StartResourceGroupingRecommendationTaskResponse>("StartResourceGroupingRecommendationTaskResponse")({appArn: S.String, groupingId: S.String, status: S.String, errorMessage: S.optional(S.String)}) {}
export class App extends S.Class<App>("App")({appArn: S.String, name: S.String, description: S.optional(S.String), policyArn: S.optional(S.String), creationTime: S.Date, status: S.optional(S.String), complianceStatus: S.optional(S.String), lastAppComplianceEvaluationTime: S.optional(S.Date), resiliencyScore: S.optional(S.Number), lastResiliencyScoreEvaluationTime: S.optional(S.Date), tags: S.optional(TagMap), assessmentSchedule: S.optional(S.String), permissionModel: S.optional(PermissionModel), eventSubscriptions: S.optional(EventSubscriptionList), driftStatus: S.optional(S.String), lastDriftEvaluationTime: S.optional(S.Date), rtoInSecs: S.optional(S.Number), rpoInSecs: S.optional(S.Number), awsApplicationArn: S.optional(S.String)}) {}
export class UpdateAppResponse extends S.Class<UpdateAppResponse>("UpdateAppResponse")({app: App}) {}
export class UpdateAppVersionResponse extends S.Class<UpdateAppVersionResponse>("UpdateAppVersionResponse")({appArn: S.String, appVersion: S.String, additionalInfo: S.optional(AdditionalInfoMap)}) {}
export class UpdateAppVersionAppComponentResponse extends S.Class<UpdateAppVersionAppComponentResponse>("UpdateAppVersionAppComponentResponse")({appArn: S.String, appVersion: S.String, appComponent: S.optional(AppComponent)}) {}
export class UpdateAppVersionResourceResponse extends S.Class<UpdateAppVersionResourceResponse>("UpdateAppVersionResourceResponse")({appArn: S.String, appVersion: S.String, physicalResource: S.optional(PhysicalResource)}) {}
export class UpdateResiliencyPolicyResponse extends S.Class<UpdateResiliencyPolicyResponse>("UpdateResiliencyPolicyResponse")({policy: ResiliencyPolicy}) {}
export class UpdateRecommendationStatusItem extends S.Class<UpdateRecommendationStatusItem>("UpdateRecommendationStatusItem")({resourceId: S.optional(S.String), targetAccountId: S.optional(S.String), targetRegion: S.optional(S.String)}) {}
export const AlarmReferenceIdList = S.Array(S.String);
export class UpdateRecommendationStatusRequestEntry extends S.Class<UpdateRecommendationStatusRequestEntry>("UpdateRecommendationStatusRequestEntry")({entryId: S.String, referenceId: S.String, item: S.optional(UpdateRecommendationStatusItem), excluded: S.Boolean, appComponentId: S.optional(S.String), excludeReason: S.optional(S.String)}) {}
export const UpdateRecommendationStatusRequestEntries = S.Array(UpdateRecommendationStatusRequestEntry);
export class ErrorDetail extends S.Class<ErrorDetail>("ErrorDetail")({errorMessage: S.optional(S.String)}) {}
export const ErrorDetailList = S.Array(ErrorDetail);
export class ComplianceDrift extends S.Class<ComplianceDrift>("ComplianceDrift")({entityId: S.optional(S.String), entityType: S.optional(S.String), driftType: S.optional(S.String), appId: S.optional(S.String), appVersion: S.optional(S.String), expectedReferenceId: S.optional(S.String), expectedValue: S.optional(AssessmentCompliance), actualReferenceId: S.optional(S.String), actualValue: S.optional(AssessmentCompliance), diffType: S.optional(S.String)}) {}
export const ComplianceDriftList = S.Array(ComplianceDrift);
export class AppAssessmentSummary extends S.Class<AppAssessmentSummary>("AppAssessmentSummary")({appArn: S.optional(S.String), appVersion: S.optional(S.String), assessmentStatus: S.String, invoker: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), message: S.optional(S.String), assessmentName: S.optional(S.String), assessmentArn: S.String, complianceStatus: S.optional(S.String), cost: S.optional(Cost), resiliencyScore: S.optional(S.Number), versionName: S.optional(S.String), driftStatus: S.optional(S.String)}) {}
export const AppAssessmentSummaryList = S.Array(AppAssessmentSummary);
export class AppComponentCompliance extends S.Class<AppComponentCompliance>("AppComponentCompliance")({cost: S.optional(Cost), appComponentName: S.optional(S.String), compliance: S.optional(AssessmentCompliance), message: S.optional(S.String), status: S.optional(S.String), resiliencyScore: S.optional(ResiliencyScore)}) {}
export const ComponentCompliancesList = S.Array(AppComponentCompliance);
export class AppInputSource extends S.Class<AppInputSource>("AppInputSource")({sourceName: S.optional(S.String), importType: S.String, sourceArn: S.optional(S.String), terraformSource: S.optional(TerraformSource), resourceCount: S.optional(S.Number), eksSourceClusterNamespace: S.optional(EksSourceClusterNamespace)}) {}
export const AppInputSourceList = S.Array(AppInputSource);
export class AppSummary extends S.Class<AppSummary>("AppSummary")({appArn: S.String, name: S.String, description: S.optional(S.String), creationTime: S.Date, complianceStatus: S.optional(S.String), resiliencyScore: S.optional(S.Number), assessmentSchedule: S.optional(S.String), status: S.optional(S.String), driftStatus: S.optional(S.String), lastAppComplianceEvaluationTime: S.optional(S.Date), rtoInSecs: S.optional(S.Number), rpoInSecs: S.optional(S.Number), awsApplicationArn: S.optional(S.String)}) {}
export const AppSummaryList = S.Array(AppSummary);
export class AppVersionSummary extends S.Class<AppVersionSummary>("AppVersionSummary")({appVersion: S.String, identifier: S.optional(S.Number), creationTime: S.optional(S.Date), versionName: S.optional(S.String)}) {}
export const AppVersionList = S.Array(AppVersionSummary);
export const Row = S.Array(S.String);
export const RowList = S.Array(Row);
export class Experiment extends S.Class<Experiment>("Experiment")({experimentArn: S.optional(S.String), experimentTemplateId: S.optional(S.String)}) {}
export class Alarm extends S.Class<Alarm>("Alarm")({alarmArn: S.optional(S.String), source: S.optional(S.String)}) {}
export class RecommendationItem extends S.Class<RecommendationItem>("RecommendationItem")({resourceId: S.optional(S.String), targetAccountId: S.optional(S.String), targetRegion: S.optional(S.String), alreadyImplemented: S.optional(S.Boolean), excluded: S.optional(S.Boolean), excludeReason: S.optional(S.String), latestDiscoveredExperiment: S.optional(Experiment), discoveredAlarm: S.optional(Alarm)}) {}
export const RecommendationItemList = S.Array(RecommendationItem);
export class SopRecommendation extends S.Class<SopRecommendation>("SopRecommendation")({serviceType: S.String, appComponentName: S.optional(S.String), description: S.optional(S.String), recommendationId: S.String, name: S.optional(S.String), items: S.optional(RecommendationItemList), referenceId: S.String, prerequisite: S.optional(S.String), recommendationStatus: S.optional(S.String)}) {}
export const SopRecommendationList = S.Array(SopRecommendation);
export class TestRecommendation extends S.Class<TestRecommendation>("TestRecommendation")({recommendationId: S.optional(S.String), referenceId: S.String, appComponentId: S.optional(S.String), appComponentName: S.optional(S.String), name: S.optional(S.String), intent: S.optional(S.String), risk: S.optional(S.String), type: S.optional(S.String), description: S.optional(S.String), items: S.optional(RecommendationItemList), prerequisite: S.optional(S.String), dependsOnAlarms: S.optional(AlarmReferenceIdList), recommendationStatus: S.optional(S.String)}) {}
export const TestRecommendationList = S.Array(TestRecommendation);
export class UnsupportedResource extends S.Class<UnsupportedResource>("UnsupportedResource")({logicalResourceId: LogicalResourceId, physicalResourceId: PhysicalResourceId, resourceType: S.String, unsupportedResourceStatus: S.optional(S.String)}) {}
export const UnsupportedResourceList = S.Array(UnsupportedResource);
export const SuggestedChangesList = S.Array(S.String);
export class AddDraftAppVersionResourceMappingsRequest extends S.Class<AddDraftAppVersionResourceMappingsRequest>("AddDraftAppVersionResourceMappingsRequest")({appArn: S.String, resourceMappings: ResourceMappingList}) {}
export class BatchUpdateRecommendationStatusRequest extends S.Class<BatchUpdateRecommendationStatusRequest>("BatchUpdateRecommendationStatusRequest")({appArn: S.String, requestEntries: UpdateRecommendationStatusRequestEntries}) {}
export class CreateAppResponse extends S.Class<CreateAppResponse>("CreateAppResponse")({app: App}) {}
export class CreateAppVersionAppComponentResponse extends S.Class<CreateAppVersionAppComponentResponse>("CreateAppVersionAppComponentResponse")({appArn: S.String, appVersion: S.String, appComponent: S.optional(AppComponent)}) {}
export class CreateAppVersionResourceResponse extends S.Class<CreateAppVersionResourceResponse>("CreateAppVersionResourceResponse")({appArn: S.String, appVersion: S.String, physicalResource: S.optional(PhysicalResource)}) {}
export class CreateRecommendationTemplateResponse extends S.Class<CreateRecommendationTemplateResponse>("CreateRecommendationTemplateResponse")({recommendationTemplate: S.optional(RecommendationTemplate)}) {}
export class CreateResiliencyPolicyRequest extends S.Class<CreateResiliencyPolicyRequest>("CreateResiliencyPolicyRequest")({policyName: S.String, policyDescription: S.optional(S.String), dataLocationConstraint: S.optional(S.String), tier: S.String, policy: DisruptionPolicy, clientToken: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class DeleteAppInputSourceResponse extends S.Class<DeleteAppInputSourceResponse>("DeleteAppInputSourceResponse")({appArn: S.optional(S.String), appInputSource: S.optional(AppInputSource)}) {}
export class DeleteAppVersionAppComponentResponse extends S.Class<DeleteAppVersionAppComponentResponse>("DeleteAppVersionAppComponentResponse")({appArn: S.String, appVersion: S.String, appComponent: S.optional(AppComponent)}) {}
export class DeleteAppVersionResourceResponse extends S.Class<DeleteAppVersionResourceResponse>("DeleteAppVersionResourceResponse")({appArn: S.String, appVersion: S.String, physicalResource: S.optional(PhysicalResource)}) {}
export class DescribeAppResponse extends S.Class<DescribeAppResponse>("DescribeAppResponse")({app: App}) {}
export class DescribeDraftAppVersionResourcesImportStatusResponse extends S.Class<DescribeDraftAppVersionResourcesImportStatusResponse>("DescribeDraftAppVersionResourcesImportStatusResponse")({appArn: S.String, appVersion: S.String, status: S.String, statusChangeTime: S.Date, errorMessage: S.optional(S.String), errorDetails: S.optional(ErrorDetailList)}) {}
export class DescribeMetricsExportResponse extends S.Class<DescribeMetricsExportResponse>("DescribeMetricsExportResponse")({metricsExportId: S.String, status: S.String, exportLocation: S.optional(S3Location), errorMessage: S.optional(S.String)}) {}
export class DescribeResiliencyPolicyResponse extends S.Class<DescribeResiliencyPolicyResponse>("DescribeResiliencyPolicyResponse")({policy: ResiliencyPolicy}) {}
export class ImportResourcesToDraftAppVersionResponse extends S.Class<ImportResourcesToDraftAppVersionResponse>("ImportResourcesToDraftAppVersionResponse")({appArn: S.String, appVersion: S.String, sourceArns: S.optional(ArnList), status: S.String, terraformSources: S.optional(TerraformSourceList), eksSources: S.optional(EksSourceList)}) {}
export class ListAppAssessmentComplianceDriftsResponse extends S.Class<ListAppAssessmentComplianceDriftsResponse>("ListAppAssessmentComplianceDriftsResponse")({complianceDrifts: ComplianceDriftList, nextToken: S.optional(S.String)}) {}
export class ListAppAssessmentsResponse extends S.Class<ListAppAssessmentsResponse>("ListAppAssessmentsResponse")({nextToken: S.optional(S.String), assessmentSummaries: AppAssessmentSummaryList}) {}
export class ListAppComponentCompliancesResponse extends S.Class<ListAppComponentCompliancesResponse>("ListAppComponentCompliancesResponse")({componentCompliances: ComponentCompliancesList, nextToken: S.optional(S.String)}) {}
export class ListAppInputSourcesResponse extends S.Class<ListAppInputSourcesResponse>("ListAppInputSourcesResponse")({appInputSources: AppInputSourceList, nextToken: S.optional(S.String)}) {}
export class ListAppsResponse extends S.Class<ListAppsResponse>("ListAppsResponse")({appSummaries: AppSummaryList, nextToken: S.optional(S.String)}) {}
export class ListAppVersionsResponse extends S.Class<ListAppVersionsResponse>("ListAppVersionsResponse")({appVersions: AppVersionList, nextToken: S.optional(S.String)}) {}
export class ListMetricsResponse extends S.Class<ListMetricsResponse>("ListMetricsResponse")({rows: RowList, nextToken: S.optional(S.String)}) {}
export class ListSopRecommendationsResponse extends S.Class<ListSopRecommendationsResponse>("ListSopRecommendationsResponse")({nextToken: S.optional(S.String), sopRecommendations: SopRecommendationList}) {}
export class ListTestRecommendationsResponse extends S.Class<ListTestRecommendationsResponse>("ListTestRecommendationsResponse")({nextToken: S.optional(S.String), testRecommendations: TestRecommendationList}) {}
export class ListUnsupportedAppVersionResourcesResponse extends S.Class<ListUnsupportedAppVersionResourcesResponse>("ListUnsupportedAppVersionResourcesResponse")({unsupportedResources: UnsupportedResourceList, resolutionId: S.String, nextToken: S.optional(S.String)}) {}
export class FailedGroupingRecommendationEntry extends S.Class<FailedGroupingRecommendationEntry>("FailedGroupingRecommendationEntry")({groupingRecommendationId: S.String, errorMessage: S.String}) {}
export const FailedGroupingRecommendationEntries = S.Array(FailedGroupingRecommendationEntry);
export class RejectResourceGroupingRecommendationsResponse extends S.Class<RejectResourceGroupingRecommendationsResponse>("RejectResourceGroupingRecommendationsResponse")({appArn: S.String, failedEntries: FailedGroupingRecommendationEntries}) {}
export class ResourceIdentifier extends S.Class<ResourceIdentifier>("ResourceIdentifier")({logicalResourceId: S.optional(LogicalResourceId), resourceType: S.optional(S.String)}) {}
export class GroupingAppComponent extends S.Class<GroupingAppComponent>("GroupingAppComponent")({appComponentId: S.String, appComponentType: S.String, appComponentName: S.String}) {}
export class GroupingResource extends S.Class<GroupingResource>("GroupingResource")({resourceName: S.String, resourceType: S.String, physicalResourceId: PhysicalResourceId, logicalResourceId: LogicalResourceId, sourceAppComponentIds: String255List}) {}
export const GroupingResourceList = S.Array(GroupingResource);
export class ResourceDrift extends S.Class<ResourceDrift>("ResourceDrift")({appArn: S.optional(S.String), appVersion: S.optional(S.String), referenceId: S.optional(S.String), resourceIdentifier: S.optional(ResourceIdentifier), diffType: S.optional(S.String)}) {}
export const ResourceDriftList = S.Array(ResourceDrift);
export class GroupingRecommendation extends S.Class<GroupingRecommendation>("GroupingRecommendation")({groupingRecommendationId: S.String, groupingAppComponent: GroupingAppComponent, resources: GroupingResourceList, score: S.Number, recommendationReasons: String255List, status: S.String, confidenceLevel: S.String, creationTime: S.Date, rejectionReason: S.optional(S.String)}) {}
export const GroupingRecommendationList = S.Array(GroupingRecommendation);
export class AcceptResourceGroupingRecommendationsResponse extends S.Class<AcceptResourceGroupingRecommendationsResponse>("AcceptResourceGroupingRecommendationsResponse")({appArn: S.String, failedEntries: FailedGroupingRecommendationEntries}) {}
export class AddDraftAppVersionResourceMappingsResponse extends S.Class<AddDraftAppVersionResourceMappingsResponse>("AddDraftAppVersionResourceMappingsResponse")({appArn: S.String, appVersion: S.String, resourceMappings: ResourceMappingList}) {}
export class CreateResiliencyPolicyResponse extends S.Class<CreateResiliencyPolicyResponse>("CreateResiliencyPolicyResponse")({policy: ResiliencyPolicy}) {}
export class ListAppAssessmentResourceDriftsResponse extends S.Class<ListAppAssessmentResourceDriftsResponse>("ListAppAssessmentResourceDriftsResponse")({resourceDrifts: ResourceDriftList, nextToken: S.optional(S.String)}) {}
export class ListResourceGroupingRecommendationsResponse extends S.Class<ListResourceGroupingRecommendationsResponse>("ListResourceGroupingRecommendationsResponse")({groupingRecommendations: GroupingRecommendationList, nextToken: S.optional(S.String)}) {}
export class RecommendationDisruptionCompliance extends S.Class<RecommendationDisruptionCompliance>("RecommendationDisruptionCompliance")({expectedComplianceStatus: S.String, expectedRtoInSecs: S.optional(S.Number), expectedRtoDescription: S.optional(S.String), expectedRpoInSecs: S.optional(S.Number), expectedRpoDescription: S.optional(S.String)}) {}
export class BatchUpdateRecommendationStatusSuccessfulEntry extends S.Class<BatchUpdateRecommendationStatusSuccessfulEntry>("BatchUpdateRecommendationStatusSuccessfulEntry")({entryId: S.String, referenceId: S.String, item: S.optional(UpdateRecommendationStatusItem), excluded: S.Boolean, appComponentId: S.optional(S.String), excludeReason: S.optional(S.String)}) {}
export const BatchUpdateRecommendationStatusSuccessfulEntries = S.Array(BatchUpdateRecommendationStatusSuccessfulEntry);
export class BatchUpdateRecommendationStatusFailedEntry extends S.Class<BatchUpdateRecommendationStatusFailedEntry>("BatchUpdateRecommendationStatusFailedEntry")({entryId: S.String, errorMessage: S.String}) {}
export const BatchUpdateRecommendationStatusFailedEntries = S.Array(BatchUpdateRecommendationStatusFailedEntry);
export class AlarmRecommendation extends S.Class<AlarmRecommendation>("AlarmRecommendation")({recommendationId: S.String, referenceId: S.String, name: S.String, description: S.optional(S.String), type: S.String, appComponentName: S.optional(S.String), items: S.optional(RecommendationItemList), prerequisite: S.optional(S.String), appComponentNames: S.optional(AppComponentNameList), recommendationStatus: S.optional(S.String)}) {}
export const AlarmRecommendationList = S.Array(AlarmRecommendation);
export const RecommendationCompliance = S.Record({key: S.String, value: RecommendationDisruptionCompliance});
export class BatchUpdateRecommendationStatusResponse extends S.Class<BatchUpdateRecommendationStatusResponse>("BatchUpdateRecommendationStatusResponse")({appArn: S.String, successfulEntries: BatchUpdateRecommendationStatusSuccessfulEntries, failedEntries: BatchUpdateRecommendationStatusFailedEntries}) {}
export class ListAlarmRecommendationsResponse extends S.Class<ListAlarmRecommendationsResponse>("ListAlarmRecommendationsResponse")({alarmRecommendations: AlarmRecommendationList, nextToken: S.optional(S.String)}) {}
export class ConfigRecommendation extends S.Class<ConfigRecommendation>("ConfigRecommendation")({cost: S.optional(Cost), appComponentName: S.optional(S.String), compliance: S.optional(AssessmentCompliance), recommendationCompliance: S.optional(RecommendationCompliance), optimizationType: S.String, name: S.String, description: S.optional(S.String), suggestedChanges: S.optional(SuggestedChangesList), haArchitecture: S.optional(S.String), referenceId: S.String}) {}
export const ConfigRecommendationList = S.Array(ConfigRecommendation);
export class ComponentRecommendation extends S.Class<ComponentRecommendation>("ComponentRecommendation")({appComponentName: S.String, recommendationStatus: S.String, configRecommendations: ConfigRecommendationList}) {}
export const ComponentRecommendationList = S.Array(ComponentRecommendation);
export class DescribeAppAssessmentResponse extends S.Class<DescribeAppAssessmentResponse>("DescribeAppAssessmentResponse")({assessment: AppAssessment}) {}
export class ListAppComponentRecommendationsResponse extends S.Class<ListAppComponentRecommendationsResponse>("ListAppComponentRecommendationsResponse")({componentRecommendations: ComponentRecommendationList, nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Describes the Resilience Hub application version.
 */export const describeAppVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-app-version", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeAppVersion" }, DescribeAppVersionRequest, DescribeAppVersionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes an Application Component in the Resilience Hub application.
 */export const describeAppVersionAppComponent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-app-version-app-component", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeAppVersionAppComponent" }, DescribeAppVersionAppComponentRequest, DescribeAppVersionAppComponentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a resource of the Resilience Hub application.
 * 
 * This API accepts only one of the following parameters to describe the resource:
 * 
 * - `resourceName`
 * 
 * - `logicalResourceId`
 * 
 * - `physicalResourceId` (Along with `physicalResourceId`, you can
 * also provide `awsAccountId`, and `awsRegion`)
 */export const describeAppVersionResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-app-version-resource", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeAppVersionResource" }, DescribeAppVersionResourceRequest, DescribeAppVersionResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the resolution status for the specified resolution identifier for an application
 * version. If `resolutionId` is not specified, the current resolution status is
 * returned.
 */export const describeAppVersionResourcesResolutionStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-app-version-resources-resolution-status", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeAppVersionResourcesResolutionStatus" }, DescribeAppVersionResourcesResolutionStatusRequest, DescribeAppVersionResourcesResolutionStatusResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes details about an Resilience Hub application.
 */export const describeAppVersionTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-app-version-template", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeAppVersionTemplate" }, DescribeAppVersionTemplateRequest, DescribeAppVersionTemplateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the resource grouping recommendation tasks run by Resilience Hub for your application.
 */export const describeResourceGroupingRecommendationTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-resource-grouping-recommendation-task", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeResourceGroupingRecommendationTask" }, DescribeResourceGroupingRecommendationTaskRequest, DescribeResourceGroupingRecommendationTaskResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the Application Components in the Resilience Hub application.
 */export const listAppVersionAppComponents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-version-app-components", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppVersionAppComponents" }, ListAppVersionAppComponentsRequest, ListAppVersionAppComponentsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists how the resources in an application version are mapped/sourced from. Mappings can be
 * physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry
 * app.
 */export const listAppVersionResourceMappings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-version-resource-mappings", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppVersionResourceMappings" }, ListAppVersionResourceMappingsRequest, ListAppVersionResourceMappingsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the resources in an Resilience Hub application.
 */export const listAppVersionResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-version-resources", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppVersionResources" }, ListAppVersionResourcesRequest, ListAppVersionResourcesResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the recommendation templates for the Resilience Hub applications.
 */export const listRecommendationTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-recommendation-templates", method: "GET", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListRecommendationTemplates" }, ListRecommendationTemplatesRequest, ListRecommendationTemplatesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the resiliency policies for the Resilience Hub applications.
 */export const listResiliencyPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-resiliency-policies", method: "GET", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListResiliencyPolicies" }, ListResiliencyPoliciesRequest, ListResiliencyPoliciesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the suggested resiliency policies for the Resilience Hub
 * applications.
 */export const listSuggestedResiliencyPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-suggested-resiliency-policies", method: "GET", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListSuggestedResiliencyPolicies" }, ListSuggestedResiliencyPoliciesRequest, ListSuggestedResiliencyPoliciesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for your resources in your Resilience Hub applications.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/tags/{resourceArn}", method: "GET", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Publishes a new version of a specific Resilience Hub application.
 */export const publishAppVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/publish-app-version", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.PublishAppVersion" }, PublishAppVersionRequest, PublishAppVersionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates the app template for an Resilience Hub application draft
 * version.
 */export const putDraftAppVersionTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/put-draft-app-version-template", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.PutDraftAppVersionTemplate" }, PutDraftAppVersionTemplateRequest, PutDraftAppVersionTemplateResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes resource mappings from a draft application version.
 */export const removeDraftAppVersionResourceMappings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/remove-draft-app-version-resource-mappings", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.RemoveDraftAppVersionResourceMappings" }, RemoveDraftAppVersionResourceMappingsRequest, RemoveDraftAppVersionResourceMappingsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Resolves the resources for an application version.
 */export const resolveAppVersionResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/resolve-app-version-resources", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ResolveAppVersionResources" }, ResolveAppVersionResourcesRequest, ResolveAppVersionResourcesResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates the export task of metrics.
 */export const startMetricsExport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/start-metrics-export", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.StartMetricsExport" }, StartMetricsExportRequest, StartMetricsExportResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts grouping recommendation task.
 */export const startResourceGroupingRecommendationTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/start-resource-grouping-recommendation-task", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.StartResourceGroupingRecommendationTask" }, StartResourceGroupingRecommendationTaskRequest, StartResourceGroupingRecommendationTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies one or more tags to a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/tags/{resourceArn}", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an application.
 */export const updateApp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/update-app", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.UpdateApp" }, UpdateAppRequest, UpdateAppResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the Resilience Hub application version.
 * 
 * This API updates the Resilience Hub application draft version. To use this
 * information for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */export const updateAppVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/update-app-version", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.UpdateAppVersion" }, UpdateAppVersionRequest, UpdateAppVersionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing Application Component in the Resilience Hub application.
 * 
 * This API updates the Resilience Hub application draft version. To use this
 * Application Component for running assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */export const updateAppVersionAppComponent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/update-app-version-app-component", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.UpdateAppVersionAppComponent" }, UpdateAppVersionAppComponentRequest, UpdateAppVersionAppComponentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the resource details in the Resilience Hub application.
 * 
 * - This action has no effect outside Resilience Hub.
 * 
 * - This API updates the Resilience Hub application draft version. To use this
 * resource for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 * 
 * - To update application version with new `physicalResourceID`, you must
 * call `ResolveAppVersionResources` API.
 */export const updateAppVersionResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/update-app-version-resource", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.UpdateAppVersionResource" }, UpdateAppVersionResourceRequest, UpdateAppVersionResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a resiliency policy.
 * 
 * Resilience Hub allows you to provide a value of zero for `rtoInSecs`
 * and `rpoInSecs` of your resiliency policy. But, while assessing your application,
 * the lowest possible assessment result is near zero. Hence, if you provide value zero for
 * `rtoInSecs` and `rpoInSecs`, the estimated workload RTO and
 * estimated workload RPO result will be near zero and the Compliance
 * status for your application will be set to Policy
 * breached.
 */export const updateResiliencyPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/update-resiliency-policy", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.UpdateResiliencyPolicy" }, UpdateResiliencyPolicyRequest, UpdateResiliencyPolicyResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Resilience Hub application. An Resilience Hub application is a
 * collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an
 * application name, resources from one or more CloudFormation stacks, Resource Groups, Terraform state files, AppRegistry applications, and an appropriate
 * resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information
 * about the number of resources supported per application, see Service
 * quotas.
 * 
 * After you create an Resilience Hub application, you publish it so that you can run
 * a resiliency assessment on it. You can then use recommendations from the assessment to improve
 * resiliency by running another assessment, comparing results, and then iterating the process
 * until you achieve your goals for recovery time objective (RTO) and recovery point objective
 * (RPO).
 */export const createApp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/create-app", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.CreateApp" }, CreateAppRequest, CreateAppResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new Application Component in the Resilience Hub application.
 * 
 * This API updates the Resilience Hub application draft version. To use this
 * Application Component for running assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */export const createAppVersionAppComponent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/create-app-version-app-component", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.CreateAppVersionAppComponent" }, CreateAppVersionAppComponentRequest, CreateAppVersionAppComponentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a resource to the Resilience Hub application and assigns it to the specified
 * Application Components. If you specify a new Application Component, Resilience Hub will
 * automatically create the Application Component.
 * 
 * - This action has no effect outside Resilience Hub.
 * 
 * - This API updates the Resilience Hub application draft version. To use this
 * resource for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 * 
 * - To update application version with new `physicalResourceID`, you must
 * call `ResolveAppVersionResources` API.
 */export const createAppVersionResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/create-app-version-resource", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.CreateAppVersionResource" }, CreateAppVersionResourceRequest, CreateAppVersionResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new recommendation template for the Resilience Hub application.
 */export const createRecommendationTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/create-recommendation-template", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.CreateRecommendationTemplate" }, CreateRecommendationTemplateRequest, CreateRecommendationTemplateResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Resilience Hub application. This is a destructive action that can't be
 * undone.
 */export const deleteApp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/delete-app", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DeleteApp" }, DeleteAppRequest, DeleteAppResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Resilience Hub application assessment. This is a destructive action
 * that can't be undone.
 */export const deleteAppAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/delete-app-assessment", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DeleteAppAssessment" }, DeleteAppAssessmentRequest, DeleteAppAssessmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the input source and all of its imported resources from the Resilience Hub
 * application.
 */export const deleteAppInputSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/delete-app-input-source", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DeleteAppInputSource" }, DeleteAppInputSourceRequest, DeleteAppInputSourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Application Component from the Resilience Hub application.
 * 
 * - This API updates the Resilience Hub application draft version. To use this
 * Application Component for running assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 * 
 * - You will not be able to delete an Application Component if it has resources associated
 * with it.
 */export const deleteAppVersionAppComponent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/delete-app-version-app-component", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DeleteAppVersionAppComponent" }, DeleteAppVersionAppComponentRequest, DeleteAppVersionAppComponentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a resource from the Resilience Hub application.
 * 
 * - You can only delete a manually added resource. To exclude non-manually added
 * resources, use the `UpdateAppVersionResource` API.
 * 
 * - This action has no effect outside Resilience Hub.
 * 
 * - This API updates the Resilience Hub application draft version. To use this
 * resource for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */export const deleteAppVersionResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/delete-app-version-resource", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DeleteAppVersionResource" }, DeleteAppVersionResourceRequest, DeleteAppVersionResourceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a recommendation template. This is a destructive action that can't be
 * undone.
 */export const deleteRecommendationTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/delete-recommendation-template", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DeleteRecommendationTemplate" }, DeleteRecommendationTemplateRequest, DeleteRecommendationTemplateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a resiliency policy. This is a destructive action that can't be undone.
 */export const deleteResiliencyPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/delete-resiliency-policy", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DeleteResiliencyPolicy" }, DeleteResiliencyPolicyRequest, DeleteResiliencyPolicyResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes an Resilience Hub application.
 */export const describeApp = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-app", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeApp" }, DescribeAppRequest, DescribeAppResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the status of importing resources to an application version.
 * 
 * If you get a 404 error with
 * `ResourceImportStatusNotFoundAppMetadataException`, you must call
 * `importResourcesToDraftAppVersion` after creating the application and before
 * calling `describeDraftAppVersionResourcesImportStatus` to obtain the
 * status.
 */export const describeDraftAppVersionResourcesImportStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-draft-app-version-resources-import-status", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeDraftAppVersionResourcesImportStatus" }, DescribeDraftAppVersionResourcesImportStatusRequest, DescribeDraftAppVersionResourcesImportStatusResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the metrics of the application configuration being exported.
 */export const describeMetricsExport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-metrics-export", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeMetricsExport" }, DescribeMetricsExportRequest, DescribeMetricsExportResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a specified resiliency policy for an Resilience Hub application. The
 * returned policy object includes creation time, data location constraints, the Amazon Resource
 * Name (ARN) for the policy, tags, tier, and more.
 */export const describeResiliencyPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-resiliency-policy", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeResiliencyPolicy" }, DescribeResiliencyPolicyRequest, DescribeResiliencyPolicyResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Imports resources to Resilience Hub application draft version from different input
 * sources. For more information about the input sources supported by Resilience Hub, see
 * Discover the structure and describe your Resilience Hub application.
 */export const importResourcesToDraftAppVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/import-resources-to-draft-app-version", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ImportResourcesToDraftAppVersion" }, ImportResourcesToDraftAppVersionRequest, ImportResourcesToDraftAppVersionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List of compliance drifts that were detected while running an
 * assessment.
 */export const listAppAssessmentComplianceDrifts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-assessment-compliance-drifts", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppAssessmentComplianceDrifts" }, ListAppAssessmentComplianceDriftsRequest, ListAppAssessmentComplianceDriftsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the assessments for an Resilience Hub application. You can use request
 * parameters to refine the results for the response object.
 */export const listAppAssessments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-assessments", method: "GET", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppAssessments" }, ListAppAssessmentsRequest, ListAppAssessmentsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the compliances for an Resilience Hub Application Component.
 */export const listAppComponentCompliances = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-component-compliances", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppComponentCompliances" }, ListAppComponentCompliancesRequest, ListAppComponentCompliancesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the input sources of the Resilience Hub application. For more
 * information about the input sources supported by Resilience Hub, see Discover
 * the structure and describe your Resilience Hub application.
 */export const listAppInputSources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-input-sources", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppInputSources" }, ListAppInputSourcesRequest, ListAppInputSourcesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your Resilience Hub applications.
 * 
 * You can filter applications using only one filter at a time or without using any filter.
 * If you try to filter applications using multiple filters, you will get the following
 * error:
 * 
 * An error occurred (ValidationException) when calling the ListApps operation: Only
 * one filter is supported for this operation.
 */export const listApps = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-apps", method: "GET", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListApps" }, ListAppsRequest, ListAppsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the different versions for the Resilience Hub applications.
 */export const listAppVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-versions", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppVersions" }, ListAppVersionsRequest, ListAppVersionsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the metrics that can be exported.
 */export const listMetrics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-metrics", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListMetrics" }, ListMetricsRequest, ListMetricsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
 */export const listSopRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-sop-recommendations", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListSopRecommendations" }, ListSopRecommendationsRequest, ListSopRecommendationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the test recommendations for the Resilience Hub application.
 */export const listTestRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-test-recommendations", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListTestRecommendations" }, ListTestRecommendationsRequest, ListTestRecommendationsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the resources that are not currently supported in Resilience Hub. An
 * unsupported resource is a resource that exists in the object that was used to create an app,
 * but is not supported by Resilience Hub.
 */export const listUnsupportedAppVersionResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-unsupported-app-version-resources", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListUnsupportedAppVersionResources" }, ListUnsupportedAppVersionResourcesRequest, ListUnsupportedAppVersionResourcesResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rejects resource grouping recommendations.
 */export const rejectResourceGroupingRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/reject-resource-grouping-recommendations", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.RejectResourceGroupingRecommendations" }, RejectResourceGroupingRecommendationsRequest, RejectResourceGroupingRecommendationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new application assessment for an application.
 */export const startAppAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/start-app-assessment", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.StartAppAssessment" }, StartAppAssessmentRequest, StartAppAssessmentResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Accepts the resource grouping recommendations suggested by Resilience Hub for your application.
 */export const acceptResourceGroupingRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/accept-resource-grouping-recommendations", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.AcceptResourceGroupingRecommendations" }, AcceptResourceGroupingRecommendationsRequest, AcceptResourceGroupingRecommendationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the source of resource-maps to the draft version of an application. During
 * assessment, Resilience Hub will use these resource-maps to resolve the latest physical
 * ID for each resource in the application template. For more information about different types
 * of resources supported by Resilience Hub and how to add them in your application, see
 * Step
 * 2: How is your application managed? in the Resilience Hub User Guide.
 */export const addDraftAppVersionResourceMappings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/add-draft-app-version-resource-mappings", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.AddDraftAppVersionResourceMappings" }, AddDraftAppVersionResourceMappingsRequest, AddDraftAppVersionResourceMappingsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a resiliency policy for an application.
 * 
 * Resilience Hub allows you to provide a value of zero for `rtoInSecs`
 * and `rpoInSecs` of your resiliency policy. But, while assessing your application,
 * the lowest possible assessment result is near zero. Hence, if you provide value zero for
 * `rtoInSecs` and `rpoInSecs`, the estimated workload RTO and
 * estimated workload RPO result will be near zero and the Compliance
 * status for your application will be set to Policy
 * breached.
 */export const createResiliencyPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/create-resiliency-policy", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.CreateResiliencyPolicy" }, CreateResiliencyPolicyRequest, CreateResiliencyPolicyResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List of resource drifts that were detected while running an
 * assessment.
 */export const listAppAssessmentResourceDrifts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-assessment-resource-drifts", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppAssessmentResourceDrifts" }, ListAppAssessmentResourceDriftsRequest, ListAppAssessmentResourceDriftsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the resource grouping recommendations suggested by Resilience Hub for your application.
 */export const listResourceGroupingRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-resource-grouping-recommendations", method: "GET", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListResourceGroupingRecommendations" }, ListResourceGroupingRecommendationsRequest, ListResourceGroupingRecommendationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables you to include or exclude one or more operational recommendations.
 */export const batchUpdateRecommendationStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/batch-update-recommendation-status", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.BatchUpdateRecommendationStatus" }, BatchUpdateRecommendationStatusRequest, BatchUpdateRecommendationStatusResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the alarm recommendations for an Resilience Hub application.
 */export const listAlarmRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-alarm-recommendations", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAlarmRecommendations" }, ListAlarmRecommendationsRequest, ListAlarmRecommendationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes an assessment for an Resilience Hub application.
 */export const describeAppAssessment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/describe-app-assessment", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.DescribeAppAssessment" }, DescribeAppAssessmentRequest, DescribeAppAssessmentResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the recommendations for an Resilience Hub Application Component.
 */export const listAppComponentRecommendations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-04-30", uri: "/list-app-component-recommendations", sdkId: "resiliencehub", sigV4ServiceName: "resiliencehub", name: "AwsResilienceHub.ListAppComponentRecommendations" }, ListAppComponentRecommendationsRequest, ListAppComponentRecommendationsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
