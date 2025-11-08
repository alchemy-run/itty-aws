import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { BackupSearch as _BackupSearchClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "BackupSearch",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "backup-search",
  endpointPrefix: "backup-search",
  operations: {
    "ListSearchJobBackups": "GET /search-jobs/{SearchJobIdentifier}/backups",
    "ListSearchJobResults": "GET /search-jobs/{SearchJobIdentifier}/search-results",
    "ListTagsForResource": "GET /tags/{ResourceArn}",
    "TagResource": "POST /tags/{ResourceArn}",
    "UntagResource": "DELETE /tags/{ResourceArn}",
    "GetSearchJob": "GET /search-jobs/{SearchJobIdentifier}",
    "GetSearchResultExportJob": "GET /export-search-jobs/{ExportJobIdentifier}",
    "ListSearchJobs": "GET /search-jobs",
    "ListSearchResultExportJobs": "GET /export-search-jobs",
    "StartSearchJob": "PUT /search-jobs",
    "StartSearchResultExportJob": "PUT /export-search-jobs",
    "StopSearchJob": "PUT /search-jobs/{SearchJobIdentifier}/actions/cancel",
  },
} as const satisfies ServiceMetadata;

export type _BackupSearch = _BackupSearchClient;
export interface BackupSearch extends _BackupSearch {}
export const BackupSearch = class extends AWSServiceClient {
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
} as unknown as typeof _BackupSearchClient;
