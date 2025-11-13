import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class BedrockDataAutomation extends AWSServiceClient {
  createBlueprintVersion(
    input: CreateBlueprintVersionRequest,
  ): Effect.Effect<
    CreateBlueprintVersionResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createBlueprint(
    input: CreateBlueprintRequest,
  ): Effect.Effect<
    CreateBlueprintResponse,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDataAutomationProject(
    input: CreateDataAutomationProjectRequest,
  ): Effect.Effect<
    CreateDataAutomationProjectResponse,
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteBlueprint(
    input: DeleteBlueprintRequest,
  ): Effect.Effect<
    DeleteBlueprintResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteDataAutomationProject(
    input: DeleteDataAutomationProjectRequest,
  ): Effect.Effect<
    DeleteDataAutomationProjectResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getBlueprint(
    input: GetBlueprintRequest,
  ): Effect.Effect<
    GetBlueprintResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDataAutomationProject(
    input: GetDataAutomationProjectRequest,
  ): Effect.Effect<
    GetDataAutomationProjectResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listBlueprints(
    input: ListBlueprintsRequest,
  ): Effect.Effect<
    ListBlueprintsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDataAutomationProjects(
    input: ListDataAutomationProjectsRequest,
  ): Effect.Effect<
    ListDataAutomationProjectsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateBlueprint(
    input: UpdateBlueprintRequest,
  ): Effect.Effect<
    UpdateBlueprintResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateDataAutomationProject(
    input: UpdateDataAutomationProjectRequest,
  ): Effect.Effect<
    UpdateDataAutomationProjectResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AudioExtractionCategory {
  state: State;
  types?: Array<AudioExtractionCategoryType>;
  typeConfiguration?: AudioExtractionCategoryTypeConfiguration;
}
export type AudioExtractionCategoryType = "AUDIO_CONTENT_MODERATION" | "TRANSCRIPT" | "TOPIC_CONTENT_MODERATION";
export interface AudioExtractionCategoryTypeConfiguration {
  transcript?: TranscriptConfiguration;
}
export type AudioExtractionCategoryTypes = Array<AudioExtractionCategoryType>;
export interface AudioOverrideConfiguration {
  modalityProcessing?: ModalityProcessingConfiguration;
}
export interface AudioStandardExtraction {
  category: AudioExtractionCategory;
}
export interface AudioStandardGenerativeField {
  state: State;
  types?: Array<AudioStandardGenerativeFieldType>;
}
export type AudioStandardGenerativeFieldType = "AUDIO_SUMMARY" | "IAB" | "TOPIC_SUMMARY";
export type AudioStandardGenerativeFieldTypes = Array<AudioStandardGenerativeFieldType>;
export interface AudioStandardOutputConfiguration {
  extraction?: AudioStandardExtraction;
  generativeField?: AudioStandardGenerativeField;
}
export interface Blueprint {
  blueprintArn: string;
  schema: string;
  type: Type;
  creationTime: Date | string;
  lastModifiedTime: Date | string;
  blueprintName: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
  kmsKeyId?: string;
  kmsEncryptionContext?: Record<string, string>;
}
export type BlueprintArn = string;

export interface BlueprintFilter {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
}
export interface BlueprintItem {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
}
export type BlueprintItems = Array<BlueprintItem>;
export type BlueprintName = string;

export type Blueprints = Array<BlueprintSummary>;
export type BlueprintSchema = string;

export type BlueprintStage = "DEVELOPMENT" | "LIVE";
export type BlueprintStageFilter = "DEVELOPMENT" | "LIVE" | "ALL";
export interface BlueprintSummary {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
  blueprintName?: string;
  creationTime: Date | string;
  lastModifiedTime?: Date | string;
}
export type BlueprintVersion = string;

export interface ChannelLabelingConfiguration {
  state: State;
}
export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateBlueprintRequest {
  blueprintName: string;
  type: Type;
  blueprintStage?: BlueprintStage;
  schema: string;
  clientToken?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Array<Tag>;
}
export interface CreateBlueprintResponse {
  blueprint: Blueprint;
}
export interface CreateBlueprintVersionRequest {
  blueprintArn: string;
  clientToken?: string;
}
export interface CreateBlueprintVersionResponse {
  blueprint: Blueprint;
}
export interface CreateDataAutomationProjectRequest {
  projectName: string;
  projectDescription?: string;
  projectStage?: DataAutomationProjectStage;
  standardOutputConfiguration: StandardOutputConfiguration;
  customOutputConfiguration?: CustomOutputConfiguration;
  overrideConfiguration?: OverrideConfiguration;
  clientToken?: string;
  encryptionConfiguration?: EncryptionConfiguration;
  tags?: Array<Tag>;
}
export interface CreateDataAutomationProjectResponse {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  status?: DataAutomationProjectStatus;
}
export interface CustomOutputConfiguration {
  blueprints?: Array<BlueprintItem>;
}
export interface DataAutomationProject {
  projectArn: string;
  creationTime: Date | string;
  lastModifiedTime: Date | string;
  projectName: string;
  projectStage?: DataAutomationProjectStage;
  projectDescription?: string;
  standardOutputConfiguration?: StandardOutputConfiguration;
  customOutputConfiguration?: CustomOutputConfiguration;
  overrideConfiguration?: OverrideConfiguration;
  status: DataAutomationProjectStatus;
  kmsKeyId?: string;
  kmsEncryptionContext?: Record<string, string>;
}
export type DataAutomationProjectArn = string;

export type DataAutomationProjectDescription = string;

export interface DataAutomationProjectFilter {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
}
export type DataAutomationProjectName = string;

export type DataAutomationProjectStage = "DEVELOPMENT" | "LIVE";
export type DataAutomationProjectStageFilter = "DEVELOPMENT" | "LIVE" | "ALL";
export type DataAutomationProjectStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED";
export type DataAutomationProjectSummaries = Array<DataAutomationProjectSummary>;
export interface DataAutomationProjectSummary {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  projectName?: string;
  creationTime: Date | string;
}
export type DateTimestamp = Date | string;

export interface DeleteBlueprintRequest {
  blueprintArn: string;
  blueprintVersion?: string;
}
export interface DeleteBlueprintResponse {
}
export interface DeleteDataAutomationProjectRequest {
  projectArn: string;
}
export interface DeleteDataAutomationProjectResponse {
  projectArn: string;
  status?: DataAutomationProjectStatus;
}
export type DesiredModality = "IMAGE" | "DOCUMENT" | "AUDIO" | "VIDEO";
export interface DocumentBoundingBox {
  state: State;
}
export interface DocumentExtractionGranularity {
  types?: Array<DocumentExtractionGranularityType>;
}
export type DocumentExtractionGranularityType = "DOCUMENT" | "PAGE" | "ELEMENT" | "WORD" | "LINE";
export type DocumentExtractionGranularityTypes = Array<DocumentExtractionGranularityType>;
export interface DocumentOutputAdditionalFileFormat {
  state: State;
}
export interface DocumentOutputFormat {
  textFormat: DocumentOutputTextFormat;
  additionalFileFormat: DocumentOutputAdditionalFileFormat;
}
export interface DocumentOutputTextFormat {
  types?: Array<DocumentOutputTextFormatType>;
}
export type DocumentOutputTextFormatType = "PLAIN_TEXT" | "MARKDOWN" | "HTML" | "CSV";
export type DocumentOutputTextFormatTypes = Array<DocumentOutputTextFormatType>;
export interface DocumentOverrideConfiguration {
  splitter?: SplitterConfiguration;
  modalityProcessing?: ModalityProcessingConfiguration;
}
export interface DocumentStandardExtraction {
  granularity: DocumentExtractionGranularity;
  boundingBox: DocumentBoundingBox;
}
export interface DocumentStandardGenerativeField {
  state: State;
}
export interface DocumentStandardOutputConfiguration {
  extraction?: DocumentStandardExtraction;
  generativeField?: DocumentStandardGenerativeField;
  outputFormat?: DocumentOutputFormat;
}
export interface EncryptionConfiguration {
  kmsKeyId: string;
  kmsEncryptionContext?: Record<string, string>;
}
export type EncryptionContextKey = string;

export type EncryptionContextValue = string;

export interface GetBlueprintRequest {
  blueprintArn: string;
  blueprintVersion?: string;
  blueprintStage?: BlueprintStage;
}
export interface GetBlueprintResponse {
  blueprint: Blueprint;
}
export interface GetDataAutomationProjectRequest {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
}
export interface GetDataAutomationProjectResponse {
  project: DataAutomationProject;
}
export interface ImageBoundingBox {
  state: State;
}
export interface ImageExtractionCategory {
  state: State;
  types?: Array<ImageExtractionCategoryType>;
}
export type ImageExtractionCategoryType = "CONTENT_MODERATION" | "TEXT_DETECTION" | "LOGOS";
export type ImageExtractionCategoryTypes = Array<ImageExtractionCategoryType>;
export interface ImageOverrideConfiguration {
  modalityProcessing?: ModalityProcessingConfiguration;
}
export interface ImageStandardExtraction {
  category: ImageExtractionCategory;
  boundingBox: ImageBoundingBox;
}
export interface ImageStandardGenerativeField {
  state: State;
  types?: Array<ImageStandardGenerativeFieldType>;
}
export type ImageStandardGenerativeFieldType = "IMAGE_SUMMARY" | "IAB";
export type ImageStandardGenerativeFieldTypes = Array<ImageStandardGenerativeFieldType>;
export interface ImageStandardOutputConfiguration {
  extraction?: ImageStandardExtraction;
  generativeField?: ImageStandardGenerativeField;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type KmsEncryptionContext = Record<string, string>;
export type KmsKeyId = string;

export interface ListBlueprintsRequest {
  blueprintArn?: string;
  resourceOwner?: ResourceOwner;
  blueprintStageFilter?: BlueprintStageFilter;
  maxResults?: number;
  nextToken?: string;
  projectFilter?: DataAutomationProjectFilter;
}
export interface ListBlueprintsResponse {
  blueprints: Array<BlueprintSummary>;
  nextToken?: string;
}
export interface ListDataAutomationProjectsRequest {
  maxResults?: number;
  nextToken?: string;
  projectStageFilter?: DataAutomationProjectStageFilter;
  blueprintFilter?: BlueprintFilter;
  resourceOwner?: ResourceOwner;
}
export interface ListDataAutomationProjectsResponse {
  projects: Array<DataAutomationProjectSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export type MaxResults = number;

export interface ModalityProcessingConfiguration {
  state?: State;
}
export interface ModalityRoutingConfiguration {
  jpeg?: DesiredModality;
  png?: DesiredModality;
  mp4?: DesiredModality;
  mov?: DesiredModality;
}
export type NextToken = string;

export type NonBlankString = string;

export interface OverrideConfiguration {
  document?: DocumentOverrideConfiguration;
  image?: ImageOverrideConfiguration;
  video?: VideoOverrideConfiguration;
  audio?: AudioOverrideConfiguration;
  modalityRouting?: ModalityRoutingConfiguration;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourceOwner = "SERVICE" | "ACCOUNT";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export interface SpeakerLabelingConfiguration {
  state: State;
}
export interface SplitterConfiguration {
  state?: State;
}
export interface StandardOutputConfiguration {
  document?: DocumentStandardOutputConfiguration;
  image?: ImageStandardOutputConfiguration;
  video?: VideoStandardOutputConfiguration;
  audio?: AudioStandardOutputConfiguration;
}
export type State = "ENABLED" | "DISABLED";
export interface Tag {
  key: string;
  value: string;
}
export type TaggableResourceArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceARN: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export interface TranscriptConfiguration {
  speakerLabeling?: SpeakerLabelingConfiguration;
  channelLabeling?: ChannelLabelingConfiguration;
}
export type Type = "DOCUMENT" | "IMAGE" | "AUDIO" | "VIDEO";
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateBlueprintRequest {
  blueprintArn: string;
  schema: string;
  blueprintStage?: BlueprintStage;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateBlueprintResponse {
  blueprint: Blueprint;
}
export interface UpdateDataAutomationProjectRequest {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  projectDescription?: string;
  standardOutputConfiguration: StandardOutputConfiguration;
  customOutputConfiguration?: CustomOutputConfiguration;
  overrideConfiguration?: OverrideConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface UpdateDataAutomationProjectResponse {
  projectArn: string;
  projectStage?: DataAutomationProjectStage;
  status?: DataAutomationProjectStatus;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export interface VideoBoundingBox {
  state: State;
}
export interface VideoExtractionCategory {
  state: State;
  types?: Array<VideoExtractionCategoryType>;
}
export type VideoExtractionCategoryType = "CONTENT_MODERATION" | "TEXT_DETECTION" | "TRANSCRIPT" | "LOGOS";
export type VideoExtractionCategoryTypes = Array<VideoExtractionCategoryType>;
export interface VideoOverrideConfiguration {
  modalityProcessing?: ModalityProcessingConfiguration;
}
export interface VideoStandardExtraction {
  category: VideoExtractionCategory;
  boundingBox: VideoBoundingBox;
}
export interface VideoStandardGenerativeField {
  state: State;
  types?: Array<VideoStandardGenerativeFieldType>;
}
export type VideoStandardGenerativeFieldType = "VIDEO_SUMMARY" | "IAB" | "CHAPTER_SUMMARY";
export type VideoStandardGenerativeFieldTypes = Array<VideoStandardGenerativeFieldType>;
export interface VideoStandardOutputConfiguration {
  extraction?: VideoStandardExtraction;
  generativeField?: VideoStandardGenerativeField;
}
export declare namespace CreateBlueprintVersion {
  export type Input = CreateBlueprintVersionRequest;
  export type Output = CreateBlueprintVersionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
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

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
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

export declare namespace CreateBlueprint {
  export type Input = CreateBlueprintRequest;
  export type Output = CreateBlueprintResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDataAutomationProject {
  export type Input = CreateDataAutomationProjectRequest;
  export type Output = CreateDataAutomationProjectResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteBlueprint {
  export type Input = DeleteBlueprintRequest;
  export type Output = DeleteBlueprintResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDataAutomationProject {
  export type Input = DeleteDataAutomationProjectRequest;
  export type Output = DeleteDataAutomationProjectResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetBlueprint {
  export type Input = GetBlueprintRequest;
  export type Output = GetBlueprintResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDataAutomationProject {
  export type Input = GetDataAutomationProjectRequest;
  export type Output = GetDataAutomationProjectResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListBlueprints {
  export type Input = ListBlueprintsRequest;
  export type Output = ListBlueprintsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDataAutomationProjects {
  export type Input = ListDataAutomationProjectsRequest;
  export type Output = ListDataAutomationProjectsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateBlueprint {
  export type Input = UpdateBlueprintRequest;
  export type Output = UpdateBlueprintResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateDataAutomationProject {
  export type Input = UpdateDataAutomationProjectRequest;
  export type Output = UpdateDataAutomationProjectResponse;
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

export type BedrockDataAutomationErrors = AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError;

