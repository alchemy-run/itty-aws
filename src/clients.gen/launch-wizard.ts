import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({resourceArn: S.String}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export const Tags = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({tags: S.optional(Tags)}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({resourceArn: S.String, tags: Tags}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.optional(S.String)}) {}

//# Errors
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "Launch Wizard", sigV4ServiceName: "launchwizard", name: "LaunchWizard.UntagResource" }, UntagResourceInput, UntagResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "GET", sdkId: "Launch Wizard", sigV4ServiceName: "launchwizard", name: "LaunchWizard.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "POST", sdkId: "Launch Wizard", sigV4ServiceName: "launchwizard", name: "LaunchWizard.TagResource" }, TagResourceInput, TagResourceOutput, [InternalServerExceptionError, ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
