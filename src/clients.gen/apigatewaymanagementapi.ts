import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteConnectionRequest extends S.Class<DeleteConnectionRequest>("DeleteConnectionRequest")({ConnectionId: S.String}) {}
export class ForbiddenException extends S.Class<ForbiddenException>("ForbiddenException")({}) {}
export class GoneException extends S.Class<GoneException>("GoneException")({}) {}
export class LimitExceededException extends S.Class<LimitExceededException>("LimitExceededException")({}) {}
export class GetConnectionRequest extends S.Class<GetConnectionRequest>("GetConnectionRequest")({ConnectionId: S.String}) {}
export class PostToConnectionRequest extends S.Class<PostToConnectionRequest>("PostToConnectionRequest")({Data: H.Body("undefined", H.StreamBody()), ConnectionId: S.String}) {}
export class PayloadTooLargeException extends S.Class<PayloadTooLargeException>("PayloadTooLargeException")({Message: S.optional(S.String)}) {}
export class Identity extends S.Class<Identity>("Identity")({SourceIp: S.String, UserAgent: S.String}) {}
export class GetConnectionResponse extends S.Class<GetConnectionResponse>("GetConnectionResponse")({ConnectedAt: S.optional(S.Date), Identity: S.optional(Identity), LastActiveAt: S.optional(S.Date)}) {}

//# Errors
export class ForbiddenExceptionError extends S.TaggedError<ForbiddenExceptionError>()("ForbiddenException", ForbiddenException.fields) {};
export class GoneExceptionError extends S.TaggedError<GoneExceptionError>()("GoneException", GoneException.fields) {};
export class LimitExceededExceptionError extends S.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};
export class PayloadTooLargeExceptionError extends S.TaggedError<PayloadTooLargeExceptionError>()("PayloadTooLargeException", PayloadTooLargeException.fields) {};

//# Operations
export const deleteConnection = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "DELETE", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.DeleteConnection" }, DeleteConnectionRequest, S.Struct({}), [ForbiddenExceptionError, GoneExceptionError, LimitExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const postToConnection = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "POST", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.PostToConnection" }, PostToConnectionRequest, S.Struct({}), [ForbiddenExceptionError, GoneExceptionError, LimitExceededExceptionError, PayloadTooLargeExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getConnection = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "GET", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.GetConnection" }, GetConnectionRequest, GetConnectionResponse, [ForbiddenExceptionError, GoneExceptionError, LimitExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
