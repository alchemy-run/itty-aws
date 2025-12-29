import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const DeleteConnectionRequest = Schema.Struct({ConnectionId: Schema.String});
export const ForbiddenException = Schema.Struct({});
export const GoneException = Schema.Struct({});
export const LimitExceededException = Schema.Struct({});
export const GetConnectionRequest = Schema.Struct({ConnectionId: Schema.String});
export const PostToConnectionRequest = Schema.Struct({Data: Body("undefined", StreamBody()), ConnectionId: Schema.String});
export const PayloadTooLargeException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const Identity = Schema.Struct({SourceIp: Schema.String, UserAgent: Schema.String});
export const GetConnectionResponse = Schema.Struct({ConnectedAt: Schema.optional(Schema.Date), Identity: Schema.optional(Identity), LastActiveAt: Schema.optional(Schema.Date)});
export const DeleteConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "DELETE", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.DeleteConnection" }, DeleteConnectionRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("GoneException", GoneException), ErrorAnnotation("LimitExceededException", LimitExceededException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const PostToConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "POST", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.PostToConnection" }, PostToConnectionRequest, Schema.Struct({}), Schema.Union(ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("GoneException", GoneException), ErrorAnnotation("LimitExceededException", LimitExceededException), ErrorAnnotation("PayloadTooLargeException", PayloadTooLargeException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const GetConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "GET", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.GetConnection" }, GetConnectionRequest, GetConnectionResponse, Schema.Union(ErrorAnnotation("ForbiddenException", ForbiddenException), ErrorAnnotation("GoneException", GoneException), ErrorAnnotation("LimitExceededException", LimitExceededException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
