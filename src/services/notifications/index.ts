import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Notifications as _NotificationsClient } from "./types.ts";

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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Notifications",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "notifications",
  endpointPrefix: "notifications",
  operations: {
    ListManagedNotificationChannelAssociations:
      "GET /channels/list-managed-notification-channel-associations",
    ListMemberAccounts: "GET /list-member-accounts",
    ListTagsForResource: "GET /tags/{arn}",
    TagResource: "POST /tags/{arn}",
    UntagResource: "DELETE /tags/{arn}",
    AssociateChannel: "POST /channels/associate/{arn}",
    AssociateManagedNotificationAccountContact:
      "PUT /contacts/associate-managed-notification/{contactIdentifier}",
    AssociateManagedNotificationAdditionalChannel:
      "PUT /channels/associate-managed-notification/{channelArn}",
    AssociateOrganizationalUnit:
      "POST /organizational-units/associate/{organizationalUnitId}",
    CreateEventRule: "POST /event-rules",
    CreateNotificationConfiguration: "POST /notification-configurations",
    DeleteEventRule: "DELETE /event-rules/{arn}",
    DeleteNotificationConfiguration:
      "DELETE /notification-configurations/{arn}",
    DeregisterNotificationHub:
      "DELETE /notification-hubs/{notificationHubRegion}",
    DisableNotificationsAccessForOrganization: "DELETE /organization/access",
    DisassociateChannel: "POST /channels/disassociate/{arn}",
    DisassociateManagedNotificationAccountContact:
      "PUT /contacts/disassociate-managed-notification/{contactIdentifier}",
    DisassociateManagedNotificationAdditionalChannel:
      "PUT /channels/disassociate-managed-notification/{channelArn}",
    DisassociateOrganizationalUnit:
      "POST /organizational-units/disassociate/{organizationalUnitId}",
    EnableNotificationsAccessForOrganization: "POST /organization/access",
    GetEventRule: "GET /event-rules/{arn}",
    GetManagedNotificationChildEvent:
      "GET /managed-notification-child-events/{arn}",
    GetManagedNotificationConfiguration:
      "GET /managed-notification-configurations/{arn}",
    GetManagedNotificationEvent: "GET /managed-notification-events/{arn}",
    GetNotificationConfiguration: "GET /notification-configurations/{arn}",
    GetNotificationEvent: "GET /notification-events/{arn}",
    GetNotificationsAccessForOrganization: "GET /organization/access",
    ListChannels: "GET /channels",
    ListEventRules: "GET /event-rules",
    ListManagedNotificationChildEvents:
      "GET /list-managed-notification-child-events/{aggregateManagedNotificationEventArn}",
    ListManagedNotificationConfigurations:
      "GET /managed-notification-configurations",
    ListManagedNotificationEvents: "GET /managed-notification-events",
    ListNotificationConfigurations: "GET /notification-configurations",
    ListNotificationEvents: "GET /notification-events",
    ListNotificationHubs: "GET /notification-hubs",
    ListOrganizationalUnits: "GET /organizational-units",
    RegisterNotificationHub: "POST /notification-hubs",
    UpdateEventRule: "PUT /event-rules/{arn}",
    UpdateNotificationConfiguration: "PUT /notification-configurations/{arn}",
  },
} as const satisfies ServiceMetadata;

export type _Notifications = _NotificationsClient;
export interface Notifications extends _Notifications {}
export const Notifications = class extends AWSServiceClient {
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
} as unknown as typeof _NotificationsClient;
