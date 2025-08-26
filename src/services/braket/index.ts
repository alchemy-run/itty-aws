import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Braket as _Braket } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Braket",
  version: "2019-09-01",
  protocol: "restJson1",
  sigV4ServiceName: "braket",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CancelJob: "PUT /job/{jobArn}/cancel",
    CancelQuantumTask: "PUT /quantum-task/{quantumTaskArn}/cancel",
    CreateJob: "POST /job",
    CreateQuantumTask: "POST /quantum-task",
    GetDevice: "GET /device/{deviceArn}",
    GetJob: "GET /job/{jobArn}",
    GetQuantumTask: "GET /quantum-task/{quantumTaskArn}",
    SearchDevices: "POST /devices",
    SearchJobs: "POST /jobs",
    SearchQuantumTasks: "POST /quantum-tasks",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Braket = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _Braket;
