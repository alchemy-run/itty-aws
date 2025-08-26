import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IoTJobsDataPlane as _IoTJobsDataPlane } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "IoT Jobs Data Plane",
  version: "2017-09-29",
  protocol: "restJson1",
  sigV4ServiceName: "iot-jobs-data",
  endpointPrefix: "data.jobs.iot",
  operations: {
    DescribeJobExecution: "GET /things/{thingName}/jobs/{jobId}",
    GetPendingJobExecutions: "GET /things/{thingName}/jobs",
    StartCommandExecution: "POST /command-executions",
    StartNextPendingJobExecution: "PUT /things/{thingName}/jobs/$next",
    UpdateJobExecution: "POST /things/{thingName}/jobs/{jobId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IoTJobsDataPlane = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _IoTJobsDataPlane;
