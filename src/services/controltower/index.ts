import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ControlTower as _ControlTowerClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ControlTower",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "controltower",
  endpointPrefix: "controltower",
  operations: {
    DisableControl: "POST /disable-control",
    CreateLandingZone: "POST /create-landingzone",
    DeleteLandingZone: "POST /delete-landingzone",
    DisableBaseline: "POST /disable-baseline",
    EnableBaseline: "POST /enable-baseline",
    EnableControl: "POST /enable-control",
    GetBaseline: "POST /get-baseline",
    GetBaselineOperation: "POST /get-baseline-operation",
    GetControlOperation: "POST /get-control-operation",
    GetEnabledBaseline: "POST /get-enabled-baseline",
    GetEnabledControl: "POST /get-enabled-control",
    GetLandingZone: "POST /get-landingzone",
    GetLandingZoneOperation: "POST /get-landingzone-operation",
    ListBaselines: "POST /list-baselines",
    ListControlOperations: "POST /list-control-operations",
    ListEnabledBaselines: "POST /list-enabled-baselines",
    ListEnabledControls: "POST /list-enabled-controls",
    ListLandingZoneOperations: "POST /list-landingzone-operations",
    ListLandingZones: "POST /list-landingzones",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ResetEnabledBaseline: "POST /reset-enabled-baseline",
    ResetEnabledControl: "POST /reset-enabled-control",
    ResetLandingZone: "POST /reset-landingzone",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateEnabledBaseline: "POST /update-enabled-baseline",
    UpdateEnabledControl: "POST /update-enabled-control",
    UpdateLandingZone: "POST /update-landingzone",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ControlTower = class extends AWSServiceClient {
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
} as unknown as typeof _ControlTowerClient;
