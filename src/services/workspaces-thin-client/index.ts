import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { WorkSpacesThinClient as _WorkSpacesThinClient } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "WorkSpaces Thin Client",
  version: "2023-08-22",
  protocol: "restJson1",
  sigV4ServiceName: "thinclient",
  operations: {
    CreateEnvironment: "POST /environments",
    DeleteDevice: "DELETE /devices/{id}",
    DeleteEnvironment: "DELETE /environments/{id}",
    DeregisterDevice: "POST /deregister-device/{id}",
    GetDevice: "GET /devices/{id}",
    GetEnvironment: "GET /environments/{id}",
    GetSoftwareSet: "GET /softwaresets/{id}",
    ListDevices: "GET /devices",
    ListEnvironments: "GET /environments",
    ListSoftwareSets: "GET /softwaresets",
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateDevice: "PATCH /devices/{id}",
    UpdateEnvironment: "PATCH /environments/{id}",
    UpdateSoftwareSet: "PATCH /softwaresets/{id}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const WorkSpacesThinClient = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _WorkSpacesThinClient;
