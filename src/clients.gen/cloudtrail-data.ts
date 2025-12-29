import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const AuditEvent = Schema.Struct({id: Schema.String, eventData: Schema.String, eventDataChecksum: Schema.optional(Schema.String)});
export const AuditEvents = Schema.Array(AuditEvent);
export const PutAuditEventsRequest = Schema.Struct({auditEvents: AuditEvents, channelArn: Schema.String, externalId: Schema.optional(Schema.String)});
export const AuditEventResultEntry = Schema.Struct({id: Schema.String, eventID: Schema.String});
export const AuditEventResultEntries = Schema.Array(AuditEventResultEntry);
export const ResultErrorEntry = Schema.Struct({id: Schema.String, errorCode: Schema.String, errorMessage: Schema.String});
export const ResultErrorEntries = Schema.Array(ResultErrorEntry);
export const PutAuditEventsResponse = Schema.Struct({successful: AuditEventResultEntries, failed: ResultErrorEntries});
export const ChannelInsufficientPermission = Schema.Struct({message: Schema.optional(Schema.String)});
export const ChannelNotFound = Schema.Struct({message: Schema.optional(Schema.String)});
export const ChannelUnsupportedSchema = Schema.Struct({message: Schema.optional(Schema.String)});
export const DuplicatedAuditEventId = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidChannelARN = Schema.Struct({message: Schema.optional(Schema.String)});
export const UnsupportedOperationException = Schema.Struct({message: Schema.optional(Schema.String)});
export const PutAuditEvents = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-11", uri: "/PutAuditEvents", method: "POST", sdkId: "CloudTrail Data", sigV4ServiceName: "cloudtrail-data", name: "CloudTrailDataService.PutAuditEvents" }, PutAuditEventsRequest, PutAuditEventsResponse, Schema.Union(ErrorAnnotation("ChannelInsufficientPermission", ChannelInsufficientPermission), ErrorAnnotation("ChannelNotFound", ChannelNotFound), ErrorAnnotation("ChannelUnsupportedSchema", ChannelUnsupportedSchema), ErrorAnnotation("DuplicatedAuditEventId", DuplicatedAuditEventId), ErrorAnnotation("InvalidChannelARN", InvalidChannelARN), ErrorAnnotation("UnsupportedOperationException", UnsupportedOperationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
