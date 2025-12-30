import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const LexiconNameList = S.Array(S.String);
export const SpeechMarkTypeList = S.Array(S.String);
export class DeleteLexiconInput extends S.Class<DeleteLexiconInput>("DeleteLexiconInput")({Name: S.String}) {}
export class DeleteLexiconOutput extends S.Class<DeleteLexiconOutput>("DeleteLexiconOutput")({}) {}
export class DescribeVoicesInput extends S.Class<DescribeVoicesInput>("DescribeVoicesInput")({Engine: S.optional(S.String), LanguageCode: S.optional(S.String), IncludeAdditionalLanguageCodes: S.optional(S.Boolean), NextToken: S.optional(S.String)}) {}
export class GetLexiconInput extends S.Class<GetLexiconInput>("GetLexiconInput")({Name: S.String}) {}
export class GetSpeechSynthesisTaskInput extends S.Class<GetSpeechSynthesisTaskInput>("GetSpeechSynthesisTaskInput")({TaskId: S.String}) {}
export class ListLexiconsInput extends S.Class<ListLexiconsInput>("ListLexiconsInput")({NextToken: S.optional(S.String)}) {}
export class ListSpeechSynthesisTasksInput extends S.Class<ListSpeechSynthesisTasksInput>("ListSpeechSynthesisTasksInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), Status: S.optional(S.String)}) {}
export class PutLexiconInput extends S.Class<PutLexiconInput>("PutLexiconInput")({Name: S.String, Content: S.String}) {}
export class PutLexiconOutput extends S.Class<PutLexiconOutput>("PutLexiconOutput")({}) {}
export class StartSpeechSynthesisTaskInput extends S.Class<StartSpeechSynthesisTaskInput>("StartSpeechSynthesisTaskInput")({Engine: S.optional(S.String), LanguageCode: S.optional(S.String), LexiconNames: S.optional(LexiconNameList), OutputFormat: S.String, OutputS3BucketName: S.String, OutputS3KeyPrefix: S.optional(S.String), SampleRate: S.optional(S.String), SnsTopicArn: S.optional(S.String), SpeechMarkTypes: S.optional(SpeechMarkTypeList), Text: S.String, TextType: S.optional(S.String), VoiceId: S.String}) {}
export class SynthesizeSpeechInput extends S.Class<SynthesizeSpeechInput>("SynthesizeSpeechInput")({Engine: S.optional(S.String), LanguageCode: S.optional(S.String), LexiconNames: S.optional(LexiconNameList), OutputFormat: S.String, SampleRate: S.optional(S.String), SpeechMarkTypes: S.optional(SpeechMarkTypeList), Text: S.String, TextType: S.optional(S.String), VoiceId: S.String}) {}
export class SynthesisTask extends S.Class<SynthesisTask>("SynthesisTask")({Engine: S.optional(S.String), TaskId: S.optional(S.String), TaskStatus: S.optional(S.String), TaskStatusReason: S.optional(S.String), OutputUri: S.optional(S.String), CreationTime: S.optional(S.Date), RequestCharacters: S.optional(S.Number), SnsTopicArn: S.optional(S.String), LexiconNames: S.optional(LexiconNameList), OutputFormat: S.optional(S.String), SampleRate: S.optional(S.String), SpeechMarkTypes: S.optional(SpeechMarkTypeList), TextType: S.optional(S.String), VoiceId: S.optional(S.String), LanguageCode: S.optional(S.String)}) {}
export const SynthesisTasks = S.Array(SynthesisTask);
export class LexiconNotFoundException extends S.Class<LexiconNotFoundException>("LexiconNotFoundException")({message: S.optional(S.String)}) {}
export class ListSpeechSynthesisTasksOutput extends S.Class<ListSpeechSynthesisTasksOutput>("ListSpeechSynthesisTasksOutput")({NextToken: S.optional(S.String), SynthesisTasks: S.optional(SynthesisTasks)}) {}
export class InvalidLexiconException extends S.Class<InvalidLexiconException>("InvalidLexiconException")({message: S.optional(S.String)}) {}
export class StartSpeechSynthesisTaskOutput extends S.Class<StartSpeechSynthesisTaskOutput>("StartSpeechSynthesisTaskOutput")({SynthesisTask: S.optional(SynthesisTask)}) {}
export class SynthesizeSpeechOutput extends S.Class<SynthesizeSpeechOutput>("SynthesizeSpeechOutput")({AudioStream: S.optional(H.Body("undefined", H.StreamBody())), ContentType: S.optional(H.Header("Content-Type")), RequestCharacters: S.optional(H.Header("x-amzn-RequestCharacters", S.Number))}) {}
export const LanguageCodeList = S.Array(S.String);
export const EngineList = S.Array(S.String);
export class Voice extends S.Class<Voice>("Voice")({Gender: S.optional(S.String), Id: S.optional(S.String), LanguageCode: S.optional(S.String), LanguageName: S.optional(S.String), Name: S.optional(S.String), AdditionalLanguageCodes: S.optional(LanguageCodeList), SupportedEngines: S.optional(EngineList)}) {}
export const VoiceList = S.Array(Voice);
export class Lexicon extends S.Class<Lexicon>("Lexicon")({Content: S.optional(S.String), Name: S.optional(S.String)}) {}
export class LexiconAttributes extends S.Class<LexiconAttributes>("LexiconAttributes")({Alphabet: S.optional(S.String), LanguageCode: S.optional(S.String), LastModified: S.optional(S.Date), LexiconArn: S.optional(S.String), LexemesCount: S.optional(S.Number), Size: S.optional(S.Number)}) {}
export class LexiconDescription extends S.Class<LexiconDescription>("LexiconDescription")({Name: S.optional(S.String), Attributes: S.optional(LexiconAttributes)}) {}
export const LexiconDescriptionList = S.Array(LexiconDescription);
export class ServiceFailureException extends S.Class<ServiceFailureException>("ServiceFailureException")({message: S.optional(S.String)}) {}
export class DescribeVoicesOutput extends S.Class<DescribeVoicesOutput>("DescribeVoicesOutput")({Voices: S.optional(VoiceList), NextToken: S.optional(S.String)}) {}
export class GetLexiconOutput extends S.Class<GetLexiconOutput>("GetLexiconOutput")({Lexicon: S.optional(Lexicon), LexiconAttributes: S.optional(LexiconAttributes)}) {}
export class GetSpeechSynthesisTaskOutput extends S.Class<GetSpeechSynthesisTaskOutput>("GetSpeechSynthesisTaskOutput")({SynthesisTask: S.optional(SynthesisTask)}) {}
export class ListLexiconsOutput extends S.Class<ListLexiconsOutput>("ListLexiconsOutput")({Lexicons: S.optional(LexiconDescriptionList), NextToken: S.optional(S.String)}) {}
export class InvalidNextTokenException extends S.Class<InvalidNextTokenException>("InvalidNextTokenException")({message: S.optional(S.String)}) {}
export class LexiconSizeExceededException extends S.Class<LexiconSizeExceededException>("LexiconSizeExceededException")({message: S.optional(S.String)}) {}
export class EngineNotSupportedException extends S.Class<EngineNotSupportedException>("EngineNotSupportedException")({message: S.optional(S.String)}) {}
export class InvalidSampleRateException extends S.Class<InvalidSampleRateException>("InvalidSampleRateException")({message: S.optional(S.String)}) {}
export class InvalidTaskIdException extends S.Class<InvalidTaskIdException>("InvalidTaskIdException")({message: S.optional(S.String)}) {}
export class MaxLexemeLengthExceededException extends S.Class<MaxLexemeLengthExceededException>("MaxLexemeLengthExceededException")({message: S.optional(S.String)}) {}
export class InvalidS3BucketException extends S.Class<InvalidS3BucketException>("InvalidS3BucketException")({message: S.optional(S.String)}) {}
export class InvalidSsmlException extends S.Class<InvalidSsmlException>("InvalidSsmlException")({message: S.optional(S.String)}) {}
export class SynthesisTaskNotFoundException extends S.Class<SynthesisTaskNotFoundException>("SynthesisTaskNotFoundException")({message: S.optional(S.String)}) {}
export class MaxLexiconsNumberExceededException extends S.Class<MaxLexiconsNumberExceededException>("MaxLexiconsNumberExceededException")({message: S.optional(S.String)}) {}
export class InvalidS3KeyException extends S.Class<InvalidS3KeyException>("InvalidS3KeyException")({message: S.optional(S.String)}) {}
export class LanguageNotSupportedException extends S.Class<LanguageNotSupportedException>("LanguageNotSupportedException")({message: S.optional(S.String)}) {}
export class UnsupportedPlsAlphabetException extends S.Class<UnsupportedPlsAlphabetException>("UnsupportedPlsAlphabetException")({message: S.optional(S.String)}) {}
export class InvalidSnsTopicArnException extends S.Class<InvalidSnsTopicArnException>("InvalidSnsTopicArnException")({message: S.optional(S.String)}) {}
export class MarksNotSupportedForFormatException extends S.Class<MarksNotSupportedForFormatException>("MarksNotSupportedForFormatException")({message: S.optional(S.String)}) {}
export class UnsupportedPlsLanguageException extends S.Class<UnsupportedPlsLanguageException>("UnsupportedPlsLanguageException")({message: S.optional(S.String)}) {}
export class SsmlMarksNotSupportedForTextTypeException extends S.Class<SsmlMarksNotSupportedForTextTypeException>("SsmlMarksNotSupportedForTextTypeException")({message: S.optional(S.String)}) {}
export class TextLengthExceededException extends S.Class<TextLengthExceededException>("TextLengthExceededException")({message: S.optional(S.String)}) {}

//# Errors
export class LexiconNotFoundExceptionError extends S.TaggedError<LexiconNotFoundExceptionError>()("LexiconNotFoundException", LexiconNotFoundException.fields) {};
export class InvalidLexiconExceptionError extends S.TaggedError<InvalidLexiconExceptionError>()("InvalidLexiconException", InvalidLexiconException.fields) {};
export class EngineNotSupportedExceptionError extends S.TaggedError<EngineNotSupportedExceptionError>()("EngineNotSupportedException", EngineNotSupportedException.fields) {};
export class ServiceFailureExceptionError extends S.TaggedError<ServiceFailureExceptionError>()("ServiceFailureException", ServiceFailureException.fields) {};
export class InvalidNextTokenExceptionError extends S.TaggedError<InvalidNextTokenExceptionError>()("InvalidNextTokenException", InvalidNextTokenException.fields) {};
export class LexiconSizeExceededExceptionError extends S.TaggedError<LexiconSizeExceededExceptionError>()("LexiconSizeExceededException", LexiconSizeExceededException.fields) {};
export class InvalidSampleRateExceptionError extends S.TaggedError<InvalidSampleRateExceptionError>()("InvalidSampleRateException", InvalidSampleRateException.fields) {};
export class InvalidTaskIdExceptionError extends S.TaggedError<InvalidTaskIdExceptionError>()("InvalidTaskIdException", InvalidTaskIdException.fields) {};
export class MaxLexemeLengthExceededExceptionError extends S.TaggedError<MaxLexemeLengthExceededExceptionError>()("MaxLexemeLengthExceededException", MaxLexemeLengthExceededException.fields) {};
export class InvalidS3BucketExceptionError extends S.TaggedError<InvalidS3BucketExceptionError>()("InvalidS3BucketException", InvalidS3BucketException.fields) {};
export class InvalidSsmlExceptionError extends S.TaggedError<InvalidSsmlExceptionError>()("InvalidSsmlException", InvalidSsmlException.fields) {};
export class SynthesisTaskNotFoundExceptionError extends S.TaggedError<SynthesisTaskNotFoundExceptionError>()("SynthesisTaskNotFoundException", SynthesisTaskNotFoundException.fields) {};
export class MaxLexiconsNumberExceededExceptionError extends S.TaggedError<MaxLexiconsNumberExceededExceptionError>()("MaxLexiconsNumberExceededException", MaxLexiconsNumberExceededException.fields) {};
export class InvalidS3KeyExceptionError extends S.TaggedError<InvalidS3KeyExceptionError>()("InvalidS3KeyException", InvalidS3KeyException.fields) {};
export class LanguageNotSupportedExceptionError extends S.TaggedError<LanguageNotSupportedExceptionError>()("LanguageNotSupportedException", LanguageNotSupportedException.fields) {};
export class UnsupportedPlsAlphabetExceptionError extends S.TaggedError<UnsupportedPlsAlphabetExceptionError>()("UnsupportedPlsAlphabetException", UnsupportedPlsAlphabetException.fields) {};
export class InvalidSnsTopicArnExceptionError extends S.TaggedError<InvalidSnsTopicArnExceptionError>()("InvalidSnsTopicArnException", InvalidSnsTopicArnException.fields) {};
export class MarksNotSupportedForFormatExceptionError extends S.TaggedError<MarksNotSupportedForFormatExceptionError>()("MarksNotSupportedForFormatException", MarksNotSupportedForFormatException.fields) {};
export class SsmlMarksNotSupportedForTextTypeExceptionError extends S.TaggedError<SsmlMarksNotSupportedForTextTypeExceptionError>()("SsmlMarksNotSupportedForTextTypeException", SsmlMarksNotSupportedForTextTypeException.fields) {};
export class UnsupportedPlsLanguageExceptionError extends S.TaggedError<UnsupportedPlsLanguageExceptionError>()("UnsupportedPlsLanguageException", UnsupportedPlsLanguageException.fields) {};
export class TextLengthExceededExceptionError extends S.TaggedError<TextLengthExceededExceptionError>()("TextLengthExceededException", TextLengthExceededException.fields) {};

//# Operations
export const deleteLexicon = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons/{Name}", method: "DELETE", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.DeleteLexicon" }, DeleteLexiconInput, DeleteLexiconOutput, [LexiconNotFoundExceptionError, ServiceFailureExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeVoices = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/voices", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.DescribeVoices" }, DescribeVoicesInput, DescribeVoicesOutput, [InvalidNextTokenExceptionError, ServiceFailureExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getLexicon = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons/{Name}", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.GetLexicon" }, GetLexiconInput, GetLexiconOutput, [LexiconNotFoundExceptionError, ServiceFailureExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listLexicons = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.ListLexicons" }, ListLexiconsInput, ListLexiconsOutput, [InvalidNextTokenExceptionError, ServiceFailureExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSpeechSynthesisTasks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/synthesisTasks", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.ListSpeechSynthesisTasks" }, ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput, [InvalidNextTokenExceptionError, ServiceFailureExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSpeechSynthesisTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/synthesisTasks/{TaskId}", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.GetSpeechSynthesisTask" }, GetSpeechSynthesisTaskInput, GetSpeechSynthesisTaskOutput, [InvalidTaskIdExceptionError, ServiceFailureExceptionError, SynthesisTaskNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putLexicon = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons/{Name}", method: "PUT", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.PutLexicon" }, PutLexiconInput, PutLexiconOutput, [InvalidLexiconExceptionError, LexiconSizeExceededExceptionError, MaxLexemeLengthExceededExceptionError, MaxLexiconsNumberExceededExceptionError, ServiceFailureExceptionError, UnsupportedPlsAlphabetExceptionError, UnsupportedPlsLanguageExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startSpeechSynthesisTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/synthesisTasks", method: "POST", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.StartSpeechSynthesisTask" }, StartSpeechSynthesisTaskInput, StartSpeechSynthesisTaskOutput, [EngineNotSupportedExceptionError, InvalidS3BucketExceptionError, InvalidS3KeyExceptionError, InvalidSampleRateExceptionError, InvalidSnsTopicArnExceptionError, InvalidSsmlExceptionError, LanguageNotSupportedExceptionError, LexiconNotFoundExceptionError, MarksNotSupportedForFormatExceptionError, ServiceFailureExceptionError, SsmlMarksNotSupportedForTextTypeExceptionError, TextLengthExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const synthesizeSpeech = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/speech", method: "POST", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.SynthesizeSpeech" }, SynthesizeSpeechInput, SynthesizeSpeechOutput, [EngineNotSupportedExceptionError, InvalidSampleRateExceptionError, InvalidSsmlExceptionError, LanguageNotSupportedExceptionError, LexiconNotFoundExceptionError, MarksNotSupportedForFormatExceptionError, ServiceFailureExceptionError, SsmlMarksNotSupportedForTextTypeExceptionError, TextLengthExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
