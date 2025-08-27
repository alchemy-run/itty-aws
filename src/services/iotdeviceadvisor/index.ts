import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IotDeviceAdvisor as _IotDeviceAdvisor } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "IotDeviceAdvisor",
  version: "2020-09-18",
  protocol: "restJson1",
  sigV4ServiceName: "iotdeviceadvisor",
  endpointPrefix: "api.iotdeviceadvisor",
  operations: {
    CreateSuiteDefinition: "POST /suiteDefinitions",
    DeleteSuiteDefinition: "DELETE /suiteDefinitions/{suiteDefinitionId}",
    GetEndpoint: "GET /endpoint",
    GetSuiteDefinition: "GET /suiteDefinitions/{suiteDefinitionId}",
    GetSuiteRun:
      "GET /suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}",
    GetSuiteRunReport:
      "GET /suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report",
    ListSuiteDefinitions: "GET /suiteDefinitions",
    ListSuiteRuns: "GET /suiteRuns",
    ListTagsForResource: "GET /tags/{resourceArn}",
    StartSuiteRun: "POST /suiteDefinitions/{suiteDefinitionId}/suiteRuns",
    StopSuiteRun:
      "POST /suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateSuiteDefinition: "PATCH /suiteDefinitions/{suiteDefinitionId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IotDeviceAdvisor = class extends AWSServiceClient {
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
} as unknown as typeof _IotDeviceAdvisor;
