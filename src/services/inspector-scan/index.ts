import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { InspectorScan as _InspectorScan } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Inspector Scan",
  version: "2023-08-08",
  protocol: "restJson1",
  sigV4ServiceName: "inspector-scan",
  operations: {
    ScanSbom: "POST /scan/sbom",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const InspectorScan = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _InspectorScan;
