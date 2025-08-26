import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ivschat as _ivschat } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ivschat",
  version: "2020-07-14",
  protocol: "restJson1",
  sigV4ServiceName: "ivschat",
  operations: {
    CreateChatToken: "POST /CreateChatToken",
    CreateLoggingConfiguration: "POST /CreateLoggingConfiguration",
    CreateRoom: "POST /CreateRoom",
    DeleteLoggingConfiguration: "POST /DeleteLoggingConfiguration",
    DeleteMessage: "POST /DeleteMessage",
    DeleteRoom: "POST /DeleteRoom",
    DisconnectUser: "POST /DisconnectUser",
    GetLoggingConfiguration: "POST /GetLoggingConfiguration",
    GetRoom: "POST /GetRoom",
    ListLoggingConfigurations: "POST /ListLoggingConfigurations",
    ListRooms: "POST /ListRooms",
    ListTagsForResource: "GET /tags/{resourceArn}",
    SendEvent: "POST /SendEvent",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateLoggingConfiguration: "POST /UpdateLoggingConfiguration",
    UpdateRoom: "POST /UpdateRoom",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ivschat = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ivschat;
