import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class StartSelector extends S.Class<StartSelector>("StartSelector")({StartSelectorType: S.String, AfterFragmentNumber: S.optional(S.String), StartTimestamp: S.optional(S.Date), ContinuationToken: S.optional(S.String)}) {}
export class GetMediaInput extends S.Class<GetMediaInput>("GetMediaInput")({StreamName: S.optional(S.String), StreamARN: S.optional(S.String), StartSelector: StartSelector}) {}
export class GetMediaOutput extends S.Class<GetMediaOutput>("GetMediaOutput")({ContentType: S.optional(H.Header("Content-Type")), Payload: S.optional(H.Body("undefined", H.StreamBody()))}) {}

//# Errors
export class ClientLimitExceededException extends S.TaggedError<ClientLimitExceededException>()("ClientLimitExceededException", {Message: S.optional(S.String)}) {};
export class ConnectionLimitExceededException extends S.TaggedError<ConnectionLimitExceededException>()("ConnectionLimitExceededException", {Message: S.optional(S.String)}) {};
export class InvalidArgumentException extends S.TaggedError<InvalidArgumentException>()("InvalidArgumentException", {Message: S.optional(S.String)}) {};
export class InvalidEndpointException extends S.TaggedError<InvalidEndpointException>()("InvalidEndpointException", {Message: S.optional(S.String)}) {};
export class NotAuthorizedException extends S.TaggedError<NotAuthorizedException>()("NotAuthorizedException", {Message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Use this API to retrieve media content from a Kinesis video stream. In the request,
 * you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk.
 * Kinesis Video Streams then returns a stream of chunks in order by fragment number.
 * 
 * 
 * 
 * 
 * You must first call the `GetDataEndpoint` API to get an endpoint. Then
 * send the `GetMedia` requests to this endpoint using the --endpoint-url parameter.
 * 
 * 
 * 
 * 
 * 
 * When you put media data (fragments) on a stream, Kinesis Video Streams stores each
 * incoming fragment and related metadata in what is called a "chunk." For more information, see
 * PutMedia. The `GetMedia` API returns a stream of these chunks starting
 * from the chunk that you specify in the request.
 * 
 * 
 * The following limits apply when using the `GetMedia` API:
 * 
 * 
 * 
 * - A client can call `GetMedia` up to five times per second per stream.
 * 
 * 
 * 
 * 
 * - Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second
 * (or 200 megabits per second) during a `GetMedia` session.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * If an error is thrown after invoking a Kinesis Video Streams media API, in addition to
 * the HTTP status code and the response body, it includes the following pieces of information:
 * 
 * 
 * 
 * - `x-amz-ErrorType` HTTP header – contains a more specific error type in
 * addition to what the HTTP status code provides.
 * 
 * 
 * 
 * - `x-amz-RequestId` HTTP header – if you want to report an issue to AWS,
 * the support team can better diagnose the problem if given the Request Id.
 * 
 * 
 * 
 * 
 * 
 * Both the HTTP status code and the ErrorType header can be utilized to make programmatic
 * decisions about whether errors are retry-able and under what conditions, as well as provide
 * information on what actions the client programmer might need to take in order to
 * successfully try again.
 * 
 * 
 * For more information, see the **Errors** section at the
 * bottom of this topic, as well as Common Errors.
 */export const getMedia = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-30", uri: "/getMedia", method: "POST", sdkId: "Kinesis Video Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityInletService.GetMedia" }, GetMediaInput, GetMediaOutput, [ClientLimitExceededException, ConnectionLimitExceededException, InvalidArgumentException, InvalidEndpointException, NotAuthorizedException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
