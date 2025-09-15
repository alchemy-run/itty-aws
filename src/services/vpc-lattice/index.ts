import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { VPCLattice as _VPCLatticeClient } from "./types.ts";

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
  sdkId: "VPC Lattice",
  version: "2022-11-30",
  protocol: "restJson1",
  sigV4ServiceName: "vpc-lattice",
  operations: {
    BatchUpdateRule:
      "PATCH /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules",
    DeleteAuthPolicy: "DELETE /authpolicy/{resourceIdentifier}",
    DeleteResourcePolicy: "DELETE /resourcepolicy/{resourceArn}",
    GetAuthPolicy: "GET /authpolicy/{resourceIdentifier}",
    GetResourcePolicy: "GET /resourcepolicy/{resourceArn}",
    ListServiceNetworkVpcEndpointAssociations:
      "GET /servicenetworkvpcendpointassociations",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutAuthPolicy: "PUT /authpolicy/{resourceIdentifier}",
    PutResourcePolicy: "PUT /resourcepolicy/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreateAccessLogSubscription: "POST /accesslogsubscriptions",
    CreateListener: "POST /services/{serviceIdentifier}/listeners",
    CreateResourceConfiguration: "POST /resourceconfigurations",
    CreateResourceGateway: "POST /resourcegateways",
    CreateRule:
      "POST /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules",
    CreateService: "POST /services",
    CreateServiceNetwork: "POST /servicenetworks",
    CreateServiceNetworkResourceAssociation:
      "POST /servicenetworkresourceassociations",
    CreateServiceNetworkServiceAssociation:
      "POST /servicenetworkserviceassociations",
    CreateServiceNetworkVpcAssociation: "POST /servicenetworkvpcassociations",
    CreateTargetGroup: "POST /targetgroups",
    DeleteAccessLogSubscription:
      "DELETE /accesslogsubscriptions/{accessLogSubscriptionIdentifier}",
    DeleteListener:
      "DELETE /services/{serviceIdentifier}/listeners/{listenerIdentifier}",
    DeleteResourceConfiguration:
      "DELETE /resourceconfigurations/{resourceConfigurationIdentifier}",
    DeleteResourceEndpointAssociation:
      "DELETE /resourceendpointassociations/{resourceEndpointAssociationIdentifier}",
    DeleteResourceGateway:
      "DELETE /resourcegateways/{resourceGatewayIdentifier}",
    DeleteRule:
      "DELETE /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}",
    DeleteService: "DELETE /services/{serviceIdentifier}",
    DeleteServiceNetwork: "DELETE /servicenetworks/{serviceNetworkIdentifier}",
    DeleteServiceNetworkResourceAssociation:
      "DELETE /servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}",
    DeleteServiceNetworkServiceAssociation:
      "DELETE /servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}",
    DeleteServiceNetworkVpcAssociation:
      "DELETE /servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}",
    DeleteTargetGroup: "DELETE /targetgroups/{targetGroupIdentifier}",
    DeregisterTargets:
      "POST /targetgroups/{targetGroupIdentifier}/deregistertargets",
    GetAccessLogSubscription:
      "GET /accesslogsubscriptions/{accessLogSubscriptionIdentifier}",
    GetListener:
      "GET /services/{serviceIdentifier}/listeners/{listenerIdentifier}",
    GetResourceConfiguration:
      "GET /resourceconfigurations/{resourceConfigurationIdentifier}",
    GetResourceGateway: "GET /resourcegateways/{resourceGatewayIdentifier}",
    GetRule:
      "GET /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}",
    GetService: "GET /services/{serviceIdentifier}",
    GetServiceNetwork: "GET /servicenetworks/{serviceNetworkIdentifier}",
    GetServiceNetworkResourceAssociation:
      "GET /servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}",
    GetServiceNetworkServiceAssociation:
      "GET /servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}",
    GetServiceNetworkVpcAssociation:
      "GET /servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}",
    GetTargetGroup: "GET /targetgroups/{targetGroupIdentifier}",
    ListAccessLogSubscriptions: "GET /accesslogsubscriptions",
    ListListeners: "GET /services/{serviceIdentifier}/listeners",
    ListResourceConfigurations: "GET /resourceconfigurations",
    ListResourceEndpointAssociations: "GET /resourceendpointassociations",
    ListResourceGateways: "GET /resourcegateways",
    ListRules:
      "GET /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules",
    ListServiceNetworkResourceAssociations:
      "GET /servicenetworkresourceassociations",
    ListServiceNetworkServiceAssociations:
      "GET /servicenetworkserviceassociations",
    ListServiceNetworkVpcAssociations: "GET /servicenetworkvpcassociations",
    ListServiceNetworks: "GET /servicenetworks",
    ListServices: "GET /services",
    ListTargetGroups: "GET /targetgroups",
    ListTargets: "POST /targetgroups/{targetGroupIdentifier}/listtargets",
    RegisterTargets:
      "POST /targetgroups/{targetGroupIdentifier}/registertargets",
    UpdateAccessLogSubscription:
      "PATCH /accesslogsubscriptions/{accessLogSubscriptionIdentifier}",
    UpdateListener:
      "PATCH /services/{serviceIdentifier}/listeners/{listenerIdentifier}",
    UpdateResourceConfiguration:
      "PATCH /resourceconfigurations/{resourceConfigurationIdentifier}",
    UpdateResourceGateway:
      "PATCH /resourcegateways/{resourceGatewayIdentifier}",
    UpdateRule:
      "PATCH /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}",
    UpdateService: "PATCH /services/{serviceIdentifier}",
    UpdateServiceNetwork: "PATCH /servicenetworks/{serviceNetworkIdentifier}",
    UpdateServiceNetworkVpcAssociation:
      "PATCH /servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}",
    UpdateTargetGroup: "PATCH /targetgroups/{targetGroupIdentifier}",
  },
} as const satisfies ServiceMetadata;

export type _VPCLattice = _VPCLatticeClient;
export interface VPCLattice extends _VPCLattice {}
export const VPCLattice = class extends AWSServiceClient {
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
} as unknown as typeof _VPCLatticeClient;
