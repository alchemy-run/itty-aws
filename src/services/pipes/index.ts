import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Pipes as _Pipes } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Pipes",
  version: "2015-10-07",
  protocol: "restJson1",
  sigV4ServiceName: "pipes",
  endpointPrefix: "pipes",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreatePipe: "POST /v1/pipes/{Name}",
    DeletePipe: "DELETE /v1/pipes/{Name}",
    DescribePipe: "GET /v1/pipes/{Name}",
    ListPipes: "GET /v1/pipes",
    StartPipe: "POST /v1/pipes/{Name}/start",
    StopPipe: "POST /v1/pipes/{Name}/stop",
    UpdatePipe: "PUT /v1/pipes/{Name}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Pipes = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Pipes;
