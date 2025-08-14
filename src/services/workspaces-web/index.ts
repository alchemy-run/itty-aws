import type { Effect, Stream, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class WorkSpacesWeb extends AWSServiceClient {
  expireSession(
    input: ExpireSessionRequest,
  ): Effect.Effect<
    ExpireSessionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getSession(
    input: GetSessionRequest,
  ): Effect.Effect<
    GetSessionResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listSessions(
    input: ListSessionsRequest,
  ): Effect.Effect<
    ListSessionsResponse,
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
    | TooManyTagsException
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
}

export declare class WorkspacesWeb extends WorkSpacesWeb {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type ARN = string;

export type ArnList = Array<string>;
export interface AssociateBrowserSettingsRequest {
  portalArn: string;
  browserSettingsArn: string;
}
export interface AssociateBrowserSettingsResponse {
  portalArn: string;
  browserSettingsArn: string;
}
export interface AssociateDataProtectionSettingsRequest {
  portalArn: string;
  dataProtectionSettingsArn: string;
}
export interface AssociateDataProtectionSettingsResponse {
  portalArn: string;
  dataProtectionSettingsArn: string;
}
export interface AssociateIpAccessSettingsRequest {
  portalArn: string;
  ipAccessSettingsArn: string;
}
export interface AssociateIpAccessSettingsResponse {
  portalArn: string;
  ipAccessSettingsArn: string;
}
export interface AssociateNetworkSettingsRequest {
  portalArn: string;
  networkSettingsArn: string;
}
export interface AssociateNetworkSettingsResponse {
  portalArn: string;
  networkSettingsArn: string;
}
export interface AssociateSessionLoggerRequest {
  portalArn: string;
  sessionLoggerArn: string;
}
export interface AssociateSessionLoggerResponse {
  portalArn: string;
  sessionLoggerArn: string;
}
export interface AssociateTrustStoreRequest {
  portalArn: string;
  trustStoreArn: string;
}
export interface AssociateTrustStoreResponse {
  portalArn: string;
  trustStoreArn: string;
}
export interface AssociateUserAccessLoggingSettingsRequest {
  portalArn: string;
  userAccessLoggingSettingsArn: string;
}
export interface AssociateUserAccessLoggingSettingsResponse {
  portalArn: string;
  userAccessLoggingSettingsArn: string;
}
export interface AssociateUserSettingsRequest {
  portalArn: string;
  userSettingsArn: string;
}
export interface AssociateUserSettingsResponse {
  portalArn: string;
  userSettingsArn: string;
}
export type AuthenticationType = string;

export type BrowserPolicy = string;

export interface BrowserSettings {
  browserSettingsArn: string;
  associatedPortalArns?: Array<string>;
  browserPolicy?: string;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
}
export type BrowserSettingsList = Array<BrowserSettingsSummary>;
export interface BrowserSettingsSummary {
  browserSettingsArn: string;
}
export type BrowserType = string;

export type BuiltInPatternId = string;

export interface Certificate {
  thumbprint?: string;
  subject?: string;
  issuer?: string;
  notValidBefore?: Date | string;
  notValidAfter?: Date | string;
  body?: Uint8Array | string | Stream.Stream<Uint8Array>;
}
export type CertificateAuthorityBody = Uint8Array | string;

export type CertificateList = Array<Uint8Array | string>;
export type CertificatePrincipal = string;

export interface CertificateSummary {
  thumbprint?: string;
  subject?: string;
  issuer?: string;
  notValidBefore?: Date | string;
  notValidAfter?: Date | string;
}
export type CertificateSummaryList = Array<CertificateSummary>;
export type CertificateThumbprint = string;

export type CertificateThumbprintList = Array<string>;
export type ClientToken = string;

export type ConfidenceLevel = number;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export type CookieDomain = string;

export type CookieName = string;

export type CookiePath = string;

export interface CookieSpecification {
  domain: string;
  name?: string;
  path?: string;
}
export type CookieSpecifications = Array<CookieSpecification>;
export interface CookieSynchronizationConfiguration {
  allowlist: Array<CookieSpecification>;
  blocklist?: Array<CookieSpecification>;
}
export interface CreateBrowserSettingsRequest {
  tags?: Array<Tag>;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
  browserPolicy: string;
  clientToken?: string;
}
export interface CreateBrowserSettingsResponse {
  browserSettingsArn: string;
}
export interface CreateDataProtectionSettingsRequest {
  displayName?: string;
  description?: string;
  tags?: Array<Tag>;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
  inlineRedactionConfiguration?: InlineRedactionConfiguration;
  clientToken?: string;
}
export interface CreateDataProtectionSettingsResponse {
  dataProtectionSettingsArn: string;
}
export interface CreateIdentityProviderRequest {
  portalArn: string;
  identityProviderName: string;
  identityProviderType: string;
  identityProviderDetails: Partial<Record<string, string>>;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreateIdentityProviderResponse {
  identityProviderArn: string;
}
export interface CreateIpAccessSettingsRequest {
  displayName?: string;
  description?: string;
  tags?: Array<Tag>;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
  ipRules: Array<IpRule>;
  clientToken?: string;
}
export interface CreateIpAccessSettingsResponse {
  ipAccessSettingsArn: string;
}
export interface CreateNetworkSettingsRequest {
  vpcId: string;
  subnetIds: Array<string>;
  securityGroupIds: Array<string>;
  tags?: Array<Tag>;
  clientToken?: string;
}
export interface CreateNetworkSettingsResponse {
  networkSettingsArn: string;
}
export interface CreatePortalRequest {
  displayName?: string;
  tags?: Array<Tag>;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
  clientToken?: string;
  authenticationType?: string;
  instanceType?: string;
  maxConcurrentSessions?: number;
}
export interface CreatePortalResponse {
  portalArn: string;
  portalEndpoint: string;
}
export interface CreateSessionLoggerRequest {
  eventFilter: EventFilter;
  logConfiguration: LogConfiguration;
  displayName?: string;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
  tags?: Array<Tag>;
  clientToken?: string;
}
export interface CreateSessionLoggerResponse {
  sessionLoggerArn: string;
}
export interface CreateTrustStoreRequest {
  certificateList: Array<Uint8Array | string>;
  tags?: Array<Tag>;
  clientToken?: string;
}
export interface CreateTrustStoreResponse {
  trustStoreArn: string;
}
export interface CreateUserAccessLoggingSettingsRequest {
  kinesisStreamArn: string;
  tags?: Array<Tag>;
  clientToken?: string;
}
export interface CreateUserAccessLoggingSettingsResponse {
  userAccessLoggingSettingsArn: string;
}
export interface CreateUserSettingsRequest {
  copyAllowed: string;
  pasteAllowed: string;
  downloadAllowed: string;
  uploadAllowed: string;
  printAllowed: string;
  tags?: Array<Tag>;
  disconnectTimeoutInMinutes?: number;
  idleDisconnectTimeoutInMinutes?: number;
  clientToken?: string;
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
  deepLinkAllowed?: string;
  toolbarConfiguration?: ToolbarConfiguration;
}
export interface CreateUserSettingsResponse {
  userSettingsArn: string;
}
export interface CustomPattern {
  patternName: string;
  patternRegex: string;
  patternDescription?: string;
  keywordRegex?: string;
}
export interface DataProtectionSettings {
  dataProtectionSettingsArn: string;
  inlineRedactionConfiguration?: InlineRedactionConfiguration;
  associatedPortalArns?: Array<string>;
  displayName?: string;
  description?: string;
  creationDate?: Date | string;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
}
export type DataProtectionSettingsList = Array<DataProtectionSettingsSummary>;
export interface DataProtectionSettingsSummary {
  dataProtectionSettingsArn: string;
  displayName?: string;
  description?: string;
  creationDate?: Date | string;
}
export interface DeleteBrowserSettingsRequest {
  browserSettingsArn: string;
}
export interface DeleteBrowserSettingsResponse {}
export interface DeleteDataProtectionSettingsRequest {
  dataProtectionSettingsArn: string;
}
export interface DeleteDataProtectionSettingsResponse {}
export interface DeleteIdentityProviderRequest {
  identityProviderArn: string;
}
export interface DeleteIdentityProviderResponse {}
export interface DeleteIpAccessSettingsRequest {
  ipAccessSettingsArn: string;
}
export interface DeleteIpAccessSettingsResponse {}
export interface DeleteNetworkSettingsRequest {
  networkSettingsArn: string;
}
export interface DeleteNetworkSettingsResponse {}
export interface DeletePortalRequest {
  portalArn: string;
}
export interface DeletePortalResponse {}
export interface DeleteSessionLoggerRequest {
  sessionLoggerArn: string;
}
export interface DeleteSessionLoggerResponse {}
export interface DeleteTrustStoreRequest {
  trustStoreArn: string;
}
export interface DeleteTrustStoreResponse {}
export interface DeleteUserAccessLoggingSettingsRequest {
  userAccessLoggingSettingsArn: string;
}
export interface DeleteUserAccessLoggingSettingsResponse {}
export interface DeleteUserSettingsRequest {
  userSettingsArn: string;
}
export interface DeleteUserSettingsResponse {}
export type Description = string;

export type DescriptionSafe = string;

export interface DisassociateBrowserSettingsRequest {
  portalArn: string;
}
export interface DisassociateBrowserSettingsResponse {}
export interface DisassociateDataProtectionSettingsRequest {
  portalArn: string;
}
export interface DisassociateDataProtectionSettingsResponse {}
export interface DisassociateIpAccessSettingsRequest {
  portalArn: string;
}
export interface DisassociateIpAccessSettingsResponse {}
export interface DisassociateNetworkSettingsRequest {
  portalArn: string;
}
export interface DisassociateNetworkSettingsResponse {}
export interface DisassociateSessionLoggerRequest {
  portalArn: string;
}
export interface DisassociateSessionLoggerResponse {}
export interface DisassociateTrustStoreRequest {
  portalArn: string;
}
export interface DisassociateTrustStoreResponse {}
export interface DisassociateUserAccessLoggingSettingsRequest {
  portalArn: string;
}
export interface DisassociateUserAccessLoggingSettingsResponse {}
export interface DisassociateUserSettingsRequest {
  portalArn: string;
}
export interface DisassociateUserSettingsResponse {}
export type DisconnectTimeoutInMinutes = number;

export type DisplayName = string;

export type DisplayNameSafe = string;

export type EnabledType = string;

export type EncryptionContextMap = Partial<Record<string, string>>;
export type Event =
  | "WEBSITE_INTERACT"
  | "FILE_DOWNLOAD_FROM_SECURE_BROWSER_TO_REMOTE_DISK"
  | "FILE_TRANSFER_FROM_REMOTE_TO_LOCAL_DISK"
  | "FILE_TRANSFER_FROM_LOCAL_TO_REMOTE_DISK"
  | "FILE_UPLOAD_FROM_REMOTE_DISK_TO_SECURE_BROWSER"
  | "CONTENT_PASTE_TO_WEBSITE"
  | "CONTENT_TRANSFER_FROM_LOCAL_TO_REMOTE_CLIPBOARD"
  | "CONTENT_COPY_FROM_WEBSITE"
  | "URL_LOAD"
  | "TAB_OPEN"
  | "TAB_CLOSE"
  | "PRINT_JOB_SUBMIT"
  | "SESSION_CONNECT"
  | "SESSION_START"
  | "SESSION_DISCONNECT"
  | "SESSION_END";
interface _EventFilter {
  all?: {};
  include?: Array<Event>;
}

export type EventFilter =
  | (_EventFilter & { all: {} })
  | (_EventFilter & { include: Array<Event> });
export type Events = Array<Event>;
export type ExceptionMessage = string;

export interface ExpireSessionRequest {
  portalId: string;
  sessionId: string;
}
export interface ExpireSessionResponse {}
export type FieldName = string;

export type FolderStructure = "FLAT" | "NESTED_BY_DATE";
export interface GetBrowserSettingsRequest {
  browserSettingsArn: string;
}
export interface GetBrowserSettingsResponse {
  browserSettings?: BrowserSettings;
}
export interface GetDataProtectionSettingsRequest {
  dataProtectionSettingsArn: string;
}
export interface GetDataProtectionSettingsResponse {
  dataProtectionSettings?: DataProtectionSettings;
}
export interface GetIdentityProviderRequest {
  identityProviderArn: string;
}
export interface GetIdentityProviderResponse {
  identityProvider?: IdentityProvider;
}
export interface GetIpAccessSettingsRequest {
  ipAccessSettingsArn: string;
}
export interface GetIpAccessSettingsResponse {
  ipAccessSettings?: IpAccessSettings;
}
export interface GetNetworkSettingsRequest {
  networkSettingsArn: string;
}
export interface GetNetworkSettingsResponse {
  networkSettings?: NetworkSettings;
}
export interface GetPortalRequest {
  portalArn: string;
}
export interface GetPortalResponse {
  portal?: Portal;
}
export interface GetPortalServiceProviderMetadataRequest {
  portalArn: string;
}
export interface GetPortalServiceProviderMetadataResponse {
  portalArn: string;
  serviceProviderSamlMetadata?: string;
}
export interface GetSessionLoggerRequest {
  sessionLoggerArn: string;
}
export interface GetSessionLoggerResponse {
  sessionLogger?: SessionLogger;
}
export interface GetSessionRequest {
  portalId: string;
  sessionId: string;
}
export interface GetSessionResponse {
  session?: Session;
}
export interface GetTrustStoreCertificateRequest {
  trustStoreArn: string;
  thumbprint: string;
}
export interface GetTrustStoreCertificateResponse {
  trustStoreArn: string;
  certificate?: Certificate;
}
export interface GetTrustStoreRequest {
  trustStoreArn: string;
}
export interface GetTrustStoreResponse {
  trustStore?: TrustStore;
}
export interface GetUserAccessLoggingSettingsRequest {
  userAccessLoggingSettingsArn: string;
}
export interface GetUserAccessLoggingSettingsResponse {
  userAccessLoggingSettings?: UserAccessLoggingSettings;
}
export interface GetUserSettingsRequest {
  userSettingsArn: string;
}
export interface GetUserSettingsResponse {
  userSettings?: UserSettings;
}
export type GlobalInlineRedactionUrls = Array<string>;
export type HiddenToolbarItemList = Array<string>;
export interface IdentityProvider {
  identityProviderArn: string;
  identityProviderName?: string;
  identityProviderType?: string;
  identityProviderDetails?: Partial<Record<string, string>>;
}
export type IdentityProviderDetails = Partial<Record<string, string>>;
export type IdentityProviderList = Array<IdentityProviderSummary>;
export type IdentityProviderName = string;

export interface IdentityProviderSummary {
  identityProviderArn: string;
  identityProviderName?: string;
  identityProviderType?: string;
}
export type IdentityProviderType = string;

export type IdleDisconnectTimeoutInMinutes = number;

export interface InlineRedactionConfiguration {
  inlineRedactionPatterns: Array<InlineRedactionPattern>;
  globalEnforcedUrls?: Array<string>;
  globalExemptUrls?: Array<string>;
  globalConfidenceLevel?: number;
}
export interface InlineRedactionPattern {
  builtInPatternId?: string;
  customPattern?: CustomPattern;
  redactionPlaceHolder: RedactionPlaceHolder;
  enforcedUrls?: Array<string>;
  exemptUrls?: Array<string>;
  confidenceLevel?: number;
}
export type InlineRedactionPatterns = Array<InlineRedactionPattern>;
export type InlineRedactionUrl = string;

export type InlineRedactionUrls = Array<string>;
export type InstanceType = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface IpAccessSettings {
  ipAccessSettingsArn: string;
  associatedPortalArns?: Array<string>;
  ipRules?: Array<IpRule>;
  displayName?: string;
  description?: string;
  creationDate?: Date | string;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
}
export type IpAccessSettingsList = Array<IpAccessSettingsSummary>;
export interface IpAccessSettingsSummary {
  ipAccessSettingsArn: string;
  displayName?: string;
  description?: string;
  creationDate?: Date | string;
}
export type IpAddress = string;

export type IpAddressList = Array<string>;
export type IpRange = string;

export interface IpRule {
  ipRange: string;
  description?: string;
}
export type IpRuleList = Array<IpRule>;
export type keyArn = string;

export type KinesisStreamArn = string;

export interface ListBrowserSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListBrowserSettingsResponse {
  browserSettings?: Array<BrowserSettingsSummary>;
  nextToken?: string;
}
export interface ListDataProtectionSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDataProtectionSettingsResponse {
  dataProtectionSettings?: Array<DataProtectionSettingsSummary>;
  nextToken?: string;
}
export interface ListIdentityProvidersRequest {
  nextToken?: string;
  maxResults?: number;
  portalArn: string;
}
export interface ListIdentityProvidersResponse {
  nextToken?: string;
  identityProviders?: Array<IdentityProviderSummary>;
}
export interface ListIpAccessSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListIpAccessSettingsResponse {
  ipAccessSettings?: Array<IpAccessSettingsSummary>;
  nextToken?: string;
}
export interface ListNetworkSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListNetworkSettingsResponse {
  networkSettings?: Array<NetworkSettingsSummary>;
  nextToken?: string;
}
export interface ListPortalsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListPortalsResponse {
  portals?: Array<PortalSummary>;
  nextToken?: string;
}
export interface ListSessionLoggersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListSessionLoggersResponse {
  sessionLoggers?: Array<SessionLoggerSummary>;
  nextToken?: string;
}
export interface ListSessionsRequest {
  portalId: string;
  username?: string;
  sessionId?: string;
  sortBy?: SessionSortBy;
  status?: SessionStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSessionsResponse {
  sessions: Array<SessionSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export interface ListTrustStoreCertificatesRequest {
  trustStoreArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTrustStoreCertificatesResponse {
  certificateList?: Array<CertificateSummary>;
  trustStoreArn: string;
  nextToken?: string;
}
export interface ListTrustStoresRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListTrustStoresResponse {
  trustStores?: Array<TrustStoreSummary>;
  nextToken?: string;
}
export interface ListUserAccessLoggingSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListUserAccessLoggingSettingsResponse {
  userAccessLoggingSettings?: Array<UserAccessLoggingSettingsSummary>;
  nextToken?: string;
}
export interface ListUserSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListUserSettingsResponse {
  userSettings?: Array<UserSettingsSummary>;
  nextToken?: string;
}
export interface LogConfiguration {
  s3?: S3LogConfiguration;
}
export type LogFileFormat = "JSON_LINES" | "JSON";
export type MaxConcurrentSessions = number;

export type MaxDisplayResolution = string;

export type MaxResults = number;

export interface NetworkSettings {
  networkSettingsArn: string;
  associatedPortalArns?: Array<string>;
  vpcId?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
}
export type NetworkSettingsList = Array<NetworkSettingsSummary>;
export interface NetworkSettingsSummary {
  networkSettingsArn: string;
  vpcId?: string;
}
export type PaginationToken = string;

export type PatternName = string;

export interface Portal {
  portalArn: string;
  rendererType?: string;
  browserType?: string;
  portalStatus?: string;
  portalEndpoint?: string;
  displayName?: string;
  creationDate?: Date | string;
  browserSettingsArn?: string;
  dataProtectionSettingsArn?: string;
  userSettingsArn?: string;
  networkSettingsArn?: string;
  sessionLoggerArn?: string;
  trustStoreArn?: string;
  statusReason?: string;
  userAccessLoggingSettingsArn?: string;
  authenticationType?: string;
  ipAccessSettingsArn?: string;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
  instanceType?: string;
  maxConcurrentSessions?: number;
}
export type PortalEndpoint = string;

export type PortalId = string;

export type PortalList = Array<PortalSummary>;
export type PortalStatus = string;

export interface PortalSummary {
  portalArn: string;
  rendererType?: string;
  browserType?: string;
  portalStatus?: string;
  portalEndpoint?: string;
  displayName?: string;
  creationDate?: Date | string;
  browserSettingsArn?: string;
  dataProtectionSettingsArn?: string;
  userSettingsArn?: string;
  networkSettingsArn?: string;
  sessionLoggerArn?: string;
  trustStoreArn?: string;
  userAccessLoggingSettingsArn?: string;
  authenticationType?: string;
  ipAccessSettingsArn?: string;
  instanceType?: string;
  maxConcurrentSessions?: number;
}
export type QuotaCode = string;

export interface RedactionPlaceHolder {
  redactionPlaceHolderType: string;
  redactionPlaceHolderText?: string;
}
export type RedactionPlaceHolderText = string;

export type RedactionPlaceHolderType = string;

export type Regex = string;

export type RendererType = string;

export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export type ResourceType = string;

export type RetryAfterSeconds = number;

export type S3Bucket = string;

export type S3BucketOwner = string;

export type S3KeyPrefix = string;

export interface S3LogConfiguration {
  bucket: string;
  keyPrefix?: string;
  bucketOwner?: string;
  logFileFormat: LogFileFormat;
  folderStructure: FolderStructure;
}
export type SamlMetadata = string;

export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<string>;
export type ServiceCode = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export interface Session {
  portalArn?: string;
  sessionId?: string;
  username?: string;
  clientIpAddresses?: Array<string>;
  status?: SessionStatus;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type SessionId = string;

export interface SessionLogger {
  sessionLoggerArn: string;
  eventFilter?: EventFilter;
  logConfiguration?: LogConfiguration;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
  associatedPortalArns?: Array<string>;
  displayName?: string;
  creationDate?: Date | string;
}
export type SessionLoggerList = Array<SessionLoggerSummary>;
export interface SessionLoggerSummary {
  sessionLoggerArn: string;
  logConfiguration?: LogConfiguration;
  displayName?: string;
  creationDate?: Date | string;
}
export type SessionSortBy = "START_TIME_ASCENDING" | "START_TIME_DESCENDING";
export type SessionStatus = "ACTIVE" | "TERMINATED";
export interface SessionSummary {
  portalArn?: string;
  sessionId?: string;
  username?: string;
  status?: SessionStatus;
  startTime?: Date | string;
  endTime?: Date | string;
}
export type SessionSummaryList = Array<SessionSummary>;
export type StatusReason = string;

export type StringType = string;

export type SubnetId = string;

export type SubnetIdList = Array<string>;
export type SubresourceARN = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagExceptionMessage = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
  clientToken?: string;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Timestamp = Date | string;

export interface ToolbarConfiguration {
  toolbarType?: string;
  visualMode?: string;
  hiddenToolbarItems?: Array<string>;
  maxDisplayResolution?: string;
}
export type ToolbarItem = string;

export type ToolbarType = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface TrustStore {
  associatedPortalArns?: Array<string>;
  trustStoreArn: string;
}
export interface TrustStoreSummary {
  trustStoreArn?: string;
}
export type TrustStoreSummaryList = Array<TrustStoreSummary>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateBrowserSettingsRequest {
  browserSettingsArn: string;
  browserPolicy?: string;
  clientToken?: string;
}
export interface UpdateBrowserSettingsResponse {
  browserSettings: BrowserSettings;
}
export interface UpdateDataProtectionSettingsRequest {
  dataProtectionSettingsArn: string;
  inlineRedactionConfiguration?: InlineRedactionConfiguration;
  displayName?: string;
  description?: string;
  clientToken?: string;
}
export interface UpdateDataProtectionSettingsResponse {
  dataProtectionSettings: DataProtectionSettings;
}
export interface UpdateIdentityProviderRequest {
  identityProviderArn: string;
  identityProviderName?: string;
  identityProviderType?: string;
  identityProviderDetails?: Partial<Record<string, string>>;
  clientToken?: string;
}
export interface UpdateIdentityProviderResponse {
  identityProvider: IdentityProvider;
}
export interface UpdateIpAccessSettingsRequest {
  ipAccessSettingsArn: string;
  displayName?: string;
  description?: string;
  ipRules?: Array<IpRule>;
  clientToken?: string;
}
export interface UpdateIpAccessSettingsResponse {
  ipAccessSettings: IpAccessSettings;
}
export interface UpdateNetworkSettingsRequest {
  networkSettingsArn: string;
  vpcId?: string;
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  clientToken?: string;
}
export interface UpdateNetworkSettingsResponse {
  networkSettings: NetworkSettings;
}
export interface UpdatePortalRequest {
  portalArn: string;
  displayName?: string;
  authenticationType?: string;
  instanceType?: string;
  maxConcurrentSessions?: number;
}
export interface UpdatePortalResponse {
  portal?: Portal;
}
export interface UpdateSessionLoggerRequest {
  sessionLoggerArn: string;
  eventFilter?: EventFilter;
  logConfiguration?: LogConfiguration;
  displayName?: string;
}
export interface UpdateSessionLoggerResponse {
  sessionLogger: SessionLogger;
}
export interface UpdateTrustStoreRequest {
  trustStoreArn: string;
  certificatesToAdd?: Array<Uint8Array | string>;
  certificatesToDelete?: Array<string>;
  clientToken?: string;
}
export interface UpdateTrustStoreResponse {
  trustStoreArn: string;
}
export interface UpdateUserAccessLoggingSettingsRequest {
  userAccessLoggingSettingsArn: string;
  kinesisStreamArn?: string;
  clientToken?: string;
}
export interface UpdateUserAccessLoggingSettingsResponse {
  userAccessLoggingSettings: UserAccessLoggingSettings;
}
export interface UpdateUserSettingsRequest {
  userSettingsArn: string;
  copyAllowed?: string;
  pasteAllowed?: string;
  downloadAllowed?: string;
  uploadAllowed?: string;
  printAllowed?: string;
  disconnectTimeoutInMinutes?: number;
  idleDisconnectTimeoutInMinutes?: number;
  clientToken?: string;
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
  deepLinkAllowed?: string;
  toolbarConfiguration?: ToolbarConfiguration;
}
export interface UpdateUserSettingsResponse {
  userSettings: UserSettings;
}
export interface UserAccessLoggingSettings {
  userAccessLoggingSettingsArn: string;
  associatedPortalArns?: Array<string>;
  kinesisStreamArn?: string;
}
export type UserAccessLoggingSettingsList =
  Array<UserAccessLoggingSettingsSummary>;
export interface UserAccessLoggingSettingsSummary {
  userAccessLoggingSettingsArn: string;
  kinesisStreamArn?: string;
}
export type Username = string;

export interface UserSettings {
  userSettingsArn: string;
  associatedPortalArns?: Array<string>;
  copyAllowed?: string;
  pasteAllowed?: string;
  downloadAllowed?: string;
  uploadAllowed?: string;
  printAllowed?: string;
  disconnectTimeoutInMinutes?: number;
  idleDisconnectTimeoutInMinutes?: number;
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
  customerManagedKey?: string;
  additionalEncryptionContext?: Partial<Record<string, string>>;
  deepLinkAllowed?: string;
  toolbarConfiguration?: ToolbarConfiguration;
}
export type UserSettingsList = Array<UserSettingsSummary>;
export interface UserSettingsSummary {
  userSettingsArn: string;
  copyAllowed?: string;
  pasteAllowed?: string;
  downloadAllowed?: string;
  uploadAllowed?: string;
  printAllowed?: string;
  disconnectTimeoutInMinutes?: number;
  idleDisconnectTimeoutInMinutes?: number;
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
  deepLinkAllowed?: string;
  toolbarConfiguration?: ToolbarConfiguration;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
  readonly reason?: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export type VisualMode = string;

export type VpcId = string;

export declare namespace ExpireSession {
  export type Input = ExpireSessionRequest;
  export type Output = ExpireSessionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSession {
  export type Input = GetSessionRequest;
  export type Output = GetSessionResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSessions {
  export type Input = ListSessionsRequest;
  export type Output = ListSessionsResponse;
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
    | TooManyTagsException
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
