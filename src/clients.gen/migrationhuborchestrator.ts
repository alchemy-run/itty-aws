import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const UntagResourceResponse = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagMap)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const TagResourceResponse = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const ValidationException = Schema.Struct({message: Schema.String});

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-28", uri: "/tags/{resourceArn}", method: "POST", sdkId: "MigrationHubOrchestrator", sigV4ServiceName: "migrationhub-orchestrator", name: "AWSMigrationHubOrchestrator.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-28", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "MigrationHubOrchestrator", sigV4ServiceName: "migrationhub-orchestrator", name: "AWSMigrationHubOrchestrator.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-08-28", uri: "/tags/{resourceArn}", method: "GET", sdkId: "MigrationHubOrchestrator", sigV4ServiceName: "migrationhub-orchestrator", name: "AWSMigrationHubOrchestrator.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
