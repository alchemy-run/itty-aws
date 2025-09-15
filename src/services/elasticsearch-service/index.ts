import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ElasticsearchService as _ElasticsearchServiceClient } from "./types.ts";

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
  sdkId: "Elasticsearch Service",
  version: "2015-01-01",
  protocol: "restJson1",
  sigV4ServiceName: "es",
  endpointPrefix: "es",
  operations: {
    AcceptInboundCrossClusterSearchConnection:
      "PUT /2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/accept",
    AddTags: "POST /2015-01-01/tags",
    AssociatePackage:
      "POST /2015-01-01/packages/associate/{PackageID}/{DomainName}",
    AuthorizeVpcEndpointAccess:
      "POST /2015-01-01/es/domain/{DomainName}/authorizeVpcEndpointAccess",
    CancelDomainConfigChange:
      "POST /2015-01-01/es/domain/{DomainName}/config/cancel",
    CancelElasticsearchServiceSoftwareUpdate:
      "POST /2015-01-01/es/serviceSoftwareUpdate/cancel",
    CreateElasticsearchDomain: "POST /2015-01-01/es/domain",
    CreateOutboundCrossClusterSearchConnection:
      "POST /2015-01-01/es/ccs/outboundConnection",
    CreatePackage: "POST /2015-01-01/packages",
    CreateVpcEndpoint: "POST /2015-01-01/es/vpcEndpoints",
    DeleteElasticsearchDomain: "DELETE /2015-01-01/es/domain/{DomainName}",
    DeleteElasticsearchServiceRole: "DELETE /2015-01-01/es/role",
    DeleteInboundCrossClusterSearchConnection:
      "DELETE /2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}",
    DeleteOutboundCrossClusterSearchConnection:
      "DELETE /2015-01-01/es/ccs/outboundConnection/{CrossClusterSearchConnectionId}",
    DeletePackage: "DELETE /2015-01-01/packages/{PackageID}",
    DeleteVpcEndpoint: "DELETE /2015-01-01/es/vpcEndpoints/{VpcEndpointId}",
    DescribeDomainAutoTunes: "GET /2015-01-01/es/domain/{DomainName}/autoTunes",
    DescribeDomainChangeProgress:
      "GET /2015-01-01/es/domain/{DomainName}/progress",
    DescribeElasticsearchDomain: "GET /2015-01-01/es/domain/{DomainName}",
    DescribeElasticsearchDomainConfig:
      "GET /2015-01-01/es/domain/{DomainName}/config",
    DescribeElasticsearchDomains: "POST /2015-01-01/es/domain-info",
    DescribeElasticsearchInstanceTypeLimits:
      "GET /2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}",
    DescribeInboundCrossClusterSearchConnections:
      "POST /2015-01-01/es/ccs/inboundConnection/search",
    DescribeOutboundCrossClusterSearchConnections:
      "POST /2015-01-01/es/ccs/outboundConnection/search",
    DescribePackages: "POST /2015-01-01/packages/describe",
    DescribeReservedElasticsearchInstanceOfferings:
      "GET /2015-01-01/es/reservedInstanceOfferings",
    DescribeReservedElasticsearchInstances:
      "GET /2015-01-01/es/reservedInstances",
    DescribeVpcEndpoints: "POST /2015-01-01/es/vpcEndpoints/describe",
    DissociatePackage:
      "POST /2015-01-01/packages/dissociate/{PackageID}/{DomainName}",
    GetCompatibleElasticsearchVersions: "GET /2015-01-01/es/compatibleVersions",
    GetPackageVersionHistory: "GET /2015-01-01/packages/{PackageID}/history",
    GetUpgradeHistory: "GET /2015-01-01/es/upgradeDomain/{DomainName}/history",
    GetUpgradeStatus: "GET /2015-01-01/es/upgradeDomain/{DomainName}/status",
    ListDomainNames: "GET /2015-01-01/domain",
    ListDomainsForPackage: "GET /2015-01-01/packages/{PackageID}/domains",
    ListElasticsearchInstanceTypes:
      "GET /2015-01-01/es/instanceTypes/{ElasticsearchVersion}",
    ListElasticsearchVersions: "GET /2015-01-01/es/versions",
    ListPackagesForDomain: "GET /2015-01-01/domain/{DomainName}/packages",
    ListTags: "GET /2015-01-01/tags",
    ListVpcEndpointAccess:
      "GET /2015-01-01/es/domain/{DomainName}/listVpcEndpointAccess",
    ListVpcEndpoints: "GET /2015-01-01/es/vpcEndpoints",
    ListVpcEndpointsForDomain:
      "GET /2015-01-01/es/domain/{DomainName}/vpcEndpoints",
    PurchaseReservedElasticsearchInstanceOffering:
      "POST /2015-01-01/es/purchaseReservedInstanceOffering",
    RejectInboundCrossClusterSearchConnection:
      "PUT /2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/reject",
    RemoveTags: "POST /2015-01-01/tags-removal",
    RevokeVpcEndpointAccess:
      "POST /2015-01-01/es/domain/{DomainName}/revokeVpcEndpointAccess",
    StartElasticsearchServiceSoftwareUpdate:
      "POST /2015-01-01/es/serviceSoftwareUpdate/start",
    UpdateElasticsearchDomainConfig:
      "POST /2015-01-01/es/domain/{DomainName}/config",
    UpdatePackage: "POST /2015-01-01/packages/update",
    UpdateVpcEndpoint: "POST /2015-01-01/es/vpcEndpoints/update",
    UpgradeElasticsearchDomain: "POST /2015-01-01/es/upgradeDomain",
  },
} as const satisfies ServiceMetadata;

export type _ElasticsearchService = _ElasticsearchServiceClient;
export interface ElasticsearchService extends _ElasticsearchService {}
export const ElasticsearchService = class extends AWSServiceClient {
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
} as unknown as typeof _ElasticsearchServiceClient;
