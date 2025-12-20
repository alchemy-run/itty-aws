import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const DeleteHumanLoopRequest = Schema.Struct({HumanLoopName: Schema.String})
const DeleteHumanLoopResponse = Schema.Struct({})
const DescribeHumanLoopRequest = Schema.Struct({HumanLoopName: Schema.String})
const ListHumanLoopsRequest = Schema.Struct({CreationTimeAfter: Schema.optional(Schema.Date), CreationTimeBefore: Schema.optional(Schema.Date), FlowDefinitionArn: Schema.String, SortOrder: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)})
const StopHumanLoopRequest = Schema.Struct({HumanLoopName: Schema.String})
const StopHumanLoopResponse = Schema.Struct({})
const ContentClassifiers = Schema.Array(Schema.String)
const HumanLoopInput = Schema.Struct({InputContent: Schema.String})
const HumanLoopDataAttributes = Schema.Struct({ContentClassifiers: ContentClassifiers})
const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)})
const StartHumanLoopRequest = Schema.Struct({HumanLoopName: Schema.String, FlowDefinitionArn: Schema.String, HumanLoopInput: HumanLoopInput, DataAttributes: Schema.optional(HumanLoopDataAttributes)})
const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)})
const HumanLoopOutput = Schema.Struct({OutputS3Uri: Schema.String})
const HumanLoopSummary = Schema.Struct({HumanLoopName: Schema.optional(Schema.String), HumanLoopStatus: Schema.optional(Schema.String), CreationTime: Schema.optional(Schema.Date), FailureReason: Schema.optional(Schema.String), FlowDefinitionArn: Schema.optional(Schema.String)})
const HumanLoopSummaries = Schema.Array(HumanLoopSummary)
const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const DeleteHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/human-loops/{HumanLoopName}", method: "DELETE", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "DeleteHumanLoop" }, DeleteHumanLoopRequest, DeleteHumanLoopResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const DescribeHumanLoopResponse = Schema.Struct({CreationTime: Schema.Date, FailureReason: Schema.optional(Schema.String), FailureCode: Schema.optional(Schema.String), HumanLoopStatus: Schema.String, HumanLoopName: Schema.String, HumanLoopArn: Schema.String, FlowDefinitionArn: Schema.String, HumanLoopOutput: Schema.optional(HumanLoopOutput)})
export const DescribeHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/human-loops/{HumanLoopName}", method: "GET", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "DescribeHumanLoop" }, DescribeHumanLoopRequest, DescribeHumanLoopResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListHumanLoopsResponse = Schema.Struct({HumanLoopSummaries: HumanLoopSummaries, NextToken: Schema.optional(Schema.String)})
export const ListHumanLoops = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/human-loops", method: "GET", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "ListHumanLoops" }, ListHumanLoopsRequest, ListHumanLoopsResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const StartHumanLoopResponse = Schema.Struct({HumanLoopArn: Schema.optional(Schema.String)})
const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const StopHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/human-loops/stop", method: "POST", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "StopHumanLoop" }, StopHumanLoopRequest, StopHumanLoopResponse, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)})
const ServiceQuotaExceededException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const StartHumanLoop = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/human-loops", method: "POST", sdkId: "SageMaker A2I Runtime", sigV4ServiceName: "sagemaker", name: "StartHumanLoop" }, StartHumanLoopRequest, StartHumanLoopResponse, Schema.Union(ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
