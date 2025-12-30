import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class JoinStorageSessionInput extends Schema.Class<JoinStorageSessionInput>("JoinStorageSessionInput")({channelArn: Schema.String}) {}
export class JoinStorageSessionAsViewerInput extends Schema.Class<JoinStorageSessionAsViewerInput>("JoinStorageSessionAsViewerInput")({channelArn: Schema.String, clientId: Schema.String}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.optional(Schema.String)}) {}
export class ClientLimitExceededException extends Schema.Class<ClientLimitExceededException>("ClientLimitExceededException")({message: Schema.optional(Schema.String)}) {}
export class InvalidArgumentException extends Schema.Class<InvalidArgumentException>("InvalidArgumentException")({message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ClientLimitExceededExceptionError extends Schema.TaggedError<ClientLimitExceededExceptionError>()("ClientLimitExceededException", ClientLimitExceededException.fields) {};
export class InvalidArgumentExceptionError extends Schema.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const joinStorageSession = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/joinStorageSession", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityRoutingServiceLambda.JoinStorageSession" }, JoinStorageSessionInput, Schema.Struct({}), [AccessDeniedExceptionError, ClientLimitExceededExceptionError, InvalidArgumentExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const joinStorageSessionAsViewer = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/joinStorageSessionAsViewer", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityRoutingServiceLambda.JoinStorageSessionAsViewer" }, JoinStorageSessionAsViewerInput, Schema.Struct({}), [AccessDeniedExceptionError, ClientLimitExceededExceptionError, InvalidArgumentExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
