import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { rbin as _rbin } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "rbin",
  version: "2021-06-15",
  protocol: "restJson1",
  sigV4ServiceName: "rbin",
  endpointPrefix: "rbin",
  operations: {
    CreateRule: "POST /rules",
    DeleteRule: "DELETE /rules/{Identifier}",
    GetRule: "GET /rules/{Identifier}",
    ListRules: "POST /list-rules",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    LockRule: "PATCH /rules/{Identifier}/lock",
    TagResource: "POST /tags/{ResourceArn}",
    UnlockRule: "PATCH /rules/{Identifier}/unlock",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateRule: "PATCH /rules/{Identifier}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const rbin = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _rbin;
