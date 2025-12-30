import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const JoinStorageSessionInput = Schema.Struct({channelArn: Schema.String});
export const JoinStorageSessionAsViewerInput = Schema.Struct({channelArn: Schema.String, clientId: Schema.String});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ClientLimitExceededException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidArgumentException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ClientLimitExceededExceptionError extends Schema.TaggedError<ClientLimitExceededExceptionError>()("ClientLimitExceededException", ClientLimitExceededException) {};
export class InvalidArgumentExceptionError extends Schema.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};

//# Operations
export const joinStorageSession = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/joinStorageSession", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityRoutingServiceLambda.JoinStorageSession" }, JoinStorageSessionInput, Schema.Struct({}), [AccessDeniedExceptionError, ClientLimitExceededExceptionError, InvalidArgumentExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const joinStorageSessionAsViewer = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/joinStorageSessionAsViewer", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityRoutingServiceLambda.JoinStorageSessionAsViewer" }, JoinStorageSessionAsViewerInput, Schema.Struct({}), [AccessDeniedExceptionError, ClientLimitExceededExceptionError, InvalidArgumentExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
