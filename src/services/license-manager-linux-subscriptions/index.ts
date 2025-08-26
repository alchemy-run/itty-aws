import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LicenseManagerLinuxSubscriptions as _LicenseManagerLinuxSubscriptions } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "License Manager Linux Subscriptions",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "license-manager-linux-subscriptions",
  operations: {
    DeregisterSubscriptionProvider:
      "POST /subscription/DeregisterSubscriptionProvider",
    GetRegisteredSubscriptionProvider:
      "POST /subscription/GetRegisteredSubscriptionProvider",
    GetServiceSettings: "POST /subscription/GetServiceSettings",
    ListLinuxSubscriptionInstances:
      "POST /subscription/ListLinuxSubscriptionInstances",
    ListLinuxSubscriptions: "POST /subscription/ListLinuxSubscriptions",
    ListRegisteredSubscriptionProviders:
      "POST /subscription/ListRegisteredSubscriptionProviders",
    ListTagsForResource: "GET /tags/{resourceArn}",
    RegisterSubscriptionProvider:
      "POST /subscription/RegisterSubscriptionProvider",
    TagResource: "PUT /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateServiceSettings: "POST /subscription/UpdateServiceSettings",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const LicenseManagerLinuxSubscriptions = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _LicenseManagerLinuxSubscriptions;
