import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const GetRawMessageContentRequest = Schema.Struct({messageId: Schema.String});
export const GetRawMessageContentResponse = Schema.Struct({messageContent: Body("undefined", StreamBody())});
export const S3Reference = Schema.Struct({bucket: Schema.String, key: Schema.String, objectVersion: Schema.optional(Schema.String)});
export const RawMessageContent = Schema.Struct({s3Reference: S3Reference});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const PutRawMessageContentRequest = Schema.Struct({messageId: Schema.String, content: RawMessageContent});
export const PutRawMessageContentResponse = Schema.Struct({});
export const InvalidContentLocation = Schema.Struct({message: Schema.optional(Schema.String)});
export const MessageFrozen = Schema.Struct({message: Schema.optional(Schema.String)});
export const MessageRejected = Schema.Struct({message: Schema.optional(Schema.String)});
export const GetRawMessageContent = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-01", uri: "/messages/{messageId}", method: "GET", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "GiraffeMessageInTransitService.GetRawMessageContent" }, GetRawMessageContentRequest, GetRawMessageContentResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const PutRawMessageContent = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-01", uri: "/messages/{messageId}", method: "POST", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "GiraffeMessageInTransitService.PutRawMessageContent" }, PutRawMessageContentRequest, PutRawMessageContentResponse, Schema.Union(ErrorAnnotation("InvalidContentLocation", InvalidContentLocation), ErrorAnnotation("MessageFrozen", MessageFrozen), ErrorAnnotation("MessageRejected", MessageRejected), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
