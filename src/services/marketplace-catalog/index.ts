import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MarketplaceCatalog as _MarketplaceCatalog } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Marketplace Catalog",
  version: "2018-09-17",
  protocol: "restJson1",
  sigV4ServiceName: "aws-marketplace",
  endpointPrefix: "catalog.marketplace",
  operations: {
    BatchDescribeEntities: "POST /BatchDescribeEntities",
    CancelChangeSet: "PATCH /CancelChangeSet",
    DeleteResourcePolicy: "DELETE /DeleteResourcePolicy",
    DescribeChangeSet: "GET /DescribeChangeSet",
    DescribeEntity: "GET /DescribeEntity",
    GetResourcePolicy: "GET /GetResourcePolicy",
    ListChangeSets: "POST /ListChangeSets",
    ListEntities: "POST /ListEntities",
    ListTagsForResource: "POST /ListTagsForResource",
    PutResourcePolicy: "POST /PutResourcePolicy",
    StartChangeSet: "POST /StartChangeSet",
    TagResource: "POST /TagResource",
    UntagResource: "POST /UntagResource",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MarketplaceCatalog = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MarketplaceCatalog;
