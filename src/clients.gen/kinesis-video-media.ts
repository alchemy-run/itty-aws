import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const StartSelector = Schema.Struct({StartSelectorType: Schema.String, AfterFragmentNumber: Schema.optional(Schema.String), StartTimestamp: Schema.optional(Schema.Date), ContinuationToken: Schema.optional(Schema.String)});
export const GetMediaInput = Schema.Struct({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), StartSelector: StartSelector});
export const GetMediaOutput = Schema.Struct({ContentType: Schema.optional(Header("Content-Type")), Payload: Schema.optional(Body("undefined", StreamBody()))});
export const ClientLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ConnectionLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidArgumentException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidEndpointException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const NotAuthorizedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class ClientLimitExceededExceptionError extends Schema.TaggedError<ClientLimitExceededExceptionError>()("ClientLimitExceededException", ClientLimitExceededException) {};
export class ConnectionLimitExceededExceptionError extends Schema.TaggedError<ConnectionLimitExceededExceptionError>()("ConnectionLimitExceededException", ConnectionLimitExceededException) {};
export class InvalidArgumentExceptionError extends Schema.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException) {};
export class InvalidEndpointExceptionError extends Schema.TaggedError<InvalidEndpointExceptionError>()("InvalidEndpointException", InvalidEndpointException) {};
export class NotAuthorizedExceptionError extends Schema.TaggedError<NotAuthorizedExceptionError>()("NotAuthorizedException", NotAuthorizedException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};

//# Operations
export const getMedia = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-30", uri: "/getMedia", method: "POST", sdkId: "Kinesis Video Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityInletService.GetMedia" }, GetMediaInput, GetMediaOutput, [ClientLimitExceededExceptionError, ConnectionLimitExceededExceptionError, InvalidArgumentExceptionError, InvalidEndpointExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
