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
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class PaymentCryptographyData extends AWSServiceClient {
  decryptData(
    input: DecryptDataInput,
  ): Effect.Effect<
    DecryptDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  encryptData(
    input: EncryptDataInput,
  ): Effect.Effect<
    EncryptDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  generateCardValidationData(
    input: GenerateCardValidationDataInput,
  ): Effect.Effect<
    GenerateCardValidationDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  generateMac(
    input: GenerateMacInput,
  ): Effect.Effect<
    GenerateMacOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  generateMacEmvPinChange(
    input: GenerateMacEmvPinChangeInput,
  ): Effect.Effect<
    GenerateMacEmvPinChangeOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  generatePinData(
    input: GeneratePinDataInput,
  ): Effect.Effect<
    GeneratePinDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  reEncryptData(
    input: ReEncryptDataInput,
  ): Effect.Effect<
    ReEncryptDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  translatePinData(
    input: TranslatePinDataInput,
  ): Effect.Effect<
    TranslatePinDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  verifyAuthRequestCryptogram(
    input: VerifyAuthRequestCryptogramInput,
  ): Effect.Effect<
    VerifyAuthRequestCryptogramOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | VerificationFailedException
    | CommonAwsError
  >;
  verifyCardValidationData(
    input: VerifyCardValidationDataInput,
  ): Effect.Effect<
    VerifyCardValidationDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | VerificationFailedException
    | CommonAwsError
  >;
  verifyMac(
    input: VerifyMacInput,
  ): Effect.Effect<
    VerifyMacOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | VerificationFailedException
    | CommonAwsError
  >;
  verifyPinData(
    input: VerifyPinDataInput,
  ): Effect.Effect<
    VerifyPinDataOutput,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | VerificationFailedException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AmexAttributes {
  MajorKeyDerivationMode: MajorKeyDerivationMode;
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  ApplicationTransactionCounter: string;
  AuthorizationRequestKeyIdentifier: string;
  CurrentPinAttributes?: CurrentPinAttributes;
}
export interface AmexCardSecurityCodeVersion1 {
  CardExpiryDate: string;
}
export interface AmexCardSecurityCodeVersion2 {
  CardExpiryDate: string;
  ServiceCode: string;
}
export type ApplicationCryptogramType = string;

export interface AsymmetricEncryptionAttributes {
  PaddingType?: PaddingType;
}
export type AuthRequestCryptogramType = string;

export type AuthResponseValueType = string;

export type CardExpiryDateType = string;

interface _CardGenerationAttributes {
  AmexCardSecurityCodeVersion1?: AmexCardSecurityCodeVersion1;
  AmexCardSecurityCodeVersion2?: AmexCardSecurityCodeVersion2;
  CardVerificationValue1?: CardVerificationValue1;
  CardVerificationValue2?: CardVerificationValue2;
  CardHolderVerificationValue?: CardHolderVerificationValue;
  DynamicCardVerificationCode?: DynamicCardVerificationCode;
  DynamicCardVerificationValue?: DynamicCardVerificationValue;
}

export type CardGenerationAttributes =
  | (_CardGenerationAttributes & {
      AmexCardSecurityCodeVersion1: AmexCardSecurityCodeVersion1;
    })
  | (_CardGenerationAttributes & {
      AmexCardSecurityCodeVersion2: AmexCardSecurityCodeVersion2;
    })
  | (_CardGenerationAttributes & {
      CardVerificationValue1: CardVerificationValue1;
    })
  | (_CardGenerationAttributes & {
      CardVerificationValue2: CardVerificationValue2;
    })
  | (_CardGenerationAttributes & {
      CardHolderVerificationValue: CardHolderVerificationValue;
    })
  | (_CardGenerationAttributes & {
      DynamicCardVerificationCode: DynamicCardVerificationCode;
    })
  | (_CardGenerationAttributes & {
      DynamicCardVerificationValue: DynamicCardVerificationValue;
    });
export interface CardHolderVerificationValue {
  UnpredictableNumber: string;
  PanSequenceNumber: string;
  ApplicationTransactionCounter: string;
}
interface _CardVerificationAttributes {
  AmexCardSecurityCodeVersion1?: AmexCardSecurityCodeVersion1;
  AmexCardSecurityCodeVersion2?: AmexCardSecurityCodeVersion2;
  CardVerificationValue1?: CardVerificationValue1;
  CardVerificationValue2?: CardVerificationValue2;
  CardHolderVerificationValue?: CardHolderVerificationValue;
  DynamicCardVerificationCode?: DynamicCardVerificationCode;
  DynamicCardVerificationValue?: DynamicCardVerificationValue;
  DiscoverDynamicCardVerificationCode?: DiscoverDynamicCardVerificationCode;
}

export type CardVerificationAttributes =
  | (_CardVerificationAttributes & {
      AmexCardSecurityCodeVersion1: AmexCardSecurityCodeVersion1;
    })
  | (_CardVerificationAttributes & {
      AmexCardSecurityCodeVersion2: AmexCardSecurityCodeVersion2;
    })
  | (_CardVerificationAttributes & {
      CardVerificationValue1: CardVerificationValue1;
    })
  | (_CardVerificationAttributes & {
      CardVerificationValue2: CardVerificationValue2;
    })
  | (_CardVerificationAttributes & {
      CardHolderVerificationValue: CardHolderVerificationValue;
    })
  | (_CardVerificationAttributes & {
      DynamicCardVerificationCode: DynamicCardVerificationCode;
    })
  | (_CardVerificationAttributes & {
      DynamicCardVerificationValue: DynamicCardVerificationValue;
    })
  | (_CardVerificationAttributes & {
      DiscoverDynamicCardVerificationCode: DiscoverDynamicCardVerificationCode;
    });
export interface CardVerificationValue1 {
  CardExpiryDate: string;
  ServiceCode: string;
}
export interface CardVerificationValue2 {
  CardExpiryDate: string;
}
export type CertificateType = string;

export type CipherTextType = string;

export type CommandMessageDataType = string;

interface _CryptogramAuthResponse {
  ArpcMethod1?: CryptogramVerificationArpcMethod1;
  ArpcMethod2?: CryptogramVerificationArpcMethod2;
}

export type CryptogramAuthResponse =
  | (_CryptogramAuthResponse & {
      ArpcMethod1: CryptogramVerificationArpcMethod1;
    })
  | (_CryptogramAuthResponse & {
      ArpcMethod2: CryptogramVerificationArpcMethod2;
    });
export interface CryptogramVerificationArpcMethod1 {
  AuthResponseCode: string;
}
export interface CryptogramVerificationArpcMethod2 {
  CardStatusUpdate: string;
  ProprietaryAuthenticationData?: string;
}
export interface CurrentPinAttributes {
  CurrentPinPekIdentifier: string;
  CurrentEncryptedPinBlock: string;
}
export type DecimalizationTableType = string;

export interface DecryptDataInput {
  KeyIdentifier: string;
  CipherText: string;
  DecryptionAttributes: EncryptionDecryptionAttributes;
  WrappedKey?: WrappedKey;
}
export interface DecryptDataOutput {
  KeyArn: string;
  KeyCheckValue: string;
  PlainText: string;
}
interface _DerivationMethodAttributes {
  EmvCommon?: EmvCommonAttributes;
  Amex?: AmexAttributes;
  Visa?: VisaAttributes;
  Emv2000?: Emv2000Attributes;
  Mastercard?: MasterCardAttributes;
}

export type DerivationMethodAttributes =
  | (_DerivationMethodAttributes & { EmvCommon: EmvCommonAttributes })
  | (_DerivationMethodAttributes & { Amex: AmexAttributes })
  | (_DerivationMethodAttributes & { Visa: VisaAttributes })
  | (_DerivationMethodAttributes & { Emv2000: Emv2000Attributes })
  | (_DerivationMethodAttributes & { Mastercard: MasterCardAttributes });
export interface DiscoverDynamicCardVerificationCode {
  CardExpiryDate: string;
  UnpredictableNumber: string;
  ApplicationTransactionCounter: string;
}
export interface DukptAttributes {
  KeySerialNumber: string;
  DukptDerivationType: DukptDerivationType;
}
export interface DukptDerivationAttributes {
  KeySerialNumber: string;
  DukptKeyDerivationType?: DukptDerivationType;
  DukptKeyVariant?: DukptKeyVariant;
}
export type DukptDerivationType =
  | "TDES_2KEY"
  | "TDES_3KEY"
  | "AES_128"
  | "AES_192"
  | "AES_256";
export interface DukptEncryptionAttributes {
  KeySerialNumber: string;
  Mode?: DukptEncryptionMode;
  DukptKeyDerivationType?: DukptDerivationType;
  DukptKeyVariant?: DukptKeyVariant;
  InitializationVector?: string;
}
export type DukptEncryptionMode = "ECB" | "CBC";
export type DukptKeyVariant = "BIDIRECTIONAL" | "REQUEST" | "RESPONSE";
export interface DynamicCardVerificationCode {
  UnpredictableNumber: string;
  PanSequenceNumber: string;
  ApplicationTransactionCounter: string;
  TrackData: string;
}
export interface DynamicCardVerificationValue {
  PanSequenceNumber: string;
  CardExpiryDate: string;
  ServiceCode: string;
  ApplicationTransactionCounter: string;
}
export interface EcdhDerivationAttributes {
  CertificateAuthorityPublicKeyIdentifier: string;
  PublicKeyCertificate: string;
  KeyAlgorithm: SymmetricKeyAlgorithm;
  KeyDerivationFunction: KeyDerivationFunction;
  KeyDerivationHashAlgorithm: KeyDerivationHashAlgorithm;
  SharedInformation: string;
}
export interface Emv2000Attributes {
  MajorKeyDerivationMode: MajorKeyDerivationMode;
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  ApplicationTransactionCounter: string;
}
export interface EmvCommonAttributes {
  MajorKeyDerivationMode: MajorKeyDerivationMode;
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  ApplicationCryptogram: string;
  Mode: EmvEncryptionMode;
  PinBlockPaddingType: PinBlockPaddingType;
  PinBlockLengthPosition: PinBlockLengthPosition;
}
export interface EmvEncryptionAttributes {
  MajorKeyDerivationMode: EmvMajorKeyDerivationMode;
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  SessionDerivationData: string;
  Mode?: EmvEncryptionMode;
  InitializationVector?: string;
}
export type EmvEncryptionMode = "ECB" | "CBC";
export type EmvMajorKeyDerivationMode = "EMV_OPTION_A" | "EMV_OPTION_B";
export interface EncryptDataInput {
  KeyIdentifier: string;
  PlainText: string;
  EncryptionAttributes: EncryptionDecryptionAttributes;
  WrappedKey?: WrappedKey;
}
export interface EncryptDataOutput {
  KeyArn: string;
  KeyCheckValue?: string;
  CipherText: string;
}
export type EncryptedPinBlockType = string;

interface _EncryptionDecryptionAttributes {
  Symmetric?: SymmetricEncryptionAttributes;
  Asymmetric?: AsymmetricEncryptionAttributes;
  Dukpt?: DukptEncryptionAttributes;
  Emv?: EmvEncryptionAttributes;
}

export type EncryptionDecryptionAttributes =
  | (_EncryptionDecryptionAttributes & {
      Symmetric: SymmetricEncryptionAttributes;
    })
  | (_EncryptionDecryptionAttributes & {
      Asymmetric: AsymmetricEncryptionAttributes;
    })
  | (_EncryptionDecryptionAttributes & { Dukpt: DukptEncryptionAttributes })
  | (_EncryptionDecryptionAttributes & { Emv: EmvEncryptionAttributes });
export type EncryptionMode =
  | "ECB"
  | "CBC"
  | "CFB"
  | "CFB1"
  | "CFB8"
  | "CFB64"
  | "CFB128"
  | "OFB";
export interface GenerateCardValidationDataInput {
  KeyIdentifier: string;
  PrimaryAccountNumber: string;
  GenerationAttributes: CardGenerationAttributes;
  ValidationDataLength?: number;
}
export interface GenerateCardValidationDataOutput {
  KeyArn: string;
  KeyCheckValue: string;
  ValidationData: string;
}
export interface GenerateMacEmvPinChangeInput {
  NewPinPekIdentifier: string;
  NewEncryptedPinBlock: string;
  PinBlockFormat: PinBlockFormatForEmvPinChange;
  SecureMessagingIntegrityKeyIdentifier: string;
  SecureMessagingConfidentialityKeyIdentifier: string;
  MessageData: string;
  DerivationMethodAttributes: DerivationMethodAttributes;
}
export interface GenerateMacEmvPinChangeOutput {
  NewPinPekArn: string;
  SecureMessagingIntegrityKeyArn: string;
  SecureMessagingConfidentialityKeyArn: string;
  Mac: string;
  EncryptedPinBlock: string;
  NewPinPekKeyCheckValue: string;
  SecureMessagingIntegrityKeyCheckValue: string;
  SecureMessagingConfidentialityKeyCheckValue: string;
  VisaAmexDerivationOutputs?: VisaAmexDerivationOutputs;
}
export interface GenerateMacInput {
  KeyIdentifier: string;
  MessageData: string;
  GenerationAttributes: MacAttributes;
  MacLength?: number;
}
export interface GenerateMacOutput {
  KeyArn: string;
  KeyCheckValue: string;
  Mac: string;
}
export interface GeneratePinDataInput {
  GenerationKeyIdentifier: string;
  EncryptionKeyIdentifier: string;
  GenerationAttributes: PinGenerationAttributes;
  PinDataLength?: number;
  PrimaryAccountNumber: string;
  PinBlockFormat: PinBlockFormatForPinData;
  EncryptionWrappedKey?: WrappedKey;
}
export interface GeneratePinDataOutput {
  GenerationKeyArn: string;
  GenerationKeyCheckValue: string;
  EncryptionKeyArn: string;
  EncryptionKeyCheckValue: string;
  EncryptedPinBlock: string;
  PinData: PinData;
}
export type HexEvenLengthBetween16And32 = string;

export type HexLength16Or20Or24 = string;

export type HexLengthBetween2And4 = string;

export type HexLengthBetween2And8 = string;

export type HexLengthEquals1 = string;

export type HexLengthEquals4 = string;

export type HexLengthEquals8 = string;

export interface Ibm3624NaturalPin {
  DecimalizationTable: string;
  PinValidationDataPadCharacter: string;
  PinValidationData: string;
}
export interface Ibm3624PinFromOffset {
  DecimalizationTable: string;
  PinValidationDataPadCharacter: string;
  PinValidationData: string;
  PinOffset: string;
}
export interface Ibm3624PinOffset {
  EncryptedPinBlock: string;
  DecimalizationTable: string;
  PinValidationDataPadCharacter: string;
  PinValidationData: string;
}
export interface Ibm3624PinVerification {
  DecimalizationTable: string;
  PinValidationDataPadCharacter: string;
  PinValidationData: string;
  PinOffset: string;
}
export interface Ibm3624RandomPin {
  DecimalizationTable: string;
  PinValidationDataPadCharacter: string;
  PinValidationData: string;
}
export type InitializationVectorType = string;

export type IntegerRangeBetween0And6 = number;

export type IntegerRangeBetween3And5Type = number;

export type IntegerRangeBetween4And12 = number;

export type IntegerRangeBetween4And16 = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type KeyArn = string;

export type KeyArnOrKeyAliasType = string;

export type KeyCheckValue = string;

export type KeyCheckValueAlgorithm = string;

export type KeyDerivationFunction = "NIST_SP800" | "ANSI_X963";
export type KeyDerivationHashAlgorithm = "SHA_256" | "SHA_384" | "SHA_512";
export type MacAlgorithm =
  | "ISO9797_ALGORITHM1"
  | "ISO9797_ALGORITHM3"
  | "CMAC"
  | "HMAC"
  | "HMAC_SHA224"
  | "HMAC_SHA256"
  | "HMAC_SHA384"
  | "HMAC_SHA512";
export interface MacAlgorithmDukpt {
  KeySerialNumber: string;
  DukptKeyVariant: DukptKeyVariant;
  DukptDerivationType?: DukptDerivationType;
}
export interface MacAlgorithmEmv {
  MajorKeyDerivationMode: MajorKeyDerivationMode;
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  SessionKeyDerivationMode: SessionKeyDerivationMode;
  SessionKeyDerivationValue: SessionKeyDerivationValue;
}
interface _MacAttributes {
  Algorithm?: MacAlgorithm;
  EmvMac?: MacAlgorithmEmv;
  DukptIso9797Algorithm1?: MacAlgorithmDukpt;
  DukptIso9797Algorithm3?: MacAlgorithmDukpt;
  DukptCmac?: MacAlgorithmDukpt;
}

export type MacAttributes =
  | (_MacAttributes & { Algorithm: MacAlgorithm })
  | (_MacAttributes & { EmvMac: MacAlgorithmEmv })
  | (_MacAttributes & { DukptIso9797Algorithm1: MacAlgorithmDukpt })
  | (_MacAttributes & { DukptIso9797Algorithm3: MacAlgorithmDukpt })
  | (_MacAttributes & { DukptCmac: MacAlgorithmDukpt });
export type MacOutputType = string;

export type MacType = string;

export type MajorKeyDerivationMode = "EMV_OPTION_A" | "EMV_OPTION_B";
export interface MasterCardAttributes {
  MajorKeyDerivationMode: MajorKeyDerivationMode;
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  ApplicationCryptogram: string;
}
export type MessageDataType = string;

export type NumberLengthEquals2 = string;

export type PaddingType = "PKCS1" | "OAEP_SHA1" | "OAEP_SHA256" | "OAEP_SHA512";
export type PinBlockFormatForEmvPinChange =
  | "ISO_FORMAT_0"
  | "ISO_FORMAT_1"
  | "ISO_FORMAT_3";
export type PinBlockFormatForPinData =
  | "ISO_FORMAT_0"
  | "ISO_FORMAT_3"
  | "ISO_FORMAT_4";
export type PinBlockLengthEquals16 = string;

export type PinBlockLengthPosition = "NONE" | "FRONT_OF_PIN_BLOCK";
export type PinBlockPaddingType = "NO_PADDING" | "ISO_IEC_7816_4";
export type PinChangeMacOutputType = string;

interface _PinData {
  PinOffset?: string;
  VerificationValue?: string;
}

export type PinData =
  | (_PinData & { PinOffset: string })
  | (_PinData & { VerificationValue: string });
interface _PinGenerationAttributes {
  VisaPin?: VisaPin;
  VisaPinVerificationValue?: VisaPinVerificationValue;
  Ibm3624PinOffset?: Ibm3624PinOffset;
  Ibm3624NaturalPin?: Ibm3624NaturalPin;
  Ibm3624RandomPin?: Ibm3624RandomPin;
  Ibm3624PinFromOffset?: Ibm3624PinFromOffset;
}

export type PinGenerationAttributes =
  | (_PinGenerationAttributes & { VisaPin: VisaPin })
  | (_PinGenerationAttributes & {
      VisaPinVerificationValue: VisaPinVerificationValue;
    })
  | (_PinGenerationAttributes & { Ibm3624PinOffset: Ibm3624PinOffset })
  | (_PinGenerationAttributes & { Ibm3624NaturalPin: Ibm3624NaturalPin })
  | (_PinGenerationAttributes & { Ibm3624RandomPin: Ibm3624RandomPin })
  | (_PinGenerationAttributes & { Ibm3624PinFromOffset: Ibm3624PinFromOffset });
export type PinOffsetType = string;

export type PinValidationDataType = string;

interface _PinVerificationAttributes {
  VisaPin?: VisaPinVerification;
  Ibm3624Pin?: Ibm3624PinVerification;
}

export type PinVerificationAttributes =
  | (_PinVerificationAttributes & { VisaPin: VisaPinVerification })
  | (_PinVerificationAttributes & { Ibm3624Pin: Ibm3624PinVerification });
export type PlainTextOutputType = string;

export type PlainTextType = string;

export type PrimaryAccountNumberType = string;

export type ProprietaryAuthenticationDataType = string;

export interface ReEncryptDataInput {
  IncomingKeyIdentifier: string;
  OutgoingKeyIdentifier: string;
  CipherText: string;
  IncomingEncryptionAttributes: ReEncryptionAttributes;
  OutgoingEncryptionAttributes: ReEncryptionAttributes;
  IncomingWrappedKey?: WrappedKey;
  OutgoingWrappedKey?: WrappedKey;
}
export interface ReEncryptDataOutput {
  KeyArn: string;
  KeyCheckValue: string;
  CipherText: string;
}
interface _ReEncryptionAttributes {
  Symmetric?: SymmetricEncryptionAttributes;
  Dukpt?: DukptEncryptionAttributes;
}

export type ReEncryptionAttributes =
  | (_ReEncryptionAttributes & { Symmetric: SymmetricEncryptionAttributes })
  | (_ReEncryptionAttributes & { Dukpt: DukptEncryptionAttributes });
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly ResourceId?: string;
}> {}
export type ServiceCodeType = string;

export type SessionDerivationDataType = string;

export interface SessionKeyAmex {
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
}
interface _SessionKeyDerivation {
  EmvCommon?: SessionKeyEmvCommon;
  Mastercard?: SessionKeyMastercard;
  Emv2000?: SessionKeyEmv2000;
  Amex?: SessionKeyAmex;
  Visa?: SessionKeyVisa;
}

export type SessionKeyDerivation =
  | (_SessionKeyDerivation & { EmvCommon: SessionKeyEmvCommon })
  | (_SessionKeyDerivation & { Mastercard: SessionKeyMastercard })
  | (_SessionKeyDerivation & { Emv2000: SessionKeyEmv2000 })
  | (_SessionKeyDerivation & { Amex: SessionKeyAmex })
  | (_SessionKeyDerivation & { Visa: SessionKeyVisa });
export type SessionKeyDerivationMode =
  | "EMV_COMMON_SESSION_KEY"
  | "EMV2000"
  | "AMEX"
  | "MASTERCARD_SESSION_KEY"
  | "VISA";
interface _SessionKeyDerivationValue {
  ApplicationCryptogram?: string;
  ApplicationTransactionCounter?: string;
}

export type SessionKeyDerivationValue =
  | (_SessionKeyDerivationValue & { ApplicationCryptogram: string })
  | (_SessionKeyDerivationValue & { ApplicationTransactionCounter: string });
export interface SessionKeyEmv2000 {
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  ApplicationTransactionCounter: string;
}
export interface SessionKeyEmvCommon {
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  ApplicationTransactionCounter: string;
}
export interface SessionKeyMastercard {
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  ApplicationTransactionCounter: string;
  UnpredictableNumber: string;
}
export interface SessionKeyVisa {
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
}
export type SharedInformation = string;

export interface SymmetricEncryptionAttributes {
  Mode: EncryptionMode;
  InitializationVector?: string;
  PaddingType?: PaddingType;
}
export type SymmetricKeyAlgorithm =
  | "TDES_2KEY"
  | "TDES_3KEY"
  | "AES_128"
  | "AES_192"
  | "AES_256"
  | "HMAC_SHA256"
  | "HMAC_SHA384"
  | "HMAC_SHA512"
  | "HMAC_SHA224";
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type Tr31WrappedKeyBlock = string;

export type TrackDataType = string;

export type TransactionDataType = string;

export interface TranslatePinDataInput {
  IncomingKeyIdentifier: string;
  OutgoingKeyIdentifier: string;
  IncomingTranslationAttributes: TranslationIsoFormats;
  OutgoingTranslationAttributes: TranslationIsoFormats;
  EncryptedPinBlock: string;
  IncomingDukptAttributes?: DukptDerivationAttributes;
  OutgoingDukptAttributes?: DukptDerivationAttributes;
  IncomingWrappedKey?: WrappedKey;
  OutgoingWrappedKey?: WrappedKey;
}
export interface TranslatePinDataOutput {
  PinBlock: string;
  KeyArn: string;
  KeyCheckValue: string;
}
interface _TranslationIsoFormats {
  IsoFormat0?: TranslationPinDataIsoFormat034;
  IsoFormat1?: TranslationPinDataIsoFormat1;
  IsoFormat3?: TranslationPinDataIsoFormat034;
  IsoFormat4?: TranslationPinDataIsoFormat034;
}

export type TranslationIsoFormats =
  | (_TranslationIsoFormats & { IsoFormat0: TranslationPinDataIsoFormat034 })
  | (_TranslationIsoFormats & { IsoFormat1: TranslationPinDataIsoFormat1 })
  | (_TranslationIsoFormats & { IsoFormat3: TranslationPinDataIsoFormat034 })
  | (_TranslationIsoFormats & { IsoFormat4: TranslationPinDataIsoFormat034 });
export interface TranslationPinDataIsoFormat034 {
  PrimaryAccountNumber: string;
}
export interface TranslationPinDataIsoFormat1 {}
export type ValidationDataType = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  path: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export declare class VerificationFailedException extends EffectData.TaggedError(
  "VerificationFailedException",
)<{
  readonly Reason: string;
  readonly Message: string;
}> {}
export type VerificationFailedReason = string;

export type VerificationValueType = string;

export interface VerifyAuthRequestCryptogramInput {
  KeyIdentifier: string;
  TransactionData: string;
  AuthRequestCryptogram: string;
  MajorKeyDerivationMode: MajorKeyDerivationMode;
  SessionKeyDerivationAttributes: SessionKeyDerivation;
  AuthResponseAttributes?: CryptogramAuthResponse;
}
export interface VerifyAuthRequestCryptogramOutput {
  KeyArn: string;
  KeyCheckValue: string;
  AuthResponseValue?: string;
}
export interface VerifyCardValidationDataInput {
  KeyIdentifier: string;
  PrimaryAccountNumber: string;
  VerificationAttributes: CardVerificationAttributes;
  ValidationData: string;
}
export interface VerifyCardValidationDataOutput {
  KeyArn: string;
  KeyCheckValue: string;
}
export interface VerifyMacInput {
  KeyIdentifier: string;
  MessageData: string;
  Mac: string;
  VerificationAttributes: MacAttributes;
  MacLength?: number;
}
export interface VerifyMacOutput {
  KeyArn: string;
  KeyCheckValue: string;
}
export interface VerifyPinDataInput {
  VerificationKeyIdentifier: string;
  EncryptionKeyIdentifier: string;
  VerificationAttributes: PinVerificationAttributes;
  EncryptedPinBlock: string;
  PrimaryAccountNumber: string;
  PinBlockFormat: PinBlockFormatForPinData;
  PinDataLength?: number;
  DukptAttributes?: DukptAttributes;
  EncryptionWrappedKey?: WrappedKey;
}
export interface VerifyPinDataOutput {
  VerificationKeyArn: string;
  VerificationKeyCheckValue: string;
  EncryptionKeyArn: string;
  EncryptionKeyCheckValue: string;
}
export interface VisaAmexDerivationOutputs {
  AuthorizationRequestKeyArn: string;
  AuthorizationRequestKeyCheckValue: string;
  CurrentPinPekArn?: string;
  CurrentPinPekKeyCheckValue?: string;
}
export interface VisaAttributes {
  MajorKeyDerivationMode: MajorKeyDerivationMode;
  PrimaryAccountNumber: string;
  PanSequenceNumber: string;
  ApplicationTransactionCounter: string;
  AuthorizationRequestKeyIdentifier: string;
  CurrentPinAttributes?: CurrentPinAttributes;
}
export interface VisaPin {
  PinVerificationKeyIndex: number;
}
export interface VisaPinVerification {
  PinVerificationKeyIndex: number;
  VerificationValue: string;
}
export interface VisaPinVerificationValue {
  EncryptedPinBlock: string;
  PinVerificationKeyIndex: number;
}
export interface WrappedKey {
  WrappedKeyMaterial: WrappedKeyMaterial;
  KeyCheckValueAlgorithm?: string;
}
interface _WrappedKeyMaterial {
  Tr31KeyBlock?: string;
  DiffieHellmanSymmetricKey?: EcdhDerivationAttributes;
}

export type WrappedKeyMaterial =
  | (_WrappedKeyMaterial & { Tr31KeyBlock: string })
  | (_WrappedKeyMaterial & {
      DiffieHellmanSymmetricKey: EcdhDerivationAttributes;
    });
export declare namespace DecryptData {
  export type Input = DecryptDataInput;
  export type Output = DecryptDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EncryptData {
  export type Input = EncryptDataInput;
  export type Output = EncryptDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GenerateCardValidationData {
  export type Input = GenerateCardValidationDataInput;
  export type Output = GenerateCardValidationDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GenerateMac {
  export type Input = GenerateMacInput;
  export type Output = GenerateMacOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GenerateMacEmvPinChange {
  export type Input = GenerateMacEmvPinChangeInput;
  export type Output = GenerateMacEmvPinChangeOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GeneratePinData {
  export type Input = GeneratePinDataInput;
  export type Output = GeneratePinDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReEncryptData {
  export type Input = ReEncryptDataInput;
  export type Output = ReEncryptDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TranslatePinData {
  export type Input = TranslatePinDataInput;
  export type Output = TranslatePinDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace VerifyAuthRequestCryptogram {
  export type Input = VerifyAuthRequestCryptogramInput;
  export type Output = VerifyAuthRequestCryptogramOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | VerificationFailedException
    | CommonAwsError;
}

export declare namespace VerifyCardValidationData {
  export type Input = VerifyCardValidationDataInput;
  export type Output = VerifyCardValidationDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | VerificationFailedException
    | CommonAwsError;
}

export declare namespace VerifyMac {
  export type Input = VerifyMacInput;
  export type Output = VerifyMacOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | VerificationFailedException
    | CommonAwsError;
}

export declare namespace VerifyPinData {
  export type Input = VerifyPinDataInput;
  export type Output = VerifyPinDataOutput;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | VerificationFailedException
    | CommonAwsError;
}
