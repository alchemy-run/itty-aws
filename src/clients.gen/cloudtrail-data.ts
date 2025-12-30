import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class AuditEvent extends Schema.Class<AuditEvent>("AuditEvent")({id: Schema.String, eventData: Schema.String, eventDataChecksum: Schema.optional(Schema.String)}) {}
export const AuditEvents = Schema.Array(AuditEvent);
export class PutAuditEventsRequest extends Schema.Class<PutAuditEventsRequest>("PutAuditEventsRequest")({auditEvents: AuditEvents, channelArn: Schema.String, externalId: Schema.optional(Schema.String)}) {}
export class AuditEventResultEntry extends Schema.Class<AuditEventResultEntry>("AuditEventResultEntry")({id: Schema.String, eventID: Schema.String}) {}
export const AuditEventResultEntries = Schema.Array(AuditEventResultEntry);
export class ResultErrorEntry extends Schema.Class<ResultErrorEntry>("ResultErrorEntry")({id: Schema.String, errorCode: Schema.String, errorMessage: Schema.String}) {}
export const ResultErrorEntries = Schema.Array(ResultErrorEntry);
export class PutAuditEventsResponse extends Schema.Class<PutAuditEventsResponse>("PutAuditEventsResponse")({successful: AuditEventResultEntries, failed: ResultErrorEntries}) {}
export class ChannelInsufficientPermission extends Schema.Class<ChannelInsufficientPermission>("ChannelInsufficientPermission")({message: Schema.optional(Schema.String)}) {}
export class ChannelNotFound extends Schema.Class<ChannelNotFound>("ChannelNotFound")({message: Schema.optional(Schema.String)}) {}
export class ChannelUnsupportedSchema extends Schema.Class<ChannelUnsupportedSchema>("ChannelUnsupportedSchema")({message: Schema.optional(Schema.String)}) {}
export class DuplicatedAuditEventId extends Schema.Class<DuplicatedAuditEventId>("DuplicatedAuditEventId")({message: Schema.optional(Schema.String)}) {}
export class InvalidChannelARN extends Schema.Class<InvalidChannelARN>("InvalidChannelARN")({message: Schema.optional(Schema.String)}) {}
export class UnsupportedOperationException extends Schema.Class<UnsupportedOperationException>("UnsupportedOperationException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class ChannelInsufficientPermissionError extends Schema.TaggedError<ChannelInsufficientPermissionError>()("ChannelInsufficientPermission", ChannelInsufficientPermission.fields) {};
export class ChannelNotFoundError extends Schema.TaggedError<ChannelNotFoundError>()("ChannelNotFound", ChannelNotFound.fields) {};
export class ChannelUnsupportedSchemaError extends Schema.TaggedError<ChannelUnsupportedSchemaError>()("ChannelUnsupportedSchema", ChannelUnsupportedSchema.fields) {};
export class DuplicatedAuditEventIdError extends Schema.TaggedError<DuplicatedAuditEventIdError>()("DuplicatedAuditEventId", DuplicatedAuditEventId.fields) {};
export class InvalidChannelARNError extends Schema.TaggedError<InvalidChannelARNError>()("InvalidChannelARN", InvalidChannelARN.fields) {};
export class UnsupportedOperationExceptionError extends Schema.TaggedError<UnsupportedOperationExceptionError>()("UnsupportedOperationException", UnsupportedOperationException.fields) {};

//# Operations
export const putAuditEvents = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/PutAuditEvents", method: "POST", sdkId: "CloudTrail Data", sigV4ServiceName: "cloudtrail-data", name: "CloudTrailDataService.PutAuditEvents" }, PutAuditEventsRequest, PutAuditEventsResponse, [ChannelInsufficientPermissionError, ChannelNotFoundError, ChannelUnsupportedSchemaError, DuplicatedAuditEventIdError, InvalidChannelARNError, UnsupportedOperationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
