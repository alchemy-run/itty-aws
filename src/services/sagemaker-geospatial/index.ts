import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class SageMakerGeospatial extends AWSServiceClient {
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
  deleteEarthObservationJob(
    input: DeleteEarthObservationJobInput,
  ): Effect.Effect<
    DeleteEarthObservationJobOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteVectorEnrichmentJob(
    input: DeleteVectorEnrichmentJobInput,
  ): Effect.Effect<
    DeleteVectorEnrichmentJobOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  exportEarthObservationJob(
    input: ExportEarthObservationJobInput,
  ): Effect.Effect<
    ExportEarthObservationJobOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  exportVectorEnrichmentJob(
    input: ExportVectorEnrichmentJobInput,
  ): Effect.Effect<
    ExportVectorEnrichmentJobOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEarthObservationJob(
    input: GetEarthObservationJobInput,
  ): Effect.Effect<
    GetEarthObservationJobOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRasterDataCollection(
    input: GetRasterDataCollectionInput,
  ): Effect.Effect<
    GetRasterDataCollectionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTile(
    input: GetTileInput,
  ): Effect.Effect<
    GetTileOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getVectorEnrichmentJob(
    input: GetVectorEnrichmentJobInput,
  ): Effect.Effect<
    GetVectorEnrichmentJobOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEarthObservationJobs(
    input: ListEarthObservationJobInput,
  ): Effect.Effect<
    ListEarthObservationJobOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRasterDataCollections(
    input: ListRasterDataCollectionsInput,
  ): Effect.Effect<
    ListRasterDataCollectionsOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listVectorEnrichmentJobs(
    input: ListVectorEnrichmentJobInput,
  ): Effect.Effect<
    ListVectorEnrichmentJobOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  searchRasterDataCollection(
    input: SearchRasterDataCollectionInput,
  ): Effect.Effect<
    SearchRasterDataCollectionOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startEarthObservationJob(
    input: StartEarthObservationJobInput,
  ): Effect.Effect<
    StartEarthObservationJobOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startVectorEnrichmentJob(
    input: StartVectorEnrichmentJobInput,
  ): Effect.Effect<
    StartVectorEnrichmentJobOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopEarthObservationJob(
    input: StopEarthObservationJobInput,
  ): Effect.Effect<
    StopEarthObservationJobOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  stopVectorEnrichmentJob(
    input: StopVectorEnrichmentJobInput,
  ): Effect.Effect<
    StopVectorEnrichmentJobOutput,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class SagemakerGeospatial extends SageMakerGeospatial {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AlgorithmNameCloudRemoval = string;

export type AlgorithmNameGeoMosaic = string;

export type AlgorithmNameResampling = string;

interface _AreaOfInterest {
  AreaOfInterestGeometry?: AreaOfInterestGeometry;
}

export type AreaOfInterest = _AreaOfInterest & {
  AreaOfInterestGeometry: AreaOfInterestGeometry;
};
interface _AreaOfInterestGeometry {
  PolygonGeometry?: PolygonGeometryInput;
  MultiPolygonGeometry?: MultiPolygonGeometryInput;
}

export type AreaOfInterestGeometry =
  | (_AreaOfInterestGeometry & { PolygonGeometry: PolygonGeometryInput })
  | (_AreaOfInterestGeometry & {
      MultiPolygonGeometry: MultiPolygonGeometryInput;
    });
export type Arn = string;

export type AssetsMap = Record<string, AssetValue>;
export interface AssetValue {
  Href?: string;
}
export interface BandMathConfigInput {
  PredefinedIndices?: Array<string>;
  CustomIndices?: CustomIndicesInput;
}
export type BinaryFile = Uint8Array | string;

export interface CloudMaskingConfigInput {}
export interface CloudRemovalConfigInput {
  AlgorithmName?: string;
  InterpolationValue?: string;
  TargetBands?: Array<string>;
}
export type ComparisonOperator = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
}> {}
export interface CustomIndicesInput {
  Operations?: Array<Operation>;
}
export type DataCollectionArn = string;

export type DataCollectionsList = Array<RasterDataCollectionMetadata>;
export type DataCollectionType = string;

export interface DeleteEarthObservationJobInput {
  Arn: string;
}
export interface DeleteEarthObservationJobOutput {}
export interface DeleteVectorEnrichmentJobInput {
  Arn: string;
}
export interface DeleteVectorEnrichmentJobOutput {}
export type EarthObservationJobArn = string;

export interface EarthObservationJobErrorDetails {
  Type?: string;
  Message?: string;
}
export type EarthObservationJobErrorType = string;

export type EarthObservationJobExportStatus = string;

export type EarthObservationJobList =
  Array<ListEarthObservationJobOutputConfig>;
export type EarthObservationJobOutputBands = Array<OutputBand>;
export type EarthObservationJobStatus = string;

export interface EoCloudCoverInput {
  LowerBound: number;
  UpperBound: number;
}
export type ExecutionRoleArn = string;

export interface ExportEarthObservationJobInput {
  Arn: string;
  ClientToken?: string;
  ExecutionRoleArn: string;
  OutputConfig: OutputConfigInput;
  ExportSourceImages?: boolean;
}
export interface ExportEarthObservationJobOutput {
  Arn: string;
  CreationTime: Date | string;
  ExportStatus: string;
  ExecutionRoleArn: string;
  OutputConfig: OutputConfigInput;
  ExportSourceImages?: boolean;
}
export interface ExportErrorDetails {
  ExportResults?: ExportErrorDetailsOutput;
  ExportSourceImages?: ExportErrorDetailsOutput;
}
export interface ExportErrorDetailsOutput {
  Type?: string;
  Message?: string;
}
export type ExportErrorType = string;

export interface ExportS3DataInput {
  S3Uri: string;
  KmsKeyId?: string;
}
export interface ExportVectorEnrichmentJobInput {
  Arn: string;
  ClientToken?: string;
  ExecutionRoleArn: string;
  OutputConfig: ExportVectorEnrichmentJobOutputConfig;
}
export interface ExportVectorEnrichmentJobOutput {
  Arn: string;
  CreationTime: Date | string;
  ExecutionRoleArn: string;
  ExportStatus: string;
  OutputConfig: ExportVectorEnrichmentJobOutputConfig;
}
export interface ExportVectorEnrichmentJobOutputConfig {
  S3Data: VectorEnrichmentJobS3Data;
}
export interface Filter {
  Name: string;
  Type: string;
  Minimum?: number;
  Maximum?: number;
}
export type FilterList = Array<Filter>;
export interface Geometry {
  Type: string;
  Coordinates: Array<Array<Array<number>>>;
}
export interface GeoMosaicConfigInput {
  AlgorithmName?: string;
  TargetBands?: Array<string>;
}
export interface GetEarthObservationJobInput {
  Arn: string;
}
export interface GetEarthObservationJobOutput {
  Arn: string;
  Name: string;
  CreationTime: Date | string;
  DurationInSeconds: number;
  Status: string;
  KmsKeyId?: string;
  InputConfig: InputConfigOutput;
  JobConfig: JobConfigInput;
  OutputBands?: Array<OutputBand>;
  ExecutionRoleArn?: string;
  ErrorDetails?: EarthObservationJobErrorDetails;
  ExportStatus?: string;
  ExportErrorDetails?: ExportErrorDetails;
  Tags?: Record<string, string>;
}
export interface GetRasterDataCollectionInput {
  Arn: string;
}
export interface GetRasterDataCollectionOutput {
  Name: string;
  Arn: string;
  Type: string;
  Description: string;
  DescriptionPageUrl: string;
  SupportedFilters: Array<Filter>;
  ImageSourceBands: Array<string>;
  Tags?: Record<string, string>;
}
export interface GetTileInput {
  x: number;
  y: number;
  z: number;
  ImageAssets: Array<string>;
  Target: string;
  Arn: string;
  ImageMask?: boolean;
  OutputFormat?: string;
  TimeRangeFilter?: string;
  PropertyFilters?: string;
  OutputDataType?: string;
  ExecutionRoleArn?: string;
}
export interface GetTileOutput {
  BinaryFile?: Uint8Array | string;
}
export interface GetVectorEnrichmentJobInput {
  Arn: string;
}
export interface GetVectorEnrichmentJobOutput {
  Arn: string;
  Type: string;
  Name: string;
  CreationTime: Date | string;
  DurationInSeconds: number;
  Status: string;
  KmsKeyId?: string;
  InputConfig: VectorEnrichmentJobInputConfig;
  JobConfig: VectorEnrichmentJobConfig;
  ExecutionRoleArn: string;
  ErrorDetails?: VectorEnrichmentJobErrorDetails;
  ExportStatus?: string;
  ExportErrorDetails?: VectorEnrichmentJobExportErrorDetails;
  Tags?: Record<string, string>;
}
export type GroupBy = string;

export type ImageSourceBandList = Array<string>;
export interface InputConfigInput {
  PreviousEarthObservationJobArn?: string;
  RasterDataCollectionQuery?: RasterDataCollectionQueryInput;
}
export interface InputConfigOutput {
  PreviousEarthObservationJobArn?: string;
  RasterDataCollectionQuery?: RasterDataCollectionQueryOutput;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
}> {}
export interface ItemSource {
  Id: string;
  Geometry: Geometry;
  Assets?: Record<string, AssetValue>;
  DateTime: Date | string;
  Properties?: Properties;
}
export type ItemSourceList = Array<ItemSource>;
interface _JobConfigInput {
  BandMathConfig?: BandMathConfigInput;
  ResamplingConfig?: ResamplingConfigInput;
  TemporalStatisticsConfig?: TemporalStatisticsConfigInput;
  CloudRemovalConfig?: CloudRemovalConfigInput;
  ZonalStatisticsConfig?: ZonalStatisticsConfigInput;
  GeoMosaicConfig?: GeoMosaicConfigInput;
  StackConfig?: StackConfigInput;
  CloudMaskingConfig?: CloudMaskingConfigInput;
  LandCoverSegmentationConfig?: LandCoverSegmentationConfigInput;
}

export type JobConfigInput =
  | (_JobConfigInput & { BandMathConfig: BandMathConfigInput })
  | (_JobConfigInput & { ResamplingConfig: ResamplingConfigInput })
  | (_JobConfigInput & {
      TemporalStatisticsConfig: TemporalStatisticsConfigInput;
    })
  | (_JobConfigInput & { CloudRemovalConfig: CloudRemovalConfigInput })
  | (_JobConfigInput & { ZonalStatisticsConfig: ZonalStatisticsConfigInput })
  | (_JobConfigInput & { GeoMosaicConfig: GeoMosaicConfigInput })
  | (_JobConfigInput & { StackConfig: StackConfigInput })
  | (_JobConfigInput & { CloudMaskingConfig: CloudMaskingConfigInput })
  | (_JobConfigInput & {
      LandCoverSegmentationConfig: LandCoverSegmentationConfigInput;
    });
export type KmsKey = string;

export interface LandCoverSegmentationConfigInput {}
export interface LandsatCloudCoverLandInput {
  LowerBound: number;
  UpperBound: number;
}
export type LinearRing = Array<Array<number>>;
export type LinearRings = Array<Array<Array<number>>>;
export type LinearRingsList = Array<Array<Array<Array<number>>>>;
export interface ListEarthObservationJobInput {
  StatusEquals?: string;
  SortOrder?: string;
  SortBy?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEarthObservationJobOutput {
  EarthObservationJobSummaries: Array<ListEarthObservationJobOutputConfig>;
  NextToken?: string;
}
export interface ListEarthObservationJobOutputConfig {
  Arn: string;
  Name: string;
  CreationTime: Date | string;
  DurationInSeconds: number;
  Status: string;
  OperationType: string;
  Tags?: Record<string, string>;
}
export interface ListRasterDataCollectionsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRasterDataCollectionsOutput {
  RasterDataCollectionSummaries: Array<RasterDataCollectionMetadata>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListVectorEnrichmentJobInput {
  StatusEquals?: string;
  SortOrder?: string;
  SortBy?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListVectorEnrichmentJobOutput {
  VectorEnrichmentJobSummaries: Array<ListVectorEnrichmentJobOutputConfig>;
  NextToken?: string;
}
export interface ListVectorEnrichmentJobOutputConfig {
  Arn: string;
  Name: string;
  Type: string;
  CreationTime: Date | string;
  DurationInSeconds: number;
  Status: string;
  Tags?: Record<string, string>;
}
export type LogicalOperator = string;

export interface MapMatchingConfig {
  IdAttributeName: string;
  YAttributeName: string;
  XAttributeName: string;
  TimestampAttributeName: string;
}
export interface MultiPolygonGeometryInput {
  Coordinates: Array<Array<Array<Array<number>>>>;
}
export type NextToken = string;

export interface Operation {
  Name: string;
  Equation: string;
  OutputType?: string;
}
export type OperationsListInput = Array<Operation>;
export interface OutputBand {
  BandName: string;
  OutputDataType: string;
}
export interface OutputConfigInput {
  S3Data: ExportS3DataInput;
}
export interface OutputResolutionResamplingInput {
  UserDefined: UserDefined;
}
export interface OutputResolutionStackInput {
  Predefined?: string;
  UserDefined?: UserDefined;
}
export type OutputType = string;

export interface PlatformInput {
  Value: string;
  ComparisonOperator?: string;
}
export interface PolygonGeometryInput {
  Coordinates: Array<Array<Array<number>>>;
}
export type Position = Array<number>;
export type PredefinedResolution = string;

export interface Properties {
  EoCloudCover?: number;
  ViewOffNadir?: number;
  ViewSunAzimuth?: number;
  ViewSunElevation?: number;
  Platform?: string;
  LandsatCloudCoverLand?: number;
}
interface _Property {
  EoCloudCover?: EoCloudCoverInput;
  ViewOffNadir?: ViewOffNadirInput;
  ViewSunAzimuth?: ViewSunAzimuthInput;
  ViewSunElevation?: ViewSunElevationInput;
  Platform?: PlatformInput;
  LandsatCloudCoverLand?: LandsatCloudCoverLandInput;
}

export type Property =
  | (_Property & { EoCloudCover: EoCloudCoverInput })
  | (_Property & { ViewOffNadir: ViewOffNadirInput })
  | (_Property & { ViewSunAzimuth: ViewSunAzimuthInput })
  | (_Property & { ViewSunElevation: ViewSunElevationInput })
  | (_Property & { Platform: PlatformInput })
  | (_Property & { LandsatCloudCoverLand: LandsatCloudCoverLandInput });
export interface PropertyFilter {
  Property: Property;
}
export interface PropertyFilters {
  Properties?: Array<PropertyFilter>;
  LogicalOperator?: string;
}
export type PropertyFiltersList = Array<PropertyFilter>;
export interface RasterDataCollectionMetadata {
  Name: string;
  Arn: string;
  Type: string;
  Description: string;
  DescriptionPageUrl?: string;
  SupportedFilters: Array<Filter>;
  Tags?: Record<string, string>;
}
export interface RasterDataCollectionQueryInput {
  RasterDataCollectionArn: string;
  TimeRangeFilter: TimeRangeFilterInput;
  AreaOfInterest?: AreaOfInterest;
  PropertyFilters?: PropertyFilters;
}
export interface RasterDataCollectionQueryOutput {
  RasterDataCollectionArn: string;
  RasterDataCollectionName: string;
  TimeRangeFilter: TimeRangeFilterOutput;
  AreaOfInterest?: AreaOfInterest;
  PropertyFilters?: PropertyFilters;
}
export interface RasterDataCollectionQueryWithBandFilterInput {
  TimeRangeFilter: TimeRangeFilterInput;
  AreaOfInterest?: AreaOfInterest;
  PropertyFilters?: PropertyFilters;
  BandFilter?: Array<string>;
}
export interface ResamplingConfigInput {
  OutputResolution: OutputResolutionResamplingInput;
  AlgorithmName?: string;
  TargetBands?: Array<string>;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
}> {}
export interface ReverseGeocodingConfig {
  YAttributeName: string;
  XAttributeName: string;
}
export type S3Uri = string;

export interface SearchRasterDataCollectionInput {
  Arn: string;
  RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInput;
  NextToken?: string;
}
export interface SearchRasterDataCollectionOutput {
  ApproximateResultCount: number;
  NextToken?: string;
  Items?: Array<ItemSource>;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
}> {}
export type SortOrder = string;

export interface StackConfigInput {
  OutputResolution?: OutputResolutionStackInput;
  TargetBands?: Array<string>;
}
export interface StartEarthObservationJobInput {
  Name: string;
  ClientToken?: string;
  KmsKeyId?: string;
  InputConfig: InputConfigInput;
  JobConfig: JobConfigInput;
  ExecutionRoleArn: string;
  Tags?: Record<string, string>;
}
export interface StartEarthObservationJobOutput {
  Name: string;
  Arn: string;
  CreationTime: Date | string;
  DurationInSeconds: number;
  Status: string;
  KmsKeyId?: string;
  InputConfig?: InputConfigOutput;
  JobConfig: JobConfigInput;
  ExecutionRoleArn: string;
  Tags?: Record<string, string>;
}
export interface StartVectorEnrichmentJobInput {
  Name: string;
  ClientToken?: string;
  KmsKeyId?: string;
  InputConfig: VectorEnrichmentJobInputConfig;
  JobConfig: VectorEnrichmentJobConfig;
  ExecutionRoleArn: string;
  Tags?: Record<string, string>;
}
export interface StartVectorEnrichmentJobOutput {
  Name: string;
  Arn: string;
  Type: string;
  CreationTime: Date | string;
  DurationInSeconds: number;
  Status: string;
  KmsKeyId?: string;
  InputConfig: VectorEnrichmentJobInputConfig;
  JobConfig: VectorEnrichmentJobConfig;
  ExecutionRoleArn: string;
  Tags?: Record<string, string>;
}
export interface StopEarthObservationJobInput {
  Arn: string;
}
export interface StopEarthObservationJobOutput {}
export interface StopVectorEnrichmentJobInput {
  Arn: string;
}
export interface StopVectorEnrichmentJobOutput {}
export type StringListInput = Array<string>;
export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TargetOptions = string;

export type TemporalStatistics = string;

export interface TemporalStatisticsConfigInput {
  GroupBy?: string;
  Statistics: Array<string>;
  TargetBands?: Array<string>;
}
export type TemporalStatisticsListInput = Array<string>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
}> {}
export interface TimeRangeFilterInput {
  StartTime: Date | string;
  EndTime: Date | string;
}
export interface TimeRangeFilterOutput {
  StartTime: Date | string;
  EndTime: Date | string;
}
export type Unit = string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UserDefined {
  Value: number;
  Unit: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
}> {}
export type VectorEnrichmentJobArn = string;

interface _VectorEnrichmentJobConfig {
  ReverseGeocodingConfig?: ReverseGeocodingConfig;
  MapMatchingConfig?: MapMatchingConfig;
}

export type VectorEnrichmentJobConfig =
  | (_VectorEnrichmentJobConfig & {
      ReverseGeocodingConfig: ReverseGeocodingConfig;
    })
  | (_VectorEnrichmentJobConfig & { MapMatchingConfig: MapMatchingConfig });
interface _VectorEnrichmentJobDataSourceConfigInput {
  S3Data?: VectorEnrichmentJobS3Data;
}

export type VectorEnrichmentJobDataSourceConfigInput =
  _VectorEnrichmentJobDataSourceConfigInput & {
    S3Data: VectorEnrichmentJobS3Data;
  };
export type VectorEnrichmentJobDocumentType = string;

export interface VectorEnrichmentJobErrorDetails {
  ErrorType?: string;
  ErrorMessage?: string;
}
export type VectorEnrichmentJobErrorType = string;

export interface VectorEnrichmentJobExportErrorDetails {
  Type?: string;
  Message?: string;
}
export type VectorEnrichmentJobExportErrorType = string;

export type VectorEnrichmentJobExportStatus = string;

export interface VectorEnrichmentJobInputConfig {
  DocumentType: string;
  DataSourceConfig: VectorEnrichmentJobDataSourceConfigInput;
}
export type VectorEnrichmentJobList =
  Array<ListVectorEnrichmentJobOutputConfig>;
export interface VectorEnrichmentJobS3Data {
  S3Uri: string;
  KmsKeyId?: string;
}
export type VectorEnrichmentJobStatus = string;

export type VectorEnrichmentJobType = string;

export interface ViewOffNadirInput {
  LowerBound: number;
  UpperBound: number;
}
export interface ViewSunAzimuthInput {
  LowerBound: number;
  UpperBound: number;
}
export interface ViewSunElevationInput {
  LowerBound: number;
  UpperBound: number;
}
export type ZonalStatistics = string;

export interface ZonalStatisticsConfigInput {
  ZoneS3Path: string;
  Statistics: Array<string>;
  TargetBands?: Array<string>;
  ZoneS3PathKmsKeyId?: string;
}
export type ZonalStatisticsListInput = Array<string>;
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

export declare namespace DeleteEarthObservationJob {
  export type Input = DeleteEarthObservationJobInput;
  export type Output = DeleteEarthObservationJobOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteVectorEnrichmentJob {
  export type Input = DeleteVectorEnrichmentJobInput;
  export type Output = DeleteVectorEnrichmentJobOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ExportEarthObservationJob {
  export type Input = ExportEarthObservationJobInput;
  export type Output = ExportEarthObservationJobOutput;
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

export declare namespace ExportVectorEnrichmentJob {
  export type Input = ExportVectorEnrichmentJobInput;
  export type Output = ExportVectorEnrichmentJobOutput;
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

export declare namespace GetEarthObservationJob {
  export type Input = GetEarthObservationJobInput;
  export type Output = GetEarthObservationJobOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRasterDataCollection {
  export type Input = GetRasterDataCollectionInput;
  export type Output = GetRasterDataCollectionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTile {
  export type Input = GetTileInput;
  export type Output = GetTileOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetVectorEnrichmentJob {
  export type Input = GetVectorEnrichmentJobInput;
  export type Output = GetVectorEnrichmentJobOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEarthObservationJobs {
  export type Input = ListEarthObservationJobInput;
  export type Output = ListEarthObservationJobOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRasterDataCollections {
  export type Input = ListRasterDataCollectionsInput;
  export type Output = ListRasterDataCollectionsOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListVectorEnrichmentJobs {
  export type Input = ListVectorEnrichmentJobInput;
  export type Output = ListVectorEnrichmentJobOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchRasterDataCollection {
  export type Input = SearchRasterDataCollectionInput;
  export type Output = SearchRasterDataCollectionOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartEarthObservationJob {
  export type Input = StartEarthObservationJobInput;
  export type Output = StartEarthObservationJobOutput;
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

export declare namespace StartVectorEnrichmentJob {
  export type Input = StartVectorEnrichmentJobInput;
  export type Output = StartVectorEnrichmentJobOutput;
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

export declare namespace StopEarthObservationJob {
  export type Input = StopEarthObservationJobInput;
  export type Output = StopEarthObservationJobOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopVectorEnrichmentJob {
  export type Input = StopVectorEnrichmentJobInput;
  export type Output = StopVectorEnrichmentJobOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
