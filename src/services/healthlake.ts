import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class DeleteFHIRDatastoreRequest extends S.Class<DeleteFHIRDatastoreRequest>("DeleteFHIRDatastoreRequest")({DatastoreId: S.String}) {}
export class DescribeFHIRDatastoreRequest extends S.Class<DescribeFHIRDatastoreRequest>("DescribeFHIRDatastoreRequest")({DatastoreId: S.String}) {}
export class DescribeFHIRExportJobRequest extends S.Class<DescribeFHIRExportJobRequest>("DescribeFHIRExportJobRequest")({DatastoreId: S.String, JobId: S.String}) {}
export class DescribeFHIRImportJobRequest extends S.Class<DescribeFHIRImportJobRequest>("DescribeFHIRImportJobRequest")({DatastoreId: S.String, JobId: S.String}) {}
export class ListFHIRExportJobsRequest extends S.Class<ListFHIRExportJobsRequest>("ListFHIRExportJobsRequest")({DatastoreId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), JobName: S.optional(S.String), JobStatus: S.optional(S.String), SubmittedBefore: S.optional(S.Date), SubmittedAfter: S.optional(S.Date)}) {}
export class ListFHIRImportJobsRequest extends S.Class<ListFHIRImportJobsRequest>("ListFHIRImportJobsRequest")({DatastoreId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), JobName: S.optional(S.String), JobStatus: S.optional(S.String), SubmittedBefore: S.optional(S.Date), SubmittedAfter: S.optional(S.Date)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class PreloadDataConfig extends S.Class<PreloadDataConfig>("PreloadDataConfig")({PreloadDataType: S.String}) {}
export class IdentityProviderConfiguration extends S.Class<IdentityProviderConfiguration>("IdentityProviderConfiguration")({AuthorizationStrategy: S.String, FineGrainedAuthorizationEnabled: S.optional(S.Boolean), Metadata: S.optional(S.String), IdpLambdaArn: S.optional(S.String)}) {}
export class DatastoreFilter extends S.Class<DatastoreFilter>("DatastoreFilter")({DatastoreName: S.optional(S.String), DatastoreStatus: S.optional(S.String), CreatedBefore: S.optional(S.Date), CreatedAfter: S.optional(S.Date)}) {}
export class S3Configuration extends S.Class<S3Configuration>("S3Configuration")({S3Uri: S.String, KmsKeyId: S.String}) {}
export const OutputDataConfig = S.Union(S3Configuration);
export class ExportJobProperties extends S.Class<ExportJobProperties>("ExportJobProperties")({JobId: S.String, JobName: S.optional(S.String), JobStatus: S.String, SubmitTime: S.Date, EndTime: S.optional(S.Date), DatastoreId: S.String, OutputDataConfig: OutputDataConfig, DataAccessRoleArn: S.optional(S.String), Message: S.optional(S.String)}) {}
export const ExportJobPropertiesList = S.Array(ExportJobProperties);
export const InputDataConfig = S.Union(S.String);
export class JobProgressReport extends S.Class<JobProgressReport>("JobProgressReport")({TotalNumberOfScannedFiles: S.optional(S.Number), TotalSizeOfScannedFilesInMB: S.optional(S.Number), TotalNumberOfImportedFiles: S.optional(S.Number), TotalNumberOfResourcesScanned: S.optional(S.Number), TotalNumberOfResourcesImported: S.optional(S.Number), TotalNumberOfResourcesWithCustomerError: S.optional(S.Number), TotalNumberOfFilesReadWithCustomerError: S.optional(S.Number), Throughput: S.optional(S.Number)}) {}
export class ImportJobProperties extends S.Class<ImportJobProperties>("ImportJobProperties")({JobId: S.String, JobName: S.optional(S.String), JobStatus: S.String, SubmitTime: S.Date, EndTime: S.optional(S.Date), DatastoreId: S.String, InputDataConfig: InputDataConfig, JobOutputDataConfig: S.optional(OutputDataConfig), JobProgressReport: S.optional(JobProgressReport), DataAccessRoleArn: S.optional(S.String), Message: S.optional(S.String), ValidationLevel: S.optional(S.String)}) {}
export const ImportJobPropertiesList = S.Array(ImportJobProperties);
export class DeleteFHIRDatastoreResponse extends S.Class<DeleteFHIRDatastoreResponse>("DeleteFHIRDatastoreResponse")({DatastoreId: S.String, DatastoreArn: S.String, DatastoreStatus: S.String, DatastoreEndpoint: S.String}) {}
export class ListFHIRDatastoresRequest extends S.Class<ListFHIRDatastoresRequest>("ListFHIRDatastoresRequest")({Filter: S.optional(DatastoreFilter), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListFHIRExportJobsResponse extends S.Class<ListFHIRExportJobsResponse>("ListFHIRExportJobsResponse")({ExportJobPropertiesList: ExportJobPropertiesList, NextToken: S.optional(S.String)}) {}
export class ListFHIRImportJobsResponse extends S.Class<ListFHIRImportJobsResponse>("ListFHIRImportJobsResponse")({ImportJobPropertiesList: ImportJobPropertiesList, NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export class StartFHIRImportJobRequest extends S.Class<StartFHIRImportJobRequest>("StartFHIRImportJobRequest")({JobName: S.optional(S.String), InputDataConfig: InputDataConfig, JobOutputDataConfig: OutputDataConfig, DatastoreId: S.String, DataAccessRoleArn: S.String, ClientToken: S.optional(S.String), ValidationLevel: S.optional(S.String)}) {}
export class KmsEncryptionConfig extends S.Class<KmsEncryptionConfig>("KmsEncryptionConfig")({CmkType: S.String, KmsKeyId: S.optional(S.String)}) {}
export class SseConfiguration extends S.Class<SseConfiguration>("SseConfiguration")({KmsEncryptionConfig: KmsEncryptionConfig}) {}
export class ErrorCause extends S.Class<ErrorCause>("ErrorCause")({ErrorMessage: S.optional(S.String), ErrorCategory: S.optional(S.String)}) {}
export class DatastoreProperties extends S.Class<DatastoreProperties>("DatastoreProperties")({DatastoreId: S.String, DatastoreArn: S.String, DatastoreName: S.optional(S.String), DatastoreStatus: S.String, CreatedAt: S.optional(S.Date), DatastoreTypeVersion: S.String, DatastoreEndpoint: S.String, SseConfiguration: S.optional(SseConfiguration), PreloadDataConfig: S.optional(PreloadDataConfig), IdentityProviderConfiguration: S.optional(IdentityProviderConfiguration), ErrorCause: S.optional(ErrorCause)}) {}
export const DatastorePropertiesList = S.Array(DatastoreProperties);
export class CreateFHIRDatastoreRequest extends S.Class<CreateFHIRDatastoreRequest>("CreateFHIRDatastoreRequest")({DatastoreName: S.optional(S.String), DatastoreTypeVersion: S.String, SseConfiguration: S.optional(SseConfiguration), PreloadDataConfig: S.optional(PreloadDataConfig), ClientToken: S.optional(S.String), Tags: S.optional(TagList), IdentityProviderConfiguration: S.optional(IdentityProviderConfiguration)}) {}
export class DescribeFHIRExportJobResponse extends S.Class<DescribeFHIRExportJobResponse>("DescribeFHIRExportJobResponse")({ExportJobProperties: ExportJobProperties}) {}
export class ListFHIRDatastoresResponse extends S.Class<ListFHIRDatastoresResponse>("ListFHIRDatastoresResponse")({DatastorePropertiesList: DatastorePropertiesList, NextToken: S.optional(S.String)}) {}
export class StartFHIRExportJobRequest extends S.Class<StartFHIRExportJobRequest>("StartFHIRExportJobRequest")({JobName: S.optional(S.String), OutputDataConfig: OutputDataConfig, DatastoreId: S.String, DataAccessRoleArn: S.String, ClientToken: S.optional(S.String)}) {}
export class StartFHIRImportJobResponse extends S.Class<StartFHIRImportJobResponse>("StartFHIRImportJobResponse")({JobId: S.String, JobStatus: S.String, DatastoreId: S.optional(S.String)}) {}
export class CreateFHIRDatastoreResponse extends S.Class<CreateFHIRDatastoreResponse>("CreateFHIRDatastoreResponse")({DatastoreId: S.String, DatastoreArn: S.String, DatastoreStatus: S.String, DatastoreEndpoint: S.String}) {}
export class DescribeFHIRDatastoreResponse extends S.Class<DescribeFHIRDatastoreResponse>("DescribeFHIRDatastoreResponse")({DatastoreProperties: DatastoreProperties}) {}
export class DescribeFHIRImportJobResponse extends S.Class<DescribeFHIRImportJobResponse>("DescribeFHIRImportJobResponse")({ImportJobProperties: ImportJobProperties}) {}
export class StartFHIRExportJobResponse extends S.Class<StartFHIRExportJobResponse>("StartFHIRExportJobResponse")({JobId: S.String, JobStatus: S.String, DatastoreId: S.optional(S.String)}) {}

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Returns a list of all existing tags associated with a data store.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add a user-specifed key and value tag to a data store.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Remove a user-specifed key and value tag from a data store.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get FHIR export job properties.
 */export const describeFHIRExportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.DescribeFHIRExportJob" }, DescribeFHIRExportJobRequest, DescribeFHIRExportJobResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all FHIR-enabled data stores in a user’s account, regardless of data store
 * status.
 */export const listFHIRDatastores = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.ListFHIRDatastores" }, ListFHIRDatastoresRequest, ListFHIRDatastoresResponse, [InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all FHIR export jobs associated with an account and their statuses.
 */export const listFHIRExportJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.ListFHIRExportJobs" }, ListFHIRExportJobsRequest, ListFHIRExportJobsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all FHIR import jobs associated with an account and their statuses.
 */export const listFHIRImportJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.ListFHIRImportJobs" }, ListFHIRImportJobsRequest, ListFHIRImportJobsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Start importing bulk FHIR data into an ACTIVE data store. The import job imports FHIR
 * data found in the `InputDataConfig` object and stores processing results in the
 * `JobOutputDataConfig` object.
 */export const startFHIRImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.StartFHIRImportJob" }, StartFHIRImportJobRequest, StartFHIRImportJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a FHIR-enabled data store.
 */export const createFHIRDatastore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.CreateFHIRDatastore" }, CreateFHIRDatastoreRequest, CreateFHIRDatastoreResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a FHIR-enabled data store.
 */export const deleteFHIRDatastore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.DeleteFHIRDatastore" }, DeleteFHIRDatastoreRequest, DeleteFHIRDatastoreResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get properties for a FHIR-enabled data store.
 */export const describeFHIRDatastore = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.DescribeFHIRDatastore" }, DescribeFHIRDatastoreRequest, DescribeFHIRDatastoreResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the import job properties to learn more about the job or job progress.
 */export const describeFHIRImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.DescribeFHIRImportJob" }, DescribeFHIRImportJobRequest, DescribeFHIRImportJobResponse, [InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Start a FHIR export job.
 */export const startFHIRExportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.StartFHIRExportJob" }, StartFHIRExportJobRequest, StartFHIRExportJobResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
