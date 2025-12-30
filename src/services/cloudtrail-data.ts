import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class AuditEvent extends S.Class<AuditEvent>("AuditEvent")({id: S.String, eventData: S.String, eventDataChecksum: S.optional(S.String)}) {}
export const AuditEvents = S.Array(AuditEvent);
export class PutAuditEventsRequest extends S.Class<PutAuditEventsRequest>("PutAuditEventsRequest")({auditEvents: AuditEvents, channelArn: S.String, externalId: S.optional(S.String)}) {}
export class AuditEventResultEntry extends S.Class<AuditEventResultEntry>("AuditEventResultEntry")({id: S.String, eventID: S.String}) {}
export const AuditEventResultEntries = S.Array(AuditEventResultEntry);
export class ResultErrorEntry extends S.Class<ResultErrorEntry>("ResultErrorEntry")({id: S.String, errorCode: S.String, errorMessage: S.String}) {}
export const ResultErrorEntries = S.Array(ResultErrorEntry);
export class PutAuditEventsResponse extends S.Class<PutAuditEventsResponse>("PutAuditEventsResponse")({successful: AuditEventResultEntries, failed: ResultErrorEntries}) {}

//# Errors
export class ChannelInsufficientPermission extends S.TaggedError<ChannelInsufficientPermission>()("ChannelInsufficientPermission", {message: S.optional(S.String)}) {};
export class ChannelNotFound extends S.TaggedError<ChannelNotFound>()("ChannelNotFound", {message: S.optional(S.String)}) {};
export class ChannelUnsupportedSchema extends S.TaggedError<ChannelUnsupportedSchema>()("ChannelUnsupportedSchema", {message: S.optional(S.String)}) {};
export class DuplicatedAuditEventId extends S.TaggedError<DuplicatedAuditEventId>()("DuplicatedAuditEventId", {message: S.optional(S.String)}) {};
export class InvalidChannelARN extends S.TaggedError<InvalidChannelARN>()("InvalidChannelARN", {message: S.optional(S.String)}) {};
export class UnsupportedOperationException extends S.TaggedError<UnsupportedOperationException>()("UnsupportedOperationException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Ingests your application events into CloudTrail Lake. A required parameter,
 * `auditEvents`, accepts the JSON records (also called
 * *payload*) of events that you want CloudTrail to ingest. You
 * can add up to 100 of these events (or up to 1 MB) per `PutAuditEvents`
 * request.
 */export const putAuditEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/PutAuditEvents", method: "POST", sdkId: "CloudTrail Data", sigV4ServiceName: "cloudtrail-data", name: "CloudTrailDataService.PutAuditEvents" }, PutAuditEventsRequest, PutAuditEventsResponse, [ChannelInsufficientPermission, ChannelNotFound, ChannelUnsupportedSchema, DuplicatedAuditEventId, InvalidChannelARN, UnsupportedOperationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
