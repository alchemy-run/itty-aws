import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeys = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeys})
const UntagResourceResponse = Schema.Struct({})
const Tags = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(Tags)})
const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: Tags})
const TagResourceResponse = Schema.Struct({})
const AccessDeniedException = Schema.Struct({Message: Schema.String})
const InternalServerException = Schema.Struct({Message: Schema.String, RetryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
const OperationTimeoutException = Schema.Struct({Message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({Message: Schema.String, ResourceId: Schema.String, ResourceType: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MWAA Serverless", sigV4ServiceName: "airflow-serverless", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("OperationTimeoutException", OperationTimeoutException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ThrottlingException = Schema.Struct({Message: Schema.String, ServiceCode: Schema.String, QuotaCode: Schema.String, RetryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MWAA Serverless", sigV4ServiceName: "airflow-serverless", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("OperationTimeoutException", OperationTimeoutException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationExceptionField = Schema.Struct({Name: Schema.String, Message: Schema.String})
const ValidationExceptionFields = Schema.Array(ValidationExceptionField)
const ValidationException = Schema.Struct({Message: Schema.String, Reason: Schema.String, FieldList: Schema.optional(ValidationExceptionFields)})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MWAA Serverless", sigV4ServiceName: "airflow-serverless", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("OperationTimeoutException", OperationTimeoutException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
