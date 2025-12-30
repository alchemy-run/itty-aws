import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class StartSelector extends S.Class<StartSelector>("StartSelector")({StartSelectorType: S.String, AfterFragmentNumber: S.optional(S.String), StartTimestamp: S.optional(S.Date), ContinuationToken: S.optional(S.String)}) {}
export class GetMediaInput extends S.Class<GetMediaInput>("GetMediaInput")({StreamName: S.optional(S.String), StreamARN: S.optional(S.String), StartSelector: StartSelector}) {}
export class GetMediaOutput extends S.Class<GetMediaOutput>("GetMediaOutput")({ContentType: S.optional(H.Header("Content-Type")), Payload: S.optional(H.Body("undefined", H.StreamBody()))}) {}

//# Errors
export class ClientLimitExceededException extends S.TaggedError<ClientLimitExceededException>()("ClientLimitExceededException", {Message: S.optional(S.String)}) {};
export class ConnectionLimitExceededException extends S.TaggedError<ConnectionLimitExceededException>()("ConnectionLimitExceededException", {Message: S.optional(S.String)}) {};
export class InvalidArgumentException extends S.TaggedError<InvalidArgumentException>()("InvalidArgumentException", {Message: S.optional(S.String)}) {};
export class InvalidEndpointException extends S.TaggedError<InvalidEndpointException>()("InvalidEndpointException", {Message: S.optional(S.String)}) {};
export class NotAuthorizedException extends S.TaggedError<NotAuthorizedException>()("NotAuthorizedException", {Message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {Message: S.optional(S.String)}) {};

//# Operations
export const getMedia = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-09-30", uri: "/getMedia", method: "POST", sdkId: "Kinesis Video Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityInletService.GetMedia" }, GetMediaInput, GetMediaOutput, [ClientLimitExceededException, ConnectionLimitExceededException, InvalidArgumentException, InvalidEndpointException, NotAuthorizedException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
