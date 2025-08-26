import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTFleetHub as _IoTFleetHub } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "IoTFleetHub",
  version: "2020-11-03",
  protocol: "restJson1",
  sigV4ServiceName: "iotfleethub",
  endpointPrefix: "api.fleethub.iot",
  operations: {
    CreateApplication: "POST /applications",
    DeleteApplication: "DELETE /applications/{applicationId}",
    DescribeApplication: "GET /applications/{applicationId}",
    ListApplications: "GET /applications",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateApplication: "PATCH /applications/{applicationId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IoTFleetHub = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _IoTFleetHub;
