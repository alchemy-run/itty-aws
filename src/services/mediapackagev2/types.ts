import type { Effect, Data as EffectData } from "effect";
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

export declare class MediaPackageV2 extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<{}, ValidationException | CommonAwsError>;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<{}, ValidationException | CommonAwsError>;
  cancelHarvestJob(
    input: CancelHarvestJobRequest,
  ): Effect.Effect<
    CancelHarvestJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createChannel(
    input: CreateChannelRequest,
  ): Effect.Effect<
    CreateChannelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createChannelGroup(
    input: CreateChannelGroupRequest,
  ): Effect.Effect<
    CreateChannelGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createHarvestJob(
    input: CreateHarvestJobRequest,
  ): Effect.Effect<
    CreateHarvestJobResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createOriginEndpoint(
    input: CreateOriginEndpointRequest,
  ): Effect.Effect<
    CreateOriginEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteChannel(
    input: DeleteChannelRequest,
  ): Effect.Effect<
    DeleteChannelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteChannelGroup(
    input: DeleteChannelGroupRequest,
  ): Effect.Effect<
    DeleteChannelGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteChannelPolicy(
    input: DeleteChannelPolicyRequest,
  ): Effect.Effect<
    DeleteChannelPolicyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOriginEndpoint(
    input: DeleteOriginEndpointRequest,
  ): Effect.Effect<
    DeleteOriginEndpointResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteOriginEndpointPolicy(
    input: DeleteOriginEndpointPolicyRequest,
  ): Effect.Effect<
    DeleteOriginEndpointPolicyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getChannel(
    input: GetChannelRequest,
  ): Effect.Effect<
    GetChannelResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getChannelGroup(
    input: GetChannelGroupRequest,
  ): Effect.Effect<
    GetChannelGroupResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getChannelPolicy(
    input: GetChannelPolicyRequest,
  ): Effect.Effect<
    GetChannelPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getHarvestJob(
    input: GetHarvestJobRequest,
  ): Effect.Effect<
    GetHarvestJobResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOriginEndpoint(
    input: GetOriginEndpointRequest,
  ): Effect.Effect<
    GetOriginEndpointResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getOriginEndpointPolicy(
    input: GetOriginEndpointPolicyRequest,
  ): Effect.Effect<
    GetOriginEndpointPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listChannelGroups(
    input: ListChannelGroupsRequest,
  ): Effect.Effect<
    ListChannelGroupsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listChannels(
    input: ListChannelsRequest,
  ): Effect.Effect<
    ListChannelsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listHarvestJobs(
    input: ListHarvestJobsRequest,
  ): Effect.Effect<
    ListHarvestJobsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listOriginEndpoints(
    input: ListOriginEndpointsRequest,
  ): Effect.Effect<
    ListOriginEndpointsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putChannelPolicy(
    input: PutChannelPolicyRequest,
  ): Effect.Effect<
    PutChannelPolicyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putOriginEndpointPolicy(
    input: PutOriginEndpointPolicyRequest,
  ): Effect.Effect<
    PutOriginEndpointPolicyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resetChannelState(
    input: ResetChannelStateRequest,
  ): Effect.Effect<
    ResetChannelStateResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  resetOriginEndpointState(
    input: ResetOriginEndpointStateRequest,
  ): Effect.Effect<
    ResetOriginEndpointStateResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateChannel(
    input: UpdateChannelRequest,
  ): Effect.Effect<
    UpdateChannelResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateChannelGroup(
    input: UpdateChannelGroupRequest,
  ): Effect.Effect<
    UpdateChannelGroupResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateOriginEndpoint(
    input: UpdateOriginEndpointRequest,
  ): Effect.Effect<
    UpdateOriginEndpointResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Mediapackagev2 extends MediaPackageV2 {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AdMarkerDash = "BINARY" | "XML";
export type AdMarkerHls = "DATERANGE";
export interface CancelHarvestJobRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  HarvestJobName: string;
  ETag?: string;
}
export interface CancelHarvestJobResponse {}
export interface CdnAuthConfiguration {
  CdnIdentifierSecretArns: Array<string>;
  SecretsRoleArn: string;
}
export type CdnIdentifierSecretArn = string;

export type CdnIdentifierSecretArns = Array<string>;
export interface ChannelGroupListConfiguration {
  ChannelGroupName: string;
  Arn: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Description?: string;
}
export type ChannelGroupsList = Array<ChannelGroupListConfiguration>;
export type ChannelList = Array<ChannelListConfiguration>;
export interface ChannelListConfiguration {
  Arn: string;
  ChannelName: string;
  ChannelGroupName: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Description?: string;
  InputType?: InputType;
}
export type CmafEncryptionMethod = "CENC" | "CBCS";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly ConflictExceptionType?: ConflictExceptionType;
}> {}
export type ConflictExceptionType =
  | "RESOURCE_IN_USE"
  | "RESOURCE_ALREADY_EXISTS"
  | "IDEMPOTENT_PARAMETER_MISMATCH"
  | "CONFLICTING_OPERATION";
export type ContainerType = "TS" | "CMAF" | "ISM";
export interface CreateChannelGroupRequest {
  ChannelGroupName: string;
  ClientToken?: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateChannelGroupResponse {
  ChannelGroupName: string;
  Arn: string;
  EgressDomain: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  ETag?: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface CreateChannelRequest {
  ChannelGroupName: string;
  ChannelName: string;
  ClientToken?: string;
  InputType?: InputType;
  Description?: string;
  InputSwitchConfiguration?: InputSwitchConfiguration;
  OutputHeaderConfiguration?: OutputHeaderConfiguration;
  Tags?: Record<string, string>;
}
export interface CreateChannelResponse {
  Arn: string;
  ChannelName: string;
  ChannelGroupName: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Description?: string;
  IngestEndpoints?: Array<IngestEndpoint>;
  InputType?: InputType;
  ETag?: string;
  Tags?: Record<string, string>;
  InputSwitchConfiguration?: InputSwitchConfiguration;
  OutputHeaderConfiguration?: OutputHeaderConfiguration;
}
export interface CreateDashManifestConfiguration {
  ManifestName: string;
  ManifestWindowSeconds?: number;
  FilterConfiguration?: FilterConfiguration;
  MinUpdatePeriodSeconds?: number;
  MinBufferTimeSeconds?: number;
  SuggestedPresentationDelaySeconds?: number;
  SegmentTemplateFormat?: DashSegmentTemplateFormat;
  PeriodTriggers?: Array<DashPeriodTrigger>;
  ScteDash?: ScteDash;
  DrmSignaling?: DashDrmSignaling;
  UtcTiming?: DashUtcTiming;
  Profiles?: Array<DashProfile>;
  BaseUrls?: Array<DashBaseUrl>;
  ProgramInformation?: DashProgramInformation;
  DvbSettings?: DashDvbSettings;
  Compactness?: DashCompactness;
  SubtitleConfiguration?: DashSubtitleConfiguration;
}
export type CreateDashManifests = Array<CreateDashManifestConfiguration>;
export interface CreateHarvestJobRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  Description?: string;
  HarvestedManifests: HarvestedManifests;
  ScheduleConfiguration: HarvesterScheduleConfiguration;
  Destination: Destination;
  ClientToken?: string;
  HarvestJobName?: string;
  Tags?: Record<string, string>;
}
export interface CreateHarvestJobResponse {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  Destination: Destination;
  HarvestJobName: string;
  HarvestedManifests: HarvestedManifests;
  Description?: string;
  ScheduleConfiguration: HarvesterScheduleConfiguration;
  Arn: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Status: HarvestJobStatus;
  ErrorMessage?: string;
  ETag?: string;
  Tags?: Record<string, string>;
}
export interface CreateHlsManifestConfiguration {
  ManifestName: string;
  ChildManifestName?: string;
  ScteHls?: ScteHls;
  StartTag?: StartTag;
  ManifestWindowSeconds?: number;
  ProgramDateTimeIntervalSeconds?: number;
  FilterConfiguration?: FilterConfiguration;
  UrlEncodeChildManifest?: boolean;
}
export type CreateHlsManifests = Array<CreateHlsManifestConfiguration>;
export interface CreateLowLatencyHlsManifestConfiguration {
  ManifestName: string;
  ChildManifestName?: string;
  ScteHls?: ScteHls;
  StartTag?: StartTag;
  ManifestWindowSeconds?: number;
  ProgramDateTimeIntervalSeconds?: number;
  FilterConfiguration?: FilterConfiguration;
  UrlEncodeChildManifest?: boolean;
}
export type CreateLowLatencyHlsManifests =
  Array<CreateLowLatencyHlsManifestConfiguration>;
export interface CreateMssManifestConfiguration {
  ManifestName: string;
  ManifestWindowSeconds?: number;
  FilterConfiguration?: FilterConfiguration;
  ManifestLayout?: MssManifestLayout;
}
export type CreateMssManifests = Array<CreateMssManifestConfiguration>;
export interface CreateOriginEndpointRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  ContainerType: ContainerType;
  Segment?: Segment;
  ClientToken?: string;
  Description?: string;
  StartoverWindowSeconds?: number;
  HlsManifests?: Array<CreateHlsManifestConfiguration>;
  LowLatencyHlsManifests?: Array<CreateLowLatencyHlsManifestConfiguration>;
  DashManifests?: Array<CreateDashManifestConfiguration>;
  MssManifests?: Array<CreateMssManifestConfiguration>;
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration;
  Tags?: Record<string, string>;
}
export interface CreateOriginEndpointResponse {
  Arn: string;
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  ContainerType: ContainerType;
  Segment: Segment;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Description?: string;
  StartoverWindowSeconds?: number;
  HlsManifests?: Array<GetHlsManifestConfiguration>;
  LowLatencyHlsManifests?: Array<GetLowLatencyHlsManifestConfiguration>;
  DashManifests?: Array<GetDashManifestConfiguration>;
  MssManifests?: Array<GetMssManifestConfiguration>;
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration;
  ETag?: string;
  Tags?: Record<string, string>;
}
export interface DashBaseUrl {
  Url: string;
  ServiceLocation?: string;
  DvbPriority?: number;
  DvbWeight?: number;
}
export type DashBaseUrls = Array<DashBaseUrl>;
export type DashCompactness = "STANDARD" | "NONE";
export type DashDrmSignaling = "INDIVIDUAL" | "REFERENCED";
export type DashDvbErrorMetrics = Array<DashDvbMetricsReporting>;
export interface DashDvbFontDownload {
  Url?: string;
  MimeType?: string;
  FontFamily?: string;
}
export interface DashDvbMetricsReporting {
  ReportingUrl: string;
  Probability?: number;
}
export interface DashDvbSettings {
  FontDownload?: DashDvbFontDownload;
  ErrorMetrics?: Array<DashDvbMetricsReporting>;
}
export type DashPeriodTrigger =
  | "AVAILS"
  | "DRM_KEY_ROTATION"
  | "SOURCE_CHANGES"
  | "SOURCE_DISRUPTIONS"
  | "NONE";
export type DashPeriodTriggers = Array<DashPeriodTrigger>;
export type DashProfile = "DVB_DASH";
export type DashProfiles = Array<DashProfile>;
export interface DashProgramInformation {
  Title?: string;
  Source?: string;
  Copyright?: string;
  LanguageCode?: string;
  MoreInformationUrl?: string;
}
export type DashSegmentTemplateFormat = "NUMBER_WITH_TIMELINE";
export interface DashSubtitleConfiguration {
  TtmlConfiguration?: DashTtmlConfiguration;
}
export interface DashTtmlConfiguration {
  TtmlProfile: DashTtmlProfile;
}
export type DashTtmlProfile = "IMSC_1" | "EBU_TT_D_101";
export interface DashUtcTiming {
  TimingMode?: DashUtcTimingMode;
  TimingSource?: string;
}
export type DashUtcTimingMode =
  | "HTTP_HEAD"
  | "HTTP_ISO"
  | "HTTP_XSDATE"
  | "UTC_DIRECT";
export interface DeleteChannelGroupRequest {
  ChannelGroupName: string;
}
export interface DeleteChannelGroupResponse {}
export interface DeleteChannelPolicyRequest {
  ChannelGroupName: string;
  ChannelName: string;
}
export interface DeleteChannelPolicyResponse {}
export interface DeleteChannelRequest {
  ChannelGroupName: string;
  ChannelName: string;
}
export interface DeleteChannelResponse {}
export interface DeleteOriginEndpointPolicyRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
}
export interface DeleteOriginEndpointPolicyResponse {}
export interface DeleteOriginEndpointRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
}
export interface DeleteOriginEndpointResponse {}
export interface Destination {
  S3Destination: S3DestinationConfig;
}
export type DrmSystem =
  | "CLEAR_KEY_AES_128"
  | "FAIRPLAY"
  | "PLAYREADY"
  | "WIDEVINE"
  | "IRDETO";
export type DrmSystems = Array<DrmSystem>;
export interface Encryption {
  ConstantInitializationVector?: string;
  EncryptionMethod: EncryptionMethod;
  KeyRotationIntervalSeconds?: number;
  CmafExcludeSegmentDrmMetadata?: boolean;
  SpekeKeyProvider: SpekeKeyProvider;
}
export interface EncryptionContractConfiguration {
  PresetSpeke20Audio: PresetSpeke20Audio;
  PresetSpeke20Video: PresetSpeke20Video;
}
export interface EncryptionMethod {
  TsEncryptionMethod?: TsEncryptionMethod;
  CmafEncryptionMethod?: CmafEncryptionMethod;
  IsmEncryptionMethod?: IsmEncryptionMethod;
}
export type EndpointErrorCondition =
  | "STALE_MANIFEST"
  | "INCOMPLETE_MANIFEST"
  | "MISSING_DRM_KEY"
  | "SLATE_INPUT";
export type EndpointErrorConditions = Array<EndpointErrorCondition>;
export type EntityTag = string;

export interface FilterConfiguration {
  ManifestFilter?: string;
  Start?: Date | string;
  End?: Date | string;
  TimeDelaySeconds?: number;
  ClipStartTime?: Date | string;
}
export interface ForceEndpointErrorConfiguration {
  EndpointErrorConditions?: Array<EndpointErrorCondition>;
}
export interface GetChannelGroupRequest {
  ChannelGroupName: string;
}
export interface GetChannelGroupResponse {
  ChannelGroupName: string;
  Arn: string;
  EgressDomain: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Description?: string;
  ETag?: string;
  Tags?: Record<string, string>;
}
export interface GetChannelPolicyRequest {
  ChannelGroupName: string;
  ChannelName: string;
}
export interface GetChannelPolicyResponse {
  ChannelGroupName: string;
  ChannelName: string;
  Policy: string;
}
export interface GetChannelRequest {
  ChannelGroupName: string;
  ChannelName: string;
}
export interface GetChannelResponse {
  Arn: string;
  ChannelName: string;
  ChannelGroupName: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  ResetAt?: Date | string;
  Description?: string;
  IngestEndpoints?: Array<IngestEndpoint>;
  InputType?: InputType;
  ETag?: string;
  Tags?: Record<string, string>;
  InputSwitchConfiguration?: InputSwitchConfiguration;
  OutputHeaderConfiguration?: OutputHeaderConfiguration;
}
export interface GetDashManifestConfiguration {
  ManifestName: string;
  Url: string;
  ManifestWindowSeconds?: number;
  FilterConfiguration?: FilterConfiguration;
  MinUpdatePeriodSeconds?: number;
  MinBufferTimeSeconds?: number;
  SuggestedPresentationDelaySeconds?: number;
  SegmentTemplateFormat?: DashSegmentTemplateFormat;
  PeriodTriggers?: Array<DashPeriodTrigger>;
  ScteDash?: ScteDash;
  DrmSignaling?: DashDrmSignaling;
  UtcTiming?: DashUtcTiming;
  Profiles?: Array<DashProfile>;
  BaseUrls?: Array<DashBaseUrl>;
  ProgramInformation?: DashProgramInformation;
  DvbSettings?: DashDvbSettings;
  Compactness?: DashCompactness;
  SubtitleConfiguration?: DashSubtitleConfiguration;
}
export type GetDashManifests = Array<GetDashManifestConfiguration>;
export interface GetHarvestJobRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  HarvestJobName: string;
}
export interface GetHarvestJobResponse {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  Destination: Destination;
  HarvestJobName: string;
  HarvestedManifests: HarvestedManifests;
  Description?: string;
  ScheduleConfiguration: HarvesterScheduleConfiguration;
  Arn: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Status: HarvestJobStatus;
  ErrorMessage?: string;
  ETag?: string;
  Tags?: Record<string, string>;
}
export interface GetHlsManifestConfiguration {
  ManifestName: string;
  Url: string;
  ChildManifestName?: string;
  ManifestWindowSeconds?: number;
  ProgramDateTimeIntervalSeconds?: number;
  ScteHls?: ScteHls;
  FilterConfiguration?: FilterConfiguration;
  StartTag?: StartTag;
  UrlEncodeChildManifest?: boolean;
}
export type GetHlsManifests = Array<GetHlsManifestConfiguration>;
export interface GetLowLatencyHlsManifestConfiguration {
  ManifestName: string;
  Url: string;
  ChildManifestName?: string;
  ManifestWindowSeconds?: number;
  ProgramDateTimeIntervalSeconds?: number;
  ScteHls?: ScteHls;
  FilterConfiguration?: FilterConfiguration;
  StartTag?: StartTag;
  UrlEncodeChildManifest?: boolean;
}
export type GetLowLatencyHlsManifests =
  Array<GetLowLatencyHlsManifestConfiguration>;
export interface GetMssManifestConfiguration {
  ManifestName: string;
  Url: string;
  FilterConfiguration?: FilterConfiguration;
  ManifestWindowSeconds?: number;
  ManifestLayout?: MssManifestLayout;
}
export type GetMssManifests = Array<GetMssManifestConfiguration>;
export interface GetOriginEndpointPolicyRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
}
export interface GetOriginEndpointPolicyResponse {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  Policy: string;
  CdnAuthConfiguration?: CdnAuthConfiguration;
}
export interface GetOriginEndpointRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
}
export interface GetOriginEndpointResponse {
  Arn: string;
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  ContainerType: ContainerType;
  Segment: Segment;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  ResetAt?: Date | string;
  Description?: string;
  StartoverWindowSeconds?: number;
  HlsManifests?: Array<GetHlsManifestConfiguration>;
  LowLatencyHlsManifests?: Array<GetLowLatencyHlsManifestConfiguration>;
  DashManifests?: Array<GetDashManifestConfiguration>;
  MssManifests?: Array<GetMssManifestConfiguration>;
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration;
  ETag?: string;
  Tags?: Record<string, string>;
}
export interface HarvestedDashManifest {
  ManifestName: string;
}
export type HarvestedDashManifestsList = Array<HarvestedDashManifest>;
export interface HarvestedHlsManifest {
  ManifestName: string;
}
export type HarvestedHlsManifestsList = Array<HarvestedHlsManifest>;
export interface HarvestedLowLatencyHlsManifest {
  ManifestName: string;
}
export type HarvestedLowLatencyHlsManifestsList =
  Array<HarvestedLowLatencyHlsManifest>;
export interface HarvestedManifests {
  HlsManifests?: Array<HarvestedHlsManifest>;
  DashManifests?: Array<HarvestedDashManifest>;
  LowLatencyHlsManifests?: Array<HarvestedLowLatencyHlsManifest>;
}
export interface HarvesterScheduleConfiguration {
  StartTime: Date | string;
  EndTime: Date | string;
}
export interface HarvestJob {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  Destination: Destination;
  HarvestJobName: string;
  HarvestedManifests: HarvestedManifests;
  Description?: string;
  ScheduleConfiguration: HarvesterScheduleConfiguration;
  Arn: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Status: HarvestJobStatus;
  ErrorMessage?: string;
  ETag?: string;
}
export type HarvestJobsList = Array<HarvestJob>;
export type HarvestJobStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "CANCELLED"
  | "COMPLETED"
  | "FAILED";
export type IdempotencyToken = string;

export interface IngestEndpoint {
  Id?: string;
  Url?: string;
}
export type IngestEndpointList = Array<IngestEndpoint>;
export interface InputSwitchConfiguration {
  MQCSInputSwitching?: boolean;
  PreferredInput?: number;
}
export type InputType = "HLS" | "CMAF";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type IsmEncryptionMethod = "CENC";
export interface ListChannelGroupsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChannelGroupsResponse {
  Items?: Array<ChannelGroupListConfiguration>;
  NextToken?: string;
}
export interface ListChannelsRequest {
  ChannelGroupName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChannelsResponse {
  Items?: Array<ChannelListConfiguration>;
  NextToken?: string;
}
export interface ListDashManifestConfiguration {
  ManifestName: string;
  Url?: string;
}
export type ListDashManifests = Array<ListDashManifestConfiguration>;
export interface ListHarvestJobsRequest {
  ChannelGroupName: string;
  ChannelName?: string;
  OriginEndpointName?: string;
  Status?: HarvestJobStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListHarvestJobsResponse {
  Items?: Array<HarvestJob>;
  NextToken?: string;
}
export interface ListHlsManifestConfiguration {
  ManifestName: string;
  ChildManifestName?: string;
  Url?: string;
}
export type ListHlsManifests = Array<ListHlsManifestConfiguration>;
export interface ListLowLatencyHlsManifestConfiguration {
  ManifestName: string;
  ChildManifestName?: string;
  Url?: string;
}
export type ListLowLatencyHlsManifests =
  Array<ListLowLatencyHlsManifestConfiguration>;
export interface ListMssManifestConfiguration {
  ManifestName: string;
  Url?: string;
}
export type ListMssManifests = Array<ListMssManifestConfiguration>;
export interface ListOriginEndpointsRequest {
  ChannelGroupName: string;
  ChannelName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListOriginEndpointsResponse {
  Items?: Array<OriginEndpointListConfiguration>;
  NextToken?: string;
}
export type ListResourceMaxResults = number;

export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type ManifestName = string;

export type MssManifestLayout = "FULL" | "COMPACT";
export interface OriginEndpointListConfiguration {
  Arn: string;
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  ContainerType: ContainerType;
  Description?: string;
  CreatedAt?: Date | string;
  ModifiedAt?: Date | string;
  HlsManifests?: Array<ListHlsManifestConfiguration>;
  LowLatencyHlsManifests?: Array<ListLowLatencyHlsManifestConfiguration>;
  DashManifests?: Array<ListDashManifestConfiguration>;
  MssManifests?: Array<ListMssManifestConfiguration>;
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration;
}
export type OriginEndpointsList = Array<OriginEndpointListConfiguration>;
export interface OutputHeaderConfiguration {
  PublishMQCS?: boolean;
}
export type PolicyText = string;

export type PresetSpeke20Audio =
  | "PRESET_AUDIO_1"
  | "PRESET_AUDIO_2"
  | "PRESET_AUDIO_3"
  | "SHARED"
  | "UNENCRYPTED";
export type PresetSpeke20Video =
  | "PRESET_VIDEO_1"
  | "PRESET_VIDEO_2"
  | "PRESET_VIDEO_3"
  | "PRESET_VIDEO_4"
  | "PRESET_VIDEO_5"
  | "PRESET_VIDEO_6"
  | "PRESET_VIDEO_7"
  | "PRESET_VIDEO_8"
  | "SHARED"
  | "UNENCRYPTED";
export interface PutChannelPolicyRequest {
  ChannelGroupName: string;
  ChannelName: string;
  Policy: string;
}
export interface PutChannelPolicyResponse {}
export interface PutOriginEndpointPolicyRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  Policy: string;
  CdnAuthConfiguration?: CdnAuthConfiguration;
}
export interface PutOriginEndpointPolicyResponse {}
export interface ResetChannelStateRequest {
  ChannelGroupName: string;
  ChannelName: string;
}
export interface ResetChannelStateResponse {
  ChannelGroupName: string;
  ChannelName: string;
  Arn: string;
  ResetAt: Date | string;
}
export interface ResetOriginEndpointStateRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
}
export interface ResetOriginEndpointStateResponse {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  Arn: string;
  ResetAt: Date | string;
}
export type ResourceDescription = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceTypeNotFound?: ResourceTypeNotFound;
}> {}
export type ResourceTypeNotFound =
  | "CHANNEL_GROUP"
  | "CHANNEL"
  | "ORIGIN_ENDPOINT"
  | "HARVEST_JOB";
export type S3BucketName = string;

export interface S3DestinationConfig {
  BucketName: string;
  DestinationPath: string;
}
export type S3DestinationPath = string;

export interface Scte {
  ScteFilter?: Array<ScteFilter>;
}
export interface ScteDash {
  AdMarkerDash?: AdMarkerDash;
}
export type ScteFilter =
  | "SPLICE_INSERT"
  | "BREAK"
  | "PROVIDER_ADVERTISEMENT"
  | "DISTRIBUTOR_ADVERTISEMENT"
  | "PROVIDER_PLACEMENT_OPPORTUNITY"
  | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
  | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
  | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
  | "PROGRAM";
export type ScteFilterList = Array<ScteFilter>;
export interface ScteHls {
  AdMarkerHls?: AdMarkerHls;
}
export interface Segment {
  SegmentDurationSeconds?: number;
  SegmentName?: string;
  TsUseAudioRenditionGroup?: boolean;
  IncludeIframeOnlyStreams?: boolean;
  TsIncludeDvbSubtitles?: boolean;
  Scte?: Scte;
  Encryption?: Encryption;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface SpekeKeyProvider {
  EncryptionContractConfiguration: EncryptionContractConfiguration;
  ResourceId: string;
  DrmSystems: Array<DrmSystem>;
  RoleArn: string;
  Url: string;
}
export interface StartTag {
  TimeOffset: number;
  Precise?: boolean;
}
export type TagArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type TsEncryptionMethod = "AES_128" | "SAMPLE_AES";
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateChannelGroupRequest {
  ChannelGroupName: string;
  ETag?: string;
  Description?: string;
}
export interface UpdateChannelGroupResponse {
  ChannelGroupName: string;
  Arn: string;
  EgressDomain: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Description?: string;
  ETag?: string;
  Tags?: Record<string, string>;
}
export interface UpdateChannelRequest {
  ChannelGroupName: string;
  ChannelName: string;
  ETag?: string;
  Description?: string;
  InputSwitchConfiguration?: InputSwitchConfiguration;
  OutputHeaderConfiguration?: OutputHeaderConfiguration;
}
export interface UpdateChannelResponse {
  Arn: string;
  ChannelName: string;
  ChannelGroupName: string;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Description?: string;
  IngestEndpoints?: Array<IngestEndpoint>;
  InputType?: InputType;
  ETag?: string;
  Tags?: Record<string, string>;
  InputSwitchConfiguration?: InputSwitchConfiguration;
  OutputHeaderConfiguration?: OutputHeaderConfiguration;
}
export interface UpdateOriginEndpointRequest {
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  ContainerType: ContainerType;
  Segment?: Segment;
  Description?: string;
  StartoverWindowSeconds?: number;
  HlsManifests?: Array<CreateHlsManifestConfiguration>;
  LowLatencyHlsManifests?: Array<CreateLowLatencyHlsManifestConfiguration>;
  DashManifests?: Array<CreateDashManifestConfiguration>;
  MssManifests?: Array<CreateMssManifestConfiguration>;
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration;
  ETag?: string;
}
export interface UpdateOriginEndpointResponse {
  Arn: string;
  ChannelGroupName: string;
  ChannelName: string;
  OriginEndpointName: string;
  ContainerType: ContainerType;
  Segment: Segment;
  CreatedAt: Date | string;
  ModifiedAt: Date | string;
  Description?: string;
  StartoverWindowSeconds?: number;
  HlsManifests?: Array<GetHlsManifestConfiguration>;
  LowLatencyHlsManifests?: Array<GetLowLatencyHlsManifestConfiguration>;
  MssManifests?: Array<GetMssManifestConfiguration>;
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration;
  ETag?: string;
  Tags?: Record<string, string>;
  DashManifests?: Array<GetDashManifestConfiguration>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly ValidationExceptionType?: ValidationExceptionType;
}> {}
export type ValidationExceptionType =
  | "CONTAINER_TYPE_IMMUTABLE"
  | "INVALID_PAGINATION_TOKEN"
  | "INVALID_PAGINATION_MAX_RESULTS"
  | "INVALID_POLICY"
  | "INVALID_ROLE_ARN"
  | "MANIFEST_NAME_COLLISION"
  | "ENCRYPTION_METHOD_CONTAINER_TYPE_MISMATCH"
  | "CENC_IV_INCOMPATIBLE"
  | "ENCRYPTION_CONTRACT_WITHOUT_AUDIO_RENDITION_INCOMPATIBLE"
  | "ENCRYPTION_CONTRACT_WITH_ISM_CONTAINER_INCOMPATIBLE"
  | "ENCRYPTION_CONTRACT_UNENCRYPTED"
  | "ENCRYPTION_CONTRACT_SHARED"
  | "NUM_MANIFESTS_LOW"
  | "NUM_MANIFESTS_HIGH"
  | "MANIFEST_DRM_SYSTEMS_INCOMPATIBLE"
  | "DRM_SYSTEMS_ENCRYPTION_METHOD_INCOMPATIBLE"
  | "ROLE_ARN_NOT_ASSUMABLE"
  | "ROLE_ARN_LENGTH_OUT_OF_RANGE"
  | "ROLE_ARN_INVALID_FORMAT"
  | "URL_INVALID"
  | "URL_SCHEME"
  | "URL_USER_INFO"
  | "URL_PORT"
  | "URL_UNKNOWN_HOST"
  | "URL_LOCAL_ADDRESS"
  | "URL_LOOPBACK_ADDRESS"
  | "URL_LINK_LOCAL_ADDRESS"
  | "URL_MULTICAST_ADDRESS"
  | "MEMBER_INVALID"
  | "MEMBER_MISSING"
  | "MEMBER_MIN_VALUE"
  | "MEMBER_MAX_VALUE"
  | "MEMBER_MIN_LENGTH"
  | "MEMBER_MAX_LENGTH"
  | "MEMBER_INVALID_ENUM_VALUE"
  | "MEMBER_DOES_NOT_MATCH_PATTERN"
  | "INVALID_MANIFEST_FILTER"
  | "INVALID_TIME_DELAY_SECONDS"
  | "END_TIME_EARLIER_THAN_START_TIME"
  | "TS_CONTAINER_TYPE_WITH_DASH_MANIFEST"
  | "DIRECT_MODE_WITH_TIMING_SOURCE"
  | "NONE_MODE_WITH_TIMING_SOURCE"
  | "TIMING_SOURCE_MISSING"
  | "UPDATE_PERIOD_SMALLER_THAN_SEGMENT_DURATION"
  | "PERIOD_TRIGGERS_NONE_SPECIFIED_WITH_ADDITIONAL_VALUES"
  | "DRM_SIGNALING_MISMATCH_SEGMENT_ENCRYPTION_STATUS"
  | "ONLY_CMAF_INPUT_TYPE_ALLOW_FORCE_ENDPOINT_ERROR_CONFIGURATION"
  | "SOURCE_DISRUPTIONS_ENABLED_INCORRECTLY"
  | "HARVESTED_MANIFEST_HAS_START_END_FILTER_CONFIGURATION"
  | "HARVESTED_MANIFEST_NOT_FOUND_ON_ENDPOINT"
  | "TOO_MANY_IN_PROGRESS_HARVEST_JOBS"
  | "HARVEST_JOB_INELIGIBLE_FOR_CANCELLATION"
  | "INVALID_HARVEST_JOB_DURATION"
  | "HARVEST_JOB_S3_DESTINATION_MISSING_OR_INCOMPLETE"
  | "HARVEST_JOB_UNABLE_TO_WRITE_TO_S3_DESTINATION"
  | "HARVEST_JOB_CUSTOMER_ENDPOINT_READ_ACCESS_DENIED"
  | "CLIP_START_TIME_WITH_START_OR_END"
  | "START_TAG_TIME_OFFSET_INVALID"
  | "INCOMPATIBLE_DASH_PROFILE_DVB_DASH_CONFIGURATION"
  | "DASH_DVB_ATTRIBUTES_WITHOUT_DVB_DASH_PROFILE"
  | "INCOMPATIBLE_DASH_COMPACTNESS_CONFIGURATION"
  | "INCOMPATIBLE_XML_ENCODING"
  | "CMAF_EXCLUDE_SEGMENT_DRM_METADATA_INCOMPATIBLE_CONTAINER_TYPE"
  | "ONLY_CMAF_INPUT_TYPE_ALLOW_MQCS_INPUT_SWITCHING"
  | "ONLY_CMAF_INPUT_TYPE_ALLOW_MQCS_OUTPUT_CONFIGURATION"
  | "ONLY_CMAF_INPUT_TYPE_ALLOW_PREFERRED_INPUT_CONFIGURATION"
  | "TS_CONTAINER_TYPE_WITH_MSS_MANIFEST"
  | "CMAF_CONTAINER_TYPE_WITH_MSS_MANIFEST"
  | "ISM_CONTAINER_TYPE_WITH_HLS_MANIFEST"
  | "ISM_CONTAINER_TYPE_WITH_LL_HLS_MANIFEST"
  | "ISM_CONTAINER_TYPE_WITH_DASH_MANIFEST"
  | "ISM_CONTAINER_TYPE_WITH_SCTE"
  | "ISM_CONTAINER_WITH_KEY_ROTATION"
  | "BATCH_GET_SECRET_VALUE_DENIED"
  | "GET_SECRET_VALUE_DENIED"
  | "DESCRIBE_SECRET_DENIED"
  | "INVALID_SECRET_FORMAT"
  | "SECRET_IS_NOT_ONE_KEY_VALUE_PAIR"
  | "INVALID_SECRET_KEY"
  | "INVALID_SECRET_VALUE"
  | "SECRET_ARN_RESOURCE_NOT_FOUND"
  | "DECRYPT_SECRET_FAILED"
  | "TOO_MANY_SECRETS"
  | "DUPLICATED_SECRET"
  | "MALFORMED_SECRET_ARN"
  | "SECRET_FROM_DIFFERENT_ACCOUNT"
  | "SECRET_FROM_DIFFERENT_REGION"
  | "INVALID_SECRET";
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error = ValidationException | CommonAwsError;
}

export declare namespace CancelHarvestJob {
  export type Input = CancelHarvestJobRequest;
  export type Output = CancelHarvestJobResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateChannel {
  export type Input = CreateChannelRequest;
  export type Output = CreateChannelResponse;
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

export declare namespace CreateChannelGroup {
  export type Input = CreateChannelGroupRequest;
  export type Output = CreateChannelGroupResponse;
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

export declare namespace CreateHarvestJob {
  export type Input = CreateHarvestJobRequest;
  export type Output = CreateHarvestJobResponse;
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

export declare namespace CreateOriginEndpoint {
  export type Input = CreateOriginEndpointRequest;
  export type Output = CreateOriginEndpointResponse;
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

export declare namespace DeleteChannel {
  export type Input = DeleteChannelRequest;
  export type Output = DeleteChannelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteChannelGroup {
  export type Input = DeleteChannelGroupRequest;
  export type Output = DeleteChannelGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteChannelPolicy {
  export type Input = DeleteChannelPolicyRequest;
  export type Output = DeleteChannelPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOriginEndpoint {
  export type Input = DeleteOriginEndpointRequest;
  export type Output = DeleteOriginEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteOriginEndpointPolicy {
  export type Input = DeleteOriginEndpointPolicyRequest;
  export type Output = DeleteOriginEndpointPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetChannel {
  export type Input = GetChannelRequest;
  export type Output = GetChannelResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetChannelGroup {
  export type Input = GetChannelGroupRequest;
  export type Output = GetChannelGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetChannelPolicy {
  export type Input = GetChannelPolicyRequest;
  export type Output = GetChannelPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetHarvestJob {
  export type Input = GetHarvestJobRequest;
  export type Output = GetHarvestJobResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOriginEndpoint {
  export type Input = GetOriginEndpointRequest;
  export type Output = GetOriginEndpointResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetOriginEndpointPolicy {
  export type Input = GetOriginEndpointPolicyRequest;
  export type Output = GetOriginEndpointPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChannelGroups {
  export type Input = ListChannelGroupsRequest;
  export type Output = ListChannelGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChannels {
  export type Input = ListChannelsRequest;
  export type Output = ListChannelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListHarvestJobs {
  export type Input = ListHarvestJobsRequest;
  export type Output = ListHarvestJobsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOriginEndpoints {
  export type Input = ListOriginEndpointsRequest;
  export type Output = ListOriginEndpointsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutChannelPolicy {
  export type Input = PutChannelPolicyRequest;
  export type Output = PutChannelPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutOriginEndpointPolicy {
  export type Input = PutOriginEndpointPolicyRequest;
  export type Output = PutOriginEndpointPolicyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetChannelState {
  export type Input = ResetChannelStateRequest;
  export type Output = ResetChannelStateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetOriginEndpointState {
  export type Input = ResetOriginEndpointStateRequest;
  export type Output = ResetOriginEndpointStateResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateChannel {
  export type Input = UpdateChannelRequest;
  export type Output = UpdateChannelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateChannelGroup {
  export type Input = UpdateChannelGroupRequest;
  export type Output = UpdateChannelGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateOriginEndpoint {
  export type Input = UpdateOriginEndpointRequest;
  export type Output = UpdateOriginEndpointResponse;
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
