import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const Arns = Schema.Array(Schema.String);
export const GetRoutingControlStateRequest = Schema.Struct({RoutingControlArn: Schema.String});
export const ListRoutingControlsRequest = Schema.Struct({ControlPanelArn: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const UpdateRoutingControlStateRequest = Schema.Struct({RoutingControlArn: Schema.String, RoutingControlState: Schema.String, SafetyRulesToOverride: Schema.optional(Arns)});
export const UpdateRoutingControlStateResponse = Schema.Struct({});
export const UpdateRoutingControlStateEntry = Schema.Struct({RoutingControlArn: Schema.String, RoutingControlState: Schema.String});
export const UpdateRoutingControlStateEntries = Schema.Array(UpdateRoutingControlStateEntry);
export const GetRoutingControlStateResponse = Schema.Struct({RoutingControlArn: Schema.String, RoutingControlState: Schema.String, RoutingControlName: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const UpdateRoutingControlStatesRequest = Schema.Struct({UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntries, SafetyRulesToOverride: Schema.optional(Arns)});
export const UpdateRoutingControlStatesResponse = Schema.Struct({});
export const RoutingControl = Schema.Struct({ControlPanelArn: Schema.optional(Schema.String), ControlPanelName: Schema.optional(Schema.String), RoutingControlArn: Schema.optional(Schema.String), RoutingControlName: Schema.optional(Schema.String), RoutingControlState: Schema.optional(Schema.String), Owner: Schema.optional(Schema.String)});
export const RoutingControls = Schema.Array(RoutingControl);
export const EndpointTemporarilyUnavailableException = Schema.Struct({message: Schema.String});
export const ListRoutingControlsResponse = Schema.Struct({RoutingControls: RoutingControls, NextToken: Schema.optional(Schema.String)});
export const ConflictException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});
export const ServiceLimitExceededException = Schema.Struct({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String), limitCode: Schema.String, serviceCode: Schema.String});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.optional(Schema.String), fields: Schema.optional(ValidationExceptionFieldList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class EndpointTemporarilyUnavailableExceptionError extends Schema.TaggedError<EndpointTemporarilyUnavailableExceptionError>()("EndpointTemporarilyUnavailableException", EndpointTemporarilyUnavailableException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ServiceLimitExceededExceptionError extends Schema.TaggedError<ServiceLimitExceededExceptionError>()("ServiceLimitExceededException", ServiceLimitExceededException) {};

//# Operations
export const getRoutingControlState = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.GetRoutingControlState" }, GetRoutingControlStateRequest, GetRoutingControlStateResponse, [AccessDeniedExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listRoutingControls = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.ListRoutingControls" }, ListRoutingControlsRequest, ListRoutingControlsResponse, [AccessDeniedExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRoutingControlStates = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.UpdateRoutingControlStates" }, UpdateRoutingControlStatesRequest, UpdateRoutingControlStatesResponse, [AccessDeniedExceptionError, ConflictExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceLimitExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRoutingControlState = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.UpdateRoutingControlState" }, UpdateRoutingControlStateRequest, UpdateRoutingControlStateResponse, [AccessDeniedExceptionError, ConflictExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
