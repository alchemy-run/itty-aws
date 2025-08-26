import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { NotificationsContacts as _NotificationsContacts } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "NotificationsContacts",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "notifications-contacts",
  endpointPrefix: "notifications-contacts",
  operations: {
    ListTagsForResource: "GET /tags/{arn}",
    TagResource: "POST /tags/{arn}",
    UntagResource: "DELETE /tags/{arn}",
    ActivateEmailContact: "PUT /emailcontacts/{arn}/activate/{code}",
    CreateEmailContact: "POST /2022-09-19/emailcontacts",
    DeleteEmailContact: "DELETE /emailcontacts/{arn}",
    GetEmailContact: "GET /emailcontacts/{arn}",
    ListEmailContacts: "GET /emailcontacts",
    SendActivationCode: "POST /2022-10-31/emailcontacts/{arn}/activate/send",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const NotificationsContacts = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _NotificationsContacts;
