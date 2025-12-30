import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetRawMessageContentRequest extends S.Class<GetRawMessageContentRequest>("GetRawMessageContentRequest")({messageId: S.String}) {}
export class GetRawMessageContentResponse extends S.Class<GetRawMessageContentResponse>("GetRawMessageContentResponse")({messageContent: H.Body("undefined", H.StreamBody())}) {}
export class S3Reference extends S.Class<S3Reference>("S3Reference")({bucket: S.String, key: S.String, objectVersion: S.optional(S.String)}) {}
export class RawMessageContent extends S.Class<RawMessageContent>("RawMessageContent")({s3Reference: S3Reference}) {}
export class PutRawMessageContentRequest extends S.Class<PutRawMessageContentRequest>("PutRawMessageContentRequest")({messageId: S.String, content: RawMessageContent}) {}
export class PutRawMessageContentResponse extends S.Class<PutRawMessageContentResponse>("PutRawMessageContentResponse")({}) {}

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {message: S.optional(S.String)}) {};
export class InvalidContentLocation extends S.TaggedError<InvalidContentLocation>()("InvalidContentLocation", {message: S.optional(S.String)}) {};
export class MessageFrozen extends S.TaggedError<MessageFrozen>()("MessageFrozen", {message: S.optional(S.String)}) {};
export class MessageRejected extends S.TaggedError<MessageRejected>()("MessageRejected", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Retrieves the raw content of an in-transit email message, in MIME format.
 */export const getRawMessageContent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-05-01", uri: "/messages/{messageId}", method: "GET", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "GiraffeMessageInTransitService.GetRawMessageContent" }, GetRawMessageContentRequest, GetRawMessageContentResponse, [ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the raw content of an in-transit email message, in MIME format.
 * 
 * This example describes how to update in-transit email message. For more information and examples for using this API, see
 * 
 * Updating message content with AWS Lambda.
 * 
 * Updates to an in-transit message only appear when you call `PutRawMessageContent` from an AWS Lambda function
 * configured with a synchronous
 * Run Lambda rule. If you call `PutRawMessageContent` on a delivered or sent message, the message remains unchanged,
 * even though GetRawMessageContent returns an updated
 * message.
 */export const putRawMessageContent = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-05-01", uri: "/messages/{messageId}", sdkId: "WorkMailMessageFlow", sigV4ServiceName: "workmailmessageflow", name: "GiraffeMessageInTransitService.PutRawMessageContent" }, PutRawMessageContentRequest, PutRawMessageContentResponse, [InvalidContentLocation, MessageFrozen, MessageRejected, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
