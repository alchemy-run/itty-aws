import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const DisableControlInput = Schema.Struct({controlIdentifier: Schema.optional(Schema.String), targetIdentifier: Schema.optional(Schema.String), enabledControlIdentifier: Schema.optional(Schema.String)})
const DisableControlOutput = Schema.Struct({operationIdentifier: Schema.String})
const AccessDeniedException = Schema.Struct({message: Schema.String})
const ConflictException = Schema.Struct({message: Schema.String})
const InternalServerException = Schema.Struct({message: Schema.String})
const ResourceNotFoundException = Schema.Struct({message: Schema.String})
const ServiceQuotaExceededException = Schema.Struct({message: Schema.String})
const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))})
const ValidationException = Schema.Struct({message: Schema.String})
export const DisableControl = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/disable-control", method: "POST", sdkId: "ControlTower", sigV4ServiceName: "controltower", name: "DisableControl" }, DisableControlInput, DisableControlOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
