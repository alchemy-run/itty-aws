import * as Schema from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const Arns = Schema.Array(Schema.String);
export class GetRoutingControlStateRequest extends Schema.Class<GetRoutingControlStateRequest>("GetRoutingControlStateRequest")({RoutingControlArn: Schema.String}) {}
export class ListRoutingControlsRequest extends Schema.Class<ListRoutingControlsRequest>("ListRoutingControlsRequest")({ControlPanelArn: Schema.optional(Schema.String), NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class UpdateRoutingControlStateRequest extends Schema.Class<UpdateRoutingControlStateRequest>("UpdateRoutingControlStateRequest")({RoutingControlArn: Schema.String, RoutingControlState: Schema.String, SafetyRulesToOverride: Schema.optional(Arns)}) {}
export class UpdateRoutingControlStateResponse extends Schema.Class<UpdateRoutingControlStateResponse>("UpdateRoutingControlStateResponse")({}) {}
export class UpdateRoutingControlStateEntry extends Schema.Class<UpdateRoutingControlStateEntry>("UpdateRoutingControlStateEntry")({RoutingControlArn: Schema.String, RoutingControlState: Schema.String}) {}
export const UpdateRoutingControlStateEntries = Schema.Array(UpdateRoutingControlStateEntry);
export class GetRoutingControlStateResponse extends Schema.Class<GetRoutingControlStateResponse>("GetRoutingControlStateResponse")({RoutingControlArn: Schema.String, RoutingControlState: Schema.String, RoutingControlName: Schema.optional(Schema.String)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class UpdateRoutingControlStatesRequest extends Schema.Class<UpdateRoutingControlStatesRequest>("UpdateRoutingControlStatesRequest")({UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntries, SafetyRulesToOverride: Schema.optional(Arns)}) {}
export class UpdateRoutingControlStatesResponse extends Schema.Class<UpdateRoutingControlStatesResponse>("UpdateRoutingControlStatesResponse")({}) {}
export class RoutingControl extends Schema.Class<RoutingControl>("RoutingControl")({ControlPanelArn: Schema.optional(Schema.String), ControlPanelName: Schema.optional(Schema.String), RoutingControlArn: Schema.optional(Schema.String), RoutingControlName: Schema.optional(Schema.String), RoutingControlState: Schema.optional(Schema.String), Owner: Schema.optional(Schema.String)}) {}
export const RoutingControls = Schema.Array(RoutingControl);
export class EndpointTemporarilyUnavailableException extends Schema.Class<EndpointTemporarilyUnavailableException>("EndpointTemporarilyUnavailableException")({message: Schema.String}) {}
export class ListRoutingControlsResponse extends Schema.Class<ListRoutingControlsResponse>("ListRoutingControlsResponse")({RoutingControls: RoutingControls, NextToken: Schema.optional(Schema.String)}) {}
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String, retryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}
export class ServiceLimitExceededException extends Schema.Class<ServiceLimitExceededException>("ServiceLimitExceededException")({message: Schema.String, resourceId: Schema.optional(Schema.String), resourceType: Schema.optional(Schema.String), limitCode: Schema.String, serviceCode: Schema.String}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.optional(Schema.String), fields: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class EndpointTemporarilyUnavailableExceptionError extends Schema.TaggedError<EndpointTemporarilyUnavailableExceptionError>()("EndpointTemporarilyUnavailableException", EndpointTemporarilyUnavailableException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceLimitExceededExceptionError extends Schema.TaggedError<ServiceLimitExceededExceptionError>()("ServiceLimitExceededException", ServiceLimitExceededException.fields) {};

//# Operations
export const getRoutingControlState = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.GetRoutingControlState" }, GetRoutingControlStateRequest, GetRoutingControlStateResponse, [AccessDeniedExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listRoutingControls = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.ListRoutingControls" }, ListRoutingControlsRequest, ListRoutingControlsResponse, [AccessDeniedExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRoutingControlStates = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.UpdateRoutingControlStates" }, UpdateRoutingControlStatesRequest, UpdateRoutingControlStatesResponse, [AccessDeniedExceptionError, ConflictExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceLimitExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRoutingControlState = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.UpdateRoutingControlState" }, UpdateRoutingControlStateRequest, UpdateRoutingControlStateResponse, [AccessDeniedExceptionError, ConflictExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
