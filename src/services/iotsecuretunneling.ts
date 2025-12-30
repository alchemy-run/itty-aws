import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class CloseTunnelRequest extends S.Class<CloseTunnelRequest>("CloseTunnelRequest")({tunnelId: S.String, delete: S.optional(S.Boolean)}) {}
export class CloseTunnelResponse extends S.Class<CloseTunnelResponse>("CloseTunnelResponse")({}) {}
export class DescribeTunnelRequest extends S.Class<DescribeTunnelRequest>("DescribeTunnelRequest")({tunnelId: S.String}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ListTunnelsRequest extends S.Class<ListTunnelsRequest>("ListTunnelsRequest")({thingName: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export const ServiceList = S.Array(S.String);
export class DestinationConfig extends S.Class<DestinationConfig>("DestinationConfig")({thingName: S.optional(S.String), services: ServiceList}) {}
export class RotateTunnelAccessTokenRequest extends S.Class<RotateTunnelAccessTokenRequest>("RotateTunnelAccessTokenRequest")({tunnelId: S.String, clientMode: S.String, destinationConfig: S.optional(DestinationConfig)}) {}
export class Tag extends S.Class<Tag>("Tag")({key: S.String, value: S.String}) {}
export const TagList = S.Array(Tag);
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class TimeoutConfig extends S.Class<TimeoutConfig>("TimeoutConfig")({maxLifetimeTimeoutMinutes: S.optional(S.Number)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagList)}) {}
export class OpenTunnelRequest extends S.Class<OpenTunnelRequest>("OpenTunnelRequest")({description: S.optional(S.String), tags: S.optional(TagList), destinationConfig: S.optional(DestinationConfig), timeoutConfig: S.optional(TimeoutConfig)}) {}
export class RotateTunnelAccessTokenResponse extends S.Class<RotateTunnelAccessTokenResponse>("RotateTunnelAccessTokenResponse")({tunnelArn: S.optional(S.String), sourceAccessToken: S.optional(S.String), destinationAccessToken: S.optional(S.String)}) {}
export class TunnelSummary extends S.Class<TunnelSummary>("TunnelSummary")({tunnelId: S.optional(S.String), tunnelArn: S.optional(S.String), status: S.optional(S.String), description: S.optional(S.String), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date)}) {}
export const TunnelSummaryList = S.Array(TunnelSummary);
export class ListTunnelsResponse extends S.Class<ListTunnelsResponse>("ListTunnelsResponse")({tunnelSummaries: S.optional(TunnelSummaryList), nextToken: S.optional(S.String)}) {}
export class OpenTunnelResponse extends S.Class<OpenTunnelResponse>("OpenTunnelResponse")({tunnelId: S.optional(S.String), tunnelArn: S.optional(S.String), sourceAccessToken: S.optional(S.String), destinationAccessToken: S.optional(S.String)}) {}
export class ConnectionState extends S.Class<ConnectionState>("ConnectionState")({status: S.optional(S.String), lastUpdatedAt: S.optional(S.Date)}) {}
export class Tunnel extends S.Class<Tunnel>("Tunnel")({tunnelId: S.optional(S.String), tunnelArn: S.optional(S.String), status: S.optional(S.String), sourceConnectionState: S.optional(ConnectionState), destinationConnectionState: S.optional(ConnectionState), description: S.optional(S.String), destinationConfig: S.optional(DestinationConfig), timeoutConfig: S.optional(TimeoutConfig), tags: S.optional(TagList), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date)}) {}
export class DescribeTunnelResponse extends S.Class<DescribeTunnelResponse>("DescribeTunnelResponse")({tunnel: S.optional(Tunnel)}) {}

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * A resource tag.
 */export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-05", uri: "/tags", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.TagResource" }, TagResourceRequest, TagResourceResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from a resource.
 */export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-05", uri: "/untag", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Closes a tunnel identified by the unique tunnel id. When a `CloseTunnel`
 * request is received, we close the WebSocket connections between the client and proxy
 * server so no data can be transmitted.
 * 
 * 
 * Requires permission to access the CloseTunnel action.
 */export const closeTunnel = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-05", uri: "/tunnels/{tunnelId}", method: "DELETE", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.CloseTunnel" }, CloseTunnelRequest, CloseTunnelResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for the specified resource.
 */export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-05", uri: "/tags", method: "GET", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Revokes the current client access token (CAT) and returns new CAT for clients to
 * use when reconnecting to secure tunneling to access the same tunnel.
 * 
 * 
 * Requires permission to access the RotateTunnelAccessToken action.
 * 
 * 
 * 
 * 
 * Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel
 * duration is 12 hours and the tunnel has already been open for 4 hours. When you
 * rotate the access tokens, the new tokens that are generated can only be used for the
 * remaining 8 hours.
 */export const rotateTunnelAccessToken = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-05", uri: "/tunnel/{tunnelId}/rotate", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.RotateTunnelAccessToken" }, RotateTunnelAccessTokenRequest, RotateTunnelAccessTokenResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in
 * descending order, newer tunnels will be listed before older tunnels.
 * 
 * 
 * Requires permission to access the ListTunnels action.
 */export const listTunnels = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-05", uri: "/tunnels", method: "GET", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.ListTunnels" }, ListTunnelsRequest, ListTunnelsResponse, []), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a tunnel identified by the unique tunnel id.
 * 
 * 
 * Requires permission to access the DescribeTunnel action.
 */export const describeTunnel = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-05", uri: "/tunnels/{tunnelId}", method: "GET", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.DescribeTunnel" }, DescribeTunnelRequest, DescribeTunnelResponse, [ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new tunnel, and returns two client access tokens for clients to use to
 * connect to the IoT Secure Tunneling proxy server.
 * 
 * 
 * Requires permission to access the OpenTunnel action.
 */export const openTunnel = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-10-05", uri: "/tunnels", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "IoTSecuredTunneling.OpenTunnel" }, OpenTunnelRequest, OpenTunnelResponse, [LimitExceededException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
