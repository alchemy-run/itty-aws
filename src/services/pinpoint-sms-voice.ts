import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class CreateConfigurationSetRequest extends S.Class<CreateConfigurationSetRequest>("CreateConfigurationSetRequest")({ConfigurationSetName: S.optional(S.String)}) {}
export class CreateConfigurationSetResponse extends S.Class<CreateConfigurationSetResponse>("CreateConfigurationSetResponse")({}) {}
export class DeleteConfigurationSetRequest extends S.Class<DeleteConfigurationSetRequest>("DeleteConfigurationSetRequest")({ConfigurationSetName: S.String}) {}
export class DeleteConfigurationSetResponse extends S.Class<DeleteConfigurationSetResponse>("DeleteConfigurationSetResponse")({}) {}
export class DeleteConfigurationSetEventDestinationRequest extends S.Class<DeleteConfigurationSetEventDestinationRequest>("DeleteConfigurationSetEventDestinationRequest")({ConfigurationSetName: S.String, EventDestinationName: S.String}) {}
export class DeleteConfigurationSetEventDestinationResponse extends S.Class<DeleteConfigurationSetEventDestinationResponse>("DeleteConfigurationSetEventDestinationResponse")({}) {}
export class GetConfigurationSetEventDestinationsRequest extends S.Class<GetConfigurationSetEventDestinationsRequest>("GetConfigurationSetEventDestinationsRequest")({ConfigurationSetName: S.String}) {}
export class ListConfigurationSetsRequest extends S.Class<ListConfigurationSetsRequest>("ListConfigurationSetsRequest")({NextToken: S.optional(S.String), PageSize: S.optional(S.String)}) {}
export class CloudWatchLogsDestination extends S.Class<CloudWatchLogsDestination>("CloudWatchLogsDestination")({IamRoleArn: S.optional(S.String), LogGroupArn: S.optional(S.String)}) {}
export class KinesisFirehoseDestination extends S.Class<KinesisFirehoseDestination>("KinesisFirehoseDestination")({DeliveryStreamArn: S.optional(S.String), IamRoleArn: S.optional(S.String)}) {}
export const EventTypes = S.Array(S.String);
export class SnsDestination extends S.Class<SnsDestination>("SnsDestination")({TopicArn: S.optional(S.String)}) {}
export class EventDestinationDefinition extends S.Class<EventDestinationDefinition>("EventDestinationDefinition")({CloudWatchLogsDestination: S.optional(CloudWatchLogsDestination), Enabled: S.optional(S.Boolean), KinesisFirehoseDestination: S.optional(KinesisFirehoseDestination), MatchingEventTypes: S.optional(EventTypes), SnsDestination: S.optional(SnsDestination)}) {}
export class UpdateConfigurationSetEventDestinationRequest extends S.Class<UpdateConfigurationSetEventDestinationRequest>("UpdateConfigurationSetEventDestinationRequest")({ConfigurationSetName: S.String, EventDestination: S.optional(EventDestinationDefinition), EventDestinationName: S.String}) {}
export class UpdateConfigurationSetEventDestinationResponse extends S.Class<UpdateConfigurationSetEventDestinationResponse>("UpdateConfigurationSetEventDestinationResponse")({}) {}
export const ConfigurationSets = S.Array(S.String);
export class ListConfigurationSetsResponse extends S.Class<ListConfigurationSetsResponse>("ListConfigurationSetsResponse")({ConfigurationSets: S.optional(ConfigurationSets), NextToken: S.optional(S.String)}) {}
export class CallInstructionsMessageType extends S.Class<CallInstructionsMessageType>("CallInstructionsMessageType")({Text: S.optional(S.String)}) {}
export class PlainTextMessageType extends S.Class<PlainTextMessageType>("PlainTextMessageType")({LanguageCode: S.optional(S.String), Text: S.optional(S.String), VoiceId: S.optional(S.String)}) {}
export class SSMLMessageType extends S.Class<SSMLMessageType>("SSMLMessageType")({LanguageCode: S.optional(S.String), Text: S.optional(S.String), VoiceId: S.optional(S.String)}) {}
export class EventDestination extends S.Class<EventDestination>("EventDestination")({CloudWatchLogsDestination: S.optional(CloudWatchLogsDestination), Enabled: S.optional(S.Boolean), KinesisFirehoseDestination: S.optional(KinesisFirehoseDestination), MatchingEventTypes: S.optional(EventTypes), Name: S.optional(S.String), SnsDestination: S.optional(SnsDestination)}) {}
export const EventDestinations = S.Array(EventDestination);
export class VoiceMessageContent extends S.Class<VoiceMessageContent>("VoiceMessageContent")({CallInstructionsMessage: S.optional(CallInstructionsMessageType), PlainTextMessage: S.optional(PlainTextMessageType), SSMLMessage: S.optional(SSMLMessageType)}) {}
export class CreateConfigurationSetEventDestinationRequest extends S.Class<CreateConfigurationSetEventDestinationRequest>("CreateConfigurationSetEventDestinationRequest")({ConfigurationSetName: S.String, EventDestination: S.optional(EventDestinationDefinition), EventDestinationName: S.optional(S.String)}) {}
export class CreateConfigurationSetEventDestinationResponse extends S.Class<CreateConfigurationSetEventDestinationResponse>("CreateConfigurationSetEventDestinationResponse")({}) {}
export class GetConfigurationSetEventDestinationsResponse extends S.Class<GetConfigurationSetEventDestinationsResponse>("GetConfigurationSetEventDestinationsResponse")({EventDestinations: S.optional(EventDestinations)}) {}
export class SendVoiceMessageRequest extends S.Class<SendVoiceMessageRequest>("SendVoiceMessageRequest")({CallerId: S.optional(S.String), ConfigurationSetName: S.optional(S.String), Content: S.optional(VoiceMessageContent), DestinationPhoneNumber: S.optional(S.String), OriginationPhoneNumber: S.optional(S.String)}) {}
export class SendVoiceMessageResponse extends S.Class<SendVoiceMessageResponse>("SendVoiceMessageResponse")({MessageId: S.optional(S.String)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class InternalServiceErrorException extends S.TaggedError<InternalServiceErrorException>()("InternalServiceErrorException", {}) {};
export class AlreadyExistsException extends S.TaggedError<AlreadyExistsException>()("AlreadyExistsException", {Message: S.optional(S.String)}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes an event destination in a configuration set.
 */export const deleteConfigurationSetEventDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-05", uri: "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", method: "DELETE", sdkId: "Pinpoint SMS Voice", sigV4ServiceName: "sms-voice", name: "PinpointSMSVoice.DeleteConfigurationSetEventDestination" }, DeleteConfigurationSetEventDestinationRequest, DeleteConfigurationSetEventDestinationResponse, [BadRequestException, InternalServiceErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
 */export const listConfigurationSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-05", uri: "/v1/sms-voice/configuration-sets", method: "GET", sdkId: "Pinpoint SMS Voice", sigV4ServiceName: "sms-voice", name: "PinpointSMSVoice.ListConfigurationSets" }, ListConfigurationSetsRequest, ListConfigurationSetsResponse, [BadRequestException, InternalServiceErrorException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
 */export const updateConfigurationSetEventDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-05", uri: "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", method: "PUT", sdkId: "Pinpoint SMS Voice", sigV4ServiceName: "sms-voice", name: "PinpointSMSVoice.UpdateConfigurationSetEventDestination" }, UpdateConfigurationSetEventDestinationRequest, UpdateConfigurationSetEventDestinationResponse, [BadRequestException, InternalServiceErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
 */export const createConfigurationSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-05", uri: "/v1/sms-voice/configuration-sets", method: "POST", sdkId: "Pinpoint SMS Voice", sigV4ServiceName: "sms-voice", name: "PinpointSMSVoice.CreateConfigurationSet" }, CreateConfigurationSetRequest, CreateConfigurationSetResponse, [AlreadyExistsException, BadRequestException, InternalServiceErrorException, LimitExceededException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a new event destination in a configuration set.
 */export const createConfigurationSetEventDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-05", uri: "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations", method: "POST", sdkId: "Pinpoint SMS Voice", sigV4ServiceName: "sms-voice", name: "PinpointSMSVoice.CreateConfigurationSetEventDestination" }, CreateConfigurationSetEventDestinationRequest, CreateConfigurationSetEventDestinationResponse, [AlreadyExistsException, BadRequestException, InternalServiceErrorException, LimitExceededException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing configuration set.
 */export const deleteConfigurationSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-05", uri: "/v1/sms-voice/configuration-sets/{ConfigurationSetName}", method: "DELETE", sdkId: "Pinpoint SMS Voice", sigV4ServiceName: "sms-voice", name: "PinpointSMSVoice.DeleteConfigurationSet" }, DeleteConfigurationSetRequest, DeleteConfigurationSetResponse, [BadRequestException, InternalServiceErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
 */export const getConfigurationSetEventDestinations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-05", uri: "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations", method: "GET", sdkId: "Pinpoint SMS Voice", sigV4ServiceName: "sms-voice", name: "PinpointSMSVoice.GetConfigurationSetEventDestinations" }, GetConfigurationSetEventDestinationsRequest, GetConfigurationSetEventDestinationsResponse, [BadRequestException, InternalServiceErrorException, NotFoundException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a new voice message and send it to a recipient's phone number.
 */export const sendVoiceMessage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-09-05", uri: "/v1/sms-voice/voice/message", method: "POST", sdkId: "Pinpoint SMS Voice", sigV4ServiceName: "sms-voice", name: "PinpointSMSVoice.SendVoiceMessage" }, SendVoiceMessageRequest, SendVoiceMessageResponse, [BadRequestException, InternalServiceErrorException, TooManyRequestsException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
