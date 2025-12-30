import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetAccountRequest extends S.Class<GetAccountRequest>("GetAccountRequest")({}) {}
export const ListOfARNs = S.Array(S.String);
export const ListOfString = S.Array(S.String);
export class CreateAuthorizerRequest extends S.Class<CreateAuthorizerRequest>("CreateAuthorizerRequest")({restApiId: S.String, name: S.String, type: S.String, providerARNs: S.optional(ListOfARNs), authType: S.optional(S.String), authorizerUri: S.optional(S.String), authorizerCredentials: S.optional(S.String), identitySource: S.optional(S.String), identityValidationExpression: S.optional(S.String), authorizerResultTtlInSeconds: S.optional(S.Number)}) {}
export class CreateBasePathMappingRequest extends S.Class<CreateBasePathMappingRequest>("CreateBasePathMappingRequest")({domainName: S.String, domainNameId: S.optional(S.String), basePath: S.optional(S.String), restApiId: S.String, stage: S.optional(S.String)}) {}
export class CreateDocumentationVersionRequest extends S.Class<CreateDocumentationVersionRequest>("CreateDocumentationVersionRequest")({restApiId: S.String, documentationVersion: S.String, stageName: S.optional(S.String), description: S.optional(S.String)}) {}
export const MapOfStringToString = S.Record({key: S.String, value: S.String});
export class CreateDomainNameAccessAssociationRequest extends S.Class<CreateDomainNameAccessAssociationRequest>("CreateDomainNameAccessAssociationRequest")({domainNameArn: S.String, accessAssociationSourceType: S.String, accessAssociationSource: S.String, tags: S.optional(MapOfStringToString)}) {}
export class CreateModelRequest extends S.Class<CreateModelRequest>("CreateModelRequest")({restApiId: S.String, name: S.String, description: S.optional(S.String), schema: S.optional(S.String), contentType: S.String}) {}
export class CreateRequestValidatorRequest extends S.Class<CreateRequestValidatorRequest>("CreateRequestValidatorRequest")({restApiId: S.String, name: S.optional(S.String), validateRequestBody: S.optional(S.Boolean), validateRequestParameters: S.optional(S.Boolean)}) {}
export class CreateResourceRequest extends S.Class<CreateResourceRequest>("CreateResourceRequest")({restApiId: S.String, parentId: S.String, pathPart: S.String}) {}
export const ListOfEndpointType = S.Array(S.String);
export class EndpointConfiguration extends S.Class<EndpointConfiguration>("EndpointConfiguration")({types: S.optional(ListOfEndpointType), ipAddressType: S.optional(S.String), vpcEndpointIds: S.optional(ListOfString)}) {}
export class CreateRestApiRequest extends S.Class<CreateRestApiRequest>("CreateRestApiRequest")({name: S.String, description: S.optional(S.String), version: S.optional(S.String), cloneFrom: S.optional(S.String), binaryMediaTypes: S.optional(ListOfString), minimumCompressionSize: S.optional(S.Number), apiKeySource: S.optional(S.String), endpointConfiguration: S.optional(EndpointConfiguration), policy: S.optional(S.String), tags: S.optional(MapOfStringToString), disableExecuteApiEndpoint: S.optional(S.Boolean), securityPolicy: S.optional(S.String), endpointAccessMode: S.optional(S.String)}) {}
export class CreateUsagePlanKeyRequest extends S.Class<CreateUsagePlanKeyRequest>("CreateUsagePlanKeyRequest")({usagePlanId: S.String, keyId: S.String, keyType: S.String}) {}
export class CreateVpcLinkRequest extends S.Class<CreateVpcLinkRequest>("CreateVpcLinkRequest")({name: S.String, description: S.optional(S.String), targetArns: ListOfString, tags: S.optional(MapOfStringToString)}) {}
export class DeleteApiKeyRequest extends S.Class<DeleteApiKeyRequest>("DeleteApiKeyRequest")({apiKey: S.String}) {}
export class DeleteAuthorizerRequest extends S.Class<DeleteAuthorizerRequest>("DeleteAuthorizerRequest")({restApiId: S.String, authorizerId: S.String}) {}
export class DeleteBasePathMappingRequest extends S.Class<DeleteBasePathMappingRequest>("DeleteBasePathMappingRequest")({domainName: S.String, domainNameId: S.optional(S.String), basePath: S.String}) {}
export class DeleteClientCertificateRequest extends S.Class<DeleteClientCertificateRequest>("DeleteClientCertificateRequest")({clientCertificateId: S.String}) {}
export class DeleteDeploymentRequest extends S.Class<DeleteDeploymentRequest>("DeleteDeploymentRequest")({restApiId: S.String, deploymentId: S.String}) {}
export class DeleteDocumentationPartRequest extends S.Class<DeleteDocumentationPartRequest>("DeleteDocumentationPartRequest")({restApiId: S.String, documentationPartId: S.String}) {}
export class DeleteDocumentationVersionRequest extends S.Class<DeleteDocumentationVersionRequest>("DeleteDocumentationVersionRequest")({restApiId: S.String, documentationVersion: S.String}) {}
export class DeleteDomainNameRequest extends S.Class<DeleteDomainNameRequest>("DeleteDomainNameRequest")({domainName: S.String, domainNameId: S.optional(S.String)}) {}
export class DeleteDomainNameAccessAssociationRequest extends S.Class<DeleteDomainNameAccessAssociationRequest>("DeleteDomainNameAccessAssociationRequest")({domainNameAccessAssociationArn: S.String}) {}
export class DeleteGatewayResponseRequest extends S.Class<DeleteGatewayResponseRequest>("DeleteGatewayResponseRequest")({restApiId: S.String, responseType: S.String}) {}
export class DeleteIntegrationRequest extends S.Class<DeleteIntegrationRequest>("DeleteIntegrationRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String}) {}
export class DeleteIntegrationResponseRequest extends S.Class<DeleteIntegrationResponseRequest>("DeleteIntegrationResponseRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, statusCode: S.String}) {}
export class DeleteMethodRequest extends S.Class<DeleteMethodRequest>("DeleteMethodRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String}) {}
export class DeleteMethodResponseRequest extends S.Class<DeleteMethodResponseRequest>("DeleteMethodResponseRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, statusCode: S.String}) {}
export class DeleteModelRequest extends S.Class<DeleteModelRequest>("DeleteModelRequest")({restApiId: S.String, modelName: S.String}) {}
export class DeleteRequestValidatorRequest extends S.Class<DeleteRequestValidatorRequest>("DeleteRequestValidatorRequest")({restApiId: S.String, requestValidatorId: S.String}) {}
export class DeleteResourceRequest extends S.Class<DeleteResourceRequest>("DeleteResourceRequest")({restApiId: S.String, resourceId: S.String}) {}
export class DeleteRestApiRequest extends S.Class<DeleteRestApiRequest>("DeleteRestApiRequest")({restApiId: S.String}) {}
export class DeleteStageRequest extends S.Class<DeleteStageRequest>("DeleteStageRequest")({restApiId: S.String, stageName: S.String}) {}
export class DeleteUsagePlanRequest extends S.Class<DeleteUsagePlanRequest>("DeleteUsagePlanRequest")({usagePlanId: S.String}) {}
export class DeleteUsagePlanKeyRequest extends S.Class<DeleteUsagePlanKeyRequest>("DeleteUsagePlanKeyRequest")({usagePlanId: S.String, keyId: S.String}) {}
export class DeleteVpcLinkRequest extends S.Class<DeleteVpcLinkRequest>("DeleteVpcLinkRequest")({vpcLinkId: S.String}) {}
export class FlushStageAuthorizersCacheRequest extends S.Class<FlushStageAuthorizersCacheRequest>("FlushStageAuthorizersCacheRequest")({restApiId: S.String, stageName: S.String}) {}
export class FlushStageCacheRequest extends S.Class<FlushStageCacheRequest>("FlushStageCacheRequest")({restApiId: S.String, stageName: S.String}) {}
export class GenerateClientCertificateRequest extends S.Class<GenerateClientCertificateRequest>("GenerateClientCertificateRequest")({description: S.optional(S.String), tags: S.optional(MapOfStringToString)}) {}
export class ThrottleSettings extends S.Class<ThrottleSettings>("ThrottleSettings")({burstLimit: S.optional(S.Number), rateLimit: S.optional(S.Number)}) {}
export class Account extends S.Class<Account>("Account")({cloudwatchRoleArn: S.optional(S.String), throttleSettings: S.optional(ThrottleSettings), features: S.optional(ListOfString), apiKeyVersion: S.optional(S.String)}) {}
export class GetApiKeyRequest extends S.Class<GetApiKeyRequest>("GetApiKeyRequest")({apiKey: S.String, includeValue: S.optional(S.Boolean)}) {}
export class GetApiKeysRequest extends S.Class<GetApiKeysRequest>("GetApiKeysRequest")({position: S.optional(S.String), limit: S.optional(S.Number), nameQuery: S.optional(S.String), customerId: S.optional(S.String), includeValues: S.optional(S.Boolean)}) {}
export class GetAuthorizerRequest extends S.Class<GetAuthorizerRequest>("GetAuthorizerRequest")({restApiId: S.String, authorizerId: S.String}) {}
export class GetAuthorizersRequest extends S.Class<GetAuthorizersRequest>("GetAuthorizersRequest")({restApiId: S.String, position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetBasePathMappingRequest extends S.Class<GetBasePathMappingRequest>("GetBasePathMappingRequest")({domainName: S.String, domainNameId: S.optional(S.String), basePath: S.String}) {}
export class GetBasePathMappingsRequest extends S.Class<GetBasePathMappingsRequest>("GetBasePathMappingsRequest")({domainName: S.String, domainNameId: S.optional(S.String), position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetClientCertificateRequest extends S.Class<GetClientCertificateRequest>("GetClientCertificateRequest")({clientCertificateId: S.String}) {}
export class GetClientCertificatesRequest extends S.Class<GetClientCertificatesRequest>("GetClientCertificatesRequest")({position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetDeploymentRequest extends S.Class<GetDeploymentRequest>("GetDeploymentRequest")({restApiId: S.String, deploymentId: S.String, embed: S.optional(ListOfString)}) {}
export class GetDeploymentsRequest extends S.Class<GetDeploymentsRequest>("GetDeploymentsRequest")({restApiId: S.String, position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetDocumentationPartRequest extends S.Class<GetDocumentationPartRequest>("GetDocumentationPartRequest")({restApiId: S.String, documentationPartId: S.String}) {}
export class GetDocumentationPartsRequest extends S.Class<GetDocumentationPartsRequest>("GetDocumentationPartsRequest")({restApiId: S.String, type: S.optional(S.String), nameQuery: S.optional(S.String), path: S.optional(S.String), position: S.optional(S.String), limit: S.optional(S.Number), locationStatus: S.optional(S.String)}) {}
export class GetDocumentationVersionRequest extends S.Class<GetDocumentationVersionRequest>("GetDocumentationVersionRequest")({restApiId: S.String, documentationVersion: S.String}) {}
export class GetDocumentationVersionsRequest extends S.Class<GetDocumentationVersionsRequest>("GetDocumentationVersionsRequest")({restApiId: S.String, position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetDomainNameRequest extends S.Class<GetDomainNameRequest>("GetDomainNameRequest")({domainName: S.String, domainNameId: S.optional(S.String)}) {}
export class GetDomainNameAccessAssociationsRequest extends S.Class<GetDomainNameAccessAssociationsRequest>("GetDomainNameAccessAssociationsRequest")({position: S.optional(S.String), limit: S.optional(S.Number), resourceOwner: S.optional(S.String)}) {}
export class GetDomainNamesRequest extends S.Class<GetDomainNamesRequest>("GetDomainNamesRequest")({position: S.optional(S.String), limit: S.optional(S.Number), resourceOwner: S.optional(S.String)}) {}
export class GetExportRequest extends S.Class<GetExportRequest>("GetExportRequest")({restApiId: S.String, stageName: S.String, exportType: S.String, parameters: S.optional(MapOfStringToString), accepts: S.optional(H.Header("Accept"))}) {}
export class GetGatewayResponseRequest extends S.Class<GetGatewayResponseRequest>("GetGatewayResponseRequest")({restApiId: S.String, responseType: S.String}) {}
export class GetGatewayResponsesRequest extends S.Class<GetGatewayResponsesRequest>("GetGatewayResponsesRequest")({restApiId: S.String, position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetIntegrationRequest extends S.Class<GetIntegrationRequest>("GetIntegrationRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String}) {}
export class GetIntegrationResponseRequest extends S.Class<GetIntegrationResponseRequest>("GetIntegrationResponseRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, statusCode: S.String}) {}
export class GetMethodRequest extends S.Class<GetMethodRequest>("GetMethodRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String}) {}
export class GetMethodResponseRequest extends S.Class<GetMethodResponseRequest>("GetMethodResponseRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, statusCode: S.String}) {}
export class GetModelRequest extends S.Class<GetModelRequest>("GetModelRequest")({restApiId: S.String, modelName: S.String, flatten: S.optional(S.Boolean)}) {}
export class GetModelsRequest extends S.Class<GetModelsRequest>("GetModelsRequest")({restApiId: S.String, position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetModelTemplateRequest extends S.Class<GetModelTemplateRequest>("GetModelTemplateRequest")({restApiId: S.String, modelName: S.String}) {}
export class GetRequestValidatorRequest extends S.Class<GetRequestValidatorRequest>("GetRequestValidatorRequest")({restApiId: S.String, requestValidatorId: S.String}) {}
export class GetRequestValidatorsRequest extends S.Class<GetRequestValidatorsRequest>("GetRequestValidatorsRequest")({restApiId: S.String, position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetResourceRequest extends S.Class<GetResourceRequest>("GetResourceRequest")({restApiId: S.String, resourceId: S.String, embed: S.optional(ListOfString)}) {}
export class GetResourcesRequest extends S.Class<GetResourcesRequest>("GetResourcesRequest")({restApiId: S.String, position: S.optional(S.String), limit: S.optional(S.Number), embed: S.optional(ListOfString)}) {}
export class GetRestApiRequest extends S.Class<GetRestApiRequest>("GetRestApiRequest")({restApiId: S.String}) {}
export class GetRestApisRequest extends S.Class<GetRestApisRequest>("GetRestApisRequest")({position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetSdkRequest extends S.Class<GetSdkRequest>("GetSdkRequest")({restApiId: S.String, stageName: S.String, sdkType: S.String, parameters: S.optional(MapOfStringToString)}) {}
export class GetSdkTypeRequest extends S.Class<GetSdkTypeRequest>("GetSdkTypeRequest")({id: S.String}) {}
export class GetSdkTypesRequest extends S.Class<GetSdkTypesRequest>("GetSdkTypesRequest")({position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetStageRequest extends S.Class<GetStageRequest>("GetStageRequest")({restApiId: S.String, stageName: S.String}) {}
export class GetStagesRequest extends S.Class<GetStagesRequest>("GetStagesRequest")({restApiId: S.String, deploymentId: S.optional(S.String)}) {}
export class GetTagsRequest extends S.Class<GetTagsRequest>("GetTagsRequest")({resourceArn: S.String, position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetUsageRequest extends S.Class<GetUsageRequest>("GetUsageRequest")({usagePlanId: S.String, keyId: S.optional(S.String), startDate: S.String, endDate: S.String, position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetUsagePlanRequest extends S.Class<GetUsagePlanRequest>("GetUsagePlanRequest")({usagePlanId: S.String}) {}
export class GetUsagePlanKeyRequest extends S.Class<GetUsagePlanKeyRequest>("GetUsagePlanKeyRequest")({usagePlanId: S.String, keyId: S.String}) {}
export class GetUsagePlanKeysRequest extends S.Class<GetUsagePlanKeysRequest>("GetUsagePlanKeysRequest")({usagePlanId: S.String, position: S.optional(S.String), limit: S.optional(S.Number), nameQuery: S.optional(S.String)}) {}
export class GetUsagePlansRequest extends S.Class<GetUsagePlansRequest>("GetUsagePlansRequest")({position: S.optional(S.String), keyId: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class GetVpcLinkRequest extends S.Class<GetVpcLinkRequest>("GetVpcLinkRequest")({vpcLinkId: S.String}) {}
export class GetVpcLinksRequest extends S.Class<GetVpcLinksRequest>("GetVpcLinksRequest")({position: S.optional(S.String), limit: S.optional(S.Number)}) {}
export class ImportApiKeysRequest extends S.Class<ImportApiKeysRequest>("ImportApiKeysRequest")({body: H.Body("undefined", H.StreamBody()), format: S.String, failOnWarnings: S.optional(S.Boolean)}) {}
export class ImportDocumentationPartsRequest extends S.Class<ImportDocumentationPartsRequest>("ImportDocumentationPartsRequest")({restApiId: S.String, mode: S.optional(S.String), failOnWarnings: S.optional(S.Boolean), body: H.Body("undefined", H.StreamBody())}) {}
export class ImportRestApiRequest extends S.Class<ImportRestApiRequest>("ImportRestApiRequest")({failOnWarnings: S.optional(S.Boolean), parameters: S.optional(MapOfStringToString), body: H.Body("undefined", H.StreamBody())}) {}
export class PutGatewayResponseRequest extends S.Class<PutGatewayResponseRequest>("PutGatewayResponseRequest")({restApiId: S.String, responseType: S.String, statusCode: S.optional(S.String), responseParameters: S.optional(MapOfStringToString), responseTemplates: S.optional(MapOfStringToString)}) {}
export class PutIntegrationResponseRequest extends S.Class<PutIntegrationResponseRequest>("PutIntegrationResponseRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, statusCode: S.String, selectionPattern: S.optional(S.String), responseParameters: S.optional(MapOfStringToString), responseTemplates: S.optional(MapOfStringToString), contentHandling: S.optional(S.String)}) {}
export const MapOfStringToBoolean = S.Record({key: S.String, value: S.Boolean});
export class PutMethodResponseRequest extends S.Class<PutMethodResponseRequest>("PutMethodResponseRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, statusCode: S.String, responseParameters: S.optional(MapOfStringToBoolean), responseModels: S.optional(MapOfStringToString)}) {}
export class PutRestApiRequest extends S.Class<PutRestApiRequest>("PutRestApiRequest")({restApiId: S.String, mode: S.optional(S.String), failOnWarnings: S.optional(S.Boolean), parameters: S.optional(MapOfStringToString), body: H.Body("undefined", H.StreamBody())}) {}
export class RejectDomainNameAccessAssociationRequest extends S.Class<RejectDomainNameAccessAssociationRequest>("RejectDomainNameAccessAssociationRequest")({domainNameAccessAssociationArn: S.String, domainNameArn: S.String}) {}
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: MapOfStringToString}) {}
export const MapOfStringToList = S.Record({key: S.String, value: ListOfString});
export class TestInvokeMethodRequest extends S.Class<TestInvokeMethodRequest>("TestInvokeMethodRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, pathWithQueryString: S.optional(S.String), body: S.optional(S.String), headers: S.optional(MapOfStringToString), multiValueHeaders: S.optional(MapOfStringToList), clientCertificateId: S.optional(S.String), stageVariables: S.optional(MapOfStringToString)}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: ListOfString}) {}
export class PatchOperation extends S.Class<PatchOperation>("PatchOperation")({op: S.optional(S.String), path: S.optional(S.String), value: S.optional(S.String), from: S.optional(S.String)}) {}
export const ListOfPatchOperation = S.Array(PatchOperation);
export class UpdateApiKeyRequest extends S.Class<UpdateApiKeyRequest>("UpdateApiKeyRequest")({apiKey: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateAuthorizerRequest extends S.Class<UpdateAuthorizerRequest>("UpdateAuthorizerRequest")({restApiId: S.String, authorizerId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateBasePathMappingRequest extends S.Class<UpdateBasePathMappingRequest>("UpdateBasePathMappingRequest")({domainName: S.String, domainNameId: S.optional(S.String), basePath: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateClientCertificateRequest extends S.Class<UpdateClientCertificateRequest>("UpdateClientCertificateRequest")({clientCertificateId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateDeploymentRequest extends S.Class<UpdateDeploymentRequest>("UpdateDeploymentRequest")({restApiId: S.String, deploymentId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateDocumentationPartRequest extends S.Class<UpdateDocumentationPartRequest>("UpdateDocumentationPartRequest")({restApiId: S.String, documentationPartId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateDocumentationVersionRequest extends S.Class<UpdateDocumentationVersionRequest>("UpdateDocumentationVersionRequest")({restApiId: S.String, documentationVersion: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateDomainNameRequest extends S.Class<UpdateDomainNameRequest>("UpdateDomainNameRequest")({domainName: S.String, domainNameId: S.optional(S.String), patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateGatewayResponseRequest extends S.Class<UpdateGatewayResponseRequest>("UpdateGatewayResponseRequest")({restApiId: S.String, responseType: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateIntegrationRequest extends S.Class<UpdateIntegrationRequest>("UpdateIntegrationRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateIntegrationResponseRequest extends S.Class<UpdateIntegrationResponseRequest>("UpdateIntegrationResponseRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, statusCode: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateMethodRequest extends S.Class<UpdateMethodRequest>("UpdateMethodRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateMethodResponseRequest extends S.Class<UpdateMethodResponseRequest>("UpdateMethodResponseRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, statusCode: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateModelRequest extends S.Class<UpdateModelRequest>("UpdateModelRequest")({restApiId: S.String, modelName: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateRequestValidatorRequest extends S.Class<UpdateRequestValidatorRequest>("UpdateRequestValidatorRequest")({restApiId: S.String, requestValidatorId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateResourceRequest extends S.Class<UpdateResourceRequest>("UpdateResourceRequest")({restApiId: S.String, resourceId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateRestApiRequest extends S.Class<UpdateRestApiRequest>("UpdateRestApiRequest")({restApiId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateStageRequest extends S.Class<UpdateStageRequest>("UpdateStageRequest")({restApiId: S.String, stageName: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateUsageRequest extends S.Class<UpdateUsageRequest>("UpdateUsageRequest")({usagePlanId: S.String, keyId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateUsagePlanRequest extends S.Class<UpdateUsagePlanRequest>("UpdateUsagePlanRequest")({usagePlanId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class UpdateVpcLinkRequest extends S.Class<UpdateVpcLinkRequest>("UpdateVpcLinkRequest")({vpcLinkId: S.String, patchOperations: S.optional(ListOfPatchOperation)}) {}
export class StageKey extends S.Class<StageKey>("StageKey")({restApiId: S.optional(S.String), stageName: S.optional(S.String)}) {}
export const ListOfStageKeys = S.Array(StageKey);
export class DeploymentCanarySettings extends S.Class<DeploymentCanarySettings>("DeploymentCanarySettings")({percentTraffic: S.optional(S.Number), stageVariableOverrides: S.optional(MapOfStringToString), useStageCache: S.optional(S.Boolean)}) {}
export class DocumentationPartLocation extends S.Class<DocumentationPartLocation>("DocumentationPartLocation")({type: S.String, path: S.optional(S.String), method: S.optional(S.String), statusCode: S.optional(S.String), name: S.optional(S.String)}) {}
export class MutualTlsAuthenticationInput extends S.Class<MutualTlsAuthenticationInput>("MutualTlsAuthenticationInput")({truststoreUri: S.optional(S.String), truststoreVersion: S.optional(S.String)}) {}
export class CanarySettings extends S.Class<CanarySettings>("CanarySettings")({percentTraffic: S.optional(S.Number), deploymentId: S.optional(S.String), stageVariableOverrides: S.optional(MapOfStringToString), useStageCache: S.optional(S.Boolean)}) {}
export class QuotaSettings extends S.Class<QuotaSettings>("QuotaSettings")({limit: S.optional(S.Number), offset: S.optional(S.Number), period: S.optional(S.String)}) {}
export class ApiKey extends S.Class<ApiKey>("ApiKey")({id: S.optional(S.String), value: S.optional(S.String), name: S.optional(S.String), customerId: S.optional(S.String), description: S.optional(S.String), enabled: S.optional(S.Boolean), createdDate: S.optional(S.Date), lastUpdatedDate: S.optional(S.Date), stageKeys: S.optional(ListOfString), tags: S.optional(MapOfStringToString)}) {}
export const ListOfApiKey = S.Array(ApiKey);
export class Authorizer extends S.Class<Authorizer>("Authorizer")({id: S.optional(S.String), name: S.optional(S.String), type: S.optional(S.String), providerARNs: S.optional(ListOfARNs), authType: S.optional(S.String), authorizerUri: S.optional(S.String), authorizerCredentials: S.optional(S.String), identitySource: S.optional(S.String), identityValidationExpression: S.optional(S.String), authorizerResultTtlInSeconds: S.optional(S.Number)}) {}
export const ListOfAuthorizer = S.Array(Authorizer);
export class BasePathMapping extends S.Class<BasePathMapping>("BasePathMapping")({basePath: S.optional(S.String), restApiId: S.optional(S.String), stage: S.optional(S.String)}) {}
export const ListOfBasePathMapping = S.Array(BasePathMapping);
export class ClientCertificate extends S.Class<ClientCertificate>("ClientCertificate")({clientCertificateId: S.optional(S.String), description: S.optional(S.String), pemEncodedCertificate: S.optional(S.String), createdDate: S.optional(S.Date), expirationDate: S.optional(S.Date), tags: S.optional(MapOfStringToString)}) {}
export const ListOfClientCertificate = S.Array(ClientCertificate);
export class MethodSnapshot extends S.Class<MethodSnapshot>("MethodSnapshot")({authorizationType: S.optional(S.String), apiKeyRequired: S.optional(S.Boolean)}) {}
export const MapOfMethodSnapshot = S.Record({key: S.String, value: MethodSnapshot});
export const PathToMapOfMethodSnapshot = S.Record({key: S.String, value: MapOfMethodSnapshot});
export class Deployment extends S.Class<Deployment>("Deployment")({id: S.optional(S.String), description: S.optional(S.String), createdDate: S.optional(S.Date), apiSummary: S.optional(PathToMapOfMethodSnapshot)}) {}
export const ListOfDeployment = S.Array(Deployment);
export class DocumentationPart extends S.Class<DocumentationPart>("DocumentationPart")({id: S.optional(S.String), location: S.optional(DocumentationPartLocation), properties: S.optional(S.String)}) {}
export const ListOfDocumentationPart = S.Array(DocumentationPart);
export class DocumentationVersion extends S.Class<DocumentationVersion>("DocumentationVersion")({version: S.optional(S.String), createdDate: S.optional(S.Date), description: S.optional(S.String)}) {}
export const ListOfDocumentationVersion = S.Array(DocumentationVersion);
export class DomainNameAccessAssociation extends S.Class<DomainNameAccessAssociation>("DomainNameAccessAssociation")({domainNameAccessAssociationArn: S.optional(S.String), domainNameArn: S.optional(S.String), accessAssociationSourceType: S.optional(S.String), accessAssociationSource: S.optional(S.String), tags: S.optional(MapOfStringToString)}) {}
export const ListOfDomainNameAccessAssociation = S.Array(DomainNameAccessAssociation);
export class MutualTlsAuthentication extends S.Class<MutualTlsAuthentication>("MutualTlsAuthentication")({truststoreUri: S.optional(S.String), truststoreVersion: S.optional(S.String), truststoreWarnings: S.optional(ListOfString)}) {}
export class DomainName extends S.Class<DomainName>("DomainName")({domainName: S.optional(S.String), domainNameId: S.optional(S.String), domainNameArn: S.optional(S.String), certificateName: S.optional(S.String), certificateArn: S.optional(S.String), certificateUploadDate: S.optional(S.Date), regionalDomainName: S.optional(S.String), regionalHostedZoneId: S.optional(S.String), regionalCertificateName: S.optional(S.String), regionalCertificateArn: S.optional(S.String), distributionDomainName: S.optional(S.String), distributionHostedZoneId: S.optional(S.String), endpointConfiguration: S.optional(EndpointConfiguration), domainNameStatus: S.optional(S.String), domainNameStatusMessage: S.optional(S.String), securityPolicy: S.optional(S.String), endpointAccessMode: S.optional(S.String), tags: S.optional(MapOfStringToString), mutualTlsAuthentication: S.optional(MutualTlsAuthentication), ownershipVerificationCertificateArn: S.optional(S.String), managementPolicy: S.optional(S.String), policy: S.optional(S.String), routingMode: S.optional(S.String)}) {}
export const ListOfDomainName = S.Array(DomainName);
export class GatewayResponse extends S.Class<GatewayResponse>("GatewayResponse")({responseType: S.optional(S.String), statusCode: S.optional(S.String), responseParameters: S.optional(MapOfStringToString), responseTemplates: S.optional(MapOfStringToString), defaultResponse: S.optional(S.Boolean)}) {}
export const ListOfGatewayResponse = S.Array(GatewayResponse);
export class Model extends S.Class<Model>("Model")({id: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), schema: S.optional(S.String), contentType: S.optional(S.String)}) {}
export const ListOfModel = S.Array(Model);
export class RequestValidator extends S.Class<RequestValidator>("RequestValidator")({id: S.optional(S.String), name: S.optional(S.String), validateRequestBody: S.optional(S.Boolean), validateRequestParameters: S.optional(S.Boolean)}) {}
export const ListOfRequestValidator = S.Array(RequestValidator);
export class MethodResponse extends S.Class<MethodResponse>("MethodResponse")({statusCode: S.optional(S.String), responseParameters: S.optional(MapOfStringToBoolean), responseModels: S.optional(MapOfStringToString)}) {}
export const MapOfMethodResponse = S.Record({key: S.String, value: MethodResponse});
export class IntegrationResponse extends S.Class<IntegrationResponse>("IntegrationResponse")({statusCode: S.optional(S.String), selectionPattern: S.optional(S.String), responseParameters: S.optional(MapOfStringToString), responseTemplates: S.optional(MapOfStringToString), contentHandling: S.optional(S.String)}) {}
export const MapOfIntegrationResponse = S.Record({key: S.String, value: IntegrationResponse});
export class TlsConfig extends S.Class<TlsConfig>("TlsConfig")({insecureSkipVerification: S.optional(S.Boolean)}) {}
export class Integration extends S.Class<Integration>("Integration")({type: S.optional(S.String), httpMethod: S.optional(S.String), uri: S.optional(S.String), connectionType: S.optional(S.String), connectionId: S.optional(S.String), credentials: S.optional(S.String), requestParameters: S.optional(MapOfStringToString), requestTemplates: S.optional(MapOfStringToString), passthroughBehavior: S.optional(S.String), contentHandling: S.optional(S.String), timeoutInMillis: S.optional(S.Number), cacheNamespace: S.optional(S.String), cacheKeyParameters: S.optional(ListOfString), integrationResponses: S.optional(MapOfIntegrationResponse), tlsConfig: S.optional(TlsConfig), responseTransferMode: S.optional(S.String), integrationTarget: S.optional(S.String)}) {}
export class Method extends S.Class<Method>("Method")({httpMethod: S.optional(S.String), authorizationType: S.optional(S.String), authorizerId: S.optional(S.String), apiKeyRequired: S.optional(S.Boolean), requestValidatorId: S.optional(S.String), operationName: S.optional(S.String), requestParameters: S.optional(MapOfStringToBoolean), requestModels: S.optional(MapOfStringToString), methodResponses: S.optional(MapOfMethodResponse), methodIntegration: S.optional(Integration), authorizationScopes: S.optional(ListOfString)}) {}
export const MapOfMethod = S.Record({key: S.String, value: Method});
export class Resource extends S.Class<Resource>("Resource")({id: S.optional(S.String), parentId: S.optional(S.String), pathPart: S.optional(S.String), path: S.optional(S.String), resourceMethods: S.optional(MapOfMethod)}) {}
export const ListOfResource = S.Array(Resource);
export class RestApi extends S.Class<RestApi>("RestApi")({id: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), createdDate: S.optional(S.Date), version: S.optional(S.String), warnings: S.optional(ListOfString), binaryMediaTypes: S.optional(ListOfString), minimumCompressionSize: S.optional(S.Number), apiKeySource: S.optional(S.String), endpointConfiguration: S.optional(EndpointConfiguration), policy: S.optional(S.String), tags: S.optional(MapOfStringToString), disableExecuteApiEndpoint: S.optional(S.Boolean), rootResourceId: S.optional(S.String), securityPolicy: S.optional(S.String), endpointAccessMode: S.optional(S.String), apiStatus: S.optional(S.String), apiStatusMessage: S.optional(S.String)}) {}
export const ListOfRestApi = S.Array(RestApi);
export class SdkConfigurationProperty extends S.Class<SdkConfigurationProperty>("SdkConfigurationProperty")({name: S.optional(S.String), friendlyName: S.optional(S.String), description: S.optional(S.String), required: S.optional(S.Boolean), defaultValue: S.optional(S.String)}) {}
export const ListOfSdkConfigurationProperty = S.Array(SdkConfigurationProperty);
export class SdkType extends S.Class<SdkType>("SdkType")({id: S.optional(S.String), friendlyName: S.optional(S.String), description: S.optional(S.String), configurationProperties: S.optional(ListOfSdkConfigurationProperty)}) {}
export const ListOfSdkType = S.Array(SdkType);
export class MethodSetting extends S.Class<MethodSetting>("MethodSetting")({metricsEnabled: S.optional(S.Boolean), loggingLevel: S.optional(S.String), dataTraceEnabled: S.optional(S.Boolean), throttlingBurstLimit: S.optional(S.Number), throttlingRateLimit: S.optional(S.Number), cachingEnabled: S.optional(S.Boolean), cacheTtlInSeconds: S.optional(S.Number), cacheDataEncrypted: S.optional(S.Boolean), requireAuthorizationForCacheControl: S.optional(S.Boolean), unauthorizedCacheControlHeaderStrategy: S.optional(S.String)}) {}
export const MapOfMethodSettings = S.Record({key: S.String, value: MethodSetting});
export class AccessLogSettings extends S.Class<AccessLogSettings>("AccessLogSettings")({format: S.optional(S.String), destinationArn: S.optional(S.String)}) {}
export class Stage extends S.Class<Stage>("Stage")({deploymentId: S.optional(S.String), clientCertificateId: S.optional(S.String), stageName: S.optional(S.String), description: S.optional(S.String), cacheClusterEnabled: S.optional(S.Boolean), cacheClusterSize: S.optional(S.String), cacheClusterStatus: S.optional(S.String), methodSettings: S.optional(MapOfMethodSettings), variables: S.optional(MapOfStringToString), documentationVersion: S.optional(S.String), accessLogSettings: S.optional(AccessLogSettings), canarySettings: S.optional(CanarySettings), tracingEnabled: S.optional(S.Boolean), webAclArn: S.optional(S.String), tags: S.optional(MapOfStringToString), createdDate: S.optional(S.Date), lastUpdatedDate: S.optional(S.Date)}) {}
export const ListOfStage = S.Array(Stage);
export class UsagePlanKey extends S.Class<UsagePlanKey>("UsagePlanKey")({id: S.optional(S.String), type: S.optional(S.String), value: S.optional(S.String), name: S.optional(S.String)}) {}
export const ListOfUsagePlanKey = S.Array(UsagePlanKey);
export const MapOfApiStageThrottleSettings = S.Record({key: S.String, value: ThrottleSettings});
export class ApiStage extends S.Class<ApiStage>("ApiStage")({apiId: S.optional(S.String), stage: S.optional(S.String), throttle: S.optional(MapOfApiStageThrottleSettings)}) {}
export const ListOfApiStage = S.Array(ApiStage);
export class UsagePlan extends S.Class<UsagePlan>("UsagePlan")({id: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), apiStages: S.optional(ListOfApiStage), throttle: S.optional(ThrottleSettings), quota: S.optional(QuotaSettings), productCode: S.optional(S.String), tags: S.optional(MapOfStringToString)}) {}
export const ListOfUsagePlan = S.Array(UsagePlan);
export class VpcLink extends S.Class<VpcLink>("VpcLink")({id: S.optional(S.String), name: S.optional(S.String), description: S.optional(S.String), targetArns: S.optional(ListOfString), status: S.optional(S.String), statusMessage: S.optional(S.String), tags: S.optional(MapOfStringToString)}) {}
export const ListOfVpcLink = S.Array(VpcLink);
export class CreateApiKeyRequest extends S.Class<CreateApiKeyRequest>("CreateApiKeyRequest")({name: S.optional(S.String), description: S.optional(S.String), enabled: S.optional(S.Boolean), generateDistinctId: S.optional(S.Boolean), value: S.optional(S.String), stageKeys: S.optional(ListOfStageKeys), customerId: S.optional(S.String), tags: S.optional(MapOfStringToString)}) {}
export class CreateDeploymentRequest extends S.Class<CreateDeploymentRequest>("CreateDeploymentRequest")({restApiId: S.String, stageName: S.optional(S.String), stageDescription: S.optional(S.String), description: S.optional(S.String), cacheClusterEnabled: S.optional(S.Boolean), cacheClusterSize: S.optional(S.String), variables: S.optional(MapOfStringToString), canarySettings: S.optional(DeploymentCanarySettings), tracingEnabled: S.optional(S.Boolean)}) {}
export class CreateDocumentationPartRequest extends S.Class<CreateDocumentationPartRequest>("CreateDocumentationPartRequest")({restApiId: S.String, location: DocumentationPartLocation, properties: S.String}) {}
export class CreateDomainNameRequest extends S.Class<CreateDomainNameRequest>("CreateDomainNameRequest")({domainName: S.String, certificateName: S.optional(S.String), certificateBody: S.optional(S.String), certificatePrivateKey: S.optional(S.String), certificateChain: S.optional(S.String), certificateArn: S.optional(S.String), regionalCertificateName: S.optional(S.String), regionalCertificateArn: S.optional(S.String), endpointConfiguration: S.optional(EndpointConfiguration), tags: S.optional(MapOfStringToString), securityPolicy: S.optional(S.String), endpointAccessMode: S.optional(S.String), mutualTlsAuthentication: S.optional(MutualTlsAuthenticationInput), ownershipVerificationCertificateArn: S.optional(S.String), policy: S.optional(S.String), routingMode: S.optional(S.String)}) {}
export class CreateStageRequest extends S.Class<CreateStageRequest>("CreateStageRequest")({restApiId: S.String, stageName: S.String, deploymentId: S.String, description: S.optional(S.String), cacheClusterEnabled: S.optional(S.Boolean), cacheClusterSize: S.optional(S.String), variables: S.optional(MapOfStringToString), documentationVersion: S.optional(S.String), canarySettings: S.optional(CanarySettings), tracingEnabled: S.optional(S.Boolean), tags: S.optional(MapOfStringToString)}) {}
export class ApiKeys extends S.Class<ApiKeys>("ApiKeys")({warnings: S.optional(ListOfString), items: S.optional(ListOfApiKey), position: S.optional(S.String)}) {}
export class Authorizers extends S.Class<Authorizers>("Authorizers")({items: S.optional(ListOfAuthorizer), position: S.optional(S.String)}) {}
export class BasePathMappings extends S.Class<BasePathMappings>("BasePathMappings")({items: S.optional(ListOfBasePathMapping), position: S.optional(S.String)}) {}
export class ClientCertificates extends S.Class<ClientCertificates>("ClientCertificates")({items: S.optional(ListOfClientCertificate), position: S.optional(S.String)}) {}
export class Deployments extends S.Class<Deployments>("Deployments")({items: S.optional(ListOfDeployment), position: S.optional(S.String)}) {}
export class DocumentationParts extends S.Class<DocumentationParts>("DocumentationParts")({items: S.optional(ListOfDocumentationPart), position: S.optional(S.String)}) {}
export class DocumentationVersions extends S.Class<DocumentationVersions>("DocumentationVersions")({items: S.optional(ListOfDocumentationVersion), position: S.optional(S.String)}) {}
export class DomainNameAccessAssociations extends S.Class<DomainNameAccessAssociations>("DomainNameAccessAssociations")({items: S.optional(ListOfDomainNameAccessAssociation), position: S.optional(S.String)}) {}
export class DomainNames extends S.Class<DomainNames>("DomainNames")({items: S.optional(ListOfDomainName), position: S.optional(S.String)}) {}
export class ExportResponse extends S.Class<ExportResponse>("ExportResponse")({contentType: S.optional(H.Header("Content-Type")), contentDisposition: S.optional(H.Header("Content-Disposition")), body: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class GatewayResponses extends S.Class<GatewayResponses>("GatewayResponses")({items: S.optional(ListOfGatewayResponse), position: S.optional(S.String)}) {}
export class Models extends S.Class<Models>("Models")({items: S.optional(ListOfModel), position: S.optional(S.String)}) {}
export class Template extends S.Class<Template>("Template")({value: S.optional(S.String)}) {}
export class RequestValidators extends S.Class<RequestValidators>("RequestValidators")({items: S.optional(ListOfRequestValidator), position: S.optional(S.String)}) {}
export class Resources extends S.Class<Resources>("Resources")({items: S.optional(ListOfResource), position: S.optional(S.String)}) {}
export class RestApis extends S.Class<RestApis>("RestApis")({items: S.optional(ListOfRestApi), position: S.optional(S.String)}) {}
export class SdkResponse extends S.Class<SdkResponse>("SdkResponse")({contentType: S.optional(H.Header("Content-Type")), contentDisposition: S.optional(H.Header("Content-Disposition")), body: S.optional(H.Body("undefined", H.StreamBody()))}) {}
export class SdkTypes extends S.Class<SdkTypes>("SdkTypes")({items: S.optional(ListOfSdkType)}) {}
export class Stages extends S.Class<Stages>("Stages")({item: S.optional(ListOfStage)}) {}
export class Tags extends S.Class<Tags>("Tags")({tags: S.optional(MapOfStringToString)}) {}
export class UsagePlanKeys extends S.Class<UsagePlanKeys>("UsagePlanKeys")({items: S.optional(ListOfUsagePlanKey), position: S.optional(S.String)}) {}
export class UsagePlans extends S.Class<UsagePlans>("UsagePlans")({items: S.optional(ListOfUsagePlan), position: S.optional(S.String)}) {}
export class VpcLinks extends S.Class<VpcLinks>("VpcLinks")({items: S.optional(ListOfVpcLink), position: S.optional(S.String)}) {}
export class ApiKeyIds extends S.Class<ApiKeyIds>("ApiKeyIds")({ids: S.optional(ListOfString), warnings: S.optional(ListOfString)}) {}
export class DocumentationPartIds extends S.Class<DocumentationPartIds>("DocumentationPartIds")({ids: S.optional(ListOfString), warnings: S.optional(ListOfString)}) {}
export class PutIntegrationRequest extends S.Class<PutIntegrationRequest>("PutIntegrationRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, type: S.String, integrationHttpMethod: S.optional(S.String), uri: S.optional(S.String), connectionType: S.optional(S.String), connectionId: S.optional(S.String), credentials: S.optional(S.String), requestParameters: S.optional(MapOfStringToString), requestTemplates: S.optional(MapOfStringToString), passthroughBehavior: S.optional(S.String), cacheNamespace: S.optional(S.String), cacheKeyParameters: S.optional(ListOfString), contentHandling: S.optional(S.String), timeoutInMillis: S.optional(S.Number), tlsConfig: S.optional(TlsConfig), responseTransferMode: S.optional(S.String), integrationTarget: S.optional(S.String)}) {}
export class PutMethodRequest extends S.Class<PutMethodRequest>("PutMethodRequest")({restApiId: S.String, resourceId: S.String, httpMethod: S.String, authorizationType: S.String, authorizerId: S.optional(S.String), apiKeyRequired: S.optional(S.Boolean), operationName: S.optional(S.String), requestParameters: S.optional(MapOfStringToBoolean), requestModels: S.optional(MapOfStringToString), requestValidatorId: S.optional(S.String), authorizationScopes: S.optional(ListOfString)}) {}
export class TestInvokeAuthorizerRequest extends S.Class<TestInvokeAuthorizerRequest>("TestInvokeAuthorizerRequest")({restApiId: S.String, authorizerId: S.String, headers: S.optional(MapOfStringToString), multiValueHeaders: S.optional(MapOfStringToList), pathWithQueryString: S.optional(S.String), body: S.optional(S.String), stageVariables: S.optional(MapOfStringToString), additionalContext: S.optional(MapOfStringToString)}) {}
export class TestInvokeMethodResponse extends S.Class<TestInvokeMethodResponse>("TestInvokeMethodResponse")({status: S.optional(S.Number), body: S.optional(S.String), headers: S.optional(MapOfStringToString), multiValueHeaders: S.optional(MapOfStringToList), log: S.optional(S.String), latency: S.optional(S.Number)}) {}
export class UpdateAccountRequest extends S.Class<UpdateAccountRequest>("UpdateAccountRequest")({patchOperations: S.optional(ListOfPatchOperation)}) {}
export const ListOfLong = S.Array(S.Number);
export const ListOfUsage = S.Array(ListOfLong);
export const MapOfKeyUsages = S.Record({key: S.String, value: ListOfUsage});
export class CreateUsagePlanRequest extends S.Class<CreateUsagePlanRequest>("CreateUsagePlanRequest")({name: S.String, description: S.optional(S.String), apiStages: S.optional(ListOfApiStage), throttle: S.optional(ThrottleSettings), quota: S.optional(QuotaSettings), tags: S.optional(MapOfStringToString)}) {}
export class Usage extends S.Class<Usage>("Usage")({usagePlanId: S.optional(S.String), startDate: S.optional(S.String), endDate: S.optional(S.String), items: S.optional(MapOfKeyUsages), position: S.optional(S.String)}) {}
export class TestInvokeAuthorizerResponse extends S.Class<TestInvokeAuthorizerResponse>("TestInvokeAuthorizerResponse")({clientStatus: S.optional(S.Number), log: S.optional(S.String), latency: S.optional(S.Number), principalId: S.optional(S.String), policy: S.optional(S.String), authorization: S.optional(MapOfStringToList), claims: S.optional(MapOfStringToString)}) {}

//# Errors
export class BadRequestException extends S.TaggedError<BadRequestException>()("BadRequestException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {}) {};
export class NotFoundException extends S.TaggedError<NotFoundException>()("NotFoundException", {}) {};
export class TooManyRequestsException extends S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {}) {};
export class UnauthorizedException extends S.TaggedError<UnauthorizedException>()("UnauthorizedException", {}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};

//# Operations
/**
 * Deletes a documentation version.
 */export const deleteDocumentationVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/versions/{documentationVersion}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteDocumentationVersion" }, DeleteDocumentationVersionRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the DomainName resource.
 */export const deleteDomainName = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames/{domainName}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteDomainName" }, DeleteDomainNameRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the DomainNameAccessAssociation resource.
 * 
 * 
 * Only the AWS account that created the DomainNameAccessAssociation resource can delete it. To stop an access association source in another AWS account from accessing your private custom domain name, use the RejectDomainNameAccessAssociation operation.
 */export const deleteDomainNameAccessAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnameaccessassociations/{domainNameAccessAssociationArn}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteDomainNameAccessAssociation" }, DeleteDomainNameAccessAssociationRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.
 */export const deleteGatewayResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/gatewayresponses/{responseType}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteGatewayResponse" }, DeleteGatewayResponseRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents a delete integration.
 */export const deleteIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteIntegration" }, DeleteIntegrationRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents a delete integration response.
 */export const deleteIntegrationResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteIntegrationResponse" }, DeleteIntegrationResponseRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing Method resource.
 */export const deleteMethod = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteMethod" }, DeleteMethodRequest, S.Struct({}), [ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing MethodResponse resource.
 */export const deleteMethodResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteMethodResponse" }, DeleteMethodResponseRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a model.
 */export const deleteModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/models/{modelName}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteModel" }, DeleteModelRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a RequestValidator of a given RestApi.
 */export const deleteRequestValidator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/requestvalidators/{requestValidatorId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteRequestValidator" }, DeleteRequestValidatorRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Resource resource.
 */export const deleteResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteResource" }, DeleteResourceRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the specified API.
 */export const deleteRestApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteRestApi" }, DeleteRestApiRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Stage resource.
 */export const deleteStage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/stages/{stageName}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteStage" }, DeleteStageRequest, S.Struct({}), [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a usage plan of a given plan Id.
 */export const deleteUsagePlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans/{usagePlanId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteUsagePlan" }, DeleteUsagePlanRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a usage plan key and remove the underlying API key from the associated usage plan.
 */export const deleteUsagePlanKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans/{usagePlanId}/keys/{keyId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteUsagePlanKey" }, DeleteUsagePlanKeyRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing VpcLink of a specified identifier.
 */export const deleteVpcLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/vpclinks/{vpcLinkId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteVpcLink" }, DeleteVpcLinkRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Flushes all authorizer cache entries on a stage.
 */export const flushStageAuthorizersCache = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/stages/{stageName}/cache/authorizers", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.FlushStageAuthorizersCache" }, FlushStageAuthorizersCacheRequest, S.Struct({}), [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Flushes a stage's cache.
 */export const flushStageCache = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/stages/{stageName}/cache/data", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.FlushStageCache" }, FlushStageCacheRequest, S.Struct({}), [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the current Account resource.
 */export const getAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/account", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetAccount" }, GetAccountRequest, Account, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe an existing Authorizer resource.
 */export const getAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/authorizers/{authorizerId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetAuthorizer" }, GetAuthorizerRequest, Authorizer, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe a BasePathMapping resource.
 */export const getBasePathMapping = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames/{domainName}/basepathmappings/{basePath}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetBasePathMapping" }, GetBasePathMappingRequest, BasePathMapping, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the current ClientCertificate resource.
 */export const getClientCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/clientcertificates/{clientCertificateId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetClientCertificate" }, GetClientCertificateRequest, ClientCertificate, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a documentation version.
 */export const getDocumentationVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/versions/{documentationVersion}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetDocumentationVersion" }, GetDocumentationVersionRequest, DocumentationVersion, [NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes an existing model defined for a RestApi resource.
 */export const getModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/models/{modelName}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetModel" }, GetModelRequest, Model, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a RequestValidator of a given RestApi.
 */export const getRequestValidator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/requestvalidators/{requestValidatorId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetRequestValidator" }, GetRequestValidatorRequest, RequestValidator, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists information about a resource.
 */export const getResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetResource" }, GetResourceRequest, Resource, [NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the RestApi resource in the collection.
 */export const getRestApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetRestApi" }, GetRestApiRequest, RestApi, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a usage plan key of a given key identifier.
 */export const getUsagePlanKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans/{usagePlanId}/keys/{keyId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetUsagePlanKey" }, GetUsagePlanKeyRequest, UsagePlanKey, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a specified VPC link under the caller's account in a region.
 */export const getVpcLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/vpclinks/{vpcLinkId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetVpcLink" }, GetVpcLinkRequest, VpcLink, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A feature of the API Gateway control service for creating a new API from an external API definition file.
 */export const importRestApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis?mode=import", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.ImportRestApi" }, ImportRestApiRequest, RestApi, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.
 */export const putGatewayResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/gatewayresponses/{responseType}", method: "PUT", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.PutGatewayResponse" }, PutGatewayResponseRequest, GatewayResponse, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents a put integration.
 */export const putIntegrationResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}", method: "PUT", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.PutIntegrationResponse" }, PutIntegrationResponseRequest, IntegrationResponse, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a MethodResponse to an existing Method resource.
 */export const putMethodResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}", method: "PUT", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.PutMethodResponse" }, PutMethodResponseRequest, MethodResponse, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * A feature of the API Gateway control service for updating an existing API with an input of external API definitions.
 * The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.
 */export const putRestApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}", method: "PUT", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.PutRestApi" }, PutRestApiRequest, RestApi, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Rejects a domain name access association with a private custom domain name.
 * 
 * 
 * To reject a domain name access association with an access association source in another AWS account, use this operation. To remove a domain name access association with an access association source in your own account, use the DeleteDomainNameAccessAssociation operation.
 */export const rejectDomainNameAccessAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/rejectdomainnameaccessassociations", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.RejectDomainNameAccessAssociation" }, RejectDomainNameAccessAssociationRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds or updates a tag on a given resource.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/tags/{resourceArn}", method: "PUT", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.TagResource" }, TagResourceRequest, S.Struct({}), [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes a tag from a given resource.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UntagResource" }, UntagResourceRequest, S.Struct({}), [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about an ApiKey resource.
 */export const updateApiKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/apikeys/{apiKey}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateApiKey" }, UpdateApiKeyRequest, ApiKey, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing Authorizer resource.
 */export const updateAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/authorizers/{authorizerId}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateAuthorizer" }, UpdateAuthorizerRequest, Authorizer, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about the BasePathMapping resource.
 */export const updateBasePathMapping = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames/{domainName}/basepathmappings/{basePath}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateBasePathMapping" }, UpdateBasePathMappingRequest, BasePathMapping, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about an ClientCertificate resource.
 */export const updateClientCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/clientcertificates/{clientCertificateId}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateClientCertificate" }, UpdateClientCertificateRequest, ClientCertificate, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a documentation part.
 */export const updateDocumentationPart = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/parts/{documentationPartId}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateDocumentationPart" }, UpdateDocumentationPartRequest, DocumentationPart, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a documentation version.
 */export const updateDocumentationVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/versions/{documentationVersion}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateDocumentationVersion" }, UpdateDocumentationVersionRequest, DocumentationVersion, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about the DomainName resource.
 */export const updateDomainName = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames/{domainName}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateDomainName" }, UpdateDomainNameRequest, DomainName, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a GatewayResponse of a specified response type on the given RestApi.
 */export const updateGatewayResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/gatewayresponses/{responseType}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateGatewayResponse" }, UpdateGatewayResponseRequest, GatewayResponse, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents an update integration.
 */export const updateIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateIntegration" }, UpdateIntegrationRequest, Integration, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents an update integration response.
 */export const updateIntegrationResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateIntegrationResponse" }, UpdateIntegrationResponseRequest, IntegrationResponse, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing Method resource.
 */export const updateMethod = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateMethod" }, UpdateMethodRequest, Method, [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing MethodResponse resource.
 */export const updateMethodResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateMethodResponse" }, UpdateMethodResponseRequest, MethodResponse, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about a model. The maximum size of the model is 400 KB.
 */export const updateModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/models/{modelName}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateModel" }, UpdateModelRequest, Model, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a RequestValidator of a given RestApi.
 */export const updateRequestValidator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/requestvalidators/{requestValidatorId}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateRequestValidator" }, UpdateRequestValidatorRequest, RequestValidator, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about a Resource resource.
 */export const updateResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateResource" }, UpdateResourceRequest, Resource, [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about the specified API.
 */export const updateRestApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateRestApi" }, UpdateRestApiRequest, RestApi, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about a Stage resource.
 */export const updateStage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/stages/{stageName}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateStage" }, UpdateStageRequest, Stage, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.
 */export const updateUsage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans/{usagePlanId}/keys/{keyId}/usage", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateUsage" }, UpdateUsageRequest, Usage, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a usage plan of a given plan Id.
 */export const updateUsagePlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans/{usagePlanId}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateUsagePlan" }, UpdateUsagePlanRequest, UsagePlan, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates an existing VpcLink of a specified identifier.
 */export const updateVpcLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/vpclinks/{vpcLinkId}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateVpcLink" }, UpdateVpcLinkRequest, VpcLink, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Create an ApiKey resource.
 */export const createApiKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/apikeys", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateApiKey" }, CreateApiKeyRequest, ApiKey, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a new Authorizer resource to an existing RestApi resource.
 */export const createAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/authorizers", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateAuthorizer" }, CreateAuthorizerRequest, Authorizer, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new BasePathMapping resource.
 */export const createBasePathMapping = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames/{domainName}/basepathmappings", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateBasePathMapping" }, CreateBasePathMappingRequest, BasePathMapping, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Deployment resource, which makes a specified RestApi callable over the internet.
 */export const createDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/deployments", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateDeployment" }, CreateDeploymentRequest, Deployment, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a documentation part.
 */export const createDocumentationPart = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/parts", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateDocumentationPart" }, CreateDocumentationPartRequest, DocumentationPart, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a documentation version
 */export const createDocumentationVersion = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/versions", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateDocumentationVersion" }, CreateDocumentationVersionRequest, DocumentationVersion, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new domain name.
 */export const createDomainName = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateDomainName" }, CreateDomainNameRequest, DomainName, [BadRequestException, ConflictException, LimitExceededException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a domain name access association resource between an access association source and a private custom
 * domain name.
 */export const createDomainNameAccessAssociation = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnameaccessassociations", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateDomainNameAccessAssociation" }, CreateDomainNameAccessAssociationRequest, DomainNameAccessAssociation, [BadRequestException, ConflictException, LimitExceededException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds a new Model resource to an existing RestApi resource.
 */export const createModel = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/models", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateModel" }, CreateModelRequest, Model, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a RequestValidator of a given RestApi.
 */export const createRequestValidator = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/requestvalidators", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateRequestValidator" }, CreateRequestValidatorRequest, RequestValidator, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new RestApi resource.
 */export const createRestApi = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateRestApi" }, CreateRestApiRequest, RestApi, [BadRequestException, ConflictException, LimitExceededException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new Stage resource that references a pre-existing Deployment for the API.
 */export const createStage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/stages", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateStage" }, CreateStageRequest, Stage, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a usage plan key for adding an existing API key to a usage plan.
 */export const createUsagePlanKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans/{usagePlanId}/keys", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateUsagePlanKey" }, CreateUsagePlanKeyRequest, UsagePlanKey, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
 */export const createVpcLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/vpclinks", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateVpcLink" }, CreateVpcLinkRequest, VpcLink, [BadRequestException, ConflictException, LimitExceededException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the ApiKey resource.
 */export const deleteApiKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/apikeys/{apiKey}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteApiKey" }, DeleteApiKeyRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an existing Authorizer resource.
 */export const deleteAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/authorizers/{authorizerId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteAuthorizer" }, DeleteAuthorizerRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the BasePathMapping resource.
 */export const deleteBasePathMapping = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames/{domainName}/basepathmappings/{basePath}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteBasePathMapping" }, DeleteBasePathMappingRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes the ClientCertificate resource.
 */export const deleteClientCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/clientcertificates/{clientCertificateId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteClientCertificate" }, DeleteClientCertificateRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it.
 */export const deleteDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/deployments/{deploymentId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteDeployment" }, DeleteDeploymentRequest, S.Struct({}), [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a documentation part
 */export const deleteDocumentationPart = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/parts/{documentationPartId}", method: "DELETE", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.DeleteDocumentationPart" }, DeleteDocumentationPartRequest, S.Struct({}), [BadRequestException, ConflictException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates a ClientCertificate resource.
 */export const generateClientCertificate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/clientcertificates", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GenerateClientCertificate" }, GenerateClientCertificateRequest, ClientCertificate, [BadRequestException, ConflictException, LimitExceededException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the current ApiKey resource.
 */export const getApiKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/apikeys/{apiKey}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetApiKey" }, GetApiKeyRequest, ApiKey, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about the current ApiKeys resource.
 */export const getApiKeys = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/apikeys", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetApiKeys" }, GetApiKeysRequest, ApiKeys, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe an existing Authorizers resource.
 */export const getAuthorizers = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/authorizers", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetAuthorizers" }, GetAuthorizersRequest, Authorizers, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents a collection of BasePathMapping resources.
 */export const getBasePathMappings = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames/{domainName}/basepathmappings", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetBasePathMappings" }, GetBasePathMappingsRequest, BasePathMappings, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a collection of ClientCertificate resources.
 */export const getClientCertificates = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/clientcertificates", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetClientCertificates" }, GetClientCertificatesRequest, ClientCertificates, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Deployments collection.
 */export const getDeployments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/deployments", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetDeployments" }, GetDeploymentsRequest, Deployments, [BadRequestException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a documentation part.
 */export const getDocumentationPart = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/parts/{documentationPartId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetDocumentationPart" }, GetDocumentationPartRequest, DocumentationPart, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets documentation parts.
 */export const getDocumentationParts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/parts", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetDocumentationParts" }, GetDocumentationPartsRequest, DocumentationParts, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets documentation versions.
 */export const getDocumentationVersions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/versions", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetDocumentationVersions" }, GetDocumentationVersionsRequest, DocumentationVersions, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents a collection on DomainNameAccessAssociations resources.
 */export const getDomainNameAccessAssociations = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnameaccessassociations", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetDomainNameAccessAssociations" }, GetDomainNameAccessAssociationsRequest, DomainNameAccessAssociations, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents a collection of DomainName resources.
 */export const getDomainNames = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetDomainNames" }, GetDomainNamesRequest, DomainNames, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Exports a deployed version of a RestApi in a specified format.
 */export const getExport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/stages/{stageName}/exports/{exportType}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetExport" }, GetExportRequest, ExportResponse, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a GatewayResponse of a specified response type on the given RestApi.
 */export const getGatewayResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/gatewayresponses/{responseType}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetGatewayResponse" }, GetGatewayResponseRequest, GatewayResponse, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.
 */export const getGatewayResponses = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/gatewayresponses", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetGatewayResponses" }, GetGatewayResponsesRequest, GatewayResponses, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents a get integration response.
 */export const getIntegrationResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetIntegrationResponse" }, GetIntegrationResponseRequest, IntegrationResponse, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes a MethodResponse resource.
 */export const getMethodResponse = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetMethodResponse" }, GetMethodResponseRequest, MethodResponse, [NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describes existing Models defined for a RestApi resource.
 */export const getModels = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/models", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetModels" }, GetModelsRequest, Models, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates a sample mapping template that can be used to transform a payload into the structure of a model.
 */export const getModelTemplate = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/models/{modelName}/default_template", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetModelTemplate" }, GetModelTemplateRequest, Template, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the RequestValidators collection of a given RestApi.
 */export const getRequestValidators = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/requestvalidators", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetRequestValidators" }, GetRequestValidatorsRequest, RequestValidators, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists information about a collection of Resource resources.
 */export const getResources = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetResources" }, GetResourcesRequest, Resources, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the RestApis resources for your collection.
 */export const getRestApis = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetRestApis" }, GetRestApisRequest, RestApis, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Generates a client SDK for a RestApi and Stage.
 */export const getSdk = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/stages/{stageName}/sdks/{sdkType}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetSdk" }, GetSdkRequest, SdkResponse, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets SDK types
 */export const getSdkTypes = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/sdktypes", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetSdkTypes" }, GetSdkTypesRequest, SdkTypes, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about one or more Stage resources.
 */export const getStages = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/stages", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetStages" }, GetStagesRequest, Stages, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the Tags collection for a given resource.
 */export const getTags = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/tags/{resourceArn}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetTags" }, GetTagsRequest, Tags, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a usage plan of a given plan identifier.
 */export const getUsagePlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans/{usagePlanId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetUsagePlan" }, GetUsagePlanRequest, UsagePlan, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets all the usage plan keys representing the API keys added to a specified usage plan.
 */export const getUsagePlanKeys = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans/{usagePlanId}/keys", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetUsagePlanKeys" }, GetUsagePlanKeysRequest, UsagePlanKeys, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets all the usage plans of the caller's account.
 */export const getUsagePlans = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetUsagePlans" }, GetUsagePlansRequest, UsagePlans, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the VpcLinks collection under the caller's account in a selected region.
 */export const getVpcLinks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/vpclinks", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetVpcLinks" }, GetVpcLinksRequest, VpcLinks, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Import API keys from an external source, such as a CSV-formatted file.
 */export const importApiKeys = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/apikeys?mode=import", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.ImportApiKeys" }, ImportApiKeysRequest, ApiKeyIds, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Imports documentation parts
 */export const importDocumentationParts = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/documentation/parts", method: "PUT", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.ImportDocumentationParts" }, ImportDocumentationPartsRequest, DocumentationPartIds, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Sets up a method's integration.
 */export const putIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration", method: "PUT", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.PutIntegration" }, PutIntegrationRequest, Integration, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Add a method to an existing Resource resource.
 */export const putMethod = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", method: "PUT", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.PutMethod" }, PutMethodRequest, Method, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body.
 */export const testInvokeMethod = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.TestInvokeMethod" }, TestInvokeMethodRequest, TestInvokeMethodResponse, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about the current Account resource.
 */export const updateAccount = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/account", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateAccount" }, UpdateAccountRequest, Account, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Changes information about a Deployment resource.
 */export const updateDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/deployments/{deploymentId}", method: "PATCH", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.UpdateDeployment" }, UpdateDeploymentRequest, Deployment, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Resource resource.
 */export const createResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{parentId}", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateResource" }, CreateResourceRequest, Resource, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload.
 */export const createUsagePlan = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.CreateUsagePlan" }, CreateUsagePlanRequest, UsagePlan, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Represents a domain name that is contained in a simpler, more intuitive URL that can be called.
 */export const getDomainName = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/domainnames/{domainName}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetDomainName" }, GetDomainNameRequest, DomainName, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Get the integration settings.
 */export const getIntegration = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetIntegration" }, GetIntegrationRequest, Integration, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Describe an existing Method resource.
 */export const getMethod = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetMethod" }, GetMethodRequest, Method, [NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets an SDK type.
 */export const getSdkType = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/sdktypes/{id}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetSdkType" }, GetSdkTypeRequest, SdkType, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets the usage data of a usage plan in a specified time interval.
 */export const getUsage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/usageplans/{usagePlanId}/usage", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetUsage" }, GetUsageRequest, Usage, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.
 */export const testInvokeAuthorizer = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/authorizers/{authorizerId}", method: "POST", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.TestInvokeAuthorizer" }, TestInvokeAuthorizerRequest, TestInvokeAuthorizerResponse, [BadRequestException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Stage resource.
 */export const getStage = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/stages/{stageName}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetStage" }, GetStageRequest, Stage, [BadRequestException, ConflictException, LimitExceededException, NotFoundException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Deployment resource.
 */export const getDeployment = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2015-07-09", uri: "/restapis/{restApiId}/deployments/{deploymentId}", method: "GET", sdkId: "API Gateway", sigV4ServiceName: "apigateway", name: "BackplaneControlService.GetDeployment" }, GetDeploymentRequest, Deployment, [BadRequestException, NotFoundException, ServiceUnavailableException, TooManyRequestsException, UnauthorizedException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
