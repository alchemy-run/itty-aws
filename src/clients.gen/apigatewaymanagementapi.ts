import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const DeleteConnectionRequest = Schema.Struct({ConnectionId: Schema.String});
export const ForbiddenException = Schema.Struct({});
export const GoneException = Schema.Struct({});
export const LimitExceededException = Schema.Struct({});
export const GetConnectionRequest = Schema.Struct({ConnectionId: Schema.String});
export const PostToConnectionRequest = Schema.Struct({Data: Body("undefined", StreamBody()), ConnectionId: Schema.String});
export const PayloadTooLargeException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const Identity = Schema.Struct({SourceIp: Schema.String, UserAgent: Schema.String});
export const GetConnectionResponse = Schema.Struct({ConnectedAt: Schema.optional(Schema.Date), Identity: Schema.optional(Identity), LastActiveAt: Schema.optional(Schema.Date)});

//# Errors
export class ForbiddenExceptionError extends Schema.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException) {};
export class GoneExceptionError extends Schema.TaggedError<GoneExceptionError>()("GoneException", GoneException) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException) {};
export class PayloadTooLargeExceptionError extends Schema.TaggedError<PayloadTooLargeExceptionError>()("PayloadTooLargeException", PayloadTooLargeException) {};

//# Operations
export const deleteConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "DELETE", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.DeleteConnection" }, DeleteConnectionRequest, Schema.Struct({}), [ForbiddenExceptionError, GoneExceptionError, LimitExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const postToConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "POST", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.PostToConnection" }, PostToConnectionRequest, Schema.Struct({}), [ForbiddenExceptionError, GoneExceptionError, LimitExceededExceptionError, PayloadTooLargeExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getConnection = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "GET", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.GetConnection" }, GetConnectionRequest, GetConnectionResponse, [ForbiddenExceptionError, GoneExceptionError, LimitExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
