import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class RegisterUsageRequest extends Schema.Class<RegisterUsageRequest>("RegisterUsageRequest")({ProductCode: Schema.String, PublicKeyVersion: Schema.Number, Nonce: Schema.optional(Schema.String)}) {}
export class ResolveCustomerRequest extends Schema.Class<ResolveCustomerRequest>("ResolveCustomerRequest")({RegistrationToken: Schema.String}) {}
export class Tag extends Schema.Class<Tag>("Tag")({Key: Schema.String, Value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class UsageAllocation extends Schema.Class<UsageAllocation>("UsageAllocation")({AllocatedUsageQuantity: Schema.Number, Tags: Schema.optional(TagList)}) {}
export const UsageAllocations = Schema.Array(UsageAllocation);
export class UsageRecord extends Schema.Class<UsageRecord>("UsageRecord")({Timestamp: Schema.Date, CustomerIdentifier: Schema.optional(Schema.String), Dimension: Schema.String, Quantity: Schema.optional(Schema.Number), UsageAllocations: Schema.optional(UsageAllocations), CustomerAWSAccountId: Schema.optional(Schema.String)}) {}
export const UsageRecordList = Schema.Array(UsageRecord);
export class BatchMeterUsageRequest extends Schema.Class<BatchMeterUsageRequest>("BatchMeterUsageRequest")({UsageRecords: UsageRecordList, ProductCode: Schema.String}) {}
export class RegisterUsageResult extends Schema.Class<RegisterUsageResult>("RegisterUsageResult")({PublicKeyRotationTimestamp: Schema.optional(Schema.Date), Signature: Schema.optional(Schema.String)}) {}
export class ResolveCustomerResult extends Schema.Class<ResolveCustomerResult>("ResolveCustomerResult")({CustomerIdentifier: Schema.optional(Schema.String), ProductCode: Schema.optional(Schema.String), CustomerAWSAccountId: Schema.optional(Schema.String)}) {}
export class MeterUsageRequest extends Schema.Class<MeterUsageRequest>("MeterUsageRequest")({ProductCode: Schema.String, Timestamp: Schema.Date, UsageDimension: Schema.String, UsageQuantity: Schema.optional(Schema.Number), DryRun: Schema.optional(Schema.Boolean), UsageAllocations: Schema.optional(UsageAllocations), ClientToken: Schema.optional(Schema.String)}) {}
export class CustomerNotEntitledException extends Schema.Class<CustomerNotEntitledException>("CustomerNotEntitledException")({message: Schema.optional(Schema.String)}) {}
export class DisabledApiException extends Schema.Class<DisabledApiException>("DisabledApiException")({message: Schema.optional(Schema.String)}) {}
export class UsageRecordResult extends Schema.Class<UsageRecordResult>("UsageRecordResult")({UsageRecord: Schema.optional(UsageRecord), MeteringRecordId: Schema.optional(Schema.String), Status: Schema.optional(Schema.String)}) {}
export const UsageRecordResultList = Schema.Array(UsageRecordResult);
export class BatchMeterUsageResult extends Schema.Class<BatchMeterUsageResult>("BatchMeterUsageResult")({Results: Schema.optional(UsageRecordResultList), UnprocessedRecords: Schema.optional(UsageRecordList)}) {}
export class MeterUsageResult extends Schema.Class<MeterUsageResult>("MeterUsageResult")({MeteringRecordId: Schema.optional(Schema.String)}) {}
export class InternalServiceErrorException extends Schema.Class<InternalServiceErrorException>("InternalServiceErrorException")({message: Schema.optional(Schema.String)}) {}
export class ExpiredTokenException extends Schema.Class<ExpiredTokenException>("ExpiredTokenException")({message: Schema.optional(Schema.String)}) {}
export class InvalidCustomerIdentifierException extends Schema.Class<InvalidCustomerIdentifierException>("InvalidCustomerIdentifierException")({message: Schema.optional(Schema.String)}) {}
export class DuplicateRequestException extends Schema.Class<DuplicateRequestException>("DuplicateRequestException")({message: Schema.optional(Schema.String)}) {}
export class InvalidProductCodeException extends Schema.Class<InvalidProductCodeException>("InvalidProductCodeException")({message: Schema.optional(Schema.String)}) {}
export class InvalidTokenException extends Schema.Class<InvalidTokenException>("InvalidTokenException")({message: Schema.optional(Schema.String)}) {}
export class InvalidTagException extends Schema.Class<InvalidTagException>("InvalidTagException")({message: Schema.optional(Schema.String)}) {}
export class IdempotencyConflictException extends Schema.Class<IdempotencyConflictException>("IdempotencyConflictException")({message: Schema.optional(Schema.String)}) {}
export class InvalidPublicKeyVersionException extends Schema.Class<InvalidPublicKeyVersionException>("InvalidPublicKeyVersionException")({message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.optional(Schema.String)}) {}
export class InvalidUsageAllocationsException extends Schema.Class<InvalidUsageAllocationsException>("InvalidUsageAllocationsException")({message: Schema.optional(Schema.String)}) {}
export class InvalidEndpointRegionException extends Schema.Class<InvalidEndpointRegionException>("InvalidEndpointRegionException")({message: Schema.optional(Schema.String)}) {}
export class InvalidRegionException extends Schema.Class<InvalidRegionException>("InvalidRegionException")({message: Schema.optional(Schema.String)}) {}
export class InvalidUsageDimensionException extends Schema.Class<InvalidUsageDimensionException>("InvalidUsageDimensionException")({message: Schema.optional(Schema.String)}) {}
export class TimestampOutOfBoundsException extends Schema.Class<TimestampOutOfBoundsException>("TimestampOutOfBoundsException")({message: Schema.optional(Schema.String)}) {}
export class PlatformNotSupportedException extends Schema.Class<PlatformNotSupportedException>("PlatformNotSupportedException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class CustomerNotEntitledExceptionError extends Schema.TaggedError<CustomerNotEntitledExceptionError>()("CustomerNotEntitledException", CustomerNotEntitledException.fields) {};
export class DisabledApiExceptionError extends Schema.TaggedError<DisabledApiExceptionError>()("DisabledApiException", DisabledApiException.fields) {};
export class InternalServiceErrorExceptionError extends Schema.TaggedError<InternalServiceErrorExceptionError>()("InternalServiceErrorException", InternalServiceErrorException.fields) {};
export class ExpiredTokenExceptionError extends Schema.TaggedError<ExpiredTokenExceptionError>()("ExpiredTokenException", ExpiredTokenException.fields) {};
export class InvalidCustomerIdentifierExceptionError extends Schema.TaggedError<InvalidCustomerIdentifierExceptionError>()("InvalidCustomerIdentifierException", InvalidCustomerIdentifierException.fields) {};
export class InvalidProductCodeExceptionError extends Schema.TaggedError<InvalidProductCodeExceptionError>()("InvalidProductCodeException", InvalidProductCodeException.fields) {};
export class DuplicateRequestExceptionError extends Schema.TaggedError<DuplicateRequestExceptionError>()("DuplicateRequestException", DuplicateRequestException.fields) {};
export class InvalidTokenExceptionError extends Schema.TaggedError<InvalidTokenExceptionError>()("InvalidTokenException", InvalidTokenException.fields) {};
export class InvalidTagExceptionError extends Schema.TaggedError<InvalidTagExceptionError>()("InvalidTagException", InvalidTagException.fields) {};
export class IdempotencyConflictExceptionError extends Schema.TaggedError<IdempotencyConflictExceptionError>()("IdempotencyConflictException", IdempotencyConflictException.fields) {};
export class InvalidPublicKeyVersionExceptionError extends Schema.TaggedError<InvalidPublicKeyVersionExceptionError>()("InvalidPublicKeyVersionException", InvalidPublicKeyVersionException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class InvalidUsageAllocationsExceptionError extends Schema.TaggedError<InvalidUsageAllocationsExceptionError>()("InvalidUsageAllocationsException", InvalidUsageAllocationsException.fields) {};
export class InvalidEndpointRegionExceptionError extends Schema.TaggedError<InvalidEndpointRegionExceptionError>()("InvalidEndpointRegionException", InvalidEndpointRegionException.fields) {};
export class InvalidUsageDimensionExceptionError extends Schema.TaggedError<InvalidUsageDimensionExceptionError>()("InvalidUsageDimensionException", InvalidUsageDimensionException.fields) {};
export class InvalidRegionExceptionError extends Schema.TaggedError<InvalidRegionExceptionError>()("InvalidRegionException", InvalidRegionException.fields) {};
export class TimestampOutOfBoundsExceptionError extends Schema.TaggedError<TimestampOutOfBoundsExceptionError>()("TimestampOutOfBoundsException", TimestampOutOfBoundsException.fields) {};
export class PlatformNotSupportedExceptionError extends Schema.TaggedError<PlatformNotSupportedExceptionError>()("PlatformNotSupportedException", PlatformNotSupportedException.fields) {};

//# Operations
export const resolveCustomer = /*#__PURE__*/ makeOperation(() => Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.ResolveCustomer" }, ResolveCustomerRequest, ResolveCustomerResult, [DisabledApiExceptionError, ExpiredTokenExceptionError, InternalServiceErrorExceptionError, InvalidTokenExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchMeterUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.BatchMeterUsage" }, BatchMeterUsageRequest, BatchMeterUsageResult, [DisabledApiExceptionError, InternalServiceErrorExceptionError, InvalidCustomerIdentifierExceptionError, InvalidProductCodeExceptionError, InvalidTagExceptionError, InvalidUsageAllocationsExceptionError, InvalidUsageDimensionExceptionError, ThrottlingExceptionError, TimestampOutOfBoundsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const meterUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.MeterUsage" }, MeterUsageRequest, MeterUsageResult, [CustomerNotEntitledExceptionError, DuplicateRequestExceptionError, IdempotencyConflictExceptionError, InternalServiceErrorExceptionError, InvalidEndpointRegionExceptionError, InvalidProductCodeExceptionError, InvalidTagExceptionError, InvalidUsageAllocationsExceptionError, InvalidUsageDimensionExceptionError, ThrottlingExceptionError, TimestampOutOfBoundsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const registerUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.RegisterUsage" }, RegisterUsageRequest, RegisterUsageResult, [CustomerNotEntitledExceptionError, DisabledApiExceptionError, InternalServiceErrorExceptionError, InvalidProductCodeExceptionError, InvalidPublicKeyVersionExceptionError, InvalidRegionExceptionError, PlatformNotSupportedExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
