import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const RegisterUsageRequest = Schema.Struct({ProductCode: Schema.String, PublicKeyVersion: Schema.Number, Nonce: Schema.optional(Schema.String)});
export const ResolveCustomerRequest = Schema.Struct({RegistrationToken: Schema.String});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const TagList = Schema.Array(Tag);
export const UsageAllocation = Schema.Struct({AllocatedUsageQuantity: Schema.Number, Tags: Schema.optional(TagList)});
export const UsageAllocations = Schema.Array(UsageAllocation);
export const UsageRecord = Schema.Struct({Timestamp: Schema.Date, CustomerIdentifier: Schema.optional(Schema.String), Dimension: Schema.String, Quantity: Schema.optional(Schema.Number), UsageAllocations: Schema.optional(UsageAllocations), CustomerAWSAccountId: Schema.optional(Schema.String)});
export const UsageRecordList = Schema.Array(UsageRecord);
export const BatchMeterUsageRequest = Schema.Struct({UsageRecords: UsageRecordList, ProductCode: Schema.String});
export const RegisterUsageResult = Schema.Struct({PublicKeyRotationTimestamp: Schema.optional(Schema.Date), Signature: Schema.optional(Schema.String)});
export const ResolveCustomerResult = Schema.Struct({CustomerIdentifier: Schema.optional(Schema.String), ProductCode: Schema.optional(Schema.String), CustomerAWSAccountId: Schema.optional(Schema.String)});
export const MeterUsageRequest = Schema.Struct({ProductCode: Schema.String, Timestamp: Schema.Date, UsageDimension: Schema.String, UsageQuantity: Schema.optional(Schema.Number), DryRun: Schema.optional(Schema.Boolean), UsageAllocations: Schema.optional(UsageAllocations), ClientToken: Schema.optional(Schema.String)});
export const CustomerNotEntitledException = Schema.Struct({message: Schema.optional(Schema.String)});
export const DisabledApiException = Schema.Struct({message: Schema.optional(Schema.String)});
export const UsageRecordResult = Schema.Struct({UsageRecord: Schema.optional(UsageRecord), MeteringRecordId: Schema.optional(Schema.String), Status: Schema.optional(Schema.String)});
export const UsageRecordResultList = Schema.Array(UsageRecordResult);
export const BatchMeterUsageResult = Schema.Struct({Results: Schema.optional(UsageRecordResultList), UnprocessedRecords: Schema.optional(UsageRecordList)});
export const MeterUsageResult = Schema.Struct({MeteringRecordId: Schema.optional(Schema.String)});
export const InternalServiceErrorException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ExpiredTokenException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidCustomerIdentifierException = Schema.Struct({message: Schema.optional(Schema.String)});
export const DuplicateRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidProductCodeException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidTokenException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidTagException = Schema.Struct({message: Schema.optional(Schema.String)});
export const IdempotencyConflictException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidPublicKeyVersionException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidUsageAllocationsException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidEndpointRegionException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidRegionException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidUsageDimensionException = Schema.Struct({message: Schema.optional(Schema.String)});
export const TimestampOutOfBoundsException = Schema.Struct({message: Schema.optional(Schema.String)});
export const PlatformNotSupportedException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class CustomerNotEntitledExceptionError extends Schema.TaggedError<CustomerNotEntitledExceptionError>()("CustomerNotEntitledException", CustomerNotEntitledException) {};
export class DisabledApiExceptionError extends Schema.TaggedError<DisabledApiExceptionError>()("DisabledApiException", DisabledApiException) {};
export class InternalServiceErrorExceptionError extends Schema.TaggedError<InternalServiceErrorExceptionError>()("InternalServiceErrorException", InternalServiceErrorException) {};
export class ExpiredTokenExceptionError extends Schema.TaggedError<ExpiredTokenExceptionError>()("ExpiredTokenException", ExpiredTokenException) {};
export class InvalidCustomerIdentifierExceptionError extends Schema.TaggedError<InvalidCustomerIdentifierExceptionError>()("InvalidCustomerIdentifierException", InvalidCustomerIdentifierException) {};
export class InvalidProductCodeExceptionError extends Schema.TaggedError<InvalidProductCodeExceptionError>()("InvalidProductCodeException", InvalidProductCodeException) {};
export class DuplicateRequestExceptionError extends Schema.TaggedError<DuplicateRequestExceptionError>()("DuplicateRequestException", DuplicateRequestException) {};
export class InvalidTokenExceptionError extends Schema.TaggedError<InvalidTokenExceptionError>()("InvalidTokenException", InvalidTokenException) {};
export class InvalidTagExceptionError extends Schema.TaggedError<InvalidTagExceptionError>()("InvalidTagException", InvalidTagException) {};
export class IdempotencyConflictExceptionError extends Schema.TaggedError<IdempotencyConflictExceptionError>()("IdempotencyConflictException", IdempotencyConflictException) {};
export class InvalidPublicKeyVersionExceptionError extends Schema.TaggedError<InvalidPublicKeyVersionExceptionError>()("InvalidPublicKeyVersionException", InvalidPublicKeyVersionException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class InvalidUsageAllocationsExceptionError extends Schema.TaggedError<InvalidUsageAllocationsExceptionError>()("InvalidUsageAllocationsException", InvalidUsageAllocationsException) {};
export class InvalidEndpointRegionExceptionError extends Schema.TaggedError<InvalidEndpointRegionExceptionError>()("InvalidEndpointRegionException", InvalidEndpointRegionException) {};
export class InvalidUsageDimensionExceptionError extends Schema.TaggedError<InvalidUsageDimensionExceptionError>()("InvalidUsageDimensionException", InvalidUsageDimensionException) {};
export class InvalidRegionExceptionError extends Schema.TaggedError<InvalidRegionExceptionError>()("InvalidRegionException", InvalidRegionException) {};
export class TimestampOutOfBoundsExceptionError extends Schema.TaggedError<TimestampOutOfBoundsExceptionError>()("TimestampOutOfBoundsException", TimestampOutOfBoundsException) {};
export class PlatformNotSupportedExceptionError extends Schema.TaggedError<PlatformNotSupportedExceptionError>()("PlatformNotSupportedException", PlatformNotSupportedException) {};

//# Operations
export const resolveCustomer = /*#__PURE__*/ makeOperation(() => Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.ResolveCustomer" }, ResolveCustomerRequest, ResolveCustomerResult, [DisabledApiExceptionError, ExpiredTokenExceptionError, InternalServiceErrorExceptionError, InvalidTokenExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchMeterUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.BatchMeterUsage" }, BatchMeterUsageRequest, BatchMeterUsageResult, [DisabledApiExceptionError, InternalServiceErrorExceptionError, InvalidCustomerIdentifierExceptionError, InvalidProductCodeExceptionError, InvalidTagExceptionError, InvalidUsageAllocationsExceptionError, InvalidUsageDimensionExceptionError, ThrottlingExceptionError, TimestampOutOfBoundsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const meterUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.MeterUsage" }, MeterUsageRequest, MeterUsageResult, [CustomerNotEntitledExceptionError, DuplicateRequestExceptionError, IdempotencyConflictExceptionError, InternalServiceErrorExceptionError, InvalidEndpointRegionExceptionError, InvalidProductCodeExceptionError, InvalidTagExceptionError, InvalidUsageAllocationsExceptionError, InvalidUsageDimensionExceptionError, ThrottlingExceptionError, TimestampOutOfBoundsExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const registerUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.RegisterUsage" }, RegisterUsageRequest, RegisterUsageResult, [CustomerNotEntitledExceptionError, DisabledApiExceptionError, InternalServiceErrorExceptionError, InvalidProductCodeExceptionError, InvalidPublicKeyVersionExceptionError, InvalidRegionExceptionError, PlatformNotSupportedExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
