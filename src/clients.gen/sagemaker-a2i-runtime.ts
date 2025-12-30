import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class DeleteHumanLoopRequest extends Schema.Class<DeleteHumanLoopRequest>("DeleteHumanLoopRequest")({HumanLoopName: Schema.String}) {}
export class DeleteHumanLoopResponse extends Schema.Class<DeleteHumanLoopResponse>("DeleteHumanLoopResponse")({}) {}
export class DescribeHumanLoopRequest extends Schema.Class<DescribeHumanLoopRequest>("DescribeHumanLoopRequest")({HumanLoopName: Schema.String}) {}
export class ListHumanLoopsRequest extends Schema.Class<ListHumanLoopsRequest>("ListHumanLoopsRequest")({CreationTimeAfter: Schema.optional(Schema.Date), CreationTimeBefore: Schema.optional(Schema.Date), FlowDefinitionArn: Schema.String, SortOrder: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class StopHumanLoopRequest extends Schema.Class<StopHumanLoopRequest>("StopHumanLoopRequest")({HumanLoopName: Schema.String}) {}
export class StopHumanLoopResponse extends Schema.Class<StopHumanLoopResponse>("StopHumanLoopResponse")({}) {}
export const ContentClassifiers = Schema.Array(Schema.String);
export class HumanLoopInput extends Schema.Class<HumanLoopInput>("HumanLoopInput")({InputContent: Schema.String}) {}
export class HumanLoopDataAttributes extends Schema.Class<HumanLoopDataAttributes>("HumanLoopDataAttributes")({ContentClassifiers: ContentClassifiers}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.optional(Schema.String)}) {}
export class StartHumanLoopRequest extends Schema.Class<StartHumanLoopRequest>("StartHumanLoopRequest")({HumanLoopName: Schema.String, FlowDefinitionArn: Schema.String, HumanLoopInput: HumanLoopInput, DataAttributes: Schema.optional(HumanLoopDataAttributes)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class HumanLoopOutput extends Schema.Class<HumanLoopOutput>("HumanLoopOutput")({OutputS3Uri: Schema.String}) {}
export class HumanLoopSummary extends Schema.Class<HumanLoopSummary>("HumanLoopSummary")({HumanLoopName: Schema.optional(Schema.String), HumanLoopStatus: Schema.optional(Schema.String), CreationTime: Schema.optional(Schema.Date), FailureReason: Schema.optional(Schema.String), FlowDefinitionArn: Schema.optional(Schema.String)}) {}
export const HumanLoopSummaries = Schema.Array(HumanLoopSummary);
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.optional(Schema.String)}) {}
export class DescribeHumanLoopResponse extends Schema.Class<DescribeHumanLoopResponse>("DescribeHumanLoopResponse")({CreationTime: Schema.Date, FailureReason: Schema.optional(Schema.String), FailureCode: Schema.optional(Schema.String), HumanLoopStatus: Schema.String, HumanLoopName: Schema.String, HumanLoopArn: Schema.String, FlowDefinitionArn: Schema.String, HumanLoopOutput: Schema.optional(HumanLoopOutput)}) {}
export class ListHumanLoopsResponse extends Schema.Class<ListHumanLoopsResponse>("ListHumanLoopsResponse")({HumanLoopSummaries: HumanLoopSummaries, NextToken: Schema.optional(Schema.String)}) {}
export class StartHumanLoopResponse extends Schema.Class<StartHumanLoopResponse>("StartHumanLoopResponse")({HumanLoopArn: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.optional(Schema.String)}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({Message: Schema.optional(Schema.String)}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const deleteHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops/{HumanLoopName}", method: "DELETE", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.DeleteHumanLoop" }, DeleteHumanLoopRequest, DeleteHumanLoopResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops/{HumanLoopName}", method: "GET", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.DescribeHumanLoop" }, DescribeHumanLoopRequest, DescribeHumanLoopResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listHumanLoops = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops", method: "GET", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.ListHumanLoops" }, ListHumanLoopsRequest, ListHumanLoopsResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const stopHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops/stop", method: "POST", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.StopHumanLoop" }, StopHumanLoopRequest, StopHumanLoopResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops", method: "POST", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.StartHumanLoop" }, StartHumanLoopRequest, StartHumanLoopResponse, [ConflictExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
