import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteKeyRequest extends S.Class<DeleteKeyRequest>("DeleteKeyRequest")({KvsARN: H.Path("KvsARN", S.String), Key: S.String, IfMatch: H.Header("If-Match")}) {}
export class DescribeKeyValueStoreRequest extends S.Class<DescribeKeyValueStoreRequest>("DescribeKeyValueStoreRequest")({KvsARN: H.Path("KvsARN", S.String)}) {}
export class GetKeyRequest extends S.Class<GetKeyRequest>("GetKeyRequest")({KvsARN: H.Path("KvsARN", S.String), Key: S.String}) {}
export class ListKeysRequest extends S.Class<ListKeysRequest>("ListKeysRequest")({KvsARN: H.Path("KvsARN", S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class PutKeyRequest extends S.Class<PutKeyRequest>("PutKeyRequest")({Key: S.String, Value: S.String, KvsARN: H.Path("KvsARN", S.String), IfMatch: H.Header("If-Match")}) {}
export class PutKeyRequestListItem extends S.Class<PutKeyRequestListItem>("PutKeyRequestListItem")({Key: S.String, Value: S.String}) {}
export const PutKeyRequestsList = S.Array(PutKeyRequestListItem);
export class DeleteKeyRequestListItem extends S.Class<DeleteKeyRequestListItem>("DeleteKeyRequestListItem")({Key: S.String}) {}
export const DeleteKeyRequestsList = S.Array(DeleteKeyRequestListItem);
export class DeleteKeyResponse extends S.Class<DeleteKeyResponse>("DeleteKeyResponse")({ItemCount: S.Number, TotalSizeInBytes: S.Number, ETag: H.Header("ETag")}) {}
export class DescribeKeyValueStoreResponse extends S.Class<DescribeKeyValueStoreResponse>("DescribeKeyValueStoreResponse")({ItemCount: S.Number, TotalSizeInBytes: S.Number, KvsARN: S.String, Created: S.Date, ETag: H.Header("ETag"), LastModified: S.optional(S.Date), Status: S.optional(S.String), FailureReason: S.optional(S.String)}) {}
export class GetKeyResponse extends S.Class<GetKeyResponse>("GetKeyResponse")({Key: S.String, Value: S.String, ItemCount: S.Number, TotalSizeInBytes: S.Number}) {}
export class PutKeyResponse extends S.Class<PutKeyResponse>("PutKeyResponse")({ItemCount: S.Number, TotalSizeInBytes: S.Number, ETag: H.Header("ETag")}) {}
export class UpdateKeysRequest extends S.Class<UpdateKeysRequest>("UpdateKeysRequest")({KvsARN: H.Path("KvsARN", S.String), IfMatch: H.Header("If-Match"), Puts: S.optional(PutKeyRequestsList), Deletes: S.optional(DeleteKeyRequestsList)}) {}
export class ListKeysResponseListItem extends S.Class<ListKeysResponseListItem>("ListKeysResponseListItem")({Key: S.String, Value: S.String}) {}
export const ListKeysResponseList = S.Array(ListKeysResponseListItem);
export class ListKeysResponse extends S.Class<ListKeysResponse>("ListKeysResponse")({NextToken: S.optional(S.String), Items: S.optional(ListKeysResponseList)}) {}
export class UpdateKeysResponse extends S.Class<UpdateKeysResponse>("UpdateKeysResponse")({ItemCount: S.Number, TotalSizeInBytes: S.Number, ETag: H.Header("ETag")}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
export const describeKeyValueStore = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}", method: "GET", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.DescribeKeyValueStore" }, DescribeKeyValueStoreRequest, DescribeKeyValueStoreResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getKey = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys/{Key}", method: "GET", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.GetKey" }, GetKeyRequest, GetKeyResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putKey = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys/{Key}", method: "PUT", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.PutKey" }, PutKeyRequest, PutKeyResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateKeys = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys", method: "POST", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.UpdateKeys" }, UpdateKeysRequest, UpdateKeysResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteKey = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys/{Key}", method: "DELETE", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.DeleteKey" }, DeleteKeyRequest, DeleteKeyResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listKeys = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-07-26", uri: "/key-value-stores/{KvsARN}/keys", method: "GET", sdkId: "CloudFront KeyValueStore", sigV4ServiceName: "cloudfront-keyvaluestore", name: "CloudFrontKeyValueStore.ListKeys" }, ListKeysRequest, ListKeysResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
