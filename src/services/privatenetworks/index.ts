import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PrivateNetworks as _PrivateNetworks } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "PrivateNetworks",
  version: "2021-12-03",
  protocol: "restJson1",
  sigV4ServiceName: "private-networks",
  operations: {
    AcknowledgeOrderReceipt: "POST /v1/orders/acknowledge",
    ActivateDeviceIdentifier: "POST /v1/device-identifiers/activate",
    ActivateNetworkSite: "POST /v1/network-sites/activate",
    ConfigureAccessPoint: "POST /v1/network-resources/configure",
    CreateNetwork: "POST /v1/networks",
    CreateNetworkSite: "POST /v1/network-sites",
    DeactivateDeviceIdentifier: "POST /v1/device-identifiers/deactivate",
    DeleteNetwork: "DELETE /v1/networks/{networkArn}",
    DeleteNetworkSite: "DELETE /v1/network-sites/{networkSiteArn}",
    GetDeviceIdentifier: "GET /v1/device-identifiers/{deviceIdentifierArn}",
    GetNetwork: "GET /v1/networks/{networkArn}",
    GetNetworkResource: "GET /v1/network-resources/{networkResourceArn}",
    GetNetworkSite: "GET /v1/network-sites/{networkSiteArn}",
    GetOrder: "GET /v1/orders/{orderArn}",
    ListDeviceIdentifiers: "POST /v1/device-identifiers/list",
    ListNetworkResources: "POST /v1/network-resources",
    ListNetworks: "POST /v1/networks/list",
    ListNetworkSites: "POST /v1/network-sites/list",
    ListOrders: "POST /v1/orders/list",
    ListTagsForResource: "GET /tags/{resourceArn}",
    Ping: "GET /ping",
    StartNetworkResourceUpdate: "POST /v1/network-resources/update",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateNetworkSite: "PUT /v1/network-sites/site",
    UpdateNetworkSitePlan: "PUT /v1/network-sites/plan",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const PrivateNetworks = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _PrivateNetworks;
