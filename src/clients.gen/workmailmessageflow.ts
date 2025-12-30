import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetRawMessageContentRequest extends S.Class<GetRawMessageContentRequest>("GetRawMessageContentRequest")({messageId: S.String}) {}
export class GetRawMessageContentResponse extends S.Class<GetRawMessageContentResponse>("GetRawMessageContentResponse")({messageContent: H.Body("undefined", H.StreamBody())}) {}
export class S3Reference extends S.Class<S3Reference>("S3Reference")({bucket: S.String, key: S.String, objectVersion: S.optional(S.String)}) {}
export class RawMessageContent extends S.Class<RawMessageContent>("RawMessageContent")({s3Reference: S3Reference}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class PutRawMessageContentRequest extends S.Class<PutRawMessageContentRequest>("PutRawMessageContentRequest")({messageId: S.String, content: RawMessageContent}) {}
export class PutRawMessageContentResponse extends S.Class<PutRawMessageContentResponse>("PutRawMessageContentResponse")({}) {}
export class InvalidContentLocation extends S.Class<InvalidContentLocation>("InvalidContentLocation")({message: S.optional(S.String)}) {}
export class MessageFrozen extends S.Class<MessageFrozen>("MessageFrozen")({message: S.optional(S.String)}) {}
export class MessageRejected extends S.Class<MessageRejected>("MessageRejected")({message: S.optional(S.String)}) {}

//# Errors
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class InvalidContentLocationError extends S.TaggedError<InvalidContentLocationError>()("InvalidContentLocation", InvalidContentLocation.fields) {};
export class MessageFrozenError extends S.TaggedError<MessageFrozenError>()("MessageFrozen", MessageFrozen.fields) {};
export class MessageRejectedError extends S.TaggedError<MessageRejectedError>()("MessageRejected", MessageRejected.fields) {};

//# Operations
export const getRawMessageContent = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-05-01", uri: "/messages/{messageId}", method: "GET", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "GiraffeMessageInTransitService.GetRawMessageContent" }, GetRawMessageContentRequest, GetRawMessageContentResponse, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putRawMessageContent = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-05-01", uri: "/messages/{messageId}", method: "POST", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "GiraffeMessageInTransitService.PutRawMessageContent" }, PutRawMessageContentRequest, PutRawMessageContentResponse, [InvalidContentLocationError, MessageFrozenError, MessageRejectedError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
