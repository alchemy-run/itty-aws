import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const GetRawMessageContentRequest = Schema.Struct({messageId: Schema.String})
const GetRawMessageContentResponse = Schema.Struct({messageContent: Body("undefined", StreamBody())})
const S3Reference = Schema.Struct({bucket: Schema.String, key: Schema.String, objectVersion: Schema.optional(Schema.String)})
const RawMessageContent = Schema.Struct({s3Reference: S3Reference})
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const GetRawMessageContent = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/messages/{messageId}", method: "GET", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "GetRawMessageContent" }, GetRawMessageContentRequest, GetRawMessageContentResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const PutRawMessageContentRequest = Schema.Struct({messageId: Schema.String, content: RawMessageContent})
const PutRawMessageContentResponse = Schema.Struct({})
const InvalidContentLocation = Schema.Struct({message: Schema.optional(Schema.String)})
const MessageFrozen = Schema.Struct({message: Schema.optional(Schema.String)})
const MessageRejected = Schema.Struct({message: Schema.optional(Schema.String)})
export const PutRawMessageContent = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/messages/{messageId}", method: "POST", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "PutRawMessageContent" }, PutRawMessageContentRequest, PutRawMessageContentResponse, Schema.Union(ErrorAnnotation("InvalidContentLocation", InvalidContentLocation), ErrorAnnotation("MessageFrozen", MessageFrozen), ErrorAnnotation("MessageRejected", MessageRejected), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
