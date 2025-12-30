import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class JoinStorageSessionInput extends S.Class<JoinStorageSessionInput>("JoinStorageSessionInput")({channelArn: S.String}) {}
export class JoinStorageSessionAsViewerInput extends S.Class<JoinStorageSessionAsViewerInput>("JoinStorageSessionAsViewerInput")({channelArn: S.String, clientId: S.String}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.optional(S.String)}) {}
export class ClientLimitExceededException extends S.Class<ClientLimitExceededException>("ClientLimitExceededException")({message: S.optional(S.String)}) {}
export class InvalidArgumentException extends S.Class<InvalidArgumentException>("InvalidArgumentException")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ClientLimitExceededExceptionError extends S.TaggedError<ClientLimitExceededExceptionError>()("ClientLimitExceededException", ClientLimitExceededException.fields) {};
export class InvalidArgumentExceptionError extends S.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const joinStorageSession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/joinStorageSession", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityRoutingServiceLambda.JoinStorageSession" }, JoinStorageSessionInput, S.Struct({}), [AccessDeniedExceptionError, ClientLimitExceededExceptionError, InvalidArgumentExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const joinStorageSessionAsViewer = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/joinStorageSessionAsViewer", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityRoutingServiceLambda.JoinStorageSessionAsViewer" }, JoinStorageSessionAsViewerInput, S.Struct({}), [AccessDeniedExceptionError, ClientLimitExceededExceptionError, InvalidArgumentExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
