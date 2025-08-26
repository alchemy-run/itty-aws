import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ControlCatalog as _ControlCatalog } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ControlCatalog",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "controlcatalog",
  operations: {
    ListControlMappings: "POST /list-control-mappings",
    GetControl: "POST /get-control",
    ListCommonControls: "POST /common-controls",
    ListControls: "POST /list-controls",
    ListDomains: "POST /domains",
    ListObjectives: "POST /objectives",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ControlCatalog = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ControlCatalog;
