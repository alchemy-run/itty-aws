import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class ECRPUBLIC extends AWSServiceClient {
  batchCheckLayerAvailability(
    input: BatchCheckLayerAvailabilityRequest,
  ): Effect.Effect<
    BatchCheckLayerAvailabilityResponse,
    | InvalidParameterException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  batchDeleteImage(
    input: BatchDeleteImageRequest,
  ): Effect.Effect<
    BatchDeleteImageResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  completeLayerUpload(
    input: CompleteLayerUploadRequest,
  ): Effect.Effect<
    CompleteLayerUploadResponse,
    | EmptyUploadException
    | InvalidLayerException
    | InvalidParameterException
    | LayerAlreadyExistsException
    | LayerPartTooSmallException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | UploadNotFoundException
    | CommonAwsError
  >;
  createRepository(
    input: CreateRepositoryRequest,
  ): Effect.Effect<
    CreateRepositoryResponse,
    | InvalidParameterException
    | InvalidTagParameterException
    | LimitExceededException
    | RepositoryAlreadyExistsException
    | ServerException
    | TooManyTagsException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  deleteRepository(
    input: DeleteRepositoryRequest,
  ): Effect.Effect<
    DeleteRepositoryResponse,
    | InvalidParameterException
    | RepositoryNotEmptyException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  deleteRepositoryPolicy(
    input: DeleteRepositoryPolicyRequest,
  ): Effect.Effect<
    DeleteRepositoryPolicyResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | RepositoryPolicyNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  describeImages(
    input: DescribeImagesRequest,
  ): Effect.Effect<
    DescribeImagesResponse,
    | ImageNotFoundException
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  describeImageTags(
    input: DescribeImageTagsRequest,
  ): Effect.Effect<
    DescribeImageTagsResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  describeRegistries(
    input: DescribeRegistriesRequest,
  ): Effect.Effect<
    DescribeRegistriesResponse,
    | InvalidParameterException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  describeRepositories(
    input: DescribeRepositoriesRequest,
  ): Effect.Effect<
    DescribeRepositoriesResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  getAuthorizationToken(
    input: GetAuthorizationTokenRequest,
  ): Effect.Effect<
    GetAuthorizationTokenResponse,
    | InvalidParameterException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  getRegistryCatalogData(
    input: GetRegistryCatalogDataRequest,
  ): Effect.Effect<
    GetRegistryCatalogDataResponse,
    ServerException | UnsupportedCommandException | CommonAwsError
  >;
  getRepositoryCatalogData(
    input: GetRepositoryCatalogDataRequest,
  ): Effect.Effect<
    GetRepositoryCatalogDataResponse,
    | InvalidParameterException
    | RepositoryCatalogDataNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  getRepositoryPolicy(
    input: GetRepositoryPolicyRequest,
  ): Effect.Effect<
    GetRepositoryPolicyResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | RepositoryPolicyNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  initiateLayerUpload(
    input: InitiateLayerUploadRequest,
  ): Effect.Effect<
    InitiateLayerUploadResponse,
    | InvalidParameterException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  putImage(
    input: PutImageRequest,
  ): Effect.Effect<
    PutImageResponse,
    | ImageAlreadyExistsException
    | ImageDigestDoesNotMatchException
    | ImageTagAlreadyExistsException
    | InvalidParameterException
    | LayersNotFoundException
    | LimitExceededException
    | ReferencedImagesNotFoundException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  putRegistryCatalogData(
    input: PutRegistryCatalogDataRequest,
  ): Effect.Effect<
    PutRegistryCatalogDataResponse,
    | InvalidParameterException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  putRepositoryCatalogData(
    input: PutRepositoryCatalogDataRequest,
  ): Effect.Effect<
    PutRepositoryCatalogDataResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  setRepositoryPolicy(
    input: SetRepositoryPolicyRequest,
  ): Effect.Effect<
    SetRepositoryPolicyResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidParameterException
    | InvalidTagParameterException
    | RepositoryNotFoundException
    | ServerException
    | TooManyTagsException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InvalidParameterException
    | InvalidTagParameterException
    | RepositoryNotFoundException
    | ServerException
    | TooManyTagsException
    | UnsupportedCommandException
    | CommonAwsError
  >;
  uploadLayerPart(
    input: UploadLayerPartRequest,
  ): Effect.Effect<
    UploadLayerPartResponse,
    | InvalidLayerPartException
    | InvalidParameterException
    | LimitExceededException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | UploadNotFoundException
    | CommonAwsError
  >;
}

export declare class EcrPublic extends ECRPUBLIC {}

export type AboutText = string;

export type Architecture = string;

export type ArchitectureList = Array<string>;
export type Arn = string;

export interface AuthorizationData {
  authorizationToken?: string;
  expiresAt?: Date | string;
}
export type Base64 = string;

export interface BatchCheckLayerAvailabilityRequest {
  registryId?: string;
  repositoryName: string;
  layerDigests: Array<string>;
}
export interface BatchCheckLayerAvailabilityResponse {
  layers?: Array<Layer>;
  failures?: Array<LayerFailure>;
}
export interface BatchDeleteImageRequest {
  registryId?: string;
  repositoryName: string;
  imageIds: Array<ImageIdentifier>;
}
export interface BatchDeleteImageResponse {
  imageIds?: Array<ImageIdentifier>;
  failures?: Array<ImageFailure>;
}
export type BatchedOperationLayerDigest = string;

export type BatchedOperationLayerDigestList = Array<string>;
export interface CompleteLayerUploadRequest {
  registryId?: string;
  repositoryName: string;
  uploadId: string;
  layerDigests: Array<string>;
}
export interface CompleteLayerUploadResponse {
  registryId?: string;
  repositoryName?: string;
  uploadId?: string;
  layerDigest?: string;
}
export interface CreateRepositoryRequest {
  repositoryName: string;
  catalogData?: RepositoryCatalogDataInput;
  tags?: Array<Tag>;
}
export interface CreateRepositoryResponse {
  repository?: Repository;
  catalogData?: RepositoryCatalogData;
}
export type CreationTimestamp = Date | string;

export type DefaultRegistryAliasFlag = boolean;

export interface DeleteRepositoryPolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export interface DeleteRepositoryPolicyResponse {
  registryId?: string;
  repositoryName?: string;
  policyText?: string;
}
export interface DeleteRepositoryRequest {
  registryId?: string;
  repositoryName: string;
  force?: boolean;
}
export interface DeleteRepositoryResponse {
  repository?: Repository;
}
export interface DescribeImagesRequest {
  registryId?: string;
  repositoryName: string;
  imageIds?: Array<ImageIdentifier>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeImagesResponse {
  imageDetails?: Array<ImageDetail>;
  nextToken?: string;
}
export interface DescribeImageTagsRequest {
  registryId?: string;
  repositoryName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeImageTagsResponse {
  imageTagDetails?: Array<ImageTagDetail>;
  nextToken?: string;
}
export interface DescribeRegistriesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeRegistriesResponse {
  registries: Array<Registry>;
  nextToken?: string;
}
export interface DescribeRepositoriesRequest {
  registryId?: string;
  repositoryNames?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeRepositoriesResponse {
  repositories?: Array<Repository>;
  nextToken?: string;
}
export declare class EmptyUploadException extends EffectData.TaggedError(
  "EmptyUploadException",
)<{
  readonly message?: string;
}> {}
export type ExceptionMessage = string;

export type ExpirationTimestamp = Date | string;

export type ForceFlag = boolean;

export interface GetAuthorizationTokenRequest {}
export interface GetAuthorizationTokenResponse {
  authorizationData?: AuthorizationData;
}
export interface GetRegistryCatalogDataRequest {}
export interface GetRegistryCatalogDataResponse {
  registryCatalogData: RegistryCatalogData;
}
export interface GetRepositoryCatalogDataRequest {
  registryId?: string;
  repositoryName: string;
}
export interface GetRepositoryCatalogDataResponse {
  catalogData?: RepositoryCatalogData;
}
export interface GetRepositoryPolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export interface GetRepositoryPolicyResponse {
  registryId?: string;
  repositoryName?: string;
  policyText?: string;
}
export interface Image {
  registryId?: string;
  repositoryName?: string;
  imageId?: ImageIdentifier;
  imageManifest?: string;
  imageManifestMediaType?: string;
}
export declare class ImageAlreadyExistsException extends EffectData.TaggedError(
  "ImageAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export interface ImageDetail {
  registryId?: string;
  repositoryName?: string;
  imageDigest?: string;
  imageTags?: Array<string>;
  imageSizeInBytes?: number;
  imagePushedAt?: Date | string;
  imageManifestMediaType?: string;
  artifactMediaType?: string;
}
export type ImageDetailList = Array<ImageDetail>;
export type ImageDigest = string;

export declare class ImageDigestDoesNotMatchException extends EffectData.TaggedError(
  "ImageDigestDoesNotMatchException",
)<{
  readonly message?: string;
}> {}
export interface ImageFailure {
  imageId?: ImageIdentifier;
  failureCode?: ImageFailureCode;
  failureReason?: string;
}
export type ImageFailureCode =
  | "InvalidImageDigest"
  | "InvalidImageTag"
  | "ImageTagDoesNotMatchDigest"
  | "ImageNotFound"
  | "MissingDigestAndTag"
  | "ImageReferencedByManifestList"
  | "KmsError";
export type ImageFailureList = Array<ImageFailure>;
export type ImageFailureReason = string;

export interface ImageIdentifier {
  imageDigest?: string;
  imageTag?: string;
}
export type ImageIdentifierList = Array<ImageIdentifier>;
export type ImageManifest = string;

export declare class ImageNotFoundException extends EffectData.TaggedError(
  "ImageNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ImageSizeInBytes = number;

export type ImageTag = string;

export declare class ImageTagAlreadyExistsException extends EffectData.TaggedError(
  "ImageTagAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export interface ImageTagDetail {
  imageTag?: string;
  createdAt?: Date | string;
  imageDetail?: ReferencedImageDetail;
}
export type ImageTagDetailList = Array<ImageTagDetail>;
export type ImageTagList = Array<string>;
export interface InitiateLayerUploadRequest {
  registryId?: string;
  repositoryName: string;
}
export interface InitiateLayerUploadResponse {
  uploadId?: string;
  partSize?: number;
}
export declare class InvalidLayerException extends EffectData.TaggedError(
  "InvalidLayerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidLayerPartException extends EffectData.TaggedError(
  "InvalidLayerPartException",
)<{
  readonly registryId?: string;
  readonly repositoryName?: string;
  readonly uploadId?: string;
  readonly lastValidByteReceived?: number;
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagParameterException extends EffectData.TaggedError(
  "InvalidTagParameterException",
)<{
  readonly message?: string;
}> {}
export interface Layer {
  layerDigest?: string;
  layerAvailability?: LayerAvailability;
  layerSize?: number;
  mediaType?: string;
}
export declare class LayerAlreadyExistsException extends EffectData.TaggedError(
  "LayerAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type LayerAvailability = "AVAILABLE" | "UNAVAILABLE";
export type LayerDigest = string;

export type LayerDigestList = Array<string>;
export interface LayerFailure {
  layerDigest?: string;
  failureCode?: LayerFailureCode;
  failureReason?: string;
}
export type LayerFailureCode = "InvalidLayerDigest" | "MissingLayerDigest";
export type LayerFailureList = Array<LayerFailure>;
export type LayerFailureReason = string;

export type LayerList = Array<Layer>;
export type LayerPartBlob = Uint8Array | string;

export declare class LayerPartTooSmallException extends EffectData.TaggedError(
  "LayerPartTooSmallException",
)<{
  readonly message?: string;
}> {}
export type LayerSizeInBytes = number;

export declare class LayersNotFoundException extends EffectData.TaggedError(
  "LayersNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export type LogoImageBlob = Uint8Array | string;

export type MarketplaceCertified = boolean;

export type MaxResults = number;

export type MediaType = string;

export type NextToken = string;

export type OperatingSystem = string;

export type OperatingSystemList = Array<string>;
export type PartSize = number;

export type PrimaryRegistryAliasFlag = boolean;

export type PushTimestamp = Date | string;

export interface PutImageRequest {
  registryId?: string;
  repositoryName: string;
  imageManifest: string;
  imageManifestMediaType?: string;
  imageTag?: string;
  imageDigest?: string;
}
export interface PutImageResponse {
  image?: Image;
}
export interface PutRegistryCatalogDataRequest {
  displayName?: string;
}
export interface PutRegistryCatalogDataResponse {
  registryCatalogData: RegistryCatalogData;
}
export interface PutRepositoryCatalogDataRequest {
  registryId?: string;
  repositoryName: string;
  catalogData: RepositoryCatalogDataInput;
}
export interface PutRepositoryCatalogDataResponse {
  catalogData?: RepositoryCatalogData;
}
export interface ReferencedImageDetail {
  imageDigest?: string;
  imageSizeInBytes?: number;
  imagePushedAt?: Date | string;
  imageManifestMediaType?: string;
  artifactMediaType?: string;
}
export declare class ReferencedImagesNotFoundException extends EffectData.TaggedError(
  "ReferencedImagesNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface Registry {
  registryId: string;
  registryArn: string;
  registryUri: string;
  verified: boolean;
  aliases: Array<RegistryAlias>;
}
export interface RegistryAlias {
  name: string;
  status: RegistryAliasStatus;
  primaryRegistryAlias: boolean;
  defaultRegistryAlias: boolean;
}
export type RegistryAliasList = Array<RegistryAlias>;
export type RegistryAliasName = string;

export type RegistryAliasStatus = "ACTIVE" | "PENDING" | "REJECTED";
export interface RegistryCatalogData {
  displayName?: string;
}
export type RegistryDisplayName = string;

export type RegistryId = string;

export type RegistryIdOrAlias = string;

export type RegistryList = Array<Registry>;
export declare class RegistryNotFoundException extends EffectData.TaggedError(
  "RegistryNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RegistryVerified = boolean;

export interface Repository {
  repositoryArn?: string;
  registryId?: string;
  repositoryName?: string;
  repositoryUri?: string;
  createdAt?: Date | string;
}
export declare class RepositoryAlreadyExistsException extends EffectData.TaggedError(
  "RepositoryAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export interface RepositoryCatalogData {
  description?: string;
  architectures?: Array<string>;
  operatingSystems?: Array<string>;
  logoUrl?: string;
  aboutText?: string;
  usageText?: string;
  marketplaceCertified?: boolean;
}
export interface RepositoryCatalogDataInput {
  description?: string;
  architectures?: Array<string>;
  operatingSystems?: Array<string>;
  logoImageBlob?: Uint8Array | string;
  aboutText?: string;
  usageText?: string;
}
export declare class RepositoryCatalogDataNotFoundException extends EffectData.TaggedError(
  "RepositoryCatalogDataNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RepositoryDescription = string;

export type RepositoryList = Array<Repository>;
export type RepositoryName = string;

export type RepositoryNameList = Array<string>;
export declare class RepositoryNotEmptyException extends EffectData.TaggedError(
  "RepositoryNotEmptyException",
)<{
  readonly message?: string;
}> {}
export declare class RepositoryNotFoundException extends EffectData.TaggedError(
  "RepositoryNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class RepositoryPolicyNotFoundException extends EffectData.TaggedError(
  "RepositoryPolicyNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RepositoryPolicyText = string;

export type ResourceUrl = string;

export declare class ServerException extends EffectData.TaggedError(
  "ServerException",
)<{
  readonly message?: string;
}> {}
export interface SetRepositoryPolicyRequest {
  registryId?: string;
  repositoryName: string;
  policyText: string;
  force?: boolean;
}
export interface SetRepositoryPolicyResponse {
  registryId?: string;
  repositoryName?: string;
  policyText?: string;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedCommandException extends EffectData.TaggedError(
  "UnsupportedCommandException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UploadId = string;

export interface UploadLayerPartRequest {
  registryId?: string;
  repositoryName: string;
  uploadId: string;
  partFirstByte: number;
  partLastByte: number;
  layerPartBlob: Uint8Array | string;
}
export interface UploadLayerPartResponse {
  registryId?: string;
  repositoryName?: string;
  uploadId?: string;
  lastByteReceived?: number;
}
export declare class UploadNotFoundException extends EffectData.TaggedError(
  "UploadNotFoundException",
)<{
  readonly message?: string;
}> {}
export type Url = string;

export type UsageText = string;

export declare namespace BatchCheckLayerAvailability {
  export type Input = BatchCheckLayerAvailabilityRequest;
  export type Output = BatchCheckLayerAvailabilityResponse;
  export type Error =
    | InvalidParameterException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace BatchDeleteImage {
  export type Input = BatchDeleteImageRequest;
  export type Output = BatchDeleteImageResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace CompleteLayerUpload {
  export type Input = CompleteLayerUploadRequest;
  export type Output = CompleteLayerUploadResponse;
  export type Error =
    | EmptyUploadException
    | InvalidLayerException
    | InvalidParameterException
    | LayerAlreadyExistsException
    | LayerPartTooSmallException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | UploadNotFoundException
    | CommonAwsError;
}

export declare namespace CreateRepository {
  export type Input = CreateRepositoryRequest;
  export type Output = CreateRepositoryResponse;
  export type Error =
    | InvalidParameterException
    | InvalidTagParameterException
    | LimitExceededException
    | RepositoryAlreadyExistsException
    | ServerException
    | TooManyTagsException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace DeleteRepository {
  export type Input = DeleteRepositoryRequest;
  export type Output = DeleteRepositoryResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotEmptyException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace DeleteRepositoryPolicy {
  export type Input = DeleteRepositoryPolicyRequest;
  export type Output = DeleteRepositoryPolicyResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | RepositoryPolicyNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace DescribeImages {
  export type Input = DescribeImagesRequest;
  export type Output = DescribeImagesResponse;
  export type Error =
    | ImageNotFoundException
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace DescribeImageTags {
  export type Input = DescribeImageTagsRequest;
  export type Output = DescribeImageTagsResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace DescribeRegistries {
  export type Input = DescribeRegistriesRequest;
  export type Output = DescribeRegistriesResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace DescribeRepositories {
  export type Input = DescribeRepositoriesRequest;
  export type Output = DescribeRepositoriesResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace GetAuthorizationToken {
  export type Input = GetAuthorizationTokenRequest;
  export type Output = GetAuthorizationTokenResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace GetRegistryCatalogData {
  export type Input = GetRegistryCatalogDataRequest;
  export type Output = GetRegistryCatalogDataResponse;
  export type Error =
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace GetRepositoryCatalogData {
  export type Input = GetRepositoryCatalogDataRequest;
  export type Output = GetRepositoryCatalogDataResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryCatalogDataNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace GetRepositoryPolicy {
  export type Input = GetRepositoryPolicyRequest;
  export type Output = GetRepositoryPolicyResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | RepositoryPolicyNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace InitiateLayerUpload {
  export type Input = InitiateLayerUploadRequest;
  export type Output = InitiateLayerUploadResponse;
  export type Error =
    | InvalidParameterException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace PutImage {
  export type Input = PutImageRequest;
  export type Output = PutImageResponse;
  export type Error =
    | ImageAlreadyExistsException
    | ImageDigestDoesNotMatchException
    | ImageTagAlreadyExistsException
    | InvalidParameterException
    | LayersNotFoundException
    | LimitExceededException
    | ReferencedImagesNotFoundException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace PutRegistryCatalogData {
  export type Input = PutRegistryCatalogDataRequest;
  export type Output = PutRegistryCatalogDataResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace PutRepositoryCatalogData {
  export type Input = PutRepositoryCatalogDataRequest;
  export type Output = PutRepositoryCatalogDataResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace SetRepositoryPolicy {
  export type Input = SetRepositoryPolicyRequest;
  export type Output = SetRepositoryPolicyResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidParameterException
    | InvalidTagParameterException
    | RepositoryNotFoundException
    | ServerException
    | TooManyTagsException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidParameterException
    | InvalidTagParameterException
    | RepositoryNotFoundException
    | ServerException
    | TooManyTagsException
    | UnsupportedCommandException
    | CommonAwsError;
}

export declare namespace UploadLayerPart {
  export type Input = UploadLayerPartRequest;
  export type Output = UploadLayerPartResponse;
  export type Error =
    | InvalidLayerPartException
    | InvalidParameterException
    | LimitExceededException
    | RegistryNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedCommandException
    | UploadNotFoundException
    | CommonAwsError;
}
