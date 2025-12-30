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
export class UpdateRoutingControlStatesRequest extends S.Class<UpdateRoutingControlStatesRequest>("UpdateRoutingControlStatesRequest")({UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntries, SafetyRulesToOverride: S.optional(Arns)}) {}
export class UpdateRoutingControlStatesResponse extends S.Class<UpdateRoutingControlStatesResponse>("UpdateRoutingControlStatesResponse")({}) {}
export class RoutingControl extends S.Class<RoutingControl>("RoutingControl")({ControlPanelArn: S.optional(S.String), ControlPanelName: S.optional(S.String), RoutingControlArn: S.optional(S.String), RoutingControlName: S.optional(S.String), RoutingControlState: S.optional(S.String), Owner: S.optional(S.String)}) {}
export const RoutingControls = S.Array(RoutingControl);
export class ListRoutingControlsResponse extends S.Class<ListRoutingControlsResponse>("ListRoutingControlsResponse")({RoutingControls: RoutingControls, NextToken: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class EndpointTemporarilyUnavailableException extends S.TaggedError<EndpointTemporarilyUnavailableException>()("EndpointTemporarilyUnavailableException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ServiceLimitExceededException extends S.TaggedError<ServiceLimitExceededException>()("ServiceLimitExceededException", {message: S.String, resourceId: S.optional(S.String), resourceType: S.optional(S.String), limitCode: S.String, serviceCode: S.String}) {};

//# Operations
export const getRoutingControlState = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.GetRoutingControlState" }, GetRoutingControlStateRequest, GetRoutingControlStateResponse, [AccessDeniedException, EndpointTemporarilyUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listRoutingControls = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.ListRoutingControls" }, ListRoutingControlsRequest, ListRoutingControlsResponse, [AccessDeniedException, EndpointTemporarilyUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRoutingControlStates = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.UpdateRoutingControlStates" }, UpdateRoutingControlStatesRequest, UpdateRoutingControlStatesResponse, [AccessDeniedException, ConflictException, EndpointTemporarilyUnavailableException, InternalServerException, ResourceNotFoundException, ServiceLimitExceededException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const updateRoutingControlState = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-12-02", uri: "/", method: "POST", sdkId: "Route53 Recovery Cluster", sigV4ServiceName: "route53-recovery-cluster", name: "ToggleCustomerAPI.UpdateRoutingControlState" }, UpdateRoutingControlStateRequest, UpdateRoutingControlStateResponse, [AccessDeniedException, ConflictException, EndpointTemporarilyUnavailableException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
