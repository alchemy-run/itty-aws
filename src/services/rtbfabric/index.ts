import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { RTBFabric as _RTBFabricClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "RTBFabric",
  version: "2023-05-15",
  protocol: "restJson1",
  sigV4ServiceName: "rtbfabric",
  operations: {
    "ListRequesterGateways": "GET /requester-gateways",
    "ListResponderGateways": "GET /responder-gateways",
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
    "AcceptLink": "POST /gateway/{gatewayId}/link/{linkId}/accept",
    "CreateInboundExternalLink": "POST /responder-gateway/{gatewayId}/inbound-external-link",
    "CreateLink": "POST /gateway/{gatewayId}/create-link",
    "CreateOutboundExternalLink": "POST /requester-gateway/{gatewayId}/outbound-external-link",
    "CreateRequesterGateway": "POST /requester-gateway",
    "CreateResponderGateway": "POST /responder-gateway",
    "DeleteInboundExternalLink": "DELETE /responder-gateway/{gatewayId}/inbound-external-link/{linkId}",
    "DeleteLink": "DELETE /gateway/{gatewayId}/link/{linkId}",
    "DeleteOutboundExternalLink": "DELETE /requester-gateway/{gatewayId}/outbound-external-link/{linkId}",
    "DeleteRequesterGateway": "DELETE /requester-gateway/{gatewayId}",
    "DeleteResponderGateway": "DELETE /responder-gateway/{gatewayId}",
    "GetInboundExternalLink": "GET /responder-gateway/{gatewayId}/inbound-external-link/{linkId}",
    "GetLink": "GET /gateway/{gatewayId}/link/{linkId}",
    "GetOutboundExternalLink": "GET /requester-gateway/{gatewayId}/outbound-external-link/{linkId}",
    "GetRequesterGateway": "GET /requester-gateway/{gatewayId}",
    "GetResponderGateway": "GET /responder-gateway/{gatewayId}",
    "ListLinks": "GET /gateway/{gatewayId}/links/",
    "RejectLink": "POST /gateway/{gatewayId}/link/{linkId}/reject",
    "UpdateLink": "PATCH /gateway/{gatewayId}/link/{linkId}",
    "UpdateLinkModuleFlow": "POST /gateway/{gatewayId}/link/{linkId}/module-flow",
    "UpdateRequesterGateway": "POST /requester-gateway/{gatewayId}/update",
    "UpdateResponderGateway": "POST /responder-gateway/{gatewayId}/update",
  },
  retryableErrors: {
    "InternalServerException": {},
    "ThrottlingException": {},
  },
} as const satisfies ServiceMetadata;

export type _RTBFabric = _RTBFabricClient;
export interface RTBFabric extends _RTBFabric {}
export const RTBFabric = class extends AWSServiceClient {
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
} as unknown as typeof _RTBFabricClient;
