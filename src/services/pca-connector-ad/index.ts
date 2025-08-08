import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";
import { RestJson1Protocol } from "../../protocols/restjson1.js";

export class PcaConnectorAd extends AWSServiceClient {
  constructor(cfg: any) {
    super("pca-connector-ad", new RestJson1Protocol(), cfg);
  }

  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("ListTagsForResource", input);
  }
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("TagResource", input);
  }
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  > {
    return this.call("UntagResource", input);
  }
}

export default PcaConnectorAd;

export interface AccessControlEntry {
  GroupDisplayName?: string;
  GroupSecurityIdentifier?: string;
  AccessRights?: AccessRights;
  TemplateArn?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type AccessControlEntryList = Array<AccessControlEntrySummary>;
export interface AccessControlEntrySummary {
  GroupDisplayName?: string;
  GroupSecurityIdentifier?: string;
  AccessRights?: AccessRights;
  TemplateArn?: string;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AccessRight = "ALLOW" | "DENY";
export interface AccessRights {
  Enroll?: AccessRight;
  AutoEnroll?: AccessRight;
}
export interface ApplicationPolicies {
  Critical?: boolean;
  Policies: Array<ApplicationPolicy>;
}
interface _ApplicationPolicy {
  PolicyType?: ApplicationPolicyType;
  PolicyObjectIdentifier?: string;
}

export type ApplicationPolicy = (_ApplicationPolicy & { PolicyType: ApplicationPolicyType }) | (_ApplicationPolicy & { PolicyObjectIdentifier: string });
export type ApplicationPolicyList = Array<ApplicationPolicy>;
export type ApplicationPolicyType = "ALL_APPLICATION_POLICIES" | "ANY_PURPOSE" | "ATTESTATION_IDENTITY_KEY_CERTIFICATE" | "CERTIFICATE_REQUEST_AGENT" | "CLIENT_AUTHENTICATION" | "CODE_SIGNING" | "CTL_USAGE" | "DIGITAL_RIGHTS" | "DIRECTORY_SERVICE_EMAIL_REPLICATION" | "DISALLOWED_LIST" | "DNS_SERVER_TRUST" | "DOCUMENT_ENCRYPTION" | "DOCUMENT_SIGNING" | "DYNAMIC_CODE_GENERATOR" | "EARLY_LAUNCH_ANTIMALWARE_DRIVER" | "EMBEDDED_WINDOWS_SYSTEM_COMPONENT_VERIFICATION" | "ENCLAVE" | "ENCRYPTING_FILE_SYSTEM" | "ENDORSEMENT_KEY_CERTIFICATE" | "FILE_RECOVERY" | "HAL_EXTENSION" | "IP_SECURITY_END_SYSTEM" | "IP_SECURITY_IKE_INTERMEDIATE" | "IP_SECURITY_TUNNEL_TERMINATION" | "IP_SECURITY_USER" | "ISOLATED_USER_MODE" | "KDC_AUTHENTICATION" | "KERNEL_MODE_CODE_SIGNING" | "KEY_PACK_LICENSES" | "KEY_RECOVERY" | "KEY_RECOVERY_AGENT" | "LICENSE_SERVER_VERIFICATION" | "LIFETIME_SIGNING" | "MICROSOFT_PUBLISHER" | "MICROSOFT_TIME_STAMPING" | "MICROSOFT_TRUST_LIST_SIGNING" | "OCSP_SIGNING" | "OEM_WINDOWS_SYSTEM_COMPONENT_VERIFICATION" | "PLATFORM_CERTIFICATE" | "PREVIEW_BUILD_SIGNING" | "PRIVATE_KEY_ARCHIVAL" | "PROTECTED_PROCESS_LIGHT_VERIFICATION" | "PROTECTED_PROCESS_VERIFICATION" | "QUALIFIED_SUBORDINATION" | "REVOKED_LIST_SIGNER" | "ROOT_PROGRAM_AUTO_UPDATE_CA_REVOCATION" | "ROOT_PROGRAM_AUTO_UPDATE_END_REVOCATION" | "ROOT_PROGRAM_NO_OSCP_FAILOVER_TO_CRL" | "ROOT_LIST_SIGNER" | "SECURE_EMAIL" | "SERVER_AUTHENTICATION" | "SMART_CARD_LOGIN" | "SPC_ENCRYPTED_DIGEST_RETRY_COUNT" | "SPC_RELAXED_PE_MARKER_CHECK" | "TIME_STAMPING" | "WINDOWS_HARDWARE_DRIVER_ATTESTED_VERIFICATION" | "WINDOWS_HARDWARE_DRIVER_EXTENDED_VERIFICATION" | "WINDOWS_HARDWARE_DRIVER_VERIFICATION" | "WINDOWS_HELLO_RECOVERY_KEY_ENCRYPTION" | "WINDOWS_KITS_COMPONENT" | "WINDOWS_RT_VERIFICATION" | "WINDOWS_SOFTWARE_EXTENSION_VERIFICATION" | "WINDOWS_STORE" | "WINDOWS_SYSTEM_COMPONENT_VERIFICATION" | "WINDOWS_TCB_COMPONENT" | "WINDOWS_THIRD_PARTY_APPLICATION_COMPONENT" | "WINDOWS_UPDATE";
export type CertificateAuthorityArn = string;

export interface CertificateValidity {
  ValidityPeriod: ValidityPeriod;
  RenewalPeriod: ValidityPeriod;
}
export type ClientCompatibilityV2 = "WINDOWS_SERVER_2003" | "WINDOWS_SERVER_2008" | "WINDOWS_SERVER_2008_R2" | "WINDOWS_SERVER_2012" | "WINDOWS_SERVER_2012_R2" | "WINDOWS_SERVER_2016";
export type ClientCompatibilityV3 = "WINDOWS_SERVER_2008" | "WINDOWS_SERVER_2008_R2" | "WINDOWS_SERVER_2012" | "WINDOWS_SERVER_2012_R2" | "WINDOWS_SERVER_2016";
export type ClientCompatibilityV4 = "WINDOWS_SERVER_2012" | "WINDOWS_SERVER_2012_R2" | "WINDOWS_SERVER_2016";
export type ClientToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export interface Connector {
  Arn?: string;
  CertificateAuthorityArn?: string;
  CertificateEnrollmentPolicyServerEndpoint?: string;
  DirectoryId?: string;
  VpcInformation?: VpcInformation;
  Status?: ConnectorStatus;
  StatusReason?: ConnectorStatusReason;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type ConnectorArn = string;

export type ConnectorList = Array<ConnectorSummary>;
export type ConnectorStatus = "CREATING" | "ACTIVE" | "DELETING" | "FAILED";
export type ConnectorStatusReason = "CA_CERTIFICATE_REGISTRATION_FAILED" | "DIRECTORY_ACCESS_DENIED" | "INTERNAL_FAILURE" | "INSUFFICIENT_FREE_ADDRESSES" | "INVALID_SUBNET_IP_PROTOCOL" | "PRIVATECA_ACCESS_DENIED" | "PRIVATECA_RESOURCE_NOT_FOUND" | "SECURITY_GROUP_NOT_IN_VPC" | "VPC_ACCESS_DENIED" | "VPC_ENDPOINT_LIMIT_EXCEEDED" | "VPC_RESOURCE_NOT_FOUND";
export interface ConnectorSummary {
  Arn?: string;
  CertificateAuthorityArn?: string;
  CertificateEnrollmentPolicyServerEndpoint?: string;
  DirectoryId?: string;
  VpcInformation?: VpcInformation;
  Status?: ConnectorStatus;
  StatusReason?: ConnectorStatusReason;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export interface CreateConnectorRequest {
  DirectoryId: string;
  CertificateAuthorityArn: string;
  VpcInformation: VpcInformation;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateConnectorResponse {
  ConnectorArn?: string;
}
export interface CreateDirectoryRegistrationRequest {
  DirectoryId: string;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateDirectoryRegistrationResponse {
  DirectoryRegistrationArn?: string;
}
export interface CreateServicePrincipalNameRequest {
  DirectoryRegistrationArn: string;
  ConnectorArn: string;
  ClientToken?: string;
}
export interface CreateTemplateGroupAccessControlEntryRequest {
  TemplateArn: string;
  GroupSecurityIdentifier: string;
  GroupDisplayName: string;
  AccessRights: AccessRights;
  ClientToken?: string;
}
export interface CreateTemplateRequest {
  ConnectorArn: string;
  Name: string;
  Definition: TemplateDefinition;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateTemplateResponse {
  TemplateArn?: string;
}
export type CryptoProvidersList = Array<string>;
export type CustomObjectIdentifier = string;

export interface DeleteConnectorRequest {
  ConnectorArn: string;
}
export interface DeleteDirectoryRegistrationRequest {
  DirectoryRegistrationArn: string;
}
export interface DeleteServicePrincipalNameRequest {
  DirectoryRegistrationArn: string;
  ConnectorArn: string;
}
export interface DeleteTemplateGroupAccessControlEntryRequest {
  TemplateArn: string;
  GroupSecurityIdentifier: string;
}
export interface DeleteTemplateRequest {
  TemplateArn: string;
}
export type DirectoryId = string;

export interface DirectoryRegistration {
  Arn?: string;
  DirectoryId?: string;
  Status?: DirectoryRegistrationStatus;
  StatusReason?: DirectoryRegistrationStatusReason;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type DirectoryRegistrationArn = string;

export type DirectoryRegistrationList = Array<DirectoryRegistrationSummary>;
export type DirectoryRegistrationStatus = "CREATING" | "ACTIVE" | "DELETING" | "FAILED";
export type DirectoryRegistrationStatusReason = "DIRECTORY_ACCESS_DENIED" | "DIRECTORY_RESOURCE_NOT_FOUND" | "DIRECTORY_NOT_ACTIVE" | "DIRECTORY_NOT_REACHABLE" | "DIRECTORY_TYPE_NOT_SUPPORTED" | "INTERNAL_FAILURE";
export interface DirectoryRegistrationSummary {
  Arn?: string;
  DirectoryId?: string;
  Status?: DirectoryRegistrationStatus;
  StatusReason?: DirectoryRegistrationStatusReason;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type DisplayName = string;

export interface EnrollmentFlagsV2 {
  IncludeSymmetricAlgorithms?: boolean;
  UserInteractionRequired?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
  NoSecurityExtension?: boolean;
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
}
export interface EnrollmentFlagsV3 {
  IncludeSymmetricAlgorithms?: boolean;
  UserInteractionRequired?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
  NoSecurityExtension?: boolean;
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
}
export interface EnrollmentFlagsV4 {
  IncludeSymmetricAlgorithms?: boolean;
  UserInteractionRequired?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
  NoSecurityExtension?: boolean;
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
}
export interface ExtensionsV2 {
  KeyUsage: KeyUsage;
  ApplicationPolicies?: ApplicationPolicies;
}
export interface ExtensionsV3 {
  KeyUsage: KeyUsage;
  ApplicationPolicies?: ApplicationPolicies;
}
export interface ExtensionsV4 {
  KeyUsage: KeyUsage;
  ApplicationPolicies?: ApplicationPolicies;
}
export interface GeneralFlagsV2 {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
}
export interface GeneralFlagsV3 {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
}
export interface GeneralFlagsV4 {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
}
export interface GetConnectorRequest {
  ConnectorArn: string;
}
export interface GetConnectorResponse {
  Connector?: Connector;
}
export interface GetDirectoryRegistrationRequest {
  DirectoryRegistrationArn: string;
}
export interface GetDirectoryRegistrationResponse {
  DirectoryRegistration?: DirectoryRegistration;
}
export interface GetServicePrincipalNameRequest {
  DirectoryRegistrationArn: string;
  ConnectorArn: string;
}
export interface GetServicePrincipalNameResponse {
  ServicePrincipalName?: ServicePrincipalName;
}
export interface GetTemplateGroupAccessControlEntryRequest {
  TemplateArn: string;
  GroupSecurityIdentifier: string;
}
export interface GetTemplateGroupAccessControlEntryResponse {
  AccessControlEntry?: AccessControlEntry;
}
export interface GetTemplateRequest {
  TemplateArn: string;
}
export interface GetTemplateResponse {
  Template?: Template;
}
export type GroupSecurityIdentifier = string;

export type HashAlgorithm = "SHA256" | "SHA384" | "SHA512";
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export type IpAddressType = "IPV4" | "DUALSTACK";
export type KeySpec = "KEY_EXCHANGE" | "SIGNATURE";
export interface KeyUsage {
  Critical?: boolean;
  UsageFlags: KeyUsageFlags;
}
export interface KeyUsageFlags {
  DigitalSignature?: boolean;
  NonRepudiation?: boolean;
  KeyEncipherment?: boolean;
  DataEncipherment?: boolean;
  KeyAgreement?: boolean;
}
interface _KeyUsageProperty {
  PropertyType?: KeyUsagePropertyType;
  PropertyFlags?: KeyUsagePropertyFlags;
}

export type KeyUsageProperty = (_KeyUsageProperty & { PropertyType: KeyUsagePropertyType }) | (_KeyUsageProperty & { PropertyFlags: KeyUsagePropertyFlags });
export interface KeyUsagePropertyFlags {
  Decrypt?: boolean;
  KeyAgreement?: boolean;
  Sign?: boolean;
}
export type KeyUsagePropertyType = "ALL";
export interface ListConnectorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListConnectorsResponse {
  Connectors?: Array<ConnectorSummary>;
  NextToken?: string;
}
export interface ListDirectoryRegistrationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDirectoryRegistrationsResponse {
  DirectoryRegistrations?: Array<DirectoryRegistrationSummary>;
  NextToken?: string;
}
export interface ListServicePrincipalNamesRequest {
  MaxResults?: number;
  NextToken?: string;
  DirectoryRegistrationArn: string;
}
export interface ListServicePrincipalNamesResponse {
  ServicePrincipalNames?: Array<ServicePrincipalNameSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListTemplateGroupAccessControlEntriesRequest {
  MaxResults?: number;
  NextToken?: string;
  TemplateArn: string;
}
export interface ListTemplateGroupAccessControlEntriesResponse {
  AccessControlEntries?: Array<AccessControlEntrySummary>;
  NextToken?: string;
}
export interface ListTemplatesRequest {
  MaxResults?: number;
  NextToken?: string;
  ConnectorArn: string;
}
export interface ListTemplatesResponse {
  Templates?: Array<TemplateSummary>;
  NextToken?: string;
}
export type MaxResults = number;

export type NextToken = string;

export type PrivateKeyAlgorithm = "RSA" | "ECDH_P256" | "ECDH_P384" | "ECDH_P521";
export interface PrivateKeyAttributesV2 {
  MinimalKeyLength: number;
  KeySpec: KeySpec;
  CryptoProviders?: Array<string>;
}
export interface PrivateKeyAttributesV3 {
  MinimalKeyLength: number;
  KeySpec: KeySpec;
  CryptoProviders?: Array<string>;
  KeyUsageProperty: KeyUsageProperty;
  Algorithm: PrivateKeyAlgorithm;
}
export interface PrivateKeyAttributesV4 {
  MinimalKeyLength: number;
  KeySpec: KeySpec;
  CryptoProviders?: Array<string>;
  KeyUsageProperty?: KeyUsageProperty;
  Algorithm?: PrivateKeyAlgorithm;
}
export interface PrivateKeyFlagsV2 {
  ExportableKey?: boolean;
  StrongKeyProtectionRequired?: boolean;
  ClientVersion: ClientCompatibilityV2;
}
export interface PrivateKeyFlagsV3 {
  ExportableKey?: boolean;
  StrongKeyProtectionRequired?: boolean;
  RequireAlternateSignatureAlgorithm?: boolean;
  ClientVersion: ClientCompatibilityV3;
}
export interface PrivateKeyFlagsV4 {
  ExportableKey?: boolean;
  StrongKeyProtectionRequired?: boolean;
  RequireAlternateSignatureAlgorithm?: boolean;
  RequireSameKeyRenewal?: boolean;
  UseLegacyProvider?: boolean;
  ClientVersion: ClientCompatibilityV4;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
}> {}
export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<string>;
export interface ServicePrincipalName {
  DirectoryRegistrationArn?: string;
  ConnectorArn?: string;
  Status?: ServicePrincipalNameStatus;
  StatusReason?: ServicePrincipalNameStatusReason;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type ServicePrincipalNameList = Array<ServicePrincipalNameSummary>;
export type ServicePrincipalNameStatus = "CREATING" | "ACTIVE" | "DELETING" | "FAILED";
export type ServicePrincipalNameStatusReason = "DIRECTORY_ACCESS_DENIED" | "DIRECTORY_NOT_REACHABLE" | "DIRECTORY_RESOURCE_NOT_FOUND" | "SPN_EXISTS_ON_DIFFERENT_AD_OBJECT" | "SPN_LIMIT_EXCEEDED" | "INTERNAL_FAILURE";
export interface ServicePrincipalNameSummary {
  DirectoryRegistrationArn?: string;
  ConnectorArn?: string;
  Status?: ServicePrincipalNameStatus;
  StatusReason?: ServicePrincipalNameStatusReason;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId: string;
  readonly ResourceType: string;
  readonly ServiceCode: string;
  readonly QuotaCode: string;
}> {}
export interface SubjectNameFlagsV2 {
  SanRequireDomainDns?: boolean;
  SanRequireSpn?: boolean;
  SanRequireDirectoryGuid?: boolean;
  SanRequireUpn?: boolean;
  SanRequireEmail?: boolean;
  SanRequireDns?: boolean;
  RequireDnsAsCn?: boolean;
  RequireEmail?: boolean;
  RequireCommonName?: boolean;
  RequireDirectoryPath?: boolean;
}
export interface SubjectNameFlagsV3 {
  SanRequireDomainDns?: boolean;
  SanRequireSpn?: boolean;
  SanRequireDirectoryGuid?: boolean;
  SanRequireUpn?: boolean;
  SanRequireEmail?: boolean;
  SanRequireDns?: boolean;
  RequireDnsAsCn?: boolean;
  RequireEmail?: boolean;
  RequireCommonName?: boolean;
  RequireDirectoryPath?: boolean;
}
export interface SubjectNameFlagsV4 {
  SanRequireDomainDns?: boolean;
  SanRequireSpn?: boolean;
  SanRequireDirectoryGuid?: boolean;
  SanRequireUpn?: boolean;
  SanRequireEmail?: boolean;
  SanRequireDns?: boolean;
  RequireDnsAsCn?: boolean;
  RequireEmail?: boolean;
  RequireCommonName?: boolean;
  RequireDirectoryPath?: boolean;
}
export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export interface Template {
  Arn?: string;
  ConnectorArn?: string;
  Definition?: TemplateDefinition;
  Name?: string;
  ObjectIdentifier?: string;
  PolicySchema?: number;
  Status?: TemplateStatus;
  Revision?: TemplateRevision;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export type TemplateArn = string;

interface _TemplateDefinition {
  TemplateV2?: TemplateV2;
  TemplateV3?: TemplateV3;
  TemplateV4?: TemplateV4;
}

export type TemplateDefinition = (_TemplateDefinition & { TemplateV2: TemplateV2 }) | (_TemplateDefinition & { TemplateV3: TemplateV3 }) | (_TemplateDefinition & { TemplateV4: TemplateV4 });
export type TemplateList = Array<TemplateSummary>;
export type TemplateName = string;

export type TemplateNameList = Array<string>;
export interface TemplateRevision {
  MajorRevision: number;
  MinorRevision: number;
}
export type TemplateStatus = "ACTIVE" | "DELETING";
export interface TemplateSummary {
  Arn?: string;
  ConnectorArn?: string;
  Definition?: TemplateDefinition;
  Name?: string;
  ObjectIdentifier?: string;
  PolicySchema?: number;
  Status?: TemplateStatus;
  Revision?: TemplateRevision;
  CreatedAt?: Date | string;
  UpdatedAt?: Date | string;
}
export interface TemplateV2 {
  CertificateValidity: CertificateValidity;
  SupersededTemplates?: Array<string>;
  PrivateKeyAttributes: PrivateKeyAttributesV2;
  PrivateKeyFlags: PrivateKeyFlagsV2;
  EnrollmentFlags: EnrollmentFlagsV2;
  SubjectNameFlags: SubjectNameFlagsV2;
  GeneralFlags: GeneralFlagsV2;
  Extensions: ExtensionsV2;
}
export interface TemplateV3 {
  CertificateValidity: CertificateValidity;
  SupersededTemplates?: Array<string>;
  PrivateKeyAttributes: PrivateKeyAttributesV3;
  PrivateKeyFlags: PrivateKeyFlagsV3;
  EnrollmentFlags: EnrollmentFlagsV3;
  SubjectNameFlags: SubjectNameFlagsV3;
  GeneralFlags: GeneralFlagsV3;
  HashAlgorithm: HashAlgorithm;
  Extensions: ExtensionsV3;
}
export interface TemplateV4 {
  CertificateValidity: CertificateValidity;
  SupersededTemplates?: Array<string>;
  PrivateKeyAttributes: PrivateKeyAttributesV4;
  PrivateKeyFlags: PrivateKeyFlagsV4;
  EnrollmentFlags: EnrollmentFlagsV4;
  SubjectNameFlags: SubjectNameFlagsV4;
  GeneralFlags: GeneralFlagsV4;
  HashAlgorithm?: HashAlgorithm;
  Extensions: ExtensionsV4;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly ServiceCode?: string;
  readonly QuotaCode?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateTemplateGroupAccessControlEntryRequest {
  TemplateArn: string;
  GroupSecurityIdentifier: string;
  GroupDisplayName?: string;
  AccessRights?: AccessRights;
}
export interface UpdateTemplateRequest {
  TemplateArn: string;
  Definition?: TemplateDefinition;
  ReenrollAllCertificateHolders?: boolean;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
  readonly Reason?: ValidationExceptionReason;
}> {}
export type ValidationExceptionReason = "FIELD_VALIDATION_FAILED" | "INVALID_CA_SUBJECT" | "INVALID_PERMISSION" | "INVALID_STATE" | "MISMATCHED_CONNECTOR" | "MISMATCHED_VPC" | "NO_CLIENT_TOKEN" | "UNKNOWN_OPERATION" | "OTHER";
export interface ValidityPeriod {
  PeriodType: ValidityPeriodType;
  Period: number;
}
export type ValidityPeriodType = "HOURS" | "DAYS" | "WEEKS" | "MONTHS" | "YEARS";
export interface VpcInformation {
  IpAddressType?: IpAddressType;
  SecurityGroupIds: Array<string>;
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

