import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetRawMessageContentRequest extends Schema.Class<GetRawMessageContentRequest>("GetRawMessageContentRequest")({messageId: Schema.String}) {}
export class GetRawMessageContentResponse extends Schema.Class<GetRawMessageContentResponse>("GetRawMessageContentResponse")({messageContent: Body("undefined", StreamBody())}) {}
export class S3Reference extends Schema.Class<S3Reference>("S3Reference")({bucket: Schema.String, key: Schema.String, objectVersion: Schema.optional(Schema.String)}) {}
export class RawMessageContent extends Schema.Class<RawMessageContent>("RawMessageContent")({s3Reference: S3Reference}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class PutRawMessageContentRequest extends Schema.Class<PutRawMessageContentRequest>("PutRawMessageContentRequest")({messageId: Schema.String, content: RawMessageContent}) {}
export class PutRawMessageContentResponse extends Schema.Class<PutRawMessageContentResponse>("PutRawMessageContentResponse")({}) {}
export class InvalidContentLocation extends Schema.Class<InvalidContentLocation>("InvalidContentLocation")({message: Schema.optional(Schema.String)}) {}
export class MessageFrozen extends Schema.Class<MessageFrozen>("MessageFrozen")({message: Schema.optional(Schema.String)}) {}
export class MessageRejected extends Schema.Class<MessageRejected>("MessageRejected")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class InvalidContentLocationError extends Schema.TaggedError<InvalidContentLocationError>()("InvalidContentLocation", InvalidContentLocation.fields) {};
export class MessageFrozenError extends Schema.TaggedError<MessageFrozenError>()("MessageFrozen", MessageFrozen.fields) {};
export class MessageRejectedError extends Schema.TaggedError<MessageRejectedError>()("MessageRejected", MessageRejected.fields) {};

//# Operations
export const getRawMessageContent = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-01", uri: "/messages/{messageId}", method: "GET", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "GiraffeMessageInTransitService.GetRawMessageContent" }, GetRawMessageContentRequest, GetRawMessageContentResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putRawMessageContent = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-01", uri: "/messages/{messageId}", method: "POST", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "GiraffeMessageInTransitService.PutRawMessageContent" }, PutRawMessageContentRequest, PutRawMessageContentResponse, [InvalidContentLocationError, MessageFrozenError, MessageRejectedError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
