import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { NotificationsContacts as _NotificationsContactsClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "NotificationsContacts",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "notifications-contacts",
  endpointPrefix: "notifications-contacts",
  operations: {
    "ListTagsForResource": "GET /tags/{arn}",
    "TagResource": "POST /tags/{arn}",
    "UntagResource": "DELETE /tags/{arn}",
    "ActivateEmailContact": "PUT /emailcontacts/{arn}/activate/{code}",
    "CreateEmailContact": "POST /2022-09-19/emailcontacts",
    "DeleteEmailContact": "DELETE /emailcontacts/{arn}",
    "GetEmailContact": "GET /emailcontacts/{arn}",
    "ListEmailContacts": "GET /emailcontacts",
    "SendActivationCode": "POST /2022-10-31/emailcontacts/{arn}/activate/send",
  },
} as const satisfies ServiceMetadata;

export type _NotificationsContacts = _NotificationsContactsClient;
export interface NotificationsContacts extends _NotificationsContacts {}
export const NotificationsContacts = class extends AWSServiceClient {
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
} as unknown as typeof _NotificationsContactsClient;
