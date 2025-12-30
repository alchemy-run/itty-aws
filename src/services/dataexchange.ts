import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AcceptanceStateFilterValues = S.Array(S.String);
export const ListOf__string = S.Array(S.String);
export class AcceptDataGrantRequest extends S.Class<AcceptDataGrantRequest>("AcceptDataGrantRequest")({DataGrantArn: S.String}) {}
export class CancelJobRequest extends S.Class<CancelJobRequest>("CancelJobRequest")({JobId: S.String}) {}
export const MapOf__string = S.Record({key: S.String, value: S.String});
export class CreateDataSetRequest extends S.Class<CreateDataSetRequest>("CreateDataSetRequest")({AssetType: S.String, Description: S.String, Name: S.String, Tags: S.optional(MapOf__string)}) {}
export class CreateRevisionRequest extends S.Class<CreateRevisionRequest>("CreateRevisionRequest")({Comment: S.optional(S.String), DataSetId: S.String, Tags: S.optional(MapOf__string)}) {}
export class DeleteAssetRequest extends S.Class<DeleteAssetRequest>("DeleteAssetRequest")({AssetId: S.String, DataSetId: S.String, RevisionId: S.String}) {}
export class DeleteDataGrantRequest extends S.Class<DeleteDataGrantRequest>("DeleteDataGrantRequest")({DataGrantId: S.String}) {}
export class DeleteDataSetRequest extends S.Class<DeleteDataSetRequest>("DeleteDataSetRequest")({DataSetId: S.String}) {}
export class DeleteEventActionRequest extends S.Class<DeleteEventActionRequest>("DeleteEventActionRequest")({EventActionId: S.String}) {}
export class DeleteRevisionRequest extends S.Class<DeleteRevisionRequest>("DeleteRevisionRequest")({DataSetId: S.String, RevisionId: S.String}) {}
export class GetAssetRequest extends S.Class<GetAssetRequest>("GetAssetRequest")({AssetId: S.String, DataSetId: S.String, RevisionId: S.String}) {}
export class GetDataGrantRequest extends S.Class<GetDataGrantRequest>("GetDataGrantRequest")({DataGrantId: S.String}) {}
export class GetDataSetRequest extends S.Class<GetDataSetRequest>("GetDataSetRequest")({DataSetId: S.String}) {}
export class GetEventActionRequest extends S.Class<GetEventActionRequest>("GetEventActionRequest")({EventActionId: S.String}) {}
export class GetJobRequest extends S.Class<GetJobRequest>("GetJobRequest")({JobId: S.String}) {}
export class GetReceivedDataGrantRequest extends S.Class<GetReceivedDataGrantRequest>("GetReceivedDataGrantRequest")({DataGrantArn: S.String}) {}
export class GetRevisionRequest extends S.Class<GetRevisionRequest>("GetRevisionRequest")({DataSetId: S.String, RevisionId: S.String}) {}
export class ListDataGrantsRequest extends S.Class<ListDataGrantsRequest>("ListDataGrantsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListDataSetRevisionsRequest extends S.Class<ListDataSetRevisionsRequest>("ListDataSetRevisionsRequest")({DataSetId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListDataSetsRequest extends S.Class<ListDataSetsRequest>("ListDataSetsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Origin: S.optional(S.String)}) {}
export class ListEventActionsRequest extends S.Class<ListEventActionsRequest>("ListEventActionsRequest")({EventSourceId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListJobsRequest extends S.Class<ListJobsRequest>("ListJobsRequest")({DataSetId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), RevisionId: S.optional(S.String)}) {}
export class ListReceivedDataGrantsRequest extends S.Class<ListReceivedDataGrantsRequest>("ListReceivedDataGrantsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), AcceptanceState: S.optional(AcceptanceStateFilterValues)}) {}
export class ListRevisionAssetsRequest extends S.Class<ListRevisionAssetsRequest>("ListRevisionAssetsRequest")({DataSetId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), RevisionId: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class RevokeRevisionRequest extends S.Class<RevokeRevisionRequest>("RevokeRevisionRequest")({DataSetId: S.String, RevisionId: S.String, RevocationComment: S.String}) {}
export class SendApiAssetRequest extends S.Class<SendApiAssetRequest>("SendApiAssetRequest")({Body: S.optional(H.Body("undefined", S.String)), QueryStringParameters: S.optional(MapOf__string), AssetId: H.Header("x-amzn-dataexchange-asset-id"), DataSetId: H.Header("x-amzn-dataexchange-data-set-id"), RequestHeaders: S.optional(MapOf__string), Method: S.optional(H.Header("x-amzn-dataexchange-http-method")), Path: S.optional(H.Header("x-amzn-dataexchange-path")), RevisionId: H.Header("x-amzn-dataexchange-revision-id")}) {}
export class StartJobRequest extends S.Class<StartJobRequest>("StartJobRequest")({JobId: S.String}) {}
export class StartJobResponse extends S.Class<StartJobResponse>("StartJobResponse")({}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: MapOf__string}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: ListOf__string}) {}
export class UpdateAssetRequest extends S.Class<UpdateAssetRequest>("UpdateAssetRequest")({AssetId: S.String, DataSetId: S.String, Name: S.String, RevisionId: S.String}) {}
export class UpdateDataSetRequest extends S.Class<UpdateDataSetRequest>("UpdateDataSetRequest")({DataSetId: S.String, Description: S.optional(S.String), Name: S.optional(S.String)}) {}
export class ExportServerSideEncryption extends S.Class<ExportServerSideEncryption>("ExportServerSideEncryption")({KmsKeyArn: S.optional(S.String), Type: S.String}) {}
export class AutoExportRevisionDestinationEntry extends S.Class<AutoExportRevisionDestinationEntry>("AutoExportRevisionDestinationEntry")({Bucket: S.String, KeyPattern: S.optional(S.String)}) {}
export class AutoExportRevisionToS3RequestDetails extends S.Class<AutoExportRevisionToS3RequestDetails>("AutoExportRevisionToS3RequestDetails")({Encryption: S.optional(ExportServerSideEncryption), RevisionDestination: AutoExportRevisionDestinationEntry}) {}
export class Action extends S.Class<Action>("Action")({ExportRevisionToS3: S.optional(AutoExportRevisionToS3RequestDetails)}) {}
export class UpdateEventActionRequest extends S.Class<UpdateEventActionRequest>("UpdateEventActionRequest")({Action: S.optional(Action), EventActionId: S.String}) {}
export class UpdateRevisionRequest extends S.Class<UpdateRevisionRequest>("UpdateRevisionRequest")({Comment: S.optional(S.String), DataSetId: S.String, Finalized: S.optional(S.Boolean), RevisionId: S.String}) {}
export class AcceptDataGrantResponse extends S.Class<AcceptDataGrantResponse>("AcceptDataGrantResponse")({Name: S.String, SenderPrincipal: S.optional(S.String), ReceiverPrincipal: S.String, Description: S.optional(S.String), AcceptanceState: S.String, AcceptedAt: S.optional(S.Date), EndsAt: S.optional(S.Date), GrantDistributionScope: S.String, DataSetId: S.String, Id: S.String, Arn: S.String, CreatedAt: S.Date, UpdatedAt: S.Date}) {}
export class CreateDataGrantRequest extends S.Class<CreateDataGrantRequest>("CreateDataGrantRequest")({Name: S.String, GrantDistributionScope: S.String, ReceiverPrincipal: S.String, SourceDataSetId: S.String, EndsAt: S.optional(S.Date), Description: S.optional(S.String), Tags: S.optional(MapOf__string)}) {}
export class CreateRevisionResponse extends S.Class<CreateRevisionResponse>("CreateRevisionResponse")({Arn: S.optional(S.String), Comment: S.optional(S.String), CreatedAt: S.optional(S.Date), DataSetId: S.optional(S.String), Finalized: S.optional(S.Boolean), Id: S.optional(S.String), SourceId: S.optional(S.String), Tags: S.optional(MapOf__string), UpdatedAt: S.optional(S.Date), RevocationComment: S.optional(S.String), Revoked: S.optional(S.Boolean), RevokedAt: S.optional(S.Date)}) {}
export class GetDataGrantResponse extends S.Class<GetDataGrantResponse>("GetDataGrantResponse")({Name: S.String, SenderPrincipal: S.String, ReceiverPrincipal: S.String, Description: S.optional(S.String), AcceptanceState: S.String, AcceptedAt: S.optional(S.Date), EndsAt: S.optional(S.Date), GrantDistributionScope: S.String, DataSetId: S.String, SourceDataSetId: S.String, Id: S.String, Arn: S.String, CreatedAt: S.Date, UpdatedAt: S.Date, Tags: S.optional(MapOf__string)}) {}
export class OriginDetails extends S.Class<OriginDetails>("OriginDetails")({ProductId: S.optional(S.String), DataGrantId: S.optional(S.String)}) {}
export class GetDataSetResponse extends S.Class<GetDataSetResponse>("GetDataSetResponse")({Arn: S.optional(S.String), AssetType: S.optional(S.String), CreatedAt: S.optional(S.Date), Description: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Origin: S.optional(S.String), OriginDetails: S.optional(OriginDetails), SourceId: S.optional(S.String), Tags: S.optional(MapOf__string), UpdatedAt: S.optional(S.Date)}) {}
export class RevisionPublished extends S.Class<RevisionPublished>("RevisionPublished")({DataSetId: S.String}) {}
export class Event extends S.Class<Event>("Event")({RevisionPublished: S.optional(RevisionPublished)}) {}
export class GetEventActionResponse extends S.Class<GetEventActionResponse>("GetEventActionResponse")({Action: S.optional(Action), Arn: S.optional(S.String), CreatedAt: S.optional(S.Date), Event: S.optional(Event), Id: S.optional(S.String), Tags: S.optional(MapOf__string), UpdatedAt: S.optional(S.Date)}) {}
export class GetReceivedDataGrantResponse extends S.Class<GetReceivedDataGrantResponse>("GetReceivedDataGrantResponse")({Name: S.String, SenderPrincipal: S.optional(S.String), ReceiverPrincipal: S.String, Description: S.optional(S.String), AcceptanceState: S.String, AcceptedAt: S.optional(S.Date), EndsAt: S.optional(S.Date), GrantDistributionScope: S.String, DataSetId: S.String, Id: S.String, Arn: S.String, CreatedAt: S.Date, UpdatedAt: S.Date}) {}
export class GetRevisionResponse extends S.Class<GetRevisionResponse>("GetRevisionResponse")({Arn: S.optional(S.String), Comment: S.optional(S.String), CreatedAt: S.optional(S.Date), DataSetId: S.optional(S.String), Finalized: S.optional(S.Boolean), Id: S.optional(S.String), SourceId: S.optional(S.String), Tags: S.optional(MapOf__string), UpdatedAt: S.optional(S.Date), RevocationComment: S.optional(S.String), Revoked: S.optional(S.Boolean), RevokedAt: S.optional(S.Date)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(MapOf__string)}) {}
export class RevokeRevisionResponse extends S.Class<RevokeRevisionResponse>("RevokeRevisionResponse")({Arn: S.optional(S.String), Comment: S.optional(S.String), CreatedAt: S.optional(S.Date), DataSetId: S.optional(S.String), Finalized: S.optional(S.Boolean), Id: S.optional(S.String), SourceId: S.optional(S.String), UpdatedAt: S.optional(S.Date), RevocationComment: S.optional(S.String), Revoked: S.optional(S.Boolean), RevokedAt: S.optional(S.Date)}) {}
export class SendApiAssetResponse extends S.Class<SendApiAssetResponse>("SendApiAssetResponse")({Body: S.optional(H.Body("undefined", S.String)), ResponseHeaders: S.optional(MapOf__string)}) {}
export class S3SnapshotAsset extends S.Class<S3SnapshotAsset>("S3SnapshotAsset")({Size: S.Number}) {}
export class RedshiftDataShareAsset extends S.Class<RedshiftDataShareAsset>("RedshiftDataShareAsset")({Arn: S.String}) {}
export class ApiGatewayApiAsset extends S.Class<ApiGatewayApiAsset>("ApiGatewayApiAsset")({ApiDescription: S.optional(S.String), ApiEndpoint: S.optional(S.String), ApiId: S.optional(S.String), ApiKey: S.optional(S.String), ApiName: S.optional(S.String), ApiSpecificationDownloadUrl: S.optional(S.String), ApiSpecificationDownloadUrlExpiresAt: S.optional(S.Date), ProtocolType: S.optional(S.String), Stage: S.optional(S.String)}) {}
export class KmsKeyToGrant extends S.Class<KmsKeyToGrant>("KmsKeyToGrant")({KmsKeyArn: S.String}) {}
export const ListOfKmsKeysToGrant = S.Array(KmsKeyToGrant);
export class S3DataAccessAsset extends S.Class<S3DataAccessAsset>("S3DataAccessAsset")({Bucket: S.String, KeyPrefixes: S.optional(ListOf__string), Keys: S.optional(ListOf__string), S3AccessPointAlias: S.optional(S.String), S3AccessPointArn: S.optional(S.String), KmsKeysToGrant: S.optional(ListOfKmsKeysToGrant)}) {}
export const ListOfLFTagValues = S.Array(S.String);
export class LFTag extends S.Class<LFTag>("LFTag")({TagKey: S.String, TagValues: ListOfLFTagValues}) {}
export const ListOfLFTags = S.Array(LFTag);
export class DatabaseLFTagPolicy extends S.Class<DatabaseLFTagPolicy>("DatabaseLFTagPolicy")({Expression: ListOfLFTags}) {}
export class TableLFTagPolicy extends S.Class<TableLFTagPolicy>("TableLFTagPolicy")({Expression: ListOfLFTags}) {}
export class LFResourceDetails extends S.Class<LFResourceDetails>("LFResourceDetails")({Database: S.optional(DatabaseLFTagPolicy), Table: S.optional(TableLFTagPolicy)}) {}
export class LFTagPolicyDetails extends S.Class<LFTagPolicyDetails>("LFTagPolicyDetails")({CatalogId: S.String, ResourceType: S.String, ResourceDetails: LFResourceDetails}) {}
export class LakeFormationDataPermissionDetails extends S.Class<LakeFormationDataPermissionDetails>("LakeFormationDataPermissionDetails")({LFTagPolicy: S.optional(LFTagPolicyDetails)}) {}
export const ListOfLFPermissions = S.Array(S.String);
export class LakeFormationDataPermissionAsset extends S.Class<LakeFormationDataPermissionAsset>("LakeFormationDataPermissionAsset")({LakeFormationDataPermissionDetails: LakeFormationDataPermissionDetails, LakeFormationDataPermissionType: S.String, Permissions: ListOfLFPermissions, RoleArn: S.optional(S.String)}) {}
export class AssetDetails extends S.Class<AssetDetails>("AssetDetails")({S3SnapshotAsset: S.optional(S3SnapshotAsset), RedshiftDataShareAsset: S.optional(RedshiftDataShareAsset), ApiGatewayApiAsset: S.optional(ApiGatewayApiAsset), S3DataAccessAsset: S.optional(S3DataAccessAsset), LakeFormationDataPermissionAsset: S.optional(LakeFormationDataPermissionAsset)}) {}
export class UpdateAssetResponse extends S.Class<UpdateAssetResponse>("UpdateAssetResponse")({Arn: S.optional(S.String), AssetDetails: S.optional(AssetDetails), AssetType: S.optional(S.String), CreatedAt: S.optional(S.Date), DataSetId: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), RevisionId: S.optional(S.String), SourceId: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export class UpdateDataSetResponse extends S.Class<UpdateDataSetResponse>("UpdateDataSetResponse")({Arn: S.optional(S.String), AssetType: S.optional(S.String), CreatedAt: S.optional(S.Date), Description: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Origin: S.optional(S.String), OriginDetails: S.optional(OriginDetails), SourceId: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export class UpdateEventActionResponse extends S.Class<UpdateEventActionResponse>("UpdateEventActionResponse")({Action: S.optional(Action), Arn: S.optional(S.String), CreatedAt: S.optional(S.Date), Event: S.optional(Event), Id: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export class UpdateRevisionResponse extends S.Class<UpdateRevisionResponse>("UpdateRevisionResponse")({Arn: S.optional(S.String), Comment: S.optional(S.String), CreatedAt: S.optional(S.Date), DataSetId: S.optional(S.String), Finalized: S.optional(S.Boolean), Id: S.optional(S.String), SourceId: S.optional(S.String), UpdatedAt: S.optional(S.Date), RevocationComment: S.optional(S.String), Revoked: S.optional(S.Boolean), RevokedAt: S.optional(S.Date)}) {}
export class ExportAssetToSignedUrlRequestDetails extends S.Class<ExportAssetToSignedUrlRequestDetails>("ExportAssetToSignedUrlRequestDetails")({AssetId: S.String, DataSetId: S.String, RevisionId: S.String}) {}
export class ImportAssetFromSignedUrlRequestDetails extends S.Class<ImportAssetFromSignedUrlRequestDetails>("ImportAssetFromSignedUrlRequestDetails")({AssetName: S.String, DataSetId: S.String, Md5Hash: S.String, RevisionId: S.String}) {}
export class ImportAssetFromApiGatewayApiRequestDetails extends S.Class<ImportAssetFromApiGatewayApiRequestDetails>("ImportAssetFromApiGatewayApiRequestDetails")({ApiDescription: S.optional(S.String), ApiId: S.String, ApiKey: S.optional(S.String), ApiName: S.String, ApiSpecificationMd5Hash: S.String, DataSetId: S.String, ProtocolType: S.String, RevisionId: S.String, Stage: S.String}) {}
export class LakeFormationTagPolicyDetails extends S.Class<LakeFormationTagPolicyDetails>("LakeFormationTagPolicyDetails")({Database: S.optional(S.String), Table: S.optional(S.String)}) {}
export const ListOfLakeFormationTagPolicies = S.Array(LakeFormationTagPolicyDetails);
export class RedshiftDataShareDetails extends S.Class<RedshiftDataShareDetails>("RedshiftDataShareDetails")({Arn: S.String, Database: S.String, Function: S.optional(S.String), Table: S.optional(S.String), Schema: S.optional(S.String), View: S.optional(S.String)}) {}
export const ListOfRedshiftDataShares = S.Array(RedshiftDataShareDetails);
export class S3DataAccessDetails extends S.Class<S3DataAccessDetails>("S3DataAccessDetails")({KeyPrefixes: S.optional(ListOf__string), Keys: S.optional(ListOf__string)}) {}
export const ListOfS3DataAccesses = S.Array(S3DataAccessDetails);
export class DataUpdateRequestDetails extends S.Class<DataUpdateRequestDetails>("DataUpdateRequestDetails")({DataUpdatedAt: S.optional(S.Date)}) {}
export class DeprecationRequestDetails extends S.Class<DeprecationRequestDetails>("DeprecationRequestDetails")({DeprecationAt: S.Date}) {}
export const ListOfDatabaseLFTagPolicyPermissions = S.Array(S.String);
export const ListOfTableTagPolicyLFPermissions = S.Array(S.String);
export class DataGrantSummaryEntry extends S.Class<DataGrantSummaryEntry>("DataGrantSummaryEntry")({Name: S.String, SenderPrincipal: S.String, ReceiverPrincipal: S.String, AcceptanceState: S.String, AcceptedAt: S.optional(S.Date), EndsAt: S.optional(S.Date), DataSetId: S.String, SourceDataSetId: S.String, Id: S.String, Arn: S.String, CreatedAt: S.Date, UpdatedAt: S.Date}) {}
export const ListOfDataGrantSummaryEntry = S.Array(DataGrantSummaryEntry);
export class RevisionEntry extends S.Class<RevisionEntry>("RevisionEntry")({Arn: S.String, Comment: S.optional(S.String), CreatedAt: S.Date, DataSetId: S.String, Finalized: S.optional(S.Boolean), Id: S.String, SourceId: S.optional(S.String), UpdatedAt: S.Date, RevocationComment: S.optional(S.String), Revoked: S.optional(S.Boolean), RevokedAt: S.optional(S.Date)}) {}
export const ListOfRevisionEntry = S.Array(RevisionEntry);
export class DataSetEntry extends S.Class<DataSetEntry>("DataSetEntry")({Arn: S.String, AssetType: S.String, CreatedAt: S.Date, Description: S.String, Id: S.String, Name: S.String, Origin: S.String, OriginDetails: S.optional(OriginDetails), SourceId: S.optional(S.String), UpdatedAt: S.Date}) {}
export const ListOfDataSetEntry = S.Array(DataSetEntry);
export class EventActionEntry extends S.Class<EventActionEntry>("EventActionEntry")({Action: Action, Arn: S.String, CreatedAt: S.Date, Event: Event, Id: S.String, UpdatedAt: S.Date}) {}
export const ListOfEventActionEntry = S.Array(EventActionEntry);
export class ExportAssetToSignedUrlResponseDetails extends S.Class<ExportAssetToSignedUrlResponseDetails>("ExportAssetToSignedUrlResponseDetails")({AssetId: S.String, DataSetId: S.String, RevisionId: S.String, SignedUrl: S.optional(S.String), SignedUrlExpiresAt: S.optional(S.Date)}) {}
export class AssetDestinationEntry extends S.Class<AssetDestinationEntry>("AssetDestinationEntry")({AssetId: S.String, Bucket: S.String, Key: S.optional(S.String)}) {}
export const ListOfAssetDestinationEntry = S.Array(AssetDestinationEntry);
export class ExportAssetsToS3ResponseDetails extends S.Class<ExportAssetsToS3ResponseDetails>("ExportAssetsToS3ResponseDetails")({AssetDestinations: ListOfAssetDestinationEntry, DataSetId: S.String, Encryption: S.optional(ExportServerSideEncryption), RevisionId: S.String}) {}
export class RevisionDestinationEntry extends S.Class<RevisionDestinationEntry>("RevisionDestinationEntry")({Bucket: S.String, KeyPattern: S.optional(S.String), RevisionId: S.String}) {}
export const ListOfRevisionDestinationEntry = S.Array(RevisionDestinationEntry);
export class ExportRevisionsToS3ResponseDetails extends S.Class<ExportRevisionsToS3ResponseDetails>("ExportRevisionsToS3ResponseDetails")({DataSetId: S.String, Encryption: S.optional(ExportServerSideEncryption), RevisionDestinations: ListOfRevisionDestinationEntry, EventActionArn: S.optional(S.String)}) {}
export class ImportAssetFromSignedUrlResponseDetails extends S.Class<ImportAssetFromSignedUrlResponseDetails>("ImportAssetFromSignedUrlResponseDetails")({AssetName: S.String, DataSetId: S.String, Md5Hash: S.optional(S.String), RevisionId: S.String, SignedUrl: S.optional(S.String), SignedUrlExpiresAt: S.optional(S.Date)}) {}
export class AssetSourceEntry extends S.Class<AssetSourceEntry>("AssetSourceEntry")({Bucket: S.String, Key: S.String}) {}
export const ListOfAssetSourceEntry = S.Array(AssetSourceEntry);
export class ImportAssetsFromS3ResponseDetails extends S.Class<ImportAssetsFromS3ResponseDetails>("ImportAssetsFromS3ResponseDetails")({AssetSources: ListOfAssetSourceEntry, DataSetId: S.String, RevisionId: S.String}) {}
export class RedshiftDataShareAssetSourceEntry extends S.Class<RedshiftDataShareAssetSourceEntry>("RedshiftDataShareAssetSourceEntry")({DataShareArn: S.String}) {}
export const ListOfRedshiftDataShareAssetSourceEntry = S.Array(RedshiftDataShareAssetSourceEntry);
export class ImportAssetsFromRedshiftDataSharesResponseDetails extends S.Class<ImportAssetsFromRedshiftDataSharesResponseDetails>("ImportAssetsFromRedshiftDataSharesResponseDetails")({AssetSources: ListOfRedshiftDataShareAssetSourceEntry, DataSetId: S.String, RevisionId: S.String}) {}
export class ImportAssetFromApiGatewayApiResponseDetails extends S.Class<ImportAssetFromApiGatewayApiResponseDetails>("ImportAssetFromApiGatewayApiResponseDetails")({ApiDescription: S.optional(S.String), ApiId: S.String, ApiKey: S.optional(S.String), ApiName: S.String, ApiSpecificationMd5Hash: S.String, ApiSpecificationUploadUrl: S.String, ApiSpecificationUploadUrlExpiresAt: S.Date, DataSetId: S.String, ProtocolType: S.String, RevisionId: S.String, Stage: S.String}) {}
export class S3DataAccessAssetSourceEntry extends S.Class<S3DataAccessAssetSourceEntry>("S3DataAccessAssetSourceEntry")({Bucket: S.String, KeyPrefixes: S.optional(ListOf__string), Keys: S.optional(ListOf__string), KmsKeysToGrant: S.optional(ListOfKmsKeysToGrant)}) {}
export class CreateS3DataAccessFromS3BucketResponseDetails extends S.Class<CreateS3DataAccessFromS3BucketResponseDetails>("CreateS3DataAccessFromS3BucketResponseDetails")({AssetSource: S3DataAccessAssetSourceEntry, DataSetId: S.String, RevisionId: S.String}) {}
export class DatabaseLFTagPolicyAndPermissions extends S.Class<DatabaseLFTagPolicyAndPermissions>("DatabaseLFTagPolicyAndPermissions")({Expression: ListOfLFTags, Permissions: ListOfDatabaseLFTagPolicyPermissions}) {}
export class TableLFTagPolicyAndPermissions extends S.Class<TableLFTagPolicyAndPermissions>("TableLFTagPolicyAndPermissions")({Expression: ListOfLFTags, Permissions: ListOfTableTagPolicyLFPermissions}) {}
export class ImportAssetsFromLakeFormationTagPolicyResponseDetails extends S.Class<ImportAssetsFromLakeFormationTagPolicyResponseDetails>("ImportAssetsFromLakeFormationTagPolicyResponseDetails")({CatalogId: S.String, Database: S.optional(DatabaseLFTagPolicyAndPermissions), Table: S.optional(TableLFTagPolicyAndPermissions), RoleArn: S.String, DataSetId: S.String, RevisionId: S.String}) {}
export class ResponseDetails extends S.Class<ResponseDetails>("ResponseDetails")({ExportAssetToSignedUrl: S.optional(ExportAssetToSignedUrlResponseDetails), ExportAssetsToS3: S.optional(ExportAssetsToS3ResponseDetails), ExportRevisionsToS3: S.optional(ExportRevisionsToS3ResponseDetails), ImportAssetFromSignedUrl: S.optional(ImportAssetFromSignedUrlResponseDetails), ImportAssetsFromS3: S.optional(ImportAssetsFromS3ResponseDetails), ImportAssetsFromRedshiftDataShares: S.optional(ImportAssetsFromRedshiftDataSharesResponseDetails), ImportAssetFromApiGatewayApi: S.optional(ImportAssetFromApiGatewayApiResponseDetails), CreateS3DataAccessFromS3Bucket: S.optional(CreateS3DataAccessFromS3BucketResponseDetails), ImportAssetsFromLakeFormationTagPolicy: S.optional(ImportAssetsFromLakeFormationTagPolicyResponseDetails)}) {}
export class ImportAssetFromSignedUrlJobErrorDetails extends S.Class<ImportAssetFromSignedUrlJobErrorDetails>("ImportAssetFromSignedUrlJobErrorDetails")({AssetName: S.String}) {}
export class Details extends S.Class<Details>("Details")({ImportAssetFromSignedUrlJobErrorDetails: S.optional(ImportAssetFromSignedUrlJobErrorDetails), ImportAssetsFromS3JobErrorDetails: S.optional(ListOfAssetSourceEntry)}) {}
export class JobError extends S.Class<JobError>("JobError")({Code: S.String, Details: S.optional(Details), LimitName: S.optional(S.String), LimitValue: S.optional(S.Number), Message: S.String, ResourceId: S.optional(S.String), ResourceType: S.optional(S.String)}) {}
export const ListOfJobError = S.Array(JobError);
export class JobEntry extends S.Class<JobEntry>("JobEntry")({Arn: S.String, CreatedAt: S.Date, Details: ResponseDetails, Errors: S.optional(ListOfJobError), Id: S.String, State: S.String, Type: S.String, UpdatedAt: S.Date}) {}
export const ListOfJobEntry = S.Array(JobEntry);
export class ReceivedDataGrantSummariesEntry extends S.Class<ReceivedDataGrantSummariesEntry>("ReceivedDataGrantSummariesEntry")({Name: S.String, SenderPrincipal: S.String, ReceiverPrincipal: S.String, AcceptanceState: S.String, AcceptedAt: S.optional(S.Date), EndsAt: S.optional(S.Date), DataSetId: S.String, Id: S.String, Arn: S.String, CreatedAt: S.Date, UpdatedAt: S.Date}) {}
export const ListOfReceivedDataGrantSummariesEntry = S.Array(ReceivedDataGrantSummariesEntry);
export class AssetEntry extends S.Class<AssetEntry>("AssetEntry")({Arn: S.String, AssetDetails: AssetDetails, AssetType: S.String, CreatedAt: S.Date, DataSetId: S.String, Id: S.String, Name: S.String, RevisionId: S.String, SourceId: S.optional(S.String), UpdatedAt: S.Date}) {}
export const ListOfAssetEntry = S.Array(AssetEntry);
export class ScopeDetails extends S.Class<ScopeDetails>("ScopeDetails")({LakeFormationTagPolicies: S.optional(ListOfLakeFormationTagPolicies), RedshiftDataShares: S.optional(ListOfRedshiftDataShares), S3DataAccesses: S.optional(ListOfS3DataAccesses)}) {}
export class SchemaChangeDetails extends S.Class<SchemaChangeDetails>("SchemaChangeDetails")({Name: S.String, Type: S.String, Description: S.optional(S.String)}) {}
export const ListOfSchemaChangeDetails = S.Array(SchemaChangeDetails);
export class CreateDataGrantResponse extends S.Class<CreateDataGrantResponse>("CreateDataGrantResponse")({Name: S.String, SenderPrincipal: S.String, ReceiverPrincipal: S.String, Description: S.optional(S.String), AcceptanceState: S.String, AcceptedAt: S.optional(S.Date), EndsAt: S.optional(S.Date), GrantDistributionScope: S.String, DataSetId: S.String, SourceDataSetId: S.String, Id: S.String, Arn: S.String, CreatedAt: S.Date, UpdatedAt: S.Date, Tags: S.optional(MapOf__string)}) {}
export class CreateDataSetResponse extends S.Class<CreateDataSetResponse>("CreateDataSetResponse")({Arn: S.optional(S.String), AssetType: S.optional(S.String), CreatedAt: S.optional(S.Date), Description: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Origin: S.optional(S.String), OriginDetails: S.optional(OriginDetails), SourceId: S.optional(S.String), Tags: S.optional(MapOf__string), UpdatedAt: S.optional(S.Date)}) {}
export class ListDataGrantsResponse extends S.Class<ListDataGrantsResponse>("ListDataGrantsResponse")({DataGrantSummaries: S.optional(ListOfDataGrantSummaryEntry), NextToken: S.optional(S.String)}) {}
export class ListDataSetRevisionsResponse extends S.Class<ListDataSetRevisionsResponse>("ListDataSetRevisionsResponse")({NextToken: S.optional(S.String), Revisions: S.optional(ListOfRevisionEntry)}) {}
export class ListDataSetsResponse extends S.Class<ListDataSetsResponse>("ListDataSetsResponse")({DataSets: S.optional(ListOfDataSetEntry), NextToken: S.optional(S.String)}) {}
export class ListEventActionsResponse extends S.Class<ListEventActionsResponse>("ListEventActionsResponse")({EventActions: S.optional(ListOfEventActionEntry), NextToken: S.optional(S.String)}) {}
export class ListJobsResponse extends S.Class<ListJobsResponse>("ListJobsResponse")({Jobs: S.optional(ListOfJobEntry), NextToken: S.optional(S.String)}) {}
export class ListReceivedDataGrantsResponse extends S.Class<ListReceivedDataGrantsResponse>("ListReceivedDataGrantsResponse")({DataGrantSummaries: S.optional(ListOfReceivedDataGrantSummariesEntry), NextToken: S.optional(S.String)}) {}
export class ListRevisionAssetsResponse extends S.Class<ListRevisionAssetsResponse>("ListRevisionAssetsResponse")({Assets: S.optional(ListOfAssetEntry), NextToken: S.optional(S.String)}) {}
export class ExportAssetsToS3RequestDetails extends S.Class<ExportAssetsToS3RequestDetails>("ExportAssetsToS3RequestDetails")({AssetDestinations: ListOfAssetDestinationEntry, DataSetId: S.String, Encryption: S.optional(ExportServerSideEncryption), RevisionId: S.String}) {}
export class ExportRevisionsToS3RequestDetails extends S.Class<ExportRevisionsToS3RequestDetails>("ExportRevisionsToS3RequestDetails")({DataSetId: S.String, Encryption: S.optional(ExportServerSideEncryption), RevisionDestinations: ListOfRevisionDestinationEntry}) {}
export class ImportAssetsFromS3RequestDetails extends S.Class<ImportAssetsFromS3RequestDetails>("ImportAssetsFromS3RequestDetails")({AssetSources: ListOfAssetSourceEntry, DataSetId: S.String, RevisionId: S.String}) {}
export class ImportAssetsFromRedshiftDataSharesRequestDetails extends S.Class<ImportAssetsFromRedshiftDataSharesRequestDetails>("ImportAssetsFromRedshiftDataSharesRequestDetails")({AssetSources: ListOfRedshiftDataShareAssetSourceEntry, DataSetId: S.String, RevisionId: S.String}) {}
export class SchemaChangeRequestDetails extends S.Class<SchemaChangeRequestDetails>("SchemaChangeRequestDetails")({Changes: S.optional(ListOfSchemaChangeDetails), SchemaChangeAt: S.Date}) {}
export class NotificationDetails extends S.Class<NotificationDetails>("NotificationDetails")({DataUpdate: S.optional(DataUpdateRequestDetails), Deprecation: S.optional(DeprecationRequestDetails), SchemaChange: S.optional(SchemaChangeRequestDetails)}) {}
export class CreateEventActionRequest extends S.Class<CreateEventActionRequest>("CreateEventActionRequest")({Action: Action, Event: Event, Tags: S.optional(MapOf__string)}) {}
export class SendDataSetNotificationRequest extends S.Class<SendDataSetNotificationRequest>("SendDataSetNotificationRequest")({Scope: S.optional(ScopeDetails), ClientToken: S.optional(S.String), Comment: S.optional(S.String), DataSetId: S.String, Details: S.optional(NotificationDetails), Type: S.String}) {}
export class SendDataSetNotificationResponse extends S.Class<SendDataSetNotificationResponse>("SendDataSetNotificationResponse")({}) {}
export class CreateS3DataAccessFromS3BucketRequestDetails extends S.Class<CreateS3DataAccessFromS3BucketRequestDetails>("CreateS3DataAccessFromS3BucketRequestDetails")({AssetSource: S3DataAccessAssetSourceEntry, DataSetId: S.String, RevisionId: S.String}) {}
export class ImportAssetsFromLakeFormationTagPolicyRequestDetails extends S.Class<ImportAssetsFromLakeFormationTagPolicyRequestDetails>("ImportAssetsFromLakeFormationTagPolicyRequestDetails")({CatalogId: S.String, Database: S.optional(DatabaseLFTagPolicyAndPermissions), Table: S.optional(TableLFTagPolicyAndPermissions), RoleArn: S.String, DataSetId: S.String, RevisionId: S.String}) {}
export class RequestDetails extends S.Class<RequestDetails>("RequestDetails")({ExportAssetToSignedUrl: S.optional(ExportAssetToSignedUrlRequestDetails), ExportAssetsToS3: S.optional(ExportAssetsToS3RequestDetails), ExportRevisionsToS3: S.optional(ExportRevisionsToS3RequestDetails), ImportAssetFromSignedUrl: S.optional(ImportAssetFromSignedUrlRequestDetails), ImportAssetsFromS3: S.optional(ImportAssetsFromS3RequestDetails), ImportAssetsFromRedshiftDataShares: S.optional(ImportAssetsFromRedshiftDataSharesRequestDetails), ImportAssetFromApiGatewayApi: S.optional(ImportAssetFromApiGatewayApiRequestDetails), CreateS3DataAccessFromS3Bucket: S.optional(CreateS3DataAccessFromS3BucketRequestDetails), ImportAssetsFromLakeFormationTagPolicy: S.optional(ImportAssetsFromLakeFormationTagPolicyRequestDetails)}) {}
export class CreateEventActionResponse extends S.Class<CreateEventActionResponse>("CreateEventActionResponse")({Action: S.optional(Action), Arn: S.optional(S.String), CreatedAt: S.optional(S.Date), Event: S.optional(Event), Id: S.optional(S.String), Tags: S.optional(MapOf__string), UpdatedAt: S.optional(S.Date)}) {}
export class CreateJobRequest extends S.Class<CreateJobRequest>("CreateJobRequest")({Details: RequestDetails, Type: S.String}) {}
export class GetJobResponse extends S.Class<GetJobResponse>("GetJobResponse")({Arn: S.optional(S.String), CreatedAt: S.optional(S.Date), Details: S.optional(ResponseDetails), Errors: S.optional(ListOfJobError), Id: S.optional(S.String), State: S.optional(S.String), Type: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export class CreateJobResponse extends S.Class<CreateJobResponse>("CreateJobResponse")({Arn: S.optional(S.String), CreatedAt: S.optional(S.Date), Details: S.optional(ResponseDetails), Errors: S.optional(ListOfJobError), Id: S.optional(S.String), State: S.optional(S.String), Type: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}
export class GetAssetResponse extends S.Class<GetAssetResponse>("GetAssetResponse")({Arn: S.optional(S.String), AssetDetails: S.optional(AssetDetails), AssetType: S.optional(S.String), CreatedAt: S.optional(S.Date), DataSetId: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), RevisionId: S.optional(S.String), SourceId: S.optional(S.String), UpdatedAt: S.optional(S.Date)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceLimitExceededException extends S.TaggedError<ServiceLimitExceededException>()("ServiceLimitExceededException", {}) {};

//# Operations
/**
 * This operation starts a job.
 */export const startJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/jobs/{JobId}", method: "PATCH", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.StartJob" }, StartJobRequest, StartJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation tags a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/tags/{ResourceArn}", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.TagResource" }, TagResourceRequest, S.Struct({}), []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation removes one or more tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.UntagResource" }, UntagResourceRequest, S.Struct({}), []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation accepts a data grant.
 */export const acceptDataGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-grants/{DataGrantArn}/accept", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.AcceptDataGrant" }, AcceptDataGrantRequest, AcceptDataGrantResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation cancels a job. Jobs can be cancelled only when they are in the WAITING
 * state.
 */export const cancelJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/jobs/{JobId}", method: "DELETE", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.CancelJob" }, CancelJobRequest, S.Struct({}), [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation creates a revision for a data set.
 */export const createRevision = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.CreateRevision" }, CreateRevisionRequest, CreateRevisionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation deletes an asset.
 */export const deleteAsset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}", method: "DELETE", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.DeleteAsset" }, DeleteAssetRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation deletes a data grant.
 */export const deleteDataGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-grants/{DataGrantId}", method: "DELETE", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.DeleteDataGrant" }, DeleteDataGrantRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation deletes a data set.
 */export const deleteDataSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}", method: "DELETE", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.DeleteDataSet" }, DeleteDataSetRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation deletes the event action.
 */export const deleteEventAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/event-actions/{EventActionId}", method: "DELETE", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.DeleteEventAction" }, DeleteEventActionRequest, S.Struct({}), [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation deletes a revision.
 */export const deleteRevision = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions/{RevisionId}", method: "DELETE", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.DeleteRevision" }, DeleteRevisionRequest, S.Struct({}), [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns information about a data grant.
 */export const getDataGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-grants/{DataGrantId}", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.GetDataGrant" }, GetDataGrantRequest, GetDataGrantResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns information about a data set.
 */export const getDataSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.GetDataSet" }, GetDataSetRequest, GetDataSetResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation retrieves information about an event action.
 */export const getEventAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/event-actions/{EventActionId}", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.GetEventAction" }, GetEventActionRequest, GetEventActionResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns information about a received data grant.
 */export const getReceivedDataGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/received-data-grants/{DataGrantArn}", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.GetReceivedDataGrant" }, GetReceivedDataGrantRequest, GetReceivedDataGrantResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns information about a revision.
 */export const getRevision = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions/{RevisionId}", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.GetRevision" }, GetRevisionRequest, GetRevisionResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation lists the tags on the resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation revokes subscribers' access to a revision.
 */export const revokeRevision = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/revoke", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.RevokeRevision" }, RevokeRevisionRequest, RevokeRevisionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation invokes an API Gateway API asset. The request is proxied to the
 * provider’s API Gateway API.
 */export const sendApiAsset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.SendApiAsset" }, SendApiAssetRequest, SendApiAssetResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation updates an asset.
 */export const updateAsset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}", method: "PATCH", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.UpdateAsset" }, UpdateAssetRequest, UpdateAssetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation updates a data set.
 */export const updateDataSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}", method: "PATCH", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.UpdateDataSet" }, UpdateDataSetRequest, UpdateDataSetResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation updates the event action.
 */export const updateEventAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/event-actions/{EventActionId}", method: "PATCH", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.UpdateEventAction" }, UpdateEventActionRequest, UpdateEventActionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation updates a revision.
 */export const updateRevision = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions/{RevisionId}", method: "PATCH", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.UpdateRevision" }, UpdateRevisionRequest, UpdateRevisionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation creates a data set.
 */export const createDataSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.CreateDataSet" }, CreateDataSetRequest, CreateDataSetResponse, [AccessDeniedException, InternalServerException, ServiceLimitExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns information about all data grants.
 */export const listDataGrants = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-grants", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.ListDataGrants" }, ListDataGrantsRequest, ListDataGrantsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation lists a data set's revisions sorted by CreatedAt in descending
 * order.
 */export const listDataSetRevisions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.ListDataSetRevisions" }, ListDataSetRevisionsRequest, ListDataSetRevisionsResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation lists your data sets. When listing by origin OWNED, results are sorted by
 * CreatedAt in descending order. When listing by origin ENTITLED, there is no order.
 */export const listDataSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.ListDataSets" }, ListDataSetsRequest, ListDataSetsResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation lists your event actions.
 */export const listEventActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/event-actions", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.ListEventActions" }, ListEventActionsRequest, ListEventActionsResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation lists your jobs sorted by CreatedAt in descending order.
 */export const listJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/jobs", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.ListJobs" }, ListJobsRequest, ListJobsResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns information about all received data grants.
 */export const listReceivedDataGrants = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/received-data-grants", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.ListReceivedDataGrants" }, ListReceivedDataGrantsRequest, ListReceivedDataGrantsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation lists a revision's assets sorted alphabetically in descending
 * order.
 */export const listRevisionAssets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.ListRevisionAssets" }, ListRevisionAssetsRequest, ListRevisionAssetsResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation creates a data grant.
 */export const createDataGrant = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-grants", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.CreateDataGrant" }, CreateDataGrantRequest, CreateDataGrantResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ServiceLimitExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * The type of event associated with the data set.
 */export const sendDataSetNotification = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/notification", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.SendDataSetNotification" }, SendDataSetNotificationRequest, SendDataSetNotificationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation creates an event action.
 */export const createEventAction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/event-actions", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.CreateEventAction" }, CreateEventActionRequest, CreateEventActionResponse, [AccessDeniedException, InternalServerException, ServiceLimitExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns information about a job.
 */export const getJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/jobs/{JobId}", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.GetJob" }, GetJobRequest, GetJobResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation creates a job.
 */export const createJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/jobs", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.CreateJob" }, CreateJobRequest, CreateJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation returns information about an asset.
 */export const getAsset = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}", method: "GET", sdkId: "DataExchange", sigV4ServiceName: "dataexchange", name: "DataExchange.GetAsset" }, GetAssetRequest, GetAssetResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
