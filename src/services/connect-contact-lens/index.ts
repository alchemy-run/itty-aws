import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ConnectContactLens as _ConnectContactLens } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Connect Contact Lens",
  version: "2020-08-21",
  protocol: "restJson1",
  sigV4ServiceName: "connect",
  endpointPrefix: "contact-lens",
  operations: {
    ListRealtimeContactAnalysisSegments:
      "POST /realtime-contact-analysis/analysis-segments",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ConnectContactLens = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ConnectContactLens;
