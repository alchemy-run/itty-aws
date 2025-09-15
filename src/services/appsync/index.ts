import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AppSync as _AppSyncClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "AppSync",
  version: "2017-07-25",
  protocol: "restJson1",
  sigV4ServiceName: "appsync",
  endpointPrefix: "appsync",
  operations: {
    AssociateApi: "POST /v1/domainnames/{domainName}/apiassociation",
    AssociateMergedGraphqlApi:
      "POST /v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations",
    AssociateSourceGraphqlApi:
      "POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations",
    CreateApi: "POST /v2/apis",
    CreateApiCache: "POST /v1/apis/{apiId}/ApiCaches",
    CreateApiKey: "POST /v1/apis/{apiId}/apikeys",
    CreateChannelNamespace: "POST /v2/apis/{apiId}/channelNamespaces",
    CreateDataSource: "POST /v1/apis/{apiId}/datasources",
    CreateDomainName: "POST /v1/domainnames",
    CreateFunction: "POST /v1/apis/{apiId}/functions",
    CreateGraphqlApi: "POST /v1/apis",
    CreateResolver: "POST /v1/apis/{apiId}/types/{typeName}/resolvers",
    CreateType: "POST /v1/apis/{apiId}/types",
    DeleteApi: "DELETE /v2/apis/{apiId}",
    DeleteApiCache: "DELETE /v1/apis/{apiId}/ApiCaches",
    DeleteApiKey: "DELETE /v1/apis/{apiId}/apikeys/{id}",
    DeleteChannelNamespace: "DELETE /v2/apis/{apiId}/channelNamespaces/{name}",
    DeleteDataSource: "DELETE /v1/apis/{apiId}/datasources/{name}",
    DeleteDomainName: "DELETE /v1/domainnames/{domainName}",
    DeleteFunction: "DELETE /v1/apis/{apiId}/functions/{functionId}",
    DeleteGraphqlApi: "DELETE /v1/apis/{apiId}",
    DeleteResolver:
      "DELETE /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}",
    DeleteType: "DELETE /v1/apis/{apiId}/types/{typeName}",
    DisassociateApi: "DELETE /v1/domainnames/{domainName}/apiassociation",
    DisassociateMergedGraphqlApi:
      "DELETE /v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}",
    DisassociateSourceGraphqlApi:
      "DELETE /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}",
    EvaluateCode: "POST /v1/dataplane-evaluatecode",
    EvaluateMappingTemplate: "POST /v1/dataplane-evaluatetemplate",
    FlushApiCache: "DELETE /v1/apis/{apiId}/FlushCache",
    GetApi: "GET /v2/apis/{apiId}",
    GetApiAssociation: "GET /v1/domainnames/{domainName}/apiassociation",
    GetApiCache: "GET /v1/apis/{apiId}/ApiCaches",
    GetChannelNamespace: "GET /v2/apis/{apiId}/channelNamespaces/{name}",
    GetDataSource: "GET /v1/apis/{apiId}/datasources/{name}",
    GetDataSourceIntrospection:
      "GET /v1/datasources/introspections/{introspectionId}",
    GetDomainName: "GET /v1/domainnames/{domainName}",
    GetFunction: "GET /v1/apis/{apiId}/functions/{functionId}",
    GetGraphqlApi: "GET /v1/apis/{apiId}",
    GetGraphqlApiEnvironmentVariables:
      "GET /v1/apis/{apiId}/environmentVariables",
    GetIntrospectionSchema: {
      http: "GET /v1/apis/{apiId}/schema",
      traits: {
        schema: "httpPayload",
      },
    },
    GetResolver: "GET /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}",
    GetSchemaCreationStatus: "GET /v1/apis/{apiId}/schemacreation",
    GetSourceApiAssociation:
      "GET /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}",
    GetType: "GET /v1/apis/{apiId}/types/{typeName}",
    ListApiKeys: "GET /v1/apis/{apiId}/apikeys",
    ListApis: "GET /v2/apis",
    ListChannelNamespaces: "GET /v2/apis/{apiId}/channelNamespaces",
    ListDataSources: "GET /v1/apis/{apiId}/datasources",
    ListDomainNames: "GET /v1/domainnames",
    ListFunctions: "GET /v1/apis/{apiId}/functions",
    ListGraphqlApis: "GET /v1/apis",
    ListResolvers: "GET /v1/apis/{apiId}/types/{typeName}/resolvers",
    ListResolversByFunction:
      "GET /v1/apis/{apiId}/functions/{functionId}/resolvers",
    ListSourceApiAssociations: "GET /v1/apis/{apiId}/sourceApiAssociations",
    ListTagsForResource: "GET /v1/tags/{resourceArn}",
    ListTypes: "GET /v1/apis/{apiId}/types",
    ListTypesByAssociation:
      "GET /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types",
    PutGraphqlApiEnvironmentVariables:
      "PUT /v1/apis/{apiId}/environmentVariables",
    StartDataSourceIntrospection: "POST /v1/datasources/introspections",
    StartSchemaCreation: "POST /v1/apis/{apiId}/schemacreation",
    StartSchemaMerge:
      "POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge",
    TagResource: "POST /v1/tags/{resourceArn}",
    UntagResource: "DELETE /v1/tags/{resourceArn}",
    UpdateApi: "POST /v2/apis/{apiId}",
    UpdateApiCache: "POST /v1/apis/{apiId}/ApiCaches/update",
    UpdateApiKey: "POST /v1/apis/{apiId}/apikeys/{id}",
    UpdateChannelNamespace: "POST /v2/apis/{apiId}/channelNamespaces/{name}",
    UpdateDataSource: "POST /v1/apis/{apiId}/datasources/{name}",
    UpdateDomainName: "POST /v1/domainnames/{domainName}",
    UpdateFunction: "POST /v1/apis/{apiId}/functions/{functionId}",
    UpdateGraphqlApi: "POST /v1/apis/{apiId}",
    UpdateResolver:
      "POST /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}",
    UpdateSourceApiAssociation:
      "POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}",
    UpdateType: "POST /v1/apis/{apiId}/types/{typeName}",
  },
} as const satisfies ServiceMetadata;

export type _AppSync = _AppSyncClient;
export interface AppSync extends _AppSync {}
export const AppSync = class extends AWSServiceClient {
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
} as unknown as typeof _AppSyncClient;
