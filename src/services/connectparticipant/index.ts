import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ConnectParticipant as _ConnectParticipant } from "./types.ts";

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

export const ConnectParticipant = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ConnectParticipant;
