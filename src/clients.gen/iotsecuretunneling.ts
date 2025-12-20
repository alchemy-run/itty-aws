import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const TagKeyList = Schema.Array(Schema.String)
const CloseTunnelRequest = Schema.Struct({tunnelId: Schema.String, delete: Schema.optional(Schema.Boolean)})
const CloseTunnelResponse = Schema.Struct({})
const DescribeTunnelRequest = Schema.Struct({tunnelId: Schema.String})
const ListTagsForResourceRequest = Schema.Struct({resourceArn: Schema.String})
const ListTunnelsRequest = Schema.Struct({thingName: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)})
const RotateTunnelAccessTokenRequest = Schema.Struct({tunnelId: Schema.String, clientMode: Schema.String, destinationConfig: Schema.optional(DestinationConfig)})
const TagResourceRequest = Schema.Struct({resourceArn: Schema.String, tags: TagList})
const TagResourceResponse = Schema.Struct({})
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "TagResource" }, TagResourceRequest, TagResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const UntagResourceRequest = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeyList})
const UntagResourceResponse = Schema.Struct({})
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/untag", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "UntagResource" }, UntagResourceRequest, UntagResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ServiceList = Schema.Array(Schema.String)
const Tag = Schema.Struct({key: Schema.String, value: Schema.String})
const TagList = Schema.Array(Tag)
const DestinationConfig = Schema.Struct({thingName: Schema.optional(Schema.String), services: ServiceList})
const TimeoutConfig = Schema.Struct({maxLifetimeTimeoutMinutes: Schema.optional(Schema.Number)})
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const CloseTunnel = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tunnels/{tunnelId}", method: "DELETE", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "CloseTunnel" }, CloseTunnelRequest, CloseTunnelResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ListTagsForResourceResponse = Schema.Struct({tags: Schema.optional(TagList)})
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags", method: "GET", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const OpenTunnelRequest = Schema.Struct({description: Schema.optional(Schema.String), tags: Schema.optional(TagList), destinationConfig: Schema.optional(DestinationConfig), timeoutConfig: Schema.optional(TimeoutConfig)})
const RotateTunnelAccessTokenResponse = Schema.Struct({tunnelArn: Schema.optional(Schema.String), sourceAccessToken: Schema.optional(Schema.String), destinationAccessToken: Schema.optional(Schema.String)})
export const RotateTunnelAccessToken = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tunnel/{tunnelId}/rotate", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "RotateTunnelAccessToken" }, RotateTunnelAccessTokenRequest, RotateTunnelAccessTokenResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const TunnelSummary = Schema.Struct({tunnelId: Schema.optional(Schema.String), tunnelArn: Schema.optional(Schema.String), status: Schema.optional(Schema.String), description: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date), lastUpdatedAt: Schema.optional(Schema.Date)})
const TunnelSummaryList = Schema.Array(TunnelSummary)
const ListTunnelsResponse = Schema.Struct({tunnelSummaries: Schema.optional(TunnelSummaryList), nextToken: Schema.optional(Schema.String)})
export const ListTunnels = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tunnels", method: "GET", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "ListTunnels" }, ListTunnelsRequest, ListTunnelsResponse, Schema.Void), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const OpenTunnelResponse = Schema.Struct({tunnelId: Schema.optional(Schema.String), tunnelArn: Schema.optional(Schema.String), sourceAccessToken: Schema.optional(Schema.String), destinationAccessToken: Schema.optional(Schema.String)})
const ConnectionState = Schema.Struct({status: Schema.optional(Schema.String), lastUpdatedAt: Schema.optional(Schema.Date)})
const Tunnel = Schema.Struct({tunnelId: Schema.optional(Schema.String), tunnelArn: Schema.optional(Schema.String), status: Schema.optional(Schema.String), sourceConnectionState: Schema.optional(ConnectionState), destinationConnectionState: Schema.optional(ConnectionState), description: Schema.optional(Schema.String), destinationConfig: Schema.optional(DestinationConfig), timeoutConfig: Schema.optional(TimeoutConfig), tags: Schema.optional(TagList), createdAt: Schema.optional(Schema.Date), lastUpdatedAt: Schema.optional(Schema.Date)})
const DescribeTunnelResponse = Schema.Struct({tunnel: Schema.optional(Tunnel)})
export const DescribeTunnel = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tunnels/{tunnelId}", method: "GET", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "DescribeTunnel" }, DescribeTunnelRequest, DescribeTunnelResponse, ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const LimitExceededException = Schema.Struct({message: Schema.optional(Schema.String)})
export const OpenTunnel = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tunnels", method: "POST", sdkId: "IoTSecureTunneling", sigV4ServiceName: "IoTSecuredTunneling", name: "OpenTunnel" }, OpenTunnelRequest, OpenTunnelResponse, ErrorAnnotation("LimitExceededException", LimitExceededException)), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
