import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TargetStores = S.Array(S.String);
export const FeatureNames = S.Array(S.String);
export class DeleteRecordRequest extends S.Class<DeleteRecordRequest>("DeleteRecordRequest")({FeatureGroupName: S.String, RecordIdentifierValueAsString: S.String, EventTime: S.String, TargetStores: S.optional(TargetStores), DeletionMode: S.optional(S.String)}) {}
export class GetRecordRequest extends S.Class<GetRecordRequest>("GetRecordRequest")({FeatureGroupName: S.String, RecordIdentifierValueAsString: S.String, FeatureNames: S.optional(FeatureNames), ExpirationTimeResponse: S.optional(S.String)}) {}
export const RecordIdentifiers = S.Array(S.String);
export const ValueAsStringList = S.Array(S.String);
export class BatchGetRecordIdentifier extends S.Class<BatchGetRecordIdentifier>("BatchGetRecordIdentifier")({FeatureGroupName: S.String, RecordIdentifiersValueAsString: RecordIdentifiers, FeatureNames: S.optional(FeatureNames)}) {}
export const BatchGetRecordIdentifiers = S.Array(BatchGetRecordIdentifier);
export class FeatureValue extends S.Class<FeatureValue>("FeatureValue")({FeatureName: S.String, ValueAsString: S.optional(S.String), ValueAsStringList: S.optional(ValueAsStringList)}) {}
export const Record = S.Array(FeatureValue);
export class TtlDuration extends S.Class<TtlDuration>("TtlDuration")({Unit: S.String, Value: S.Number}) {}
export class BatchGetRecordRequest extends S.Class<BatchGetRecordRequest>("BatchGetRecordRequest")({Identifiers: BatchGetRecordIdentifiers, ExpirationTimeResponse: S.optional(S.String)}) {}
export class AccessForbidden extends S.Class<AccessForbidden>("AccessForbidden")({Message: S.optional(S.String)}) {}
export class GetRecordResponse extends S.Class<GetRecordResponse>("GetRecordResponse")({Record: S.optional(Record), ExpiresAt: S.optional(S.String)}) {}
export class PutRecordRequest extends S.Class<PutRecordRequest>("PutRecordRequest")({FeatureGroupName: S.String, Record: Record, TargetStores: S.optional(TargetStores), TtlDuration: S.optional(TtlDuration)}) {}
export const UnprocessedIdentifiers = S.Array(BatchGetRecordIdentifier);
export class InternalFailure extends S.Class<InternalFailure>("InternalFailure")({Message: S.optional(S.String)}) {}
export class ResourceNotFound extends S.Class<ResourceNotFound>("ResourceNotFound")({Message: S.optional(S.String)}) {}
export class ServiceUnavailable extends S.Class<ServiceUnavailable>("ServiceUnavailable")({Message: S.optional(S.String)}) {}
export class BatchGetRecordResultDetail extends S.Class<BatchGetRecordResultDetail>("BatchGetRecordResultDetail")({FeatureGroupName: S.String, RecordIdentifierValueAsString: S.String, Record: Record, ExpiresAt: S.optional(S.String)}) {}
export const BatchGetRecordResultDetails = S.Array(BatchGetRecordResultDetail);
export class BatchGetRecordError extends S.Class<BatchGetRecordError>("BatchGetRecordError")({FeatureGroupName: S.String, RecordIdentifierValueAsString: S.String, ErrorCode: S.String, ErrorMessage: S.String}) {}
export const BatchGetRecordErrors = S.Array(BatchGetRecordError);
export class BatchGetRecordResponse extends S.Class<BatchGetRecordResponse>("BatchGetRecordResponse")({Records: BatchGetRecordResultDetails, Errors: BatchGetRecordErrors, UnprocessedIdentifiers: UnprocessedIdentifiers}) {}
export class ValidationError extends S.Class<ValidationError>("ValidationError")({Message: S.optional(S.String)}) {}

//# Errors
export class AccessForbiddenError extends S.TaggedError<AccessForbiddenError>()("AccessForbidden", AccessForbidden.fields) {};
export class InternalFailureError extends S.TaggedError<InternalFailureError>()("InternalFailure", InternalFailure.fields) {};
export class ServiceUnavailableError extends S.TaggedError<ServiceUnavailableError>()("ServiceUnavailable", ServiceUnavailable.fields) {};
export class ResourceNotFoundError extends S.TaggedError<ResourceNotFoundError>()("ResourceNotFound", ResourceNotFound.fields) {};
export class ValidationErrorError extends S.TaggedError<ValidationErrorError>()("ValidationError", ValidationError.fields) {};

//# Operations
export const getRecord = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-01", uri: "/FeatureGroup/{FeatureGroupName}", method: "GET", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.GetRecord" }, GetRecordRequest, GetRecordResponse, [AccessForbiddenError, InternalFailureError, ResourceNotFoundError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putRecord = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-01", uri: "/FeatureGroup/{FeatureGroupName}", method: "PUT", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.PutRecord" }, PutRecordRequest, S.Struct({}), [AccessForbiddenError, InternalFailureError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetRecord = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-01", uri: "/BatchGetRecord", method: "POST", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.BatchGetRecord" }, BatchGetRecordRequest, BatchGetRecordResponse, [AccessForbiddenError, InternalFailureError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteRecord = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-07-01", uri: "/FeatureGroup/{FeatureGroupName}", method: "DELETE", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.DeleteRecord" }, DeleteRecordRequest, S.Struct({}), [AccessForbiddenError, InternalFailureError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
