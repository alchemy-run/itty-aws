import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: S.String}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: S.optional(TagMap)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, serviceCode: S.optional(S.String), quotaCode: S.optional(S.String)}) {}
export class TooManyTagsException extends S.Class<TooManyTagsException>("TooManyTagsException")({message: S.optional(S.String), resourceName: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class TooManyTagsExceptionError extends S.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-12-01", uri: "/", method: "POST", sdkId: "VerifiedPermissions", sigV4ServiceName: "verifiedpermissions", name: "VerifiedPermissions.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-12-01", uri: "/", method: "POST", sdkId: "VerifiedPermissions", sigV4ServiceName: "verifiedpermissions", name: "VerifiedPermissions.UntagResource" }, UntagResourceInput, UntagResourceOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-12-01", uri: "/", method: "POST", sdkId: "VerifiedPermissions", sigV4ServiceName: "verifiedpermissions", name: "VerifiedPermissions.TagResource" }, TagResourceInput, TagResourceOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, TooManyTagsExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
