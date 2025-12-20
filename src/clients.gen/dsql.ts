import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String})
const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(TagMap)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "DSQL", sigV4ServiceName: "dsql", name: "ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap})
const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "DSQL", sigV4ServiceName: "dsql", name: "UntagResource" }, UntagResourceInput, Schema.Struct({}), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ServiceQuotaExceededException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String, serviceCode: Schema.String, quotaCode: Schema.String})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "DSQL", sigV4ServiceName: "dsql", name: "TagResource" }, TagResourceInput, Schema.Struct({}), Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
