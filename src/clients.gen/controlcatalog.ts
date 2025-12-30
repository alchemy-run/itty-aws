import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ControlArnFilterList = Schema.Array(Schema.String);
export const CommonControlArnFilterList = Schema.Array(Schema.String);
export const MappingTypeFilterList = Schema.Array(Schema.String);
export class ControlMappingFilter extends Schema.Class<ControlMappingFilter>("ControlMappingFilter")({ControlArns: Schema.optional(ControlArnFilterList), CommonControlArns: Schema.optional(CommonControlArnFilterList), MappingTypes: Schema.optional(MappingTypeFilterList)}) {}
export class ListControlMappingsRequest extends Schema.Class<ListControlMappingsRequest>("ListControlMappingsRequest")({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), Filter: Schema.optional(ControlMappingFilter)}) {}
export class FrameworkMappingDetails extends Schema.Class<FrameworkMappingDetails>("FrameworkMappingDetails")({Name: Schema.String, Item: Schema.String}) {}
export class CommonControlMappingDetails extends Schema.Class<CommonControlMappingDetails>("CommonControlMappingDetails")({CommonControlArn: Schema.String}) {}
export class RelatedControlMappingDetails extends Schema.Class<RelatedControlMappingDetails>("RelatedControlMappingDetails")({ControlArn: Schema.optional(Schema.String), RelationType: Schema.String}) {}
export const Mapping = Schema.Union(FrameworkMappingDetails, CommonControlMappingDetails, RelatedControlMappingDetails);
export class ControlMapping extends Schema.Class<ControlMapping>("ControlMapping")({ControlArn: Schema.String, MappingType: Schema.String, Mapping: Mapping}) {}
export const ControlMappings = Schema.Array(ControlMapping);
export class ListControlMappingsResponse extends Schema.Class<ListControlMappingsResponse>("ListControlMappingsResponse")({ControlMappings: ControlMappings, NextToken: Schema.optional(Schema.String)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const listControlMappings = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-05-10", uri: "/list-control-mappings", method: "POST", sdkId: "ControlCatalog", sigV4ServiceName: "controlcatalog", name: "ControlCatalog.ListControlMappings" }, ListControlMappingsRequest, ListControlMappingsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
