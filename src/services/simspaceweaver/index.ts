import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SimSpaceWeaver as _SimSpaceWeaver } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SimSpaceWeaver",
  version: "2022-10-28",
  protocol: "restJson1",
  sigV4ServiceName: "simspaceweaver",
  endpointPrefix: "simspaceweaver",
  operations: {
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    CreateSnapshot: "POST /createsnapshot",
    DeleteApp: "DELETE /deleteapp",
    DeleteSimulation: "DELETE /deletesimulation",
    DescribeApp: "GET /describeapp",
    DescribeSimulation: "GET /describesimulation",
    ListApps: "GET /listapps",
    ListSimulations: "GET /listsimulations",
    StartApp: "POST /startapp",
    StartClock: "POST /startclock",
    StartSimulation: "POST /startsimulation",
    StopApp: "POST /stopapp",
    StopClock: "POST /stopclock",
    StopSimulation: "POST /stopsimulation",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SimSpaceWeaver = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _SimSpaceWeaver;
