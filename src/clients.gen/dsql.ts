import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceOutput = Schema.Struct({tags: Schema.optional(TagMap)});
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String, serviceCode: Schema.String, quotaCode: Schema.String});

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "GET", sdkId: "DSQL", sigV4ServiceName: "dsql", name: "DSQL.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "DSQL", sigV4ServiceName: "dsql", name: "DSQL.UntagResource" }, UntagResourceInput, Schema.Struct({}), [ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/tags/{resourceArn}", method: "POST", sdkId: "DSQL", sigV4ServiceName: "dsql", name: "DSQL.TagResource" }, TagResourceInput, Schema.Struct({}), [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
