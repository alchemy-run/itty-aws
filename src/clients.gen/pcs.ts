import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const RequestTagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: RequestTagMap});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const ResponseTagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(ResponseTagMap)});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String, serviceCode: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String)});

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};

//# Operations
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-02-10", uri: "/", method: "POST", sdkId: "PCS", sigV4ServiceName: "pcs", name: "AWSParallelComputingService.UntagResource" }, UntagResourceRequest, Schema.Struct({}), [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-02-10", uri: "/", method: "POST", sdkId: "PCS", sigV4ServiceName: "pcs", name: "AWSParallelComputingService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2023-02-10", uri: "/", method: "POST", sdkId: "PCS", sigV4ServiceName: "pcs", name: "AWSParallelComputingService.TagResource" }, TagResourceRequest, Schema.Struct({}), [ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
