import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const TagResourceOutput = Schema.Struct({});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ListTagsForResourceOutput = Schema.Struct({tags: TagMap});
export const UntagResourceOutput = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const TagKeys = Schema.Array(Schema.String);
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String});
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v1/tags/{resourceArn}", method: "DELETE", sdkId: "Security IR", sigV4ServiceName: "security-ir", name: "SecurityIncidentResponse.UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v1/tags/{resourceArn}", method: "GET", sdkId: "Security IR", sigV4ServiceName: "security-ir", name: "SecurityIncidentResponse.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/v1/tags/{resourceArn}", method: "POST", sdkId: "Security IR", sigV4ServiceName: "security-ir", name: "SecurityIncidentResponse.TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
