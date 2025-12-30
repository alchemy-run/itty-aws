import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class AssociateApiRequest extends S.Class<AssociateApiRequest>("AssociateApiRequest")({domainName: S.String, apiId: S.String}) {}
export class SourceApiAssociationConfig extends S.Class<SourceApiAssociationConfig>("SourceApiAssociationConfig")({mergeType: S.optional(S.String)}) {}
export class AssociateSourceGraphqlApiRequest extends S.Class<AssociateSourceGraphqlApiRequest>("AssociateSourceGraphqlApiRequest")({mergedApiIdentifier: S.String, sourceApiIdentifier: S.String, description: S.optional(S.String), sourceApiAssociationConfig: S.optional(SourceApiAssociationConfig)}) {}
export class CreateApiCacheRequest extends S.Class<CreateApiCacheRequest>("CreateApiCacheRequest")({apiId: S.String, ttl: S.Number, transitEncryptionEnabled: S.optional(S.Boolean), atRestEncryptionEnabled: S.optional(S.Boolean), apiCachingBehavior: S.String, type: S.String, healthMetricsConfig: S.optional(S.String)}) {}
export class CreateApiKeyRequest extends S.Class<CreateApiKeyRequest>("CreateApiKeyRequest")({apiId: S.String, description: S.optional(S.String), expires: S.optional(S.Number)}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class CreateDomainNameRequest extends S.Class<CreateDomainNameRequest>("CreateDomainNameRequest")({domainName: S.String, certificateArn: S.String, description: S.optional(S.String), tags: S.optional(TagMap)}) {}
export class CreateTypeRequest extends S.Class<CreateTypeRequest>("CreateTypeRequest")({apiId: S.String, definition: S.String, format: S.String}) {}
export class DeleteApiRequest extends S.Class<DeleteApiRequest>("DeleteApiRequest")({apiId: S.String}) {}
export class DeleteApiResponse extends S.Class<DeleteApiResponse>("DeleteApiResponse")({}) {}
export class DeleteApiCacheRequest extends S.Class<DeleteApiCacheRequest>("DeleteApiCacheRequest")({apiId: S.String}) {}
export class DeleteApiCacheResponse extends S.Class<DeleteApiCacheResponse>("DeleteApiCacheResponse")({}) {}
export class DeleteApiKeyRequest extends S.Class<DeleteApiKeyRequest>("DeleteApiKeyRequest")({apiId: S.String, id: S.String}) {}
export class DeleteApiKeyResponse extends S.Class<DeleteApiKeyResponse>("DeleteApiKeyResponse")({}) {}
export class DeleteChannelNamespaceRequest extends S.Class<DeleteChannelNamespaceRequest>("DeleteChannelNamespaceRequest")({apiId: S.String, name: S.String}) {}
export class DeleteChannelNamespaceResponse extends S.Class<DeleteChannelNamespaceResponse>("DeleteChannelNamespaceResponse")({}) {}
export class DeleteDataSourceRequest extends S.Class<DeleteDataSourceRequest>("DeleteDataSourceRequest")({apiId: S.String, name: S.String}) {}
export class DeleteDataSourceResponse extends S.Class<DeleteDataSourceResponse>("DeleteDataSourceResponse")({}) {}
export class DeleteDomainNameRequest extends S.Class<DeleteDomainNameRequest>("DeleteDomainNameRequest")({domainName: S.String}) {}
export class DeleteDomainNameResponse extends S.Class<DeleteDomainNameResponse>("DeleteDomainNameResponse")({}) {}
export class DeleteFunctionRequest extends S.Class<DeleteFunctionRequest>("DeleteFunctionRequest")({apiId: S.String, functionId: S.String}) {}
export class DeleteFunctionResponse extends S.Class<DeleteFunctionResponse>("DeleteFunctionResponse")({}) {}
export class DeleteGraphqlApiRequest extends S.Class<DeleteGraphqlApiRequest>("DeleteGraphqlApiRequest")({apiId: S.String}) {}
export class DeleteGraphqlApiResponse extends S.Class<DeleteGraphqlApiResponse>("DeleteGraphqlApiResponse")({}) {}
export class DeleteResolverRequest extends S.Class<DeleteResolverRequest>("DeleteResolverRequest")({apiId: S.String, typeName: S.String, fieldName: S.String}) {}
export class DeleteResolverResponse extends S.Class<DeleteResolverResponse>("DeleteResolverResponse")({}) {}
export class DeleteTypeRequest extends S.Class<DeleteTypeRequest>("DeleteTypeRequest")({apiId: S.String, typeName: S.String}) {}
export class DeleteTypeResponse extends S.Class<DeleteTypeResponse>("DeleteTypeResponse")({}) {}
export class DisassociateApiRequest extends S.Class<DisassociateApiRequest>("DisassociateApiRequest")({domainName: S.String}) {}
export class DisassociateApiResponse extends S.Class<DisassociateApiResponse>("DisassociateApiResponse")({}) {}
export class DisassociateMergedGraphqlApiRequest extends S.Class<DisassociateMergedGraphqlApiRequest>("DisassociateMergedGraphqlApiRequest")({sourceApiIdentifier: S.String, associationId: S.String}) {}
export class DisassociateSourceGraphqlApiRequest extends S.Class<DisassociateSourceGraphqlApiRequest>("DisassociateSourceGraphqlApiRequest")({mergedApiIdentifier: S.String, associationId: S.String}) {}
export class AppSyncRuntime extends S.Class<AppSyncRuntime>("AppSyncRuntime")({name: S.String, runtimeVersion: S.String}) {}
export class EvaluateCodeRequest extends S.Class<EvaluateCodeRequest>("EvaluateCodeRequest")({runtime: AppSyncRuntime, code: S.String, context: S.String, function: S.optional(S.String)}) {}
export class EvaluateMappingTemplateRequest extends S.Class<EvaluateMappingTemplateRequest>("EvaluateMappingTemplateRequest")({template: S.String, context: S.String}) {}
export class FlushApiCacheRequest extends S.Class<FlushApiCacheRequest>("FlushApiCacheRequest")({apiId: S.String}) {}
export class FlushApiCacheResponse extends S.Class<FlushApiCacheResponse>("FlushApiCacheResponse")({}) {}
export class GetApiRequest extends S.Class<GetApiRequest>("GetApiRequest")({apiId: S.String}) {}
export class GetApiAssociationRequest extends S.Class<GetApiAssociationRequest>("GetApiAssociationRequest")({domainName: S.String}) {}
export class GetApiCacheRequest extends S.Class<GetApiCacheRequest>("GetApiCacheRequest")({apiId: S.String}) {}
export class GetChannelNamespaceRequest extends S.Class<GetChannelNamespaceRequest>("GetChannelNamespaceRequest")({apiId: S.String, name: S.String}) {}
export class GetDataSourceRequest extends S.Class<GetDataSourceRequest>("GetDataSourceRequest")({apiId: S.String, name: S.String}) {}
export class GetDataSourceIntrospectionRequest extends S.Class<GetDataSourceIntrospectionRequest>("GetDataSourceIntrospectionRequest")({introspectionId: S.String, includeModelsSDL: S.optional(S.Boolean), nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class GetDomainNameRequest extends S.Class<GetDomainNameRequest>("GetDomainNameRequest")({domainName: S.String}) {}
export class GetFunctionRequest extends S.Class<GetFunctionRequest>("GetFunctionRequest")({apiId: S.String, functionId: S.String}) {}
export class GetGraphqlApiRequest extends S.Class<GetGraphqlApiRequest>("GetGraphqlApiRequest")({apiId: S.String}) {}
export class GetGraphqlApiEnvironmentVariablesRequest extends S.Class<GetGraphqlApiEnvironmentVariablesRequest>("GetGraphqlApiEnvironmentVariablesRequest")({apiId: S.String}) {}
export class GetIntrospectionSchemaRequest extends S.Class<GetIntrospectionSchemaRequest>("GetIntrospectionSchemaRequest")({apiId: S.String, format: S.String, includeDirectives: S.optional(S.Boolean)}) {}
export class GetResolverRequest extends S.Class<GetResolverRequest>("GetResolverRequest")({apiId: S.String, typeName: S.String, fieldName: S.String}) {}
export class GetSchemaCreationStatusRequest extends S.Class<GetSchemaCreationStatusRequest>("GetSchemaCreationStatusRequest")({apiId: S.String}) {}
export class GetSourceApiAssociationRequest extends S.Class<GetSourceApiAssociationRequest>("GetSourceApiAssociationRequest")({mergedApiIdentifier: S.String, associationId: S.String}) {}
export class GetTypeRequest extends S.Class<GetTypeRequest>("GetTypeRequest")({apiId: S.String, typeName: S.String, format: S.String}) {}
export class ListApiKeysRequest extends S.Class<ListApiKeysRequest>("ListApiKeysRequest")({apiId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListApisRequest extends S.Class<ListApisRequest>("ListApisRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListChannelNamespacesRequest extends S.Class<ListChannelNamespacesRequest>("ListChannelNamespacesRequest")({apiId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDataSourcesRequest extends S.Class<ListDataSourcesRequest>("ListDataSourcesRequest")({apiId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListDomainNamesRequest extends S.Class<ListDomainNamesRequest>("ListDomainNamesRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListFunctionsRequest extends S.Class<ListFunctionsRequest>("ListFunctionsRequest")({apiId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListGraphqlApisRequest extends S.Class<ListGraphqlApisRequest>("ListGraphqlApisRequest")({nextToken: S.optional(S.String), maxResults: S.optional(S.Number), apiType: S.optional(S.String), owner: S.optional(S.String)}) {}
export class ListResolversRequest extends S.Class<ListResolversRequest>("ListResolversRequest")({apiId: S.String, typeName: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListResolversByFunctionRequest extends S.Class<ListResolversByFunctionRequest>("ListResolversByFunctionRequest")({apiId: S.String, functionId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListSourceApiAssociationsRequest extends S.Class<ListSourceApiAssociationsRequest>("ListSourceApiAssociationsRequest")({apiId: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class ListTypesRequest extends S.Class<ListTypesRequest>("ListTypesRequest")({apiId: S.String, format: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class ListTypesByAssociationRequest extends S.Class<ListTypesByAssociationRequest>("ListTypesByAssociationRequest")({mergedApiIdentifier: S.String, associationId: S.String, format: S.String, nextToken: S.optional(S.String), maxResults: S.optional(S.Number)}) {}
export class StartSchemaCreationRequest extends S.Class<StartSchemaCreationRequest>("StartSchemaCreationRequest")({apiId: S.String, definition: H.StreamBody()}) {}
export class StartSchemaMergeRequest extends S.Class<StartSchemaMergeRequest>("StartSchemaMergeRequest")({associationId: S.String, mergedApiIdentifier: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class CognitoConfig extends S.Class<CognitoConfig>("CognitoConfig")({userPoolId: S.String, awsRegion: S.String, appIdClientRegex: S.optional(S.String)}) {}
export class OpenIDConnectConfig extends S.Class<OpenIDConnectConfig>("OpenIDConnectConfig")({issuer: S.String, clientId: S.optional(S.String), iatTTL: S.optional(S.Number), authTTL: S.optional(S.Number)}) {}
export class LambdaAuthorizerConfig extends S.Class<LambdaAuthorizerConfig>("LambdaAuthorizerConfig")({authorizerResultTtlInSeconds: S.optional(S.Number), authorizerUri: S.String, identityValidationExpression: S.optional(S.String)}) {}
export class AuthProvider extends S.Class<AuthProvider>("AuthProvider")({authType: S.String, cognitoConfig: S.optional(CognitoConfig), openIDConnectConfig: S.optional(OpenIDConnectConfig), lambdaAuthorizerConfig: S.optional(LambdaAuthorizerConfig)}) {}
export const AuthProviders = S.Array(AuthProvider);
export class AuthMode extends S.Class<AuthMode>("AuthMode")({authType: S.String}) {}
export const AuthModes = S.Array(AuthMode);
export class EventLogConfig extends S.Class<EventLogConfig>("EventLogConfig")({logLevel: S.String, cloudWatchLogsRoleArn: S.String}) {}
export class EventConfig extends S.Class<EventConfig>("EventConfig")({authProviders: AuthProviders, connectionAuthModes: AuthModes, defaultPublishAuthModes: AuthModes, defaultSubscribeAuthModes: AuthModes, logConfig: S.optional(EventLogConfig)}) {}
export class UpdateApiRequest extends S.Class<UpdateApiRequest>("UpdateApiRequest")({apiId: S.String, name: S.String, ownerContact: S.optional(S.String), eventConfig: EventConfig}) {}
export class UpdateApiCacheRequest extends S.Class<UpdateApiCacheRequest>("UpdateApiCacheRequest")({apiId: S.String, ttl: S.Number, apiCachingBehavior: S.String, type: S.String, healthMetricsConfig: S.optional(S.String)}) {}
export class UpdateApiKeyRequest extends S.Class<UpdateApiKeyRequest>("UpdateApiKeyRequest")({apiId: S.String, id: S.String, description: S.optional(S.String), expires: S.optional(S.Number)}) {}
export class LambdaConfig extends S.Class<LambdaConfig>("LambdaConfig")({invokeType: S.optional(S.String)}) {}
export class Integration extends S.Class<Integration>("Integration")({dataSourceName: S.String, lambdaConfig: S.optional(LambdaConfig)}) {}
export class HandlerConfig extends S.Class<HandlerConfig>("HandlerConfig")({behavior: S.String, integration: Integration}) {}
export class HandlerConfigs extends S.Class<HandlerConfigs>("HandlerConfigs")({onPublish: S.optional(HandlerConfig), onSubscribe: S.optional(HandlerConfig)}) {}
export class UpdateChannelNamespaceRequest extends S.Class<UpdateChannelNamespaceRequest>("UpdateChannelNamespaceRequest")({apiId: S.String, name: S.String, subscribeAuthModes: S.optional(AuthModes), publishAuthModes: S.optional(AuthModes), codeHandlers: S.optional(S.String), handlerConfigs: S.optional(HandlerConfigs)}) {}
export class DeltaSyncConfig extends S.Class<DeltaSyncConfig>("DeltaSyncConfig")({baseTableTTL: S.optional(S.Number), deltaSyncTableName: S.optional(S.String), deltaSyncTableTTL: S.optional(S.Number)}) {}
export class DynamodbDataSourceConfig extends S.Class<DynamodbDataSourceConfig>("DynamodbDataSourceConfig")({tableName: S.String, awsRegion: S.String, useCallerCredentials: S.optional(S.Boolean), deltaSyncConfig: S.optional(DeltaSyncConfig), versioned: S.optional(S.Boolean)}) {}
export class LambdaDataSourceConfig extends S.Class<LambdaDataSourceConfig>("LambdaDataSourceConfig")({lambdaFunctionArn: S.String}) {}
export class ElasticsearchDataSourceConfig extends S.Class<ElasticsearchDataSourceConfig>("ElasticsearchDataSourceConfig")({endpoint: S.String, awsRegion: S.String}) {}
export class OpenSearchServiceDataSourceConfig extends S.Class<OpenSearchServiceDataSourceConfig>("OpenSearchServiceDataSourceConfig")({endpoint: S.String, awsRegion: S.String}) {}
export class AwsIamConfig extends S.Class<AwsIamConfig>("AwsIamConfig")({signingRegion: S.optional(S.String), signingServiceName: S.optional(S.String)}) {}
export class AuthorizationConfig extends S.Class<AuthorizationConfig>("AuthorizationConfig")({authorizationType: S.String, awsIamConfig: S.optional(AwsIamConfig)}) {}
export class HttpDataSourceConfig extends S.Class<HttpDataSourceConfig>("HttpDataSourceConfig")({endpoint: S.optional(S.String), authorizationConfig: S.optional(AuthorizationConfig)}) {}
export class RdsHttpEndpointConfig extends S.Class<RdsHttpEndpointConfig>("RdsHttpEndpointConfig")({awsRegion: S.optional(S.String), dbClusterIdentifier: S.optional(S.String), databaseName: S.optional(S.String), schema: S.optional(S.String), awsSecretStoreArn: S.optional(S.String)}) {}
export class RelationalDatabaseDataSourceConfig extends S.Class<RelationalDatabaseDataSourceConfig>("RelationalDatabaseDataSourceConfig")({relationalDatabaseSourceType: S.optional(S.String), rdsHttpEndpointConfig: S.optional(RdsHttpEndpointConfig)}) {}
export class EventBridgeDataSourceConfig extends S.Class<EventBridgeDataSourceConfig>("EventBridgeDataSourceConfig")({eventBusArn: S.String}) {}
export class UpdateDataSourceRequest extends S.Class<UpdateDataSourceRequest>("UpdateDataSourceRequest")({apiId: S.String, name: S.String, description: S.optional(S.String), type: S.String, serviceRoleArn: S.optional(S.String), dynamodbConfig: S.optional(DynamodbDataSourceConfig), lambdaConfig: S.optional(LambdaDataSourceConfig), elasticsearchConfig: S.optional(ElasticsearchDataSourceConfig), openSearchServiceConfig: S.optional(OpenSearchServiceDataSourceConfig), httpConfig: S.optional(HttpDataSourceConfig), relationalDatabaseConfig: S.optional(RelationalDatabaseDataSourceConfig), eventBridgeConfig: S.optional(EventBridgeDataSourceConfig), metricsConfig: S.optional(S.String)}) {}
export class UpdateDomainNameRequest extends S.Class<UpdateDomainNameRequest>("UpdateDomainNameRequest")({domainName: S.String, description: S.optional(S.String)}) {}
export class LambdaConflictHandlerConfig extends S.Class<LambdaConflictHandlerConfig>("LambdaConflictHandlerConfig")({lambdaConflictHandlerArn: S.optional(S.String)}) {}
export class SyncConfig extends S.Class<SyncConfig>("SyncConfig")({conflictHandler: S.optional(S.String), conflictDetection: S.optional(S.String), lambdaConflictHandlerConfig: S.optional(LambdaConflictHandlerConfig)}) {}
export class UpdateFunctionRequest extends S.Class<UpdateFunctionRequest>("UpdateFunctionRequest")({apiId: S.String, name: S.String, description: S.optional(S.String), functionId: S.String, dataSourceName: S.String, requestMappingTemplate: S.optional(S.String), responseMappingTemplate: S.optional(S.String), functionVersion: S.optional(S.String), syncConfig: S.optional(SyncConfig), maxBatchSize: S.optional(S.Number), runtime: S.optional(AppSyncRuntime), code: S.optional(S.String)}) {}
export class LogConfig extends S.Class<LogConfig>("LogConfig")({fieldLogLevel: S.String, cloudWatchLogsRoleArn: S.String, excludeVerboseContent: S.optional(S.Boolean)}) {}
export class UserPoolConfig extends S.Class<UserPoolConfig>("UserPoolConfig")({userPoolId: S.String, awsRegion: S.String, defaultAction: S.String, appIdClientRegex: S.optional(S.String)}) {}
export class CognitoUserPoolConfig extends S.Class<CognitoUserPoolConfig>("CognitoUserPoolConfig")({userPoolId: S.String, awsRegion: S.String, appIdClientRegex: S.optional(S.String)}) {}
export class AdditionalAuthenticationProvider extends S.Class<AdditionalAuthenticationProvider>("AdditionalAuthenticationProvider")({authenticationType: S.optional(S.String), openIDConnectConfig: S.optional(OpenIDConnectConfig), userPoolConfig: S.optional(CognitoUserPoolConfig), lambdaAuthorizerConfig: S.optional(LambdaAuthorizerConfig)}) {}
export const AdditionalAuthenticationProviders = S.Array(AdditionalAuthenticationProvider);
export class EnhancedMetricsConfig extends S.Class<EnhancedMetricsConfig>("EnhancedMetricsConfig")({resolverLevelMetricsBehavior: S.String, dataSourceLevelMetricsBehavior: S.String, operationLevelMetricsConfig: S.String}) {}
export class UpdateGraphqlApiRequest extends S.Class<UpdateGraphqlApiRequest>("UpdateGraphqlApiRequest")({apiId: S.String, name: S.String, logConfig: S.optional(LogConfig), authenticationType: S.String, userPoolConfig: S.optional(UserPoolConfig), openIDConnectConfig: S.optional(OpenIDConnectConfig), additionalAuthenticationProviders: S.optional(AdditionalAuthenticationProviders), xrayEnabled: S.optional(S.Boolean), lambdaAuthorizerConfig: S.optional(LambdaAuthorizerConfig), mergedApiExecutionRoleArn: S.optional(S.String), ownerContact: S.optional(S.String), introspectionConfig: S.optional(S.String), queryDepthLimit: S.optional(S.Number), resolverCountLimit: S.optional(S.Number), enhancedMetricsConfig: S.optional(EnhancedMetricsConfig)}) {}
export const FunctionsIds = S.Array(S.String);
export class PipelineConfig extends S.Class<PipelineConfig>("PipelineConfig")({functions: S.optional(FunctionsIds)}) {}
export const CachingKeys = S.Array(S.String);
export class CachingConfig extends S.Class<CachingConfig>("CachingConfig")({ttl: S.Number, cachingKeys: S.optional(CachingKeys)}) {}
export class UpdateResolverRequest extends S.Class<UpdateResolverRequest>("UpdateResolverRequest")({apiId: S.String, typeName: S.String, fieldName: S.String, dataSourceName: S.optional(S.String), requestMappingTemplate: S.optional(S.String), responseMappingTemplate: S.optional(S.String), kind: S.optional(S.String), pipelineConfig: S.optional(PipelineConfig), syncConfig: S.optional(SyncConfig), cachingConfig: S.optional(CachingConfig), maxBatchSize: S.optional(S.Number), runtime: S.optional(AppSyncRuntime), code: S.optional(S.String), metricsConfig: S.optional(S.String)}) {}
export class UpdateSourceApiAssociationRequest extends S.Class<UpdateSourceApiAssociationRequest>("UpdateSourceApiAssociationRequest")({associationId: S.String, mergedApiIdentifier: S.String, description: S.optional(S.String), sourceApiAssociationConfig: S.optional(SourceApiAssociationConfig)}) {}
export class UpdateTypeRequest extends S.Class<UpdateTypeRequest>("UpdateTypeRequest")({apiId: S.String, typeName: S.String, definition: S.optional(S.String), format: S.String}) {}
export const Logs = S.Array(S.String);
export class ApiKey extends S.Class<ApiKey>("ApiKey")({id: S.optional(S.String), description: S.optional(S.String), expires: S.optional(S.Number), deletes: S.optional(S.Number)}) {}
export const ApiKeys = S.Array(ApiKey);
export const MapOfStringToString = S.Record({key: S.String, value: S.String});
export class Api extends S.Class<Api>("Api")({apiId: S.optional(S.String), name: S.optional(S.String), ownerContact: S.optional(S.String), tags: S.optional(TagMap), dns: S.optional(MapOfStringToString), apiArn: S.optional(S.String), created: S.optional(S.Date), xrayEnabled: S.optional(S.Boolean), wafWebAclArn: S.optional(S.String), eventConfig: S.optional(EventConfig)}) {}
export const Apis = S.Array(Api);
export class ChannelNamespace extends S.Class<ChannelNamespace>("ChannelNamespace")({apiId: S.optional(S.String), name: S.optional(S.String), subscribeAuthModes: S.optional(AuthModes), publishAuthModes: S.optional(AuthModes), codeHandlers: S.optional(S.String), tags: S.optional(TagMap), channelNamespaceArn: S.optional(S.String), created: S.optional(S.Date), lastModified: S.optional(S.Date), handlerConfigs: S.optional(HandlerConfigs)}) {}
export const ChannelNamespaces = S.Array(ChannelNamespace);
export class DataSource extends S.Class<DataSource>("DataSource")({dataSourceArn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), type: S.optional(S.String), serviceRoleArn: S.optional(S.String), dynamodbConfig: S.optional(DynamodbDataSourceConfig), lambdaConfig: S.optional(LambdaDataSourceConfig), elasticsearchConfig: S.optional(ElasticsearchDataSourceConfig), openSearchServiceConfig: S.optional(OpenSearchServiceDataSourceConfig), httpConfig: S.optional(HttpDataSourceConfig), relationalDatabaseConfig: S.optional(RelationalDatabaseDataSourceConfig), eventBridgeConfig: S.optional(EventBridgeDataSourceConfig), metricsConfig: S.optional(S.String)}) {}
export const DataSources = S.Array(DataSource);
export class DomainNameConfig extends S.Class<DomainNameConfig>("DomainNameConfig")({domainName: S.optional(S.String), description: S.optional(S.String), certificateArn: S.optional(S.String), appsyncDomainName: S.optional(S.String), hostedZoneId: S.optional(S.String), tags: S.optional(TagMap), domainNameArn: S.optional(S.String)}) {}
export const DomainNameConfigs = S.Array(DomainNameConfig);
export class FunctionConfiguration extends S.Class<FunctionConfiguration>("FunctionConfiguration")({functionId: S.optional(S.String), functionArn: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), dataSourceName: S.optional(S.String), requestMappingTemplate: S.optional(S.String), responseMappingTemplate: S.optional(S.String), functionVersion: S.optional(S.String), syncConfig: S.optional(SyncConfig), maxBatchSize: S.optional(S.Number), runtime: S.optional(AppSyncRuntime), code: S.optional(S.String)}) {}
export const Functions = S.Array(FunctionConfiguration);
export class GraphqlApi extends S.Class<GraphqlApi>("GraphqlApi")({name: S.optional(S.String), apiId: S.optional(S.String), authenticationType: S.optional(S.String), logConfig: S.optional(LogConfig), userPoolConfig: S.optional(UserPoolConfig), openIDConnectConfig: S.optional(OpenIDConnectConfig), arn: S.optional(S.String), uris: S.optional(MapOfStringToString), tags: S.optional(TagMap), additionalAuthenticationProviders: S.optional(AdditionalAuthenticationProviders), xrayEnabled: S.optional(S.Boolean), wafWebAclArn: S.optional(S.String), lambdaAuthorizerConfig: S.optional(LambdaAuthorizerConfig), dns: S.optional(MapOfStringToString), visibility: S.optional(S.String), apiType: S.optional(S.String), mergedApiExecutionRoleArn: S.optional(S.String), owner: S.optional(S.String), ownerContact: S.optional(S.String), introspectionConfig: S.optional(S.String), queryDepthLimit: S.optional(S.Number), resolverCountLimit: S.optional(S.Number), enhancedMetricsConfig: S.optional(EnhancedMetricsConfig)}) {}
export const GraphqlApis = S.Array(GraphqlApi);
export class Resolver extends S.Class<Resolver>("Resolver")({typeName: S.optional(S.String), fieldName: S.optional(S.String), dataSourceName: S.optional(S.String), resolverArn: S.optional(S.String), requestMappingTemplate: S.optional(S.String), responseMappingTemplate: S.optional(S.String), kind: S.optional(S.String), pipelineConfig: S.optional(PipelineConfig), syncConfig: S.optional(SyncConfig), cachingConfig: S.optional(CachingConfig), maxBatchSize: S.optional(S.Number), runtime: S.optional(AppSyncRuntime), code: S.optional(S.String), metricsConfig: S.optional(S.String)}) {}
export const Resolvers = S.Array(Resolver);
export class Type extends S.Class<Type>("Type")({name: S.optional(S.String), description: S.optional(S.String), arn: S.optional(S.String), definition: S.optional(S.String), format: S.optional(S.String)}) {}
export const TypeList = S.Array(Type);
export const EnvironmentVariableMap = S.Record({key: S.String, value: S.String});
export class RdsDataApiConfig extends S.Class<RdsDataApiConfig>("RdsDataApiConfig")({resourceArn: S.String, secretArn: S.String, databaseName: S.String}) {}
export class AssociateMergedGraphqlApiRequest extends S.Class<AssociateMergedGraphqlApiRequest>("AssociateMergedGraphqlApiRequest")({sourceApiIdentifier: S.String, mergedApiIdentifier: S.String, description: S.optional(S.String), sourceApiAssociationConfig: S.optional(SourceApiAssociationConfig)}) {}
export class CreateResolverRequest extends S.Class<CreateResolverRequest>("CreateResolverRequest")({apiId: S.String, typeName: S.String, fieldName: S.String, dataSourceName: S.optional(S.String), requestMappingTemplate: S.optional(S.String), responseMappingTemplate: S.optional(S.String), kind: S.optional(S.String), pipelineConfig: S.optional(PipelineConfig), syncConfig: S.optional(SyncConfig), cachingConfig: S.optional(CachingConfig), maxBatchSize: S.optional(S.Number), runtime: S.optional(AppSyncRuntime), code: S.optional(S.String), metricsConfig: S.optional(S.String)}) {}
export class DisassociateMergedGraphqlApiResponse extends S.Class<DisassociateMergedGraphqlApiResponse>("DisassociateMergedGraphqlApiResponse")({sourceApiAssociationStatus: S.optional(S.String)}) {}
export class DisassociateSourceGraphqlApiResponse extends S.Class<DisassociateSourceGraphqlApiResponse>("DisassociateSourceGraphqlApiResponse")({sourceApiAssociationStatus: S.optional(S.String)}) {}
export class ApiAssociation extends S.Class<ApiAssociation>("ApiAssociation")({domainName: S.optional(S.String), apiId: S.optional(S.String), associationStatus: S.optional(S.String), deploymentDetail: S.optional(S.String)}) {}
export class GetApiAssociationResponse extends S.Class<GetApiAssociationResponse>("GetApiAssociationResponse")({apiAssociation: S.optional(ApiAssociation)}) {}
export class ApiCache extends S.Class<ApiCache>("ApiCache")({ttl: S.optional(S.Number), apiCachingBehavior: S.optional(S.String), transitEncryptionEnabled: S.optional(S.Boolean), atRestEncryptionEnabled: S.optional(S.Boolean), type: S.optional(S.String), status: S.optional(S.String), healthMetricsConfig: S.optional(S.String)}) {}
export class GetApiCacheResponse extends S.Class<GetApiCacheResponse>("GetApiCacheResponse")({apiCache: S.optional(ApiCache)}) {}
export class GetDomainNameResponse extends S.Class<GetDomainNameResponse>("GetDomainNameResponse")({domainNameConfig: S.optional(DomainNameConfig)}) {}
export class GetGraphqlApiEnvironmentVariablesResponse extends S.Class<GetGraphqlApiEnvironmentVariablesResponse>("GetGraphqlApiEnvironmentVariablesResponse")({environmentVariables: S.optional(EnvironmentVariableMap)}) {}
export class GetIntrospectionSchemaResponse extends S.Class<GetIntrospectionSchemaResponse>("GetIntrospectionSchemaResponse")({schema: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class GetSchemaCreationStatusResponse extends S.Class<GetSchemaCreationStatusResponse>("GetSchemaCreationStatusResponse")({status: S.optional(S.String), details: S.optional(S.String)}) {}
export class SourceApiAssociation extends S.Class<SourceApiAssociation>("SourceApiAssociation")({associationId: S.optional(S.String), associationArn: S.optional(S.String), sourceApiId: S.optional(S.String), sourceApiArn: S.optional(S.String), mergedApiArn: S.optional(S.String), mergedApiId: S.optional(S.String), description: S.optional(S.String), sourceApiAssociationConfig: S.optional(SourceApiAssociationConfig), sourceApiAssociationStatus: S.optional(S.String), sourceApiAssociationStatusDetail: S.optional(S.String), lastSuccessfulMergeDate: S.optional(S.Date)}) {}
export class GetSourceApiAssociationResponse extends S.Class<GetSourceApiAssociationResponse>("GetSourceApiAssociationResponse")({sourceApiAssociation: S.optional(SourceApiAssociation)}) {}
export class GetTypeResponse extends S.Class<GetTypeResponse>("GetTypeResponse")({type: S.optional(Type)}) {}
export class ListApiKeysResponse extends S.Class<ListApiKeysResponse>("ListApiKeysResponse")({apiKeys: S.optional(ApiKeys), nextToken: S.optional(S.String)}) {}
export class ListApisResponse extends S.Class<ListApisResponse>("ListApisResponse")({apis: S.optional(Apis), nextToken: S.optional(S.String)}) {}
export class ListChannelNamespacesResponse extends S.Class<ListChannelNamespacesResponse>("ListChannelNamespacesResponse")({channelNamespaces: S.optional(ChannelNamespaces), nextToken: S.optional(S.String)}) {}
export class ListDataSourcesResponse extends S.Class<ListDataSourcesResponse>("ListDataSourcesResponse")({dataSources: S.optional(DataSources), nextToken: S.optional(S.String)}) {}
export class ListDomainNamesResponse extends S.Class<ListDomainNamesResponse>("ListDomainNamesResponse")({domainNameConfigs: S.optional(DomainNameConfigs), nextToken: S.optional(S.String)}) {}
export class ListFunctionsResponse extends S.Class<ListFunctionsResponse>("ListFunctionsResponse")({functions: S.optional(Functions), nextToken: S.optional(S.String)}) {}
export class ListGraphqlApisResponse extends S.Class<ListGraphqlApisResponse>("ListGraphqlApisResponse")({graphqlApis: S.optional(GraphqlApis), nextToken: S.optional(S.String)}) {}
export class ListResolversResponse extends S.Class<ListResolversResponse>("ListResolversResponse")({resolvers: S.optional(Resolvers), nextToken: S.optional(S.String)}) {}
export class ListResolversByFunctionResponse extends S.Class<ListResolversByFunctionResponse>("ListResolversByFunctionResponse")({resolvers: S.optional(Resolvers), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class ListTypesResponse extends S.Class<ListTypesResponse>("ListTypesResponse")({types: S.optional(TypeList), nextToken: S.optional(S.String)}) {}
export class ListTypesByAssociationResponse extends S.Class<ListTypesByAssociationResponse>("ListTypesByAssociationResponse")({types: S.optional(TypeList), nextToken: S.optional(S.String)}) {}
export class PutGraphqlApiEnvironmentVariablesRequest extends S.Class<PutGraphqlApiEnvironmentVariablesRequest>("PutGraphqlApiEnvironmentVariablesRequest")({apiId: S.String, environmentVariables: EnvironmentVariableMap}) {}
export class StartDataSourceIntrospectionRequest extends S.Class<StartDataSourceIntrospectionRequest>("StartDataSourceIntrospectionRequest")({rdsDataApiConfig: S.optional(RdsDataApiConfig)}) {}
export class StartSchemaCreationResponse extends S.Class<StartSchemaCreationResponse>("StartSchemaCreationResponse")({status: S.optional(S.String)}) {}
export class StartSchemaMergeResponse extends S.Class<StartSchemaMergeResponse>("StartSchemaMergeResponse")({sourceApiAssociationStatus: S.optional(S.String)}) {}
export class UpdateApiResponse extends S.Class<UpdateApiResponse>("UpdateApiResponse")({api: S.optional(Api)}) {}
export class UpdateApiCacheResponse extends S.Class<UpdateApiCacheResponse>("UpdateApiCacheResponse")({apiCache: S.optional(ApiCache)}) {}
export class UpdateApiKeyResponse extends S.Class<UpdateApiKeyResponse>("UpdateApiKeyResponse")({apiKey: S.optional(ApiKey)}) {}
export class UpdateChannelNamespaceResponse extends S.Class<UpdateChannelNamespaceResponse>("UpdateChannelNamespaceResponse")({channelNamespace: S.optional(ChannelNamespace)}) {}
export class UpdateDataSourceResponse extends S.Class<UpdateDataSourceResponse>("UpdateDataSourceResponse")({dataSource: S.optional(DataSource)}) {}
export class UpdateDomainNameResponse extends S.Class<UpdateDomainNameResponse>("UpdateDomainNameResponse")({domainNameConfig: S.optional(DomainNameConfig)}) {}
export class UpdateFunctionResponse extends S.Class<UpdateFunctionResponse>("UpdateFunctionResponse")({functionConfiguration: S.optional(FunctionConfiguration)}) {}
export class UpdateGraphqlApiResponse extends S.Class<UpdateGraphqlApiResponse>("UpdateGraphqlApiResponse")({graphqlApi: S.optional(GraphqlApi)}) {}
export class UpdateResolverResponse extends S.Class<UpdateResolverResponse>("UpdateResolverResponse")({resolver: S.optional(Resolver)}) {}
export class UpdateSourceApiAssociationResponse extends S.Class<UpdateSourceApiAssociationResponse>("UpdateSourceApiAssociationResponse")({sourceApiAssociation: S.optional(SourceApiAssociation)}) {}
export class UpdateTypeResponse extends S.Class<UpdateTypeResponse>("UpdateTypeResponse")({type: S.optional(Type)}) {}
export class CodeErrorLocation extends S.Class<CodeErrorLocation>("CodeErrorLocation")({line: S.optional(S.Number), column: S.optional(S.Number), span: S.optional(S.Number)}) {}
export class CodeError extends S.Class<CodeError>("CodeError")({errorType: S.optional(S.String), value: S.optional(S.String), location: S.optional(CodeErrorLocation)}) {}
export const CodeErrors = S.Array(CodeError);
export class EvaluateCodeErrorDetail extends S.Class<EvaluateCodeErrorDetail>("EvaluateCodeErrorDetail")({message: S.optional(S.String), codeErrors: S.optional(CodeErrors)}) {}
export class ErrorDetail extends S.Class<ErrorDetail>("ErrorDetail")({message: S.optional(S.String)}) {}
export class SourceApiAssociationSummary extends S.Class<SourceApiAssociationSummary>("SourceApiAssociationSummary")({associationId: S.optional(S.String), associationArn: S.optional(S.String), sourceApiId: S.optional(S.String), sourceApiArn: S.optional(S.String), mergedApiId: S.optional(S.String), mergedApiArn: S.optional(S.String), description: S.optional(S.String)}) {}
export const SourceApiAssociationSummaryList = S.Array(SourceApiAssociationSummary);
export const DataSourceIntrospectionModelIndexFields = S.Array(S.String);
export class DataSourceIntrospectionModelIndex extends S.Class<DataSourceIntrospectionModelIndex>("DataSourceIntrospectionModelIndex")({name: S.optional(S.String), fields: S.optional(DataSourceIntrospectionModelIndexFields)}) {}
export const DataSourceIntrospectionModelIndexes = S.Array(DataSourceIntrospectionModelIndex);
export class AssociateApiResponse extends S.Class<AssociateApiResponse>("AssociateApiResponse")({apiAssociation: S.optional(ApiAssociation)}) {}
export class AssociateMergedGraphqlApiResponse extends S.Class<AssociateMergedGraphqlApiResponse>("AssociateMergedGraphqlApiResponse")({sourceApiAssociation: S.optional(SourceApiAssociation)}) {}
export class AssociateSourceGraphqlApiResponse extends S.Class<AssociateSourceGraphqlApiResponse>("AssociateSourceGraphqlApiResponse")({sourceApiAssociation: S.optional(SourceApiAssociation)}) {}
export class CreateApiCacheResponse extends S.Class<CreateApiCacheResponse>("CreateApiCacheResponse")({apiCache: S.optional(ApiCache)}) {}
export class CreateApiKeyResponse extends S.Class<CreateApiKeyResponse>("CreateApiKeyResponse")({apiKey: S.optional(ApiKey)}) {}
export class CreateDomainNameResponse extends S.Class<CreateDomainNameResponse>("CreateDomainNameResponse")({domainNameConfig: S.optional(DomainNameConfig)}) {}
export class CreateFunctionRequest extends S.Class<CreateFunctionRequest>("CreateFunctionRequest")({apiId: S.String, name: S.String, description: S.optional(S.String), dataSourceName: S.String, requestMappingTemplate: S.optional(S.String), responseMappingTemplate: S.optional(S.String), functionVersion: S.optional(S.String), syncConfig: S.optional(SyncConfig), maxBatchSize: S.optional(S.Number), runtime: S.optional(AppSyncRuntime), code: S.optional(S.String)}) {}
export class CreateGraphqlApiRequest extends S.Class<CreateGraphqlApiRequest>("CreateGraphqlApiRequest")({name: S.String, logConfig: S.optional(LogConfig), authenticationType: S.String, userPoolConfig: S.optional(UserPoolConfig), openIDConnectConfig: S.optional(OpenIDConnectConfig), tags: S.optional(TagMap), additionalAuthenticationProviders: S.optional(AdditionalAuthenticationProviders), xrayEnabled: S.optional(S.Boolean), lambdaAuthorizerConfig: S.optional(LambdaAuthorizerConfig), apiType: S.optional(S.String), mergedApiExecutionRoleArn: S.optional(S.String), visibility: S.optional(S.String), ownerContact: S.optional(S.String), introspectionConfig: S.optional(S.String), queryDepthLimit: S.optional(S.Number), resolverCountLimit: S.optional(S.Number), enhancedMetricsConfig: S.optional(EnhancedMetricsConfig)}) {}
export class CreateResolverResponse extends S.Class<CreateResolverResponse>("CreateResolverResponse")({resolver: S.optional(Resolver)}) {}
export class CreateTypeResponse extends S.Class<CreateTypeResponse>("CreateTypeResponse")({type: S.optional(Type)}) {}
export class EvaluateCodeResponse extends S.Class<EvaluateCodeResponse>("EvaluateCodeResponse")({evaluationResult: S.optional(S.String), error: S.optional(EvaluateCodeErrorDetail), logs: S.optional(Logs), stash: S.optional(S.String), outErrors: S.optional(S.String)}) {}
export class EvaluateMappingTemplateResponse extends S.Class<EvaluateMappingTemplateResponse>("EvaluateMappingTemplateResponse")({evaluationResult: S.optional(S.String), error: S.optional(ErrorDetail), logs: S.optional(Logs), stash: S.optional(S.String), outErrors: S.optional(S.String)}) {}
export class GetChannelNamespaceResponse extends S.Class<GetChannelNamespaceResponse>("GetChannelNamespaceResponse")({channelNamespace: S.optional(ChannelNamespace)}) {}
export class GetDataSourceResponse extends S.Class<GetDataSourceResponse>("GetDataSourceResponse")({dataSource: S.optional(DataSource)}) {}
export class GetFunctionResponse extends S.Class<GetFunctionResponse>("GetFunctionResponse")({functionConfiguration: S.optional(FunctionConfiguration)}) {}
export class GetGraphqlApiResponse extends S.Class<GetGraphqlApiResponse>("GetGraphqlApiResponse")({graphqlApi: S.optional(GraphqlApi)}) {}
export class GetResolverResponse extends S.Class<GetResolverResponse>("GetResolverResponse")({resolver: S.optional(Resolver)}) {}
export class ListSourceApiAssociationsResponse extends S.Class<ListSourceApiAssociationsResponse>("ListSourceApiAssociationsResponse")({sourceApiAssociationSummaries: S.optional(SourceApiAssociationSummaryList), nextToken: S.optional(S.String)}) {}
export class PutGraphqlApiEnvironmentVariablesResponse extends S.Class<PutGraphqlApiEnvironmentVariablesResponse>("PutGraphqlApiEnvironmentVariablesResponse")({environmentVariables: S.optional(EnvironmentVariableMap)}) {}
export class StartDataSourceIntrospectionResponse extends S.Class<StartDataSourceIntrospectionResponse>("StartDataSourceIntrospectionResponse")({introspectionId: S.optional(S.String), introspectionStatus: S.optional(S.String), introspectionStatusDetail: S.optional(S.String)}) {}
export class CreateApiRequest extends S.Class<CreateApiRequest>("CreateApiRequest")({name: S.String, ownerContact: S.optional(S.String), tags: S.optional(TagMap), eventConfig: EventConfig}) {}
export class CreateDataSourceRequest extends S.Class<CreateDataSourceRequest>("CreateDataSourceRequest")({apiId: S.String, name: S.String, description: S.optional(S.String), type: S.String, serviceRoleArn: S.optional(S.String), dynamodbConfig: S.optional(DynamodbDataSourceConfig), lambdaConfig: S.optional(LambdaDataSourceConfig), elasticsearchConfig: S.optional(ElasticsearchDataSourceConfig), openSearchServiceConfig: S.optional(OpenSearchServiceDataSourceConfig), httpConfig: S.optional(HttpDataSourceConfig), relationalDatabaseConfig: S.optional(RelationalDatabaseDataSourceConfig), eventBridgeConfig: S.optional(EventBridgeDataSourceConfig), metricsConfig: S.optional(S.String)}) {}
export class CreateFunctionResponse extends S.Class<CreateFunctionResponse>("CreateFunctionResponse")({functionConfiguration: S.optional(FunctionConfiguration)}) {}
export class CreateGraphqlApiResponse extends S.Class<CreateGraphqlApiResponse>("CreateGraphqlApiResponse")({graphqlApi: S.optional(GraphqlApi)}) {}
export class GetApiResponse extends S.Class<GetApiResponse>("GetApiResponse")({api: S.optional(Api)}) {}
export const DataSourceIntrospectionModelFieldTypeValues = S.Array(S.String);
export class DataSourceIntrospectionModelFieldType extends S.Class<DataSourceIntrospectionModelFieldType>("DataSourceIntrospectionModelFieldType")({kind: S.optional(S.String), name: S.optional(S.String), type: S.optional(S.suspend((): S.Schema<DataSourceIntrospectionModelFieldType, any> => DataSourceIntrospectionModelFieldType)), values: S.optional(DataSourceIntrospectionModelFieldTypeValues)}) {}
export class BadRequestDetail extends S.Class<BadRequestDetail>("BadRequestDetail")({codeErrors: S.optional(CodeErrors)}) {}
export class DataSourceIntrospectionModelField extends S.Class<DataSourceIntrospectionModelField>("DataSourceIntrospectionModelField")({name: S.optional(S.String), type: S.optional(DataSourceIntrospectionModelFieldType), length: S.optional(S.Number)}) {}
export const DataSourceIntrospectionModelFields = S.Array(DataSourceIntrospectionModelField);
export class CreateApiResponse extends S.Class<CreateApiResponse>("CreateApiResponse")({api: S.optional(Api)}) {}
export class CreateChannelNamespaceRequest extends S.Class<CreateChannelNamespaceRequest>("CreateChannelNamespaceRequest")({apiId: S.String, name: S.String, subscribeAuthModes: S.optional(AuthModes), publishAuthModes: S.optional(AuthModes), codeHandlers: S.optional(S.String), tags: S.optional(TagMap), handlerConfigs: S.optional(HandlerConfigs)}) {}
export class CreateDataSourceResponse extends S.Class<CreateDataSourceResponse>("CreateDataSourceResponse")({dataSource: S.optional(DataSource)}) {}
export class DataSourceIntrospectionModel extends S.Class<DataSourceIntrospectionModel>("DataSourceIntrospectionModel")({name: S.optional(S.String), fields: S.optional(DataSourceIntrospectionModelFields), primaryKey: S.optional(DataSourceIntrospectionModelIndex), indexes: S.optional(DataSourceIntrospectionModelIndexes), sdl: S.optional(S.String)}) {}
export const DataSourceIntrospectionModels = S.Array(DataSourceIntrospectionModel);
export class DataSourceIntrospectionResult extends S.Class<DataSourceIntrospectionResult>("DataSourceIntrospectionResult")({models: S.optional(DataSourceIntrospectionModels), nextToken: S.optional(S.String)}) {}
export class CreateChannelNamespaceResponse extends S.Class<CreateChannelNamespaceResponse>("CreateChannelNamespaceResponse")({channelNamespace: S.optional(ChannelNamespace)}) {}
export class GetDataSourceIntrospectionResponse extends S.Class<GetDataSourceIntrospectionResponse>("GetDataSourceIntrospectionResponse")({introspectionId: S.optional(S.String), introspectionStatus: S.optional(S.String), introspectionStatusDetail: S.optional(S.String), introspectionResult: S.optional(DataSourceIntrospectionResult)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class ConcurrentModificationException extends S.TaggedError<ConcurrentModificationException>()("ConcurrentModificationException", {}) {};
export class InternalFailureException extends S.TaggedError<InternalFailureException>()("InternalFailureException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class GraphQLSchemaException extends S.TaggedError<GraphQLSchemaException>()("GraphQLSchemaException", {message: S.optional(S.String)}) {};
export class ApiKeyValidityOutOfBoundsException extends S.TaggedError<ApiKeyValidityOutOfBoundsException>()("ApiKeyValidityOutOfBoundsException", {message: S.optional(S.String)}) {};
export class ApiKeyLimitExceededException extends S.TaggedError<ApiKeyLimitExceededException>()("ApiKeyLimitExceededException", {message: S.optional(S.String)}) {};
export class ApiLimitExceededException extends S.TaggedError<ApiLimitExceededException>()("ApiLimitExceededException", {message: S.optional(S.String)}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {message: S.optional(S.String)}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Deletes a custom `DomainName` object.
 */export const deleteDomainName = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/domainnames/{domainName}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteDomainName" }, DeleteDomainNameRequest, DeleteDomainNameResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a `GraphqlApi` object.
 */export const deleteGraphqlApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteGraphqlApi" }, DeleteGraphqlApiRequest, DeleteGraphqlApiResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a `Resolver` object.
 */export const deleteResolver = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteResolver" }, DeleteResolverRequest, DeleteResolverResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a `Type` object.
 */export const deleteType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types/{typeName}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteType" }, DeleteTypeRequest, DeleteTypeResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes an `ApiAssociation` object from a custom domain.
 */export const disassociateApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/domainnames/{domainName}/apiassociation", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DisassociateApi" }, DisassociateApiRequest, DisassociateApiResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Flushes an `ApiCache` object.
 */export const flushApiCache = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/FlushCache", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.FlushApiCache" }, FlushApiCacheRequest, FlushApiCacheResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Untags a resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/tags/{resourceArn}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [AccessDeniedException, BadRequestException, InternalFailureException, LimitExceededException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an `Api` object
 */export const deleteApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis/{apiId}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteApi" }, DeleteApiRequest, DeleteApiResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an API key.
 */export const deleteApiKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/apikeys/{id}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteApiKey" }, DeleteApiKeyRequest, DeleteApiKeyResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a `ChannelNamespace`.
 */export const deleteChannelNamespace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis/{apiId}/channelNamespaces/{name}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteChannelNamespace" }, DeleteChannelNamespaceRequest, DeleteChannelNamespaceResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a `DataSource` object.
 */export const deleteDataSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/datasources/{name}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteDataSource" }, DeleteDataSourceRequest, DeleteDataSourceResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a `Function`.
 */export const deleteFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/functions/{functionId}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteFunction" }, DeleteFunctionRequest, DeleteFunctionResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an association between a Merged API and source API using the source API's
 * identifier and the association ID.
 */export const disassociateMergedGraphqlApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DisassociateMergedGraphqlApi" }, DisassociateMergedGraphqlApiRequest, DisassociateMergedGraphqlApiResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an association between a Merged API and source API using the Merged API's
 * identifier and the association ID.
 */export const disassociateSourceGraphqlApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DisassociateSourceGraphqlApi" }, DisassociateSourceGraphqlApiRequest, DisassociateSourceGraphqlApiResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves an `ApiAssociation` object.
 */export const getApiAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/domainnames/{domainName}/apiassociation", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetApiAssociation" }, GetApiAssociationRequest, GetApiAssociationResponse, [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves an `ApiCache` object.
 */export const getApiCache = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/ApiCaches", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetApiCache" }, GetApiCacheRequest, GetApiCacheResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a custom `DomainName` object.
 */export const getDomainName = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/domainnames/{domainName}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetDomainName" }, GetDomainNameRequest, GetDomainNameResponse, [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the list of environmental variable key-value pairs associated with an API by
 * its ID value.
 */export const getGraphqlApiEnvironmentVariables = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/environmentVariables", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetGraphqlApiEnvironmentVariables" }, GetGraphqlApiEnvironmentVariablesRequest, GetGraphqlApiEnvironmentVariablesResponse, [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the current status of a schema creation operation.
 */export const getSchemaCreationStatus = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/schemacreation", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetSchemaCreationStatus" }, GetSchemaCreationStatusRequest, GetSchemaCreationStatusResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a `SourceApiAssociation` object.
 */export const getSourceApiAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetSourceApiAssociation" }, GetSourceApiAssociationRequest, GetSourceApiAssociationResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a `Type` object.
 */export const getType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types/{typeName}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetType" }, GetTypeRequest, GetTypeResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the API keys for a given API.
 * 
 * API keys are deleted automatically 60 days after they expire. However, they may still
 * be included in the response until they have actually been deleted. You can safely call
 * `DeleteApiKey` to manually delete a key before it's automatically
 * deleted.
 */export const listApiKeys = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/apikeys", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListApiKeys" }, ListApiKeysRequest, ListApiKeysResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the APIs in your AppSync account.
 * 
 * `ListApis` returns only the high level API details. For more detailed
 * information about an API, use `GetApi`.
 */export const listApis = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListApis" }, ListApisRequest, ListApisResponse, [BadRequestException, InternalFailureException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the channel namespaces for a specified `Api`.
 * 
 * `ListChannelNamespaces` returns only high level details for the channel
 * namespace. To retrieve code handlers, use `GetChannelNamespace`.
 */export const listChannelNamespaces = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis/{apiId}/channelNamespaces", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListChannelNamespaces" }, ListChannelNamespacesRequest, ListChannelNamespacesResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the data sources for a given API.
 */export const listDataSources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/datasources", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListDataSources" }, ListDataSourcesRequest, ListDataSourcesResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists multiple custom domain names.
 */export const listDomainNames = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/domainnames", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListDomainNames" }, ListDomainNamesRequest, ListDomainNamesResponse, [AccessDeniedException, BadRequestException, InternalFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List multiple functions.
 */export const listFunctions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/functions", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListFunctions" }, ListFunctionsRequest, ListFunctionsResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists your GraphQL APIs.
 */export const listGraphqlApis = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListGraphqlApis" }, ListGraphqlApisRequest, ListGraphqlApisResponse, [BadRequestException, InternalFailureException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the resolvers for a given API and type.
 */export const listResolvers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types/{typeName}/resolvers", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListResolvers" }, ListResolversRequest, ListResolversResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * List the resolvers that are associated with a specific function.
 */export const listResolversByFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/functions/{functionId}/resolvers", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListResolversByFunction" }, ListResolversByFunctionRequest, ListResolversByFunctionResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags for a resource.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/tags/{resourceArn}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [AccessDeniedException, BadRequestException, InternalFailureException, LimitExceededException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the types for a given API.
 */export const listTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListTypes" }, ListTypesRequest, ListTypesResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists `Type` objects by the source API association ID.
 */export const listTypesByAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListTypesByAssociation" }, ListTypesByAssociationRequest, ListTypesByAssociationResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a new schema to your GraphQL API.
 * 
 * This operation is asynchronous. Use to
 * determine when it has completed.
 */export const startSchemaCreation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/schemacreation", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.StartSchemaCreation" }, StartSchemaCreationRequest, StartSchemaCreationResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Initiates a merge operation. Returns a status that shows the result of the merge
 * operation.
 */export const startSchemaMerge = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.StartSchemaMerge" }, StartSchemaMergeRequest, StartSchemaMergeResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Tags a resource with user-supplied tags.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/tags/{resourceArn}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.TagResource" }, TagResourceRequest, TagResourceResponse, [AccessDeniedException, BadRequestException, InternalFailureException, LimitExceededException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an `Api`.
 */export const updateApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis/{apiId}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateApi" }, UpdateApiRequest, UpdateApiResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates the cache for the GraphQL API.
 */export const updateApiCache = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/ApiCaches/update", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateApiCache" }, UpdateApiCacheRequest, UpdateApiCacheResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a `ChannelNamespace` associated with an `Api`.
 */export const updateChannelNamespace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis/{apiId}/channelNamespaces/{name}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateChannelNamespace" }, UpdateChannelNamespaceRequest, UpdateChannelNamespaceResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a `DataSource` object.
 */export const updateDataSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/datasources/{name}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateDataSource" }, UpdateDataSourceRequest, UpdateDataSourceResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a custom `DomainName` object.
 */export const updateDomainName = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/domainnames/{domainName}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateDomainName" }, UpdateDomainNameRequest, UpdateDomainNameResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a `Function` object.
 */export const updateFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/functions/{functionId}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateFunction" }, UpdateFunctionRequest, UpdateFunctionResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a `GraphqlApi` object.
 */export const updateGraphqlApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateGraphqlApi" }, UpdateGraphqlApiRequest, UpdateGraphqlApiResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a `Resolver` object.
 */export const updateResolver = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateResolver" }, UpdateResolverRequest, UpdateResolverResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates some of the configuration choices of a particular source API association.
 */export const updateSourceApiAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateSourceApiAssociation" }, UpdateSourceApiAssociationRequest, UpdateSourceApiAssociationResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a `Type` object.
 */export const updateType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types/{typeName}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateType" }, UpdateTypeRequest, UpdateTypeResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Maps an endpoint to your custom domain.
 */export const associateApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/domainnames/{domainName}/apiassociation", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.AssociateApi" }, AssociateApiRequest, AssociateApiResponse, [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an association between a Merged API and source API using the source API's
 * identifier.
 */export const associateMergedGraphqlApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.AssociateMergedGraphqlApi" }, AssociateMergedGraphqlApiRequest, AssociateMergedGraphqlApiResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, LimitExceededException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an association between a Merged API and source API using the Merged API's
 * identifier.
 */export const associateSourceGraphqlApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.AssociateSourceGraphqlApi" }, AssociateSourceGraphqlApiRequest, AssociateSourceGraphqlApiResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, LimitExceededException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a cache for the GraphQL API.
 */export const createApiCache = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/ApiCaches", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateApiCache" }, CreateApiCacheRequest, CreateApiCacheResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a custom `DomainName` object.
 */export const createDomainName = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/domainnames", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateDomainName" }, CreateDomainNameRequest, CreateDomainNameResponse, [AccessDeniedException, BadRequestException, InternalFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a `Resolver` object.
 * 
 * A resolver converts incoming requests into a format that a data source can understand,
 * and converts the data source's responses into GraphQL.
 */export const createResolver = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types/{typeName}/resolvers", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateResolver" }, CreateResolverRequest, CreateResolverResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a `Type` object.
 */export const createType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateType" }, CreateTypeRequest, CreateTypeResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Evaluates the given code and returns the response. The code definition requirements
 * depend on the specified runtime. For `APPSYNC_JS` runtimes, the code defines the
 * request and response functions. The request function takes the incoming request after a
 * GraphQL operation is parsed and converts it into a request configuration for the selected
 * data source operation. The response function interprets responses from the data source and
 * maps it to the shape of the GraphQL field output type.
 */export const evaluateCode = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/dataplane-evaluatecode", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.EvaluateCode" }, EvaluateCodeRequest, EvaluateCodeResponse, [AccessDeniedException, BadRequestException, InternalFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Evaluates a given template and returns the response. The mapping template can be a
 * request or response template.
 * 
 * Request templates take the incoming request after a GraphQL operation is parsed and
 * convert it into a request configuration for the selected data source operation. Response
 * templates interpret responses from the data source and map it to the shape of the GraphQL
 * field output type.
 * 
 * Mapping templates are written in the Apache Velocity Template Language (VTL).
 */export const evaluateMappingTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/dataplane-evaluatetemplate", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.EvaluateMappingTemplate" }, EvaluateMappingTemplateRequest, EvaluateMappingTemplateResponse, [AccessDeniedException, BadRequestException, InternalFailureException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the channel namespace for a specified `Api`.
 */export const getChannelNamespace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis/{apiId}/channelNamespaces/{name}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetChannelNamespace" }, GetChannelNamespaceRequest, GetChannelNamespaceResponse, [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a `DataSource` object.
 */export const getDataSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/datasources/{name}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetDataSource" }, GetDataSourceRequest, GetDataSourceResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get a `Function`.
 */export const getFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/functions/{functionId}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetFunction" }, GetFunctionRequest, GetFunctionResponse, [ConcurrentModificationException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a `GraphqlApi` object.
 */export const getGraphqlApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetGraphqlApi" }, GetGraphqlApiRequest, GetGraphqlApiResponse, [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the introspection schema for a GraphQL API.
 */export const getIntrospectionSchema = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/schema", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetIntrospectionSchema" }, GetIntrospectionSchemaRequest, GetIntrospectionSchemaResponse, [GraphQLSchemaException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves a `Resolver` object.
 */export const getResolver = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetResolver" }, GetResolverRequest, GetResolverResponse, [ConcurrentModificationException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the `SourceApiAssociationSummary` data.
 */export const listSourceApiAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/sourceApiAssociations", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.ListSourceApiAssociations" }, ListSourceApiAssociationsRequest, ListSourceApiAssociationsResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a list of environmental variables in an API by its ID value.
 * 
 * When creating an environmental variable, it must follow the constraints below:
 * 
 * - Both JavaScript and VTL templates support environmental variables.
 * 
 * - Environmental variables are not evaluated before function invocation.
 * 
 * - Environmental variables only support string values.
 * 
 * - Any defined value in an environmental variable is considered a string literal
 * and not expanded.
 * 
 * - Variable evaluations should ideally be performed in the function
 * code.
 * 
 * When creating an environmental variable key-value pair, it must follow the additional
 * constraints below:
 * 
 * - Keys must begin with a letter.
 * 
 * - Keys must be at least two characters long.
 * 
 * - Keys can only contain letters, numbers, and the underscore character
 * (_).
 * 
 * - Values can be up to 512 characters long.
 * 
 * - You can configure up to 50 key-value pairs in a GraphQL API.
 * 
 * You can create a list of environmental variables by adding it to the
 * `environmentVariables` payload as a list in the format
 * `{"key1":"value1","key2":"value2", …}`. Note that each call of the
 * `PutGraphqlApiEnvironmentVariables` action will result in the overwriting of
 * the existing environmental variable list of that API. This means the existing environmental
 * variables will be lost. To avoid this, you must include all existing and new environmental
 * variables in the list each time you call this action.
 */export const putGraphqlApiEnvironmentVariables = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/environmentVariables", method: "PUT", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.PutGraphqlApiEnvironmentVariables" }, PutGraphqlApiEnvironmentVariablesRequest, PutGraphqlApiEnvironmentVariablesResponse, [AccessDeniedException, BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new introspection. Returns the `introspectionId` of the new
 * introspection after its creation.
 */export const startDataSourceIntrospection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/datasources/introspections", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.StartDataSourceIntrospection" }, StartDataSourceIntrospectionRequest, StartDataSourceIntrospectionResponse, [BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an API key. You can update the key as long as it's not deleted.
 */export const updateApiKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/apikeys/{id}", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.UpdateApiKey" }, UpdateApiKeyRequest, UpdateApiKeyResponse, [ApiKeyValidityOutOfBoundsException, BadRequestException, InternalFailureException, LimitExceededException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a unique key that you can distribute to clients who invoke your API.
 */export const createApiKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/apikeys", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateApiKey" }, CreateApiKeyRequest, CreateApiKeyResponse, [ApiKeyLimitExceededException, ApiKeyValidityOutOfBoundsException, BadRequestException, InternalFailureException, LimitExceededException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a `Function` object.
 * 
 * A function is a reusable entity. You can use multiple functions to compose the resolver
 * logic.
 */export const createFunction = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/functions", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateFunction" }, CreateFunctionRequest, CreateFunctionResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves an `Api` object.
 */export const getApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis/{apiId}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetApi" }, GetApiRequest, GetApiResponse, [AccessDeniedException, BadRequestException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a `DataSource` object.
 */export const createDataSource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/datasources", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateDataSource" }, CreateDataSourceRequest, CreateDataSourceResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a `GraphqlApi` object.
 */export const createGraphqlApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateGraphqlApi" }, CreateGraphqlApiRequest, CreateGraphqlApiResponse, [ApiLimitExceededException, BadRequestException, ConcurrentModificationException, InternalFailureException, LimitExceededException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an `ApiCache` object.
 */export const deleteApiCache = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/apis/{apiId}/ApiCaches", method: "DELETE", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.DeleteApiCache" }, DeleteApiCacheRequest, DeleteApiCacheResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, NotFoundException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an `Api` object. Use this operation to create an AppSync
 * API with your preferred configuration, such as an Event API that provides real-time message
 * publishing and message subscriptions over WebSockets.
 */export const createApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateApi" }, CreateApiRequest, CreateApiResponse, [BadRequestException, ConcurrentModificationException, InternalFailureException, ServiceQuotaExceededException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Retrieves the record of an existing introspection. If the retrieval is successful, the
 * result of the instrospection will also be returned. If the retrieval fails the operation,
 * an error message will be returned instead.
 */export const getDataSourceIntrospection = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v1/datasources/introspections/{introspectionId}", method: "GET", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.GetDataSourceIntrospection" }, GetDataSourceIntrospectionRequest, GetDataSourceIntrospectionResponse, [BadRequestException, InternalFailureException, NotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a `ChannelNamespace` for an `Api`.
 */export const createChannelNamespace = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/v2/apis/{apiId}/channelNamespaces", sdkId: "AppSync", sigV4ServiceName: "appsync", name: "AWSDeepdishControlPlaneService.CreateChannelNamespace" }, CreateChannelNamespaceRequest, CreateChannelNamespaceResponse, [BadRequestException, ConcurrentModificationException, ConflictException, InternalFailureException, NotFoundException, ServiceQuotaExceededException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
