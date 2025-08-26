import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MediaStoreData as _MediaStoreData } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MediaStore Data",
  version: "2017-09-01",
  protocol: "restJson1",
  sigV4ServiceName: "mediastore",
  endpointPrefix: "data.mediastore",
  operations: {
    DeleteObject: "DELETE /{Path+}",
    DescribeObject: {
      http: "HEAD /{Path+}",
      traits: {
        ETag: "ETag",
        ContentType: "Content-Type",
        ContentLength: "Content-Length",
        CacheControl: "Cache-Control",
        LastModified: "Last-Modified",
      },
    },
    GetObject: {
      http: "GET /{Path+}",
      traits: {
        Body: "httpPayload",
        CacheControl: "Cache-Control",
        ContentRange: "Content-Range",
        ContentLength: "Content-Length",
        ContentType: "Content-Type",
        ETag: "ETag",
        LastModified: "Last-Modified",
        StatusCode: "httpResponseCode",
      },
    },
    ListItems: "GET /",
    PutObject: "PUT /{Path+}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MediaStoreData = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MediaStoreData;
