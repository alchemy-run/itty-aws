import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class DeleteImageSetRequest extends S.Class<DeleteImageSetRequest>("DeleteImageSetRequest")({datastoreId: S.String, imageSetId: S.String}) {}
export class GetDICOMImportJobRequest extends S.Class<GetDICOMImportJobRequest>("GetDICOMImportJobRequest")({datastoreId: S.String, jobId: S.String}) {}
export class GetImageSetRequest extends S.Class<GetImageSetRequest>("GetImageSetRequest")({datastoreId: S.String, imageSetId: S.String, versionId: S.optional(S.String)}) {}
export class GetImageSetMetadataRequest extends S.Class<GetImageSetMetadataRequest>("GetImageSetMetadataRequest")({datastoreId: S.String, imageSetId: S.String, versionId: S.optional(S.String)}) {}
export class ListDICOMImportJobsRequest extends S.Class<ListDICOMImportJobsRequest>("ListDICOMImportJobsRequest")({datastoreId: S.String, jobStatus: S.optional(S.String), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListImageSetVersionsRequest extends S.Class<ListImageSetVersionsRequest>("ListImageSetVersionsRequest")({datastoreId: S.String, imageSetId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class StartDICOMImportJobRequest extends S.Class<StartDICOMImportJobRequest>("StartDICOMImportJobRequest")({jobName: S.optional(S.String), dataAccessRoleArn: S.String, clientToken: S.String, datastoreId: S.String, inputS3Uri: S.String, outputS3Uri: S.String, inputOwnerAccountId: S.optional(S.String)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class ImageFrameInformation extends S.Class<ImageFrameInformation>("ImageFrameInformation")({imageFrameId: S.String}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class DeleteImageSetResponse extends S.Class<DeleteImageSetResponse>("DeleteImageSetResponse")({datastoreId: S.String, imageSetId: S.String, imageSetState: S.String, imageSetWorkflowStatus: S.String}) {}
export class GetImageFrameRequest extends S.Class<GetImageFrameRequest>("GetImageFrameRequest")({datastoreId: S.String, imageSetId: S.String, imageFrameInformation: H.Body("undefined", ImageFrameInformation)}) {}
export class GetImageSetMetadataResponse extends S.Class<GetImageSetMetadataResponse>("GetImageSetMetadataResponse")({imageSetMetadataBlob: H.Body("undefined", H.StreamBody()), contentType: S.optional(H.Header("Content-Type")), contentEncoding: S.optional(H.Header("Content-Encoding"))}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: TagMap}) {}
export class StartDICOMImportJobResponse extends S.Class<StartDICOMImportJobResponse>("StartDICOMImportJobResponse")({datastoreId: S.String, jobId: S.String, jobStatus: S.String, submittedAt: S.Date}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class CopyDestinationImageSet extends S.Class<CopyDestinationImageSet>("CopyDestinationImageSet")({imageSetId: S.String, latestVersionId: S.String}) {}
export class Sort extends S.Class<Sort>("Sort")({sortOrder: S.String, sortField: S.String}) {}
export class DICOMUpdates extends S.Class<DICOMUpdates>("DICOMUpdates")({removableAttributes: S.optional(H.StreamBody()), updatableAttributes: S.optional(H.StreamBody())}) {}
export class DICOMImportJobProperties extends S.Class<DICOMImportJobProperties>("DICOMImportJobProperties")({jobId: S.String, jobName: S.String, jobStatus: S.String, datastoreId: S.String, dataAccessRoleArn: S.String, endedAt: S.optional(S.Date), submittedAt: S.optional(S.Date), inputS3Uri: S.String, outputS3Uri: S.String, message: S.optional(S.String)}) {}
export class Overrides extends S.Class<Overrides>("Overrides")({forced: S.optional(S.Boolean)}) {}
export class DICOMImportJobSummary extends S.Class<DICOMImportJobSummary>("DICOMImportJobSummary")({jobId: S.String, jobName: S.String, jobStatus: S.String, datastoreId: S.String, dataAccessRoleArn: S.optional(S.String), endedAt: S.optional(S.Date), submittedAt: S.optional(S.Date), message: S.optional(S.String)}) {}
export const DICOMImportJobSummaries = S.Array(DICOMImportJobSummary);
export class ImageSetProperties extends S.Class<ImageSetProperties>("ImageSetProperties")({imageSetId: S.String, versionId: S.String, imageSetState: S.String, ImageSetWorkflowStatus: S.optional(S.String), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date), deletedAt: S.optional(S.Date), message: S.optional(S.String), overrides: S.optional(Overrides), isPrimary: S.optional(S.Boolean)}) {}
export const ImageSetPropertiesList = S.Array(ImageSetProperties);
export const MetadataUpdates = S.Union(DICOMUpdates, S.String);
export class MetadataCopies extends S.Class<MetadataCopies>("MetadataCopies")({copiableAttributes: S.String}) {}
export class GetDICOMImportJobResponse extends S.Class<GetDICOMImportJobResponse>("GetDICOMImportJobResponse")({jobProperties: DICOMImportJobProperties}) {}
export class GetImageFrameResponse extends S.Class<GetImageFrameResponse>("GetImageFrameResponse")({imageFrameBlob: H.Body("undefined", H.StreamBody()), contentType: S.optional(H.Header("Content-Type"))}) {}
export class GetImageSetResponse extends S.Class<GetImageSetResponse>("GetImageSetResponse")({datastoreId: S.String, imageSetId: S.String, versionId: S.String, imageSetState: S.String, imageSetWorkflowStatus: S.optional(S.String), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date), deletedAt: S.optional(S.Date), message: S.optional(S.String), imageSetArn: S.optional(S.String), overrides: S.optional(Overrides), isPrimary: S.optional(S.Boolean), lastAccessedAt: S.optional(S.Date), storageTier: S.optional(S.String)}) {}
export class ListDICOMImportJobsResponse extends S.Class<ListDICOMImportJobsResponse>("ListDICOMImportJobsResponse")({jobSummaries: DICOMImportJobSummaries, nextToken: S.optional(S.String)}) {}
export class ListImageSetVersionsResponse extends S.Class<ListImageSetVersionsResponse>("ListImageSetVersionsResponse")({imageSetPropertiesList: ImageSetPropertiesList, nextToken: S.optional(S.String)}) {}
export class UpdateImageSetMetadataRequest extends S.Class<UpdateImageSetMetadataRequest>("UpdateImageSetMetadataRequest")({datastoreId: S.String, imageSetId: S.String, latestVersionId: S.String, force: S.optional(S.Boolean), updateImageSetMetadataUpdates: H.Body("undefined", MetadataUpdates)}) {}
export class CopySourceImageSetInformation extends S.Class<CopySourceImageSetInformation>("CopySourceImageSetInformation")({latestVersionId: S.String, DICOMCopies: S.optional(MetadataCopies)}) {}
export class DICOMStudyDateAndTime extends S.Class<DICOMStudyDateAndTime>("DICOMStudyDateAndTime")({DICOMStudyDate: S.String, DICOMStudyTime: S.optional(S.String)}) {}
export class CopyImageSetInformation extends S.Class<CopyImageSetInformation>("CopyImageSetInformation")({sourceImageSet: CopySourceImageSetInformation, destinationImageSet: S.optional(CopyDestinationImageSet)}) {}
export const SearchByAttributeValue = S.Union(S.String, S.String, S.String, S.String, S.String, S.Date, S.Date, DICOMStudyDateAndTime, S.Boolean);
export const SearchByAttributeValues = S.Array(SearchByAttributeValue);
export class CopyImageSetRequest extends S.Class<CopyImageSetRequest>("CopyImageSetRequest")({datastoreId: S.String, sourceImageSetId: S.String, copyImageSetInformation: H.Body("undefined", CopyImageSetInformation), force: S.optional(S.Boolean), promoteToPrimary: S.optional(S.Boolean)}) {}
export class UpdateImageSetMetadataResponse extends S.Class<UpdateImageSetMetadataResponse>("UpdateImageSetMetadataResponse")({datastoreId: S.String, imageSetId: S.String, latestVersionId: S.String, imageSetState: S.String, imageSetWorkflowStatus: S.optional(S.String), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date), message: S.optional(S.String)}) {}
export class SearchFilter extends S.Class<SearchFilter>("SearchFilter")({values: SearchByAttributeValues, operator: S.String}) {}
export const SearchFilters = S.Array(SearchFilter);
export class SearchCriteria extends S.Class<SearchCriteria>("SearchCriteria")({filters: S.optional(SearchFilters), sort: S.optional(Sort)}) {}
export class SearchImageSetsRequest extends S.Class<SearchImageSetsRequest>("SearchImageSetsRequest")({datastoreId: S.String, searchCriteria: S.optional(H.Body("undefined", SearchCriteria)), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class CopySourceImageSetProperties extends S.Class<CopySourceImageSetProperties>("CopySourceImageSetProperties")({imageSetId: S.String, latestVersionId: S.String, imageSetState: S.optional(S.String), imageSetWorkflowStatus: S.optional(S.String), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date), imageSetArn: S.optional(S.String)}) {}
export class CopyDestinationImageSetProperties extends S.Class<CopyDestinationImageSetProperties>("CopyDestinationImageSetProperties")({imageSetId: S.String, latestVersionId: S.String, imageSetState: S.optional(S.String), imageSetWorkflowStatus: S.optional(S.String), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date), imageSetArn: S.optional(S.String)}) {}
export class CopyImageSetResponse extends S.Class<CopyImageSetResponse>("CopyImageSetResponse")({datastoreId: S.String, sourceImageSetProperties: CopySourceImageSetProperties, destinationImageSetProperties: CopyDestinationImageSetProperties}) {}
export class DICOMTags extends S.Class<DICOMTags>("DICOMTags")({DICOMPatientId: S.optional(S.String), DICOMPatientName: S.optional(S.String), DICOMPatientBirthDate: S.optional(S.String), DICOMPatientSex: S.optional(S.String), DICOMStudyInstanceUID: S.optional(S.String), DICOMStudyId: S.optional(S.String), DICOMStudyDescription: S.optional(S.String), DICOMNumberOfStudyRelatedSeries: S.optional(S.Number), DICOMNumberOfStudyRelatedInstances: S.optional(S.Number), DICOMAccessionNumber: S.optional(S.String), DICOMSeriesInstanceUID: S.optional(S.String), DICOMSeriesModality: S.optional(S.String), DICOMSeriesBodyPart: S.optional(S.String), DICOMSeriesNumber: S.optional(S.Number), DICOMStudyDate: S.optional(S.String), DICOMStudyTime: S.optional(S.String)}) {}
export class ImageSetsMetadataSummary extends S.Class<ImageSetsMetadataSummary>("ImageSetsMetadataSummary")({imageSetId: S.String, version: S.optional(S.Number), createdAt: S.optional(S.Date), updatedAt: S.optional(S.Date), lastAccessedAt: S.optional(S.Date), storageTier: S.optional(S.String), DICOMTags: S.optional(DICOMTags), isPrimary: S.optional(S.Boolean)}) {}
export const ImageSetsMetadataSummaries = S.Array(ImageSetsMetadataSummary);
export class SearchImageSetsResponse extends S.Class<SearchImageSetsResponse>("SearchImageSetsResponse")({imageSetsMetadataSummaries: ImageSetsMetadataSummaries, sort: S.optional(Sort), nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.String}) {};

//# Operations
/**
 * Delete an image set.
 */export const deleteImageSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/deleteImageSet", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.DeleteImageSet" }, DeleteImageSetRequest, DeleteImageSetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the import job properties to learn more about the job or job progress.
 * 
 * The `jobStatus` refers to the execution of the import job. Therefore, an import job can return a `jobStatus` as `COMPLETED` even if validation issues are discovered during the import process. If a `jobStatus` returns as `COMPLETED`, we still recommend you review the output manifests written to S3, as they provide details on the success or failure of individual P10 object imports.
 */export const getDICOMImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/getDICOMImportJob/datastore/{datastoreId}/job/{jobId}", method: "GET", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.GetDICOMImportJob" }, GetDICOMImportJobRequest, GetDICOMImportJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get an image frame (pixel data) for an image set.
 */export const getImageFrame = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/getImageFrame", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.GetImageFrame" }, GetImageFrameRequest, GetImageFrameResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get image set properties.
 */export const getImageSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSet", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.GetImageSet" }, GetImageSetRequest, GetImageSetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get metadata attributes for an image set.
 */export const getImageSetMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSetMetadata", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.GetImageSetMetadata" }, GetImageSetMetadataRequest, GetImageSetMetadataResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List import jobs created for a specific data store.
 */export const listDICOMImportJobs = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/listDICOMImportJobs/datastore/{datastoreId}", method: "GET", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.ListDICOMImportJobs" }, ListDICOMImportJobsRequest, ListDICOMImportJobsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List image set versions.
 */export const listImageSetVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/listImageSetVersions", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.ListImageSetVersions" }, ListImageSetVersionsRequest, ListImageSetVersionsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all tags associated with a medical imaging resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Start importing bulk data into an `ACTIVE` data store. The import job imports DICOM P10 files found in the S3 prefix specified by the `inputS3Uri` parameter. The import job stores processing results in the file specified by the `outputS3Uri` parameter.
 */export const startDICOMImportJob = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/startDICOMImportJob/datastore/{datastoreId}", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.StartDICOMImportJob" }, StartDICOMImportJobRequest, StartDICOMImportJobResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a user-specifed key and value tag to a medical imaging resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/tags/{resourceArn}", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes tags from a medical imaging resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update image set metadata attributes.
 */export const updateImageSetMetadata = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/datastore/{datastoreId}/imageSet/{imageSetId}/updateImageSetMetadata", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.UpdateImageSetMetadata" }, UpdateImageSetMetadataRequest, UpdateImageSetMetadataResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Copy an image set.
 */export const copyImageSet = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/datastore/{datastoreId}/imageSet/{sourceImageSetId}/copyImageSet", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.CopyImageSet" }, CopyImageSetRequest, CopyImageSetResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Search image sets based on defined input attributes.
 * 
 * `SearchImageSets` accepts a single search query parameter and returns a paginated response of all image sets that have the matching criteria. All date range queries must be input as `(lowerBound, upperBound)`.
 * 
 * By default, `SearchImageSets` uses the `updatedAt` field for sorting in descending order from newest to oldest.
 */export const searchImageSets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2023-07-19", uri: "/datastore/{datastoreId}/searchImageSets", sdkId: "Medical Imaging", sigV4ServiceName: "medical-imaging", name: "AHIGatewayService.SearchImageSets" }, SearchImageSetsRequest, SearchImageSetsResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
