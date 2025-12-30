import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteReportDefinitionRequest extends S.Class<DeleteReportDefinitionRequest>("DeleteReportDefinitionRequest")({reportId: S.String}) {}
export class GetReportDefinitionRequest extends S.Class<GetReportDefinitionRequest>("GetReportDefinitionRequest")({reportId: S.String}) {}
export class ListReportDefinitionsRequest extends S.Class<ListReportDefinitionsRequest>("ListReportDefinitionsRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class S3Location extends S.Class<S3Location>("S3Location")({bucket: S.String, prefix: S.String}) {}
export class UpdateReportDefinitionRequest extends S.Class<UpdateReportDefinitionRequest>("UpdateReportDefinitionRequest")({reportId: S.String, reportDescription: S.String, reportFrequency: S.String, format: S.String, destinationS3Location: S3Location}) {}
export class SourceS3Location extends S.Class<SourceS3Location>("SourceS3Location")({bucket: S.String, key: S.String, region: S.optional(S.String)}) {}
export class DeleteReportDefinitionResult extends S.Class<DeleteReportDefinitionResult>("DeleteReportDefinitionResult")({reportId: S.optional(S.String)}) {}
export class GetReportDefinitionResult extends S.Class<GetReportDefinitionResult>("GetReportDefinitionResult")({reportId: S.String, reportDescription: S.String, reportFrequency: S.String, format: S.String, destinationS3Location: S3Location, createdAt: S.Date, lastUpdated: S.Date}) {}
export class ImportApplicationUsageRequest extends S.Class<ImportApplicationUsageRequest>("ImportApplicationUsageRequest")({sourceS3Location: SourceS3Location}) {}
export class PutReportDefinitionRequest extends S.Class<PutReportDefinitionRequest>("PutReportDefinitionRequest")({reportId: S.String, reportDescription: S.String, reportFrequency: S.String, format: S.String, destinationS3Location: S3Location}) {}
export class UpdateReportDefinitionResult extends S.Class<UpdateReportDefinitionResult>("UpdateReportDefinitionResult")({reportId: S.optional(S.String)}) {}
export class ReportDefinition extends S.Class<ReportDefinition>("ReportDefinition")({reportId: S.optional(S.String), reportDescription: S.optional(S.String), reportFrequency: S.optional(S.String), format: S.optional(S.String), destinationS3Location: S.optional(S3Location), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date)}) {}
export const ReportDefinitionList = S.Array(ReportDefinition);
export class ImportApplicationUsageResult extends S.Class<ImportApplicationUsageResult>("ImportApplicationUsageResult")({importId: S.String}) {}
export class ListReportDefinitionsResult extends S.Class<ListReportDefinitionsResult>("ListReportDefinitionsResult")({reportDefinitions: S.optional(ReportDefinitionList), nextToken: S.optional(S.String)}) {}
export class PutReportDefinitionResult extends S.Class<PutReportDefinitionResult>("PutReportDefinitionResult")({reportId: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Retrieves the definition of a report already configured in AWS Application Cost Profiler.
 */export const getReportDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-10", uri: "/reportDefinition/{reportId}", method: "GET", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.GetReportDefinition" }, GetReportDefinitionRequest, GetReportDefinitionResult, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Ingests application usage data from Amazon Simple Storage Service (Amazon S3).
 * 
 * 
 * The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler
 * copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing
 * asynchronously.
 */export const importApplicationUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-10", uri: "/importApplicationUsage", method: "POST", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.ImportApplicationUsage" }, ImportApplicationUsageRequest, ImportApplicationUsageResult, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of all reports and their configurations for your AWS account.
 * 
 * 
 * The maximum number of reports is one.
 */export const listReportDefinitions = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-10", uri: "/reportDefinition", method: "GET", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.ListReportDefinitions" }, ListReportDefinitionsRequest, ListReportDefinitionsResult, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates existing report in AWS Application Cost Profiler.
 */export const updateReportDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-10", uri: "/reportDefinition/{reportId}", method: "PUT", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.UpdateReportDefinition" }, UpdateReportDefinitionRequest, UpdateReportDefinitionResult, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being
 * generated.
 */export const deleteReportDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-10", uri: "/reportDefinition/{reportId}", method: "DELETE", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.DeleteReportDefinition" }, DeleteReportDefinitionRequest, DeleteReportDefinitionResult, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates the report definition for a report in Application Cost Profiler.
 */export const putReportDefinition = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-10", uri: "/reportDefinition", method: "POST", sdkId: "ApplicationCostProfiler", sigV4ServiceName: "application-cost-profiler", name: "AWSApplicationCostProfiler.PutReportDefinition" }, PutReportDefinitionRequest, PutReportDefinitionResult, [AccessDeniedException, InternalServerException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
