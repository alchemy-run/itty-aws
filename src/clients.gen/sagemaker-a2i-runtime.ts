import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DeleteHumanLoopRequest = Schema.Struct({HumanLoopName: Schema.String});
export const DeleteHumanLoopResponse = Schema.Struct({});
export const DescribeHumanLoopRequest = Schema.Struct({HumanLoopName: Schema.String});
export const ListHumanLoopsRequest = Schema.Struct({CreationTimeAfter: Schema.optional(Schema.Date), CreationTimeBefore: Schema.optional(Schema.Date), FlowDefinitionArn: Schema.String, SortOrder: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const StopHumanLoopRequest = Schema.Struct({HumanLoopName: Schema.String});
export const StopHumanLoopResponse = Schema.Struct({});
export const ContentClassifiers = Schema.Array(Schema.String);
export const HumanLoopInput = Schema.Struct({InputContent: Schema.String});
export const HumanLoopDataAttributes = Schema.Struct({ContentClassifiers: ContentClassifiers});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const StartHumanLoopRequest = Schema.Struct({HumanLoopName: Schema.String, FlowDefinitionArn: Schema.String, HumanLoopInput: HumanLoopInput, DataAttributes: Schema.optional(HumanLoopDataAttributes)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const HumanLoopOutput = Schema.Struct({OutputS3Uri: Schema.String});
export const HumanLoopSummary = Schema.Struct({HumanLoopName: Schema.optional(Schema.String), HumanLoopStatus: Schema.optional(Schema.String), CreationTime: Schema.optional(Schema.Date), FailureReason: Schema.optional(Schema.String), FlowDefinitionArn: Schema.optional(Schema.String)});
export const HumanLoopSummaries = Schema.Array(HumanLoopSummary);
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const DescribeHumanLoopResponse = Schema.Struct({CreationTime: Schema.Date, FailureReason: Schema.optional(Schema.String), FailureCode: Schema.optional(Schema.String), HumanLoopStatus: Schema.String, HumanLoopName: Schema.String, HumanLoopArn: Schema.String, FlowDefinitionArn: Schema.String, HumanLoopOutput: Schema.optional(HumanLoopOutput)});
export const ListHumanLoopsResponse = Schema.Struct({HumanLoopSummaries: HumanLoopSummaries, NextToken: Schema.optional(Schema.String)});
export const StartHumanLoopResponse = Schema.Struct({HumanLoopArn: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ServiceQuotaExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const deleteHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops/{HumanLoopName}", method: "DELETE", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.DeleteHumanLoop" }, DeleteHumanLoopRequest, DeleteHumanLoopResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops/{HumanLoopName}", method: "GET", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.DescribeHumanLoop" }, DescribeHumanLoopRequest, DescribeHumanLoopResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listHumanLoops = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops", method: "GET", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.ListHumanLoops" }, ListHumanLoopsRequest, ListHumanLoopsResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const stopHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops/stop", method: "POST", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.StopHumanLoop" }, StopHumanLoopRequest, StopHumanLoopResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-07", uri: "/human-loops", method: "POST", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.StartHumanLoop" }, StartHumanLoopRequest, StartHumanLoopResponse, [ConflictExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
