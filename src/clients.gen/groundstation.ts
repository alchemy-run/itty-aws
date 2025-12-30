import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeys = Schema.Array(Schema.String);
export const GetAgentTaskResponseUrlRequest = Schema.Struct({agentId: Schema.String, taskId: Schema.String});
export const GetMinuteUsageRequest = Schema.Struct({month: Schema.Number, year: Schema.Number});
export const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const UntagResourceResponse = Schema.Struct({});
export const TagsMap = Schema.Record({key: Schema.String, value: Schema.String});
export const GetAgentTaskResponseUrlResponse = Schema.Struct({agentId: Schema.String, taskId: Schema.String, presignedLogUrl: Schema.String});
export const GetMinuteUsageResponse = Schema.Struct({isReservedMinutesCustomer: Schema.optional(Schema.Boolean), totalReservedMinuteAllocation: Schema.optional(Schema.Number), upcomingMinutesScheduled: Schema.optional(Schema.Number), totalScheduledMinutes: Schema.optional(Schema.Number), estimatedMinutesRemaining: Schema.optional(Schema.Number)});
export const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)});
export const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap});
export const TagResourceResponse = Schema.Struct({});
export const DependencyException = Schema.Struct({message: Schema.optional(Schema.String), parameterName: Schema.optional(Schema.String)});
export const InvalidParameterException = Schema.Struct({message: Schema.optional(Schema.String), parameterName: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class DependencyExceptionError extends Schema.TaggedError<DependencyExceptionError>()("DependencyException", DependencyException) {};
export class InvalidParameterExceptionError extends Schema.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/tags/{resourceArn}", method: "GET", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/tags/{resourceArn}", method: "POST", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.TagResource" }, TagResourceRequest, TagResourceResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getAgentTaskResponseUrl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/agentResponseUrl/{agentId}/{taskId}", method: "GET", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.GetAgentTaskResponseUrl" }, GetAgentTaskResponseUrlRequest, GetAgentTaskResponseUrlResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getMinuteUsage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-05-23", uri: "/minute-usage", method: "POST", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.GetMinuteUsage" }, GetMinuteUsageRequest, GetMinuteUsageResponse, [DependencyExceptionError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
