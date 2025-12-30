import * as S from "effect/Schema"
import { FormatXMLRequest,FormatXMLResponse,FormatAwsXMLError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const JobStatusList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociateAccessGrantsIdentityCenterRequest extends S.Class<AssociateAccessGrantsIdentityCenterRequest>("AssociateAccessGrantsIdentityCenterRequest")({AccountId: H.Header("x-amz-account-id"), IdentityCenterArn: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateAccessGrantsInstanceRequest extends S.Class<CreateAccessGrantsInstanceRequest>("CreateAccessGrantsInstanceRequest")({AccountId: H.Header("x-amz-account-id"), IdentityCenterArn: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateAccessGrantsLocationRequest extends S.Class<CreateAccessGrantsLocationRequest>("CreateAccessGrantsLocationRequest")({AccountId: H.Header("x-amz-account-id"), LocationScope: S.String, IAMRoleArn: S.String, Tags: S.optional(TagList)}) {}
export class DeleteAccessGrantRequest extends S.Class<DeleteAccessGrantRequest>("DeleteAccessGrantRequest")({AccountId: H.Header("x-amz-account-id"), AccessGrantId: S.String}) {}
export class DeleteAccessGrantsInstanceRequest extends S.Class<DeleteAccessGrantsInstanceRequest>("DeleteAccessGrantsInstanceRequest")({AccountId: H.Header("x-amz-account-id")}) {}
export class DeleteAccessGrantsInstanceResourcePolicyRequest extends S.Class<DeleteAccessGrantsInstanceResourcePolicyRequest>("DeleteAccessGrantsInstanceResourcePolicyRequest")({AccountId: H.Header("x-amz-account-id")}) {}
export class DeleteAccessGrantsLocationRequest extends S.Class<DeleteAccessGrantsLocationRequest>("DeleteAccessGrantsLocationRequest")({AccountId: H.Header("x-amz-account-id"), AccessGrantsLocationId: S.String}) {}
export class DeleteAccessPointRequest extends S.Class<DeleteAccessPointRequest>("DeleteAccessPointRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String)}) {}
export class DeleteAccessPointForObjectLambdaRequest extends S.Class<DeleteAccessPointForObjectLambdaRequest>("DeleteAccessPointForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String}) {}
export class DeleteAccessPointPolicyRequest extends S.Class<DeleteAccessPointPolicyRequest>("DeleteAccessPointPolicyRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String)}) {}
export class DeleteAccessPointPolicyForObjectLambdaRequest extends S.Class<DeleteAccessPointPolicyForObjectLambdaRequest>("DeleteAccessPointPolicyForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String}) {}
export class DeleteAccessPointScopeRequest extends S.Class<DeleteAccessPointScopeRequest>("DeleteAccessPointScopeRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String)}) {}
export class DeleteBucketRequest extends S.Class<DeleteBucketRequest>("DeleteBucketRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class DeleteBucketLifecycleConfigurationRequest extends S.Class<DeleteBucketLifecycleConfigurationRequest>("DeleteBucketLifecycleConfigurationRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class DeleteBucketPolicyRequest extends S.Class<DeleteBucketPolicyRequest>("DeleteBucketPolicyRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class DeleteBucketReplicationRequest extends S.Class<DeleteBucketReplicationRequest>("DeleteBucketReplicationRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class DeleteBucketTaggingRequest extends S.Class<DeleteBucketTaggingRequest>("DeleteBucketTaggingRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class DeleteJobTaggingRequest extends S.Class<DeleteJobTaggingRequest>("DeleteJobTaggingRequest")({AccountId: H.Header("x-amz-account-id"), JobId: S.String}) {}
export class DeleteJobTaggingResult extends S.Class<DeleteJobTaggingResult>("DeleteJobTaggingResult")({}) {}
export class DeletePublicAccessBlockRequest extends S.Class<DeletePublicAccessBlockRequest>("DeletePublicAccessBlockRequest")({AccountId: H.Header("x-amz-account-id")}) {}
export class DeleteStorageLensConfigurationRequest extends S.Class<DeleteStorageLensConfigurationRequest>("DeleteStorageLensConfigurationRequest")({ConfigId: S.String, AccountId: H.Header("x-amz-account-id")}) {}
export class DeleteStorageLensConfigurationTaggingRequest extends S.Class<DeleteStorageLensConfigurationTaggingRequest>("DeleteStorageLensConfigurationTaggingRequest")({ConfigId: S.String, AccountId: H.Header("x-amz-account-id")}) {}
export class DeleteStorageLensConfigurationTaggingResult extends S.Class<DeleteStorageLensConfigurationTaggingResult>("DeleteStorageLensConfigurationTaggingResult")({}) {}
export class DeleteStorageLensGroupRequest extends S.Class<DeleteStorageLensGroupRequest>("DeleteStorageLensGroupRequest")({Name: S.String, AccountId: H.Header("x-amz-account-id")}) {}
export class DescribeJobRequest extends S.Class<DescribeJobRequest>("DescribeJobRequest")({AccountId: H.Header("x-amz-account-id"), JobId: S.String}) {}
export class DescribeMultiRegionAccessPointOperationRequest extends S.Class<DescribeMultiRegionAccessPointOperationRequest>("DescribeMultiRegionAccessPointOperationRequest")({AccountId: H.Header("x-amz-account-id"), RequestTokenARN: S.String}) {}
export class DissociateAccessGrantsIdentityCenterRequest extends S.Class<DissociateAccessGrantsIdentityCenterRequest>("DissociateAccessGrantsIdentityCenterRequest")({AccountId: H.Header("x-amz-account-id")}) {}
export class GetAccessGrantRequest extends S.Class<GetAccessGrantRequest>("GetAccessGrantRequest")({AccountId: H.Header("x-amz-account-id"), AccessGrantId: S.String}) {}
export class GetAccessGrantsInstanceRequest extends S.Class<GetAccessGrantsInstanceRequest>("GetAccessGrantsInstanceRequest")({AccountId: H.Header("x-amz-account-id")}) {}
export class GetAccessGrantsInstanceForPrefixRequest extends S.Class<GetAccessGrantsInstanceForPrefixRequest>("GetAccessGrantsInstanceForPrefixRequest")({AccountId: H.Header("x-amz-account-id"), S3Prefix: S.String}) {}
export class GetAccessGrantsInstanceResourcePolicyRequest extends S.Class<GetAccessGrantsInstanceResourcePolicyRequest>("GetAccessGrantsInstanceResourcePolicyRequest")({AccountId: H.Header("x-amz-account-id")}) {}
export class GetAccessGrantsLocationRequest extends S.Class<GetAccessGrantsLocationRequest>("GetAccessGrantsLocationRequest")({AccountId: H.Header("x-amz-account-id"), AccessGrantsLocationId: S.String}) {}
export class GetAccessPointRequest extends S.Class<GetAccessPointRequest>("GetAccessPointRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String)}) {}
export class GetAccessPointConfigurationForObjectLambdaRequest extends S.Class<GetAccessPointConfigurationForObjectLambdaRequest>("GetAccessPointConfigurationForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String}) {}
export class GetAccessPointForObjectLambdaRequest extends S.Class<GetAccessPointForObjectLambdaRequest>("GetAccessPointForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String}) {}
export class GetAccessPointPolicyRequest extends S.Class<GetAccessPointPolicyRequest>("GetAccessPointPolicyRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String)}) {}
export class GetAccessPointPolicyForObjectLambdaRequest extends S.Class<GetAccessPointPolicyForObjectLambdaRequest>("GetAccessPointPolicyForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String}) {}
export class GetAccessPointPolicyStatusRequest extends S.Class<GetAccessPointPolicyStatusRequest>("GetAccessPointPolicyStatusRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String)}) {}
export class GetAccessPointPolicyStatusForObjectLambdaRequest extends S.Class<GetAccessPointPolicyStatusForObjectLambdaRequest>("GetAccessPointPolicyStatusForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String}) {}
export class GetAccessPointScopeRequest extends S.Class<GetAccessPointScopeRequest>("GetAccessPointScopeRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String)}) {}
export class GetBucketRequest extends S.Class<GetBucketRequest>("GetBucketRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class GetBucketLifecycleConfigurationRequest extends S.Class<GetBucketLifecycleConfigurationRequest>("GetBucketLifecycleConfigurationRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class GetBucketPolicyRequest extends S.Class<GetBucketPolicyRequest>("GetBucketPolicyRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class GetBucketReplicationRequest extends S.Class<GetBucketReplicationRequest>("GetBucketReplicationRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class GetBucketTaggingRequest extends S.Class<GetBucketTaggingRequest>("GetBucketTaggingRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class GetBucketVersioningRequest extends S.Class<GetBucketVersioningRequest>("GetBucketVersioningRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String)}) {}
export class GetDataAccessRequest extends S.Class<GetDataAccessRequest>("GetDataAccessRequest")({AccountId: H.Header("x-amz-account-id"), Target: S.String, Permission: S.String, DurationSeconds: S.optional(S.Number), Privilege: S.optional(S.String), TargetType: S.optional(S.String)}) {}
export class GetJobTaggingRequest extends S.Class<GetJobTaggingRequest>("GetJobTaggingRequest")({AccountId: H.Header("x-amz-account-id"), JobId: S.String}) {}
export class GetMultiRegionAccessPointRequest extends S.Class<GetMultiRegionAccessPointRequest>("GetMultiRegionAccessPointRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String}) {}
export class GetMultiRegionAccessPointPolicyRequest extends S.Class<GetMultiRegionAccessPointPolicyRequest>("GetMultiRegionAccessPointPolicyRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String}) {}
export class GetMultiRegionAccessPointPolicyStatusRequest extends S.Class<GetMultiRegionAccessPointPolicyStatusRequest>("GetMultiRegionAccessPointPolicyStatusRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String}) {}
export class GetMultiRegionAccessPointRoutesRequest extends S.Class<GetMultiRegionAccessPointRoutesRequest>("GetMultiRegionAccessPointRoutesRequest")({AccountId: H.Header("x-amz-account-id"), Mrap: S.String}) {}
export class GetPublicAccessBlockRequest extends S.Class<GetPublicAccessBlockRequest>("GetPublicAccessBlockRequest")({AccountId: H.Header("x-amz-account-id")}) {}
export class GetStorageLensConfigurationRequest extends S.Class<GetStorageLensConfigurationRequest>("GetStorageLensConfigurationRequest")({ConfigId: S.String, AccountId: H.Header("x-amz-account-id")}) {}
export class GetStorageLensConfigurationTaggingRequest extends S.Class<GetStorageLensConfigurationTaggingRequest>("GetStorageLensConfigurationTaggingRequest")({ConfigId: S.String, AccountId: H.Header("x-amz-account-id")}) {}
export class GetStorageLensGroupRequest extends S.Class<GetStorageLensGroupRequest>("GetStorageLensGroupRequest")({Name: S.String, AccountId: H.Header("x-amz-account-id")}) {}
export class ListAccessGrantsRequest extends S.Class<ListAccessGrantsRequest>("ListAccessGrantsRequest")({AccountId: H.Header("x-amz-account-id"), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), GranteeType: S.optional(S.String), GranteeIdentifier: S.optional(S.String), Permission: S.optional(S.String), GrantScope: S.optional(S.String), ApplicationArn: S.optional(S.String)}) {}
export class ListAccessGrantsInstancesRequest extends S.Class<ListAccessGrantsInstancesRequest>("ListAccessGrantsInstancesRequest")({AccountId: H.Header("x-amz-account-id"), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListAccessGrantsLocationsRequest extends S.Class<ListAccessGrantsLocationsRequest>("ListAccessGrantsLocationsRequest")({AccountId: H.Header("x-amz-account-id"), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), LocationScope: S.optional(S.String)}) {}
export class ListAccessPointsRequest extends S.Class<ListAccessPointsRequest>("ListAccessPointsRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), DataSourceId: S.optional(S.String), DataSourceType: S.optional(S.String)}) {}
export class ListAccessPointsForDirectoryBucketsRequest extends S.Class<ListAccessPointsForDirectoryBucketsRequest>("ListAccessPointsForDirectoryBucketsRequest")({AccountId: H.Header("x-amz-account-id"), DirectoryBucket: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListAccessPointsForObjectLambdaRequest extends S.Class<ListAccessPointsForObjectLambdaRequest>("ListAccessPointsForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListCallerAccessGrantsRequest extends S.Class<ListCallerAccessGrantsRequest>("ListCallerAccessGrantsRequest")({AccountId: H.Header("x-amz-account-id"), GrantScope: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), AllowedByApplication: S.optional(S.Boolean)}) {}
export class ListJobsRequest extends S.Class<ListJobsRequest>("ListJobsRequest")({AccountId: H.Header("x-amz-account-id"), JobStatuses: S.optional(JobStatusList), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListMultiRegionAccessPointsRequest extends S.Class<ListMultiRegionAccessPointsRequest>("ListMultiRegionAccessPointsRequest")({AccountId: H.Header("x-amz-account-id"), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListRegionalBucketsRequest extends S.Class<ListRegionalBucketsRequest>("ListRegionalBucketsRequest")({AccountId: H.Header("x-amz-account-id"), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), OutpostId: S.optional(H.Header("x-amz-outpost-id"))}) {}
export class ListStorageLensConfigurationsRequest extends S.Class<ListStorageLensConfigurationsRequest>("ListStorageLensConfigurationsRequest")({AccountId: H.Header("x-amz-account-id"), NextToken: S.optional(S.String)}) {}
export class ListStorageLensGroupsRequest extends S.Class<ListStorageLensGroupsRequest>("ListStorageLensGroupsRequest")({AccountId: H.Header("x-amz-account-id"), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({AccountId: H.Header("x-amz-account-id"), ResourceArn: H.Path("ResourceArn", S.String)}) {}
export class PutAccessGrantsInstanceResourcePolicyRequest extends S.Class<PutAccessGrantsInstanceResourcePolicyRequest>("PutAccessGrantsInstanceResourcePolicyRequest")({AccountId: H.Header("x-amz-account-id"), Policy: S.String, Organization: S.optional(S.String)}) {}
export const ObjectLambdaAllowedFeaturesList = S.Array(S.String);
export const ObjectLambdaTransformationConfigurationActionsList = S.Array(S.String);
export class AwsLambdaTransformation extends S.Class<AwsLambdaTransformation>("AwsLambdaTransformation")({FunctionArn: S.String, FunctionPayload: S.optional(S.String)}) {}
export const ObjectLambdaContentTransformation = S.Union(AwsLambdaTransformation);
export class ObjectLambdaTransformationConfiguration extends S.Class<ObjectLambdaTransformationConfiguration>("ObjectLambdaTransformationConfiguration")({Actions: ObjectLambdaTransformationConfigurationActionsList, ContentTransformation: ObjectLambdaContentTransformation}) {}
export const ObjectLambdaTransformationConfigurationsList = S.Array(ObjectLambdaTransformationConfiguration);
export class ObjectLambdaConfiguration extends S.Class<ObjectLambdaConfiguration>("ObjectLambdaConfiguration")({SupportingAccessPoint: S.String, CloudWatchMetricsEnabled: S.optional(S.Boolean), AllowedFeatures: S.optional(ObjectLambdaAllowedFeaturesList), TransformationConfigurations: ObjectLambdaTransformationConfigurationsList}) {}
export class PutAccessPointConfigurationForObjectLambdaRequest extends S.Class<PutAccessPointConfigurationForObjectLambdaRequest>("PutAccessPointConfigurationForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String, Configuration: ObjectLambdaConfiguration}) {}
export class PutAccessPointPolicyRequest extends S.Class<PutAccessPointPolicyRequest>("PutAccessPointPolicyRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String), Policy: S.String}) {}
export class PutAccessPointPolicyForObjectLambdaRequest extends S.Class<PutAccessPointPolicyForObjectLambdaRequest>("PutAccessPointPolicyForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String, Policy: S.String}) {}
export const PrefixesList = S.Array(S.String);
export const ScopePermissionList = S.Array(S.String);
export class Scope extends S.Class<Scope>("Scope")({Prefixes: S.optional(PrefixesList), Permissions: S.optional(ScopePermissionList)}) {}
export class PutAccessPointScopeRequest extends S.Class<PutAccessPointScopeRequest>("PutAccessPointScopeRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String), Scope: Scope}) {}
export class PutBucketPolicyRequest extends S.Class<PutBucketPolicyRequest>("PutBucketPolicyRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String), ConfirmRemoveSelfBucketAccess: S.optional(H.Header("x-amz-confirm-remove-self-bucket-access", S.Boolean)), Policy: S.String}) {}
export class S3Tag extends S.Class<S3Tag>("S3Tag")({Key: S.String, Value: S.String}) {}
export const S3TagSet = S.Array(S3Tag);
export class PutJobTaggingRequest extends S.Class<PutJobTaggingRequest>("PutJobTaggingRequest")({AccountId: H.Header("x-amz-account-id"), JobId: S.String, Tags: S3TagSet}) {}
export class PutJobTaggingResult extends S.Class<PutJobTaggingResult>("PutJobTaggingResult")({}) {}
export class PublicAccessBlockConfiguration extends S.Class<PublicAccessBlockConfiguration>("PublicAccessBlockConfiguration")({BlockPublicAcls: S.optional(S.Boolean), IgnorePublicAcls: S.optional(S.Boolean), BlockPublicPolicy: S.optional(S.Boolean), RestrictPublicBuckets: S.optional(S.Boolean)}) {}
export class PutPublicAccessBlockRequest extends S.Class<PutPublicAccessBlockRequest>("PutPublicAccessBlockRequest")({PublicAccessBlockConfiguration: H.Body("PublicAccessBlockConfiguration", PublicAccessBlockConfiguration), AccountId: H.Header("x-amz-account-id")}) {}
export class StorageLensTag extends S.Class<StorageLensTag>("StorageLensTag")({Key: S.String, Value: S.String}) {}
export const StorageLensTags = S.Array(StorageLensTag);
export class PutStorageLensConfigurationTaggingRequest extends S.Class<PutStorageLensConfigurationTaggingRequest>("PutStorageLensConfigurationTaggingRequest")({ConfigId: S.String, AccountId: H.Header("x-amz-account-id"), Tags: StorageLensTags}) {}
export class PutStorageLensConfigurationTaggingResult extends S.Class<PutStorageLensConfigurationTaggingResult>("PutStorageLensConfigurationTaggingResult")({}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({AccountId: H.Header("x-amz-account-id"), ResourceArn: H.Path("ResourceArn", S.String), Tags: TagList}) {}
export class TagResourceResult extends S.Class<TagResourceResult>("TagResourceResult")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({AccountId: H.Header("x-amz-account-id"), ResourceArn: H.Path("ResourceArn", S.String), TagKeys: TagKeyList}) {}
export class UntagResourceResult extends S.Class<UntagResourceResult>("UntagResourceResult")({}) {}
export class UpdateAccessGrantsLocationRequest extends S.Class<UpdateAccessGrantsLocationRequest>("UpdateAccessGrantsLocationRequest")({AccountId: H.Header("x-amz-account-id"), AccessGrantsLocationId: S.String, IAMRoleArn: S.String}) {}
export class UpdateJobPriorityRequest extends S.Class<UpdateJobPriorityRequest>("UpdateJobPriorityRequest")({AccountId: H.Header("x-amz-account-id"), JobId: S.String, Priority: S.Number}) {}
export class UpdateJobStatusRequest extends S.Class<UpdateJobStatusRequest>("UpdateJobStatusRequest")({AccountId: H.Header("x-amz-account-id"), JobId: S.String, RequestedJobStatus: S.String, StatusUpdateReason: S.optional(S.String)}) {}
export const MatchAnyPrefix = S.Array(S.String);
export const MatchAnySuffix = S.Array(S.String);
export const MatchAnyTag = S.Array(S3Tag);
export class MatchObjectAge extends S.Class<MatchObjectAge>("MatchObjectAge")({DaysGreaterThan: S.optional(S.Number), DaysLessThan: S.optional(S.Number)}) {}
export class MatchObjectSize extends S.Class<MatchObjectSize>("MatchObjectSize")({BytesGreaterThan: S.optional(S.Number), BytesLessThan: S.optional(S.Number)}) {}
export class StorageLensGroupAndOperator extends S.Class<StorageLensGroupAndOperator>("StorageLensGroupAndOperator")({MatchAnyPrefix: S.optional(MatchAnyPrefix), MatchAnySuffix: S.optional(MatchAnySuffix), MatchAnyTag: S.optional(MatchAnyTag), MatchObjectAge: S.optional(MatchObjectAge), MatchObjectSize: S.optional(MatchObjectSize)}) {}
export class StorageLensGroupOrOperator extends S.Class<StorageLensGroupOrOperator>("StorageLensGroupOrOperator")({MatchAnyPrefix: S.optional(MatchAnyPrefix), MatchAnySuffix: S.optional(MatchAnySuffix), MatchAnyTag: S.optional(MatchAnyTag), MatchObjectAge: S.optional(MatchObjectAge), MatchObjectSize: S.optional(MatchObjectSize)}) {}
export class StorageLensGroupFilter extends S.Class<StorageLensGroupFilter>("StorageLensGroupFilter")({MatchAnyPrefix: S.optional(MatchAnyPrefix), MatchAnySuffix: S.optional(MatchAnySuffix), MatchAnyTag: S.optional(MatchAnyTag), MatchObjectAge: S.optional(MatchObjectAge), MatchObjectSize: S.optional(MatchObjectSize), And: S.optional(StorageLensGroupAndOperator), Or: S.optional(StorageLensGroupOrOperator)}) {}
export class StorageLensGroup extends S.Class<StorageLensGroup>("StorageLensGroup")({Name: S.String, Filter: StorageLensGroupFilter, StorageLensGroupArn: S.optional(S.String)}) {}
export class UpdateStorageLensGroupRequest extends S.Class<UpdateStorageLensGroupRequest>("UpdateStorageLensGroupRequest")({Name: S.String, AccountId: H.Header("x-amz-account-id"), StorageLensGroup: StorageLensGroup}) {}
export class S3DeleteObjectTaggingOperation extends S.Class<S3DeleteObjectTaggingOperation>("S3DeleteObjectTaggingOperation")({}) {}
export class S3ReplicateObjectOperation extends S.Class<S3ReplicateObjectOperation>("S3ReplicateObjectOperation")({}) {}
export class AccessGrantsLocationConfiguration extends S.Class<AccessGrantsLocationConfiguration>("AccessGrantsLocationConfiguration")({S3SubPrefix: S.optional(S.String)}) {}
export class Grantee extends S.Class<Grantee>("Grantee")({GranteeType: S.optional(S.String), GranteeIdentifier: S.optional(S.String)}) {}
export class VpcConfiguration extends S.Class<VpcConfiguration>("VpcConfiguration")({VpcId: S.String}) {}
export class CreateBucketConfiguration extends S.Class<CreateBucketConfiguration>("CreateBucketConfiguration")({LocationConstraint: S.optional(S.String)}) {}
export class JobReport extends S.Class<JobReport>("JobReport")({Bucket: S.optional(S.String), Format: S.optional(S.String), Enabled: S.Boolean, Prefix: S.optional(S.String), ReportScope: S.optional(S.String), ExpectedBucketOwner: S.optional(S.String)}) {}
export class DeleteMultiRegionAccessPointInput extends S.Class<DeleteMultiRegionAccessPointInput>("DeleteMultiRegionAccessPointInput")({Name: S.String}) {}
export class RegionReport extends S.Class<RegionReport>("RegionReport")({Bucket: S.optional(S.String), Region: S.optional(S.String), BucketAccountId: S.optional(S.String)}) {}
export const RegionReportList = S.Array(RegionReport);
export class MultiRegionAccessPointReport extends S.Class<MultiRegionAccessPointReport>("MultiRegionAccessPointReport")({Name: S.optional(S.String), Alias: S.optional(S.String), CreatedAt: S.optional(S.Date), PublicAccessBlock: S.optional(PublicAccessBlockConfiguration), Status: S.optional(S.String), Regions: S.optional(RegionReportList)}) {}
export const MultiRegionAccessPointReportList = S.Array(MultiRegionAccessPointReport);
export class Tagging extends S.Class<Tagging>("Tagging")({TagSet: S3TagSet}) {}
export class VersioningConfiguration extends S.Class<VersioningConfiguration>("VersioningConfiguration")({MFADelete: S.optional(S.String), Status: S.optional(S.String)}) {}
export class PutMultiRegionAccessPointPolicyInput extends S.Class<PutMultiRegionAccessPointPolicyInput>("PutMultiRegionAccessPointPolicyInput")({Name: S.String, Policy: S.String}) {}
export class MultiRegionAccessPointRoute extends S.Class<MultiRegionAccessPointRoute>("MultiRegionAccessPointRoute")({Bucket: S.optional(S.String), Region: S.optional(S.String), TrafficDialPercentage: S.Number}) {}
export const RouteList = S.Array(MultiRegionAccessPointRoute);
export const JobManifestFieldList = S.Array(S.String);
export const Buckets = S.Array(S.String);
export const Regions = S.Array(S.String);
export class CreateAccessGrantRequest extends S.Class<CreateAccessGrantRequest>("CreateAccessGrantRequest")({AccountId: H.Header("x-amz-account-id"), AccessGrantsLocationId: S.String, AccessGrantsLocationConfiguration: S.optional(AccessGrantsLocationConfiguration), Grantee: Grantee, Permission: S.String, ApplicationArn: S.optional(S.String), S3PrefixType: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class CreateAccessGrantsInstanceResult extends S.Class<CreateAccessGrantsInstanceResult>("CreateAccessGrantsInstanceResult")({CreatedAt: S.optional(S.Date), AccessGrantsInstanceId: S.optional(S.String), AccessGrantsInstanceArn: S.optional(S.String), IdentityCenterArn: S.optional(S.String), IdentityCenterInstanceArn: S.optional(S.String), IdentityCenterApplicationArn: S.optional(S.String)}) {}
export class CreateAccessGrantsLocationResult extends S.Class<CreateAccessGrantsLocationResult>("CreateAccessGrantsLocationResult")({CreatedAt: S.optional(S.Date), AccessGrantsLocationId: S.optional(S.String), AccessGrantsLocationArn: S.optional(S.String), LocationScope: S.optional(S.String), IAMRoleArn: S.optional(S.String)}) {}
export class CreateAccessPointRequest extends S.Class<CreateAccessPointRequest>("CreateAccessPointRequest")({AccountId: H.Header("x-amz-account-id"), Name: H.Path("AccessPointName", S.String), Bucket: S.String, VpcConfiguration: S.optional(VpcConfiguration), PublicAccessBlockConfiguration: S.optional(PublicAccessBlockConfiguration), BucketAccountId: S.optional(S.String), Scope: S.optional(Scope), Tags: S.optional(TagList)}) {}
export class CreateBucketRequest extends S.Class<CreateBucketRequest>("CreateBucketRequest")({ACL: S.optional(H.Header("x-amz-acl")), Bucket: H.Path("Bucket", S.String), CreateBucketConfiguration: S.optional(H.Body("CreateBucketConfiguration", CreateBucketConfiguration)), GrantFullControl: S.optional(H.Header("x-amz-grant-full-control")), GrantRead: S.optional(H.Header("x-amz-grant-read")), GrantReadACP: S.optional(H.Header("x-amz-grant-read-acp")), GrantWrite: S.optional(H.Header("x-amz-grant-write")), GrantWriteACP: S.optional(H.Header("x-amz-grant-write-acp")), ObjectLockEnabledForBucket: S.optional(H.Header("x-amz-bucket-object-lock-enabled", S.Boolean)), OutpostId: S.optional(H.Header("x-amz-outpost-id"))}) {}
export class DeleteMultiRegionAccessPointRequest extends S.Class<DeleteMultiRegionAccessPointRequest>("DeleteMultiRegionAccessPointRequest")({AccountId: H.Header("x-amz-account-id"), ClientToken: S.String, Details: DeleteMultiRegionAccessPointInput}) {}
export class GetAccessGrantResult extends S.Class<GetAccessGrantResult>("GetAccessGrantResult")({CreatedAt: S.optional(S.Date), AccessGrantId: S.optional(S.String), AccessGrantArn: S.optional(S.String), Grantee: S.optional(Grantee), Permission: S.optional(S.String), AccessGrantsLocationId: S.optional(S.String), AccessGrantsLocationConfiguration: S.optional(AccessGrantsLocationConfiguration), GrantScope: S.optional(S.String), ApplicationArn: S.optional(S.String)}) {}
export class GetAccessGrantsInstanceResult extends S.Class<GetAccessGrantsInstanceResult>("GetAccessGrantsInstanceResult")({AccessGrantsInstanceArn: S.optional(S.String), AccessGrantsInstanceId: S.optional(S.String), IdentityCenterArn: S.optional(S.String), IdentityCenterInstanceArn: S.optional(S.String), IdentityCenterApplicationArn: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export class GetAccessGrantsInstanceForPrefixResult extends S.Class<GetAccessGrantsInstanceForPrefixResult>("GetAccessGrantsInstanceForPrefixResult")({AccessGrantsInstanceArn: S.optional(S.String), AccessGrantsInstanceId: S.optional(S.String)}) {}
export class GetAccessGrantsInstanceResourcePolicyResult extends S.Class<GetAccessGrantsInstanceResourcePolicyResult>("GetAccessGrantsInstanceResourcePolicyResult")({Policy: S.optional(S.String), Organization: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export class GetAccessGrantsLocationResult extends S.Class<GetAccessGrantsLocationResult>("GetAccessGrantsLocationResult")({CreatedAt: S.optional(S.Date), AccessGrantsLocationId: S.optional(S.String), AccessGrantsLocationArn: S.optional(S.String), LocationScope: S.optional(S.String), IAMRoleArn: S.optional(S.String)}) {}
export class GetAccessPointConfigurationForObjectLambdaResult extends S.Class<GetAccessPointConfigurationForObjectLambdaResult>("GetAccessPointConfigurationForObjectLambdaResult")({Configuration: S.optional(ObjectLambdaConfiguration)}) {}
export class GetAccessPointPolicyResult extends S.Class<GetAccessPointPolicyResult>("GetAccessPointPolicyResult")({Policy: S.optional(S.String)}) {}
export class GetAccessPointPolicyForObjectLambdaResult extends S.Class<GetAccessPointPolicyForObjectLambdaResult>("GetAccessPointPolicyForObjectLambdaResult")({Policy: S.optional(S.String)}) {}
export class PolicyStatus extends S.Class<PolicyStatus>("PolicyStatus")({IsPublic: S.optional(S.Boolean)}) {}
export class GetAccessPointPolicyStatusForObjectLambdaResult extends S.Class<GetAccessPointPolicyStatusForObjectLambdaResult>("GetAccessPointPolicyStatusForObjectLambdaResult")({PolicyStatus: S.optional(PolicyStatus)}) {}
export class GetAccessPointScopeResult extends S.Class<GetAccessPointScopeResult>("GetAccessPointScopeResult")({Scope: S.optional(Scope)}) {}
export class GetBucketResult extends S.Class<GetBucketResult>("GetBucketResult")({Bucket: S.optional(S.String), PublicAccessBlockEnabled: S.optional(S.Boolean), CreationDate: S.optional(S.Date)}) {}
export class LifecycleExpiration extends S.Class<LifecycleExpiration>("LifecycleExpiration")({Date: S.optional(S.Date), Days: S.optional(S.Number), ExpiredObjectDeleteMarker: S.optional(S.Boolean)}) {}
export class LifecycleRuleAndOperator extends S.Class<LifecycleRuleAndOperator>("LifecycleRuleAndOperator")({Prefix: S.optional(S.String), Tags: S.optional(S3TagSet), ObjectSizeGreaterThan: S.optional(S.Number), ObjectSizeLessThan: S.optional(S.Number)}) {}
export class LifecycleRuleFilter extends S.Class<LifecycleRuleFilter>("LifecycleRuleFilter")({Prefix: S.optional(S.String), Tag: S.optional(S3Tag), And: S.optional(LifecycleRuleAndOperator), ObjectSizeGreaterThan: S.optional(S.Number), ObjectSizeLessThan: S.optional(S.Number)}) {}
export class Transition extends S.Class<Transition>("Transition")({Date: S.optional(S.Date), Days: S.optional(S.Number), StorageClass: S.optional(S.String)}) {}
export const TransitionList = S.Array(Transition);
export class NoncurrentVersionTransition extends S.Class<NoncurrentVersionTransition>("NoncurrentVersionTransition")({NoncurrentDays: S.optional(S.Number), StorageClass: S.optional(S.String)}) {}
export const NoncurrentVersionTransitionList = S.Array(NoncurrentVersionTransition);
export class NoncurrentVersionExpiration extends S.Class<NoncurrentVersionExpiration>("NoncurrentVersionExpiration")({NoncurrentDays: S.optional(S.Number), NewerNoncurrentVersions: S.optional(S.Number)}) {}
export class AbortIncompleteMultipartUpload extends S.Class<AbortIncompleteMultipartUpload>("AbortIncompleteMultipartUpload")({DaysAfterInitiation: S.optional(S.Number)}) {}
export class LifecycleRule extends S.Class<LifecycleRule>("LifecycleRule")({Expiration: S.optional(LifecycleExpiration), ID: S.optional(S.String), Filter: S.optional(LifecycleRuleFilter), Status: S.String, Transitions: S.optional(TransitionList), NoncurrentVersionTransitions: S.optional(NoncurrentVersionTransitionList), NoncurrentVersionExpiration: S.optional(NoncurrentVersionExpiration), AbortIncompleteMultipartUpload: S.optional(AbortIncompleteMultipartUpload)}) {}
export const LifecycleRules = S.Array(LifecycleRule);
export class GetBucketLifecycleConfigurationResult extends S.Class<GetBucketLifecycleConfigurationResult>("GetBucketLifecycleConfigurationResult")({Rules: S.optional(LifecycleRules)}) {}
export class GetBucketPolicyResult extends S.Class<GetBucketPolicyResult>("GetBucketPolicyResult")({Policy: S.optional(S.String)}) {}
export class ReplicationRuleAndOperator extends S.Class<ReplicationRuleAndOperator>("ReplicationRuleAndOperator")({Prefix: S.optional(S.String), Tags: S.optional(S3TagSet)}) {}
export class ReplicationRuleFilter extends S.Class<ReplicationRuleFilter>("ReplicationRuleFilter")({Prefix: S.optional(S.String), Tag: S.optional(S3Tag), And: S.optional(ReplicationRuleAndOperator)}) {}
export class SseKmsEncryptedObjects extends S.Class<SseKmsEncryptedObjects>("SseKmsEncryptedObjects")({Status: S.String}) {}
export class ReplicaModifications extends S.Class<ReplicaModifications>("ReplicaModifications")({Status: S.String}) {}
export class SourceSelectionCriteria extends S.Class<SourceSelectionCriteria>("SourceSelectionCriteria")({SseKmsEncryptedObjects: S.optional(SseKmsEncryptedObjects), ReplicaModifications: S.optional(ReplicaModifications)}) {}
export class ExistingObjectReplication extends S.Class<ExistingObjectReplication>("ExistingObjectReplication")({Status: S.String}) {}
export class ReplicationTimeValue extends S.Class<ReplicationTimeValue>("ReplicationTimeValue")({Minutes: S.optional(S.Number)}) {}
export class ReplicationTime extends S.Class<ReplicationTime>("ReplicationTime")({Status: S.String, Time: ReplicationTimeValue}) {}
export class AccessControlTranslation extends S.Class<AccessControlTranslation>("AccessControlTranslation")({Owner: S.String}) {}
export class EncryptionConfiguration extends S.Class<EncryptionConfiguration>("EncryptionConfiguration")({ReplicaKmsKeyID: S.optional(S.String)}) {}
export class Metrics extends S.Class<Metrics>("Metrics")({Status: S.String, EventThreshold: S.optional(ReplicationTimeValue)}) {}
export class Destination extends S.Class<Destination>("Destination")({Account: S.optional(S.String), Bucket: S.String, ReplicationTime: S.optional(ReplicationTime), AccessControlTranslation: S.optional(AccessControlTranslation), EncryptionConfiguration: S.optional(EncryptionConfiguration), Metrics: S.optional(Metrics), StorageClass: S.optional(S.String)}) {}
export class DeleteMarkerReplication extends S.Class<DeleteMarkerReplication>("DeleteMarkerReplication")({Status: S.String}) {}
export class ReplicationRule extends S.Class<ReplicationRule>("ReplicationRule")({ID: S.optional(S.String), Priority: S.optional(S.Number), Prefix: S.optional(S.String), Filter: S.optional(ReplicationRuleFilter), Status: S.String, SourceSelectionCriteria: S.optional(SourceSelectionCriteria), ExistingObjectReplication: S.optional(ExistingObjectReplication), Destination: Destination, DeleteMarkerReplication: S.optional(DeleteMarkerReplication), Bucket: S.String}) {}
export const ReplicationRules = S.Array(ReplicationRule);
export class ReplicationConfiguration extends S.Class<ReplicationConfiguration>("ReplicationConfiguration")({Role: S.String, Rules: ReplicationRules}) {}
export class GetBucketReplicationResult extends S.Class<GetBucketReplicationResult>("GetBucketReplicationResult")({ReplicationConfiguration: S.optional(ReplicationConfiguration)}) {}
export class GetBucketTaggingResult extends S.Class<GetBucketTaggingResult>("GetBucketTaggingResult")({TagSet: S3TagSet}) {}
export class GetBucketVersioningResult extends S.Class<GetBucketVersioningResult>("GetBucketVersioningResult")({Status: S.optional(S.String), MFADelete: S.optional(S.String)}) {}
export class GetJobTaggingResult extends S.Class<GetJobTaggingResult>("GetJobTaggingResult")({Tags: S.optional(S3TagSet)}) {}
export class GetMultiRegionAccessPointPolicyStatusResult extends S.Class<GetMultiRegionAccessPointPolicyStatusResult>("GetMultiRegionAccessPointPolicyStatusResult")({Established: S.optional(PolicyStatus)}) {}
export class GetMultiRegionAccessPointRoutesResult extends S.Class<GetMultiRegionAccessPointRoutesResult>("GetMultiRegionAccessPointRoutesResult")({Mrap: S.optional(S.String), Routes: S.optional(RouteList)}) {}
export class GetPublicAccessBlockOutput extends S.Class<GetPublicAccessBlockOutput>("GetPublicAccessBlockOutput")({PublicAccessBlockConfiguration: S.optional(H.Body("undefined", PublicAccessBlockConfiguration))}) {}
export class ActivityMetrics extends S.Class<ActivityMetrics>("ActivityMetrics")({IsEnabled: S.optional(S.Boolean)}) {}
export class SelectionCriteria extends S.Class<SelectionCriteria>("SelectionCriteria")({Delimiter: S.optional(S.String), MaxDepth: S.optional(S.Number), MinStorageBytesPercentage: S.optional(S.Number)}) {}
export class PrefixLevelStorageMetrics extends S.Class<PrefixLevelStorageMetrics>("PrefixLevelStorageMetrics")({IsEnabled: S.optional(S.Boolean), SelectionCriteria: S.optional(SelectionCriteria)}) {}
export class PrefixLevel extends S.Class<PrefixLevel>("PrefixLevel")({StorageMetrics: PrefixLevelStorageMetrics}) {}
export class AdvancedCostOptimizationMetrics extends S.Class<AdvancedCostOptimizationMetrics>("AdvancedCostOptimizationMetrics")({IsEnabled: S.optional(S.Boolean)}) {}
export class AdvancedDataProtectionMetrics extends S.Class<AdvancedDataProtectionMetrics>("AdvancedDataProtectionMetrics")({IsEnabled: S.optional(S.Boolean)}) {}
export class DetailedStatusCodesMetrics extends S.Class<DetailedStatusCodesMetrics>("DetailedStatusCodesMetrics")({IsEnabled: S.optional(S.Boolean)}) {}
export class AdvancedPerformanceMetrics extends S.Class<AdvancedPerformanceMetrics>("AdvancedPerformanceMetrics")({IsEnabled: S.optional(S.Boolean)}) {}
export class BucketLevel extends S.Class<BucketLevel>("BucketLevel")({ActivityMetrics: S.optional(ActivityMetrics), PrefixLevel: S.optional(PrefixLevel), AdvancedCostOptimizationMetrics: S.optional(AdvancedCostOptimizationMetrics), AdvancedDataProtectionMetrics: S.optional(AdvancedDataProtectionMetrics), DetailedStatusCodesMetrics: S.optional(DetailedStatusCodesMetrics), AdvancedPerformanceMetrics: S.optional(AdvancedPerformanceMetrics)}) {}
export const StorageLensGroupLevelInclude = S.Array(S.String);
export const StorageLensGroupLevelExclude = S.Array(S.String);
export class StorageLensGroupLevelSelectionCriteria extends S.Class<StorageLensGroupLevelSelectionCriteria>("StorageLensGroupLevelSelectionCriteria")({Include: S.optional(StorageLensGroupLevelInclude), Exclude: S.optional(StorageLensGroupLevelExclude)}) {}
export class StorageLensGroupLevel extends S.Class<StorageLensGroupLevel>("StorageLensGroupLevel")({SelectionCriteria: S.optional(StorageLensGroupLevelSelectionCriteria)}) {}
export class AccountLevel extends S.Class<AccountLevel>("AccountLevel")({ActivityMetrics: S.optional(ActivityMetrics), BucketLevel: BucketLevel, AdvancedCostOptimizationMetrics: S.optional(AdvancedCostOptimizationMetrics), AdvancedDataProtectionMetrics: S.optional(AdvancedDataProtectionMetrics), DetailedStatusCodesMetrics: S.optional(DetailedStatusCodesMetrics), AdvancedPerformanceMetrics: S.optional(AdvancedPerformanceMetrics), StorageLensGroupLevel: S.optional(StorageLensGroupLevel)}) {}
export class Include extends S.Class<Include>("Include")({Buckets: S.optional(Buckets), Regions: S.optional(Regions)}) {}
export class Exclude extends S.Class<Exclude>("Exclude")({Buckets: S.optional(Buckets), Regions: S.optional(Regions)}) {}
export class SSES3 extends S.Class<SSES3>("SSES3")({}) {}
export class SSEKMS extends S.Class<SSEKMS>("SSEKMS")({KeyId: S.String}) {}
export class StorageLensDataExportEncryption extends S.Class<StorageLensDataExportEncryption>("StorageLensDataExportEncryption")({SSES3: S.optional(SSES3), SSEKMS: S.optional(SSEKMS)}) {}
export class S3BucketDestination extends S.Class<S3BucketDestination>("S3BucketDestination")({Format: S.String, OutputSchemaVersion: S.String, AccountId: S.String, Arn: S.String, Prefix: S.optional(S.String), Encryption: S.optional(StorageLensDataExportEncryption)}) {}
export class CloudWatchMetrics extends S.Class<CloudWatchMetrics>("CloudWatchMetrics")({IsEnabled: S.Boolean}) {}
export class StorageLensTableDestination extends S.Class<StorageLensTableDestination>("StorageLensTableDestination")({IsEnabled: S.Boolean, Encryption: S.optional(StorageLensDataExportEncryption)}) {}
export class StorageLensDataExport extends S.Class<StorageLensDataExport>("StorageLensDataExport")({S3BucketDestination: S.optional(S3BucketDestination), CloudWatchMetrics: S.optional(CloudWatchMetrics), StorageLensTableDestination: S.optional(StorageLensTableDestination)}) {}
export class StorageLensExpandedPrefixesDataExport extends S.Class<StorageLensExpandedPrefixesDataExport>("StorageLensExpandedPrefixesDataExport")({S3BucketDestination: S.optional(S3BucketDestination), StorageLensTableDestination: S.optional(StorageLensTableDestination)}) {}
export class StorageLensAwsOrg extends S.Class<StorageLensAwsOrg>("StorageLensAwsOrg")({Arn: S.String}) {}
export class StorageLensConfiguration extends S.Class<StorageLensConfiguration>("StorageLensConfiguration")({Id: S.String, AccountLevel: AccountLevel, Include: S.optional(Include), Exclude: S.optional(Exclude), DataExport: S.optional(StorageLensDataExport), ExpandedPrefixesDataExport: S.optional(StorageLensExpandedPrefixesDataExport), IsEnabled: S.Boolean, AwsOrg: S.optional(StorageLensAwsOrg), StorageLensArn: S.optional(S.String), PrefixDelimiter: S.optional(S.String)}) {}
export class GetStorageLensConfigurationResult extends S.Class<GetStorageLensConfigurationResult>("GetStorageLensConfigurationResult")({StorageLensConfiguration: S.optional(H.Body("undefined", StorageLensConfiguration))}) {}
export class GetStorageLensConfigurationTaggingResult extends S.Class<GetStorageLensConfigurationTaggingResult>("GetStorageLensConfigurationTaggingResult")({Tags: S.optional(StorageLensTags)}) {}
export class GetStorageLensGroupResult extends S.Class<GetStorageLensGroupResult>("GetStorageLensGroupResult")({StorageLensGroup: S.optional(H.Body("undefined", StorageLensGroup))}) {}
export class AccessPoint extends S.Class<AccessPoint>("AccessPoint")({Name: S.String, NetworkOrigin: S.String, VpcConfiguration: S.optional(VpcConfiguration), Bucket: S.String, AccessPointArn: S.optional(S.String), Alias: S.optional(S.String), BucketAccountId: S.optional(S.String), DataSourceId: S.optional(S.String), DataSourceType: S.optional(S.String)}) {}
export const AccessPointList = S.Array(AccessPoint);
export class ListAccessPointsForDirectoryBucketsResult extends S.Class<ListAccessPointsForDirectoryBucketsResult>("ListAccessPointsForDirectoryBucketsResult")({AccessPointList: S.optional(AccessPointList), NextToken: S.optional(S.String)}) {}
export class ListMultiRegionAccessPointsResult extends S.Class<ListMultiRegionAccessPointsResult>("ListMultiRegionAccessPointsResult")({AccessPoints: S.optional(MultiRegionAccessPointReportList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResult extends S.Class<ListTagsForResourceResult>("ListTagsForResourceResult")({Tags: S.optional(TagList)}) {}
export class PutAccessGrantsInstanceResourcePolicyResult extends S.Class<PutAccessGrantsInstanceResourcePolicyResult>("PutAccessGrantsInstanceResourcePolicyResult")({Policy: S.optional(S.String), Organization: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export class PutBucketTaggingRequest extends S.Class<PutBucketTaggingRequest>("PutBucketTaggingRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String), Tagging: H.Body("Tagging", Tagging)}) {}
export class PutBucketVersioningRequest extends S.Class<PutBucketVersioningRequest>("PutBucketVersioningRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String), MFA: S.optional(H.Header("x-amz-mfa")), VersioningConfiguration: H.Body("VersioningConfiguration", VersioningConfiguration)}) {}
export class PutMultiRegionAccessPointPolicyRequest extends S.Class<PutMultiRegionAccessPointPolicyRequest>("PutMultiRegionAccessPointPolicyRequest")({AccountId: H.Header("x-amz-account-id"), ClientToken: S.String, Details: PutMultiRegionAccessPointPolicyInput}) {}
export class SubmitMultiRegionAccessPointRoutesRequest extends S.Class<SubmitMultiRegionAccessPointRoutesRequest>("SubmitMultiRegionAccessPointRoutesRequest")({AccountId: H.Header("x-amz-account-id"), Mrap: S.String, RouteUpdates: RouteList}) {}
export class SubmitMultiRegionAccessPointRoutesResult extends S.Class<SubmitMultiRegionAccessPointRoutesResult>("SubmitMultiRegionAccessPointRoutesResult")({}) {}
export class UpdateAccessGrantsLocationResult extends S.Class<UpdateAccessGrantsLocationResult>("UpdateAccessGrantsLocationResult")({CreatedAt: S.optional(S.Date), AccessGrantsLocationId: S.optional(S.String), AccessGrantsLocationArn: S.optional(S.String), LocationScope: S.optional(S.String), IAMRoleArn: S.optional(S.String)}) {}
export class UpdateJobPriorityResult extends S.Class<UpdateJobPriorityResult>("UpdateJobPriorityResult")({JobId: S.String, Priority: S.Number}) {}
export class UpdateJobStatusResult extends S.Class<UpdateJobStatusResult>("UpdateJobStatusResult")({JobId: S.optional(S.String), Status: S.optional(S.String), StatusUpdateReason: S.optional(S.String)}) {}
export class S3SetObjectTaggingOperation extends S.Class<S3SetObjectTaggingOperation>("S3SetObjectTaggingOperation")({TagSet: S.optional(S3TagSet)}) {}
export class S3InitiateRestoreObjectOperation extends S.Class<S3InitiateRestoreObjectOperation>("S3InitiateRestoreObjectOperation")({ExpirationInDays: S.optional(S.Number), GlacierJobTier: S.optional(S.String)}) {}
export class S3ComputeObjectChecksumOperation extends S.Class<S3ComputeObjectChecksumOperation>("S3ComputeObjectChecksumOperation")({ChecksumAlgorithm: S.optional(S.String), ChecksumType: S.optional(S.String)}) {}
export class JobManifestSpec extends S.Class<JobManifestSpec>("JobManifestSpec")({Format: S.String, Fields: S.optional(JobManifestFieldList)}) {}
export class JobManifestLocation extends S.Class<JobManifestLocation>("JobManifestLocation")({ObjectArn: S.String, ObjectVersionId: S.optional(S.String), ETag: S.String}) {}
export class Region extends S.Class<Region>("Region")({Bucket: S.String, BucketAccountId: S.optional(S.String)}) {}
export const RegionCreationList = S.Array(Region);
export const ReplicationStatusFilterList = S.Array(S.String);
export const StorageClassList = S.Array(S.String);
export class JobManifest extends S.Class<JobManifest>("JobManifest")({Spec: JobManifestSpec, Location: JobManifestLocation}) {}
export class CreateMultiRegionAccessPointInput extends S.Class<CreateMultiRegionAccessPointInput>("CreateMultiRegionAccessPointInput")({Name: S.String, PublicAccessBlock: S.optional(PublicAccessBlockConfiguration), Regions: RegionCreationList}) {}
export const Endpoints = S.Record({key: S.String, value: S.String});
export class ObjectLambdaAccessPointAlias extends S.Class<ObjectLambdaAccessPointAlias>("ObjectLambdaAccessPointAlias")({Value: S.optional(S.String), Status: S.optional(S.String)}) {}
export class Credentials extends S.Class<Credentials>("Credentials")({AccessKeyId: S.optional(S.String), SecretAccessKey: S.optional(S.String), SessionToken: S.optional(S.String), Expiration: S.optional(S.Date)}) {}
export class ListAccessGrantEntry extends S.Class<ListAccessGrantEntry>("ListAccessGrantEntry")({CreatedAt: S.optional(S.Date), AccessGrantId: S.optional(S.String), AccessGrantArn: S.optional(S.String), Grantee: S.optional(Grantee), Permission: S.optional(S.String), AccessGrantsLocationId: S.optional(S.String), AccessGrantsLocationConfiguration: S.optional(AccessGrantsLocationConfiguration), GrantScope: S.optional(S.String), ApplicationArn: S.optional(S.String)}) {}
export const AccessGrantsList = S.Array(ListAccessGrantEntry);
export class ListAccessGrantsInstanceEntry extends S.Class<ListAccessGrantsInstanceEntry>("ListAccessGrantsInstanceEntry")({AccessGrantsInstanceId: S.optional(S.String), AccessGrantsInstanceArn: S.optional(S.String), CreatedAt: S.optional(S.Date), IdentityCenterArn: S.optional(S.String), IdentityCenterInstanceArn: S.optional(S.String), IdentityCenterApplicationArn: S.optional(S.String)}) {}
export const AccessGrantsInstancesList = S.Array(ListAccessGrantsInstanceEntry);
export class ListAccessGrantsLocationsEntry extends S.Class<ListAccessGrantsLocationsEntry>("ListAccessGrantsLocationsEntry")({CreatedAt: S.optional(S.Date), AccessGrantsLocationId: S.optional(S.String), AccessGrantsLocationArn: S.optional(S.String), LocationScope: S.optional(S.String), IAMRoleArn: S.optional(S.String)}) {}
export const AccessGrantsLocationsList = S.Array(ListAccessGrantsLocationsEntry);
export class ObjectLambdaAccessPoint extends S.Class<ObjectLambdaAccessPoint>("ObjectLambdaAccessPoint")({Name: S.String, ObjectLambdaAccessPointArn: S.optional(S.String), Alias: S.optional(ObjectLambdaAccessPointAlias)}) {}
export const ObjectLambdaAccessPointList = S.Array(ObjectLambdaAccessPoint);
export class ListCallerAccessGrantsEntry extends S.Class<ListCallerAccessGrantsEntry>("ListCallerAccessGrantsEntry")({Permission: S.optional(S.String), GrantScope: S.optional(S.String), ApplicationArn: S.optional(S.String)}) {}
export const CallerAccessGrantsList = S.Array(ListCallerAccessGrantsEntry);
export class JobTimers extends S.Class<JobTimers>("JobTimers")({ElapsedTimeInActiveSeconds: S.optional(S.Number)}) {}
export class JobProgressSummary extends S.Class<JobProgressSummary>("JobProgressSummary")({TotalNumberOfTasks: S.optional(S.Number), NumberOfTasksSucceeded: S.optional(S.Number), NumberOfTasksFailed: S.optional(S.Number), Timers: S.optional(JobTimers)}) {}
export class JobListDescriptor extends S.Class<JobListDescriptor>("JobListDescriptor")({JobId: S.optional(S.String), Description: S.optional(S.String), Operation: S.optional(S.String), Priority: S.optional(S.Number), Status: S.optional(S.String), CreationTime: S.optional(S.Date), TerminationDate: S.optional(S.Date), ProgressSummary: S.optional(JobProgressSummary)}) {}
export const JobListDescriptorList = S.Array(JobListDescriptor);
export class RegionalBucket extends S.Class<RegionalBucket>("RegionalBucket")({Bucket: S.String, BucketArn: S.optional(S.String), PublicAccessBlockEnabled: S.Boolean, CreationDate: S.Date, OutpostId: S.optional(S.String)}) {}
export const RegionalBucketList = S.Array(RegionalBucket);
export class ListStorageLensConfigurationEntry extends S.Class<ListStorageLensConfigurationEntry>("ListStorageLensConfigurationEntry")({Id: S.String, StorageLensArn: S.String, HomeRegion: S.String, IsEnabled: S.optional(S.Boolean)}) {}
export const StorageLensConfigurationList = S.Array(ListStorageLensConfigurationEntry);
export class ListStorageLensGroupEntry extends S.Class<ListStorageLensGroupEntry>("ListStorageLensGroupEntry")({Name: S.String, StorageLensGroupArn: S.String, HomeRegion: S.String}) {}
export const StorageLensGroupList = S.Array(ListStorageLensGroupEntry);
export const UserArguments = S.Record({key: S.String, value: S.String});
export class S3ObjectLockLegalHold extends S.Class<S3ObjectLockLegalHold>("S3ObjectLockLegalHold")({Status: S.String}) {}
export class S3Retention extends S.Class<S3Retention>("S3Retention")({RetainUntilDate: S.optional(S.Date), Mode: S.optional(S.String)}) {}
export class CreateAccessGrantResult extends S.Class<CreateAccessGrantResult>("CreateAccessGrantResult")({CreatedAt: S.optional(S.Date), AccessGrantId: S.optional(S.String), AccessGrantArn: S.optional(S.String), Grantee: S.optional(Grantee), AccessGrantsLocationId: S.optional(S.String), AccessGrantsLocationConfiguration: S.optional(AccessGrantsLocationConfiguration), Permission: S.optional(S.String), ApplicationArn: S.optional(S.String), GrantScope: S.optional(S.String)}) {}
export class CreateAccessPointResult extends S.Class<CreateAccessPointResult>("CreateAccessPointResult")({AccessPointArn: S.optional(S.String), Alias: S.optional(S.String)}) {}
export class CreateBucketResult extends S.Class<CreateBucketResult>("CreateBucketResult")({Location: S.optional(H.Header("Location")), BucketArn: S.optional(S.String)}) {}
export class SSES3Encryption extends S.Class<SSES3Encryption>("SSES3Encryption")({}) {}
export const NonEmptyMaxLength1024StringList = S.Array(S.String);
export class SSES3Filter extends S.Class<SSES3Filter>("SSES3Filter")({}) {}
export class SSECFilter extends S.Class<SSECFilter>("SSECFilter")({}) {}
export class NotSSEFilter extends S.Class<NotSSEFilter>("NotSSEFilter")({}) {}
export class CreateMultiRegionAccessPointRequest extends S.Class<CreateMultiRegionAccessPointRequest>("CreateMultiRegionAccessPointRequest")({AccountId: H.Header("x-amz-account-id"), ClientToken: S.String, Details: CreateMultiRegionAccessPointInput}) {}
export class DeleteMultiRegionAccessPointResult extends S.Class<DeleteMultiRegionAccessPointResult>("DeleteMultiRegionAccessPointResult")({RequestTokenARN: S.optional(S.String)}) {}
export class GetAccessPointResult extends S.Class<GetAccessPointResult>("GetAccessPointResult")({Name: S.optional(S.String), Bucket: S.optional(S.String), NetworkOrigin: S.optional(S.String), VpcConfiguration: S.optional(VpcConfiguration), PublicAccessBlockConfiguration: S.optional(PublicAccessBlockConfiguration), CreationDate: S.optional(S.Date), Alias: S.optional(S.String), AccessPointArn: S.optional(S.String), Endpoints: S.optional(Endpoints), BucketAccountId: S.optional(S.String), DataSourceId: S.optional(S.String), DataSourceType: S.optional(S.String)}) {}
export class GetAccessPointForObjectLambdaResult extends S.Class<GetAccessPointForObjectLambdaResult>("GetAccessPointForObjectLambdaResult")({Name: S.optional(S.String), PublicAccessBlockConfiguration: S.optional(PublicAccessBlockConfiguration), CreationDate: S.optional(S.Date), Alias: S.optional(ObjectLambdaAccessPointAlias)}) {}
export class GetAccessPointPolicyStatusResult extends S.Class<GetAccessPointPolicyStatusResult>("GetAccessPointPolicyStatusResult")({PolicyStatus: S.optional(PolicyStatus)}) {}
export class GetDataAccessResult extends S.Class<GetDataAccessResult>("GetDataAccessResult")({Credentials: S.optional(Credentials), MatchedGrantTarget: S.optional(S.String), Grantee: S.optional(Grantee)}) {}
export class ListAccessGrantsResult extends S.Class<ListAccessGrantsResult>("ListAccessGrantsResult")({NextToken: S.optional(S.String), AccessGrantsList: S.optional(AccessGrantsList)}) {}
export class ListAccessGrantsInstancesResult extends S.Class<ListAccessGrantsInstancesResult>("ListAccessGrantsInstancesResult")({NextToken: S.optional(S.String), AccessGrantsInstancesList: S.optional(AccessGrantsInstancesList)}) {}
export class ListAccessGrantsLocationsResult extends S.Class<ListAccessGrantsLocationsResult>("ListAccessGrantsLocationsResult")({NextToken: S.optional(S.String), AccessGrantsLocationsList: S.optional(AccessGrantsLocationsList)}) {}
export class ListAccessPointsResult extends S.Class<ListAccessPointsResult>("ListAccessPointsResult")({AccessPointList: S.optional(AccessPointList), NextToken: S.optional(S.String)}) {}
export class ListAccessPointsForObjectLambdaResult extends S.Class<ListAccessPointsForObjectLambdaResult>("ListAccessPointsForObjectLambdaResult")({ObjectLambdaAccessPointList: S.optional(ObjectLambdaAccessPointList), NextToken: S.optional(S.String)}) {}
export class ListCallerAccessGrantsResult extends S.Class<ListCallerAccessGrantsResult>("ListCallerAccessGrantsResult")({NextToken: S.optional(S.String), CallerAccessGrantsList: S.optional(CallerAccessGrantsList)}) {}
export class ListJobsResult extends S.Class<ListJobsResult>("ListJobsResult")({NextToken: S.optional(S.String), Jobs: S.optional(JobListDescriptorList)}) {}
export class ListRegionalBucketsResult extends S.Class<ListRegionalBucketsResult>("ListRegionalBucketsResult")({RegionalBucketList: S.optional(RegionalBucketList), NextToken: S.optional(S.String)}) {}
export class ListStorageLensConfigurationsResult extends S.Class<ListStorageLensConfigurationsResult>("ListStorageLensConfigurationsResult")({NextToken: S.optional(S.String), StorageLensConfigurationList: S.optional(StorageLensConfigurationList)}) {}
export class ListStorageLensGroupsResult extends S.Class<ListStorageLensGroupsResult>("ListStorageLensGroupsResult")({NextToken: S.optional(S.String), StorageLensGroupList: S.optional(StorageLensGroupList)}) {}
export class PutMultiRegionAccessPointPolicyResult extends S.Class<PutMultiRegionAccessPointPolicyResult>("PutMultiRegionAccessPointPolicyResult")({RequestTokenARN: S.optional(S.String)}) {}
export class LambdaInvokeOperation extends S.Class<LambdaInvokeOperation>("LambdaInvokeOperation")({FunctionArn: S.optional(S.String), InvocationSchemaVersion: S.optional(S.String), UserArguments: S.optional(UserArguments)}) {}
export class S3SetObjectLegalHoldOperation extends S.Class<S3SetObjectLegalHoldOperation>("S3SetObjectLegalHoldOperation")({LegalHold: S3ObjectLockLegalHold}) {}
export class S3SetObjectRetentionOperation extends S.Class<S3SetObjectRetentionOperation>("S3SetObjectRetentionOperation")({BypassGovernanceRetention: S.optional(S.Boolean), Retention: S3Retention}) {}
export class JobFailure extends S.Class<JobFailure>("JobFailure")({FailureCode: S.optional(S.String), FailureReason: S.optional(S.String)}) {}
export const JobFailureList = S.Array(JobFailure);
export class S3GeneratedManifestDescriptor extends S.Class<S3GeneratedManifestDescriptor>("S3GeneratedManifestDescriptor")({Format: S.optional(S.String), Location: S.optional(JobManifestLocation)}) {}
export class AsyncRequestParameters extends S.Class<AsyncRequestParameters>("AsyncRequestParameters")({CreateMultiRegionAccessPointRequest: S.optional(CreateMultiRegionAccessPointInput), DeleteMultiRegionAccessPointRequest: S.optional(DeleteMultiRegionAccessPointInput), PutMultiRegionAccessPointPolicyRequest: S.optional(PutMultiRegionAccessPointPolicyInput)}) {}
export class EstablishedMultiRegionAccessPointPolicy extends S.Class<EstablishedMultiRegionAccessPointPolicy>("EstablishedMultiRegionAccessPointPolicy")({Policy: S.optional(S.String)}) {}
export class ProposedMultiRegionAccessPointPolicy extends S.Class<ProposedMultiRegionAccessPointPolicy>("ProposedMultiRegionAccessPointPolicy")({Policy: S.optional(S.String)}) {}
export class S3Grantee extends S.Class<S3Grantee>("S3Grantee")({TypeIdentifier: S.optional(S.String), Identifier: S.optional(S.String), DisplayName: S.optional(S.String)}) {}
export const S3UserMetadata = S.Record({key: S.String, value: S.String});
export class KeyNameConstraint extends S.Class<KeyNameConstraint>("KeyNameConstraint")({MatchAnyPrefix: S.optional(NonEmptyMaxLength1024StringList), MatchAnySuffix: S.optional(NonEmptyMaxLength1024StringList), MatchAnySubstring: S.optional(NonEmptyMaxLength1024StringList)}) {}
export class MultiRegionAccessPointPolicyDocument extends S.Class<MultiRegionAccessPointPolicyDocument>("MultiRegionAccessPointPolicyDocument")({Established: S.optional(EstablishedMultiRegionAccessPointPolicy), Proposed: S.optional(ProposedMultiRegionAccessPointPolicy)}) {}
export class S3Grant extends S.Class<S3Grant>("S3Grant")({Grantee: S.optional(S3Grantee), Permission: S.optional(S.String)}) {}
export const S3GrantList = S.Array(S3Grant);
export class S3ObjectMetadata extends S.Class<S3ObjectMetadata>("S3ObjectMetadata")({CacheControl: S.optional(S.String), ContentDisposition: S.optional(S.String), ContentEncoding: S.optional(S.String), ContentLanguage: S.optional(S.String), UserMetadata: S.optional(S3UserMetadata), ContentLength: S.optional(S.Number), ContentMD5: S.optional(S.String), ContentType: S.optional(S.String), HttpExpiresDate: S.optional(S.Date), RequesterCharged: S.optional(S.Boolean), SSEAlgorithm: S.optional(S.String)}) {}
export class AsyncErrorDetails extends S.Class<AsyncErrorDetails>("AsyncErrorDetails")({Code: S.optional(S.String), Message: S.optional(S.String), Resource: S.optional(S.String), RequestId: S.optional(S.String)}) {}
export class S3ObjectOwner extends S.Class<S3ObjectOwner>("S3ObjectOwner")({ID: S.optional(S.String), DisplayName: S.optional(S.String)}) {}
export class SSEKMSEncryption extends S.Class<SSEKMSEncryption>("SSEKMSEncryption")({KeyId: S.String}) {}
export class SSEKMSFilter extends S.Class<SSEKMSFilter>("SSEKMSFilter")({KmsKeyArn: S.optional(S.String), BucketKeyEnabled: S.optional(S.Boolean)}) {}
export class DSSEKMSFilter extends S.Class<DSSEKMSFilter>("DSSEKMSFilter")({KmsKeyArn: S.optional(S.String)}) {}
export class CreateMultiRegionAccessPointResult extends S.Class<CreateMultiRegionAccessPointResult>("CreateMultiRegionAccessPointResult")({RequestTokenARN: S.optional(S.String)}) {}
export class CreateStorageLensGroupRequest extends S.Class<CreateStorageLensGroupRequest>("CreateStorageLensGroupRequest")({AccountId: H.Header("x-amz-account-id"), StorageLensGroup: StorageLensGroup, Tags: S.optional(TagList)}) {}
export class GetMultiRegionAccessPointResult extends S.Class<GetMultiRegionAccessPointResult>("GetMultiRegionAccessPointResult")({AccessPoint: S.optional(MultiRegionAccessPointReport)}) {}
export class GetMultiRegionAccessPointPolicyResult extends S.Class<GetMultiRegionAccessPointPolicyResult>("GetMultiRegionAccessPointPolicyResult")({Policy: S.optional(MultiRegionAccessPointPolicyDocument)}) {}
export class S3CopyObjectOperation extends S.Class<S3CopyObjectOperation>("S3CopyObjectOperation")({TargetResource: S.optional(S.String), CannedAccessControlList: S.optional(S.String), AccessControlGrants: S.optional(S3GrantList), MetadataDirective: S.optional(S.String), ModifiedSinceConstraint: S.optional(S.Date), NewObjectMetadata: S.optional(S3ObjectMetadata), NewObjectTagging: S.optional(S3TagSet), RedirectLocation: S.optional(S.String), RequesterPays: S.optional(S.Boolean), StorageClass: S.optional(S.String), UnModifiedSinceConstraint: S.optional(S.Date), SSEAwsKmsKeyId: S.optional(S.String), TargetKeyPrefix: S.optional(S.String), ObjectLockLegalHoldStatus: S.optional(S.String), ObjectLockMode: S.optional(S.String), ObjectLockRetainUntilDate: S.optional(S.Date), BucketKeyEnabled: S.optional(S.Boolean), ChecksumAlgorithm: S.optional(S.String)}) {}
export class S3AccessControlList extends S.Class<S3AccessControlList>("S3AccessControlList")({Owner: S3ObjectOwner, Grants: S.optional(S3GrantList)}) {}
export class GeneratedManifestEncryption extends S.Class<GeneratedManifestEncryption>("GeneratedManifestEncryption")({SSES3: S.optional(SSES3Encryption), SSEKMS: S.optional(SSEKMSEncryption)}) {}
export const ObjectEncryptionFilter = S.Union(SSES3Filter, SSEKMSFilter, DSSEKMSFilter, SSECFilter, NotSSEFilter);
export const ObjectEncryptionFilterList = S.Array(ObjectEncryptionFilter);
export class MultiRegionAccessPointRegionalResponse extends S.Class<MultiRegionAccessPointRegionalResponse>("MultiRegionAccessPointRegionalResponse")({Name: S.optional(S.String), RequestStatus: S.optional(S.String)}) {}
export const MultiRegionAccessPointRegionalResponseList = S.Array(MultiRegionAccessPointRegionalResponse);
export class S3AccessControlPolicy extends S.Class<S3AccessControlPolicy>("S3AccessControlPolicy")({AccessControlList: S.optional(S3AccessControlList), CannedAccessControlList: S.optional(S.String)}) {}
export class S3SetObjectAclOperation extends S.Class<S3SetObjectAclOperation>("S3SetObjectAclOperation")({AccessControlPolicy: S.optional(S3AccessControlPolicy)}) {}
export class JobOperation extends S.Class<JobOperation>("JobOperation")({LambdaInvoke: S.optional(LambdaInvokeOperation), S3PutObjectCopy: S.optional(S3CopyObjectOperation), S3PutObjectAcl: S.optional(S3SetObjectAclOperation), S3PutObjectTagging: S.optional(S3SetObjectTaggingOperation), S3DeleteObjectTagging: S.optional(S3DeleteObjectTaggingOperation), S3InitiateRestoreObject: S.optional(S3InitiateRestoreObjectOperation), S3PutObjectLegalHold: S.optional(S3SetObjectLegalHoldOperation), S3PutObjectRetention: S.optional(S3SetObjectRetentionOperation), S3ReplicateObject: S.optional(S3ReplicateObjectOperation), S3ComputeObjectChecksum: S.optional(S3ComputeObjectChecksumOperation)}) {}
export class S3ManifestOutputLocation extends S.Class<S3ManifestOutputLocation>("S3ManifestOutputLocation")({ExpectedManifestBucketOwner: S.optional(S.String), Bucket: S.String, ManifestPrefix: S.optional(S.String), ManifestEncryption: S.optional(GeneratedManifestEncryption), ManifestFormat: S.String}) {}
export class JobManifestGeneratorFilter extends S.Class<JobManifestGeneratorFilter>("JobManifestGeneratorFilter")({EligibleForReplication: S.optional(S.Boolean), CreatedAfter: S.optional(S.Date), CreatedBefore: S.optional(S.Date), ObjectReplicationStatuses: S.optional(ReplicationStatusFilterList), KeyNameConstraint: S.optional(KeyNameConstraint), ObjectSizeGreaterThanBytes: S.optional(S.Number), ObjectSizeLessThanBytes: S.optional(S.Number), MatchAnyStorageClass: S.optional(StorageClassList), MatchAnyObjectEncryption: S.optional(ObjectEncryptionFilterList)}) {}
export class S3JobManifestGenerator extends S.Class<S3JobManifestGenerator>("S3JobManifestGenerator")({ExpectedBucketOwner: S.optional(S.String), SourceBucket: S.String, ManifestOutputLocation: S.optional(S3ManifestOutputLocation), Filter: S.optional(JobManifestGeneratorFilter), EnableManifestOutput: S.Boolean}) {}
export const JobManifestGenerator = S.Union(S3JobManifestGenerator);
export class JobDescriptor extends S.Class<JobDescriptor>("JobDescriptor")({JobId: S.optional(S.String), ConfirmationRequired: S.optional(S.Boolean), Description: S.optional(S.String), JobArn: S.optional(S.String), Status: S.optional(S.String), Manifest: S.optional(JobManifest), Operation: S.optional(JobOperation), Priority: S.optional(S.Number), ProgressSummary: S.optional(JobProgressSummary), StatusUpdateReason: S.optional(S.String), FailureReasons: S.optional(JobFailureList), Report: S.optional(JobReport), CreationTime: S.optional(S.Date), TerminationDate: S.optional(S.Date), RoleArn: S.optional(S.String), SuspendedDate: S.optional(S.Date), SuspendedCause: S.optional(S.String), ManifestGenerator: S.optional(JobManifestGenerator), GeneratedManifestDescriptor: S.optional(S3GeneratedManifestDescriptor)}) {}
export class LifecycleConfiguration extends S.Class<LifecycleConfiguration>("LifecycleConfiguration")({Rules: S.optional(LifecycleRules)}) {}
export class MultiRegionAccessPointsAsyncResponse extends S.Class<MultiRegionAccessPointsAsyncResponse>("MultiRegionAccessPointsAsyncResponse")({Regions: S.optional(MultiRegionAccessPointRegionalResponseList)}) {}
export class CreateAccessPointForObjectLambdaRequest extends S.Class<CreateAccessPointForObjectLambdaRequest>("CreateAccessPointForObjectLambdaRequest")({AccountId: H.Header("x-amz-account-id"), Name: S.String, Configuration: ObjectLambdaConfiguration}) {}
export class DescribeJobResult extends S.Class<DescribeJobResult>("DescribeJobResult")({Job: S.optional(JobDescriptor)}) {}
export class PutBucketLifecycleConfigurationRequest extends S.Class<PutBucketLifecycleConfigurationRequest>("PutBucketLifecycleConfigurationRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String), LifecycleConfiguration: S.optional(H.Body("LifecycleConfiguration", LifecycleConfiguration))}) {}
export class AsyncResponseDetails extends S.Class<AsyncResponseDetails>("AsyncResponseDetails")({MultiRegionAccessPointDetails: S.optional(MultiRegionAccessPointsAsyncResponse), ErrorDetails: S.optional(AsyncErrorDetails)}) {}
export class AsyncOperation extends S.Class<AsyncOperation>("AsyncOperation")({CreationTime: S.optional(S.Date), Operation: S.optional(S.String), RequestTokenARN: S.optional(S.String), RequestParameters: S.optional(AsyncRequestParameters), RequestStatus: S.optional(S.String), ResponseDetails: S.optional(AsyncResponseDetails)}) {}
export class CreateAccessPointForObjectLambdaResult extends S.Class<CreateAccessPointForObjectLambdaResult>("CreateAccessPointForObjectLambdaResult")({ObjectLambdaAccessPointArn: S.optional(S.String), Alias: S.optional(ObjectLambdaAccessPointAlias)}) {}
export class CreateJobRequest extends S.Class<CreateJobRequest>("CreateJobRequest")({AccountId: H.Header("x-amz-account-id"), ConfirmationRequired: S.optional(S.Boolean), Operation: JobOperation, Report: JobReport, ClientRequestToken: S.String, Manifest: S.optional(JobManifest), Description: S.optional(S.String), Priority: S.Number, RoleArn: S.String, Tags: S.optional(S3TagSet), ManifestGenerator: S.optional(JobManifestGenerator)}) {}
export class DescribeMultiRegionAccessPointOperationResult extends S.Class<DescribeMultiRegionAccessPointOperationResult>("DescribeMultiRegionAccessPointOperationResult")({AsyncOperation: S.optional(AsyncOperation)}) {}
export class PutBucketReplicationRequest extends S.Class<PutBucketReplicationRequest>("PutBucketReplicationRequest")({AccountId: H.Header("x-amz-account-id"), Bucket: H.Path("Bucket", S.String), ReplicationConfiguration: H.Body("ReplicationConfiguration", ReplicationConfiguration)}) {}
export class CreateJobResult extends S.Class<CreateJobResult>("CreateJobResult")({JobId: S.optional(S.String)}) {}
export class PutStorageLensConfigurationRequest extends S.Class<PutStorageLensConfigurationRequest>("PutStorageLensConfigurationRequest")({ConfigId: S.String, AccountId: H.Header("x-amz-account-id"), StorageLensConfiguration: StorageLensConfiguration, Tags: S.optional(StorageLensTags)}) {}

//# Errors
export class InternalServiceException extends S.TaggedError<InternalServiceException>()("InternalServiceException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class BucketAlreadyExists extends S.TaggedError<BucketAlreadyExists>()("BucketAlreadyExists", {}) {};
export class BucketAlreadyOwnedByYou extends S.TaggedError<BucketAlreadyOwnedByYou>()("BucketAlreadyOwnedByYou", {}) {};
export class NoSuchPublicAccessBlockConfiguration extends S.TaggedError<NoSuchPublicAccessBlockConfiguration>()("NoSuchPublicAccessBlockConfiguration", {Message: S.optional(S.String)}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {Message: S.optional(S.String)}) {};
export class JobStatusException extends S.TaggedError<JobStatusException>()("JobStatusException", {Message: S.optional(S.String)}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {Message: S.optional(S.String)}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {Message: S.optional(S.String)}) {};
export class IdempotencyException extends S.TaggedError<IdempotencyException>()("IdempotencyException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this action if you want to create access grants for users or groups from your corporate identity directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:AssociateAccessGrantsIdentityCenter` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Additional Permissions
 * 
 * 
 * 
 * You must also have the following permissions: `sso:CreateApplication`, `sso:PutApplicationGrant`, and `sso:PutApplicationAuthenticationMethod`.
 */export const associateAccessGrantsIdentityCenter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/identitycenter", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.AssociateAccessGrantsIdentityCenter" }, AssociateAccessGrantsIdentityCenterRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes the access grant from the S3 Access Grants instance. You cannot undo an access grant deletion and the grantee will no longer have access to the S3 data.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:DeleteAccessGrant` permission to use this operation.
 */export const deleteAccessGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/grant/{AccessGrantId}", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteAccessGrant" }, DeleteAccessGrantRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes your S3 Access Grants instance. You must first delete the access grants and locations before S3 Access Grants can delete the instance. See DeleteAccessGrant and DeleteAccessGrantsLocation. If you have associated an IAM Identity Center instance with your S3 Access Grants instance, you must first dissassociate the Identity Center instance from the S3 Access Grants instance before you can delete the S3 Access Grants instance. See AssociateAccessGrantsIdentityCenter and DissociateAccessGrantsIdentityCenter.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:DeleteAccessGrantsInstance` permission to use this operation.
 */export const deleteAccessGrantsInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteAccessGrantsInstance" }, DeleteAccessGrantsInstanceRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes the resource policy of the S3 Access Grants instance. The resource policy is used to manage cross-account access to your S3 Access Grants instance. By deleting the resource policy, you delete any cross-account permissions to your S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:DeleteAccessGrantsInstanceResourcePolicy` permission to use this operation.
 */export const deleteAccessGrantsInstanceResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/resourcepolicy", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteAccessGrantsInstanceResourcePolicy" }, DeleteAccessGrantsInstanceResourcePolicyRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deregisters a location from your S3 Access Grants instance. You can only delete a location registration from an S3 Access Grants instance if there are no grants associated with this location. See Delete a grant for information on how to delete grants. You need to have at least one registered location in your S3 Access Grants instance in order to create access grants.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:DeleteAccessGrantsLocation` permission to use this operation.
 */export const deleteAccessGrantsLocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteAccessGrantsLocation" }, DeleteAccessGrantsLocationRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes the specified access point.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `DeleteAccessPoint`:
 * 
 * 
 * 
 * - CreateAccessPoint
 * 
 * 
 * 
 * 
 * - GetAccessPoint
 * 
 * 
 * 
 * 
 * - ListAccessPoints
 */export const deleteAccessPoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteAccessPoint" }, DeleteAccessPointRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Deletes the specified Object Lambda Access Point.
 * 
 * 
 * The following actions are related to
 * `DeleteAccessPointForObjectLambda`:
 * 
 * 
 * 
 * - CreateAccessPointForObjectLambda
 * 
 * 
 * 
 * 
 * - GetAccessPointForObjectLambda
 * 
 * 
 * 
 * 
 * - ListAccessPointsForObjectLambda
 */export const deleteAccessPointForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda/{Name}", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteAccessPointForObjectLambda" }, DeleteAccessPointForObjectLambdaRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes the access point policy for the specified access point.
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `DeleteAccessPointPolicy`:
 * 
 * 
 * 
 * - PutAccessPointPolicy
 * 
 * 
 * 
 * 
 * - GetAccessPointPolicy
 */export const deleteAccessPointPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}/policy", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteAccessPointPolicy" }, DeleteAccessPointPolicyRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Removes the resource policy for an Object Lambda Access Point.
 * 
 * 
 * The following actions are related to
 * `DeleteAccessPointPolicyForObjectLambda`:
 * 
 * 
 * 
 * - GetAccessPointPolicyForObjectLambda
 * 
 * 
 * 
 * 
 * - PutAccessPointPolicyForObjectLambda
 */export const deleteAccessPointPolicyForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda/{Name}/policy", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteAccessPointPolicyForObjectLambda" }, DeleteAccessPointPolicyForObjectLambdaRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes an existing access point scope for a directory bucket.
 * 
 * 
 * 
 * 
 * When you delete the scope of an access point, all prefixes and permissions are deleted.
 * 
 * 
 * 
 * 
 * To use this operation, you must have the permission to perform the
 * `s3express:DeleteAccessPointScope` action.
 * 
 * 
 * For information about REST API errors, see REST error responses.
 */export const deleteAccessPointScope = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}/scope", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteAccessPointScope" }, DeleteAccessPointScopeRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see DeleteBucket in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and
 * delete markers) in the bucket must be deleted before the bucket itself can be deleted. For
 * more information, see Using Amazon S3 on Outposts in
 * *Amazon S3 User Guide*.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * **Related Resources**
 * 
 * 
 * 
 * 
 * - CreateBucket
 * 
 * 
 * 
 * 
 * - GetBucket
 * 
 * 
 * 
 * 
 * - DeleteObject
 */export const deleteBucket = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteBucket" }, DeleteBucketRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete
 * an S3 bucket's lifecycle configuration, see DeleteBucketLifecycle in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Deletes the lifecycle configuration from the specified Outposts bucket.
 * Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource
 * associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer
 * automatically deletes any objects on the basis of rules contained in the deleted lifecycle
 * configuration. For more information, see Using Amazon S3 on Outposts in
 * *Amazon S3 User Guide*.
 * 
 * 
 * To use this operation, you must have permission to perform the
 * `s3-outposts:PutLifecycleConfiguration` action. By default, the bucket owner
 * has this permission and the Outposts bucket owner can grant this permission to
 * others.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * For more information about object expiration, see Elements to Describe Lifecycle Actions.
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - PutBucketLifecycleConfiguration
 * 
 * 
 * 
 * 
 * - GetBucketLifecycleConfiguration
 */export const deleteBucketLifecycleConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/lifecycleconfiguration", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteBucketLifecycleConfiguration" }, DeleteBucketLifecycleConfigurationRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy,
 * see DeleteBucketPolicy in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * This implementation of the DELETE action uses the policy subresource to delete the
 * policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the
 * root user of the Amazon Web Services account that owns the bucket, the calling identity must have the
 * `s3-outposts:DeleteBucketPolicy` permissions on the specified Outposts bucket
 * and belong to the bucket owner's account to use this action. For more information, see
 * Using
 * Amazon S3 on Outposts in *Amazon S3 User Guide*.
 * 
 * 
 * If you don't have `DeleteBucketPolicy` permissions, Amazon S3 returns a 403
 * Access Denied error. If you have the correct permissions, but you're not using an
 * identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not
 * Allowed error.
 * 
 * 
 * 
 * 
 * As a security precaution, the root user of the Amazon Web Services account that owns a bucket can
 * always use this action, even if the policy explicitly denies the root user the ability
 * to perform this action.
 * 
 * 
 * 
 * 
 * For more information about bucket policies, see Using Bucket Policies and User
 * Policies.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `DeleteBucketPolicy`:
 * 
 * 
 * 
 * - GetBucketPolicy
 * 
 * 
 * 
 * 
 * - PutBucketPolicy
 */export const deleteBucketPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/policy", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteBucketPolicy" }, DeleteBucketPolicyRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation deletes an Amazon S3 on Outposts bucket's replication configuration. To
 * delete an S3 bucket's replication configuration, see DeleteBucketReplication in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Deletes the replication configuration from the specified S3 on Outposts bucket.
 * 
 * 
 * To use this operation, you must have permissions to perform the
 * `s3-outposts:PutReplicationConfiguration` action. The Outposts bucket owner
 * has this permission by default and can grant it to others. For more information about
 * permissions, see Setting up IAM with
 * S3 on Outposts and Managing access to
 * S3 on Outposts buckets in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * It can take a while to propagate `PUT` or `DELETE` requests for
 * a replication configuration to all S3 on Outposts systems. Therefore, the replication
 * configuration that's returned by a `GET` request soon after a
 * `PUT` or `DELETE` request might return a more recent result
 * than what's on the Outpost. If an Outpost is offline, the delay in updating the
 * replication configuration on that Outpost can be significant.
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * The following operations are related to `DeleteBucketReplication`:
 * 
 * 
 * 
 * - PutBucketReplication
 * 
 * 
 * 
 * 
 * - GetBucketReplication
 */export const deleteBucketReplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/replication", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteBucketReplication" }, DeleteBucketReplicationRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags,
 * see DeleteBucketTagging in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Deletes the tags from the Outposts bucket. For more information, see Using
 * Amazon S3 on Outposts in *Amazon S3 User Guide*.
 * 
 * 
 * To use this action, you must have permission to perform the
 * `PutBucketTagging` action. By default, the bucket owner has this permission
 * and can grant this permission to others.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `DeleteBucketTagging`:
 * 
 * 
 * 
 * - GetBucketTagging
 * 
 * 
 * 
 * 
 * - PutBucketTagging
 */export const deleteBucketTagging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/tagging", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteBucketTagging" }, DeleteBucketTaggingRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Removes the `PublicAccessBlock` configuration for an Amazon Web Services account. This
 * operation might be restricted when the account is managed by organization-level Block
 * Public Access policies. You’ll get an Access Denied (403) error when the account is managed
 * by organization-level Block Public Access policies. Organization-level policies override
 * account-level settings, preventing direct account-level modifications. For more
 * information, see Using Amazon S3 block
 * public access.
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - GetPublicAccessBlock
 * 
 * 
 * 
 * 
 * - PutPublicAccessBlock
 */export const deletePublicAccessBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/configuration/publicAccessBlock", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeletePublicAccessBlock" }, DeletePublicAccessBlockRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage
 * activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * To use this action, you must have permission to perform the
 * `s3:DeleteStorageLensConfiguration` action. For more information, see
 * Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */export const deleteStorageLensConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelens/{ConfigId}", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteStorageLensConfiguration" }, DeleteStorageLensConfigurationRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see
 * Assessing your
 * storage activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * To use this action, you must have permission to perform the
 * `s3:DeleteStorageLensConfigurationTagging` action. For more information,
 * see Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */export const deleteStorageLensConfigurationTagging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelens/{ConfigId}/tagging", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteStorageLensConfigurationTagging" }, DeleteStorageLensConfigurationTaggingRequest, DeleteStorageLensConfigurationTaggingResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes an existing S3 Storage Lens group.
 * 
 * 
 * To use this operation, you must have the permission to perform the
 * `s3:DeleteStorageLensGroup` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 * 
 * 
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */export const deleteStorageLensGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelensgroup/{Name}", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteStorageLensGroup" }, DeleteStorageLensGroupRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Dissociates the Amazon Web Services IAM Identity Center instance from the S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:DissociateAccessGrantsIdentityCenter` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Additional Permissions
 * 
 * 
 * 
 * You must have the `sso:DeleteApplication` permission to use this operation.
 */export const dissociateAccessGrantsIdentityCenter = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/identitycenter", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DissociateAccessGrantsIdentityCenter" }, DissociateAccessGrantsIdentityCenterRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Replaces configuration for an Object Lambda Access Point.
 * 
 * 
 * The following actions are related to
 * `PutAccessPointConfigurationForObjectLambda`:
 * 
 * 
 * 
 * - GetAccessPointConfigurationForObjectLambda
 */export const putAccessPointConfigurationForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda/{Name}/configuration", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutAccessPointConfigurationForObjectLambda" }, PutAccessPointConfigurationForObjectLambdaRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Associates an access policy with the specified access point. Each access point can have only one policy,
 * so a request made to this API replaces any existing policy associated with the specified
 * access point.
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `PutAccessPointPolicy`:
 * 
 * 
 * 
 * - GetAccessPointPolicy
 * 
 * 
 * 
 * 
 * - DeleteAccessPointPolicy
 */export const putAccessPointPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}/policy", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutAccessPointPolicy" }, PutAccessPointPolicyRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see Creating Object Lambda Access Points in the *Amazon S3 User Guide*.
 * 
 * 
 * The following actions are related to
 * `PutAccessPointPolicyForObjectLambda`:
 * 
 * 
 * 
 * - DeleteAccessPointPolicyForObjectLambda
 * 
 * 
 * 
 * 
 * - GetAccessPointPolicyForObjectLambda
 */export const putAccessPointPolicyForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda/{Name}/policy", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutAccessPointPolicyForObjectLambda" }, PutAccessPointPolicyForObjectLambdaRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates or replaces the access point scope for a directory bucket. You can use the access point scope to restrict access to specific prefixes, API operations, or a combination of both.
 * 
 * 
 * 
 * 
 * You can specify any amount of prefixes, but the total length of characters of all prefixes must be less than 256 bytes in size.
 * 
 * 
 * 
 * 
 * To use this operation, you must have the permission to perform the
 * `s3express:PutAccessPointScope` action.
 * 
 * 
 * For information about REST API errors, see REST error responses.
 */export const putAccessPointScope = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}/scope", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutAccessPointScope" }, PutAccessPointScopeRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an
 * S3 bucket, see PutBucketPolicy in the
 * *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see Using
 * Amazon S3 on Outposts in the *Amazon S3 User Guide*.
 * 
 * 
 * If you are using an identity other than the root user of the Amazon Web Services account that owns the
 * Outposts bucket, the calling identity must have the `PutBucketPolicy`
 * permissions on the specified Outposts bucket and belong to the bucket owner's account in
 * order to use this action.
 * 
 * 
 * If you don't have `PutBucketPolicy` permissions, Amazon S3 returns a 403
 * Access Denied error. If you have the correct permissions, but you're not using an
 * identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not
 * Allowed error.
 * 
 * 
 * 
 * 
 * As a security precaution, the root user of the Amazon Web Services account that owns a bucket can
 * always use this action, even if the policy explicitly denies the root user the ability
 * to perform this action.
 * 
 * 
 * 
 * 
 * For more information about bucket policies, see Using Bucket Policies and User
 * Policies.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `PutBucketPolicy`:
 * 
 * 
 * 
 * - GetBucketPolicy
 * 
 * 
 * 
 * 
 * - DeleteBucketPolicy
 */export const putBucketPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/policy", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutBucketPolicy" }, PutBucketPolicyRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Creates or modifies the `PublicAccessBlock` configuration for an
 * Amazon Web Services account. This operation may be restricted when the account is managed by
 * organization-level Block Public Access policies. You might get an Access Denied (403) error
 * when the account is managed by organization-level Block Public Access policies.
 * Organization-level policies override account-level settings, preventing direct
 * account-level modifications. For this operation, users must have the
 * `s3:PutAccountPublicAccessBlock` permission. For more information, see
 * Using Amazon S3 block public access.
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - GetPublicAccessBlock
 * 
 * 
 * 
 * 
 * - DeletePublicAccessBlock
 */export const putPublicAccessBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/configuration/publicAccessBlock", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutPublicAccessBlock" }, PutPublicAccessBlockRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information
 * about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * To use this action, you must have permission to perform the
 * `s3:PutStorageLensConfigurationTagging` action. For more information, see
 * Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */export const putStorageLensConfigurationTagging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelens/{ConfigId}/tagging", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutStorageLensConfigurationTagging" }, PutStorageLensConfigurationTaggingRequest, PutStorageLensConfigurationTaggingResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a new user-defined tag or updates an existing tag. Each tag is a label consisting of a key and value that is applied to your resource. Tags can help you organize, track costs for, and control access to your resources. You can add up to 50 Amazon Web Services resource tags for each S3 resource.
 * 
 * 
 * 
 * 
 * This operation is only supported for the following Amazon S3 resource:
 * 
 * 
 * 
 * - General purpose buckets
 * 
 * 
 * 
 * 
 * - Access Points for directory buckets
 * 
 * 
 * 
 * 
 * - Access Points for general purpose buckets
 * 
 * 
 * 
 * 
 * - Directory buckets
 * 
 * 
 * 
 * 
 * - S3 Storage Lens groups
 * 
 * 
 * 
 * 
 * - S3 Access Grants instances, registered locations, or grants.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the `s3:TagResource` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Directory bucket permissions
 * 
 * 
 * 
 * For directory buckets, you must have the `s3express:TagResource` permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * ### HTTP Host header syntax
 * 
 * 
 * 
 * 
 * **Directory buckets ** - The HTTP Host header syntax is `s3express-control.*region*.amazonaws.com`.
 * 
 * 
 * 
 * 
 * 
 * For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/tags/{ResourceArn+}", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.TagResource" }, TagResourceRequest, TagResourceResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation removes the specified user-defined tags from an S3 resource. You can pass one or more tag keys.
 * 
 * 
 * 
 * 
 * This operation is only supported for the following Amazon S3 resources:
 * 
 * 
 * 
 * - General purpose buckets
 * 
 * 
 * 
 * 
 * - Access Points for directory buckets
 * 
 * 
 * 
 * 
 * - Access Points for general purpose buckets
 * 
 * 
 * 
 * 
 * - Directory buckets
 * 
 * 
 * 
 * 
 * - S3 Storage Lens groups
 * 
 * 
 * 
 * 
 * - S3 Access Grants instances, registered locations, and grants.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the `s3:UntagResource` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Directory bucket permissions
 * 
 * 
 * 
 * For directory buckets, you must have the `s3express:UntagResource` permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * ### HTTP Host header syntax
 * 
 * 
 * 
 * 
 * **Directory buckets ** - The HTTP Host header syntax is `s3express-control.*region*.amazonaws.com`.
 * 
 * 
 * 
 * 
 * 
 * For information about S3 Tagging errors, see List of Amazon S3
 * Tagging error codes.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/tags/{ResourceArn+}", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.UntagResource" }, UntagResourceRequest, UntagResourceResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates the existing Storage Lens group.
 * 
 * 
 * To use this operation, you must have the permission to perform the
 * `s3:UpdateStorageLensGroup` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 * 
 * 
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */export const updateStorageLensGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelensgroup/{Name}", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.UpdateStorageLensGroup" }, UpdateStorageLensGroupRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates an S3 Access Grants instance, which serves as a logical grouping for access grants. You can create one S3 Access Grants instance per Region per account.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:CreateAccessGrantsInstance` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Additional Permissions
 * 
 * 
 * 
 * To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the `sso:DescribeInstance`, `sso:CreateApplication`, `sso:PutApplicationGrant`, and `sso:PutApplicationAuthenticationMethod` permissions.
 */export const createAccessGrantsInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.CreateAccessGrantsInstance" }, CreateAccessGrantsInstanceRequest, CreateAccessGrantsInstanceResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * The S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following:
 * 
 * 
 * 
 * - The default S3 location `s3://`
 * 
 * 
 * 
 * 
 * - A bucket - `S3://`
 * 
 * 
 * 
 * 
 * - A bucket and prefix - `S3:///`
 * 
 * 
 * 
 * 
 * 
 * 
 * When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role using a policy. S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:CreateAccessGrantsLocation` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Additional Permissions
 * 
 * 
 * 
 * You must also have the following permission for the specified IAM role: `iam:PassRole`
 */export const createAccessGrantsLocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/location", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.CreateAccessGrantsLocation" }, CreateAccessGrantsLocationRequest, CreateAccessGrantsLocationResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Get the details of an access grant from your S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:GetAccessGrant` permission to use this operation.
 */export const getAccessGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/grant/{AccessGrantId}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessGrant" }, GetAccessGrantRequest, GetAccessGrantResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves the S3 Access Grants instance for a Region in your account.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:GetAccessGrantsInstance` permission to use this operation.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * `GetAccessGrantsInstance` is not supported for cross-account access. You can only call the API from the account that owns the S3 Access Grants instance.
 */export const getAccessGrantsInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessGrantsInstance" }, GetAccessGrantsInstanceRequest, GetAccessGrantsInstanceResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieve the S3 Access Grants instance that contains a particular prefix.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:GetAccessGrantsInstanceForPrefix` permission for the caller account to use this operation.
 * 
 * 
 * 
 * 
 * ### Additional Permissions
 * 
 * 
 * 
 * The prefix owner account must grant you the following permissions to their S3 Access Grants instance: `s3:GetAccessGrantsInstanceForPrefix`.
 */export const getAccessGrantsInstanceForPrefix = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/prefix", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessGrantsInstanceForPrefix" }, GetAccessGrantsInstanceForPrefixRequest, GetAccessGrantsInstanceForPrefixResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns the resource policy of the S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:GetAccessGrantsInstanceResourcePolicy` permission to use this operation.
 */export const getAccessGrantsInstanceResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/resourcepolicy", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessGrantsInstanceResourcePolicy" }, GetAccessGrantsInstanceResourcePolicyRequest, GetAccessGrantsInstanceResourcePolicyResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves the details of a particular location registered in your S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:GetAccessGrantsLocation` permission to use this operation.
 */export const getAccessGrantsLocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessGrantsLocation" }, GetAccessGrantsLocationRequest, GetAccessGrantsLocationResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns configuration for an Object Lambda Access Point.
 * 
 * 
 * The following actions are related to
 * `GetAccessPointConfigurationForObjectLambda`:
 * 
 * 
 * 
 * - PutAccessPointConfigurationForObjectLambda
 */export const getAccessPointConfigurationForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda/{Name}/configuration", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessPointConfigurationForObjectLambda" }, GetAccessPointConfigurationForObjectLambdaRequest, GetAccessPointConfigurationForObjectLambdaResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns the access point policy associated with the specified access point.
 * 
 * 
 * The following actions are related to `GetAccessPointPolicy`:
 * 
 * 
 * 
 * - PutAccessPointPolicy
 * 
 * 
 * 
 * 
 * - DeleteAccessPointPolicy
 */export const getAccessPointPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}/policy", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessPointPolicy" }, GetAccessPointPolicyRequest, GetAccessPointPolicyResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns the resource policy for an Object Lambda Access Point.
 * 
 * 
 * The following actions are related to
 * `GetAccessPointPolicyForObjectLambda`:
 * 
 * 
 * 
 * - DeleteAccessPointPolicyForObjectLambda
 * 
 * 
 * 
 * 
 * - PutAccessPointPolicyForObjectLambda
 */export const getAccessPointPolicyForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda/{Name}/policy", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessPointPolicyForObjectLambda" }, GetAccessPointPolicyForObjectLambdaRequest, GetAccessPointPolicyForObjectLambdaResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns the status of the resource policy associated with an Object Lambda Access Point.
 */export const getAccessPointPolicyStatusForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda/{Name}/policyStatus", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessPointPolicyStatusForObjectLambda" }, GetAccessPointPolicyStatusForObjectLambdaRequest, GetAccessPointPolicyStatusForObjectLambdaResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns the access point scope for a directory bucket.
 * 
 * 
 * To use this operation, you must have the permission to perform the
 * `s3express:GetAccessPointScope` action.
 * 
 * 
 * For information about REST API errors, see REST error responses.
 */export const getAccessPointScope = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}/scope", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessPointScope" }, GetAccessPointScopeRequest, GetAccessPointScopeResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets an Amazon S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * If you are using an identity other than the root user of the Amazon Web Services account that owns the
 * Outposts bucket, the calling identity must have the `s3-outposts:GetBucket`
 * permissions on the specified Outposts bucket and belong to the Outposts bucket owner's
 * account in order to use this action. Only users from Outposts bucket owner account with
 * the right permissions can perform actions on an Outposts bucket.
 * 
 * 
 * If you don't have `s3-outposts:GetBucket` permissions or you're not using an
 * identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access
 * Denied error.
 * 
 * 
 * The following actions are related to `GetBucket` for Amazon S3 on Outposts:
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * 
 * - PutObject
 * 
 * 
 * 
 * 
 * - CreateBucket
 * 
 * 
 * 
 * 
 * - DeleteBucket
 */export const getBucket = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetBucket" }, GetBucketRequest, GetBucketResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3
 * bucket's lifecycle configuration, see GetBucketLifecycleConfiguration in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * 
 * Returns the lifecycle configuration information set on the Outposts bucket. For more
 * information, see Using Amazon S3 on Outposts and for
 * information about lifecycle configuration, see Object Lifecycle
 * Management in *Amazon S3 User Guide*.
 * 
 * 
 * To use this action, you must have permission to perform the
 * `s3-outposts:GetLifecycleConfiguration` action. The Outposts bucket owner
 * has this permission, by default. The bucket owner can grant this permission to others. For
 * more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing
 * Access Permissions to Your Amazon S3 Resources.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * 
 * `GetBucketLifecycleConfiguration` has the following special error:
 * 
 * 
 * 
 * - Error code: `NoSuchLifecycleConfiguration`
 * 
 * 
 * 
 * 
 * - Description: The lifecycle configuration does not exist.
 * 
 * 
 * 
 * - HTTP Status Code: 404 Not Found
 * 
 * 
 * 
 * - SOAP Fault Code Prefix: Client
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * The following actions are related to
 * `GetBucketLifecycleConfiguration`:
 * 
 * 
 * 
 * - PutBucketLifecycleConfiguration
 * 
 * 
 * 
 * 
 * - DeleteBucketLifecycleConfiguration
 */export const getBucketLifecycleConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/lifecycleconfiguration", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetBucketLifecycleConfiguration" }, GetBucketLifecycleConfigurationRequest, GetBucketLifecycleConfigurationResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for
 * an S3 bucket, see GetBucketPolicy in the
 * *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Returns the policy of a specified Outposts bucket. For more information, see Using
 * Amazon S3 on Outposts in the *Amazon S3 User Guide*.
 * 
 * 
 * If you are using an identity other than the root user of the Amazon Web Services account that owns the
 * bucket, the calling identity must have the `GetBucketPolicy` permissions on the
 * specified bucket and belong to the bucket owner's account in order to use this
 * action.
 * 
 * 
 * Only users from Outposts bucket owner account with the right permissions can perform
 * actions on an Outposts bucket. If you don't have `s3-outposts:GetBucketPolicy`
 * permissions or you're not using an identity that belongs to the bucket owner's account,
 * Amazon S3 returns a `403 Access Denied` error.
 * 
 * 
 * 
 * 
 * As a security precaution, the root user of the Amazon Web Services account that owns a bucket can
 * always use this action, even if the policy explicitly denies the root user the ability
 * to perform this action.
 * 
 * 
 * 
 * 
 * For more information about bucket policies, see Using Bucket Policies and User
 * Policies.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `GetBucketPolicy`:
 * 
 * 
 * 
 * - GetObject
 * 
 * 
 * 
 * 
 * - PutBucketPolicy
 * 
 * 
 * 
 * 
 * - DeleteBucketPolicy
 */export const getBucketPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/policy", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetBucketPolicy" }, GetBucketPolicyRequest, GetBucketPolicyResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation gets an Amazon S3 on Outposts bucket's replication configuration. To get an
 * S3 bucket's replication configuration, see GetBucketReplication
 * in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Returns the replication configuration of an S3 on Outposts bucket. For more information
 * about S3 on Outposts, see Using Amazon S3 on Outposts in the
 * *Amazon S3 User Guide*. For information about S3 replication on Outposts
 * configuration, see Replicating objects for
 * S3 on Outposts in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * It can take a while to propagate `PUT` or `DELETE` requests for
 * a replication configuration to all S3 on Outposts systems. Therefore, the replication
 * configuration that's returned by a `GET` request soon after a
 * `PUT` or `DELETE` request might return a more recent result
 * than what's on the Outpost. If an Outpost is offline, the delay in updating the
 * replication configuration on that Outpost can be significant.
 * 
 * 
 * 
 * 
 * This action requires permissions for the
 * `s3-outposts:GetReplicationConfiguration` action. The Outposts bucket owner
 * has this permission by default and can grant it to others. For more information about
 * permissions, see Setting up IAM with
 * S3 on Outposts and Managing access to
 * S3 on Outposts bucket in the *Amazon S3 User Guide*.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * If you include the `Filter` element in a replication configuration, you must
 * also include the `DeleteMarkerReplication`, `Status`, and
 * `Priority` elements. The response also returns those elements.
 * 
 * 
 * For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the *Amazon S3 User Guide*.
 * 
 * 
 * The following operations are related to `GetBucketReplication`:
 * 
 * 
 * 
 * - PutBucketReplication
 * 
 * 
 * 
 * 
 * - DeleteBucketReplication
 */export const getBucketReplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/replication", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetBucketReplication" }, GetBucketReplicationRequest, GetBucketReplicationResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see
 * GetBucketTagging in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Returns the tag set associated with the Outposts bucket. For more information, see
 * Using
 * Amazon S3 on Outposts in the *Amazon S3 User Guide*.
 * 
 * 
 * To use this action, you must have permission to perform the
 * `GetBucketTagging` action. By default, the bucket owner has this permission
 * and can grant this permission to others.
 * 
 * 
 * 
 * `GetBucketTagging` has the following special error:
 * 
 * 
 * 
 * - Error code: `NoSuchTagSetError`
 * 
 * 
 * 
 * 
 * - Description: There is no tag set associated with the bucket.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `GetBucketTagging`:
 * 
 * 
 * 
 * - PutBucketTagging
 * 
 * 
 * 
 * 
 * - DeleteBucketTagging
 */export const getBucketTagging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/tagging", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetBucketTagging" }, GetBucketTaggingRequest, GetBucketTaggingResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation returns the versioning state
 * for
 * S3 on Outposts
 * buckets
 * only. To return the versioning state for an S3 bucket, see GetBucketVersioning in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Returns the versioning state for an S3 on Outposts bucket. With
 * S3
 * Versioning,
 * you can save multiple distinct copies of your
 * objects
 * and recover from unintended user actions and application failures.
 * 
 * 
 * If you've never set versioning on your bucket, it has no versioning state. In that case,
 * the `GetBucketVersioning` request does not return a versioning state
 * value.
 * 
 * 
 * For more information about versioning, see Versioning in the Amazon S3
 * User Guide.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following operations are related to `GetBucketVersioning` for
 * S3 on Outposts.
 * 
 * 
 * 
 * - PutBucketVersioning
 * 
 * 
 * 
 * 
 * - PutBucketLifecycleConfiguration
 * 
 * 
 * 
 * 
 * - GetBucketLifecycleConfiguration
 */export const getBucketVersioning = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/versioning", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetBucketVersioning" }, GetBucketVersioningRequest, GetBucketVersioningResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns the tags on an S3 Batch Operations job.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * To use the
 * `GetJobTagging` operation, you must have permission to
 * perform the `s3:GetJobTagging` action. For more information, see Controlling
 * access and labeling jobs using tags in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - CreateJob
 * 
 * 
 * 
 * 
 * - PutJobTagging
 * 
 * 
 * 
 * 
 * - DeleteJobTagging
 */export const getJobTagging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/jobs/{JobId}/tagging", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetJobTagging" }, GetJobTaggingRequest, GetJobTaggingResult, [InternalServiceException, NotFoundException, TooManyRequestsException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Indicates whether the specified Multi-Region Access Point has an access control policy that allows public
 * access.
 * 
 * 
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 * 
 * 
 * The following actions are related to
 * `GetMultiRegionAccessPointPolicyStatus`:
 * 
 * 
 * 
 * - GetMultiRegionAccessPointPolicy
 * 
 * 
 * 
 * 
 * - PutMultiRegionAccessPointPolicy
 */export const getMultiRegionAccessPointPolicyStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/mrap/instances/{Name+}/policystatus", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetMultiRegionAccessPointPolicyStatus" }, GetMultiRegionAccessPointPolicyStatusRequest, GetMultiRegionAccessPointPolicyStatusResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or
 * passive.
 * 
 * 
 * To obtain routing control changes and failover requests, use the Amazon S3 failover control
 * infrastructure endpoints in these five Amazon Web Services Regions:
 * 
 * 
 * 
 * - `us-east-1`
 * 
 * 
 * 
 * 
 * - `us-west-2`
 * 
 * 
 * 
 * 
 * - `ap-southeast-2`
 * 
 * 
 * 
 * 
 * - `ap-northeast-1`
 * 
 * 
 * 
 * 
 * - `eu-west-1`
 */export const getMultiRegionAccessPointRoutes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/mrap/instances/{Mrap+}/routes", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetMultiRegionAccessPointRoutes" }, GetMultiRegionAccessPointRoutesRequest, GetMultiRegionAccessPointRoutesResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Gets the Amazon S3 Storage Lens configuration. For more information, see Assessing your storage
 * activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * To use this action, you must have permission to perform the
 * `s3:GetStorageLensConfiguration` action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 */export const getStorageLensConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelens/{ConfigId}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetStorageLensConfiguration" }, GetStorageLensConfigurationRequest, GetStorageLensConfigurationResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
 * Assessing your
 * storage activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * To use this action, you must have permission to perform the
 * `s3:GetStorageLensConfigurationTagging` action. For more information, see
 * Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */export const getStorageLensConfigurationTagging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelens/{ConfigId}/tagging", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetStorageLensConfigurationTagging" }, GetStorageLensConfigurationTaggingRequest, GetStorageLensConfigurationTaggingResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves the Storage Lens group configuration details.
 * 
 * 
 * To use this operation, you must have the permission to perform the
 * `s3:GetStorageLensGroup` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 * 
 * 
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */export const getStorageLensGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelensgroup/{Name}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetStorageLensGroup" }, GetStorageLensGroupRequest, GetStorageLensGroupResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns a list of the access points that are owned by the Amazon Web Services account and that are associated with the specified directory bucket.
 * 
 * 
 * To list access points for general purpose buckets, see ListAccesspoints.
 * 
 * 
 * To use this operation, you must have the permission to perform the
 * `s3express:ListAccessPointsForDirectoryBuckets` action.
 * 
 * 
 * For information about REST API errors, see REST error responses.
 */export const listAccessPointsForDirectoryBuckets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointfordirectory", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListAccessPointsForDirectoryBuckets" }, ListAccessPointsForDirectoryBucketsRequest, ListAccessPointsForDirectoryBucketsResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account.
 * Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be
 * associated with a single account.
 * 
 * 
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 * 
 * 
 * The following actions are related to `ListMultiRegionAccessPoint`:
 * 
 * 
 * 
 * - CreateMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - DeleteMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - DescribeMultiRegionAccessPointOperation
 * 
 * 
 * 
 * 
 * - GetMultiRegionAccessPoint
 */export const listMultiRegionAccessPoints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/mrap/instances", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListMultiRegionAccessPoints" }, ListMultiRegionAccessPointsRequest, ListMultiRegionAccessPointsResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation allows you to list all of the tags for a specified resource. Each tag is a label consisting of a key and value. Tags can help you organize, track costs for, and control access to resources.
 * 
 * 
 * 
 * 
 * This operation is only supported for the following Amazon S3 resources:
 * 
 * 
 * 
 * - General purpose buckets
 * 
 * 
 * 
 * 
 * - Access Points for directory buckets
 * 
 * 
 * 
 * 
 * - Access Points for general purpose buckets
 * 
 * 
 * 
 * 
 * - Directory buckets
 * 
 * 
 * 
 * 
 * - S3 Storage Lens groups
 * 
 * 
 * 
 * 
 * - S3 Access Grants instances, registered locations, and grants.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the `s3:ListTagsForResource` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Directory bucket permissions
 * 
 * 
 * 
 * For directory buckets, you must have the `s3express:ListTagsForResource` permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * ### HTTP Host header syntax
 * 
 * 
 * 
 * 
 * **Directory buckets ** - The HTTP Host header syntax is `s3express-control.*region*.amazonaws.com`.
 * 
 * 
 * 
 * 
 * 
 * For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/tags/{ResourceArn+}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates the resource policy of the S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:PutAccessGrantsInstanceResourcePolicy` permission to use this operation.
 */export const putAccessGrantsInstanceResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/resourcepolicy", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutAccessGrantsInstanceResourcePolicy" }, PutAccessGrantsInstanceResourcePolicyRequest, PutAccessGrantsInstanceResourcePolicyResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see
 * PutBucketTagging in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Sets the tags for an S3 on Outposts bucket. For more information, see Using
 * Amazon S3 on Outposts in the *Amazon S3 User Guide*.
 * 
 * 
 * Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this,
 * sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost
 * of combined resources, organize your billing information according to resources with the
 * same tag key values. For example, you can tag several resources with a specific application
 * name, and then organize your billing information to see the total cost of that application
 * across several services. For more information, see Cost allocation and
 * tagging.
 * 
 * 
 * 
 * 
 * Within a bucket, if you add a tag that has the same key as an existing tag, the new
 * value overwrites the old value. For more information, see Using cost allocation in Amazon S3
 * bucket tags.
 * 
 * 
 * 
 * 
 * To use this action, you must have permissions to perform the
 * `s3-outposts:PutBucketTagging` action. The Outposts bucket owner has this
 * permission by default and can grant this permission to others. For more information about
 * permissions, see Permissions Related to Bucket Subresource Operations and Managing
 * access permissions to your Amazon S3 resources.
 * 
 * 
 * 
 * `PutBucketTagging` has the following special errors:
 * 
 * 
 * 
 * - Error code: `InvalidTagError`
 * 
 * 
 * 
 * 
 * - Description: The tag provided was not a valid tag. This error can occur if
 * the tag did not pass input validation. For information about tag restrictions,
 * see
 * User-Defined Tag Restrictions and
 * Amazon Web Services-Generated Cost Allocation Tag Restrictions.
 * 
 * 
 * 
 * 
 * 
 * 
 * - Error code: `MalformedXMLError`
 * 
 * 
 * 
 * 
 * - Description: The XML provided does not match the schema.
 * 
 * 
 * 
 * 
 * 
 * 
 * - Error code: `OperationAbortedError `
 * 
 * 
 * 
 * 
 * - Description: A conflicting conditional action is currently in progress
 * against this resource. Try again.
 * 
 * 
 * 
 * 
 * 
 * 
 * - Error code: `InternalError`
 * 
 * 
 * 
 * 
 * - Description: The service was unable to apply the provided tag to the
 * bucket.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `PutBucketTagging`:
 * 
 * 
 * 
 * - GetBucketTagging
 * 
 * 
 * 
 * 
 * - DeleteBucketTagging
 */export const putBucketTagging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/tagging", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutBucketTagging" }, PutBucketTaggingRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation sets the versioning state
 * for
 * S3 on Outposts
 * buckets
 * only. To set the versioning state for an S3 bucket, see PutBucketVersioning in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Sets the versioning state for an S3 on Outposts bucket. With
 * S3
 * Versioning,
 * you can save multiple distinct copies of your
 * objects
 * and recover from unintended user actions and application failures.
 * 
 * 
 * You can set the versioning state to one of the following:
 * 
 * 
 * 
 * - **Enabled** - Enables versioning for the objects in
 * the bucket. All objects added to the bucket receive a unique version ID.
 * 
 * 
 * 
 * - **Suspended** - Suspends versioning for the objects
 * in the bucket. All objects added to the bucket receive the version ID
 * `null`.
 * 
 * 
 * 
 * 
 * 
 * If you've never set versioning on your bucket, it has no versioning state. In that case,
 * a
 * GetBucketVersioning request does not return a versioning state value.
 * 
 * 
 * When you enable S3 Versioning, for each object in your bucket, you have a current
 * version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle
 * rules to expire noncurrent versions after a specified time period. For more information,
 * see Creating and managing
 * a lifecycle configuration for your S3 on Outposts bucket in the Amazon S3
 * User Guide.
 * 
 * 
 * If you have an object expiration lifecycle configuration in your non-versioned bucket
 * and you want to maintain the same permanent delete behavior when you enable versioning, you
 * must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration
 * will manage the deletes of the noncurrent object versions in the version-enabled bucket.
 * For more information, see Versioning in the Amazon S3
 * User Guide.
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following operations are related to `PutBucketVersioning` for
 * S3 on Outposts.
 * 
 * 
 * 
 * - GetBucketVersioning
 * 
 * 
 * 
 * 
 * - PutBucketLifecycleConfiguration
 * 
 * 
 * 
 * 
 * - GetBucketLifecycleConfiguration
 */export const putBucketVersioning = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/versioning", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutBucketVersioning" }, PutBucketVersioningRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the
 * routing status for the specified Regions from active to passive, or from passive to active.
 * A value of `0` indicates a passive status, which means that traffic won't be
 * routed to the specified Region. A value of `100` indicates an active status,
 * which means that traffic will be routed to the specified Region. At least one Region must
 * be active at all times.
 * 
 * 
 * When the routing configuration is changed, any in-progress operations (uploads, copies,
 * deletes, and so on) to formerly active Regions will continue to run to their final
 * completion state (success or failure). The routing configurations of any Regions that
 * aren’t specified remain unchanged.
 * 
 * 
 * 
 * 
 * Updated routing configurations might not be immediately applied. It can take up to 2
 * minutes for your changes to take effect.
 * 
 * 
 * 
 * 
 * To submit routing control changes and failover requests, use the Amazon S3 failover control
 * infrastructure endpoints in these five Amazon Web Services Regions:
 * 
 * 
 * 
 * - `us-east-1`
 * 
 * 
 * 
 * 
 * - `us-west-2`
 * 
 * 
 * 
 * 
 * - `ap-southeast-2`
 * 
 * 
 * 
 * 
 * - `ap-northeast-1`
 * 
 * 
 * 
 * 
 * - `eu-west-1`
 */export const submitMultiRegionAccessPointRoutes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/mrap/instances/{Mrap+}/routes", method: "PATCH", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.SubmitMultiRegionAccessPointRoutes" }, SubmitMultiRegionAccessPointRoutesRequest, SubmitMultiRegionAccessPointRoutesResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates the IAM role of a registered location in your S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:UpdateAccessGrantsLocation` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Additional Permissions
 * 
 * 
 * 
 * You must also have the following permission: `iam:PassRole`
 */export const updateAccessGrantsLocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.UpdateAccessGrantsLocation" }, UpdateAccessGrantsLocationRequest, UpdateAccessGrantsLocationResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates an access grant that gives a grantee access to your S3 data. The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the CreateAccessGrantsInstance. You must also have registered at least one S3 data location in your S3 Access Grants instance using CreateAccessGrantsLocation.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:CreateAccessGrant` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Additional Permissions
 * 
 * 
 * 
 * For any directory identity - `sso:DescribeInstance` and `sso:DescribeApplication`
 * 
 * 
 * 
 * For directory users - `identitystore:DescribeUser`
 * 
 * 
 * 
 * For directory groups - `identitystore:DescribeGroup`
 */export const createAccessGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/grant", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.CreateAccessGrant" }, CreateAccessGrantRequest, CreateAccessGrantResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates an access point and associates it to a specified bucket. For more information, see
 * Managing
 * access to shared datasets with access points or Managing access to
 * shared datasets in directory buckets with access points in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * To create an access point and attach it to a volume on an Amazon FSx file system, see CreateAndAttachS3AccessPoint in the Amazon FSx API
 * Reference.
 * 
 * 
 * 
 * 
 * 
 * 
 * S3 on Outposts only supports VPC-style access points.
 * 
 * 
 * For more information, see Accessing Amazon S3 on Outposts using
 * virtual private cloud (VPC) only access points in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * 
 * 
 * The following actions are related to `CreateAccessPoint`:
 * 
 * 
 * 
 * - GetAccessPoint
 * 
 * 
 * 
 * 
 * - DeleteAccessPoint
 * 
 * 
 * 
 * 
 * - ListAccessPoints
 * 
 * 
 * 
 * 
 * - ListAccessPointsForDirectoryBuckets
 */export const createAccessPoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.CreateAccessPoint" }, CreateAccessPointRequest, CreateAccessPointResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see Create
 * Bucket in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To
 * create an Outposts bucket, you must have S3 on Outposts. For more information, see Using
 * Amazon S3 on Outposts in *Amazon S3 User Guide*.
 * 
 * 
 * Not every string is an acceptable bucket name. For information on bucket naming
 * restrictions, see Working with
 * Amazon S3 Buckets.
 * 
 * 
 * S3 on Outposts buckets support:
 * 
 * 
 * 
 * - Tags
 * 
 * 
 * 
 * - LifecycleConfigurations for deleting expired objects
 * 
 * 
 * 
 * 
 * 
 * For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see
 * 
 * Amazon S3 on Outposts Restrictions and Limitations.
 * 
 * 
 * For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 * endpoint hostname prefix and `x-amz-outpost-id` in your API request, see the
 * Examples section.
 * 
 * 
 * The following actions are related to `CreateBucket` for
 * Amazon S3 on Outposts:
 * 
 * 
 * 
 * - PutObject
 * 
 * 
 * 
 * 
 * - GetBucket
 * 
 * 
 * 
 * 
 * - DeleteBucket
 * 
 * 
 * 
 * 
 * - CreateAccessPoint
 * 
 * 
 * 
 * 
 * - PutAccessPointPolicy
 */export const createBucket = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.CreateBucket" }, CreateBucketRequest, CreateBucketResult, [BucketAlreadyExists, BucketAlreadyOwnedByYou]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Removes the entire tag set from the specified S3 Batch Operations job.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * To use the
 * `DeleteJobTagging` operation, you must have permission to
 * perform the `s3:DeleteJobTagging` action. For more information, see Controlling
 * access and labeling jobs using tags in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - CreateJob
 * 
 * 
 * 
 * 
 * - GetJobTagging
 * 
 * 
 * 
 * 
 * - PutJobTagging
 */export const deleteJobTagging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/jobs/{JobId}/tagging", method: "DELETE", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteJobTagging" }, DeleteJobTaggingRequest, DeleteJobTaggingResult, [InternalServiceException, NotFoundException, TooManyRequestsException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point,
 * only the Multi-Region Access Point itself.
 * 
 * 
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 * 
 * 
 * This request is asynchronous, meaning that you might receive a response before the
 * command has completed. When this request provides a response, it provides a token that you
 * can use to monitor the status of the request with
 * `DescribeMultiRegionAccessPointOperation`.
 * 
 * 
 * The following actions are related to `DeleteMultiRegionAccessPoint`:
 * 
 * 
 * 
 * - CreateMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - DescribeMultiRegionAccessPointOperation
 * 
 * 
 * 
 * 
 * - GetMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - ListMultiRegionAccessPoints
 */export const deleteMultiRegionAccessPoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/async-requests/mrap/delete", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DeleteMultiRegionAccessPoint" }, DeleteMultiRegionAccessPointRequest, DeleteMultiRegionAccessPointResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns configuration information about the specified access point.
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `GetAccessPoint`:
 * 
 * 
 * 
 * - CreateAccessPoint
 * 
 * 
 * 
 * 
 * - DeleteAccessPoint
 * 
 * 
 * 
 * 
 * - ListAccessPoints
 */export const getAccessPoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessPoint" }, GetAccessPointRequest, GetAccessPointResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns configuration information about the specified Object Lambda Access Point
 * 
 * 
 * The following actions are related to `GetAccessPointForObjectLambda`:
 * 
 * 
 * 
 * - CreateAccessPointForObjectLambda
 * 
 * 
 * 
 * 
 * - DeleteAccessPointForObjectLambda
 * 
 * 
 * 
 * 
 * - ListAccessPointsForObjectLambda
 */export const getAccessPointForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda/{Name}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessPointForObjectLambda" }, GetAccessPointForObjectLambdaRequest, GetAccessPointForObjectLambdaResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Indicates whether the specified access point currently has a policy that allows public access.
 * For more information about public access through access points, see Managing Data Access with Amazon S3
 * access points in the *Amazon S3 User Guide*.
 */export const getAccessPointPolicyStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint/{Name}/policyStatus", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetAccessPointPolicyStatus" }, GetAccessPointPolicyStatusRequest, GetAccessPointPolicyStatusResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns a temporary access credential from S3 Access Grants to the grantee or client application. The temporary credential is an Amazon Web Services STS token that grants them access to the S3 data.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:GetDataAccess` permission to use this operation.
 * 
 * 
 * 
 * 
 * ### Additional Permissions
 * 
 * 
 * 
 * The IAM role that S3 Access Grants assumes must have the following permissions specified in the trust policy when registering the location: `sts:AssumeRole`, for directory users or groups `sts:SetContext`, and for IAM users or roles `sts:SetSourceIdentity`.
 */export const getDataAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/dataaccess", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetDataAccess" }, GetDataAccessRequest, GetDataAccessResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Retrieves the `PublicAccessBlock` configuration for an Amazon Web Services account. This
 * operation returns the effective account-level configuration, which may inherit from
 * organization-level policies. For more information, see Using Amazon S3 block
 * public access.
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - DeletePublicAccessBlock
 * 
 * 
 * 
 * 
 * - PutPublicAccessBlock
 */export const getPublicAccessBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/configuration/publicAccessBlock", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetPublicAccessBlock" }, GetPublicAccessBlockRequest, GetPublicAccessBlockOutput, [NoSuchPublicAccessBlockConfiguration]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns the list of access grants in your S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:ListAccessGrants` permission to use this operation.
 */export const listAccessGrants = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/grants", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListAccessGrants" }, ListAccessGrantsRequest, ListAccessGrantsResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns a list of S3 Access Grants instances. An S3 Access Grants instance serves as a logical grouping for your individual access grants. You can only have one S3 Access Grants instance per Region per account.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:ListAccessGrantsInstances` permission to use this operation.
 */export const listAccessGrantsInstances = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstances", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListAccessGrantsInstances" }, ListAccessGrantsInstancesRequest, ListAccessGrantsInstancesResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns a list of the locations registered in your S3 Access Grants instance.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:ListAccessGrantsLocations` permission to use this operation.
 */export const listAccessGrantsLocations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/locations", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListAccessGrantsLocations" }, ListAccessGrantsLocationsRequest, ListAccessGrantsLocationsResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns a list of the access points. You can retrieve up to 1,000 access points per call. If the call
 * returns more than 1,000 access points (or the number specified in `maxResults`,
 * whichever is less), the response will include a continuation token that you can use to list
 * the additional access points.
 * 
 * 
 * Returns only access points attached to S3 buckets by default. To return all access points specify
 * `DataSourceType` as `ALL`.
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to `ListAccessPoints`:
 * 
 * 
 * 
 * - CreateAccessPoint
 * 
 * 
 * 
 * 
 * - DeleteAccessPoint
 * 
 * 
 * 
 * 
 * - GetAccessPoint
 */export const listAccessPoints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspoint", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListAccessPoints" }, ListAccessPointsRequest, ListAccessPointsResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there
 * are more access points than what can be returned in one call, the response will include a
 * continuation token that you can use to list the additional access points.
 * 
 * 
 * The following actions are related to
 * `ListAccessPointsForObjectLambda`:
 * 
 * 
 * 
 * - CreateAccessPointForObjectLambda
 * 
 * 
 * 
 * 
 * - DeleteAccessPointForObjectLambda
 * 
 * 
 * 
 * 
 * - GetAccessPointForObjectLambda
 */export const listAccessPointsForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListAccessPointsForObjectLambda" }, ListAccessPointsForObjectLambdaRequest, ListAccessPointsForObjectLambdaResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Use this API to list the access grants that grant the caller access to Amazon S3 data through S3 Access Grants. The caller (grantee) can be an Identity and Access Management (IAM) identity or Amazon Web Services Identity Center corporate directory identity. You must pass the Amazon Web Services account of the S3 data owner (grantor) in the request. You can, optionally, narrow the results by `GrantScope`, using a fragment of the data's S3 path, and S3 Access Grants will return only the grants with a path that contains the path fragment. You can also pass the `AllowedByApplication` filter in the request, which returns only the grants authorized for applications, whether the application is the caller's Identity Center application or any other application (`ALL`). For more information, see List the caller's access grants in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * You must have the `s3:ListCallerAccessGrants` permission to use this operation.
 */export const listCallerAccessGrants = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accessgrantsinstance/caller/grants", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListCallerAccessGrants" }, ListCallerAccessGrantsRequest, ListCallerAccessGrantsResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated
 * sender of the request. For more information, see Using Amazon S3 on Outposts in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 * endpoint hostname prefix and `x-amz-outpost-id` in your request, see the Examples section.
 */export const listRegionalBuckets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListRegionalBuckets" }, ListRegionalBucketsRequest, ListRegionalBucketsResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see
 * Assessing your
 * storage activity and usage with Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * To use this action, you must have permission to perform the
 * `s3:ListStorageLensConfigurations` action. For more information, see
 * Setting permissions to
 * use Amazon S3 Storage Lens in the *Amazon S3 User Guide*.
 */export const listStorageLensConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelens", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListStorageLensConfigurations" }, ListStorageLensConfigurationsRequest, ListStorageLensConfigurationsResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists all the Storage Lens groups in the specified home Region.
 * 
 * 
 * To use this operation, you must have the permission to perform the
 * `s3:ListStorageLensGroups` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 * 
 * 
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */export const listStorageLensGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelensgroup", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListStorageLensGroups" }, ListStorageLensGroupsRequest, ListStorageLensGroupsResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Sets the supplied tag-set on an S3 Batch Operations job.
 * 
 * 
 * A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending
 * a PUT request against the tagging subresource that is associated with the job. To modify
 * the existing tag set, you can either replace the existing tag set entirely, or make changes
 * within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this operation to replace the tag set
 * with the one you modified. For more information, see Controlling
 * access and labeling jobs using tags in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * 
 * - If you send this request with an empty tag set, Amazon S3 deletes the existing
 * tag set on the Batch Operations job. If you use this method, you are charged for a Tier
 * 1 Request (PUT). For more information, see Amazon S3 pricing.
 * 
 * 
 * 
 * - For deleting existing tags for your Batch Operations job, a DeleteJobTagging request is preferred because it achieves the same
 * result without incurring charges.
 * 
 * 
 * 
 * - A few things to consider about using tags:
 * 
 * 
 * 
 * - Amazon S3 limits the maximum number of tags to 50 tags per job.
 * 
 * 
 * 
 * - You can associate up to 50 tags with a job as long as they have unique
 * tag keys.
 * 
 * 
 * 
 * - A tag key can be up to 128 Unicode characters in length, and tag values
 * can be up to 256 Unicode characters in length.
 * 
 * 
 * 
 * - The key and values are case sensitive.
 * 
 * 
 * 
 * - For tagging-related restrictions related to characters and encodings, see
 * User-Defined Tag Restrictions in the *Billing and Cost Management User Guide*.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * To use the
 * `PutJobTagging` operation, you must have permission to
 * perform the `s3:PutJobTagging` action.
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - CreateJob
 * 
 * 
 * 
 * 
 * - GetJobTagging
 * 
 * 
 * 
 * 
 * - DeleteJobTagging
 */export const putJobTagging = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/jobs/{JobId}/tagging", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutJobTagging" }, PutJobTaggingRequest, PutJobTaggingResult, [InternalServiceException, NotFoundException, TooManyRequestsException, TooManyTagsException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only
 * one policy, so a request made to this action replaces any existing policy that is
 * associated with the specified Multi-Region Access Point.
 * 
 * 
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 * 
 * 
 * The following actions are related to
 * `PutMultiRegionAccessPointPolicy`:
 * 
 * 
 * 
 * - GetMultiRegionAccessPointPolicy
 * 
 * 
 * 
 * 
 * - GetMultiRegionAccessPointPolicyStatus
 */export const putMultiRegionAccessPointPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/async-requests/mrap/put-policy", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutMultiRegionAccessPointPolicy" }, PutMultiRegionAccessPointPolicyRequest, PutMultiRegionAccessPointPolicyResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * To use the
 * `UpdateJobPriority` operation, you must have permission to
 * perform the `s3:UpdateJobPriority` action.
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - CreateJob
 * 
 * 
 * 
 * 
 * - ListJobs
 * 
 * 
 * 
 * 
 * - DescribeJob
 * 
 * 
 * 
 * 
 * - UpdateJobStatus
 */export const updateJobPriority = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/jobs/{JobId}/priority", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.UpdateJobPriority" }, UpdateJobPriorityRequest, UpdateJobPriorityResult, [BadRequestException, InternalServiceException, NotFoundException, TooManyRequestsException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates the status for the specified job. Use this operation to confirm that you want to
 * run a job or to cancel an existing job. For more information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * To use the
 * `UpdateJobStatus` operation, you must have permission to
 * perform the `s3:UpdateJobStatus` action.
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - CreateJob
 * 
 * 
 * 
 * 
 * - ListJobs
 * 
 * 
 * 
 * 
 * - DescribeJob
 * 
 * 
 * 
 * 
 * - UpdateJobStatus
 */export const updateJobStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/jobs/{JobId}/status", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.UpdateJobStatus" }, UpdateJobStatusRequest, UpdateJobStatusResult, [BadRequestException, InternalServiceException, JobStatusException, NotFoundException, TooManyRequestsException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Creates a Multi-Region Access Point and associates it with the specified buckets. For more information
 * about creating Multi-Region Access Points, see Creating Multi-Region Access Points in the *Amazon S3 User Guide*.
 * 
 * 
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 * 
 * 
 * This request is asynchronous, meaning that you might receive a response before the
 * command has completed. When this request provides a response, it provides a token that you
 * can use to monitor the status of the request with
 * `DescribeMultiRegionAccessPointOperation`.
 * 
 * 
 * The following actions are related to `CreateMultiRegionAccessPoint`:
 * 
 * 
 * 
 * - DeleteMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - DescribeMultiRegionAccessPointOperation
 * 
 * 
 * 
 * 
 * - GetMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - ListMultiRegionAccessPoints
 */export const createMultiRegionAccessPoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/async-requests/mrap/create", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.CreateMultiRegionAccessPoint" }, CreateMultiRegionAccessPointRequest, CreateMultiRegionAccessPointResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a new S3 Storage Lens group and associates it with the specified Amazon Web Services account ID. An
 * S3 Storage Lens group is a custom grouping of objects based on prefix, suffix, object tags,
 * object size, object age, or a combination of these filters. For each Storage Lens group
 * that you’ve created, you can also optionally add Amazon Web Services resource tags. For more information
 * about S3 Storage Lens groups, see Working with S3 Storage Lens
 * groups.
 * 
 * 
 * To use this operation, you must have the permission to perform the
 * `s3:CreateStorageLensGroup` action. If you’re trying to create a Storage Lens
 * group with Amazon Web Services resource tags, you must also have permission to perform the
 * `s3:TagResource` action. For more information about the required Storage Lens
 * Groups permissions, see Setting account permissions to use S3 Storage Lens groups.
 * 
 * 
 * For information about Storage Lens groups errors, see List of Amazon S3 Storage
 * Lens error codes.
 */export const createStorageLensGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelensgroup", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.CreateStorageLensGroup" }, CreateStorageLensGroupRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns configuration information about the specified Multi-Region Access Point.
 * 
 * 
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 * 
 * 
 * The following actions are related to `GetMultiRegionAccessPoint`:
 * 
 * 
 * 
 * - CreateMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - DeleteMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - DescribeMultiRegionAccessPointOperation
 * 
 * 
 * 
 * 
 * - ListMultiRegionAccessPoints
 */export const getMultiRegionAccessPoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/mrap/instances/{Name+}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetMultiRegionAccessPoint" }, GetMultiRegionAccessPointRequest, GetMultiRegionAccessPointResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Returns the access control policy of the specified Multi-Region Access Point.
 * 
 * 
 * This action will always be routed to the US West (Oregon) Region. For more information
 * about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point
 * restrictions and limitations in the *Amazon S3 User Guide*.
 * 
 * 
 * The following actions are related to
 * `GetMultiRegionAccessPointPolicy`:
 * 
 * 
 * 
 * - GetMultiRegionAccessPointPolicyStatus
 * 
 * 
 * 
 * 
 * - PutMultiRegionAccessPointPolicy
 */export const getMultiRegionAccessPointPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/mrap/instances/{Name+}/policy", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.GetMultiRegionAccessPointPolicy" }, GetMultiRegionAccessPointPolicyRequest, GetMultiRegionAccessPointPolicyResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves the configuration parameters and status for a Batch Operations job. For more
 * information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * To use the `DescribeJob` operation, you must have permission to perform the `s3:DescribeJob` action.
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - CreateJob
 * 
 * 
 * 
 * 
 * - ListJobs
 * 
 * 
 * 
 * 
 * - UpdateJobPriority
 * 
 * 
 * 
 * 
 * - UpdateJobStatus
 */export const describeJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/jobs/{JobId}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DescribeJob" }, DescribeJobRequest, DescribeJobResult, [BadRequestException, InternalServiceException, NotFoundException, TooManyRequestsException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists current S3 Batch Operations jobs as well as the jobs that have ended within the last 90
 * days for the Amazon Web Services account making the request. For more information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * To use the
 * `ListJobs` operation, you must have permission to
 * perform the `s3:ListJobs` action.
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * 
 * 
 * - CreateJob
 * 
 * 
 * 
 * 
 * - DescribeJob
 * 
 * 
 * 
 * 
 * - UpdateJobPriority
 * 
 * 
 * 
 * 
 * - UpdateJobStatus
 */export const listJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/jobs", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.ListJobs" }, ListJobsRequest, ListJobsResult, [InternalServiceException, InvalidNextTokenException, InvalidRequestException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a
 * lifecycle configuration to an S3 bucket, see PutBucketLifecycleConfiguration in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * 
 * Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an
 * existing lifecycle configuration. Outposts buckets only support lifecycle configurations
 * that delete/expire objects after a certain period of time and abort incomplete multipart
 * uploads.
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following actions are related to
 * `PutBucketLifecycleConfiguration`:
 * 
 * 
 * 
 * - GetBucketLifecycleConfiguration
 * 
 * 
 * 
 * 
 * - DeleteBucketLifecycleConfiguration
 */export const putBucketLifecycleConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/lifecycleconfiguration", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutBucketLifecycleConfiguration" }, PutBucketLifecycleConfigurationRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Creates an Object Lambda Access Point. For more information, see Transforming objects with
 * Object Lambda Access Points in the *Amazon S3 User Guide*.
 * 
 * 
 * The following actions are related to
 * `CreateAccessPointForObjectLambda`:
 * 
 * 
 * 
 * - DeleteAccessPointForObjectLambda
 * 
 * 
 * 
 * 
 * - GetAccessPointForObjectLambda
 * 
 * 
 * 
 * 
 * - ListAccessPointsForObjectLambda
 */export const createAccessPointForObjectLambda = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/accesspointforobjectlambda/{Name}", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.CreateAccessPointForObjectLambda" }, CreateAccessPointForObjectLambdaRequest, CreateAccessPointForObjectLambdaResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information
 * about managing Multi-Region Access Points and how asynchronous requests work, see Using Multi-Region Access Points in the *Amazon S3 User Guide*.
 * 
 * 
 * The following actions are related to `GetMultiRegionAccessPoint`:
 * 
 * 
 * 
 * - CreateMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - DeleteMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - GetMultiRegionAccessPoint
 * 
 * 
 * 
 * 
 * - ListMultiRegionAccessPoints
 */export const describeMultiRegionAccessPointOperation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/async-requests/mrap/{RequestTokenARN+}", method: "GET", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.DescribeMultiRegionAccessPointOperation" }, DescribeMultiRegionAccessPointOperationRequest, DescribeMultiRegionAccessPointOperationResult, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This action creates an Amazon S3 on Outposts bucket's replication configuration. To create
 * an S3 bucket's replication configuration, see PutBucketReplication
 * in the *Amazon S3 API Reference*.
 * 
 * 
 * 
 * 
 * Creates a replication configuration or replaces an existing one. For information about
 * S3 replication on Outposts configuration, see Replicating objects for
 * S3 on Outposts in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * It can take a while to propagate `PUT` or `DELETE` requests for
 * a replication configuration to all S3 on Outposts systems. Therefore, the replication
 * configuration that's returned by a `GET` request soon after a
 * `PUT` or `DELETE` request might return a more recent result
 * than what's on the Outpost. If an Outpost is offline, the delay in updating the
 * replication configuration on that Outpost can be significant.
 * 
 * 
 * 
 * 
 * Specify the replication configuration in the request body. In the replication
 * configuration, you provide the following information:
 * 
 * 
 * 
 * - The name of the destination bucket or buckets where you want S3 on Outposts to
 * replicate objects
 * 
 * 
 * 
 * - The Identity and Access Management (IAM) role that S3 on Outposts can assume to replicate objects on
 * your behalf
 * 
 * 
 * 
 * - Other relevant information, such as replication rules
 * 
 * 
 * 
 * 
 * 
 * A replication configuration must include at least one rule and can contain a maximum of
 * 100. Each rule identifies a subset of objects to replicate by filtering the objects in the
 * source Outposts bucket. To choose additional subsets of objects to replicate, add a rule
 * for each subset.
 * 
 * 
 * To specify a subset of the objects in the source Outposts bucket to apply a replication
 * rule to, add the `Filter` element as a child of the `Rule` element.
 * You can filter objects based on an object key prefix, one or more object tags, or both.
 * When you add the `Filter` element in the configuration, you must also add the
 * following elements: `DeleteMarkerReplication`, `Status`, and
 * `Priority`.
 * 
 * 
 * Using `PutBucketReplication` on Outposts requires that both the source and
 * destination buckets must have versioning enabled. For information about enabling versioning
 * on a bucket, see Managing S3 Versioning
 * for your S3 on Outposts bucket.
 * 
 * 
 * For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * **Handling Replication of Encrypted Objects**
 * 
 * 
 * 
 * Outposts buckets are encrypted at all times. All the objects in the source Outposts
 * bucket are encrypted and can be replicated. Also, all the replicas in the destination
 * Outposts bucket are encrypted with the same encryption key as the objects in the source
 * Outposts bucket.
 * 
 * 
 * 
 * **Permissions**
 * 
 * 
 * 
 * To create a `PutBucketReplication` request, you must have
 * `s3-outposts:PutReplicationConfiguration` permissions for the bucket. The
 * Outposts bucket owner has this permission by default and can grant it to others. For more
 * information about permissions, see Setting up IAM with
 * S3 on Outposts and Managing access to
 * S3 on Outposts buckets.
 * 
 * 
 * 
 * 
 * To perform this operation, the user or role must also have the
 * `iam:CreateRole` and `iam:PassRole` permissions. For more
 * information, see Granting a user permissions to
 * pass a role to an Amazon Web Services service.
 * 
 * 
 * 
 * 
 * All Amazon S3 on Outposts REST API requests for this action require an additional parameter of `x-amz-outpost-id` to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of `s3-control`. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the `x-amz-outpost-id` derived by using the access point ARN, see the Examples section.
 * 
 * 
 * The following operations are related to `PutBucketReplication`:
 * 
 * 
 * 
 * - GetBucketReplication
 * 
 * 
 * 
 * 
 * - DeleteBucketReplication
 */export const putBucketReplication = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/bucket/{Bucket}/replication", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutBucketReplication" }, PutBucketReplicationRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation is not supported by directory buckets.
 * 
 * 
 * 
 * 
 * Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Working with
 * Amazon S3 Storage Lens in the *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * 
 * To use this action, you must have permission to perform the
 * `s3:PutStorageLensConfiguration` action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the
 * *Amazon S3 User Guide*.
 */export const putStorageLensConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/storagelens/{ConfigId}", method: "PUT", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.PutStorageLensConfiguration" }, PutStorageLensConfigurationRequest, S.Struct({}), []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * This operation creates an S3 Batch Operations job.
 * 
 * 
 * You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects.
 * Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more
 * information, see S3 Batch Operations in the *Amazon S3 User Guide*.
 * 
 * 
 * 
 * ### Permissions
 * 
 * 
 * 
 * For information about permissions required to use the Batch Operations, see Granting permissions for S3 Batch Operations in the Amazon S3
 * User Guide.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - DescribeJob
 * 
 * 
 * 
 * 
 * - ListJobs
 * 
 * 
 * 
 * 
 * - UpdateJobPriority
 * 
 * 
 * 
 * 
 * - UpdateJobStatus
 * 
 * 
 * 
 * 
 * - JobOperation
 */export const createJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-08-20", uri: "/v20180820/jobs", sdkId: "S3 Control", sigV4ServiceName: "s3", name: "AWSS3ControlServiceV20180820.CreateJob" }, CreateJobRequest, CreateJobResult, [BadRequestException, IdempotencyException, InternalServiceException, TooManyRequestsException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
