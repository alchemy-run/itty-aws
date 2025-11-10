import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ivs as _ivsClient } from "./types.ts";

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
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "ivs",
  version: "2020-07-14",
  protocol: "restJson1",
  sigV4ServiceName: "ivs",
  operations: {
    BatchGetChannel: "POST /BatchGetChannel",
    BatchGetStreamKey: "POST /BatchGetStreamKey",
    BatchStartViewerSessionRevocation:
      "POST /BatchStartViewerSessionRevocation",
    CreateChannel: "POST /CreateChannel",
    CreatePlaybackRestrictionPolicy: "POST /CreatePlaybackRestrictionPolicy",
    CreateRecordingConfiguration: "POST /CreateRecordingConfiguration",
    CreateStreamKey: "POST /CreateStreamKey",
    DeleteChannel: "POST /DeleteChannel",
    DeletePlaybackKeyPair: "POST /DeletePlaybackKeyPair",
    DeletePlaybackRestrictionPolicy: "POST /DeletePlaybackRestrictionPolicy",
    DeleteRecordingConfiguration: "POST /DeleteRecordingConfiguration",
    DeleteStreamKey: "POST /DeleteStreamKey",
    GetChannel: "POST /GetChannel",
    GetPlaybackKeyPair: "POST /GetPlaybackKeyPair",
    GetPlaybackRestrictionPolicy: "POST /GetPlaybackRestrictionPolicy",
    GetRecordingConfiguration: "POST /GetRecordingConfiguration",
    GetStream: "POST /GetStream",
    GetStreamKey: "POST /GetStreamKey",
    GetStreamSession: "POST /GetStreamSession",
    ImportPlaybackKeyPair: "POST /ImportPlaybackKeyPair",
    ListChannels: "POST /ListChannels",
    ListPlaybackKeyPairs: "POST /ListPlaybackKeyPairs",
    ListPlaybackRestrictionPolicies: "POST /ListPlaybackRestrictionPolicies",
    ListRecordingConfigurations: "POST /ListRecordingConfigurations",
    ListStreamKeys: "POST /ListStreamKeys",
    ListStreams: "POST /ListStreams",
    ListStreamSessions: "POST /ListStreamSessions",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutMetadata: "POST /PutMetadata",
    StartViewerSessionRevocation: "POST /StartViewerSessionRevocation",
    StopStream: "POST /StopStream",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateChannel: "POST /UpdateChannel",
    UpdatePlaybackRestrictionPolicy: "POST /UpdatePlaybackRestrictionPolicy",
  },
} as const satisfies ServiceMetadata;

export type _ivs = _ivsClient;
export interface ivs extends _ivs {}
export const ivs = class extends AWSServiceClient {
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
} as unknown as typeof _ivsClient;
