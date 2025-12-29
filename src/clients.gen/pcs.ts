import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const TagKeys = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const UntagResourceResponse = Schema.Struct({});
export const RequestTagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: RequestTagMap});
export const TagResourceResponse = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const ResponseTagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(ResponseTagMap)});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String, serviceCode: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)});
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-02-10", uri: "/", method: "POST", sdkId: "PCS", sigV4ServiceName: "pcs", name: "AWSParallelComputingService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-02-10", uri: "/", method: "POST", sdkId: "PCS", sigV4ServiceName: "pcs", name: "AWSParallelComputingService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-02-10", uri: "/", method: "POST", sdkId: "PCS", sigV4ServiceName: "pcs", name: "AWSParallelComputingService.TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException))), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
