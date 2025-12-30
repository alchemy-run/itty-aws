import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class RequestPayloadPart extends Schema.Class<RequestPayloadPart>("RequestPayloadPart")({Bytes: Schema.optional(StreamBody()), DataType: Schema.optional(Schema.String), CompletionState: Schema.optional(Schema.String), P: Schema.optional(Schema.String)}) {}
export const RequestStreamEvent = Schema.Union(RequestPayloadPart);
export class InvokeEndpointWithBidirectionalStreamInput extends Schema.Class<InvokeEndpointWithBidirectionalStreamInput>("InvokeEndpointWithBidirectionalStreamInput")({EndpointName: Schema.String, Body: Body("undefined", RequestStreamEvent), TargetVariant: Schema.optional(Header("X-Amzn-SageMaker-Target-Variant")), ModelInvocationPath: Schema.optional(Header("X-Amzn-SageMaker-Model-Invocation-Path")), ModelQueryString: Schema.optional(Header("X-Amzn-SageMaker-Model-Query-String"))}) {}
export class ResponsePayloadPart extends Schema.Class<ResponsePayloadPart>("ResponsePayloadPart")({Bytes: Schema.optional(StreamBody()), DataType: Schema.optional(Schema.String), CompletionState: Schema.optional(Schema.String), P: Schema.optional(Schema.String)}) {}
export class ModelStreamError extends Schema.Class<ModelStreamError>("ModelStreamError")({Message: Schema.optional(Schema.String), ErrorCode: Schema.optional(Schema.String)}) {}
export class InternalStreamFailure extends Schema.Class<InternalStreamFailure>("InternalStreamFailure")({Message: Schema.optional(Schema.String)}) {}
export const ResponseStreamEvent = Schema.Union(ResponsePayloadPart, ModelStreamError, InternalStreamFailure);
export class InvokeEndpointWithBidirectionalStreamOutput extends Schema.Class<InvokeEndpointWithBidirectionalStreamOutput>("InvokeEndpointWithBidirectionalStreamOutput")({Body: Body("undefined", ResponseStreamEvent), InvokedProductionVariant: Schema.optional(Header("X-Amzn-Invoked-Production-Variant"))}) {}
export class InputValidationError extends Schema.Class<InputValidationError>("InputValidationError")({Message: Schema.optional(Schema.String), ErrorCode: Schema.optional(Schema.String)}) {}
export class InternalServerError extends Schema.Class<InternalServerError>("InternalServerError")({Message: Schema.optional(Schema.String), ErrorCode: Schema.optional(Schema.String)}) {}
export class ModelError extends Schema.Class<ModelError>("ModelError")({Message: Schema.optional(Schema.String), OriginalStatusCode: Schema.optional(Schema.Number), OriginalMessage: Schema.optional(Schema.String), LogStreamArn: Schema.optional(Schema.String), ErrorCode: Schema.optional(Schema.String)}) {}
export class ServiceUnavailableError extends Schema.Class<ServiceUnavailableError>("ServiceUnavailableError")({Message: Schema.optional(Schema.String), ErrorCode: Schema.optional(Schema.String)}) {}

//# Errors
export class InputValidationErrorError extends Schema.TaggedError<InputValidationErrorError>()("InputValidationError", InputValidationError.fields) {};
export class InternalServerErrorError extends Schema.TaggedError<InternalServerErrorError>()("InternalServerError", InternalServerError.fields) {};
export class InternalStreamFailureError extends Schema.TaggedError<InternalStreamFailureError>()("InternalStreamFailure", InternalStreamFailure.fields) {};
export class ModelErrorError extends Schema.TaggedError<ModelErrorError>()("ModelError", ModelError.fields) {};
export class ModelStreamErrorError extends Schema.TaggedError<ModelStreamErrorError>()("ModelStreamError", ModelStreamError.fields) {};
export class ServiceUnavailableErrorError extends Schema.TaggedError<ServiceUnavailableErrorError>()("ServiceUnavailableError", ServiceUnavailableError.fields) {};

//# Operations
export const invokeEndpointWithBidirectionalStream = /*#__PURE__*/ makeOperation(() => Operation({ version: "2025-10-01", uri: "/endpoints/{EndpointName}/invocations-bidirectional-stream", method: "POST", sdkId: "SageMaker Runtime HTTP2", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerRuntimeHttp2.InvokeEndpointWithBidirectionalStream" }, InvokeEndpointWithBidirectionalStreamInput, InvokeEndpointWithBidirectionalStreamOutput, [InputValidationErrorError, InternalServerErrorError, InternalStreamFailureError, ModelErrorError, ModelStreamErrorError, ServiceUnavailableErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
