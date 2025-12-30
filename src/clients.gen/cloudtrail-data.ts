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
export class ChannelInsufficientPermission extends S.Class<ChannelInsufficientPermission>("ChannelInsufficientPermission")({message: S.optional(S.String)}) {}
export class ChannelNotFound extends S.Class<ChannelNotFound>("ChannelNotFound")({message: S.optional(S.String)}) {}
export class ChannelUnsupportedSchema extends S.Class<ChannelUnsupportedSchema>("ChannelUnsupportedSchema")({message: S.optional(S.String)}) {}
export class DuplicatedAuditEventId extends S.Class<DuplicatedAuditEventId>("DuplicatedAuditEventId")({message: S.optional(S.String)}) {}
export class InvalidChannelARN extends S.Class<InvalidChannelARN>("InvalidChannelARN")({message: S.optional(S.String)}) {}
export class UnsupportedOperationException extends S.Class<UnsupportedOperationException>("UnsupportedOperationException")({message: S.optional(S.String)}) {}

//# Errors
export class ChannelInsufficientPermissionError extends S.TaggedError<ChannelInsufficientPermissionError>()("ChannelInsufficientPermission", ChannelInsufficientPermission.fields) {};
export class ChannelNotFoundError extends S.TaggedError<ChannelNotFoundError>()("ChannelNotFound", ChannelNotFound.fields) {};
export class ChannelUnsupportedSchemaError extends S.TaggedError<ChannelUnsupportedSchemaError>()("ChannelUnsupportedSchema", ChannelUnsupportedSchema.fields) {};
export class DuplicatedAuditEventIdError extends S.TaggedError<DuplicatedAuditEventIdError>()("DuplicatedAuditEventId", DuplicatedAuditEventId.fields) {};
export class InvalidChannelARNError extends S.TaggedError<InvalidChannelARNError>()("InvalidChannelARN", InvalidChannelARN.fields) {};
export class UnsupportedOperationExceptionError extends S.TaggedError<UnsupportedOperationExceptionError>()("UnsupportedOperationException", UnsupportedOperationException.fields) {};

//# Operations
export const putAuditEvents = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-08-11", uri: "/PutAuditEvents", method: "POST", sdkId: "CloudTrail Data", sigV4ServiceName: "cloudtrail-data", name: "CloudTrailDataService.PutAuditEvents" }, PutAuditEventsRequest, PutAuditEventsResponse, [ChannelInsufficientPermissionError, ChannelNotFoundError, ChannelUnsupportedSchemaError, DuplicatedAuditEventIdError, InvalidChannelARNError, UnsupportedOperationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
