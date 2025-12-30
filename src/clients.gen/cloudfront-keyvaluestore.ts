import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DeleteKeyRequest = Schema.Struct({KvsARN: Path("KvsARN", Schema.String), Key: Schema.String, IfMatch: Header("If-Match")});
export const DescribeKeyValueStoreRequest = Schema.Struct({KvsARN: Path("KvsARN", Schema.String)});
export const GetKeyRequest = Schema.Struct({KvsARN: Path("KvsARN", Schema.String), Key: Schema.String});
export const ListKeysRequest = Schema.Struct({KvsARN: Path("KvsARN", Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const PutKeyRequest = Schema.Struct({Key: Schema.String, Value: Schema.String, KvsARN: Path("KvsARN", Schema.String), IfMatch: Header("If-Match")});
export const PutKeyRequestListItem = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const PutKeyRequestsList = Schema.Array(PutKeyRequestListItem);
export const DeleteKeyRequestListItem = Schema.Struct({Key: Schema.String});
export const DeleteKeyRequestsList = Schema.Array(DeleteKeyRequestListItem);
export const DeleteKeyResponse = Schema.Struct({ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number, ETag: Header("ETag")});
export const DescribeKeyValueStoreResponse = Schema.Struct({ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number, KvsARN: Schema.String, Created: Schema.Date, ETag: Header("ETag"), LastModified: Schema.optional(Schema.Date), Status: Schema.optional(Schema.String), FailureReason: Schema.optional(Schema.String)});
export const GetKeyResponse = Schema.Struct({Key: Schema.String, Value: Schema.String, ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number});
export const PutKeyResponse = Schema.Struct({ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number, ETag: Header("ETag")});
export const UpdateKeysRequest = Schema.Struct({KvsARN: Path("KvsARN", Schema.String), IfMatch: Header("If-Match"), Puts: Schema.optional(PutKeyRequestsList), Deletes: Schema.optional(DeleteKeyRequestsList)});
export const ListKeysResponseListItem = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const ListKeysResponseList = Schema.Array(ListKeysResponseListItem);
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ListKeysResponse = Schema.Struct({NextToken: Schema.optional(Schema.String), Items: Schema.optional(ListKeysResponseList)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const UpdateKeysResponse = Schema.Struct({ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number, ETag: Header("ETag")});
export const ServiceQuotaExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const describeKeyValueStore = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}", method: "GET", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.DescribeKeyValueStore" }, DescribeKeyValueStoreRequest, DescribeKeyValueStoreResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys/{Key}", method: "GET", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.GetKey" }, GetKeyRequest, GetKeyResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys/{Key}", method: "PUT", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.PutKey" }, PutKeyRequest, PutKeyResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateKeys = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys", method: "POST", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.UpdateKeys" }, UpdateKeysRequest, UpdateKeysResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys/{Key}", method: "DELETE", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.DeleteKey" }, DeleteKeyRequest, DeleteKeyResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listKeys = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys", method: "GET", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.ListKeys" }, ListKeysRequest, ListKeysResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
