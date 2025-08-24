import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class CloudTrailData extends AWSServiceClient {
  putAuditEvents(
    input: PutAuditEventsRequest,
  ): Effect.Effect<
    PutAuditEventsResponse,
    | ChannelInsufficientPermission
    | ChannelNotFound
    | ChannelUnsupportedSchema
    | DuplicatedAuditEventId
    | InvalidChannelARN
    | UnsupportedOperationException
    | CommonAwsError
  >;
}

export declare class CloudtrailData extends CloudTrailData {}

export interface AuditEvent {
  id: string;
  eventData: string;
  eventDataChecksum?: string;
}
export type AuditEventResultEntries = Array<AuditEventResultEntry>;
export interface AuditEventResultEntry {
  id: string;
  eventID: string;
}
export type AuditEvents = Array<AuditEvent>;
export type ChannelArn = string;

export declare class ChannelInsufficientPermission extends EffectData.TaggedError(
  "ChannelInsufficientPermission",
)<{
  readonly message?: string;
}> {}
export declare class ChannelNotFound extends EffectData.TaggedError(
  "ChannelNotFound",
)<{
  readonly message?: string;
}> {}
export declare class ChannelUnsupportedSchema extends EffectData.TaggedError(
  "ChannelUnsupportedSchema",
)<{
  readonly message?: string;
}> {}
export declare class DuplicatedAuditEventId extends EffectData.TaggedError(
  "DuplicatedAuditEventId",
)<{
  readonly message?: string;
}> {}
export type ErrorCode = string;

export type ErrorMessage = string;

export type ExternalId = string;

export declare class InvalidChannelARN extends EffectData.TaggedError(
  "InvalidChannelARN",
)<{
  readonly message?: string;
}> {}
export interface PutAuditEventsRequest {
  auditEvents: Array<AuditEvent>;
  channelArn: string;
  externalId?: string;
}
export interface PutAuditEventsResponse {
  successful: Array<AuditEventResultEntry>;
  failed: Array<ResultErrorEntry>;
}
export type ResultErrorEntries = Array<ResultErrorEntry>;
export interface ResultErrorEntry {
  id: string;
  errorCode: string;
  errorMessage: string;
}
export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly message?: string;
}> {}
export type Uuid = string;

export declare namespace PutAuditEvents {
  export type Input = PutAuditEventsRequest;
  export type Output = PutAuditEventsResponse;
  export type Error =
    | ChannelInsufficientPermission
    | ChannelNotFound
    | ChannelUnsupportedSchema
    | DuplicatedAuditEventId
    | InvalidChannelARN
    | UnsupportedOperationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "CloudTrail Data",
  version: "2021-08-11",
  protocol: "restJson1",
  endpointPrefix: "cloudtrail-data",
  operations: {
    PutAuditEvents: "POST /PutAuditEvents",
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;
