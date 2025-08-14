import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class TaxSettings extends AWSServiceClient {
  batchDeleteTaxRegistration(
    input: BatchDeleteTaxRegistrationRequest,
  ): Effect.Effect<
    BatchDeleteTaxRegistrationResponse,
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  batchGetTaxExemptions(
    input: BatchGetTaxExemptionsRequest,
  ): Effect.Effect<
    BatchGetTaxExemptionsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  batchPutTaxRegistration(
    input: BatchPutTaxRegistrationRequest,
  ): Effect.Effect<
    BatchPutTaxRegistrationResponse,
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  deleteSupplementalTaxRegistration(
    input: DeleteSupplementalTaxRegistrationRequest,
  ): Effect.Effect<
    DeleteSupplementalTaxRegistrationResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteTaxRegistration(
    input: DeleteTaxRegistrationRequest,
  ): Effect.Effect<
    DeleteTaxRegistrationResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getTaxExemptionTypes(
    input: GetTaxExemptionTypesRequest,
  ): Effect.Effect<
    GetTaxExemptionTypesResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getTaxInheritance(
    input: GetTaxInheritanceRequest,
  ): Effect.Effect<
    GetTaxInheritanceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getTaxRegistration(
    input: GetTaxRegistrationRequest,
  ): Effect.Effect<
    GetTaxRegistrationResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getTaxRegistrationDocument(
    input: GetTaxRegistrationDocumentRequest,
  ): Effect.Effect<
    GetTaxRegistrationDocumentResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listSupplementalTaxRegistrations(
    input: ListSupplementalTaxRegistrationsRequest,
  ): Effect.Effect<
    ListSupplementalTaxRegistrationsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listTaxExemptions(
    input: ListTaxExemptionsRequest,
  ): Effect.Effect<
    ListTaxExemptionsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listTaxRegistrations(
    input: ListTaxRegistrationsRequest,
  ): Effect.Effect<
    ListTaxRegistrationsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putSupplementalTaxRegistration(
    input: PutSupplementalTaxRegistrationRequest,
  ): Effect.Effect<
    PutSupplementalTaxRegistrationResponse,
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  putTaxExemption(
    input: PutTaxExemptionRequest,
  ): Effect.Effect<
    PutTaxExemptionResponse,
    | AccessDeniedException
    | AttachmentUploadException
    | CaseCreationLimitExceededException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putTaxInheritance(
    input: PutTaxInheritanceRequest,
  ): Effect.Effect<
    PutTaxInheritanceResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putTaxRegistration(
    input: PutTaxRegistrationRequest,
  ): Effect.Effect<
    PutTaxRegistrationResponse,
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Taxsettings extends TaxSettings {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AccountDetails {
  accountId?: string;
  taxRegistration?: TaxRegistrationWithJurisdiction;
  taxInheritanceDetails?: TaxInheritanceDetails;
  accountMetaData?: AccountMetaData;
}
export type AccountDetailsList = Array<AccountDetails>;
export type AccountId = string;

export type AccountIds = Array<string>;
export interface AccountMetaData {
  accountName?: string;
  seller?: string;
  address?: Address;
  addressType?: AddressRoleType;
  addressRoleMap?: Partial<Record<AddressRoleType, Jurisdiction>>;
}
export type AccountName = string;

export interface AdditionalInfoRequest {
  malaysiaAdditionalInfo?: MalaysiaAdditionalInfo;
  israelAdditionalInfo?: IsraelAdditionalInfo;
  estoniaAdditionalInfo?: EstoniaAdditionalInfo;
  canadaAdditionalInfo?: CanadaAdditionalInfo;
  spainAdditionalInfo?: SpainAdditionalInfo;
  kenyaAdditionalInfo?: KenyaAdditionalInfo;
  southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo;
  turkeyAdditionalInfo?: TurkeyAdditionalInfo;
  georgiaAdditionalInfo?: GeorgiaAdditionalInfo;
  italyAdditionalInfo?: ItalyAdditionalInfo;
  romaniaAdditionalInfo?: RomaniaAdditionalInfo;
  ukraineAdditionalInfo?: UkraineAdditionalInfo;
  polandAdditionalInfo?: PolandAdditionalInfo;
  saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo;
  indonesiaAdditionalInfo?: IndonesiaAdditionalInfo;
  vietnamAdditionalInfo?: VietnamAdditionalInfo;
  egyptAdditionalInfo?: EgyptAdditionalInfo;
  greeceAdditionalInfo?: GreeceAdditionalInfo;
  uzbekistanAdditionalInfo?: UzbekistanAdditionalInfo;
}
export interface AdditionalInfoResponse {
  malaysiaAdditionalInfo?: MalaysiaAdditionalInfo;
  israelAdditionalInfo?: IsraelAdditionalInfo;
  estoniaAdditionalInfo?: EstoniaAdditionalInfo;
  canadaAdditionalInfo?: CanadaAdditionalInfo;
  brazilAdditionalInfo?: BrazilAdditionalInfo;
  spainAdditionalInfo?: SpainAdditionalInfo;
  kenyaAdditionalInfo?: KenyaAdditionalInfo;
  southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo;
  turkeyAdditionalInfo?: TurkeyAdditionalInfo;
  georgiaAdditionalInfo?: GeorgiaAdditionalInfo;
  italyAdditionalInfo?: ItalyAdditionalInfo;
  romaniaAdditionalInfo?: RomaniaAdditionalInfo;
  ukraineAdditionalInfo?: UkraineAdditionalInfo;
  polandAdditionalInfo?: PolandAdditionalInfo;
  saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo;
  indiaAdditionalInfo?: IndiaAdditionalInfo;
  indonesiaAdditionalInfo?: IndonesiaAdditionalInfo;
  vietnamAdditionalInfo?: VietnamAdditionalInfo;
  egyptAdditionalInfo?: EgyptAdditionalInfo;
  greeceAdditionalInfo?: GreeceAdditionalInfo;
  uzbekistanAdditionalInfo?: UzbekistanAdditionalInfo;
}
export interface Address {
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  districtOrCounty?: string;
  city: string;
  stateOrRegion?: string;
  postalCode: string;
  countryCode: string;
}
export type AddressLine1 = string;

export type AddressLine2 = string;

export type AddressLine3 = string;

export type AddressRoleMap = Partial<Record<AddressRoleType, Jurisdiction>>;
export type AddressRoleType =
  | "TAX_ADDRESS"
  | "BILLING_ADDRESS"
  | "CONTACT_ADDRESS";
export declare class AttachmentUploadException extends EffectData.TaggedError(
  "AttachmentUploadException",
)<{
  readonly message: string;
}> {}
export type Authorities = Array<Authority>;
export interface Authority {
  country: string;
  state?: string;
}
export interface BatchDeleteTaxRegistrationError {
  accountId: string;
  message: string;
  code?: string;
}
export type BatchDeleteTaxRegistrationErrors =
  Array<BatchDeleteTaxRegistrationError>;
export interface BatchDeleteTaxRegistrationRequest {
  accountIds: Array<string>;
}
export interface BatchDeleteTaxRegistrationResponse {
  errors: Array<BatchDeleteTaxRegistrationError>;
}
export interface BatchGetTaxExemptionsRequest {
  accountIds: Array<string>;
}
export interface BatchGetTaxExemptionsResponse {
  taxExemptionDetailsMap?: Partial<Record<string, TaxExemptionDetails>>;
  failedAccounts?: Array<string>;
}
export interface BatchPutTaxRegistrationError {
  accountId: string;
  message: string;
  code?: string;
}
export type BatchPutTaxRegistrationErrors = Array<BatchPutTaxRegistrationError>;
export interface BatchPutTaxRegistrationRequest {
  accountIds: Array<string>;
  taxRegistrationEntry: TaxRegistrationEntry;
}
export interface BatchPutTaxRegistrationResponse {
  status?: TaxRegistrationStatus;
  errors: Array<BatchPutTaxRegistrationError>;
}
export type TaxsettingsBoolean = boolean;

export interface BrazilAdditionalInfo {
  ccmCode?: string;
  legalNatureCode?: string;
}
export type BusinessRegistrationNumber = string;

export type BusinessRepresentativeName = string;

export interface CanadaAdditionalInfo {
  provincialSalesTaxId?: string;
  canadaQuebecSalesTaxNumber?: string;
  canadaRetailSalesTaxNumber?: string;
  isResellerAccount?: boolean;
}
export type CanadaProvincialSalesTaxIdString = string;

export type CanadaQuebecSalesTaxNumberString = string;

export type CanadaRetailSalesTaxNumberString = string;

export declare class CaseCreationLimitExceededException extends EffectData.TaggedError(
  "CaseCreationLimitExceededException",
)<{
  readonly message: string;
}> {}
export type CcmCode = string;

export type CertifiedEmailId = string;

export type CigNumber = string;

export type City = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly errorCode: string;
}> {}
export type ContractingAuthorityCode = string;

export type CountryCode = string;

export type CupNumber = string;

export type DateOfBirth = string;

export type DateString = string;

export type DecisionNumber = string;

export interface DeleteSupplementalTaxRegistrationRequest {
  authorityId: string;
}
export interface DeleteSupplementalTaxRegistrationResponse {}
export interface DeleteTaxRegistrationRequest {
  accountId?: string;
}
export interface DeleteTaxRegistrationResponse {}
export type DestinationFilePath = string;

export interface DestinationS3Location {
  bucket: string;
  prefix?: string;
}
export type DisplayName = string;

export type District = string;

export interface EgyptAdditionalInfo {
  uniqueIdentificationNumber?: string;
  uniqueIdentificationNumberExpirationDate?: string;
}
export type ElectronicTransactionCodeNumber = string;

export type EnterpriseIdentificationNumber = string;

export type EntityExemptionAccountStatus =
  | "None"
  | "Valid"
  | "Expired"
  | "Pending";
export type ErrorCode = string;

export type ErrorMessage = string;

export interface EstoniaAdditionalInfo {
  registryCommercialCode: string;
}
export interface ExemptionCertificate {
  documentName: string;
  documentFile: Uint8Array | string;
}
export type ExemptionDocumentName = string;

export type ExemptionFileBlob = Uint8Array | string;

export type FieldName = string;

export type FileBlob = Uint8Array | string;

export type GenericString = string;

export interface GeorgiaAdditionalInfo {
  personType: PersonType;
}
export interface GetTaxExemptionTypesRequest {}
export interface GetTaxExemptionTypesResponse {
  taxExemptionTypes?: Array<TaxExemptionType>;
}
export interface GetTaxInheritanceRequest {}
export interface GetTaxInheritanceResponse {
  heritageStatus?: HeritageStatus;
}
export interface GetTaxRegistrationDocumentRequest {
  destinationS3Location?: DestinationS3Location;
  taxDocumentMetadata: TaxDocumentMetadata;
}
export interface GetTaxRegistrationDocumentResponse {
  destinationFilePath?: string;
  presignedS3Url?: string;
}
export interface GetTaxRegistrationRequest {
  accountId?: string;
}
export interface GetTaxRegistrationResponse {
  taxRegistration?: TaxRegistration;
}
export interface GreeceAdditionalInfo {
  contractingAuthorityCode?: string;
}
export type HeritageStatus = "OptIn" | "OptOut";
export interface IndiaAdditionalInfo {
  pan?: string;
}
export type IndividualRegistrationNumber = string;

export interface IndonesiaAdditionalInfo {
  taxRegistrationNumberType?: IndonesiaTaxRegistrationNumberType;
  ppnExceptionDesignationCode?: string;
  decisionNumber?: string;
}
export type IndonesiaTaxRegistrationNumberType =
  | "NIK"
  | "PASSPORT_NUMBER"
  | "NPWP"
  | "NITKU";
export type Industries =
  | "CIRCULATING_ORG"
  | "PROFESSIONAL_ORG"
  | "BANKS"
  | "INSURANCE"
  | "PENSION_AND_BENEFIT_FUNDS"
  | "DEVELOPMENT_AGENCIES";
export type InheritanceObtainedReason = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly errorCode: string;
}> {}
export interface IsraelAdditionalInfo {
  dealerType: IsraelDealerType;
  customerType: IsraelCustomerType;
}
export type IsraelCustomerType = "BUSINESS" | "INDIVIDUAL";
export type IsraelDealerType = "AUTHORIZED" | "NON_AUTHORIZED";
export interface ItalyAdditionalInfo {
  sdiAccountId?: string;
  cigNumber?: string;
  cupNumber?: string;
  taxCode?: string;
}
export type ItemOfBusiness = string;

export interface Jurisdiction {
  stateOrRegion?: string;
  countryCode: string;
}
export interface KenyaAdditionalInfo {
  personType: PersonType;
}
export type KepEmailId = string;

export type LegalName = string;

export type LegalNatureCode = string;

export type LineOfBusiness = string;

export interface ListSupplementalTaxRegistrationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSupplementalTaxRegistrationsResponse {
  taxRegistrations: Array<SupplementalTaxRegistration>;
  nextToken?: string;
}
export interface ListTaxExemptionsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListTaxExemptionsResponse {
  nextToken?: string;
  taxExemptionDetailsMap?: Partial<Record<string, TaxExemptionDetails>>;
}
export interface ListTaxRegistrationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListTaxRegistrationsResponse {
  accountDetails: Array<AccountDetails>;
  nextToken?: string;
}
export interface MalaysiaAdditionalInfo {
  serviceTaxCodes?: Array<MalaysiaServiceTaxCode>;
  taxInformationNumber?: string;
  businessRegistrationNumber?: string;
}
export type MalaysiaServiceTaxCode =
  | "CONSULTANCY"
  | "DIGITAL_SVC_ELECTRONIC_MEDIUM"
  | "IT_SERVICES"
  | "TRAINING_OR_COACHING";
export type MalaysiaServiceTaxCodesList = Array<MalaysiaServiceTaxCode>;
export type MaxResults = number;

export type PaginationTokenString = string;

export type Pan = string;

export type PaymentVoucherNumber = string;

export type PersonType = "LEGAL_PERSON" | "PHYSICAL_PERSON" | "BUSINESS";
export interface PolandAdditionalInfo {
  individualRegistrationNumber?: string;
  isGroupVatEnabled?: boolean;
}
export type PostalCode = string;

export type PpnExceptionDesignationCode = string;

export interface PutSupplementalTaxRegistrationRequest {
  taxRegistrationEntry: SupplementalTaxRegistrationEntry;
}
export interface PutSupplementalTaxRegistrationResponse {
  authorityId: string;
  status: TaxRegistrationStatus;
}
export interface PutTaxExemptionRequest {
  accountIds: Array<string>;
  authority: Authority;
  exemptionType: string;
  exemptionCertificate: ExemptionCertificate;
}
export interface PutTaxExemptionResponse {
  caseId?: string;
}
export interface PutTaxInheritanceRequest {
  heritageStatus?: HeritageStatus;
}
export interface PutTaxInheritanceResponse {}
export interface PutTaxRegistrationRequest {
  accountId?: string;
  taxRegistrationEntry: TaxRegistrationEntry;
}
export interface PutTaxRegistrationResponse {
  status?: TaxRegistrationStatus;
}
export type RegistrationId = string;

export type RegistrationType = "INTRA_EU" | "LOCAL";
export type RegistryCommercialCode = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly errorCode: string;
}> {}
export interface RomaniaAdditionalInfo {
  taxRegistrationNumberType: TaxRegistrationNumberType;
}
export type S3BucketName = string;

export type S3Key = string;

export type S3Prefix = string;

export interface SaudiArabiaAdditionalInfo {
  taxRegistrationNumberType?: SaudiArabiaTaxRegistrationNumberType;
}
export type SaudiArabiaTaxRegistrationNumberType =
  | "TAX_REGISTRATION_NUMBER"
  | "TAX_IDENTIFICATION_NUMBER"
  | "COMMERCIAL_REGISTRATION_NUMBER";
export type SdiAccountId = string;

export type SecondaryTaxId = string;

export type Sector = "BUSINESS" | "INDIVIDUAL" | "PUBLIC_INSTITUTIONS";
export type Seller = string;

export interface SourceS3Location {
  bucket: string;
  key: string;
}
export interface SouthKoreaAdditionalInfo {
  businessRepresentativeName: string;
  lineOfBusiness: string;
  itemOfBusiness: string;
}
export interface SpainAdditionalInfo {
  registrationType: RegistrationType;
}
export type State = string;

export interface SupplementalTaxRegistration {
  registrationId: string;
  registrationType: SupplementalTaxRegistrationType;
  legalName: string;
  address: Address;
  authorityId: string;
  status: TaxRegistrationStatus;
}
export interface SupplementalTaxRegistrationEntry {
  registrationId: string;
  registrationType: SupplementalTaxRegistrationType;
  legalName: string;
  address: Address;
}
export type SupplementalTaxRegistrationList =
  Array<SupplementalTaxRegistration>;
export type SupplementalTaxRegistrationType = "VAT";
export type TaxCode = string;

export type TaxDocumentAccessToken = string;

export interface TaxDocumentMetadata {
  taxDocumentAccessToken: string;
  taxDocumentName: string;
}
export type TaxDocumentMetadatas = Array<TaxDocumentMetadata>;
export type TaxDocumentName = string;

export interface TaxExemption {
  authority: Authority;
  taxExemptionType: TaxExemptionType;
  effectiveDate?: Date | string;
  expirationDate?: Date | string;
  systemEffectiveDate?: Date | string;
  status?: EntityExemptionAccountStatus;
}
export interface TaxExemptionDetails {
  taxExemptions?: Array<TaxExemption>;
  heritageObtainedDetails?: boolean;
  heritageObtainedParentEntity?: string;
  heritageObtainedReason?: string;
}
export type TaxExemptionDetailsMap = Partial<
  Record<string, TaxExemptionDetails>
>;
export type TaxExemptions = Array<TaxExemption>;
export interface TaxExemptionType {
  displayName?: string;
  description?: string;
  applicableJurisdictions?: Array<Authority>;
}
export type TaxExemptionTypes = Array<TaxExemptionType>;
export type TaxInformationNumber = string;

export interface TaxInheritanceDetails {
  parentEntityId?: string;
  inheritanceObtainedReason?: string;
}
export type TaxOffice = string;

export interface TaxRegistration {
  registrationId: string;
  registrationType: TaxRegistrationType;
  legalName: string;
  status: TaxRegistrationStatus;
  sector?: Sector;
  taxDocumentMetadatas?: Array<TaxDocumentMetadata>;
  certifiedEmailId?: string;
  additionalTaxInformation?: AdditionalInfoResponse;
  legalAddress: Address;
}
export interface TaxRegistrationDocFile {
  fileName: string;
  fileContent: Uint8Array | string;
}
export interface TaxRegistrationDocument {
  s3Location?: SourceS3Location;
  file?: TaxRegistrationDocFile;
}
export type TaxRegistrationDocuments = Array<TaxRegistrationDocument>;
export interface TaxRegistrationEntry {
  registrationId: string;
  registrationType: TaxRegistrationType;
  legalName?: string;
  legalAddress?: Address;
  sector?: Sector;
  additionalTaxInformation?: AdditionalInfoRequest;
  verificationDetails?: VerificationDetails;
  certifiedEmailId?: string;
}
export type TaxRegistrationNumberType =
  | "TAX_REGISTRATION_NUMBER"
  | "LOCAL_REGISTRATION_NUMBER";
export type TaxRegistrationStatus =
  | "VERIFIED"
  | "PENDING"
  | "DELETED"
  | "REJECTED";
export type TaxRegistrationType =
  | "VAT"
  | "GST"
  | "CPF"
  | "CNPJ"
  | "SST"
  | "TIN"
  | "NRIC";
export interface TaxRegistrationWithJurisdiction {
  registrationId: string;
  registrationType: TaxRegistrationType;
  legalName: string;
  status: TaxRegistrationStatus;
  sector?: Sector;
  taxDocumentMetadatas?: Array<TaxDocumentMetadata>;
  certifiedEmailId?: string;
  additionalTaxInformation?: AdditionalInfoResponse;
  jurisdiction: Jurisdiction;
}
export interface TurkeyAdditionalInfo {
  taxOffice?: string;
  kepEmailId?: string;
  secondaryTaxId?: string;
  industries?: Industries;
}
export interface UkraineAdditionalInfo {
  ukraineTrnType: UkraineTrnType;
}
export type UkraineTrnType = "BUSINESS" | "INDIVIDUAL";
export type UniqueIdentificationNumber = string;

export type Url = string;

export interface UzbekistanAdditionalInfo {
  taxRegistrationNumberType?: UzbekistanTaxRegistrationNumberType;
  vatRegistrationNumber?: string;
}
export type UzbekistanTaxRegistrationNumberType = "BUSINESS" | "INDIVIDUAL";
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly errorCode: ValidationExceptionErrorCode;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export type ValidationExceptionErrorCode =
  | "MALFORMED_TOKEN"
  | "EXPIRED_TOKEN"
  | "INVALID_TOKEN"
  | "FIELD_VALIDATION_FAILED"
  | "MISSING_INPUT";
export interface ValidationExceptionField {
  name: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type VatRegistrationNumber = string;

export interface VerificationDetails {
  dateOfBirth?: string;
  taxRegistrationDocuments?: Array<TaxRegistrationDocument>;
}
export interface VietnamAdditionalInfo {
  enterpriseIdentificationNumber?: string;
  electronicTransactionCodeNumber?: string;
  paymentVoucherNumber?: string;
  paymentVoucherNumberDate?: string;
}
export declare namespace BatchDeleteTaxRegistration {
  export type Input = BatchDeleteTaxRegistrationRequest;
  export type Output = BatchDeleteTaxRegistrationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetTaxExemptions {
  export type Input = BatchGetTaxExemptionsRequest;
  export type Output = BatchGetTaxExemptionsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchPutTaxRegistration {
  export type Input = BatchPutTaxRegistrationRequest;
  export type Output = BatchPutTaxRegistrationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSupplementalTaxRegistration {
  export type Input = DeleteSupplementalTaxRegistrationRequest;
  export type Output = DeleteSupplementalTaxRegistrationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTaxRegistration {
  export type Input = DeleteTaxRegistrationRequest;
  export type Output = DeleteTaxRegistrationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTaxExemptionTypes {
  export type Input = GetTaxExemptionTypesRequest;
  export type Output = GetTaxExemptionTypesResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTaxInheritance {
  export type Input = GetTaxInheritanceRequest;
  export type Output = GetTaxInheritanceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTaxRegistration {
  export type Input = GetTaxRegistrationRequest;
  export type Output = GetTaxRegistrationResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTaxRegistrationDocument {
  export type Input = GetTaxRegistrationDocumentRequest;
  export type Output = GetTaxRegistrationDocumentResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSupplementalTaxRegistrations {
  export type Input = ListSupplementalTaxRegistrationsRequest;
  export type Output = ListSupplementalTaxRegistrationsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTaxExemptions {
  export type Input = ListTaxExemptionsRequest;
  export type Output = ListTaxExemptionsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTaxRegistrations {
  export type Input = ListTaxRegistrationsRequest;
  export type Output = ListTaxRegistrationsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutSupplementalTaxRegistration {
  export type Input = PutSupplementalTaxRegistrationRequest;
  export type Output = PutSupplementalTaxRegistrationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutTaxExemption {
  export type Input = PutTaxExemptionRequest;
  export type Output = PutTaxExemptionResponse;
  export type Error =
    | AccessDeniedException
    | AttachmentUploadException
    | CaseCreationLimitExceededException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutTaxInheritance {
  export type Input = PutTaxInheritanceRequest;
  export type Output = PutTaxInheritanceResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutTaxRegistration {
  export type Input = PutTaxRegistrationRequest;
  export type Output = PutTaxRegistrationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}
