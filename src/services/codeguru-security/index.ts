import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CodeGuruSecurity as _CodeGuruSecurity } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CodeGuru Security",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "codeguru-security",
  operations: {
    BatchGetFindings: "POST /batchGetFindings",
    CreateScan: "POST /scans",
    CreateUploadUrl: "POST /uploadUrl",
    GetAccountConfiguration: "GET /accountConfiguration/get",
    GetFindings: "GET /findings/{scanName}",
    GetMetricsSummary: "GET /metrics/summary",
    GetScan: "GET /scans/{scanName}",
    ListFindingsMetrics: "GET /metrics/findings",
    ListScans: "GET /scans",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateAccountConfiguration: "PUT /updateAccountConfiguration",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CodeGuruSecurity = class extends AWSServiceClient {
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
} as unknown as typeof _CodeGuruSecurity;
