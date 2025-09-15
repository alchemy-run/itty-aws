import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { GameLiftStreams as _GameLiftStreamsClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

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

export type _GameLiftStreams = _GameLiftStreamsClient;
export interface GameLiftStreams extends _GameLiftStreams {}
export const GameLiftStreams = class extends AWSServiceClient {
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
} as unknown as typeof _GameLiftStreamsClient;
