import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LookoutVision as _LookoutVisionClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "LookoutVision",
  version: "2020-11-20",
  protocol: "restJson1",
  sigV4ServiceName: "lookoutvision",
  endpointPrefix: "lookoutvision",
  operations: {
    "CreateDataset": "POST /2020-11-20/projects/{ProjectName}/datasets",
    "CreateModel": "POST /2020-11-20/projects/{ProjectName}/models",
    "CreateProject": "POST /2020-11-20/projects",
    "DeleteDataset": "DELETE /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}",
    "DeleteModel": "DELETE /2020-11-20/projects/{ProjectName}/models/{ModelVersion}",
    "DeleteProject": "DELETE /2020-11-20/projects/{ProjectName}",
    "DescribeDataset": "GET /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}",
    "DescribeModel": "GET /2020-11-20/projects/{ProjectName}/models/{ModelVersion}",
    "DescribeModelPackagingJob": "GET /2020-11-20/projects/{ProjectName}/modelpackagingjobs/{JobName}",
    "DescribeProject": "GET /2020-11-20/projects/{ProjectName}",
    "DetectAnomalies": "POST /2020-11-20/projects/{ProjectName}/models/{ModelVersion}/detect",
    "ListDatasetEntries": "GET /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries",
    "ListModelPackagingJobs": "GET /2020-11-20/projects/{ProjectName}/modelpackagingjobs",
    "ListModels": "GET /2020-11-20/projects/{ProjectName}/models",
    "ListProjects": "GET /2020-11-20/projects",
    "ListTagsForResource": "GET /2020-11-20/tags/{ResourceArn}",
    "StartModel": "POST /2020-11-20/projects/{ProjectName}/models/{ModelVersion}/start",
    "StartModelPackagingJob": "POST /2020-11-20/projects/{ProjectName}/modelpackagingjobs",
    "StopModel": "POST /2020-11-20/projects/{ProjectName}/models/{ModelVersion}/stop",
    "TagResource": "POST /2020-11-20/tags/{ResourceArn}",
    "UntagResource": "DELETE /2020-11-20/tags/{ResourceArn}",
    "UpdateDatasetEntries": "PATCH /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries",
  },
} as const satisfies ServiceMetadata;

export type _LookoutVision = _LookoutVisionClient;
export interface LookoutVision extends _LookoutVision {}
export const LookoutVision = class extends AWSServiceClient {
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
} as unknown as typeof _LookoutVisionClient;
