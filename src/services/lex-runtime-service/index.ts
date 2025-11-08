import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LexRuntimeService as _LexRuntimeServiceClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Lex Runtime Service",
  version: "2016-11-28",
  protocol: "restJson1",
  sigV4ServiceName: "lex",
  endpointPrefix: "runtime.lex",
  operations: {
    "DeleteSession": "DELETE /bot/{botName}/alias/{botAlias}/user/{userId}/session",
    "GetSession": "GET /bot/{botName}/alias/{botAlias}/user/{userId}/session",
    "PostContent": {
      http: "POST /bot/{botName}/alias/{botAlias}/user/{userId}/content",
      traits: {
        "contentType": "Content-Type",
        "intentName": "x-amz-lex-intent-name",
        "nluIntentConfidence": "x-amz-lex-nlu-intent-confidence",
        "alternativeIntents": "x-amz-lex-alternative-intents",
        "slots": "x-amz-lex-slots",
        "sessionAttributes": "x-amz-lex-session-attributes",
        "sentimentResponse": "x-amz-lex-sentiment",
        "message": "x-amz-lex-message",
        "encodedMessage": "x-amz-lex-encoded-message",
        "messageFormat": "x-amz-lex-message-format",
        "dialogState": "x-amz-lex-dialog-state",
        "slotToElicit": "x-amz-lex-slot-to-elicit",
        "inputTranscript": "x-amz-lex-input-transcript",
        "encodedInputTranscript": "x-amz-lex-encoded-input-transcript",
        "audioStream": "httpStreaming",
        "botVersion": "x-amz-lex-bot-version",
        "sessionId": "x-amz-lex-session-id",
        "activeContexts": "x-amz-lex-active-contexts",
      },
    },
    "PostText": "POST /bot/{botName}/alias/{botAlias}/user/{userId}/text",
    "PutSession": {
      http: "POST /bot/{botName}/alias/{botAlias}/user/{userId}/session",
      traits: {
        "contentType": "Content-Type",
        "intentName": "x-amz-lex-intent-name",
        "slots": "x-amz-lex-slots",
        "sessionAttributes": "x-amz-lex-session-attributes",
        "message": "x-amz-lex-message",
        "encodedMessage": "x-amz-lex-encoded-message",
        "messageFormat": "x-amz-lex-message-format",
        "dialogState": "x-amz-lex-dialog-state",
        "slotToElicit": "x-amz-lex-slot-to-elicit",
        "audioStream": "httpStreaming",
        "sessionId": "x-amz-lex-session-id",
        "activeContexts": "x-amz-lex-active-contexts",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _LexRuntimeService = _LexRuntimeServiceClient;
export interface LexRuntimeService extends _LexRuntimeService {}
export const LexRuntimeService = class extends AWSServiceClient {
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
} as unknown as typeof _LexRuntimeServiceClient;
