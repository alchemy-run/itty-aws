import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { OpenSearch as _OpenSearchClient } from "./types.ts";

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
  sdkId: "OpenSearch",
  version: "2021-01-01",
  protocol: "restJson1",
  sigV4ServiceName: "es",
  endpointPrefix: "es",
  operations: {
    AcceptInboundConnection:
      "PUT /2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/accept",
    AddDataSource: "POST /2021-01-01/opensearch/domain/{DomainName}/dataSource",
    AddDirectQueryDataSource:
      "POST /2021-01-01/opensearch/directQueryDataSource",
    AddTags: "POST /2021-01-01/tags",
    AssociatePackage:
      "POST /2021-01-01/packages/associate/{PackageID}/{DomainName}",
    AssociatePackages: "POST /2021-01-01/packages/associateMultiple",
    AuthorizeVpcEndpointAccess:
      "POST /2021-01-01/opensearch/domain/{DomainName}/authorizeVpcEndpointAccess",
    CancelDomainConfigChange:
      "POST /2021-01-01/opensearch/domain/{DomainName}/config/cancel",
    CancelServiceSoftwareUpdate:
      "POST /2021-01-01/opensearch/serviceSoftwareUpdate/cancel",
    CreateApplication: "POST /2021-01-01/opensearch/application",
    CreateDomain: "POST /2021-01-01/opensearch/domain",
    CreateOutboundConnection:
      "POST /2021-01-01/opensearch/cc/outboundConnection",
    CreatePackage: "POST /2021-01-01/packages",
    CreateVpcEndpoint: "POST /2021-01-01/opensearch/vpcEndpoints",
    DeleteApplication: "DELETE /2021-01-01/opensearch/application/{id}",
    DeleteDataSource:
      "DELETE /2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}",
    DeleteDirectQueryDataSource:
      "DELETE /2021-01-01/opensearch/directQueryDataSource/{DataSourceName}",
    DeleteDomain: "DELETE /2021-01-01/opensearch/domain/{DomainName}",
    DeleteInboundConnection:
      "DELETE /2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}",
    DeleteOutboundConnection:
      "DELETE /2021-01-01/opensearch/cc/outboundConnection/{ConnectionId}",
    DeletePackage: "DELETE /2021-01-01/packages/{PackageID}",
    DeleteVpcEndpoint:
      "DELETE /2021-01-01/opensearch/vpcEndpoints/{VpcEndpointId}",
    DescribeDomain: "GET /2021-01-01/opensearch/domain/{DomainName}",
    DescribeDomainAutoTunes:
      "GET /2021-01-01/opensearch/domain/{DomainName}/autoTunes",
    DescribeDomainChangeProgress:
      "GET /2021-01-01/opensearch/domain/{DomainName}/progress",
    DescribeDomainConfig:
      "GET /2021-01-01/opensearch/domain/{DomainName}/config",
    DescribeDomainHealth:
      "GET /2021-01-01/opensearch/domain/{DomainName}/health",
    DescribeDomainNodes: "GET /2021-01-01/opensearch/domain/{DomainName}/nodes",
    DescribeDomains: "POST /2021-01-01/opensearch/domain-info",
    DescribeDryRunProgress:
      "GET /2021-01-01/opensearch/domain/{DomainName}/dryRun",
    DescribeInboundConnections:
      "POST /2021-01-01/opensearch/cc/inboundConnection/search",
    DescribeInstanceTypeLimits:
      "GET /2021-01-01/opensearch/instanceTypeLimits/{EngineVersion}/{InstanceType}",
    DescribeOutboundConnections:
      "POST /2021-01-01/opensearch/cc/outboundConnection/search",
    DescribePackages: "POST /2021-01-01/packages/describe",
    DescribeReservedInstanceOfferings:
      "GET /2021-01-01/opensearch/reservedInstanceOfferings",
    DescribeReservedInstances: "GET /2021-01-01/opensearch/reservedInstances",
    DescribeVpcEndpoints: "POST /2021-01-01/opensearch/vpcEndpoints/describe",
    DissociatePackage:
      "POST /2021-01-01/packages/dissociate/{PackageID}/{DomainName}",
    DissociatePackages: "POST /2021-01-01/packages/dissociateMultiple",
    GetApplication: "GET /2021-01-01/opensearch/application/{id}",
    GetCompatibleVersions: "GET /2021-01-01/opensearch/compatibleVersions",
    GetDataSource:
      "GET /2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}",
    GetDirectQueryDataSource:
      "GET /2021-01-01/opensearch/directQueryDataSource/{DataSourceName}",
    GetDomainMaintenanceStatus:
      "GET /2021-01-01/opensearch/domain/{DomainName}/domainMaintenance",
    GetPackageVersionHistory: "GET /2021-01-01/packages/{PackageID}/history",
    GetUpgradeHistory:
      "GET /2021-01-01/opensearch/upgradeDomain/{DomainName}/history",
    GetUpgradeStatus:
      "GET /2021-01-01/opensearch/upgradeDomain/{DomainName}/status",
    ListApplications: "GET /2021-01-01/opensearch/list-applications",
    ListDataSources:
      "GET /2021-01-01/opensearch/domain/{DomainName}/dataSource",
    ListDirectQueryDataSources:
      "GET /2021-01-01/opensearch/directQueryDataSource",
    ListDomainMaintenances:
      "GET /2021-01-01/opensearch/domain/{DomainName}/domainMaintenances",
    ListDomainNames: "GET /2021-01-01/domain",
    ListDomainsForPackage: "GET /2021-01-01/packages/{PackageID}/domains",
    ListInstanceTypeDetails:
      "GET /2021-01-01/opensearch/instanceTypeDetails/{EngineVersion}",
    ListPackagesForDomain: "GET /2021-01-01/domain/{DomainName}/packages",
    ListScheduledActions:
      "GET /2021-01-01/opensearch/domain/{DomainName}/scheduledActions",
    ListTags: "GET /2021-01-01/tags",
    ListVersions: "GET /2021-01-01/opensearch/versions",
    ListVpcEndpointAccess:
      "GET /2021-01-01/opensearch/domain/{DomainName}/listVpcEndpointAccess",
    ListVpcEndpoints: "GET /2021-01-01/opensearch/vpcEndpoints",
    ListVpcEndpointsForDomain:
      "GET /2021-01-01/opensearch/domain/{DomainName}/vpcEndpoints",
    PurchaseReservedInstanceOffering:
      "POST /2021-01-01/opensearch/purchaseReservedInstanceOffering",
    RejectInboundConnection:
      "PUT /2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/reject",
    RemoveTags: "POST /2021-01-01/tags-removal",
    RevokeVpcEndpointAccess:
      "POST /2021-01-01/opensearch/domain/{DomainName}/revokeVpcEndpointAccess",
    StartDomainMaintenance:
      "POST /2021-01-01/opensearch/domain/{DomainName}/domainMaintenance",
    StartServiceSoftwareUpdate:
      "POST /2021-01-01/opensearch/serviceSoftwareUpdate/start",
    UpdateApplication: "PUT /2021-01-01/opensearch/application/{id}",
    UpdateDataSource:
      "PUT /2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}",
    UpdateDirectQueryDataSource:
      "PUT /2021-01-01/opensearch/directQueryDataSource/{DataSourceName}",
    UpdateDomainConfig:
      "POST /2021-01-01/opensearch/domain/{DomainName}/config",
    UpdatePackage: "POST /2021-01-01/packages/update",
    UpdatePackageScope: "POST /2021-01-01/packages/updateScope",
    UpdateScheduledAction:
      "PUT /2021-01-01/opensearch/domain/{DomainName}/scheduledAction/update",
    UpdateVpcEndpoint: "POST /2021-01-01/opensearch/vpcEndpoints/update",
    UpgradeDomain: "POST /2021-01-01/opensearch/upgradeDomain",
  },
} as const satisfies ServiceMetadata;

export type _OpenSearch = _OpenSearchClient;
export interface OpenSearch extends _OpenSearch {}
export const OpenSearch = class extends AWSServiceClient {
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
} as unknown as typeof _OpenSearchClient;
