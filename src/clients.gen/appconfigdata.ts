import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetLatestConfigurationRequest extends Schema.Class<GetLatestConfigurationRequest>("GetLatestConfigurationRequest")({ConfigurationToken: Schema.String}) {}
export class GetLatestConfigurationResponse extends Schema.Class<GetLatestConfigurationResponse>("GetLatestConfigurationResponse")({NextPollConfigurationToken: Schema.optional(Header("Next-Poll-Configuration-Token")), NextPollIntervalInSeconds: Schema.optional(Header("Next-Poll-Interval-In-Seconds", Schema.Number)), ContentType: Schema.optional(Header("Content-Type")), Configuration: Schema.optional(Body("undefined", StreamBody())), VersionLabel: Schema.optional(Header("Version-Label"))}) {}
export class InvalidParameterDetail extends Schema.Class<InvalidParameterDetail>("InvalidParameterDetail")({Problem: Schema.optional(Schema.String)}) {}
export const InvalidParameterMap = Schema.Record({key: Schema.String, value: InvalidParameterDetail});
export const BadRequestDetails = Schema.Union(InvalidParameterMap);
export class BadRequestException extends Schema.Class<BadRequestException>("BadRequestException")({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String), Details: Schema.optional(BadRequestDetails)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.optional(Schema.String)}) {}
export const StringMap = Schema.Record({key: Schema.String, value: Schema.String});
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String), ResourceType: Schema.optional(Schema.String), ReferencedBy: Schema.optional(StringMap)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class BadRequestExceptionError extends Schema.TaggedError<BadRequestExceptionError>()("BadRequestException", BadRequestException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const getLatestConfiguration = /*#__PURE__*/ makeOperation(() => Operation({ version: "2021-11-11", uri: "/configuration", method: "GET", sdkId: "AppConfigData", sigV4ServiceName: "appconfig", name: "AppConfigData.GetLatestConfiguration" }, GetLatestConfigurationRequest, GetLatestConfigurationResponse, [BadRequestExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
