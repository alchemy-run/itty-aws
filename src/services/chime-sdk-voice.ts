import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const E164PhoneNumberList = S.Array(S.String);
export const NonEmptyStringList = S.Array(S.String);
export const ParticipantPhoneNumberList = S.Array(S.String);
export const CapabilityList = S.Array(S.String);
export const SensitiveStringList = S.Array(S.String);
export const VoiceConnectorAwsRegionList = S.Array(S.String);
export const SessionBorderControllerTypeList = S.Array(S.String);
export const ContactCenterSystemTypeList = S.Array(S.String);
export const CountryList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AssociatePhoneNumbersWithVoiceConnectorRequest extends S.Class<AssociatePhoneNumbersWithVoiceConnectorRequest>("AssociatePhoneNumbersWithVoiceConnectorRequest")({VoiceConnectorId: S.String, E164PhoneNumbers: E164PhoneNumberList, ForceAssociate: S.optional(S.Boolean)}) {}
export class AssociatePhoneNumbersWithVoiceConnectorGroupRequest extends S.Class<AssociatePhoneNumbersWithVoiceConnectorGroupRequest>("AssociatePhoneNumbersWithVoiceConnectorGroupRequest")({VoiceConnectorGroupId: S.String, E164PhoneNumbers: E164PhoneNumberList, ForceAssociate: S.optional(S.Boolean)}) {}
export class BatchDeletePhoneNumberRequest extends S.Class<BatchDeletePhoneNumberRequest>("BatchDeletePhoneNumberRequest")({PhoneNumberIds: NonEmptyStringList}) {}
export class CreatePhoneNumberOrderRequest extends S.Class<CreatePhoneNumberOrderRequest>("CreatePhoneNumberOrderRequest")({ProductType: S.String, E164PhoneNumbers: E164PhoneNumberList, Name: S.optional(S.String)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class CreateVoiceConnectorRequest extends S.Class<CreateVoiceConnectorRequest>("CreateVoiceConnectorRequest")({Name: S.String, AwsRegion: S.optional(S.String), RequireEncryption: S.Boolean, Tags: S.optional(TagList), IntegrationType: S.optional(S.String), NetworkType: S.optional(S.String)}) {}
export class CreateVoiceProfileRequest extends S.Class<CreateVoiceProfileRequest>("CreateVoiceProfileRequest")({SpeakerSearchTaskId: S.String}) {}
export class DeletePhoneNumberRequest extends S.Class<DeletePhoneNumberRequest>("DeletePhoneNumberRequest")({PhoneNumberId: S.String}) {}
export class DeleteProxySessionRequest extends S.Class<DeleteProxySessionRequest>("DeleteProxySessionRequest")({VoiceConnectorId: S.String, ProxySessionId: S.String}) {}
export class DeleteSipMediaApplicationRequest extends S.Class<DeleteSipMediaApplicationRequest>("DeleteSipMediaApplicationRequest")({SipMediaApplicationId: S.String}) {}
export class DeleteSipRuleRequest extends S.Class<DeleteSipRuleRequest>("DeleteSipRuleRequest")({SipRuleId: S.String}) {}
export class DeleteVoiceConnectorRequest extends S.Class<DeleteVoiceConnectorRequest>("DeleteVoiceConnectorRequest")({VoiceConnectorId: S.String}) {}
export class DeleteVoiceConnectorEmergencyCallingConfigurationRequest extends S.Class<DeleteVoiceConnectorEmergencyCallingConfigurationRequest>("DeleteVoiceConnectorEmergencyCallingConfigurationRequest")({VoiceConnectorId: S.String}) {}
export class DeleteVoiceConnectorExternalSystemsConfigurationRequest extends S.Class<DeleteVoiceConnectorExternalSystemsConfigurationRequest>("DeleteVoiceConnectorExternalSystemsConfigurationRequest")({VoiceConnectorId: S.String}) {}
export class DeleteVoiceConnectorGroupRequest extends S.Class<DeleteVoiceConnectorGroupRequest>("DeleteVoiceConnectorGroupRequest")({VoiceConnectorGroupId: S.String}) {}
export class DeleteVoiceConnectorOriginationRequest extends S.Class<DeleteVoiceConnectorOriginationRequest>("DeleteVoiceConnectorOriginationRequest")({VoiceConnectorId: S.String}) {}
export class DeleteVoiceConnectorProxyRequest extends S.Class<DeleteVoiceConnectorProxyRequest>("DeleteVoiceConnectorProxyRequest")({VoiceConnectorId: S.String}) {}
export class DeleteVoiceConnectorStreamingConfigurationRequest extends S.Class<DeleteVoiceConnectorStreamingConfigurationRequest>("DeleteVoiceConnectorStreamingConfigurationRequest")({VoiceConnectorId: S.String}) {}
export class DeleteVoiceConnectorTerminationRequest extends S.Class<DeleteVoiceConnectorTerminationRequest>("DeleteVoiceConnectorTerminationRequest")({VoiceConnectorId: S.String}) {}
export class DeleteVoiceConnectorTerminationCredentialsRequest extends S.Class<DeleteVoiceConnectorTerminationCredentialsRequest>("DeleteVoiceConnectorTerminationCredentialsRequest")({VoiceConnectorId: S.String, Usernames: SensitiveStringList}) {}
export class DeleteVoiceProfileRequest extends S.Class<DeleteVoiceProfileRequest>("DeleteVoiceProfileRequest")({VoiceProfileId: S.String}) {}
export class DeleteVoiceProfileDomainRequest extends S.Class<DeleteVoiceProfileDomainRequest>("DeleteVoiceProfileDomainRequest")({VoiceProfileDomainId: S.String}) {}
export class DisassociatePhoneNumbersFromVoiceConnectorRequest extends S.Class<DisassociatePhoneNumbersFromVoiceConnectorRequest>("DisassociatePhoneNumbersFromVoiceConnectorRequest")({VoiceConnectorId: S.String, E164PhoneNumbers: E164PhoneNumberList}) {}
export class DisassociatePhoneNumbersFromVoiceConnectorGroupRequest extends S.Class<DisassociatePhoneNumbersFromVoiceConnectorGroupRequest>("DisassociatePhoneNumbersFromVoiceConnectorGroupRequest")({VoiceConnectorGroupId: S.String, E164PhoneNumbers: E164PhoneNumberList}) {}
export class GetPhoneNumberRequest extends S.Class<GetPhoneNumberRequest>("GetPhoneNumberRequest")({PhoneNumberId: S.String}) {}
export class GetPhoneNumberOrderRequest extends S.Class<GetPhoneNumberOrderRequest>("GetPhoneNumberOrderRequest")({PhoneNumberOrderId: S.String}) {}
export class GetPhoneNumberSettingsResponse extends S.Class<GetPhoneNumberSettingsResponse>("GetPhoneNumberSettingsResponse")({CallingName: S.optional(S.String), CallingNameUpdatedTimestamp: S.optional(S.Date)}) {}
export class GetProxySessionRequest extends S.Class<GetProxySessionRequest>("GetProxySessionRequest")({VoiceConnectorId: S.String, ProxySessionId: S.String}) {}
export class GetSipMediaApplicationRequest extends S.Class<GetSipMediaApplicationRequest>("GetSipMediaApplicationRequest")({SipMediaApplicationId: S.String}) {}
export class GetSipMediaApplicationAlexaSkillConfigurationRequest extends S.Class<GetSipMediaApplicationAlexaSkillConfigurationRequest>("GetSipMediaApplicationAlexaSkillConfigurationRequest")({SipMediaApplicationId: S.String}) {}
export class GetSipMediaApplicationLoggingConfigurationRequest extends S.Class<GetSipMediaApplicationLoggingConfigurationRequest>("GetSipMediaApplicationLoggingConfigurationRequest")({SipMediaApplicationId: S.String}) {}
export class GetSipRuleRequest extends S.Class<GetSipRuleRequest>("GetSipRuleRequest")({SipRuleId: S.String}) {}
export class GetSpeakerSearchTaskRequest extends S.Class<GetSpeakerSearchTaskRequest>("GetSpeakerSearchTaskRequest")({VoiceConnectorId: S.String, SpeakerSearchTaskId: S.String}) {}
export class GetVoiceConnectorRequest extends S.Class<GetVoiceConnectorRequest>("GetVoiceConnectorRequest")({VoiceConnectorId: S.String}) {}
export class GetVoiceConnectorEmergencyCallingConfigurationRequest extends S.Class<GetVoiceConnectorEmergencyCallingConfigurationRequest>("GetVoiceConnectorEmergencyCallingConfigurationRequest")({VoiceConnectorId: S.String}) {}
export class GetVoiceConnectorExternalSystemsConfigurationRequest extends S.Class<GetVoiceConnectorExternalSystemsConfigurationRequest>("GetVoiceConnectorExternalSystemsConfigurationRequest")({VoiceConnectorId: S.String}) {}
export class GetVoiceConnectorGroupRequest extends S.Class<GetVoiceConnectorGroupRequest>("GetVoiceConnectorGroupRequest")({VoiceConnectorGroupId: S.String}) {}
export class GetVoiceConnectorLoggingConfigurationRequest extends S.Class<GetVoiceConnectorLoggingConfigurationRequest>("GetVoiceConnectorLoggingConfigurationRequest")({VoiceConnectorId: S.String}) {}
export class GetVoiceConnectorOriginationRequest extends S.Class<GetVoiceConnectorOriginationRequest>("GetVoiceConnectorOriginationRequest")({VoiceConnectorId: S.String}) {}
export class GetVoiceConnectorProxyRequest extends S.Class<GetVoiceConnectorProxyRequest>("GetVoiceConnectorProxyRequest")({VoiceConnectorId: S.String}) {}
export class GetVoiceConnectorStreamingConfigurationRequest extends S.Class<GetVoiceConnectorStreamingConfigurationRequest>("GetVoiceConnectorStreamingConfigurationRequest")({VoiceConnectorId: S.String}) {}
export class GetVoiceConnectorTerminationRequest extends S.Class<GetVoiceConnectorTerminationRequest>("GetVoiceConnectorTerminationRequest")({VoiceConnectorId: S.String}) {}
export class GetVoiceConnectorTerminationHealthRequest extends S.Class<GetVoiceConnectorTerminationHealthRequest>("GetVoiceConnectorTerminationHealthRequest")({VoiceConnectorId: S.String}) {}
export class GetVoiceProfileRequest extends S.Class<GetVoiceProfileRequest>("GetVoiceProfileRequest")({VoiceProfileId: S.String}) {}
export class GetVoiceProfileDomainRequest extends S.Class<GetVoiceProfileDomainRequest>("GetVoiceProfileDomainRequest")({VoiceProfileDomainId: S.String}) {}
export class GetVoiceToneAnalysisTaskRequest extends S.Class<GetVoiceToneAnalysisTaskRequest>("GetVoiceToneAnalysisTaskRequest")({VoiceConnectorId: S.String, VoiceToneAnalysisTaskId: S.String, IsCaller: S.Boolean}) {}
export class ListAvailableVoiceConnectorRegionsResponse extends S.Class<ListAvailableVoiceConnectorRegionsResponse>("ListAvailableVoiceConnectorRegionsResponse")({VoiceConnectorRegions: S.optional(VoiceConnectorAwsRegionList)}) {}
export class ListPhoneNumberOrdersRequest extends S.Class<ListPhoneNumberOrdersRequest>("ListPhoneNumberOrdersRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListPhoneNumbersRequest extends S.Class<ListPhoneNumbersRequest>("ListPhoneNumbersRequest")({Status: S.optional(S.String), ProductType: S.optional(S.String), FilterName: S.optional(S.String), FilterValue: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListProxySessionsRequest extends S.Class<ListProxySessionsRequest>("ListProxySessionsRequest")({VoiceConnectorId: S.String, Status: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListSipMediaApplicationsRequest extends S.Class<ListSipMediaApplicationsRequest>("ListSipMediaApplicationsRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListSipRulesRequest extends S.Class<ListSipRulesRequest>("ListSipRulesRequest")({SipMediaApplicationId: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListSupportedPhoneNumberCountriesRequest extends S.Class<ListSupportedPhoneNumberCountriesRequest>("ListSupportedPhoneNumberCountriesRequest")({ProductType: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class ListVoiceConnectorGroupsRequest extends S.Class<ListVoiceConnectorGroupsRequest>("ListVoiceConnectorGroupsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListVoiceConnectorsRequest extends S.Class<ListVoiceConnectorsRequest>("ListVoiceConnectorsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListVoiceConnectorTerminationCredentialsRequest extends S.Class<ListVoiceConnectorTerminationCredentialsRequest>("ListVoiceConnectorTerminationCredentialsRequest")({VoiceConnectorId: S.String}) {}
export class ListVoiceProfileDomainsRequest extends S.Class<ListVoiceProfileDomainsRequest>("ListVoiceProfileDomainsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListVoiceProfilesRequest extends S.Class<ListVoiceProfilesRequest>("ListVoiceProfilesRequest")({VoiceProfileDomainId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class PutVoiceConnectorExternalSystemsConfigurationRequest extends S.Class<PutVoiceConnectorExternalSystemsConfigurationRequest>("PutVoiceConnectorExternalSystemsConfigurationRequest")({VoiceConnectorId: S.String, SessionBorderControllerTypes: S.optional(SessionBorderControllerTypeList), ContactCenterSystemTypes: S.optional(ContactCenterSystemTypeList)}) {}
export class PutVoiceConnectorProxyRequest extends S.Class<PutVoiceConnectorProxyRequest>("PutVoiceConnectorProxyRequest")({VoiceConnectorId: S.String, DefaultSessionExpiryMinutes: S.Number, PhoneNumberPoolCountries: CountryList, FallBackPhoneNumber: S.optional(S.String), Disabled: S.optional(S.Boolean)}) {}
export class RestorePhoneNumberRequest extends S.Class<RestorePhoneNumberRequest>("RestorePhoneNumberRequest")({PhoneNumberId: S.String}) {}
export class SearchAvailablePhoneNumbersRequest extends S.Class<SearchAvailablePhoneNumbersRequest>("SearchAvailablePhoneNumbersRequest")({AreaCode: S.optional(S.String), City: S.optional(S.String), Country: S.optional(S.String), State: S.optional(S.String), TollFreePrefix: S.optional(S.String), PhoneNumberType: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class StartSpeakerSearchTaskRequest extends S.Class<StartSpeakerSearchTaskRequest>("StartSpeakerSearchTaskRequest")({VoiceConnectorId: S.String, TransactionId: S.String, VoiceProfileDomainId: S.String, ClientRequestToken: S.optional(S.String), CallLeg: S.optional(S.String)}) {}
export class StartVoiceToneAnalysisTaskRequest extends S.Class<StartVoiceToneAnalysisTaskRequest>("StartVoiceToneAnalysisTaskRequest")({VoiceConnectorId: S.String, TransactionId: S.String, LanguageCode: S.String, ClientRequestToken: S.optional(S.String)}) {}
export class StopSpeakerSearchTaskRequest extends S.Class<StopSpeakerSearchTaskRequest>("StopSpeakerSearchTaskRequest")({VoiceConnectorId: S.String, SpeakerSearchTaskId: S.String}) {}
export class StopVoiceToneAnalysisTaskRequest extends S.Class<StopVoiceToneAnalysisTaskRequest>("StopVoiceToneAnalysisTaskRequest")({VoiceConnectorId: S.String, VoiceToneAnalysisTaskId: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class VoiceConnectorSettings extends S.Class<VoiceConnectorSettings>("VoiceConnectorSettings")({CdrBucket: S.optional(S.String)}) {}
export class UpdateGlobalSettingsRequest extends S.Class<UpdateGlobalSettingsRequest>("UpdateGlobalSettingsRequest")({VoiceConnector: S.optional(VoiceConnectorSettings)}) {}
export class UpdatePhoneNumberRequest extends S.Class<UpdatePhoneNumberRequest>("UpdatePhoneNumberRequest")({PhoneNumberId: S.String, ProductType: S.optional(S.String), CallingName: S.optional(S.String), Name: S.optional(S.String)}) {}
export class UpdatePhoneNumberSettingsRequest extends S.Class<UpdatePhoneNumberSettingsRequest>("UpdatePhoneNumberSettingsRequest")({CallingName: S.String}) {}
export class UpdateProxySessionRequest extends S.Class<UpdateProxySessionRequest>("UpdateProxySessionRequest")({VoiceConnectorId: S.String, ProxySessionId: S.String, Capabilities: CapabilityList, ExpiryMinutes: S.optional(S.Number)}) {}
export class SipMediaApplicationEndpoint extends S.Class<SipMediaApplicationEndpoint>("SipMediaApplicationEndpoint")({LambdaArn: S.optional(S.String)}) {}
export const SipMediaApplicationEndpointList = S.Array(SipMediaApplicationEndpoint);
export class UpdateSipMediaApplicationRequest extends S.Class<UpdateSipMediaApplicationRequest>("UpdateSipMediaApplicationRequest")({SipMediaApplicationId: S.String, Name: S.optional(S.String), Endpoints: S.optional(SipMediaApplicationEndpointList)}) {}
export class SipRuleTargetApplication extends S.Class<SipRuleTargetApplication>("SipRuleTargetApplication")({SipMediaApplicationId: S.optional(S.String), Priority: S.optional(S.Number), AwsRegion: S.optional(S.String)}) {}
export const SipRuleTargetApplicationList = S.Array(SipRuleTargetApplication);
export class UpdateSipRuleRequest extends S.Class<UpdateSipRuleRequest>("UpdateSipRuleRequest")({SipRuleId: S.String, Name: S.String, Disabled: S.optional(S.Boolean), TargetApplications: S.optional(SipRuleTargetApplicationList)}) {}
export class UpdateVoiceConnectorRequest extends S.Class<UpdateVoiceConnectorRequest>("UpdateVoiceConnectorRequest")({VoiceConnectorId: S.String, Name: S.String, RequireEncryption: S.Boolean}) {}
export class VoiceConnectorItem extends S.Class<VoiceConnectorItem>("VoiceConnectorItem")({VoiceConnectorId: S.String, Priority: S.Number}) {}
export const VoiceConnectorItemList = S.Array(VoiceConnectorItem);
export class UpdateVoiceConnectorGroupRequest extends S.Class<UpdateVoiceConnectorGroupRequest>("UpdateVoiceConnectorGroupRequest")({VoiceConnectorGroupId: S.String, Name: S.String, VoiceConnectorItems: VoiceConnectorItemList}) {}
export class UpdateVoiceProfileRequest extends S.Class<UpdateVoiceProfileRequest>("UpdateVoiceProfileRequest")({VoiceProfileId: S.String, SpeakerSearchTaskId: S.String}) {}
export class UpdateVoiceProfileDomainRequest extends S.Class<UpdateVoiceProfileDomainRequest>("UpdateVoiceProfileDomainRequest")({VoiceProfileDomainId: S.String, Name: S.optional(S.String), Description: S.optional(S.String)}) {}
export class ValidateE911AddressRequest extends S.Class<ValidateE911AddressRequest>("ValidateE911AddressRequest")({AwsAccountId: S.String, StreetNumber: S.String, StreetInfo: S.String, City: S.String, State: S.String, Country: S.String, PostalCode: S.String}) {}
export const AlexaSkillIdList = S.Array(S.String);
export const CallingRegionList = S.Array(S.String);
export const StringList = S.Array(S.String);
export class UpdatePhoneNumberRequestItem extends S.Class<UpdatePhoneNumberRequestItem>("UpdatePhoneNumberRequestItem")({PhoneNumberId: S.String, ProductType: S.optional(S.String), CallingName: S.optional(S.String), Name: S.optional(S.String)}) {}
export const UpdatePhoneNumberRequestItemList = S.Array(UpdatePhoneNumberRequestItem);
export class GeoMatchParams extends S.Class<GeoMatchParams>("GeoMatchParams")({Country: S.String, AreaCode: S.String}) {}
export const SipHeadersMap = S.Record({key: S.String, value: S.String});
export const SMACreateCallArgumentsMap = S.Record({key: S.String, value: S.String});
export class ServerSideEncryptionConfiguration extends S.Class<ServerSideEncryptionConfiguration>("ServerSideEncryptionConfiguration")({KmsKeyArn: S.String}) {}
export class OrderedPhoneNumber extends S.Class<OrderedPhoneNumber>("OrderedPhoneNumber")({E164PhoneNumber: S.optional(S.String), Status: S.optional(S.String)}) {}
export const OrderedPhoneNumberList = S.Array(OrderedPhoneNumber);
export class PhoneNumberOrder extends S.Class<PhoneNumberOrder>("PhoneNumberOrder")({PhoneNumberOrderId: S.optional(S.String), ProductType: S.optional(S.String), Status: S.optional(S.String), OrderType: S.optional(S.String), OrderedPhoneNumbers: S.optional(OrderedPhoneNumberList), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), FocDate: S.optional(S.Date)}) {}
export const PhoneNumberOrderList = S.Array(PhoneNumberOrder);
export class PhoneNumberCapabilities extends S.Class<PhoneNumberCapabilities>("PhoneNumberCapabilities")({InboundCall: S.optional(S.Boolean), OutboundCall: S.optional(S.Boolean), InboundSMS: S.optional(S.Boolean), OutboundSMS: S.optional(S.Boolean), InboundMMS: S.optional(S.Boolean), OutboundMMS: S.optional(S.Boolean)}) {}
export class PhoneNumberAssociation extends S.Class<PhoneNumberAssociation>("PhoneNumberAssociation")({Value: S.optional(S.String), Name: S.optional(S.String), AssociatedTimestamp: S.optional(S.Date)}) {}
export const PhoneNumberAssociationList = S.Array(PhoneNumberAssociation);
export class PhoneNumber extends S.Class<PhoneNumber>("PhoneNumber")({PhoneNumberId: S.optional(S.String), E164PhoneNumber: S.optional(S.String), Country: S.optional(S.String), Type: S.optional(S.String), ProductType: S.optional(S.String), Status: S.optional(S.String), Capabilities: S.optional(PhoneNumberCapabilities), Associations: S.optional(PhoneNumberAssociationList), CallingName: S.optional(S.String), CallingNameStatus: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), DeletionTimestamp: S.optional(S.Date), OrderId: S.optional(S.String), Name: S.optional(S.String)}) {}
export const PhoneNumberList = S.Array(PhoneNumber);
export class Participant extends S.Class<Participant>("Participant")({PhoneNumber: S.optional(S.String), ProxyPhoneNumber: S.optional(S.String)}) {}
export const Participants = S.Array(Participant);
export class ProxySession extends S.Class<ProxySession>("ProxySession")({VoiceConnectorId: S.optional(S.String), ProxySessionId: S.optional(S.String), Name: S.optional(S.String), Status: S.optional(S.String), ExpiryMinutes: S.optional(S.Number), Capabilities: S.optional(CapabilityList), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), EndedTimestamp: S.optional(S.Date), Participants: S.optional(Participants), NumberSelectionBehavior: S.optional(S.String), GeoMatchLevel: S.optional(S.String), GeoMatchParams: S.optional(GeoMatchParams)}) {}
export const ProxySessions = S.Array(ProxySession);
export class SipMediaApplication extends S.Class<SipMediaApplication>("SipMediaApplication")({SipMediaApplicationId: S.optional(S.String), AwsRegion: S.optional(S.String), Name: S.optional(S.String), Endpoints: S.optional(SipMediaApplicationEndpointList), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), SipMediaApplicationArn: S.optional(S.String)}) {}
export const SipMediaApplicationList = S.Array(SipMediaApplication);
export class SipRule extends S.Class<SipRule>("SipRule")({SipRuleId: S.optional(S.String), Name: S.optional(S.String), Disabled: S.optional(S.Boolean), TriggerType: S.optional(S.String), TriggerValue: S.optional(S.String), TargetApplications: S.optional(SipRuleTargetApplicationList), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date)}) {}
export const SipRuleList = S.Array(SipRule);
export class VoiceConnectorGroup extends S.Class<VoiceConnectorGroup>("VoiceConnectorGroup")({VoiceConnectorGroupId: S.optional(S.String), Name: S.optional(S.String), VoiceConnectorItems: S.optional(VoiceConnectorItemList), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), VoiceConnectorGroupArn: S.optional(S.String)}) {}
export const VoiceConnectorGroupList = S.Array(VoiceConnectorGroup);
export class VoiceConnector extends S.Class<VoiceConnector>("VoiceConnector")({VoiceConnectorId: S.optional(S.String), AwsRegion: S.optional(S.String), Name: S.optional(S.String), OutboundHostName: S.optional(S.String), RequireEncryption: S.optional(S.Boolean), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), VoiceConnectorArn: S.optional(S.String), IntegrationType: S.optional(S.String), NetworkType: S.optional(S.String)}) {}
export const VoiceConnectorList = S.Array(VoiceConnector);
export class SipMediaApplicationAlexaSkillConfiguration extends S.Class<SipMediaApplicationAlexaSkillConfiguration>("SipMediaApplicationAlexaSkillConfiguration")({AlexaSkillStatus: S.String, AlexaSkillIds: AlexaSkillIdList}) {}
export class SipMediaApplicationLoggingConfiguration extends S.Class<SipMediaApplicationLoggingConfiguration>("SipMediaApplicationLoggingConfiguration")({EnableSipMediaApplicationMessageLogs: S.optional(S.Boolean)}) {}
export class LoggingConfiguration extends S.Class<LoggingConfiguration>("LoggingConfiguration")({EnableSIPLogs: S.optional(S.Boolean), EnableMediaMetricLogs: S.optional(S.Boolean)}) {}
export class Termination extends S.Class<Termination>("Termination")({CpsLimit: S.optional(S.Number), DefaultPhoneNumber: S.optional(S.String), CallingRegions: S.optional(CallingRegionList), CidrAllowedList: S.optional(StringList), Disabled: S.optional(S.Boolean)}) {}
export class Credential extends S.Class<Credential>("Credential")({Username: S.optional(S.String), Password: S.optional(S.String)}) {}
export const CredentialList = S.Array(Credential);
export const SMAUpdateCallArgumentsMap = S.Record({key: S.String, value: S.String});
export class PhoneNumberError extends S.Class<PhoneNumberError>("PhoneNumberError")({PhoneNumberId: S.optional(S.String), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const PhoneNumberErrorList = S.Array(PhoneNumberError);
export class AssociatePhoneNumbersWithVoiceConnectorGroupResponse extends S.Class<AssociatePhoneNumbersWithVoiceConnectorGroupResponse>("AssociatePhoneNumbersWithVoiceConnectorGroupResponse")({PhoneNumberErrors: S.optional(PhoneNumberErrorList)}) {}
export class BatchDeletePhoneNumberResponse extends S.Class<BatchDeletePhoneNumberResponse>("BatchDeletePhoneNumberResponse")({PhoneNumberErrors: S.optional(PhoneNumberErrorList)}) {}
export class BatchUpdatePhoneNumberRequest extends S.Class<BatchUpdatePhoneNumberRequest>("BatchUpdatePhoneNumberRequest")({UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItemList}) {}
export class CreateProxySessionRequest extends S.Class<CreateProxySessionRequest>("CreateProxySessionRequest")({VoiceConnectorId: S.String, ParticipantPhoneNumbers: ParticipantPhoneNumberList, Name: S.optional(S.String), ExpiryMinutes: S.optional(S.Number), Capabilities: CapabilityList, NumberSelectionBehavior: S.optional(S.String), GeoMatchLevel: S.optional(S.String), GeoMatchParams: S.optional(GeoMatchParams)}) {}
export class CreateSipMediaApplicationRequest extends S.Class<CreateSipMediaApplicationRequest>("CreateSipMediaApplicationRequest")({AwsRegion: S.String, Name: S.String, Endpoints: SipMediaApplicationEndpointList, Tags: S.optional(TagList)}) {}
export class CreateSipMediaApplicationCallRequest extends S.Class<CreateSipMediaApplicationCallRequest>("CreateSipMediaApplicationCallRequest")({FromPhoneNumber: S.String, ToPhoneNumber: S.String, SipMediaApplicationId: S.String, SipHeaders: S.optional(SipHeadersMap), ArgumentsMap: S.optional(SMACreateCallArgumentsMap)}) {}
export class CreateSipRuleRequest extends S.Class<CreateSipRuleRequest>("CreateSipRuleRequest")({Name: S.String, TriggerType: S.String, TriggerValue: S.String, Disabled: S.optional(S.Boolean), TargetApplications: S.optional(SipRuleTargetApplicationList)}) {}
export class CreateVoiceConnectorGroupRequest extends S.Class<CreateVoiceConnectorGroupRequest>("CreateVoiceConnectorGroupRequest")({Name: S.String, VoiceConnectorItems: S.optional(VoiceConnectorItemList)}) {}
export class CreateVoiceProfileDomainRequest extends S.Class<CreateVoiceProfileDomainRequest>("CreateVoiceProfileDomainRequest")({Name: S.String, Description: S.optional(S.String), ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration, ClientRequestToken: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class DisassociatePhoneNumbersFromVoiceConnectorResponse extends S.Class<DisassociatePhoneNumbersFromVoiceConnectorResponse>("DisassociatePhoneNumbersFromVoiceConnectorResponse")({PhoneNumberErrors: S.optional(PhoneNumberErrorList)}) {}
export class DisassociatePhoneNumbersFromVoiceConnectorGroupResponse extends S.Class<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse>("DisassociatePhoneNumbersFromVoiceConnectorGroupResponse")({PhoneNumberErrors: S.optional(PhoneNumberErrorList)}) {}
export class GetGlobalSettingsResponse extends S.Class<GetGlobalSettingsResponse>("GetGlobalSettingsResponse")({VoiceConnector: S.optional(VoiceConnectorSettings)}) {}
export class GetPhoneNumberOrderResponse extends S.Class<GetPhoneNumberOrderResponse>("GetPhoneNumberOrderResponse")({PhoneNumberOrder: S.optional(PhoneNumberOrder)}) {}
export class GetSipMediaApplicationAlexaSkillConfigurationResponse extends S.Class<GetSipMediaApplicationAlexaSkillConfigurationResponse>("GetSipMediaApplicationAlexaSkillConfigurationResponse")({SipMediaApplicationAlexaSkillConfiguration: S.optional(SipMediaApplicationAlexaSkillConfiguration)}) {}
export class GetSipMediaApplicationLoggingConfigurationResponse extends S.Class<GetSipMediaApplicationLoggingConfigurationResponse>("GetSipMediaApplicationLoggingConfigurationResponse")({SipMediaApplicationLoggingConfiguration: S.optional(SipMediaApplicationLoggingConfiguration)}) {}
export class GetVoiceConnectorResponse extends S.Class<GetVoiceConnectorResponse>("GetVoiceConnectorResponse")({VoiceConnector: S.optional(VoiceConnector)}) {}
export class DNISEmergencyCallingConfiguration extends S.Class<DNISEmergencyCallingConfiguration>("DNISEmergencyCallingConfiguration")({EmergencyPhoneNumber: S.String, TestPhoneNumber: S.optional(S.String), CallingCountry: S.String}) {}
export const DNISEmergencyCallingConfigurationList = S.Array(DNISEmergencyCallingConfiguration);
export class EmergencyCallingConfiguration extends S.Class<EmergencyCallingConfiguration>("EmergencyCallingConfiguration")({DNIS: S.optional(DNISEmergencyCallingConfigurationList)}) {}
export class GetVoiceConnectorEmergencyCallingConfigurationResponse extends S.Class<GetVoiceConnectorEmergencyCallingConfigurationResponse>("GetVoiceConnectorEmergencyCallingConfigurationResponse")({EmergencyCallingConfiguration: S.optional(EmergencyCallingConfiguration)}) {}
export class GetVoiceConnectorLoggingConfigurationResponse extends S.Class<GetVoiceConnectorLoggingConfigurationResponse>("GetVoiceConnectorLoggingConfigurationResponse")({LoggingConfiguration: S.optional(LoggingConfiguration)}) {}
export class OriginationRoute extends S.Class<OriginationRoute>("OriginationRoute")({Host: S.optional(S.String), Port: S.optional(S.Number), Protocol: S.optional(S.String), Priority: S.optional(S.Number), Weight: S.optional(S.Number)}) {}
export const OriginationRouteList = S.Array(OriginationRoute);
export class Origination extends S.Class<Origination>("Origination")({Routes: S.optional(OriginationRouteList), Disabled: S.optional(S.Boolean)}) {}
export class GetVoiceConnectorOriginationResponse extends S.Class<GetVoiceConnectorOriginationResponse>("GetVoiceConnectorOriginationResponse")({Origination: S.optional(Origination)}) {}
export class StreamingNotificationTarget extends S.Class<StreamingNotificationTarget>("StreamingNotificationTarget")({NotificationTarget: S.optional(S.String)}) {}
export const StreamingNotificationTargetList = S.Array(StreamingNotificationTarget);
export class MediaInsightsConfiguration extends S.Class<MediaInsightsConfiguration>("MediaInsightsConfiguration")({Disabled: S.optional(S.Boolean), ConfigurationArn: S.optional(S.String)}) {}
export class StreamingConfiguration extends S.Class<StreamingConfiguration>("StreamingConfiguration")({DataRetentionInHours: S.Number, Disabled: S.Boolean, StreamingNotificationTargets: S.optional(StreamingNotificationTargetList), MediaInsightsConfiguration: S.optional(MediaInsightsConfiguration)}) {}
export class GetVoiceConnectorStreamingConfigurationResponse extends S.Class<GetVoiceConnectorStreamingConfigurationResponse>("GetVoiceConnectorStreamingConfigurationResponse")({StreamingConfiguration: S.optional(StreamingConfiguration)}) {}
export class GetVoiceConnectorTerminationResponse extends S.Class<GetVoiceConnectorTerminationResponse>("GetVoiceConnectorTerminationResponse")({Termination: S.optional(Termination)}) {}
export class VoiceProfile extends S.Class<VoiceProfile>("VoiceProfile")({VoiceProfileId: S.optional(S.String), VoiceProfileArn: S.optional(S.String), VoiceProfileDomainId: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), ExpirationTimestamp: S.optional(S.Date)}) {}
export class GetVoiceProfileResponse extends S.Class<GetVoiceProfileResponse>("GetVoiceProfileResponse")({VoiceProfile: S.optional(VoiceProfile)}) {}
export class ListPhoneNumberOrdersResponse extends S.Class<ListPhoneNumberOrdersResponse>("ListPhoneNumberOrdersResponse")({PhoneNumberOrders: S.optional(PhoneNumberOrderList), NextToken: S.optional(S.String)}) {}
export class ListPhoneNumbersResponse extends S.Class<ListPhoneNumbersResponse>("ListPhoneNumbersResponse")({PhoneNumbers: S.optional(PhoneNumberList), NextToken: S.optional(S.String)}) {}
export class ListProxySessionsResponse extends S.Class<ListProxySessionsResponse>("ListProxySessionsResponse")({ProxySessions: S.optional(ProxySessions), NextToken: S.optional(S.String)}) {}
export class ListSipMediaApplicationsResponse extends S.Class<ListSipMediaApplicationsResponse>("ListSipMediaApplicationsResponse")({SipMediaApplications: S.optional(SipMediaApplicationList), NextToken: S.optional(S.String)}) {}
export class ListSipRulesResponse extends S.Class<ListSipRulesResponse>("ListSipRulesResponse")({SipRules: S.optional(SipRuleList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class ListVoiceConnectorGroupsResponse extends S.Class<ListVoiceConnectorGroupsResponse>("ListVoiceConnectorGroupsResponse")({VoiceConnectorGroups: S.optional(VoiceConnectorGroupList), NextToken: S.optional(S.String)}) {}
export class ListVoiceConnectorsResponse extends S.Class<ListVoiceConnectorsResponse>("ListVoiceConnectorsResponse")({VoiceConnectors: S.optional(VoiceConnectorList), NextToken: S.optional(S.String)}) {}
export class ListVoiceConnectorTerminationCredentialsResponse extends S.Class<ListVoiceConnectorTerminationCredentialsResponse>("ListVoiceConnectorTerminationCredentialsResponse")({Usernames: S.optional(SensitiveStringList)}) {}
export class PutSipMediaApplicationAlexaSkillConfigurationRequest extends S.Class<PutSipMediaApplicationAlexaSkillConfigurationRequest>("PutSipMediaApplicationAlexaSkillConfigurationRequest")({SipMediaApplicationId: S.String, SipMediaApplicationAlexaSkillConfiguration: S.optional(SipMediaApplicationAlexaSkillConfiguration)}) {}
export class PutSipMediaApplicationLoggingConfigurationRequest extends S.Class<PutSipMediaApplicationLoggingConfigurationRequest>("PutSipMediaApplicationLoggingConfigurationRequest")({SipMediaApplicationId: S.String, SipMediaApplicationLoggingConfiguration: S.optional(SipMediaApplicationLoggingConfiguration)}) {}
export class ExternalSystemsConfiguration extends S.Class<ExternalSystemsConfiguration>("ExternalSystemsConfiguration")({SessionBorderControllerTypes: S.optional(SessionBorderControllerTypeList), ContactCenterSystemTypes: S.optional(ContactCenterSystemTypeList)}) {}
export class PutVoiceConnectorExternalSystemsConfigurationResponse extends S.Class<PutVoiceConnectorExternalSystemsConfigurationResponse>("PutVoiceConnectorExternalSystemsConfigurationResponse")({ExternalSystemsConfiguration: S.optional(ExternalSystemsConfiguration)}) {}
export class PutVoiceConnectorLoggingConfigurationRequest extends S.Class<PutVoiceConnectorLoggingConfigurationRequest>("PutVoiceConnectorLoggingConfigurationRequest")({VoiceConnectorId: S.String, LoggingConfiguration: LoggingConfiguration}) {}
export class Proxy extends S.Class<Proxy>("Proxy")({DefaultSessionExpiryMinutes: S.optional(S.Number), Disabled: S.optional(S.Boolean), FallBackPhoneNumber: S.optional(S.String), PhoneNumberCountries: S.optional(StringList)}) {}
export class PutVoiceConnectorProxyResponse extends S.Class<PutVoiceConnectorProxyResponse>("PutVoiceConnectorProxyResponse")({Proxy: S.optional(Proxy)}) {}
export class PutVoiceConnectorTerminationRequest extends S.Class<PutVoiceConnectorTerminationRequest>("PutVoiceConnectorTerminationRequest")({VoiceConnectorId: S.String, Termination: Termination}) {}
export class PutVoiceConnectorTerminationCredentialsRequest extends S.Class<PutVoiceConnectorTerminationCredentialsRequest>("PutVoiceConnectorTerminationCredentialsRequest")({VoiceConnectorId: S.String, Credentials: S.optional(CredentialList)}) {}
export class RestorePhoneNumberResponse extends S.Class<RestorePhoneNumberResponse>("RestorePhoneNumberResponse")({PhoneNumber: S.optional(PhoneNumber)}) {}
export class SearchAvailablePhoneNumbersResponse extends S.Class<SearchAvailablePhoneNumbersResponse>("SearchAvailablePhoneNumbersResponse")({E164PhoneNumbers: S.optional(E164PhoneNumberList), NextToken: S.optional(S.String)}) {}
export class CallDetails extends S.Class<CallDetails>("CallDetails")({VoiceConnectorId: S.optional(S.String), TransactionId: S.optional(S.String), IsCaller: S.optional(S.Boolean)}) {}
export class SpeakerSearchResult extends S.Class<SpeakerSearchResult>("SpeakerSearchResult")({ConfidenceScore: S.optional(S.Number), VoiceProfileId: S.optional(S.String)}) {}
export const SpeakerSearchResultList = S.Array(SpeakerSearchResult);
export class SpeakerSearchDetails extends S.Class<SpeakerSearchDetails>("SpeakerSearchDetails")({Results: S.optional(SpeakerSearchResultList), VoiceprintGenerationStatus: S.optional(S.String)}) {}
export class SpeakerSearchTask extends S.Class<SpeakerSearchTask>("SpeakerSearchTask")({SpeakerSearchTaskId: S.optional(S.String), SpeakerSearchTaskStatus: S.optional(S.String), CallDetails: S.optional(CallDetails), SpeakerSearchDetails: S.optional(SpeakerSearchDetails), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), StartedTimestamp: S.optional(S.Date), StatusMessage: S.optional(S.String)}) {}
export class StartSpeakerSearchTaskResponse extends S.Class<StartSpeakerSearchTaskResponse>("StartSpeakerSearchTaskResponse")({SpeakerSearchTask: S.optional(SpeakerSearchTask)}) {}
export class VoiceToneAnalysisTask extends S.Class<VoiceToneAnalysisTask>("VoiceToneAnalysisTask")({VoiceToneAnalysisTaskId: S.optional(S.String), VoiceToneAnalysisTaskStatus: S.optional(S.String), CallDetails: S.optional(CallDetails), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), StartedTimestamp: S.optional(S.Date), StatusMessage: S.optional(S.String)}) {}
export class StartVoiceToneAnalysisTaskResponse extends S.Class<StartVoiceToneAnalysisTaskResponse>("StartVoiceToneAnalysisTaskResponse")({VoiceToneAnalysisTask: S.optional(VoiceToneAnalysisTask)}) {}
export class UpdatePhoneNumberResponse extends S.Class<UpdatePhoneNumberResponse>("UpdatePhoneNumberResponse")({PhoneNumber: S.optional(PhoneNumber)}) {}
export class UpdateProxySessionResponse extends S.Class<UpdateProxySessionResponse>("UpdateProxySessionResponse")({ProxySession: S.optional(ProxySession)}) {}
export class UpdateSipMediaApplicationResponse extends S.Class<UpdateSipMediaApplicationResponse>("UpdateSipMediaApplicationResponse")({SipMediaApplication: S.optional(SipMediaApplication)}) {}
export class UpdateSipMediaApplicationCallRequest extends S.Class<UpdateSipMediaApplicationCallRequest>("UpdateSipMediaApplicationCallRequest")({SipMediaApplicationId: S.String, TransactionId: S.String, Arguments: SMAUpdateCallArgumentsMap}) {}
export class UpdateSipRuleResponse extends S.Class<UpdateSipRuleResponse>("UpdateSipRuleResponse")({SipRule: S.optional(SipRule)}) {}
export class UpdateVoiceConnectorResponse extends S.Class<UpdateVoiceConnectorResponse>("UpdateVoiceConnectorResponse")({VoiceConnector: S.optional(VoiceConnector)}) {}
export class UpdateVoiceConnectorGroupResponse extends S.Class<UpdateVoiceConnectorGroupResponse>("UpdateVoiceConnectorGroupResponse")({VoiceConnectorGroup: S.optional(VoiceConnectorGroup)}) {}
export class UpdateVoiceProfileResponse extends S.Class<UpdateVoiceProfileResponse>("UpdateVoiceProfileResponse")({VoiceProfile: S.optional(VoiceProfile)}) {}
export class VoiceProfileDomain extends S.Class<VoiceProfileDomain>("VoiceProfileDomain")({VoiceProfileDomainId: S.optional(S.String), VoiceProfileDomainArn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), ServerSideEncryptionConfiguration: S.optional(ServerSideEncryptionConfiguration), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date)}) {}
export class UpdateVoiceProfileDomainResponse extends S.Class<UpdateVoiceProfileDomainResponse>("UpdateVoiceProfileDomainResponse")({VoiceProfileDomain: S.optional(VoiceProfileDomain)}) {}
export const PhoneNumberTypeList = S.Array(S.String);
export class TerminationHealth extends S.Class<TerminationHealth>("TerminationHealth")({Timestamp: S.optional(S.Date), Source: S.optional(S.String)}) {}
export class PhoneNumberCountry extends S.Class<PhoneNumberCountry>("PhoneNumberCountry")({CountryCode: S.optional(S.String), SupportedPhoneNumberTypes: S.optional(PhoneNumberTypeList)}) {}
export const PhoneNumberCountriesList = S.Array(PhoneNumberCountry);
export class VoiceProfileDomainSummary extends S.Class<VoiceProfileDomainSummary>("VoiceProfileDomainSummary")({VoiceProfileDomainId: S.optional(S.String), VoiceProfileDomainArn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date)}) {}
export const VoiceProfileDomainSummaryList = S.Array(VoiceProfileDomainSummary);
export class VoiceProfileSummary extends S.Class<VoiceProfileSummary>("VoiceProfileSummary")({VoiceProfileId: S.optional(S.String), VoiceProfileArn: S.optional(S.String), VoiceProfileDomainId: S.optional(S.String), CreatedTimestamp: S.optional(S.Date), UpdatedTimestamp: S.optional(S.Date), ExpirationTimestamp: S.optional(S.Date)}) {}
export const VoiceProfileSummaryList = S.Array(VoiceProfileSummary);
export class Address extends S.Class<Address>("Address")({streetName: S.optional(S.String), streetSuffix: S.optional(S.String), postDirectional: S.optional(S.String), preDirectional: S.optional(S.String), streetNumber: S.optional(S.String), city: S.optional(S.String), state: S.optional(S.String), postalCode: S.optional(S.String), postalCodePlus4: S.optional(S.String), country: S.optional(S.String)}) {}
export class CandidateAddress extends S.Class<CandidateAddress>("CandidateAddress")({streetInfo: S.optional(S.String), streetNumber: S.optional(S.String), city: S.optional(S.String), state: S.optional(S.String), postalCode: S.optional(S.String), postalCodePlus4: S.optional(S.String), country: S.optional(S.String)}) {}
export const CandidateAddressList = S.Array(CandidateAddress);
export class AssociatePhoneNumbersWithVoiceConnectorResponse extends S.Class<AssociatePhoneNumbersWithVoiceConnectorResponse>("AssociatePhoneNumbersWithVoiceConnectorResponse")({PhoneNumberErrors: S.optional(PhoneNumberErrorList)}) {}
export class BatchUpdatePhoneNumberResponse extends S.Class<BatchUpdatePhoneNumberResponse>("BatchUpdatePhoneNumberResponse")({PhoneNumberErrors: S.optional(PhoneNumberErrorList)}) {}
export class CreateProxySessionResponse extends S.Class<CreateProxySessionResponse>("CreateProxySessionResponse")({ProxySession: S.optional(ProxySession)}) {}
export class CreateSipMediaApplicationResponse extends S.Class<CreateSipMediaApplicationResponse>("CreateSipMediaApplicationResponse")({SipMediaApplication: S.optional(SipMediaApplication)}) {}
export class CreateSipRuleResponse extends S.Class<CreateSipRuleResponse>("CreateSipRuleResponse")({SipRule: S.optional(SipRule)}) {}
export class CreateVoiceConnectorResponse extends S.Class<CreateVoiceConnectorResponse>("CreateVoiceConnectorResponse")({VoiceConnector: S.optional(VoiceConnector)}) {}
export class CreateVoiceConnectorGroupResponse extends S.Class<CreateVoiceConnectorGroupResponse>("CreateVoiceConnectorGroupResponse")({VoiceConnectorGroup: S.optional(VoiceConnectorGroup)}) {}
export class CreateVoiceProfileResponse extends S.Class<CreateVoiceProfileResponse>("CreateVoiceProfileResponse")({VoiceProfile: S.optional(VoiceProfile)}) {}
export class CreateVoiceProfileDomainResponse extends S.Class<CreateVoiceProfileDomainResponse>("CreateVoiceProfileDomainResponse")({VoiceProfileDomain: S.optional(VoiceProfileDomain)}) {}
export class GetSipMediaApplicationResponse extends S.Class<GetSipMediaApplicationResponse>("GetSipMediaApplicationResponse")({SipMediaApplication: S.optional(SipMediaApplication)}) {}
export class GetSipRuleResponse extends S.Class<GetSipRuleResponse>("GetSipRuleResponse")({SipRule: S.optional(SipRule)}) {}
export class GetVoiceConnectorExternalSystemsConfigurationResponse extends S.Class<GetVoiceConnectorExternalSystemsConfigurationResponse>("GetVoiceConnectorExternalSystemsConfigurationResponse")({ExternalSystemsConfiguration: S.optional(ExternalSystemsConfiguration)}) {}
export class GetVoiceConnectorGroupResponse extends S.Class<GetVoiceConnectorGroupResponse>("GetVoiceConnectorGroupResponse")({VoiceConnectorGroup: S.optional(VoiceConnectorGroup)}) {}
export class GetVoiceConnectorProxyResponse extends S.Class<GetVoiceConnectorProxyResponse>("GetVoiceConnectorProxyResponse")({Proxy: S.optional(Proxy)}) {}
export class GetVoiceConnectorTerminationHealthResponse extends S.Class<GetVoiceConnectorTerminationHealthResponse>("GetVoiceConnectorTerminationHealthResponse")({TerminationHealth: S.optional(TerminationHealth)}) {}
export class GetVoiceProfileDomainResponse extends S.Class<GetVoiceProfileDomainResponse>("GetVoiceProfileDomainResponse")({VoiceProfileDomain: S.optional(VoiceProfileDomain)}) {}
export class GetVoiceToneAnalysisTaskResponse extends S.Class<GetVoiceToneAnalysisTaskResponse>("GetVoiceToneAnalysisTaskResponse")({VoiceToneAnalysisTask: S.optional(VoiceToneAnalysisTask)}) {}
export class ListSupportedPhoneNumberCountriesResponse extends S.Class<ListSupportedPhoneNumberCountriesResponse>("ListSupportedPhoneNumberCountriesResponse")({PhoneNumberCountries: S.optional(PhoneNumberCountriesList)}) {}
export class ListVoiceProfileDomainsResponse extends S.Class<ListVoiceProfileDomainsResponse>("ListVoiceProfileDomainsResponse")({VoiceProfileDomains: S.optional(VoiceProfileDomainSummaryList), NextToken: S.optional(S.String)}) {}
export class ListVoiceProfilesResponse extends S.Class<ListVoiceProfilesResponse>("ListVoiceProfilesResponse")({VoiceProfiles: S.optional(VoiceProfileSummaryList), NextToken: S.optional(S.String)}) {}
export class PutSipMediaApplicationAlexaSkillConfigurationResponse extends S.Class<PutSipMediaApplicationAlexaSkillConfigurationResponse>("PutSipMediaApplicationAlexaSkillConfigurationResponse")({SipMediaApplicationAlexaSkillConfiguration: S.optional(SipMediaApplicationAlexaSkillConfiguration)}) {}
export class PutSipMediaApplicationLoggingConfigurationResponse extends S.Class<PutSipMediaApplicationLoggingConfigurationResponse>("PutSipMediaApplicationLoggingConfigurationResponse")({SipMediaApplicationLoggingConfiguration: S.optional(SipMediaApplicationLoggingConfiguration)}) {}
export class PutVoiceConnectorEmergencyCallingConfigurationRequest extends S.Class<PutVoiceConnectorEmergencyCallingConfigurationRequest>("PutVoiceConnectorEmergencyCallingConfigurationRequest")({VoiceConnectorId: S.String, EmergencyCallingConfiguration: EmergencyCallingConfiguration}) {}
export class PutVoiceConnectorLoggingConfigurationResponse extends S.Class<PutVoiceConnectorLoggingConfigurationResponse>("PutVoiceConnectorLoggingConfigurationResponse")({LoggingConfiguration: S.optional(LoggingConfiguration)}) {}
export class PutVoiceConnectorOriginationRequest extends S.Class<PutVoiceConnectorOriginationRequest>("PutVoiceConnectorOriginationRequest")({VoiceConnectorId: S.String, Origination: Origination}) {}
export class PutVoiceConnectorStreamingConfigurationRequest extends S.Class<PutVoiceConnectorStreamingConfigurationRequest>("PutVoiceConnectorStreamingConfigurationRequest")({VoiceConnectorId: S.String, StreamingConfiguration: StreamingConfiguration}) {}
export class PutVoiceConnectorTerminationResponse extends S.Class<PutVoiceConnectorTerminationResponse>("PutVoiceConnectorTerminationResponse")({Termination: S.optional(Termination)}) {}
export class SipMediaApplicationCall extends S.Class<SipMediaApplicationCall>("SipMediaApplicationCall")({TransactionId: S.optional(S.String)}) {}
export class UpdateSipMediaApplicationCallResponse extends S.Class<UpdateSipMediaApplicationCallResponse>("UpdateSipMediaApplicationCallResponse")({SipMediaApplicationCall: S.optional(SipMediaApplicationCall)}) {}
export class ValidateE911AddressResponse extends S.Class<ValidateE911AddressResponse>("ValidateE911AddressResponse")({ValidationResult: S.optional(S.Number), AddressExternalId: S.optional(S.String), Address: S.optional(Address), CandidateAddressList: S.optional(CandidateAddressList)}) {}
export class CreatePhoneNumberOrderResponse extends S.Class<CreatePhoneNumberOrderResponse>("CreatePhoneNumberOrderResponse")({PhoneNumberOrder: S.optional(PhoneNumberOrder)}) {}
export class CreateSipMediaApplicationCallResponse extends S.Class<CreateSipMediaApplicationCallResponse>("CreateSipMediaApplicationCallResponse")({SipMediaApplicationCall: S.optional(SipMediaApplicationCall)}) {}
export class GetPhoneNumberResponse extends S.Class<GetPhoneNumberResponse>("GetPhoneNumberResponse")({PhoneNumber: S.optional(PhoneNumber)}) {}
export class GetProxySessionResponse extends S.Class<GetProxySessionResponse>("GetProxySessionResponse")({ProxySession: S.optional(ProxySession)}) {}
export class PutVoiceConnectorEmergencyCallingConfigurationResponse extends S.Class<PutVoiceConnectorEmergencyCallingConfigurationResponse>("PutVoiceConnectorEmergencyCallingConfigurationResponse")({EmergencyCallingConfiguration: S.optional(EmergencyCallingConfiguration)}) {}
export class PutVoiceConnectorOriginationResponse extends S.Class<PutVoiceConnectorOriginationResponse>("PutVoiceConnectorOriginationResponse")({Origination: S.optional(Origination)}) {}
export class PutVoiceConnectorStreamingConfigurationResponse extends S.Class<PutVoiceConnectorStreamingConfigurationResponse>("PutVoiceConnectorStreamingConfigurationResponse")({StreamingConfiguration: S.optional(StreamingConfiguration)}) {}
export class GetSpeakerSearchTaskResponse extends S.Class<GetSpeakerSearchTaskResponse>("GetSpeakerSearchTaskResponse")({SpeakerSearchTask: S.optional(SpeakerSearchTask)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class ServiceFailureException extends S.TaggedError<ServiceFailureException>()("ServiceFailureException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class ThrottledClientException extends S.TaggedError<ThrottledClientException>()("ThrottledClientException", {}) {};
export class UnauthorizedClientException extends S.TaggedError<UnauthorizedClientException>()("UnauthorizedClientException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class UnprocessableEntityException extends S.TaggedError<UnprocessableEntityException>()("UnprocessableEntityException", {}) {};
export class ResourceLimitExceededException extends S.TaggedError<ResourceLimitExceededException>()("ResourceLimitExceededException", {}) {};
export class GoneException extends S.TaggedError<GoneException>()("GoneException", {}) {};

//# Operations
/**
 * Deletes the origination settings for the specified Amazon Chime SDK Voice Connector.
 * 
 * 
 * 
 * 
 * If emergency calling is configured for the Voice Connector, it must be
 * deleted prior to deleting the origination settings.
 */export const deleteVoiceConnectorOrigination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/origination", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceConnectorOrigination" }, DeleteVoiceConnectorOriginationRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the proxy configuration from the specified Amazon Chime SDK Voice Connector.
 */export const deleteVoiceConnectorProxy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceConnectorProxy" }, DeleteVoiceConnectorProxyRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Voice Connector's streaming configuration.
 */export const deleteVoiceConnectorStreamingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/streaming-configuration", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceConnectorStreamingConfiguration" }, DeleteVoiceConnectorStreamingConfigurationRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the termination settings for the specified Amazon Chime SDK Voice Connector.
 * 
 * 
 * 
 * 
 * If emergency calling is configured for the Voice Connector, it must be
 * deleted prior to deleting the termination settings.
 */export const deleteVoiceConnectorTermination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/termination", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceConnectorTermination" }, DeleteVoiceConnectorTerminationRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified SIP credentials used by your equipment to
 * authenticate during call termination.
 */export const deleteVoiceConnectorTerminationCredentials = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/termination/credentials?operation=delete", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceConnectorTerminationCredentials" }, DeleteVoiceConnectorTerminationCredentialsRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes all voice profiles in the domain. WARNING: This action is not reversible.
 */export const deleteVoiceProfileDomain = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profile-domains/{VoiceProfileDomainId}", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceProfileDomain" }, DeleteVoiceProfileDomainRequest, S.Struct({}), [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the phone number settings for the administrator's AWS account,
 * such as the default outbound calling name.
 */export const getPhoneNumberSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/settings/phone-number", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetPhoneNumberSettings" }, S.Struct({}), GetPhoneNumberSettingsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the available AWS Regions in which you can create an Amazon Chime SDK Voice Connector.
 */export const listAvailableVoiceConnectorRegions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connector-regions", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListAvailableVoiceConnectorRegions" }, S.Struct({}), ListAvailableVoiceConnectorRegionsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a voice tone analysis task.
 */export const stopVoiceToneAnalysisTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.StopVoiceToneAnalysisTask" }, StopVoiceToneAnalysisTaskRequest, S.Struct({}), [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException, UnprocessableEntityException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/tags?operation=untag-resource", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UntagResource" }, UntagResourceRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates global settings for the Amazon Chime SDK Voice Connectors in an AWS account.
 */export const updateGlobalSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/settings", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdateGlobalSettings" }, UpdateGlobalSettingsRequest, S.Struct({}), [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the phone number settings for the administrator's AWS account, such
 * as the default outbound calling name. You can update the default outbound calling
 * name once every seven days. Outbound calling names can take up to 72 hours to
 * update.
 */export const updatePhoneNumberSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/settings/phone-number", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdatePhoneNumberSettings" }, UpdatePhoneNumberSettingsRequest, S.Struct({}), [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates phone numbers with the specified Amazon Chime SDK Voice Connector group.
 */export const associatePhoneNumbersWithVoiceConnectorGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connector-groups/{VoiceConnectorGroupId}?operation=associate-phone-numbers", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.AssociatePhoneNumbersWithVoiceConnectorGroup" }, AssociatePhoneNumbersWithVoiceConnectorGroupRequest, AssociatePhoneNumbersWithVoiceConnectorGroupResponse, [AccessDeniedException, BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Moves phone numbers into the
 * **Deletion queue**. Phone numbers must be disassociated from any users or Amazon Chime SDK Voice Connectors before they can be deleted.
 * 
 * 
 * 
 * 
 * Phone numbers remain in the
 * **Deletion queue** for 7 days before they are deleted permanently.
 */export const batchDeletePhoneNumber = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-numbers?operation=batch-delete", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.BatchDeletePhoneNumber" }, BatchDeletePhoneNumberRequest, BatchDeletePhoneNumberResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Moves the specified phone number into the
 * **Deletion queue**. A phone number must
 * be disassociated from any users or Amazon Chime SDK Voice Connectors before it can be
 * deleted.
 * 
 * 
 * Deleted phone numbers remain in the
 * **Deletion queue** queue for 7 days before
 * they are deleted permanently.
 */export const deletePhoneNumber = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-numbers/{PhoneNumberId}", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeletePhoneNumber" }, DeletePhoneNumberRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified proxy session from the specified Amazon Chime SDK Voice
 * Connector.
 */export const deleteProxySession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteProxySession" }, DeleteProxySessionRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a SIP media application.
 */export const deleteSipMediaApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications/{SipMediaApplicationId}", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteSipMediaApplication" }, DeleteSipMediaApplicationRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a SIP rule.
 */export const deleteSipRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-rules/{SipRuleId}", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteSipRule" }, DeleteSipRuleRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Amazon Chime SDK Voice Connector. Any phone numbers associated
 * with the Amazon Chime SDK Voice Connector must be disassociated from it before it
 * can be deleted.
 */export const deleteVoiceConnector = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceConnector" }, DeleteVoiceConnectorRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the emergency calling details from the specified Amazon Chime SDK Voice
 * Connector.
 */export const deleteVoiceConnectorEmergencyCallingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceConnectorEmergencyCallingConfiguration" }, DeleteVoiceConnectorEmergencyCallingConfigurationRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the external systems configuration for a Voice Connector.
 */export const deleteVoiceConnectorExternalSystemsConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/external-systems-configuration", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceConnectorExternalSystemsConfiguration" }, DeleteVoiceConnectorExternalSystemsConfigurationRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an Amazon Chime SDK Voice Connector group. Any `VoiceConnectorItems`
 * and phone numbers associated with the group must be removed before it can be
 * deleted.
 */export const deleteVoiceConnectorGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connector-groups/{VoiceConnectorGroupId}", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceConnectorGroup" }, DeleteVoiceConnectorGroupRequest, S.Struct({}), [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a voice profile, including its voice print and enrollment data. WARNING: This action is not reversible.
 */export const deleteVoiceProfile = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profiles/{VoiceProfileId}", method: "DELETE", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DeleteVoiceProfile" }, DeleteVoiceProfileRequest, S.Struct({}), [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the specified phone numbers from the specified
 * Amazon Chime SDK Voice Connector.
 */export const disassociatePhoneNumbersFromVoiceConnector = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}?operation=disassociate-phone-numbers", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DisassociatePhoneNumbersFromVoiceConnector" }, DisassociatePhoneNumbersFromVoiceConnectorRequest, DisassociatePhoneNumbersFromVoiceConnectorResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice
 * Connector group.
 */export const disassociatePhoneNumbersFromVoiceConnectorGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connector-groups/{VoiceConnectorGroupId}?operation=disassociate-phone-numbers", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.DisassociatePhoneNumbersFromVoiceConnectorGroup" }, DisassociatePhoneNumbersFromVoiceConnectorGroupRequest, DisassociatePhoneNumbersFromVoiceConnectorGroupResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the global settings for the Amazon Chime SDK Voice Connectors in an AWS account.
 */export const getGlobalSettings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/settings", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetGlobalSettings" }, S.Struct({}), GetGlobalSettingsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details for the specified phone number order, such as the order
 * creation timestamp, phone numbers in E.164 format, product type, and
 * order status.
 */export const getPhoneNumberOrder = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-number-orders/{PhoneNumberOrderId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetPhoneNumberOrder" }, GetPhoneNumberOrderRequest, GetPhoneNumberOrderResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the Alexa Skill configuration for the SIP media application.
 * 
 * 
 * 
 * 
 * Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to
 * the Alexa Smart Properties page.
 */export const getSipMediaApplicationAlexaSkillConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetSipMediaApplicationAlexaSkillConfiguration" }, GetSipMediaApplicationAlexaSkillConfigurationRequest, GetSipMediaApplicationAlexaSkillConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the logging configuration for the specified SIP media application.
 */export const getSipMediaApplicationLoggingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications/{SipMediaApplicationId}/logging-configuration", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetSipMediaApplicationLoggingConfiguration" }, GetSipMediaApplicationLoggingConfigurationRequest, GetSipMediaApplicationLoggingConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details for the specified Amazon Chime SDK Voice Connector, such as
 * timestamps,name, outbound host, and encryption requirements.
 */export const getVoiceConnector = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnector" }, GetVoiceConnectorRequest, GetVoiceConnectorResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the emergency calling configuration details for the specified Voice Connector.
 */export const getVoiceConnectorEmergencyCallingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnectorEmergencyCallingConfiguration" }, GetVoiceConnectorEmergencyCallingConfigurationRequest, GetVoiceConnectorEmergencyCallingConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the logging configuration settings for the specified Voice Connector.
 * Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
 */export const getVoiceConnectorLoggingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/logging-configuration", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnectorLoggingConfiguration" }, GetVoiceConnectorLoggingConfigurationRequest, GetVoiceConnectorLoggingConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the origination settings for the specified Voice Connector.
 */export const getVoiceConnectorOrigination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/origination", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnectorOrigination" }, GetVoiceConnectorOriginationRequest, GetVoiceConnectorOriginationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the streaming configuration details for the specified Amazon Chime SDK
 * Voice Connector. Shows whether media streaming is enabled for sending to Amazon
 * Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.
 */export const getVoiceConnectorStreamingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/streaming-configuration", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnectorStreamingConfiguration" }, GetVoiceConnectorStreamingConfigurationRequest, GetVoiceConnectorStreamingConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the termination setting details for the specified Voice Connector.
 */export const getVoiceConnectorTermination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/termination", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnectorTermination" }, GetVoiceConnectorTerminationRequest, GetVoiceConnectorTerminationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of the specified voice profile.
 */export const getVoiceProfile = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profiles/{VoiceProfileId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceProfile" }, GetVoiceProfileRequest, GetVoiceProfileResponse, [AccessDeniedException, BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the phone numbers for an administrator's Amazon Chime SDK account.
 */export const listPhoneNumberOrders = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-number-orders", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListPhoneNumberOrders" }, ListPhoneNumberOrdersRequest, ListPhoneNumberOrdersResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the phone numbers for the specified Amazon Chime SDK account,
 * Amazon Chime SDK user, Amazon Chime SDK Voice Connector, or Amazon Chime SDK Voice
 * Connector group.
 */export const listPhoneNumbers = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-numbers", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListPhoneNumbers" }, ListPhoneNumbersRequest, ListPhoneNumbersResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the proxy sessions for the specified Amazon Chime SDK Voice Connector.
 */export const listProxySessions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListProxySessions" }, ListProxySessionsRequest, ListProxySessionsResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the SIP media applications under the administrator's AWS account.
 */export const listSipMediaApplications = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListSipMediaApplications" }, ListSipMediaApplicationsRequest, ListSipMediaApplicationsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the SIP rules under the administrator's AWS account.
 */export const listSipRules = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-rules", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListSipRules" }, ListSipRulesRequest, ListSipRulesResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of the tags in a given resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/tags", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Amazon Chime SDK Voice Connector groups in the administrator's AWS
 * account.
 */export const listVoiceConnectorGroups = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connector-groups", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListVoiceConnectorGroups" }, ListVoiceConnectorGroupsRequest, ListVoiceConnectorGroupsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Amazon Chime SDK Voice Connectors in the administrators
 * AWS account.
 */export const listVoiceConnectors = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListVoiceConnectors" }, ListVoiceConnectorsRequest, ListVoiceConnectorsResponse, [BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the SIP credentials for the specified Amazon Chime SDK Voice Connector.
 */export const listVoiceConnectorTerminationCredentials = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/termination/credentials", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListVoiceConnectorTerminationCredentials" }, ListVoiceConnectorTerminationCredentialsRequest, ListVoiceConnectorTerminationCredentialsResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds an external systems configuration to a Voice Connector.
 */export const putVoiceConnectorExternalSystemsConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/external-systems-configuration", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutVoiceConnectorExternalSystemsConfiguration" }, PutVoiceConnectorExternalSystemsConfigurationRequest, PutVoiceConnectorExternalSystemsConfigurationResponse, [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Puts the specified proxy configuration to the specified Amazon Chime SDK Voice Connector.
 */export const putVoiceConnectorProxy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutVoiceConnectorProxy" }, PutVoiceConnectorProxyRequest, PutVoiceConnectorProxyResponse, [AccessDeniedException, BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Voice Connector's termination credentials.
 */export const putVoiceConnectorTerminationCredentials = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/termination/credentials?operation=put", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutVoiceConnectorTerminationCredentials" }, PutVoiceConnectorTerminationCredentialsRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Restores a deleted phone number.
 */export const restorePhoneNumber = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-numbers/{PhoneNumberId}?operation=restore", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.RestorePhoneNumber" }, RestorePhoneNumberRequest, RestorePhoneNumberResponse, [BadRequestException, ForbiddenException, NotFoundException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Searches the provisioned phone numbers in an organization.
 */export const searchAvailablePhoneNumbers = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/search?type=phone-numbers", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.SearchAvailablePhoneNumbers" }, SearchAvailablePhoneNumbersRequest, SearchAvailablePhoneNumbersResponse, [AccessDeniedException, BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a voice tone analysis task. For more information about voice tone analysis, see
 * Using Amazon Chime SDK voice analytics
 * in the *Amazon Chime SDK Developer Guide*.
 * 
 * 
 * 
 * 
 * Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 */export const startVoiceToneAnalysisTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.StartVoiceToneAnalysisTask" }, StartVoiceToneAnalysisTaskRequest, StartVoiceToneAnalysisTaskResponse, [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, GoneException, NotFoundException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException, UnprocessableEntityException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a speaker search task.
 */export const stopSpeakerSearchTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.StopSpeakerSearchTask" }, StopSpeakerSearchTaskRequest, S.Struct({}), [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException, UnprocessableEntityException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a tag to the specified resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/tags?operation=tag-resource", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.TagResource" }, TagResourceRequest, S.Struct({}), [BadRequestException, ForbiddenException, NotFoundException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates phone number details, such as product type, calling name, or phone number name for the
 * specified phone number ID. You can update one phone number detail at a time. For
 * example, you can update either the product type, calling name, or phone number name in one action.
 * 
 * 
 * For numbers outside the U.S., you must use the Amazon Chime SDK SIP Media
 * Application Dial-In product type.
 * 
 * 
 * Updates to outbound calling names can take 72 hours to complete. Pending
 * updates to outbound calling names must be complete before you can request another
 * update.
 */export const updatePhoneNumber = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-numbers/{PhoneNumberId}", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdatePhoneNumber" }, UpdatePhoneNumberRequest, UpdatePhoneNumberResponse, [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified proxy session details, such as voice or SMS capabilities.
 */export const updateProxySession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdateProxySession" }, UpdateProxySessionRequest, UpdateProxySessionResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the details of the specified SIP media application.
 */export const updateSipMediaApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications/{SipMediaApplicationId}", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdateSipMediaApplication" }, UpdateSipMediaApplicationRequest, UpdateSipMediaApplicationResponse, [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the details of the specified SIP rule.
 */export const updateSipRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-rules/{SipRuleId}", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdateSipRule" }, UpdateSipRuleRequest, UpdateSipRuleResponse, [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the details for the specified Amazon Chime SDK Voice Connector.
 */export const updateVoiceConnector = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdateVoiceConnector" }, UpdateVoiceConnectorRequest, UpdateVoiceConnectorResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the settings for the specified Amazon Chime SDK Voice Connector group.
 */export const updateVoiceConnectorGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connector-groups/{VoiceConnectorGroupId}", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdateVoiceConnectorGroup" }, UpdateVoiceConnectorGroupRequest, UpdateVoiceConnectorGroupResponse, [BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified voice profile’s voice print and refreshes its expiration timestamp.
 * 
 * 
 * 
 * 
 * As a condition of using this feature, you acknowledge that the collection, use, storage, and retention of
 * your caller’s biometric identifiers and biometric information (“biometric data”) in the form of a digital voiceprint
 * requires the caller’s informed consent via a written release. Such consent is required under various state laws,
 * including biometrics laws in Illinois, Texas, Washington and other state privacy laws.
 * 
 * 
 * You must provide a written release to each caller through a process that clearly reflects each caller’s informed
 * consent before using Amazon Chime SDK Voice Insights service, as required under the terms of your agreement
 * with AWS governing your use of the service.
 */export const updateVoiceProfile = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profiles/{VoiceProfileId}", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdateVoiceProfile" }, UpdateVoiceProfileRequest, UpdateVoiceProfileResponse, [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, GoneException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the settings for the specified voice profile domain.
 */export const updateVoiceProfileDomain = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profile-domains/{VoiceProfileDomainId}", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdateVoiceProfileDomain" }, UpdateVoiceProfileDomainRequest, UpdateVoiceProfileDomainResponse, [AccessDeniedException, BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Associates phone numbers with the specified Amazon Chime SDK Voice Connector.
 */export const associatePhoneNumbersWithVoiceConnector = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}?operation=associate-phone-numbers", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.AssociatePhoneNumbersWithVoiceConnector" }, AssociatePhoneNumbersWithVoiceConnectorRequest, AssociatePhoneNumbersWithVoiceConnectorResponse, [AccessDeniedException, BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates phone number product types, calling names, or phone number names. You can update one attribute at a time for each
 * `UpdatePhoneNumberRequestItem`. For example, you can update the product type, the calling name, or phone name.
 * 
 * 
 * 
 * 
 * 
 * You cannot have a duplicate `phoneNumberId` in a request.
 */export const batchUpdatePhoneNumber = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-numbers?operation=batch-update", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.BatchUpdatePhoneNumber" }, BatchUpdatePhoneNumberRequest, BatchUpdatePhoneNumberResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a proxy session for the specified Amazon Chime SDK Voice Connector for
 * the specified participant phone numbers.
 */export const createProxySession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.CreateProxySession" }, CreateProxySessionRequest, CreateProxySessionResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a SIP media application. For more information about SIP media applications, see Managing SIP media applications
 * and rules in the *Amazon Chime SDK Administrator Guide*.
 */export const createSipMediaApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.CreateSipMediaApplication" }, CreateSipMediaApplicationRequest, CreateSipMediaApplicationResponse, [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a SIP rule, which can be used to run a SIP media application as a target for a specific trigger type. For more information about SIP rules, see Managing SIP media applications
 * and rules in the *Amazon Chime SDK Administrator Guide*.
 */export const createSipRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-rules", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.CreateSipRule" }, CreateSipRuleRequest, CreateSipRuleResponse, [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon Chime SDK Voice Connector. For more information about
 * Voice Connectors,
 * see Managing Amazon Chime SDK Voice Connector groups in the Amazon Chime SDK
 * Administrator Guide.
 */export const createVoiceConnector = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.CreateVoiceConnector" }, CreateVoiceConnectorRequest, CreateVoiceConnectorResponse, [AccessDeniedException, BadRequestException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an Amazon Chime SDK Voice Connector group under the administrator's
 * AWS account. You can associate Amazon Chime SDK Voice Connectors with the
 * Voice Connector group by including `VoiceConnectorItems` in the
 * request.
 * 
 * 
 * You can include Voice Connectors from different AWS Regions in your group.
 * This creates a fault tolerant mechanism for fallback in case of availability events.
 */export const createVoiceConnectorGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connector-groups", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.CreateVoiceConnectorGroup" }, CreateVoiceConnectorGroupRequest, CreateVoiceConnectorGroupResponse, [AccessDeniedException, BadRequestException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a voice profile, which consists of an enrolled user and their latest voice print.
 * 
 * 
 * 
 * 
 * Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 * 
 * 
 * 
 * 
 * For more information about voice profiles and voice analytics, see Using Amazon Chime SDK Voice Analytics
 * in the *Amazon Chime SDK Developer Guide*.
 */export const createVoiceProfile = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profiles", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.CreateVoiceProfile" }, CreateVoiceProfileRequest, CreateVoiceProfileResponse, [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, GoneException, NotFoundException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a voice profile domain, a collection of voice profiles, their voice prints, and encrypted enrollment audio.
 * 
 * 
 * 
 * 
 * Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 * 
 * 
 * 
 * 
 * For more information about voice profile domains, see Using Amazon Chime SDK Voice Analytics
 * in the *Amazon Chime SDK Developer Guide*.
 */export const createVoiceProfileDomain = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profile-domains", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.CreateVoiceProfileDomain" }, CreateVoiceProfileDomainRequest, CreateVoiceProfileDomainResponse, [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the information for a SIP media application, including name,
 * AWS Region, and endpoints.
 */export const getSipMediaApplication = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications/{SipMediaApplicationId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetSipMediaApplication" }, GetSipMediaApplicationRequest, GetSipMediaApplicationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and
 * target endpoints.
 */export const getSipRule = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-rules/{SipRuleId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetSipRule" }, GetSipRuleRequest, GetSipRuleResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about an external systems configuration for a Voice
 * Connector.
 */export const getVoiceConnectorExternalSystemsConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/external-systems-configuration", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnectorExternalSystemsConfiguration" }, GetVoiceConnectorExternalSystemsConfigurationRequest, GetVoiceConnectorExternalSystemsConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details for the specified Amazon Chime SDK Voice Connector group,
 * such as timestamps,name, and associated `VoiceConnectorItems`.
 */export const getVoiceConnectorGroup = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connector-groups/{VoiceConnectorGroupId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnectorGroup" }, GetVoiceConnectorGroupRequest, GetVoiceConnectorGroupResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the proxy configuration details for the specified Amazon Chime SDK Voice
 * Connector.
 */export const getVoiceConnectorProxy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnectorProxy" }, GetVoiceConnectorProxyRequest, GetVoiceConnectorProxyResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves information about the last time a `SIP OPTIONS` ping
 * was received from your SIP infrastructure for the specified Amazon Chime SDK Voice
 * Connector.
 */export const getVoiceConnectorTerminationHealth = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/termination/health", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceConnectorTerminationHealth" }, GetVoiceConnectorTerminationHealthRequest, GetVoiceConnectorTerminationHealthResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of the specified voice profile domain.
 */export const getVoiceProfileDomain = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profile-domains/{VoiceProfileDomainId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceProfileDomain" }, GetVoiceProfileDomainRequest, GetVoiceProfileDomainResponse, [AccessDeniedException, BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of a voice tone analysis task.
 */export const getVoiceToneAnalysisTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetVoiceToneAnalysisTask" }, GetVoiceToneAnalysisTaskRequest, GetVoiceToneAnalysisTaskResponse, [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the countries that you can order phone numbers from.
 */export const listSupportedPhoneNumberCountries = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-number-countries", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListSupportedPhoneNumberCountries" }, ListSupportedPhoneNumberCountriesRequest, ListSupportedPhoneNumberCountriesResponse, [AccessDeniedException, BadRequestException, ForbiddenException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the specified voice profile domains in the administrator's AWS account.
 */export const listVoiceProfileDomains = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profile-domains", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListVoiceProfileDomains" }, ListVoiceProfileDomainsRequest, ListVoiceProfileDomainsResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the voice profiles in a voice profile domain.
 */export const listVoiceProfiles = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-profiles", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ListVoiceProfiles" }, ListVoiceProfilesRequest, ListVoiceProfilesResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the Alexa Skill configuration for the SIP media application.
 * 
 * 
 * 
 * 
 * Due to changes made by the Amazon Alexa service, this API is no longer available for use. For more information, refer to
 * the Alexa Smart Properties page.
 */export const putSipMediaApplicationAlexaSkillConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutSipMediaApplicationAlexaSkillConfiguration" }, PutSipMediaApplicationAlexaSkillConfigurationRequest, PutSipMediaApplicationAlexaSkillConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the logging configuration for the specified SIP media application.
 */export const putSipMediaApplicationLoggingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications/{SipMediaApplicationId}/logging-configuration", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutSipMediaApplicationLoggingConfiguration" }, PutSipMediaApplicationLoggingConfigurationRequest, PutSipMediaApplicationLoggingConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Voice Connector's logging configuration.
 */export const putVoiceConnectorLoggingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/logging-configuration", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutVoiceConnectorLoggingConfiguration" }, PutVoiceConnectorLoggingConfigurationRequest, PutVoiceConnectorLoggingConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Voice Connector's termination settings.
 */export const putVoiceConnectorTermination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/termination", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutVoiceConnectorTermination" }, PutVoiceConnectorTerminationRequest, PutVoiceConnectorTerminationResponse, [AccessDeniedException, BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a speaker search task.
 * 
 * 
 * 
 * 
 * Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 */export const startSpeakerSearchTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/speaker-search-tasks", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.StartSpeakerSearchTask" }, StartSpeakerSearchTaskRequest, StartSpeakerSearchTaskResponse, [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, GoneException, NotFoundException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException, UnprocessableEntityException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Invokes the AWS Lambda function associated with the SIP media application and
 * transaction ID in an update request. The Lambda function can then return a new set
 * of actions.
 */export const updateSipMediaApplicationCall = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications/{SipMediaApplicationId}/calls/{TransactionId}", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.UpdateSipMediaApplicationCall" }, UpdateSipMediaApplicationCallRequest, UpdateSipMediaApplicationCallResponse, [BadRequestException, ForbiddenException, NotFoundException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Validates an address to be used for 911 calls made with Amazon Chime SDK Voice
 * Connectors. You can use validated addresses in a Presence Information Data Format
 * Location Object file that you include in SIP requests. That helps ensure that addresses
 * are routed to the appropriate Public Safety Answering Point.
 */export const validateE911Address = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/emergency-calling/address", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.ValidateE911Address" }, ValidateE911AddressRequest, ValidateE911AddressResponse, [AccessDeniedException, BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an order for phone numbers to be provisioned. For numbers outside the U.S., you must use the Amazon Chime SDK SIP media application dial-in product type.
 */export const createPhoneNumberOrder = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-number-orders", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.CreatePhoneNumberOrder" }, CreatePhoneNumberOrderRequest, CreatePhoneNumberOrderResponse, [AccessDeniedException, BadRequestException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an outbound call to a phone number from the phone number specified
 * in the request, and it invokes the endpoint of the specified
 * `sipMediaApplicationId`.
 */export const createSipMediaApplicationCall = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/sip-media-applications/{SipMediaApplicationId}/calls", method: "POST", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.CreateSipMediaApplicationCall" }, CreateSipMediaApplicationCallRequest, CreateSipMediaApplicationCallResponse, [AccessDeniedException, BadRequestException, ForbiddenException, ResourceLimitExceededException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details for the specified phone number ID, such as associations,
 * capabilities, and product type.
 */export const getPhoneNumber = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/phone-numbers/{PhoneNumberId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetPhoneNumber" }, GetPhoneNumberRequest, GetPhoneNumberResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the specified proxy session details for the specified Amazon Chime SDK Voice Connector.
 */export const getProxySession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetProxySession" }, GetProxySessionRequest, GetProxySessionResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Voice Connector's emergency calling configuration.
 */export const putVoiceConnectorEmergencyCallingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutVoiceConnectorEmergencyCallingConfiguration" }, PutVoiceConnectorEmergencyCallingConfigurationRequest, PutVoiceConnectorEmergencyCallingConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Voice Connector's origination settings.
 */export const putVoiceConnectorOrigination = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/origination", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutVoiceConnectorOrigination" }, PutVoiceConnectorOriginationRequest, PutVoiceConnectorOriginationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Voice Connector's streaming configuration settings.
 */export const putVoiceConnectorStreamingConfiguration = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/streaming-configuration", method: "PUT", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.PutVoiceConnectorStreamingConfiguration" }, PutVoiceConnectorStreamingConfigurationRequest, PutVoiceConnectorStreamingConfigurationResponse, [BadRequestException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the details of the specified speaker search task.
 */export const getSpeakerSearchTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-08-03", uri: "/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}", method: "GET", sdkId: "Chime SDK Voice", sigV4ServiceName: "chime", name: "ChimeSDKTelephonyService.GetSpeakerSearchTask" }, GetSpeakerSearchTaskRequest, GetSpeakerSearchTaskResponse, [AccessDeniedException, BadRequestException, ConflictException, ForbiddenException, NotFoundException, ServiceFailureException, ServiceUnavailableException, ThrottledClientException, UnauthorizedClientException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
