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
/**
 * Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for
 * speech synthesis, nor is it possible to retrieve it using either the
 * `GetLexicon` or `ListLexicon` APIs.
 * 
 * For more information, see Managing Lexicons.
 */export const deleteLexicon = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons/{Name}", method: "DELETE", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.DeleteLexicon" }, DeleteLexiconInput, DeleteLexiconOutput, [LexiconNotFoundException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the list of voices that are available for use when
 * requesting speech synthesis. Each voice speaks a specified language, is
 * either male or female, and is identified by an ID, which is the ASCII
 * version of the voice name.
 * 
 * When synthesizing speech ( `SynthesizeSpeech` ), you
 * provide the voice ID for the voice you want from the list of voices
 * returned by `DescribeVoices`.
 * 
 * For example, you want your news reader application to read news in
 * a specific language, but giving a user the option to choose the voice.
 * Using the `DescribeVoices` operation you can provide the user
 * with a list of available voices to select from.
 * 
 * You can optionally specify a language code to filter the available
 * voices. For example, if you specify `en-US`, the operation
 * returns a list of all available US English voices.
 * 
 * This operation requires permissions to perform the
 * `polly:DescribeVoices` action.
 */export const describeVoices = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/voices", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.DescribeVoices" }, DescribeVoicesInput, DescribeVoicesOutput, [InvalidNextTokenException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the content of the specified pronunciation lexicon stored
 * in an Amazon Web Services Region. For more information, see Managing Lexicons.
 */export const getLexicon = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons/{Name}", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.GetLexicon" }, GetLexiconInput, GetLexiconOutput, [LexiconNotFoundException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see Managing Lexicons.
 */export const listLexicons = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.ListLexicons" }, ListLexiconsInput, ListLexiconsOutput, [InvalidNextTokenException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of SpeechSynthesisTask objects ordered by their
 * creation date. This operation can filter the tasks by their status, for
 * example, allowing users to list only tasks that are completed.
 */export const listSpeechSynthesisTasks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/synthesisTasks", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.ListSpeechSynthesisTasks" }, ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput, [InvalidNextTokenException, ServiceFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a specific SpeechSynthesisTask object based on its TaskID.
 * This object contains information about the given speech synthesis task,
 * including the status of the task, and a link to the S3 bucket containing
 * the output of the task.
 */export const getSpeechSynthesisTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/synthesisTasks/{TaskId}", method: "GET", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.GetSpeechSynthesisTask" }, GetSpeechSynthesisTaskInput, GetSpeechSynthesisTaskOutput, [InvalidTaskIdException, ServiceFailureException, SynthesisTaskNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stores a pronunciation lexicon in an Amazon Web Services Region. If
 * a lexicon with the same name already exists in the region, it is
 * overwritten by the new lexicon. Lexicon operations have eventual
 * consistency, therefore, it might take some time before the lexicon is
 * available to the SynthesizeSpeech operation.
 * 
 * For more information, see Managing Lexicons.
 */export const putLexicon = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/lexicons/{Name}", method: "PUT", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.PutLexicon" }, PutLexiconInput, PutLexiconOutput, [InvalidLexiconException, LexiconSizeExceededException, MaxLexemeLengthExceededException, MaxLexiconsNumberExceededException, ServiceFailureException, UnsupportedPlsAlphabetException, UnsupportedPlsLanguageException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Allows the creation of an asynchronous synthesis task, by starting a
 * new `SpeechSynthesisTask`. This operation requires all the
 * standard information needed for speech synthesis, plus the name of an
 * Amazon S3 bucket for the service to store the output of the synthesis task
 * and two optional parameters (`OutputS3KeyPrefix` and
 * `SnsTopicArn`). Once the synthesis task is created, this
 * operation will return a `SpeechSynthesisTask` object, which
 * will include an identifier of this task as well as the current status. The
 * `SpeechSynthesisTask` object is available for 72 hours after
 * starting the asynchronous synthesis task.
 */export const startSpeechSynthesisTask = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/synthesisTasks", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.StartSpeechSynthesisTask" }, StartSpeechSynthesisTaskInput, StartSpeechSynthesisTaskOutput, [EngineNotSupportedException, InvalidS3BucketException, InvalidS3KeyException, InvalidSampleRateException, InvalidSnsTopicArnException, InvalidSsmlException, LanguageNotSupportedException, LexiconNotFoundException, MarksNotSupportedForFormatException, ServiceFailureException, SsmlMarksNotSupportedForTextTypeException, TextLengthExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes.
 * SSML input must be valid, well-formed SSML. Some alphabets might not be
 * available with all the voices (for example, Cyrillic might not be read at
 * all by English voices) unless phoneme mapping is used. For more
 * information, see How it Works.
 */export const synthesizeSpeech = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-06-10", uri: "/v1/speech", sdkId: "Polly", sigV4ServiceName: "polly", name: "Parrot_v1.SynthesizeSpeech" }, SynthesizeSpeechInput, SynthesizeSpeechOutput, [EngineNotSupportedException, InvalidSampleRateException, InvalidSsmlException, LanguageNotSupportedException, LexiconNotFoundException, MarksNotSupportedForFormatException, ServiceFailureException, SsmlMarksNotSupportedForTextTypeException, TextLengthExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
