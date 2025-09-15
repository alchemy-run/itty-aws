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

export declare class grafana extends AWSServiceClient {
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
  listVersions(
    input: ListVersionsRequest,
  ): Effect.Effect<
    ListVersionsResponse,
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
  associateLicense(
    input: AssociateLicenseRequest,
  ): Effect.Effect<
    AssociateLicenseResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWorkspace(
    input: CreateWorkspaceRequest,
  ): Effect.Effect<
    CreateWorkspaceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWorkspaceApiKey(
    input: CreateWorkspaceApiKeyRequest,
  ): Effect.Effect<
    CreateWorkspaceApiKeyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWorkspaceServiceAccount(
    input: CreateWorkspaceServiceAccountRequest,
  ): Effect.Effect<
    CreateWorkspaceServiceAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createWorkspaceServiceAccountToken(
    input: CreateWorkspaceServiceAccountTokenRequest,
  ): Effect.Effect<
    CreateWorkspaceServiceAccountTokenResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorkspace(
    input: DeleteWorkspaceRequest,
  ): Effect.Effect<
    DeleteWorkspaceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorkspaceApiKey(
    input: DeleteWorkspaceApiKeyRequest,
  ): Effect.Effect<
    DeleteWorkspaceApiKeyResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorkspaceServiceAccount(
    input: DeleteWorkspaceServiceAccountRequest,
  ): Effect.Effect<
    DeleteWorkspaceServiceAccountResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteWorkspaceServiceAccountToken(
    input: DeleteWorkspaceServiceAccountTokenRequest,
  ): Effect.Effect<
    DeleteWorkspaceServiceAccountTokenResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeWorkspace(
    input: DescribeWorkspaceRequest,
  ): Effect.Effect<
    DescribeWorkspaceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeWorkspaceAuthentication(
    input: DescribeWorkspaceAuthenticationRequest,
  ): Effect.Effect<
    DescribeWorkspaceAuthenticationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeWorkspaceConfiguration(
    input: DescribeWorkspaceConfigurationRequest,
  ): Effect.Effect<
    DescribeWorkspaceConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateLicense(
    input: DisassociateLicenseRequest,
  ): Effect.Effect<
    DisassociateLicenseResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPermissions(
    input: ListPermissionsRequest,
  ): Effect.Effect<
    ListPermissionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listWorkspaceServiceAccountTokens(
    input: ListWorkspaceServiceAccountTokensRequest,
  ): Effect.Effect<
    ListWorkspaceServiceAccountTokensResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listWorkspaceServiceAccounts(
    input: ListWorkspaceServiceAccountsRequest,
  ): Effect.Effect<
    ListWorkspaceServiceAccountsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listWorkspaces(
    input: ListWorkspacesRequest,
  ): Effect.Effect<
    ListWorkspacesResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError
  >;
  updatePermissions(
    input: UpdatePermissionsRequest,
  ): Effect.Effect<
    UpdatePermissionsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWorkspace(
    input: UpdateWorkspaceRequest,
  ): Effect.Effect<
    UpdateWorkspaceResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWorkspaceAuthentication(
    input: UpdateWorkspaceAuthenticationRequest,
  ): Effect.Effect<
    UpdateWorkspaceAuthenticationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateWorkspaceConfiguration(
    input: UpdateWorkspaceConfigurationRequest,
  ): Effect.Effect<
    UpdateWorkspaceConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Grafana extends grafana {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccountAccessType = string;

export type AllowedOrganization = string;

export type AllowedOrganizations = Array<string>;
export type ApiKeyName = string;

export type ApiKeyToken = string;

export type AssertionAttribute = string;

export interface AssertionAttributes {
  name?: string;
  login?: string;
  email?: string;
  groups?: string;
  role?: string;
  org?: string;
}
export interface AssociateLicenseRequest {
  workspaceId: string;
  licenseType: string;
  grafanaToken?: string;
}
export interface AssociateLicenseResponse {
  workspace: WorkspaceDescription;
}
export interface AuthenticationDescription {
  providers: Array<string>;
  saml?: SamlAuthentication;
  awsSso?: AwsSsoAuthentication;
}
export type AuthenticationProviders = Array<string>;
export type AuthenticationProviderTypes = string;

export interface AuthenticationSummary {
  providers: Array<string>;
  samlConfigurationStatus?: string;
}
export interface AwsSsoAuthentication {
  ssoClientId?: string;
}
export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateWorkspaceApiKeyRequest {
  keyName: string;
  keyRole: string;
  secondsToLive: number;
  workspaceId: string;
}
export interface CreateWorkspaceApiKeyResponse {
  keyName: string;
  key: string;
  workspaceId: string;
}
export interface CreateWorkspaceRequest {
  accountAccessType: string;
  clientToken?: string;
  organizationRoleName?: string;
  permissionType: string;
  stackSetName?: string;
  workspaceDataSources?: Array<string>;
  workspaceDescription?: string;
  workspaceName?: string;
  workspaceNotificationDestinations?: Array<string>;
  workspaceOrganizationalUnits?: Array<string>;
  workspaceRoleArn?: string;
  authenticationProviders: Array<string>;
  tags?: Record<string, string>;
  vpcConfiguration?: VpcConfiguration;
  configuration?: string;
  networkAccessControl?: NetworkAccessConfiguration;
  grafanaVersion?: string;
}
export interface CreateWorkspaceResponse {
  workspace: WorkspaceDescription;
}
export interface CreateWorkspaceServiceAccountRequest {
  name: string;
  grafanaRole: string;
  workspaceId: string;
}
export interface CreateWorkspaceServiceAccountResponse {
  id: string;
  name: string;
  grafanaRole: string;
  workspaceId: string;
}
export interface CreateWorkspaceServiceAccountTokenRequest {
  name: string;
  secondsToLive: number;
  serviceAccountId: string;
  workspaceId: string;
}
export interface CreateWorkspaceServiceAccountTokenResponse {
  serviceAccountToken: ServiceAccountTokenSummaryWithKey;
  serviceAccountId: string;
  workspaceId: string;
}
export type DataSourceType = string;

export type DataSourceTypesList = Array<string>;
export interface DeleteWorkspaceApiKeyRequest {
  keyName: string;
  workspaceId: string;
}
export interface DeleteWorkspaceApiKeyResponse {
  keyName: string;
  workspaceId: string;
}
export interface DeleteWorkspaceRequest {
  workspaceId: string;
}
export interface DeleteWorkspaceResponse {
  workspace: WorkspaceDescription;
}
export interface DeleteWorkspaceServiceAccountRequest {
  serviceAccountId: string;
  workspaceId: string;
}
export interface DeleteWorkspaceServiceAccountResponse {
  serviceAccountId: string;
  workspaceId: string;
}
export interface DeleteWorkspaceServiceAccountTokenRequest {
  tokenId: string;
  serviceAccountId: string;
  workspaceId: string;
}
export interface DeleteWorkspaceServiceAccountTokenResponse {
  tokenId: string;
  serviceAccountId: string;
  workspaceId: string;
}
export interface DescribeWorkspaceAuthenticationRequest {
  workspaceId: string;
}
export interface DescribeWorkspaceAuthenticationResponse {
  authentication: AuthenticationDescription;
}
export interface DescribeWorkspaceConfigurationRequest {
  workspaceId: string;
}
export interface DescribeWorkspaceConfigurationResponse {
  configuration: string;
  grafanaVersion?: string;
}
export interface DescribeWorkspaceRequest {
  workspaceId: string;
}
export interface DescribeWorkspaceResponse {
  workspace: WorkspaceDescription;
}
export type Description = string;

export interface DisassociateLicenseRequest {
  workspaceId: string;
  licenseType: string;
}
export interface DisassociateLicenseResponse {
  workspace: WorkspaceDescription;
}
export type Endpoint = string;

export type GrafanaToken = string;

export type GrafanaVersion = string;

export type GrafanaVersionList = Array<string>;
export type IamRoleArn = string;

interface _IdpMetadata {
  url?: string;
  xml?: string;
}

export type IdpMetadata =
  | (_IdpMetadata & { url: string })
  | (_IdpMetadata & { xml: string });
export type IdpMetadataUrl = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type LicenseType = string;

export interface ListPermissionsRequest {
  maxResults?: number;
  nextToken?: string;
  userType?: string;
  userId?: string;
  groupId?: string;
  workspaceId: string;
}
export interface ListPermissionsResponse {
  nextToken?: string;
  permissions: Array<PermissionEntry>;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListVersionsRequest {
  maxResults?: number;
  nextToken?: string;
  workspaceId?: string;
}
export interface ListVersionsResponse {
  nextToken?: string;
  grafanaVersions?: Array<string>;
}
export interface ListWorkspaceServiceAccountsRequest {
  maxResults?: number;
  nextToken?: string;
  workspaceId: string;
}
export interface ListWorkspaceServiceAccountsResponse {
  nextToken?: string;
  serviceAccounts: Array<ServiceAccountSummary>;
  workspaceId: string;
}
export interface ListWorkspaceServiceAccountTokensRequest {
  maxResults?: number;
  nextToken?: string;
  serviceAccountId: string;
  workspaceId: string;
}
export interface ListWorkspaceServiceAccountTokensResponse {
  nextToken?: string;
  serviceAccountTokens: Array<ServiceAccountTokenSummary>;
  serviceAccountId: string;
  workspaceId: string;
}
export interface ListWorkspacesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListWorkspacesResponse {
  workspaces: Array<WorkspaceSummary>;
  nextToken?: string;
}
export type LoginValidityDuration = number;

export interface NetworkAccessConfiguration {
  prefixListIds: Array<string>;
  vpceIds: Array<string>;
}
export type NotificationDestinationsList = Array<string>;
export type NotificationDestinationType = string;

export type OrganizationalUnit = string;

export type OrganizationalUnitList = Array<string>;
export type OrganizationRoleName = string;

export type OverridableConfigurationJson = string;

export type PaginationToken = string;

export interface PermissionEntry {
  user: User;
  role: string;
}
export type PermissionEntryList = Array<PermissionEntry>;
export type PermissionType = string;

export type PrefixListId = string;

export type PrefixListIds = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type Role = string;

export type RoleValue = string;

export type RoleValueList = Array<string>;
export interface RoleValues {
  editor?: Array<string>;
  admin?: Array<string>;
}
export interface SamlAuthentication {
  status: string;
  configuration?: SamlConfiguration;
}
export interface SamlConfiguration {
  idpMetadata: IdpMetadata;
  assertionAttributes?: AssertionAttributes;
  roleValues?: RoleValues;
  allowedOrganizations?: Array<string>;
  loginValidityDuration?: number;
}
export type SamlConfigurationStatus = string;

export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type ServiceAccountList = Array<ServiceAccountSummary>;
export type ServiceAccountName = string;

export interface ServiceAccountSummary {
  id: string;
  name: string;
  isDisabled: string;
  grafanaRole: string;
}
export type ServiceAccountTokenKey = string;

export type ServiceAccountTokenList = Array<ServiceAccountTokenSummary>;
export type ServiceAccountTokenName = string;

export interface ServiceAccountTokenSummary {
  id: string;
  name: string;
  createdAt: Date | string;
  expiresAt: Date | string;
  lastUsedAt?: Date | string;
}
export interface ServiceAccountTokenSummaryWithKey {
  id: string;
  name: string;
  key: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type SSOClientId = string;

export type SsoId = string;

export type StackSetName = string;

export type SubnetId = string;

export type SubnetIds = Array<string>;
export type TagKey = string;

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UpdateAction = string;

export interface UpdateError {
  code: number;
  message: string;
  causedBy: UpdateInstruction;
}
export type UpdateErrorList = Array<UpdateError>;
export interface UpdateInstruction {
  action: string;
  role: string;
  users: Array<User>;
}
export type UpdateInstructionBatch = Array<UpdateInstruction>;
export interface UpdatePermissionsRequest {
  updateInstructionBatch: Array<UpdateInstruction>;
  workspaceId: string;
}
export interface UpdatePermissionsResponse {
  errors: Array<UpdateError>;
}
export interface UpdateWorkspaceAuthenticationRequest {
  workspaceId: string;
  authenticationProviders: Array<string>;
  samlConfiguration?: SamlConfiguration;
}
export interface UpdateWorkspaceAuthenticationResponse {
  authentication: AuthenticationDescription;
}
export interface UpdateWorkspaceConfigurationRequest {
  configuration: string;
  workspaceId: string;
  grafanaVersion?: string;
}
export interface UpdateWorkspaceConfigurationResponse {}
export interface UpdateWorkspaceRequest {
  accountAccessType?: string;
  organizationRoleName?: string;
  permissionType?: string;
  stackSetName?: string;
  workspaceDataSources?: Array<string>;
  workspaceDescription?: string;
  workspaceId: string;
  workspaceName?: string;
  workspaceNotificationDestinations?: Array<string>;
  workspaceOrganizationalUnits?: Array<string>;
  workspaceRoleArn?: string;
  vpcConfiguration?: VpcConfiguration;
  removeVpcConfiguration?: boolean;
  networkAccessControl?: NetworkAccessConfiguration;
  removeNetworkAccessConfiguration?: boolean;
}
export interface UpdateWorkspaceResponse {
  workspace: WorkspaceDescription;
}
export interface User {
  id: string;
  type: string;
}
export type UserList = Array<User>;
export type UserType = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export interface VpcConfiguration {
  securityGroupIds: Array<string>;
  subnetIds: Array<string>;
}
export type VpceId = string;

export type VpceIds = Array<string>;
export interface WorkspaceDescription {
  accountAccessType?: string;
  created: Date | string;
  dataSources: Array<string>;
  description?: string;
  endpoint: string;
  grafanaVersion: string;
  id: string;
  modified: Date | string;
  name?: string;
  organizationRoleName?: string;
  notificationDestinations?: Array<string>;
  organizationalUnits?: Array<string>;
  permissionType?: string;
  stackSetName?: string;
  status: string;
  workspaceRoleArn?: string;
  licenseType?: string;
  freeTrialConsumed?: boolean;
  licenseExpiration?: Date | string;
  freeTrialExpiration?: Date | string;
  authentication: AuthenticationSummary;
  tags?: Record<string, string>;
  vpcConfiguration?: VpcConfiguration;
  networkAccessControl?: NetworkAccessConfiguration;
  grafanaToken?: string;
}
export type WorkspaceId = string;

export type WorkspaceList = Array<WorkspaceSummary>;
export type WorkspaceName = string;

export type WorkspaceStatus = string;

export interface WorkspaceSummary {
  created: Date | string;
  description?: string;
  endpoint: string;
  grafanaVersion: string;
  id: string;
  modified: Date | string;
  name?: string;
  notificationDestinations?: Array<string>;
  status: string;
  authentication: AuthenticationSummary;
  tags?: Record<string, string>;
  licenseType?: string;
  grafanaToken?: string;
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

export declare namespace ListVersions {
  export type Input = ListVersionsRequest;
  export type Output = ListVersionsResponse;
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

export declare namespace AssociateLicense {
  export type Input = AssociateLicenseRequest;
  export type Output = AssociateLicenseResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkspace {
  export type Input = CreateWorkspaceRequest;
  export type Output = CreateWorkspaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateWorkspaceApiKey {
  export type Input = CreateWorkspaceApiKeyRequest;
  export type Output = CreateWorkspaceApiKeyResponse;
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

export declare namespace CreateWorkspaceServiceAccount {
  export type Input = CreateWorkspaceServiceAccountRequest;
  export type Output = CreateWorkspaceServiceAccountResponse;
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

export declare namespace CreateWorkspaceServiceAccountToken {
  export type Input = CreateWorkspaceServiceAccountTokenRequest;
  export type Output = CreateWorkspaceServiceAccountTokenResponse;
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

export declare namespace DeleteWorkspace {
  export type Input = DeleteWorkspaceRequest;
  export type Output = DeleteWorkspaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkspaceApiKey {
  export type Input = DeleteWorkspaceApiKeyRequest;
  export type Output = DeleteWorkspaceApiKeyResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkspaceServiceAccount {
  export type Input = DeleteWorkspaceServiceAccountRequest;
  export type Output = DeleteWorkspaceServiceAccountResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteWorkspaceServiceAccountToken {
  export type Input = DeleteWorkspaceServiceAccountTokenRequest;
  export type Output = DeleteWorkspaceServiceAccountTokenResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeWorkspace {
  export type Input = DescribeWorkspaceRequest;
  export type Output = DescribeWorkspaceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeWorkspaceAuthentication {
  export type Input = DescribeWorkspaceAuthenticationRequest;
  export type Output = DescribeWorkspaceAuthenticationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeWorkspaceConfiguration {
  export type Input = DescribeWorkspaceConfigurationRequest;
  export type Output = DescribeWorkspaceConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateLicense {
  export type Input = DisassociateLicenseRequest;
  export type Output = DisassociateLicenseResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPermissions {
  export type Input = ListPermissionsRequest;
  export type Output = ListPermissionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkspaceServiceAccountTokens {
  export type Input = ListWorkspaceServiceAccountTokensRequest;
  export type Output = ListWorkspaceServiceAccountTokensResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkspaceServiceAccounts {
  export type Input = ListWorkspaceServiceAccountsRequest;
  export type Output = ListWorkspaceServiceAccountsResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListWorkspaces {
  export type Input = ListWorkspacesRequest;
  export type Output = ListWorkspacesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePermissions {
  export type Input = UpdatePermissionsRequest;
  export type Output = UpdatePermissionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkspace {
  export type Input = UpdateWorkspaceRequest;
  export type Output = UpdateWorkspaceResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkspaceAuthentication {
  export type Input = UpdateWorkspaceAuthenticationRequest;
  export type Output = UpdateWorkspaceAuthenticationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateWorkspaceConfiguration {
  export type Input = UpdateWorkspaceConfigurationRequest;
  export type Output = UpdateWorkspaceConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
