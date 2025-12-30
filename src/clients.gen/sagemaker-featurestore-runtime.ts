import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TargetStores = Schema.Array(Schema.String);
export const FeatureNames = Schema.Array(Schema.String);
export class DeleteRecordRequest extends Schema.Class<DeleteRecordRequest>("DeleteRecordRequest")({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, EventTime: Schema.String, TargetStores: Schema.optional(TargetStores), DeletionMode: Schema.optional(Schema.String)}) {}
export class GetRecordRequest extends Schema.Class<GetRecordRequest>("GetRecordRequest")({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, FeatureNames: Schema.optional(FeatureNames), ExpirationTimeResponse: Schema.optional(Schema.String)}) {}
export const RecordIdentifiers = Schema.Array(Schema.String);
export const ValueAsStringList = Schema.Array(Schema.String);
export class BatchGetRecordIdentifier extends Schema.Class<BatchGetRecordIdentifier>("BatchGetRecordIdentifier")({FeatureGroupName: Schema.String, RecordIdentifiersValueAsString: RecordIdentifiers, FeatureNames: Schema.optional(FeatureNames)}) {}
export const BatchGetRecordIdentifiers = Schema.Array(BatchGetRecordIdentifier);
export class FeatureValue extends Schema.Class<FeatureValue>("FeatureValue")({FeatureName: Schema.String, ValueAsString: Schema.optional(Schema.String), ValueAsStringList: Schema.optional(ValueAsStringList)}) {}
export const Record = Schema.Array(FeatureValue);
export class TtlDuration extends Schema.Class<TtlDuration>("TtlDuration")({Unit: Schema.String, Value: Schema.Number}) {}
export class BatchGetRecordRequest extends Schema.Class<BatchGetRecordRequest>("BatchGetRecordRequest")({Identifiers: BatchGetRecordIdentifiers, ExpirationTimeResponse: Schema.optional(Schema.String)}) {}
export class AccessForbidden extends Schema.Class<AccessForbidden>("AccessForbidden")({Message: Schema.optional(Schema.String)}) {}
export class GetRecordResponse extends Schema.Class<GetRecordResponse>("GetRecordResponse")({Record: Schema.optional(Record), ExpiresAt: Schema.optional(Schema.String)}) {}
export class PutRecordRequest extends Schema.Class<PutRecordRequest>("PutRecordRequest")({FeatureGroupName: Schema.String, Record: Record, TargetStores: Schema.optional(TargetStores), TtlDuration: Schema.optional(TtlDuration)}) {}
export const UnprocessedIdentifiers = Schema.Array(BatchGetRecordIdentifier);
export class InternalFailure extends Schema.Class<InternalFailure>("InternalFailure")({Message: Schema.optional(Schema.String)}) {}
export class ResourceNotFound extends Schema.Class<ResourceNotFound>("ResourceNotFound")({Message: Schema.optional(Schema.String)}) {}
export class ServiceUnavailable extends Schema.Class<ServiceUnavailable>("ServiceUnavailable")({Message: Schema.optional(Schema.String)}) {}
export class BatchGetRecordResultDetail extends Schema.Class<BatchGetRecordResultDetail>("BatchGetRecordResultDetail")({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, Record: Record, ExpiresAt: Schema.optional(Schema.String)}) {}
export const BatchGetRecordResultDetails = Schema.Array(BatchGetRecordResultDetail);
export class BatchGetRecordError extends Schema.Class<BatchGetRecordError>("BatchGetRecordError")({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, ErrorCode: Schema.String, ErrorMessage: Schema.String}) {}
export const BatchGetRecordErrors = Schema.Array(BatchGetRecordError);
export class BatchGetRecordResponse extends Schema.Class<BatchGetRecordResponse>("BatchGetRecordResponse")({Records: BatchGetRecordResultDetails, Errors: BatchGetRecordErrors, UnprocessedIdentifiers: UnprocessedIdentifiers}) {}
export class ValidationError extends Schema.Class<ValidationError>("ValidationError")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessForbiddenError extends Schema.TaggedError<AccessForbiddenError>()("AccessForbidden", AccessForbidden.fields) {};
export class InternalFailureError extends Schema.TaggedError<InternalFailureError>()("InternalFailure", InternalFailure.fields) {};
export class ServiceUnavailableError extends Schema.TaggedError<ServiceUnavailableError>()("ServiceUnavailable", ServiceUnavailable.fields) {};
export class ResourceNotFoundError extends Schema.TaggedError<ResourceNotFoundError>()("ResourceNotFound", ResourceNotFound.fields) {};
export class ValidationErrorError extends Schema.TaggedError<ValidationErrorError>()("ValidationError", ValidationError.fields) {};

//# Operations
export const getRecord = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-01", uri: "/FeatureGroup/{FeatureGroupName}", method: "GET", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.GetRecord" }, GetRecordRequest, GetRecordResponse, [AccessForbiddenError, InternalFailureError, ResourceNotFoundError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putRecord = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-01", uri: "/FeatureGroup/{FeatureGroupName}", method: "PUT", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.PutRecord" }, PutRecordRequest, Schema.Struct({}), [AccessForbiddenError, InternalFailureError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetRecord = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-01", uri: "/BatchGetRecord", method: "POST", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.BatchGetRecord" }, BatchGetRecordRequest, BatchGetRecordResponse, [AccessForbiddenError, InternalFailureError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteRecord = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-01", uri: "/FeatureGroup/{FeatureGroupName}", method: "DELETE", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.DeleteRecord" }, DeleteRecordRequest, Schema.Struct({}), [AccessForbiddenError, InternalFailureError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
