import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { codestarnotifications as _codestarnotifications } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "codestar notifications",
  version: "2019-10-15",
  protocol: "restJson1",
  sigV4ServiceName: "codestar-notifications",
  endpointPrefix: "codestar-notifications",
  operations: {
    CreateNotificationRule: "POST /createNotificationRule",
    DeleteNotificationRule: "POST /deleteNotificationRule",
    DeleteTarget: "POST /deleteTarget",
    DescribeNotificationRule: "POST /describeNotificationRule",
    ListEventTypes: "POST /listEventTypes",
    ListNotificationRules: "POST /listNotificationRules",
    ListTagsForResource: "POST /listTagsForResource",
    ListTargets: "POST /listTargets",
    Subscribe: "POST /subscribe",
    TagResource: "POST /tagResource",
    Unsubscribe: "POST /unsubscribe",
    UntagResource: "POST /untagResource/{Arn}",
    UpdateNotificationRule: "POST /updateNotificationRule",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const codestarnotifications = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _codestarnotifications;
