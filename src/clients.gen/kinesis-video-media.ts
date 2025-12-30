import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class StartSelector extends Schema.Class<StartSelector>("StartSelector")({StartSelectorType: Schema.String, AfterFragmentNumber: Schema.optional(Schema.String), StartTimestamp: Schema.optional(Schema.Date), ContinuationToken: Schema.optional(Schema.String)}) {}
export class GetMediaInput extends Schema.Class<GetMediaInput>("GetMediaInput")({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), StartSelector: StartSelector}) {}
export class GetMediaOutput extends Schema.Class<GetMediaOutput>("GetMediaOutput")({ContentType: Schema.optional(Header("Content-Type")), Payload: Schema.optional(Body("undefined", StreamBody()))}) {}
export class ClientLimitExceededException extends Schema.Class<ClientLimitExceededException>("ClientLimitExceededException")({Message: Schema.optional(Schema.String)}) {}
export class ConnectionLimitExceededException extends Schema.Class<ConnectionLimitExceededException>("ConnectionLimitExceededException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidArgumentException extends Schema.Class<InvalidArgumentException>("InvalidArgumentException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidEndpointException extends Schema.Class<InvalidEndpointException>("InvalidEndpointException")({Message: Schema.optional(Schema.String)}) {}
export class NotAuthorizedException extends Schema.Class<NotAuthorizedException>("NotAuthorizedException")({Message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class ClientLimitExceededExceptionError extends Schema.TaggedError<ClientLimitExceededExceptionError>()("ClientLimitExceededException", ClientLimitExceededException.fields) {};
export class ConnectionLimitExceededExceptionError extends Schema.TaggedError<ConnectionLimitExceededExceptionError>()("ConnectionLimitExceededException", ConnectionLimitExceededException.fields) {};
export class InvalidArgumentExceptionError extends Schema.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException.fields) {};
export class InvalidEndpointExceptionError extends Schema.TaggedError<InvalidEndpointExceptionError>()("InvalidEndpointException", InvalidEndpointException.fields) {};
export class NotAuthorizedExceptionError extends Schema.TaggedError<NotAuthorizedExceptionError>()("NotAuthorizedException", NotAuthorizedException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};

//# Operations
export const getMedia = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-30", uri: "/getMedia", method: "POST", sdkId: "Kinesis Video Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityInletService.GetMedia" }, GetMediaInput, GetMediaOutput, [ClientLimitExceededExceptionError, ConnectionLimitExceededExceptionError, InvalidArgumentExceptionError, InvalidEndpointExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
