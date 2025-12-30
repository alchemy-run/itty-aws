import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class DeleteKeyRequest extends Schema.Class<DeleteKeyRequest>("DeleteKeyRequest")({KvsARN: Path("KvsARN", Schema.String), Key: Schema.String, IfMatch: Header("If-Match")}) {}
export class DescribeKeyValueStoreRequest extends Schema.Class<DescribeKeyValueStoreRequest>("DescribeKeyValueStoreRequest")({KvsARN: Path("KvsARN", Schema.String)}) {}
export class GetKeyRequest extends Schema.Class<GetKeyRequest>("GetKeyRequest")({KvsARN: Path("KvsARN", Schema.String), Key: Schema.String}) {}
export class ListKeysRequest extends Schema.Class<ListKeysRequest>("ListKeysRequest")({KvsARN: Path("KvsARN", Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class PutKeyRequest extends Schema.Class<PutKeyRequest>("PutKeyRequest")({Key: Schema.String, Value: Schema.String, KvsARN: Path("KvsARN", Schema.String), IfMatch: Header("If-Match")}) {}
export class PutKeyRequestListItem extends Schema.Class<PutKeyRequestListItem>("PutKeyRequestListItem")({Key: Schema.String, Value: Schema.String}) {}
export const PutKeyRequestsList = Schema.Array(PutKeyRequestListItem);
export class DeleteKeyRequestListItem extends Schema.Class<DeleteKeyRequestListItem>("DeleteKeyRequestListItem")({Key: Schema.String}) {}
export const DeleteKeyRequestsList = Schema.Array(DeleteKeyRequestListItem);
export class DeleteKeyResponse extends Schema.Class<DeleteKeyResponse>("DeleteKeyResponse")({ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number, ETag: Header("ETag")}) {}
export class DescribeKeyValueStoreResponse extends Schema.Class<DescribeKeyValueStoreResponse>("DescribeKeyValueStoreResponse")({ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number, KvsARN: Schema.String, Created: Schema.Date, ETag: Header("ETag"), LastModified: Schema.optional(Schema.Date), Status: Schema.optional(Schema.String), FailureReason: Schema.optional(Schema.String)}) {}
export class GetKeyResponse extends Schema.Class<GetKeyResponse>("GetKeyResponse")({Key: Schema.String, Value: Schema.String, ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number}) {}
export class PutKeyResponse extends Schema.Class<PutKeyResponse>("PutKeyResponse")({ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number, ETag: Header("ETag")}) {}
export class UpdateKeysRequest extends Schema.Class<UpdateKeysRequest>("UpdateKeysRequest")({KvsARN: Path("KvsARN", Schema.String), IfMatch: Header("If-Match"), Puts: Schema.optional(PutKeyRequestsList), Deletes: Schema.optional(DeleteKeyRequestsList)}) {}
export class ListKeysResponseListItem extends Schema.Class<ListKeysResponseListItem>("ListKeysResponseListItem")({Key: Schema.String, Value: Schema.String}) {}
export const ListKeysResponseList = Schema.Array(ListKeysResponseListItem);
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.optional(Schema.String)}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({Message: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.optional(Schema.String)}) {}
export class ListKeysResponse extends Schema.Class<ListKeysResponse>("ListKeysResponse")({NextToken: Schema.optional(Schema.String), Items: Schema.optional(ListKeysResponseList)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class UpdateKeysResponse extends Schema.Class<UpdateKeysResponse>("UpdateKeysResponse")({ItemCount: Schema.Number, TotalSizeInBytes: Schema.Number, ETag: Header("ETag")}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({Message: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const describeKeyValueStore = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}", method: "GET", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.DescribeKeyValueStore" }, DescribeKeyValueStoreRequest, DescribeKeyValueStoreResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys/{Key}", method: "GET", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.GetKey" }, GetKeyRequest, GetKeyResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys/{Key}", method: "PUT", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.PutKey" }, PutKeyRequest, PutKeyResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateKeys = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys", method: "POST", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.UpdateKeys" }, UpdateKeysRequest, UpdateKeysResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys/{Key}", method: "DELETE", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.DeleteKey" }, DeleteKeyRequest, DeleteKeyResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listKeys = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys", method: "GET", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.ListKeys" }, ListKeysRequest, ListKeysResponse, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
