import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class MediaPackageVod extends AWSServiceClient {
  configureLogs(
    input: ConfigureLogsRequest,
  ): Effect.Effect<
    ConfigureLogsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createAsset(
    input: CreateAssetRequest,
  ): Effect.Effect<
    CreateAssetResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createPackagingConfiguration(
    input: CreatePackagingConfigurationRequest,
  ): Effect.Effect<
    CreatePackagingConfigurationResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createPackagingGroup(
    input: CreatePackagingGroupRequest,
  ): Effect.Effect<
    CreatePackagingGroupResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  deleteAsset(
    input: DeleteAssetRequest,
  ): Effect.Effect<
    DeleteAssetResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  deletePackagingConfiguration(
    input: DeletePackagingConfigurationRequest,
  ): Effect.Effect<
    DeletePackagingConfigurationResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  deletePackagingGroup(
    input: DeletePackagingGroupRequest,
  ): Effect.Effect<
    DeletePackagingGroupResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  describeAsset(
    input: DescribeAssetRequest,
  ): Effect.Effect<
    DescribeAssetResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  describePackagingConfiguration(
    input: DescribePackagingConfigurationRequest,
  ): Effect.Effect<
    DescribePackagingConfigurationResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  describePackagingGroup(
    input: DescribePackagingGroupRequest,
  ): Effect.Effect<
    DescribePackagingGroupResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  listAssets(
    input: ListAssetsRequest,
  ): Effect.Effect<
    ListAssetsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  listPackagingConfigurations(
    input: ListPackagingConfigurationsRequest,
  ): Effect.Effect<
    ListPackagingConfigurationsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  listPackagingGroups(
    input: ListPackagingGroupsRequest,
  ): Effect.Effect<
    ListPackagingGroupsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  updatePackagingGroup(
    input: UpdatePackagingGroupRequest,
  ): Effect.Effect<
    UpdatePackagingGroupResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
}

export declare class MediapackageVod extends MediaPackageVod {}

export type __boolean = boolean;

export type __integer = number;

export type __listOf__PeriodTriggersElement = Array<__PeriodTriggersElement>;
export type __listOf__string = Array<string>;
export type __listOfAssetShallow = Array<AssetShallow>;
export type __listOfDashManifest = Array<DashManifest>;
export type __listOfEgressEndpoint = Array<EgressEndpoint>;
export type __listOfHlsManifest = Array<HlsManifest>;
export type __listOfMssManifest = Array<MssManifest>;
export type __listOfPackagingConfiguration = Array<PackagingConfiguration>;
export type __listOfPackagingGroup = Array<PackagingGroup>;
export type __mapOf__string = Record<string, string>;
export type __PeriodTriggersElement = "ADS";
export type __string = string;

export type AdMarkers = "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH";
export interface AssetShallow {
  Arn?: string;
  CreatedAt?: string;
  Id?: string;
  PackagingGroupId?: string;
  ResourceId?: string;
  SourceArn?: string;
  SourceRoleArn?: string;
  Tags?: Record<string, string>;
}
export interface Authorization {
  CdnIdentifierSecret: string;
  SecretsRoleArn: string;
}
export interface CmafEncryption {
  ConstantInitializationVector?: string;
  SpekeKeyProvider: SpekeKeyProvider;
}
export interface CmafPackage {
  Encryption?: CmafEncryption;
  HlsManifests: Array<HlsManifest>;
  IncludeEncoderConfigurationInSegments?: boolean;
  SegmentDurationSeconds?: number;
}
export interface ConfigureLogsRequest {
  EgressAccessLogs?: EgressAccessLogs;
  Id: string;
}
export interface ConfigureLogsResponse {
  Arn?: string;
  Authorization?: Authorization;
  CreatedAt?: string;
  DomainName?: string;
  EgressAccessLogs?: EgressAccessLogs;
  Id?: string;
  Tags?: Record<string, string>;
}
export interface CreateAssetRequest {
  Id: string;
  PackagingGroupId: string;
  ResourceId?: string;
  SourceArn: string;
  SourceRoleArn: string;
  Tags?: Record<string, string>;
}
export interface CreateAssetResponse {
  Arn?: string;
  CreatedAt?: string;
  EgressEndpoints?: Array<EgressEndpoint>;
  Id?: string;
  PackagingGroupId?: string;
  ResourceId?: string;
  SourceArn?: string;
  SourceRoleArn?: string;
  Tags?: Record<string, string>;
}
export interface CreatePackagingConfigurationRequest {
  CmafPackage?: CmafPackage;
  DashPackage?: DashPackage;
  HlsPackage?: HlsPackage;
  Id: string;
  MssPackage?: MssPackage;
  PackagingGroupId: string;
  Tags?: Record<string, string>;
}
export interface CreatePackagingConfigurationResponse {
  Arn?: string;
  CmafPackage?: CmafPackage;
  CreatedAt?: string;
  DashPackage?: DashPackage;
  HlsPackage?: HlsPackage;
  Id?: string;
  MssPackage?: MssPackage;
  PackagingGroupId?: string;
  Tags?: Record<string, string>;
}
export interface CreatePackagingGroupRequest {
  Authorization?: Authorization;
  EgressAccessLogs?: EgressAccessLogs;
  Id: string;
  Tags?: Record<string, string>;
}
export interface CreatePackagingGroupResponse {
  Arn?: string;
  Authorization?: Authorization;
  CreatedAt?: string;
  DomainName?: string;
  EgressAccessLogs?: EgressAccessLogs;
  Id?: string;
  Tags?: Record<string, string>;
}
export interface DashEncryption {
  SpekeKeyProvider: SpekeKeyProvider;
}
export interface DashManifest {
  ManifestLayout?: ManifestLayout;
  ManifestName?: string;
  MinBufferTimeSeconds?: number;
  Profile?: Profile;
  ScteMarkersSource?: ScteMarkersSource;
  StreamSelection?: StreamSelection;
}
export interface DashPackage {
  DashManifests: Array<DashManifest>;
  Encryption?: DashEncryption;
  IncludeEncoderConfigurationInSegments?: boolean;
  IncludeIframeOnlyStream?: boolean;
  PeriodTriggers?: Array<__PeriodTriggersElement>;
  SegmentDurationSeconds?: number;
  SegmentTemplateFormat?: SegmentTemplateFormat;
}
export interface DeleteAssetRequest {
  Id: string;
}
export interface DeleteAssetResponse {
}
export interface DeletePackagingConfigurationRequest {
  Id: string;
}
export interface DeletePackagingConfigurationResponse {
}
export interface DeletePackagingGroupRequest {
  Id: string;
}
export interface DeletePackagingGroupResponse {
}
export interface DescribeAssetRequest {
  Id: string;
}
export interface DescribeAssetResponse {
  Arn?: string;
  CreatedAt?: string;
  EgressEndpoints?: Array<EgressEndpoint>;
  Id?: string;
  PackagingGroupId?: string;
  ResourceId?: string;
  SourceArn?: string;
  SourceRoleArn?: string;
  Tags?: Record<string, string>;
}
export interface DescribePackagingConfigurationRequest {
  Id: string;
}
export interface DescribePackagingConfigurationResponse {
  Arn?: string;
  CmafPackage?: CmafPackage;
  CreatedAt?: string;
  DashPackage?: DashPackage;
  HlsPackage?: HlsPackage;
  Id?: string;
  MssPackage?: MssPackage;
  PackagingGroupId?: string;
  Tags?: Record<string, string>;
}
export interface DescribePackagingGroupRequest {
  Id: string;
}
export interface DescribePackagingGroupResponse {
  ApproximateAssetCount?: number;
  Arn?: string;
  Authorization?: Authorization;
  CreatedAt?: string;
  DomainName?: string;
  EgressAccessLogs?: EgressAccessLogs;
  Id?: string;
  Tags?: Record<string, string>;
}
export interface EgressAccessLogs {
  LogGroupName?: string;
}
export interface EgressEndpoint {
  PackagingConfigurationId?: string;
  Status?: string;
  Url?: string;
}
export interface EncryptionContractConfiguration {
  PresetSpeke20Audio: PresetSpeke20Audio;
  PresetSpeke20Video: PresetSpeke20Video;
}
export type EncryptionMethod = "AES_128" | "SAMPLE_AES";
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly Message?: string;
}> {}
export interface HlsEncryption {
  ConstantInitializationVector?: string;
  EncryptionMethod?: EncryptionMethod;
  SpekeKeyProvider: SpekeKeyProvider;
}
export interface HlsManifest {
  AdMarkers?: AdMarkers;
  IncludeIframeOnlyStream?: boolean;
  ManifestName?: string;
  ProgramDateTimeIntervalSeconds?: number;
  RepeatExtXKey?: boolean;
  StreamSelection?: StreamSelection;
}
export interface HlsPackage {
  Encryption?: HlsEncryption;
  HlsManifests: Array<HlsManifest>;
  IncludeDvbSubtitles?: boolean;
  SegmentDurationSeconds?: number;
  UseAudioRenditionGroup?: boolean;
}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly Message?: string;
}> {}
export interface ListAssetsRequest {
  MaxResults?: number;
  NextToken?: string;
  PackagingGroupId?: string;
}
export interface ListAssetsResponse {
  Assets?: Array<AssetShallow>;
  NextToken?: string;
}
export interface ListPackagingConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
  PackagingGroupId?: string;
}
export interface ListPackagingConfigurationsResponse {
  NextToken?: string;
  PackagingConfigurations?: Array<PackagingConfiguration>;
}
export interface ListPackagingGroupsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPackagingGroupsResponse {
  NextToken?: string;
  PackagingGroups?: Array<PackagingGroup>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type ManifestLayout = "FULL" | "COMPACT";
export type MaxResults = number;

export interface MssEncryption {
  SpekeKeyProvider: SpekeKeyProvider;
}
export interface MssManifest {
  ManifestName?: string;
  StreamSelection?: StreamSelection;
}
export interface MssPackage {
  Encryption?: MssEncryption;
  MssManifests: Array<MssManifest>;
  SegmentDurationSeconds?: number;
}
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface PackagingConfiguration {
  Arn?: string;
  CmafPackage?: CmafPackage;
  CreatedAt?: string;
  DashPackage?: DashPackage;
  HlsPackage?: HlsPackage;
  Id?: string;
  MssPackage?: MssPackage;
  PackagingGroupId?: string;
  Tags?: Record<string, string>;
}
export interface PackagingGroup {
  ApproximateAssetCount?: number;
  Arn?: string;
  Authorization?: Authorization;
  CreatedAt?: string;
  DomainName?: string;
  EgressAccessLogs?: EgressAccessLogs;
  Id?: string;
  Tags?: Record<string, string>;
}
export type PresetSpeke20Audio = "PRESET-AUDIO-1" | "PRESET-AUDIO-2" | "PRESET-AUDIO-3" | "SHARED" | "UNENCRYPTED";
export type PresetSpeke20Video = "PRESET-VIDEO-1" | "PRESET-VIDEO-2" | "PRESET-VIDEO-3" | "PRESET-VIDEO-4" | "PRESET-VIDEO-5" | "PRESET-VIDEO-6" | "PRESET-VIDEO-7" | "PRESET-VIDEO-8" | "SHARED" | "UNENCRYPTED";
export type Profile = "NONE" | "HBBTV_1_5";
export type ScteMarkersSource = "SEGMENTS" | "MANIFEST";
export type SegmentTemplateFormat = "NUMBER_WITH_TIMELINE" | "TIME_WITH_TIMELINE" | "NUMBER_WITH_DURATION";
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export interface SpekeKeyProvider {
  EncryptionContractConfiguration?: EncryptionContractConfiguration;
  RoleArn: string;
  SystemIds: Array<string>;
  Url: string;
}
export type StreamOrder = "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING";
export interface StreamSelection {
  MaxVideoBitsPerSecond?: number;
  MinVideoBitsPerSecond?: number;
  StreamOrder?: StreamOrder;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export declare class UnprocessableEntityException extends EffectData.TaggedError(
  "UnprocessableEntityException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdatePackagingGroupRequest {
  Authorization?: Authorization;
  Id: string;
}
export interface UpdatePackagingGroupResponse {
  ApproximateAssetCount?: number;
  Arn?: string;
  Authorization?: Authorization;
  CreatedAt?: string;
  DomainName?: string;
  EgressAccessLogs?: EgressAccessLogs;
  Id?: string;
  Tags?: Record<string, string>;
}
export declare namespace ConfigureLogs {
  export type Input = ConfigureLogsRequest;
  export type Output = ConfigureLogsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateAsset {
  export type Input = CreateAssetRequest;
  export type Output = CreateAssetResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreatePackagingConfiguration {
  export type Input = CreatePackagingConfigurationRequest;
  export type Output = CreatePackagingConfigurationResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreatePackagingGroup {
  export type Input = CreatePackagingGroupRequest;
  export type Output = CreatePackagingGroupResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DeleteAsset {
  export type Input = DeleteAssetRequest;
  export type Output = DeleteAssetResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DeletePackagingConfiguration {
  export type Input = DeletePackagingConfigurationRequest;
  export type Output = DeletePackagingConfigurationResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DeletePackagingGroup {
  export type Input = DeletePackagingGroupRequest;
  export type Output = DeletePackagingGroupResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DescribeAsset {
  export type Input = DescribeAssetRequest;
  export type Output = DescribeAssetResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DescribePackagingConfiguration {
  export type Input = DescribePackagingConfigurationRequest;
  export type Output = DescribePackagingConfigurationResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DescribePackagingGroup {
  export type Input = DescribePackagingGroupRequest;
  export type Output = DescribePackagingGroupResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ListAssets {
  export type Input = ListAssetsRequest;
  export type Output = ListAssetsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ListPackagingConfigurations {
  export type Input = ListPackagingConfigurationsRequest;
  export type Output = ListPackagingConfigurationsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ListPackagingGroups {
  export type Input = ListPackagingGroupsRequest;
  export type Output = ListPackagingGroupsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UpdatePackagingGroup {
  export type Input = UpdatePackagingGroupRequest;
  export type Output = UpdatePackagingGroupResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

