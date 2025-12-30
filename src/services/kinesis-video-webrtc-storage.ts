import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class JoinStorageSessionInput extends S.Class<JoinStorageSessionInput>("JoinStorageSessionInput")({channelArn: S.String}) {}
export class JoinStorageSessionAsViewerInput extends S.Class<JoinStorageSessionAsViewerInput>("JoinStorageSessionAsViewerInput")({channelArn: S.String, clientId: S.String}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ClientLimitExceededException extends S.TaggedError<ClientLimitExceededException>()("ClientLimitExceededException", {}) {};
export class InvalidArgumentException extends S.TaggedError<InvalidArgumentException>()("InvalidArgumentException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};

//# Operations
export const joinStorageSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/joinStorageSession", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityRoutingServiceLambda.JoinStorageSession" }, JoinStorageSessionInput, S.Struct({}), [AccessDeniedException, ClientLimitExceededException, InvalidArgumentException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const joinStorageSessionAsViewer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/joinStorageSessionAsViewer", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityRoutingServiceLambda.JoinStorageSessionAsViewer" }, JoinStorageSessionAsViewerInput, S.Struct({}), [AccessDeniedException, ClientLimitExceededException, InvalidArgumentException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
