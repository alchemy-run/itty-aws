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

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {Message: S.optional(S.String)}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {Message: S.optional(S.String)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {Message: S.optional(S.String)}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Returns a paginated list of control mappings from the Control Catalog. Control mappings show relationships between controls and other entities, such as common controls or compliance frameworks.
 */export const listControlMappings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-05-10", uri: "/list-control-mappings", sdkId: "ControlCatalog", sigV4ServiceName: "controlcatalog", name: "ControlCatalog.ListControlMappings" }, ListControlMappingsRequest, ListControlMappingsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
