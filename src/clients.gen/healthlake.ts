import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const DeleteFHIRDatastoreRequest = Schema.Struct({DatastoreId: Schema.String});
export const DescribeFHIRDatastoreRequest = Schema.Struct({DatastoreId: Schema.String});
export const DescribeFHIRExportJobRequest = Schema.Struct({DatastoreId: Schema.String, JobId: Schema.String});
export const DescribeFHIRImportJobRequest = Schema.Struct({DatastoreId: Schema.String, JobId: Schema.String});
export const ListFHIRExportJobsRequest = Schema.Struct({DatastoreId: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), JobName: Schema.optional(Schema.String), JobStatus: Schema.optional(Schema.String), SubmittedBefore: Schema.optional(Schema.Date), SubmittedAfter: Schema.optional(Schema.Date)});
export const ListFHIRImportJobsRequest = Schema.Struct({DatastoreId: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), JobName: Schema.optional(Schema.String), JobStatus: Schema.optional(Schema.String), SubmittedBefore: Schema.optional(Schema.Date), SubmittedAfter: Schema.optional(Schema.Date)});
export const ListTagsForResourceRequest = Schema.Struct({ResourceARN: Schema.String});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const TagResourceRequest = Schema.Struct({ResourceARN: Schema.String, Tags: TagList});
export const TagResourceResponse = Schema.Struct({});
export const UntagResourceRequest = Schema.Struct({ResourceARN: Schema.String, TagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const PreloadDataConfig = Schema.Struct({PreloadDataType: Schema.String});
export const IdentityProviderConfiguration = Schema.Struct({AuthorizationStrategy: Schema.String, FineGrainedAuthorizationEnabled: Schema.optional(Schema.Boolean), Metadata: Schema.optional(Schema.String), IdpLambdaArn: Schema.optional(Schema.String)});
export const DatastoreFilter = Schema.Struct({DatastoreName: Schema.optional(Schema.String), DatastoreStatus: Schema.optional(Schema.String), CreatedBefore: Schema.optional(Schema.Date), CreatedAfter: Schema.optional(Schema.Date)});
export const S3Configuration = Schema.Struct({S3Uri: Schema.String, KmsKeyId: Schema.String});
export const OutputDataConfig = Schema.Union(S3Configuration);
export const ExportJobProperties = Schema.Struct({JobId: Schema.String, JobName: Schema.optional(Schema.String), JobStatus: Schema.String, SubmitTime: Schema.Date, EndTime: Schema.optional(Schema.Date), DatastoreId: Schema.String, OutputDataConfig: OutputDataConfig, DataAccessRoleArn: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)});
export const ExportJobPropertiesList = Schema.Array(ExportJobProperties);
export const InputDataConfig = Schema.Union(Schema.String);
export const JobProgressReport = Schema.Struct({TotalNumberOfScannedFiles: Schema.optional(Schema.Number), TotalSizeOfScannedFilesInMB: Schema.optional(Schema.Number), TotalNumberOfImportedFiles: Schema.optional(Schema.Number), TotalNumberOfResourcesScanned: Schema.optional(Schema.Number), TotalNumberOfResourcesImported: Schema.optional(Schema.Number), TotalNumberOfResourcesWithCustomerError: Schema.optional(Schema.Number), TotalNumberOfFilesReadWithCustomerError: Schema.optional(Schema.Number), Throughput: Schema.optional(Schema.Number)});
export const ImportJobProperties = Schema.Struct({JobId: Schema.String, JobName: Schema.optional(Schema.String), JobStatus: Schema.String, SubmitTime: Schema.Date, EndTime: Schema.optional(Schema.Date), DatastoreId: Schema.String, InputDataConfig: InputDataConfig, JobOutputDataConfig: Schema.optional(OutputDataConfig), JobProgressReport: Schema.optional(JobProgressReport), DataAccessRoleArn: Schema.optional(Schema.String), Message: Schema.optional(Schema.String), ValidationLevel: Schema.optional(Schema.String)});
export const ImportJobPropertiesList = Schema.Array(ImportJobProperties);
export const DeleteFHIRDatastoreResponse = Schema.Struct({DatastoreId: Schema.String, DatastoreArn: Schema.String, DatastoreStatus: Schema.String, DatastoreEndpoint: Schema.String});
export const ListFHIRDatastoresRequest = Schema.Struct({Filter: Schema.optional(DatastoreFilter), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const ListFHIRExportJobsResponse = Schema.Struct({ExportJobPropertiesList: ExportJobPropertiesList, NextToken: Schema.optional(Schema.String)});
export const ListFHIRImportJobsResponse = Schema.Struct({ImportJobPropertiesList: ImportJobPropertiesList, NextToken: Schema.optional(Schema.String)});
export const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagList)});
export const StartFHIRImportJobRequest = Schema.Struct({JobName: Schema.optional(Schema.String), InputDataConfig: InputDataConfig, JobOutputDataConfig: OutputDataConfig, DatastoreId: Schema.String, DataAccessRoleArn: Schema.String, ClientToken: Schema.optional(Schema.String), ValidationLevel: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const KmsEncryptionConfig = Schema.Struct({CmkType: Schema.String, KmsKeyId: Schema.optional(Schema.String)});
export const SseConfiguration = Schema.Struct({KmsEncryptionConfig: KmsEncryptionConfig});
export const ErrorCause = Schema.Struct({ErrorMessage: Schema.optional(Schema.String), ErrorCategory: Schema.optional(Schema.String)});
export const DatastoreProperties = Schema.Struct({DatastoreId: Schema.String, DatastoreArn: Schema.String, DatastoreName: Schema.optional(Schema.String), DatastoreStatus: Schema.String, CreatedAt: Schema.optional(Schema.Date), DatastoreTypeVersion: Schema.String, DatastoreEndpoint: Schema.String, SseConfiguration: Schema.optional(SseConfiguration), PreloadDataConfig: Schema.optional(PreloadDataConfig), IdentityProviderConfiguration: Schema.optional(IdentityProviderConfiguration), ErrorCause: Schema.optional(ErrorCause)});
export const DatastorePropertiesList = Schema.Array(DatastoreProperties);
export const CreateFHIRDatastoreRequest = Schema.Struct({DatastoreName: Schema.optional(Schema.String), DatastoreTypeVersion: Schema.String, SseConfiguration: Schema.optional(SseConfiguration), PreloadDataConfig: Schema.optional(PreloadDataConfig), ClientToken: Schema.optional(Schema.String), Tags: Schema.optional(TagList), IdentityProviderConfiguration: Schema.optional(IdentityProviderConfiguration)});
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const DescribeFHIRExportJobResponse = Schema.Struct({ExportJobProperties: ExportJobProperties});
export const ListFHIRDatastoresResponse = Schema.Struct({DatastorePropertiesList: DatastorePropertiesList, NextToken: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const StartFHIRExportJobRequest = Schema.Struct({JobName: Schema.optional(Schema.String), OutputDataConfig: OutputDataConfig, DatastoreId: Schema.String, DataAccessRoleArn: Schema.String, ClientToken: Schema.optional(Schema.String)});
export const StartFHIRImportJobResponse = Schema.Struct({JobId: Schema.String, JobStatus: Schema.String, DatastoreId: Schema.optional(Schema.String)});
export const CreateFHIRDatastoreResponse = Schema.Struct({DatastoreId: Schema.String, DatastoreArn: Schema.String, DatastoreStatus: Schema.String, DatastoreEndpoint: Schema.String});
export const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const DescribeFHIRDatastoreResponse = Schema.Struct({DatastoreProperties: DatastoreProperties});
export const DescribeFHIRImportJobResponse = Schema.Struct({ImportJobProperties: ImportJobProperties});
export const StartFHIRExportJobResponse = Schema.Struct({JobId: Schema.String, JobStatus: Schema.String, DatastoreId: Schema.optional(Schema.String)});

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeFHIRExportJob = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.DescribeFHIRExportJob" }, DescribeFHIRExportJobRequest, DescribeFHIRExportJobResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listFHIRDatastores = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.ListFHIRDatastores" }, ListFHIRDatastoresRequest, ListFHIRDatastoresResponse, [InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listFHIRExportJobs = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.ListFHIRExportJobs" }, ListFHIRExportJobsRequest, ListFHIRExportJobsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listFHIRImportJobs = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.ListFHIRImportJobs" }, ListFHIRImportJobsRequest, ListFHIRImportJobsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startFHIRImportJob = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.StartFHIRImportJob" }, StartFHIRImportJobRequest, StartFHIRImportJobResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createFHIRDatastore = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.CreateFHIRDatastore" }, CreateFHIRDatastoreRequest, CreateFHIRDatastoreResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteFHIRDatastore = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.DeleteFHIRDatastore" }, DeleteFHIRDatastoreRequest, DeleteFHIRDatastoreResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeFHIRDatastore = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.DescribeFHIRDatastore" }, DescribeFHIRDatastoreRequest, DescribeFHIRDatastoreResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeFHIRImportJob = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.DescribeFHIRImportJob" }, DescribeFHIRImportJobRequest, DescribeFHIRImportJobResponse, [InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startFHIRExportJob = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-01", uri: "/", method: "POST", sdkId: "HealthLake", sigV4ServiceName: "healthlake", name: "HealthLake.StartFHIRExportJob" }, StartFHIRExportJobRequest, StartFHIRExportJobResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
