import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Artifact as _Artifact } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Artifact",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "artifact",
  operations: {
    GetAccountSettings: "GET /v1/account-settings/get",
    GetReport: "GET /v1/report/get",
    GetReportMetadata: "GET /v1/report/getMetadata",
    GetTermForReport: "GET /v1/report/getTermForReport",
    ListCustomerAgreements: "GET /v1/customer-agreement/list",
    ListReports: "GET /v1/report/list",
    PutAccountSettings: "PUT /v1/account-settings/put",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Artifact = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Artifact;
