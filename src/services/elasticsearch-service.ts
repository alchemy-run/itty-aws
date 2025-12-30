import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const DomainNameList = S.Array(S.String);
export const VpcEndpointIdList = S.Array(S.String);
export const StringList = S.Array(S.String);
export class AcceptInboundCrossClusterSearchConnectionRequest extends S.Class<AcceptInboundCrossClusterSearchConnectionRequest>("AcceptInboundCrossClusterSearchConnectionRequest")({CrossClusterSearchConnectionId: S.String}) {}
export class AssociatePackageRequest extends S.Class<AssociatePackageRequest>("AssociatePackageRequest")({PackageID: S.String, DomainName: S.String}) {}
export class AuthorizeVpcEndpointAccessRequest extends S.Class<AuthorizeVpcEndpointAccessRequest>("AuthorizeVpcEndpointAccessRequest")({DomainName: S.String, Account: S.String}) {}
export class CancelDomainConfigChangeRequest extends S.Class<CancelDomainConfigChangeRequest>("CancelDomainConfigChangeRequest")({DomainName: S.String, DryRun: S.optional(S.Boolean)}) {}
export class CancelElasticsearchServiceSoftwareUpdateRequest extends S.Class<CancelElasticsearchServiceSoftwareUpdateRequest>("CancelElasticsearchServiceSoftwareUpdateRequest")({DomainName: S.String}) {}
export class VPCOptions extends S.Class<VPCOptions>("VPCOptions")({SubnetIds: S.optional(StringList), SecurityGroupIds: S.optional(StringList)}) {}
export class CreateVpcEndpointRequest extends S.Class<CreateVpcEndpointRequest>("CreateVpcEndpointRequest")({DomainArn: S.String, VpcOptions: VPCOptions, ClientToken: S.optional(S.String)}) {}
export class DeleteElasticsearchDomainRequest extends S.Class<DeleteElasticsearchDomainRequest>("DeleteElasticsearchDomainRequest")({DomainName: S.String}) {}
export class DeleteInboundCrossClusterSearchConnectionRequest extends S.Class<DeleteInboundCrossClusterSearchConnectionRequest>("DeleteInboundCrossClusterSearchConnectionRequest")({CrossClusterSearchConnectionId: S.String}) {}
export class DeleteOutboundCrossClusterSearchConnectionRequest extends S.Class<DeleteOutboundCrossClusterSearchConnectionRequest>("DeleteOutboundCrossClusterSearchConnectionRequest")({CrossClusterSearchConnectionId: S.String}) {}
export class DeletePackageRequest extends S.Class<DeletePackageRequest>("DeletePackageRequest")({PackageID: S.String}) {}
export class DeleteVpcEndpointRequest extends S.Class<DeleteVpcEndpointRequest>("DeleteVpcEndpointRequest")({VpcEndpointId: S.String}) {}
export class DescribeDomainAutoTunesRequest extends S.Class<DescribeDomainAutoTunesRequest>("DescribeDomainAutoTunesRequest")({DomainName: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeDomainChangeProgressRequest extends S.Class<DescribeDomainChangeProgressRequest>("DescribeDomainChangeProgressRequest")({DomainName: S.String, ChangeId: S.optional(S.String)}) {}
export class DescribeElasticsearchDomainRequest extends S.Class<DescribeElasticsearchDomainRequest>("DescribeElasticsearchDomainRequest")({DomainName: S.String}) {}
export class DescribeElasticsearchDomainConfigRequest extends S.Class<DescribeElasticsearchDomainConfigRequest>("DescribeElasticsearchDomainConfigRequest")({DomainName: S.String}) {}
export class DescribeElasticsearchDomainsRequest extends S.Class<DescribeElasticsearchDomainsRequest>("DescribeElasticsearchDomainsRequest")({DomainNames: DomainNameList}) {}
export class DescribeElasticsearchInstanceTypeLimitsRequest extends S.Class<DescribeElasticsearchInstanceTypeLimitsRequest>("DescribeElasticsearchInstanceTypeLimitsRequest")({DomainName: S.optional(S.String), InstanceType: S.String, ElasticsearchVersion: S.String}) {}
export const ValueStringList = S.Array(S.String);
export class Filter extends S.Class<Filter>("Filter")({Name: S.optional(S.String), Values: S.optional(ValueStringList)}) {}
export const FilterList = S.Array(Filter);
export class DescribeOutboundCrossClusterSearchConnectionsRequest extends S.Class<DescribeOutboundCrossClusterSearchConnectionsRequest>("DescribeOutboundCrossClusterSearchConnectionsRequest")({Filters: S.optional(FilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeReservedElasticsearchInstanceOfferingsRequest extends S.Class<DescribeReservedElasticsearchInstanceOfferingsRequest>("DescribeReservedElasticsearchInstanceOfferingsRequest")({ReservedElasticsearchInstanceOfferingId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeReservedElasticsearchInstancesRequest extends S.Class<DescribeReservedElasticsearchInstancesRequest>("DescribeReservedElasticsearchInstancesRequest")({ReservedElasticsearchInstanceId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeVpcEndpointsRequest extends S.Class<DescribeVpcEndpointsRequest>("DescribeVpcEndpointsRequest")({VpcEndpointIds: VpcEndpointIdList}) {}
export class DissociatePackageRequest extends S.Class<DissociatePackageRequest>("DissociatePackageRequest")({PackageID: S.String, DomainName: S.String}) {}
export class GetCompatibleElasticsearchVersionsRequest extends S.Class<GetCompatibleElasticsearchVersionsRequest>("GetCompatibleElasticsearchVersionsRequest")({DomainName: S.optional(S.String)}) {}
export class GetPackageVersionHistoryRequest extends S.Class<GetPackageVersionHistoryRequest>("GetPackageVersionHistoryRequest")({PackageID: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetUpgradeHistoryRequest extends S.Class<GetUpgradeHistoryRequest>("GetUpgradeHistoryRequest")({DomainName: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetUpgradeStatusRequest extends S.Class<GetUpgradeStatusRequest>("GetUpgradeStatusRequest")({DomainName: S.String}) {}
export class ListDomainNamesRequest extends S.Class<ListDomainNamesRequest>("ListDomainNamesRequest")({EngineType: S.optional(S.String)}) {}
export class ListDomainsForPackageRequest extends S.Class<ListDomainsForPackageRequest>("ListDomainsForPackageRequest")({PackageID: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListElasticsearchInstanceTypesRequest extends S.Class<ListElasticsearchInstanceTypesRequest>("ListElasticsearchInstanceTypesRequest")({ElasticsearchVersion: S.String, DomainName: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListElasticsearchVersionsRequest extends S.Class<ListElasticsearchVersionsRequest>("ListElasticsearchVersionsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListPackagesForDomainRequest extends S.Class<ListPackagesForDomainRequest>("ListPackagesForDomainRequest")({DomainName: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsRequest extends S.Class<ListTagsRequest>("ListTagsRequest")({ARN: S.String}) {}
export class ListVpcEndpointAccessRequest extends S.Class<ListVpcEndpointAccessRequest>("ListVpcEndpointAccessRequest")({DomainName: S.String, NextToken: S.optional(S.String)}) {}
export class ListVpcEndpointsRequest extends S.Class<ListVpcEndpointsRequest>("ListVpcEndpointsRequest")({NextToken: S.optional(S.String)}) {}
export class ListVpcEndpointsForDomainRequest extends S.Class<ListVpcEndpointsForDomainRequest>("ListVpcEndpointsForDomainRequest")({DomainName: S.String, NextToken: S.optional(S.String)}) {}
export class PurchaseReservedElasticsearchInstanceOfferingRequest extends S.Class<PurchaseReservedElasticsearchInstanceOfferingRequest>("PurchaseReservedElasticsearchInstanceOfferingRequest")({ReservedElasticsearchInstanceOfferingId: S.String, ReservationName: S.String, InstanceCount: S.optional(S.Number)}) {}
export class RejectInboundCrossClusterSearchConnectionRequest extends S.Class<RejectInboundCrossClusterSearchConnectionRequest>("RejectInboundCrossClusterSearchConnectionRequest")({CrossClusterSearchConnectionId: S.String}) {}
export class RemoveTagsRequest extends S.Class<RemoveTagsRequest>("RemoveTagsRequest")({ARN: S.String, TagKeys: StringList}) {}
export class RevokeVpcEndpointAccessRequest extends S.Class<RevokeVpcEndpointAccessRequest>("RevokeVpcEndpointAccessRequest")({DomainName: S.String, Account: S.String}) {}
export class RevokeVpcEndpointAccessResponse extends S.Class<RevokeVpcEndpointAccessResponse>("RevokeVpcEndpointAccessResponse")({}) {}
export class StartElasticsearchServiceSoftwareUpdateRequest extends S.Class<StartElasticsearchServiceSoftwareUpdateRequest>("StartElasticsearchServiceSoftwareUpdateRequest")({DomainName: S.String}) {}
export class PackageSource extends S.Class<PackageSource>("PackageSource")({S3BucketName: S.optional(S.String), S3Key: S.optional(S.String)}) {}
export class UpdatePackageRequest extends S.Class<UpdatePackageRequest>("UpdatePackageRequest")({PackageID: S.String, PackageSource: PackageSource, PackageDescription: S.optional(S.String), CommitMessage: S.optional(S.String)}) {}
export class UpdateVpcEndpointRequest extends S.Class<UpdateVpcEndpointRequest>("UpdateVpcEndpointRequest")({VpcEndpointId: S.String, VpcOptions: VPCOptions}) {}
export class UpgradeElasticsearchDomainRequest extends S.Class<UpgradeElasticsearchDomainRequest>("UpgradeElasticsearchDomainRequest")({DomainName: S.String, TargetVersion: S.String, PerformCheckOnly: S.optional(S.Boolean)}) {}
export const DescribePackagesFilterValues = S.Array(S.String);
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export const GUIDList = S.Array(S.String);
export class EBSOptions extends S.Class<EBSOptions>("EBSOptions")({EBSEnabled: S.optional(S.Boolean), VolumeType: S.optional(S.String), VolumeSize: S.optional(S.Number), Iops: S.optional(S.Number), Throughput: S.optional(S.Number)}) {}
export class SnapshotOptions extends S.Class<SnapshotOptions>("SnapshotOptions")({AutomatedSnapshotStartHour: S.optional(S.Number)}) {}
export class CognitoOptions extends S.Class<CognitoOptions>("CognitoOptions")({Enabled: S.optional(S.Boolean), UserPoolId: S.optional(S.String), IdentityPoolId: S.optional(S.String), RoleArn: S.optional(S.String)}) {}
export class EncryptionAtRestOptions extends S.Class<EncryptionAtRestOptions>("EncryptionAtRestOptions")({Enabled: S.optional(S.Boolean), KmsKeyId: S.optional(S.String)}) {}
export class NodeToNodeEncryptionOptions extends S.Class<NodeToNodeEncryptionOptions>("NodeToNodeEncryptionOptions")({Enabled: S.optional(S.Boolean)}) {}
export const AdvancedOptions = S.Record({key: S.String, value: S.String});
export class DomainEndpointOptions extends S.Class<DomainEndpointOptions>("DomainEndpointOptions")({EnforceHTTPS: S.optional(S.Boolean), TLSSecurityPolicy: S.optional(S.String), CustomEndpointEnabled: S.optional(S.Boolean), CustomEndpoint: S.optional(S.String), CustomEndpointCertificateArn: S.optional(S.String)}) {}
export class DomainInformation extends S.Class<DomainInformation>("DomainInformation")({OwnerId: S.optional(S.String), DomainName: S.String, Region: S.optional(S.String)}) {}
export const EndpointsMap = S.Record({key: S.String, value: S.String});
export class ZoneAwarenessConfig extends S.Class<ZoneAwarenessConfig>("ZoneAwarenessConfig")({AvailabilityZoneCount: S.optional(S.Number)}) {}
export class ColdStorageOptions extends S.Class<ColdStorageOptions>("ColdStorageOptions")({Enabled: S.Boolean}) {}
export class ElasticsearchClusterConfig extends S.Class<ElasticsearchClusterConfig>("ElasticsearchClusterConfig")({InstanceType: S.optional(S.String), InstanceCount: S.optional(S.Number), DedicatedMasterEnabled: S.optional(S.Boolean), ZoneAwarenessEnabled: S.optional(S.Boolean), ZoneAwarenessConfig: S.optional(ZoneAwarenessConfig), DedicatedMasterType: S.optional(S.String), DedicatedMasterCount: S.optional(S.Number), WarmEnabled: S.optional(S.Boolean), WarmType: S.optional(S.String), WarmCount: S.optional(S.Number), ColdStorageOptions: S.optional(ColdStorageOptions)}) {}
export class VPCDerivedInfo extends S.Class<VPCDerivedInfo>("VPCDerivedInfo")({VPCId: S.optional(S.String), SubnetIds: S.optional(StringList), AvailabilityZones: S.optional(StringList), SecurityGroupIds: S.optional(StringList)}) {}
export class LogPublishingOption extends S.Class<LogPublishingOption>("LogPublishingOption")({CloudWatchLogsLogGroupArn: S.optional(S.String), Enabled: S.optional(S.Boolean)}) {}
export const LogPublishingOptions = S.Record({key: S.String, value: LogPublishingOption});
export class ServiceSoftwareOptions extends S.Class<ServiceSoftwareOptions>("ServiceSoftwareOptions")({CurrentVersion: S.optional(S.String), NewVersion: S.optional(S.String), UpdateAvailable: S.optional(S.Boolean), Cancellable: S.optional(S.Boolean), UpdateStatus: S.optional(S.String), Description: S.optional(S.String), AutomatedUpdateDate: S.optional(S.Date), OptionalDeployment: S.optional(S.Boolean)}) {}
export class SAMLIdp extends S.Class<SAMLIdp>("SAMLIdp")({MetadataContent: S.String, EntityId: S.String}) {}
export class SAMLOptionsOutput extends S.Class<SAMLOptionsOutput>("SAMLOptionsOutput")({Enabled: S.optional(S.Boolean), Idp: S.optional(SAMLIdp), SubjectKey: S.optional(S.String), RolesKey: S.optional(S.String), SessionTimeoutMinutes: S.optional(S.Number)}) {}
export class AdvancedSecurityOptions extends S.Class<AdvancedSecurityOptions>("AdvancedSecurityOptions")({Enabled: S.optional(S.Boolean), InternalUserDatabaseEnabled: S.optional(S.Boolean), SAMLOptions: S.optional(SAMLOptionsOutput), AnonymousAuthDisableDate: S.optional(S.Date), AnonymousAuthEnabled: S.optional(S.Boolean)}) {}
export class AutoTuneOptionsOutput extends S.Class<AutoTuneOptionsOutput>("AutoTuneOptionsOutput")({State: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class ChangeProgressDetails extends S.Class<ChangeProgressDetails>("ChangeProgressDetails")({ChangeId: S.optional(S.String), Message: S.optional(S.String), ConfigChangeStatus: S.optional(S.String), StartTime: S.optional(S.Date), LastUpdatedTime: S.optional(S.Date), InitiatedBy: S.optional(S.String)}) {}
export class ModifyingProperties extends S.Class<ModifyingProperties>("ModifyingProperties")({Name: S.optional(S.String), ActiveValue: S.optional(S.String), PendingValue: S.optional(S.String), ValueType: S.optional(S.String)}) {}
export const ModifyingPropertiesList = S.Array(ModifyingProperties);
export class ElasticsearchDomainStatus extends S.Class<ElasticsearchDomainStatus>("ElasticsearchDomainStatus")({DomainId: S.String, DomainName: S.String, ARN: S.String, Created: S.optional(S.Boolean), Deleted: S.optional(S.Boolean), Endpoint: S.optional(S.String), Endpoints: S.optional(EndpointsMap), Processing: S.optional(S.Boolean), UpgradeProcessing: S.optional(S.Boolean), ElasticsearchVersion: S.optional(S.String), ElasticsearchClusterConfig: ElasticsearchClusterConfig, EBSOptions: S.optional(EBSOptions), AccessPolicies: S.optional(S.String), SnapshotOptions: S.optional(SnapshotOptions), VPCOptions: S.optional(VPCDerivedInfo), CognitoOptions: S.optional(CognitoOptions), EncryptionAtRestOptions: S.optional(EncryptionAtRestOptions), NodeToNodeEncryptionOptions: S.optional(NodeToNodeEncryptionOptions), AdvancedOptions: S.optional(AdvancedOptions), LogPublishingOptions: S.optional(LogPublishingOptions), ServiceSoftwareOptions: S.optional(ServiceSoftwareOptions), DomainEndpointOptions: S.optional(DomainEndpointOptions), AdvancedSecurityOptions: S.optional(AdvancedSecurityOptions), AutoTuneOptions: S.optional(AutoTuneOptionsOutput), ChangeProgressDetails: S.optional(ChangeProgressDetails), DomainProcessingStatus: S.optional(S.String), ModifyingProperties: S.optional(ModifyingPropertiesList)}) {}
export const ElasticsearchDomainStatusList = S.Array(ElasticsearchDomainStatus);
export class OutboundCrossClusterSearchConnectionStatus extends S.Class<OutboundCrossClusterSearchConnectionStatus>("OutboundCrossClusterSearchConnectionStatus")({StatusCode: S.optional(S.String), Message: S.optional(S.String)}) {}
export class OutboundCrossClusterSearchConnection extends S.Class<OutboundCrossClusterSearchConnection>("OutboundCrossClusterSearchConnection")({SourceDomainInfo: S.optional(DomainInformation), DestinationDomainInfo: S.optional(DomainInformation), CrossClusterSearchConnectionId: S.optional(S.String), ConnectionAlias: S.optional(S.String), ConnectionStatus: S.optional(OutboundCrossClusterSearchConnectionStatus)}) {}
export const OutboundCrossClusterSearchConnections = S.Array(OutboundCrossClusterSearchConnection);
export class DescribePackagesFilter extends S.Class<DescribePackagesFilter>("DescribePackagesFilter")({Name: S.optional(S.String), Value: S.optional(DescribePackagesFilterValues)}) {}
export const DescribePackagesFilterList = S.Array(DescribePackagesFilter);
export class VpcEndpoint extends S.Class<VpcEndpoint>("VpcEndpoint")({VpcEndpointId: S.optional(S.String), VpcEndpointOwner: S.optional(S.String), DomainArn: S.optional(S.String), VpcOptions: S.optional(VPCDerivedInfo), Status: S.optional(S.String), Endpoint: S.optional(S.String)}) {}
export const VpcEndpoints = S.Array(VpcEndpoint);
export class ErrorDetails extends S.Class<ErrorDetails>("ErrorDetails")({ErrorType: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export class DomainPackageDetails extends S.Class<DomainPackageDetails>("DomainPackageDetails")({PackageID: S.optional(S.String), PackageName: S.optional(S.String), PackageType: S.optional(S.String), LastUpdated: S.optional(S.Date), DomainName: S.optional(S.String), DomainPackageStatus: S.optional(S.String), PackageVersion: S.optional(S.String), ReferencePath: S.optional(S.String), ErrorDetails: S.optional(ErrorDetails)}) {}
export const DomainPackageDetailsList = S.Array(DomainPackageDetails);
export const ElasticsearchInstanceTypeList = S.Array(S.String);
export const ElasticsearchVersionList = S.Array(S.String);
export class AuthorizedPrincipal extends S.Class<AuthorizedPrincipal>("AuthorizedPrincipal")({PrincipalType: S.optional(S.String), Principal: S.optional(S.String)}) {}
export const AuthorizedPrincipalList = S.Array(AuthorizedPrincipal);
export class VpcEndpointSummary extends S.Class<VpcEndpointSummary>("VpcEndpointSummary")({VpcEndpointId: S.optional(S.String), VpcEndpointOwner: S.optional(S.String), DomainArn: S.optional(S.String), Status: S.optional(S.String)}) {}
export const VpcEndpointSummaryList = S.Array(VpcEndpointSummary);
export class Duration extends S.Class<Duration>("Duration")({Value: S.optional(S.Number), Unit: S.optional(S.String)}) {}
export class AutoTuneMaintenanceSchedule extends S.Class<AutoTuneMaintenanceSchedule>("AutoTuneMaintenanceSchedule")({StartAt: S.optional(S.Date), Duration: S.optional(Duration), CronExpressionForRecurrence: S.optional(S.String)}) {}
export const AutoTuneMaintenanceScheduleList = S.Array(AutoTuneMaintenanceSchedule);
export class AutoTuneOptions extends S.Class<AutoTuneOptions>("AutoTuneOptions")({DesiredState: S.optional(S.String), RollbackOnDisable: S.optional(S.String), MaintenanceSchedules: S.optional(AutoTuneMaintenanceScheduleList)}) {}
export class AddTagsRequest extends S.Class<AddTagsRequest>("AddTagsRequest")({ARN: S.String, TagList: TagList}) {}
export class CreateOutboundCrossClusterSearchConnectionRequest extends S.Class<CreateOutboundCrossClusterSearchConnectionRequest>("CreateOutboundCrossClusterSearchConnectionRequest")({SourceDomainInfo: DomainInformation, DestinationDomainInfo: DomainInformation, ConnectionAlias: S.String}) {}
export class CreatePackageRequest extends S.Class<CreatePackageRequest>("CreatePackageRequest")({PackageName: S.String, PackageType: S.String, PackageDescription: S.optional(S.String), PackageSource: PackageSource}) {}
export class InboundCrossClusterSearchConnectionStatus extends S.Class<InboundCrossClusterSearchConnectionStatus>("InboundCrossClusterSearchConnectionStatus")({StatusCode: S.optional(S.String), Message: S.optional(S.String)}) {}
export class InboundCrossClusterSearchConnection extends S.Class<InboundCrossClusterSearchConnection>("InboundCrossClusterSearchConnection")({SourceDomainInfo: S.optional(DomainInformation), DestinationDomainInfo: S.optional(DomainInformation), CrossClusterSearchConnectionId: S.optional(S.String), ConnectionStatus: S.optional(InboundCrossClusterSearchConnectionStatus)}) {}
export class DeleteInboundCrossClusterSearchConnectionResponse extends S.Class<DeleteInboundCrossClusterSearchConnectionResponse>("DeleteInboundCrossClusterSearchConnectionResponse")({CrossClusterSearchConnection: S.optional(InboundCrossClusterSearchConnection)}) {}
export class DescribeElasticsearchDomainResponse extends S.Class<DescribeElasticsearchDomainResponse>("DescribeElasticsearchDomainResponse")({DomainStatus: ElasticsearchDomainStatus}) {}
export class DescribeElasticsearchDomainsResponse extends S.Class<DescribeElasticsearchDomainsResponse>("DescribeElasticsearchDomainsResponse")({DomainStatusList: ElasticsearchDomainStatusList}) {}
export class DescribeInboundCrossClusterSearchConnectionsRequest extends S.Class<DescribeInboundCrossClusterSearchConnectionsRequest>("DescribeInboundCrossClusterSearchConnectionsRequest")({Filters: S.optional(FilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DescribeOutboundCrossClusterSearchConnectionsResponse extends S.Class<DescribeOutboundCrossClusterSearchConnectionsResponse>("DescribeOutboundCrossClusterSearchConnectionsResponse")({CrossClusterSearchConnections: S.optional(OutboundCrossClusterSearchConnections), NextToken: S.optional(S.String)}) {}
export class DescribePackagesRequest extends S.Class<DescribePackagesRequest>("DescribePackagesRequest")({Filters: S.optional(DescribePackagesFilterList), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class DissociatePackageResponse extends S.Class<DissociatePackageResponse>("DissociatePackageResponse")({DomainPackageDetails: S.optional(DomainPackageDetails)}) {}
export class GetUpgradeStatusResponse extends S.Class<GetUpgradeStatusResponse>("GetUpgradeStatusResponse")({UpgradeStep: S.optional(S.String), StepStatus: S.optional(S.String), UpgradeName: S.optional(S.String)}) {}
export class ListDomainsForPackageResponse extends S.Class<ListDomainsForPackageResponse>("ListDomainsForPackageResponse")({DomainPackageDetailsList: S.optional(DomainPackageDetailsList), NextToken: S.optional(S.String)}) {}
export class ListElasticsearchInstanceTypesResponse extends S.Class<ListElasticsearchInstanceTypesResponse>("ListElasticsearchInstanceTypesResponse")({ElasticsearchInstanceTypes: S.optional(ElasticsearchInstanceTypeList), NextToken: S.optional(S.String)}) {}
export class ListElasticsearchVersionsResponse extends S.Class<ListElasticsearchVersionsResponse>("ListElasticsearchVersionsResponse")({ElasticsearchVersions: S.optional(ElasticsearchVersionList), NextToken: S.optional(S.String)}) {}
export class ListPackagesForDomainResponse extends S.Class<ListPackagesForDomainResponse>("ListPackagesForDomainResponse")({DomainPackageDetailsList: S.optional(DomainPackageDetailsList), NextToken: S.optional(S.String)}) {}
export class ListTagsResponse extends S.Class<ListTagsResponse>("ListTagsResponse")({TagList: S.optional(TagList)}) {}
export class ListVpcEndpointAccessResponse extends S.Class<ListVpcEndpointAccessResponse>("ListVpcEndpointAccessResponse")({AuthorizedPrincipalList: AuthorizedPrincipalList, NextToken: S.String}) {}
export class ListVpcEndpointsResponse extends S.Class<ListVpcEndpointsResponse>("ListVpcEndpointsResponse")({VpcEndpointSummaryList: VpcEndpointSummaryList, NextToken: S.String}) {}
export class ListVpcEndpointsForDomainResponse extends S.Class<ListVpcEndpointsForDomainResponse>("ListVpcEndpointsForDomainResponse")({VpcEndpointSummaryList: VpcEndpointSummaryList, NextToken: S.String}) {}
export class PurchaseReservedElasticsearchInstanceOfferingResponse extends S.Class<PurchaseReservedElasticsearchInstanceOfferingResponse>("PurchaseReservedElasticsearchInstanceOfferingResponse")({ReservedElasticsearchInstanceId: S.optional(S.String), ReservationName: S.optional(S.String)}) {}
export class RejectInboundCrossClusterSearchConnectionResponse extends S.Class<RejectInboundCrossClusterSearchConnectionResponse>("RejectInboundCrossClusterSearchConnectionResponse")({CrossClusterSearchConnection: S.optional(InboundCrossClusterSearchConnection)}) {}
export class StartElasticsearchServiceSoftwareUpdateResponse extends S.Class<StartElasticsearchServiceSoftwareUpdateResponse>("StartElasticsearchServiceSoftwareUpdateResponse")({ServiceSoftwareOptions: S.optional(ServiceSoftwareOptions)}) {}
export class MasterUserOptions extends S.Class<MasterUserOptions>("MasterUserOptions")({MasterUserARN: S.optional(S.String), MasterUserName: S.optional(S.String), MasterUserPassword: S.optional(S.String)}) {}
export class SAMLOptionsInput extends S.Class<SAMLOptionsInput>("SAMLOptionsInput")({Enabled: S.optional(S.Boolean), Idp: S.optional(SAMLIdp), MasterUserName: S.optional(S.String), MasterBackendRole: S.optional(S.String), SubjectKey: S.optional(S.String), RolesKey: S.optional(S.String), SessionTimeoutMinutes: S.optional(S.Number)}) {}
export class AdvancedSecurityOptionsInput extends S.Class<AdvancedSecurityOptionsInput>("AdvancedSecurityOptionsInput")({Enabled: S.optional(S.Boolean), InternalUserDatabaseEnabled: S.optional(S.Boolean), MasterUserOptions: S.optional(MasterUserOptions), SAMLOptions: S.optional(SAMLOptionsInput), AnonymousAuthEnabled: S.optional(S.Boolean)}) {}
export class UpdateElasticsearchDomainConfigRequest extends S.Class<UpdateElasticsearchDomainConfigRequest>("UpdateElasticsearchDomainConfigRequest")({DomainName: S.String, ElasticsearchClusterConfig: S.optional(ElasticsearchClusterConfig), EBSOptions: S.optional(EBSOptions), SnapshotOptions: S.optional(SnapshotOptions), VPCOptions: S.optional(VPCOptions), CognitoOptions: S.optional(CognitoOptions), AdvancedOptions: S.optional(AdvancedOptions), AccessPolicies: S.optional(S.String), LogPublishingOptions: S.optional(LogPublishingOptions), DomainEndpointOptions: S.optional(DomainEndpointOptions), AdvancedSecurityOptions: S.optional(AdvancedSecurityOptionsInput), NodeToNodeEncryptionOptions: S.optional(NodeToNodeEncryptionOptions), EncryptionAtRestOptions: S.optional(EncryptionAtRestOptions), AutoTuneOptions: S.optional(AutoTuneOptions), DryRun: S.optional(S.Boolean)}) {}
export class PackageDetails extends S.Class<PackageDetails>("PackageDetails")({PackageID: S.optional(S.String), PackageName: S.optional(S.String), PackageType: S.optional(S.String), PackageDescription: S.optional(S.String), PackageStatus: S.optional(S.String), CreatedAt: S.optional(S.Date), LastUpdatedAt: S.optional(S.Date), AvailablePackageVersion: S.optional(S.String), ErrorDetails: S.optional(ErrorDetails)}) {}
export class UpdatePackageResponse extends S.Class<UpdatePackageResponse>("UpdatePackageResponse")({PackageDetails: S.optional(PackageDetails)}) {}
export class UpdateVpcEndpointResponse extends S.Class<UpdateVpcEndpointResponse>("UpdateVpcEndpointResponse")({VpcEndpoint: VpcEndpoint}) {}
export class CancelledChangeProperty extends S.Class<CancelledChangeProperty>("CancelledChangeProperty")({PropertyName: S.optional(S.String), CancelledValue: S.optional(S.String), ActiveValue: S.optional(S.String)}) {}
export const CancelledChangePropertyList = S.Array(CancelledChangeProperty);
export const InboundCrossClusterSearchConnections = S.Array(InboundCrossClusterSearchConnection);
export const PackageDetailsList = S.Array(PackageDetails);
export class RecurringCharge extends S.Class<RecurringCharge>("RecurringCharge")({RecurringChargeAmount: S.optional(S.Number), RecurringChargeFrequency: S.optional(S.String)}) {}
export const RecurringChargeList = S.Array(RecurringCharge);
export class ReservedElasticsearchInstance extends S.Class<ReservedElasticsearchInstance>("ReservedElasticsearchInstance")({ReservationName: S.optional(S.String), ReservedElasticsearchInstanceId: S.optional(S.String), ReservedElasticsearchInstanceOfferingId: S.optional(S.String), ElasticsearchInstanceType: S.optional(S.String), StartTime: S.optional(S.Date), Duration: S.optional(S.Number), FixedPrice: S.optional(S.Number), UsagePrice: S.optional(S.Number), CurrencyCode: S.optional(S.String), ElasticsearchInstanceCount: S.optional(S.Number), State: S.optional(S.String), PaymentOption: S.optional(S.String), RecurringCharges: S.optional(RecurringChargeList)}) {}
export const ReservedElasticsearchInstanceList = S.Array(ReservedElasticsearchInstance);
export class VpcEndpointError extends S.Class<VpcEndpointError>("VpcEndpointError")({VpcEndpointId: S.optional(S.String), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const VpcEndpointErrorList = S.Array(VpcEndpointError);
export class CompatibleVersionsMap extends S.Class<CompatibleVersionsMap>("CompatibleVersionsMap")({SourceVersion: S.optional(S.String), TargetVersions: S.optional(ElasticsearchVersionList)}) {}
export const CompatibleElasticsearchVersionsList = S.Array(CompatibleVersionsMap);
export class PackageVersionHistory extends S.Class<PackageVersionHistory>("PackageVersionHistory")({PackageVersion: S.optional(S.String), CommitMessage: S.optional(S.String), CreatedAt: S.optional(S.Date)}) {}
export const PackageVersionHistoryList = S.Array(PackageVersionHistory);
export class DomainInfo extends S.Class<DomainInfo>("DomainInfo")({DomainName: S.optional(S.String), EngineType: S.optional(S.String)}) {}
export const DomainInfoList = S.Array(DomainInfo);
export const Issues = S.Array(S.String);
export class AuthorizeVpcEndpointAccessResponse extends S.Class<AuthorizeVpcEndpointAccessResponse>("AuthorizeVpcEndpointAccessResponse")({AuthorizedPrincipal: AuthorizedPrincipal}) {}
export class CancelDomainConfigChangeResponse extends S.Class<CancelDomainConfigChangeResponse>("CancelDomainConfigChangeResponse")({DryRun: S.optional(S.Boolean), CancelledChangeIds: S.optional(GUIDList), CancelledChangeProperties: S.optional(CancelledChangePropertyList)}) {}
export class CancelElasticsearchServiceSoftwareUpdateResponse extends S.Class<CancelElasticsearchServiceSoftwareUpdateResponse>("CancelElasticsearchServiceSoftwareUpdateResponse")({ServiceSoftwareOptions: S.optional(ServiceSoftwareOptions)}) {}
export class CreateOutboundCrossClusterSearchConnectionResponse extends S.Class<CreateOutboundCrossClusterSearchConnectionResponse>("CreateOutboundCrossClusterSearchConnectionResponse")({SourceDomainInfo: S.optional(DomainInformation), DestinationDomainInfo: S.optional(DomainInformation), ConnectionAlias: S.optional(S.String), ConnectionStatus: S.optional(OutboundCrossClusterSearchConnectionStatus), CrossClusterSearchConnectionId: S.optional(S.String)}) {}
export class CreatePackageResponse extends S.Class<CreatePackageResponse>("CreatePackageResponse")({PackageDetails: S.optional(PackageDetails)}) {}
export class DeletePackageResponse extends S.Class<DeletePackageResponse>("DeletePackageResponse")({PackageDetails: S.optional(PackageDetails)}) {}
export class DeleteVpcEndpointResponse extends S.Class<DeleteVpcEndpointResponse>("DeleteVpcEndpointResponse")({VpcEndpointSummary: VpcEndpointSummary}) {}
export class DescribeInboundCrossClusterSearchConnectionsResponse extends S.Class<DescribeInboundCrossClusterSearchConnectionsResponse>("DescribeInboundCrossClusterSearchConnectionsResponse")({CrossClusterSearchConnections: S.optional(InboundCrossClusterSearchConnections), NextToken: S.optional(S.String)}) {}
export class DescribePackagesResponse extends S.Class<DescribePackagesResponse>("DescribePackagesResponse")({PackageDetailsList: S.optional(PackageDetailsList), NextToken: S.optional(S.String)}) {}
export class DescribeReservedElasticsearchInstancesResponse extends S.Class<DescribeReservedElasticsearchInstancesResponse>("DescribeReservedElasticsearchInstancesResponse")({NextToken: S.optional(S.String), ReservedElasticsearchInstances: S.optional(ReservedElasticsearchInstanceList)}) {}
export class DescribeVpcEndpointsResponse extends S.Class<DescribeVpcEndpointsResponse>("DescribeVpcEndpointsResponse")({VpcEndpoints: VpcEndpoints, VpcEndpointErrors: VpcEndpointErrorList}) {}
export class GetCompatibleElasticsearchVersionsResponse extends S.Class<GetCompatibleElasticsearchVersionsResponse>("GetCompatibleElasticsearchVersionsResponse")({CompatibleElasticsearchVersions: S.optional(CompatibleElasticsearchVersionsList)}) {}
export class GetPackageVersionHistoryResponse extends S.Class<GetPackageVersionHistoryResponse>("GetPackageVersionHistoryResponse")({PackageID: S.optional(S.String), PackageVersionHistoryList: S.optional(PackageVersionHistoryList), NextToken: S.optional(S.String)}) {}
export class ListDomainNamesResponse extends S.Class<ListDomainNamesResponse>("ListDomainNamesResponse")({DomainNames: S.optional(DomainInfoList)}) {}
export class UpgradeElasticsearchDomainResponse extends S.Class<UpgradeElasticsearchDomainResponse>("UpgradeElasticsearchDomainResponse")({DomainName: S.optional(S.String), TargetVersion: S.optional(S.String), PerformCheckOnly: S.optional(S.Boolean), ChangeProgressDetails: S.optional(ChangeProgressDetails)}) {}
export class ChangeProgressStage extends S.Class<ChangeProgressStage>("ChangeProgressStage")({Name: S.optional(S.String), Status: S.optional(S.String), Description: S.optional(S.String), LastUpdated: S.optional(S.Date)}) {}
export const ChangeProgressStageList = S.Array(ChangeProgressStage);
export class OptionStatus extends S.Class<OptionStatus>("OptionStatus")({CreationDate: S.Date, UpdateDate: S.Date, UpdateVersion: S.optional(S.Number), State: S.String, PendingDeletion: S.optional(S.Boolean)}) {}
export class ElasticsearchClusterConfigStatus extends S.Class<ElasticsearchClusterConfigStatus>("ElasticsearchClusterConfigStatus")({Options: ElasticsearchClusterConfig, Status: OptionStatus}) {}
export class EBSOptionsStatus extends S.Class<EBSOptionsStatus>("EBSOptionsStatus")({Options: EBSOptions, Status: OptionStatus}) {}
export class AccessPoliciesStatus extends S.Class<AccessPoliciesStatus>("AccessPoliciesStatus")({Options: S.String, Status: OptionStatus}) {}
export class SnapshotOptionsStatus extends S.Class<SnapshotOptionsStatus>("SnapshotOptionsStatus")({Options: SnapshotOptions, Status: OptionStatus}) {}
export class VPCDerivedInfoStatus extends S.Class<VPCDerivedInfoStatus>("VPCDerivedInfoStatus")({Options: VPCDerivedInfo, Status: OptionStatus}) {}
export class CognitoOptionsStatus extends S.Class<CognitoOptionsStatus>("CognitoOptionsStatus")({Options: CognitoOptions, Status: OptionStatus}) {}
export class EncryptionAtRestOptionsStatus extends S.Class<EncryptionAtRestOptionsStatus>("EncryptionAtRestOptionsStatus")({Options: EncryptionAtRestOptions, Status: OptionStatus}) {}
export class NodeToNodeEncryptionOptionsStatus extends S.Class<NodeToNodeEncryptionOptionsStatus>("NodeToNodeEncryptionOptionsStatus")({Options: NodeToNodeEncryptionOptions, Status: OptionStatus}) {}
export class AdvancedOptionsStatus extends S.Class<AdvancedOptionsStatus>("AdvancedOptionsStatus")({Options: AdvancedOptions, Status: OptionStatus}) {}
export class LogPublishingOptionsStatus extends S.Class<LogPublishingOptionsStatus>("LogPublishingOptionsStatus")({Options: S.optional(LogPublishingOptions), Status: S.optional(OptionStatus)}) {}
export class DomainEndpointOptionsStatus extends S.Class<DomainEndpointOptionsStatus>("DomainEndpointOptionsStatus")({Options: DomainEndpointOptions, Status: OptionStatus}) {}
export class AdvancedSecurityOptionsStatus extends S.Class<AdvancedSecurityOptionsStatus>("AdvancedSecurityOptionsStatus")({Options: AdvancedSecurityOptions, Status: OptionStatus}) {}
export class UpgradeStepItem extends S.Class<UpgradeStepItem>("UpgradeStepItem")({UpgradeStep: S.optional(S.String), UpgradeStepStatus: S.optional(S.String), Issues: S.optional(Issues), ProgressPercent: S.optional(S.Number)}) {}
export const UpgradeStepsList = S.Array(UpgradeStepItem);
export const LimitValueList = S.Array(S.String);
export class AutoTuneOptionsInput extends S.Class<AutoTuneOptionsInput>("AutoTuneOptionsInput")({DesiredState: S.optional(S.String), MaintenanceSchedules: S.optional(AutoTuneMaintenanceScheduleList)}) {}
export class ChangeProgressStatusDetails extends S.Class<ChangeProgressStatusDetails>("ChangeProgressStatusDetails")({ChangeId: S.optional(S.String), StartTime: S.optional(S.Date), Status: S.optional(S.String), PendingProperties: S.optional(StringList), CompletedProperties: S.optional(StringList), TotalNumberOfStages: S.optional(S.Number), ChangeProgressStages: S.optional(ChangeProgressStageList), ConfigChangeStatus: S.optional(S.String), LastUpdatedTime: S.optional(S.Date), InitiatedBy: S.optional(S.String)}) {}
export class ReservedElasticsearchInstanceOffering extends S.Class<ReservedElasticsearchInstanceOffering>("ReservedElasticsearchInstanceOffering")({ReservedElasticsearchInstanceOfferingId: S.optional(S.String), ElasticsearchInstanceType: S.optional(S.String), Duration: S.optional(S.Number), FixedPrice: S.optional(S.Number), UsagePrice: S.optional(S.Number), CurrencyCode: S.optional(S.String), PaymentOption: S.optional(S.String), RecurringCharges: S.optional(RecurringChargeList)}) {}
export const ReservedElasticsearchInstanceOfferingList = S.Array(ReservedElasticsearchInstanceOffering);
export class UpgradeHistory extends S.Class<UpgradeHistory>("UpgradeHistory")({UpgradeName: S.optional(S.String), StartTimestamp: S.optional(S.Date), UpgradeStatus: S.optional(S.String), StepsList: S.optional(UpgradeStepsList)}) {}
export const UpgradeHistoryList = S.Array(UpgradeHistory);
export class DryRunResults extends S.Class<DryRunResults>("DryRunResults")({DeploymentType: S.optional(S.String), Message: S.optional(S.String)}) {}
export class ScheduledAutoTuneDetails extends S.Class<ScheduledAutoTuneDetails>("ScheduledAutoTuneDetails")({Date: S.optional(S.Date), ActionType: S.optional(S.String), Action: S.optional(S.String), Severity: S.optional(S.String)}) {}
export class AutoTuneStatus extends S.Class<AutoTuneStatus>("AutoTuneStatus")({CreationDate: S.Date, UpdateDate: S.Date, UpdateVersion: S.optional(S.Number), State: S.String, ErrorMessage: S.optional(S.String), PendingDeletion: S.optional(S.Boolean)}) {}
export class AdditionalLimit extends S.Class<AdditionalLimit>("AdditionalLimit")({LimitName: S.optional(S.String), LimitValues: S.optional(LimitValueList)}) {}
export const AdditionalLimitList = S.Array(AdditionalLimit);
export class AcceptInboundCrossClusterSearchConnectionResponse extends S.Class<AcceptInboundCrossClusterSearchConnectionResponse>("AcceptInboundCrossClusterSearchConnectionResponse")({CrossClusterSearchConnection: S.optional(InboundCrossClusterSearchConnection)}) {}
export class AssociatePackageResponse extends S.Class<AssociatePackageResponse>("AssociatePackageResponse")({DomainPackageDetails: S.optional(DomainPackageDetails)}) {}
export class CreateElasticsearchDomainRequest extends S.Class<CreateElasticsearchDomainRequest>("CreateElasticsearchDomainRequest")({DomainName: S.String, ElasticsearchVersion: S.optional(S.String), ElasticsearchClusterConfig: S.optional(ElasticsearchClusterConfig), EBSOptions: S.optional(EBSOptions), AccessPolicies: S.optional(S.String), SnapshotOptions: S.optional(SnapshotOptions), VPCOptions: S.optional(VPCOptions), CognitoOptions: S.optional(CognitoOptions), EncryptionAtRestOptions: S.optional(EncryptionAtRestOptions), NodeToNodeEncryptionOptions: S.optional(NodeToNodeEncryptionOptions), AdvancedOptions: S.optional(AdvancedOptions), LogPublishingOptions: S.optional(LogPublishingOptions), DomainEndpointOptions: S.optional(DomainEndpointOptions), AdvancedSecurityOptions: S.optional(AdvancedSecurityOptionsInput), AutoTuneOptions: S.optional(AutoTuneOptionsInput), TagList: S.optional(TagList)}) {}
export class CreateVpcEndpointResponse extends S.Class<CreateVpcEndpointResponse>("CreateVpcEndpointResponse")({VpcEndpoint: VpcEndpoint}) {}
export class DeleteOutboundCrossClusterSearchConnectionResponse extends S.Class<DeleteOutboundCrossClusterSearchConnectionResponse>("DeleteOutboundCrossClusterSearchConnectionResponse")({CrossClusterSearchConnection: S.optional(OutboundCrossClusterSearchConnection)}) {}
export class DescribeDomainChangeProgressResponse extends S.Class<DescribeDomainChangeProgressResponse>("DescribeDomainChangeProgressResponse")({ChangeProgressStatus: S.optional(ChangeProgressStatusDetails)}) {}
export class DescribeReservedElasticsearchInstanceOfferingsResponse extends S.Class<DescribeReservedElasticsearchInstanceOfferingsResponse>("DescribeReservedElasticsearchInstanceOfferingsResponse")({NextToken: S.optional(S.String), ReservedElasticsearchInstanceOfferings: S.optional(ReservedElasticsearchInstanceOfferingList)}) {}
export class GetUpgradeHistoryResponse extends S.Class<GetUpgradeHistoryResponse>("GetUpgradeHistoryResponse")({UpgradeHistories: S.optional(UpgradeHistoryList), NextToken: S.optional(S.String)}) {}
export class ElasticsearchVersionStatus extends S.Class<ElasticsearchVersionStatus>("ElasticsearchVersionStatus")({Options: S.String, Status: OptionStatus}) {}
export class AutoTuneOptionsStatus extends S.Class<AutoTuneOptionsStatus>("AutoTuneOptionsStatus")({Options: S.optional(AutoTuneOptions), Status: S.optional(AutoTuneStatus)}) {}
export class ElasticsearchDomainConfig extends S.Class<ElasticsearchDomainConfig>("ElasticsearchDomainConfig")({ElasticsearchVersion: S.optional(ElasticsearchVersionStatus), ElasticsearchClusterConfig: S.optional(ElasticsearchClusterConfigStatus), EBSOptions: S.optional(EBSOptionsStatus), AccessPolicies: S.optional(AccessPoliciesStatus), SnapshotOptions: S.optional(SnapshotOptionsStatus), VPCOptions: S.optional(VPCDerivedInfoStatus), CognitoOptions: S.optional(CognitoOptionsStatus), EncryptionAtRestOptions: S.optional(EncryptionAtRestOptionsStatus), NodeToNodeEncryptionOptions: S.optional(NodeToNodeEncryptionOptionsStatus), AdvancedOptions: S.optional(AdvancedOptionsStatus), LogPublishingOptions: S.optional(LogPublishingOptionsStatus), DomainEndpointOptions: S.optional(DomainEndpointOptionsStatus), AdvancedSecurityOptions: S.optional(AdvancedSecurityOptionsStatus), AutoTuneOptions: S.optional(AutoTuneOptionsStatus), ChangeProgressDetails: S.optional(ChangeProgressDetails), ModifyingProperties: S.optional(ModifyingPropertiesList)}) {}
export class UpdateElasticsearchDomainConfigResponse extends S.Class<UpdateElasticsearchDomainConfigResponse>("UpdateElasticsearchDomainConfigResponse")({DomainConfig: ElasticsearchDomainConfig, DryRunResults: S.optional(DryRunResults)}) {}
export class AutoTuneDetails extends S.Class<AutoTuneDetails>("AutoTuneDetails")({ScheduledAutoTuneDetails: S.optional(ScheduledAutoTuneDetails)}) {}
export class StorageTypeLimit extends S.Class<StorageTypeLimit>("StorageTypeLimit")({LimitName: S.optional(S.String), LimitValues: S.optional(LimitValueList)}) {}
export const StorageTypeLimitList = S.Array(StorageTypeLimit);
export class InstanceCountLimits extends S.Class<InstanceCountLimits>("InstanceCountLimits")({MinimumInstanceCount: S.optional(S.Number), MaximumInstanceCount: S.optional(S.Number)}) {}
export class AutoTune extends S.Class<AutoTune>("AutoTune")({AutoTuneType: S.optional(S.String), AutoTuneDetails: S.optional(AutoTuneDetails)}) {}
export const AutoTuneList = S.Array(AutoTune);
export class StorageType extends S.Class<StorageType>("StorageType")({StorageTypeName: S.optional(S.String), StorageSubTypeName: S.optional(S.String), StorageTypeLimits: S.optional(StorageTypeLimitList)}) {}
export const StorageTypeList = S.Array(StorageType);
export class InstanceLimits extends S.Class<InstanceLimits>("InstanceLimits")({InstanceCountLimits: S.optional(InstanceCountLimits)}) {}
export class CreateElasticsearchDomainResponse extends S.Class<CreateElasticsearchDomainResponse>("CreateElasticsearchDomainResponse")({DomainStatus: S.optional(ElasticsearchDomainStatus)}) {}
export class DeleteElasticsearchDomainResponse extends S.Class<DeleteElasticsearchDomainResponse>("DeleteElasticsearchDomainResponse")({DomainStatus: S.optional(ElasticsearchDomainStatus)}) {}
export class DescribeDomainAutoTunesResponse extends S.Class<DescribeDomainAutoTunesResponse>("DescribeDomainAutoTunesResponse")({AutoTunes: S.optional(AutoTuneList), NextToken: S.optional(S.String)}) {}
export class DescribeElasticsearchDomainConfigResponse extends S.Class<DescribeElasticsearchDomainConfigResponse>("DescribeElasticsearchDomainConfigResponse")({DomainConfig: ElasticsearchDomainConfig}) {}
export class Limits extends S.Class<Limits>("Limits")({StorageTypes: S.optional(StorageTypeList), InstanceLimits: S.optional(InstanceLimits), AdditionalLimits: S.optional(AdditionalLimitList)}) {}
export const LimitsByRole = S.Record({key: S.String, value: Limits});
export class DescribeElasticsearchInstanceTypeLimitsResponse extends S.Class<DescribeElasticsearchInstanceTypeLimitsResponse>("DescribeElasticsearchInstanceTypeLimitsResponse")({LimitsByRole: S.optional(LimitsByRole)}) {}

//# Errors
export class BaseException extends S.TaggedError<BaseException>()("BaseException", {message: S.optional(S.String)}) {};
export class InternalException extends S.TaggedError<InternalException>()("InternalException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class DisabledOperationException extends S.TaggedError<DisabledOperationException>()("DisabledOperationException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InvalidPaginationTokenException extends S.TaggedError<InvalidPaginationTokenException>()("InvalidPaginationTokenException", {}) {};
export class InvalidTypeException extends S.TaggedError<InvalidTypeException>()("InvalidTypeException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See Deleting Elasticsearch Service Role in *VPC Endpoints for Amazon Elasticsearch Service Domains*.
 */export const deleteElasticsearchServiceRole = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/role", method: "DELETE", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DeleteElasticsearchServiceRole" }, S.Struct({}), S.Struct({}), [BaseException, InternalException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.
 */export const describeElasticsearchDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeElasticsearchDomain" }, DescribeElasticsearchDomainRequest, DescribeElasticsearchDomainResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.
 */export const describeElasticsearchDomains = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain-info", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeElasticsearchDomains" }, DescribeElasticsearchDomainsRequest, DescribeElasticsearchDomainsResponse, [BaseException, InternalException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.
 */export const getUpgradeStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/upgradeDomain/{DomainName}/status", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.GetUpgradeStatus" }, GetUpgradeStatusRequest, GetUpgradeStatusResponse, [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all Amazon ES domains associated with the package.
 */export const listDomainsForPackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/packages/{PackageID}/domains", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.ListDomainsForPackage" }, ListDomainsForPackageRequest, ListDomainsForPackageResponse, [AccessDeniedException, BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all Elasticsearch instance types that are supported for given ElasticsearchVersion
 */export const listElasticsearchInstanceTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/instanceTypes/{ElasticsearchVersion}", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.ListElasticsearchInstanceTypes" }, ListElasticsearchInstanceTypesRequest, ListElasticsearchInstanceTypesResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all supported Elasticsearch versions
 */export const listElasticsearchVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/versions", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.ListElasticsearchVersions" }, ListElasticsearchVersionsRequest, ListElasticsearchVersionsResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all packages associated with the Amazon ES domain.
 */export const listPackagesForDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/domain/{DomainName}/packages", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.ListPackagesForDomain" }, ListPackagesForDomainRequest, ListPackagesForDomainResponse, [AccessDeniedException, BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns all tags for the given Elasticsearch domain.
 */export const listTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/tags", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.ListTags" }, ListTagsRequest, ListTagsResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about each principal that is allowed to access a
 * given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.
 */export const listVpcEndpointAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}/listVpcEndpointAccess", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.ListVpcEndpointAccess" }, ListVpcEndpointAccessRequest, ListVpcEndpointAccessResponse, [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current account and Region.
 */export const listVpcEndpoints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/vpcEndpoints", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.ListVpcEndpoints" }, ListVpcEndpointsRequest, ListVpcEndpointsResponse, [BaseException, DisabledOperationException, InternalException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a particular domain.
 */export const listVpcEndpointsForDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}/vpcEndpoints", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.ListVpcEndpointsForDomain" }, ListVpcEndpointsForDomainRequest, ListVpcEndpointsForDomainResponse, [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows the destination domain owner to reject an inbound cross-cluster search connection request.
 */export const rejectInboundCrossClusterSearchConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/reject", method: "PUT", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.RejectInboundCrossClusterSearchConnection" }, RejectInboundCrossClusterSearchConnectionRequest, RejectInboundCrossClusterSearchConnectionResponse, [DisabledOperationException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified set of tags from the specified Elasticsearch domain.
 */export const removeTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/tags-removal", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.RemoveTags" }, RemoveTagsRequest, S.Struct({}), [BaseException, InternalException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Revokes access to an Amazon OpenSearch Service domain that was provided through an interface
 * VPC endpoint.
 */export const revokeVpcEndpointAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}/revokeVpcEndpointAccess", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.RevokeVpcEndpointAccess" }, RevokeVpcEndpointAccessRequest, RevokeVpcEndpointAccessResponse, [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Schedules a service software update for an Amazon ES domain.
 */export const startElasticsearchServiceSoftwareUpdate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/serviceSoftwareUpdate/start", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.StartElasticsearchServiceSoftwareUpdate" }, StartElasticsearchServiceSoftwareUpdateRequest, StartElasticsearchServiceSoftwareUpdateResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a package for use with Amazon ES domains.
 */export const updatePackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/packages/update", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.UpdatePackage" }, UpdatePackageRequest, UpdatePackageResponse, [AccessDeniedException, BaseException, InternalException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See
 * Tagging Amazon Elasticsearch Service Domains for more information.
 */export const addTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/tags", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.AddTags" }, AddTagsRequest, S.Struct({}), [BaseException, InternalException, LimitExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.
 */export const authorizeVpcEndpointAccess = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}/authorizeVpcEndpointAccess", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.AuthorizeVpcEndpointAccess" }, AuthorizeVpcEndpointAccessRequest, AuthorizeVpcEndpointAccessResponse, [BaseException, DisabledOperationException, InternalException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a pending configuration change on an Amazon OpenSearch Service domain.
 */export const cancelDomainConfigChange = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}/config/cancel", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.CancelDomainConfigChange" }, CancelDomainConfigChangeRequest, CancelDomainConfigChangeResponse, [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the `AutomatedUpdateDate` and when the `UpdateStatus` is in the `PENDING_UPDATE` state.
 */export const cancelElasticsearchServiceSoftwareUpdate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/serviceSoftwareUpdate/cancel", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.CancelElasticsearchServiceSoftwareUpdate" }, CancelElasticsearchServiceSoftwareUpdateRequest, CancelElasticsearchServiceSoftwareUpdateResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new cross-cluster search connection from a source domain to a destination domain.
 */export const createOutboundCrossClusterSearchConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/ccs/outboundConnection", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.CreateOutboundCrossClusterSearchConnection" }, CreateOutboundCrossClusterSearchConnectionRequest, CreateOutboundCrossClusterSearchConnectionResponse, [DisabledOperationException, InternalException, LimitExceededException, ResourceAlreadyExistsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows the destination domain owner to delete an existing inbound cross-cluster search connection.
 */export const deleteInboundCrossClusterSearchConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}", method: "DELETE", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DeleteInboundCrossClusterSearchConnection" }, DeleteInboundCrossClusterSearchConnectionRequest, DeleteInboundCrossClusterSearchConnectionResponse, [DisabledOperationException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete the package.
 */export const deletePackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/packages/{PackageID}", method: "DELETE", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DeletePackage" }, DeletePackageRequest, DeletePackageResponse, [AccessDeniedException, BaseException, ConflictException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.
 */export const deleteVpcEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/vpcEndpoints/{VpcEndpointId}", method: "DELETE", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DeleteVpcEndpoint" }, DeleteVpcEndpointRequest, DeleteVpcEndpointResponse, [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the inbound cross-cluster search connections for a destination domain.
 */export const describeInboundCrossClusterSearchConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/ccs/inboundConnection/search", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeInboundCrossClusterSearchConnections" }, DescribeInboundCrossClusterSearchConnectionsRequest, DescribeInboundCrossClusterSearchConnectionsResponse, [DisabledOperationException, InvalidPaginationTokenException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the outbound cross-cluster search connections for a source domain.
 */export const describeOutboundCrossClusterSearchConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/ccs/outboundConnection/search", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeOutboundCrossClusterSearchConnections" }, DescribeOutboundCrossClusterSearchConnectionsRequest, DescribeOutboundCrossClusterSearchConnectionsResponse, [DisabledOperationException, InvalidPaginationTokenException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.
 */export const describePackages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/packages/describe", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribePackages" }, DescribePackagesRequest, DescribePackagesResponse, [AccessDeniedException, BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about reserved Elasticsearch instances for this account.
 */export const describeReservedElasticsearchInstances = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/reservedInstances", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeReservedElasticsearchInstances" }, DescribeReservedElasticsearchInstancesRequest, DescribeReservedElasticsearchInstancesResponse, [DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes one or more Amazon OpenSearch Service-managed VPC endpoints.
 */export const describeVpcEndpoints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/vpcEndpoints/describe", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeVpcEndpoints" }, DescribeVpcEndpointsRequest, DescribeVpcEndpointsResponse, [BaseException, DisabledOperationException, InternalException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Dissociates a package from the Amazon ES domain.
 */export const dissociatePackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/packages/dissociate/{PackageID}/{DomainName}", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DissociatePackage" }, DissociatePackageRequest, DissociatePackageResponse, [AccessDeniedException, BaseException, ConflictException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of upgrade compatible Elastisearch versions.
 * You can optionally pass a
 * 
 * DomainName
 * 
 * to get all upgrade compatible Elasticsearch versions for that specific domain.
 */export const getCompatibleElasticsearchVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/compatibleVersions", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.GetCompatibleElasticsearchVersions" }, GetCompatibleElasticsearchVersionsRequest, GetCompatibleElasticsearchVersionsResponse, [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of versions of the package, along with their creation time and commit message.
 */export const getPackageVersionHistory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/packages/{PackageID}/history", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.GetPackageVersionHistory" }, GetPackageVersionHistoryRequest, GetPackageVersionHistoryResponse, [AccessDeniedException, BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the name of all Elasticsearch domains owned by the current user's account.
 */export const listDomainNames = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/domain", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.ListDomainNames" }, ListDomainNamesRequest, ListDomainNamesResponse, [BaseException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows you to purchase reserved Elasticsearch instances.
 */export const purchaseReservedElasticsearchInstanceOffering = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/purchaseReservedInstanceOffering", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.PurchaseReservedElasticsearchInstanceOffering" }, PurchaseReservedElasticsearchInstanceOfferingRequest, PurchaseReservedElasticsearchInstanceOfferingResponse, [DisabledOperationException, InternalException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.
 */export const updateVpcEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/vpcEndpoints/update", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.UpdateVpcEndpoint" }, UpdateVpcEndpointRequest, UpdateVpcEndpointResponse, [BaseException, ConflictException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.
 */export const upgradeElasticsearchDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/upgradeDomain", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.UpgradeElasticsearchDomain" }, UpgradeElasticsearchDomainRequest, UpgradeElasticsearchDomainResponse, [BaseException, DisabledOperationException, InternalException, ResourceAlreadyExistsException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows the destination domain owner to accept an inbound cross-cluster search connection request.
 */export const acceptInboundCrossClusterSearchConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/accept", method: "PUT", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.AcceptInboundCrossClusterSearchConnection" }, AcceptInboundCrossClusterSearchConnectionRequest, AcceptInboundCrossClusterSearchConnectionResponse, [DisabledOperationException, LimitExceededException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a package with an Amazon ES domain.
 */export const associatePackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/packages/associate/{PackageID}/{DomainName}", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.AssociatePackage" }, AssociatePackageRequest, AssociatePackageResponse, [AccessDeniedException, BaseException, ConflictException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a package for use with Amazon ES domains.
 */export const createPackage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/packages", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.CreatePackage" }, CreatePackageRequest, CreatePackageResponse, [AccessDeniedException, BaseException, InternalException, InvalidTypeException, LimitExceededException, ResourceAlreadyExistsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon OpenSearch Service-managed VPC endpoint.
 */export const createVpcEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/vpcEndpoints", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.CreateVpcEndpoint" }, CreateVpcEndpointRequest, CreateVpcEndpointResponse, [BaseException, ConflictException, DisabledOperationException, InternalException, LimitExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows the source domain owner to delete an existing outbound cross-cluster search connection.
 */export const deleteOutboundCrossClusterSearchConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/ccs/outboundConnection/{CrossClusterSearchConnectionId}", method: "DELETE", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DeleteOutboundCrossClusterSearchConnection" }, DeleteOutboundCrossClusterSearchConnectionRequest, DeleteOutboundCrossClusterSearchConnectionResponse, [DisabledOperationException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the current blue/green deployment happening on a domain, including
 * a change ID, status, and progress stages.
 */export const describeDomainChangeProgress = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}/progress", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeDomainChangeProgress" }, DescribeDomainChangeProgressRequest, DescribeDomainChangeProgressResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists available reserved Elasticsearch instance offerings.
 */export const describeReservedElasticsearchInstanceOfferings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/reservedInstanceOfferings", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeReservedElasticsearchInstanceOfferings" }, DescribeReservedElasticsearchInstanceOfferingsRequest, DescribeReservedElasticsearchInstanceOfferingsResponse, [DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the complete history of the last 10 upgrades that were performed on the domain.
 */export const getUpgradeHistory = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/upgradeDomain/{DomainName}/history", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.GetUpgradeHistory" }, GetUpgradeHistoryRequest, GetUpgradeHistoryResponse, [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances.
 */export const updateElasticsearchDomainConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}/config", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.UpdateElasticsearchDomainConfig" }, UpdateElasticsearchDomainConfigRequest, UpdateElasticsearchDomainConfigResponse, [BaseException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new Elasticsearch domain. For more information,
 * see Creating Elasticsearch Domains in the *Amazon Elasticsearch Service Developer Guide*.
 */export const createElasticsearchDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain", method: "POST", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.CreateElasticsearchDomain" }, CreateElasticsearchDomainRequest, CreateElasticsearchDomainResponse, [BaseException, DisabledOperationException, InternalException, InvalidTypeException, LimitExceededException, ResourceAlreadyExistsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.
 */export const deleteElasticsearchDomain = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}", method: "DELETE", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DeleteElasticsearchDomain" }, DeleteElasticsearchDomainRequest, DeleteElasticsearchDomainResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides scheduled Auto-Tune action details for the Elasticsearch domain, such as Auto-Tune action type, description, severity, and scheduled date.
 */export const describeDomainAutoTunes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}/autoTunes", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeDomainAutoTunes" }, DescribeDomainAutoTunesRequest, DescribeDomainAutoTunesResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.
 */export const describeElasticsearchDomainConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/domain/{DomainName}/config", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeElasticsearchDomainConfig" }, DescribeElasticsearchDomainConfigRequest, DescribeElasticsearchDomainConfigResponse, [BaseException, InternalException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion.
 * When modifying existing Domain, specify the
 * 
 * DomainName
 * 
 * to know what Limits are supported for modifying.
 */export const describeElasticsearchInstanceTypeLimits = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-01-01", uri: "/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}", method: "GET", sdkId: "Elasticsearch Service", sigV4ServiceName: "es", name: "AmazonElasticsearchService2015.DescribeElasticsearchInstanceTypeLimits" }, DescribeElasticsearchInstanceTypeLimitsRequest, DescribeElasticsearchInstanceTypeLimitsResponse, [BaseException, InternalException, InvalidTypeException, LimitExceededException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
