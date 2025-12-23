import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const TagResourceOutput = Schema.Struct({});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(Tags)});
export const UntagResourceOutput = Schema.Struct({});
export const Tags = Schema.Record({key: Schema.String, value: Schema.String});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const TagKeyList = Schema.Array(Schema.String);
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: Tags});
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String});
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Launch Wizard", sigV4ServiceName: "launchwizard", name: "LaunchWizard.UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "Launch Wizard", sigV4ServiceName: "launchwizard", name: "LaunchWizard.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "Launch Wizard", sigV4ServiceName: "launchwizard", name: "LaunchWizard.TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
