import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export class GetAgentTaskResponseUrlRequest extends Schema.Class<GetAgentTaskResponseUrlRequest>("GetAgentTaskResponseUrlRequest")({agentId: Schema.String, taskId: Schema.String}) {}
export class GetMinuteUsageRequest extends Schema.Class<GetMinuteUsageRequest>("GetMinuteUsageRequest")({month: Schema.Number, year: Schema.Number}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export class GetAgentTaskResponseUrlResponse extends Schema.Class<GetAgentTaskResponseUrlResponse>("GetAgentTaskResponseUrlResponse")({agentId: Schema.String, taskId: Schema.String, presignedLogUrl: Schema.String}) {}
export class GetMinuteUsageResponse extends Schema.Class<GetMinuteUsageResponse>("GetMinuteUsageResponse")({isReservedMinutesCustomer: Schema.optional(Schema.Boolean), totalReservedMinuteAllocation: Schema.optional(Schema.Number), upcomingMinutesScheduled: Schema.optional(Schema.Number), totalScheduledMinutes: Schema.optional(Schema.Number), estimatedMinutesRemaining: Schema.optional(Schema.Number)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagsMap)}) {}
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagsMap}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class DependencyException extends Schema.Class<DependencyException>("DependencyException")({message: Schema.optional(Schema.String), parameterName: Schema.optional(Schema.String)}) {}
export class InvalidParameterException extends Schema.Class<InvalidParameterException>("InvalidParameterException")({message: Schema.optional(Schema.String), parameterName: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class DependencyExceptionError extends Schema.TaggedError<DependencyExceptionError>()("DependencyException", DependencyException.fields) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/tags/{resourceArn}", method: "GET", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/tags/{resourceArn}", method: "POST", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.TagResource" }, TagResourceRequest, TagResourceResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getAgentTaskResponseUrl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/agentResponseUrl/{agentId}/{taskId}", method: "GET", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.GetAgentTaskResponseUrl" }, GetAgentTaskResponseUrlRequest, GetAgentTaskResponseUrlResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getMinuteUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/minute-usage", method: "POST", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.GetMinuteUsage" }, GetMinuteUsageRequest, GetMinuteUsageResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
