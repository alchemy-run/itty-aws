import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTAnalytics as _IoTAnalytics } from "./types.ts";

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

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IoTAnalytics = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _IoTAnalytics;
