import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const StartSelector = Schema.Struct({StartSelectorType: Schema.String, AfterFragmentNumber: Schema.optional(Schema.String), StartTimestamp: Schema.optional(Schema.Date), ContinuationToken: Schema.optional(Schema.String)});
export const GetMediaInput = Schema.Struct({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), StartSelector: StartSelector});
export const GetMediaOutput = Schema.Struct({ContentType: Schema.optional(Header("Content-Type")), Payload: Schema.optional(Body("undefined", StreamBody()))});
export const ClientLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ConnectionLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidArgumentException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidEndpointException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const NotAuthorizedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const GetMedia = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-30", uri: "/getMedia", method: "POST", sdkId: "Kinesis Video Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityInletService.GetMedia" }, GetMediaInput, GetMediaOutput, Schema.Union(ErrorAnnotation("ClientLimitExceededException", ClientLimitExceededException), ErrorAnnotation("ConnectionLimitExceededException", ConnectionLimitExceededException), ErrorAnnotation("InvalidArgumentException", InvalidArgumentException), ErrorAnnotation("InvalidEndpointException", InvalidEndpointException), ErrorAnnotation("NotAuthorizedException", NotAuthorizedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
