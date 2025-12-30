import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteHumanLoopRequest extends S.Class<DeleteHumanLoopRequest>("DeleteHumanLoopRequest")({HumanLoopName: S.String}) {}
export class DeleteHumanLoopResponse extends S.Class<DeleteHumanLoopResponse>("DeleteHumanLoopResponse")({}) {}
export class DescribeHumanLoopRequest extends S.Class<DescribeHumanLoopRequest>("DescribeHumanLoopRequest")({HumanLoopName: S.String}) {}
export class ListHumanLoopsRequest extends S.Class<ListHumanLoopsRequest>("ListHumanLoopsRequest")({CreationTimeAfter: S.optional(S.Date), CreationTimeBefore: S.optional(S.Date), FlowDefinitionArn: S.String, SortOrder: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class StopHumanLoopRequest extends S.Class<StopHumanLoopRequest>("StopHumanLoopRequest")({HumanLoopName: S.String}) {}
export class StopHumanLoopResponse extends S.Class<StopHumanLoopResponse>("StopHumanLoopResponse")({}) {}
export const ContentClassifiers = S.Array(S.String);
export class HumanLoopInput extends S.Class<HumanLoopInput>("HumanLoopInput")({InputContent: S.String}) {}
export class HumanLoopDataAttributes extends S.Class<HumanLoopDataAttributes>("HumanLoopDataAttributes")({ContentClassifiers: ContentClassifiers}) {}
export class StartHumanLoopRequest extends S.Class<StartHumanLoopRequest>("StartHumanLoopRequest")({HumanLoopName: S.String, FlowDefinitionArn: S.String, HumanLoopInput: HumanLoopInput, DataAttributes: S.optional(HumanLoopDataAttributes)}) {}
export class HumanLoopOutput extends S.Class<HumanLoopOutput>("HumanLoopOutput")({OutputS3Uri: S.String}) {}
export class HumanLoopSummary extends S.Class<HumanLoopSummary>("HumanLoopSummary")({HumanLoopName: S.optional(S.String), HumanLoopStatus: S.optional(S.String), CreationTime: S.optional(S.Date), FailureReason: S.optional(S.String), FlowDefinitionArn: S.optional(S.String)}) {}
export const HumanLoopSummaries = S.Array(HumanLoopSummary);
export class DescribeHumanLoopResponse extends S.Class<DescribeHumanLoopResponse>("DescribeHumanLoopResponse")({CreationTime: S.Date, FailureReason: S.optional(S.String), FailureCode: S.optional(S.String), HumanLoopStatus: S.String, HumanLoopName: S.String, HumanLoopArn: S.String, FlowDefinitionArn: S.String, HumanLoopOutput: S.optional(HumanLoopOutput)}) {}
export class ListHumanLoopsResponse extends S.Class<ListHumanLoopsResponse>("ListHumanLoopsResponse")({HumanLoopSummaries: HumanLoopSummaries, NextToken: S.optional(S.String)}) {}
export class StartHumanLoopResponse extends S.Class<StartHumanLoopResponse>("StartHumanLoopResponse")({HumanLoopArn: S.optional(S.String)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String)}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {Message: S.optional(S.String)}) {};

//# Operations
export const deleteHumanLoop = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-07", uri: "/human-loops/{HumanLoopName}", method: "DELETE", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.DeleteHumanLoop" }, DeleteHumanLoopRequest, DeleteHumanLoopResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeHumanLoop = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-07", uri: "/human-loops/{HumanLoopName}", method: "GET", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.DescribeHumanLoop" }, DescribeHumanLoopRequest, DescribeHumanLoopResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listHumanLoops = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-07", uri: "/human-loops", method: "GET", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.ListHumanLoops" }, ListHumanLoopsRequest, ListHumanLoopsResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const stopHumanLoop = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-07", uri: "/human-loops/stop", method: "POST", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.StopHumanLoop" }, StopHumanLoopRequest, StopHumanLoopResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startHumanLoop = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-07", uri: "/human-loops", method: "POST", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerA2IRuntime.StartHumanLoop" }, StartHumanLoopRequest, StartHumanLoopResponse, [ConflictException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
