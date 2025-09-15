import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTEvents as _IoTEventsClient } from "./types.ts";

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
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "IoT Events",
  version: "2018-07-27",
  protocol: "restJson1",
  sigV4ServiceName: "iotevents",
  endpointPrefix: "iotevents",
  operations: {
    CreateAlarmModel: "POST /alarm-models",
    CreateDetectorModel: "POST /detector-models",
    CreateInput: "POST /inputs",
    DeleteAlarmModel: "DELETE /alarm-models/{alarmModelName}",
    DeleteDetectorModel: "DELETE /detector-models/{detectorModelName}",
    DeleteInput: "DELETE /inputs/{inputName}",
    DescribeAlarmModel: "GET /alarm-models/{alarmModelName}",
    DescribeDetectorModel: "GET /detector-models/{detectorModelName}",
    DescribeDetectorModelAnalysis: "GET /analysis/detector-models/{analysisId}",
    DescribeInput: "GET /inputs/{inputName}",
    DescribeLoggingOptions: "GET /logging",
    GetDetectorModelAnalysisResults:
      "GET /analysis/detector-models/{analysisId}/results",
    ListAlarmModels: "GET /alarm-models",
    ListAlarmModelVersions: "GET /alarm-models/{alarmModelName}/versions",
    ListDetectorModels: "GET /detector-models",
    ListDetectorModelVersions:
      "GET /detector-models/{detectorModelName}/versions",
    ListInputRoutings: "POST /input-routings",
    ListInputs: "GET /inputs",
    ListTagsForResource: "GET /tags",
    PutLoggingOptions: "PUT /logging",
    StartDetectorModelAnalysis: "POST /analysis/detector-models",
    TagResource: "POST /tags",
    UntagResource: "DELETE /tags",
    UpdateAlarmModel: "POST /alarm-models/{alarmModelName}",
    UpdateDetectorModel: "POST /detector-models/{detectorModelName}",
    UpdateInput: "PUT /inputs/{inputName}",
  },
} as const satisfies ServiceMetadata;

export type _IoTEvents = _IoTEventsClient;
export interface IoTEvents extends _IoTEvents {}
export const IoTEvents = class extends AWSServiceClient {
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
} as unknown as typeof _IoTEventsClient;
