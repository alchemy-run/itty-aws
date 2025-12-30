import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class RegisterUsageRequest extends S.Class<RegisterUsageRequest>("RegisterUsageRequest")({ProductCode: S.String, PublicKeyVersion: S.Number, Nonce: S.optional(S.String)}) {}
export class ResolveCustomerRequest extends S.Class<ResolveCustomerRequest>("ResolveCustomerRequest")({RegistrationToken: S.String}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class UsageAllocation extends S.Class<UsageAllocation>("UsageAllocation")({AllocatedUsageQuantity: S.Number, Tags: S.optional(TagList)}) {}
export const UsageAllocations = S.Array(UsageAllocation);
export class UsageRecord extends S.Class<UsageRecord>("UsageRecord")({Timestamp: S.Date, CustomerIdentifier: S.optional(S.String), Dimension: S.String, Quantity: S.optional(S.Number), UsageAllocations: S.optional(UsageAllocations), CustomerAWSAccountId: S.optional(S.String)}) {}
export const UsageRecordList = S.Array(UsageRecord);
export class BatchMeterUsageRequest extends S.Class<BatchMeterUsageRequest>("BatchMeterUsageRequest")({UsageRecords: UsageRecordList, ProductCode: S.String}) {}
export class RegisterUsageResult extends S.Class<RegisterUsageResult>("RegisterUsageResult")({PublicKeyRotationTimestamp: S.optional(S.Date), Signature: S.optional(S.String)}) {}
export class ResolveCustomerResult extends S.Class<ResolveCustomerResult>("ResolveCustomerResult")({CustomerIdentifier: S.optional(S.String), ProductCode: S.optional(S.String), CustomerAWSAccountId: S.optional(S.String)}) {}
export class MeterUsageRequest extends S.Class<MeterUsageRequest>("MeterUsageRequest")({ProductCode: S.String, Timestamp: S.Date, UsageDimension: S.String, UsageQuantity: S.optional(S.Number), DryRun: S.optional(S.Boolean), UsageAllocations: S.optional(UsageAllocations), ClientToken: S.optional(S.String)}) {}
export class CustomerNotEntitledException extends S.Class<CustomerNotEntitledException>("CustomerNotEntitledException")({message: S.optional(S.String)}) {}
export class DisabledApiException extends S.Class<DisabledApiException>("DisabledApiException")({message: S.optional(S.String)}) {}
export class UsageRecordResult extends S.Class<UsageRecordResult>("UsageRecordResult")({UsageRecord: S.optional(UsageRecord), MeteringRecordId: S.optional(S.String), Status: S.optional(S.String)}) {}
export const UsageRecordResultList = S.Array(UsageRecordResult);
export class BatchMeterUsageResult extends S.Class<BatchMeterUsageResult>("BatchMeterUsageResult")({Results: S.optional(UsageRecordResultList), UnprocessedRecords: S.optional(UsageRecordList)}) {}
export class MeterUsageResult extends S.Class<MeterUsageResult>("MeterUsageResult")({MeteringRecordId: S.optional(S.String)}) {}
export class InternalServiceErrorException extends S.Class<InternalServiceErrorException>("InternalServiceErrorException")({message: S.optional(S.String)}) {}
export class ExpiredTokenException extends S.Class<ExpiredTokenException>("ExpiredTokenException")({message: S.optional(S.String)}) {}
export class InvalidCustomerIdentifierException extends S.Class<InvalidCustomerIdentifierException>("InvalidCustomerIdentifierException")({message: S.optional(S.String)}) {}
export class DuplicateRequestException extends S.Class<DuplicateRequestException>("DuplicateRequestException")({message: S.optional(S.String)}) {}
export class InvalidProductCodeException extends S.Class<InvalidProductCodeException>("InvalidProductCodeException")({message: S.optional(S.String)}) {}
export class InvalidTokenException extends S.Class<InvalidTokenException>("InvalidTokenException")({message: S.optional(S.String)}) {}
export class InvalidTagException extends S.Class<InvalidTagException>("InvalidTagException")({message: S.optional(S.String)}) {}
export class IdempotencyConflictException extends S.Class<IdempotencyConflictException>("IdempotencyConflictException")({message: S.optional(S.String)}) {}
export class InvalidPublicKeyVersionException extends S.Class<InvalidPublicKeyVersionException>("InvalidPublicKeyVersionException")({message: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.optional(S.String)}) {}
export class InvalidUsageAllocationsException extends S.Class<InvalidUsageAllocationsException>("InvalidUsageAllocationsException")({message: S.optional(S.String)}) {}
export class InvalidEndpointRegionException extends S.Class<InvalidEndpointRegionException>("InvalidEndpointRegionException")({message: S.optional(S.String)}) {}
export class InvalidRegionException extends S.Class<InvalidRegionException>("InvalidRegionException")({message: S.optional(S.String)}) {}
export class InvalidUsageDimensionException extends S.Class<InvalidUsageDimensionException>("InvalidUsageDimensionException")({message: S.optional(S.String)}) {}
export class TimestampOutOfBoundsException extends S.Class<TimestampOutOfBoundsException>("TimestampOutOfBoundsException")({message: S.optional(S.String)}) {}
export class PlatformNotSupportedException extends S.Class<PlatformNotSupportedException>("PlatformNotSupportedException")({message: S.optional(S.String)}) {}

//# Errors
export class CustomerNotEntitledExceptionError extends S.TaggedError<CustomerNotEntitledExceptionError>()("CustomerNotEntitledException", CustomerNotEntitledException.fields) {};
export class DisabledApiExceptionError extends S.TaggedError<DisabledApiExceptionError>()("DisabledApiException", DisabledApiException.fields) {};
export class InternalServiceErrorExceptionError extends S.TaggedError<InternalServiceErrorExceptionError>()("InternalServiceErrorException", InternalServiceErrorException.fields) {};
export class ExpiredTokenExceptionError extends S.TaggedError<ExpiredTokenExceptionError>()("ExpiredTokenException", ExpiredTokenException.fields) {};
export class InvalidCustomerIdentifierExceptionError extends S.TaggedError<InvalidCustomerIdentifierExceptionError>()("InvalidCustomerIdentifierException", InvalidCustomerIdentifierException.fields) {};
export class InvalidProductCodeExceptionError extends S.TaggedError<InvalidProductCodeExceptionError>()("InvalidProductCodeException", InvalidProductCodeException.fields) {};
export class DuplicateRequestExceptionError extends S.TaggedError<DuplicateRequestExceptionError>()("DuplicateRequestException", DuplicateRequestException.fields) {};
export class InvalidTokenExceptionError extends S.TaggedError<InvalidTokenExceptionError>()("InvalidTokenException", InvalidTokenException.fields) {};
export class InvalidTagExceptionError extends S.TaggedError<InvalidTagExceptionError>()("InvalidTagException", InvalidTagException.fields) {};
export class IdempotencyConflictExceptionError extends S.TaggedError<IdempotencyConflictExceptionError>()("IdempotencyConflictException", IdempotencyConflictException.fields) {};
export class InvalidPublicKeyVersionExceptionError extends S.TaggedError<InvalidPublicKeyVersionExceptionError>()("InvalidPublicKeyVersionException", InvalidPublicKeyVersionException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class InvalidUsageAllocationsExceptionError extends S.TaggedError<InvalidUsageAllocationsExceptionError>()("InvalidUsageAllocationsException", InvalidUsageAllocationsException.fields) {};
export class InvalidEndpointRegionExceptionError extends S.TaggedError<InvalidEndpointRegionExceptionError>()("InvalidEndpointRegionException", InvalidEndpointRegionException.fields) {};
export class InvalidUsageDimensionExceptionError extends S.TaggedError<InvalidUsageDimensionExceptionError>()("InvalidUsageDimensionException", InvalidUsageDimensionException.fields) {};
export class InvalidRegionExceptionError extends S.TaggedError<InvalidRegionExceptionError>()("InvalidRegionException", InvalidRegionException.fields) {};
export class TimestampOutOfBoundsExceptionError extends S.TaggedError<TimestampOutOfBoundsExceptionError>()("TimestampOutOfBoundsException", TimestampOutOfBoundsException.fields) {};
export class PlatformNotSupportedExceptionError extends S.TaggedError<PlatformNotSupportedExceptionError>()("PlatformNotSupportedException", PlatformNotSupportedException.fields) {};

//# Operations
export const resolveCustomer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.ResolveCustomer" }, ResolveCustomerRequest, ResolveCustomerResult, [DisabledApiExceptionError, ExpiredTokenExceptionError, InternalServiceErrorExceptionError, InvalidTokenExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchMeterUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.BatchMeterUsage" }, BatchMeterUsageRequest, BatchMeterUsageResult, [DisabledApiExceptionError, InternalServiceErrorExceptionError, InvalidCustomerIdentifierExceptionError, InvalidProductCodeExceptionError, InvalidTagExceptionError, InvalidUsageAllocationsExceptionError, InvalidUsageDimensionExceptionError, ThrottlingExceptionError, TimestampOutOfBoundsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const meterUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.MeterUsage" }, MeterUsageRequest, MeterUsageResult, [CustomerNotEntitledExceptionError, DuplicateRequestExceptionError, IdempotencyConflictExceptionError, InternalServiceErrorExceptionError, InvalidEndpointRegionExceptionError, InvalidProductCodeExceptionError, InvalidTagExceptionError, InvalidUsageAllocationsExceptionError, InvalidUsageDimensionExceptionError, ThrottlingExceptionError, TimestampOutOfBoundsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const registerUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.RegisterUsage" }, RegisterUsageRequest, RegisterUsageResult, [CustomerNotEntitledExceptionError, DisabledApiExceptionError, InternalServiceErrorExceptionError, InvalidProductCodeExceptionError, InvalidPublicKeyVersionExceptionError, InvalidRegionExceptionError, PlatformNotSupportedExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
