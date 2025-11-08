import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { TranscribeStreaming as _TranscribeStreamingClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Transcribe Streaming",
  version: "2017-10-26",
  protocol: "restJson1",
  sigV4ServiceName: "transcribe",
  endpointPrefix: "transcribestreaming",
  operations: {
    "GetMedicalScribeStream": "GET /medical-scribe-stream/{SessionId}",
    "StartCallAnalyticsStreamTranscription": {
      http: "POST /call-analytics-stream-transcription",
      traits: {
        "RequestId": "x-amzn-request-id",
        "LanguageCode": "x-amzn-transcribe-language-code",
        "MediaSampleRateHertz": "x-amzn-transcribe-sample-rate",
        "MediaEncoding": "x-amzn-transcribe-media-encoding",
        "VocabularyName": "x-amzn-transcribe-vocabulary-name",
        "SessionId": "x-amzn-transcribe-session-id",
        "CallAnalyticsTranscriptResultStream": "httpPayload",
        "VocabularyFilterName": "x-amzn-transcribe-vocabulary-filter-name",
        "VocabularyFilterMethod": "x-amzn-transcribe-vocabulary-filter-method",
        "LanguageModelName": "x-amzn-transcribe-language-model-name",
        "EnablePartialResultsStabilization": "x-amzn-transcribe-enable-partial-results-stabilization",
        "PartialResultsStability": "x-amzn-transcribe-partial-results-stability",
        "ContentIdentificationType": "x-amzn-transcribe-content-identification-type",
        "ContentRedactionType": "x-amzn-transcribe-content-redaction-type",
        "PiiEntityTypes": "x-amzn-transcribe-pii-entity-types",
      },
    },
    "StartMedicalScribeStream": {
      http: "POST /medical-scribe-stream",
      traits: {
        "SessionId": "x-amzn-transcribe-session-id",
        "RequestId": "x-amzn-request-id",
        "LanguageCode": "x-amzn-transcribe-language-code",
        "MediaSampleRateHertz": "x-amzn-transcribe-sample-rate",
        "MediaEncoding": "x-amzn-transcribe-media-encoding",
        "ResultStream": "httpPayload",
      },
    },
    "StartMedicalStreamTranscription": {
      http: "POST /medical-stream-transcription",
      traits: {
        "RequestId": "x-amzn-request-id",
        "LanguageCode": "x-amzn-transcribe-language-code",
        "MediaSampleRateHertz": "x-amzn-transcribe-sample-rate",
        "MediaEncoding": "x-amzn-transcribe-media-encoding",
        "VocabularyName": "x-amzn-transcribe-vocabulary-name",
        "Specialty": "x-amzn-transcribe-specialty",
        "Type": "x-amzn-transcribe-type",
        "ShowSpeakerLabel": "x-amzn-transcribe-show-speaker-label",
        "SessionId": "x-amzn-transcribe-session-id",
        "TranscriptResultStream": "httpPayload",
        "EnableChannelIdentification": "x-amzn-transcribe-enable-channel-identification",
        "NumberOfChannels": "x-amzn-transcribe-number-of-channels",
        "ContentIdentificationType": "x-amzn-transcribe-content-identification-type",
      },
    },
    "StartStreamTranscription": {
      http: "POST /stream-transcription",
      traits: {
        "RequestId": "x-amzn-request-id",
        "LanguageCode": "x-amzn-transcribe-language-code",
        "MediaSampleRateHertz": "x-amzn-transcribe-sample-rate",
        "MediaEncoding": "x-amzn-transcribe-media-encoding",
        "VocabularyName": "x-amzn-transcribe-vocabulary-name",
        "SessionId": "x-amzn-transcribe-session-id",
        "TranscriptResultStream": "httpPayload",
        "VocabularyFilterName": "x-amzn-transcribe-vocabulary-filter-name",
        "VocabularyFilterMethod": "x-amzn-transcribe-vocabulary-filter-method",
        "ShowSpeakerLabel": "x-amzn-transcribe-show-speaker-label",
        "EnableChannelIdentification": "x-amzn-transcribe-enable-channel-identification",
        "NumberOfChannels": "x-amzn-transcribe-number-of-channels",
        "EnablePartialResultsStabilization": "x-amzn-transcribe-enable-partial-results-stabilization",
        "PartialResultsStability": "x-amzn-transcribe-partial-results-stability",
        "ContentIdentificationType": "x-amzn-transcribe-content-identification-type",
        "ContentRedactionType": "x-amzn-transcribe-content-redaction-type",
        "PiiEntityTypes": "x-amzn-transcribe-pii-entity-types",
        "LanguageModelName": "x-amzn-transcribe-language-model-name",
        "IdentifyLanguage": "x-amzn-transcribe-identify-language",
        "LanguageOptions": "x-amzn-transcribe-language-options",
        "PreferredLanguage": "x-amzn-transcribe-preferred-language",
        "IdentifyMultipleLanguages": "x-amzn-transcribe-identify-multiple-languages",
        "VocabularyNames": "x-amzn-transcribe-vocabulary-names",
        "VocabularyFilterNames": "x-amzn-transcribe-vocabulary-filter-names",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _TranscribeStreaming = _TranscribeStreamingClient;
export interface TranscribeStreaming extends _TranscribeStreaming {}
export const TranscribeStreaming = class extends AWSServiceClient {
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
} as unknown as typeof _TranscribeStreamingClient;
