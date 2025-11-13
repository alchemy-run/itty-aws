import type * as Effect from "effect/Effect";
import type * as Data from "effect/data/Data";
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

export declare class Artifact extends AWSServiceClient {
  getAccountSettings(
    input: GetAccountSettingsRequest,
  ): Effect.Effect<
    GetAccountSettingsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getReport(
    input: GetReportRequest,
  ): Effect.Effect<
    GetReportResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getReportMetadata(
    input: GetReportMetadataRequest,
  ): Effect.Effect<
    GetReportMetadataResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTermForReport(
    input: GetTermForReportRequest,
  ): Effect.Effect<
    GetTermForReportResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCustomerAgreements(
    input: ListCustomerAgreementsRequest,
  ): Effect.Effect<
    ListCustomerAgreementsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listReports(
    input: ListReportsRequest,
  ): Effect.Effect<
    ListReportsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putAccountSettings(
    input: PutAccountSettingsRequest,
  ): Effect.Effect<
    PutAccountSettingsResponse,
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

export type AcceptanceType = "PASSTHROUGH" | "EXPLICIT";
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface AccountSettings {
  notificationSubscriptionStatus?: NotificationSubscriptionStatus;
}
export type AgreementTerms = Array<string>;
export type AgreementType = "CUSTOM" | "DEFAULT" | "MODIFIED";
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type CustomerAgreementIdAttribute = string;

export type CustomerAgreementList = Array<CustomerAgreementSummary>;
export type CustomerAgreementState =
  | "ACTIVE"
  | "CUSTOMER_TERMINATED"
  | "AWS_TERMINATED";
export interface CustomerAgreementSummary {
  name?: string;
  arn?: string;
  id?: string;
  agreementArn?: string;
  awsAccountId?: string;
  organizationArn?: string;
  effectiveStart?: Date | string;
  effectiveEnd?: Date | string;
  state?: CustomerAgreementState;
  description?: string;
  acceptanceTerms?: Array<string>;
  terminateTerms?: Array<string>;
  type?: AgreementType;
}
export interface GetAccountSettingsRequest {}
export interface GetAccountSettingsResponse {
  accountSettings?: AccountSettings;
}
export interface GetReportMetadataRequest {
  reportId: string;
  reportVersion?: number;
}
export interface GetReportMetadataResponse {
  reportDetails?: ReportDetail;
}
export interface GetReportRequest {
  reportId: string;
  reportVersion?: number;
  termToken: string;
}
export interface GetReportResponse {
  documentPresignedUrl?: string;
}
export interface GetTermForReportRequest {
  reportId: string;
  reportVersion?: number;
}
export interface GetTermForReportResponse {
  documentPresignedUrl?: string;
  termToken?: string;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface ListCustomerAgreementsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListCustomerAgreementsResponse {
  customerAgreements: Array<CustomerAgreementSummary>;
  nextToken?: string;
}
export interface ListReportsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListReportsResponse {
  reports?: Array<ReportSummary>;
  nextToken?: string;
}
export type LongStringAttribute = string;

export type MaxResultsAttribute = number;

export type NextTokenAttribute = string;

export type NotificationSubscriptionStatus = "SUBSCRIBED" | "NOT_SUBSCRIBED";
export type PublishedState = "PUBLISHED" | "UNPUBLISHED";
export interface PutAccountSettingsRequest {
  notificationSubscriptionStatus?: NotificationSubscriptionStatus;
}
export interface PutAccountSettingsResponse {
  accountSettings?: AccountSettings;
}
export interface ReportDetail {
  id?: string;
  name?: string;
  description?: string;
  periodStart?: Date | string;
  periodEnd?: Date | string;
  createdAt?: Date | string;
  lastModifiedAt?: Date | string;
  deletedAt?: Date | string;
  state?: PublishedState;
  arn?: string;
  series?: string;
  category?: string;
  companyName?: string;
  productName?: string;
  termArn?: string;
  version?: number;
  acceptanceType?: AcceptanceType;
  sequenceNumber?: number;
  uploadState?: UploadState;
  statusMessage?: string;
}
export type ReportId = string;

export type ReportsList = Array<ReportSummary>;
export interface ReportSummary {
  id?: string;
  name?: string;
  state?: PublishedState;
  arn?: string;
  version?: number;
  uploadState?: UploadState;
  description?: string;
  periodStart?: Date | string;
  periodEnd?: Date | string;
  series?: string;
  category?: string;
  companyName?: string;
  productName?: string;
  statusMessage?: string;
  acceptanceType?: AcceptanceType;
}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type SequenceNumberAttribute = number;

export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type ShortStringAttribute = string;

export type StatusMessage = string;

export type TermId = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type TimestampAttribute = Date | string;

export type UploadState = "PROCESSING" | "COMPLETE" | "FAILED" | "FAULT";
export declare class ValidationException extends Data.TaggedError(
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

export type VersionAttribute = number;

export declare namespace GetAccountSettings {
  export type Input = GetAccountSettingsRequest;
  export type Output = GetAccountSettingsResponse;
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

export declare namespace GetReport {
  export type Input = GetReportRequest;
  export type Output = GetReportResponse;
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

export declare namespace GetReportMetadata {
  export type Input = GetReportMetadataRequest;
  export type Output = GetReportMetadataResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTermForReport {
  export type Input = GetTermForReportRequest;
  export type Output = GetTermForReportResponse;
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

export declare namespace ListCustomerAgreements {
  export type Input = ListCustomerAgreementsRequest;
  export type Output = ListCustomerAgreementsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReports {
  export type Input = ListReportsRequest;
  export type Output = ListReportsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutAccountSettings {
  export type Input = PutAccountSettingsRequest;
  export type Output = PutAccountSettingsResponse;
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

export type ArtifactErrors =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonAwsError;
