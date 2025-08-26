import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LexRuntimeService as _LexRuntimeService } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Lex Runtime Service",
  version: "2016-11-28",
  protocol: "restJson1",
  sigV4ServiceName: "lex",
  endpointPrefix: "runtime.lex",
  operations: {
    DeleteSession:
      "DELETE /bot/{botName}/alias/{botAlias}/user/{userId}/session",
    GetSession: "GET /bot/{botName}/alias/{botAlias}/user/{userId}/session",
    PostContent: {
      http: "POST /bot/{botName}/alias/{botAlias}/user/{userId}/content",
      traits: {
        contentType: "Content-Type",
        intentName: "x-amz-lex-intent-name",
        nluIntentConfidence: "x-amz-lex-nlu-intent-confidence",
        alternativeIntents: "x-amz-lex-alternative-intents",
        slots: "x-amz-lex-slots",
        sessionAttributes: "x-amz-lex-session-attributes",
        sentimentResponse: "x-amz-lex-sentiment",
        message: "x-amz-lex-message",
        encodedMessage: "x-amz-lex-encoded-message",
        messageFormat: "x-amz-lex-message-format",
        dialogState: "x-amz-lex-dialog-state",
        slotToElicit: "x-amz-lex-slot-to-elicit",
        inputTranscript: "x-amz-lex-input-transcript",
        encodedInputTranscript: "x-amz-lex-encoded-input-transcript",
        audioStream: "httpPayload",
        botVersion: "x-amz-lex-bot-version",
        sessionId: "x-amz-lex-session-id",
        activeContexts: "x-amz-lex-active-contexts",
      },
    },
    PostText: "POST /bot/{botName}/alias/{botAlias}/user/{userId}/text",
    PutSession: {
      http: "POST /bot/{botName}/alias/{botAlias}/user/{userId}/session",
      traits: {
        contentType: "Content-Type",
        intentName: "x-amz-lex-intent-name",
        slots: "x-amz-lex-slots",
        sessionAttributes: "x-amz-lex-session-attributes",
        message: "x-amz-lex-message",
        encodedMessage: "x-amz-lex-encoded-message",
        messageFormat: "x-amz-lex-message-format",
        dialogState: "x-amz-lex-dialog-state",
        slotToElicit: "x-amz-lex-slot-to-elicit",
        audioStream: "httpPayload",
        sessionId: "x-amz-lex-session-id",
        activeContexts: "x-amz-lex-active-contexts",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const LexRuntimeService = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _LexRuntimeService;
