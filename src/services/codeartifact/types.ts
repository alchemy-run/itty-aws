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

export declare class codeartifact extends AWSServiceClient {
  associateExternalConnection(
    input: AssociateExternalConnectionRequest,
  ): Effect.Effect<
    AssociateExternalConnectionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  copyPackageVersions(
    input: CopyPackageVersionsRequest,
  ): Effect.Effect<
    CopyPackageVersionsResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createDomain(
    input: CreateDomainRequest,
  ): Effect.Effect<
    CreateDomainResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPackageGroup(
    input: CreatePackageGroupRequest,
  ): Effect.Effect<
    CreatePackageGroupResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createRepository(
    input: CreateRepositoryRequest,
  ): Effect.Effect<
    CreateRepositoryResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    DeleteDomainResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDomainPermissionsPolicy(
    input: DeleteDomainPermissionsPolicyRequest,
  ): Effect.Effect<
    DeleteDomainPermissionsPolicyResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePackage(
    input: DeletePackageRequest,
  ): Effect.Effect<
    DeletePackageResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePackageGroup(
    input: DeletePackageGroupRequest,
  ): Effect.Effect<
    DeletePackageGroupResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePackageVersions(
    input: DeletePackageVersionsRequest,
  ): Effect.Effect<
    DeletePackageVersionsResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRepository(
    input: DeleteRepositoryRequest,
  ): Effect.Effect<
    DeleteRepositoryResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRepositoryPermissionsPolicy(
    input: DeleteRepositoryPermissionsPolicyRequest,
  ): Effect.Effect<
    DeleteRepositoryPermissionsPolicyResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDomain(
    input: DescribeDomainRequest,
  ): Effect.Effect<
    DescribeDomainResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePackage(
    input: DescribePackageRequest,
  ): Effect.Effect<
    DescribePackageResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePackageGroup(
    input: DescribePackageGroupRequest,
  ): Effect.Effect<
    DescribePackageGroupResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describePackageVersion(
    input: DescribePackageVersionRequest,
  ): Effect.Effect<
    DescribePackageVersionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeRepository(
    input: DescribeRepositoryRequest,
  ): Effect.Effect<
    DescribeRepositoryResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disassociateExternalConnection(
    input: DisassociateExternalConnectionRequest,
  ): Effect.Effect<
    DisassociateExternalConnectionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  disposePackageVersions(
    input: DisposePackageVersionsRequest,
  ): Effect.Effect<
    DisposePackageVersionsResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAssociatedPackageGroup(
    input: GetAssociatedPackageGroupRequest,
  ): Effect.Effect<
    GetAssociatedPackageGroupResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getAuthorizationToken(
    input: GetAuthorizationTokenRequest,
  ): Effect.Effect<
    GetAuthorizationTokenResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDomainPermissionsPolicy(
    input: GetDomainPermissionsPolicyRequest,
  ): Effect.Effect<
    GetDomainPermissionsPolicyResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPackageVersionAsset(
    input: GetPackageVersionAssetRequest,
  ): Effect.Effect<
    GetPackageVersionAssetResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPackageVersionReadme(
    input: GetPackageVersionReadmeRequest,
  ): Effect.Effect<
    GetPackageVersionReadmeResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRepositoryEndpoint(
    input: GetRepositoryEndpointRequest,
  ): Effect.Effect<
    GetRepositoryEndpointResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getRepositoryPermissionsPolicy(
    input: GetRepositoryPermissionsPolicyRequest,
  ): Effect.Effect<
    GetRepositoryPermissionsPolicyResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAllowedRepositoriesForGroup(
    input: ListAllowedRepositoriesForGroupRequest,
  ): Effect.Effect<
    ListAllowedRepositoriesForGroupResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listAssociatedPackages(
    input: ListAssociatedPackagesRequest,
  ): Effect.Effect<
    ListAssociatedPackagesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listDomains(
    input: ListDomainsRequest,
  ): Effect.Effect<
    ListDomainsResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPackageGroups(
    input: ListPackageGroupsRequest,
  ): Effect.Effect<
    ListPackageGroupsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPackages(
    input: ListPackagesRequest,
  ): Effect.Effect<
    ListPackagesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPackageVersionAssets(
    input: ListPackageVersionAssetsRequest,
  ): Effect.Effect<
    ListPackageVersionAssetsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPackageVersionDependencies(
    input: ListPackageVersionDependenciesRequest,
  ): Effect.Effect<
    ListPackageVersionDependenciesResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPackageVersions(
    input: ListPackageVersionsRequest,
  ): Effect.Effect<
    ListPackageVersionsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRepositories(
    input: ListRepositoriesRequest,
  ): Effect.Effect<
    ListRepositoriesResult,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listRepositoriesInDomain(
    input: ListRepositoriesInDomainRequest,
  ): Effect.Effect<
    ListRepositoriesInDomainResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSubPackageGroups(
    input: ListSubPackageGroupsRequest,
  ): Effect.Effect<
    ListSubPackageGroupsResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResult,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  publishPackageVersion(
    input: PublishPackageVersionRequest,
  ): Effect.Effect<
    PublishPackageVersionResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putDomainPermissionsPolicy(
    input: PutDomainPermissionsPolicyRequest,
  ): Effect.Effect<
    PutDomainPermissionsPolicyResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putPackageOriginConfiguration(
    input: PutPackageOriginConfigurationRequest,
  ): Effect.Effect<
    PutPackageOriginConfigurationResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putRepositoryPermissionsPolicy(
    input: PutRepositoryPermissionsPolicyRequest,
  ): Effect.Effect<
    PutRepositoryPermissionsPolicyResult,
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
    TagResourceResult,
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResult,
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePackageGroup(
    input: UpdatePackageGroupRequest,
  ): Effect.Effect<
    UpdatePackageGroupResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePackageGroupOriginConfiguration(
    input: UpdatePackageGroupOriginConfigurationRequest,
  ): Effect.Effect<
    UpdatePackageGroupOriginConfigurationResult,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePackageVersionsStatus(
    input: UpdatePackageVersionsStatusRequest,
  ): Effect.Effect<
    UpdatePackageVersionsStatusResult,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateRepository(
    input: UpdateRepositoryRequest,
  ): Effect.Effect<
    UpdateRepositoryResult,
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

export declare class Codeartifact extends codeartifact {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountId = string;

export type AllowPublish = "ALLOW" | "BLOCK";
export type AllowUpstream = "ALLOW" | "BLOCK";
export type Arn = string;

export type Asset = Uint8Array | string;

export type AssetHashes = Record<HashAlgorithm, string>;
export type AssetName = string;

export interface AssetSummary {
  name: string;
  size?: number;
  hashes?: { [key in HashAlgorithm]?: string };
}
export type AssetSummaryList = Array<AssetSummary>;
export interface AssociatedPackage {
  format?: PackageFormat;
  namespace?: string;
  package?: string;
  associationType?: PackageGroupAssociationType;
}
export type AssociatedPackageList = Array<AssociatedPackage>;
export interface AssociateExternalConnectionRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  externalConnection: string;
}
export interface AssociateExternalConnectionResult {
  repository?: RepositoryDescription;
}
export type AuthorizationTokenDurationSeconds = number;

export type BooleanOptional = boolean;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: ResourceType;
}> {}
export interface CopyPackageVersionsRequest {
  domain: string;
  domainOwner?: string;
  sourceRepository: string;
  destinationRepository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  versions?: Array<string>;
  versionRevisions?: Record<string, string>;
  allowOverwrite?: boolean;
  includeFromUpstream?: boolean;
}
export interface CopyPackageVersionsResult {
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo>;
  failedVersions?: Record<string, PackageVersionError>;
}
export interface CreateDomainRequest {
  domain: string;
  encryptionKey?: string;
  tags?: Array<Tag>;
}
export interface CreateDomainResult {
  domain?: DomainDescription;
}
export interface CreatePackageGroupRequest {
  domain: string;
  domainOwner?: string;
  packageGroup: string;
  contactInfo?: string;
  description?: string;
  tags?: Array<Tag>;
}
export interface CreatePackageGroupResult {
  packageGroup?: PackageGroupDescription;
}
export interface CreateRepositoryRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  description?: string;
  upstreams?: Array<UpstreamRepository>;
  tags?: Array<Tag>;
}
export interface CreateRepositoryResult {
  repository?: RepositoryDescription;
}
export interface DeleteDomainPermissionsPolicyRequest {
  domain: string;
  domainOwner?: string;
  policyRevision?: string;
}
export interface DeleteDomainPermissionsPolicyResult {
  policy?: ResourcePolicy;
}
export interface DeleteDomainRequest {
  domain: string;
  domainOwner?: string;
}
export interface DeleteDomainResult {
  domain?: DomainDescription;
}
export interface DeletePackageGroupRequest {
  domain: string;
  domainOwner?: string;
  packageGroup: string;
}
export interface DeletePackageGroupResult {
  packageGroup?: PackageGroupDescription;
}
export interface DeletePackageRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
}
export interface DeletePackageResult {
  deletedPackage?: PackageSummary;
}
export interface DeletePackageVersionsRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  versions: Array<string>;
  expectedStatus?: PackageVersionStatus;
}
export interface DeletePackageVersionsResult {
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo>;
  failedVersions?: Record<string, PackageVersionError>;
}
export interface DeleteRepositoryPermissionsPolicyRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  policyRevision?: string;
}
export interface DeleteRepositoryPermissionsPolicyResult {
  policy?: ResourcePolicy;
}
export interface DeleteRepositoryRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
}
export interface DeleteRepositoryResult {
  repository?: RepositoryDescription;
}
export interface DescribeDomainRequest {
  domain: string;
  domainOwner?: string;
}
export interface DescribeDomainResult {
  domain?: DomainDescription;
}
export interface DescribePackageGroupRequest {
  domain: string;
  domainOwner?: string;
  packageGroup: string;
}
export interface DescribePackageGroupResult {
  packageGroup?: PackageGroupDescription;
}
export interface DescribePackageRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
}
export interface DescribePackageResult {
  package: PackageDescription;
}
export interface DescribePackageVersionRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  packageVersion: string;
}
export interface DescribePackageVersionResult {
  packageVersion: PackageVersionDescription;
}
export interface DescribeRepositoryRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
}
export interface DescribeRepositoryResult {
  repository?: RepositoryDescription;
}
export type Description = string;

export interface DisassociateExternalConnectionRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  externalConnection: string;
}
export interface DisassociateExternalConnectionResult {
  repository?: RepositoryDescription;
}
export interface DisposePackageVersionsRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  versions: Array<string>;
  versionRevisions?: Record<string, string>;
  expectedStatus?: PackageVersionStatus;
}
export interface DisposePackageVersionsResult {
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo>;
  failedVersions?: Record<string, PackageVersionError>;
}
export interface DomainDescription {
  name?: string;
  owner?: string;
  arn?: string;
  status?: DomainStatus;
  createdTime?: Date | string;
  encryptionKey?: string;
  repositoryCount?: number;
  assetSizeBytes?: number;
  s3BucketArn?: string;
}
export interface DomainEntryPoint {
  repositoryName?: string;
  externalConnectionName?: string;
}
export type DomainName = string;

export type DomainStatus = "Active" | "Deleted";
export interface DomainSummary {
  name?: string;
  owner?: string;
  arn?: string;
  status?: DomainStatus;
  createdTime?: Date | string;
  encryptionKey?: string;
}
export type DomainSummaryList = Array<DomainSummary>;
export type EndpointType = "dualstack" | "ipv4";
export type ErrorMessage = string;

export type ExternalConnectionName = string;

export type ExternalConnectionStatus = "Available";
export interface GetAssociatedPackageGroupRequest {
  domain: string;
  domainOwner?: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
}
export interface GetAssociatedPackageGroupResult {
  packageGroup?: PackageGroupDescription;
  associationType?: PackageGroupAssociationType;
}
export interface GetAuthorizationTokenRequest {
  domain: string;
  domainOwner?: string;
  durationSeconds?: number;
}
export interface GetAuthorizationTokenResult {
  authorizationToken?: string;
  expiration?: Date | string;
}
export interface GetDomainPermissionsPolicyRequest {
  domain: string;
  domainOwner?: string;
}
export interface GetDomainPermissionsPolicyResult {
  policy?: ResourcePolicy;
}
export interface GetPackageVersionAssetRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  packageVersion: string;
  asset: string;
  packageVersionRevision?: string;
}
export interface GetPackageVersionAssetResult {
  asset?: Uint8Array | string;
  assetName?: string;
  packageVersion?: string;
  packageVersionRevision?: string;
}
export interface GetPackageVersionReadmeRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  packageVersion: string;
}
export interface GetPackageVersionReadmeResult {
  format?: PackageFormat;
  namespace?: string;
  package?: string;
  version?: string;
  versionRevision?: string;
  readme?: string;
}
export interface GetRepositoryEndpointRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  endpointType?: EndpointType;
}
export interface GetRepositoryEndpointResult {
  repositoryEndpoint?: string;
}
export interface GetRepositoryPermissionsPolicyRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
}
export interface GetRepositoryPermissionsPolicyResult {
  policy?: ResourcePolicy;
}
export type HashAlgorithm = "MD5" | "SHA-1" | "SHA-256" | "SHA-512";
export type HashValue = string;

export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface LicenseInfo {
  name?: string;
  url?: string;
}
export type LicenseInfoList = Array<LicenseInfo>;
export type ListAllowedRepositoriesForGroupMaxResults = number;

export interface ListAllowedRepositoriesForGroupRequest {
  domain: string;
  domainOwner?: string;
  packageGroup: string;
  originRestrictionType: PackageGroupOriginRestrictionType;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAllowedRepositoriesForGroupResult {
  allowedRepositories?: Array<string>;
  nextToken?: string;
}
export interface ListAssociatedPackagesRequest {
  domain: string;
  domainOwner?: string;
  packageGroup: string;
  maxResults?: number;
  nextToken?: string;
  preview?: boolean;
}
export interface ListAssociatedPackagesResult {
  packages?: Array<AssociatedPackage>;
  nextToken?: string;
}
export type ListDomainsMaxResults = number;

export interface ListDomainsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListDomainsResult {
  domains?: Array<DomainSummary>;
  nextToken?: string;
}
export type ListPackageGroupsMaxResults = number;

export interface ListPackageGroupsRequest {
  domain: string;
  domainOwner?: string;
  maxResults?: number;
  nextToken?: string;
  prefix?: string;
}
export interface ListPackageGroupsResult {
  packageGroups?: Array<PackageGroupSummary>;
  nextToken?: string;
}
export type ListPackagesMaxResults = number;

export interface ListPackagesRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format?: PackageFormat;
  namespace?: string;
  packagePrefix?: string;
  maxResults?: number;
  nextToken?: string;
  publish?: AllowPublish;
  upstream?: AllowUpstream;
}
export interface ListPackagesResult {
  packages?: Array<PackageSummary>;
  nextToken?: string;
}
export type ListPackageVersionAssetsMaxResults = number;

export interface ListPackageVersionAssetsRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  packageVersion: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListPackageVersionAssetsResult {
  format?: PackageFormat;
  namespace?: string;
  package?: string;
  version?: string;
  versionRevision?: string;
  nextToken?: string;
  assets?: Array<AssetSummary>;
}
export interface ListPackageVersionDependenciesRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  packageVersion: string;
  nextToken?: string;
}
export interface ListPackageVersionDependenciesResult {
  format?: PackageFormat;
  namespace?: string;
  package?: string;
  version?: string;
  versionRevision?: string;
  nextToken?: string;
  dependencies?: Array<PackageDependency>;
}
export type ListPackageVersionsMaxResults = number;

export interface ListPackageVersionsRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  status?: PackageVersionStatus;
  sortBy?: PackageVersionSortType;
  maxResults?: number;
  nextToken?: string;
  originType?: PackageVersionOriginType;
}
export interface ListPackageVersionsResult {
  defaultDisplayVersion?: string;
  format?: PackageFormat;
  namespace?: string;
  package?: string;
  versions?: Array<PackageVersionSummary>;
  nextToken?: string;
}
export type ListRepositoriesInDomainMaxResults = number;

export interface ListRepositoriesInDomainRequest {
  domain: string;
  domainOwner?: string;
  administratorAccount?: string;
  repositoryPrefix?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRepositoriesInDomainResult {
  repositories?: Array<RepositorySummary>;
  nextToken?: string;
}
export type ListRepositoriesMaxResults = number;

export interface ListRepositoriesRequest {
  repositoryPrefix?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListRepositoriesResult {
  repositories?: Array<RepositorySummary>;
  nextToken?: string;
}
export interface ListSubPackageGroupsRequest {
  domain: string;
  domainOwner?: string;
  packageGroup: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSubPackageGroupsResult {
  packageGroups?: Array<PackageGroupSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResult {
  tags?: Array<Tag>;
}
export type Long = number;

export type LongOptional = number;

export type OriginRestrictions = Record<
  PackageGroupOriginRestrictionType,
  PackageGroupOriginRestrictionMode
>;
export interface PackageDependency {
  namespace?: string;
  package?: string;
  dependencyType?: string;
  versionRequirement?: string;
}
export type PackageDependencyList = Array<PackageDependency>;
export interface PackageDescription {
  format?: PackageFormat;
  namespace?: string;
  name?: string;
  originConfiguration?: PackageOriginConfiguration;
}
export type PackageFormat =
  | "npm"
  | "pypi"
  | "maven"
  | "nuget"
  | "generic"
  | "ruby"
  | "swift"
  | "cargo";
export interface PackageGroupAllowedRepository {
  repositoryName?: string;
  originRestrictionType?: PackageGroupOriginRestrictionType;
}
export type PackageGroupAllowedRepositoryList =
  Array<PackageGroupAllowedRepository>;
export type PackageGroupAllowedRepositoryUpdate = Record<
  PackageGroupAllowedRepositoryUpdateType,
  Array<string>
>;
export type PackageGroupAllowedRepositoryUpdates = Record<
  PackageGroupOriginRestrictionType,
  { [key in PackageGroupAllowedRepositoryUpdateType]?: string }
>;
export type PackageGroupAllowedRepositoryUpdateType = "ADDED" | "REMOVED";
export type PackageGroupAssociationType = "STRONG" | "WEAK";
export type PackageGroupContactInfo = string;

export interface PackageGroupDescription {
  arn?: string;
  pattern?: string;
  domainName?: string;
  domainOwner?: string;
  createdTime?: Date | string;
  contactInfo?: string;
  description?: string;
  originConfiguration?: PackageGroupOriginConfiguration;
  parent?: PackageGroupReference;
}
export interface PackageGroupOriginConfiguration {
  restrictions?: { [key in PackageGroupOriginRestrictionType]?: string };
}
export interface PackageGroupOriginRestriction {
  mode?: PackageGroupOriginRestrictionMode;
  effectiveMode?: PackageGroupOriginRestrictionMode;
  inheritedFrom?: PackageGroupReference;
  repositoriesCount?: number;
}
export type PackageGroupOriginRestrictionMode =
  | "ALLOW"
  | "ALLOW_SPECIFIC_REPOSITORIES"
  | "BLOCK"
  | "INHERIT";
export type PackageGroupOriginRestrictions = Record<
  PackageGroupOriginRestrictionType,
  PackageGroupOriginRestriction
>;
export type PackageGroupOriginRestrictionType =
  | "EXTERNAL_UPSTREAM"
  | "INTERNAL_UPSTREAM"
  | "PUBLISH";
export type PackageGroupPattern = string;

export type PackageGroupPatternPrefix = string;

export interface PackageGroupReference {
  arn?: string;
  pattern?: string;
}
export interface PackageGroupSummary {
  arn?: string;
  pattern?: string;
  domainName?: string;
  domainOwner?: string;
  createdTime?: Date | string;
  contactInfo?: string;
  description?: string;
  originConfiguration?: PackageGroupOriginConfiguration;
  parent?: PackageGroupReference;
}
export type PackageGroupSummaryList = Array<PackageGroupSummary>;
export type PackageName = string;

export type PackageNamespace = string;

export interface PackageOriginConfiguration {
  restrictions?: PackageOriginRestrictions;
}
export interface PackageOriginRestrictions {
  publish: AllowPublish;
  upstream: AllowUpstream;
}
export interface PackageSummary {
  format?: PackageFormat;
  namespace?: string;
  package?: string;
  originConfiguration?: PackageOriginConfiguration;
}
export type PackageSummaryList = Array<PackageSummary>;
export type PackageVersion = string;

export interface PackageVersionDescription {
  format?: PackageFormat;
  namespace?: string;
  packageName?: string;
  displayName?: string;
  version?: string;
  summary?: string;
  homePage?: string;
  sourceCodeRepository?: string;
  publishedTime?: Date | string;
  licenses?: Array<LicenseInfo>;
  revision?: string;
  status?: PackageVersionStatus;
  origin?: PackageVersionOrigin;
}
export interface PackageVersionError {
  errorCode?: PackageVersionErrorCode;
  errorMessage?: string;
}
export type PackageVersionErrorCode =
  | "ALREADY_EXISTS"
  | "MISMATCHED_REVISION"
  | "MISMATCHED_STATUS"
  | "NOT_ALLOWED"
  | "NOT_FOUND"
  | "SKIPPED";
export type PackageVersionErrorMap = Record<string, PackageVersionError>;
export type PackageVersionList = Array<string>;
export interface PackageVersionOrigin {
  domainEntryPoint?: DomainEntryPoint;
  originType?: PackageVersionOriginType;
}
export type PackageVersionOriginType = "INTERNAL" | "EXTERNAL" | "UNKNOWN";
export type PackageVersionRevision = string;

export type PackageVersionRevisionMap = Record<string, string>;
export type PackageVersionSortType = "PUBLISHED_TIME";
export type PackageVersionStatus =
  | "Published"
  | "Unfinished"
  | "Unlisted"
  | "Archived"
  | "Disposed"
  | "Deleted";
export interface PackageVersionSummary {
  version: string;
  revision?: string;
  status: PackageVersionStatus;
  origin?: PackageVersionOrigin;
}
export type PackageVersionSummaryList = Array<PackageVersionSummary>;
export type PaginationToken = string;

export type PolicyDocument = string;

export type PolicyRevision = string;

export interface PublishPackageVersionRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  packageVersion: string;
  assetContent: Uint8Array | string;
  assetName: string;
  assetSHA256: string;
  unfinished?: boolean;
}
export interface PublishPackageVersionResult {
  format?: PackageFormat;
  namespace?: string;
  package?: string;
  version?: string;
  versionRevision?: string;
  status?: PackageVersionStatus;
  asset?: AssetSummary;
}
export interface PutDomainPermissionsPolicyRequest {
  domain: string;
  domainOwner?: string;
  policyRevision?: string;
  policyDocument: string;
}
export interface PutDomainPermissionsPolicyResult {
  policy?: ResourcePolicy;
}
export interface PutPackageOriginConfigurationRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  restrictions: PackageOriginRestrictions;
}
export interface PutPackageOriginConfigurationResult {
  originConfiguration?: PackageOriginConfiguration;
}
export interface PutRepositoryPermissionsPolicyRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  policyRevision?: string;
  policyDocument: string;
}
export interface PutRepositoryPermissionsPolicyResult {
  policy?: ResourcePolicy;
}
export interface RepositoryDescription {
  name?: string;
  administratorAccount?: string;
  domainName?: string;
  domainOwner?: string;
  arn?: string;
  description?: string;
  upstreams?: Array<UpstreamRepositoryInfo>;
  externalConnections?: Array<RepositoryExternalConnectionInfo>;
  createdTime?: Date | string;
}
export interface RepositoryExternalConnectionInfo {
  externalConnectionName?: string;
  packageFormat?: PackageFormat;
  status?: ExternalConnectionStatus;
}
export type RepositoryExternalConnectionInfoList =
  Array<RepositoryExternalConnectionInfo>;
export type RepositoryName = string;

export type RepositoryNameList = Array<string>;
export interface RepositorySummary {
  name?: string;
  administratorAccount?: string;
  domainName?: string;
  domainOwner?: string;
  arn?: string;
  description?: string;
  createdTime?: Date | string;
}
export type RepositorySummaryList = Array<RepositorySummary>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: ResourceType;
}> {}
export interface ResourcePolicy {
  resourceArn?: string;
  revision?: string;
  document?: string;
}
export type ResourceType =
  | "domain"
  | "repository"
  | "package"
  | "package-version"
  | "asset";
export type RetryAfterSeconds = number;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: ResourceType;
}> {}
export type SHA256 = string;

export type CodeartifactString = string;

export type String255 = string;

export interface SuccessfulPackageVersionInfo {
  revision?: string;
  status?: PackageVersionStatus;
}
export type SuccessfulPackageVersionInfoMap = Record<
  string,
  SuccessfulPackageVersionInfo
>;
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResult {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResult {}
export interface UpdatePackageGroupOriginConfigurationRequest {
  domain: string;
  domainOwner?: string;
  packageGroup: string;
  restrictions?: { [key in PackageGroupOriginRestrictionType]?: string };
  addAllowedRepositories?: Array<PackageGroupAllowedRepository>;
  removeAllowedRepositories?: Array<PackageGroupAllowedRepository>;
}
export interface UpdatePackageGroupOriginConfigurationResult {
  packageGroup?: PackageGroupDescription;
  allowedRepositoryUpdates?: {
    [key in PackageGroupOriginRestrictionType]?: string;
  };
}
export interface UpdatePackageGroupRequest {
  domain: string;
  domainOwner?: string;
  packageGroup: string;
  contactInfo?: string;
  description?: string;
}
export interface UpdatePackageGroupResult {
  packageGroup?: PackageGroupDescription;
}
export interface UpdatePackageVersionsStatusRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  format: PackageFormat;
  namespace?: string;
  package: string;
  versions: Array<string>;
  versionRevisions?: Record<string, string>;
  expectedStatus?: PackageVersionStatus;
  targetStatus: PackageVersionStatus;
}
export interface UpdatePackageVersionsStatusResult {
  successfulVersions?: Record<string, SuccessfulPackageVersionInfo>;
  failedVersions?: Record<string, PackageVersionError>;
}
export interface UpdateRepositoryRequest {
  domain: string;
  domainOwner?: string;
  repository: string;
  description?: string;
  upstreams?: Array<UpstreamRepository>;
}
export interface UpdateRepositoryResult {
  repository?: RepositoryDescription;
}
export interface UpstreamRepository {
  repositoryName: string;
}
export interface UpstreamRepositoryInfo {
  repositoryName?: string;
}
export type UpstreamRepositoryInfoList = Array<UpstreamRepositoryInfo>;
export type UpstreamRepositoryList = Array<UpstreamRepository>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason =
  | "CANNOT_PARSE"
  | "ENCRYPTION_KEY_ERROR"
  | "FIELD_VALIDATION_FAILED"
  | "UNKNOWN_OPERATION"
  | "OTHER";
export declare namespace AssociateExternalConnection {
  export type Input = AssociateExternalConnectionRequest;
  export type Output = AssociateExternalConnectionResult;
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

export declare namespace CopyPackageVersions {
  export type Input = CopyPackageVersionsRequest;
  export type Output = CopyPackageVersionsResult;
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

export declare namespace CreateDomain {
  export type Input = CreateDomainRequest;
  export type Output = CreateDomainResult;
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

export declare namespace CreatePackageGroup {
  export type Input = CreatePackageGroupRequest;
  export type Output = CreatePackageGroupResult;
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

export declare namespace CreateRepository {
  export type Input = CreateRepositoryRequest;
  export type Output = CreateRepositoryResult;
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

export declare namespace DeleteDomain {
  export type Input = DeleteDomainRequest;
  export type Output = DeleteDomainResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDomainPermissionsPolicy {
  export type Input = DeleteDomainPermissionsPolicyRequest;
  export type Output = DeleteDomainPermissionsPolicyResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePackage {
  export type Input = DeletePackageRequest;
  export type Output = DeletePackageResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePackageGroup {
  export type Input = DeletePackageGroupRequest;
  export type Output = DeletePackageGroupResult;
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

export declare namespace DeletePackageVersions {
  export type Input = DeletePackageVersionsRequest;
  export type Output = DeletePackageVersionsResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRepository {
  export type Input = DeleteRepositoryRequest;
  export type Output = DeleteRepositoryResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRepositoryPermissionsPolicy {
  export type Input = DeleteRepositoryPermissionsPolicyRequest;
  export type Output = DeleteRepositoryPermissionsPolicyResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDomain {
  export type Input = DescribeDomainRequest;
  export type Output = DescribeDomainResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePackage {
  export type Input = DescribePackageRequest;
  export type Output = DescribePackageResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePackageGroup {
  export type Input = DescribePackageGroupRequest;
  export type Output = DescribePackageGroupResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePackageVersion {
  export type Input = DescribePackageVersionRequest;
  export type Output = DescribePackageVersionResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRepository {
  export type Input = DescribeRepositoryRequest;
  export type Output = DescribeRepositoryResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisassociateExternalConnection {
  export type Input = DisassociateExternalConnectionRequest;
  export type Output = DisassociateExternalConnectionResult;
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

export declare namespace DisposePackageVersions {
  export type Input = DisposePackageVersionsRequest;
  export type Output = DisposePackageVersionsResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAssociatedPackageGroup {
  export type Input = GetAssociatedPackageGroupRequest;
  export type Output = GetAssociatedPackageGroupResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAuthorizationToken {
  export type Input = GetAuthorizationTokenRequest;
  export type Output = GetAuthorizationTokenResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDomainPermissionsPolicy {
  export type Input = GetDomainPermissionsPolicyRequest;
  export type Output = GetDomainPermissionsPolicyResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPackageVersionAsset {
  export type Input = GetPackageVersionAssetRequest;
  export type Output = GetPackageVersionAssetResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPackageVersionReadme {
  export type Input = GetPackageVersionReadmeRequest;
  export type Output = GetPackageVersionReadmeResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRepositoryEndpoint {
  export type Input = GetRepositoryEndpointRequest;
  export type Output = GetRepositoryEndpointResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRepositoryPermissionsPolicy {
  export type Input = GetRepositoryPermissionsPolicyRequest;
  export type Output = GetRepositoryPermissionsPolicyResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAllowedRepositoriesForGroup {
  export type Input = ListAllowedRepositoriesForGroupRequest;
  export type Output = ListAllowedRepositoriesForGroupResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAssociatedPackages {
  export type Input = ListAssociatedPackagesRequest;
  export type Output = ListAssociatedPackagesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDomains {
  export type Input = ListDomainsRequest;
  export type Output = ListDomainsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackageGroups {
  export type Input = ListPackageGroupsRequest;
  export type Output = ListPackageGroupsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackages {
  export type Input = ListPackagesRequest;
  export type Output = ListPackagesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackageVersionAssets {
  export type Input = ListPackageVersionAssetsRequest;
  export type Output = ListPackageVersionAssetsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackageVersionDependencies {
  export type Input = ListPackageVersionDependenciesRequest;
  export type Output = ListPackageVersionDependenciesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackageVersions {
  export type Input = ListPackageVersionsRequest;
  export type Output = ListPackageVersionsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRepositories {
  export type Input = ListRepositoriesRequest;
  export type Output = ListRepositoriesResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRepositoriesInDomain {
  export type Input = ListRepositoriesInDomainRequest;
  export type Output = ListRepositoriesInDomainResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSubPackageGroups {
  export type Input = ListSubPackageGroupsRequest;
  export type Output = ListSubPackageGroupsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResult;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PublishPackageVersion {
  export type Input = PublishPackageVersionRequest;
  export type Output = PublishPackageVersionResult;
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

export declare namespace PutDomainPermissionsPolicy {
  export type Input = PutDomainPermissionsPolicyRequest;
  export type Output = PutDomainPermissionsPolicyResult;
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

export declare namespace PutPackageOriginConfiguration {
  export type Input = PutPackageOriginConfigurationRequest;
  export type Output = PutPackageOriginConfigurationResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRepositoryPermissionsPolicy {
  export type Input = PutRepositoryPermissionsPolicyRequest;
  export type Output = PutRepositoryPermissionsPolicyResult;
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
  export type Output = TagResourceResult;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResult;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePackageGroup {
  export type Input = UpdatePackageGroupRequest;
  export type Output = UpdatePackageGroupResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePackageGroupOriginConfiguration {
  export type Input = UpdatePackageGroupOriginConfigurationRequest;
  export type Output = UpdatePackageGroupOriginConfigurationResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePackageVersionsStatus {
  export type Input = UpdatePackageVersionsStatusRequest;
  export type Output = UpdatePackageVersionsStatusResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRepository {
  export type Input = UpdateRepositoryRequest;
  export type Output = UpdateRepositoryResult;
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

export type codeartifactErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
