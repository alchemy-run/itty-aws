import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const GetLatestConfigurationRequest = Schema.Struct({ConfigurationToken: Schema.String});
export const GetLatestConfigurationResponse = Schema.Struct({NextPollConfigurationToken: Schema.optional(Header("Next-Poll-Configuration-Token")), NextPollIntervalInSeconds: Schema.optional(Header("Next-Poll-Interval-In-Seconds", Schema.Number)), ContentType: Schema.optional(Header("Content-Type")), Configuration: Schema.optional(Body("undefined", StreamBody())), VersionLabel: Schema.optional(Header("Version-Label"))});
export const InvalidParameterDetail = Schema.Struct({Problem: Schema.optional(Schema.String)});
export const InvalidParameterMap = Schema.Record({key: Schema.String, value: InvalidParameterDetail});
export const BadRequestDetails = Schema.Union(InvalidParameterMap);
export const BadRequestException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String), Details: Schema.optional(BadRequestDetails)});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const StringMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), ReferencedBy: Schema.optional(StringMap)});
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const GetLatestConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-11-11", uri: "/configuration", method: "GET", sdkId: "AppConfigData", sigV4ServiceName: "appconfig", name: "AppConfigData.GetLatestConfiguration" }, GetLatestConfigurationRequest, GetLatestConfigurationResponse, Schema.Union(ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
