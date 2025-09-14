import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Chime as _ChimeClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Chime",
  version: "2018-05-01",
  protocol: "restJson1",
  sigV4ServiceName: "chime",
  endpointPrefix: "chime",
  operations: {
    AssociatePhoneNumberWithUser:
      "POST /accounts/{AccountId}/users/{UserId}?operation=associate-phone-number",
    AssociateSigninDelegateGroupsWithAccount:
      "POST /accounts/{AccountId}?operation=associate-signin-delegate-groups",
    BatchCreateRoomMembership:
      "POST /accounts/{AccountId}/rooms/{RoomId}/memberships?operation=batch-create",
    BatchDeletePhoneNumber: "POST /phone-numbers?operation=batch-delete",
    BatchSuspendUser: "POST /accounts/{AccountId}/users?operation=suspend",
    BatchUnsuspendUser: "POST /accounts/{AccountId}/users?operation=unsuspend",
    BatchUpdatePhoneNumber: "POST /phone-numbers?operation=batch-update",
    BatchUpdateUser: "POST /accounts/{AccountId}/users",
    CreateAccount: "POST /accounts",
    CreateBot: "POST /accounts/{AccountId}/bots",
    CreateMeetingDialOut: "POST /meetings/{MeetingId}/dial-outs",
    CreatePhoneNumberOrder: "POST /phone-number-orders",
    CreateRoom: "POST /accounts/{AccountId}/rooms",
    CreateRoomMembership:
      "POST /accounts/{AccountId}/rooms/{RoomId}/memberships",
    CreateUser: "POST /accounts/{AccountId}/users?operation=create",
    DeleteAccount: "DELETE /accounts/{AccountId}",
    DeleteEventsConfiguration:
      "DELETE /accounts/{AccountId}/bots/{BotId}/events-configuration",
    DeletePhoneNumber: "DELETE /phone-numbers/{PhoneNumberId}",
    DeleteRoom: "DELETE /accounts/{AccountId}/rooms/{RoomId}",
    DeleteRoomMembership:
      "DELETE /accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}",
    DisassociatePhoneNumberFromUser:
      "POST /accounts/{AccountId}/users/{UserId}?operation=disassociate-phone-number",
    DisassociateSigninDelegateGroupsFromAccount:
      "POST /accounts/{AccountId}?operation=disassociate-signin-delegate-groups",
    GetAccount: "GET /accounts/{AccountId}",
    GetAccountSettings: "GET /accounts/{AccountId}/settings",
    GetBot: "GET /accounts/{AccountId}/bots/{BotId}",
    GetEventsConfiguration:
      "GET /accounts/{AccountId}/bots/{BotId}/events-configuration",
    GetGlobalSettings: "GET /settings",
    GetPhoneNumber: "GET /phone-numbers/{PhoneNumberId}",
    GetPhoneNumberOrder: "GET /phone-number-orders/{PhoneNumberOrderId}",
    GetPhoneNumberSettings: "GET /settings/phone-number",
    GetRetentionSettings: "GET /accounts/{AccountId}/retention-settings",
    GetRoom: "GET /accounts/{AccountId}/rooms/{RoomId}",
    GetUser: "GET /accounts/{AccountId}/users/{UserId}",
    GetUserSettings: "GET /accounts/{AccountId}/users/{UserId}/settings",
    InviteUsers: "POST /accounts/{AccountId}/users?operation=add",
    ListAccounts: "GET /accounts",
    ListBots: "GET /accounts/{AccountId}/bots",
    ListPhoneNumberOrders: "GET /phone-number-orders",
    ListPhoneNumbers: "GET /phone-numbers",
    ListRoomMemberships: "GET /accounts/{AccountId}/rooms/{RoomId}/memberships",
    ListRooms: "GET /accounts/{AccountId}/rooms",
    ListSupportedPhoneNumberCountries: "GET /phone-number-countries",
    ListUsers: "GET /accounts/{AccountId}/users",
    LogoutUser: "POST /accounts/{AccountId}/users/{UserId}?operation=logout",
    PutEventsConfiguration:
      "PUT /accounts/{AccountId}/bots/{BotId}/events-configuration",
    PutRetentionSettings: "PUT /accounts/{AccountId}/retention-settings",
    RedactConversationMessage:
      "POST /accounts/{AccountId}/conversations/{ConversationId}/messages/{MessageId}?operation=redact",
    RedactRoomMessage:
      "POST /accounts/{AccountId}/rooms/{RoomId}/messages/{MessageId}?operation=redact",
    RegenerateSecurityToken:
      "POST /accounts/{AccountId}/bots/{BotId}?operation=regenerate-security-token",
    ResetPersonalPIN:
      "POST /accounts/{AccountId}/users/{UserId}?operation=reset-personal-pin",
    RestorePhoneNumber: "POST /phone-numbers/{PhoneNumberId}?operation=restore",
    SearchAvailablePhoneNumbers: "GET /search?type=phone-numbers",
    UpdateAccount: "POST /accounts/{AccountId}",
    UpdateAccountSettings: "PUT /accounts/{AccountId}/settings",
    UpdateBot: "POST /accounts/{AccountId}/bots/{BotId}",
    UpdateGlobalSettings: "PUT /settings",
    UpdatePhoneNumber: "POST /phone-numbers/{PhoneNumberId}",
    UpdatePhoneNumberSettings: "PUT /settings/phone-number",
    UpdateRoom: "POST /accounts/{AccountId}/rooms/{RoomId}",
    UpdateRoomMembership:
      "POST /accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}",
    UpdateUser: "POST /accounts/{AccountId}/users/{UserId}",
    UpdateUserSettings: "PUT /accounts/{AccountId}/users/{UserId}/settings",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Chime = class extends AWSServiceClient {
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
} as unknown as typeof _ChimeClient;
