import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class InitializeServiceRequest extends S.Class<InitializeServiceRequest>("InitializeServiceRequest")({}) {}
export class InitializeServiceResponse extends S.Class<InitializeServiceResponse>("InitializeServiceResponse")({}) {}
export const TagKeys = S.Array(S.String);
export class ListManagedAccountsRequest extends S.Class<ListManagedAccountsRequest>("ListManagedAccountsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export const TagsMap = S.Record({key: S.String, value: S.String});
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagsMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagsMap}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.optional(S.String), message: S.optional(S.String)}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ManagedAccount extends S.Class<ManagedAccount>("ManagedAccount")({accountId: S.optional(S.String)}) {}
export const ManagedAccounts = S.Array(ManagedAccount);
export class ListManagedAccountsResponse extends S.Class<ListManagedAccountsResponse>("ListManagedAccountsResponse")({items: ManagedAccounts, nextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.optional(S.String), code: S.optional(S.String)}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class UninitializedAccountException extends S.TaggedError<UninitializedAccountException>()("UninitializedAccountException", {message: S.optional(S.String), code: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes the specified set of tags from the specified set of Application Migration Service resources.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.UntagResource" }, UntagResourceRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initialize Application Migration Service.
 */export const initializeService = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/InitializeService", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.InitializeService" }, InitializeServiceRequest, InitializeServiceResponse, [AccessDeniedException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all tags for your Application Migration Service resources.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "GET", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/tags/{resourceArn}", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.TagResource" }, TagResourceRequest, S.Struct({}), [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List Managed Accounts.
 */export const listManagedAccounts = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-02-26", uri: "/ListManagedAccounts", method: "POST", sdkId: "mgn", sigV4ServiceName: "mgn", name: "ApplicationMigrationService.ListManagedAccounts" }, ListManagedAccountsRequest, ListManagedAccountsResponse, [UninitializedAccountException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
