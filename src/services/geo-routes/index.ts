import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { GeoRoutes as _GeoRoutes } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Geo Routes",
  version: "2020-11-19",
  protocol: "restJson1",
  sigV4ServiceName: "geo-routes",
  operations: {
    CalculateIsolines: {
      http: "POST /isolines",
      traits: {
        PricingBucket: "x-amz-geo-pricing-bucket",
      },
    },
    CalculateRouteMatrix: {
      http: "POST /route-matrix",
      traits: {
        PricingBucket: "x-amz-geo-pricing-bucket",
      },
    },
    CalculateRoutes: {
      http: "POST /routes",
      traits: {
        PricingBucket: "x-amz-geo-pricing-bucket",
      },
    },
    OptimizeWaypoints: {
      http: "POST /optimize-waypoints",
      traits: {
        PricingBucket: "x-amz-geo-pricing-bucket",
      },
    },
    SnapToRoads: {
      http: "POST /snap-to-roads",
      traits: {
        PricingBucket: "x-amz-geo-pricing-bucket",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const GeoRoutes = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _GeoRoutes;
