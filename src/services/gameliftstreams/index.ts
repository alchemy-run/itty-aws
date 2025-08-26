import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { GameLiftStreams as _GameLiftStreams } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "GameLiftStreams",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "gameliftstreams",
  operations: {
    AddStreamGroupLocations: "POST /streamgroups/{Identifier}/locations",
    AssociateApplications: "POST /streamgroups/{Identifier}/associations",
    CreateStreamSessionConnection:
      "POST /streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/connections",
    DisassociateApplications: "POST /streamgroups/{Identifier}/disassociations",
    ExportStreamSessionFiles:
      "PUT /streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/exportfiles",
    GetStreamSession:
      "GET /streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}",
    ListStreamSessions: "GET /streamgroups/{Identifier}/streamsessions",
    ListStreamSessionsByAccount: "GET /streamsessions",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    RemoveStreamGroupLocations: "DELETE /streamgroups/{Identifier}/locations",
    StartStreamSession: "POST /streamgroups/{Identifier}/streamsessions",
    TagResource: "POST /tags/{ResourceArn}",
    TerminateStreamSession:
      "DELETE /streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    CreateApplication: "POST /applications",
    CreateStreamGroup: "POST /streamgroups",
    DeleteApplication: "DELETE /applications/{Identifier}",
    DeleteStreamGroup: "DELETE /streamgroups/{Identifier}",
    GetApplication: "GET /applications/{Identifier}",
    GetStreamGroup: "GET /streamgroups/{Identifier}",
    ListApplications: "GET /applications",
    ListStreamGroups: "GET /streamgroups",
    UpdateApplication: "PATCH /applications/{Identifier}",
    UpdateStreamGroup: "PATCH /streamgroups/{Identifier}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const GameLiftStreams = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _GameLiftStreams;
