import type { Effect, Data as EffectData } from "effect";
import type { ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError } from "../../error.ts";
type CommonAwsError = ExpiredTokenException | IncompleteSignature | InternalFailure | MalformedHttpRequestException | NotAuthorized | OptInRequired | RequestAbortedException | RequestEntityTooLargeException | RequestExpired | RequestTimeoutException | ServiceUnavailable | UnrecognizedClientException | UnknownOperationException | ValidationError | AccessDeniedException | ThrottlingException | ValidationException;
import { AWSServiceClient } from "../../client.ts";

export declare class Route53RecoveryReadiness extends AWSServiceClient {
  createCell(
    input: CreateCellRequest,
  ): Effect.Effect<
    CreateCellResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCrossAccountAuthorization(
    input: CreateCrossAccountAuthorizationRequest,
  ): Effect.Effect<
    CreateCrossAccountAuthorizationResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createReadinessCheck(
    input: CreateReadinessCheckRequest,
  ): Effect.Effect<
    CreateReadinessCheckResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createRecoveryGroup(
    input: CreateRecoveryGroupRequest,
  ): Effect.Effect<
    CreateRecoveryGroupResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createResourceSet(
    input: CreateResourceSetRequest,
  ): Effect.Effect<
    CreateResourceSetResponse,
    AccessDeniedException | ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCell(
    input: DeleteCellRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCrossAccountAuthorization(
    input: DeleteCrossAccountAuthorizationRequest,
  ): Effect.Effect<
    DeleteCrossAccountAuthorizationResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteReadinessCheck(
    input: DeleteReadinessCheckRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteRecoveryGroup(
    input: DeleteRecoveryGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteResourceSet(
    input: DeleteResourceSetRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getArchitectureRecommendations(
    input: GetArchitectureRecommendationsRequest,
  ): Effect.Effect<
    GetArchitectureRecommendationsResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCell(
    input: GetCellRequest,
  ): Effect.Effect<
    GetCellResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCellReadinessSummary(
    input: GetCellReadinessSummaryRequest,
  ): Effect.Effect<
    GetCellReadinessSummaryResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getReadinessCheck(
    input: GetReadinessCheckRequest,
  ): Effect.Effect<
    GetReadinessCheckResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getReadinessCheckResourceStatus(
    input: GetReadinessCheckResourceStatusRequest,
  ): Effect.Effect<
    GetReadinessCheckResourceStatusResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getReadinessCheckStatus(
    input: GetReadinessCheckStatusRequest,
  ): Effect.Effect<
    GetReadinessCheckStatusResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getRecoveryGroup(
    input: GetRecoveryGroupRequest,
  ): Effect.Effect<
    GetRecoveryGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getRecoveryGroupReadinessSummary(
    input: GetRecoveryGroupReadinessSummaryRequest,
  ): Effect.Effect<
    GetRecoveryGroupReadinessSummaryResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getResourceSet(
    input: GetResourceSetRequest,
  ): Effect.Effect<
    GetResourceSetResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCells(
    input: ListCellsRequest,
  ): Effect.Effect<
    ListCellsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCrossAccountAuthorizations(
    input: ListCrossAccountAuthorizationsRequest,
  ): Effect.Effect<
    ListCrossAccountAuthorizationsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listReadinessChecks(
    input: ListReadinessChecksRequest,
  ): Effect.Effect<
    ListReadinessChecksResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listRecoveryGroups(
    input: ListRecoveryGroupsRequest,
  ): Effect.Effect<
    ListRecoveryGroupsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listResourceSets(
    input: ListResourceSetsRequest,
  ): Effect.Effect<
    ListResourceSetsResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listRules(
    input: ListRulesRequest,
  ): Effect.Effect<
    ListRulesResponse,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResources(
    input: ListTagsForResourcesRequest,
  ): Effect.Effect<
    ListTagsForResourcesResponse,
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
    {},
    InternalServerException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateCell(
    input: UpdateCellRequest,
  ): Effect.Effect<
    UpdateCellResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateReadinessCheck(
    input: UpdateReadinessCheckRequest,
  ): Effect.Effect<
    UpdateReadinessCheckResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateRecoveryGroup(
    input: UpdateRecoveryGroupRequest,
  ): Effect.Effect<
    UpdateRecoveryGroupResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateResourceSet(
    input: UpdateResourceSetRequest,
  ): Effect.Effect<
    UpdateResourceSetResponse,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type __listOf__string = Array<string>;
export type __listOfCellOutput = Array<CellOutput>;
export type __listOfCrossAccountAuthorization = Array<string>;
export type __listOfListRulesOutput = Array<ListRulesOutput>;
export type __listOfMessage = Array<Message>;
export type __listOfReadinessCheckOutput = Array<ReadinessCheckOutput>;
export type __listOfReadinessCheckSummary = Array<ReadinessCheckSummary>;
export type __listOfRecommendation = Array<Recommendation>;
export type __listOfRecoveryGroupOutput = Array<RecoveryGroupOutput>;
export type __listOfResource = Array<Resource>;
export type __listOfResourceResult = Array<ResourceResult>;
export type __listOfResourceSetOutput = Array<ResourceSetOutput>;
export type __listOfRuleResult = Array<RuleResult>;
export type __string = string;

export type __stringMax256 = string;

export type __stringMax64 = string;

export type __stringMax64PatternAAZAZ09Z = string;

export type __stringPatternAWSAZaZ09AZaZ09 = string;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface CellOutput {
  CellArn: string;
  CellName: string;
  Cells: Array<string>;
  ParentReadinessScopes: Array<string>;
  Tags?: Record<string, string>;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateCellRequest {
  CellName: string;
  Cells?: Array<string>;
  Tags?: Record<string, string>;
}
export interface CreateCellResponse {
  CellArn?: string;
  CellName?: string;
  Cells?: Array<string>;
  ParentReadinessScopes?: Array<string>;
  Tags?: Record<string, string>;
}
export interface CreateCrossAccountAuthorizationRequest {
  CrossAccountAuthorization: string;
}
export interface CreateCrossAccountAuthorizationResponse {
  CrossAccountAuthorization?: string;
}
export interface CreateReadinessCheckRequest {
  ReadinessCheckName: string;
  ResourceSetName: string;
  Tags?: Record<string, string>;
}
export interface CreateReadinessCheckResponse {
  ReadinessCheckArn?: string;
  ReadinessCheckName?: string;
  ResourceSet?: string;
  Tags?: Record<string, string>;
}
export interface CreateRecoveryGroupRequest {
  Cells?: Array<string>;
  RecoveryGroupName: string;
  Tags?: Record<string, string>;
}
export interface CreateRecoveryGroupResponse {
  Cells?: Array<string>;
  RecoveryGroupArn?: string;
  RecoveryGroupName?: string;
  Tags?: Record<string, string>;
}
export interface CreateResourceSetRequest {
  ResourceSetName: string;
  ResourceSetType: string;
  Resources: Array<Resource>;
  Tags?: Record<string, string>;
}
export interface CreateResourceSetResponse {
  ResourceSetArn?: string;
  ResourceSetName?: string;
  ResourceSetType?: string;
  Resources?: Array<Resource>;
  Tags?: Record<string, string>;
}
export type CrossAccountAuthorization = string;

export interface DeleteCellRequest {
  CellName: string;
}
export interface DeleteCrossAccountAuthorizationRequest {
  CrossAccountAuthorization: string;
}
export interface DeleteCrossAccountAuthorizationResponse {
}
export interface DeleteReadinessCheckRequest {
  ReadinessCheckName: string;
}
export interface DeleteRecoveryGroupRequest {
  RecoveryGroupName: string;
}
export interface DeleteResourceSetRequest {
  ResourceSetName: string;
}
export interface DNSTargetResource {
  DomainName?: string;
  HostedZoneArn?: string;
  RecordSetId?: string;
  RecordType?: string;
  TargetResource?: TargetResource;
}
export interface GetArchitectureRecommendationsRequest {
  MaxResults?: number;
  NextToken?: string;
  RecoveryGroupName: string;
}
export interface GetArchitectureRecommendationsResponse {
  LastAuditTimestamp?: Date | string;
  NextToken?: string;
  Recommendations?: Array<Recommendation>;
}
export interface GetCellReadinessSummaryRequest {
  CellName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetCellReadinessSummaryResponse {
  NextToken?: string;
  Readiness?: Readiness;
  ReadinessChecks?: Array<ReadinessCheckSummary>;
}
export interface GetCellRequest {
  CellName: string;
}
export interface GetCellResponse {
  CellArn?: string;
  CellName?: string;
  Cells?: Array<string>;
  ParentReadinessScopes?: Array<string>;
  Tags?: Record<string, string>;
}
export interface GetReadinessCheckRequest {
  ReadinessCheckName: string;
}
export interface GetReadinessCheckResourceStatusRequest {
  MaxResults?: number;
  NextToken?: string;
  ReadinessCheckName: string;
  ResourceIdentifier: string;
}
export interface GetReadinessCheckResourceStatusResponse {
  NextToken?: string;
  Readiness?: Readiness;
  Rules?: Array<RuleResult>;
}
export interface GetReadinessCheckResponse {
  ReadinessCheckArn?: string;
  ReadinessCheckName?: string;
  ResourceSet?: string;
  Tags?: Record<string, string>;
}
export interface GetReadinessCheckStatusRequest {
  MaxResults?: number;
  NextToken?: string;
  ReadinessCheckName: string;
}
export interface GetReadinessCheckStatusResponse {
  Messages?: Array<Message>;
  NextToken?: string;
  Readiness?: Readiness;
  Resources?: Array<ResourceResult>;
}
export interface GetRecoveryGroupReadinessSummaryRequest {
  MaxResults?: number;
  NextToken?: string;
  RecoveryGroupName: string;
}
export interface GetRecoveryGroupReadinessSummaryResponse {
  NextToken?: string;
  Readiness?: Readiness;
  ReadinessChecks?: Array<ReadinessCheckSummary>;
}
export interface GetRecoveryGroupRequest {
  RecoveryGroupName: string;
}
export interface GetRecoveryGroupResponse {
  Cells?: Array<string>;
  RecoveryGroupArn?: string;
  RecoveryGroupName?: string;
  Tags?: Record<string, string>;
}
export interface GetResourceSetRequest {
  ResourceSetName: string;
}
export interface GetResourceSetResponse {
  ResourceSetArn?: string;
  ResourceSetName?: string;
  ResourceSetType?: string;
  Resources?: Array<Resource>;
  Tags?: Record<string, string>;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type LastAuditTimestamp = Date | string;

export interface ListCellsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCellsResponse {
  Cells?: Array<CellOutput>;
  NextToken?: string;
}
export interface ListCrossAccountAuthorizationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCrossAccountAuthorizationsResponse {
  CrossAccountAuthorizations?: Array<string>;
  NextToken?: string;
}
export interface ListReadinessChecksRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListReadinessChecksResponse {
  NextToken?: string;
  ReadinessChecks?: Array<ReadinessCheckOutput>;
}
export interface ListRecoveryGroupsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRecoveryGroupsResponse {
  NextToken?: string;
  RecoveryGroups?: Array<RecoveryGroupOutput>;
}
export interface ListResourceSetsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListResourceSetsResponse {
  NextToken?: string;
  ResourceSets?: Array<ResourceSetOutput>;
}
export interface ListRulesOutput {
  ResourceType: string;
  RuleDescription: string;
  RuleId: string;
}
export interface ListRulesRequest {
  MaxResults?: number;
  NextToken?: string;
  ResourceType?: string;
}
export interface ListRulesResponse {
  NextToken?: string;
  Rules?: Array<ListRulesOutput>;
}
export interface ListTagsForResourcesRequest {
  ResourceArn: string;
}
export interface ListTagsForResourcesResponse {
  Tags?: Record<string, string>;
}
export type MaxResults = number;

export interface Message {
  MessageText?: string;
}
export interface NLBResource {
  Arn?: string;
}
export interface R53ResourceRecord {
  DomainName?: string;
  RecordSetId?: string;
}
export type Readiness = "READY" | "NOT_READY" | "UNKNOWN" | "NOT_AUTHORIZED";
export interface ReadinessCheckOutput {
  ReadinessCheckArn: string;
  ReadinessCheckName?: string;
  ResourceSet: string;
  Tags?: Record<string, string>;
}
export interface ReadinessCheckSummary {
  Readiness?: Readiness;
  ReadinessCheckName?: string;
}
export type ReadinessCheckTimestamp = Date | string;

export interface Recommendation {
  RecommendationText: string;
}
export interface RecoveryGroupOutput {
  Cells: Array<string>;
  RecoveryGroupArn: string;
  RecoveryGroupName: string;
  Tags?: Record<string, string>;
}
export interface Resource {
  ComponentId?: string;
  DnsTargetResource?: DNSTargetResource;
  ReadinessScopes?: Array<string>;
  ResourceArn?: string;
}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceResult {
  ComponentId?: string;
  LastCheckedTimestamp: Date | string;
  Readiness: Readiness;
  ResourceArn?: string;
}
export interface ResourceSetOutput {
  ResourceSetArn: string;
  ResourceSetName: string;
  ResourceSetType: string;
  Resources: Array<Resource>;
  Tags?: Record<string, string>;
}
export interface RuleResult {
  LastCheckedTimestamp: Date | string;
  Messages: Array<Message>;
  Readiness: Readiness;
  RuleId: string;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type Tags = Record<string, string>;
export interface TargetResource {
  NLBResource?: NLBResource;
  R53Resource?: R53ResourceRecord;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateCellRequest {
  CellName: string;
  Cells: Array<string>;
}
export interface UpdateCellResponse {
  CellArn?: string;
  CellName?: string;
  Cells?: Array<string>;
  ParentReadinessScopes?: Array<string>;
  Tags?: Record<string, string>;
}
export interface UpdateReadinessCheckRequest {
  ReadinessCheckName: string;
  ResourceSetName: string;
}
export interface UpdateReadinessCheckResponse {
  ReadinessCheckArn?: string;
  ReadinessCheckName?: string;
  ResourceSet?: string;
  Tags?: Record<string, string>;
}
export interface UpdateRecoveryGroupRequest {
  Cells: Array<string>;
  RecoveryGroupName: string;
}
export interface UpdateRecoveryGroupResponse {
  Cells?: Array<string>;
  RecoveryGroupArn?: string;
  RecoveryGroupName?: string;
  Tags?: Record<string, string>;
}
export interface UpdateResourceSetRequest {
  ResourceSetName: string;
  ResourceSetType: string;
  Resources: Array<Resource>;
}
export interface UpdateResourceSetResponse {
  ResourceSetArn?: string;
  ResourceSetName?: string;
  ResourceSetType?: string;
  Resources?: Array<Resource>;
  Tags?: Record<string, string>;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace CreateCell {
  export type Input = CreateCellRequest;
  export type Output = CreateCellResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCrossAccountAuthorization {
  export type Input = CreateCrossAccountAuthorizationRequest;
  export type Output = CreateCrossAccountAuthorizationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateReadinessCheck {
  export type Input = CreateReadinessCheckRequest;
  export type Output = CreateReadinessCheckResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRecoveryGroup {
  export type Input = CreateRecoveryGroupRequest;
  export type Output = CreateRecoveryGroupResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateResourceSet {
  export type Input = CreateResourceSetRequest;
  export type Output = CreateResourceSetResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCell {
  export type Input = DeleteCellRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCrossAccountAuthorization {
  export type Input = DeleteCrossAccountAuthorizationRequest;
  export type Output = DeleteCrossAccountAuthorizationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteReadinessCheck {
  export type Input = DeleteReadinessCheckRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRecoveryGroup {
  export type Input = DeleteRecoveryGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourceSet {
  export type Input = DeleteResourceSetRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetArchitectureRecommendations {
  export type Input = GetArchitectureRecommendationsRequest;
  export type Output = GetArchitectureRecommendationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCell {
  export type Input = GetCellRequest;
  export type Output = GetCellResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCellReadinessSummary {
  export type Input = GetCellReadinessSummaryRequest;
  export type Output = GetCellReadinessSummaryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReadinessCheck {
  export type Input = GetReadinessCheckRequest;
  export type Output = GetReadinessCheckResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReadinessCheckResourceStatus {
  export type Input = GetReadinessCheckResourceStatusRequest;
  export type Output = GetReadinessCheckResourceStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetReadinessCheckStatus {
  export type Input = GetReadinessCheckStatusRequest;
  export type Output = GetReadinessCheckStatusResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRecoveryGroup {
  export type Input = GetRecoveryGroupRequest;
  export type Output = GetRecoveryGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRecoveryGroupReadinessSummary {
  export type Input = GetRecoveryGroupReadinessSummaryRequest;
  export type Output = GetRecoveryGroupReadinessSummaryResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourceSet {
  export type Input = GetResourceSetRequest;
  export type Output = GetResourceSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCells {
  export type Input = ListCellsRequest;
  export type Output = ListCellsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCrossAccountAuthorizations {
  export type Input = ListCrossAccountAuthorizationsRequest;
  export type Output = ListCrossAccountAuthorizationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListReadinessChecks {
  export type Input = ListReadinessChecksRequest;
  export type Output = ListReadinessChecksResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRecoveryGroups {
  export type Input = ListRecoveryGroupsRequest;
  export type Output = ListRecoveryGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListResourceSets {
  export type Input = ListResourceSetsRequest;
  export type Output = ListResourceSetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRules {
  export type Input = ListRulesRequest;
  export type Output = ListRulesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResources {
  export type Input = ListTagsForResourcesRequest;
  export type Output = ListTagsForResourcesResponse;
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCell {
  export type Input = UpdateCellRequest;
  export type Output = UpdateCellResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateReadinessCheck {
  export type Input = UpdateReadinessCheckRequest;
  export type Output = UpdateReadinessCheckResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRecoveryGroup {
  export type Input = UpdateRecoveryGroupRequest;
  export type Output = UpdateRecoveryGroupResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateResourceSet {
  export type Input = UpdateResourceSetRequest;
  export type Output = UpdateResourceSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

