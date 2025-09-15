import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ChimeSDKVoice as _ChimeSDKVoiceClient } from "./types.ts";

export * from "./types.ts";

export {
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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Chime SDK Voice",
  version: "2022-08-03",
  protocol: "restJson1",
  sigV4ServiceName: "chime",
  endpointPrefix: "voice-chime",
  operations: {
    AssociatePhoneNumbersWithVoiceConnector:
      "POST /voice-connectors/{VoiceConnectorId}?operation=associate-phone-numbers",
    AssociatePhoneNumbersWithVoiceConnectorGroup:
      "POST /voice-connector-groups/{VoiceConnectorGroupId}?operation=associate-phone-numbers",
    BatchDeletePhoneNumber: "POST /phone-numbers?operation=batch-delete",
    BatchUpdatePhoneNumber: "POST /phone-numbers?operation=batch-update",
    CreatePhoneNumberOrder: "POST /phone-number-orders",
    CreateProxySession:
      "POST /voice-connectors/{VoiceConnectorId}/proxy-sessions",
    CreateSipMediaApplication: "POST /sip-media-applications",
    CreateSipMediaApplicationCall:
      "POST /sip-media-applications/{SipMediaApplicationId}/calls",
    CreateSipRule: "POST /sip-rules",
    CreateVoiceConnector: "POST /voice-connectors",
    CreateVoiceConnectorGroup: "POST /voice-connector-groups",
    CreateVoiceProfile: "POST /voice-profiles",
    CreateVoiceProfileDomain: "POST /voice-profile-domains",
    DeletePhoneNumber: "DELETE /phone-numbers/{PhoneNumberId}",
    DeleteProxySession:
      "DELETE /voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}",
    DeleteSipMediaApplication:
      "DELETE /sip-media-applications/{SipMediaApplicationId}",
    DeleteSipRule: "DELETE /sip-rules/{SipRuleId}",
    DeleteVoiceConnector: "DELETE /voice-connectors/{VoiceConnectorId}",
    DeleteVoiceConnectorEmergencyCallingConfiguration:
      "DELETE /voice-connectors/{VoiceConnectorId}/emergency-calling-configuration",
    DeleteVoiceConnectorExternalSystemsConfiguration:
      "DELETE /voice-connectors/{VoiceConnectorId}/external-systems-configuration",
    DeleteVoiceConnectorGroup:
      "DELETE /voice-connector-groups/{VoiceConnectorGroupId}",
    DeleteVoiceConnectorOrigination:
      "DELETE /voice-connectors/{VoiceConnectorId}/origination",
    DeleteVoiceConnectorProxy:
      "DELETE /voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy",
    DeleteVoiceConnectorStreamingConfiguration:
      "DELETE /voice-connectors/{VoiceConnectorId}/streaming-configuration",
    DeleteVoiceConnectorTermination:
      "DELETE /voice-connectors/{VoiceConnectorId}/termination",
    DeleteVoiceConnectorTerminationCredentials:
      "POST /voice-connectors/{VoiceConnectorId}/termination/credentials?operation=delete",
    DeleteVoiceProfile: "DELETE /voice-profiles/{VoiceProfileId}",
    DeleteVoiceProfileDomain:
      "DELETE /voice-profile-domains/{VoiceProfileDomainId}",
    DisassociatePhoneNumbersFromVoiceConnector:
      "POST /voice-connectors/{VoiceConnectorId}?operation=disassociate-phone-numbers",
    DisassociatePhoneNumbersFromVoiceConnectorGroup:
      "POST /voice-connector-groups/{VoiceConnectorGroupId}?operation=disassociate-phone-numbers",
    GetGlobalSettings: "GET /settings",
    GetPhoneNumber: "GET /phone-numbers/{PhoneNumberId}",
    GetPhoneNumberOrder: "GET /phone-number-orders/{PhoneNumberOrderId}",
    GetPhoneNumberSettings: "GET /settings/phone-number",
    GetProxySession:
      "GET /voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}",
    GetSipMediaApplication:
      "GET /sip-media-applications/{SipMediaApplicationId}",
    GetSipMediaApplicationAlexaSkillConfiguration:
      "GET /sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration",
    GetSipMediaApplicationLoggingConfiguration:
      "GET /sip-media-applications/{SipMediaApplicationId}/logging-configuration",
    GetSipRule: "GET /sip-rules/{SipRuleId}",
    GetSpeakerSearchTask:
      "GET /voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}",
    GetVoiceConnector: "GET /voice-connectors/{VoiceConnectorId}",
    GetVoiceConnectorEmergencyCallingConfiguration:
      "GET /voice-connectors/{VoiceConnectorId}/emergency-calling-configuration",
    GetVoiceConnectorExternalSystemsConfiguration:
      "GET /voice-connectors/{VoiceConnectorId}/external-systems-configuration",
    GetVoiceConnectorGroup:
      "GET /voice-connector-groups/{VoiceConnectorGroupId}",
    GetVoiceConnectorLoggingConfiguration:
      "GET /voice-connectors/{VoiceConnectorId}/logging-configuration",
    GetVoiceConnectorOrigination:
      "GET /voice-connectors/{VoiceConnectorId}/origination",
    GetVoiceConnectorProxy:
      "GET /voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy",
    GetVoiceConnectorStreamingConfiguration:
      "GET /voice-connectors/{VoiceConnectorId}/streaming-configuration",
    GetVoiceConnectorTermination:
      "GET /voice-connectors/{VoiceConnectorId}/termination",
    GetVoiceConnectorTerminationHealth:
      "GET /voice-connectors/{VoiceConnectorId}/termination/health",
    GetVoiceProfile: "GET /voice-profiles/{VoiceProfileId}",
    GetVoiceProfileDomain: "GET /voice-profile-domains/{VoiceProfileDomainId}",
    GetVoiceToneAnalysisTask:
      "GET /voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}",
    ListAvailableVoiceConnectorRegions: "GET /voice-connector-regions",
    ListPhoneNumberOrders: "GET /phone-number-orders",
    ListPhoneNumbers: "GET /phone-numbers",
    ListProxySessions:
      "GET /voice-connectors/{VoiceConnectorId}/proxy-sessions",
    ListSipMediaApplications: "GET /sip-media-applications",
    ListSipRules: "GET /sip-rules",
    ListSupportedPhoneNumberCountries: "GET /phone-number-countries",
    ListTagsForResource: "GET /tags",
    ListVoiceConnectorGroups: "GET /voice-connector-groups",
    ListVoiceConnectors: "GET /voice-connectors",
    ListVoiceConnectorTerminationCredentials:
      "GET /voice-connectors/{VoiceConnectorId}/termination/credentials",
    ListVoiceProfileDomains: "GET /voice-profile-domains",
    ListVoiceProfiles: "GET /voice-profiles",
    PutSipMediaApplicationAlexaSkillConfiguration:
      "PUT /sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration",
    PutSipMediaApplicationLoggingConfiguration:
      "PUT /sip-media-applications/{SipMediaApplicationId}/logging-configuration",
    PutVoiceConnectorEmergencyCallingConfiguration:
      "PUT /voice-connectors/{VoiceConnectorId}/emergency-calling-configuration",
    PutVoiceConnectorExternalSystemsConfiguration:
      "PUT /voice-connectors/{VoiceConnectorId}/external-systems-configuration",
    PutVoiceConnectorLoggingConfiguration:
      "PUT /voice-connectors/{VoiceConnectorId}/logging-configuration",
    PutVoiceConnectorOrigination:
      "PUT /voice-connectors/{VoiceConnectorId}/origination",
    PutVoiceConnectorProxy:
      "PUT /voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy",
    PutVoiceConnectorStreamingConfiguration:
      "PUT /voice-connectors/{VoiceConnectorId}/streaming-configuration",
    PutVoiceConnectorTermination:
      "PUT /voice-connectors/{VoiceConnectorId}/termination",
    PutVoiceConnectorTerminationCredentials:
      "POST /voice-connectors/{VoiceConnectorId}/termination/credentials?operation=put",
    RestorePhoneNumber: "POST /phone-numbers/{PhoneNumberId}?operation=restore",
    SearchAvailablePhoneNumbers: "GET /search?type=phone-numbers",
    StartSpeakerSearchTask:
      "POST /voice-connectors/{VoiceConnectorId}/speaker-search-tasks",
    StartVoiceToneAnalysisTask:
      "POST /voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks",
    StopSpeakerSearchTask:
      "POST /voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop",
    StopVoiceToneAnalysisTask:
      "POST /voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop",
    TagResource: "POST /tags?operation=tag-resource",
    UntagResource: "POST /tags?operation=untag-resource",
    UpdateGlobalSettings: "PUT /settings",
    UpdatePhoneNumber: "POST /phone-numbers/{PhoneNumberId}",
    UpdatePhoneNumberSettings: "PUT /settings/phone-number",
    UpdateProxySession:
      "POST /voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}",
    UpdateSipMediaApplication:
      "PUT /sip-media-applications/{SipMediaApplicationId}",
    UpdateSipMediaApplicationCall:
      "POST /sip-media-applications/{SipMediaApplicationId}/calls/{TransactionId}",
    UpdateSipRule: "PUT /sip-rules/{SipRuleId}",
    UpdateVoiceConnector: "PUT /voice-connectors/{VoiceConnectorId}",
    UpdateVoiceConnectorGroup:
      "PUT /voice-connector-groups/{VoiceConnectorGroupId}",
    UpdateVoiceProfile: "PUT /voice-profiles/{VoiceProfileId}",
    UpdateVoiceProfileDomain:
      "PUT /voice-profile-domains/{VoiceProfileDomainId}",
    ValidateE911Address: "POST /emergency-calling/address",
  },
} as const satisfies ServiceMetadata;

export type _ChimeSDKVoice = _ChimeSDKVoiceClient;
export interface ChimeSDKVoice extends _ChimeSDKVoice {}
export const ChimeSDKVoice = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _ChimeSDKVoiceClient;
