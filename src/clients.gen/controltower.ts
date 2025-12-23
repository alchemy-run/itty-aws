import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const ValidationException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String, serviceCode: Schema.optional(Schema.String), quotaCode: Schema.optional(Schema.String), retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ServiceQuotaExceededException = Schema.Struct({message: Schema.String});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const ConflictException = Schema.Struct({message: Schema.String});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const DisableControlOutput = Schema.Struct({operationIdentifier: Schema.String});
export const DisableControlInput = Schema.Struct({controlIdentifier: Schema.optional(Schema.String), targetIdentifier: Schema.optional(Schema.String), enabledControlIdentifier: Schema.optional(Schema.String)});
export const DisableControl = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/disable-control", method: "POST", sdkId: "ControlTower", sigV4ServiceName: "controltower", name: "AWSControlTowerApis.DisableControl" }, DisableControlInput, DisableControlOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ConflictException", ConflictException), ErrorAnnotation("InternalServerException", InternalServerException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ServiceQuotaExceededException", ServiceQuotaExceededException), ErrorAnnotation("ThrottlingException", ThrottlingException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
