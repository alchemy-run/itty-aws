import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ConnectParticipant as _ConnectParticipantClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ConnectParticipant",
  version: "2018-09-07",
  protocol: "restJson1",
  sigV4ServiceName: "execute-api",
  endpointPrefix: "participant.connect",
  operations: {
    CancelParticipantAuthentication: "POST /participant/cancel-authentication",
    CompleteAttachmentUpload: "POST /participant/complete-attachment-upload",
    CreateParticipantConnection: "POST /participant/connection",
    DescribeView: "GET /participant/views/{ViewToken}",
    DisconnectParticipant: "POST /participant/disconnect",
    GetAttachment: "POST /participant/attachment",
    GetAuthenticationUrl: "POST /participant/authentication-url",
    GetTranscript: "POST /participant/transcript",
    SendEvent: "POST /participant/event",
    SendMessage: "POST /participant/message",
    StartAttachmentUpload: "POST /participant/start-attachment-upload",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type ConnectParticipant = typeof ConnectParticipant;
export const ConnectParticipant = class extends AWSServiceClient {
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
} as unknown as typeof _ConnectParticipantClient;
