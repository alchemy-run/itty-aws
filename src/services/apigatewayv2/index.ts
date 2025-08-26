import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ApiGatewayV2 as _ApiGatewayV2 } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "ApiGatewayV2",
  version: "2018-11-29",
  protocol: "restJson1",
  sigV4ServiceName: "apigateway",
  endpointPrefix: "apigateway",
  operations: {
    CreateApi: "POST /v2/apis",
    CreateApiMapping: "POST /v2/domainnames/{DomainName}/apimappings",
    CreateAuthorizer: "POST /v2/apis/{ApiId}/authorizers",
    CreateDeployment: "POST /v2/apis/{ApiId}/deployments",
    CreateDomainName: "POST /v2/domainnames",
    CreateIntegration: "POST /v2/apis/{ApiId}/integrations",
    CreateIntegrationResponse:
      "POST /v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses",
    CreateModel: "POST /v2/apis/{ApiId}/models",
    CreateRoute: "POST /v2/apis/{ApiId}/routes",
    CreateRouteResponse:
      "POST /v2/apis/{ApiId}/routes/{RouteId}/routeresponses",
    CreateRoutingRule: "POST /v2/domainnames/{DomainName}/routingrules",
    CreateStage: "POST /v2/apis/{ApiId}/stages",
    CreateVpcLink: "POST /v2/vpclinks",
    DeleteAccessLogSettings:
      "DELETE /v2/apis/{ApiId}/stages/{StageName}/accesslogsettings",
    DeleteApi: "DELETE /v2/apis/{ApiId}",
    DeleteApiMapping:
      "DELETE /v2/domainnames/{DomainName}/apimappings/{ApiMappingId}",
    DeleteAuthorizer: "DELETE /v2/apis/{ApiId}/authorizers/{AuthorizerId}",
    DeleteCorsConfiguration: "DELETE /v2/apis/{ApiId}/cors",
    DeleteDeployment: "DELETE /v2/apis/{ApiId}/deployments/{DeploymentId}",
    DeleteDomainName: "DELETE /v2/domainnames/{DomainName}",
    DeleteIntegration: "DELETE /v2/apis/{ApiId}/integrations/{IntegrationId}",
    DeleteIntegrationResponse:
      "DELETE /v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}",
    DeleteModel: "DELETE /v2/apis/{ApiId}/models/{ModelId}",
    DeleteRoute: "DELETE /v2/apis/{ApiId}/routes/{RouteId}",
    DeleteRouteRequestParameter:
      "DELETE /v2/apis/{ApiId}/routes/{RouteId}/requestparameters/{RequestParameterKey}",
    DeleteRouteResponse:
      "DELETE /v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}",
    DeleteRouteSettings:
      "DELETE /v2/apis/{ApiId}/stages/{StageName}/routesettings/{RouteKey}",
    DeleteRoutingRule:
      "DELETE /v2/domainnames/{DomainName}/routingrules/{RoutingRuleId}",
    DeleteStage: "DELETE /v2/apis/{ApiId}/stages/{StageName}",
    DeleteVpcLink: "DELETE /v2/vpclinks/{VpcLinkId}",
    ExportApi: {
      http: "GET /v2/apis/{ApiId}/exports/{Specification}",
      traits: {
        body: "httpPayload",
      },
    },
    GetApi: "GET /v2/apis/{ApiId}",
    GetApiMapping:
      "GET /v2/domainnames/{DomainName}/apimappings/{ApiMappingId}",
    GetApiMappings: "GET /v2/domainnames/{DomainName}/apimappings",
    GetApis: "GET /v2/apis",
    GetAuthorizer: "GET /v2/apis/{ApiId}/authorizers/{AuthorizerId}",
    GetAuthorizers: "GET /v2/apis/{ApiId}/authorizers",
    GetDeployment: "GET /v2/apis/{ApiId}/deployments/{DeploymentId}",
    GetDeployments: "GET /v2/apis/{ApiId}/deployments",
    GetDomainName: "GET /v2/domainnames/{DomainName}",
    GetDomainNames: "GET /v2/domainnames",
    GetIntegration: "GET /v2/apis/{ApiId}/integrations/{IntegrationId}",
    GetIntegrationResponse:
      "GET /v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}",
    GetIntegrationResponses:
      "GET /v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses",
    GetIntegrations: "GET /v2/apis/{ApiId}/integrations",
    GetModel: "GET /v2/apis/{ApiId}/models/{ModelId}",
    GetModels: "GET /v2/apis/{ApiId}/models",
    GetModelTemplate: "GET /v2/apis/{ApiId}/models/{ModelId}/template",
    GetRoute: "GET /v2/apis/{ApiId}/routes/{RouteId}",
    GetRouteResponse:
      "GET /v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}",
    GetRouteResponses: "GET /v2/apis/{ApiId}/routes/{RouteId}/routeresponses",
    GetRoutes: "GET /v2/apis/{ApiId}/routes",
    GetRoutingRule:
      "GET /v2/domainnames/{DomainName}/routingrules/{RoutingRuleId}",
    GetStage: "GET /v2/apis/{ApiId}/stages/{StageName}",
    GetStages: "GET /v2/apis/{ApiId}/stages",
    GetTags: "GET /v2/tags/{ResourceArn}",
    GetVpcLink: "GET /v2/vpclinks/{VpcLinkId}",
    GetVpcLinks: "GET /v2/vpclinks",
    ImportApi: "PUT /v2/apis",
    ListRoutingRules: "GET /v2/domainnames/{DomainName}/routingrules",
    PutRoutingRule:
      "PUT /v2/domainnames/{DomainName}/routingrules/{RoutingRuleId}",
    ReimportApi: "PUT /v2/apis/{ApiId}",
    ResetAuthorizersCache:
      "DELETE /v2/apis/{ApiId}/stages/{StageName}/cache/authorizers",
    TagResource: "POST /v2/tags/{ResourceArn}",
    UntagResource: "DELETE /v2/tags/{ResourceArn}",
    UpdateApi: "PATCH /v2/apis/{ApiId}",
    UpdateApiMapping:
      "PATCH /v2/domainnames/{DomainName}/apimappings/{ApiMappingId}",
    UpdateAuthorizer: "PATCH /v2/apis/{ApiId}/authorizers/{AuthorizerId}",
    UpdateDeployment: "PATCH /v2/apis/{ApiId}/deployments/{DeploymentId}",
    UpdateDomainName: "PATCH /v2/domainnames/{DomainName}",
    UpdateIntegration: "PATCH /v2/apis/{ApiId}/integrations/{IntegrationId}",
    UpdateIntegrationResponse:
      "PATCH /v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}",
    UpdateModel: "PATCH /v2/apis/{ApiId}/models/{ModelId}",
    UpdateRoute: "PATCH /v2/apis/{ApiId}/routes/{RouteId}",
    UpdateRouteResponse:
      "PATCH /v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}",
    UpdateStage: "PATCH /v2/apis/{ApiId}/stages/{StageName}",
    UpdateVpcLink: "PATCH /v2/vpclinks/{VpcLinkId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ApiGatewayV2 = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ApiGatewayV2;
