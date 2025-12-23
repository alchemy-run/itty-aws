import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(TagMap)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String, serviceCode: Schema.String, quotaCode: Schema.String});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String});
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "DSQL", sigV4ServiceName: "dsql", name: "DSQL.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "DSQL", sigV4ServiceName: "dsql", name: "DSQL.UntagResource" }, UntagResourceInput, Schema.Struct({}), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "DSQL", sigV4ServiceName: "dsql", name: "DSQL.TagResource" }, TagResourceInput, Schema.Struct({}), Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
