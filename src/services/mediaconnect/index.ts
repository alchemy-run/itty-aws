import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MediaConnect as _MediaConnectClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "MediaConnect",
  version: "2018-11-14",
  protocol: "restJson1",
  sigV4ServiceName: "mediaconnect",
  operations: {
    ListEntitlements: "GET /v1/entitlements",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    AddBridgeOutputs: "POST /v1/bridges/{BridgeArn}/outputs",
    AddBridgeSources: "POST /v1/bridges/{BridgeArn}/sources",
    AddFlowMediaStreams: "POST /v1/flows/{FlowArn}/mediaStreams",
    AddFlowOutputs: "POST /v1/flows/{FlowArn}/outputs",
    AddFlowSources: "POST /v1/flows/{FlowArn}/source",
    AddFlowVpcInterfaces: "POST /v1/flows/{FlowArn}/vpcInterfaces",
    CreateBridge: "POST /v1/bridges",
    CreateFlow: "POST /v1/flows",
    CreateGateway: "POST /v1/gateways",
    DeleteBridge: "DELETE /v1/bridges/{BridgeArn}",
    DeleteFlow: "DELETE /v1/flows/{FlowArn}",
    DeleteGateway: "DELETE /v1/gateways/{GatewayArn}",
    DeregisterGatewayInstance:
      "DELETE /v1/gateway-instances/{GatewayInstanceArn}",
    DescribeBridge: "GET /v1/bridges/{BridgeArn}",
    DescribeFlow: "GET /v1/flows/{FlowArn}",
    DescribeFlowSourceMetadata: "GET /v1/flows/{FlowArn}/source-metadata",
    DescribeFlowSourceThumbnail: "GET /v1/flows/{FlowArn}/source-thumbnail",
    DescribeGateway: "GET /v1/gateways/{GatewayArn}",
    DescribeGatewayInstance: "GET /v1/gateway-instances/{GatewayInstanceArn}",
    DescribeOffering: "GET /v1/offerings/{OfferingArn}",
    DescribeReservation: "GET /v1/reservations/{ReservationArn}",
    GrantFlowEntitlements: "POST /v1/flows/{FlowArn}/entitlements",
    ListBridges: "GET /v1/bridges",
    ListFlows: "GET /v1/flows",
    ListGatewayInstances: "GET /v1/gateway-instances",
    ListGateways: "GET /v1/gateways",
    ListOfferings: "GET /v1/offerings",
    ListReservations: "GET /v1/reservations",
    PurchaseOffering: "POST /v1/offerings/{OfferingArn}",
    RemoveBridgeOutput: "DELETE /v1/bridges/{BridgeArn}/outputs/{OutputName}",
    RemoveBridgeSource: "DELETE /v1/bridges/{BridgeArn}/sources/{SourceName}",
    RemoveFlowMediaStream:
      "DELETE /v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}",
    RemoveFlowOutput: "DELETE /v1/flows/{FlowArn}/outputs/{OutputArn}",
    RemoveFlowSource: "DELETE /v1/flows/{FlowArn}/source/{SourceArn}",
    RemoveFlowVpcInterface:
      "DELETE /v1/flows/{FlowArn}/vpcInterfaces/{VpcInterfaceName}",
    RevokeFlowEntitlement:
      "DELETE /v1/flows/{FlowArn}/entitlements/{EntitlementArn}",
    StartFlow: "POST /v1/flows/start/{FlowArn}",
    StopFlow: "POST /v1/flows/stop/{FlowArn}",
    UpdateBridge: "PUT /v1/bridges/{BridgeArn}",
    UpdateBridgeOutput: "PUT /v1/bridges/{BridgeArn}/outputs/{OutputName}",
    UpdateBridgeSource: "PUT /v1/bridges/{BridgeArn}/sources/{SourceName}",
    UpdateBridgeState: "PUT /v1/bridges/{BridgeArn}/state",
    UpdateFlow: "PUT /v1/flows/{FlowArn}",
    UpdateFlowEntitlement:
      "PUT /v1/flows/{FlowArn}/entitlements/{EntitlementArn}",
    UpdateFlowMediaStream:
      "PUT /v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}",
    UpdateFlowOutput: "PUT /v1/flows/{FlowArn}/outputs/{OutputArn}",
    UpdateFlowSource: "PUT /v1/flows/{FlowArn}/source/{SourceArn}",
    UpdateGatewayInstance: "PUT /v1/gateway-instances/{GatewayInstanceArn}",
  },
} as const satisfies ServiceMetadata;

export type _MediaConnect = _MediaConnectClient;
export interface MediaConnect extends _MediaConnect {}
export const MediaConnect = class extends AWSServiceClient {
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
} as unknown as typeof _MediaConnectClient;
