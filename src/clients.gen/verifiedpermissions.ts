import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceOutput = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(TagMap)});
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const TagResourceOutput = Schema.Struct({});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)});
export const TooManyTagsException = Schema.Struct({message: Schema.optional(Schema.String), resourceName: Schema.optional(Schema.String)});
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-12-01", uri: "/", method: "POST", sdkId: "VerifiedPermissions", sigV4ServiceName: "verifiedpermissions", name: "VerifiedPermissions.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-12-01", uri: "/", method: "POST", sdkId: "VerifiedPermissions", sigV4ServiceName: "verifiedpermissions", name: "VerifiedPermissions.UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-12-01", uri: "/", method: "POST", sdkId: "VerifiedPermissions", sigV4ServiceName: "verifiedpermissions", name: "VerifiedPermissions.TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("TooManyTagsException", TooManyTagsException))), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
