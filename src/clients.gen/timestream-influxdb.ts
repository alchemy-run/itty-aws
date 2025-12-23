import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ResponseTagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String});
export const RequestTagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(ResponseTagMap)});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const TagKeys = Schema.Array(Schema.String);
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: RequestTagMap});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/", method: "POST", sdkId: "Timestream InfluxDB", sigV4ServiceName: "timestream-influxdb", name: "AmazonTimestreamInfluxDB.UntagResource" }, UntagResourceRequest, Schema.Struct({}), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/", method: "POST", sdkId: "Timestream InfluxDB", sigV4ServiceName: "timestream-influxdb", name: "AmazonTimestreamInfluxDB.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/", method: "POST", sdkId: "Timestream InfluxDB", sigV4ServiceName: "timestream-influxdb", name: "AmazonTimestreamInfluxDB.TagResource" }, TagResourceRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException))), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
