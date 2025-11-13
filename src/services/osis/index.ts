import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { OSIS as _OSISClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, ThrottlingException, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "OSIS",
  version: "2022-01-01",
  protocol: "restJson1",
  sigV4ServiceName: "osis",
  endpointPrefix: "osis",
  operations: {
    "CreatePipeline": "POST /2022-01-01/osis/createPipeline",
    "CreatePipelineEndpoint": "POST /2022-01-01/osis/createPipelineEndpoint",
    "DeletePipeline": "DELETE /2022-01-01/osis/deletePipeline/{PipelineName}",
    "DeletePipelineEndpoint": "DELETE /2022-01-01/osis/deletePipelineEndpoint/{EndpointId}",
    "DeleteResourcePolicy": "DELETE /2022-01-01/osis/resourcePolicy/{ResourceArn}",
    "GetPipeline": "GET /2022-01-01/osis/getPipeline/{PipelineName}",
    "GetPipelineBlueprint": "GET /2022-01-01/osis/getPipelineBlueprint/{BlueprintName}",
    "GetPipelineChangeProgress": "GET /2022-01-01/osis/getPipelineChangeProgress/{PipelineName}",
    "GetResourcePolicy": "GET /2022-01-01/osis/resourcePolicy/{ResourceArn}",
    "ListPipelineBlueprints": "POST /2022-01-01/osis/listPipelineBlueprints",
    "ListPipelineEndpointConnections": "GET /2022-01-01/osis/listPipelineEndpointConnections",
    "ListPipelineEndpoints": "GET /2022-01-01/osis/listPipelineEndpoints",
    "ListPipelines": "GET /2022-01-01/osis/listPipelines",
    "ListTagsForResource": "GET /2022-01-01/osis/listTagsForResource",
    "PutResourcePolicy": "PUT /2022-01-01/osis/resourcePolicy/{ResourceArn}",
    "RevokePipelineEndpointConnections": "POST /2022-01-01/osis/revokePipelineEndpointConnections",
    "StartPipeline": "PUT /2022-01-01/osis/startPipeline/{PipelineName}",
    "StopPipeline": "PUT /2022-01-01/osis/stopPipeline/{PipelineName}",
    "TagResource": "POST /2022-01-01/osis/tagResource",
    "UntagResource": "POST /2022-01-01/osis/untagResource",
    "UpdatePipeline": "PUT /2022-01-01/osis/updatePipeline/{PipelineName}",
    "ValidatePipeline": "POST /2022-01-01/osis/validatePipeline",
  },
} as const satisfies ServiceMetadata;

export type _OSIS = _OSISClient;
export interface OSIS extends _OSIS {}
export const OSIS = class extends AWSServiceClient {
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
} as unknown as typeof _OSISClient;
