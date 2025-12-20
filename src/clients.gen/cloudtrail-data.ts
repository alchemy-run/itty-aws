import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const AuditEvent = Schema.Struct({id: Schema.String, eventData: Schema.String, eventDataChecksum: Schema.optional(Schema.String)})
const AuditEvents = Schema.Array(AuditEvent)
const PutAuditEventsRequest = Schema.Struct({auditEvents: AuditEvents, channelArn: Schema.String, externalId: Schema.optional(Schema.String)})
const AuditEventResultEntry = Schema.Struct({id: Schema.String, eventID: Schema.String})
const AuditEventResultEntries = Schema.Array(AuditEventResultEntry)
const ResultErrorEntry = Schema.Struct({id: Schema.String, errorCode: Schema.String, errorMessage: Schema.String})
const ResultErrorEntries = Schema.Array(ResultErrorEntry)
const PutAuditEventsResponse = Schema.Struct({successful: AuditEventResultEntries, failed: ResultErrorEntries})
const ChannelInsufficientPermission = Schema.Struct({message: Schema.optional(Schema.String)})
const ChannelNotFound = Schema.Struct({message: Schema.optional(Schema.String)})
const ChannelUnsupportedSchema = Schema.Struct({message: Schema.optional(Schema.String)})
const DuplicatedAuditEventId = Schema.Struct({message: Schema.optional(Schema.String)})
const InvalidChannelARN = Schema.Struct({message: Schema.optional(Schema.String)})
const UnsupportedOperationException = Schema.Struct({message: Schema.optional(Schema.String)})
export const PutAuditEvents = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/PutAuditEvents", method: "POST", sdkId: "CloudTrail Data", sigV4ServiceName: "cloudtrail-data", name: "PutAuditEvents" }, PutAuditEventsRequest, PutAuditEventsResponse, Schema.Union(ErrorAnnotation("ChannelInsufficientPermission", ChannelInsufficientPermission), ErrorAnnotation("ChannelNotFound", ChannelNotFound), ErrorAnnotation("ChannelUnsupportedSchema", ChannelUnsupportedSchema), ErrorAnnotation("DuplicatedAuditEventId", DuplicatedAuditEventId), ErrorAnnotation("InvalidChannelARN", InvalidChannelARN), ErrorAnnotation("UnsupportedOperationException", UnsupportedOperationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
