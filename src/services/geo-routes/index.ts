import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { GeoRoutes as _GeoRoutesClient } from "./types.ts";

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

export type _GeoRoutes = _GeoRoutesClient;
export interface GeoRoutes extends _GeoRoutes {}
export const GeoRoutes = class extends AWSServiceClient {
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
} as unknown as typeof _GeoRoutesClient;
