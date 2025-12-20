import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const ListTagsForResourceRequest = Schema.Struct({ResourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList})
const TagMap = Schema.Record({key: Schema.String, value: Schema.String})
const ListTagsForResourceResponse = Schema.Struct({Tags: Schema.optional(TagMap)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "MediaPackageV2", sigV4ServiceName: "mediapackagev2", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, ErrorAnnotation("ValidationException", ValidationException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TagResourceRequest = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "MediaPackageV2", sigV4ServiceName: "mediapackagev2", name: "TagResource" }, TagResourceRequest, Schema.Struct({}), ErrorAnnotation("ValidationException", ValidationException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String), ValidationExceptionType: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "MediaPackageV2", sigV4ServiceName: "mediapackagev2", name: "UntagResource" }, UntagResourceRequest, Schema.Struct({}), ErrorAnnotation("ValidationException", ValidationException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
