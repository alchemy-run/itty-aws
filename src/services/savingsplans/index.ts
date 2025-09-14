import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { savingsplans as _savingsplansClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "savingsplans",
  version: "2019-06-28",
  protocol: "restJson1",
  sigV4ServiceName: "savingsplans",
  endpointPrefix: "savingsplans",
  operations: {
    CreateSavingsPlan: "POST /CreateSavingsPlan",
    DeleteQueuedSavingsPlan: "POST /DeleteQueuedSavingsPlan",
    DescribeSavingsPlanRates: "POST /DescribeSavingsPlanRates",
    DescribeSavingsPlans: "POST /DescribeSavingsPlans",
    DescribeSavingsPlansOfferingRates:
      "POST /DescribeSavingsPlansOfferingRates",
    DescribeSavingsPlansOfferings: "POST /DescribeSavingsPlansOfferings",
    ListTagsForResource: "POST /ListTagsForResource",
    ReturnSavingsPlan: "POST /ReturnSavingsPlan",
    TagResource: "POST /TagResource",
    UntagResource: "POST /UntagResource",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const savingsplans = class extends AWSServiceClient {
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
} as unknown as typeof _savingsplansClient;
