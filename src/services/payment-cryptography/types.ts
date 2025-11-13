import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class PaymentCryptography extends AWSServiceClient {
  disableDefaultKeyReplicationRegions(
    input: DisableDefaultKeyReplicationRegionsInput,
  ): Effect.Effect<
    DisableDefaultKeyReplicationRegionsOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  enableDefaultKeyReplicationRegions(
    input: EnableDefaultKeyReplicationRegionsInput,
  ): Effect.Effect<
    EnableDefaultKeyReplicationRegionsOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  exportKey(
    input: ExportKeyInput,
  ): Effect.Effect<
    ExportKeyOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCertificateSigningRequest(
    input: GetCertificateSigningRequestInput,
  ): Effect.Effect<
    GetCertificateSigningRequestOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDefaultKeyReplicationRegions(
    input: GetDefaultKeyReplicationRegionsInput,
  ): Effect.Effect<
    GetDefaultKeyReplicationRegionsOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getParametersForExport(
    input: GetParametersForExportInput,
  ): Effect.Effect<
    GetParametersForExportOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getParametersForImport(
    input: GetParametersForImportInput,
  ): Effect.Effect<
    GetParametersForImportOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPublicKeyCertificate(
    input: GetPublicKeyCertificateInput,
  ): Effect.Effect<
    GetPublicKeyCertificateOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  importKey(
    input: ImportKeyInput,
  ): Effect.Effect<
    ImportKeyOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  addKeyReplicationRegions(
    input: AddKeyReplicationRegionsInput,
  ): Effect.Effect<
    AddKeyReplicationRegionsOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createAlias(
    input: CreateAliasInput,
  ): Effect.Effect<
    CreateAliasOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createKey(
    input: CreateKeyInput,
  ): Effect.Effect<
    CreateKeyOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteAlias(
    input: DeleteAliasInput,
  ): Effect.Effect<
    DeleteAliasOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteKey(
    input: DeleteKeyInput,
  ): Effect.Effect<
    DeleteKeyOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAlias(
    input: GetAliasInput,
  ): Effect.Effect<
    GetAliasOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getKey(
    input: GetKeyInput,
  ): Effect.Effect<
    GetKeyOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listAliases(
    input: ListAliasesInput,
  ): Effect.Effect<
    ListAliasesOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listKeys(
    input: ListKeysInput,
  ): Effect.Effect<
    ListKeysOutput,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  removeKeyReplicationRegions(
    input: RemoveKeyReplicationRegionsInput,
  ): Effect.Effect<
    RemoveKeyReplicationRegionsOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  restoreKey(
    input: RestoreKeyInput,
  ): Effect.Effect<
    RestoreKeyOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startKeyUsage(
    input: StartKeyUsageInput,
  ): Effect.Effect<
    StartKeyUsageOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  stopKeyUsage(
    input: StopKeyUsageInput,
  ): Effect.Effect<
    StopKeyUsageOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateAlias(
    input: UpdateAliasInput,
  ): Effect.Effect<
    UpdateAliasOutput,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AddKeyReplicationRegionsInput {
  KeyIdentifier: string;
  ReplicationRegions: Array<string>;
}
export interface AddKeyReplicationRegionsOutput {
  Key: Key;
}
export interface Alias {
  AliasName: string;
  KeyArn?: string;
}
export type Aliases = Array<Alias>;
export type AliasName = string;

export type CertificateSigningRequestType = string;

export interface CertificateSubjectType {
  CommonName: string;
  OrganizationUnit?: string;
  Organization?: string;
  City?: string;
  Country?: string;
  StateOrProvince?: string;
  EmailAddress?: string;
}
export type CertificateType = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateAliasInput {
  AliasName: string;
  KeyArn?: string;
}
export interface CreateAliasOutput {
  Alias: Alias;
}
export interface CreateKeyInput {
  KeyAttributes: KeyAttributes;
  KeyCheckValueAlgorithm?: string;
  Exportable: boolean;
  Enabled?: boolean;
  Tags?: Array<Tag>;
  DeriveKeyUsage?: string;
  ReplicationRegions?: Array<string>;
}
export interface CreateKeyOutput {
  Key: Key;
}
export interface DeleteAliasInput {
  AliasName: string;
}
export interface DeleteAliasOutput {
}
export interface DeleteKeyInput {
  KeyIdentifier: string;
  DeleteKeyInDays?: number;
}
export interface DeleteKeyOutput {
  Key: Key;
}
export type DeriveKeyUsage = string;

interface _DiffieHellmanDerivationData {
  SharedInformation?: string;
}

export type DiffieHellmanDerivationData = (_DiffieHellmanDerivationData & { SharedInformation: string });
export interface DisableDefaultKeyReplicationRegionsInput {
  ReplicationRegions: Array<string>;
}
export interface DisableDefaultKeyReplicationRegionsOutput {
  EnabledReplicationRegions: Array<string>;
}
export interface EnableDefaultKeyReplicationRegionsInput {
  ReplicationRegions: Array<string>;
}
export interface EnableDefaultKeyReplicationRegionsOutput {
  EnabledReplicationRegions: Array<string>;
}
export type EvenHexLengthBetween16And32 = string;

export interface ExportAttributes {
  ExportDukptInitialKey?: ExportDukptInitialKey;
  KeyCheckValueAlgorithm?: string;
}
export interface ExportDiffieHellmanTr31KeyBlock {
  PrivateKeyIdentifier: string;
  CertificateAuthorityPublicKeyIdentifier: string;
  PublicKeyCertificate: string;
  DeriveKeyAlgorithm: SymmetricKeyAlgorithm;
  KeyDerivationFunction: KeyDerivationFunction;
  KeyDerivationHashAlgorithm: KeyDerivationHashAlgorithm;
  DerivationData: DiffieHellmanDerivationData;
  KeyBlockHeaders?: KeyBlockHeaders;
}
export interface ExportDukptInitialKey {
  KeySerialNumber: string;
}
export interface ExportKeyCryptogram {
  CertificateAuthorityPublicKeyIdentifier: string;
  WrappingKeyCertificate: string;
  WrappingSpec?: string;
}
export interface ExportKeyInput {
  KeyMaterial: ExportKeyMaterial;
  ExportKeyIdentifier: string;
  ExportAttributes?: ExportAttributes;
}
interface _ExportKeyMaterial {
  Tr31KeyBlock?: ExportTr31KeyBlock;
  Tr34KeyBlock?: ExportTr34KeyBlock;
  KeyCryptogram?: ExportKeyCryptogram;
  DiffieHellmanTr31KeyBlock?: ExportDiffieHellmanTr31KeyBlock;
}

export type ExportKeyMaterial = (_ExportKeyMaterial & { Tr31KeyBlock: ExportTr31KeyBlock }) | (_ExportKeyMaterial & { Tr34KeyBlock: ExportTr34KeyBlock }) | (_ExportKeyMaterial & { KeyCryptogram: ExportKeyCryptogram }) | (_ExportKeyMaterial & { DiffieHellmanTr31KeyBlock: ExportDiffieHellmanTr31KeyBlock });
export interface ExportKeyOutput {
  WrappedKey?: WrappedKey;
}
export type ExportTokenId = string;

export interface ExportTr31KeyBlock {
  WrappingKeyIdentifier: string;
  KeyBlockHeaders?: KeyBlockHeaders;
}
export interface ExportTr34KeyBlock {
  CertificateAuthorityPublicKeyIdentifier: string;
  WrappingKeyCertificate: string;
  ExportToken?: string;
  SigningKeyIdentifier?: string;
  SigningKeyCertificate?: string;
  KeyBlockFormat: string;
  RandomNonce?: string;
  KeyBlockHeaders?: KeyBlockHeaders;
}
export interface GetAliasInput {
  AliasName: string;
}
export interface GetAliasOutput {
  Alias: Alias;
}
export interface GetCertificateSigningRequestInput {
  KeyIdentifier: string;
  SigningAlgorithm: string;
  CertificateSubject: CertificateSubjectType;
}
export interface GetCertificateSigningRequestOutput {
  CertificateSigningRequest: string;
}
export interface GetDefaultKeyReplicationRegionsInput {
}
export interface GetDefaultKeyReplicationRegionsOutput {
  EnabledReplicationRegions: Array<string>;
}
export interface GetKeyInput {
  KeyIdentifier: string;
}
export interface GetKeyOutput {
  Key: Key;
}
export interface GetParametersForExportInput {
  KeyMaterialType: string;
  SigningKeyAlgorithm: string;
}
export interface GetParametersForExportOutput {
  SigningKeyCertificate: string;
  SigningKeyCertificateChain: string;
  SigningKeyAlgorithm: string;
  ExportToken: string;
  ParametersValidUntilTimestamp: Date | string;
}
export interface GetParametersForImportInput {
  KeyMaterialType: string;
  WrappingKeyAlgorithm: string;
}
export interface GetParametersForImportOutput {
  WrappingKeyCertificate: string;
  WrappingKeyCertificateChain: string;
  WrappingKeyAlgorithm: string;
  ImportToken: string;
  ParametersValidUntilTimestamp: Date | string;
}
export interface GetPublicKeyCertificateInput {
  KeyIdentifier: string;
}
export interface GetPublicKeyCertificateOutput {
  KeyCertificate: string;
  KeyCertificateChain: string;
}
export type HexLength20Or24 = string;

export interface ImportDiffieHellmanTr31KeyBlock {
  PrivateKeyIdentifier: string;
  CertificateAuthorityPublicKeyIdentifier: string;
  PublicKeyCertificate: string;
  DeriveKeyAlgorithm: SymmetricKeyAlgorithm;
  KeyDerivationFunction: KeyDerivationFunction;
  KeyDerivationHashAlgorithm: KeyDerivationHashAlgorithm;
  DerivationData: DiffieHellmanDerivationData;
  WrappedKeyBlock: string;
}
export interface ImportKeyCryptogram {
  KeyAttributes: KeyAttributes;
  Exportable: boolean;
  WrappedKeyCryptogram: string;
  ImportToken: string;
  WrappingSpec?: string;
}
export interface ImportKeyInput {
  KeyMaterial: ImportKeyMaterial;
  KeyCheckValueAlgorithm?: string;
  Enabled?: boolean;
  Tags?: Array<Tag>;
  ReplicationRegions?: Array<string>;
}
interface _ImportKeyMaterial {
  RootCertificatePublicKey?: RootCertificatePublicKey;
  TrustedCertificatePublicKey?: TrustedCertificatePublicKey;
  Tr31KeyBlock?: ImportTr31KeyBlock;
  Tr34KeyBlock?: ImportTr34KeyBlock;
  KeyCryptogram?: ImportKeyCryptogram;
  DiffieHellmanTr31KeyBlock?: ImportDiffieHellmanTr31KeyBlock;
}

export type ImportKeyMaterial = (_ImportKeyMaterial & { RootCertificatePublicKey: RootCertificatePublicKey }) | (_ImportKeyMaterial & { TrustedCertificatePublicKey: TrustedCertificatePublicKey }) | (_ImportKeyMaterial & { Tr31KeyBlock: ImportTr31KeyBlock }) | (_ImportKeyMaterial & { Tr34KeyBlock: ImportTr34KeyBlock }) | (_ImportKeyMaterial & { KeyCryptogram: ImportKeyCryptogram }) | (_ImportKeyMaterial & { DiffieHellmanTr31KeyBlock: ImportDiffieHellmanTr31KeyBlock });
export interface ImportKeyOutput {
  Key: Key;
}
export type ImportTokenId = string;

export interface ImportTr31KeyBlock {
  WrappingKeyIdentifier: string;
  WrappedKeyBlock: string;
}
export interface ImportTr34KeyBlock {
  CertificateAuthorityPublicKeyIdentifier: string;
  SigningKeyCertificate: string;
  ImportToken?: string;
  WrappingKeyIdentifier?: string;
  WrappingKeyCertificate?: string;
  WrappedKeyBlock: string;
  KeyBlockFormat: string;
  RandomNonce?: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface Key {
  KeyArn: string;
  KeyAttributes: KeyAttributes;
  KeyCheckValue: string;
  KeyCheckValueAlgorithm: string;
  Enabled: boolean;
  Exportable: boolean;
  KeyState: string;
  KeyOrigin: string;
  CreateTimestamp: Date | string;
  UsageStartTimestamp?: Date | string;
  UsageStopTimestamp?: Date | string;
  DeletePendingTimestamp?: Date | string;
  DeleteTimestamp?: Date | string;
  DeriveKeyUsage?: string;
  MultiRegionKeyType?: string;
  PrimaryRegion?: string;
  ReplicationStatus?: Record<string, ReplicationStatusType>;
  UsingDefaultReplicationRegions?: boolean;
}
export type KeyAlgorithm = string;

export type KeyArn = string;

export type KeyArnOrKeyAliasType = string;

export interface KeyAttributes {
  KeyUsage: string;
  KeyClass: string;
  KeyAlgorithm: string;
  KeyModesOfUse: KeyModesOfUse;
}
export interface KeyBlockHeaders {
  KeyModesOfUse?: KeyModesOfUse;
  KeyExportability?: string;
  KeyVersion?: string;
  OptionalBlocks?: Record<string, string>;
}
export type KeyCheckValue = string;

export type KeyCheckValueAlgorithm = string;

export type KeyClass = string;

export type KeyDerivationFunction = "NIST_SP800" | "ANSI_X963";
export type KeyDerivationHashAlgorithm = "SHA_256" | "SHA_384" | "SHA_512";
export type KeyExportability = string;

export type KeyMaterial = string;

export type KeyMaterialType = string;

export interface KeyModesOfUse {
  Encrypt?: boolean;
  Decrypt?: boolean;
  Wrap?: boolean;
  Unwrap?: boolean;
  Generate?: boolean;
  Sign?: boolean;
  Verify?: boolean;
  DeriveKey?: boolean;
  NoRestrictions?: boolean;
}
export type KeyOrigin = string;

export type KeyReplicationState = string;

export type KeyState = string;

export interface KeySummary {
  KeyArn: string;
  KeyState: string;
  KeyAttributes: KeyAttributes;
  KeyCheckValue: string;
  Exportable: boolean;
  Enabled: boolean;
  MultiRegionKeyType?: string;
  PrimaryRegion?: string;
}
export type KeySummaryList = Array<KeySummary>;
export type KeyUsage = string;

export type KeyVersion = string;

export interface ListAliasesInput {
  KeyArn?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAliasesOutput {
  Aliases: Array<Alias>;
  NextToken?: string;
}
export interface ListKeysInput {
  KeyState?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListKeysOutput {
  Keys: Array<KeySummary>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTagsForResourceOutput {
  Tags: Array<Tag>;
  NextToken?: string;
}
export type MaxResults = number;

export type MultiRegionKeyType = string;

export type NextToken = string;

export type OptionalBlockId = string;

export type OptionalBlocks = Record<string, string>;
export type OptionalBlockValue = string;

export type Region = string;

export type Regions = Array<string>;
export interface RemoveKeyReplicationRegionsInput {
  KeyIdentifier: string;
  ReplicationRegions: Array<string>;
}
export interface RemoveKeyReplicationRegionsOutput {
  Key: Key;
}
export type ReplicationStatus = Record<string, ReplicationStatusType>;
export interface ReplicationStatusType {
  Status: string;
  StatusMessage?: string;
}
export type ResourceArn = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly ResourceId?: string;
}> {}
export interface RestoreKeyInput {
  KeyIdentifier: string;
}
export interface RestoreKeyOutput {
  Key: Key;
}
export interface RootCertificatePublicKey {
  KeyAttributes: KeyAttributes;
  PublicKeyCertificate: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type SharedInformation = string;

export type SigningAlgorithmType = string;

export interface StartKeyUsageInput {
  KeyIdentifier: string;
}
export interface StartKeyUsageOutput {
  Key: Key;
}
export interface StopKeyUsageInput {
  KeyIdentifier: string;
}
export interface StopKeyUsageOutput {
  Key: Key;
}
export type SymmetricKeyAlgorithm = "TDES_2KEY" | "TDES_3KEY" | "AES_128" | "AES_192" | "AES_256" | "HMAC_SHA256" | "HMAC_SHA384" | "HMAC_SHA512" | "HMAC_SHA224";
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeys = Array<string>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceOutput {
}
export type Tags = Array<Tag>;
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export type Tr31WrappedKeyBlock = string;

export type Tr34KeyBlockFormat = string;

export type Tr34WrappedKeyBlock = string;

export interface TrustedCertificatePublicKey {
  KeyAttributes: KeyAttributes;
  PublicKeyCertificate: string;
  CertificateAuthorityPublicKeyIdentifier: string;
}
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {
}
export interface UpdateAliasInput {
  AliasName: string;
  KeyArn?: string;
}
export interface UpdateAliasOutput {
  Alias: Alias;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export interface WrappedKey {
  WrappingKeyArn: string;
  WrappedKeyMaterialFormat: string;
  KeyMaterial: string;
  KeyCheckValue?: string;
  KeyCheckValueAlgorithm?: string;
}
export type WrappedKeyCryptogram = string;

export type WrappedKeyMaterialFormat = string;

export type WrappingKeySpec = string;

export declare namespace DisableDefaultKeyReplicationRegions {
  export type Input = DisableDefaultKeyReplicationRegionsInput;
  export type Output = DisableDefaultKeyReplicationRegionsOutput;
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

export declare namespace EnableDefaultKeyReplicationRegions {
  export type Input = EnableDefaultKeyReplicationRegionsInput;
  export type Output = EnableDefaultKeyReplicationRegionsOutput;
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

export declare namespace ExportKey {
  export type Input = ExportKeyInput;
  export type Output = ExportKeyOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCertificateSigningRequest {
  export type Input = GetCertificateSigningRequestInput;
  export type Output = GetCertificateSigningRequestOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDefaultKeyReplicationRegions {
  export type Input = GetDefaultKeyReplicationRegionsInput;
  export type Output = GetDefaultKeyReplicationRegionsOutput;
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

export declare namespace GetParametersForExport {
  export type Input = GetParametersForExportInput;
  export type Output = GetParametersForExportOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetParametersForImport {
  export type Input = GetParametersForImportInput;
  export type Output = GetParametersForImportOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPublicKeyCertificate {
  export type Input = GetPublicKeyCertificateInput;
  export type Output = GetPublicKeyCertificateOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportKey {
  export type Input = ImportKeyInput;
  export type Output = ImportKeyOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AddKeyReplicationRegions {
  export type Input = AddKeyReplicationRegionsInput;
  export type Output = AddKeyReplicationRegionsOutput;
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

export declare namespace CreateAlias {
  export type Input = CreateAliasInput;
  export type Output = CreateAliasOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateKey {
  export type Input = CreateKeyInput;
  export type Output = CreateKeyOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAlias {
  export type Input = DeleteAliasInput;
  export type Output = DeleteAliasOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteKey {
  export type Input = DeleteKeyInput;
  export type Output = DeleteKeyOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAlias {
  export type Input = GetAliasInput;
  export type Output = GetAliasOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetKey {
  export type Input = GetKeyInput;
  export type Output = GetKeyOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListAliases {
  export type Input = ListAliasesInput;
  export type Output = ListAliasesOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListKeys {
  export type Input = ListKeysInput;
  export type Output = ListKeysOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace RemoveKeyReplicationRegions {
  export type Input = RemoveKeyReplicationRegionsInput;
  export type Output = RemoveKeyReplicationRegionsOutput;
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

export declare namespace RestoreKey {
  export type Input = RestoreKeyInput;
  export type Output = RestoreKeyOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartKeyUsage {
  export type Input = StartKeyUsageInput;
  export type Output = StartKeyUsageOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopKeyUsage {
  export type Input = StopKeyUsageInput;
  export type Output = StopKeyUsageOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateAlias {
  export type Input = UpdateAliasInput;
  export type Output = UpdateAliasOutput;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export type PaymentCryptographyErrors = AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ServiceUnavailableException | ThrottlingException | ValidationException | CommonAwsError;

