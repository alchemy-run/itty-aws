import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteSessionRequest extends S.Class<DeleteSessionRequest>("DeleteSessionRequest")({botId: S.String, botAliasId: S.String, localeId: S.String, sessionId: S.String}) {}
export class GetSessionRequest extends S.Class<GetSessionRequest>("GetSessionRequest")({botId: S.String, botAliasId: S.String, localeId: S.String, sessionId: S.String}) {}
export class ElicitSubSlot extends S.Class<ElicitSubSlot>("ElicitSubSlot")({name: S.String, subSlotToElicit: S.optional(S.suspend((): S.Schema<ElicitSubSlot> => ElicitSubSlot))}) {}
export class DialogAction extends S.Class<DialogAction>("DialogAction")({type: S.String, slotToElicit: S.optional(S.String), slotElicitationStyle: S.optional(S.String), subSlotToElicit: S.optional(ElicitSubSlot)}) {}
export const Slots = S.Record({key: S.String, value: Slot});
export class Intent extends S.Class<Intent>("Intent")({name: S.String, slots: S.optional(Slots), state: S.optional(S.String), confirmationState: S.optional(S.String)}) {}
export class ActiveContextTimeToLive extends S.Class<ActiveContextTimeToLive>("ActiveContextTimeToLive")({timeToLiveInSeconds: S.Number, turnsToLive: S.Number}) {}
export const ActiveContextParametersMap = S.Record({key: S.String, value: S.String});
export class ActiveContext extends S.Class<ActiveContext>("ActiveContext")({name: S.String, timeToLive: ActiveContextTimeToLive, contextAttributes: ActiveContextParametersMap}) {}
export const ActiveContextsList = S.Array(ActiveContext);
export const StringMap = S.Record({key: S.String, value: S.String});
export const SlotHintsSlotMap = S.Record({key: S.String, value: RuntimeHintDetails});
export const SlotHintsIntentMap = S.Record({key: S.String, value: SlotHintsSlotMap});
export class RuntimeHints extends S.Class<RuntimeHints>("RuntimeHints")({slotHints: S.optional(SlotHintsIntentMap)}) {}
export class SessionState extends S.Class<SessionState>("SessionState")({dialogAction: S.optional(DialogAction), intent: S.optional(Intent), activeContexts: S.optional(ActiveContextsList), sessionAttributes: S.optional(StringMap), originatingRequestId: S.optional(S.String), runtimeHints: S.optional(RuntimeHints)}) {}
export class RecognizeTextRequest extends S.Class<RecognizeTextRequest>("RecognizeTextRequest")({botId: S.String, botAliasId: S.String, localeId: S.String, sessionId: S.String, text: S.String, sessionState: S.optional(SessionState), requestAttributes: S.optional(StringMap)}) {}
export class RecognizeUtteranceRequest extends S.Class<RecognizeUtteranceRequest>("RecognizeUtteranceRequest")({botId: S.String, botAliasId: S.String, localeId: S.String, sessionId: S.String, sessionState: S.optional(H.Header("x-amz-lex-session-state")), requestAttributes: S.optional(H.Header("x-amz-lex-request-attributes")), requestContentType: H.Header("Content-Type"), responseContentType: S.optional(H.Header("Response-Content-Type")), inputStream: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class DeleteSessionResponse extends S.Class<DeleteSessionResponse>("DeleteSessionResponse")({botId: S.optional(S.String), botAliasId: S.optional(S.String), localeId: S.optional(S.String), sessionId: S.optional(S.String)}) {}
export class RecognizeUtteranceResponse extends S.Class<RecognizeUtteranceResponse>("RecognizeUtteranceResponse")({inputMode: S.optional(H.Header("x-amz-lex-input-mode")), contentType: S.optional(H.Header("Content-Type")), messages: S.optional(H.Header("x-amz-lex-messages")), interpretations: S.optional(H.Header("x-amz-lex-interpretations")), sessionState: S.optional(H.Header("x-amz-lex-session-state")), requestAttributes: S.optional(H.Header("x-amz-lex-request-attributes")), sessionId: S.optional(H.Header("x-amz-lex-session-id")), inputTranscript: S.optional(H.Header("x-amz-lex-input-transcript")), audioStream: S.optional(H.Body("undefined", H.StreamBody())), recognizedBotMember: S.optional(H.Header("x-amz-lex-recognized-bot-member"))}) {}
export class Button extends S.Class<Button>("Button")({text: S.String, value: S.String}) {}
export const ButtonsList = S.Array(Button);
export class ImageResponseCard extends S.Class<ImageResponseCard>("ImageResponseCard")({title: S.String, subtitle: S.optional(S.String), imageUrl: S.optional(S.String), buttons: S.optional(ButtonsList)}) {}
export class Message extends S.Class<Message>("Message")({content: S.optional(S.String), contentType: S.String, imageResponseCard: S.optional(ImageResponseCard)}) {}
export const Messages = S.Array(Message);
export class ConfigurationEvent extends S.Class<ConfigurationEvent>("ConfigurationEvent")({requestAttributes: S.optional(StringMap), responseContentType: S.String, sessionState: S.optional(SessionState), welcomeMessages: S.optional(Messages), disablePlayback: S.optional(S.Boolean), eventId: S.optional(S.String), clientTimestampMillis: S.optional(S.Number)}) {}
export class AudioInputEvent extends S.Class<AudioInputEvent>("AudioInputEvent")({audioChunk: S.optional(H.StreamBody()), contentType: S.String, eventId: S.optional(S.String), clientTimestampMillis: S.optional(S.Number)}) {}
export class DTMFInputEvent extends S.Class<DTMFInputEvent>("DTMFInputEvent")({inputCharacter: S.String, eventId: S.optional(S.String), clientTimestampMillis: S.optional(S.Number)}) {}
export class TextInputEvent extends S.Class<TextInputEvent>("TextInputEvent")({text: S.String, eventId: S.optional(S.String), clientTimestampMillis: S.optional(S.Number)}) {}
export class PlaybackCompletionEvent extends S.Class<PlaybackCompletionEvent>("PlaybackCompletionEvent")({eventId: S.optional(S.String), clientTimestampMillis: S.optional(S.Number)}) {}
export class DisconnectionEvent extends S.Class<DisconnectionEvent>("DisconnectionEvent")({eventId: S.optional(S.String), clientTimestampMillis: S.optional(S.Number)}) {}
export class RecognizedBotMember extends S.Class<RecognizedBotMember>("RecognizedBotMember")({botId: S.String, botName: S.optional(S.String)}) {}
export const StartConversationRequestEventStream = S.Union(ConfigurationEvent, AudioInputEvent, DTMFInputEvent, TextInputEvent, PlaybackCompletionEvent, DisconnectionEvent);
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export const Values = S.Array(S.suspend((): S.Schema<Slot> => Slot));
export class ConfidenceScore extends S.Class<ConfidenceScore>("ConfidenceScore")({score: S.optional(S.Number)}) {}
export class SentimentScore extends S.Class<SentimentScore>("SentimentScore")({positive: S.optional(S.Number), negative: S.optional(S.Number), neutral: S.optional(S.Number), mixed: S.optional(S.Number)}) {}
export class SentimentResponse extends S.Class<SentimentResponse>("SentimentResponse")({sentiment: S.optional(S.String), sentimentScore: S.optional(SentimentScore)}) {}
export class Interpretation extends S.Class<Interpretation>("Interpretation")({nluConfidence: S.optional(ConfidenceScore), sentimentResponse: S.optional(SentimentResponse), intent: S.optional(Intent), interpretationSource: S.optional(S.String)}) {}
export const Interpretations = S.Array(Interpretation);
export class RecognizeTextResponse extends S.Class<RecognizeTextResponse>("RecognizeTextResponse")({messages: S.optional(Messages), sessionState: S.optional(SessionState), interpretations: S.optional(Interpretations), requestAttributes: S.optional(StringMap), sessionId: S.optional(S.String), recognizedBotMember: S.optional(RecognizedBotMember)}) {}
export class BadGatewayException extends S.Class<BadGatewayException>("BadGatewayException")({message: S.String}) {}
export class StartConversationRequest extends S.Class<StartConversationRequest>("StartConversationRequest")({botId: S.String, botAliasId: S.String, localeId: S.String, sessionId: S.String, conversationMode: S.optional(H.Header("x-amz-lex-conversation-mode")), requestEventStream: H.Body("undefined", StartConversationRequestEventStream)}) {}
export const StringList = S.Array(S.String);
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.String}) {}
export class Value extends S.Class<Value>("Value")({originalValue: S.optional(S.String), interpretedValue: S.String, resolvedValues: S.optional(StringList)}) {}
export class DependencyFailedException extends S.Class<DependencyFailedException>("DependencyFailedException")({message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class Slot extends S.Class<Slot>("Slot")({value: S.optional(Value), shape: S.optional(S.String), values: S.optional(S.suspend(() => Values)), subSlots: S.optional(S.suspend(() => Slots))}) {}
export class RuntimeHintValue extends S.Class<RuntimeHintValue>("RuntimeHintValue")({phrase: S.String}) {}
export const RuntimeHintValuesList = S.Array(RuntimeHintValue);
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String}) {}
export class GetSessionResponse extends S.Class<GetSessionResponse>("GetSessionResponse")({sessionId: S.optional(S.String), messages: S.optional(Messages), interpretations: S.optional(Interpretations), sessionState: S.optional(SessionState)}) {}
export class RuntimeHintDetails extends S.Class<RuntimeHintDetails>("RuntimeHintDetails")({runtimeHintValues: S.optional(RuntimeHintValuesList), subSlotHints: S.optional(S.suspend(() => SlotHintsSlotMap))}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String}) {}
export class PlaybackInterruptionEvent extends S.Class<PlaybackInterruptionEvent>("PlaybackInterruptionEvent")({eventReason: S.optional(S.String), causedByEventId: S.optional(S.String), eventId: S.optional(S.String)}) {}
export class TranscriptEvent extends S.Class<TranscriptEvent>("TranscriptEvent")({transcript: S.optional(S.String), eventId: S.optional(S.String)}) {}
export class IntentResultEvent extends S.Class<IntentResultEvent>("IntentResultEvent")({inputMode: S.optional(S.String), interpretations: S.optional(Interpretations), sessionState: S.optional(SessionState), requestAttributes: S.optional(StringMap), sessionId: S.optional(S.String), eventId: S.optional(S.String), recognizedBotMember: S.optional(RecognizedBotMember)}) {}
export class TextResponseEvent extends S.Class<TextResponseEvent>("TextResponseEvent")({messages: S.optional(Messages), eventId: S.optional(S.String)}) {}
export class AudioResponseEvent extends S.Class<AudioResponseEvent>("AudioResponseEvent")({audioChunk: S.optional(H.StreamBody()), contentType: S.optional(S.String), eventId: S.optional(S.String)}) {}
export class HeartbeatEvent extends S.Class<HeartbeatEvent>("HeartbeatEvent")({eventId: S.optional(S.String)}) {}
export const StartConversationResponseEventStream = S.Union(PlaybackInterruptionEvent, TranscriptEvent, IntentResultEvent, TextResponseEvent, AudioResponseEvent, HeartbeatEvent, AccessDeniedException, ResourceNotFoundException, ValidationException, ThrottlingException, InternalServerException, ConflictException, DependencyFailedException, BadGatewayException);
export class StartConversationResponse extends S.Class<StartConversationResponse>("StartConversationResponse")({responseEventStream: S.optional(H.Body("undefined", StartConversationResponseEventStream))}) {}
export class PutSessionRequest extends S.Class<PutSessionRequest>("PutSessionRequest")({botId: S.String, botAliasId: S.String, localeId: S.String, sessionId: S.String, messages: S.optional(Messages), sessionState: SessionState, requestAttributes: S.optional(StringMap), responseContentType: S.optional(H.Header("ResponseContentType"))}) {}
export class PutSessionResponse extends S.Class<PutSessionResponse>("PutSessionResponse")({contentType: S.optional(H.Header("Content-Type")), messages: S.optional(H.Header("x-amz-lex-messages")), sessionState: S.optional(H.Header("x-amz-lex-session-state")), requestAttributes: S.optional(H.Header("x-amz-lex-request-attributes")), sessionId: S.optional(H.Header("x-amz-lex-session-id")), audioStream: S.optional(H.Body("undefined", H.StreamBody()))}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class BadGatewayExceptionError extends S.TaggedError<BadGatewayExceptionError>()("BadGatewayException", BadGatewayException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class DependencyFailedExceptionError extends S.TaggedError<DependencyFailedExceptionError>()("DependencyFailedException", DependencyFailedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const deleteSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-07", uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}", method: "DELETE", sdkId: "Lex Runtime V2", sigV4ServiceName: "lex", name: "AWSDeepSenseRunTimeServiceApi2_0.DeleteSession" }, DeleteSessionRequest, DeleteSessionResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-07", uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}", method: "GET", sdkId: "Lex Runtime V2", sigV4ServiceName: "lex", name: "AWSDeepSenseRunTimeServiceApi2_0.GetSession" }, GetSessionRequest, GetSessionResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const recognizeText = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-07", uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text", method: "POST", sdkId: "Lex Runtime V2", sigV4ServiceName: "lex", name: "AWSDeepSenseRunTimeServiceApi2_0.RecognizeText" }, RecognizeTextRequest, RecognizeTextResponse, [AccessDeniedExceptionError, BadGatewayExceptionError, ConflictExceptionError, DependencyFailedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const recognizeUtterance = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-07", uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance", method: "POST", sdkId: "Lex Runtime V2", sigV4ServiceName: "lex", name: "AWSDeepSenseRunTimeServiceApi2_0.RecognizeUtterance" }, RecognizeUtteranceRequest, RecognizeUtteranceResponse, [AccessDeniedExceptionError, BadGatewayExceptionError, ConflictExceptionError, DependencyFailedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startConversation = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-07", uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation", method: "POST", sdkId: "Lex Runtime V2", sigV4ServiceName: "lex", name: "AWSDeepSenseRunTimeServiceApi2_0.StartConversation" }, StartConversationRequest, StartConversationResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-07", uri: "/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}", method: "POST", sdkId: "Lex Runtime V2", sigV4ServiceName: "lex", name: "AWSDeepSenseRunTimeServiceApi2_0.PutSession" }, PutSessionRequest, PutSessionResponse, [AccessDeniedExceptionError, BadGatewayExceptionError, ConflictExceptionError, DependencyFailedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
