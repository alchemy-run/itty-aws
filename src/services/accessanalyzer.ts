import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export const FindingIdList = S.Array(S.String);
export class ApplyArchiveRuleRequest extends S.Class<ApplyArchiveRuleRequest>("ApplyArchiveRuleRequest")({analyzerArn: S.String, ruleName: S.String, clientToken: S.optional(S.String)}) {}
export class CancelPolicyGenerationRequest extends S.Class<CancelPolicyGenerationRequest>("CancelPolicyGenerationRequest")({jobId: S.String}) {}
export class CancelPolicyGenerationResponse extends S.Class<CancelPolicyGenerationResponse>("CancelPolicyGenerationResponse")({}) {}
export class CheckNoNewAccessRequest extends S.Class<CheckNoNewAccessRequest>("CheckNoNewAccessRequest")({newPolicyDocument: S.String, existingPolicyDocument: S.String, policyType: S.String}) {}
export class CheckNoPublicAccessRequest extends S.Class<CheckNoPublicAccessRequest>("CheckNoPublicAccessRequest")({policyDocument: S.String, resourceType: S.String}) {}
export class GenerateFindingRecommendationRequest extends S.Class<GenerateFindingRecommendationRequest>("GenerateFindingRecommendationRequest")({analyzerArn: S.String, id: S.String}) {}
export class GetAccessPreviewRequest extends S.Class<GetAccessPreviewRequest>("GetAccessPreviewRequest")({accessPreviewId: S.String, analyzerArn: S.String}) {}
export class GetAnalyzedResourceRequest extends S.Class<GetAnalyzedResourceRequest>("GetAnalyzedResourceRequest")({analyzerArn: S.String, resourceArn: S.String}) {}
export class GetFindingRequest extends S.Class<GetFindingRequest>("GetFindingRequest")({analyzerArn: S.String, id: S.String}) {}
export class GetFindingRecommendationRequest extends S.Class<GetFindingRecommendationRequest>("GetFindingRecommendationRequest")({analyzerArn: S.String, id: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class GetFindingsStatisticsRequest extends S.Class<GetFindingsStatisticsRequest>("GetFindingsStatisticsRequest")({analyzerArn: S.String}) {}
export class GetFindingV2Request extends S.Class<GetFindingV2Request>("GetFindingV2Request")({analyzerArn: S.String, id: S.String, maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class GetGeneratedPolicyRequest extends S.Class<GetGeneratedPolicyRequest>("GetGeneratedPolicyRequest")({jobId: S.String, includeResourcePlaceholders: S.optional(S.Boolean), includeServiceLevelTemplate: S.optional(S.Boolean)}) {}
export class ListAccessPreviewsRequest extends S.Class<ListAccessPreviewsRequest>("ListAccessPreviewsRequest")({analyzerArn: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAnalyzedResourcesRequest extends S.Class<ListAnalyzedResourcesRequest>("ListAnalyzedResourcesRequest")({analyzerArn: S.String, resourceType: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export const ValueList = S.Array(S.String);
export class Criterion extends S.Class<Criterion>("Criterion")({eq: S.optional(ValueList), neq: S.optional(ValueList), contains: S.optional(ValueList), exists: S.optional(S.Boolean)}) {}
export const FilterCriteriaMap = S.Record({key: S.String, value: Criterion});
export class SortCriteria extends S.Class<SortCriteria>("SortCriteria")({attributeName: S.optional(S.String), orderBy: S.optional(S.String)}) {}
export class ListFindingsV2Request extends S.Class<ListFindingsV2Request>("ListFindingsV2Request")({analyzerArn: S.String, filter: S.optional(FilterCriteriaMap), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), sort: S.optional(SortCriteria)}) {}
export class ListPolicyGenerationsRequest extends S.Class<ListPolicyGenerationsRequest>("ListPolicyGenerationsRequest")({principalArn: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class StartResourceScanRequest extends S.Class<StartResourceScanRequest>("StartResourceScanRequest")({analyzerArn: S.String, resourceArn: S.String, resourceOwnerAccount: S.optional(S.String)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateFindingsRequest extends S.Class<UpdateFindingsRequest>("UpdateFindingsRequest")({analyzerArn: S.String, status: S.String, ids: S.optional(FindingIdList), resourceArn: S.optional(S.String), clientToken: S.optional(S.String)}) {}
export class ValidatePolicyRequest extends S.Class<ValidatePolicyRequest>("ValidatePolicyRequest")({locale: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String), policyDocument: S.String, policyType: S.String, validatePolicyResourceType: S.optional(S.String)}) {}
export const ActionsList = S.Array(S.String);
export const ResourcesList = S.Array(S.String);
export class Access extends S.Class<Access>("Access")({actions: S.optional(ActionsList), resources: S.optional(ResourcesList)}) {}
export const AccessList = S.Array(Access);
export class PolicyGenerationDetails extends S.Class<PolicyGenerationDetails>("PolicyGenerationDetails")({principalArn: S.String}) {}
export const TagsMap = S.Record({key: S.String, value: S.String});
export const RegionList = S.Array(S.String);
export class CheckAccessNotGrantedRequest extends S.Class<CheckAccessNotGrantedRequest>("CheckAccessNotGrantedRequest")({policyDocument: S.String, access: AccessList, policyType: S.String}) {}
export class ReasonSummary extends S.Class<ReasonSummary>("ReasonSummary")({description: S.optional(S.String), statementIndex: S.optional(S.Number), statementId: S.optional(S.String)}) {}
export const ReasonSummaryList = S.Array(ReasonSummary);
export class CheckNoPublicAccessResponse extends S.Class<CheckNoPublicAccessResponse>("CheckNoPublicAccessResponse")({result: S.optional(S.String), message: S.optional(S.String), reasons: S.optional(ReasonSummaryList)}) {}
export class ListFindingsRequest extends S.Class<ListFindingsRequest>("ListFindingsRequest")({analyzerArn: S.String, filter: S.optional(FilterCriteriaMap), sort: S.optional(SortCriteria), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagsMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagsMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export const ActionList = S.Array(S.String);
export const SharedViaList = S.Array(S.String);
export class Trail extends S.Class<Trail>("Trail")({cloudTrailArn: S.String, regions: S.optional(RegionList), allRegions: S.optional(S.Boolean)}) {}
export const TrailList = S.Array(Trail);
export const EbsUserIdList = S.Array(S.String);
export const EbsGroupList = S.Array(S.String);
export class AnalyzedResource extends S.Class<AnalyzedResource>("AnalyzedResource")({resourceArn: S.String, resourceType: S.String, createdAt: S.Date, analyzedAt: S.Date, updatedAt: S.Date, isPublic: S.Boolean, actions: S.optional(ActionList), sharedVia: S.optional(SharedViaList), status: S.optional(S.String), resourceOwnerAccount: S.String, error: S.optional(S.String)}) {}
export class RecommendationError extends S.Class<RecommendationError>("RecommendationError")({code: S.String, message: S.String}) {}
export class AccessPreviewStatusReason extends S.Class<AccessPreviewStatusReason>("AccessPreviewStatusReason")({code: S.String}) {}
export class AccessPreviewSummary extends S.Class<AccessPreviewSummary>("AccessPreviewSummary")({id: S.String, analyzerArn: S.String, createdAt: S.Date, status: S.String, statusReason: S.optional(AccessPreviewStatusReason)}) {}
export const AccessPreviewsList = S.Array(AccessPreviewSummary);
export class AnalyzedResourceSummary extends S.Class<AnalyzedResourceSummary>("AnalyzedResourceSummary")({resourceArn: S.String, resourceOwnerAccount: S.String, resourceType: S.String}) {}
export const AnalyzedResourcesList = S.Array(AnalyzedResourceSummary);
export class FindingSummaryV2 extends S.Class<FindingSummaryV2>("FindingSummaryV2")({analyzedAt: S.Date, createdAt: S.Date, error: S.optional(S.String), id: S.String, resource: S.optional(S.String), resourceType: S.String, resourceOwnerAccount: S.String, status: S.String, updatedAt: S.Date, findingType: S.optional(S.String)}) {}
export const FindingsListV2 = S.Array(FindingSummaryV2);
export class PolicyGeneration extends S.Class<PolicyGeneration>("PolicyGeneration")({jobId: S.String, principalArn: S.String, status: S.String, startedOn: S.Date, completedOn: S.optional(S.Date)}) {}
export const PolicyGenerationList = S.Array(PolicyGeneration);
export class CloudTrailDetails extends S.Class<CloudTrailDetails>("CloudTrailDetails")({trails: TrailList, accessRole: S.String, startTime: S.Date, endTime: S.optional(S.Date)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class EbsSnapshotConfiguration extends S.Class<EbsSnapshotConfiguration>("EbsSnapshotConfiguration")({userIds: S.optional(EbsUserIdList), groups: S.optional(EbsGroupList), kmsKeyId: S.optional(S.String)}) {}
export class EcrRepositoryConfiguration extends S.Class<EcrRepositoryConfiguration>("EcrRepositoryConfiguration")({repositoryPolicy: S.optional(S.String)}) {}
export class IamRoleConfiguration extends S.Class<IamRoleConfiguration>("IamRoleConfiguration")({trustPolicy: S.optional(S.String)}) {}
export class EfsFileSystemConfiguration extends S.Class<EfsFileSystemConfiguration>("EfsFileSystemConfiguration")({fileSystemPolicy: S.optional(S.String)}) {}
export class SecretsManagerSecretConfiguration extends S.Class<SecretsManagerSecretConfiguration>("SecretsManagerSecretConfiguration")({kmsKeyId: S.optional(S.String), secretPolicy: S.optional(S.String)}) {}
export class SnsTopicConfiguration extends S.Class<SnsTopicConfiguration>("SnsTopicConfiguration")({topicPolicy: S.optional(S.String)}) {}
export class SqsQueueConfiguration extends S.Class<SqsQueueConfiguration>("SqsQueueConfiguration")({queuePolicy: S.optional(S.String)}) {}
export class DynamodbStreamConfiguration extends S.Class<DynamodbStreamConfiguration>("DynamodbStreamConfiguration")({streamPolicy: S.optional(S.String)}) {}
export class DynamodbTableConfiguration extends S.Class<DynamodbTableConfiguration>("DynamodbTableConfiguration")({tablePolicy: S.optional(S.String)}) {}
export class CheckAccessNotGrantedResponse extends S.Class<CheckAccessNotGrantedResponse>("CheckAccessNotGrantedResponse")({result: S.optional(S.String), message: S.optional(S.String), reasons: S.optional(ReasonSummaryList)}) {}
export class CheckNoNewAccessResponse extends S.Class<CheckNoNewAccessResponse>("CheckNoNewAccessResponse")({result: S.optional(S.String), message: S.optional(S.String), reasons: S.optional(ReasonSummaryList)}) {}
export const KmsGrantOperationsList = S.Array(S.String);
export class GetAnalyzedResourceResponse extends S.Class<GetAnalyzedResourceResponse>("GetAnalyzedResourceResponse")({resource: S.optional(AnalyzedResource)}) {}
export class ListAccessPreviewFindingsRequest extends S.Class<ListAccessPreviewFindingsRequest>("ListAccessPreviewFindingsRequest")({accessPreviewId: S.String, analyzerArn: S.String, filter: S.optional(FilterCriteriaMap), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListAccessPreviewsResponse extends S.Class<ListAccessPreviewsResponse>("ListAccessPreviewsResponse")({accessPreviews: AccessPreviewsList, nextToken: S.optional(S.String)}) {}
export class ListAnalyzedResourcesResponse extends S.Class<ListAnalyzedResourcesResponse>("ListAnalyzedResourcesResponse")({analyzedResources: AnalyzedResourcesList, nextToken: S.optional(S.String)}) {}
export class ListFindingsV2Response extends S.Class<ListFindingsV2Response>("ListFindingsV2Response")({findings: FindingsListV2, nextToken: S.optional(S.String)}) {}
export class ListPolicyGenerationsResponse extends S.Class<ListPolicyGenerationsResponse>("ListPolicyGenerationsResponse")({policyGenerations: PolicyGenerationList, nextToken: S.optional(S.String)}) {}
export class StartPolicyGenerationRequest extends S.Class<StartPolicyGenerationRequest>("StartPolicyGenerationRequest")({policyGenerationDetails: PolicyGenerationDetails, cloudTrailDetails: S.optional(CloudTrailDetails), clientToken: S.optional(S.String)}) {}
export const PrincipalMap = S.Record({key: S.String, value: S.String});
export const ConditionKeyMap = S.Record({key: S.String, value: S.String});
export class UnusedPermissionsRecommendedStep extends S.Class<UnusedPermissionsRecommendedStep>("UnusedPermissionsRecommendedStep")({policyUpdatedAt: S.optional(S.Date), recommendedAction: S.String, recommendedPolicy: S.optional(S.String), existingPolicyId: S.optional(S.String)}) {}
export class FindingSourceDetail extends S.Class<FindingSourceDetail>("FindingSourceDetail")({accessPointArn: S.optional(S.String), accessPointAccount: S.optional(S.String)}) {}
export class FindingSource extends S.Class<FindingSource>("FindingSource")({type: S.String, detail: S.optional(FindingSourceDetail)}) {}
export const FindingSourceList = S.Array(FindingSource);
export class InternalAccessDetails extends S.Class<InternalAccessDetails>("InternalAccessDetails")({action: S.optional(ActionList), condition: S.optional(ConditionKeyMap), principal: S.optional(PrincipalMap), principalOwnerAccount: S.optional(S.String), accessType: S.optional(S.String), principalType: S.optional(S.String), sources: S.optional(FindingSourceList), resourceControlPolicyRestriction: S.optional(S.String), serviceControlPolicyRestriction: S.optional(S.String)}) {}
export class ExternalAccessDetails extends S.Class<ExternalAccessDetails>("ExternalAccessDetails")({action: S.optional(ActionList), condition: ConditionKeyMap, isPublic: S.optional(S.Boolean), principal: S.optional(PrincipalMap), sources: S.optional(FindingSourceList), resourceControlPolicyRestriction: S.optional(S.String)}) {}
export class UnusedIamUserAccessKeyDetails extends S.Class<UnusedIamUserAccessKeyDetails>("UnusedIamUserAccessKeyDetails")({accessKeyId: S.String, lastAccessed: S.optional(S.Date)}) {}
export class UnusedIamRoleDetails extends S.Class<UnusedIamRoleDetails>("UnusedIamRoleDetails")({lastAccessed: S.optional(S.Date)}) {}
export class UnusedIamUserPasswordDetails extends S.Class<UnusedIamUserPasswordDetails>("UnusedIamUserPasswordDetails")({lastAccessed: S.optional(S.Date)}) {}
export class JobError extends S.Class<JobError>("JobError")({code: S.String, message: S.String}) {}
export class GeneratedPolicy extends S.Class<GeneratedPolicy>("GeneratedPolicy")({policy: S.String}) {}
export const GeneratedPolicyList = S.Array(GeneratedPolicy);
export const KmsKeyPoliciesMap = S.Record({key: S.String, value: S.String});
export class S3PublicAccessBlockConfiguration extends S.Class<S3PublicAccessBlockConfiguration>("S3PublicAccessBlockConfiguration")({ignorePublicAcls: S.Boolean, restrictPublicBuckets: S.Boolean}) {}
export const RdsDbClusterSnapshotAccountIdsList = S.Array(S.String);
export const RdsDbSnapshotAccountIdsList = S.Array(S.String);
export const KmsConstraintsMap = S.Record({key: S.String, value: S.String});
export class KmsGrantConstraints extends S.Class<KmsGrantConstraints>("KmsGrantConstraints")({encryptionContextEquals: S.optional(KmsConstraintsMap), encryptionContextSubset: S.optional(KmsConstraintsMap)}) {}
export class KmsGrantConfiguration extends S.Class<KmsGrantConfiguration>("KmsGrantConfiguration")({operations: KmsGrantOperationsList, granteePrincipal: S.String, retiringPrincipal: S.optional(S.String), constraints: S.optional(KmsGrantConstraints), issuingAccount: S.String}) {}
export const KmsGrantConfigurationsList = S.Array(KmsGrantConfiguration);
export class KmsKeyConfiguration extends S.Class<KmsKeyConfiguration>("KmsKeyConfiguration")({keyPolicies: S.optional(KmsKeyPoliciesMap), grants: S.optional(KmsGrantConfigurationsList)}) {}
export const RdsDbClusterSnapshotAttributeValue = S.Union(RdsDbClusterSnapshotAccountIdsList);
export const RdsDbClusterSnapshotAttributesMap = S.Record({key: S.String, value: RdsDbClusterSnapshotAttributeValue});
export class RdsDbClusterSnapshotConfiguration extends S.Class<RdsDbClusterSnapshotConfiguration>("RdsDbClusterSnapshotConfiguration")({attributes: S.optional(RdsDbClusterSnapshotAttributesMap), kmsKeyId: S.optional(S.String)}) {}
export const RdsDbSnapshotAttributeValue = S.Union(RdsDbSnapshotAccountIdsList);
export const RdsDbSnapshotAttributesMap = S.Record({key: S.String, value: RdsDbSnapshotAttributeValue});
export class RdsDbSnapshotConfiguration extends S.Class<RdsDbSnapshotConfiguration>("RdsDbSnapshotConfiguration")({attributes: S.optional(RdsDbSnapshotAttributesMap), kmsKeyId: S.optional(S.String)}) {}
export const AclGrantee = S.Union(S.String, S.String);
export class S3BucketAclGrantConfiguration extends S.Class<S3BucketAclGrantConfiguration>("S3BucketAclGrantConfiguration")({permission: S.String, grantee: AclGrantee}) {}
export const S3BucketAclGrantConfigurationsList = S.Array(S3BucketAclGrantConfiguration);
export class VpcConfiguration extends S.Class<VpcConfiguration>("VpcConfiguration")({vpcId: S.String}) {}
export class InternetConfiguration extends S.Class<InternetConfiguration>("InternetConfiguration")({}) {}
export const NetworkOriginConfiguration = S.Union(VpcConfiguration, InternetConfiguration);
export class S3AccessPointConfiguration extends S.Class<S3AccessPointConfiguration>("S3AccessPointConfiguration")({accessPointPolicy: S.optional(S.String), publicAccessBlock: S.optional(S3PublicAccessBlockConfiguration), networkOrigin: S.optional(NetworkOriginConfiguration)}) {}
export const S3AccessPointConfigurationsMap = S.Record({key: S.String, value: S3AccessPointConfiguration});
export class S3BucketConfiguration extends S.Class<S3BucketConfiguration>("S3BucketConfiguration")({bucketPolicy: S.optional(S.String), bucketAclGrants: S.optional(S3BucketAclGrantConfigurationsList), bucketPublicAccessBlock: S.optional(S3PublicAccessBlockConfiguration), accessPoints: S.optional(S3AccessPointConfigurationsMap)}) {}
export class S3ExpressDirectoryAccessPointConfiguration extends S.Class<S3ExpressDirectoryAccessPointConfiguration>("S3ExpressDirectoryAccessPointConfiguration")({accessPointPolicy: S.optional(S.String), networkOrigin: S.optional(NetworkOriginConfiguration)}) {}
export const S3ExpressDirectoryAccessPointConfigurationsMap = S.Record({key: S.String, value: S3ExpressDirectoryAccessPointConfiguration});
export class S3ExpressDirectoryBucketConfiguration extends S.Class<S3ExpressDirectoryBucketConfiguration>("S3ExpressDirectoryBucketConfiguration")({bucketPolicy: S.optional(S.String), accessPoints: S.optional(S3ExpressDirectoryAccessPointConfigurationsMap)}) {}
export const Configuration = S.Union(EbsSnapshotConfiguration, EcrRepositoryConfiguration, IamRoleConfiguration, EfsFileSystemConfiguration, KmsKeyConfiguration, RdsDbClusterSnapshotConfiguration, RdsDbSnapshotConfiguration, SecretsManagerSecretConfiguration, S3BucketConfiguration, SnsTopicConfiguration, SqsQueueConfiguration, S3ExpressDirectoryBucketConfiguration, DynamodbStreamConfiguration, DynamodbTableConfiguration);
export const ConfigurationsMap = S.Record({key: S.String, value: Configuration});
export class AccessPreview extends S.Class<AccessPreview>("AccessPreview")({id: S.String, analyzerArn: S.String, configurations: ConfigurationsMap, createdAt: S.Date, status: S.String, statusReason: S.optional(AccessPreviewStatusReason)}) {}
export const RecommendedStep = S.Union(UnusedPermissionsRecommendedStep);
export const RecommendedStepList = S.Array(RecommendedStep);
export class JobDetails extends S.Class<JobDetails>("JobDetails")({jobId: S.String, status: S.String, startedOn: S.Date, completedOn: S.optional(S.Date), jobError: S.optional(JobError)}) {}
export class FindingSummary extends S.Class<FindingSummary>("FindingSummary")({id: S.String, principal: S.optional(PrincipalMap), action: S.optional(ActionList), resource: S.optional(S.String), isPublic: S.optional(S.Boolean), resourceType: S.String, condition: ConditionKeyMap, createdAt: S.Date, analyzedAt: S.Date, updatedAt: S.Date, status: S.String, resourceOwnerAccount: S.String, error: S.optional(S.String), sources: S.optional(FindingSourceList), resourceControlPolicyRestriction: S.optional(S.String)}) {}
export const FindingsList = S.Array(FindingSummary);
export class UnusedAccessTypeStatistics extends S.Class<UnusedAccessTypeStatistics>("UnusedAccessTypeStatistics")({unusedAccessType: S.optional(S.String), total: S.optional(S.Number)}) {}
export const UnusedAccessTypeStatisticsList = S.Array(UnusedAccessTypeStatistics);
export class UnusedAction extends S.Class<UnusedAction>("UnusedAction")({action: S.String, lastAccessed: S.optional(S.Date)}) {}
export const UnusedActionList = S.Array(UnusedAction);
export class GetAccessPreviewResponse extends S.Class<GetAccessPreviewResponse>("GetAccessPreviewResponse")({accessPreview: AccessPreview}) {}
export class GetFindingRecommendationResponse extends S.Class<GetFindingRecommendationResponse>("GetFindingRecommendationResponse")({startedAt: S.Date, completedAt: S.optional(S.Date), nextToken: S.optional(S.String), error: S.optional(RecommendationError), resourceArn: S.String, recommendedSteps: S.optional(RecommendedStepList), recommendationType: S.String, status: S.String}) {}
export class ListFindingsResponse extends S.Class<ListFindingsResponse>("ListFindingsResponse")({findings: FindingsList, nextToken: S.optional(S.String)}) {}
export class StartPolicyGenerationResponse extends S.Class<StartPolicyGenerationResponse>("StartPolicyGenerationResponse")({jobId: S.String}) {}
export class UnusedPermissionDetails extends S.Class<UnusedPermissionDetails>("UnusedPermissionDetails")({actions: S.optional(UnusedActionList), serviceNamespace: S.String, lastAccessed: S.optional(S.Date)}) {}
export class ResourceTypeDetails extends S.Class<ResourceTypeDetails>("ResourceTypeDetails")({totalActivePublic: S.optional(S.Number), totalActiveCrossAccount: S.optional(S.Number), totalActiveErrors: S.optional(S.Number)}) {}
export class InternalAccessResourceTypeDetails extends S.Class<InternalAccessResourceTypeDetails>("InternalAccessResourceTypeDetails")({totalActiveFindings: S.optional(S.Number), totalResolvedFindings: S.optional(S.Number), totalArchivedFindings: S.optional(S.Number)}) {}
export const FindingAggregationAccountDetailsMap = S.Record({key: S.String, value: S.Number});
export class TrailProperties extends S.Class<TrailProperties>("TrailProperties")({cloudTrailArn: S.String, regions: S.optional(RegionList), allRegions: S.optional(S.Boolean)}) {}
export const TrailPropertiesList = S.Array(TrailProperties);
export class Substring extends S.Class<Substring>("Substring")({start: S.Number, length: S.Number}) {}
export class Position extends S.Class<Position>("Position")({line: S.Number, column: S.Number, offset: S.Number}) {}
export class Finding extends S.Class<Finding>("Finding")({id: S.String, principal: S.optional(PrincipalMap), action: S.optional(ActionList), resource: S.optional(S.String), isPublic: S.optional(S.Boolean), resourceType: S.String, condition: ConditionKeyMap, createdAt: S.Date, analyzedAt: S.Date, updatedAt: S.Date, status: S.String, resourceOwnerAccount: S.String, error: S.optional(S.String), sources: S.optional(FindingSourceList), resourceControlPolicyRestriction: S.optional(S.String)}) {}
export const FindingDetails = S.Union(InternalAccessDetails, ExternalAccessDetails, UnusedPermissionDetails, UnusedIamUserAccessKeyDetails, UnusedIamRoleDetails, UnusedIamUserPasswordDetails);
export const FindingDetailsList = S.Array(FindingDetails);
export class AccessPreviewFinding extends S.Class<AccessPreviewFinding>("AccessPreviewFinding")({id: S.String, existingFindingId: S.optional(S.String), existingFindingStatus: S.optional(S.String), principal: S.optional(PrincipalMap), action: S.optional(ActionList), condition: S.optional(ConditionKeyMap), resource: S.optional(S.String), isPublic: S.optional(S.Boolean), resourceType: S.String, createdAt: S.Date, changeType: S.String, status: S.String, resourceOwnerAccount: S.String, error: S.optional(S.String), sources: S.optional(FindingSourceList), resourceControlPolicyRestriction: S.optional(S.String)}) {}
export const AccessPreviewFindingsList = S.Array(AccessPreviewFinding);
export const ResourceTypeStatisticsMap = S.Record({key: S.String, value: ResourceTypeDetails});
export const InternalAccessResourceTypeStatisticsMap = S.Record({key: S.String, value: InternalAccessResourceTypeDetails});
export class FindingAggregationAccountDetails extends S.Class<FindingAggregationAccountDetails>("FindingAggregationAccountDetails")({account: S.optional(S.String), numberOfActiveFindings: S.optional(S.Number), details: S.optional(FindingAggregationAccountDetailsMap)}) {}
export const AccountAggregations = S.Array(FindingAggregationAccountDetails);
export class CloudTrailProperties extends S.Class<CloudTrailProperties>("CloudTrailProperties")({trailProperties: TrailPropertiesList, startTime: S.Date, endTime: S.Date}) {}
export const PathElement = S.Union(S.Number, S.String, Substring, S.String);
export const PathElementList = S.Array(PathElement);
export class Span extends S.Class<Span>("Span")({start: Position, end: Position}) {}
export class GetFindingResponse extends S.Class<GetFindingResponse>("GetFindingResponse")({finding: S.optional(Finding)}) {}
export class GetFindingV2Response extends S.Class<GetFindingV2Response>("GetFindingV2Response")({analyzedAt: S.Date, createdAt: S.Date, error: S.optional(S.String), id: S.String, nextToken: S.optional(S.String), resource: S.optional(S.String), resourceType: S.String, resourceOwnerAccount: S.String, status: S.String, updatedAt: S.Date, findingDetails: FindingDetailsList, findingType: S.optional(S.String)}) {}
export class ListAccessPreviewFindingsResponse extends S.Class<ListAccessPreviewFindingsResponse>("ListAccessPreviewFindingsResponse")({findings: AccessPreviewFindingsList, nextToken: S.optional(S.String)}) {}
export class ExternalAccessFindingsStatistics extends S.Class<ExternalAccessFindingsStatistics>("ExternalAccessFindingsStatistics")({resourceTypeStatistics: S.optional(ResourceTypeStatisticsMap), totalActiveFindings: S.optional(S.Number), totalArchivedFindings: S.optional(S.Number), totalResolvedFindings: S.optional(S.Number)}) {}
export class InternalAccessFindingsStatistics extends S.Class<InternalAccessFindingsStatistics>("InternalAccessFindingsStatistics")({resourceTypeStatistics: S.optional(InternalAccessResourceTypeStatisticsMap), totalActiveFindings: S.optional(S.Number), totalArchivedFindings: S.optional(S.Number), totalResolvedFindings: S.optional(S.Number)}) {}
export class UnusedAccessFindingsStatistics extends S.Class<UnusedAccessFindingsStatistics>("UnusedAccessFindingsStatistics")({unusedAccessTypeStatistics: S.optional(UnusedAccessTypeStatisticsList), topAccounts: S.optional(AccountAggregations), totalActiveFindings: S.optional(S.Number), totalArchivedFindings: S.optional(S.Number), totalResolvedFindings: S.optional(S.Number)}) {}
export class GeneratedPolicyProperties extends S.Class<GeneratedPolicyProperties>("GeneratedPolicyProperties")({isComplete: S.optional(S.Boolean), principalArn: S.String, cloudTrailProperties: S.optional(CloudTrailProperties)}) {}
export class Location extends S.Class<Location>("Location")({path: PathElementList, span: Span}) {}
export const LocationList = S.Array(Location);
export const FindingsStatistics = S.Union(ExternalAccessFindingsStatistics, InternalAccessFindingsStatistics, UnusedAccessFindingsStatistics);
export const FindingsStatisticsList = S.Array(FindingsStatistics);
export class GeneratedPolicyResult extends S.Class<GeneratedPolicyResult>("GeneratedPolicyResult")({properties: GeneratedPolicyProperties, generatedPolicies: S.optional(GeneratedPolicyList)}) {}
export class ValidatePolicyFinding extends S.Class<ValidatePolicyFinding>("ValidatePolicyFinding")({findingDetails: S.String, findingType: S.String, issueCode: S.String, learnMoreLink: S.String, locations: LocationList}) {}
export const ValidatePolicyFindingList = S.Array(ValidatePolicyFinding);
export class GetFindingsStatisticsResponse extends S.Class<GetFindingsStatisticsResponse>("GetFindingsStatisticsResponse")({findingsStatistics: S.optional(FindingsStatisticsList), lastUpdatedAt: S.optional(S.Date)}) {}
export class GetGeneratedPolicyResponse extends S.Class<GetGeneratedPolicyResponse>("GetGeneratedPolicyResponse")({jobDetails: JobDetails, generatedPolicyResult: GeneratedPolicyResult}) {}
export class ValidatePolicyResponse extends S.Class<ValidatePolicyResponse>("ValidatePolicyResponse")({findings: ValidatePolicyFindingList, nextToken: S.optional(S.String)}) {}
export class CreateAccessPreviewRequest extends S.Class<CreateAccessPreviewRequest>("CreateAccessPreviewRequest")({analyzerArn: S.String, configurations: ConfigurationsMap, clientToken: S.optional(S.String)}) {}
export class CreateAccessPreviewResponse extends S.Class<CreateAccessPreviewResponse>("CreateAccessPreviewResponse")({id: S.String}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class UnprocessableEntityException extends S.TaggedError<UnprocessableEntityException>()("UnprocessableEntityException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String, resourceId: S.String, resourceType: S.String}) {};

//# Operations
export const updateFindings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/finding", method: "PUT", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.UpdateFindings" }, UpdateFindingsRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const applyArchiveRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/archive-rule", method: "PUT", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.ApplyArchiveRule" }, ApplyArchiveRuleRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const cancelPolicyGeneration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/policy/generation/{jobId}", method: "PUT", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.CancelPolicyGeneration" }, CancelPolicyGenerationRequest, CancelPolicyGenerationResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const generateFindingRecommendation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/recommendation/{id}", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.GenerateFindingRecommendation" }, GenerateFindingRecommendationRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/tags/{resourceArn}", method: "GET", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startResourceScan = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/resource/scan", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.StartResourceScan" }, StartResourceScanRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/tags/{resourceArn}", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const checkNoNewAccess = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/policy/check-no-new-access", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.CheckNoNewAccess" }, CheckNoNewAccessRequest, CheckNoNewAccessResponse, [AccessDeniedException, InternalServerException, InvalidParameterException, ThrottlingException, UnprocessableEntityException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const checkNoPublicAccess = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/policy/check-no-public-access", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.CheckNoPublicAccess" }, CheckNoPublicAccessRequest, CheckNoPublicAccessResponse, [AccessDeniedException, InternalServerException, InvalidParameterException, ThrottlingException, UnprocessableEntityException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getAnalyzedResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/analyzed-resource", method: "GET", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.GetAnalyzedResource" }, GetAnalyzedResourceRequest, GetAnalyzedResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccessPreviews = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/access-preview", method: "GET", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.ListAccessPreviews" }, ListAccessPreviewsRequest, ListAccessPreviewsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAnalyzedResources = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/analyzed-resource", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.ListAnalyzedResources" }, ListAnalyzedResourcesRequest, ListAnalyzedResourcesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listFindingsV2 = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/findingv2", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.ListFindingsV2" }, ListFindingsV2Request, ListFindingsV2Response, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listPolicyGenerations = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/policy/generation", method: "GET", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.ListPolicyGenerations" }, ListPolicyGenerationsRequest, ListPolicyGenerationsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const checkAccessNotGranted = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/policy/check-access-not-granted", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.CheckAccessNotGranted" }, CheckAccessNotGrantedRequest, CheckAccessNotGrantedResponse, [AccessDeniedException, InternalServerException, InvalidParameterException, ThrottlingException, UnprocessableEntityException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getAccessPreview = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/access-preview/{accessPreviewId}", method: "GET", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.GetAccessPreview" }, GetAccessPreviewRequest, GetAccessPreviewResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getFindingRecommendation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/recommendation/{id}", method: "GET", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.GetFindingRecommendation" }, GetFindingRecommendationRequest, GetFindingRecommendationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listFindings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/finding", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.ListFindings" }, ListFindingsRequest, ListFindingsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getFinding = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/finding/{id}", method: "GET", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.GetFinding" }, GetFindingRequest, GetFindingResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getFindingV2 = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/findingv2/{id}", method: "GET", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.GetFindingV2" }, GetFindingV2Request, GetFindingV2Response, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAccessPreviewFindings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/access-preview/{accessPreviewId}", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.ListAccessPreviewFindings" }, ListAccessPreviewFindingsRequest, ListAccessPreviewFindingsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getFindingsStatistics = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/analyzer/findings/statistics", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.GetFindingsStatistics" }, GetFindingsStatisticsRequest, GetFindingsStatisticsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getGeneratedPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/policy/generation/{jobId}", method: "GET", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.GetGeneratedPolicy" }, GetGeneratedPolicyRequest, GetGeneratedPolicyResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startPolicyGeneration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/policy/generation", method: "PUT", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.StartPolicyGeneration" }, StartPolicyGenerationRequest, StartPolicyGenerationResponse, [AccessDeniedException, ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const validatePolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/policy/validation", method: "POST", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.ValidatePolicy" }, ValidatePolicyRequest, ValidatePolicyResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createAccessPreview = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-01", uri: "/access-preview", method: "PUT", sdkId: "AccessAnalyzer", sigV4ServiceName: "access-analyzer", name: "AccessAnalyzer.CreateAccessPreview" }, CreateAccessPreviewRequest, CreateAccessPreviewResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
