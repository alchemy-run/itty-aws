import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class RequestPayloadPart extends S.Class<RequestPayloadPart>("RequestPayloadPart")({Bytes: S.optional(H.StreamBody()), DataType: S.optional(S.String), CompletionState: S.optional(S.String), P: S.optional(S.String)}) {}
export const RequestStreamEvent = S.Union(RequestPayloadPart);
export class InvokeEndpointWithBidirectionalStreamInput extends S.Class<InvokeEndpointWithBidirectionalStreamInput>("InvokeEndpointWithBidirectionalStreamInput")({EndpointName: S.String, Body: H.Body("undefined", RequestStreamEvent), TargetVariant: S.optional(H.Header("X-Amzn-SageMaker-Target-Variant")), ModelInvocationPath: S.optional(H.Header("X-Amzn-SageMaker-Model-Invocation-Path")), ModelQueryString: S.optional(H.Header("X-Amzn-SageMaker-Model-Query-String"))}) {}
export class ResponsePayloadPart extends S.Class<ResponsePayloadPart>("ResponsePayloadPart")({Bytes: S.optional(H.StreamBody()), DataType: S.optional(S.String), CompletionState: S.optional(S.String), P: S.optional(S.String)}) {}
export class ModelStreamError extends S.Class<ModelStreamError>("ModelStreamError")({Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {}
export class InternalStreamFailure extends S.Class<InternalStreamFailure>("InternalStreamFailure")({Message: S.optional(S.String)}) {}
export const ResponseStreamEvent = S.Union(ResponsePayloadPart, ModelStreamError, InternalStreamFailure);
export class InvokeEndpointWithBidirectionalStreamOutput extends S.Class<InvokeEndpointWithBidirectionalStreamOutput>("InvokeEndpointWithBidirectionalStreamOutput")({Body: H.Body("undefined", ResponseStreamEvent), InvokedProductionVariant: S.optional(H.Header("X-Amzn-Invoked-Production-Variant"))}) {}
export class InputValidationError extends S.Class<InputValidationError>("InputValidationError")({Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {}
export class InternalServerError extends S.Class<InternalServerError>("InternalServerError")({Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {}
export class ModelError extends S.Class<ModelError>("ModelError")({Message: S.optional(S.String), OriginalStatusCode: S.optional(S.Number), OriginalMessage: S.optional(S.String), LogStreamArn: S.optional(S.String), ErrorCode: S.optional(S.String)}) {}
export class ServiceUnavailableError extends S.Class<ServiceUnavailableError>("ServiceUnavailableError")({Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {}

//# Errors
export class InputValidationErrorError extends S.TaggedError<InputValidationErrorError>()("InputValidationError", InputValidationError.fields) {};
export class InternalServerErrorError extends S.TaggedError<InternalServerErrorError>()("InternalServerError", InternalServerError.fields) {};
export class InternalStreamFailureError extends S.TaggedError<InternalStreamFailureError>()("InternalStreamFailure", InternalStreamFailure.fields) {};
export class ModelErrorError extends S.TaggedError<ModelErrorError>()("ModelError", ModelError.fields) {};
export class ModelStreamErrorError extends S.TaggedError<ModelStreamErrorError>()("ModelStreamError", ModelStreamError.fields) {};
export class ServiceUnavailableErrorError extends S.TaggedError<ServiceUnavailableErrorError>()("ServiceUnavailableError", ServiceUnavailableError.fields) {};

//# Operations
export const invokeEndpointWithBidirectionalStream = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2025-10-01", uri: "/endpoints/{EndpointName}/invocations-bidirectional-stream", method: "POST", sdkId: "SageMaker Runtime HTTP2", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerRuntimeHttp2.InvokeEndpointWithBidirectionalStream" }, InvokeEndpointWithBidirectionalStreamInput, InvokeEndpointWithBidirectionalStreamOutput, [InputValidationErrorError, InternalServerErrorError, InternalStreamFailureError, ModelErrorError, ModelStreamErrorError, ServiceUnavailableErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
