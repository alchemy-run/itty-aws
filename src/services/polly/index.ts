import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Polly as _PollyClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Polly",
  version: "2016-06-10",
  protocol: "restJson1",
  sigV4ServiceName: "polly",
  endpointPrefix: "polly",
  operations: {
    DeleteLexicon: "DELETE /v1/lexicons/{Name}",
    DescribeVoices: "GET /v1/voices",
    GetLexicon: "GET /v1/lexicons/{Name}",
    GetSpeechSynthesisTask: "GET /v1/synthesisTasks/{TaskId}",
    ListLexicons: "GET /v1/lexicons",
    ListSpeechSynthesisTasks: "GET /v1/synthesisTasks",
    PutLexicon: "PUT /v1/lexicons/{Name}",
    StartSpeechSynthesisTask: "POST /v1/synthesisTasks",
    SynthesizeSpeech: {
      http: "POST /v1/speech",
      traits: {
        AudioStream: "httpPayload",
        ContentType: "Content-Type",
        RequestCharacters: "x-amzn-RequestCharacters",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type Polly = typeof Polly;
export const Polly = class extends AWSServiceClient {
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
} as unknown as typeof _PollyClient;
