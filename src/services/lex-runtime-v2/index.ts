import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LexRuntimeV2 as _LexRuntimeV2Client } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Lex Runtime V2",
  version: "2020-08-07",
  protocol: "restJson1",
  sigV4ServiceName: "lex",
  endpointPrefix: "runtime-v2-lex",
  operations: {
    DeleteSession:
      "DELETE /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
    GetSession:
      "GET /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
    PutSession: {
      http: "POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
      traits: {
        contentType: "Content-Type",
        messages: "x-amz-lex-messages",
        sessionState: "x-amz-lex-session-state",
        requestAttributes: "x-amz-lex-request-attributes",
        sessionId: "x-amz-lex-session-id",
        audioStream: "httpPayload",
      },
    },
    RecognizeText:
      "POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text",
    RecognizeUtterance: {
      http: "POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance",
      traits: {
        inputMode: "x-amz-lex-input-mode",
        contentType: "Content-Type",
        messages: "x-amz-lex-messages",
        interpretations: "x-amz-lex-interpretations",
        sessionState: "x-amz-lex-session-state",
        requestAttributes: "x-amz-lex-request-attributes",
        sessionId: "x-amz-lex-session-id",
        inputTranscript: "x-amz-lex-input-transcript",
        audioStream: "httpPayload",
        recognizedBotMember: "x-amz-lex-recognized-bot-member",
      },
    },
    StartConversation: {
      http: "POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation",
      traits: {
        responseEventStream: "httpPayload",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type LexRuntimeV2 = typeof LexRuntimeV2;
export const LexRuntimeV2 = class extends AWSServiceClient {
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
} as unknown as typeof _LexRuntimeV2Client;
