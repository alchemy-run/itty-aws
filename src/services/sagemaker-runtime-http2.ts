import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class RequestPayloadPart extends S.Class<RequestPayloadPart>("RequestPayloadPart")({Bytes: S.optional(H.StreamBody()), DataType: S.optional(S.String), CompletionState: S.optional(S.String), P: S.optional(S.String)}) {}
export const RequestStreamEvent = S.Union(RequestPayloadPart);
export class InvokeEndpointWithBidirectionalStreamInput extends S.Class<InvokeEndpointWithBidirectionalStreamInput>("InvokeEndpointWithBidirectionalStreamInput")({EndpointName: S.String, Body: H.Body("undefined", RequestStreamEvent), TargetVariant: S.optional(H.Header("X-Amzn-SageMaker-Target-Variant")), ModelInvocationPath: S.optional(H.Header("X-Amzn-SageMaker-Model-Invocation-Path")), ModelQueryString: S.optional(H.Header("X-Amzn-SageMaker-Model-Query-String"))}) {}
export class ResponsePayloadPart extends S.Class<ResponsePayloadPart>("ResponsePayloadPart")({Bytes: S.optional(H.StreamBody()), DataType: S.optional(S.String), CompletionState: S.optional(S.String), P: S.optional(S.String)}) {}
export const ResponseStreamEvent = S.Union(ResponsePayloadPart, S.suspend(() => ModelStreamError), S.suspend(() => InternalStreamFailure));
export class InvokeEndpointWithBidirectionalStreamOutput extends S.Class<InvokeEndpointWithBidirectionalStreamOutput>("InvokeEndpointWithBidirectionalStreamOutput")({Body: H.Body("undefined", ResponseStreamEvent), InvokedProductionVariant: S.optional(H.Header("X-Amzn-Invoked-Production-Variant"))}) {}

//# Errors
export class InputValidationError extends S.TaggedError<InputValidationError>()("InputValidationError", {Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {};
export class InternalServerError extends S.TaggedError<InternalServerError>()("InternalServerError", {Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {};
export class InternalStreamFailure extends S.TaggedError<InternalStreamFailure>()("InternalStreamFailure", {Message: S.optional(S.String)}) {};
export class ModelError extends S.TaggedError<ModelError>()("ModelError", {Message: S.optional(S.String), OriginalStatusCode: S.optional(S.Number), OriginalMessage: S.optional(S.String), LogStreamArn: S.optional(S.String), ErrorCode: S.optional(S.String)}) {};
export class ModelStreamError extends S.TaggedError<ModelStreamError>()("ModelStreamError", {Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {};
export class ServiceUnavailableError extends S.TaggedError<ServiceUnavailableError>()("ServiceUnavailableError", {Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {};

//# Operations
/**
 * Invokes a model endpoint with bidirectional streaming capabilities. This operation establishes a persistent connection that allows you to send multiple requests and receive streaming responses from the model in real-time.
 * 
 * Bidirectional streaming is useful for interactive applications such as chatbots, real-time translation, or any scenario where you need to maintain a conversation-like interaction with the model. The connection remains open, allowing you to send additional input and receive responses without establishing a new connection for each request.
 * 
 * For an overview of Amazon SageMaker AI, see How It Works.
 * 
 * Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.
 * 
 * Calls to `InvokeEndpointWithBidirectionalStream` are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the *Amazon S3 API Reference*.
 * 
 * The bidirectional stream maintains the connection until either the client closes it or the model indicates completion. Each request and response in the stream is sent as an event with optional headers for data type and completion state.
 * 
 * 
 * Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker AI determines the account ID from the authentication token that is supplied by the caller.
 */export const invokeEndpointWithBidirectionalStream = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-10-01", uri: "/endpoints/{EndpointName}/invocations-bidirectional-stream", method: "POST", sdkId: "SageMaker Runtime HTTP2", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerRuntimeHttp2.InvokeEndpointWithBidirectionalStream" }, InvokeEndpointWithBidirectionalStreamInput, InvokeEndpointWithBidirectionalStreamOutput, [InputValidationError, InternalServerError, InternalStreamFailure, ModelError, ModelStreamError, ServiceUnavailableError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
