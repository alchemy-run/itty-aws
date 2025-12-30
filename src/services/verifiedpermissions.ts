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

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {message: S.optional(S.String), resourceName: S.optional(S.String)}) {};

//# Operations
/**
 * Returns the tags associated with the specified Amazon Verified Permissions resource. In Verified Permissions, policy stores can be tagged.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-12-01", uri: "/", method: "POST", sdkId: "VerifiedPermissions", sigV4ServiceName: "verifiedpermissions", name: "VerifiedPermissions.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from the specified Amazon Verified Permissions resource. In Verified Permissions, policy stores can be tagged.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-12-01", uri: "/", method: "POST", sdkId: "VerifiedPermissions", sigV4ServiceName: "verifiedpermissions", name: "VerifiedPermissions.UntagResource" }, UntagResourceInput, UntagResourceOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns one or more tags (key-value pairs) to the specified Amazon Verified Permissions resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Verified Permissions, policy stores can be tagged.
 * 
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.
 * 
 * You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
 * 
 * You can associate as many as 50 tags with a resource.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2021-12-01", uri: "/", method: "POST", sdkId: "VerifiedPermissions", sigV4ServiceName: "verifiedpermissions", name: "VerifiedPermissions.TagResource" }, TagResourceInput, TagResourceOutput, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, TooManyTagsException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
