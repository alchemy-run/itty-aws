import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LicenseManagerUserSubscriptions as _LicenseManagerUserSubscriptionsClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "License Manager User Subscriptions",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "license-manager-user-subscriptions",
  operations: {
    AssociateUser: "POST /user/AssociateUser",
    CreateLicenseServerEndpoint:
      "POST /license-server/CreateLicenseServerEndpoint",
    DeleteLicenseServerEndpoint:
      "POST /license-server/DeleteLicenseServerEndpoint",
    DeregisterIdentityProvider:
      "POST /identity-provider/DeregisterIdentityProvider",
    DisassociateUser: "POST /user/DisassociateUser",
    ListIdentityProviders: "POST /identity-provider/ListIdentityProviders",
    ListInstances: "POST /instance/ListInstances",
    ListLicenseServerEndpoints:
      "POST /license-server/ListLicenseServerEndpoints",
    ListProductSubscriptions: "POST /user/ListProductSubscriptions",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    ListUserAssociations: "POST /user/ListUserAssociations",
    RegisterIdentityProvider:
      "POST /identity-provider/RegisterIdentityProvider",
    StartProductSubscription: "POST /user/StartProductSubscription",
    StopProductSubscription: "POST /user/StopProductSubscription",
    TagResource: "PUT /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateIdentityProviderSettings:
      "POST /identity-provider/UpdateIdentityProviderSettings",
  },
} as const satisfies ServiceMetadata;

export type _LicenseManagerUserSubscriptions =
  _LicenseManagerUserSubscriptionsClient;
export interface LicenseManagerUserSubscriptions
  extends _LicenseManagerUserSubscriptions {}
export const LicenseManagerUserSubscriptions = class extends AWSServiceClient {
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
} as unknown as typeof _LicenseManagerUserSubscriptionsClient;
