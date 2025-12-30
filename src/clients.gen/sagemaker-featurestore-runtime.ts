import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TargetStores = Schema.Array(Schema.String);
export const FeatureNames = Schema.Array(Schema.String);
export const DeleteRecordRequest = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, EventTime: Schema.String, TargetStores: Schema.optional(TargetStores), DeletionMode: Schema.optional(Schema.String)});
export const GetRecordRequest = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, FeatureNames: Schema.optional(FeatureNames), ExpirationTimeResponse: Schema.optional(Schema.String)});
export const RecordIdentifiers = Schema.Array(Schema.String);
export const ValueAsStringList = Schema.Array(Schema.String);
export const BatchGetRecordIdentifier = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifiersValueAsString: RecordIdentifiers, FeatureNames: Schema.optional(FeatureNames)});
export const BatchGetRecordIdentifiers = Schema.Array(BatchGetRecordIdentifier);
export const FeatureValue = Schema.Struct({FeatureName: Schema.String, ValueAsString: Schema.optional(Schema.String), ValueAsStringList: Schema.optional(ValueAsStringList)});
export const Record = Schema.Array(FeatureValue);
export const TtlDuration = Schema.Struct({Unit: Schema.String, Value: Schema.Number});
export const BatchGetRecordRequest = Schema.Struct({Identifiers: BatchGetRecordIdentifiers, ExpirationTimeResponse: Schema.optional(Schema.String)});
export const AccessForbidden = Schema.Struct({Message: Schema.optional(Schema.String)});
export const GetRecordResponse = Schema.Struct({Record: Schema.optional(Record), ExpiresAt: Schema.optional(Schema.String)});
export const PutRecordRequest = Schema.Struct({FeatureGroupName: Schema.String, Record: Record, TargetStores: Schema.optional(TargetStores), TtlDuration: Schema.optional(TtlDuration)});
export const UnprocessedIdentifiers = Schema.Array(BatchGetRecordIdentifier);
export const InternalFailure = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFound = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ServiceUnavailable = Schema.Struct({Message: Schema.optional(Schema.String)});
export const BatchGetRecordResultDetail = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, Record: Record, ExpiresAt: Schema.optional(Schema.String)});
export const BatchGetRecordResultDetails = Schema.Array(BatchGetRecordResultDetail);
export const BatchGetRecordError = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, ErrorCode: Schema.String, ErrorMessage: Schema.String});
export const BatchGetRecordErrors = Schema.Array(BatchGetRecordError);
export const BatchGetRecordResponse = Schema.Struct({Records: BatchGetRecordResultDetails, Errors: BatchGetRecordErrors, UnprocessedIdentifiers: UnprocessedIdentifiers});
export const ValidationError = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class AccessForbiddenError extends Schema.TaggedError<AccessForbiddenError>()("AccessForbidden", AccessForbidden) {};
export class InternalFailureError extends Schema.TaggedError<InternalFailureError>()("InternalFailure", InternalFailure) {};
export class ServiceUnavailableError extends Schema.TaggedError<ServiceUnavailableError>()("ServiceUnavailable", ServiceUnavailable) {};
export class ResourceNotFoundError extends Schema.TaggedError<ResourceNotFoundError>()("ResourceNotFound", ResourceNotFound) {};
export class ValidationErrorError extends Schema.TaggedError<ValidationErrorError>()("ValidationError", ValidationError) {};

//# Operations
export const getRecord = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-01", uri: "/FeatureGroup/{FeatureGroupName}", method: "GET", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.GetRecord" }, GetRecordRequest, GetRecordResponse, [AccessForbiddenError, InternalFailureError, ResourceNotFoundError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putRecord = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-01", uri: "/FeatureGroup/{FeatureGroupName}", method: "PUT", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.PutRecord" }, PutRecordRequest, Schema.Struct({}), [AccessForbiddenError, InternalFailureError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const batchGetRecord = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-01", uri: "/BatchGetRecord", method: "POST", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.BatchGetRecord" }, BatchGetRecordRequest, BatchGetRecordResponse, [AccessForbiddenError, InternalFailureError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteRecord = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-07-01", uri: "/FeatureGroup/{FeatureGroupName}", method: "DELETE", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "AmazonSageMakerFeatureStoreRuntime.DeleteRecord" }, DeleteRecordRequest, Schema.Struct({}), [AccessForbiddenError, InternalFailureError, ServiceUnavailableError, ValidationErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
