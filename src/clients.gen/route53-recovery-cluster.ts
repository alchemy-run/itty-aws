import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const Arns = S.Array(S.String);
export class GetRoutingControlStateRequest extends S.Class<GetRoutingControlStateRequest>("GetRoutingControlStateRequest")({RoutingControlArn: S.String}) {}
export class ListRoutingControlsRequest extends S.Class<ListRoutingControlsRequest>("ListRoutingControlsRequest")({ControlPanelArn: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class UpdateRoutingControlStateRequest extends S.Class<UpdateRoutingControlStateRequest>("UpdateRoutingControlStateRequest")({RoutingControlArn: S.String, RoutingControlState: S.String, SafetyRulesToOverride: S.optional(Arns)}) {}
export class UpdateRoutingControlStateResponse extends S.Class<UpdateRoutingControlStateResponse>("UpdateRoutingControlStateResponse")({}) {}
export class UpdateRoutingControlStateEntry extends S.Class<UpdateRoutingControlStateEntry>("UpdateRoutingControlStateEntry")({RoutingControlArn: S.String, RoutingControlState: S.String}) {}
export const UpdateRoutingControlStateEntries = S.Array(UpdateRoutingControlStateEntry);
export class GetRoutingControlStateResponse extends S.Class<GetRoutingControlStateResponse>("GetRoutingControlStateResponse")({RoutingControlArn: S.String, RoutingControlState: S.String, RoutingControlName: S.optional(S.String)}) {}
export class AccessDeniedException extends S.Class<AccessDeniedException>("AccessDeniedException")({message: S.String}) {}
export class UpdateRoutingControlStatesRequest extends S.Class<UpdateRoutingControlStatesRequest>("UpdateRoutingControlStatesRequest")({UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntries, SafetyRulesToOverride: S.optional(Arns)}) {}
export class UpdateRoutingControlStatesResponse extends S.Class<UpdateRoutingControlStatesResponse>("UpdateRoutingControlStatesResponse")({}) {}
export class RoutingControl extends S.Class<RoutingControl>("RoutingControl")({ControlPanelArn: S.optional(S.String), ControlPanelName: S.optional(S.String), RoutingControlArn: S.optional(S.String), RoutingControlName: S.optional(S.String), RoutingControlState: S.optional(S.String), Owner: S.optional(S.String)}) {}
export const RoutingControls = S.Array(RoutingControl);
export class EndpointTemporarilyUnavailableException extends S.Class<EndpointTemporarilyUnavailableException>("EndpointTemporarilyUnavailableException")({message: S.String}) {}
export class ListRoutingControlsResponse extends S.Class<ListRoutingControlsResponse>("ListRoutingControlsResponse")({RoutingControls: RoutingControls, NextToken: S.optional(S.String)}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class InternalServerException extends S.Class<InternalServerException>("InternalServerException")({message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.String, resourceId: S.String, resourceType: S.String}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({message: S.String, retryAfterSeconds: S.optional(H.Header("Retry-After", S.Number))}) {}
export class ServiceLimitExceededException extends S.Class<ServiceLimitExceededException>("ServiceLimitExceededException")({message: S.String, resourceId: S.optional(S.String), resourceType: S.optional(S.String), limitCode: S.String, serviceCode: S.String}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);
export class ValidationException extends S.Class<ValidationException>("ValidationException")({message: S.String, reason: S.optional(S.String), fields: S.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends S.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class EndpointTemporarilyUnavailableExceptionError extends S.TaggedError<EndpointTemporarilyUnavailableExceptionError>()("EndpointTemporarilyUnavailableException", EndpointTemporarilyUnavailableException.fields) {};
export class InternalServerExceptionError extends S.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class ServiceLimitExceededExceptionError extends S.TaggedError<ServiceLimitExceededExceptionError>()("ServiceLimitExceededException", ServiceLimitExceededException.fields) {};

//# Operations
export const getRoutingControlState = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.GetRoutingControlState" }, GetRoutingControlStateRequest, GetRoutingControlStateResponse, [AccessDeniedExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listRoutingControls = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.ListRoutingControls" }, ListRoutingControlsRequest, ListRoutingControlsResponse, [AccessDeniedExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRoutingControlStates = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.UpdateRoutingControlStates" }, UpdateRoutingControlStatesRequest, UpdateRoutingControlStatesResponse, [AccessDeniedExceptionError, ConflictExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ServiceLimitExceededExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRoutingControlState = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.UpdateRoutingControlState" }, UpdateRoutingControlStateRequest, UpdateRoutingControlStateResponse, [AccessDeniedExceptionError, ConflictExceptionError, EndpointTemporarilyUnavailableExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
