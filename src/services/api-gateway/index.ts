import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { APIGateway as _APIGatewayClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "API Gateway",
  version: "2015-07-09",
  protocol: "restJson1",
  sigV4ServiceName: "apigateway",
  endpointPrefix: "apigateway",
  operations: {
    CreateApiKey: "POST /apikeys",
    CreateAuthorizer: "POST /restapis/{restApiId}/authorizers",
    CreateBasePathMapping: "POST /domainnames/{domainName}/basepathmappings",
    CreateDeployment: "POST /restapis/{restApiId}/deployments",
    CreateDocumentationPart: "POST /restapis/{restApiId}/documentation/parts",
    CreateDocumentationVersion:
      "POST /restapis/{restApiId}/documentation/versions",
    CreateDomainName: "POST /domainnames",
    CreateDomainNameAccessAssociation: "POST /domainnameaccessassociations",
    CreateModel: "POST /restapis/{restApiId}/models",
    CreateRequestValidator: "POST /restapis/{restApiId}/requestvalidators",
    CreateResource: "POST /restapis/{restApiId}/resources/{parentId}",
    CreateRestApi: "POST /restapis",
    CreateStage: "POST /restapis/{restApiId}/stages",
    CreateUsagePlan: "POST /usageplans",
    CreateUsagePlanKey: "POST /usageplans/{usagePlanId}/keys",
    CreateVpcLink: "POST /vpclinks",
    DeleteApiKey: "DELETE /apikeys/{apiKey}",
    DeleteAuthorizer: "DELETE /restapis/{restApiId}/authorizers/{authorizerId}",
    DeleteBasePathMapping:
      "DELETE /domainnames/{domainName}/basepathmappings/{basePath}",
    DeleteClientCertificate: "DELETE /clientcertificates/{clientCertificateId}",
    DeleteDeployment: "DELETE /restapis/{restApiId}/deployments/{deploymentId}",
    DeleteDocumentationPart:
      "DELETE /restapis/{restApiId}/documentation/parts/{documentationPartId}",
    DeleteDocumentationVersion:
      "DELETE /restapis/{restApiId}/documentation/versions/{documentationVersion}",
    DeleteDomainName: "DELETE /domainnames/{domainName}",
    DeleteDomainNameAccessAssociation:
      "DELETE /domainnameaccessassociations/{domainNameAccessAssociationArn}",
    DeleteGatewayResponse:
      "DELETE /restapis/{restApiId}/gatewayresponses/{responseType}",
    DeleteIntegration:
      "DELETE /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration",
    DeleteIntegrationResponse:
      "DELETE /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}",
    DeleteMethod:
      "DELETE /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}",
    DeleteMethodResponse:
      "DELETE /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}",
    DeleteModel: "DELETE /restapis/{restApiId}/models/{modelName}",
    DeleteRequestValidator:
      "DELETE /restapis/{restApiId}/requestvalidators/{requestValidatorId}",
    DeleteResource: "DELETE /restapis/{restApiId}/resources/{resourceId}",
    DeleteRestApi: "DELETE /restapis/{restApiId}",
    DeleteStage: "DELETE /restapis/{restApiId}/stages/{stageName}",
    DeleteUsagePlan: "DELETE /usageplans/{usagePlanId}",
    DeleteUsagePlanKey: "DELETE /usageplans/{usagePlanId}/keys/{keyId}",
    DeleteVpcLink: "DELETE /vpclinks/{vpcLinkId}",
    FlushStageAuthorizersCache:
      "DELETE /restapis/{restApiId}/stages/{stageName}/cache/authorizers",
    FlushStageCache:
      "DELETE /restapis/{restApiId}/stages/{stageName}/cache/data",
    GenerateClientCertificate: "POST /clientcertificates",
    GetAccount: "GET /account",
    GetApiKey: "GET /apikeys/{apiKey}",
    GetApiKeys: "GET /apikeys",
    GetAuthorizer: "GET /restapis/{restApiId}/authorizers/{authorizerId}",
    GetAuthorizers: "GET /restapis/{restApiId}/authorizers",
    GetBasePathMapping:
      "GET /domainnames/{domainName}/basepathmappings/{basePath}",
    GetBasePathMappings: "GET /domainnames/{domainName}/basepathmappings",
    GetClientCertificate: "GET /clientcertificates/{clientCertificateId}",
    GetClientCertificates: "GET /clientcertificates",
    GetDeployment: "GET /restapis/{restApiId}/deployments/{deploymentId}",
    GetDeployments: "GET /restapis/{restApiId}/deployments",
    GetDocumentationPart:
      "GET /restapis/{restApiId}/documentation/parts/{documentationPartId}",
    GetDocumentationParts: "GET /restapis/{restApiId}/documentation/parts",
    GetDocumentationVersion:
      "GET /restapis/{restApiId}/documentation/versions/{documentationVersion}",
    GetDocumentationVersions:
      "GET /restapis/{restApiId}/documentation/versions",
    GetDomainName: "GET /domainnames/{domainName}",
    GetDomainNameAccessAssociations: "GET /domainnameaccessassociations",
    GetDomainNames: "GET /domainnames",
    GetExport: {
      http: "GET /restapis/{restApiId}/stages/{stageName}/exports/{exportType}",
      traits: {
        contentType: "Content-Type",
        contentDisposition: "Content-Disposition",
        body: "httpPayload",
      },
    },
    GetGatewayResponse:
      "GET /restapis/{restApiId}/gatewayresponses/{responseType}",
    GetGatewayResponses: "GET /restapis/{restApiId}/gatewayresponses",
    GetIntegration:
      "GET /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration",
    GetIntegrationResponse:
      "GET /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}",
    GetMethod:
      "GET /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}",
    GetMethodResponse:
      "GET /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}",
    GetModel: "GET /restapis/{restApiId}/models/{modelName}",
    GetModels: "GET /restapis/{restApiId}/models",
    GetModelTemplate:
      "GET /restapis/{restApiId}/models/{modelName}/default_template",
    GetRequestValidator:
      "GET /restapis/{restApiId}/requestvalidators/{requestValidatorId}",
    GetRequestValidators: "GET /restapis/{restApiId}/requestvalidators",
    GetResource: "GET /restapis/{restApiId}/resources/{resourceId}",
    GetResources: "GET /restapis/{restApiId}/resources",
    GetRestApi: "GET /restapis/{restApiId}",
    GetRestApis: "GET /restapis",
    GetSdk: {
      http: "GET /restapis/{restApiId}/stages/{stageName}/sdks/{sdkType}",
      traits: {
        contentType: "Content-Type",
        contentDisposition: "Content-Disposition",
        body: "httpPayload",
      },
    },
    GetSdkType: "GET /sdktypes/{id}",
    GetSdkTypes: "GET /sdktypes",
    GetStage: "GET /restapis/{restApiId}/stages/{stageName}",
    GetStages: "GET /restapis/{restApiId}/stages",
    GetTags: "GET /tags/{resourceArn}",
    GetUsage: "GET /usageplans/{usagePlanId}/usage",
    GetUsagePlan: "GET /usageplans/{usagePlanId}",
    GetUsagePlanKey: "GET /usageplans/{usagePlanId}/keys/{keyId}",
    GetUsagePlanKeys: "GET /usageplans/{usagePlanId}/keys",
    GetUsagePlans: "GET /usageplans",
    GetVpcLink: "GET /vpclinks/{vpcLinkId}",
    GetVpcLinks: "GET /vpclinks",
    ImportApiKeys: "POST /apikeys?mode=import",
    ImportDocumentationParts: "PUT /restapis/{restApiId}/documentation/parts",
    ImportRestApi: "POST /restapis?mode=import",
    PutGatewayResponse:
      "PUT /restapis/{restApiId}/gatewayresponses/{responseType}",
    PutIntegration:
      "PUT /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration",
    PutIntegrationResponse:
      "PUT /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}",
    PutMethod:
      "PUT /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}",
    PutMethodResponse:
      "PUT /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}",
    PutRestApi: "PUT /restapis/{restApiId}",
    RejectDomainNameAccessAssociation:
      "POST /rejectdomainnameaccessassociations",
    TagResource: "PUT /tags/{resourceArn}",
    TestInvokeAuthorizer:
      "POST /restapis/{restApiId}/authorizers/{authorizerId}",
    TestInvokeMethod:
      "POST /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateAccount: "PATCH /account",
    UpdateApiKey: "PATCH /apikeys/{apiKey}",
    UpdateAuthorizer: "PATCH /restapis/{restApiId}/authorizers/{authorizerId}",
    UpdateBasePathMapping:
      "PATCH /domainnames/{domainName}/basepathmappings/{basePath}",
    UpdateClientCertificate: "PATCH /clientcertificates/{clientCertificateId}",
    UpdateDeployment: "PATCH /restapis/{restApiId}/deployments/{deploymentId}",
    UpdateDocumentationPart:
      "PATCH /restapis/{restApiId}/documentation/parts/{documentationPartId}",
    UpdateDocumentationVersion:
      "PATCH /restapis/{restApiId}/documentation/versions/{documentationVersion}",
    UpdateDomainName: "PATCH /domainnames/{domainName}",
    UpdateGatewayResponse:
      "PATCH /restapis/{restApiId}/gatewayresponses/{responseType}",
    UpdateIntegration:
      "PATCH /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration",
    UpdateIntegrationResponse:
      "PATCH /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}",
    UpdateMethod:
      "PATCH /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}",
    UpdateMethodResponse:
      "PATCH /restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}",
    UpdateModel: "PATCH /restapis/{restApiId}/models/{modelName}",
    UpdateRequestValidator:
      "PATCH /restapis/{restApiId}/requestvalidators/{requestValidatorId}",
    UpdateResource: "PATCH /restapis/{restApiId}/resources/{resourceId}",
    UpdateRestApi: "PATCH /restapis/{restApiId}",
    UpdateStage: "PATCH /restapis/{restApiId}/stages/{stageName}",
    UpdateUsage: "PATCH /usageplans/{usagePlanId}/keys/{keyId}/usage",
    UpdateUsagePlan: "PATCH /usageplans/{usagePlanId}",
    UpdateVpcLink: "PATCH /vpclinks/{vpcLinkId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const APIGateway = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _APIGatewayClient;
