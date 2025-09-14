import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SnowDeviceManagement as _SnowDeviceManagementClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Snow Device Management",
  version: "2021-08-04",
  protocol: "restJson1",
  sigV4ServiceName: "snow-device-management",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CancelTask: "POST /task/{taskId}/cancel",
    CreateTask: "POST /task",
    DescribeDevice: "POST /managed-device/{managedDeviceId}/describe",
    DescribeDeviceEc2Instances:
      "POST /managed-device/{managedDeviceId}/resources/ec2/describe",
    DescribeExecution: "POST /task/{taskId}/execution/{managedDeviceId}",
    DescribeTask: "POST /task/{taskId}",
    ListDeviceResources: "GET /managed-device/{managedDeviceId}/resources",
    ListDevices: "GET /managed-devices",
    ListExecutions: "GET /executions",
    ListTasks: "GET /tasks",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type SnowDeviceManagement = typeof SnowDeviceManagement;
export const SnowDeviceManagement = class extends AWSServiceClient {
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
} as unknown as typeof _SnowDeviceManagementClient;
