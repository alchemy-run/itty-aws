import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteRegistryPolicyRequest extends S.Class<DeleteRegistryPolicyRequest>("DeleteRegistryPolicyRequest")({}) {}
export class DeleteSigningConfigurationRequest extends S.Class<DeleteSigningConfigurationRequest>("DeleteSigningConfigurationRequest")({}) {}
export class DescribeRegistryRequest extends S.Class<DescribeRegistryRequest>("DescribeRegistryRequest")({}) {}
export class GetRegistryPolicyRequest extends S.Class<GetRegistryPolicyRequest>("GetRegistryPolicyRequest")({}) {}
export class GetRegistryScanningConfigurationRequest extends S.Class<GetRegistryScanningConfigurationRequest>("GetRegistryScanningConfigurationRequest")({}) {}
export class GetSigningConfigurationRequest extends S.Class<GetSigningConfigurationRequest>("GetSigningConfigurationRequest")({}) {}
export const BatchedOperationLayerDigestList = S.Array(S.String);
export const MediaTypeList = S.Array(S.String);
export const ScanningConfigurationRepositoryNameList = S.Array(S.String);
export const LayerDigestList = S.Array(S.String);
export const RCTAppliedForList = S.Array(S.String);
export const PullThroughCacheRuleRepositoryPrefixList = S.Array(S.String);
export const RepositoryNameList = S.Array(S.String);
export const PrefixList = S.Array(S.String);
export const GetAuthorizationTokenRegistryIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class BatchCheckLayerAvailabilityRequest extends S.Class<BatchCheckLayerAvailabilityRequest>("BatchCheckLayerAvailabilityRequest")({registryId: S.optional(S.String), repositoryName: S.String, layerDigests: BatchedOperationLayerDigestList}) {}
export class ImageIdentifier extends S.Class<ImageIdentifier>("ImageIdentifier")({imageDigest: S.optional(S.String), imageTag: S.optional(S.String)}) {}
export const ImageIdentifierList = S.Array(ImageIdentifier);
export class BatchGetImageRequest extends S.Class<BatchGetImageRequest>("BatchGetImageRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageIds: ImageIdentifierList, acceptedMediaTypes: S.optional(MediaTypeList)}) {}
export class BatchGetRepositoryScanningConfigurationRequest extends S.Class<BatchGetRepositoryScanningConfigurationRequest>("BatchGetRepositoryScanningConfigurationRequest")({repositoryNames: ScanningConfigurationRepositoryNameList}) {}
export class CompleteLayerUploadRequest extends S.Class<CompleteLayerUploadRequest>("CompleteLayerUploadRequest")({registryId: S.optional(S.String), repositoryName: S.String, uploadId: S.String, layerDigests: LayerDigestList}) {}
export class CreatePullThroughCacheRuleRequest extends S.Class<CreatePullThroughCacheRuleRequest>("CreatePullThroughCacheRuleRequest")({ecrRepositoryPrefix: S.String, upstreamRegistryUrl: S.String, registryId: S.optional(S.String), upstreamRegistry: S.optional(S.String), credentialArn: S.optional(S.String), customRoleArn: S.optional(S.String), upstreamRepositoryPrefix: S.optional(S.String)}) {}
export class DeleteLifecyclePolicyRequest extends S.Class<DeleteLifecyclePolicyRequest>("DeleteLifecyclePolicyRequest")({registryId: S.optional(S.String), repositoryName: S.String}) {}
export class DeletePullThroughCacheRuleRequest extends S.Class<DeletePullThroughCacheRuleRequest>("DeletePullThroughCacheRuleRequest")({ecrRepositoryPrefix: S.String, registryId: S.optional(S.String)}) {}
export class DeleteRegistryPolicyResponse extends S.Class<DeleteRegistryPolicyResponse>("DeleteRegistryPolicyResponse")({registryId: S.optional(S.String), policyText: S.optional(S.String)}) {}
export class DeleteRepositoryRequest extends S.Class<DeleteRepositoryRequest>("DeleteRepositoryRequest")({registryId: S.optional(S.String), repositoryName: S.String, force: S.optional(S.Boolean)}) {}
export class DeleteRepositoryCreationTemplateRequest extends S.Class<DeleteRepositoryCreationTemplateRequest>("DeleteRepositoryCreationTemplateRequest")({prefix: S.String}) {}
export class DeleteRepositoryPolicyRequest extends S.Class<DeleteRepositoryPolicyRequest>("DeleteRepositoryPolicyRequest")({registryId: S.optional(S.String), repositoryName: S.String}) {}
export class DeregisterPullTimeUpdateExclusionRequest extends S.Class<DeregisterPullTimeUpdateExclusionRequest>("DeregisterPullTimeUpdateExclusionRequest")({principalArn: S.String}) {}
export class DescribeImageReplicationStatusRequest extends S.Class<DescribeImageReplicationStatusRequest>("DescribeImageReplicationStatusRequest")({repositoryName: S.String, imageId: ImageIdentifier, registryId: S.optional(S.String)}) {}
export class DescribeImageScanFindingsRequest extends S.Class<DescribeImageScanFindingsRequest>("DescribeImageScanFindingsRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageId: ImageIdentifier, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class DescribeImageSigningStatusRequest extends S.Class<DescribeImageSigningStatusRequest>("DescribeImageSigningStatusRequest")({repositoryName: S.String, imageId: ImageIdentifier, registryId: S.optional(S.String)}) {}
export class DescribePullThroughCacheRulesRequest extends S.Class<DescribePullThroughCacheRulesRequest>("DescribePullThroughCacheRulesRequest")({registryId: S.optional(S.String), ecrRepositoryPrefixes: S.optional(PullThroughCacheRuleRepositoryPrefixList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class DescribeRepositoriesRequest extends S.Class<DescribeRepositoriesRequest>("DescribeRepositoriesRequest")({registryId: S.optional(S.String), repositoryNames: S.optional(RepositoryNameList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class DescribeRepositoryCreationTemplatesRequest extends S.Class<DescribeRepositoryCreationTemplatesRequest>("DescribeRepositoryCreationTemplatesRequest")({prefixes: S.optional(PrefixList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetAccountSettingRequest extends S.Class<GetAccountSettingRequest>("GetAccountSettingRequest")({name: S.String}) {}
export class GetAuthorizationTokenRequest extends S.Class<GetAuthorizationTokenRequest>("GetAuthorizationTokenRequest")({registryIds: S.optional(GetAuthorizationTokenRegistryIdList)}) {}
export class GetDownloadUrlForLayerRequest extends S.Class<GetDownloadUrlForLayerRequest>("GetDownloadUrlForLayerRequest")({registryId: S.optional(S.String), repositoryName: S.String, layerDigest: S.String}) {}
export class GetLifecyclePolicyRequest extends S.Class<GetLifecyclePolicyRequest>("GetLifecyclePolicyRequest")({registryId: S.optional(S.String), repositoryName: S.String}) {}
export class GetRegistryPolicyResponse extends S.Class<GetRegistryPolicyResponse>("GetRegistryPolicyResponse")({registryId: S.optional(S.String), policyText: S.optional(S.String)}) {}
export class GetRepositoryPolicyRequest extends S.Class<GetRepositoryPolicyRequest>("GetRepositoryPolicyRequest")({registryId: S.optional(S.String), repositoryName: S.String}) {}
export class SigningRepositoryFilter extends S.Class<SigningRepositoryFilter>("SigningRepositoryFilter")({filter: S.String, filterType: S.String}) {}
export const SigningRepositoryFilterList = S.Array(SigningRepositoryFilter);
export class SigningRule extends S.Class<SigningRule>("SigningRule")({signingProfileArn: S.String, repositoryFilters: S.optional(SigningRepositoryFilterList)}) {}
export const SigningRuleList = S.Array(SigningRule);
export class SigningConfiguration extends S.Class<SigningConfiguration>("SigningConfiguration")({rules: SigningRuleList}) {}
export class GetSigningConfigurationResponse extends S.Class<GetSigningConfigurationResponse>("GetSigningConfigurationResponse")({registryId: S.optional(S.String), signingConfiguration: S.optional(SigningConfiguration)}) {}
export class InitiateLayerUploadRequest extends S.Class<InitiateLayerUploadRequest>("InitiateLayerUploadRequest")({registryId: S.optional(S.String), repositoryName: S.String}) {}
export class ListPullTimeUpdateExclusionsRequest extends S.Class<ListPullTimeUpdateExclusionsRequest>("ListPullTimeUpdateExclusionsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class PutAccountSettingRequest extends S.Class<PutAccountSettingRequest>("PutAccountSettingRequest")({name: S.String, value: S.String}) {}
export class PutImageRequest extends S.Class<PutImageRequest>("PutImageRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageManifest: S.String, imageManifestMediaType: S.optional(S.String), imageTag: S.optional(S.String), imageDigest: S.optional(S.String)}) {}
export class ImageScanningConfiguration extends S.Class<ImageScanningConfiguration>("ImageScanningConfiguration")({scanOnPush: S.optional(S.Boolean)}) {}
export class PutImageScanningConfigurationRequest extends S.Class<PutImageScanningConfigurationRequest>("PutImageScanningConfigurationRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageScanningConfiguration: ImageScanningConfiguration}) {}
export class ImageTagMutabilityExclusionFilter extends S.Class<ImageTagMutabilityExclusionFilter>("ImageTagMutabilityExclusionFilter")({filterType: S.String, filter: S.String}) {}
export const ImageTagMutabilityExclusionFilters = S.Array(ImageTagMutabilityExclusionFilter);
export class PutImageTagMutabilityRequest extends S.Class<PutImageTagMutabilityRequest>("PutImageTagMutabilityRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageTagMutability: S.String, imageTagMutabilityExclusionFilters: S.optional(ImageTagMutabilityExclusionFilters)}) {}
export class PutLifecyclePolicyRequest extends S.Class<PutLifecyclePolicyRequest>("PutLifecyclePolicyRequest")({registryId: S.optional(S.String), repositoryName: S.String, lifecyclePolicyText: S.String}) {}
export class PutRegistryPolicyRequest extends S.Class<PutRegistryPolicyRequest>("PutRegistryPolicyRequest")({policyText: S.String}) {}
export class ReplicationDestination extends S.Class<ReplicationDestination>("ReplicationDestination")({region: S.String, registryId: S.String}) {}
export const ReplicationDestinationList = S.Array(ReplicationDestination);
export class RepositoryFilter extends S.Class<RepositoryFilter>("RepositoryFilter")({filter: S.String, filterType: S.String}) {}
export const RepositoryFilterList = S.Array(RepositoryFilter);
export class ReplicationRule extends S.Class<ReplicationRule>("ReplicationRule")({destinations: ReplicationDestinationList, repositoryFilters: S.optional(RepositoryFilterList)}) {}
export const ReplicationRuleList = S.Array(ReplicationRule);
export class ReplicationConfiguration extends S.Class<ReplicationConfiguration>("ReplicationConfiguration")({rules: ReplicationRuleList}) {}
export class PutReplicationConfigurationRequest extends S.Class<PutReplicationConfigurationRequest>("PutReplicationConfigurationRequest")({replicationConfiguration: ReplicationConfiguration}) {}
export class PutSigningConfigurationRequest extends S.Class<PutSigningConfigurationRequest>("PutSigningConfigurationRequest")({signingConfiguration: SigningConfiguration}) {}
export class RegisterPullTimeUpdateExclusionRequest extends S.Class<RegisterPullTimeUpdateExclusionRequest>("RegisterPullTimeUpdateExclusionRequest")({principalArn: S.String}) {}
export class SetRepositoryPolicyRequest extends S.Class<SetRepositoryPolicyRequest>("SetRepositoryPolicyRequest")({registryId: S.optional(S.String), repositoryName: S.String, policyText: S.String, force: S.optional(S.Boolean)}) {}
export class StartImageScanRequest extends S.Class<StartImageScanRequest>("StartImageScanRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageId: ImageIdentifier}) {}
export class StartLifecyclePolicyPreviewRequest extends S.Class<StartLifecyclePolicyPreviewRequest>("StartLifecyclePolicyPreviewRequest")({registryId: S.optional(S.String), repositoryName: S.String, lifecyclePolicyText: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateImageStorageClassRequest extends S.Class<UpdateImageStorageClassRequest>("UpdateImageStorageClassRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageId: ImageIdentifier, targetStorageClass: S.String}) {}
export class UpdatePullThroughCacheRuleRequest extends S.Class<UpdatePullThroughCacheRuleRequest>("UpdatePullThroughCacheRuleRequest")({registryId: S.optional(S.String), ecrRepositoryPrefix: S.String, credentialArn: S.optional(S.String), customRoleArn: S.optional(S.String)}) {}
export class EncryptionConfigurationForRepositoryCreationTemplate extends S.Class<EncryptionConfigurationForRepositoryCreationTemplate>("EncryptionConfigurationForRepositoryCreationTemplate")({encryptionType: S.String, kmsKey: S.optional(S.String)}) {}
export class UpdateRepositoryCreationTemplateRequest extends S.Class<UpdateRepositoryCreationTemplateRequest>("UpdateRepositoryCreationTemplateRequest")({prefix: S.String, description: S.optional(S.String), encryptionConfiguration: S.optional(EncryptionConfigurationForRepositoryCreationTemplate), resourceTags: S.optional(TagList), imageTagMutability: S.optional(S.String), imageTagMutabilityExclusionFilters: S.optional(ImageTagMutabilityExclusionFilters), repositoryPolicy: S.optional(S.String), lifecyclePolicy: S.optional(S.String), appliedFor: S.optional(RCTAppliedForList), customRoleArn: S.optional(S.String)}) {}
export class UploadLayerPartRequest extends S.Class<UploadLayerPartRequest>("UploadLayerPartRequest")({registryId: S.optional(S.String), repositoryName: S.String, uploadId: S.String, partFirstByte: S.Number, partLastByte: S.Number, layerPartBlob: H.StreamBody()}) {}
export class ValidatePullThroughCacheRuleRequest extends S.Class<ValidatePullThroughCacheRuleRequest>("ValidatePullThroughCacheRuleRequest")({ecrRepositoryPrefix: S.String, registryId: S.optional(S.String)}) {}
export const ArtifactTypeList = S.Array(S.String);
export class EncryptionConfiguration extends S.Class<EncryptionConfiguration>("EncryptionConfiguration")({encryptionType: S.String, kmsKey: S.optional(S.String)}) {}
export class DescribeImagesFilter extends S.Class<DescribeImagesFilter>("DescribeImagesFilter")({tagStatus: S.optional(S.String), imageStatus: S.optional(S.String)}) {}
export class Repository extends S.Class<Repository>("Repository")({repositoryArn: S.optional(S.String), registryId: S.optional(S.String), repositoryName: S.optional(S.String), repositoryUri: S.optional(S.String), createdAt: S.optional(S.Date), imageTagMutability: S.optional(S.String), imageTagMutabilityExclusionFilters: S.optional(ImageTagMutabilityExclusionFilters), imageScanningConfiguration: S.optional(ImageScanningConfiguration), encryptionConfiguration: S.optional(EncryptionConfiguration)}) {}
export const RepositoryList = S.Array(Repository);
export class RepositoryCreationTemplate extends S.Class<RepositoryCreationTemplate>("RepositoryCreationTemplate")({prefix: S.optional(S.String), description: S.optional(S.String), encryptionConfiguration: S.optional(EncryptionConfigurationForRepositoryCreationTemplate), resourceTags: S.optional(TagList), imageTagMutability: S.optional(S.String), imageTagMutabilityExclusionFilters: S.optional(ImageTagMutabilityExclusionFilters), repositoryPolicy: S.optional(S.String), lifecyclePolicy: S.optional(S.String), appliedFor: S.optional(RCTAppliedForList), customRoleArn: S.optional(S.String), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date)}) {}
export const RepositoryCreationTemplateList = S.Array(RepositoryCreationTemplate);
export class LifecyclePolicyPreviewFilter extends S.Class<LifecyclePolicyPreviewFilter>("LifecyclePolicyPreviewFilter")({tagStatus: S.optional(S.String)}) {}
export class ScanningRepositoryFilter extends S.Class<ScanningRepositoryFilter>("ScanningRepositoryFilter")({filter: S.String, filterType: S.String}) {}
export const ScanningRepositoryFilterList = S.Array(ScanningRepositoryFilter);
export class RegistryScanningRule extends S.Class<RegistryScanningRule>("RegistryScanningRule")({scanFrequency: S.String, repositoryFilters: ScanningRepositoryFilterList}) {}
export const RegistryScanningRuleList = S.Array(RegistryScanningRule);
export class RegistryScanningConfiguration extends S.Class<RegistryScanningConfiguration>("RegistryScanningConfiguration")({scanType: S.optional(S.String), rules: S.optional(RegistryScanningRuleList)}) {}
export class SubjectIdentifier extends S.Class<SubjectIdentifier>("SubjectIdentifier")({imageDigest: S.String}) {}
export class ListImageReferrersFilter extends S.Class<ListImageReferrersFilter>("ListImageReferrersFilter")({artifactTypes: S.optional(ArtifactTypeList), artifactStatus: S.optional(S.String)}) {}
export class ListImagesFilter extends S.Class<ListImagesFilter>("ListImagesFilter")({tagStatus: S.optional(S.String), imageStatus: S.optional(S.String)}) {}
export const PullTimeUpdateExclusionList = S.Array(S.String);
export class BatchDeleteImageRequest extends S.Class<BatchDeleteImageRequest>("BatchDeleteImageRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageIds: ImageIdentifierList}) {}
export class CompleteLayerUploadResponse extends S.Class<CompleteLayerUploadResponse>("CompleteLayerUploadResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), uploadId: S.optional(S.String), layerDigest: S.optional(S.String)}) {}
export class CreatePullThroughCacheRuleResponse extends S.Class<CreatePullThroughCacheRuleResponse>("CreatePullThroughCacheRuleResponse")({ecrRepositoryPrefix: S.optional(S.String), upstreamRegistryUrl: S.optional(S.String), createdAt: S.optional(S.Date), registryId: S.optional(S.String), upstreamRegistry: S.optional(S.String), credentialArn: S.optional(S.String), customRoleArn: S.optional(S.String), upstreamRepositoryPrefix: S.optional(S.String)}) {}
export class CreateRepositoryRequest extends S.Class<CreateRepositoryRequest>("CreateRepositoryRequest")({registryId: S.optional(S.String), repositoryName: S.String, tags: S.optional(TagList), imageTagMutability: S.optional(S.String), imageTagMutabilityExclusionFilters: S.optional(ImageTagMutabilityExclusionFilters), imageScanningConfiguration: S.optional(ImageScanningConfiguration), encryptionConfiguration: S.optional(EncryptionConfiguration)}) {}
export class CreateRepositoryCreationTemplateRequest extends S.Class<CreateRepositoryCreationTemplateRequest>("CreateRepositoryCreationTemplateRequest")({prefix: S.String, description: S.optional(S.String), encryptionConfiguration: S.optional(EncryptionConfigurationForRepositoryCreationTemplate), resourceTags: S.optional(TagList), imageTagMutability: S.optional(S.String), imageTagMutabilityExclusionFilters: S.optional(ImageTagMutabilityExclusionFilters), repositoryPolicy: S.optional(S.String), lifecyclePolicy: S.optional(S.String), appliedFor: RCTAppliedForList, customRoleArn: S.optional(S.String)}) {}
export class DeleteLifecyclePolicyResponse extends S.Class<DeleteLifecyclePolicyResponse>("DeleteLifecyclePolicyResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), lifecyclePolicyText: S.optional(S.String), lastEvaluatedAt: S.optional(S.Date)}) {}
export class DeletePullThroughCacheRuleResponse extends S.Class<DeletePullThroughCacheRuleResponse>("DeletePullThroughCacheRuleResponse")({ecrRepositoryPrefix: S.optional(S.String), upstreamRegistryUrl: S.optional(S.String), createdAt: S.optional(S.Date), registryId: S.optional(S.String), credentialArn: S.optional(S.String), customRoleArn: S.optional(S.String), upstreamRepositoryPrefix: S.optional(S.String)}) {}
export class DeleteRepositoryPolicyResponse extends S.Class<DeleteRepositoryPolicyResponse>("DeleteRepositoryPolicyResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), policyText: S.optional(S.String)}) {}
export class DeregisterPullTimeUpdateExclusionResponse extends S.Class<DeregisterPullTimeUpdateExclusionResponse>("DeregisterPullTimeUpdateExclusionResponse")({principalArn: S.optional(S.String)}) {}
export class DescribeImagesRequest extends S.Class<DescribeImagesRequest>("DescribeImagesRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageIds: S.optional(ImageIdentifierList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), filter: S.optional(DescribeImagesFilter)}) {}
export class DescribeRepositoriesResponse extends S.Class<DescribeRepositoriesResponse>("DescribeRepositoriesResponse")({repositories: S.optional(RepositoryList), nextToken: S.optional(S.String)}) {}
export class DescribeRepositoryCreationTemplatesResponse extends S.Class<DescribeRepositoryCreationTemplatesResponse>("DescribeRepositoryCreationTemplatesResponse")({registryId: S.optional(S.String), repositoryCreationTemplates: S.optional(RepositoryCreationTemplateList), nextToken: S.optional(S.String)}) {}
export class GetAccountSettingResponse extends S.Class<GetAccountSettingResponse>("GetAccountSettingResponse")({name: S.optional(S.String), value: S.optional(S.String)}) {}
export class GetDownloadUrlForLayerResponse extends S.Class<GetDownloadUrlForLayerResponse>("GetDownloadUrlForLayerResponse")({downloadUrl: S.optional(S.String), layerDigest: S.optional(S.String)}) {}
export class GetLifecyclePolicyResponse extends S.Class<GetLifecyclePolicyResponse>("GetLifecyclePolicyResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), lifecyclePolicyText: S.optional(S.String), lastEvaluatedAt: S.optional(S.Date)}) {}
export class GetLifecyclePolicyPreviewRequest extends S.Class<GetLifecyclePolicyPreviewRequest>("GetLifecyclePolicyPreviewRequest")({registryId: S.optional(S.String), repositoryName: S.String, imageIds: S.optional(ImageIdentifierList), nextToken: S.optional(S.String), maxResults: S.optional(S.Number), filter: S.optional(LifecyclePolicyPreviewFilter)}) {}
export class GetRegistryScanningConfigurationResponse extends S.Class<GetRegistryScanningConfigurationResponse>("GetRegistryScanningConfigurationResponse")({registryId: S.optional(S.String), scanningConfiguration: S.optional(RegistryScanningConfiguration)}) {}
export class GetRepositoryPolicyResponse extends S.Class<GetRepositoryPolicyResponse>("GetRepositoryPolicyResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), policyText: S.optional(S.String)}) {}
export class InitiateLayerUploadResponse extends S.Class<InitiateLayerUploadResponse>("InitiateLayerUploadResponse")({uploadId: S.optional(S.String), partSize: S.optional(S.Number)}) {}
export class ListImageReferrersRequest extends S.Class<ListImageReferrersRequest>("ListImageReferrersRequest")({registryId: S.optional(S.String), repositoryName: S.String, subjectId: SubjectIdentifier, filter: S.optional(ListImageReferrersFilter), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListImagesRequest extends S.Class<ListImagesRequest>("ListImagesRequest")({registryId: S.optional(S.String), repositoryName: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number), filter: S.optional(ListImagesFilter)}) {}
export class ListPullTimeUpdateExclusionsResponse extends S.Class<ListPullTimeUpdateExclusionsResponse>("ListPullTimeUpdateExclusionsResponse")({pullTimeUpdateExclusions: S.optional(PullTimeUpdateExclusionList), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class PutAccountSettingResponse extends S.Class<PutAccountSettingResponse>("PutAccountSettingResponse")({name: S.optional(S.String), value: S.optional(S.String)}) {}
export class Image extends S.Class<Image>("Image")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), imageId: S.optional(ImageIdentifier), imageManifest: S.optional(S.String), imageManifestMediaType: S.optional(S.String)}) {}
export class PutImageResponse extends S.Class<PutImageResponse>("PutImageResponse")({image: S.optional(Image)}) {}
export class PutImageScanningConfigurationResponse extends S.Class<PutImageScanningConfigurationResponse>("PutImageScanningConfigurationResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), imageScanningConfiguration: S.optional(ImageScanningConfiguration)}) {}
export class PutImageTagMutabilityResponse extends S.Class<PutImageTagMutabilityResponse>("PutImageTagMutabilityResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), imageTagMutability: S.optional(S.String), imageTagMutabilityExclusionFilters: S.optional(ImageTagMutabilityExclusionFilters)}) {}
export class PutLifecyclePolicyResponse extends S.Class<PutLifecyclePolicyResponse>("PutLifecyclePolicyResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), lifecyclePolicyText: S.optional(S.String)}) {}
export class PutRegistryPolicyResponse extends S.Class<PutRegistryPolicyResponse>("PutRegistryPolicyResponse")({registryId: S.optional(S.String), policyText: S.optional(S.String)}) {}
export class PutReplicationConfigurationResponse extends S.Class<PutReplicationConfigurationResponse>("PutReplicationConfigurationResponse")({replicationConfiguration: S.optional(ReplicationConfiguration)}) {}
export class PutSigningConfigurationResponse extends S.Class<PutSigningConfigurationResponse>("PutSigningConfigurationResponse")({signingConfiguration: S.optional(SigningConfiguration)}) {}
export class RegisterPullTimeUpdateExclusionResponse extends S.Class<RegisterPullTimeUpdateExclusionResponse>("RegisterPullTimeUpdateExclusionResponse")({principalArn: S.optional(S.String), createdAt: S.optional(S.Date)}) {}
export class SetRepositoryPolicyResponse extends S.Class<SetRepositoryPolicyResponse>("SetRepositoryPolicyResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), policyText: S.optional(S.String)}) {}
export class ImageScanStatus extends S.Class<ImageScanStatus>("ImageScanStatus")({status: S.optional(S.String), description: S.optional(S.String)}) {}
export class StartImageScanResponse extends S.Class<StartImageScanResponse>("StartImageScanResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), imageId: S.optional(ImageIdentifier), imageScanStatus: S.optional(ImageScanStatus)}) {}
export class StartLifecyclePolicyPreviewResponse extends S.Class<StartLifecyclePolicyPreviewResponse>("StartLifecyclePolicyPreviewResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), lifecyclePolicyText: S.optional(S.String), status: S.optional(S.String)}) {}
export class UpdateImageStorageClassResponse extends S.Class<UpdateImageStorageClassResponse>("UpdateImageStorageClassResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), imageId: S.optional(ImageIdentifier), imageStatus: S.optional(S.String)}) {}
export class UpdatePullThroughCacheRuleResponse extends S.Class<UpdatePullThroughCacheRuleResponse>("UpdatePullThroughCacheRuleResponse")({ecrRepositoryPrefix: S.optional(S.String), registryId: S.optional(S.String), updatedAt: S.optional(S.Date), credentialArn: S.optional(S.String), customRoleArn: S.optional(S.String), upstreamRepositoryPrefix: S.optional(S.String)}) {}
export class UpdateRepositoryCreationTemplateResponse extends S.Class<UpdateRepositoryCreationTemplateResponse>("UpdateRepositoryCreationTemplateResponse")({registryId: S.optional(S.String), repositoryCreationTemplate: S.optional(RepositoryCreationTemplate)}) {}
export class UploadLayerPartResponse extends S.Class<UploadLayerPartResponse>("UploadLayerPartResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), uploadId: S.optional(S.String), lastByteReceived: S.optional(S.Number)}) {}
export class ValidatePullThroughCacheRuleResponse extends S.Class<ValidatePullThroughCacheRuleResponse>("ValidatePullThroughCacheRuleResponse")({ecrRepositoryPrefix: S.optional(S.String), registryId: S.optional(S.String), upstreamRegistryUrl: S.optional(S.String), credentialArn: S.optional(S.String), customRoleArn: S.optional(S.String), upstreamRepositoryPrefix: S.optional(S.String), isValid: S.optional(S.Boolean), failure: S.optional(S.String)}) {}
export class Layer extends S.Class<Layer>("Layer")({layerDigest: S.optional(S.String), layerAvailability: S.optional(S.String), layerSize: S.optional(S.Number), mediaType: S.optional(S.String)}) {}
export const LayerList = S.Array(Layer);
export class LayerFailure extends S.Class<LayerFailure>("LayerFailure")({layerDigest: S.optional(S.String), failureCode: S.optional(S.String), failureReason: S.optional(S.String)}) {}
export const LayerFailureList = S.Array(LayerFailure);
export const ImageList = S.Array(Image);
export class ImageFailure extends S.Class<ImageFailure>("ImageFailure")({imageId: S.optional(ImageIdentifier), failureCode: S.optional(S.String), failureReason: S.optional(S.String)}) {}
export const ImageFailureList = S.Array(ImageFailure);
export class RepositoryScanningConfiguration extends S.Class<RepositoryScanningConfiguration>("RepositoryScanningConfiguration")({repositoryArn: S.optional(S.String), repositoryName: S.optional(S.String), scanOnPush: S.optional(S.Boolean), scanFrequency: S.optional(S.String), appliedScanFilters: S.optional(ScanningRepositoryFilterList)}) {}
export const RepositoryScanningConfigurationList = S.Array(RepositoryScanningConfiguration);
export class RepositoryScanningConfigurationFailure extends S.Class<RepositoryScanningConfigurationFailure>("RepositoryScanningConfigurationFailure")({repositoryName: S.optional(S.String), failureCode: S.optional(S.String), failureReason: S.optional(S.String)}) {}
export const RepositoryScanningConfigurationFailureList = S.Array(RepositoryScanningConfigurationFailure);
export class ImageReplicationStatus extends S.Class<ImageReplicationStatus>("ImageReplicationStatus")({region: S.optional(S.String), registryId: S.optional(S.String), status: S.optional(S.String), failureCode: S.optional(S.String)}) {}
export const ImageReplicationStatusList = S.Array(ImageReplicationStatus);
export class ImageSigningStatus extends S.Class<ImageSigningStatus>("ImageSigningStatus")({signingProfileArn: S.optional(S.String), failureCode: S.optional(S.String), failureReason: S.optional(S.String), status: S.optional(S.String)}) {}
export const ImageSigningStatusList = S.Array(ImageSigningStatus);
export class PullThroughCacheRule extends S.Class<PullThroughCacheRule>("PullThroughCacheRule")({ecrRepositoryPrefix: S.optional(S.String), upstreamRegistryUrl: S.optional(S.String), createdAt: S.optional(S.Date), registryId: S.optional(S.String), credentialArn: S.optional(S.String), customRoleArn: S.optional(S.String), upstreamRepositoryPrefix: S.optional(S.String), upstreamRegistry: S.optional(S.String), updatedAt: S.optional(S.Date)}) {}
export const PullThroughCacheRuleList = S.Array(PullThroughCacheRule);
export class AuthorizationData extends S.Class<AuthorizationData>("AuthorizationData")({authorizationToken: S.optional(S.String), expiresAt: S.optional(S.Date), proxyEndpoint: S.optional(S.String)}) {}
export const AuthorizationDataList = S.Array(AuthorizationData);
export class BatchCheckLayerAvailabilityResponse extends S.Class<BatchCheckLayerAvailabilityResponse>("BatchCheckLayerAvailabilityResponse")({layers: S.optional(LayerList), failures: S.optional(LayerFailureList)}) {}
export class BatchDeleteImageResponse extends S.Class<BatchDeleteImageResponse>("BatchDeleteImageResponse")({imageIds: S.optional(ImageIdentifierList), failures: S.optional(ImageFailureList)}) {}
export class BatchGetImageResponse extends S.Class<BatchGetImageResponse>("BatchGetImageResponse")({images: S.optional(ImageList), failures: S.optional(ImageFailureList)}) {}
export class BatchGetRepositoryScanningConfigurationResponse extends S.Class<BatchGetRepositoryScanningConfigurationResponse>("BatchGetRepositoryScanningConfigurationResponse")({scanningConfigurations: S.optional(RepositoryScanningConfigurationList), failures: S.optional(RepositoryScanningConfigurationFailureList)}) {}
export class CreateRepositoryResponse extends S.Class<CreateRepositoryResponse>("CreateRepositoryResponse")({repository: S.optional(Repository)}) {}
export class CreateRepositoryCreationTemplateResponse extends S.Class<CreateRepositoryCreationTemplateResponse>("CreateRepositoryCreationTemplateResponse")({registryId: S.optional(S.String), repositoryCreationTemplate: S.optional(RepositoryCreationTemplate)}) {}
export class DeleteRepositoryResponse extends S.Class<DeleteRepositoryResponse>("DeleteRepositoryResponse")({repository: S.optional(Repository)}) {}
export class DeleteRepositoryCreationTemplateResponse extends S.Class<DeleteRepositoryCreationTemplateResponse>("DeleteRepositoryCreationTemplateResponse")({registryId: S.optional(S.String), repositoryCreationTemplate: S.optional(RepositoryCreationTemplate)}) {}
export class DescribeImageReplicationStatusResponse extends S.Class<DescribeImageReplicationStatusResponse>("DescribeImageReplicationStatusResponse")({repositoryName: S.optional(S.String), imageId: S.optional(ImageIdentifier), replicationStatuses: S.optional(ImageReplicationStatusList)}) {}
export class DescribeImageSigningStatusResponse extends S.Class<DescribeImageSigningStatusResponse>("DescribeImageSigningStatusResponse")({repositoryName: S.optional(S.String), imageId: S.optional(ImageIdentifier), registryId: S.optional(S.String), signingStatuses: S.optional(ImageSigningStatusList)}) {}
export class DescribePullThroughCacheRulesResponse extends S.Class<DescribePullThroughCacheRulesResponse>("DescribePullThroughCacheRulesResponse")({pullThroughCacheRules: S.optional(PullThroughCacheRuleList), nextToken: S.optional(S.String)}) {}
export class GetAuthorizationTokenResponse extends S.Class<GetAuthorizationTokenResponse>("GetAuthorizationTokenResponse")({authorizationData: S.optional(AuthorizationDataList)}) {}
export class ListImagesResponse extends S.Class<ListImagesResponse>("ListImagesResponse")({imageIds: S.optional(ImageIdentifierList), nextToken: S.optional(S.String)}) {}
export class PutRegistryScanningConfigurationRequest extends S.Class<PutRegistryScanningConfigurationRequest>("PutRegistryScanningConfigurationRequest")({scanType: S.optional(S.String), rules: S.optional(RegistryScanningRuleList)}) {}
export const ImageTagList = S.Array(S.String);
export const FindingSeverityCounts = S.Record({key: S.String, value: S.Number});
export const ReferenceUrlsList = S.Array(S.String);
export const RelatedVulnerabilitiesList = S.Array(S.String);
export class Attribute extends S.Class<Attribute>("Attribute")({key: S.String, value: S.optional(S.String)}) {}
export const AttributeList = S.Array(Attribute);
export class DeleteSigningConfigurationResponse extends S.Class<DeleteSigningConfigurationResponse>("DeleteSigningConfigurationResponse")({registryId: S.optional(S.String), signingConfiguration: S.optional(SigningConfiguration)}) {}
export class DescribeRegistryResponse extends S.Class<DescribeRegistryResponse>("DescribeRegistryResponse")({registryId: S.optional(S.String), replicationConfiguration: S.optional(ReplicationConfiguration)}) {}
export class PutRegistryScanningConfigurationResponse extends S.Class<PutRegistryScanningConfigurationResponse>("PutRegistryScanningConfigurationResponse")({registryScanningConfiguration: S.optional(RegistryScanningConfiguration)}) {}
export class ImageScanFindingsSummary extends S.Class<ImageScanFindingsSummary>("ImageScanFindingsSummary")({imageScanCompletedAt: S.optional(S.Date), vulnerabilitySourceUpdatedAt: S.optional(S.Date), findingSeverityCounts: S.optional(FindingSeverityCounts)}) {}
export class ImageScanFinding extends S.Class<ImageScanFinding>("ImageScanFinding")({name: S.optional(S.String), description: S.optional(S.String), uri: S.optional(S.String), severity: S.optional(S.String), attributes: S.optional(AttributeList)}) {}
export const ImageScanFindingList = S.Array(ImageScanFinding);
export class LifecyclePolicyRuleAction extends S.Class<LifecyclePolicyRuleAction>("LifecyclePolicyRuleAction")({type: S.optional(S.String), targetStorageClass: S.optional(S.String)}) {}
export class TransitioningImageTotalCount extends S.Class<TransitioningImageTotalCount>("TransitioningImageTotalCount")({targetStorageClass: S.optional(S.String), imageTotalCount: S.optional(S.Number)}) {}
export const TransitioningImageTotalCounts = S.Array(TransitioningImageTotalCount);
export const Annotations = S.Record({key: S.String, value: S.String});
export class CvssScore extends S.Class<CvssScore>("CvssScore")({baseScore: S.optional(S.Number), scoringVector: S.optional(S.String), source: S.optional(S.String), version: S.optional(S.String)}) {}
export const CvssScoreList = S.Array(CvssScore);
export class VulnerablePackage extends S.Class<VulnerablePackage>("VulnerablePackage")({arch: S.optional(S.String), epoch: S.optional(S.Number), filePath: S.optional(S.String), name: S.optional(S.String), packageManager: S.optional(S.String), release: S.optional(S.String), sourceLayerHash: S.optional(S.String), version: S.optional(S.String), fixedInVersion: S.optional(S.String)}) {}
export const VulnerablePackagesList = S.Array(VulnerablePackage);
export class Recommendation extends S.Class<Recommendation>("Recommendation")({url: S.optional(S.String), text: S.optional(S.String)}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class ImageDetail extends S.Class<ImageDetail>("ImageDetail")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), imageDigest: S.optional(S.String), imageTags: S.optional(ImageTagList), imageSizeInBytes: S.optional(S.Number), imagePushedAt: S.optional(S.Date), imageScanStatus: S.optional(ImageScanStatus), imageScanFindingsSummary: S.optional(ImageScanFindingsSummary), imageManifestMediaType: S.optional(S.String), artifactMediaType: S.optional(S.String), lastRecordedPullTime: S.optional(S.Date), subjectManifestDigest: S.optional(S.String), imageStatus: S.optional(S.String), lastArchivedAt: S.optional(S.Date), lastActivatedAt: S.optional(S.Date)}) {}
export const ImageDetailList = S.Array(ImageDetail);
export const ImageTagsList = S.Array(S.String);
export class LifecyclePolicyPreviewResult extends S.Class<LifecyclePolicyPreviewResult>("LifecyclePolicyPreviewResult")({imageTags: S.optional(ImageTagList), imageDigest: S.optional(S.String), imagePushedAt: S.optional(S.Date), action: S.optional(LifecyclePolicyRuleAction), appliedRulePriority: S.optional(S.Number), storageClass: S.optional(S.String)}) {}
export const LifecyclePolicyPreviewResultList = S.Array(LifecyclePolicyPreviewResult);
export class LifecyclePolicyPreviewSummary extends S.Class<LifecyclePolicyPreviewSummary>("LifecyclePolicyPreviewSummary")({expiringImageTotalCount: S.optional(S.Number), transitioningImageTotalCounts: S.optional(TransitioningImageTotalCounts)}) {}
export class ImageReferrer extends S.Class<ImageReferrer>("ImageReferrer")({digest: S.String, mediaType: S.String, artifactType: S.optional(S.String), size: S.Number, annotations: S.optional(Annotations), artifactStatus: S.optional(S.String)}) {}
export const ImageReferrerList = S.Array(ImageReferrer);
export class PackageVulnerabilityDetails extends S.Class<PackageVulnerabilityDetails>("PackageVulnerabilityDetails")({cvss: S.optional(CvssScoreList), referenceUrls: S.optional(ReferenceUrlsList), relatedVulnerabilities: S.optional(RelatedVulnerabilitiesList), source: S.optional(S.String), sourceUrl: S.optional(S.String), vendorCreatedAt: S.optional(S.Date), vendorSeverity: S.optional(S.String), vendorUpdatedAt: S.optional(S.Date), vulnerabilityId: S.optional(S.String), vulnerablePackages: S.optional(VulnerablePackagesList)}) {}
export class Remediation extends S.Class<Remediation>("Remediation")({recommendation: S.optional(Recommendation)}) {}
export class DescribeImagesResponse extends S.Class<DescribeImagesResponse>("DescribeImagesResponse")({imageDetails: S.optional(ImageDetailList), nextToken: S.optional(S.String)}) {}
export class AwsEcrContainerImageDetails extends S.Class<AwsEcrContainerImageDetails>("AwsEcrContainerImageDetails")({architecture: S.optional(S.String), author: S.optional(S.String), imageHash: S.optional(S.String), imageTags: S.optional(ImageTagsList), platform: S.optional(S.String), pushedAt: S.optional(S.Date), lastInUseAt: S.optional(S.Date), inUseCount: S.optional(S.Number), registry: S.optional(S.String), repositoryName: S.optional(S.String)}) {}
export class CvssScoreAdjustment extends S.Class<CvssScoreAdjustment>("CvssScoreAdjustment")({metric: S.optional(S.String), reason: S.optional(S.String)}) {}
export const CvssScoreAdjustmentList = S.Array(CvssScoreAdjustment);
export class GetLifecyclePolicyPreviewResponse extends S.Class<GetLifecyclePolicyPreviewResponse>("GetLifecyclePolicyPreviewResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), lifecyclePolicyText: S.optional(S.String), status: S.optional(S.String), nextToken: S.optional(S.String), previewResults: S.optional(LifecyclePolicyPreviewResultList), summary: S.optional(LifecyclePolicyPreviewSummary)}) {}
export class ListImageReferrersResponse extends S.Class<ListImageReferrersResponse>("ListImageReferrersResponse")({referrers: S.optional(ImageReferrerList), nextToken: S.optional(S.String)}) {}
export class ResourceDetails extends S.Class<ResourceDetails>("ResourceDetails")({awsEcrContainerImage: S.optional(AwsEcrContainerImageDetails)}) {}
export class CvssScoreDetails extends S.Class<CvssScoreDetails>("CvssScoreDetails")({adjustments: S.optional(CvssScoreAdjustmentList), score: S.optional(S.Number), scoreSource: S.optional(S.String), scoringVector: S.optional(S.String), version: S.optional(S.String)}) {}
export class Resource extends S.Class<Resource>("Resource")({details: S.optional(ResourceDetails), id: S.optional(S.String), tags: S.optional(Tags), type: S.optional(S.String)}) {}
export const ResourceList = S.Array(Resource);
export class ScoreDetails extends S.Class<ScoreDetails>("ScoreDetails")({cvss: S.optional(CvssScoreDetails)}) {}
export class EnhancedImageScanFinding extends S.Class<EnhancedImageScanFinding>("EnhancedImageScanFinding")({awsAccountId: S.optional(S.String), description: S.optional(S.String), findingArn: S.optional(S.String), firstObservedAt: S.optional(S.Date), lastObservedAt: S.optional(S.Date), packageVulnerabilityDetails: S.optional(PackageVulnerabilityDetails), remediation: S.optional(Remediation), resources: S.optional(ResourceList), score: S.optional(S.Number), scoreDetails: S.optional(ScoreDetails), severity: S.optional(S.String), status: S.optional(S.String), title: S.optional(S.String), type: S.optional(S.String), updatedAt: S.optional(S.Date), fixAvailable: S.optional(S.String), exploitAvailable: S.optional(S.String)}) {}
export const EnhancedImageScanFindingList = S.Array(EnhancedImageScanFinding);
export class ImageScanFindings extends S.Class<ImageScanFindings>("ImageScanFindings")({imageScanCompletedAt: S.optional(S.Date), vulnerabilitySourceUpdatedAt: S.optional(S.Date), findingSeverityCounts: S.optional(FindingSeverityCounts), findings: S.optional(ImageScanFindingList), enhancedFindings: S.optional(EnhancedImageScanFindingList)}) {}
export class DescribeImageScanFindingsResponse extends S.Class<DescribeImageScanFindingsResponse>("DescribeImageScanFindingsResponse")({registryId: S.optional(S.String), repositoryName: S.optional(S.String), imageId: S.optional(ImageIdentifier), imageScanStatus: S.optional(ImageScanStatus), imageScanFindings: S.optional(ImageScanFindings), nextToken: S.optional(S.String)}) {}

//# Errors
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class InvalidTagParameterException extends S.TaggedError<InvalidTagParameterException>()("InvalidTagParameterException", {}) {};
export class RegistryPolicyNotFoundException extends S.TaggedError<RegistryPolicyNotFoundException>()("RegistryPolicyNotFoundException", {}) {};
export class ServerException extends S.TaggedError<ServerException>()("ServerException", {}) {};
export class RepositoryNotFoundException extends S.TaggedError<RepositoryNotFoundException>()("RepositoryNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class LifecyclePolicyNotFoundException extends S.TaggedError<LifecyclePolicyNotFoundException>()("LifecyclePolicyNotFoundException", {}) {};
export class RepositoryPolicyNotFoundException extends S.TaggedError<RepositoryPolicyNotFoundException>()("RepositoryPolicyNotFoundException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {}) {};
export class PullThroughCacheRuleNotFoundException extends S.TaggedError<PullThroughCacheRuleNotFoundException>()("PullThroughCacheRuleNotFoundException", {}) {};
export class EmptyUploadException extends S.TaggedError<EmptyUploadException>()("EmptyUploadException", {message: S.optional(S.String)}) {};
export class KmsException extends S.TaggedError<KmsException>()("KmsException", {}) {};
export class TemplateNotFoundException extends S.TaggedError<TemplateNotFoundException>()("TemplateNotFoundException", {}) {};
export class ExclusionNotFoundException extends S.TaggedError<ExclusionNotFoundException>()("ExclusionNotFoundException", {message: S.optional(S.String)}) {};
export class ImageNotFoundException extends S.TaggedError<ImageNotFoundException>()("ImageNotFoundException", {}) {};
export class LayerInaccessibleException extends S.TaggedError<LayerInaccessibleException>()("LayerInaccessibleException", {message: S.optional(S.String)}) {};
export class SigningConfigurationNotFoundException extends S.TaggedError<SigningConfigurationNotFoundException>()("SigningConfigurationNotFoundException", {message: S.optional(S.String)}) {};
export class ImageAlreadyExistsException extends S.TaggedError<ImageAlreadyExistsException>()("ImageAlreadyExistsException", {message: S.optional(S.String)}) {};
export class ExclusionAlreadyExistsException extends S.TaggedError<ExclusionAlreadyExistsException>()("ExclusionAlreadyExistsException", {message: S.optional(S.String)}) {};
export class ImageArchivedException extends S.TaggedError<ImageArchivedException>()("ImageArchivedException", {message: S.optional(S.String)}) {};
export class LifecyclePolicyPreviewInProgressException extends S.TaggedError<LifecyclePolicyPreviewInProgressException>()("LifecyclePolicyPreviewInProgressException", {message: S.optional(S.String)}) {};
export class SecretNotFoundException extends S.TaggedError<SecretNotFoundException>()("SecretNotFoundException", {message: S.optional(S.String)}) {};
export class InvalidLayerPartException extends S.TaggedError<InvalidLayerPartException>()("InvalidLayerPartException", {registryId: S.optional(S.String), repositoryName: S.optional(S.String), uploadId: S.optional(S.String), lastValidByteReceived: S.optional(S.Number), message: S.optional(S.String)}) {};
export class UnableToGetUpstreamImageException extends S.TaggedError<UnableToGetUpstreamImageException>()("UnableToGetUpstreamImageException", {message: S.optional(S.String)}) {};
export class InvalidLayerException extends S.TaggedError<InvalidLayerException>()("InvalidLayerException", {message: S.optional(S.String)}) {};
export class PullThroughCacheRuleAlreadyExistsException extends S.TaggedError<PullThroughCacheRuleAlreadyExistsException>()("PullThroughCacheRuleAlreadyExistsException", {message: S.optional(S.String)}) {};
export class UnableToAccessSecretException extends S.TaggedError<UnableToAccessSecretException>()("UnableToAccessSecretException", {}) {};
export class RepositoryAlreadyExistsException extends S.TaggedError<RepositoryAlreadyExistsException>()("RepositoryAlreadyExistsException", {message: S.optional(S.String)}) {};
export class TemplateAlreadyExistsException extends S.TaggedError<TemplateAlreadyExistsException>()("TemplateAlreadyExistsException", {message: S.optional(S.String)}) {};
export class RepositoryNotEmptyException extends S.TaggedError<RepositoryNotEmptyException>()("RepositoryNotEmptyException", {message: S.optional(S.String)}) {};
export class LayersNotFoundException extends S.TaggedError<LayersNotFoundException>()("LayersNotFoundException", {message: S.optional(S.String)}) {};
export class ImageDigestDoesNotMatchException extends S.TaggedError<ImageDigestDoesNotMatchException>()("ImageDigestDoesNotMatchException", {message: S.optional(S.String)}) {};
export class UnsupportedImageTypeException extends S.TaggedError<UnsupportedImageTypeException>()("UnsupportedImageTypeException", {message: S.optional(S.String)}) {};
export class ImageStorageClassUpdateNotSupportedException extends S.TaggedError<ImageStorageClassUpdateNotSupportedException>()("ImageStorageClassUpdateNotSupportedException", {message: S.optional(S.String)}) {};
export class UnableToDecryptSecretValueException extends S.TaggedError<UnableToDecryptSecretValueException>()("UnableToDecryptSecretValueException", {}) {};
export class UploadNotFoundException extends S.TaggedError<UploadNotFoundException>()("UploadNotFoundException", {message: S.optional(S.String)}) {};
export class LayerAlreadyExistsException extends S.TaggedError<LayerAlreadyExistsException>()("LayerAlreadyExistsException", {message: S.optional(S.String)}) {};
export class UnableToGetUpstreamLayerException extends S.TaggedError<UnableToGetUpstreamLayerException>()("UnableToGetUpstreamLayerException", {message: S.optional(S.String)}) {};
export class ImageTagAlreadyExistsException extends S.TaggedError<ImageTagAlreadyExistsException>()("ImageTagAlreadyExistsException", {message: S.optional(S.String)}) {};
export class BlockedByOrganizationPolicyException extends S.TaggedError<BlockedByOrganizationPolicyException>()("BlockedByOrganizationPolicyException", {message: S.optional(S.String)}) {};
export class LayerPartTooSmallException extends S.TaggedError<LayerPartTooSmallException>()("LayerPartTooSmallException", {message: S.optional(S.String)}) {};
export class UnsupportedUpstreamRegistryException extends S.TaggedError<UnsupportedUpstreamRegistryException>()("UnsupportedUpstreamRegistryException", {message: S.optional(S.String)}) {};
export class LifecyclePolicyPreviewNotFoundException extends S.TaggedError<LifecyclePolicyPreviewNotFoundException>()("LifecyclePolicyPreviewNotFoundException", {message: S.optional(S.String)}) {};
export class ReferencedImagesNotFoundException extends S.TaggedError<ReferencedImagesNotFoundException>()("ReferencedImagesNotFoundException", {message: S.optional(S.String)}) {};
export class ScanNotFoundException extends S.TaggedError<ScanNotFoundException>()("ScanNotFoundException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Describes image repositories in a registry.
 */export const describeRepositories = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DescribeRepositories" }, DescribeRepositoriesRequest, DescribeRepositoriesResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns details about the repository creation templates in a registry. The
 * `prefixes` request parameter can be used to return the details for a
 * specific repository creation template.
 */export const describeRepositoryCreationTemplates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DescribeRepositoryCreationTemplates" }, DescribeRepositoryCreationTemplatesRequest, DescribeRepositoryCreationTemplatesResponse, [InvalidParameterException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the account setting value for the specified setting name.
 */export const getAccountSetting = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.GetAccountSetting" }, GetAccountSettingRequest, GetAccountSettingResponse, [InvalidParameterException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the lifecycle policy for the specified repository.
 */export const getLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy" }, GetLifecyclePolicyRequest, GetLifecyclePolicyResponse, [InvalidParameterException, LifecyclePolicyNotFoundException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the permissions policy for a registry.
 */export const getRegistryPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy" }, GetRegistryPolicyRequest, GetRegistryPolicyResponse, [InvalidParameterException, RegistryPolicyNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the scanning configuration for a registry.
 */export const getRegistryScanningConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration" }, GetRegistryScanningConfigurationRequest, GetRegistryScanningConfigurationResponse, [InvalidParameterException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the repository policy for the specified repository.
 */export const getRepositoryPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy" }, GetRepositoryPolicyRequest, GetRepositoryPolicyResponse, [InvalidParameterException, RepositoryNotFoundException, RepositoryPolicyNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the IAM principals that are excluded from having their image pull times recorded.
 */export const listPullTimeUpdateExclusions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.ListPullTimeUpdateExclusions" }, ListPullTimeUpdateExclusionsRequest, ListPullTimeUpdateExclusionsResponse, [InvalidParameterException, LimitExceededException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the tags for an Amazon ECR resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows you to change the basic scan type version or registry policy scope.
 */export const putAccountSetting = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.PutAccountSetting" }, PutAccountSettingRequest, PutAccountSettingResponse, [InvalidParameterException, LimitExceededException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The `PutImageScanningConfiguration` API is being deprecated, in favor
 * of specifying the image scanning configuration at the registry level. For more
 * information, see PutRegistryScanningConfiguration.
 * 
 * 
 * 
 * 
 * Updates the image scanning configuration for the specified repository.
 */export const putImageScanningConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration" }, PutImageScanningConfigurationRequest, PutImageScanningConfigurationResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the image tag mutability settings for the specified repository. For more
 * information, see Image tag
 * mutability in the *Amazon Elastic Container Registry User Guide*.
 */export const putImageTagMutability = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability" }, PutImageTagMutabilityRequest, PutImageTagMutabilityResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the lifecycle policy for the specified repository. For more
 * information, see Lifecycle policy
 * template.
 */export const putLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy" }, PutLifecyclePolicyRequest, PutLifecyclePolicyResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the permissions policy for your registry.
 * 
 * 
 * A registry policy is used to specify permissions for another Amazon Web Services account and is used
 * when configuring cross-account replication. For more information, see Registry permissions in the *Amazon Elastic Container Registry User Guide*.
 */export const putRegistryPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy" }, PutRegistryPolicyRequest, PutRegistryPolicyResponse, [InvalidParameterException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the replication configuration for a registry. The existing
 * replication configuration for a repository can be retrieved with the DescribeRegistry API action. The first time the
 * PutReplicationConfiguration API is called, a service-linked IAM role is created in
 * your account for the replication process. For more information, see Using
 * service-linked roles for Amazon ECR in the *Amazon Elastic Container Registry User Guide*.
 * For more information on the custom role for replication, see Creating an IAM role for replication.
 * 
 * 
 * 
 * 
 * When configuring cross-account replication, the destination account must grant the
 * source account permission to replicate. This permission is controlled using a
 * registry permissions policy. For more information, see PutRegistryPolicy.
 */export const putReplicationConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration" }, PutReplicationConfigurationRequest, PutReplicationConfigurationResponse, [InvalidParameterException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the registry's signing configuration, which defines
 * rules for automatically signing images with Amazon Web Services Signer.
 * 
 * 
 * For more information, see Managed signing in the
 * *Amazon Elastic Container Registry User Guide*.
 * 
 * 
 * 
 * 
 * To successfully generate a signature, the IAM principal pushing images must have
 * permission to sign payloads with the Amazon Web Services Signer signing profile referenced in the signing
 * configuration.
 */export const putSigningConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.PutSigningConfiguration" }, PutSigningConfigurationRequest, PutSigningConfigurationResponse, [InvalidParameterException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Applies a repository policy to the specified repository to control access permissions.
 * For more information, see Amazon ECR Repository
 * policies in the *Amazon Elastic Container Registry User Guide*.
 */export const setRepositoryPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy" }, SetRepositoryPolicyRequest, SetRepositoryPolicyResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes specified tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InvalidParameterException, InvalidTagParameterException, RepositoryNotFoundException, ServerException, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Validates an existing pull through cache rule for an upstream registry that requires
 * authentication. This will retrieve the contents of the Amazon Web Services Secrets Manager secret, verify the
 * syntax, and then validate that authentication to the upstream registry is
 * successful.
 */export const validatePullThroughCacheRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.ValidatePullThroughCacheRule" }, ValidatePullThroughCacheRuleRequest, ValidatePullThroughCacheRuleResponse, [InvalidParameterException, PullThroughCacheRuleNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Checks the availability of one or more image layers in a repository.
 * 
 * 
 * When an image is pushed to a repository, each image layer is checked to verify if it
 * has been uploaded before. If it has been uploaded, then the image layer is
 * skipped.
 * 
 * 
 * 
 * 
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */export const batchCheckLayerAvailability = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability" }, BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a list of specified images within a repository. Images are specified with
 * either an `imageTag` or `imageDigest`.
 * 
 * 
 * You can remove a tag from an image by specifying the image's tag in your request. When
 * you remove the last tag from an image, the image is deleted from your repository.
 * 
 * 
 * You can completely delete an image (and all of its tags) by specifying the image's
 * digest in your request.
 */export const batchDeleteImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage" }, BatchDeleteImageRequest, BatchDeleteImageResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the scanning configuration for one or more repositories.
 */export const batchGetRepositoryScanningConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration" }, BatchGetRepositoryScanningConfigurationRequest, BatchGetRepositoryScanningConfigurationResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the lifecycle policy associated with the specified repository.
 */export const deleteLifecyclePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy" }, DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse, [InvalidParameterException, LifecyclePolicyNotFoundException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a pull through cache rule.
 */export const deletePullThroughCacheRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule" }, DeletePullThroughCacheRuleRequest, DeletePullThroughCacheRuleResponse, [InvalidParameterException, PullThroughCacheRuleNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the registry permissions policy.
 */export const deleteRegistryPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy" }, DeleteRegistryPolicyRequest, DeleteRegistryPolicyResponse, [InvalidParameterException, RegistryPolicyNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a repository creation template.
 */export const deleteRepositoryCreationTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryCreationTemplate" }, DeleteRepositoryCreationTemplateRequest, DeleteRepositoryCreationTemplateResponse, [InvalidParameterException, ServerException, TemplateNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the repository policy associated with the specified repository.
 */export const deleteRepositoryPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy" }, DeleteRepositoryPolicyRequest, DeleteRepositoryPolicyResponse, [InvalidParameterException, RepositoryNotFoundException, RepositoryPolicyNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a principal from the pull time update exclusion list for a registry. Once removed, Amazon ECR will resume updating the pull time if the specified principal pulls an image.
 */export const deregisterPullTimeUpdateExclusion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DeregisterPullTimeUpdateExclusion" }, DeregisterPullTimeUpdateExclusionRequest, DeregisterPullTimeUpdateExclusionResponse, [ExclusionNotFoundException, InvalidParameterException, LimitExceededException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the replication status for a specified image.
 */export const describeImageReplicationStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus" }, DescribeImageReplicationStatusRequest, DescribeImageReplicationStatusResponse, [ImageNotFoundException, InvalidParameterException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the signing status for a specified image. If the image matched
 * signing rules that reference different signing profiles, a status is returned
 * for each profile.
 * 
 * 
 * For more information, see Managed signing in the
 * *Amazon Elastic Container Registry User Guide*.
 */export const describeImageSigningStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DescribeImageSigningStatus" }, DescribeImageSigningStatusRequest, DescribeImageSigningStatusResponse, [ImageNotFoundException, InvalidParameterException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the pull through cache rules for a registry.
 */export const describePullThroughCacheRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules" }, DescribePullThroughCacheRulesRequest, DescribePullThroughCacheRulesResponse, [InvalidParameterException, PullThroughCacheRuleNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves an authorization token. An authorization token represents your IAM
 * authentication credentials and can be used to access any Amazon ECR registry that your IAM
 * principal has access to. The authorization token is valid for 12 hours.
 * 
 * 
 * The `authorizationToken` returned is a base64 encoded string that can be
 * decoded and used in a `docker login` command to authenticate to a registry.
 * The CLI offers an `get-login-password` command that simplifies the login
 * process. For more information, see Registry
 * authentication in the *Amazon Elastic Container Registry User Guide*.
 */export const getAuthorizationToken = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken" }, GetAuthorizationTokenRequest, GetAuthorizationTokenResponse, [InvalidParameterException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the registry's signing configuration, which defines
 * rules for automatically signing images using Amazon Web Services Signer.
 * 
 * 
 * For more information, see Managed signing in the
 * *Amazon Elastic Container Registry User Guide*.
 */export const getSigningConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.GetSigningConfiguration" }, GetSigningConfigurationRequest, GetSigningConfigurationResponse, [InvalidParameterException, ServerException, SigningConfigurationNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Notifies Amazon ECR that you intend to upload an image layer.
 * 
 * 
 * When an image is pushed, the InitiateLayerUpload API is called once per image layer
 * that has not already been uploaded. Whether or not an image layer has been uploaded is
 * determined by the BatchCheckLayerAvailability API action.
 * 
 * 
 * 
 * 
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */export const initiateLayerUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload" }, InitiateLayerUploadRequest, InitiateLayerUploadResponse, [InvalidParameterException, KmsException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the image IDs for the specified repository.
 * 
 * 
 * You can filter images based on whether or not they are tagged by using the
 * `tagStatus` filter and specifying either `TAGGED`,
 * `UNTAGGED` or `ANY`. For example, you can filter your results
 * to return only `UNTAGGED` images and then pipe that result to a BatchDeleteImage operation to delete them. Or, you can filter your
 * results to return only `TAGGED` images to list all of the tags in your
 * repository.
 */export const listImages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.ListImages" }, ListImagesRequest, ListImagesResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds an IAM principal to the pull time update exclusion list for a registry. Amazon ECR will not record the pull time if an excluded principal pulls an image.
 */export const registerPullTimeUpdateExclusion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.RegisterPullTimeUpdateExclusion" }, RegisterPullTimeUpdateExclusionRequest, RegisterPullTimeUpdateExclusionResponse, [ExclusionAlreadyExistsException, InvalidParameterException, LimitExceededException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a preview of a lifecycle policy for the specified repository. This allows you
 * to see the results before associating the lifecycle policy with the repository.
 */export const startLifecyclePolicyPreview = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview" }, StartLifecyclePolicyPreviewRequest, StartLifecyclePolicyPreviewResponse, [InvalidParameterException, LifecyclePolicyNotFoundException, LifecyclePolicyPreviewInProgressException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds specified tags to a resource with the specified ARN. Existing tags on a resource
 * are not changed if they are not specified in the request parameters.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.TagResource" }, TagResourceRequest, TagResourceResponse, [InvalidParameterException, InvalidTagParameterException, RepositoryNotFoundException, ServerException, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing repository creation template.
 */export const updateRepositoryCreationTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.UpdateRepositoryCreationTemplate" }, UpdateRepositoryCreationTemplateRequest, UpdateRepositoryCreationTemplateResponse, [InvalidParameterException, ServerException, TemplateNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets detailed information for an image. Images are specified with either an
 * `imageTag` or `imageDigest`.
 * 
 * 
 * When an image is pulled, the BatchGetImage API is called once to retrieve the image
 * manifest.
 */export const batchGetImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.BatchGetImage" }, BatchGetImageRequest, BatchGetImageResponse, [InvalidParameterException, LimitExceededException, RepositoryNotFoundException, ServerException, UnableToGetUpstreamImageException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a repository. For more information, see Amazon ECR repositories in the
 * *Amazon Elastic Container Registry User Guide*.
 */export const createRepository = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.CreateRepository" }, CreateRepositoryRequest, CreateRepositoryResponse, [InvalidParameterException, InvalidTagParameterException, KmsException, LimitExceededException, RepositoryAlreadyExistsException, ServerException, TooManyTagsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a repository creation template. This template is used to define the settings
 * for repositories created by Amazon ECR on your behalf. For example, repositories created
 * through pull through cache actions. For more information, see Private
 * repository creation templates in the
 * *Amazon Elastic Container Registry User Guide*.
 */export const createRepositoryCreationTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.CreateRepositoryCreationTemplate" }, CreateRepositoryCreationTemplateRequest, CreateRepositoryCreationTemplateResponse, [InvalidParameterException, LimitExceededException, ServerException, TemplateAlreadyExistsException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a repository. If the repository isn't empty, you must either delete the
 * contents of the repository or use the `force` option to delete the repository
 * and have Amazon ECR delete all of its contents on your behalf.
 */export const deleteRepository = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DeleteRepository" }, DeleteRepositoryRequest, DeleteRepositoryResponse, [InvalidParameterException, KmsException, RepositoryNotEmptyException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the registry's signing configuration. Images pushed after deletion of the signing
 * configuration will no longer be automatically signed.
 * 
 * 
 * For more information, see Managed signing in the
 * *Amazon Elastic Container Registry User Guide*.
 * 
 * 
 * 
 * 
 * Deleting the signing configuration does not affect existing image signatures.
 */export const deleteSigningConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DeleteSigningConfiguration" }, DeleteSigningConfigurationRequest, DeleteSigningConfigurationResponse, [ServerException, SigningConfigurationNotFoundException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the settings for a registry. The replication configuration for a repository
 * can be created or updated with the PutReplicationConfiguration API
 * action.
 */export const describeRegistry = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DescribeRegistry" }, DescribeRegistryRequest, DescribeRegistryResponse, [InvalidParameterException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a basic image vulnerability scan.
 * 
 * 
 * A basic image scan can only be started once per 24 hours on an individual image. This
 * limit includes if an image was scanned on initial push. You can start up to 100,000
 * basic scans per 24 hours. This limit includes both scans on initial push and scans
 * initiated by the StartImageScan API. For more information, see Basic scanning in the *Amazon Elastic Container Registry User Guide*.
 */export const startImageScan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.StartImageScan" }, StartImageScanRequest, StartImageScanResponse, [ImageArchivedException, ImageNotFoundException, InvalidParameterException, LimitExceededException, RepositoryNotFoundException, ServerException, UnsupportedImageTypeException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Transitions an image between storage classes. You can transition images from Amazon ECR standard storage class to Amazon ECR archival storage class for long-term storage, or restore archived images back to Amazon ECR standard.
 */export const updateImageStorageClass = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.UpdateImageStorageClass" }, UpdateImageStorageClassRequest, UpdateImageStorageClassResponse, [ImageNotFoundException, ImageStorageClassUpdateNotSupportedException, InvalidParameterException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing pull through cache rule.
 */export const updatePullThroughCacheRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.UpdatePullThroughCacheRule" }, UpdatePullThroughCacheRuleRequest, UpdatePullThroughCacheRuleResponse, [InvalidParameterException, PullThroughCacheRuleNotFoundException, SecretNotFoundException, ServerException, UnableToAccessSecretException, UnableToDecryptSecretValueException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Uploads an image layer part to Amazon ECR.
 * 
 * 
 * When an image is pushed, each new image layer is uploaded in parts. The maximum size
 * of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API
 * is called once per each new image layer part.
 * 
 * 
 * 
 * 
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */export const uploadLayerPart = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.UploadLayerPart" }, UploadLayerPartRequest, UploadLayerPartResponse, [InvalidLayerPartException, InvalidParameterException, KmsException, LimitExceededException, RepositoryNotFoundException, ServerException, UploadNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns metadata about the images in a repository.
 * 
 * 
 * 
 * 
 * Starting with Docker version 1.9, the Docker client compresses image layers before
 * pushing them to a V2 Docker registry. The output of the `docker images`
 * command shows the uncompressed image size. Therefore, Docker might return a larger
 * image than the image shown in the Amazon Web Services Management Console.
 * 
 * 
 * 
 * 
 * 
 * 
 * The new version of Amazon ECR
 * *Basic Scanning* doesn't use the ImageDetail$imageScanFindingsSummary and ImageDetail$imageScanStatus attributes from the API response to
 * return scan results. Use the DescribeImageScanFindings API
 * instead. For more information about Amazon Web Services native basic scanning, see Scan
 * images for software vulnerabilities in Amazon ECR.
 */export const describeImages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DescribeImages" }, DescribeImagesRequest, DescribeImagesResponse, [ImageNotFoundException, InvalidParameterException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can
 * only get URLs for image layers that are referenced in an image.
 * 
 * 
 * When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer
 * that is not already cached.
 * 
 * 
 * 
 * 
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */export const getDownloadUrlForLayer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer" }, GetDownloadUrlForLayerRequest, GetDownloadUrlForLayerResponse, [InvalidParameterException, LayerInaccessibleException, LayersNotFoundException, RepositoryNotFoundException, ServerException, UnableToGetUpstreamLayerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the artifacts associated with a specified subject image.
 */export const listImageReferrers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.ListImageReferrers" }, ListImageReferrersRequest, ListImageReferrersResponse, [InvalidParameterException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the scanning configuration for your private registry.
 */export const putRegistryScanningConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration" }, PutRegistryScanningConfigurationRequest, PutRegistryScanningConfigurationResponse, [BlockedByOrganizationPolicyException, InvalidParameterException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Informs Amazon ECR that the image layer upload has completed for a specified registry,
 * repository name, and upload ID. You can optionally provide a `sha256` digest
 * of the image layer for data validation purposes.
 * 
 * 
 * When an image is pushed, the CompleteLayerUpload API is called once per each new image
 * layer to verify that the upload has completed.
 * 
 * 
 * 
 * 
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */export const completeLayerUpload = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload" }, CompleteLayerUploadRequest, CompleteLayerUploadResponse, [EmptyUploadException, InvalidLayerException, InvalidParameterException, KmsException, LayerAlreadyExistsException, LayerPartTooSmallException, RepositoryNotFoundException, ServerException, UploadNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a pull through cache rule. A pull through cache rule provides a way to cache
 * images from an upstream registry source in your Amazon ECR private registry. For more
 * information, see Using pull through cache
 * rules in the *Amazon Elastic Container Registry User Guide*.
 */export const createPullThroughCacheRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule" }, CreatePullThroughCacheRuleRequest, CreatePullThroughCacheRuleResponse, [InvalidParameterException, LimitExceededException, PullThroughCacheRuleAlreadyExistsException, SecretNotFoundException, ServerException, UnableToAccessSecretException, UnableToDecryptSecretValueException, UnsupportedUpstreamRegistryException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the results of the lifecycle policy preview request for the specified
 * repository.
 */export const getLifecyclePolicyPreview = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview" }, GetLifecyclePolicyPreviewRequest, GetLifecyclePolicyPreviewResponse, [InvalidParameterException, LifecyclePolicyPreviewNotFoundException, RepositoryNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the image manifest and tags associated with an image.
 * 
 * 
 * When an image is pushed and all new image layers have been uploaded, the PutImage API
 * is called once to create or update the image manifest and the tags associated with the
 * image.
 * 
 * 
 * 
 * 
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */export const putImage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.PutImage" }, PutImageRequest, PutImageResponse, [ImageAlreadyExistsException, ImageDigestDoesNotMatchException, ImageTagAlreadyExistsException, InvalidParameterException, KmsException, LayersNotFoundException, LimitExceededException, ReferencedImagesNotFoundException, RepositoryNotFoundException, ServerException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the scan findings for the specified image.
 */export const describeImageScanFindings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-09-21", sdkId: "ECR", sigV4ServiceName: "ecr", name: "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings" }, DescribeImageScanFindingsRequest, DescribeImageScanFindingsResponse, [ImageNotFoundException, InvalidParameterException, RepositoryNotFoundException, ScanNotFoundException, ServerException, ValidationException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
