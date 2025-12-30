import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetMedicalScribeStreamRequest extends S.Class<GetMedicalScribeStreamRequest>("GetMedicalScribeStreamRequest")({SessionId: S.String}) {}
export class AudioEvent extends S.Class<AudioEvent>("AudioEvent")({AudioChunk: S.optional(H.StreamBody())}) {}
export class ChannelDefinition extends S.Class<ChannelDefinition>("ChannelDefinition")({ChannelId: S.Number, ParticipantRole: S.String}) {}
export const ChannelDefinitions = S.Array(ChannelDefinition);
export class PostCallAnalyticsSettings extends S.Class<PostCallAnalyticsSettings>("PostCallAnalyticsSettings")({OutputLocation: S.String, DataAccessRoleArn: S.String, ContentRedactionOutput: S.optional(S.String), OutputEncryptionKMSKeyId: S.optional(S.String)}) {}
export class ConfigurationEvent extends S.Class<ConfigurationEvent>("ConfigurationEvent")({ChannelDefinitions: S.optional(ChannelDefinitions), PostCallAnalyticsSettings: S.optional(PostCallAnalyticsSettings)}) {}
export const AudioStream = S.Union(AudioEvent, ConfigurationEvent);
export class StartMedicalStreamTranscriptionRequest extends S.Class<StartMedicalStreamTranscriptionRequest>("StartMedicalStreamTranscriptionRequest")({LanguageCode: H.Header("x-amzn-transcribe-language-code"), MediaSampleRateHertz: H.Header("x-amzn-transcribe-sample-rate", S.Number), MediaEncoding: H.Header("x-amzn-transcribe-media-encoding"), VocabularyName: S.optional(H.Header("x-amzn-transcribe-vocabulary-name")), Specialty: H.Header("x-amzn-transcribe-specialty"), Type: H.Header("x-amzn-transcribe-type"), ShowSpeakerLabel: S.optional(H.Header("x-amzn-transcribe-show-speaker-label", S.Boolean)), SessionId: S.optional(H.Header("x-amzn-transcribe-session-id")), AudioStream: H.Body("undefined", AudioStream), EnableChannelIdentification: S.optional(H.Header("x-amzn-transcribe-enable-channel-identification", S.Boolean)), NumberOfChannels: S.optional(H.Header("x-amzn-transcribe-number-of-channels", S.Number)), ContentIdentificationType: S.optional(H.Header("x-amzn-transcribe-content-identification-type"))}) {}
export class StartStreamTranscriptionRequest extends S.Class<StartStreamTranscriptionRequest>("StartStreamTranscriptionRequest")({LanguageCode: S.optional(H.Header("x-amzn-transcribe-language-code")), MediaSampleRateHertz: H.Header("x-amzn-transcribe-sample-rate", S.Number), MediaEncoding: H.Header("x-amzn-transcribe-media-encoding"), VocabularyName: S.optional(H.Header("x-amzn-transcribe-vocabulary-name")), SessionId: S.optional(H.Header("x-amzn-transcribe-session-id")), AudioStream: H.Body("undefined", AudioStream), VocabularyFilterName: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-name")), VocabularyFilterMethod: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-method")), ShowSpeakerLabel: S.optional(H.Header("x-amzn-transcribe-show-speaker-label", S.Boolean)), EnableChannelIdentification: S.optional(H.Header("x-amzn-transcribe-enable-channel-identification", S.Boolean)), NumberOfChannels: S.optional(H.Header("x-amzn-transcribe-number-of-channels", S.Number)), EnablePartialResultsStabilization: S.optional(H.Header("x-amzn-transcribe-enable-partial-results-stabilization", S.Boolean)), PartialResultsStability: S.optional(H.Header("x-amzn-transcribe-partial-results-stability")), ContentIdentificationType: S.optional(H.Header("x-amzn-transcribe-content-identification-type")), ContentRedactionType: S.optional(H.Header("x-amzn-transcribe-content-redaction-type")), PiiEntityTypes: S.optional(H.Header("x-amzn-transcribe-pii-entity-types")), LanguageModelName: S.optional(H.Header("x-amzn-transcribe-language-model-name")), IdentifyLanguage: S.optional(H.Header("x-amzn-transcribe-identify-language", S.Boolean)), LanguageOptions: S.optional(H.Header("x-amzn-transcribe-language-options")), PreferredLanguage: S.optional(H.Header("x-amzn-transcribe-preferred-language")), IdentifyMultipleLanguages: S.optional(H.Header("x-amzn-transcribe-identify-multiple-languages", S.Boolean)), VocabularyNames: S.optional(H.Header("x-amzn-transcribe-vocabulary-names")), VocabularyFilterNames: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-names"))}) {}
export class MedicalScribeAudioEvent extends S.Class<MedicalScribeAudioEvent>("MedicalScribeAudioEvent")({AudioChunk: H.StreamBody()}) {}
export class MedicalScribeSessionControlEvent extends S.Class<MedicalScribeSessionControlEvent>("MedicalScribeSessionControlEvent")({Type: S.String}) {}
export class MedicalScribeChannelDefinition extends S.Class<MedicalScribeChannelDefinition>("MedicalScribeChannelDefinition")({ChannelId: S.Number, ParticipantRole: S.String}) {}
export const MedicalScribeChannelDefinitions = S.Array(MedicalScribeChannelDefinition);
export const KMSEncryptionContextMap = S.Record({key: S.String, value: S.String});
export class ClinicalNoteGenerationSettings extends S.Class<ClinicalNoteGenerationSettings>("ClinicalNoteGenerationSettings")({OutputBucketName: S.String, NoteTemplate: S.optional(S.String)}) {}
export class MedicalScribePatientContext extends S.Class<MedicalScribePatientContext>("MedicalScribePatientContext")({Pronouns: S.optional(S.String)}) {}
export class ClinicalNoteGenerationResult extends S.Class<ClinicalNoteGenerationResult>("ClinicalNoteGenerationResult")({ClinicalNoteOutputLocation: S.optional(S.String), TranscriptOutputLocation: S.optional(S.String), Status: S.optional(S.String), FailureReason: S.optional(S.String)}) {}
export class MedicalScribeEncryptionSettings extends S.Class<MedicalScribeEncryptionSettings>("MedicalScribeEncryptionSettings")({KmsEncryptionContext: S.optional(KMSEncryptionContextMap), KmsKeyId: S.String}) {}
export class MedicalScribePostStreamAnalyticsSettings extends S.Class<MedicalScribePostStreamAnalyticsSettings>("MedicalScribePostStreamAnalyticsSettings")({ClinicalNoteGenerationSettings: ClinicalNoteGenerationSettings}) {}
export class MedicalScribeContext extends S.Class<MedicalScribeContext>("MedicalScribeContext")({PatientContext: S.optional(MedicalScribePatientContext)}) {}
export class StartCallAnalyticsStreamTranscriptionRequest extends S.Class<StartCallAnalyticsStreamTranscriptionRequest>("StartCallAnalyticsStreamTranscriptionRequest")({LanguageCode: S.optional(H.Header("x-amzn-transcribe-language-code")), MediaSampleRateHertz: H.Header("x-amzn-transcribe-sample-rate", S.Number), MediaEncoding: H.Header("x-amzn-transcribe-media-encoding"), VocabularyName: S.optional(H.Header("x-amzn-transcribe-vocabulary-name")), SessionId: S.optional(H.Header("x-amzn-transcribe-session-id")), AudioStream: H.Body("undefined", AudioStream), VocabularyFilterName: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-name")), VocabularyFilterMethod: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-method")), LanguageModelName: S.optional(H.Header("x-amzn-transcribe-language-model-name")), IdentifyLanguage: S.optional(H.Header("x-amzn-transcribe-identify-language", S.Boolean)), LanguageOptions: S.optional(H.Header("x-amzn-transcribe-language-options")), PreferredLanguage: S.optional(H.Header("x-amzn-transcribe-preferred-language")), VocabularyNames: S.optional(H.Header("x-amzn-transcribe-vocabulary-names")), VocabularyFilterNames: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-names")), EnablePartialResultsStabilization: S.optional(H.Header("x-amzn-transcribe-enable-partial-results-stabilization", S.Boolean)), PartialResultsStability: S.optional(H.Header("x-amzn-transcribe-partial-results-stability")), ContentIdentificationType: S.optional(H.Header("x-amzn-transcribe-content-identification-type")), ContentRedactionType: S.optional(H.Header("x-amzn-transcribe-content-redaction-type")), PiiEntityTypes: S.optional(H.Header("x-amzn-transcribe-pii-entity-types"))}) {}
export class MedicalScribePostStreamAnalyticsResult extends S.Class<MedicalScribePostStreamAnalyticsResult>("MedicalScribePostStreamAnalyticsResult")({ClinicalNoteGenerationResult: S.optional(ClinicalNoteGenerationResult)}) {}
export class MedicalScribeConfigurationEvent extends S.Class<MedicalScribeConfigurationEvent>("MedicalScribeConfigurationEvent")({VocabularyName: S.optional(S.String), VocabularyFilterName: S.optional(S.String), VocabularyFilterMethod: S.optional(S.String), ResourceAccessRoleArn: S.String, ChannelDefinitions: S.optional(MedicalScribeChannelDefinitions), EncryptionSettings: S.optional(MedicalScribeEncryptionSettings), PostStreamAnalyticsSettings: MedicalScribePostStreamAnalyticsSettings, MedicalScribeContext: S.optional(MedicalScribeContext)}) {}
export class MedicalScribeStreamDetails extends S.Class<MedicalScribeStreamDetails>("MedicalScribeStreamDetails")({SessionId: S.optional(S.String), StreamCreatedAt: S.optional(S.Date), StreamEndedAt: S.optional(S.Date), LanguageCode: S.optional(S.String), MediaSampleRateHertz: S.optional(S.Number), MediaEncoding: S.optional(S.String), VocabularyName: S.optional(S.String), VocabularyFilterName: S.optional(S.String), VocabularyFilterMethod: S.optional(S.String), ResourceAccessRoleArn: S.optional(S.String), ChannelDefinitions: S.optional(MedicalScribeChannelDefinitions), EncryptionSettings: S.optional(MedicalScribeEncryptionSettings), StreamStatus: S.optional(S.String), PostStreamAnalyticsSettings: S.optional(MedicalScribePostStreamAnalyticsSettings), PostStreamAnalyticsResult: S.optional(MedicalScribePostStreamAnalyticsResult), MedicalScribeContextProvided: S.optional(S.Boolean)}) {}
export const MedicalScribeInputStream = S.Union(MedicalScribeAudioEvent, MedicalScribeSessionControlEvent, MedicalScribeConfigurationEvent);
export class GetMedicalScribeStreamResponse extends S.Class<GetMedicalScribeStreamResponse>("GetMedicalScribeStreamResponse")({MedicalScribeStreamDetails: S.optional(MedicalScribeStreamDetails)}) {}
export class StartMedicalScribeStreamRequest extends S.Class<StartMedicalScribeStreamRequest>("StartMedicalScribeStreamRequest")({SessionId: S.optional(H.Header("x-amzn-transcribe-session-id")), LanguageCode: H.Header("x-amzn-transcribe-language-code"), MediaSampleRateHertz: H.Header("x-amzn-transcribe-sample-rate", S.Number), MediaEncoding: H.Header("x-amzn-transcribe-media-encoding"), InputStream: H.Body("undefined", MedicalScribeInputStream)}) {}
export class LanguageWithScore extends S.Class<LanguageWithScore>("LanguageWithScore")({LanguageCode: S.optional(S.String), Score: S.optional(S.Number)}) {}
export const LanguageIdentification = S.Array(LanguageWithScore);
export class MedicalItem extends S.Class<MedicalItem>("MedicalItem")({StartTime: S.optional(S.Number), EndTime: S.optional(S.Number), Type: S.optional(S.String), Content: S.optional(S.String), Confidence: S.optional(S.Number), Speaker: S.optional(S.String)}) {}
export const MedicalItemList = S.Array(MedicalItem);
export class MedicalEntity extends S.Class<MedicalEntity>("MedicalEntity")({StartTime: S.optional(S.Number), EndTime: S.optional(S.Number), Category: S.optional(S.String), Content: S.optional(S.String), Confidence: S.optional(S.Number)}) {}
export const MedicalEntityList = S.Array(MedicalEntity);
export class Item extends S.Class<Item>("Item")({StartTime: S.optional(S.Number), EndTime: S.optional(S.Number), Type: S.optional(S.String), Content: S.optional(S.String), VocabularyFilterMatch: S.optional(S.Boolean), Speaker: S.optional(S.String), Confidence: S.optional(S.Number), Stable: S.optional(S.Boolean)}) {}
export const ItemList = S.Array(Item);
export class Entity extends S.Class<Entity>("Entity")({StartTime: S.optional(S.Number), EndTime: S.optional(S.Number), Category: S.optional(S.String), Type: S.optional(S.String), Content: S.optional(S.String), Confidence: S.optional(S.Number)}) {}
export const EntityList = S.Array(Entity);
export const StringList = S.Array(S.String);
export class MedicalAlternative extends S.Class<MedicalAlternative>("MedicalAlternative")({Transcript: S.optional(S.String), Items: S.optional(MedicalItemList), Entities: S.optional(MedicalEntityList)}) {}
export const MedicalAlternativeList = S.Array(MedicalAlternative);
export class Alternative extends S.Class<Alternative>("Alternative")({Transcript: S.optional(S.String), Items: S.optional(ItemList), Entities: S.optional(EntityList)}) {}
export const AlternativeList = S.Array(Alternative);
export class MedicalResult extends S.Class<MedicalResult>("MedicalResult")({ResultId: S.optional(S.String), StartTime: S.optional(S.Number), EndTime: S.optional(S.Number), IsPartial: S.optional(S.Boolean), Alternatives: S.optional(MedicalAlternativeList), ChannelId: S.optional(S.String)}) {}
export const MedicalResultList = S.Array(MedicalResult);
export class Result extends S.Class<Result>("Result")({ResultId: S.optional(S.String), StartTime: S.optional(S.Number), EndTime: S.optional(S.Number), IsPartial: S.optional(S.Boolean), Alternatives: S.optional(AlternativeList), ChannelId: S.optional(S.String), LanguageCode: S.optional(S.String), LanguageIdentification: S.optional(LanguageIdentification)}) {}
export const ResultList = S.Array(Result);
export class CallAnalyticsItem extends S.Class<CallAnalyticsItem>("CallAnalyticsItem")({BeginOffsetMillis: S.optional(S.Number), EndOffsetMillis: S.optional(S.Number), Type: S.optional(S.String), Content: S.optional(S.String), Confidence: S.optional(S.Number), VocabularyFilterMatch: S.optional(S.Boolean), Stable: S.optional(S.Boolean)}) {}
export const CallAnalyticsItemList = S.Array(CallAnalyticsItem);
export class CallAnalyticsEntity extends S.Class<CallAnalyticsEntity>("CallAnalyticsEntity")({BeginOffsetMillis: S.optional(S.Number), EndOffsetMillis: S.optional(S.Number), Category: S.optional(S.String), Type: S.optional(S.String), Content: S.optional(S.String), Confidence: S.optional(S.Number)}) {}
export const CallAnalyticsEntityList = S.Array(CallAnalyticsEntity);
export class CallAnalyticsLanguageWithScore extends S.Class<CallAnalyticsLanguageWithScore>("CallAnalyticsLanguageWithScore")({LanguageCode: S.optional(S.String), Score: S.optional(S.Number)}) {}
export const CallAnalyticsLanguageIdentification = S.Array(CallAnalyticsLanguageWithScore);
export class MedicalTranscript extends S.Class<MedicalTranscript>("MedicalTranscript")({Results: S.optional(MedicalResultList)}) {}
export class Transcript extends S.Class<Transcript>("Transcript")({Results: S.optional(ResultList)}) {}
export class MedicalTranscriptEvent extends S.Class<MedicalTranscriptEvent>("MedicalTranscriptEvent")({Transcript: S.optional(MedicalTranscript)}) {}
export class TranscriptEvent extends S.Class<TranscriptEvent>("TranscriptEvent")({Transcript: S.optional(Transcript)}) {}
export class CharacterOffsets extends S.Class<CharacterOffsets>("CharacterOffsets")({Begin: S.optional(S.Number), End: S.optional(S.Number)}) {}
export const MedicalTranscriptResultStream = S.Union(MedicalTranscriptEvent, S.suspend(() => BadRequestException), S.suspend(() => LimitExceededException), S.suspend(() => InternalFailureException), S.suspend(() => ConflictException), S.suspend(() => ServiceUnavailableException));
export const TranscriptResultStream = S.Union(TranscriptEvent, S.suspend(() => BadRequestException), S.suspend(() => LimitExceededException), S.suspend(() => InternalFailureException), S.suspend(() => ConflictException), S.suspend(() => ServiceUnavailableException));
export class IssueDetected extends S.Class<IssueDetected>("IssueDetected")({CharacterOffsets: S.optional(CharacterOffsets)}) {}
export const IssuesDetected = S.Array(IssueDetected);
export class TimestampRange extends S.Class<TimestampRange>("TimestampRange")({BeginOffsetMillis: S.optional(S.Number), EndOffsetMillis: S.optional(S.Number)}) {}
export const TimestampRanges = S.Array(TimestampRange);
export class StartMedicalStreamTranscriptionResponse extends S.Class<StartMedicalStreamTranscriptionResponse>("StartMedicalStreamTranscriptionResponse")({RequestId: S.optional(H.Header("x-amzn-request-id")), LanguageCode: S.optional(H.Header("x-amzn-transcribe-language-code")), MediaSampleRateHertz: S.optional(H.Header("x-amzn-transcribe-sample-rate", S.Number)), MediaEncoding: S.optional(H.Header("x-amzn-transcribe-media-encoding")), VocabularyName: S.optional(H.Header("x-amzn-transcribe-vocabulary-name")), Specialty: S.optional(H.Header("x-amzn-transcribe-specialty")), Type: S.optional(H.Header("x-amzn-transcribe-type")), ShowSpeakerLabel: S.optional(H.Header("x-amzn-transcribe-show-speaker-label", S.Boolean)), SessionId: S.optional(H.Header("x-amzn-transcribe-session-id")), TranscriptResultStream: S.optional(H.Body("undefined", MedicalTranscriptResultStream)), EnableChannelIdentification: S.optional(H.Header("x-amzn-transcribe-enable-channel-identification", S.Boolean)), NumberOfChannels: S.optional(H.Header("x-amzn-transcribe-number-of-channels", S.Number)), ContentIdentificationType: S.optional(H.Header("x-amzn-transcribe-content-identification-type"))}) {}
export class StartStreamTranscriptionResponse extends S.Class<StartStreamTranscriptionResponse>("StartStreamTranscriptionResponse")({RequestId: S.optional(H.Header("x-amzn-request-id")), LanguageCode: S.optional(H.Header("x-amzn-transcribe-language-code")), MediaSampleRateHertz: S.optional(H.Header("x-amzn-transcribe-sample-rate", S.Number)), MediaEncoding: S.optional(H.Header("x-amzn-transcribe-media-encoding")), VocabularyName: S.optional(H.Header("x-amzn-transcribe-vocabulary-name")), SessionId: S.optional(H.Header("x-amzn-transcribe-session-id")), TranscriptResultStream: S.optional(H.Body("undefined", TranscriptResultStream)), VocabularyFilterName: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-name")), VocabularyFilterMethod: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-method")), ShowSpeakerLabel: S.optional(H.Header("x-amzn-transcribe-show-speaker-label", S.Boolean)), EnableChannelIdentification: S.optional(H.Header("x-amzn-transcribe-enable-channel-identification", S.Boolean)), NumberOfChannels: S.optional(H.Header("x-amzn-transcribe-number-of-channels", S.Number)), EnablePartialResultsStabilization: S.optional(H.Header("x-amzn-transcribe-enable-partial-results-stabilization", S.Boolean)), PartialResultsStability: S.optional(H.Header("x-amzn-transcribe-partial-results-stability")), ContentIdentificationType: S.optional(H.Header("x-amzn-transcribe-content-identification-type")), ContentRedactionType: S.optional(H.Header("x-amzn-transcribe-content-redaction-type")), PiiEntityTypes: S.optional(H.Header("x-amzn-transcribe-pii-entity-types")), LanguageModelName: S.optional(H.Header("x-amzn-transcribe-language-model-name")), IdentifyLanguage: S.optional(H.Header("x-amzn-transcribe-identify-language", S.Boolean)), LanguageOptions: S.optional(H.Header("x-amzn-transcribe-language-options")), PreferredLanguage: S.optional(H.Header("x-amzn-transcribe-preferred-language")), IdentifyMultipleLanguages: S.optional(H.Header("x-amzn-transcribe-identify-multiple-languages", S.Boolean)), VocabularyNames: S.optional(H.Header("x-amzn-transcribe-vocabulary-names")), VocabularyFilterNames: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-names"))}) {}
export class UtteranceEvent extends S.Class<UtteranceEvent>("UtteranceEvent")({UtteranceId: S.optional(S.String), IsPartial: S.optional(S.Boolean), ParticipantRole: S.optional(S.String), BeginOffsetMillis: S.optional(S.Number), EndOffsetMillis: S.optional(S.Number), Transcript: S.optional(S.String), Items: S.optional(CallAnalyticsItemList), Entities: S.optional(CallAnalyticsEntityList), Sentiment: S.optional(S.String), IssuesDetected: S.optional(IssuesDetected), LanguageCode: S.optional(S.String), LanguageIdentification: S.optional(CallAnalyticsLanguageIdentification)}) {}
export class PointsOfInterest extends S.Class<PointsOfInterest>("PointsOfInterest")({TimestampRanges: S.optional(TimestampRanges)}) {}
export class MedicalScribeTranscriptItem extends S.Class<MedicalScribeTranscriptItem>("MedicalScribeTranscriptItem")({BeginAudioTime: S.optional(S.Number), EndAudioTime: S.optional(S.Number), Type: S.optional(S.String), Confidence: S.optional(S.Number), Content: S.optional(S.String), VocabularyFilterMatch: S.optional(S.Boolean)}) {}
export const MedicalScribeTranscriptItemList = S.Array(MedicalScribeTranscriptItem);
export const MatchedCategoryDetails = S.Record({key: S.String, value: PointsOfInterest});
export class MedicalScribeTranscriptSegment extends S.Class<MedicalScribeTranscriptSegment>("MedicalScribeTranscriptSegment")({SegmentId: S.optional(S.String), BeginAudioTime: S.optional(S.Number), EndAudioTime: S.optional(S.Number), Content: S.optional(S.String), Items: S.optional(MedicalScribeTranscriptItemList), IsPartial: S.optional(S.Boolean), ChannelId: S.optional(S.String)}) {}
export class CategoryEvent extends S.Class<CategoryEvent>("CategoryEvent")({MatchedCategories: S.optional(StringList), MatchedDetails: S.optional(MatchedCategoryDetails)}) {}
export class MedicalScribeTranscriptEvent extends S.Class<MedicalScribeTranscriptEvent>("MedicalScribeTranscriptEvent")({TranscriptSegment: S.optional(MedicalScribeTranscriptSegment)}) {}
export const CallAnalyticsTranscriptResultStream = S.Union(UtteranceEvent, CategoryEvent, S.suspend(() => BadRequestException), S.suspend(() => LimitExceededException), S.suspend(() => InternalFailureException), S.suspend(() => ConflictException), S.suspend(() => ServiceUnavailableException));
export const MedicalScribeResultStream = S.Union(MedicalScribeTranscriptEvent, S.suspend(() => BadRequestException), S.suspend(() => LimitExceededException), S.suspend(() => InternalFailureException), S.suspend(() => ConflictException), S.suspend(() => ServiceUnavailableException));
export class StartCallAnalyticsStreamTranscriptionResponse extends S.Class<StartCallAnalyticsStreamTranscriptionResponse>("StartCallAnalyticsStreamTranscriptionResponse")({RequestId: S.optional(H.Header("x-amzn-request-id")), LanguageCode: S.optional(H.Header("x-amzn-transcribe-language-code")), MediaSampleRateHertz: S.optional(H.Header("x-amzn-transcribe-sample-rate", S.Number)), MediaEncoding: S.optional(H.Header("x-amzn-transcribe-media-encoding")), VocabularyName: S.optional(H.Header("x-amzn-transcribe-vocabulary-name")), SessionId: S.optional(H.Header("x-amzn-transcribe-session-id")), CallAnalyticsTranscriptResultStream: S.optional(H.Body("undefined", CallAnalyticsTranscriptResultStream)), VocabularyFilterName: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-name")), VocabularyFilterMethod: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-method")), LanguageModelName: S.optional(H.Header("x-amzn-transcribe-language-model-name")), IdentifyLanguage: S.optional(H.Header("x-amzn-transcribe-identify-language", S.Boolean)), LanguageOptions: S.optional(H.Header("x-amzn-transcribe-language-options")), PreferredLanguage: S.optional(H.Header("x-amzn-transcribe-preferred-language")), VocabularyNames: S.optional(H.Header("x-amzn-transcribe-vocabulary-names")), VocabularyFilterNames: S.optional(H.Header("x-amzn-transcribe-vocabulary-filter-names")), EnablePartialResultsStabilization: S.optional(H.Header("x-amzn-transcribe-enable-partial-results-stabilization", S.Boolean)), PartialResultsStability: S.optional(H.Header("x-amzn-transcribe-partial-results-stability")), ContentIdentificationType: S.optional(H.Header("x-amzn-transcribe-content-identification-type")), ContentRedactionType: S.optional(H.Header("x-amzn-transcribe-content-redaction-type")), PiiEntityTypes: S.optional(H.Header("x-amzn-transcribe-pii-entity-types"))}) {}
export class StartMedicalScribeStreamResponse extends S.Class<StartMedicalScribeStreamResponse>("StartMedicalScribeStreamResponse")({SessionId: S.optional(H.Header("x-amzn-transcribe-session-id")), RequestId: S.optional(H.Header("x-amzn-request-id")), LanguageCode: S.optional(H.Header("x-amzn-transcribe-language-code")), MediaSampleRateHertz: S.optional(H.Header("x-amzn-transcribe-sample-rate", S.Number)), MediaEncoding: S.optional(H.Header("x-amzn-transcribe-media-encoding")), ResultStream: S.optional(H.Body("undefined", MedicalScribeResultStream))}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {Message: S.optional(S.String)}) {};
export class InternalFailureException extends S.TaggedError<InternalFailureException>()("InternalFailureException", {Message: S.optional(S.String)}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {Message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {Message: S.optional(S.String)}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String)}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Provides details about the specified Amazon Web Services HealthScribe streaming session.
 * To view the status of the streaming session, check the `StreamStatus` field in the response. To get the
 * details of post-stream analytics, including its status, check the `PostStreamAnalyticsResult` field in the response.
 */export const getMedicalScribeStream = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-26", uri: "/medical-scribe-stream/{SessionId}", method: "GET", sdkId: "Transcribe Streaming", sigV4ServiceName: "transcribe", name: "Transcribe.GetMedicalScribeStream" }, GetMedicalScribeStreamRequest, GetMedicalScribeStreamResponse, [BadRequestException, InternalFailureException, LimitExceededException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 * Amazon Transcribe Medical and the transcription results are streamed to your
 * application.
 * 
 * The following parameters are required:
 * 
 * - `language-code`
 * 
 * - `media-encoding`
 * 
 * - `sample-rate`
 * 
 * For more information on streaming with Amazon Transcribe Medical, see
 * Transcribing
 * streaming audio.
 */export const startMedicalStreamTranscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-26", uri: "/medical-stream-transcription", sdkId: "Transcribe Streaming", sigV4ServiceName: "transcribe", name: "Transcribe.StartMedicalStreamTranscription" }, StartMedicalStreamTranscriptionRequest, StartMedicalStreamTranscriptionResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 * Amazon Transcribe and the transcription results are streamed to your application.
 * 
 * The following parameters are required:
 * 
 * - `language-code` or `identify-language` or `identify-multiple-language`
 * 
 * - `media-encoding`
 * 
 * - `sample-rate`
 * 
 * For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.
 */export const startStreamTranscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-26", uri: "/stream-transcription", sdkId: "Transcribe Streaming", sigV4ServiceName: "transcribe", name: "Transcribe.StartStreamTranscription" }, StartStreamTranscriptionRequest, StartStreamTranscriptionResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 * Amazon Transcribe and the transcription results are streamed to your application. Use this operation
 * for Call Analytics transcriptions.
 * 
 * The following parameters are required:
 * 
 * - `language-code` or `identify-language`
 * 
 * - `media-encoding`
 * 
 * - `sample-rate`
 * 
 * For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.
 */export const startCallAnalyticsStreamTranscription = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-26", uri: "/call-analytics-stream-transcription", sdkId: "Transcribe Streaming", sigV4ServiceName: "transcribe", name: "Transcribe.StartCallAnalyticsStreamTranscription" }, StartCallAnalyticsStreamTranscriptionRequest, StartCallAnalyticsStreamTranscriptionResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a bidirectional HTTP/2 stream, where audio is streamed to
 * Amazon Web Services HealthScribe
 * and the transcription results are streamed to your application.
 * 
 * When you start a stream, you first specify the stream configuration in a `MedicalScribeConfigurationEvent`.
 * This event includes channel definitions, encryption settings, medical scribe context, and post-stream analytics settings, such as the output configuration for aggregated transcript and clinical note generation. These are additional
 * streaming session configurations beyond those provided in your initial start request headers. Whether you are starting a new session or resuming an existing session,
 * your first event must be a `MedicalScribeConfigurationEvent`.
 * 
 * After you send a `MedicalScribeConfigurationEvent`, you start `AudioEvents` and Amazon Web Services HealthScribe
 * responds with real-time transcription results. When you are finished, to start processing the results with the post-stream analytics, send a `MedicalScribeSessionControlEvent` with a `Type` of
 * `END_OF_SESSION` and Amazon Web Services HealthScribe starts the analytics.
 * 
 * You can pause or resume streaming.
 * To pause streaming, complete the input stream without sending the
 * `MedicalScribeSessionControlEvent`.
 * To resume streaming, call the `StartMedicalScribeStream` and specify the same SessionId you used to start the stream.
 * 
 * The following parameters are required:
 * 
 * - `language-code`
 * 
 * - `media-encoding`
 * 
 * - `media-sample-rate-hertz`
 * 
 * For more information on streaming with
 * Amazon Web Services HealthScribe,
 * see Amazon Web Services HealthScribe.
 */export const startMedicalScribeStream = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-10-26", uri: "/medical-scribe-stream", sdkId: "Transcribe Streaming", sigV4ServiceName: "transcribe", name: "Transcribe.StartMedicalScribeStream" }, StartMedicalScribeStreamRequest, StartMedicalScribeStreamResponse, [BadRequestException, ConflictException, InternalFailureException, LimitExceededException, ServiceUnavailableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
