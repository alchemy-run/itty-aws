import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeys = Schema.Array(Schema.String)
const GetAgentTaskResponseUrlRequest = Schema.Struct({agentId: Schema.String, taskId: Schema.String})
const GetMinuteUsageRequest = Schema.Struct({month: Schema.Number, year: Schema.Number})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys})
const UntagResourceResponse = Schema.Struct({})
const TagsMap = Schema.Record({key: Schema.String, value: Schema.String})
const GetAgentTaskResponseUrlResponse = Schema.Struct({agentId: Schema.String, taskId: Schema.String, presignedLogUrl: Schema.String})
const GetMinuteUsageResponse = Schema.Struct({isReservedMinutesCustomer: Schema.optional(Schema.Boolean), totalReservedMinuteAllocation: Schema.optional(Schema.Number), upcomingMinutesScheduled: Schema.optional(Schema.Number), totalScheduledMinutes: Schema.optional(Schema.Number), estimatedMinutesRemaining: Schema.optional(Schema.Number)})
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagsMap)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "GET", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, Schema.Union(ErrorAnnotation("DependencyException", DependencyException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagsMap})
const TagResourceResponse = Schema.Struct({})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "POST", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "TagResource" }, TagResourceRequest, TagResourceResponse, Schema.Union(ErrorAnnotation("DependencyException", DependencyException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const DependencyException = Schema.Struct({message: Schema.optional(Schema.String), parameterName: Schema.optional(Schema.String)})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, Schema.Union(ErrorAnnotation("DependencyException", DependencyException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const InvalidParameterException = Schema.Struct({message: Schema.optional(Schema.String), parameterName: Schema.optional(Schema.String)})
export const GetAgentTaskResponseUrl = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/agentResponseUrl/{agentId}/{taskId}", method: "GET", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GetAgentTaskResponseUrl" }, GetAgentTaskResponseUrlRequest, GetAgentTaskResponseUrlResponse, Schema.Union(ErrorAnnotation("DependencyException", DependencyException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const GetMinuteUsage = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/minute-usage", method: "POST", sdkId: "GroundStation", sigV4ServiceName: "groundstation", name: "GetMinuteUsage" }, GetMinuteUsageRequest, GetMinuteUsageResponse, Schema.Union(ErrorAnnotation("DependencyException", DependencyException), ErrorAnnotation("InvalidParameterException", InvalidParameterException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
