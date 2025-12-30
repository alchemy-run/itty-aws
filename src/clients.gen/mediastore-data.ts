import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class DeleteObjectRequest extends Schema.Class<DeleteObjectRequest>("DeleteObjectRequest")({Path: Schema.String}) {}
export class DeleteObjectResponse extends Schema.Class<DeleteObjectResponse>("DeleteObjectResponse")({}) {}
export class DescribeObjectRequest extends Schema.Class<DescribeObjectRequest>("DescribeObjectRequest")({Path: Schema.String}) {}
export class GetObjectRequest extends Schema.Class<GetObjectRequest>("GetObjectRequest")({Path: Schema.String, Range: Schema.optional(Header("Range"))}) {}
export class ListItemsRequest extends Schema.Class<ListItemsRequest>("ListItemsRequest")({Path: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class PutObjectRequest extends Schema.Class<PutObjectRequest>("PutObjectRequest")({Body: Body("undefined", StreamBody()), Path: Schema.String, ContentType: Schema.optional(Header("Content-Type")), CacheControl: Schema.optional(Header("Cache-Control")), StorageClass: Schema.optional(Header("x-amz-storage-class")), UploadAvailability: Schema.optional(Header("x-amz-upload-availability"))}) {}
export class ContainerNotFoundException extends Schema.Class<ContainerNotFoundException>("ContainerNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class DescribeObjectResponse extends Schema.Class<DescribeObjectResponse>("DescribeObjectResponse")({ETag: Schema.optional(Header("ETag")), ContentType: Schema.optional(Header("Content-Type")), ContentLength: Schema.optional(Header("Content-Length", Schema.Number)), CacheControl: Schema.optional(Header("Cache-Control")), LastModified: Schema.optional(Header("Last-Modified", Schema.Date))}) {}
export class GetObjectResponse extends Schema.Class<GetObjectResponse>("GetObjectResponse")({Body: Schema.optional(Body("undefined", StreamBody())), CacheControl: Schema.optional(Header("Cache-Control")), ContentRange: Schema.optional(Header("Content-Range")), ContentLength: Schema.optional(Header("Content-Length", Schema.Number)), ContentType: Schema.optional(Header("Content-Type")), ETag: Schema.optional(Header("ETag")), LastModified: Schema.optional(Header("Last-Modified", Schema.Date)), StatusCode: Schema.Number}) {}
export class PutObjectResponse extends Schema.Class<PutObjectResponse>("PutObjectResponse")({ContentSHA256: Schema.optional(Schema.String), ETag: Schema.optional(Schema.String), StorageClass: Schema.optional(Schema.String)}) {}
export class Item extends Schema.Class<Item>("Item")({Name: Schema.optional(Schema.String), Type: Schema.optional(Schema.String), ETag: Schema.optional(Schema.String), LastModified: Schema.optional(Schema.Date), ContentType: Schema.optional(Schema.String), ContentLength: Schema.optional(Schema.Number)}) {}
export const ItemList = Schema.Array(Item);
export class InternalServerError extends Schema.Class<InternalServerError>("InternalServerError")({Message: Schema.optional(Schema.String)}) {}
export class ObjectNotFoundException extends Schema.Class<ObjectNotFoundException>("ObjectNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class RequestedRangeNotSatisfiableException extends Schema.Class<RequestedRangeNotSatisfiableException>("RequestedRangeNotSatisfiableException")({Message: Schema.optional(Schema.String)}) {}
export class ListItemsResponse extends Schema.Class<ListItemsResponse>("ListItemsResponse")({Items: Schema.optional(ItemList), NextToken: Schema.optional(Schema.String)}) {}

//# Errors
export class ContainerNotFoundExceptionError extends Schema.TaggedError<ContainerNotFoundExceptionError>()("ContainerNotFoundException", ContainerNotFoundException.fields) {};
export class InternalServerErrorError extends Schema.TaggedError<InternalServerErrorError>()("InternalServerError", InternalServerError.fields) {};
export class ObjectNotFoundExceptionError extends Schema.TaggedError<ObjectNotFoundExceptionError>()("ObjectNotFoundException", ObjectNotFoundException.fields) {};
export class RequestedRangeNotSatisfiableExceptionError extends Schema.TaggedError<RequestedRangeNotSatisfiableExceptionError>()("RequestedRangeNotSatisfiableException", RequestedRangeNotSatisfiableException.fields) {};

//# Operations
export const putObject = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/{Path+}", method: "PUT", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.PutObject" }, PutObjectRequest, PutObjectResponse, [ContainerNotFoundExceptionError, InternalServerErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteObject = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/{Path+}", method: "DELETE", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.DeleteObject" }, DeleteObjectRequest, DeleteObjectResponse, [ContainerNotFoundExceptionError, InternalServerErrorError, ObjectNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const describeObject = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/{Path+}", method: "HEAD", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.DescribeObject" }, DescribeObjectRequest, DescribeObjectResponse, [ContainerNotFoundExceptionError, InternalServerErrorError, ObjectNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getObject = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/{Path+}", method: "GET", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.GetObject" }, GetObjectRequest, GetObjectResponse, [ContainerNotFoundExceptionError, InternalServerErrorError, ObjectNotFoundExceptionError, RequestedRangeNotSatisfiableExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listItems = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-01", uri: "/", method: "GET", sdkId: "MediaStore Data", sigV4ServiceName: "mediastore", name: "MediaStoreObject_20170901.ListItems" }, ListItemsRequest, ListItemsResponse, [ContainerNotFoundExceptionError, InternalServerErrorError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
