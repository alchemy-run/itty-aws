import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { codestarnotifications as _codestarnotificationsClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "codestar notifications",
  version: "2019-10-15",
  protocol: "restJson1",
  sigV4ServiceName: "codestar-notifications",
  endpointPrefix: "codestar-notifications",
  operations: {
    "CreateNotificationRule": "POST /createNotificationRule",
    "DeleteNotificationRule": "POST /deleteNotificationRule",
    "DeleteTarget": "POST /deleteTarget",
    "DescribeNotificationRule": "POST /describeNotificationRule",
    "ListEventTypes": "POST /listEventTypes",
    "ListNotificationRules": "POST /listNotificationRules",
    "ListTagsForResource": "POST /listTagsForResource",
    "ListTargets": "POST /listTargets",
    "Subscribe": "POST /subscribe",
    "TagResource": "POST /tagResource",
    "Unsubscribe": "POST /unsubscribe",
    "UntagResource": "POST /untagResource/{Arn}",
    "UpdateNotificationRule": "POST /updateNotificationRule",
  },
} as const satisfies ServiceMetadata;

export type _codestarnotifications = _codestarnotificationsClient;
export interface codestarnotifications extends _codestarnotifications {}
export const codestarnotifications = class extends AWSServiceClient {
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
} as unknown as typeof _codestarnotificationsClient;
