import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeys = S.Array(S.String);
export class GetAgentTaskResponseUrlRequest extends S.Class<GetAgentTaskResponseUrlRequest>("GetAgentTaskResponseUrlRequest")({agentId: S.String, taskId: S.String}) {}
export class GetMinuteUsageRequest extends S.Class<GetMinuteUsageRequest>("GetMinuteUsageRequest")({month: S.Number, year: S.Number}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeys}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export const TagsMap = S.Record({key: S.String, value: S.String});
export class GetAgentTaskResponseUrlResponse extends S.Class<GetAgentTaskResponseUrlResponse>("GetAgentTaskResponseUrlResponse")({agentId: S.String, taskId: S.String, presignedLogUrl: S.String}) {}
export class GetMinuteUsageResponse extends S.Class<GetMinuteUsageResponse>("GetMinuteUsageResponse")({isReservedMinutesCustomer: S.optional(S.Boolean), totalReservedMinuteAllocation: S.optional(S.Number), upcomingMinutesScheduled: S.optional(S.Number), totalScheduledMinutes: S.optional(S.Number), estimatedMinutesRemaining: S.optional(S.Number)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagsMap)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagsMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}

//# Errors
export class DependencyException extends S.TaggedError<DependencyException>()("DependencyException", {}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};

//# Operations
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-05-23", uri: "/tags/{resourceArn}", method: "GET", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [DependencyException, InvalidParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-05-23", uri: "/tags/{resourceArn}", method: "POST", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.TagResource" }, TagResourceRequest, TagResourceResponse, [DependencyException, InvalidParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-05-23", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [DependencyException, InvalidParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getAgentTaskResponseUrl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-05-23", uri: "/agentResponseUrl/{agentId}/{taskId}", method: "GET", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.GetAgentTaskResponseUrl" }, GetAgentTaskResponseUrlRequest, GetAgentTaskResponseUrlResponse, [DependencyException, InvalidParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getMinuteUsage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-05-23", uri: "/minute-usage", method: "POST", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GroundStation.GetMinuteUsage" }, GetMinuteUsageRequest, GetMinuteUsageResponse, [DependencyException, InvalidParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
