import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const StartSelector = Schema.Struct({StartSelectorType: Schema.String, AfterFragmentNumber: Schema.optional(Schema.String), StartTimestamp: Schema.optional(Schema.Date), ContinuationToken: Schema.optional(Schema.String)})
const GetMediaInput = Schema.Struct({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), StartSelector: StartSelector})
const GetMediaOutput = Schema.Struct({ContentType: Schema.optional(Header("Content-Type")), Payload: Schema.optional(Body("undefined", StreamBody()))})
const ClientLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)})
const ConnectionLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)})
const InvalidArgumentException = Schema.Struct({Message: Schema.optional(Schema.String)})
const InvalidEndpointException = Schema.Struct({Message: Schema.optional(Schema.String)})
const NotAuthorizedException = Schema.Struct({Message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const GetMedia = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/getMedia", method: "POST", sdkId: "Kinesis Video Media", sigV4ServiceName: "kinesisvideo", name: "GetMedia" }, GetMediaInput, GetMediaOutput, Schema.Union(ErrorAnnotation("ClientLimitExceededException", ClientLimitExceededException), ErrorAnnotation("ConnectionLimitExceededException", ConnectionLimitExceededException), ErrorAnnotation("InvalidArgumentException", InvalidArgumentException), ErrorAnnotation("InvalidEndpointException", InvalidEndpointException), ErrorAnnotation("NotAuthorizedException", NotAuthorizedException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
