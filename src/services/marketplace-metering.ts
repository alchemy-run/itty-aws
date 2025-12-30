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
export class UsageRecordResult extends S.Class<UsageRecordResult>("UsageRecordResult")({UsageRecord: S.optional(UsageRecord), MeteringRecordId: S.optional(S.String), Status: S.optional(S.String)}) {}
export const UsageRecordResultList = S.Array(UsageRecordResult);
export class BatchMeterUsageResult extends S.Class<BatchMeterUsageResult>("BatchMeterUsageResult")({Results: S.optional(UsageRecordResultList), UnprocessedRecords: S.optional(UsageRecordList)}) {}
export class MeterUsageResult extends S.Class<MeterUsageResult>("MeterUsageResult")({MeteringRecordId: S.optional(S.String)}) {}

//# Errors
export class CustomerNotEntitledException extends S.TaggedError<CustomerNotEntitledException>()("CustomerNotEntitledException", {message: S.optional(S.String)}) {};
export class DisabledApiException extends S.TaggedError<DisabledApiException>()("DisabledApiException", {}) {};
export class InternalServiceErrorException extends S.TaggedError<InternalServiceErrorException>()("InternalServiceErrorException", {}) {};
export class ExpiredTokenException extends S.TaggedError<ExpiredTokenException>()("ExpiredTokenException", {message: S.optional(S.String)}) {};
export class InvalidCustomerIdentifierException extends S.TaggedError<InvalidCustomerIdentifierException>()("InvalidCustomerIdentifierException", {message: S.optional(S.String)}) {};
export class InvalidProductCodeException extends S.TaggedError<InvalidProductCodeException>()("InvalidProductCodeException", {}) {};
export class DuplicateRequestException extends S.TaggedError<DuplicateRequestException>()("DuplicateRequestException", {message: S.optional(S.String)}) {};
export class InvalidTokenException extends S.TaggedError<InvalidTokenException>()("InvalidTokenException", {message: S.optional(S.String)}) {};
export class InvalidTagException extends S.TaggedError<InvalidTagException>()("InvalidTagException", {message: S.optional(S.String)}) {};
export class IdempotencyConflictException extends S.TaggedError<IdempotencyConflictException>()("IdempotencyConflictException", {message: S.optional(S.String)}) {};
export class InvalidPublicKeyVersionException extends S.TaggedError<InvalidPublicKeyVersionException>()("InvalidPublicKeyVersionException", {message: S.optional(S.String)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.optional(S.String)}) {};
export class InvalidUsageAllocationsException extends S.TaggedError<InvalidUsageAllocationsException>()("InvalidUsageAllocationsException", {message: S.optional(S.String)}) {};
export class InvalidEndpointRegionException extends S.TaggedError<InvalidEndpointRegionException>()("InvalidEndpointRegionException", {message: S.optional(S.String)}) {};
export class InvalidUsageDimensionException extends S.TaggedError<InvalidUsageDimensionException>()("InvalidUsageDimensionException", {}) {};
export class InvalidRegionException extends S.TaggedError<InvalidRegionException>()("InvalidRegionException", {message: S.optional(S.String)}) {};
export class TimestampOutOfBoundsException extends S.TaggedError<TimestampOutOfBoundsException>()("TimestampOutOfBoundsException", {}) {};
export class PlatformNotSupportedException extends S.TaggedError<PlatformNotSupportedException>()("PlatformNotSupportedException", {message: S.optional(S.String)}) {};

//# Operations
export const resolveCustomer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.ResolveCustomer" }, ResolveCustomerRequest, ResolveCustomerResult, [DisabledApiException, ExpiredTokenException, InternalServiceErrorException, InvalidTokenException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const batchMeterUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.BatchMeterUsage" }, BatchMeterUsageRequest, BatchMeterUsageResult, [DisabledApiException, InternalServiceErrorException, InvalidCustomerIdentifierException, InvalidProductCodeException, InvalidTagException, InvalidUsageAllocationsException, InvalidUsageDimensionException, ThrottlingException, TimestampOutOfBoundsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const meterUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.MeterUsage" }, MeterUsageRequest, MeterUsageResult, [CustomerNotEntitledException, DuplicateRequestException, IdempotencyConflictException, InternalServiceErrorException, InvalidEndpointRegionException, InvalidProductCodeException, InvalidTagException, InvalidUsageAllocationsException, InvalidUsageDimensionException, ThrottlingException, TimestampOutOfBoundsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const registerUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2016-01-14", uri: "/", method: "POST", sdkId: "Marketplace Metering", sigV4ServiceName: "aws-marketplace", name: "AWSMPMeteringService.RegisterUsage" }, RegisterUsageRequest, RegisterUsageResult, [CustomerNotEntitledException, DisabledApiException, InternalServiceErrorException, InvalidProductCodeException, InvalidPublicKeyVersionException, InvalidRegionException, PlatformNotSupportedException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
