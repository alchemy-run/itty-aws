import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { IVSRealTime as _IVSRealTimeClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "IVS RealTime",
  version: "2020-07-14",
  protocol: "restJson1",
  sigV4ServiceName: "ivs",
  endpointPrefix: "ivsrealtime",
  operations: {
    CreateEncoderConfiguration: "POST /CreateEncoderConfiguration",
    CreateIngestConfiguration: "POST /CreateIngestConfiguration",
    CreateParticipantToken: "POST /CreateParticipantToken",
    CreateStage: "POST /CreateStage",
    CreateStorageConfiguration: "POST /CreateStorageConfiguration",
    DeleteEncoderConfiguration: "POST /DeleteEncoderConfiguration",
    DeleteIngestConfiguration: "POST /DeleteIngestConfiguration",
    DeletePublicKey: "POST /DeletePublicKey",
    DeleteStage: "POST /DeleteStage",
    DeleteStorageConfiguration: "POST /DeleteStorageConfiguration",
    DisconnectParticipant: "POST /DisconnectParticipant",
    GetComposition: "POST /GetComposition",
    GetEncoderConfiguration: "POST /GetEncoderConfiguration",
    GetIngestConfiguration: "POST /GetIngestConfiguration",
    GetParticipant: "POST /GetParticipant",
    GetPublicKey: "POST /GetPublicKey",
    GetStage: "POST /GetStage",
    GetStageSession: "POST /GetStageSession",
    GetStorageConfiguration: "POST /GetStorageConfiguration",
    ImportPublicKey: "POST /ImportPublicKey",
    ListCompositions: "POST /ListCompositions",
    ListEncoderConfigurations: "POST /ListEncoderConfigurations",
    ListIngestConfigurations: "POST /ListIngestConfigurations",
    ListParticipantEvents: "POST /ListParticipantEvents",
    ListParticipantReplicas: "POST /ListParticipantReplicas",
    ListParticipants: "POST /ListParticipants",
    ListPublicKeys: "POST /ListPublicKeys",
    ListStages: "POST /ListStages",
    ListStageSessions: "POST /ListStageSessions",
    ListStorageConfigurations: "POST /ListStorageConfigurations",
    ListTagsForResource: "GET /tags/{resourceArn}",
    StartComposition: "POST /StartComposition",
    StartParticipantReplication: {
      http: "POST /StartParticipantReplication",
      traits: {
        accessControlAllowOrigin: "Access-Control-Allow-Origin",
        accessControlExposeHeaders: "Access-Control-Expose-Headers",
        cacheControl: "Cache-Control",
        contentSecurityPolicy: "Content-Security-Policy",
        strictTransportSecurity: "Strict-Transport-Security",
        xContentTypeOptions: "X-Content-Type-Options",
        xFrameOptions: "X-Frame-Options",
      },
    },
    StopComposition: "POST /StopComposition",
    StopParticipantReplication: {
      http: "POST /StopParticipantReplication",
      traits: {
        accessControlAllowOrigin: "Access-Control-Allow-Origin",
        accessControlExposeHeaders: "Access-Control-Expose-Headers",
        cacheControl: "Cache-Control",
        contentSecurityPolicy: "Content-Security-Policy",
        strictTransportSecurity: "Strict-Transport-Security",
        xContentTypeOptions: "X-Content-Type-Options",
        xFrameOptions: "X-Frame-Options",
      },
    },
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateIngestConfiguration: "POST /UpdateIngestConfiguration",
    UpdateStage: "POST /UpdateStage",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const IVSRealTime = class extends AWSServiceClient {
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
} as unknown as typeof _IVSRealTimeClient;
