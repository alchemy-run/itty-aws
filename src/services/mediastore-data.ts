import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteObjectRequest extends S.Class<DeleteObjectRequest>("DeleteObjectRequest")({Path: S.String}) {}
export class DeleteObjectResponse extends S.Class<DeleteObjectResponse>("DeleteObjectResponse")({}) {}
export class DescribeObjectRequest extends S.Class<DescribeObjectRequest>("DescribeObjectRequest")({Path: S.String}) {}
export class GetObjectRequest extends S.Class<GetObjectRequest>("GetObjectRequest")({Path: S.String, Range: S.optional(H.Header("Range"))}) {}
export class ListItemsRequest extends S.Class<ListItemsRequest>("ListItemsRequest")({Path: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class PutObjectRequest extends S.Class<PutObjectRequest>("PutObjectRequest")({Body: H.Body("undefined", H.StreamBody()), Path: S.String, ContentType: S.optional(H.Header("Content-Type")), CacheControl: S.optional(H.Header("Cache-Control")), StorageClass: S.optional(H.Header("x-amz-storage-class")), UploadAvailability: S.optional(H.Header("x-amz-upload-availability"))}) {}
export class DescribeObjectResponse extends S.Class<DescribeObjectResponse>("DescribeObjectResponse")({ETag: S.optional(H.Header("ETag")), ContentType: S.optional(H.Header("Content-Type")), ContentLength: S.optional(H.Header("Content-Length", S.Number)), CacheControl: S.optional(H.Header("Cache-Control")), LastModified: S.optional(H.Header("Last-Modified", S.Date))}) {}
export class GetObjectResponse extends S.Class<GetObjectResponse>("GetObjectResponse")({Body: S.optional(H.Body("undefined", H.StreamBody())), CacheControl: S.optional(H.Header("Cache-Control")), ContentRange: S.optional(H.Header("Content-Range")), ContentLength: S.optional(H.Header("Content-Length", S.Number)), ContentType: S.optional(H.Header("Content-Type")), ETag: S.optional(H.Header("ETag")), LastModified: S.optional(H.Header("Last-Modified", S.Date)), StatusCode: S.Number}) {}
export class PutObjectResponse extends S.Class<PutObjectResponse>("PutObjectResponse")({ContentSHA256: S.optional(S.String), ETag: S.optional(S.String), StorageClass: S.optional(S.String)}) {}
export class Item extends S.Class<Item>("Item")({Name: S.optional(S.String), Type: S.optional(S.String), ETag: S.optional(S.String), LastModified: S.optional(S.Date), ContentType: S.optional(S.String), ContentLength: S.optional(S.Number)}) {}
export const ItemList = S.Array(Item);
export class ListItemsResponse extends S.Class<ListItemsResponse>("ListItemsResponse")({Items: S.optional(ItemList), NextToken: S.optional(S.String)}) {}

//# Errors
export class ContainerNotFoundException extends S.TaggedError<ContainerNotFoundException>()("ContainerNotFoundException", {Message: S.optional(S.String)}) {};
export class InternalServerError extends S.TaggedError<InternalServerError>()("InternalServerError", {}) {};
export class ObjectNotFoundException extends S.TaggedError<ObjectNotFoundException>()("ObjectNotFoundException", {}) {};
export class RequestedRangeNotSatisfiableException extends S.TaggedError<RequestedRangeNotSatisfiableException>()("RequestedRangeNotSatisfiableException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.
 */export const putObject = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/{Path+}", method: "PUT", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.PutObject" }, PutObjectRequest, PutObjectResponse, [ContainerNotFoundException, InternalServerError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an object at the specified path.
 */export const deleteObject = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/{Path+}", method: "DELETE", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.DeleteObject" }, DeleteObjectRequest, DeleteObjectResponse, [ContainerNotFoundException, InternalServerError, ObjectNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the headers for an object at the specified path.
 */export const describeObject = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/{Path+}", method: "HEAD", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.DescribeObject" }, DescribeObjectRequest, DescribeObjectResponse, [ContainerNotFoundException, InternalServerError, ObjectNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Downloads the object at the specified path. If the object’s upload availability is set to `streaming`, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.
 */export const getObject = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/{Path+}", method: "GET", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.GetObject" }, GetObjectRequest, GetObjectResponse, [ContainerNotFoundException, InternalServerError, ObjectNotFoundException, RequestedRangeNotSatisfiableException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Provides a list of metadata entries about folders and objects in the specified
 * folder.
 */export const listItems = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-01", uri: "/", method: "GET", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.ListItems" }, ListItemsRequest, ListItemsResponse, [ContainerNotFoundException, InternalServerError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
