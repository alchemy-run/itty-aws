import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TargetStores = Schema.Array(Schema.String)
const FeatureNames = Schema.Array(Schema.String)
const DeleteRecordRequest = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, EventTime: Schema.String, TargetStores: Schema.optional(TargetStores), DeletionMode: Schema.optional(Schema.String)})
const GetRecordRequest = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, FeatureNames: Schema.optional(FeatureNames), ExpirationTimeResponse: Schema.optional(Schema.String)})
const RecordIdentifiers = Schema.Array(Schema.String)
const ValueAsStringList = Schema.Array(Schema.String)
const BatchGetRecordIdentifier = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifiersValueAsString: RecordIdentifiers, FeatureNames: Schema.optional(FeatureNames)})
const BatchGetRecordIdentifiers = Schema.Array(BatchGetRecordIdentifier)
const FeatureValue = Schema.Struct({FeatureName: Schema.String, ValueAsString: Schema.optional(Schema.String), ValueAsStringList: Schema.optional(ValueAsStringList)})
const Record = Schema.Array(FeatureValue)
const TtlDuration = Schema.Struct({Unit: Schema.String, Value: Schema.Number})
const BatchGetRecordRequest = Schema.Struct({Identifiers: BatchGetRecordIdentifiers, ExpirationTimeResponse: Schema.optional(Schema.String)})
const AccessForbidden = Schema.Struct({Message: Schema.optional(Schema.String)})
const GetRecordResponse = Schema.Struct({Record: Schema.optional(Record), ExpiresAt: Schema.optional(Schema.String)})
const PutRecordRequest = Schema.Struct({FeatureGroupName: Schema.String, Record: Record, TargetStores: Schema.optional(TargetStores), TtlDuration: Schema.optional(TtlDuration)})
const UnprocessedIdentifiers = Schema.Array(BatchGetRecordIdentifier)
const InternalFailure = Schema.Struct({Message: Schema.optional(Schema.String)})
const ResourceNotFound = Schema.Struct({Message: Schema.optional(Schema.String)})
export const GetRecord = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/FeatureGroup/{FeatureGroupName}", method: "GET", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "GetRecord" }, GetRecordRequest, GetRecordResponse, Schema.Union(ErrorAnnotation("AccessForbidden", AccessForbidden), ErrorAnnotation("InternalFailure", InternalFailure), ErrorAnnotation("ResourceNotFound", ResourceNotFound), ErrorAnnotation("ServiceUnavailable", ServiceUnavailable), ErrorAnnotation("ValidationError", ValidationError))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ServiceUnavailable = Schema.Struct({Message: Schema.optional(Schema.String)})
export const PutRecord = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/FeatureGroup/{FeatureGroupName}", method: "PUT", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "PutRecord" }, PutRecordRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessForbidden", AccessForbidden), ErrorAnnotation("InternalFailure", InternalFailure), ErrorAnnotation("ServiceUnavailable", ServiceUnavailable), ErrorAnnotation("ValidationError", ValidationError))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const BatchGetRecordResultDetail = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, Record: Record, ExpiresAt: Schema.optional(Schema.String)})
const BatchGetRecordResultDetails = Schema.Array(BatchGetRecordResultDetail)
const BatchGetRecordError = Schema.Struct({FeatureGroupName: Schema.String, RecordIdentifierValueAsString: Schema.String, ErrorCode: Schema.String, ErrorMessage: Schema.String})
const BatchGetRecordErrors = Schema.Array(BatchGetRecordError)
const BatchGetRecordResponse = Schema.Struct({Records: BatchGetRecordResultDetails, Errors: BatchGetRecordErrors, UnprocessedIdentifiers: UnprocessedIdentifiers})
export const BatchGetRecord = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/BatchGetRecord", method: "POST", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "BatchGetRecord" }, BatchGetRecordRequest, BatchGetRecordResponse, Schema.Union(ErrorAnnotation("AccessForbidden", AccessForbidden), ErrorAnnotation("InternalFailure", InternalFailure), ErrorAnnotation("ServiceUnavailable", ServiceUnavailable), ErrorAnnotation("ValidationError", ValidationError))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationError = Schema.Struct({Message: Schema.optional(Schema.String)})
export const DeleteRecord = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/FeatureGroup/{FeatureGroupName}", method: "DELETE", sdkId: "SageMaker FeatureStore Runtime", sigV4ServiceName: "sagemaker", name: "DeleteRecord" }, DeleteRecordRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessForbidden", AccessForbidden), ErrorAnnotation("InternalFailure", InternalFailure), ErrorAnnotation("ServiceUnavailable", ServiceUnavailable), ErrorAnnotation("ValidationError", ValidationError))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
