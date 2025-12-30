import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeys}) {}
export const RequestTagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: RequestTagMap}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String}) {}
export const ResponseTagMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(ResponseTagMap)}) {}
export class ServiceQuotaExceededException extends Schema.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({message: Schema.String}) {}

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-01-27", uri: "/", method: "POST", sdkId: "Timestream InfluxDB", sigV4ServiceName: "timestream-influxdb", name: "AmazonTimestreamInfluxDB.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-01-27", uri: "/", method: "POST", sdkId: "Timestream InfluxDB", sigV4ServiceName: "timestream-influxdb", name: "AmazonTimestreamInfluxDB.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-01-27", uri: "/", method: "POST", sdkId: "Timestream InfluxDB", sigV4ServiceName: "timestream-influxdb", name: "AmazonTimestreamInfluxDB.TagResource" }, TagResourceRequest, Schema.Struct({}), [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
