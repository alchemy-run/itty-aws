import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DeleteReportDefinitionRequest = Schema.Struct({reportId: Schema.String});
export const GetReportDefinitionRequest = Schema.Struct({reportId: Schema.String});
export const ListReportDefinitionsRequest = Schema.Struct({nextToken: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number)});
export const S3Location = Schema.Struct({bucket: Schema.String, prefix: Schema.String});
export const UpdateReportDefinitionRequest = Schema.Struct({reportId: Schema.String, reportDescription: Schema.String, reportFrequency: Schema.String, format: Schema.String, destinationS3Location: S3Location});
export const SourceS3Location = Schema.Struct({bucket: Schema.String, key: Schema.String, region: Schema.optional(Schema.String)});
export const DeleteReportDefinitionResult = Schema.Struct({reportId: Schema.optional(Schema.String)});
export const GetReportDefinitionResult = Schema.Struct({reportId: Schema.String, reportDescription: Schema.String, reportFrequency: Schema.String, format: Schema.String, destinationS3Location: S3Location, createdAt: Schema.Date, lastUpdated: Schema.Date});
export const ImportApplicationUsageRequest = Schema.Struct({sourceS3Location: SourceS3Location});
export const PutReportDefinitionRequest = Schema.Struct({reportId: Schema.String, reportDescription: Schema.String, reportFrequency: Schema.String, format: Schema.String, destinationS3Location: S3Location});
export const UpdateReportDefinitionResult = Schema.Struct({reportId: Schema.optional(Schema.String)});
export const ReportDefinition = Schema.Struct({reportId: Schema.optional(Schema.String), reportDescription: Schema.optional(Schema.String), reportFrequency: Schema.optional(Schema.String), format: Schema.optional(Schema.String), destinationS3Location: Schema.optional(S3Location), createdAt: Schema.optional(Schema.Date), lastUpdatedAt: Schema.optional(Schema.Date)});
export const ReportDefinitionList = Schema.Array(ReportDefinition);
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ImportApplicationUsageResult = Schema.Struct({importId: Schema.String});
export const ListReportDefinitionsResult = Schema.Struct({reportDefinitions: Schema.optional(ReportDefinitionList), nextToken: Schema.optional(Schema.String)});
export const PutReportDefinitionResult = Schema.Struct({reportId: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const getReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-09-10", uri: "/reportDefinition/{reportId}", method: "GET", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.GetReportDefinition" }, GetReportDefinitionRequest, GetReportDefinitionResult, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const importApplicationUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-09-10", uri: "/importApplicationUsage", method: "POST", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.ImportApplicationUsage" }, ImportApplicationUsageRequest, ImportApplicationUsageResult, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listReportDefinitions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-09-10", uri: "/reportDefinition", method: "GET", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.ListReportDefinitions" }, ListReportDefinitionsRequest, ListReportDefinitionsResult, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-09-10", uri: "/reportDefinition/{reportId}", method: "PUT", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.UpdateReportDefinition" }, UpdateReportDefinitionRequest, UpdateReportDefinitionResult, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-09-10", uri: "/reportDefinition/{reportId}", method: "DELETE", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.DeleteReportDefinition" }, DeleteReportDefinitionRequest, DeleteReportDefinitionResult, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putReportDefinition = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-09-10", uri: "/reportDefinition", method: "POST", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.PutReportDefinition" }, PutReportDefinitionRequest, PutReportDefinitionResult, [AccessDeniedExceptionError, InternalServerExceptionError, ServiceQuotaExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
