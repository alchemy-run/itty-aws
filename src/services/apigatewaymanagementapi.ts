import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class DeleteConnectionRequest extends S.Class<DeleteConnectionRequest>("DeleteConnectionRequest")({ConnectionId: S.String}) {}
export class GetConnectionRequest extends S.Class<GetConnectionRequest>("GetConnectionRequest")({ConnectionId: S.String}) {}
export class PostToConnectionRequest extends S.Class<PostToConnectionRequest>("PostToConnectionRequest")({Data: H.Body("undefined", H.StreamBody()), ConnectionId: S.String}) {}
export class Identity extends S.Class<Identity>("Identity")({SourceIp: S.String, UserAgent: S.String}) {}
export class GetConnectionResponse extends S.Class<GetConnectionResponse>("GetConnectionResponse")({ConnectedAt: S.optional(S.Date), Identity: S.optional(Identity), LastActiveAt: S.optional(S.Date)}) {}

//# Errors
export class ForbiddenException extends S.TaggedError<ForbiddenException>()("ForbiddenException", {}) {};
export class GoneException extends S.TaggedError<GoneException>()("GoneException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class PayloadTooLargeException extends S.TaggedError<PayloadTooLargeException>()("PayloadTooLargeException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Delete the connection with the provided id.
 */export const deleteConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "DELETE", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.DeleteConnection" }, DeleteConnectionRequest, S.Struct({}), [ForbiddenException, GoneException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends the provided data to the specified connection.
 */export const postToConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "POST", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.PostToConnection" }, PostToConnectionRequest, S.Struct({}), [ForbiddenException, GoneException, LimitExceededException, PayloadTooLargeException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about the connection with the provided id.
 */export const getConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-11-29", uri: "/@connections/{ConnectionId}", method: "GET", sdkId: "ApiGatewayManagementApi", sigV4ServiceName: "execute-api", name: "ApiGatewayManagementApi.GetConnection" }, GetConnectionRequest, GetConnectionResponse, [ForbiddenException, GoneException, LimitExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
