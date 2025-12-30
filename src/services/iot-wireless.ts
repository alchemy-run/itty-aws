import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetEventConfigurationByResourceTypesRequest extends S.Class<GetEventConfigurationByResourceTypesRequest>("GetEventConfigurationByResourceTypesRequest")({}) {}
export class GetLogLevelsByResourceTypesRequest extends S.Class<GetLogLevelsByResourceTypesRequest>("GetLogLevelsByResourceTypesRequest")({}) {}
export class GetMetricConfigurationRequest extends S.Class<GetMetricConfigurationRequest>("GetMetricConfigurationRequest")({}) {}
export class ResetAllResourceLogLevelsRequest extends S.Class<ResetAllResourceLogLevelsRequest>("ResetAllResourceLogLevelsRequest")({}) {}
export class ResetAllResourceLogLevelsResponse extends S.Class<ResetAllResourceLogLevelsResponse>("ResetAllResourceLogLevelsResponse")({}) {}
export class SidewalkCreateDeviceProfile extends S.Class<SidewalkCreateDeviceProfile>("SidewalkCreateDeviceProfile")({}) {}
export const WirelessDeviceList = S.Array(S.String);
export const WirelessGatewayList = S.Array(S.String);
export const NetworkAnalyzerMulticastGroupList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export const PositionCoordinate = S.Array(S.Number);
export const JoinEuiRange = S.Array(S.String);
export const JoinEuiFilters = S.Array(JoinEuiRange);
export const NetIdFilters = S.Array(S.String);
export class AssociateMulticastGroupWithFuotaTaskRequest extends S.Class<AssociateMulticastGroupWithFuotaTaskRequest>("AssociateMulticastGroupWithFuotaTaskRequest")({Id: S.String, MulticastGroupId: S.String}) {}
export class AssociateMulticastGroupWithFuotaTaskResponse extends S.Class<AssociateMulticastGroupWithFuotaTaskResponse>("AssociateMulticastGroupWithFuotaTaskResponse")({}) {}
export class AssociateWirelessDeviceWithFuotaTaskRequest extends S.Class<AssociateWirelessDeviceWithFuotaTaskRequest>("AssociateWirelessDeviceWithFuotaTaskRequest")({Id: S.String, WirelessDeviceId: S.String}) {}
export class AssociateWirelessDeviceWithFuotaTaskResponse extends S.Class<AssociateWirelessDeviceWithFuotaTaskResponse>("AssociateWirelessDeviceWithFuotaTaskResponse")({}) {}
export class AssociateWirelessDeviceWithMulticastGroupRequest extends S.Class<AssociateWirelessDeviceWithMulticastGroupRequest>("AssociateWirelessDeviceWithMulticastGroupRequest")({Id: S.String, WirelessDeviceId: S.String}) {}
export class AssociateWirelessDeviceWithMulticastGroupResponse extends S.Class<AssociateWirelessDeviceWithMulticastGroupResponse>("AssociateWirelessDeviceWithMulticastGroupResponse")({}) {}
export class AssociateWirelessDeviceWithThingRequest extends S.Class<AssociateWirelessDeviceWithThingRequest>("AssociateWirelessDeviceWithThingRequest")({Id: S.String, ThingArn: S.String}) {}
export class AssociateWirelessDeviceWithThingResponse extends S.Class<AssociateWirelessDeviceWithThingResponse>("AssociateWirelessDeviceWithThingResponse")({}) {}
export class AssociateWirelessGatewayWithCertificateRequest extends S.Class<AssociateWirelessGatewayWithCertificateRequest>("AssociateWirelessGatewayWithCertificateRequest")({Id: S.String, IotCertificateId: S.String}) {}
export class AssociateWirelessGatewayWithThingRequest extends S.Class<AssociateWirelessGatewayWithThingRequest>("AssociateWirelessGatewayWithThingRequest")({Id: S.String, ThingArn: S.String}) {}
export class AssociateWirelessGatewayWithThingResponse extends S.Class<AssociateWirelessGatewayWithThingResponse>("AssociateWirelessGatewayWithThingResponse")({}) {}
export class CancelMulticastGroupSessionRequest extends S.Class<CancelMulticastGroupSessionRequest>("CancelMulticastGroupSessionRequest")({Id: S.String}) {}
export class CancelMulticastGroupSessionResponse extends S.Class<CancelMulticastGroupSessionResponse>("CancelMulticastGroupSessionResponse")({}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateDestinationRequest extends S.Class<CreateDestinationRequest>("CreateDestinationRequest")({Name: S.String, ExpressionType: S.String, Expression: S.String, Description: S.optional(S.String), RoleArn: S.String, Tags: S.optional(TagList), ClientRequestToken: S.optional(S.String)}) {}
export class CreateWirelessGatewayTaskRequest extends S.Class<CreateWirelessGatewayTaskRequest>("CreateWirelessGatewayTaskRequest")({Id: S.String, WirelessGatewayTaskDefinitionId: S.String}) {}
export class DeleteDestinationRequest extends S.Class<DeleteDestinationRequest>("DeleteDestinationRequest")({Name: S.String}) {}
export class DeleteDestinationResponse extends S.Class<DeleteDestinationResponse>("DeleteDestinationResponse")({}) {}
export class DeleteDeviceProfileRequest extends S.Class<DeleteDeviceProfileRequest>("DeleteDeviceProfileRequest")({Id: S.String}) {}
export class DeleteDeviceProfileResponse extends S.Class<DeleteDeviceProfileResponse>("DeleteDeviceProfileResponse")({}) {}
export class DeleteFuotaTaskRequest extends S.Class<DeleteFuotaTaskRequest>("DeleteFuotaTaskRequest")({Id: S.String}) {}
export class DeleteFuotaTaskResponse extends S.Class<DeleteFuotaTaskResponse>("DeleteFuotaTaskResponse")({}) {}
export class DeleteMulticastGroupRequest extends S.Class<DeleteMulticastGroupRequest>("DeleteMulticastGroupRequest")({Id: S.String}) {}
export class DeleteMulticastGroupResponse extends S.Class<DeleteMulticastGroupResponse>("DeleteMulticastGroupResponse")({}) {}
export class DeleteNetworkAnalyzerConfigurationRequest extends S.Class<DeleteNetworkAnalyzerConfigurationRequest>("DeleteNetworkAnalyzerConfigurationRequest")({ConfigurationName: S.String}) {}
export class DeleteNetworkAnalyzerConfigurationResponse extends S.Class<DeleteNetworkAnalyzerConfigurationResponse>("DeleteNetworkAnalyzerConfigurationResponse")({}) {}
export class DeleteQueuedMessagesRequest extends S.Class<DeleteQueuedMessagesRequest>("DeleteQueuedMessagesRequest")({Id: S.String, MessageId: S.String, WirelessDeviceType: S.optional(S.String)}) {}
export class DeleteQueuedMessagesResponse extends S.Class<DeleteQueuedMessagesResponse>("DeleteQueuedMessagesResponse")({}) {}
export class DeleteServiceProfileRequest extends S.Class<DeleteServiceProfileRequest>("DeleteServiceProfileRequest")({Id: S.String}) {}
export class DeleteServiceProfileResponse extends S.Class<DeleteServiceProfileResponse>("DeleteServiceProfileResponse")({}) {}
export class DeleteWirelessDeviceRequest extends S.Class<DeleteWirelessDeviceRequest>("DeleteWirelessDeviceRequest")({Id: S.String}) {}
export class DeleteWirelessDeviceResponse extends S.Class<DeleteWirelessDeviceResponse>("DeleteWirelessDeviceResponse")({}) {}
export class DeleteWirelessDeviceImportTaskRequest extends S.Class<DeleteWirelessDeviceImportTaskRequest>("DeleteWirelessDeviceImportTaskRequest")({Id: S.String}) {}
export class DeleteWirelessDeviceImportTaskResponse extends S.Class<DeleteWirelessDeviceImportTaskResponse>("DeleteWirelessDeviceImportTaskResponse")({}) {}
export class DeleteWirelessGatewayRequest extends S.Class<DeleteWirelessGatewayRequest>("DeleteWirelessGatewayRequest")({Id: S.String}) {}
export class DeleteWirelessGatewayResponse extends S.Class<DeleteWirelessGatewayResponse>("DeleteWirelessGatewayResponse")({}) {}
export class DeleteWirelessGatewayTaskRequest extends S.Class<DeleteWirelessGatewayTaskRequest>("DeleteWirelessGatewayTaskRequest")({Id: S.String}) {}
export class DeleteWirelessGatewayTaskResponse extends S.Class<DeleteWirelessGatewayTaskResponse>("DeleteWirelessGatewayTaskResponse")({}) {}
export class DeleteWirelessGatewayTaskDefinitionRequest extends S.Class<DeleteWirelessGatewayTaskDefinitionRequest>("DeleteWirelessGatewayTaskDefinitionRequest")({Id: S.String}) {}
export class DeleteWirelessGatewayTaskDefinitionResponse extends S.Class<DeleteWirelessGatewayTaskDefinitionResponse>("DeleteWirelessGatewayTaskDefinitionResponse")({}) {}
export class DeregisterWirelessDeviceRequest extends S.Class<DeregisterWirelessDeviceRequest>("DeregisterWirelessDeviceRequest")({Identifier: S.String, WirelessDeviceType: S.optional(S.String)}) {}
export class DeregisterWirelessDeviceResponse extends S.Class<DeregisterWirelessDeviceResponse>("DeregisterWirelessDeviceResponse")({}) {}
export class DisassociateAwsAccountFromPartnerAccountRequest extends S.Class<DisassociateAwsAccountFromPartnerAccountRequest>("DisassociateAwsAccountFromPartnerAccountRequest")({PartnerAccountId: S.String, PartnerType: S.String}) {}
export class DisassociateAwsAccountFromPartnerAccountResponse extends S.Class<DisassociateAwsAccountFromPartnerAccountResponse>("DisassociateAwsAccountFromPartnerAccountResponse")({}) {}
export class DisassociateMulticastGroupFromFuotaTaskRequest extends S.Class<DisassociateMulticastGroupFromFuotaTaskRequest>("DisassociateMulticastGroupFromFuotaTaskRequest")({Id: S.String, MulticastGroupId: S.String}) {}
export class DisassociateMulticastGroupFromFuotaTaskResponse extends S.Class<DisassociateMulticastGroupFromFuotaTaskResponse>("DisassociateMulticastGroupFromFuotaTaskResponse")({}) {}
export class DisassociateWirelessDeviceFromFuotaTaskRequest extends S.Class<DisassociateWirelessDeviceFromFuotaTaskRequest>("DisassociateWirelessDeviceFromFuotaTaskRequest")({Id: S.String, WirelessDeviceId: S.String}) {}
export class DisassociateWirelessDeviceFromFuotaTaskResponse extends S.Class<DisassociateWirelessDeviceFromFuotaTaskResponse>("DisassociateWirelessDeviceFromFuotaTaskResponse")({}) {}
export class DisassociateWirelessDeviceFromMulticastGroupRequest extends S.Class<DisassociateWirelessDeviceFromMulticastGroupRequest>("DisassociateWirelessDeviceFromMulticastGroupRequest")({Id: S.String, WirelessDeviceId: S.String}) {}
export class DisassociateWirelessDeviceFromMulticastGroupResponse extends S.Class<DisassociateWirelessDeviceFromMulticastGroupResponse>("DisassociateWirelessDeviceFromMulticastGroupResponse")({}) {}
export class DisassociateWirelessDeviceFromThingRequest extends S.Class<DisassociateWirelessDeviceFromThingRequest>("DisassociateWirelessDeviceFromThingRequest")({Id: S.String}) {}
export class DisassociateWirelessDeviceFromThingResponse extends S.Class<DisassociateWirelessDeviceFromThingResponse>("DisassociateWirelessDeviceFromThingResponse")({}) {}
export class DisassociateWirelessGatewayFromCertificateRequest extends S.Class<DisassociateWirelessGatewayFromCertificateRequest>("DisassociateWirelessGatewayFromCertificateRequest")({Id: S.String}) {}
export class DisassociateWirelessGatewayFromCertificateResponse extends S.Class<DisassociateWirelessGatewayFromCertificateResponse>("DisassociateWirelessGatewayFromCertificateResponse")({}) {}
export class DisassociateWirelessGatewayFromThingRequest extends S.Class<DisassociateWirelessGatewayFromThingRequest>("DisassociateWirelessGatewayFromThingRequest")({Id: S.String}) {}
export class DisassociateWirelessGatewayFromThingResponse extends S.Class<DisassociateWirelessGatewayFromThingResponse>("DisassociateWirelessGatewayFromThingResponse")({}) {}
export class GetDestinationRequest extends S.Class<GetDestinationRequest>("GetDestinationRequest")({Name: S.String}) {}
export class GetDeviceProfileRequest extends S.Class<GetDeviceProfileRequest>("GetDeviceProfileRequest")({Id: S.String}) {}
export class GetFuotaTaskRequest extends S.Class<GetFuotaTaskRequest>("GetFuotaTaskRequest")({Id: S.String}) {}
export class GetMulticastGroupRequest extends S.Class<GetMulticastGroupRequest>("GetMulticastGroupRequest")({Id: S.String}) {}
export class GetMulticastGroupSessionRequest extends S.Class<GetMulticastGroupSessionRequest>("GetMulticastGroupSessionRequest")({Id: S.String}) {}
export class GetNetworkAnalyzerConfigurationRequest extends S.Class<GetNetworkAnalyzerConfigurationRequest>("GetNetworkAnalyzerConfigurationRequest")({ConfigurationName: S.String}) {}
export class GetPartnerAccountRequest extends S.Class<GetPartnerAccountRequest>("GetPartnerAccountRequest")({PartnerAccountId: S.String, PartnerType: S.String}) {}
export class GetPositionRequest extends S.Class<GetPositionRequest>("GetPositionRequest")({ResourceIdentifier: S.String, ResourceType: S.String}) {}
export class GetPositionConfigurationRequest extends S.Class<GetPositionConfigurationRequest>("GetPositionConfigurationRequest")({ResourceIdentifier: S.String, ResourceType: S.String}) {}
export class GetResourceEventConfigurationRequest extends S.Class<GetResourceEventConfigurationRequest>("GetResourceEventConfigurationRequest")({Identifier: S.String, IdentifierType: S.String, PartnerType: S.optional(S.String)}) {}
export class GetResourceLogLevelRequest extends S.Class<GetResourceLogLevelRequest>("GetResourceLogLevelRequest")({ResourceIdentifier: S.String, ResourceType: S.String}) {}
export class GetResourcePositionRequest extends S.Class<GetResourcePositionRequest>("GetResourcePositionRequest")({ResourceIdentifier: S.String, ResourceType: S.String}) {}
export class GetServiceEndpointRequest extends S.Class<GetServiceEndpointRequest>("GetServiceEndpointRequest")({ServiceType: S.optional(S.String)}) {}
export class GetServiceProfileRequest extends S.Class<GetServiceProfileRequest>("GetServiceProfileRequest")({Id: S.String}) {}
export class GetWirelessDeviceRequest extends S.Class<GetWirelessDeviceRequest>("GetWirelessDeviceRequest")({Identifier: S.String, IdentifierType: S.String}) {}
export class GetWirelessDeviceImportTaskRequest extends S.Class<GetWirelessDeviceImportTaskRequest>("GetWirelessDeviceImportTaskRequest")({Id: S.String}) {}
export class GetWirelessDeviceStatisticsRequest extends S.Class<GetWirelessDeviceStatisticsRequest>("GetWirelessDeviceStatisticsRequest")({WirelessDeviceId: S.String}) {}
export class GetWirelessGatewayRequest extends S.Class<GetWirelessGatewayRequest>("GetWirelessGatewayRequest")({Identifier: S.String, IdentifierType: S.String}) {}
export class GetWirelessGatewayCertificateRequest extends S.Class<GetWirelessGatewayCertificateRequest>("GetWirelessGatewayCertificateRequest")({Id: S.String}) {}
export class GetWirelessGatewayFirmwareInformationRequest extends S.Class<GetWirelessGatewayFirmwareInformationRequest>("GetWirelessGatewayFirmwareInformationRequest")({Id: S.String}) {}
export class GetWirelessGatewayStatisticsRequest extends S.Class<GetWirelessGatewayStatisticsRequest>("GetWirelessGatewayStatisticsRequest")({WirelessGatewayId: S.String}) {}
export class GetWirelessGatewayTaskRequest extends S.Class<GetWirelessGatewayTaskRequest>("GetWirelessGatewayTaskRequest")({Id: S.String}) {}
export class GetWirelessGatewayTaskDefinitionRequest extends S.Class<GetWirelessGatewayTaskDefinitionRequest>("GetWirelessGatewayTaskDefinitionRequest")({Id: S.String}) {}
export class ListDestinationsRequest extends S.Class<ListDestinationsRequest>("ListDestinationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListDeviceProfilesRequest extends S.Class<ListDeviceProfilesRequest>("ListDeviceProfilesRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), DeviceProfileType: S.optional(S.String)}) {}
export class ListDevicesForWirelessDeviceImportTaskRequest extends S.Class<ListDevicesForWirelessDeviceImportTaskRequest>("ListDevicesForWirelessDeviceImportTaskRequest")({Id: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Status: S.optional(S.String)}) {}
export class ListEventConfigurationsRequest extends S.Class<ListEventConfigurationsRequest>("ListEventConfigurationsRequest")({ResourceType: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListFuotaTasksRequest extends S.Class<ListFuotaTasksRequest>("ListFuotaTasksRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListMulticastGroupsRequest extends S.Class<ListMulticastGroupsRequest>("ListMulticastGroupsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListMulticastGroupsByFuotaTaskRequest extends S.Class<ListMulticastGroupsByFuotaTaskRequest>("ListMulticastGroupsByFuotaTaskRequest")({Id: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListNetworkAnalyzerConfigurationsRequest extends S.Class<ListNetworkAnalyzerConfigurationsRequest>("ListNetworkAnalyzerConfigurationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListPartnerAccountsRequest extends S.Class<ListPartnerAccountsRequest>("ListPartnerAccountsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListPositionConfigurationsRequest extends S.Class<ListPositionConfigurationsRequest>("ListPositionConfigurationsRequest")({ResourceType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListQueuedMessagesRequest extends S.Class<ListQueuedMessagesRequest>("ListQueuedMessagesRequest")({Id: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), WirelessDeviceType: S.optional(S.String)}) {}
export class ListServiceProfilesRequest extends S.Class<ListServiceProfilesRequest>("ListServiceProfilesRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class ListWirelessDeviceImportTasksRequest extends S.Class<ListWirelessDeviceImportTasksRequest>("ListWirelessDeviceImportTasksRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListWirelessDevicesRequest extends S.Class<ListWirelessDevicesRequest>("ListWirelessDevicesRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), DestinationName: S.optional(S.String), DeviceProfileId: S.optional(S.String), ServiceProfileId: S.optional(S.String), WirelessDeviceType: S.optional(S.String), FuotaTaskId: S.optional(S.String), MulticastGroupId: S.optional(S.String)}) {}
export class ListWirelessGatewaysRequest extends S.Class<ListWirelessGatewaysRequest>("ListWirelessGatewaysRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListWirelessGatewayTaskDefinitionsRequest extends S.Class<ListWirelessGatewayTaskDefinitionsRequest>("ListWirelessGatewayTaskDefinitionsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), TaskDefinitionType: S.optional(S.String)}) {}
export class PutResourceLogLevelRequest extends S.Class<PutResourceLogLevelRequest>("PutResourceLogLevelRequest")({ResourceIdentifier: S.String, ResourceType: S.String, LogLevel: S.String}) {}
export class PutResourceLogLevelResponse extends S.Class<PutResourceLogLevelResponse>("PutResourceLogLevelResponse")({}) {}
export class ResetResourceLogLevelRequest extends S.Class<ResetResourceLogLevelRequest>("ResetResourceLogLevelRequest")({ResourceIdentifier: S.String, ResourceType: S.String}) {}
export class ResetResourceLogLevelResponse extends S.Class<ResetResourceLogLevelResponse>("ResetResourceLogLevelResponse")({}) {}
export class StartBulkAssociateWirelessDeviceWithMulticastGroupRequest extends S.Class<StartBulkAssociateWirelessDeviceWithMulticastGroupRequest>("StartBulkAssociateWirelessDeviceWithMulticastGroupRequest")({Id: S.String, QueryString: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class StartBulkAssociateWirelessDeviceWithMulticastGroupResponse extends S.Class<StartBulkAssociateWirelessDeviceWithMulticastGroupResponse>("StartBulkAssociateWirelessDeviceWithMulticastGroupResponse")({}) {}
export class StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest extends S.Class<StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest>("StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest")({Id: S.String, QueryString: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse extends S.Class<StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse>("StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse")({}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class TestWirelessDeviceRequest extends S.Class<TestWirelessDeviceRequest>("TestWirelessDeviceRequest")({Id: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateDestinationRequest extends S.Class<UpdateDestinationRequest>("UpdateDestinationRequest")({Name: S.String, ExpressionType: S.optional(S.String), Expression: S.optional(S.String), Description: S.optional(S.String), RoleArn: S.optional(S.String)}) {}
export class UpdateDestinationResponse extends S.Class<UpdateDestinationResponse>("UpdateDestinationResponse")({}) {}
export class SidewalkResourceTypeEventConfiguration extends S.Class<SidewalkResourceTypeEventConfiguration>("SidewalkResourceTypeEventConfiguration")({WirelessDeviceEventTopic: S.optional(S.String)}) {}
export class DeviceRegistrationStateResourceTypeEventConfiguration extends S.Class<DeviceRegistrationStateResourceTypeEventConfiguration>("DeviceRegistrationStateResourceTypeEventConfiguration")({Sidewalk: S.optional(SidewalkResourceTypeEventConfiguration)}) {}
export class ProximityResourceTypeEventConfiguration extends S.Class<ProximityResourceTypeEventConfiguration>("ProximityResourceTypeEventConfiguration")({Sidewalk: S.optional(SidewalkResourceTypeEventConfiguration)}) {}
export class LoRaWANJoinResourceTypeEventConfiguration extends S.Class<LoRaWANJoinResourceTypeEventConfiguration>("LoRaWANJoinResourceTypeEventConfiguration")({WirelessDeviceEventTopic: S.optional(S.String)}) {}
export class JoinResourceTypeEventConfiguration extends S.Class<JoinResourceTypeEventConfiguration>("JoinResourceTypeEventConfiguration")({LoRaWAN: S.optional(LoRaWANJoinResourceTypeEventConfiguration)}) {}
export class LoRaWANConnectionStatusResourceTypeEventConfiguration extends S.Class<LoRaWANConnectionStatusResourceTypeEventConfiguration>("LoRaWANConnectionStatusResourceTypeEventConfiguration")({WirelessGatewayEventTopic: S.optional(S.String)}) {}
export class ConnectionStatusResourceTypeEventConfiguration extends S.Class<ConnectionStatusResourceTypeEventConfiguration>("ConnectionStatusResourceTypeEventConfiguration")({LoRaWAN: S.optional(LoRaWANConnectionStatusResourceTypeEventConfiguration)}) {}
export class MessageDeliveryStatusResourceTypeEventConfiguration extends S.Class<MessageDeliveryStatusResourceTypeEventConfiguration>("MessageDeliveryStatusResourceTypeEventConfiguration")({Sidewalk: S.optional(SidewalkResourceTypeEventConfiguration)}) {}
export class UpdateEventConfigurationByResourceTypesRequest extends S.Class<UpdateEventConfigurationByResourceTypesRequest>("UpdateEventConfigurationByResourceTypesRequest")({DeviceRegistrationState: S.optional(DeviceRegistrationStateResourceTypeEventConfiguration), Proximity: S.optional(ProximityResourceTypeEventConfiguration), Join: S.optional(JoinResourceTypeEventConfiguration), ConnectionStatus: S.optional(ConnectionStatusResourceTypeEventConfiguration), MessageDeliveryStatus: S.optional(MessageDeliveryStatusResourceTypeEventConfiguration)}) {}
export class UpdateEventConfigurationByResourceTypesResponse extends S.Class<UpdateEventConfigurationByResourceTypesResponse>("UpdateEventConfigurationByResourceTypesResponse")({}) {}
export class LoRaWANFuotaTask extends S.Class<LoRaWANFuotaTask>("LoRaWANFuotaTask")({RfRegion: S.optional(S.String)}) {}
export class UpdateFuotaTaskRequest extends S.Class<UpdateFuotaTaskRequest>("UpdateFuotaTaskRequest")({Id: S.String, Name: S.optional(S.String), Description: S.optional(S.String), LoRaWAN: S.optional(LoRaWANFuotaTask), FirmwareUpdateImage: S.optional(S.String), FirmwareUpdateRole: S.optional(S.String), RedundancyPercent: S.optional(S.Number), FragmentSizeBytes: S.optional(S.Number), FragmentIntervalMS: S.optional(S.Number), Descriptor: S.optional(S.String)}) {}
export class UpdateFuotaTaskResponse extends S.Class<UpdateFuotaTaskResponse>("UpdateFuotaTaskResponse")({}) {}
export class FuotaTaskEventLogOption extends S.Class<FuotaTaskEventLogOption>("FuotaTaskEventLogOption")({Event: S.String, LogLevel: S.String}) {}
export const FuotaTaskEventLogOptionList = S.Array(FuotaTaskEventLogOption);
export class FuotaTaskLogOption extends S.Class<FuotaTaskLogOption>("FuotaTaskLogOption")({Type: S.String, LogLevel: S.String, Events: S.optional(FuotaTaskEventLogOptionList)}) {}
export const FuotaTaskLogOptionList = S.Array(FuotaTaskLogOption);
export class WirelessDeviceEventLogOption extends S.Class<WirelessDeviceEventLogOption>("WirelessDeviceEventLogOption")({Event: S.String, LogLevel: S.String}) {}
export const WirelessDeviceEventLogOptionList = S.Array(WirelessDeviceEventLogOption);
export class WirelessDeviceLogOption extends S.Class<WirelessDeviceLogOption>("WirelessDeviceLogOption")({Type: S.String, LogLevel: S.String, Events: S.optional(WirelessDeviceEventLogOptionList)}) {}
export const WirelessDeviceLogOptionList = S.Array(WirelessDeviceLogOption);
export class WirelessGatewayEventLogOption extends S.Class<WirelessGatewayEventLogOption>("WirelessGatewayEventLogOption")({Event: S.String, LogLevel: S.String}) {}
export const WirelessGatewayEventLogOptionList = S.Array(WirelessGatewayEventLogOption);
export class WirelessGatewayLogOption extends S.Class<WirelessGatewayLogOption>("WirelessGatewayLogOption")({Type: S.String, LogLevel: S.String, Events: S.optional(WirelessGatewayEventLogOptionList)}) {}
export const WirelessGatewayLogOptionList = S.Array(WirelessGatewayLogOption);
export class UpdateLogLevelsByResourceTypesRequest extends S.Class<UpdateLogLevelsByResourceTypesRequest>("UpdateLogLevelsByResourceTypesRequest")({DefaultLogLevel: S.optional(S.String), FuotaTaskLogOptions: S.optional(FuotaTaskLogOptionList), WirelessDeviceLogOptions: S.optional(WirelessDeviceLogOptionList), WirelessGatewayLogOptions: S.optional(WirelessGatewayLogOptionList)}) {}
export class UpdateLogLevelsByResourceTypesResponse extends S.Class<UpdateLogLevelsByResourceTypesResponse>("UpdateLogLevelsByResourceTypesResponse")({}) {}
export class SummaryMetricConfiguration extends S.Class<SummaryMetricConfiguration>("SummaryMetricConfiguration")({Status: S.optional(S.String)}) {}
export class UpdateMetricConfigurationRequest extends S.Class<UpdateMetricConfigurationRequest>("UpdateMetricConfigurationRequest")({SummaryMetric: S.optional(SummaryMetricConfiguration)}) {}
export class UpdateMetricConfigurationResponse extends S.Class<UpdateMetricConfigurationResponse>("UpdateMetricConfigurationResponse")({}) {}
export const GatewayListMulticast = S.Array(S.String);
export class ParticipatingGatewaysMulticast extends S.Class<ParticipatingGatewaysMulticast>("ParticipatingGatewaysMulticast")({GatewayList: S.optional(GatewayListMulticast), TransmissionInterval: S.optional(S.Number)}) {}
export class LoRaWANMulticast extends S.Class<LoRaWANMulticast>("LoRaWANMulticast")({RfRegion: S.optional(S.String), DlClass: S.optional(S.String), ParticipatingGateways: S.optional(ParticipatingGatewaysMulticast)}) {}
export class UpdateMulticastGroupRequest extends S.Class<UpdateMulticastGroupRequest>("UpdateMulticastGroupRequest")({Id: S.String, Name: S.optional(S.String), Description: S.optional(S.String), LoRaWAN: S.optional(LoRaWANMulticast)}) {}
export class UpdateMulticastGroupResponse extends S.Class<UpdateMulticastGroupResponse>("UpdateMulticastGroupResponse")({}) {}
export class TraceContent extends S.Class<TraceContent>("TraceContent")({WirelessDeviceFrameInfo: S.optional(S.String), LogLevel: S.optional(S.String), MulticastFrameInfo: S.optional(S.String)}) {}
export class UpdateNetworkAnalyzerConfigurationRequest extends S.Class<UpdateNetworkAnalyzerConfigurationRequest>("UpdateNetworkAnalyzerConfigurationRequest")({ConfigurationName: S.String, TraceContent: S.optional(TraceContent), WirelessDevicesToAdd: S.optional(WirelessDeviceList), WirelessDevicesToRemove: S.optional(WirelessDeviceList), WirelessGatewaysToAdd: S.optional(WirelessGatewayList), WirelessGatewaysToRemove: S.optional(WirelessGatewayList), Description: S.optional(S.String), MulticastGroupsToAdd: S.optional(NetworkAnalyzerMulticastGroupList), MulticastGroupsToRemove: S.optional(NetworkAnalyzerMulticastGroupList)}) {}
export class UpdateNetworkAnalyzerConfigurationResponse extends S.Class<UpdateNetworkAnalyzerConfigurationResponse>("UpdateNetworkAnalyzerConfigurationResponse")({}) {}
export class UpdatePositionRequest extends S.Class<UpdatePositionRequest>("UpdatePositionRequest")({ResourceIdentifier: S.String, ResourceType: S.String, Position: PositionCoordinate}) {}
export class UpdatePositionResponse extends S.Class<UpdatePositionResponse>("UpdatePositionResponse")({}) {}
export class UpdateResourcePositionRequest extends S.Class<UpdateResourcePositionRequest>("UpdateResourcePositionRequest")({ResourceIdentifier: S.String, ResourceType: S.String, GeoJsonPayload: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class UpdateResourcePositionResponse extends S.Class<UpdateResourcePositionResponse>("UpdateResourcePositionResponse")({}) {}
export class UpdateWirelessGatewayRequest extends S.Class<UpdateWirelessGatewayRequest>("UpdateWirelessGatewayRequest")({Id: S.String, Name: S.optional(S.String), Description: S.optional(S.String), JoinEuiFilters: S.optional(JoinEuiFilters), NetIdFilters: S.optional(NetIdFilters), MaxEirp: S.optional(S.Number)}) {}
export class UpdateWirelessGatewayResponse extends S.Class<UpdateWirelessGatewayResponse>("UpdateWirelessGatewayResponse")({}) {}
export const FactoryPresetFreqsList = S.Array(S.Number);
export const SubBands = S.Array(S.Number);
export const AssistPosition = S.Array(S.Number);
export class SidewalkAccountInfo extends S.Class<SidewalkAccountInfo>("SidewalkAccountInfo")({AmazonId: S.optional(S.String), AppServerPrivateKey: S.optional(S.String)}) {}
export class LoRaWANDeviceProfile extends S.Class<LoRaWANDeviceProfile>("LoRaWANDeviceProfile")({SupportsClassB: S.optional(S.Boolean), ClassBTimeout: S.optional(S.Number), PingSlotPeriod: S.optional(S.Number), PingSlotDr: S.optional(S.Number), PingSlotFreq: S.optional(S.Number), SupportsClassC: S.optional(S.Boolean), ClassCTimeout: S.optional(S.Number), MacVersion: S.optional(S.String), RegParamsRevision: S.optional(S.String), RxDelay1: S.optional(S.Number), RxDrOffset1: S.optional(S.Number), RxDataRate2: S.optional(S.Number), RxFreq2: S.optional(S.Number), FactoryPresetFreqsList: S.optional(FactoryPresetFreqsList), MaxEirp: S.optional(S.Number), MaxDutyCycle: S.optional(S.Number), RfRegion: S.optional(S.String), SupportsJoin: S.optional(S.Boolean), Supports32BitFCnt: S.optional(S.Boolean)}) {}
export class LoRaWANServiceProfile extends S.Class<LoRaWANServiceProfile>("LoRaWANServiceProfile")({AddGwMetadata: S.optional(S.Boolean), DrMin: S.optional(S.Number), DrMax: S.optional(S.Number), PrAllowed: S.optional(S.Boolean), RaAllowed: S.optional(S.Boolean), TxPowerIndexMin: S.optional(S.Number), TxPowerIndexMax: S.optional(S.Number), NbTransMin: S.optional(S.Number), NbTransMax: S.optional(S.Number)}) {}
export class WiFiAccessPoint extends S.Class<WiFiAccessPoint>("WiFiAccessPoint")({MacAddress: S.String, Rss: S.Number}) {}
export const WiFiAccessPoints = S.Array(WiFiAccessPoint);
export class Ip extends S.Class<Ip>("Ip")({IpAddress: S.String}) {}
export class Gnss extends S.Class<Gnss>("Gnss")({Payload: S.String, CaptureTime: S.optional(S.Number), CaptureTimeAccuracy: S.optional(S.Number), AssistPosition: S.optional(AssistPosition), AssistAltitude: S.optional(S.Number), Use2DSolver: S.optional(S.Boolean)}) {}
export class SidewalkAccountInfoWithFingerprint extends S.Class<SidewalkAccountInfoWithFingerprint>("SidewalkAccountInfoWithFingerprint")({AmazonId: S.optional(S.String), Fingerprint: S.optional(S.String), Arn: S.optional(S.String)}) {}
export const SidewalkAccountList = S.Array(SidewalkAccountInfoWithFingerprint);
export class LoRaWANStartFuotaTask extends S.Class<LoRaWANStartFuotaTask>("LoRaWANStartFuotaTask")({StartTime: S.optional(S.Date)}) {}
export class LoRaWANMulticastSession extends S.Class<LoRaWANMulticastSession>("LoRaWANMulticastSession")({DlDr: S.optional(S.Number), DlFreq: S.optional(S.Number), SessionStartTime: S.optional(S.Date), SessionTimeout: S.optional(S.Number), PingSlotPeriod: S.optional(S.Number)}) {}
export class SidewalkPositioning extends S.Class<SidewalkPositioning>("SidewalkPositioning")({DestinationName: S.optional(S.String)}) {}
export class SidewalkSingleStartImportInfo extends S.Class<SidewalkSingleStartImportInfo>("SidewalkSingleStartImportInfo")({SidewalkManufacturingSn: S.optional(S.String), Positioning: S.optional(SidewalkPositioning)}) {}
export class SidewalkStartImportInfo extends S.Class<SidewalkStartImportInfo>("SidewalkStartImportInfo")({DeviceCreationFile: S.optional(S.String), Role: S.optional(S.String), Positioning: S.optional(SidewalkPositioning)}) {}
export class SidewalkUpdateAccount extends S.Class<SidewalkUpdateAccount>("SidewalkUpdateAccount")({AppServerPrivateKey: S.optional(S.String)}) {}
export class SidewalkEventNotificationConfigurations extends S.Class<SidewalkEventNotificationConfigurations>("SidewalkEventNotificationConfigurations")({AmazonIdEventTopic: S.optional(S.String)}) {}
export class ProximityEventConfiguration extends S.Class<ProximityEventConfiguration>("ProximityEventConfiguration")({Sidewalk: S.optional(SidewalkEventNotificationConfigurations), WirelessDeviceIdEventTopic: S.optional(S.String)}) {}
export class MessageDeliveryStatusEventConfiguration extends S.Class<MessageDeliveryStatusEventConfiguration>("MessageDeliveryStatusEventConfiguration")({Sidewalk: S.optional(SidewalkEventNotificationConfigurations), WirelessDeviceIdEventTopic: S.optional(S.String)}) {}
export class SidewalkUpdateWirelessDevice extends S.Class<SidewalkUpdateWirelessDevice>("SidewalkUpdateWirelessDevice")({Positioning: S.optional(SidewalkPositioning)}) {}
export class SidewalkUpdateImportInfo extends S.Class<SidewalkUpdateImportInfo>("SidewalkUpdateImportInfo")({DeviceCreationFile: S.optional(S.String)}) {}
export const BeaconingFrequencies = S.Array(S.Number);
export class AssociateAwsAccountWithPartnerAccountRequest extends S.Class<AssociateAwsAccountWithPartnerAccountRequest>("AssociateAwsAccountWithPartnerAccountRequest")({Sidewalk: SidewalkAccountInfo, ClientRequestToken: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class AssociateWirelessGatewayWithCertificateResponse extends S.Class<AssociateWirelessGatewayWithCertificateResponse>("AssociateWirelessGatewayWithCertificateResponse")({IotCertificateId: S.optional(S.String)}) {}
export class CreateDestinationResponse extends S.Class<CreateDestinationResponse>("CreateDestinationResponse")({Arn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateDeviceProfileRequest extends S.Class<CreateDeviceProfileRequest>("CreateDeviceProfileRequest")({Name: S.optional(S.String), LoRaWAN: S.optional(LoRaWANDeviceProfile), Tags: S.optional(TagList), ClientRequestToken: S.optional(S.String), Sidewalk: S.optional(SidewalkCreateDeviceProfile)}) {}
export class CreateFuotaTaskRequest extends S.Class<CreateFuotaTaskRequest>("CreateFuotaTaskRequest")({Name: S.optional(S.String), Description: S.optional(S.String), ClientRequestToken: S.optional(S.String), LoRaWAN: S.optional(LoRaWANFuotaTask), FirmwareUpdateImage: S.String, FirmwareUpdateRole: S.String, Tags: S.optional(TagList), RedundancyPercent: S.optional(S.Number), FragmentSizeBytes: S.optional(S.Number), FragmentIntervalMS: S.optional(S.Number), Descriptor: S.optional(S.String)}) {}
export class CreateNetworkAnalyzerConfigurationRequest extends S.Class<CreateNetworkAnalyzerConfigurationRequest>("CreateNetworkAnalyzerConfigurationRequest")({Name: S.String, TraceContent: S.optional(TraceContent), WirelessDevices: S.optional(WirelessDeviceList), WirelessGateways: S.optional(WirelessGatewayList), Description: S.optional(S.String), Tags: S.optional(TagList), ClientRequestToken: S.optional(S.String), MulticastGroups: S.optional(NetworkAnalyzerMulticastGroupList)}) {}
export class CreateServiceProfileRequest extends S.Class<CreateServiceProfileRequest>("CreateServiceProfileRequest")({Name: S.optional(S.String), LoRaWAN: S.optional(LoRaWANServiceProfile), Tags: S.optional(TagList), ClientRequestToken: S.optional(S.String)}) {}
export class CreateWirelessGatewayTaskResponse extends S.Class<CreateWirelessGatewayTaskResponse>("CreateWirelessGatewayTaskResponse")({WirelessGatewayTaskDefinitionId: S.optional(S.String), Status: S.optional(S.String)}) {}
export class GetDestinationResponse extends S.Class<GetDestinationResponse>("GetDestinationResponse")({Arn: S.optional(S.String), Name: S.optional(S.String), Expression: S.optional(S.String), ExpressionType: S.optional(S.String), Description: S.optional(S.String), RoleArn: S.optional(S.String)}) {}
export class GetMetricConfigurationResponse extends S.Class<GetMetricConfigurationResponse>("GetMetricConfigurationResponse")({SummaryMetric: S.optional(SummaryMetricConfiguration)}) {}
export class GetMulticastGroupSessionResponse extends S.Class<GetMulticastGroupSessionResponse>("GetMulticastGroupSessionResponse")({LoRaWAN: S.optional(LoRaWANMulticastSession)}) {}
export class GetNetworkAnalyzerConfigurationResponse extends S.Class<GetNetworkAnalyzerConfigurationResponse>("GetNetworkAnalyzerConfigurationResponse")({TraceContent: S.optional(TraceContent), WirelessDevices: S.optional(WirelessDeviceList), WirelessGateways: S.optional(WirelessGatewayList), Description: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String), MulticastGroups: S.optional(NetworkAnalyzerMulticastGroupList)}) {}
export class DeviceRegistrationStateEventConfiguration extends S.Class<DeviceRegistrationStateEventConfiguration>("DeviceRegistrationStateEventConfiguration")({Sidewalk: S.optional(SidewalkEventNotificationConfigurations), WirelessDeviceIdEventTopic: S.optional(S.String)}) {}
export class LoRaWANJoinEventNotificationConfigurations extends S.Class<LoRaWANJoinEventNotificationConfigurations>("LoRaWANJoinEventNotificationConfigurations")({DevEuiEventTopic: S.optional(S.String)}) {}
export class JoinEventConfiguration extends S.Class<JoinEventConfiguration>("JoinEventConfiguration")({LoRaWAN: S.optional(LoRaWANJoinEventNotificationConfigurations), WirelessDeviceIdEventTopic: S.optional(S.String)}) {}
export class LoRaWANConnectionStatusEventNotificationConfigurations extends S.Class<LoRaWANConnectionStatusEventNotificationConfigurations>("LoRaWANConnectionStatusEventNotificationConfigurations")({GatewayEuiEventTopic: S.optional(S.String)}) {}
export class ConnectionStatusEventConfiguration extends S.Class<ConnectionStatusEventConfiguration>("ConnectionStatusEventConfiguration")({LoRaWAN: S.optional(LoRaWANConnectionStatusEventNotificationConfigurations), WirelessGatewayIdEventTopic: S.optional(S.String)}) {}
export class GetResourceEventConfigurationResponse extends S.Class<GetResourceEventConfigurationResponse>("GetResourceEventConfigurationResponse")({DeviceRegistrationState: S.optional(DeviceRegistrationStateEventConfiguration), Proximity: S.optional(ProximityEventConfiguration), Join: S.optional(JoinEventConfiguration), ConnectionStatus: S.optional(ConnectionStatusEventConfiguration), MessageDeliveryStatus: S.optional(MessageDeliveryStatusEventConfiguration)}) {}
export class GetResourceLogLevelResponse extends S.Class<GetResourceLogLevelResponse>("GetResourceLogLevelResponse")({LogLevel: S.optional(S.String)}) {}
export class GetResourcePositionResponse extends S.Class<GetResourcePositionResponse>("GetResourcePositionResponse")({GeoJsonPayload: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class GetServiceEndpointResponse extends S.Class<GetServiceEndpointResponse>("GetServiceEndpointResponse")({ServiceType: S.optional(S.String), ServiceEndpoint: S.optional(S.String), ServerTrust: S.optional(S.String)}) {}
export class Beaconing extends S.Class<Beaconing>("Beaconing")({DataRate: S.optional(S.Number), Frequencies: S.optional(BeaconingFrequencies)}) {}
export class LoRaWANGateway extends S.Class<LoRaWANGateway>("LoRaWANGateway")({GatewayEui: S.optional(S.String), RfRegion: S.optional(S.String), JoinEuiFilters: S.optional(JoinEuiFilters), NetIdFilters: S.optional(NetIdFilters), SubBands: S.optional(SubBands), Beaconing: S.optional(Beaconing), MaxEirp: S.optional(S.Number)}) {}
export class GetWirelessGatewayResponse extends S.Class<GetWirelessGatewayResponse>("GetWirelessGatewayResponse")({Name: S.optional(S.String), Id: S.optional(S.String), Description: S.optional(S.String), LoRaWAN: S.optional(LoRaWANGateway), Arn: S.optional(S.String), ThingName: S.optional(S.String), ThingArn: S.optional(S.String)}) {}
export class GetWirelessGatewayCertificateResponse extends S.Class<GetWirelessGatewayCertificateResponse>("GetWirelessGatewayCertificateResponse")({IotCertificateId: S.optional(S.String), LoRaWANNetworkServerCertificateId: S.optional(S.String)}) {}
export class GetWirelessGatewayStatisticsResponse extends S.Class<GetWirelessGatewayStatisticsResponse>("GetWirelessGatewayStatisticsResponse")({WirelessGatewayId: S.optional(S.String), LastUplinkReceivedAt: S.optional(S.String), ConnectionStatus: S.optional(S.String)}) {}
export class GetWirelessGatewayTaskResponse extends S.Class<GetWirelessGatewayTaskResponse>("GetWirelessGatewayTaskResponse")({WirelessGatewayId: S.optional(S.String), WirelessGatewayTaskDefinitionId: S.optional(S.String), LastUplinkReceivedAt: S.optional(S.String), TaskCreatedAt: S.optional(S.String), Status: S.optional(S.String)}) {}
export class LoRaWANGatewayVersion extends S.Class<LoRaWANGatewayVersion>("LoRaWANGatewayVersion")({PackageVersion: S.optional(S.String), Model: S.optional(S.String), Station: S.optional(S.String)}) {}
export class LoRaWANUpdateGatewayTaskCreate extends S.Class<LoRaWANUpdateGatewayTaskCreate>("LoRaWANUpdateGatewayTaskCreate")({UpdateSignature: S.optional(S.String), SigKeyCrc: S.optional(S.Number), CurrentVersion: S.optional(LoRaWANGatewayVersion), UpdateVersion: S.optional(LoRaWANGatewayVersion)}) {}
export class UpdateWirelessGatewayTaskCreate extends S.Class<UpdateWirelessGatewayTaskCreate>("UpdateWirelessGatewayTaskCreate")({UpdateDataSource: S.optional(S.String), UpdateDataRole: S.optional(S.String), LoRaWAN: S.optional(LoRaWANUpdateGatewayTaskCreate)}) {}
export class GetWirelessGatewayTaskDefinitionResponse extends S.Class<GetWirelessGatewayTaskDefinitionResponse>("GetWirelessGatewayTaskDefinitionResponse")({AutoCreateTasks: S.optional(S.Boolean), Name: S.optional(S.String), Update: S.optional(UpdateWirelessGatewayTaskCreate), Arn: S.optional(S.String)}) {}
export class ListPartnerAccountsResponse extends S.Class<ListPartnerAccountsResponse>("ListPartnerAccountsResponse")({NextToken: S.optional(S.String), Sidewalk: S.optional(SidewalkAccountList)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class StartFuotaTaskRequest extends S.Class<StartFuotaTaskRequest>("StartFuotaTaskRequest")({Id: S.String, LoRaWAN: S.optional(LoRaWANStartFuotaTask)}) {}
export class StartFuotaTaskResponse extends S.Class<StartFuotaTaskResponse>("StartFuotaTaskResponse")({}) {}
export class StartMulticastGroupSessionRequest extends S.Class<StartMulticastGroupSessionRequest>("StartMulticastGroupSessionRequest")({Id: S.String, LoRaWAN: LoRaWANMulticastSession}) {}
export class StartMulticastGroupSessionResponse extends S.Class<StartMulticastGroupSessionResponse>("StartMulticastGroupSessionResponse")({}) {}
export class StartSingleWirelessDeviceImportTaskRequest extends S.Class<StartSingleWirelessDeviceImportTaskRequest>("StartSingleWirelessDeviceImportTaskRequest")({DestinationName: S.String, ClientRequestToken: S.optional(S.String), DeviceName: S.optional(S.String), Tags: S.optional(TagList), Positioning: S.optional(S.String), Sidewalk: SidewalkSingleStartImportInfo}) {}
export class StartWirelessDeviceImportTaskRequest extends S.Class<StartWirelessDeviceImportTaskRequest>("StartWirelessDeviceImportTaskRequest")({DestinationName: S.String, ClientRequestToken: S.optional(S.String), Tags: S.optional(TagList), Positioning: S.optional(S.String), Sidewalk: SidewalkStartImportInfo}) {}
export class TestWirelessDeviceResponse extends S.Class<TestWirelessDeviceResponse>("TestWirelessDeviceResponse")({Result: S.optional(S.String)}) {}
export class UpdatePartnerAccountRequest extends S.Class<UpdatePartnerAccountRequest>("UpdatePartnerAccountRequest")({Sidewalk: SidewalkUpdateAccount, PartnerAccountId: S.String, PartnerType: S.String}) {}
export class UpdatePartnerAccountResponse extends S.Class<UpdatePartnerAccountResponse>("UpdatePartnerAccountResponse")({}) {}
export class UpdateWirelessDeviceImportTaskRequest extends S.Class<UpdateWirelessDeviceImportTaskRequest>("UpdateWirelessDeviceImportTaskRequest")({Id: S.String, Sidewalk: SidewalkUpdateImportInfo}) {}
export class UpdateWirelessDeviceImportTaskResponse extends S.Class<UpdateWirelessDeviceImportTaskResponse>("UpdateWirelessDeviceImportTaskResponse")({}) {}
export class OtaaV1_1 extends S.Class<OtaaV1_1>("OtaaV1_1")({AppKey: S.optional(S.String), NwkKey: S.optional(S.String), JoinEui: S.optional(S.String)}) {}
export class OtaaV1_0_x extends S.Class<OtaaV1_0_x>("OtaaV1_0_x")({AppKey: S.optional(S.String), AppEui: S.optional(S.String), JoinEui: S.optional(S.String), GenAppKey: S.optional(S.String)}) {}
export class Dimension extends S.Class<Dimension>("Dimension")({name: S.optional(S.String), value: S.optional(S.String)}) {}
export const Dimensions = S.Array(Dimension);
export class CertificateList extends S.Class<CertificateList>("CertificateList")({SigningAlg: S.String, Value: S.String}) {}
export const PrivateKeysList = S.Array(CertificateList);
export const DeviceCreationFileList = S.Array(S.String);
export class SemtechGnssConfiguration extends S.Class<SemtechGnssConfiguration>("SemtechGnssConfiguration")({Status: S.String, Fec: S.String}) {}
export class LoRaWANMulticastMetadata extends S.Class<LoRaWANMulticastMetadata>("LoRaWANMulticastMetadata")({FPort: S.optional(S.Number)}) {}
export class SidewalkSendDataToDevice extends S.Class<SidewalkSendDataToDevice>("SidewalkSendDataToDevice")({Seq: S.optional(S.Number), MessageType: S.optional(S.String), AckModeRetryDurationSecs: S.optional(S.Number)}) {}
export class UpdateAbpV1_1 extends S.Class<UpdateAbpV1_1>("UpdateAbpV1_1")({FCntStart: S.optional(S.Number)}) {}
export class UpdateAbpV1_0_x extends S.Class<UpdateAbpV1_0_x>("UpdateAbpV1_0_x")({FCntStart: S.optional(S.Number)}) {}
export class Positioning extends S.Class<Positioning>("Positioning")({ClockSync: S.optional(S.Number), Stream: S.optional(S.Number), Gnss: S.optional(S.Number)}) {}
export class ApplicationConfig extends S.Class<ApplicationConfig>("ApplicationConfig")({FPort: S.optional(S.Number), Type: S.optional(S.String), DestinationName: S.optional(S.String)}) {}
export const Applications = S.Array(ApplicationConfig);
export class UpdateFPorts extends S.Class<UpdateFPorts>("UpdateFPorts")({Positioning: S.optional(Positioning), Applications: S.optional(Applications)}) {}
export class SidewalkCreateWirelessDevice extends S.Class<SidewalkCreateWirelessDevice>("SidewalkCreateWirelessDevice")({DeviceProfileId: S.optional(S.String), Positioning: S.optional(SidewalkPositioning), SidewalkManufacturingSn: S.optional(S.String)}) {}
export class LoRaWANFuotaTaskGetInfo extends S.Class<LoRaWANFuotaTaskGetInfo>("LoRaWANFuotaTaskGetInfo")({RfRegion: S.optional(S.String), StartTime: S.optional(S.Date)}) {}
export class SummaryMetricQuery extends S.Class<SummaryMetricQuery>("SummaryMetricQuery")({QueryId: S.optional(S.String), MetricName: S.optional(S.String), Dimensions: S.optional(Dimensions), AggregationPeriod: S.optional(S.String), StartTimestamp: S.optional(S.Date), EndTimestamp: S.optional(S.Date)}) {}
export const SummaryMetricQueries = S.Array(SummaryMetricQuery);
export class LoRaWANMulticastGet extends S.Class<LoRaWANMulticastGet>("LoRaWANMulticastGet")({RfRegion: S.optional(S.String), DlClass: S.optional(S.String), NumberOfDevicesRequested: S.optional(S.Number), NumberOfDevicesInGroup: S.optional(S.Number), ParticipatingGateways: S.optional(ParticipatingGatewaysMulticast)}) {}
export class Accuracy extends S.Class<Accuracy>("Accuracy")({HorizontalAccuracy: S.optional(S.Number), VerticalAccuracy: S.optional(S.Number)}) {}
export class LoRaWANGetServiceProfileInfo extends S.Class<LoRaWANGetServiceProfileInfo>("LoRaWANGetServiceProfileInfo")({UlRate: S.optional(S.Number), UlBucketSize: S.optional(S.Number), UlRatePolicy: S.optional(S.String), DlRate: S.optional(S.Number), DlBucketSize: S.optional(S.Number), DlRatePolicy: S.optional(S.String), AddGwMetadata: S.optional(S.Boolean), DevStatusReqFreq: S.optional(S.Number), ReportDevStatusBattery: S.optional(S.Boolean), ReportDevStatusMargin: S.optional(S.Boolean), DrMin: S.optional(S.Number), DrMax: S.optional(S.Number), ChannelMask: S.optional(S.String), PrAllowed: S.optional(S.Boolean), HrAllowed: S.optional(S.Boolean), RaAllowed: S.optional(S.Boolean), NwkGeoLoc: S.optional(S.Boolean), TargetPer: S.optional(S.Number), MinGwDiversity: S.optional(S.Number), TxPowerIndexMin: S.optional(S.Number), TxPowerIndexMax: S.optional(S.Number), NbTransMin: S.optional(S.Number), NbTransMax: S.optional(S.Number)}) {}
export class SidewalkGetStartImportInfo extends S.Class<SidewalkGetStartImportInfo>("SidewalkGetStartImportInfo")({DeviceCreationFileList: S.optional(DeviceCreationFileList), Role: S.optional(S.String), Positioning: S.optional(SidewalkPositioning)}) {}
export class SidewalkDeviceMetadata extends S.Class<SidewalkDeviceMetadata>("SidewalkDeviceMetadata")({Rssi: S.optional(S.Number), BatteryLevel: S.optional(S.String), Event: S.optional(S.String), DeviceState: S.optional(S.String)}) {}
export class LoRaWANGatewayCurrentVersion extends S.Class<LoRaWANGatewayCurrentVersion>("LoRaWANGatewayCurrentVersion")({CurrentVersion: S.optional(LoRaWANGatewayVersion)}) {}
export class Destinations extends S.Class<Destinations>("Destinations")({Arn: S.optional(S.String), Name: S.optional(S.String), ExpressionType: S.optional(S.String), Expression: S.optional(S.String), Description: S.optional(S.String), RoleArn: S.optional(S.String)}) {}
export const DestinationList = S.Array(Destinations);
export class DeviceProfile extends S.Class<DeviceProfile>("DeviceProfile")({Arn: S.optional(S.String), Name: S.optional(S.String), Id: S.optional(S.String)}) {}
export const DeviceProfileList = S.Array(DeviceProfile);
export class SidewalkListDevicesForImportInfo extends S.Class<SidewalkListDevicesForImportInfo>("SidewalkListDevicesForImportInfo")({Positioning: S.optional(SidewalkPositioning)}) {}
export class FuotaTask extends S.Class<FuotaTask>("FuotaTask")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String)}) {}
export const FuotaTaskList = S.Array(FuotaTask);
export class MulticastGroup extends S.Class<MulticastGroup>("MulticastGroup")({Id: S.optional(S.String), Arn: S.optional(S.String), Name: S.optional(S.String)}) {}
export const MulticastGroupList = S.Array(MulticastGroup);
export class MulticastGroupByFuotaTask extends S.Class<MulticastGroupByFuotaTask>("MulticastGroupByFuotaTask")({Id: S.optional(S.String)}) {}
export const MulticastGroupListByFuotaTask = S.Array(MulticastGroupByFuotaTask);
export class NetworkAnalyzerConfigurations extends S.Class<NetworkAnalyzerConfigurations>("NetworkAnalyzerConfigurations")({Arn: S.optional(S.String), Name: S.optional(S.String)}) {}
export const NetworkAnalyzerConfigurationList = S.Array(NetworkAnalyzerConfigurations);
export class SemtechGnssDetail extends S.Class<SemtechGnssDetail>("SemtechGnssDetail")({Provider: S.optional(S.String), Type: S.optional(S.String), Status: S.optional(S.String), Fec: S.optional(S.String)}) {}
export class PositionSolverDetails extends S.Class<PositionSolverDetails>("PositionSolverDetails")({SemtechGnss: S.optional(SemtechGnssDetail)}) {}
export class PositionConfigurationItem extends S.Class<PositionConfigurationItem>("PositionConfigurationItem")({ResourceIdentifier: S.optional(S.String), ResourceType: S.optional(S.String), Solvers: S.optional(PositionSolverDetails), Destination: S.optional(S.String)}) {}
export const PositionConfigurationList = S.Array(PositionConfigurationItem);
export class GatewayListItem extends S.Class<GatewayListItem>("GatewayListItem")({GatewayId: S.String, DownlinkFrequency: S.Number}) {}
export const GatewayList = S.Array(GatewayListItem);
export class ParticipatingGateways extends S.Class<ParticipatingGateways>("ParticipatingGateways")({DownlinkMode: S.String, GatewayList: GatewayList, TransmissionInterval: S.Number}) {}
export class LoRaWANSendDataToDevice extends S.Class<LoRaWANSendDataToDevice>("LoRaWANSendDataToDevice")({FPort: S.optional(S.Number), ParticipatingGateways: S.optional(ParticipatingGateways)}) {}
export class DownlinkQueueMessage extends S.Class<DownlinkQueueMessage>("DownlinkQueueMessage")({MessageId: S.optional(S.String), TransmitMode: S.optional(S.Number), ReceivedAt: S.optional(S.String), LoRaWAN: S.optional(LoRaWANSendDataToDevice)}) {}
export const DownlinkQueueMessagesList = S.Array(DownlinkQueueMessage);
export class ServiceProfile extends S.Class<ServiceProfile>("ServiceProfile")({Arn: S.optional(S.String), Name: S.optional(S.String), Id: S.optional(S.String)}) {}
export const ServiceProfileList = S.Array(ServiceProfile);
export class WirelessDeviceImportTask extends S.Class<WirelessDeviceImportTask>("WirelessDeviceImportTask")({Id: S.optional(S.String), Arn: S.optional(S.String), DestinationName: S.optional(S.String), Positioning: S.optional(S.String), Sidewalk: S.optional(SidewalkGetStartImportInfo), CreationTime: S.optional(S.Date), Status: S.optional(S.String), StatusReason: S.optional(S.String), InitializedImportedDeviceCount: S.optional(S.Number), PendingImportedDeviceCount: S.optional(S.Number), OnboardedImportedDeviceCount: S.optional(S.Number), FailedImportedDeviceCount: S.optional(S.Number)}) {}
export const WirelessDeviceImportTaskList = S.Array(WirelessDeviceImportTask);
export class WirelessGatewayStatistics extends S.Class<WirelessGatewayStatistics>("WirelessGatewayStatistics")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), LoRaWAN: S.optional(LoRaWANGateway), LastUplinkReceivedAt: S.optional(S.String)}) {}
export const WirelessGatewayStatisticsList = S.Array(WirelessGatewayStatistics);
export class PositionSolverConfigurations extends S.Class<PositionSolverConfigurations>("PositionSolverConfigurations")({SemtechGnss: S.optional(SemtechGnssConfiguration)}) {}
export class MulticastWirelessMetadata extends S.Class<MulticastWirelessMetadata>("MulticastWirelessMetadata")({LoRaWAN: S.optional(LoRaWANMulticastMetadata)}) {}
export class LoRaWANUpdateDevice extends S.Class<LoRaWANUpdateDevice>("LoRaWANUpdateDevice")({DeviceProfileId: S.optional(S.String), ServiceProfileId: S.optional(S.String), AbpV1_1: S.optional(UpdateAbpV1_1), AbpV1_0_x: S.optional(UpdateAbpV1_0_x), FPorts: S.optional(UpdateFPorts)}) {}
export class SessionKeysAbpV1_1 extends S.Class<SessionKeysAbpV1_1>("SessionKeysAbpV1_1")({FNwkSIntKey: S.optional(S.String), SNwkSIntKey: S.optional(S.String), NwkSEncKey: S.optional(S.String), AppSKey: S.optional(S.String)}) {}
export class SessionKeysAbpV1_0_x extends S.Class<SessionKeysAbpV1_0_x>("SessionKeysAbpV1_0_x")({NwkSKey: S.optional(S.String), AppSKey: S.optional(S.String)}) {}
export class GsmLocalId extends S.Class<GsmLocalId>("GsmLocalId")({Bsic: S.Number, Bcch: S.Number}) {}
export class WcdmaLocalId extends S.Class<WcdmaLocalId>("WcdmaLocalId")({Uarfcndl: S.Number, Psc: S.Number}) {}
export class WcdmaNmrObj extends S.Class<WcdmaNmrObj>("WcdmaNmrObj")({Uarfcndl: S.Number, Psc: S.Number, UtranCid: S.Number, Rscp: S.optional(S.Number), PathLoss: S.optional(S.Number)}) {}
export const WcdmaNmrList = S.Array(WcdmaNmrObj);
export class TdscdmaLocalId extends S.Class<TdscdmaLocalId>("TdscdmaLocalId")({Uarfcn: S.Number, CellParams: S.Number}) {}
export class TdscdmaNmrObj extends S.Class<TdscdmaNmrObj>("TdscdmaNmrObj")({Uarfcn: S.Number, CellParams: S.Number, UtranCid: S.optional(S.Number), Rscp: S.optional(S.Number), PathLoss: S.optional(S.Number)}) {}
export const TdscdmaNmrList = S.Array(TdscdmaNmrObj);
export class LteLocalId extends S.Class<LteLocalId>("LteLocalId")({Pci: S.Number, Earfcn: S.Number}) {}
export class LteNmrObj extends S.Class<LteNmrObj>("LteNmrObj")({Pci: S.Number, Earfcn: S.Number, EutranCid: S.optional(S.Number), Rsrp: S.optional(S.Number), Rsrq: S.optional(S.Number)}) {}
export const LteNmrList = S.Array(LteNmrObj);
export class CdmaLocalId extends S.Class<CdmaLocalId>("CdmaLocalId")({PnOffset: S.Number, CdmaChannel: S.Number}) {}
export class CdmaNmrObj extends S.Class<CdmaNmrObj>("CdmaNmrObj")({PnOffset: S.Number, CdmaChannel: S.Number, PilotPower: S.optional(S.Number), BaseStationId: S.optional(S.Number)}) {}
export const CdmaNmrList = S.Array(CdmaNmrObj);
export class AssociateAwsAccountWithPartnerAccountResponse extends S.Class<AssociateAwsAccountWithPartnerAccountResponse>("AssociateAwsAccountWithPartnerAccountResponse")({Sidewalk: S.optional(SidewalkAccountInfo), Arn: S.optional(S.String)}) {}
export class CreateDeviceProfileResponse extends S.Class<CreateDeviceProfileResponse>("CreateDeviceProfileResponse")({Arn: S.optional(S.String), Id: S.optional(S.String)}) {}
export class CreateFuotaTaskResponse extends S.Class<CreateFuotaTaskResponse>("CreateFuotaTaskResponse")({Arn: S.optional(S.String), Id: S.optional(S.String)}) {}
export class CreateMulticastGroupRequest extends S.Class<CreateMulticastGroupRequest>("CreateMulticastGroupRequest")({Name: S.optional(S.String), Description: S.optional(S.String), ClientRequestToken: S.optional(S.String), LoRaWAN: LoRaWANMulticast, Tags: S.optional(TagList)}) {}
export class CreateNetworkAnalyzerConfigurationResponse extends S.Class<CreateNetworkAnalyzerConfigurationResponse>("CreateNetworkAnalyzerConfigurationResponse")({Arn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class CreateServiceProfileResponse extends S.Class<CreateServiceProfileResponse>("CreateServiceProfileResponse")({Arn: S.optional(S.String), Id: S.optional(S.String)}) {}
export class CreateWirelessGatewayRequest extends S.Class<CreateWirelessGatewayRequest>("CreateWirelessGatewayRequest")({Name: S.optional(S.String), Description: S.optional(S.String), LoRaWAN: LoRaWANGateway, Tags: S.optional(TagList), ClientRequestToken: S.optional(S.String)}) {}
export class GetEventConfigurationByResourceTypesResponse extends S.Class<GetEventConfigurationByResourceTypesResponse>("GetEventConfigurationByResourceTypesResponse")({DeviceRegistrationState: S.optional(DeviceRegistrationStateResourceTypeEventConfiguration), Proximity: S.optional(ProximityResourceTypeEventConfiguration), Join: S.optional(JoinResourceTypeEventConfiguration), ConnectionStatus: S.optional(ConnectionStatusResourceTypeEventConfiguration), MessageDeliveryStatus: S.optional(MessageDeliveryStatusResourceTypeEventConfiguration)}) {}
export class GetFuotaTaskResponse extends S.Class<GetFuotaTaskResponse>("GetFuotaTaskResponse")({Arn: S.optional(S.String), Id: S.optional(S.String), Status: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), LoRaWAN: S.optional(LoRaWANFuotaTaskGetInfo), FirmwareUpdateImage: S.optional(S.String), FirmwareUpdateRole: S.optional(S.String), CreatedAt: S.optional(S.Date), RedundancyPercent: S.optional(S.Number), FragmentSizeBytes: S.optional(S.Number), FragmentIntervalMS: S.optional(S.Number), Descriptor: S.optional(S.String)}) {}
export class GetLogLevelsByResourceTypesResponse extends S.Class<GetLogLevelsByResourceTypesResponse>("GetLogLevelsByResourceTypesResponse")({DefaultLogLevel: S.optional(S.String), WirelessGatewayLogOptions: S.optional(WirelessGatewayLogOptionList), WirelessDeviceLogOptions: S.optional(WirelessDeviceLogOptionList), FuotaTaskLogOptions: S.optional(FuotaTaskLogOptionList)}) {}
export class GetMetricsRequest extends S.Class<GetMetricsRequest>("GetMetricsRequest")({SummaryMetricQueries: S.optional(SummaryMetricQueries)}) {}
export class GetMulticastGroupResponse extends S.Class<GetMulticastGroupResponse>("GetMulticastGroupResponse")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), Status: S.optional(S.String), LoRaWAN: S.optional(LoRaWANMulticastGet), CreatedAt: S.optional(S.Date)}) {}
export class GetPartnerAccountResponse extends S.Class<GetPartnerAccountResponse>("GetPartnerAccountResponse")({Sidewalk: S.optional(SidewalkAccountInfoWithFingerprint), AccountLinked: S.optional(S.Boolean)}) {}
export class GetPositionResponse extends S.Class<GetPositionResponse>("GetPositionResponse")({Position: S.optional(PositionCoordinate), Accuracy: S.optional(Accuracy), SolverType: S.optional(S.String), SolverProvider: S.optional(S.String), SolverVersion: S.optional(S.String), Timestamp: S.optional(S.String)}) {}
export class GetServiceProfileResponse extends S.Class<GetServiceProfileResponse>("GetServiceProfileResponse")({Arn: S.optional(S.String), Name: S.optional(S.String), Id: S.optional(S.String), LoRaWAN: S.optional(LoRaWANGetServiceProfileInfo)}) {}
export class GetWirelessDeviceImportTaskResponse extends S.Class<GetWirelessDeviceImportTaskResponse>("GetWirelessDeviceImportTaskResponse")({Id: S.optional(S.String), Arn: S.optional(S.String), DestinationName: S.optional(S.String), Positioning: S.optional(S.String), Sidewalk: S.optional(SidewalkGetStartImportInfo), CreationTime: S.optional(S.Date), Status: S.optional(S.String), StatusReason: S.optional(S.String), InitializedImportedDeviceCount: S.optional(S.Number), PendingImportedDeviceCount: S.optional(S.Number), OnboardedImportedDeviceCount: S.optional(S.Number), FailedImportedDeviceCount: S.optional(S.Number)}) {}
export class GetWirelessGatewayFirmwareInformationResponse extends S.Class<GetWirelessGatewayFirmwareInformationResponse>("GetWirelessGatewayFirmwareInformationResponse")({LoRaWAN: S.optional(LoRaWANGatewayCurrentVersion)}) {}
export class ListDestinationsResponse extends S.Class<ListDestinationsResponse>("ListDestinationsResponse")({NextToken: S.optional(S.String), DestinationList: S.optional(DestinationList)}) {}
export class ListDeviceProfilesResponse extends S.Class<ListDeviceProfilesResponse>("ListDeviceProfilesResponse")({NextToken: S.optional(S.String), DeviceProfileList: S.optional(DeviceProfileList)}) {}
export class ListFuotaTasksResponse extends S.Class<ListFuotaTasksResponse>("ListFuotaTasksResponse")({NextToken: S.optional(S.String), FuotaTaskList: S.optional(FuotaTaskList)}) {}
export class ListMulticastGroupsResponse extends S.Class<ListMulticastGroupsResponse>("ListMulticastGroupsResponse")({NextToken: S.optional(S.String), MulticastGroupList: S.optional(MulticastGroupList)}) {}
export class ListMulticastGroupsByFuotaTaskResponse extends S.Class<ListMulticastGroupsByFuotaTaskResponse>("ListMulticastGroupsByFuotaTaskResponse")({NextToken: S.optional(S.String), MulticastGroupList: S.optional(MulticastGroupListByFuotaTask)}) {}
export class ListNetworkAnalyzerConfigurationsResponse extends S.Class<ListNetworkAnalyzerConfigurationsResponse>("ListNetworkAnalyzerConfigurationsResponse")({NextToken: S.optional(S.String), NetworkAnalyzerConfigurationList: S.optional(NetworkAnalyzerConfigurationList)}) {}
export class ListPositionConfigurationsResponse extends S.Class<ListPositionConfigurationsResponse>("ListPositionConfigurationsResponse")({PositionConfigurationList: S.optional(PositionConfigurationList), NextToken: S.optional(S.String)}) {}
export class ListQueuedMessagesResponse extends S.Class<ListQueuedMessagesResponse>("ListQueuedMessagesResponse")({NextToken: S.optional(S.String), DownlinkQueueMessagesList: S.optional(DownlinkQueueMessagesList)}) {}
export class ListServiceProfilesResponse extends S.Class<ListServiceProfilesResponse>("ListServiceProfilesResponse")({NextToken: S.optional(S.String), ServiceProfileList: S.optional(ServiceProfileList)}) {}
export class ListWirelessDeviceImportTasksResponse extends S.Class<ListWirelessDeviceImportTasksResponse>("ListWirelessDeviceImportTasksResponse")({NextToken: S.optional(S.String), WirelessDeviceImportTaskList: S.optional(WirelessDeviceImportTaskList)}) {}
export class ListWirelessGatewaysResponse extends S.Class<ListWirelessGatewaysResponse>("ListWirelessGatewaysResponse")({NextToken: S.optional(S.String), WirelessGatewayList: S.optional(WirelessGatewayStatisticsList)}) {}
export class PutPositionConfigurationRequest extends S.Class<PutPositionConfigurationRequest>("PutPositionConfigurationRequest")({ResourceIdentifier: S.String, ResourceType: S.String, Solvers: S.optional(PositionSolverConfigurations), Destination: S.optional(S.String)}) {}
export class PutPositionConfigurationResponse extends S.Class<PutPositionConfigurationResponse>("PutPositionConfigurationResponse")({}) {}
export class SendDataToMulticastGroupRequest extends S.Class<SendDataToMulticastGroupRequest>("SendDataToMulticastGroupRequest")({Id: S.String, PayloadData: S.String, WirelessMetadata: MulticastWirelessMetadata}) {}
export class StartSingleWirelessDeviceImportTaskResponse extends S.Class<StartSingleWirelessDeviceImportTaskResponse>("StartSingleWirelessDeviceImportTaskResponse")({Id: S.optional(S.String), Arn: S.optional(S.String)}) {}
export class StartWirelessDeviceImportTaskResponse extends S.Class<StartWirelessDeviceImportTaskResponse>("StartWirelessDeviceImportTaskResponse")({Id: S.optional(S.String), Arn: S.optional(S.String)}) {}
export class UpdateResourceEventConfigurationRequest extends S.Class<UpdateResourceEventConfigurationRequest>("UpdateResourceEventConfigurationRequest")({Identifier: S.String, IdentifierType: S.String, PartnerType: S.optional(S.String), DeviceRegistrationState: S.optional(DeviceRegistrationStateEventConfiguration), Proximity: S.optional(ProximityEventConfiguration), Join: S.optional(JoinEventConfiguration), ConnectionStatus: S.optional(ConnectionStatusEventConfiguration), MessageDeliveryStatus: S.optional(MessageDeliveryStatusEventConfiguration)}) {}
export class UpdateResourceEventConfigurationResponse extends S.Class<UpdateResourceEventConfigurationResponse>("UpdateResourceEventConfigurationResponse")({}) {}
export class UpdateWirelessDeviceRequest extends S.Class<UpdateWirelessDeviceRequest>("UpdateWirelessDeviceRequest")({Id: S.String, DestinationName: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), LoRaWAN: S.optional(LoRaWANUpdateDevice), Positioning: S.optional(S.String), Sidewalk: S.optional(SidewalkUpdateWirelessDevice)}) {}
export class UpdateWirelessDeviceResponse extends S.Class<UpdateWirelessDeviceResponse>("UpdateWirelessDeviceResponse")({}) {}
export class AbpV1_1 extends S.Class<AbpV1_1>("AbpV1_1")({DevAddr: S.optional(S.String), SessionKeys: S.optional(SessionKeysAbpV1_1), FCntStart: S.optional(S.Number)}) {}
export class AbpV1_0_x extends S.Class<AbpV1_0_x>("AbpV1_0_x")({DevAddr: S.optional(S.String), SessionKeys: S.optional(SessionKeysAbpV1_0_x), FCntStart: S.optional(S.Number)}) {}
export class FPorts extends S.Class<FPorts>("FPorts")({Fuota: S.optional(S.Number), Multicast: S.optional(S.Number), ClockSync: S.optional(S.Number), Positioning: S.optional(Positioning), Applications: S.optional(Applications)}) {}
export class DakCertificateMetadata extends S.Class<DakCertificateMetadata>("DakCertificateMetadata")({CertificateId: S.String, MaxAllowedSignature: S.optional(S.Number), FactorySupport: S.optional(S.Boolean), ApId: S.optional(S.String), DeviceTypeId: S.optional(S.String)}) {}
export const DakCertificateMetadataList = S.Array(DakCertificateMetadata);
export class WcdmaObj extends S.Class<WcdmaObj>("WcdmaObj")({Mcc: S.Number, Mnc: S.Number, Lac: S.optional(S.Number), UtranCid: S.Number, WcdmaLocalId: S.optional(WcdmaLocalId), Rscp: S.optional(S.Number), PathLoss: S.optional(S.Number), WcdmaNmr: S.optional(WcdmaNmrList)}) {}
export const WcdmaList = S.Array(WcdmaObj);
export class TdscdmaObj extends S.Class<TdscdmaObj>("TdscdmaObj")({Mcc: S.Number, Mnc: S.Number, Lac: S.optional(S.Number), UtranCid: S.Number, TdscdmaLocalId: S.optional(TdscdmaLocalId), TdscdmaTimingAdvance: S.optional(S.Number), Rscp: S.optional(S.Number), PathLoss: S.optional(S.Number), TdscdmaNmr: S.optional(TdscdmaNmrList)}) {}
export const TdscdmaList = S.Array(TdscdmaObj);
export class LteObj extends S.Class<LteObj>("LteObj")({Mcc: S.Number, Mnc: S.Number, EutranCid: S.Number, Tac: S.optional(S.Number), LteLocalId: S.optional(LteLocalId), LteTimingAdvance: S.optional(S.Number), Rsrp: S.optional(S.Number), Rsrq: S.optional(S.Number), NrCapable: S.optional(S.Boolean), LteNmr: S.optional(LteNmrList)}) {}
export const LteList = S.Array(LteObj);
export class CdmaObj extends S.Class<CdmaObj>("CdmaObj")({SystemId: S.Number, NetworkId: S.Number, BaseStationId: S.Number, RegistrationZone: S.optional(S.Number), CdmaLocalId: S.optional(CdmaLocalId), PilotPower: S.optional(S.Number), BaseLat: S.optional(S.Number), BaseLng: S.optional(S.Number), CdmaNmr: S.optional(CdmaNmrList)}) {}
export const CdmaList = S.Array(CdmaObj);
export const DeviceCertificateList = S.Array(CertificateList);
export class LoRaWANGatewayMetadata extends S.Class<LoRaWANGatewayMetadata>("LoRaWANGatewayMetadata")({GatewayEui: S.optional(S.String), Snr: S.optional(S.Number), Rssi: S.optional(S.Number)}) {}
export const LoRaWANGatewayMetadataList = S.Array(LoRaWANGatewayMetadata);
export class LoRaWANPublicGatewayMetadata extends S.Class<LoRaWANPublicGatewayMetadata>("LoRaWANPublicGatewayMetadata")({ProviderNetId: S.optional(S.String), Id: S.optional(S.String), Rssi: S.optional(S.Number), Snr: S.optional(S.Number), RfRegion: S.optional(S.String), DlAllowed: S.optional(S.Boolean)}) {}
export const LoRaWANPublicGatewayMetadataList = S.Array(LoRaWANPublicGatewayMetadata);
export class ImportedSidewalkDevice extends S.Class<ImportedSidewalkDevice>("ImportedSidewalkDevice")({SidewalkManufacturingSn: S.optional(S.String), OnboardingStatus: S.optional(S.String), OnboardingStatusReason: S.optional(S.String), LastUpdateTime: S.optional(S.Date)}) {}
export class EventNotificationItemConfigurations extends S.Class<EventNotificationItemConfigurations>("EventNotificationItemConfigurations")({DeviceRegistrationState: S.optional(DeviceRegistrationStateEventConfiguration), Proximity: S.optional(ProximityEventConfiguration), Join: S.optional(JoinEventConfiguration), ConnectionStatus: S.optional(ConnectionStatusEventConfiguration), MessageDeliveryStatus: S.optional(MessageDeliveryStatusEventConfiguration)}) {}
export class LoRaWANListDevice extends S.Class<LoRaWANListDevice>("LoRaWANListDevice")({DevEui: S.optional(S.String)}) {}
export class SidewalkListDevice extends S.Class<SidewalkListDevice>("SidewalkListDevice")({AmazonId: S.optional(S.String), SidewalkId: S.optional(S.String), SidewalkManufacturingSn: S.optional(S.String), DeviceCertificates: S.optional(DeviceCertificateList), DeviceProfileId: S.optional(S.String), Status: S.optional(S.String), Positioning: S.optional(SidewalkPositioning)}) {}
export class LoRaWANUpdateGatewayTaskEntry extends S.Class<LoRaWANUpdateGatewayTaskEntry>("LoRaWANUpdateGatewayTaskEntry")({CurrentVersion: S.optional(LoRaWANGatewayVersion), UpdateVersion: S.optional(LoRaWANGatewayVersion)}) {}
export class GlobalIdentity extends S.Class<GlobalIdentity>("GlobalIdentity")({Lac: S.Number, GeranCid: S.Number}) {}
export class LoRaWANDevice extends S.Class<LoRaWANDevice>("LoRaWANDevice")({DevEui: S.optional(S.String), DeviceProfileId: S.optional(S.String), ServiceProfileId: S.optional(S.String), OtaaV1_1: S.optional(OtaaV1_1), OtaaV1_0_x: S.optional(OtaaV1_0_x), AbpV1_1: S.optional(AbpV1_1), AbpV1_0_x: S.optional(AbpV1_0_x), FPorts: S.optional(FPorts)}) {}
export class SidewalkGetDeviceProfile extends S.Class<SidewalkGetDeviceProfile>("SidewalkGetDeviceProfile")({ApplicationServerPublicKey: S.optional(S.String), QualificationStatus: S.optional(S.Boolean), DakCertificateMetadata: S.optional(DakCertificateMetadataList)}) {}
export class SidewalkDevice extends S.Class<SidewalkDevice>("SidewalkDevice")({AmazonId: S.optional(S.String), SidewalkId: S.optional(S.String), SidewalkManufacturingSn: S.optional(S.String), DeviceCertificates: S.optional(DeviceCertificateList), PrivateKeys: S.optional(PrivateKeysList), DeviceProfileId: S.optional(S.String), CertificateId: S.optional(S.String), Status: S.optional(S.String), Positioning: S.optional(SidewalkPositioning)}) {}
export class LoRaWANDeviceMetadata extends S.Class<LoRaWANDeviceMetadata>("LoRaWANDeviceMetadata")({DevEui: S.optional(S.String), FPort: S.optional(S.Number), DataRate: S.optional(S.Number), Frequency: S.optional(S.Number), Timestamp: S.optional(S.String), Gateways: S.optional(LoRaWANGatewayMetadataList), PublicGateways: S.optional(LoRaWANPublicGatewayMetadataList)}) {}
export class ImportedWirelessDevice extends S.Class<ImportedWirelessDevice>("ImportedWirelessDevice")({Sidewalk: S.optional(ImportedSidewalkDevice)}) {}
export const ImportedWirelessDeviceList = S.Array(ImportedWirelessDevice);
export class EventConfigurationItem extends S.Class<EventConfigurationItem>("EventConfigurationItem")({Identifier: S.optional(S.String), IdentifierType: S.optional(S.String), PartnerType: S.optional(S.String), Events: S.optional(EventNotificationItemConfigurations)}) {}
export const EventConfigurationsList = S.Array(EventConfigurationItem);
export class WirelessDeviceStatistics extends S.Class<WirelessDeviceStatistics>("WirelessDeviceStatistics")({Arn: S.optional(S.String), Id: S.optional(S.String), Type: S.optional(S.String), Name: S.optional(S.String), DestinationName: S.optional(S.String), LastUplinkReceivedAt: S.optional(S.String), LoRaWAN: S.optional(LoRaWANListDevice), Sidewalk: S.optional(SidewalkListDevice), FuotaDeviceStatus: S.optional(S.String), MulticastDeviceStatus: S.optional(S.String), McGroupId: S.optional(S.Number), Positioning: S.optional(S.String)}) {}
export const WirelessDeviceStatisticsList = S.Array(WirelessDeviceStatistics);
export class UpdateWirelessGatewayTaskEntry extends S.Class<UpdateWirelessGatewayTaskEntry>("UpdateWirelessGatewayTaskEntry")({Id: S.optional(S.String), LoRaWAN: S.optional(LoRaWANUpdateGatewayTaskEntry), Arn: S.optional(S.String)}) {}
export const WirelessGatewayTaskDefinitionList = S.Array(UpdateWirelessGatewayTaskEntry);
export class GsmNmrObj extends S.Class<GsmNmrObj>("GsmNmrObj")({Bsic: S.Number, Bcch: S.Number, RxLevel: S.optional(S.Number), GlobalIdentity: S.optional(GlobalIdentity)}) {}
export const GsmNmrList = S.Array(GsmNmrObj);
export class CreateMulticastGroupResponse extends S.Class<CreateMulticastGroupResponse>("CreateMulticastGroupResponse")({Arn: S.optional(S.String), Id: S.optional(S.String)}) {}
export class CreateWirelessDeviceRequest extends S.Class<CreateWirelessDeviceRequest>("CreateWirelessDeviceRequest")({Type: S.String, Name: S.optional(S.String), Description: S.optional(S.String), DestinationName: S.String, ClientRequestToken: S.optional(S.String), LoRaWAN: S.optional(LoRaWANDevice), Tags: S.optional(TagList), Positioning: S.optional(S.String), Sidewalk: S.optional(SidewalkCreateWirelessDevice)}) {}
export class CreateWirelessGatewayResponse extends S.Class<CreateWirelessGatewayResponse>("CreateWirelessGatewayResponse")({Arn: S.optional(S.String), Id: S.optional(S.String)}) {}
export class CreateWirelessGatewayTaskDefinitionRequest extends S.Class<CreateWirelessGatewayTaskDefinitionRequest>("CreateWirelessGatewayTaskDefinitionRequest")({AutoCreateTasks: S.Boolean, Name: S.optional(S.String), Update: S.optional(UpdateWirelessGatewayTaskCreate), ClientRequestToken: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class GetDeviceProfileResponse extends S.Class<GetDeviceProfileResponse>("GetDeviceProfileResponse")({Arn: S.optional(S.String), Name: S.optional(S.String), Id: S.optional(S.String), LoRaWAN: S.optional(LoRaWANDeviceProfile), Sidewalk: S.optional(SidewalkGetDeviceProfile)}) {}
export class GetPositionConfigurationResponse extends S.Class<GetPositionConfigurationResponse>("GetPositionConfigurationResponse")({Solvers: S.optional(PositionSolverDetails), Destination: S.optional(S.String)}) {}
export class GetWirelessDeviceResponse extends S.Class<GetWirelessDeviceResponse>("GetWirelessDeviceResponse")({Type: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), DestinationName: S.optional(S.String), Id: S.optional(S.String), Arn: S.optional(S.String), ThingName: S.optional(S.String), ThingArn: S.optional(S.String), LoRaWAN: S.optional(LoRaWANDevice), Sidewalk: S.optional(SidewalkDevice), Positioning: S.optional(S.String)}) {}
export class GetWirelessDeviceStatisticsResponse extends S.Class<GetWirelessDeviceStatisticsResponse>("GetWirelessDeviceStatisticsResponse")({WirelessDeviceId: S.optional(S.String), LastUplinkReceivedAt: S.optional(S.String), LoRaWAN: S.optional(LoRaWANDeviceMetadata), Sidewalk: S.optional(SidewalkDeviceMetadata)}) {}
export class ListDevicesForWirelessDeviceImportTaskResponse extends S.Class<ListDevicesForWirelessDeviceImportTaskResponse>("ListDevicesForWirelessDeviceImportTaskResponse")({NextToken: S.optional(S.String), DestinationName: S.optional(S.String), Positioning: S.optional(S.String), Sidewalk: S.optional(SidewalkListDevicesForImportInfo), ImportedWirelessDeviceList: S.optional(ImportedWirelessDeviceList)}) {}
export class ListEventConfigurationsResponse extends S.Class<ListEventConfigurationsResponse>("ListEventConfigurationsResponse")({NextToken: S.optional(S.String), EventConfigurationsList: S.optional(EventConfigurationsList)}) {}
export class ListWirelessDevicesResponse extends S.Class<ListWirelessDevicesResponse>("ListWirelessDevicesResponse")({NextToken: S.optional(S.String), WirelessDeviceList: S.optional(WirelessDeviceStatisticsList)}) {}
export class ListWirelessGatewayTaskDefinitionsResponse extends S.Class<ListWirelessGatewayTaskDefinitionsResponse>("ListWirelessGatewayTaskDefinitionsResponse")({NextToken: S.optional(S.String), TaskDefinitions: S.optional(WirelessGatewayTaskDefinitionList)}) {}
export class SendDataToMulticastGroupResponse extends S.Class<SendDataToMulticastGroupResponse>("SendDataToMulticastGroupResponse")({MessageId: S.optional(S.String)}) {}
export const MetricQueryTimestamps = S.Array(S.Date);
export class GsmObj extends S.Class<GsmObj>("GsmObj")({Mcc: S.Number, Mnc: S.Number, Lac: S.Number, GeranCid: S.Number, GsmLocalId: S.optional(GsmLocalId), GsmTimingAdvance: S.optional(S.Number), RxLevel: S.optional(S.Number), GsmNmr: S.optional(GsmNmrList)}) {}
export const GsmList = S.Array(GsmObj);
export class CellTowers extends S.Class<CellTowers>("CellTowers")({Gsm: S.optional(GsmList), Wcdma: S.optional(WcdmaList), Tdscdma: S.optional(TdscdmaList), Lte: S.optional(LteList), Cdma: S.optional(CdmaList)}) {}
export class WirelessMetadata extends S.Class<WirelessMetadata>("WirelessMetadata")({LoRaWAN: S.optional(LoRaWANSendDataToDevice), Sidewalk: S.optional(SidewalkSendDataToDevice)}) {}
export class CreateWirelessDeviceResponse extends S.Class<CreateWirelessDeviceResponse>("CreateWirelessDeviceResponse")({Arn: S.optional(S.String), Id: S.optional(S.String)}) {}
export class CreateWirelessGatewayTaskDefinitionResponse extends S.Class<CreateWirelessGatewayTaskDefinitionResponse>("CreateWirelessGatewayTaskDefinitionResponse")({Id: S.optional(S.String), Arn: S.optional(S.String)}) {}
export class GetPositionEstimateRequest extends S.Class<GetPositionEstimateRequest>("GetPositionEstimateRequest")({WiFiAccessPoints: S.optional(WiFiAccessPoints), CellTowers: S.optional(CellTowers), Ip: S.optional(Ip), Gnss: S.optional(Gnss), Timestamp: S.optional(S.Date)}) {}
export class SendDataToWirelessDeviceRequest extends S.Class<SendDataToWirelessDeviceRequest>("SendDataToWirelessDeviceRequest")({Id: S.String, TransmitMode: S.Number, PayloadData: S.String, WirelessMetadata: S.optional(WirelessMetadata)}) {}
export class MetricQueryValue extends S.Class<MetricQueryValue>("MetricQueryValue")({Min: S.optional(S.Number), Max: S.optional(S.Number), Sum: S.optional(S.Number), Avg: S.optional(S.Number), Std: S.optional(S.Number), P90: S.optional(S.Number)}) {}
export const MetricQueryValues = S.Array(MetricQueryValue);
export class SummaryMetricQueryResult extends S.Class<SummaryMetricQueryResult>("SummaryMetricQueryResult")({QueryId: S.optional(S.String), QueryStatus: S.optional(S.String), Error: S.optional(S.String), MetricName: S.optional(S.String), Dimensions: S.optional(Dimensions), AggregationPeriod: S.optional(S.String), StartTimestamp: S.optional(S.Date), EndTimestamp: S.optional(S.Date), Timestamps: S.optional(MetricQueryTimestamps), Values: S.optional(MetricQueryValues), Unit: S.optional(S.String)}) {}
export const SummaryMetricQueryResults = S.Array(SummaryMetricQueryResult);
export class GetMetricsResponse extends S.Class<GetMetricsResponse>("GetMetricsResponse")({SummaryMetricQueryResults: S.optional(SummaryMetricQueryResults)}) {}
export class GetPositionEstimateResponse extends S.Class<GetPositionEstimateResponse>("GetPositionEstimateResponse")({GeoJsonPayload: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class SendDataToWirelessDeviceResponse extends S.Class<SendDataToWirelessDeviceResponse>("SendDataToWirelessDeviceResponse")({MessageId: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {Message: S.optional(S.String), ResourceName: S.optional(S.String)}) {};

//# Operations
/**
 * Cancels an existing multicast group session.
 */export const cancelMulticastGroupSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}/session", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CancelMulticastGroupSession" }, CancelMulticastGroupSessionRequest, CancelMulticastGroupSessionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a destination.
 */export const deleteDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/destinations/{Name}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteDestination" }, DeleteDestinationRequest, DeleteDestinationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a device profile.
 */export const deleteDeviceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/device-profiles/{Id}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteDeviceProfile" }, DeleteDeviceProfileRequest, DeleteDeviceProfileResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a FUOTA task.
 */export const deleteFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks/{Id}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteFuotaTask" }, DeleteFuotaTaskRequest, DeleteFuotaTaskResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a multicast group if it is not in use by a FUOTA task.
 */export const deleteMulticastGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteMulticastGroup" }, DeleteMulticastGroupRequest, DeleteMulticastGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a network analyzer configuration.
 */export const deleteNetworkAnalyzerConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/network-analyzer-configurations/{ConfigurationName}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteNetworkAnalyzerConfiguration" }, DeleteNetworkAnalyzerConfigurationRequest, DeleteNetworkAnalyzerConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove queued messages from the downlink queue.
 */export const deleteQueuedMessages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Id}/data", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteQueuedMessages" }, DeleteQueuedMessagesRequest, DeleteQueuedMessagesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a service profile.
 */export const deleteServiceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/service-profiles/{Id}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteServiceProfile" }, DeleteServiceProfileRequest, DeleteServiceProfileResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a wireless device.
 */export const deleteWirelessDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Id}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteWirelessDevice" }, DeleteWirelessDeviceRequest, DeleteWirelessDeviceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an import task.
 */export const deleteWirelessDeviceImportTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless_device_import_task/{Id}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteWirelessDeviceImportTask" }, DeleteWirelessDeviceImportTaskRequest, DeleteWirelessDeviceImportTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a wireless gateway.
 * 
 * 
 * 
 * 
 * When deleting a wireless gateway, you might run into duplication errors for the
 * following reasons.
 * 
 * 
 * 
 * - If you specify a `GatewayEui` value that already exists.
 * 
 * 
 * 
 * - If you used a `ClientRequestToken` with the same parameters
 * within the last 10 minutes.
 * 
 * 
 * 
 * 
 * 
 * To avoid this error, make sure that you use unique identifiers and parameters for
 * each request within the specified time period.
 */export const deleteWirelessGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteWirelessGateway" }, DeleteWirelessGatewayRequest, DeleteWirelessGatewayResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a wireless gateway task.
 */export const deleteWirelessGatewayTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}/tasks", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteWirelessGatewayTask" }, DeleteWirelessGatewayTaskRequest, DeleteWirelessGatewayTaskResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a wireless gateway task definition. Deleting this task definition does not
 * affect tasks that are currently in progress.
 */export const deleteWirelessGatewayTaskDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateway-task-definitions/{Id}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeleteWirelessGatewayTaskDefinition" }, DeleteWirelessGatewayTaskDefinitionRequest, DeleteWirelessGatewayTaskDefinitionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deregister a wireless device from AWS IoT Wireless.
 */export const deregisterWirelessDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Identifier}/deregister", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DeregisterWirelessDevice" }, DeregisterWirelessDeviceRequest, DeregisterWirelessDeviceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates your AWS account from a partner account. If
 * `PartnerAccountId` and `PartnerType` are `null`,
 * disassociates your AWS account from all partner accounts.
 */export const disassociateAwsAccountFromPartnerAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/partner-accounts/{PartnerAccountId}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DisassociateAwsAccountFromPartnerAccount" }, DisassociateAwsAccountFromPartnerAccountRequest, DisassociateAwsAccountFromPartnerAccountResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a multicast group from a FUOTA task.
 */export const disassociateMulticastGroupFromFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DisassociateMulticastGroupFromFuotaTask" }, DisassociateMulticastGroupFromFuotaTaskRequest, DisassociateMulticastGroupFromFuotaTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a wireless device from a FUOTA task.
 */export const disassociateWirelessDeviceFromFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DisassociateWirelessDeviceFromFuotaTask" }, DisassociateWirelessDeviceFromFuotaTaskRequest, DisassociateWirelessDeviceFromFuotaTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a wireless device from a multicast group.
 */export const disassociateWirelessDeviceFromMulticastGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DisassociateWirelessDeviceFromMulticastGroup" }, DisassociateWirelessDeviceFromMulticastGroupRequest, DisassociateWirelessDeviceFromMulticastGroupResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a wireless device from its currently associated thing.
 */export const disassociateWirelessDeviceFromThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Id}/thing", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DisassociateWirelessDeviceFromThing" }, DisassociateWirelessDeviceFromThingRequest, DisassociateWirelessDeviceFromThingResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a wireless gateway from its currently associated certificate.
 */export const disassociateWirelessGatewayFromCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}/certificate", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DisassociateWirelessGatewayFromCertificate" }, DisassociateWirelessGatewayFromCertificateRequest, DisassociateWirelessGatewayFromCertificateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates a wireless gateway from its currently associated thing.
 */export const disassociateWirelessGatewayFromThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}/thing", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.DisassociateWirelessGatewayFromThing" }, DisassociateWirelessGatewayFromThingRequest, DisassociateWirelessGatewayFromThingResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets the log-level override for a resource ID and resource type. A limit of 200 log
 * level override can be set per account.
 */export const putResourceLogLevel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/log-levels/{ResourceIdentifier}", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.PutResourceLogLevel" }, PutResourceLogLevelRequest, PutResourceLogLevelResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the log-level overrides for all resources; wireless devices, wireless
 * gateways, and FUOTA tasks.
 */export const resetAllResourceLogLevels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/log-levels", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ResetAllResourceLogLevels" }, ResetAllResourceLogLevelsRequest, ResetAllResourceLogLevelsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the log-level override, if any, for a specific resource ID and resource type.
 * It can be used for a wireless device, a wireless gateway, or a FUOTA task.
 */export const resetResourceLogLevel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/log-levels/{ResourceIdentifier}", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ResetResourceLogLevel" }, ResetResourceLogLevelRequest, ResetResourceLogLevelResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a bulk association of all qualifying wireless devices with a multicast
 * group.
 */export const startBulkAssociateWirelessDeviceWithMulticastGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}/bulk", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.StartBulkAssociateWirelessDeviceWithMulticastGroup" }, StartBulkAssociateWirelessDeviceWithMulticastGroupRequest, StartBulkAssociateWirelessDeviceWithMulticastGroupResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a bulk disassociatin of all qualifying wireless devices from a multicast
 * group.
 */export const startBulkDisassociateWirelessDeviceFromMulticastGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}/bulk", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.StartBulkDisassociateWirelessDeviceFromMulticastGroup" }, StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest, StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/tags", method: "DELETE", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates properties of a destination.
 */export const updateDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/destinations/{Name}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateDestination" }, UpdateDestinationRequest, UpdateDestinationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the event configuration based on resource types.
 */export const updateEventConfigurationByResourceTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/event-configurations-resource-types", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateEventConfigurationByResourceTypes" }, UpdateEventConfigurationByResourceTypesRequest, UpdateEventConfigurationByResourceTypesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates properties of a FUOTA task.
 */export const updateFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks/{Id}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateFuotaTask" }, UpdateFuotaTaskRequest, UpdateFuotaTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Set default log level, or log levels by resource types. This can be for wireless
 * device, wireless gateway, or FUOTA task log options, and is used to control the log
 * messages that'll be displayed in CloudWatch.
 */export const updateLogLevelsByResourceTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/log-levels", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateLogLevelsByResourceTypes" }, UpdateLogLevelsByResourceTypesRequest, UpdateLogLevelsByResourceTypesResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the summary metric configuration.
 */export const updateMetricConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/metric-configuration", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateMetricConfiguration" }, UpdateMetricConfigurationRequest, UpdateMetricConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates properties of a multicast group session.
 */export const updateMulticastGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateMulticastGroup" }, UpdateMulticastGroupRequest, UpdateMulticastGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update network analyzer configuration.
 */export const updateNetworkAnalyzerConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/network-analyzer-configurations/{ConfigurationName}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateNetworkAnalyzerConfiguration" }, UpdateNetworkAnalyzerConfigurationRequest, UpdateNetworkAnalyzerConfigurationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the position information of a resource.
 * 
 * 
 * 
 * 
 * This action is no longer supported. Calls to update the position information
 * should use the UpdateResourcePosition API operation instead.
 */export const updatePosition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/positions/{ResourceIdentifier}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdatePosition" }, UpdatePositionRequest, UpdatePositionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the position information of a given wireless device or a wireless gateway
 * resource. The position coordinates are based on the World Geodetic System
 * (WGS84).
 */export const updateResourcePosition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/resource-positions/{ResourceIdentifier}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateResourcePosition" }, UpdateResourcePositionRequest, UpdateResourcePositionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates properties of a wireless gateway.
 */export const updateWirelessGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateWirelessGateway" }, UpdateWirelessGatewayRequest, UpdateWirelessGatewayResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate a multicast group with a FUOTA task.
 */export const associateMulticastGroupWithFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks/{Id}/multicast-group", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.AssociateMulticastGroupWithFuotaTask" }, AssociateMulticastGroupWithFuotaTaskRequest, AssociateMulticastGroupWithFuotaTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associate a wireless device with a FUOTA task.
 */export const associateWirelessDeviceWithFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks/{Id}/wireless-device", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.AssociateWirelessDeviceWithFuotaTask" }, AssociateWirelessDeviceWithFuotaTaskRequest, AssociateWirelessDeviceWithFuotaTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a wireless device with a multicast group.
 */export const associateWirelessDeviceWithMulticastGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}/wireless-device", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.AssociateWirelessDeviceWithMulticastGroup" }, AssociateWirelessDeviceWithMulticastGroupRequest, AssociateWirelessDeviceWithMulticastGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a wireless device with a thing.
 */export const associateWirelessDeviceWithThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Id}/thing", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.AssociateWirelessDeviceWithThing" }, AssociateWirelessDeviceWithThingRequest, AssociateWirelessDeviceWithThingResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a wireless gateway with a certificate.
 */export const associateWirelessGatewayWithCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}/certificate", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.AssociateWirelessGatewayWithCertificate" }, AssociateWirelessGatewayWithCertificateRequest, AssociateWirelessGatewayWithCertificateResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a wireless gateway with a thing.
 */export const associateWirelessGatewayWithThing = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}/thing", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.AssociateWirelessGatewayWithThing" }, AssociateWirelessGatewayWithThingRequest, AssociateWirelessGatewayWithThingResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new destination that maps a device message to an AWS IoT rule.
 */export const createDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/destinations", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateDestination" }, CreateDestinationRequest, CreateDestinationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a task for a wireless gateway.
 */export const createWirelessGatewayTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}/tasks", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateWirelessGatewayTask" }, CreateWirelessGatewayTaskRequest, CreateWirelessGatewayTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a destination.
 */export const getDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/destinations/{Name}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetDestination" }, GetDestinationRequest, GetDestinationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the metric configuration status for this AWS account.
 */export const getMetricConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/metric-configuration", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetMetricConfiguration" }, GetMetricConfigurationRequest, GetMetricConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a multicast group session.
 */export const getMulticastGroupSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}/session", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetMulticastGroupSession" }, GetMulticastGroupSessionRequest, GetMulticastGroupSessionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get network analyzer configuration.
 */export const getNetworkAnalyzerConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/network-analyzer-configurations/{ConfigurationName}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetNetworkAnalyzerConfiguration" }, GetNetworkAnalyzerConfigurationRequest, GetNetworkAnalyzerConfigurationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the event configuration for a particular resource identifier.
 */export const getResourceEventConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/event-configurations/{Identifier}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetResourceEventConfiguration" }, GetResourceEventConfigurationRequest, GetResourceEventConfigurationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Fetches the log-level override, if any, for a given resource ID and resource
 * type..
 */export const getResourceLogLevel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/log-levels/{ResourceIdentifier}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetResourceLogLevel" }, GetResourceLogLevelRequest, GetResourceLogLevelResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the position information for a given wireless device or a wireless gateway
 * resource. The position information uses the World Geodetic System
 * (WGS84).
 */export const getResourcePosition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/resource-positions/{ResourceIdentifier}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetResourcePosition" }, GetResourcePositionRequest, GetResourcePositionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol
 * or LoRaWAN Network Server (LNS) connections.
 */export const getServiceEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/service-endpoint", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetServiceEndpoint" }, GetServiceEndpointRequest, GetServiceEndpointResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a wireless gateway.
 */export const getWirelessGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Identifier}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetWirelessGateway" }, GetWirelessGatewayRequest, GetWirelessGatewayResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the ID of the certificate that is currently associated with a wireless
 * gateway.
 */export const getWirelessGatewayCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}/certificate", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetWirelessGatewayCertificate" }, GetWirelessGatewayCertificateRequest, GetWirelessGatewayCertificateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets operating information about a wireless gateway.
 */export const getWirelessGatewayStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{WirelessGatewayId}/statistics", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetWirelessGatewayStatistics" }, GetWirelessGatewayStatisticsRequest, GetWirelessGatewayStatisticsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a wireless gateway task.
 */export const getWirelessGatewayTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}/tasks", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetWirelessGatewayTask" }, GetWirelessGatewayTaskRequest, GetWirelessGatewayTaskResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a wireless gateway task definition.
 */export const getWirelessGatewayTaskDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateway-task-definitions/{Id}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetWirelessGatewayTaskDefinition" }, GetWirelessGatewayTaskDefinitionRequest, GetWirelessGatewayTaskDefinitionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the partner accounts associated with your AWS account.
 */export const listPartnerAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/partner-accounts", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListPartnerAccounts" }, ListPartnerAccountsRequest, ListPartnerAccountsResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags (metadata) you have assigned to the resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/tags", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a FUOTA task.
 */export const startFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks/{Id}", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.StartFuotaTask" }, StartFuotaTaskRequest, StartFuotaTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a multicast group session.
 */export const startMulticastGroupSession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}/session", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.StartMulticastGroupSession" }, StartMulticastGroupSessionRequest, StartMulticastGroupSessionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a tag to a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/tags", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.TagResource" }, TagResourceRequest, TagResourceResponse, [ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, TooManyTagsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Simulates a provisioned device by sending an uplink data payload of
 * `Hello`.
 */export const testWirelessDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Id}/test", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.TestWirelessDevice" }, TestWirelessDeviceRequest, TestWirelessDeviceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates properties of a partner account.
 */export const updatePartnerAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/partner-accounts/{PartnerAccountId}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdatePartnerAccount" }, UpdatePartnerAccountRequest, UpdatePartnerAccountResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update an import task to add more devices to the task.
 */export const updateWirelessDeviceImportTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless_device_import_task/{Id}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateWirelessDeviceImportTask" }, UpdateWirelessDeviceImportTaskRequest, UpdateWirelessDeviceImportTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates a partner account with your AWS account.
 */export const associateAwsAccountWithPartnerAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/partner-accounts", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.AssociateAwsAccountWithPartnerAccount" }, AssociateAwsAccountWithPartnerAccountRequest, AssociateAwsAccountWithPartnerAccountResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new device profile.
 */export const createDeviceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/device-profiles", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateDeviceProfile" }, CreateDeviceProfileRequest, CreateDeviceProfileResponse, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a FUOTA task.
 */export const createFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateFuotaTask" }, CreateFuotaTaskRequest, CreateFuotaTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new network analyzer configuration.
 */export const createNetworkAnalyzerConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/network-analyzer-configurations", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateNetworkAnalyzerConfiguration" }, CreateNetworkAnalyzerConfigurationRequest, CreateNetworkAnalyzerConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new service profile.
 */export const createServiceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/service-profiles", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateServiceProfile" }, CreateServiceProfileRequest, CreateServiceProfileResponse, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the event configuration based on resource types.
 */export const getEventConfigurationByResourceTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/event-configurations-resource-types", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetEventConfigurationByResourceTypes" }, GetEventConfigurationByResourceTypesRequest, GetEventConfigurationByResourceTypesResponse, [AccessDeniedException, InternalServerException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a FUOTA task.
 */export const getFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks/{Id}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetFuotaTask" }, GetFuotaTaskRequest, GetFuotaTaskResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns current default log levels or log levels by resource types. Based on the
 * resource type, log levels can be returned for wireless device, wireless gateway, or
 * FUOTA task log options.
 */export const getLogLevelsByResourceTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/log-levels", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetLogLevelsByResourceTypes" }, GetLogLevelsByResourceTypesRequest, GetLogLevelsByResourceTypesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a multicast group.
 */export const getMulticastGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetMulticastGroup" }, GetMulticastGroupRequest, GetMulticastGroupResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a partner account. If `PartnerAccountId` and
 * `PartnerType` are `null`, returns all partner accounts.
 */export const getPartnerAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/partner-accounts/{PartnerAccountId}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetPartnerAccount" }, GetPartnerAccountRequest, GetPartnerAccountResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the position information for a given resource.
 * 
 * 
 * 
 * 
 * This action is no longer supported. Calls to retrieve the position information
 * should use the GetResourcePosition API operation instead.
 */export const getPosition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/positions/{ResourceIdentifier}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetPosition" }, GetPositionRequest, GetPositionResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a service profile.
 */export const getServiceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/service-profiles/{Id}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetServiceProfile" }, GetServiceProfileRequest, GetServiceProfileResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about an import task and count of device onboarding summary
 * information for the import task.
 */export const getWirelessDeviceImportTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless_device_import_task/{Id}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetWirelessDeviceImportTask" }, GetWirelessDeviceImportTaskRequest, GetWirelessDeviceImportTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the firmware version and other information about a wireless gateway.
 */export const getWirelessGatewayFirmwareInformation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways/{Id}/firmware-information", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetWirelessGatewayFirmwareInformation" }, GetWirelessGatewayFirmwareInformationRequest, GetWirelessGatewayFirmwareInformationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the destinations registered to your AWS account.
 */export const listDestinations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/destinations", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListDestinations" }, ListDestinationsRequest, ListDestinationsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the device profiles registered to your AWS account.
 */export const listDeviceProfiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/device-profiles", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListDeviceProfiles" }, ListDeviceProfilesRequest, ListDeviceProfilesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the FUOTA tasks registered to your AWS account.
 */export const listFuotaTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListFuotaTasks" }, ListFuotaTasksRequest, ListFuotaTasksResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the multicast groups registered to your AWS account.
 */export const listMulticastGroups = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListMulticastGroups" }, ListMulticastGroupsRequest, ListMulticastGroupsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all multicast groups associated with a FUOTA task.
 */export const listMulticastGroupsByFuotaTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/fuota-tasks/{Id}/multicast-groups", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListMulticastGroupsByFuotaTask" }, ListMulticastGroupsByFuotaTaskRequest, ListMulticastGroupsByFuotaTaskResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the network analyzer configurations.
 */export const listNetworkAnalyzerConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/network-analyzer-configurations", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListNetworkAnalyzerConfigurations" }, ListNetworkAnalyzerConfigurationsRequest, ListNetworkAnalyzerConfigurationsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List position configurations for a given resource, such as positioning solvers.
 * 
 * 
 * 
 * 
 * This action is no longer supported. Calls to retrieve position information should
 * use the GetResourcePosition API operation instead.
 */export const listPositionConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/position-configurations", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListPositionConfigurations" }, ListPositionConfigurationsRequest, ListPositionConfigurationsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List queued messages in the downlink queue.
 */export const listQueuedMessages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Id}/data", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListQueuedMessages" }, ListQueuedMessagesRequest, ListQueuedMessagesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the service profiles registered to your AWS account.
 */export const listServiceProfiles = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/service-profiles", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListServiceProfiles" }, ListServiceProfilesRequest, ListServiceProfilesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List of import tasks and summary information of onboarding status of devices in each
 * import task.
 */export const listWirelessDeviceImportTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless_device_import_tasks", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListWirelessDeviceImportTasks" }, ListWirelessDeviceImportTasksRequest, ListWirelessDeviceImportTasksResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the wireless gateways registered to your AWS account.
 */export const listWirelessGateways = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListWirelessGateways" }, ListWirelessGatewaysRequest, ListWirelessGatewaysResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Put position configuration for a given resource.
 * 
 * 
 * 
 * 
 * This action is no longer supported. Calls to update the position configuration
 * should use the UpdateResourcePosition API operation instead.
 */export const putPositionConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/position-configurations/{ResourceIdentifier}", method: "PUT", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.PutPositionConfiguration" }, PutPositionConfigurationRequest, PutPositionConfigurationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Start import task for a single wireless device.
 */export const startSingleWirelessDeviceImportTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless_single_device_import_task", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.StartSingleWirelessDeviceImportTask" }, StartSingleWirelessDeviceImportTaskRequest, StartSingleWirelessDeviceImportTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Start import task for provisioning Sidewalk devices in bulk using an S3 CSV
 * file.
 */export const startWirelessDeviceImportTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless_device_import_task", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.StartWirelessDeviceImportTask" }, StartWirelessDeviceImportTaskRequest, StartWirelessDeviceImportTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update the event configuration for a particular resource identifier.
 */export const updateResourceEventConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/event-configurations/{Identifier}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateResourceEventConfiguration" }, UpdateResourceEventConfigurationRequest, UpdateResourceEventConfigurationResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates properties of a wireless device.
 */export const updateWirelessDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Id}", method: "PATCH", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.UpdateWirelessDevice" }, UpdateWirelessDeviceRequest, UpdateWirelessDeviceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a multicast group.
 */export const createMulticastGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateMulticastGroup" }, CreateMulticastGroupRequest, CreateMulticastGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provisions a wireless gateway.
 * 
 * 
 * 
 * 
 * When provisioning a wireless gateway, you might run into duplication errors for
 * the following reasons.
 * 
 * 
 * 
 * - If you specify a `GatewayEui` value that already exists.
 * 
 * 
 * 
 * - If you used a `ClientRequestToken` with the same parameters
 * within the last 10 minutes.
 * 
 * 
 * 
 * 
 * 
 * To avoid this error, make sure that you use unique identifiers and parameters for
 * each request within the specified time period.
 */export const createWirelessGateway = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateways", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateWirelessGateway" }, CreateWirelessGatewayRequest, CreateWirelessGatewayResponse, [AccessDeniedException, ConflictException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a device profile.
 */export const getDeviceProfile = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/device-profiles/{Id}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetDeviceProfile" }, GetDeviceProfileRequest, GetDeviceProfileResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get position configuration for a given resource.
 * 
 * 
 * 
 * 
 * This action is no longer supported. Calls to retrieve the position configuration
 * should use the GetResourcePosition API operation instead.
 */export const getPositionConfiguration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/position-configurations/{ResourceIdentifier}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetPositionConfiguration" }, GetPositionConfigurationRequest, GetPositionConfigurationResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a wireless device.
 */export const getWirelessDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Identifier}", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetWirelessDevice" }, GetWirelessDeviceRequest, GetWirelessDeviceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets operating information about a wireless device.
 */export const getWirelessDeviceStatistics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{WirelessDeviceId}/statistics", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetWirelessDeviceStatistics" }, GetWirelessDeviceStatisticsRequest, GetWirelessDeviceStatisticsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the Sidewalk devices in an import task and their onboarding status.
 */export const listDevicesForWirelessDeviceImportTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless_device_import_task", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListDevicesForWirelessDeviceImportTask" }, ListDevicesForWirelessDeviceImportTaskRequest, ListDevicesForWirelessDeviceImportTaskResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List event configurations where at least one event topic has been enabled.
 */export const listEventConfigurations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/event-configurations", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListEventConfigurations" }, ListEventConfigurationsRequest, ListEventConfigurationsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the wireless devices registered to your AWS account.
 */export const listWirelessDevices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListWirelessDevices" }, ListWirelessDevicesRequest, ListWirelessDevicesResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the wireless gateway tasks definitions registered to your AWS account.
 */export const listWirelessGatewayTaskDefinitions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateway-task-definitions", method: "GET", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.ListWirelessGatewayTaskDefinitions" }, ListWirelessGatewayTaskDefinitionsRequest, ListWirelessGatewayTaskDefinitionsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends the specified data to a multicast group.
 */export const sendDataToMulticastGroup = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/multicast-groups/{Id}/data", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.SendDataToMulticastGroup" }, SendDataToMulticastGroupRequest, SendDataToMulticastGroupResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provisions a wireless device.
 */export const createWirelessDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateWirelessDevice" }, CreateWirelessDeviceRequest, CreateWirelessDeviceResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a gateway task definition.
 */export const createWirelessGatewayTaskDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-gateway-task-definitions", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.CreateWirelessGatewayTaskDefinition" }, CreateWirelessGatewayTaskDefinitionRequest, CreateWirelessGatewayTaskDefinitionResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the summary metrics for this AWS account.
 */export const getMetrics = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/metrics", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetMetrics" }, GetMetricsRequest, GetMetricsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get estimated position information as a payload in GeoJSON format. The payload
 * measurement data is resolved using solvers that are provided by third-party
 * vendors.
 */export const getPositionEstimate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/position-estimate", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.GetPositionEstimate" }, GetPositionEstimateRequest, GetPositionEstimateResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends a decrypted application data frame to a device.
 */export const sendDataToWirelessDevice = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-22", uri: "/wireless-devices/{Id}/data", sdkId: "IoT Wireless", sigV4ServiceName: "iotwireless", name: "iotwireless.SendDataToWirelessDevice" }, SendDataToWirelessDeviceRequest, SendDataToWirelessDeviceResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
