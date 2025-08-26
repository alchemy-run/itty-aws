import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CloudTrailData as _CloudTrailData } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CloudTrail Data",
  version: "2021-08-11",
  protocol: "restJson1",
  sigV4ServiceName: "cloudtrail-data",
  endpointPrefix: "cloudtrail-data",
  operations: {
    PutAuditEvents: "POST /PutAuditEvents",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CloudTrailData = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CloudTrailData;
