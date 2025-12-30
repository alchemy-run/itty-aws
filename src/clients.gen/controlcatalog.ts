import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ControlArnFilterList = Schema.Array(Schema.String);
export const CommonControlArnFilterList = Schema.Array(Schema.String);
export const MappingTypeFilterList = Schema.Array(Schema.String);
export const ControlMappingFilter = Schema.Struct({ControlArns: Schema.optional(ControlArnFilterList), CommonControlArns: Schema.optional(CommonControlArnFilterList), MappingTypes: Schema.optional(MappingTypeFilterList)});
export const ListControlMappingsRequest = Schema.Struct({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), Filter: Schema.optional(ControlMappingFilter)});
export const FrameworkMappingDetails = Schema.Struct({Name: Schema.String, Item: Schema.String});
export const CommonControlMappingDetails = Schema.Struct({CommonControlArn: Schema.String});
export const Mapping = Schema.Union(FrameworkMappingDetails, CommonControlMappingDetails);
export const ControlMapping = Schema.Struct({ControlArn: Schema.String, MappingType: Schema.String, Mapping: Mapping});
export const ControlMappings = Schema.Array(ControlMapping);
export const ListControlMappingsResponse = Schema.Struct({ControlMappings: ControlMappings, NextToken: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const listControlMappings = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/list-control-mappings", method: "POST", sdkId: "ControlCatalog", sigV4ServiceName: "controlcatalog", name: "ControlCatalog.ListControlMappings" }, ListControlMappingsRequest, ListControlMappingsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
