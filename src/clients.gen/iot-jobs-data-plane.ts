import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DescribeJobExecutionRequest = Schema.Struct({jobId: Schema.String, thingName: Schema.String, includeJobDocument: Schema.optional(Schema.Boolean), executionNumber: Schema.optional(Schema.Number)});
export const GetPendingJobExecutionsRequest = Schema.Struct({thingName: Schema.String});
export const DetailsMap = Schema.Record({key: Schema.String, value: Schema.String});
export const UpdateJobExecutionRequest = Schema.Struct({jobId: Schema.String, thingName: Schema.String, status: Schema.String, statusDetails: Schema.optional(DetailsMap), stepTimeoutInMinutes: Schema.optional(Schema.Number), expectedVersion: Schema.optional(Schema.Number), includeJobExecutionState: Schema.optional(Schema.Boolean), includeJobDocument: Schema.optional(Schema.Boolean), executionNumber: Schema.optional(Schema.Number)});
export const StartNextPendingJobExecutionRequest = Schema.Struct({thingName: Schema.String, statusDetails: Schema.optional(DetailsMap), stepTimeoutInMinutes: Schema.optional(Schema.Number)});
export const CommandParameterValue = Schema.Struct({S: Schema.optional(Schema.String), B: Schema.optional(Schema.Boolean), I: Schema.optional(Schema.Number), L: Schema.optional(Schema.Number), D: Schema.optional(Schema.Number), BIN: Schema.optional(StreamBody()), UL: Schema.optional(Schema.String)});
export const JobExecution = Schema.Struct({jobId: Schema.optional(Schema.String), thingName: Schema.optional(Schema.String), status: Schema.optional(Schema.String), statusDetails: Schema.optional(DetailsMap), queuedAt: Schema.optional(Schema.Number), startedAt: Schema.optional(Schema.Number), lastUpdatedAt: Schema.optional(Schema.Number), approximateSecondsBeforeTimedOut: Schema.optional(Schema.Number), versionNumber: Schema.optional(Schema.Number), executionNumber: Schema.optional(Schema.Number), jobDocument: Schema.optional(Schema.String)});
export const JobExecutionSummary = Schema.Struct({jobId: Schema.optional(Schema.String), queuedAt: Schema.optional(Schema.Number), startedAt: Schema.optional(Schema.Number), lastUpdatedAt: Schema.optional(Schema.Number), versionNumber: Schema.optional(Schema.Number), executionNumber: Schema.optional(Schema.Number)});
export const JobExecutionSummaryList = Schema.Array(JobExecutionSummary);
export const CommandExecutionParameterMap = Schema.Record({key: Schema.String, value: CommandParameterValue});
export const JobExecutionState = Schema.Struct({status: Schema.optional(Schema.String), statusDetails: Schema.optional(DetailsMap), versionNumber: Schema.optional(Schema.Number)});
export const DescribeJobExecutionResponse = Schema.Struct({execution: Schema.optional(JobExecution)});
export const GetPendingJobExecutionsResponse = Schema.Struct({inProgressJobs: Schema.optional(JobExecutionSummaryList), queuedJobs: Schema.optional(JobExecutionSummaryList)});
export const StartCommandExecutionRequest = Schema.Struct({targetArn: Schema.String, commandArn: Schema.String, parameters: Schema.optional(CommandExecutionParameterMap), executionTimeoutSeconds: Schema.optional(Schema.Number), clientToken: Schema.optional(Schema.String)});
export const StartNextPendingJobExecutionResponse = Schema.Struct({execution: Schema.optional(JobExecution)});
export const UpdateJobExecutionResponse = Schema.Struct({executionState: Schema.optional(JobExecutionState), jobDocument: Schema.optional(Schema.String)});
export const CertificateValidationException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const StartCommandExecutionResponse = Schema.Struct({executionId: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidStateTransitionException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ServiceUnavailableException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String), payload: Schema.optional(StreamBody())});
export const ConflictException = Schema.Struct({message: Schema.optional(Schema.String), resourceId: Schema.optional(Schema.String)});
export const TerminalStateException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class CertificateValidationExceptionError extends Schema.TaggedError<CertificateValidationExceptionError>()("CertificateValidationException", CertificateValidationException) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class InvalidStateTransitionExceptionError extends Schema.TaggedError<InvalidStateTransitionExceptionError>()("InvalidStateTransitionException", InvalidStateTransitionException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class TerminalStateExceptionError extends Schema.TaggedError<TerminalStateExceptionError>()("TerminalStateException", TerminalStateException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const startNextPendingJobExecution = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-29", uri: "/things/{thingName}/jobs/$next", method: "PUT", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.StartNextPendingJobExecution" }, StartNextPendingJobExecutionRequest, StartNextPendingJobExecutionResponse, [CertificateValidationExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateJobExecution = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-29", uri: "/things/{thingName}/jobs/{jobId}", method: "POST", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.UpdateJobExecution" }, UpdateJobExecutionRequest, UpdateJobExecutionResponse, [CertificateValidationExceptionError, InvalidRequestExceptionError, InvalidStateTransitionExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getPendingJobExecutions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-29", uri: "/things/{thingName}/jobs", method: "GET", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.GetPendingJobExecutions" }, GetPendingJobExecutionsRequest, GetPendingJobExecutionsResponse, [CertificateValidationExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeJobExecution = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-29", uri: "/things/{thingName}/jobs/{jobId}", method: "GET", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.DescribeJobExecution" }, DescribeJobExecutionRequest, DescribeJobExecutionResponse, [CertificateValidationExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, TerminalStateExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startCommandExecution = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-29", uri: "/command-executions", method: "POST", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.StartCommandExecution" }, StartCommandExecutionRequest, StartCommandExecutionResponse, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
