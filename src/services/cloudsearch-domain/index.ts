import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CloudSearchDomain as _CloudSearchDomain } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CloudSearch Domain",
  version: "2013-01-01",
  protocol: "restJson1",
  sigV4ServiceName: "cloudsearch",
  endpointPrefix: "cloudsearchdomain",
  operations: {
    Search: "GET /2013-01-01/search?format=sdk&pretty=true",
    Suggest: "GET /2013-01-01/suggest?format=sdk&pretty=true",
    UploadDocuments: "POST /2013-01-01/documents/batch?format=sdk",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CloudSearchDomain = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _CloudSearchDomain;
