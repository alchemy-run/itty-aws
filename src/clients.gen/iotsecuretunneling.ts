import * as Schema from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = Schema.Array(Schema.String);
export class CloseTunnelRequest extends Schema.Class<CloseTunnelRequest>("CloseTunnelRequest")({tunnelId: Schema.String, delete: Schema.optional(Schema.Boolean)}) {}
export class CloseTunnelResponse extends Schema.Class<CloseTunnelResponse>("CloseTunnelResponse")({}) {}
export class DescribeTunnelRequest extends Schema.Class<DescribeTunnelRequest>("DescribeTunnelRequest")({tunnelId: Schema.String}) {}
export class ListTagsForResourceRequest extends Schema.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: Schema.String}) {}
export class ListTunnelsRequest extends Schema.Class<ListTunnelsRequest>("ListTunnelsRequest")({thingName: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export const ServiceList = Schema.Array(Schema.String);
export class DestinationConfig extends Schema.Class<DestinationConfig>("DestinationConfig")({thingName: Schema.optional(Schema.String), services: ServiceList}) {}
export class RotateTunnelAccessTokenRequest extends Schema.Class<RotateTunnelAccessTokenRequest>("RotateTunnelAccessTokenRequest")({tunnelId: Schema.String, clientMode: Schema.String, destinationConfig: Schema.optional(DestinationConfig)}) {}
export class Tag extends Schema.Class<Tag>("Tag")({key: Schema.String, value: Schema.String}) {}
export const TagList = Schema.Array(Tag);
export class TagResourceRequest extends Schema.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: Schema.String, tags: TagList}) {}
export class TagResourceResponse extends Schema.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends Schema.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: Schema.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends Schema.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class TimeoutConfig extends Schema.Class<TimeoutConfig>("TimeoutConfig")({maxLifetimeTimeoutMinutes: Schema.optional(Schema.Number)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class ListTagsForResourceResponse extends Schema.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: Schema.optional(TagList)}) {}
export class OpenTunnelRequest extends Schema.Class<OpenTunnelRequest>("OpenTunnelRequest")({description: Schema.optional(Schema.String), tags: Schema.optional(TagList), destinationConfig: Schema.optional(DestinationConfig), timeoutConfig: Schema.optional(TimeoutConfig)}) {}
export class RotateTunnelAccessTokenResponse extends Schema.Class<RotateTunnelAccessTokenResponse>("RotateTunnelAccessTokenResponse")({tunnelArn: Schema.optional(Schema.String), sourceAccessToken: Schema.optional(Schema.String), destinationAccessToken: Schema.optional(Schema.String)}) {}
export class TunnelSummary extends Schema.Class<TunnelSummary>("TunnelSummary")({tunnelId: Schema.optional(Schema.String), tunnelArn: Schema.optional(Schema.String), status: Schema.optional(Schema.String), description: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date), lastUpdatedAt: Schema.optional(Schema.Date)}) {}
export const TunnelSummaryList = Schema.Array(TunnelSummary);
export class ListTunnelsResponse extends Schema.Class<ListTunnelsResponse>("ListTunnelsResponse")({tunnelSummaries: Schema.optional(TunnelSummaryList), nextToken: Schema.optional(Schema.String)}) {}
export class OpenTunnelResponse extends Schema.Class<OpenTunnelResponse>("OpenTunnelResponse")({tunnelId: Schema.optional(Schema.String), tunnelArn: Schema.optional(Schema.String), sourceAccessToken: Schema.optional(Schema.String), destinationAccessToken: Schema.optional(Schema.String)}) {}
export class ConnectionState extends Schema.Class<ConnectionState>("ConnectionState")({status: Schema.optional(Schema.String), lastUpdatedAt: Schema.optional(Schema.Date)}) {}
export class Tunnel extends Schema.Class<Tunnel>("Tunnel")({tunnelId: Schema.optional(Schema.String), tunnelArn: Schema.optional(Schema.String), status: Schema.optional(Schema.String), sourceConnectionState: Schema.optional(ConnectionState), destinationConnectionState: Schema.optional(ConnectionState), description: Schema.optional(Schema.String), destinationConfig: Schema.optional(DestinationConfig), timeoutConfig: Schema.optional(TimeoutConfig), tags: Schema.optional(TagList), createdAt: Schema.optional(Schema.Date), lastUpdatedAt: Schema.optional(Schema.Date)}) {}
export class DescribeTunnelResponse extends Schema.Class<DescribeTunnelResponse>("DescribeTunnelResponse")({tunnel: Schema.optional(Tunnel)}) {}
export class LimitExceededException extends Schema.Class<LimitExceededException>("LimitExceededException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};

//# Operations
export const tagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-05", uri: "/tags", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-05", uri: "/untag", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const closeTunnel = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-05", uri: "/tunnels/{tunnelId}", method: "DELETE", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.CloseTunnel" }, CloseTunnelRequest, CloseTunnelResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-05", uri: "/tags", method: "GET", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const rotateTunnelAccessToken = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-05", uri: "/tunnel/{tunnelId}/rotate", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.RotateTunnelAccessToken" }, RotateTunnelAccessTokenRequest, RotateTunnelAccessTokenResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listTunnels = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-05", uri: "/tunnels", method: "GET", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.ListTunnels" }, ListTunnelsRequest, ListTunnelsResponse, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeTunnel = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-05", uri: "/tunnels/{tunnelId}", method: "GET", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.DescribeTunnel" }, DescribeTunnelRequest, DescribeTunnelResponse, [ResourceNotFoundExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const openTunnel = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-10-05", uri: "/tunnels", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.OpenTunnel" }, OpenTunnelRequest, OpenTunnelResponse, [LimitExceededExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
