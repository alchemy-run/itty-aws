import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const TagResourceOutput = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const TooManyTagsException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ListTagsForResourceOutput = Schema.Struct({Tags: Schema.optional(TagMap)});
export const UntagResourceOutput = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const UntagResourceInput = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeyList});
export const TagKeyList = Schema.Array(Schema.String);
export const TagResourceInput = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap});
export const ListTagsForResourceInput = Schema.Struct({ResourceArn: Schema.String});
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "SimSpaceWeaver.UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "SimSpaceWeaver.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "SimSpaceWeaver", sigV4ServiceName: "simspaceweaver", name: "SimSpaceWeaver.TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("TooManyTagsException", TooManyTagsException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
