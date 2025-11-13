import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
import type {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException
  | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class MedicalImaging extends AWSServiceClient {
  copyImageSet(
    input: CopyImageSetRequest,
  ): Effect.Effect<
    CopyImageSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteImageSet(
    input: DeleteImageSetRequest,
  ): Effect.Effect<
    DeleteImageSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDICOMImportJob(
    input: GetDICOMImportJobRequest,
  ): Effect.Effect<
    GetDICOMImportJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getImageFrame(
    input: GetImageFrameRequest,
  ): Effect.Effect<
    GetImageFrameResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getImageSet(
    input: GetImageSetRequest,
  ): Effect.Effect<
    GetImageSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getImageSetMetadata(
    input: GetImageSetMetadataRequest,
  ): Effect.Effect<
    GetImageSetMetadataResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDICOMImportJobs(
    input: ListDICOMImportJobsRequest,
  ): Effect.Effect<
    ListDICOMImportJobsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listImageSetVersions(
    input: ListImageSetVersionsRequest,
  ): Effect.Effect<
    ListImageSetVersionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchImageSets(
    input: SearchImageSetsRequest,
  ): Effect.Effect<
    SearchImageSetsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startDICOMImportJob(
    input: StartDICOMImportJobRequest,
  ): Effect.Effect<
    StartDICOMImportJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateImageSetMetadata(
    input: UpdateImageSetMetadataRequest,
  ): Effect.Effect<
    UpdateImageSetMetadataResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDatastore(
    input: CreateDatastoreRequest,
  ): Effect.Effect<
    CreateDatastoreResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDatastore(
    input: DeleteDatastoreRequest,
  ): Effect.Effect<
    DeleteDatastoreResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDatastore(
    input: GetDatastoreRequest,
  ): Effect.Effect<
    GetDatastoreResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listDatastores(
    input: ListDatastoresRequest,
  ): Effect.Effect<
    ListDatastoresResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Arn = string;

export type AwsAccountId = string;

export type ClientToken = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export type CopiableAttributes = string;

export interface CopyDestinationImageSet {
  imageSetId: string;
  latestVersionId: string;
}
export interface CopyDestinationImageSetProperties {
  imageSetId: string;
  latestVersionId: string;
  imageSetState?: ImageSetState;
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  imageSetArn?: string;
}
export interface CopyImageSetInformation {
  sourceImageSet: CopySourceImageSetInformation;
  destinationImageSet?: CopyDestinationImageSet;
}
export interface CopyImageSetRequest {
  datastoreId: string;
  sourceImageSetId: string;
  copyImageSetInformation: CopyImageSetInformation;
  force?: boolean;
  promoteToPrimary?: boolean;
}
export interface CopyImageSetResponse {
  datastoreId: string;
  sourceImageSetProperties: CopySourceImageSetProperties;
  destinationImageSetProperties: CopyDestinationImageSetProperties;
}
export interface CopySourceImageSetInformation {
  latestVersionId: string;
  DICOMCopies?: MetadataCopies;
}
export interface CopySourceImageSetProperties {
  imageSetId: string;
  latestVersionId: string;
  imageSetState?: ImageSetState;
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  imageSetArn?: string;
}
export interface CreateDatastoreRequest {
  datastoreName?: string;
  clientToken: string;
  tags?: Record<string, string>;
  kmsKeyArn?: string;
  lambdaAuthorizerArn?: string;
}
export interface CreateDatastoreResponse {
  datastoreId: string;
  datastoreStatus: DatastoreStatus;
}
export type DatastoreId = string;

export type DatastoreName = string;

export interface DatastoreProperties {
  datastoreId: string;
  datastoreName: string;
  datastoreStatus: DatastoreStatus;
  kmsKeyArn?: string;
  lambdaAuthorizerArn?: string;
  datastoreArn?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type DatastoreStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETING"
  | "DELETED";
export type DatastoreSummaries = Array<DatastoreSummary>;
export interface DatastoreSummary {
  datastoreId: string;
  datastoreName: string;
  datastoreStatus: DatastoreStatus;
  datastoreArn?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type MedicalImagingDate = Date | string;

export interface DeleteDatastoreRequest {
  datastoreId: string;
}
export interface DeleteDatastoreResponse {
  datastoreId: string;
  datastoreStatus: DatastoreStatus;
}
export interface DeleteImageSetRequest {
  datastoreId: string;
  imageSetId: string;
}
export interface DeleteImageSetResponse {
  datastoreId: string;
  imageSetId: string;
  imageSetState: ImageSetState;
  imageSetWorkflowStatus: ImageSetWorkflowStatus;
}
export type DICOMAccessionNumber = string;

export type DICOMAttribute = Uint8Array | string;

export interface DICOMImportJobProperties {
  jobId: string;
  jobName: string;
  jobStatus: JobStatus;
  datastoreId: string;
  dataAccessRoleArn: string;
  endedAt?: Date | string;
  submittedAt?: Date | string;
  inputS3Uri: string;
  outputS3Uri: string;
  message?: string;
}
export type DICOMImportJobSummaries = Array<DICOMImportJobSummary>;
export interface DICOMImportJobSummary {
  jobId: string;
  jobName: string;
  jobStatus: JobStatus;
  datastoreId: string;
  dataAccessRoleArn?: string;
  endedAt?: Date | string;
  submittedAt?: Date | string;
  message?: string;
}
export type DICOMNumberOfStudyRelatedInstances = number;

export type DICOMNumberOfStudyRelatedSeries = number;

export type DICOMPatientBirthDate = string;

export type DICOMPatientId = string;

export type DICOMPatientName = string;

export type DICOMPatientSex = string;

export type DICOMSeriesBodyPart = string;

export type DICOMSeriesInstanceUID = string;

export type DICOMSeriesModality = string;

export type DICOMSeriesNumber = number;

export type DICOMStudyDate = string;

export interface DICOMStudyDateAndTime {
  DICOMStudyDate: string;
  DICOMStudyTime?: string;
}
export type DICOMStudyDescription = string;

export type DICOMStudyId = string;

export type DICOMStudyInstanceUID = string;

export type DICOMStudyTime = string;

export interface DICOMTags {
  DICOMPatientId?: string;
  DICOMPatientName?: string;
  DICOMPatientBirthDate?: string;
  DICOMPatientSex?: string;
  DICOMStudyInstanceUID?: string;
  DICOMStudyId?: string;
  DICOMStudyDescription?: string;
  DICOMNumberOfStudyRelatedSeries?: number;
  DICOMNumberOfStudyRelatedInstances?: number;
  DICOMAccessionNumber?: string;
  DICOMSeriesInstanceUID?: string;
  DICOMSeriesModality?: string;
  DICOMSeriesBodyPart?: string;
  DICOMSeriesNumber?: number;
  DICOMStudyDate?: string;
  DICOMStudyTime?: string;
}
export interface DICOMUpdates {
  removableAttributes?: Uint8Array | string;
  updatableAttributes?: Uint8Array | string;
}
export interface GetDatastoreRequest {
  datastoreId: string;
}
export interface GetDatastoreResponse {
  datastoreProperties: DatastoreProperties;
}
export interface GetDICOMImportJobRequest {
  datastoreId: string;
  jobId: string;
}
export interface GetDICOMImportJobResponse {
  jobProperties: DICOMImportJobProperties;
}
export interface GetImageFrameRequest {
  datastoreId: string;
  imageSetId: string;
  imageFrameInformation: ImageFrameInformation;
}
export interface GetImageFrameResponse {
  imageFrameBlob: Uint8Array | string;
  contentType?: string;
}
export interface GetImageSetMetadataRequest {
  datastoreId: string;
  imageSetId: string;
  versionId?: string;
}
export interface GetImageSetMetadataResponse {
  imageSetMetadataBlob: Uint8Array | string;
  contentType?: string;
  contentEncoding?: string;
}
export interface GetImageSetRequest {
  datastoreId: string;
  imageSetId: string;
  versionId?: string;
}
export interface GetImageSetResponse {
  datastoreId: string;
  imageSetId: string;
  versionId: string;
  imageSetState: ImageSetState;
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
  message?: string;
  imageSetArn?: string;
  overrides?: Overrides;
  isPrimary?: boolean;
}
export type ImageFrameId = string;

export interface ImageFrameInformation {
  imageFrameId: string;
}
export type ImageSetExternalVersionId = string;

export type ImageSetId = string;

export type ImageSetMetadataBlob = Uint8Array | string;

export interface ImageSetProperties {
  imageSetId: string;
  versionId: string;
  imageSetState: ImageSetState;
  ImageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
  message?: string;
  overrides?: Overrides;
  isPrimary?: boolean;
}
export type ImageSetPropertiesList = Array<ImageSetProperties>;
export type ImageSetsMetadataSummaries = Array<ImageSetsMetadataSummary>;
export interface ImageSetsMetadataSummary {
  imageSetId: string;
  version?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  DICOMTags?: DICOMTags;
  isPrimary?: boolean;
}
export type ImageSetState = "ACTIVE" | "LOCKED" | "DELETED";
export type ImageSetWorkflowStatus =
  | "CREATED"
  | "COPIED"
  | "COPYING"
  | "COPYING_WITH_READ_ONLY_ACCESS"
  | "COPY_FAILED"
  | "UPDATING"
  | "UPDATED"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETED"
  | "IMPORTING"
  | "IMPORTED"
  | "IMPORT_FAILED";
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type JobId = string;

export type JobName = string;

export type JobStatus = "SUBMITTED" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type KmsKeyArn = string;

export type LambdaArn = string;

export interface ListDatastoresRequest {
  datastoreStatus?: DatastoreStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDatastoresResponse {
  datastoreSummaries?: Array<DatastoreSummary>;
  nextToken?: string;
}
export interface ListDICOMImportJobsRequest {
  datastoreId: string;
  jobStatus?: JobStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListDICOMImportJobsResponse {
  jobSummaries: Array<DICOMImportJobSummary>;
  nextToken?: string;
}
export interface ListImageSetVersionsRequest {
  datastoreId: string;
  imageSetId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListImageSetVersionsResponse {
  imageSetPropertiesList: Array<ImageSetProperties>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export type Message = string;

export interface MetadataCopies {
  copiableAttributes: string;
}
interface _MetadataUpdates {
  DICOMUpdates?: DICOMUpdates;
  revertToVersionId?: string;
}

export type MetadataUpdates =
  | (_MetadataUpdates & { DICOMUpdates: DICOMUpdates })
  | (_MetadataUpdates & { revertToVersionId: string });
export type NextToken = string;

export type Operator = "EQUAL" | "BETWEEN";
export interface Overrides {
  forced?: boolean;
}
export type PayloadBlob = Uint8Array | string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type RoleArn = string;

export type S3Uri = string;

interface _SearchByAttributeValue {
  DICOMPatientId?: string;
  DICOMAccessionNumber?: string;
  DICOMStudyId?: string;
  DICOMStudyInstanceUID?: string;
  DICOMSeriesInstanceUID?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  DICOMStudyDateAndTime?: DICOMStudyDateAndTime;
  isPrimary?: boolean;
}

export type SearchByAttributeValue =
  | (_SearchByAttributeValue & { DICOMPatientId: string })
  | (_SearchByAttributeValue & { DICOMAccessionNumber: string })
  | (_SearchByAttributeValue & { DICOMStudyId: string })
  | (_SearchByAttributeValue & { DICOMStudyInstanceUID: string })
  | (_SearchByAttributeValue & { DICOMSeriesInstanceUID: string })
  | (_SearchByAttributeValue & { createdAt: Date | string })
  | (_SearchByAttributeValue & { updatedAt: Date | string })
  | (_SearchByAttributeValue & { DICOMStudyDateAndTime: DICOMStudyDateAndTime })
  | (_SearchByAttributeValue & { isPrimary: boolean });
export type SearchByAttributeValues = Array<SearchByAttributeValue>;
export interface SearchCriteria {
  filters?: Array<SearchFilter>;
  sort?: Sort;
}
export interface SearchFilter {
  values: Array<SearchByAttributeValue>;
  operator: Operator;
}
export type SearchFilters = Array<SearchFilter>;
export interface SearchImageSetsRequest {
  datastoreId: string;
  searchCriteria?: SearchCriteria;
  maxResults?: number;
  nextToken?: string;
}
export interface SearchImageSetsResponse {
  imageSetsMetadataSummaries: Array<ImageSetsMetadataSummary>;
  sort?: Sort;
  nextToken?: string;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export interface Sort {
  sortOrder: SortOrder;
  sortField: SortField;
}
export type SortField = "updatedAt" | "createdAt" | "DICOMStudyDateAndTime";
export type SortOrder = "ASC" | "DESC";
export interface StartDICOMImportJobRequest {
  jobName?: string;
  dataAccessRoleArn: string;
  clientToken: string;
  datastoreId: string;
  inputS3Uri: string;
  outputS3Uri: string;
  inputOwnerAccountId?: string;
}
export interface StartDICOMImportJobResponse {
  datastoreId: string;
  jobId: string;
  jobStatus: JobStatus;
  submittedAt: Date | string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateImageSetMetadataRequest {
  datastoreId: string;
  imageSetId: string;
  latestVersionId: string;
  force?: boolean;
  updateImageSetMetadataUpdates: MetadataUpdates;
}
export interface UpdateImageSetMetadataResponse {
  datastoreId: string;
  imageSetId: string;
  latestVersionId: string;
  imageSetState: ImageSetState;
  imageSetWorkflowStatus?: ImageSetWorkflowStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  message?: string;
}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export declare namespace CopyImageSet {
  export type Input = CopyImageSetRequest;
  export type Output = CopyImageSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteImageSet {
  export type Input = DeleteImageSetRequest;
  export type Output = DeleteImageSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDICOMImportJob {
  export type Input = GetDICOMImportJobRequest;
  export type Output = GetDICOMImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetImageFrame {
  export type Input = GetImageFrameRequest;
  export type Output = GetImageFrameResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetImageSet {
  export type Input = GetImageSetRequest;
  export type Output = GetImageSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetImageSetMetadata {
  export type Input = GetImageSetMetadataRequest;
  export type Output = GetImageSetMetadataResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDICOMImportJobs {
  export type Input = ListDICOMImportJobsRequest;
  export type Output = ListDICOMImportJobsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListImageSetVersions {
  export type Input = ListImageSetVersionsRequest;
  export type Output = ListImageSetVersionsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchImageSets {
  export type Input = SearchImageSetsRequest;
  export type Output = SearchImageSetsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartDICOMImportJob {
  export type Input = StartDICOMImportJobRequest;
  export type Output = StartDICOMImportJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateImageSetMetadata {
  export type Input = UpdateImageSetMetadataRequest;
  export type Output = UpdateImageSetMetadataResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDatastore {
  export type Input = CreateDatastoreRequest;
  export type Output = CreateDatastoreResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDatastore {
  export type Input = DeleteDatastoreRequest;
  export type Output = DeleteDatastoreResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDatastore {
  export type Input = GetDatastoreRequest;
  export type Output = GetDatastoreResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDatastores {
  export type Input = ListDatastoresRequest;
  export type Output = ListDatastoresResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type MedicalImagingErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
