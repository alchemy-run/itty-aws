import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTEventsData as _IoTEventsDataClient } from "./types.ts";

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
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "IoT Events Data",
  version: "2018-10-23",
  protocol: "restJson1",
  sigV4ServiceName: "ioteventsdata",
  endpointPrefix: "data.iotevents",
  operations: {
    BatchAcknowledgeAlarm: "POST /alarms/acknowledge",
    BatchDeleteDetector: "POST /detectors/delete",
    BatchDisableAlarm: "POST /alarms/disable",
    BatchEnableAlarm: "POST /alarms/enable",
    BatchPutMessage: "POST /inputs/messages",
    BatchResetAlarm: "POST /alarms/reset",
    BatchSnoozeAlarm: "POST /alarms/snooze",
    BatchUpdateDetector: "POST /detectors",
    DescribeAlarm: "GET /alarms/{alarmModelName}/keyValues",
    DescribeDetector: "GET /detectors/{detectorModelName}/keyValues",
    ListAlarms: "GET /alarms/{alarmModelName}",
    ListDetectors: "GET /detectors/{detectorModelName}",
  },
} as const satisfies ServiceMetadata;

export type _IoTEventsData = _IoTEventsDataClient;
export interface IoTEventsData extends _IoTEventsData {}
export const IoTEventsData = class extends AWSServiceClient {
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
} as unknown as typeof _IoTEventsDataClient;
