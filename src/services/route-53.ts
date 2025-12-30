import * as S from "effect/Schema"
import { FormatXMLRequest,FormatXMLResponse,FormatAwsXMLError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetCheckerIpRangesRequest extends S.Class<GetCheckerIpRangesRequest>("GetCheckerIpRangesRequest")({}) {}
export class GetHealthCheckCountRequest extends S.Class<GetHealthCheckCountRequest>("GetHealthCheckCountRequest")({}) {}
export class GetHostedZoneCountRequest extends S.Class<GetHostedZoneCountRequest>("GetHostedZoneCountRequest")({}) {}
export class GetTrafficPolicyInstanceCountRequest extends S.Class<GetTrafficPolicyInstanceCountRequest>("GetTrafficPolicyInstanceCountRequest")({}) {}
export const TagKeyList = S.Array(S.String);
export const CheckerIpRanges = S.Array(S.String);
export const TagResourceIdList = S.Array(S.String);
export const ChildHealthCheckList = S.Array(S.String);
export const HealthCheckRegionList = S.Array(S.String);
export const ResettableElementNameList = S.Array(S.String);
export class ActivateKeySigningKeyRequest extends S.Class<ActivateKeySigningKeyRequest>("ActivateKeySigningKeyRequest")({HostedZoneId: S.String, Name: S.String}) {}
export class CreateCidrCollectionRequest extends S.Class<CreateCidrCollectionRequest>("CreateCidrCollectionRequest")({Name: S.String, CallerReference: S.String}) {}
export class CreateKeySigningKeyRequest extends S.Class<CreateKeySigningKeyRequest>("CreateKeySigningKeyRequest")({CallerReference: S.String, HostedZoneId: S.String, KeyManagementServiceArn: S.String, Name: S.String, Status: S.String}) {}
export class CreateQueryLoggingConfigRequest extends S.Class<CreateQueryLoggingConfigRequest>("CreateQueryLoggingConfigRequest")({HostedZoneId: S.String, CloudWatchLogsLogGroupArn: S.String}) {}
export class CreateReusableDelegationSetRequest extends S.Class<CreateReusableDelegationSetRequest>("CreateReusableDelegationSetRequest")({CallerReference: S.String, HostedZoneId: S.optional(S.String)}) {}
export class CreateTrafficPolicyRequest extends S.Class<CreateTrafficPolicyRequest>("CreateTrafficPolicyRequest")({Name: S.String, Document: S.String, Comment: S.optional(S.String)}) {}
export class CreateTrafficPolicyInstanceRequest extends S.Class<CreateTrafficPolicyInstanceRequest>("CreateTrafficPolicyInstanceRequest")({HostedZoneId: S.String, Name: S.String, TTL: S.Number, TrafficPolicyId: S.String, TrafficPolicyVersion: S.Number}) {}
export class CreateTrafficPolicyVersionRequest extends S.Class<CreateTrafficPolicyVersionRequest>("CreateTrafficPolicyVersionRequest")({Id: S.String, Document: S.String, Comment: S.optional(S.String)}) {}
export class VPC extends S.Class<VPC>("VPC")({VPCRegion: S.optional(S.String), VPCId: S.optional(S.String)}) {}
export class CreateVPCAssociationAuthorizationRequest extends S.Class<CreateVPCAssociationAuthorizationRequest>("CreateVPCAssociationAuthorizationRequest")({HostedZoneId: S.String, VPC: VPC}) {}
export class DeactivateKeySigningKeyRequest extends S.Class<DeactivateKeySigningKeyRequest>("DeactivateKeySigningKeyRequest")({HostedZoneId: S.String, Name: S.String}) {}
export class DeleteCidrCollectionRequest extends S.Class<DeleteCidrCollectionRequest>("DeleteCidrCollectionRequest")({Id: S.String}) {}
export class DeleteCidrCollectionResponse extends S.Class<DeleteCidrCollectionResponse>("DeleteCidrCollectionResponse")({}) {}
export class DeleteHealthCheckRequest extends S.Class<DeleteHealthCheckRequest>("DeleteHealthCheckRequest")({HealthCheckId: S.String}) {}
export class DeleteHealthCheckResponse extends S.Class<DeleteHealthCheckResponse>("DeleteHealthCheckResponse")({}) {}
export class DeleteHostedZoneRequest extends S.Class<DeleteHostedZoneRequest>("DeleteHostedZoneRequest")({Id: S.String}) {}
export class DeleteKeySigningKeyRequest extends S.Class<DeleteKeySigningKeyRequest>("DeleteKeySigningKeyRequest")({HostedZoneId: S.String, Name: S.String}) {}
export class DeleteQueryLoggingConfigRequest extends S.Class<DeleteQueryLoggingConfigRequest>("DeleteQueryLoggingConfigRequest")({Id: S.String}) {}
export class DeleteQueryLoggingConfigResponse extends S.Class<DeleteQueryLoggingConfigResponse>("DeleteQueryLoggingConfigResponse")({}) {}
export class DeleteReusableDelegationSetRequest extends S.Class<DeleteReusableDelegationSetRequest>("DeleteReusableDelegationSetRequest")({Id: S.String}) {}
export class DeleteReusableDelegationSetResponse extends S.Class<DeleteReusableDelegationSetResponse>("DeleteReusableDelegationSetResponse")({}) {}
export class DeleteTrafficPolicyRequest extends S.Class<DeleteTrafficPolicyRequest>("DeleteTrafficPolicyRequest")({Id: S.String, Version: S.Number}) {}
export class DeleteTrafficPolicyResponse extends S.Class<DeleteTrafficPolicyResponse>("DeleteTrafficPolicyResponse")({}) {}
export class DeleteTrafficPolicyInstanceRequest extends S.Class<DeleteTrafficPolicyInstanceRequest>("DeleteTrafficPolicyInstanceRequest")({Id: S.String}) {}
export class DeleteTrafficPolicyInstanceResponse extends S.Class<DeleteTrafficPolicyInstanceResponse>("DeleteTrafficPolicyInstanceResponse")({}) {}
export class DeleteVPCAssociationAuthorizationRequest extends S.Class<DeleteVPCAssociationAuthorizationRequest>("DeleteVPCAssociationAuthorizationRequest")({HostedZoneId: S.String, VPC: VPC}) {}
export class DeleteVPCAssociationAuthorizationResponse extends S.Class<DeleteVPCAssociationAuthorizationResponse>("DeleteVPCAssociationAuthorizationResponse")({}) {}
export class DisableHostedZoneDNSSECRequest extends S.Class<DisableHostedZoneDNSSECRequest>("DisableHostedZoneDNSSECRequest")({HostedZoneId: S.String}) {}
export class DisassociateVPCFromHostedZoneRequest extends S.Class<DisassociateVPCFromHostedZoneRequest>("DisassociateVPCFromHostedZoneRequest")({HostedZoneId: S.String, VPC: VPC, Comment: S.optional(S.String)}) {}
export class EnableHostedZoneDNSSECRequest extends S.Class<EnableHostedZoneDNSSECRequest>("EnableHostedZoneDNSSECRequest")({HostedZoneId: S.String}) {}
export class GetAccountLimitRequest extends S.Class<GetAccountLimitRequest>("GetAccountLimitRequest")({Type: S.String}) {}
export class GetChangeRequest extends S.Class<GetChangeRequest>("GetChangeRequest")({Id: S.String}) {}
export class GetCheckerIpRangesResponse extends S.Class<GetCheckerIpRangesResponse>("GetCheckerIpRangesResponse")({CheckerIpRanges: CheckerIpRanges}) {}
export class GetDNSSECRequest extends S.Class<GetDNSSECRequest>("GetDNSSECRequest")({HostedZoneId: S.String}) {}
export class GetGeoLocationRequest extends S.Class<GetGeoLocationRequest>("GetGeoLocationRequest")({ContinentCode: S.optional(S.String), CountryCode: S.optional(S.String), SubdivisionCode: S.optional(S.String)}) {}
export class GetHealthCheckRequest extends S.Class<GetHealthCheckRequest>("GetHealthCheckRequest")({HealthCheckId: S.String}) {}
export class GetHealthCheckCountResponse extends S.Class<GetHealthCheckCountResponse>("GetHealthCheckCountResponse")({HealthCheckCount: S.Number}) {}
export class GetHealthCheckLastFailureReasonRequest extends S.Class<GetHealthCheckLastFailureReasonRequest>("GetHealthCheckLastFailureReasonRequest")({HealthCheckId: S.String}) {}
export class GetHealthCheckStatusRequest extends S.Class<GetHealthCheckStatusRequest>("GetHealthCheckStatusRequest")({HealthCheckId: S.String}) {}
export class GetHostedZoneRequest extends S.Class<GetHostedZoneRequest>("GetHostedZoneRequest")({Id: S.String}) {}
export class GetHostedZoneCountResponse extends S.Class<GetHostedZoneCountResponse>("GetHostedZoneCountResponse")({HostedZoneCount: S.Number}) {}
export class GetHostedZoneLimitRequest extends S.Class<GetHostedZoneLimitRequest>("GetHostedZoneLimitRequest")({Type: S.String, HostedZoneId: S.String}) {}
export class GetQueryLoggingConfigRequest extends S.Class<GetQueryLoggingConfigRequest>("GetQueryLoggingConfigRequest")({Id: S.String}) {}
export class GetReusableDelegationSetRequest extends S.Class<GetReusableDelegationSetRequest>("GetReusableDelegationSetRequest")({Id: S.String}) {}
export class GetReusableDelegationSetLimitRequest extends S.Class<GetReusableDelegationSetLimitRequest>("GetReusableDelegationSetLimitRequest")({Type: S.String, DelegationSetId: S.String}) {}
export class GetTrafficPolicyRequest extends S.Class<GetTrafficPolicyRequest>("GetTrafficPolicyRequest")({Id: S.String, Version: S.Number}) {}
export class GetTrafficPolicyInstanceRequest extends S.Class<GetTrafficPolicyInstanceRequest>("GetTrafficPolicyInstanceRequest")({Id: S.String}) {}
export class GetTrafficPolicyInstanceCountResponse extends S.Class<GetTrafficPolicyInstanceCountResponse>("GetTrafficPolicyInstanceCountResponse")({TrafficPolicyInstanceCount: S.Number}) {}
export class ListCidrBlocksRequest extends S.Class<ListCidrBlocksRequest>("ListCidrBlocksRequest")({CollectionId: S.String, LocationName: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListCidrCollectionsRequest extends S.Class<ListCidrCollectionsRequest>("ListCidrCollectionsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListCidrLocationsRequest extends S.Class<ListCidrLocationsRequest>("ListCidrLocationsRequest")({CollectionId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListGeoLocationsRequest extends S.Class<ListGeoLocationsRequest>("ListGeoLocationsRequest")({StartContinentCode: S.optional(S.String), StartCountryCode: S.optional(S.String), StartSubdivisionCode: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListHealthChecksRequest extends S.Class<ListHealthChecksRequest>("ListHealthChecksRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListHostedZonesRequest extends S.Class<ListHostedZonesRequest>("ListHostedZonesRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number), DelegationSetId: S.optional(S.String), HostedZoneType: S.optional(S.String)}) {}
export class ListHostedZonesByNameRequest extends S.Class<ListHostedZonesByNameRequest>("ListHostedZonesByNameRequest")({DNSName: S.optional(S.String), HostedZoneId: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListHostedZonesByVPCRequest extends S.Class<ListHostedZonesByVPCRequest>("ListHostedZonesByVPCRequest")({VPCId: S.String, VPCRegion: S.String, MaxItems: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListQueryLoggingConfigsRequest extends S.Class<ListQueryLoggingConfigsRequest>("ListQueryLoggingConfigsRequest")({HostedZoneId: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListResourceRecordSetsRequest extends S.Class<ListResourceRecordSetsRequest>("ListResourceRecordSetsRequest")({HostedZoneId: S.String, StartRecordName: S.optional(S.String), StartRecordType: S.optional(S.String), StartRecordIdentifier: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListReusableDelegationSetsRequest extends S.Class<ListReusableDelegationSetsRequest>("ListReusableDelegationSetsRequest")({Marker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceType: S.String, ResourceId: S.String}) {}
export class ListTagsForResourcesRequest extends S.Class<ListTagsForResourcesRequest>("ListTagsForResourcesRequest")({ResourceType: S.String, ResourceIds: TagResourceIdList}) {}
export class ListTrafficPoliciesRequest extends S.Class<ListTrafficPoliciesRequest>("ListTrafficPoliciesRequest")({TrafficPolicyIdMarker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListTrafficPolicyInstancesRequest extends S.Class<ListTrafficPolicyInstancesRequest>("ListTrafficPolicyInstancesRequest")({HostedZoneIdMarker: S.optional(S.String), TrafficPolicyInstanceNameMarker: S.optional(S.String), TrafficPolicyInstanceTypeMarker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListTrafficPolicyInstancesByHostedZoneRequest extends S.Class<ListTrafficPolicyInstancesByHostedZoneRequest>("ListTrafficPolicyInstancesByHostedZoneRequest")({HostedZoneId: S.String, TrafficPolicyInstanceNameMarker: S.optional(S.String), TrafficPolicyInstanceTypeMarker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListTrafficPolicyInstancesByPolicyRequest extends S.Class<ListTrafficPolicyInstancesByPolicyRequest>("ListTrafficPolicyInstancesByPolicyRequest")({TrafficPolicyId: S.String, TrafficPolicyVersion: S.Number, HostedZoneIdMarker: S.optional(S.String), TrafficPolicyInstanceNameMarker: S.optional(S.String), TrafficPolicyInstanceTypeMarker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListTrafficPolicyVersionsRequest extends S.Class<ListTrafficPolicyVersionsRequest>("ListTrafficPolicyVersionsRequest")({Id: S.String, TrafficPolicyVersionMarker: S.optional(S.String), MaxItems: S.optional(S.Number)}) {}
export class ListVPCAssociationAuthorizationsRequest extends S.Class<ListVPCAssociationAuthorizationsRequest>("ListVPCAssociationAuthorizationsRequest")({HostedZoneId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class TestDNSAnswerRequest extends S.Class<TestDNSAnswerRequest>("TestDNSAnswerRequest")({HostedZoneId: S.String, RecordName: S.String, RecordType: S.String, ResolverIP: S.optional(S.String), EDNS0ClientSubnetIP: S.optional(S.String), EDNS0ClientSubnetMask: S.optional(S.String)}) {}
export class UpdateHostedZoneCommentRequest extends S.Class<UpdateHostedZoneCommentRequest>("UpdateHostedZoneCommentRequest")({Id: S.String, Comment: S.optional(S.String)}) {}
export class UpdateHostedZoneFeaturesRequest extends S.Class<UpdateHostedZoneFeaturesRequest>("UpdateHostedZoneFeaturesRequest")({HostedZoneId: S.String, EnableAcceleratedRecovery: S.optional(S.Boolean)}) {}
export class UpdateHostedZoneFeaturesResponse extends S.Class<UpdateHostedZoneFeaturesResponse>("UpdateHostedZoneFeaturesResponse")({}) {}
export class UpdateTrafficPolicyCommentRequest extends S.Class<UpdateTrafficPolicyCommentRequest>("UpdateTrafficPolicyCommentRequest")({Id: S.String, Version: S.Number, Comment: S.String}) {}
export class UpdateTrafficPolicyInstanceRequest extends S.Class<UpdateTrafficPolicyInstanceRequest>("UpdateTrafficPolicyInstanceRequest")({Id: S.String, TTL: S.Number, TrafficPolicyId: S.String, TrafficPolicyVersion: S.Number}) {}
export const CidrList = S.Array(S.String);
export class CidrCollectionChange extends S.Class<CidrCollectionChange>("CidrCollectionChange")({LocationName: S.String, Action: S.String, CidrList: CidrList}) {}
export const CidrCollectionChanges = S.Array(CidrCollectionChange);
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const TagList = S.Array(Tag);
export class AlarmIdentifier extends S.Class<AlarmIdentifier>("AlarmIdentifier")({Region: S.String, Name: S.String}) {}
export class HealthCheckConfig extends S.Class<HealthCheckConfig>("HealthCheckConfig")({IPAddress: S.optional(S.String), Port: S.optional(S.Number), Type: S.String, ResourcePath: S.optional(S.String), FullyQualifiedDomainName: S.optional(S.String), SearchString: S.optional(S.String), RequestInterval: S.optional(S.Number), FailureThreshold: S.optional(S.Number), MeasureLatency: S.optional(S.Boolean), Inverted: S.optional(S.Boolean), Disabled: S.optional(S.Boolean), HealthThreshold: S.optional(S.Number), ChildHealthChecks: S.optional(ChildHealthCheckList), EnableSNI: S.optional(S.Boolean), Regions: S.optional(HealthCheckRegionList), AlarmIdentifier: S.optional(AlarmIdentifier), InsufficientDataHealthStatus: S.optional(S.String), RoutingControlArn: S.optional(S.String)}) {}
export class HostedZoneConfig extends S.Class<HostedZoneConfig>("HostedZoneConfig")({Comment: S.optional(S.String), PrivateZone: S.optional(S.Boolean)}) {}
export class KeySigningKey extends S.Class<KeySigningKey>("KeySigningKey")({Name: S.optional(S.String), KmsArn: S.optional(S.String), Flag: S.optional(S.Number), SigningAlgorithmMnemonic: S.optional(S.String), SigningAlgorithmType: S.optional(S.Number), DigestAlgorithmMnemonic: S.optional(S.String), DigestAlgorithmType: S.optional(S.Number), KeyTag: S.optional(S.Number), DigestValue: S.optional(S.String), PublicKey: S.optional(S.String), DSRecord: S.optional(S.String), DNSKEYRecord: S.optional(S.String), Status: S.optional(S.String), StatusMessage: S.optional(S.String), CreatedDate: S.optional(S.Date), LastModifiedDate: S.optional(S.Date)}) {}
export const KeySigningKeys = S.Array(KeySigningKey);
export const VPCs = S.Array(VPC);
export class GeoLocationDetails extends S.Class<GeoLocationDetails>("GeoLocationDetails")({ContinentCode: S.optional(S.String), ContinentName: S.optional(S.String), CountryCode: S.optional(S.String), CountryName: S.optional(S.String), SubdivisionCode: S.optional(S.String), SubdivisionName: S.optional(S.String)}) {}
export const GeoLocationDetailsList = S.Array(GeoLocationDetails);
export class LinkedService extends S.Class<LinkedService>("LinkedService")({ServicePrincipal: S.optional(S.String), Description: S.optional(S.String)}) {}
export class Dimension extends S.Class<Dimension>("Dimension")({Name: S.String, Value: S.String}) {}
export const DimensionList = S.Array(Dimension);
export class CloudWatchAlarmConfiguration extends S.Class<CloudWatchAlarmConfiguration>("CloudWatchAlarmConfiguration")({EvaluationPeriods: S.Number, Threshold: S.Number, ComparisonOperator: S.String, Period: S.Number, MetricName: S.String, Namespace: S.String, Statistic: S.String, Dimensions: S.optional(DimensionList)}) {}
export class HealthCheck extends S.Class<HealthCheck>("HealthCheck")({Id: S.String, CallerReference: S.String, LinkedService: S.optional(LinkedService), HealthCheckConfig: HealthCheckConfig, HealthCheckVersion: S.Number, CloudWatchAlarmConfiguration: S.optional(CloudWatchAlarmConfiguration)}) {}
export const HealthChecks = S.Array(HealthCheck);
export class HostedZoneFailureReasons extends S.Class<HostedZoneFailureReasons>("HostedZoneFailureReasons")({AcceleratedRecovery: S.optional(S.String)}) {}
export class HostedZoneFeatures extends S.Class<HostedZoneFeatures>("HostedZoneFeatures")({AcceleratedRecoveryStatus: S.optional(S.String), FailureReasons: S.optional(HostedZoneFailureReasons)}) {}
export class HostedZone extends S.Class<HostedZone>("HostedZone")({Id: S.String, Name: S.String, CallerReference: S.String, Config: S.optional(HostedZoneConfig), ResourceRecordSetCount: S.optional(S.Number), LinkedService: S.optional(LinkedService), Features: S.optional(HostedZoneFeatures)}) {}
export const HostedZones = S.Array(HostedZone);
export class QueryLoggingConfig extends S.Class<QueryLoggingConfig>("QueryLoggingConfig")({Id: S.String, HostedZoneId: S.String, CloudWatchLogsLogGroupArn: S.String}) {}
export const QueryLoggingConfigs = S.Array(QueryLoggingConfig);
export const DelegationSetNameServers = S.Array(S.String);
export class DelegationSet extends S.Class<DelegationSet>("DelegationSet")({Id: S.optional(S.String), CallerReference: S.optional(S.String), NameServers: DelegationSetNameServers}) {}
export const DelegationSets = S.Array(DelegationSet);
export class ResourceTagSet extends S.Class<ResourceTagSet>("ResourceTagSet")({ResourceType: S.optional(S.String), ResourceId: S.optional(S.String), Tags: S.optional(TagList)}) {}
export const ResourceTagSetList = S.Array(ResourceTagSet);
export class TrafficPolicyInstance extends S.Class<TrafficPolicyInstance>("TrafficPolicyInstance")({Id: S.String, HostedZoneId: S.String, Name: S.String, TTL: S.Number, State: S.String, Message: S.String, TrafficPolicyId: S.String, TrafficPolicyVersion: S.Number, TrafficPolicyType: S.String}) {}
export const TrafficPolicyInstances = S.Array(TrafficPolicyInstance);
export class TrafficPolicy extends S.Class<TrafficPolicy>("TrafficPolicy")({Id: S.String, Version: S.Number, Name: S.String, Type: S.String, Document: S.String, Comment: S.optional(S.String)}) {}
export const TrafficPolicies = S.Array(TrafficPolicy);
export const RecordData = S.Array(S.String);
export class AssociateVPCWithHostedZoneRequest extends S.Class<AssociateVPCWithHostedZoneRequest>("AssociateVPCWithHostedZoneRequest")({HostedZoneId: S.String, VPC: VPC, Comment: S.optional(S.String)}) {}
export class ChangeCidrCollectionRequest extends S.Class<ChangeCidrCollectionRequest>("ChangeCidrCollectionRequest")({Id: S.String, CollectionVersion: S.optional(S.Number), Changes: CidrCollectionChanges}) {}
export class ChangeTagsForResourceRequest extends S.Class<ChangeTagsForResourceRequest>("ChangeTagsForResourceRequest")({ResourceType: S.String, ResourceId: S.String, AddTags: S.optional(TagList), RemoveTagKeys: S.optional(TagKeyList)}) {}
export class ChangeTagsForResourceResponse extends S.Class<ChangeTagsForResourceResponse>("ChangeTagsForResourceResponse")({}) {}
export class CreateHealthCheckRequest extends S.Class<CreateHealthCheckRequest>("CreateHealthCheckRequest")({CallerReference: S.String, HealthCheckConfig: HealthCheckConfig}) {}
export class CreateHostedZoneRequest extends S.Class<CreateHostedZoneRequest>("CreateHostedZoneRequest")({Name: S.String, VPC: S.optional(VPC), CallerReference: S.String, HostedZoneConfig: S.optional(HostedZoneConfig), DelegationSetId: S.optional(S.String)}) {}
export class CreateTrafficPolicyVersionResponse extends S.Class<CreateTrafficPolicyVersionResponse>("CreateTrafficPolicyVersionResponse")({TrafficPolicy: TrafficPolicy, Location: H.Header("Location")}) {}
export class CreateVPCAssociationAuthorizationResponse extends S.Class<CreateVPCAssociationAuthorizationResponse>("CreateVPCAssociationAuthorizationResponse")({HostedZoneId: S.String, VPC: VPC}) {}
export class ChangeInfo extends S.Class<ChangeInfo>("ChangeInfo")({Id: S.String, Status: S.String, SubmittedAt: S.Date, Comment: S.optional(S.String)}) {}
export class DeactivateKeySigningKeyResponse extends S.Class<DeactivateKeySigningKeyResponse>("DeactivateKeySigningKeyResponse")({ChangeInfo: ChangeInfo}) {}
export class DeleteHostedZoneResponse extends S.Class<DeleteHostedZoneResponse>("DeleteHostedZoneResponse")({ChangeInfo: ChangeInfo}) {}
export class DeleteKeySigningKeyResponse extends S.Class<DeleteKeySigningKeyResponse>("DeleteKeySigningKeyResponse")({ChangeInfo: ChangeInfo}) {}
export class DisableHostedZoneDNSSECResponse extends S.Class<DisableHostedZoneDNSSECResponse>("DisableHostedZoneDNSSECResponse")({ChangeInfo: ChangeInfo}) {}
export class DisassociateVPCFromHostedZoneResponse extends S.Class<DisassociateVPCFromHostedZoneResponse>("DisassociateVPCFromHostedZoneResponse")({ChangeInfo: ChangeInfo}) {}
export class EnableHostedZoneDNSSECResponse extends S.Class<EnableHostedZoneDNSSECResponse>("EnableHostedZoneDNSSECResponse")({ChangeInfo: ChangeInfo}) {}
export class GetChangeResponse extends S.Class<GetChangeResponse>("GetChangeResponse")({ChangeInfo: ChangeInfo}) {}
export class StatusReport extends S.Class<StatusReport>("StatusReport")({Status: S.optional(S.String), CheckedTime: S.optional(S.Date)}) {}
export class HealthCheckObservation extends S.Class<HealthCheckObservation>("HealthCheckObservation")({Region: S.optional(S.String), IPAddress: S.optional(S.String), StatusReport: S.optional(StatusReport)}) {}
export const HealthCheckObservations = S.Array(HealthCheckObservation);
export class GetHealthCheckStatusResponse extends S.Class<GetHealthCheckStatusResponse>("GetHealthCheckStatusResponse")({HealthCheckObservations: HealthCheckObservations}) {}
export class GetQueryLoggingConfigResponse extends S.Class<GetQueryLoggingConfigResponse>("GetQueryLoggingConfigResponse")({QueryLoggingConfig: QueryLoggingConfig}) {}
export class GetReusableDelegationSetResponse extends S.Class<GetReusableDelegationSetResponse>("GetReusableDelegationSetResponse")({DelegationSet: DelegationSet}) {}
export class GetTrafficPolicyResponse extends S.Class<GetTrafficPolicyResponse>("GetTrafficPolicyResponse")({TrafficPolicy: TrafficPolicy}) {}
export class GetTrafficPolicyInstanceResponse extends S.Class<GetTrafficPolicyInstanceResponse>("GetTrafficPolicyInstanceResponse")({TrafficPolicyInstance: TrafficPolicyInstance}) {}
export class ListGeoLocationsResponse extends S.Class<ListGeoLocationsResponse>("ListGeoLocationsResponse")({GeoLocationDetailsList: GeoLocationDetailsList, IsTruncated: S.Boolean, NextContinentCode: S.optional(S.String), NextCountryCode: S.optional(S.String), NextSubdivisionCode: S.optional(S.String), MaxItems: S.Number}) {}
export class ListHealthChecksResponse extends S.Class<ListHealthChecksResponse>("ListHealthChecksResponse")({HealthChecks: HealthChecks, Marker: S.String, IsTruncated: S.Boolean, NextMarker: S.optional(S.String), MaxItems: S.Number}) {}
export class ListHostedZonesResponse extends S.Class<ListHostedZonesResponse>("ListHostedZonesResponse")({HostedZones: HostedZones, Marker: S.String, IsTruncated: S.Boolean, NextMarker: S.optional(S.String), MaxItems: S.Number}) {}
export class ListHostedZonesByNameResponse extends S.Class<ListHostedZonesByNameResponse>("ListHostedZonesByNameResponse")({HostedZones: HostedZones, DNSName: S.optional(S.String), HostedZoneId: S.optional(S.String), IsTruncated: S.Boolean, NextDNSName: S.optional(S.String), NextHostedZoneId: S.optional(S.String), MaxItems: S.Number}) {}
export class ListQueryLoggingConfigsResponse extends S.Class<ListQueryLoggingConfigsResponse>("ListQueryLoggingConfigsResponse")({QueryLoggingConfigs: QueryLoggingConfigs, NextToken: S.optional(S.String)}) {}
export class ListReusableDelegationSetsResponse extends S.Class<ListReusableDelegationSetsResponse>("ListReusableDelegationSetsResponse")({DelegationSets: DelegationSets, Marker: S.String, IsTruncated: S.Boolean, NextMarker: S.optional(S.String), MaxItems: S.Number}) {}
export class ListTagsForResourcesResponse extends S.Class<ListTagsForResourcesResponse>("ListTagsForResourcesResponse")({ResourceTagSets: ResourceTagSetList}) {}
export class ListTrafficPolicyInstancesResponse extends S.Class<ListTrafficPolicyInstancesResponse>("ListTrafficPolicyInstancesResponse")({TrafficPolicyInstances: TrafficPolicyInstances, HostedZoneIdMarker: S.optional(S.String), TrafficPolicyInstanceNameMarker: S.optional(S.String), TrafficPolicyInstanceTypeMarker: S.optional(S.String), IsTruncated: S.Boolean, MaxItems: S.Number}) {}
export class ListTrafficPolicyInstancesByHostedZoneResponse extends S.Class<ListTrafficPolicyInstancesByHostedZoneResponse>("ListTrafficPolicyInstancesByHostedZoneResponse")({TrafficPolicyInstances: TrafficPolicyInstances, TrafficPolicyInstanceNameMarker: S.optional(S.String), TrafficPolicyInstanceTypeMarker: S.optional(S.String), IsTruncated: S.Boolean, MaxItems: S.Number}) {}
export class ListTrafficPolicyInstancesByPolicyResponse extends S.Class<ListTrafficPolicyInstancesByPolicyResponse>("ListTrafficPolicyInstancesByPolicyResponse")({TrafficPolicyInstances: TrafficPolicyInstances, HostedZoneIdMarker: S.optional(S.String), TrafficPolicyInstanceNameMarker: S.optional(S.String), TrafficPolicyInstanceTypeMarker: S.optional(S.String), IsTruncated: S.Boolean, MaxItems: S.Number}) {}
export class ListTrafficPolicyVersionsResponse extends S.Class<ListTrafficPolicyVersionsResponse>("ListTrafficPolicyVersionsResponse")({TrafficPolicies: TrafficPolicies, IsTruncated: S.Boolean, TrafficPolicyVersionMarker: S.String, MaxItems: S.Number}) {}
export class ListVPCAssociationAuthorizationsResponse extends S.Class<ListVPCAssociationAuthorizationsResponse>("ListVPCAssociationAuthorizationsResponse")({HostedZoneId: S.String, NextToken: S.optional(S.String), VPCs: VPCs}) {}
export class TestDNSAnswerResponse extends S.Class<TestDNSAnswerResponse>("TestDNSAnswerResponse")({Nameserver: S.String, RecordName: S.String, RecordType: S.String, RecordData: RecordData, ResponseCode: S.String, Protocol: S.String}) {}
export class UpdateHealthCheckRequest extends S.Class<UpdateHealthCheckRequest>("UpdateHealthCheckRequest")({HealthCheckId: S.String, HealthCheckVersion: S.optional(S.Number), IPAddress: S.optional(S.String), Port: S.optional(S.Number), ResourcePath: S.optional(S.String), FullyQualifiedDomainName: S.optional(S.String), SearchString: S.optional(S.String), FailureThreshold: S.optional(S.Number), Inverted: S.optional(S.Boolean), Disabled: S.optional(S.Boolean), HealthThreshold: S.optional(S.Number), ChildHealthChecks: S.optional(ChildHealthCheckList), EnableSNI: S.optional(S.Boolean), Regions: S.optional(HealthCheckRegionList), AlarmIdentifier: S.optional(AlarmIdentifier), InsufficientDataHealthStatus: S.optional(S.String), ResetElements: S.optional(ResettableElementNameList)}) {}
export class UpdateHostedZoneCommentResponse extends S.Class<UpdateHostedZoneCommentResponse>("UpdateHostedZoneCommentResponse")({HostedZone: HostedZone}) {}
export class UpdateTrafficPolicyCommentResponse extends S.Class<UpdateTrafficPolicyCommentResponse>("UpdateTrafficPolicyCommentResponse")({TrafficPolicy: TrafficPolicy}) {}
export class UpdateTrafficPolicyInstanceResponse extends S.Class<UpdateTrafficPolicyInstanceResponse>("UpdateTrafficPolicyInstanceResponse")({TrafficPolicyInstance: TrafficPolicyInstance}) {}
export class GeoLocation extends S.Class<GeoLocation>("GeoLocation")({ContinentCode: S.optional(S.String), CountryCode: S.optional(S.String), SubdivisionCode: S.optional(S.String)}) {}
export class ResourceRecord extends S.Class<ResourceRecord>("ResourceRecord")({Value: S.String}) {}
export const ResourceRecords = S.Array(ResourceRecord);
export class AliasTarget extends S.Class<AliasTarget>("AliasTarget")({HostedZoneId: S.String, DNSName: S.String, EvaluateTargetHealth: S.Boolean}) {}
export class CidrRoutingConfig extends S.Class<CidrRoutingConfig>("CidrRoutingConfig")({CollectionId: S.String, LocationName: S.String}) {}
export class Coordinates extends S.Class<Coordinates>("Coordinates")({Latitude: S.String, Longitude: S.String}) {}
export class GeoProximityLocation extends S.Class<GeoProximityLocation>("GeoProximityLocation")({AWSRegion: S.optional(S.String), LocalZoneGroup: S.optional(S.String), Coordinates: S.optional(Coordinates), Bias: S.optional(S.Number)}) {}
export class ResourceRecordSet extends S.Class<ResourceRecordSet>("ResourceRecordSet")({Name: S.String, Type: S.String, SetIdentifier: S.optional(S.String), Weight: S.optional(S.Number), Region: S.optional(S.String), GeoLocation: S.optional(GeoLocation), Failover: S.optional(S.String), MultiValueAnswer: S.optional(S.Boolean), TTL: S.optional(S.Number), ResourceRecords: S.optional(ResourceRecords), AliasTarget: S.optional(AliasTarget), HealthCheckId: S.optional(S.String), TrafficPolicyInstanceId: S.optional(S.String), CidrRoutingConfig: S.optional(CidrRoutingConfig), GeoProximityLocation: S.optional(GeoProximityLocation)}) {}
export class Change extends S.Class<Change>("Change")({Action: S.String, ResourceRecordSet: ResourceRecordSet}) {}
export const Changes = S.Array(Change);
export class ChangeBatch extends S.Class<ChangeBatch>("ChangeBatch")({Comment: S.optional(S.String), Changes: Changes}) {}
export class CidrCollection extends S.Class<CidrCollection>("CidrCollection")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Version: S.optional(S.Number)}) {}
export class AccountLimit extends S.Class<AccountLimit>("AccountLimit")({Type: S.String, Value: S.Number}) {}
export class DNSSECStatus extends S.Class<DNSSECStatus>("DNSSECStatus")({ServeSignature: S.optional(S.String), StatusMessage: S.optional(S.String)}) {}
export class HostedZoneLimit extends S.Class<HostedZoneLimit>("HostedZoneLimit")({Type: S.String, Value: S.Number}) {}
export class ReusableDelegationSetLimit extends S.Class<ReusableDelegationSetLimit>("ReusableDelegationSetLimit")({Type: S.String, Value: S.Number}) {}
export class CidrBlockSummary extends S.Class<CidrBlockSummary>("CidrBlockSummary")({CidrBlock: S.optional(S.String), LocationName: S.optional(S.String)}) {}
export const CidrBlockSummaries = S.Array(CidrBlockSummary);
export class CollectionSummary extends S.Class<CollectionSummary>("CollectionSummary")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Version: S.optional(S.Number)}) {}
export const CollectionSummaries = S.Array(CollectionSummary);
export class LocationSummary extends S.Class<LocationSummary>("LocationSummary")({LocationName: S.optional(S.String)}) {}
export const LocationSummaries = S.Array(LocationSummary);
export class TrafficPolicySummary extends S.Class<TrafficPolicySummary>("TrafficPolicySummary")({Id: S.String, Name: S.String, Type: S.String, LatestVersion: S.Number, TrafficPolicyCount: S.Number}) {}
export const TrafficPolicySummaries = S.Array(TrafficPolicySummary);
export class ActivateKeySigningKeyResponse extends S.Class<ActivateKeySigningKeyResponse>("ActivateKeySigningKeyResponse")({ChangeInfo: ChangeInfo}) {}
export class AssociateVPCWithHostedZoneResponse extends S.Class<AssociateVPCWithHostedZoneResponse>("AssociateVPCWithHostedZoneResponse")({ChangeInfo: ChangeInfo}) {}
export class ChangeCidrCollectionResponse extends S.Class<ChangeCidrCollectionResponse>("ChangeCidrCollectionResponse")({Id: S.String}) {}
export class ChangeResourceRecordSetsRequest extends S.Class<ChangeResourceRecordSetsRequest>("ChangeResourceRecordSetsRequest")({HostedZoneId: S.String, ChangeBatch: ChangeBatch}) {}
export class CreateCidrCollectionResponse extends S.Class<CreateCidrCollectionResponse>("CreateCidrCollectionResponse")({Collection: S.optional(CidrCollection), Location: S.optional(H.Header("Location"))}) {}
export class CreateHealthCheckResponse extends S.Class<CreateHealthCheckResponse>("CreateHealthCheckResponse")({HealthCheck: HealthCheck, Location: H.Header("Location")}) {}
export class CreateHostedZoneResponse extends S.Class<CreateHostedZoneResponse>("CreateHostedZoneResponse")({HostedZone: HostedZone, ChangeInfo: ChangeInfo, DelegationSet: DelegationSet, VPC: S.optional(VPC), Location: H.Header("Location")}) {}
export class CreateKeySigningKeyResponse extends S.Class<CreateKeySigningKeyResponse>("CreateKeySigningKeyResponse")({ChangeInfo: ChangeInfo, KeySigningKey: KeySigningKey, Location: H.Header("Location")}) {}
export class CreateQueryLoggingConfigResponse extends S.Class<CreateQueryLoggingConfigResponse>("CreateQueryLoggingConfigResponse")({QueryLoggingConfig: QueryLoggingConfig, Location: H.Header("Location")}) {}
export class CreateReusableDelegationSetResponse extends S.Class<CreateReusableDelegationSetResponse>("CreateReusableDelegationSetResponse")({DelegationSet: DelegationSet, Location: H.Header("Location")}) {}
export class CreateTrafficPolicyResponse extends S.Class<CreateTrafficPolicyResponse>("CreateTrafficPolicyResponse")({TrafficPolicy: TrafficPolicy, Location: H.Header("Location")}) {}
export class CreateTrafficPolicyInstanceResponse extends S.Class<CreateTrafficPolicyInstanceResponse>("CreateTrafficPolicyInstanceResponse")({TrafficPolicyInstance: TrafficPolicyInstance, Location: H.Header("Location")}) {}
export class GetAccountLimitResponse extends S.Class<GetAccountLimitResponse>("GetAccountLimitResponse")({Limit: AccountLimit, Count: S.Number}) {}
export class GetDNSSECResponse extends S.Class<GetDNSSECResponse>("GetDNSSECResponse")({Status: DNSSECStatus, KeySigningKeys: KeySigningKeys}) {}
export class GetGeoLocationResponse extends S.Class<GetGeoLocationResponse>("GetGeoLocationResponse")({GeoLocationDetails: GeoLocationDetails}) {}
export class GetHostedZoneLimitResponse extends S.Class<GetHostedZoneLimitResponse>("GetHostedZoneLimitResponse")({Limit: HostedZoneLimit, Count: S.Number}) {}
export class GetReusableDelegationSetLimitResponse extends S.Class<GetReusableDelegationSetLimitResponse>("GetReusableDelegationSetLimitResponse")({Limit: ReusableDelegationSetLimit, Count: S.Number}) {}
export class ListCidrBlocksResponse extends S.Class<ListCidrBlocksResponse>("ListCidrBlocksResponse")({NextToken: S.optional(S.String), CidrBlocks: S.optional(CidrBlockSummaries)}) {}
export class ListCidrCollectionsResponse extends S.Class<ListCidrCollectionsResponse>("ListCidrCollectionsResponse")({NextToken: S.optional(S.String), CidrCollections: S.optional(CollectionSummaries)}) {}
export class ListCidrLocationsResponse extends S.Class<ListCidrLocationsResponse>("ListCidrLocationsResponse")({NextToken: S.optional(S.String), CidrLocations: S.optional(LocationSummaries)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({ResourceTagSet: ResourceTagSet}) {}
export class ListTrafficPoliciesResponse extends S.Class<ListTrafficPoliciesResponse>("ListTrafficPoliciesResponse")({TrafficPolicySummaries: TrafficPolicySummaries, IsTruncated: S.Boolean, TrafficPolicyIdMarker: S.String, MaxItems: S.Number}) {}
export class UpdateHealthCheckResponse extends S.Class<UpdateHealthCheckResponse>("UpdateHealthCheckResponse")({HealthCheck: HealthCheck}) {}
export class HostedZoneOwner extends S.Class<HostedZoneOwner>("HostedZoneOwner")({OwningAccount: S.optional(S.String), OwningService: S.optional(S.String)}) {}
export class HostedZoneSummary extends S.Class<HostedZoneSummary>("HostedZoneSummary")({HostedZoneId: S.String, Name: S.String, Owner: HostedZoneOwner}) {}
export const HostedZoneSummaries = S.Array(HostedZoneSummary);
export class ChangeResourceRecordSetsResponse extends S.Class<ChangeResourceRecordSetsResponse>("ChangeResourceRecordSetsResponse")({ChangeInfo: ChangeInfo}) {}
export class GetHealthCheckLastFailureReasonResponse extends S.Class<GetHealthCheckLastFailureReasonResponse>("GetHealthCheckLastFailureReasonResponse")({HealthCheckObservations: HealthCheckObservations}) {}
export class ListHostedZonesByVPCResponse extends S.Class<ListHostedZonesByVPCResponse>("ListHostedZonesByVPCResponse")({HostedZoneSummaries: HostedZoneSummaries, MaxItems: S.Number, NextToken: S.optional(S.String)}) {}
export const ErrorMessages = S.Array(S.String);
export const ResourceRecordSets = S.Array(ResourceRecordSet);
export class GetHealthCheckResponse extends S.Class<GetHealthCheckResponse>("GetHealthCheckResponse")({HealthCheck: HealthCheck}) {}
export class GetHostedZoneResponse extends S.Class<GetHostedZoneResponse>("GetHostedZoneResponse")({HostedZone: HostedZone, DelegationSet: S.optional(DelegationSet), VPCs: S.optional(VPCs)}) {}
export class ListResourceRecordSetsResponse extends S.Class<ListResourceRecordSetsResponse>("ListResourceRecordSetsResponse")({ResourceRecordSets: ResourceRecordSets, IsTruncated: S.Boolean, NextRecordName: S.optional(S.String), NextRecordType: S.optional(S.String), NextRecordIdentifier: S.optional(S.String), MaxItems: S.Number}) {}

//# Errors
export class ConcurrentModification extends S.TaggedError<ConcurrentModification>()("ConcurrentModification", {}) {};
export class InvalidInput extends S.TaggedError<InvalidInput>()("InvalidInput", {}) {};
export class InvalidVPCId extends S.TaggedError<InvalidVPCId>()("InvalidVPCId", {}) {};
export class CidrCollectionInUseException extends S.TaggedError<CidrCollectionInUseException>()("CidrCollectionInUseException", {Message: S.optional(S.String)}) {};
export class HealthCheckInUse extends S.TaggedError<HealthCheckInUse>()("HealthCheckInUse", {message: S.optional(S.String)}) {};
export class NoSuchHealthCheck extends S.TaggedError<NoSuchHealthCheck>()("NoSuchHealthCheck", {}) {};
export class InvalidKeySigningKeyStatus extends S.TaggedError<InvalidKeySigningKeyStatus>()("InvalidKeySigningKeyStatus", {}) {};
export class DelegationSetInUse extends S.TaggedError<DelegationSetInUse>()("DelegationSetInUse", {message: S.optional(S.String)}) {};
export class NoSuchTrafficPolicyInstance extends S.TaggedError<NoSuchTrafficPolicyInstance>()("NoSuchTrafficPolicyInstance", {message: S.optional(S.String)}) {};
export class NoSuchHostedZone extends S.TaggedError<NoSuchHostedZone>()("NoSuchHostedZone", {}) {};
export class DNSSECNotFound extends S.TaggedError<DNSSECNotFound>()("DNSSECNotFound", {}) {};
export class NoSuchQueryLoggingConfig extends S.TaggedError<NoSuchQueryLoggingConfig>()("NoSuchQueryLoggingConfig", {}) {};
export class DelegationSetNotReusable extends S.TaggedError<DelegationSetNotReusable>()("DelegationSetNotReusable", {}) {};
export class NoSuchTrafficPolicy extends S.TaggedError<NoSuchTrafficPolicy>()("NoSuchTrafficPolicy", {}) {};
export class NoSuchDelegationSet extends S.TaggedError<NoSuchDelegationSet>()("NoSuchDelegationSet", {}) {};
export class PriorRequestNotComplete extends S.TaggedError<PriorRequestNotComplete>()("PriorRequestNotComplete", {}) {};
export class InvalidPaginationToken extends S.TaggedError<InvalidPaginationToken>()("InvalidPaginationToken", {}) {};
export class LimitsExceeded extends S.TaggedError<LimitsExceeded>()("LimitsExceeded", {message: S.optional(S.String)}) {};
export class InvalidKMSArn extends S.TaggedError<InvalidKMSArn>()("InvalidKMSArn", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ConflictingDomainExists extends S.TaggedError<ConflictingDomainExists>()("ConflictingDomainExists", {}) {};
export class InvalidTrafficPolicyDocument extends S.TaggedError<InvalidTrafficPolicyDocument>()("InvalidTrafficPolicyDocument", {}) {};
export class InvalidSigningStatus extends S.TaggedError<InvalidSigningStatus>()("InvalidSigningStatus", {}) {};
export class NoSuchCidrCollectionException extends S.TaggedError<NoSuchCidrCollectionException>()("NoSuchCidrCollectionException", {Message: S.optional(S.String)}) {};
export class HostedZoneNotEmpty extends S.TaggedError<HostedZoneNotEmpty>()("HostedZoneNotEmpty", {message: S.optional(S.String)}) {};
export class InvalidDomainName extends S.TaggedError<InvalidDomainName>()("InvalidDomainName", {}) {};
export class VPCAssociationAuthorizationNotFound extends S.TaggedError<VPCAssociationAuthorizationNotFound>()("VPCAssociationAuthorizationNotFound", {message: S.optional(S.String)}) {};
export class InvalidArgument extends S.TaggedError<InvalidArgument>()("InvalidArgument", {}) {};
export class KeySigningKeyInParentDSRecord extends S.TaggedError<KeySigningKeyInParentDSRecord>()("KeySigningKeyInParentDSRecord", {}) {};
export class LastVPCAssociation extends S.TaggedError<LastVPCAssociation>()("LastVPCAssociation", {message: S.optional(S.String)}) {};
export class HostedZonePartiallyDelegated extends S.TaggedError<HostedZonePartiallyDelegated>()("HostedZonePartiallyDelegated", {message: S.optional(S.String)}) {};
export class NoSuchChange extends S.TaggedError<NoSuchChange>()("NoSuchChange", {message: S.optional(S.String)}) {};
export class IncompatibleVersion extends S.TaggedError<IncompatibleVersion>()("IncompatibleVersion", {message: S.optional(S.String)}) {};
export class ConflictingTypes extends S.TaggedError<ConflictingTypes>()("ConflictingTypes", {message: S.optional(S.String)}) {};
export class NoSuchKeySigningKey extends S.TaggedError<NoSuchKeySigningKey>()("NoSuchKeySigningKey", {}) {};
export class CidrBlockInUseException extends S.TaggedError<CidrBlockInUseException>()("CidrBlockInUseException", {Message: S.optional(S.String)}) {};
export class CidrCollectionAlreadyExistsException extends S.TaggedError<CidrCollectionAlreadyExistsException>()("CidrCollectionAlreadyExistsException", {Message: S.optional(S.String)}) {};
export class HealthCheckAlreadyExists extends S.TaggedError<HealthCheckAlreadyExists>()("HealthCheckAlreadyExists", {message: S.optional(S.String)}) {};
export class DelegationSetNotAvailable extends S.TaggedError<DelegationSetNotAvailable>()("DelegationSetNotAvailable", {message: S.optional(S.String)}) {};
export class InsufficientCloudWatchLogsResourcePolicy extends S.TaggedError<InsufficientCloudWatchLogsResourcePolicy>()("InsufficientCloudWatchLogsResourcePolicy", {message: S.optional(S.String)}) {};
export class DelegationSetAlreadyCreated extends S.TaggedError<DelegationSetAlreadyCreated>()("DelegationSetAlreadyCreated", {message: S.optional(S.String)}) {};
export class TooManyTrafficPolicies extends S.TaggedError<TooManyTrafficPolicies>()("TooManyTrafficPolicies", {message: S.optional(S.String)}) {};
export class TooManyTrafficPolicyInstances extends S.TaggedError<TooManyTrafficPolicyInstances>()("TooManyTrafficPolicyInstances", {message: S.optional(S.String)}) {};
export class TooManyTrafficPolicyVersionsForCurrentPolicy extends S.TaggedError<TooManyTrafficPolicyVersionsForCurrentPolicy>()("TooManyTrafficPolicyVersionsForCurrentPolicy", {message: S.optional(S.String)}) {};
export class TooManyVPCAssociationAuthorizations extends S.TaggedError<TooManyVPCAssociationAuthorizations>()("TooManyVPCAssociationAuthorizations", {message: S.optional(S.String)}) {};
export class TrafficPolicyInUse extends S.TaggedError<TrafficPolicyInUse>()("TrafficPolicyInUse", {message: S.optional(S.String)}) {};
export class VPCAssociationNotFound extends S.TaggedError<VPCAssociationNotFound>()("VPCAssociationNotFound", {message: S.optional(S.String)}) {};
export class KeySigningKeyWithActiveStatusNotFound extends S.TaggedError<KeySigningKeyWithActiveStatusNotFound>()("KeySigningKeyWithActiveStatusNotFound", {message: S.optional(S.String)}) {};
export class NoSuchGeoLocation extends S.TaggedError<NoSuchGeoLocation>()("NoSuchGeoLocation", {message: S.optional(S.String)}) {};
export class HostedZoneNotPrivate extends S.TaggedError<HostedZoneNotPrivate>()("HostedZoneNotPrivate", {message: S.optional(S.String)}) {};
export class NoSuchCidrLocationException extends S.TaggedError<NoSuchCidrLocationException>()("NoSuchCidrLocationException", {Message: S.optional(S.String)}) {};
export class HealthCheckVersionMismatch extends S.TaggedError<HealthCheckVersionMismatch>()("HealthCheckVersionMismatch", {message: S.optional(S.String)}) {};
export class NotAuthorizedException extends S.TaggedError<NotAuthorizedException>()("NotAuthorizedException", {message: S.optional(S.String)}) {};
export class CidrCollectionVersionMismatchException extends S.TaggedError<CidrCollectionVersionMismatchException>()("CidrCollectionVersionMismatchException", {Message: S.optional(S.String)}) {};
export class InvalidChangeBatch extends S.TaggedError<InvalidChangeBatch>()("InvalidChangeBatch", {messages: S.optional(ErrorMessages), message: S.optional(S.String)}) {};
export class TooManyHealthChecks extends S.TaggedError<TooManyHealthChecks>()("TooManyHealthChecks", {message: S.optional(S.String)}) {};
export class HostedZoneAlreadyExists extends S.TaggedError<HostedZoneAlreadyExists>()("HostedZoneAlreadyExists", {message: S.optional(S.String)}) {};
export class InvalidKeySigningKeyName extends S.TaggedError<InvalidKeySigningKeyName>()("InvalidKeySigningKeyName", {message: S.optional(S.String)}) {};
export class NoSuchCloudWatchLogsLogGroup extends S.TaggedError<NoSuchCloudWatchLogsLogGroup>()("NoSuchCloudWatchLogsLogGroup", {message: S.optional(S.String)}) {};
export class DelegationSetAlreadyReusable extends S.TaggedError<DelegationSetAlreadyReusable>()("DelegationSetAlreadyReusable", {message: S.optional(S.String)}) {};
export class TrafficPolicyAlreadyExists extends S.TaggedError<TrafficPolicyAlreadyExists>()("TrafficPolicyAlreadyExists", {message: S.optional(S.String)}) {};
export class TrafficPolicyInstanceAlreadyExists extends S.TaggedError<TrafficPolicyInstanceAlreadyExists>()("TrafficPolicyInstanceAlreadyExists", {message: S.optional(S.String)}) {};
export class KeySigningKeyInUse extends S.TaggedError<KeySigningKeyInUse>()("KeySigningKeyInUse", {message: S.optional(S.String)}) {};
export class PublicZoneVPCAssociation extends S.TaggedError<PublicZoneVPCAssociation>()("PublicZoneVPCAssociation", {message: S.optional(S.String)}) {};
export class TooManyHostedZones extends S.TaggedError<TooManyHostedZones>()("TooManyHostedZones", {message: S.optional(S.String)}) {};
export class KeySigningKeyAlreadyExists extends S.TaggedError<KeySigningKeyAlreadyExists>()("KeySigningKeyAlreadyExists", {message: S.optional(S.String)}) {};
export class QueryLoggingConfigAlreadyExists extends S.TaggedError<QueryLoggingConfigAlreadyExists>()("QueryLoggingConfigAlreadyExists", {message: S.optional(S.String)}) {};
export class HostedZoneNotFound extends S.TaggedError<HostedZoneNotFound>()("HostedZoneNotFound", {message: S.optional(S.String)}) {};
export class TooManyKeySigningKeys extends S.TaggedError<TooManyKeySigningKeys>()("TooManyKeySigningKeys", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Route 53 does not perform authorization for this API because it retrieves information
 * that is already available to the public.
 * 
 * 
 * 
 * 
 * 
 * `GetCheckerIpRanges` still works, but we recommend that you download
 * ip-ranges.json, which includes IP address ranges for all Amazon Web Services
 * services. For more information, see IP Address Ranges
 * of Amazon Route 53 Servers in the Amazon Route 53 Developer
 * Guide.
 */export const getCheckerIpRanges = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/checkeripranges", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetCheckerIpRanges" }, GetCheckerIpRangesRequest, GetCheckerIpRangesResponse, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves the number of health checks that are associated with the current Amazon Web Services account.
 */export const getHealthCheckCount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/healthcheckcount", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetHealthCheckCount" }, GetHealthCheckCountRequest, GetHealthCheckCountResponse, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves the number of hosted zones that are associated with the current Amazon Web Services account.
 */export const getHostedZoneCount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzonecount", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetHostedZoneCount" }, GetHostedZoneCountRequest, GetHostedZoneCountResponse, [InvalidInput]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets the number of traffic policy instances that are associated with the current
 * Amazon Web Services account.
 */export const getTrafficPolicyInstanceCount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicyinstancecount", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetTrafficPolicyInstanceCount" }, GetTrafficPolicyInstanceCountRequest, GetTrafficPolicyInstanceCountResponse, []), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a health check.
 * 
 * 
 * 
 * 
 * Amazon Route 53 does not prevent you from deleting a health check even if the
 * health check is associated with one or more resource record sets. If you delete a
 * health check and you don't update the associated resource record sets, the future
 * status of the health check can't be predicted and may change. This will affect the
 * routing of DNS queries for your DNS failover configuration. For more information,
 * see Replacing and Deleting Health Checks in the Amazon Route 53
 * Developer Guide.
 * 
 * 
 * 
 * 
 * If you're using Cloud Map and you configured Cloud Map to create a Route 53
 * health check when you register an instance, you can't use the Route 53
 * `DeleteHealthCheck` command to delete the health check. The health check
 * is deleted automatically when you deregister the instance; there can be a delay of
 * several hours before the health check is deleted from Route 53.
 */export const deleteHealthCheck = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/healthcheck/{HealthCheckId}", method: "DELETE", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeleteHealthCheck" }, DeleteHealthCheckRequest, DeleteHealthCheckResponse, [HealthCheckInUse, InvalidInput, NoSuchHealthCheck]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets status of a specified health check.
 * 
 * 
 * 
 * 
 * This API is intended for use during development to diagnose behavior. It doesn’t
 * support production use-cases with high query rates that require immediate and
 * actionable responses.
 */export const getHealthCheckStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/healthcheck/{HealthCheckId}/status", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetHealthCheckStatus" }, GetHealthCheckStatusRequest, GetHealthCheckStatusResponse, [InvalidInput, NoSuchHealthCheck]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a specified configuration for DNS query logging.
 * 
 * 
 * For more information about DNS query logs, see CreateQueryLoggingConfig and Logging DNS
 * Queries.
 */export const getQueryLoggingConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/queryloggingconfig/{Id}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetQueryLoggingConfig" }, GetQueryLoggingConfigRequest, GetQueryLoggingConfigResponse, [InvalidInput, NoSuchQueryLoggingConfig]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a specific traffic policy version.
 * 
 * 
 * For information about how of deleting a traffic policy affects the response from
 * `GetTrafficPolicy`, see DeleteTrafficPolicy.
 */export const getTrafficPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicy/{Id}/{Version}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetTrafficPolicy" }, GetTrafficPolicyRequest, GetTrafficPolicyResponse, [InvalidInput, NoSuchTrafficPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a specified traffic policy instance.
 * 
 * 
 * 
 * 
 * 
 * Use `GetTrafficPolicyInstance` with the `id` of new traffic policy instance to confirm that the
 * `CreateTrafficPolicyInstance` or an `UpdateTrafficPolicyInstance` request completed successfully.
 * For more information, see the `State` response
 * element.
 * 
 * 
 * 
 * 
 * 
 * 
 * In the Route 53 console, traffic policy instances are known as policy
 * records.
 */export const getTrafficPolicyInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicyinstance/{Id}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetTrafficPolicyInstance" }, GetTrafficPolicyInstanceRequest, GetTrafficPolicyInstanceResponse, [InvalidInput, NoSuchTrafficPolicyInstance]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves a list of supported geographic locations.
 * 
 * 
 * Countries are listed first, and continents are listed last. If Amazon Route 53
 * supports subdivisions for a country (for example, states or provinces), the subdivisions
 * for that country are listed in alphabetical order immediately after the corresponding
 * country.
 * 
 * 
 * Route 53 does not perform authorization for this API because it retrieves information
 * that is already available to the public.
 * 
 * 
 * For a list of supported geolocation codes, see the GeoLocation data
 * type.
 */export const listGeoLocations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/geolocations", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListGeoLocations" }, ListGeoLocationsRequest, ListGeoLocationsResponse, [InvalidInput]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves a list of the public and private hosted zones that are associated with the
 * current Amazon Web Services account. The response includes a `HostedZones`
 * child element for each hosted zone.
 * 
 * 
 * Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of
 * hosted zones, you can use the `maxitems` parameter to list them in groups of
 * up to 100.
 */export const listHostedZones = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListHostedZones" }, ListHostedZonesRequest, ListHostedZonesResponse, [DelegationSetNotReusable, InvalidInput, NoSuchDelegationSet]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves a list of the reusable delegation sets that are associated with the current
 * Amazon Web Services account.
 */export const listReusableDelegationSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/delegationset", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListReusableDelegationSets" }, ListReusableDelegationSetsRequest, ListReusableDelegationSetsResponse, [InvalidInput]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about the traffic policy instances that you created by using the
 * current Amazon Web Services account.
 * 
 * 
 * 
 * 
 * After you submit an `UpdateTrafficPolicyInstance` request, there's a
 * brief delay while Amazon Route 53 creates the resource record sets that are
 * specified in the traffic policy definition. For more information, see the
 * `State` response element.
 * 
 * 
 * 
 * 
 * Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic
 * policy instances, you can use the `MaxItems` parameter to list them in groups
 * of up to 100.
 */export const listTrafficPolicyInstances = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicyinstances", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListTrafficPolicyInstances" }, ListTrafficPolicyInstancesRequest, ListTrafficPolicyInstancesResponse, [InvalidInput, NoSuchTrafficPolicyInstance]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about the traffic policy instances that you created in a specified
 * hosted zone.
 * 
 * 
 * 
 * 
 * After you submit a `CreateTrafficPolicyInstance` or an
 * `UpdateTrafficPolicyInstance` request, there's a brief delay while
 * Amazon Route 53 creates the resource record sets that are specified in the traffic
 * policy definition. For more information, see the `State` response
 * element.
 * 
 * 
 * 
 * 
 * Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic
 * policy instances, you can use the `MaxItems` parameter to list them in groups
 * of up to 100.
 */export const listTrafficPolicyInstancesByHostedZone = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicyinstances/hostedzone", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListTrafficPolicyInstancesByHostedZone" }, ListTrafficPolicyInstancesByHostedZoneRequest, ListTrafficPolicyInstancesByHostedZoneResponse, [InvalidInput, NoSuchHostedZone, NoSuchTrafficPolicyInstance]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about the traffic policy instances that you created by using a
 * specify traffic policy version.
 * 
 * 
 * 
 * 
 * After you submit a `CreateTrafficPolicyInstance` or an
 * `UpdateTrafficPolicyInstance` request, there's a brief delay while
 * Amazon Route 53 creates the resource record sets that are specified in the traffic
 * policy definition. For more information, see the `State` response
 * element.
 * 
 * 
 * 
 * 
 * Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic
 * policy instances, you can use the `MaxItems` parameter to list them in groups
 * of up to 100.
 */export const listTrafficPolicyInstancesByPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicyinstances/trafficpolicy", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListTrafficPolicyInstancesByPolicy" }, ListTrafficPolicyInstancesByPolicyRequest, ListTrafficPolicyInstancesByPolicyResponse, [InvalidInput, NoSuchTrafficPolicy, NoSuchTrafficPolicyInstance]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about all of the versions for a specified traffic policy.
 * 
 * 
 * Traffic policy versions are listed in numerical order by
 * `VersionNumber`.
 */export const listTrafficPolicyVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicies/{Id}/versions", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListTrafficPolicyVersions" }, ListTrafficPolicyVersionsRequest, ListTrafficPolicyVersionsResponse, [InvalidInput, NoSuchTrafficPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets a list of the VPCs that were created by other accounts and that can be associated
 * with a specified hosted zone because you've submitted one or more
 * `CreateVPCAssociationAuthorization` requests.
 * 
 * 
 * The response includes a `VPCs` element with a `VPC` child
 * element for each VPC that can be associated with the hosted zone.
 */export const listVPCAssociationAuthorizations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListVPCAssociationAuthorizations" }, ListVPCAssociationAuthorizationsRequest, ListVPCAssociationAuthorizationsResponse, [InvalidInput, InvalidPaginationToken, NoSuchHostedZone]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets the value that Amazon Route 53 returns in response to a DNS request for a
 * specified record name and type. You can optionally specify the IP address of a DNS
 * resolver, an EDNS0 client subnet IP address, and a subnet mask.
 * 
 * 
 * This call only supports querying public hosted zones.
 * 
 * 
 * 
 * 
 * The `TestDnsAnswer ` returns information similar to what you would expect from the answer
 * section of the `dig` command. Therefore, if you query for the name
 * servers of a subdomain that point to the parent name servers, those will not be
 * returned.
 */export const testDNSAnswer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/testdnsanswer", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.TestDNSAnswer" }, TestDNSAnswerRequest, TestDNSAnswerResponse, [InvalidInput, NoSuchHostedZone]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates the comment for a specified hosted zone.
 */export const updateHostedZoneComment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{Id}", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.UpdateHostedZoneComment" }, UpdateHostedZoneCommentRequest, UpdateHostedZoneCommentResponse, [InvalidInput, NoSuchHostedZone, PriorRequestNotComplete]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates the features configuration for a hosted zone. This operation allows you to enable or disable specific features for your hosted zone, such as accelerated recovery.
 * 
 * 
 * Accelerated recovery enables you to update DNS records in your public hosted zone even when the us-east-1 region is unavailable.
 */export const updateHostedZoneFeatures = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/features", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.UpdateHostedZoneFeatures" }, UpdateHostedZoneFeaturesRequest, UpdateHostedZoneFeaturesResponse, [InvalidInput, LimitsExceeded, NoSuchHostedZone, PriorRequestNotComplete]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates the comment for a specified traffic policy version.
 */export const updateTrafficPolicyComment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicy/{Id}/{Version}", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.UpdateTrafficPolicyComment" }, UpdateTrafficPolicyCommentRequest, UpdateTrafficPolicyCommentResponse, [ConcurrentModification, InvalidInput, NoSuchTrafficPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Adds, edits, or deletes tags for a health check or a hosted zone.
 * 
 * 
 * For information about using tags for cost allocation, see Using Cost Allocation
 * Tags in the *Billing and Cost Management User Guide*.
 */export const changeTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/tags/{ResourceType}/{ResourceId}", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ChangeTagsForResource" }, ChangeTagsForResourceRequest, ChangeTagsForResourceResponse, [InvalidInput, NoSuchHealthCheck, NoSuchHostedZone, PriorRequestNotComplete, ThrottlingException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a CIDR collection in the current Amazon Web Services account. The collection
 * must be empty before it can be deleted.
 */export const deleteCidrCollection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/cidrcollection/{Id}", method: "DELETE", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeleteCidrCollection" }, DeleteCidrCollectionRequest, DeleteCidrCollectionResponse, [CidrCollectionInUseException, ConcurrentModification, InvalidInput, NoSuchCidrCollectionException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a hosted zone.
 * 
 * 
 * If the hosted zone was created by another service, such as Cloud Map, see
 * Deleting Public Hosted Zones That Were Created by Another Service in the
 * *Amazon Route 53 Developer Guide* for information
 * about how to delete it. (The process is the same for public and private hosted zones
 * that were created by another service.)
 * 
 * 
 * If you want to keep your domain registration but you want to stop routing internet
 * traffic to your website or web application, we recommend that you delete resource record
 * sets in the hosted zone instead of deleting the hosted zone.
 * 
 * 
 * 
 * 
 * If you delete a hosted zone, you can't undelete it. You must create a new hosted
 * zone and update the name servers for your domain registration, which can require up
 * to 48 hours to take effect. (If you delegated responsibility for a subdomain to a
 * hosted zone and you delete the child hosted zone, you must update the name servers
 * in the parent hosted zone.) In addition, if you delete a hosted zone, someone could
 * hijack the domain and route traffic to their own resources using your domain
 * name.
 * 
 * 
 * 
 * 
 * If you want to avoid the monthly charge for the hosted zone, you can transfer DNS
 * service for the domain to a free DNS service. When you transfer DNS service, you have to
 * update the name servers for the domain registration. If the domain is registered with
 * Route 53, see UpdateDomainNameservers for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is
 * registered with another registrar, use the method provided by the registrar to update
 * name servers for the domain registration. For more information, perform an internet
 * search on "free DNS service."
 * 
 * 
 * You can delete a hosted zone only if it contains only the default SOA and NS records
 * and has DNSSEC signing disabled. If the hosted zone contains other records or has DNSSEC
 * enabled, you must delete the records and disable DNSSEC before deletion. Attempting to
 * delete a hosted zone with additional records or DNSSEC enabled returns a
 * `HostedZoneNotEmpty` error. For information about deleting records, see
 * ChangeResourceRecordSets.
 * 
 * 
 * To verify that the hosted zone has been deleted, do one of the following:
 * 
 * 
 * 
 * - Use the `GetHostedZone` action to request information about the
 * hosted zone.
 * 
 * 
 * 
 * - Use the `ListHostedZones` action to get a list of the hosted zones
 * associated with the current Amazon Web Services account.
 */export const deleteHostedZone = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{Id}", method: "DELETE", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeleteHostedZone" }, DeleteHostedZoneRequest, DeleteHostedZoneResponse, [HostedZoneNotEmpty, InvalidDomainName, InvalidInput, NoSuchHostedZone, PriorRequestNotComplete]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a configuration for DNS query logging. If you delete a configuration, Amazon
 * Route 53 stops sending query logs to CloudWatch Logs. Route 53 doesn't delete any logs
 * that are already in CloudWatch Logs.
 * 
 * 
 * For more information about DNS query logs, see CreateQueryLoggingConfig.
 */export const deleteQueryLoggingConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/queryloggingconfig/{Id}", method: "DELETE", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeleteQueryLoggingConfig" }, DeleteQueryLoggingConfigRequest, DeleteQueryLoggingConfigResponse, [ConcurrentModification, InvalidInput, NoSuchQueryLoggingConfig]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a reusable delegation set.
 * 
 * 
 * 
 * 
 * You can delete a reusable delegation set only if it isn't associated with any
 * hosted zones.
 * 
 * 
 * 
 * 
 * To verify that the reusable delegation set is not associated with any hosted zones,
 * submit a GetReusableDelegationSet request and specify the ID of the reusable
 * delegation set that you want to delete.
 */export const deleteReusableDelegationSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/delegationset/{Id}", method: "DELETE", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeleteReusableDelegationSet" }, DeleteReusableDelegationSetRequest, DeleteReusableDelegationSetResponse, [DelegationSetInUse, DelegationSetNotReusable, InvalidInput, NoSuchDelegationSet]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a traffic policy instance and all of the resource record sets that Amazon
 * Route 53 created when you created the instance.
 * 
 * 
 * 
 * 
 * In the Route 53 console, traffic policy instances are known as policy
 * records.
 */export const deleteTrafficPolicyInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicyinstance/{Id}", method: "DELETE", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeleteTrafficPolicyInstance" }, DeleteTrafficPolicyInstanceRequest, DeleteTrafficPolicyInstanceResponse, [InvalidInput, NoSuchTrafficPolicyInstance, PriorRequestNotComplete]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Removes authorization to submit an `AssociateVPCWithHostedZone` request to
 * associate a specified VPC with a hosted zone that was created by a different account.
 * You must use the account that created the hosted zone to submit a
 * `DeleteVPCAssociationAuthorization` request.
 * 
 * 
 * 
 * 
 * Sending this request only prevents the Amazon Web Services account that created the
 * VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If
 * the VPC is already associated with the hosted zone,
 * `DeleteVPCAssociationAuthorization` won't disassociate the VPC from
 * the hosted zone. If you want to delete an existing association, use
 * `DisassociateVPCFromHostedZone`.
 */export const deleteVPCAssociationAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeleteVPCAssociationAuthorization" }, DeleteVPCAssociationAuthorizationRequest, DeleteVPCAssociationAuthorizationResponse, [ConcurrentModification, InvalidInput, InvalidVPCId, NoSuchHostedZone, VPCAssociationAuthorizationNotFound]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any
 * key-signing keys (KSKs) that are active in the hosted zone.
 */export const disableHostedZoneDNSSEC = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/disable-dnssec", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DisableHostedZoneDNSSEC" }, DisableHostedZoneDNSSECRequest, DisableHostedZoneDNSSECResponse, [ConcurrentModification, DNSSECNotFound, InvalidArgument, InvalidInput, InvalidKeySigningKeyStatus, InvalidKMSArn, KeySigningKeyInParentDSRecord, NoSuchHostedZone]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets the specified limit for the current account, for example, the maximum number of
 * health checks that you can create using the account.
 * 
 * 
 * For the default limit, see Limits in the
 * *Amazon Route 53 Developer Guide*. To request a higher limit,
 * open a case.
 * 
 * 
 * 
 * 
 * You can also view account limits in Amazon Web Services Trusted Advisor. Sign in to
 * the Amazon Web Services Management Console and open the Trusted Advisor console at https://console.aws.amazon.com/trustedadvisor/. Then choose **Service limits** in the navigation pane.
 */export const getAccountLimit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/accountlimit/{Type}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetAccountLimit" }, GetAccountLimitRequest, GetAccountLimitResponse, [InvalidInput]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns the current status of a change batch request. The status is one of the
 * following values:
 * 
 * 
 * 
 * - `PENDING` indicates that the changes in this request have not
 * propagated to all Amazon Route 53 DNS servers managing the hosted zone. This is the initial status of all
 * change batch requests.
 * 
 * 
 * 
 * - `INSYNC` indicates that the changes have propagated to all Route 53
 * DNS servers managing the hosted zone.
 */export const getChange = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/change/{Id}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetChange" }, GetChangeRequest, GetChangeResponse, [InvalidInput, NoSuchChange]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns information about DNSSEC for a specific hosted zone, including the key-signing
 * keys (KSKs) in the hosted zone.
 */export const getDNSSEC = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/dnssec", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetDNSSEC" }, GetDNSSECRequest, GetDNSSECResponse, [InvalidArgument, InvalidInput, NoSuchHostedZone]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves information about a specified reusable delegation set, including the four
 * name servers that are assigned to the delegation set.
 */export const getReusableDelegationSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/delegationset/{Id}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetReusableDelegationSet" }, GetReusableDelegationSetRequest, GetReusableDelegationSetResponse, [DelegationSetNotReusable, InvalidInput, NoSuchDelegationSet]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets the maximum number of hosted zones that you can associate with the specified
 * reusable delegation set.
 * 
 * 
 * For the default limit, see Limits in the
 * *Amazon Route 53 Developer Guide*. To request a higher limit,
 * open a case.
 */export const getReusableDelegationSetLimit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetReusableDelegationSetLimit" }, GetReusableDelegationSetLimitRequest, GetReusableDelegationSetLimitResponse, [InvalidInput, NoSuchDelegationSet]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns a paginated list of CIDR collections in the Amazon Web Services account
 * (metadata only).
 */export const listCidrCollections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/cidrcollection", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListCidrCollections" }, ListCidrCollectionsRequest, ListCidrCollectionsResponse, [InvalidInput]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns a paginated list of CIDR locations for the given collection (metadata only,
 * does not include CIDR blocks).
 */export const listCidrLocations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/cidrcollection/{CollectionId}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListCidrLocations" }, ListCidrLocationsRequest, ListCidrLocationsResponse, [InvalidInput, NoSuchCidrCollectionException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieve a list of the health checks that are associated with the current Amazon Web Services account.
 */export const listHealthChecks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/healthcheck", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListHealthChecks" }, ListHealthChecksRequest, ListHealthChecksResponse, [IncompatibleVersion, InvalidInput]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Retrieves a list of your hosted zones in lexicographic order. The response includes a
 * `HostedZones` child element for each hosted zone created by the current
 * Amazon Web Services account.
 * 
 * 
 * 
 * `ListHostedZonesByName` sorts hosted zones by name with the labels
 * reversed. For example:
 * 
 * 
 * 
 * `com.example.www.`
 * 
 * 
 * 
 * Note the trailing dot, which can change the sort order in some circumstances.
 * 
 * 
 * If the domain name includes escape characters or Punycode,
 * `ListHostedZonesByName` alphabetizes the domain name using the escaped or
 * Punycoded value, which is the format that Amazon Route 53 saves in its database. For
 * example, to create a hosted zone for exämple.com, you specify ex\344mple.com for
 * the domain name. `ListHostedZonesByName` alphabetizes it as:
 * 
 * 
 * 
 * `com.ex\344mple.`
 * 
 * 
 * 
 * The labels are reversed and alphabetized using the escaped value. For more information
 * about valid domain name formats, including internationalized domain names, see DNS
 * Domain Name Format in the Amazon Route 53 Developer
 * Guide.
 * 
 * 
 * Route 53 returns up to 100 items in each response. If you have a lot of hosted zones,
 * use the `MaxItems` parameter to list them in groups of up to 100. The
 * response includes values that help navigate from one group of `MaxItems`
 * hosted zones to the next:
 * 
 * 
 * 
 * - The `DNSName` and `HostedZoneId` elements in the
 * response contain the values, if any, specified for the `dnsname` and
 * `hostedzoneid` parameters in the request that produced the
 * current response.
 * 
 * 
 * 
 * - The `MaxItems` element in the response contains the value, if any,
 * that you specified for the `maxitems` parameter in the request that
 * produced the current response.
 * 
 * 
 * 
 * - If the value of `IsTruncated` in the response is true, there are
 * more hosted zones associated with the current Amazon Web Services account.
 * 
 * 
 * If `IsTruncated` is false, this response includes the last hosted
 * zone that is associated with the current account. The `NextDNSName`
 * element and `NextHostedZoneId` elements are omitted from the
 * response.
 * 
 * 
 * 
 * - The `NextDNSName` and `NextHostedZoneId` elements in the
 * response contain the domain name and the hosted zone ID of the next hosted zone
 * that is associated with the current Amazon Web Services account. If you want to
 * list more hosted zones, make another call to `ListHostedZonesByName`,
 * and specify the value of `NextDNSName` and
 * `NextHostedZoneId` in the `dnsname` and
 * `hostedzoneid` parameters, respectively.
 */export const listHostedZonesByName = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzonesbyname", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListHostedZonesByName" }, ListHostedZonesByNameRequest, ListHostedZonesByNameResponse, [InvalidDomainName, InvalidInput]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists the configurations for DNS query logging that are associated with the current
 * Amazon Web Services account or the configuration that is associated with a specified
 * hosted zone.
 * 
 * 
 * For more information about DNS query logs, see CreateQueryLoggingConfig. Additional information, including the format of
 * DNS query logs, appears in Logging DNS Queries in
 * the *Amazon Route 53 Developer Guide*.
 */export const listQueryLoggingConfigs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/queryloggingconfig", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListQueryLoggingConfigs" }, ListQueryLoggingConfigsRequest, ListQueryLoggingConfigsResponse, [InvalidInput, InvalidPaginationToken, NoSuchHostedZone]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists tags for one health check or hosted zone.
 * 
 * 
 * For information about using tags for cost allocation, see Using Cost Allocation
 * Tags in the *Billing and Cost Management User Guide*.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/tags/{ResourceType}/{ResourceId}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InvalidInput, NoSuchHealthCheck, NoSuchHostedZone, PriorRequestNotComplete, ThrottlingException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists tags for up to 10 health checks or hosted zones.
 * 
 * 
 * For information about using tags for cost allocation, see Using Cost Allocation
 * Tags in the *Billing and Cost Management User Guide*.
 */export const listTagsForResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/tags/{ResourceType}", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListTagsForResources" }, ListTagsForResourcesRequest, ListTagsForResourcesResponse, [InvalidInput, NoSuchHealthCheck, NoSuchHostedZone, PriorRequestNotComplete, ThrottlingException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about the latest version for every traffic policy that is associated
 * with the current Amazon Web Services account. Policies are listed in the order that they
 * were created in.
 * 
 * 
 * For information about how of deleting a traffic policy affects the response from
 * `ListTrafficPolicies`, see DeleteTrafficPolicy.
 */export const listTrafficPolicies = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicies", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListTrafficPolicies" }, ListTrafficPoliciesRequest, ListTrafficPoliciesResponse, [InvalidInput]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * After you submit a `UpdateTrafficPolicyInstance` request, there's a brief delay while Route 53 creates the resource record sets
 * that are specified in the traffic policy definition. Use `GetTrafficPolicyInstance` with the `id` of updated traffic policy instance confirm
 * that the
 * `UpdateTrafficPolicyInstance` request completed successfully. For more information, see the `State` response element.
 * 
 * 
 * 
 * 
 * Updates the resource record sets in a specified hosted zone that were created based on
 * the settings in a specified traffic policy version.
 * 
 * 
 * When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS
 * queries for the root resource record set name (such as example.com) while it replaces
 * one group of resource record sets with another. Route 53 performs the following
 * operations:
 * 
 * 
 * 
 * - Route 53 creates a new group of resource record sets based on the specified
 * traffic policy. This is true regardless of how significant the differences are
 * between the existing resource record sets and the new resource record sets.
 * 
 * 
 * 
 * 
 * - When all of the new resource record sets have been created, Route 53 starts to
 * respond to DNS queries for the root resource record set name (such as
 * example.com) by using the new resource record sets.
 * 
 * 
 * 
 * - Route 53 deletes the old group of resource record sets that are associated
 * with the root resource record set name.
 */export const updateTrafficPolicyInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicyinstance/{Id}", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.UpdateTrafficPolicyInstance" }, UpdateTrafficPolicyInstanceRequest, UpdateTrafficPolicyInstanceResponse, [ConflictingTypes, InvalidInput, NoSuchTrafficPolicy, NoSuchTrafficPolicyInstance, PriorRequestNotComplete]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This
 * operation changes the KSK status to `ACTIVE`.
 */export const activateKeySigningKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ActivateKeySigningKey" }, ActivateKeySigningKeyRequest, ActivateKeySigningKeyResponse, [ConcurrentModification, InvalidInput, InvalidKeySigningKeyStatus, InvalidKMSArn, InvalidSigningStatus, NoSuchKeySigningKey]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a CIDR collection in the current Amazon Web Services account.
 */export const createCidrCollection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/cidrcollection", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateCidrCollection" }, CreateCidrCollectionRequest, CreateCidrCollectionResponse, [CidrCollectionAlreadyExistsException, ConcurrentModification, InvalidInput, LimitsExceeded]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a new version of an existing traffic policy. When you create a new version of
 * a traffic policy, you specify the ID of the traffic policy that you want to update and a
 * JSON-formatted document that describes the new version. You use traffic policies to
 * create multiple DNS resource record sets for one domain name (such as example.com) or
 * one subdomain name (such as www.example.com). You can create a maximum of 1000 versions
 * of a traffic policy. If you reach the limit and need to create another version, you'll
 * need to start a new traffic policy.
 */export const createTrafficPolicyVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicy/{Id}", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateTrafficPolicyVersion" }, CreateTrafficPolicyVersionRequest, CreateTrafficPolicyVersionResponse, [ConcurrentModification, InvalidInput, InvalidTrafficPolicyDocument, NoSuchTrafficPolicy, TooManyTrafficPolicyVersionsForCurrentPolicy]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Authorizes the Amazon Web Services account that created a specified VPC to submit an
 * `AssociateVPCWithHostedZone` request to associate the VPC with a
 * specified hosted zone that was created by a different account. To submit a
 * `CreateVPCAssociationAuthorization` request, you must use the account
 * that created the hosted zone. After you authorize the association, use the account that
 * created the VPC to submit an `AssociateVPCWithHostedZone` request.
 * 
 * 
 * 
 * 
 * If you want to associate multiple VPCs that you created by using one account with
 * a hosted zone that you created by using a different account, you must submit one
 * authorization request for each VPC.
 */export const createVPCAssociationAuthorization = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateVPCAssociationAuthorization" }, CreateVPCAssociationAuthorizationRequest, CreateVPCAssociationAuthorizationResponse, [ConcurrentModification, InvalidInput, InvalidVPCId, NoSuchHostedZone, TooManyVPCAssociationAuthorizations]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a key-signing key (KSK). Before you can delete a KSK, you must deactivate it.
 * The KSK must be deactivated before you can delete it regardless of whether the hosted
 * zone is enabled for DNSSEC signing.
 * 
 * 
 * You can use DeactivateKeySigningKey to deactivate the key before you delete it.
 * 
 * 
 * Use GetDNSSEC to verify that the KSK is in an `INACTIVE`
 * status.
 */export const deleteKeySigningKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}", method: "DELETE", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeleteKeySigningKey" }, DeleteKeySigningKeyRequest, DeleteKeySigningKeyResponse, [ConcurrentModification, InvalidInput, InvalidKeySigningKeyStatus, InvalidKMSArn, InvalidSigningStatus, NoSuchKeySigningKey]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deletes a traffic policy.
 * 
 * 
 * When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that
 * it has been deleted. However, Route 53 never fully deletes the traffic policy. Note the
 * following:
 * 
 * 
 * 
 * - Deleted traffic policies aren't listed if you run ListTrafficPolicies.
 * 
 * 
 * 
 * - There's no way to get a list of deleted policies.
 * 
 * 
 * 
 * - If you retain the ID of the policy, you can get information about the policy,
 * including the traffic policy document, by running GetTrafficPolicy.
 */export const deleteTrafficPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicy/{Id}/{Version}", method: "DELETE", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeleteTrafficPolicy" }, DeleteTrafficPolicyRequest, DeleteTrafficPolicyResponse, [ConcurrentModification, InvalidInput, NoSuchTrafficPolicy, TrafficPolicyInUse]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53
 * private hosted zone. Note the following:
 * 
 * 
 * 
 * - You can't disassociate the last Amazon VPC from a private hosted zone.
 * 
 * 
 * 
 * - You can't convert a private hosted zone into a public hosted zone.
 * 
 * 
 * 
 * - You can submit a `DisassociateVPCFromHostedZone` request using
 * either the account that created the hosted zone or the account that created the
 * Amazon VPC.
 * 
 * 
 * 
 * - Some services, such as Cloud Map and Amazon Elastic File System
 * (Amazon EFS) automatically create hosted zones and associate VPCs with the
 * hosted zones. A service can create a hosted zone using your account or using its
 * own account. You can disassociate a VPC from a hosted zone only if the service
 * created the hosted zone using your account.
 * 
 * 
 * When you run DisassociateVPCFromHostedZone, if the hosted zone has a value for
 * `OwningAccount`, you can use
 * `DisassociateVPCFromHostedZone`. If the hosted zone has a value
 * for `OwningService`, you can't use
 * `DisassociateVPCFromHostedZone`.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * When revoking access, the hosted zone and the Amazon VPC must belong to
 * the same partition. A partition is a group of Amazon Web Services Regions. Each
 * Amazon Web Services account is scoped to one partition.
 * 
 * 
 * The following are the supported partitions:
 * 
 * 
 * 
 * - `aws` - Amazon Web Services Regions
 * 
 * 
 * 
 * - `aws-cn` - China Regions
 * 
 * 
 * 
 * - `aws-us-gov` - Amazon Web Services GovCloud (US) Region
 * 
 * 
 * 
 * 
 * 
 * For more information, see Access Management
 * in the *Amazon Web Services General Reference*.
 */export const disassociateVPCFromHostedZone = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DisassociateVPCFromHostedZone" }, DisassociateVPCFromHostedZoneRequest, DisassociateVPCFromHostedZoneResponse, [InvalidInput, InvalidVPCId, LastVPCAssociation, NoSuchHostedZone, VPCAssociationNotFound]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Enables DNSSEC signing in a specific hosted zone.
 */export const enableHostedZoneDNSSEC = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/enable-dnssec", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.EnableHostedZoneDNSSEC" }, EnableHostedZoneDNSSECRequest, EnableHostedZoneDNSSECResponse, [ConcurrentModification, DNSSECNotFound, HostedZonePartiallyDelegated, InvalidArgument, InvalidInput, InvalidKeySigningKeyStatus, InvalidKMSArn, KeySigningKeyWithActiveStatusNotFound, NoSuchHostedZone]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about whether a specified geographic location is supported for Amazon
 * Route 53 geolocation resource record sets.
 * 
 * 
 * Route 53 does not perform authorization for this API because it retrieves information
 * that is already available to the public.
 * 
 * 
 * Use the following syntax to determine whether a continent is supported for
 * geolocation:
 * 
 * 
 * 
 * GET /2013-04-01/geolocation?continentcode=two-letter abbreviation for
 * a continent
 * 
 * 
 * 
 * 
 * Use the following syntax to determine whether a country is supported for
 * geolocation:
 * 
 * 
 * 
 * GET /2013-04-01/geolocation?countrycode=two-character country
 * code
 * 
 * 
 * 
 * 
 * Use the following syntax to determine whether a subdivision of a country is supported
 * for geolocation:
 * 
 * 
 * 
 * GET /2013-04-01/geolocation?countrycode=two-character country
 * code&subdivisioncode=subdivision
 * code
 */export const getGeoLocation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/geolocation", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetGeoLocation" }, GetGeoLocationRequest, GetGeoLocationResponse, [InvalidInput, NoSuchGeoLocation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets the reason that a specified health check failed most recently.
 */export const getHealthCheckLastFailureReason = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetHealthCheckLastFailureReason" }, GetHealthCheckLastFailureReasonRequest, GetHealthCheckLastFailureReasonResponse, [InvalidInput, NoSuchHealthCheck]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets the specified limit for a specified hosted zone, for example, the maximum number
 * of records that you can create in the hosted zone.
 * 
 * 
 * For the default limit, see Limits in the
 * *Amazon Route 53 Developer Guide*. To request a higher limit,
 * open a case.
 */export const getHostedZoneLimit = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetHostedZoneLimit" }, GetHostedZoneLimitRequest, GetHostedZoneLimitResponse, [HostedZoneNotPrivate, InvalidInput, NoSuchHostedZone]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Returns a paginated list of location objects and their CIDR blocks.
 */export const listCidrBlocks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/cidrcollection/{CollectionId}/cidrblocks", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListCidrBlocks" }, ListCidrBlocksRequest, ListCidrBlocksResponse, [InvalidInput, NoSuchCidrCollectionException, NoSuchCidrLocationException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists all the private hosted zones that a specified VPC is associated with, regardless
 * of which Amazon Web Services account or Amazon Web Services service owns the hosted zones.
 * The `HostedZoneOwner` structure in the response contains one of the following
 * values:
 * 
 * 
 * 
 * - An `OwningAccount` element, which contains the account number of
 * either the current Amazon Web Services account or another Amazon Web Services account. Some services, such as Cloud Map, create
 * hosted zones using the current account.
 * 
 * 
 * 
 * - An `OwningService` element, which identifies the Amazon Web Services
 * service that created and owns the hosted zone. For example, if a hosted zone was
 * created by Amazon Elastic File System (Amazon EFS), the value of
 * `Owner` is `efs.amazonaws.com`.
 * 
 * 
 * 
 * 
 * 
 * 
 * `ListHostedZonesByVPC` returns the hosted zones associated with the specified VPC and does not reflect the hosted zone
 * associations to VPCs via Route 53 Profiles. To get the associations to a Profile, call the ListProfileResourceAssociations API.
 * 
 * 
 * 
 * 
 * When listing private hosted zones, the hosted zone and the Amazon VPC must
 * belong to the same partition where the hosted zones were created. A partition is a
 * group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to
 * one partition.
 * 
 * 
 * The following are the supported partitions:
 * 
 * 
 * 
 * - `aws` - Amazon Web Services Regions
 * 
 * 
 * 
 * - `aws-cn` - China Regions
 * 
 * 
 * 
 * - `aws-us-gov` - Amazon Web Services GovCloud (US) Region
 * 
 * 
 * 
 * 
 * 
 * For more information, see Access Management
 * in the *Amazon Web Services General Reference*.
 */export const listHostedZonesByVPC = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzonesbyvpc", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListHostedZonesByVPC" }, ListHostedZonesByVPCRequest, ListHostedZonesByVPCResponse, [InvalidInput, InvalidPaginationToken]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Updates an existing health check. Note that some values can't be updated.
 * 
 * 
 * For more information about updating health checks, see Creating,
 * Updating, and Deleting Health Checks in the Amazon Route 53
 * Developer Guide.
 */export const updateHealthCheck = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/healthcheck/{HealthCheckId}", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.UpdateHealthCheck" }, UpdateHealthCheckRequest, UpdateHealthCheckResponse, [HealthCheckVersionMismatch, InvalidInput, NoSuchHealthCheck]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates, changes, or deletes CIDR blocks within a collection. Contains authoritative
 * IP information mapping blocks to one or multiple locations.
 * 
 * 
 * A change request can update multiple locations in a collection at a time, which is
 * helpful if you want to move one or more CIDR blocks from one location to another in one
 * transaction, without downtime.
 * 
 * 
 * 
 * **Limits**
 * 
 * 
 * 
 * The max number of CIDR blocks included in the request is 1000. As a result, big updates
 * require multiple API calls.
 * 
 * 
 * 
 * ** PUT and DELETE_IF_EXISTS**
 * 
 * 
 * 
 * Use `ChangeCidrCollection` to perform the following actions:
 * 
 * 
 * 
 * - `PUT`: Create a CIDR block within the specified collection.
 * 
 * 
 * 
 * - ` DELETE_IF_EXISTS`: Delete an existing CIDR block from the
 * collection.
 */export const changeCidrCollection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/cidrcollection/{Id}", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ChangeCidrCollection" }, ChangeCidrCollectionRequest, ChangeCidrCollectionResponse, [CidrBlockInUseException, CidrCollectionVersionMismatchException, ConcurrentModification, InvalidInput, LimitsExceeded, NoSuchCidrCollectionException]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates, changes, or deletes a resource record set, which contains authoritative DNS
 * information for a specified domain name or subdomain name. For example, you can use
 * `ChangeResourceRecordSets` to create a resource record set that routes
 * traffic for test.example.com to a web server that has an IP address of
 * 192.0.2.44.
 * 
 * 
 * 
 * **Deleting Resource Record Sets**
 * 
 * 
 * 
 * To delete a resource record set, you must specify all the same values that you
 * specified when you created it.
 * 
 * 
 * 
 * **Change Batches and Transactional Changes**
 * 
 * 
 * 
 * The request body must include a document with a
 * `ChangeResourceRecordSetsRequest` element. The request body contains a
 * list of change items, known as a change batch. Change batches are considered
 * transactional changes. Route 53 validates the changes in the request and then either
 * makes all or none of the changes in the change batch request. This ensures that DNS
 * routing isn't adversely affected by partial changes to the resource record sets in a
 * hosted zone.
 * 
 * 
 * For example, suppose a change batch request contains two changes: it deletes the
 * `CNAME` resource record set for www.example.com and creates an alias
 * resource record set for www.example.com. If validation for both records succeeds, Route
 * 53 deletes the first resource record set and creates the second resource record set in a
 * single operation. If validation for either the `DELETE` or the
 * `CREATE` action fails, then the request is canceled, and the original
 * `CNAME` record continues to exist.
 * 
 * 
 * 
 * 
 * If you try to delete the same resource record set more than once in a single
 * change batch, Route 53 returns an `InvalidChangeBatch` error.
 * 
 * 
 * 
 * 
 * 
 * **Traffic Flow**
 * 
 * 
 * 
 * To create resource record sets for complex routing configurations, use either the
 * traffic flow visual editor in the Route 53 console or the API actions for traffic
 * policies and traffic policy instances. Save the configuration as a traffic policy, then
 * associate the traffic policy with one or more domain names (such as example.com) or
 * subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted
 * zones. You can roll back the updates if the new configuration isn't performing as
 * expected. For more information, see Using Traffic Flow to Route
 * DNS Traffic in the Amazon Route 53 Developer
 * Guide.
 * 
 * 
 * 
 * **Create, Delete, and Upsert**
 * 
 * 
 * 
 * Use `ChangeResourceRecordsSetsRequest` to perform the following
 * actions:
 * 
 * 
 * 
 * - `CREATE`: Creates a resource record set that has the specified
 * values.
 * 
 * 
 * 
 * - `DELETE`: Deletes an existing resource record set that has the
 * specified values.
 * 
 * 
 * 
 * - `UPSERT`: If a resource set doesn't exist, Route 53 creates it. If a resource
 * set exists Route 53 updates it with the values in the request.
 * 
 * 
 * 
 * 
 * 
 * 
 * Syntaxes for Creating, Updating, and Deleting Resource Record
 * Sets
 * 
 * 
 * 
 * The syntax for a request depends on the type of resource record set that you want to
 * create, delete, or update, such as weighted, alias, or failover. The XML elements in
 * your request must appear in the order listed in the syntax.
 * 
 * 
 * For an example for each type of resource record set, see "Examples."
 * 
 * 
 * Don't refer to the syntax in the "Parameter Syntax" section, which includes
 * all of the elements for every kind of resource record set that you can create, delete,
 * or update by using `ChangeResourceRecordSets`.
 * 
 * 
 * 
 * **Change Propagation to Route 53 DNS Servers**
 * 
 * 
 * 
 * When you submit a `ChangeResourceRecordSets` request, Route 53 propagates your
 * changes to all of the Route 53 authoritative DNS servers managing the hosted zone. While
 * your changes are propagating, `GetChange` returns a status of
 * `PENDING`. When propagation is complete, `GetChange` returns a
 * status of `INSYNC`. Changes generally propagate to all Route 53 name servers
 * managing the hosted zone within 60 seconds. For more information, see GetChange.
 * 
 * 
 * 
 * **Limits on ChangeResourceRecordSets Requests**
 * 
 * 
 * 
 * For information about the limits on a `ChangeResourceRecordSets` request,
 * see Limits in the *Amazon Route 53 Developer Guide*.
 */export const changeResourceRecordSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/rrset", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ChangeResourceRecordSets" }, ChangeResourceRecordSetsRequest, ChangeResourceRecordSetsResponse, [InvalidChangeBatch, InvalidInput, NoSuchHealthCheck, NoSuchHostedZone, PriorRequestNotComplete]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a new health check.
 * 
 * 
 * For information about adding health checks to resource record sets, see HealthCheckId in ChangeResourceRecordSets.
 * 
 * 
 * 
 * **ELB Load Balancers**
 * 
 * 
 * 
 * If you're registering EC2 instances with an Elastic Load Balancing (ELB) load
 * balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you
 * register an EC2 instance with a load balancer, you configure settings for an ELB health
 * check, which performs a similar function to a Route 53 health check.
 * 
 * 
 * 
 * **Private Hosted Zones**
 * 
 * 
 * 
 * You can associate health checks with failover resource record sets in a private hosted
 * zone. Note the following:
 * 
 * 
 * 
 * - Route 53 health checkers are outside the VPC. To check the health of an
 * endpoint within a VPC by IP address, you must assign a public IP address to the
 * instance in the VPC.
 * 
 * 
 * 
 * - You can configure a health checker to check the health of an external resource
 * that the instance relies on, such as a database server.
 * 
 * 
 * 
 * - You can create a CloudWatch metric, associate an alarm with the metric, and
 * then create a health check that is based on the state of the alarm. For example,
 * you might create a CloudWatch metric that checks the status of the Amazon EC2
 * `StatusCheckFailed` metric, add an alarm to the metric, and then
 * create a health check that is based on the state of the alarm. For information
 * about creating CloudWatch metrics and alarms by using the CloudWatch console,
 * see the Amazon
 * CloudWatch User Guide.
 */export const createHealthCheck = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/healthcheck", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateHealthCheck" }, CreateHealthCheckRequest, CreateHealthCheckResponse, [HealthCheckAlreadyExists, InvalidInput, TooManyHealthChecks]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a traffic policy, which you use to create multiple DNS resource record sets
 * for one domain name (such as example.com) or one subdomain name (such as
 * www.example.com).
 */export const createTrafficPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicy", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateTrafficPolicy" }, CreateTrafficPolicyRequest, CreateTrafficPolicyResponse, [InvalidInput, InvalidTrafficPolicyDocument, TooManyTrafficPolicies, TrafficPolicyAlreadyExists]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates resource record sets in a specified hosted zone based on the settings in a
 * specified traffic policy version. In addition, `CreateTrafficPolicyInstance`
 * associates the resource record sets with a specified domain name (such as example.com)
 * or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for
 * the domain or subdomain name by using the resource record sets that
 * `CreateTrafficPolicyInstance` created.
 * 
 * 
 * 
 * 
 * After you submit an `CreateTrafficPolicyInstance` request, there's a
 * brief delay while Amazon Route 53 creates the resource record sets that are
 * specified in the traffic policy definition.
 * Use `GetTrafficPolicyInstance` with the `id` of new traffic policy instance to confirm that the `CreateTrafficPolicyInstance`
 * request completed successfully. For more information, see the
 * `State` response element.
 */export const createTrafficPolicyInstance = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/trafficpolicyinstance", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateTrafficPolicyInstance" }, CreateTrafficPolicyInstanceRequest, CreateTrafficPolicyInstanceResponse, [InvalidInput, NoSuchHostedZone, NoSuchTrafficPolicy, TooManyTrafficPolicyInstances, TrafficPolicyInstanceAlreadyExists]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC.
 * This operation changes the KSK status to `INACTIVE`.
 */export const deactivateKeySigningKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.DeactivateKeySigningKey" }, DeactivateKeySigningKeyRequest, DeactivateKeySigningKeyResponse, [ConcurrentModification, InvalidInput, InvalidKeySigningKeyStatus, InvalidSigningStatus, KeySigningKeyInParentDSRecord, KeySigningKeyInUse, NoSuchKeySigningKey]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a specified health check.
 */export const getHealthCheck = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/healthcheck/{HealthCheckId}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetHealthCheck" }, GetHealthCheckRequest, GetHealthCheckResponse, [IncompatibleVersion, InvalidInput, NoSuchHealthCheck]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Gets information about a specified hosted zone including the four name servers
 * assigned to the hosted zone.
 * 
 * 
 * 
 * `` returns the VPCs associated with the specified hosted zone and does not reflect the VPC
 * associations by Route 53 Profiles. To get the associations to a Profile, call the ListProfileAssociations API.
 */export const getHostedZone = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{Id}", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.GetHostedZone" }, GetHostedZoneRequest, GetHostedZoneResponse, [InvalidInput, NoSuchHostedZone]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Lists the resource record sets in a specified hosted zone.
 * 
 * 
 * 
 * `ListResourceRecordSets` returns up to 300 resource record sets at a time
 * in ASCII order, beginning at a position specified by the `name` and
 * `type` elements.
 * 
 * 
 * 
 * **Sort order**
 * 
 * 
 * 
 * 
 * `ListResourceRecordSets` sorts results first by DNS name with the labels
 * reversed, for example:
 * 
 * 
 * 
 * `com.example.www.`
 * 
 * 
 * 
 * Note the trailing dot, which can change the sort order when the record name contains
 * characters that appear before `.` (decimal 46) in the ASCII table. These
 * characters include the following: `! " # $ % & ' ( ) * + , -`
 * 
 * 
 * 
 * When multiple records have the same DNS name, `ListResourceRecordSets`
 * sorts results by the record type.
 * 
 * 
 * 
 * **Specifying where to start listing records**
 * 
 * 
 * 
 * You can use the name and type elements to specify the resource record set that the
 * list begins with:
 * 
 * 
 * 
 * ### If you do not specify Name or Type
 * 
 * 
 * 
 * The results begin with the first resource record set that the hosted zone
 * contains.
 * 
 * 
 * 
 * 
 * ### If you specify Name but not Type
 * 
 * 
 * 
 * The results begin with the first resource record set in the list whose
 * name is greater than or equal to `Name`.
 * 
 * 
 * 
 * 
 * ### If you specify Type but not Name
 * 
 * 
 * 
 * Amazon Route 53 returns the `InvalidInput` error.
 * 
 * 
 * 
 * 
 * ### If you specify both Name and Type
 * 
 * 
 * 
 * The results begin with the first resource record set in the list whose
 * name is greater than or equal to `Name`, and whose type is
 * greater than or equal to `Type`.
 * 
 * 
 * 
 * 
 * Type is only used to sort between records with the same record Name.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * **Resource record sets that are PENDING**
 * 
 * 
 * 
 * This action returns the most current version of the records. This includes records
 * that are `PENDING`, and that are not yet available on all Route 53 DNS
 * servers.
 * 
 * 
 * 
 * **Changing resource record sets**
 * 
 * 
 * 
 * To ensure that you get an accurate listing of the resource record sets for a hosted
 * zone at a point in time, do not submit a `ChangeResourceRecordSets` request
 * while you're paging through the results of a `ListResourceRecordSets`
 * request. If you do, some pages may display results without the latest changes while
 * other pages display results with the latest changes.
 * 
 * 
 * 
 * **Displaying the next page of results**
 * 
 * 
 * 
 * If a `ListResourceRecordSets` command returns more than one page of
 * results, the value of `IsTruncated` is `true`. To display the next
 * page of results, get the values of `NextRecordName`,
 * `NextRecordType`, and `NextRecordIdentifier` (if any) from the
 * response. Then submit another `ListResourceRecordSets` request, and specify
 * those values for `StartRecordName`, `StartRecordType`, and
 * `StartRecordIdentifier`.
 */export const listResourceRecordSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/rrset", method: "GET", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.ListResourceRecordSets" }, ListResourceRecordSetsRequest, ListResourceRecordSetsResponse, [InvalidInput, NoSuchHostedZone]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Associates an Amazon VPC with a private hosted zone.
 * 
 * 
 * 
 * 
 * To perform the association, the VPC and the private hosted zone must already
 * exist. You can't convert a public hosted zone into a private hosted zone.
 * 
 * 
 * 
 * 
 * 
 * 
 * If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created by using a
 * different account, the Amazon Web Services account that created the private hosted
 * zone must first submit a `CreateVPCAssociationAuthorization` request.
 * Then the account that created the VPC must submit an
 * `AssociateVPCWithHostedZone` request.
 * 
 * 
 * 
 * 
 * 
 * 
 * When granting access, the hosted zone and the Amazon VPC must belong to
 * the same partition. A partition is a group of Amazon Web Services Regions. Each
 * Amazon Web Services account is scoped to one partition.
 * 
 * 
 * The following are the supported partitions:
 * 
 * 
 * 
 * - `aws` - Amazon Web Services Regions
 * 
 * 
 * 
 * - `aws-cn` - China Regions
 * 
 * 
 * 
 * - `aws-us-gov` - Amazon Web Services GovCloud (US) Region
 * 
 * 
 * 
 * 
 * 
 * For more information, see Access Management
 * in the *Amazon Web Services General Reference*.
 */export const associateVPCWithHostedZone = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone/{HostedZoneId}/associatevpc", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.AssociateVPCWithHostedZone" }, AssociateVPCWithHostedZoneRequest, AssociateVPCWithHostedZoneResponse, [ConflictingDomainExists, InvalidInput, InvalidVPCId, LimitsExceeded, NoSuchHostedZone, NotAuthorizedException, PriorRequestNotComplete, PublicZoneVPCAssociation]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a new public or private hosted zone. You create records in a public hosted
 * zone to define how you want to route traffic on the internet for a domain, such as
 * example.com, and its subdomains (apex.example.com, acme.example.com). You create records
 * in a private hosted zone to define how you want to route traffic for a domain and its
 * subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs).
 * 
 * 
 * 
 * 
 * You can't convert a public hosted zone to a private hosted zone or vice versa.
 * Instead, you must create a new hosted zone with the same name and create new
 * resource record sets.
 * 
 * 
 * 
 * 
 * For more information about charges for hosted zones, see Amazon Route 53 Pricing.
 * 
 * 
 * Note the following:
 * 
 * 
 * 
 * - You can't create a hosted zone for a top-level domain (TLD) such as
 * .com.
 * 
 * 
 * 
 * - For public hosted zones, Route 53 automatically creates a default SOA record
 * and four NS records for the zone. For more information about SOA and NS records,
 * see NS and SOA Records
 * that Route 53 Creates for a Hosted Zone in the
 * *Amazon Route 53 Developer Guide*.
 * 
 * 
 * If you want to use the same name servers for multiple public hosted zones, you
 * can optionally associate a reusable delegation set with the hosted zone. See the
 * `DelegationSetId` element.
 * 
 * 
 * 
 * - If your domain is registered with a registrar other than Route 53,
 * you must update the name servers with your registrar to make Route 53 the DNS
 * service for the domain. For more information, see Migrating DNS Service
 * for an Existing Domain to Amazon Route 53 in the
 * *Amazon Route 53 Developer Guide*.
 * 
 * 
 * 
 * 
 * 
 * When you submit a `CreateHostedZone` request, the initial status of the
 * hosted zone is `PENDING`. For public hosted zones, this means that the NS and
 * SOA records are not yet available on all Route 53 DNS servers. When the NS and
 * SOA records are available, the status of the zone changes to `INSYNC`.
 * 
 * 
 * The `CreateHostedZone` request requires the caller to have an
 * `ec2:DescribeVpcs` permission.
 * 
 * 
 * 
 * 
 * When creating private hosted zones, the Amazon VPC must belong to the same
 * partition where the hosted zone is created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one
 * partition.
 * 
 * 
 * The following are the supported partitions:
 * 
 * 
 * 
 * - `aws` - Amazon Web Services Regions
 * 
 * 
 * 
 * - `aws-cn` - China Regions
 * 
 * 
 * 
 * - `aws-us-gov` - Amazon Web Services GovCloud (US) Region
 * 
 * 
 * 
 * 
 * 
 * For more information, see Access Management
 * in the *Amazon Web Services General Reference*.
 */export const createHostedZone = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/hostedzone", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateHostedZone" }, CreateHostedZoneRequest, CreateHostedZoneResponse, [ConflictingDomainExists, DelegationSetNotAvailable, DelegationSetNotReusable, HostedZoneAlreadyExists, InvalidDomainName, InvalidInput, InvalidVPCId, NoSuchDelegationSet, TooManyHostedZones]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a configuration for DNS query logging. After you create a query logging
 * configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs
 * log group.
 * 
 * 
 * DNS query logs contain information about the queries that Route 53 receives for a
 * specified public hosted zone, such as the following:
 * 
 * 
 * 
 * - Route 53 edge location that responded to the DNS query
 * 
 * 
 * 
 * - Domain or subdomain that was requested
 * 
 * 
 * 
 * - DNS record type, such as A or AAAA
 * 
 * 
 * 
 * - DNS response code, such as `NoError` or
 * `ServFail`
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ### Log Group and Resource Policy
 * 
 * 
 * 
 * Before you create a query logging configuration, perform the following
 * operations.
 * 
 * 
 * 
 * 
 * If you create a query logging configuration using the Route 53
 * console, Route 53 performs these operations automatically.
 * 
 * 
 * 
 * 
 * 
 * - Create a CloudWatch Logs log group, and make note of the ARN,
 * which you specify when you create a query logging configuration.
 * Note the following:
 * 
 * 
 * 
 * - You must create the log group in the us-east-1
 * region.
 * 
 * 
 * 
 * - You must use the same Amazon Web Services account to create
 * the log group and the hosted zone that you want to configure
 * query logging for.
 * 
 * 
 * 
 * - When you create log groups for query logging, we recommend
 * that you use a consistent prefix, for example:
 * 
 * 
 * 
 * /aws/route53/hosted zone
 * name
 * 
 * 
 * 
 * 
 * In the next step, you'll create a resource policy, which
 * controls access to one or more log groups and the associated
 * Amazon Web Services resources, such as Route 53 hosted
 * zones. There's a limit on the number of resource policies
 * that you can create, so we recommend that you use a
 * consistent prefix so you can use the same resource policy
 * for all the log groups that you create for query
 * logging.
 * 
 * 
 * 
 * 
 * 
 * 
 * - Create a CloudWatch Logs resource policy, and give it the
 * permissions that Route 53 needs to create log streams and to send
 * query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1
 * region. For the value of `Resource`,
 * specify the ARN for the log group that you created in the previous
 * step. To use the same resource policy for all the CloudWatch Logs
 * log groups that you created for query logging configurations,
 * replace the hosted zone name with `*`, for
 * example:
 * 
 * 
 * 
 * `arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*`
 * 
 * 
 * 
 * To avoid the confused deputy problem, a security issue where an
 * entity without a permission for an action can coerce a
 * more-privileged entity to perform it, you can optionally limit the
 * permissions that a service has to a resource in a resource-based
 * policy by supplying the following values:
 * 
 * 
 * 
 * - For `aws:SourceArn`, supply the hosted zone ARN
 * used in creating the query logging configuration. For
 * example, aws:SourceArn:
 * arn:aws:route53:::hostedzone/hosted zone
 * ID.
 * 
 * 
 * 
 * - For `aws:SourceAccount`, supply the account ID
 * for the account that creates the query logging
 * configuration. For example,
 * `aws:SourceAccount:111111111111`.
 * 
 * 
 * 
 * 
 * 
 * For more information, see The confused
 * deputy problem in the Amazon Web Services
 * IAM User Guide.
 * 
 * 
 * 
 * 
 * You can't use the CloudWatch console to create or edit a
 * resource policy. You must use the CloudWatch API, one of the
 * Amazon Web Services SDKs, or the CLI.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ### Log Streams and Edge Locations
 * 
 * 
 * 
 * When Route 53 finishes creating the configuration for DNS query logging,
 * it does the following:
 * 
 * 
 * 
 * - Creates a log stream for an edge location the first time that the
 * edge location responds to DNS queries for the specified hosted zone.
 * That log stream is used to log all queries that Route 53 responds to
 * for that edge location.
 * 
 * 
 * 
 * - Begins to send query logs to the applicable log stream.
 * 
 * 
 * 
 * 
 * 
 * The name of each log stream is in the following format:
 * 
 * 
 * 
 * 
 * *hosted zone ID*/edge location
 * code
 * 
 * 
 * 
 * 
 * The edge location code is a three-letter code and an arbitrarily assigned
 * number, for example, DFW3. The three-letter code typically corresponds with
 * the International Air Transport Association airport code for an airport near
 * the edge location. (These abbreviations might change in the future.) For a
 * list of edge locations, see "The Route 53 Global Network" on the Route 53 Product Details
 * page.
 * 
 * 
 * 
 * 
 * ### Queries That Are Logged
 * 
 * 
 * 
 * Query logs contain only the queries that DNS resolvers forward to Route
 * 53. If a DNS resolver has already cached the response to a query (such as
 * the IP address for a load balancer for example.com), the resolver will
 * continue to return the cached response. It doesn't forward another query to
 * Route 53 until the TTL for the corresponding resource record set expires.
 * Depending on how many DNS queries are submitted for a resource record set,
 * and depending on the TTL for that resource record set, query logs might
 * contain information about only one query out of every several thousand
 * queries that are submitted to DNS. For more information about how DNS works,
 * see Routing
 * Internet Traffic to Your Website or Web Application in the
 * *Amazon Route 53 Developer Guide*.
 * 
 * 
 * 
 * 
 * ### Log File Format
 * 
 * 
 * 
 * For a list of the values in each query log and the format of each value,
 * see Logging DNS
 * Queries in the Amazon Route 53 Developer
 * Guide.
 * 
 * 
 * 
 * 
 * ### Pricing
 * 
 * 
 * 
 * For information about charges for query logs, see Amazon CloudWatch Pricing.
 * 
 * 
 * 
 * 
 * ### How to Stop Logging
 * 
 * 
 * 
 * If you want Route 53 to stop sending query logs to CloudWatch Logs, delete
 * the query logging configuration. For more information, see DeleteQueryLoggingConfig.
 */export const createQueryLoggingConfig = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/queryloggingconfig", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateQueryLoggingConfig" }, CreateQueryLoggingConfigRequest, CreateQueryLoggingConfigResponse, [ConcurrentModification, InsufficientCloudWatchLogsResourcePolicy, InvalidInput, NoSuchCloudWatchLogsLogGroup, NoSuchHostedZone, QueryLoggingConfigAlreadyExists]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a delegation set (a group of four name servers) that can be reused by multiple
 * hosted zones that were created by the same Amazon Web Services account.
 * 
 * 
 * You can also create a reusable delegation set that uses the four name servers that are
 * associated with an existing hosted zone. Specify the hosted zone ID in the
 * `CreateReusableDelegationSet` request.
 * 
 * 
 * 
 * 
 * You can't associate a reusable delegation set with a private hosted zone.
 * 
 * 
 * 
 * 
 * For information about using a reusable delegation set to configure white label name
 * servers, see Configuring White
 * Label Name Servers.
 * 
 * 
 * The process for migrating existing hosted zones to use a reusable delegation set is
 * comparable to the process for configuring white label name servers. You need to perform
 * the following steps:
 * 
 * 
 * 
 * - Create a reusable delegation set.
 * 
 * 
 * 
 * - Recreate hosted zones, and reduce the TTL to 60 seconds or less.
 * 
 * 
 * 
 * - Recreate resource record sets in the new hosted zones.
 * 
 * 
 * 
 * - Change the registrar's name servers to use the name servers for the new hosted
 * zones.
 * 
 * 
 * 
 * - Monitor traffic for the website or application.
 * 
 * 
 * 
 * - Change TTLs back to their original values.
 * 
 * 
 * 
 * 
 * If you want to migrate existing hosted zones to use a reusable delegation set, the
 * existing hosted zones can't use any of the name servers that are assigned to the
 * reusable delegation set. If one or more hosted zones do use one or more name servers
 * that are assigned to the reusable delegation set, you can do one of the
 * following:
 * 
 * 
 * 
 * - For small numbers of hosted zones—up to a few hundred—it's
 * relatively easy to create reusable delegation sets until you get one that has
 * four name servers that don't overlap with any of the name servers in your hosted
 * zones.
 * 
 * 
 * 
 * - For larger numbers of hosted zones, the easiest solution is to use more than
 * one reusable delegation set.
 * 
 * 
 * 
 * - For larger numbers of hosted zones, you can also migrate hosted zones that
 * have overlapping name servers to hosted zones that don't have overlapping name
 * servers, then migrate the hosted zones again to use the reusable delegation
 * set.
 */export const createReusableDelegationSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/delegationset", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateReusableDelegationSet" }, CreateReusableDelegationSetRequest, CreateReusableDelegationSetResponse, [DelegationSetAlreadyCreated, DelegationSetAlreadyReusable, DelegationSetNotAvailable, HostedZoneNotFound, InvalidArgument, InvalidInput, LimitsExceeded]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
/**
 * Creates a new key-signing key (KSK) associated with a hosted zone. You can only have
 * two KSKs per hosted zone.
 */export const createKeySigningKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2013-04-01", uri: "/2013-04-01/keysigningkey", sdkId: "Route 53", sigV4ServiceName: "route53", name: "AWSDnsV20130401.CreateKeySigningKey" }, CreateKeySigningKeyRequest, CreateKeySigningKeyResponse, [ConcurrentModification, InvalidArgument, InvalidInput, InvalidKeySigningKeyName, InvalidKeySigningKeyStatus, InvalidKMSArn, InvalidSigningStatus, KeySigningKeyAlreadyExists, NoSuchHostedZone, TooManyKeySigningKeys]), FormatXMLRequest, FormatXMLResponse, FormatAwsXMLError);
