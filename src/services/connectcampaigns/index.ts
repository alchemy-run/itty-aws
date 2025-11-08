import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ConnectCampaigns as _ConnectCampaignsClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "ConnectCampaigns",
  version: "2021-01-30",
  protocol: "restJson1",
  sigV4ServiceName: "connect-campaigns",
  operations: {
    "CreateCampaign": "PUT /campaigns",
    "DeleteCampaign": "DELETE /campaigns/{id}",
    "DeleteConnectInstanceConfig": "DELETE /connect-instance/{connectInstanceId}/config",
    "DeleteInstanceOnboardingJob": "DELETE /connect-instance/{connectInstanceId}/onboarding",
    "DescribeCampaign": "GET /campaigns/{id}",
    "GetCampaignState": "GET /campaigns/{id}/state",
    "GetCampaignStateBatch": "POST /campaigns-state",
    "GetConnectInstanceConfig": "GET /connect-instance/{connectInstanceId}/config",
    "GetInstanceOnboardingJobStatus": "GET /connect-instance/{connectInstanceId}/onboarding",
    "ListCampaigns": "POST /campaigns-summary",
    "ListTagsForResource": "GET /tags/{arn}",
    "PauseCampaign": "POST /campaigns/{id}/pause",
    "PutDialRequestBatch": "PUT /campaigns/{id}/dial-requests",
    "ResumeCampaign": "POST /campaigns/{id}/resume",
    "StartCampaign": "POST /campaigns/{id}/start",
    "StartInstanceOnboardingJob": "PUT /connect-instance/{connectInstanceId}/onboarding",
    "StopCampaign": "POST /campaigns/{id}/stop",
    "TagResource": "POST /tags/{arn}",
    "UntagResource": "DELETE /tags/{arn}",
    "UpdateCampaignDialerConfig": "POST /campaigns/{id}/dialer-config",
    "UpdateCampaignName": "POST /campaigns/{id}/name",
    "UpdateCampaignOutboundCallConfig": "POST /campaigns/{id}/outbound-call-config",
  },
} as const satisfies ServiceMetadata;

export type _ConnectCampaigns = _ConnectCampaignsClient;
export interface ConnectCampaigns extends _ConnectCampaigns {}
export const ConnectCampaigns = class extends AWSServiceClient {
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
} as unknown as typeof _ConnectCampaignsClient;
