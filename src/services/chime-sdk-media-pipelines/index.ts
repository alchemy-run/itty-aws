import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ChimeSDKMediaPipelines as _ChimeSDKMediaPipelinesClient } from "./types.ts";

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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Chime SDK Media Pipelines",
  version: "2021-07-15",
  protocol: "restJson1",
  sigV4ServiceName: "chime",
  endpointPrefix: "media-pipelines-chime",
  operations: {
    CreateMediaCapturePipeline: "POST /sdk-media-capture-pipelines",
    CreateMediaConcatenationPipeline: "POST /sdk-media-concatenation-pipelines",
    CreateMediaInsightsPipeline: "POST /media-insights-pipelines",
    CreateMediaInsightsPipelineConfiguration:
      "POST /media-insights-pipeline-configurations",
    CreateMediaLiveConnectorPipeline:
      "POST /sdk-media-live-connector-pipelines",
    CreateMediaPipelineKinesisVideoStreamPool:
      "POST /media-pipeline-kinesis-video-stream-pools",
    CreateMediaStreamPipeline: "POST /sdk-media-stream-pipelines",
    DeleteMediaCapturePipeline:
      "DELETE /sdk-media-capture-pipelines/{MediaPipelineId}",
    DeleteMediaInsightsPipelineConfiguration:
      "DELETE /media-insights-pipeline-configurations/{Identifier}",
    DeleteMediaPipeline: "DELETE /sdk-media-pipelines/{MediaPipelineId}",
    DeleteMediaPipelineKinesisVideoStreamPool:
      "DELETE /media-pipeline-kinesis-video-stream-pools/{Identifier}",
    GetMediaCapturePipeline:
      "GET /sdk-media-capture-pipelines/{MediaPipelineId}",
    GetMediaInsightsPipelineConfiguration:
      "GET /media-insights-pipeline-configurations/{Identifier}",
    GetMediaPipeline: "GET /sdk-media-pipelines/{MediaPipelineId}",
    GetMediaPipelineKinesisVideoStreamPool:
      "GET /media-pipeline-kinesis-video-stream-pools/{Identifier}",
    GetSpeakerSearchTask:
      "GET /media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}",
    GetVoiceToneAnalysisTask:
      "GET /media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}",
    ListMediaCapturePipelines: "GET /sdk-media-capture-pipelines",
    ListMediaInsightsPipelineConfigurations:
      "GET /media-insights-pipeline-configurations",
    ListMediaPipelineKinesisVideoStreamPools:
      "GET /media-pipeline-kinesis-video-stream-pools",
    ListMediaPipelines: "GET /sdk-media-pipelines",
    ListTagsForResource: "GET /tags",
    StartSpeakerSearchTask:
      "POST /media-insights-pipelines/{Identifier}/speaker-search-tasks?operation=start",
    StartVoiceToneAnalysisTask:
      "POST /media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks?operation=start",
    StopSpeakerSearchTask:
      "POST /media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop",
    StopVoiceToneAnalysisTask:
      "POST /media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop",
    TagResource: "POST /tags?operation=tag-resource",
    UntagResource: "POST /tags?operation=untag-resource",
    UpdateMediaInsightsPipelineConfiguration:
      "PUT /media-insights-pipeline-configurations/{Identifier}",
    UpdateMediaInsightsPipelineStatus:
      "PUT /media-insights-pipeline-status/{Identifier}",
    UpdateMediaPipelineKinesisVideoStreamPool:
      "PUT /media-pipeline-kinesis-video-stream-pools/{Identifier}",
  },
} as const satisfies ServiceMetadata;

export type _ChimeSDKMediaPipelines = _ChimeSDKMediaPipelinesClient;
export interface ChimeSDKMediaPipelines extends _ChimeSDKMediaPipelines {}
export const ChimeSDKMediaPipelines = class extends AWSServiceClient {
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
} as unknown as typeof _ChimeSDKMediaPipelinesClient;
