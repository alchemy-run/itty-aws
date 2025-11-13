import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class IoTWireless extends AWSServiceClient {
  associateAwsAccountWithPartnerAccount(
    input: AssociateAwsAccountWithPartnerAccountRequest,
  ): Effect.Effect<
    AssociateAwsAccountWithPartnerAccountResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateMulticastGroupWithFuotaTask(
    input: AssociateMulticastGroupWithFuotaTaskRequest,
  ): Effect.Effect<
    AssociateMulticastGroupWithFuotaTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateWirelessDeviceWithFuotaTask(
    input: AssociateWirelessDeviceWithFuotaTaskRequest,
  ): Effect.Effect<
    AssociateWirelessDeviceWithFuotaTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateWirelessDeviceWithMulticastGroup(
    input: AssociateWirelessDeviceWithMulticastGroupRequest,
  ): Effect.Effect<
    AssociateWirelessDeviceWithMulticastGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateWirelessDeviceWithThing(
    input: AssociateWirelessDeviceWithThingRequest,
  ): Effect.Effect<
    AssociateWirelessDeviceWithThingResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateWirelessGatewayWithCertificate(
    input: AssociateWirelessGatewayWithCertificateRequest,
  ): Effect.Effect<
    AssociateWirelessGatewayWithCertificateResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateWirelessGatewayWithThing(
    input: AssociateWirelessGatewayWithThingRequest,
  ): Effect.Effect<
    AssociateWirelessGatewayWithThingResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  cancelMulticastGroupSession(
    input: CancelMulticastGroupSessionRequest,
  ): Effect.Effect<
    CancelMulticastGroupSessionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDestination(
    input: CreateDestinationRequest,
  ): Effect.Effect<
    CreateDestinationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDeviceProfile(
    input: CreateDeviceProfileRequest,
  ): Effect.Effect<
    CreateDeviceProfileResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createFuotaTask(
    input: CreateFuotaTaskRequest,
  ): Effect.Effect<
    CreateFuotaTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createMulticastGroup(
    input: CreateMulticastGroupRequest,
  ): Effect.Effect<
    CreateMulticastGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createNetworkAnalyzerConfiguration(
    input: CreateNetworkAnalyzerConfigurationRequest,
  ): Effect.Effect<
    CreateNetworkAnalyzerConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createServiceProfile(
    input: CreateServiceProfileRequest,
  ): Effect.Effect<
    CreateServiceProfileResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createWirelessDevice(
    input: CreateWirelessDeviceRequest,
  ): Effect.Effect<
    CreateWirelessDeviceResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createWirelessGateway(
    input: CreateWirelessGatewayRequest,
  ): Effect.Effect<
    CreateWirelessGatewayResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createWirelessGatewayTask(
    input: CreateWirelessGatewayTaskRequest,
  ): Effect.Effect<
    CreateWirelessGatewayTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createWirelessGatewayTaskDefinition(
    input: CreateWirelessGatewayTaskDefinitionRequest,
  ): Effect.Effect<
    CreateWirelessGatewayTaskDefinitionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDestination(
    input: DeleteDestinationRequest,
  ): Effect.Effect<
    DeleteDestinationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDeviceProfile(
    input: DeleteDeviceProfileRequest,
  ): Effect.Effect<
    DeleteDeviceProfileResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteFuotaTask(
    input: DeleteFuotaTaskRequest,
  ): Effect.Effect<
    DeleteFuotaTaskResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteMulticastGroup(
    input: DeleteMulticastGroupRequest,
  ): Effect.Effect<
    DeleteMulticastGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteNetworkAnalyzerConfiguration(
    input: DeleteNetworkAnalyzerConfigurationRequest,
  ): Effect.Effect<
    DeleteNetworkAnalyzerConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteQueuedMessages(
    input: DeleteQueuedMessagesRequest,
  ): Effect.Effect<
    DeleteQueuedMessagesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteServiceProfile(
    input: DeleteServiceProfileRequest,
  ): Effect.Effect<
    DeleteServiceProfileResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteWirelessDevice(
    input: DeleteWirelessDeviceRequest,
  ): Effect.Effect<
    DeleteWirelessDeviceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteWirelessDeviceImportTask(
    input: DeleteWirelessDeviceImportTaskRequest,
  ): Effect.Effect<
    DeleteWirelessDeviceImportTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteWirelessGateway(
    input: DeleteWirelessGatewayRequest,
  ): Effect.Effect<
    DeleteWirelessGatewayResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteWirelessGatewayTask(
    input: DeleteWirelessGatewayTaskRequest,
  ): Effect.Effect<
    DeleteWirelessGatewayTaskResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteWirelessGatewayTaskDefinition(
    input: DeleteWirelessGatewayTaskDefinitionRequest,
  ): Effect.Effect<
    DeleteWirelessGatewayTaskDefinitionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deregisterWirelessDevice(
    input: DeregisterWirelessDeviceRequest,
  ): Effect.Effect<
    DeregisterWirelessDeviceResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateAwsAccountFromPartnerAccount(
    input: DisassociateAwsAccountFromPartnerAccountRequest,
  ): Effect.Effect<
    DisassociateAwsAccountFromPartnerAccountResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateMulticastGroupFromFuotaTask(
    input: DisassociateMulticastGroupFromFuotaTaskRequest,
  ): Effect.Effect<
    DisassociateMulticastGroupFromFuotaTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  disassociateWirelessDeviceFromFuotaTask(
    input: DisassociateWirelessDeviceFromFuotaTaskRequest,
  ): Effect.Effect<
    DisassociateWirelessDeviceFromFuotaTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateWirelessDeviceFromMulticastGroup(
    input: DisassociateWirelessDeviceFromMulticastGroupRequest,
  ): Effect.Effect<
    DisassociateWirelessDeviceFromMulticastGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateWirelessDeviceFromThing(
    input: DisassociateWirelessDeviceFromThingRequest,
  ): Effect.Effect<
    DisassociateWirelessDeviceFromThingResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateWirelessGatewayFromCertificate(
    input: DisassociateWirelessGatewayFromCertificateRequest,
  ): Effect.Effect<
    DisassociateWirelessGatewayFromCertificateResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  disassociateWirelessGatewayFromThing(
    input: DisassociateWirelessGatewayFromThingRequest,
  ): Effect.Effect<
    DisassociateWirelessGatewayFromThingResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDestination(
    input: GetDestinationRequest,
  ): Effect.Effect<
    GetDestinationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDeviceProfile(
    input: GetDeviceProfileRequest,
  ): Effect.Effect<
    GetDeviceProfileResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEventConfigurationByResourceTypes(
    input: GetEventConfigurationByResourceTypesRequest,
  ): Effect.Effect<
    GetEventConfigurationByResourceTypesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | CommonAwsError
  >;
  getFuotaTask(
    input: GetFuotaTaskRequest,
  ): Effect.Effect<
    GetFuotaTaskResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getLogLevelsByResourceTypes(
    input: GetLogLevelsByResourceTypesRequest,
  ): Effect.Effect<
    GetLogLevelsByResourceTypesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMetricConfiguration(
    input: GetMetricConfigurationRequest,
  ): Effect.Effect<
    GetMetricConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMetrics(
    input: GetMetricsRequest,
  ): Effect.Effect<
    GetMetricsResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMulticastGroup(
    input: GetMulticastGroupRequest,
  ): Effect.Effect<
    GetMulticastGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getMulticastGroupSession(
    input: GetMulticastGroupSessionRequest,
  ): Effect.Effect<
    GetMulticastGroupSessionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getNetworkAnalyzerConfiguration(
    input: GetNetworkAnalyzerConfigurationRequest,
  ): Effect.Effect<
    GetNetworkAnalyzerConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPartnerAccount(
    input: GetPartnerAccountRequest,
  ): Effect.Effect<
    GetPartnerAccountResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPosition(
    input: GetPositionRequest,
  ): Effect.Effect<
    GetPositionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPositionConfiguration(
    input: GetPositionConfigurationRequest,
  ): Effect.Effect<
    GetPositionConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPositionEstimate(
    input: GetPositionEstimateRequest,
  ): Effect.Effect<
    GetPositionEstimateResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourceEventConfiguration(
    input: GetResourceEventConfigurationRequest,
  ): Effect.Effect<
    GetResourceEventConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourceLogLevel(
    input: GetResourceLogLevelRequest,
  ): Effect.Effect<
    GetResourceLogLevelResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourcePosition(
    input: GetResourcePositionRequest,
  ): Effect.Effect<
    GetResourcePositionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getServiceEndpoint(
    input: GetServiceEndpointRequest,
  ): Effect.Effect<
    GetServiceEndpointResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getServiceProfile(
    input: GetServiceProfileRequest,
  ): Effect.Effect<
    GetServiceProfileResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWirelessDevice(
    input: GetWirelessDeviceRequest,
  ): Effect.Effect<
    GetWirelessDeviceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWirelessDeviceImportTask(
    input: GetWirelessDeviceImportTaskRequest,
  ): Effect.Effect<
    GetWirelessDeviceImportTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWirelessDeviceStatistics(
    input: GetWirelessDeviceStatisticsRequest,
  ): Effect.Effect<
    GetWirelessDeviceStatisticsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWirelessGateway(
    input: GetWirelessGatewayRequest,
  ): Effect.Effect<
    GetWirelessGatewayResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWirelessGatewayCertificate(
    input: GetWirelessGatewayCertificateRequest,
  ): Effect.Effect<
    GetWirelessGatewayCertificateResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWirelessGatewayFirmwareInformation(
    input: GetWirelessGatewayFirmwareInformationRequest,
  ): Effect.Effect<
    GetWirelessGatewayFirmwareInformationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWirelessGatewayStatistics(
    input: GetWirelessGatewayStatisticsRequest,
  ): Effect.Effect<
    GetWirelessGatewayStatisticsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWirelessGatewayTask(
    input: GetWirelessGatewayTaskRequest,
  ): Effect.Effect<
    GetWirelessGatewayTaskResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getWirelessGatewayTaskDefinition(
    input: GetWirelessGatewayTaskDefinitionRequest,
  ): Effect.Effect<
    GetWirelessGatewayTaskDefinitionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDestinations(
    input: ListDestinationsRequest,
  ): Effect.Effect<
    ListDestinationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDeviceProfiles(
    input: ListDeviceProfilesRequest,
  ): Effect.Effect<
    ListDeviceProfilesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDevicesForWirelessDeviceImportTask(
    input: ListDevicesForWirelessDeviceImportTaskRequest,
  ): Effect.Effect<
    ListDevicesForWirelessDeviceImportTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEventConfigurations(
    input: ListEventConfigurationsRequest,
  ): Effect.Effect<
    ListEventConfigurationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFuotaTasks(
    input: ListFuotaTasksRequest,
  ): Effect.Effect<
    ListFuotaTasksResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listMulticastGroups(
    input: ListMulticastGroupsRequest,
  ): Effect.Effect<
    ListMulticastGroupsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listMulticastGroupsByFuotaTask(
    input: ListMulticastGroupsByFuotaTaskRequest,
  ): Effect.Effect<
    ListMulticastGroupsByFuotaTaskResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listNetworkAnalyzerConfigurations(
    input: ListNetworkAnalyzerConfigurationsRequest,
  ): Effect.Effect<
    ListNetworkAnalyzerConfigurationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPartnerAccounts(
    input: ListPartnerAccountsRequest,
  ): Effect.Effect<
    ListPartnerAccountsResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPositionConfigurations(
    input: ListPositionConfigurationsRequest,
  ): Effect.Effect<
    ListPositionConfigurationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listQueuedMessages(
    input: ListQueuedMessagesRequest,
  ): Effect.Effect<
    ListQueuedMessagesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listServiceProfiles(
    input: ListServiceProfilesRequest,
  ): Effect.Effect<
    ListServiceProfilesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listWirelessDeviceImportTasks(
    input: ListWirelessDeviceImportTasksRequest,
  ): Effect.Effect<
    ListWirelessDeviceImportTasksResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listWirelessDevices(
    input: ListWirelessDevicesRequest,
  ): Effect.Effect<
    ListWirelessDevicesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listWirelessGateways(
    input: ListWirelessGatewaysRequest,
  ): Effect.Effect<
    ListWirelessGatewaysResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listWirelessGatewayTaskDefinitions(
    input: ListWirelessGatewayTaskDefinitionsRequest,
  ): Effect.Effect<
    ListWirelessGatewayTaskDefinitionsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putPositionConfiguration(
    input: PutPositionConfigurationRequest,
  ): Effect.Effect<
    PutPositionConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putResourceLogLevel(
    input: PutResourceLogLevelRequest,
  ): Effect.Effect<
    PutResourceLogLevelResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  resetAllResourceLogLevels(
    input: ResetAllResourceLogLevelsRequest,
  ): Effect.Effect<
    ResetAllResourceLogLevelsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  resetResourceLogLevel(
    input: ResetResourceLogLevelRequest,
  ): Effect.Effect<
    ResetResourceLogLevelResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  sendDataToMulticastGroup(
    input: SendDataToMulticastGroupRequest,
  ): Effect.Effect<
    SendDataToMulticastGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  sendDataToWirelessDevice(
    input: SendDataToWirelessDeviceRequest,
  ): Effect.Effect<
    SendDataToWirelessDeviceResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startBulkAssociateWirelessDeviceWithMulticastGroup(
    input: StartBulkAssociateWirelessDeviceWithMulticastGroupRequest,
  ): Effect.Effect<
    StartBulkAssociateWirelessDeviceWithMulticastGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startBulkDisassociateWirelessDeviceFromMulticastGroup(
    input: StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest,
  ): Effect.Effect<
    StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startFuotaTask(
    input: StartFuotaTaskRequest,
  ): Effect.Effect<
    StartFuotaTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startMulticastGroupSession(
    input: StartMulticastGroupSessionRequest,
  ): Effect.Effect<
    StartMulticastGroupSessionResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startSingleWirelessDeviceImportTask(
    input: StartSingleWirelessDeviceImportTaskRequest,
  ): Effect.Effect<
    StartSingleWirelessDeviceImportTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startWirelessDeviceImportTask(
    input: StartWirelessDeviceImportTaskRequest,
  ): Effect.Effect<
    StartWirelessDeviceImportTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | TooManyTagsException | ValidationException | CommonAwsError
  >;
  testWirelessDevice(
    input: TestWirelessDeviceRequest,
  ): Effect.Effect<
    TestWirelessDeviceResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateDestination(
    input: UpdateDestinationRequest,
  ): Effect.Effect<
    UpdateDestinationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateEventConfigurationByResourceTypes(
    input: UpdateEventConfigurationByResourceTypesRequest,
  ): Effect.Effect<
    UpdateEventConfigurationByResourceTypesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateFuotaTask(
    input: UpdateFuotaTaskRequest,
  ): Effect.Effect<
    UpdateFuotaTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateLogLevelsByResourceTypes(
    input: UpdateLogLevelsByResourceTypesRequest,
  ): Effect.Effect<
    UpdateLogLevelsByResourceTypesResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateMetricConfiguration(
    input: UpdateMetricConfigurationRequest,
  ): Effect.Effect<
    UpdateMetricConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateMulticastGroup(
    input: UpdateMulticastGroupRequest,
  ): Effect.Effect<
    UpdateMulticastGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateNetworkAnalyzerConfiguration(
    input: UpdateNetworkAnalyzerConfigurationRequest,
  ): Effect.Effect<
    UpdateNetworkAnalyzerConfigurationResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updatePartnerAccount(
    input: UpdatePartnerAccountRequest,
  ): Effect.Effect<
    UpdatePartnerAccountResponse,
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updatePosition(
    input: UpdatePositionRequest,
  ): Effect.Effect<
    UpdatePositionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateResourceEventConfiguration(
    input: UpdateResourceEventConfigurationRequest,
  ): Effect.Effect<
    UpdateResourceEventConfigurationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateResourcePosition(
    input: UpdateResourcePositionRequest,
  ): Effect.Effect<
    UpdateResourcePositionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateWirelessDevice(
    input: UpdateWirelessDeviceRequest,
  ): Effect.Effect<
    UpdateWirelessDeviceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateWirelessDeviceImportTask(
    input: UpdateWirelessDeviceImportTaskRequest,
  ): Effect.Effect<
    UpdateWirelessDeviceImportTaskResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateWirelessGateway(
    input: UpdateWirelessGatewayRequest,
  ): Effect.Effect<
    UpdateWirelessGatewayResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class IotWireless extends IoTWireless {}

export interface AbpV1_0_x {
  DevAddr?: string;
  SessionKeys?: SessionKeysAbpV1_0_x;
  FCntStart?: number;
}
export interface AbpV1_1 {
  DevAddr?: string;
  SessionKeys?: SessionKeysAbpV1_1;
  FCntStart?: number;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountLinked = boolean;

export interface Accuracy {
  HorizontalAccuracy?: number;
  VerticalAccuracy?: number;
}
export type AckModeRetryDurationSecs = number;

export type AddGwMetadata = boolean;

export type AggregationPeriod = "OneHour" | "OneDay" | "OneWeek";
export type AmazonId = string;

export type AmazonResourceName = string;

export type ApId = string;

export type AppEui = string;

export type AppKey = string;

export interface ApplicationConfig {
  FPort?: number;
  Type?: ApplicationConfigType;
  DestinationName?: string;
}
export type ApplicationConfigType = "SemtechGeolocation";
export type Applications = Array<ApplicationConfig>;
export type ApplicationServerPublicKey = string;

export type AppServerPrivateKey = string;

export type AppSKey = string;

export type AssistPosition = Array<number>;
export interface AssociateAwsAccountWithPartnerAccountRequest {
  Sidewalk: SidewalkAccountInfo;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
}
export interface AssociateAwsAccountWithPartnerAccountResponse {
  Sidewalk?: SidewalkAccountInfo;
  Arn?: string;
}
export interface AssociateMulticastGroupWithFuotaTaskRequest {
  Id: string;
  MulticastGroupId: string;
}
export interface AssociateMulticastGroupWithFuotaTaskResponse {
}
export interface AssociateWirelessDeviceWithFuotaTaskRequest {
  Id: string;
  WirelessDeviceId: string;
}
export interface AssociateWirelessDeviceWithFuotaTaskResponse {
}
export interface AssociateWirelessDeviceWithMulticastGroupRequest {
  Id: string;
  WirelessDeviceId: string;
}
export interface AssociateWirelessDeviceWithMulticastGroupResponse {
}
export interface AssociateWirelessDeviceWithThingRequest {
  Id: string;
  ThingArn: string;
}
export interface AssociateWirelessDeviceWithThingResponse {
}
export interface AssociateWirelessGatewayWithCertificateRequest {
  Id: string;
  IotCertificateId: string;
}
export interface AssociateWirelessGatewayWithCertificateResponse {
  IotCertificateId?: string;
}
export interface AssociateWirelessGatewayWithThingRequest {
  Id: string;
  ThingArn: string;
}
export interface AssociateWirelessGatewayWithThingResponse {
}
export type AutoCreateTasks = boolean;

export type Avg = number;

export type BaseLat = number;

export type BaseLng = number;

export type BaseStationId = number;

export type BatteryLevel = "normal" | "low" | "critical";
export type BCCH = number;

export interface Beaconing {
  DataRate?: number;
  Frequencies?: Array<number>;
}
export type BeaconingDataRate = number;

export type BeaconingFrequencies = Array<number>;
export type BeaconingFrequency = number;

export type BSIC = number;

export interface CancelMulticastGroupSessionRequest {
  Id: string;
}
export interface CancelMulticastGroupSessionResponse {
}
export type CaptureTimeAccuracy = number;

export type CdmaChannel = number;

export type CdmaList = Array<CdmaObj>;
export interface CdmaLocalId {
  PnOffset: number;
  CdmaChannel: number;
}
export type CdmaNmrList = Array<CdmaNmrObj>;
export interface CdmaNmrObj {
  PnOffset: number;
  CdmaChannel: number;
  PilotPower?: number;
  BaseStationId?: number;
}
export interface CdmaObj {
  SystemId: number;
  NetworkId: number;
  BaseStationId: number;
  RegistrationZone?: number;
  CdmaLocalId?: CdmaLocalId;
  PilotPower?: number;
  BaseLat?: number;
  BaseLng?: number;
  CdmaNmr?: Array<CdmaNmrObj>;
}
export type CellParams = number;

export interface CellTowers {
  Gsm?: Array<GsmObj>;
  Wcdma?: Array<WcdmaObj>;
  Tdscdma?: Array<TdscdmaObj>;
  Lte?: Array<LteObj>;
  Cdma?: Array<CdmaObj>;
}
export interface CertificateList {
  SigningAlg: SigningAlg;
  Value: string;
}
export type CertificatePEM = string;

export type CertificateValue = string;

export type ChannelMask = string;

export type ClassBTimeout = number;

export type ClassCTimeout = number;

export type ClientRequestToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
}> {}
export type ConnectionStatus = "Connected" | "Disconnected";
export interface ConnectionStatusEventConfiguration {
  LoRaWAN?: LoRaWANConnectionStatusEventNotificationConfigurations;
  WirelessGatewayIdEventTopic?: EventNotificationTopicStatus;
}
export interface ConnectionStatusResourceTypeEventConfiguration {
  LoRaWAN?: LoRaWANConnectionStatusResourceTypeEventConfiguration;
}
export type Coordinate = number;

export type Crc = number;

export type CreatedAt = Date | string;

export interface CreateDestinationRequest {
  Name: string;
  ExpressionType: ExpressionType;
  Expression: string;
  Description?: string;
  RoleArn: string;
  Tags?: Array<Tag>;
  ClientRequestToken?: string;
}
export interface CreateDestinationResponse {
  Arn?: string;
  Name?: string;
}
export interface CreateDeviceProfileRequest {
  Name?: string;
  LoRaWAN?: LoRaWANDeviceProfile;
  Tags?: Array<Tag>;
  ClientRequestToken?: string;
  Sidewalk?: SidewalkCreateDeviceProfile;
}
export interface CreateDeviceProfileResponse {
  Arn?: string;
  Id?: string;
}
export interface CreateFuotaTaskRequest {
  Name?: string;
  Description?: string;
  ClientRequestToken?: string;
  LoRaWAN?: LoRaWANFuotaTask;
  FirmwareUpdateImage: string;
  FirmwareUpdateRole: string;
  Tags?: Array<Tag>;
  RedundancyPercent?: number;
  FragmentSizeBytes?: number;
  FragmentIntervalMS?: number;
  Descriptor?: string;
}
export interface CreateFuotaTaskResponse {
  Arn?: string;
  Id?: string;
}
export interface CreateMulticastGroupRequest {
  Name?: string;
  Description?: string;
  ClientRequestToken?: string;
  LoRaWAN: LoRaWANMulticast;
  Tags?: Array<Tag>;
}
export interface CreateMulticastGroupResponse {
  Arn?: string;
  Id?: string;
}
export interface CreateNetworkAnalyzerConfigurationRequest {
  Name: string;
  TraceContent?: TraceContent;
  WirelessDevices?: Array<string>;
  WirelessGateways?: Array<string>;
  Description?: string;
  Tags?: Array<Tag>;
  ClientRequestToken?: string;
  MulticastGroups?: Array<string>;
}
export interface CreateNetworkAnalyzerConfigurationResponse {
  Arn?: string;
  Name?: string;
}
export interface CreateServiceProfileRequest {
  Name?: string;
  LoRaWAN?: LoRaWANServiceProfile;
  Tags?: Array<Tag>;
  ClientRequestToken?: string;
}
export interface CreateServiceProfileResponse {
  Arn?: string;
  Id?: string;
}
export interface CreateWirelessDeviceRequest {
  Type: WirelessDeviceType;
  Name?: string;
  Description?: string;
  DestinationName: string;
  ClientRequestToken?: string;
  LoRaWAN?: LoRaWANDevice;
  Tags?: Array<Tag>;
  Positioning?: PositioningConfigStatus;
  Sidewalk?: SidewalkCreateWirelessDevice;
}
export interface CreateWirelessDeviceResponse {
  Arn?: string;
  Id?: string;
}
export interface CreateWirelessGatewayRequest {
  Name?: string;
  Description?: string;
  LoRaWAN: LoRaWANGateway;
  Tags?: Array<Tag>;
  ClientRequestToken?: string;
}
export interface CreateWirelessGatewayResponse {
  Arn?: string;
  Id?: string;
}
export interface CreateWirelessGatewayTaskDefinitionRequest {
  AutoCreateTasks: boolean;
  Name?: string;
  Update?: UpdateWirelessGatewayTaskCreate;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateWirelessGatewayTaskDefinitionResponse {
  Id?: string;
  Arn?: string;
}
export interface CreateWirelessGatewayTaskRequest {
  Id: string;
  WirelessGatewayTaskDefinitionId: string;
}
export interface CreateWirelessGatewayTaskResponse {
  WirelessGatewayTaskDefinitionId?: string;
  Status?: WirelessGatewayTaskStatus;
}
export type CreationDate = Date | string;

export type CreationTime = Date | string;

export type DakCertificateId = string;

export interface DakCertificateMetadata {
  CertificateId: string;
  MaxAllowedSignature?: number;
  FactorySupport?: boolean;
  ApId?: string;
  DeviceTypeId?: string;
}
export type DakCertificateMetadataList = Array<DakCertificateMetadata>;
export interface DeleteDestinationRequest {
  Name: string;
}
export interface DeleteDestinationResponse {
}
export interface DeleteDeviceProfileRequest {
  Id: string;
}
export interface DeleteDeviceProfileResponse {
}
export interface DeleteFuotaTaskRequest {
  Id: string;
}
export interface DeleteFuotaTaskResponse {
}
export interface DeleteMulticastGroupRequest {
  Id: string;
}
export interface DeleteMulticastGroupResponse {
}
export interface DeleteNetworkAnalyzerConfigurationRequest {
  ConfigurationName: string;
}
export interface DeleteNetworkAnalyzerConfigurationResponse {
}
export interface DeleteQueuedMessagesRequest {
  Id: string;
  MessageId: string;
  WirelessDeviceType?: WirelessDeviceType;
}
export interface DeleteQueuedMessagesResponse {
}
export interface DeleteServiceProfileRequest {
  Id: string;
}
export interface DeleteServiceProfileResponse {
}
export interface DeleteWirelessDeviceImportTaskRequest {
  Id: string;
}
export interface DeleteWirelessDeviceImportTaskResponse {
}
export interface DeleteWirelessDeviceRequest {
  Id: string;
}
export interface DeleteWirelessDeviceResponse {
}
export interface DeleteWirelessGatewayRequest {
  Id: string;
}
export interface DeleteWirelessGatewayResponse {
}
export interface DeleteWirelessGatewayTaskDefinitionRequest {
  Id: string;
}
export interface DeleteWirelessGatewayTaskDefinitionResponse {
}
export interface DeleteWirelessGatewayTaskRequest {
  Id: string;
}
export interface DeleteWirelessGatewayTaskResponse {
}
export interface DeregisterWirelessDeviceRequest {
  Identifier: string;
  WirelessDeviceType?: WirelessDeviceType;
}
export interface DeregisterWirelessDeviceResponse {
}
export type Description = string;

export type DestinationArn = string;

export type DestinationList = Array<Destinations>;
export type DestinationName = string;

export interface Destinations {
  Arn?: string;
  Name?: string;
  ExpressionType?: ExpressionType;
  Expression?: string;
  Description?: string;
  RoleArn?: string;
}
export type DevAddr = string;

export type DevEui = string;

export type DeviceCertificateList = Array<CertificateList>;
export type DeviceCreationFile = string;

export type DeviceCreationFileList = Array<string>;
export type DeviceName = string;

export interface DeviceProfile {
  Arn?: string;
  Name?: string;
  Id?: string;
}
export type DeviceProfileArn = string;

export type DeviceProfileId = string;

export type DeviceProfileList = Array<DeviceProfile>;
export type DeviceProfileName = string;

export type DeviceProfileType = "Sidewalk" | "LoRaWAN";
export interface DeviceRegistrationStateEventConfiguration {
  Sidewalk?: SidewalkEventNotificationConfigurations;
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}
export interface DeviceRegistrationStateResourceTypeEventConfiguration {
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}
export type DeviceState = "Provisioned" | "RegisteredNotSeen" | "RegisteredReachable" | "RegisteredUnreachable";
export type DeviceTypeId = string;

export type DevStatusReqFreq = number;

export interface Dimension {
  name?: DimensionName;
  value?: string;
}
export type DimensionName = "DeviceId" | "GatewayId";
export type Dimensions = Array<Dimension>;
export type DimensionValue = string;

export interface DisassociateAwsAccountFromPartnerAccountRequest {
  PartnerAccountId: string;
  PartnerType: PartnerType;
}
export interface DisassociateAwsAccountFromPartnerAccountResponse {
}
export interface DisassociateMulticastGroupFromFuotaTaskRequest {
  Id: string;
  MulticastGroupId: string;
}
export interface DisassociateMulticastGroupFromFuotaTaskResponse {
}
export interface DisassociateWirelessDeviceFromFuotaTaskRequest {
  Id: string;
  WirelessDeviceId: string;
}
export interface DisassociateWirelessDeviceFromFuotaTaskResponse {
}
export interface DisassociateWirelessDeviceFromMulticastGroupRequest {
  Id: string;
  WirelessDeviceId: string;
}
export interface DisassociateWirelessDeviceFromMulticastGroupResponse {
}
export interface DisassociateWirelessDeviceFromThingRequest {
  Id: string;
}
export interface DisassociateWirelessDeviceFromThingResponse {
}
export interface DisassociateWirelessGatewayFromCertificateRequest {
  Id: string;
}
export interface DisassociateWirelessGatewayFromCertificateResponse {
}
export interface DisassociateWirelessGatewayFromThingRequest {
  Id: string;
}
export interface DisassociateWirelessGatewayFromThingResponse {
}
export type DlAllowed = boolean;

export type DlBucketSize = number;

export type DlClass = "ClassB" | "ClassC";
export type DlDr = number;

export type DlFreq = number;

export type DlRate = number;

export type DlRatePolicy = string;

export type Double = number;

export type DownlinkFrequency = number;

export type DownlinkMode = "SEQUENTIAL" | "CONCURRENT" | "USING_UPLINK_GATEWAY";
export interface DownlinkQueueMessage {
  MessageId?: string;
  TransmitMode?: number;
  ReceivedAt?: string;
  LoRaWAN?: LoRaWANSendDataToDevice;
}
export type DownlinkQueueMessagesList = Array<DownlinkQueueMessage>;
export type DrMax = number;

export type DrMaxBox = number;

export type DrMin = number;

export type DrMinBox = number;

export type EARFCN = number;

export type EndPoint = string;

export type EutranCid = number;

export type Event = "discovered" | "lost" | "ack" | "nack" | "passthrough";
export interface EventConfigurationItem {
  Identifier?: string;
  IdentifierType?: IdentifierType;
  PartnerType?: EventNotificationPartnerType;
  Events?: EventNotificationItemConfigurations;
}
export type EventConfigurationsList = Array<EventConfigurationItem>;
export interface EventNotificationItemConfigurations {
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;
  Proximity?: ProximityEventConfiguration;
  Join?: JoinEventConfiguration;
  ConnectionStatus?: ConnectionStatusEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}
export type EventNotificationPartnerType = "Sidewalk";
export type EventNotificationResourceType = "SidewalkAccount" | "WirelessDevice" | "WirelessGateway";
export type EventNotificationTopicStatus = "Enabled" | "Disabled";
export type Expression = string;

export type ExpressionType = "RuleName" | "MqttTopic";
export type FactoryPresetFreqsList = Array<number>;
export type FactorySupport = boolean;

export type FCntStart = number;

export type FileDescriptor = string;

export type Fingerprint = string;

export type FirmwareUpdateImage = string;

export type FirmwareUpdateRole = string;

export type FNwkSIntKey = string;

export type FPort = number;

export interface FPorts {
  Fuota?: number;
  Multicast?: number;
  ClockSync?: number;
  Positioning?: Positioning;
  Applications?: Array<ApplicationConfig>;
}
export type FragmentIntervalMS = number;

export type FragmentSizeBytes = number;

export type FuotaDeviceStatus = "Initial" | "Package_Not_Supported" | "FragAlgo_unsupported" | "Not_enough_memory" | "FragIndex_unsupported" | "Wrong_descriptor" | "SessionCnt_replay" | "MissingFrag" | "MemoryError" | "MICError" | "Successful" | "Device_exist_in_conflict_fuota_task";
export interface FuotaTask {
  Id?: string;
  Arn?: string;
  Name?: string;
}
export type FuotaTaskArn = string;

export type FuotaTaskEvent = "Fuota";
export interface FuotaTaskEventLogOption {
  Event: FuotaTaskEvent;
  LogLevel: LogLevel;
}
export type FuotaTaskEventLogOptionList = Array<FuotaTaskEventLogOption>;
export type FuotaTaskId = string;

export type FuotaTaskList = Array<FuotaTask>;
export interface FuotaTaskLogOption {
  Type: FuotaTaskType;
  LogLevel: LogLevel;
  Events?: Array<FuotaTaskEventLogOption>;
}
export type FuotaTaskLogOptionList = Array<FuotaTaskLogOption>;
export type FuotaTaskName = string;

export type FuotaTaskStatus = "Pending" | "FuotaSession_Waiting" | "In_FuotaSession" | "FuotaDone" | "Delete_Waiting";
export type FuotaTaskType = "LoRaWAN";
export type GatewayEui = string;

export type GatewayList = Array<GatewayListItem>;
export interface GatewayListItem {
  GatewayId: string;
  DownlinkFrequency: number;
}
export type GatewayListMulticast = Array<string>;
export type GatewayMaxEirp = number;

export type GenAppKey = string;

export type GeoJsonPayload = Uint8Array | string;

export type GeranCid = number;

export interface GetDestinationRequest {
  Name: string;
}
export interface GetDestinationResponse {
  Arn?: string;
  Name?: string;
  Expression?: string;
  ExpressionType?: ExpressionType;
  Description?: string;
  RoleArn?: string;
}
export interface GetDeviceProfileRequest {
  Id: string;
}
export interface GetDeviceProfileResponse {
  Arn?: string;
  Name?: string;
  Id?: string;
  LoRaWAN?: LoRaWANDeviceProfile;
  Sidewalk?: SidewalkGetDeviceProfile;
}
export interface GetEventConfigurationByResourceTypesRequest {
}
export interface GetEventConfigurationByResourceTypesResponse {
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;
  Proximity?: ProximityResourceTypeEventConfiguration;
  Join?: JoinResourceTypeEventConfiguration;
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
}
export interface GetFuotaTaskRequest {
  Id: string;
}
export interface GetFuotaTaskResponse {
  Arn?: string;
  Id?: string;
  Status?: FuotaTaskStatus;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANFuotaTaskGetInfo;
  FirmwareUpdateImage?: string;
  FirmwareUpdateRole?: string;
  CreatedAt?: Date | string;
  RedundancyPercent?: number;
  FragmentSizeBytes?: number;
  FragmentIntervalMS?: number;
  Descriptor?: string;
}
export interface GetLogLevelsByResourceTypesRequest {
}
export interface GetLogLevelsByResourceTypesResponse {
  DefaultLogLevel?: LogLevel;
  WirelessGatewayLogOptions?: Array<WirelessGatewayLogOption>;
  WirelessDeviceLogOptions?: Array<WirelessDeviceLogOption>;
  FuotaTaskLogOptions?: Array<FuotaTaskLogOption>;
}
export interface GetMetricConfigurationRequest {
}
export interface GetMetricConfigurationResponse {
  SummaryMetric?: SummaryMetricConfiguration;
}
export interface GetMetricsRequest {
  SummaryMetricQueries?: Array<SummaryMetricQuery>;
}
export interface GetMetricsResponse {
  SummaryMetricQueryResults?: Array<SummaryMetricQueryResult>;
}
export interface GetMulticastGroupRequest {
  Id: string;
}
export interface GetMulticastGroupResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  Status?: string;
  LoRaWAN?: LoRaWANMulticastGet;
  CreatedAt?: Date | string;
}
export interface GetMulticastGroupSessionRequest {
  Id: string;
}
export interface GetMulticastGroupSessionResponse {
  LoRaWAN?: LoRaWANMulticastSession;
}
export interface GetNetworkAnalyzerConfigurationRequest {
  ConfigurationName: string;
}
export interface GetNetworkAnalyzerConfigurationResponse {
  TraceContent?: TraceContent;
  WirelessDevices?: Array<string>;
  WirelessGateways?: Array<string>;
  Description?: string;
  Arn?: string;
  Name?: string;
  MulticastGroups?: Array<string>;
}
export interface GetPartnerAccountRequest {
  PartnerAccountId: string;
  PartnerType: PartnerType;
}
export interface GetPartnerAccountResponse {
  Sidewalk?: SidewalkAccountInfoWithFingerprint;
  AccountLinked?: boolean;
}
export interface GetPositionConfigurationRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
}
export interface GetPositionConfigurationResponse {
  Solvers?: PositionSolverDetails;
  Destination?: string;
}
export interface GetPositionEstimateRequest {
  WiFiAccessPoints?: Array<WiFiAccessPoint>;
  CellTowers?: CellTowers;
  Ip?: Ip;
  Gnss?: Gnss;
  Timestamp?: Date | string;
}
export interface GetPositionEstimateResponse {
  GeoJsonPayload?: Uint8Array | string;
}
export interface GetPositionRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
}
export interface GetPositionResponse {
  Position?: Array<number>;
  Accuracy?: Accuracy;
  SolverType?: PositionSolverType;
  SolverProvider?: PositionSolverProvider;
  SolverVersion?: string;
  Timestamp?: string;
}
export interface GetResourceEventConfigurationRequest {
  Identifier: string;
  IdentifierType: IdentifierType;
  PartnerType?: EventNotificationPartnerType;
}
export interface GetResourceEventConfigurationResponse {
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;
  Proximity?: ProximityEventConfiguration;
  Join?: JoinEventConfiguration;
  ConnectionStatus?: ConnectionStatusEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}
export interface GetResourceLogLevelRequest {
  ResourceIdentifier: string;
  ResourceType: string;
}
export interface GetResourceLogLevelResponse {
  LogLevel?: LogLevel;
}
export interface GetResourcePositionRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
}
export interface GetResourcePositionResponse {
  GeoJsonPayload?: Uint8Array | string;
}
export interface GetServiceEndpointRequest {
  ServiceType?: WirelessGatewayServiceType;
}
export interface GetServiceEndpointResponse {
  ServiceType?: WirelessGatewayServiceType;
  ServiceEndpoint?: string;
  ServerTrust?: string;
}
export interface GetServiceProfileRequest {
  Id: string;
}
export interface GetServiceProfileResponse {
  Arn?: string;
  Name?: string;
  Id?: string;
  LoRaWAN?: LoRaWANGetServiceProfileInfo;
}
export interface GetWirelessDeviceImportTaskRequest {
  Id: string;
}
export interface GetWirelessDeviceImportTaskResponse {
  Id?: string;
  Arn?: string;
  DestinationName?: string;
  Sidewalk?: SidewalkGetStartImportInfo;
  CreationTime?: Date | string;
  Status?: ImportTaskStatus;
  StatusReason?: string;
  InitializedImportedDeviceCount?: number;
  PendingImportedDeviceCount?: number;
  OnboardedImportedDeviceCount?: number;
  FailedImportedDeviceCount?: number;
}
export interface GetWirelessDeviceRequest {
  Identifier: string;
  IdentifierType: WirelessDeviceIdType;
}
export interface GetWirelessDeviceResponse {
  Type?: WirelessDeviceType;
  Name?: string;
  Description?: string;
  DestinationName?: string;
  Id?: string;
  Arn?: string;
  ThingName?: string;
  ThingArn?: string;
  LoRaWAN?: LoRaWANDevice;
  Sidewalk?: SidewalkDevice;
  Positioning?: PositioningConfigStatus;
}
export interface GetWirelessDeviceStatisticsRequest {
  WirelessDeviceId: string;
}
export interface GetWirelessDeviceStatisticsResponse {
  WirelessDeviceId?: string;
  LastUplinkReceivedAt?: string;
  LoRaWAN?: LoRaWANDeviceMetadata;
  Sidewalk?: SidewalkDeviceMetadata;
}
export interface GetWirelessGatewayCertificateRequest {
  Id: string;
}
export interface GetWirelessGatewayCertificateResponse {
  IotCertificateId?: string;
  LoRaWANNetworkServerCertificateId?: string;
}
export interface GetWirelessGatewayFirmwareInformationRequest {
  Id: string;
}
export interface GetWirelessGatewayFirmwareInformationResponse {
  LoRaWAN?: LoRaWANGatewayCurrentVersion;
}
export interface GetWirelessGatewayRequest {
  Identifier: string;
  IdentifierType: WirelessGatewayIdType;
}
export interface GetWirelessGatewayResponse {
  Name?: string;
  Id?: string;
  Description?: string;
  LoRaWAN?: LoRaWANGateway;
  Arn?: string;
  ThingName?: string;
  ThingArn?: string;
}
export interface GetWirelessGatewayStatisticsRequest {
  WirelessGatewayId: string;
}
export interface GetWirelessGatewayStatisticsResponse {
  WirelessGatewayId?: string;
  LastUplinkReceivedAt?: string;
  ConnectionStatus?: ConnectionStatus;
}
export interface GetWirelessGatewayTaskDefinitionRequest {
  Id: string;
}
export interface GetWirelessGatewayTaskDefinitionResponse {
  AutoCreateTasks?: boolean;
  Name?: string;
  Update?: UpdateWirelessGatewayTaskCreate;
  Arn?: string;
}
export interface GetWirelessGatewayTaskRequest {
  Id: string;
}
export interface GetWirelessGatewayTaskResponse {
  WirelessGatewayId?: string;
  WirelessGatewayTaskDefinitionId?: string;
  LastUplinkReceivedAt?: string;
  TaskCreatedAt?: string;
  Status?: WirelessGatewayTaskStatus;
}
export interface GlobalIdentity {
  Lac: number;
  GeranCid: number;
}
export interface Gnss {
  Payload: string;
  CaptureTime?: number;
  CaptureTimeAccuracy?: number;
  AssistPosition?: Array<number>;
  AssistAltitude?: number;
  Use2DSolver?: boolean;
}
export type GnssNav = string;

export type GPST = number;

export type GsmList = Array<GsmObj>;
export interface GsmLocalId {
  Bsic: number;
  Bcch: number;
}
export type GsmNmrList = Array<GsmNmrObj>;
export interface GsmNmrObj {
  Bsic: number;
  Bcch: number;
  RxLevel?: number;
  GlobalIdentity?: GlobalIdentity;
}
export interface GsmObj {
  Mcc: number;
  Mnc: number;
  Lac: number;
  GeranCid: number;
  GsmLocalId?: GsmLocalId;
  GsmTimingAdvance?: number;
  RxLevel?: number;
  GsmNmr?: Array<GsmNmrObj>;
}
export type GsmTimingAdvance = number;

export type HorizontalAccuracy = number;

export type HrAllowed = boolean;

export type Id = string;

export type Identifier = string;

export type IdentifierType = "PartnerAccountId" | "DevEui" | "GatewayEui" | "WirelessDeviceId" | "WirelessGatewayId";
export interface ImportedSidewalkDevice {
  SidewalkManufacturingSn?: string;
  OnboardingStatus?: OnboardStatus;
  OnboardingStatusReason?: string;
  LastUpdateTime?: Date | string;
}
export interface ImportedWirelessDevice {
  Sidewalk?: ImportedSidewalkDevice;
}
export type ImportedWirelessDeviceCount = number;

export type ImportedWirelessDeviceList = Array<ImportedWirelessDevice>;
export type ImportTaskArn = string;

export type ImportTaskId = string;

export type ImportTaskStatus = "INITIALIZING" | "INITIALIZED" | "PENDING" | "COMPLETE" | "FAILED" | "DELETING";
export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type IotCertificateId = string;

export interface Ip {
  IpAddress: string;
}
export type IPAddress = string;

export type ISODateTimeString = string;

export type JoinEui = string;

export type JoinEuiFilters = Array<Array<string>>;
export type JoinEuiRange = Array<string>;
export interface JoinEventConfiguration {
  LoRaWAN?: LoRaWANJoinEventNotificationConfigurations;
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}
export interface JoinResourceTypeEventConfiguration {
  LoRaWAN?: LoRaWANJoinResourceTypeEventConfiguration;
}
export type LAC = number;

export type LastUpdateTime = Date | string;

export interface ListDestinationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDestinationsResponse {
  NextToken?: string;
  DestinationList?: Array<Destinations>;
}
export interface ListDeviceProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
  DeviceProfileType?: DeviceProfileType;
}
export interface ListDeviceProfilesResponse {
  NextToken?: string;
  DeviceProfileList?: Array<DeviceProfile>;
}
export interface ListDevicesForWirelessDeviceImportTaskRequest {
  Id: string;
  MaxResults?: number;
  NextToken?: string;
  Status?: OnboardStatus;
}
export interface ListDevicesForWirelessDeviceImportTaskResponse {
  NextToken?: string;
  DestinationName?: string;
  ImportedWirelessDeviceList?: Array<ImportedWirelessDevice>;
}
export interface ListEventConfigurationsRequest {
  ResourceType: EventNotificationResourceType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListEventConfigurationsResponse {
  NextToken?: string;
  EventConfigurationsList?: Array<EventConfigurationItem>;
}
export interface ListFuotaTasksRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFuotaTasksResponse {
  NextToken?: string;
  FuotaTaskList?: Array<FuotaTask>;
}
export interface ListMulticastGroupsByFuotaTaskRequest {
  Id: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMulticastGroupsByFuotaTaskResponse {
  NextToken?: string;
  MulticastGroupList?: Array<MulticastGroupByFuotaTask>;
}
export interface ListMulticastGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMulticastGroupsResponse {
  NextToken?: string;
  MulticastGroupList?: Array<MulticastGroup>;
}
export interface ListNetworkAnalyzerConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListNetworkAnalyzerConfigurationsResponse {
  NextToken?: string;
  NetworkAnalyzerConfigurationList?: Array<NetworkAnalyzerConfigurations>;
}
export interface ListPartnerAccountsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPartnerAccountsResponse {
  NextToken?: string;
  Sidewalk?: Array<SidewalkAccountInfoWithFingerprint>;
}
export interface ListPositionConfigurationsRequest {
  ResourceType?: PositionResourceType;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPositionConfigurationsResponse {
  PositionConfigurationList?: Array<PositionConfigurationItem>;
  NextToken?: string;
}
export interface ListQueuedMessagesRequest {
  Id: string;
  NextToken?: string;
  MaxResults?: number;
  WirelessDeviceType?: WirelessDeviceType;
}
export interface ListQueuedMessagesResponse {
  NextToken?: string;
  DownlinkQueueMessagesList?: Array<DownlinkQueueMessage>;
}
export interface ListServiceProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListServiceProfilesResponse {
  NextToken?: string;
  ServiceProfileList?: Array<ServiceProfile>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListWirelessDeviceImportTasksRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListWirelessDeviceImportTasksResponse {
  NextToken?: string;
  WirelessDeviceImportTaskList?: Array<WirelessDeviceImportTask>;
}
export interface ListWirelessDevicesRequest {
  MaxResults?: number;
  NextToken?: string;
  DestinationName?: string;
  DeviceProfileId?: string;
  ServiceProfileId?: string;
  WirelessDeviceType?: WirelessDeviceType;
  FuotaTaskId?: string;
  MulticastGroupId?: string;
}
export interface ListWirelessDevicesResponse {
  NextToken?: string;
  WirelessDeviceList?: Array<WirelessDeviceStatistics>;
}
export interface ListWirelessGatewaysRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWirelessGatewaysResponse {
  NextToken?: string;
  WirelessGatewayList?: Array<WirelessGatewayStatistics>;
}
export interface ListWirelessGatewayTaskDefinitionsRequest {
  MaxResults?: number;
  NextToken?: string;
  TaskDefinitionType?: WirelessGatewayTaskDefinitionType;
}
export interface ListWirelessGatewayTaskDefinitionsResponse {
  NextToken?: string;
  TaskDefinitions?: Array<UpdateWirelessGatewayTaskEntry>;
}
export type LogLevel = "INFO" | "ERROR" | "DISABLED";
export interface LoRaWANConnectionStatusEventNotificationConfigurations {
  GatewayEuiEventTopic?: EventNotificationTopicStatus;
}
export interface LoRaWANConnectionStatusResourceTypeEventConfiguration {
  WirelessGatewayEventTopic?: EventNotificationTopicStatus;
}
export interface LoRaWANDevice {
  DevEui?: string;
  DeviceProfileId?: string;
  ServiceProfileId?: string;
  OtaaV1_1?: OtaaV1_1;
  OtaaV1_0_x?: OtaaV1_0_x;
  AbpV1_1?: AbpV1_1;
  AbpV1_0_x?: AbpV1_0_x;
  FPorts?: FPorts;
}
export interface LoRaWANDeviceMetadata {
  DevEui?: string;
  FPort?: number;
  DataRate?: number;
  Frequency?: number;
  Timestamp?: string;
  Gateways?: Array<LoRaWANGatewayMetadata>;
  PublicGateways?: Array<LoRaWANPublicGatewayMetadata>;
}
export interface LoRaWANDeviceProfile {
  SupportsClassB?: boolean;
  ClassBTimeout?: number;
  PingSlotPeriod?: number;
  PingSlotDr?: number;
  PingSlotFreq?: number;
  SupportsClassC?: boolean;
  ClassCTimeout?: number;
  MacVersion?: string;
  RegParamsRevision?: string;
  RxDelay1?: number;
  RxDrOffset1?: number;
  RxDataRate2?: number;
  RxFreq2?: number;
  FactoryPresetFreqsList?: Array<number>;
  MaxEirp?: number;
  MaxDutyCycle?: number;
  RfRegion?: string;
  SupportsJoin?: boolean;
  Supports32BitFCnt?: boolean;
}
export interface LoRaWANFuotaTask {
  RfRegion?: SupportedRfRegion;
}
export interface LoRaWANFuotaTaskGetInfo {
  RfRegion?: string;
  StartTime?: Date | string;
}
export interface LoRaWANGateway {
  GatewayEui?: string;
  RfRegion?: string;
  JoinEuiFilters?: Array<Array<string>>;
  NetIdFilters?: Array<string>;
  SubBands?: Array<number>;
  Beaconing?: Beaconing;
  MaxEirp?: number;
}
export interface LoRaWANGatewayCurrentVersion {
  CurrentVersion?: LoRaWANGatewayVersion;
}
export interface LoRaWANGatewayMetadata {
  GatewayEui?: string;
  Snr?: number;
  Rssi?: number;
}
export type LoRaWANGatewayMetadataList = Array<LoRaWANGatewayMetadata>;
export interface LoRaWANGatewayVersion {
  PackageVersion?: string;
  Model?: string;
  Station?: string;
}
export interface LoRaWANGetServiceProfileInfo {
  UlRate?: number;
  UlBucketSize?: number;
  UlRatePolicy?: string;
  DlRate?: number;
  DlBucketSize?: number;
  DlRatePolicy?: string;
  AddGwMetadata?: boolean;
  DevStatusReqFreq?: number;
  ReportDevStatusBattery?: boolean;
  ReportDevStatusMargin?: boolean;
  DrMin?: number;
  DrMax?: number;
  ChannelMask?: string;
  PrAllowed?: boolean;
  HrAllowed?: boolean;
  RaAllowed?: boolean;
  NwkGeoLoc?: boolean;
  TargetPer?: number;
  MinGwDiversity?: number;
  TxPowerIndexMin?: number;
  TxPowerIndexMax?: number;
  NbTransMin?: number;
  NbTransMax?: number;
}
export interface LoRaWANJoinEventNotificationConfigurations {
  DevEuiEventTopic?: EventNotificationTopicStatus;
}
export interface LoRaWANJoinResourceTypeEventConfiguration {
  WirelessDeviceEventTopic?: EventNotificationTopicStatus;
}
export interface LoRaWANListDevice {
  DevEui?: string;
}
export interface LoRaWANMulticast {
  RfRegion?: SupportedRfRegion;
  DlClass?: DlClass;
  ParticipatingGateways?: ParticipatingGatewaysMulticast;
}
export interface LoRaWANMulticastGet {
  RfRegion?: SupportedRfRegion;
  DlClass?: DlClass;
  NumberOfDevicesRequested?: number;
  NumberOfDevicesInGroup?: number;
  ParticipatingGateways?: ParticipatingGatewaysMulticast;
}
export interface LoRaWANMulticastMetadata {
  FPort?: number;
}
export interface LoRaWANMulticastSession {
  DlDr?: number;
  DlFreq?: number;
  SessionStartTime?: Date | string;
  SessionTimeout?: number;
  PingSlotPeriod?: number;
}
export interface LoRaWANPublicGatewayMetadata {
  ProviderNetId?: string;
  Id?: string;
  Rssi?: number;
  Snr?: number;
  RfRegion?: string;
  DlAllowed?: boolean;
}
export type LoRaWANPublicGatewayMetadataList = Array<LoRaWANPublicGatewayMetadata>;
export interface LoRaWANSendDataToDevice {
  FPort?: number;
  ParticipatingGateways?: ParticipatingGateways;
}
export interface LoRaWANServiceProfile {
  AddGwMetadata?: boolean;
  DrMin?: number;
  DrMax?: number;
  PrAllowed?: boolean;
  RaAllowed?: boolean;
  TxPowerIndexMin?: number;
  TxPowerIndexMax?: number;
  NbTransMin?: number;
  NbTransMax?: number;
}
export interface LoRaWANStartFuotaTask {
  StartTime?: Date | string;
}
export interface LoRaWANUpdateDevice {
  DeviceProfileId?: string;
  ServiceProfileId?: string;
  AbpV1_1?: UpdateAbpV1_1;
  AbpV1_0_x?: UpdateAbpV1_0_x;
  FPorts?: UpdateFPorts;
}
export interface LoRaWANUpdateGatewayTaskCreate {
  UpdateSignature?: string;
  SigKeyCrc?: number;
  CurrentVersion?: LoRaWANGatewayVersion;
  UpdateVersion?: LoRaWANGatewayVersion;
}
export interface LoRaWANUpdateGatewayTaskEntry {
  CurrentVersion?: LoRaWANGatewayVersion;
  UpdateVersion?: LoRaWANGatewayVersion;
}
export type LteList = Array<LteObj>;
export interface LteLocalId {
  Pci: number;
  Earfcn: number;
}
export type LteNmrList = Array<LteNmrObj>;
export interface LteNmrObj {
  Pci: number;
  Earfcn: number;
  EutranCid?: number;
  Rsrp?: number;
  Rsrq?: number;
}
export interface LteObj {
  Mcc: number;
  Mnc: number;
  EutranCid: number;
  Tac?: number;
  LteLocalId?: LteLocalId;
  LteTimingAdvance?: number;
  Rsrp?: number;
  Rsrq?: number;
  NrCapable?: boolean;
  LteNmr?: Array<LteNmrObj>;
}
export type LteTimingAdvance = number;

export type MacAddress = string;

export type MacVersion = string;

export type Max = number;

export type MaxAllowedSignature = number;

export type MaxDutyCycle = number;

export type MaxEirp = number;

export type MaxResults = number;

export type MCC = number;

export type McGroupId = number;

export type Message = string;

export interface MessageDeliveryStatusEventConfiguration {
  Sidewalk?: SidewalkEventNotificationConfigurations;
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}
export interface MessageDeliveryStatusResourceTypeEventConfiguration {
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}
export type MessageId = string;

export type MessageType = "CUSTOM_COMMAND_ID_NOTIFY" | "CUSTOM_COMMAND_ID_GET" | "CUSTOM_COMMAND_ID_SET" | "CUSTOM_COMMAND_ID_RESP";
export type MetricName = "DeviceRSSI" | "DeviceSNR" | "DeviceRoamingRSSI" | "DeviceRoamingSNR" | "DeviceUplinkCount" | "DeviceDownlinkCount" | "DeviceUplinkLostCount" | "DeviceUplinkLostRate" | "DeviceJoinRequestCount" | "DeviceJoinAcceptCount" | "DeviceRoamingUplinkCount" | "DeviceRoamingDownlinkCount" | "GatewayUpTime" | "GatewayDownTime" | "GatewayRSSI" | "GatewaySNR" | "GatewayUplinkCount" | "GatewayDownlinkCount" | "GatewayJoinRequestCount" | "GatewayJoinAcceptCount" | "AwsAccountUplinkCount" | "AwsAccountDownlinkCount" | "AwsAccountUplinkLostCount" | "AwsAccountUplinkLostRate" | "AwsAccountJoinRequestCount" | "AwsAccountJoinAcceptCount" | "AwsAccountRoamingUplinkCount" | "AwsAccountRoamingDownlinkCount" | "AwsAccountDeviceCount" | "AwsAccountGatewayCount" | "AwsAccountActiveDeviceCount" | "AwsAccountActiveGatewayCount";
export type MetricQueryEndTimestamp = Date | string;

export type MetricQueryError = string;

export type MetricQueryId = string;

export type MetricQueryStartTimestamp = Date | string;

export type MetricQueryStatus = "Succeeded" | "Failed";
export type MetricQueryTimestamp = Date | string;

export type MetricQueryTimestamps = Array<Date | string>;
export interface MetricQueryValue {
  Min?: number;
  Max?: number;
  Sum?: number;
  Avg?: number;
  Std?: number;
  P90?: number;
}
export type MetricQueryValues = Array<MetricQueryValue>;
export type MetricUnit = string;

export type Min = number;

export type MinGwDiversity = number;

export type MNC = number;

export type Model = string;

export type MulticastDeviceStatus = string;

export type MulticastFrameInfo = "ENABLED" | "DISABLED";
export interface MulticastGroup {
  Id?: string;
  Arn?: string;
  Name?: string;
}
export type MulticastGroupArn = string;

export interface MulticastGroupByFuotaTask {
  Id?: string;
}
export type MulticastGroupId = string;

export type MulticastGroupList = Array<MulticastGroup>;
export type MulticastGroupListByFuotaTask = Array<MulticastGroupByFuotaTask>;
export type MulticastGroupMessageId = string;

export type MulticastGroupName = string;

export type MulticastGroupStatus = string;

export interface MulticastWirelessMetadata {
  LoRaWAN?: LoRaWANMulticastMetadata;
}
export type NbTransMax = number;

export type NbTransMin = number;

export type NetId = string;

export type NetIdFilters = Array<string>;
export type NetworkAnalyzerConfigurationArn = string;

export type NetworkAnalyzerConfigurationList = Array<NetworkAnalyzerConfigurations>;
export type NetworkAnalyzerConfigurationName = string;

export interface NetworkAnalyzerConfigurations {
  Arn?: string;
  Name?: string;
}
export type NetworkAnalyzerMulticastGroupList = Array<string>;
export type NetworkId = number;

export type NextToken = string;

export type NRCapable = boolean;

export type NumberOfDevicesInGroup = number;

export type NumberOfDevicesRequested = number;

export type NwkGeoLoc = boolean;

export type NwkKey = string;

export type NwkSEncKey = string;

export type NwkSKey = string;

export type OnboardStatus = "INITIALIZED" | "PENDING" | "ONBOARDED" | "FAILED";
export type OnboardStatusReason = string;

export interface OtaaV1_0_x {
  AppKey?: string;
  AppEui?: string;
  JoinEui?: string;
  GenAppKey?: string;
}
export interface OtaaV1_1 {
  AppKey?: string;
  NwkKey?: string;
  JoinEui?: string;
}
export type P90 = number;

export type PackageVersion = string;

export interface ParticipatingGateways {
  DownlinkMode: DownlinkMode;
  GatewayList: Array<GatewayListItem>;
  TransmissionInterval: number;
}
export interface ParticipatingGatewaysMulticast {
  GatewayList?: Array<string>;
  TransmissionInterval?: number;
}
export type PartnerAccountArn = string;

export type PartnerAccountId = string;

export type PartnerType = "Sidewalk";
export type PathLoss = number;

export type PayloadData = string;

export type PCI = number;

export type PilotPower = number;

export type PingSlotDr = number;

export type PingSlotFreq = number;

export type PingSlotPeriod = number;

export type PnOffset = number;

export type PositionConfigurationFec = "ROSE" | "NONE";
export interface PositionConfigurationItem {
  ResourceIdentifier?: string;
  ResourceType?: PositionResourceType;
  Solvers?: PositionSolverDetails;
  Destination?: string;
}
export type PositionConfigurationList = Array<PositionConfigurationItem>;
export type PositionConfigurationStatus = "Enabled" | "Disabled";
export type PositionCoordinate = Array<number>;
export type PositionCoordinateValue = number;

export interface Positioning {
  ClockSync?: number;
  Stream?: number;
  Gnss?: number;
}
export type PositioningConfigStatus = "Enabled" | "Disabled";
export type PositionResourceIdentifier = string;

export type PositionResourceType = "WirelessDevice" | "WirelessGateway";
export interface PositionSolverConfigurations {
  SemtechGnss?: SemtechGnssConfiguration;
}
export interface PositionSolverDetails {
  SemtechGnss?: SemtechGnssDetail;
}
export type PositionSolverProvider = "Semtech";
export type PositionSolverType = "GNSS";
export type PositionSolverVersion = string;

export type PrAllowed = boolean;

export type PresetFreq = number;

export type PrivateKeysList = Array<CertificateList>;
export type ProviderNetId = string;

export interface ProximityEventConfiguration {
  Sidewalk?: SidewalkEventNotificationConfigurations;
  WirelessDeviceIdEventTopic?: EventNotificationTopicStatus;
}
export interface ProximityResourceTypeEventConfiguration {
  Sidewalk?: SidewalkResourceTypeEventConfiguration;
}
export type PSC = number;

export interface PutPositionConfigurationRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
  Solvers?: PositionSolverConfigurations;
  Destination?: string;
}
export interface PutPositionConfigurationResponse {
}
export interface PutResourceLogLevelRequest {
  ResourceIdentifier: string;
  ResourceType: string;
  LogLevel: LogLevel;
}
export interface PutResourceLogLevelResponse {
}
export type QualificationStatus = boolean;

export type QueryString = string;

export type RaAllowed = boolean;

export type RedundancyPercent = number;

export type RegistrationZone = number;

export type RegParamsRevision = string;

export type ReportDevStatusBattery = boolean;

export type ReportDevStatusMargin = boolean;

export interface ResetAllResourceLogLevelsRequest {
}
export interface ResetAllResourceLogLevelsResponse {
}
export interface ResetResourceLogLevelRequest {
  ResourceIdentifier: string;
  ResourceType: string;
}
export interface ResetResourceLogLevelResponse {
}
export type ResourceId = string;

export type ResourceIdentifier = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
}> {}
export type ResourceType = string;

export type Result = string;

export type RfRegion = string;

export type Role = string;

export type RoleArn = string;

export type RSCP = number;

export type RSRP = number;

export type RSRQ = number;

export type RSS = number;

export type RxDataRate2 = number;

export type RxDelay1 = number;

export type RxDrOffset1 = number;

export type RxFreq2 = number;

export type RxLevel = number;

export interface SemtechGnssConfiguration {
  Status: PositionConfigurationStatus;
  Fec: PositionConfigurationFec;
}
export interface SemtechGnssDetail {
  Provider?: PositionSolverProvider;
  Type?: PositionSolverType;
  Status?: PositionConfigurationStatus;
  Fec?: PositionConfigurationFec;
}
export interface SendDataToMulticastGroupRequest {
  Id: string;
  PayloadData: string;
  WirelessMetadata: MulticastWirelessMetadata;
}
export interface SendDataToMulticastGroupResponse {
  MessageId?: string;
}
export interface SendDataToWirelessDeviceRequest {
  Id: string;
  TransmitMode: number;
  PayloadData: string;
  WirelessMetadata?: WirelessMetadata;
}
export interface SendDataToWirelessDeviceResponse {
  MessageId?: string;
}
export type Seq = number;

export interface ServiceProfile {
  Arn?: string;
  Name?: string;
  Id?: string;
}
export type ServiceProfileArn = string;

export type ServiceProfileId = string;

export type ServiceProfileList = Array<ServiceProfile>;
export type ServiceProfileName = string;

export interface SessionKeysAbpV1_0_x {
  NwkSKey?: string;
  AppSKey?: string;
}
export interface SessionKeysAbpV1_1 {
  FNwkSIntKey?: string;
  SNwkSIntKey?: string;
  NwkSEncKey?: string;
  AppSKey?: string;
}
export type SessionStartTimeTimestamp = Date | string;

export type SessionTimeout = number;

export interface SidewalkAccountInfo {
  AmazonId?: string;
  AppServerPrivateKey?: string;
}
export interface SidewalkAccountInfoWithFingerprint {
  AmazonId?: string;
  Fingerprint?: string;
  Arn?: string;
}
export type SidewalkAccountList = Array<SidewalkAccountInfoWithFingerprint>;
export interface SidewalkCreateDeviceProfile {
}
export interface SidewalkCreateWirelessDevice {
  DeviceProfileId?: string;
}
export interface SidewalkDevice {
  AmazonId?: string;
  SidewalkId?: string;
  SidewalkManufacturingSn?: string;
  DeviceCertificates?: Array<CertificateList>;
  PrivateKeys?: Array<CertificateList>;
  DeviceProfileId?: string;
  CertificateId?: string;
  Status?: WirelessDeviceSidewalkStatus;
}
export interface SidewalkDeviceMetadata {
  Rssi?: number;
  BatteryLevel?: BatteryLevel;
  Event?: Event;
  DeviceState?: DeviceState;
}
export interface SidewalkEventNotificationConfigurations {
  AmazonIdEventTopic?: EventNotificationTopicStatus;
}
export interface SidewalkGetDeviceProfile {
  ApplicationServerPublicKey?: string;
  QualificationStatus?: boolean;
  DakCertificateMetadata?: Array<DakCertificateMetadata>;
}
export interface SidewalkGetStartImportInfo {
  DeviceCreationFileList?: Array<string>;
  Role?: string;
}
export type SidewalkId = string;

export interface SidewalkListDevice {
  AmazonId?: string;
  SidewalkId?: string;
  SidewalkManufacturingSn?: string;
  DeviceCertificates?: Array<CertificateList>;
  DeviceProfileId?: string;
  Status?: WirelessDeviceSidewalkStatus;
}
export type SidewalkManufacturingSn = string;

export interface SidewalkResourceTypeEventConfiguration {
  WirelessDeviceEventTopic?: EventNotificationTopicStatus;
}
export interface SidewalkSendDataToDevice {
  Seq?: number;
  MessageType?: MessageType;
  AckModeRetryDurationSecs?: number;
}
export interface SidewalkSingleStartImportInfo {
  SidewalkManufacturingSn?: string;
}
export interface SidewalkStartImportInfo {
  DeviceCreationFile?: string;
  Role?: string;
}
export interface SidewalkUpdateAccount {
  AppServerPrivateKey?: string;
}
export interface SidewalkUpdateImportInfo {
  DeviceCreationFile?: string;
}
export type SigningAlg = "Ed25519" | "P256r1";
export type SNwkSIntKey = string;

export interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {
  Id: string;
  QueryString?: string;
  Tags?: Array<Tag>;
}
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {
}
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {
  Id: string;
  QueryString?: string;
  Tags?: Array<Tag>;
}
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {
}
export interface StartFuotaTaskRequest {
  Id: string;
  LoRaWAN?: LoRaWANStartFuotaTask;
}
export interface StartFuotaTaskResponse {
}
export interface StartMulticastGroupSessionRequest {
  Id: string;
  LoRaWAN: LoRaWANMulticastSession;
}
export interface StartMulticastGroupSessionResponse {
}
export interface StartSingleWirelessDeviceImportTaskRequest {
  DestinationName: string;
  ClientRequestToken?: string;
  DeviceName?: string;
  Tags?: Array<Tag>;
  Sidewalk: SidewalkSingleStartImportInfo;
}
export interface StartSingleWirelessDeviceImportTaskResponse {
  Id?: string;
  Arn?: string;
}
export type StartTime = Date | string;

export interface StartWirelessDeviceImportTaskRequest {
  DestinationName: string;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
  Sidewalk: SidewalkStartImportInfo;
}
export interface StartWirelessDeviceImportTaskResponse {
  Id?: string;
  Arn?: string;
}
export type Station = string;

export type StatusReason = string;

export type Std = number;

export type SubBand = number;

export type SubBands = Array<number>;
export type Sum = number;

export interface SummaryMetricConfiguration {
  Status?: SummaryMetricConfigurationStatus;
}
export type SummaryMetricConfigurationStatus = "Enabled" | "Disabled";
export type SummaryMetricQueries = Array<SummaryMetricQuery>;
export interface SummaryMetricQuery {
  QueryId?: string;
  MetricName?: MetricName;
  Dimensions?: Array<Dimension>;
  AggregationPeriod?: AggregationPeriod;
  StartTimestamp?: Date | string;
  EndTimestamp?: Date | string;
}
export interface SummaryMetricQueryResult {
  QueryId?: string;
  QueryStatus?: MetricQueryStatus;
  Error?: string;
  MetricName?: MetricName;
  Dimensions?: Array<Dimension>;
  AggregationPeriod?: AggregationPeriod;
  StartTimestamp?: Date | string;
  EndTimestamp?: Date | string;
  Timestamps?: Array<Date | string>;
  Values?: Array<MetricQueryValue>;
  Unit?: string;
}
export type SummaryMetricQueryResults = Array<SummaryMetricQueryResult>;
export type SupportedRfRegion = "EU868" | "US915" | "AU915" | "AS923-1" | "AS923-2" | "AS923-3" | "AS923-4" | "EU433" | "CN470" | "CN779" | "RU864" | "KR920" | "IN865";
export type Supports32BitFCnt = boolean;

export type SupportsClassB = boolean;

export type SupportsClassC = boolean;

export type SupportsJoin = boolean;

export type SystemId = number;

export type TAC = number;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type TargetPer = number;

export type TdscdmaList = Array<TdscdmaObj>;
export interface TdscdmaLocalId {
  Uarfcn: number;
  CellParams: number;
}
export type TdscdmaNmrList = Array<TdscdmaNmrObj>;
export interface TdscdmaNmrObj {
  Uarfcn: number;
  CellParams: number;
  UtranCid?: number;
  Rscp?: number;
  PathLoss?: number;
}
export interface TdscdmaObj {
  Mcc: number;
  Mnc: number;
  Lac?: number;
  UtranCid: number;
  TdscdmaLocalId?: TdscdmaLocalId;
  TdscdmaTimingAdvance?: number;
  Rscp?: number;
  PathLoss?: number;
  TdscdmaNmr?: Array<TdscdmaNmrObj>;
}
export type TdscdmaTimingAdvance = number;

export interface TestWirelessDeviceRequest {
  Id: string;
}
export interface TestWirelessDeviceResponse {
  Result?: string;
}
export type ThingArn = string;

export type ThingName = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export interface TraceContent {
  WirelessDeviceFrameInfo?: WirelessDeviceFrameInfo;
  LogLevel?: LogLevel;
  MulticastFrameInfo?: MulticastFrameInfo;
}
export type TransmissionInterval = number;

export type TransmissionIntervalMulticast = number;

export type TransmitMode = number;

export type TxPowerIndexMax = number;

export type TxPowerIndexMin = number;

export type UARFCN = number;

export type UARFCNDL = number;

export type UlBucketSize = number;

export type UlRate = number;

export type UlRatePolicy = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateAbpV1_0_x {
  FCntStart?: number;
}
export interface UpdateAbpV1_1 {
  FCntStart?: number;
}
export type UpdateDataSource = string;

export interface UpdateDestinationRequest {
  Name: string;
  ExpressionType?: ExpressionType;
  Expression?: string;
  Description?: string;
  RoleArn?: string;
}
export interface UpdateDestinationResponse {
}
export interface UpdateEventConfigurationByResourceTypesRequest {
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;
  Proximity?: ProximityResourceTypeEventConfiguration;
  Join?: JoinResourceTypeEventConfiguration;
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
}
export interface UpdateEventConfigurationByResourceTypesResponse {
}
export interface UpdateFPorts {
  Positioning?: Positioning;
  Applications?: Array<ApplicationConfig>;
}
export interface UpdateFuotaTaskRequest {
  Id: string;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANFuotaTask;
  FirmwareUpdateImage?: string;
  FirmwareUpdateRole?: string;
  RedundancyPercent?: number;
  FragmentSizeBytes?: number;
  FragmentIntervalMS?: number;
  Descriptor?: string;
}
export interface UpdateFuotaTaskResponse {
}
export interface UpdateLogLevelsByResourceTypesRequest {
  DefaultLogLevel?: LogLevel;
  FuotaTaskLogOptions?: Array<FuotaTaskLogOption>;
  WirelessDeviceLogOptions?: Array<WirelessDeviceLogOption>;
  WirelessGatewayLogOptions?: Array<WirelessGatewayLogOption>;
}
export interface UpdateLogLevelsByResourceTypesResponse {
}
export interface UpdateMetricConfigurationRequest {
  SummaryMetric?: SummaryMetricConfiguration;
}
export interface UpdateMetricConfigurationResponse {
}
export interface UpdateMulticastGroupRequest {
  Id: string;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANMulticast;
}
export interface UpdateMulticastGroupResponse {
}
export interface UpdateNetworkAnalyzerConfigurationRequest {
  ConfigurationName: string;
  TraceContent?: TraceContent;
  WirelessDevicesToAdd?: Array<string>;
  WirelessDevicesToRemove?: Array<string>;
  WirelessGatewaysToAdd?: Array<string>;
  WirelessGatewaysToRemove?: Array<string>;
  Description?: string;
  MulticastGroupsToAdd?: Array<string>;
  MulticastGroupsToRemove?: Array<string>;
}
export interface UpdateNetworkAnalyzerConfigurationResponse {
}
export interface UpdatePartnerAccountRequest {
  Sidewalk: SidewalkUpdateAccount;
  PartnerAccountId: string;
  PartnerType: PartnerType;
}
export interface UpdatePartnerAccountResponse {
}
export interface UpdatePositionRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
  Position: Array<number>;
}
export interface UpdatePositionResponse {
}
export interface UpdateResourceEventConfigurationRequest {
  Identifier: string;
  IdentifierType: IdentifierType;
  PartnerType?: EventNotificationPartnerType;
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;
  Proximity?: ProximityEventConfiguration;
  Join?: JoinEventConfiguration;
  ConnectionStatus?: ConnectionStatusEventConfiguration;
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}
export interface UpdateResourceEventConfigurationResponse {
}
export interface UpdateResourcePositionRequest {
  ResourceIdentifier: string;
  ResourceType: PositionResourceType;
  GeoJsonPayload?: Uint8Array | string;
}
export interface UpdateResourcePositionResponse {
}
export type UpdateSignature = string;

export interface UpdateWirelessDeviceImportTaskRequest {
  Id: string;
  Sidewalk: SidewalkUpdateImportInfo;
}
export interface UpdateWirelessDeviceImportTaskResponse {
}
export interface UpdateWirelessDeviceRequest {
  Id: string;
  DestinationName?: string;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANUpdateDevice;
  Positioning?: PositioningConfigStatus;
}
export interface UpdateWirelessDeviceResponse {
}
export interface UpdateWirelessGatewayRequest {
  Id: string;
  Name?: string;
  Description?: string;
  JoinEuiFilters?: Array<Array<string>>;
  NetIdFilters?: Array<string>;
  MaxEirp?: number;
}
export interface UpdateWirelessGatewayResponse {
}
export interface UpdateWirelessGatewayTaskCreate {
  UpdateDataSource?: string;
  UpdateDataRole?: string;
  LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
}
export interface UpdateWirelessGatewayTaskEntry {
  Id?: string;
  LoRaWAN?: LoRaWANUpdateGatewayTaskEntry;
  Arn?: string;
}
export type Use2DSolver = boolean;

export type UtranCid = number;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type VerticalAccuracy = number;

export type WcdmaList = Array<WcdmaObj>;
export interface WcdmaLocalId {
  Uarfcndl: number;
  Psc: number;
}
export type WcdmaNmrList = Array<WcdmaNmrObj>;
export interface WcdmaNmrObj {
  Uarfcndl: number;
  Psc: number;
  UtranCid: number;
  Rscp?: number;
  PathLoss?: number;
}
export interface WcdmaObj {
  Mcc: number;
  Mnc: number;
  Lac?: number;
  UtranCid: number;
  WcdmaLocalId?: WcdmaLocalId;
  Rscp?: number;
  PathLoss?: number;
  WcdmaNmr?: Array<WcdmaNmrObj>;
}
export interface WiFiAccessPoint {
  MacAddress: string;
  Rss: number;
}
export type WiFiAccessPoints = Array<WiFiAccessPoint>;
export type WirelessDeviceArn = string;

export type WirelessDeviceEvent = "Join" | "Rejoin" | "Uplink_Data" | "Downlink_Data" | "Registration";
export interface WirelessDeviceEventLogOption {
  Event: WirelessDeviceEvent;
  LogLevel: LogLevel;
}
export type WirelessDeviceEventLogOptionList = Array<WirelessDeviceEventLogOption>;
export type WirelessDeviceFrameInfo = "ENABLED" | "DISABLED";
export type WirelessDeviceId = string;

export type WirelessDeviceIdType = "WirelessDeviceId" | "DevEui" | "ThingName" | "SidewalkManufacturingSn";
export interface WirelessDeviceImportTask {
  Id?: string;
  Arn?: string;
  DestinationName?: string;
  Sidewalk?: SidewalkGetStartImportInfo;
  CreationTime?: Date | string;
  Status?: ImportTaskStatus;
  StatusReason?: string;
  InitializedImportedDeviceCount?: number;
  PendingImportedDeviceCount?: number;
  OnboardedImportedDeviceCount?: number;
  FailedImportedDeviceCount?: number;
}
export type WirelessDeviceImportTaskList = Array<WirelessDeviceImportTask>;
export type WirelessDeviceList = Array<string>;
export interface WirelessDeviceLogOption {
  Type: WirelessDeviceType;
  LogLevel: LogLevel;
  Events?: Array<WirelessDeviceEventLogOption>;
}
export type WirelessDeviceLogOptionList = Array<WirelessDeviceLogOption>;
export type WirelessDeviceName = string;

export type WirelessDeviceSidewalkStatus = "PROVISIONED" | "REGISTERED" | "ACTIVATED" | "UNKNOWN";
export interface WirelessDeviceStatistics {
  Arn?: string;
  Id?: string;
  Type?: WirelessDeviceType;
  Name?: string;
  DestinationName?: string;
  LastUplinkReceivedAt?: string;
  LoRaWAN?: LoRaWANListDevice;
  Sidewalk?: SidewalkListDevice;
  FuotaDeviceStatus?: FuotaDeviceStatus;
  MulticastDeviceStatus?: string;
  McGroupId?: number;
}
export type WirelessDeviceStatisticsList = Array<WirelessDeviceStatistics>;
export type WirelessDeviceType = "Sidewalk" | "LoRaWAN";
export type WirelessGatewayArn = string;

export type WirelessGatewayEvent = "CUPS_Request" | "Certificate";
export interface WirelessGatewayEventLogOption {
  Event: WirelessGatewayEvent;
  LogLevel: LogLevel;
}
export type WirelessGatewayEventLogOptionList = Array<WirelessGatewayEventLogOption>;
export type WirelessGatewayId = string;

export type WirelessGatewayIdType = "GatewayEui" | "WirelessGatewayId" | "ThingName";
export type WirelessGatewayList = Array<string>;
export interface WirelessGatewayLogOption {
  Type: WirelessGatewayType;
  LogLevel: LogLevel;
  Events?: Array<WirelessGatewayEventLogOption>;
}
export type WirelessGatewayLogOptionList = Array<WirelessGatewayLogOption>;
export type WirelessGatewayName = string;

export type WirelessGatewayServiceType = "CUPS" | "LNS";
export interface WirelessGatewayStatistics {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  LoRaWAN?: LoRaWANGateway;
  LastUplinkReceivedAt?: string;
}
export type WirelessGatewayStatisticsList = Array<WirelessGatewayStatistics>;
export type WirelessGatewayTaskDefinitionArn = string;

export type WirelessGatewayTaskDefinitionId = string;

export type WirelessGatewayTaskDefinitionList = Array<UpdateWirelessGatewayTaskEntry>;
export type WirelessGatewayTaskDefinitionType = "UPDATE";
export type WirelessGatewayTaskName = string;

export type WirelessGatewayTaskStatus = "PENDING" | "IN_PROGRESS" | "FIRST_RETRY" | "SECOND_RETRY" | "COMPLETED" | "FAILED";
export type WirelessGatewayType = "LoRaWAN";
export interface WirelessMetadata {
  LoRaWAN?: LoRaWANSendDataToDevice;
  Sidewalk?: SidewalkSendDataToDevice;
}
export declare namespace AssociateAwsAccountWithPartnerAccount {
  export type Input = AssociateAwsAccountWithPartnerAccountRequest;
  export type Output = AssociateAwsAccountWithPartnerAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateMulticastGroupWithFuotaTask {
  export type Input = AssociateMulticastGroupWithFuotaTaskRequest;
  export type Output = AssociateMulticastGroupWithFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateWirelessDeviceWithFuotaTask {
  export type Input = AssociateWirelessDeviceWithFuotaTaskRequest;
  export type Output = AssociateWirelessDeviceWithFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateWirelessDeviceWithMulticastGroup {
  export type Input = AssociateWirelessDeviceWithMulticastGroupRequest;
  export type Output = AssociateWirelessDeviceWithMulticastGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateWirelessDeviceWithThing {
  export type Input = AssociateWirelessDeviceWithThingRequest;
  export type Output = AssociateWirelessDeviceWithThingResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateWirelessGatewayWithCertificate {
  export type Input = AssociateWirelessGatewayWithCertificateRequest;
  export type Output = AssociateWirelessGatewayWithCertificateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateWirelessGatewayWithThing {
  export type Input = AssociateWirelessGatewayWithThingRequest;
  export type Output = AssociateWirelessGatewayWithThingResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelMulticastGroupSession {
  export type Input = CancelMulticastGroupSessionRequest;
  export type Output = CancelMulticastGroupSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDestination {
  export type Input = CreateDestinationRequest;
  export type Output = CreateDestinationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDeviceProfile {
  export type Input = CreateDeviceProfileRequest;
  export type Output = CreateDeviceProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateFuotaTask {
  export type Input = CreateFuotaTaskRequest;
  export type Output = CreateFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateMulticastGroup {
  export type Input = CreateMulticastGroupRequest;
  export type Output = CreateMulticastGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateNetworkAnalyzerConfiguration {
  export type Input = CreateNetworkAnalyzerConfigurationRequest;
  export type Output = CreateNetworkAnalyzerConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateServiceProfile {
  export type Input = CreateServiceProfileRequest;
  export type Output = CreateServiceProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWirelessDevice {
  export type Input = CreateWirelessDeviceRequest;
  export type Output = CreateWirelessDeviceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWirelessGateway {
  export type Input = CreateWirelessGatewayRequest;
  export type Output = CreateWirelessGatewayResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWirelessGatewayTask {
  export type Input = CreateWirelessGatewayTaskRequest;
  export type Output = CreateWirelessGatewayTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWirelessGatewayTaskDefinition {
  export type Input = CreateWirelessGatewayTaskDefinitionRequest;
  export type Output = CreateWirelessGatewayTaskDefinitionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDestination {
  export type Input = DeleteDestinationRequest;
  export type Output = DeleteDestinationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDeviceProfile {
  export type Input = DeleteDeviceProfileRequest;
  export type Output = DeleteDeviceProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteFuotaTask {
  export type Input = DeleteFuotaTaskRequest;
  export type Output = DeleteFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMulticastGroup {
  export type Input = DeleteMulticastGroupRequest;
  export type Output = DeleteMulticastGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteNetworkAnalyzerConfiguration {
  export type Input = DeleteNetworkAnalyzerConfigurationRequest;
  export type Output = DeleteNetworkAnalyzerConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteQueuedMessages {
  export type Input = DeleteQueuedMessagesRequest;
  export type Output = DeleteQueuedMessagesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteServiceProfile {
  export type Input = DeleteServiceProfileRequest;
  export type Output = DeleteServiceProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWirelessDevice {
  export type Input = DeleteWirelessDeviceRequest;
  export type Output = DeleteWirelessDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWirelessDeviceImportTask {
  export type Input = DeleteWirelessDeviceImportTaskRequest;
  export type Output = DeleteWirelessDeviceImportTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWirelessGateway {
  export type Input = DeleteWirelessGatewayRequest;
  export type Output = DeleteWirelessGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWirelessGatewayTask {
  export type Input = DeleteWirelessGatewayTaskRequest;
  export type Output = DeleteWirelessGatewayTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWirelessGatewayTaskDefinition {
  export type Input = DeleteWirelessGatewayTaskDefinitionRequest;
  export type Output = DeleteWirelessGatewayTaskDefinitionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterWirelessDevice {
  export type Input = DeregisterWirelessDeviceRequest;
  export type Output = DeregisterWirelessDeviceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateAwsAccountFromPartnerAccount {
  export type Input = DisassociateAwsAccountFromPartnerAccountRequest;
  export type Output = DisassociateAwsAccountFromPartnerAccountResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateMulticastGroupFromFuotaTask {
  export type Input = DisassociateMulticastGroupFromFuotaTaskRequest;
  export type Output = DisassociateMulticastGroupFromFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateWirelessDeviceFromFuotaTask {
  export type Input = DisassociateWirelessDeviceFromFuotaTaskRequest;
  export type Output = DisassociateWirelessDeviceFromFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateWirelessDeviceFromMulticastGroup {
  export type Input = DisassociateWirelessDeviceFromMulticastGroupRequest;
  export type Output = DisassociateWirelessDeviceFromMulticastGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateWirelessDeviceFromThing {
  export type Input = DisassociateWirelessDeviceFromThingRequest;
  export type Output = DisassociateWirelessDeviceFromThingResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateWirelessGatewayFromCertificate {
  export type Input = DisassociateWirelessGatewayFromCertificateRequest;
  export type Output = DisassociateWirelessGatewayFromCertificateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateWirelessGatewayFromThing {
  export type Input = DisassociateWirelessGatewayFromThingRequest;
  export type Output = DisassociateWirelessGatewayFromThingResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDestination {
  export type Input = GetDestinationRequest;
  export type Output = GetDestinationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeviceProfile {
  export type Input = GetDeviceProfileRequest;
  export type Output = GetDeviceProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEventConfigurationByResourceTypes {
  export type Input = GetEventConfigurationByResourceTypesRequest;
  export type Output = GetEventConfigurationByResourceTypesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFuotaTask {
  export type Input = GetFuotaTaskRequest;
  export type Output = GetFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLogLevelsByResourceTypes {
  export type Input = GetLogLevelsByResourceTypesRequest;
  export type Output = GetLogLevelsByResourceTypesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMetricConfiguration {
  export type Input = GetMetricConfigurationRequest;
  export type Output = GetMetricConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMetrics {
  export type Input = GetMetricsRequest;
  export type Output = GetMetricsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMulticastGroup {
  export type Input = GetMulticastGroupRequest;
  export type Output = GetMulticastGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetMulticastGroupSession {
  export type Input = GetMulticastGroupSessionRequest;
  export type Output = GetMulticastGroupSessionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNetworkAnalyzerConfiguration {
  export type Input = GetNetworkAnalyzerConfigurationRequest;
  export type Output = GetNetworkAnalyzerConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPartnerAccount {
  export type Input = GetPartnerAccountRequest;
  export type Output = GetPartnerAccountResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPosition {
  export type Input = GetPositionRequest;
  export type Output = GetPositionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPositionConfiguration {
  export type Input = GetPositionConfigurationRequest;
  export type Output = GetPositionConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPositionEstimate {
  export type Input = GetPositionEstimateRequest;
  export type Output = GetPositionEstimateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceEventConfiguration {
  export type Input = GetResourceEventConfigurationRequest;
  export type Output = GetResourceEventConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceLogLevel {
  export type Input = GetResourceLogLevelRequest;
  export type Output = GetResourceLogLevelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePosition {
  export type Input = GetResourcePositionRequest;
  export type Output = GetResourcePositionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceEndpoint {
  export type Input = GetServiceEndpointRequest;
  export type Output = GetServiceEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetServiceProfile {
  export type Input = GetServiceProfileRequest;
  export type Output = GetServiceProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWirelessDevice {
  export type Input = GetWirelessDeviceRequest;
  export type Output = GetWirelessDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWirelessDeviceImportTask {
  export type Input = GetWirelessDeviceImportTaskRequest;
  export type Output = GetWirelessDeviceImportTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWirelessDeviceStatistics {
  export type Input = GetWirelessDeviceStatisticsRequest;
  export type Output = GetWirelessDeviceStatisticsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWirelessGateway {
  export type Input = GetWirelessGatewayRequest;
  export type Output = GetWirelessGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWirelessGatewayCertificate {
  export type Input = GetWirelessGatewayCertificateRequest;
  export type Output = GetWirelessGatewayCertificateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWirelessGatewayFirmwareInformation {
  export type Input = GetWirelessGatewayFirmwareInformationRequest;
  export type Output = GetWirelessGatewayFirmwareInformationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWirelessGatewayStatistics {
  export type Input = GetWirelessGatewayStatisticsRequest;
  export type Output = GetWirelessGatewayStatisticsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWirelessGatewayTask {
  export type Input = GetWirelessGatewayTaskRequest;
  export type Output = GetWirelessGatewayTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetWirelessGatewayTaskDefinition {
  export type Input = GetWirelessGatewayTaskDefinitionRequest;
  export type Output = GetWirelessGatewayTaskDefinitionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDestinations {
  export type Input = ListDestinationsRequest;
  export type Output = ListDestinationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDeviceProfiles {
  export type Input = ListDeviceProfilesRequest;
  export type Output = ListDeviceProfilesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDevicesForWirelessDeviceImportTask {
  export type Input = ListDevicesForWirelessDeviceImportTaskRequest;
  export type Output = ListDevicesForWirelessDeviceImportTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEventConfigurations {
  export type Input = ListEventConfigurationsRequest;
  export type Output = ListEventConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFuotaTasks {
  export type Input = ListFuotaTasksRequest;
  export type Output = ListFuotaTasksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMulticastGroups {
  export type Input = ListMulticastGroupsRequest;
  export type Output = ListMulticastGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListMulticastGroupsByFuotaTask {
  export type Input = ListMulticastGroupsByFuotaTaskRequest;
  export type Output = ListMulticastGroupsByFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNetworkAnalyzerConfigurations {
  export type Input = ListNetworkAnalyzerConfigurationsRequest;
  export type Output = ListNetworkAnalyzerConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPartnerAccounts {
  export type Input = ListPartnerAccountsRequest;
  export type Output = ListPartnerAccountsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPositionConfigurations {
  export type Input = ListPositionConfigurationsRequest;
  export type Output = ListPositionConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListQueuedMessages {
  export type Input = ListQueuedMessagesRequest;
  export type Output = ListQueuedMessagesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListServiceProfiles {
  export type Input = ListServiceProfilesRequest;
  export type Output = ListServiceProfilesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWirelessDeviceImportTasks {
  export type Input = ListWirelessDeviceImportTasksRequest;
  export type Output = ListWirelessDeviceImportTasksResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWirelessDevices {
  export type Input = ListWirelessDevicesRequest;
  export type Output = ListWirelessDevicesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWirelessGateways {
  export type Input = ListWirelessGatewaysRequest;
  export type Output = ListWirelessGatewaysResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWirelessGatewayTaskDefinitions {
  export type Input = ListWirelessGatewayTaskDefinitionsRequest;
  export type Output = ListWirelessGatewayTaskDefinitionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutPositionConfiguration {
  export type Input = PutPositionConfigurationRequest;
  export type Output = PutPositionConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourceLogLevel {
  export type Input = PutResourceLogLevelRequest;
  export type Output = PutResourceLogLevelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetAllResourceLogLevels {
  export type Input = ResetAllResourceLogLevelsRequest;
  export type Output = ResetAllResourceLogLevelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetResourceLogLevel {
  export type Input = ResetResourceLogLevelRequest;
  export type Output = ResetResourceLogLevelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendDataToMulticastGroup {
  export type Input = SendDataToMulticastGroupRequest;
  export type Output = SendDataToMulticastGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendDataToWirelessDevice {
  export type Input = SendDataToWirelessDeviceRequest;
  export type Output = SendDataToWirelessDeviceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartBulkAssociateWirelessDeviceWithMulticastGroup {
  export type Input = StartBulkAssociateWirelessDeviceWithMulticastGroupRequest;
  export type Output = StartBulkAssociateWirelessDeviceWithMulticastGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartBulkDisassociateWirelessDeviceFromMulticastGroup {
  export type Input = StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest;
  export type Output = StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartFuotaTask {
  export type Input = StartFuotaTaskRequest;
  export type Output = StartFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartMulticastGroupSession {
  export type Input = StartMulticastGroupSessionRequest;
  export type Output = StartMulticastGroupSessionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSingleWirelessDeviceImportTask {
  export type Input = StartSingleWirelessDeviceImportTaskRequest;
  export type Output = StartSingleWirelessDeviceImportTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartWirelessDeviceImportTask {
  export type Input = StartWirelessDeviceImportTaskRequest;
  export type Output = StartWirelessDeviceImportTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TestWirelessDevice {
  export type Input = TestWirelessDeviceRequest;
  export type Output = TestWirelessDeviceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDestination {
  export type Input = UpdateDestinationRequest;
  export type Output = UpdateDestinationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEventConfigurationByResourceTypes {
  export type Input = UpdateEventConfigurationByResourceTypesRequest;
  export type Output = UpdateEventConfigurationByResourceTypesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateFuotaTask {
  export type Input = UpdateFuotaTaskRequest;
  export type Output = UpdateFuotaTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLogLevelsByResourceTypes {
  export type Input = UpdateLogLevelsByResourceTypesRequest;
  export type Output = UpdateLogLevelsByResourceTypesResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMetricConfiguration {
  export type Input = UpdateMetricConfigurationRequest;
  export type Output = UpdateMetricConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateMulticastGroup {
  export type Input = UpdateMulticastGroupRequest;
  export type Output = UpdateMulticastGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateNetworkAnalyzerConfiguration {
  export type Input = UpdateNetworkAnalyzerConfigurationRequest;
  export type Output = UpdateNetworkAnalyzerConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePartnerAccount {
  export type Input = UpdatePartnerAccountRequest;
  export type Output = UpdatePartnerAccountResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePosition {
  export type Input = UpdatePositionRequest;
  export type Output = UpdatePositionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResourceEventConfiguration {
  export type Input = UpdateResourceEventConfigurationRequest;
  export type Output = UpdateResourceEventConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResourcePosition {
  export type Input = UpdateResourcePositionRequest;
  export type Output = UpdateResourcePositionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWirelessDevice {
  export type Input = UpdateWirelessDeviceRequest;
  export type Output = UpdateWirelessDeviceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWirelessDeviceImportTask {
  export type Input = UpdateWirelessDeviceImportTaskRequest;
  export type Output = UpdateWirelessDeviceImportTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWirelessGateway {
  export type Input = UpdateWirelessGatewayRequest;
  export type Output = UpdateWirelessGatewayResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type IoTWirelessErrors = AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | TooManyTagsException | ValidationException | CommonAwsError;

