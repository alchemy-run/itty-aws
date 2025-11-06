import type { Effect, Data as EffectData } from "effect";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class IoTManagedIntegrations extends AWSServiceClient {
  getCustomEndpoint(
    input: GetCustomEndpointRequest,
  ): Effect.Effect<
    GetCustomEndpointResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  registerCustomEndpoint(
    input: RegisterCustomEndpointRequest,
  ): Effect.Effect<
    RegisterCustomEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  sendConnectorEvent(
    input: SendConnectorEventRequest,
  ): Effect.Effect<
    SendConnectorEventResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ConflictException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ConflictException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createAccountAssociation(
    input: CreateAccountAssociationRequest,
  ): Effect.Effect<
    CreateAccountAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createCloudConnector(
    input: CreateCloudConnectorRequest,
  ): Effect.Effect<
    CreateCloudConnectorResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createConnectorDestination(
    input: CreateConnectorDestinationRequest,
  ): Effect.Effect<
    CreateConnectorDestinationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createCredentialLocker(
    input: CreateCredentialLockerRequest,
  ): Effect.Effect<
    CreateCredentialLockerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDestination(
    input: CreateDestinationRequest,
  ): Effect.Effect<
    CreateDestinationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEventLogConfiguration(
    input: CreateEventLogConfigurationRequest,
  ): Effect.Effect<
    CreateEventLogConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createManagedThing(
    input: CreateManagedThingRequest,
  ): Effect.Effect<
    CreateManagedThingResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createNotificationConfiguration(
    input: CreateNotificationConfigurationRequest,
  ): Effect.Effect<
    CreateNotificationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createOtaTask(
    input: CreateOtaTaskRequest,
  ): Effect.Effect<
    CreateOtaTaskResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  createOtaTaskConfiguration(
    input: CreateOtaTaskConfigurationRequest,
  ): Effect.Effect<
    CreateOtaTaskConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createProvisioningProfile(
    input: CreateProvisioningProfileRequest,
  ): Effect.Effect<
    CreateProvisioningProfileResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deleteAccountAssociation(
    input: DeleteAccountAssociationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCloudConnector(
    input: DeleteCloudConnectorRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deleteConnectorDestination(
    input: DeleteConnectorDestinationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCredentialLocker(
    input: DeleteCredentialLockerRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDestination(
    input: DeleteDestinationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEventLogConfiguration(
    input: DeleteEventLogConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteManagedThing(
    input: DeleteManagedThingRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deleteNotificationConfiguration(
    input: DeleteNotificationConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOtaTask(
    input: DeleteOtaTaskRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOtaTaskConfiguration(
    input: DeleteOtaTaskConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteProvisioningProfile(
    input: DeleteProvisioningProfileRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  deregisterAccountAssociation(
    input: DeregisterAccountAssociationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAccountAssociation(
    input: GetAccountAssociationRequest,
  ): Effect.Effect<
    GetAccountAssociationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCloudConnector(
    input: GetCloudConnectorRequest,
  ): Effect.Effect<
    GetCloudConnectorResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getConnectorDestination(
    input: GetConnectorDestinationRequest,
  ): Effect.Effect<
    GetConnectorDestinationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCredentialLocker(
    input: GetCredentialLockerRequest,
  ): Effect.Effect<
    GetCredentialLockerResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDefaultEncryptionConfiguration(
    input: GetDefaultEncryptionConfigurationRequest,
  ): Effect.Effect<
    GetDefaultEncryptionConfigurationResponse,
    | AccessDeniedException
    | InternalFailureException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getDestination(
    input: GetDestinationRequest,
  ): Effect.Effect<
    GetDestinationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDeviceDiscovery(
    input: GetDeviceDiscoveryRequest,
  ): Effect.Effect<
    GetDeviceDiscoveryResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getEventLogConfiguration(
    input: GetEventLogConfigurationRequest,
  ): Effect.Effect<
    GetEventLogConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getHubConfiguration(
    input: GetHubConfigurationRequest,
  ): Effect.Effect<
    GetHubConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getManagedThing(
    input: GetManagedThingRequest,
  ): Effect.Effect<
    GetManagedThingResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getManagedThingCapabilities(
    input: GetManagedThingCapabilitiesRequest,
  ): Effect.Effect<
    GetManagedThingCapabilitiesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getManagedThingCertificate(
    input: GetManagedThingCertificateRequest,
  ): Effect.Effect<
    GetManagedThingCertificateResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getManagedThingConnectivityData(
    input: GetManagedThingConnectivityDataRequest,
  ): Effect.Effect<
    GetManagedThingConnectivityDataResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getManagedThingMetaData(
    input: GetManagedThingMetaDataRequest,
  ): Effect.Effect<
    GetManagedThingMetaDataResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getManagedThingState(
    input: GetManagedThingStateRequest,
  ): Effect.Effect<
    GetManagedThingStateResponse,
    | AccessDeniedException
    | InternalFailureException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getNotificationConfiguration(
    input: GetNotificationConfigurationRequest,
  ): Effect.Effect<
    GetNotificationConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOtaTask(
    input: GetOtaTaskRequest,
  ): Effect.Effect<
    GetOtaTaskResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOtaTaskConfiguration(
    input: GetOtaTaskConfigurationRequest,
  ): Effect.Effect<
    GetOtaTaskConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getProvisioningProfile(
    input: GetProvisioningProfileRequest,
  ): Effect.Effect<
    GetProvisioningProfileResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  getRuntimeLogConfiguration(
    input: GetRuntimeLogConfigurationRequest,
  ): Effect.Effect<
    GetRuntimeLogConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSchemaVersion(
    input: GetSchemaVersionRequest,
  ): Effect.Effect<
    GetSchemaVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAccountAssociations(
    input: ListAccountAssociationsRequest,
  ): Effect.Effect<
    ListAccountAssociationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCloudConnectors(
    input: ListCloudConnectorsRequest,
  ): Effect.Effect<
    ListCloudConnectorsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listConnectorDestinations(
    input: ListConnectorDestinationsRequest,
  ): Effect.Effect<
    ListConnectorDestinationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCredentialLockers(
    input: ListCredentialLockersRequest,
  ): Effect.Effect<
    ListCredentialLockersResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDestinations(
    input: ListDestinationsRequest,
  ): Effect.Effect<
    ListDestinationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDeviceDiscoveries(
    input: ListDeviceDiscoveriesRequest,
  ): Effect.Effect<
    ListDeviceDiscoveriesResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listDiscoveredDevices(
    input: ListDiscoveredDevicesRequest,
  ): Effect.Effect<
    ListDiscoveredDevicesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listEventLogConfigurations(
    input: ListEventLogConfigurationsRequest,
  ): Effect.Effect<
    ListEventLogConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listManagedThingAccountAssociations(
    input: ListManagedThingAccountAssociationsRequest,
  ): Effect.Effect<
    ListManagedThingAccountAssociationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listManagedThingSchemas(
    input: ListManagedThingSchemasRequest,
  ): Effect.Effect<
    ListManagedThingSchemasResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listManagedThings(
    input: ListManagedThingsRequest,
  ): Effect.Effect<
    ListManagedThingsResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listNotificationConfigurations(
    input: ListNotificationConfigurationsRequest,
  ): Effect.Effect<
    ListNotificationConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOtaTaskConfigurations(
    input: ListOtaTaskConfigurationsRequest,
  ): Effect.Effect<
    ListOtaTaskConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOtaTaskExecutions(
    input: ListOtaTaskExecutionsRequest,
  ): Effect.Effect<
    ListOtaTaskExecutionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOtaTasks(
    input: ListOtaTasksRequest,
  ): Effect.Effect<
    ListOtaTasksResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listProvisioningProfiles(
    input: ListProvisioningProfilesRequest,
  ): Effect.Effect<
    ListProvisioningProfilesResponse,
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  listSchemaVersions(
    input: ListSchemaVersionsRequest,
  ): Effect.Effect<
    ListSchemaVersionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putDefaultEncryptionConfiguration(
    input: PutDefaultEncryptionConfigurationRequest,
  ): Effect.Effect<
    PutDefaultEncryptionConfigurationResponse,
    | AccessDeniedException
    | InternalFailureException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  putHubConfiguration(
    input: PutHubConfigurationRequest,
  ): Effect.Effect<
    PutHubConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putRuntimeLogConfiguration(
    input: PutRuntimeLogConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  registerAccountAssociation(
    input: RegisterAccountAssociationRequest,
  ): Effect.Effect<
    RegisterAccountAssociationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resetRuntimeLogConfiguration(
    input: ResetRuntimeLogConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendManagedThingCommand(
    input: SendManagedThingCommandRequest,
  ): Effect.Effect<
    SendManagedThingCommandResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  startAccountAssociationRefresh(
    input: StartAccountAssociationRefreshRequest,
  ): Effect.Effect<
    StartAccountAssociationRefreshResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startDeviceDiscovery(
    input: StartDeviceDiscoveryRequest,
  ): Effect.Effect<
    StartDeviceDiscoveryResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateAccountAssociation(
    input: UpdateAccountAssociationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCloudConnector(
    input: UpdateCloudConnectorRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateConnectorDestination(
    input: UpdateConnectorDestinationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateDestination(
    input: UpdateDestinationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateEventLogConfiguration(
    input: UpdateEventLogConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateManagedThing(
    input: UpdateManagedThingRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError
  >;
  updateNotificationConfiguration(
    input: UpdateNotificationConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateOtaTask(
    input: UpdateOtaTaskRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export interface AbortConfigCriteria {
  Action?: AbortCriteriaAction;
  FailureType?: AbortCriteriaFailureType;
  MinNumberOfExecutedThings?: number;
  ThresholdPercentage?: number;
}
export type AbortConfigCriteriaList = Array<AbortConfigCriteria>;
export type AbortCriteriaAction = "CANCEL";
export type AbortCriteriaFailureType =
  | "FAILED"
  | "REJECTED"
  | "TIMED_OUT"
  | "ALL";
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccountAssociationArn = string;

export type AccountAssociationDescription = string;

export type AccountAssociationErrorMessage = string;

export type AccountAssociationId = string;

export interface AccountAssociationItem {
  AccountAssociationId: string;
  AssociationState: AssociationState;
  ErrorMessage?: string;
  ConnectorDestinationId?: string;
  Name?: string;
  Description?: string;
  Arn?: string;
}
export type AccountAssociationListDefinition = Array<AccountAssociationItem>;
export type AccountAssociationName = string;

export type ActionName = string;

export type ActionReference = string;

export type ActionTraceId = string;

export type AdvertisedProductId = string;

export type AssociationState =
  | "ASSOCIATION_IN_PROGRESS"
  | "ASSOCIATION_FAILED"
  | "ASSOCIATION_SUCCEEDED"
  | "ASSOCIATION_DELETING"
  | "REFRESH_TOKEN_EXPIRED";
export type AttributeName = string;

export type AttributeValue = string;

export interface AuthConfig {
  oAuth?: OAuthConfig;
}
export interface AuthConfigUpdate {
  oAuthUpdate?: OAuthUpdate;
}
export type AuthMaterialString = string;

export type AuthMaterialType =
  | "CUSTOM_PROTOCOL_QR_BAR_CODE"
  | "WIFI_SETUP_QR_BAR_CODE"
  | "ZWAVE_QR_BAR_CODE"
  | "ZIGBEE_QR_BAR_CODE"
  | "DISCOVERED_DEVICE";
export type AuthType = "OAUTH";
export type AuthUrl = string;

export type BaseRatePerMinute = number;

export type Brand = string;

export type CaCertificate = string;

export type Capabilities = string;

export interface CapabilityAction {
  name: string;
  ref?: string;
  actionTraceId?: string;
  parameters?: unknown;
}
export type CapabilityActionName = string;

export type CapabilityActions = Array<CapabilityAction>;
export type CapabilityId = string;

export type CapabilityName = string;

export type CapabilityProperties = unknown;

export interface CapabilityReport {
  version: string;
  nodeId?: string;
  endpoints: Array<CapabilityReportEndpoint>;
}
export type CapabilityReportActions = Array<string>;
export type CapabilityReportCapabilities = Array<CapabilityReportCapability>;
export interface CapabilityReportCapability {
  id: string;
  name: string;
  version: string;
  properties: Array<string>;
  actions: Array<string>;
  events: Array<string>;
}
export interface CapabilityReportEndpoint {
  id: string;
  deviceTypes: Array<string>;
  capabilities: Array<CapabilityReportCapability>;
}
export type CapabilityReportEndpoints = Array<CapabilityReportEndpoint>;
export type CapabilityReportEvents = Array<string>;
export type CapabilityReportProperties = Array<string>;
export type CapabilityReportVersion = string;

export interface CapabilitySchemaItem {
  Format: SchemaVersionFormat;
  CapabilityId: string;
  ExtrinsicId: string;
  ExtrinsicVersion: number;
  Schema: unknown;
}
export type CapabilitySchemas = Array<CapabilitySchemaItem>;
export type CapabilityVersion = string;

export type CertificatePem = string;

export type ClaimCertificate = string;

export type ClaimCertificatePrivateKey = string;

export type Classification = string;

export type ClientToken = string;

export type CloudConnectorDescription = string;

export type CloudConnectorId = string;

export type CloudConnectorType = "LISTED" | "UNLISTED";
export type ClusterId = string;

export type CommandCapabilities = Array<CommandCapability>;
export interface CommandCapability {
  id: string;
  name: string;
  version: string;
  actions: Array<CapabilityAction>;
}
export interface CommandEndpoint {
  endpointId: string;
  capabilities: Array<CommandCapability>;
}
export type CommandEndpoints = Array<CommandEndpoint>;
export interface ConfigurationError {
  code?: string;
  message?: string;
}
export type ConfigurationErrorCode = string;

export type ConfigurationErrorMessage = string;

export type ConfigurationState =
  | "ENABLED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED";
export interface ConfigurationStatus {
  error?: ConfigurationError;
  state: ConfigurationState;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ConnectivityStatus = boolean;

export type ConnectivityTimestamp = Date | string;

export type ConnectorAssociationId = string;

export type ConnectorDestinationDescription = string;

export type ConnectorDestinationId = string;

export type ConnectorDestinationListDefinition =
  Array<ConnectorDestinationSummary>;
export type ConnectorDestinationName = string;

export interface ConnectorDestinationSummary {
  Name?: string;
  Description?: string;
  CloudConnectorId?: string;
  Id?: string;
}
export type ConnectorDeviceId = string;

export type ConnectorDeviceName = string;

export type ConnectorEventMessage = string;

export type ConnectorEventOperation =
  | "DEVICE_COMMAND_RESPONSE"
  | "DEVICE_DISCOVERY"
  | "DEVICE_EVENT"
  | "DEVICE_COMMAND_REQUEST";
export type ConnectorEventOperationVersion = string;

export type ConnectorEventStatusCode = number;

export type ConnectorId = string;

export interface ConnectorItem {
  Name: string;
  EndpointConfig: EndpointConfig;
  Description?: string;
  EndpointType?: EndpointType;
  Id?: string;
  Type?: CloudConnectorType;
}
export type ConnectorList = Array<ConnectorItem>;
export type ConnectorPolicyId = string;

export interface CreateAccountAssociationRequest {
  ClientToken?: string;
  ConnectorDestinationId: string;
  Name?: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateAccountAssociationResponse {
  OAuthAuthorizationUrl: string;
  AccountAssociationId: string;
  AssociationState: AssociationState;
  Arn?: string;
}
export interface CreateCloudConnectorRequest {
  Name: string;
  EndpointConfig: EndpointConfig;
  Description?: string;
  EndpointType?: EndpointType;
  ClientToken?: string;
}
export interface CreateCloudConnectorResponse {
  Id?: string;
}
export interface CreateConnectorDestinationRequest {
  Name?: string;
  Description?: string;
  CloudConnectorId: string;
  AuthType: AuthType;
  AuthConfig: AuthConfig;
  SecretsManager: SecretsManager;
  ClientToken?: string;
}
export interface CreateConnectorDestinationResponse {
  Id?: string;
}
export interface CreateCredentialLockerRequest {
  Name?: string;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateCredentialLockerResponse {
  Id?: string;
  Arn?: string;
  CreatedAt?: Date | string;
}
export type CreatedAt = Date | string;

export interface CreateDestinationRequest {
  DeliveryDestinationArn: string;
  DeliveryDestinationType: DeliveryDestinationType;
  Name: string;
  RoleArn: string;
  ClientToken?: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateDestinationResponse {
  Name?: string;
}
export interface CreateEventLogConfigurationRequest {
  ResourceType: string;
  ResourceId?: string;
  EventLogLevel: LogLevel;
  ClientToken?: string;
}
export interface CreateEventLogConfigurationResponse {
  Id?: string;
}
export interface CreateManagedThingRequest {
  Role: Role;
  Owner?: string;
  CredentialLockerId?: string;
  AuthenticationMaterial: string;
  AuthenticationMaterialType: AuthMaterialType;
  SerialNumber?: string;
  Brand?: string;
  Model?: string;
  Name?: string;
  CapabilityReport?: CapabilityReport;
  CapabilitySchemas?: Array<CapabilitySchemaItem>;
  Capabilities?: string;
  ClientToken?: string;
  Classification?: string;
  Tags?: Record<string, string>;
  MetaData?: Record<string, string>;
}
export interface CreateManagedThingResponse {
  Id?: string;
  Arn?: string;
  CreatedAt?: Date | string;
}
export interface CreateNotificationConfigurationRequest {
  EventType: EventType;
  DestinationName: string;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateNotificationConfigurationResponse {
  EventType?: EventType;
}
export interface CreateOtaTaskConfigurationRequest {
  Description?: string;
  Name?: string;
  PushConfig?: PushConfig;
  ClientToken?: string;
}
export interface CreateOtaTaskConfigurationResponse {
  TaskConfigurationId?: string;
}
export interface CreateOtaTaskRequest {
  Description?: string;
  S3Url: string;
  Protocol?: OtaProtocol;
  Target?: Array<string>;
  TaskConfigurationId?: string;
  OtaMechanism?: OtaMechanism;
  OtaType: OtaType;
  OtaTargetQueryString?: string;
  ClientToken?: string;
  OtaSchedulingConfig?: OtaTaskSchedulingConfig;
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig;
  Tags?: Record<string, string>;
}
export interface CreateOtaTaskResponse {
  TaskId?: string;
  TaskArn?: string;
  Description?: string;
}
export interface CreateProvisioningProfileRequest {
  ProvisioningType: ProvisioningType;
  CaCertificate?: string;
  Name?: string;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateProvisioningProfileResponse {
  Arn?: string;
  Name?: string;
  ProvisioningType?: ProvisioningType;
  Id?: string;
  ClaimCertificate?: string;
  ClaimCertificatePrivateKey?: string;
}
export type CredentialLockerArn = string;

export type CredentialLockerCreatedAt = Date | string;

export type CredentialLockerId = string;

export type CredentialLockerListDefinition = Array<CredentialLockerSummary>;
export type CredentialLockerName = string;

export interface CredentialLockerSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  CreatedAt?: Date | string;
}
export type CustomProtocolDetail = Record<string, string>;
export type CustomProtocolDetailKey = string;

export type CustomProtocolDetailValue = string;

export interface DeleteAccountAssociationRequest {
  AccountAssociationId: string;
}
export interface DeleteCloudConnectorRequest {
  Identifier: string;
}
export interface DeleteConnectorDestinationRequest {
  Identifier: string;
}
export interface DeleteCredentialLockerRequest {
  Identifier: string;
}
export interface DeleteDestinationRequest {
  Name: string;
}
export interface DeleteEventLogConfigurationRequest {
  Id: string;
}
export type DeleteLocalStoreAfterUpload = boolean;

export interface DeleteManagedThingRequest {
  Identifier: string;
  Force?: boolean;
}
export interface DeleteNotificationConfigurationRequest {
  EventType: EventType;
}
export interface DeleteOtaTaskConfigurationRequest {
  Identifier: string;
}
export interface DeleteOtaTaskRequest {
  Identifier: string;
}
export interface DeleteProvisioningProfileRequest {
  Identifier: string;
}
export type DeliveryDestinationArn = string;

export type DeliveryDestinationRoleArn = string;

export type DeliveryDestinationType = "KINESIS";
export interface DeregisterAccountAssociationRequest {
  ManagedThingId: string;
  AccountAssociationId: string;
}
export type DestinationCreatedAt = Date | string;

export type DestinationDescription = string;

export type DestinationListDefinition = Array<DestinationSummary>;
export type DestinationName = string;

export interface DestinationSummary {
  Description?: string;
  DeliveryDestinationArn?: string;
  DeliveryDestinationType?: DeliveryDestinationType;
  Name?: string;
  RoleArn?: string;
}
export type DestinationUpdatedAt = Date | string;

export interface Device {
  ConnectorDeviceId: string;
  ConnectorDeviceName?: string;
  CapabilityReport: MatterCapabilityReport;
  CapabilitySchemas?: Array<CapabilitySchemaItem>;
  DeviceMetadata?: unknown;
}
export type DeviceDiscoveryArn = string;

export type DeviceDiscoveryId = string;

export type DeviceDiscoveryListDefinition = Array<DeviceDiscoverySummary>;
export type DeviceDiscoveryStatus =
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT";
export interface DeviceDiscoverySummary {
  Id?: string;
  DiscoveryType?: DiscoveryType;
  Status?: DeviceDiscoveryStatus;
}
export type DeviceMetadata = unknown;

export type Devices = Array<Device>;
export type DeviceSpecificKey = string;

export type DeviceType = string;

export type DeviceTypeList = Array<string>;
export type DeviceTypes = Array<string>;
export type DisconnectReasonValue =
  | "AUTH_ERROR"
  | "CLIENT_INITIATED_DISCONNECT"
  | "CLIENT_ERROR"
  | "CONNECTION_LOST"
  | "DUPLICATE_CLIENTID"
  | "FORBIDDEN_ACCESS"
  | "MQTT_KEEP_ALIVE_TIMEOUT"
  | "SERVER_ERROR"
  | "SERVER_INITIATED_DISCONNECT"
  | "THROTTLED"
  | "WEBSOCKET_TTL_EXPIRATION"
  | "CUSTOMAUTH_TTL_EXPIRATION"
  | "UNKNOWN"
  | "NONE";
export type DiscoveredAt = Date | string;

export type DiscoveredDeviceListDefinition = Array<DiscoveredDeviceSummary>;
export interface DiscoveredDeviceSummary {
  ConnectorDeviceId?: string;
  ConnectorDeviceName?: string;
  DeviceTypes?: Array<string>;
  ManagedThingId?: string;
  Modification?: DiscoveryModification;
  DiscoveredAt?: Date | string;
  Brand?: string;
  Model?: string;
  AuthenticationMaterial?: string;
}
export type DiscoveryAuthMaterialString = string;

export type DiscoveryAuthMaterialType = "ZWAVE_INSTALL_CODE";
export type DiscoveryFinishedAt = Date | string;

export type DiscoveryModification = "DISCOVERED" | "UPDATED" | "NO_CHANGE";
export type DiscoveryStartedAt = Date | string;

export type DiscoveryType = "ZWAVE" | "ZIGBEE" | "CLOUD" | "CUSTOM";
export type DisplayName = string;

export type DurationInMinutes = number;

export type EncryptionType =
  | "MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION"
  | "CUSTOMER_KEY_ENCRYPTION";
export type EndpointAddress = string;

export interface EndpointConfig {
  lambda?: LambdaConfig;
}
export type EndpointId = string;

export type EndpointSemanticTag = string;

export type EndpointType = "LAMBDA";
export type EndTime = string;

export type ErrorMessage = string;

export type ErrorResourceId = string;

export type ErrorResourceType = string;

export type EventLogConfigurationListDefinition =
  Array<EventLogConfigurationSummary>;
export interface EventLogConfigurationSummary {
  Id?: string;
  ResourceType?: string;
  ResourceId?: string;
  EventLogLevel?: LogLevel;
}
export type EventName = string;

export type EventType =
  | "DEVICE_COMMAND"
  | "DEVICE_COMMAND_REQUEST"
  | "DEVICE_DISCOVERY_STATUS"
  | "DEVICE_EVENT"
  | "DEVICE_LIFE_CYCLE"
  | "DEVICE_STATE"
  | "DEVICE_OTA"
  | "CONNECTOR_ASSOCIATION"
  | "ACCOUNT_ASSOCIATION"
  | "CONNECTOR_ERROR_REPORT";
export type ExecutionNumber = number;

export interface ExponentialRolloutRate {
  BaseRatePerMinute?: number;
  IncrementFactor?: number;
  RateIncreaseCriteria?: RolloutRateIncreaseCriteria;
}
export type ExtrinsicSchemaId = string;

export interface GetAccountAssociationRequest {
  AccountAssociationId: string;
}
export interface GetAccountAssociationResponse {
  AccountAssociationId: string;
  AssociationState: AssociationState;
  ErrorMessage?: string;
  ConnectorDestinationId?: string;
  Name?: string;
  Description?: string;
  Arn?: string;
  OAuthAuthorizationUrl: string;
  Tags?: Record<string, string>;
}
export interface GetCloudConnectorRequest {
  Identifier: string;
}
export interface GetCloudConnectorResponse {
  Name: string;
  EndpointConfig: EndpointConfig;
  Description?: string;
  EndpointType?: EndpointType;
  Id?: string;
  Type?: CloudConnectorType;
}
export interface GetConnectorDestinationRequest {
  Identifier: string;
}
export interface GetConnectorDestinationResponse {
  Name?: string;
  Description?: string;
  CloudConnectorId?: string;
  Id?: string;
  AuthType?: AuthType;
  AuthConfig?: AuthConfig;
  SecretsManager?: SecretsManager;
  OAuthCompleteRedirectUrl?: string;
}
export interface GetCredentialLockerRequest {
  Identifier: string;
}
export interface GetCredentialLockerResponse {
  Id?: string;
  Arn?: string;
  Name?: string;
  CreatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface GetCustomEndpointRequest {}
export interface GetCustomEndpointResponse {
  EndpointAddress: string;
}
export interface GetDefaultEncryptionConfigurationRequest {}
export interface GetDefaultEncryptionConfigurationResponse {
  configurationStatus: ConfigurationStatus;
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
}
export interface GetDestinationRequest {
  Name: string;
}
export interface GetDestinationResponse {
  Description?: string;
  DeliveryDestinationArn?: string;
  DeliveryDestinationType?: DeliveryDestinationType;
  Name?: string;
  RoleArn?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface GetDeviceDiscoveryRequest {
  Identifier: string;
}
export interface GetDeviceDiscoveryResponse {
  Id: string;
  Arn: string;
  DiscoveryType: DiscoveryType;
  Status: DeviceDiscoveryStatus;
  StartedAt: Date | string;
  ControllerId?: string;
  ConnectorAssociationId?: string;
  AccountAssociationId?: string;
  FinishedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface GetEventLogConfigurationRequest {
  Id: string;
}
export interface GetEventLogConfigurationResponse {
  Id?: string;
  ResourceType?: string;
  ResourceId?: string;
  EventLogLevel?: LogLevel;
}
export interface GetHubConfigurationRequest {}
export interface GetHubConfigurationResponse {
  HubTokenTimerExpirySettingInSeconds?: number;
  UpdatedAt?: Date | string;
}
export interface GetManagedThingCapabilitiesRequest {
  Identifier: string;
}
export interface GetManagedThingCapabilitiesResponse {
  ManagedThingId?: string;
  Capabilities?: string;
  CapabilityReport?: CapabilityReport;
}
export interface GetManagedThingCertificateRequest {
  Identifier: string;
}
export interface GetManagedThingCertificateResponse {
  ManagedThingId?: string;
  CertificatePem?: string;
}
export interface GetManagedThingConnectivityDataRequest {
  Identifier: string;
}
export interface GetManagedThingConnectivityDataResponse {
  ManagedThingId?: string;
  Connected?: boolean;
  Timestamp?: Date | string;
  DisconnectReason?: DisconnectReasonValue;
}
export interface GetManagedThingMetaDataRequest {
  Identifier: string;
}
export interface GetManagedThingMetaDataResponse {
  ManagedThingId?: string;
  MetaData?: Record<string, string>;
}
export interface GetManagedThingRequest {
  Identifier: string;
}
export interface GetManagedThingResponse {
  Id?: string;
  Arn?: string;
  Owner?: string;
  CredentialLockerId?: string;
  AdvertisedProductId?: string;
  Role?: Role;
  ProvisioningStatus?: ProvisioningStatus;
  Name?: string;
  Model?: string;
  Brand?: string;
  SerialNumber?: string;
  UniversalProductCode?: string;
  InternationalArticleNumber?: string;
  ConnectorPolicyId?: string;
  ConnectorDestinationId?: string;
  ConnectorDeviceId?: string;
  DeviceSpecificKey?: string;
  MacAddress?: string;
  ParentControllerId?: string;
  Classification?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  ActivatedAt?: Date | string;
  HubNetworkMode?: HubNetworkMode;
  MetaData?: Record<string, string>;
  Tags?: Record<string, string>;
}
export interface GetManagedThingStateRequest {
  ManagedThingId: string;
}
export interface GetManagedThingStateResponse {
  Endpoints: Array<StateEndpoint>;
}
export interface GetNotificationConfigurationRequest {
  EventType: EventType;
}
export interface GetNotificationConfigurationResponse {
  EventType?: EventType;
  DestinationName?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  Tags?: Record<string, string>;
}
export interface GetOtaTaskConfigurationRequest {
  Identifier: string;
}
export interface GetOtaTaskConfigurationResponse {
  TaskConfigurationId?: string;
  Name?: string;
  PushConfig?: PushConfig;
  Description?: string;
  CreatedAt?: Date | string;
}
export interface GetOtaTaskRequest {
  Identifier: string;
}
export interface GetOtaTaskResponse {
  TaskId?: string;
  TaskArn?: string;
  Description?: string;
  S3Url?: string;
  Protocol?: OtaProtocol;
  OtaType?: OtaType;
  OtaTargetQueryString?: string;
  OtaMechanism?: OtaMechanism;
  Target?: Array<string>;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  TaskConfigurationId?: string;
  TaskProcessingDetails?: TaskProcessingDetails;
  OtaSchedulingConfig?: OtaTaskSchedulingConfig;
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig;
  Status?: OtaStatus;
  Tags?: Record<string, string>;
}
export interface GetProvisioningProfileRequest {
  Identifier: string;
}
export interface GetProvisioningProfileResponse {
  Arn?: string;
  Name?: string;
  ProvisioningType?: ProvisioningType;
  Id?: string;
  ClaimCertificate?: string;
  Tags?: Record<string, string>;
}
export interface GetRuntimeLogConfigurationRequest {
  ManagedThingId: string;
}
export interface GetRuntimeLogConfigurationResponse {
  ManagedThingId?: string;
  RuntimeLogConfigurations?: RuntimeLogConfigurations;
}
export interface GetSchemaVersionRequest {
  Type: SchemaVersionType;
  SchemaVersionedId: string;
  Format?: SchemaVersionFormat;
}
export interface GetSchemaVersionResponse {
  SchemaId?: string;
  Type?: SchemaVersionType;
  Description?: string;
  Namespace?: string;
  SemanticVersion?: string;
  Visibility?: SchemaVersionVisibility;
  Schema?: unknown;
}
export type HubConfigurationUpdatedAt = Date | string;

export type HubNetworkMode = "STANDARD" | "NETWORK_WIDE_EXCLUSION";
export type HubTokenTimerExpirySettingInSeconds = number;

export type IncrementFactor = number;

export type InProgressTimeoutInMinutes = number;

export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly Message?: string;
}> {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type InternationalArticleNumber = string;

export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export type IoTManagedIntegrationsResourceARN = string;

export type KmsKeyArn = string;

export type LambdaArn = string;

export interface LambdaConfig {
  arn: string;
}
export type LastUpdatedAt = Date | string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListAccountAssociationsRequest {
  ConnectorDestinationId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAccountAssociationsResponse {
  Items?: Array<AccountAssociationItem>;
  NextToken?: string;
}
export interface ListCloudConnectorsRequest {
  Type?: CloudConnectorType;
  LambdaArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCloudConnectorsResponse {
  Items?: Array<ConnectorItem>;
  NextToken?: string;
}
export interface ListConnectorDestinationsRequest {
  CloudConnectorId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListConnectorDestinationsResponse {
  ConnectorDestinationList?: Array<ConnectorDestinationSummary>;
  NextToken?: string;
}
export interface ListCredentialLockersRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCredentialLockersResponse {
  Items?: Array<CredentialLockerSummary>;
  NextToken?: string;
}
export interface ListDestinationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDestinationsResponse {
  DestinationList?: Array<DestinationSummary>;
  NextToken?: string;
}
export interface ListDeviceDiscoveriesRequest {
  NextToken?: string;
  MaxResults?: number;
  TypeFilter?: DiscoveryType;
  StatusFilter?: DeviceDiscoveryStatus;
}
export interface ListDeviceDiscoveriesResponse {
  Items?: Array<DeviceDiscoverySummary>;
  NextToken?: string;
}
export interface ListDiscoveredDevicesRequest {
  Identifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDiscoveredDevicesResponse {
  Items?: Array<DiscoveredDeviceSummary>;
  NextToken?: string;
}
export interface ListEventLogConfigurationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEventLogConfigurationsResponse {
  EventLogConfigurationList?: Array<EventLogConfigurationSummary>;
  NextToken?: string;
}
export interface ListManagedThingAccountAssociationsRequest {
  ManagedThingId?: string;
  AccountAssociationId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListManagedThingAccountAssociationsResponse {
  Items?: Array<ManagedThingAssociation>;
  NextToken?: string;
}
export interface ListManagedThingSchemasRequest {
  Identifier: string;
  EndpointIdFilter?: string;
  CapabilityIdFilter?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListManagedThingSchemasResponse {
  Items?: Array<ManagedThingSchemaListItem>;
  NextToken?: string;
}
export interface ListManagedThingsRequest {
  OwnerFilter?: string;
  CredentialLockerFilter?: string;
  RoleFilter?: Role;
  ParentControllerIdentifierFilter?: string;
  ConnectorPolicyIdFilter?: string;
  ConnectorDestinationIdFilter?: string;
  ConnectorDeviceIdFilter?: string;
  SerialNumberFilter?: string;
  ProvisioningStatusFilter?: ProvisioningStatus;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListManagedThingsResponse {
  Items?: Array<ManagedThingSummary>;
  NextToken?: string;
}
export interface ListNotificationConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListNotificationConfigurationsResponse {
  NotificationConfigurationList?: Array<NotificationConfigurationSummary>;
  NextToken?: string;
}
export interface ListOtaTaskConfigurationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOtaTaskConfigurationsResponse {
  Items?: Array<OtaTaskConfigurationSummary>;
  NextToken?: string;
}
export interface ListOtaTaskExecutionsRequest {
  Identifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOtaTaskExecutionsResponse {
  ExecutionSummaries?: Array<OtaTaskExecutionSummaries>;
  NextToken?: string;
}
export interface ListOtaTasksRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOtaTasksResponse {
  Tasks?: Array<OtaTaskSummary>;
  NextToken?: string;
}
export interface ListProvisioningProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProvisioningProfilesResponse {
  Items?: Array<ProvisioningProfileSummary>;
  NextToken?: string;
}
export interface ListSchemaVersionsRequest {
  Type: SchemaVersionType;
  MaxResults?: number;
  NextToken?: string;
  SchemaId?: string;
  Namespace?: string;
  Visibility?: SchemaVersionVisibility;
  SemanticVersion?: string;
}
export interface ListSchemaVersionsResponse {
  Items?: Array<SchemaVersionListItem>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type LocalStoreFileRotationMaxBytes = number;

export type LocalStoreFileRotationMaxFiles = number;

export type LocalStoreLocation = string;

export type LogConfigurationId = string;

export type LogLevel = "DEBUG" | "ERROR" | "INFO" | "WARN";
export type MacAddress = string;

export type ManagedThingArn = string;

export interface ManagedThingAssociation {
  ManagedThingId?: string;
  AccountAssociationId?: string;
}
export type ManagedThingAssociationList = Array<ManagedThingAssociation>;
export type ManagedThingId = string;

export type ManagedThingListDefinition = Array<ManagedThingSummary>;
export type ManagedThingSchemaListDefinition =
  Array<ManagedThingSchemaListItem>;
export interface ManagedThingSchemaListItem {
  EndpointId?: string;
  CapabilityId?: string;
  Schema?: unknown;
}
export interface ManagedThingSummary {
  Id?: string;
  Arn?: string;
  AdvertisedProductId?: string;
  Brand?: string;
  Classification?: string;
  ConnectorDeviceId?: string;
  ConnectorPolicyId?: string;
  ConnectorDestinationId?: string;
  Model?: string;
  Name?: string;
  Owner?: string;
  CredentialLockerId?: string;
  ParentControllerId?: string;
  ProvisioningStatus?: ProvisioningStatus;
  Role?: Role;
  SerialNumber?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
  ActivatedAt?: Date | string;
}
export type MatterAttributeId = string;

export type MatterAttributes = unknown;

export interface MatterCapabilityReport {
  version: string;
  nodeId?: string;
  endpoints: Array<MatterCapabilityReportEndpoint>;
}
export interface MatterCapabilityReportAttribute {
  id?: string;
  name?: string;
  value?: unknown;
}
export type MatterCapabilityReportAttributes =
  Array<MatterCapabilityReportAttribute>;
export type MatterCapabilityReportAttributeValue = unknown;

export interface MatterCapabilityReportCluster {
  id: string;
  revision: number;
  publicId?: string;
  name?: string;
  specVersion?: string;
  attributes?: Array<MatterCapabilityReportAttribute>;
  commands?: Array<string>;
  events?: Array<string>;
  featureMap?: number;
  generatedCommands?: Array<string>;
  fabricIndex?: number;
}
export type MatterCapabilityReportClusterRevisionId = number;

export type MatterCapabilityReportClusters =
  Array<MatterCapabilityReportCluster>;
export type MatterCapabilityReportCommands = Array<string>;
export interface MatterCapabilityReportEndpoint {
  id: string;
  deviceTypes: Array<string>;
  clusters: Array<MatterCapabilityReportCluster>;
  parts?: Array<string>;
  semanticTags?: Array<string>;
  clientClusters?: Array<string>;
}
export type MatterCapabilityReportEndpointClientClusters = Array<string>;
export type MatterCapabilityReportEndpointParts = Array<string>;
export type MatterCapabilityReportEndpoints =
  Array<MatterCapabilityReportEndpoint>;
export type MatterCapabilityReportEndpointSemanticTags = Array<string>;
export type MatterCapabilityReportEvents = Array<string>;
export type MatterCapabilityReportFabricIndex = number;

export type MatterCapabilityReportFeatureMap = number;

export type MatterCapabilityReportGeneratedCommands = Array<string>;
export interface MatterCluster {
  id?: string;
  attributes?: unknown;
  commands?: Record<string, unknown>;
  events?: Record<string, unknown>;
}
export type MatterClusters = Array<MatterCluster>;
export type MatterCommandId = string;

export type MatterCommands = Record<string, unknown>;
export interface MatterEndpoint {
  id?: string;
  clusters?: Array<MatterCluster>;
}
export type MatterEventId = string;

export type MatterEvents = Record<string, unknown>;
export type MatterFields = unknown;

export type MaximumPerMinute = number;

export type MaxResults = number;

export type MetaData = Record<string, string>;
export type MinNumberOfExecutedThings = number;

export type MinNumberOfRetries = number;

export type Model = string;

export type Name = string;

export type NextToken = string;

export type NodeId = string;

export type NotificationConfigurationCreatedAt = Date | string;

export type NotificationConfigurationListDefinition =
  Array<NotificationConfigurationSummary>;
export interface NotificationConfigurationSummary {
  EventType?: EventType;
  DestinationName?: string;
}
export type NotificationConfigurationUpdatedAt = Date | string;

export type NumberOfNotifiedThings = number;

export type NumberOfSucceededThings = number;

export type OAuthAuthorizationUrl = string;

export type OAuthCompleteRedirectUrl = string;

export interface OAuthConfig {
  authUrl: string;
  tokenUrl: string;
  scope?: string;
  tokenEndpointAuthenticationScheme: TokenEndpointAuthenticationScheme;
  oAuthCompleteRedirectUrl?: string;
  proactiveRefreshTokenRenewal?: ProactiveRefreshTokenRenewal;
}
export interface OAuthUpdate {
  oAuthCompleteRedirectUrl?: string;
  proactiveRefreshTokenRenewal?: ProactiveRefreshTokenRenewal;
}
export type OtaDescription = string;

export type OtaMechanism = "PUSH";
export type OtaNextToken = string;

export type OtaProtocol = "HTTP";
export type OtaStatus =
  | "IN_PROGRESS"
  | "CANCELED"
  | "COMPLETED"
  | "DELETION_IN_PROGRESS"
  | "SCHEDULED";
export type OtaTargetQueryString = string;

export interface OtaTaskAbortConfig {
  AbortConfigCriteriaList?: Array<AbortConfigCriteria>;
}
export type OtaTaskArn = string;

export type OtaTaskConfigurationId = string;

export type OtaTaskConfigurationListDefinition =
  Array<OtaTaskConfigurationSummary>;
export type OtaTaskConfigurationName = string;

export interface OtaTaskConfigurationSummary {
  TaskConfigurationId?: string;
  Name?: string;
  CreatedAt?: Date | string;
}
export interface OtaTaskExecutionRetryConfig {
  RetryConfigCriteria?: Array<RetryConfigCriteria>;
}
export interface OtaTaskExecutionRolloutConfig {
  ExponentialRolloutRate?: ExponentialRolloutRate;
  MaximumPerMinute?: number;
}
export type OtaTaskExecutionStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | "REJECTED"
  | "REMOVED"
  | "CANCELED";
export interface OtaTaskExecutionSummaries {
  TaskExecutionSummary?: OtaTaskExecutionSummary;
  ManagedThingId?: string;
}
export type OtaTaskExecutionSummariesListDefinition =
  Array<OtaTaskExecutionSummaries>;
export interface OtaTaskExecutionSummary {
  ExecutionNumber?: number;
  LastUpdatedAt?: Date | string;
  QueuedAt?: Date | string;
  RetryAttempt?: number;
  StartedAt?: Date | string;
  Status?: OtaTaskExecutionStatus;
}
export type OtaTaskId = string;

export type OtaTaskListDefinition = Array<OtaTaskSummary>;
export interface OtaTaskSchedulingConfig {
  EndBehavior?: SchedulingConfigEndBehavior;
  EndTime?: string;
  MaintenanceWindows?: Array<ScheduleMaintenanceWindow>;
  StartTime?: string;
}
export interface OtaTaskSummary {
  TaskId?: string;
  TaskArn?: string;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  TaskConfigurationId?: string;
  Status?: OtaStatus;
}
export interface OtaTaskTimeoutConfig {
  InProgressTimeoutInMinutes?: number;
}
export type OtaType = "ONE_TIME" | "CONTINUOUS";
export type Owner = string;

export type ParentControllerId = string;

export interface ProactiveRefreshTokenRenewal {
  enabled?: boolean;
  DaysBeforeRenewal?: number;
}
export type PropertyName = string;

export type ProvisioningProfileArn = string;

export type ProvisioningProfileId = string;

export type ProvisioningProfileListDefinition =
  Array<ProvisioningProfileSummary>;
export type ProvisioningProfileName = string;

export interface ProvisioningProfileSummary {
  Name?: string;
  Id?: string;
  Arn?: string;
  ProvisioningType?: ProvisioningType;
}
export type ProvisioningStatus =
  | "UNASSOCIATED"
  | "PRE_ASSOCIATED"
  | "DISCOVERED"
  | "ACTIVATED"
  | "DELETION_FAILED"
  | "DELETE_IN_PROGRESS"
  | "ISOLATED"
  | "DELETED";
export type ProvisioningType = "FLEET_PROVISIONING" | "JITR";
export interface PushConfig {
  AbortConfig?: OtaTaskAbortConfig;
  RolloutConfig?: OtaTaskExecutionRolloutConfig;
  TimeoutConfig?: OtaTaskTimeoutConfig;
}
export interface PutDefaultEncryptionConfigurationRequest {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
}
export interface PutDefaultEncryptionConfigurationResponse {
  configurationStatus: ConfigurationStatus;
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
}
export interface PutHubConfigurationRequest {
  HubTokenTimerExpirySettingInSeconds: number;
}
export interface PutHubConfigurationResponse {
  HubTokenTimerExpirySettingInSeconds?: number;
}
export interface PutRuntimeLogConfigurationRequest {
  ManagedThingId: string;
  RuntimeLogConfigurations: RuntimeLogConfigurations;
}
export type QueuedAt = Date | string;

export interface RegisterAccountAssociationRequest {
  ManagedThingId: string;
  AccountAssociationId: string;
  DeviceDiscoveryId: string;
}
export interface RegisterAccountAssociationResponse {
  AccountAssociationId?: string;
  DeviceDiscoveryId?: string;
  ManagedThingId?: string;
}
export interface RegisterCustomEndpointRequest {}
export interface RegisterCustomEndpointResponse {
  EndpointAddress: string;
}
export interface ResetRuntimeLogConfigurationRequest {
  ManagedThingId: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
}> {}
export type RetryAttempt = number;

export interface RetryConfigCriteria {
  FailureType?: RetryCriteriaFailureType;
  MinNumberOfRetries?: number;
}
export type RetryConfigCriteriaList = Array<RetryConfigCriteria>;
export type RetryCriteriaFailureType = "FAILED" | "TIMED_OUT" | "ALL";
export type Role = "CONTROLLER" | "DEVICE";
export interface RolloutRateIncreaseCriteria {
  numberOfNotifiedThings?: number;
  numberOfSucceededThings?: number;
}
export interface RuntimeLogConfigurations {
  LogLevel?: LogLevel;
  LogFlushLevel?: LogLevel;
  LocalStoreLocation?: string;
  LocalStoreFileRotationMaxFiles?: number;
  LocalStoreFileRotationMaxBytes?: number;
  UploadLog?: boolean;
  UploadPeriodMinutes?: number;
  DeleteLocalStoreAfterUpload?: boolean;
}
export type S3Url = string;

export interface ScheduleMaintenanceWindow {
  DurationInMinutes?: number;
  StartTime?: string;
}
export type ScheduleMaintenanceWindowList = Array<ScheduleMaintenanceWindow>;
export type ScheduleStartTime = string;

export type SchedulingConfigEndBehavior =
  | "STOP_ROLLOUT"
  | "CANCEL"
  | "FORCE_CANCEL";
export type SchemaId = string;

export type SchemaVersionDescription = string;

export type SchemaVersionedId = string;

export type SchemaVersionFormat = "AWS" | "ZCL" | "CONNECTOR";
export type SchemaVersionList = Array<SchemaVersionListItem>;
export interface SchemaVersionListItem {
  SchemaId?: string;
  Type?: SchemaVersionType;
  Description?: string;
  Namespace?: string;
  SemanticVersion?: string;
  Visibility?: SchemaVersionVisibility;
}
export type SchemaVersionNamespaceName = string;

export type SchemaVersionSchema = unknown;

export type SchemaVersionType = "capability" | "definition";
export type SchemaVersionVersion = string;

export type SchemaVersionVisibility = "PUBLIC" | "PRIVATE";
export interface SecretsManager {
  arn: string;
  versionId: string;
}
export type SecretsManagerArn = string;

export type SecretsManagerVersionId = string;

export interface SendConnectorEventRequest {
  ConnectorId: string;
  UserId?: string;
  Operation: ConnectorEventOperation;
  OperationVersion?: string;
  StatusCode?: number;
  Message?: string;
  DeviceDiscoveryId?: string;
  ConnectorDeviceId?: string;
  TraceId?: string;
  Devices?: Array<Device>;
  MatterEndpoint?: MatterEndpoint;
}
export interface SendConnectorEventResponse {
  ConnectorId: string;
}
export interface SendManagedThingCommandRequest {
  ManagedThingId: string;
  Endpoints: Array<CommandEndpoint>;
  ConnectorAssociationId?: string;
  AccountAssociationId?: string;
}
export interface SendManagedThingCommandResponse {
  TraceId?: string;
}
export type SerialNumber = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type SetupAt = Date | string;

export type SmartHomeResourceId = string;

export type SmartHomeResourceType = string;

export type SpecVersion = string;

export interface StartAccountAssociationRefreshRequest {
  AccountAssociationId: string;
}
export interface StartAccountAssociationRefreshResponse {
  OAuthAuthorizationUrl: string;
}
export interface StartDeviceDiscoveryRequest {
  DiscoveryType: DiscoveryType;
  CustomProtocolDetail?: Record<string, string>;
  ControllerIdentifier?: string;
  ConnectorAssociationIdentifier?: string;
  AccountAssociationId?: string;
  AuthenticationMaterial?: string;
  AuthenticationMaterialType?: DiscoveryAuthMaterialType;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface StartDeviceDiscoveryResponse {
  Id?: string;
  StartedAt?: Date | string;
}
export type StartedAt = Date | string;

export type StartTime = string;

export type StateCapabilities = Array<StateCapability>;
export interface StateCapability {
  id: string;
  name: string;
  version: string;
  properties?: unknown;
}
export interface StateEndpoint {
  endpointId: string;
  capabilities: Array<StateCapability>;
}
export type StateEndpoints = Array<StateEndpoint>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagsMap = Record<string, string>;
export type TagValue = string;

export type Target = Array<string>;
export interface TaskProcessingDetails {
  NumberOfCanceledThings?: number;
  NumberOfFailedThings?: number;
  NumberOfInProgressThings?: number;
  numberOfQueuedThings?: number;
  numberOfRejectedThings?: number;
  numberOfRemovedThings?: number;
  numberOfSucceededThings?: number;
  numberOfTimedOutThings?: number;
  processingTargets?: Array<string>;
}
export type ThirdPartyUserId = string;

export type ThresholdPercentage = number;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type TokenEndpointAuthenticationScheme =
  | "HTTP_BASIC"
  | "REQUEST_BODY_CREDENTIALS";
export type TokenUrl = string;

export type TraceId = string;

export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly Message?: string;
}> {}
export type UniversalProductCode = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAccountAssociationRequest {
  AccountAssociationId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateCloudConnectorRequest {
  Identifier: string;
  Name?: string;
  Description?: string;
}
export interface UpdateConnectorDestinationRequest {
  Identifier: string;
  Description?: string;
  Name?: string;
  AuthType?: AuthType;
  AuthConfig?: AuthConfigUpdate;
  SecretsManager?: SecretsManager;
}
export type UpdatedAt = Date | string;

export interface UpdateDestinationRequest {
  Name: string;
  DeliveryDestinationArn?: string;
  DeliveryDestinationType?: DeliveryDestinationType;
  RoleArn?: string;
  Description?: string;
}
export interface UpdateEventLogConfigurationRequest {
  Id: string;
  EventLogLevel: LogLevel;
}
export interface UpdateManagedThingRequest {
  Identifier: string;
  Owner?: string;
  CredentialLockerId?: string;
  SerialNumber?: string;
  Brand?: string;
  Model?: string;
  Name?: string;
  CapabilityReport?: CapabilityReport;
  CapabilitySchemas?: Array<CapabilitySchemaItem>;
  Capabilities?: string;
  Classification?: string;
  HubNetworkMode?: HubNetworkMode;
  MetaData?: Record<string, string>;
}
export interface UpdateNotificationConfigurationRequest {
  EventType: EventType;
  DestinationName: string;
}
export interface UpdateOtaTaskRequest {
  Identifier: string;
  Description?: string;
  TaskConfigurationId?: string;
}
export type UploadLog = boolean;

export type UploadPeriodMinutes = number;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type ValidationSchema = unknown;

export declare namespace GetCustomEndpoint {
  export type Input = GetCustomEndpointRequest;
  export type Output = GetCustomEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RegisterCustomEndpoint {
  export type Input = RegisterCustomEndpointRequest;
  export type Output = RegisterCustomEndpointResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendConnectorEvent {
  export type Input = SendConnectorEventRequest;
  export type Output = SendConnectorEventResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConflictException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConflictException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateAccountAssociation {
  export type Input = CreateAccountAssociationRequest;
  export type Output = CreateAccountAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCloudConnector {
  export type Input = CreateCloudConnectorRequest;
  export type Output = CreateCloudConnectorResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateConnectorDestination {
  export type Input = CreateConnectorDestinationRequest;
  export type Output = CreateConnectorDestinationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCredentialLocker {
  export type Input = CreateCredentialLockerRequest;
  export type Output = CreateCredentialLockerResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
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
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEventLogConfiguration {
  export type Input = CreateEventLogConfigurationRequest;
  export type Output = CreateEventLogConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateManagedThing {
  export type Input = CreateManagedThingRequest;
  export type Output = CreateManagedThingResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateNotificationConfiguration {
  export type Input = CreateNotificationConfigurationRequest;
  export type Output = CreateNotificationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateOtaTask {
  export type Input = CreateOtaTaskRequest;
  export type Output = CreateOtaTaskResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateOtaTaskConfiguration {
  export type Input = CreateOtaTaskConfigurationRequest;
  export type Output = CreateOtaTaskConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateProvisioningProfile {
  export type Input = CreateProvisioningProfileRequest;
  export type Output = CreateProvisioningProfileResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAccountAssociation {
  export type Input = DeleteAccountAssociationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCloudConnector {
  export type Input = DeleteCloudConnectorRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteConnectorDestination {
  export type Input = DeleteConnectorDestinationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCredentialLocker {
  export type Input = DeleteCredentialLockerRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDestination {
  export type Input = DeleteDestinationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEventLogConfiguration {
  export type Input = DeleteEventLogConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteManagedThing {
  export type Input = DeleteManagedThingRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteNotificationConfiguration {
  export type Input = DeleteNotificationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOtaTask {
  export type Input = DeleteOtaTaskRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOtaTaskConfiguration {
  export type Input = DeleteOtaTaskConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteProvisioningProfile {
  export type Input = DeleteProvisioningProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeregisterAccountAssociation {
  export type Input = DeregisterAccountAssociationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccountAssociation {
  export type Input = GetAccountAssociationRequest;
  export type Output = GetAccountAssociationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCloudConnector {
  export type Input = GetCloudConnectorRequest;
  export type Output = GetCloudConnectorResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetConnectorDestination {
  export type Input = GetConnectorDestinationRequest;
  export type Output = GetConnectorDestinationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCredentialLocker {
  export type Input = GetCredentialLockerRequest;
  export type Output = GetCredentialLockerResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDefaultEncryptionConfiguration {
  export type Input = GetDefaultEncryptionConfigurationRequest;
  export type Output = GetDefaultEncryptionConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
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

export declare namespace GetDeviceDiscovery {
  export type Input = GetDeviceDiscoveryRequest;
  export type Output = GetDeviceDiscoveryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEventLogConfiguration {
  export type Input = GetEventLogConfigurationRequest;
  export type Output = GetEventLogConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetHubConfiguration {
  export type Input = GetHubConfigurationRequest;
  export type Output = GetHubConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedThing {
  export type Input = GetManagedThingRequest;
  export type Output = GetManagedThingResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedThingCapabilities {
  export type Input = GetManagedThingCapabilitiesRequest;
  export type Output = GetManagedThingCapabilitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedThingCertificate {
  export type Input = GetManagedThingCertificateRequest;
  export type Output = GetManagedThingCertificateResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedThingConnectivityData {
  export type Input = GetManagedThingConnectivityDataRequest;
  export type Output = GetManagedThingConnectivityDataResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedThingMetaData {
  export type Input = GetManagedThingMetaDataRequest;
  export type Output = GetManagedThingMetaDataResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetManagedThingState {
  export type Input = GetManagedThingStateRequest;
  export type Output = GetManagedThingStateResponse;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetNotificationConfiguration {
  export type Input = GetNotificationConfigurationRequest;
  export type Output = GetNotificationConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOtaTask {
  export type Input = GetOtaTaskRequest;
  export type Output = GetOtaTaskResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOtaTaskConfiguration {
  export type Input = GetOtaTaskConfigurationRequest;
  export type Output = GetOtaTaskConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetProvisioningProfile {
  export type Input = GetProvisioningProfileRequest;
  export type Output = GetProvisioningProfileResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRuntimeLogConfiguration {
  export type Input = GetRuntimeLogConfigurationRequest;
  export type Output = GetRuntimeLogConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSchemaVersion {
  export type Input = GetSchemaVersionRequest;
  export type Output = GetSchemaVersionResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAccountAssociations {
  export type Input = ListAccountAssociationsRequest;
  export type Output = ListAccountAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCloudConnectors {
  export type Input = ListCloudConnectorsRequest;
  export type Output = ListCloudConnectorsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListConnectorDestinations {
  export type Input = ListConnectorDestinationsRequest;
  export type Output = ListConnectorDestinationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCredentialLockers {
  export type Input = ListCredentialLockersRequest;
  export type Output = ListCredentialLockersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
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

export declare namespace ListDeviceDiscoveries {
  export type Input = ListDeviceDiscoveriesRequest;
  export type Output = ListDeviceDiscoveriesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDiscoveredDevices {
  export type Input = ListDiscoveredDevicesRequest;
  export type Output = ListDiscoveredDevicesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEventLogConfigurations {
  export type Input = ListEventLogConfigurationsRequest;
  export type Output = ListEventLogConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedThingAccountAssociations {
  export type Input = ListManagedThingAccountAssociationsRequest;
  export type Output = ListManagedThingAccountAssociationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedThingSchemas {
  export type Input = ListManagedThingSchemasRequest;
  export type Output = ListManagedThingSchemasResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListManagedThings {
  export type Input = ListManagedThingsRequest;
  export type Output = ListManagedThingsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListNotificationConfigurations {
  export type Input = ListNotificationConfigurationsRequest;
  export type Output = ListNotificationConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOtaTaskConfigurations {
  export type Input = ListOtaTaskConfigurationsRequest;
  export type Output = ListOtaTaskConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOtaTaskExecutions {
  export type Input = ListOtaTaskExecutionsRequest;
  export type Output = ListOtaTaskExecutionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOtaTasks {
  export type Input = ListOtaTasksRequest;
  export type Output = ListOtaTasksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProvisioningProfiles {
  export type Input = ListProvisioningProfilesRequest;
  export type Output = ListProvisioningProfilesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSchemaVersions {
  export type Input = ListSchemaVersionsRequest;
  export type Output = ListSchemaVersionsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutDefaultEncryptionConfiguration {
  export type Input = PutDefaultEncryptionConfigurationRequest;
  export type Output = PutDefaultEncryptionConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutHubConfiguration {
  export type Input = PutHubConfigurationRequest;
  export type Output = PutHubConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRuntimeLogConfiguration {
  export type Input = PutRuntimeLogConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RegisterAccountAssociation {
  export type Input = RegisterAccountAssociationRequest;
  export type Output = RegisterAccountAssociationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetRuntimeLogConfiguration {
  export type Input = ResetRuntimeLogConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendManagedThingCommand {
  export type Input = SendManagedThingCommandRequest;
  export type Output = SendManagedThingCommandResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAccountAssociationRefresh {
  export type Input = StartAccountAssociationRefreshRequest;
  export type Output = StartAccountAssociationRefreshResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartDeviceDiscovery {
  export type Input = StartDeviceDiscoveryRequest;
  export type Output = StartDeviceDiscoveryResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAccountAssociation {
  export type Input = UpdateAccountAssociationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCloudConnector {
  export type Input = UpdateCloudConnectorRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateConnectorDestination {
  export type Input = UpdateConnectorDestinationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDestination {
  export type Input = UpdateDestinationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateEventLogConfiguration {
  export type Input = UpdateEventLogConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateManagedThing {
  export type Input = UpdateManagedThingRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateNotificationConfiguration {
  export type Input = UpdateNotificationConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOtaTask {
  export type Input = UpdateOtaTaskRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type IoTManagedIntegrationsErrors =
  | AccessDeniedException
  | ConflictException
  | InternalFailureException
  | InternalServerException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonAwsError;
