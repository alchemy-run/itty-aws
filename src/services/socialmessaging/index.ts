import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SocialMessaging as _SocialMessagingClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "SocialMessaging",
  version: "2024-01-01",
  protocol: "restJson1",
  sigV4ServiceName: "social-messaging",
  endpointPrefix: "social-messaging",
  operations: {
    CreateWhatsAppMessageTemplate: "POST /v1/whatsapp/template/put",
    CreateWhatsAppMessageTemplateFromLibrary:
      "POST /v1/whatsapp/template/create",
    CreateWhatsAppMessageTemplateMedia: "POST /v1/whatsapp/template/media",
    DeleteWhatsAppMessageTemplate: "DELETE /v1/whatsapp/template",
    GetWhatsAppMessageTemplate: "GET /v1/whatsapp/template",
    ListTagsForResource: "GET /v1/tags/list",
    ListWhatsAppMessageTemplates: "GET /v1/whatsapp/template/list",
    ListWhatsAppTemplateLibrary: "POST /v1/whatsapp/template/library",
    TagResource: "POST /v1/tags/tag-resource",
    UntagResource: "POST /v1/tags/untag-resource",
    UpdateWhatsAppMessageTemplate: "POST /v1/whatsapp/template",
    AssociateWhatsAppBusinessAccount: "POST /v1/whatsapp/signup",
    DeleteWhatsAppMessageMedia: "DELETE /v1/whatsapp/media",
    DisassociateWhatsAppBusinessAccount:
      "DELETE /v1/whatsapp/waba/disassociate",
    GetLinkedWhatsAppBusinessAccount: "GET /v1/whatsapp/waba/details",
    GetLinkedWhatsAppBusinessAccountPhoneNumber:
      "GET /v1/whatsapp/waba/phone/details",
    GetWhatsAppMessageMedia: "POST /v1/whatsapp/media/get",
    ListLinkedWhatsAppBusinessAccounts: "GET /v1/whatsapp/waba/list",
    PostWhatsAppMessageMedia: "POST /v1/whatsapp/media",
    PutWhatsAppBusinessAccountEventDestinations:
      "PUT /v1/whatsapp/waba/eventdestinations",
    SendWhatsAppMessage: "POST /v1/whatsapp/send",
  },
} as const satisfies ServiceMetadata;

export type _SocialMessaging = _SocialMessagingClient;
export interface SocialMessaging extends _SocialMessaging {}
export const SocialMessaging = class extends AWSServiceClient {
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
} as unknown as typeof _SocialMessagingClient;
