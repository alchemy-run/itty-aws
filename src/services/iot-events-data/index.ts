import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTEventsData as _IoTEventsData } from "./types.ts";

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

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IoTEventsData = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _IoTEventsData;
