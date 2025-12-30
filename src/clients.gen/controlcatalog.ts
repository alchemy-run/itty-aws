import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ControlArnFilterList = S.Array(S.String);
export const CommonControlArnFilterList = S.Array(S.String);
export const MappingTypeFilterList = S.Array(S.String);
export class ControlMappingFilter extends S.Class<ControlMappingFilter>("ControlMappingFilter")({ControlArns: S.optional(ControlArnFilterList), CommonControlArns: S.optional(CommonControlArnFilterList), MappingTypes: S.optional(MappingTypeFilterList)}) {}
export class ListControlMappingsRequest extends S.Class<ListControlMappingsRequest>("ListControlMappingsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), Filter: S.optional(ControlMappingFilter)}) {}
export class FrameworkMappingDetails extends S.Class<FrameworkMappingDetails>("FrameworkMappingDetails")({Name: S.String, Item: S.String}) {}
export class CommonControlMappingDetails extends S.Class<CommonControlMappingDetails>("CommonControlMappingDetails")({CommonControlArn: S.String}) {}
export class RelatedControlMappingDetails extends S.Class<RelatedControlMappingDetails>("RelatedControlMappingDetails")({ControlArn: S.optional(S.String), RelationType: S.String}) {}
export const Mapping = S.Union(FrameworkMappingDetails, CommonControlMappingDetails, RelatedControlMappingDetails);
export class ControlMapping extends S.Class<ControlMapping>("ControlMapping")({ControlArn: S.String, MappingType: S.String, Mapping: Mapping}) {}
export const ControlMappings = S.Array(ControlMapping);
export class ListControlMappingsResponse extends S.Class<ListControlMappingsResponse>("ListControlMappingsResponse")({ControlMappings: ControlMappings, NextToken: S.optional(S.String)}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({Message: S.optional(S.String)}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({Message: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.optional(S.String)}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const listControlMappings = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/list-control-mappings", method: "POST", sdkId: "ControlCatalog", sigV4ServiceName: "controlcatalog", name: "ControlCatalog.ListControlMappings" }, ListControlMappingsRequest, ListControlMappingsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
