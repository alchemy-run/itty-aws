import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ResourceExplorer2 as _ResourceExplorer2Client } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Resource Explorer 2",
  version: "2022-07-28",
  protocol: "restJson1",
  sigV4ServiceName: "resource-explorer-2",
  endpointPrefix: "resource-explorer-2",
  operations: {
    "BatchGetView": "POST /BatchGetView",
    "DisassociateDefaultView": "POST /DisassociateDefaultView",
    "GetAccountLevelServiceConfiguration": "POST /GetAccountLevelServiceConfiguration",
    "GetDefaultView": "POST /GetDefaultView",
    "GetIndex": "POST /GetIndex",
    "GetManagedView": "POST /GetManagedView",
    "ListIndexesForMembers": "POST /ListIndexesForMembers",
    "ListManagedViews": "POST /ListManagedViews",
    "ListResources": "POST /ListResources",
    "ListSupportedResourceTypes": "POST /ListSupportedResourceTypes",
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "Search": "POST /Search",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
    "AssociateDefaultView": "POST /AssociateDefaultView",
    "CreateIndex": "POST /CreateIndex",
    "CreateView": "POST /CreateView",
    "DeleteIndex": "POST /DeleteIndex",
    "DeleteView": "POST /DeleteView",
    "GetView": "POST /GetView",
    "ListIndexes": "POST /ListIndexes",
    "ListViews": "POST /ListViews",
    "UpdateIndexType": "POST /UpdateIndexType",
    "UpdateView": "POST /UpdateView",
  },
} as const satisfies ServiceMetadata;

export type _ResourceExplorer2 = _ResourceExplorer2Client;
export interface ResourceExplorer2 extends _ResourceExplorer2 {}
export const ResourceExplorer2 = class extends AWSServiceClient {
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
} as unknown as typeof _ResourceExplorer2Client;
