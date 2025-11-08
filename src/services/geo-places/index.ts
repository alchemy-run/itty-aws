import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { GeoPlaces as _GeoPlacesClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Geo Places",
  version: "2020-11-19",
  protocol: "restJson1",
  sigV4ServiceName: "geo-places",
  operations: {
    "Autocomplete": {
      http: "POST /autocomplete",
      traits: {
        "PricingBucket": "x-amz-geo-pricing-bucket",
      },
    },
    "Geocode": {
      http: "POST /geocode",
      traits: {
        "PricingBucket": "x-amz-geo-pricing-bucket",
      },
    },
    "GetPlace": {
      http: "GET /place/{PlaceId}",
      traits: {
        "PricingBucket": "x-amz-geo-pricing-bucket",
      },
    },
    "ReverseGeocode": {
      http: "POST /reverse-geocode",
      traits: {
        "PricingBucket": "x-amz-geo-pricing-bucket",
      },
    },
    "SearchNearby": {
      http: "POST /search-nearby",
      traits: {
        "PricingBucket": "x-amz-geo-pricing-bucket",
      },
    },
    "SearchText": {
      http: "POST /search-text",
      traits: {
        "PricingBucket": "x-amz-geo-pricing-bucket",
      },
    },
    "Suggest": {
      http: "POST /suggest",
      traits: {
        "PricingBucket": "x-amz-geo-pricing-bucket",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _GeoPlaces = _GeoPlacesClient;
export interface GeoPlaces extends _GeoPlaces {}
export const GeoPlaces = class extends AWSServiceClient {
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
} as unknown as typeof _GeoPlacesClient;
