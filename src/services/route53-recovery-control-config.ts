import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const __listOf__string = S.Array(S.String);
export const __mapOf__stringMin0Max256PatternS = S.Record({key: S.String, value: S.String});
export class CreateControlPanelRequest extends S.Class<CreateControlPanelRequest>("CreateControlPanelRequest")({ClientToken: S.optional(S.String), ClusterArn: S.String, ControlPanelName: S.String, Tags: S.optional(__mapOf__stringMin0Max256PatternS)}) {}
export class CreateRoutingControlRequest extends S.Class<CreateRoutingControlRequest>("CreateRoutingControlRequest")({ClientToken: S.optional(S.String), ClusterArn: S.String, ControlPanelArn: S.optional(S.String), RoutingControlName: S.String}) {}
export class DeleteClusterRequest extends S.Class<DeleteClusterRequest>("DeleteClusterRequest")({ClusterArn: S.String}) {}
export class DeleteClusterResponse extends S.Class<DeleteClusterResponse>("DeleteClusterResponse")({}) {}
export class DeleteControlPanelRequest extends S.Class<DeleteControlPanelRequest>("DeleteControlPanelRequest")({ControlPanelArn: S.String}) {}
export class DeleteControlPanelResponse extends S.Class<DeleteControlPanelResponse>("DeleteControlPanelResponse")({}) {}
export class DeleteRoutingControlRequest extends S.Class<DeleteRoutingControlRequest>("DeleteRoutingControlRequest")({RoutingControlArn: S.String}) {}
export class DeleteRoutingControlResponse extends S.Class<DeleteRoutingControlResponse>("DeleteRoutingControlResponse")({}) {}
export class DeleteSafetyRuleRequest extends S.Class<DeleteSafetyRuleRequest>("DeleteSafetyRuleRequest")({SafetyRuleArn: S.String}) {}
export class DeleteSafetyRuleResponse extends S.Class<DeleteSafetyRuleResponse>("DeleteSafetyRuleResponse")({}) {}
export class DescribeClusterRequest extends S.Class<DescribeClusterRequest>("DescribeClusterRequest")({ClusterArn: S.String}) {}
export class DescribeControlPanelRequest extends S.Class<DescribeControlPanelRequest>("DescribeControlPanelRequest")({ControlPanelArn: S.String}) {}
export class DescribeRoutingControlRequest extends S.Class<DescribeRoutingControlRequest>("DescribeRoutingControlRequest")({RoutingControlArn: S.String}) {}
export class DescribeSafetyRuleRequest extends S.Class<DescribeSafetyRuleRequest>("DescribeSafetyRuleRequest")({SafetyRuleArn: S.String}) {}
export class GetResourcePolicyRequest extends S.Class<GetResourcePolicyRequest>("GetResourcePolicyRequest")({ResourceArn: S.String}) {}
export class ListAssociatedRoute53HealthChecksRequest extends S.Class<ListAssociatedRoute53HealthChecksRequest>("ListAssociatedRoute53HealthChecksRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), RoutingControlArn: S.String}) {}
export class ListClustersRequest extends S.Class<ListClustersRequest>("ListClustersRequest")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListControlPanelsRequest extends S.Class<ListControlPanelsRequest>("ListControlPanelsRequest")({ClusterArn: S.optional(S.String), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListRoutingControlsRequest extends S.Class<ListRoutingControlsRequest>("ListRoutingControlsRequest")({ControlPanelArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListSafetyRulesRequest extends S.Class<ListSafetyRulesRequest>("ListSafetyRulesRequest")({ControlPanelArn: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceArn: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceArn: S.String, Tags: __mapOf__stringMin0Max256PatternS}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceArn: S.String, TagKeys: __listOf__string}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateClusterRequest extends S.Class<UpdateClusterRequest>("UpdateClusterRequest")({ClusterArn: S.String, NetworkType: S.String}) {}
export class UpdateControlPanelRequest extends S.Class<UpdateControlPanelRequest>("UpdateControlPanelRequest")({ControlPanelArn: S.String, ControlPanelName: S.String}) {}
export class UpdateRoutingControlRequest extends S.Class<UpdateRoutingControlRequest>("UpdateRoutingControlRequest")({RoutingControlArn: S.String, RoutingControlName: S.String}) {}
export const __listOf__stringMin1Max256PatternAZaZ09 = S.Array(S.String);
export class RuleConfig extends S.Class<RuleConfig>("RuleConfig")({Inverted: S.Boolean, Threshold: S.Number, Type: S.String}) {}
export class NewGatingRule extends S.Class<NewGatingRule>("NewGatingRule")({ControlPanelArn: S.String, GatingControls: __listOf__stringMin1Max256PatternAZaZ09, Name: S.String, RuleConfig: RuleConfig, TargetControls: __listOf__stringMin1Max256PatternAZaZ09, WaitPeriodMs: S.Number}) {}
export const __listOf__stringMax36PatternS = S.Array(S.String);
export class ClusterEndpoint extends S.Class<ClusterEndpoint>("ClusterEndpoint")({Endpoint: S.optional(S.String), Region: S.optional(S.String)}) {}
export const __listOfClusterEndpoint = S.Array(ClusterEndpoint);
export class Cluster extends S.Class<Cluster>("Cluster")({ClusterArn: S.optional(S.String), ClusterEndpoints: S.optional(__listOfClusterEndpoint), Name: S.optional(S.String), Status: S.optional(S.String), Owner: S.optional(S.String), NetworkType: S.optional(S.String)}) {}
export const __listOfCluster = S.Array(Cluster);
export class ControlPanel extends S.Class<ControlPanel>("ControlPanel")({ClusterArn: S.optional(S.String), ControlPanelArn: S.optional(S.String), DefaultControlPanel: S.optional(S.Boolean), Name: S.optional(S.String), RoutingControlCount: S.optional(S.Number), Status: S.optional(S.String), Owner: S.optional(S.String)}) {}
export const __listOfControlPanel = S.Array(ControlPanel);
export class RoutingControl extends S.Class<RoutingControl>("RoutingControl")({ControlPanelArn: S.optional(S.String), Name: S.optional(S.String), RoutingControlArn: S.optional(S.String), Status: S.optional(S.String), Owner: S.optional(S.String)}) {}
export const __listOfRoutingControl = S.Array(RoutingControl);
export class AssertionRuleUpdate extends S.Class<AssertionRuleUpdate>("AssertionRuleUpdate")({Name: S.String, SafetyRuleArn: S.String, WaitPeriodMs: S.Number}) {}
export class GatingRuleUpdate extends S.Class<GatingRuleUpdate>("GatingRuleUpdate")({Name: S.String, SafetyRuleArn: S.String, WaitPeriodMs: S.Number}) {}
export class CreateClusterRequest extends S.Class<CreateClusterRequest>("CreateClusterRequest")({ClientToken: S.optional(S.String), ClusterName: S.String, Tags: S.optional(__mapOf__stringMin0Max256PatternS), NetworkType: S.optional(S.String)}) {}
export class DescribeControlPanelResponse extends S.Class<DescribeControlPanelResponse>("DescribeControlPanelResponse")({ControlPanel: S.optional(ControlPanel)}) {}
export class DescribeRoutingControlResponse extends S.Class<DescribeRoutingControlResponse>("DescribeRoutingControlResponse")({RoutingControl: S.optional(RoutingControl)}) {}
export class GetResourcePolicyResponse extends S.Class<GetResourcePolicyResponse>("GetResourcePolicyResponse")({Policy: S.optional(S.String)}) {}
export class ListAssociatedRoute53HealthChecksResponse extends S.Class<ListAssociatedRoute53HealthChecksResponse>("ListAssociatedRoute53HealthChecksResponse")({HealthCheckIds: S.optional(__listOf__stringMax36PatternS), NextToken: S.optional(S.String)}) {}
export class ListClustersResponse extends S.Class<ListClustersResponse>("ListClustersResponse")({Clusters: S.optional(__listOfCluster), NextToken: S.optional(S.String)}) {}
export class ListControlPanelsResponse extends S.Class<ListControlPanelsResponse>("ListControlPanelsResponse")({ControlPanels: S.optional(__listOfControlPanel), NextToken: S.optional(S.String)}) {}
export class ListRoutingControlsResponse extends S.Class<ListRoutingControlsResponse>("ListRoutingControlsResponse")({NextToken: S.optional(S.String), RoutingControls: S.optional(__listOfRoutingControl)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(__mapOf__stringMin0Max256PatternS)}) {}
export class UpdateClusterResponse extends S.Class<UpdateClusterResponse>("UpdateClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class UpdateControlPanelResponse extends S.Class<UpdateControlPanelResponse>("UpdateControlPanelResponse")({ControlPanel: S.optional(ControlPanel)}) {}
export class UpdateRoutingControlResponse extends S.Class<UpdateRoutingControlResponse>("UpdateRoutingControlResponse")({RoutingControl: S.optional(RoutingControl)}) {}
export class UpdateSafetyRuleRequest extends S.Class<UpdateSafetyRuleRequest>("UpdateSafetyRuleRequest")({AssertionRuleUpdate: S.optional(AssertionRuleUpdate), GatingRuleUpdate: S.optional(GatingRuleUpdate)}) {}
export class NewAssertionRule extends S.Class<NewAssertionRule>("NewAssertionRule")({AssertedControls: __listOf__stringMin1Max256PatternAZaZ09, ControlPanelArn: S.String, Name: S.String, RuleConfig: RuleConfig, WaitPeriodMs: S.Number}) {}
export class AssertionRule extends S.Class<AssertionRule>("AssertionRule")({AssertedControls: __listOf__stringMin1Max256PatternAZaZ09, ControlPanelArn: S.String, Name: S.String, RuleConfig: RuleConfig, SafetyRuleArn: S.String, Status: S.String, WaitPeriodMs: S.Number, Owner: S.optional(S.String)}) {}
export class GatingRule extends S.Class<GatingRule>("GatingRule")({ControlPanelArn: S.String, GatingControls: __listOf__stringMin1Max256PatternAZaZ09, Name: S.String, RuleConfig: RuleConfig, SafetyRuleArn: S.String, Status: S.String, TargetControls: __listOf__stringMin1Max256PatternAZaZ09, WaitPeriodMs: S.Number, Owner: S.optional(S.String)}) {}
export class Rule extends S.Class<Rule>("Rule")({ASSERTION: S.optional(AssertionRule), GATING: S.optional(GatingRule)}) {}
export const __listOfRule = S.Array(Rule);
export class CreateClusterResponse extends S.Class<CreateClusterResponse>("CreateClusterResponse")({Cluster: S.optional(Cluster)}) {}
export class CreateControlPanelResponse extends S.Class<CreateControlPanelResponse>("CreateControlPanelResponse")({ControlPanel: S.optional(ControlPanel)}) {}
export class CreateRoutingControlResponse extends S.Class<CreateRoutingControlResponse>("CreateRoutingControlResponse")({RoutingControl: S.optional(RoutingControl)}) {}
export class CreateSafetyRuleRequest extends S.Class<CreateSafetyRuleRequest>("CreateSafetyRuleRequest")({AssertionRule: S.optional(NewAssertionRule), ClientToken: S.optional(S.String), GatingRule: S.optional(NewGatingRule), Tags: S.optional(__mapOf__stringMin0Max256PatternS)}) {}
export class DescribeSafetyRuleResponse extends S.Class<DescribeSafetyRuleResponse>("DescribeSafetyRuleResponse")({AssertionRule: S.optional(AssertionRule), GatingRule: S.optional(GatingRule)}) {}
export class ListSafetyRulesResponse extends S.Class<ListSafetyRulesResponse>("ListSafetyRulesResponse")({NextToken: S.optional(S.String), SafetyRules: S.optional(__listOfRule)}) {}
export class UpdateSafetyRuleResponse extends S.Class<UpdateSafetyRuleResponse>("UpdateSafetyRuleResponse")({AssertionRule: S.optional(AssertionRule), GatingRule: S.optional(GatingRule)}) {}
export class CreateSafetyRuleResponse extends S.Class<CreateSafetyRuleResponse>("CreateSafetyRuleResponse")({AssertionRule: S.optional(AssertionRule), GatingRule: S.optional(GatingRule)}) {}
export class DescribeClusterResponse extends S.Class<DescribeClusterResponse>("DescribeClusterResponse")({Cluster: S.optional(Cluster)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Removes a tag from a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a control panel.
 */export const deleteControlPanel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/controlpanel/{ControlPanelArn}", method: "DELETE", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.DeleteControlPanel" }, DeleteControlPanelRequest, DeleteControlPanelResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a routing control.
 */export const deleteRoutingControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/routingcontrol/{RoutingControlArn}", method: "DELETE", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.DeleteRoutingControl" }, DeleteRoutingControlRequest, DeleteRoutingControlResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a safety rule.
 * />
 */export const deleteSafetyRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/safetyrule/{SafetyRuleArn}", method: "DELETE", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.DeleteSafetyRule" }, DeleteSafetyRuleRequest, DeleteSafetyRuleResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays details about a control panel.
 */export const describeControlPanel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/controlpanel/{ControlPanelArn}", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.DescribeControlPanel" }, DescribeControlPanelRequest, DescribeControlPanelResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
 * 
 * To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
 */export const describeRoutingControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/routingcontrol/{RoutingControlArn}", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.DescribeRoutingControl" }, DescribeRoutingControlRequest, DescribeRoutingControlResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get information about the resource policy for a cluster.
 */export const getResourcePolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/resourcePolicy/{ResourceArn}", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.GetResourcePolicy" }, GetResourcePolicyRequest, GetResourcePolicyResponse, [InternalServerException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of all Amazon Route 53 health checks associated with a specific routing control.
 */export const listAssociatedRoute53HealthChecks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/routingcontrol/{RoutingControlArn}/associatedRoute53HealthChecks", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.ListAssociatedRoute53HealthChecks" }, ListAssociatedRoute53HealthChecksRequest, ListAssociatedRoute53HealthChecksResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of all the clusters in an account.
 */export const listClusters = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/cluster", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.ListClusters" }, ListClustersRequest, ListClustersResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of control panels in an account or in a cluster.
 */export const listControlPanels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/controlpanels", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.ListControlPanels" }, ListControlPanelsRequest, ListControlPanelsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.
 */export const listRoutingControls = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/controlpanel/{ControlPanelArn}/routingcontrols", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.ListRoutingControls" }, ListRoutingControlsRequest, ListRoutingControlsResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for a resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a tag to a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/tags/{ResourceArn}", method: "POST", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing cluster. You can only update the network type of a cluster.
 */export const updateCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/cluster", method: "PUT", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.UpdateCluster" }, UpdateClusterRequest, UpdateClusterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.
 */export const updateControlPanel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/controlpanel", method: "PUT", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.UpdateControlPanel" }, UpdateControlPanelRequest, UpdateControlPanelResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
 */export const updateRoutingControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/routingcontrol", method: "PUT", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.UpdateRoutingControl" }, UpdateRoutingControlRequest, UpdateRoutingControlResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.
 */export const createControlPanel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/controlpanel", method: "POST", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.CreateControlPanel" }, CreateControlPanelRequest, CreateControlPanelResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new routing control.
 * 
 * A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.
 * 
 * To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.
 */export const createRoutingControl = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/routingcontrol", method: "POST", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.CreateRoutingControl" }, CreateRoutingControlRequest, CreateRoutingControlResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete a cluster.
 */export const deleteCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/cluster/{ClusterArn}", method: "DELETE", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.DeleteCluster" }, DeleteClusterRequest, DeleteClusterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a safety rule.
 */export const describeSafetyRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/safetyrule/{SafetyRuleArn}", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.DescribeSafetyRule" }, DescribeSafetyRuleRequest, DescribeSafetyRuleResponse, [ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.
 */export const listSafetyRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/controlpanel/{ControlPanelArn}/safetyrules", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.ListSafetyRules" }, ListSafetyRulesRequest, ListSafetyRulesResponse, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.
 */export const updateSafetyRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/safetyrule", method: "PUT", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.UpdateSafetyRule" }, UpdateSafetyRuleRequest, UpdateSafetyRuleResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.
 */export const createCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/cluster", method: "POST", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.CreateCluster" }, CreateClusterRequest, CreateClusterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ServiceQuotaExceededException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.
 * 
 * There are two types of safety rules: assertion rules and gating rules.
 * 
 * Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.
 * 
 * Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.
 * 
 * For more information, see Safety rules in the Amazon Route 53 Application Recovery Controller Developer Guide.
 */export const createSafetyRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/safetyrule", method: "POST", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.CreateSafetyRule" }, CreateSafetyRuleRequest, CreateSafetyRuleResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).
 */export const describeCluster = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-11-02", uri: "/cluster/{ClusterArn}", method: "GET", sdkId: "Route53 Recovery Control Config", sigV4ServiceName: "route53-recovery-control-config", name: "Route53RecoveryControlConfig.DescribeCluster" }, DescribeClusterRequest, DescribeClusterResponse, [AccessDeniedException, ConflictException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
