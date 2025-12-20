import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const ControlArnFilterList = Schema.Array(Schema.String)
const CommonControlArnFilterList = Schema.Array(Schema.String)
const MappingTypeFilterList = Schema.Array(Schema.String)
const ControlMappingFilter = Schema.Struct({ControlArns: Schema.optional(ControlArnFilterList), CommonControlArns: Schema.optional(CommonControlArnFilterList), MappingTypes: Schema.optional(MappingTypeFilterList)})
const ListControlMappingsRequest = Schema.Struct({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), Filter: Schema.optional(ControlMappingFilter)})
const FrameworkMappingDetails = Schema.Struct({Name: Schema.String, Item: Schema.String})
const CommonControlMappingDetails = Schema.Struct({CommonControlArn: Schema.String})
const RelatedControlMappingDetails = Schema.Struct({ControlArn: Schema.optional(Schema.String), RelationType: Schema.String})
const Mapping = Schema.Union(FrameworkMappingDetails, CommonControlMappingDetails, RelatedControlMappingDetails)
const ControlMapping = Schema.Struct({ControlArn: Schema.String, MappingType: Schema.String, Mapping: Mapping})
const ControlMappings = Schema.Array(ControlMapping)
const ListControlMappingsResponse = Schema.Struct({ControlMappings: ControlMappings, NextToken: Schema.optional(Schema.String)})
const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)})
const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)})
const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)})
const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)})
export const ListControlMappings = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/list-control-mappings", method: "POST", sdkId: "ControlCatalog", sigV4ServiceName: "controlcatalog", name: "ListControlMappings" }, ListControlMappingsRequest, ListControlMappingsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
