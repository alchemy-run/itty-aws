import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class Route53RecoveryControlConfig extends AWSServiceClient {
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createControlPanel(
    input: CreateControlPanelRequest,
  ): Effect.Effect<
    CreateControlPanelResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createRoutingControl(
    input: CreateRoutingControlRequest,
  ): Effect.Effect<
    CreateRoutingControlResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createSafetyRule(
    input: CreateSafetyRuleRequest,
  ): Effect.Effect<
    CreateSafetyRuleResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterRequest,
  ): Effect.Effect<
    DeleteClusterResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteControlPanel(
    input: DeleteControlPanelRequest,
  ): Effect.Effect<
    DeleteControlPanelResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteRoutingControl(
    input: DeleteRoutingControlRequest,
  ): Effect.Effect<
    DeleteRoutingControlResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteSafetyRule(
    input: DeleteSafetyRuleRequest,
  ): Effect.Effect<
    DeleteSafetyRuleResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  describeCluster(
    input: DescribeClusterRequest,
  ): Effect.Effect<
    DescribeClusterResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeControlPanel(
    input: DescribeControlPanelRequest,
  ): Effect.Effect<
    DescribeControlPanelResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeRoutingControl(
    input: DescribeRoutingControlRequest,
  ): Effect.Effect<
    DescribeRoutingControlResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  describeSafetyRule(
    input: DescribeSafetyRuleRequest,
  ): Effect.Effect<
    DescribeSafetyRuleResponse,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    InternalServerException | ResourceNotFoundException | CommonAwsError
  >;
  listAssociatedRoute53HealthChecks(
    input: ListAssociatedRoute53HealthChecksRequest,
  ): Effect.Effect<
    ListAssociatedRoute53HealthChecksResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listClusters(
    input: ListClustersRequest,
  ): Effect.Effect<
    ListClustersResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listControlPanels(
    input: ListControlPanelsRequest,
  ): Effect.Effect<
    ListControlPanelsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listRoutingControls(
    input: ListRoutingControlsRequest,
  ): Effect.Effect<
    ListRoutingControlsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listSafetyRules(
    input: ListSafetyRulesRequest,
  ): Effect.Effect<
    ListSafetyRulesResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateCluster(
    input: UpdateClusterRequest,
  ): Effect.Effect<
    UpdateClusterResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateControlPanel(
    input: UpdateControlPanelRequest,
  ): Effect.Effect<
    UpdateControlPanelResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateRoutingControl(
    input: UpdateRoutingControlRequest,
  ): Effect.Effect<
    UpdateRoutingControlResponse,
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateSafetyRule(
    input: UpdateSafetyRuleRequest,
  ): Effect.Effect<
    UpdateSafetyRuleResponse,
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type __boolean = boolean;

export type __integer = number;

export type __listOf__string = Array<string>;
export type __listOf__stringMax36PatternS = Array<string>;
export type __listOf__stringMin1Max256PatternAZaZ09 = Array<string>;
export type __listOfCluster = Array<Cluster>;
export type __listOfClusterEndpoint = Array<ClusterEndpoint>;
export type __listOfControlPanel = Array<ControlPanel>;
export type __listOfRoutingControl = Array<RoutingControl>;
export type __listOfRule = Array<Rule>;
export type __mapOf__stringMin0Max256PatternS = Record<string, string>;
export type __policy = string;

export type __string = string;

export type __stringMax36PatternS = string;

export type __stringMin0Max256PatternS = string;

export type __stringMin12Max12PatternD12 = string;

export type __stringMin1Max128PatternAZaZ09 = string;

export type __stringMin1Max256PatternAZaZ09 = string;

export type __stringMin1Max32PatternS = string;

export type __stringMin1Max64PatternS = string;

export type __stringMin1Max8096PatternS = string;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export interface AssertionRule {
  AssertedControls: Array<string>;
  ControlPanelArn: string;
  Name: string;
  RuleConfig: RuleConfig;
  SafetyRuleArn: string;
  Status: Status;
  WaitPeriodMs: number;
  Owner?: string;
}
export interface AssertionRuleUpdate {
  Name: string;
  SafetyRuleArn: string;
  WaitPeriodMs: number;
}
export interface Cluster {
  ClusterArn?: string;
  ClusterEndpoints?: Array<ClusterEndpoint>;
  Name?: string;
  Status?: Status;
  Owner?: string;
  NetworkType?: NetworkType;
}
export interface ClusterEndpoint {
  Endpoint?: string;
  Region?: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message: string;
}> {}
export interface ControlPanel {
  ClusterArn?: string;
  ControlPanelArn?: string;
  DefaultControlPanel?: boolean;
  Name?: string;
  RoutingControlCount?: number;
  Status?: Status;
  Owner?: string;
}
export interface CreateClusterRequest {
  ClientToken?: string;
  ClusterName: string;
  Tags?: Record<string, string>;
  NetworkType?: NetworkType;
}
export interface CreateClusterResponse {
  Cluster?: Cluster;
}
export interface CreateControlPanelRequest {
  ClientToken?: string;
  ClusterArn: string;
  ControlPanelName: string;
  Tags?: Record<string, string>;
}
export interface CreateControlPanelResponse {
  ControlPanel?: ControlPanel;
}
export interface CreateRoutingControlRequest {
  ClientToken?: string;
  ClusterArn: string;
  ControlPanelArn?: string;
  RoutingControlName: string;
}
export interface CreateRoutingControlResponse {
  RoutingControl?: RoutingControl;
}
export interface CreateSafetyRuleRequest {
  AssertionRule?: NewAssertionRule;
  ClientToken?: string;
  GatingRule?: NewGatingRule;
  Tags?: Record<string, string>;
}
export interface CreateSafetyRuleResponse {
  AssertionRule?: AssertionRule;
  GatingRule?: GatingRule;
}
export interface DeleteClusterRequest {
  ClusterArn: string;
}
export interface DeleteClusterResponse {
}
export interface DeleteControlPanelRequest {
  ControlPanelArn: string;
}
export interface DeleteControlPanelResponse {
}
export interface DeleteRoutingControlRequest {
  RoutingControlArn: string;
}
export interface DeleteRoutingControlResponse {
}
export interface DeleteSafetyRuleRequest {
  SafetyRuleArn: string;
}
export interface DeleteSafetyRuleResponse {
}
export interface DescribeClusterRequest {
  ClusterArn: string;
}
export interface DescribeClusterResponse {
  Cluster?: Cluster;
}
export interface DescribeControlPanelRequest {
  ControlPanelArn: string;
}
export interface DescribeControlPanelResponse {
  ControlPanel?: ControlPanel;
}
export interface DescribeRoutingControlRequest {
  RoutingControlArn: string;
}
export interface DescribeRoutingControlResponse {
  RoutingControl?: RoutingControl;
}
export interface DescribeSafetyRuleRequest {
  SafetyRuleArn: string;
}
export interface DescribeSafetyRuleResponse {
  AssertionRule?: AssertionRule;
  GatingRule?: GatingRule;
}
export interface GatingRule {
  ControlPanelArn: string;
  GatingControls: Array<string>;
  Name: string;
  RuleConfig: RuleConfig;
  SafetyRuleArn: string;
  Status: Status;
  TargetControls: Array<string>;
  WaitPeriodMs: number;
  Owner?: string;
}
export interface GatingRuleUpdate {
  Name: string;
  SafetyRuleArn: string;
  WaitPeriodMs: number;
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export interface GetResourcePolicyResponse {
  Policy?: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export interface ListAssociatedRoute53HealthChecksRequest {
  MaxResults?: number;
  NextToken?: string;
  RoutingControlArn: string;
}
export interface ListAssociatedRoute53HealthChecksResponse {
  HealthCheckIds?: Array<string>;
  NextToken?: string;
}
export interface ListClustersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListClustersResponse {
  Clusters?: Array<Cluster>;
  NextToken?: string;
}
export interface ListControlPanelsRequest {
  ClusterArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListControlPanelsResponse {
  ControlPanels?: Array<ControlPanel>;
  NextToken?: string;
}
export interface ListRoutingControlsRequest {
  ControlPanelArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRoutingControlsResponse {
  NextToken?: string;
  RoutingControls?: Array<RoutingControl>;
}
export interface ListSafetyRulesRequest {
  ControlPanelArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSafetyRulesResponse {
  NextToken?: string;
  SafetyRules?: Array<Rule>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type MaxResults = number;

export type NetworkType = "IPV4" | "DUALSTACK";
export interface NewAssertionRule {
  AssertedControls: Array<string>;
  ControlPanelArn: string;
  Name: string;
  RuleConfig: RuleConfig;
  WaitPeriodMs: number;
}
export interface NewGatingRule {
  ControlPanelArn: string;
  GatingControls: Array<string>;
  Name: string;
  RuleConfig: RuleConfig;
  TargetControls: Array<string>;
  WaitPeriodMs: number;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message: string;
}> {}
export interface RoutingControl {
  ControlPanelArn?: string;
  Name?: string;
  RoutingControlArn?: string;
  Status?: Status;
  Owner?: string;
}
export interface Rule {
  ASSERTION?: AssertionRule;
  GATING?: GatingRule;
}
export interface RuleConfig {
  Inverted: boolean;
  Threshold: number;
  Type: RuleType;
}
export type RuleType = "ATLEAST" | "AND" | "OR";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
}> {}
export type Status = "PENDING" | "DEPLOYED" | "PENDING_DELETION";
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateClusterRequest {
  ClusterArn: string;
  NetworkType: NetworkType;
}
export interface UpdateClusterResponse {
  Cluster?: Cluster;
}
export interface UpdateControlPanelRequest {
  ControlPanelArn: string;
  ControlPanelName: string;
}
export interface UpdateControlPanelResponse {
  ControlPanel?: ControlPanel;
}
export interface UpdateRoutingControlRequest {
  RoutingControlArn: string;
  RoutingControlName: string;
}
export interface UpdateRoutingControlResponse {
  RoutingControl?: RoutingControl;
}
export interface UpdateSafetyRuleRequest {
  AssertionRuleUpdate?: AssertionRuleUpdate;
  GatingRuleUpdate?: GatingRuleUpdate;
}
export interface UpdateSafetyRuleResponse {
  AssertionRule?: AssertionRule;
  GatingRule?: GatingRule;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message: string;
}> {}
export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateControlPanel {
  export type Input = CreateControlPanelRequest;
  export type Output = CreateControlPanelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRoutingControl {
  export type Input = CreateRoutingControlRequest;
  export type Output = CreateRoutingControlResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateSafetyRule {
  export type Input = CreateSafetyRuleRequest;
  export type Output = CreateSafetyRuleResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterRequest;
  export type Output = DeleteClusterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteControlPanel {
  export type Input = DeleteControlPanelRequest;
  export type Output = DeleteControlPanelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRoutingControl {
  export type Input = DeleteRoutingControlRequest;
  export type Output = DeleteRoutingControlResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSafetyRule {
  export type Input = DeleteSafetyRuleRequest;
  export type Output = DeleteSafetyRuleResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeCluster {
  export type Input = DescribeClusterRequest;
  export type Output = DescribeClusterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeControlPanel {
  export type Input = DescribeControlPanelRequest;
  export type Output = DescribeControlPanelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRoutingControl {
  export type Input = DescribeRoutingControlRequest;
  export type Output = DescribeRoutingControlResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeSafetyRule {
  export type Input = DescribeSafetyRuleRequest;
  export type Output = DescribeSafetyRuleResponse;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListAssociatedRoute53HealthChecks {
  export type Input = ListAssociatedRoute53HealthChecksRequest;
  export type Output = ListAssociatedRoute53HealthChecksResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersRequest;
  export type Output = ListClustersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListControlPanels {
  export type Input = ListControlPanelsRequest;
  export type Output = ListControlPanelsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRoutingControls {
  export type Input = ListRoutingControlsRequest;
  export type Output = ListRoutingControlsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSafetyRules {
  export type Input = ListSafetyRulesRequest;
  export type Output = ListSafetyRulesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCluster {
  export type Input = UpdateClusterRequest;
  export type Output = UpdateClusterResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateControlPanel {
  export type Input = UpdateControlPanelRequest;
  export type Output = UpdateControlPanelResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRoutingControl {
  export type Input = UpdateRoutingControlRequest;
  export type Output = UpdateRoutingControlResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSafetyRule {
  export type Input = UpdateSafetyRuleRequest;
  export type Output = UpdateSafetyRuleResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

