import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTAnalytics as _IoTAnalyticsClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "IoTAnalytics",
  version: "2017-11-27",
  protocol: "restJson1",
  sigV4ServiceName: "iotanalytics",
  endpointPrefix: "iotanalytics",
  operations: {
    BatchPutMessage: "POST /messages/batch",
    CancelPipelineReprocessing:
      "DELETE /pipelines/{pipelineName}/reprocessing/{reprocessingId}",
    CreateChannel: "POST /channels",
    CreateDataset: "POST /datasets",
    CreateDatasetContent: "POST /datasets/{datasetName}/content",
    CreateDatastore: "POST /datastores",
    CreatePipeline: "POST /pipelines",
    DeleteChannel: "DELETE /channels/{channelName}",
    DeleteDataset: "DELETE /datasets/{datasetName}",
    DeleteDatasetContent: "DELETE /datasets/{datasetName}/content",
    DeleteDatastore: "DELETE /datastores/{datastoreName}",
    DeletePipeline: "DELETE /pipelines/{pipelineName}",
    DescribeChannel: "GET /channels/{channelName}",
    DescribeDataset: "GET /datasets/{datasetName}",
    DescribeDatastore: "GET /datastores/{datastoreName}",
    DescribeLoggingOptions: "GET /logging",
    DescribePipeline: "GET /pipelines/{pipelineName}",
    GetDatasetContent: "GET /datasets/{datasetName}/content",
    ListChannels: "GET /channels",
    ListDatasetContents: "GET /datasets/{datasetName}/contents",
    ListDatasets: "GET /datasets",
    ListDatastores: "GET /datastores",
    ListPipelines: "GET /pipelines",
    ListTagsForResource: "GET /tags",
    PutLoggingOptions: "PUT /logging",
    RunPipelineActivity: "POST /pipelineactivities/run",
    SampleChannelData: "GET /channels/{channelName}/sample",
    StartPipelineReprocessing: "POST /pipelines/{pipelineName}/reprocessing",
    TagResource: "POST /tags",
    UntagResource: "DELETE /tags",
    UpdateChannel: "PUT /channels/{channelName}",
    UpdateDataset: "PUT /datasets/{datasetName}",
    UpdateDatastore: "PUT /datastores/{datastoreName}",
    UpdatePipeline: "PUT /pipelines/{pipelineName}",
  },
} as const satisfies ServiceMetadata;

export type _IoTAnalytics = _IoTAnalyticsClient;
export interface IoTAnalytics extends _IoTAnalytics {}
export const IoTAnalytics = class extends AWSServiceClient {
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
} as unknown as typeof _IoTAnalyticsClient;
