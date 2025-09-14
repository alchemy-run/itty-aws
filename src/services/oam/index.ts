import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { OAM as _OAMClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "OAM",
  version: "2022-06-10",
  protocol: "restJson1",
  sigV4ServiceName: "oam",
  operations: {
    CreateLink: "POST /CreateLink",
    CreateSink: "POST /CreateSink",
    DeleteLink: "POST /DeleteLink",
    DeleteSink: "POST /DeleteSink",
    GetLink: "POST /GetLink",
    GetSink: "POST /GetSink",
    GetSinkPolicy: "POST /GetSinkPolicy",
    ListAttachedLinks: "POST /ListAttachedLinks",
    ListLinks: "POST /ListLinks",
    ListSinks: "POST /ListSinks",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    PutSinkPolicy: "POST /PutSinkPolicy",
    TagResource: "PUT /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateLink: "POST /UpdateLink",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type OAM = typeof OAM;
export const OAM = class extends AWSServiceClient {
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
} as unknown as typeof _OAMClient;
