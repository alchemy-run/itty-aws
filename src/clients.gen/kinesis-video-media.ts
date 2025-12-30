import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class StartSelector extends S.Class<StartSelector>("StartSelector")({StartSelectorType: S.String, AfterFragmentNumber: S.optional(S.String), StartTimestamp: S.optional(S.Date), ContinuationToken: S.optional(S.String)}) {}
export class GetMediaInput extends S.Class<GetMediaInput>("GetMediaInput")({StreamName: S.optional(S.String), StreamARN: S.optional(S.String), StartSelector: StartSelector}) {}
export class GetMediaOutput extends S.Class<GetMediaOutput>("GetMediaOutput")({ContentType: S.optional(H.Header("Content-Type")), Payload: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class ClientLimitExceededException extends S.Class<ClientLimitExceededException>("ClientLimitExceededException")({Message: S.optional(S.String)}) {}
export class ConnectionLimitExceededException extends S.Class<ConnectionLimitExceededException>("ConnectionLimitExceededException")({Message: S.optional(S.String)}) {}
export class InvalidArgumentException extends S.Class<InvalidArgumentException>("InvalidArgumentException")({Message: S.optional(S.String)}) {}
export class InvalidEndpointException extends S.Class<InvalidEndpointException>("InvalidEndpointException")({Message: S.optional(S.String)}) {}
export class NotAuthorizedException extends S.Class<NotAuthorizedException>("NotAuthorizedException")({Message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.optional(S.String)}) {}

//# Errors
export class ClientLimitExceededExceptionError extends S.TaggedError<ClientLimitExceededExceptionError>()("ClientLimitExceededException", ClientLimitExceededException.fields) {};
export class ConnectionLimitExceededExceptionError extends S.TaggedError<ConnectionLimitExceededExceptionError>()("ConnectionLimitExceededException", ConnectionLimitExceededException.fields) {};
export class InvalidArgumentExceptionError extends S.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException.fields) {};
export class InvalidEndpointExceptionError extends S.TaggedError<InvalidEndpointExceptionError>()("InvalidEndpointException", InvalidEndpointException.fields) {};
export class NotAuthorizedExceptionError extends S.TaggedError<NotAuthorizedExceptionError>()("NotAuthorizedException", NotAuthorizedException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const getMedia = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-30", uri: "/getMedia", method: "POST", sdkId: "Kinesis Video Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityInletService.GetMedia" }, GetMediaInput, GetMediaOutput, [ClientLimitExceededExceptionError, ConnectionLimitExceededExceptionError, InvalidArgumentExceptionError, InvalidEndpointExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
