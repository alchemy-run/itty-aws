import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class GameLift extends AWSServiceClient {
  acceptMatch(
    input: AcceptMatchInput,
  ): Effect.Effect<
    AcceptMatchOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  claimGameServer(
    input: ClaimGameServerInput,
  ): Effect.Effect<
    ClaimGameServerOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | OutOfCapacityException
    | UnauthorizedException
    | CommonAwsError
  >;
  createAlias(
    input: CreateAliasInput,
  ): Effect.Effect<
    CreateAliasOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  createBuild(
    input: CreateBuildInput,
  ): Effect.Effect<
    CreateBuildOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  createContainerFleet(
    input: CreateContainerFleetInput,
  ): Effect.Effect<
    CreateContainerFleetOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  createContainerGroupDefinition(
    input: CreateContainerGroupDefinitionInput,
  ): Effect.Effect<
    CreateContainerGroupDefinitionOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  createFleet(
    input: CreateFleetInput,
  ): Effect.Effect<
    CreateFleetOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | NotReadyException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  createFleetLocations(
    input: CreateFleetLocationsInput,
  ): Effect.Effect<
    CreateFleetLocationsOutput,
    | ConflictException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | NotReadyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  createGameServerGroup(
    input: CreateGameServerGroupInput,
  ): Effect.Effect<
    CreateGameServerGroupOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError
  >;
  createGameSession(
    input: CreateGameSessionInput,
  ): Effect.Effect<
    CreateGameSessionOutput,
    | ConflictException
    | FleetCapacityExceededException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  createGameSessionQueue(
    input: CreateGameSessionQueueInput,
  ): Effect.Effect<
    CreateGameSessionQueueOutput,
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  createLocation(
    input: CreateLocationInput,
  ): Effect.Effect<
    CreateLocationOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  createMatchmakingConfiguration(
    input: CreateMatchmakingConfigurationInput,
  ): Effect.Effect<
    CreateMatchmakingConfigurationOutput,
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  createMatchmakingRuleSet(
    input: CreateMatchmakingRuleSetInput,
  ): Effect.Effect<
    CreateMatchmakingRuleSetOutput,
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  createPlayerSession(
    input: CreatePlayerSessionInput,
  ): Effect.Effect<
    CreatePlayerSessionOutput,
    | GameSessionFullException
    | InternalServiceException
    | InvalidGameSessionStatusException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | CommonAwsError
  >;
  createPlayerSessions(
    input: CreatePlayerSessionsInput,
  ): Effect.Effect<
    CreatePlayerSessionsOutput,
    | GameSessionFullException
    | InternalServiceException
    | InvalidGameSessionStatusException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | CommonAwsError
  >;
  createScript(
    input: CreateScriptInput,
  ): Effect.Effect<
    CreateScriptOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  createVpcPeeringAuthorization(
    input: CreateVpcPeeringAuthorizationInput,
  ): Effect.Effect<
    CreateVpcPeeringAuthorizationOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  createVpcPeeringConnection(
    input: CreateVpcPeeringConnectionInput,
  ): Effect.Effect<
    CreateVpcPeeringConnectionOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteAlias(
    input: DeleteAliasInput,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteBuild(
    input: DeleteBuildInput,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteContainerFleet(
    input: DeleteContainerFleetInput,
  ): Effect.Effect<
    DeleteContainerFleetOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  deleteContainerGroupDefinition(
    input: DeleteContainerGroupDefinitionInput,
  ): Effect.Effect<
    DeleteContainerGroupDefinitionOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  deleteFleet(
    input: DeleteFleetInput,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteFleetLocations(
    input: DeleteFleetLocationsInput,
  ): Effect.Effect<
    DeleteFleetLocationsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  deleteGameServerGroup(
    input: DeleteGameServerGroupInput,
  ): Effect.Effect<
    DeleteGameServerGroupOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteGameSessionQueue(
    input: DeleteGameSessionQueueInput,
  ): Effect.Effect<
    DeleteGameSessionQueueOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteLocation(
    input: DeleteLocationInput,
  ): Effect.Effect<
    DeleteLocationOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteMatchmakingConfiguration(
    input: DeleteMatchmakingConfigurationInput,
  ): Effect.Effect<
    DeleteMatchmakingConfigurationOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  deleteMatchmakingRuleSet(
    input: DeleteMatchmakingRuleSetInput,
  ): Effect.Effect<
    DeleteMatchmakingRuleSetOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  deleteScalingPolicy(
    input: DeleteScalingPolicyInput,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  deleteScript(
    input: DeleteScriptInput,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteVpcPeeringAuthorization(
    input: DeleteVpcPeeringAuthorizationInput,
  ): Effect.Effect<
    DeleteVpcPeeringAuthorizationOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteVpcPeeringConnection(
    input: DeleteVpcPeeringConnectionInput,
  ): Effect.Effect<
    DeleteVpcPeeringConnectionOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deregisterCompute(
    input: DeregisterComputeInput,
  ): Effect.Effect<
    DeregisterComputeOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  deregisterGameServer(
    input: DeregisterGameServerInput,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeAlias(
    input: DescribeAliasInput,
  ): Effect.Effect<
    DescribeAliasOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeBuild(
    input: DescribeBuildInput,
  ): Effect.Effect<
    DescribeBuildOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeCompute(
    input: DescribeComputeInput,
  ): Effect.Effect<
    DescribeComputeOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeContainerFleet(
    input: DescribeContainerFleetInput,
  ): Effect.Effect<
    DescribeContainerFleetOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeContainerGroupDefinition(
    input: DescribeContainerGroupDefinitionInput,
  ): Effect.Effect<
    DescribeContainerGroupDefinitionOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeEC2InstanceLimits(
    input: DescribeEC2InstanceLimitsInput,
  ): Effect.Effect<
    DescribeEC2InstanceLimitsOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeFleetAttributes(
    input: DescribeFleetAttributesInput,
  ): Effect.Effect<
    DescribeFleetAttributesOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeFleetCapacity(
    input: DescribeFleetCapacityInput,
  ): Effect.Effect<
    DescribeFleetCapacityOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeFleetDeployment(
    input: DescribeFleetDeploymentInput,
  ): Effect.Effect<
    DescribeFleetDeploymentOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeFleetEvents(
    input: DescribeFleetEventsInput,
  ): Effect.Effect<
    DescribeFleetEventsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeFleetLocationAttributes(
    input: DescribeFleetLocationAttributesInput,
  ): Effect.Effect<
    DescribeFleetLocationAttributesOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeFleetLocationCapacity(
    input: DescribeFleetLocationCapacityInput,
  ): Effect.Effect<
    DescribeFleetLocationCapacityOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeFleetLocationUtilization(
    input: DescribeFleetLocationUtilizationInput,
  ): Effect.Effect<
    DescribeFleetLocationUtilizationOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeFleetPortSettings(
    input: DescribeFleetPortSettingsInput,
  ): Effect.Effect<
    DescribeFleetPortSettingsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeFleetUtilization(
    input: DescribeFleetUtilizationInput,
  ): Effect.Effect<
    DescribeFleetUtilizationOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeGameServer(
    input: DescribeGameServerInput,
  ): Effect.Effect<
    DescribeGameServerOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeGameServerGroup(
    input: DescribeGameServerGroupInput,
  ): Effect.Effect<
    DescribeGameServerGroupOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeGameServerInstances(
    input: DescribeGameServerInstancesInput,
  ): Effect.Effect<
    DescribeGameServerInstancesOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeGameSessionDetails(
    input: DescribeGameSessionDetailsInput,
  ): Effect.Effect<
    DescribeGameSessionDetailsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeGameSessionPlacement(
    input: DescribeGameSessionPlacementInput,
  ): Effect.Effect<
    DescribeGameSessionPlacementOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeGameSessionQueues(
    input: DescribeGameSessionQueuesInput,
  ): Effect.Effect<
    DescribeGameSessionQueuesOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeGameSessions(
    input: DescribeGameSessionsInput,
  ): Effect.Effect<
    DescribeGameSessionsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeInstances(
    input: DescribeInstancesInput,
  ): Effect.Effect<
    DescribeInstancesOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeMatchmaking(
    input: DescribeMatchmakingInput,
  ): Effect.Effect<
    DescribeMatchmakingOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeMatchmakingConfigurations(
    input: DescribeMatchmakingConfigurationsInput,
  ): Effect.Effect<
    DescribeMatchmakingConfigurationsOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeMatchmakingRuleSets(
    input: DescribeMatchmakingRuleSetsInput,
  ): Effect.Effect<
    DescribeMatchmakingRuleSetsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describePlayerSessions(
    input: DescribePlayerSessionsInput,
  ): Effect.Effect<
    DescribePlayerSessionsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeRuntimeConfiguration(
    input: DescribeRuntimeConfigurationInput,
  ): Effect.Effect<
    DescribeRuntimeConfigurationOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeScalingPolicies(
    input: DescribeScalingPoliciesInput,
  ): Effect.Effect<
    DescribeScalingPoliciesOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  describeScript(
    input: DescribeScriptInput,
  ): Effect.Effect<
    DescribeScriptOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeVpcPeeringAuthorizations(
    input: DescribeVpcPeeringAuthorizationsInput,
  ): Effect.Effect<
    DescribeVpcPeeringAuthorizationsOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeVpcPeeringConnections(
    input: DescribeVpcPeeringConnectionsInput,
  ): Effect.Effect<
    DescribeVpcPeeringConnectionsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getComputeAccess(
    input: GetComputeAccessInput,
  ): Effect.Effect<
    GetComputeAccessOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  getComputeAuthToken(
    input: GetComputeAuthTokenInput,
  ): Effect.Effect<
    GetComputeAuthTokenOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  getGameSessionLogUrl(
    input: GetGameSessionLogUrlInput,
  ): Effect.Effect<
    GetGameSessionLogUrlOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  getInstanceAccess(
    input: GetInstanceAccessInput,
  ): Effect.Effect<
    GetInstanceAccessOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  listAliases(
    input: ListAliasesInput,
  ): Effect.Effect<
    ListAliasesOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
  listBuilds(
    input: ListBuildsInput,
  ): Effect.Effect<
    ListBuildsOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
  listCompute(
    input: ListComputeInput,
  ): Effect.Effect<
    ListComputeOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  listContainerFleets(
    input: ListContainerFleetsInput,
  ): Effect.Effect<
    ListContainerFleetsOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  listContainerGroupDefinitions(
    input: ListContainerGroupDefinitionsInput,
  ): Effect.Effect<
    ListContainerGroupDefinitionsOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  listContainerGroupDefinitionVersions(
    input: ListContainerGroupDefinitionVersionsInput,
  ): Effect.Effect<
    ListContainerGroupDefinitionVersionsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  listFleetDeployments(
    input: ListFleetDeploymentsInput,
  ): Effect.Effect<
    ListFleetDeploymentsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  listFleets(
    input: ListFleetsInput,
  ): Effect.Effect<
    ListFleetsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  listGameServerGroups(
    input: ListGameServerGroupsInput,
  ): Effect.Effect<
    ListGameServerGroupsOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
  listGameServers(
    input: ListGameServersInput,
  ): Effect.Effect<
    ListGameServersOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
  listLocations(
    input: ListLocationsInput,
  ): Effect.Effect<
    ListLocationsOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
  listScripts(
    input: ListScriptsInput,
  ): Effect.Effect<
    ListScriptsOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  putScalingPolicy(
    input: PutScalingPolicyInput,
  ): Effect.Effect<
    PutScalingPolicyOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  registerCompute(
    input: RegisterComputeInput,
  ): Effect.Effect<
    RegisterComputeOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotReadyException
    | UnauthorizedException
    | CommonAwsError
  >;
  registerGameServer(
    input: RegisterGameServerInput,
  ): Effect.Effect<
    RegisterGameServerOutput,
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError
  >;
  requestUploadCredentials(
    input: RequestUploadCredentialsInput,
  ): Effect.Effect<
    RequestUploadCredentialsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  resolveAlias(
    input: ResolveAliasInput,
  ): Effect.Effect<
    ResolveAliasOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | CommonAwsError
  >;
  resumeGameServerGroup(
    input: ResumeGameServerGroupInput,
  ): Effect.Effect<
    ResumeGameServerGroupOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  searchGameSessions(
    input: SearchGameSessionsInput,
  ): Effect.Effect<
    SearchGameSessionsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  startFleetActions(
    input: StartFleetActionsInput,
  ): Effect.Effect<
    StartFleetActionsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  startGameSessionPlacement(
    input: StartGameSessionPlacementInput,
  ): Effect.Effect<
    StartGameSessionPlacementOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  startMatchBackfill(
    input: StartMatchBackfillInput,
  ): Effect.Effect<
    StartMatchBackfillOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  startMatchmaking(
    input: StartMatchmakingInput,
  ): Effect.Effect<
    StartMatchmakingOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  stopFleetActions(
    input: StopFleetActionsInput,
  ): Effect.Effect<
    StopFleetActionsOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  stopGameSessionPlacement(
    input: StopGameSessionPlacementInput,
  ): Effect.Effect<
    StopGameSessionPlacementOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  stopMatchmaking(
    input: StopMatchmakingInput,
  ): Effect.Effect<
    StopMatchmakingOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  suspendGameServerGroup(
    input: SuspendGameServerGroupInput,
  ): Effect.Effect<
    SuspendGameServerGroupOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  terminateGameSession(
    input: TerminateGameSessionInput,
  ): Effect.Effect<
    TerminateGameSessionOutput,
    | InternalServiceException
    | InvalidGameSessionStatusException
    | InvalidRequestException
    | NotFoundException
    | NotReadyException
    | UnauthorizedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  updateAlias(
    input: UpdateAliasInput,
  ): Effect.Effect<
    UpdateAliasOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateBuild(
    input: UpdateBuildInput,
  ): Effect.Effect<
    UpdateBuildOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateContainerFleet(
    input: UpdateContainerFleetInput,
  ): Effect.Effect<
    UpdateContainerFleetOutput,
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | NotReadyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  updateContainerGroupDefinition(
    input: UpdateContainerGroupDefinitionInput,
  ): Effect.Effect<
    UpdateContainerGroupDefinitionOutput,
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  updateFleetAttributes(
    input: UpdateFleetAttributesInput,
  ): Effect.Effect<
    UpdateFleetAttributesOutput,
    | ConflictException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateFleetCapacity(
    input: UpdateFleetCapacityInput,
  ): Effect.Effect<
    UpdateFleetCapacityOutput,
    | ConflictException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  updateFleetPortSettings(
    input: UpdateFleetPortSettingsInput,
  ): Effect.Effect<
    UpdateFleetPortSettingsOutput,
    | ConflictException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateGameServer(
    input: UpdateGameServerInput,
  ): Effect.Effect<
    UpdateGameServerOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateGameServerGroup(
    input: UpdateGameServerGroupInput,
  ): Effect.Effect<
    UpdateGameServerGroupOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateGameSession(
    input: UpdateGameSessionInput,
  ): Effect.Effect<
    UpdateGameSessionOutput,
    | ConflictException
    | InternalServiceException
    | InvalidGameSessionStatusException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateGameSessionQueue(
    input: UpdateGameSessionQueueInput,
  ): Effect.Effect<
    UpdateGameSessionQueueOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateMatchmakingConfiguration(
    input: UpdateMatchmakingConfigurationInput,
  ): Effect.Effect<
    UpdateMatchmakingConfigurationOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError
  >;
  updateRuntimeConfiguration(
    input: UpdateRuntimeConfigurationInput,
  ): Effect.Effect<
    UpdateRuntimeConfigurationOutput,
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateScript(
    input: UpdateScriptInput,
  ): Effect.Effect<
    UpdateScriptOutput,
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  validateMatchmakingRuleSet(
    input: ValidateMatchmakingRuleSetInput,
  ): Effect.Effect<
    ValidateMatchmakingRuleSetOutput,
    | InternalServiceException
    | InvalidRequestException
    | UnsupportedRegionException
    | CommonAwsError
  >;
}

export declare class Gamelift extends GameLift {}

export type AcceptanceType = "ACCEPT" | "REJECT";
export interface AcceptMatchInput {
  TicketId: string;
  PlayerIds: Array<string>;
  AcceptanceType: AcceptanceType;
}
export interface AcceptMatchOutput {}
export interface Alias {
  AliasId?: string;
  Name?: string;
  AliasArn?: string;
  Description?: string;
  RoutingStrategy?: RoutingStrategy;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type AliasArn = string;

export type AliasId = string;

export type AliasIdOrArn = string;

export type AliasList = Array<Alias>;
export type AmazonResourceName = string;

export interface AnywhereConfiguration {
  Cost: string;
}
export type ArnStringModel = string;

export interface AttributeValue {
  S?: string;
  N?: number;
  SL?: Array<string>;
  SDM?: Record<string, number>;
}
export type AutoScalingGroupArn = string;

export interface AwsCredentials {
  AccessKeyId?: string;
  SecretAccessKey?: string;
  SessionToken?: string;
}
export type BackfillMode = "AUTOMATIC" | "MANUAL";
export type BalancingStrategy =
  | "SPOT_ONLY"
  | "SPOT_PREFERRED"
  | "ON_DEMAND_ONLY";
export type BooleanModel = boolean;

export interface Build {
  BuildId?: string;
  BuildArn?: string;
  Name?: string;
  Version?: string;
  Status?: BuildStatus;
  SizeOnDisk?: number;
  OperatingSystem?: OperatingSystem;
  CreationTime?: Date | string;
  ServerSdkVersion?: string;
}
export type BuildArn = string;

export type BuildId = string;

export type BuildIdOrArn = string;

export type BuildList = Array<Build>;
export type BuildStatus = "INITIALIZED" | "READY" | "FAILED";
export interface CertificateConfiguration {
  CertificateType: CertificateType;
}
export type CertificateType = "DISABLED" | "GENERATED";
export interface ClaimFilterOption {
  InstanceStatuses?: Array<FilterInstanceStatus>;
}
export interface ClaimGameServerInput {
  GameServerGroupName: string;
  GameServerId?: string;
  GameServerData?: string;
  FilterOption?: ClaimFilterOption;
}
export interface ClaimGameServerOutput {
  GameServer?: GameServer;
}
export type ComparisonOperatorType =
  | "GreaterThanOrEqualToThreshold"
  | "GreaterThanThreshold"
  | "LessThanThreshold"
  | "LessThanOrEqualToThreshold";
export interface Compute {
  FleetId?: string;
  FleetArn?: string;
  ComputeName?: string;
  ComputeArn?: string;
  IpAddress?: string;
  DnsName?: string;
  ComputeStatus?: ComputeStatus;
  Location?: string;
  CreationTime?: Date | string;
  OperatingSystem?: OperatingSystem;
  Type?: EC2InstanceType;
  GameLiftServiceSdkEndpoint?: string;
  GameLiftAgentEndpoint?: string;
  InstanceId?: string;
  ContainerAttributes?: Array<ContainerAttribute>;
  GameServerContainerGroupDefinitionArn?: string;
}
export type ComputeArn = string;

export type ComputeAuthToken = string;

export type ComputeList = Array<Compute>;
export type ComputeName = string;

export type ComputeNameOrArn = string;

export type ComputeStatus = "PENDING" | "ACTIVE" | "TERMINATING" | "IMPAIRED";
export type ComputeType = "EC2" | "ANYWHERE";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface ConnectionPortRange {
  FromPort: number;
  ToPort: number;
}
export interface ContainerAttribute {
  ContainerName?: string;
  ContainerRuntimeId?: string;
}
export type ContainerAttributes = Array<ContainerAttribute>;
export type ContainerCommandStringList = Array<string>;
export interface ContainerDependency {
  ContainerName: string;
  Condition: ContainerDependencyCondition;
}
export type ContainerDependencyCondition =
  | "START"
  | "COMPLETE"
  | "SUCCESS"
  | "HEALTHY";
export type ContainerDependencyList = Array<ContainerDependency>;
export interface ContainerEnvironment {
  Name: string;
  Value: string;
}
export type ContainerEnvironmentList = Array<ContainerEnvironment>;
export interface ContainerFleet {
  FleetId?: string;
  FleetArn?: string;
  FleetRoleArn?: string;
  GameServerContainerGroupDefinitionName?: string;
  GameServerContainerGroupDefinitionArn?: string;
  PerInstanceContainerGroupDefinitionName?: string;
  PerInstanceContainerGroupDefinitionArn?: string;
  InstanceConnectionPortRange?: ConnectionPortRange;
  InstanceInboundPermissions?: Array<IpPermission>;
  GameServerContainerGroupsPerInstance?: number;
  MaximumGameServerContainerGroupsPerInstance?: number;
  InstanceType?: string;
  BillingType?: ContainerFleetBillingType;
  Description?: string;
  CreationTime?: Date | string;
  MetricGroups?: Array<string>;
  NewGameSessionProtectionPolicy?: ProtectionPolicy;
  GameSessionCreationLimitPolicy?: GameSessionCreationLimitPolicy;
  Status?: ContainerFleetStatus;
  DeploymentDetails?: DeploymentDetails;
  LogConfiguration?: LogConfiguration;
  LocationAttributes?: Array<ContainerFleetLocationAttributes>;
}
export type ContainerFleetBillingType = "ON_DEMAND" | "SPOT";
export type ContainerFleetList = Array<ContainerFleet>;
export interface ContainerFleetLocationAttributes {
  Location?: string;
  Status?: ContainerFleetLocationStatus;
}
export type ContainerFleetLocationAttributesList =
  Array<ContainerFleetLocationAttributes>;
export type ContainerFleetLocationStatus =
  | "PENDING"
  | "CREATING"
  | "CREATED"
  | "ACTIVATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING";
export type ContainerFleetRemoveAttribute =
  "PER_INSTANCE_CONTAINER_GROUP_DEFINITION";
export type ContainerFleetRemoveAttributeList =
  Array<ContainerFleetRemoveAttribute>;
export type ContainerFleetStatus =
  | "PENDING"
  | "CREATING"
  | "CREATED"
  | "ACTIVATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING";
export interface ContainerGroupDefinition {
  ContainerGroupDefinitionArn?: string;
  CreationTime?: Date | string;
  OperatingSystem?: ContainerOperatingSystem;
  Name: string;
  ContainerGroupType?: ContainerGroupType;
  TotalMemoryLimitMebibytes?: number;
  TotalVcpuLimit?: number;
  GameServerContainerDefinition?: GameServerContainerDefinition;
  SupportContainerDefinitions?: Array<SupportContainerDefinition>;
  VersionNumber?: number;
  VersionDescription?: string;
  Status?: ContainerGroupDefinitionStatus;
  StatusReason?: string;
}
export type ContainerGroupDefinitionArn = string;

export type ContainerGroupDefinitionList = Array<ContainerGroupDefinition>;
export type ContainerGroupDefinitionName = string;

export type ContainerGroupDefinitionNameOrArn = string;

export type ContainerGroupDefinitionStatus = "READY" | "COPYING" | "FAILED";
export type ContainerGroupType = "GAME_SERVER" | "PER_INSTANCE";
export interface ContainerHealthCheck {
  Command: Array<string>;
  Interval?: number;
  Retries?: number;
  StartPeriod?: number;
  Timeout?: number;
}
export type ContainerHealthCheckInterval = number;

export type ContainerHealthCheckRetries = number;

export type ContainerHealthCheckStartPeriod = number;

export type ContainerHealthCheckTimeout = number;

export interface ContainerIdentifier {
  ContainerName?: string;
  ContainerRuntimeId?: string;
}
export type ContainerIdentifierList = Array<ContainerIdentifier>;
export type ContainerMemoryLimit = number;

export interface ContainerMountPoint {
  InstancePath: string;
  ContainerPath?: string;
  AccessLevel?: ContainerMountPointAccessLevel;
}
export type ContainerMountPointAccessLevel = "READ_ONLY" | "READ_AND_WRITE";
export type ContainerMountPointList = Array<ContainerMountPoint>;
export type ContainerOperatingSystem = "AMAZON_LINUX_2023";
export type ContainerPathString = string;

export interface ContainerPortConfiguration {
  ContainerPortRanges: Array<ContainerPortRange>;
}
export interface ContainerPortRange {
  FromPort: number;
  ToPort: number;
  Protocol: IpProtocol;
}
export type ContainerPortRangeList = Array<ContainerPortRange>;
export type ContainerTotalMemoryLimit = number;

export type ContainerTotalVcpuLimit = number;

export type ContainerVcpu = number;

export interface CreateAliasInput {
  Name: string;
  Description?: string;
  RoutingStrategy: RoutingStrategy;
  Tags?: Array<Tag>;
}
export interface CreateAliasOutput {
  Alias?: Alias;
}
export interface CreateBuildInput {
  Name?: string;
  Version?: string;
  StorageLocation?: S3Location;
  OperatingSystem?: OperatingSystem;
  Tags?: Array<Tag>;
  ServerSdkVersion?: string;
}
export interface CreateBuildOutput {
  Build?: Build;
  UploadCredentials?: AwsCredentials;
  StorageLocation?: S3Location;
}
export interface CreateContainerFleetInput {
  FleetRoleArn: string;
  Description?: string;
  GameServerContainerGroupDefinitionName?: string;
  PerInstanceContainerGroupDefinitionName?: string;
  InstanceConnectionPortRange?: ConnectionPortRange;
  InstanceInboundPermissions?: Array<IpPermission>;
  GameServerContainerGroupsPerInstance?: number;
  InstanceType?: string;
  BillingType?: ContainerFleetBillingType;
  Locations?: Array<LocationConfiguration>;
  MetricGroups?: Array<string>;
  NewGameSessionProtectionPolicy?: ProtectionPolicy;
  GameSessionCreationLimitPolicy?: GameSessionCreationLimitPolicy;
  LogConfiguration?: LogConfiguration;
  Tags?: Array<Tag>;
}
export interface CreateContainerFleetOutput {
  ContainerFleet?: ContainerFleet;
}
export interface CreateContainerGroupDefinitionInput {
  Name: string;
  ContainerGroupType?: ContainerGroupType;
  TotalMemoryLimitMebibytes: number;
  TotalVcpuLimit: number;
  GameServerContainerDefinition?: GameServerContainerDefinitionInput;
  SupportContainerDefinitions?: Array<SupportContainerDefinitionInput>;
  OperatingSystem: ContainerOperatingSystem;
  VersionDescription?: string;
  Tags?: Array<Tag>;
}
export interface CreateContainerGroupDefinitionOutput {
  ContainerGroupDefinition?: ContainerGroupDefinition;
}
export interface CreateFleetInput {
  Name: string;
  Description?: string;
  BuildId?: string;
  ScriptId?: string;
  ServerLaunchPath?: string;
  ServerLaunchParameters?: string;
  LogPaths?: Array<string>;
  EC2InstanceType?: EC2InstanceType;
  EC2InboundPermissions?: Array<IpPermission>;
  NewGameSessionProtectionPolicy?: ProtectionPolicy;
  RuntimeConfiguration?: RuntimeConfiguration;
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  MetricGroups?: Array<string>;
  PeerVpcAwsAccountId?: string;
  PeerVpcId?: string;
  FleetType?: FleetType;
  InstanceRoleArn?: string;
  CertificateConfiguration?: CertificateConfiguration;
  Locations?: Array<LocationConfiguration>;
  Tags?: Array<Tag>;
  ComputeType?: ComputeType;
  AnywhereConfiguration?: AnywhereConfiguration;
  InstanceRoleCredentialsProvider?: InstanceRoleCredentialsProvider;
}
export interface CreateFleetLocationsInput {
  FleetId: string;
  Locations: Array<LocationConfiguration>;
}
export interface CreateFleetLocationsOutput {
  FleetId?: string;
  FleetArn?: string;
  LocationStates?: Array<LocationState>;
}
export interface CreateFleetOutput {
  FleetAttributes?: FleetAttributes;
  LocationStates?: Array<LocationState>;
}
export interface CreateGameServerGroupInput {
  GameServerGroupName: string;
  RoleArn: string;
  MinSize: number;
  MaxSize: number;
  LaunchTemplate: LaunchTemplateSpecification;
  InstanceDefinitions: Array<InstanceDefinition>;
  AutoScalingPolicy?: GameServerGroupAutoScalingPolicy;
  BalancingStrategy?: BalancingStrategy;
  GameServerProtectionPolicy?: GameServerProtectionPolicy;
  VpcSubnets?: Array<string>;
  Tags?: Array<Tag>;
}
export interface CreateGameServerGroupOutput {
  GameServerGroup?: GameServerGroup;
}
export interface CreateGameSessionInput {
  FleetId?: string;
  AliasId?: string;
  MaximumPlayerSessionCount: number;
  Name?: string;
  GameProperties?: Array<GameProperty>;
  CreatorId?: string;
  GameSessionId?: string;
  IdempotencyToken?: string;
  GameSessionData?: string;
  Location?: string;
}
export interface CreateGameSessionOutput {
  GameSession?: GameSession;
}
export interface CreateGameSessionQueueInput {
  Name: string;
  TimeoutInSeconds?: number;
  PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
  Destinations?: Array<GameSessionQueueDestination>;
  FilterConfiguration?: FilterConfiguration;
  PriorityConfiguration?: PriorityConfiguration;
  CustomEventData?: string;
  NotificationTarget?: string;
  Tags?: Array<Tag>;
}
export interface CreateGameSessionQueueOutput {
  GameSessionQueue?: GameSessionQueue;
}
export interface CreateLocationInput {
  LocationName: string;
  Tags?: Array<Tag>;
}
export interface CreateLocationOutput {
  Location?: LocationModel;
}
export interface CreateMatchmakingConfigurationInput {
  Name: string;
  Description?: string;
  GameSessionQueueArns?: Array<string>;
  RequestTimeoutSeconds: number;
  AcceptanceTimeoutSeconds?: number;
  AcceptanceRequired: boolean;
  RuleSetName: string;
  NotificationTarget?: string;
  AdditionalPlayerCount?: number;
  CustomEventData?: string;
  GameProperties?: Array<GameProperty>;
  GameSessionData?: string;
  BackfillMode?: BackfillMode;
  FlexMatchMode?: FlexMatchMode;
  Tags?: Array<Tag>;
}
export interface CreateMatchmakingConfigurationOutput {
  Configuration?: MatchmakingConfiguration;
}
export interface CreateMatchmakingRuleSetInput {
  Name: string;
  RuleSetBody: string;
  Tags?: Array<Tag>;
}
export interface CreateMatchmakingRuleSetOutput {
  RuleSet: MatchmakingRuleSet;
}
export interface CreatePlayerSessionInput {
  GameSessionId: string;
  PlayerId: string;
  PlayerData?: string;
}
export interface CreatePlayerSessionOutput {
  PlayerSession?: PlayerSession;
}
export interface CreatePlayerSessionsInput {
  GameSessionId: string;
  PlayerIds: Array<string>;
  PlayerDataMap?: Record<string, string>;
}
export interface CreatePlayerSessionsOutput {
  PlayerSessions?: Array<PlayerSession>;
}
export interface CreateScriptInput {
  Name?: string;
  Version?: string;
  StorageLocation?: S3Location;
  ZipFile?: Uint8Array | string;
  Tags?: Array<Tag>;
}
export interface CreateScriptOutput {
  Script?: Script;
}
export interface CreateVpcPeeringAuthorizationInput {
  GameLiftAwsAccountId: string;
  PeerVpcId: string;
}
export interface CreateVpcPeeringAuthorizationOutput {
  VpcPeeringAuthorization?: VpcPeeringAuthorization;
}
export interface CreateVpcPeeringConnectionInput {
  FleetId: string;
  PeerVpcAwsAccountId: string;
  PeerVpcId: string;
}
export interface CreateVpcPeeringConnectionOutput {}
export type CustomEventData = string;

export type CustomInputLocationStringModel = string;

export type CustomLocationNameOrArnModel = string;

export interface DeleteAliasInput {
  AliasId: string;
}
export interface DeleteBuildInput {
  BuildId: string;
}
export interface DeleteContainerFleetInput {
  FleetId: string;
}
export interface DeleteContainerFleetOutput {}
export interface DeleteContainerGroupDefinitionInput {
  Name: string;
  VersionNumber?: number;
  VersionCountToRetain?: number;
}
export interface DeleteContainerGroupDefinitionOutput {}
export interface DeleteFleetInput {
  FleetId: string;
}
export interface DeleteFleetLocationsInput {
  FleetId: string;
  Locations: Array<string>;
}
export interface DeleteFleetLocationsOutput {
  FleetId?: string;
  FleetArn?: string;
  LocationStates?: Array<LocationState>;
}
export interface DeleteGameServerGroupInput {
  GameServerGroupName: string;
  DeleteOption?: GameServerGroupDeleteOption;
}
export interface DeleteGameServerGroupOutput {
  GameServerGroup?: GameServerGroup;
}
export interface DeleteGameSessionQueueInput {
  Name: string;
}
export interface DeleteGameSessionQueueOutput {}
export interface DeleteLocationInput {
  LocationName: string;
}
export interface DeleteLocationOutput {}
export interface DeleteMatchmakingConfigurationInput {
  Name: string;
}
export interface DeleteMatchmakingConfigurationOutput {}
export interface DeleteMatchmakingRuleSetInput {
  Name: string;
}
export interface DeleteMatchmakingRuleSetOutput {}
export interface DeleteScalingPolicyInput {
  Name: string;
  FleetId: string;
}
export interface DeleteScriptInput {
  ScriptId: string;
}
export interface DeleteVpcPeeringAuthorizationInput {
  GameLiftAwsAccountId: string;
  PeerVpcId: string;
}
export interface DeleteVpcPeeringAuthorizationOutput {}
export interface DeleteVpcPeeringConnectionInput {
  FleetId: string;
  VpcPeeringConnectionId: string;
}
export interface DeleteVpcPeeringConnectionOutput {}
export interface DeploymentConfiguration {
  ProtectionStrategy?: DeploymentProtectionStrategy;
  MinimumHealthyPercentage?: number;
  ImpairmentStrategy?: DeploymentImpairmentStrategy;
}
export interface DeploymentDetails {
  LatestDeploymentId?: string;
}
export type DeploymentId = string;

export type DeploymentImpairmentStrategy = "MAINTAIN" | "ROLLBACK";
export type DeploymentProtectionStrategy =
  | "WITH_PROTECTION"
  | "IGNORE_PROTECTION";
export type DeploymentStatus =
  | "IN_PROGRESS"
  | "IMPAIRED"
  | "COMPLETE"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_COMPLETE"
  | "CANCELLED"
  | "PENDING";
export interface DeregisterComputeInput {
  FleetId: string;
  ComputeName: string;
}
export interface DeregisterComputeOutput {}
export interface DeregisterGameServerInput {
  GameServerGroupName: string;
  GameServerId: string;
}
export interface DescribeAliasInput {
  AliasId: string;
}
export interface DescribeAliasOutput {
  Alias?: Alias;
}
export interface DescribeBuildInput {
  BuildId: string;
}
export interface DescribeBuildOutput {
  Build?: Build;
}
export interface DescribeComputeInput {
  FleetId: string;
  ComputeName: string;
}
export interface DescribeComputeOutput {
  Compute?: Compute;
}
export interface DescribeContainerFleetInput {
  FleetId: string;
}
export interface DescribeContainerFleetOutput {
  ContainerFleet?: ContainerFleet;
}
export interface DescribeContainerGroupDefinitionInput {
  Name: string;
  VersionNumber?: number;
}
export interface DescribeContainerGroupDefinitionOutput {
  ContainerGroupDefinition?: ContainerGroupDefinition;
}
export interface DescribeEC2InstanceLimitsInput {
  EC2InstanceType?: EC2InstanceType;
  Location?: string;
}
export interface DescribeEC2InstanceLimitsOutput {
  EC2InstanceLimits?: Array<EC2InstanceLimit>;
}
export interface DescribeFleetAttributesInput {
  FleetIds?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeFleetAttributesOutput {
  FleetAttributes?: Array<FleetAttributes>;
  NextToken?: string;
}
export interface DescribeFleetCapacityInput {
  FleetIds?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeFleetCapacityOutput {
  FleetCapacity?: Array<FleetCapacity>;
  NextToken?: string;
}
export interface DescribeFleetDeploymentInput {
  FleetId: string;
  DeploymentId?: string;
}
export interface DescribeFleetDeploymentOutput {
  FleetDeployment?: FleetDeployment;
  LocationalDeployments?: Record<string, LocationalDeployment>;
}
export interface DescribeFleetEventsInput {
  FleetId: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeFleetEventsOutput {
  Events?: Array<Event>;
  NextToken?: string;
}
export interface DescribeFleetLocationAttributesInput {
  FleetId: string;
  Locations?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeFleetLocationAttributesOutput {
  FleetId?: string;
  FleetArn?: string;
  LocationAttributes?: Array<LocationAttributes>;
  NextToken?: string;
}
export interface DescribeFleetLocationCapacityInput {
  FleetId: string;
  Location: string;
}
export interface DescribeFleetLocationCapacityOutput {
  FleetCapacity?: FleetCapacity;
}
export interface DescribeFleetLocationUtilizationInput {
  FleetId: string;
  Location: string;
}
export interface DescribeFleetLocationUtilizationOutput {
  FleetUtilization?: FleetUtilization;
}
export interface DescribeFleetPortSettingsInput {
  FleetId: string;
  Location?: string;
}
export interface DescribeFleetPortSettingsOutput {
  FleetId?: string;
  FleetArn?: string;
  InboundPermissions?: Array<IpPermission>;
  UpdateStatus?: LocationUpdateStatus;
  Location?: string;
}
export interface DescribeFleetUtilizationInput {
  FleetIds?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeFleetUtilizationOutput {
  FleetUtilization?: Array<FleetUtilization>;
  NextToken?: string;
}
export interface DescribeGameServerGroupInput {
  GameServerGroupName: string;
}
export interface DescribeGameServerGroupOutput {
  GameServerGroup?: GameServerGroup;
}
export interface DescribeGameServerInput {
  GameServerGroupName: string;
  GameServerId: string;
}
export interface DescribeGameServerInstancesInput {
  GameServerGroupName: string;
  InstanceIds?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeGameServerInstancesOutput {
  GameServerInstances?: Array<GameServerInstance>;
  NextToken?: string;
}
export interface DescribeGameServerOutput {
  GameServer?: GameServer;
}
export interface DescribeGameSessionDetailsInput {
  FleetId?: string;
  GameSessionId?: string;
  AliasId?: string;
  Location?: string;
  StatusFilter?: string;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeGameSessionDetailsOutput {
  GameSessionDetails?: Array<GameSessionDetail>;
  NextToken?: string;
}
export interface DescribeGameSessionPlacementInput {
  PlacementId: string;
}
export interface DescribeGameSessionPlacementOutput {
  GameSessionPlacement?: GameSessionPlacement;
}
export interface DescribeGameSessionQueuesInput {
  Names?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeGameSessionQueuesOutput {
  GameSessionQueues?: Array<GameSessionQueue>;
  NextToken?: string;
}
export interface DescribeGameSessionsInput {
  FleetId?: string;
  GameSessionId?: string;
  AliasId?: string;
  Location?: string;
  StatusFilter?: string;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeGameSessionsOutput {
  GameSessions?: Array<GameSession>;
  NextToken?: string;
}
export interface DescribeInstancesInput {
  FleetId: string;
  InstanceId?: string;
  Limit?: number;
  NextToken?: string;
  Location?: string;
}
export interface DescribeInstancesOutput {
  Instances?: Array<Instance>;
  NextToken?: string;
}
export interface DescribeMatchmakingConfigurationsInput {
  Names?: Array<string>;
  RuleSetName?: string;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeMatchmakingConfigurationsOutput {
  Configurations?: Array<MatchmakingConfiguration>;
  NextToken?: string;
}
export interface DescribeMatchmakingInput {
  TicketIds: Array<string>;
}
export interface DescribeMatchmakingOutput {
  TicketList?: Array<MatchmakingTicket>;
}
export interface DescribeMatchmakingRuleSetsInput {
  Names?: Array<string>;
  Limit?: number;
  NextToken?: string;
}
export interface DescribeMatchmakingRuleSetsOutput {
  RuleSets: Array<MatchmakingRuleSet>;
  NextToken?: string;
}
export interface DescribePlayerSessionsInput {
  GameSessionId?: string;
  PlayerId?: string;
  PlayerSessionId?: string;
  PlayerSessionStatusFilter?: string;
  Limit?: number;
  NextToken?: string;
}
export interface DescribePlayerSessionsOutput {
  PlayerSessions?: Array<PlayerSession>;
  NextToken?: string;
}
export interface DescribeRuntimeConfigurationInput {
  FleetId: string;
}
export interface DescribeRuntimeConfigurationOutput {
  RuntimeConfiguration?: RuntimeConfiguration;
}
export interface DescribeScalingPoliciesInput {
  FleetId: string;
  StatusFilter?: ScalingStatusType;
  Limit?: number;
  NextToken?: string;
  Location?: string;
}
export interface DescribeScalingPoliciesOutput {
  ScalingPolicies?: Array<ScalingPolicy>;
  NextToken?: string;
}
export interface DescribeScriptInput {
  ScriptId: string;
}
export interface DescribeScriptOutput {
  Script?: Script;
}
export interface DescribeVpcPeeringAuthorizationsInput {}
export interface DescribeVpcPeeringAuthorizationsOutput {
  VpcPeeringAuthorizations?: Array<VpcPeeringAuthorization>;
}
export interface DescribeVpcPeeringConnectionsInput {
  FleetId?: string;
}
export interface DescribeVpcPeeringConnectionsOutput {
  VpcPeeringConnections?: Array<VpcPeeringConnection>;
}
export interface DesiredPlayerSession {
  PlayerId?: string;
  PlayerData?: string;
}
export type DesiredPlayerSessionList = Array<DesiredPlayerSession>;
export type DnsName = string;

export type DnsNameInput = string;

export type Double = number;

export type DoubleObject = number;

export interface EC2InstanceCounts {
  DESIRED?: number;
  MINIMUM?: number;
  MAXIMUM?: number;
  PENDING?: number;
  ACTIVE?: number;
  IDLE?: number;
  TERMINATING?: number;
}
export interface EC2InstanceLimit {
  EC2InstanceType?: EC2InstanceType;
  CurrentInstances?: number;
  InstanceLimit?: number;
  Location?: string;
}
export type EC2InstanceLimitList = Array<EC2InstanceLimit>;
export type EC2InstanceType =
  | "t2.micro"
  | "t2.small"
  | "t2.medium"
  | "t2.large"
  | "c3.large"
  | "c3.xlarge"
  | "c3.2xlarge"
  | "c3.4xlarge"
  | "c3.8xlarge"
  | "c4.large"
  | "c4.xlarge"
  | "c4.2xlarge"
  | "c4.4xlarge"
  | "c4.8xlarge"
  | "c5.large"
  | "c5.xlarge"
  | "c5.2xlarge"
  | "c5.4xlarge"
  | "c5.9xlarge"
  | "c5.12xlarge"
  | "c5.18xlarge"
  | "c5.24xlarge"
  | "c5a.large"
  | "c5a.xlarge"
  | "c5a.2xlarge"
  | "c5a.4xlarge"
  | "c5a.8xlarge"
  | "c5a.12xlarge"
  | "c5a.16xlarge"
  | "c5a.24xlarge"
  | "r3.large"
  | "r3.xlarge"
  | "r3.2xlarge"
  | "r3.4xlarge"
  | "r3.8xlarge"
  | "r4.large"
  | "r4.xlarge"
  | "r4.2xlarge"
  | "r4.4xlarge"
  | "r4.8xlarge"
  | "r4.16xlarge"
  | "r5.large"
  | "r5.xlarge"
  | "r5.2xlarge"
  | "r5.4xlarge"
  | "r5.8xlarge"
  | "r5.12xlarge"
  | "r5.16xlarge"
  | "r5.24xlarge"
  | "r5a.large"
  | "r5a.xlarge"
  | "r5a.2xlarge"
  | "r5a.4xlarge"
  | "r5a.8xlarge"
  | "r5a.12xlarge"
  | "r5a.16xlarge"
  | "r5a.24xlarge"
  | "m3.medium"
  | "m3.large"
  | "m3.xlarge"
  | "m3.2xlarge"
  | "m4.large"
  | "m4.xlarge"
  | "m4.2xlarge"
  | "m4.4xlarge"
  | "m4.10xlarge"
  | "m5.large"
  | "m5.xlarge"
  | "m5.2xlarge"
  | "m5.4xlarge"
  | "m5.8xlarge"
  | "m5.12xlarge"
  | "m5.16xlarge"
  | "m5.24xlarge"
  | "m5a.large"
  | "m5a.xlarge"
  | "m5a.2xlarge"
  | "m5a.4xlarge"
  | "m5a.8xlarge"
  | "m5a.12xlarge"
  | "m5a.16xlarge"
  | "m5a.24xlarge"
  | "c5d.large"
  | "c5d.xlarge"
  | "c5d.2xlarge"
  | "c5d.4xlarge"
  | "c5d.9xlarge"
  | "c5d.12xlarge"
  | "c5d.18xlarge"
  | "c5d.24xlarge"
  | "c6a.large"
  | "c6a.xlarge"
  | "c6a.2xlarge"
  | "c6a.4xlarge"
  | "c6a.8xlarge"
  | "c6a.12xlarge"
  | "c6a.16xlarge"
  | "c6a.24xlarge"
  | "c6i.large"
  | "c6i.xlarge"
  | "c6i.2xlarge"
  | "c6i.4xlarge"
  | "c6i.8xlarge"
  | "c6i.12xlarge"
  | "c6i.16xlarge"
  | "c6i.24xlarge"
  | "r5d.large"
  | "r5d.xlarge"
  | "r5d.2xlarge"
  | "r5d.4xlarge"
  | "r5d.8xlarge"
  | "r5d.12xlarge"
  | "r5d.16xlarge"
  | "r5d.24xlarge"
  | "m6g.medium"
  | "m6g.large"
  | "m6g.xlarge"
  | "m6g.2xlarge"
  | "m6g.4xlarge"
  | "m6g.8xlarge"
  | "m6g.12xlarge"
  | "m6g.16xlarge"
  | "c6g.medium"
  | "c6g.large"
  | "c6g.xlarge"
  | "c6g.2xlarge"
  | "c6g.4xlarge"
  | "c6g.8xlarge"
  | "c6g.12xlarge"
  | "c6g.16xlarge"
  | "r6g.medium"
  | "r6g.large"
  | "r6g.xlarge"
  | "r6g.2xlarge"
  | "r6g.4xlarge"
  | "r6g.8xlarge"
  | "r6g.12xlarge"
  | "r6g.16xlarge"
  | "c6gn.medium"
  | "c6gn.large"
  | "c6gn.xlarge"
  | "c6gn.2xlarge"
  | "c6gn.4xlarge"
  | "c6gn.8xlarge"
  | "c6gn.12xlarge"
  | "c6gn.16xlarge"
  | "c7g.medium"
  | "c7g.large"
  | "c7g.xlarge"
  | "c7g.2xlarge"
  | "c7g.4xlarge"
  | "c7g.8xlarge"
  | "c7g.12xlarge"
  | "c7g.16xlarge"
  | "r7g.medium"
  | "r7g.large"
  | "r7g.xlarge"
  | "r7g.2xlarge"
  | "r7g.4xlarge"
  | "r7g.8xlarge"
  | "r7g.12xlarge"
  | "r7g.16xlarge"
  | "m7g.medium"
  | "m7g.large"
  | "m7g.xlarge"
  | "m7g.2xlarge"
  | "m7g.4xlarge"
  | "m7g.8xlarge"
  | "m7g.12xlarge"
  | "m7g.16xlarge"
  | "g5g.xlarge"
  | "g5g.2xlarge"
  | "g5g.4xlarge"
  | "g5g.8xlarge"
  | "g5g.16xlarge"
  | "r6i.large"
  | "r6i.xlarge"
  | "r6i.2xlarge"
  | "r6i.4xlarge"
  | "r6i.8xlarge"
  | "r6i.12xlarge"
  | "r6i.16xlarge"
  | "c6gd.medium"
  | "c6gd.large"
  | "c6gd.xlarge"
  | "c6gd.2xlarge"
  | "c6gd.4xlarge"
  | "c6gd.8xlarge"
  | "c6gd.12xlarge"
  | "c6gd.16xlarge"
  | "c6in.large"
  | "c6in.xlarge"
  | "c6in.2xlarge"
  | "c6in.4xlarge"
  | "c6in.8xlarge"
  | "c6in.12xlarge"
  | "c6in.16xlarge"
  | "c7a.medium"
  | "c7a.large"
  | "c7a.xlarge"
  | "c7a.2xlarge"
  | "c7a.4xlarge"
  | "c7a.8xlarge"
  | "c7a.12xlarge"
  | "c7a.16xlarge"
  | "c7gd.medium"
  | "c7gd.large"
  | "c7gd.xlarge"
  | "c7gd.2xlarge"
  | "c7gd.4xlarge"
  | "c7gd.8xlarge"
  | "c7gd.12xlarge"
  | "c7gd.16xlarge"
  | "c7gn.medium"
  | "c7gn.large"
  | "c7gn.xlarge"
  | "c7gn.2xlarge"
  | "c7gn.4xlarge"
  | "c7gn.8xlarge"
  | "c7gn.12xlarge"
  | "c7gn.16xlarge"
  | "c7i.large"
  | "c7i.xlarge"
  | "c7i.2xlarge"
  | "c7i.4xlarge"
  | "c7i.8xlarge"
  | "c7i.12xlarge"
  | "c7i.16xlarge"
  | "m6a.large"
  | "m6a.xlarge"
  | "m6a.2xlarge"
  | "m6a.4xlarge"
  | "m6a.8xlarge"
  | "m6a.12xlarge"
  | "m6a.16xlarge"
  | "m6gd.medium"
  | "m6gd.large"
  | "m6gd.xlarge"
  | "m6gd.2xlarge"
  | "m6gd.4xlarge"
  | "m6gd.8xlarge"
  | "m6gd.12xlarge"
  | "m6gd.16xlarge"
  | "m6i.large"
  | "m6i.xlarge"
  | "m6i.2xlarge"
  | "m6i.4xlarge"
  | "m6i.8xlarge"
  | "m6i.12xlarge"
  | "m6i.16xlarge"
  | "m7a.medium"
  | "m7a.large"
  | "m7a.xlarge"
  | "m7a.2xlarge"
  | "m7a.4xlarge"
  | "m7a.8xlarge"
  | "m7a.12xlarge"
  | "m7a.16xlarge"
  | "m7gd.medium"
  | "m7gd.large"
  | "m7gd.xlarge"
  | "m7gd.2xlarge"
  | "m7gd.4xlarge"
  | "m7gd.8xlarge"
  | "m7gd.12xlarge"
  | "m7gd.16xlarge"
  | "m7i.large"
  | "m7i.xlarge"
  | "m7i.2xlarge"
  | "m7i.4xlarge"
  | "m7i.8xlarge"
  | "m7i.12xlarge"
  | "m7i.16xlarge"
  | "r6gd.medium"
  | "r6gd.large"
  | "r6gd.xlarge"
  | "r6gd.2xlarge"
  | "r6gd.4xlarge"
  | "r6gd.8xlarge"
  | "r6gd.12xlarge"
  | "r6gd.16xlarge"
  | "r7a.medium"
  | "r7a.large"
  | "r7a.xlarge"
  | "r7a.2xlarge"
  | "r7a.4xlarge"
  | "r7a.8xlarge"
  | "r7a.12xlarge"
  | "r7a.16xlarge"
  | "r7gd.medium"
  | "r7gd.large"
  | "r7gd.xlarge"
  | "r7gd.2xlarge"
  | "r7gd.4xlarge"
  | "r7gd.8xlarge"
  | "r7gd.12xlarge"
  | "r7gd.16xlarge"
  | "r7i.large"
  | "r7i.xlarge"
  | "r7i.2xlarge"
  | "r7i.4xlarge"
  | "r7i.8xlarge"
  | "r7i.12xlarge"
  | "r7i.16xlarge"
  | "r7i.24xlarge"
  | "r7i.48xlarge"
  | "c5ad.large"
  | "c5ad.xlarge"
  | "c5ad.2xlarge"
  | "c5ad.4xlarge"
  | "c5ad.8xlarge"
  | "c5ad.12xlarge"
  | "c5ad.16xlarge"
  | "c5ad.24xlarge"
  | "c5n.large"
  | "c5n.xlarge"
  | "c5n.2xlarge"
  | "c5n.4xlarge"
  | "c5n.9xlarge"
  | "c5n.18xlarge"
  | "r5ad.large"
  | "r5ad.xlarge"
  | "r5ad.2xlarge"
  | "r5ad.4xlarge"
  | "r5ad.8xlarge"
  | "r5ad.12xlarge"
  | "r5ad.16xlarge"
  | "r5ad.24xlarge"
  | "c6id.large"
  | "c6id.xlarge"
  | "c6id.2xlarge"
  | "c6id.4xlarge"
  | "c6id.8xlarge"
  | "c6id.12xlarge"
  | "c6id.16xlarge"
  | "c6id.24xlarge"
  | "c6id.32xlarge"
  | "c8g.medium"
  | "c8g.large"
  | "c8g.xlarge"
  | "c8g.2xlarge"
  | "c8g.4xlarge"
  | "c8g.8xlarge"
  | "c8g.12xlarge"
  | "c8g.16xlarge"
  | "c8g.24xlarge"
  | "c8g.48xlarge"
  | "m5ad.large"
  | "m5ad.xlarge"
  | "m5ad.2xlarge"
  | "m5ad.4xlarge"
  | "m5ad.8xlarge"
  | "m5ad.12xlarge"
  | "m5ad.16xlarge"
  | "m5ad.24xlarge"
  | "m5d.large"
  | "m5d.xlarge"
  | "m5d.2xlarge"
  | "m5d.4xlarge"
  | "m5d.8xlarge"
  | "m5d.12xlarge"
  | "m5d.16xlarge"
  | "m5d.24xlarge"
  | "m5dn.large"
  | "m5dn.xlarge"
  | "m5dn.2xlarge"
  | "m5dn.4xlarge"
  | "m5dn.8xlarge"
  | "m5dn.12xlarge"
  | "m5dn.16xlarge"
  | "m5dn.24xlarge"
  | "m5n.large"
  | "m5n.xlarge"
  | "m5n.2xlarge"
  | "m5n.4xlarge"
  | "m5n.8xlarge"
  | "m5n.12xlarge"
  | "m5n.16xlarge"
  | "m5n.24xlarge"
  | "m6id.large"
  | "m6id.xlarge"
  | "m6id.2xlarge"
  | "m6id.4xlarge"
  | "m6id.8xlarge"
  | "m6id.12xlarge"
  | "m6id.16xlarge"
  | "m6id.24xlarge"
  | "m6id.32xlarge"
  | "m6idn.large"
  | "m6idn.xlarge"
  | "m6idn.2xlarge"
  | "m6idn.4xlarge"
  | "m6idn.8xlarge"
  | "m6idn.12xlarge"
  | "m6idn.16xlarge"
  | "m6idn.24xlarge"
  | "m6idn.32xlarge"
  | "m6in.large"
  | "m6in.xlarge"
  | "m6in.2xlarge"
  | "m6in.4xlarge"
  | "m6in.8xlarge"
  | "m6in.12xlarge"
  | "m6in.16xlarge"
  | "m6in.24xlarge"
  | "m6in.32xlarge"
  | "m8g.medium"
  | "m8g.large"
  | "m8g.xlarge"
  | "m8g.2xlarge"
  | "m8g.4xlarge"
  | "m8g.8xlarge"
  | "m8g.12xlarge"
  | "m8g.16xlarge"
  | "m8g.24xlarge"
  | "m8g.48xlarge"
  | "r5dn.large"
  | "r5dn.xlarge"
  | "r5dn.2xlarge"
  | "r5dn.4xlarge"
  | "r5dn.8xlarge"
  | "r5dn.12xlarge"
  | "r5dn.16xlarge"
  | "r5dn.24xlarge"
  | "r5n.large"
  | "r5n.xlarge"
  | "r5n.2xlarge"
  | "r5n.4xlarge"
  | "r5n.8xlarge"
  | "r5n.12xlarge"
  | "r5n.16xlarge"
  | "r5n.24xlarge"
  | "r6a.large"
  | "r6a.xlarge"
  | "r6a.2xlarge"
  | "r6a.4xlarge"
  | "r6a.8xlarge"
  | "r6a.12xlarge"
  | "r6a.16xlarge"
  | "r6a.24xlarge"
  | "r6a.32xlarge"
  | "r6a.48xlarge"
  | "r6id.large"
  | "r6id.xlarge"
  | "r6id.2xlarge"
  | "r6id.4xlarge"
  | "r6id.8xlarge"
  | "r6id.12xlarge"
  | "r6id.16xlarge"
  | "r6id.24xlarge"
  | "r6id.32xlarge"
  | "r6idn.large"
  | "r6idn.xlarge"
  | "r6idn.2xlarge"
  | "r6idn.4xlarge"
  | "r6idn.8xlarge"
  | "r6idn.12xlarge"
  | "r6idn.16xlarge"
  | "r6idn.24xlarge"
  | "r6idn.32xlarge"
  | "r6in.large"
  | "r6in.xlarge"
  | "r6in.2xlarge"
  | "r6in.4xlarge"
  | "r6in.8xlarge"
  | "r6in.12xlarge"
  | "r6in.16xlarge"
  | "r6in.24xlarge"
  | "r6in.32xlarge"
  | "r8g.medium"
  | "r8g.large"
  | "r8g.xlarge"
  | "r8g.2xlarge"
  | "r8g.4xlarge"
  | "r8g.8xlarge"
  | "r8g.12xlarge"
  | "r8g.16xlarge"
  | "r8g.24xlarge"
  | "r8g.48xlarge"
  | "m4.16xlarge"
  | "c6a.32xlarge"
  | "c6a.48xlarge"
  | "c6i.32xlarge"
  | "r6i.24xlarge"
  | "r6i.32xlarge"
  | "c6in.24xlarge"
  | "c6in.32xlarge"
  | "c7a.24xlarge"
  | "c7a.32xlarge"
  | "c7a.48xlarge"
  | "c7i.24xlarge"
  | "c7i.48xlarge"
  | "m6a.24xlarge"
  | "m6a.32xlarge"
  | "m6a.48xlarge"
  | "m6i.24xlarge"
  | "m6i.32xlarge"
  | "m7a.24xlarge"
  | "m7a.32xlarge"
  | "m7a.48xlarge"
  | "m7i.24xlarge"
  | "m7i.48xlarge"
  | "r7a.24xlarge"
  | "r7a.32xlarge"
  | "r7a.48xlarge";
export interface Event {
  EventId?: string;
  ResourceId?: string;
  EventCode?: EventCode;
  Message?: string;
  EventTime?: Date | string;
  PreSignedLogUrl?: string;
  Count?: number;
}
export type EventCode =
  | "GENERIC_EVENT"
  | "FLEET_CREATED"
  | "FLEET_DELETED"
  | "FLEET_SCALING_EVENT"
  | "FLEET_STATE_DOWNLOADING"
  | "FLEET_STATE_VALIDATING"
  | "FLEET_STATE_BUILDING"
  | "FLEET_STATE_ACTIVATING"
  | "FLEET_STATE_ACTIVE"
  | "FLEET_STATE_ERROR"
  | "FLEET_STATE_PENDING"
  | "FLEET_STATE_CREATING"
  | "FLEET_STATE_CREATED"
  | "FLEET_STATE_UPDATING"
  | "FLEET_INITIALIZATION_FAILED"
  | "FLEET_BINARY_DOWNLOAD_FAILED"
  | "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND"
  | "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE"
  | "FLEET_VALIDATION_TIMED_OUT"
  | "FLEET_ACTIVATION_FAILED"
  | "FLEET_ACTIVATION_FAILED_NO_INSTANCES"
  | "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED"
  | "SERVER_PROCESS_INVALID_PATH"
  | "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT"
  | "SERVER_PROCESS_PROCESS_READY_TIMEOUT"
  | "SERVER_PROCESS_CRASHED"
  | "SERVER_PROCESS_TERMINATED_UNHEALTHY"
  | "SERVER_PROCESS_FORCE_TERMINATED"
  | "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT"
  | "SERVER_PROCESS_SDK_INITIALIZATION_FAILED"
  | "SERVER_PROCESS_MISCONFIGURED_CONTAINER_PORT"
  | "GAME_SESSION_ACTIVATION_TIMEOUT"
  | "FLEET_CREATION_EXTRACTING_BUILD"
  | "FLEET_CREATION_RUNNING_INSTALLER"
  | "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG"
  | "FLEET_VPC_PEERING_SUCCEEDED"
  | "FLEET_VPC_PEERING_FAILED"
  | "FLEET_VPC_PEERING_DELETED"
  | "INSTANCE_INTERRUPTED"
  | "INSTANCE_RECYCLED"
  | "INSTANCE_REPLACED_UNHEALTHY"
  | "FLEET_CREATION_COMPLETED_INSTALLER"
  | "FLEET_CREATION_FAILED_INSTALLER"
  | "COMPUTE_LOG_UPLOAD_FAILED"
  | "GAME_SERVER_CONTAINER_GROUP_CRASHED"
  | "PER_INSTANCE_CONTAINER_GROUP_CRASHED"
  | "GAME_SERVER_CONTAINER_GROUP_REPLACED_UNHEALTHY"
  | "LOCATION_STATE_PENDING"
  | "LOCATION_STATE_CREATING"
  | "LOCATION_STATE_CREATED"
  | "LOCATION_STATE_ACTIVATING"
  | "LOCATION_STATE_ACTIVE"
  | "LOCATION_STATE_UPDATING"
  | "LOCATION_STATE_ERROR"
  | "LOCATION_STATE_DELETING"
  | "LOCATION_STATE_DELETED";
export type EventCount = number;

export type EventList = Array<Event>;
export interface FilterConfiguration {
  AllowedLocations?: Array<string>;
}
export type FilterInstanceStatus = "ACTIVE" | "DRAINING";
export type FilterInstanceStatuses = Array<FilterInstanceStatus>;
export type FleetAction = "AUTO_SCALING";
export type FleetActionList = Array<FleetAction>;
export type FleetArn = string;

export interface FleetAttributes {
  FleetId?: string;
  FleetArn?: string;
  FleetType?: FleetType;
  InstanceType?: EC2InstanceType;
  Description?: string;
  Name?: string;
  CreationTime?: Date | string;
  TerminationTime?: Date | string;
  Status?: FleetStatus;
  BuildId?: string;
  BuildArn?: string;
  ScriptId?: string;
  ScriptArn?: string;
  ServerLaunchPath?: string;
  ServerLaunchParameters?: string;
  LogPaths?: Array<string>;
  NewGameSessionProtectionPolicy?: ProtectionPolicy;
  OperatingSystem?: OperatingSystem;
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  MetricGroups?: Array<string>;
  StoppedActions?: Array<FleetAction>;
  InstanceRoleArn?: string;
  CertificateConfiguration?: CertificateConfiguration;
  ComputeType?: ComputeType;
  AnywhereConfiguration?: AnywhereConfiguration;
  InstanceRoleCredentialsProvider?: InstanceRoleCredentialsProvider;
}
export type FleetAttributesList = Array<FleetAttributes>;
export type FleetBinaryArn = string;

export interface FleetCapacity {
  FleetId?: string;
  FleetArn?: string;
  InstanceType?: EC2InstanceType;
  InstanceCounts?: EC2InstanceCounts;
  Location?: string;
  GameServerContainerGroupCounts?: GameServerContainerGroupCounts;
}
export declare class FleetCapacityExceededException extends EffectData.TaggedError(
  "FleetCapacityExceededException",
)<{
  readonly Message?: string;
}> {}
export type FleetCapacityList = Array<FleetCapacity>;
export interface FleetDeployment {
  DeploymentId?: string;
  FleetId?: string;
  GameServerBinaryArn?: string;
  RollbackGameServerBinaryArn?: string;
  PerInstanceBinaryArn?: string;
  RollbackPerInstanceBinaryArn?: string;
  DeploymentStatus?: DeploymentStatus;
  DeploymentConfiguration?: DeploymentConfiguration;
  CreationTime?: Date | string;
}
export type FleetDeployments = Array<FleetDeployment>;
export type FleetId = string;

export type FleetIdList = Array<string>;
export type FleetIdOrArn = string;

export type FleetIdOrArnList = Array<string>;
export type FleetStatus =
  | "NEW"
  | "DOWNLOADING"
  | "VALIDATING"
  | "BUILDING"
  | "ACTIVATING"
  | "ACTIVE"
  | "DELETING"
  | "ERROR"
  | "TERMINATED"
  | "NOT_FOUND";
export type FleetType = "ON_DEMAND" | "SPOT";
export interface FleetUtilization {
  FleetId?: string;
  FleetArn?: string;
  ActiveServerProcessCount?: number;
  ActiveGameSessionCount?: number;
  CurrentPlayerSessionCount?: number;
  MaximumPlayerSessionCount?: number;
  Location?: string;
}
export type FleetUtilizationList = Array<FleetUtilization>;
export type FlexMatchMode = "STANDALONE" | "WITH_QUEUE";
export type Float = number;

export type FreeText = string;

export type GameLiftAgentEndpointOutput = string;

export type GameLiftServiceSdkEndpointOutput = string;

export interface GameProperty {
  Key: string;
  Value: string;
}
export type GamePropertyKey = string;

export type GamePropertyList = Array<GameProperty>;
export type GamePropertyValue = string;

export interface GameServer {
  GameServerGroupName?: string;
  GameServerGroupArn?: string;
  GameServerId?: string;
  InstanceId?: string;
  ConnectionInfo?: string;
  GameServerData?: string;
  ClaimStatus?: GameServerClaimStatus;
  UtilizationStatus?: GameServerUtilizationStatus;
  RegistrationTime?: Date | string;
  LastClaimTime?: Date | string;
  LastHealthCheckTime?: Date | string;
}
export type GameServerClaimStatus = "CLAIMED";
export type GameServerConnectionInfo = string;

export interface GameServerContainerDefinition {
  ContainerName?: string;
  DependsOn?: Array<ContainerDependency>;
  MountPoints?: Array<ContainerMountPoint>;
  EnvironmentOverride?: Array<ContainerEnvironment>;
  ImageUri?: string;
  PortConfiguration?: ContainerPortConfiguration;
  ResolvedImageDigest?: string;
  ServerSdkVersion?: string;
}
export interface GameServerContainerDefinitionInput {
  ContainerName: string;
  DependsOn?: Array<ContainerDependency>;
  MountPoints?: Array<ContainerMountPoint>;
  EnvironmentOverride?: Array<ContainerEnvironment>;
  ImageUri: string;
  PortConfiguration: ContainerPortConfiguration;
  ServerSdkVersion: string;
}
export interface GameServerContainerGroupCounts {
  PENDING?: number;
  ACTIVE?: number;
  IDLE?: number;
  TERMINATING?: number;
}
export type GameServerContainerGroupsPerInstance = number;

export type GameServerData = string;

export interface GameServerGroup {
  GameServerGroupName?: string;
  GameServerGroupArn?: string;
  RoleArn?: string;
  InstanceDefinitions?: Array<InstanceDefinition>;
  BalancingStrategy?: BalancingStrategy;
  GameServerProtectionPolicy?: GameServerProtectionPolicy;
  AutoScalingGroupArn?: string;
  Status?: GameServerGroupStatus;
  StatusReason?: string;
  SuspendedActions?: Array<GameServerGroupAction>;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type GameServerGroupAction = "REPLACE_INSTANCE_TYPES";
export type GameServerGroupActions = Array<GameServerGroupAction>;
export type GameServerGroupArn = string;

export interface GameServerGroupAutoScalingPolicy {
  EstimatedInstanceWarmup?: number;
  TargetTrackingConfiguration: TargetTrackingConfiguration;
}
export type GameServerGroupDeleteOption =
  | "SAFE_DELETE"
  | "FORCE_DELETE"
  | "RETAIN";
export type GameServerGroupInstanceType =
  | "c4.large"
  | "c4.xlarge"
  | "c4.2xlarge"
  | "c4.4xlarge"
  | "c4.8xlarge"
  | "c5.large"
  | "c5.xlarge"
  | "c5.2xlarge"
  | "c5.4xlarge"
  | "c5.9xlarge"
  | "c5.12xlarge"
  | "c5.18xlarge"
  | "c5.24xlarge"
  | "c5a.large"
  | "c5a.xlarge"
  | "c5a.2xlarge"
  | "c5a.4xlarge"
  | "c5a.8xlarge"
  | "c5a.12xlarge"
  | "c5a.16xlarge"
  | "c5a.24xlarge"
  | "c6g.medium"
  | "c6g.large"
  | "c6g.xlarge"
  | "c6g.2xlarge"
  | "c6g.4xlarge"
  | "c6g.8xlarge"
  | "c6g.12xlarge"
  | "c6g.16xlarge"
  | "r4.large"
  | "r4.xlarge"
  | "r4.2xlarge"
  | "r4.4xlarge"
  | "r4.8xlarge"
  | "r4.16xlarge"
  | "r5.large"
  | "r5.xlarge"
  | "r5.2xlarge"
  | "r5.4xlarge"
  | "r5.8xlarge"
  | "r5.12xlarge"
  | "r5.16xlarge"
  | "r5.24xlarge"
  | "r5a.large"
  | "r5a.xlarge"
  | "r5a.2xlarge"
  | "r5a.4xlarge"
  | "r5a.8xlarge"
  | "r5a.12xlarge"
  | "r5a.16xlarge"
  | "r5a.24xlarge"
  | "r6g.medium"
  | "r6g.large"
  | "r6g.xlarge"
  | "r6g.2xlarge"
  | "r6g.4xlarge"
  | "r6g.8xlarge"
  | "r6g.12xlarge"
  | "r6g.16xlarge"
  | "m4.large"
  | "m4.xlarge"
  | "m4.2xlarge"
  | "m4.4xlarge"
  | "m4.10xlarge"
  | "m5.large"
  | "m5.xlarge"
  | "m5.2xlarge"
  | "m5.4xlarge"
  | "m5.8xlarge"
  | "m5.12xlarge"
  | "m5.16xlarge"
  | "m5.24xlarge"
  | "m5a.large"
  | "m5a.xlarge"
  | "m5a.2xlarge"
  | "m5a.4xlarge"
  | "m5a.8xlarge"
  | "m5a.12xlarge"
  | "m5a.16xlarge"
  | "m5a.24xlarge"
  | "m6g.medium"
  | "m6g.large"
  | "m6g.xlarge"
  | "m6g.2xlarge"
  | "m6g.4xlarge"
  | "m6g.8xlarge"
  | "m6g.12xlarge"
  | "m6g.16xlarge";
export type GameServerGroupName = string;

export type GameServerGroupNameOrArn = string;

export type GameServerGroups = Array<GameServerGroup>;
export type GameServerGroupStatus =
  | "NEW"
  | "ACTIVATING"
  | "ACTIVE"
  | "DELETE_SCHEDULED"
  | "DELETING"
  | "DELETED"
  | "ERROR";
export type GameServerHealthCheck = "HEALTHY";
export type GameServerId = string;

export interface GameServerInstance {
  GameServerGroupName?: string;
  GameServerGroupArn?: string;
  InstanceId?: string;
  InstanceStatus?: GameServerInstanceStatus;
}
export type GameServerInstanceId = string;

export type GameServerInstanceIds = Array<string>;
export type GameServerInstances = Array<GameServerInstance>;
export type GameServerInstanceStatus =
  | "ACTIVE"
  | "DRAINING"
  | "SPOT_TERMINATING";
export type GameServerProtectionPolicy = "NO_PROTECTION" | "FULL_PROTECTION";
export type GameServers = Array<GameServer>;
export type GameServerUtilizationStatus = "AVAILABLE" | "UTILIZED";
export interface GameSession {
  GameSessionId?: string;
  Name?: string;
  FleetId?: string;
  FleetArn?: string;
  CreationTime?: Date | string;
  TerminationTime?: Date | string;
  CurrentPlayerSessionCount?: number;
  MaximumPlayerSessionCount?: number;
  Status?: GameSessionStatus;
  StatusReason?: GameSessionStatusReason;
  GameProperties?: Array<GameProperty>;
  IpAddress?: string;
  DnsName?: string;
  Port?: number;
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
  CreatorId?: string;
  GameSessionData?: string;
  MatchmakerData?: string;
  Location?: string;
}
export type GameSessionActivationTimeoutSeconds = number;

export interface GameSessionConnectionInfo {
  GameSessionArn?: string;
  IpAddress?: string;
  DnsName?: string;
  Port?: number;
  MatchedPlayerSessions?: Array<MatchedPlayerSession>;
}
export interface GameSessionCreationLimitPolicy {
  NewGameSessionsPerCreator?: number;
  PolicyPeriodInMinutes?: number;
}
export type GameSessionData = string;

export interface GameSessionDetail {
  GameSession?: GameSession;
  ProtectionPolicy?: ProtectionPolicy;
}
export type GameSessionDetailList = Array<GameSessionDetail>;
export declare class GameSessionFullException extends EffectData.TaggedError(
  "GameSessionFullException",
)<{
  readonly Message?: string;
}> {}
export type GameSessionList = Array<GameSession>;
export interface GameSessionPlacement {
  PlacementId?: string;
  GameSessionQueueName?: string;
  Status?: GameSessionPlacementState;
  GameProperties?: Array<GameProperty>;
  MaximumPlayerSessionCount?: number;
  GameSessionName?: string;
  GameSessionId?: string;
  GameSessionArn?: string;
  GameSessionRegion?: string;
  PlayerLatencies?: Array<PlayerLatency>;
  StartTime?: Date | string;
  EndTime?: Date | string;
  IpAddress?: string;
  DnsName?: string;
  Port?: number;
  PlacedPlayerSessions?: Array<PlacedPlayerSession>;
  GameSessionData?: string;
  MatchmakerData?: string;
  PriorityConfigurationOverride?: PriorityConfigurationOverride;
}
export type GameSessionPlacementState =
  | "PENDING"
  | "FULFILLED"
  | "CANCELLED"
  | "TIMED_OUT"
  | "FAILED";
export interface GameSessionQueue {
  Name?: string;
  GameSessionQueueArn?: string;
  TimeoutInSeconds?: number;
  PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
  Destinations?: Array<GameSessionQueueDestination>;
  FilterConfiguration?: FilterConfiguration;
  PriorityConfiguration?: PriorityConfiguration;
  CustomEventData?: string;
  NotificationTarget?: string;
}
export type GameSessionQueueArn = string;

export interface GameSessionQueueDestination {
  DestinationArn?: string;
}
export type GameSessionQueueDestinationList =
  Array<GameSessionQueueDestination>;
export type GameSessionQueueList = Array<GameSessionQueue>;
export type GameSessionQueueName = string;

export type GameSessionQueueNameOrArn = string;

export type GameSessionQueueNameOrArnList = Array<string>;
export type GameSessionStatus =
  | "ACTIVE"
  | "ACTIVATING"
  | "TERMINATED"
  | "TERMINATING"
  | "ERROR";
export type GameSessionStatusReason =
  | "INTERRUPTED"
  | "TRIGGERED_ON_PROCESS_TERMINATE"
  | "FORCE_TERMINATED";
export interface GetComputeAccessInput {
  FleetId: string;
  ComputeName: string;
}
export interface GetComputeAccessOutput {
  FleetId?: string;
  FleetArn?: string;
  ComputeName?: string;
  ComputeArn?: string;
  Credentials?: AwsCredentials;
  Target?: string;
  ContainerIdentifiers?: Array<ContainerIdentifier>;
}
export interface GetComputeAuthTokenInput {
  FleetId: string;
  ComputeName: string;
}
export interface GetComputeAuthTokenOutput {
  FleetId?: string;
  FleetArn?: string;
  ComputeName?: string;
  ComputeArn?: string;
  AuthToken?: string;
  ExpirationTimestamp?: Date | string;
}
export interface GetGameSessionLogUrlInput {
  GameSessionId: string;
}
export interface GetGameSessionLogUrlOutput {
  PreSignedUrl?: string;
}
export interface GetInstanceAccessInput {
  FleetId: string;
  InstanceId: string;
}
export interface GetInstanceAccessOutput {
  InstanceAccess?: InstanceAccess;
}
export type IamRoleArn = string;

export declare class IdempotentParameterMismatchException extends EffectData.TaggedError(
  "IdempotentParameterMismatchException",
)<{
  readonly Message?: string;
}> {}
export type IdStringModel = string;

export type ImageUriString = string;

export interface Instance {
  FleetId?: string;
  FleetArn?: string;
  InstanceId?: string;
  IpAddress?: string;
  DnsName?: string;
  OperatingSystem?: OperatingSystem;
  Type?: EC2InstanceType;
  Status?: InstanceStatus;
  CreationTime?: Date | string;
  Location?: string;
}
export interface InstanceAccess {
  FleetId?: string;
  InstanceId?: string;
  IpAddress?: string;
  OperatingSystem?: OperatingSystem;
  Credentials?: InstanceCredentials;
}
export interface InstanceCredentials {
  UserName?: string;
  Secret?: string;
}
export interface InstanceDefinition {
  InstanceType: GameServerGroupInstanceType;
  WeightedCapacity?: string;
}
export type InstanceDefinitions = Array<InstanceDefinition>;
export type InstanceId = string;

export type InstanceList = Array<Instance>;
export type InstancePathString = string;

export type InstanceRoleCredentialsProvider = "SHARED_CREDENTIAL_FILE";
export type InstanceStatus = "PENDING" | "ACTIVE" | "TERMINATING";
export type Integer = number;

export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidFleetStatusException extends EffectData.TaggedError(
  "InvalidFleetStatusException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidGameSessionStatusException extends EffectData.TaggedError(
  "InvalidGameSessionStatusException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export type IpAddress = string;

export interface IpPermission {
  FromPort: number;
  ToPort: number;
  IpRange: string;
  Protocol: IpProtocol;
}
export type IpPermissionsList = Array<IpPermission>;
export type IpProtocol = "TCP" | "UDP";
export type IpRange = string;

export type LargeGameSessionData = string;

export type LatencyMap = Record<string, number>;
export type LaunchParametersStringModel = string;

export type LaunchPathStringModel = string;

export type LaunchTemplateId = string;

export type LaunchTemplateName = string;

export interface LaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
export type LaunchTemplateVersion = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListAliasesInput {
  RoutingStrategyType?: RoutingStrategyType;
  Name?: string;
  Limit?: number;
  NextToken?: string;
}
export interface ListAliasesOutput {
  Aliases?: Array<Alias>;
  NextToken?: string;
}
export interface ListBuildsInput {
  Status?: BuildStatus;
  Limit?: number;
  NextToken?: string;
}
export interface ListBuildsOutput {
  Builds?: Array<Build>;
  NextToken?: string;
}
export interface ListComputeInput {
  FleetId: string;
  Location?: string;
  ContainerGroupDefinitionName?: string;
  ComputeStatus?: ListComputeInputStatus;
  Limit?: number;
  NextToken?: string;
}
export type ListComputeInputStatus = "ACTIVE" | "IMPAIRED";
export interface ListComputeOutput {
  ComputeList?: Array<Compute>;
  NextToken?: string;
}
export interface ListContainerFleetsInput {
  ContainerGroupDefinitionName?: string;
  Limit?: number;
  NextToken?: string;
}
export interface ListContainerFleetsOutput {
  ContainerFleets?: Array<ContainerFleet>;
  NextToken?: string;
}
export interface ListContainerGroupDefinitionsInput {
  ContainerGroupType?: ContainerGroupType;
  Limit?: number;
  NextToken?: string;
}
export type ListContainerGroupDefinitionsLimit = number;

export interface ListContainerGroupDefinitionsOutput {
  ContainerGroupDefinitions?: Array<ContainerGroupDefinition>;
  NextToken?: string;
}
export interface ListContainerGroupDefinitionVersionsInput {
  Name: string;
  Limit?: number;
  NextToken?: string;
}
export type ListContainerGroupDefinitionVersionsLimit = number;

export interface ListContainerGroupDefinitionVersionsOutput {
  ContainerGroupDefinitions?: Array<ContainerGroupDefinition>;
  NextToken?: string;
}
export interface ListFleetDeploymentsInput {
  FleetId?: string;
  Limit?: number;
  NextToken?: string;
}
export interface ListFleetDeploymentsOutput {
  FleetDeployments?: Array<FleetDeployment>;
  NextToken?: string;
}
export interface ListFleetsInput {
  BuildId?: string;
  ScriptId?: string;
  Limit?: number;
  NextToken?: string;
}
export interface ListFleetsOutput {
  FleetIds?: Array<string>;
  NextToken?: string;
}
export interface ListGameServerGroupsInput {
  Limit?: number;
  NextToken?: string;
}
export interface ListGameServerGroupsOutput {
  GameServerGroups?: Array<GameServerGroup>;
  NextToken?: string;
}
export interface ListGameServersInput {
  GameServerGroupName: string;
  SortOrder?: SortOrder;
  Limit?: number;
  NextToken?: string;
}
export interface ListGameServersOutput {
  GameServers?: Array<GameServer>;
  NextToken?: string;
}
export interface ListLocationsInput {
  Filters?: Array<LocationFilter>;
  Limit?: number;
  NextToken?: string;
}
export type ListLocationsLimit = number;

export interface ListLocationsOutput {
  Locations?: Array<LocationModel>;
  NextToken?: string;
}
export interface ListScriptsInput {
  Limit?: number;
  NextToken?: string;
}
export interface ListScriptsOutput {
  Scripts?: Array<Script>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface LocationalDeployment {
  DeploymentStatus?: DeploymentStatus;
}
export type LocationalDeployments = Record<string, LocationalDeployment>;
export type LocationArnModel = string;

export interface LocationAttributes {
  LocationState?: LocationState;
  StoppedActions?: Array<FleetAction>;
  UpdateStatus?: LocationUpdateStatus;
}
export type LocationAttributesList = Array<LocationAttributes>;
export interface LocationConfiguration {
  Location: string;
}
export type LocationConfigurationList = Array<LocationConfiguration>;
export type LocationFilter = "AWS" | "CUSTOM";
export type LocationFilterList = Array<LocationFilter>;
export type LocationList = Array<string>;
export interface LocationModel {
  LocationName?: string;
  LocationArn?: string;
  PingBeacon?: PingBeacon;
}
export type LocationModelList = Array<LocationModel>;
export type LocationOrderOverrideList = Array<string>;
export interface LocationState {
  Location?: string;
  Status?: FleetStatus;
}
export type LocationStateList = Array<LocationState>;
export type LocationStringModel = string;

export type LocationUpdateStatus = "PENDING_UPDATE";
export interface LogConfiguration {
  LogDestination?: LogDestination;
  S3BucketName?: string;
  LogGroupArn?: string;
}
export type LogDestination = "NONE" | "CLOUDWATCH" | "S3";
export type LogGroupArnStringModel = string;

export interface MatchedPlayerSession {
  PlayerId?: string;
  PlayerSessionId?: string;
}
export type MatchedPlayerSessionList = Array<MatchedPlayerSession>;
export type MatchmakerData = string;

export type MatchmakingAcceptanceTimeoutInteger = number;

export interface MatchmakingConfiguration {
  Name?: string;
  ConfigurationArn?: string;
  Description?: string;
  GameSessionQueueArns?: Array<string>;
  RequestTimeoutSeconds?: number;
  AcceptanceTimeoutSeconds?: number;
  AcceptanceRequired?: boolean;
  RuleSetName?: string;
  RuleSetArn?: string;
  NotificationTarget?: string;
  AdditionalPlayerCount?: number;
  CustomEventData?: string;
  CreationTime?: Date | string;
  GameProperties?: Array<GameProperty>;
  GameSessionData?: string;
  BackfillMode?: BackfillMode;
  FlexMatchMode?: FlexMatchMode;
}
export type MatchmakingConfigurationArn = string;

export type MatchmakingConfigurationList = Array<MatchmakingConfiguration>;
export type MatchmakingConfigurationName = string;

export type MatchmakingConfigurationNameList = Array<string>;
export type MatchmakingConfigurationStatus =
  | "CANCELLED"
  | "COMPLETED"
  | "FAILED"
  | "PLACING"
  | "QUEUED"
  | "REQUIRES_ACCEPTANCE"
  | "SEARCHING"
  | "TIMED_OUT";
export type MatchmakingIdList = Array<string>;
export type MatchmakingIdStringModel = string;

export type MatchmakingRequestTimeoutInteger = number;

export interface MatchmakingRuleSet {
  RuleSetName?: string;
  RuleSetArn?: string;
  RuleSetBody: string;
  CreationTime?: Date | string;
}
export type MatchmakingRuleSetArn = string;

export type MatchmakingRuleSetList = Array<MatchmakingRuleSet>;
export type MatchmakingRuleSetName = string;

export type MatchmakingRuleSetNameList = Array<string>;
export interface MatchmakingTicket {
  TicketId?: string;
  ConfigurationName?: string;
  ConfigurationArn?: string;
  Status?: MatchmakingConfigurationStatus;
  StatusReason?: string;
  StatusMessage?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  Players?: Array<Player>;
  GameSessionConnectionInfo?: GameSessionConnectionInfo;
  EstimatedWaitTime?: number;
}
export type MatchmakingTicketList = Array<MatchmakingTicket>;
export type MaxConcurrentGameSessionActivations = number;

export type MaximumGameServerContainerGroupsPerInstance = number;

export type MetricGroup = string;

export type MetricGroupList = Array<string>;
export type MetricName =
  | "ActivatingGameSessions"
  | "ActiveGameSessions"
  | "ActiveInstances"
  | "AvailableGameSessions"
  | "AvailablePlayerSessions"
  | "CurrentPlayerSessions"
  | "IdleInstances"
  | "PercentAvailableGameSessions"
  | "PercentIdleInstances"
  | "QueueDepth"
  | "WaitTime"
  | "ConcurrentActivatableGameSessions";
export type MinimumHealthyPercentage = number;

export type NonBlankAndLengthConstraintString = string;

export type NonEmptyString = string;

export type NonNegativeDouble = number;

export type NonNegativeLimitedLengthDouble = string;

export type NonZeroAnd128MaxAsciiString = string;

export type NonZeroAnd255MaxString = string;

export type NonZeroAndMaxString = string;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class NotReadyException extends EffectData.TaggedError(
  "NotReadyException",
)<{
  readonly Message?: string;
}> {}
export type OperatingSystem =
  | "WINDOWS_2012"
  | "AMAZON_LINUX"
  | "AMAZON_LINUX_2"
  | "WINDOWS_2016"
  | "AMAZON_LINUX_2023";
export declare class OutOfCapacityException extends EffectData.TaggedError(
  "OutOfCapacityException",
)<{
  readonly Message?: string;
}> {}
export interface PingBeacon {
  UDPEndpoint?: UDPEndpoint;
}
export interface PlacedPlayerSession {
  PlayerId?: string;
  PlayerSessionId?: string;
}
export type PlacedPlayerSessionList = Array<PlacedPlayerSession>;
export type PlacementFallbackStrategy = "DEFAULT_AFTER_SINGLE_PASS" | "NONE";
export interface Player {
  PlayerId?: string;
  PlayerAttributes?: Record<string, AttributeValue>;
  Team?: string;
  LatencyInMs?: Record<string, number>;
}
export type PlayerAttributeMap = Record<string, AttributeValue>;
export type PlayerAttributeString = string;

export type PlayerAttributeStringDoubleMap = Record<string, number>;
export type PlayerAttributeStringList = Array<string>;
export type PlayerData = string;

export type PlayerDataMap = Record<string, string>;
export type PlayerId = string;

export type PlayerIdList = Array<string>;
export type PlayerIdsForAcceptMatch = Array<string>;
export interface PlayerLatency {
  PlayerId?: string;
  RegionIdentifier?: string;
  LatencyInMilliseconds?: number;
}
export type PlayerLatencyList = Array<PlayerLatency>;
export interface PlayerLatencyPolicy {
  MaximumIndividualPlayerLatencyMilliseconds?: number;
  PolicyDurationSeconds?: number;
}
export type PlayerLatencyPolicyList = Array<PlayerLatencyPolicy>;
export type PlayerList = Array<Player>;
export interface PlayerSession {
  PlayerSessionId?: string;
  PlayerId?: string;
  GameSessionId?: string;
  FleetId?: string;
  FleetArn?: string;
  CreationTime?: Date | string;
  TerminationTime?: Date | string;
  Status?: PlayerSessionStatus;
  IpAddress?: string;
  DnsName?: string;
  Port?: number;
  PlayerData?: string;
}
export type PlayerSessionCreationPolicy = "ACCEPT_ALL" | "DENY_ALL";
export type PlayerSessionId = string;

export type PlayerSessionList = Array<PlayerSession>;
export type PlayerSessionStatus =
  | "RESERVED"
  | "ACTIVE"
  | "COMPLETED"
  | "TIMEDOUT";
export type PolicyType = "RuleBased" | "TargetBased";
export type PortNumber = number;

export type PositiveInteger = number;

export type PositiveLong = number;

export interface PriorityConfiguration {
  PriorityOrder?: Array<PriorityType>;
  LocationOrder?: Array<string>;
}
export interface PriorityConfigurationOverride {
  PlacementFallbackStrategy?: PlacementFallbackStrategy;
  LocationOrder: Array<string>;
}
export type PriorityType = "LATENCY" | "COST" | "DESTINATION" | "LOCATION";
export type PriorityTypeList = Array<PriorityType>;
export type ProtectionPolicy = "NoProtection" | "FullProtection";
export interface PutScalingPolicyInput {
  Name: string;
  FleetId: string;
  ScalingAdjustment?: number;
  ScalingAdjustmentType?: ScalingAdjustmentType;
  Threshold?: number;
  ComparisonOperator?: ComparisonOperatorType;
  EvaluationPeriods?: number;
  MetricName: MetricName;
  PolicyType?: PolicyType;
  TargetConfiguration?: TargetConfiguration;
}
export interface PutScalingPolicyOutput {
  Name?: string;
}
export type QueueArnsList = Array<string>;
export type QueueCustomEventData = string;

export type QueueSnsArnStringModel = string;

export interface RegisterComputeInput {
  FleetId: string;
  ComputeName: string;
  CertificatePath?: string;
  DnsName?: string;
  IpAddress?: string;
  Location?: string;
}
export interface RegisterComputeOutput {
  Compute?: Compute;
}
export interface RegisterGameServerInput {
  GameServerGroupName: string;
  GameServerId: string;
  InstanceId: string;
  ConnectionInfo?: string;
  GameServerData?: string;
}
export interface RegisterGameServerOutput {
  GameServer?: GameServer;
}
export interface RequestUploadCredentialsInput {
  BuildId: string;
}
export interface RequestUploadCredentialsOutput {
  UploadCredentials?: AwsCredentials;
  StorageLocation?: S3Location;
}
export interface ResolveAliasInput {
  AliasId: string;
}
export interface ResolveAliasOutput {
  FleetId?: string;
  FleetArn?: string;
}
export interface ResourceCreationLimitPolicy {
  NewGameSessionsPerCreator?: number;
  PolicyPeriodInMinutes?: number;
}
export interface ResumeGameServerGroupInput {
  GameServerGroupName: string;
  ResumeActions: Array<GameServerGroupAction>;
}
export interface ResumeGameServerGroupOutput {
  GameServerGroup?: GameServerGroup;
}
export interface RoutingStrategy {
  Type?: RoutingStrategyType;
  FleetId?: string;
  Message?: string;
}
export type RoutingStrategyType = "SIMPLE" | "TERMINAL";
export type RuleSetBody = string;

export type RuleSetLimit = number;

export interface RuntimeConfiguration {
  ServerProcesses?: Array<ServerProcess>;
  MaxConcurrentGameSessionActivations?: number;
  GameSessionActivationTimeoutSeconds?: number;
}
export interface S3Location {
  Bucket?: string;
  Key?: string;
  RoleArn?: string;
  ObjectVersion?: string;
}
export type ScalingAdjustmentType =
  | "ChangeInCapacity"
  | "ExactCapacity"
  | "PercentChangeInCapacity";
export interface ScalingPolicy {
  FleetId?: string;
  FleetArn?: string;
  Name?: string;
  Status?: ScalingStatusType;
  ScalingAdjustment?: number;
  ScalingAdjustmentType?: ScalingAdjustmentType;
  ComparisonOperator?: ComparisonOperatorType;
  Threshold?: number;
  EvaluationPeriods?: number;
  MetricName?: MetricName;
  PolicyType?: PolicyType;
  TargetConfiguration?: TargetConfiguration;
  UpdateStatus?: LocationUpdateStatus;
  Location?: string;
}
export type ScalingPolicyList = Array<ScalingPolicy>;
export type ScalingStatusType =
  | "ACTIVE"
  | "UPDATE_REQUESTED"
  | "UPDATING"
  | "DELETE_REQUESTED"
  | "DELETING"
  | "DELETED"
  | "ERROR";
export interface Script {
  ScriptId?: string;
  ScriptArn?: string;
  Name?: string;
  Version?: string;
  SizeOnDisk?: number;
  CreationTime?: Date | string;
  StorageLocation?: S3Location;
}
export type ScriptArn = string;

export type ScriptId = string;

export type ScriptIdOrArn = string;

export type ScriptList = Array<Script>;
export interface SearchGameSessionsInput {
  FleetId?: string;
  AliasId?: string;
  Location?: string;
  FilterExpression?: string;
  SortExpression?: string;
  Limit?: number;
  NextToken?: string;
}
export interface SearchGameSessionsOutput {
  GameSessions?: Array<GameSession>;
  NextToken?: string;
}
export interface ServerProcess {
  LaunchPath: string;
  Parameters?: string;
  ConcurrentExecutions: number;
}
export type ServerProcessList = Array<ServerProcess>;
export type ServerSdkVersion = string;

export type SessionTarget = string;

export type Sha256 = string;

export type SnsArnStringModel = string;

export type SortOrder = "ASCENDING" | "DESCENDING";
export interface StartFleetActionsInput {
  FleetId: string;
  Actions: Array<FleetAction>;
  Location?: string;
}
export interface StartFleetActionsOutput {
  FleetId?: string;
  FleetArn?: string;
}
export interface StartGameSessionPlacementInput {
  PlacementId: string;
  GameSessionQueueName: string;
  GameProperties?: Array<GameProperty>;
  MaximumPlayerSessionCount: number;
  GameSessionName?: string;
  PlayerLatencies?: Array<PlayerLatency>;
  DesiredPlayerSessions?: Array<DesiredPlayerSession>;
  GameSessionData?: string;
  PriorityConfigurationOverride?: PriorityConfigurationOverride;
}
export interface StartGameSessionPlacementOutput {
  GameSessionPlacement?: GameSessionPlacement;
}
export interface StartMatchBackfillInput {
  TicketId?: string;
  ConfigurationName: string;
  GameSessionArn?: string;
  Players: Array<Player>;
}
export interface StartMatchBackfillOutput {
  MatchmakingTicket?: MatchmakingTicket;
}
export interface StartMatchmakingInput {
  TicketId?: string;
  ConfigurationName: string;
  Players: Array<Player>;
}
export interface StartMatchmakingOutput {
  MatchmakingTicket?: MatchmakingTicket;
}
export interface StopFleetActionsInput {
  FleetId: string;
  Actions: Array<FleetAction>;
  Location?: string;
}
export interface StopFleetActionsOutput {
  FleetId?: string;
  FleetArn?: string;
}
export interface StopGameSessionPlacementInput {
  PlacementId: string;
}
export interface StopGameSessionPlacementOutput {
  GameSessionPlacement?: GameSessionPlacement;
}
export interface StopMatchmakingInput {
  TicketId: string;
}
export interface StopMatchmakingOutput {}
export type StringList = Array<string>;
export type StringModel = string;

export interface SupportContainerDefinition {
  ContainerName?: string;
  DependsOn?: Array<ContainerDependency>;
  MountPoints?: Array<ContainerMountPoint>;
  EnvironmentOverride?: Array<ContainerEnvironment>;
  Essential?: boolean;
  HealthCheck?: ContainerHealthCheck;
  ImageUri?: string;
  MemoryHardLimitMebibytes?: number;
  PortConfiguration?: ContainerPortConfiguration;
  ResolvedImageDigest?: string;
  Vcpu?: number;
}
export interface SupportContainerDefinitionInput {
  ContainerName: string;
  DependsOn?: Array<ContainerDependency>;
  MountPoints?: Array<ContainerMountPoint>;
  EnvironmentOverride?: Array<ContainerEnvironment>;
  Essential?: boolean;
  HealthCheck?: ContainerHealthCheck;
  ImageUri: string;
  MemoryHardLimitMebibytes?: number;
  PortConfiguration?: ContainerPortConfiguration;
  Vcpu?: number;
}
export type SupportContainerDefinitionInputList =
  Array<SupportContainerDefinitionInput>;
export type SupportContainerDefinitionList = Array<SupportContainerDefinition>;
export interface SuspendGameServerGroupInput {
  GameServerGroupName: string;
  SuspendActions: Array<GameServerGroupAction>;
}
export interface SuspendGameServerGroupOutput {
  GameServerGroup?: GameServerGroup;
}
export interface Tag {
  Key: string;
  Value: string;
}
export declare class TaggingFailedException extends EffectData.TaggedError(
  "TaggingFailedException",
)<{
  readonly Message?: string;
}> {}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface TargetConfiguration {
  TargetValue: number;
}
export interface TargetTrackingConfiguration {
  TargetValue: number;
}
export declare class TerminalRoutingStrategyException extends EffectData.TaggedError(
  "TerminalRoutingStrategyException",
)<{
  readonly Message?: string;
}> {}
export interface TerminateGameSessionInput {
  GameSessionId: string;
  TerminationMode: TerminationMode;
}
export interface TerminateGameSessionOutput {
  GameSession?: GameSession;
}
export type TerminationMode =
  | "TRIGGER_ON_PROCESS_TERMINATE"
  | "FORCE_TERMINATE";
export type Timestamp = Date | string;

export interface UDPEndpoint {
  Domain?: string;
  Port?: number;
}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly Message?: string;
}> {}
export declare class UnsupportedRegionException extends EffectData.TaggedError(
  "UnsupportedRegionException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAliasInput {
  AliasId: string;
  Name?: string;
  Description?: string;
  RoutingStrategy?: RoutingStrategy;
}
export interface UpdateAliasOutput {
  Alias?: Alias;
}
export interface UpdateBuildInput {
  BuildId: string;
  Name?: string;
  Version?: string;
}
export interface UpdateBuildOutput {
  Build?: Build;
}
export interface UpdateContainerFleetInput {
  FleetId: string;
  GameServerContainerGroupDefinitionName?: string;
  PerInstanceContainerGroupDefinitionName?: string;
  GameServerContainerGroupsPerInstance?: number;
  InstanceConnectionPortRange?: ConnectionPortRange;
  InstanceInboundPermissionAuthorizations?: Array<IpPermission>;
  InstanceInboundPermissionRevocations?: Array<IpPermission>;
  DeploymentConfiguration?: DeploymentConfiguration;
  Description?: string;
  MetricGroups?: Array<string>;
  NewGameSessionProtectionPolicy?: ProtectionPolicy;
  GameSessionCreationLimitPolicy?: GameSessionCreationLimitPolicy;
  LogConfiguration?: LogConfiguration;
  RemoveAttributes?: Array<ContainerFleetRemoveAttribute>;
}
export interface UpdateContainerFleetOutput {
  ContainerFleet?: ContainerFleet;
}
export interface UpdateContainerGroupDefinitionInput {
  Name: string;
  GameServerContainerDefinition?: GameServerContainerDefinitionInput;
  SupportContainerDefinitions?: Array<SupportContainerDefinitionInput>;
  TotalMemoryLimitMebibytes?: number;
  TotalVcpuLimit?: number;
  VersionDescription?: string;
  SourceVersionNumber?: number;
  OperatingSystem?: ContainerOperatingSystem;
}
export interface UpdateContainerGroupDefinitionOutput {
  ContainerGroupDefinition?: ContainerGroupDefinition;
}
export interface UpdateFleetAttributesInput {
  FleetId: string;
  Name?: string;
  Description?: string;
  NewGameSessionProtectionPolicy?: ProtectionPolicy;
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  MetricGroups?: Array<string>;
  AnywhereConfiguration?: AnywhereConfiguration;
}
export interface UpdateFleetAttributesOutput {
  FleetId?: string;
  FleetArn?: string;
}
export interface UpdateFleetCapacityInput {
  FleetId: string;
  DesiredInstances?: number;
  MinSize?: number;
  MaxSize?: number;
  Location?: string;
}
export interface UpdateFleetCapacityOutput {
  FleetId?: string;
  FleetArn?: string;
  Location?: string;
}
export interface UpdateFleetPortSettingsInput {
  FleetId: string;
  InboundPermissionAuthorizations?: Array<IpPermission>;
  InboundPermissionRevocations?: Array<IpPermission>;
}
export interface UpdateFleetPortSettingsOutput {
  FleetId?: string;
  FleetArn?: string;
}
export interface UpdateGameServerGroupInput {
  GameServerGroupName: string;
  RoleArn?: string;
  InstanceDefinitions?: Array<InstanceDefinition>;
  GameServerProtectionPolicy?: GameServerProtectionPolicy;
  BalancingStrategy?: BalancingStrategy;
}
export interface UpdateGameServerGroupOutput {
  GameServerGroup?: GameServerGroup;
}
export interface UpdateGameServerInput {
  GameServerGroupName: string;
  GameServerId: string;
  GameServerData?: string;
  UtilizationStatus?: GameServerUtilizationStatus;
  HealthCheck?: GameServerHealthCheck;
}
export interface UpdateGameServerOutput {
  GameServer?: GameServer;
}
export interface UpdateGameSessionInput {
  GameSessionId: string;
  MaximumPlayerSessionCount?: number;
  Name?: string;
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
  ProtectionPolicy?: ProtectionPolicy;
  GameProperties?: Array<GameProperty>;
}
export interface UpdateGameSessionOutput {
  GameSession?: GameSession;
}
export interface UpdateGameSessionQueueInput {
  Name: string;
  TimeoutInSeconds?: number;
  PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
  Destinations?: Array<GameSessionQueueDestination>;
  FilterConfiguration?: FilterConfiguration;
  PriorityConfiguration?: PriorityConfiguration;
  CustomEventData?: string;
  NotificationTarget?: string;
}
export interface UpdateGameSessionQueueOutput {
  GameSessionQueue?: GameSessionQueue;
}
export interface UpdateMatchmakingConfigurationInput {
  Name: string;
  Description?: string;
  GameSessionQueueArns?: Array<string>;
  RequestTimeoutSeconds?: number;
  AcceptanceTimeoutSeconds?: number;
  AcceptanceRequired?: boolean;
  RuleSetName?: string;
  NotificationTarget?: string;
  AdditionalPlayerCount?: number;
  CustomEventData?: string;
  GameProperties?: Array<GameProperty>;
  GameSessionData?: string;
  BackfillMode?: BackfillMode;
  FlexMatchMode?: FlexMatchMode;
}
export interface UpdateMatchmakingConfigurationOutput {
  Configuration?: MatchmakingConfiguration;
}
export interface UpdateRuntimeConfigurationInput {
  FleetId: string;
  RuntimeConfiguration: RuntimeConfiguration;
}
export interface UpdateRuntimeConfigurationOutput {
  RuntimeConfiguration?: RuntimeConfiguration;
}
export interface UpdateScriptInput {
  ScriptId: string;
  Name?: string;
  Version?: string;
  StorageLocation?: S3Location;
  ZipFile?: Uint8Array | string;
}
export interface UpdateScriptOutput {
  Script?: Script;
}
export interface ValidateMatchmakingRuleSetInput {
  RuleSetBody: string;
}
export interface ValidateMatchmakingRuleSetOutput {
  Valid?: boolean;
}
export interface VpcPeeringAuthorization {
  GameLiftAwsAccountId?: string;
  PeerVpcAwsAccountId?: string;
  PeerVpcId?: string;
  CreationTime?: Date | string;
  ExpirationTime?: Date | string;
}
export type VpcPeeringAuthorizationList = Array<VpcPeeringAuthorization>;
export interface VpcPeeringConnection {
  FleetId?: string;
  FleetArn?: string;
  IpV4CidrBlock?: string;
  VpcPeeringConnectionId?: string;
  Status?: VpcPeeringConnectionStatus;
  PeerVpcId?: string;
  GameLiftVpcId?: string;
}
export type VpcPeeringConnectionList = Array<VpcPeeringConnection>;
export interface VpcPeeringConnectionStatus {
  Code?: string;
  Message?: string;
}
export type VpcSubnet = string;

export type VpcSubnets = Array<string>;
export type WeightedCapacity = string;

export type WholeNumber = number;

export type ZipBlob = Uint8Array | string;

export declare namespace AcceptMatch {
  export type Input = AcceptMatchInput;
  export type Output = AcceptMatchOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace ClaimGameServer {
  export type Input = ClaimGameServerInput;
  export type Output = ClaimGameServerOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | OutOfCapacityException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateAlias {
  export type Input = CreateAliasInput;
  export type Output = CreateAliasOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateBuild {
  export type Input = CreateBuildInput;
  export type Output = CreateBuildOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateContainerFleet {
  export type Input = CreateContainerFleetInput;
  export type Output = CreateContainerFleetOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace CreateContainerGroupDefinition {
  export type Input = CreateContainerGroupDefinitionInput;
  export type Output = CreateContainerGroupDefinitionOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace CreateFleet {
  export type Input = CreateFleetInput;
  export type Output = CreateFleetOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | NotReadyException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace CreateFleetLocations {
  export type Input = CreateFleetLocationsInput;
  export type Output = CreateFleetLocationsOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | NotReadyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace CreateGameServerGroup {
  export type Input = CreateGameServerGroupInput;
  export type Output = CreateGameServerGroupOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateGameSession {
  export type Input = CreateGameSessionInput;
  export type Output = CreateGameSessionOutput;
  export type Error =
    | ConflictException
    | FleetCapacityExceededException
    | IdempotentParameterMismatchException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace CreateGameSessionQueue {
  export type Input = CreateGameSessionQueueInput;
  export type Output = CreateGameSessionQueueOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateLocation {
  export type Input = CreateLocationInput;
  export type Output = CreateLocationOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateMatchmakingConfiguration {
  export type Input = CreateMatchmakingConfigurationInput;
  export type Output = CreateMatchmakingConfigurationOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace CreateMatchmakingRuleSet {
  export type Input = CreateMatchmakingRuleSetInput;
  export type Output = CreateMatchmakingRuleSetOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace CreatePlayerSession {
  export type Input = CreatePlayerSessionInput;
  export type Output = CreatePlayerSessionOutput;
  export type Error =
    | GameSessionFullException
    | InternalServiceException
    | InvalidGameSessionStatusException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreatePlayerSessions {
  export type Input = CreatePlayerSessionsInput;
  export type Output = CreatePlayerSessionsOutput;
  export type Error =
    | GameSessionFullException
    | InternalServiceException
    | InvalidGameSessionStatusException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateScript {
  export type Input = CreateScriptInput;
  export type Output = CreateScriptOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateVpcPeeringAuthorization {
  export type Input = CreateVpcPeeringAuthorizationInput;
  export type Output = CreateVpcPeeringAuthorizationOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateVpcPeeringConnection {
  export type Input = CreateVpcPeeringConnectionInput;
  export type Output = CreateVpcPeeringConnectionOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteAlias {
  export type Input = DeleteAliasInput;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteBuild {
  export type Input = DeleteBuildInput;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteContainerFleet {
  export type Input = DeleteContainerFleetInput;
  export type Output = DeleteContainerFleetOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DeleteContainerGroupDefinition {
  export type Input = DeleteContainerGroupDefinitionInput;
  export type Output = DeleteContainerGroupDefinitionOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DeleteFleet {
  export type Input = DeleteFleetInput;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteFleetLocations {
  export type Input = DeleteFleetLocationsInput;
  export type Output = DeleteFleetLocationsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DeleteGameServerGroup {
  export type Input = DeleteGameServerGroupInput;
  export type Output = DeleteGameServerGroupOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteGameSessionQueue {
  export type Input = DeleteGameSessionQueueInput;
  export type Output = DeleteGameSessionQueueOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteLocation {
  export type Input = DeleteLocationInput;
  export type Output = DeleteLocationOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteMatchmakingConfiguration {
  export type Input = DeleteMatchmakingConfigurationInput;
  export type Output = DeleteMatchmakingConfigurationOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DeleteMatchmakingRuleSet {
  export type Input = DeleteMatchmakingRuleSetInput;
  export type Output = DeleteMatchmakingRuleSetOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DeleteScalingPolicy {
  export type Input = DeleteScalingPolicyInput;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DeleteScript {
  export type Input = DeleteScriptInput;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteVpcPeeringAuthorization {
  export type Input = DeleteVpcPeeringAuthorizationInput;
  export type Output = DeleteVpcPeeringAuthorizationOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteVpcPeeringConnection {
  export type Input = DeleteVpcPeeringConnectionInput;
  export type Output = DeleteVpcPeeringConnectionOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeregisterCompute {
  export type Input = DeregisterComputeInput;
  export type Output = DeregisterComputeOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeregisterGameServer {
  export type Input = DeregisterGameServerInput;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeAlias {
  export type Input = DescribeAliasInput;
  export type Output = DescribeAliasOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeBuild {
  export type Input = DescribeBuildInput;
  export type Output = DescribeBuildOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeCompute {
  export type Input = DescribeComputeInput;
  export type Output = DescribeComputeOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeContainerFleet {
  export type Input = DescribeContainerFleetInput;
  export type Output = DescribeContainerFleetOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeContainerGroupDefinition {
  export type Input = DescribeContainerGroupDefinitionInput;
  export type Output = DescribeContainerGroupDefinitionOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeEC2InstanceLimits {
  export type Input = DescribeEC2InstanceLimitsInput;
  export type Output = DescribeEC2InstanceLimitsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeFleetAttributes {
  export type Input = DescribeFleetAttributesInput;
  export type Output = DescribeFleetAttributesOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeFleetCapacity {
  export type Input = DescribeFleetCapacityInput;
  export type Output = DescribeFleetCapacityOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeFleetDeployment {
  export type Input = DescribeFleetDeploymentInput;
  export type Output = DescribeFleetDeploymentOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeFleetEvents {
  export type Input = DescribeFleetEventsInput;
  export type Output = DescribeFleetEventsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeFleetLocationAttributes {
  export type Input = DescribeFleetLocationAttributesInput;
  export type Output = DescribeFleetLocationAttributesOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeFleetLocationCapacity {
  export type Input = DescribeFleetLocationCapacityInput;
  export type Output = DescribeFleetLocationCapacityOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeFleetLocationUtilization {
  export type Input = DescribeFleetLocationUtilizationInput;
  export type Output = DescribeFleetLocationUtilizationOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeFleetPortSettings {
  export type Input = DescribeFleetPortSettingsInput;
  export type Output = DescribeFleetPortSettingsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeFleetUtilization {
  export type Input = DescribeFleetUtilizationInput;
  export type Output = DescribeFleetUtilizationOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeGameServer {
  export type Input = DescribeGameServerInput;
  export type Output = DescribeGameServerOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeGameServerGroup {
  export type Input = DescribeGameServerGroupInput;
  export type Output = DescribeGameServerGroupOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeGameServerInstances {
  export type Input = DescribeGameServerInstancesInput;
  export type Output = DescribeGameServerInstancesOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeGameSessionDetails {
  export type Input = DescribeGameSessionDetailsInput;
  export type Output = DescribeGameSessionDetailsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeGameSessionPlacement {
  export type Input = DescribeGameSessionPlacementInput;
  export type Output = DescribeGameSessionPlacementOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeGameSessionQueues {
  export type Input = DescribeGameSessionQueuesInput;
  export type Output = DescribeGameSessionQueuesOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeGameSessions {
  export type Input = DescribeGameSessionsInput;
  export type Output = DescribeGameSessionsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeInstances {
  export type Input = DescribeInstancesInput;
  export type Output = DescribeInstancesOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeMatchmaking {
  export type Input = DescribeMatchmakingInput;
  export type Output = DescribeMatchmakingOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeMatchmakingConfigurations {
  export type Input = DescribeMatchmakingConfigurationsInput;
  export type Output = DescribeMatchmakingConfigurationsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeMatchmakingRuleSets {
  export type Input = DescribeMatchmakingRuleSetsInput;
  export type Output = DescribeMatchmakingRuleSetsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribePlayerSessions {
  export type Input = DescribePlayerSessionsInput;
  export type Output = DescribePlayerSessionsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeRuntimeConfiguration {
  export type Input = DescribeRuntimeConfigurationInput;
  export type Output = DescribeRuntimeConfigurationOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeScalingPolicies {
  export type Input = DescribeScalingPoliciesInput;
  export type Output = DescribeScalingPoliciesOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace DescribeScript {
  export type Input = DescribeScriptInput;
  export type Output = DescribeScriptOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeVpcPeeringAuthorizations {
  export type Input = DescribeVpcPeeringAuthorizationsInput;
  export type Output = DescribeVpcPeeringAuthorizationsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeVpcPeeringConnections {
  export type Input = DescribeVpcPeeringConnectionsInput;
  export type Output = DescribeVpcPeeringConnectionsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetComputeAccess {
  export type Input = GetComputeAccessInput;
  export type Output = GetComputeAccessOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace GetComputeAuthToken {
  export type Input = GetComputeAuthTokenInput;
  export type Output = GetComputeAuthTokenOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace GetGameSessionLogUrl {
  export type Input = GetGameSessionLogUrlInput;
  export type Output = GetGameSessionLogUrlOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetInstanceAccess {
  export type Input = GetInstanceAccessInput;
  export type Output = GetInstanceAccessOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListAliases {
  export type Input = ListAliasesInput;
  export type Output = ListAliasesOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListBuilds {
  export type Input = ListBuildsInput;
  export type Output = ListBuildsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListCompute {
  export type Input = ListComputeInput;
  export type Output = ListComputeOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace ListContainerFleets {
  export type Input = ListContainerFleetsInput;
  export type Output = ListContainerFleetsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace ListContainerGroupDefinitions {
  export type Input = ListContainerGroupDefinitionsInput;
  export type Output = ListContainerGroupDefinitionsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace ListContainerGroupDefinitionVersions {
  export type Input = ListContainerGroupDefinitionVersionsInput;
  export type Output = ListContainerGroupDefinitionVersionsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace ListFleetDeployments {
  export type Input = ListFleetDeploymentsInput;
  export type Output = ListFleetDeploymentsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace ListFleets {
  export type Input = ListFleetsInput;
  export type Output = ListFleetsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListGameServerGroups {
  export type Input = ListGameServerGroupsInput;
  export type Output = ListGameServerGroupsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListGameServers {
  export type Input = ListGameServersInput;
  export type Output = ListGameServersOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListLocations {
  export type Input = ListLocationsInput;
  export type Output = ListLocationsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListScripts {
  export type Input = ListScriptsInput;
  export type Output = ListScriptsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace PutScalingPolicy {
  export type Input = PutScalingPolicyInput;
  export type Output = PutScalingPolicyOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace RegisterCompute {
  export type Input = RegisterComputeInput;
  export type Output = RegisterComputeOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotReadyException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RegisterGameServer {
  export type Input = RegisterGameServerInput;
  export type Output = RegisterGameServerOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RequestUploadCredentials {
  export type Input = RequestUploadCredentialsInput;
  export type Output = RequestUploadCredentialsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ResolveAlias {
  export type Input = ResolveAliasInput;
  export type Output = ResolveAliasOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ResumeGameServerGroup {
  export type Input = ResumeGameServerGroupInput;
  export type Output = ResumeGameServerGroupOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace SearchGameSessions {
  export type Input = SearchGameSessionsInput;
  export type Output = SearchGameSessionsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TerminalRoutingStrategyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace StartFleetActions {
  export type Input = StartFleetActionsInput;
  export type Output = StartFleetActionsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace StartGameSessionPlacement {
  export type Input = StartGameSessionPlacementInput;
  export type Output = StartGameSessionPlacementOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace StartMatchBackfill {
  export type Input = StartMatchBackfillInput;
  export type Output = StartMatchBackfillOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace StartMatchmaking {
  export type Input = StartMatchmakingInput;
  export type Output = StartMatchmakingOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace StopFleetActions {
  export type Input = StopFleetActionsInput;
  export type Output = StopFleetActionsOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace StopGameSessionPlacement {
  export type Input = StopGameSessionPlacementInput;
  export type Output = StopGameSessionPlacementOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StopMatchmaking {
  export type Input = StopMatchmakingInput;
  export type Output = StopMatchmakingOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace SuspendGameServerGroup {
  export type Input = SuspendGameServerGroupInput;
  export type Output = SuspendGameServerGroupOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace TerminateGameSession {
  export type Input = TerminateGameSessionInput;
  export type Output = TerminateGameSessionOutput;
  export type Error =
    | InternalServiceException
    | InvalidGameSessionStatusException
    | InvalidRequestException
    | NotFoundException
    | NotReadyException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | TaggingFailedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace UpdateAlias {
  export type Input = UpdateAliasInput;
  export type Output = UpdateAliasOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateBuild {
  export type Input = UpdateBuildInput;
  export type Output = UpdateBuildOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateContainerFleet {
  export type Input = UpdateContainerFleetInput;
  export type Output = UpdateContainerFleetOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | NotReadyException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace UpdateContainerGroupDefinition {
  export type Input = UpdateContainerGroupDefinitionInput;
  export type Output = UpdateContainerGroupDefinitionOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace UpdateFleetAttributes {
  export type Input = UpdateFleetAttributesInput;
  export type Output = UpdateFleetAttributesOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateFleetCapacity {
  export type Input = UpdateFleetCapacityInput;
  export type Output = UpdateFleetCapacityOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace UpdateFleetPortSettings {
  export type Input = UpdateFleetPortSettingsInput;
  export type Output = UpdateFleetPortSettingsOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateGameServer {
  export type Input = UpdateGameServerInput;
  export type Output = UpdateGameServerOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateGameServerGroup {
  export type Input = UpdateGameServerGroupInput;
  export type Output = UpdateGameServerGroupOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateGameSession {
  export type Input = UpdateGameSessionInput;
  export type Output = UpdateGameSessionOutput;
  export type Error =
    | ConflictException
    | InternalServiceException
    | InvalidGameSessionStatusException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateGameSessionQueue {
  export type Input = UpdateGameSessionQueueInput;
  export type Output = UpdateGameSessionQueueOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateMatchmakingConfiguration {
  export type Input = UpdateMatchmakingConfigurationInput;
  export type Output = UpdateMatchmakingConfigurationOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnsupportedRegionException
    | CommonAwsError;
}

export declare namespace UpdateRuntimeConfiguration {
  export type Input = UpdateRuntimeConfigurationInput;
  export type Output = UpdateRuntimeConfigurationOutput;
  export type Error =
    | InternalServiceException
    | InvalidFleetStatusException
    | InvalidRequestException
    | LimitExceededException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateScript {
  export type Input = UpdateScriptInput;
  export type Output = UpdateScriptOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | NotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ValidateMatchmakingRuleSet {
  export type Input = ValidateMatchmakingRuleSetInput;
  export type Output = ValidateMatchmakingRuleSetOutput;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | UnsupportedRegionException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "GameLift",
  version: "2015-10-01",
  protocol: "awsJson1_1",
  endpointPrefix: "gamelift",
  targetPrefix: "GameLift",
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;
