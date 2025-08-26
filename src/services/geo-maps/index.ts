import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { GeoMaps as _GeoMaps } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Geo Maps",
  version: "2020-11-19",
  protocol: "restJson1",
  sigV4ServiceName: "geo-maps",
  operations: {
    GetGlyphs: {
      http: "GET /glyphs/{FontStack}/{FontUnicodeRange}",
      traits: {
        Blob: "httpPayload",
        ContentType: "Content-Type",
        CacheControl: "Cache-Control",
        ETag: "ETag",
      },
    },
    GetSprites: {
      http: "GET /styles/{Style}/{ColorScheme}/{Variant}/sprites/{FileName}",
      traits: {
        Blob: "httpPayload",
        ContentType: "Content-Type",
        CacheControl: "Cache-Control",
        ETag: "ETag",
      },
    },
    GetStaticMap: {
      http: "GET /static/{FileName}",
      traits: {
        Blob: "httpPayload",
        ContentType: "Content-Type",
        CacheControl: "Cache-Control",
        ETag: "ETag",
        PricingBucket: "x-amz-geo-pricing-bucket",
      },
    },
    GetStyleDescriptor: {
      http: "GET /styles/{Style}/descriptor",
      traits: {
        Blob: "httpPayload",
        ContentType: "Content-Type",
        CacheControl: "Cache-Control",
        ETag: "ETag",
      },
    },
    GetTile: {
      http: "GET /tiles/{Tileset}/{Z}/{X}/{Y}",
      traits: {
        Blob: "httpPayload",
        ContentType: "Content-Type",
        CacheControl: "Cache-Control",
        ETag: "ETag",
        PricingBucket: "x-amz-geo-pricing-bucket",
      },
    },
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const GeoMaps = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _GeoMaps;
