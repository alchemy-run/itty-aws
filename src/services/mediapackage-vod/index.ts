import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MediaPackageVod as _MediaPackageVod } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "MediaPackage Vod",
  version: "2018-11-07",
  protocol: "restJson1",
  sigV4ServiceName: "mediapackage-vod",
  endpointPrefix: "mediapackage-vod",
  operations: {
    ConfigureLogs: "PUT /packaging_groups/{Id}/configure_logs",
    CreateAsset: "POST /assets",
    CreatePackagingConfiguration: "POST /packaging_configurations",
    CreatePackagingGroup: "POST /packaging_groups",
    DeleteAsset: "DELETE /assets/{Id}",
    DeletePackagingConfiguration: "DELETE /packaging_configurations/{Id}",
    DeletePackagingGroup: "DELETE /packaging_groups/{Id}",
    DescribeAsset: "GET /assets/{Id}",
    DescribePackagingConfiguration: "GET /packaging_configurations/{Id}",
    DescribePackagingGroup: "GET /packaging_groups/{Id}",
    ListAssets: "GET /assets",
    ListPackagingConfigurations: "GET /packaging_configurations",
    ListPackagingGroups: "GET /packaging_groups",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdatePackagingGroup: "PUT /packaging_groups/{Id}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MediaPackageVod = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MediaPackageVod;
