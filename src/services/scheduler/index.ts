import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Scheduler as _Scheduler } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Scheduler",
  version: "2021-06-30",
  protocol: "restJson1",
  sigV4ServiceName: "scheduler",
  operations: {
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    CreateSchedule: "POST /schedules/{Name}",
    CreateScheduleGroup: "POST /schedule-groups/{Name}",
    DeleteSchedule: "DELETE /schedules/{Name}",
    DeleteScheduleGroup: "DELETE /schedule-groups/{Name}",
    GetSchedule: "GET /schedules/{Name}",
    GetScheduleGroup: "GET /schedule-groups/{Name}",
    ListScheduleGroups: "GET /schedule-groups",
    ListSchedules: "GET /schedules",
    UpdateSchedule: "PUT /schedules/{Name}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Scheduler = class extends AWSServiceClient {
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
} as unknown as typeof _Scheduler;
