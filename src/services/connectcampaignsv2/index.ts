import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ConnectCampaignsV2 as _ConnectCampaignsV2Client } from "./types.ts";

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
  sdkId: "ConnectCampaignsV2",
  version: "2024-04-23",
  protocol: "restJson1",
  sigV4ServiceName: "connect-campaigns",
  operations: {
    CreateCampaign: "PUT /v2/campaigns",
    DeleteCampaign: "DELETE /v2/campaigns/{id}",
    DeleteCampaignChannelSubtypeConfig:
      "DELETE /v2/campaigns/{id}/channel-subtype-config",
    DeleteCampaignCommunicationLimits:
      "DELETE /v2/campaigns/{id}/communication-limits",
    DeleteCampaignCommunicationTime:
      "DELETE /v2/campaigns/{id}/communication-time",
    DeleteConnectInstanceConfig:
      "DELETE /v2/connect-instance/{connectInstanceId}/config",
    DeleteConnectInstanceIntegration:
      "POST /v2/connect-instance/{connectInstanceId}/integrations/delete",
    DeleteInstanceOnboardingJob:
      "DELETE /v2/connect-instance/{connectInstanceId}/onboarding",
    DescribeCampaign: "GET /v2/campaigns/{id}",
    GetCampaignState: "GET /v2/campaigns/{id}/state",
    GetCampaignStateBatch: "POST /v2/campaigns-state",
    GetConnectInstanceConfig:
      "GET /v2/connect-instance/{connectInstanceId}/config",
    GetInstanceCommunicationLimits:
      "GET /v2/connect-instance/{connectInstanceId}/communication-limits",
    GetInstanceOnboardingJobStatus:
      "GET /v2/connect-instance/{connectInstanceId}/onboarding",
    ListCampaigns: "POST /v2/campaigns-summary",
    ListConnectInstanceIntegrations:
      "GET /v2/connect-instance/{connectInstanceId}/integrations",
    ListTagsForResource: "GET /v2/tags/{arn}",
    PauseCampaign: "POST /v2/campaigns/{id}/pause",
    PutConnectInstanceIntegration:
      "PUT /v2/connect-instance/{connectInstanceId}/integrations",
    PutInstanceCommunicationLimits:
      "PUT /v2/connect-instance/{connectInstanceId}/communication-limits",
    PutOutboundRequestBatch: "PUT /v2/campaigns/{id}/outbound-requests",
    PutProfileOutboundRequestBatch:
      "PUT /v2/campaigns/{id}/profile-outbound-requests",
    ResumeCampaign: "POST /v2/campaigns/{id}/resume",
    StartCampaign: "POST /v2/campaigns/{id}/start",
    StartInstanceOnboardingJob:
      "PUT /v2/connect-instance/{connectInstanceId}/onboarding",
    StopCampaign: "POST /v2/campaigns/{id}/stop",
    TagResource: "POST /v2/tags/{arn}",
    UntagResource: "DELETE /v2/tags/{arn}",
    UpdateCampaignChannelSubtypeConfig:
      "POST /v2/campaigns/{id}/channel-subtype-config",
    UpdateCampaignCommunicationLimits:
      "POST /v2/campaigns/{id}/communication-limits",
    UpdateCampaignCommunicationTime:
      "POST /v2/campaigns/{id}/communication-time",
    UpdateCampaignFlowAssociation: "POST /v2/campaigns/{id}/flow",
    UpdateCampaignName: "POST /v2/campaigns/{id}/name",
    UpdateCampaignSchedule: "POST /v2/campaigns/{id}/schedule",
    UpdateCampaignSource: "POST /v2/campaigns/{id}/source",
  },
} as const satisfies ServiceMetadata;

export type _ConnectCampaignsV2 = _ConnectCampaignsV2Client;
export interface ConnectCampaignsV2 extends _ConnectCampaignsV2 {}
export const ConnectCampaignsV2 = class extends AWSServiceClient {
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
} as unknown as typeof _ConnectCampaignsV2Client;
