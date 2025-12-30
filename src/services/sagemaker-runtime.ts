import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class InvokeEndpointInput extends S.Class<InvokeEndpointInput>("InvokeEndpointInput")({EndpointName: S.String, Body: H.Body("undefined", H.StreamBody()), ContentType: S.optional(H.Header("Content-Type")), Accept: S.optional(H.Header("Accept")), CustomAttributes: S.optional(H.Header("X-Amzn-SageMaker-Custom-Attributes")), TargetModel: S.optional(H.Header("X-Amzn-SageMaker-Target-Model")), TargetVariant: S.optional(H.Header("X-Amzn-SageMaker-Target-Variant")), TargetContainerHostname: S.optional(H.Header("X-Amzn-SageMaker-Target-Container-Hostname")), InferenceId: S.optional(H.Header("X-Amzn-SageMaker-Inference-Id")), EnableExplanations: S.optional(H.Header("X-Amzn-SageMaker-Enable-Explanations")), InferenceComponentName: S.optional(H.Header("X-Amzn-SageMaker-Inference-Component")), SessionId: S.optional(H.Header("X-Amzn-SageMaker-Session-Id"))}) {}
export class InvokeEndpointAsyncInput extends S.Class<InvokeEndpointAsyncInput>("InvokeEndpointAsyncInput")({EndpointName: S.String, ContentType: S.optional(H.Header("X-Amzn-SageMaker-Content-Type")), Accept: S.optional(H.Header("X-Amzn-SageMaker-Accept")), CustomAttributes: S.optional(H.Header("X-Amzn-SageMaker-Custom-Attributes")), InferenceId: S.optional(H.Header("X-Amzn-SageMaker-Inference-Id")), InputLocation: H.Header("X-Amzn-SageMaker-InputLocation"), RequestTTLSeconds: S.optional(H.Header("X-Amzn-SageMaker-RequestTTLSeconds", S.Number)), InvocationTimeoutSeconds: S.optional(H.Header("X-Amzn-SageMaker-InvocationTimeoutSeconds", S.Number))}) {}
export class InvokeEndpointWithResponseStreamInput extends S.Class<InvokeEndpointWithResponseStreamInput>("InvokeEndpointWithResponseStreamInput")({EndpointName: S.String, Body: H.Body("undefined", H.StreamBody()), ContentType: S.optional(H.Header("Content-Type")), Accept: S.optional(H.Header("X-Amzn-SageMaker-Accept")), CustomAttributes: S.optional(H.Header("X-Amzn-SageMaker-Custom-Attributes")), TargetVariant: S.optional(H.Header("X-Amzn-SageMaker-Target-Variant")), TargetContainerHostname: S.optional(H.Header("X-Amzn-SageMaker-Target-Container-Hostname")), InferenceId: S.optional(H.Header("X-Amzn-SageMaker-Inference-Id")), InferenceComponentName: S.optional(H.Header("X-Amzn-SageMaker-Inference-Component")), SessionId: S.optional(H.Header("X-Amzn-SageMaker-Session-Id"))}) {}
export class InvokeEndpointOutput extends S.Class<InvokeEndpointOutput>("InvokeEndpointOutput")({Body: H.Body("undefined", H.StreamBody()), ContentType: S.optional(H.Header("Content-Type")), InvokedProductionVariant: S.optional(H.Header("x-Amzn-Invoked-Production-Variant")), CustomAttributes: S.optional(H.Header("X-Amzn-SageMaker-Custom-Attributes")), NewSessionId: S.optional(H.Header("X-Amzn-SageMaker-New-Session-Id")), ClosedSessionId: S.optional(H.Header("X-Amzn-SageMaker-Closed-Session-Id"))}) {}
export class InvokeEndpointAsyncOutput extends S.Class<InvokeEndpointAsyncOutput>("InvokeEndpointAsyncOutput")({InferenceId: S.optional(S.String), OutputLocation: S.optional(H.Header("X-Amzn-SageMaker-OutputLocation")), FailureLocation: S.optional(H.Header("X-Amzn-SageMaker-FailureLocation"))}) {}
export class PayloadPart extends S.Class<PayloadPart>("PayloadPart")({Bytes: S.optional(H.StreamBody())}) {}
export const ResponseStream = S.Union(PayloadPart, S.suspend(() => ModelStreamError), S.suspend(() => InternalStreamFailure));
export class InvokeEndpointWithResponseStreamOutput extends S.Class<InvokeEndpointWithResponseStreamOutput>("InvokeEndpointWithResponseStreamOutput")({Body: H.Body("undefined", ResponseStream), ContentType: S.optional(H.Header("X-Amzn-SageMaker-Content-Type")), InvokedProductionVariant: S.optional(H.Header("x-Amzn-Invoked-Production-Variant")), CustomAttributes: S.optional(H.Header("X-Amzn-SageMaker-Custom-Attributes"))}) {}

//# Errors
export class InternalDependencyException extends S.TaggedError<InternalDependencyException>()("InternalDependencyException", {Message: S.optional(S.String)}) {};
export class InternalFailure extends S.TaggedError<InternalFailure>()("InternalFailure", {}) {};
export class ModelError extends S.TaggedError<ModelError>()("ModelError", {Message: S.optional(S.String), OriginalStatusCode: S.optional(S.Number), OriginalMessage: S.optional(S.String), LogStreamArn: S.optional(S.String)}) {};
export class ServiceUnavailable extends S.TaggedError<ServiceUnavailable>()("ServiceUnavailable", {Message: S.optional(S.String)}) {};
export class InternalStreamFailure extends S.TaggedError<InternalStreamFailure>()("InternalStreamFailure", {Message: S.optional(S.String)}) {};
export class ModelStreamError extends S.TaggedError<ModelStreamError>()("ModelStreamError", {Message: S.optional(S.String), ErrorCode: S.optional(S.String)}) {};
export class ValidationError extends S.TaggedError<ValidationError>()("ValidationError", {}) {};
export class ModelNotReadyException extends S.TaggedError<ModelNotReadyException>()("ModelNotReadyException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Invokes a model at the specified endpoint to return the inference response as a
 * stream. The inference stream provides the response payload incrementally as a series of
 * parts. Before you can get an inference stream, you must have access to a model that's
 * deployed using Amazon SageMaker AI hosting services, and the container for that model
 * must support inference streaming.
 * 
 * 
 * For more information that can help you use this API, see the following sections in the
 * *Amazon SageMaker AI Developer Guide*:
 * 
 * 
 * 
 * - For information about how to add streaming support to a model, see How Containers Serve Requests.
 * 
 * 
 * 
 * - For information about how to process the streaming response, see Invoke real-time endpoints.
 * 
 * 
 * 
 * 
 * 
 * Before you can use this operation, your IAM permissions must allow the
 * `sagemaker:InvokeEndpoint` action. For more information about Amazon SageMaker AI actions for IAM policies, see Actions, resources, and condition keys for Amazon SageMaker AI in the IAM Service Authorization
 * Reference.
 * 
 * 
 * Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add
 * additional headers. You should not rely on the behavior of headers outside those
 * enumerated in the request syntax.
 * 
 * 
 * Calls to `InvokeEndpointWithResponseStream` are authenticated by using
 * Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the
 * *Amazon S3 API Reference*.
 */export const invokeEndpointWithResponseStream = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-05-13", uri: "/endpoints/{EndpointName}/invocations-response-stream", method: "POST", sdkId: "SageMaker Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerRuntime.InvokeEndpointWithResponseStream" }, InvokeEndpointWithResponseStreamInput, InvokeEndpointWithResponseStreamOutput, [InternalFailure, InternalStreamFailure, ModelError, ModelStreamError, ServiceUnavailable, ValidationError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * After you deploy a model into production using Amazon SageMaker AI hosting services,
 * your client applications use this API to get inferences from the model hosted at the
 * specified endpoint.
 * 
 * 
 * For an overview of Amazon SageMaker AI, see How It Works.
 * 
 * 
 * Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add
 * additional headers. You should not rely on the behavior of headers outside those
 * enumerated in the request syntax.
 * 
 * 
 * Calls to `InvokeEndpoint` are authenticated by using Amazon Web Services
 * Signature Version 4. For information, see Authenticating
 * Requests (Amazon Web Services Signature Version 4) in the *Amazon S3 API Reference*.
 * 
 * 
 * A customer's model containers must respond to requests within 60 seconds. The model
 * itself can have a maximum processing time of 60 seconds before responding to
 * invocations. If your model is going to take 50-60 seconds of processing time, the SDK
 * socket timeout should be set to be 70 seconds.
 * 
 * 
 * 
 * 
 * Endpoints are scoped to an individual account, and are not public. The URL does
 * not contain the account ID, but Amazon SageMaker AI determines the account ID from
 * the authentication token that is supplied by the caller.
 */export const invokeEndpoint = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-05-13", uri: "/endpoints/{EndpointName}/invocations", method: "POST", sdkId: "SageMaker Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerRuntime.InvokeEndpoint" }, InvokeEndpointInput, InvokeEndpointOutput, [InternalDependencyException, InternalFailure, ModelError, ModelNotReadyException, ServiceUnavailable, ValidationError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * After you deploy a model into production using Amazon SageMaker AI hosting services,
 * your client applications use this API to get inferences from the model hosted at the
 * specified endpoint in an asynchronous manner.
 * 
 * 
 * Inference requests sent to this API are enqueued for asynchronous processing. The
 * processing of the inference request may or may not complete before you receive a
 * response from this API. The response from this API will not contain the result of the
 * inference request but contain information about where you can locate it.
 * 
 * 
 * Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add
 * additional headers. You should not rely on the behavior of headers outside those
 * enumerated in the request syntax.
 * 
 * 
 * Calls to `InvokeEndpointAsync` are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating
 * Requests (Amazon Web Services Signature Version 4) in the *Amazon S3 API Reference*.
 */export const invokeEndpointAsync = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-05-13", uri: "/endpoints/{EndpointName}/async-invocations", method: "POST", sdkId: "SageMaker Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerRuntime.InvokeEndpointAsync" }, InvokeEndpointAsyncInput, InvokeEndpointAsyncOutput, [InternalFailure, ServiceUnavailable, ValidationError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
