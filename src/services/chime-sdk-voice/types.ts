import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
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
  | ThrottlingException
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | ValidationException
  | AccessDeniedException;
import { AWSServiceClient } from "../../client.ts";

export declare class ChimeSDKVoice extends AWSServiceClient {
  associatePhoneNumbersWithVoiceConnector(
    input: AssociatePhoneNumbersWithVoiceConnectorRequest,
  ): Effect.Effect<
    AssociatePhoneNumbersWithVoiceConnectorResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  associatePhoneNumbersWithVoiceConnectorGroup(
    input: AssociatePhoneNumbersWithVoiceConnectorGroupRequest,
  ): Effect.Effect<
    AssociatePhoneNumbersWithVoiceConnectorGroupResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  batchDeletePhoneNumber(
    input: BatchDeletePhoneNumberRequest,
  ): Effect.Effect<
    BatchDeletePhoneNumberResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  batchUpdatePhoneNumber(
    input: BatchUpdatePhoneNumberRequest,
  ): Effect.Effect<
    BatchUpdatePhoneNumberResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createPhoneNumberOrder(
    input: CreatePhoneNumberOrderRequest,
  ): Effect.Effect<
    CreatePhoneNumberOrderResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createProxySession(
    input: CreateProxySessionRequest,
  ): Effect.Effect<
    CreateProxySessionResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createSipMediaApplication(
    input: CreateSipMediaApplicationRequest,
  ): Effect.Effect<
    CreateSipMediaApplicationResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createSipMediaApplicationCall(
    input: CreateSipMediaApplicationCallRequest,
  ): Effect.Effect<
    CreateSipMediaApplicationCallResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createSipRule(
    input: CreateSipRuleRequest,
  ): Effect.Effect<
    CreateSipRuleResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createVoiceConnector(
    input: CreateVoiceConnectorRequest,
  ): Effect.Effect<
    CreateVoiceConnectorResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createVoiceConnectorGroup(
    input: CreateVoiceConnectorGroupRequest,
  ): Effect.Effect<
    CreateVoiceConnectorGroupResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createVoiceProfile(
    input: CreateVoiceProfileRequest,
  ): Effect.Effect<
    CreateVoiceProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GoneException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createVoiceProfileDomain(
    input: CreateVoiceProfileDomainRequest,
  ): Effect.Effect<
    CreateVoiceProfileDomainResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deletePhoneNumber(
    input: DeletePhoneNumberRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteProxySession(
    input: DeleteProxySessionRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteSipMediaApplication(
    input: DeleteSipMediaApplicationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteSipRule(
    input: DeleteSipRuleRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceConnector(
    input: DeleteVoiceConnectorRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceConnectorEmergencyCallingConfiguration(
    input: DeleteVoiceConnectorEmergencyCallingConfigurationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceConnectorExternalSystemsConfiguration(
    input: DeleteVoiceConnectorExternalSystemsConfigurationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceConnectorGroup(
    input: DeleteVoiceConnectorGroupRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceConnectorOrigination(
    input: DeleteVoiceConnectorOriginationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceConnectorProxy(
    input: DeleteVoiceConnectorProxyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceConnectorStreamingConfiguration(
    input: DeleteVoiceConnectorStreamingConfigurationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceConnectorTermination(
    input: DeleteVoiceConnectorTerminationRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceConnectorTerminationCredentials(
    input: DeleteVoiceConnectorTerminationCredentialsRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceProfile(
    input: DeleteVoiceProfileRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteVoiceProfileDomain(
    input: DeleteVoiceProfileDomainRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  disassociatePhoneNumbersFromVoiceConnector(
    input: DisassociatePhoneNumbersFromVoiceConnectorRequest,
  ): Effect.Effect<
    DisassociatePhoneNumbersFromVoiceConnectorResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    input: DisassociatePhoneNumbersFromVoiceConnectorGroupRequest,
  ): Effect.Effect<
    DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getGlobalSettings(input: {}): Effect.Effect<
    GetGlobalSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getPhoneNumber(
    input: GetPhoneNumberRequest,
  ): Effect.Effect<
    GetPhoneNumberResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getPhoneNumberOrder(
    input: GetPhoneNumberOrderRequest,
  ): Effect.Effect<
    GetPhoneNumberOrderResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getPhoneNumberSettings(input: {}): Effect.Effect<
    GetPhoneNumberSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getProxySession(
    input: GetProxySessionRequest,
  ): Effect.Effect<
    GetProxySessionResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getSipMediaApplication(
    input: GetSipMediaApplicationRequest,
  ): Effect.Effect<
    GetSipMediaApplicationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getSipMediaApplicationAlexaSkillConfiguration(
    input: GetSipMediaApplicationAlexaSkillConfigurationRequest,
  ): Effect.Effect<
    GetSipMediaApplicationAlexaSkillConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getSipMediaApplicationLoggingConfiguration(
    input: GetSipMediaApplicationLoggingConfigurationRequest,
  ): Effect.Effect<
    GetSipMediaApplicationLoggingConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getSipRule(
    input: GetSipRuleRequest,
  ): Effect.Effect<
    GetSipRuleResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getSpeakerSearchTask(
    input: GetSpeakerSearchTaskRequest,
  ): Effect.Effect<
    GetSpeakerSearchTaskResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnector(
    input: GetVoiceConnectorRequest,
  ): Effect.Effect<
    GetVoiceConnectorResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnectorEmergencyCallingConfiguration(
    input: GetVoiceConnectorEmergencyCallingConfigurationRequest,
  ): Effect.Effect<
    GetVoiceConnectorEmergencyCallingConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnectorExternalSystemsConfiguration(
    input: GetVoiceConnectorExternalSystemsConfigurationRequest,
  ): Effect.Effect<
    GetVoiceConnectorExternalSystemsConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnectorGroup(
    input: GetVoiceConnectorGroupRequest,
  ): Effect.Effect<
    GetVoiceConnectorGroupResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnectorLoggingConfiguration(
    input: GetVoiceConnectorLoggingConfigurationRequest,
  ): Effect.Effect<
    GetVoiceConnectorLoggingConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnectorOrigination(
    input: GetVoiceConnectorOriginationRequest,
  ): Effect.Effect<
    GetVoiceConnectorOriginationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnectorProxy(
    input: GetVoiceConnectorProxyRequest,
  ): Effect.Effect<
    GetVoiceConnectorProxyResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnectorStreamingConfiguration(
    input: GetVoiceConnectorStreamingConfigurationRequest,
  ): Effect.Effect<
    GetVoiceConnectorStreamingConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnectorTermination(
    input: GetVoiceConnectorTerminationRequest,
  ): Effect.Effect<
    GetVoiceConnectorTerminationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceConnectorTerminationHealth(
    input: GetVoiceConnectorTerminationHealthRequest,
  ): Effect.Effect<
    GetVoiceConnectorTerminationHealthResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceProfile(
    input: GetVoiceProfileRequest,
  ): Effect.Effect<
    GetVoiceProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceProfileDomain(
    input: GetVoiceProfileDomainRequest,
  ): Effect.Effect<
    GetVoiceProfileDomainResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getVoiceToneAnalysisTask(
    input: GetVoiceToneAnalysisTaskRequest,
  ): Effect.Effect<
    GetVoiceToneAnalysisTaskResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listAvailableVoiceConnectorRegions(input: {}): Effect.Effect<
    ListAvailableVoiceConnectorRegionsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listPhoneNumberOrders(
    input: ListPhoneNumberOrdersRequest,
  ): Effect.Effect<
    ListPhoneNumberOrdersResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listPhoneNumbers(
    input: ListPhoneNumbersRequest,
  ): Effect.Effect<
    ListPhoneNumbersResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listProxySessions(
    input: ListProxySessionsRequest,
  ): Effect.Effect<
    ListProxySessionsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listSipMediaApplications(
    input: ListSipMediaApplicationsRequest,
  ): Effect.Effect<
    ListSipMediaApplicationsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listSipRules(
    input: ListSipRulesRequest,
  ): Effect.Effect<
    ListSipRulesResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listSupportedPhoneNumberCountries(
    input: ListSupportedPhoneNumberCountriesRequest,
  ): Effect.Effect<
    ListSupportedPhoneNumberCountriesResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listVoiceConnectorGroups(
    input: ListVoiceConnectorGroupsRequest,
  ): Effect.Effect<
    ListVoiceConnectorGroupsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listVoiceConnectors(
    input: ListVoiceConnectorsRequest,
  ): Effect.Effect<
    ListVoiceConnectorsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listVoiceConnectorTerminationCredentials(
    input: ListVoiceConnectorTerminationCredentialsRequest,
  ): Effect.Effect<
    ListVoiceConnectorTerminationCredentialsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listVoiceProfileDomains(
    input: ListVoiceProfileDomainsRequest,
  ): Effect.Effect<
    ListVoiceProfileDomainsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listVoiceProfiles(
    input: ListVoiceProfilesRequest,
  ): Effect.Effect<
    ListVoiceProfilesResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putSipMediaApplicationAlexaSkillConfiguration(
    input: PutSipMediaApplicationAlexaSkillConfigurationRequest,
  ): Effect.Effect<
    PutSipMediaApplicationAlexaSkillConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putSipMediaApplicationLoggingConfiguration(
    input: PutSipMediaApplicationLoggingConfigurationRequest,
  ): Effect.Effect<
    PutSipMediaApplicationLoggingConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putVoiceConnectorEmergencyCallingConfiguration(
    input: PutVoiceConnectorEmergencyCallingConfigurationRequest,
  ): Effect.Effect<
    PutVoiceConnectorEmergencyCallingConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putVoiceConnectorExternalSystemsConfiguration(
    input: PutVoiceConnectorExternalSystemsConfigurationRequest,
  ): Effect.Effect<
    PutVoiceConnectorExternalSystemsConfigurationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putVoiceConnectorLoggingConfiguration(
    input: PutVoiceConnectorLoggingConfigurationRequest,
  ): Effect.Effect<
    PutVoiceConnectorLoggingConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putVoiceConnectorOrigination(
    input: PutVoiceConnectorOriginationRequest,
  ): Effect.Effect<
    PutVoiceConnectorOriginationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putVoiceConnectorProxy(
    input: PutVoiceConnectorProxyRequest,
  ): Effect.Effect<
    PutVoiceConnectorProxyResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putVoiceConnectorStreamingConfiguration(
    input: PutVoiceConnectorStreamingConfigurationRequest,
  ): Effect.Effect<
    PutVoiceConnectorStreamingConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putVoiceConnectorTermination(
    input: PutVoiceConnectorTerminationRequest,
  ): Effect.Effect<
    PutVoiceConnectorTerminationResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putVoiceConnectorTerminationCredentials(
    input: PutVoiceConnectorTerminationCredentialsRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  restorePhoneNumber(
    input: RestorePhoneNumberRequest,
  ): Effect.Effect<
    RestorePhoneNumberResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  searchAvailablePhoneNumbers(
    input: SearchAvailablePhoneNumbersRequest,
  ): Effect.Effect<
    SearchAvailablePhoneNumbersResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  startSpeakerSearchTask(
    input: StartSpeakerSearchTaskRequest,
  ): Effect.Effect<
    StartSpeakerSearchTaskResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GoneException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  startVoiceToneAnalysisTask(
    input: StartVoiceToneAnalysisTaskRequest,
  ): Effect.Effect<
    StartVoiceToneAnalysisTaskResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GoneException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  stopSpeakerSearchTask(
    input: StopSpeakerSearchTaskRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  stopVoiceToneAnalysisTask(
    input: StopVoiceToneAnalysisTaskRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateGlobalSettings(
    input: UpdateGlobalSettingsRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updatePhoneNumber(
    input: UpdatePhoneNumberRequest,
  ): Effect.Effect<
    UpdatePhoneNumberResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updatePhoneNumberSettings(
    input: UpdatePhoneNumberSettingsRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateProxySession(
    input: UpdateProxySessionRequest,
  ): Effect.Effect<
    UpdateProxySessionResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateSipMediaApplication(
    input: UpdateSipMediaApplicationRequest,
  ): Effect.Effect<
    UpdateSipMediaApplicationResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateSipMediaApplicationCall(
    input: UpdateSipMediaApplicationCallRequest,
  ): Effect.Effect<
    UpdateSipMediaApplicationCallResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateSipRule(
    input: UpdateSipRuleRequest,
  ): Effect.Effect<
    UpdateSipRuleResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateVoiceConnector(
    input: UpdateVoiceConnectorRequest,
  ): Effect.Effect<
    UpdateVoiceConnectorResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateVoiceConnectorGroup(
    input: UpdateVoiceConnectorGroupRequest,
  ): Effect.Effect<
    UpdateVoiceConnectorGroupResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateVoiceProfile(
    input: UpdateVoiceProfileRequest,
  ): Effect.Effect<
    UpdateVoiceProfileResponse,
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GoneException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateVoiceProfileDomain(
    input: UpdateVoiceProfileDomainRequest,
  ): Effect.Effect<
    UpdateVoiceProfileDomainResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  validateE911Address(
    input: ValidateE911AddressRequest,
  ): Effect.Effect<
    ValidateE911AddressResponse,
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
}

export declare class ChimeSdkVoice extends ChimeSDKVoice {}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface Address {
  streetName?: string;
  streetSuffix?: string;
  postDirectional?: string;
  preDirectional?: string;
  streetNumber?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  postalCodePlus4?: string;
  country?: string;
}
export type AlexaSkillId = string;

export type AlexaSkillIdList = Array<string>;
export type AlexaSkillStatus = "ACTIVE" | "INACTIVE";
export type Alpha2CountryCode = string;

export type AreaCode = string;

export type Arn = string;

export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
  E164PhoneNumbers: Array<string>;
  ForceAssociate?: boolean;
}
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  PhoneNumberErrors?: Array<PhoneNumberError>;
}
export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  VoiceConnectorId: string;
  E164PhoneNumbers: Array<string>;
  ForceAssociate?: boolean;
}
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  PhoneNumberErrors?: Array<PhoneNumberError>;
}
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface BatchDeletePhoneNumberRequest {
  PhoneNumberIds: Array<string>;
}
export interface BatchDeletePhoneNumberResponse {
  PhoneNumberErrors?: Array<PhoneNumberError>;
}
export interface BatchUpdatePhoneNumberRequest {
  UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
}
export interface BatchUpdatePhoneNumberResponse {
  PhoneNumberErrors?: Array<PhoneNumberError>;
}
export type ChimeSdkVoiceBoolean = boolean;

export interface CallDetails {
  VoiceConnectorId?: string;
  TransactionId?: string;
  IsCaller?: boolean;
}
export type CallingName = string;

export type CallingNameStatus =
  | "Unassigned"
  | "UpdateInProgress"
  | "UpdateSucceeded"
  | "UpdateFailed";
export type CallingRegion = string;

export type CallingRegionList = Array<string>;
export type CallLegType = "Caller" | "Callee";
export interface CandidateAddress {
  streetInfo?: string;
  streetNumber?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  postalCodePlus4?: string;
  country?: string;
}
export type CandidateAddressList = Array<CandidateAddress>;
export type Capability = "Voice" | "SMS";
export type CapabilityList = Array<Capability>;
export type ClientRequestId = string;

export type ConfidenceScore = number;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type ContactCenterSystemType =
  | "GENESYS_ENGAGE_ON_PREMISES"
  | "AVAYA_AURA_CALL_CENTER_ELITE"
  | "AVAYA_AURA_CONTACT_CENTER"
  | "CISCO_UNIFIED_CONTACT_CENTER_ENTERPRISE";
export type ContactCenterSystemTypeList = Array<ContactCenterSystemType>;
export type Country = string;

export type CountryList = Array<string>;
export type CpsLimit = number;

export interface CreatePhoneNumberOrderRequest {
  ProductType: PhoneNumberProductType;
  E164PhoneNumbers: Array<string>;
  Name?: string;
}
export interface CreatePhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}
export interface CreateProxySessionRequest {
  VoiceConnectorId: string;
  ParticipantPhoneNumbers: Array<string>;
  Name?: string;
  ExpiryMinutes?: number;
  Capabilities: Array<Capability>;
  NumberSelectionBehavior?: NumberSelectionBehavior;
  GeoMatchLevel?: GeoMatchLevel;
  GeoMatchParams?: GeoMatchParams;
}
export interface CreateProxySessionResponse {
  ProxySession?: ProxySession;
}
export interface CreateSipMediaApplicationCallRequest {
  FromPhoneNumber: string;
  ToPhoneNumber: string;
  SipMediaApplicationId: string;
  SipHeaders?: Record<string, string>;
  ArgumentsMap?: Record<string, string>;
}
export interface CreateSipMediaApplicationCallResponse {
  SipMediaApplicationCall?: SipMediaApplicationCall;
}
export interface CreateSipMediaApplicationRequest {
  AwsRegion: string;
  Name: string;
  Endpoints: Array<SipMediaApplicationEndpoint>;
  Tags?: Array<Tag>;
}
export interface CreateSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}
export interface CreateSipRuleRequest {
  Name: string;
  TriggerType: SipRuleTriggerType;
  TriggerValue: string;
  Disabled?: boolean;
  TargetApplications?: Array<SipRuleTargetApplication>;
}
export interface CreateSipRuleResponse {
  SipRule?: SipRule;
}
export interface CreateVoiceConnectorGroupRequest {
  Name: string;
  VoiceConnectorItems?: Array<VoiceConnectorItem>;
}
export interface CreateVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}
export interface CreateVoiceConnectorRequest {
  Name: string;
  AwsRegion?: VoiceConnectorAwsRegion;
  RequireEncryption: boolean;
  Tags?: Array<Tag>;
  IntegrationType?: VoiceConnectorIntegrationType;
  NetworkType?: NetworkType;
}
export interface CreateVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}
export interface CreateVoiceProfileDomainRequest {
  Name: string;
  Description?: string;
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
  ClientRequestToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateVoiceProfileDomainResponse {
  VoiceProfileDomain?: VoiceProfileDomain;
}
export interface CreateVoiceProfileRequest {
  SpeakerSearchTaskId: string;
}
export interface CreateVoiceProfileResponse {
  VoiceProfile?: VoiceProfile;
}
export interface Credential {
  Username?: string;
  Password?: string;
}
export type CredentialList = Array<Credential>;
export type DataRetentionInHours = number;

export interface DeletePhoneNumberRequest {
  PhoneNumberId: string;
}
export interface DeleteProxySessionRequest {
  VoiceConnectorId: string;
  ProxySessionId: string;
}
export interface DeleteSipMediaApplicationRequest {
  SipMediaApplicationId: string;
}
export interface DeleteSipRuleRequest {
  SipRuleId: string;
}
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorExternalSystemsConfigurationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
}
export interface DeleteVoiceConnectorOriginationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorProxyRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string;
  Usernames: Array<string>;
}
export interface DeleteVoiceConnectorTerminationRequest {
  VoiceConnectorId: string;
}
export interface DeleteVoiceProfileDomainRequest {
  VoiceProfileDomainId: string;
}
export interface DeleteVoiceProfileRequest {
  VoiceProfileId: string;
}
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
  E164PhoneNumbers: Array<string>;
}
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  PhoneNumberErrors?: Array<PhoneNumberError>;
}
export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  VoiceConnectorId: string;
  E164PhoneNumbers: Array<string>;
}
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  PhoneNumberErrors?: Array<PhoneNumberError>;
}
export interface DNISEmergencyCallingConfiguration {
  EmergencyPhoneNumber: string;
  TestPhoneNumber?: string;
  CallingCountry: string;
}
export type DNISEmergencyCallingConfigurationList =
  Array<DNISEmergencyCallingConfiguration>;
export type E164PhoneNumber = string;

export type E164PhoneNumberList = Array<string>;
export interface EmergencyCallingConfiguration {
  DNIS?: Array<DNISEmergencyCallingConfiguration>;
}
export type ErrorCode =
  | "BadRequest"
  | "Conflict"
  | "Forbidden"
  | "NotFound"
  | "PreconditionFailed"
  | "ResourceLimitExceeded"
  | "ServiceFailure"
  | "AccessDenied"
  | "ServiceUnavailable"
  | "Throttled"
  | "Throttling"
  | "Unauthorized"
  | "Unprocessable"
  | "VoiceConnectorGroupAssociationsExist"
  | "PhoneNumberAssociationsExist"
  | "Gone";
export interface ExternalSystemsConfiguration {
  SessionBorderControllerTypes?: Array<SessionBorderControllerType>;
  ContactCenterSystemTypes?: Array<ContactCenterSystemType>;
}
export declare class ForbiddenException extends Data.TaggedError(
  "ForbiddenException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type FunctionArn = string;

export type GeoMatchLevel = "Country" | "AreaCode";
export interface GeoMatchParams {
  Country: string;
  AreaCode: string;
}
export interface GetGlobalSettingsResponse {
  VoiceConnector?: VoiceConnectorSettings;
}
export interface GetPhoneNumberOrderRequest {
  PhoneNumberOrderId: string;
}
export interface GetPhoneNumberOrderResponse {
  PhoneNumberOrder?: PhoneNumberOrder;
}
export interface GetPhoneNumberRequest {
  PhoneNumberId: string;
}
export interface GetPhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}
export interface GetPhoneNumberSettingsResponse {
  CallingName?: string;
  CallingNameUpdatedTimestamp?: Date | string;
}
export interface GetProxySessionRequest {
  VoiceConnectorId: string;
  ProxySessionId: string;
}
export interface GetProxySessionResponse {
  ProxySession?: ProxySession;
}
export interface GetSipMediaApplicationAlexaSkillConfigurationRequest {
  SipMediaApplicationId: string;
}
export interface GetSipMediaApplicationAlexaSkillConfigurationResponse {
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  SipMediaApplicationId: string;
}
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}
export interface GetSipMediaApplicationRequest {
  SipMediaApplicationId: string;
}
export interface GetSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}
export interface GetSipRuleRequest {
  SipRuleId: string;
}
export interface GetSipRuleResponse {
  SipRule?: SipRule;
}
export interface GetSpeakerSearchTaskRequest {
  VoiceConnectorId: string;
  SpeakerSearchTaskId: string;
}
export interface GetSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}
export interface GetVoiceConnectorExternalSystemsConfigurationRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorExternalSystemsConfigurationResponse {
  ExternalSystemsConfiguration?: ExternalSystemsConfiguration;
}
export interface GetVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
}
export interface GetVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}
export interface GetVoiceConnectorLoggingConfigurationRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface GetVoiceConnectorOriginationRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorOriginationResponse {
  Origination?: Origination;
}
export interface GetVoiceConnectorProxyRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorProxyResponse {
  Proxy?: Proxy;
}
export interface GetVoiceConnectorRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}
export interface GetVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorStreamingConfigurationResponse {
  StreamingConfiguration?: StreamingConfiguration;
}
export interface GetVoiceConnectorTerminationHealthRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorTerminationHealthResponse {
  TerminationHealth?: TerminationHealth;
}
export interface GetVoiceConnectorTerminationRequest {
  VoiceConnectorId: string;
}
export interface GetVoiceConnectorTerminationResponse {
  Termination?: Termination;
}
export interface GetVoiceProfileDomainRequest {
  VoiceProfileDomainId: string;
}
export interface GetVoiceProfileDomainResponse {
  VoiceProfileDomain?: VoiceProfileDomain;
}
export interface GetVoiceProfileRequest {
  VoiceProfileId: string;
}
export interface GetVoiceProfileResponse {
  VoiceProfile?: VoiceProfile;
}
export interface GetVoiceToneAnalysisTaskRequest {
  VoiceConnectorId: string;
  VoiceToneAnalysisTaskId: string;
  IsCaller: boolean;
}
export interface GetVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}
export declare class GoneException extends Data.TaggedError("GoneException")<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type GuidString = string;

export type Integer = number;

export type Iso8601Timestamp = Date | string;

export type LanguageCode = "en-US";
export interface ListAvailableVoiceConnectorRegionsResponse {
  VoiceConnectorRegions?: Array<VoiceConnectorAwsRegion>;
}
export interface ListPhoneNumberOrdersRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPhoneNumberOrdersResponse {
  PhoneNumberOrders?: Array<PhoneNumberOrder>;
  NextToken?: string;
}
export interface ListPhoneNumbersRequest {
  Status?: string;
  ProductType?: PhoneNumberProductType;
  FilterName?: PhoneNumberAssociationName;
  FilterValue?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPhoneNumbersResponse {
  PhoneNumbers?: Array<PhoneNumber>;
  NextToken?: string;
}
export interface ListProxySessionsRequest {
  VoiceConnectorId: string;
  Status?: ProxySessionStatus;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListProxySessionsResponse {
  ProxySessions?: Array<ProxySession>;
  NextToken?: string;
}
export interface ListSipMediaApplicationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSipMediaApplicationsResponse {
  SipMediaApplications?: Array<SipMediaApplication>;
  NextToken?: string;
}
export interface ListSipRulesRequest {
  SipMediaApplicationId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSipRulesResponse {
  SipRules?: Array<SipRule>;
  NextToken?: string;
}
export interface ListSupportedPhoneNumberCountriesRequest {
  ProductType: PhoneNumberProductType;
}
export interface ListSupportedPhoneNumberCountriesResponse {
  PhoneNumberCountries?: Array<PhoneNumberCountry>;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListVoiceConnectorGroupsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListVoiceConnectorGroupsResponse {
  VoiceConnectorGroups?: Array<VoiceConnectorGroup>;
  NextToken?: string;
}
export interface ListVoiceConnectorsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListVoiceConnectorsResponse {
  VoiceConnectors?: Array<VoiceConnector>;
  NextToken?: string;
}
export interface ListVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string;
}
export interface ListVoiceConnectorTerminationCredentialsResponse {
  Usernames?: Array<string>;
}
export interface ListVoiceProfileDomainsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListVoiceProfileDomainsResponse {
  VoiceProfileDomains?: Array<VoiceProfileDomainSummary>;
  NextToken?: string;
}
export interface ListVoiceProfilesRequest {
  VoiceProfileDomainId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListVoiceProfilesResponse {
  VoiceProfiles?: Array<VoiceProfileSummary>;
  NextToken?: string;
}
export interface LoggingConfiguration {
  EnableSIPLogs?: boolean;
  EnableMediaMetricLogs?: boolean;
}
export interface MediaInsightsConfiguration {
  Disabled?: boolean;
  ConfigurationArn?: string;
}
export type NetworkType = "IPV4_ONLY" | "DUAL_STACK";
export type NextTokenString = string;

export type NonEmptyString = string;

export type NonEmptyString128 = string;

export type NonEmptyString256 = string;

export type NonEmptyStringList = Array<string>;
export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type NotificationTarget = "EventBridge" | "SNS" | "SQS";
export type NullableBoolean = boolean;

export type NumberSelectionBehavior = "PreferSticky" | "AvoidSticky";
export interface OrderedPhoneNumber {
  E164PhoneNumber?: string;
  Status?: OrderedPhoneNumberStatus;
}
export type OrderedPhoneNumberList = Array<OrderedPhoneNumber>;
export type OrderedPhoneNumberStatus = "Processing" | "Acquired" | "Failed";
export interface Origination {
  Routes?: Array<OriginationRoute>;
  Disabled?: boolean;
}
export interface OriginationRoute {
  Host?: string;
  Port?: number;
  Protocol?: OriginationRouteProtocol;
  Priority?: number;
  Weight?: number;
}
export type OriginationRouteList = Array<OriginationRoute>;
export type OriginationRoutePriority = number;

export type OriginationRouteProtocol = "TCP" | "UDP";
export type OriginationRouteWeight = number;

export interface Participant {
  PhoneNumber?: string;
  ProxyPhoneNumber?: string;
}
export type ParticipantPhoneNumberList = Array<string>;
export type Participants = Array<Participant>;
export interface PhoneNumber {
  PhoneNumberId?: string;
  E164PhoneNumber?: string;
  Country?: string;
  Type?: PhoneNumberType;
  ProductType?: PhoneNumberProductType;
  Status?: PhoneNumberStatus;
  Capabilities?: PhoneNumberCapabilities;
  Associations?: Array<PhoneNumberAssociation>;
  CallingName?: string;
  CallingNameStatus?: CallingNameStatus;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  DeletionTimestamp?: Date | string;
  OrderId?: string;
  Name?: string;
}
export interface PhoneNumberAssociation {
  Value?: string;
  Name?: PhoneNumberAssociationName;
  AssociatedTimestamp?: Date | string;
}
export type PhoneNumberAssociationList = Array<PhoneNumberAssociation>;
export type PhoneNumberAssociationName =
  | "VoiceConnectorId"
  | "VoiceConnectorGroupId"
  | "SipRuleId";
export interface PhoneNumberCapabilities {
  InboundCall?: boolean;
  OutboundCall?: boolean;
  InboundSMS?: boolean;
  OutboundSMS?: boolean;
  InboundMMS?: boolean;
  OutboundMMS?: boolean;
}
export type PhoneNumberCountriesList = Array<PhoneNumberCountry>;
export interface PhoneNumberCountry {
  CountryCode?: string;
  SupportedPhoneNumberTypes?: Array<PhoneNumberType>;
}
export interface PhoneNumberError {
  PhoneNumberId?: string;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type PhoneNumberErrorList = Array<PhoneNumberError>;
export type PhoneNumberList = Array<PhoneNumber>;
export type PhoneNumberMaxResults = number;

export type PhoneNumberName = string;

export interface PhoneNumberOrder {
  PhoneNumberOrderId?: string;
  ProductType?: PhoneNumberProductType;
  Status?: PhoneNumberOrderStatus;
  OrderType?: PhoneNumberOrderType;
  OrderedPhoneNumbers?: Array<OrderedPhoneNumber>;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  FocDate?: Date | string;
}
export type PhoneNumberOrderList = Array<PhoneNumberOrder>;
export type PhoneNumberOrderStatus =
  | "Processing"
  | "Successful"
  | "Failed"
  | "Partial"
  | "PendingDocuments"
  | "Submitted"
  | "FOC"
  | "ChangeRequested"
  | "Exception"
  | "CancelRequested"
  | "Cancelled";
export type PhoneNumberOrderType = "New" | "Porting";
export type PhoneNumberProductType =
  | "VoiceConnector"
  | "SipMediaApplicationDialIn";
export type PhoneNumberStatus =
  | "Cancelled"
  | "PortinCancelRequested"
  | "PortinInProgress"
  | "AcquireInProgress"
  | "AcquireFailed"
  | "Unassigned"
  | "Assigned"
  | "ReleaseInProgress"
  | "DeleteInProgress"
  | "ReleaseFailed"
  | "DeleteFailed";
export type PhoneNumberType = "Local" | "TollFree";
export type PhoneNumberTypeList = Array<PhoneNumberType>;
export type Port = number;

export type PositiveInteger = number;

export interface Proxy {
  DefaultSessionExpiryMinutes?: number;
  Disabled?: boolean;
  FallBackPhoneNumber?: string;
  PhoneNumberCountries?: Array<string>;
}
export interface ProxySession {
  VoiceConnectorId?: string;
  ProxySessionId?: string;
  Name?: string;
  Status?: ProxySessionStatus;
  ExpiryMinutes?: number;
  Capabilities?: Array<Capability>;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  EndedTimestamp?: Date | string;
  Participants?: Array<Participant>;
  NumberSelectionBehavior?: NumberSelectionBehavior;
  GeoMatchLevel?: GeoMatchLevel;
  GeoMatchParams?: GeoMatchParams;
}
export type ProxySessionNameString = string;

export type ProxySessions = Array<ProxySession>;
export type ProxySessionStatus = "Open" | "InProgress" | "Closed";
export interface PutSipMediaApplicationAlexaSkillConfigurationRequest {
  SipMediaApplicationId: string;
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}
export interface PutSipMediaApplicationAlexaSkillConfigurationResponse {
  SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
}
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  SipMediaApplicationId: string;
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  VoiceConnectorId: string;
  EmergencyCallingConfiguration: EmergencyCallingConfiguration;
}
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}
export interface PutVoiceConnectorExternalSystemsConfigurationRequest {
  VoiceConnectorId: string;
  SessionBorderControllerTypes?: Array<SessionBorderControllerType>;
  ContactCenterSystemTypes?: Array<ContactCenterSystemType>;
}
export interface PutVoiceConnectorExternalSystemsConfigurationResponse {
  ExternalSystemsConfiguration?: ExternalSystemsConfiguration;
}
export interface PutVoiceConnectorLoggingConfigurationRequest {
  VoiceConnectorId: string;
  LoggingConfiguration: LoggingConfiguration;
}
export interface PutVoiceConnectorLoggingConfigurationResponse {
  LoggingConfiguration?: LoggingConfiguration;
}
export interface PutVoiceConnectorOriginationRequest {
  VoiceConnectorId: string;
  Origination: Origination;
}
export interface PutVoiceConnectorOriginationResponse {
  Origination?: Origination;
}
export interface PutVoiceConnectorProxyRequest {
  VoiceConnectorId: string;
  DefaultSessionExpiryMinutes: number;
  PhoneNumberPoolCountries: Array<string>;
  FallBackPhoneNumber?: string;
  Disabled?: boolean;
}
export interface PutVoiceConnectorProxyResponse {
  Proxy?: Proxy;
}
export interface PutVoiceConnectorStreamingConfigurationRequest {
  VoiceConnectorId: string;
  StreamingConfiguration: StreamingConfiguration;
}
export interface PutVoiceConnectorStreamingConfigurationResponse {
  StreamingConfiguration?: StreamingConfiguration;
}
export interface PutVoiceConnectorTerminationCredentialsRequest {
  VoiceConnectorId: string;
  Credentials?: Array<Credential>;
}
export interface PutVoiceConnectorTerminationRequest {
  VoiceConnectorId: string;
  Termination: Termination;
}
export interface PutVoiceConnectorTerminationResponse {
  Termination?: Termination;
}
export declare class ResourceLimitExceededException extends Data.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface RestorePhoneNumberRequest {
  PhoneNumberId: string;
}
export interface RestorePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}
export type ResultMax = number;

export interface SearchAvailablePhoneNumbersRequest {
  AreaCode?: string;
  City?: string;
  Country?: string;
  State?: string;
  TollFreePrefix?: string;
  PhoneNumberType?: PhoneNumberType;
  MaxResults?: number;
  NextToken?: string;
}
export interface SearchAvailablePhoneNumbersResponse {
  E164PhoneNumbers?: Array<string>;
  NextToken?: string;
}
export type SensitiveNonEmptyString = string;

export type SensitiveString = string;

export type SensitiveStringList = Array<string>;
export interface ServerSideEncryptionConfiguration {
  KmsKeyArn: string;
}
export declare class ServiceFailureException extends Data.TaggedError(
  "ServiceFailureException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type SessionBorderControllerType =
  | "RIBBON_SBC"
  | "ORACLE_ACME_PACKET_SBC"
  | "AVAYA_SBCE"
  | "CISCO_UNIFIED_BORDER_ELEMENT"
  | "AUDIOCODES_MEDIANT_SBC";
export type SessionBorderControllerTypeList =
  Array<SessionBorderControllerType>;
export type SipApplicationPriority = number;

export type SipHeadersMap = Record<string, string>;
export interface SipMediaApplication {
  SipMediaApplicationId?: string;
  AwsRegion?: string;
  Name?: string;
  Endpoints?: Array<SipMediaApplicationEndpoint>;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  SipMediaApplicationArn?: string;
}
export interface SipMediaApplicationAlexaSkillConfiguration {
  AlexaSkillStatus: AlexaSkillStatus;
  AlexaSkillIds: Array<string>;
}
export interface SipMediaApplicationCall {
  TransactionId?: string;
}
export interface SipMediaApplicationEndpoint {
  LambdaArn?: string;
}
export type SipMediaApplicationEndpointList =
  Array<SipMediaApplicationEndpoint>;
export type SipMediaApplicationList = Array<SipMediaApplication>;
export interface SipMediaApplicationLoggingConfiguration {
  EnableSipMediaApplicationMessageLogs?: boolean;
}
export type SipMediaApplicationName = string;

export interface SipRule {
  SipRuleId?: string;
  Name?: string;
  Disabled?: boolean;
  TriggerType?: SipRuleTriggerType;
  TriggerValue?: string;
  TargetApplications?: Array<SipRuleTargetApplication>;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export type SipRuleList = Array<SipRule>;
export type SipRuleName = string;

export interface SipRuleTargetApplication {
  SipMediaApplicationId?: string;
  Priority?: number;
  AwsRegion?: string;
}
export type SipRuleTargetApplicationList = Array<SipRuleTargetApplication>;
export type SipRuleTriggerType = "ToPhoneNumber" | "RequestUriHostname";
export type SMACreateCallArgumentsMap = Record<string, string>;
export type SMAUpdateCallArgumentsMap = Record<string, string>;
export interface SpeakerSearchDetails {
  Results?: Array<SpeakerSearchResult>;
  VoiceprintGenerationStatus?: string;
}
export interface SpeakerSearchResult {
  ConfidenceScore?: number;
  VoiceProfileId?: string;
}
export type SpeakerSearchResultList = Array<SpeakerSearchResult>;
export interface SpeakerSearchTask {
  SpeakerSearchTaskId?: string;
  SpeakerSearchTaskStatus?: string;
  CallDetails?: CallDetails;
  SpeakerSearchDetails?: SpeakerSearchDetails;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  StartedTimestamp?: Date | string;
  StatusMessage?: string;
}
export interface StartSpeakerSearchTaskRequest {
  VoiceConnectorId: string;
  TransactionId: string;
  VoiceProfileDomainId: string;
  ClientRequestToken?: string;
  CallLeg?: CallLegType;
}
export interface StartSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}
export interface StartVoiceToneAnalysisTaskRequest {
  VoiceConnectorId: string;
  TransactionId: string;
  LanguageCode: LanguageCode;
  ClientRequestToken?: string;
}
export interface StartVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}
export interface StopSpeakerSearchTaskRequest {
  VoiceConnectorId: string;
  SpeakerSearchTaskId: string;
}
export interface StopVoiceToneAnalysisTaskRequest {
  VoiceConnectorId: string;
  VoiceToneAnalysisTaskId: string;
}
export interface StreamingConfiguration {
  DataRetentionInHours: number;
  Disabled: boolean;
  StreamingNotificationTargets?: Array<StreamingNotificationTarget>;
  MediaInsightsConfiguration?: MediaInsightsConfiguration;
}
export interface StreamingNotificationTarget {
  NotificationTarget?: NotificationTarget;
}
export type StreamingNotificationTargetList =
  Array<StreamingNotificationTarget>;
export type ChimeSdkVoiceString = string;

export type String128 = string;

export type StringList = Array<string>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export type TagValue = string;

export interface Termination {
  CpsLimit?: number;
  DefaultPhoneNumber?: string;
  CallingRegions?: Array<string>;
  CidrAllowedList?: Array<string>;
  Disabled?: boolean;
}
export interface TerminationHealth {
  Timestamp?: Date | string;
  Source?: string;
}
export declare class ThrottledClientException extends Data.TaggedError(
  "ThrottledClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type TollFreePrefix = string;

export declare class UnauthorizedClientException extends Data.TaggedError(
  "UnauthorizedClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export declare class UnprocessableEntityException extends Data.TaggedError(
  "UnprocessableEntityException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UpdateGlobalSettingsRequest {
  VoiceConnector?: VoiceConnectorSettings;
}
export interface UpdatePhoneNumberRequest {
  PhoneNumberId: string;
  ProductType?: PhoneNumberProductType;
  CallingName?: string;
  Name?: string;
}
export interface UpdatePhoneNumberRequestItem {
  PhoneNumberId: string;
  ProductType?: PhoneNumberProductType;
  CallingName?: string;
  Name?: string;
}
export type UpdatePhoneNumberRequestItemList =
  Array<UpdatePhoneNumberRequestItem>;
export interface UpdatePhoneNumberResponse {
  PhoneNumber?: PhoneNumber;
}
export interface UpdatePhoneNumberSettingsRequest {
  CallingName: string;
}
export interface UpdateProxySessionRequest {
  VoiceConnectorId: string;
  ProxySessionId: string;
  Capabilities: Array<Capability>;
  ExpiryMinutes?: number;
}
export interface UpdateProxySessionResponse {
  ProxySession?: ProxySession;
}
export interface UpdateSipMediaApplicationCallRequest {
  SipMediaApplicationId: string;
  TransactionId: string;
  Arguments: Record<string, string>;
}
export interface UpdateSipMediaApplicationCallResponse {
  SipMediaApplicationCall?: SipMediaApplicationCall;
}
export interface UpdateSipMediaApplicationRequest {
  SipMediaApplicationId: string;
  Name?: string;
  Endpoints?: Array<SipMediaApplicationEndpoint>;
}
export interface UpdateSipMediaApplicationResponse {
  SipMediaApplication?: SipMediaApplication;
}
export interface UpdateSipRuleRequest {
  SipRuleId: string;
  Name: string;
  Disabled?: boolean;
  TargetApplications?: Array<SipRuleTargetApplication>;
}
export interface UpdateSipRuleResponse {
  SipRule?: SipRule;
}
export interface UpdateVoiceConnectorGroupRequest {
  VoiceConnectorGroupId: string;
  Name: string;
  VoiceConnectorItems: Array<VoiceConnectorItem>;
}
export interface UpdateVoiceConnectorGroupResponse {
  VoiceConnectorGroup?: VoiceConnectorGroup;
}
export interface UpdateVoiceConnectorRequest {
  VoiceConnectorId: string;
  Name: string;
  RequireEncryption: boolean;
}
export interface UpdateVoiceConnectorResponse {
  VoiceConnector?: VoiceConnector;
}
export interface UpdateVoiceProfileDomainRequest {
  VoiceProfileDomainId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateVoiceProfileDomainResponse {
  VoiceProfileDomain?: VoiceProfileDomain;
}
export interface UpdateVoiceProfileRequest {
  VoiceProfileId: string;
  SpeakerSearchTaskId: string;
}
export interface UpdateVoiceProfileResponse {
  VoiceProfile?: VoiceProfile;
}
export interface ValidateE911AddressRequest {
  AwsAccountId: string;
  StreetNumber: string;
  StreetInfo: string;
  City: string;
  State: string;
  Country: string;
  PostalCode: string;
}
export interface ValidateE911AddressResponse {
  ValidationResult?: number;
  AddressExternalId?: string;
  Address?: Address;
  CandidateAddressList?: Array<CandidateAddress>;
}
export type ValidationResult = number;

export interface VoiceConnector {
  VoiceConnectorId?: string;
  AwsRegion?: VoiceConnectorAwsRegion;
  Name?: string;
  OutboundHostName?: string;
  RequireEncryption?: boolean;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  VoiceConnectorArn?: string;
  IntegrationType?: VoiceConnectorIntegrationType;
  NetworkType?: NetworkType;
}
export type VoiceConnectorAwsRegion =
  | "us-east-1"
  | "us-west-2"
  | "ca-central-1"
  | "eu-central-1"
  | "eu-west-1"
  | "eu-west-2"
  | "ap-northeast-2"
  | "ap-northeast-1"
  | "ap-southeast-1"
  | "ap-southeast-2";
export type VoiceConnectorAwsRegionList = Array<VoiceConnectorAwsRegion>;
export interface VoiceConnectorGroup {
  VoiceConnectorGroupId?: string;
  Name?: string;
  VoiceConnectorItems?: Array<VoiceConnectorItem>;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  VoiceConnectorGroupArn?: string;
}
export type VoiceConnectorGroupList = Array<VoiceConnectorGroup>;
export type VoiceConnectorGroupName = string;

export type VoiceConnectorIntegrationType =
  | "CONNECT_CALL_TRANSFER_CONNECTOR"
  | "CONNECT_ANALYTICS_CONNECTOR";
export interface VoiceConnectorItem {
  VoiceConnectorId: string;
  Priority: number;
}
export type VoiceConnectorItemList = Array<VoiceConnectorItem>;
export type VoiceConnectorItemPriority = number;

export type VoiceConnectorList = Array<VoiceConnector>;
export type VoiceConnectorName = string;

export interface VoiceConnectorSettings {
  CdrBucket?: string;
}
export interface VoiceProfile {
  VoiceProfileId?: string;
  VoiceProfileArn?: string;
  VoiceProfileDomainId?: string;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  ExpirationTimestamp?: Date | string;
}
export interface VoiceProfileDomain {
  VoiceProfileDomainId?: string;
  VoiceProfileDomainArn?: string;
  Name?: string;
  Description?: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export type VoiceProfileDomainDescription = string;

export type VoiceProfileDomainName = string;

export interface VoiceProfileDomainSummary {
  VoiceProfileDomainId?: string;
  VoiceProfileDomainArn?: string;
  Name?: string;
  Description?: string;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
}
export type VoiceProfileDomainSummaryList = Array<VoiceProfileDomainSummary>;
export interface VoiceProfileSummary {
  VoiceProfileId?: string;
  VoiceProfileArn?: string;
  VoiceProfileDomainId?: string;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  ExpirationTimestamp?: Date | string;
}
export type VoiceProfileSummaryList = Array<VoiceProfileSummary>;
export interface VoiceToneAnalysisTask {
  VoiceToneAnalysisTaskId?: string;
  VoiceToneAnalysisTaskStatus?: string;
  CallDetails?: CallDetails;
  CreatedTimestamp?: Date | string;
  UpdatedTimestamp?: Date | string;
  StartedTimestamp?: Date | string;
  StatusMessage?: string;
}
export declare namespace AssociatePhoneNumbersWithVoiceConnector {
  export type Input = AssociatePhoneNumbersWithVoiceConnectorRequest;
  export type Output = AssociatePhoneNumbersWithVoiceConnectorResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace AssociatePhoneNumbersWithVoiceConnectorGroup {
  export type Input = AssociatePhoneNumbersWithVoiceConnectorGroupRequest;
  export type Output = AssociatePhoneNumbersWithVoiceConnectorGroupResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace BatchDeletePhoneNumber {
  export type Input = BatchDeletePhoneNumberRequest;
  export type Output = BatchDeletePhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace BatchUpdatePhoneNumber {
  export type Input = BatchUpdatePhoneNumberRequest;
  export type Output = BatchUpdatePhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreatePhoneNumberOrder {
  export type Input = CreatePhoneNumberOrderRequest;
  export type Output = CreatePhoneNumberOrderResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateProxySession {
  export type Input = CreateProxySessionRequest;
  export type Output = CreateProxySessionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateSipMediaApplication {
  export type Input = CreateSipMediaApplicationRequest;
  export type Output = CreateSipMediaApplicationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateSipMediaApplicationCall {
  export type Input = CreateSipMediaApplicationCallRequest;
  export type Output = CreateSipMediaApplicationCallResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateSipRule {
  export type Input = CreateSipRuleRequest;
  export type Output = CreateSipRuleResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateVoiceConnector {
  export type Input = CreateVoiceConnectorRequest;
  export type Output = CreateVoiceConnectorResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateVoiceConnectorGroup {
  export type Input = CreateVoiceConnectorGroupRequest;
  export type Output = CreateVoiceConnectorGroupResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateVoiceProfile {
  export type Input = CreateVoiceProfileRequest;
  export type Output = CreateVoiceProfileResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GoneException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateVoiceProfileDomain {
  export type Input = CreateVoiceProfileDomainRequest;
  export type Output = CreateVoiceProfileDomainResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeletePhoneNumber {
  export type Input = DeletePhoneNumberRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteProxySession {
  export type Input = DeleteProxySessionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteSipMediaApplication {
  export type Input = DeleteSipMediaApplicationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteSipRule {
  export type Input = DeleteSipRuleRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceConnector {
  export type Input = DeleteVoiceConnectorRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceConnectorEmergencyCallingConfiguration {
  export type Input = DeleteVoiceConnectorEmergencyCallingConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceConnectorExternalSystemsConfiguration {
  export type Input = DeleteVoiceConnectorExternalSystemsConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceConnectorGroup {
  export type Input = DeleteVoiceConnectorGroupRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceConnectorOrigination {
  export type Input = DeleteVoiceConnectorOriginationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceConnectorProxy {
  export type Input = DeleteVoiceConnectorProxyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceConnectorStreamingConfiguration {
  export type Input = DeleteVoiceConnectorStreamingConfigurationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceConnectorTermination {
  export type Input = DeleteVoiceConnectorTerminationRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceConnectorTerminationCredentials {
  export type Input = DeleteVoiceConnectorTerminationCredentialsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceProfile {
  export type Input = DeleteVoiceProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteVoiceProfileDomain {
  export type Input = DeleteVoiceProfileDomainRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DisassociatePhoneNumbersFromVoiceConnector {
  export type Input = DisassociatePhoneNumbersFromVoiceConnectorRequest;
  export type Output = DisassociatePhoneNumbersFromVoiceConnectorResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DisassociatePhoneNumbersFromVoiceConnectorGroup {
  export type Input = DisassociatePhoneNumbersFromVoiceConnectorGroupRequest;
  export type Output = DisassociatePhoneNumbersFromVoiceConnectorGroupResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetGlobalSettings {
  export type Input = {};
  export type Output = GetGlobalSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetPhoneNumber {
  export type Input = GetPhoneNumberRequest;
  export type Output = GetPhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetPhoneNumberOrder {
  export type Input = GetPhoneNumberOrderRequest;
  export type Output = GetPhoneNumberOrderResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetPhoneNumberSettings {
  export type Input = {};
  export type Output = GetPhoneNumberSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetProxySession {
  export type Input = GetProxySessionRequest;
  export type Output = GetProxySessionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetSipMediaApplication {
  export type Input = GetSipMediaApplicationRequest;
  export type Output = GetSipMediaApplicationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetSipMediaApplicationAlexaSkillConfiguration {
  export type Input = GetSipMediaApplicationAlexaSkillConfigurationRequest;
  export type Output = GetSipMediaApplicationAlexaSkillConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetSipMediaApplicationLoggingConfiguration {
  export type Input = GetSipMediaApplicationLoggingConfigurationRequest;
  export type Output = GetSipMediaApplicationLoggingConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetSipRule {
  export type Input = GetSipRuleRequest;
  export type Output = GetSipRuleResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetSpeakerSearchTask {
  export type Input = GetSpeakerSearchTaskRequest;
  export type Output = GetSpeakerSearchTaskResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnector {
  export type Input = GetVoiceConnectorRequest;
  export type Output = GetVoiceConnectorResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnectorEmergencyCallingConfiguration {
  export type Input = GetVoiceConnectorEmergencyCallingConfigurationRequest;
  export type Output = GetVoiceConnectorEmergencyCallingConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnectorExternalSystemsConfiguration {
  export type Input = GetVoiceConnectorExternalSystemsConfigurationRequest;
  export type Output = GetVoiceConnectorExternalSystemsConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnectorGroup {
  export type Input = GetVoiceConnectorGroupRequest;
  export type Output = GetVoiceConnectorGroupResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnectorLoggingConfiguration {
  export type Input = GetVoiceConnectorLoggingConfigurationRequest;
  export type Output = GetVoiceConnectorLoggingConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnectorOrigination {
  export type Input = GetVoiceConnectorOriginationRequest;
  export type Output = GetVoiceConnectorOriginationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnectorProxy {
  export type Input = GetVoiceConnectorProxyRequest;
  export type Output = GetVoiceConnectorProxyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnectorStreamingConfiguration {
  export type Input = GetVoiceConnectorStreamingConfigurationRequest;
  export type Output = GetVoiceConnectorStreamingConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnectorTermination {
  export type Input = GetVoiceConnectorTerminationRequest;
  export type Output = GetVoiceConnectorTerminationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceConnectorTerminationHealth {
  export type Input = GetVoiceConnectorTerminationHealthRequest;
  export type Output = GetVoiceConnectorTerminationHealthResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceProfile {
  export type Input = GetVoiceProfileRequest;
  export type Output = GetVoiceProfileResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceProfileDomain {
  export type Input = GetVoiceProfileDomainRequest;
  export type Output = GetVoiceProfileDomainResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetVoiceToneAnalysisTask {
  export type Input = GetVoiceToneAnalysisTaskRequest;
  export type Output = GetVoiceToneAnalysisTaskResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListAvailableVoiceConnectorRegions {
  export type Input = {};
  export type Output = ListAvailableVoiceConnectorRegionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListPhoneNumberOrders {
  export type Input = ListPhoneNumberOrdersRequest;
  export type Output = ListPhoneNumberOrdersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListPhoneNumbers {
  export type Input = ListPhoneNumbersRequest;
  export type Output = ListPhoneNumbersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListProxySessions {
  export type Input = ListProxySessionsRequest;
  export type Output = ListProxySessionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListSipMediaApplications {
  export type Input = ListSipMediaApplicationsRequest;
  export type Output = ListSipMediaApplicationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListSipRules {
  export type Input = ListSipRulesRequest;
  export type Output = ListSipRulesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListSupportedPhoneNumberCountries {
  export type Input = ListSupportedPhoneNumberCountriesRequest;
  export type Output = ListSupportedPhoneNumberCountriesResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListVoiceConnectorGroups {
  export type Input = ListVoiceConnectorGroupsRequest;
  export type Output = ListVoiceConnectorGroupsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListVoiceConnectors {
  export type Input = ListVoiceConnectorsRequest;
  export type Output = ListVoiceConnectorsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListVoiceConnectorTerminationCredentials {
  export type Input = ListVoiceConnectorTerminationCredentialsRequest;
  export type Output = ListVoiceConnectorTerminationCredentialsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListVoiceProfileDomains {
  export type Input = ListVoiceProfileDomainsRequest;
  export type Output = ListVoiceProfileDomainsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListVoiceProfiles {
  export type Input = ListVoiceProfilesRequest;
  export type Output = ListVoiceProfilesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutSipMediaApplicationAlexaSkillConfiguration {
  export type Input = PutSipMediaApplicationAlexaSkillConfigurationRequest;
  export type Output = PutSipMediaApplicationAlexaSkillConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutSipMediaApplicationLoggingConfiguration {
  export type Input = PutSipMediaApplicationLoggingConfigurationRequest;
  export type Output = PutSipMediaApplicationLoggingConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutVoiceConnectorEmergencyCallingConfiguration {
  export type Input = PutVoiceConnectorEmergencyCallingConfigurationRequest;
  export type Output = PutVoiceConnectorEmergencyCallingConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutVoiceConnectorExternalSystemsConfiguration {
  export type Input = PutVoiceConnectorExternalSystemsConfigurationRequest;
  export type Output = PutVoiceConnectorExternalSystemsConfigurationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutVoiceConnectorLoggingConfiguration {
  export type Input = PutVoiceConnectorLoggingConfigurationRequest;
  export type Output = PutVoiceConnectorLoggingConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutVoiceConnectorOrigination {
  export type Input = PutVoiceConnectorOriginationRequest;
  export type Output = PutVoiceConnectorOriginationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutVoiceConnectorProxy {
  export type Input = PutVoiceConnectorProxyRequest;
  export type Output = PutVoiceConnectorProxyResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutVoiceConnectorStreamingConfiguration {
  export type Input = PutVoiceConnectorStreamingConfigurationRequest;
  export type Output = PutVoiceConnectorStreamingConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutVoiceConnectorTermination {
  export type Input = PutVoiceConnectorTerminationRequest;
  export type Output = PutVoiceConnectorTerminationResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutVoiceConnectorTerminationCredentials {
  export type Input = PutVoiceConnectorTerminationCredentialsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace RestorePhoneNumber {
  export type Input = RestorePhoneNumberRequest;
  export type Output = RestorePhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace SearchAvailablePhoneNumbers {
  export type Input = SearchAvailablePhoneNumbersRequest;
  export type Output = SearchAvailablePhoneNumbersResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace StartSpeakerSearchTask {
  export type Input = StartSpeakerSearchTaskRequest;
  export type Output = StartSpeakerSearchTaskResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GoneException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace StartVoiceToneAnalysisTask {
  export type Input = StartVoiceToneAnalysisTaskRequest;
  export type Output = StartVoiceToneAnalysisTaskResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GoneException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace StopSpeakerSearchTask {
  export type Input = StopSpeakerSearchTaskRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace StopVoiceToneAnalysisTask {
  export type Input = StopVoiceToneAnalysisTaskRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateGlobalSettings {
  export type Input = UpdateGlobalSettingsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdatePhoneNumber {
  export type Input = UpdatePhoneNumberRequest;
  export type Output = UpdatePhoneNumberResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdatePhoneNumberSettings {
  export type Input = UpdatePhoneNumberSettingsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateProxySession {
  export type Input = UpdateProxySessionRequest;
  export type Output = UpdateProxySessionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateSipMediaApplication {
  export type Input = UpdateSipMediaApplicationRequest;
  export type Output = UpdateSipMediaApplicationResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateSipMediaApplicationCall {
  export type Input = UpdateSipMediaApplicationCallRequest;
  export type Output = UpdateSipMediaApplicationCallResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateSipRule {
  export type Input = UpdateSipRuleRequest;
  export type Output = UpdateSipRuleResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateVoiceConnector {
  export type Input = UpdateVoiceConnectorRequest;
  export type Output = UpdateVoiceConnectorResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateVoiceConnectorGroup {
  export type Input = UpdateVoiceConnectorGroupRequest;
  export type Output = UpdateVoiceConnectorGroupResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateVoiceProfile {
  export type Input = UpdateVoiceProfileRequest;
  export type Output = UpdateVoiceProfileResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GoneException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateVoiceProfileDomain {
  export type Input = UpdateVoiceProfileDomainRequest;
  export type Output = UpdateVoiceProfileDomainResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ValidateE911Address {
  export type Input = ValidateE911AddressRequest;
  export type Output = ValidateE911AddressResponse;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export type ChimeSDKVoiceErrors =
  | AccessDeniedException
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | GoneException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | UnprocessableEntityException
  | CommonAwsError;
