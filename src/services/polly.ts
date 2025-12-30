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
export class ListSpeechSynthesisTasksOutput extends S.Class<ListSpeechSynthesisTasksOutput>("ListSpeechSynthesisTasksOutput")({NextToken: S.optional(S.String), SynthesisTasks: S.optional(SynthesisTasks)}) {}
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
export class DescribeVoicesOutput extends S.Class<DescribeVoicesOutput>("DescribeVoicesOutput")({Voices: S.optional(VoiceList), NextToken: S.optional(S.String)}) {}
export class GetLexiconOutput extends S.Class<GetLexiconOutput>("GetLexiconOutput")({Lexicon: S.optional(Lexicon), LexiconAttributes: S.optional(LexiconAttributes)}) {}
export class GetSpeechSynthesisTaskOutput extends S.Class<GetSpeechSynthesisTaskOutput>("GetSpeechSynthesisTaskOutput")({SynthesisTask: S.optional(SynthesisTask)}) {}
export class ListLexiconsOutput extends S.Class<ListLexiconsOutput>("ListLexiconsOutput")({Lexicons: S.optional(LexiconDescriptionList), NextToken: S.optional(S.String)}) {}

//# Errors
export class LexiconNotFoundException extends S.TaggedError<LexiconNotFoundException>()("LexiconNotFoundException", {message: S.optional(S.String)}) {};
export class InvalidLexiconException extends S.TaggedError<InvalidLexiconException>()("InvalidLexiconException", {message: S.optional(S.String)}) {};
export class EngineNotSupportedException extends S.TaggedError<EngineNotSupportedException>()("EngineNotSupportedException", {}) {};
export class ServiceFailureException extends S.TaggedError<ServiceFailureException>()("ServiceFailureException", {message: S.optional(S.String)}) {};
export class InvalidNextTokenException extends S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {}) {};
export class LexiconSizeExceededException extends S.TaggedError<LexiconSizeExceededException>()("LexiconSizeExceededException", {message: S.optional(S.String)}) {};
export class InvalidSampleRateException extends S.TaggedError<InvalidSampleRateException>()("InvalidSampleRateException", {message: S.optional(S.String)}) {};
export class InvalidTaskIdException extends S.TaggedError<InvalidTaskIdException>()("InvalidTaskIdException", {message: S.optional(S.String)}) {};
export class MaxLexemeLengthExceededException extends S.TaggedError<MaxLexemeLengthExceededException>()("MaxLexemeLengthExceededException", {message: S.optional(S.String)}) {};
export class InvalidS3BucketException extends S.TaggedError<InvalidS3BucketException>()("InvalidS3BucketException", {message: S.optional(S.String)}) {};
export class InvalidSsmlException extends S.TaggedError<InvalidSsmlException>()("InvalidSsmlException", {message: S.optional(S.String)}) {};
export class SynthesisTaskNotFoundException extends S.TaggedError<SynthesisTaskNotFoundException>()("SynthesisTaskNotFoundException", {message: S.optional(S.String)}) {};
export class MaxLexiconsNumberExceededException extends S.TaggedError<MaxLexiconsNumberExceededException>()("MaxLexiconsNumberExceededException", {message: S.optional(S.String)}) {};
export class InvalidS3KeyException extends S.TaggedError<InvalidS3KeyException>()("InvalidS3KeyException", {message: S.optional(S.String)}) {};
export class LanguageNotSupportedException extends S.TaggedError<LanguageNotSupportedException>()("LanguageNotSupportedException", {message: S.optional(S.String)}) {};
export class UnsupportedPlsAlphabetException extends S.TaggedError<UnsupportedPlsAlphabetException>()("UnsupportedPlsAlphabetException", {message: S.optional(S.String)}) {};
export class InvalidSnsTopicArnException extends S.TaggedError<InvalidSnsTopicArnException>()("InvalidSnsTopicArnException", {message: S.optional(S.String)}) {};
export class MarksNotSupportedForFormatException extends S.TaggedError<MarksNotSupportedForFormatException>()("MarksNotSupportedForFormatException", {}) {};
export class SsmlMarksNotSupportedForTextTypeException extends S.TaggedError<SsmlMarksNotSupportedForTextTypeException>()("SsmlMarksNotSupportedForTextTypeException", {}) {};
export class UnsupportedPlsLanguageException extends S.TaggedError<UnsupportedPlsLanguageException>()("UnsupportedPlsLanguageException", {message: S.optional(S.String)}) {};
export class TextLengthExceededException extends S.TaggedError<TextLengthExceededException>()("TextLengthExceededException", {}) {};

//# Operations
export const deleteLexicon = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons/{Name}", method: "DELETE", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.DeleteLexicon" }, DeleteLexiconInput, DeleteLexiconOutput, [LexiconNotFoundException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeVoices = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/voices", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.DescribeVoices" }, DescribeVoicesInput, DescribeVoicesOutput, [InvalidNextTokenException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getLexicon = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons/{Name}", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.GetLexicon" }, GetLexiconInput, GetLexiconOutput, [LexiconNotFoundException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listLexicons = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.ListLexicons" }, ListLexiconsInput, ListLexiconsOutput, [InvalidNextTokenException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSpeechSynthesisTasks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/synthesisTasks", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.ListSpeechSynthesisTasks" }, ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput, [InvalidNextTokenException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSpeechSynthesisTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/synthesisTasks/{TaskId}", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.GetSpeechSynthesisTask" }, GetSpeechSynthesisTaskInput, GetSpeechSynthesisTaskOutput, [InvalidTaskIdException, ServiceFailureException, SynthesisTaskNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putLexicon = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons/{Name}", method: "PUT", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.PutLexicon" }, PutLexiconInput, PutLexiconOutput, [InvalidLexiconException, LexiconSizeExceededException, MaxLexemeLengthExceededException, MaxLexiconsNumberExceededException, ServiceFailureException, UnsupportedPlsAlphabetException, UnsupportedPlsLanguageException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startSpeechSynthesisTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/synthesisTasks", method: "POST", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.StartSpeechSynthesisTask" }, StartSpeechSynthesisTaskInput, StartSpeechSynthesisTaskOutput, [EngineNotSupportedException, InvalidS3BucketException, InvalidS3KeyException, InvalidSampleRateException, InvalidSnsTopicArnException, InvalidSsmlException, LanguageNotSupportedException, LexiconNotFoundException, MarksNotSupportedForFormatException, ServiceFailureException, SsmlMarksNotSupportedForTextTypeException, TextLengthExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const synthesizeSpeech = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/speech", method: "POST", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.SynthesizeSpeech" }, SynthesizeSpeechInput, SynthesizeSpeechOutput, [EngineNotSupportedException, InvalidSampleRateException, InvalidSsmlException, LanguageNotSupportedException, LexiconNotFoundException, MarksNotSupportedForFormatException, ServiceFailureException, SsmlMarksNotSupportedForTextTypeException, TextLengthExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
