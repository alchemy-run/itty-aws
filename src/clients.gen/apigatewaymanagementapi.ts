import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class DeleteConnectionRequest extends Schema.Class<DeleteConnectionRequest>("DeleteConnectionRequest")({ConnectionId: Schema.String}) {}
export class ForbiddenException extends Schema.Class<ForbiddenException>("ForbiddenException")({}) {}
export class GoneException extends Schema.Class<GoneException>("GoneException")({}) {}
export class LimitExceededException extends Schema.Class<LimitExceededException>("LimitExceededException")({}) {}
export class GetConnectionRequest extends Schema.Class<GetConnectionRequest>("GetConnectionRequest")({ConnectionId: Schema.String}) {}
export class PostToConnectionRequest extends Schema.Class<PostToConnectionRequest>("PostToConnectionRequest")({Data: Body("undefined", StreamBody()), ConnectionId: Schema.String}) {}
export class PayloadTooLargeException extends Schema.Class<PayloadTooLargeException>("PayloadTooLargeException")({Message: Schema.optional(Schema.String)}) {}
export class Identity extends Schema.Class<Identity>("Identity")({SourceIp: Schema.String, UserAgent: Schema.String}) {}
export class GetConnectionResponse extends Schema.Class<GetConnectionResponse>("GetConnectionResponse")({ConnectedAt: Schema.optional(Schema.Date), Identity: Schema.optional(Identity), LastActiveAt: Schema.optional(Schema.Date)}) {}

//# Errors
export class ForbiddenExceptionError extends Schema.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException.fields) {};
export class GoneExceptionError extends Schema.TaggedError<GoneExceptionError>()("GoneException", GoneException.fields) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};
export class PayloadTooLargeExceptionError extends Schema.TaggedError<PayloadTooLargeExceptionError>()("PayloadTooLargeException", PayloadTooLargeException.fields) {};

//# Operations
export const deleteConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "DELETE", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.DeleteConnection" }, DeleteConnectionRequest, Schema.Struct({}), [ForbiddenExceptionError, GoneExceptionError, LimitExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const postToConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "POST", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.PostToConnection" }, PostToConnectionRequest, Schema.Struct({}), [ForbiddenExceptionError, GoneExceptionError, LimitExceededExceptionError, PayloadTooLargeExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "GET", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.GetConnection" }, GetConnectionRequest, GetConnectionResponse, [ForbiddenExceptionError, GoneExceptionError, LimitExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
