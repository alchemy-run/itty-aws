import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AppMesh as _AppMeshClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "App Mesh",
  version: "2019-01-25",
  protocol: "restJson1",
  sigV4ServiceName: "appmesh",
  operations: {
    ListTagsForResource: "GET /v20190125/tags",
    TagResource: "PUT /v20190125/tag",
    UntagResource: "PUT /v20190125/untag",
    CreateGatewayRoute: {
      http: "PUT /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes",
      traits: {
        gatewayRoute: "httpPayload",
      },
    },
    CreateMesh: {
      http: "PUT /v20190125/meshes",
      traits: {
        mesh: "httpPayload",
      },
    },
    CreateRoute: {
      http: "PUT /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes",
      traits: {
        route: "httpPayload",
      },
    },
    CreateVirtualGateway: {
      http: "PUT /v20190125/meshes/{meshName}/virtualGateways",
      traits: {
        virtualGateway: "httpPayload",
      },
    },
    CreateVirtualNode: {
      http: "PUT /v20190125/meshes/{meshName}/virtualNodes",
      traits: {
        virtualNode: "httpPayload",
      },
    },
    CreateVirtualRouter: {
      http: "PUT /v20190125/meshes/{meshName}/virtualRouters",
      traits: {
        virtualRouter: "httpPayload",
      },
    },
    CreateVirtualService: {
      http: "PUT /v20190125/meshes/{meshName}/virtualServices",
      traits: {
        virtualService: "httpPayload",
      },
    },
    DeleteGatewayRoute: {
      http: "DELETE /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
      traits: {
        gatewayRoute: "httpPayload",
      },
    },
    DeleteMesh: {
      http: "DELETE /v20190125/meshes/{meshName}",
      traits: {
        mesh: "httpPayload",
      },
    },
    DeleteRoute: {
      http: "DELETE /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
      traits: {
        route: "httpPayload",
      },
    },
    DeleteVirtualGateway: {
      http: "DELETE /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
      traits: {
        virtualGateway: "httpPayload",
      },
    },
    DeleteVirtualNode: {
      http: "DELETE /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
      traits: {
        virtualNode: "httpPayload",
      },
    },
    DeleteVirtualRouter: {
      http: "DELETE /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
      traits: {
        virtualRouter: "httpPayload",
      },
    },
    DeleteVirtualService: {
      http: "DELETE /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
      traits: {
        virtualService: "httpPayload",
      },
    },
    DescribeGatewayRoute: {
      http: "GET /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
      traits: {
        gatewayRoute: "httpPayload",
      },
    },
    DescribeMesh: {
      http: "GET /v20190125/meshes/{meshName}",
      traits: {
        mesh: "httpPayload",
      },
    },
    DescribeRoute: {
      http: "GET /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
      traits: {
        route: "httpPayload",
      },
    },
    DescribeVirtualGateway: {
      http: "GET /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
      traits: {
        virtualGateway: "httpPayload",
      },
    },
    DescribeVirtualNode: {
      http: "GET /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
      traits: {
        virtualNode: "httpPayload",
      },
    },
    DescribeVirtualRouter: {
      http: "GET /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
      traits: {
        virtualRouter: "httpPayload",
      },
    },
    DescribeVirtualService: {
      http: "GET /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
      traits: {
        virtualService: "httpPayload",
      },
    },
    ListGatewayRoutes:
      "GET /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes",
    ListMeshes: "GET /v20190125/meshes",
    ListRoutes:
      "GET /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes",
    ListVirtualGateways: "GET /v20190125/meshes/{meshName}/virtualGateways",
    ListVirtualNodes: "GET /v20190125/meshes/{meshName}/virtualNodes",
    ListVirtualRouters: "GET /v20190125/meshes/{meshName}/virtualRouters",
    ListVirtualServices: "GET /v20190125/meshes/{meshName}/virtualServices",
    UpdateGatewayRoute: {
      http: "PUT /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
      traits: {
        gatewayRoute: "httpPayload",
      },
    },
    UpdateMesh: {
      http: "PUT /v20190125/meshes/{meshName}",
      traits: {
        mesh: "httpPayload",
      },
    },
    UpdateRoute: {
      http: "PUT /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
      traits: {
        route: "httpPayload",
      },
    },
    UpdateVirtualGateway: {
      http: "PUT /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
      traits: {
        virtualGateway: "httpPayload",
      },
    },
    UpdateVirtualNode: {
      http: "PUT /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
      traits: {
        virtualNode: "httpPayload",
      },
    },
    UpdateVirtualRouter: {
      http: "PUT /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
      traits: {
        virtualRouter: "httpPayload",
      },
    },
    UpdateVirtualService: {
      http: "PUT /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
      traits: {
        virtualService: "httpPayload",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type AppMesh = typeof AppMesh;
export const AppMesh = class extends AWSServiceClient {
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
} as unknown as typeof _AppMeshClient;
