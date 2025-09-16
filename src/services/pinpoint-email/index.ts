import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PinpointEmail as _PinpointEmailClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Pinpoint Email",
  version: "2018-07-26",
  protocol: "restJson1",
  sigV4ServiceName: "ses",
  endpointPrefix: "email",
  operations: {
    CreateConfigurationSet: "POST /v1/email/configuration-sets",
    CreateConfigurationSetEventDestination:
      "POST /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations",
    CreateDedicatedIpPool: "POST /v1/email/dedicated-ip-pools",
    CreateDeliverabilityTestReport:
      "POST /v1/email/deliverability-dashboard/test",
    CreateEmailIdentity: "POST /v1/email/identities",
    DeleteConfigurationSet:
      "DELETE /v1/email/configuration-sets/{ConfigurationSetName}",
    DeleteConfigurationSetEventDestination:
      "DELETE /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
    DeleteDedicatedIpPool: "DELETE /v1/email/dedicated-ip-pools/{PoolName}",
    DeleteEmailIdentity: "DELETE /v1/email/identities/{EmailIdentity}",
    GetAccount: "GET /v1/email/account",
    GetBlacklistReports:
      "GET /v1/email/deliverability-dashboard/blacklist-report",
    GetConfigurationSet:
      "GET /v1/email/configuration-sets/{ConfigurationSetName}",
    GetConfigurationSetEventDestinations:
      "GET /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations",
    GetDedicatedIp: "GET /v1/email/dedicated-ips/{Ip}",
    GetDedicatedIps: "GET /v1/email/dedicated-ips",
    GetDeliverabilityDashboardOptions: "GET /v1/email/deliverability-dashboard",
    GetDeliverabilityTestReport:
      "GET /v1/email/deliverability-dashboard/test-reports/{ReportId}",
    GetDomainDeliverabilityCampaign:
      "GET /v1/email/deliverability-dashboard/campaigns/{CampaignId}",
    GetDomainStatisticsReport:
      "GET /v1/email/deliverability-dashboard/statistics-report/{Domain}",
    GetEmailIdentity: "GET /v1/email/identities/{EmailIdentity}",
    ListConfigurationSets: "GET /v1/email/configuration-sets",
    ListDedicatedIpPools: "GET /v1/email/dedicated-ip-pools",
    ListDeliverabilityTestReports:
      "GET /v1/email/deliverability-dashboard/test-reports",
    ListDomainDeliverabilityCampaigns:
      "GET /v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns",
    ListEmailIdentities: "GET /v1/email/identities",
    ListTagsForResource: "GET /v1/email/tags",
    PutAccountDedicatedIpWarmupAttributes:
      "PUT /v1/email/account/dedicated-ips/warmup",
    PutAccountSendingAttributes: "PUT /v1/email/account/sending",
    PutConfigurationSetDeliveryOptions:
      "PUT /v1/email/configuration-sets/{ConfigurationSetName}/delivery-options",
    PutConfigurationSetReputationOptions:
      "PUT /v1/email/configuration-sets/{ConfigurationSetName}/reputation-options",
    PutConfigurationSetSendingOptions:
      "PUT /v1/email/configuration-sets/{ConfigurationSetName}/sending",
    PutConfigurationSetTrackingOptions:
      "PUT /v1/email/configuration-sets/{ConfigurationSetName}/tracking-options",
    PutDedicatedIpInPool: "PUT /v1/email/dedicated-ips/{Ip}/pool",
    PutDedicatedIpWarmupAttributes: "PUT /v1/email/dedicated-ips/{Ip}/warmup",
    PutDeliverabilityDashboardOption: "PUT /v1/email/deliverability-dashboard",
    PutEmailIdentityDkimAttributes:
      "PUT /v1/email/identities/{EmailIdentity}/dkim",
    PutEmailIdentityFeedbackAttributes:
      "PUT /v1/email/identities/{EmailIdentity}/feedback",
    PutEmailIdentityMailFromAttributes:
      "PUT /v1/email/identities/{EmailIdentity}/mail-from",
    SendEmail: "POST /v1/email/outbound-emails",
    TagResource: "POST /v1/email/tags",
    UntagResource: "DELETE /v1/email/tags",
    UpdateConfigurationSetEventDestination:
      "PUT /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
  },
} as const satisfies ServiceMetadata;

export type _PinpointEmail = _PinpointEmailClient;
export interface PinpointEmail extends _PinpointEmail {}
export const PinpointEmail = class extends AWSServiceClient {
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
} as unknown as typeof _PinpointEmailClient;
