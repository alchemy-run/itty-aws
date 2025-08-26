import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { repostspace as _repostspace } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "repostspace",
  version: "2022-05-13",
  protocol: "restJson1",
  sigV4ServiceName: "repostspace",
  operations: {
    BatchAddChannelRoleToAccessors:
      "POST /spaces/{spaceId}/channels/{channelId}/roles",
    BatchAddRole: "POST /spaces/{spaceId}/roles",
    BatchRemoveChannelRoleFromAccessors:
      "PATCH /spaces/{spaceId}/channels/{channelId}/roles",
    BatchRemoveRole: "PATCH /spaces/{spaceId}/roles",
    CreateChannel: "POST /spaces/{spaceId}/channels",
    CreateSpace: "POST /spaces",
    DeleteSpace: "DELETE /spaces/{spaceId}",
    DeregisterAdmin: "DELETE /spaces/{spaceId}/admins/{adminId}",
    GetChannel: "GET /spaces/{spaceId}/channels/{channelId}",
    GetSpace: "GET /spaces/{spaceId}",
    ListChannels: "GET /spaces/{spaceId}/channels",
    ListSpaces: "GET /spaces",
    ListTagsForResource: "GET /tags/{resourceArn}",
    RegisterAdmin: "POST /spaces/{spaceId}/admins/{adminId}",
    SendInvites: "POST /spaces/{spaceId}/invite",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateChannel: "PUT /spaces/{spaceId}/channels/{channelId}",
    UpdateSpace: "PUT /spaces/{spaceId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const repostspace = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _repostspace;
