import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TargetIdList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class ActivateEventSourceRequest extends S.Class<ActivateEventSourceRequest>("ActivateEventSourceRequest")({Name: S.String}) {}
export class CancelReplayRequest extends S.Class<CancelReplayRequest>("CancelReplayRequest")({ReplayName: S.String}) {}
export class CreateApiDestinationRequest extends S.Class<CreateApiDestinationRequest>("CreateApiDestinationRequest")({Name: S.String, Description: S.optional(S.String), ConnectionArn: S.String, InvocationEndpoint: S.String, HttpMethod: S.String, InvocationRateLimitPerSecond: S.optional(S.Number)}) {}
export class CreateArchiveRequest extends S.Class<CreateArchiveRequest>("CreateArchiveRequest")({ArchiveName: S.String, EventSourceArn: S.String, Description: S.optional(S.String), EventPattern: S.optional(S.String), RetentionDays: S.optional(S.Number), KmsKeyIdentifier: S.optional(S.String)}) {}
export class CreatePartnerEventSourceRequest extends S.Class<CreatePartnerEventSourceRequest>("CreatePartnerEventSourceRequest")({Name: S.String, Account: S.String}) {}
export class DeactivateEventSourceRequest extends S.Class<DeactivateEventSourceRequest>("DeactivateEventSourceRequest")({Name: S.String}) {}
export class DeauthorizeConnectionRequest extends S.Class<DeauthorizeConnectionRequest>("DeauthorizeConnectionRequest")({Name: S.String}) {}
export class DeleteApiDestinationRequest extends S.Class<DeleteApiDestinationRequest>("DeleteApiDestinationRequest")({Name: S.String}) {}
export class DeleteApiDestinationResponse extends S.Class<DeleteApiDestinationResponse>("DeleteApiDestinationResponse")({}) {}
export class DeleteArchiveRequest extends S.Class<DeleteArchiveRequest>("DeleteArchiveRequest")({ArchiveName: S.String}) {}
export class DeleteArchiveResponse extends S.Class<DeleteArchiveResponse>("DeleteArchiveResponse")({}) {}
export class DeleteConnectionRequest extends S.Class<DeleteConnectionRequest>("DeleteConnectionRequest")({Name: S.String}) {}
export class DeleteEndpointRequest extends S.Class<DeleteEndpointRequest>("DeleteEndpointRequest")({Name: S.String}) {}
export class DeleteEndpointResponse extends S.Class<DeleteEndpointResponse>("DeleteEndpointResponse")({}) {}
export class DeleteEventBusRequest extends S.Class<DeleteEventBusRequest>("DeleteEventBusRequest")({Name: S.String}) {}
export class DeletePartnerEventSourceRequest extends S.Class<DeletePartnerEventSourceRequest>("DeletePartnerEventSourceRequest")({Name: S.String, Account: S.String}) {}
export class DeleteRuleRequest extends S.Class<DeleteRuleRequest>("DeleteRuleRequest")({Name: S.String, EventBusName: S.optional(S.String), Force: S.optional(S.Boolean)}) {}
export class DescribeApiDestinationRequest extends S.Class<DescribeApiDestinationRequest>("DescribeApiDestinationRequest")({Name: S.String}) {}
export class DescribeArchiveRequest extends S.Class<DescribeArchiveRequest>("DescribeArchiveRequest")({ArchiveName: S.String}) {}
export class DescribeConnectionRequest extends S.Class<DescribeConnectionRequest>("DescribeConnectionRequest")({Name: S.String}) {}
export class DescribeEndpointRequest extends S.Class<DescribeEndpointRequest>("DescribeEndpointRequest")({Name: S.String, HomeRegion: S.optional(S.String)}) {}
export class DescribeEventBusRequest extends S.Class<DescribeEventBusRequest>("DescribeEventBusRequest")({Name: S.optional(S.String)}) {}
export class DescribeEventSourceRequest extends S.Class<DescribeEventSourceRequest>("DescribeEventSourceRequest")({Name: S.String}) {}
export class DescribePartnerEventSourceRequest extends S.Class<DescribePartnerEventSourceRequest>("DescribePartnerEventSourceRequest")({Name: S.String}) {}
export class DescribeReplayRequest extends S.Class<DescribeReplayRequest>("DescribeReplayRequest")({ReplayName: S.String}) {}
export class DescribeRuleRequest extends S.Class<DescribeRuleRequest>("DescribeRuleRequest")({Name: S.String, EventBusName: S.optional(S.String)}) {}
export class DisableRuleRequest extends S.Class<DisableRuleRequest>("DisableRuleRequest")({Name: S.String, EventBusName: S.optional(S.String)}) {}
export class EnableRuleRequest extends S.Class<EnableRuleRequest>("EnableRuleRequest")({Name: S.String, EventBusName: S.optional(S.String)}) {}
export class ListApiDestinationsRequest extends S.Class<ListApiDestinationsRequest>("ListApiDestinationsRequest")({NamePrefix: S.optional(S.String), ConnectionArn: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListArchivesRequest extends S.Class<ListArchivesRequest>("ListArchivesRequest")({NamePrefix: S.optional(S.String), EventSourceArn: S.optional(S.String), State: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListConnectionsRequest extends S.Class<ListConnectionsRequest>("ListConnectionsRequest")({NamePrefix: S.optional(S.String), ConnectionState: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListEndpointsRequest extends S.Class<ListEndpointsRequest>("ListEndpointsRequest")({NamePrefix: S.optional(S.String), HomeRegion: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListEventBusesRequest extends S.Class<ListEventBusesRequest>("ListEventBusesRequest")({NamePrefix: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListEventSourcesRequest extends S.Class<ListEventSourcesRequest>("ListEventSourcesRequest")({NamePrefix: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListPartnerEventSourceAccountsRequest extends S.Class<ListPartnerEventSourceAccountsRequest>("ListPartnerEventSourceAccountsRequest")({EventSourceName: S.String, NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListPartnerEventSourcesRequest extends S.Class<ListPartnerEventSourcesRequest>("ListPartnerEventSourcesRequest")({NamePrefix: S.String, NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListReplaysRequest extends S.Class<ListReplaysRequest>("ListReplaysRequest")({NamePrefix: S.optional(S.String), State: S.optional(S.String), EventSourceArn: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListRuleNamesByTargetRequest extends S.Class<ListRuleNamesByTargetRequest>("ListRuleNamesByTargetRequest")({TargetArn: S.String, EventBusName: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListRulesRequest extends S.Class<ListRulesRequest>("ListRulesRequest")({NamePrefix: S.optional(S.String), EventBusName: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({ResourceARN: S.String}) {}
export class ListTargetsByRuleRequest extends S.Class<ListTargetsByRuleRequest>("ListTargetsByRuleRequest")({Rule: S.String, EventBusName: S.optional(S.String), NextToken: S.optional(S.String), Limit: S.optional(S.Number)}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.String, Value: S.String}) {}
export const TagList = S.Array(Tag);
export class PutRuleRequest extends S.Class<PutRuleRequest>("PutRuleRequest")({Name: S.String, ScheduleExpression: S.optional(S.String), EventPattern: S.optional(S.String), State: S.optional(S.String), Description: S.optional(S.String), RoleArn: S.optional(S.String), Tags: S.optional(TagList), EventBusName: S.optional(S.String)}) {}
export class RemovePermissionRequest extends S.Class<RemovePermissionRequest>("RemovePermissionRequest")({StatementId: S.optional(S.String), RemoveAllPermissions: S.optional(S.Boolean), EventBusName: S.optional(S.String)}) {}
export class RemoveTargetsRequest extends S.Class<RemoveTargetsRequest>("RemoveTargetsRequest")({Rule: S.String, EventBusName: S.optional(S.String), Ids: TargetIdList, Force: S.optional(S.Boolean)}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({ResourceARN: S.String, Tags: TagList}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class TestEventPatternRequest extends S.Class<TestEventPatternRequest>("TestEventPatternRequest")({EventPattern: S.String, Event: S.String}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({ResourceARN: S.String, TagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class UpdateApiDestinationRequest extends S.Class<UpdateApiDestinationRequest>("UpdateApiDestinationRequest")({Name: S.String, Description: S.optional(S.String), ConnectionArn: S.optional(S.String), InvocationEndpoint: S.optional(S.String), HttpMethod: S.optional(S.String), InvocationRateLimitPerSecond: S.optional(S.Number)}) {}
export class UpdateArchiveRequest extends S.Class<UpdateArchiveRequest>("UpdateArchiveRequest")({ArchiveName: S.String, Description: S.optional(S.String), EventPattern: S.optional(S.String), RetentionDays: S.optional(S.Number), KmsKeyIdentifier: S.optional(S.String)}) {}
export class Primary extends S.Class<Primary>("Primary")({HealthCheck: S.String}) {}
export class Secondary extends S.Class<Secondary>("Secondary")({Route: S.String}) {}
export class FailoverConfig extends S.Class<FailoverConfig>("FailoverConfig")({Primary: Primary, Secondary: Secondary}) {}
export class RoutingConfig extends S.Class<RoutingConfig>("RoutingConfig")({FailoverConfig: FailoverConfig}) {}
export class ReplicationConfig extends S.Class<ReplicationConfig>("ReplicationConfig")({State: S.optional(S.String)}) {}
export class EndpointEventBus extends S.Class<EndpointEventBus>("EndpointEventBus")({EventBusArn: S.String}) {}
export const EndpointEventBusList = S.Array(EndpointEventBus);
export class UpdateEndpointRequest extends S.Class<UpdateEndpointRequest>("UpdateEndpointRequest")({Name: S.String, Description: S.optional(S.String), RoutingConfig: S.optional(RoutingConfig), ReplicationConfig: S.optional(ReplicationConfig), EventBuses: S.optional(EndpointEventBusList), RoleArn: S.optional(S.String)}) {}
export class DeadLetterConfig extends S.Class<DeadLetterConfig>("DeadLetterConfig")({Arn: S.optional(S.String)}) {}
export class LogConfig extends S.Class<LogConfig>("LogConfig")({IncludeDetail: S.optional(S.String), Level: S.optional(S.String)}) {}
export class UpdateEventBusRequest extends S.Class<UpdateEventBusRequest>("UpdateEventBusRequest")({Name: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String), Description: S.optional(S.String), DeadLetterConfig: S.optional(DeadLetterConfig), LogConfig: S.optional(LogConfig)}) {}
export const EventResourceList = S.Array(S.String);
export const ReplayDestinationFilters = S.Array(S.String);
export const RuleNameList = S.Array(S.String);
export class PutEventsRequestEntry extends S.Class<PutEventsRequestEntry>("PutEventsRequestEntry")({Time: S.optional(S.Date), Source: S.optional(S.String), Resources: S.optional(EventResourceList), DetailType: S.optional(S.String), Detail: S.optional(S.String), EventBusName: S.optional(S.String), TraceHeader: S.optional(S.String)}) {}
export const PutEventsRequestEntryList = S.Array(PutEventsRequestEntry);
export class PutPartnerEventsRequestEntry extends S.Class<PutPartnerEventsRequestEntry>("PutPartnerEventsRequestEntry")({Time: S.optional(S.Date), Source: S.optional(S.String), Resources: S.optional(EventResourceList), DetailType: S.optional(S.String), Detail: S.optional(S.String)}) {}
export const PutPartnerEventsRequestEntryList = S.Array(PutPartnerEventsRequestEntry);
export class Condition extends S.Class<Condition>("Condition")({Type: S.String, Key: S.String, Value: S.String}) {}
export class ReplayDestination extends S.Class<ReplayDestination>("ReplayDestination")({Arn: S.String, FilterArns: S.optional(ReplayDestinationFilters)}) {}
export const PathParameterList = S.Array(S.String);
export const Sqls = S.Array(S.String);
export class CancelReplayResponse extends S.Class<CancelReplayResponse>("CancelReplayResponse")({ReplayArn: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String)}) {}
export class CreateApiDestinationResponse extends S.Class<CreateApiDestinationResponse>("CreateApiDestinationResponse")({ApiDestinationArn: S.optional(S.String), ApiDestinationState: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export class CreateArchiveResponse extends S.Class<CreateArchiveResponse>("CreateArchiveResponse")({ArchiveArn: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), CreationTime: S.optional(S.Date)}) {}
export class CreateEventBusRequest extends S.Class<CreateEventBusRequest>("CreateEventBusRequest")({Name: S.String, EventSourceName: S.optional(S.String), Description: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String), DeadLetterConfig: S.optional(DeadLetterConfig), LogConfig: S.optional(LogConfig), Tags: S.optional(TagList)}) {}
export class CreatePartnerEventSourceResponse extends S.Class<CreatePartnerEventSourceResponse>("CreatePartnerEventSourceResponse")({EventSourceArn: S.optional(S.String)}) {}
export class DeauthorizeConnectionResponse extends S.Class<DeauthorizeConnectionResponse>("DeauthorizeConnectionResponse")({ConnectionArn: S.optional(S.String), ConnectionState: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), LastAuthorizedTime: S.optional(S.Date)}) {}
export class DeleteConnectionResponse extends S.Class<DeleteConnectionResponse>("DeleteConnectionResponse")({ConnectionArn: S.optional(S.String), ConnectionState: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), LastAuthorizedTime: S.optional(S.Date)}) {}
export class DescribeApiDestinationResponse extends S.Class<DescribeApiDestinationResponse>("DescribeApiDestinationResponse")({ApiDestinationArn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), ApiDestinationState: S.optional(S.String), ConnectionArn: S.optional(S.String), InvocationEndpoint: S.optional(S.String), HttpMethod: S.optional(S.String), InvocationRateLimitPerSecond: S.optional(S.Number), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export class DescribeArchiveResponse extends S.Class<DescribeArchiveResponse>("DescribeArchiveResponse")({ArchiveArn: S.optional(S.String), ArchiveName: S.optional(S.String), EventSourceArn: S.optional(S.String), Description: S.optional(S.String), EventPattern: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String), RetentionDays: S.optional(S.Number), SizeBytes: S.optional(S.Number), EventCount: S.optional(S.Number), CreationTime: S.optional(S.Date)}) {}
export class DescribeEndpointResponse extends S.Class<DescribeEndpointResponse>("DescribeEndpointResponse")({Name: S.optional(S.String), Description: S.optional(S.String), Arn: S.optional(S.String), RoutingConfig: S.optional(RoutingConfig), ReplicationConfig: S.optional(ReplicationConfig), EventBuses: S.optional(EndpointEventBusList), RoleArn: S.optional(S.String), EndpointId: S.optional(S.String), EndpointUrl: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export class DescribeEventBusResponse extends S.Class<DescribeEventBusResponse>("DescribeEventBusResponse")({Name: S.optional(S.String), Arn: S.optional(S.String), Description: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String), DeadLetterConfig: S.optional(DeadLetterConfig), Policy: S.optional(S.String), LogConfig: S.optional(LogConfig), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export class DescribeEventSourceResponse extends S.Class<DescribeEventSourceResponse>("DescribeEventSourceResponse")({Arn: S.optional(S.String), CreatedBy: S.optional(S.String), CreationTime: S.optional(S.Date), ExpirationTime: S.optional(S.Date), Name: S.optional(S.String), State: S.optional(S.String)}) {}
export class DescribePartnerEventSourceResponse extends S.Class<DescribePartnerEventSourceResponse>("DescribePartnerEventSourceResponse")({Arn: S.optional(S.String), Name: S.optional(S.String)}) {}
export class DescribeReplayResponse extends S.Class<DescribeReplayResponse>("DescribeReplayResponse")({ReplayName: S.optional(S.String), ReplayArn: S.optional(S.String), Description: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), EventSourceArn: S.optional(S.String), Destination: S.optional(ReplayDestination), EventStartTime: S.optional(S.Date), EventEndTime: S.optional(S.Date), EventLastReplayedTime: S.optional(S.Date), ReplayStartTime: S.optional(S.Date), ReplayEndTime: S.optional(S.Date)}) {}
export class DescribeRuleResponse extends S.Class<DescribeRuleResponse>("DescribeRuleResponse")({Name: S.optional(S.String), Arn: S.optional(S.String), EventPattern: S.optional(S.String), ScheduleExpression: S.optional(S.String), State: S.optional(S.String), Description: S.optional(S.String), RoleArn: S.optional(S.String), ManagedBy: S.optional(S.String), EventBusName: S.optional(S.String), CreatedBy: S.optional(S.String)}) {}
export class ListRuleNamesByTargetResponse extends S.Class<ListRuleNamesByTargetResponse>("ListRuleNamesByTargetResponse")({RuleNames: S.optional(RuleNameList), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({Tags: S.optional(TagList)}) {}
export const TransformerPaths = S.Record({key: S.String, value: S.String});
export class InputTransformer extends S.Class<InputTransformer>("InputTransformer")({InputPathsMap: S.optional(TransformerPaths), InputTemplate: S.String}) {}
export class KinesisParameters extends S.Class<KinesisParameters>("KinesisParameters")({PartitionKeyPath: S.String}) {}
export const RunCommandTargetValues = S.Array(S.String);
export class RunCommandTarget extends S.Class<RunCommandTarget>("RunCommandTarget")({Key: S.String, Values: RunCommandTargetValues}) {}
export const RunCommandTargets = S.Array(RunCommandTarget);
export class RunCommandParameters extends S.Class<RunCommandParameters>("RunCommandParameters")({RunCommandTargets: RunCommandTargets}) {}
export const StringList = S.Array(S.String);
export class AwsVpcConfiguration extends S.Class<AwsVpcConfiguration>("AwsVpcConfiguration")({Subnets: StringList, SecurityGroups: S.optional(StringList), AssignPublicIp: S.optional(S.String)}) {}
export class NetworkConfiguration extends S.Class<NetworkConfiguration>("NetworkConfiguration")({awsvpcConfiguration: S.optional(AwsVpcConfiguration)}) {}
export class CapacityProviderStrategyItem extends S.Class<CapacityProviderStrategyItem>("CapacityProviderStrategyItem")({capacityProvider: S.String, weight: S.optional(S.Number), base: S.optional(S.Number)}) {}
export const CapacityProviderStrategy = S.Array(CapacityProviderStrategyItem);
export class PlacementConstraint extends S.Class<PlacementConstraint>("PlacementConstraint")({type: S.optional(S.String), expression: S.optional(S.String)}) {}
export const PlacementConstraints = S.Array(PlacementConstraint);
export class PlacementStrategy extends S.Class<PlacementStrategy>("PlacementStrategy")({type: S.optional(S.String), field: S.optional(S.String)}) {}
export const PlacementStrategies = S.Array(PlacementStrategy);
export class EcsParameters extends S.Class<EcsParameters>("EcsParameters")({TaskDefinitionArn: S.String, TaskCount: S.optional(S.Number), LaunchType: S.optional(S.String), NetworkConfiguration: S.optional(NetworkConfiguration), PlatformVersion: S.optional(S.String), Group: S.optional(S.String), CapacityProviderStrategy: S.optional(CapacityProviderStrategy), EnableECSManagedTags: S.optional(S.Boolean), EnableExecuteCommand: S.optional(S.Boolean), PlacementConstraints: S.optional(PlacementConstraints), PlacementStrategy: S.optional(PlacementStrategies), PropagateTags: S.optional(S.String), ReferenceId: S.optional(S.String), Tags: S.optional(TagList)}) {}
export class BatchArrayProperties extends S.Class<BatchArrayProperties>("BatchArrayProperties")({Size: S.optional(S.Number)}) {}
export class BatchRetryStrategy extends S.Class<BatchRetryStrategy>("BatchRetryStrategy")({Attempts: S.optional(S.Number)}) {}
export class BatchParameters extends S.Class<BatchParameters>("BatchParameters")({JobDefinition: S.String, JobName: S.String, ArrayProperties: S.optional(BatchArrayProperties), RetryStrategy: S.optional(BatchRetryStrategy)}) {}
export class SqsParameters extends S.Class<SqsParameters>("SqsParameters")({MessageGroupId: S.optional(S.String)}) {}
export const HeaderParametersMap = S.Record({key: S.String, value: S.String});
export const QueryStringParametersMap = S.Record({key: S.String, value: S.String});
export class HttpParameters extends S.Class<HttpParameters>("HttpParameters")({PathParameterValues: S.optional(PathParameterList), HeaderParameters: S.optional(HeaderParametersMap), QueryStringParameters: S.optional(QueryStringParametersMap)}) {}
export class RedshiftDataParameters extends S.Class<RedshiftDataParameters>("RedshiftDataParameters")({SecretManagerArn: S.optional(S.String), Database: S.String, DbUser: S.optional(S.String), Sql: S.optional(S.String), StatementName: S.optional(S.String), WithEvent: S.optional(S.Boolean), Sqls: S.optional(Sqls)}) {}
export class SageMakerPipelineParameter extends S.Class<SageMakerPipelineParameter>("SageMakerPipelineParameter")({Name: S.String, Value: S.String}) {}
export const SageMakerPipelineParameterList = S.Array(SageMakerPipelineParameter);
export class SageMakerPipelineParameters extends S.Class<SageMakerPipelineParameters>("SageMakerPipelineParameters")({PipelineParameterList: S.optional(SageMakerPipelineParameterList)}) {}
export class RetryPolicy extends S.Class<RetryPolicy>("RetryPolicy")({MaximumRetryAttempts: S.optional(S.Number), MaximumEventAgeInSeconds: S.optional(S.Number)}) {}
export class AppSyncParameters extends S.Class<AppSyncParameters>("AppSyncParameters")({GraphQLOperation: S.optional(S.String)}) {}
export class Target extends S.Class<Target>("Target")({Id: S.String, Arn: S.String, RoleArn: S.optional(S.String), Input: S.optional(S.String), InputPath: S.optional(S.String), InputTransformer: S.optional(InputTransformer), KinesisParameters: S.optional(KinesisParameters), RunCommandParameters: S.optional(RunCommandParameters), EcsParameters: S.optional(EcsParameters), BatchParameters: S.optional(BatchParameters), SqsParameters: S.optional(SqsParameters), HttpParameters: S.optional(HttpParameters), RedshiftDataParameters: S.optional(RedshiftDataParameters), SageMakerPipelineParameters: S.optional(SageMakerPipelineParameters), DeadLetterConfig: S.optional(DeadLetterConfig), RetryPolicy: S.optional(RetryPolicy), AppSyncParameters: S.optional(AppSyncParameters)}) {}
export const TargetList = S.Array(Target);
export class ListTargetsByRuleResponse extends S.Class<ListTargetsByRuleResponse>("ListTargetsByRuleResponse")({Targets: S.optional(TargetList), NextToken: S.optional(S.String)}) {}
export class PutEventsRequest extends S.Class<PutEventsRequest>("PutEventsRequest")({Entries: PutEventsRequestEntryList, EndpointId: S.optional(S.String)}) {}
export class PutPartnerEventsRequest extends S.Class<PutPartnerEventsRequest>("PutPartnerEventsRequest")({Entries: PutPartnerEventsRequestEntryList}) {}
export class PutPermissionRequest extends S.Class<PutPermissionRequest>("PutPermissionRequest")({EventBusName: S.optional(S.String), Action: S.optional(S.String), Principal: S.optional(S.String), StatementId: S.optional(S.String), Condition: S.optional(Condition), Policy: S.optional(S.String)}) {}
export class PutRuleResponse extends S.Class<PutRuleResponse>("PutRuleResponse")({RuleArn: S.optional(S.String)}) {}
export class StartReplayRequest extends S.Class<StartReplayRequest>("StartReplayRequest")({ReplayName: S.String, Description: S.optional(S.String), EventSourceArn: S.String, EventStartTime: S.Date, EventEndTime: S.Date, Destination: ReplayDestination}) {}
export class TestEventPatternResponse extends S.Class<TestEventPatternResponse>("TestEventPatternResponse")({Result: S.optional(S.Boolean)}) {}
export class UpdateApiDestinationResponse extends S.Class<UpdateApiDestinationResponse>("UpdateApiDestinationResponse")({ApiDestinationArn: S.optional(S.String), ApiDestinationState: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export class UpdateArchiveResponse extends S.Class<UpdateArchiveResponse>("UpdateArchiveResponse")({ArchiveArn: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), CreationTime: S.optional(S.Date)}) {}
export class UpdateEndpointResponse extends S.Class<UpdateEndpointResponse>("UpdateEndpointResponse")({Name: S.optional(S.String), Arn: S.optional(S.String), RoutingConfig: S.optional(RoutingConfig), ReplicationConfig: S.optional(ReplicationConfig), EventBuses: S.optional(EndpointEventBusList), RoleArn: S.optional(S.String), EndpointId: S.optional(S.String), EndpointUrl: S.optional(S.String), State: S.optional(S.String)}) {}
export class UpdateEventBusResponse extends S.Class<UpdateEventBusResponse>("UpdateEventBusResponse")({Arn: S.optional(S.String), Name: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String), Description: S.optional(S.String), DeadLetterConfig: S.optional(DeadLetterConfig), LogConfig: S.optional(LogConfig)}) {}
export class CreateConnectionBasicAuthRequestParameters extends S.Class<CreateConnectionBasicAuthRequestParameters>("CreateConnectionBasicAuthRequestParameters")({Username: S.String, Password: S.String}) {}
export class CreateConnectionApiKeyAuthRequestParameters extends S.Class<CreateConnectionApiKeyAuthRequestParameters>("CreateConnectionApiKeyAuthRequestParameters")({ApiKeyName: S.String, ApiKeyValue: S.String}) {}
export class ConnectivityResourceConfigurationArn extends S.Class<ConnectivityResourceConfigurationArn>("ConnectivityResourceConfigurationArn")({ResourceConfigurationArn: S.String}) {}
export class UpdateConnectionBasicAuthRequestParameters extends S.Class<UpdateConnectionBasicAuthRequestParameters>("UpdateConnectionBasicAuthRequestParameters")({Username: S.optional(S.String), Password: S.optional(S.String)}) {}
export class UpdateConnectionApiKeyAuthRequestParameters extends S.Class<UpdateConnectionApiKeyAuthRequestParameters>("UpdateConnectionApiKeyAuthRequestParameters")({ApiKeyName: S.optional(S.String), ApiKeyValue: S.optional(S.String)}) {}
export class ConnectivityResourceParameters extends S.Class<ConnectivityResourceParameters>("ConnectivityResourceParameters")({ResourceParameters: ConnectivityResourceConfigurationArn}) {}
export class ApiDestination extends S.Class<ApiDestination>("ApiDestination")({ApiDestinationArn: S.optional(S.String), Name: S.optional(S.String), ApiDestinationState: S.optional(S.String), ConnectionArn: S.optional(S.String), InvocationEndpoint: S.optional(S.String), HttpMethod: S.optional(S.String), InvocationRateLimitPerSecond: S.optional(S.Number), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export const ApiDestinationResponseList = S.Array(ApiDestination);
export class Archive extends S.Class<Archive>("Archive")({ArchiveName: S.optional(S.String), EventSourceArn: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), RetentionDays: S.optional(S.Number), SizeBytes: S.optional(S.Number), EventCount: S.optional(S.Number), CreationTime: S.optional(S.Date)}) {}
export const ArchiveResponseList = S.Array(Archive);
export class Connection extends S.Class<Connection>("Connection")({ConnectionArn: S.optional(S.String), Name: S.optional(S.String), ConnectionState: S.optional(S.String), StateReason: S.optional(S.String), AuthorizationType: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), LastAuthorizedTime: S.optional(S.Date)}) {}
export const ConnectionResponseList = S.Array(Connection);
export class Endpoint extends S.Class<Endpoint>("Endpoint")({Name: S.optional(S.String), Description: S.optional(S.String), Arn: S.optional(S.String), RoutingConfig: S.optional(RoutingConfig), ReplicationConfig: S.optional(ReplicationConfig), EventBuses: S.optional(EndpointEventBusList), RoleArn: S.optional(S.String), EndpointId: S.optional(S.String), EndpointUrl: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export const EndpointList = S.Array(Endpoint);
export class EventBus extends S.Class<EventBus>("EventBus")({Name: S.optional(S.String), Arn: S.optional(S.String), Description: S.optional(S.String), Policy: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export const EventBusList = S.Array(EventBus);
export class EventSource extends S.Class<EventSource>("EventSource")({Arn: S.optional(S.String), CreatedBy: S.optional(S.String), CreationTime: S.optional(S.Date), ExpirationTime: S.optional(S.Date), Name: S.optional(S.String), State: S.optional(S.String)}) {}
export const EventSourceList = S.Array(EventSource);
export class PartnerEventSourceAccount extends S.Class<PartnerEventSourceAccount>("PartnerEventSourceAccount")({Account: S.optional(S.String), CreationTime: S.optional(S.Date), ExpirationTime: S.optional(S.Date), State: S.optional(S.String)}) {}
export const PartnerEventSourceAccountList = S.Array(PartnerEventSourceAccount);
export class PartnerEventSource extends S.Class<PartnerEventSource>("PartnerEventSource")({Arn: S.optional(S.String), Name: S.optional(S.String)}) {}
export const PartnerEventSourceList = S.Array(PartnerEventSource);
export class Replay extends S.Class<Replay>("Replay")({ReplayName: S.optional(S.String), EventSourceArn: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), EventStartTime: S.optional(S.Date), EventEndTime: S.optional(S.Date), EventLastReplayedTime: S.optional(S.Date), ReplayStartTime: S.optional(S.Date), ReplayEndTime: S.optional(S.Date)}) {}
export const ReplayList = S.Array(Replay);
export class Rule extends S.Class<Rule>("Rule")({Name: S.optional(S.String), Arn: S.optional(S.String), EventPattern: S.optional(S.String), State: S.optional(S.String), Description: S.optional(S.String), ScheduleExpression: S.optional(S.String), RoleArn: S.optional(S.String), ManagedBy: S.optional(S.String), EventBusName: S.optional(S.String)}) {}
export const RuleResponseList = S.Array(Rule);
export class RemoveTargetsResultEntry extends S.Class<RemoveTargetsResultEntry>("RemoveTargetsResultEntry")({TargetId: S.optional(S.String), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const RemoveTargetsResultEntryList = S.Array(RemoveTargetsResultEntry);
export class CreateConnectionOAuthClientRequestParameters extends S.Class<CreateConnectionOAuthClientRequestParameters>("CreateConnectionOAuthClientRequestParameters")({ClientID: S.String, ClientSecret: S.String}) {}
export class ConnectionHeaderParameter extends S.Class<ConnectionHeaderParameter>("ConnectionHeaderParameter")({Key: S.optional(S.String), Value: S.optional(S.String), IsValueSecret: S.optional(S.Boolean)}) {}
export const ConnectionHeaderParametersList = S.Array(ConnectionHeaderParameter);
export class ConnectionQueryStringParameter extends S.Class<ConnectionQueryStringParameter>("ConnectionQueryStringParameter")({Key: S.optional(S.String), Value: S.optional(S.String), IsValueSecret: S.optional(S.Boolean)}) {}
export const ConnectionQueryStringParametersList = S.Array(ConnectionQueryStringParameter);
export class ConnectionBodyParameter extends S.Class<ConnectionBodyParameter>("ConnectionBodyParameter")({Key: S.optional(S.String), Value: S.optional(S.String), IsValueSecret: S.optional(S.Boolean)}) {}
export const ConnectionBodyParametersList = S.Array(ConnectionBodyParameter);
export class UpdateConnectionOAuthClientRequestParameters extends S.Class<UpdateConnectionOAuthClientRequestParameters>("UpdateConnectionOAuthClientRequestParameters")({ClientID: S.optional(S.String), ClientSecret: S.optional(S.String)}) {}
export class CreateEventBusResponse extends S.Class<CreateEventBusResponse>("CreateEventBusResponse")({EventBusArn: S.optional(S.String), Description: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String), DeadLetterConfig: S.optional(DeadLetterConfig), LogConfig: S.optional(LogConfig)}) {}
export class ListApiDestinationsResponse extends S.Class<ListApiDestinationsResponse>("ListApiDestinationsResponse")({ApiDestinations: S.optional(ApiDestinationResponseList), NextToken: S.optional(S.String)}) {}
export class ListArchivesResponse extends S.Class<ListArchivesResponse>("ListArchivesResponse")({Archives: S.optional(ArchiveResponseList), NextToken: S.optional(S.String)}) {}
export class ListConnectionsResponse extends S.Class<ListConnectionsResponse>("ListConnectionsResponse")({Connections: S.optional(ConnectionResponseList), NextToken: S.optional(S.String)}) {}
export class ListEndpointsResponse extends S.Class<ListEndpointsResponse>("ListEndpointsResponse")({Endpoints: S.optional(EndpointList), NextToken: S.optional(S.String)}) {}
export class ListEventBusesResponse extends S.Class<ListEventBusesResponse>("ListEventBusesResponse")({EventBuses: S.optional(EventBusList), NextToken: S.optional(S.String)}) {}
export class ListEventSourcesResponse extends S.Class<ListEventSourcesResponse>("ListEventSourcesResponse")({EventSources: S.optional(EventSourceList), NextToken: S.optional(S.String)}) {}
export class ListPartnerEventSourceAccountsResponse extends S.Class<ListPartnerEventSourceAccountsResponse>("ListPartnerEventSourceAccountsResponse")({PartnerEventSourceAccounts: S.optional(PartnerEventSourceAccountList), NextToken: S.optional(S.String)}) {}
export class ListPartnerEventSourcesResponse extends S.Class<ListPartnerEventSourcesResponse>("ListPartnerEventSourcesResponse")({PartnerEventSources: S.optional(PartnerEventSourceList), NextToken: S.optional(S.String)}) {}
export class ListReplaysResponse extends S.Class<ListReplaysResponse>("ListReplaysResponse")({Replays: S.optional(ReplayList), NextToken: S.optional(S.String)}) {}
export class ListRulesResponse extends S.Class<ListRulesResponse>("ListRulesResponse")({Rules: S.optional(RuleResponseList), NextToken: S.optional(S.String)}) {}
export class RemoveTargetsResponse extends S.Class<RemoveTargetsResponse>("RemoveTargetsResponse")({FailedEntryCount: S.optional(S.Number), FailedEntries: S.optional(RemoveTargetsResultEntryList)}) {}
export class StartReplayResponse extends S.Class<StartReplayResponse>("StartReplayResponse")({ReplayArn: S.optional(S.String), State: S.optional(S.String), StateReason: S.optional(S.String), ReplayStartTime: S.optional(S.Date)}) {}
export class ConnectionHttpParameters extends S.Class<ConnectionHttpParameters>("ConnectionHttpParameters")({HeaderParameters: S.optional(ConnectionHeaderParametersList), QueryStringParameters: S.optional(ConnectionQueryStringParametersList), BodyParameters: S.optional(ConnectionBodyParametersList)}) {}
export class CreateConnectionOAuthRequestParameters extends S.Class<CreateConnectionOAuthRequestParameters>("CreateConnectionOAuthRequestParameters")({ClientParameters: CreateConnectionOAuthClientRequestParameters, AuthorizationEndpoint: S.String, HttpMethod: S.String, OAuthHttpParameters: S.optional(ConnectionHttpParameters)}) {}
export class DescribeConnectionResourceParameters extends S.Class<DescribeConnectionResourceParameters>("DescribeConnectionResourceParameters")({ResourceConfigurationArn: S.String, ResourceAssociationArn: S.String}) {}
export class ConnectionBasicAuthResponseParameters extends S.Class<ConnectionBasicAuthResponseParameters>("ConnectionBasicAuthResponseParameters")({Username: S.optional(S.String)}) {}
export class ConnectionApiKeyAuthResponseParameters extends S.Class<ConnectionApiKeyAuthResponseParameters>("ConnectionApiKeyAuthResponseParameters")({ApiKeyName: S.optional(S.String)}) {}
export class UpdateConnectionOAuthRequestParameters extends S.Class<UpdateConnectionOAuthRequestParameters>("UpdateConnectionOAuthRequestParameters")({ClientParameters: S.optional(UpdateConnectionOAuthClientRequestParameters), AuthorizationEndpoint: S.optional(S.String), HttpMethod: S.optional(S.String), OAuthHttpParameters: S.optional(ConnectionHttpParameters)}) {}
export class CreateConnectionAuthRequestParameters extends S.Class<CreateConnectionAuthRequestParameters>("CreateConnectionAuthRequestParameters")({BasicAuthParameters: S.optional(CreateConnectionBasicAuthRequestParameters), OAuthParameters: S.optional(CreateConnectionOAuthRequestParameters), ApiKeyAuthParameters: S.optional(CreateConnectionApiKeyAuthRequestParameters), InvocationHttpParameters: S.optional(ConnectionHttpParameters), ConnectivityParameters: S.optional(ConnectivityResourceParameters)}) {}
export class DescribeConnectionConnectivityParameters extends S.Class<DescribeConnectionConnectivityParameters>("DescribeConnectionConnectivityParameters")({ResourceParameters: DescribeConnectionResourceParameters}) {}
export class PutEventsResultEntry extends S.Class<PutEventsResultEntry>("PutEventsResultEntry")({EventId: S.optional(S.String), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const PutEventsResultEntryList = S.Array(PutEventsResultEntry);
export class PutPartnerEventsResultEntry extends S.Class<PutPartnerEventsResultEntry>("PutPartnerEventsResultEntry")({EventId: S.optional(S.String), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const PutPartnerEventsResultEntryList = S.Array(PutPartnerEventsResultEntry);
export class UpdateConnectionAuthRequestParameters extends S.Class<UpdateConnectionAuthRequestParameters>("UpdateConnectionAuthRequestParameters")({BasicAuthParameters: S.optional(UpdateConnectionBasicAuthRequestParameters), OAuthParameters: S.optional(UpdateConnectionOAuthRequestParameters), ApiKeyAuthParameters: S.optional(UpdateConnectionApiKeyAuthRequestParameters), InvocationHttpParameters: S.optional(ConnectionHttpParameters), ConnectivityParameters: S.optional(ConnectivityResourceParameters)}) {}
export class ConnectionOAuthClientResponseParameters extends S.Class<ConnectionOAuthClientResponseParameters>("ConnectionOAuthClientResponseParameters")({ClientID: S.optional(S.String)}) {}
export class CreateConnectionRequest extends S.Class<CreateConnectionRequest>("CreateConnectionRequest")({Name: S.String, Description: S.optional(S.String), AuthorizationType: S.String, AuthParameters: CreateConnectionAuthRequestParameters, InvocationConnectivityParameters: S.optional(ConnectivityResourceParameters), KmsKeyIdentifier: S.optional(S.String)}) {}
export class CreateEndpointRequest extends S.Class<CreateEndpointRequest>("CreateEndpointRequest")({Name: S.String, Description: S.optional(S.String), RoutingConfig: RoutingConfig, ReplicationConfig: S.optional(ReplicationConfig), EventBuses: EndpointEventBusList, RoleArn: S.optional(S.String)}) {}
export class PutEventsResponse extends S.Class<PutEventsResponse>("PutEventsResponse")({FailedEntryCount: S.optional(S.Number), Entries: S.optional(PutEventsResultEntryList)}) {}
export class PutPartnerEventsResponse extends S.Class<PutPartnerEventsResponse>("PutPartnerEventsResponse")({FailedEntryCount: S.optional(S.Number), Entries: S.optional(PutPartnerEventsResultEntryList)}) {}
export class UpdateConnectionRequest extends S.Class<UpdateConnectionRequest>("UpdateConnectionRequest")({Name: S.String, Description: S.optional(S.String), AuthorizationType: S.optional(S.String), AuthParameters: S.optional(UpdateConnectionAuthRequestParameters), InvocationConnectivityParameters: S.optional(ConnectivityResourceParameters), KmsKeyIdentifier: S.optional(S.String)}) {}
export class ConnectionOAuthResponseParameters extends S.Class<ConnectionOAuthResponseParameters>("ConnectionOAuthResponseParameters")({ClientParameters: S.optional(ConnectionOAuthClientResponseParameters), AuthorizationEndpoint: S.optional(S.String), HttpMethod: S.optional(S.String), OAuthHttpParameters: S.optional(ConnectionHttpParameters)}) {}
export class ConnectionAuthResponseParameters extends S.Class<ConnectionAuthResponseParameters>("ConnectionAuthResponseParameters")({BasicAuthParameters: S.optional(ConnectionBasicAuthResponseParameters), OAuthParameters: S.optional(ConnectionOAuthResponseParameters), ApiKeyAuthParameters: S.optional(ConnectionApiKeyAuthResponseParameters), InvocationHttpParameters: S.optional(ConnectionHttpParameters), ConnectivityParameters: S.optional(DescribeConnectionConnectivityParameters)}) {}
export class CreateConnectionResponse extends S.Class<CreateConnectionResponse>("CreateConnectionResponse")({ConnectionArn: S.optional(S.String), ConnectionState: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date)}) {}
export class CreateEndpointResponse extends S.Class<CreateEndpointResponse>("CreateEndpointResponse")({Name: S.optional(S.String), Arn: S.optional(S.String), RoutingConfig: S.optional(RoutingConfig), ReplicationConfig: S.optional(ReplicationConfig), EventBuses: S.optional(EndpointEventBusList), RoleArn: S.optional(S.String), State: S.optional(S.String)}) {}
export class DescribeConnectionResponse extends S.Class<DescribeConnectionResponse>("DescribeConnectionResponse")({ConnectionArn: S.optional(S.String), Name: S.optional(S.String), Description: S.optional(S.String), InvocationConnectivityParameters: S.optional(DescribeConnectionConnectivityParameters), ConnectionState: S.optional(S.String), StateReason: S.optional(S.String), AuthorizationType: S.optional(S.String), SecretArn: S.optional(S.String), KmsKeyIdentifier: S.optional(S.String), AuthParameters: S.optional(ConnectionAuthResponseParameters), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), LastAuthorizedTime: S.optional(S.Date)}) {}
export class PutTargetsRequest extends S.Class<PutTargetsRequest>("PutTargetsRequest")({Rule: S.String, EventBusName: S.optional(S.String), Targets: TargetList}) {}
export class UpdateConnectionResponse extends S.Class<UpdateConnectionResponse>("UpdateConnectionResponse")({ConnectionArn: S.optional(S.String), ConnectionState: S.optional(S.String), CreationTime: S.optional(S.Date), LastModifiedTime: S.optional(S.Date), LastAuthorizedTime: S.optional(S.Date)}) {}
export class PutTargetsResultEntry extends S.Class<PutTargetsResultEntry>("PutTargetsResultEntry")({TargetId: S.optional(S.String), ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String)}) {}
export const PutTargetsResultEntryList = S.Array(PutTargetsResultEntry);
export class PutTargetsResponse extends S.Class<PutTargetsResponse>("PutTargetsResponse")({FailedEntryCount: S.optional(S.Number), FailedEntries: S.optional(PutTargetsResultEntryList)}) {}

//# Errors
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class InternalException extends S.TaggedError<InternalException>()("InternalException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ManagedRuleException extends S.TaggedError<ManagedRuleException>()("ManagedRuleException", {}) {};
export class OperationDisabledException extends S.TaggedError<OperationDisabledException>()("OperationDisabledException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class InvalidStateException extends S.TaggedError<InvalidStateException>()("InvalidStateException", {}) {};
export class ResourceAlreadyExistsException extends S.TaggedError<ResourceAlreadyExistsException>()("ResourceAlreadyExistsException", {}) {};
export class InvalidEventPatternException extends S.TaggedError<InvalidEventPatternException>()("InvalidEventPatternException", {}) {};
export class IllegalStatusException extends S.TaggedError<IllegalStatusException>()("IllegalStatusException", {message: S.optional(S.String)}) {};
export class PolicyLengthExceededException extends S.TaggedError<PolicyLengthExceededException>()("PolicyLengthExceededException", {message: S.optional(S.String)}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};

//# Operations
/**
 * Deletes the specified archive.
 */export const deleteArchive = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DeleteArchive" }, DeleteArchiveRequest, DeleteArchiveResponse, [ConcurrentModificationException, InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Delete an existing global endpoint. For more information about global endpoints, see
 * Making applications Regional-fault tolerant with global endpoints and event
 * replication in the
 * *Amazon EventBridge User Guide*
 * .
 */export const deleteEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DeleteEndpoint" }, DeleteEndpointRequest, DeleteEndpointResponse, [ConcurrentModificationException, InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified custom event bus or partner event bus. All rules associated with
 * this event bus need to be deleted. You can't delete your account's default event bus.
 */export const deleteEventBus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DeleteEventBus" }, DeleteEventBusRequest, S.Struct({}), [ConcurrentModificationException, InternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Disables the specified rule. A disabled rule won't match any events, and won't
 * self-trigger if it has a schedule expression.
 * 
 * 
 * When you disable a rule, incoming events might continue to match to the disabled rule.
 * Allow a short period of time for changes to take effect.
 */export const disableRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DisableRule" }, DisableRuleRequest, S.Struct({}), [ConcurrentModificationException, InternalException, ManagedRuleException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Enables the specified rule. If the rule does not exist, the operation fails.
 * 
 * 
 * When you enable a rule, incoming events might not immediately start matching to a newly
 * enabled rule. Allow a short period of time for changes to take effect.
 */export const enableRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.EnableRule" }, EnableRuleRequest, S.Struct({}), [ConcurrentModificationException, InternalException, ManagedRuleException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Revokes the permission of another Amazon Web Services account to be able to put events to
 * the specified event bus. Specify the account to revoke by the `StatementId` value
 * that you associated with the account when you granted it permission with
 * `PutPermission`. You can find the `StatementId` by using DescribeEventBus.
 */export const removePermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.RemovePermission" }, RemovePermissionRequest, S.Struct({}), [ConcurrentModificationException, InternalException, OperationDisabledException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can
 * help you organize and categorize your resources. You can also use them to scope user
 * permissions by granting a user permission to access or change only resources with certain tag
 * values. In EventBridge, rules and event buses can be tagged.
 * 
 * 
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as
 * strings of characters.
 * 
 * 
 * You can use the `TagResource` action with a resource that already has tags. If
 * you specify a new tag key, this tag is appended to the list of tags associated with the
 * resource. If you specify a tag key that is already associated with the resource, the new tag
 * value that you specify replaces the previous value for that tag.
 * 
 * 
 * You can associate as many as 50 tags with a resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.TagResource" }, TagResourceRequest, TagResourceResponse, [ConcurrentModificationException, InternalException, ManagedRuleException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge, rules and event buses can be tagged.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [ConcurrentModificationException, InternalException, ManagedRuleException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * You can use this operation to temporarily stop receiving events from the specified partner
 * event source. The matching event bus is not deleted.
 * 
 * 
 * When you deactivate a partner event source, the source goes into PENDING state. If it
 * remains in PENDING state for more than two weeks, it is deleted.
 * 
 * 
 * To activate a deactivated partner event source, use ActivateEventSource.
 */export const deactivateEventSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DeactivateEventSource" }, DeactivateEventSourceRequest, S.Struct({}), [ConcurrentModificationException, InternalException, InvalidStateException, OperationDisabledException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes all authorization parameters from the connection. This lets you remove the secret
 * from the connection so you can reuse it without having to create a new connection.
 */export const deauthorizeConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DeauthorizeConnection" }, DeauthorizeConnectionRequest, DeauthorizeConnectionResponse, [ConcurrentModificationException, InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified API destination.
 */export const deleteApiDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DeleteApiDestination" }, DeleteApiDestinationRequest, DeleteApiDestinationResponse, [ConcurrentModificationException, InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a connection.
 */export const deleteConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DeleteConnection" }, DeleteConnectionRequest, DeleteConnectionResponse, [ConcurrentModificationException, InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation is used by SaaS partners to delete a partner event source. This operation
 * is not used by Amazon Web Services customers.
 * 
 * 
 * When you delete an event source, the status of the corresponding partner event bus in the
 * Amazon Web Services customer account becomes DELETED.
 */export const deletePartnerEventSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DeletePartnerEventSource" }, DeletePartnerEventSourceRequest, S.Struct({}), [ConcurrentModificationException, InternalException, OperationDisabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified rule.
 * 
 * 
 * Before you can delete the rule, you must remove all targets, using RemoveTargets.
 * 
 * 
 * When you delete a rule, incoming events might continue to match to the deleted rule. Allow
 * a short period of time for changes to take effect.
 * 
 * 
 * If you call delete rule multiple times for the same rule, all calls will succeed. When you
 * call delete rule for a non-existent custom eventbus, `ResourceNotFoundException` is
 * returned.
 * 
 * 
 * Managed rules are rules created and managed by another Amazon Web Services service on your
 * behalf. These rules are created by those other Amazon Web Services services to support
 * functionality in those services. You can delete these rules using the `Force`
 * option, but you should do so only if you are sure the other service is not still using that
 * rule.
 */export const deleteRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DeleteRule" }, DeleteRuleRequest, S.Struct({}), [ConcurrentModificationException, InternalException, ManagedRuleException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about an API destination.
 */export const describeApiDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DescribeApiDestination" }, DescribeApiDestinationRequest, DescribeApiDestinationResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about an archive.
 */export const describeArchive = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DescribeArchive" }, DescribeArchiveRequest, DescribeArchiveResponse, [InternalException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the information about an existing global endpoint. For more information about global
 * endpoints, see Making applications
 * Regional-fault tolerant with global endpoints and event replication in the
 * 
 * *Amazon EventBridge User Guide*
 * .
 */export const describeEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DescribeEndpoint" }, DescribeEndpointRequest, DescribeEndpointResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the
 * associated policy. For custom event buses and partner event buses, it displays the name, ARN,
 * policy, state, and creation time.
 * 
 * 
 * To enable your account to receive events from other accounts on its default event bus,
 * use PutPermission.
 * 
 * 
 * For more information about partner event buses, see CreateEventBus.
 */export const describeEventBus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DescribeEventBus" }, DescribeEventBusRequest, DescribeEventBusResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation lists details about a partner event source that is shared with your
 * account.
 */export const describeEventSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DescribeEventSource" }, DescribeEventSourceRequest, DescribeEventSourceResponse, [InternalException, OperationDisabledException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * An SaaS partner can use this operation to list details about a partner event source that
 * they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use DescribeEventSource to see details about a partner event source that is shared with
 * them.
 */export const describePartnerEventSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DescribePartnerEventSource" }, DescribePartnerEventSourceRequest, DescribePartnerEventSourceResponse, [InternalException, OperationDisabledException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about a replay. Use `DescribeReplay` to determine the
 * progress of a running replay. A replay processes events to replay based on the time in the
 * event, and replays them using 1 minute intervals. If you use `StartReplay` and
 * specify an `EventStartTime` and an `EventEndTime` that covers a 20
 * minute time range, the events are replayed from the first minute of that 20 minute range
 * first. Then the events from the second minute are replayed. You can use
 * `DescribeReplay` to determine the progress of a replay. The value returned for
 * `EventLastReplayedTime` indicates the time within the specified time range
 * associated with the last event replayed.
 */export const describeReplay = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DescribeReplay" }, DescribeReplayRequest, DescribeReplayResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes the specified rule.
 * 
 * 
 * DescribeRule does not list the targets of a rule. To see the targets associated with a
 * rule, use ListTargetsByRule.
 */export const describeRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DescribeRule" }, DescribeRuleRequest, DescribeRuleResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the rules for the specified target. You can see which of the rules in Amazon
 * EventBridge can invoke a specific target in your account.
 * 
 * 
 * The maximum number of results per page for requests is 100.
 */export const listRuleNamesByTarget = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListRuleNamesByTarget" }, ListRuleNamesByTargetRequest, ListRuleNamesByTargetResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays the tags associated with an EventBridge resource. In EventBridge, rules and event
 * buses can be tagged.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the targets assigned to the specified rule.
 * 
 * 
 * The maximum number of results per page for requests is 100.
 */export const listTargetsByRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListTargetsByRule" }, ListTargetsByRuleRequest, ListTargetsByRuleResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the specified rule. Rules are enabled by default, or based on value of
 * the state. You can disable a rule using DisableRule.
 * 
 * 
 * A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner
 * services or applications go to the matching partner event bus. If you have custom applications
 * or services, you can specify whether their events go to your default event bus or a custom
 * event bus that you have created. For more information, see CreateEventBus.
 * 
 * 
 * If you are updating an existing rule, the rule is replaced with what you specify in this
 * `PutRule` command. If you omit arguments in `PutRule`, the old values
 * for those arguments are not kept. Instead, they are replaced with null values.
 * 
 * 
 * When you create or update a rule, incoming events might not immediately start matching to
 * new or updated rules. Allow a short period of time for changes to take effect.
 * 
 * 
 * A rule must contain at least an EventPattern or ScheduleExpression. Rules with
 * EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions
 * self-trigger based on the given schedule. A rule can have both an EventPattern and a
 * ScheduleExpression, in which case the rule triggers on matching events as well as on a
 * schedule.
 * 
 * 
 * When you initially create a rule, you can optionally assign one or more tags to the rule.
 * Tags can help you organize and categorize your resources. You can also use them to scope user
 * permissions, by granting a user permission to access or change only rules with certain tag
 * values. To use the `PutRule` operation and assign tags, you must have both the
 * `events:PutRule` and `events:TagResource` permissions.
 * 
 * 
 * If you are updating an existing rule, any tags you specify in the `PutRule`
 * operation are ignored. To update the tags of an existing rule, use TagResource and UntagResource.
 * 
 * 
 * Most services in Amazon Web Services treat : or / as the same character in Amazon Resource
 * Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to
 * use the correct ARN characters when creating event patterns so that they match the ARN syntax
 * in the event you want to match.
 * 
 * 
 * In EventBridge, it is possible to create rules that lead to infinite loops, where a rule
 * is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket,
 * and trigger software to change them to the desired state. If the rule is not written
 * carefully, the subsequent change to the ACLs fires the rule again, creating an infinite
 * loop.
 * 
 * 
 * To prevent this, write the rules so that the triggered actions do not re-fire the same
 * rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead
 * of after any change.
 * 
 * 
 * An infinite loop can quickly cause higher than expected charges. We recommend that you use
 * budgeting, which alerts you when charges exceed your specified limit. For more information,
 * see Managing Your Costs with
 * Budgets.
 * 
 * 
 * To create a rule that filters for management events from Amazon Web Services services, see
 * Receiving read-only management events from Amazon Web Services services in the
 * *EventBridge User Guide*.
 */export const putRule = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.PutRule" }, PutRuleRequest, PutRuleResponse, [ConcurrentModificationException, InternalException, InvalidEventPatternException, LimitExceededException, ManagedRuleException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tests whether the specified event pattern matches the provided event.
 * 
 * 
 * Most services in Amazon Web Services treat : or / as the same character in Amazon Resource
 * Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be
 * sure to use the correct ARN characters when creating event patterns so that they match the ARN
 * syntax in the event you want to match.
 */export const testEventPattern = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.TestEventPattern" }, TestEventPatternRequest, TestEventPatternResponse, [InternalException, InvalidEventPatternException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an API destination.
 */export const updateApiDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.UpdateApiDestination" }, UpdateApiDestinationRequest, UpdateApiDestinationResponse, [ConcurrentModificationException, InternalException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified archive.
 */export const updateArchive = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.UpdateArchive" }, UpdateArchiveRequest, UpdateArchiveResponse, [ConcurrentModificationException, InternalException, InvalidEventPatternException, LimitExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Update an existing endpoint. For more information about global endpoints, see Making
 * applications Regional-fault tolerant with global endpoints and event replication in
 * the
 * *Amazon EventBridge User Guide*
 * .
 */export const updateEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.UpdateEndpoint" }, UpdateEndpointRequest, UpdateEndpointResponse, [ConcurrentModificationException, InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the specified event bus.
 */export const updateEventBus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.UpdateEventBus" }, UpdateEventBusRequest, UpdateEventBusResponse, [ConcurrentModificationException, InternalException, OperationDisabledException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Activates a partner event source that has been deactivated. Once activated, your matching
 * event bus will start receiving events from the event source.
 */export const activateEventSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ActivateEventSource" }, ActivateEventSourceRequest, S.Struct({}), [ConcurrentModificationException, InternalException, InvalidStateException, OperationDisabledException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Cancels the specified replay.
 */export const cancelReplay = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.CancelReplay" }, CancelReplayRequest, CancelReplayResponse, [ConcurrentModificationException, IllegalStatusException, InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an API destination, which is an HTTP invocation endpoint configured as a target
 * for events.
 * 
 * 
 * API destinations do not support private destinations, such as interface VPC
 * endpoints.
 * 
 * 
 * For more information, see API destinations in the
 * *EventBridge User Guide*.
 */export const createApiDestination = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.CreateApiDestination" }, CreateApiDestinationRequest, CreateApiDestinationResponse, [InternalException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an archive of events with the specified settings. When you create an archive,
 * incoming events might not immediately start being sent to the archive. Allow a short period of
 * time for changes to take effect. If you do not specify a pattern to filter events sent to the
 * archive, all events are sent to the archive except replayed events. Replayed events are not
 * sent to an archive.
 * 
 * 
 * 
 * 
 * If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a
 * customer managed key for any archives for the event bus as well.
 * 
 * 
 * For more information, see Encrypting archives in the *Amazon EventBridge User Guide*.
 */export const createArchive = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.CreateArchive" }, CreateArchiveRequest, CreateArchiveResponse, [ConcurrentModificationException, InternalException, InvalidEventPatternException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new event bus within your account. This can be a custom event bus which you can
 * use to receive events from your custom applications and services, or it can be a partner event
 * bus which can be matched to a partner event source.
 */export const createEventBus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.CreateEventBus" }, CreateEventBusRequest, CreateEventBusResponse, [ConcurrentModificationException, InternalException, InvalidStateException, LimitExceededException, OperationDisabledException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Called by an SaaS partner to create a partner event source. This operation is not used by
 * Amazon Web Services customers.
 * 
 * 
 * Each partner event source can be used by one Amazon Web Services account to create a
 * matching partner event bus in that Amazon Web Services account. A SaaS partner must create one
 * partner event source for each Amazon Web Services account that wants to receive those event
 * types.
 * 
 * 
 * A partner event source creates events based on resources within the SaaS partner's service
 * or application.
 * 
 * 
 * An Amazon Web Services account that creates a partner event bus that matches the partner
 * event source can use that event bus to receive events from the partner, and then process them
 * using Amazon Web Services Events rules and targets.
 * 
 * 
 * Partner event source names follow this format:
 * 
 * 
 * 
 * 
 * *partner_name*/*event_namespace*/*event_name*
 * 
 * 
 * 
 * 
 * 
 * - *partner_name* is determined during partner registration, and
 * identifies the partner to Amazon Web Services customers.
 * 
 * 
 * 
 * - *event_namespace* is determined by the partner, and is a way for
 * the partner to categorize their events.
 * 
 * 
 * 
 * - *event_name* is determined by the partner, and should uniquely
 * identify an event-generating resource within the partner system.
 * 
 * 
 * The *event_name* must be unique across all Amazon Web Services
 * customers. This is because the event source is a shared resource between the partner and
 * customer accounts, and each partner event source unique in the partner account.
 * 
 * 
 * 
 * 
 * 
 * The combination of *event_namespace* and
 * *event_name* should help Amazon Web Services customers decide whether to
 * create an event bus to receive these events.
 */export const createPartnerEventSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.CreatePartnerEventSource" }, CreatePartnerEventSourceRequest, CreatePartnerEventSourceResponse, [ConcurrentModificationException, InternalException, LimitExceededException, OperationDisabledException, ResourceAlreadyExistsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of API destination in the account in the current Region.
 */export const listApiDestinations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListApiDestinations" }, ListApiDestinationsRequest, ListApiDestinationsResponse, [InternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your archives. You can either list all the archives or you can provide a prefix to
 * match to the archive names. Filter parameters are exclusive.
 */export const listArchives = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListArchives" }, ListArchivesRequest, ListArchivesResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a list of connections from the account.
 */export const listConnections = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListConnections" }, ListConnectionsRequest, ListConnectionsResponse, [InternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the global endpoints associated with this account. For more information about global
 * endpoints, see Making applications
 * Regional-fault tolerant with global endpoints and event replication in the
 * 
 * *Amazon EventBridge User Guide*
 * .
 */export const listEndpoints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListEndpoints" }, ListEndpointsRequest, ListEndpointsResponse, [InternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists all the event buses in your account, including the default event bus, custom event
 * buses, and partner event buses.
 */export const listEventBuses = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListEventBuses" }, ListEventBusesRequest, ListEventBusesResponse, [InternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * You can use this to see all the partner event sources that have been shared with your
 * Amazon Web Services account. For more information about partner event sources, see CreateEventBus.
 */export const listEventSources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListEventSources" }, ListEventSourcesRequest, ListEventSourcesResponse, [InternalException, OperationDisabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * An SaaS partner can use this operation to display the Amazon Web Services account ID that a
 * particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.
 */export const listPartnerEventSourceAccounts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListPartnerEventSourceAccounts" }, ListPartnerEventSourceAccountsRequest, ListPartnerEventSourceAccountsResponse, [InternalException, OperationDisabledException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * An SaaS partner can use this operation to list all the partner event source names that
 * they have created. This operation is not used by Amazon Web Services customers.
 */export const listPartnerEventSources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListPartnerEventSources" }, ListPartnerEventSourcesRequest, ListPartnerEventSourcesResponse, [InternalException, OperationDisabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your replays. You can either list all the replays or you can provide a prefix to
 * match to the replay names. Filter parameters are exclusive.
 */export const listReplays = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListReplays" }, ListReplaysRequest, ListReplaysResponse, [InternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your Amazon EventBridge rules. You can either list all the rules or you can
 * provide a prefix to match to the rule names.
 * 
 * 
 * The maximum number of results per page for requests is 100.
 * 
 * 
 * ListRules does not list the targets of a rule. To see the targets associated with a rule,
 * use ListTargetsByRule.
 */export const listRules = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.ListRules" }, ListRulesRequest, ListRulesResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Running `PutPermission` permits the specified Amazon Web Services account or Amazon Web Services organization
 * to put events to the specified *event bus*. Amazon EventBridge rules in your account are triggered by these events arriving to an event bus in your
 * account.
 * 
 * 
 * For another account to send events to your account, that external account must have an
 * EventBridge rule with your account's event bus as a target.
 * 
 * 
 * To enable multiple Amazon Web Services accounts to put events to your event bus, run
 * `PutPermission` once for each of these accounts. Or, if all the accounts are
 * members of the same Amazon Web Services organization, you can run `PutPermission`
 * once specifying `Principal` as "*" and specifying the Amazon Web Services
 * organization ID in `Condition`, to grant permissions to all accounts in that
 * organization.
 * 
 * 
 * If you grant permissions using an organization, then accounts in that organization must
 * specify a `RoleArn` with proper permissions when they use `PutTarget` to
 * add your account's event bus as a target. For more information, see Sending and
 * Receiving Events Between Amazon Web Services Accounts in the *Amazon EventBridge User Guide*.
 * 
 * 
 * The permission policy on the event bus cannot exceed 10 KB in size.
 */export const putPermission = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.PutPermission" }, PutPermissionRequest, S.Struct({}), [ConcurrentModificationException, InternalException, OperationDisabledException, PolicyLengthExceededException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes the specified targets from the specified rule. When the rule is triggered, those
 * targets are no longer be invoked.
 * 
 * 
 * 
 * 
 * A successful execution of `RemoveTargets` doesn't guarantee all targets are
 * removed from the rule, it means that the target(s) listed in the request are removed.
 * 
 * 
 * 
 * 
 * When you remove a target, when the associated rule triggers, removed targets might
 * continue to be invoked. Allow a short period of time for changes to take effect.
 * 
 * 
 * This action can partially fail if too many requests are made at the same time. If that
 * happens, `FailedEntryCount` is non-zero in the response and each entry in
 * `FailedEntries` provides the ID of the failed target and the error code.
 * 
 * 
 * The maximum number of entries per request is 10.
 */export const removeTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.RemoveTargets" }, RemoveTargetsRequest, RemoveTargetsResponse, [ConcurrentModificationException, InternalException, ManagedRuleException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts the specified replay. Events are not necessarily replayed in the exact same order
 * that they were added to the archive. A replay processes events to replay based on the time in
 * the event, and replays them using 1 minute intervals. If you specify an
 * `EventStartTime` and an `EventEndTime` that covers a 20 minute time
 * range, the events are replayed from the first minute of that 20 minute range first. Then the
 * events from the second minute are replayed. You can use `DescribeReplay` to
 * determine the progress of a replay. The value returned for `EventLastReplayedTime`
 * indicates the time within the specified time range associated with the last event
 * replayed.
 */export const startReplay = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.StartReplay" }, StartReplayRequest, StartReplayResponse, [InternalException, InvalidEventPatternException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sends custom events to Amazon EventBridge so that they can be matched to rules.
 * 
 * 
 * You can batch multiple event entries into one request for efficiency.
 * However, the total entry size must be less than 256KB. You can calculate the entry size before you send the events.
 * For more information, see Calculating PutEvents event entry
 * size in the
 * *Amazon EventBridge User Guide*
 * .
 * 
 * 
 * PutEvents accepts the data in JSON format. For the JSON number (integer) data type, the
 * constraints are: a minimum value of -9,223,372,036,854,775,808 and a maximum value of
 * 9,223,372,036,854,775,807.
 * 
 * 
 * 
 * 
 * PutEvents will only process nested JSON up to 1000 levels deep.
 */export const putEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.PutEvents" }, PutEventsRequest, PutEventsResponse, [InternalException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.
 * 
 * 
 * For information on calculating event batch size, see Calculating EventBridge PutEvents event
 * entry size in the *EventBridge User Guide*.
 */export const putPartnerEvents = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.PutPartnerEvents" }, PutPartnerEventsRequest, PutPartnerEventsResponse, [InternalException, OperationDisabledException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a global endpoint. Global endpoints improve your application's availability by
 * making it regional-fault tolerant. To do this, you define a primary and secondary Region with
 * event buses in each Region. You also create a Amazon Route 53 health check that will
 * tell EventBridge to route events to the secondary Region when an "unhealthy" state is
 * encountered and events will be routed back to the primary Region when the health check reports
 * a "healthy" state.
 */export const createEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.CreateEndpoint" }, CreateEndpointRequest, CreateEndpointResponse, [InternalException, LimitExceededException, ResourceAlreadyExistsException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves details about a connection.
 */export const describeConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.DescribeConnection" }, DescribeConnectionRequest, DescribeConnectionResponse, [InternalException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a connection. A connection defines the authorization type and credentials to use
 * for authorization with an API destination HTTP endpoint.
 * 
 * 
 * For more information, see Connections for endpoint targets in the *Amazon EventBridge User Guide*.
 */export const createConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.CreateConnection" }, CreateConnectionRequest, CreateConnectionResponse, [AccessDeniedException, InternalException, LimitExceededException, ResourceAlreadyExistsException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates settings for a connection.
 */export const updateConnection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.UpdateConnection" }, UpdateConnectionRequest, UpdateConnectionResponse, [AccessDeniedException, ConcurrentModificationException, InternalException, LimitExceededException, ResourceNotFoundException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds the specified targets to the specified rule, or updates the targets if they are
 * already associated with the rule.
 * 
 * 
 * Targets are the resources that are invoked when a rule is triggered.
 * 
 * 
 * The maximum number of entries per request is 10.
 * 
 * 
 * 
 * 
 * Each rule can have up to five (5) targets associated with it at one time.
 * 
 * 
 * 
 * 
 * For a list of services you can configure as targets for events, see EventBridge targets
 * in the
 * *Amazon EventBridge User Guide*
 * .
 * 
 * 
 * Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The
 * built-in targets are:
 * 
 * 
 * 
 * - `Amazon EBS CreateSnapshot API call`
 * 
 * 
 * 
 * 
 * - `Amazon EC2 RebootInstances API call`
 * 
 * 
 * 
 * 
 * - `Amazon EC2 StopInstances API call`
 * 
 * 
 * 
 * 
 * - `Amazon EC2 TerminateInstances API call`
 * 
 * 
 * 
 * 
 * 
 * 
 * For some target types, `PutTargets` provides target-specific parameters. If the
 * target is a Kinesis data stream, you can optionally specify which shard the event
 * goes to by using the `KinesisParameters` argument. To invoke a command on multiple
 * EC2 instances with one rule, you can use the `RunCommandParameters` field.
 * 
 * 
 * To be able to make API calls against the resources that you own, Amazon EventBridge
 * needs the appropriate permissions:
 * 
 * 
 * 
 * - For Lambda and Amazon SNS resources, EventBridge relies
 * on resource-based policies.
 * 
 * 
 * 
 * - For EC2 instances, Kinesis Data Streams, Step Functions state machines and
 * API Gateway APIs, EventBridge relies on IAM roles that you specify in the
 * `RoleARN` argument in `PutTargets`.
 * 
 * 
 * 
 * 
 * 
 * For more information, see Authentication
 * and Access Control in the
 * *Amazon EventBridge User Guide*
 * .
 * 
 * 
 * If another Amazon Web Services account is in the same region and has granted you permission
 * (using `PutPermission`), you can send events to that account. Set that account's
 * event bus as a target of the rules in your account. To send the matched events to the other
 * account, specify that account's event bus as the `Arn` value when you run
 * `PutTargets`. If your account sends events to another account, your account is
 * charged for each sent event. Each event sent to another account is charged as a custom event.
 * The account receiving the event is not charged. For more information, see Amazon EventBridge Pricing.
 * 
 * 
 * 
 * 
 * 
 * `Input`, `InputPath`, and `InputTransformer` are not
 * available with `PutTarget` if the target is an event bus of a different Amazon Web Services account.
 * 
 * 
 * 
 * 
 * If you are setting the event bus of another account as the target, and that account
 * granted permission to your account through an organization instead of directly by the account
 * ID, then you must specify a `RoleArn` with proper permissions in the
 * `Target` structure. For more information, see Sending and
 * Receiving Events Between Amazon Web Services Accounts in the *Amazon EventBridge User Guide*.
 * 
 * 
 * 
 * 
 * If you have an IAM role on a cross-account event bus target, a `PutTargets`
 * call without a role on the same target (same `Id` and `Arn`) will not
 * remove the role.
 * 
 * 
 * 
 * 
 * For more information about enabling cross-account events, see PutPermission.
 * 
 * 
 * 
 * **Input**, **InputPath**, and
 * **InputTransformer** are mutually exclusive and optional
 * parameters of a target. When a rule is triggered due to a matched event:
 * 
 * 
 * 
 * - If none of the following arguments are specified for a target, then the entire event
 * is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or
 * Amazon ECS task, in which case nothing from the event is passed to the target).
 * 
 * 
 * 
 * - If **Input** is specified in the form of valid JSON, then
 * the matched event is overridden with this constant.
 * 
 * 
 * 
 * - If **InputPath** is specified in the form of JSONPath
 * (for example, `$.detail`), then only the part of the event specified in the
 * path is passed to the target (for example, only the detail part of the event is
 * passed).
 * 
 * 
 * 
 * - If **InputTransformer** is specified, then one or more
 * specified JSONPaths are extracted from the event and used as values in a template that you
 * specify as the input to the target.
 * 
 * 
 * 
 * 
 * 
 * When you specify `InputPath` or `InputTransformer`, you must use
 * JSON dot notation, not bracket notation.
 * 
 * 
 * When you add targets to a rule and the associated rule triggers soon after, new or updated
 * targets might not be immediately invoked. Allow a short period of time for changes to take
 * effect.
 * 
 * 
 * This action can partially fail if too many requests are made at the same time. If that
 * happens, `FailedEntryCount` is non-zero in the response and each entry in
 * `FailedEntries` provides the ID of the failed target and the error code.
 */export const putTargets = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-10-07", uri: "/", method: "POST", sdkId: "EventBridge", sigV4ServiceName: "events", name: "AWSEvents.PutTargets" }, PutTargetsRequest, PutTargetsResponse, [ConcurrentModificationException, InternalException, LimitExceededException, ManagedRuleException, ResourceNotFoundException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
