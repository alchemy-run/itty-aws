import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const DeleteConnectionRequest = Schema.Struct({ConnectionId: Schema.String})
const ForbiddenException = Schema.Struct({})
const GoneException = Schema.Struct({})
const LimitExceededException = Schema.Struct({})
export const DeleteConnection = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/@connections/{ConnectionId}", method: "DELETE", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "DeleteConnection" }, DeleteConnectionRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("GoneException", GoneException), ErrorAnnotation("LimitExceededException", LimitExceededException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const GetConnectionRequest = Schema.Struct({ConnectionId: Schema.String})
const PostToConnectionRequest = Schema.Struct({Data: Body("undefined", StreamBody()), ConnectionId: Schema.String})
const PayloadTooLargeException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const PostToConnection = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/@connections/{ConnectionId}", method: "POST", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "PostToConnection" }, PostToConnectionRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("GoneException", GoneException), ErrorAnnotation("LimitExceededException", LimitExceededException), ErrorAnnotation("PayloadTooLargeException", PayloadTooLargeException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const Identity = Schema.Struct({SourceIp: Schema.String, UserAgent: Schema.String})
const GetConnectionResponse = Schema.Struct({ConnectedAt: Schema.optional(Schema.Date), Identity: Schema.optional(Identity), LastActiveAt: Schema.optional(Schema.Date)})
export const GetConnection = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/@connections/{ConnectionId}", method: "GET", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "GetConnection" }, GetConnectionRequest, GetConnectionResponse, Schema.Union(ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("GoneException", GoneException), ErrorAnnotation("LimitExceededException", LimitExceededException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
