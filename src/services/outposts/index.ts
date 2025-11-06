import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Outposts as _OutpostsClient } from "./types.ts";

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
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Outposts",
  version: "2019-12-03",
  protocol: "restJson1",
  sigV4ServiceName: "outposts",
  endpointPrefix: "outposts",
  operations: {
    CancelCapacityTask:
      "POST /outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}",
    CancelOrder: "POST /orders/{OrderId}/cancel",
    CreateOrder: "POST /orders",
    CreateOutpost: "POST /outposts",
    CreateSite: "POST /sites",
    DeleteOutpost: "DELETE /outposts/{OutpostId}",
    DeleteSite: "DELETE /sites/{SiteId}",
    GetCapacityTask:
      "GET /outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}",
    GetCatalogItem: "GET /catalog/item/{CatalogItemId}",
    GetConnection: "GET /connections/{ConnectionId}",
    GetOrder: "GET /orders/{OrderId}",
    GetOutpost: "GET /outposts/{OutpostId}",
    GetOutpostBillingInformation:
      "GET /outpost/{OutpostIdentifier}/billing-information",
    GetOutpostInstanceTypes: "GET /outposts/{OutpostId}/instanceTypes",
    GetOutpostSupportedInstanceTypes:
      "GET /outposts/{OutpostIdentifier}/supportedInstanceTypes",
    GetSite: "GET /sites/{SiteId}",
    GetSiteAddress: "GET /sites/{SiteId}/address",
    ListAssetInstances: "GET /outposts/{OutpostIdentifier}/assetInstances",
    ListAssets: "GET /outposts/{OutpostIdentifier}/assets",
    ListBlockingInstancesForCapacityTask:
      "GET /outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}/blockingInstances",
    ListCapacityTasks: "GET /capacity/tasks",
    ListCatalogItems: "GET /catalog/items",
    ListOrders: "GET /list-orders",
    ListOutposts: "GET /outposts",
    ListSites: "GET /sites",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    StartCapacityTask: "POST /outposts/{OutpostIdentifier}/capacity",
    StartConnection: "POST /connections",
    StartOutpostDecommission: "POST /outposts/{OutpostIdentifier}/decommission",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateOutpost: "PATCH /outposts/{OutpostId}",
    UpdateSite: "PATCH /sites/{SiteId}",
    UpdateSiteAddress: "PUT /sites/{SiteId}/address",
    UpdateSiteRackPhysicalProperties:
      "PATCH /sites/{SiteId}/rackPhysicalProperties",
  },
} as const satisfies ServiceMetadata;

export type _Outposts = _OutpostsClient;
export interface Outposts extends _Outposts {}
export const Outposts = class extends AWSServiceClient {
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
} as unknown as typeof _OutpostsClient;
