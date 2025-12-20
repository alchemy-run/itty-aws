import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const GetLatestConfigurationRequest = Schema.Struct({ConfigurationToken: Schema.String})
const GetLatestConfigurationResponse = Schema.Struct({NextPollConfigurationToken: Schema.optional(Header("Next-Poll-Configuration-Token")), NextPollIntervalInSeconds: Schema.optional(Header("Next-Poll-Interval-In-Seconds", Schema.Number)), ContentType: Schema.optional(Header("Content-Type")), Configuration: Schema.optional(Body("undefined", StreamBody())), VersionLabel: Schema.optional(Header("Version-Label"))})
const InvalidParameterDetail = Schema.Struct({Problem: Schema.optional(Schema.String)})
const InvalidParameterMap = Schema.Record({key: Schema.String, value: InvalidParameterDetail})
const BadRequestDetails = Schema.Union(InvalidParameterMap)
const BadRequestException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String), Details: Schema.optional(BadRequestDetails)})
const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)})
const StringMap = Schema.Record({key: Schema.String, value: Schema.String})
const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), ReferencedBy: Schema.optional(StringMap)})
const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const GetLatestConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/configuration", method: "GET", sdkId: "AppConfigData", sigV4ServiceName: "appconfig", name: "GetLatestConfiguration" }, GetLatestConfigurationRequest, GetLatestConfigurationResponse, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
