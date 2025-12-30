import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DescribeJobExecutionRequest extends S.Class<DescribeJobExecutionRequest>("DescribeJobExecutionRequest")({jobId: S.String, thingName: S.String, includeJobDocument: S.optional(S.Boolean), executionNumber: S.optional(S.Number)}) {}
export class GetPendingJobExecutionsRequest extends S.Class<GetPendingJobExecutionsRequest>("GetPendingJobExecutionsRequest")({thingName: S.String}) {}
export const DetailsMap = S.Record({key: S.String, value: S.String});
export class UpdateJobExecutionRequest extends S.Class<UpdateJobExecutionRequest>("UpdateJobExecutionRequest")({jobId: S.String, thingName: S.String, status: S.String, statusDetails: S.optional(DetailsMap), stepTimeoutInMinutes: S.optional(S.Number), expectedVersion: S.optional(S.Number), includeJobExecutionState: S.optional(S.Boolean), includeJobDocument: S.optional(S.Boolean), executionNumber: S.optional(S.Number)}) {}
export class StartNextPendingJobExecutionRequest extends S.Class<StartNextPendingJobExecutionRequest>("StartNextPendingJobExecutionRequest")({thingName: S.String, statusDetails: S.optional(DetailsMap), stepTimeoutInMinutes: S.optional(S.Number)}) {}
export class CommandParameterValue extends S.Class<CommandParameterValue>("CommandParameterValue")({S: S.optional(S.String), B: S.optional(S.Boolean), I: S.optional(S.Number), L: S.optional(S.Number), D: S.optional(S.Number), BIN: S.optional(H.StreamBody()), UL: S.optional(S.String)}) {}
export class JobExecution extends S.Class<JobExecution>("JobExecution")({jobId: S.optional(S.String), thingName: S.optional(S.String), status: S.optional(S.String), statusDetails: S.optional(DetailsMap), queuedAt: S.optional(S.Number), startedAt: S.optional(S.Number), lastUpdatedAt: S.optional(S.Number), approximateSecondsBeforeTimedOut: S.optional(S.Number), versionNumber: S.optional(S.Number), executionNumber: S.optional(S.Number), jobDocument: S.optional(S.String)}) {}
export class JobExecutionSummary extends S.Class<JobExecutionSummary>("JobExecutionSummary")({jobId: S.optional(S.String), queuedAt: S.optional(S.Number), startedAt: S.optional(S.Number), lastUpdatedAt: S.optional(S.Number), versionNumber: S.optional(S.Number), executionNumber: S.optional(S.Number)}) {}
export const JobExecutionSummaryList = S.Array(JobExecutionSummary);
export const CommandExecutionParameterMap = S.Record({key: S.String, value: CommandParameterValue});
export class JobExecutionState extends S.Class<JobExecutionState>("JobExecutionState")({status: S.optional(S.String), statusDetails: S.optional(DetailsMap), versionNumber: S.optional(S.Number)}) {}
export class DescribeJobExecutionResponse extends S.Class<DescribeJobExecutionResponse>("DescribeJobExecutionResponse")({execution: S.optional(JobExecution)}) {}
export class GetPendingJobExecutionsResponse extends S.Class<GetPendingJobExecutionsResponse>("GetPendingJobExecutionsResponse")({inProgressJobs: S.optional(JobExecutionSummaryList), queuedJobs: S.optional(JobExecutionSummaryList)}) {}
export class StartCommandExecutionRequest extends S.Class<StartCommandExecutionRequest>("StartCommandExecutionRequest")({targetArn: S.String, commandArn: S.String, parameters: S.optional(CommandExecutionParameterMap), executionTimeoutSeconds: S.optional(S.Number), clientToken: S.optional(S.String)}) {}
export class StartNextPendingJobExecutionResponse extends S.Class<StartNextPendingJobExecutionResponse>("StartNextPendingJobExecutionResponse")({execution: S.optional(JobExecution)}) {}
export class UpdateJobExecutionResponse extends S.Class<UpdateJobExecutionResponse>("UpdateJobExecutionResponse")({executionState: S.optional(JobExecutionState), jobDocument: S.optional(S.String)}) {}
export class CertificateValidationException extends S.Class<CertificateValidationException>("CertificateValidationException")({message: S.optional(S.String)}) {}
export class InvalidRequestException extends S.Class<InvalidRequestException>("InvalidRequestException")({message: S.optional(S.String)}) {}
export class StartCommandExecutionResponse extends S.Class<StartCommandExecutionResponse>("StartCommandExecutionResponse")({executionId: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class InvalidStateTransitionException extends S.Class<InvalidStateTransitionException>("InvalidStateTransitionException")({message: S.optional(S.String)}) {}
export class ServiceUnavailableException extends S.Class<ServiceUnavailableException>("ServiceUnavailableException")({message: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String), payload: S.optional(H.StreamBody())}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.optional(S.String), resourceId: S.optional(S.String)}) {}
export class TerminalStateException extends S.Class<TerminalStateException>("TerminalStateException")({message: S.optional(S.String)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String)}) {}

//# Errors
export class CertificateValidationExceptionError extends S.TaggedError<CertificateValidationExceptionError>()("CertificateValidationException", CertificateValidationException.fields) {};
export class InvalidRequestExceptionError extends S.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceUnavailableExceptionError extends S.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class InvalidStateTransitionExceptionError extends S.TaggedError<InvalidStateTransitionExceptionError>()("InvalidStateTransitionException", InvalidStateTransitionException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class TerminalStateExceptionError extends S.TaggedError<TerminalStateExceptionError>()("TerminalStateException", TerminalStateException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const startNextPendingJobExecution = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-29", uri: "/things/{thingName}/jobs/$next", method: "PUT", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.StartNextPendingJobExecution" }, StartNextPendingJobExecutionRequest, StartNextPendingJobExecutionResponse, [CertificateValidationExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateJobExecution = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-29", uri: "/things/{thingName}/jobs/{jobId}", method: "POST", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.UpdateJobExecution" }, UpdateJobExecutionRequest, UpdateJobExecutionResponse, [CertificateValidationExceptionError, InvalidRequestExceptionError, InvalidStateTransitionExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getPendingJobExecutions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-29", uri: "/things/{thingName}/jobs", method: "GET", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.GetPendingJobExecutions" }, GetPendingJobExecutionsRequest, GetPendingJobExecutionsResponse, [CertificateValidationExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeJobExecution = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-29", uri: "/things/{thingName}/jobs/{jobId}", method: "GET", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.DescribeJobExecution" }, DescribeJobExecutionRequest, DescribeJobExecutionResponse, [CertificateValidationExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ServiceUnavailableExceptionError, TerminalStateExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startCommandExecution = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-29", uri: "/command-executions", method: "POST", sdkId: "IoT Jobs Data Plane", sigV4ServiceName: "iot-jobs-data", name: "IotLaserThingJobManagerExternalService.StartCommandExecution" }, StartCommandExecutionRequest, StartCommandExecutionResponse, [ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
