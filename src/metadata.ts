// Auto-generated service metadata
export const serviceMetadata = {
  accessanalyzer: {
    sdkId: "AccessAnalyzer",
    version: "2019-11-01",
    arnNamespace: "access-analyzer",
    cloudTrailEventSource: "access-analyzer.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ApplyArchiveRule: "PUT /archive-rule",
      CancelPolicyGeneration: "PUT /policy/generation/{jobId}",
      CheckAccessNotGranted: "POST /policy/check-access-not-granted",
      CheckNoNewAccess: "POST /policy/check-no-new-access",
      CheckNoPublicAccess: "POST /policy/check-no-public-access",
      CreateAccessPreview: "PUT /access-preview",
      GenerateFindingRecommendation: "POST /recommendation/{id}",
      GetAccessPreview: "GET /access-preview/{accessPreviewId}",
      GetAnalyzedResource: "GET /analyzed-resource",
      GetFinding: "GET /finding/{id}",
      GetFindingRecommendation: "GET /recommendation/{id}",
      GetFindingsStatistics: "POST /analyzer/findings/statistics",
      GetFindingV2: "GET /findingv2/{id}",
      GetGeneratedPolicy: "GET /policy/generation/{jobId}",
      ListAccessPreviewFindings: "POST /access-preview/{accessPreviewId}",
      ListAccessPreviews: "GET /access-preview",
      ListAnalyzedResources: "POST /analyzed-resource",
      ListFindings: "POST /finding",
      ListFindingsV2: "POST /findingv2",
      ListPolicyGenerations: "GET /policy/generation",
      ListTagsForResource: "GET /tags/{resourceArn}",
      StartPolicyGeneration: "PUT /policy/generation",
      StartResourceScan: "POST /resource/scan",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateFindings: "PUT /finding",
      ValidatePolicy: "POST /policy/validation",
      CreateAnalyzer: "PUT /analyzer",
      CreateArchiveRule: "PUT /analyzer/{analyzerName}/archive-rule",
      DeleteAnalyzer: "DELETE /analyzer/{analyzerName}",
      DeleteArchiveRule:
        "DELETE /analyzer/{analyzerName}/archive-rule/{ruleName}",
      GetAnalyzer: "GET /analyzer/{analyzerName}",
      GetArchiveRule: "GET /analyzer/{analyzerName}/archive-rule/{ruleName}",
      ListAnalyzers: "GET /analyzer",
      ListArchiveRules: "GET /analyzer/{analyzerName}/archive-rule",
      UpdateAnalyzer: "PUT /analyzer/{analyzerName}",
      UpdateArchiveRule: "PUT /analyzer/{analyzerName}/archive-rule/{ruleName}",
    },
  },
  account: {
    sdkId: "Account",
    version: "2021-02-01",
    arnNamespace: "account",
    cloudTrailEventSource: "CLOUDTRAIL_EVENT_SOURCE",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptPrimaryEmailUpdate: "POST /acceptPrimaryEmailUpdate",
      DeleteAlternateContact: "POST /deleteAlternateContact",
      DisableRegion: "POST /disableRegion",
      EnableRegion: "POST /enableRegion",
      GetAccountInformation: "POST /getAccountInformation",
      GetAlternateContact: "POST /getAlternateContact",
      GetContactInformation: "POST /getContactInformation",
      GetPrimaryEmail: "POST /getPrimaryEmail",
      GetRegionOptStatus: "POST /getRegionOptStatus",
      ListRegions: "POST /listRegions",
      PutAccountName: "POST /putAccountName",
      PutAlternateContact: "POST /putAlternateContact",
      PutContactInformation: "POST /putContactInformation",
      StartPrimaryEmailUpdate: "POST /startPrimaryEmailUpdate",
    },
  },
  acm: {
    sdkId: "ACM",
    version: "2015-12-08",
    arnNamespace: "acm",
    cloudTrailEventSource: "acm.amazonaws.com",
    endpointPrefix: "acm",
    protocol: "awsJson1_1",
    targetPrefix: "CertificateManager",
  },
  acmpca: {
    sdkId: "ACM PCA",
    version: "2017-08-22",
    arnNamespace: "acm-pca",
    cloudTrailEventSource: "acm-pca.amazonaws.com",
    endpointPrefix: "acm-pca",
    protocol: "awsJson1_1",
    targetPrefix: "ACMPrivateCA",
  },
  aiops: {
    sdkId: "AIOps",
    version: "2018-05-10",
    arnNamespace: "aiops",
    cloudTrailEventSource: "aiops.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateInvestigationGroup: "POST /investigationGroups",
      DeleteInvestigationGroup: "DELETE /investigationGroups/{identifier}",
      DeleteInvestigationGroupPolicy:
        "DELETE /investigationGroups/{identifier}/policy",
      GetInvestigationGroup: "GET /investigationGroups/{identifier}",
      GetInvestigationGroupPolicy:
        "GET /investigationGroups/{identifier}/policy",
      ListInvestigationGroups: "GET /investigationGroups",
      PutInvestigationGroupPolicy:
        "POST /investigationGroups/{identifier}/policy",
      UpdateInvestigationGroup: "PATCH /investigationGroups/{identifier}",
    },
  },
  amp: {
    sdkId: "amp",
    version: "2020-08-01",
    arnNamespace: "aps",
    cloudTrailEventSource: "CLOUDTRAIL_PLACEHOLDER_REPLACED_BY_CDK",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetDefaultScraperConfiguration: "GET /scraperconfiguration",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateAlertManagerDefinition:
        "POST /workspaces/{workspaceId}/alertmanager/definition",
      CreateLoggingConfiguration: "POST /workspaces/{workspaceId}/logging",
      CreateQueryLoggingConfiguration:
        "POST /workspaces/{workspaceId}/logging/query",
      CreateRuleGroupsNamespace:
        "POST /workspaces/{workspaceId}/rulegroupsnamespaces",
      CreateScraper: "POST /scrapers",
      CreateWorkspace: "POST /workspaces",
      DeleteAlertManagerDefinition:
        "DELETE /workspaces/{workspaceId}/alertmanager/definition",
      DeleteLoggingConfiguration: "DELETE /workspaces/{workspaceId}/logging",
      DeleteQueryLoggingConfiguration:
        "DELETE /workspaces/{workspaceId}/logging/query",
      DeleteRuleGroupsNamespace:
        "DELETE /workspaces/{workspaceId}/rulegroupsnamespaces/{name}",
      DeleteScraper: "DELETE /scrapers/{scraperId}",
      DeleteWorkspace: "DELETE /workspaces/{workspaceId}",
      DescribeAlertManagerDefinition:
        "GET /workspaces/{workspaceId}/alertmanager/definition",
      DescribeLoggingConfiguration: "GET /workspaces/{workspaceId}/logging",
      DescribeQueryLoggingConfiguration:
        "GET /workspaces/{workspaceId}/logging/query",
      DescribeRuleGroupsNamespace:
        "GET /workspaces/{workspaceId}/rulegroupsnamespaces/{name}",
      DescribeScraper: "GET /scrapers/{scraperId}",
      DescribeWorkspace: "GET /workspaces/{workspaceId}",
      DescribeWorkspaceConfiguration:
        "GET /workspaces/{workspaceId}/configuration",
      ListRuleGroupsNamespaces:
        "GET /workspaces/{workspaceId}/rulegroupsnamespaces",
      ListScrapers: "GET /scrapers",
      ListWorkspaces: "GET /workspaces",
      PutAlertManagerDefinition:
        "PUT /workspaces/{workspaceId}/alertmanager/definition",
      PutRuleGroupsNamespace:
        "PUT /workspaces/{workspaceId}/rulegroupsnamespaces/{name}",
      UpdateLoggingConfiguration: "PUT /workspaces/{workspaceId}/logging",
      UpdateQueryLoggingConfiguration:
        "PUT /workspaces/{workspaceId}/logging/query",
      UpdateScraper: "PUT /scrapers/{scraperId}",
      UpdateWorkspaceAlias: "POST /workspaces/{workspaceId}/alias",
      UpdateWorkspaceConfiguration:
        "PATCH /workspaces/{workspaceId}/configuration",
    },
  },
  amplify: {
    sdkId: "Amplify",
    version: "2017-07-25",
    arnNamespace: "amplify",
    cloudTrailEventSource: "amplify.amazonaws.com",
    endpointPrefix: "amplify",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateApp: "POST /apps",
      CreateBackendEnvironment: "POST /apps/{appId}/backendenvironments",
      CreateBranch: "POST /apps/{appId}/branches",
      CreateDeployment: "POST /apps/{appId}/branches/{branchName}/deployments",
      CreateDomainAssociation: "POST /apps/{appId}/domains",
      CreateWebhook: "POST /apps/{appId}/webhooks",
      DeleteApp: "DELETE /apps/{appId}",
      DeleteBackendEnvironment:
        "DELETE /apps/{appId}/backendenvironments/{environmentName}",
      DeleteBranch: "DELETE /apps/{appId}/branches/{branchName}",
      DeleteDomainAssociation: "DELETE /apps/{appId}/domains/{domainName}",
      DeleteJob: "DELETE /apps/{appId}/branches/{branchName}/jobs/{jobId}",
      DeleteWebhook: "DELETE /webhooks/{webhookId}",
      GenerateAccessLogs: "POST /apps/{appId}/accesslogs",
      GetApp: "GET /apps/{appId}",
      GetArtifactUrl: "GET /artifacts/{artifactId}",
      GetBackendEnvironment:
        "GET /apps/{appId}/backendenvironments/{environmentName}",
      GetBranch: "GET /apps/{appId}/branches/{branchName}",
      GetDomainAssociation: "GET /apps/{appId}/domains/{domainName}",
      GetJob: "GET /apps/{appId}/branches/{branchName}/jobs/{jobId}",
      GetWebhook: "GET /webhooks/{webhookId}",
      ListApps: "GET /apps",
      ListArtifacts:
        "GET /apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts",
      ListBackendEnvironments: "GET /apps/{appId}/backendenvironments",
      ListBranches: "GET /apps/{appId}/branches",
      ListDomainAssociations: "GET /apps/{appId}/domains",
      ListJobs: "GET /apps/{appId}/branches/{branchName}/jobs",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListWebhooks: "GET /apps/{appId}/webhooks",
      StartDeployment:
        "POST /apps/{appId}/branches/{branchName}/deployments/start",
      StartJob: "POST /apps/{appId}/branches/{branchName}/jobs",
      StopJob: "DELETE /apps/{appId}/branches/{branchName}/jobs/{jobId}/stop",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateApp: "POST /apps/{appId}",
      UpdateBranch: "POST /apps/{appId}/branches/{branchName}",
      UpdateDomainAssociation: "POST /apps/{appId}/domains/{domainName}",
      UpdateWebhook: "POST /webhooks/{webhookId}",
    },
  },
  amplifybackend: {
    sdkId: "AmplifyBackend",
    version: "2020-08-11",
    arnNamespace: "amplifybackend",
    cloudTrailEventSource: "amplifybackend.amazonaws.com",
    endpointPrefix: "amplifybackend",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CloneBackend:
        "POST /backend/{AppId}/environments/{BackendEnvironmentName}/clone",
      CreateBackend: "POST /backend",
      CreateBackendAPI: "POST /backend/{AppId}/api",
      CreateBackendAuth: "POST /backend/{AppId}/auth",
      CreateBackendConfig: "POST /backend/{AppId}/config",
      CreateBackendStorage: "POST /backend/{AppId}/storage",
      CreateToken: "POST /backend/{AppId}/challenge",
      DeleteBackend:
        "POST /backend/{AppId}/environments/{BackendEnvironmentName}/remove",
      DeleteBackendAPI:
        "POST /backend/{AppId}/api/{BackendEnvironmentName}/remove",
      DeleteBackendAuth:
        "POST /backend/{AppId}/auth/{BackendEnvironmentName}/remove",
      DeleteBackendStorage:
        "POST /backend/{AppId}/storage/{BackendEnvironmentName}/remove",
      DeleteToken: "POST /backend/{AppId}/challenge/{SessionId}/remove",
      GenerateBackendAPIModels:
        "POST /backend/{AppId}/api/{BackendEnvironmentName}/generateModels",
      GetBackend: "POST /backend/{AppId}/details",
      GetBackendAPI:
        "POST /backend/{AppId}/api/{BackendEnvironmentName}/details",
      GetBackendAPIModels:
        "POST /backend/{AppId}/api/{BackendEnvironmentName}/getModels",
      GetBackendAuth:
        "POST /backend/{AppId}/auth/{BackendEnvironmentName}/details",
      GetBackendJob:
        "GET /backend/{AppId}/job/{BackendEnvironmentName}/{JobId}",
      GetBackendStorage:
        "POST /backend/{AppId}/storage/{BackendEnvironmentName}/details",
      GetToken: "GET /backend/{AppId}/challenge/{SessionId}",
      ImportBackendAuth:
        "POST /backend/{AppId}/auth/{BackendEnvironmentName}/import",
      ImportBackendStorage:
        "POST /backend/{AppId}/storage/{BackendEnvironmentName}/import",
      ListBackendJobs: "POST /backend/{AppId}/job/{BackendEnvironmentName}",
      ListS3Buckets: "POST /s3Buckets",
      RemoveAllBackends: "POST /backend/{AppId}/remove",
      RemoveBackendConfig: "POST /backend/{AppId}/config/remove",
      UpdateBackendAPI: "POST /backend/{AppId}/api/{BackendEnvironmentName}",
      UpdateBackendAuth: "POST /backend/{AppId}/auth/{BackendEnvironmentName}",
      UpdateBackendConfig: "POST /backend/{AppId}/config/update",
      UpdateBackendJob:
        "POST /backend/{AppId}/job/{BackendEnvironmentName}/{JobId}",
      UpdateBackendStorage:
        "POST /backend/{AppId}/storage/{BackendEnvironmentName}",
    },
  },
  amplifyuibuilder: {
    sdkId: "AmplifyUIBuilder",
    version: "2021-08-11",
    arnNamespace: "amplifyuibuilder",
    cloudTrailEventSource: "amplifyuibuilder.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ExchangeCodeForToken: "POST /tokens/{provider}",
      GetMetadata: "GET /app/{appId}/environment/{environmentName}/metadata",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutMetadataFlag:
        "PUT /app/{appId}/environment/{environmentName}/metadata/features/{featureName}",
      RefreshToken: "POST /tokens/{provider}/refresh",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateComponent: {
        http: "POST /app/{appId}/environment/{environmentName}/components",
        traits: {
          entity: "httpPayload",
        },
      },
      CreateForm: {
        http: "POST /app/{appId}/environment/{environmentName}/forms",
        traits: {
          entity: "httpPayload",
        },
      },
      CreateTheme: {
        http: "POST /app/{appId}/environment/{environmentName}/themes",
        traits: {
          entity: "httpPayload",
        },
      },
      DeleteComponent:
        "DELETE /app/{appId}/environment/{environmentName}/components/{id}",
      DeleteForm:
        "DELETE /app/{appId}/environment/{environmentName}/forms/{id}",
      DeleteTheme:
        "DELETE /app/{appId}/environment/{environmentName}/themes/{id}",
      ExportComponents:
        "GET /export/app/{appId}/environment/{environmentName}/components",
      ExportForms:
        "GET /export/app/{appId}/environment/{environmentName}/forms",
      ExportThemes:
        "GET /export/app/{appId}/environment/{environmentName}/themes",
      GetCodegenJob: {
        http: "GET /app/{appId}/environment/{environmentName}/codegen-jobs/{id}",
        traits: {
          job: "httpPayload",
        },
      },
      GetComponent: {
        http: "GET /app/{appId}/environment/{environmentName}/components/{id}",
        traits: {
          component: "httpPayload",
        },
      },
      GetForm: {
        http: "GET /app/{appId}/environment/{environmentName}/forms/{id}",
        traits: {
          form: "httpPayload",
        },
      },
      GetTheme: {
        http: "GET /app/{appId}/environment/{environmentName}/themes/{id}",
        traits: {
          theme: "httpPayload",
        },
      },
      ListCodegenJobs:
        "GET /app/{appId}/environment/{environmentName}/codegen-jobs",
      ListComponents:
        "GET /app/{appId}/environment/{environmentName}/components",
      ListForms: "GET /app/{appId}/environment/{environmentName}/forms",
      ListThemes: "GET /app/{appId}/environment/{environmentName}/themes",
      StartCodegenJob: {
        http: "POST /app/{appId}/environment/{environmentName}/codegen-jobs",
        traits: {
          entity: "httpPayload",
        },
      },
      UpdateComponent: {
        http: "PATCH /app/{appId}/environment/{environmentName}/components/{id}",
        traits: {
          entity: "httpPayload",
        },
      },
      UpdateForm: {
        http: "PATCH /app/{appId}/environment/{environmentName}/forms/{id}",
        traits: {
          entity: "httpPayload",
        },
      },
      UpdateTheme: {
        http: "PATCH /app/{appId}/environment/{environmentName}/themes/{id}",
        traits: {
          entity: "httpPayload",
        },
      },
    },
  },
  apigateway: {
    sdkId: "API Gateway",
    version: "2015-07-09",
    arnNamespace: "apigateway",
    cloudTrailEventSource: "apigateway.amazonaws.com",
    endpointPrefix: "apigateway",
    protocol: "restJson1",
    targetPrefix: "",
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
      DeleteAuthorizer:
        "DELETE /restapis/{restApiId}/authorizers/{authorizerId}",
      DeleteBasePathMapping:
        "DELETE /domainnames/{domainName}/basepathmappings/{basePath}",
      DeleteClientCertificate:
        "DELETE /clientcertificates/{clientCertificateId}",
      DeleteDeployment:
        "DELETE /restapis/{restApiId}/deployments/{deploymentId}",
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
      UpdateAuthorizer:
        "PATCH /restapis/{restApiId}/authorizers/{authorizerId}",
      UpdateBasePathMapping:
        "PATCH /domainnames/{domainName}/basepathmappings/{basePath}",
      UpdateClientCertificate:
        "PATCH /clientcertificates/{clientCertificateId}",
      UpdateDeployment:
        "PATCH /restapis/{restApiId}/deployments/{deploymentId}",
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
  },
  apigatewaymanagementapi: {
    sdkId: "ApiGatewayManagementApi",
    version: "2018-11-29",
    arnNamespace: "apigateway",
    cloudTrailEventSource: "apigatewaymanagementapi.amazonaws.com",
    endpointPrefix: "execute-api",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteConnection: "DELETE /@connections/{ConnectionId}",
      GetConnection: "GET /@connections/{ConnectionId}",
      PostToConnection: "POST /@connections/{ConnectionId}",
    },
  },
  apigatewayv2: {
    sdkId: "ApiGatewayV2",
    version: "2018-11-29",
    arnNamespace: "apigateway",
    cloudTrailEventSource: "apigatewayv2.amazonaws.com",
    endpointPrefix: "apigateway",
    protocol: "restJson1",
    targetPrefix: "",
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
  },
  appmesh: {
    sdkId: "App Mesh",
    version: "2019-01-25",
    arnNamespace: "appmesh",
    cloudTrailEventSource: "appmesh.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /v20190125/tags",
      TagResource: "PUT /v20190125/tag",
      UntagResource: "PUT /v20190125/untag",
      CreateGatewayRoute: {
        http: "PUT /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes",
        traits: {
          gatewayRoute: "httpPayload",
        },
      },
      CreateMesh: {
        http: "PUT /v20190125/meshes",
        traits: {
          mesh: "httpPayload",
        },
      },
      CreateRoute: {
        http: "PUT /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes",
        traits: {
          route: "httpPayload",
        },
      },
      CreateVirtualGateway: {
        http: "PUT /v20190125/meshes/{meshName}/virtualGateways",
        traits: {
          virtualGateway: "httpPayload",
        },
      },
      CreateVirtualNode: {
        http: "PUT /v20190125/meshes/{meshName}/virtualNodes",
        traits: {
          virtualNode: "httpPayload",
        },
      },
      CreateVirtualRouter: {
        http: "PUT /v20190125/meshes/{meshName}/virtualRouters",
        traits: {
          virtualRouter: "httpPayload",
        },
      },
      CreateVirtualService: {
        http: "PUT /v20190125/meshes/{meshName}/virtualServices",
        traits: {
          virtualService: "httpPayload",
        },
      },
      DeleteGatewayRoute: {
        http: "DELETE /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
        traits: {
          gatewayRoute: "httpPayload",
        },
      },
      DeleteMesh: {
        http: "DELETE /v20190125/meshes/{meshName}",
        traits: {
          mesh: "httpPayload",
        },
      },
      DeleteRoute: {
        http: "DELETE /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
        traits: {
          route: "httpPayload",
        },
      },
      DeleteVirtualGateway: {
        http: "DELETE /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
        traits: {
          virtualGateway: "httpPayload",
        },
      },
      DeleteVirtualNode: {
        http: "DELETE /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
        traits: {
          virtualNode: "httpPayload",
        },
      },
      DeleteVirtualRouter: {
        http: "DELETE /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
        traits: {
          virtualRouter: "httpPayload",
        },
      },
      DeleteVirtualService: {
        http: "DELETE /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
        traits: {
          virtualService: "httpPayload",
        },
      },
      DescribeGatewayRoute: {
        http: "GET /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
        traits: {
          gatewayRoute: "httpPayload",
        },
      },
      DescribeMesh: {
        http: "GET /v20190125/meshes/{meshName}",
        traits: {
          mesh: "httpPayload",
        },
      },
      DescribeRoute: {
        http: "GET /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
        traits: {
          route: "httpPayload",
        },
      },
      DescribeVirtualGateway: {
        http: "GET /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
        traits: {
          virtualGateway: "httpPayload",
        },
      },
      DescribeVirtualNode: {
        http: "GET /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
        traits: {
          virtualNode: "httpPayload",
        },
      },
      DescribeVirtualRouter: {
        http: "GET /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
        traits: {
          virtualRouter: "httpPayload",
        },
      },
      DescribeVirtualService: {
        http: "GET /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
        traits: {
          virtualService: "httpPayload",
        },
      },
      ListGatewayRoutes:
        "GET /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes",
      ListMeshes: "GET /v20190125/meshes",
      ListRoutes:
        "GET /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes",
      ListVirtualGateways: "GET /v20190125/meshes/{meshName}/virtualGateways",
      ListVirtualNodes: "GET /v20190125/meshes/{meshName}/virtualNodes",
      ListVirtualRouters: "GET /v20190125/meshes/{meshName}/virtualRouters",
      ListVirtualServices: "GET /v20190125/meshes/{meshName}/virtualServices",
      UpdateGatewayRoute: {
        http: "PUT /v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}",
        traits: {
          gatewayRoute: "httpPayload",
        },
      },
      UpdateMesh: {
        http: "PUT /v20190125/meshes/{meshName}",
        traits: {
          mesh: "httpPayload",
        },
      },
      UpdateRoute: {
        http: "PUT /v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}",
        traits: {
          route: "httpPayload",
        },
      },
      UpdateVirtualGateway: {
        http: "PUT /v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}",
        traits: {
          virtualGateway: "httpPayload",
        },
      },
      UpdateVirtualNode: {
        http: "PUT /v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}",
        traits: {
          virtualNode: "httpPayload",
        },
      },
      UpdateVirtualRouter: {
        http: "PUT /v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}",
        traits: {
          virtualRouter: "httpPayload",
        },
      },
      UpdateVirtualService: {
        http: "PUT /v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}",
        traits: {
          virtualService: "httpPayload",
        },
      },
    },
  },
  appconfig: {
    sdkId: "AppConfig",
    version: "2019-10-09",
    arnNamespace: "appconfig",
    cloudTrailEventSource: "appconfig.amazonaws.com",
    endpointPrefix: "appconfig",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateApplication: "POST /applications",
      CreateConfigurationProfile:
        "POST /applications/{ApplicationId}/configurationprofiles",
      CreateDeploymentStrategy: "POST /deploymentstrategies",
      CreateEnvironment: "POST /applications/{ApplicationId}/environments",
      CreateExtension: "POST /extensions",
      CreateExtensionAssociation: "POST /extensionassociations",
      CreateHostedConfigurationVersion: {
        http: "POST /applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions",
        traits: {
          ApplicationId: "Application-Id",
          ConfigurationProfileId: "Configuration-Profile-Id",
          VersionNumber: "Version-Number",
          Description: "Description",
          Content: "httpPayload",
          ContentType: "Content-Type",
          VersionLabel: "VersionLabel",
          KmsKeyArn: "KmsKeyArn",
        },
      },
      DeleteApplication: "DELETE /applications/{ApplicationId}",
      DeleteConfigurationProfile:
        "DELETE /applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}",
      DeleteDeploymentStrategy:
        "DELETE /deployementstrategies/{DeploymentStrategyId}",
      DeleteEnvironment:
        "DELETE /applications/{ApplicationId}/environments/{EnvironmentId}",
      DeleteExtension: "DELETE /extensions/{ExtensionIdentifier}",
      DeleteExtensionAssociation:
        "DELETE /extensionassociations/{ExtensionAssociationId}",
      DeleteHostedConfigurationVersion:
        "DELETE /applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}",
      GetAccountSettings: "GET /settings",
      GetApplication: "GET /applications/{ApplicationId}",
      GetConfiguration: {
        http: "GET /applications/{Application}/environments/{Environment}/configurations/{Configuration}",
        traits: {
          Content: "httpPayload",
          ConfigurationVersion: "Configuration-Version",
          ContentType: "Content-Type",
        },
      },
      GetConfigurationProfile:
        "GET /applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}",
      GetDeployment:
        "GET /applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}",
      GetDeploymentStrategy: "GET /deploymentstrategies/{DeploymentStrategyId}",
      GetEnvironment:
        "GET /applications/{ApplicationId}/environments/{EnvironmentId}",
      GetExtension: "GET /extensions/{ExtensionIdentifier}",
      GetExtensionAssociation:
        "GET /extensionassociations/{ExtensionAssociationId}",
      GetHostedConfigurationVersion: {
        http: "GET /applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}",
        traits: {
          ApplicationId: "Application-Id",
          ConfigurationProfileId: "Configuration-Profile-Id",
          VersionNumber: "Version-Number",
          Description: "Description",
          Content: "httpPayload",
          ContentType: "Content-Type",
          VersionLabel: "VersionLabel",
          KmsKeyArn: "KmsKeyArn",
        },
      },
      ListApplications: "GET /applications",
      ListConfigurationProfiles:
        "GET /applications/{ApplicationId}/configurationprofiles",
      ListDeployments:
        "GET /applications/{ApplicationId}/environments/{EnvironmentId}/deployments",
      ListDeploymentStrategies: "GET /deploymentstrategies",
      ListEnvironments: "GET /applications/{ApplicationId}/environments",
      ListExtensionAssociations: "GET /extensionassociations",
      ListExtensions: "GET /extensions",
      ListHostedConfigurationVersions:
        "GET /applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      StartDeployment:
        "POST /applications/{ApplicationId}/environments/{EnvironmentId}/deployments",
      StopDeployment:
        "DELETE /applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateAccountSettings: "PATCH /settings",
      UpdateApplication: "PATCH /applications/{ApplicationId}",
      UpdateConfigurationProfile:
        "PATCH /applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}",
      UpdateDeploymentStrategy:
        "PATCH /deploymentstrategies/{DeploymentStrategyId}",
      UpdateEnvironment:
        "PATCH /applications/{ApplicationId}/environments/{EnvironmentId}",
      UpdateExtension: "PATCH /extensions/{ExtensionIdentifier}",
      UpdateExtensionAssociation:
        "PATCH /extensionassociations/{ExtensionAssociationId}",
      ValidateConfiguration:
        "POST /applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators",
    },
  },
  appconfigdata: {
    sdkId: "AppConfigData",
    version: "2021-11-11",
    arnNamespace: "appconfigdata",
    cloudTrailEventSource: "appconfigdata.amazonaws.com",
    endpointPrefix: "appconfigdata",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetLatestConfiguration: {
        http: "GET /configuration",
        traits: {
          NextPollConfigurationToken: "Next-Poll-Configuration-Token",
          NextPollIntervalInSeconds: "Next-Poll-Interval-In-Seconds",
          ContentType: "Content-Type",
          Configuration: "httpPayload",
          VersionLabel: "Version-Label",
        },
      },
      StartConfigurationSession: "POST /configurationsessions",
    },
  },
  appfabric: {
    sdkId: "AppFabric",
    version: "2023-05-19",
    arnNamespace: "appfabric",
    cloudTrailEventSource: "appfabric.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetUserAccessTasks: "POST /useraccess/batchget",
      ConnectAppAuthorization:
        "POST /appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}/connect",
      CreateAppAuthorization:
        "POST /appbundles/{appBundleIdentifier}/appauthorizations",
      CreateAppBundle: "POST /appbundles",
      CreateIngestion: "POST /appbundles/{appBundleIdentifier}/ingestions",
      CreateIngestionDestination:
        "POST /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations",
      DeleteAppAuthorization:
        "DELETE /appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}",
      DeleteAppBundle: "DELETE /appbundles/{appBundleIdentifier}",
      DeleteIngestion:
        "DELETE /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}",
      DeleteIngestionDestination:
        "DELETE /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}",
      GetAppAuthorization:
        "GET /appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}",
      GetAppBundle: "GET /appbundles/{appBundleIdentifier}",
      GetIngestion:
        "GET /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}",
      GetIngestionDestination:
        "GET /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}",
      ListAppAuthorizations:
        "GET /appbundles/{appBundleIdentifier}/appauthorizations",
      ListAppBundles: "GET /appbundles",
      ListIngestionDestinations:
        "GET /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations",
      ListIngestions: "GET /appbundles/{appBundleIdentifier}/ingestions",
      ListTagsForResource: "GET /tags/{resourceArn}",
      StartIngestion:
        "POST /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/start",
      StartUserAccessTasks: "POST /useraccess/start",
      StopIngestion:
        "POST /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/stop",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateAppAuthorization:
        "PATCH /appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}",
      UpdateIngestionDestination:
        "PATCH /appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}",
    },
  },
  appflow: {
    sdkId: "Appflow",
    version: "2020-08-23",
    arnNamespace: "appflow",
    cloudTrailEventSource: "appflow.amazonaws.com",
    endpointPrefix: "appflow",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelFlowExecutions: "POST /cancel-flow-executions",
      CreateConnectorProfile: "POST /create-connector-profile",
      CreateFlow: "POST /create-flow",
      DeleteConnectorProfile: "POST /delete-connector-profile",
      DeleteFlow: "POST /delete-flow",
      DescribeConnector: "POST /describe-connector",
      DescribeConnectorEntity: "POST /describe-connector-entity",
      DescribeConnectorProfiles: "POST /describe-connector-profiles",
      DescribeConnectors: "POST /describe-connectors",
      DescribeFlow: "POST /describe-flow",
      DescribeFlowExecutionRecords: "POST /describe-flow-execution-records",
      ListConnectorEntities: "POST /list-connector-entities",
      ListConnectors: "POST /list-connectors",
      ListFlows: "POST /list-flows",
      ListTagsForResource: "GET /tags/{resourceArn}",
      RegisterConnector: "POST /register-connector",
      ResetConnectorMetadataCache: "POST /reset-connector-metadata-cache",
      StartFlow: "POST /start-flow",
      StopFlow: "POST /stop-flow",
      TagResource: "POST /tags/{resourceArn}",
      UnregisterConnector: "POST /unregister-connector",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateConnectorProfile: "POST /update-connector-profile",
      UpdateConnectorRegistration: "POST /update-connector-registration",
      UpdateFlow: "POST /update-flow",
    },
  },
  appintegrations: {
    sdkId: "AppIntegrations",
    version: "2020-07-29",
    arnNamespace: "app-integrations",
    cloudTrailEventSource: "app-integrations.amazonaws.com",
    endpointPrefix: "app-integrations",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateApplication: "POST /applications",
      CreateDataIntegration: "POST /dataIntegrations",
      CreateDataIntegrationAssociation:
        "POST /dataIntegrations/{DataIntegrationIdentifier}/associations",
      CreateEventIntegration: "POST /eventIntegrations",
      DeleteApplication: "DELETE /applications/{Arn}",
      DeleteDataIntegration:
        "DELETE /dataIntegrations/{DataIntegrationIdentifier}",
      DeleteEventIntegration: "DELETE /eventIntegrations/{Name}",
      GetApplication: "GET /applications/{Arn}",
      GetDataIntegration: "GET /dataIntegrations/{Identifier}",
      GetEventIntegration: "GET /eventIntegrations/{Name}",
      ListApplicationAssociations:
        "GET /applications/{ApplicationId}/associations",
      ListApplications: "GET /applications",
      ListDataIntegrationAssociations:
        "GET /dataIntegrations/{DataIntegrationIdentifier}/associations",
      ListDataIntegrations: "GET /dataIntegrations",
      ListEventIntegrationAssociations:
        "GET /eventIntegrations/{EventIntegrationName}/associations",
      ListEventIntegrations: "GET /eventIntegrations",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateApplication: "PATCH /applications/{Arn}",
      UpdateDataIntegration: "PATCH /dataIntegrations/{Identifier}",
      UpdateDataIntegrationAssociation:
        "PATCH /dataIntegrations/{DataIntegrationIdentifier}/associations/{DataIntegrationAssociationIdentifier}",
      UpdateEventIntegration: "PATCH /eventIntegrations/{Name}",
    },
  },
  applicationautoscaling: {
    sdkId: "Application Auto Scaling",
    version: "2016-02-06",
    arnNamespace: "application-autoscaling",
    cloudTrailEventSource: "applicationautoscaling.amazonaws.com",
    endpointPrefix: "application-autoscaling",
    protocol: "awsJson1_1",
    targetPrefix: "AnyScaleFrontendService",
  },
  applicationdiscoveryservice: {
    sdkId: "Application Discovery Service",
    version: "2015-11-01",
    arnNamespace: "discovery",
    cloudTrailEventSource: "applicationdiscoveryservice.amazonaws.com",
    endpointPrefix: "discovery",
    protocol: "awsJson1_1",
    targetPrefix: "AWSPoseidonService_V2015_11_01",
  },
  applicationinsights: {
    sdkId: "Application Insights",
    version: "2018-11-25",
    arnNamespace: "applicationinsights",
    cloudTrailEventSource: "applicationinsights.amazonaws.com",
    endpointPrefix: "applicationinsights",
    protocol: "awsJson1_1",
    targetPrefix: "EC2WindowsBarleyService",
  },
  applicationsignals: {
    sdkId: "Application Signals",
    version: "2024-04-15",
    arnNamespace: "application-signals",
    cloudTrailEventSource: "application-signals.amazonaws.com",
    endpointPrefix: "application-signals",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetServiceLevelObjectiveBudgetReport: "POST /budget-report",
      BatchUpdateExclusionWindows: "PATCH /exclusion-windows",
      GetService: "POST /service",
      ListServiceDependencies: "POST /service-dependencies",
      ListServiceDependents: "POST /service-dependents",
      ListServiceLevelObjectiveExclusionWindows:
        "GET /slo/{Id}/exclusion-windows",
      ListServiceOperations: "POST /service-operations",
      ListServices: "GET /services",
      ListTagsForResource: "GET /tags",
      StartDiscovery: "POST /start-discovery",
      TagResource: "POST /tag-resource",
      UntagResource: "POST /untag-resource",
      CreateServiceLevelObjective: "POST /slo",
      DeleteServiceLevelObjective: "DELETE /slo/{Id}",
      GetServiceLevelObjective: "GET /slo/{Id}",
      ListServiceLevelObjectives: "POST /slos",
      UpdateServiceLevelObjective: "PATCH /slo/{Id}",
    },
  },
  applicationcostprofiler: {
    sdkId: "ApplicationCostProfiler",
    version: "2020-09-10",
    arnNamespace: "application-cost-profiler",
    cloudTrailEventSource: "applicationcostprofiler.amazonaws.com",
    endpointPrefix: "application-cost-profiler",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteReportDefinition: "DELETE /reportDefinition/{reportId}",
      GetReportDefinition: "GET /reportDefinition/{reportId}",
      ImportApplicationUsage: "POST /importApplicationUsage",
      ListReportDefinitions: "GET /reportDefinition",
      PutReportDefinition: "POST /reportDefinition",
      UpdateReportDefinition: "PUT /reportDefinition/{reportId}",
    },
  },
  apprunner: {
    sdkId: "AppRunner",
    version: "2020-05-15",
    arnNamespace: "apprunner",
    cloudTrailEventSource: "apprunner.amazonaws.com",
    endpointPrefix: "apprunner",
    protocol: "awsJson1_0",
    targetPrefix: "AppRunner",
  },
  appstream: {
    sdkId: "AppStream",
    version: "2016-12-01",
    arnNamespace: "appstream",
    cloudTrailEventSource: "appstream.amazonaws.com",
    endpointPrefix: "appstream2",
    protocol: "awsJson1_1",
    targetPrefix: "PhotonAdminProxyService",
  },
  appsync: {
    sdkId: "AppSync",
    version: "2017-07-25",
    arnNamespace: "appsync",
    cloudTrailEventSource: "appsync.amazonaws.com",
    endpointPrefix: "appsync",
    protocol: "restJson1",
    targetPrefix: "",
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
      DeleteChannelNamespace:
        "DELETE /v2/apis/{apiId}/channelNamespaces/{name}",
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
      GetResolver:
        "GET /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}",
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
  },
  apptest: {
    sdkId: "AppTest",
    version: "2022-12-06",
    arnNamespace: "apptest",
    cloudTrailEventSource: "apptest.amazonaws.com",
    endpointPrefix: "apptest",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateTestCase: "POST /testcase",
      CreateTestConfiguration: "POST /testconfiguration",
      CreateTestSuite: "POST /testsuite",
      DeleteTestCase: "DELETE /testcases/{testCaseId}",
      DeleteTestConfiguration:
        "DELETE /testconfigurations/{testConfigurationId}",
      DeleteTestRun: "DELETE /testruns/{testRunId}",
      DeleteTestSuite: "DELETE /testsuites/{testSuiteId}",
      GetTestCase: "GET /testcases/{testCaseId}",
      GetTestConfiguration: "GET /testconfigurations/{testConfigurationId}",
      GetTestRunStep: "GET /testruns/{testRunId}/steps/{stepName}",
      GetTestSuite: "GET /testsuites/{testSuiteId}",
      ListTestCases: "GET /testcases",
      ListTestConfigurations: "GET /testconfigurations",
      ListTestRunSteps: "GET /testruns/{testRunId}/steps",
      ListTestRunTestCases: "GET /testruns/{testRunId}/testcases",
      ListTestRuns: "GET /testruns",
      ListTestSuites: "GET /testsuites",
      StartTestRun: "POST /testrun",
      UpdateTestCase: "PATCH /testcases/{testCaseId}",
      UpdateTestConfiguration:
        "PATCH /testconfigurations/{testConfigurationId}",
      UpdateTestSuite: "PATCH /testsuites/{testSuiteId}",
    },
  },
  arcregionswitch: {
    sdkId: "ARC Region switch",
    version: "2022-07-26",
    arnNamespace: "arc-region-switch",
    cloudTrailEventSource: "arc-region-switch.amazonaws.com",
    endpointPrefix: "arc-region-switch",
    protocol: "awsJson1_0",
    targetPrefix: "ArcRegionSwitch",
  },
  arczonalshift: {
    sdkId: "ARC Zonal Shift",
    version: "2022-10-30",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "arc-zonal-shift",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelPracticeRun: "DELETE /practiceruns/{zonalShiftId}",
      CancelZonalShift: "DELETE /zonalshifts/{zonalShiftId}",
      CreatePracticeRunConfiguration: "POST /configuration",
      DeletePracticeRunConfiguration:
        "DELETE /configuration/{resourceIdentifier}",
      GetAutoshiftObserverNotificationStatus:
        "GET /autoshift-observer-notification",
      GetManagedResource: "GET /managedresources/{resourceIdentifier}",
      ListAutoshifts: "GET /autoshifts",
      ListManagedResources: "GET /managedresources",
      ListZonalShifts: "GET /zonalshifts",
      StartPracticeRun: "POST /practiceruns",
      StartZonalShift: "POST /zonalshifts",
      UpdateAutoshiftObserverNotificationStatus:
        "PUT /autoshift-observer-notification",
      UpdatePracticeRunConfiguration:
        "PATCH /configuration/{resourceIdentifier}",
      UpdateZonalAutoshiftConfiguration:
        "PUT /managedresources/{resourceIdentifier}",
      UpdateZonalShift: "PATCH /zonalshifts/{zonalShiftId}",
    },
  },
  artifact: {
    sdkId: "Artifact",
    version: "2018-05-10",
    arnNamespace: "artifact",
    cloudTrailEventSource: "artifact.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetAccountSettings: "GET /v1/account-settings/get",
      GetReport: "GET /v1/report/get",
      GetReportMetadata: "GET /v1/report/getMetadata",
      GetTermForReport: "GET /v1/report/getTermForReport",
      ListCustomerAgreements: "GET /v1/customer-agreement/list",
      ListReports: "GET /v1/report/list",
      PutAccountSettings: "PUT /v1/account-settings/put",
    },
  },
  athena: {
    sdkId: "Athena",
    version: "2017-05-18",
    arnNamespace: "athena",
    cloudTrailEventSource: "athena.amazonaws.com",
    endpointPrefix: "athena",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonAthena",
  },
  auditmanager: {
    sdkId: "AuditManager",
    version: "2017-07-25",
    arnNamespace: "auditmanager",
    cloudTrailEventSource: "auditmanager.amazonaws.com",
    endpointPrefix: "auditmanager",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateAssessmentReportEvidenceFolder:
        "PUT /assessments/{assessmentId}/associateToAssessmentReport",
      BatchAssociateAssessmentReportEvidence:
        "PUT /assessments/{assessmentId}/batchAssociateToAssessmentReport",
      BatchCreateDelegationByAssessment:
        "POST /assessments/{assessmentId}/delegations",
      BatchDeleteDelegationByAssessment:
        "PUT /assessments/{assessmentId}/delegations",
      BatchDisassociateAssessmentReportEvidence:
        "PUT /assessments/{assessmentId}/batchDisassociateFromAssessmentReport",
      BatchImportEvidenceToAssessmentControl:
        "POST /assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence",
      CreateAssessment: "POST /assessments",
      CreateAssessmentFramework: "POST /assessmentFrameworks",
      CreateAssessmentReport: "POST /assessments/{assessmentId}/reports",
      CreateControl: "POST /controls",
      DeleteAssessment: "DELETE /assessments/{assessmentId}",
      DeleteAssessmentFramework: "DELETE /assessmentFrameworks/{frameworkId}",
      DeleteAssessmentFrameworkShare:
        "DELETE /assessmentFrameworkShareRequests/{requestId}",
      DeleteAssessmentReport:
        "DELETE /assessments/{assessmentId}/reports/{assessmentReportId}",
      DeleteControl: "DELETE /controls/{controlId}",
      DeregisterAccount: "POST /account/deregisterAccount",
      DeregisterOrganizationAdminAccount:
        "POST /account/deregisterOrganizationAdminAccount",
      DisassociateAssessmentReportEvidenceFolder:
        "PUT /assessments/{assessmentId}/disassociateFromAssessmentReport",
      GetAccountStatus: "GET /account/status",
      GetAssessment: "GET /assessments/{assessmentId}",
      GetAssessmentFramework: "GET /assessmentFrameworks/{frameworkId}",
      GetAssessmentReportUrl:
        "GET /assessments/{assessmentId}/reports/{assessmentReportId}/url",
      GetChangeLogs: "GET /assessments/{assessmentId}/changelogs",
      GetControl: "GET /controls/{controlId}",
      GetDelegations: "GET /delegations",
      GetEvidence:
        "GET /assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}",
      GetEvidenceByEvidenceFolder:
        "GET /assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence",
      GetEvidenceFileUploadUrl: "GET /evidenceFileUploadUrl",
      GetEvidenceFolder:
        "GET /assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}",
      GetEvidenceFoldersByAssessment:
        "GET /assessments/{assessmentId}/evidenceFolders",
      GetEvidenceFoldersByAssessmentControl:
        "GET /assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}",
      GetInsights: "GET /insights",
      GetInsightsByAssessment: "GET /insights/assessments/{assessmentId}",
      GetOrganizationAdminAccount: "GET /account/organizationAdminAccount",
      GetServicesInScope: "GET /services",
      GetSettings: "GET /settings/{attribute}",
      ListAssessmentControlInsightsByControlDomain:
        "GET /insights/controls-by-assessment",
      ListAssessmentFrameworks: "GET /assessmentFrameworks",
      ListAssessmentFrameworkShareRequests:
        "GET /assessmentFrameworkShareRequests",
      ListAssessmentReports: "GET /assessmentReports",
      ListAssessments: "GET /assessments",
      ListControlDomainInsights: "GET /insights/control-domains",
      ListControlDomainInsightsByAssessment:
        "GET /insights/control-domains-by-assessment",
      ListControlInsightsByControlDomain: "GET /insights/controls",
      ListControls: "GET /controls",
      ListKeywordsForDataSource: "GET /dataSourceKeywords",
      ListNotifications: "GET /notifications",
      ListTagsForResource: "GET /tags/{resourceArn}",
      RegisterAccount: "POST /account/registerAccount",
      RegisterOrganizationAdminAccount:
        "POST /account/registerOrganizationAdminAccount",
      StartAssessmentFrameworkShare:
        "POST /assessmentFrameworks/{frameworkId}/shareRequests",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateAssessment: "PUT /assessments/{assessmentId}",
      UpdateAssessmentControl:
        "PUT /assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}",
      UpdateAssessmentControlSetStatus:
        "PUT /assessments/{assessmentId}/controlSets/{controlSetId}/status",
      UpdateAssessmentFramework: "PUT /assessmentFrameworks/{frameworkId}",
      UpdateAssessmentFrameworkShare:
        "PUT /assessmentFrameworkShareRequests/{requestId}",
      UpdateAssessmentStatus: "PUT /assessments/{assessmentId}/status",
      UpdateControl: "PUT /controls/{controlId}",
      UpdateSettings: "PUT /settings",
      ValidateAssessmentReportIntegrity: "POST /assessmentReports/integrity",
    },
  },
  autoscaling: {
    sdkId: "Auto Scaling",
    version: "2011-01-01",
    arnNamespace: "autoscaling",
    cloudTrailEventSource: "autoscaling.amazonaws.com",
    endpointPrefix: "autoscaling",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  autoscalingplans: {
    sdkId: "Auto Scaling Plans",
    version: "2018-01-06",
    arnNamespace: "autoscaling-plans",
    cloudTrailEventSource: "autoscalingplans.amazonaws.com",
    endpointPrefix: "autoscaling-plans",
    protocol: "awsJson1_1",
    targetPrefix: "AnyScaleScalingPlannerFrontendService",
  },
  b2bi: {
    sdkId: "b2bi",
    version: "2022-06-23",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "b2bi",
    protocol: "awsJson1_0",
    targetPrefix: "B2BI",
  },
  backup: {
    sdkId: "Backup",
    version: "2018-11-15",
    arnNamespace: "backup",
    cloudTrailEventSource: "backup.amazonaws.com",
    endpointPrefix: "backup",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateBackupVaultMpaApprovalTeam:
        "PUT /backup-vaults/{BackupVaultName}/mpaApprovalTeam",
      CancelLegalHold: "DELETE /legal-holds/{LegalHoldId}",
      CreateBackupPlan: "PUT /backup/plans",
      CreateBackupSelection: "PUT /backup/plans/{BackupPlanId}/selections",
      CreateBackupVault: "PUT /backup-vaults/{BackupVaultName}",
      CreateFramework: "POST /audit/frameworks",
      CreateLegalHold: "POST /legal-holds",
      CreateLogicallyAirGappedBackupVault:
        "PUT /logically-air-gapped-backup-vaults/{BackupVaultName}",
      CreateReportPlan: "POST /audit/report-plans",
      CreateRestoreAccessBackupVault: "PUT /restore-access-backup-vaults",
      CreateRestoreTestingPlan: "PUT /restore-testing/plans",
      CreateRestoreTestingSelection:
        "PUT /restore-testing/plans/{RestoreTestingPlanName}/selections",
      DeleteBackupPlan: "DELETE /backup/plans/{BackupPlanId}",
      DeleteBackupSelection:
        "DELETE /backup/plans/{BackupPlanId}/selections/{SelectionId}",
      DeleteBackupVault: "DELETE /backup-vaults/{BackupVaultName}",
      DeleteBackupVaultAccessPolicy:
        "DELETE /backup-vaults/{BackupVaultName}/access-policy",
      DeleteBackupVaultLockConfiguration:
        "DELETE /backup-vaults/{BackupVaultName}/vault-lock",
      DeleteBackupVaultNotifications:
        "DELETE /backup-vaults/{BackupVaultName}/notification-configuration",
      DeleteFramework: "DELETE /audit/frameworks/{FrameworkName}",
      DeleteRecoveryPoint:
        "DELETE /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}",
      DeleteReportPlan: "DELETE /audit/report-plans/{ReportPlanName}",
      DeleteRestoreTestingPlan:
        "DELETE /restore-testing/plans/{RestoreTestingPlanName}",
      DeleteRestoreTestingSelection:
        "DELETE /restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}",
      DescribeBackupJob: "GET /backup-jobs/{BackupJobId}",
      DescribeBackupVault: "GET /backup-vaults/{BackupVaultName}",
      DescribeCopyJob: "GET /copy-jobs/{CopyJobId}",
      DescribeFramework: "GET /audit/frameworks/{FrameworkName}",
      DescribeGlobalSettings: "GET /global-settings",
      DescribeProtectedResource: "GET /resources/{ResourceArn}",
      DescribeRecoveryPoint:
        "GET /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}",
      DescribeRegionSettings: "GET /account-settings",
      DescribeReportJob: "GET /audit/report-jobs/{ReportJobId}",
      DescribeReportPlan: "GET /audit/report-plans/{ReportPlanName}",
      DescribeRestoreJob: "GET /restore-jobs/{RestoreJobId}",
      DisassociateBackupVaultMpaApprovalTeam:
        "POST /backup-vaults/{BackupVaultName}/mpaApprovalTeam?delete",
      DisassociateRecoveryPoint:
        "POST /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/disassociate",
      DisassociateRecoveryPointFromParent:
        "DELETE /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/parentAssociation",
      ExportBackupPlanTemplate: "GET /backup/plans/{BackupPlanId}/toTemplate",
      GetBackupPlan: "GET /backup/plans/{BackupPlanId}",
      GetBackupPlanFromJSON: "POST /backup/template/json/toPlan",
      GetBackupPlanFromTemplate:
        "GET /backup/template/plans/{BackupPlanTemplateId}/toPlan",
      GetBackupSelection:
        "GET /backup/plans/{BackupPlanId}/selections/{SelectionId}",
      GetBackupVaultAccessPolicy:
        "GET /backup-vaults/{BackupVaultName}/access-policy",
      GetBackupVaultNotifications:
        "GET /backup-vaults/{BackupVaultName}/notification-configuration",
      GetLegalHold: "GET /legal-holds/{LegalHoldId}",
      GetRecoveryPointIndexDetails:
        "GET /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index",
      GetRecoveryPointRestoreMetadata:
        "GET /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata",
      GetRestoreJobMetadata: "GET /restore-jobs/{RestoreJobId}/metadata",
      GetRestoreTestingInferredMetadata:
        "GET /restore-testing/inferred-metadata",
      GetRestoreTestingPlan:
        "GET /restore-testing/plans/{RestoreTestingPlanName}",
      GetRestoreTestingSelection:
        "GET /restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}",
      GetSupportedResourceTypes: "GET /supported-resource-types",
      ListBackupJobs: "GET /backup-jobs",
      ListBackupJobSummaries: "GET /audit/backup-job-summaries",
      ListBackupPlans: "GET /backup/plans",
      ListBackupPlanTemplates: "GET /backup/template/plans",
      ListBackupPlanVersions: "GET /backup/plans/{BackupPlanId}/versions",
      ListBackupSelections: "GET /backup/plans/{BackupPlanId}/selections",
      ListBackupVaults: "GET /backup-vaults",
      ListCopyJobs: "GET /copy-jobs",
      ListCopyJobSummaries: "GET /audit/copy-job-summaries",
      ListFrameworks: "GET /audit/frameworks",
      ListIndexedRecoveryPoints: "GET /indexes/recovery-point",
      ListLegalHolds: "GET /legal-holds",
      ListProtectedResources: "GET /resources",
      ListProtectedResourcesByBackupVault:
        "GET /backup-vaults/{BackupVaultName}/resources",
      ListRecoveryPointsByBackupVault:
        "GET /backup-vaults/{BackupVaultName}/recovery-points",
      ListRecoveryPointsByLegalHold:
        "GET /legal-holds/{LegalHoldId}/recovery-points",
      ListRecoveryPointsByResource:
        "GET /resources/{ResourceArn}/recovery-points",
      ListReportJobs: "GET /audit/report-jobs",
      ListReportPlans: "GET /audit/report-plans",
      ListRestoreAccessBackupVaults:
        "GET /logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults",
      ListRestoreJobs: "GET /restore-jobs",
      ListRestoreJobsByProtectedResource:
        "GET /resources/{ResourceArn}/restore-jobs",
      ListRestoreJobSummaries: "GET /audit/restore-job-summaries",
      ListRestoreTestingPlans: "GET /restore-testing/plans",
      ListRestoreTestingSelections:
        "GET /restore-testing/plans/{RestoreTestingPlanName}/selections",
      ListTags: "GET /tags/{ResourceArn}",
      PutBackupVaultAccessPolicy:
        "PUT /backup-vaults/{BackupVaultName}/access-policy",
      PutBackupVaultLockConfiguration:
        "PUT /backup-vaults/{BackupVaultName}/vault-lock",
      PutBackupVaultNotifications:
        "PUT /backup-vaults/{BackupVaultName}/notification-configuration",
      PutRestoreValidationResult:
        "PUT /restore-jobs/{RestoreJobId}/validations",
      RevokeRestoreAccessBackupVault:
        "DELETE /logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults/{RestoreAccessBackupVaultArn}",
      StartBackupJob: "PUT /backup-jobs",
      StartCopyJob: "PUT /copy-jobs",
      StartReportJob: "POST /audit/report-jobs/{ReportPlanName}",
      StartRestoreJob: "PUT /restore-jobs",
      StopBackupJob: "POST /backup-jobs/{BackupJobId}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "POST /untag/{ResourceArn}",
      UpdateBackupPlan: "POST /backup/plans/{BackupPlanId}",
      UpdateFramework: "PUT /audit/frameworks/{FrameworkName}",
      UpdateGlobalSettings: "PUT /global-settings",
      UpdateRecoveryPointIndexSettings:
        "POST /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index",
      UpdateRecoveryPointLifecycle:
        "POST /backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}",
      UpdateRegionSettings: "PUT /account-settings",
      UpdateReportPlan: "PUT /audit/report-plans/{ReportPlanName}",
      UpdateRestoreTestingPlan:
        "PUT /restore-testing/plans/{RestoreTestingPlanName}",
      UpdateRestoreTestingSelection:
        "PUT /restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}",
    },
  },
  backupgateway: {
    sdkId: "Backup Gateway",
    version: "2021-01-01",
    arnNamespace: "backup-gateway",
    cloudTrailEventSource: "backup-gateway.amazonaws.com",
    endpointPrefix: "backup-gateway",
    protocol: "awsJson1_0",
    targetPrefix: "BackupOnPremises_v20210101",
  },
  backupsearch: {
    sdkId: "BackupSearch",
    version: "2018-05-10",
    arnNamespace: "backup-search",
    cloudTrailEventSource: "backup.amazonaws.com",
    endpointPrefix: "backup-search",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListSearchJobBackups: "GET /search-jobs/{SearchJobIdentifier}/backups",
      ListSearchJobResults:
        "GET /search-jobs/{SearchJobIdentifier}/search-results",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      GetSearchJob: "GET /search-jobs/{SearchJobIdentifier}",
      GetSearchResultExportJob: "GET /export-search-jobs/{ExportJobIdentifier}",
      ListSearchJobs: "GET /search-jobs",
      ListSearchResultExportJobs: "GET /export-search-jobs",
      StartSearchJob: "PUT /search-jobs",
      StartSearchResultExportJob: "PUT /export-search-jobs",
      StopSearchJob: "PUT /search-jobs/{SearchJobIdentifier}/actions/cancel",
    },
  },
  batch: {
    sdkId: "Batch",
    version: "2016-08-10",
    arnNamespace: "batch",
    cloudTrailEventSource: "batch.amazonaws.com",
    endpointPrefix: "batch",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelJob: "POST /v1/canceljob",
      CreateComputeEnvironment: "POST /v1/createcomputeenvironment",
      CreateConsumableResource: "POST /v1/createconsumableresource",
      CreateJobQueue: "POST /v1/createjobqueue",
      CreateSchedulingPolicy: "POST /v1/createschedulingpolicy",
      CreateServiceEnvironment: "POST /v1/createserviceenvironment",
      DeleteComputeEnvironment: "POST /v1/deletecomputeenvironment",
      DeleteConsumableResource: "POST /v1/deleteconsumableresource",
      DeleteJobQueue: "POST /v1/deletejobqueue",
      DeleteSchedulingPolicy: "POST /v1/deleteschedulingpolicy",
      DeleteServiceEnvironment: "POST /v1/deleteserviceenvironment",
      DeregisterJobDefinition: "POST /v1/deregisterjobdefinition",
      DescribeComputeEnvironments: "POST /v1/describecomputeenvironments",
      DescribeConsumableResource: "POST /v1/describeconsumableresource",
      DescribeJobDefinitions: "POST /v1/describejobdefinitions",
      DescribeJobQueues: "POST /v1/describejobqueues",
      DescribeJobs: "POST /v1/describejobs",
      DescribeSchedulingPolicies: "POST /v1/describeschedulingpolicies",
      DescribeServiceEnvironments: "POST /v1/describeserviceenvironments",
      DescribeServiceJob: "POST /v1/describeservicejob",
      GetJobQueueSnapshot: "POST /v1/getjobqueuesnapshot",
      ListConsumableResources: "POST /v1/listconsumableresources",
      ListJobs: "POST /v1/listjobs",
      ListJobsByConsumableResource: "POST /v1/listjobsbyconsumableresource",
      ListSchedulingPolicies: "POST /v1/listschedulingpolicies",
      ListServiceJobs: "POST /v1/listservicejobs",
      ListTagsForResource: "GET /v1/tags/{resourceArn}",
      RegisterJobDefinition: "POST /v1/registerjobdefinition",
      SubmitJob: "POST /v1/submitjob",
      SubmitServiceJob: "POST /v1/submitservicejob",
      TagResource: "POST /v1/tags/{resourceArn}",
      TerminateJob: "POST /v1/terminatejob",
      TerminateServiceJob: "POST /v1/terminateservicejob",
      UntagResource: "DELETE /v1/tags/{resourceArn}",
      UpdateComputeEnvironment: "POST /v1/updatecomputeenvironment",
      UpdateConsumableResource: "POST /v1/updateconsumableresource",
      UpdateJobQueue: "POST /v1/updatejobqueue",
      UpdateSchedulingPolicy: "POST /v1/updateschedulingpolicy",
      UpdateServiceEnvironment: "POST /v1/updateserviceenvironment",
    },
  },
  bcmdataexports: {
    sdkId: "BCM Data Exports",
    version: "2023-11-26",
    arnNamespace: "bcm-data-exports",
    cloudTrailEventSource: "bcm-data-exports.amazonaws.com",
    endpointPrefix: "bcm-data-exports",
    protocol: "awsJson1_1",
    targetPrefix: "AWSBillingAndCostManagementDataExports",
  },
  bcmpricingcalculator: {
    sdkId: "BCM Pricing Calculator",
    version: "2024-06-19",
    arnNamespace: "bcm-pricing-calculator",
    cloudTrailEventSource: "bcm-pricing-calculator.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_0",
    targetPrefix: "AWSBCMPricingCalculator",
  },
  bedrock: {
    sdkId: "Bedrock",
    version: "2023-04-20",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "bedrock",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchDeleteEvaluationJob: "POST /evaluation-jobs/batch-delete",
      CreateCustomModel: "POST /custom-models/create-custom-model",
      CreateCustomModelDeployment:
        "POST /model-customization/custom-model-deployments",
      CreateEvaluationJob: "POST /evaluation-jobs",
      CreateFoundationModelAgreement: "POST /create-foundation-model-agreement",
      CreateGuardrail: "POST /guardrails",
      CreateGuardrailVersion: "POST /guardrails/{guardrailIdentifier}",
      CreateInferenceProfile: "POST /inference-profiles",
      CreateMarketplaceModelEndpoint: "POST /marketplace-model/endpoints",
      CreateModelCopyJob: "POST /model-copy-jobs",
      CreateModelCustomizationJob: "POST /model-customization-jobs",
      CreateModelImportJob: "POST /model-import-jobs",
      CreateModelInvocationJob: "POST /model-invocation-job",
      CreatePromptRouter: "POST /prompt-routers",
      CreateProvisionedModelThroughput: "POST /provisioned-model-throughput",
      DeleteCustomModel: "DELETE /custom-models/{modelIdentifier}",
      DeleteCustomModelDeployment:
        "DELETE /model-customization/custom-model-deployments/{customModelDeploymentIdentifier}",
      DeleteFoundationModelAgreement: "POST /delete-foundation-model-agreement",
      DeleteGuardrail: "DELETE /guardrails/{guardrailIdentifier}",
      DeleteImportedModel: "DELETE /imported-models/{modelIdentifier}",
      DeleteInferenceProfile:
        "DELETE /inference-profiles/{inferenceProfileIdentifier}",
      DeleteMarketplaceModelEndpoint:
        "DELETE /marketplace-model/endpoints/{endpointArn}",
      DeleteModelInvocationLoggingConfiguration:
        "DELETE /logging/modelinvocations",
      DeletePromptRouter: "DELETE /prompt-routers/{promptRouterArn}",
      DeleteProvisionedModelThroughput:
        "DELETE /provisioned-model-throughput/{provisionedModelId}",
      DeregisterMarketplaceModelEndpoint:
        "DELETE /marketplace-model/endpoints/{endpointArn}/registration",
      GetCustomModel: "GET /custom-models/{modelIdentifier}",
      GetCustomModelDeployment:
        "GET /model-customization/custom-model-deployments/{customModelDeploymentIdentifier}",
      GetEvaluationJob: "GET /evaluation-jobs/{jobIdentifier}",
      GetFoundationModel: "GET /foundation-models/{modelIdentifier}",
      GetFoundationModelAvailability:
        "GET /foundation-model-availability/{modelId}",
      GetGuardrail: "GET /guardrails/{guardrailIdentifier}",
      GetImportedModel: "GET /imported-models/{modelIdentifier}",
      GetInferenceProfile:
        "GET /inference-profiles/{inferenceProfileIdentifier}",
      GetMarketplaceModelEndpoint:
        "GET /marketplace-model/endpoints/{endpointArn}",
      GetModelCopyJob: "GET /model-copy-jobs/{jobArn}",
      GetModelCustomizationJob: "GET /model-customization-jobs/{jobIdentifier}",
      GetModelImportJob: "GET /model-import-jobs/{jobIdentifier}",
      GetModelInvocationJob: "GET /model-invocation-job/{jobIdentifier}",
      GetModelInvocationLoggingConfiguration: "GET /logging/modelinvocations",
      GetPromptRouter: "GET /prompt-routers/{promptRouterArn}",
      GetProvisionedModelThroughput:
        "GET /provisioned-model-throughput/{provisionedModelId}",
      GetUseCaseForModelAccess: "GET /use-case-for-model-access",
      ListCustomModelDeployments:
        "GET /model-customization/custom-model-deployments",
      ListCustomModels: "GET /custom-models",
      ListEvaluationJobs: "GET /evaluation-jobs",
      ListFoundationModelAgreementOffers:
        "GET /list-foundation-model-agreement-offers/{modelId}",
      ListFoundationModels: "GET /foundation-models",
      ListGuardrails: "GET /guardrails",
      ListImportedModels: "GET /imported-models",
      ListInferenceProfiles: "GET /inference-profiles",
      ListMarketplaceModelEndpoints: "GET /marketplace-model/endpoints",
      ListModelCopyJobs: "GET /model-copy-jobs",
      ListModelCustomizationJobs: "GET /model-customization-jobs",
      ListModelImportJobs: "GET /model-import-jobs",
      ListModelInvocationJobs: "GET /model-invocation-jobs",
      ListPromptRouters: "GET /prompt-routers",
      ListProvisionedModelThroughputs: "GET /provisioned-model-throughputs",
      ListTagsForResource: "POST /listTagsForResource",
      PutModelInvocationLoggingConfiguration: "PUT /logging/modelinvocations",
      PutUseCaseForModelAccess: "POST /use-case-for-model-access",
      RegisterMarketplaceModelEndpoint:
        "POST /marketplace-model/endpoints/{endpointIdentifier}/registration",
      StopEvaluationJob: "POST /evaluation-job/{jobIdentifier}/stop",
      StopModelCustomizationJob:
        "POST /model-customization-jobs/{jobIdentifier}/stop",
      StopModelInvocationJob: "POST /model-invocation-job/{jobIdentifier}/stop",
      TagResource: "POST /tagResource",
      UntagResource: "POST /untagResource",
      UpdateGuardrail: "PUT /guardrails/{guardrailIdentifier}",
      UpdateMarketplaceModelEndpoint:
        "PATCH /marketplace-model/endpoints/{endpointArn}",
      UpdateProvisionedModelThroughput:
        "PATCH /provisioned-model-throughput/{provisionedModelId}",
    },
  },
  bedrockagent: {
    sdkId: "Bedrock Agent",
    version: "2023-06-05",
    arnNamespace: "bedrock",
    cloudTrailEventSource: "bedrock.amazonaws.com",
    endpointPrefix: "bedrock-agent",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ValidateFlowDefinition: "POST /flows/validate-definition",
      AssociateAgentCollaborator:
        "PUT /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/",
      AssociateAgentKnowledgeBase:
        "PUT /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/",
      CreateAgent: "PUT /agents/",
      CreateAgentActionGroup:
        "PUT /agents/{agentId}/agentversions/{agentVersion}/actiongroups/",
      CreateAgentAlias: "PUT /agents/{agentId}/agentaliases/",
      CreateDataSource: "PUT /knowledgebases/{knowledgeBaseId}/datasources/",
      CreateFlow: "POST /flows/",
      CreateFlowAlias: "POST /flows/{flowIdentifier}/aliases",
      CreateFlowVersion: "POST /flows/{flowIdentifier}/versions",
      CreateKnowledgeBase: "PUT /knowledgebases/",
      CreatePrompt: "POST /prompts/",
      CreatePromptVersion: "POST /prompts/{promptIdentifier}/versions",
      DeleteAgent: "DELETE /agents/{agentId}/",
      DeleteAgentActionGroup:
        "DELETE /agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/",
      DeleteAgentAlias: "DELETE /agents/{agentId}/agentaliases/{agentAliasId}/",
      DeleteAgentVersion:
        "DELETE /agents/{agentId}/agentversions/{agentVersion}/",
      DeleteDataSource:
        "DELETE /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}",
      DeleteFlow: "DELETE /flows/{flowIdentifier}/",
      DeleteFlowAlias:
        "DELETE /flows/{flowIdentifier}/aliases/{aliasIdentifier}",
      DeleteFlowVersion:
        "DELETE /flows/{flowIdentifier}/versions/{flowVersion}/",
      DeleteKnowledgeBase: "DELETE /knowledgebases/{knowledgeBaseId}",
      DeleteKnowledgeBaseDocuments:
        "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents/deleteDocuments",
      DeletePrompt: "DELETE /prompts/{promptIdentifier}/",
      DisassociateAgentCollaborator:
        "DELETE /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/",
      DisassociateAgentKnowledgeBase:
        "DELETE /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/",
      GetAgent: "GET /agents/{agentId}/",
      GetAgentActionGroup:
        "GET /agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/",
      GetAgentAlias: "GET /agents/{agentId}/agentaliases/{agentAliasId}/",
      GetAgentCollaborator:
        "GET /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/",
      GetAgentKnowledgeBase:
        "GET /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/",
      GetAgentVersion: "GET /agents/{agentId}/agentversions/{agentVersion}/",
      GetDataSource:
        "GET /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}",
      GetFlow: "GET /flows/{flowIdentifier}/",
      GetFlowAlias: "GET /flows/{flowIdentifier}/aliases/{aliasIdentifier}",
      GetFlowVersion: "GET /flows/{flowIdentifier}/versions/{flowVersion}/",
      GetIngestionJob:
        "GET /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}",
      GetKnowledgeBase: "GET /knowledgebases/{knowledgeBaseId}",
      GetKnowledgeBaseDocuments:
        "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents/getDocuments",
      GetPrompt: "GET /prompts/{promptIdentifier}/",
      IngestKnowledgeBaseDocuments:
        "PUT /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents",
      ListAgentActionGroups:
        "POST /agents/{agentId}/agentversions/{agentVersion}/actiongroups/",
      ListAgentAliases: "POST /agents/{agentId}/agentaliases/",
      ListAgentCollaborators:
        "POST /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/",
      ListAgentKnowledgeBases:
        "POST /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/",
      ListAgentVersions: "POST /agents/{agentId}/agentversions/",
      ListAgents: "POST /agents/",
      ListDataSources: "POST /knowledgebases/{knowledgeBaseId}/datasources/",
      ListFlowAliases: "GET /flows/{flowIdentifier}/aliases",
      ListFlowVersions: "GET /flows/{flowIdentifier}/versions",
      ListFlows: "GET /flows/",
      ListIngestionJobs:
        "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/",
      ListKnowledgeBaseDocuments:
        "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/documents",
      ListKnowledgeBases: "POST /knowledgebases/",
      ListPrompts: "GET /prompts/",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PrepareAgent: "POST /agents/{agentId}/",
      PrepareFlow: "POST /flows/{flowIdentifier}/",
      StartIngestionJob:
        "PUT /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/",
      StopIngestionJob:
        "POST /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}/stop",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateAgent: "PUT /agents/{agentId}/",
      UpdateAgentActionGroup:
        "PUT /agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/",
      UpdateAgentAlias: "PUT /agents/{agentId}/agentaliases/{agentAliasId}/",
      UpdateAgentCollaborator:
        "PUT /agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/",
      UpdateAgentKnowledgeBase:
        "PUT /agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/",
      UpdateDataSource:
        "PUT /knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}",
      UpdateFlow: "PUT /flows/{flowIdentifier}/",
      UpdateFlowAlias: "PUT /flows/{flowIdentifier}/aliases/{aliasIdentifier}",
      UpdateKnowledgeBase: "PUT /knowledgebases/{knowledgeBaseId}",
      UpdatePrompt: "PUT /prompts/{promptIdentifier}/",
    },
  },
  bedrockagentruntime: {
    sdkId: "Bedrock Agent Runtime",
    version: "2023-07-26",
    arnNamespace: "bedrock",
    cloudTrailEventSource: "bedrock.amazonaws.com",
    endpointPrefix: "bedrock-agent-runtime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateInvocation: "PUT /sessions/{sessionIdentifier}/invocations/",
      CreateSession: "PUT /sessions/",
      DeleteAgentMemory:
        "DELETE /agents/{agentId}/agentAliases/{agentAliasId}/memories",
      DeleteSession: "DELETE /sessions/{sessionIdentifier}/",
      EndSession: "PATCH /sessions/{sessionIdentifier}",
      GenerateQuery: "POST /generateQuery",
      GetAgentMemory:
        "GET /agents/{agentId}/agentAliases/{agentAliasId}/memories",
      GetExecutionFlowSnapshot:
        "GET /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/flowsnapshot",
      GetFlowExecution:
        "GET /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}",
      GetInvocationStep:
        "POST /sessions/{sessionIdentifier}/invocationSteps/{invocationStepId}",
      GetSession: "GET /sessions/{sessionIdentifier}/",
      InvokeAgent: {
        http: "POST /agents/{agentId}/agentAliases/{agentAliasId}/sessions/{sessionId}/text",
        traits: {
          completion: "httpPayload",
          contentType: "x-amzn-bedrock-agent-content-type",
          sessionId: "x-amz-bedrock-agent-session-id",
          memoryId: "x-amz-bedrock-agent-memory-id",
        },
      },
      InvokeFlow: {
        http: "POST /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}",
        traits: {
          responseStream: "httpPayload",
          executionId: "x-amz-bedrock-flow-execution-id",
        },
      },
      InvokeInlineAgent: {
        http: "POST /agents/{sessionId}",
        traits: {
          completion: "httpPayload",
          contentType: "x-amzn-bedrock-agent-content-type",
          sessionId: "x-amz-bedrock-agent-session-id",
        },
      },
      ListFlowExecutionEvents:
        "GET /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/events",
      ListFlowExecutions: "GET /flows/{flowIdentifier}/executions",
      ListInvocationSteps:
        "POST /sessions/{sessionIdentifier}/invocationSteps/",
      ListInvocations: "POST /sessions/{sessionIdentifier}/invocations/",
      ListSessions: "POST /sessions/",
      ListTagsForResource: "GET /tags/{resourceArn}",
      OptimizePrompt: {
        http: "POST /optimize-prompt",
        traits: {
          optimizedPrompt: "httpPayload",
        },
      },
      PutInvocationStep: "PUT /sessions/{sessionIdentifier}/invocationSteps/",
      Rerank: "POST /rerank",
      Retrieve: "POST /knowledgebases/{knowledgeBaseId}/retrieve",
      RetrieveAndGenerate: "POST /retrieveAndGenerate",
      RetrieveAndGenerateStream: {
        http: "POST /retrieveAndGenerateStream",
        traits: {
          stream: "httpPayload",
          sessionId: "x-amzn-bedrock-knowledge-base-session-id",
        },
      },
      StartFlowExecution:
        "POST /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions",
      StopFlowExecution:
        "POST /flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/stop",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateSession: "PUT /sessions/{sessionIdentifier}/",
    },
  },
  bedrockagentcore: {
    sdkId: "Bedrock AgentCore",
    version: "2024-02-28",
    arnNamespace: "bedrock-agentcore",
    cloudTrailEventSource: "bedrock-agentcore.amazonaws.com",
    endpointPrefix: "bedrock-agentcore",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetResourceApiKey: "POST /identities/api-key",
      GetResourceOauth2Token: "POST /identities/oauth2/token",
      GetWorkloadAccessToken: "POST /identities/GetWorkloadAccessToken",
      GetWorkloadAccessTokenForJWT:
        "POST /identities/GetWorkloadAccessTokenForJWT",
      GetWorkloadAccessTokenForUserId:
        "POST /identities/GetWorkloadAccessTokenForUserId",
      InvokeCodeInterpreter: {
        http: "POST /code-interpreters/{codeInterpreterIdentifier}/tools/invoke",
        traits: {
          sessionId: "x-amzn-code-interpreter-session-id",
          stream: "httpPayload",
        },
      },
      CreateEvent: "POST /memories/{memoryId}/events",
      DeleteEvent:
        "DELETE /memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}",
      DeleteMemoryRecord:
        "DELETE /memories/{memoryId}/memoryRecords/{memoryRecordId}",
      GetBrowserSession: "GET /browsers/{browserIdentifier}/sessions/get",
      GetCodeInterpreterSession:
        "GET /code-interpreters/{codeInterpreterIdentifier}/sessions/get",
      GetEvent:
        "GET /memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}",
      GetMemoryRecord: "GET /memories/{memoryId}/memoryRecord/{memoryRecordId}",
      InvokeAgentRuntime: {
        http: "POST /runtimes/{agentRuntimeArn}/invocations",
        traits: {
          runtimeSessionId: "X-Amzn-Bedrock-AgentCore-Runtime-Session-Id",
          mcpSessionId: "Mcp-Session-Id",
          mcpProtocolVersion: "Mcp-Protocol-Version",
          traceId: "X-Amzn-Trace-Id",
          traceParent: "traceparent",
          traceState: "tracestate",
          baggage: "baggage",
          contentType: "Content-Type",
          response: "httpPayload",
          statusCode: "httpResponseCode",
        },
      },
      ListActors: "POST /memories/{memoryId}/actors",
      ListBrowserSessions: "POST /browsers/{browserIdentifier}/sessions/list",
      ListCodeInterpreterSessions:
        "POST /code-interpreters/{codeInterpreterIdentifier}/sessions/list",
      ListEvents:
        "POST /memories/{memoryId}/actor/{actorId}/sessions/{sessionId}",
      ListMemoryRecords: "POST /memories/{memoryId}/memoryRecords",
      ListSessions: "POST /memories/{memoryId}/actor/{actorId}/sessions",
      RetrieveMemoryRecords: "POST /memories/{memoryId}/retrieve",
      StartBrowserSession: "PUT /browsers/{browserIdentifier}/sessions/start",
      StartCodeInterpreterSession:
        "PUT /code-interpreters/{codeInterpreterIdentifier}/sessions/start",
      StopBrowserSession: "PUT /browsers/{browserIdentifier}/sessions/stop",
      StopCodeInterpreterSession:
        "PUT /code-interpreters/{codeInterpreterIdentifier}/sessions/stop",
      UpdateBrowserStream:
        "PUT /browsers/{browserIdentifier}/sessions/streams/update",
    },
  },
  bedrockagentcorecontrol: {
    sdkId: "Bedrock AgentCore Control",
    version: "2023-06-05",
    arnNamespace: "bedrock-agentcore",
    cloudTrailEventSource: "bedrock-agentcore.amazonaws.com",
    endpointPrefix: "bedrock-agentcore-control",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetTokenVault: "POST /identities/get-token-vault",
      SetTokenVaultCMK: "POST /identities/set-token-vault-cmk",
      CreateAgentRuntime: "PUT /runtimes/",
      CreateAgentRuntimeEndpoint:
        "PUT /runtimes/{agentRuntimeId}/runtime-endpoints/",
      CreateApiKeyCredentialProvider:
        "POST /identities/CreateApiKeyCredentialProvider",
      CreateBrowser: "PUT /browsers",
      CreateCodeInterpreter: "PUT /code-interpreters",
      CreateGateway: "POST /gateways/",
      CreateGatewayTarget: "POST /gateways/{gatewayIdentifier}/targets/",
      CreateMemory: "POST /memories/create",
      CreateOauth2CredentialProvider:
        "POST /identities/CreateOauth2CredentialProvider",
      CreateWorkloadIdentity: "POST /identities/CreateWorkloadIdentity",
      DeleteAgentRuntime: "DELETE /runtimes/{agentRuntimeId}/",
      DeleteAgentRuntimeEndpoint:
        "DELETE /runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/",
      DeleteApiKeyCredentialProvider:
        "POST /identities/DeleteApiKeyCredentialProvider",
      DeleteBrowser: "DELETE /browsers/{browserId}",
      DeleteCodeInterpreter: "DELETE /code-interpreters/{codeInterpreterId}",
      DeleteGateway: "DELETE /gateways/{gatewayIdentifier}/",
      DeleteGatewayTarget:
        "DELETE /gateways/{gatewayIdentifier}/targets/{targetId}/",
      DeleteMemory: "DELETE /memories/{memoryId}/delete",
      DeleteOauth2CredentialProvider:
        "POST /identities/DeleteOauth2CredentialProvider",
      DeleteWorkloadIdentity: "POST /identities/DeleteWorkloadIdentity",
      GetAgentRuntime: "GET /runtimes/{agentRuntimeId}/",
      GetAgentRuntimeEndpoint:
        "GET /runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/",
      GetApiKeyCredentialProvider:
        "POST /identities/GetApiKeyCredentialProvider",
      GetBrowser: "GET /browsers/{browserId}",
      GetCodeInterpreter: "GET /code-interpreters/{codeInterpreterId}",
      GetGateway: "GET /gateways/{gatewayIdentifier}/",
      GetGatewayTarget: "GET /gateways/{gatewayIdentifier}/targets/{targetId}/",
      GetMemory: "GET /memories/{memoryId}/details",
      GetOauth2CredentialProvider:
        "POST /identities/GetOauth2CredentialProvider",
      GetWorkloadIdentity: "POST /identities/GetWorkloadIdentity",
      ListAgentRuntimeEndpoints:
        "POST /runtimes/{agentRuntimeId}/runtime-endpoints/",
      ListAgentRuntimeVersions: "POST /runtimes/{agentRuntimeId}/versions/",
      ListAgentRuntimes: "POST /runtimes/",
      ListApiKeyCredentialProviders:
        "POST /identities/ListApiKeyCredentialProviders",
      ListBrowsers: "POST /browsers",
      ListCodeInterpreters: "POST /code-interpreters",
      ListGatewayTargets: "GET /gateways/{gatewayIdentifier}/targets/",
      ListGateways: "GET /gateways/",
      ListMemories: "POST /memories/",
      ListOauth2CredentialProviders:
        "POST /identities/ListOauth2CredentialProviders",
      ListWorkloadIdentities: "POST /identities/ListWorkloadIdentities",
      UpdateAgentRuntime: "PUT /runtimes/{agentRuntimeId}/",
      UpdateAgentRuntimeEndpoint:
        "PUT /runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/",
      UpdateApiKeyCredentialProvider:
        "POST /identities/UpdateApiKeyCredentialProvider",
      UpdateGateway: "PUT /gateways/{gatewayIdentifier}/",
      UpdateGatewayTarget:
        "PUT /gateways/{gatewayIdentifier}/targets/{targetId}/",
      UpdateMemory: "PUT /memories/{memoryId}/update",
      UpdateOauth2CredentialProvider:
        "POST /identities/UpdateOauth2CredentialProvider",
      UpdateWorkloadIdentity: "POST /identities/UpdateWorkloadIdentity",
    },
  },
  bedrockdataautomation: {
    sdkId: "Bedrock Data Automation",
    version: "2023-07-26",
    arnNamespace: "bedrock",
    cloudTrailEventSource: "bedrock.amazonaws.com",
    endpointPrefix: "bedrock-data-automation",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateBlueprintVersion: "POST /blueprints/{blueprintArn}/versions/",
      ListTagsForResource: "POST /listTagsForResource",
      TagResource: "POST /tagResource",
      UntagResource: "POST /untagResource",
      CreateBlueprint: "PUT /blueprints/",
      CreateDataAutomationProject: "PUT /data-automation-projects/",
      DeleteBlueprint: "DELETE /blueprints/{blueprintArn}/",
      DeleteDataAutomationProject:
        "DELETE /data-automation-projects/{projectArn}/",
      GetBlueprint: "POST /blueprints/{blueprintArn}/",
      GetDataAutomationProject: "POST /data-automation-projects/{projectArn}/",
      ListBlueprints: "POST /blueprints/",
      ListDataAutomationProjects: "POST /data-automation-projects/",
      UpdateBlueprint: "PUT /blueprints/{blueprintArn}/",
      UpdateDataAutomationProject:
        "PUT /data-automation-projects/{projectArn}/",
    },
  },
  bedrockdataautomationruntime: {
    sdkId: "Bedrock Data Automation Runtime",
    version: "2024-06-13",
    arnNamespace: "bedrock",
    cloudTrailEventSource: "bedrock.amazonaws.com",
    endpointPrefix: "bedrock-data-automation-runtime",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonBedrockKeystoneRuntimeService",
  },
  bedrockruntime: {
    sdkId: "Bedrock Runtime",
    version: "2023-09-30",
    arnNamespace: "",
    cloudTrailEventSource: "bedrock.amazonaws.com",
    endpointPrefix: "bedrock-runtime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ApplyGuardrail:
        "POST /guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply",
      Converse: "POST /model/{modelId}/converse",
      ConverseStream: {
        http: "POST /model/{modelId}/converse-stream",
        traits: {
          stream: "httpPayload",
        },
      },
      GetAsyncInvoke: "GET /async-invoke/{invocationArn}",
      InvokeModel: {
        http: "POST /model/{modelId}/invoke",
        traits: {
          body: "httpPayload",
          contentType: "Content-Type",
          performanceConfigLatency: "X-Amzn-Bedrock-PerformanceConfig-Latency",
        },
      },
      InvokeModelWithBidirectionalStream: {
        http: "POST /model/{modelId}/invoke-with-bidirectional-stream",
        traits: {
          body: "httpPayload",
        },
      },
      InvokeModelWithResponseStream: {
        http: "POST /model/{modelId}/invoke-with-response-stream",
        traits: {
          body: "httpPayload",
          contentType: "X-Amzn-Bedrock-Content-Type",
          performanceConfigLatency: "X-Amzn-Bedrock-PerformanceConfig-Latency",
        },
      },
      ListAsyncInvokes: "GET /async-invoke",
      StartAsyncInvoke: "POST /async-invoke",
    },
  },
  billing: {
    sdkId: "Billing",
    version: "2023-09-07",
    arnNamespace: "billing",
    cloudTrailEventSource: "billing.amazonaws.com",
    endpointPrefix: "billing",
    protocol: "awsJson1_0",
    targetPrefix: "AWSBilling",
  },
  billingconductor: {
    sdkId: "billingconductor",
    version: "2021-07-30",
    arnNamespace: "billingconductor",
    cloudTrailEventSource: "billingconductor.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetBillingGroupCostReport: "POST /get-billing-group-cost-report",
      ListAccountAssociations: "POST /list-account-associations",
      ListBillingGroupCostReports: "POST /list-billing-group-cost-reports",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      AssociateAccounts: "POST /associate-accounts",
      AssociatePricingRules: "PUT /associate-pricing-rules",
      BatchAssociateResourcesToCustomLineItem:
        "PUT /batch-associate-resources-to-custom-line-item",
      BatchDisassociateResourcesFromCustomLineItem:
        "PUT /batch-disassociate-resources-from-custom-line-item",
      CreateBillingGroup: "POST /create-billing-group",
      CreateCustomLineItem: "POST /create-custom-line-item",
      CreatePricingPlan: "POST /create-pricing-plan",
      CreatePricingRule: "POST /create-pricing-rule",
      DeleteBillingGroup: "POST /delete-billing-group",
      DeleteCustomLineItem: "POST /delete-custom-line-item",
      DeletePricingPlan: "POST /delete-pricing-plan",
      DeletePricingRule: "POST /delete-pricing-rule",
      DisassociateAccounts: "POST /disassociate-accounts",
      DisassociatePricingRules: "PUT /disassociate-pricing-rules",
      ListBillingGroups: "POST /list-billing-groups",
      ListCustomLineItemVersions: "POST /list-custom-line-item-versions",
      ListCustomLineItems: "POST /list-custom-line-items",
      ListPricingPlans: "POST /list-pricing-plans",
      ListPricingPlansAssociatedWithPricingRule:
        "POST /list-pricing-plans-associated-with-pricing-rule",
      ListPricingRules: "POST /list-pricing-rules",
      ListPricingRulesAssociatedToPricingPlan:
        "POST /list-pricing-rules-associated-to-pricing-plan",
      ListResourcesAssociatedToCustomLineItem:
        "POST /list-resources-associated-to-custom-line-item",
      UpdateBillingGroup: "POST /update-billing-group",
      UpdateCustomLineItem: "POST /update-custom-line-item",
      UpdatePricingPlan: "PUT /update-pricing-plan",
      UpdatePricingRule: "PUT /update-pricing-rule",
    },
  },
  braket: {
    sdkId: "Braket",
    version: "2019-09-01",
    arnNamespace: "",
    cloudTrailEventSource: "braket.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CancelJob: "PUT /job/{jobArn}/cancel",
      CancelQuantumTask: "PUT /quantum-task/{quantumTaskArn}/cancel",
      CreateJob: "POST /job",
      CreateQuantumTask: "POST /quantum-task",
      GetDevice: "GET /device/{deviceArn}",
      GetJob: "GET /job/{jobArn}",
      GetQuantumTask: "GET /quantum-task/{quantumTaskArn}",
      SearchDevices: "POST /devices",
      SearchJobs: "POST /jobs",
      SearchQuantumTasks: "POST /quantum-tasks",
    },
  },
  budgets: {
    sdkId: "Budgets",
    version: "2016-10-20",
    arnNamespace: "budgets",
    cloudTrailEventSource: "budgets.amazonaws.com",
    endpointPrefix: "budgets",
    protocol: "awsJson1_1",
    targetPrefix: "AWSBudgetServiceGateway",
  },
  chatbot: {
    sdkId: "chatbot",
    version: "2017-10-11",
    arnNamespace: "chatbot",
    cloudTrailEventSource: "chatbot.amazonaws.com",
    endpointPrefix: "chatbot",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateToConfiguration: "POST /associate-to-configuration",
      CreateChimeWebhookConfiguration:
        "POST /create-chime-webhook-configuration",
      CreateMicrosoftTeamsChannelConfiguration:
        "POST /create-ms-teams-channel-configuration",
      CreateSlackChannelConfiguration:
        "POST /create-slack-channel-configuration",
      DeleteChimeWebhookConfiguration:
        "POST /delete-chime-webhook-configuration",
      DeleteMicrosoftTeamsChannelConfiguration:
        "POST /delete-ms-teams-channel-configuration",
      DeleteMicrosoftTeamsConfiguredTeam:
        "POST /delete-ms-teams-configured-teams",
      DeleteMicrosoftTeamsUserIdentity: "POST /delete-ms-teams-user-identity",
      DeleteSlackChannelConfiguration:
        "POST /delete-slack-channel-configuration",
      DeleteSlackUserIdentity: "POST /delete-slack-user-identity",
      DeleteSlackWorkspaceAuthorization:
        "POST /delete-slack-workspace-authorization",
      DescribeChimeWebhookConfigurations:
        "POST /describe-chime-webhook-configurations",
      DescribeSlackChannelConfigurations:
        "POST /describe-slack-channel-configurations",
      DescribeSlackUserIdentities: "POST /describe-slack-user-identities",
      DescribeSlackWorkspaces: "POST /describe-slack-workspaces",
      DisassociateFromConfiguration: "POST /disassociate-from-configuration",
      GetAccountPreferences: "POST /get-account-preferences",
      GetMicrosoftTeamsChannelConfiguration:
        "POST /get-ms-teams-channel-configuration",
      ListAssociations: "POST /list-associations",
      ListMicrosoftTeamsChannelConfigurations:
        "POST /list-ms-teams-channel-configurations",
      ListMicrosoftTeamsConfiguredTeams: "POST /list-ms-teams-configured-teams",
      ListMicrosoftTeamsUserIdentities: "POST /list-ms-teams-user-identities",
      ListTagsForResource: "POST /list-tags-for-resource",
      TagResource: "POST /tag-resource",
      UntagResource: "POST /untag-resource",
      UpdateAccountPreferences: "POST /update-account-preferences",
      UpdateChimeWebhookConfiguration:
        "POST /update-chime-webhook-configuration",
      UpdateMicrosoftTeamsChannelConfiguration:
        "POST /update-ms-teams-channel-configuration",
      UpdateSlackChannelConfiguration:
        "POST /update-slack-channel-configuration",
      CreateCustomAction: "POST /create-custom-action",
      DeleteCustomAction: "POST /delete-custom-action",
      GetCustomAction: "POST /get-custom-action",
      ListCustomActions: "POST /list-custom-actions",
      UpdateCustomAction: "POST /update-custom-action",
    },
  },
  chime: {
    sdkId: "Chime",
    version: "2018-05-01",
    arnNamespace: "chime",
    cloudTrailEventSource: "chime.amazonaws.com",
    endpointPrefix: "chime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociatePhoneNumberWithUser:
        "POST /accounts/{AccountId}/users/{UserId}?operation=associate-phone-number",
      AssociateSigninDelegateGroupsWithAccount:
        "POST /accounts/{AccountId}?operation=associate-signin-delegate-groups",
      BatchCreateRoomMembership:
        "POST /accounts/{AccountId}/rooms/{RoomId}/memberships?operation=batch-create",
      BatchDeletePhoneNumber: "POST /phone-numbers?operation=batch-delete",
      BatchSuspendUser: "POST /accounts/{AccountId}/users?operation=suspend",
      BatchUnsuspendUser:
        "POST /accounts/{AccountId}/users?operation=unsuspend",
      BatchUpdatePhoneNumber: "POST /phone-numbers?operation=batch-update",
      BatchUpdateUser: "POST /accounts/{AccountId}/users",
      CreateAccount: "POST /accounts",
      CreateBot: "POST /accounts/{AccountId}/bots",
      CreateMeetingDialOut: "POST /meetings/{MeetingId}/dial-outs",
      CreatePhoneNumberOrder: "POST /phone-number-orders",
      CreateRoom: "POST /accounts/{AccountId}/rooms",
      CreateRoomMembership:
        "POST /accounts/{AccountId}/rooms/{RoomId}/memberships",
      CreateUser: "POST /accounts/{AccountId}/users?operation=create",
      DeleteAccount: "DELETE /accounts/{AccountId}",
      DeleteEventsConfiguration:
        "DELETE /accounts/{AccountId}/bots/{BotId}/events-configuration",
      DeletePhoneNumber: "DELETE /phone-numbers/{PhoneNumberId}",
      DeleteRoom: "DELETE /accounts/{AccountId}/rooms/{RoomId}",
      DeleteRoomMembership:
        "DELETE /accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}",
      DisassociatePhoneNumberFromUser:
        "POST /accounts/{AccountId}/users/{UserId}?operation=disassociate-phone-number",
      DisassociateSigninDelegateGroupsFromAccount:
        "POST /accounts/{AccountId}?operation=disassociate-signin-delegate-groups",
      GetAccount: "GET /accounts/{AccountId}",
      GetAccountSettings: "GET /accounts/{AccountId}/settings",
      GetBot: "GET /accounts/{AccountId}/bots/{BotId}",
      GetEventsConfiguration:
        "GET /accounts/{AccountId}/bots/{BotId}/events-configuration",
      GetGlobalSettings: "GET /settings",
      GetPhoneNumber: "GET /phone-numbers/{PhoneNumberId}",
      GetPhoneNumberOrder: "GET /phone-number-orders/{PhoneNumberOrderId}",
      GetPhoneNumberSettings: "GET /settings/phone-number",
      GetRetentionSettings: "GET /accounts/{AccountId}/retention-settings",
      GetRoom: "GET /accounts/{AccountId}/rooms/{RoomId}",
      GetUser: "GET /accounts/{AccountId}/users/{UserId}",
      GetUserSettings: "GET /accounts/{AccountId}/users/{UserId}/settings",
      InviteUsers: "POST /accounts/{AccountId}/users?operation=add",
      ListAccounts: "GET /accounts",
      ListBots: "GET /accounts/{AccountId}/bots",
      ListPhoneNumberOrders: "GET /phone-number-orders",
      ListPhoneNumbers: "GET /phone-numbers",
      ListRoomMemberships:
        "GET /accounts/{AccountId}/rooms/{RoomId}/memberships",
      ListRooms: "GET /accounts/{AccountId}/rooms",
      ListSupportedPhoneNumberCountries: "GET /phone-number-countries",
      ListUsers: "GET /accounts/{AccountId}/users",
      LogoutUser: "POST /accounts/{AccountId}/users/{UserId}?operation=logout",
      PutEventsConfiguration:
        "PUT /accounts/{AccountId}/bots/{BotId}/events-configuration",
      PutRetentionSettings: "PUT /accounts/{AccountId}/retention-settings",
      RedactConversationMessage:
        "POST /accounts/{AccountId}/conversations/{ConversationId}/messages/{MessageId}?operation=redact",
      RedactRoomMessage:
        "POST /accounts/{AccountId}/rooms/{RoomId}/messages/{MessageId}?operation=redact",
      RegenerateSecurityToken:
        "POST /accounts/{AccountId}/bots/{BotId}?operation=regenerate-security-token",
      ResetPersonalPIN:
        "POST /accounts/{AccountId}/users/{UserId}?operation=reset-personal-pin",
      RestorePhoneNumber:
        "POST /phone-numbers/{PhoneNumberId}?operation=restore",
      SearchAvailablePhoneNumbers: "GET /search?type=phone-numbers",
      UpdateAccount: "POST /accounts/{AccountId}",
      UpdateAccountSettings: "PUT /accounts/{AccountId}/settings",
      UpdateBot: "POST /accounts/{AccountId}/bots/{BotId}",
      UpdateGlobalSettings: "PUT /settings",
      UpdatePhoneNumber: "POST /phone-numbers/{PhoneNumberId}",
      UpdatePhoneNumberSettings: "PUT /settings/phone-number",
      UpdateRoom: "POST /accounts/{AccountId}/rooms/{RoomId}",
      UpdateRoomMembership:
        "POST /accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}",
      UpdateUser: "POST /accounts/{AccountId}/users/{UserId}",
      UpdateUserSettings: "PUT /accounts/{AccountId}/users/{UserId}/settings",
    },
  },
  chimesdkidentity: {
    sdkId: "Chime SDK Identity",
    version: "2021-04-20",
    arnNamespace: "chime",
    cloudTrailEventSource: "chimesdkidentity.amazonaws.com",
    endpointPrefix: "identity-chime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateAppInstance: "POST /app-instances",
      CreateAppInstanceAdmin: "POST /app-instances/{AppInstanceArn}/admins",
      CreateAppInstanceBot: "POST /app-instance-bots",
      CreateAppInstanceUser: "POST /app-instance-users",
      DeleteAppInstance: "DELETE /app-instances/{AppInstanceArn}",
      DeleteAppInstanceAdmin:
        "DELETE /app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}",
      DeleteAppInstanceBot: "DELETE /app-instance-bots/{AppInstanceBotArn}",
      DeleteAppInstanceUser: "DELETE /app-instance-users/{AppInstanceUserArn}",
      DeregisterAppInstanceUserEndpoint:
        "DELETE /app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}",
      DescribeAppInstance: "GET /app-instances/{AppInstanceArn}",
      DescribeAppInstanceAdmin:
        "GET /app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}",
      DescribeAppInstanceBot: "GET /app-instance-bots/{AppInstanceBotArn}",
      DescribeAppInstanceUser: "GET /app-instance-users/{AppInstanceUserArn}",
      DescribeAppInstanceUserEndpoint:
        "GET /app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}",
      GetAppInstanceRetentionSettings:
        "GET /app-instances/{AppInstanceArn}/retention-settings",
      ListAppInstanceAdmins: "GET /app-instances/{AppInstanceArn}/admins",
      ListAppInstanceBots: "GET /app-instance-bots",
      ListAppInstances: "GET /app-instances",
      ListAppInstanceUserEndpoints:
        "GET /app-instance-users/{AppInstanceUserArn}/endpoints",
      ListAppInstanceUsers: "GET /app-instance-users",
      ListTagsForResource: "GET /tags",
      PutAppInstanceRetentionSettings:
        "PUT /app-instances/{AppInstanceArn}/retention-settings",
      PutAppInstanceUserExpirationSettings:
        "PUT /app-instance-users/{AppInstanceUserArn}/expiration-settings",
      RegisterAppInstanceUserEndpoint:
        "POST /app-instance-users/{AppInstanceUserArn}/endpoints",
      TagResource: "POST /tags?operation=tag-resource",
      UntagResource: "POST /tags?operation=untag-resource",
      UpdateAppInstance: "PUT /app-instances/{AppInstanceArn}",
      UpdateAppInstanceBot: "PUT /app-instance-bots/{AppInstanceBotArn}",
      UpdateAppInstanceUser: "PUT /app-instance-users/{AppInstanceUserArn}",
      UpdateAppInstanceUserEndpoint:
        "PUT /app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}",
    },
  },
  chimesdkmediapipelines: {
    sdkId: "Chime SDK Media Pipelines",
    version: "2021-07-15",
    arnNamespace: "chime",
    cloudTrailEventSource: "chimesdkmediapipelines.amazonaws.com",
    endpointPrefix: "media-pipelines-chime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateMediaCapturePipeline: "POST /sdk-media-capture-pipelines",
      CreateMediaConcatenationPipeline:
        "POST /sdk-media-concatenation-pipelines",
      CreateMediaInsightsPipeline: "POST /media-insights-pipelines",
      CreateMediaInsightsPipelineConfiguration:
        "POST /media-insights-pipeline-configurations",
      CreateMediaLiveConnectorPipeline:
        "POST /sdk-media-live-connector-pipelines",
      CreateMediaPipelineKinesisVideoStreamPool:
        "POST /media-pipeline-kinesis-video-stream-pools",
      CreateMediaStreamPipeline: "POST /sdk-media-stream-pipelines",
      DeleteMediaCapturePipeline:
        "DELETE /sdk-media-capture-pipelines/{MediaPipelineId}",
      DeleteMediaInsightsPipelineConfiguration:
        "DELETE /media-insights-pipeline-configurations/{Identifier}",
      DeleteMediaPipeline: "DELETE /sdk-media-pipelines/{MediaPipelineId}",
      DeleteMediaPipelineKinesisVideoStreamPool:
        "DELETE /media-pipeline-kinesis-video-stream-pools/{Identifier}",
      GetMediaCapturePipeline:
        "GET /sdk-media-capture-pipelines/{MediaPipelineId}",
      GetMediaInsightsPipelineConfiguration:
        "GET /media-insights-pipeline-configurations/{Identifier}",
      GetMediaPipeline: "GET /sdk-media-pipelines/{MediaPipelineId}",
      GetMediaPipelineKinesisVideoStreamPool:
        "GET /media-pipeline-kinesis-video-stream-pools/{Identifier}",
      GetSpeakerSearchTask:
        "GET /media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}",
      GetVoiceToneAnalysisTask:
        "GET /media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}",
      ListMediaCapturePipelines: "GET /sdk-media-capture-pipelines",
      ListMediaInsightsPipelineConfigurations:
        "GET /media-insights-pipeline-configurations",
      ListMediaPipelineKinesisVideoStreamPools:
        "GET /media-pipeline-kinesis-video-stream-pools",
      ListMediaPipelines: "GET /sdk-media-pipelines",
      ListTagsForResource: "GET /tags",
      StartSpeakerSearchTask:
        "POST /media-insights-pipelines/{Identifier}/speaker-search-tasks?operation=start",
      StartVoiceToneAnalysisTask:
        "POST /media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks?operation=start",
      StopSpeakerSearchTask:
        "POST /media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop",
      StopVoiceToneAnalysisTask:
        "POST /media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop",
      TagResource: "POST /tags?operation=tag-resource",
      UntagResource: "POST /tags?operation=untag-resource",
      UpdateMediaInsightsPipelineConfiguration:
        "PUT /media-insights-pipeline-configurations/{Identifier}",
      UpdateMediaInsightsPipelineStatus:
        "PUT /media-insights-pipeline-status/{Identifier}",
      UpdateMediaPipelineKinesisVideoStreamPool:
        "PUT /media-pipeline-kinesis-video-stream-pools/{Identifier}",
    },
  },
  chimesdkmeetings: {
    sdkId: "Chime SDK Meetings",
    version: "2021-07-15",
    arnNamespace: "chime",
    cloudTrailEventSource: "chimesdkmeetings.amazonaws.com",
    endpointPrefix: "meetings-chime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchCreateAttendee:
        "POST /meetings/{MeetingId}/attendees?operation=batch-create",
      BatchUpdateAttendeeCapabilitiesExcept:
        "PUT /meetings/{MeetingId}/attendees/capabilities?operation=batch-update-except",
      CreateAttendee: "POST /meetings/{MeetingId}/attendees",
      CreateMeeting: "POST /meetings",
      CreateMeetingWithAttendees: "POST /meetings?operation=create-attendees",
      DeleteAttendee: "DELETE /meetings/{MeetingId}/attendees/{AttendeeId}",
      DeleteMeeting: "DELETE /meetings/{MeetingId}",
      GetAttendee: "GET /meetings/{MeetingId}/attendees/{AttendeeId}",
      GetMeeting: "GET /meetings/{MeetingId}",
      ListAttendees: "GET /meetings/{MeetingId}/attendees",
      ListTagsForResource: "GET /tags",
      StartMeetingTranscription:
        "POST /meetings/{MeetingId}/transcription?operation=start",
      StopMeetingTranscription:
        "POST /meetings/{MeetingId}/transcription?operation=stop",
      TagResource: "POST /tags?operation=tag-resource",
      UntagResource: "POST /tags?operation=untag-resource",
      UpdateAttendeeCapabilities:
        "PUT /meetings/{MeetingId}/attendees/{AttendeeId}/capabilities",
    },
  },
  chimesdkmessaging: {
    sdkId: "Chime SDK Messaging",
    version: "2021-05-15",
    arnNamespace: "chime",
    cloudTrailEventSource: "chimesdkmessaging.amazonaws.com",
    endpointPrefix: "messaging-chime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateChannelFlow: "PUT /channels/{ChannelArn}/channel-flow",
      BatchCreateChannelMembership:
        "POST /channels/{ChannelArn}/memberships?operation=batch-create",
      ChannelFlowCallback:
        "POST /channels/{ChannelArn}?operation=channel-flow-callback",
      CreateChannel: "POST /channels",
      CreateChannelBan: "POST /channels/{ChannelArn}/bans",
      CreateChannelFlow: "POST /channel-flows",
      CreateChannelMembership: "POST /channels/{ChannelArn}/memberships",
      CreateChannelModerator: "POST /channels/{ChannelArn}/moderators",
      DeleteChannel: "DELETE /channels/{ChannelArn}",
      DeleteChannelBan: "DELETE /channels/{ChannelArn}/bans/{MemberArn}",
      DeleteChannelFlow: "DELETE /channel-flows/{ChannelFlowArn}",
      DeleteChannelMembership:
        "DELETE /channels/{ChannelArn}/memberships/{MemberArn}",
      DeleteChannelMessage:
        "DELETE /channels/{ChannelArn}/messages/{MessageId}",
      DeleteChannelModerator:
        "DELETE /channels/{ChannelArn}/moderators/{ChannelModeratorArn}",
      DeleteMessagingStreamingConfigurations:
        "DELETE /app-instances/{AppInstanceArn}/streaming-configurations",
      DescribeChannel: "GET /channels/{ChannelArn}",
      DescribeChannelBan: "GET /channels/{ChannelArn}/bans/{MemberArn}",
      DescribeChannelFlow: "GET /channel-flows/{ChannelFlowArn}",
      DescribeChannelMembership:
        "GET /channels/{ChannelArn}/memberships/{MemberArn}",
      DescribeChannelMembershipForAppInstanceUser:
        "GET /channels/{ChannelArn}?scope=app-instance-user-membership",
      DescribeChannelModeratedByAppInstanceUser:
        "GET /channels/{ChannelArn}?scope=app-instance-user-moderated-channel",
      DescribeChannelModerator:
        "GET /channels/{ChannelArn}/moderators/{ChannelModeratorArn}",
      DisassociateChannelFlow:
        "DELETE /channels/{ChannelArn}/channel-flow/{ChannelFlowArn}",
      GetChannelMembershipPreferences:
        "GET /channels/{ChannelArn}/memberships/{MemberArn}/preferences",
      GetChannelMessage: "GET /channels/{ChannelArn}/messages/{MessageId}",
      GetChannelMessageStatus:
        "GET /channels/{ChannelArn}/messages/{MessageId}?scope=message-status",
      GetMessagingSessionEndpoint: "GET /endpoints/messaging-session",
      GetMessagingStreamingConfigurations:
        "GET /app-instances/{AppInstanceArn}/streaming-configurations",
      ListChannelBans: "GET /channels/{ChannelArn}/bans",
      ListChannelFlows: "GET /channel-flows",
      ListChannelMemberships: "GET /channels/{ChannelArn}/memberships",
      ListChannelMembershipsForAppInstanceUser:
        "GET /channels?scope=app-instance-user-memberships",
      ListChannelMessages: "GET /channels/{ChannelArn}/messages",
      ListChannelModerators: "GET /channels/{ChannelArn}/moderators",
      ListChannels: "GET /channels",
      ListChannelsAssociatedWithChannelFlow:
        "GET /channels?scope=channel-flow-associations",
      ListChannelsModeratedByAppInstanceUser:
        "GET /channels?scope=app-instance-user-moderated-channels",
      ListSubChannels: "GET /channels/{ChannelArn}/subchannels",
      ListTagsForResource: "GET /tags",
      PutChannelExpirationSettings:
        "PUT /channels/{ChannelArn}/expiration-settings",
      PutChannelMembershipPreferences:
        "PUT /channels/{ChannelArn}/memberships/{MemberArn}/preferences",
      PutMessagingStreamingConfigurations:
        "PUT /app-instances/{AppInstanceArn}/streaming-configurations",
      RedactChannelMessage:
        "POST /channels/{ChannelArn}/messages/{MessageId}?operation=redact",
      SearchChannels: "POST /channels?operation=search",
      SendChannelMessage: "POST /channels/{ChannelArn}/messages",
      TagResource: "POST /tags?operation=tag-resource",
      UntagResource: "POST /tags?operation=untag-resource",
      UpdateChannel: "PUT /channels/{ChannelArn}",
      UpdateChannelFlow: "PUT /channel-flows/{ChannelFlowArn}",
      UpdateChannelMessage: "PUT /channels/{ChannelArn}/messages/{MessageId}",
      UpdateChannelReadMarker: "PUT /channels/{ChannelArn}/readMarker",
    },
  },
  chimesdkvoice: {
    sdkId: "Chime SDK Voice",
    version: "2022-08-03",
    arnNamespace: "chime",
    cloudTrailEventSource: "chimesdkvoice.amazonaws.com",
    endpointPrefix: "voice-chime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociatePhoneNumbersWithVoiceConnector:
        "POST /voice-connectors/{VoiceConnectorId}?operation=associate-phone-numbers",
      AssociatePhoneNumbersWithVoiceConnectorGroup:
        "POST /voice-connector-groups/{VoiceConnectorGroupId}?operation=associate-phone-numbers",
      BatchDeletePhoneNumber: "POST /phone-numbers?operation=batch-delete",
      BatchUpdatePhoneNumber: "POST /phone-numbers?operation=batch-update",
      CreatePhoneNumberOrder: "POST /phone-number-orders",
      CreateProxySession:
        "POST /voice-connectors/{VoiceConnectorId}/proxy-sessions",
      CreateSipMediaApplication: "POST /sip-media-applications",
      CreateSipMediaApplicationCall:
        "POST /sip-media-applications/{SipMediaApplicationId}/calls",
      CreateSipRule: "POST /sip-rules",
      CreateVoiceConnector: "POST /voice-connectors",
      CreateVoiceConnectorGroup: "POST /voice-connector-groups",
      CreateVoiceProfile: "POST /voice-profiles",
      CreateVoiceProfileDomain: "POST /voice-profile-domains",
      DeletePhoneNumber: "DELETE /phone-numbers/{PhoneNumberId}",
      DeleteProxySession:
        "DELETE /voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}",
      DeleteSipMediaApplication:
        "DELETE /sip-media-applications/{SipMediaApplicationId}",
      DeleteSipRule: "DELETE /sip-rules/{SipRuleId}",
      DeleteVoiceConnector: "DELETE /voice-connectors/{VoiceConnectorId}",
      DeleteVoiceConnectorEmergencyCallingConfiguration:
        "DELETE /voice-connectors/{VoiceConnectorId}/emergency-calling-configuration",
      DeleteVoiceConnectorExternalSystemsConfiguration:
        "DELETE /voice-connectors/{VoiceConnectorId}/external-systems-configuration",
      DeleteVoiceConnectorGroup:
        "DELETE /voice-connector-groups/{VoiceConnectorGroupId}",
      DeleteVoiceConnectorOrigination:
        "DELETE /voice-connectors/{VoiceConnectorId}/origination",
      DeleteVoiceConnectorProxy:
        "DELETE /voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy",
      DeleteVoiceConnectorStreamingConfiguration:
        "DELETE /voice-connectors/{VoiceConnectorId}/streaming-configuration",
      DeleteVoiceConnectorTermination:
        "DELETE /voice-connectors/{VoiceConnectorId}/termination",
      DeleteVoiceConnectorTerminationCredentials:
        "POST /voice-connectors/{VoiceConnectorId}/termination/credentials?operation=delete",
      DeleteVoiceProfile: "DELETE /voice-profiles/{VoiceProfileId}",
      DeleteVoiceProfileDomain:
        "DELETE /voice-profile-domains/{VoiceProfileDomainId}",
      DisassociatePhoneNumbersFromVoiceConnector:
        "POST /voice-connectors/{VoiceConnectorId}?operation=disassociate-phone-numbers",
      DisassociatePhoneNumbersFromVoiceConnectorGroup:
        "POST /voice-connector-groups/{VoiceConnectorGroupId}?operation=disassociate-phone-numbers",
      GetGlobalSettings: "GET /settings",
      GetPhoneNumber: "GET /phone-numbers/{PhoneNumberId}",
      GetPhoneNumberOrder: "GET /phone-number-orders/{PhoneNumberOrderId}",
      GetPhoneNumberSettings: "GET /settings/phone-number",
      GetProxySession:
        "GET /voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}",
      GetSipMediaApplication:
        "GET /sip-media-applications/{SipMediaApplicationId}",
      GetSipMediaApplicationAlexaSkillConfiguration:
        "GET /sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration",
      GetSipMediaApplicationLoggingConfiguration:
        "GET /sip-media-applications/{SipMediaApplicationId}/logging-configuration",
      GetSipRule: "GET /sip-rules/{SipRuleId}",
      GetSpeakerSearchTask:
        "GET /voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}",
      GetVoiceConnector: "GET /voice-connectors/{VoiceConnectorId}",
      GetVoiceConnectorEmergencyCallingConfiguration:
        "GET /voice-connectors/{VoiceConnectorId}/emergency-calling-configuration",
      GetVoiceConnectorExternalSystemsConfiguration:
        "GET /voice-connectors/{VoiceConnectorId}/external-systems-configuration",
      GetVoiceConnectorGroup:
        "GET /voice-connector-groups/{VoiceConnectorGroupId}",
      GetVoiceConnectorLoggingConfiguration:
        "GET /voice-connectors/{VoiceConnectorId}/logging-configuration",
      GetVoiceConnectorOrigination:
        "GET /voice-connectors/{VoiceConnectorId}/origination",
      GetVoiceConnectorProxy:
        "GET /voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy",
      GetVoiceConnectorStreamingConfiguration:
        "GET /voice-connectors/{VoiceConnectorId}/streaming-configuration",
      GetVoiceConnectorTermination:
        "GET /voice-connectors/{VoiceConnectorId}/termination",
      GetVoiceConnectorTerminationHealth:
        "GET /voice-connectors/{VoiceConnectorId}/termination/health",
      GetVoiceProfile: "GET /voice-profiles/{VoiceProfileId}",
      GetVoiceProfileDomain:
        "GET /voice-profile-domains/{VoiceProfileDomainId}",
      GetVoiceToneAnalysisTask:
        "GET /voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}",
      ListAvailableVoiceConnectorRegions: "GET /voice-connector-regions",
      ListPhoneNumberOrders: "GET /phone-number-orders",
      ListPhoneNumbers: "GET /phone-numbers",
      ListProxySessions:
        "GET /voice-connectors/{VoiceConnectorId}/proxy-sessions",
      ListSipMediaApplications: "GET /sip-media-applications",
      ListSipRules: "GET /sip-rules",
      ListSupportedPhoneNumberCountries: "GET /phone-number-countries",
      ListTagsForResource: "GET /tags",
      ListVoiceConnectorGroups: "GET /voice-connector-groups",
      ListVoiceConnectors: "GET /voice-connectors",
      ListVoiceConnectorTerminationCredentials:
        "GET /voice-connectors/{VoiceConnectorId}/termination/credentials",
      ListVoiceProfileDomains: "GET /voice-profile-domains",
      ListVoiceProfiles: "GET /voice-profiles",
      PutSipMediaApplicationAlexaSkillConfiguration:
        "PUT /sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration",
      PutSipMediaApplicationLoggingConfiguration:
        "PUT /sip-media-applications/{SipMediaApplicationId}/logging-configuration",
      PutVoiceConnectorEmergencyCallingConfiguration:
        "PUT /voice-connectors/{VoiceConnectorId}/emergency-calling-configuration",
      PutVoiceConnectorExternalSystemsConfiguration:
        "PUT /voice-connectors/{VoiceConnectorId}/external-systems-configuration",
      PutVoiceConnectorLoggingConfiguration:
        "PUT /voice-connectors/{VoiceConnectorId}/logging-configuration",
      PutVoiceConnectorOrigination:
        "PUT /voice-connectors/{VoiceConnectorId}/origination",
      PutVoiceConnectorProxy:
        "PUT /voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy",
      PutVoiceConnectorStreamingConfiguration:
        "PUT /voice-connectors/{VoiceConnectorId}/streaming-configuration",
      PutVoiceConnectorTermination:
        "PUT /voice-connectors/{VoiceConnectorId}/termination",
      PutVoiceConnectorTerminationCredentials:
        "POST /voice-connectors/{VoiceConnectorId}/termination/credentials?operation=put",
      RestorePhoneNumber:
        "POST /phone-numbers/{PhoneNumberId}?operation=restore",
      SearchAvailablePhoneNumbers: "GET /search?type=phone-numbers",
      StartSpeakerSearchTask:
        "POST /voice-connectors/{VoiceConnectorId}/speaker-search-tasks",
      StartVoiceToneAnalysisTask:
        "POST /voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks",
      StopSpeakerSearchTask:
        "POST /voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop",
      StopVoiceToneAnalysisTask:
        "POST /voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop",
      TagResource: "POST /tags?operation=tag-resource",
      UntagResource: "POST /tags?operation=untag-resource",
      UpdateGlobalSettings: "PUT /settings",
      UpdatePhoneNumber: "POST /phone-numbers/{PhoneNumberId}",
      UpdatePhoneNumberSettings: "PUT /settings/phone-number",
      UpdateProxySession:
        "POST /voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}",
      UpdateSipMediaApplication:
        "PUT /sip-media-applications/{SipMediaApplicationId}",
      UpdateSipMediaApplicationCall:
        "POST /sip-media-applications/{SipMediaApplicationId}/calls/{TransactionId}",
      UpdateSipRule: "PUT /sip-rules/{SipRuleId}",
      UpdateVoiceConnector: "PUT /voice-connectors/{VoiceConnectorId}",
      UpdateVoiceConnectorGroup:
        "PUT /voice-connector-groups/{VoiceConnectorGroupId}",
      UpdateVoiceProfile: "PUT /voice-profiles/{VoiceProfileId}",
      UpdateVoiceProfileDomain:
        "PUT /voice-profile-domains/{VoiceProfileDomainId}",
      ValidateE911Address: "POST /emergency-calling/address",
    },
  },
  cleanrooms: {
    sdkId: "CleanRooms",
    version: "2022-02-17",
    arnNamespace: "cleanrooms",
    cloudTrailEventSource: "cleanrooms.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      BatchGetCollaborationAnalysisTemplate:
        "POST /collaborations/{collaborationIdentifier}/batch-analysistemplates",
      BatchGetSchema:
        "POST /collaborations/{collaborationIdentifier}/batch-schema",
      BatchGetSchemaAnalysisRule:
        "POST /collaborations/{collaborationIdentifier}/batch-schema-analysis-rule",
      CreateAnalysisTemplate:
        "POST /memberships/{membershipIdentifier}/analysistemplates",
      CreateCollaboration: "POST /collaborations",
      CreateConfiguredAudienceModelAssociation:
        "POST /memberships/{membershipIdentifier}/configuredaudiencemodelassociations",
      CreateConfiguredTable: "POST /configuredTables",
      CreateConfiguredTableAnalysisRule:
        "POST /configuredTables/{configuredTableIdentifier}/analysisRule",
      CreateConfiguredTableAssociation:
        "POST /memberships/{membershipIdentifier}/configuredTableAssociations",
      CreateConfiguredTableAssociationAnalysisRule:
        "POST /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule",
      CreateIdMappingTable:
        "POST /memberships/{membershipIdentifier}/idmappingtables",
      CreateIdNamespaceAssociation:
        "POST /memberships/{membershipIdentifier}/idnamespaceassociations",
      CreateMembership: "POST /memberships",
      CreatePrivacyBudgetTemplate:
        "POST /memberships/{membershipIdentifier}/privacybudgettemplates",
      DeleteAnalysisTemplate:
        "DELETE /memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}",
      DeleteCollaboration: "DELETE /collaborations/{collaborationIdentifier}",
      DeleteConfiguredAudienceModelAssociation:
        "DELETE /memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
      DeleteConfiguredTable:
        "DELETE /configuredTables/{configuredTableIdentifier}",
      DeleteConfiguredTableAnalysisRule:
        "DELETE /configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}",
      DeleteConfiguredTableAssociation:
        "DELETE /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
      DeleteConfiguredTableAssociationAnalysisRule:
        "DELETE /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
      DeleteIdMappingTable:
        "DELETE /memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}",
      DeleteIdNamespaceAssociation:
        "DELETE /memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
      DeleteMember:
        "DELETE /collaborations/{collaborationIdentifier}/member/{accountId}",
      DeleteMembership: "DELETE /memberships/{membershipIdentifier}",
      DeletePrivacyBudgetTemplate:
        "DELETE /memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
      GetAnalysisTemplate:
        "GET /memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}",
      GetCollaboration: "GET /collaborations/{collaborationIdentifier}",
      GetCollaborationAnalysisTemplate:
        "GET /collaborations/{collaborationIdentifier}/analysistemplates/{analysisTemplateArn}",
      GetCollaborationConfiguredAudienceModelAssociation:
        "GET /collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
      GetCollaborationIdNamespaceAssociation:
        "GET /collaborations/{collaborationIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
      GetCollaborationPrivacyBudgetTemplate:
        "GET /collaborations/{collaborationIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
      GetConfiguredAudienceModelAssociation:
        "GET /memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
      GetConfiguredTable: "GET /configuredTables/{configuredTableIdentifier}",
      GetConfiguredTableAnalysisRule:
        "GET /configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}",
      GetConfiguredTableAssociation:
        "GET /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
      GetConfiguredTableAssociationAnalysisRule:
        "GET /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
      GetIdMappingTable:
        "GET /memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}",
      GetIdNamespaceAssociation:
        "GET /memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
      GetMembership: "GET /memberships/{membershipIdentifier}",
      GetPrivacyBudgetTemplate:
        "GET /memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
      GetProtectedJob:
        "GET /memberships/{membershipIdentifier}/protectedJobs/{protectedJobIdentifier}",
      GetProtectedQuery:
        "GET /memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}",
      GetSchema: "GET /collaborations/{collaborationIdentifier}/schemas/{name}",
      GetSchemaAnalysisRule:
        "GET /collaborations/{collaborationIdentifier}/schemas/{name}/analysisRule/{type}",
      ListAnalysisTemplates:
        "GET /memberships/{membershipIdentifier}/analysistemplates",
      ListCollaborationAnalysisTemplates:
        "GET /collaborations/{collaborationIdentifier}/analysistemplates",
      ListCollaborationConfiguredAudienceModelAssociations:
        "GET /collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations",
      ListCollaborationIdNamespaceAssociations:
        "GET /collaborations/{collaborationIdentifier}/idnamespaceassociations",
      ListCollaborationPrivacyBudgetTemplates:
        "GET /collaborations/{collaborationIdentifier}/privacybudgettemplates",
      ListCollaborationPrivacyBudgets:
        "GET /collaborations/{collaborationIdentifier}/privacybudgets",
      ListCollaborations: "GET /collaborations",
      ListConfiguredAudienceModelAssociations:
        "GET /memberships/{membershipIdentifier}/configuredaudiencemodelassociations",
      ListConfiguredTableAssociations:
        "GET /memberships/{membershipIdentifier}/configuredTableAssociations",
      ListConfiguredTables: "GET /configuredTables",
      ListIdMappingTables:
        "GET /memberships/{membershipIdentifier}/idmappingtables",
      ListIdNamespaceAssociations:
        "GET /memberships/{membershipIdentifier}/idnamespaceassociations",
      ListMembers: "GET /collaborations/{collaborationIdentifier}/members",
      ListMemberships: "GET /memberships",
      ListPrivacyBudgetTemplates:
        "GET /memberships/{membershipIdentifier}/privacybudgettemplates",
      ListPrivacyBudgets:
        "GET /memberships/{membershipIdentifier}/privacybudgets",
      ListProtectedJobs:
        "GET /memberships/{membershipIdentifier}/protectedJobs",
      ListProtectedQueries:
        "GET /memberships/{membershipIdentifier}/protectedQueries",
      ListSchemas: "GET /collaborations/{collaborationIdentifier}/schemas",
      PopulateIdMappingTable:
        "POST /memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}/populate",
      PreviewPrivacyImpact:
        "POST /memberships/{membershipIdentifier}/previewprivacyimpact",
      StartProtectedJob:
        "POST /memberships/{membershipIdentifier}/protectedJobs",
      StartProtectedQuery:
        "POST /memberships/{membershipIdentifier}/protectedQueries",
      UpdateAnalysisTemplate:
        "PATCH /memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}",
      UpdateCollaboration: "PATCH /collaborations/{collaborationIdentifier}",
      UpdateConfiguredAudienceModelAssociation:
        "PATCH /memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
      UpdateConfiguredTable:
        "PATCH /configuredTables/{configuredTableIdentifier}",
      UpdateConfiguredTableAnalysisRule:
        "PATCH /configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}",
      UpdateConfiguredTableAssociation:
        "PATCH /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
      UpdateConfiguredTableAssociationAnalysisRule:
        "PATCH /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
      UpdateIdMappingTable:
        "PATCH /memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}",
      UpdateIdNamespaceAssociation:
        "PATCH /memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
      UpdateMembership: "PATCH /memberships/{membershipIdentifier}",
      UpdatePrivacyBudgetTemplate:
        "PATCH /memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
      UpdateProtectedJob:
        "PATCH /memberships/{membershipIdentifier}/protectedJobs/{protectedJobIdentifier}",
      UpdateProtectedQuery:
        "PATCH /memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}",
    },
  },
  cleanroomsml: {
    sdkId: "CleanRoomsML",
    version: "2023-09-06",
    arnNamespace: "cleanrooms-ml",
    cloudTrailEventSource: "cleanrooms-ml.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListCollaborationConfiguredModelAlgorithmAssociations:
        "GET /collaborations/{collaborationIdentifier}/configured-model-algorithm-associations",
      ListCollaborationMLInputChannels:
        "GET /collaborations/{collaborationIdentifier}/ml-input-channels",
      ListCollaborationTrainedModelExportJobs:
        "GET /collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}/export-jobs",
      ListCollaborationTrainedModelInferenceJobs:
        "GET /collaborations/{collaborationIdentifier}/trained-model-inference-jobs",
      ListCollaborationTrainedModels:
        "GET /collaborations/{collaborationIdentifier}/trained-models",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CancelTrainedModel:
        "PATCH /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}",
      CancelTrainedModelInferenceJob:
        "PATCH /memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}",
      CreateAudienceModel: "POST /audience-model",
      CreateConfiguredAudienceModel: "POST /configured-audience-model",
      CreateConfiguredModelAlgorithm: "POST /configured-model-algorithms",
      CreateConfiguredModelAlgorithmAssociation:
        "POST /memberships/{membershipIdentifier}/configured-model-algorithm-associations",
      CreateMLInputChannel:
        "POST /memberships/{membershipIdentifier}/ml-input-channels",
      CreateTrainedModel:
        "POST /memberships/{membershipIdentifier}/trained-models",
      CreateTrainingDataset: "POST /training-dataset",
      DeleteAudienceGenerationJob:
        "DELETE /audience-generation-job/{audienceGenerationJobArn}",
      DeleteAudienceModel: "DELETE /audience-model/{audienceModelArn}",
      DeleteConfiguredAudienceModel:
        "DELETE /configured-audience-model/{configuredAudienceModelArn}",
      DeleteConfiguredAudienceModelPolicy:
        "DELETE /configured-audience-model/{configuredAudienceModelArn}/policy",
      DeleteConfiguredModelAlgorithm:
        "DELETE /configured-model-algorithms/{configuredModelAlgorithmArn}",
      DeleteConfiguredModelAlgorithmAssociation:
        "DELETE /memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
      DeleteMLConfiguration:
        "DELETE /memberships/{membershipIdentifier}/ml-configurations",
      DeleteMLInputChannelData:
        "DELETE /memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}",
      DeleteTrainedModelOutput:
        "DELETE /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}",
      DeleteTrainingDataset: "DELETE /training-dataset/{trainingDatasetArn}",
      GetAudienceGenerationJob:
        "GET /audience-generation-job/{audienceGenerationJobArn}",
      GetAudienceModel: "GET /audience-model/{audienceModelArn}",
      GetCollaborationConfiguredModelAlgorithmAssociation:
        "GET /collaborations/{collaborationIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
      GetCollaborationMLInputChannel:
        "GET /collaborations/{collaborationIdentifier}/ml-input-channels/{mlInputChannelArn}",
      GetCollaborationTrainedModel:
        "GET /collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}",
      GetConfiguredAudienceModel:
        "GET /configured-audience-model/{configuredAudienceModelArn}",
      GetConfiguredAudienceModelPolicy:
        "GET /configured-audience-model/{configuredAudienceModelArn}/policy",
      GetConfiguredModelAlgorithm:
        "GET /configured-model-algorithms/{configuredModelAlgorithmArn}",
      GetConfiguredModelAlgorithmAssociation:
        "GET /memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
      GetMLConfiguration:
        "GET /memberships/{membershipIdentifier}/ml-configurations",
      GetMLInputChannel:
        "GET /memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}",
      GetTrainedModel:
        "GET /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}",
      GetTrainedModelInferenceJob:
        "GET /memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}",
      GetTrainingDataset: "GET /training-dataset/{trainingDatasetArn}",
      ListAudienceExportJobs: "GET /audience-export-job",
      ListAudienceGenerationJobs: "GET /audience-generation-job",
      ListAudienceModels: "GET /audience-model",
      ListConfiguredAudienceModels: "GET /configured-audience-model",
      ListConfiguredModelAlgorithmAssociations:
        "GET /memberships/{membershipIdentifier}/configured-model-algorithm-associations",
      ListConfiguredModelAlgorithms: "GET /configured-model-algorithms",
      ListMLInputChannels:
        "GET /memberships/{membershipIdentifier}/ml-input-channels",
      ListTrainedModelInferenceJobs:
        "GET /memberships/{membershipIdentifier}/trained-model-inference-jobs",
      ListTrainedModelVersions:
        "GET /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/versions",
      ListTrainedModels:
        "GET /memberships/{membershipIdentifier}/trained-models",
      ListTrainingDatasets: "GET /training-dataset",
      PutConfiguredAudienceModelPolicy:
        "PUT /configured-audience-model/{configuredAudienceModelArn}/policy",
      PutMLConfiguration:
        "PUT /memberships/{membershipIdentifier}/ml-configurations",
      StartAudienceExportJob: "POST /audience-export-job",
      StartAudienceGenerationJob: "POST /audience-generation-job",
      StartTrainedModelExportJob:
        "POST /memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/export-jobs",
      StartTrainedModelInferenceJob:
        "POST /memberships/{membershipIdentifier}/trained-model-inference-jobs",
      UpdateConfiguredAudienceModel:
        "PATCH /configured-audience-model/{configuredAudienceModelArn}",
    },
  },
  cloud9: {
    sdkId: "Cloud9",
    version: "2017-09-23",
    arnNamespace: "cloud9",
    cloudTrailEventSource: "cloud9.amazonaws.com",
    endpointPrefix: "cloud9",
    protocol: "awsJson1_1",
    targetPrefix: "AWSCloud9WorkspaceManagementService",
  },
  cloudcontrol: {
    sdkId: "CloudControl",
    version: "2021-09-30",
    arnNamespace: "",
    cloudTrailEventSource: "cloudcontrolapi.amazonaws.com",
    endpointPrefix: "cloudcontrolapi",
    protocol: "awsJson1_0",
    targetPrefix: "CloudApiService",
  },
  clouddirectory: {
    sdkId: "CloudDirectory",
    version: "2017-01-11",
    arnNamespace: "clouddirectory",
    cloudTrailEventSource: "clouddirectory.amazonaws.com",
    endpointPrefix: "clouddirectory",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AddFacetToObject: "PUT /amazonclouddirectory/2017-01-11/object/facets",
      ApplySchema: "PUT /amazonclouddirectory/2017-01-11/schema/apply",
      AttachObject: "PUT /amazonclouddirectory/2017-01-11/object/attach",
      AttachPolicy: "PUT /amazonclouddirectory/2017-01-11/policy/attach",
      AttachToIndex: "PUT /amazonclouddirectory/2017-01-11/index/attach",
      AttachTypedLink: "PUT /amazonclouddirectory/2017-01-11/typedlink/attach",
      BatchRead: "POST /amazonclouddirectory/2017-01-11/batchread",
      BatchWrite: "PUT /amazonclouddirectory/2017-01-11/batchwrite",
      CreateDirectory: "PUT /amazonclouddirectory/2017-01-11/directory/create",
      CreateFacet: "PUT /amazonclouddirectory/2017-01-11/facet/create",
      CreateIndex: "PUT /amazonclouddirectory/2017-01-11/index",
      CreateObject: "PUT /amazonclouddirectory/2017-01-11/object",
      CreateSchema: "PUT /amazonclouddirectory/2017-01-11/schema/create",
      CreateTypedLinkFacet:
        "PUT /amazonclouddirectory/2017-01-11/typedlink/facet/create",
      DeleteDirectory: "PUT /amazonclouddirectory/2017-01-11/directory",
      DeleteFacet: "PUT /amazonclouddirectory/2017-01-11/facet/delete",
      DeleteObject: "PUT /amazonclouddirectory/2017-01-11/object/delete",
      DeleteSchema: "PUT /amazonclouddirectory/2017-01-11/schema",
      DeleteTypedLinkFacet:
        "PUT /amazonclouddirectory/2017-01-11/typedlink/facet/delete",
      DetachFromIndex: "PUT /amazonclouddirectory/2017-01-11/index/detach",
      DetachObject: "PUT /amazonclouddirectory/2017-01-11/object/detach",
      DetachPolicy: "PUT /amazonclouddirectory/2017-01-11/policy/detach",
      DetachTypedLink: "PUT /amazonclouddirectory/2017-01-11/typedlink/detach",
      DisableDirectory:
        "PUT /amazonclouddirectory/2017-01-11/directory/disable",
      EnableDirectory: "PUT /amazonclouddirectory/2017-01-11/directory/enable",
      GetAppliedSchemaVersion:
        "POST /amazonclouddirectory/2017-01-11/schema/getappliedschema",
      GetDirectory: "POST /amazonclouddirectory/2017-01-11/directory/get",
      GetFacet: "POST /amazonclouddirectory/2017-01-11/facet",
      GetLinkAttributes:
        "POST /amazonclouddirectory/2017-01-11/typedlink/attributes/get",
      GetObjectAttributes:
        "POST /amazonclouddirectory/2017-01-11/object/attributes/get",
      GetObjectInformation:
        "POST /amazonclouddirectory/2017-01-11/object/information",
      GetSchemaAsJson: "POST /amazonclouddirectory/2017-01-11/schema/json",
      GetTypedLinkFacetInformation:
        "POST /amazonclouddirectory/2017-01-11/typedlink/facet/get",
      ListAppliedSchemaArns:
        "POST /amazonclouddirectory/2017-01-11/schema/applied",
      ListAttachedIndices:
        "POST /amazonclouddirectory/2017-01-11/object/indices",
      ListDevelopmentSchemaArns:
        "POST /amazonclouddirectory/2017-01-11/schema/development",
      ListDirectories: "POST /amazonclouddirectory/2017-01-11/directory/list",
      ListFacetAttributes:
        "POST /amazonclouddirectory/2017-01-11/facet/attributes",
      ListFacetNames: "POST /amazonclouddirectory/2017-01-11/facet/list",
      ListIncomingTypedLinks:
        "POST /amazonclouddirectory/2017-01-11/typedlink/incoming",
      ListIndex: "POST /amazonclouddirectory/2017-01-11/index/targets",
      ListManagedSchemaArns:
        "POST /amazonclouddirectory/2017-01-11/schema/managed",
      ListObjectAttributes:
        "POST /amazonclouddirectory/2017-01-11/object/attributes",
      ListObjectChildren:
        "POST /amazonclouddirectory/2017-01-11/object/children",
      ListObjectParentPaths:
        "POST /amazonclouddirectory/2017-01-11/object/parentpaths",
      ListObjectParents: "POST /amazonclouddirectory/2017-01-11/object/parent",
      ListObjectPolicies: "POST /amazonclouddirectory/2017-01-11/object/policy",
      ListOutgoingTypedLinks:
        "POST /amazonclouddirectory/2017-01-11/typedlink/outgoing",
      ListPolicyAttachments:
        "POST /amazonclouddirectory/2017-01-11/policy/attachment",
      ListPublishedSchemaArns:
        "POST /amazonclouddirectory/2017-01-11/schema/published",
      ListTagsForResource: "POST /amazonclouddirectory/2017-01-11/tags",
      ListTypedLinkFacetAttributes:
        "POST /amazonclouddirectory/2017-01-11/typedlink/facet/attributes",
      ListTypedLinkFacetNames:
        "POST /amazonclouddirectory/2017-01-11/typedlink/facet/list",
      LookupPolicy: "POST /amazonclouddirectory/2017-01-11/policy/lookup",
      PublishSchema: "PUT /amazonclouddirectory/2017-01-11/schema/publish",
      PutSchemaFromJson: "PUT /amazonclouddirectory/2017-01-11/schema/json",
      RemoveFacetFromObject:
        "PUT /amazonclouddirectory/2017-01-11/object/facets/delete",
      TagResource: "PUT /amazonclouddirectory/2017-01-11/tags/add",
      UntagResource: "PUT /amazonclouddirectory/2017-01-11/tags/remove",
      UpdateFacet: "PUT /amazonclouddirectory/2017-01-11/facet",
      UpdateLinkAttributes:
        "POST /amazonclouddirectory/2017-01-11/typedlink/attributes/update",
      UpdateObjectAttributes:
        "PUT /amazonclouddirectory/2017-01-11/object/update",
      UpdateSchema: "PUT /amazonclouddirectory/2017-01-11/schema/update",
      UpdateTypedLinkFacet:
        "PUT /amazonclouddirectory/2017-01-11/typedlink/facet",
      UpgradeAppliedSchema:
        "PUT /amazonclouddirectory/2017-01-11/schema/upgradeapplied",
      UpgradePublishedSchema:
        "PUT /amazonclouddirectory/2017-01-11/schema/upgradepublished",
    },
  },
  cloudformation: {
    sdkId: "CloudFormation",
    version: "2010-05-15",
    arnNamespace: "cloudformation",
    cloudTrailEventSource: "cloudformation.amazonaws.com",
    endpointPrefix: "cloudformation",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  cloudfront: {
    sdkId: "CloudFront",
    version: "2020-05-31",
    arnNamespace: "cloudfront",
    cloudTrailEventSource: "cloudfront.amazonaws.com",
    endpointPrefix: "cloudfront",
    protocol: "restXml",
    targetPrefix: "",
    operations: {
      AssociateDistributionTenantWebACL: {
        traits: {
          ETag: "ETag",
        },
      },
      AssociateDistributionWebACL: {
        traits: {
          ETag: "ETag",
        },
      },
      CopyDistribution: {
        traits: {
          Distribution: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateAnycastIpList: {
        traits: {
          AnycastIpList: "httpPayload",
          ETag: "ETag",
        },
      },
      CreateCachePolicy: {
        traits: {
          CachePolicy: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateCloudFrontOriginAccessIdentity: {
        traits: {
          CloudFrontOriginAccessIdentity: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateConnectionGroup: {
        traits: {
          ConnectionGroup: "httpPayload",
          ETag: "ETag",
        },
      },
      CreateContinuousDeploymentPolicy: {
        traits: {
          ContinuousDeploymentPolicy: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateDistribution: {
        traits: {
          Distribution: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateDistributionTenant: {
        traits: {
          DistributionTenant: "httpPayload",
          ETag: "ETag",
        },
      },
      CreateDistributionWithTags: {
        traits: {
          Distribution: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateFieldLevelEncryptionConfig: {
        traits: {
          FieldLevelEncryption: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateFieldLevelEncryptionProfile: {
        traits: {
          FieldLevelEncryptionProfile: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateFunction: {
        traits: {
          FunctionSummary: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateInvalidation: {
        traits: {
          Location: "Location",
          Invalidation: "httpPayload",
        },
      },
      CreateInvalidationForDistributionTenant: {
        traits: {
          Location: "Location",
          Invalidation: "httpPayload",
        },
      },
      CreateKeyGroup: {
        traits: {
          KeyGroup: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateKeyValueStore: {
        traits: {
          KeyValueStore: "httpPayload",
          ETag: "ETag",
          Location: "Location",
        },
      },
      CreateMonitoringSubscription: {
        traits: {
          MonitoringSubscription: "httpPayload",
        },
      },
      CreateOriginAccessControl: {
        traits: {
          OriginAccessControl: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateOriginRequestPolicy: {
        traits: {
          OriginRequestPolicy: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreatePublicKey: {
        traits: {
          PublicKey: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateResponseHeadersPolicy: {
        traits: {
          ResponseHeadersPolicy: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateStreamingDistribution: {
        traits: {
          StreamingDistribution: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateStreamingDistributionWithTags: {
        traits: {
          StreamingDistribution: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      CreateVpcOrigin: {
        traits: {
          VpcOrigin: "httpPayload",
          Location: "Location",
          ETag: "ETag",
        },
      },
      DeleteVpcOrigin: {
        traits: {
          VpcOrigin: "httpPayload",
          ETag: "ETag",
        },
      },
      DescribeFunction: {
        traits: {
          FunctionSummary: "httpPayload",
          ETag: "ETag",
        },
      },
      DescribeKeyValueStore: {
        traits: {
          KeyValueStore: "httpPayload",
          ETag: "ETag",
        },
      },
      DisassociateDistributionTenantWebACL: {
        traits: {
          ETag: "ETag",
        },
      },
      DisassociateDistributionWebACL: {
        traits: {
          ETag: "ETag",
        },
      },
      GetAnycastIpList: {
        traits: {
          AnycastIpList: "httpPayload",
          ETag: "ETag",
        },
      },
      GetCachePolicy: {
        traits: {
          CachePolicy: "httpPayload",
          ETag: "ETag",
        },
      },
      GetCachePolicyConfig: {
        traits: {
          CachePolicyConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetCloudFrontOriginAccessIdentity: {
        traits: {
          CloudFrontOriginAccessIdentity: "httpPayload",
          ETag: "ETag",
        },
      },
      GetCloudFrontOriginAccessIdentityConfig: {
        traits: {
          CloudFrontOriginAccessIdentityConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetConnectionGroup: {
        traits: {
          ConnectionGroup: "httpPayload",
          ETag: "ETag",
        },
      },
      GetConnectionGroupByRoutingEndpoint: {
        traits: {
          ConnectionGroup: "httpPayload",
          ETag: "ETag",
        },
      },
      GetContinuousDeploymentPolicy: {
        traits: {
          ContinuousDeploymentPolicy: "httpPayload",
          ETag: "ETag",
        },
      },
      GetContinuousDeploymentPolicyConfig: {
        traits: {
          ContinuousDeploymentPolicyConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetDistribution: {
        traits: {
          Distribution: "httpPayload",
          ETag: "ETag",
        },
      },
      GetDistributionConfig: {
        traits: {
          DistributionConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetDistributionTenant: {
        traits: {
          DistributionTenant: "httpPayload",
          ETag: "ETag",
        },
      },
      GetDistributionTenantByDomain: {
        traits: {
          DistributionTenant: "httpPayload",
          ETag: "ETag",
        },
      },
      GetFieldLevelEncryption: {
        traits: {
          FieldLevelEncryption: "httpPayload",
          ETag: "ETag",
        },
      },
      GetFieldLevelEncryptionConfig: {
        traits: {
          FieldLevelEncryptionConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetFieldLevelEncryptionProfile: {
        traits: {
          FieldLevelEncryptionProfile: "httpPayload",
          ETag: "ETag",
        },
      },
      GetFieldLevelEncryptionProfileConfig: {
        traits: {
          FieldLevelEncryptionProfileConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetFunction: {
        traits: {
          FunctionCode: "httpPayload",
          ETag: "ETag",
          ContentType: "Content-Type",
        },
      },
      GetInvalidation: {
        traits: {
          Invalidation: "httpPayload",
        },
      },
      GetInvalidationForDistributionTenant: {
        traits: {
          Invalidation: "httpPayload",
        },
      },
      GetKeyGroup: {
        traits: {
          KeyGroup: "httpPayload",
          ETag: "ETag",
        },
      },
      GetKeyGroupConfig: {
        traits: {
          KeyGroupConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetManagedCertificateDetails: {
        traits: {
          ManagedCertificateDetails: "httpPayload",
        },
      },
      GetMonitoringSubscription: {
        traits: {
          MonitoringSubscription: "httpPayload",
        },
      },
      GetOriginAccessControl: {
        traits: {
          OriginAccessControl: "httpPayload",
          ETag: "ETag",
        },
      },
      GetOriginAccessControlConfig: {
        traits: {
          OriginAccessControlConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetOriginRequestPolicy: {
        traits: {
          OriginRequestPolicy: "httpPayload",
          ETag: "ETag",
        },
      },
      GetOriginRequestPolicyConfig: {
        traits: {
          OriginRequestPolicyConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetPublicKey: {
        traits: {
          PublicKey: "httpPayload",
          ETag: "ETag",
        },
      },
      GetPublicKeyConfig: {
        traits: {
          PublicKeyConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetResponseHeadersPolicy: {
        traits: {
          ResponseHeadersPolicy: "httpPayload",
          ETag: "ETag",
        },
      },
      GetResponseHeadersPolicyConfig: {
        traits: {
          ResponseHeadersPolicyConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetStreamingDistribution: {
        traits: {
          StreamingDistribution: "httpPayload",
          ETag: "ETag",
        },
      },
      GetStreamingDistributionConfig: {
        traits: {
          StreamingDistributionConfig: "httpPayload",
          ETag: "ETag",
        },
      },
      GetVpcOrigin: {
        traits: {
          VpcOrigin: "httpPayload",
          ETag: "ETag",
        },
      },
      ListAnycastIpLists: {
        traits: {
          AnycastIpLists: "httpPayload",
        },
      },
      ListCachePolicies: {
        traits: {
          CachePolicyList: "httpPayload",
        },
      },
      ListCloudFrontOriginAccessIdentities: {
        traits: {
          CloudFrontOriginAccessIdentityList: "httpPayload",
        },
      },
      ListConflictingAliases: {
        traits: {
          ConflictingAliasesList: "httpPayload",
        },
      },
      ListContinuousDeploymentPolicies: {
        traits: {
          ContinuousDeploymentPolicyList: "httpPayload",
        },
      },
      ListDistributions: {
        traits: {
          DistributionList: "httpPayload",
        },
      },
      ListDistributionsByAnycastIpListId: {
        traits: {
          DistributionList: "httpPayload",
        },
      },
      ListDistributionsByCachePolicyId: {
        traits: {
          DistributionIdList: "httpPayload",
        },
      },
      ListDistributionsByConnectionMode: {
        traits: {
          DistributionList: "httpPayload",
        },
      },
      ListDistributionsByKeyGroup: {
        traits: {
          DistributionIdList: "httpPayload",
        },
      },
      ListDistributionsByOriginRequestPolicyId: {
        traits: {
          DistributionIdList: "httpPayload",
        },
      },
      ListDistributionsByRealtimeLogConfig: {
        traits: {
          DistributionList: "httpPayload",
        },
      },
      ListDistributionsByResponseHeadersPolicyId: {
        traits: {
          DistributionIdList: "httpPayload",
        },
      },
      ListDistributionsByVpcOriginId: {
        traits: {
          DistributionIdList: "httpPayload",
        },
      },
      ListDistributionsByWebACLId: {
        traits: {
          DistributionList: "httpPayload",
        },
      },
      ListFieldLevelEncryptionConfigs: {
        traits: {
          FieldLevelEncryptionList: "httpPayload",
        },
      },
      ListFieldLevelEncryptionProfiles: {
        traits: {
          FieldLevelEncryptionProfileList: "httpPayload",
        },
      },
      ListFunctions: {
        traits: {
          FunctionList: "httpPayload",
        },
      },
      ListInvalidations: {
        traits: {
          InvalidationList: "httpPayload",
        },
      },
      ListInvalidationsForDistributionTenant: {
        traits: {
          InvalidationList: "httpPayload",
        },
      },
      ListKeyGroups: {
        traits: {
          KeyGroupList: "httpPayload",
        },
      },
      ListKeyValueStores: {
        traits: {
          KeyValueStoreList: "httpPayload",
        },
      },
      ListOriginAccessControls: {
        traits: {
          OriginAccessControlList: "httpPayload",
        },
      },
      ListOriginRequestPolicies: {
        traits: {
          OriginRequestPolicyList: "httpPayload",
        },
      },
      ListPublicKeys: {
        traits: {
          PublicKeyList: "httpPayload",
        },
      },
      ListRealtimeLogConfigs: {
        traits: {
          RealtimeLogConfigs: "httpPayload",
        },
      },
      ListResponseHeadersPolicies: {
        traits: {
          ResponseHeadersPolicyList: "httpPayload",
        },
      },
      ListStreamingDistributions: {
        traits: {
          StreamingDistributionList: "httpPayload",
        },
      },
      ListTagsForResource: {
        traits: {
          Tags: "httpPayload",
        },
      },
      ListVpcOrigins: {
        traits: {
          VpcOriginList: "httpPayload",
        },
      },
      PublishFunction: {
        traits: {
          FunctionSummary: "httpPayload",
        },
      },
      TestFunction: {
        traits: {
          TestResult: "httpPayload",
        },
      },
      UpdateCachePolicy: {
        traits: {
          CachePolicy: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateCloudFrontOriginAccessIdentity: {
        traits: {
          CloudFrontOriginAccessIdentity: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateConnectionGroup: {
        traits: {
          ConnectionGroup: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateContinuousDeploymentPolicy: {
        traits: {
          ContinuousDeploymentPolicy: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateDistribution: {
        traits: {
          Distribution: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateDistributionTenant: {
        traits: {
          DistributionTenant: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateDistributionWithStagingConfig: {
        traits: {
          Distribution: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateDomainAssociation: {
        traits: {
          ETag: "ETag",
        },
      },
      UpdateFieldLevelEncryptionConfig: {
        traits: {
          FieldLevelEncryption: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateFieldLevelEncryptionProfile: {
        traits: {
          FieldLevelEncryptionProfile: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateFunction: {
        traits: {
          FunctionSummary: "httpPayload",
          ETag: "ETtag",
        },
      },
      UpdateKeyGroup: {
        traits: {
          KeyGroup: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateKeyValueStore: {
        traits: {
          KeyValueStore: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateOriginAccessControl: {
        traits: {
          OriginAccessControl: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateOriginRequestPolicy: {
        traits: {
          OriginRequestPolicy: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdatePublicKey: {
        traits: {
          PublicKey: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateResponseHeadersPolicy: {
        traits: {
          ResponseHeadersPolicy: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateStreamingDistribution: {
        traits: {
          StreamingDistribution: "httpPayload",
          ETag: "ETag",
        },
      },
      UpdateVpcOrigin: {
        traits: {
          VpcOrigin: "httpPayload",
          ETag: "ETag",
        },
      },
    },
  },
  cloudfrontkeyvaluestore: {
    sdkId: "CloudFront KeyValueStore",
    version: "2022-07-26",
    arnNamespace: "key-value-store",
    cloudTrailEventSource: "key-value-store.amazonaws.com",
    endpointPrefix: "cloudfront-keyvaluestore",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteKey: {
        http: "DELETE /key-value-stores/{KvsARN}/keys/{Key}",
        traits: {
          ETag: "ETag",
        },
      },
      DescribeKeyValueStore: {
        http: "GET /key-value-stores/{KvsARN}",
        traits: {
          ETag: "ETag",
        },
      },
      GetKey: "GET /key-value-stores/{KvsARN}/keys/{Key}",
      ListKeys: "GET /key-value-stores/{KvsARN}/keys",
      PutKey: {
        http: "PUT /key-value-stores/{KvsARN}/keys/{Key}",
        traits: {
          ETag: "ETag",
        },
      },
      UpdateKeys: {
        http: "POST /key-value-stores/{KvsARN}/keys",
        traits: {
          ETag: "ETag",
        },
      },
    },
  },
  cloudhsm: {
    sdkId: "CloudHSM",
    version: "2014-05-30",
    arnNamespace: "cloudhsm",
    cloudTrailEventSource: "cloudhsm.amazonaws.com",
    endpointPrefix: "cloudhsm",
    protocol: "awsJson1_1",
    targetPrefix: "CloudHsmFrontendService",
  },
  cloudhsmv2: {
    sdkId: "CloudHSM V2",
    version: "2017-04-28",
    arnNamespace: "cloudhsm",
    cloudTrailEventSource: "cloudhsmv2.amazonaws.com",
    endpointPrefix: "cloudhsmv2",
    protocol: "awsJson1_1",
    targetPrefix: "BaldrApiService",
  },
  cloudsearch: {
    sdkId: "CloudSearch",
    version: "2013-01-01",
    arnNamespace: "cloudsearch",
    cloudTrailEventSource: "cloudsearch.amazonaws.com",
    endpointPrefix: "cloudsearch",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  cloudsearchdomain: {
    sdkId: "CloudSearch Domain",
    version: "2013-01-01",
    arnNamespace: "cloudsearch",
    cloudTrailEventSource: "cloudsearchdomain.amazonaws.com",
    endpointPrefix: "cloudsearchdomain",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      Search: "GET /2013-01-01/search?format=sdk&pretty=true",
      Suggest: "GET /2013-01-01/suggest?format=sdk&pretty=true",
      UploadDocuments: "POST /2013-01-01/documents/batch?format=sdk",
    },
  },
  cloudtrail: {
    sdkId: "CloudTrail",
    version: "2013-11-01",
    arnNamespace: "cloudtrail",
    cloudTrailEventSource: "cloudtrail.amazonaws.com",
    endpointPrefix: "cloudtrail",
    protocol: "awsJson1_1",
    targetPrefix: "CloudTrail_20131101",
  },
  cloudtraildata: {
    sdkId: "CloudTrail Data",
    version: "2021-08-11",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "cloudtrail-data",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      PutAuditEvents: "POST /PutAuditEvents",
    },
  },
  cloudwatch: {
    sdkId: "CloudWatch",
    version: "2010-08-01",
    arnNamespace: "monitoring",
    cloudTrailEventSource: "monitoring.amazonaws.com",
    endpointPrefix: "monitoring",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  cloudwatchevents: {
    sdkId: "CloudWatch Events",
    version: "2015-10-07",
    arnNamespace: "events",
    cloudTrailEventSource: "events.amazonaws.com",
    endpointPrefix: "events",
    protocol: "awsJson1_1",
    targetPrefix: "AWSEvents",
  },
  cloudwatchlogs: {
    sdkId: "CloudWatch Logs",
    version: "2014-03-28",
    arnNamespace: "logs",
    cloudTrailEventSource: "logs.amazonaws.com",
    endpointPrefix: "logs",
    protocol: "awsJson1_1",
    targetPrefix: "Logs_20140328",
  },
  codeartifact: {
    sdkId: "codeartifact",
    version: "2018-09-22",
    arnNamespace: "codeartifact",
    cloudTrailEventSource: "codeartifact.amazonaws.com",
    endpointPrefix: "codeartifact",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateExternalConnection: "POST /v1/repository/external-connection",
      CopyPackageVersions: "POST /v1/package/versions/copy",
      CreateDomain: "POST /v1/domain",
      CreatePackageGroup: "POST /v1/package-group",
      CreateRepository: "POST /v1/repository",
      DeleteDomain: "DELETE /v1/domain",
      DeleteDomainPermissionsPolicy: "DELETE /v1/domain/permissions/policy",
      DeletePackage: "DELETE /v1/package",
      DeletePackageGroup: "DELETE /v1/package-group",
      DeletePackageVersions: "POST /v1/package/versions/delete",
      DeleteRepository: "DELETE /v1/repository",
      DeleteRepositoryPermissionsPolicy:
        "DELETE /v1/repository/permissions/policies",
      DescribeDomain: "GET /v1/domain",
      DescribePackage: "GET /v1/package",
      DescribePackageGroup: "GET /v1/package-group",
      DescribePackageVersion: "GET /v1/package/version",
      DescribeRepository: "GET /v1/repository",
      DisassociateExternalConnection:
        "DELETE /v1/repository/external-connection",
      DisposePackageVersions: "POST /v1/package/versions/dispose",
      GetAssociatedPackageGroup: "GET /v1/get-associated-package-group",
      GetAuthorizationToken: "POST /v1/authorization-token",
      GetDomainPermissionsPolicy: "GET /v1/domain/permissions/policy",
      GetPackageVersionAsset: {
        http: "GET /v1/package/version/asset",
        traits: {
          asset: "httpPayload",
          assetName: "X-AssetName",
          packageVersion: "X-PackageVersion",
          packageVersionRevision: "X-PackageVersionRevision",
        },
      },
      GetPackageVersionReadme: "GET /v1/package/version/readme",
      GetRepositoryEndpoint: "GET /v1/repository/endpoint",
      GetRepositoryPermissionsPolicy: "GET /v1/repository/permissions/policy",
      ListAllowedRepositoriesForGroup:
        "GET /v1/package-group-allowed-repositories",
      ListAssociatedPackages: "GET /v1/list-associated-packages",
      ListDomains: "POST /v1/domains",
      ListPackageGroups: "POST /v1/package-groups",
      ListPackages: "POST /v1/packages",
      ListPackageVersionAssets: "POST /v1/package/version/assets",
      ListPackageVersionDependencies: "POST /v1/package/version/dependencies",
      ListPackageVersions: "POST /v1/package/versions",
      ListRepositories: "POST /v1/repositories",
      ListRepositoriesInDomain: "POST /v1/domain/repositories",
      ListSubPackageGroups: "POST /v1/package-groups/sub-groups",
      ListTagsForResource: "POST /v1/tags",
      PublishPackageVersion: "POST /v1/package/version/publish",
      PutDomainPermissionsPolicy: "PUT /v1/domain/permissions/policy",
      PutPackageOriginConfiguration: "POST /v1/package",
      PutRepositoryPermissionsPolicy: "PUT /v1/repository/permissions/policy",
      TagResource: "POST /v1/tag",
      UntagResource: "POST /v1/untag",
      UpdatePackageGroup: "PUT /v1/package-group",
      UpdatePackageGroupOriginConfiguration:
        "PUT /v1/package-group-origin-configuration",
      UpdatePackageVersionsStatus: "POST /v1/package/versions/update_status",
      UpdateRepository: "PUT /v1/repository",
    },
  },
  codebuild: {
    sdkId: "CodeBuild",
    version: "2016-10-06",
    arnNamespace: "codebuild",
    cloudTrailEventSource: "codebuild.amazonaws.com",
    endpointPrefix: "codebuild",
    protocol: "awsJson1_1",
    targetPrefix: "CodeBuild_20161006",
  },
  codecatalyst: {
    sdkId: "CodeCatalyst",
    version: "2022-09-28",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "codecatalyst",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetUserDetails: "GET /userDetails",
      VerifySession: "GET /session",
      CreateAccessToken: "PUT /v1/accessTokens",
      CreateDevEnvironment:
        "PUT /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments",
      CreateProject: "PUT /v1/spaces/{spaceName}/projects",
      CreateSourceRepository:
        "PUT /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}",
      CreateSourceRepositoryBranch:
        "PUT /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches/{name}",
      DeleteAccessToken: "DELETE /v1/accessTokens/{id}",
      DeleteDevEnvironment:
        "DELETE /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}",
      DeleteProject: "DELETE /v1/spaces/{spaceName}/projects/{name}",
      DeleteSourceRepository:
        "DELETE /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}",
      DeleteSpace: "DELETE /v1/spaces/{name}",
      GetDevEnvironment:
        "GET /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}",
      GetProject: "GET /v1/spaces/{spaceName}/projects/{name}",
      GetSourceRepository:
        "GET /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}",
      GetSourceRepositoryCloneUrls:
        "GET /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/cloneUrls",
      GetSpace: "GET /v1/spaces/{name}",
      GetSubscription: "GET /v1/spaces/{spaceName}/subscription",
      GetWorkflow:
        "GET /v1/spaces/{spaceName}/projects/{projectName}/workflows/{id}",
      GetWorkflowRun:
        "GET /v1/spaces/{spaceName}/projects/{projectName}/workflowRuns/{id}",
      ListAccessTokens: "POST /v1/accessTokens",
      ListDevEnvironmentSessions:
        "POST /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{devEnvironmentId}/sessions",
      ListDevEnvironments: "POST /v1/spaces/{spaceName}/devEnvironments",
      ListEventLogs: "POST /v1/spaces/{spaceName}/eventLogs",
      ListProjects: "POST /v1/spaces/{spaceName}/projects",
      ListSourceRepositories:
        "POST /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories",
      ListSourceRepositoryBranches:
        "POST /v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches",
      ListSpaces: "POST /v1/spaces",
      ListWorkflowRuns:
        "POST /v1/spaces/{spaceName}/projects/{projectName}/workflowRuns",
      ListWorkflows:
        "POST /v1/spaces/{spaceName}/projects/{projectName}/workflows",
      StartDevEnvironment:
        "PUT /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/start",
      StartDevEnvironmentSession:
        "PUT /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session",
      StartWorkflowRun:
        "PUT /v1/spaces/{spaceName}/projects/{projectName}/workflowRuns",
      StopDevEnvironment:
        "PUT /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/stop",
      StopDevEnvironmentSession:
        "DELETE /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session/{sessionId}",
      UpdateDevEnvironment:
        "PATCH /v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}",
      UpdateProject: "PATCH /v1/spaces/{spaceName}/projects/{name}",
      UpdateSpace: "PATCH /v1/spaces/{name}",
    },
  },
  codecommit: {
    sdkId: "CodeCommit",
    version: "2015-04-13",
    arnNamespace: "codecommit",
    cloudTrailEventSource: "codecommit.amazonaws.com",
    endpointPrefix: "codecommit",
    protocol: "awsJson1_1",
    targetPrefix: "CodeCommit_20150413",
  },
  codeconnections: {
    sdkId: "CodeConnections",
    version: "2023-12-01",
    arnNamespace: "codeconnections",
    cloudTrailEventSource: "codeconnections.amazonaws.com",
    endpointPrefix: "codeconnections",
    protocol: "awsJson1_0",
    targetPrefix: "CodeConnections_20231201",
  },
  codedeploy: {
    sdkId: "CodeDeploy",
    version: "2014-10-06",
    arnNamespace: "codedeploy",
    cloudTrailEventSource: "codedeploy.amazonaws.com",
    endpointPrefix: "codedeploy",
    protocol: "awsJson1_1",
    targetPrefix: "CodeDeploy_20141006",
  },
  codegurureviewer: {
    sdkId: "CodeGuru Reviewer",
    version: "2019-09-19",
    arnNamespace: "codeguru-reviewer",
    cloudTrailEventSource: "codeguru-reviewer.amazonaws.com",
    endpointPrefix: "codeguru-reviewer",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateRepository: "POST /associations",
      CreateCodeReview: "POST /codereviews",
      DescribeCodeReview: "GET /codereviews/{CodeReviewArn}",
      DescribeRecommendationFeedback: "GET /feedback/{CodeReviewArn}",
      DescribeRepositoryAssociation: "GET /associations/{AssociationArn}",
      DisassociateRepository: "DELETE /associations/{AssociationArn}",
      ListCodeReviews: "GET /codereviews",
      ListRecommendationFeedback:
        "GET /feedback/{CodeReviewArn}/RecommendationFeedback",
      ListRecommendations: "GET /codereviews/{CodeReviewArn}/Recommendations",
      ListRepositoryAssociations: "GET /associations",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutRecommendationFeedback: "PUT /feedback",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
    },
  },
  codegurusecurity: {
    sdkId: "CodeGuru Security",
    version: "2018-05-10",
    arnNamespace: "codeguru-security",
    cloudTrailEventSource: "codeguru-security.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetFindings: "POST /batchGetFindings",
      CreateScan: "POST /scans",
      CreateUploadUrl: "POST /uploadUrl",
      GetAccountConfiguration: "GET /accountConfiguration/get",
      GetFindings: "GET /findings/{scanName}",
      GetMetricsSummary: "GET /metrics/summary",
      GetScan: "GET /scans/{scanName}",
      ListFindingsMetrics: "GET /metrics/findings",
      ListScans: "GET /scans",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateAccountConfiguration: "PUT /updateAccountConfiguration",
    },
  },
  codeguruprofiler: {
    sdkId: "CodeGuruProfiler",
    version: "2019-07-18",
    arnNamespace: "codeguru-profiler",
    cloudTrailEventSource: "codeguru-profiler.amazonaws.com",
    endpointPrefix: "codeguru-profiler",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetFindingsReportAccountSummary: "GET /internal/findingsReports",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      AddNotificationChannels:
        "POST /profilingGroups/{profilingGroupName}/notificationConfiguration",
      BatchGetFrameMetricData:
        "POST /profilingGroups/{profilingGroupName}/frames/-/metrics",
      ConfigureAgent: {
        http: "POST /profilingGroups/{profilingGroupName}/configureAgent",
        traits: {
          configuration: "httpPayload",
        },
      },
      CreateProfilingGroup: {
        http: "POST /profilingGroups",
        traits: {
          profilingGroup: "httpPayload",
        },
      },
      DeleteProfilingGroup: "DELETE /profilingGroups/{profilingGroupName}",
      DescribeProfilingGroup: {
        http: "GET /profilingGroups/{profilingGroupName}",
        traits: {
          profilingGroup: "httpPayload",
        },
      },
      GetNotificationConfiguration:
        "GET /profilingGroups/{profilingGroupName}/notificationConfiguration",
      GetPolicy: "GET /profilingGroups/{profilingGroupName}/policy",
      GetProfile: {
        http: "GET /profilingGroups/{profilingGroupName}/profile",
        traits: {
          profile: "httpPayload",
          contentType: "Content-Type",
          contentEncoding: "Content-Encoding",
        },
      },
      GetRecommendations:
        "GET /internal/profilingGroups/{profilingGroupName}/recommendations",
      ListFindingsReports:
        "GET /internal/profilingGroups/{profilingGroupName}/findingsReports",
      ListProfileTimes:
        "GET /profilingGroups/{profilingGroupName}/profileTimes",
      ListProfilingGroups: "GET /profilingGroups",
      PostAgentProfile:
        "POST /profilingGroups/{profilingGroupName}/agentProfile",
      PutPermission:
        "PUT /profilingGroups/{profilingGroupName}/policy/{actionGroup}",
      RemoveNotificationChannel:
        "DELETE /profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}",
      RemovePermission:
        "DELETE /profilingGroups/{profilingGroupName}/policy/{actionGroup}",
      SubmitFeedback:
        "POST /internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback",
      UpdateProfilingGroup: {
        http: "PUT /profilingGroups/{profilingGroupName}",
        traits: {
          profilingGroup: "httpPayload",
        },
      },
    },
  },
  codepipeline: {
    sdkId: "CodePipeline",
    version: "2015-07-09",
    arnNamespace: "codepipeline",
    cloudTrailEventSource: "codepipeline.amazonaws.com",
    endpointPrefix: "codepipeline",
    protocol: "awsJson1_1",
    targetPrefix: "CodePipeline_20150709",
  },
  codestarconnections: {
    sdkId: "CodeStar connections",
    version: "2019-12-01",
    arnNamespace: "codestar-connections",
    cloudTrailEventSource: "codestarconnections.amazonaws.com",
    endpointPrefix: "codestar-connections",
    protocol: "awsJson1_0",
    targetPrefix: "CodeStar_connections_20191201",
  },
  codestarnotifications: {
    sdkId: "codestar notifications",
    version: "2019-10-15",
    arnNamespace: "codestar-notifications",
    cloudTrailEventSource: "codestarnotifications.amazonaws.com",
    endpointPrefix: "codestar-notifications",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateNotificationRule: "POST /createNotificationRule",
      DeleteNotificationRule: "POST /deleteNotificationRule",
      DeleteTarget: "POST /deleteTarget",
      DescribeNotificationRule: "POST /describeNotificationRule",
      ListEventTypes: "POST /listEventTypes",
      ListNotificationRules: "POST /listNotificationRules",
      ListTagsForResource: "POST /listTagsForResource",
      ListTargets: "POST /listTargets",
      Subscribe: "POST /subscribe",
      TagResource: "POST /tagResource",
      Unsubscribe: "POST /unsubscribe",
      UntagResource: "POST /untagResource/{Arn}",
      UpdateNotificationRule: "POST /updateNotificationRule",
    },
  },
  cognitoidentity: {
    sdkId: "Cognito Identity",
    version: "2014-06-30",
    arnNamespace: "cognito-identity",
    cloudTrailEventSource: "cognito-identity.amazonaws.com",
    endpointPrefix: "cognito-identity",
    protocol: "awsJson1_1",
    targetPrefix: "AWSCognitoIdentityService",
  },
  cognitoidentityprovider: {
    sdkId: "Cognito Identity Provider",
    version: "2016-04-18",
    arnNamespace: "cognito-idp",
    cloudTrailEventSource: "cognito-idp.amazonaws.com",
    endpointPrefix: "cognito-idp",
    protocol: "awsJson1_1",
    targetPrefix: "AWSCognitoIdentityProviderService",
  },
  cognitosync: {
    sdkId: "Cognito Sync",
    version: "2014-06-30",
    arnNamespace: "cognito-sync",
    cloudTrailEventSource: "cognitosync.amazonaws.com",
    endpointPrefix: "cognito-sync",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BulkPublish: "POST /identitypools/{IdentityPoolId}/bulkpublish",
      DeleteDataset:
        "DELETE /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
      DescribeDataset:
        "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
      DescribeIdentityPoolUsage: "GET /identitypools/{IdentityPoolId}",
      DescribeIdentityUsage:
        "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}",
      GetBulkPublishDetails:
        "POST /identitypools/{IdentityPoolId}/getBulkPublishDetails",
      GetCognitoEvents: "GET /identitypools/{IdentityPoolId}/events",
      GetIdentityPoolConfiguration:
        "GET /identitypools/{IdentityPoolId}/configuration",
      ListDatasets:
        "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets",
      ListIdentityPoolUsage: "GET /identitypools",
      ListRecords:
        "GET /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records",
      RegisterDevice:
        "POST /identitypools/{IdentityPoolId}/identity/{IdentityId}/device",
      SetCognitoEvents: "POST /identitypools/{IdentityPoolId}/events",
      SetIdentityPoolConfiguration:
        "POST /identitypools/{IdentityPoolId}/configuration",
      SubscribeToDataset:
        "POST /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
      UnsubscribeFromDataset:
        "DELETE /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
      UpdateRecords:
        "POST /identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
    },
  },
  comprehend: {
    sdkId: "Comprehend",
    version: "2017-11-27",
    arnNamespace: "comprehend",
    cloudTrailEventSource: "comprehend.amazonaws.com",
    endpointPrefix: "comprehend",
    protocol: "awsJson1_1",
    targetPrefix: "Comprehend_20171127",
  },
  comprehendmedical: {
    sdkId: "ComprehendMedical",
    version: "2018-10-30",
    arnNamespace: "comprehendmedical",
    cloudTrailEventSource: "comprehendmedical.amazonaws.com",
    endpointPrefix: "comprehendmedical",
    protocol: "awsJson1_1",
    targetPrefix: "ComprehendMedical_20181030",
  },
  computeoptimizer: {
    sdkId: "Compute Optimizer",
    version: "2019-11-01",
    arnNamespace: "compute-optimizer",
    cloudTrailEventSource: "computeoptimizer.amazonaws.com",
    endpointPrefix: "compute-optimizer",
    protocol: "awsJson1_0",
    targetPrefix: "ComputeOptimizerService",
  },
  configservice: {
    sdkId: "Config Service",
    version: "2014-11-12",
    arnNamespace: "config",
    cloudTrailEventSource: "configservice.amazonaws.com",
    endpointPrefix: "config",
    protocol: "awsJson1_1",
    targetPrefix: "StarlingDoveService",
  },
  connect: {
    sdkId: "Connect",
    version: "2017-08-08",
    arnNamespace: "connect",
    cloudTrailEventSource: "connect.amazonaws.com",
    endpointPrefix: "connect",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ActivateEvaluationForm:
        "POST /evaluation-forms/{InstanceId}/{EvaluationFormId}/activate",
      AssociateAnalyticsDataSet:
        "PUT /analytics-data/instance/{InstanceId}/association",
      AssociateApprovedOrigin: "PUT /instance/{InstanceId}/approved-origin",
      AssociateBot: "PUT /instance/{InstanceId}/bot",
      AssociateDefaultVocabulary:
        "PUT /default-vocabulary/{InstanceId}/{LanguageCode}",
      AssociateFlow: "PUT /flow-associations/{InstanceId}",
      AssociateInstanceStorageConfig:
        "PUT /instance/{InstanceId}/storage-config",
      AssociateLambdaFunction: "PUT /instance/{InstanceId}/lambda-function",
      AssociateLexBot: "PUT /instance/{InstanceId}/lex-bot",
      AssociatePhoneNumberContactFlow:
        "PUT /phone-number/{PhoneNumberId}/contact-flow",
      AssociateQueueQuickConnects:
        "POST /queues/{InstanceId}/{QueueId}/associate-quick-connects",
      AssociateRoutingProfileQueues:
        "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues",
      AssociateSecurityKey: "PUT /instance/{InstanceId}/security-key",
      AssociateTrafficDistributionGroupUser:
        "PUT /traffic-distribution-group/{TrafficDistributionGroupId}/user",
      AssociateUserProficiencies:
        "POST /users/{InstanceId}/{UserId}/associate-proficiencies",
      BatchAssociateAnalyticsDataSet:
        "PUT /analytics-data/instance/{InstanceId}/associations",
      BatchDisassociateAnalyticsDataSet:
        "POST /analytics-data/instance/{InstanceId}/associations",
      BatchGetAttachedFileMetadata: "POST /attached-files/{InstanceId}",
      BatchGetFlowAssociation: "POST /flow-associations-batch/{InstanceId}",
      BatchPutContact: "PUT /contact/batch/{InstanceId}",
      ClaimPhoneNumber: "POST /phone-number/claim",
      CompleteAttachedFileUpload: "POST /attached-files/{InstanceId}/{FileId}",
      CreateAgentStatus: "PUT /agent-status/{InstanceId}",
      CreateContact: "PUT /contact/create-contact",
      CreateContactFlow: "PUT /contact-flows/{InstanceId}",
      CreateContactFlowModule: "PUT /contact-flow-modules/{InstanceId}",
      CreateContactFlowVersion:
        "PUT /contact-flows/{InstanceId}/{ContactFlowId}/version",
      CreateEmailAddress: "PUT /email-addresses/{InstanceId}",
      CreateEvaluationForm: "PUT /evaluation-forms/{InstanceId}",
      CreateHoursOfOperation: "PUT /hours-of-operations/{InstanceId}",
      CreateHoursOfOperationOverride:
        "PUT /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides",
      CreateInstance: "PUT /instance",
      CreateIntegrationAssociation:
        "PUT /instance/{InstanceId}/integration-associations",
      CreateParticipant: "POST /contact/create-participant",
      CreatePersistentContactAssociation:
        "POST /contact/persistent-contact-association/{InstanceId}/{InitialContactId}",
      CreatePredefinedAttribute: "PUT /predefined-attributes/{InstanceId}",
      CreatePrompt: "PUT /prompts/{InstanceId}",
      CreatePushNotificationRegistration:
        "PUT /push-notification/{InstanceId}/registrations",
      CreateQueue: "PUT /queues/{InstanceId}",
      CreateQuickConnect: "PUT /quick-connects/{InstanceId}",
      CreateRoutingProfile: "PUT /routing-profiles/{InstanceId}",
      CreateRule: "POST /rules/{InstanceId}",
      CreateSecurityProfile: "PUT /security-profiles/{InstanceId}",
      CreateTaskTemplate: "PUT /instance/{InstanceId}/task/template",
      CreateTrafficDistributionGroup: "PUT /traffic-distribution-group",
      CreateUseCase:
        "PUT /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases",
      CreateUser: "PUT /users/{InstanceId}",
      CreateUserHierarchyGroup: "PUT /user-hierarchy-groups/{InstanceId}",
      CreateView: "PUT /views/{InstanceId}",
      CreateViewVersion: "PUT /views/{InstanceId}/{ViewId}/versions",
      CreateVocabulary: "POST /vocabulary/{InstanceId}",
      DeactivateEvaluationForm:
        "POST /evaluation-forms/{InstanceId}/{EvaluationFormId}/deactivate",
      DeleteAttachedFile: "DELETE /attached-files/{InstanceId}/{FileId}",
      DeleteContactEvaluation:
        "DELETE /contact-evaluations/{InstanceId}/{EvaluationId}",
      DeleteContactFlow: "DELETE /contact-flows/{InstanceId}/{ContactFlowId}",
      DeleteContactFlowModule:
        "DELETE /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}",
      DeleteContactFlowVersion:
        "DELETE /contact-flows/{InstanceId}/{ContactFlowId}/version/{ContactFlowVersion}",
      DeleteEmailAddress:
        "DELETE /email-addresses/{InstanceId}/{EmailAddressId}",
      DeleteEvaluationForm:
        "DELETE /evaluation-forms/{InstanceId}/{EvaluationFormId}",
      DeleteHoursOfOperation:
        "DELETE /hours-of-operations/{InstanceId}/{HoursOfOperationId}",
      DeleteHoursOfOperationOverride:
        "DELETE /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides/{HoursOfOperationOverrideId}",
      DeleteInstance: "DELETE /instance/{InstanceId}",
      DeleteIntegrationAssociation:
        "DELETE /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}",
      DeletePredefinedAttribute:
        "DELETE /predefined-attributes/{InstanceId}/{Name}",
      DeletePrompt: "DELETE /prompts/{InstanceId}/{PromptId}",
      DeletePushNotificationRegistration:
        "DELETE /push-notification/{InstanceId}/registrations/{RegistrationId}",
      DeleteQueue: "DELETE /queues/{InstanceId}/{QueueId}",
      DeleteQuickConnect:
        "DELETE /quick-connects/{InstanceId}/{QuickConnectId}",
      DeleteRoutingProfile:
        "DELETE /routing-profiles/{InstanceId}/{RoutingProfileId}",
      DeleteRule: "DELETE /rules/{InstanceId}/{RuleId}",
      DeleteSecurityProfile:
        "DELETE /security-profiles/{InstanceId}/{SecurityProfileId}",
      DeleteTaskTemplate:
        "DELETE /instance/{InstanceId}/task/template/{TaskTemplateId}",
      DeleteTrafficDistributionGroup:
        "DELETE /traffic-distribution-group/{TrafficDistributionGroupId}",
      DeleteUseCase:
        "DELETE /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}",
      DeleteUser: "DELETE /users/{InstanceId}/{UserId}",
      DeleteUserHierarchyGroup:
        "DELETE /user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}",
      DeleteView: "DELETE /views/{InstanceId}/{ViewId}",
      DeleteViewVersion:
        "DELETE /views/{InstanceId}/{ViewId}/versions/{ViewVersion}",
      DeleteVocabulary: "POST /vocabulary-remove/{InstanceId}/{VocabularyId}",
      DescribeAgentStatus: "GET /agent-status/{InstanceId}/{AgentStatusId}",
      DescribeAuthenticationProfile:
        "GET /authentication-profiles/{InstanceId}/{AuthenticationProfileId}",
      DescribeContact: "GET /contacts/{InstanceId}/{ContactId}",
      DescribeContactEvaluation:
        "GET /contact-evaluations/{InstanceId}/{EvaluationId}",
      DescribeContactFlow: "GET /contact-flows/{InstanceId}/{ContactFlowId}",
      DescribeContactFlowModule:
        "GET /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}",
      DescribeEmailAddress:
        "GET /email-addresses/{InstanceId}/{EmailAddressId}",
      DescribeEvaluationForm:
        "GET /evaluation-forms/{InstanceId}/{EvaluationFormId}",
      DescribeHoursOfOperation:
        "GET /hours-of-operations/{InstanceId}/{HoursOfOperationId}",
      DescribeHoursOfOperationOverride:
        "GET /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides/{HoursOfOperationOverrideId}",
      DescribeInstance: "GET /instance/{InstanceId}",
      DescribeInstanceAttribute:
        "GET /instance/{InstanceId}/attribute/{AttributeType}",
      DescribeInstanceStorageConfig:
        "GET /instance/{InstanceId}/storage-config/{AssociationId}",
      DescribePhoneNumber: "GET /phone-number/{PhoneNumberId}",
      DescribePredefinedAttribute:
        "GET /predefined-attributes/{InstanceId}/{Name}",
      DescribePrompt: "GET /prompts/{InstanceId}/{PromptId}",
      DescribeQueue: "GET /queues/{InstanceId}/{QueueId}",
      DescribeQuickConnect: "GET /quick-connects/{InstanceId}/{QuickConnectId}",
      DescribeRoutingProfile:
        "GET /routing-profiles/{InstanceId}/{RoutingProfileId}",
      DescribeRule: "GET /rules/{InstanceId}/{RuleId}",
      DescribeSecurityProfile:
        "GET /security-profiles/{InstanceId}/{SecurityProfileId}",
      DescribeTrafficDistributionGroup:
        "GET /traffic-distribution-group/{TrafficDistributionGroupId}",
      DescribeUser: "GET /users/{InstanceId}/{UserId}",
      DescribeUserHierarchyGroup:
        "GET /user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}",
      DescribeUserHierarchyStructure:
        "GET /user-hierarchy-structure/{InstanceId}",
      DescribeView: "GET /views/{InstanceId}/{ViewId}",
      DescribeVocabulary: "GET /vocabulary/{InstanceId}/{VocabularyId}",
      DisassociateAnalyticsDataSet:
        "POST /analytics-data/instance/{InstanceId}/association",
      DisassociateApprovedOrigin:
        "DELETE /instance/{InstanceId}/approved-origin",
      DisassociateBot: "POST /instance/{InstanceId}/bot",
      DisassociateFlow:
        "DELETE /flow-associations/{InstanceId}/{ResourceId}/{ResourceType}",
      DisassociateInstanceStorageConfig:
        "DELETE /instance/{InstanceId}/storage-config/{AssociationId}",
      DisassociateLambdaFunction:
        "DELETE /instance/{InstanceId}/lambda-function",
      DisassociateLexBot: "DELETE /instance/{InstanceId}/lex-bot",
      DisassociatePhoneNumberContactFlow:
        "DELETE /phone-number/{PhoneNumberId}/contact-flow",
      DisassociateQueueQuickConnects:
        "POST /queues/{InstanceId}/{QueueId}/disassociate-quick-connects",
      DisassociateRoutingProfileQueues:
        "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues",
      DisassociateSecurityKey:
        "DELETE /instance/{InstanceId}/security-key/{AssociationId}",
      DisassociateTrafficDistributionGroupUser:
        "DELETE /traffic-distribution-group/{TrafficDistributionGroupId}/user",
      DisassociateUserProficiencies:
        "POST /users/{InstanceId}/{UserId}/disassociate-proficiencies",
      DismissUserContact: "POST /users/{InstanceId}/{UserId}/contact",
      GetAttachedFile: "GET /attached-files/{InstanceId}/{FileId}",
      GetContactAttributes:
        "GET /contact/attributes/{InstanceId}/{InitialContactId}",
      GetCurrentMetricData: "POST /metrics/current/{InstanceId}",
      GetCurrentUserData: "POST /metrics/userdata/{InstanceId}",
      GetEffectiveHoursOfOperations:
        "GET /effective-hours-of-operations/{InstanceId}/{HoursOfOperationId}",
      GetFederationToken: "GET /user/federate/{InstanceId}",
      GetFlowAssociation:
        "GET /flow-associations/{InstanceId}/{ResourceId}/{ResourceType}",
      GetMetricData: "POST /metrics/historical/{InstanceId}",
      GetMetricDataV2: "POST /metrics/data",
      GetPromptFile: "GET /prompts/{InstanceId}/{PromptId}/file",
      GetTaskTemplate:
        "GET /instance/{InstanceId}/task/template/{TaskTemplateId}",
      GetTrafficDistribution: "GET /traffic-distribution/{Id}",
      ImportPhoneNumber: "POST /phone-number/import",
      ListAgentStatuses: "GET /agent-status/{InstanceId}",
      ListAnalyticsDataAssociations:
        "GET /analytics-data/instance/{InstanceId}/association",
      ListAnalyticsDataLakeDataSets:
        "GET /analytics-data/instance/{InstanceId}/datasets",
      ListApprovedOrigins: "GET /instance/{InstanceId}/approved-origins",
      ListAssociatedContacts: "GET /contact/associated/{InstanceId}",
      ListAuthenticationProfiles:
        "GET /authentication-profiles-summary/{InstanceId}",
      ListBots: "GET /instance/{InstanceId}/bots",
      ListContactEvaluations: "GET /contact-evaluations/{InstanceId}",
      ListContactFlowModules: "GET /contact-flow-modules-summary/{InstanceId}",
      ListContactFlows: "GET /contact-flows-summary/{InstanceId}",
      ListContactFlowVersions:
        "GET /contact-flows/{InstanceId}/{ContactFlowId}/versions",
      ListContactReferences: "GET /contact/references/{InstanceId}/{ContactId}",
      ListDefaultVocabularies: "POST /default-vocabulary-summary/{InstanceId}",
      ListEvaluationForms: "GET /evaluation-forms/{InstanceId}",
      ListEvaluationFormVersions:
        "GET /evaluation-forms/{InstanceId}/{EvaluationFormId}/versions",
      ListFlowAssociations: "GET /flow-associations-summary/{InstanceId}",
      ListHoursOfOperationOverrides:
        "GET /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides",
      ListHoursOfOperations: "GET /hours-of-operations-summary/{InstanceId}",
      ListInstanceAttributes: "GET /instance/{InstanceId}/attributes",
      ListInstances: "GET /instance",
      ListInstanceStorageConfigs: "GET /instance/{InstanceId}/storage-configs",
      ListIntegrationAssociations:
        "GET /instance/{InstanceId}/integration-associations",
      ListLambdaFunctions: "GET /instance/{InstanceId}/lambda-functions",
      ListLexBots: "GET /instance/{InstanceId}/lex-bots",
      ListPhoneNumbers: "GET /phone-numbers-summary/{InstanceId}",
      ListPhoneNumbersV2: "POST /phone-number/list",
      ListPredefinedAttributes: "GET /predefined-attributes/{InstanceId}",
      ListPrompts: "GET /prompts-summary/{InstanceId}",
      ListQueueQuickConnects:
        "GET /queues/{InstanceId}/{QueueId}/quick-connects",
      ListQueues: "GET /queues-summary/{InstanceId}",
      ListQuickConnects: "GET /quick-connects/{InstanceId}",
      ListRealtimeContactAnalysisSegmentsV2:
        "POST /contact/list-real-time-analysis-segments-v2/{InstanceId}/{ContactId}",
      ListRoutingProfileQueues:
        "GET /routing-profiles/{InstanceId}/{RoutingProfileId}/queues",
      ListRoutingProfiles: "GET /routing-profiles-summary/{InstanceId}",
      ListRules: "GET /rules/{InstanceId}",
      ListSecurityKeys: "GET /instance/{InstanceId}/security-keys",
      ListSecurityProfileApplications:
        "GET /security-profiles-applications/{InstanceId}/{SecurityProfileId}",
      ListSecurityProfilePermissions:
        "GET /security-profiles-permissions/{InstanceId}/{SecurityProfileId}",
      ListSecurityProfiles: "GET /security-profiles-summary/{InstanceId}",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListTaskTemplates: "GET /instance/{InstanceId}/task/template",
      ListTrafficDistributionGroups: "GET /traffic-distribution-groups",
      ListTrafficDistributionGroupUsers:
        "GET /traffic-distribution-group/{TrafficDistributionGroupId}/user",
      ListUseCases:
        "GET /instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases",
      ListUserHierarchyGroups:
        "GET /user-hierarchy-groups-summary/{InstanceId}",
      ListUserProficiencies: "GET /users/{InstanceId}/{UserId}/proficiencies",
      ListUsers: "GET /users-summary/{InstanceId}",
      ListViews: "GET /views/{InstanceId}",
      ListViewVersions: "GET /views/{InstanceId}/{ViewId}/versions",
      MonitorContact: "POST /contact/monitor",
      PauseContact: "POST /contact/pause",
      PutUserStatus: "PUT /users/{InstanceId}/{UserId}/status",
      ReleasePhoneNumber: "DELETE /phone-number/{PhoneNumberId}",
      ReplicateInstance: "POST /instance/{InstanceId}/replicate",
      ResumeContact: "POST /contact/resume",
      ResumeContactRecording: "POST /contact/resume-recording",
      SearchAgentStatuses: "POST /search-agent-statuses",
      SearchAvailablePhoneNumbers: "POST /phone-number/search-available",
      SearchContactFlowModules: "POST /search-contact-flow-modules",
      SearchContactFlows: "POST /search-contact-flows",
      SearchContacts: "POST /search-contacts",
      SearchEmailAddresses: "POST /search-email-addresses",
      SearchHoursOfOperationOverrides:
        "POST /search-hours-of-operation-overrides",
      SearchHoursOfOperations: "POST /search-hours-of-operations",
      SearchPredefinedAttributes: "POST /search-predefined-attributes",
      SearchPrompts: "POST /search-prompts",
      SearchQueues: "POST /search-queues",
      SearchQuickConnects: "POST /search-quick-connects",
      SearchResourceTags: "POST /search-resource-tags",
      SearchRoutingProfiles: "POST /search-routing-profiles",
      SearchSecurityProfiles: "POST /search-security-profiles",
      SearchUserHierarchyGroups: "POST /search-user-hierarchy-groups",
      SearchUsers: "POST /search-users",
      SearchVocabularies: "POST /vocabulary-summary/{InstanceId}",
      SendChatIntegrationEvent: "POST /chat-integration-event",
      SendOutboundEmail: "PUT /instance/{InstanceId}/outbound-email",
      StartAttachedFileUpload: "PUT /attached-files/{InstanceId}",
      StartChatContact: "PUT /contact/chat",
      StartContactEvaluation: "PUT /contact-evaluations/{InstanceId}",
      StartContactRecording: "POST /contact/start-recording",
      StartContactStreaming: "POST /contact/start-streaming",
      StartEmailContact: "PUT /contact/email",
      StartOutboundChatContact: "PUT /contact/outbound-chat",
      StartOutboundEmailContact: "PUT /contact/outbound-email",
      StartOutboundVoiceContact: "PUT /contact/outbound-voice",
      StartScreenSharing: "PUT /contact/screen-sharing",
      StartTaskContact: "PUT /contact/task",
      StartWebRTCContact: "PUT /contact/webrtc",
      StopContact: "POST /contact/stop",
      StopContactRecording: "POST /contact/stop-recording",
      StopContactStreaming: "POST /contact/stop-streaming",
      SubmitContactEvaluation:
        "POST /contact-evaluations/{InstanceId}/{EvaluationId}/submit",
      SuspendContactRecording: "POST /contact/suspend-recording",
      TagContact: "POST /contact/tags",
      TagResource: "POST /tags/{resourceArn}",
      TransferContact: "POST /contact/transfer",
      UntagContact: "DELETE /contact/tags/{InstanceId}/{ContactId}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateAgentStatus: "POST /agent-status/{InstanceId}/{AgentStatusId}",
      UpdateAuthenticationProfile:
        "POST /authentication-profiles/{InstanceId}/{AuthenticationProfileId}",
      UpdateContact: "POST /contacts/{InstanceId}/{ContactId}",
      UpdateContactAttributes: "POST /contact/attributes",
      UpdateContactEvaluation:
        "POST /contact-evaluations/{InstanceId}/{EvaluationId}",
      UpdateContactFlowContent:
        "POST /contact-flows/{InstanceId}/{ContactFlowId}/content",
      UpdateContactFlowMetadata:
        "POST /contact-flows/{InstanceId}/{ContactFlowId}/metadata",
      UpdateContactFlowModuleContent:
        "POST /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/content",
      UpdateContactFlowModuleMetadata:
        "POST /contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/metadata",
      UpdateContactFlowName:
        "POST /contact-flows/{InstanceId}/{ContactFlowId}/name",
      UpdateContactRoutingData:
        "POST /contacts/{InstanceId}/{ContactId}/routing-data",
      UpdateContactSchedule: "POST /contact/schedule",
      UpdateEmailAddressMetadata:
        "POST /email-addresses/{InstanceId}/{EmailAddressId}",
      UpdateEvaluationForm:
        "PUT /evaluation-forms/{InstanceId}/{EvaluationFormId}",
      UpdateHoursOfOperation:
        "POST /hours-of-operations/{InstanceId}/{HoursOfOperationId}",
      UpdateHoursOfOperationOverride:
        "POST /hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides/{HoursOfOperationOverrideId}",
      UpdateInstanceAttribute:
        "POST /instance/{InstanceId}/attribute/{AttributeType}",
      UpdateInstanceStorageConfig:
        "POST /instance/{InstanceId}/storage-config/{AssociationId}",
      UpdateParticipantAuthentication:
        "POST /contact/update-participant-authentication",
      UpdateParticipantRoleConfig:
        "PUT /contact/participant-role-config/{InstanceId}/{ContactId}",
      UpdatePhoneNumber: "PUT /phone-number/{PhoneNumberId}",
      UpdatePhoneNumberMetadata: "PUT /phone-number/{PhoneNumberId}/metadata",
      UpdatePredefinedAttribute:
        "POST /predefined-attributes/{InstanceId}/{Name}",
      UpdatePrompt: "POST /prompts/{InstanceId}/{PromptId}",
      UpdateQueueHoursOfOperation:
        "POST /queues/{InstanceId}/{QueueId}/hours-of-operation",
      UpdateQueueMaxContacts:
        "POST /queues/{InstanceId}/{QueueId}/max-contacts",
      UpdateQueueName: "POST /queues/{InstanceId}/{QueueId}/name",
      UpdateQueueOutboundCallerConfig:
        "POST /queues/{InstanceId}/{QueueId}/outbound-caller-config",
      UpdateQueueOutboundEmailConfig:
        "POST /queues/{InstanceId}/{QueueId}/outbound-email-config",
      UpdateQueueStatus: "POST /queues/{InstanceId}/{QueueId}/status",
      UpdateQuickConnectConfig:
        "POST /quick-connects/{InstanceId}/{QuickConnectId}/config",
      UpdateQuickConnectName:
        "POST /quick-connects/{InstanceId}/{QuickConnectId}/name",
      UpdateRoutingProfileAgentAvailabilityTimer:
        "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/agent-availability-timer",
      UpdateRoutingProfileConcurrency:
        "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency",
      UpdateRoutingProfileDefaultOutboundQueue:
        "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue",
      UpdateRoutingProfileName:
        "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/name",
      UpdateRoutingProfileQueues:
        "POST /routing-profiles/{InstanceId}/{RoutingProfileId}/queues",
      UpdateRule: "PUT /rules/{InstanceId}/{RuleId}",
      UpdateSecurityProfile:
        "POST /security-profiles/{InstanceId}/{SecurityProfileId}",
      UpdateTaskTemplate:
        "POST /instance/{InstanceId}/task/template/{TaskTemplateId}",
      UpdateTrafficDistribution: "PUT /traffic-distribution/{Id}",
      UpdateUserHierarchy: "POST /users/{InstanceId}/{UserId}/hierarchy",
      UpdateUserHierarchyGroupName:
        "POST /user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name",
      UpdateUserHierarchyStructure:
        "POST /user-hierarchy-structure/{InstanceId}",
      UpdateUserIdentityInfo: "POST /users/{InstanceId}/{UserId}/identity-info",
      UpdateUserPhoneConfig: "POST /users/{InstanceId}/{UserId}/phone-config",
      UpdateUserProficiencies:
        "POST /users/{InstanceId}/{UserId}/proficiencies",
      UpdateUserRoutingProfile:
        "POST /users/{InstanceId}/{UserId}/routing-profile",
      UpdateUserSecurityProfiles:
        "POST /users/{InstanceId}/{UserId}/security-profiles",
      UpdateViewContent: "POST /views/{InstanceId}/{ViewId}",
      UpdateViewMetadata: "POST /views/{InstanceId}/{ViewId}/metadata",
    },
  },
  connectcontactlens: {
    sdkId: "Connect Contact Lens",
    version: "2020-08-21",
    arnNamespace: "connect",
    cloudTrailEventSource: "connectcontactlens.amazonaws.com",
    endpointPrefix: "contact-lens",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListRealtimeContactAnalysisSegments:
        "POST /realtime-contact-analysis/analysis-segments",
    },
  },
  connectcampaigns: {
    sdkId: "ConnectCampaigns",
    version: "2021-01-30",
    arnNamespace: "connect-campaigns",
    cloudTrailEventSource: "connect-campaigns.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateCampaign: "PUT /campaigns",
      DeleteCampaign: "DELETE /campaigns/{id}",
      DeleteConnectInstanceConfig:
        "DELETE /connect-instance/{connectInstanceId}/config",
      DeleteInstanceOnboardingJob:
        "DELETE /connect-instance/{connectInstanceId}/onboarding",
      DescribeCampaign: "GET /campaigns/{id}",
      GetCampaignState: "GET /campaigns/{id}/state",
      GetCampaignStateBatch: "POST /campaigns-state",
      GetConnectInstanceConfig:
        "GET /connect-instance/{connectInstanceId}/config",
      GetInstanceOnboardingJobStatus:
        "GET /connect-instance/{connectInstanceId}/onboarding",
      ListCampaigns: "POST /campaigns-summary",
      ListTagsForResource: "GET /tags/{arn}",
      PauseCampaign: "POST /campaigns/{id}/pause",
      PutDialRequestBatch: "PUT /campaigns/{id}/dial-requests",
      ResumeCampaign: "POST /campaigns/{id}/resume",
      StartCampaign: "POST /campaigns/{id}/start",
      StartInstanceOnboardingJob:
        "PUT /connect-instance/{connectInstanceId}/onboarding",
      StopCampaign: "POST /campaigns/{id}/stop",
      TagResource: "POST /tags/{arn}",
      UntagResource: "DELETE /tags/{arn}",
      UpdateCampaignDialerConfig: "POST /campaigns/{id}/dialer-config",
      UpdateCampaignName: "POST /campaigns/{id}/name",
      UpdateCampaignOutboundCallConfig:
        "POST /campaigns/{id}/outbound-call-config",
    },
  },
  connectcampaignsv2: {
    sdkId: "ConnectCampaignsV2",
    version: "2024-04-23",
    arnNamespace: "connect-campaigns",
    cloudTrailEventSource: "connect-campaigns.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateCampaign: "PUT /v2/campaigns",
      DeleteCampaign: "DELETE /v2/campaigns/{id}",
      DeleteCampaignChannelSubtypeConfig:
        "DELETE /v2/campaigns/{id}/channel-subtype-config",
      DeleteCampaignCommunicationLimits:
        "DELETE /v2/campaigns/{id}/communication-limits",
      DeleteCampaignCommunicationTime:
        "DELETE /v2/campaigns/{id}/communication-time",
      DeleteConnectInstanceConfig:
        "DELETE /v2/connect-instance/{connectInstanceId}/config",
      DeleteConnectInstanceIntegration:
        "POST /v2/connect-instance/{connectInstanceId}/integrations/delete",
      DeleteInstanceOnboardingJob:
        "DELETE /v2/connect-instance/{connectInstanceId}/onboarding",
      DescribeCampaign: "GET /v2/campaigns/{id}",
      GetCampaignState: "GET /v2/campaigns/{id}/state",
      GetCampaignStateBatch: "POST /v2/campaigns-state",
      GetConnectInstanceConfig:
        "GET /v2/connect-instance/{connectInstanceId}/config",
      GetInstanceCommunicationLimits:
        "GET /v2/connect-instance/{connectInstanceId}/communication-limits",
      GetInstanceOnboardingJobStatus:
        "GET /v2/connect-instance/{connectInstanceId}/onboarding",
      ListCampaigns: "POST /v2/campaigns-summary",
      ListConnectInstanceIntegrations:
        "GET /v2/connect-instance/{connectInstanceId}/integrations",
      ListTagsForResource: "GET /v2/tags/{arn}",
      PauseCampaign: "POST /v2/campaigns/{id}/pause",
      PutConnectInstanceIntegration:
        "PUT /v2/connect-instance/{connectInstanceId}/integrations",
      PutInstanceCommunicationLimits:
        "PUT /v2/connect-instance/{connectInstanceId}/communication-limits",
      PutOutboundRequestBatch: "PUT /v2/campaigns/{id}/outbound-requests",
      PutProfileOutboundRequestBatch:
        "PUT /v2/campaigns/{id}/profile-outbound-requests",
      ResumeCampaign: "POST /v2/campaigns/{id}/resume",
      StartCampaign: "POST /v2/campaigns/{id}/start",
      StartInstanceOnboardingJob:
        "PUT /v2/connect-instance/{connectInstanceId}/onboarding",
      StopCampaign: "POST /v2/campaigns/{id}/stop",
      TagResource: "POST /v2/tags/{arn}",
      UntagResource: "DELETE /v2/tags/{arn}",
      UpdateCampaignChannelSubtypeConfig:
        "POST /v2/campaigns/{id}/channel-subtype-config",
      UpdateCampaignCommunicationLimits:
        "POST /v2/campaigns/{id}/communication-limits",
      UpdateCampaignCommunicationTime:
        "POST /v2/campaigns/{id}/communication-time",
      UpdateCampaignFlowAssociation: "POST /v2/campaigns/{id}/flow",
      UpdateCampaignName: "POST /v2/campaigns/{id}/name",
      UpdateCampaignSchedule: "POST /v2/campaigns/{id}/schedule",
      UpdateCampaignSource: "POST /v2/campaigns/{id}/source",
    },
  },
  connectcases: {
    sdkId: "ConnectCases",
    version: "2022-10-03",
    arnNamespace: "cases",
    cloudTrailEventSource: "event-source-placeholder",
    endpointPrefix: "cases",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{arn}",
      TagResource: "POST /tags/{arn}",
      UntagResource: "DELETE /tags/{arn}",
      BatchGetCaseRule: "POST /domains/{domainId}/rules-batch",
      BatchGetField: "POST /domains/{domainId}/fields-batch",
      BatchPutFieldOptions: "PUT /domains/{domainId}/fields/{fieldId}/options",
      CreateCase: "POST /domains/{domainId}/cases",
      CreateCaseRule: "POST /domains/{domainId}/case-rules",
      CreateDomain: "POST /domains",
      CreateField: "POST /domains/{domainId}/fields",
      CreateLayout: "POST /domains/{domainId}/layouts",
      CreateRelatedItem:
        "POST /domains/{domainId}/cases/{caseId}/related-items/",
      CreateTemplate: "POST /domains/{domainId}/templates",
      DeleteCase: "DELETE /domains/{domainId}/cases/{caseId}",
      DeleteCaseRule: "DELETE /domains/{domainId}/case-rules/{caseRuleId}",
      DeleteDomain: "DELETE /domains/{domainId}",
      DeleteField: "DELETE /domains/{domainId}/fields/{fieldId}",
      DeleteLayout: "DELETE /domains/{domainId}/layouts/{layoutId}",
      DeleteRelatedItem:
        "DELETE /domains/{domainId}/cases/{caseId}/related-items/{relatedItemId}",
      DeleteTemplate: "DELETE /domains/{domainId}/templates/{templateId}",
      GetCase: "POST /domains/{domainId}/cases/{caseId}",
      GetCaseAuditEvents:
        "POST /domains/{domainId}/cases/{caseId}/audit-history",
      GetCaseEventConfiguration:
        "POST /domains/{domainId}/case-event-configuration",
      GetDomain: "POST /domains/{domainId}",
      GetLayout: "POST /domains/{domainId}/layouts/{layoutId}",
      GetTemplate: "POST /domains/{domainId}/templates/{templateId}",
      ListCaseRules: "POST /domains/{domainId}/rules-list/",
      ListCasesForContact: "POST /domains/{domainId}/list-cases-for-contact",
      ListDomains: "POST /domains-list",
      ListFieldOptions:
        "POST /domains/{domainId}/fields/{fieldId}/options-list",
      ListFields: "POST /domains/{domainId}/fields-list",
      ListLayouts: "POST /domains/{domainId}/layouts-list",
      ListTemplates: "POST /domains/{domainId}/templates-list",
      PutCaseEventConfiguration:
        "PUT /domains/{domainId}/case-event-configuration",
      SearchCases: "POST /domains/{domainId}/cases-search",
      SearchRelatedItems:
        "POST /domains/{domainId}/cases/{caseId}/related-items-search",
      UpdateCase: "PUT /domains/{domainId}/cases/{caseId}",
      UpdateCaseRule: "PUT /domains/{domainId}/case-rules/{caseRuleId}",
      UpdateField: "PUT /domains/{domainId}/fields/{fieldId}",
      UpdateLayout: "PUT /domains/{domainId}/layouts/{layoutId}",
      UpdateTemplate: "PUT /domains/{domainId}/templates/{templateId}",
    },
  },
  connectparticipant: {
    sdkId: "ConnectParticipant",
    version: "2018-09-07",
    arnNamespace: "connect",
    cloudTrailEventSource: "connectparticipant.amazonaws.com",
    endpointPrefix: "participant.connect",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelParticipantAuthentication:
        "POST /participant/cancel-authentication",
      CompleteAttachmentUpload: "POST /participant/complete-attachment-upload",
      CreateParticipantConnection: "POST /participant/connection",
      DescribeView: "GET /participant/views/{ViewToken}",
      DisconnectParticipant: "POST /participant/disconnect",
      GetAttachment: "POST /participant/attachment",
      GetAuthenticationUrl: "POST /participant/authentication-url",
      GetTranscript: "POST /participant/transcript",
      SendEvent: "POST /participant/event",
      SendMessage: "POST /participant/message",
      StartAttachmentUpload: "POST /participant/start-attachment-upload",
    },
  },
  controlcatalog: {
    sdkId: "ControlCatalog",
    version: "2018-05-10",
    arnNamespace: "controlcatalog",
    cloudTrailEventSource: "controlcatalog.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListControlMappings: "POST /list-control-mappings",
      GetControl: "POST /get-control",
      ListCommonControls: "POST /common-controls",
      ListControls: "POST /list-controls",
      ListDomains: "POST /domains",
      ListObjectives: "POST /objectives",
    },
  },
  controltower: {
    sdkId: "ControlTower",
    version: "2018-05-10",
    arnNamespace: "controltower",
    cloudTrailEventSource: "controltower.amazonaws.com",
    endpointPrefix: "controltower",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DisableControl: "POST /disable-control",
      CreateLandingZone: "POST /create-landingzone",
      DeleteLandingZone: "POST /delete-landingzone",
      DisableBaseline: "POST /disable-baseline",
      EnableBaseline: "POST /enable-baseline",
      EnableControl: "POST /enable-control",
      GetBaseline: "POST /get-baseline",
      GetBaselineOperation: "POST /get-baseline-operation",
      GetControlOperation: "POST /get-control-operation",
      GetEnabledBaseline: "POST /get-enabled-baseline",
      GetEnabledControl: "POST /get-enabled-control",
      GetLandingZone: "POST /get-landingzone",
      GetLandingZoneOperation: "POST /get-landingzone-operation",
      ListBaselines: "POST /list-baselines",
      ListControlOperations: "POST /list-control-operations",
      ListEnabledBaselines: "POST /list-enabled-baselines",
      ListEnabledControls: "POST /list-enabled-controls",
      ListLandingZoneOperations: "POST /list-landingzone-operations",
      ListLandingZones: "POST /list-landingzones",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ResetEnabledBaseline: "POST /reset-enabled-baseline",
      ResetEnabledControl: "POST /reset-enabled-control",
      ResetLandingZone: "POST /reset-landingzone",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateEnabledBaseline: "POST /update-enabled-baseline",
      UpdateEnabledControl: "POST /update-enabled-control",
      UpdateLandingZone: "POST /update-landingzone",
    },
  },
  costandusagereportservice: {
    sdkId: "Cost and Usage Report Service",
    version: "2017-01-06",
    arnNamespace: "cur",
    cloudTrailEventSource: "costandusagereportservice.amazonaws.com",
    endpointPrefix: "cur",
    protocol: "awsJson1_1",
    targetPrefix: "AWSOrigamiServiceGatewayService",
  },
  costexplorer: {
    sdkId: "Cost Explorer",
    version: "2017-10-25",
    arnNamespace: "ce",
    cloudTrailEventSource: "costexplorer.amazonaws.com",
    endpointPrefix: "ce",
    protocol: "awsJson1_1",
    targetPrefix: "AWSInsightsIndexService",
  },
  costoptimizationhub: {
    sdkId: "Cost Optimization Hub",
    version: "2022-07-26",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "cost-optimization-hub",
    protocol: "awsJson1_0",
    targetPrefix: "CostOptimizationHubService",
  },
  customerprofiles: {
    sdkId: "Customer Profiles",
    version: "2020-08-15",
    arnNamespace: "profile",
    cloudTrailEventSource: "profile.amazonaws.com",
    endpointPrefix: "profile",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AddProfileKey: "POST /domains/{DomainName}/profiles/keys",
      BatchGetCalculatedAttributeForProfile:
        "POST /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}/batch-get-for-profiles",
      BatchGetProfile: "POST /domains/{DomainName}/batch-get-profiles",
      CreateCalculatedAttributeDefinition:
        "POST /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
      CreateDomain: "POST /domains/{DomainName}",
      CreateDomainLayout:
        "POST /domains/{DomainName}/layouts/{LayoutDefinitionName}",
      CreateEventStream:
        "POST /domains/{DomainName}/event-streams/{EventStreamName}",
      CreateEventTrigger:
        "POST /domains/{DomainName}/event-triggers/{EventTriggerName}",
      CreateIntegrationWorkflow:
        "POST /domains/{DomainName}/workflows/integrations",
      CreateProfile: "POST /domains/{DomainName}/profiles",
      CreateSegmentDefinition:
        "POST /domains/{DomainName}/segment-definitions/{SegmentDefinitionName}",
      CreateSegmentEstimate: {
        http: "POST /domains/{DomainName}/segment-estimates",
        traits: {
          StatusCode: "httpResponseCode",
        },
      },
      CreateSegmentSnapshot:
        "POST /domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots",
      CreateUploadJob: "POST /domains/{DomainName}/upload-jobs",
      DeleteCalculatedAttributeDefinition:
        "DELETE /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
      DeleteDomain: "DELETE /domains/{DomainName}",
      DeleteDomainLayout:
        "DELETE /domains/{DomainName}/layouts/{LayoutDefinitionName}",
      DeleteEventStream:
        "DELETE /domains/{DomainName}/event-streams/{EventStreamName}",
      DeleteEventTrigger:
        "DELETE /domains/{DomainName}/event-triggers/{EventTriggerName}",
      DeleteIntegration: "POST /domains/{DomainName}/integrations/delete",
      DeleteProfile: "POST /domains/{DomainName}/profiles/delete",
      DeleteProfileKey: "POST /domains/{DomainName}/profiles/keys/delete",
      DeleteProfileObject: "POST /domains/{DomainName}/profiles/objects/delete",
      DeleteProfileObjectType:
        "DELETE /domains/{DomainName}/object-types/{ObjectTypeName}",
      DeleteSegmentDefinition:
        "DELETE /domains/{DomainName}/segment-definitions/{SegmentDefinitionName}",
      DeleteWorkflow: "DELETE /domains/{DomainName}/workflows/{WorkflowId}",
      DetectProfileObjectType: "POST /domains/{DomainName}/detect/object-types",
      GetAutoMergingPreview:
        "POST /domains/{DomainName}/identity-resolution-jobs/auto-merging-preview",
      GetCalculatedAttributeDefinition:
        "GET /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
      GetCalculatedAttributeForProfile:
        "GET /domains/{DomainName}/profile/{ProfileId}/calculated-attributes/{CalculatedAttributeName}",
      GetDomain: "GET /domains/{DomainName}",
      GetDomainLayout:
        "GET /domains/{DomainName}/layouts/{LayoutDefinitionName}",
      GetEventStream:
        "GET /domains/{DomainName}/event-streams/{EventStreamName}",
      GetEventTrigger:
        "GET /domains/{DomainName}/event-triggers/{EventTriggerName}",
      GetIdentityResolutionJob:
        "GET /domains/{DomainName}/identity-resolution-jobs/{JobId}",
      GetIntegration: "POST /domains/{DomainName}/integrations",
      GetMatches: "GET /domains/{DomainName}/matches",
      GetProfileObjectType:
        "GET /domains/{DomainName}/object-types/{ObjectTypeName}",
      GetProfileObjectTypeTemplate: "GET /templates/{TemplateId}",
      GetSegmentDefinition:
        "GET /domains/{DomainName}/segment-definitions/{SegmentDefinitionName}",
      GetSegmentEstimate: {
        http: "GET /domains/{DomainName}/segment-estimates/{EstimateId}",
        traits: {
          StatusCode: "httpResponseCode",
        },
      },
      GetSegmentMembership:
        "POST /domains/{DomainName}/segments/{SegmentDefinitionName}/membership",
      GetSegmentSnapshot:
        "GET /domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots/{SnapshotId}",
      GetSimilarProfiles: "POST /domains/{DomainName}/matches",
      GetUploadJob: "GET /domains/{DomainName}/upload-jobs/{JobId}",
      GetUploadJobPath: "GET /domains/{DomainName}/upload-jobs/{JobId}/path",
      GetWorkflow: "GET /domains/{DomainName}/workflows/{WorkflowId}",
      GetWorkflowSteps:
        "GET /domains/{DomainName}/workflows/{WorkflowId}/steps",
      ListAccountIntegrations: "POST /integrations",
      ListCalculatedAttributeDefinitions:
        "GET /domains/{DomainName}/calculated-attributes",
      ListCalculatedAttributesForProfile:
        "GET /domains/{DomainName}/profile/{ProfileId}/calculated-attributes",
      ListDomainLayouts: "GET /domains/{DomainName}/layouts",
      ListDomains: "GET /domains",
      ListEventStreams: "GET /domains/{DomainName}/event-streams",
      ListEventTriggers: "GET /domains/{DomainName}/event-triggers",
      ListIdentityResolutionJobs:
        "GET /domains/{DomainName}/identity-resolution-jobs",
      ListIntegrations: "GET /domains/{DomainName}/integrations",
      ListObjectTypeAttributes:
        "GET /domains/{DomainName}/object-types/{ObjectTypeName}/attributes",
      ListProfileAttributeValues: {
        http: "GET /domains/{DomainName}/profile-attributes/{AttributeName}/values",
        traits: {
          StatusCode: "httpResponseCode",
        },
      },
      ListProfileObjects: "POST /domains/{DomainName}/profiles/objects",
      ListProfileObjectTypes: "GET /domains/{DomainName}/object-types",
      ListProfileObjectTypeTemplates: "GET /templates",
      ListRuleBasedMatches:
        "GET /domains/{DomainName}/profiles/ruleBasedMatches",
      ListSegmentDefinitions: "GET /domains/{DomainName}/segment-definitions",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListUploadJobs: "GET /domains/{DomainName}/upload-jobs",
      ListWorkflows: "POST /domains/{DomainName}/workflows",
      MergeProfiles: "POST /domains/{DomainName}/profiles/objects/merge",
      PutIntegration: "PUT /domains/{DomainName}/integrations",
      PutProfileObject: "PUT /domains/{DomainName}/profiles/objects",
      PutProfileObjectType:
        "PUT /domains/{DomainName}/object-types/{ObjectTypeName}",
      SearchProfiles: "POST /domains/{DomainName}/profiles/search",
      StartUploadJob: "PUT /domains/{DomainName}/upload-jobs/{JobId}",
      StopUploadJob: "PUT /domains/{DomainName}/upload-jobs/{JobId}/stop",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateCalculatedAttributeDefinition:
        "PUT /domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
      UpdateDomain: "PUT /domains/{DomainName}",
      UpdateDomainLayout:
        "PUT /domains/{DomainName}/layouts/{LayoutDefinitionName}",
      UpdateEventTrigger:
        "PUT /domains/{DomainName}/event-triggers/{EventTriggerName}",
      UpdateProfile: "PUT /domains/{DomainName}/profiles",
    },
  },
  datapipeline: {
    sdkId: "Data Pipeline",
    version: "2012-10-29",
    arnNamespace: "datapipeline",
    cloudTrailEventSource: "datapipeline.amazonaws.com",
    endpointPrefix: "datapipeline",
    protocol: "awsJson1_1",
    targetPrefix: "DataPipeline",
  },
  databasemigrationservice: {
    sdkId: "Database Migration Service",
    version: "2016-01-01",
    arnNamespace: "dms",
    cloudTrailEventSource: "dms.amazonaws.com",
    endpointPrefix: "dms",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonDMSv20160101",
  },
  databrew: {
    sdkId: "DataBrew",
    version: "2017-07-25",
    arnNamespace: "databrew",
    cloudTrailEventSource: "databrew.amazonaws.com",
    endpointPrefix: "databrew",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchDeleteRecipeVersion: "POST /recipes/{Name}/batchDeleteRecipeVersion",
      CreateDataset: "POST /datasets",
      CreateProfileJob: "POST /profileJobs",
      CreateProject: "POST /projects",
      CreateRecipe: "POST /recipes",
      CreateRecipeJob: "POST /recipeJobs",
      CreateRuleset: "POST /rulesets",
      CreateSchedule: "POST /schedules",
      DeleteDataset: "DELETE /datasets/{Name}",
      DeleteJob: "DELETE /jobs/{Name}",
      DeleteProject: "DELETE /projects/{Name}",
      DeleteRecipeVersion:
        "DELETE /recipes/{Name}/recipeVersion/{RecipeVersion}",
      DeleteRuleset: "DELETE /rulesets/{Name}",
      DeleteSchedule: "DELETE /schedules/{Name}",
      DescribeDataset: "GET /datasets/{Name}",
      DescribeJob: "GET /jobs/{Name}",
      DescribeJobRun: "GET /jobs/{Name}/jobRun/{RunId}",
      DescribeProject: "GET /projects/{Name}",
      DescribeRecipe: "GET /recipes/{Name}",
      DescribeRuleset: "GET /rulesets/{Name}",
      DescribeSchedule: "GET /schedules/{Name}",
      ListDatasets: "GET /datasets",
      ListJobRuns: "GET /jobs/{Name}/jobRuns",
      ListJobs: "GET /jobs",
      ListProjects: "GET /projects",
      ListRecipes: "GET /recipes",
      ListRecipeVersions: "GET /recipeVersions",
      ListRulesets: "GET /rulesets",
      ListSchedules: "GET /schedules",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      PublishRecipe: "POST /recipes/{Name}/publishRecipe",
      SendProjectSessionAction: "PUT /projects/{Name}/sendProjectSessionAction",
      StartJobRun: "POST /jobs/{Name}/startJobRun",
      StartProjectSession: "PUT /projects/{Name}/startProjectSession",
      StopJobRun: "POST /jobs/{Name}/jobRun/{RunId}/stopJobRun",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateDataset: "PUT /datasets/{Name}",
      UpdateProfileJob: "PUT /profileJobs/{Name}",
      UpdateProject: "PUT /projects/{Name}",
      UpdateRecipe: "PUT /recipes/{Name}",
      UpdateRecipeJob: "PUT /recipeJobs/{Name}",
      UpdateRuleset: "PUT /rulesets/{Name}",
      UpdateSchedule: "PUT /schedules/{Name}",
    },
  },
  dataexchange: {
    sdkId: "DataExchange",
    version: "2017-07-25",
    arnNamespace: "dataexchange",
    cloudTrailEventSource: "dataexchange.amazonaws.com",
    endpointPrefix: "dataexchange",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptDataGrant: "POST /v1/data-grants/{DataGrantArn}/accept",
      CancelJob: "DELETE /v1/jobs/{JobId}",
      CreateDataGrant: "POST /v1/data-grants",
      CreateDataSet: "POST /v1/data-sets",
      CreateEventAction: "POST /v1/event-actions",
      CreateJob: "POST /v1/jobs",
      CreateRevision: "POST /v1/data-sets/{DataSetId}/revisions",
      DeleteAsset:
        "DELETE /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}",
      DeleteDataGrant: "DELETE /v1/data-grants/{DataGrantId}",
      DeleteDataSet: "DELETE /v1/data-sets/{DataSetId}",
      DeleteEventAction: "DELETE /v1/event-actions/{EventActionId}",
      DeleteRevision: "DELETE /v1/data-sets/{DataSetId}/revisions/{RevisionId}",
      GetAsset:
        "GET /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}",
      GetDataGrant: "GET /v1/data-grants/{DataGrantId}",
      GetDataSet: "GET /v1/data-sets/{DataSetId}",
      GetEventAction: "GET /v1/event-actions/{EventActionId}",
      GetJob: "GET /v1/jobs/{JobId}",
      GetReceivedDataGrant: "GET /v1/received-data-grants/{DataGrantArn}",
      GetRevision: "GET /v1/data-sets/{DataSetId}/revisions/{RevisionId}",
      ListDataGrants: "GET /v1/data-grants",
      ListDataSetRevisions: "GET /v1/data-sets/{DataSetId}/revisions",
      ListDataSets: "GET /v1/data-sets",
      ListEventActions: "GET /v1/event-actions",
      ListJobs: "GET /v1/jobs",
      ListReceivedDataGrants: "GET /v1/received-data-grants",
      ListRevisionAssets:
        "GET /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      RevokeRevision:
        "POST /v1/data-sets/{DataSetId}/revisions/{RevisionId}/revoke",
      SendApiAsset: {
        http: "POST /v1",
        traits: {
          Body: "httpPayload",
        },
      },
      SendDataSetNotification: "POST /v1/data-sets/{DataSetId}/notification",
      StartJob: "PATCH /v1/jobs/{JobId}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateAsset:
        "PATCH /v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}",
      UpdateDataSet: "PATCH /v1/data-sets/{DataSetId}",
      UpdateEventAction: "PATCH /v1/event-actions/{EventActionId}",
      UpdateRevision: "PATCH /v1/data-sets/{DataSetId}/revisions/{RevisionId}",
    },
  },
  datasync: {
    sdkId: "DataSync",
    version: "2018-11-09",
    arnNamespace: "datasync",
    cloudTrailEventSource: "datasync.amazonaws.com",
    endpointPrefix: "datasync",
    protocol: "awsJson1_1",
    targetPrefix: "FmrsService",
  },
  datazone: {
    sdkId: "DataZone",
    version: "2018-05-10",
    arnNamespace: "datazone",
    cloudTrailEventSource: "datazone.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptPredictions:
        "PUT /v2/domains/{domainIdentifier}/assets/{identifier}/accept-predictions",
      AcceptSubscriptionRequest:
        "PUT /v2/domains/{domainIdentifier}/subscription-requests/{identifier}/accept",
      AddEntityOwner:
        "POST /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/addOwner",
      AddPolicyGrant:
        "POST /v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/addGrant",
      AssociateEnvironmentRole:
        "PUT /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}",
      CancelSubscription:
        "PUT /v2/domains/{domainIdentifier}/subscriptions/{identifier}/cancel",
      CreateAssetFilter:
        "POST /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters",
      CreateConnection: "POST /v2/domains/{domainIdentifier}/connections",
      CreateEnvironment: "POST /v2/domains/{domainIdentifier}/environments",
      CreateEnvironmentAction:
        "POST /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions",
      CreateEnvironmentProfile:
        "POST /v2/domains/{domainIdentifier}/environment-profiles",
      CreateGroupProfile: "POST /v2/domains/{domainIdentifier}/group-profiles",
      CreateListingChangeSet:
        "POST /v2/domains/{domainIdentifier}/listings/change-set",
      CreateProject: "POST /v2/domains/{domainIdentifier}/projects",
      CreateProjectMembership:
        "POST /v2/domains/{domainIdentifier}/projects/{projectIdentifier}/createMembership",
      CreateProjectProfile:
        "POST /v2/domains/{domainIdentifier}/project-profiles",
      CreateSubscriptionGrant:
        "POST /v2/domains/{domainIdentifier}/subscription-grants",
      CreateSubscriptionRequest:
        "POST /v2/domains/{domainIdentifier}/subscription-requests",
      CreateSubscriptionTarget:
        "POST /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets",
      CreateUserProfile: "POST /v2/domains/{domainIdentifier}/user-profiles",
      DeleteAssetFilter:
        "DELETE /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}",
      DeleteConnection:
        "DELETE /v2/domains/{domainIdentifier}/connections/{identifier}",
      DeleteEnvironment:
        "DELETE /v2/domains/{domainIdentifier}/environments/{identifier}",
      DeleteEnvironmentAction:
        "DELETE /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}",
      DeleteEnvironmentProfile:
        "DELETE /v2/domains/{domainIdentifier}/environment-profiles/{identifier}",
      DeleteProject:
        "DELETE /v2/domains/{domainIdentifier}/projects/{identifier}",
      DeleteProjectMembership:
        "POST /v2/domains/{domainIdentifier}/projects/{projectIdentifier}/deleteMembership",
      DeleteProjectProfile:
        "DELETE /v2/domains/{domainIdentifier}/project-profiles/{identifier}",
      DeleteSubscriptionGrant:
        "DELETE /v2/domains/{domainIdentifier}/subscription-grants/{identifier}",
      DeleteSubscriptionRequest:
        "DELETE /v2/domains/{domainIdentifier}/subscription-requests/{identifier}",
      DeleteSubscriptionTarget:
        "DELETE /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
      DeleteTimeSeriesDataPoints:
        "DELETE /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
      DisassociateEnvironmentRole:
        "DELETE /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/roles/{environmentRoleArn}",
      GetAssetFilter:
        "GET /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}",
      GetConnection:
        "GET /v2/domains/{domainIdentifier}/connections/{identifier}",
      GetEnvironment:
        "GET /v2/domains/{domainIdentifier}/environments/{identifier}",
      GetEnvironmentAction:
        "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}",
      GetEnvironmentBlueprint:
        "GET /v2/domains/{domainIdentifier}/environment-blueprints/{identifier}",
      GetEnvironmentCredentials:
        "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/credentials",
      GetEnvironmentProfile:
        "GET /v2/domains/{domainIdentifier}/environment-profiles/{identifier}",
      GetGroupProfile:
        "GET /v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}",
      GetIamPortalLoginUrl:
        "POST /v2/domains/{domainIdentifier}/get-portal-login-url",
      GetJobRun: "GET /v2/domains/{domainIdentifier}/jobRuns/{identifier}",
      GetLineageEvent: {
        http: "GET /v2/domains/{domainIdentifier}/lineage/events/{identifier}",
        traits: {
          domainId: "Domain-Id",
          id: "Id",
          event: "httpPayload",
          createdBy: "Created-By",
          processingStatus: "Processing-Status",
          eventTime: "Event-Time",
          createdAt: "Created-At",
        },
      },
      GetLineageNode:
        "GET /v2/domains/{domainIdentifier}/lineage/nodes/{identifier}",
      GetProject: "GET /v2/domains/{domainIdentifier}/projects/{identifier}",
      GetProjectProfile:
        "GET /v2/domains/{domainIdentifier}/project-profiles/{identifier}",
      GetSubscription:
        "GET /v2/domains/{domainIdentifier}/subscriptions/{identifier}",
      GetSubscriptionGrant:
        "GET /v2/domains/{domainIdentifier}/subscription-grants/{identifier}",
      GetSubscriptionRequestDetails:
        "GET /v2/domains/{domainIdentifier}/subscription-requests/{identifier}",
      GetSubscriptionTarget:
        "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
      GetTimeSeriesDataPoint:
        "GET /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points/{identifier}",
      GetUserProfile:
        "GET /v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}",
      ListAssetFilters:
        "GET /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters",
      ListAssetRevisions:
        "GET /v2/domains/{domainIdentifier}/assets/{identifier}/revisions",
      ListConnections: "GET /v2/domains/{domainIdentifier}/connections",
      ListDataProductRevisions:
        "GET /v2/domains/{domainIdentifier}/data-products/{identifier}/revisions",
      ListDataSourceRunActivities:
        "GET /v2/domains/{domainIdentifier}/data-source-runs/{identifier}/activities",
      ListEntityOwners:
        "GET /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/owners",
      ListEnvironmentActions:
        "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions",
      ListEnvironmentBlueprints:
        "GET /v2/domains/{domainIdentifier}/environment-blueprints",
      ListEnvironmentProfiles:
        "GET /v2/domains/{domainIdentifier}/environment-profiles",
      ListEnvironments: "GET /v2/domains/{domainIdentifier}/environments",
      ListJobRuns:
        "GET /v2/domains/{domainIdentifier}/jobs/{jobIdentifier}/runs",
      ListLineageEvents: "GET /v2/domains/{domainIdentifier}/lineage/events",
      ListLineageNodeHistory:
        "GET /v2/domains/{domainIdentifier}/lineage/nodes/{identifier}/history",
      ListNotifications: "GET /v2/domains/{domainIdentifier}/notifications",
      ListPolicyGrants:
        "GET /v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/grants",
      ListProjectMemberships:
        "GET /v2/domains/{domainIdentifier}/projects/{projectIdentifier}/memberships",
      ListProjectProfiles:
        "GET /v2/domains/{domainIdentifier}/project-profiles",
      ListProjects: "GET /v2/domains/{domainIdentifier}/projects",
      ListSubscriptionGrants:
        "GET /v2/domains/{domainIdentifier}/subscription-grants",
      ListSubscriptionRequests:
        "GET /v2/domains/{domainIdentifier}/subscription-requests",
      ListSubscriptions: "GET /v2/domains/{domainIdentifier}/subscriptions",
      ListSubscriptionTargets:
        "GET /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListTimeSeriesDataPoints:
        "GET /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
      PostLineageEvent: "POST /v2/domains/{domainIdentifier}/lineage/events",
      PostTimeSeriesDataPoints:
        "POST /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
      RejectPredictions:
        "PUT /v2/domains/{domainIdentifier}/assets/{identifier}/reject-predictions",
      RejectSubscriptionRequest:
        "PUT /v2/domains/{domainIdentifier}/subscription-requests/{identifier}/reject",
      RemoveEntityOwner:
        "POST /v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/removeOwner",
      RemovePolicyGrant:
        "POST /v2/domains/{domainIdentifier}/policies/managed/{entityType}/{entityIdentifier}/removeGrant",
      RevokeSubscription:
        "PUT /v2/domains/{domainIdentifier}/subscriptions/{identifier}/revoke",
      Search: "POST /v2/domains/{domainIdentifier}/search",
      SearchGroupProfiles:
        "POST /v2/domains/{domainIdentifier}/search-group-profiles",
      SearchListings: "POST /v2/domains/{domainIdentifier}/listings/search",
      SearchTypes: "POST /v2/domains/{domainIdentifier}/types-search",
      SearchUserProfiles:
        "POST /v2/domains/{domainIdentifier}/search-user-profiles",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateAssetFilter:
        "PATCH /v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}",
      UpdateConnection:
        "PATCH /v2/domains/{domainIdentifier}/connections/{identifier}",
      UpdateEnvironment:
        "PATCH /v2/domains/{domainIdentifier}/environments/{identifier}",
      UpdateEnvironmentAction:
        "PATCH /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/actions/{identifier}",
      UpdateEnvironmentProfile:
        "PATCH /v2/domains/{domainIdentifier}/environment-profiles/{identifier}",
      UpdateGroupProfile:
        "PUT /v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}",
      UpdateProject:
        "PATCH /v2/domains/{domainIdentifier}/projects/{identifier}",
      UpdateProjectProfile:
        "PATCH /v2/domains/{domainIdentifier}/project-profiles/{identifier}",
      UpdateSubscriptionGrantStatus:
        "PATCH /v2/domains/{domainIdentifier}/subscription-grants/{identifier}/status/{assetIdentifier}",
      UpdateSubscriptionRequest:
        "PATCH /v2/domains/{domainIdentifier}/subscription-requests/{identifier}",
      UpdateSubscriptionTarget:
        "PATCH /v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}",
      UpdateUserProfile:
        "PUT /v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}",
      CancelMetadataGenerationRun:
        "POST /v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}/cancel",
      CreateAsset: "POST /v2/domains/{domainIdentifier}/assets",
      CreateAssetRevision:
        "POST /v2/domains/{domainIdentifier}/assets/{identifier}/revisions",
      CreateAssetType: "POST /v2/domains/{domainIdentifier}/asset-types",
      CreateDataProduct: "POST /v2/domains/{domainIdentifier}/data-products",
      CreateDataProductRevision:
        "POST /v2/domains/{domainIdentifier}/data-products/{identifier}/revisions",
      CreateDataSource: "POST /v2/domains/{domainIdentifier}/data-sources",
      CreateDomain: "POST /v2/domains",
      CreateDomainUnit: "POST /v2/domains/{domainIdentifier}/domain-units",
      CreateFormType: "POST /v2/domains/{domainIdentifier}/form-types",
      CreateGlossary: "POST /v2/domains/{domainIdentifier}/glossaries",
      CreateGlossaryTerm: "POST /v2/domains/{domainIdentifier}/glossary-terms",
      CreateRule: "POST /v2/domains/{domainIdentifier}/rules",
      DeleteAsset: "DELETE /v2/domains/{domainIdentifier}/assets/{identifier}",
      DeleteAssetType:
        "DELETE /v2/domains/{domainIdentifier}/asset-types/{identifier}",
      DeleteDataProduct:
        "DELETE /v2/domains/{domainIdentifier}/data-products/{identifier}",
      DeleteDataSource:
        "DELETE /v2/domains/{domainIdentifier}/data-sources/{identifier}",
      DeleteDomain: "DELETE /v2/domains/{identifier}",
      DeleteDomainUnit:
        "DELETE /v2/domains/{domainIdentifier}/domain-units/{identifier}",
      DeleteEnvironmentBlueprintConfiguration:
        "DELETE /v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
      DeleteFormType:
        "DELETE /v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}",
      DeleteGlossary:
        "DELETE /v2/domains/{domainIdentifier}/glossaries/{identifier}",
      DeleteGlossaryTerm:
        "DELETE /v2/domains/{domainIdentifier}/glossary-terms/{identifier}",
      DeleteListing:
        "DELETE /v2/domains/{domainIdentifier}/listings/{identifier}",
      DeleteRule: "DELETE /v2/domains/{domainIdentifier}/rules/{identifier}",
      GetAsset: "GET /v2/domains/{domainIdentifier}/assets/{identifier}",
      GetAssetType:
        "GET /v2/domains/{domainIdentifier}/asset-types/{identifier}",
      GetDataProduct:
        "GET /v2/domains/{domainIdentifier}/data-products/{identifier}",
      GetDataSource:
        "GET /v2/domains/{domainIdentifier}/data-sources/{identifier}",
      GetDataSourceRun:
        "GET /v2/domains/{domainIdentifier}/data-source-runs/{identifier}",
      GetDomain: "GET /v2/domains/{identifier}",
      GetDomainUnit:
        "GET /v2/domains/{domainIdentifier}/domain-units/{identifier}",
      GetEnvironmentBlueprintConfiguration:
        "GET /v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
      GetFormType:
        "GET /v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}",
      GetGlossary: "GET /v2/domains/{domainIdentifier}/glossaries/{identifier}",
      GetGlossaryTerm:
        "GET /v2/domains/{domainIdentifier}/glossary-terms/{identifier}",
      GetListing: "GET /v2/domains/{domainIdentifier}/listings/{identifier}",
      GetMetadataGenerationRun:
        "GET /v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}",
      GetRule: "GET /v2/domains/{domainIdentifier}/rules/{identifier}",
      ListDataSourceRuns:
        "GET /v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs",
      ListDataSources: "GET /v2/domains/{domainIdentifier}/data-sources",
      ListDomainUnitsForParent:
        "GET /v2/domains/{domainIdentifier}/domain-units",
      ListDomains: "GET /v2/domains",
      ListEnvironmentBlueprintConfigurations:
        "GET /v2/domains/{domainIdentifier}/environment-blueprint-configurations",
      ListMetadataGenerationRuns:
        "GET /v2/domains/{domainIdentifier}/metadata-generation-runs",
      ListRules:
        "GET /v2/domains/{domainIdentifier}/list-rules/{targetType}/{targetIdentifier}",
      PutEnvironmentBlueprintConfiguration:
        "PUT /v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
      StartDataSourceRun:
        "POST /v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs",
      StartMetadataGenerationRun:
        "POST /v2/domains/{domainIdentifier}/metadata-generation-runs",
      UpdateDataSource:
        "PATCH /v2/domains/{domainIdentifier}/data-sources/{identifier}",
      UpdateDomain: "PUT /v2/domains/{identifier}",
      UpdateDomainUnit:
        "PUT /v2/domains/{domainIdentifier}/domain-units/{identifier}",
      UpdateGlossary:
        "PATCH /v2/domains/{domainIdentifier}/glossaries/{identifier}",
      UpdateGlossaryTerm:
        "PATCH /v2/domains/{domainIdentifier}/glossary-terms/{identifier}",
      UpdateRule: "PATCH /v2/domains/{domainIdentifier}/rules/{identifier}",
    },
  },
  dax: {
    sdkId: "DAX",
    version: "2017-04-19",
    arnNamespace: "dax",
    cloudTrailEventSource: "dax.amazonaws.com",
    endpointPrefix: "dax",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonDAXV3",
  },
  deadline: {
    sdkId: "deadline",
    version: "2023-10-12",
    arnNamespace: "deadline",
    cloudTrailEventSource: "deadline.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateQueueFleetAssociation:
        "PUT /2023-10-12/farms/{farmId}/queue-fleet-associations",
      CreateQueueLimitAssociation:
        "PUT /2023-10-12/farms/{farmId}/queue-limit-associations",
      DeleteQueueFleetAssociation:
        "DELETE /2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}",
      DeleteQueueLimitAssociation:
        "DELETE /2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}",
      GetQueueFleetAssociation:
        "GET /2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}",
      GetQueueLimitAssociation:
        "GET /2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}",
      GetSessionsStatisticsAggregation:
        "GET /2023-10-12/farms/{farmId}/sessions-statistics-aggregation",
      ListAvailableMeteredProducts: "GET /2023-10-12/metered-products",
      ListQueueFleetAssociations:
        "GET /2023-10-12/farms/{farmId}/queue-fleet-associations",
      ListQueueLimitAssociations:
        "GET /2023-10-12/farms/{farmId}/queue-limit-associations",
      ListTagsForResource: "GET /2023-10-12/tags/{resourceArn}",
      SearchJobs: "POST /2023-10-12/farms/{farmId}/search/jobs",
      SearchSteps: "POST /2023-10-12/farms/{farmId}/search/steps",
      SearchTasks: "POST /2023-10-12/farms/{farmId}/search/tasks",
      SearchWorkers: "POST /2023-10-12/farms/{farmId}/search/workers",
      StartSessionsStatisticsAggregation:
        "POST /2023-10-12/farms/{farmId}/sessions-statistics-aggregation",
      TagResource: "POST /2023-10-12/tags/{resourceArn}",
      UntagResource: "DELETE /2023-10-12/tags/{resourceArn}",
      UpdateQueueFleetAssociation:
        "PATCH /2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}",
      UpdateQueueLimitAssociation:
        "PATCH /2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}",
      AssociateMemberToFarm:
        "PUT /2023-10-12/farms/{farmId}/members/{principalId}",
      AssociateMemberToFleet:
        "PUT /2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}",
      AssociateMemberToJob:
        "PUT /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}",
      AssociateMemberToQueue:
        "PUT /2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}",
      AssumeFleetRoleForRead:
        "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/read-roles",
      AssumeFleetRoleForWorker:
        "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/fleet-roles",
      AssumeQueueRoleForRead:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/read-roles",
      AssumeQueueRoleForUser:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/user-roles",
      AssumeQueueRoleForWorker:
        "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/queue-roles",
      BatchGetJobEntity:
        "POST /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/batchGetJobEntity",
      CopyJobTemplate:
        "POST /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/template",
      CreateBudget: "POST /2023-10-12/farms/{farmId}/budgets",
      CreateFarm: "POST /2023-10-12/farms",
      CreateFleet: "POST /2023-10-12/farms/{farmId}/fleets",
      CreateJob: "POST /2023-10-12/farms/{farmId}/queues/{queueId}/jobs",
      CreateLicenseEndpoint: "POST /2023-10-12/license-endpoints",
      CreateLimit: "POST /2023-10-12/farms/{farmId}/limits",
      CreateMonitor: "POST /2023-10-12/monitors",
      CreateQueue: "POST /2023-10-12/farms/{farmId}/queues",
      CreateQueueEnvironment:
        "POST /2023-10-12/farms/{farmId}/queues/{queueId}/environments",
      CreateStorageProfile: "POST /2023-10-12/farms/{farmId}/storage-profiles",
      CreateWorker: "POST /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers",
      DeleteBudget: "DELETE /2023-10-12/farms/{farmId}/budgets/{budgetId}",
      DeleteFarm: "DELETE /2023-10-12/farms/{farmId}",
      DeleteFleet: "DELETE /2023-10-12/farms/{farmId}/fleets/{fleetId}",
      DeleteLicenseEndpoint:
        "DELETE /2023-10-12/license-endpoints/{licenseEndpointId}",
      DeleteLimit: "DELETE /2023-10-12/farms/{farmId}/limits/{limitId}",
      DeleteMeteredProduct:
        "DELETE /2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}",
      DeleteMonitor: "DELETE /2023-10-12/monitors/{monitorId}",
      DeleteQueue: "DELETE /2023-10-12/farms/{farmId}/queues/{queueId}",
      DeleteQueueEnvironment:
        "DELETE /2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}",
      DeleteStorageProfile:
        "DELETE /2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}",
      DeleteWorker:
        "DELETE /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}",
      DisassociateMemberFromFarm:
        "DELETE /2023-10-12/farms/{farmId}/members/{principalId}",
      DisassociateMemberFromFleet:
        "DELETE /2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}",
      DisassociateMemberFromJob:
        "DELETE /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}",
      DisassociateMemberFromQueue:
        "DELETE /2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}",
      GetBudget: "GET /2023-10-12/farms/{farmId}/budgets/{budgetId}",
      GetFarm: "GET /2023-10-12/farms/{farmId}",
      GetFleet: "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}",
      GetJob: "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}",
      GetLicenseEndpoint:
        "GET /2023-10-12/license-endpoints/{licenseEndpointId}",
      GetLimit: "GET /2023-10-12/farms/{farmId}/limits/{limitId}",
      GetMonitor: "GET /2023-10-12/monitors/{monitorId}",
      GetQueue: "GET /2023-10-12/farms/{farmId}/queues/{queueId}",
      GetQueueEnvironment:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}",
      GetSession:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}",
      GetSessionAction:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions/{sessionActionId}",
      GetStep:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}",
      GetStorageProfile:
        "GET /2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}",
      GetStorageProfileForQueue:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles/{storageProfileId}",
      GetTask:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}",
      GetWorker:
        "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}",
      ListBudgets: "GET /2023-10-12/farms/{farmId}/budgets",
      ListFarmMembers: "GET /2023-10-12/farms/{farmId}/members",
      ListFarms: "GET /2023-10-12/farms",
      ListFleetMembers:
        "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/members",
      ListFleets: "GET /2023-10-12/farms/{farmId}/fleets",
      ListJobMembers:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members",
      ListJobParameterDefinitions:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/parameter-definitions",
      ListJobs: "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs",
      ListLicenseEndpoints: "GET /2023-10-12/license-endpoints",
      ListLimits: "GET /2023-10-12/farms/{farmId}/limits",
      ListMeteredProducts:
        "GET /2023-10-12/license-endpoints/{licenseEndpointId}/metered-products",
      ListMonitors: "GET /2023-10-12/monitors",
      ListQueueEnvironments:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/environments",
      ListQueueMembers:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/members",
      ListQueues: "GET /2023-10-12/farms/{farmId}/queues",
      ListSessionActions:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions",
      ListSessions:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions",
      ListSessionsForWorker:
        "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/sessions",
      ListStepConsumers:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/consumers",
      ListStepDependencies:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/dependencies",
      ListSteps:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps",
      ListStorageProfiles: "GET /2023-10-12/farms/{farmId}/storage-profiles",
      ListStorageProfilesForQueue:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles",
      ListTasks:
        "GET /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks",
      ListWorkers: "GET /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers",
      PutMeteredProduct:
        "PUT /2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}",
      UpdateBudget: "PATCH /2023-10-12/farms/{farmId}/budgets/{budgetId}",
      UpdateFarm: "PATCH /2023-10-12/farms/{farmId}",
      UpdateFleet: "PATCH /2023-10-12/farms/{farmId}/fleets/{fleetId}",
      UpdateJob:
        "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}",
      UpdateLimit: "PATCH /2023-10-12/farms/{farmId}/limits/{limitId}",
      UpdateMonitor: "PATCH /2023-10-12/monitors/{monitorId}",
      UpdateQueue: "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}",
      UpdateQueueEnvironment:
        "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}",
      UpdateSession:
        "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}",
      UpdateStep:
        "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}",
      UpdateStorageProfile:
        "PATCH /2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}",
      UpdateTask:
        "PATCH /2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}",
      UpdateWorker:
        "PATCH /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}",
      UpdateWorkerSchedule:
        "PATCH /2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/schedule",
    },
  },
  detective: {
    sdkId: "Detective",
    version: "2018-10-26",
    arnNamespace: "detective",
    cloudTrailEventSource: "detective.amazonaws.com",
    endpointPrefix: "api.detective",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptInvitation: "PUT /invitation",
      BatchGetGraphMemberDatasources: "POST /graph/datasources/get",
      BatchGetMembershipDatasources: "POST /membership/datasources/get",
      CreateGraph: "POST /graph",
      CreateMembers: "POST /graph/members",
      DeleteGraph: "POST /graph/removal",
      DeleteMembers: "POST /graph/members/removal",
      DescribeOrganizationConfiguration:
        "POST /orgs/describeOrganizationConfiguration",
      DisableOrganizationAdminAccount: "POST /orgs/disableAdminAccount",
      DisassociateMembership: "POST /membership/removal",
      EnableOrganizationAdminAccount: "POST /orgs/enableAdminAccount",
      GetInvestigation: "POST /investigations/getInvestigation",
      GetMembers: "POST /graph/members/get",
      ListDatasourcePackages: "POST /graph/datasources/list",
      ListGraphs: "POST /graphs/list",
      ListIndicators: "POST /investigations/listIndicators",
      ListInvestigations: "POST /investigations/listInvestigations",
      ListInvitations: "POST /invitations/list",
      ListMembers: "POST /graph/members/list",
      ListOrganizationAdminAccounts: "POST /orgs/adminAccountslist",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      RejectInvitation: "POST /invitation/removal",
      StartInvestigation: "POST /investigations/startInvestigation",
      StartMonitoringMember: "POST /graph/member/monitoringstate",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateDatasourcePackages: "POST /graph/datasources/update",
      UpdateInvestigationState: "POST /investigations/updateInvestigationState",
      UpdateOrganizationConfiguration:
        "POST /orgs/updateOrganizationConfiguration",
    },
  },
  devicefarm: {
    sdkId: "Device Farm",
    version: "2015-06-23",
    arnNamespace: "devicefarm",
    cloudTrailEventSource: "devicefarm.amazonaws.com",
    endpointPrefix: "devicefarm",
    protocol: "awsJson1_1",
    targetPrefix: "DeviceFarm_20150623",
  },
  devopsguru: {
    sdkId: "DevOps Guru",
    version: "2020-12-01",
    arnNamespace: "devops-guru",
    cloudTrailEventSource: "devopsguru.amazonaws.com",
    endpointPrefix: "devops-guru",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AddNotificationChannel: "PUT /channels",
      DeleteInsight: "DELETE /insights/{Id}",
      DescribeAccountHealth: "GET /accounts/health",
      DescribeAccountOverview: "POST /accounts/overview",
      DescribeAnomaly: "GET /anomalies/{Id}",
      DescribeEventSourcesConfig: "POST /event-sources",
      DescribeFeedback: "POST /feedback",
      DescribeInsight: "GET /insights/{Id}",
      DescribeOrganizationHealth: "POST /organization/health",
      DescribeOrganizationOverview: "POST /organization/overview",
      DescribeOrganizationResourceCollectionHealth:
        "POST /organization/health/resource-collection",
      DescribeResourceCollectionHealth:
        "GET /accounts/health/resource-collection/{ResourceCollectionType}",
      DescribeServiceIntegration: "GET /service-integrations",
      GetCostEstimation: "GET /cost-estimation",
      GetResourceCollection:
        "GET /resource-collections/{ResourceCollectionType}",
      ListAnomaliesForInsight: "POST /anomalies/insight/{InsightId}",
      ListAnomalousLogGroups: "POST /list-log-anomalies",
      ListEvents: "POST /events",
      ListInsights: "POST /insights",
      ListMonitoredResources: "POST /monitoredResources",
      ListNotificationChannels: "POST /channels",
      ListOrganizationInsights: "POST /organization/insights",
      ListRecommendations: "POST /recommendations",
      PutFeedback: "PUT /feedback",
      RemoveNotificationChannel: "DELETE /channels/{Id}",
      SearchInsights: "POST /insights/search",
      SearchOrganizationInsights: "POST /organization/insights/search",
      StartCostEstimation: "PUT /cost-estimation",
      UpdateEventSourcesConfig: "PUT /event-sources",
      UpdateResourceCollection: "PUT /resource-collections",
      UpdateServiceIntegration: "PUT /service-integrations",
    },
  },
  directconnect: {
    sdkId: "Direct Connect",
    version: "2012-10-25",
    arnNamespace: "directconnect",
    cloudTrailEventSource: "directconnect.amazonaws.com",
    endpointPrefix: "directconnect",
    protocol: "awsJson1_1",
    targetPrefix: "OvertureService",
  },
  directoryservice: {
    sdkId: "Directory Service",
    version: "2015-04-16",
    arnNamespace: "ds",
    cloudTrailEventSource: "ds.amazonaws.com",
    endpointPrefix: "ds",
    protocol: "awsJson1_1",
    targetPrefix: "DirectoryService_20150416",
  },
  directoryservicedata: {
    sdkId: "Directory Service Data",
    version: "2023-05-31",
    arnNamespace: "ds",
    cloudTrailEventSource: "ds.amazonaws.com",
    endpointPrefix: "ds-data",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AddGroupMember: "POST /GroupMemberships/AddGroupMember",
      CreateGroup: "POST /Groups/CreateGroup",
      CreateUser: "POST /Users/CreateUser",
      DeleteGroup: "POST /Groups/DeleteGroup",
      DeleteUser: "POST /Users/DeleteUser",
      DescribeGroup: "POST /Groups/DescribeGroup",
      DescribeUser: "POST /Users/DescribeUser",
      DisableUser: "POST /Users/DisableUser",
      ListGroupMembers: "POST /GroupMemberships/ListGroupMembers",
      ListGroups: "POST /Groups/ListGroups",
      ListGroupsForMember: "POST /GroupMemberships/ListGroupsForMember",
      ListUsers: "POST /Users/ListUsers",
      RemoveGroupMember: "POST /GroupMemberships/RemoveGroupMember",
      SearchGroups: "POST /Groups/SearchGroups",
      SearchUsers: "POST /Users/SearchUsers",
      UpdateGroup: "POST /Groups/UpdateGroup",
      UpdateUser: "POST /Users/UpdateUser",
    },
  },
  dlm: {
    sdkId: "DLM",
    version: "2018-01-12",
    arnNamespace: "dlm",
    cloudTrailEventSource: "dlm.amazonaws.com",
    endpointPrefix: "dlm",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateLifecyclePolicy: "POST /policies",
      DeleteLifecyclePolicy: "DELETE /policies/{PolicyId}",
      GetLifecyclePolicies: "GET /policies",
      GetLifecyclePolicy: "GET /policies/{PolicyId}",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateLifecyclePolicy: "PATCH /policies/{PolicyId}",
    },
  },
  docdb: {
    sdkId: "DocDB",
    version: "2014-10-31",
    arnNamespace: "rds",
    cloudTrailEventSource: "docdb.amazonaws.com",
    endpointPrefix: "rds",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  docdbelastic: {
    sdkId: "DocDB Elastic",
    version: "2022-11-28",
    arnNamespace: "docdb-elastic",
    cloudTrailEventSource: "CASCADES_EVENT_SOURCE",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ApplyPendingMaintenanceAction: "POST /pending-action",
      CopyClusterSnapshot: "POST /cluster-snapshot/{snapshotArn}/copy",
      CreateCluster: "POST /cluster",
      CreateClusterSnapshot: "POST /cluster-snapshot",
      DeleteCluster: "DELETE /cluster/{clusterArn}",
      DeleteClusterSnapshot: "DELETE /cluster-snapshot/{snapshotArn}",
      GetCluster: "GET /cluster/{clusterArn}",
      GetClusterSnapshot: "GET /cluster-snapshot/{snapshotArn}",
      GetPendingMaintenanceAction: "GET /pending-action/{resourceArn}",
      ListClusters: "GET /clusters",
      ListClusterSnapshots: "GET /cluster-snapshots",
      ListPendingMaintenanceActions: "GET /pending-actions",
      ListTagsForResource: "GET /tags/{resourceArn}",
      RestoreClusterFromSnapshot:
        "POST /cluster-snapshot/{snapshotArn}/restore",
      StartCluster: "POST /cluster/{clusterArn}/start",
      StopCluster: "POST /cluster/{clusterArn}/stop",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateCluster: "PUT /cluster/{clusterArn}",
    },
  },
  drs: {
    sdkId: "drs",
    version: "2020-02-26",
    arnNamespace: "drs",
    cloudTrailEventSource: "drs.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateExtendedSourceServer: "POST /CreateExtendedSourceServer",
      DeleteLaunchAction: "POST /DeleteLaunchAction",
      InitializeService: "POST /InitializeService",
      ListExtensibleSourceServers: "POST /ListExtensibleSourceServers",
      ListLaunchActions: "POST /ListLaunchActions",
      ListStagingAccounts: "GET /ListStagingAccounts",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutLaunchAction: "POST /PutLaunchAction",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      AssociateSourceNetworkStack: "POST /AssociateSourceNetworkStack",
      CreateLaunchConfigurationTemplate:
        "POST /CreateLaunchConfigurationTemplate",
      CreateReplicationConfigurationTemplate:
        "POST /CreateReplicationConfigurationTemplate",
      CreateSourceNetwork: "POST /CreateSourceNetwork",
      DeleteJob: "POST /DeleteJob",
      DeleteLaunchConfigurationTemplate:
        "POST /DeleteLaunchConfigurationTemplate",
      DeleteRecoveryInstance: "POST /DeleteRecoveryInstance",
      DeleteReplicationConfigurationTemplate:
        "POST /DeleteReplicationConfigurationTemplate",
      DeleteSourceNetwork: "POST /DeleteSourceNetwork",
      DeleteSourceServer: "POST /DeleteSourceServer",
      DescribeJobLogItems: "POST /DescribeJobLogItems",
      DescribeJobs: "POST /DescribeJobs",
      DescribeLaunchConfigurationTemplates:
        "POST /DescribeLaunchConfigurationTemplates",
      DescribeRecoveryInstances: "POST /DescribeRecoveryInstances",
      DescribeRecoverySnapshots: "POST /DescribeRecoverySnapshots",
      DescribeReplicationConfigurationTemplates:
        "POST /DescribeReplicationConfigurationTemplates",
      DescribeSourceNetworks: "POST /DescribeSourceNetworks",
      DescribeSourceServers: "POST /DescribeSourceServers",
      DisconnectRecoveryInstance: "POST /DisconnectRecoveryInstance",
      DisconnectSourceServer: "POST /DisconnectSourceServer",
      ExportSourceNetworkCfnTemplate: "POST /ExportSourceNetworkCfnTemplate",
      GetFailbackReplicationConfiguration:
        "POST /GetFailbackReplicationConfiguration",
      GetLaunchConfiguration: "POST /GetLaunchConfiguration",
      GetReplicationConfiguration: "POST /GetReplicationConfiguration",
      RetryDataReplication: "POST /RetryDataReplication",
      ReverseReplication: "POST /ReverseReplication",
      StartFailbackLaunch: "POST /StartFailbackLaunch",
      StartRecovery: "POST /StartRecovery",
      StartReplication: "POST /StartReplication",
      StartSourceNetworkRecovery: "POST /StartSourceNetworkRecovery",
      StartSourceNetworkReplication: "POST /StartSourceNetworkReplication",
      StopFailback: "POST /StopFailback",
      StopReplication: "POST /StopReplication",
      StopSourceNetworkReplication: "POST /StopSourceNetworkReplication",
      TerminateRecoveryInstances: "POST /TerminateRecoveryInstances",
      UpdateFailbackReplicationConfiguration:
        "POST /UpdateFailbackReplicationConfiguration",
      UpdateLaunchConfiguration: "POST /UpdateLaunchConfiguration",
      UpdateLaunchConfigurationTemplate:
        "POST /UpdateLaunchConfigurationTemplate",
      UpdateReplicationConfiguration: "POST /UpdateReplicationConfiguration",
      UpdateReplicationConfigurationTemplate:
        "POST /UpdateReplicationConfigurationTemplate",
    },
  },
  dsql: {
    sdkId: "DSQL",
    version: "2018-05-10",
    arnNamespace: "dsql",
    cloudTrailEventSource: "dsql.amazonaws.com",
    endpointPrefix: "dsql",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateCluster: "POST /cluster",
      DeleteCluster: "DELETE /cluster/{identifier}",
      GetCluster: "GET /cluster/{identifier}",
      GetVpcEndpointServiceName:
        "GET /clusters/{identifier}/vpc-endpoint-service-name",
      ListClusters: "GET /cluster",
      UpdateCluster: "POST /cluster/{identifier}",
    },
  },
  dynamodb: {
    sdkId: "DynamoDB",
    version: "2012-08-10",
    arnNamespace: "dynamodb",
    cloudTrailEventSource: "dynamodb.amazonaws.com",
    endpointPrefix: "dynamodb",
    protocol: "awsJson1_0",
    targetPrefix: "DynamoDB_20120810",
  },
  dynamodbstreams: {
    sdkId: "DynamoDB Streams",
    version: "2012-08-10",
    arnNamespace: "dynamodb",
    cloudTrailEventSource: "dynamodbstreams.amazonaws.com",
    endpointPrefix: "streams.dynamodb",
    protocol: "awsJson1_0",
    targetPrefix: "DynamoDBStreams_20120810",
  },
  ebs: {
    sdkId: "EBS",
    version: "2019-11-02",
    arnNamespace: "ebs",
    cloudTrailEventSource: "ebs.amazonaws.com",
    endpointPrefix: "ebs",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CompleteSnapshot: "POST /snapshots/completion/{SnapshotId}",
      GetSnapshotBlock: {
        http: "GET /snapshots/{SnapshotId}/blocks/{BlockIndex}",
        traits: {
          DataLength: "x-amz-Data-Length",
          BlockData: "httpPayload",
          Checksum: "x-amz-Checksum",
          ChecksumAlgorithm: "x-amz-Checksum-Algorithm",
        },
      },
      ListChangedBlocks: "GET /snapshots/{SecondSnapshotId}/changedblocks",
      ListSnapshotBlocks: "GET /snapshots/{SnapshotId}/blocks",
      PutSnapshotBlock: {
        http: "PUT /snapshots/{SnapshotId}/blocks/{BlockIndex}",
        traits: {
          Checksum: "x-amz-Checksum",
          ChecksumAlgorithm: "x-amz-Checksum-Algorithm",
        },
      },
      StartSnapshot: "POST /snapshots",
    },
  },
  ec2: {
    sdkId: "EC2",
    version: "2016-11-15",
    arnNamespace: "ec2",
    cloudTrailEventSource: "ec2.amazonaws.com",
    endpointPrefix: "ec2",
    protocol: "ec2Query",
    targetPrefix: "",
  },
  ec2instanceconnect: {
    sdkId: "EC2 Instance Connect",
    version: "2018-04-02",
    arnNamespace: "ec2-instance-connect",
    cloudTrailEventSource: "ec2instanceconnect.amazonaws.com",
    endpointPrefix: "ec2-instance-connect",
    protocol: "awsJson1_1",
    targetPrefix: "AWSEC2InstanceConnectService",
  },
  ecr: {
    sdkId: "ECR",
    version: "2015-09-21",
    arnNamespace: "ecr",
    cloudTrailEventSource: "ecr.amazonaws.com",
    endpointPrefix: "api.ecr",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonEC2ContainerRegistry_V20150921",
  },
  ecrpublic: {
    sdkId: "ECR PUBLIC",
    version: "2020-10-30",
    arnNamespace: "ecr-public",
    cloudTrailEventSource: "ecrpublic.amazonaws.com",
    endpointPrefix: "api.ecr-public",
    protocol: "awsJson1_1",
    targetPrefix: "SpencerFrontendService",
  },
  ecs: {
    sdkId: "ECS",
    version: "2014-11-13",
    arnNamespace: "ecs",
    cloudTrailEventSource: "ecs.amazonaws.com",
    endpointPrefix: "ecs",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonEC2ContainerServiceV20141113",
  },
  efs: {
    sdkId: "EFS",
    version: "2015-02-01",
    arnNamespace: "elasticfilesystem",
    cloudTrailEventSource: "elasticfilesystem.amazonaws.com",
    endpointPrefix: "elasticfilesystem",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateAccessPoint: "POST /2015-02-01/access-points",
      CreateFileSystem: "POST /2015-02-01/file-systems",
      CreateMountTarget: "POST /2015-02-01/mount-targets",
      CreateReplicationConfiguration:
        "POST /2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration",
      CreateTags: "POST /2015-02-01/create-tags/{FileSystemId}",
      DeleteAccessPoint: "DELETE /2015-02-01/access-points/{AccessPointId}",
      DeleteFileSystem: "DELETE /2015-02-01/file-systems/{FileSystemId}",
      DeleteFileSystemPolicy:
        "DELETE /2015-02-01/file-systems/{FileSystemId}/policy",
      DeleteMountTarget: "DELETE /2015-02-01/mount-targets/{MountTargetId}",
      DeleteReplicationConfiguration:
        "DELETE /2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration",
      DeleteTags: "POST /2015-02-01/delete-tags/{FileSystemId}",
      DescribeAccessPoints: "GET /2015-02-01/access-points",
      DescribeAccountPreferences: "GET /2015-02-01/account-preferences",
      DescribeBackupPolicy:
        "GET /2015-02-01/file-systems/{FileSystemId}/backup-policy",
      DescribeFileSystemPolicy:
        "GET /2015-02-01/file-systems/{FileSystemId}/policy",
      DescribeFileSystems: "GET /2015-02-01/file-systems",
      DescribeLifecycleConfiguration:
        "GET /2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration",
      DescribeMountTargets: "GET /2015-02-01/mount-targets",
      DescribeMountTargetSecurityGroups:
        "GET /2015-02-01/mount-targets/{MountTargetId}/security-groups",
      DescribeReplicationConfigurations:
        "GET /2015-02-01/file-systems/replication-configurations",
      DescribeTags: "GET /2015-02-01/tags/{FileSystemId}",
      ListTagsForResource: "GET /2015-02-01/resource-tags/{ResourceId}",
      ModifyMountTargetSecurityGroups:
        "PUT /2015-02-01/mount-targets/{MountTargetId}/security-groups",
      PutAccountPreferences: "PUT /2015-02-01/account-preferences",
      PutBackupPolicy:
        "PUT /2015-02-01/file-systems/{FileSystemId}/backup-policy",
      PutFileSystemPolicy: "PUT /2015-02-01/file-systems/{FileSystemId}/policy",
      PutLifecycleConfiguration:
        "PUT /2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration",
      TagResource: "POST /2015-02-01/resource-tags/{ResourceId}",
      UntagResource: "DELETE /2015-02-01/resource-tags/{ResourceId}",
      UpdateFileSystem: "PUT /2015-02-01/file-systems/{FileSystemId}",
      UpdateFileSystemProtection:
        "PUT /2015-02-01/file-systems/{FileSystemId}/protection",
    },
  },
  eks: {
    sdkId: "EKS",
    version: "2017-11-01",
    arnNamespace: "eks",
    cloudTrailEventSource: "eks.amazonaws.com",
    endpointPrefix: "eks",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateAccessPolicy:
        "POST /clusters/{clusterName}/access-entries/{principalArn}/access-policies",
      AssociateEncryptionConfig:
        "POST /clusters/{clusterName}/encryption-config/associate",
      AssociateIdentityProviderConfig:
        "POST /clusters/{clusterName}/identity-provider-configs/associate",
      CreateAccessEntry: "POST /clusters/{clusterName}/access-entries",
      CreateAddon: "POST /clusters/{clusterName}/addons",
      CreateCluster: "POST /clusters",
      CreateEksAnywhereSubscription: "POST /eks-anywhere-subscriptions",
      CreateFargateProfile: "POST /clusters/{clusterName}/fargate-profiles",
      CreateNodegroup: "POST /clusters/{clusterName}/node-groups",
      CreatePodIdentityAssociation:
        "POST /clusters/{clusterName}/pod-identity-associations",
      DeleteAccessEntry:
        "DELETE /clusters/{clusterName}/access-entries/{principalArn}",
      DeleteAddon: "DELETE /clusters/{clusterName}/addons/{addonName}",
      DeleteCluster: "DELETE /clusters/{name}",
      DeleteEksAnywhereSubscription: "DELETE /eks-anywhere-subscriptions/{id}",
      DeleteFargateProfile:
        "DELETE /clusters/{clusterName}/fargate-profiles/{fargateProfileName}",
      DeleteNodegroup:
        "DELETE /clusters/{clusterName}/node-groups/{nodegroupName}",
      DeletePodIdentityAssociation:
        "DELETE /clusters/{clusterName}/pod-identity-associations/{associationId}",
      DeregisterCluster: "DELETE /cluster-registrations/{name}",
      DescribeAccessEntry:
        "GET /clusters/{clusterName}/access-entries/{principalArn}",
      DescribeAddon: "GET /clusters/{clusterName}/addons/{addonName}",
      DescribeAddonConfiguration: "GET /addons/configuration-schemas",
      DescribeAddonVersions: "GET /addons/supported-versions",
      DescribeCluster: "GET /clusters/{name}",
      DescribeClusterVersions: "GET /cluster-versions",
      DescribeEksAnywhereSubscription: "GET /eks-anywhere-subscriptions/{id}",
      DescribeFargateProfile:
        "GET /clusters/{clusterName}/fargate-profiles/{fargateProfileName}",
      DescribeIdentityProviderConfig:
        "POST /clusters/{clusterName}/identity-provider-configs/describe",
      DescribeInsight: "GET /clusters/{clusterName}/insights/{id}",
      DescribeNodegroup:
        "GET /clusters/{clusterName}/node-groups/{nodegroupName}",
      DescribePodIdentityAssociation:
        "GET /clusters/{clusterName}/pod-identity-associations/{associationId}",
      DescribeUpdate: "GET /clusters/{name}/updates/{updateId}",
      DisassociateAccessPolicy:
        "DELETE /clusters/{clusterName}/access-entries/{principalArn}/access-policies/{policyArn}",
      DisassociateIdentityProviderConfig:
        "POST /clusters/{clusterName}/identity-provider-configs/disassociate",
      ListAccessEntries: "GET /clusters/{clusterName}/access-entries",
      ListAccessPolicies: "GET /access-policies",
      ListAddons: "GET /clusters/{clusterName}/addons",
      ListAssociatedAccessPolicies:
        "GET /clusters/{clusterName}/access-entries/{principalArn}/access-policies",
      ListClusters: "GET /clusters",
      ListEksAnywhereSubscriptions: "GET /eks-anywhere-subscriptions",
      ListFargateProfiles: "GET /clusters/{clusterName}/fargate-profiles",
      ListIdentityProviderConfigs:
        "GET /clusters/{clusterName}/identity-provider-configs",
      ListInsights: "POST /clusters/{clusterName}/insights",
      ListNodegroups: "GET /clusters/{clusterName}/node-groups",
      ListPodIdentityAssociations:
        "GET /clusters/{clusterName}/pod-identity-associations",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListUpdates: "GET /clusters/{name}/updates",
      RegisterCluster: "POST /cluster-registrations",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateAccessEntry:
        "POST /clusters/{clusterName}/access-entries/{principalArn}",
      UpdateAddon: "POST /clusters/{clusterName}/addons/{addonName}/update",
      UpdateClusterConfig: "POST /clusters/{name}/update-config",
      UpdateClusterVersion: "POST /clusters/{name}/updates",
      UpdateEksAnywhereSubscription: "POST /eks-anywhere-subscriptions/{id}",
      UpdateNodegroupConfig:
        "POST /clusters/{clusterName}/node-groups/{nodegroupName}/update-config",
      UpdateNodegroupVersion:
        "POST /clusters/{clusterName}/node-groups/{nodegroupName}/update-version",
      UpdatePodIdentityAssociation:
        "POST /clusters/{clusterName}/pod-identity-associations/{associationId}",
    },
  },
  eksauth: {
    sdkId: "EKS Auth",
    version: "2023-11-26",
    arnNamespace: "eks-auth",
    cloudTrailEventSource: "eks-auth.amazonaws.com",
    endpointPrefix: "eks-auth",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssumeRoleForPodIdentity:
        "POST /clusters/{clusterName}/assume-role-for-pod-identity",
    },
  },
  elasticbeanstalk: {
    sdkId: "Elastic Beanstalk",
    version: "2010-12-01",
    arnNamespace: "elasticbeanstalk",
    cloudTrailEventSource: "elasticbeanstalk.amazonaws.com",
    endpointPrefix: "elasticbeanstalk",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  elasticloadbalancing: {
    sdkId: "Elastic Load Balancing",
    version: "2012-06-01",
    arnNamespace: "elasticloadbalancing",
    cloudTrailEventSource: "elasticloadbalancing.amazonaws.com",
    endpointPrefix: "elasticloadbalancing",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  elasticloadbalancingv2: {
    sdkId: "Elastic Load Balancing v2",
    version: "2015-12-01",
    arnNamespace: "elasticloadbalancing",
    cloudTrailEventSource: "elasticloadbalancing.amazonaws.com",
    endpointPrefix: "elasticloadbalancing",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  elastictranscoder: {
    sdkId: "Elastic Transcoder",
    version: "2012-09-25",
    arnNamespace: "elastictranscoder",
    cloudTrailEventSource: "elastictranscoder.amazonaws.com",
    endpointPrefix: "elastictranscoder",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelJob: "DELETE /2012-09-25/jobs/{Id}",
      CreateJob: "POST /2012-09-25/jobs",
      CreatePipeline: "POST /2012-09-25/pipelines",
      CreatePreset: "POST /2012-09-25/presets",
      DeletePipeline: "DELETE /2012-09-25/pipelines/{Id}",
      DeletePreset: "DELETE /2012-09-25/presets/{Id}",
      ListJobsByPipeline: "GET /2012-09-25/jobsByPipeline/{PipelineId}",
      ListJobsByStatus: "GET /2012-09-25/jobsByStatus/{Status}",
      ListPipelines: "GET /2012-09-25/pipelines",
      ListPresets: "GET /2012-09-25/presets",
      ReadJob: "GET /2012-09-25/jobs/{Id}",
      ReadPipeline: "GET /2012-09-25/pipelines/{Id}",
      ReadPreset: "GET /2012-09-25/presets/{Id}",
      TestRole: "POST /2012-09-25/roleTests",
      UpdatePipeline: "PUT /2012-09-25/pipelines/{Id}",
      UpdatePipelineNotifications:
        "POST /2012-09-25/pipelines/{Id}/notifications",
      UpdatePipelineStatus: "POST /2012-09-25/pipelines/{Id}/status",
    },
  },
  elasticache: {
    sdkId: "ElastiCache",
    version: "2015-02-02",
    arnNamespace: "elasticache",
    cloudTrailEventSource: "elasticache.amazonaws.com",
    endpointPrefix: "elasticache",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  elasticsearchservice: {
    sdkId: "Elasticsearch Service",
    version: "2015-01-01",
    arnNamespace: "es",
    cloudTrailEventSource: "elasticsearchservice.amazonaws.com",
    endpointPrefix: "es",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptInboundCrossClusterSearchConnection:
        "PUT /2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/accept",
      AddTags: "POST /2015-01-01/tags",
      AssociatePackage:
        "POST /2015-01-01/packages/associate/{PackageID}/{DomainName}",
      AuthorizeVpcEndpointAccess:
        "POST /2015-01-01/es/domain/{DomainName}/authorizeVpcEndpointAccess",
      CancelDomainConfigChange:
        "POST /2015-01-01/es/domain/{DomainName}/config/cancel",
      CancelElasticsearchServiceSoftwareUpdate:
        "POST /2015-01-01/es/serviceSoftwareUpdate/cancel",
      CreateElasticsearchDomain: "POST /2015-01-01/es/domain",
      CreateOutboundCrossClusterSearchConnection:
        "POST /2015-01-01/es/ccs/outboundConnection",
      CreatePackage: "POST /2015-01-01/packages",
      CreateVpcEndpoint: "POST /2015-01-01/es/vpcEndpoints",
      DeleteElasticsearchDomain: "DELETE /2015-01-01/es/domain/{DomainName}",
      DeleteElasticsearchServiceRole: "DELETE /2015-01-01/es/role",
      DeleteInboundCrossClusterSearchConnection:
        "DELETE /2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}",
      DeleteOutboundCrossClusterSearchConnection:
        "DELETE /2015-01-01/es/ccs/outboundConnection/{CrossClusterSearchConnectionId}",
      DeletePackage: "DELETE /2015-01-01/packages/{PackageID}",
      DeleteVpcEndpoint: "DELETE /2015-01-01/es/vpcEndpoints/{VpcEndpointId}",
      DescribeDomainAutoTunes:
        "GET /2015-01-01/es/domain/{DomainName}/autoTunes",
      DescribeDomainChangeProgress:
        "GET /2015-01-01/es/domain/{DomainName}/progress",
      DescribeElasticsearchDomain: "GET /2015-01-01/es/domain/{DomainName}",
      DescribeElasticsearchDomainConfig:
        "GET /2015-01-01/es/domain/{DomainName}/config",
      DescribeElasticsearchDomains: "POST /2015-01-01/es/domain-info",
      DescribeElasticsearchInstanceTypeLimits:
        "GET /2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}",
      DescribeInboundCrossClusterSearchConnections:
        "POST /2015-01-01/es/ccs/inboundConnection/search",
      DescribeOutboundCrossClusterSearchConnections:
        "POST /2015-01-01/es/ccs/outboundConnection/search",
      DescribePackages: "POST /2015-01-01/packages/describe",
      DescribeReservedElasticsearchInstanceOfferings:
        "GET /2015-01-01/es/reservedInstanceOfferings",
      DescribeReservedElasticsearchInstances:
        "GET /2015-01-01/es/reservedInstances",
      DescribeVpcEndpoints: "POST /2015-01-01/es/vpcEndpoints/describe",
      DissociatePackage:
        "POST /2015-01-01/packages/dissociate/{PackageID}/{DomainName}",
      GetCompatibleElasticsearchVersions:
        "GET /2015-01-01/es/compatibleVersions",
      GetPackageVersionHistory: "GET /2015-01-01/packages/{PackageID}/history",
      GetUpgradeHistory:
        "GET /2015-01-01/es/upgradeDomain/{DomainName}/history",
      GetUpgradeStatus: "GET /2015-01-01/es/upgradeDomain/{DomainName}/status",
      ListDomainNames: "GET /2015-01-01/domain",
      ListDomainsForPackage: "GET /2015-01-01/packages/{PackageID}/domains",
      ListElasticsearchInstanceTypes:
        "GET /2015-01-01/es/instanceTypes/{ElasticsearchVersion}",
      ListElasticsearchVersions: "GET /2015-01-01/es/versions",
      ListPackagesForDomain: "GET /2015-01-01/domain/{DomainName}/packages",
      ListTags: "GET /2015-01-01/tags",
      ListVpcEndpointAccess:
        "GET /2015-01-01/es/domain/{DomainName}/listVpcEndpointAccess",
      ListVpcEndpoints: "GET /2015-01-01/es/vpcEndpoints",
      ListVpcEndpointsForDomain:
        "GET /2015-01-01/es/domain/{DomainName}/vpcEndpoints",
      PurchaseReservedElasticsearchInstanceOffering:
        "POST /2015-01-01/es/purchaseReservedInstanceOffering",
      RejectInboundCrossClusterSearchConnection:
        "PUT /2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/reject",
      RemoveTags: "POST /2015-01-01/tags-removal",
      RevokeVpcEndpointAccess:
        "POST /2015-01-01/es/domain/{DomainName}/revokeVpcEndpointAccess",
      StartElasticsearchServiceSoftwareUpdate:
        "POST /2015-01-01/es/serviceSoftwareUpdate/start",
      UpdateElasticsearchDomainConfig:
        "POST /2015-01-01/es/domain/{DomainName}/config",
      UpdatePackage: "POST /2015-01-01/packages/update",
      UpdateVpcEndpoint: "POST /2015-01-01/es/vpcEndpoints/update",
      UpgradeElasticsearchDomain: "POST /2015-01-01/es/upgradeDomain",
    },
  },
  emr: {
    sdkId: "EMR",
    version: "2009-03-31",
    arnNamespace: "elasticmapreduce",
    cloudTrailEventSource: "elasticmapreduce.amazonaws.com",
    endpointPrefix: "elasticmapreduce",
    protocol: "awsJson1_1",
    targetPrefix: "ElasticMapReduce",
  },
  emrcontainers: {
    sdkId: "EMR containers",
    version: "2020-10-01",
    arnNamespace: "emr-containers",
    cloudTrailEventSource: "emrcontainers.amazonaws.com",
    endpointPrefix: "emr-containers",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelJobRun: "DELETE /virtualclusters/{virtualClusterId}/jobruns/{id}",
      CreateJobTemplate: "POST /jobtemplates",
      CreateManagedEndpoint:
        "POST /virtualclusters/{virtualClusterId}/endpoints",
      CreateSecurityConfiguration: "POST /securityconfigurations",
      CreateVirtualCluster: "POST /virtualclusters",
      DeleteJobTemplate: "DELETE /jobtemplates/{id}",
      DeleteManagedEndpoint:
        "DELETE /virtualclusters/{virtualClusterId}/endpoints/{id}",
      DeleteVirtualCluster: "DELETE /virtualclusters/{id}",
      DescribeJobRun: "GET /virtualclusters/{virtualClusterId}/jobruns/{id}",
      DescribeJobTemplate: "GET /jobtemplates/{id}",
      DescribeManagedEndpoint:
        "GET /virtualclusters/{virtualClusterId}/endpoints/{id}",
      DescribeSecurityConfiguration: "GET /securityconfigurations/{id}",
      DescribeVirtualCluster: "GET /virtualclusters/{id}",
      GetManagedEndpointSessionCredentials:
        "POST /virtualclusters/{virtualClusterIdentifier}/endpoints/{endpointIdentifier}/credentials",
      ListJobRuns: "GET /virtualclusters/{virtualClusterId}/jobruns",
      ListJobTemplates: "GET /jobtemplates",
      ListManagedEndpoints: "GET /virtualclusters/{virtualClusterId}/endpoints",
      ListSecurityConfigurations: "GET /securityconfigurations",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListVirtualClusters: "GET /virtualclusters",
      StartJobRun: "POST /virtualclusters/{virtualClusterId}/jobruns",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
    },
  },
  emrserverless: {
    sdkId: "EMR Serverless",
    version: "2021-07-13",
    arnNamespace: "emr-serverless",
    cloudTrailEventSource: "emr-serverless.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CancelJobRun: "DELETE /applications/{applicationId}/jobruns/{jobRunId}",
      CreateApplication: "POST /applications",
      DeleteApplication: "DELETE /applications/{applicationId}",
      GetApplication: "GET /applications/{applicationId}",
      GetDashboardForJobRun:
        "GET /applications/{applicationId}/jobruns/{jobRunId}/dashboard",
      GetJobRun: "GET /applications/{applicationId}/jobruns/{jobRunId}",
      ListApplications: "GET /applications",
      ListJobRunAttempts:
        "GET /applications/{applicationId}/jobruns/{jobRunId}/attempts",
      ListJobRuns: "GET /applications/{applicationId}/jobruns",
      StartApplication: "POST /applications/{applicationId}/start",
      StartJobRun: "POST /applications/{applicationId}/jobruns",
      StopApplication: "POST /applications/{applicationId}/stop",
      UpdateApplication: "PATCH /applications/{applicationId}",
    },
  },
  entityresolution: {
    sdkId: "EntityResolution",
    version: "2018-05-10",
    arnNamespace: "entityresolution",
    cloudTrailEventSource: "entityresolution.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AddPolicyStatement: "POST /policies/{arn}/{statementId}",
      BatchDeleteUniqueId: "DELETE /matchingworkflows/{workflowName}/uniqueids",
      CreateIdMappingWorkflow: "POST /idmappingworkflows",
      CreateIdNamespace: "POST /idnamespaces",
      CreateMatchingWorkflow: "POST /matchingworkflows",
      CreateSchemaMapping: "POST /schemas",
      DeleteIdMappingWorkflow: "DELETE /idmappingworkflows/{workflowName}",
      DeleteIdNamespace: "DELETE /idnamespaces/{idNamespaceName}",
      DeleteMatchingWorkflow: "DELETE /matchingworkflows/{workflowName}",
      DeletePolicyStatement: "DELETE /policies/{arn}/{statementId}",
      DeleteSchemaMapping: "DELETE /schemas/{schemaName}",
      GenerateMatchId: "POST /matchingworkflows/{workflowName}/generateMatches",
      GetIdMappingJob: "GET /idmappingworkflows/{workflowName}/jobs/{jobId}",
      GetIdMappingWorkflow: "GET /idmappingworkflows/{workflowName}",
      GetIdNamespace: "GET /idnamespaces/{idNamespaceName}",
      GetMatchId: "POST /matchingworkflows/{workflowName}/matches",
      GetMatchingJob: "GET /matchingworkflows/{workflowName}/jobs/{jobId}",
      GetMatchingWorkflow: "GET /matchingworkflows/{workflowName}",
      GetPolicy: "GET /policies/{arn}",
      GetProviderService:
        "GET /providerservices/{providerName}/{providerServiceName}",
      GetSchemaMapping: "GET /schemas/{schemaName}",
      ListIdMappingJobs: "GET /idmappingworkflows/{workflowName}/jobs",
      ListIdMappingWorkflows: "GET /idmappingworkflows",
      ListIdNamespaces: "GET /idnamespaces",
      ListMatchingJobs: "GET /matchingworkflows/{workflowName}/jobs",
      ListMatchingWorkflows: "GET /matchingworkflows",
      ListProviderServices: "GET /providerservices",
      ListSchemaMappings: "GET /schemas",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutPolicy: "PUT /policies/{arn}",
      StartIdMappingJob: "POST /idmappingworkflows/{workflowName}/jobs",
      StartMatchingJob: "POST /matchingworkflows/{workflowName}/jobs",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateIdMappingWorkflow: "PUT /idmappingworkflows/{workflowName}",
      UpdateIdNamespace: "PUT /idnamespaces/{idNamespaceName}",
      UpdateMatchingWorkflow: "PUT /matchingworkflows/{workflowName}",
      UpdateSchemaMapping: "PUT /schemas/{schemaName}",
    },
  },
  eventbridge: {
    sdkId: "EventBridge",
    version: "2015-10-07",
    arnNamespace: "events",
    cloudTrailEventSource: "events.amazonaws.com",
    endpointPrefix: "events",
    protocol: "awsJson1_1",
    targetPrefix: "AWSEvents",
  },
  evidently: {
    sdkId: "Evidently",
    version: "2021-02-01",
    arnNamespace: "evidently",
    cloudTrailEventSource: "evidently.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      TestSegmentPattern: "POST /test-segment-pattern",
      UntagResource: "DELETE /tags/{resourceArn}",
      BatchEvaluateFeature: "POST /projects/{project}/evaluations",
      CreateExperiment: "POST /projects/{project}/experiments",
      CreateFeature: "POST /projects/{project}/features",
      CreateLaunch: "POST /projects/{project}/launches",
      CreateProject: "POST /projects",
      CreateSegment: "POST /segments",
      DeleteExperiment: "DELETE /projects/{project}/experiments/{experiment}",
      DeleteFeature: "DELETE /projects/{project}/features/{feature}",
      DeleteLaunch: "DELETE /projects/{project}/launches/{launch}",
      DeleteProject: "DELETE /projects/{project}",
      DeleteSegment: "DELETE /segments/{segment}",
      EvaluateFeature: "POST /projects/{project}/evaluations/{feature}",
      GetExperiment: "GET /projects/{project}/experiments/{experiment}",
      GetExperimentResults:
        "POST /projects/{project}/experiments/{experiment}/results",
      GetFeature: "GET /projects/{project}/features/{feature}",
      GetLaunch: "GET /projects/{project}/launches/{launch}",
      GetProject: "GET /projects/{project}",
      GetSegment: "GET /segments/{segment}",
      ListExperiments: "GET /projects/{project}/experiments",
      ListFeatures: "GET /projects/{project}/features",
      ListLaunches: "GET /projects/{project}/launches",
      ListProjects: "GET /projects",
      ListSegmentReferences: "GET /segments/{segment}/references",
      ListSegments: "GET /segments",
      PutProjectEvents: "POST /events/projects/{project}",
      StartExperiment:
        "POST /projects/{project}/experiments/{experiment}/start",
      StartLaunch: "POST /projects/{project}/launches/{launch}/start",
      StopExperiment:
        "POST /projects/{project}/experiments/{experiment}/cancel",
      StopLaunch: "POST /projects/{project}/launches/{launch}/cancel",
      UpdateExperiment: "PATCH /projects/{project}/experiments/{experiment}",
      UpdateFeature: "PATCH /projects/{project}/features/{feature}",
      UpdateLaunch: "PATCH /projects/{project}/launches/{launch}",
      UpdateProject: "PATCH /projects/{project}",
      UpdateProjectDataDelivery: "PATCH /projects/{project}/data-delivery",
    },
  },
  evs: {
    sdkId: "evs",
    version: "2023-07-27",
    arnNamespace: "evs",
    cloudTrailEventSource: "evs.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_0",
    targetPrefix: "AmazonElasticVMwareService",
  },
  finspace: {
    sdkId: "finspace",
    version: "2021-03-12",
    arnNamespace: "finspace",
    cloudTrailEventSource: "finspace.amazonaws.com",
    endpointPrefix: "finspace",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateEnvironment: "POST /environment",
      CreateKxChangeset:
        "POST /kx/environments/{environmentId}/databases/{databaseName}/changesets",
      CreateKxCluster: "POST /kx/environments/{environmentId}/clusters",
      CreateKxDatabase: "POST /kx/environments/{environmentId}/databases",
      CreateKxDataview:
        "POST /kx/environments/{environmentId}/databases/{databaseName}/dataviews",
      CreateKxEnvironment: "POST /kx/environments",
      CreateKxScalingGroup:
        "POST /kx/environments/{environmentId}/scalingGroups",
      CreateKxUser: "POST /kx/environments/{environmentId}/users",
      CreateKxVolume: "POST /kx/environments/{environmentId}/kxvolumes",
      DeleteEnvironment: "DELETE /environment/{environmentId}",
      DeleteKxCluster:
        "DELETE /kx/environments/{environmentId}/clusters/{clusterName}",
      DeleteKxClusterNode:
        "DELETE /kx/environments/{environmentId}/clusters/{clusterName}/nodes/{nodeId}",
      DeleteKxDatabase:
        "DELETE /kx/environments/{environmentId}/databases/{databaseName}",
      DeleteKxDataview:
        "DELETE /kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}",
      DeleteKxEnvironment: "DELETE /kx/environments/{environmentId}",
      DeleteKxScalingGroup:
        "DELETE /kx/environments/{environmentId}/scalingGroups/{scalingGroupName}",
      DeleteKxUser: "DELETE /kx/environments/{environmentId}/users/{userName}",
      DeleteKxVolume:
        "DELETE /kx/environments/{environmentId}/kxvolumes/{volumeName}",
      GetEnvironment: "GET /environment/{environmentId}",
      GetKxChangeset:
        "GET /kx/environments/{environmentId}/databases/{databaseName}/changesets/{changesetId}",
      GetKxCluster:
        "GET /kx/environments/{environmentId}/clusters/{clusterName}",
      GetKxConnectionString:
        "GET /kx/environments/{environmentId}/connectionString",
      GetKxDatabase:
        "GET /kx/environments/{environmentId}/databases/{databaseName}",
      GetKxDataview:
        "GET /kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}",
      GetKxEnvironment: "GET /kx/environments/{environmentId}",
      GetKxScalingGroup:
        "GET /kx/environments/{environmentId}/scalingGroups/{scalingGroupName}",
      GetKxUser: "GET /kx/environments/{environmentId}/users/{userName}",
      GetKxVolume:
        "GET /kx/environments/{environmentId}/kxvolumes/{volumeName}",
      ListEnvironments: "GET /environment",
      ListKxChangesets:
        "GET /kx/environments/{environmentId}/databases/{databaseName}/changesets",
      ListKxClusterNodes:
        "GET /kx/environments/{environmentId}/clusters/{clusterName}/nodes",
      ListKxClusters: "GET /kx/environments/{environmentId}/clusters",
      ListKxDatabases: "GET /kx/environments/{environmentId}/databases",
      ListKxDataviews:
        "GET /kx/environments/{environmentId}/databases/{databaseName}/dataviews",
      ListKxEnvironments: "GET /kx/environments",
      ListKxScalingGroups: "GET /kx/environments/{environmentId}/scalingGroups",
      ListKxUsers: "GET /kx/environments/{environmentId}/users",
      ListKxVolumes: "GET /kx/environments/{environmentId}/kxvolumes",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateEnvironment: "PUT /environment/{environmentId}",
      UpdateKxClusterCodeConfiguration:
        "PUT /kx/environments/{environmentId}/clusters/{clusterName}/configuration/code",
      UpdateKxClusterDatabases:
        "PUT /kx/environments/{environmentId}/clusters/{clusterName}/configuration/databases",
      UpdateKxDatabase:
        "PUT /kx/environments/{environmentId}/databases/{databaseName}",
      UpdateKxDataview:
        "PUT /kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}",
      UpdateKxEnvironment: "PUT /kx/environments/{environmentId}",
      UpdateKxEnvironmentNetwork:
        "PUT /kx/environments/{environmentId}/network",
      UpdateKxUser: "PUT /kx/environments/{environmentId}/users/{userName}",
      UpdateKxVolume:
        "PATCH /kx/environments/{environmentId}/kxvolumes/{volumeName}",
    },
  },
  finspacedata: {
    sdkId: "finspace data",
    version: "2020-07-13",
    arnNamespace: "finspace-api",
    cloudTrailEventSource: "finspacedata.amazonaws.com",
    endpointPrefix: "finspace-api",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateUserToPermissionGroup: {
        http: "POST /permission-group/{permissionGroupId}/users/{userId}",
        traits: {
          statusCode: "httpResponseCode",
        },
      },
      CreateChangeset: "POST /datasets/{datasetId}/changesetsv2",
      CreateDataset: "POST /datasetsv2",
      CreateDataView: "POST /datasets/{datasetId}/dataviewsv2",
      CreatePermissionGroup: "POST /permission-group",
      CreateUser: "POST /user",
      DeleteDataset: "DELETE /datasetsv2/{datasetId}",
      DeletePermissionGroup: "DELETE /permission-group/{permissionGroupId}",
      DisableUser: "POST /user/{userId}/disable",
      DisassociateUserFromPermissionGroup: {
        http: "DELETE /permission-group/{permissionGroupId}/users/{userId}",
        traits: {
          statusCode: "httpResponseCode",
        },
      },
      EnableUser: "POST /user/{userId}/enable",
      GetChangeset: "GET /datasets/{datasetId}/changesetsv2/{changesetId}",
      GetDataset: "GET /datasetsv2/{datasetId}",
      GetDataView: "GET /datasets/{datasetId}/dataviewsv2/{dataViewId}",
      GetExternalDataViewAccessDetails:
        "POST /datasets/{datasetId}/dataviewsv2/{dataViewId}/external-access-details",
      GetPermissionGroup: "GET /permission-group/{permissionGroupId}",
      GetProgrammaticAccessCredentials: "GET /credentials/programmatic",
      GetUser: "GET /user/{userId}",
      GetWorkingLocation: "POST /workingLocationV1",
      ListChangesets: "GET /datasets/{datasetId}/changesetsv2",
      ListDatasets: "GET /datasetsv2",
      ListDataViews: "GET /datasets/{datasetId}/dataviewsv2",
      ListPermissionGroups: "GET /permission-group",
      ListPermissionGroupsByUser: "GET /user/{userId}/permission-groups",
      ListUsers: "GET /user",
      ListUsersByPermissionGroup:
        "GET /permission-group/{permissionGroupId}/users",
      ResetUserPassword: "POST /user/{userId}/password",
      UpdateChangeset: "PUT /datasets/{datasetId}/changesetsv2/{changesetId}",
      UpdateDataset: "PUT /datasetsv2/{datasetId}",
      UpdatePermissionGroup: "PUT /permission-group/{permissionGroupId}",
      UpdateUser: "PUT /user/{userId}",
    },
  },
  firehose: {
    sdkId: "Firehose",
    version: "2015-08-04",
    arnNamespace: "firehose",
    cloudTrailEventSource: "firehose.amazonaws.com",
    endpointPrefix: "firehose",
    protocol: "awsJson1_1",
    targetPrefix: "Firehose_20150804",
  },
  fis: {
    sdkId: "fis",
    version: "2020-12-01",
    arnNamespace: "fis",
    cloudTrailEventSource: "fis.amazonaws.com",
    endpointPrefix: "fis",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateExperimentTemplate: "POST /experimentTemplates",
      CreateTargetAccountConfiguration:
        "POST /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
      DeleteExperimentTemplate: "DELETE /experimentTemplates/{id}",
      DeleteTargetAccountConfiguration:
        "DELETE /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
      GetAction: "GET /actions/{id}",
      GetExperiment: "GET /experiments/{id}",
      GetExperimentTargetAccountConfiguration:
        "GET /experiments/{experimentId}/targetAccountConfigurations/{accountId}",
      GetExperimentTemplate: "GET /experimentTemplates/{id}",
      GetSafetyLever: "GET /safetyLevers/{id}",
      GetTargetAccountConfiguration:
        "GET /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
      GetTargetResourceType: "GET /targetResourceTypes/{resourceType}",
      ListActions: "GET /actions",
      ListExperimentResolvedTargets:
        "GET /experiments/{experimentId}/resolvedTargets",
      ListExperiments: "GET /experiments",
      ListExperimentTargetAccountConfigurations:
        "GET /experiments/{experimentId}/targetAccountConfigurations",
      ListExperimentTemplates: "GET /experimentTemplates",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListTargetAccountConfigurations:
        "GET /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations",
      ListTargetResourceTypes: "GET /targetResourceTypes",
      StartExperiment: "POST /experiments",
      StopExperiment: "DELETE /experiments/{id}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateExperimentTemplate: "PATCH /experimentTemplates/{id}",
      UpdateSafetyLeverState: "PATCH /safetyLevers/{id}/state",
      UpdateTargetAccountConfiguration:
        "PATCH /experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
    },
  },
  fms: {
    sdkId: "FMS",
    version: "2018-01-01",
    arnNamespace: "fms",
    cloudTrailEventSource: "fms.amazonaws.com",
    endpointPrefix: "fms",
    protocol: "awsJson1_1",
    targetPrefix: "AWSFMS_20180101",
  },
  forecast: {
    sdkId: "forecast",
    version: "2018-06-26",
    arnNamespace: "forecast",
    cloudTrailEventSource: "forecast.amazonaws.com",
    endpointPrefix: "forecast",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonForecast",
  },
  forecastquery: {
    sdkId: "forecastquery",
    version: "2018-06-26",
    arnNamespace: "forecast",
    cloudTrailEventSource: "forecastquery.amazonaws.com",
    endpointPrefix: "forecastquery",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonForecastRuntime",
  },
  frauddetector: {
    sdkId: "FraudDetector",
    version: "2019-11-15",
    arnNamespace: "frauddetector",
    cloudTrailEventSource: "frauddetector.amazonaws.com",
    endpointPrefix: "frauddetector",
    protocol: "awsJson1_1",
    targetPrefix: "AWSHawksNestServiceFacade",
  },
  freetier: {
    sdkId: "FreeTier",
    version: "2023-09-07",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "freetier",
    protocol: "awsJson1_0",
    targetPrefix: "AWSFreeTierService",
  },
  fsx: {
    sdkId: "FSx",
    version: "2018-03-01",
    arnNamespace: "fsx",
    cloudTrailEventSource: "fsx.amazonaws.com",
    endpointPrefix: "fsx",
    protocol: "awsJson1_1",
    targetPrefix: "AWSSimbaAPIService_v20180301",
  },
  gamelift: {
    sdkId: "GameLift",
    version: "2015-10-01",
    arnNamespace: "gamelift",
    cloudTrailEventSource: "gamelift.amazonaws.com",
    endpointPrefix: "gamelift",
    protocol: "awsJson1_1",
    targetPrefix: "GameLift",
  },
  gameliftstreams: {
    sdkId: "GameLiftStreams",
    version: "2018-05-10",
    arnNamespace: "gameliftstreams",
    cloudTrailEventSource: "gameliftstreams.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AddStreamGroupLocations: "POST /streamgroups/{Identifier}/locations",
      AssociateApplications: "POST /streamgroups/{Identifier}/associations",
      CreateStreamSessionConnection:
        "POST /streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/connections",
      DisassociateApplications:
        "POST /streamgroups/{Identifier}/disassociations",
      ExportStreamSessionFiles:
        "PUT /streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/exportfiles",
      GetStreamSession:
        "GET /streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}",
      ListStreamSessions: "GET /streamgroups/{Identifier}/streamsessions",
      ListStreamSessionsByAccount: "GET /streamsessions",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      RemoveStreamGroupLocations: "DELETE /streamgroups/{Identifier}/locations",
      StartStreamSession: "POST /streamgroups/{Identifier}/streamsessions",
      TagResource: "POST /tags/{ResourceArn}",
      TerminateStreamSession:
        "DELETE /streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      CreateApplication: "POST /applications",
      CreateStreamGroup: "POST /streamgroups",
      DeleteApplication: "DELETE /applications/{Identifier}",
      DeleteStreamGroup: "DELETE /streamgroups/{Identifier}",
      GetApplication: "GET /applications/{Identifier}",
      GetStreamGroup: "GET /streamgroups/{Identifier}",
      ListApplications: "GET /applications",
      ListStreamGroups: "GET /streamgroups",
      UpdateApplication: "PATCH /applications/{Identifier}",
      UpdateStreamGroup: "PATCH /streamgroups/{Identifier}",
    },
  },
  geomaps: {
    sdkId: "Geo Maps",
    version: "2020-11-19",
    arnNamespace: "geo-maps",
    cloudTrailEventSource: "geo-maps.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetGlyphs: {
        http: "GET /glyphs/{FontStack}/{FontUnicodeRange}",
        traits: {
          Blob: "httpPayload",
          ContentType: "Content-Type",
          CacheControl: "Cache-Control",
          ETag: "ETag",
        },
      },
      GetSprites: {
        http: "GET /styles/{Style}/{ColorScheme}/{Variant}/sprites/{FileName}",
        traits: {
          Blob: "httpPayload",
          ContentType: "Content-Type",
          CacheControl: "Cache-Control",
          ETag: "ETag",
        },
      },
      GetStaticMap: {
        http: "GET /static/{FileName}",
        traits: {
          Blob: "httpPayload",
          ContentType: "Content-Type",
          CacheControl: "Cache-Control",
          ETag: "ETag",
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      GetStyleDescriptor: {
        http: "GET /styles/{Style}/descriptor",
        traits: {
          Blob: "httpPayload",
          ContentType: "Content-Type",
          CacheControl: "Cache-Control",
          ETag: "ETag",
        },
      },
      GetTile: {
        http: "GET /tiles/{Tileset}/{Z}/{X}/{Y}",
        traits: {
          Blob: "httpPayload",
          ContentType: "Content-Type",
          CacheControl: "Cache-Control",
          ETag: "ETag",
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
    },
  },
  geoplaces: {
    sdkId: "Geo Places",
    version: "2020-11-19",
    arnNamespace: "geo-places",
    cloudTrailEventSource: "geo-places.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      Autocomplete: {
        http: "POST /autocomplete",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      Geocode: {
        http: "POST /geocode",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      GetPlace: {
        http: "GET /place/{PlaceId}",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      ReverseGeocode: {
        http: "POST /reverse-geocode",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      SearchNearby: {
        http: "POST /search-nearby",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      SearchText: {
        http: "POST /search-text",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      Suggest: {
        http: "POST /suggest",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
    },
  },
  georoutes: {
    sdkId: "Geo Routes",
    version: "2020-11-19",
    arnNamespace: "geo-routes",
    cloudTrailEventSource: "geo-routes.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CalculateIsolines: {
        http: "POST /isolines",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      CalculateRouteMatrix: {
        http: "POST /route-matrix",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      CalculateRoutes: {
        http: "POST /routes",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      OptimizeWaypoints: {
        http: "POST /optimize-waypoints",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
      SnapToRoads: {
        http: "POST /snap-to-roads",
        traits: {
          PricingBucket: "x-amz-geo-pricing-bucket",
        },
      },
    },
  },
  glacier: {
    sdkId: "Glacier",
    version: "2012-06-01",
    arnNamespace: "glacier",
    cloudTrailEventSource: "glacier.amazonaws.com",
    endpointPrefix: "glacier",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AbortMultipartUpload:
        "DELETE /{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}",
      AbortVaultLock: "DELETE /{accountId}/vaults/{vaultName}/lock-policy",
      AddTagsToVault: "POST /{accountId}/vaults/{vaultName}/tags?operation=add",
      CompleteMultipartUpload: {
        http: "POST /{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}",
        traits: {
          location: "Location",
          checksum: "x-amz-sha256-tree-hash",
          archiveId: "x-amz-archive-id",
        },
      },
      CompleteVaultLock:
        "POST /{accountId}/vaults/{vaultName}/lock-policy/{lockId}",
      CreateVault: {
        http: "PUT /{accountId}/vaults/{vaultName}",
        traits: {
          location: "Location",
        },
      },
      DeleteArchive:
        "DELETE /{accountId}/vaults/{vaultName}/archives/{archiveId}",
      DeleteVault: "DELETE /{accountId}/vaults/{vaultName}",
      DeleteVaultAccessPolicy:
        "DELETE /{accountId}/vaults/{vaultName}/access-policy",
      DeleteVaultNotifications:
        "DELETE /{accountId}/vaults/{vaultName}/notification-configuration",
      DescribeJob: "GET /{accountId}/vaults/{vaultName}/jobs/{jobId}",
      DescribeVault: "GET /{accountId}/vaults/{vaultName}",
      GetDataRetrievalPolicy: "GET /{accountId}/policies/data-retrieval",
      GetJobOutput: {
        http: "GET /{accountId}/vaults/{vaultName}/jobs/{jobId}/output",
        traits: {
          body: "httpPayload",
          checksum: "x-amz-sha256-tree-hash",
          status: "httpResponseCode",
          contentRange: "Content-Range",
          acceptRanges: "Accept-Ranges",
          contentType: "Content-Type",
          archiveDescription: "x-amz-archive-description",
        },
      },
      GetVaultAccessPolicy: {
        http: "GET /{accountId}/vaults/{vaultName}/access-policy",
        traits: {
          policy: "httpPayload",
        },
      },
      GetVaultLock: "GET /{accountId}/vaults/{vaultName}/lock-policy",
      GetVaultNotifications: {
        http: "GET /{accountId}/vaults/{vaultName}/notification-configuration",
        traits: {
          vaultNotificationConfig: "httpPayload",
        },
      },
      InitiateJob: {
        http: "POST /{accountId}/vaults/{vaultName}/jobs",
        traits: {
          location: "Location",
          jobId: "x-amz-job-id",
          jobOutputPath: "x-amz-job-output-path",
        },
      },
      InitiateMultipartUpload: {
        http: "POST /{accountId}/vaults/{vaultName}/multipart-uploads",
        traits: {
          location: "Location",
          uploadId: "x-amz-multipart-upload-id",
        },
      },
      InitiateVaultLock: {
        http: "POST /{accountId}/vaults/{vaultName}/lock-policy",
        traits: {
          lockId: "x-amz-lock-id",
        },
      },
      ListJobs: "GET /{accountId}/vaults/{vaultName}/jobs",
      ListMultipartUploads:
        "GET /{accountId}/vaults/{vaultName}/multipart-uploads",
      ListParts:
        "GET /{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}",
      ListProvisionedCapacity: "GET /{accountId}/provisioned-capacity",
      ListTagsForVault: "GET /{accountId}/vaults/{vaultName}/tags",
      ListVaults: "GET /{accountId}/vaults",
      PurchaseProvisionedCapacity: {
        http: "POST /{accountId}/provisioned-capacity",
        traits: {
          capacityId: "x-amz-capacity-id",
        },
      },
      RemoveTagsFromVault:
        "POST /{accountId}/vaults/{vaultName}/tags?operation=remove",
      SetDataRetrievalPolicy: "PUT /{accountId}/policies/data-retrieval",
      SetVaultAccessPolicy: "PUT /{accountId}/vaults/{vaultName}/access-policy",
      SetVaultNotifications:
        "PUT /{accountId}/vaults/{vaultName}/notification-configuration",
      UploadArchive: {
        http: "POST /{accountId}/vaults/{vaultName}/archives",
        traits: {
          location: "Location",
          checksum: "x-amz-sha256-tree-hash",
          archiveId: "x-amz-archive-id",
        },
      },
      UploadMultipartPart: {
        http: "PUT /{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}",
        traits: {
          checksum: "x-amz-sha256-tree-hash",
        },
      },
    },
  },
  globalaccelerator: {
    sdkId: "Global Accelerator",
    version: "2018-08-08",
    arnNamespace: "globalaccelerator",
    cloudTrailEventSource: "globalaccelerator.amazonaws.com",
    endpointPrefix: "globalaccelerator",
    protocol: "awsJson1_1",
    targetPrefix: "GlobalAccelerator_V20180706",
  },
  glue: {
    sdkId: "Glue",
    version: "2017-03-31",
    arnNamespace: "glue",
    cloudTrailEventSource: "glue.amazonaws.com",
    endpointPrefix: "glue",
    protocol: "awsJson1_1",
    targetPrefix: "AWSGlue",
  },
  grafana: {
    sdkId: "grafana",
    version: "2020-08-18",
    arnNamespace: "grafana",
    cloudTrailEventSource: "EVENT_SOURCE_VALUE",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListVersions: "GET /versions",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      AssociateLicense: "POST /workspaces/{workspaceId}/licenses/{licenseType}",
      CreateWorkspace: "POST /workspaces",
      CreateWorkspaceApiKey: "POST /workspaces/{workspaceId}/apikeys",
      CreateWorkspaceServiceAccount:
        "POST /workspaces/{workspaceId}/serviceaccounts",
      CreateWorkspaceServiceAccountToken:
        "POST /workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens",
      DeleteWorkspace: "DELETE /workspaces/{workspaceId}",
      DeleteWorkspaceApiKey:
        "DELETE /workspaces/{workspaceId}/apikeys/{keyName}",
      DeleteWorkspaceServiceAccount:
        "DELETE /workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}",
      DeleteWorkspaceServiceAccountToken:
        "DELETE /workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens/{tokenId}",
      DescribeWorkspace: "GET /workspaces/{workspaceId}",
      DescribeWorkspaceAuthentication:
        "GET /workspaces/{workspaceId}/authentication",
      DescribeWorkspaceConfiguration:
        "GET /workspaces/{workspaceId}/configuration",
      DisassociateLicense:
        "DELETE /workspaces/{workspaceId}/licenses/{licenseType}",
      ListPermissions: "GET /workspaces/{workspaceId}/permissions",
      ListWorkspaceServiceAccountTokens:
        "GET /workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens",
      ListWorkspaceServiceAccounts:
        "GET /workspaces/{workspaceId}/serviceaccounts",
      ListWorkspaces: "GET /workspaces",
      UpdatePermissions: "PATCH /workspaces/{workspaceId}/permissions",
      UpdateWorkspace: "PUT /workspaces/{workspaceId}",
      UpdateWorkspaceAuthentication:
        "POST /workspaces/{workspaceId}/authentication",
      UpdateWorkspaceConfiguration:
        "PUT /workspaces/{workspaceId}/configuration",
    },
  },
  greengrass: {
    sdkId: "Greengrass",
    version: "2017-06-07",
    arnNamespace: "greengrass",
    cloudTrailEventSource: "greengrass.amazonaws.com",
    endpointPrefix: "greengrass",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateRoleToGroup: "PUT /greengrass/groups/{GroupId}/role",
      AssociateServiceRoleToAccount: "PUT /greengrass/servicerole",
      CreateConnectorDefinition: "POST /greengrass/definition/connectors",
      CreateConnectorDefinitionVersion:
        "POST /greengrass/definition/connectors/{ConnectorDefinitionId}/versions",
      CreateCoreDefinition: "POST /greengrass/definition/cores",
      CreateCoreDefinitionVersion:
        "POST /greengrass/definition/cores/{CoreDefinitionId}/versions",
      CreateDeployment: "POST /greengrass/groups/{GroupId}/deployments",
      CreateDeviceDefinition: "POST /greengrass/definition/devices",
      CreateDeviceDefinitionVersion:
        "POST /greengrass/definition/devices/{DeviceDefinitionId}/versions",
      CreateFunctionDefinition: "POST /greengrass/definition/functions",
      CreateFunctionDefinitionVersion:
        "POST /greengrass/definition/functions/{FunctionDefinitionId}/versions",
      CreateGroup: "POST /greengrass/groups",
      CreateGroupCertificateAuthority:
        "POST /greengrass/groups/{GroupId}/certificateauthorities",
      CreateGroupVersion: "POST /greengrass/groups/{GroupId}/versions",
      CreateLoggerDefinition: "POST /greengrass/definition/loggers",
      CreateLoggerDefinitionVersion:
        "POST /greengrass/definition/loggers/{LoggerDefinitionId}/versions",
      CreateResourceDefinition: "POST /greengrass/definition/resources",
      CreateResourceDefinitionVersion:
        "POST /greengrass/definition/resources/{ResourceDefinitionId}/versions",
      CreateSoftwareUpdateJob: "POST /greengrass/updates",
      CreateSubscriptionDefinition: "POST /greengrass/definition/subscriptions",
      CreateSubscriptionDefinitionVersion:
        "POST /greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions",
      DeleteConnectorDefinition:
        "DELETE /greengrass/definition/connectors/{ConnectorDefinitionId}",
      DeleteCoreDefinition:
        "DELETE /greengrass/definition/cores/{CoreDefinitionId}",
      DeleteDeviceDefinition:
        "DELETE /greengrass/definition/devices/{DeviceDefinitionId}",
      DeleteFunctionDefinition:
        "DELETE /greengrass/definition/functions/{FunctionDefinitionId}",
      DeleteGroup: "DELETE /greengrass/groups/{GroupId}",
      DeleteLoggerDefinition:
        "DELETE /greengrass/definition/loggers/{LoggerDefinitionId}",
      DeleteResourceDefinition:
        "DELETE /greengrass/definition/resources/{ResourceDefinitionId}",
      DeleteSubscriptionDefinition:
        "DELETE /greengrass/definition/subscriptions/{SubscriptionDefinitionId}",
      DisassociateRoleFromGroup: "DELETE /greengrass/groups/{GroupId}/role",
      DisassociateServiceRoleFromAccount: "DELETE /greengrass/servicerole",
      GetAssociatedRole: "GET /greengrass/groups/{GroupId}/role",
      GetBulkDeploymentStatus:
        "GET /greengrass/bulk/deployments/{BulkDeploymentId}/status",
      GetConnectivityInfo:
        "GET /greengrass/things/{ThingName}/connectivityInfo",
      GetConnectorDefinition:
        "GET /greengrass/definition/connectors/{ConnectorDefinitionId}",
      GetConnectorDefinitionVersion:
        "GET /greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}",
      GetCoreDefinition: "GET /greengrass/definition/cores/{CoreDefinitionId}",
      GetCoreDefinitionVersion:
        "GET /greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}",
      GetDeploymentStatus:
        "GET /greengrass/groups/{GroupId}/deployments/{DeploymentId}/status",
      GetDeviceDefinition:
        "GET /greengrass/definition/devices/{DeviceDefinitionId}",
      GetDeviceDefinitionVersion:
        "GET /greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}",
      GetFunctionDefinition:
        "GET /greengrass/definition/functions/{FunctionDefinitionId}",
      GetFunctionDefinitionVersion:
        "GET /greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}",
      GetGroup: "GET /greengrass/groups/{GroupId}",
      GetGroupCertificateAuthority:
        "GET /greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}",
      GetGroupCertificateConfiguration:
        "GET /greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry",
      GetGroupVersion:
        "GET /greengrass/groups/{GroupId}/versions/{GroupVersionId}",
      GetLoggerDefinition:
        "GET /greengrass/definition/loggers/{LoggerDefinitionId}",
      GetLoggerDefinitionVersion:
        "GET /greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}",
      GetResourceDefinition:
        "GET /greengrass/definition/resources/{ResourceDefinitionId}",
      GetResourceDefinitionVersion:
        "GET /greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}",
      GetServiceRoleForAccount: "GET /greengrass/servicerole",
      GetSubscriptionDefinition:
        "GET /greengrass/definition/subscriptions/{SubscriptionDefinitionId}",
      GetSubscriptionDefinitionVersion:
        "GET /greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}",
      GetThingRuntimeConfiguration:
        "GET /greengrass/things/{ThingName}/runtimeconfig",
      ListBulkDeploymentDetailedReports:
        "GET /greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports",
      ListBulkDeployments: "GET /greengrass/bulk/deployments",
      ListConnectorDefinitions: "GET /greengrass/definition/connectors",
      ListConnectorDefinitionVersions:
        "GET /greengrass/definition/connectors/{ConnectorDefinitionId}/versions",
      ListCoreDefinitions: "GET /greengrass/definition/cores",
      ListCoreDefinitionVersions:
        "GET /greengrass/definition/cores/{CoreDefinitionId}/versions",
      ListDeployments: "GET /greengrass/groups/{GroupId}/deployments",
      ListDeviceDefinitions: "GET /greengrass/definition/devices",
      ListDeviceDefinitionVersions:
        "GET /greengrass/definition/devices/{DeviceDefinitionId}/versions",
      ListFunctionDefinitions: "GET /greengrass/definition/functions",
      ListFunctionDefinitionVersions:
        "GET /greengrass/definition/functions/{FunctionDefinitionId}/versions",
      ListGroupCertificateAuthorities:
        "GET /greengrass/groups/{GroupId}/certificateauthorities",
      ListGroups: "GET /greengrass/groups",
      ListGroupVersions: "GET /greengrass/groups/{GroupId}/versions",
      ListLoggerDefinitions: "GET /greengrass/definition/loggers",
      ListLoggerDefinitionVersions:
        "GET /greengrass/definition/loggers/{LoggerDefinitionId}/versions",
      ListResourceDefinitions: "GET /greengrass/definition/resources",
      ListResourceDefinitionVersions:
        "GET /greengrass/definition/resources/{ResourceDefinitionId}/versions",
      ListSubscriptionDefinitions: "GET /greengrass/definition/subscriptions",
      ListSubscriptionDefinitionVersions:
        "GET /greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      ResetDeployments: "POST /greengrass/groups/{GroupId}/deployments/$reset",
      StartBulkDeployment: "POST /greengrass/bulk/deployments",
      StopBulkDeployment:
        "PUT /greengrass/bulk/deployments/{BulkDeploymentId}/$stop",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateConnectivityInfo:
        "PUT /greengrass/things/{ThingName}/connectivityInfo",
      UpdateConnectorDefinition:
        "PUT /greengrass/definition/connectors/{ConnectorDefinitionId}",
      UpdateCoreDefinition:
        "PUT /greengrass/definition/cores/{CoreDefinitionId}",
      UpdateDeviceDefinition:
        "PUT /greengrass/definition/devices/{DeviceDefinitionId}",
      UpdateFunctionDefinition:
        "PUT /greengrass/definition/functions/{FunctionDefinitionId}",
      UpdateGroup: "PUT /greengrass/groups/{GroupId}",
      UpdateGroupCertificateConfiguration:
        "PUT /greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry",
      UpdateLoggerDefinition:
        "PUT /greengrass/definition/loggers/{LoggerDefinitionId}",
      UpdateResourceDefinition:
        "PUT /greengrass/definition/resources/{ResourceDefinitionId}",
      UpdateSubscriptionDefinition:
        "PUT /greengrass/definition/subscriptions/{SubscriptionDefinitionId}",
      UpdateThingRuntimeConfiguration:
        "PUT /greengrass/things/{ThingName}/runtimeconfig",
    },
  },
  greengrassv2: {
    sdkId: "GreengrassV2",
    version: "2020-11-30",
    arnNamespace: "greengrass",
    cloudTrailEventSource: "greengrass.amazonaws.com",
    endpointPrefix: "greengrass",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateServiceRoleToAccount: "PUT /greengrass/servicerole",
      BatchAssociateClientDeviceWithCoreDevice:
        "POST /greengrass/v2/coreDevices/{coreDeviceThingName}/associateClientDevices",
      BatchDisassociateClientDeviceFromCoreDevice:
        "POST /greengrass/v2/coreDevices/{coreDeviceThingName}/disassociateClientDevices",
      CancelDeployment: "POST /greengrass/v2/deployments/{deploymentId}/cancel",
      CreateComponentVersion: "POST /greengrass/v2/createComponentVersion",
      CreateDeployment: "POST /greengrass/v2/deployments",
      DeleteComponent: "DELETE /greengrass/v2/components/{arn}",
      DeleteCoreDevice:
        "DELETE /greengrass/v2/coreDevices/{coreDeviceThingName}",
      DeleteDeployment: "DELETE /greengrass/v2/deployments/{deploymentId}",
      DescribeComponent: "GET /greengrass/v2/components/{arn}/metadata",
      DisassociateServiceRoleFromAccount: "DELETE /greengrass/servicerole",
      GetComponent: "GET /greengrass/v2/components/{arn}",
      GetComponentVersionArtifact:
        "GET /greengrass/v2/components/{arn}/artifacts/{artifactName+}",
      GetConnectivityInfo:
        "GET /greengrass/things/{thingName}/connectivityInfo",
      GetCoreDevice: "GET /greengrass/v2/coreDevices/{coreDeviceThingName}",
      GetDeployment: "GET /greengrass/v2/deployments/{deploymentId}",
      GetServiceRoleForAccount: "GET /greengrass/servicerole",
      ListClientDevicesAssociatedWithCoreDevice:
        "GET /greengrass/v2/coreDevices/{coreDeviceThingName}/associatedClientDevices",
      ListComponents: "GET /greengrass/v2/components",
      ListComponentVersions: "GET /greengrass/v2/components/{arn}/versions",
      ListCoreDevices: "GET /greengrass/v2/coreDevices",
      ListDeployments: "GET /greengrass/v2/deployments",
      ListEffectiveDeployments:
        "GET /greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments",
      ListInstalledComponents:
        "GET /greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ResolveComponentCandidates:
        "POST /greengrass/v2/resolveComponentCandidates",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateConnectivityInfo:
        "PUT /greengrass/things/{thingName}/connectivityInfo",
    },
  },
  groundstation: {
    sdkId: "GroundStation",
    version: "2019-05-23",
    arnNamespace: "groundstation",
    cloudTrailEventSource: "groundstation.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetMinuteUsage: "POST /minute-usage",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CancelContact: "DELETE /contact/{contactId}",
      CreateConfig: "POST /config",
      CreateDataflowEndpointGroup: "POST /dataflowEndpointGroup",
      CreateEphemeris: "POST /ephemeris",
      CreateMissionProfile: "POST /missionprofile",
      DeleteConfig: "DELETE /config/{configType}/{configId}",
      DeleteDataflowEndpointGroup:
        "DELETE /dataflowEndpointGroup/{dataflowEndpointGroupId}",
      DeleteEphemeris: "DELETE /ephemeris/{ephemerisId}",
      DeleteMissionProfile: "DELETE /missionprofile/{missionProfileId}",
      DescribeContact: "GET /contact/{contactId}",
      DescribeEphemeris: "GET /ephemeris/{ephemerisId}",
      GetAgentConfiguration: "GET /agent/{agentId}/configuration",
      GetConfig: "GET /config/{configType}/{configId}",
      GetDataflowEndpointGroup:
        "GET /dataflowEndpointGroup/{dataflowEndpointGroupId}",
      GetMissionProfile: "GET /missionprofile/{missionProfileId}",
      GetSatellite: "GET /satellite/{satelliteId}",
      ListConfigs: "GET /config",
      ListContacts: "POST /contacts",
      ListDataflowEndpointGroups: "GET /dataflowEndpointGroup",
      ListEphemerides: "POST /ephemerides",
      ListGroundStations: "GET /groundstation",
      ListMissionProfiles: "GET /missionprofile",
      ListSatellites: "GET /satellite",
      RegisterAgent: "POST /agent",
      ReserveContact: "POST /contact",
      UpdateAgentStatus: "PUT /agent/{agentId}",
      UpdateConfig: "PUT /config/{configType}/{configId}",
      UpdateEphemeris: "PUT /ephemeris/{ephemerisId}",
      UpdateMissionProfile: "PUT /missionprofile/{missionProfileId}",
    },
  },
  guardduty: {
    sdkId: "GuardDuty",
    version: "2017-11-28",
    arnNamespace: "guardduty",
    cloudTrailEventSource: "guardduty.amazonaws.com",
    endpointPrefix: "guardduty",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptAdministratorInvitation:
        "POST /detector/{DetectorId}/administrator",
      AcceptInvitation: "POST /detector/{DetectorId}/master",
      ArchiveFindings: "POST /detector/{DetectorId}/findings/archive",
      CreateDetector: "POST /detector",
      CreateFilter: "POST /detector/{DetectorId}/filter",
      CreateIPSet: "POST /detector/{DetectorId}/ipset",
      CreateMalwareProtectionPlan: "POST /malware-protection-plan",
      CreateMembers: "POST /detector/{DetectorId}/member",
      CreatePublishingDestination:
        "POST /detector/{DetectorId}/publishingDestination",
      CreateSampleFindings: "POST /detector/{DetectorId}/findings/create",
      CreateThreatIntelSet: "POST /detector/{DetectorId}/threatintelset",
      DeclineInvitations: "POST /invitation/decline",
      DeleteDetector: "DELETE /detector/{DetectorId}",
      DeleteFilter: "DELETE /detector/{DetectorId}/filter/{FilterName}",
      DeleteInvitations: "POST /invitation/delete",
      DeleteIPSet: "DELETE /detector/{DetectorId}/ipset/{IpSetId}",
      DeleteMalwareProtectionPlan:
        "DELETE /malware-protection-plan/{MalwareProtectionPlanId}",
      DeleteMembers: "POST /detector/{DetectorId}/member/delete",
      DeletePublishingDestination:
        "DELETE /detector/{DetectorId}/publishingDestination/{DestinationId}",
      DeleteThreatIntelSet:
        "DELETE /detector/{DetectorId}/threatintelset/{ThreatIntelSetId}",
      DescribeMalwareScans: "POST /detector/{DetectorId}/malware-scans",
      DescribeOrganizationConfiguration: "GET /detector/{DetectorId}/admin",
      DescribePublishingDestination:
        "GET /detector/{DetectorId}/publishingDestination/{DestinationId}",
      DisableOrganizationAdminAccount: "POST /admin/disable",
      DisassociateFromAdministratorAccount:
        "POST /detector/{DetectorId}/administrator/disassociate",
      DisassociateFromMasterAccount:
        "POST /detector/{DetectorId}/master/disassociate",
      DisassociateMembers: "POST /detector/{DetectorId}/member/disassociate",
      EnableOrganizationAdminAccount: "POST /admin/enable",
      GetAdministratorAccount: "GET /detector/{DetectorId}/administrator",
      GetCoverageStatistics: "POST /detector/{DetectorId}/coverage/statistics",
      GetDetector: "GET /detector/{DetectorId}",
      GetFilter: "GET /detector/{DetectorId}/filter/{FilterName}",
      GetFindings: "POST /detector/{DetectorId}/findings/get",
      GetFindingsStatistics: "POST /detector/{DetectorId}/findings/statistics",
      GetInvitationsCount: "GET /invitation/count",
      GetIPSet: "GET /detector/{DetectorId}/ipset/{IpSetId}",
      GetMalwareProtectionPlan:
        "GET /malware-protection-plan/{MalwareProtectionPlanId}",
      GetMalwareScanSettings:
        "GET /detector/{DetectorId}/malware-scan-settings",
      GetMasterAccount: "GET /detector/{DetectorId}/master",
      GetMemberDetectors: "POST /detector/{DetectorId}/member/detector/get",
      GetMembers: "POST /detector/{DetectorId}/member/get",
      GetOrganizationStatistics: "GET /organization/statistics",
      GetRemainingFreeTrialDays:
        "POST /detector/{DetectorId}/freeTrial/daysRemaining",
      GetThreatIntelSet:
        "GET /detector/{DetectorId}/threatintelset/{ThreatIntelSetId}",
      GetUsageStatistics: "POST /detector/{DetectorId}/usage/statistics",
      InviteMembers: "POST /detector/{DetectorId}/member/invite",
      ListCoverage: "POST /detector/{DetectorId}/coverage",
      ListDetectors: "GET /detector",
      ListFilters: "GET /detector/{DetectorId}/filter",
      ListFindings: "POST /detector/{DetectorId}/findings",
      ListInvitations: "GET /invitation",
      ListIPSets: "GET /detector/{DetectorId}/ipset",
      ListMalwareProtectionPlans: "GET /malware-protection-plan",
      ListMembers: "GET /detector/{DetectorId}/member",
      ListOrganizationAdminAccounts: "GET /admin",
      ListPublishingDestinations:
        "GET /detector/{DetectorId}/publishingDestination",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      ListThreatIntelSets: "GET /detector/{DetectorId}/threatintelset",
      StartMalwareScan: "POST /malware-scan/start",
      StartMonitoringMembers: "POST /detector/{DetectorId}/member/start",
      StopMonitoringMembers: "POST /detector/{DetectorId}/member/stop",
      TagResource: "POST /tags/{ResourceArn}",
      UnarchiveFindings: "POST /detector/{DetectorId}/findings/unarchive",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateDetector: "POST /detector/{DetectorId}",
      UpdateFilter: "POST /detector/{DetectorId}/filter/{FilterName}",
      UpdateFindingsFeedback: "POST /detector/{DetectorId}/findings/feedback",
      UpdateIPSet: "POST /detector/{DetectorId}/ipset/{IpSetId}",
      UpdateMalwareProtectionPlan:
        "PATCH /malware-protection-plan/{MalwareProtectionPlanId}",
      UpdateMalwareScanSettings:
        "POST /detector/{DetectorId}/malware-scan-settings",
      UpdateMemberDetectors:
        "POST /detector/{DetectorId}/member/detector/update",
      UpdateOrganizationConfiguration: "POST /detector/{DetectorId}/admin",
      UpdatePublishingDestination:
        "POST /detector/{DetectorId}/publishingDestination/{DestinationId}",
      UpdateThreatIntelSet:
        "POST /detector/{DetectorId}/threatintelset/{ThreatIntelSetId}",
    },
  },
  health: {
    sdkId: "Health",
    version: "2016-08-04",
    arnNamespace: "health",
    cloudTrailEventSource: "health.amazonaws.com",
    endpointPrefix: "health",
    protocol: "awsJson1_1",
    targetPrefix: "AWSHealth_20160804",
  },
  healthlake: {
    sdkId: "HealthLake",
    version: "2017-07-01",
    arnNamespace: "healthlake",
    cloudTrailEventSource: "healthlake.amazonaws.com",
    endpointPrefix: "healthlake",
    protocol: "awsJson1_0",
    targetPrefix: "HealthLake",
  },
  iam: {
    sdkId: "IAM",
    version: "2010-05-08",
    arnNamespace: "iam",
    cloudTrailEventSource: "iam.amazonaws.com",
    endpointPrefix: "iam",
    protocol: "awsQuery",
    targetPrefix: "",
    globalEndpoint: "https://iam.amazonaws.com",
    signingRegion: "us-east-1",
  },
  identitystore: {
    sdkId: "identitystore",
    version: "2020-06-15",
    arnNamespace: "identitystore",
    cloudTrailEventSource: "identitystore.amazonaws.com",
    endpointPrefix: "identitystore",
    protocol: "awsJson1_1",
    targetPrefix: "AWSIdentityStore",
  },
  imagebuilder: {
    sdkId: "imagebuilder",
    version: "2019-12-02",
    arnNamespace: "imagebuilder",
    cloudTrailEventSource: "imagebuilder.amazonaws.com",
    endpointPrefix: "imagebuilder",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelImageCreation: "PUT /CancelImageCreation",
      CancelLifecycleExecution: "PUT /CancelLifecycleExecution",
      CreateComponent: "PUT /CreateComponent",
      CreateContainerRecipe: "PUT /CreateContainerRecipe",
      CreateDistributionConfiguration: "PUT /CreateDistributionConfiguration",
      CreateImage: "PUT /CreateImage",
      CreateImagePipeline: "PUT /CreateImagePipeline",
      CreateImageRecipe: "PUT /CreateImageRecipe",
      CreateInfrastructureConfiguration:
        "PUT /CreateInfrastructureConfiguration",
      CreateLifecyclePolicy: "PUT /CreateLifecyclePolicy",
      CreateWorkflow: "PUT /CreateWorkflow",
      DeleteComponent: "DELETE /DeleteComponent",
      DeleteContainerRecipe: "DELETE /DeleteContainerRecipe",
      DeleteDistributionConfiguration:
        "DELETE /DeleteDistributionConfiguration",
      DeleteImage: "DELETE /DeleteImage",
      DeleteImagePipeline: "DELETE /DeleteImagePipeline",
      DeleteImageRecipe: "DELETE /DeleteImageRecipe",
      DeleteInfrastructureConfiguration:
        "DELETE /DeleteInfrastructureConfiguration",
      DeleteLifecyclePolicy: "DELETE /DeleteLifecyclePolicy",
      DeleteWorkflow: "DELETE /DeleteWorkflow",
      GetComponent: "GET /GetComponent",
      GetComponentPolicy: "GET /GetComponentPolicy",
      GetContainerRecipe: "GET /GetContainerRecipe",
      GetContainerRecipePolicy: "GET /GetContainerRecipePolicy",
      GetDistributionConfiguration: "GET /GetDistributionConfiguration",
      GetImage: "GET /GetImage",
      GetImagePipeline: "GET /GetImagePipeline",
      GetImagePolicy: "GET /GetImagePolicy",
      GetImageRecipe: "GET /GetImageRecipe",
      GetImageRecipePolicy: "GET /GetImageRecipePolicy",
      GetInfrastructureConfiguration: "GET /GetInfrastructureConfiguration",
      GetLifecycleExecution: "GET /GetLifecycleExecution",
      GetLifecyclePolicy: "GET /GetLifecyclePolicy",
      GetMarketplaceResource: "POST /GetMarketplaceResource",
      GetWorkflow: "GET /GetWorkflow",
      GetWorkflowExecution: "GET /GetWorkflowExecution",
      GetWorkflowStepExecution: "GET /GetWorkflowStepExecution",
      ImportComponent: "PUT /ImportComponent",
      ImportDiskImage: "PUT /ImportDiskImage",
      ImportVmImage: "PUT /ImportVmImage",
      ListComponentBuildVersions: "POST /ListComponentBuildVersions",
      ListComponents: "POST /ListComponents",
      ListContainerRecipes: "POST /ListContainerRecipes",
      ListDistributionConfigurations: "POST /ListDistributionConfigurations",
      ListImageBuildVersions: "POST /ListImageBuildVersions",
      ListImagePackages: "POST /ListImagePackages",
      ListImagePipelineImages: "POST /ListImagePipelineImages",
      ListImagePipelines: "POST /ListImagePipelines",
      ListImageRecipes: "POST /ListImageRecipes",
      ListImages: "POST /ListImages",
      ListImageScanFindingAggregations:
        "POST /ListImageScanFindingAggregations",
      ListImageScanFindings: "POST /ListImageScanFindings",
      ListInfrastructureConfigurations:
        "POST /ListInfrastructureConfigurations",
      ListLifecycleExecutionResources: "POST /ListLifecycleExecutionResources",
      ListLifecycleExecutions: "POST /ListLifecycleExecutions",
      ListLifecyclePolicies: "POST /ListLifecyclePolicies",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListWaitingWorkflowSteps: "POST /ListWaitingWorkflowSteps",
      ListWorkflowBuildVersions: "POST /ListWorkflowBuildVersions",
      ListWorkflowExecutions: "POST /ListWorkflowExecutions",
      ListWorkflows: "POST /ListWorkflows",
      ListWorkflowStepExecutions: "POST /ListWorkflowStepExecutions",
      PutComponentPolicy: "PUT /PutComponentPolicy",
      PutContainerRecipePolicy: "PUT /PutContainerRecipePolicy",
      PutImagePolicy: "PUT /PutImagePolicy",
      PutImageRecipePolicy: "PUT /PutImageRecipePolicy",
      SendWorkflowStepAction: "PUT /SendWorkflowStepAction",
      StartImagePipelineExecution: "PUT /StartImagePipelineExecution",
      StartResourceStateUpdate: "PUT /StartResourceStateUpdate",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateDistributionConfiguration: "PUT /UpdateDistributionConfiguration",
      UpdateImagePipeline: "PUT /UpdateImagePipeline",
      UpdateInfrastructureConfiguration:
        "PUT /UpdateInfrastructureConfiguration",
      UpdateLifecyclePolicy: "PUT /UpdateLifecyclePolicy",
    },
  },
  inspector: {
    sdkId: "Inspector",
    version: "2016-02-16",
    arnNamespace: "inspector",
    cloudTrailEventSource: "inspector.amazonaws.com",
    endpointPrefix: "inspector",
    protocol: "awsJson1_1",
    targetPrefix: "InspectorService",
  },
  inspectorscan: {
    sdkId: "Inspector Scan",
    version: "2023-08-08",
    arnNamespace: "inspector-scan",
    cloudTrailEventSource: "inspector-scan.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ScanSbom: "POST /scan/sbom",
    },
  },
  inspector2: {
    sdkId: "Inspector2",
    version: "2020-06-08",
    arnNamespace: "inspector2",
    cloudTrailEventSource: "inspector2.amazon.aws",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateMember: "POST /members/associate",
      BatchAssociateCodeSecurityScanConfiguration:
        "POST /codesecurity/scan-configuration/batch/associate",
      BatchDisassociateCodeSecurityScanConfiguration:
        "POST /codesecurity/scan-configuration/batch/disassociate",
      BatchGetAccountStatus: "POST /status/batch/get",
      BatchGetCodeSnippet: "POST /codesnippet/batchget",
      BatchGetFindingDetails: "POST /findings/details/batch/get",
      BatchGetFreeTrialInfo: "POST /freetrialinfo/batchget",
      BatchGetMemberEc2DeepInspectionStatus:
        "POST /ec2deepinspectionstatus/member/batch/get",
      BatchUpdateMemberEc2DeepInspectionStatus:
        "POST /ec2deepinspectionstatus/member/batch/update",
      CancelFindingsReport: "POST /reporting/cancel",
      CancelSbomExport: "POST /sbomexport/cancel",
      CreateCisScanConfiguration: "POST /cis/scan-configuration/create",
      CreateCodeSecurityIntegration: "POST /codesecurity/integration/create",
      CreateCodeSecurityScanConfiguration:
        "POST /codesecurity/scan-configuration/create",
      CreateFilter: "POST /filters/create",
      CreateFindingsReport: "POST /reporting/create",
      CreateSbomExport: "POST /sbomexport/create",
      DeleteCisScanConfiguration: "POST /cis/scan-configuration/delete",
      DeleteCodeSecurityIntegration: "POST /codesecurity/integration/delete",
      DeleteCodeSecurityScanConfiguration:
        "POST /codesecurity/scan-configuration/delete",
      DeleteFilter: "POST /filters/delete",
      DescribeOrganizationConfiguration:
        "POST /organizationconfiguration/describe",
      Disable: "POST /disable",
      DisableDelegatedAdminAccount: "POST /delegatedadminaccounts/disable",
      DisassociateMember: "POST /members/disassociate",
      Enable: "POST /enable",
      EnableDelegatedAdminAccount: "POST /delegatedadminaccounts/enable",
      GetCisScanReport: "POST /cis/scan/report/get",
      GetCisScanResultDetails: "POST /cis/scan-result/details/get",
      GetClustersForImage: "POST /cluster/get",
      GetCodeSecurityIntegration: "POST /codesecurity/integration/get",
      GetCodeSecurityScan: "POST /codesecurity/scan/get",
      GetCodeSecurityScanConfiguration:
        "POST /codesecurity/scan-configuration/get",
      GetConfiguration: "POST /configuration/get",
      GetDelegatedAdminAccount: "POST /delegatedadminaccounts/get",
      GetEc2DeepInspectionConfiguration:
        "POST /ec2deepinspectionconfiguration/get",
      GetEncryptionKey: "GET /encryptionkey/get",
      GetFindingsReportStatus: "POST /reporting/status/get",
      GetMember: "POST /members/get",
      GetSbomExport: "POST /sbomexport/get",
      ListAccountPermissions: "POST /accountpermissions/list",
      ListCisScanConfigurations: "POST /cis/scan-configuration/list",
      ListCisScanResultsAggregatedByChecks: "POST /cis/scan-result/check/list",
      ListCisScanResultsAggregatedByTargetResource:
        "POST /cis/scan-result/resource/list",
      ListCisScans: "POST /cis/scan/list",
      ListCodeSecurityIntegrations: "POST /codesecurity/integration/list",
      ListCodeSecurityScanConfigurationAssociations:
        "POST /codesecurity/scan-configuration/associations/list",
      ListCodeSecurityScanConfigurations:
        "POST /codesecurity/scan-configuration/list",
      ListCoverage: "POST /coverage/list",
      ListCoverageStatistics: "POST /coverage/statistics/list",
      ListDelegatedAdminAccounts: "POST /delegatedadminaccounts/list",
      ListFilters: "POST /filters/list",
      ListFindingAggregations: "POST /findings/aggregation/list",
      ListFindings: "POST /findings/list",
      ListMembers: "POST /members/list",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListUsageTotals: "POST /usage/list",
      ResetEncryptionKey: "PUT /encryptionkey/reset",
      SearchVulnerabilities: "POST /vulnerabilities/search",
      SendCisSessionHealth: "PUT /cissession/health/send",
      SendCisSessionTelemetry: "PUT /cissession/telemetry/send",
      StartCisSession: "PUT /cissession/start",
      StartCodeSecurityScan: "POST /codesecurity/scan/start",
      StopCisSession: "PUT /cissession/stop",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateCisScanConfiguration: "POST /cis/scan-configuration/update",
      UpdateCodeSecurityIntegration: "POST /codesecurity/integration/update",
      UpdateCodeSecurityScanConfiguration:
        "POST /codesecurity/scan-configuration/update",
      UpdateConfiguration: "POST /configuration/update",
      UpdateEc2DeepInspectionConfiguration:
        "POST /ec2deepinspectionconfiguration/update",
      UpdateEncryptionKey: "PUT /encryptionkey/update",
      UpdateFilter: "POST /filters/update",
      UpdateOrganizationConfiguration: "POST /organizationconfiguration/update",
      UpdateOrgEc2DeepInspectionConfiguration:
        "POST /ec2deepinspectionconfiguration/org/update",
    },
  },
  internetmonitor: {
    sdkId: "InternetMonitor",
    version: "2021-06-03",
    arnNamespace: "internetmonitor",
    cloudTrailEventSource: "internetmonitor.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      CreateMonitor: "POST /v20210603/Monitors",
      DeleteMonitor: "DELETE /v20210603/Monitors/{MonitorName}",
      GetHealthEvent:
        "GET /v20210603/Monitors/{MonitorName}/HealthEvents/{EventId}",
      GetInternetEvent: "GET /v20210603/InternetEvents/{EventId}",
      GetMonitor: "GET /v20210603/Monitors/{MonitorName}",
      GetQueryResults:
        "GET /v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Results",
      GetQueryStatus:
        "GET /v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Status",
      ListHealthEvents: "GET /v20210603/Monitors/{MonitorName}/HealthEvents",
      ListInternetEvents: "GET /v20210603/InternetEvents",
      ListMonitors: "GET /v20210603/Monitors",
      StartQuery: "POST /v20210603/Monitors/{MonitorName}/Queries",
      StopQuery: "DELETE /v20210603/Monitors/{MonitorName}/Queries/{QueryId}",
      UpdateMonitor: "PATCH /v20210603/Monitors/{MonitorName}",
    },
  },
  invoicing: {
    sdkId: "Invoicing",
    version: "2024-12-01",
    arnNamespace: "invoicing",
    cloudTrailEventSource: "invoicing.amazonaws.com",
    endpointPrefix: "invoicing",
    protocol: "awsJson1_0",
    targetPrefix: "Invoicing",
  },
  iot: {
    sdkId: "IoT",
    version: "2015-05-28",
    arnNamespace: "iot",
    cloudTrailEventSource: "iot.amazonaws.com",
    endpointPrefix: "iot",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptCertificateTransfer:
        "PATCH /accept-certificate-transfer/{certificateId}",
      AddThingToBillingGroup: "PUT /billing-groups/addThingToBillingGroup",
      AddThingToThingGroup: "PUT /thing-groups/addThingToThingGroup",
      AssociateSbomWithPackageVersion:
        "PUT /packages/{packageName}/versions/{versionName}/sbom",
      AssociateTargetsWithJob: "POST /jobs/{jobId}/targets",
      AttachPolicy: "PUT /target-policies/{policyName}",
      AttachPrincipalPolicy: "PUT /principal-policies/{policyName}",
      AttachSecurityProfile:
        "PUT /security-profiles/{securityProfileName}/targets",
      AttachThingPrincipal: "PUT /things/{thingName}/principals",
      CancelAuditMitigationActionsTask:
        "PUT /audit/mitigationactions/tasks/{taskId}/cancel",
      CancelAuditTask: "PUT /audit/tasks/{taskId}/cancel",
      CancelCertificateTransfer:
        "PATCH /cancel-certificate-transfer/{certificateId}",
      CancelDetectMitigationActionsTask:
        "PUT /detect/mitigationactions/tasks/{taskId}/cancel",
      CancelJob: "PUT /jobs/{jobId}/cancel",
      CancelJobExecution: "PUT /things/{thingName}/jobs/{jobId}/cancel",
      ClearDefaultAuthorizer: "DELETE /default-authorizer",
      ConfirmTopicRuleDestination:
        "GET /confirmdestination/{confirmationToken+}",
      CreateAuditSuppression: "POST /audit/suppressions/create",
      CreateAuthorizer: "POST /authorizer/{authorizerName}",
      CreateBillingGroup: "POST /billing-groups/{billingGroupName}",
      CreateCertificateFromCsr: "POST /certificates",
      CreateCertificateProvider:
        "POST /certificate-providers/{certificateProviderName}",
      CreateCommand: "PUT /commands/{commandId}",
      CreateCustomMetric: "POST /custom-metric/{metricName}",
      CreateDimension: "POST /dimensions/{name}",
      CreateDomainConfiguration:
        "POST /domainConfigurations/{domainConfigurationName}",
      CreateDynamicThingGroup: "POST /dynamic-thing-groups/{thingGroupName}",
      CreateFleetMetric: "PUT /fleet-metric/{metricName}",
      CreateJob: "PUT /jobs/{jobId}",
      CreateJobTemplate: "PUT /job-templates/{jobTemplateId}",
      CreateKeysAndCertificate: "POST /keys-and-certificate",
      CreateMitigationAction: "POST /mitigationactions/actions/{actionName}",
      CreateOTAUpdate: "POST /otaUpdates/{otaUpdateId}",
      CreatePackage: "PUT /packages/{packageName}",
      CreatePackageVersion:
        "PUT /packages/{packageName}/versions/{versionName}",
      CreatePolicy: "POST /policies/{policyName}",
      CreatePolicyVersion: "POST /policies/{policyName}/version",
      CreateProvisioningClaim:
        "POST /provisioning-templates/{templateName}/provisioning-claim",
      CreateProvisioningTemplate: "POST /provisioning-templates",
      CreateProvisioningTemplateVersion:
        "POST /provisioning-templates/{templateName}/versions",
      CreateRoleAlias: "POST /role-aliases/{roleAlias}",
      CreateScheduledAudit: "POST /audit/scheduledaudits/{scheduledAuditName}",
      CreateSecurityProfile: "POST /security-profiles/{securityProfileName}",
      CreateStream: "POST /streams/{streamId}",
      CreateThing: "POST /things/{thingName}",
      CreateThingGroup: "POST /thing-groups/{thingGroupName}",
      CreateThingType: "POST /thing-types/{thingTypeName}",
      CreateTopicRule: "POST /rules/{ruleName}",
      CreateTopicRuleDestination: "POST /destinations",
      DeleteAccountAuditConfiguration: "DELETE /audit/configuration",
      DeleteAuditSuppression: "POST /audit/suppressions/delete",
      DeleteAuthorizer: "DELETE /authorizer/{authorizerName}",
      DeleteBillingGroup: "DELETE /billing-groups/{billingGroupName}",
      DeleteCACertificate: "DELETE /cacertificate/{certificateId}",
      DeleteCertificate: "DELETE /certificates/{certificateId}",
      DeleteCertificateProvider:
        "DELETE /certificate-providers/{certificateProviderName}",
      DeleteCommand: {
        http: "DELETE /commands/{commandId}",
        traits: {
          statusCode: "httpResponseCode",
        },
      },
      DeleteCommandExecution: "DELETE /command-executions/{executionId}",
      DeleteCustomMetric: "DELETE /custom-metric/{metricName}",
      DeleteDimension: "DELETE /dimensions/{name}",
      DeleteDomainConfiguration:
        "DELETE /domainConfigurations/{domainConfigurationName}",
      DeleteDynamicThingGroup: "DELETE /dynamic-thing-groups/{thingGroupName}",
      DeleteFleetMetric: "DELETE /fleet-metric/{metricName}",
      DeleteJob: "DELETE /jobs/{jobId}",
      DeleteJobExecution:
        "DELETE /things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}",
      DeleteJobTemplate: "DELETE /job-templates/{jobTemplateId}",
      DeleteMitigationAction: "DELETE /mitigationactions/actions/{actionName}",
      DeleteOTAUpdate: "DELETE /otaUpdates/{otaUpdateId}",
      DeletePackage: "DELETE /packages/{packageName}",
      DeletePackageVersion:
        "DELETE /packages/{packageName}/versions/{versionName}",
      DeletePolicy: "DELETE /policies/{policyName}",
      DeletePolicyVersion:
        "DELETE /policies/{policyName}/version/{policyVersionId}",
      DeleteProvisioningTemplate:
        "DELETE /provisioning-templates/{templateName}",
      DeleteProvisioningTemplateVersion:
        "DELETE /provisioning-templates/{templateName}/versions/{versionId}",
      DeleteRegistrationCode: "DELETE /registrationcode",
      DeleteRoleAlias: "DELETE /role-aliases/{roleAlias}",
      DeleteScheduledAudit:
        "DELETE /audit/scheduledaudits/{scheduledAuditName}",
      DeleteSecurityProfile: "DELETE /security-profiles/{securityProfileName}",
      DeleteStream: "DELETE /streams/{streamId}",
      DeleteThing: "DELETE /things/{thingName}",
      DeleteThingGroup: "DELETE /thing-groups/{thingGroupName}",
      DeleteThingType: "DELETE /thing-types/{thingTypeName}",
      DeleteTopicRule: "DELETE /rules/{ruleName}",
      DeleteTopicRuleDestination: "DELETE /destinations/{arn+}",
      DeleteV2LoggingLevel: "DELETE /v2LoggingLevel",
      DeprecateThingType: "POST /thing-types/{thingTypeName}/deprecate",
      DescribeAccountAuditConfiguration: "GET /audit/configuration",
      DescribeAuditFinding: "GET /audit/findings/{findingId}",
      DescribeAuditMitigationActionsTask:
        "GET /audit/mitigationactions/tasks/{taskId}",
      DescribeAuditSuppression: "POST /audit/suppressions/describe",
      DescribeAuditTask: "GET /audit/tasks/{taskId}",
      DescribeAuthorizer: "GET /authorizer/{authorizerName}",
      DescribeBillingGroup: "GET /billing-groups/{billingGroupName}",
      DescribeCACertificate: "GET /cacertificate/{certificateId}",
      DescribeCertificate: "GET /certificates/{certificateId}",
      DescribeCertificateProvider:
        "GET /certificate-providers/{certificateProviderName}",
      DescribeCustomMetric: "GET /custom-metric/{metricName}",
      DescribeDefaultAuthorizer: "GET /default-authorizer",
      DescribeDetectMitigationActionsTask:
        "GET /detect/mitigationactions/tasks/{taskId}",
      DescribeDimension: "GET /dimensions/{name}",
      DescribeDomainConfiguration:
        "GET /domainConfigurations/{domainConfigurationName}",
      DescribeEncryptionConfiguration: "GET /encryption-configuration",
      DescribeEndpoint: "GET /endpoint",
      DescribeEventConfigurations: "GET /event-configurations",
      DescribeFleetMetric: "GET /fleet-metric/{metricName}",
      DescribeIndex: "GET /indices/{indexName}",
      DescribeJob: "GET /jobs/{jobId}",
      DescribeJobExecution: "GET /things/{thingName}/jobs/{jobId}",
      DescribeJobTemplate: "GET /job-templates/{jobTemplateId}",
      DescribeManagedJobTemplate: "GET /managed-job-templates/{templateName}",
      DescribeMitigationAction: "GET /mitigationactions/actions/{actionName}",
      DescribeProvisioningTemplate:
        "GET /provisioning-templates/{templateName}",
      DescribeProvisioningTemplateVersion:
        "GET /provisioning-templates/{templateName}/versions/{versionId}",
      DescribeRoleAlias: "GET /role-aliases/{roleAlias}",
      DescribeScheduledAudit: "GET /audit/scheduledaudits/{scheduledAuditName}",
      DescribeSecurityProfile: "GET /security-profiles/{securityProfileName}",
      DescribeStream: "GET /streams/{streamId}",
      DescribeThing: "GET /things/{thingName}",
      DescribeThingGroup: "GET /thing-groups/{thingGroupName}",
      DescribeThingRegistrationTask: "GET /thing-registration-tasks/{taskId}",
      DescribeThingType: "GET /thing-types/{thingTypeName}",
      DetachPolicy: "POST /target-policies/{policyName}",
      DetachPrincipalPolicy: "DELETE /principal-policies/{policyName}",
      DetachSecurityProfile:
        "DELETE /security-profiles/{securityProfileName}/targets",
      DetachThingPrincipal: "DELETE /things/{thingName}/principals",
      DisableTopicRule: "POST /rules/{ruleName}/disable",
      DisassociateSbomFromPackageVersion:
        "DELETE /packages/{packageName}/versions/{versionName}/sbom",
      EnableTopicRule: "POST /rules/{ruleName}/enable",
      GetBehaviorModelTrainingSummaries:
        "GET /behavior-model-training/summaries",
      GetBucketsAggregation: "POST /indices/buckets",
      GetCardinality: "POST /indices/cardinality",
      GetCommand: "GET /commands/{commandId}",
      GetCommandExecution: "GET /command-executions/{executionId}",
      GetEffectivePolicies: "POST /effective-policies",
      GetIndexingConfiguration: "GET /indexing/config",
      GetJobDocument: "GET /jobs/{jobId}/job-document",
      GetLoggingOptions: "GET /loggingOptions",
      GetOTAUpdate: "GET /otaUpdates/{otaUpdateId}",
      GetPackage: "GET /packages/{packageName}",
      GetPackageConfiguration: "GET /package-configuration",
      GetPackageVersion: "GET /packages/{packageName}/versions/{versionName}",
      GetPercentiles: "POST /indices/percentiles",
      GetPolicy: "GET /policies/{policyName}",
      GetPolicyVersion: "GET /policies/{policyName}/version/{policyVersionId}",
      GetRegistrationCode: "GET /registrationcode",
      GetStatistics: "POST /indices/statistics",
      GetThingConnectivityData: "POST /things/{thingName}/connectivity-data",
      GetTopicRule: "GET /rules/{ruleName}",
      GetTopicRuleDestination: "GET /destinations/{arn+}",
      GetV2LoggingOptions: "GET /v2LoggingOptions",
      ListActiveViolations: "GET /active-violations",
      ListAttachedPolicies: "POST /attached-policies/{target}",
      ListAuditFindings: "POST /audit/findings",
      ListAuditMitigationActionsExecutions:
        "GET /audit/mitigationactions/executions",
      ListAuditMitigationActionsTasks: "GET /audit/mitigationactions/tasks",
      ListAuditSuppressions: "POST /audit/suppressions/list",
      ListAuditTasks: "GET /audit/tasks",
      ListAuthorizers: "GET /authorizers",
      ListBillingGroups: "GET /billing-groups",
      ListCACertificates: "GET /cacertificates",
      ListCertificateProviders: "GET /certificate-providers",
      ListCertificates: "GET /certificates",
      ListCertificatesByCA: "GET /certificates-by-ca/{caCertificateId}",
      ListCommandExecutions: "POST /command-executions",
      ListCommands: "GET /commands",
      ListCustomMetrics: "GET /custom-metrics",
      ListDetectMitigationActionsExecutions:
        "GET /detect/mitigationactions/executions",
      ListDetectMitigationActionsTasks: "GET /detect/mitigationactions/tasks",
      ListDimensions: "GET /dimensions",
      ListDomainConfigurations: "GET /domainConfigurations",
      ListFleetMetrics: "GET /fleet-metrics",
      ListIndices: "GET /indices",
      ListJobExecutionsForJob: "GET /jobs/{jobId}/things",
      ListJobExecutionsForThing: "GET /things/{thingName}/jobs",
      ListJobs: "GET /jobs",
      ListJobTemplates: "GET /job-templates",
      ListManagedJobTemplates: "GET /managed-job-templates",
      ListMetricValues: "GET /metric-values",
      ListMitigationActions: "GET /mitigationactions/actions",
      ListOTAUpdates: "GET /otaUpdates",
      ListOutgoingCertificates: "GET /certificates-out-going",
      ListPackages: "GET /packages",
      ListPackageVersions: "GET /packages/{packageName}/versions",
      ListPolicies: "GET /policies",
      ListPolicyPrincipals: "GET /policy-principals",
      ListPolicyVersions: "GET /policies/{policyName}/version",
      ListPrincipalPolicies: "GET /principal-policies",
      ListPrincipalThings: "GET /principals/things",
      ListPrincipalThingsV2: "GET /principals/things-v2",
      ListProvisioningTemplates: "GET /provisioning-templates",
      ListProvisioningTemplateVersions:
        "GET /provisioning-templates/{templateName}/versions",
      ListRelatedResourcesForAuditFinding: "GET /audit/relatedResources",
      ListRoleAliases: "GET /role-aliases",
      ListSbomValidationResults:
        "GET /packages/{packageName}/versions/{versionName}/sbom-validation-results",
      ListScheduledAudits: "GET /audit/scheduledaudits",
      ListSecurityProfiles: "GET /security-profiles",
      ListSecurityProfilesForTarget: "GET /security-profiles-for-target",
      ListStreams: "GET /streams",
      ListTagsForResource: "GET /tags",
      ListTargetsForPolicy: "POST /policy-targets/{policyName}",
      ListTargetsForSecurityProfile:
        "GET /security-profiles/{securityProfileName}/targets",
      ListThingGroups: "GET /thing-groups",
      ListThingGroupsForThing: "GET /things/{thingName}/thing-groups",
      ListThingPrincipals: "GET /things/{thingName}/principals",
      ListThingPrincipalsV2: "GET /things/{thingName}/principals-v2",
      ListThingRegistrationTaskReports:
        "GET /thing-registration-tasks/{taskId}/reports",
      ListThingRegistrationTasks: "GET /thing-registration-tasks",
      ListThings: "GET /things",
      ListThingsInBillingGroup: "GET /billing-groups/{billingGroupName}/things",
      ListThingsInThingGroup: "GET /thing-groups/{thingGroupName}/things",
      ListThingTypes: "GET /thing-types",
      ListTopicRuleDestinations: "GET /destinations",
      ListTopicRules: "GET /rules",
      ListV2LoggingLevels: "GET /v2LoggingLevel",
      ListViolationEvents: "GET /violation-events",
      PutVerificationStateOnViolation:
        "POST /violations/verification-state/{violationId}",
      RegisterCACertificate: "POST /cacertificate",
      RegisterCertificate: "POST /certificate/register",
      RegisterCertificateWithoutCA: "POST /certificate/register-no-ca",
      RegisterThing: "POST /things",
      RejectCertificateTransfer:
        "PATCH /reject-certificate-transfer/{certificateId}",
      RemoveThingFromBillingGroup:
        "PUT /billing-groups/removeThingFromBillingGroup",
      RemoveThingFromThingGroup: "PUT /thing-groups/removeThingFromThingGroup",
      ReplaceTopicRule: "PATCH /rules/{ruleName}",
      SearchIndex: "POST /indices/search",
      SetDefaultAuthorizer: "POST /default-authorizer",
      SetDefaultPolicyVersion:
        "PATCH /policies/{policyName}/version/{policyVersionId}",
      SetLoggingOptions: "POST /loggingOptions",
      SetV2LoggingLevel: "POST /v2LoggingLevel",
      SetV2LoggingOptions: "POST /v2LoggingOptions",
      StartAuditMitigationActionsTask:
        "POST /audit/mitigationactions/tasks/{taskId}",
      StartDetectMitigationActionsTask:
        "PUT /detect/mitigationactions/tasks/{taskId}",
      StartOnDemandAuditTask: "POST /audit/tasks",
      StartThingRegistrationTask: "POST /thing-registration-tasks",
      StopThingRegistrationTask:
        "PUT /thing-registration-tasks/{taskId}/cancel",
      TagResource: "POST /tags",
      TestAuthorization: "POST /test-authorization",
      TestInvokeAuthorizer: "POST /authorizer/{authorizerName}/test",
      TransferCertificate: "PATCH /transfer-certificate/{certificateId}",
      UntagResource: "POST /untag",
      UpdateAccountAuditConfiguration: "PATCH /audit/configuration",
      UpdateAuditSuppression: "PATCH /audit/suppressions/update",
      UpdateAuthorizer: "PUT /authorizer/{authorizerName}",
      UpdateBillingGroup: "PATCH /billing-groups/{billingGroupName}",
      UpdateCACertificate: "PUT /cacertificate/{certificateId}",
      UpdateCertificate: "PUT /certificates/{certificateId}",
      UpdateCertificateProvider:
        "PUT /certificate-providers/{certificateProviderName}",
      UpdateCommand: "PATCH /commands/{commandId}",
      UpdateCustomMetric: "PATCH /custom-metric/{metricName}",
      UpdateDimension: "PATCH /dimensions/{name}",
      UpdateDomainConfiguration:
        "PUT /domainConfigurations/{domainConfigurationName}",
      UpdateDynamicThingGroup: "PATCH /dynamic-thing-groups/{thingGroupName}",
      UpdateEncryptionConfiguration: "PATCH /encryption-configuration",
      UpdateEventConfigurations: "PATCH /event-configurations",
      UpdateFleetMetric: "PATCH /fleet-metric/{metricName}",
      UpdateIndexingConfiguration: "POST /indexing/config",
      UpdateJob: "PATCH /jobs/{jobId}",
      UpdateMitigationAction: "PATCH /mitigationactions/actions/{actionName}",
      UpdatePackage: "PATCH /packages/{packageName}",
      UpdatePackageConfiguration: "PATCH /package-configuration",
      UpdatePackageVersion:
        "PATCH /packages/{packageName}/versions/{versionName}",
      UpdateProvisioningTemplate:
        "PATCH /provisioning-templates/{templateName}",
      UpdateRoleAlias: "PUT /role-aliases/{roleAlias}",
      UpdateScheduledAudit: "PATCH /audit/scheduledaudits/{scheduledAuditName}",
      UpdateSecurityProfile: "PATCH /security-profiles/{securityProfileName}",
      UpdateStream: "PUT /streams/{streamId}",
      UpdateThing: "PATCH /things/{thingName}",
      UpdateThingGroup: "PATCH /thing-groups/{thingGroupName}",
      UpdateThingGroupsForThing: "PUT /thing-groups/updateThingGroupsForThing",
      UpdateThingType: "PATCH /thing-types/{thingTypeName}",
      UpdateTopicRuleDestination: "PATCH /destinations",
      ValidateSecurityProfileBehaviors:
        "POST /security-profile-behaviors/validate",
    },
  },
  iotdataplane: {
    sdkId: "IoT Data Plane",
    version: "2015-05-28",
    arnNamespace: "iotdata",
    cloudTrailEventSource: "iotdataplane.amazonaws.com",
    endpointPrefix: "data-ats.iot",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteThingShadow: {
        http: "DELETE /things/{thingName}/shadow",
        traits: {
          payload: "httpPayload",
        },
      },
      GetRetainedMessage: "GET /retainedMessage/{topic}",
      GetThingShadow: {
        http: "GET /things/{thingName}/shadow",
        traits: {
          payload: "httpPayload",
        },
      },
      ListNamedShadowsForThing:
        "GET /api/things/shadow/ListNamedShadowsForThing/{thingName}",
      ListRetainedMessages: "GET /retainedMessage",
      Publish: "POST /topics/{topic}",
      UpdateThingShadow: {
        http: "POST /things/{thingName}/shadow",
        traits: {
          payload: "httpPayload",
        },
      },
    },
  },
  iotevents: {
    sdkId: "IoT Events",
    version: "2018-07-27",
    arnNamespace: "iotevents",
    cloudTrailEventSource: "iotevents.amazonaws.com",
    endpointPrefix: "iotevents",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateAlarmModel: "POST /alarm-models",
      CreateDetectorModel: "POST /detector-models",
      CreateInput: "POST /inputs",
      DeleteAlarmModel: "DELETE /alarm-models/{alarmModelName}",
      DeleteDetectorModel: "DELETE /detector-models/{detectorModelName}",
      DeleteInput: "DELETE /inputs/{inputName}",
      DescribeAlarmModel: "GET /alarm-models/{alarmModelName}",
      DescribeDetectorModel: "GET /detector-models/{detectorModelName}",
      DescribeDetectorModelAnalysis:
        "GET /analysis/detector-models/{analysisId}",
      DescribeInput: "GET /inputs/{inputName}",
      DescribeLoggingOptions: "GET /logging",
      GetDetectorModelAnalysisResults:
        "GET /analysis/detector-models/{analysisId}/results",
      ListAlarmModels: "GET /alarm-models",
      ListAlarmModelVersions: "GET /alarm-models/{alarmModelName}/versions",
      ListDetectorModels: "GET /detector-models",
      ListDetectorModelVersions:
        "GET /detector-models/{detectorModelName}/versions",
      ListInputRoutings: "POST /input-routings",
      ListInputs: "GET /inputs",
      ListTagsForResource: "GET /tags",
      PutLoggingOptions: "PUT /logging",
      StartDetectorModelAnalysis: "POST /analysis/detector-models",
      TagResource: "POST /tags",
      UntagResource: "DELETE /tags",
      UpdateAlarmModel: "POST /alarm-models/{alarmModelName}",
      UpdateDetectorModel: "POST /detector-models/{detectorModelName}",
      UpdateInput: "PUT /inputs/{inputName}",
    },
  },
  ioteventsdata: {
    sdkId: "IoT Events Data",
    version: "2018-10-23",
    arnNamespace: "ioteventsdata",
    cloudTrailEventSource: "ioteventsdata.amazonaws.com",
    endpointPrefix: "data.iotevents",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchAcknowledgeAlarm: "POST /alarms/acknowledge",
      BatchDeleteDetector: "POST /detectors/delete",
      BatchDisableAlarm: "POST /alarms/disable",
      BatchEnableAlarm: "POST /alarms/enable",
      BatchPutMessage: "POST /inputs/messages",
      BatchResetAlarm: "POST /alarms/reset",
      BatchSnoozeAlarm: "POST /alarms/snooze",
      BatchUpdateDetector: "POST /detectors",
      DescribeAlarm: "GET /alarms/{alarmModelName}/keyValues",
      DescribeDetector: "GET /detectors/{detectorModelName}/keyValues",
      ListAlarms: "GET /alarms/{alarmModelName}",
      ListDetectors: "GET /detectors/{detectorModelName}",
    },
  },
  iotjobsdataplane: {
    sdkId: "IoT Jobs Data Plane",
    version: "2017-09-29",
    arnNamespace: "iot-jobs-data",
    cloudTrailEventSource: "iotjobsdataplane.amazonaws.com",
    endpointPrefix: "data.jobs.iot",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DescribeJobExecution: "GET /things/{thingName}/jobs/{jobId}",
      GetPendingJobExecutions: "GET /things/{thingName}/jobs",
      StartCommandExecution: "POST /command-executions",
      StartNextPendingJobExecution: "PUT /things/{thingName}/jobs/$next",
      UpdateJobExecution: "POST /things/{thingName}/jobs/{jobId}",
    },
  },
  iotmanagedintegrations: {
    sdkId: "IoT Managed Integrations",
    version: "2025-03-03",
    arnNamespace: "iotmanagedintegrations",
    cloudTrailEventSource: "iotmanagedintegrations.amazonaws.com",
    endpointPrefix: "api.iotmanagedintegrations",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetCustomEndpoint: "GET /custom-endpoint",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      RegisterCustomEndpoint: "POST /custom-endpoint",
      SendConnectorEvent: "POST /connector-event/{ConnectorId}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      CreateAccountAssociation: "POST /account-associations",
      CreateCloudConnector: "POST /cloud-connectors",
      CreateConnectorDestination: "POST /connector-destinations",
      CreateCredentialLocker: "POST /credential-lockers",
      CreateDestination: "POST /destinations",
      CreateEventLogConfiguration: "POST /event-log-configurations",
      CreateManagedThing: "POST /managed-things",
      CreateNotificationConfiguration: "POST /notification-configurations",
      CreateOtaTask: "POST /ota-tasks",
      CreateOtaTaskConfiguration: "POST /ota-task-configurations",
      CreateProvisioningProfile: "POST /provisioning-profiles",
      DeleteAccountAssociation:
        "DELETE /account-associations/{AccountAssociationId}",
      DeleteCloudConnector: "DELETE /cloud-connectors/{Identifier}",
      DeleteConnectorDestination: "DELETE /connector-destinations/{Identifier}",
      DeleteCredentialLocker: "DELETE /credential-lockers/{Identifier}",
      DeleteDestination: "DELETE /destinations/{Name}",
      DeleteEventLogConfiguration: "DELETE /event-log-configurations/{Id}",
      DeleteManagedThing: "DELETE /managed-things/{Identifier}",
      DeleteNotificationConfiguration:
        "DELETE /notification-configurations/{EventType}",
      DeleteOtaTask: "DELETE /ota-tasks/{Identifier}",
      DeleteOtaTaskConfiguration:
        "DELETE /ota-task-configurations/{Identifier}",
      DeleteProvisioningProfile: "DELETE /provisioning-profiles/{Identifier}",
      DeregisterAccountAssociation:
        "PUT /managed-thing-associations/deregister",
      GetAccountAssociation: "GET /account-associations/{AccountAssociationId}",
      GetCloudConnector: "GET /cloud-connectors/{Identifier}",
      GetConnectorDestination: "GET /connector-destinations/{Identifier}",
      GetCredentialLocker: "GET /credential-lockers/{Identifier}",
      GetDefaultEncryptionConfiguration:
        "GET /configuration/account/encryption",
      GetDestination: "GET /destinations/{Name}",
      GetDeviceDiscovery: "GET /device-discoveries/{Identifier}",
      GetEventLogConfiguration: "GET /event-log-configurations/{Id}",
      GetHubConfiguration: "GET /hub-configuration",
      GetManagedThing: "GET /managed-things/{Identifier}",
      GetManagedThingCapabilities:
        "GET /managed-things-capabilities/{Identifier}",
      GetManagedThingConnectivityData:
        "POST /managed-things-connectivity-data/{Identifier}",
      GetManagedThingMetaData: "GET /managed-things-metadata/{Identifier}",
      GetManagedThingState: "GET /managed-thing-states/{ManagedThingId}",
      GetNotificationConfiguration:
        "GET /notification-configurations/{EventType}",
      GetOtaTask: "GET /ota-tasks/{Identifier}",
      GetOtaTaskConfiguration: "GET /ota-task-configurations/{Identifier}",
      GetProvisioningProfile: "GET /provisioning-profiles/{Identifier}",
      GetRuntimeLogConfiguration:
        "GET /runtime-log-configurations/{ManagedThingId}",
      GetSchemaVersion: "GET /schema-versions/{Type}/{SchemaVersionedId}",
      ListAccountAssociations: "GET /account-associations",
      ListCloudConnectors: "GET /cloud-connectors",
      ListConnectorDestinations: "GET /connector-destinations",
      ListCredentialLockers: "GET /credential-lockers",
      ListDestinations: "GET /destinations",
      ListDeviceDiscoveries: "GET /device-discoveries",
      ListDiscoveredDevices: "GET /device-discoveries/{Identifier}/devices",
      ListEventLogConfigurations: "GET /event-log-configurations",
      ListManagedThingAccountAssociations: "GET /managed-thing-associations",
      ListManagedThingSchemas: "GET /managed-thing-schemas/{Identifier}",
      ListManagedThings: "GET /managed-things",
      ListNotificationConfigurations: "GET /notification-configurations",
      ListOtaTaskConfigurations: "GET /ota-task-configurations",
      ListOtaTaskExecutions: "GET /ota-tasks/{Identifier}/devices",
      ListOtaTasks: "GET /ota-tasks",
      ListProvisioningProfiles: "GET /provisioning-profiles",
      ListSchemaVersions: "GET /schema-versions/{Type}",
      PutDefaultEncryptionConfiguration:
        "POST /configuration/account/encryption",
      PutHubConfiguration: "PUT /hub-configuration",
      PutRuntimeLogConfiguration:
        "PUT /runtime-log-configurations/{ManagedThingId}",
      RegisterAccountAssociation: "PUT /managed-thing-associations/register",
      ResetRuntimeLogConfiguration:
        "DELETE /runtime-log-configurations/{ManagedThingId}",
      SendManagedThingCommand: "POST /managed-things-command/{ManagedThingId}",
      StartAccountAssociationRefresh:
        "POST /account-associations/{AccountAssociationId}/refresh",
      StartDeviceDiscovery: "POST /device-discoveries",
      UpdateAccountAssociation:
        "PUT /account-associations/{AccountAssociationId}",
      UpdateCloudConnector: "PUT /cloud-connectors/{Identifier}",
      UpdateConnectorDestination: "PUT /connector-destinations/{Identifier}",
      UpdateDestination: "PUT /destinations/{Name}",
      UpdateEventLogConfiguration: "PATCH /event-log-configurations/{Id}",
      UpdateManagedThing: "PUT /managed-things/{Identifier}",
      UpdateNotificationConfiguration:
        "PUT /notification-configurations/{EventType}",
      UpdateOtaTask: "PUT /ota-tasks/{Identifier}",
    },
  },
  iotwireless: {
    sdkId: "IoT Wireless",
    version: "2020-11-22",
    arnNamespace: "iotwireless",
    cloudTrailEventSource: "iotwireless.amazonaws.com",
    endpointPrefix: "api.iotwireless",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateAwsAccountWithPartnerAccount: "POST /partner-accounts",
      AssociateMulticastGroupWithFuotaTask:
        "PUT /fuota-tasks/{Id}/multicast-group",
      AssociateWirelessDeviceWithFuotaTask:
        "PUT /fuota-tasks/{Id}/wireless-device",
      AssociateWirelessDeviceWithMulticastGroup:
        "PUT /multicast-groups/{Id}/wireless-device",
      AssociateWirelessDeviceWithThing: "PUT /wireless-devices/{Id}/thing",
      AssociateWirelessGatewayWithCertificate:
        "PUT /wireless-gateways/{Id}/certificate",
      AssociateWirelessGatewayWithThing: "PUT /wireless-gateways/{Id}/thing",
      CancelMulticastGroupSession: "DELETE /multicast-groups/{Id}/session",
      CreateDestination: "POST /destinations",
      CreateDeviceProfile: "POST /device-profiles",
      CreateFuotaTask: "POST /fuota-tasks",
      CreateMulticastGroup: "POST /multicast-groups",
      CreateNetworkAnalyzerConfiguration:
        "POST /network-analyzer-configurations",
      CreateServiceProfile: "POST /service-profiles",
      CreateWirelessDevice: "POST /wireless-devices",
      CreateWirelessGateway: "POST /wireless-gateways",
      CreateWirelessGatewayTask: "POST /wireless-gateways/{Id}/tasks",
      CreateWirelessGatewayTaskDefinition:
        "POST /wireless-gateway-task-definitions",
      DeleteDestination: "DELETE /destinations/{Name}",
      DeleteDeviceProfile: "DELETE /device-profiles/{Id}",
      DeleteFuotaTask: "DELETE /fuota-tasks/{Id}",
      DeleteMulticastGroup: "DELETE /multicast-groups/{Id}",
      DeleteNetworkAnalyzerConfiguration:
        "DELETE /network-analyzer-configurations/{ConfigurationName}",
      DeleteQueuedMessages: "DELETE /wireless-devices/{Id}/data",
      DeleteServiceProfile: "DELETE /service-profiles/{Id}",
      DeleteWirelessDevice: "DELETE /wireless-devices/{Id}",
      DeleteWirelessDeviceImportTask:
        "DELETE /wireless_device_import_task/{Id}",
      DeleteWirelessGateway: "DELETE /wireless-gateways/{Id}",
      DeleteWirelessGatewayTask: "DELETE /wireless-gateways/{Id}/tasks",
      DeleteWirelessGatewayTaskDefinition:
        "DELETE /wireless-gateway-task-definitions/{Id}",
      DeregisterWirelessDevice:
        "PATCH /wireless-devices/{Identifier}/deregister",
      DisassociateAwsAccountFromPartnerAccount:
        "DELETE /partner-accounts/{PartnerAccountId}",
      DisassociateMulticastGroupFromFuotaTask:
        "DELETE /fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}",
      DisassociateWirelessDeviceFromFuotaTask:
        "DELETE /fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}",
      DisassociateWirelessDeviceFromMulticastGroup:
        "DELETE /multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}",
      DisassociateWirelessDeviceFromThing:
        "DELETE /wireless-devices/{Id}/thing",
      DisassociateWirelessGatewayFromCertificate:
        "DELETE /wireless-gateways/{Id}/certificate",
      DisassociateWirelessGatewayFromThing:
        "DELETE /wireless-gateways/{Id}/thing",
      GetDestination: "GET /destinations/{Name}",
      GetDeviceProfile: "GET /device-profiles/{Id}",
      GetEventConfigurationByResourceTypes:
        "GET /event-configurations-resource-types",
      GetFuotaTask: "GET /fuota-tasks/{Id}",
      GetLogLevelsByResourceTypes: "GET /log-levels",
      GetMetricConfiguration: "GET /metric-configuration",
      GetMetrics: "POST /metrics",
      GetMulticastGroup: "GET /multicast-groups/{Id}",
      GetMulticastGroupSession: "GET /multicast-groups/{Id}/session",
      GetNetworkAnalyzerConfiguration:
        "GET /network-analyzer-configurations/{ConfigurationName}",
      GetPartnerAccount: "GET /partner-accounts/{PartnerAccountId}",
      GetPosition: "GET /positions/{ResourceIdentifier}",
      GetPositionConfiguration:
        "GET /position-configurations/{ResourceIdentifier}",
      GetPositionEstimate: {
        http: "POST /position-estimate",
        traits: {
          GeoJsonPayload: "httpPayload",
        },
      },
      GetResourceEventConfiguration: "GET /event-configurations/{Identifier}",
      GetResourceLogLevel: "GET /log-levels/{ResourceIdentifier}",
      GetResourcePosition: {
        http: "GET /resource-positions/{ResourceIdentifier}",
        traits: {
          GeoJsonPayload: "httpPayload",
        },
      },
      GetServiceEndpoint: "GET /service-endpoint",
      GetServiceProfile: "GET /service-profiles/{Id}",
      GetWirelessDevice: "GET /wireless-devices/{Identifier}",
      GetWirelessDeviceImportTask: "GET /wireless_device_import_task/{Id}",
      GetWirelessDeviceStatistics:
        "GET /wireless-devices/{WirelessDeviceId}/statistics",
      GetWirelessGateway: "GET /wireless-gateways/{Identifier}",
      GetWirelessGatewayCertificate: "GET /wireless-gateways/{Id}/certificate",
      GetWirelessGatewayFirmwareInformation:
        "GET /wireless-gateways/{Id}/firmware-information",
      GetWirelessGatewayStatistics:
        "GET /wireless-gateways/{WirelessGatewayId}/statistics",
      GetWirelessGatewayTask: "GET /wireless-gateways/{Id}/tasks",
      GetWirelessGatewayTaskDefinition:
        "GET /wireless-gateway-task-definitions/{Id}",
      ListDestinations: "GET /destinations",
      ListDeviceProfiles: "GET /device-profiles",
      ListDevicesForWirelessDeviceImportTask:
        "GET /wireless_device_import_task",
      ListEventConfigurations: "GET /event-configurations",
      ListFuotaTasks: "GET /fuota-tasks",
      ListMulticastGroups: "GET /multicast-groups",
      ListMulticastGroupsByFuotaTask: "GET /fuota-tasks/{Id}/multicast-groups",
      ListNetworkAnalyzerConfigurations: "GET /network-analyzer-configurations",
      ListPartnerAccounts: "GET /partner-accounts",
      ListPositionConfigurations: "GET /position-configurations",
      ListQueuedMessages: "GET /wireless-devices/{Id}/data",
      ListServiceProfiles: "GET /service-profiles",
      ListTagsForResource: "GET /tags",
      ListWirelessDeviceImportTasks: "GET /wireless_device_import_tasks",
      ListWirelessDevices: "GET /wireless-devices",
      ListWirelessGateways: "GET /wireless-gateways",
      ListWirelessGatewayTaskDefinitions:
        "GET /wireless-gateway-task-definitions",
      PutPositionConfiguration:
        "PUT /position-configurations/{ResourceIdentifier}",
      PutResourceLogLevel: "PUT /log-levels/{ResourceIdentifier}",
      ResetAllResourceLogLevels: "DELETE /log-levels",
      ResetResourceLogLevel: "DELETE /log-levels/{ResourceIdentifier}",
      SendDataToMulticastGroup: "POST /multicast-groups/{Id}/data",
      SendDataToWirelessDevice: "POST /wireless-devices/{Id}/data",
      StartBulkAssociateWirelessDeviceWithMulticastGroup:
        "PATCH /multicast-groups/{Id}/bulk",
      StartBulkDisassociateWirelessDeviceFromMulticastGroup:
        "POST /multicast-groups/{Id}/bulk",
      StartFuotaTask: "PUT /fuota-tasks/{Id}",
      StartMulticastGroupSession: "PUT /multicast-groups/{Id}/session",
      StartSingleWirelessDeviceImportTask:
        "POST /wireless_single_device_import_task",
      StartWirelessDeviceImportTask: "POST /wireless_device_import_task",
      TagResource: "POST /tags",
      TestWirelessDevice: "POST /wireless-devices/{Id}/test",
      UntagResource: "DELETE /tags",
      UpdateDestination: "PATCH /destinations/{Name}",
      UpdateEventConfigurationByResourceTypes:
        "PATCH /event-configurations-resource-types",
      UpdateFuotaTask: "PATCH /fuota-tasks/{Id}",
      UpdateLogLevelsByResourceTypes: "POST /log-levels",
      UpdateMetricConfiguration: "PUT /metric-configuration",
      UpdateMulticastGroup: "PATCH /multicast-groups/{Id}",
      UpdateNetworkAnalyzerConfiguration:
        "PATCH /network-analyzer-configurations/{ConfigurationName}",
      UpdatePartnerAccount: "PATCH /partner-accounts/{PartnerAccountId}",
      UpdatePosition: "PATCH /positions/{ResourceIdentifier}",
      UpdateResourceEventConfiguration:
        "PATCH /event-configurations/{Identifier}",
      UpdateResourcePosition: "PATCH /resource-positions/{ResourceIdentifier}",
      UpdateWirelessDevice: "PATCH /wireless-devices/{Id}",
      UpdateWirelessDeviceImportTask: "PATCH /wireless_device_import_task/{Id}",
      UpdateWirelessGateway: "PATCH /wireless-gateways/{Id}",
    },
  },
  iotanalytics: {
    sdkId: "IoTAnalytics",
    version: "2017-11-27",
    arnNamespace: "iotanalytics",
    cloudTrailEventSource: "iotanalytics.amazonaws.com",
    endpointPrefix: "iotanalytics",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchPutMessage: "POST /messages/batch",
      CancelPipelineReprocessing:
        "DELETE /pipelines/{pipelineName}/reprocessing/{reprocessingId}",
      CreateChannel: "POST /channels",
      CreateDataset: "POST /datasets",
      CreateDatasetContent: "POST /datasets/{datasetName}/content",
      CreateDatastore: "POST /datastores",
      CreatePipeline: "POST /pipelines",
      DeleteChannel: "DELETE /channels/{channelName}",
      DeleteDataset: "DELETE /datasets/{datasetName}",
      DeleteDatasetContent: "DELETE /datasets/{datasetName}/content",
      DeleteDatastore: "DELETE /datastores/{datastoreName}",
      DeletePipeline: "DELETE /pipelines/{pipelineName}",
      DescribeChannel: "GET /channels/{channelName}",
      DescribeDataset: "GET /datasets/{datasetName}",
      DescribeDatastore: "GET /datastores/{datastoreName}",
      DescribeLoggingOptions: "GET /logging",
      DescribePipeline: "GET /pipelines/{pipelineName}",
      GetDatasetContent: "GET /datasets/{datasetName}/content",
      ListChannels: "GET /channels",
      ListDatasetContents: "GET /datasets/{datasetName}/contents",
      ListDatasets: "GET /datasets",
      ListDatastores: "GET /datastores",
      ListPipelines: "GET /pipelines",
      ListTagsForResource: "GET /tags",
      PutLoggingOptions: "PUT /logging",
      RunPipelineActivity: "POST /pipelineactivities/run",
      SampleChannelData: "GET /channels/{channelName}/sample",
      StartPipelineReprocessing: "POST /pipelines/{pipelineName}/reprocessing",
      TagResource: "POST /tags",
      UntagResource: "DELETE /tags",
      UpdateChannel: "PUT /channels/{channelName}",
      UpdateDataset: "PUT /datasets/{datasetName}",
      UpdateDatastore: "PUT /datastores/{datastoreName}",
      UpdatePipeline: "PUT /pipelines/{pipelineName}",
    },
  },
  iotdeviceadvisor: {
    sdkId: "IotDeviceAdvisor",
    version: "2020-09-18",
    arnNamespace: "iotdeviceadvisor",
    cloudTrailEventSource: "iotdeviceadvisor.amazonaws.com",
    endpointPrefix: "api.iotdeviceadvisor",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateSuiteDefinition: "POST /suiteDefinitions",
      DeleteSuiteDefinition: "DELETE /suiteDefinitions/{suiteDefinitionId}",
      GetEndpoint: "GET /endpoint",
      GetSuiteDefinition: "GET /suiteDefinitions/{suiteDefinitionId}",
      GetSuiteRun:
        "GET /suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}",
      GetSuiteRunReport:
        "GET /suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report",
      ListSuiteDefinitions: "GET /suiteDefinitions",
      ListSuiteRuns: "GET /suiteRuns",
      ListTagsForResource: "GET /tags/{resourceArn}",
      StartSuiteRun: "POST /suiteDefinitions/{suiteDefinitionId}/suiteRuns",
      StopSuiteRun:
        "POST /suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateSuiteDefinition: "PATCH /suiteDefinitions/{suiteDefinitionId}",
    },
  },
  iotfleethub: {
    sdkId: "IoTFleetHub",
    version: "2020-11-03",
    arnNamespace: "iotfleethub",
    cloudTrailEventSource: "iotfleethub.amazonaws.com",
    endpointPrefix: "api.fleethub.iot",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateApplication: "POST /applications",
      DeleteApplication: "DELETE /applications/{applicationId}",
      DescribeApplication: "GET /applications/{applicationId}",
      ListApplications: "GET /applications",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateApplication: "PATCH /applications/{applicationId}",
    },
  },
  iotfleetwise: {
    sdkId: "IoTFleetWise",
    version: "2021-06-17",
    arnNamespace: "iotfleetwise",
    cloudTrailEventSource: "iotfleetwise.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_0",
    targetPrefix: "IoTAutobahnControlPlane",
  },
  iotsecuretunneling: {
    sdkId: "IoTSecureTunneling",
    version: "2018-10-05",
    arnNamespace: "iotsecuredtunneling",
    cloudTrailEventSource: "iotsecuretunneling.amazonaws.com",
    endpointPrefix: "api.tunneling.iot",
    protocol: "awsJson1_1",
    targetPrefix: "IoTSecuredTunneling",
  },
  iotsitewise: {
    sdkId: "IoTSiteWise",
    version: "2019-12-02",
    arnNamespace: "iotsitewise",
    cloudTrailEventSource: "iotsitewise.amazonaws.com",
    endpointPrefix: "iotsitewise",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateAssets: "POST /assets/{assetId}/associate",
      AssociateTimeSeriesToAssetProperty: "POST /timeseries/associate",
      BatchAssociateProjectAssets:
        "POST /projects/{projectId}/assets/associate",
      BatchDisassociateProjectAssets:
        "POST /projects/{projectId}/assets/disassociate",
      BatchGetAssetPropertyAggregates: "POST /properties/batch/aggregates",
      BatchGetAssetPropertyValue: "POST /properties/batch/latest",
      BatchGetAssetPropertyValueHistory: "POST /properties/batch/history",
      BatchPutAssetPropertyValue: "POST /properties",
      CreateAccessPolicy: "POST /access-policies",
      CreateAsset: "POST /assets",
      CreateAssetModel: "POST /asset-models",
      CreateAssetModelCompositeModel:
        "POST /asset-models/{assetModelId}/composite-models",
      CreateBulkImportJob: "POST /jobs",
      CreateComputationModel: "POST /computation-models",
      CreateDashboard: "POST /dashboards",
      CreateDataset: "POST /datasets",
      CreateGateway: "POST /20200301/gateways",
      CreatePortal: "POST /portals",
      CreateProject: "POST /projects",
      DeleteAccessPolicy: "DELETE /access-policies/{accessPolicyId}",
      DeleteAsset: "DELETE /assets/{assetId}",
      DeleteAssetModel: "DELETE /asset-models/{assetModelId}",
      DeleteAssetModelCompositeModel:
        "DELETE /asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}",
      DeleteComputationModel: "DELETE /computation-models/{computationModelId}",
      DeleteDashboard: "DELETE /dashboards/{dashboardId}",
      DeleteDataset: "DELETE /datasets/{datasetId}",
      DeleteGateway: "DELETE /20200301/gateways/{gatewayId}",
      DeletePortal: "DELETE /portals/{portalId}",
      DeleteProject: "DELETE /projects/{projectId}",
      DeleteTimeSeries: "POST /timeseries/delete",
      DescribeAccessPolicy: "GET /access-policies/{accessPolicyId}",
      DescribeAction: "GET /actions/{actionId}",
      DescribeAsset: "GET /assets/{assetId}",
      DescribeAssetCompositeModel:
        "GET /assets/{assetId}/composite-models/{assetCompositeModelId}",
      DescribeAssetModel: {
        http: "GET /asset-models/{assetModelId}",
        traits: {
          eTag: "ETag",
        },
      },
      DescribeAssetModelCompositeModel:
        "GET /asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}",
      DescribeAssetProperty: "GET /assets/{assetId}/properties/{propertyId}",
      DescribeBulkImportJob: "GET /jobs/{jobId}",
      DescribeComputationModel: "GET /computation-models/{computationModelId}",
      DescribeComputationModelExecutionSummary:
        "GET /computation-models/{computationModelId}/execution-summary",
      DescribeDashboard: "GET /dashboards/{dashboardId}",
      DescribeDataset: "GET /datasets/{datasetId}",
      DescribeDefaultEncryptionConfiguration:
        "GET /configuration/account/encryption",
      DescribeExecution: "GET /executions/{executionId}",
      DescribeGateway: "GET /20200301/gateways/{gatewayId}",
      DescribeGatewayCapabilityConfiguration:
        "GET /20200301/gateways/{gatewayId}/capability/{capabilityNamespace}",
      DescribeLoggingOptions: "GET /logging",
      DescribePortal: "GET /portals/{portalId}",
      DescribeProject: "GET /projects/{projectId}",
      DescribeStorageConfiguration: "GET /configuration/account/storage",
      DescribeTimeSeries: "GET /timeseries/describe",
      DisassociateAssets: "POST /assets/{assetId}/disassociate",
      DisassociateTimeSeriesFromAssetProperty: "POST /timeseries/disassociate",
      ExecuteAction: "POST /actions",
      ExecuteQuery: "POST /queries/execution",
      GetAssetPropertyAggregates: "GET /properties/aggregates",
      GetAssetPropertyValue: "GET /properties/latest",
      GetAssetPropertyValueHistory: "GET /properties/history",
      GetInterpolatedAssetPropertyValues: "GET /properties/interpolated",
      InvokeAssistant: {
        http: "POST /assistant/invocation",
        traits: {
          body: "httpPayload",
          conversationId: "x-amz-iotsitewise-assistant-conversation-id",
        },
      },
      ListAccessPolicies: "GET /access-policies",
      ListActions: "GET /actions",
      ListAssetModelCompositeModels:
        "GET /asset-models/{assetModelId}/composite-models",
      ListAssetModelProperties: "GET /asset-models/{assetModelId}/properties",
      ListAssetModels: "GET /asset-models",
      ListAssetProperties: "GET /assets/{assetId}/properties",
      ListAssetRelationships: "GET /assets/{assetId}/assetRelationships",
      ListAssets: "GET /assets",
      ListAssociatedAssets: "GET /assets/{assetId}/hierarchies",
      ListBulkImportJobs: "GET /jobs",
      ListCompositionRelationships:
        "GET /asset-models/{assetModelId}/composition-relationships",
      ListComputationModelDataBindingUsages:
        "POST /computation-models/data-binding-usages",
      ListComputationModelResolveToResources:
        "GET /computation-models/{computationModelId}/resolve-to-resources",
      ListComputationModels: "GET /computation-models",
      ListDashboards: "GET /dashboards",
      ListDatasets: "GET /datasets",
      ListExecutions: "GET /executions",
      ListGateways: "GET /20200301/gateways",
      ListPortals: "GET /portals",
      ListProjectAssets: "GET /projects/{projectId}/assets",
      ListProjects: "GET /projects",
      ListTagsForResource: "GET /tags",
      ListTimeSeries: "GET /timeseries",
      PutDefaultEncryptionConfiguration:
        "POST /configuration/account/encryption",
      PutLoggingOptions: "PUT /logging",
      PutStorageConfiguration: "POST /configuration/account/storage",
      TagResource: "POST /tags",
      UntagResource: "DELETE /tags",
      UpdateAccessPolicy: "PUT /access-policies/{accessPolicyId}",
      UpdateAsset: "PUT /assets/{assetId}",
      UpdateAssetModel: "PUT /asset-models/{assetModelId}",
      UpdateAssetModelCompositeModel:
        "PUT /asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}",
      UpdateAssetProperty: "PUT /assets/{assetId}/properties/{propertyId}",
      UpdateComputationModel: "POST /computation-models/{computationModelId}",
      UpdateDashboard: "PUT /dashboards/{dashboardId}",
      UpdateDataset: "PUT /datasets/{datasetId}",
      UpdateGateway: "PUT /20200301/gateways/{gatewayId}",
      UpdateGatewayCapabilityConfiguration:
        "POST /20200301/gateways/{gatewayId}/capability",
      UpdatePortal: "PUT /portals/{portalId}",
      UpdateProject: "PUT /projects/{projectId}",
    },
  },
  iotthingsgraph: {
    sdkId: "IoTThingsGraph",
    version: "2018-09-06",
    arnNamespace: "iotthingsgraph",
    cloudTrailEventSource: "iotthingsgraph.amazonaws.com",
    endpointPrefix: "iotthingsgraph",
    protocol: "awsJson1_1",
    targetPrefix: "IotThingsGraphFrontEndService",
  },
  iottwinmaker: {
    sdkId: "IoTTwinMaker",
    version: "2021-11-29",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "iottwinmaker",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchPutPropertyValues:
        "POST /workspaces/{workspaceId}/entity-properties",
      CancelMetadataTransferJob:
        "PUT /metadata-transfer-jobs/{metadataTransferJobId}/cancel",
      CreateComponentType:
        "POST /workspaces/{workspaceId}/component-types/{componentTypeId}",
      CreateEntity: "POST /workspaces/{workspaceId}/entities",
      CreateMetadataTransferJob: "POST /metadata-transfer-jobs",
      CreateScene: "POST /workspaces/{workspaceId}/scenes",
      CreateSyncJob: "POST /workspaces/{workspaceId}/sync-jobs/{syncSource}",
      CreateWorkspace: "POST /workspaces/{workspaceId}",
      DeleteComponentType:
        "DELETE /workspaces/{workspaceId}/component-types/{componentTypeId}",
      DeleteEntity: "DELETE /workspaces/{workspaceId}/entities/{entityId}",
      DeleteScene: "DELETE /workspaces/{workspaceId}/scenes/{sceneId}",
      DeleteSyncJob: "DELETE /workspaces/{workspaceId}/sync-jobs/{syncSource}",
      DeleteWorkspace: "DELETE /workspaces/{workspaceId}",
      ExecuteQuery: "POST /queries/execution",
      GetComponentType:
        "GET /workspaces/{workspaceId}/component-types/{componentTypeId}",
      GetEntity: "GET /workspaces/{workspaceId}/entities/{entityId}",
      GetMetadataTransferJob:
        "GET /metadata-transfer-jobs/{metadataTransferJobId}",
      GetPricingPlan: "GET /pricingplan",
      GetPropertyValue:
        "POST /workspaces/{workspaceId}/entity-properties/value",
      GetPropertyValueHistory:
        "POST /workspaces/{workspaceId}/entity-properties/history",
      GetScene: "GET /workspaces/{workspaceId}/scenes/{sceneId}",
      GetSyncJob: "GET /sync-jobs/{syncSource}",
      GetWorkspace: "GET /workspaces/{workspaceId}",
      ListComponents:
        "POST /workspaces/{workspaceId}/entities/{entityId}/components-list",
      ListComponentTypes: "POST /workspaces/{workspaceId}/component-types-list",
      ListEntities: "POST /workspaces/{workspaceId}/entities-list",
      ListMetadataTransferJobs: "POST /metadata-transfer-jobs-list",
      ListProperties: "POST /workspaces/{workspaceId}/properties-list",
      ListScenes: "POST /workspaces/{workspaceId}/scenes-list",
      ListSyncJobs: "POST /workspaces/{workspaceId}/sync-jobs-list",
      ListSyncResources:
        "POST /workspaces/{workspaceId}/sync-jobs/{syncSource}/resources-list",
      ListTagsForResource: "POST /tags-list",
      ListWorkspaces: "POST /workspaces-list",
      TagResource: "POST /tags",
      UntagResource: "DELETE /tags",
      UpdateComponentType:
        "PUT /workspaces/{workspaceId}/component-types/{componentTypeId}",
      UpdateEntity: "PUT /workspaces/{workspaceId}/entities/{entityId}",
      UpdatePricingPlan: "POST /pricingplan",
      UpdateScene: "PUT /workspaces/{workspaceId}/scenes/{sceneId}",
      UpdateWorkspace: "PUT /workspaces/{workspaceId}",
    },
  },
  ivs: {
    sdkId: "ivs",
    version: "2020-07-14",
    arnNamespace: "ivs",
    cloudTrailEventSource: "ivs.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetChannel: "POST /BatchGetChannel",
      BatchGetStreamKey: "POST /BatchGetStreamKey",
      BatchStartViewerSessionRevocation:
        "POST /BatchStartViewerSessionRevocation",
      CreateChannel: "POST /CreateChannel",
      CreatePlaybackRestrictionPolicy: "POST /CreatePlaybackRestrictionPolicy",
      CreateRecordingConfiguration: "POST /CreateRecordingConfiguration",
      CreateStreamKey: "POST /CreateStreamKey",
      DeleteChannel: "POST /DeleteChannel",
      DeletePlaybackKeyPair: "POST /DeletePlaybackKeyPair",
      DeletePlaybackRestrictionPolicy: "POST /DeletePlaybackRestrictionPolicy",
      DeleteRecordingConfiguration: "POST /DeleteRecordingConfiguration",
      DeleteStreamKey: "POST /DeleteStreamKey",
      GetChannel: "POST /GetChannel",
      GetPlaybackKeyPair: "POST /GetPlaybackKeyPair",
      GetPlaybackRestrictionPolicy: "POST /GetPlaybackRestrictionPolicy",
      GetRecordingConfiguration: "POST /GetRecordingConfiguration",
      GetStream: "POST /GetStream",
      GetStreamKey: "POST /GetStreamKey",
      GetStreamSession: "POST /GetStreamSession",
      ImportPlaybackKeyPair: "POST /ImportPlaybackKeyPair",
      ListChannels: "POST /ListChannels",
      ListPlaybackKeyPairs: "POST /ListPlaybackKeyPairs",
      ListPlaybackRestrictionPolicies: "POST /ListPlaybackRestrictionPolicies",
      ListRecordingConfigurations: "POST /ListRecordingConfigurations",
      ListStreamKeys: "POST /ListStreamKeys",
      ListStreams: "POST /ListStreams",
      ListStreamSessions: "POST /ListStreamSessions",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutMetadata: "POST /PutMetadata",
      StartViewerSessionRevocation: "POST /StartViewerSessionRevocation",
      StopStream: "POST /StopStream",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateChannel: "POST /UpdateChannel",
      UpdatePlaybackRestrictionPolicy: "POST /UpdatePlaybackRestrictionPolicy",
    },
  },
  ivsrealtime: {
    sdkId: "IVS RealTime",
    version: "2020-07-14",
    arnNamespace: "ivs",
    cloudTrailEventSource: "ivs.amazonaws.com",
    endpointPrefix: "ivsrealtime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateEncoderConfiguration: "POST /CreateEncoderConfiguration",
      CreateIngestConfiguration: "POST /CreateIngestConfiguration",
      CreateParticipantToken: "POST /CreateParticipantToken",
      CreateStage: "POST /CreateStage",
      CreateStorageConfiguration: "POST /CreateStorageConfiguration",
      DeleteEncoderConfiguration: "POST /DeleteEncoderConfiguration",
      DeleteIngestConfiguration: "POST /DeleteIngestConfiguration",
      DeletePublicKey: "POST /DeletePublicKey",
      DeleteStage: "POST /DeleteStage",
      DeleteStorageConfiguration: "POST /DeleteStorageConfiguration",
      DisconnectParticipant: "POST /DisconnectParticipant",
      GetComposition: "POST /GetComposition",
      GetEncoderConfiguration: "POST /GetEncoderConfiguration",
      GetIngestConfiguration: "POST /GetIngestConfiguration",
      GetParticipant: "POST /GetParticipant",
      GetPublicKey: "POST /GetPublicKey",
      GetStage: "POST /GetStage",
      GetStageSession: "POST /GetStageSession",
      GetStorageConfiguration: "POST /GetStorageConfiguration",
      ImportPublicKey: "POST /ImportPublicKey",
      ListCompositions: "POST /ListCompositions",
      ListEncoderConfigurations: "POST /ListEncoderConfigurations",
      ListIngestConfigurations: "POST /ListIngestConfigurations",
      ListParticipantEvents: "POST /ListParticipantEvents",
      ListParticipantReplicas: "POST /ListParticipantReplicas",
      ListParticipants: "POST /ListParticipants",
      ListPublicKeys: "POST /ListPublicKeys",
      ListStages: "POST /ListStages",
      ListStageSessions: "POST /ListStageSessions",
      ListStorageConfigurations: "POST /ListStorageConfigurations",
      ListTagsForResource: "GET /tags/{resourceArn}",
      StartComposition: "POST /StartComposition",
      StartParticipantReplication: {
        http: "POST /StartParticipantReplication",
        traits: {
          accessControlAllowOrigin: "Access-Control-Allow-Origin",
          accessControlExposeHeaders: "Access-Control-Expose-Headers",
          cacheControl: "Cache-Control",
          contentSecurityPolicy: "Content-Security-Policy",
          strictTransportSecurity: "Strict-Transport-Security",
          xContentTypeOptions: "X-Content-Type-Options",
          xFrameOptions: "X-Frame-Options",
        },
      },
      StopComposition: "POST /StopComposition",
      StopParticipantReplication: {
        http: "POST /StopParticipantReplication",
        traits: {
          accessControlAllowOrigin: "Access-Control-Allow-Origin",
          accessControlExposeHeaders: "Access-Control-Expose-Headers",
          cacheControl: "Cache-Control",
          contentSecurityPolicy: "Content-Security-Policy",
          strictTransportSecurity: "Strict-Transport-Security",
          xContentTypeOptions: "X-Content-Type-Options",
          xFrameOptions: "X-Frame-Options",
        },
      },
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateIngestConfiguration: "POST /UpdateIngestConfiguration",
      UpdateStage: "POST /UpdateStage",
    },
  },
  ivschat: {
    sdkId: "ivschat",
    version: "2020-07-14",
    arnNamespace: "ivschat",
    cloudTrailEventSource: "ivschat.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateChatToken: "POST /CreateChatToken",
      CreateLoggingConfiguration: "POST /CreateLoggingConfiguration",
      CreateRoom: "POST /CreateRoom",
      DeleteLoggingConfiguration: "POST /DeleteLoggingConfiguration",
      DeleteMessage: "POST /DeleteMessage",
      DeleteRoom: "POST /DeleteRoom",
      DisconnectUser: "POST /DisconnectUser",
      GetLoggingConfiguration: "POST /GetLoggingConfiguration",
      GetRoom: "POST /GetRoom",
      ListLoggingConfigurations: "POST /ListLoggingConfigurations",
      ListRooms: "POST /ListRooms",
      ListTagsForResource: "GET /tags/{resourceArn}",
      SendEvent: "POST /SendEvent",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateLoggingConfiguration: "POST /UpdateLoggingConfiguration",
      UpdateRoom: "POST /UpdateRoom",
    },
  },
  kafka: {
    sdkId: "Kafka",
    version: "2018-11-14",
    arnNamespace: "kafka",
    cloudTrailEventSource: "kafka.amazonaws.com",
    endpointPrefix: "kafka",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchAssociateScramSecret: "POST /v1/clusters/{ClusterArn}/scram-secrets",
      BatchDisassociateScramSecret:
        "PATCH /v1/clusters/{ClusterArn}/scram-secrets",
      CreateCluster: "POST /v1/clusters",
      CreateClusterV2: "POST /api/v2/clusters",
      CreateConfiguration: "POST /v1/configurations",
      CreateReplicator: "POST /replication/v1/replicators",
      CreateVpcConnection: "POST /v1/vpc-connection",
      DeleteCluster: "DELETE /v1/clusters/{ClusterArn}",
      DeleteClusterPolicy: "DELETE /v1/clusters/{ClusterArn}/policy",
      DeleteConfiguration: "DELETE /v1/configurations/{Arn}",
      DeleteReplicator: "DELETE /replication/v1/replicators/{ReplicatorArn}",
      DeleteVpcConnection: "DELETE /v1/vpc-connection/{Arn}",
      DescribeCluster: "GET /v1/clusters/{ClusterArn}",
      DescribeClusterOperation: "GET /v1/operations/{ClusterOperationArn}",
      DescribeClusterOperationV2:
        "GET /api/v2/operations/{ClusterOperationArn}",
      DescribeClusterV2: "GET /api/v2/clusters/{ClusterArn}",
      DescribeConfiguration: "GET /v1/configurations/{Arn}",
      DescribeConfigurationRevision:
        "GET /v1/configurations/{Arn}/revisions/{Revision}",
      DescribeReplicator: "GET /replication/v1/replicators/{ReplicatorArn}",
      DescribeVpcConnection: "GET /v1/vpc-connection/{Arn}",
      GetBootstrapBrokers: "GET /v1/clusters/{ClusterArn}/bootstrap-brokers",
      GetClusterPolicy: "GET /v1/clusters/{ClusterArn}/policy",
      GetCompatibleKafkaVersions: "GET /v1/compatible-kafka-versions",
      ListClientVpcConnections:
        "GET /v1/clusters/{ClusterArn}/client-vpc-connections",
      ListClusterOperations: "GET /v1/clusters/{ClusterArn}/operations",
      ListClusterOperationsV2: "GET /api/v2/clusters/{ClusterArn}/operations",
      ListClusters: "GET /v1/clusters",
      ListClustersV2: "GET /api/v2/clusters",
      ListConfigurationRevisions: "GET /v1/configurations/{Arn}/revisions",
      ListConfigurations: "GET /v1/configurations",
      ListKafkaVersions: "GET /v1/kafka-versions",
      ListNodes: "GET /v1/clusters/{ClusterArn}/nodes",
      ListReplicators: "GET /replication/v1/replicators",
      ListScramSecrets: "GET /v1/clusters/{ClusterArn}/scram-secrets",
      ListTagsForResource: "GET /v1/tags/{ResourceArn}",
      ListVpcConnections: "GET /v1/vpc-connections",
      PutClusterPolicy: "PUT /v1/clusters/{ClusterArn}/policy",
      RebootBroker: "PUT /v1/clusters/{ClusterArn}/reboot-broker",
      RejectClientVpcConnection:
        "PUT /v1/clusters/{ClusterArn}/client-vpc-connection",
      TagResource: "POST /v1/tags/{ResourceArn}",
      UntagResource: "DELETE /v1/tags/{ResourceArn}",
      UpdateBrokerCount: "PUT /v1/clusters/{ClusterArn}/nodes/count",
      UpdateBrokerStorage: "PUT /v1/clusters/{ClusterArn}/nodes/storage",
      UpdateBrokerType: "PUT /v1/clusters/{ClusterArn}/nodes/type",
      UpdateClusterConfiguration: "PUT /v1/clusters/{ClusterArn}/configuration",
      UpdateClusterKafkaVersion: "PUT /v1/clusters/{ClusterArn}/version",
      UpdateConfiguration: "PUT /v1/configurations/{Arn}",
      UpdateConnectivity: "PUT /v1/clusters/{ClusterArn}/connectivity",
      UpdateMonitoring: "PUT /v1/clusters/{ClusterArn}/monitoring",
      UpdateReplicationInfo:
        "PUT /replication/v1/replicators/{ReplicatorArn}/replication-info",
      UpdateSecurity: "PATCH /v1/clusters/{ClusterArn}/security",
      UpdateStorage: "PUT /v1/clusters/{ClusterArn}/storage",
    },
  },
  kafkaconnect: {
    sdkId: "KafkaConnect",
    version: "2021-09-14",
    arnNamespace: "kafkaconnect",
    cloudTrailEventSource: "kafkaconnect.amazonaws.com",
    endpointPrefix: "kafkaconnect",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateConnector: "POST /v1/connectors",
      CreateCustomPlugin: "POST /v1/custom-plugins",
      CreateWorkerConfiguration: "POST /v1/worker-configurations",
      DeleteConnector: "DELETE /v1/connectors/{connectorArn}",
      DeleteCustomPlugin: "DELETE /v1/custom-plugins/{customPluginArn}",
      DeleteWorkerConfiguration:
        "DELETE /v1/worker-configurations/{workerConfigurationArn}",
      DescribeConnector: "GET /v1/connectors/{connectorArn}",
      DescribeConnectorOperation:
        "GET /v1/connectorOperations/{connectorOperationArn}",
      DescribeCustomPlugin: "GET /v1/custom-plugins/{customPluginArn}",
      DescribeWorkerConfiguration:
        "GET /v1/worker-configurations/{workerConfigurationArn}",
      ListConnectorOperations: "GET /v1/connectors/{connectorArn}/operations",
      ListConnectors: "GET /v1/connectors",
      ListCustomPlugins: "GET /v1/custom-plugins",
      ListTagsForResource: "GET /v1/tags/{resourceArn}",
      ListWorkerConfigurations: "GET /v1/worker-configurations",
      TagResource: "POST /v1/tags/{resourceArn}",
      UntagResource: "DELETE /v1/tags/{resourceArn}",
      UpdateConnector: "PUT /v1/connectors/{connectorArn}",
    },
  },
  kendra: {
    sdkId: "kendra",
    version: "2019-02-03",
    arnNamespace: "kendra",
    cloudTrailEventSource: "kendra.amazonaws.com",
    endpointPrefix: "kendra",
    protocol: "awsJson1_1",
    targetPrefix: "AWSKendraFrontendService",
  },
  kendraranking: {
    sdkId: "Kendra Ranking",
    version: "2022-10-19",
    arnNamespace: "kendra-ranking",
    cloudTrailEventSource: "kendraranking.amazonaws.com",
    endpointPrefix: "kendra-ranking",
    protocol: "awsJson1_0",
    targetPrefix: "AWSKendraRerankingFrontendService",
  },
  keyspaces: {
    sdkId: "Keyspaces",
    version: "2022-02-10",
    arnNamespace: "cassandra",
    cloudTrailEventSource: "cassandra.amazonaws.com",
    endpointPrefix: "cassandra",
    protocol: "awsJson1_0",
    targetPrefix: "KeyspacesService",
  },
  keyspacesstreams: {
    sdkId: "KeyspacesStreams",
    version: "2024-09-09",
    arnNamespace: "cassandra",
    cloudTrailEventSource: "cassandra-streams.amazonaws.com",
    endpointPrefix: "cassandra-streams",
    protocol: "awsJson1_0",
    targetPrefix: "KeyspacesStreams",
  },
  kinesis: {
    sdkId: "Kinesis",
    version: "2013-12-02",
    arnNamespace: "kinesis",
    cloudTrailEventSource: "kinesis.amazonaws.com",
    endpointPrefix: "kinesis",
    protocol: "awsJson1_1",
    targetPrefix: "Kinesis_20131202",
  },
  kinesisanalytics: {
    sdkId: "Kinesis Analytics",
    version: "2015-08-14",
    arnNamespace: "kinesisanalytics",
    cloudTrailEventSource: "kinesisanalytics.amazonaws.com",
    endpointPrefix: "kinesisanalytics",
    protocol: "awsJson1_1",
    targetPrefix: "KinesisAnalytics_20150814",
  },
  kinesisanalyticsv2: {
    sdkId: "Kinesis Analytics V2",
    version: "2018-05-23",
    arnNamespace: "kinesisanalytics",
    cloudTrailEventSource: "kinesisanalytics.amazonaws.com",
    endpointPrefix: "kinesisanalytics",
    protocol: "awsJson1_1",
    targetPrefix: "KinesisAnalytics_20180523",
  },
  kinesisvideo: {
    sdkId: "Kinesis Video",
    version: "2017-09-30",
    arnNamespace: "kinesisvideo",
    cloudTrailEventSource: "kinesisvideo.amazonaws.com",
    endpointPrefix: "kinesisvideo",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateSignalingChannel: "POST /createSignalingChannel",
      CreateStream: "POST /createStream",
      DeleteEdgeConfiguration: "POST /deleteEdgeConfiguration",
      DeleteSignalingChannel: "POST /deleteSignalingChannel",
      DeleteStream: "POST /deleteStream",
      DescribeEdgeConfiguration: "POST /describeEdgeConfiguration",
      DescribeImageGenerationConfiguration:
        "POST /describeImageGenerationConfiguration",
      DescribeMappedResourceConfiguration:
        "POST /describeMappedResourceConfiguration",
      DescribeMediaStorageConfiguration:
        "POST /describeMediaStorageConfiguration",
      DescribeNotificationConfiguration:
        "POST /describeNotificationConfiguration",
      DescribeSignalingChannel: "POST /describeSignalingChannel",
      DescribeStream: "POST /describeStream",
      GetDataEndpoint: "POST /getDataEndpoint",
      GetSignalingChannelEndpoint: "POST /getSignalingChannelEndpoint",
      ListEdgeAgentConfigurations: "POST /listEdgeAgentConfigurations",
      ListSignalingChannels: "POST /listSignalingChannels",
      ListStreams: "POST /listStreams",
      ListTagsForResource: "POST /ListTagsForResource",
      ListTagsForStream: "POST /listTagsForStream",
      StartEdgeConfigurationUpdate: "POST /startEdgeConfigurationUpdate",
      TagResource: "POST /TagResource",
      TagStream: "POST /tagStream",
      UntagResource: "POST /UntagResource",
      UntagStream: "POST /untagStream",
      UpdateDataRetention: "POST /updateDataRetention",
      UpdateImageGenerationConfiguration:
        "POST /updateImageGenerationConfiguration",
      UpdateMediaStorageConfiguration: "POST /updateMediaStorageConfiguration",
      UpdateNotificationConfiguration: "POST /updateNotificationConfiguration",
      UpdateSignalingChannel: "POST /updateSignalingChannel",
      UpdateStream: "POST /updateStream",
    },
  },
  kinesisvideoarchivedmedia: {
    sdkId: "Kinesis Video Archived Media",
    version: "2017-09-30",
    arnNamespace: "kinesisvideo",
    cloudTrailEventSource: "kinesisvideoarchivedmedia.amazonaws.com",
    endpointPrefix: "kinesisvideo",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetClip: {
        http: "POST /getClip",
        traits: {
          ContentType: "Content-Type",
          Payload: "httpPayload",
        },
      },
      GetDASHStreamingSessionURL: "POST /getDASHStreamingSessionURL",
      GetHLSStreamingSessionURL: "POST /getHLSStreamingSessionURL",
      GetImages: "POST /getImages",
      GetMediaForFragmentList: {
        http: "POST /getMediaForFragmentList",
        traits: {
          ContentType: "Content-Type",
          Payload: "httpPayload",
        },
      },
      ListFragments: "POST /listFragments",
    },
  },
  kinesisvideomedia: {
    sdkId: "Kinesis Video Media",
    version: "2017-09-30",
    arnNamespace: "kinesisvideo",
    cloudTrailEventSource: "kinesisvideomedia.amazonaws.com",
    endpointPrefix: "kinesisvideo",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetMedia: {
        http: "POST /getMedia",
        traits: {
          ContentType: "Content-Type",
          Payload: "httpPayload",
        },
      },
    },
  },
  kinesisvideosignaling: {
    sdkId: "Kinesis Video Signaling",
    version: "2019-12-04",
    arnNamespace: "kinesisvideo",
    cloudTrailEventSource: "kinesisvideosignaling.amazonaws.com",
    endpointPrefix: "kinesisvideo",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetIceServerConfig: "POST /v1/get-ice-server-config",
      SendAlexaOfferToMaster: "POST /v1/send-alexa-offer-to-master",
    },
  },
  kinesisvideowebrtcstorage: {
    sdkId: "Kinesis Video WebRTC Storage",
    version: "2018-05-10",
    arnNamespace: "kinesisvideo",
    cloudTrailEventSource: "kinesisvideo.amazonaws.com",
    endpointPrefix: "kinesisvideo",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      JoinStorageSession: "POST /joinStorageSession",
      JoinStorageSessionAsViewer: "POST /joinStorageSessionAsViewer",
    },
  },
  kms: {
    sdkId: "KMS",
    version: "2014-11-01",
    arnNamespace: "kms",
    cloudTrailEventSource: "kms.amazonaws.com",
    endpointPrefix: "kms",
    protocol: "awsJson1_1",
    targetPrefix: "TrentService",
  },
  lakeformation: {
    sdkId: "LakeFormation",
    version: "2017-03-31",
    arnNamespace: "lakeformation",
    cloudTrailEventSource: "lakeformation.amazonaws.com",
    endpointPrefix: "lakeformation",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AddLFTagsToResource: "POST /AddLFTagsToResource",
      AssumeDecoratedRoleWithSAML: "POST /AssumeDecoratedRoleWithSAML",
      BatchGrantPermissions: "POST /BatchGrantPermissions",
      BatchRevokePermissions: "POST /BatchRevokePermissions",
      CancelTransaction: "POST /CancelTransaction",
      CommitTransaction: "POST /CommitTransaction",
      CreateDataCellsFilter: "POST /CreateDataCellsFilter",
      CreateLakeFormationIdentityCenterConfiguration:
        "POST /CreateLakeFormationIdentityCenterConfiguration",
      CreateLakeFormationOptIn: "POST /CreateLakeFormationOptIn",
      CreateLFTag: "POST /CreateLFTag",
      CreateLFTagExpression: "POST /CreateLFTagExpression",
      DeleteDataCellsFilter: "POST /DeleteDataCellsFilter",
      DeleteLakeFormationIdentityCenterConfiguration:
        "POST /DeleteLakeFormationIdentityCenterConfiguration",
      DeleteLakeFormationOptIn: "POST /DeleteLakeFormationOptIn",
      DeleteLFTag: "POST /DeleteLFTag",
      DeleteLFTagExpression: "POST /DeleteLFTagExpression",
      DeleteObjectsOnCancel: "POST /DeleteObjectsOnCancel",
      DeregisterResource: "POST /DeregisterResource",
      DescribeLakeFormationIdentityCenterConfiguration:
        "POST /DescribeLakeFormationIdentityCenterConfiguration",
      DescribeResource: "POST /DescribeResource",
      DescribeTransaction: "POST /DescribeTransaction",
      ExtendTransaction: "POST /ExtendTransaction",
      GetDataCellsFilter: "POST /GetDataCellsFilter",
      GetDataLakePrincipal: "POST /GetDataLakePrincipal",
      GetDataLakeSettings: "POST /GetDataLakeSettings",
      GetEffectivePermissionsForPath: "POST /GetEffectivePermissionsForPath",
      GetLFTag: "POST /GetLFTag",
      GetLFTagExpression: "POST /GetLFTagExpression",
      GetQueryState: "POST /GetQueryState",
      GetQueryStatistics: "POST /GetQueryStatistics",
      GetResourceLFTags: "POST /GetResourceLFTags",
      GetTableObjects: "POST /GetTableObjects",
      GetTemporaryGluePartitionCredentials:
        "POST /GetTemporaryGluePartitionCredentials",
      GetTemporaryGlueTableCredentials:
        "POST /GetTemporaryGlueTableCredentials",
      GetWorkUnitResults: {
        http: "POST /GetWorkUnitResults",
        traits: {
          ResultStream: "httpPayload",
        },
      },
      GetWorkUnits: "POST /GetWorkUnits",
      GrantPermissions: "POST /GrantPermissions",
      ListDataCellsFilter: "POST /ListDataCellsFilter",
      ListLakeFormationOptIns: "POST /ListLakeFormationOptIns",
      ListLFTagExpressions: "POST /ListLFTagExpressions",
      ListLFTags: "POST /ListLFTags",
      ListPermissions: "POST /ListPermissions",
      ListResources: "POST /ListResources",
      ListTableStorageOptimizers: "POST /ListTableStorageOptimizers",
      ListTransactions: "POST /ListTransactions",
      PutDataLakeSettings: "POST /PutDataLakeSettings",
      RegisterResource: "POST /RegisterResource",
      RemoveLFTagsFromResource: "POST /RemoveLFTagsFromResource",
      RevokePermissions: "POST /RevokePermissions",
      SearchDatabasesByLFTags: "POST /SearchDatabasesByLFTags",
      SearchTablesByLFTags: "POST /SearchTablesByLFTags",
      StartQueryPlanning: "POST /StartQueryPlanning",
      StartTransaction: "POST /StartTransaction",
      UpdateDataCellsFilter: "POST /UpdateDataCellsFilter",
      UpdateLakeFormationIdentityCenterConfiguration:
        "POST /UpdateLakeFormationIdentityCenterConfiguration",
      UpdateLFTag: "POST /UpdateLFTag",
      UpdateLFTagExpression: "POST /UpdateLFTagExpression",
      UpdateResource: "POST /UpdateResource",
      UpdateTableObjects: "POST /UpdateTableObjects",
      UpdateTableStorageOptimizer: "POST /UpdateTableStorageOptimizer",
    },
  },
  lambda: {
    sdkId: "Lambda",
    version: "2015-03-31",
    arnNamespace: "lambda",
    cloudTrailEventSource: "lambda.amazonaws.com",
    endpointPrefix: "lambda",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetAccountSettings: "GET /2016-08-19/account-settings",
      ListTags: "GET /2017-03-31/tags/{Resource}",
      TagResource: "POST /2017-03-31/tags/{Resource}",
      UntagResource: "DELETE /2017-03-31/tags/{Resource}",
      AddLayerVersionPermission:
        "POST /2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy",
      AddPermission: "POST /2015-03-31/functions/{FunctionName}/policy",
      CreateAlias: "POST /2015-03-31/functions/{FunctionName}/aliases",
      CreateCodeSigningConfig: "POST /2020-04-22/code-signing-configs",
      CreateEventSourceMapping: "POST /2015-03-31/event-source-mappings",
      CreateFunction: "POST /2015-03-31/functions",
      CreateFunctionUrlConfig: "POST /2021-10-31/functions/{FunctionName}/url",
      DeleteAlias: "DELETE /2015-03-31/functions/{FunctionName}/aliases/{Name}",
      DeleteCodeSigningConfig:
        "DELETE /2020-04-22/code-signing-configs/{CodeSigningConfigArn}",
      DeleteEventSourceMapping:
        "DELETE /2015-03-31/event-source-mappings/{UUID}",
      DeleteFunction: "DELETE /2015-03-31/functions/{FunctionName}",
      DeleteFunctionCodeSigningConfig:
        "DELETE /2020-06-30/functions/{FunctionName}/code-signing-config",
      DeleteFunctionConcurrency:
        "DELETE /2017-10-31/functions/{FunctionName}/concurrency",
      DeleteFunctionEventInvokeConfig:
        "DELETE /2019-09-25/functions/{FunctionName}/event-invoke-config",
      DeleteFunctionUrlConfig:
        "DELETE /2021-10-31/functions/{FunctionName}/url",
      DeleteLayerVersion:
        "DELETE /2018-10-31/layers/{LayerName}/versions/{VersionNumber}",
      DeleteProvisionedConcurrencyConfig:
        "DELETE /2019-09-30/functions/{FunctionName}/provisioned-concurrency",
      GetAlias: "GET /2015-03-31/functions/{FunctionName}/aliases/{Name}",
      GetCodeSigningConfig:
        "GET /2020-04-22/code-signing-configs/{CodeSigningConfigArn}",
      GetEventSourceMapping: "GET /2015-03-31/event-source-mappings/{UUID}",
      GetFunction: "GET /2015-03-31/functions/{FunctionName}",
      GetFunctionCodeSigningConfig:
        "GET /2020-06-30/functions/{FunctionName}/code-signing-config",
      GetFunctionConcurrency:
        "GET /2019-09-30/functions/{FunctionName}/concurrency",
      GetFunctionConfiguration:
        "GET /2015-03-31/functions/{FunctionName}/configuration",
      GetFunctionEventInvokeConfig:
        "GET /2019-09-25/functions/{FunctionName}/event-invoke-config",
      GetFunctionRecursionConfig:
        "GET /2024-08-31/functions/{FunctionName}/recursion-config",
      GetFunctionUrlConfig: "GET /2021-10-31/functions/{FunctionName}/url",
      GetLayerVersion:
        "GET /2018-10-31/layers/{LayerName}/versions/{VersionNumber}",
      GetLayerVersionByArn: "GET /2018-10-31/layers?find=LayerVersion",
      GetLayerVersionPolicy:
        "GET /2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy",
      GetPolicy: "GET /2015-03-31/functions/{FunctionName}/policy",
      GetProvisionedConcurrencyConfig:
        "GET /2019-09-30/functions/{FunctionName}/provisioned-concurrency",
      GetRuntimeManagementConfig:
        "GET /2021-07-20/functions/{FunctionName}/runtime-management-config",
      Invoke: {
        http: "POST /2015-03-31/functions/{FunctionName}/invocations",
        traits: {
          StatusCode: "httpResponseCode",
          FunctionError: "X-Amz-Function-Error",
          LogResult: "X-Amz-Log-Result",
          Payload: "httpPayload",
          ExecutedVersion: "X-Amz-Executed-Version",
        },
      },
      InvokeAsync: {
        http: "POST /2014-11-13/functions/{FunctionName}/invoke-async",
        traits: {
          Status: "httpResponseCode",
        },
      },
      InvokeWithResponseStream: {
        http: "POST /2021-11-15/functions/{FunctionName}/response-streaming-invocations",
        traits: {
          StatusCode: "httpResponseCode",
          ExecutedVersion: "X-Amz-Executed-Version",
          EventStream: "httpPayload",
          ResponseStreamContentType: "Content-Type",
        },
      },
      ListAliases: "GET /2015-03-31/functions/{FunctionName}/aliases",
      ListCodeSigningConfigs: "GET /2020-04-22/code-signing-configs",
      ListEventSourceMappings: "GET /2015-03-31/event-source-mappings",
      ListFunctionEventInvokeConfigs:
        "GET /2019-09-25/functions/{FunctionName}/event-invoke-config/list",
      ListFunctionUrlConfigs: "GET /2021-10-31/functions/{FunctionName}/urls",
      ListFunctions: "GET /2015-03-31/functions",
      ListFunctionsByCodeSigningConfig:
        "GET /2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions",
      ListLayerVersions: "GET /2018-10-31/layers/{LayerName}/versions",
      ListLayers: "GET /2018-10-31/layers",
      ListProvisionedConcurrencyConfigs:
        "GET /2019-09-30/functions/{FunctionName}/provisioned-concurrency?List=ALL",
      ListVersionsByFunction:
        "GET /2015-03-31/functions/{FunctionName}/versions",
      PublishLayerVersion: "POST /2018-10-31/layers/{LayerName}/versions",
      PublishVersion: "POST /2015-03-31/functions/{FunctionName}/versions",
      PutFunctionCodeSigningConfig:
        "PUT /2020-06-30/functions/{FunctionName}/code-signing-config",
      PutFunctionConcurrency:
        "PUT /2017-10-31/functions/{FunctionName}/concurrency",
      PutFunctionEventInvokeConfig:
        "PUT /2019-09-25/functions/{FunctionName}/event-invoke-config",
      PutFunctionRecursionConfig:
        "PUT /2024-08-31/functions/{FunctionName}/recursion-config",
      PutProvisionedConcurrencyConfig:
        "PUT /2019-09-30/functions/{FunctionName}/provisioned-concurrency",
      PutRuntimeManagementConfig:
        "PUT /2021-07-20/functions/{FunctionName}/runtime-management-config",
      RemoveLayerVersionPermission:
        "DELETE /2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}",
      RemovePermission:
        "DELETE /2015-03-31/functions/{FunctionName}/policy/{StatementId}",
      UpdateAlias: "PUT /2015-03-31/functions/{FunctionName}/aliases/{Name}",
      UpdateCodeSigningConfig:
        "PUT /2020-04-22/code-signing-configs/{CodeSigningConfigArn}",
      UpdateEventSourceMapping: "PUT /2015-03-31/event-source-mappings/{UUID}",
      UpdateFunctionCode: "PUT /2015-03-31/functions/{FunctionName}/code",
      UpdateFunctionConfiguration:
        "PUT /2015-03-31/functions/{FunctionName}/configuration",
      UpdateFunctionEventInvokeConfig:
        "POST /2019-09-25/functions/{FunctionName}/event-invoke-config",
      UpdateFunctionUrlConfig: "PUT /2021-10-31/functions/{FunctionName}/url",
    },
  },
  launchwizard: {
    sdkId: "Launch Wizard",
    version: "2018-05-10",
    arnNamespace: "launchwizard",
    cloudTrailEventSource: "launchwizard.amazonaws.com",
    endpointPrefix: "launchwizard",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateDeployment: "POST /createDeployment",
      DeleteDeployment: "POST /deleteDeployment",
      GetDeployment: "POST /getDeployment",
      GetWorkload: "POST /getWorkload",
      GetWorkloadDeploymentPattern: "POST /getWorkloadDeploymentPattern",
      ListDeploymentEvents: "POST /listDeploymentEvents",
      ListDeployments: "POST /listDeployments",
      ListWorkloadDeploymentPatterns: "POST /listWorkloadDeploymentPatterns",
      ListWorkloads: "POST /listWorkloads",
    },
  },
  lexmodelbuildingservice: {
    sdkId: "Lex Model Building Service",
    version: "2017-04-19",
    arnNamespace: "lex",
    cloudTrailEventSource: "lexmodelbuildingservice.amazonaws.com",
    endpointPrefix: "models.lex",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateBotVersion: "POST /bots/{name}/versions",
      CreateIntentVersion: "POST /intents/{name}/versions",
      CreateSlotTypeVersion: "POST /slottypes/{name}/versions",
      DeleteBot: "DELETE /bots/{name}",
      DeleteBotAlias: "DELETE /bots/{botName}/aliases/{name}",
      DeleteBotChannelAssociation:
        "DELETE /bots/{botName}/aliases/{botAlias}/channels/{name}",
      DeleteBotVersion: "DELETE /bots/{name}/versions/{version}",
      DeleteIntent: "DELETE /intents/{name}",
      DeleteIntentVersion: "DELETE /intents/{name}/versions/{version}",
      DeleteSlotType: "DELETE /slottypes/{name}",
      DeleteSlotTypeVersion: "DELETE /slottypes/{name}/version/{version}",
      DeleteUtterances: "DELETE /bots/{botName}/utterances/{userId}",
      GetBot: "GET /bots/{name}/versions/{versionOrAlias}",
      GetBotAlias: "GET /bots/{botName}/aliases/{name}",
      GetBotAliases: "GET /bots/{botName}/aliases",
      GetBotChannelAssociation:
        "GET /bots/{botName}/aliases/{botAlias}/channels/{name}",
      GetBotChannelAssociations:
        "GET /bots/{botName}/aliases/{botAlias}/channels",
      GetBots: "GET /bots",
      GetBotVersions: "GET /bots/{name}/versions",
      GetBuiltinIntent: "GET /builtins/intents/{signature}",
      GetBuiltinIntents: "GET /builtins/intents",
      GetBuiltinSlotTypes: "GET /builtins/slottypes",
      GetExport: "GET /exports",
      GetImport: "GET /imports/{importId}",
      GetIntent: "GET /intents/{name}/versions/{version}",
      GetIntents: "GET /intents",
      GetIntentVersions: "GET /intents/{name}/versions",
      GetMigration: "GET /migrations/{migrationId}",
      GetMigrations: "GET /migrations",
      GetSlotType: "GET /slottypes/{name}/versions/{version}",
      GetSlotTypes: "GET /slottypes",
      GetSlotTypeVersions: "GET /slottypes/{name}/versions",
      GetUtterancesView: "GET /bots/{botName}/utterances?view=aggregation",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutBot: "PUT /bots/{name}/versions/$LATEST",
      PutBotAlias: "PUT /bots/{botName}/aliases/{name}",
      PutIntent: "PUT /intents/{name}/versions/$LATEST",
      PutSlotType: "PUT /slottypes/{name}/versions/$LATEST",
      StartImport: "POST /imports",
      StartMigration: "POST /migrations",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
    },
  },
  lexmodelsv2: {
    sdkId: "Lex Models V2",
    version: "2020-08-07",
    arnNamespace: "lex",
    cloudTrailEventSource: "lexmodelsv2.amazonaws.com",
    endpointPrefix: "models-v2-lex",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchCreateCustomVocabularyItem:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate",
      BatchDeleteCustomVocabularyItem:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete",
      BatchUpdateCustomVocabularyItem:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate",
      BuildBotLocale:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
      CreateBot: "PUT /bots",
      CreateBotAlias: "PUT /bots/{botId}/botaliases",
      CreateBotLocale: "PUT /bots/{botId}/botversions/{botVersion}/botlocales",
      CreateBotReplica: "PUT /bots/{botId}/replicas",
      CreateBotVersion: "PUT /bots/{botId}/botversions",
      CreateExport: "PUT /exports",
      CreateIntent:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents",
      CreateResourcePolicy: "POST /policy/{resourceArn}",
      CreateResourcePolicyStatement: "POST /policy/{resourceArn}/statements",
      CreateSlot:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots",
      CreateSlotType:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes",
      CreateTestSetDiscrepancyReport:
        "POST /testsets/{testSetId}/testsetdiscrepancy",
      CreateUploadUrl: "POST /createuploadurl",
      DeleteBot: "DELETE /bots/{botId}",
      DeleteBotAlias: "DELETE /bots/{botId}/botaliases/{botAliasId}",
      DeleteBotLocale:
        "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
      DeleteBotReplica: "DELETE /bots/{botId}/replicas/{replicaRegion}",
      DeleteBotVersion: "DELETE /bots/{botId}/botversions/{botVersion}",
      DeleteCustomVocabulary:
        "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary",
      DeleteExport: "DELETE /exports/{exportId}",
      DeleteImport: "DELETE /imports/{importId}",
      DeleteIntent:
        "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
      DeleteResourcePolicy: "DELETE /policy/{resourceArn}",
      DeleteResourcePolicyStatement:
        "DELETE /policy/{resourceArn}/statements/{statementId}",
      DeleteSlot:
        "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
      DeleteSlotType:
        "DELETE /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
      DeleteTestSet: "DELETE /testsets/{testSetId}",
      DeleteUtterances: "DELETE /bots/{botId}/utterances",
      DescribeBot: "GET /bots/{botId}",
      DescribeBotAlias: "GET /bots/{botId}/botaliases/{botAliasId}",
      DescribeBotLocale:
        "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
      DescribeBotRecommendation:
        "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
      DescribeBotReplica: "GET /bots/{botId}/replicas/{replicaRegion}",
      DescribeBotResourceGeneration:
        "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}",
      DescribeBotVersion: "GET /bots/{botId}/botversions/{botVersion}",
      DescribeCustomVocabularyMetadata:
        "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata",
      DescribeExport: "GET /exports/{exportId}",
      DescribeImport: "GET /imports/{importId}",
      DescribeIntent:
        "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
      DescribeResourcePolicy: "GET /policy/{resourceArn}",
      DescribeSlot:
        "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
      DescribeSlotType:
        "GET /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
      DescribeTestExecution: "GET /testexecutions/{testExecutionId}",
      DescribeTestSet: "GET /testsets/{testSetId}",
      DescribeTestSetDiscrepancyReport:
        "GET /testsetdiscrepancy/{testSetDiscrepancyReportId}",
      DescribeTestSetGeneration:
        "GET /testsetgenerations/{testSetGenerationId}",
      GenerateBotElement:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generate",
      GetTestExecutionArtifactsUrl:
        "GET /testexecutions/{testExecutionId}/artifacturl",
      ListAggregatedUtterances: "POST /bots/{botId}/aggregatedutterances",
      ListBotAliases: "POST /bots/{botId}/botaliases",
      ListBotAliasReplicas:
        "POST /bots/{botId}/replicas/{replicaRegion}/botaliases",
      ListBotLocales: "POST /bots/{botId}/botversions/{botVersion}/botlocales",
      ListBotRecommendations:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations",
      ListBotReplicas: "POST /bots/{botId}/replicas",
      ListBotResourceGenerations:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations",
      ListBots: "POST /bots",
      ListBotVersionReplicas:
        "POST /bots/{botId}/replicas/{replicaRegion}/botversions",
      ListBotVersions: "POST /bots/{botId}/botversions",
      ListBuiltInIntents: "POST /builtins/locales/{localeId}/intents",
      ListBuiltInSlotTypes: "POST /builtins/locales/{localeId}/slottypes",
      ListCustomVocabularyItems:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list",
      ListExports: "POST /exports",
      ListImports: "POST /imports",
      ListIntentMetrics: "POST /bots/{botId}/analytics/intentmetrics",
      ListIntentPaths: "POST /bots/{botId}/analytics/intentpaths",
      ListIntents:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents",
      ListIntentStageMetrics: "POST /bots/{botId}/analytics/intentstagemetrics",
      ListRecommendedIntents:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents",
      ListSessionAnalyticsData: "POST /bots/{botId}/analytics/sessions",
      ListSessionMetrics: "POST /bots/{botId}/analytics/sessionmetrics",
      ListSlots:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots",
      ListSlotTypes:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes",
      ListTagsForResource: "GET /tags/{resourceARN}",
      ListTestExecutionResultItems:
        "POST /testexecutions/{testExecutionId}/results",
      ListTestExecutions: "POST /testexecutions",
      ListTestSetRecords: "POST /testsets/{testSetId}/records",
      ListTestSets: "POST /testsets",
      ListUtteranceAnalyticsData: "POST /bots/{botId}/analytics/utterances",
      ListUtteranceMetrics: "POST /bots/{botId}/analytics/utterancemetrics",
      SearchAssociatedTranscripts:
        "POST /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts",
      StartBotRecommendation:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations",
      StartBotResourceGeneration:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/startgeneration",
      StartImport: "PUT /imports",
      StartTestExecution: "POST /testsets/{testSetId}/testexecutions",
      StartTestSetGeneration: "PUT /testsetgenerations",
      StopBotRecommendation:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation",
      TagResource: "POST /tags/{resourceARN}",
      UntagResource: "DELETE /tags/{resourceARN}",
      UpdateBot: "PUT /bots/{botId}",
      UpdateBotAlias: "PUT /bots/{botId}/botaliases/{botAliasId}",
      UpdateBotLocale:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}",
      UpdateBotRecommendation:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
      UpdateExport: "PUT /exports/{exportId}",
      UpdateIntent:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}",
      UpdateResourcePolicy: "PUT /policy/{resourceArn}",
      UpdateSlot:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
      UpdateSlotType:
        "PUT /bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}",
      UpdateTestSet: "PUT /testsets/{testSetId}",
    },
  },
  lexruntimeservice: {
    sdkId: "Lex Runtime Service",
    version: "2016-11-28",
    arnNamespace: "lex",
    cloudTrailEventSource: "lexruntimeservice.amazonaws.com",
    endpointPrefix: "runtime.lex",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteSession:
        "DELETE /bot/{botName}/alias/{botAlias}/user/{userId}/session",
      GetSession: "GET /bot/{botName}/alias/{botAlias}/user/{userId}/session",
      PostContent: {
        http: "POST /bot/{botName}/alias/{botAlias}/user/{userId}/content",
        traits: {
          contentType: "Content-Type",
          intentName: "x-amz-lex-intent-name",
          nluIntentConfidence: "x-amz-lex-nlu-intent-confidence",
          alternativeIntents: "x-amz-lex-alternative-intents",
          slots: "x-amz-lex-slots",
          sessionAttributes: "x-amz-lex-session-attributes",
          sentimentResponse: "x-amz-lex-sentiment",
          message: "x-amz-lex-message",
          encodedMessage: "x-amz-lex-encoded-message",
          messageFormat: "x-amz-lex-message-format",
          dialogState: "x-amz-lex-dialog-state",
          slotToElicit: "x-amz-lex-slot-to-elicit",
          inputTranscript: "x-amz-lex-input-transcript",
          encodedInputTranscript: "x-amz-lex-encoded-input-transcript",
          audioStream: "httpPayload",
          botVersion: "x-amz-lex-bot-version",
          sessionId: "x-amz-lex-session-id",
          activeContexts: "x-amz-lex-active-contexts",
        },
      },
      PostText: "POST /bot/{botName}/alias/{botAlias}/user/{userId}/text",
      PutSession: {
        http: "POST /bot/{botName}/alias/{botAlias}/user/{userId}/session",
        traits: {
          contentType: "Content-Type",
          intentName: "x-amz-lex-intent-name",
          slots: "x-amz-lex-slots",
          sessionAttributes: "x-amz-lex-session-attributes",
          message: "x-amz-lex-message",
          encodedMessage: "x-amz-lex-encoded-message",
          messageFormat: "x-amz-lex-message-format",
          dialogState: "x-amz-lex-dialog-state",
          slotToElicit: "x-amz-lex-slot-to-elicit",
          audioStream: "httpPayload",
          sessionId: "x-amz-lex-session-id",
          activeContexts: "x-amz-lex-active-contexts",
        },
      },
    },
  },
  lexruntimev2: {
    sdkId: "Lex Runtime V2",
    version: "2020-08-07",
    arnNamespace: "lex",
    cloudTrailEventSource: "lexruntimev2.amazonaws.com",
    endpointPrefix: "runtime-v2-lex",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteSession:
        "DELETE /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
      GetSession:
        "GET /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
      PutSession: {
        http: "POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}",
        traits: {
          contentType: "Content-Type",
          messages: "x-amz-lex-messages",
          sessionState: "x-amz-lex-session-state",
          requestAttributes: "x-amz-lex-request-attributes",
          sessionId: "x-amz-lex-session-id",
          audioStream: "httpPayload",
        },
      },
      RecognizeText:
        "POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text",
      RecognizeUtterance: {
        http: "POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance",
        traits: {
          inputMode: "x-amz-lex-input-mode",
          contentType: "Content-Type",
          messages: "x-amz-lex-messages",
          interpretations: "x-amz-lex-interpretations",
          sessionState: "x-amz-lex-session-state",
          requestAttributes: "x-amz-lex-request-attributes",
          sessionId: "x-amz-lex-session-id",
          inputTranscript: "x-amz-lex-input-transcript",
          audioStream: "httpPayload",
          recognizedBotMember: "x-amz-lex-recognized-bot-member",
        },
      },
      StartConversation: {
        http: "POST /bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/conversation",
        traits: {
          responseEventStream: "httpPayload",
        },
      },
    },
  },
  licensemanager: {
    sdkId: "License Manager",
    version: "2018-08-01",
    arnNamespace: "license-manager",
    cloudTrailEventSource: "license-manager.amazonaws.com",
    endpointPrefix: "license-manager",
    protocol: "awsJson1_1",
    targetPrefix: "AWSLicenseManager",
  },
  licensemanagerlinuxsubscriptions: {
    sdkId: "License Manager Linux Subscriptions",
    version: "2018-05-10",
    arnNamespace: "license-manager-linux-subscriptions",
    cloudTrailEventSource: "license-manager-linux-subscriptions.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeregisterSubscriptionProvider:
        "POST /subscription/DeregisterSubscriptionProvider",
      GetRegisteredSubscriptionProvider:
        "POST /subscription/GetRegisteredSubscriptionProvider",
      GetServiceSettings: "POST /subscription/GetServiceSettings",
      ListLinuxSubscriptionInstances:
        "POST /subscription/ListLinuxSubscriptionInstances",
      ListLinuxSubscriptions: "POST /subscription/ListLinuxSubscriptions",
      ListRegisteredSubscriptionProviders:
        "POST /subscription/ListRegisteredSubscriptionProviders",
      ListTagsForResource: "GET /tags/{resourceArn}",
      RegisterSubscriptionProvider:
        "POST /subscription/RegisterSubscriptionProvider",
      TagResource: "PUT /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateServiceSettings: "POST /subscription/UpdateServiceSettings",
    },
  },
  licensemanagerusersubscriptions: {
    sdkId: "License Manager User Subscriptions",
    version: "2018-05-10",
    arnNamespace: "license-manager-user-subscriptions",
    cloudTrailEventSource: "license-manager-user-subscriptions.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateUser: "POST /user/AssociateUser",
      CreateLicenseServerEndpoint:
        "POST /license-server/CreateLicenseServerEndpoint",
      DeleteLicenseServerEndpoint:
        "POST /license-server/DeleteLicenseServerEndpoint",
      DeregisterIdentityProvider:
        "POST /identity-provider/DeregisterIdentityProvider",
      DisassociateUser: "POST /user/DisassociateUser",
      ListIdentityProviders: "POST /identity-provider/ListIdentityProviders",
      ListInstances: "POST /instance/ListInstances",
      ListLicenseServerEndpoints:
        "POST /license-server/ListLicenseServerEndpoints",
      ListProductSubscriptions: "POST /user/ListProductSubscriptions",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      ListUserAssociations: "POST /user/ListUserAssociations",
      RegisterIdentityProvider:
        "POST /identity-provider/RegisterIdentityProvider",
      StartProductSubscription: "POST /user/StartProductSubscription",
      StopProductSubscription: "POST /user/StopProductSubscription",
      TagResource: "PUT /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateIdentityProviderSettings:
        "POST /identity-provider/UpdateIdentityProviderSettings",
    },
  },
  lightsail: {
    sdkId: "Lightsail",
    version: "2016-11-28",
    arnNamespace: "lightsail",
    cloudTrailEventSource: "lightsail.amazonaws.com",
    endpointPrefix: "lightsail",
    protocol: "awsJson1_1",
    targetPrefix: "Lightsail_20161128",
  },
  location: {
    sdkId: "Location",
    version: "2020-11-19",
    arnNamespace: "geo",
    cloudTrailEventSource: "geo.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateTrackerConsumer:
        "POST /tracking/v0/trackers/{TrackerName}/consumers",
      BatchDeleteDevicePositionHistory:
        "POST /tracking/v0/trackers/{TrackerName}/delete-positions",
      BatchDeleteGeofence:
        "POST /geofencing/v0/collections/{CollectionName}/delete-geofences",
      BatchEvaluateGeofences:
        "POST /geofencing/v0/collections/{CollectionName}/positions",
      BatchGetDevicePosition:
        "POST /tracking/v0/trackers/{TrackerName}/get-positions",
      BatchPutGeofence:
        "POST /geofencing/v0/collections/{CollectionName}/put-geofences",
      BatchUpdateDevicePosition:
        "POST /tracking/v0/trackers/{TrackerName}/positions",
      CalculateRoute:
        "POST /routes/v0/calculators/{CalculatorName}/calculate/route",
      CalculateRouteMatrix:
        "POST /routes/v0/calculators/{CalculatorName}/calculate/route-matrix",
      CreateGeofenceCollection: "POST /geofencing/v0/collections",
      CreateKey: "POST /metadata/v0/keys",
      CreateMap: "POST /maps/v0/maps",
      CreatePlaceIndex: "POST /places/v0/indexes",
      CreateRouteCalculator: "POST /routes/v0/calculators",
      CreateTracker: "POST /tracking/v0/trackers",
      DeleteGeofenceCollection:
        "DELETE /geofencing/v0/collections/{CollectionName}",
      DeleteKey: "DELETE /metadata/v0/keys/{KeyName}",
      DeleteMap: "DELETE /maps/v0/maps/{MapName}",
      DeletePlaceIndex: "DELETE /places/v0/indexes/{IndexName}",
      DeleteRouteCalculator: "DELETE /routes/v0/calculators/{CalculatorName}",
      DeleteTracker: "DELETE /tracking/v0/trackers/{TrackerName}",
      DescribeGeofenceCollection:
        "GET /geofencing/v0/collections/{CollectionName}",
      DescribeKey: "GET /metadata/v0/keys/{KeyName}",
      DescribeMap: "GET /maps/v0/maps/{MapName}",
      DescribePlaceIndex: "GET /places/v0/indexes/{IndexName}",
      DescribeRouteCalculator: "GET /routes/v0/calculators/{CalculatorName}",
      DescribeTracker: "GET /tracking/v0/trackers/{TrackerName}",
      DisassociateTrackerConsumer:
        "DELETE /tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}",
      ForecastGeofenceEvents:
        "POST /geofencing/v0/collections/{CollectionName}/forecast-geofence-events",
      GetDevicePosition:
        "GET /tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest",
      GetDevicePositionHistory:
        "POST /tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions",
      GetGeofence:
        "GET /geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}",
      GetMapGlyphs: {
        http: "GET /maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}",
        traits: {
          Blob: "httpPayload",
          ContentType: "Content-Type",
          CacheControl: "Cache-Control",
        },
      },
      GetMapSprites: {
        http: "GET /maps/v0/maps/{MapName}/sprites/{FileName}",
        traits: {
          Blob: "httpPayload",
          ContentType: "Content-Type",
          CacheControl: "Cache-Control",
        },
      },
      GetMapStyleDescriptor: {
        http: "GET /maps/v0/maps/{MapName}/style-descriptor",
        traits: {
          Blob: "httpPayload",
          ContentType: "Content-Type",
          CacheControl: "Cache-Control",
        },
      },
      GetMapTile: {
        http: "GET /maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}",
        traits: {
          Blob: "httpPayload",
          ContentType: "Content-Type",
          CacheControl: "Cache-Control",
        },
      },
      GetPlace: "GET /places/v0/indexes/{IndexName}/places/{PlaceId}",
      ListDevicePositions:
        "POST /tracking/v0/trackers/{TrackerName}/list-positions",
      ListGeofenceCollections: "POST /geofencing/v0/list-collections",
      ListGeofences:
        "POST /geofencing/v0/collections/{CollectionName}/list-geofences",
      ListKeys: "POST /metadata/v0/list-keys",
      ListMaps: "POST /maps/v0/list-maps",
      ListPlaceIndexes: "POST /places/v0/list-indexes",
      ListRouteCalculators: "POST /routes/v0/list-calculators",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      ListTrackerConsumers:
        "POST /tracking/v0/trackers/{TrackerName}/list-consumers",
      ListTrackers: "POST /tracking/v0/list-trackers",
      PutGeofence:
        "PUT /geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}",
      SearchPlaceIndexForPosition:
        "POST /places/v0/indexes/{IndexName}/search/position",
      SearchPlaceIndexForSuggestions:
        "POST /places/v0/indexes/{IndexName}/search/suggestions",
      SearchPlaceIndexForText:
        "POST /places/v0/indexes/{IndexName}/search/text",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateGeofenceCollection:
        "PATCH /geofencing/v0/collections/{CollectionName}",
      UpdateKey: "PATCH /metadata/v0/keys/{KeyName}",
      UpdateMap: "PATCH /maps/v0/maps/{MapName}",
      UpdatePlaceIndex: "PATCH /places/v0/indexes/{IndexName}",
      UpdateRouteCalculator: "PATCH /routes/v0/calculators/{CalculatorName}",
      UpdateTracker: "PATCH /tracking/v0/trackers/{TrackerName}",
      VerifyDevicePosition:
        "POST /tracking/v0/trackers/{TrackerName}/positions/verify",
    },
  },
  lookoutequipment: {
    sdkId: "LookoutEquipment",
    version: "2020-12-15",
    arnNamespace: "lookoutequipment",
    cloudTrailEventSource: "lookoutequipment.amazonaws.com",
    endpointPrefix: "lookoutequipment",
    protocol: "awsJson1_0",
    targetPrefix: "AWSLookoutEquipmentFrontendService",
  },
  lookoutmetrics: {
    sdkId: "LookoutMetrics",
    version: "2017-07-25",
    arnNamespace: "lookoutmetrics",
    cloudTrailEventSource: "lookoutmetrics.amazonaws.com",
    endpointPrefix: "lookoutmetrics",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ActivateAnomalyDetector: "POST /ActivateAnomalyDetector",
      BackTestAnomalyDetector: "POST /BackTestAnomalyDetector",
      CreateAlert: "POST /CreateAlert",
      CreateAnomalyDetector: "POST /CreateAnomalyDetector",
      CreateMetricSet: "POST /CreateMetricSet",
      DeactivateAnomalyDetector: "POST /DeactivateAnomalyDetector",
      DeleteAlert: "POST /DeleteAlert",
      DeleteAnomalyDetector: "POST /DeleteAnomalyDetector",
      DescribeAlert: "POST /DescribeAlert",
      DescribeAnomalyDetectionExecutions:
        "POST /DescribeAnomalyDetectionExecutions",
      DescribeAnomalyDetector: "POST /DescribeAnomalyDetector",
      DescribeMetricSet: "POST /DescribeMetricSet",
      DetectMetricSetConfig: "POST /DetectMetricSetConfig",
      GetAnomalyGroup: "POST /GetAnomalyGroup",
      GetDataQualityMetrics: "POST /GetDataQualityMetrics",
      GetFeedback: "POST /GetFeedback",
      GetSampleData: "POST /GetSampleData",
      ListAlerts: "POST /ListAlerts",
      ListAnomalyDetectors: "POST /ListAnomalyDetectors",
      ListAnomalyGroupRelatedMetrics: "POST /ListAnomalyGroupRelatedMetrics",
      ListAnomalyGroupSummaries: "POST /ListAnomalyGroupSummaries",
      ListAnomalyGroupTimeSeries: "POST /ListAnomalyGroupTimeSeries",
      ListMetricSets: "POST /ListMetricSets",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      PutFeedback: "POST /PutFeedback",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateAlert: "POST /UpdateAlert",
      UpdateAnomalyDetector: "POST /UpdateAnomalyDetector",
      UpdateMetricSet: "POST /UpdateMetricSet",
    },
  },
  lookoutvision: {
    sdkId: "LookoutVision",
    version: "2020-11-20",
    arnNamespace: "lookoutvision",
    cloudTrailEventSource: "lookoutvision.amazonaws.com",
    endpointPrefix: "lookoutvision",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateDataset: "POST /2020-11-20/projects/{ProjectName}/datasets",
      CreateModel: "POST /2020-11-20/projects/{ProjectName}/models",
      CreateProject: "POST /2020-11-20/projects",
      DeleteDataset:
        "DELETE /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}",
      DeleteModel:
        "DELETE /2020-11-20/projects/{ProjectName}/models/{ModelVersion}",
      DeleteProject: "DELETE /2020-11-20/projects/{ProjectName}",
      DescribeDataset:
        "GET /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}",
      DescribeModel:
        "GET /2020-11-20/projects/{ProjectName}/models/{ModelVersion}",
      DescribeModelPackagingJob:
        "GET /2020-11-20/projects/{ProjectName}/modelpackagingjobs/{JobName}",
      DescribeProject: "GET /2020-11-20/projects/{ProjectName}",
      DetectAnomalies:
        "POST /2020-11-20/projects/{ProjectName}/models/{ModelVersion}/detect",
      ListDatasetEntries:
        "GET /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries",
      ListModelPackagingJobs:
        "GET /2020-11-20/projects/{ProjectName}/modelpackagingjobs",
      ListModels: "GET /2020-11-20/projects/{ProjectName}/models",
      ListProjects: "GET /2020-11-20/projects",
      ListTagsForResource: "GET /2020-11-20/tags/{ResourceArn}",
      StartModel:
        "POST /2020-11-20/projects/{ProjectName}/models/{ModelVersion}/start",
      StartModelPackagingJob:
        "POST /2020-11-20/projects/{ProjectName}/modelpackagingjobs",
      StopModel:
        "POST /2020-11-20/projects/{ProjectName}/models/{ModelVersion}/stop",
      TagResource: "POST /2020-11-20/tags/{ResourceArn}",
      UntagResource: "DELETE /2020-11-20/tags/{ResourceArn}",
      UpdateDatasetEntries:
        "PATCH /2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries",
    },
  },
  m2: {
    sdkId: "m2",
    version: "2021-04-28",
    arnNamespace: "m2",
    cloudTrailEventSource: "m2.amazonaws.com",
    endpointPrefix: "m2",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetSignedBluinsightsUrl: "GET /signed-bi-url",
      ListEngineVersions: "GET /engine-versions",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CancelBatchJobExecution:
        "POST /applications/{applicationId}/batch-job-executions/{executionId}/cancel",
      CreateApplication: "POST /applications",
      CreateDataSetExportTask:
        "POST /applications/{applicationId}/dataset-export-task",
      CreateDataSetImportTask:
        "POST /applications/{applicationId}/dataset-import-task",
      CreateDeployment: "POST /applications/{applicationId}/deployments",
      CreateEnvironment: "POST /environments",
      DeleteApplication: "DELETE /applications/{applicationId}",
      DeleteApplicationFromEnvironment:
        "DELETE /applications/{applicationId}/environment/{environmentId}",
      DeleteEnvironment: "DELETE /environments/{environmentId}",
      GetApplication: "GET /applications/{applicationId}",
      GetApplicationVersion:
        "GET /applications/{applicationId}/versions/{applicationVersion}",
      GetBatchJobExecution:
        "GET /applications/{applicationId}/batch-job-executions/{executionId}",
      GetDataSetDetails:
        "GET /applications/{applicationId}/datasets/{dataSetName}",
      GetDataSetExportTask:
        "GET /applications/{applicationId}/dataset-export-tasks/{taskId}",
      GetDataSetImportTask:
        "GET /applications/{applicationId}/dataset-import-tasks/{taskId}",
      GetDeployment:
        "GET /applications/{applicationId}/deployments/{deploymentId}",
      GetEnvironment: "GET /environments/{environmentId}",
      ListApplicationVersions: "GET /applications/{applicationId}/versions",
      ListApplications: "GET /applications",
      ListBatchJobDefinitions:
        "GET /applications/{applicationId}/batch-job-definitions",
      ListBatchJobExecutions:
        "GET /applications/{applicationId}/batch-job-executions",
      ListBatchJobRestartPoints:
        "GET /applications/{applicationId}/batch-job-executions/{executionId}/steps",
      ListDataSetExportHistory:
        "GET /applications/{applicationId}/dataset-export-tasks",
      ListDataSetImportHistory:
        "GET /applications/{applicationId}/dataset-import-tasks",
      ListDataSets: "GET /applications/{applicationId}/datasets",
      ListDeployments: "GET /applications/{applicationId}/deployments",
      ListEnvironments: "GET /environments",
      StartApplication: "POST /applications/{applicationId}/start",
      StartBatchJob: "POST /applications/{applicationId}/batch-job",
      StopApplication: "POST /applications/{applicationId}/stop",
      UpdateApplication: "PATCH /applications/{applicationId}",
      UpdateEnvironment: "PATCH /environments/{environmentId}",
    },
  },
  machinelearning: {
    sdkId: "Machine Learning",
    version: "2014-12-12",
    arnNamespace: "machinelearning",
    cloudTrailEventSource: "machinelearning.amazonaws.com",
    endpointPrefix: "machinelearning",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonML_20141212",
  },
  macie2: {
    sdkId: "Macie2",
    version: "2020-01-01",
    arnNamespace: "macie2",
    cloudTrailEventSource: "macie2.amazonaws.com",
    endpointPrefix: "macie2",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptInvitation: "POST /invitations/accept",
      BatchGetCustomDataIdentifiers: "POST /custom-data-identifiers/get",
      BatchUpdateAutomatedDiscoveryAccounts:
        "PATCH /automated-discovery/accounts",
      CreateAllowList: "POST /allow-lists",
      CreateClassificationJob: "POST /jobs",
      CreateCustomDataIdentifier: "POST /custom-data-identifiers",
      CreateFindingsFilter: "POST /findingsfilters",
      CreateInvitations: "POST /invitations",
      CreateMember: "POST /members",
      CreateSampleFindings: "POST /findings/sample",
      DeclineInvitations: "POST /invitations/decline",
      DeleteAllowList: "DELETE /allow-lists/{id}",
      DeleteCustomDataIdentifier: "DELETE /custom-data-identifiers/{id}",
      DeleteFindingsFilter: "DELETE /findingsfilters/{id}",
      DeleteInvitations: "POST /invitations/delete",
      DeleteMember: "DELETE /members/{id}",
      DescribeBuckets: "POST /datasources/s3",
      DescribeClassificationJob: "GET /jobs/{jobId}",
      DescribeOrganizationConfiguration: "GET /admin/configuration",
      DisableMacie: "DELETE /macie",
      DisableOrganizationAdminAccount: "DELETE /admin",
      DisassociateFromAdministratorAccount: "POST /administrator/disassociate",
      DisassociateFromMasterAccount: "POST /master/disassociate",
      DisassociateMember: "POST /members/disassociate/{id}",
      EnableMacie: "POST /macie",
      EnableOrganizationAdminAccount: "POST /admin",
      GetAdministratorAccount: "GET /administrator",
      GetAllowList: "GET /allow-lists/{id}",
      GetAutomatedDiscoveryConfiguration:
        "GET /automated-discovery/configuration",
      GetBucketStatistics: "POST /datasources/s3/statistics",
      GetClassificationExportConfiguration:
        "GET /classification-export-configuration",
      GetClassificationScope: "GET /classification-scopes/{id}",
      GetCustomDataIdentifier: "GET /custom-data-identifiers/{id}",
      GetFindings: "POST /findings/describe",
      GetFindingsFilter: "GET /findingsfilters/{id}",
      GetFindingsPublicationConfiguration:
        "GET /findings-publication-configuration",
      GetFindingStatistics: "POST /findings/statistics",
      GetInvitationsCount: "GET /invitations/count",
      GetMacieSession: "GET /macie",
      GetMasterAccount: "GET /master",
      GetMember: "GET /members/{id}",
      GetResourceProfile: "GET /resource-profiles",
      GetRevealConfiguration: "GET /reveal-configuration",
      GetSensitiveDataOccurrences: "GET /findings/{findingId}/reveal",
      GetSensitiveDataOccurrencesAvailability:
        "GET /findings/{findingId}/reveal/availability",
      GetSensitivityInspectionTemplate:
        "GET /templates/sensitivity-inspections/{id}",
      GetUsageStatistics: "POST /usage/statistics",
      GetUsageTotals: "GET /usage",
      ListAllowLists: "GET /allow-lists",
      ListAutomatedDiscoveryAccounts: "GET /automated-discovery/accounts",
      ListClassificationJobs: "POST /jobs/list",
      ListClassificationScopes: "GET /classification-scopes",
      ListCustomDataIdentifiers: "POST /custom-data-identifiers/list",
      ListFindings: "POST /findings",
      ListFindingsFilters: "GET /findingsfilters",
      ListInvitations: "GET /invitations",
      ListManagedDataIdentifiers: "POST /managed-data-identifiers/list",
      ListMembers: "GET /members",
      ListOrganizationAdminAccounts: "GET /admin",
      ListResourceProfileArtifacts: "GET /resource-profiles/artifacts",
      ListResourceProfileDetections: "GET /resource-profiles/detections",
      ListSensitivityInspectionTemplates:
        "GET /templates/sensitivity-inspections",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutClassificationExportConfiguration:
        "PUT /classification-export-configuration",
      PutFindingsPublicationConfiguration:
        "PUT /findings-publication-configuration",
      SearchResources: "POST /datasources/search-resources",
      TagResource: "POST /tags/{resourceArn}",
      TestCustomDataIdentifier: "POST /custom-data-identifiers/test",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateAllowList: "PUT /allow-lists/{id}",
      UpdateAutomatedDiscoveryConfiguration:
        "PUT /automated-discovery/configuration",
      UpdateClassificationJob: "PATCH /jobs/{jobId}",
      UpdateClassificationScope: "PATCH /classification-scopes/{id}",
      UpdateFindingsFilter: "PATCH /findingsfilters/{id}",
      UpdateMacieSession: "PATCH /macie",
      UpdateMemberSession: "PATCH /macie/members/{id}",
      UpdateOrganizationConfiguration: "PATCH /admin/configuration",
      UpdateResourceProfile: "PATCH /resource-profiles",
      UpdateResourceProfileDetections: "PATCH /resource-profiles/detections",
      UpdateRevealConfiguration: "PUT /reveal-configuration",
      UpdateSensitivityInspectionTemplate:
        "PUT /templates/sensitivity-inspections/{id}",
    },
  },
  mailmanager: {
    sdkId: "MailManager",
    version: "2023-10-17",
    arnNamespace: "ses",
    cloudTrailEventSource: "ses.amazonaws.com",
    endpointPrefix: "mail-manager",
    protocol: "awsJson1_0",
    targetPrefix: "MailManagerSvc",
  },
  managedblockchain: {
    sdkId: "ManagedBlockchain",
    version: "2018-09-24",
    arnNamespace: "managedblockchain",
    cloudTrailEventSource: "managedblockchain.amazonaws.com",
    endpointPrefix: "managedblockchain",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateAccessor: "POST /accessors",
      CreateMember: "POST /networks/{NetworkId}/members",
      CreateNetwork: "POST /networks",
      CreateNode: "POST /networks/{NetworkId}/nodes",
      CreateProposal: "POST /networks/{NetworkId}/proposals",
      DeleteAccessor: "DELETE /accessors/{AccessorId}",
      DeleteMember: "DELETE /networks/{NetworkId}/members/{MemberId}",
      DeleteNode: "DELETE /networks/{NetworkId}/nodes/{NodeId}",
      GetAccessor: "GET /accessors/{AccessorId}",
      GetMember: "GET /networks/{NetworkId}/members/{MemberId}",
      GetNetwork: "GET /networks/{NetworkId}",
      GetNode: "GET /networks/{NetworkId}/nodes/{NodeId}",
      GetProposal: "GET /networks/{NetworkId}/proposals/{ProposalId}",
      ListAccessors: "GET /accessors",
      ListInvitations: "GET /invitations",
      ListMembers: "GET /networks/{NetworkId}/members",
      ListNetworks: "GET /networks",
      ListNodes: "GET /networks/{NetworkId}/nodes",
      ListProposals: "GET /networks/{NetworkId}/proposals",
      ListProposalVotes:
        "GET /networks/{NetworkId}/proposals/{ProposalId}/votes",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      RejectInvitation: "DELETE /invitations/{InvitationId}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateMember: "PATCH /networks/{NetworkId}/members/{MemberId}",
      UpdateNode: "PATCH /networks/{NetworkId}/nodes/{NodeId}",
      VoteOnProposal: "POST /networks/{NetworkId}/proposals/{ProposalId}/votes",
    },
  },
  managedblockchainquery: {
    sdkId: "ManagedBlockchain Query",
    version: "2023-05-04",
    arnNamespace: "managedblockchain-query",
    cloudTrailEventSource: "managedblockchain-query.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetTokenBalance: "POST /batch-get-token-balance",
      GetAssetContract: "POST /get-asset-contract",
      GetTokenBalance: "POST /get-token-balance",
      GetTransaction: "POST /get-transaction",
      ListAssetContracts: "POST /list-asset-contracts",
      ListFilteredTransactionEvents: "POST /list-filtered-transaction-events",
      ListTokenBalances: "POST /list-token-balances",
      ListTransactionEvents: "POST /list-transaction-events",
      ListTransactions: "POST /list-transactions",
    },
  },
  marketplaceagreement: {
    sdkId: "Marketplace Agreement",
    version: "2020-03-01",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "agreement-marketplace",
    protocol: "awsJson1_0",
    targetPrefix: "AWSMPCommerceService_v20200301",
  },
  marketplacecatalog: {
    sdkId: "Marketplace Catalog",
    version: "2018-09-17",
    arnNamespace: "aws-marketplace",
    cloudTrailEventSource: "marketplacecatalog.amazonaws.com",
    endpointPrefix: "catalog.marketplace",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchDescribeEntities: "POST /BatchDescribeEntities",
      CancelChangeSet: "PATCH /CancelChangeSet",
      DeleteResourcePolicy: "DELETE /DeleteResourcePolicy",
      DescribeChangeSet: "GET /DescribeChangeSet",
      DescribeEntity: "GET /DescribeEntity",
      GetResourcePolicy: "GET /GetResourcePolicy",
      ListChangeSets: "POST /ListChangeSets",
      ListEntities: "POST /ListEntities",
      ListTagsForResource: "POST /ListTagsForResource",
      PutResourcePolicy: "POST /PutResourcePolicy",
      StartChangeSet: "POST /StartChangeSet",
      TagResource: "POST /TagResource",
      UntagResource: "POST /UntagResource",
    },
  },
  marketplacecommerceanalytics: {
    sdkId: "Marketplace Commerce Analytics",
    version: "2015-07-01",
    arnNamespace: "marketplacecommerceanalytics",
    cloudTrailEventSource: "marketplacecommerceanalytics.amazonaws.com",
    endpointPrefix: "marketplacecommerceanalytics",
    protocol: "awsJson1_1",
    targetPrefix: "MarketplaceCommerceAnalytics20150701",
  },
  marketplacedeployment: {
    sdkId: "Marketplace Deployment",
    version: "2023-01-25",
    arnNamespace: "aws-marketplace",
    cloudTrailEventSource: "aws-marketplace.amazonaws.com",
    endpointPrefix: "deployment-marketplace",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      PutDeploymentParameter:
        "POST /catalogs/{catalog}/products/{productId}/deployment-parameters",
    },
  },
  marketplaceentitlementservice: {
    sdkId: "Marketplace Entitlement Service",
    version: "2017-01-11",
    arnNamespace: "aws-marketplace",
    cloudTrailEventSource: "marketplaceentitlementservice.amazonaws.com",
    endpointPrefix: "entitlement.marketplace",
    protocol: "awsJson1_1",
    targetPrefix: "AWSMPEntitlementService",
  },
  marketplacemetering: {
    sdkId: "Marketplace Metering",
    version: "2016-01-14",
    arnNamespace: "aws-marketplace",
    cloudTrailEventSource: "marketplacemetering.amazonaws.com",
    endpointPrefix: "metering.marketplace",
    protocol: "awsJson1_1",
    targetPrefix: "AWSMPMeteringService",
  },
  marketplacereporting: {
    sdkId: "Marketplace Reporting",
    version: "2018-05-10",
    arnNamespace: "aws-marketplace",
    cloudTrailEventSource: "reporting-marketplace.amazonaws.com",
    endpointPrefix: "reporting-marketplace",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetBuyerDashboard: "POST /getBuyerDashboard",
    },
  },
  mediaconnect: {
    sdkId: "MediaConnect",
    version: "2018-11-14",
    arnNamespace: "mediaconnect",
    cloudTrailEventSource: "mediaconnect.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListEntitlements: "GET /v1/entitlements",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      AddBridgeOutputs: "POST /v1/bridges/{BridgeArn}/outputs",
      AddBridgeSources: "POST /v1/bridges/{BridgeArn}/sources",
      AddFlowMediaStreams: "POST /v1/flows/{FlowArn}/mediaStreams",
      AddFlowOutputs: "POST /v1/flows/{FlowArn}/outputs",
      AddFlowSources: "POST /v1/flows/{FlowArn}/source",
      AddFlowVpcInterfaces: "POST /v1/flows/{FlowArn}/vpcInterfaces",
      CreateBridge: "POST /v1/bridges",
      CreateFlow: "POST /v1/flows",
      CreateGateway: "POST /v1/gateways",
      DeleteBridge: "DELETE /v1/bridges/{BridgeArn}",
      DeleteFlow: "DELETE /v1/flows/{FlowArn}",
      DeleteGateway: "DELETE /v1/gateways/{GatewayArn}",
      DeregisterGatewayInstance:
        "DELETE /v1/gateway-instances/{GatewayInstanceArn}",
      DescribeBridge: "GET /v1/bridges/{BridgeArn}",
      DescribeFlow: "GET /v1/flows/{FlowArn}",
      DescribeFlowSourceMetadata: "GET /v1/flows/{FlowArn}/source-metadata",
      DescribeFlowSourceThumbnail: "GET /v1/flows/{FlowArn}/source-thumbnail",
      DescribeGateway: "GET /v1/gateways/{GatewayArn}",
      DescribeGatewayInstance: "GET /v1/gateway-instances/{GatewayInstanceArn}",
      DescribeOffering: "GET /v1/offerings/{OfferingArn}",
      DescribeReservation: "GET /v1/reservations/{ReservationArn}",
      GrantFlowEntitlements: "POST /v1/flows/{FlowArn}/entitlements",
      ListBridges: "GET /v1/bridges",
      ListFlows: "GET /v1/flows",
      ListGatewayInstances: "GET /v1/gateway-instances",
      ListGateways: "GET /v1/gateways",
      ListOfferings: "GET /v1/offerings",
      ListReservations: "GET /v1/reservations",
      PurchaseOffering: "POST /v1/offerings/{OfferingArn}",
      RemoveBridgeOutput: "DELETE /v1/bridges/{BridgeArn}/outputs/{OutputName}",
      RemoveBridgeSource: "DELETE /v1/bridges/{BridgeArn}/sources/{SourceName}",
      RemoveFlowMediaStream:
        "DELETE /v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}",
      RemoveFlowOutput: "DELETE /v1/flows/{FlowArn}/outputs/{OutputArn}",
      RemoveFlowSource: "DELETE /v1/flows/{FlowArn}/source/{SourceArn}",
      RemoveFlowVpcInterface:
        "DELETE /v1/flows/{FlowArn}/vpcInterfaces/{VpcInterfaceName}",
      RevokeFlowEntitlement:
        "DELETE /v1/flows/{FlowArn}/entitlements/{EntitlementArn}",
      StartFlow: "POST /v1/flows/start/{FlowArn}",
      StopFlow: "POST /v1/flows/stop/{FlowArn}",
      UpdateBridge: "PUT /v1/bridges/{BridgeArn}",
      UpdateBridgeOutput: "PUT /v1/bridges/{BridgeArn}/outputs/{OutputName}",
      UpdateBridgeSource: "PUT /v1/bridges/{BridgeArn}/sources/{SourceName}",
      UpdateBridgeState: "PUT /v1/bridges/{BridgeArn}/state",
      UpdateFlow: "PUT /v1/flows/{FlowArn}",
      UpdateFlowEntitlement:
        "PUT /v1/flows/{FlowArn}/entitlements/{EntitlementArn}",
      UpdateFlowMediaStream:
        "PUT /v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}",
      UpdateFlowOutput: "PUT /v1/flows/{FlowArn}/outputs/{OutputArn}",
      UpdateFlowSource: "PUT /v1/flows/{FlowArn}/source/{SourceArn}",
      UpdateGatewayInstance: "PUT /v1/gateway-instances/{GatewayInstanceArn}",
    },
  },
  mediaconvert: {
    sdkId: "MediaConvert",
    version: "2017-08-29",
    arnNamespace: "mediaconvert",
    cloudTrailEventSource: "mediaconvert.amazonaws.com",
    endpointPrefix: "mediaconvert",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateCertificate: "POST /2017-08-29/certificates",
      CancelJob: "DELETE /2017-08-29/jobs/{Id}",
      CreateJob: "POST /2017-08-29/jobs",
      CreateJobTemplate: "POST /2017-08-29/jobTemplates",
      CreatePreset: "POST /2017-08-29/presets",
      CreateQueue: "POST /2017-08-29/queues",
      DeleteJobTemplate: "DELETE /2017-08-29/jobTemplates/{Name}",
      DeletePolicy: "DELETE /2017-08-29/policy",
      DeletePreset: "DELETE /2017-08-29/presets/{Name}",
      DeleteQueue: "DELETE /2017-08-29/queues/{Name}",
      DescribeEndpoints: "POST /2017-08-29/endpoints",
      DisassociateCertificate: "DELETE /2017-08-29/certificates/{Arn}",
      GetJob: "GET /2017-08-29/jobs/{Id}",
      GetJobTemplate: "GET /2017-08-29/jobTemplates/{Name}",
      GetPolicy: "GET /2017-08-29/policy",
      GetPreset: "GET /2017-08-29/presets/{Name}",
      GetQueue: "GET /2017-08-29/queues/{Name}",
      ListJobs: "GET /2017-08-29/jobs",
      ListJobTemplates: "GET /2017-08-29/jobTemplates",
      ListPresets: "GET /2017-08-29/presets",
      ListQueues: "GET /2017-08-29/queues",
      ListTagsForResource: "GET /2017-08-29/tags/{Arn}",
      ListVersions: "GET /2017-08-29/versions",
      Probe: "POST /2017-08-29/probe",
      PutPolicy: "PUT /2017-08-29/policy",
      SearchJobs: "GET /2017-08-29/search",
      TagResource: "POST /2017-08-29/tags",
      UntagResource: "PUT /2017-08-29/tags/{Arn}",
      UpdateJobTemplate: "PUT /2017-08-29/jobTemplates/{Name}",
      UpdatePreset: "PUT /2017-08-29/presets/{Name}",
      UpdateQueue: "PUT /2017-08-29/queues/{Name}",
    },
  },
  medialive: {
    sdkId: "MediaLive",
    version: "2017-10-14",
    arnNamespace: "medialive",
    cloudTrailEventSource: "medialive.amazonaws.com",
    endpointPrefix: "medialive",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptInputDeviceTransfer:
        "POST /prod/inputDevices/{InputDeviceId}/accept",
      BatchDelete: "POST /prod/batch/delete",
      BatchStart: "POST /prod/batch/start",
      BatchStop: "POST /prod/batch/stop",
      BatchUpdateSchedule: "PUT /prod/channels/{ChannelId}/schedule",
      CancelInputDeviceTransfer:
        "POST /prod/inputDevices/{InputDeviceId}/cancel",
      ClaimDevice: "POST /prod/claimDevice",
      CreateChannel: "POST /prod/channels",
      CreateChannelPlacementGroup:
        "POST /prod/clusters/{ClusterId}/channelplacementgroups",
      CreateCloudWatchAlarmTemplate: "POST /prod/cloudwatch-alarm-templates",
      CreateCloudWatchAlarmTemplateGroup:
        "POST /prod/cloudwatch-alarm-template-groups",
      CreateCluster: "POST /prod/clusters",
      CreateEventBridgeRuleTemplate: "POST /prod/eventbridge-rule-templates",
      CreateEventBridgeRuleTemplateGroup:
        "POST /prod/eventbridge-rule-template-groups",
      CreateInput: "POST /prod/inputs",
      CreateInputSecurityGroup: "POST /prod/inputSecurityGroups",
      CreateMultiplex: "POST /prod/multiplexes",
      CreateMultiplexProgram: "POST /prod/multiplexes/{MultiplexId}/programs",
      CreateNetwork: "POST /prod/networks",
      CreateNode: "POST /prod/clusters/{ClusterId}/nodes",
      CreateNodeRegistrationScript:
        "POST /prod/clusters/{ClusterId}/nodeRegistrationScript",
      CreatePartnerInput: "POST /prod/inputs/{InputId}/partners",
      CreateSdiSource: "POST /prod/sdiSources",
      CreateSignalMap: "POST /prod/signal-maps",
      CreateTags: "POST /prod/tags/{ResourceArn}",
      DeleteChannel: "DELETE /prod/channels/{ChannelId}",
      DeleteChannelPlacementGroup:
        "DELETE /prod/clusters/{ClusterId}/channelplacementgroups/{ChannelPlacementGroupId}",
      DeleteCloudWatchAlarmTemplate:
        "DELETE /prod/cloudwatch-alarm-templates/{Identifier}",
      DeleteCloudWatchAlarmTemplateGroup:
        "DELETE /prod/cloudwatch-alarm-template-groups/{Identifier}",
      DeleteCluster: "DELETE /prod/clusters/{ClusterId}",
      DeleteEventBridgeRuleTemplate:
        "DELETE /prod/eventbridge-rule-templates/{Identifier}",
      DeleteEventBridgeRuleTemplateGroup:
        "DELETE /prod/eventbridge-rule-template-groups/{Identifier}",
      DeleteInput: "DELETE /prod/inputs/{InputId}",
      DeleteInputSecurityGroup:
        "DELETE /prod/inputSecurityGroups/{InputSecurityGroupId}",
      DeleteMultiplex: "DELETE /prod/multiplexes/{MultiplexId}",
      DeleteMultiplexProgram:
        "DELETE /prod/multiplexes/{MultiplexId}/programs/{ProgramName}",
      DeleteNetwork: "DELETE /prod/networks/{NetworkId}",
      DeleteNode: "DELETE /prod/clusters/{ClusterId}/nodes/{NodeId}",
      DeleteReservation: "DELETE /prod/reservations/{ReservationId}",
      DeleteSchedule: "DELETE /prod/channels/{ChannelId}/schedule",
      DeleteSdiSource: "DELETE /prod/sdiSources/{SdiSourceId}",
      DeleteSignalMap: "DELETE /prod/signal-maps/{Identifier}",
      DeleteTags: "DELETE /prod/tags/{ResourceArn}",
      DescribeAccountConfiguration: "GET /prod/accountConfiguration",
      DescribeChannel: "GET /prod/channels/{ChannelId}",
      DescribeChannelPlacementGroup:
        "GET /prod/clusters/{ClusterId}/channelplacementgroups/{ChannelPlacementGroupId}",
      DescribeCluster: "GET /prod/clusters/{ClusterId}",
      DescribeInput: "GET /prod/inputs/{InputId}",
      DescribeInputDevice: "GET /prod/inputDevices/{InputDeviceId}",
      DescribeInputDeviceThumbnail: {
        http: "GET /prod/inputDevices/{InputDeviceId}/thumbnailData",
        traits: {
          Body: "httpPayload",
          ContentType: "Content-Type",
          ContentLength: "Content-Length",
          ETag: "ETag",
          LastModified: "Last-Modified",
        },
      },
      DescribeInputSecurityGroup:
        "GET /prod/inputSecurityGroups/{InputSecurityGroupId}",
      DescribeMultiplex: "GET /prod/multiplexes/{MultiplexId}",
      DescribeMultiplexProgram:
        "GET /prod/multiplexes/{MultiplexId}/programs/{ProgramName}",
      DescribeNetwork: "GET /prod/networks/{NetworkId}",
      DescribeNode: "GET /prod/clusters/{ClusterId}/nodes/{NodeId}",
      DescribeOffering: "GET /prod/offerings/{OfferingId}",
      DescribeReservation: "GET /prod/reservations/{ReservationId}",
      DescribeSchedule: "GET /prod/channels/{ChannelId}/schedule",
      DescribeSdiSource: "GET /prod/sdiSources/{SdiSourceId}",
      DescribeThumbnails: "GET /prod/channels/{ChannelId}/thumbnails",
      GetCloudWatchAlarmTemplate:
        "GET /prod/cloudwatch-alarm-templates/{Identifier}",
      GetCloudWatchAlarmTemplateGroup:
        "GET /prod/cloudwatch-alarm-template-groups/{Identifier}",
      GetEventBridgeRuleTemplate:
        "GET /prod/eventbridge-rule-templates/{Identifier}",
      GetEventBridgeRuleTemplateGroup:
        "GET /prod/eventbridge-rule-template-groups/{Identifier}",
      GetSignalMap: "GET /prod/signal-maps/{Identifier}",
      ListChannelPlacementGroups:
        "GET /prod/clusters/{ClusterId}/channelplacementgroups",
      ListChannels: "GET /prod/channels",
      ListCloudWatchAlarmTemplateGroups:
        "GET /prod/cloudwatch-alarm-template-groups",
      ListCloudWatchAlarmTemplates: "GET /prod/cloudwatch-alarm-templates",
      ListClusters: "GET /prod/clusters",
      ListEventBridgeRuleTemplateGroups:
        "GET /prod/eventbridge-rule-template-groups",
      ListEventBridgeRuleTemplates: "GET /prod/eventbridge-rule-templates",
      ListInputDevices: "GET /prod/inputDevices",
      ListInputDeviceTransfers: "GET /prod/inputDeviceTransfers",
      ListInputs: "GET /prod/inputs",
      ListInputSecurityGroups: "GET /prod/inputSecurityGroups",
      ListMultiplexes: "GET /prod/multiplexes",
      ListMultiplexPrograms: "GET /prod/multiplexes/{MultiplexId}/programs",
      ListNetworks: "GET /prod/networks",
      ListNodes: "GET /prod/clusters/{ClusterId}/nodes",
      ListOfferings: "GET /prod/offerings",
      ListReservations: "GET /prod/reservations",
      ListSdiSources: "GET /prod/sdiSources",
      ListSignalMaps: "GET /prod/signal-maps",
      ListTagsForResource: "GET /prod/tags/{ResourceArn}",
      ListVersions: "GET /prod/versions",
      PurchaseOffering: "POST /prod/offerings/{OfferingId}/purchase",
      RebootInputDevice: "POST /prod/inputDevices/{InputDeviceId}/reboot",
      RejectInputDeviceTransfer:
        "POST /prod/inputDevices/{InputDeviceId}/reject",
      RestartChannelPipelines:
        "POST /prod/channels/{ChannelId}/restartChannelPipelines",
      StartChannel: "POST /prod/channels/{ChannelId}/start",
      StartDeleteMonitorDeployment:
        "DELETE /prod/signal-maps/{Identifier}/monitor-deployment",
      StartInputDevice: "POST /prod/inputDevices/{InputDeviceId}/start",
      StartInputDeviceMaintenanceWindow:
        "POST /prod/inputDevices/{InputDeviceId}/startInputDeviceMaintenanceWindow",
      StartMonitorDeployment:
        "POST /prod/signal-maps/{Identifier}/monitor-deployment",
      StartMultiplex: "POST /prod/multiplexes/{MultiplexId}/start",
      StartUpdateSignalMap: "PATCH /prod/signal-maps/{Identifier}",
      StopChannel: "POST /prod/channels/{ChannelId}/stop",
      StopInputDevice: "POST /prod/inputDevices/{InputDeviceId}/stop",
      StopMultiplex: "POST /prod/multiplexes/{MultiplexId}/stop",
      TransferInputDevice: "POST /prod/inputDevices/{InputDeviceId}/transfer",
      UpdateAccountConfiguration: "PUT /prod/accountConfiguration",
      UpdateChannel: "PUT /prod/channels/{ChannelId}",
      UpdateChannelClass: "PUT /prod/channels/{ChannelId}/channelClass",
      UpdateChannelPlacementGroup:
        "PUT /prod/clusters/{ClusterId}/channelplacementgroups/{ChannelPlacementGroupId}",
      UpdateCloudWatchAlarmTemplate:
        "PATCH /prod/cloudwatch-alarm-templates/{Identifier}",
      UpdateCloudWatchAlarmTemplateGroup:
        "PATCH /prod/cloudwatch-alarm-template-groups/{Identifier}",
      UpdateCluster: "PUT /prod/clusters/{ClusterId}",
      UpdateEventBridgeRuleTemplate:
        "PATCH /prod/eventbridge-rule-templates/{Identifier}",
      UpdateEventBridgeRuleTemplateGroup:
        "PATCH /prod/eventbridge-rule-template-groups/{Identifier}",
      UpdateInput: "PUT /prod/inputs/{InputId}",
      UpdateInputDevice: "PUT /prod/inputDevices/{InputDeviceId}",
      UpdateInputSecurityGroup:
        "PUT /prod/inputSecurityGroups/{InputSecurityGroupId}",
      UpdateMultiplex: "PUT /prod/multiplexes/{MultiplexId}",
      UpdateMultiplexProgram:
        "PUT /prod/multiplexes/{MultiplexId}/programs/{ProgramName}",
      UpdateNetwork: "PUT /prod/networks/{NetworkId}",
      UpdateNode: "PUT /prod/clusters/{ClusterId}/nodes/{NodeId}",
      UpdateNodeState: "PUT /prod/clusters/{ClusterId}/nodes/{NodeId}/state",
      UpdateReservation: "PUT /prod/reservations/{ReservationId}",
      UpdateSdiSource: "PUT /prod/sdiSources/{SdiSourceId}",
    },
  },
  mediapackage: {
    sdkId: "MediaPackage",
    version: "2017-10-12",
    arnNamespace: "mediapackage",
    cloudTrailEventSource: "mediapackage.amazonaws.com",
    endpointPrefix: "mediapackage",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ConfigureLogs: "PUT /channels/{Id}/configure_logs",
      CreateChannel: "POST /channels",
      CreateHarvestJob: "POST /harvest_jobs",
      CreateOriginEndpoint: "POST /origin_endpoints",
      DeleteChannel: "DELETE /channels/{Id}",
      DeleteOriginEndpoint: "DELETE /origin_endpoints/{Id}",
      DescribeChannel: "GET /channels/{Id}",
      DescribeHarvestJob: "GET /harvest_jobs/{Id}",
      DescribeOriginEndpoint: "GET /origin_endpoints/{Id}",
      ListChannels: "GET /channels",
      ListHarvestJobs: "GET /harvest_jobs",
      ListOriginEndpoints: "GET /origin_endpoints",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      RotateChannelCredentials: "PUT /channels/{Id}/credentials",
      RotateIngestEndpointCredentials:
        "PUT /channels/{Id}/ingest_endpoints/{IngestEndpointId}/credentials",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateChannel: "PUT /channels/{Id}",
      UpdateOriginEndpoint: "PUT /origin_endpoints/{Id}",
    },
  },
  mediapackagevod: {
    sdkId: "MediaPackage Vod",
    version: "2018-11-07",
    arnNamespace: "mediapackage-vod",
    cloudTrailEventSource: "mediapackagevod.amazonaws.com",
    endpointPrefix: "mediapackage-vod",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ConfigureLogs: "PUT /packaging_groups/{Id}/configure_logs",
      CreateAsset: "POST /assets",
      CreatePackagingConfiguration: "POST /packaging_configurations",
      CreatePackagingGroup: "POST /packaging_groups",
      DeleteAsset: "DELETE /assets/{Id}",
      DeletePackagingConfiguration: "DELETE /packaging_configurations/{Id}",
      DeletePackagingGroup: "DELETE /packaging_groups/{Id}",
      DescribeAsset: "GET /assets/{Id}",
      DescribePackagingConfiguration: "GET /packaging_configurations/{Id}",
      DescribePackagingGroup: "GET /packaging_groups/{Id}",
      ListAssets: "GET /assets",
      ListPackagingConfigurations: "GET /packaging_configurations",
      ListPackagingGroups: "GET /packaging_groups",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdatePackagingGroup: "PUT /packaging_groups/{Id}",
    },
  },
  mediapackagev2: {
    sdkId: "MediaPackageV2",
    version: "2022-12-25",
    arnNamespace: "mediapackagev2",
    cloudTrailEventSource: "mediapackagev2.amazonaws.com",
    endpointPrefix: "mediapackagev2",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      CancelHarvestJob:
        "PUT /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/harvestJob/{HarvestJobName}",
      CreateChannel: "POST /channelGroup/{ChannelGroupName}/channel",
      CreateChannelGroup: "POST /channelGroup",
      CreateHarvestJob:
        "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/harvestJob",
      CreateOriginEndpoint:
        "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint",
      DeleteChannel:
        "DELETE /channelGroup/{ChannelGroupName}/channel/{ChannelName}/",
      DeleteChannelGroup: "DELETE /channelGroup/{ChannelGroupName}",
      DeleteChannelPolicy:
        "DELETE /channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy",
      DeleteOriginEndpoint:
        "DELETE /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}",
      DeleteOriginEndpointPolicy:
        "DELETE /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy",
      GetChannel: "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/",
      GetChannelGroup: "GET /channelGroup/{ChannelGroupName}",
      GetChannelPolicy:
        "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy",
      GetHarvestJob:
        "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/harvestJob/{HarvestJobName}",
      GetOriginEndpoint:
        "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}",
      GetOriginEndpointPolicy:
        "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy",
      ListChannelGroups: "GET /channelGroup",
      ListChannels: "GET /channelGroup/{ChannelGroupName}/channel",
      ListHarvestJobs: "GET /channelGroup/{ChannelGroupName}/harvestJob",
      ListOriginEndpoints:
        "GET /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint",
      PutChannelPolicy:
        "PUT /channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy",
      PutOriginEndpointPolicy:
        "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/policy",
      ResetChannelState:
        "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/reset",
      ResetOriginEndpointState:
        "POST /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}/reset",
      UpdateChannel:
        "PUT /channelGroup/{ChannelGroupName}/channel/{ChannelName}/",
      UpdateChannelGroup: "PUT /channelGroup/{ChannelGroupName}",
      UpdateOriginEndpoint:
        "PUT /channelGroup/{ChannelGroupName}/channel/{ChannelName}/originEndpoint/{OriginEndpointName}",
    },
  },
  mediastore: {
    sdkId: "MediaStore",
    version: "2017-09-01",
    arnNamespace: "mediastore",
    cloudTrailEventSource: "mediastore.amazonaws.com",
    endpointPrefix: "mediastore",
    protocol: "awsJson1_1",
    targetPrefix: "MediaStore_20170901",
  },
  mediastoredata: {
    sdkId: "MediaStore Data",
    version: "2017-09-01",
    arnNamespace: "mediastore",
    cloudTrailEventSource: "mediastoredata.amazonaws.com",
    endpointPrefix: "data.mediastore",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteObject: "DELETE /{Path+}",
      DescribeObject: {
        http: "HEAD /{Path+}",
        traits: {
          ETag: "ETag",
          ContentType: "Content-Type",
          ContentLength: "Content-Length",
          CacheControl: "Cache-Control",
          LastModified: "Last-Modified",
        },
      },
      GetObject: {
        http: "GET /{Path+}",
        traits: {
          Body: "httpPayload",
          CacheControl: "Cache-Control",
          ContentRange: "Content-Range",
          ContentLength: "Content-Length",
          ContentType: "Content-Type",
          ETag: "ETag",
          LastModified: "Last-Modified",
          StatusCode: "httpResponseCode",
        },
      },
      ListItems: "GET /",
      PutObject: "PUT /{Path+}",
    },
  },
  mediatailor: {
    sdkId: "MediaTailor",
    version: "2018-04-23",
    arnNamespace: "mediatailor",
    cloudTrailEventSource: "mediatailor.amazonaws.com",
    endpointPrefix: "api.mediatailor",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ConfigureLogsForPlaybackConfiguration:
        "PUT /configureLogs/playbackConfiguration",
      ListAlerts: "GET /alerts",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      ConfigureLogsForChannel: "PUT /configureLogs/channel",
      CreateChannel: "POST /channel/{ChannelName}",
      CreateLiveSource:
        "POST /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}",
      CreatePrefetchSchedule:
        "POST /prefetchSchedule/{PlaybackConfigurationName}/{Name}",
      CreateProgram: "POST /channel/{ChannelName}/program/{ProgramName}",
      CreateSourceLocation: "POST /sourceLocation/{SourceLocationName}",
      CreateVodSource:
        "POST /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}",
      DeleteChannel: "DELETE /channel/{ChannelName}",
      DeleteChannelPolicy: "DELETE /channel/{ChannelName}/policy",
      DeleteLiveSource:
        "DELETE /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}",
      DeletePlaybackConfiguration: "DELETE /playbackConfiguration/{Name}",
      DeletePrefetchSchedule:
        "DELETE /prefetchSchedule/{PlaybackConfigurationName}/{Name}",
      DeleteProgram: "DELETE /channel/{ChannelName}/program/{ProgramName}",
      DeleteSourceLocation: "DELETE /sourceLocation/{SourceLocationName}",
      DeleteVodSource:
        "DELETE /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}",
      DescribeChannel: "GET /channel/{ChannelName}",
      DescribeLiveSource:
        "GET /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}",
      DescribeProgram: "GET /channel/{ChannelName}/program/{ProgramName}",
      DescribeSourceLocation: "GET /sourceLocation/{SourceLocationName}",
      DescribeVodSource:
        "GET /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}",
      GetChannelPolicy: "GET /channel/{ChannelName}/policy",
      GetChannelSchedule: "GET /channel/{ChannelName}/schedule",
      GetPlaybackConfiguration: "GET /playbackConfiguration/{Name}",
      GetPrefetchSchedule:
        "GET /prefetchSchedule/{PlaybackConfigurationName}/{Name}",
      ListChannels: "GET /channels",
      ListLiveSources: "GET /sourceLocation/{SourceLocationName}/liveSources",
      ListPlaybackConfigurations: "GET /playbackConfigurations",
      ListPrefetchSchedules:
        "POST /prefetchSchedule/{PlaybackConfigurationName}",
      ListSourceLocations: "GET /sourceLocations",
      ListVodSources: "GET /sourceLocation/{SourceLocationName}/vodSources",
      PutChannelPolicy: "PUT /channel/{ChannelName}/policy",
      PutPlaybackConfiguration: "PUT /playbackConfiguration",
      StartChannel: "PUT /channel/{ChannelName}/start",
      StopChannel: "PUT /channel/{ChannelName}/stop",
      UpdateChannel: "PUT /channel/{ChannelName}",
      UpdateLiveSource:
        "PUT /sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}",
      UpdateProgram: "PUT /channel/{ChannelName}/program/{ProgramName}",
      UpdateSourceLocation: "PUT /sourceLocation/{SourceLocationName}",
      UpdateVodSource:
        "PUT /sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}",
    },
  },
  medicalimaging: {
    sdkId: "Medical Imaging",
    version: "2023-07-19",
    arnNamespace: "medical-imaging",
    cloudTrailEventSource: "medical-imaging.amazonaws.com",
    endpointPrefix: "medical-imaging",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CopyImageSet:
        "POST /datastore/{datastoreId}/imageSet/{sourceImageSetId}/copyImageSet",
      DeleteImageSet:
        "POST /datastore/{datastoreId}/imageSet/{imageSetId}/deleteImageSet",
      GetDICOMImportJob:
        "GET /getDICOMImportJob/datastore/{datastoreId}/job/{jobId}",
      GetImageFrame: {
        http: "POST /datastore/{datastoreId}/imageSet/{imageSetId}/getImageFrame",
        traits: {
          imageFrameBlob: "httpPayload",
          contentType: "Content-Type",
        },
      },
      GetImageSet:
        "POST /datastore/{datastoreId}/imageSet/{imageSetId}/getImageSet",
      GetImageSetMetadata: {
        http: "POST /datastore/{datastoreId}/imageSet/{imageSetId}/getImageSetMetadata",
        traits: {
          imageSetMetadataBlob: "httpPayload",
          contentType: "Content-Type",
          contentEncoding: "Content-Encoding",
        },
      },
      ListDICOMImportJobs: "GET /listDICOMImportJobs/datastore/{datastoreId}",
      ListImageSetVersions:
        "POST /datastore/{datastoreId}/imageSet/{imageSetId}/listImageSetVersions",
      ListTagsForResource: "GET /tags/{resourceArn}",
      SearchImageSets: "POST /datastore/{datastoreId}/searchImageSets",
      StartDICOMImportJob: "POST /startDICOMImportJob/datastore/{datastoreId}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateImageSetMetadata:
        "POST /datastore/{datastoreId}/imageSet/{imageSetId}/updateImageSetMetadata",
      CreateDatastore: "POST /datastore",
      DeleteDatastore: "DELETE /datastore/{datastoreId}",
      GetDatastore: "GET /datastore/{datastoreId}",
      ListDatastores: "GET /datastore",
    },
  },
  memorydb: {
    sdkId: "MemoryDB",
    version: "2021-01-01",
    arnNamespace: "memorydb",
    cloudTrailEventSource: "memorydb.amazonaws.com",
    endpointPrefix: "memory-db",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonMemoryDB",
  },
  mgn: {
    sdkId: "mgn",
    version: "2020-02-26",
    arnNamespace: "mgn",
    cloudTrailEventSource: "mgn.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      InitializeService: "POST /InitializeService",
      ListManagedAccounts: "POST /ListManagedAccounts",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      ArchiveApplication: "POST /ArchiveApplication",
      ArchiveWave: "POST /ArchiveWave",
      AssociateApplications: "POST /AssociateApplications",
      AssociateSourceServers: "POST /AssociateSourceServers",
      ChangeServerLifeCycleState: "POST /ChangeServerLifeCycleState",
      CreateApplication: "POST /CreateApplication",
      CreateConnector: "POST /CreateConnector",
      CreateLaunchConfigurationTemplate:
        "POST /CreateLaunchConfigurationTemplate",
      CreateReplicationConfigurationTemplate:
        "POST /CreateReplicationConfigurationTemplate",
      CreateWave: "POST /CreateWave",
      DeleteApplication: "POST /DeleteApplication",
      DeleteConnector: "POST /DeleteConnector",
      DeleteJob: "POST /DeleteJob",
      DeleteLaunchConfigurationTemplate:
        "POST /DeleteLaunchConfigurationTemplate",
      DeleteReplicationConfigurationTemplate:
        "POST /DeleteReplicationConfigurationTemplate",
      DeleteSourceServer: "POST /DeleteSourceServer",
      DeleteVcenterClient: "POST /DeleteVcenterClient",
      DeleteWave: "POST /DeleteWave",
      DescribeJobLogItems: "POST /DescribeJobLogItems",
      DescribeJobs: "POST /DescribeJobs",
      DescribeLaunchConfigurationTemplates:
        "POST /DescribeLaunchConfigurationTemplates",
      DescribeReplicationConfigurationTemplates:
        "POST /DescribeReplicationConfigurationTemplates",
      DescribeSourceServers: "POST /DescribeSourceServers",
      DescribeVcenterClients: "GET /DescribeVcenterClients",
      DisassociateApplications: "POST /DisassociateApplications",
      DisassociateSourceServers: "POST /DisassociateSourceServers",
      DisconnectFromService: "POST /DisconnectFromService",
      FinalizeCutover: "POST /FinalizeCutover",
      GetLaunchConfiguration: "POST /GetLaunchConfiguration",
      GetReplicationConfiguration: "POST /GetReplicationConfiguration",
      ListApplications: "POST /ListApplications",
      ListConnectors: "POST /ListConnectors",
      ListExportErrors: "POST /ListExportErrors",
      ListExports: "POST /ListExports",
      ListImportErrors: "POST /ListImportErrors",
      ListImports: "POST /ListImports",
      ListSourceServerActions: "POST /ListSourceServerActions",
      ListTemplateActions: "POST /ListTemplateActions",
      ListWaves: "POST /ListWaves",
      MarkAsArchived: "POST /MarkAsArchived",
      PauseReplication: "POST /PauseReplication",
      PutSourceServerAction: "POST /PutSourceServerAction",
      PutTemplateAction: "POST /PutTemplateAction",
      RemoveSourceServerAction: "POST /RemoveSourceServerAction",
      RemoveTemplateAction: "POST /RemoveTemplateAction",
      ResumeReplication: "POST /ResumeReplication",
      RetryDataReplication: "POST /RetryDataReplication",
      StartCutover: "POST /StartCutover",
      StartExport: "POST /StartExport",
      StartImport: "POST /StartImport",
      StartReplication: "POST /StartReplication",
      StartTest: "POST /StartTest",
      StopReplication: "POST /StopReplication",
      TerminateTargetInstances: "POST /TerminateTargetInstances",
      UnarchiveApplication: "POST /UnarchiveApplication",
      UnarchiveWave: "POST /UnarchiveWave",
      UpdateApplication: "POST /UpdateApplication",
      UpdateConnector: "POST /UpdateConnector",
      UpdateLaunchConfiguration: "POST /UpdateLaunchConfiguration",
      UpdateLaunchConfigurationTemplate:
        "POST /UpdateLaunchConfigurationTemplate",
      UpdateReplicationConfiguration: "POST /UpdateReplicationConfiguration",
      UpdateReplicationConfigurationTemplate:
        "POST /UpdateReplicationConfigurationTemplate",
      UpdateSourceServer: "POST /UpdateSourceServer",
      UpdateSourceServerReplicationType:
        "POST /UpdateSourceServerReplicationType",
      UpdateWave: "POST /UpdateWave",
    },
  },
  migrationhub: {
    sdkId: "Migration Hub",
    version: "2017-05-31",
    arnNamespace: "mgh",
    cloudTrailEventSource: "migrationhub.amazonaws.com",
    endpointPrefix: "mgh",
    protocol: "awsJson1_1",
    targetPrefix: "AWSMigrationHub",
  },
  migrationhubrefactorspaces: {
    sdkId: "Migration Hub Refactor Spaces",
    version: "2021-10-26",
    arnNamespace: "refactor-spaces",
    cloudTrailEventSource: "refactor-spaces.amazonaws.com",
    endpointPrefix: "refactor-spaces",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateApplication:
        "POST /environments/{EnvironmentIdentifier}/applications",
      CreateEnvironment: "POST /environments",
      CreateRoute:
        "POST /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes",
      CreateService:
        "POST /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services",
      DeleteApplication:
        "DELETE /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}",
      DeleteEnvironment: "DELETE /environments/{EnvironmentIdentifier}",
      DeleteResourcePolicy: "DELETE /resourcepolicy/{Identifier}",
      DeleteRoute:
        "DELETE /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}",
      DeleteService:
        "DELETE /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}",
      GetApplication:
        "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}",
      GetEnvironment: "GET /environments/{EnvironmentIdentifier}",
      GetResourcePolicy: "GET /resourcepolicy/{Identifier}",
      GetRoute:
        "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}",
      GetService:
        "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}",
      ListApplications:
        "GET /environments/{EnvironmentIdentifier}/applications",
      ListEnvironments: "GET /environments",
      ListEnvironmentVpcs: "GET /environments/{EnvironmentIdentifier}/vpcs",
      ListRoutes:
        "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes",
      ListServices:
        "GET /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      PutResourcePolicy: "PUT /resourcepolicy",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateRoute:
        "PATCH /environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}",
    },
  },
  migrationhubconfig: {
    sdkId: "MigrationHub Config",
    version: "2019-06-30",
    arnNamespace: "mgh",
    cloudTrailEventSource: "migrationhubconfig.amazonaws.com",
    endpointPrefix: "migrationhub-config",
    protocol: "awsJson1_1",
    targetPrefix: "AWSMigrationHubMultiAccountService",
  },
  migrationhuborchestrator: {
    sdkId: "MigrationHubOrchestrator",
    version: "2021-08-28",
    arnNamespace: "migrationhub-orchestrator",
    cloudTrailEventSource: "migrationhub-orchestrator.amazonaws.com",
    endpointPrefix: "migrationhub-orchestrator",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateTemplate: "POST /template",
      CreateWorkflow: "POST /migrationworkflow/",
      CreateWorkflowStep: "POST /workflowstep",
      CreateWorkflowStepGroup: "POST /workflowstepgroups",
      DeleteTemplate: "DELETE /template/{id}",
      DeleteWorkflow: "DELETE /migrationworkflow/{id}",
      DeleteWorkflowStep: "DELETE /workflowstep/{id}",
      DeleteWorkflowStepGroup: "DELETE /workflowstepgroup/{id}",
      GetTemplate: "GET /migrationworkflowtemplate/{id}",
      GetTemplateStep: "GET /templatestep/{id}",
      GetTemplateStepGroup: "GET /templates/{templateId}/stepgroups/{id}",
      GetWorkflow: "GET /migrationworkflow/{id}",
      GetWorkflowStep: "GET /workflowstep/{id}",
      GetWorkflowStepGroup: "GET /workflowstepgroup/{id}",
      ListPlugins: "GET /plugins",
      ListTemplateStepGroups: "GET /templatestepgroups/{templateId}",
      ListTemplateSteps: "GET /templatesteps",
      ListTemplates: "GET /migrationworkflowtemplates",
      ListWorkflowStepGroups: "GET /workflowstepgroups",
      ListWorkflowSteps:
        "GET /workflow/{workflowId}/workflowstepgroups/{stepGroupId}/workflowsteps",
      ListWorkflows: "GET /migrationworkflows",
      RetryWorkflowStep: "POST /retryworkflowstep/{id}",
      StartWorkflow: "POST /migrationworkflow/{id}/start",
      StopWorkflow: "POST /migrationworkflow/{id}/stop",
      UpdateTemplate: "POST /template/{id}",
      UpdateWorkflow: "POST /migrationworkflow/{id}",
      UpdateWorkflowStep: "POST /workflowstep/{id}",
      UpdateWorkflowStepGroup: "POST /workflowstepgroup/{id}",
    },
  },
  migrationhubstrategy: {
    sdkId: "MigrationHubStrategy",
    version: "2020-02-19",
    arnNamespace: "",
    cloudTrailEventSource: "migrationhub-strategy.amazonaws.com",
    endpointPrefix: "migrationhub-strategy",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetApplicationComponentDetails:
        "GET /get-applicationcomponent-details/{applicationComponentId}",
      GetApplicationComponentStrategies:
        "GET /get-applicationcomponent-strategies/{applicationComponentId}",
      GetAssessment: "GET /get-assessment/{id}",
      GetImportFileTask: "GET /get-import-file-task/{id}",
      GetLatestAssessmentId: "GET /get-latest-assessment-id",
      GetPortfolioPreferences: "GET /get-portfolio-preferences",
      GetPortfolioSummary: "GET /get-portfolio-summary",
      GetRecommendationReportDetails:
        "GET /get-recommendation-report-details/{id}",
      GetServerDetails: "GET /get-server-details/{serverId}",
      GetServerStrategies: "GET /get-server-strategies/{serverId}",
      ListAnalyzableServers: "POST /list-analyzable-servers",
      ListApplicationComponents: "POST /list-applicationcomponents",
      ListCollectors: "GET /list-collectors",
      ListImportFileTask: "GET /list-import-file-task",
      ListServers: "POST /list-servers",
      PutPortfolioPreferences: "POST /put-portfolio-preferences",
      StartAssessment: "POST /start-assessment",
      StartImportFileTask: "POST /start-import-file-task",
      StartRecommendationReportGeneration:
        "POST /start-recommendation-report-generation",
      StopAssessment: "POST /stop-assessment",
      UpdateApplicationComponentConfig:
        "POST /update-applicationcomponent-config/",
      UpdateServerConfig: "POST /update-server-config/",
    },
  },
  mpa: {
    sdkId: "MPA",
    version: "2022-07-26",
    arnNamespace: "mpa",
    cloudTrailEventSource: "mpa.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetPolicyVersion: "GET /policy-versions/{PolicyVersionArn}",
      GetResourcePolicy: "POST /GetResourcePolicy",
      ListPolicies: "POST /policies/?List",
      ListPolicyVersions: "POST /policies/{PolicyArn}/?List",
      ListResourcePolicies: "POST /resource-policies/{ResourceArn}/?List",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "PUT /tags/{ResourceArn}",
      UntagResource: "POST /tags/{ResourceArn}",
      CancelSession: "PUT /sessions/{SessionArn}",
      CreateApprovalTeam: "POST /approval-teams",
      CreateIdentitySource: "POST /identity-sources",
      DeleteIdentitySource: "DELETE /identity-sources/{IdentitySourceArn}",
      DeleteInactiveApprovalTeamVersion:
        "DELETE /approval-teams/{Arn}/{VersionId}",
      GetApprovalTeam: "GET /approval-teams/{Arn}",
      GetIdentitySource: "GET /identity-sources/{IdentitySourceArn}",
      GetSession: "GET /sessions/{SessionArn}",
      ListApprovalTeams: "POST /approval-teams/?List",
      ListIdentitySources: "POST /identity-sources/?List",
      ListSessions: "POST /approval-teams/{ApprovalTeamArn}/sessions/?List",
      StartActiveApprovalTeamDeletion: "POST /approval-teams/{Arn}?Delete",
      UpdateApprovalTeam: "PATCH /approval-teams/{Arn}",
    },
  },
  mq: {
    sdkId: "mq",
    version: "2017-11-27",
    arnNamespace: "mq",
    cloudTrailEventSource: "mq.amazonaws.com",
    endpointPrefix: "mq",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateBroker: "POST /v1/brokers",
      CreateConfiguration: "POST /v1/configurations",
      CreateTags: "POST /v1/tags/{ResourceArn}",
      CreateUser: "POST /v1/brokers/{BrokerId}/users/{Username}",
      DeleteBroker: "DELETE /v1/brokers/{BrokerId}",
      DeleteConfiguration: "DELETE /v1/configurations/{ConfigurationId}",
      DeleteTags: "DELETE /v1/tags/{ResourceArn}",
      DeleteUser: "DELETE /v1/brokers/{BrokerId}/users/{Username}",
      DescribeBroker: "GET /v1/brokers/{BrokerId}",
      DescribeBrokerEngineTypes: "GET /v1/broker-engine-types",
      DescribeBrokerInstanceOptions: "GET /v1/broker-instance-options",
      DescribeConfiguration: "GET /v1/configurations/{ConfigurationId}",
      DescribeConfigurationRevision:
        "GET /v1/configurations/{ConfigurationId}/revisions/{ConfigurationRevision}",
      DescribeUser: "GET /v1/brokers/{BrokerId}/users/{Username}",
      ListBrokers: "GET /v1/brokers",
      ListConfigurationRevisions:
        "GET /v1/configurations/{ConfigurationId}/revisions",
      ListConfigurations: "GET /v1/configurations",
      ListTags: "GET /v1/tags/{ResourceArn}",
      ListUsers: "GET /v1/brokers/{BrokerId}/users",
      Promote: "POST /v1/brokers/{BrokerId}/promote",
      RebootBroker: "POST /v1/brokers/{BrokerId}/reboot",
      UpdateBroker: "PUT /v1/brokers/{BrokerId}",
      UpdateConfiguration: "PUT /v1/configurations/{ConfigurationId}",
      UpdateUser: "PUT /v1/brokers/{BrokerId}/users/{Username}",
    },
  },
  mturk: {
    sdkId: "MTurk",
    version: "2017-01-17",
    arnNamespace: "mturk-requester",
    cloudTrailEventSource: "mturk.amazonaws.com",
    endpointPrefix: "mturk-requester",
    protocol: "awsJson1_1",
    targetPrefix: "MTurkRequesterServiceV20170117",
  },
  mwaa: {
    sdkId: "MWAA",
    version: "2020-07-01",
    arnNamespace: "airflow",
    cloudTrailEventSource: "airflow.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateCliToken: "POST /clitoken/{Name}",
      CreateEnvironment: "PUT /environments/{Name}",
      CreateWebLoginToken: "POST /webtoken/{Name}",
      DeleteEnvironment: "DELETE /environments/{Name}",
      GetEnvironment: "GET /environments/{Name}",
      InvokeRestApi: "POST /restapi/{Name}",
      ListEnvironments: "GET /environments",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      PublishMetrics: "POST /metrics/environments/{EnvironmentName}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateEnvironment: "PATCH /environments/{Name}",
    },
  },
  neptune: {
    sdkId: "Neptune",
    version: "2014-10-31",
    arnNamespace: "rds",
    cloudTrailEventSource: "neptune.amazonaws.com",
    endpointPrefix: "rds",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  neptunegraph: {
    sdkId: "Neptune Graph",
    version: "2023-11-29",
    arnNamespace: "neptune-graph",
    cloudTrailEventSource: "neptune-graph.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelQuery: "DELETE /queries/{queryId}",
      ExecuteQuery: {
        http: "POST /queries",
        traits: {
          payload: "httpPayload",
        },
      },
      GetGraphSummary: "GET /summary",
      GetQuery: "GET /queries/{queryId}",
      ListQueries: "GET /queries",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CancelExportTask: "DELETE /exporttasks/{taskIdentifier}",
      CancelImportTask: "DELETE /importtasks/{taskIdentifier}",
      CreateGraph: "POST /graphs",
      CreateGraphSnapshot: "POST /snapshots",
      CreateGraphUsingImportTask: "POST /importtasks",
      CreatePrivateGraphEndpoint: "POST /graphs/{graphIdentifier}/endpoints/",
      DeleteGraph: "DELETE /graphs/{graphIdentifier}",
      DeleteGraphSnapshot: "DELETE /snapshots/{snapshotIdentifier}",
      DeletePrivateGraphEndpoint:
        "DELETE /graphs/{graphIdentifier}/endpoints/{vpcId}",
      GetExportTask: "GET /exporttasks/{taskIdentifier}",
      GetGraph: "GET /graphs/{graphIdentifier}",
      GetGraphSnapshot: "GET /snapshots/{snapshotIdentifier}",
      GetImportTask: "GET /importtasks/{taskIdentifier}",
      GetPrivateGraphEndpoint:
        "GET /graphs/{graphIdentifier}/endpoints/{vpcId}",
      ListExportTasks: "GET /exporttasks",
      ListGraphSnapshots: "GET /snapshots",
      ListGraphs: "GET /graphs",
      ListImportTasks: "GET /importtasks",
      ListPrivateGraphEndpoints: "GET /graphs/{graphIdentifier}/endpoints/",
      ResetGraph: "PUT /graphs/{graphIdentifier}",
      RestoreGraphFromSnapshot: "POST /snapshots/{snapshotIdentifier}/restore",
      StartExportTask: "POST /exporttasks",
      StartImportTask: "POST /graphs/{graphIdentifier}/importtasks",
      UpdateGraph: "PATCH /graphs/{graphIdentifier}",
    },
  },
  neptunedata: {
    sdkId: "neptunedata",
    version: "2023-08-01",
    arnNamespace: "neptune-db",
    cloudTrailEventSource: "neptune-db.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelGremlinQuery: "DELETE /gremlin/status/{queryId}",
      CancelLoaderJob: "DELETE /loader/{loadId}",
      CancelMLDataProcessingJob: "DELETE /ml/dataprocessing/{id}",
      CancelMLModelTrainingJob: "DELETE /ml/modeltraining/{id}",
      CancelMLModelTransformJob: "DELETE /ml/modeltransform/{id}",
      CancelOpenCypherQuery: "DELETE /opencypher/status/{queryId}",
      CreateMLEndpoint: "POST /ml/endpoints",
      DeleteMLEndpoint: "DELETE /ml/endpoints/{id}",
      DeletePropertygraphStatistics: {
        http: "DELETE /propertygraph/statistics",
        traits: {
          statusCode: "httpResponseCode",
        },
      },
      DeleteSparqlStatistics: {
        http: "DELETE /sparql/statistics",
        traits: {
          statusCode: "httpResponseCode",
        },
      },
      ExecuteFastReset: "POST /system",
      ExecuteGremlinExplainQuery: {
        http: "POST /gremlin/explain",
        traits: {
          output: "httpPayload",
        },
      },
      ExecuteGremlinProfileQuery: {
        http: "POST /gremlin/profile",
        traits: {
          output: "httpPayload",
        },
      },
      ExecuteGremlinQuery: "POST /gremlin",
      ExecuteOpenCypherExplainQuery: {
        http: "POST /opencypher/explain",
        traits: {
          results: "httpPayload",
        },
      },
      ExecuteOpenCypherQuery: "POST /opencypher",
      GetEngineStatus: "GET /status",
      GetGremlinQueryStatus: "GET /gremlin/status/{queryId}",
      GetLoaderJobStatus: "GET /loader/{loadId}",
      GetMLDataProcessingJob: "GET /ml/dataprocessing/{id}",
      GetMLEndpoint: "GET /ml/endpoints/{id}",
      GetMLModelTrainingJob: "GET /ml/modeltraining/{id}",
      GetMLModelTransformJob: "GET /ml/modeltransform/{id}",
      GetOpenCypherQueryStatus: "GET /opencypher/status/{queryId}",
      GetPropertygraphStatistics: "GET /propertygraph/statistics",
      GetPropertygraphStream: "GET /propertygraph/stream",
      GetPropertygraphSummary: {
        http: "GET /propertygraph/statistics/summary",
        traits: {
          statusCode: "httpResponseCode",
        },
      },
      GetRDFGraphSummary: {
        http: "GET /rdf/statistics/summary",
        traits: {
          statusCode: "httpResponseCode",
        },
      },
      GetSparqlStatistics: "GET /sparql/statistics",
      GetSparqlStream: "GET /sparql/stream",
      ListGremlinQueries: "GET /gremlin/status",
      ListLoaderJobs: "GET /loader",
      ListMLDataProcessingJobs: "GET /ml/dataprocessing",
      ListMLEndpoints: "GET /ml/endpoints",
      ListMLModelTrainingJobs: "GET /ml/modeltraining",
      ListMLModelTransformJobs: "GET /ml/modeltransform",
      ListOpenCypherQueries: "GET /opencypher/status",
      ManagePropertygraphStatistics: "POST /propertygraph/statistics",
      ManageSparqlStatistics: "POST /sparql/statistics",
      StartLoaderJob: "POST /loader",
      StartMLDataProcessingJob: "POST /ml/dataprocessing",
      StartMLModelTrainingJob: "POST /ml/modeltraining",
      StartMLModelTransformJob: "POST /ml/modeltransform",
    },
  },
  networkfirewall: {
    sdkId: "Network Firewall",
    version: "2020-11-12",
    arnNamespace: "network-firewall",
    cloudTrailEventSource: "networkfirewall.amazonaws.com",
    endpointPrefix: "network-firewall",
    protocol: "awsJson1_0",
    targetPrefix: "NetworkFirewall_20201112",
  },
  networkflowmonitor: {
    sdkId: "NetworkFlowMonitor",
    version: "2023-04-19",
    arnNamespace: "networkflowmonitor",
    cloudTrailEventSource: "networkflowmonitor.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateMonitor: "POST /monitors",
      CreateScope: "POST /scopes",
      DeleteMonitor: "DELETE /monitors/{monitorName}",
      DeleteScope: "DELETE /scopes/{scopeId}",
      GetMonitor: "GET /monitors/{monitorName}",
      GetQueryResultsMonitorTopContributors:
        "GET /monitors/{monitorName}/topContributorsQueries/{queryId}/results",
      GetQueryResultsWorkloadInsightsTopContributors:
        "GET /workloadInsights/{scopeId}/topContributorsQueries/{queryId}/results",
      GetQueryResultsWorkloadInsightsTopContributorsData:
        "GET /workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}/results",
      GetQueryStatusMonitorTopContributors:
        "GET /monitors/{monitorName}/topContributorsQueries/{queryId}/status",
      GetQueryStatusWorkloadInsightsTopContributors:
        "GET /workloadInsights/{scopeId}/topContributorsQueries/{queryId}/status",
      GetQueryStatusWorkloadInsightsTopContributorsData:
        "GET /workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}/status",
      GetScope: "GET /scopes/{scopeId}",
      ListMonitors: "GET /monitors",
      ListScopes: "GET /scopes",
      StartQueryMonitorTopContributors:
        "POST /monitors/{monitorName}/topContributorsQueries",
      StartQueryWorkloadInsightsTopContributors:
        "POST /workloadInsights/{scopeId}/topContributorsQueries",
      StartQueryWorkloadInsightsTopContributorsData:
        "POST /workloadInsights/{scopeId}/topContributorsDataQueries",
      StopQueryMonitorTopContributors:
        "DELETE /monitors/{monitorName}/topContributorsQueries/{queryId}",
      StopQueryWorkloadInsightsTopContributors:
        "DELETE /workloadInsights/{scopeId}/topContributorsQueries/{queryId}",
      StopQueryWorkloadInsightsTopContributorsData:
        "DELETE /workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}",
      UpdateMonitor: "PATCH /monitors/{monitorName}",
      UpdateScope: "PATCH /scopes/{scopeId}",
    },
  },
  networkmanager: {
    sdkId: "NetworkManager",
    version: "2019-07-05",
    arnNamespace: "networkmanager",
    cloudTrailEventSource: "networkmanager.amazonaws.com",
    endpointPrefix: "networkmanager",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptAttachment: "POST /attachments/{AttachmentId}/accept",
      AssociateConnectPeer:
        "POST /global-networks/{GlobalNetworkId}/connect-peer-associations",
      AssociateCustomerGateway:
        "POST /global-networks/{GlobalNetworkId}/customer-gateway-associations",
      AssociateLink:
        "POST /global-networks/{GlobalNetworkId}/link-associations",
      AssociateTransitGatewayConnectPeer:
        "POST /global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations",
      CreateConnectAttachment: "POST /connect-attachments",
      CreateConnection: "POST /global-networks/{GlobalNetworkId}/connections",
      CreateConnectPeer: "POST /connect-peers",
      CreateCoreNetwork: "POST /core-networks",
      CreateDevice: "POST /global-networks/{GlobalNetworkId}/devices",
      CreateDirectConnectGatewayAttachment:
        "POST /direct-connect-gateway-attachments",
      CreateGlobalNetwork: "POST /global-networks",
      CreateLink: "POST /global-networks/{GlobalNetworkId}/links",
      CreateSite: "POST /global-networks/{GlobalNetworkId}/sites",
      CreateSiteToSiteVpnAttachment: "POST /site-to-site-vpn-attachments",
      CreateTransitGatewayPeering: "POST /transit-gateway-peerings",
      CreateTransitGatewayRouteTableAttachment:
        "POST /transit-gateway-route-table-attachments",
      CreateVpcAttachment: "POST /vpc-attachments",
      DeleteAttachment: "DELETE /attachments/{AttachmentId}",
      DeleteConnection:
        "DELETE /global-networks/{GlobalNetworkId}/connections/{ConnectionId}",
      DeleteConnectPeer: "DELETE /connect-peers/{ConnectPeerId}",
      DeleteCoreNetwork: "DELETE /core-networks/{CoreNetworkId}",
      DeleteCoreNetworkPolicyVersion:
        "DELETE /core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}",
      DeleteDevice:
        "DELETE /global-networks/{GlobalNetworkId}/devices/{DeviceId}",
      DeleteGlobalNetwork: "DELETE /global-networks/{GlobalNetworkId}",
      DeleteLink: "DELETE /global-networks/{GlobalNetworkId}/links/{LinkId}",
      DeletePeering: "DELETE /peerings/{PeeringId}",
      DeleteResourcePolicy: "DELETE /resource-policy/{ResourceArn}",
      DeleteSite: "DELETE /global-networks/{GlobalNetworkId}/sites/{SiteId}",
      DeregisterTransitGateway:
        "DELETE /global-networks/{GlobalNetworkId}/transit-gateway-registrations/{TransitGatewayArn}",
      DescribeGlobalNetworks: "GET /global-networks",
      DisassociateConnectPeer:
        "DELETE /global-networks/{GlobalNetworkId}/connect-peer-associations/{ConnectPeerId}",
      DisassociateCustomerGateway:
        "DELETE /global-networks/{GlobalNetworkId}/customer-gateway-associations/{CustomerGatewayArn}",
      DisassociateLink:
        "DELETE /global-networks/{GlobalNetworkId}/link-associations",
      DisassociateTransitGatewayConnectPeer:
        "DELETE /global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations/{TransitGatewayConnectPeerArn}",
      ExecuteCoreNetworkChangeSet:
        "POST /core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}/execute",
      GetConnectAttachment: "GET /connect-attachments/{AttachmentId}",
      GetConnections: "GET /global-networks/{GlobalNetworkId}/connections",
      GetConnectPeer: "GET /connect-peers/{ConnectPeerId}",
      GetConnectPeerAssociations:
        "GET /global-networks/{GlobalNetworkId}/connect-peer-associations",
      GetCoreNetwork: "GET /core-networks/{CoreNetworkId}",
      GetCoreNetworkChangeEvents:
        "GET /core-networks/{CoreNetworkId}/core-network-change-events/{PolicyVersionId}",
      GetCoreNetworkChangeSet:
        "GET /core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}",
      GetCoreNetworkPolicy:
        "GET /core-networks/{CoreNetworkId}/core-network-policy",
      GetCustomerGatewayAssociations:
        "GET /global-networks/{GlobalNetworkId}/customer-gateway-associations",
      GetDevices: "GET /global-networks/{GlobalNetworkId}/devices",
      GetDirectConnectGatewayAttachment:
        "GET /direct-connect-gateway-attachments/{AttachmentId}",
      GetLinkAssociations:
        "GET /global-networks/{GlobalNetworkId}/link-associations",
      GetLinks: "GET /global-networks/{GlobalNetworkId}/links",
      GetNetworkResourceCounts:
        "GET /global-networks/{GlobalNetworkId}/network-resource-count",
      GetNetworkResourceRelationships:
        "GET /global-networks/{GlobalNetworkId}/network-resource-relationships",
      GetNetworkResources:
        "GET /global-networks/{GlobalNetworkId}/network-resources",
      GetNetworkRoutes:
        "POST /global-networks/{GlobalNetworkId}/network-routes",
      GetNetworkTelemetry:
        "GET /global-networks/{GlobalNetworkId}/network-telemetry",
      GetResourcePolicy: "GET /resource-policy/{ResourceArn}",
      GetRouteAnalysis:
        "GET /global-networks/{GlobalNetworkId}/route-analyses/{RouteAnalysisId}",
      GetSites: "GET /global-networks/{GlobalNetworkId}/sites",
      GetSiteToSiteVpnAttachment:
        "GET /site-to-site-vpn-attachments/{AttachmentId}",
      GetTransitGatewayConnectPeerAssociations:
        "GET /global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations",
      GetTransitGatewayPeering: "GET /transit-gateway-peerings/{PeeringId}",
      GetTransitGatewayRegistrations:
        "GET /global-networks/{GlobalNetworkId}/transit-gateway-registrations",
      GetTransitGatewayRouteTableAttachment:
        "GET /transit-gateway-route-table-attachments/{AttachmentId}",
      GetVpcAttachment: "GET /vpc-attachments/{AttachmentId}",
      ListAttachments: "GET /attachments",
      ListConnectPeers: "GET /connect-peers",
      ListCoreNetworkPolicyVersions:
        "GET /core-networks/{CoreNetworkId}/core-network-policy-versions",
      ListCoreNetworks: "GET /core-networks",
      ListOrganizationServiceAccessStatus: "GET /organizations/service-access",
      ListPeerings: "GET /peerings",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      PutCoreNetworkPolicy:
        "POST /core-networks/{CoreNetworkId}/core-network-policy",
      PutResourcePolicy: "POST /resource-policy/{ResourceArn}",
      RegisterTransitGateway:
        "POST /global-networks/{GlobalNetworkId}/transit-gateway-registrations",
      RejectAttachment: "POST /attachments/{AttachmentId}/reject",
      RestoreCoreNetworkPolicyVersion:
        "POST /core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}/restore",
      StartOrganizationServiceAccessUpdate:
        "POST /organizations/service-access",
      StartRouteAnalysis:
        "POST /global-networks/{GlobalNetworkId}/route-analyses",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateConnection:
        "PATCH /global-networks/{GlobalNetworkId}/connections/{ConnectionId}",
      UpdateCoreNetwork: "PATCH /core-networks/{CoreNetworkId}",
      UpdateDevice:
        "PATCH /global-networks/{GlobalNetworkId}/devices/{DeviceId}",
      UpdateDirectConnectGatewayAttachment:
        "PATCH /direct-connect-gateway-attachments/{AttachmentId}",
      UpdateGlobalNetwork: "PATCH /global-networks/{GlobalNetworkId}",
      UpdateLink: "PATCH /global-networks/{GlobalNetworkId}/links/{LinkId}",
      UpdateNetworkResourceMetadata:
        "PATCH /global-networks/{GlobalNetworkId}/network-resources/{ResourceArn}/metadata",
      UpdateSite: "PATCH /global-networks/{GlobalNetworkId}/sites/{SiteId}",
      UpdateVpcAttachment: "PATCH /vpc-attachments/{AttachmentId}",
    },
  },
  networkmonitor: {
    sdkId: "NetworkMonitor",
    version: "2023-08-01",
    arnNamespace: "networkmonitor",
    cloudTrailEventSource: "networkmonitor.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateMonitor: "POST /monitors",
      CreateProbe: "POST /monitors/{monitorName}/probes",
      DeleteMonitor: "DELETE /monitors/{monitorName}",
      DeleteProbe: "DELETE /monitors/{monitorName}/probes/{probeId}",
      GetMonitor: "GET /monitors/{monitorName}",
      GetProbe: "GET /monitors/{monitorName}/probes/{probeId}",
      ListMonitors: "GET /monitors",
      UpdateMonitor: "PATCH /monitors/{monitorName}",
      UpdateProbe: "PATCH /monitors/{monitorName}/probes/{probeId}",
    },
  },
  notifications: {
    sdkId: "Notifications",
    version: "2018-05-10",
    arnNamespace: "notifications",
    cloudTrailEventSource: "notifications.amazonaws.com",
    endpointPrefix: "notifications",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListManagedNotificationChannelAssociations:
        "GET /channels/list-managed-notification-channel-associations",
      ListTagsForResource: "GET /tags/{arn}",
      TagResource: "POST /tags/{arn}",
      UntagResource: "DELETE /tags/{arn}",
      AssociateChannel: "POST /channels/associate/{arn}",
      AssociateManagedNotificationAccountContact:
        "PUT /contacts/associate-managed-notification/{contactIdentifier}",
      AssociateManagedNotificationAdditionalChannel:
        "PUT /channels/associate-managed-notification/{channelArn}",
      CreateEventRule: "POST /event-rules",
      CreateNotificationConfiguration: "POST /notification-configurations",
      DeleteEventRule: "DELETE /event-rules/{arn}",
      DeleteNotificationConfiguration:
        "DELETE /notification-configurations/{arn}",
      DeregisterNotificationHub:
        "DELETE /notification-hubs/{notificationHubRegion}",
      DisableNotificationsAccessForOrganization: "DELETE /organization/access",
      DisassociateChannel: "POST /channels/disassociate/{arn}",
      DisassociateManagedNotificationAccountContact:
        "PUT /contacts/disassociate-managed-notification/{contactIdentifier}",
      DisassociateManagedNotificationAdditionalChannel:
        "PUT /channels/disassociate-managed-notification/{channelArn}",
      EnableNotificationsAccessForOrganization: "POST /organization/access",
      GetEventRule: "GET /event-rules/{arn}",
      GetManagedNotificationChildEvent:
        "GET /managed-notification-child-events/{arn}",
      GetManagedNotificationConfiguration:
        "GET /managed-notification-configurations/{arn}",
      GetManagedNotificationEvent: "GET /managed-notification-events/{arn}",
      GetNotificationConfiguration: "GET /notification-configurations/{arn}",
      GetNotificationEvent: "GET /notification-events/{arn}",
      GetNotificationsAccessForOrganization: "GET /organization/access",
      ListChannels: "GET /channels",
      ListEventRules: "GET /event-rules",
      ListManagedNotificationChildEvents:
        "GET /list-managed-notification-child-events/{aggregateManagedNotificationEventArn}",
      ListManagedNotificationConfigurations:
        "GET /managed-notification-configurations",
      ListManagedNotificationEvents: "GET /managed-notification-events",
      ListNotificationConfigurations: "GET /notification-configurations",
      ListNotificationEvents: "GET /notification-events",
      ListNotificationHubs: "GET /notification-hubs",
      RegisterNotificationHub: "POST /notification-hubs",
      UpdateEventRule: "PUT /event-rules/{arn}",
      UpdateNotificationConfiguration: "PUT /notification-configurations/{arn}",
    },
  },
  notificationscontacts: {
    sdkId: "NotificationsContacts",
    version: "2018-05-10",
    arnNamespace: "notifications-contacts",
    cloudTrailEventSource: "notifications-contacts.amazonaws.com",
    endpointPrefix: "notifications-contacts",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{arn}",
      TagResource: "POST /tags/{arn}",
      UntagResource: "DELETE /tags/{arn}",
      ActivateEmailContact: "PUT /emailcontacts/{arn}/activate/{code}",
      CreateEmailContact: "POST /2022-09-19/emailcontacts",
      DeleteEmailContact: "DELETE /emailcontacts/{arn}",
      GetEmailContact: "GET /emailcontacts/{arn}",
      ListEmailContacts: "GET /emailcontacts",
      SendActivationCode: "POST /2022-10-31/emailcontacts/{arn}/activate/send",
    },
  },
  oam: {
    sdkId: "OAM",
    version: "2022-06-10",
    arnNamespace: "oam",
    cloudTrailEventSource: "{{CLOUD_TRAIL_EVENT_SOURCE}}",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateLink: "POST /CreateLink",
      CreateSink: "POST /CreateSink",
      DeleteLink: "POST /DeleteLink",
      DeleteSink: "POST /DeleteSink",
      GetLink: "POST /GetLink",
      GetSink: "POST /GetSink",
      GetSinkPolicy: "POST /GetSinkPolicy",
      ListAttachedLinks: "POST /ListAttachedLinks",
      ListLinks: "POST /ListLinks",
      ListSinks: "POST /ListSinks",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      PutSinkPolicy: "POST /PutSinkPolicy",
      TagResource: "PUT /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateLink: "POST /UpdateLink",
    },
  },
  observabilityadmin: {
    sdkId: "ObservabilityAdmin",
    version: "2018-05-10",
    arnNamespace: "observabilityadmin",
    cloudTrailEventSource: "observabilityadmin.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateTelemetryRule: "POST /CreateTelemetryRule",
      CreateTelemetryRuleForOrganization:
        "POST /CreateTelemetryRuleForOrganization",
      DeleteTelemetryRule: "POST /DeleteTelemetryRule",
      DeleteTelemetryRuleForOrganization:
        "POST /DeleteTelemetryRuleForOrganization",
      GetTelemetryEvaluationStatus: "POST /GetTelemetryEvaluationStatus",
      GetTelemetryEvaluationStatusForOrganization:
        "POST /GetTelemetryEvaluationStatusForOrganization",
      GetTelemetryRule: "POST /GetTelemetryRule",
      GetTelemetryRuleForOrganization: "POST /GetTelemetryRuleForOrganization",
      ListResourceTelemetry: "POST /ListResourceTelemetry",
      ListResourceTelemetryForOrganization:
        "POST /ListResourceTelemetryForOrganization",
      ListTagsForResource: "POST /ListTagsForResource",
      ListTelemetryRules: "POST /ListTelemetryRules",
      ListTelemetryRulesForOrganization:
        "POST /ListTelemetryRulesForOrganization",
      StartTelemetryEvaluation: "POST /StartTelemetryEvaluation",
      StartTelemetryEvaluationForOrganization:
        "POST /StartTelemetryEvaluationForOrganization",
      StopTelemetryEvaluation: "POST /StopTelemetryEvaluation",
      StopTelemetryEvaluationForOrganization:
        "POST /StopTelemetryEvaluationForOrganization",
      TagResource: "POST /TagResource",
      UntagResource: "POST /UntagResource",
      UpdateTelemetryRule: "POST /UpdateTelemetryRule",
      UpdateTelemetryRuleForOrganization:
        "POST /UpdateTelemetryRuleForOrganization",
    },
  },
  odb: {
    sdkId: "odb",
    version: "2024-08-20",
    arnNamespace: "odb",
    cloudTrailEventSource: "odb.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_0",
    targetPrefix: "Odb",
  },
  omics: {
    sdkId: "Omics",
    version: "2022-11-28",
    arnNamespace: "omics",
    cloudTrailEventSource: "omics.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteS3AccessPolicy: "DELETE /s3accesspolicy/{s3AccessPointArn}",
      GetS3AccessPolicy: "GET /s3accesspolicy/{s3AccessPointArn}",
      PutS3AccessPolicy: "PUT /s3accesspolicy/{s3AccessPointArn}",
      AbortMultipartReadSetUpload:
        "DELETE /sequencestore/{sequenceStoreId}/upload/{uploadId}/abort",
      AcceptShare: "POST /share/{shareId}",
      BatchDeleteReadSet:
        "POST /sequencestore/{sequenceStoreId}/readset/batch/delete",
      CancelAnnotationImportJob: "DELETE /import/annotation/{jobId}",
      CancelRun: "POST /run/{id}/cancel",
      CancelVariantImportJob: "DELETE /import/variant/{jobId}",
      CompleteMultipartReadSetUpload:
        "POST /sequencestore/{sequenceStoreId}/upload/{uploadId}/complete",
      CreateAnnotationStore: "POST /annotationStore",
      CreateAnnotationStoreVersion: "POST /annotationStore/{name}/version",
      CreateMultipartReadSetUpload:
        "POST /sequencestore/{sequenceStoreId}/upload",
      CreateReferenceStore: "POST /referencestore",
      CreateRunCache: "POST /runCache",
      CreateRunGroup: "POST /runGroup",
      CreateSequenceStore: "POST /sequencestore",
      CreateShare: "POST /share",
      CreateVariantStore: "POST /variantStore",
      CreateWorkflow: "POST /workflow",
      CreateWorkflowVersion: "POST /workflow/{workflowId}/version",
      DeleteAnnotationStore: "DELETE /annotationStore/{name}",
      DeleteAnnotationStoreVersions:
        "POST /annotationStore/{name}/versions/delete",
      DeleteReference:
        "DELETE /referencestore/{referenceStoreId}/reference/{id}",
      DeleteReferenceStore: "DELETE /referencestore/{id}",
      DeleteRun: "DELETE /run/{id}",
      DeleteRunCache: "DELETE /runCache/{id}",
      DeleteRunGroup: "DELETE /runGroup/{id}",
      DeleteSequenceStore: "DELETE /sequencestore/{id}",
      DeleteShare: "DELETE /share/{shareId}",
      DeleteVariantStore: "DELETE /variantStore/{name}",
      DeleteWorkflow: "DELETE /workflow/{id}",
      DeleteWorkflowVersion:
        "DELETE /workflow/{workflowId}/version/{versionName}",
      GetAnnotationImportJob: "GET /import/annotation/{jobId}",
      GetAnnotationStore: "GET /annotationStore/{name}",
      GetAnnotationStoreVersion:
        "GET /annotationStore/{name}/version/{versionName}",
      GetReadSet: {
        http: "GET /sequencestore/{sequenceStoreId}/readset/{id}",
        traits: {
          payload: "httpPayload",
        },
      },
      GetReadSetActivationJob:
        "GET /sequencestore/{sequenceStoreId}/activationjob/{id}",
      GetReadSetExportJob:
        "GET /sequencestore/{sequenceStoreId}/exportjob/{id}",
      GetReadSetImportJob:
        "GET /sequencestore/{sequenceStoreId}/importjob/{id}",
      GetReadSetMetadata:
        "GET /sequencestore/{sequenceStoreId}/readset/{id}/metadata",
      GetReference: {
        http: "GET /referencestore/{referenceStoreId}/reference/{id}",
        traits: {
          payload: "httpPayload",
        },
      },
      GetReferenceImportJob:
        "GET /referencestore/{referenceStoreId}/importjob/{id}",
      GetReferenceMetadata:
        "GET /referencestore/{referenceStoreId}/reference/{id}/metadata",
      GetReferenceStore: "GET /referencestore/{id}",
      GetRun: "GET /run/{id}",
      GetRunCache: "GET /runCache/{id}",
      GetRunGroup: "GET /runGroup/{id}",
      GetRunTask: "GET /run/{id}/task/{taskId}",
      GetSequenceStore: "GET /sequencestore/{id}",
      GetShare: "GET /share/{shareId}",
      GetVariantImportJob: "GET /import/variant/{jobId}",
      GetVariantStore: "GET /variantStore/{name}",
      GetWorkflow: "GET /workflow/{id}",
      GetWorkflowVersion: "GET /workflow/{workflowId}/version/{versionName}",
      ListAnnotationImportJobs: "POST /import/annotations",
      ListAnnotationStoreVersions: "POST /annotationStore/{name}/versions",
      ListAnnotationStores: "POST /annotationStores",
      ListMultipartReadSetUploads:
        "POST /sequencestore/{sequenceStoreId}/uploads",
      ListReadSetActivationJobs:
        "POST /sequencestore/{sequenceStoreId}/activationjobs",
      ListReadSetExportJobs: "POST /sequencestore/{sequenceStoreId}/exportjobs",
      ListReadSetImportJobs: "POST /sequencestore/{sequenceStoreId}/importjobs",
      ListReadSetUploadParts:
        "POST /sequencestore/{sequenceStoreId}/upload/{uploadId}/parts",
      ListReadSets: "POST /sequencestore/{sequenceStoreId}/readsets",
      ListReferenceImportJobs:
        "POST /referencestore/{referenceStoreId}/importjobs",
      ListReferenceStores: "POST /referencestores",
      ListReferences: "POST /referencestore/{referenceStoreId}/references",
      ListRunCaches: "GET /runCache",
      ListRunGroups: "GET /runGroup",
      ListRunTasks: "GET /run/{id}/task",
      ListRuns: "GET /run",
      ListSequenceStores: "POST /sequencestores",
      ListShares: "POST /shares",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListVariantImportJobs: "POST /import/variants",
      ListVariantStores: "POST /variantStores",
      ListWorkflowVersions: "GET /workflow/{workflowId}/version",
      ListWorkflows: "GET /workflow",
      StartAnnotationImportJob: "POST /import/annotation",
      StartReadSetActivationJob:
        "POST /sequencestore/{sequenceStoreId}/activationjob",
      StartReadSetExportJob: "POST /sequencestore/{sequenceStoreId}/exportjob",
      StartReadSetImportJob: "POST /sequencestore/{sequenceStoreId}/importjob",
      StartReferenceImportJob:
        "POST /referencestore/{referenceStoreId}/importjob",
      StartRun: "POST /run",
      StartVariantImportJob: "POST /import/variant",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateAnnotationStore: "POST /annotationStore/{name}",
      UpdateAnnotationStoreVersion:
        "POST /annotationStore/{name}/version/{versionName}",
      UpdateRunCache: "POST /runCache/{id}",
      UpdateRunGroup: "POST /runGroup/{id}",
      UpdateSequenceStore: "PATCH /sequencestore/{id}",
      UpdateVariantStore: "POST /variantStore/{name}",
      UpdateWorkflow: "POST /workflow/{id}",
      UpdateWorkflowVersion:
        "POST /workflow/{workflowId}/version/{versionName}",
      UploadReadSetPart:
        "PUT /sequencestore/{sequenceStoreId}/upload/{uploadId}/part",
    },
  },
  opensearch: {
    sdkId: "OpenSearch",
    version: "2021-01-01",
    arnNamespace: "es",
    cloudTrailEventSource: "opensearch.amazonaws.com",
    endpointPrefix: "es",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptInboundConnection:
        "PUT /2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/accept",
      AddDataSource:
        "POST /2021-01-01/opensearch/domain/{DomainName}/dataSource",
      AddDirectQueryDataSource:
        "POST /2021-01-01/opensearch/directQueryDataSource",
      AddTags: "POST /2021-01-01/tags",
      AssociatePackage:
        "POST /2021-01-01/packages/associate/{PackageID}/{DomainName}",
      AssociatePackages: "POST /2021-01-01/packages/associateMultiple",
      AuthorizeVpcEndpointAccess:
        "POST /2021-01-01/opensearch/domain/{DomainName}/authorizeVpcEndpointAccess",
      CancelDomainConfigChange:
        "POST /2021-01-01/opensearch/domain/{DomainName}/config/cancel",
      CancelServiceSoftwareUpdate:
        "POST /2021-01-01/opensearch/serviceSoftwareUpdate/cancel",
      CreateApplication: "POST /2021-01-01/opensearch/application",
      CreateDomain: "POST /2021-01-01/opensearch/domain",
      CreateOutboundConnection:
        "POST /2021-01-01/opensearch/cc/outboundConnection",
      CreatePackage: "POST /2021-01-01/packages",
      CreateVpcEndpoint: "POST /2021-01-01/opensearch/vpcEndpoints",
      DeleteApplication: "DELETE /2021-01-01/opensearch/application/{id}",
      DeleteDataSource:
        "DELETE /2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}",
      DeleteDirectQueryDataSource:
        "DELETE /2021-01-01/opensearch/directQueryDataSource/{DataSourceName}",
      DeleteDomain: "DELETE /2021-01-01/opensearch/domain/{DomainName}",
      DeleteInboundConnection:
        "DELETE /2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}",
      DeleteOutboundConnection:
        "DELETE /2021-01-01/opensearch/cc/outboundConnection/{ConnectionId}",
      DeletePackage: "DELETE /2021-01-01/packages/{PackageID}",
      DeleteVpcEndpoint:
        "DELETE /2021-01-01/opensearch/vpcEndpoints/{VpcEndpointId}",
      DescribeDomain: "GET /2021-01-01/opensearch/domain/{DomainName}",
      DescribeDomainAutoTunes:
        "GET /2021-01-01/opensearch/domain/{DomainName}/autoTunes",
      DescribeDomainChangeProgress:
        "GET /2021-01-01/opensearch/domain/{DomainName}/progress",
      DescribeDomainConfig:
        "GET /2021-01-01/opensearch/domain/{DomainName}/config",
      DescribeDomainHealth:
        "GET /2021-01-01/opensearch/domain/{DomainName}/health",
      DescribeDomainNodes:
        "GET /2021-01-01/opensearch/domain/{DomainName}/nodes",
      DescribeDomains: "POST /2021-01-01/opensearch/domain-info",
      DescribeDryRunProgress:
        "GET /2021-01-01/opensearch/domain/{DomainName}/dryRun",
      DescribeInboundConnections:
        "POST /2021-01-01/opensearch/cc/inboundConnection/search",
      DescribeInstanceTypeLimits:
        "GET /2021-01-01/opensearch/instanceTypeLimits/{EngineVersion}/{InstanceType}",
      DescribeOutboundConnections:
        "POST /2021-01-01/opensearch/cc/outboundConnection/search",
      DescribePackages: "POST /2021-01-01/packages/describe",
      DescribeReservedInstanceOfferings:
        "GET /2021-01-01/opensearch/reservedInstanceOfferings",
      DescribeReservedInstances: "GET /2021-01-01/opensearch/reservedInstances",
      DescribeVpcEndpoints: "POST /2021-01-01/opensearch/vpcEndpoints/describe",
      DissociatePackage:
        "POST /2021-01-01/packages/dissociate/{PackageID}/{DomainName}",
      DissociatePackages: "POST /2021-01-01/packages/dissociateMultiple",
      GetApplication: "GET /2021-01-01/opensearch/application/{id}",
      GetCompatibleVersions: "GET /2021-01-01/opensearch/compatibleVersions",
      GetDataSource:
        "GET /2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}",
      GetDirectQueryDataSource:
        "GET /2021-01-01/opensearch/directQueryDataSource/{DataSourceName}",
      GetDomainMaintenanceStatus:
        "GET /2021-01-01/opensearch/domain/{DomainName}/domainMaintenance",
      GetPackageVersionHistory: "GET /2021-01-01/packages/{PackageID}/history",
      GetUpgradeHistory:
        "GET /2021-01-01/opensearch/upgradeDomain/{DomainName}/history",
      GetUpgradeStatus:
        "GET /2021-01-01/opensearch/upgradeDomain/{DomainName}/status",
      ListApplications: "GET /2021-01-01/opensearch/list-applications",
      ListDataSources:
        "GET /2021-01-01/opensearch/domain/{DomainName}/dataSource",
      ListDirectQueryDataSources:
        "GET /2021-01-01/opensearch/directQueryDataSource",
      ListDomainMaintenances:
        "GET /2021-01-01/opensearch/domain/{DomainName}/domainMaintenances",
      ListDomainNames: "GET /2021-01-01/domain",
      ListDomainsForPackage: "GET /2021-01-01/packages/{PackageID}/domains",
      ListInstanceTypeDetails:
        "GET /2021-01-01/opensearch/instanceTypeDetails/{EngineVersion}",
      ListPackagesForDomain: "GET /2021-01-01/domain/{DomainName}/packages",
      ListScheduledActions:
        "GET /2021-01-01/opensearch/domain/{DomainName}/scheduledActions",
      ListTags: "GET /2021-01-01/tags",
      ListVersions: "GET /2021-01-01/opensearch/versions",
      ListVpcEndpointAccess:
        "GET /2021-01-01/opensearch/domain/{DomainName}/listVpcEndpointAccess",
      ListVpcEndpoints: "GET /2021-01-01/opensearch/vpcEndpoints",
      ListVpcEndpointsForDomain:
        "GET /2021-01-01/opensearch/domain/{DomainName}/vpcEndpoints",
      PurchaseReservedInstanceOffering:
        "POST /2021-01-01/opensearch/purchaseReservedInstanceOffering",
      RejectInboundConnection:
        "PUT /2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/reject",
      RemoveTags: "POST /2021-01-01/tags-removal",
      RevokeVpcEndpointAccess:
        "POST /2021-01-01/opensearch/domain/{DomainName}/revokeVpcEndpointAccess",
      StartDomainMaintenance:
        "POST /2021-01-01/opensearch/domain/{DomainName}/domainMaintenance",
      StartServiceSoftwareUpdate:
        "POST /2021-01-01/opensearch/serviceSoftwareUpdate/start",
      UpdateApplication: "PUT /2021-01-01/opensearch/application/{id}",
      UpdateDataSource:
        "PUT /2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}",
      UpdateDirectQueryDataSource:
        "PUT /2021-01-01/opensearch/directQueryDataSource/{DataSourceName}",
      UpdateDomainConfig:
        "POST /2021-01-01/opensearch/domain/{DomainName}/config",
      UpdatePackage: "POST /2021-01-01/packages/update",
      UpdatePackageScope: "POST /2021-01-01/packages/updateScope",
      UpdateScheduledAction:
        "PUT /2021-01-01/opensearch/domain/{DomainName}/scheduledAction/update",
      UpdateVpcEndpoint: "POST /2021-01-01/opensearch/vpcEndpoints/update",
      UpgradeDomain: "POST /2021-01-01/opensearch/upgradeDomain",
    },
  },
  opensearchserverless: {
    sdkId: "OpenSearchServerless",
    version: "2021-11-01",
    arnNamespace: "aoss",
    cloudTrailEventSource: "aoss.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_0",
    targetPrefix: "OpenSearchServerless",
  },
  opsworks: {
    sdkId: "OpsWorks",
    version: "2013-02-18",
    arnNamespace: "opsworks",
    cloudTrailEventSource: "opsworks.amazonaws.com",
    endpointPrefix: "opsworks",
    protocol: "awsJson1_1",
    targetPrefix: "OpsWorks_20130218",
  },
  opsworkscm: {
    sdkId: "OpsWorksCM",
    version: "2016-11-01",
    arnNamespace: "opsworks-cm",
    cloudTrailEventSource: "opsworkscm.amazonaws.com",
    endpointPrefix: "opsworks-cm",
    protocol: "awsJson1_1",
    targetPrefix: "OpsWorksCM_V2016_11_01",
  },
  organizations: {
    sdkId: "Organizations",
    version: "2016-11-28",
    arnNamespace: "organizations",
    cloudTrailEventSource: "organizations.amazonaws.com",
    endpointPrefix: "organizations",
    protocol: "awsJson1_1",
    targetPrefix: "AWSOrganizationsV20161128",
  },
  osis: {
    sdkId: "OSIS",
    version: "2022-01-01",
    arnNamespace: "osis",
    cloudTrailEventSource: "osis.amazonaws.com",
    endpointPrefix: "osis",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreatePipeline: "POST /2022-01-01/osis/createPipeline",
      DeletePipeline: "DELETE /2022-01-01/osis/deletePipeline/{PipelineName}",
      GetPipeline: "GET /2022-01-01/osis/getPipeline/{PipelineName}",
      GetPipelineBlueprint:
        "GET /2022-01-01/osis/getPipelineBlueprint/{BlueprintName}",
      GetPipelineChangeProgress:
        "GET /2022-01-01/osis/getPipelineChangeProgress/{PipelineName}",
      ListPipelineBlueprints: "POST /2022-01-01/osis/listPipelineBlueprints",
      ListPipelines: "GET /2022-01-01/osis/listPipelines",
      ListTagsForResource: "GET /2022-01-01/osis/listTagsForResource",
      StartPipeline: "PUT /2022-01-01/osis/startPipeline/{PipelineName}",
      StopPipeline: "PUT /2022-01-01/osis/stopPipeline/{PipelineName}",
      TagResource: "POST /2022-01-01/osis/tagResource",
      UntagResource: "POST /2022-01-01/osis/untagResource",
      UpdatePipeline: "PUT /2022-01-01/osis/updatePipeline/{PipelineName}",
      ValidatePipeline: "POST /2022-01-01/osis/validatePipeline",
    },
  },
  outposts: {
    sdkId: "Outposts",
    version: "2019-12-03",
    arnNamespace: "outposts",
    cloudTrailEventSource: "outposts.amazonaws.com",
    endpointPrefix: "outposts",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelCapacityTask:
        "POST /outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}",
      CancelOrder: "POST /orders/{OrderId}/cancel",
      CreateOrder: "POST /orders",
      CreateOutpost: "POST /outposts",
      CreateSite: "POST /sites",
      DeleteOutpost: "DELETE /outposts/{OutpostId}",
      DeleteSite: "DELETE /sites/{SiteId}",
      GetCapacityTask:
        "GET /outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}",
      GetCatalogItem: "GET /catalog/item/{CatalogItemId}",
      GetConnection: "GET /connections/{ConnectionId}",
      GetOrder: "GET /orders/{OrderId}",
      GetOutpost: "GET /outposts/{OutpostId}",
      GetOutpostBillingInformation:
        "GET /outpost/{OutpostIdentifier}/billing-information",
      GetOutpostInstanceTypes: "GET /outposts/{OutpostId}/instanceTypes",
      GetOutpostSupportedInstanceTypes:
        "GET /outposts/{OutpostIdentifier}/supportedInstanceTypes",
      GetSite: "GET /sites/{SiteId}",
      GetSiteAddress: "GET /sites/{SiteId}/address",
      ListAssetInstances: "GET /outposts/{OutpostIdentifier}/assetInstances",
      ListAssets: "GET /outposts/{OutpostIdentifier}/assets",
      ListBlockingInstancesForCapacityTask:
        "GET /outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}/blockingInstances",
      ListCapacityTasks: "GET /capacity/tasks",
      ListCatalogItems: "GET /catalog/items",
      ListOrders: "GET /list-orders",
      ListOutposts: "GET /outposts",
      ListSites: "GET /sites",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      StartCapacityTask: "POST /outposts/{OutpostIdentifier}/capacity",
      StartConnection: "POST /connections",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateOutpost: "PATCH /outposts/{OutpostId}",
      UpdateSite: "PATCH /sites/{SiteId}",
      UpdateSiteAddress: "PUT /sites/{SiteId}/address",
      UpdateSiteRackPhysicalProperties:
        "PATCH /sites/{SiteId}/rackPhysicalProperties",
    },
  },
  panorama: {
    sdkId: "Panorama",
    version: "2019-07-24",
    arnNamespace: "panorama",
    cloudTrailEventSource: "panorama.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateApplicationInstance: "POST /application-instances",
      CreateJobForDevices: "POST /jobs",
      CreateNodeFromTemplateJob: "POST /packages/template-job",
      CreatePackage: "POST /packages",
      CreatePackageImportJob: "POST /packages/import-jobs",
      DeleteDevice: "DELETE /devices/{DeviceId}",
      DeletePackage: "DELETE /packages/{PackageId}",
      DeregisterPackageVersion:
        "DELETE /packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}",
      DescribeApplicationInstance:
        "GET /application-instances/{ApplicationInstanceId}",
      DescribeApplicationInstanceDetails:
        "GET /application-instances/{ApplicationInstanceId}/details",
      DescribeDevice: "GET /devices/{DeviceId}",
      DescribeDeviceJob: "GET /jobs/{JobId}",
      DescribeNode: "GET /nodes/{NodeId}",
      DescribeNodeFromTemplateJob: "GET /packages/template-job/{JobId}",
      DescribePackage: "GET /packages/metadata/{PackageId}",
      DescribePackageImportJob: "GET /packages/import-jobs/{JobId}",
      DescribePackageVersion:
        "GET /packages/metadata/{PackageId}/versions/{PackageVersion}",
      ListApplicationInstanceDependencies:
        "GET /application-instances/{ApplicationInstanceId}/package-dependencies",
      ListApplicationInstanceNodeInstances:
        "GET /application-instances/{ApplicationInstanceId}/node-instances",
      ListApplicationInstances: "GET /application-instances",
      ListDevices: "GET /devices",
      ListDevicesJobs: "GET /jobs",
      ListNodeFromTemplateJobs: "GET /packages/template-job",
      ListNodes: "GET /nodes",
      ListPackageImportJobs: "GET /packages/import-jobs",
      ListPackages: "GET /packages",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      ProvisionDevice: "POST /devices",
      RegisterPackageVersion:
        "PUT /packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}",
      RemoveApplicationInstance:
        "DELETE /application-instances/{ApplicationInstanceId}",
      SignalApplicationInstanceNodeInstances:
        "PUT /application-instances/{ApplicationInstanceId}/node-signals",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateDeviceMetadata: "PUT /devices/{DeviceId}",
    },
  },
  partnercentralselling: {
    sdkId: "PartnerCentral Selling",
    version: "2022-07-26",
    arnNamespace: "partnercentral",
    cloudTrailEventSource: "partnercentral-selling.amazonaws.com",
    endpointPrefix: "partnercentral-selling",
    protocol: "awsJson1_0",
    targetPrefix: "AWSPartnerCentralSelling",
  },
  paymentcryptography: {
    sdkId: "Payment Cryptography",
    version: "2021-09-14",
    arnNamespace: "payment-cryptography",
    cloudTrailEventSource: "payment-cryptography.amazonaws.com",
    endpointPrefix: "controlplane.payment-cryptography",
    protocol: "awsJson1_0",
    targetPrefix: "PaymentCryptographyControlPlane",
  },
  paymentcryptographydata: {
    sdkId: "Payment Cryptography Data",
    version: "2022-02-03",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "dataplane.payment-cryptography",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DecryptData: "POST /keys/{KeyIdentifier}/decrypt",
      EncryptData: "POST /keys/{KeyIdentifier}/encrypt",
      GenerateCardValidationData: "POST /cardvalidationdata/generate",
      GenerateMac: "POST /mac/generate",
      GenerateMacEmvPinChange: "POST /macemvpinchange/generate",
      GeneratePinData: "POST /pindata/generate",
      ReEncryptData: "POST /keys/{IncomingKeyIdentifier}/reencrypt",
      TranslatePinData: "POST /pindata/translate",
      VerifyAuthRequestCryptogram: "POST /cryptogram/verify",
      VerifyCardValidationData: "POST /cardvalidationdata/verify",
      VerifyMac: "POST /mac/verify",
      VerifyPinData: "POST /pindata/verify",
    },
  },
  pcaconnectorad: {
    sdkId: "Pca Connector Ad",
    version: "2018-05-10",
    arnNamespace: "pca-connector-ad",
    cloudTrailEventSource: "pca-connector-ad.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      CreateConnector: "POST /connectors",
      CreateDirectoryRegistration: "POST /directoryRegistrations",
      CreateServicePrincipalName:
        "POST /directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}",
      CreateTemplate: "POST /templates",
      CreateTemplateGroupAccessControlEntry:
        "POST /templates/{TemplateArn}/accessControlEntries",
      DeleteConnector: "DELETE /connectors/{ConnectorArn}",
      DeleteDirectoryRegistration:
        "DELETE /directoryRegistrations/{DirectoryRegistrationArn}",
      DeleteServicePrincipalName:
        "DELETE /directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}",
      DeleteTemplate: "DELETE /templates/{TemplateArn}",
      DeleteTemplateGroupAccessControlEntry:
        "DELETE /templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}",
      GetConnector: "GET /connectors/{ConnectorArn}",
      GetDirectoryRegistration:
        "GET /directoryRegistrations/{DirectoryRegistrationArn}",
      GetServicePrincipalName:
        "GET /directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}",
      GetTemplate: "GET /templates/{TemplateArn}",
      GetTemplateGroupAccessControlEntry:
        "GET /templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}",
      ListConnectors: "GET /connectors",
      ListDirectoryRegistrations: "GET /directoryRegistrations",
      ListServicePrincipalNames:
        "GET /directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames",
      ListTemplateGroupAccessControlEntries:
        "GET /templates/{TemplateArn}/accessControlEntries",
      ListTemplates: "GET /templates",
      UpdateTemplate: "PATCH /templates/{TemplateArn}",
      UpdateTemplateGroupAccessControlEntry:
        "PATCH /templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}",
    },
  },
  pcaconnectorscep: {
    sdkId: "Pca Connector Scep",
    version: "2018-05-10",
    arnNamespace: "pca-connector-scep",
    cloudTrailEventSource: "pca-connector-scep.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      CreateChallenge: "POST /challenges",
      CreateConnector: "POST /connectors",
      DeleteChallenge: "DELETE /challenges/{ChallengeArn}",
      DeleteConnector: "DELETE /connectors/{ConnectorArn}",
      GetChallengeMetadata: "GET /challengeMetadata/{ChallengeArn}",
      GetChallengePassword: "GET /challengePasswords/{ChallengeArn}",
      GetConnector: "GET /connectors/{ConnectorArn}",
      ListChallengeMetadata: "GET /challengeMetadata",
      ListConnectors: "GET /connectors",
    },
  },
  pcs: {
    sdkId: "PCS",
    version: "2023-02-10",
    arnNamespace: "pcs",
    cloudTrailEventSource: "pcs.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_0",
    targetPrefix: "AWSParallelComputingService",
  },
  personalize: {
    sdkId: "Personalize",
    version: "2018-05-22",
    arnNamespace: "personalize",
    cloudTrailEventSource: "personalize.amazonaws.com",
    endpointPrefix: "personalize",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonPersonalize",
  },
  personalizeevents: {
    sdkId: "Personalize Events",
    version: "2018-03-22",
    arnNamespace: "personalize",
    cloudTrailEventSource: "personalizeevents.amazonaws.com",
    endpointPrefix: "personalize-events",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      PutActionInteractions: "POST /action-interactions",
      PutActions: "POST /actions",
      PutEvents: "POST /events",
      PutItems: "POST /items",
      PutUsers: "POST /users",
    },
  },
  personalizeruntime: {
    sdkId: "Personalize Runtime",
    version: "2018-05-22",
    arnNamespace: "personalize",
    cloudTrailEventSource: "personalizeruntime.amazonaws.com",
    endpointPrefix: "personalize-runtime",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetActionRecommendations: "POST /action-recommendations",
      GetPersonalizedRanking: "POST /personalize-ranking",
      GetRecommendations: "POST /recommendations",
    },
  },
  pi: {
    sdkId: "PI",
    version: "2018-02-27",
    arnNamespace: "pi",
    cloudTrailEventSource: "pi.amazonaws.com",
    endpointPrefix: "pi",
    protocol: "awsJson1_1",
    targetPrefix: "PerformanceInsightsv20180227",
  },
  pinpoint: {
    sdkId: "Pinpoint",
    version: "2016-12-01",
    arnNamespace: "mobiletargeting",
    cloudTrailEventSource: "pinpoint.amazonaws.com",
    endpointPrefix: "pinpoint",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateApp: {
        http: "POST /v1/apps",
        traits: {
          ApplicationResponse: "httpPayload",
        },
      },
      CreateCampaign: {
        http: "POST /v1/apps/{ApplicationId}/campaigns",
        traits: {
          CampaignResponse: "httpPayload",
        },
      },
      CreateEmailTemplate: {
        http: "POST /v1/templates/{TemplateName}/email",
        traits: {
          CreateTemplateMessageBody: "httpPayload",
        },
      },
      CreateExportJob: {
        http: "POST /v1/apps/{ApplicationId}/jobs/export",
        traits: {
          ExportJobResponse: "httpPayload",
        },
      },
      CreateImportJob: {
        http: "POST /v1/apps/{ApplicationId}/jobs/import",
        traits: {
          ImportJobResponse: "httpPayload",
        },
      },
      CreateInAppTemplate: {
        http: "POST /v1/templates/{TemplateName}/inapp",
        traits: {
          TemplateCreateMessageBody: "httpPayload",
        },
      },
      CreateJourney: {
        http: "POST /v1/apps/{ApplicationId}/journeys",
        traits: {
          JourneyResponse: "httpPayload",
        },
      },
      CreatePushTemplate: {
        http: "POST /v1/templates/{TemplateName}/push",
        traits: {
          CreateTemplateMessageBody: "httpPayload",
        },
      },
      CreateRecommenderConfiguration: {
        http: "POST /v1/recommenders",
        traits: {
          RecommenderConfigurationResponse: "httpPayload",
        },
      },
      CreateSegment: {
        http: "POST /v1/apps/{ApplicationId}/segments",
        traits: {
          SegmentResponse: "httpPayload",
        },
      },
      CreateSmsTemplate: {
        http: "POST /v1/templates/{TemplateName}/sms",
        traits: {
          CreateTemplateMessageBody: "httpPayload",
        },
      },
      CreateVoiceTemplate: {
        http: "POST /v1/templates/{TemplateName}/voice",
        traits: {
          CreateTemplateMessageBody: "httpPayload",
        },
      },
      DeleteAdmChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/adm",
        traits: {
          ADMChannelResponse: "httpPayload",
        },
      },
      DeleteApnsChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/apns",
        traits: {
          APNSChannelResponse: "httpPayload",
        },
      },
      DeleteApnsSandboxChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/apns_sandbox",
        traits: {
          APNSSandboxChannelResponse: "httpPayload",
        },
      },
      DeleteApnsVoipChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/apns_voip",
        traits: {
          APNSVoipChannelResponse: "httpPayload",
        },
      },
      DeleteApnsVoipSandboxChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/apns_voip_sandbox",
        traits: {
          APNSVoipSandboxChannelResponse: "httpPayload",
        },
      },
      DeleteApp: {
        http: "DELETE /v1/apps/{ApplicationId}",
        traits: {
          ApplicationResponse: "httpPayload",
        },
      },
      DeleteBaiduChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/baidu",
        traits: {
          BaiduChannelResponse: "httpPayload",
        },
      },
      DeleteCampaign: {
        http: "DELETE /v1/apps/{ApplicationId}/campaigns/{CampaignId}",
        traits: {
          CampaignResponse: "httpPayload",
        },
      },
      DeleteEmailChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/email",
        traits: {
          EmailChannelResponse: "httpPayload",
        },
      },
      DeleteEmailTemplate: {
        http: "DELETE /v1/templates/{TemplateName}/email",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      DeleteEndpoint: {
        http: "DELETE /v1/apps/{ApplicationId}/endpoints/{EndpointId}",
        traits: {
          EndpointResponse: "httpPayload",
        },
      },
      DeleteEventStream: {
        http: "DELETE /v1/apps/{ApplicationId}/eventstream",
        traits: {
          EventStream: "httpPayload",
        },
      },
      DeleteGcmChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/gcm",
        traits: {
          GCMChannelResponse: "httpPayload",
        },
      },
      DeleteInAppTemplate: {
        http: "DELETE /v1/templates/{TemplateName}/inapp",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      DeleteJourney: {
        http: "DELETE /v1/apps/{ApplicationId}/journeys/{JourneyId}",
        traits: {
          JourneyResponse: "httpPayload",
        },
      },
      DeletePushTemplate: {
        http: "DELETE /v1/templates/{TemplateName}/push",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      DeleteRecommenderConfiguration: {
        http: "DELETE /v1/recommenders/{RecommenderId}",
        traits: {
          RecommenderConfigurationResponse: "httpPayload",
        },
      },
      DeleteSegment: {
        http: "DELETE /v1/apps/{ApplicationId}/segments/{SegmentId}",
        traits: {
          SegmentResponse: "httpPayload",
        },
      },
      DeleteSmsChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/sms",
        traits: {
          SMSChannelResponse: "httpPayload",
        },
      },
      DeleteSmsTemplate: {
        http: "DELETE /v1/templates/{TemplateName}/sms",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      DeleteUserEndpoints: {
        http: "DELETE /v1/apps/{ApplicationId}/users/{UserId}",
        traits: {
          EndpointsResponse: "httpPayload",
        },
      },
      DeleteVoiceChannel: {
        http: "DELETE /v1/apps/{ApplicationId}/channels/voice",
        traits: {
          VoiceChannelResponse: "httpPayload",
        },
      },
      DeleteVoiceTemplate: {
        http: "DELETE /v1/templates/{TemplateName}/voice",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      GetAdmChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/adm",
        traits: {
          ADMChannelResponse: "httpPayload",
        },
      },
      GetApnsChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/apns",
        traits: {
          APNSChannelResponse: "httpPayload",
        },
      },
      GetApnsSandboxChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/apns_sandbox",
        traits: {
          APNSSandboxChannelResponse: "httpPayload",
        },
      },
      GetApnsVoipChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/apns_voip",
        traits: {
          APNSVoipChannelResponse: "httpPayload",
        },
      },
      GetApnsVoipSandboxChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/apns_voip_sandbox",
        traits: {
          APNSVoipSandboxChannelResponse: "httpPayload",
        },
      },
      GetApp: {
        http: "GET /v1/apps/{ApplicationId}",
        traits: {
          ApplicationResponse: "httpPayload",
        },
      },
      GetApplicationDateRangeKpi: {
        http: "GET /v1/apps/{ApplicationId}/kpis/daterange/{KpiName}",
        traits: {
          ApplicationDateRangeKpiResponse: "httpPayload",
        },
      },
      GetApplicationSettings: {
        http: "GET /v1/apps/{ApplicationId}/settings",
        traits: {
          ApplicationSettingsResource: "httpPayload",
        },
      },
      GetApps: {
        http: "GET /v1/apps",
        traits: {
          ApplicationsResponse: "httpPayload",
        },
      },
      GetBaiduChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/baidu",
        traits: {
          BaiduChannelResponse: "httpPayload",
        },
      },
      GetCampaign: {
        http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}",
        traits: {
          CampaignResponse: "httpPayload",
        },
      },
      GetCampaignActivities: {
        http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}/activities",
        traits: {
          ActivitiesResponse: "httpPayload",
        },
      },
      GetCampaignDateRangeKpi: {
        http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}/kpis/daterange/{KpiName}",
        traits: {
          CampaignDateRangeKpiResponse: "httpPayload",
        },
      },
      GetCampaigns: {
        http: "GET /v1/apps/{ApplicationId}/campaigns",
        traits: {
          CampaignsResponse: "httpPayload",
        },
      },
      GetCampaignVersion: {
        http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions/{Version}",
        traits: {
          CampaignResponse: "httpPayload",
        },
      },
      GetCampaignVersions: {
        http: "GET /v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions",
        traits: {
          CampaignsResponse: "httpPayload",
        },
      },
      GetChannels: {
        http: "GET /v1/apps/{ApplicationId}/channels",
        traits: {
          ChannelsResponse: "httpPayload",
        },
      },
      GetEmailChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/email",
        traits: {
          EmailChannelResponse: "httpPayload",
        },
      },
      GetEmailTemplate: {
        http: "GET /v1/templates/{TemplateName}/email",
        traits: {
          EmailTemplateResponse: "httpPayload",
        },
      },
      GetEndpoint: {
        http: "GET /v1/apps/{ApplicationId}/endpoints/{EndpointId}",
        traits: {
          EndpointResponse: "httpPayload",
        },
      },
      GetEventStream: {
        http: "GET /v1/apps/{ApplicationId}/eventstream",
        traits: {
          EventStream: "httpPayload",
        },
      },
      GetExportJob: {
        http: "GET /v1/apps/{ApplicationId}/jobs/export/{JobId}",
        traits: {
          ExportJobResponse: "httpPayload",
        },
      },
      GetExportJobs: {
        http: "GET /v1/apps/{ApplicationId}/jobs/export",
        traits: {
          ExportJobsResponse: "httpPayload",
        },
      },
      GetGcmChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/gcm",
        traits: {
          GCMChannelResponse: "httpPayload",
        },
      },
      GetImportJob: {
        http: "GET /v1/apps/{ApplicationId}/jobs/import/{JobId}",
        traits: {
          ImportJobResponse: "httpPayload",
        },
      },
      GetImportJobs: {
        http: "GET /v1/apps/{ApplicationId}/jobs/import",
        traits: {
          ImportJobsResponse: "httpPayload",
        },
      },
      GetInAppMessages: {
        http: "GET /v1/apps/{ApplicationId}/endpoints/{EndpointId}/inappmessages",
        traits: {
          InAppMessagesResponse: "httpPayload",
        },
      },
      GetInAppTemplate: {
        http: "GET /v1/templates/{TemplateName}/inapp",
        traits: {
          InAppTemplateResponse: "httpPayload",
        },
      },
      GetJourney: {
        http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}",
        traits: {
          JourneyResponse: "httpPayload",
        },
      },
      GetJourneyDateRangeKpi: {
        http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/kpis/daterange/{KpiName}",
        traits: {
          JourneyDateRangeKpiResponse: "httpPayload",
        },
      },
      GetJourneyExecutionActivityMetrics: {
        http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/activities/{JourneyActivityId}/execution-metrics",
        traits: {
          JourneyExecutionActivityMetricsResponse: "httpPayload",
        },
      },
      GetJourneyExecutionMetrics: {
        http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/execution-metrics",
        traits: {
          JourneyExecutionMetricsResponse: "httpPayload",
        },
      },
      GetJourneyRunExecutionActivityMetrics: {
        http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/activities/{JourneyActivityId}/execution-metrics",
        traits: {
          JourneyRunExecutionActivityMetricsResponse: "httpPayload",
        },
      },
      GetJourneyRunExecutionMetrics: {
        http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/execution-metrics",
        traits: {
          JourneyRunExecutionMetricsResponse: "httpPayload",
        },
      },
      GetJourneyRuns: {
        http: "GET /v1/apps/{ApplicationId}/journeys/{JourneyId}/runs",
        traits: {
          JourneyRunsResponse: "httpPayload",
        },
      },
      GetPushTemplate: {
        http: "GET /v1/templates/{TemplateName}/push",
        traits: {
          PushNotificationTemplateResponse: "httpPayload",
        },
      },
      GetRecommenderConfiguration: {
        http: "GET /v1/recommenders/{RecommenderId}",
        traits: {
          RecommenderConfigurationResponse: "httpPayload",
        },
      },
      GetRecommenderConfigurations: {
        http: "GET /v1/recommenders",
        traits: {
          ListRecommenderConfigurationsResponse: "httpPayload",
        },
      },
      GetSegment: {
        http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}",
        traits: {
          SegmentResponse: "httpPayload",
        },
      },
      GetSegmentExportJobs: {
        http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/export",
        traits: {
          ExportJobsResponse: "httpPayload",
        },
      },
      GetSegmentImportJobs: {
        http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/import",
        traits: {
          ImportJobsResponse: "httpPayload",
        },
      },
      GetSegments: {
        http: "GET /v1/apps/{ApplicationId}/segments",
        traits: {
          SegmentsResponse: "httpPayload",
        },
      },
      GetSegmentVersion: {
        http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}/versions/{Version}",
        traits: {
          SegmentResponse: "httpPayload",
        },
      },
      GetSegmentVersions: {
        http: "GET /v1/apps/{ApplicationId}/segments/{SegmentId}/versions",
        traits: {
          SegmentsResponse: "httpPayload",
        },
      },
      GetSmsChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/sms",
        traits: {
          SMSChannelResponse: "httpPayload",
        },
      },
      GetSmsTemplate: {
        http: "GET /v1/templates/{TemplateName}/sms",
        traits: {
          SMSTemplateResponse: "httpPayload",
        },
      },
      GetUserEndpoints: {
        http: "GET /v1/apps/{ApplicationId}/users/{UserId}",
        traits: {
          EndpointsResponse: "httpPayload",
        },
      },
      GetVoiceChannel: {
        http: "GET /v1/apps/{ApplicationId}/channels/voice",
        traits: {
          VoiceChannelResponse: "httpPayload",
        },
      },
      GetVoiceTemplate: {
        http: "GET /v1/templates/{TemplateName}/voice",
        traits: {
          VoiceTemplateResponse: "httpPayload",
        },
      },
      ListJourneys: {
        http: "GET /v1/apps/{ApplicationId}/journeys",
        traits: {
          JourneysResponse: "httpPayload",
        },
      },
      ListTagsForResource: {
        http: "GET /v1/tags/{ResourceArn}",
        traits: {
          TagsModel: "httpPayload",
        },
      },
      ListTemplates: {
        http: "GET /v1/templates",
        traits: {
          TemplatesResponse: "httpPayload",
        },
      },
      ListTemplateVersions: {
        http: "GET /v1/templates/{TemplateName}/{TemplateType}/versions",
        traits: {
          TemplateVersionsResponse: "httpPayload",
        },
      },
      PhoneNumberValidate: {
        http: "POST /v1/phone/number/validate",
        traits: {
          NumberValidateResponse: "httpPayload",
        },
      },
      PutEvents: {
        http: "POST /v1/apps/{ApplicationId}/events",
        traits: {
          EventsResponse: "httpPayload",
        },
      },
      PutEventStream: {
        http: "POST /v1/apps/{ApplicationId}/eventstream",
        traits: {
          EventStream: "httpPayload",
        },
      },
      RemoveAttributes: {
        http: "PUT /v1/apps/{ApplicationId}/attributes/{AttributeType}",
        traits: {
          AttributesResource: "httpPayload",
        },
      },
      SendMessages: {
        http: "POST /v1/apps/{ApplicationId}/messages",
        traits: {
          MessageResponse: "httpPayload",
        },
      },
      SendOTPMessage: {
        http: "POST /v1/apps/{ApplicationId}/otp",
        traits: {
          MessageResponse: "httpPayload",
        },
      },
      SendUsersMessages: {
        http: "POST /v1/apps/{ApplicationId}/users-messages",
        traits: {
          SendUsersMessageResponse: "httpPayload",
        },
      },
      TagResource: "POST /v1/tags/{ResourceArn}",
      UntagResource: "DELETE /v1/tags/{ResourceArn}",
      UpdateAdmChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/adm",
        traits: {
          ADMChannelResponse: "httpPayload",
        },
      },
      UpdateApnsChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/apns",
        traits: {
          APNSChannelResponse: "httpPayload",
        },
      },
      UpdateApnsSandboxChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/apns_sandbox",
        traits: {
          APNSSandboxChannelResponse: "httpPayload",
        },
      },
      UpdateApnsVoipChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/apns_voip",
        traits: {
          APNSVoipChannelResponse: "httpPayload",
        },
      },
      UpdateApnsVoipSandboxChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/apns_voip_sandbox",
        traits: {
          APNSVoipSandboxChannelResponse: "httpPayload",
        },
      },
      UpdateApplicationSettings: {
        http: "PUT /v1/apps/{ApplicationId}/settings",
        traits: {
          ApplicationSettingsResource: "httpPayload",
        },
      },
      UpdateBaiduChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/baidu",
        traits: {
          BaiduChannelResponse: "httpPayload",
        },
      },
      UpdateCampaign: {
        http: "PUT /v1/apps/{ApplicationId}/campaigns/{CampaignId}",
        traits: {
          CampaignResponse: "httpPayload",
        },
      },
      UpdateEmailChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/email",
        traits: {
          EmailChannelResponse: "httpPayload",
        },
      },
      UpdateEmailTemplate: {
        http: "PUT /v1/templates/{TemplateName}/email",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      UpdateEndpoint: {
        http: "PUT /v1/apps/{ApplicationId}/endpoints/{EndpointId}",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      UpdateEndpointsBatch: {
        http: "PUT /v1/apps/{ApplicationId}/endpoints",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      UpdateGcmChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/gcm",
        traits: {
          GCMChannelResponse: "httpPayload",
        },
      },
      UpdateInAppTemplate: {
        http: "PUT /v1/templates/{TemplateName}/inapp",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      UpdateJourney: {
        http: "PUT /v1/apps/{ApplicationId}/journeys/{JourneyId}",
        traits: {
          JourneyResponse: "httpPayload",
        },
      },
      UpdateJourneyState: {
        http: "PUT /v1/apps/{ApplicationId}/journeys/{JourneyId}/state",
        traits: {
          JourneyResponse: "httpPayload",
        },
      },
      UpdatePushTemplate: {
        http: "PUT /v1/templates/{TemplateName}/push",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      UpdateRecommenderConfiguration: {
        http: "PUT /v1/recommenders/{RecommenderId}",
        traits: {
          RecommenderConfigurationResponse: "httpPayload",
        },
      },
      UpdateSegment: {
        http: "PUT /v1/apps/{ApplicationId}/segments/{SegmentId}",
        traits: {
          SegmentResponse: "httpPayload",
        },
      },
      UpdateSmsChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/sms",
        traits: {
          SMSChannelResponse: "httpPayload",
        },
      },
      UpdateSmsTemplate: {
        http: "PUT /v1/templates/{TemplateName}/sms",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      UpdateTemplateActiveVersion: {
        http: "PUT /v1/templates/{TemplateName}/{TemplateType}/active-version",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      UpdateVoiceChannel: {
        http: "PUT /v1/apps/{ApplicationId}/channels/voice",
        traits: {
          VoiceChannelResponse: "httpPayload",
        },
      },
      UpdateVoiceTemplate: {
        http: "PUT /v1/templates/{TemplateName}/voice",
        traits: {
          MessageBody: "httpPayload",
        },
      },
      VerifyOTPMessage: {
        http: "POST /v1/apps/{ApplicationId}/verify-otp",
        traits: {
          VerificationResponse: "httpPayload",
        },
      },
    },
  },
  pinpointemail: {
    sdkId: "Pinpoint Email",
    version: "2018-07-26",
    arnNamespace: "ses",
    cloudTrailEventSource: "pinpointemail.amazonaws.com",
    endpointPrefix: "email",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateConfigurationSet: "POST /v1/email/configuration-sets",
      CreateConfigurationSetEventDestination:
        "POST /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations",
      CreateDedicatedIpPool: "POST /v1/email/dedicated-ip-pools",
      CreateDeliverabilityTestReport:
        "POST /v1/email/deliverability-dashboard/test",
      CreateEmailIdentity: "POST /v1/email/identities",
      DeleteConfigurationSet:
        "DELETE /v1/email/configuration-sets/{ConfigurationSetName}",
      DeleteConfigurationSetEventDestination:
        "DELETE /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
      DeleteDedicatedIpPool: "DELETE /v1/email/dedicated-ip-pools/{PoolName}",
      DeleteEmailIdentity: "DELETE /v1/email/identities/{EmailIdentity}",
      GetAccount: "GET /v1/email/account",
      GetBlacklistReports:
        "GET /v1/email/deliverability-dashboard/blacklist-report",
      GetConfigurationSet:
        "GET /v1/email/configuration-sets/{ConfigurationSetName}",
      GetConfigurationSetEventDestinations:
        "GET /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations",
      GetDedicatedIp: "GET /v1/email/dedicated-ips/{Ip}",
      GetDedicatedIps: "GET /v1/email/dedicated-ips",
      GetDeliverabilityDashboardOptions:
        "GET /v1/email/deliverability-dashboard",
      GetDeliverabilityTestReport:
        "GET /v1/email/deliverability-dashboard/test-reports/{ReportId}",
      GetDomainDeliverabilityCampaign:
        "GET /v1/email/deliverability-dashboard/campaigns/{CampaignId}",
      GetDomainStatisticsReport:
        "GET /v1/email/deliverability-dashboard/statistics-report/{Domain}",
      GetEmailIdentity: "GET /v1/email/identities/{EmailIdentity}",
      ListConfigurationSets: "GET /v1/email/configuration-sets",
      ListDedicatedIpPools: "GET /v1/email/dedicated-ip-pools",
      ListDeliverabilityTestReports:
        "GET /v1/email/deliverability-dashboard/test-reports",
      ListDomainDeliverabilityCampaigns:
        "GET /v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns",
      ListEmailIdentities: "GET /v1/email/identities",
      ListTagsForResource: "GET /v1/email/tags",
      PutAccountDedicatedIpWarmupAttributes:
        "PUT /v1/email/account/dedicated-ips/warmup",
      PutAccountSendingAttributes: "PUT /v1/email/account/sending",
      PutConfigurationSetDeliveryOptions:
        "PUT /v1/email/configuration-sets/{ConfigurationSetName}/delivery-options",
      PutConfigurationSetReputationOptions:
        "PUT /v1/email/configuration-sets/{ConfigurationSetName}/reputation-options",
      PutConfigurationSetSendingOptions:
        "PUT /v1/email/configuration-sets/{ConfigurationSetName}/sending",
      PutConfigurationSetTrackingOptions:
        "PUT /v1/email/configuration-sets/{ConfigurationSetName}/tracking-options",
      PutDedicatedIpInPool: "PUT /v1/email/dedicated-ips/{Ip}/pool",
      PutDedicatedIpWarmupAttributes: "PUT /v1/email/dedicated-ips/{Ip}/warmup",
      PutDeliverabilityDashboardOption:
        "PUT /v1/email/deliverability-dashboard",
      PutEmailIdentityDkimAttributes:
        "PUT /v1/email/identities/{EmailIdentity}/dkim",
      PutEmailIdentityFeedbackAttributes:
        "PUT /v1/email/identities/{EmailIdentity}/feedback",
      PutEmailIdentityMailFromAttributes:
        "PUT /v1/email/identities/{EmailIdentity}/mail-from",
      SendEmail: "POST /v1/email/outbound-emails",
      TagResource: "POST /v1/email/tags",
      UntagResource: "DELETE /v1/email/tags",
      UpdateConfigurationSetEventDestination:
        "PUT /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
    },
  },
  pinpointsmsvoice: {
    sdkId: "Pinpoint SMS Voice",
    version: "2018-09-05",
    arnNamespace: "sms-voice",
    cloudTrailEventSource: "pinpointsmsvoice.amazonaws.com",
    endpointPrefix: "sms-voice.pinpoint",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateConfigurationSet: "POST /v1/sms-voice/configuration-sets",
      CreateConfigurationSetEventDestination:
        "POST /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations",
      DeleteConfigurationSet:
        "DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}",
      DeleteConfigurationSetEventDestination:
        "DELETE /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
      GetConfigurationSetEventDestinations:
        "GET /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations",
      ListConfigurationSets: "GET /v1/sms-voice/configuration-sets",
      SendVoiceMessage: "POST /v1/sms-voice/voice/message",
      UpdateConfigurationSetEventDestination:
        "PUT /v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
    },
  },
  pinpointsmsvoicev2: {
    sdkId: "Pinpoint SMS Voice V2",
    version: "2022-03-31",
    arnNamespace: "sms-voice",
    cloudTrailEventSource: "sms-voice.amazonaws.com",
    endpointPrefix: "sms-voice",
    protocol: "awsJson1_0",
    targetPrefix: "PinpointSMSVoiceV2",
  },
  pipes: {
    sdkId: "Pipes",
    version: "2015-10-07",
    arnNamespace: "pipes",
    cloudTrailEventSource: "pipes.amazonaws.com",
    endpointPrefix: "pipes",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreatePipe: "POST /v1/pipes/{Name}",
      DeletePipe: "DELETE /v1/pipes/{Name}",
      DescribePipe: "GET /v1/pipes/{Name}",
      ListPipes: "GET /v1/pipes",
      StartPipe: "POST /v1/pipes/{Name}/start",
      StopPipe: "POST /v1/pipes/{Name}/stop",
      UpdatePipe: "PUT /v1/pipes/{Name}",
    },
  },
  polly: {
    sdkId: "Polly",
    version: "2016-06-10",
    arnNamespace: "polly",
    cloudTrailEventSource: "polly.amazonaws.com",
    endpointPrefix: "polly",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteLexicon: "DELETE /v1/lexicons/{Name}",
      DescribeVoices: "GET /v1/voices",
      GetLexicon: "GET /v1/lexicons/{Name}",
      GetSpeechSynthesisTask: "GET /v1/synthesisTasks/{TaskId}",
      ListLexicons: "GET /v1/lexicons",
      ListSpeechSynthesisTasks: "GET /v1/synthesisTasks",
      PutLexicon: "PUT /v1/lexicons/{Name}",
      StartSpeechSynthesisTask: "POST /v1/synthesisTasks",
      SynthesizeSpeech: {
        http: "POST /v1/speech",
        traits: {
          AudioStream: "httpPayload",
          ContentType: "Content-Type",
          RequestCharacters: "x-amzn-RequestCharacters",
        },
      },
    },
  },
  pricing: {
    sdkId: "Pricing",
    version: "2017-10-15",
    arnNamespace: "pricing",
    cloudTrailEventSource: "pricelist.amazonaws.com",
    endpointPrefix: "api.pricing",
    protocol: "awsJson1_1",
    targetPrefix: "AWSPriceListService",
  },
  privatenetworks: {
    sdkId: "PrivateNetworks",
    version: "2021-12-03",
    arnNamespace: "private-networks",
    cloudTrailEventSource: "private-networks.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcknowledgeOrderReceipt: "POST /v1/orders/acknowledge",
      ActivateDeviceIdentifier: "POST /v1/device-identifiers/activate",
      ActivateNetworkSite: "POST /v1/network-sites/activate",
      ConfigureAccessPoint: "POST /v1/network-resources/configure",
      CreateNetwork: "POST /v1/networks",
      CreateNetworkSite: "POST /v1/network-sites",
      DeactivateDeviceIdentifier: "POST /v1/device-identifiers/deactivate",
      DeleteNetwork: "DELETE /v1/networks/{networkArn}",
      DeleteNetworkSite: "DELETE /v1/network-sites/{networkSiteArn}",
      GetDeviceIdentifier: "GET /v1/device-identifiers/{deviceIdentifierArn}",
      GetNetwork: "GET /v1/networks/{networkArn}",
      GetNetworkResource: "GET /v1/network-resources/{networkResourceArn}",
      GetNetworkSite: "GET /v1/network-sites/{networkSiteArn}",
      GetOrder: "GET /v1/orders/{orderArn}",
      ListDeviceIdentifiers: "POST /v1/device-identifiers/list",
      ListNetworkResources: "POST /v1/network-resources",
      ListNetworks: "POST /v1/networks/list",
      ListNetworkSites: "POST /v1/network-sites/list",
      ListOrders: "POST /v1/orders/list",
      ListTagsForResource: "GET /tags/{resourceArn}",
      Ping: "GET /ping",
      StartNetworkResourceUpdate: "POST /v1/network-resources/update",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateNetworkSite: "PUT /v1/network-sites/site",
      UpdateNetworkSitePlan: "PUT /v1/network-sites/plan",
    },
  },
  proton: {
    sdkId: "Proton",
    version: "2020-07-20",
    arnNamespace: "",
    cloudTrailEventSource: "",
    endpointPrefix: "proton",
    protocol: "awsJson1_0",
    targetPrefix: "AwsProton20200720",
  },
  qapps: {
    sdkId: "QApps",
    version: "2023-11-27",
    arnNamespace: "qapps",
    cloudTrailEventSource: "qapps.amazonaws.com",
    endpointPrefix: "data.qapps",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateLibraryItemReview: "POST /catalog.associateItemRating",
      AssociateQAppWithUser: "POST /apps.install",
      BatchCreateCategory: "POST /catalog.createCategories",
      BatchDeleteCategory: "POST /catalog.deleteCategories",
      BatchUpdateCategory: "POST /catalog.updateCategories",
      CreateLibraryItem: "POST /catalog.createItem",
      CreatePresignedUrl: "POST /apps.createPresignedUrl",
      CreateQApp: "POST /apps.create",
      DeleteLibraryItem: "POST /catalog.deleteItem",
      DeleteQApp: "POST /apps.delete",
      DescribeQAppPermissions: "GET /apps.describeQAppPermissions",
      DisassociateLibraryItemReview: "POST /catalog.disassociateItemRating",
      DisassociateQAppFromUser: "POST /apps.uninstall",
      ExportQAppSessionData: "POST /runtime.exportQAppSessionData",
      GetLibraryItem: "GET /catalog.getItem",
      GetQApp: "GET /apps.get",
      GetQAppSession: "GET /runtime.getQAppSession",
      GetQAppSessionMetadata: "GET /runtime.getQAppSessionMetadata",
      ImportDocument: "POST /apps.importDocument",
      ListCategories: "GET /catalog.listCategories",
      ListLibraryItems: "GET /catalog.list",
      ListQApps: "GET /apps.list",
      ListQAppSessionData: "GET /runtime.listQAppSessionData",
      ListTagsForResource: "GET /tags/{resourceARN}",
      PredictQApp: "POST /apps.predictQApp",
      StartQAppSession: "POST /runtime.startQAppSession",
      StopQAppSession: "POST /runtime.deleteMiniAppRun",
      TagResource: "POST /tags/{resourceARN}",
      UntagResource: "DELETE /tags/{resourceARN}",
      UpdateLibraryItem: "POST /catalog.updateItem",
      UpdateLibraryItemMetadata: "POST /catalog.updateItemMetadata",
      UpdateQApp: "POST /apps.update",
      UpdateQAppPermissions: "POST /apps.updateQAppPermissions",
      UpdateQAppSession: "POST /runtime.updateQAppSession",
      UpdateQAppSessionMetadata: "POST /runtime.updateQAppSessionMetadata",
    },
  },
  qbusiness: {
    sdkId: "QBusiness",
    version: "2023-11-27",
    arnNamespace: "qbusiness",
    cloudTrailEventSource: "qbusiness.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociatePermission: "POST /applications/{applicationId}/policy",
      BatchDeleteDocument:
        "POST /applications/{applicationId}/indices/{indexId}/documents/delete",
      BatchPutDocument:
        "POST /applications/{applicationId}/indices/{indexId}/documents",
      CancelSubscription:
        "DELETE /applications/{applicationId}/subscriptions/{subscriptionId}",
      Chat: {
        http: "POST /applications/{applicationId}/conversations",
        traits: {
          outputStream: "httpPayload",
        },
      },
      ChatSync: "POST /applications/{applicationId}/conversations?sync",
      CheckDocumentAccess:
        "GET /applications/{applicationId}/index/{indexId}/users/{userId}/documents/{documentId}/check-document-access",
      CreateAnonymousWebExperienceUrl:
        "POST /applications/{applicationId}/experiences/{webExperienceId}/anonymous-url",
      CreateChatResponseConfiguration:
        "POST /applications/{applicationId}/chatresponseconfigurations",
      CreateSubscription: "POST /applications/{applicationId}/subscriptions",
      CreateUser: "POST /applications/{applicationId}/users",
      DeleteAttachment:
        "DELETE /applications/{applicationId}/conversations/{conversationId}/attachments/{attachmentId}",
      DeleteChatControlsConfiguration:
        "DELETE /applications/{applicationId}/chatcontrols",
      DeleteChatResponseConfiguration:
        "DELETE /applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}",
      DeleteConversation:
        "DELETE /applications/{applicationId}/conversations/{conversationId}",
      DeleteGroup:
        "DELETE /applications/{applicationId}/indices/{indexId}/groups/{groupName}",
      DeleteUser: "DELETE /applications/{applicationId}/users/{userId}",
      DisassociatePermission:
        "DELETE /applications/{applicationId}/policy/{statementId}",
      GetChatControlsConfiguration:
        "GET /applications/{applicationId}/chatcontrols",
      GetChatResponseConfiguration:
        "GET /applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}",
      GetGroup:
        "GET /applications/{applicationId}/indices/{indexId}/groups/{groupName}",
      GetMedia:
        "GET /applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/media/{mediaId}",
      GetPolicy: "GET /applications/{applicationId}/policy",
      GetUser: "GET /applications/{applicationId}/users/{userId}",
      ListAttachments: "GET /applications/{applicationId}/attachments",
      ListChatResponseConfigurations:
        "GET /applications/{applicationId}/chatresponseconfigurations",
      ListConversations: "GET /applications/{applicationId}/conversations",
      ListDataSourceSyncJobs:
        "GET /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/syncjobs",
      ListDocuments:
        "GET /applications/{applicationId}/index/{indexId}/documents",
      ListGroups: "GET /applications/{applicationId}/indices/{indexId}/groups",
      ListMessages:
        "GET /applications/{applicationId}/conversations/{conversationId}",
      ListPluginActions:
        "GET /applications/{applicationId}/plugins/{pluginId}/actions",
      ListPluginTypeActions: "GET /pluginTypes/{pluginType}/actions",
      ListPluginTypeMetadata: "GET /pluginTypeMetadata",
      ListSubscriptions: "GET /applications/{applicationId}/subscriptions",
      ListTagsForResource: "GET /v1/tags/{resourceARN}",
      PutFeedback:
        "POST /applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/feedback",
      PutGroup: "PUT /applications/{applicationId}/indices/{indexId}/groups",
      SearchRelevantContent:
        "POST /applications/{applicationId}/relevant-content",
      StartDataSourceSyncJob:
        "POST /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/startsync",
      StopDataSourceSyncJob:
        "POST /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/stopsync",
      TagResource: "POST /v1/tags/{resourceARN}",
      UntagResource: "DELETE /v1/tags/{resourceARN}",
      UpdateChatControlsConfiguration:
        "PATCH /applications/{applicationId}/chatcontrols",
      UpdateChatResponseConfiguration:
        "PUT /applications/{applicationId}/chatresponseconfigurations/{chatResponseConfigurationId}",
      UpdateSubscription:
        "PUT /applications/{applicationId}/subscriptions/{subscriptionId}",
      UpdateUser: "PUT /applications/{applicationId}/users/{userId}",
      CreateApplication: "POST /applications",
      CreateDataAccessor: "POST /applications/{applicationId}/dataaccessors",
      CreateDataSource:
        "POST /applications/{applicationId}/indices/{indexId}/datasources",
      CreateIndex: "POST /applications/{applicationId}/indices",
      CreatePlugin: "POST /applications/{applicationId}/plugins",
      CreateRetriever: "POST /applications/{applicationId}/retrievers",
      CreateWebExperience: "POST /applications/{applicationId}/experiences",
      DeleteApplication: "DELETE /applications/{applicationId}",
      DeleteDataAccessor:
        "DELETE /applications/{applicationId}/dataaccessors/{dataAccessorId}",
      DeleteDataSource:
        "DELETE /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}",
      DeleteIndex: "DELETE /applications/{applicationId}/indices/{indexId}",
      DeletePlugin: "DELETE /applications/{applicationId}/plugins/{pluginId}",
      DeleteRetriever:
        "DELETE /applications/{applicationId}/retrievers/{retrieverId}",
      DeleteWebExperience:
        "DELETE /applications/{applicationId}/experiences/{webExperienceId}",
      GetApplication: "GET /applications/{applicationId}",
      GetDataAccessor:
        "GET /applications/{applicationId}/dataaccessors/{dataAccessorId}",
      GetDataSource:
        "GET /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}",
      GetIndex: "GET /applications/{applicationId}/indices/{indexId}",
      GetPlugin: "GET /applications/{applicationId}/plugins/{pluginId}",
      GetRetriever:
        "GET /applications/{applicationId}/retrievers/{retrieverId}",
      GetWebExperience:
        "GET /applications/{applicationId}/experiences/{webExperienceId}",
      ListApplications: "GET /applications",
      ListDataAccessors: "GET /applications/{applicationId}/dataaccessors",
      ListDataSources:
        "GET /applications/{applicationId}/indices/{indexId}/datasources",
      ListIndices: "GET /applications/{applicationId}/indices",
      ListPlugins: "GET /applications/{applicationId}/plugins",
      ListRetrievers: "GET /applications/{applicationId}/retrievers",
      ListWebExperiences: "GET /applications/{applicationId}/experiences",
      UpdateApplication: "PUT /applications/{applicationId}",
      UpdateDataAccessor:
        "PUT /applications/{applicationId}/dataaccessors/{dataAccessorId}",
      UpdateDataSource:
        "PUT /applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}",
      UpdateIndex: "PUT /applications/{applicationId}/indices/{indexId}",
      UpdatePlugin: "PUT /applications/{applicationId}/plugins/{pluginId}",
      UpdateRetriever:
        "PUT /applications/{applicationId}/retrievers/{retrieverId}",
      UpdateWebExperience:
        "PUT /applications/{applicationId}/experiences/{webExperienceId}",
    },
  },
  qconnect: {
    sdkId: "QConnect",
    version: "2020-10-19",
    arnNamespace: "wisdom",
    cloudTrailEventSource: "wisdom.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      ActivateMessageTemplate:
        "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/activate",
      CreateAIAgent: "POST /assistants/{assistantId}/aiagents",
      CreateAIAgentVersion:
        "POST /assistants/{assistantId}/aiagents/{aiAgentId}/versions",
      CreateAIGuardrail: "POST /assistants/{assistantId}/aiguardrails",
      CreateAIGuardrailVersion:
        "POST /assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions",
      CreateAIPrompt: "POST /assistants/{assistantId}/aiprompts",
      CreateAIPromptVersion:
        "POST /assistants/{assistantId}/aiprompts/{aiPromptId}/versions",
      CreateAssistant: "POST /assistants",
      CreateAssistantAssociation: "POST /assistants/{assistantId}/associations",
      CreateContent: "POST /knowledgeBases/{knowledgeBaseId}/contents",
      CreateContentAssociation:
        "POST /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations",
      CreateKnowledgeBase: "POST /knowledgeBases",
      CreateMessageTemplate:
        "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates",
      CreateMessageTemplateAttachment:
        "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments",
      CreateMessageTemplateVersion:
        "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions",
      CreateQuickResponse:
        "POST /knowledgeBases/{knowledgeBaseId}/quickResponses",
      CreateSession: "POST /assistants/{assistantId}/sessions",
      DeactivateMessageTemplate:
        "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/deactivate",
      DeleteAIAgent: "DELETE /assistants/{assistantId}/aiagents/{aiAgentId}",
      DeleteAIAgentVersion:
        "DELETE /assistants/{assistantId}/aiagents/{aiAgentId}/versions/{versionNumber}",
      DeleteAIGuardrail:
        "DELETE /assistants/{assistantId}/aiguardrails/{aiGuardrailId}",
      DeleteAIGuardrailVersion:
        "DELETE /assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions/{versionNumber}",
      DeleteAIPrompt: "DELETE /assistants/{assistantId}/aiprompts/{aiPromptId}",
      DeleteAIPromptVersion:
        "DELETE /assistants/{assistantId}/aiprompts/{aiPromptId}/versions/{versionNumber}",
      DeleteAssistant: "DELETE /assistants/{assistantId}",
      DeleteAssistantAssociation:
        "DELETE /assistants/{assistantId}/associations/{assistantAssociationId}",
      DeleteContent:
        "DELETE /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
      DeleteContentAssociation:
        "DELETE /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}",
      DeleteImportJob:
        "DELETE /knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}",
      DeleteKnowledgeBase: "DELETE /knowledgeBases/{knowledgeBaseId}",
      DeleteMessageTemplate:
        "DELETE /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}",
      DeleteMessageTemplateAttachment:
        "DELETE /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments/{attachmentId}",
      DeleteQuickResponse:
        "DELETE /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
      GetAIAgent: "GET /assistants/{assistantId}/aiagents/{aiAgentId}",
      GetAIGuardrail:
        "GET /assistants/{assistantId}/aiguardrails/{aiGuardrailId}",
      GetAIPrompt: "GET /assistants/{assistantId}/aiprompts/{aiPromptId}",
      GetAssistant: "GET /assistants/{assistantId}",
      GetAssistantAssociation:
        "GET /assistants/{assistantId}/associations/{assistantAssociationId}",
      GetContent: "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
      GetContentAssociation:
        "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}",
      GetContentSummary:
        "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary",
      GetImportJob:
        "GET /knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}",
      GetKnowledgeBase: "GET /knowledgeBases/{knowledgeBaseId}",
      GetMessageTemplate:
        "GET /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}",
      GetNextMessage:
        "GET /assistants/{assistantId}/sessions/{sessionId}/messages/next",
      GetQuickResponse:
        "GET /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
      GetRecommendations:
        "GET /assistants/{assistantId}/sessions/{sessionId}/recommendations",
      GetSession: "GET /assistants/{assistantId}/sessions/{sessionId}",
      ListAIAgentVersions:
        "GET /assistants/{assistantId}/aiagents/{aiAgentId}/versions",
      ListAIAgents: "GET /assistants/{assistantId}/aiagents",
      ListAIGuardrailVersions:
        "GET /assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions",
      ListAIGuardrails: "GET /assistants/{assistantId}/aiguardrails",
      ListAIPromptVersions:
        "GET /assistants/{assistantId}/aiprompts/{aiPromptId}/versions",
      ListAIPrompts: "GET /assistants/{assistantId}/aiprompts",
      ListAssistantAssociations: "GET /assistants/{assistantId}/associations",
      ListAssistants: "GET /assistants",
      ListContentAssociations:
        "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations",
      ListContents: "GET /knowledgeBases/{knowledgeBaseId}/contents",
      ListImportJobs: "GET /knowledgeBases/{knowledgeBaseId}/importJobs",
      ListKnowledgeBases: "GET /knowledgeBases",
      ListMessageTemplateVersions:
        "GET /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions",
      ListMessageTemplates:
        "GET /knowledgeBases/{knowledgeBaseId}/messageTemplates",
      ListMessages:
        "GET /assistants/{assistantId}/sessions/{sessionId}/messages",
      ListQuickResponses:
        "GET /knowledgeBases/{knowledgeBaseId}/quickResponses",
      NotifyRecommendationsReceived:
        "POST /assistants/{assistantId}/sessions/{sessionId}/recommendations/notify",
      PutFeedback: "PUT /assistants/{assistantId}/feedback",
      QueryAssistant: "POST /assistants/{assistantId}/query",
      RemoveAssistantAIAgent:
        "DELETE /assistants/{assistantId}/aiagentConfiguration",
      RemoveKnowledgeBaseTemplateUri:
        "DELETE /knowledgeBases/{knowledgeBaseId}/templateUri",
      RenderMessageTemplate:
        "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/render",
      SearchContent: "POST /knowledgeBases/{knowledgeBaseId}/search",
      SearchMessageTemplates:
        "POST /knowledgeBases/{knowledgeBaseId}/search/messageTemplates",
      SearchQuickResponses:
        "POST /knowledgeBases/{knowledgeBaseId}/search/quickResponses",
      SearchSessions: "POST /assistants/{assistantId}/searchSessions",
      SendMessage:
        "POST /assistants/{assistantId}/sessions/{sessionId}/message",
      StartContentUpload: "POST /knowledgeBases/{knowledgeBaseId}/upload",
      StartImportJob: "POST /knowledgeBases/{knowledgeBaseId}/importJobs",
      UpdateAIAgent: "POST /assistants/{assistantId}/aiagents/{aiAgentId}",
      UpdateAIGuardrail:
        "POST /assistants/{assistantId}/aiguardrails/{aiGuardrailId}",
      UpdateAIPrompt: "POST /assistants/{assistantId}/aiprompts/{aiPromptId}",
      UpdateAssistantAIAgent:
        "POST /assistants/{assistantId}/aiagentConfiguration",
      UpdateContent:
        "POST /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
      UpdateKnowledgeBaseTemplateUri:
        "POST /knowledgeBases/{knowledgeBaseId}/templateUri",
      UpdateMessageTemplate:
        "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}",
      UpdateMessageTemplateMetadata:
        "POST /knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/metadata",
      UpdateQuickResponse:
        "POST /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
      UpdateSession: "POST /assistants/{assistantId}/sessions/{sessionId}",
      UpdateSessionData:
        "PATCH /assistants/{assistantId}/sessions/{sessionId}/data",
    },
  },
  qldb: {
    sdkId: "QLDB",
    version: "2019-01-02",
    arnNamespace: "qldb",
    cloudTrailEventSource: "qldb.amazonaws.com",
    endpointPrefix: "qldb",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelJournalKinesisStream:
        "DELETE /ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}",
      CreateLedger: "POST /ledgers",
      DeleteLedger: "DELETE /ledgers/{Name}",
      DescribeJournalKinesisStream:
        "GET /ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}",
      DescribeJournalS3Export:
        "GET /ledgers/{Name}/journal-s3-exports/{ExportId}",
      DescribeLedger: "GET /ledgers/{Name}",
      ExportJournalToS3: "POST /ledgers/{Name}/journal-s3-exports",
      GetBlock: "POST /ledgers/{Name}/block",
      GetDigest: "POST /ledgers/{Name}/digest",
      GetRevision: "POST /ledgers/{Name}/revision",
      ListJournalKinesisStreamsForLedger:
        "GET /ledgers/{LedgerName}/journal-kinesis-streams",
      ListJournalS3Exports: "GET /journal-s3-exports",
      ListJournalS3ExportsForLedger: "GET /ledgers/{Name}/journal-s3-exports",
      ListLedgers: "GET /ledgers",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      StreamJournalToKinesis:
        "POST /ledgers/{LedgerName}/journal-kinesis-streams",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateLedger: "PATCH /ledgers/{Name}",
      UpdateLedgerPermissionsMode: "PATCH /ledgers/{Name}/permissions-mode",
    },
  },
  qldbsession: {
    sdkId: "QLDB Session",
    version: "2019-07-11",
    arnNamespace: "qldb",
    cloudTrailEventSource: "qldbsession.amazonaws.com",
    endpointPrefix: "session.qldb",
    protocol: "awsJson1_0",
    targetPrefix: "QLDBSession",
  },
  quicksight: {
    sdkId: "QuickSight",
    version: "2018-04-01",
    arnNamespace: "quicksight",
    cloudTrailEventSource: "quicksight.amazonaws.com",
    endpointPrefix: "quicksight",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchCreateTopicReviewedAnswer: {
        http: "POST /accounts/{AwsAccountId}/topics/{TopicId}/batch-create-reviewed-answers",
        traits: {
          Status: "httpResponseCode",
        },
      },
      BatchDeleteTopicReviewedAnswer: {
        http: "POST /accounts/{AwsAccountId}/topics/{TopicId}/batch-delete-reviewed-answers",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CancelIngestion: {
        http: "DELETE /accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateAccountCustomization: {
        http: "POST /accounts/{AwsAccountId}/customizations",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateAccountSubscription: {
        http: "POST /account/{AwsAccountId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateAnalysis: {
        http: "POST /accounts/{AwsAccountId}/analyses/{AnalysisId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateBrand: "POST /accounts/{AwsAccountId}/brands/{BrandId}",
      CreateCustomPermissions:
        "POST /accounts/{AwsAccountId}/custom-permissions",
      CreateDashboard: {
        http: "POST /accounts/{AwsAccountId}/dashboards/{DashboardId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateDataSet: {
        http: "POST /accounts/{AwsAccountId}/data-sets",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateDataSource: {
        http: "POST /accounts/{AwsAccountId}/data-sources",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateFolder: {
        http: "POST /accounts/{AwsAccountId}/folders/{FolderId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateFolderMembership:
        "PUT /accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}",
      CreateGroup: {
        http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/groups",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateGroupMembership: {
        http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateIAMPolicyAssignment: {
        http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateIngestion: {
        http: "PUT /accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateNamespace: {
        http: "POST /accounts/{AwsAccountId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateRefreshSchedule: {
        http: "POST /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateRoleMembership: {
        http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateTemplate: {
        http: "POST /accounts/{AwsAccountId}/templates/{TemplateId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateTemplateAlias: {
        http: "POST /accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateTheme: {
        http: "POST /accounts/{AwsAccountId}/themes/{ThemeId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateThemeAlias: {
        http: "POST /accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateTopic: {
        http: "POST /accounts/{AwsAccountId}/topics",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateTopicRefreshSchedule: {
        http: "POST /accounts/{AwsAccountId}/topics/{TopicId}/schedules",
        traits: {
          Status: "httpResponseCode",
        },
      },
      CreateVPCConnection: {
        http: "POST /accounts/{AwsAccountId}/vpc-connections",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteAccountCustomization: {
        http: "DELETE /accounts/{AwsAccountId}/customizations",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteAccountSubscription: {
        http: "DELETE /account/{AwsAccountId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteAnalysis: {
        http: "DELETE /accounts/{AwsAccountId}/analyses/{AnalysisId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteBrand: "DELETE /accounts/{AwsAccountId}/brands/{BrandId}",
      DeleteBrandAssignment: "DELETE /accounts/{AwsAccountId}/brandassignments",
      DeleteCustomPermissions:
        "DELETE /accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}",
      DeleteDashboard: {
        http: "DELETE /accounts/{AwsAccountId}/dashboards/{DashboardId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteDataSet: {
        http: "DELETE /accounts/{AwsAccountId}/data-sets/{DataSetId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteDataSetRefreshProperties: {
        http: "DELETE /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteDataSource: {
        http: "DELETE /accounts/{AwsAccountId}/data-sources/{DataSourceId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteDefaultQBusinessApplication: {
        http: "DELETE /accounts/{AwsAccountId}/default-qbusiness-application",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteFolder: {
        http: "DELETE /accounts/{AwsAccountId}/folders/{FolderId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteFolderMembership:
        "DELETE /accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}",
      DeleteGroup: {
        http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteGroupMembership: {
        http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteIAMPolicyAssignment: {
        http: "DELETE /accounts/{AwsAccountId}/namespace/{Namespace}/iam-policy-assignments/{AssignmentName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteIdentityPropagationConfig: {
        http: "DELETE /accounts/{AwsAccountId}/identity-propagation-config/{Service}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteNamespace: {
        http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteRefreshSchedule: {
        http: "DELETE /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteRoleCustomPermission:
        "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission",
      DeleteRoleMembership: {
        http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteTemplate: {
        http: "DELETE /accounts/{AwsAccountId}/templates/{TemplateId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteTemplateAlias: {
        http: "DELETE /accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteTheme: {
        http: "DELETE /accounts/{AwsAccountId}/themes/{ThemeId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteThemeAlias: {
        http: "DELETE /accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteTopic: {
        http: "DELETE /accounts/{AwsAccountId}/topics/{TopicId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteTopicRefreshSchedule: {
        http: "DELETE /accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteUser: {
        http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteUserByPrincipalId: {
        http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteUserCustomPermission: {
        http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/custom-permission",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DeleteVPCConnection: {
        http: "DELETE /accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeAccountCustomization: {
        http: "GET /accounts/{AwsAccountId}/customizations",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeAccountSettings: {
        http: "GET /accounts/{AwsAccountId}/settings",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeAccountSubscription: {
        http: "GET /account/{AwsAccountId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeAnalysis: {
        http: "GET /accounts/{AwsAccountId}/analyses/{AnalysisId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeAnalysisDefinition: {
        http: "GET /accounts/{AwsAccountId}/analyses/{AnalysisId}/definition",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeAnalysisPermissions: {
        http: "GET /accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeAssetBundleExportJob: {
        http: "GET /accounts/{AwsAccountId}/asset-bundle-export-jobs/{AssetBundleExportJobId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeAssetBundleImportJob: {
        http: "GET /accounts/{AwsAccountId}/asset-bundle-import-jobs/{AssetBundleImportJobId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeBrand: "GET /accounts/{AwsAccountId}/brands/{BrandId}",
      DescribeBrandAssignment: "GET /accounts/{AwsAccountId}/brandassignments",
      DescribeBrandPublishedVersion:
        "GET /accounts/{AwsAccountId}/brands/{BrandId}/publishedversion",
      DescribeCustomPermissions:
        "GET /accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}",
      DescribeDashboard: {
        http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDashboardDefinition: {
        http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/definition",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDashboardPermissions: {
        http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDashboardSnapshotJob:
        "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}",
      DescribeDashboardSnapshotJobResult: {
        http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}/result",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDashboardsQAConfiguration: {
        http: "GET /accounts/{AwsAccountId}/dashboards-qa-configuration",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDataSet: {
        http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDataSetPermissions: {
        http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDataSetRefreshProperties: {
        http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDataSource: {
        http: "GET /accounts/{AwsAccountId}/data-sources/{DataSourceId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDataSourcePermissions: {
        http: "GET /accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeDefaultQBusinessApplication: {
        http: "GET /accounts/{AwsAccountId}/default-qbusiness-application",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeFolder: {
        http: "GET /accounts/{AwsAccountId}/folders/{FolderId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeFolderPermissions: {
        http: "GET /accounts/{AwsAccountId}/folders/{FolderId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeFolderResolvedPermissions: {
        http: "GET /accounts/{AwsAccountId}/folders/{FolderId}/resolved-permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeGroup: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeGroupMembership: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeIAMPolicyAssignment: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeIngestion: {
        http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeIpRestriction: {
        http: "GET /accounts/{AwsAccountId}/ip-restriction",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeKeyRegistration: "GET /accounts/{AwsAccountId}/key-registration",
      DescribeNamespace: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeQPersonalizationConfiguration: {
        http: "GET /accounts/{AwsAccountId}/q-personalization-configuration",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeQuickSightQSearchConfiguration: {
        http: "GET /accounts/{AwsAccountId}/quicksight-q-search-configuration",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeRefreshSchedule: {
        http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeRoleCustomPermission:
        "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission",
      DescribeTemplate: {
        http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeTemplateAlias: {
        http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeTemplateDefinition: {
        http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/definition",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeTemplatePermissions: {
        http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeTheme: {
        http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeThemeAlias: {
        http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeThemePermissions: {
        http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeTopic: {
        http: "GET /accounts/{AwsAccountId}/topics/{TopicId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeTopicPermissions: {
        http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeTopicRefresh: {
        http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/refresh/{RefreshId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeTopicRefreshSchedule: {
        http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeUser: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      DescribeVPCConnection:
        "GET /accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}",
      GenerateEmbedUrlForAnonymousUser: {
        http: "POST /accounts/{AwsAccountId}/embed-url/anonymous-user",
        traits: {
          Status: "httpResponseCode",
        },
      },
      GenerateEmbedUrlForRegisteredUser: {
        http: "POST /accounts/{AwsAccountId}/embed-url/registered-user",
        traits: {
          Status: "httpResponseCode",
        },
      },
      GenerateEmbedUrlForRegisteredUserWithIdentity: {
        http: "POST /accounts/{AwsAccountId}/embed-url/registered-user-with-identity",
        traits: {
          Status: "httpResponseCode",
        },
      },
      GetDashboardEmbedUrl: {
        http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url",
        traits: {
          Status: "httpResponseCode",
        },
      },
      GetSessionEmbedUrl: {
        http: "GET /accounts/{AwsAccountId}/session-embed-url",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListAnalyses: {
        http: "GET /accounts/{AwsAccountId}/analyses",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListAssetBundleExportJobs: {
        http: "GET /accounts/{AwsAccountId}/asset-bundle-export-jobs",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListAssetBundleImportJobs: {
        http: "GET /accounts/{AwsAccountId}/asset-bundle-import-jobs",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListBrands: "GET /accounts/{AwsAccountId}/brands",
      ListCustomPermissions: {
        http: "GET /accounts/{AwsAccountId}/custom-permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListDashboards: {
        http: "GET /accounts/{AwsAccountId}/dashboards",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListDashboardVersions: {
        http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/versions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListDataSets: {
        http: "GET /accounts/{AwsAccountId}/data-sets",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListDataSources: {
        http: "GET /accounts/{AwsAccountId}/data-sources",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListFolderMembers: {
        http: "GET /accounts/{AwsAccountId}/folders/{FolderId}/members",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListFolders: {
        http: "GET /accounts/{AwsAccountId}/folders",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListFoldersForResource: {
        http: "GET /accounts/{AwsAccountId}/resource/{ResourceArn}/folders",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListGroupMemberships: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListGroups: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/groups",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListIAMPolicyAssignments: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/v2/iam-policy-assignments",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListIAMPolicyAssignmentsForUser: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/iam-policy-assignments",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListIdentityPropagationConfigs: {
        http: "GET /accounts/{AwsAccountId}/identity-propagation-config",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListIngestions: {
        http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListNamespaces: {
        http: "GET /accounts/{AwsAccountId}/namespaces",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListRefreshSchedules: {
        http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListRoleMemberships: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListTagsForResource: {
        http: "GET /resources/{ResourceArn}/tags",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListTemplateAliases: {
        http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/aliases",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListTemplates: {
        http: "GET /accounts/{AwsAccountId}/templates",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListTemplateVersions: {
        http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/versions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListThemeAliases: {
        http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}/aliases",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListThemes: {
        http: "GET /accounts/{AwsAccountId}/themes",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListThemeVersions: {
        http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}/versions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListTopicRefreshSchedules: {
        http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/schedules",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListTopicReviewedAnswers: {
        http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/reviewed-answers",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListTopics: {
        http: "GET /accounts/{AwsAccountId}/topics",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListUserGroups: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListUsers: {
        http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/users",
        traits: {
          Status: "httpResponseCode",
        },
      },
      ListVPCConnections: {
        http: "GET /accounts/{AwsAccountId}/vpc-connections",
        traits: {
          Status: "httpResponseCode",
        },
      },
      PredictQAResults: {
        http: "POST /accounts/{AwsAccountId}/qa/predict",
        traits: {
          Status: "httpResponseCode",
        },
      },
      PutDataSetRefreshProperties: {
        http: "PUT /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties",
        traits: {
          Status: "httpResponseCode",
        },
      },
      RegisterUser: {
        http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/users",
        traits: {
          Status: "httpResponseCode",
        },
      },
      RestoreAnalysis: {
        http: "POST /accounts/{AwsAccountId}/restore/analyses/{AnalysisId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      SearchAnalyses: {
        http: "POST /accounts/{AwsAccountId}/search/analyses",
        traits: {
          Status: "httpResponseCode",
        },
      },
      SearchDashboards: {
        http: "POST /accounts/{AwsAccountId}/search/dashboards",
        traits: {
          Status: "httpResponseCode",
        },
      },
      SearchDataSets: {
        http: "POST /accounts/{AwsAccountId}/search/data-sets",
        traits: {
          Status: "httpResponseCode",
        },
      },
      SearchDataSources: {
        http: "POST /accounts/{AwsAccountId}/search/data-sources",
        traits: {
          Status: "httpResponseCode",
        },
      },
      SearchFolders: {
        http: "POST /accounts/{AwsAccountId}/search/folders",
        traits: {
          Status: "httpResponseCode",
        },
      },
      SearchGroups: {
        http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/groups-search",
        traits: {
          Status: "httpResponseCode",
        },
      },
      SearchTopics: {
        http: "POST /accounts/{AwsAccountId}/search/topics",
        traits: {
          Status: "httpResponseCode",
        },
      },
      StartAssetBundleExportJob: {
        http: "POST /accounts/{AwsAccountId}/asset-bundle-export-jobs/export",
        traits: {
          Status: "httpResponseCode",
        },
      },
      StartAssetBundleImportJob: {
        http: "POST /accounts/{AwsAccountId}/asset-bundle-import-jobs/import",
        traits: {
          Status: "httpResponseCode",
        },
      },
      StartDashboardSnapshotJob: {
        http: "POST /accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs",
        traits: {
          Status: "httpResponseCode",
        },
      },
      StartDashboardSnapshotJobSchedule: {
        http: "POST /accounts/{AwsAccountId}/dashboards/{DashboardId}/schedules/{ScheduleId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      TagResource: {
        http: "POST /resources/{ResourceArn}/tags",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UntagResource: {
        http: "DELETE /resources/{ResourceArn}/tags",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateAccountCustomization: {
        http: "PUT /accounts/{AwsAccountId}/customizations",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateAccountSettings: {
        http: "PUT /accounts/{AwsAccountId}/settings",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateAnalysis: {
        http: "PUT /accounts/{AwsAccountId}/analyses/{AnalysisId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateAnalysisPermissions: {
        http: "PUT /accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateApplicationWithTokenExchangeGrant: {
        http: "PUT /accounts/{AwsAccountId}/application-with-token-exchange-grant",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateBrand: "PUT /accounts/{AwsAccountId}/brands/{BrandId}",
      UpdateBrandAssignment: "PUT /accounts/{AwsAccountId}/brandassignments",
      UpdateBrandPublishedVersion:
        "PUT /accounts/{AwsAccountId}/brands/{BrandId}/publishedversion",
      UpdateCustomPermissions:
        "PUT /accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}",
      UpdateDashboard: "PUT /accounts/{AwsAccountId}/dashboards/{DashboardId}",
      UpdateDashboardLinks: {
        http: "PUT /accounts/{AwsAccountId}/dashboards/{DashboardId}/linked-entities",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateDashboardPermissions: {
        http: "PUT /accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateDashboardPublishedVersion: {
        http: "PUT /accounts/{AwsAccountId}/dashboards/{DashboardId}/versions/{VersionNumber}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateDashboardsQAConfiguration: {
        http: "PUT /accounts/{AwsAccountId}/dashboards-qa-configuration",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateDataSet: {
        http: "PUT /accounts/{AwsAccountId}/data-sets/{DataSetId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateDataSetPermissions: {
        http: "POST /accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateDataSource: {
        http: "PUT /accounts/{AwsAccountId}/data-sources/{DataSourceId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateDataSourcePermissions: {
        http: "POST /accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateDefaultQBusinessApplication: {
        http: "PUT /accounts/{AwsAccountId}/default-qbusiness-application",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateFolder: {
        http: "PUT /accounts/{AwsAccountId}/folders/{FolderId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateFolderPermissions:
        "PUT /accounts/{AwsAccountId}/folders/{FolderId}/permissions",
      UpdateGroup: {
        http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateIAMPolicyAssignment: {
        http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateIdentityPropagationConfig: {
        http: "POST /accounts/{AwsAccountId}/identity-propagation-config/{Service}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateIpRestriction: {
        http: "POST /accounts/{AwsAccountId}/ip-restriction",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateKeyRegistration: "POST /accounts/{AwsAccountId}/key-registration",
      UpdatePublicSharingSettings: {
        http: "PUT /accounts/{AwsAccountId}/public-sharing-settings",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateQPersonalizationConfiguration: {
        http: "PUT /accounts/{AwsAccountId}/q-personalization-configuration",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateQuickSightQSearchConfiguration: {
        http: "PUT /accounts/{AwsAccountId}/quicksight-q-search-configuration",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateRefreshSchedule: {
        http: "PUT /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateRoleCustomPermission:
        "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission",
      UpdateSPICECapacityConfiguration: {
        http: "POST /accounts/{AwsAccountId}/spice-capacity-configuration",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateTemplate: {
        http: "PUT /accounts/{AwsAccountId}/templates/{TemplateId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateTemplateAlias: {
        http: "PUT /accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateTemplatePermissions: {
        http: "PUT /accounts/{AwsAccountId}/templates/{TemplateId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateTheme: {
        http: "PUT /accounts/{AwsAccountId}/themes/{ThemeId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateThemeAlias: {
        http: "PUT /accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateThemePermissions: {
        http: "PUT /accounts/{AwsAccountId}/themes/{ThemeId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateTopic: {
        http: "PUT /accounts/{AwsAccountId}/topics/{TopicId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateTopicPermissions: {
        http: "PUT /accounts/{AwsAccountId}/topics/{TopicId}/permissions",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateTopicRefreshSchedule: {
        http: "PUT /accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateUser: {
        http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateUserCustomPermission: {
        http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/custom-permission",
        traits: {
          Status: "httpResponseCode",
        },
      },
      UpdateVPCConnection: {
        http: "PUT /accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}",
        traits: {
          Status: "httpResponseCode",
        },
      },
    },
  },
  ram: {
    sdkId: "RAM",
    version: "2018-01-04",
    arnNamespace: "ram",
    cloudTrailEventSource: "ram.amazonaws.com",
    endpointPrefix: "ram",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptResourceShareInvitation: "POST /acceptresourceshareinvitation",
      AssociateResourceShare: "POST /associateresourceshare",
      AssociateResourceSharePermission:
        "POST /associateresourcesharepermission",
      CreatePermission: "POST /createpermission",
      CreatePermissionVersion: "POST /createpermissionversion",
      CreateResourceShare: "POST /createresourceshare",
      DeletePermission: "DELETE /deletepermission",
      DeletePermissionVersion: "DELETE /deletepermissionversion",
      DeleteResourceShare: "DELETE /deleteresourceshare",
      DisassociateResourceShare: "POST /disassociateresourceshare",
      DisassociateResourceSharePermission:
        "POST /disassociateresourcesharepermission",
      EnableSharingWithAwsOrganization:
        "POST /enablesharingwithawsorganization",
      GetPermission: "POST /getpermission",
      GetResourcePolicies: "POST /getresourcepolicies",
      GetResourceShareAssociations: "POST /getresourceshareassociations",
      GetResourceShareInvitations: "POST /getresourceshareinvitations",
      GetResourceShares: "POST /getresourceshares",
      ListPendingInvitationResources: "POST /listpendinginvitationresources",
      ListPermissionAssociations: "POST /listpermissionassociations",
      ListPermissions: "POST /listpermissions",
      ListPermissionVersions: "POST /listpermissionversions",
      ListPrincipals: "POST /listprincipals",
      ListReplacePermissionAssociationsWork:
        "POST /listreplacepermissionassociationswork",
      ListResources: "POST /listresources",
      ListResourceSharePermissions: "POST /listresourcesharepermissions",
      ListResourceTypes: "POST /listresourcetypes",
      PromotePermissionCreatedFromPolicy:
        "POST /promotepermissioncreatedfrompolicy",
      PromoteResourceShareCreatedFromPolicy:
        "POST /promoteresourcesharecreatedfrompolicy",
      RejectResourceShareInvitation: "POST /rejectresourceshareinvitation",
      ReplacePermissionAssociations: "POST /replacepermissionassociations",
      SetDefaultPermissionVersion: "POST /setdefaultpermissionversion",
      TagResource: "POST /tagresource",
      UntagResource: "POST /untagresource",
      UpdateResourceShare: "POST /updateresourceshare",
    },
  },
  rbin: {
    sdkId: "rbin",
    version: "2021-06-15",
    arnNamespace: "rbin",
    cloudTrailEventSource: "rbin.amazonaws.com",
    endpointPrefix: "rbin",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateRule: "POST /rules",
      DeleteRule: "DELETE /rules/{Identifier}",
      GetRule: "GET /rules/{Identifier}",
      ListRules: "POST /list-rules",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      LockRule: "PATCH /rules/{Identifier}/lock",
      TagResource: "POST /tags/{ResourceArn}",
      UnlockRule: "PATCH /rules/{Identifier}/unlock",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateRule: "PATCH /rules/{Identifier}",
    },
  },
  rds: {
    sdkId: "RDS",
    version: "2014-10-31",
    arnNamespace: "rds",
    cloudTrailEventSource: "rds.amazonaws.com",
    endpointPrefix: "rds",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  rdsdata: {
    sdkId: "RDS Data",
    version: "2018-08-01",
    arnNamespace: "rds-data",
    cloudTrailEventSource: "rds-data.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchExecuteStatement: "POST /BatchExecute",
      BeginTransaction: "POST /BeginTransaction",
      CommitTransaction: "POST /CommitTransaction",
      ExecuteSql: "POST /ExecuteSql",
      ExecuteStatement: "POST /Execute",
      RollbackTransaction: "POST /RollbackTransaction",
    },
  },
  redshift: {
    sdkId: "Redshift",
    version: "2012-12-01",
    arnNamespace: "redshift",
    cloudTrailEventSource: "redshift.amazonaws.com",
    endpointPrefix: "redshift",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  redshiftdata: {
    sdkId: "Redshift Data",
    version: "2019-12-20",
    arnNamespace: "redshift-data",
    cloudTrailEventSource: "redshift-data.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_1",
    targetPrefix: "RedshiftData",
  },
  redshiftserverless: {
    sdkId: "Redshift Serverless",
    version: "2021-04-21",
    arnNamespace: "redshift-serverless",
    cloudTrailEventSource: "redshift-serverless.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_1",
    targetPrefix: "RedshiftServerless",
  },
  rekognition: {
    sdkId: "Rekognition",
    version: "2016-06-27",
    arnNamespace: "rekognition",
    cloudTrailEventSource: "rekognition.amazonaws.com",
    endpointPrefix: "rekognition",
    protocol: "awsJson1_1",
    targetPrefix: "RekognitionService",
  },
  repostspace: {
    sdkId: "repostspace",
    version: "2022-05-13",
    arnNamespace: "repostspace",
    cloudTrailEventSource: "repostspace.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchAddChannelRoleToAccessors:
        "POST /spaces/{spaceId}/channels/{channelId}/roles",
      BatchAddRole: "POST /spaces/{spaceId}/roles",
      BatchRemoveChannelRoleFromAccessors:
        "PATCH /spaces/{spaceId}/channels/{channelId}/roles",
      BatchRemoveRole: "PATCH /spaces/{spaceId}/roles",
      CreateChannel: "POST /spaces/{spaceId}/channels",
      CreateSpace: "POST /spaces",
      DeleteSpace: "DELETE /spaces/{spaceId}",
      DeregisterAdmin: "DELETE /spaces/{spaceId}/admins/{adminId}",
      GetChannel: "GET /spaces/{spaceId}/channels/{channelId}",
      GetSpace: "GET /spaces/{spaceId}",
      ListChannels: "GET /spaces/{spaceId}/channels",
      ListSpaces: "GET /spaces",
      ListTagsForResource: "GET /tags/{resourceArn}",
      RegisterAdmin: "POST /spaces/{spaceId}/admins/{adminId}",
      SendInvites: "POST /spaces/{spaceId}/invite",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateChannel: "PUT /spaces/{spaceId}/channels/{channelId}",
      UpdateSpace: "PUT /spaces/{spaceId}",
    },
  },
  resiliencehub: {
    sdkId: "resiliencehub",
    version: "2020-04-30",
    arnNamespace: "resiliencehub",
    cloudTrailEventSource: "resiliencehub.amazonaws.com",
    endpointPrefix: "resiliencehub",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptResourceGroupingRecommendations:
        "POST /accept-resource-grouping-recommendations",
      AddDraftAppVersionResourceMappings:
        "POST /add-draft-app-version-resource-mappings",
      BatchUpdateRecommendationStatus:
        "POST /batch-update-recommendation-status",
      CreateApp: "POST /create-app",
      CreateAppVersionAppComponent: "POST /create-app-version-app-component",
      CreateAppVersionResource: "POST /create-app-version-resource",
      CreateRecommendationTemplate: "POST /create-recommendation-template",
      CreateResiliencyPolicy: "POST /create-resiliency-policy",
      DeleteApp: "POST /delete-app",
      DeleteAppAssessment: "POST /delete-app-assessment",
      DeleteAppInputSource: "POST /delete-app-input-source",
      DeleteAppVersionAppComponent: "POST /delete-app-version-app-component",
      DeleteAppVersionResource: "POST /delete-app-version-resource",
      DeleteRecommendationTemplate: "POST /delete-recommendation-template",
      DeleteResiliencyPolicy: "POST /delete-resiliency-policy",
      DescribeApp: "POST /describe-app",
      DescribeAppAssessment: "POST /describe-app-assessment",
      DescribeAppVersion: "POST /describe-app-version",
      DescribeAppVersionAppComponent:
        "POST /describe-app-version-app-component",
      DescribeAppVersionResource: "POST /describe-app-version-resource",
      DescribeAppVersionResourcesResolutionStatus:
        "POST /describe-app-version-resources-resolution-status",
      DescribeAppVersionTemplate: "POST /describe-app-version-template",
      DescribeDraftAppVersionResourcesImportStatus:
        "POST /describe-draft-app-version-resources-import-status",
      DescribeMetricsExport: "POST /describe-metrics-export",
      DescribeResiliencyPolicy: "POST /describe-resiliency-policy",
      DescribeResourceGroupingRecommendationTask:
        "POST /describe-resource-grouping-recommendation-task",
      ImportResourcesToDraftAppVersion:
        "POST /import-resources-to-draft-app-version",
      ListAlarmRecommendations: "POST /list-alarm-recommendations",
      ListAppAssessmentComplianceDrifts:
        "POST /list-app-assessment-compliance-drifts",
      ListAppAssessmentResourceDrifts:
        "POST /list-app-assessment-resource-drifts",
      ListAppAssessments: "GET /list-app-assessments",
      ListAppComponentCompliances: "POST /list-app-component-compliances",
      ListAppComponentRecommendations:
        "POST /list-app-component-recommendations",
      ListAppInputSources: "POST /list-app-input-sources",
      ListApps: "GET /list-apps",
      ListAppVersionAppComponents: "POST /list-app-version-app-components",
      ListAppVersionResourceMappings:
        "POST /list-app-version-resource-mappings",
      ListAppVersionResources: "POST /list-app-version-resources",
      ListAppVersions: "POST /list-app-versions",
      ListMetrics: "POST /list-metrics",
      ListRecommendationTemplates: "GET /list-recommendation-templates",
      ListResiliencyPolicies: "GET /list-resiliency-policies",
      ListResourceGroupingRecommendations:
        "GET /list-resource-grouping-recommendations",
      ListSopRecommendations: "POST /list-sop-recommendations",
      ListSuggestedResiliencyPolicies:
        "GET /list-suggested-resiliency-policies",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListTestRecommendations: "POST /list-test-recommendations",
      ListUnsupportedAppVersionResources:
        "POST /list-unsupported-app-version-resources",
      PublishAppVersion: "POST /publish-app-version",
      PutDraftAppVersionTemplate: "POST /put-draft-app-version-template",
      RejectResourceGroupingRecommendations:
        "POST /reject-resource-grouping-recommendations",
      RemoveDraftAppVersionResourceMappings:
        "POST /remove-draft-app-version-resource-mappings",
      ResolveAppVersionResources: "POST /resolve-app-version-resources",
      StartAppAssessment: "POST /start-app-assessment",
      StartMetricsExport: "POST /start-metrics-export",
      StartResourceGroupingRecommendationTask:
        "POST /start-resource-grouping-recommendation-task",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateApp: "POST /update-app",
      UpdateAppVersion: "POST /update-app-version",
      UpdateAppVersionAppComponent: "POST /update-app-version-app-component",
      UpdateAppVersionResource: "POST /update-app-version-resource",
      UpdateResiliencyPolicy: "POST /update-resiliency-policy",
    },
  },
  resourceexplorer2: {
    sdkId: "Resource Explorer 2",
    version: "2022-07-28",
    arnNamespace: "resource-explorer-2",
    cloudTrailEventSource: "resource-explorer-2.amazonaws.com",
    endpointPrefix: "resource-explorer-2",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetView: "POST /BatchGetView",
      DisassociateDefaultView: "POST /DisassociateDefaultView",
      GetAccountLevelServiceConfiguration:
        "POST /GetAccountLevelServiceConfiguration",
      GetDefaultView: "POST /GetDefaultView",
      GetIndex: "POST /GetIndex",
      GetManagedView: "POST /GetManagedView",
      ListIndexesForMembers: "POST /ListIndexesForMembers",
      ListManagedViews: "POST /ListManagedViews",
      ListResources: "POST /ListResources",
      ListSupportedResourceTypes: "POST /ListSupportedResourceTypes",
      ListTagsForResource: "GET /tags/{resourceArn}",
      Search: "POST /Search",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      AssociateDefaultView: "POST /AssociateDefaultView",
      CreateIndex: "POST /CreateIndex",
      CreateView: "POST /CreateView",
      DeleteIndex: "POST /DeleteIndex",
      DeleteView: "POST /DeleteView",
      GetView: "POST /GetView",
      ListIndexes: "POST /ListIndexes",
      ListViews: "POST /ListViews",
      UpdateIndexType: "POST /UpdateIndexType",
      UpdateView: "POST /UpdateView",
    },
  },
  resourcegroups: {
    sdkId: "Resource Groups",
    version: "2017-11-27",
    arnNamespace: "resource-groups",
    cloudTrailEventSource: "resourcegroups.amazonaws.com",
    endpointPrefix: "resource-groups",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelTagSyncTask: "POST /cancel-tag-sync-task",
      CreateGroup: "POST /groups",
      DeleteGroup: "POST /delete-group",
      GetAccountSettings: "POST /get-account-settings",
      GetGroup: "POST /get-group",
      GetGroupConfiguration: "POST /get-group-configuration",
      GetGroupQuery: "POST /get-group-query",
      GetTags: "GET /resources/{Arn}/tags",
      GetTagSyncTask: "POST /get-tag-sync-task",
      GroupResources: "POST /group-resources",
      ListGroupingStatuses: "POST /list-grouping-statuses",
      ListGroupResources: "POST /list-group-resources",
      ListGroups: "POST /groups-list",
      ListTagSyncTasks: "POST /list-tag-sync-tasks",
      PutGroupConfiguration: "POST /put-group-configuration",
      SearchResources: "POST /resources/search",
      StartTagSyncTask: "POST /start-tag-sync-task",
      Tag: "PUT /resources/{Arn}/tags",
      UngroupResources: "POST /ungroup-resources",
      Untag: "PATCH /resources/{Arn}/tags",
      UpdateAccountSettings: "POST /update-account-settings",
      UpdateGroup: "POST /update-group",
      UpdateGroupQuery: "POST /update-group-query",
    },
  },
  resourcegroupstaggingapi: {
    sdkId: "Resource Groups Tagging API",
    version: "2017-01-26",
    arnNamespace: "tagging",
    cloudTrailEventSource: "resourcegroupstaggingapi.amazonaws.com",
    endpointPrefix: "tagging",
    protocol: "awsJson1_1",
    targetPrefix: "ResourceGroupsTaggingAPI_20170126",
  },
  robomaker: {
    sdkId: "RoboMaker",
    version: "2018-06-29",
    arnNamespace: "robomaker",
    cloudTrailEventSource: "robomaker.amazonaws.com",
    endpointPrefix: "robomaker",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchDeleteWorlds: "POST /batchDeleteWorlds",
      BatchDescribeSimulationJob: "POST /batchDescribeSimulationJob",
      CancelDeploymentJob: "POST /cancelDeploymentJob",
      CancelSimulationJob: "POST /cancelSimulationJob",
      CancelSimulationJobBatch: "POST /cancelSimulationJobBatch",
      CancelWorldExportJob: "POST /cancelWorldExportJob",
      CancelWorldGenerationJob: "POST /cancelWorldGenerationJob",
      CreateDeploymentJob: "POST /createDeploymentJob",
      CreateFleet: "POST /createFleet",
      CreateRobot: "POST /createRobot",
      CreateRobotApplication: "POST /createRobotApplication",
      CreateRobotApplicationVersion: "POST /createRobotApplicationVersion",
      CreateSimulationApplication: "POST /createSimulationApplication",
      CreateSimulationApplicationVersion:
        "POST /createSimulationApplicationVersion",
      CreateSimulationJob: "POST /createSimulationJob",
      CreateWorldExportJob: "POST /createWorldExportJob",
      CreateWorldGenerationJob: "POST /createWorldGenerationJob",
      CreateWorldTemplate: "POST /createWorldTemplate",
      DeleteFleet: "POST /deleteFleet",
      DeleteRobot: "POST /deleteRobot",
      DeleteRobotApplication: "POST /deleteRobotApplication",
      DeleteSimulationApplication: "POST /deleteSimulationApplication",
      DeleteWorldTemplate: "POST /deleteWorldTemplate",
      DeregisterRobot: "POST /deregisterRobot",
      DescribeDeploymentJob: "POST /describeDeploymentJob",
      DescribeFleet: "POST /describeFleet",
      DescribeRobot: "POST /describeRobot",
      DescribeRobotApplication: "POST /describeRobotApplication",
      DescribeSimulationApplication: "POST /describeSimulationApplication",
      DescribeSimulationJob: "POST /describeSimulationJob",
      DescribeSimulationJobBatch: "POST /describeSimulationJobBatch",
      DescribeWorld: "POST /describeWorld",
      DescribeWorldExportJob: "POST /describeWorldExportJob",
      DescribeWorldGenerationJob: "POST /describeWorldGenerationJob",
      DescribeWorldTemplate: "POST /describeWorldTemplate",
      GetWorldTemplateBody: "POST /getWorldTemplateBody",
      ListDeploymentJobs: "POST /listDeploymentJobs",
      ListFleets: "POST /listFleets",
      ListRobotApplications: "POST /listRobotApplications",
      ListRobots: "POST /listRobots",
      ListSimulationApplications: "POST /listSimulationApplications",
      ListSimulationJobBatches: "POST /listSimulationJobBatches",
      ListSimulationJobs: "POST /listSimulationJobs",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListWorldExportJobs: "POST /listWorldExportJobs",
      ListWorldGenerationJobs: "POST /listWorldGenerationJobs",
      ListWorlds: "POST /listWorlds",
      ListWorldTemplates: "POST /listWorldTemplates",
      RegisterRobot: "POST /registerRobot",
      RestartSimulationJob: "POST /restartSimulationJob",
      StartSimulationJobBatch: "POST /startSimulationJobBatch",
      SyncDeploymentJob: "POST /syncDeploymentJob",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateRobotApplication: "POST /updateRobotApplication",
      UpdateSimulationApplication: "POST /updateSimulationApplication",
      UpdateWorldTemplate: "POST /updateWorldTemplate",
    },
  },
  rolesanywhere: {
    sdkId: "RolesAnywhere",
    version: "2018-05-10",
    arnNamespace: "rolesanywhere",
    cloudTrailEventSource: "rolesanywhere.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /ListTagsForResource",
      PutNotificationSettings: "PATCH /put-notifications-settings",
      ResetNotificationSettings: "PATCH /reset-notifications-settings",
      TagResource: "POST /TagResource",
      UntagResource: "POST /UntagResource",
      CreateProfile: "POST /profiles",
      CreateTrustAnchor: "POST /trustanchors",
      DeleteAttributeMapping: "DELETE /profiles/{profileId}/mappings",
      DeleteCrl: "DELETE /crl/{crlId}",
      DeleteProfile: "DELETE /profile/{profileId}",
      DeleteTrustAnchor: "DELETE /trustanchor/{trustAnchorId}",
      DisableCrl: "POST /crl/{crlId}/disable",
      DisableProfile: "POST /profile/{profileId}/disable",
      DisableTrustAnchor: "POST /trustanchor/{trustAnchorId}/disable",
      EnableCrl: "POST /crl/{crlId}/enable",
      EnableProfile: "POST /profile/{profileId}/enable",
      EnableTrustAnchor: "POST /trustanchor/{trustAnchorId}/enable",
      GetCrl: "GET /crl/{crlId}",
      GetProfile: "GET /profile/{profileId}",
      GetSubject: "GET /subject/{subjectId}",
      GetTrustAnchor: "GET /trustanchor/{trustAnchorId}",
      ImportCrl: "POST /crls",
      ListCrls: "GET /crls",
      ListProfiles: "GET /profiles",
      ListSubjects: "GET /subjects",
      ListTrustAnchors: "GET /trustanchors",
      PutAttributeMapping: "PUT /profiles/{profileId}/mappings",
      UpdateCrl: "PATCH /crl/{crlId}",
      UpdateProfile: "PATCH /profile/{profileId}",
      UpdateTrustAnchor: "PATCH /trustanchor/{trustAnchorId}",
    },
  },
  route53: {
    sdkId: "Route 53",
    version: "2013-04-01",
    arnNamespace: "route53",
    cloudTrailEventSource: "route53.amazonaws.com",
    endpointPrefix: "route53",
    protocol: "restXml",
    targetPrefix: "",
    operations: {
      CreateCidrCollection: {
        traits: {
          Location: "Location",
        },
      },
      CreateHealthCheck: {
        traits: {
          Location: "Location",
        },
      },
      CreateHostedZone: {
        traits: {
          Location: "Location",
        },
      },
      CreateKeySigningKey: {
        traits: {
          Location: "Location",
        },
      },
      CreateQueryLoggingConfig: {
        traits: {
          Location: "Location",
        },
      },
      CreateReusableDelegationSet: {
        traits: {
          Location: "Location",
        },
      },
      CreateTrafficPolicy: {
        traits: {
          Location: "Location",
        },
      },
      CreateTrafficPolicyInstance: {
        traits: {
          Location: "Location",
        },
      },
      CreateTrafficPolicyVersion: {
        traits: {
          Location: "Location",
        },
      },
    },
  },
  route53domains: {
    sdkId: "Route 53 Domains",
    version: "2014-05-15",
    arnNamespace: "route53domains",
    cloudTrailEventSource: "route53domains.amazonaws.com",
    endpointPrefix: "route53domains",
    protocol: "awsJson1_1",
    targetPrefix: "Route53Domains_v20140515",
  },
  route53recoverycluster: {
    sdkId: "Route53 Recovery Cluster",
    version: "2019-12-02",
    arnNamespace: "route53-recovery-cluster",
    cloudTrailEventSource: "route53recoverycluster.amazonaws.com",
    endpointPrefix: "route53-recovery-cluster",
    protocol: "awsJson1_0",
    targetPrefix: "ToggleCustomerAPI",
  },
  route53recoverycontrolconfig: {
    sdkId: "Route53 Recovery Control Config",
    version: "2020-11-02",
    arnNamespace: "route53-recovery-control-config",
    cloudTrailEventSource: "route53recoverycontrolconfig.amazonaws.com",
    endpointPrefix: "route53-recovery-control-config",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateCluster: "POST /cluster",
      CreateControlPanel: "POST /controlpanel",
      CreateRoutingControl: "POST /routingcontrol",
      CreateSafetyRule: "POST /safetyrule",
      DeleteCluster: "DELETE /cluster/{ClusterArn}",
      DeleteControlPanel: "DELETE /controlpanel/{ControlPanelArn}",
      DeleteRoutingControl: "DELETE /routingcontrol/{RoutingControlArn}",
      DeleteSafetyRule: "DELETE /safetyrule/{SafetyRuleArn}",
      DescribeCluster: "GET /cluster/{ClusterArn}",
      DescribeControlPanel: "GET /controlpanel/{ControlPanelArn}",
      DescribeRoutingControl: "GET /routingcontrol/{RoutingControlArn}",
      DescribeSafetyRule: "GET /safetyrule/{SafetyRuleArn}",
      GetResourcePolicy: "GET /resourcePolicy/{ResourceArn}",
      ListAssociatedRoute53HealthChecks:
        "GET /routingcontrol/{RoutingControlArn}/associatedRoute53HealthChecks",
      ListClusters: "GET /cluster",
      ListControlPanels: "GET /controlpanels",
      ListRoutingControls:
        "GET /controlpanel/{ControlPanelArn}/routingcontrols",
      ListSafetyRules: "GET /controlpanel/{ControlPanelArn}/safetyrules",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateCluster: "PUT /cluster",
      UpdateControlPanel: "PUT /controlpanel",
      UpdateRoutingControl: "PUT /routingcontrol",
      UpdateSafetyRule: "PUT /safetyrule",
    },
  },
  route53recoveryreadiness: {
    sdkId: "Route53 Recovery Readiness",
    version: "2019-12-02",
    arnNamespace: "route53-recovery-readiness",
    cloudTrailEventSource: "route53-recovery-readiness.amazonaws.com",
    endpointPrefix: "route53-recovery-readiness",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateCell: "POST /cells",
      CreateCrossAccountAuthorization: "POST /crossaccountauthorizations",
      CreateReadinessCheck: "POST /readinesschecks",
      CreateRecoveryGroup: "POST /recoverygroups",
      CreateResourceSet: "POST /resourcesets",
      DeleteCell: "DELETE /cells/{CellName}",
      DeleteCrossAccountAuthorization:
        "DELETE /crossaccountauthorizations/{CrossAccountAuthorization}",
      DeleteReadinessCheck: "DELETE /readinesschecks/{ReadinessCheckName}",
      DeleteRecoveryGroup: "DELETE /recoverygroups/{RecoveryGroupName}",
      DeleteResourceSet: "DELETE /resourcesets/{ResourceSetName}",
      GetArchitectureRecommendations:
        "GET /recoverygroups/{RecoveryGroupName}/architectureRecommendations",
      GetCell: "GET /cells/{CellName}",
      GetCellReadinessSummary: "GET /cellreadiness/{CellName}",
      GetReadinessCheck: "GET /readinesschecks/{ReadinessCheckName}",
      GetReadinessCheckResourceStatus:
        "GET /readinesschecks/{ReadinessCheckName}/resource/{ResourceIdentifier}/status",
      GetReadinessCheckStatus:
        "GET /readinesschecks/{ReadinessCheckName}/status",
      GetRecoveryGroup: "GET /recoverygroups/{RecoveryGroupName}",
      GetRecoveryGroupReadinessSummary:
        "GET /recoverygroupreadiness/{RecoveryGroupName}",
      GetResourceSet: "GET /resourcesets/{ResourceSetName}",
      ListCells: "GET /cells",
      ListCrossAccountAuthorizations: "GET /crossaccountauthorizations",
      ListReadinessChecks: "GET /readinesschecks",
      ListRecoveryGroups: "GET /recoverygroups",
      ListResourceSets: "GET /resourcesets",
      ListRules: "GET /rules",
      ListTagsForResources: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateCell: "PUT /cells/{CellName}",
      UpdateReadinessCheck: "PUT /readinesschecks/{ReadinessCheckName}",
      UpdateRecoveryGroup: "PUT /recoverygroups/{RecoveryGroupName}",
      UpdateResourceSet: "PUT /resourcesets/{ResourceSetName}",
    },
  },
  route53profiles: {
    sdkId: "Route53Profiles",
    version: "2018-05-10",
    arnNamespace: "route53profiles",
    cloudTrailEventSource: "route53profiles.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateProfile: "POST /profileassociation",
      AssociateResourceToProfile: "POST /profileresourceassociation",
      CreateProfile: "POST /profile",
      DeleteProfile: "DELETE /profile/{ProfileId}",
      DisassociateProfile:
        "DELETE /profileassociation/Profileid/{ProfileId}/resourceid/{ResourceId}",
      DisassociateResourceFromProfile:
        "DELETE /profileresourceassociation/profileid/{ProfileId}/resourcearn/{ResourceArn}",
      GetProfile: "GET /profile/{ProfileId}",
      GetProfileAssociation: "GET /profileassociation/{ProfileAssociationId}",
      GetProfileResourceAssociation:
        "GET /profileresourceassociation/{ProfileResourceAssociationId}",
      ListProfileAssociations: "GET /profileassociations",
      ListProfileResourceAssociations:
        "GET /profileresourceassociations/profileid/{ProfileId}",
      ListProfiles: "GET /profiles",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateProfileResourceAssociation:
        "PATCH /profileresourceassociation/{ProfileResourceAssociationId}",
    },
  },
  route53resolver: {
    sdkId: "Route53Resolver",
    version: "2018-04-01",
    arnNamespace: "route53resolver",
    cloudTrailEventSource: "route53resolver.amazonaws.com",
    endpointPrefix: "route53resolver",
    protocol: "awsJson1_1",
    targetPrefix: "Route53Resolver",
  },
  rum: {
    sdkId: "RUM",
    version: "2018-05-10",
    arnNamespace: "rum",
    cloudTrailEventSource: "rum.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{ResourceArn}",
      PutRumEvents: "POST /appmonitors/{Id}/",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      BatchCreateRumMetricDefinitions:
        "POST /rummetrics/{AppMonitorName}/metrics",
      BatchDeleteRumMetricDefinitions:
        "DELETE /rummetrics/{AppMonitorName}/metrics",
      BatchGetRumMetricDefinitions: "GET /rummetrics/{AppMonitorName}/metrics",
      CreateAppMonitor: "POST /appmonitor",
      DeleteAppMonitor: "DELETE /appmonitor/{Name}",
      DeleteResourcePolicy: "DELETE /appmonitor/{Name}/policy",
      DeleteRumMetricsDestination:
        "DELETE /rummetrics/{AppMonitorName}/metricsdestination",
      GetAppMonitor: "GET /appmonitor/{Name}",
      GetAppMonitorData: "POST /appmonitor/{Name}/data",
      GetResourcePolicy: "GET /appmonitor/{Name}/policy",
      ListAppMonitors: "POST /appmonitors",
      ListRumMetricsDestinations:
        "GET /rummetrics/{AppMonitorName}/metricsdestination",
      PutResourcePolicy: "PUT /appmonitor/{Name}/policy",
      PutRumMetricsDestination:
        "POST /rummetrics/{AppMonitorName}/metricsdestination",
      UpdateAppMonitor: "PATCH /appmonitor/{Name}",
      UpdateRumMetricDefinition: "PATCH /rummetrics/{AppMonitorName}/metrics",
    },
  },
  s3: {
    sdkId: "S3",
    version: "2006-03-01",
    arnNamespace: "s3",
    cloudTrailEventSource: "s3.amazonaws.com",
    endpointPrefix: "s3",
    protocol: "restXml",
    targetPrefix: "",
    operations: {
      AbortMultipartUpload: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      CompleteMultipartUpload: {
        traits: {
          Expiration: "x-amz-expiration",
          ServerSideEncryption: "x-amz-server-side-encryption",
          VersionId: "x-amz-version-id",
          SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
          BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
          RequestCharged: "x-amz-request-charged",
        },
      },
      CopyObject: {
        traits: {
          CopyObjectResult: "httpPayload",
          Expiration: "x-amz-expiration",
          CopySourceVersionId: "x-amz-copy-source-version-id",
          VersionId: "x-amz-version-id",
          ServerSideEncryption: "x-amz-server-side-encryption",
          SSECustomerAlgorithm:
            "x-amz-server-side-encryption-customer-algorithm",
          SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
          SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
          SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
          BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
          RequestCharged: "x-amz-request-charged",
        },
      },
      CreateBucket: {
        traits: {
          Location: "Location",
          BucketArn: "x-amz-bucket-arn",
        },
      },
      CreateMultipartUpload: {
        traits: {
          AbortDate: "x-amz-abort-date",
          AbortRuleId: "x-amz-abort-rule-id",
          ServerSideEncryption: "x-amz-server-side-encryption",
          SSECustomerAlgorithm:
            "x-amz-server-side-encryption-customer-algorithm",
          SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
          SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
          SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
          BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
          RequestCharged: "x-amz-request-charged",
          ChecksumAlgorithm: "x-amz-checksum-algorithm",
          ChecksumType: "x-amz-checksum-type",
        },
      },
      CreateSession: {
        traits: {
          ServerSideEncryption: "x-amz-server-side-encryption",
          SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
          SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
          BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
        },
      },
      DeleteObject: {
        traits: {
          DeleteMarker: "x-amz-delete-marker",
          VersionId: "x-amz-version-id",
          RequestCharged: "x-amz-request-charged",
        },
      },
      DeleteObjects: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      DeleteObjectTagging: {
        traits: {
          VersionId: "x-amz-version-id",
        },
      },
      GetBucketAccelerateConfiguration: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      GetBucketAnalyticsConfiguration: {
        traits: {
          AnalyticsConfiguration: "httpPayload",
        },
      },
      GetBucketEncryption: {
        traits: {
          ServerSideEncryptionConfiguration: "httpPayload",
        },
      },
      GetBucketIntelligentTieringConfiguration: {
        traits: {
          IntelligentTieringConfiguration: "httpPayload",
        },
      },
      GetBucketInventoryConfiguration: {
        traits: {
          InventoryConfiguration: "httpPayload",
        },
      },
      GetBucketLifecycleConfiguration: {
        traits: {
          TransitionDefaultMinimumObjectSize:
            "x-amz-transition-default-minimum-object-size",
        },
      },
      GetBucketMetadataConfiguration: {
        traits: {
          GetBucketMetadataConfigurationResult: "httpPayload",
        },
      },
      GetBucketMetadataTableConfiguration: {
        traits: {
          GetBucketMetadataTableConfigurationResult: "httpPayload",
        },
      },
      GetBucketMetricsConfiguration: {
        traits: {
          MetricsConfiguration: "httpPayload",
        },
      },
      GetBucketOwnershipControls: {
        traits: {
          OwnershipControls: "httpPayload",
        },
      },
      GetBucketPolicy: {
        traits: {
          Policy: "httpPayload",
        },
      },
      GetBucketPolicyStatus: {
        traits: {
          PolicyStatus: "httpPayload",
        },
      },
      GetBucketReplication: {
        traits: {
          ReplicationConfiguration: "httpPayload",
        },
      },
      GetObject: {
        traits: {
          Body: "httpPayload",
          DeleteMarker: "x-amz-delete-marker",
          AcceptRanges: "accept-ranges",
          Expiration: "x-amz-expiration",
          Restore: "x-amz-restore",
          LastModified: "Last-Modified",
          ContentLength: "Content-Length",
          ETag: "ETag",
          ChecksumCRC32: "x-amz-checksum-crc32",
          ChecksumCRC32C: "x-amz-checksum-crc32c",
          ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
          ChecksumSHA1: "x-amz-checksum-sha1",
          ChecksumSHA256: "x-amz-checksum-sha256",
          ChecksumType: "x-amz-checksum-type",
          MissingMeta: "x-amz-missing-meta",
          VersionId: "x-amz-version-id",
          CacheControl: "Cache-Control",
          ContentDisposition: "Content-Disposition",
          ContentEncoding: "Content-Encoding",
          ContentLanguage: "Content-Language",
          ContentRange: "Content-Range",
          ContentType: "Content-Type",
          Expires: "Expires",
          WebsiteRedirectLocation: "x-amz-website-redirect-location",
          ServerSideEncryption: "x-amz-server-side-encryption",
          SSECustomerAlgorithm:
            "x-amz-server-side-encryption-customer-algorithm",
          SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
          SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
          BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
          StorageClass: "x-amz-storage-class",
          RequestCharged: "x-amz-request-charged",
          ReplicationStatus: "x-amz-replication-status",
          PartsCount: "x-amz-mp-parts-count",
          TagCount: "x-amz-tagging-count",
          ObjectLockMode: "x-amz-object-lock-mode",
          ObjectLockRetainUntilDate: "x-amz-object-lock-retain-until-date",
          ObjectLockLegalHoldStatus: "x-amz-object-lock-legal-hold",
        },
      },
      GetObjectAcl: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      GetObjectAttributes: {
        traits: {
          DeleteMarker: "x-amz-delete-marker",
          LastModified: "Last-Modified",
          VersionId: "x-amz-version-id",
          RequestCharged: "x-amz-request-charged",
        },
      },
      GetObjectLegalHold: {
        traits: {
          LegalHold: "httpPayload",
        },
      },
      GetObjectLockConfiguration: {
        traits: {
          ObjectLockConfiguration: "httpPayload",
        },
      },
      GetObjectRetention: {
        traits: {
          Retention: "httpPayload",
        },
      },
      GetObjectTagging: {
        traits: {
          VersionId: "x-amz-version-id",
        },
      },
      GetObjectTorrent: {
        traits: {
          Body: "httpPayload",
          RequestCharged: "x-amz-request-charged",
        },
      },
      GetPublicAccessBlock: {
        traits: {
          PublicAccessBlockConfiguration: "httpPayload",
        },
      },
      HeadBucket: {
        traits: {
          BucketArn: "x-amz-bucket-arn",
          BucketLocationType: "x-amz-bucket-location-type",
          BucketLocationName: "x-amz-bucket-location-name",
          BucketRegion: "x-amz-bucket-region",
          AccessPointAlias: "x-amz-access-point-alias",
        },
      },
      HeadObject: {
        traits: {
          DeleteMarker: "x-amz-delete-marker",
          AcceptRanges: "accept-ranges",
          Expiration: "x-amz-expiration",
          Restore: "x-amz-restore",
          ArchiveStatus: "x-amz-archive-status",
          LastModified: "Last-Modified",
          ContentLength: "Content-Length",
          ChecksumCRC32: "x-amz-checksum-crc32",
          ChecksumCRC32C: "x-amz-checksum-crc32c",
          ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
          ChecksumSHA1: "x-amz-checksum-sha1",
          ChecksumSHA256: "x-amz-checksum-sha256",
          ChecksumType: "x-amz-checksum-type",
          ETag: "ETag",
          MissingMeta: "x-amz-missing-meta",
          VersionId: "x-amz-version-id",
          CacheControl: "Cache-Control",
          ContentDisposition: "Content-Disposition",
          ContentEncoding: "Content-Encoding",
          ContentLanguage: "Content-Language",
          ContentType: "Content-Type",
          ContentRange: "Content-Range",
          Expires: "Expires",
          WebsiteRedirectLocation: "x-amz-website-redirect-location",
          ServerSideEncryption: "x-amz-server-side-encryption",
          SSECustomerAlgorithm:
            "x-amz-server-side-encryption-customer-algorithm",
          SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
          SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
          BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
          StorageClass: "x-amz-storage-class",
          RequestCharged: "x-amz-request-charged",
          ReplicationStatus: "x-amz-replication-status",
          PartsCount: "x-amz-mp-parts-count",
          TagCount: "x-amz-tagging-count",
          ObjectLockMode: "x-amz-object-lock-mode",
          ObjectLockRetainUntilDate: "x-amz-object-lock-retain-until-date",
          ObjectLockLegalHoldStatus: "x-amz-object-lock-legal-hold",
        },
      },
      ListMultipartUploads: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      ListObjects: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      ListObjectsV2: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      ListObjectVersions: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      ListParts: {
        traits: {
          AbortDate: "x-amz-abort-date",
          AbortRuleId: "x-amz-abort-rule-id",
          RequestCharged: "x-amz-request-charged",
        },
      },
      PutBucketLifecycleConfiguration: {
        traits: {
          TransitionDefaultMinimumObjectSize:
            "x-amz-transition-default-minimum-object-size",
        },
      },
      PutObject: {
        traits: {
          Expiration: "x-amz-expiration",
          ETag: "ETag",
          ChecksumCRC32: "x-amz-checksum-crc32",
          ChecksumCRC32C: "x-amz-checksum-crc32c",
          ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
          ChecksumSHA1: "x-amz-checksum-sha1",
          ChecksumSHA256: "x-amz-checksum-sha256",
          ChecksumType: "x-amz-checksum-type",
          ServerSideEncryption: "x-amz-server-side-encryption",
          VersionId: "x-amz-version-id",
          SSECustomerAlgorithm:
            "x-amz-server-side-encryption-customer-algorithm",
          SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
          SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
          SSEKMSEncryptionContext: "x-amz-server-side-encryption-context",
          BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
          Size: "x-amz-object-size",
          RequestCharged: "x-amz-request-charged",
        },
      },
      PutObjectAcl: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      PutObjectLegalHold: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      PutObjectLockConfiguration: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      PutObjectRetention: {
        traits: {
          RequestCharged: "x-amz-request-charged",
        },
      },
      PutObjectTagging: {
        traits: {
          VersionId: "x-amz-version-id",
        },
      },
      RestoreObject: {
        traits: {
          RequestCharged: "x-amz-request-charged",
          RestoreOutputPath: "x-amz-restore-output-path",
        },
      },
      SelectObjectContent: {
        traits: {
          Payload: "httpPayload",
        },
      },
      UploadPart: {
        traits: {
          ServerSideEncryption: "x-amz-server-side-encryption",
          ETag: "ETag",
          ChecksumCRC32: "x-amz-checksum-crc32",
          ChecksumCRC32C: "x-amz-checksum-crc32c",
          ChecksumCRC64NVME: "x-amz-checksum-crc64nvme",
          ChecksumSHA1: "x-amz-checksum-sha1",
          ChecksumSHA256: "x-amz-checksum-sha256",
          SSECustomerAlgorithm:
            "x-amz-server-side-encryption-customer-algorithm",
          SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
          SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
          BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
          RequestCharged: "x-amz-request-charged",
        },
      },
      UploadPartCopy: {
        traits: {
          CopySourceVersionId: "x-amz-copy-source-version-id",
          CopyPartResult: "httpPayload",
          ServerSideEncryption: "x-amz-server-side-encryption",
          SSECustomerAlgorithm:
            "x-amz-server-side-encryption-customer-algorithm",
          SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-MD5",
          SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
          BucketKeyEnabled: "x-amz-server-side-encryption-bucket-key-enabled",
          RequestCharged: "x-amz-request-charged",
        },
      },
    },
  },
  s3control: {
    sdkId: "S3 Control",
    version: "2018-08-20",
    arnNamespace: "s3",
    cloudTrailEventSource: "s3control.amazonaws.com",
    endpointPrefix: "s3-control",
    protocol: "restXml",
    targetPrefix: "",
    operations: {
      CreateBucket: {
        traits: {
          Location: "Location",
        },
      },
      GetPublicAccessBlock: {
        traits: {
          PublicAccessBlockConfiguration: "httpPayload",
        },
      },
      GetStorageLensConfiguration: {
        traits: {
          StorageLensConfiguration: "httpPayload",
        },
      },
      GetStorageLensGroup: {
        traits: {
          StorageLensGroup: "httpPayload",
        },
      },
    },
  },
  s3outposts: {
    sdkId: "S3Outposts",
    version: "2017-07-25",
    arnNamespace: "s3-outposts",
    cloudTrailEventSource: "s3outposts.amazonaws.com",
    endpointPrefix: "s3-outposts",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateEndpoint: "POST /S3Outposts/CreateEndpoint",
      DeleteEndpoint: "DELETE /S3Outposts/DeleteEndpoint",
      ListEndpoints: "GET /S3Outposts/ListEndpoints",
      ListOutpostsWithS3: "GET /S3Outposts/ListOutpostsWithS3",
      ListSharedEndpoints: "GET /S3Outposts/ListSharedEndpoints",
    },
  },
  s3tables: {
    sdkId: "S3Tables",
    version: "2018-05-10",
    arnNamespace: "s3tables",
    cloudTrailEventSource: "s3tables.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateNamespace: "PUT /namespaces/{tableBucketARN}",
      CreateTable: "PUT /tables/{tableBucketARN}/{namespace}",
      CreateTableBucket: "PUT /buckets",
      DeleteNamespace: "DELETE /namespaces/{tableBucketARN}/{namespace}",
      DeleteTable: "DELETE /tables/{tableBucketARN}/{namespace}/{name}",
      DeleteTableBucket: "DELETE /buckets/{tableBucketARN}",
      DeleteTableBucketEncryption:
        "DELETE /buckets/{tableBucketARN}/encryption",
      DeleteTableBucketPolicy: "DELETE /buckets/{tableBucketARN}/policy",
      DeleteTablePolicy:
        "DELETE /tables/{tableBucketARN}/{namespace}/{name}/policy",
      GetNamespace: "GET /namespaces/{tableBucketARN}/{namespace}",
      GetTable: "GET /get-table",
      GetTableBucket: "GET /buckets/{tableBucketARN}",
      GetTableBucketEncryption: "GET /buckets/{tableBucketARN}/encryption",
      GetTableBucketMaintenanceConfiguration:
        "GET /buckets/{tableBucketARN}/maintenance",
      GetTableBucketPolicy: "GET /buckets/{tableBucketARN}/policy",
      GetTableEncryption:
        "GET /tables/{tableBucketARN}/{namespace}/{name}/encryption",
      GetTableMaintenanceConfiguration:
        "GET /tables/{tableBucketARN}/{namespace}/{name}/maintenance",
      GetTableMaintenanceJobStatus:
        "GET /tables/{tableBucketARN}/{namespace}/{name}/maintenance-job-status",
      GetTableMetadataLocation:
        "GET /tables/{tableBucketARN}/{namespace}/{name}/metadata-location",
      GetTablePolicy: "GET /tables/{tableBucketARN}/{namespace}/{name}/policy",
      ListNamespaces: "GET /namespaces/{tableBucketARN}",
      ListTableBuckets: "GET /buckets",
      ListTables: "GET /tables/{tableBucketARN}",
      PutTableBucketEncryption: "PUT /buckets/{tableBucketARN}/encryption",
      PutTableBucketMaintenanceConfiguration:
        "PUT /buckets/{tableBucketARN}/maintenance/{type}",
      PutTableBucketPolicy: "PUT /buckets/{tableBucketARN}/policy",
      PutTableMaintenanceConfiguration:
        "PUT /tables/{tableBucketARN}/{namespace}/{name}/maintenance/{type}",
      PutTablePolicy: "PUT /tables/{tableBucketARN}/{namespace}/{name}/policy",
      RenameTable: "PUT /tables/{tableBucketARN}/{namespace}/{name}/rename",
      UpdateTableMetadataLocation:
        "PUT /tables/{tableBucketARN}/{namespace}/{name}/metadata-location",
    },
  },
  s3vectors: {
    sdkId: "S3Vectors",
    version: "2025-07-15",
    arnNamespace: "s3vectors",
    cloudTrailEventSource: "s3vectors.amazonaws.com",
    endpointPrefix: "s3vectors",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateIndex: "POST /CreateIndex",
      CreateVectorBucket: "POST /CreateVectorBucket",
      DeleteIndex: "POST /DeleteIndex",
      DeleteVectorBucket: "POST /DeleteVectorBucket",
      DeleteVectorBucketPolicy: "POST /DeleteVectorBucketPolicy",
      DeleteVectors: "POST /DeleteVectors",
      GetIndex: "POST /GetIndex",
      GetVectorBucket: "POST /GetVectorBucket",
      GetVectorBucketPolicy: "POST /GetVectorBucketPolicy",
      GetVectors: "POST /GetVectors",
      ListIndexes: "POST /ListIndexes",
      ListVectorBuckets: "POST /ListVectorBuckets",
      ListVectors: "POST /ListVectors",
      PutVectorBucketPolicy: "POST /PutVectorBucketPolicy",
      PutVectors: "POST /PutVectors",
      QueryVectors: "POST /QueryVectors",
    },
  },
  sagemaker: {
    sdkId: "SageMaker",
    version: "2017-07-24",
    arnNamespace: "sagemaker",
    cloudTrailEventSource: "sagemaker.amazonaws.com",
    endpointPrefix: "api.sagemaker",
    protocol: "awsJson1_1",
    targetPrefix: "SageMaker",
  },
  sagemakera2iruntime: {
    sdkId: "SageMaker A2I Runtime",
    version: "2019-11-07",
    arnNamespace: "sagemaker",
    cloudTrailEventSource: "sagemakera2iruntime.amazonaws.com",
    endpointPrefix: "a2i-runtime.sagemaker",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteHumanLoop: "DELETE /human-loops/{HumanLoopName}",
      DescribeHumanLoop: "GET /human-loops/{HumanLoopName}",
      ListHumanLoops: "GET /human-loops",
      StartHumanLoop: "POST /human-loops",
      StopHumanLoop: "POST /human-loops/stop",
    },
  },
  sagemakeredge: {
    sdkId: "Sagemaker Edge",
    version: "2020-09-23",
    arnNamespace: "sagemaker",
    cloudTrailEventSource: "sagemakeredge.amazonaws.com",
    endpointPrefix: "edge.sagemaker",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetDeployments: "POST /GetDeployments",
      GetDeviceRegistration: "POST /GetDeviceRegistration",
      SendHeartbeat: "POST /SendHeartbeat",
    },
  },
  sagemakerfeaturestoreruntime: {
    sdkId: "SageMaker FeatureStore Runtime",
    version: "2020-07-01",
    arnNamespace: "sagemaker",
    cloudTrailEventSource: "sagemakerfeaturestoreruntime.amazonaws.com",
    endpointPrefix: "featurestore-runtime.sagemaker",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetRecord: "POST /BatchGetRecord",
      DeleteRecord: "DELETE /FeatureGroup/{FeatureGroupName}",
      GetRecord: "GET /FeatureGroup/{FeatureGroupName}",
      PutRecord: "PUT /FeatureGroup/{FeatureGroupName}",
    },
  },
  sagemakergeospatial: {
    sdkId: "SageMaker Geospatial",
    version: "2020-05-27",
    arnNamespace: "sagemaker-geospatial",
    cloudTrailEventSource: "sagemaker-geospatial.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "PUT /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      DeleteEarthObservationJob: "DELETE /earth-observation-jobs/{Arn}",
      DeleteVectorEnrichmentJob: "DELETE /vector-enrichment-jobs/{Arn}",
      ExportEarthObservationJob: "POST /export-earth-observation-job",
      ExportVectorEnrichmentJob: "POST /export-vector-enrichment-jobs",
      GetEarthObservationJob: "GET /earth-observation-jobs/{Arn}",
      GetRasterDataCollection: "GET /raster-data-collection/{Arn}",
      GetTile: {
        http: "GET /tile/{z}/{x}/{y}",
        traits: {
          BinaryFile: "httpPayload",
        },
      },
      GetVectorEnrichmentJob: "GET /vector-enrichment-jobs/{Arn}",
      ListEarthObservationJobs: "POST /list-earth-observation-jobs",
      ListRasterDataCollections: "GET /raster-data-collections",
      ListVectorEnrichmentJobs: "POST /list-vector-enrichment-jobs",
      SearchRasterDataCollection: "POST /search-raster-data-collection",
      StartEarthObservationJob: "POST /earth-observation-jobs",
      StartVectorEnrichmentJob: "POST /vector-enrichment-jobs",
      StopEarthObservationJob: "POST /earth-observation-jobs/stop",
      StopVectorEnrichmentJob: "POST /vector-enrichment-jobs/stop",
    },
  },
  sagemakermetrics: {
    sdkId: "SageMaker Metrics",
    version: "2022-09-30",
    arnNamespace: "sagemaker",
    cloudTrailEventSource: "sagemakermetrics.amazonaws.com",
    endpointPrefix: "metrics.sagemaker",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetMetrics: "POST /BatchGetMetrics",
      BatchPutMetrics: "PUT /BatchPutMetrics",
    },
  },
  sagemakerruntime: {
    sdkId: "SageMaker Runtime",
    version: "2017-05-13",
    arnNamespace: "sagemaker",
    cloudTrailEventSource: "sagemakerruntime.amazonaws.com",
    endpointPrefix: "runtime.sagemaker",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      InvokeEndpoint: {
        http: "POST /endpoints/{EndpointName}/invocations",
        traits: {
          Body: "httpPayload",
          ContentType: "Content-Type",
          InvokedProductionVariant: "x-Amzn-Invoked-Production-Variant",
          CustomAttributes: "X-Amzn-SageMaker-Custom-Attributes",
          NewSessionId: "X-Amzn-SageMaker-New-Session-Id",
          ClosedSessionId: "X-Amzn-SageMaker-Closed-Session-Id",
        },
      },
      InvokeEndpointAsync: {
        http: "POST /endpoints/{EndpointName}/async-invocations",
        traits: {
          OutputLocation: "X-Amzn-SageMaker-OutputLocation",
          FailureLocation: "X-Amzn-SageMaker-FailureLocation",
        },
      },
      InvokeEndpointWithResponseStream: {
        http: "POST /endpoints/{EndpointName}/invocations-response-stream",
        traits: {
          Body: "httpPayload",
          ContentType: "X-Amzn-SageMaker-Content-Type",
          InvokedProductionVariant: "x-Amzn-Invoked-Production-Variant",
          CustomAttributes: "X-Amzn-SageMaker-Custom-Attributes",
        },
      },
    },
  },
  savingsplans: {
    sdkId: "savingsplans",
    version: "2019-06-28",
    arnNamespace: "savingsplans",
    cloudTrailEventSource: "savingsplans.amazonaws.com",
    endpointPrefix: "savingsplans",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateSavingsPlan: "POST /CreateSavingsPlan",
      DeleteQueuedSavingsPlan: "POST /DeleteQueuedSavingsPlan",
      DescribeSavingsPlanRates: "POST /DescribeSavingsPlanRates",
      DescribeSavingsPlans: "POST /DescribeSavingsPlans",
      DescribeSavingsPlansOfferingRates:
        "POST /DescribeSavingsPlansOfferingRates",
      DescribeSavingsPlansOfferings: "POST /DescribeSavingsPlansOfferings",
      ListTagsForResource: "POST /ListTagsForResource",
      ReturnSavingsPlan: "POST /ReturnSavingsPlan",
      TagResource: "POST /TagResource",
      UntagResource: "POST /UntagResource",
    },
  },
  scheduler: {
    sdkId: "Scheduler",
    version: "2021-06-30",
    arnNamespace: "scheduler",
    cloudTrailEventSource: "scheduler.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      CreateSchedule: "POST /schedules/{Name}",
      CreateScheduleGroup: "POST /schedule-groups/{Name}",
      DeleteSchedule: "DELETE /schedules/{Name}",
      DeleteScheduleGroup: "DELETE /schedule-groups/{Name}",
      GetSchedule: "GET /schedules/{Name}",
      GetScheduleGroup: "GET /schedule-groups/{Name}",
      ListScheduleGroups: "GET /schedule-groups",
      ListSchedules: "GET /schedules",
      UpdateSchedule: "PUT /schedules/{Name}",
    },
  },
  schemas: {
    sdkId: "schemas",
    version: "2019-12-02",
    arnNamespace: "schemas",
    cloudTrailEventSource: "schemas.amazonaws.com",
    endpointPrefix: "schemas",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateDiscoverer: "POST /v1/discoverers",
      CreateRegistry: "POST /v1/registries/name/{RegistryName}",
      CreateSchema:
        "POST /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
      DeleteDiscoverer: "DELETE /v1/discoverers/id/{DiscovererId}",
      DeleteRegistry: "DELETE /v1/registries/name/{RegistryName}",
      DeleteResourcePolicy: "DELETE /v1/policy",
      DeleteSchema:
        "DELETE /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
      DeleteSchemaVersion:
        "DELETE /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/version/{SchemaVersion}",
      DescribeCodeBinding:
        "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}",
      DescribeDiscoverer: "GET /v1/discoverers/id/{DiscovererId}",
      DescribeRegistry: "GET /v1/registries/name/{RegistryName}",
      DescribeSchema:
        "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
      ExportSchema:
        "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/export",
      GetCodeBindingSource: {
        http: "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}/source",
        traits: {
          Body: "httpPayload",
        },
      },
      GetDiscoveredSchema: "POST /v1/discover",
      GetResourcePolicy: "GET /v1/policy",
      ListDiscoverers: "GET /v1/discoverers",
      ListRegistries: "GET /v1/registries",
      ListSchemas: "GET /v1/registries/name/{RegistryName}/schemas",
      ListSchemaVersions:
        "GET /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/versions",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      PutCodeBinding:
        "POST /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}",
      PutResourcePolicy: "PUT /v1/policy",
      SearchSchemas: "GET /v1/registries/name/{RegistryName}/schemas/search",
      StartDiscoverer: "POST /v1/discoverers/id/{DiscovererId}/start",
      StopDiscoverer: "POST /v1/discoverers/id/{DiscovererId}/stop",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateDiscoverer: "PUT /v1/discoverers/id/{DiscovererId}",
      UpdateRegistry: "PUT /v1/registries/name/{RegistryName}",
      UpdateSchema:
        "PUT /v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
    },
  },
  secretsmanager: {
    sdkId: "Secrets Manager",
    version: "2017-10-17",
    arnNamespace: "secretsmanager",
    cloudTrailEventSource: "secretsmanager.amazonaws.com",
    endpointPrefix: "secretsmanager",
    protocol: "awsJson1_1",
    targetPrefix: "secretsmanager",
  },
  securityir: {
    sdkId: "Security IR",
    version: "2018-05-10",
    arnNamespace: "security-ir",
    cloudTrailEventSource: "security-ir.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /v1/tags/{resourceArn}",
      TagResource: "POST /v1/tags/{resourceArn}",
      UntagResource: "DELETE /v1/tags/{resourceArn}",
      BatchGetMemberAccountDetails:
        "POST /v1/membership/{membershipId}/batch-member-details",
      CancelMembership: "PUT /v1/membership/{membershipId}",
      CloseCase: "POST /v1/cases/{caseId}/close-case",
      CreateCase: "POST /v1/create-case",
      CreateCaseComment: "POST /v1/cases/{caseId}/create-comment",
      CreateMembership: "POST /v1/membership",
      GetCase: "GET /v1/cases/{caseId}/get-case",
      GetCaseAttachmentDownloadUrl:
        "GET /v1/cases/{caseId}/get-presigned-url/{attachmentId}",
      GetCaseAttachmentUploadUrl: "POST /v1/cases/{caseId}/get-presigned-url",
      GetMembership: "GET /v1/membership/{membershipId}",
      ListCaseEdits: "POST /v1/cases/{caseId}/list-case-edits",
      ListCases: "POST /v1/list-cases",
      ListComments: "POST /v1/cases/{caseId}/list-comments",
      ListMemberships: "POST /v1/memberships",
      UpdateCase: "POST /v1/cases/{caseId}/update-case",
      UpdateCaseComment:
        "PUT /v1/cases/{caseId}/update-case-comment/{commentId}",
      UpdateCaseStatus: "POST /v1/cases/{caseId}/update-case-status",
      UpdateMembership: "PUT /v1/membership/{membershipId}/update-membership",
      UpdateResolverType: "POST /v1/cases/{caseId}/update-resolver-type",
    },
  },
  securityhub: {
    sdkId: "SecurityHub",
    version: "2018-10-26",
    arnNamespace: "securityhub",
    cloudTrailEventSource: "securityhub.amazonaws.com",
    endpointPrefix: "securityhub",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AcceptAdministratorInvitation: "POST /administrator",
      AcceptInvitation: "POST /master",
      BatchDeleteAutomationRules: "POST /automationrules/delete",
      BatchDisableStandards: "POST /standards/deregister",
      BatchEnableStandards: "POST /standards/register",
      BatchGetAutomationRules: "POST /automationrules/get",
      BatchGetConfigurationPolicyAssociations:
        "POST /configurationPolicyAssociation/batchget",
      BatchGetSecurityControls: "POST /securityControls/batchGet",
      BatchGetStandardsControlAssociations: "POST /associations/batchGet",
      BatchImportFindings: "POST /findings/import",
      BatchUpdateAutomationRules: "PATCH /automationrules/update",
      BatchUpdateFindings: "PATCH /findings/batchupdate",
      BatchUpdateFindingsV2: "PATCH /findingsv2/batchupdatev2",
      BatchUpdateStandardsControlAssociations: "PATCH /associations",
      ConnectorRegistrationsV2: "POST /connectorsv2/registrations",
      CreateActionTarget: "POST /actionTargets",
      CreateAggregatorV2: "POST /aggregatorv2/create",
      CreateAutomationRule: "POST /automationrules/create",
      CreateAutomationRuleV2: "POST /automationrulesv2/create",
      CreateConfigurationPolicy: "POST /configurationPolicy/create",
      CreateConnectorV2: "POST /connectorsv2",
      CreateFindingAggregator: "POST /findingAggregator/create",
      CreateInsight: "POST /insights",
      CreateMembers: "POST /members",
      CreateTicketV2: "POST /ticketsv2",
      DeclineInvitations: "POST /invitations/decline",
      DeleteActionTarget: "DELETE /actionTargets/{ActionTargetArn+}",
      DeleteAggregatorV2: "DELETE /aggregatorv2/delete/{AggregatorV2Arn+}",
      DeleteAutomationRuleV2: "DELETE /automationrulesv2/{Identifier}",
      DeleteConfigurationPolicy: "DELETE /configurationPolicy/{Identifier}",
      DeleteConnectorV2: "DELETE /connectorsv2/{ConnectorId+}",
      DeleteFindingAggregator:
        "DELETE /findingAggregator/delete/{FindingAggregatorArn+}",
      DeleteInsight: "DELETE /insights/{InsightArn+}",
      DeleteInvitations: "POST /invitations/delete",
      DeleteMembers: "POST /members/delete",
      DescribeActionTargets: "POST /actionTargets/get",
      DescribeHub: "GET /accounts",
      DescribeOrganizationConfiguration: "GET /organization/configuration",
      DescribeProducts: "GET /products",
      DescribeProductsV2: "GET /productsV2",
      DescribeSecurityHubV2: "GET /hubv2",
      DescribeStandards: "GET /standards",
      DescribeStandardsControls:
        "GET /standards/controls/{StandardsSubscriptionArn+}",
      DisableImportFindingsForProduct:
        "DELETE /productSubscriptions/{ProductSubscriptionArn+}",
      DisableOrganizationAdminAccount: "POST /organization/admin/disable",
      DisableSecurityHub: "DELETE /accounts",
      DisableSecurityHubV2: "DELETE /hubv2",
      DisassociateFromAdministratorAccount: "POST /administrator/disassociate",
      DisassociateFromMasterAccount: "POST /master/disassociate",
      DisassociateMembers: "POST /members/disassociate",
      EnableImportFindingsForProduct: "POST /productSubscriptions",
      EnableOrganizationAdminAccount: "POST /organization/admin/enable",
      EnableSecurityHub: "POST /accounts",
      EnableSecurityHubV2: "POST /hubv2",
      GetAdministratorAccount: "GET /administrator",
      GetAggregatorV2: "GET /aggregatorv2/get/{AggregatorV2Arn+}",
      GetAutomationRuleV2: "GET /automationrulesv2/{Identifier}",
      GetConfigurationPolicy: "GET /configurationPolicy/get/{Identifier}",
      GetConfigurationPolicyAssociation:
        "POST /configurationPolicyAssociation/get",
      GetConnectorV2: "GET /connectorsv2/{ConnectorId+}",
      GetEnabledStandards: "POST /standards/get",
      GetFindingAggregator:
        "GET /findingAggregator/get/{FindingAggregatorArn+}",
      GetFindingHistory: "POST /findingHistory/get",
      GetFindings: "POST /findings",
      GetFindingStatisticsV2: "POST /findingsv2/statistics",
      GetFindingsV2: "POST /findingsv2",
      GetInsightResults: "GET /insights/results/{InsightArn+}",
      GetInsights: "POST /insights/get",
      GetInvitationsCount: "GET /invitations/count",
      GetMasterAccount: "GET /master",
      GetMembers: "POST /members/get",
      GetResourcesStatisticsV2: "POST /resourcesv2/statistics",
      GetResourcesV2: "POST /resourcesv2",
      GetSecurityControlDefinition: "GET /securityControl/definition",
      InviteMembers: "POST /members/invite",
      ListAggregatorsV2: "GET /aggregatorv2/list",
      ListAutomationRules: "GET /automationrules/list",
      ListAutomationRulesV2: "GET /automationrulesv2/list",
      ListConfigurationPolicies: "GET /configurationPolicy/list",
      ListConfigurationPolicyAssociations:
        "POST /configurationPolicyAssociation/list",
      ListConnectorsV2: "GET /connectorsv2",
      ListEnabledProductsForImport: "GET /productSubscriptions",
      ListFindingAggregators: "GET /findingAggregator/list",
      ListInvitations: "GET /invitations",
      ListMembers: "GET /members",
      ListOrganizationAdminAccounts: "GET /organization/admin",
      ListSecurityControlDefinitions: "GET /securityControls/definitions",
      ListStandardsControlAssociations: "GET /associations",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      StartConfigurationPolicyAssociation:
        "POST /configurationPolicyAssociation/associate",
      StartConfigurationPolicyDisassociation:
        "POST /configurationPolicyAssociation/disassociate",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateActionTarget: "PATCH /actionTargets/{ActionTargetArn+}",
      UpdateAggregatorV2: "PATCH /aggregatorv2/update/{AggregatorV2Arn+}",
      UpdateAutomationRuleV2: "PATCH /automationrulesv2/{Identifier}",
      UpdateConfigurationPolicy: "PATCH /configurationPolicy/{Identifier}",
      UpdateConnectorV2: "PATCH /connectorsv2/{ConnectorId+}",
      UpdateFindingAggregator: "PATCH /findingAggregator/update",
      UpdateFindings: "PATCH /findings",
      UpdateInsight: "PATCH /insights/{InsightArn+}",
      UpdateOrganizationConfiguration: "POST /organization/configuration",
      UpdateSecurityControl: "PATCH /securityControl/update",
      UpdateSecurityHubConfiguration: "PATCH /accounts",
      UpdateStandardsControl: "PATCH /standards/control/{StandardsControlArn+}",
    },
  },
  securitylake: {
    sdkId: "SecurityLake",
    version: "2018-05-10",
    arnNamespace: "securitylake",
    cloudTrailEventSource: "securitylake.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateDataLakeExceptionSubscription:
        "POST /v1/datalake/exceptions/subscription",
      DeleteDataLakeExceptionSubscription:
        "DELETE /v1/datalake/exceptions/subscription",
      DeregisterDataLakeDelegatedAdministrator: "DELETE /v1/datalake/delegate",
      GetDataLakeExceptionSubscription:
        "GET /v1/datalake/exceptions/subscription",
      ListDataLakeExceptions: "POST /v1/datalake/exceptions",
      ListTagsForResource: "GET /v1/tags/{resourceArn}",
      RegisterDataLakeDelegatedAdministrator: "POST /v1/datalake/delegate",
      TagResource: "POST /v1/tags/{resourceArn}",
      UntagResource: "DELETE /v1/tags/{resourceArn}",
      UpdateDataLakeExceptionSubscription:
        "PUT /v1/datalake/exceptions/subscription",
      CreateAwsLogSource: "POST /v1/datalake/logsources/aws",
      CreateCustomLogSource: "POST /v1/datalake/logsources/custom",
      CreateDataLake: "POST /v1/datalake",
      CreateDataLakeOrganizationConfiguration:
        "POST /v1/datalake/organization/configuration",
      CreateSubscriber: "POST /v1/subscribers",
      CreateSubscriberNotification:
        "POST /v1/subscribers/{subscriberId}/notification",
      DeleteAwsLogSource: "POST /v1/datalake/logsources/aws/delete",
      DeleteCustomLogSource:
        "DELETE /v1/datalake/logsources/custom/{sourceName}",
      DeleteDataLake: "POST /v1/datalake/delete",
      DeleteDataLakeOrganizationConfiguration:
        "POST /v1/datalake/organization/configuration/delete",
      DeleteSubscriber: "DELETE /v1/subscribers/{subscriberId}",
      DeleteSubscriberNotification:
        "DELETE /v1/subscribers/{subscriberId}/notification",
      GetDataLakeOrganizationConfiguration:
        "GET /v1/datalake/organization/configuration",
      GetDataLakeSources: "POST /v1/datalake/sources",
      GetSubscriber: "GET /v1/subscribers/{subscriberId}",
      ListDataLakes: "GET /v1/datalakes",
      ListLogSources: "POST /v1/datalake/logsources/list",
      ListSubscribers: "GET /v1/subscribers",
      UpdateDataLake: "PUT /v1/datalake",
      UpdateSubscriber: "PUT /v1/subscribers/{subscriberId}",
      UpdateSubscriberNotification:
        "PUT /v1/subscribers/{subscriberId}/notification",
    },
  },
  serverlessapplicationrepository: {
    sdkId: "ServerlessApplicationRepository",
    version: "2017-09-08",
    arnNamespace: "serverlessrepo",
    cloudTrailEventSource: "serverlessapplicationrepository.amazonaws.com",
    endpointPrefix: "serverlessrepo",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateApplication: "POST /applications",
      CreateApplicationVersion:
        "PUT /applications/{ApplicationId}/versions/{SemanticVersion}",
      CreateCloudFormationChangeSet:
        "POST /applications/{ApplicationId}/changesets",
      CreateCloudFormationTemplate:
        "POST /applications/{ApplicationId}/templates",
      DeleteApplication: "DELETE /applications/{ApplicationId}",
      GetApplication: "GET /applications/{ApplicationId}",
      GetApplicationPolicy: "GET /applications/{ApplicationId}/policy",
      GetCloudFormationTemplate:
        "GET /applications/{ApplicationId}/templates/{TemplateId}",
      ListApplicationDependencies:
        "GET /applications/{ApplicationId}/dependencies",
      ListApplications: "GET /applications",
      ListApplicationVersions: "GET /applications/{ApplicationId}/versions",
      PutApplicationPolicy: "PUT /applications/{ApplicationId}/policy",
      UnshareApplication: "POST /applications/{ApplicationId}/unshare",
      UpdateApplication: "PATCH /applications/{ApplicationId}",
    },
  },
  servicecatalog: {
    sdkId: "Service Catalog",
    version: "2015-12-10",
    arnNamespace: "servicecatalog",
    cloudTrailEventSource: "servicecatalog.amazonaws.com",
    endpointPrefix: "servicecatalog",
    protocol: "awsJson1_1",
    targetPrefix: "AWS242ServiceCatalogService",
  },
  servicecatalogappregistry: {
    sdkId: "Service Catalog AppRegistry",
    version: "2020-06-24",
    arnNamespace: "servicecatalog",
    cloudTrailEventSource: "servicecatalogappregistry.amazonaws.com",
    endpointPrefix: "servicecatalog-appregistry",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateAttributeGroup:
        "PUT /applications/{application}/attribute-groups/{attributeGroup}",
      AssociateResource:
        "PUT /applications/{application}/resources/{resourceType}/{resource}",
      CreateApplication: "POST /applications",
      CreateAttributeGroup: "POST /attribute-groups",
      DeleteApplication: "DELETE /applications/{application}",
      DeleteAttributeGroup: "DELETE /attribute-groups/{attributeGroup}",
      DisassociateAttributeGroup:
        "DELETE /applications/{application}/attribute-groups/{attributeGroup}",
      DisassociateResource:
        "DELETE /applications/{application}/resources/{resourceType}/{resource}",
      GetApplication: "GET /applications/{application}",
      GetAssociatedResource:
        "GET /applications/{application}/resources/{resourceType}/{resource}",
      GetAttributeGroup: "GET /attribute-groups/{attributeGroup}",
      GetConfiguration: "GET /configuration",
      ListApplications: "GET /applications",
      ListAssociatedAttributeGroups:
        "GET /applications/{application}/attribute-groups",
      ListAssociatedResources: "GET /applications/{application}/resources",
      ListAttributeGroups: "GET /attribute-groups",
      ListAttributeGroupsForApplication:
        "GET /applications/{application}/attribute-group-details",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutConfiguration: "PUT /configuration",
      SyncResource: "POST /sync/{resourceType}/{resource}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateApplication: "PATCH /applications/{application}",
      UpdateAttributeGroup: "PATCH /attribute-groups/{attributeGroup}",
    },
  },
  servicequotas: {
    sdkId: "Service Quotas",
    version: "2019-06-24",
    arnNamespace: "servicequotas",
    cloudTrailEventSource: "servicequotas.amazonaws.com",
    endpointPrefix: "servicequotas",
    protocol: "awsJson1_1",
    targetPrefix: "ServiceQuotasV20190624",
  },
  servicediscovery: {
    sdkId: "ServiceDiscovery",
    version: "2017-03-14",
    arnNamespace: "servicediscovery",
    cloudTrailEventSource: "servicediscovery.amazonaws.com",
    endpointPrefix: "servicediscovery",
    protocol: "awsJson1_1",
    targetPrefix: "Route53AutoNaming_v20170314",
  },
  ses: {
    sdkId: "SES",
    version: "2010-12-01",
    arnNamespace: "ses",
    cloudTrailEventSource: "ses.amazonaws.com",
    endpointPrefix: "email",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  sesv2: {
    sdkId: "SESv2",
    version: "2019-09-27",
    arnNamespace: "ses",
    cloudTrailEventSource: "sesv2.amazonaws.com",
    endpointPrefix: "email",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetMetricData: "POST /v2/email/metrics/batch",
      CancelExportJob: "PUT /v2/email/export-jobs/{JobId}/cancel",
      CreateConfigurationSet: "POST /v2/email/configuration-sets",
      CreateConfigurationSetEventDestination:
        "POST /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations",
      CreateContact: "POST /v2/email/contact-lists/{ContactListName}/contacts",
      CreateContactList: "POST /v2/email/contact-lists",
      CreateCustomVerificationEmailTemplate:
        "POST /v2/email/custom-verification-email-templates",
      CreateDedicatedIpPool: "POST /v2/email/dedicated-ip-pools",
      CreateDeliverabilityTestReport:
        "POST /v2/email/deliverability-dashboard/test",
      CreateEmailIdentity: "POST /v2/email/identities",
      CreateEmailIdentityPolicy:
        "POST /v2/email/identities/{EmailIdentity}/policies/{PolicyName}",
      CreateEmailTemplate: "POST /v2/email/templates",
      CreateExportJob: "POST /v2/email/export-jobs",
      CreateImportJob: "POST /v2/email/import-jobs",
      CreateMultiRegionEndpoint: "POST /v2/email/multi-region-endpoints",
      CreateTenant: "POST /v2/email/tenants",
      CreateTenantResourceAssociation: "POST /v2/email/tenants/resources",
      DeleteConfigurationSet:
        "DELETE /v2/email/configuration-sets/{ConfigurationSetName}",
      DeleteConfigurationSetEventDestination:
        "DELETE /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
      DeleteContact:
        "DELETE /v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}",
      DeleteContactList: "DELETE /v2/email/contact-lists/{ContactListName}",
      DeleteCustomVerificationEmailTemplate:
        "DELETE /v2/email/custom-verification-email-templates/{TemplateName}",
      DeleteDedicatedIpPool: "DELETE /v2/email/dedicated-ip-pools/{PoolName}",
      DeleteEmailIdentity: "DELETE /v2/email/identities/{EmailIdentity}",
      DeleteEmailIdentityPolicy:
        "DELETE /v2/email/identities/{EmailIdentity}/policies/{PolicyName}",
      DeleteEmailTemplate: "DELETE /v2/email/templates/{TemplateName}",
      DeleteMultiRegionEndpoint:
        "DELETE /v2/email/multi-region-endpoints/{EndpointName}",
      DeleteSuppressedDestination:
        "DELETE /v2/email/suppression/addresses/{EmailAddress}",
      DeleteTenant: "POST /v2/email/tenants/delete",
      DeleteTenantResourceAssociation:
        "POST /v2/email/tenants/resources/delete",
      GetAccount: "GET /v2/email/account",
      GetBlacklistReports:
        "GET /v2/email/deliverability-dashboard/blacklist-report",
      GetConfigurationSet:
        "GET /v2/email/configuration-sets/{ConfigurationSetName}",
      GetConfigurationSetEventDestinations:
        "GET /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations",
      GetContact:
        "GET /v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}",
      GetContactList: "GET /v2/email/contact-lists/{ContactListName}",
      GetCustomVerificationEmailTemplate:
        "GET /v2/email/custom-verification-email-templates/{TemplateName}",
      GetDedicatedIp: "GET /v2/email/dedicated-ips/{Ip}",
      GetDedicatedIpPool: "GET /v2/email/dedicated-ip-pools/{PoolName}",
      GetDedicatedIps: "GET /v2/email/dedicated-ips",
      GetDeliverabilityDashboardOptions:
        "GET /v2/email/deliverability-dashboard",
      GetDeliverabilityTestReport:
        "GET /v2/email/deliverability-dashboard/test-reports/{ReportId}",
      GetDomainDeliverabilityCampaign:
        "GET /v2/email/deliverability-dashboard/campaigns/{CampaignId}",
      GetDomainStatisticsReport:
        "GET /v2/email/deliverability-dashboard/statistics-report/{Domain}",
      GetEmailIdentity: "GET /v2/email/identities/{EmailIdentity}",
      GetEmailIdentityPolicies:
        "GET /v2/email/identities/{EmailIdentity}/policies",
      GetEmailTemplate: "GET /v2/email/templates/{TemplateName}",
      GetExportJob: "GET /v2/email/export-jobs/{JobId}",
      GetImportJob: "GET /v2/email/import-jobs/{JobId}",
      GetMessageInsights: "GET /v2/email/insights/{MessageId}",
      GetMultiRegionEndpoint:
        "GET /v2/email/multi-region-endpoints/{EndpointName}",
      GetReputationEntity:
        "GET /v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}",
      GetSuppressedDestination:
        "GET /v2/email/suppression/addresses/{EmailAddress}",
      GetTenant: "POST /v2/email/tenants/get",
      ListConfigurationSets: "GET /v2/email/configuration-sets",
      ListContactLists: "GET /v2/email/contact-lists",
      ListContacts:
        "POST /v2/email/contact-lists/{ContactListName}/contacts/list",
      ListCustomVerificationEmailTemplates:
        "GET /v2/email/custom-verification-email-templates",
      ListDedicatedIpPools: "GET /v2/email/dedicated-ip-pools",
      ListDeliverabilityTestReports:
        "GET /v2/email/deliverability-dashboard/test-reports",
      ListDomainDeliverabilityCampaigns:
        "GET /v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns",
      ListEmailIdentities: "GET /v2/email/identities",
      ListEmailTemplates: "GET /v2/email/templates",
      ListExportJobs: "POST /v2/email/list-export-jobs",
      ListImportJobs: "POST /v2/email/import-jobs/list",
      ListMultiRegionEndpoints: "GET /v2/email/multi-region-endpoints",
      ListRecommendations: "POST /v2/email/vdm/recommendations",
      ListReputationEntities: "POST /v2/email/reputation/entities",
      ListResourceTenants: "POST /v2/email/resources/tenants/list",
      ListSuppressedDestinations: "GET /v2/email/suppression/addresses",
      ListTagsForResource: "GET /v2/email/tags",
      ListTenantResources: "POST /v2/email/tenants/resources/list",
      ListTenants: "POST /v2/email/tenants/list",
      PutAccountDedicatedIpWarmupAttributes:
        "PUT /v2/email/account/dedicated-ips/warmup",
      PutAccountDetails: "POST /v2/email/account/details",
      PutAccountSendingAttributes: "PUT /v2/email/account/sending",
      PutAccountSuppressionAttributes: "PUT /v2/email/account/suppression",
      PutAccountVdmAttributes: "PUT /v2/email/account/vdm",
      PutConfigurationSetArchivingOptions:
        "PUT /v2/email/configuration-sets/{ConfigurationSetName}/archiving-options",
      PutConfigurationSetDeliveryOptions:
        "PUT /v2/email/configuration-sets/{ConfigurationSetName}/delivery-options",
      PutConfigurationSetReputationOptions:
        "PUT /v2/email/configuration-sets/{ConfigurationSetName}/reputation-options",
      PutConfigurationSetSendingOptions:
        "PUT /v2/email/configuration-sets/{ConfigurationSetName}/sending",
      PutConfigurationSetSuppressionOptions:
        "PUT /v2/email/configuration-sets/{ConfigurationSetName}/suppression-options",
      PutConfigurationSetTrackingOptions:
        "PUT /v2/email/configuration-sets/{ConfigurationSetName}/tracking-options",
      PutConfigurationSetVdmOptions:
        "PUT /v2/email/configuration-sets/{ConfigurationSetName}/vdm-options",
      PutDedicatedIpInPool: "PUT /v2/email/dedicated-ips/{Ip}/pool",
      PutDedicatedIpPoolScalingAttributes:
        "PUT /v2/email/dedicated-ip-pools/{PoolName}/scaling",
      PutDedicatedIpWarmupAttributes: "PUT /v2/email/dedicated-ips/{Ip}/warmup",
      PutDeliverabilityDashboardOption:
        "PUT /v2/email/deliverability-dashboard",
      PutEmailIdentityConfigurationSetAttributes:
        "PUT /v2/email/identities/{EmailIdentity}/configuration-set",
      PutEmailIdentityDkimAttributes:
        "PUT /v2/email/identities/{EmailIdentity}/dkim",
      PutEmailIdentityDkimSigningAttributes:
        "PUT /v1/email/identities/{EmailIdentity}/dkim/signing",
      PutEmailIdentityFeedbackAttributes:
        "PUT /v2/email/identities/{EmailIdentity}/feedback",
      PutEmailIdentityMailFromAttributes:
        "PUT /v2/email/identities/{EmailIdentity}/mail-from",
      PutSuppressedDestination: "PUT /v2/email/suppression/addresses",
      SendBulkEmail: "POST /v2/email/outbound-bulk-emails",
      SendCustomVerificationEmail:
        "POST /v2/email/outbound-custom-verification-emails",
      SendEmail: "POST /v2/email/outbound-emails",
      TagResource: "POST /v2/email/tags",
      TestRenderEmailTemplate: "POST /v2/email/templates/{TemplateName}/render",
      UntagResource: "DELETE /v2/email/tags",
      UpdateConfigurationSetEventDestination:
        "PUT /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
      UpdateContact:
        "PUT /v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}",
      UpdateContactList: "PUT /v2/email/contact-lists/{ContactListName}",
      UpdateCustomVerificationEmailTemplate:
        "PUT /v2/email/custom-verification-email-templates/{TemplateName}",
      UpdateEmailIdentityPolicy:
        "PUT /v2/email/identities/{EmailIdentity}/policies/{PolicyName}",
      UpdateEmailTemplate: "PUT /v2/email/templates/{TemplateName}",
      UpdateReputationEntityCustomerManagedStatus:
        "PUT /v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/customer-managed-status",
      UpdateReputationEntityPolicy:
        "PUT /v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/policy",
    },
  },
  sfn: {
    sdkId: "SFN",
    version: "2016-11-23",
    arnNamespace: "states",
    cloudTrailEventSource: "states.amazonaws.com",
    endpointPrefix: "states",
    protocol: "awsJson1_0",
    targetPrefix: "AWSStepFunctions",
  },
  shield: {
    sdkId: "Shield",
    version: "2016-06-02",
    arnNamespace: "shield",
    cloudTrailEventSource: "shield.amazonaws.com",
    endpointPrefix: "shield",
    protocol: "awsJson1_1",
    targetPrefix: "AWSShield_20160616",
  },
  signer: {
    sdkId: "signer",
    version: "2017-08-25",
    arnNamespace: "signer",
    cloudTrailEventSource: "signer.amazonaws.com",
    endpointPrefix: "signer",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AddProfilePermission: "POST /signing-profiles/{profileName}/permissions",
      CancelSigningProfile: "DELETE /signing-profiles/{profileName}",
      DescribeSigningJob: "GET /signing-jobs/{jobId}",
      GetRevocationStatus: "GET /revocations",
      GetSigningPlatform: "GET /signing-platforms/{platformId}",
      GetSigningProfile: "GET /signing-profiles/{profileName}",
      ListProfilePermissions: "GET /signing-profiles/{profileName}/permissions",
      ListSigningJobs: "GET /signing-jobs",
      ListSigningPlatforms: "GET /signing-platforms",
      ListSigningProfiles: "GET /signing-profiles",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutSigningProfile: "PUT /signing-profiles/{profileName}",
      RemoveProfilePermission:
        "DELETE /signing-profiles/{profileName}/permissions/{statementId}",
      RevokeSignature: "PUT /signing-jobs/{jobId}/revoke",
      RevokeSigningProfile: "PUT /signing-profiles/{profileName}/revoke",
      SignPayload: "POST /signing-jobs/with-payload",
      StartSigningJob: "POST /signing-jobs",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
    },
  },
  simspaceweaver: {
    sdkId: "SimSpaceWeaver",
    version: "2022-10-28",
    arnNamespace: "simspaceweaver",
    cloudTrailEventSource: "simspaceweaver.amazonaws.com",
    endpointPrefix: "simspaceweaver",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      CreateSnapshot: "POST /createsnapshot",
      DeleteApp: "DELETE /deleteapp",
      DeleteSimulation: "DELETE /deletesimulation",
      DescribeApp: "GET /describeapp",
      DescribeSimulation: "GET /describesimulation",
      ListApps: "GET /listapps",
      ListSimulations: "GET /listsimulations",
      StartApp: "POST /startapp",
      StartClock: "POST /startclock",
      StartSimulation: "POST /startsimulation",
      StopApp: "POST /stopapp",
      StopClock: "POST /stopclock",
      StopSimulation: "POST /stopsimulation",
    },
  },
  sms: {
    sdkId: "SMS",
    version: "2016-10-24",
    arnNamespace: "sms",
    cloudTrailEventSource: "sms.amazonaws.com",
    endpointPrefix: "sms",
    protocol: "awsJson1_1",
    targetPrefix: "AWSServerMigrationService_V2016_10_24",
  },
  snowdevicemanagement: {
    sdkId: "Snow Device Management",
    version: "2021-08-04",
    arnNamespace: "snow-device-management",
    cloudTrailEventSource: "snow-device-management.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CancelTask: "POST /task/{taskId}/cancel",
      CreateTask: "POST /task",
      DescribeDevice: "POST /managed-device/{managedDeviceId}/describe",
      DescribeDeviceEc2Instances:
        "POST /managed-device/{managedDeviceId}/resources/ec2/describe",
      DescribeExecution: "POST /task/{taskId}/execution/{managedDeviceId}",
      DescribeTask: "POST /task/{taskId}",
      ListDeviceResources: "GET /managed-device/{managedDeviceId}/resources",
      ListDevices: "GET /managed-devices",
      ListExecutions: "GET /executions",
      ListTasks: "GET /tasks",
    },
  },
  snowball: {
    sdkId: "Snowball",
    version: "2016-06-30",
    arnNamespace: "snowball",
    cloudTrailEventSource: "snowball.amazonaws.com",
    endpointPrefix: "snowball",
    protocol: "awsJson1_1",
    targetPrefix: "AWSIESnowballJobManagementService",
  },
  sns: {
    sdkId: "SNS",
    version: "2010-03-31",
    arnNamespace: "sns",
    cloudTrailEventSource: "sns.amazonaws.com",
    endpointPrefix: "sns",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  socialmessaging: {
    sdkId: "SocialMessaging",
    version: "2024-01-01",
    arnNamespace: "social-messaging",
    cloudTrailEventSource: "social-messaging.amazonaws.com",
    endpointPrefix: "social-messaging",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateWhatsAppMessageTemplate: "POST /v1/whatsapp/template/put",
      CreateWhatsAppMessageTemplateFromLibrary:
        "POST /v1/whatsapp/template/create",
      CreateWhatsAppMessageTemplateMedia: "POST /v1/whatsapp/template/media",
      DeleteWhatsAppMessageTemplate: "DELETE /v1/whatsapp/template",
      GetWhatsAppMessageTemplate: "GET /v1/whatsapp/template",
      ListTagsForResource: "GET /v1/tags/list",
      ListWhatsAppMessageTemplates: "GET /v1/whatsapp/template/list",
      ListWhatsAppTemplateLibrary: "POST /v1/whatsapp/template/library",
      TagResource: "POST /v1/tags/tag-resource",
      UntagResource: "POST /v1/tags/untag-resource",
      UpdateWhatsAppMessageTemplate: "POST /v1/whatsapp/template",
      AssociateWhatsAppBusinessAccount: "POST /v1/whatsapp/signup",
      DeleteWhatsAppMessageMedia: "DELETE /v1/whatsapp/media",
      DisassociateWhatsAppBusinessAccount:
        "DELETE /v1/whatsapp/waba/disassociate",
      GetLinkedWhatsAppBusinessAccount: "GET /v1/whatsapp/waba/details",
      GetLinkedWhatsAppBusinessAccountPhoneNumber:
        "GET /v1/whatsapp/waba/phone/details",
      GetWhatsAppMessageMedia: "POST /v1/whatsapp/media/get",
      ListLinkedWhatsAppBusinessAccounts: "GET /v1/whatsapp/waba/list",
      PostWhatsAppMessageMedia: "POST /v1/whatsapp/media",
      PutWhatsAppBusinessAccountEventDestinations:
        "PUT /v1/whatsapp/waba/eventdestinations",
      SendWhatsAppMessage: "POST /v1/whatsapp/send",
    },
  },
  sqs: {
    sdkId: "SQS",
    version: "2012-11-05",
    arnNamespace: "sqs",
    cloudTrailEventSource: "sqs.amazonaws.com",
    endpointPrefix: "sqs",
    protocol: "awsJson1_0",
    targetPrefix: "AmazonSQS",
  },
  ssm: {
    sdkId: "SSM",
    version: "2014-11-06",
    arnNamespace: "ssm",
    cloudTrailEventSource: "ssm.amazonaws.com",
    endpointPrefix: "ssm",
    protocol: "awsJson1_1",
    targetPrefix: "AmazonSSM",
  },
  ssmcontacts: {
    sdkId: "SSM Contacts",
    version: "2021-05-03",
    arnNamespace: "ssm-contacts",
    cloudTrailEventSource: "ssmcontacts.amazonaws.com",
    endpointPrefix: "ssm-contacts",
    protocol: "awsJson1_1",
    targetPrefix: "SSMContacts",
  },
  ssmguiconnect: {
    sdkId: "SSM GuiConnect",
    version: "2021-05-01",
    arnNamespace: "ssm-guiconnect",
    cloudTrailEventSource: "ssm-guiconnect.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteConnectionRecordingPreferences:
        "POST /DeleteConnectionRecordingPreferences",
      GetConnectionRecordingPreferences:
        "POST /GetConnectionRecordingPreferences",
      UpdateConnectionRecordingPreferences:
        "POST /UpdateConnectionRecordingPreferences",
    },
  },
  ssmincidents: {
    sdkId: "SSM Incidents",
    version: "2018-05-10",
    arnNamespace: "ssm-incidents",
    cloudTrailEventSource: "ssm-incidents.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetIncidentFindings: "POST /batchGetIncidentFindings",
      CreateReplicationSet: "POST /createReplicationSet",
      CreateResponsePlan: "POST /createResponsePlan",
      CreateTimelineEvent: "POST /createTimelineEvent",
      DeleteIncidentRecord: "POST /deleteIncidentRecord",
      DeleteReplicationSet: "POST /deleteReplicationSet",
      DeleteResourcePolicy: "POST /deleteResourcePolicy",
      DeleteResponsePlan: "POST /deleteResponsePlan",
      DeleteTimelineEvent: "POST /deleteTimelineEvent",
      GetIncidentRecord: "GET /getIncidentRecord",
      GetReplicationSet: "GET /getReplicationSet",
      GetResourcePolicies: "POST /getResourcePolicies",
      GetResponsePlan: "GET /getResponsePlan",
      GetTimelineEvent: "GET /getTimelineEvent",
      ListIncidentFindings: "POST /listIncidentFindings",
      ListIncidentRecords: "POST /listIncidentRecords",
      ListRelatedItems: "POST /listRelatedItems",
      ListReplicationSets: "POST /listReplicationSets",
      ListResponsePlans: "POST /listResponsePlans",
      ListTagsForResource: "GET /tags/{resourceArn}",
      ListTimelineEvents: "POST /listTimelineEvents",
      PutResourcePolicy: "POST /putResourcePolicy",
      StartIncident: "POST /startIncident",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateDeletionProtection: "POST /updateDeletionProtection",
      UpdateIncidentRecord: "POST /updateIncidentRecord",
      UpdateRelatedItems: "POST /updateRelatedItems",
      UpdateReplicationSet: "POST /updateReplicationSet",
      UpdateResponsePlan: "POST /updateResponsePlan",
      UpdateTimelineEvent: "POST /updateTimelineEvent",
    },
  },
  ssmquicksetup: {
    sdkId: "SSM QuickSetup",
    version: "2018-05-10",
    arnNamespace: "ssm-quicksetup",
    cloudTrailEventSource: "ssm-quicksetup.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateConfigurationManager: "POST /configurationManager",
      DeleteConfigurationManager: "DELETE /configurationManager/{ManagerArn}",
      GetConfiguration: "GET /getConfiguration/{ConfigurationId}",
      GetConfigurationManager: "GET /configurationManager/{ManagerArn}",
      GetServiceSettings: "GET /serviceSettings",
      ListConfigurationManagers: "POST /listConfigurationManagers",
      ListConfigurations: "POST /listConfigurations",
      ListQuickSetupTypes: "GET /listQuickSetupTypes",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      TagResource: "PUT /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateConfigurationDefinition:
        "PUT /configurationDefinition/{ManagerArn}/{Id}",
      UpdateConfigurationManager: "PUT /configurationManager/{ManagerArn}",
      UpdateServiceSettings: "PUT /serviceSettings",
    },
  },
  ssmsap: {
    sdkId: "Ssm Sap",
    version: "2018-05-10",
    arnNamespace: "ssm-sap",
    cloudTrailEventSource: "ssm-sap.amazonaws.com",
    endpointPrefix: "ssm-sap",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      DeleteResourcePermission: "POST /delete-resource-permission",
      DeregisterApplication: "POST /deregister-application",
      GetApplication: "POST /get-application",
      GetComponent: "POST /get-component",
      GetDatabase: "POST /get-database",
      GetOperation: "POST /get-operation",
      GetResourcePermission: "POST /get-resource-permission",
      ListApplications: "POST /list-applications",
      ListComponents: "POST /list-components",
      ListDatabases: "POST /list-databases",
      ListOperationEvents: "POST /list-operation-events",
      ListOperations: "POST /list-operations",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutResourcePermission: "POST /put-resource-permission",
      RegisterApplication: "POST /register-application",
      StartApplication: "POST /start-application",
      StartApplicationRefresh: "POST /start-application-refresh",
      StopApplication: "POST /stop-application",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateApplicationSettings: "POST /update-application-settings",
    },
  },
  sso: {
    sdkId: "SSO",
    version: "2019-06-10",
    arnNamespace: "awsssoportal",
    cloudTrailEventSource: "sso.amazonaws.com",
    endpointPrefix: "portal.sso",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetRoleCredentials: "GET /federation/credentials",
      ListAccountRoles: "GET /assignment/roles",
      ListAccounts: "GET /assignment/accounts",
      Logout: "POST /logout",
    },
  },
  ssoadmin: {
    sdkId: "SSO Admin",
    version: "2020-07-20",
    arnNamespace: "sso",
    cloudTrailEventSource: "sso.amazonaws.com",
    endpointPrefix: "sso",
    protocol: "awsJson1_1",
    targetPrefix: "SWBExternalService",
  },
  ssooidc: {
    sdkId: "SSO OIDC",
    version: "2019-06-10",
    arnNamespace: "sso-oauth",
    cloudTrailEventSource: "ssooidc.amazonaws.com",
    endpointPrefix: "oidc",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateToken: "POST /token",
      CreateTokenWithIAM: "POST /token?aws_iam=t",
      RegisterClient: "POST /client/register",
      StartDeviceAuthorization: "POST /device_authorization",
    },
  },
  storagegateway: {
    sdkId: "Storage Gateway",
    version: "2013-06-30",
    arnNamespace: "storagegateway",
    cloudTrailEventSource: "storagegateway.amazonaws.com",
    endpointPrefix: "storagegateway",
    protocol: "awsJson1_1",
    targetPrefix: "StorageGateway_20130630",
  },
  sts: {
    sdkId: "STS",
    version: "2011-06-15",
    arnNamespace: "sts",
    cloudTrailEventSource: "sts.amazonaws.com",
    endpointPrefix: "sts",
    protocol: "awsQuery",
    targetPrefix: "",
  },
  supplychain: {
    sdkId: "SupplyChain",
    version: "2024-01-01",
    arnNamespace: "scn",
    cloudTrailEventSource: "scn.amazonaws.com",
    endpointPrefix: "scn",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetDataIntegrationEvent:
        "GET /api-data/data-integration/instance/{instanceId}/data-integration-events/{eventId}",
      GetDataIntegrationFlowExecution:
        "GET /api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions/{executionId}",
      ListDataIntegrationEvents:
        "GET /api-data/data-integration/instance/{instanceId}/data-integration-events",
      ListDataIntegrationFlowExecutions:
        "GET /api-data/data-integration/instance/{instanceId}/data-integration-flows/{flowName}/executions",
      ListTagsForResource: "GET /api/tags/{resourceArn}",
      SendDataIntegrationEvent:
        "POST /api-data/data-integration/instance/{instanceId}/data-integration-events",
      TagResource: "POST /api/tags/{resourceArn}",
      UntagResource: "DELETE /api/tags/{resourceArn}",
      CreateBillOfMaterialsImportJob:
        "POST /api/configuration/instances/{instanceId}/bill-of-materials-import-jobs",
      CreateDataIntegrationFlow:
        "PUT /api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
      CreateDataLakeDataset:
        "PUT /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
      CreateDataLakeNamespace:
        "PUT /api/datalake/instance/{instanceId}/namespaces/{name}",
      CreateInstance: "POST /api/instance",
      DeleteDataIntegrationFlow:
        "DELETE /api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
      DeleteDataLakeDataset:
        "DELETE /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
      DeleteDataLakeNamespace:
        "DELETE /api/datalake/instance/{instanceId}/namespaces/{name}",
      DeleteInstance: "DELETE /api/instance/{instanceId}",
      GetBillOfMaterialsImportJob:
        "GET /api/configuration/instances/{instanceId}/bill-of-materials-import-jobs/{jobId}",
      GetDataIntegrationFlow:
        "GET /api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
      GetDataLakeDataset:
        "GET /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
      GetDataLakeNamespace:
        "GET /api/datalake/instance/{instanceId}/namespaces/{name}",
      GetInstance: "GET /api/instance/{instanceId}",
      ListDataIntegrationFlows:
        "GET /api/data-integration/instance/{instanceId}/data-integration-flows",
      ListDataLakeDatasets:
        "GET /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets",
      ListDataLakeNamespaces:
        "GET /api/datalake/instance/{instanceId}/namespaces",
      ListInstances: "GET /api/instance",
      UpdateDataIntegrationFlow:
        "PATCH /api/data-integration/instance/{instanceId}/data-integration-flows/{name}",
      UpdateDataLakeDataset:
        "PATCH /api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}",
      UpdateDataLakeNamespace:
        "PATCH /api/datalake/instance/{instanceId}/namespaces/{name}",
      UpdateInstance: "PATCH /api/instance/{instanceId}",
    },
  },
  support: {
    sdkId: "Support",
    version: "2013-04-15",
    arnNamespace: "support",
    cloudTrailEventSource: "support.amazonaws.com",
    endpointPrefix: "support",
    protocol: "awsJson1_1",
    targetPrefix: "AWSSupport_20130415",
  },
  supportapp: {
    sdkId: "Support App",
    version: "2021-08-20",
    arnNamespace: "supportapp",
    cloudTrailEventSource: "supportapp.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateSlackChannelConfiguration:
        "POST /control/create-slack-channel-configuration",
      DeleteAccountAlias: "POST /control/delete-account-alias",
      DeleteSlackChannelConfiguration:
        "POST /control/delete-slack-channel-configuration",
      DeleteSlackWorkspaceConfiguration:
        "POST /control/delete-slack-workspace-configuration",
      GetAccountAlias: "POST /control/get-account-alias",
      ListSlackChannelConfigurations:
        "POST /control/list-slack-channel-configurations",
      ListSlackWorkspaceConfigurations:
        "POST /control/list-slack-workspace-configurations",
      PutAccountAlias: "POST /control/put-account-alias",
      RegisterSlackWorkspaceForOrganization:
        "POST /control/register-slack-workspace-for-organization",
      UpdateSlackChannelConfiguration:
        "POST /control/update-slack-channel-configuration",
    },
  },
  swf: {
    sdkId: "SWF",
    version: "2012-01-25",
    arnNamespace: "swf",
    cloudTrailEventSource: "swf.amazonaws.com",
    endpointPrefix: "swf",
    protocol: "awsJson1_0",
    targetPrefix: "SimpleWorkflowService",
  },
  synthetics: {
    sdkId: "synthetics",
    version: "2017-10-11",
    arnNamespace: "synthetics",
    cloudTrailEventSource: "synthetics.amazonaws.com",
    endpointPrefix: "synthetics",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateResource: "PATCH /group/{GroupIdentifier}/associate",
      CreateCanary: "POST /canary",
      CreateGroup: "POST /group",
      DeleteCanary: "DELETE /canary/{Name}",
      DeleteGroup: "DELETE /group/{GroupIdentifier}",
      DescribeCanaries: "POST /canaries",
      DescribeCanariesLastRun: "POST /canaries/last-run",
      DescribeRuntimeVersions: "POST /runtime-versions",
      DisassociateResource: "PATCH /group/{GroupIdentifier}/disassociate",
      GetCanary: "GET /canary/{Name}",
      GetCanaryRuns: "POST /canary/{Name}/runs",
      GetGroup: "GET /group/{GroupIdentifier}",
      ListAssociatedGroups: "POST /resource/{ResourceArn}/groups",
      ListGroupResources: "POST /group/{GroupIdentifier}/resources",
      ListGroups: "POST /groups",
      ListTagsForResource: "GET /tags/{ResourceArn}",
      StartCanary: "POST /canary/{Name}/start",
      StartCanaryDryRun: "POST /canary/{Name}/dry-run/start",
      StopCanary: "POST /canary/{Name}/stop",
      TagResource: "POST /tags/{ResourceArn}",
      UntagResource: "DELETE /tags/{ResourceArn}",
      UpdateCanary: "PATCH /canary/{Name}",
    },
  },
  taxsettings: {
    sdkId: "TaxSettings",
    version: "2018-05-10",
    arnNamespace: "tax",
    cloudTrailEventSource: "tax.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchDeleteTaxRegistration: "POST /BatchDeleteTaxRegistration",
      BatchGetTaxExemptions: "POST /BatchGetTaxExemptions",
      BatchPutTaxRegistration: "POST /BatchPutTaxRegistration",
      DeleteSupplementalTaxRegistration:
        "POST /DeleteSupplementalTaxRegistration",
      DeleteTaxRegistration: "POST /DeleteTaxRegistration",
      GetTaxExemptionTypes: "POST /GetTaxExemptionTypes",
      GetTaxInheritance: "POST /GetTaxInheritance",
      GetTaxRegistration: "POST /GetTaxRegistration",
      GetTaxRegistrationDocument: "POST /GetTaxRegistrationDocument",
      ListSupplementalTaxRegistrations:
        "POST /ListSupplementalTaxRegistrations",
      ListTaxExemptions: "POST /ListTaxExemptions",
      ListTaxRegistrations: "POST /ListTaxRegistrations",
      PutSupplementalTaxRegistration: "POST /PutSupplementalTaxRegistration",
      PutTaxExemption: "POST /PutTaxExemption",
      PutTaxInheritance: "POST /PutTaxInheritance",
      PutTaxRegistration: "POST /PutTaxRegistration",
    },
  },
  textract: {
    sdkId: "Textract",
    version: "2018-06-27",
    arnNamespace: "textract",
    cloudTrailEventSource: "textract.amazonaws.com",
    endpointPrefix: "textract",
    protocol: "awsJson1_1",
    targetPrefix: "Textract",
  },
  timestreaminfluxdb: {
    sdkId: "Timestream InfluxDB",
    version: "2023-01-27",
    arnNamespace: "timestream-influxdb",
    cloudTrailEventSource: "timestream-influxdb.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_0",
    targetPrefix: "AmazonTimestreamInfluxDB",
  },
  timestreamquery: {
    sdkId: "Timestream Query",
    version: "2018-11-01",
    arnNamespace: "timestream",
    cloudTrailEventSource: "timestreamquery.amazonaws.com",
    endpointPrefix: "query.timestream",
    protocol: "awsJson1_0",
    targetPrefix: "Timestream_20181101",
  },
  timestreamwrite: {
    sdkId: "Timestream Write",
    version: "2018-11-01",
    arnNamespace: "timestream",
    cloudTrailEventSource: "timestreamwrite.amazonaws.com",
    endpointPrefix: "ingest.timestream",
    protocol: "awsJson1_0",
    targetPrefix: "Timestream_20181101",
  },
  tnb: {
    sdkId: "tnb",
    version: "2008-10-21",
    arnNamespace: "tnb",
    cloudTrailEventSource: "tnb.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CancelSolNetworkOperation:
        "POST /sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}/cancel",
      CreateSolFunctionPackage: "POST /sol/vnfpkgm/v1/vnf_packages",
      CreateSolNetworkInstance: "POST /sol/nslcm/v1/ns_instances",
      CreateSolNetworkPackage: "POST /sol/nsd/v1/ns_descriptors",
      DeleteSolFunctionPackage:
        "DELETE /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}",
      DeleteSolNetworkInstance:
        "DELETE /sol/nslcm/v1/ns_instances/{nsInstanceId}",
      DeleteSolNetworkPackage: "DELETE /sol/nsd/v1/ns_descriptors/{nsdInfoId}",
      GetSolFunctionInstance:
        "GET /sol/vnflcm/v1/vnf_instances/{vnfInstanceId}",
      GetSolFunctionPackage: "GET /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}",
      GetSolFunctionPackageContent: {
        http: "GET /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content",
        traits: {
          contentType: "Content-Type",
          packageContent: "httpPayload",
        },
      },
      GetSolFunctionPackageDescriptor: {
        http: "GET /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/vnfd",
        traits: {
          contentType: "Content-Type",
          vnfd: "httpPayload",
        },
      },
      GetSolNetworkInstance: "GET /sol/nslcm/v1/ns_instances/{nsInstanceId}",
      GetSolNetworkOperation: "GET /sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}",
      GetSolNetworkPackage: "GET /sol/nsd/v1/ns_descriptors/{nsdInfoId}",
      GetSolNetworkPackageContent: {
        http: "GET /sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content",
        traits: {
          contentType: "Content-Type",
          nsdContent: "httpPayload",
        },
      },
      GetSolNetworkPackageDescriptor: {
        http: "GET /sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd",
        traits: {
          contentType: "Content-Type",
          nsd: "httpPayload",
        },
      },
      InstantiateSolNetworkInstance:
        "POST /sol/nslcm/v1/ns_instances/{nsInstanceId}/instantiate",
      ListSolFunctionInstances: "GET /sol/vnflcm/v1/vnf_instances",
      ListSolFunctionPackages: "GET /sol/vnfpkgm/v1/vnf_packages",
      ListSolNetworkInstances: "GET /sol/nslcm/v1/ns_instances",
      ListSolNetworkOperations: "GET /sol/nslcm/v1/ns_lcm_op_occs",
      ListSolNetworkPackages: "GET /sol/nsd/v1/ns_descriptors",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutSolFunctionPackageContent:
        "PUT /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content",
      PutSolNetworkPackageContent:
        "PUT /sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content",
      TagResource: "POST /tags/{resourceArn}",
      TerminateSolNetworkInstance:
        "POST /sol/nslcm/v1/ns_instances/{nsInstanceId}/terminate",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateSolFunctionPackage: "PATCH /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}",
      UpdateSolNetworkInstance:
        "POST /sol/nslcm/v1/ns_instances/{nsInstanceId}/update",
      UpdateSolNetworkPackage: "PATCH /sol/nsd/v1/ns_descriptors/{nsdInfoId}",
      ValidateSolFunctionPackageContent:
        "PUT /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content/validate",
      ValidateSolNetworkPackageContent:
        "PUT /sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content/validate",
    },
  },
  transcribe: {
    sdkId: "Transcribe",
    version: "2017-10-26",
    arnNamespace: "transcribe",
    cloudTrailEventSource: "transcribe.amazonaws.com",
    endpointPrefix: "transcribe",
    protocol: "awsJson1_1",
    targetPrefix: "Transcribe",
  },
  transcribestreaming: {
    sdkId: "Transcribe Streaming",
    version: "2017-10-26",
    arnNamespace: "transcribe",
    cloudTrailEventSource: "transcribestreaming.amazonaws.com",
    endpointPrefix: "transcribestreaming",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetMedicalScribeStream: "GET /medical-scribe-stream/{SessionId}",
      StartCallAnalyticsStreamTranscription: {
        http: "POST /call-analytics-stream-transcription",
        traits: {
          RequestId: "x-amzn-request-id",
          LanguageCode: "x-amzn-transcribe-language-code",
          MediaSampleRateHertz: "x-amzn-transcribe-sample-rate",
          MediaEncoding: "x-amzn-transcribe-media-encoding",
          VocabularyName: "x-amzn-transcribe-vocabulary-name",
          SessionId: "x-amzn-transcribe-session-id",
          CallAnalyticsTranscriptResultStream: "httpPayload",
          VocabularyFilterName: "x-amzn-transcribe-vocabulary-filter-name",
          VocabularyFilterMethod: "x-amzn-transcribe-vocabulary-filter-method",
          LanguageModelName: "x-amzn-transcribe-language-model-name",
          EnablePartialResultsStabilization:
            "x-amzn-transcribe-enable-partial-results-stabilization",
          PartialResultsStability:
            "x-amzn-transcribe-partial-results-stability",
          ContentIdentificationType:
            "x-amzn-transcribe-content-identification-type",
          ContentRedactionType: "x-amzn-transcribe-content-redaction-type",
          PiiEntityTypes: "x-amzn-transcribe-pii-entity-types",
        },
      },
      StartMedicalScribeStream: {
        http: "POST /medical-scribe-stream",
        traits: {
          SessionId: "x-amzn-transcribe-session-id",
          RequestId: "x-amzn-request-id",
          LanguageCode: "x-amzn-transcribe-language-code",
          MediaSampleRateHertz: "x-amzn-transcribe-sample-rate",
          MediaEncoding: "x-amzn-transcribe-media-encoding",
          ResultStream: "httpPayload",
        },
      },
      StartMedicalStreamTranscription: {
        http: "POST /medical-stream-transcription",
        traits: {
          RequestId: "x-amzn-request-id",
          LanguageCode: "x-amzn-transcribe-language-code",
          MediaSampleRateHertz: "x-amzn-transcribe-sample-rate",
          MediaEncoding: "x-amzn-transcribe-media-encoding",
          VocabularyName: "x-amzn-transcribe-vocabulary-name",
          Specialty: "x-amzn-transcribe-specialty",
          Type: "x-amzn-transcribe-type",
          ShowSpeakerLabel: "x-amzn-transcribe-show-speaker-label",
          SessionId: "x-amzn-transcribe-session-id",
          TranscriptResultStream: "httpPayload",
          EnableChannelIdentification:
            "x-amzn-transcribe-enable-channel-identification",
          NumberOfChannels: "x-amzn-transcribe-number-of-channels",
          ContentIdentificationType:
            "x-amzn-transcribe-content-identification-type",
        },
      },
      StartStreamTranscription: {
        http: "POST /stream-transcription",
        traits: {
          RequestId: "x-amzn-request-id",
          LanguageCode: "x-amzn-transcribe-language-code",
          MediaSampleRateHertz: "x-amzn-transcribe-sample-rate",
          MediaEncoding: "x-amzn-transcribe-media-encoding",
          VocabularyName: "x-amzn-transcribe-vocabulary-name",
          SessionId: "x-amzn-transcribe-session-id",
          TranscriptResultStream: "httpPayload",
          VocabularyFilterName: "x-amzn-transcribe-vocabulary-filter-name",
          VocabularyFilterMethod: "x-amzn-transcribe-vocabulary-filter-method",
          ShowSpeakerLabel: "x-amzn-transcribe-show-speaker-label",
          EnableChannelIdentification:
            "x-amzn-transcribe-enable-channel-identification",
          NumberOfChannels: "x-amzn-transcribe-number-of-channels",
          EnablePartialResultsStabilization:
            "x-amzn-transcribe-enable-partial-results-stabilization",
          PartialResultsStability:
            "x-amzn-transcribe-partial-results-stability",
          ContentIdentificationType:
            "x-amzn-transcribe-content-identification-type",
          ContentRedactionType: "x-amzn-transcribe-content-redaction-type",
          PiiEntityTypes: "x-amzn-transcribe-pii-entity-types",
          LanguageModelName: "x-amzn-transcribe-language-model-name",
          IdentifyLanguage: "x-amzn-transcribe-identify-language",
          LanguageOptions: "x-amzn-transcribe-language-options",
          PreferredLanguage: "x-amzn-transcribe-preferred-language",
          IdentifyMultipleLanguages:
            "x-amzn-transcribe-identify-multiple-languages",
          VocabularyNames: "x-amzn-transcribe-vocabulary-names",
          VocabularyFilterNames: "x-amzn-transcribe-vocabulary-filter-names",
        },
      },
    },
  },
  transfer: {
    sdkId: "Transfer",
    version: "2018-11-05",
    arnNamespace: "transfer",
    cloudTrailEventSource: "transfer.amazonaws.com",
    endpointPrefix: "transfer",
    protocol: "awsJson1_1",
    targetPrefix: "TransferService",
  },
  translate: {
    sdkId: "Translate",
    version: "2017-07-01",
    arnNamespace: "translate",
    cloudTrailEventSource: "translate.amazonaws.com",
    endpointPrefix: "translate",
    protocol: "awsJson1_1",
    targetPrefix: "AWSShineFrontendService_20170701",
  },
  trustedadvisor: {
    sdkId: "TrustedAdvisor",
    version: "2022-09-15",
    arnNamespace: "trustedadvisor",
    cloudTrailEventSource: "trustedadvisor.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchUpdateRecommendationResourceExclusion:
        "PUT /v1/batch-update-recommendation-resource-exclusion",
      GetOrganizationRecommendation:
        "GET /v1/organization-recommendations/{organizationRecommendationIdentifier}",
      GetRecommendation: "GET /v1/recommendations/{recommendationIdentifier}",
      ListChecks: "GET /v1/checks",
      ListOrganizationRecommendationAccounts:
        "GET /v1/organization-recommendations/{organizationRecommendationIdentifier}/accounts",
      ListOrganizationRecommendationResources:
        "GET /v1/organization-recommendations/{organizationRecommendationIdentifier}/resources",
      ListOrganizationRecommendations: "GET /v1/organization-recommendations",
      ListRecommendationResources:
        "GET /v1/recommendations/{recommendationIdentifier}/resources",
      ListRecommendations: "GET /v1/recommendations",
      UpdateOrganizationRecommendationLifecycle:
        "PUT /v1/organization-recommendations/{organizationRecommendationIdentifier}/lifecycle",
      UpdateRecommendationLifecycle:
        "PUT /v1/recommendations/{recommendationIdentifier}/lifecycle",
    },
  },
  verifiedpermissions: {
    sdkId: "VerifiedPermissions",
    version: "2021-12-01",
    arnNamespace: "verifiedpermissions",
    cloudTrailEventSource: "verifiedpermissions.amazonaws.com",
    endpointPrefix: "verifiedpermissions",
    protocol: "awsJson1_0",
    targetPrefix: "VerifiedPermissions",
  },
  voiceid: {
    sdkId: "Voice ID",
    version: "2021-09-27",
    arnNamespace: "voiceid",
    cloudTrailEventSource: "voiceid.amazonaws.com",
    endpointPrefix: "voiceid",
    protocol: "awsJson1_0",
    targetPrefix: "VoiceID",
  },
  vpclattice: {
    sdkId: "VPC Lattice",
    version: "2022-11-30",
    arnNamespace: "vpc-lattice",
    cloudTrailEventSource: "vpc-lattice.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchUpdateRule:
        "PATCH /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules",
      DeleteAuthPolicy: "DELETE /authpolicy/{resourceIdentifier}",
      DeleteResourcePolicy: "DELETE /resourcepolicy/{resourceArn}",
      GetAuthPolicy: "GET /authpolicy/{resourceIdentifier}",
      GetResourcePolicy: "GET /resourcepolicy/{resourceArn}",
      ListServiceNetworkVpcEndpointAssociations:
        "GET /servicenetworkvpcendpointassociations",
      ListTagsForResource: "GET /tags/{resourceArn}",
      PutAuthPolicy: "PUT /authpolicy/{resourceIdentifier}",
      PutResourcePolicy: "PUT /resourcepolicy/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateAccessLogSubscription: "POST /accesslogsubscriptions",
      CreateListener: "POST /services/{serviceIdentifier}/listeners",
      CreateResourceConfiguration: "POST /resourceconfigurations",
      CreateResourceGateway: "POST /resourcegateways",
      CreateRule:
        "POST /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules",
      CreateService: "POST /services",
      CreateServiceNetwork: "POST /servicenetworks",
      CreateServiceNetworkResourceAssociation:
        "POST /servicenetworkresourceassociations",
      CreateServiceNetworkServiceAssociation:
        "POST /servicenetworkserviceassociations",
      CreateServiceNetworkVpcAssociation: "POST /servicenetworkvpcassociations",
      CreateTargetGroup: "POST /targetgroups",
      DeleteAccessLogSubscription:
        "DELETE /accesslogsubscriptions/{accessLogSubscriptionIdentifier}",
      DeleteListener:
        "DELETE /services/{serviceIdentifier}/listeners/{listenerIdentifier}",
      DeleteResourceConfiguration:
        "DELETE /resourceconfigurations/{resourceConfigurationIdentifier}",
      DeleteResourceEndpointAssociation:
        "DELETE /resourceendpointassociations/{resourceEndpointAssociationIdentifier}",
      DeleteResourceGateway:
        "DELETE /resourcegateways/{resourceGatewayIdentifier}",
      DeleteRule:
        "DELETE /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}",
      DeleteService: "DELETE /services/{serviceIdentifier}",
      DeleteServiceNetwork:
        "DELETE /servicenetworks/{serviceNetworkIdentifier}",
      DeleteServiceNetworkResourceAssociation:
        "DELETE /servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}",
      DeleteServiceNetworkServiceAssociation:
        "DELETE /servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}",
      DeleteServiceNetworkVpcAssociation:
        "DELETE /servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}",
      DeleteTargetGroup: "DELETE /targetgroups/{targetGroupIdentifier}",
      DeregisterTargets:
        "POST /targetgroups/{targetGroupIdentifier}/deregistertargets",
      GetAccessLogSubscription:
        "GET /accesslogsubscriptions/{accessLogSubscriptionIdentifier}",
      GetListener:
        "GET /services/{serviceIdentifier}/listeners/{listenerIdentifier}",
      GetResourceConfiguration:
        "GET /resourceconfigurations/{resourceConfigurationIdentifier}",
      GetResourceGateway: "GET /resourcegateways/{resourceGatewayIdentifier}",
      GetRule:
        "GET /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}",
      GetService: "GET /services/{serviceIdentifier}",
      GetServiceNetwork: "GET /servicenetworks/{serviceNetworkIdentifier}",
      GetServiceNetworkResourceAssociation:
        "GET /servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}",
      GetServiceNetworkServiceAssociation:
        "GET /servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}",
      GetServiceNetworkVpcAssociation:
        "GET /servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}",
      GetTargetGroup: "GET /targetgroups/{targetGroupIdentifier}",
      ListAccessLogSubscriptions: "GET /accesslogsubscriptions",
      ListListeners: "GET /services/{serviceIdentifier}/listeners",
      ListResourceConfigurations: "GET /resourceconfigurations",
      ListResourceEndpointAssociations: "GET /resourceendpointassociations",
      ListResourceGateways: "GET /resourcegateways",
      ListRules:
        "GET /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules",
      ListServiceNetworkResourceAssociations:
        "GET /servicenetworkresourceassociations",
      ListServiceNetworkServiceAssociations:
        "GET /servicenetworkserviceassociations",
      ListServiceNetworkVpcAssociations: "GET /servicenetworkvpcassociations",
      ListServiceNetworks: "GET /servicenetworks",
      ListServices: "GET /services",
      ListTargetGroups: "GET /targetgroups",
      ListTargets: "POST /targetgroups/{targetGroupIdentifier}/listtargets",
      RegisterTargets:
        "POST /targetgroups/{targetGroupIdentifier}/registertargets",
      UpdateAccessLogSubscription:
        "PATCH /accesslogsubscriptions/{accessLogSubscriptionIdentifier}",
      UpdateListener:
        "PATCH /services/{serviceIdentifier}/listeners/{listenerIdentifier}",
      UpdateResourceConfiguration:
        "PATCH /resourceconfigurations/{resourceConfigurationIdentifier}",
      UpdateResourceGateway:
        "PATCH /resourcegateways/{resourceGatewayIdentifier}",
      UpdateRule:
        "PATCH /services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}",
      UpdateService: "PATCH /services/{serviceIdentifier}",
      UpdateServiceNetwork: "PATCH /servicenetworks/{serviceNetworkIdentifier}",
      UpdateServiceNetworkVpcAssociation:
        "PATCH /servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}",
      UpdateTargetGroup: "PATCH /targetgroups/{targetGroupIdentifier}",
    },
  },
  waf: {
    sdkId: "WAF",
    version: "2015-08-24",
    arnNamespace: "waf",
    cloudTrailEventSource: "waf.amazonaws.com",
    endpointPrefix: "waf",
    protocol: "awsJson1_1",
    targetPrefix: "AWSWAF_20150824",
  },
  wafregional: {
    sdkId: "WAF Regional",
    version: "2016-11-28",
    arnNamespace: "waf-regional",
    cloudTrailEventSource: "wafregional.amazonaws.com",
    endpointPrefix: "waf-regional",
    protocol: "awsJson1_1",
    targetPrefix: "AWSWAF_Regional_20161128",
  },
  wafv2: {
    sdkId: "WAFV2",
    version: "2019-07-29",
    arnNamespace: "wafv2",
    cloudTrailEventSource: "wafv2.amazonaws.com",
    endpointPrefix: "wafv2",
    protocol: "awsJson1_1",
    targetPrefix: "AWSWAF_20190729",
  },
  wellarchitected: {
    sdkId: "WellArchitected",
    version: "2020-03-31",
    arnNamespace: "wellarchitected",
    cloudTrailEventSource: "wellarchitected.amazonaws.com",
    endpointPrefix: "wellarchitected",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AssociateLenses: "PATCH /workloads/{WorkloadId}/associateLenses",
      AssociateProfiles: "PATCH /workloads/{WorkloadId}/associateProfiles",
      CreateLensShare: "POST /lenses/{LensAlias}/shares",
      CreateLensVersion: "POST /lenses/{LensAlias}/versions",
      CreateMilestone: "POST /workloads/{WorkloadId}/milestones",
      CreateProfile: "POST /profiles",
      CreateProfileShare: "POST /profiles/{ProfileArn}/shares",
      CreateReviewTemplate: "POST /reviewTemplates",
      CreateTemplateShare: "POST /templates/shares/{TemplateArn}",
      CreateWorkload: "POST /workloads",
      CreateWorkloadShare: "POST /workloads/{WorkloadId}/shares",
      DeleteLens: "DELETE /lenses/{LensAlias}",
      DeleteLensShare: "DELETE /lenses/{LensAlias}/shares/{ShareId}",
      DeleteProfile: "DELETE /profiles/{ProfileArn}",
      DeleteProfileShare: "DELETE /profiles/{ProfileArn}/shares/{ShareId}",
      DeleteReviewTemplate: "DELETE /reviewTemplates/{TemplateArn}",
      DeleteTemplateShare: "DELETE /templates/shares/{TemplateArn}/{ShareId}",
      DeleteWorkload: "DELETE /workloads/{WorkloadId}",
      DeleteWorkloadShare: "DELETE /workloads/{WorkloadId}/shares/{ShareId}",
      DisassociateLenses: "PATCH /workloads/{WorkloadId}/disassociateLenses",
      DisassociateProfiles:
        "PATCH /workloads/{WorkloadId}/disassociateProfiles",
      ExportLens: "GET /lenses/{LensAlias}/export",
      GetAnswer:
        "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}",
      GetConsolidatedReport: "GET /consolidatedReport",
      GetGlobalSettings: "GET /global-settings",
      GetLens: "GET /lenses/{LensAlias}",
      GetLensReview: "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}",
      GetLensReviewReport:
        "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/report",
      GetLensVersionDifference: "GET /lenses/{LensAlias}/versionDifference",
      GetMilestone: "GET /workloads/{WorkloadId}/milestones/{MilestoneNumber}",
      GetProfile: "GET /profiles/{ProfileArn}",
      GetProfileTemplate: "GET /profileTemplate",
      GetReviewTemplate: "GET /reviewTemplates/{TemplateArn}",
      GetReviewTemplateAnswer:
        "GET /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}",
      GetReviewTemplateLensReview:
        "GET /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}",
      GetWorkload: "GET /workloads/{WorkloadId}",
      ImportLens: "PUT /importLens",
      ListAnswers:
        "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/answers",
      ListCheckDetails: "POST /workloads/{WorkloadId}/checks",
      ListCheckSummaries: "POST /workloads/{WorkloadId}/checkSummaries",
      ListLenses: "GET /lenses",
      ListLensReviewImprovements:
        "GET /workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements",
      ListLensReviews: "GET /workloads/{WorkloadId}/lensReviews",
      ListLensShares: "GET /lenses/{LensAlias}/shares",
      ListMilestones: "POST /workloads/{WorkloadId}/milestonesSummaries",
      ListNotifications: "POST /notifications",
      ListProfileNotifications: "GET /profileNotifications",
      ListProfiles: "GET /profileSummaries",
      ListProfileShares: "GET /profiles/{ProfileArn}/shares",
      ListReviewTemplateAnswers:
        "GET /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers",
      ListReviewTemplates: "GET /reviewTemplates",
      ListShareInvitations: "GET /shareInvitations",
      ListTagsForResource: "GET /tags/{WorkloadArn}",
      ListTemplateShares: "GET /templates/shares/{TemplateArn}",
      ListWorkloads: "POST /workloadsSummaries",
      ListWorkloadShares: "GET /workloads/{WorkloadId}/shares",
      TagResource: "POST /tags/{WorkloadArn}",
      UntagResource: "DELETE /tags/{WorkloadArn}",
      UpdateAnswer:
        "PATCH /workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}",
      UpdateGlobalSettings: "PATCH /global-settings",
      UpdateIntegration: "POST /workloads/{WorkloadId}/updateIntegration",
      UpdateLensReview: "PATCH /workloads/{WorkloadId}/lensReviews/{LensAlias}",
      UpdateProfile: "PATCH /profiles/{ProfileArn}",
      UpdateReviewTemplate: "PATCH /reviewTemplates/{TemplateArn}",
      UpdateReviewTemplateAnswer:
        "PATCH /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}",
      UpdateReviewTemplateLensReview:
        "PATCH /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}",
      UpdateShareInvitation: "PATCH /shareInvitations/{ShareInvitationId}",
      UpdateWorkload: "PATCH /workloads/{WorkloadId}",
      UpdateWorkloadShare: "PATCH /workloads/{WorkloadId}/shares/{ShareId}",
      UpgradeLensReview:
        "PUT /workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade",
      UpgradeProfileVersion:
        "PUT /workloads/{WorkloadId}/profiles/{ProfileArn}/upgrade",
      UpgradeReviewTemplateLensReview:
        "PUT /reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/upgrade",
    },
  },
  wisdom: {
    sdkId: "Wisdom",
    version: "2020-10-19",
    arnNamespace: "wisdom",
    cloudTrailEventSource: "wisdom.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      CreateAssistant: "POST /assistants",
      CreateAssistantAssociation: "POST /assistants/{assistantId}/associations",
      CreateContent: "POST /knowledgeBases/{knowledgeBaseId}/contents",
      CreateKnowledgeBase: "POST /knowledgeBases",
      CreateQuickResponse:
        "POST /knowledgeBases/{knowledgeBaseId}/quickResponses",
      CreateSession: "POST /assistants/{assistantId}/sessions",
      DeleteAssistant: "DELETE /assistants/{assistantId}",
      DeleteAssistantAssociation:
        "DELETE /assistants/{assistantId}/associations/{assistantAssociationId}",
      DeleteContent:
        "DELETE /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
      DeleteImportJob:
        "DELETE /knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}",
      DeleteKnowledgeBase: "DELETE /knowledgeBases/{knowledgeBaseId}",
      DeleteQuickResponse:
        "DELETE /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
      GetAssistant: "GET /assistants/{assistantId}",
      GetAssistantAssociation:
        "GET /assistants/{assistantId}/associations/{assistantAssociationId}",
      GetContent: "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
      GetContentSummary:
        "GET /knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary",
      GetImportJob:
        "GET /knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}",
      GetKnowledgeBase: "GET /knowledgeBases/{knowledgeBaseId}",
      GetQuickResponse:
        "GET /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
      GetRecommendations:
        "GET /assistants/{assistantId}/sessions/{sessionId}/recommendations",
      GetSession: "GET /assistants/{assistantId}/sessions/{sessionId}",
      ListAssistantAssociations: "GET /assistants/{assistantId}/associations",
      ListAssistants: "GET /assistants",
      ListContents: "GET /knowledgeBases/{knowledgeBaseId}/contents",
      ListImportJobs: "GET /knowledgeBases/{knowledgeBaseId}/importJobs",
      ListKnowledgeBases: "GET /knowledgeBases",
      ListQuickResponses:
        "GET /knowledgeBases/{knowledgeBaseId}/quickResponses",
      NotifyRecommendationsReceived:
        "POST /assistants/{assistantId}/sessions/{sessionId}/recommendations/notify",
      QueryAssistant: "POST /assistants/{assistantId}/query",
      RemoveKnowledgeBaseTemplateUri:
        "DELETE /knowledgeBases/{knowledgeBaseId}/templateUri",
      SearchContent: "POST /knowledgeBases/{knowledgeBaseId}/search",
      SearchQuickResponses:
        "POST /knowledgeBases/{knowledgeBaseId}/search/quickResponses",
      SearchSessions: "POST /assistants/{assistantId}/searchSessions",
      StartContentUpload: "POST /knowledgeBases/{knowledgeBaseId}/upload",
      StartImportJob: "POST /knowledgeBases/{knowledgeBaseId}/importJobs",
      UpdateContent:
        "POST /knowledgeBases/{knowledgeBaseId}/contents/{contentId}",
      UpdateKnowledgeBaseTemplateUri:
        "POST /knowledgeBases/{knowledgeBaseId}/templateUri",
      UpdateQuickResponse:
        "POST /knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}",
    },
  },
  workdocs: {
    sdkId: "WorkDocs",
    version: "2016-05-01",
    arnNamespace: "workdocs",
    cloudTrailEventSource: "workdocs.amazonaws.com",
    endpointPrefix: "workdocs",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      AbortDocumentVersionUpload:
        "DELETE /api/v1/documents/{DocumentId}/versions/{VersionId}",
      ActivateUser: "POST /api/v1/users/{UserId}/activation",
      AddResourcePermissions: "POST /api/v1/resources/{ResourceId}/permissions",
      CreateComment:
        "POST /api/v1/documents/{DocumentId}/versions/{VersionId}/comment",
      CreateCustomMetadata: "PUT /api/v1/resources/{ResourceId}/customMetadata",
      CreateFolder: "POST /api/v1/folders",
      CreateLabels: "PUT /api/v1/resources/{ResourceId}/labels",
      CreateNotificationSubscription:
        "POST /api/v1/organizations/{OrganizationId}/subscriptions",
      CreateUser: "POST /api/v1/users",
      DeactivateUser: "DELETE /api/v1/users/{UserId}/activation",
      DeleteComment:
        "DELETE /api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}",
      DeleteCustomMetadata:
        "DELETE /api/v1/resources/{ResourceId}/customMetadata",
      DeleteDocument: "DELETE /api/v1/documents/{DocumentId}",
      DeleteDocumentVersion:
        "DELETE /api/v1/documentVersions/{DocumentId}/versions/{VersionId}",
      DeleteFolder: "DELETE /api/v1/folders/{FolderId}",
      DeleteFolderContents: "DELETE /api/v1/folders/{FolderId}/contents",
      DeleteLabels: "DELETE /api/v1/resources/{ResourceId}/labels",
      DeleteNotificationSubscription:
        "DELETE /api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}",
      DeleteUser: "DELETE /api/v1/users/{UserId}",
      DescribeActivities: "GET /api/v1/activities",
      DescribeComments:
        "GET /api/v1/documents/{DocumentId}/versions/{VersionId}/comments",
      DescribeDocumentVersions: "GET /api/v1/documents/{DocumentId}/versions",
      DescribeFolderContents: "GET /api/v1/folders/{FolderId}/contents",
      DescribeGroups: "GET /api/v1/groups",
      DescribeNotificationSubscriptions:
        "GET /api/v1/organizations/{OrganizationId}/subscriptions",
      DescribeResourcePermissions:
        "GET /api/v1/resources/{ResourceId}/permissions",
      DescribeRootFolders: "GET /api/v1/me/root",
      DescribeUsers: "GET /api/v1/users",
      GetCurrentUser: "GET /api/v1/me",
      GetDocument: "GET /api/v1/documents/{DocumentId}",
      GetDocumentPath: "GET /api/v1/documents/{DocumentId}/path",
      GetDocumentVersion:
        "GET /api/v1/documents/{DocumentId}/versions/{VersionId}",
      GetFolder: "GET /api/v1/folders/{FolderId}",
      GetFolderPath: "GET /api/v1/folders/{FolderId}/path",
      GetResources: "GET /api/v1/resources",
      InitiateDocumentVersionUpload: "POST /api/v1/documents",
      RemoveAllResourcePermissions:
        "DELETE /api/v1/resources/{ResourceId}/permissions",
      RemoveResourcePermission:
        "DELETE /api/v1/resources/{ResourceId}/permissions/{PrincipalId}",
      RestoreDocumentVersions:
        "POST /api/v1/documentVersions/restore/{DocumentId}",
      SearchResources: "POST /api/v1/search",
      UpdateDocument: "PATCH /api/v1/documents/{DocumentId}",
      UpdateDocumentVersion:
        "PATCH /api/v1/documents/{DocumentId}/versions/{VersionId}",
      UpdateFolder: "PATCH /api/v1/folders/{FolderId}",
      UpdateUser: "PATCH /api/v1/users/{UserId}",
    },
  },
  workmail: {
    sdkId: "WorkMail",
    version: "2017-10-01",
    arnNamespace: "workmail",
    cloudTrailEventSource: "workmail.amazonaws.com",
    endpointPrefix: "workmail",
    protocol: "awsJson1_1",
    targetPrefix: "WorkMailService",
  },
  workmailmessageflow: {
    sdkId: "WorkMailMessageFlow",
    version: "2019-05-01",
    arnNamespace: "workmailmessageflow",
    cloudTrailEventSource: "workmailmessageflow.amazonaws.com",
    endpointPrefix: "workmailmessageflow",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      GetRawMessageContent: {
        http: "GET /messages/{messageId}",
        traits: {
          messageContent: "httpPayload",
        },
      },
      PutRawMessageContent: "POST /messages/{messageId}",
    },
  },
  workspaces: {
    sdkId: "WorkSpaces",
    version: "2015-04-08",
    arnNamespace: "workspaces",
    cloudTrailEventSource: "workspaces.amazonaws.com",
    endpointPrefix: "workspaces",
    protocol: "awsJson1_1",
    targetPrefix: "WorkspacesService",
  },
  workspacesinstances: {
    sdkId: "Workspaces Instances",
    version: "2022-07-26",
    arnNamespace: "workspaces-instances",
    cloudTrailEventSource: "workspaces-instances.amazonaws.com",
    endpointPrefix: "",
    protocol: "awsJson1_0",
    targetPrefix: "EUCMIFrontendAPIService",
  },
  workspacesthinclient: {
    sdkId: "WorkSpaces Thin Client",
    version: "2023-08-22",
    arnNamespace: "thinclient",
    cloudTrailEventSource: "thinclient.amazonaws.com",
    endpointPrefix: "",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      CreateEnvironment: "POST /environments",
      DeleteDevice: "DELETE /devices/{id}",
      DeleteEnvironment: "DELETE /environments/{id}",
      DeregisterDevice: "POST /deregister-device/{id}",
      GetDevice: "GET /devices/{id}",
      GetEnvironment: "GET /environments/{id}",
      GetSoftwareSet: "GET /softwaresets/{id}",
      ListDevices: "GET /devices",
      ListEnvironments: "GET /environments",
      ListSoftwareSets: "GET /softwaresets",
      ListTagsForResource: "GET /tags/{resourceArn}",
      TagResource: "POST /tags/{resourceArn}",
      UntagResource: "DELETE /tags/{resourceArn}",
      UpdateDevice: "PATCH /devices/{id}",
      UpdateEnvironment: "PATCH /environments/{id}",
      UpdateSoftwareSet: "PATCH /softwaresets/{id}",
    },
  },
  workspacesweb: {
    sdkId: "WorkSpaces Web",
    version: "2020-07-08",
    arnNamespace: "workspaces-web",
    cloudTrailEventSource: "workspaces-web.amazonaws.com",
    endpointPrefix: "workspaces-web",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      ExpireSession: "DELETE /portals/{portalId}/sessions/{sessionId}",
      GetSession: "GET /portals/{portalId}/sessions/{sessionId}",
      ListSessions: "GET /portals/{portalId}/sessions",
      ListTagsForResource: "GET /tags/{resourceArn+}",
      TagResource: "POST /tags/{resourceArn+}",
      UntagResource: "DELETE /tags/{resourceArn+}",
      AssociateBrowserSettings: "PUT /portals/{portalArn+}/browserSettings",
      AssociateDataProtectionSettings:
        "PUT /portals/{portalArn+}/dataProtectionSettings",
      AssociateIpAccessSettings: "PUT /portals/{portalArn+}/ipAccessSettings",
      AssociateNetworkSettings: "PUT /portals/{portalArn+}/networkSettings",
      AssociateSessionLogger: "PUT /portals/{portalArn+}/sessionLogger",
      AssociateTrustStore: "PUT /portals/{portalArn+}/trustStores",
      AssociateUserAccessLoggingSettings:
        "PUT /portals/{portalArn+}/userAccessLoggingSettings",
      AssociateUserSettings: "PUT /portals/{portalArn+}/userSettings",
      CreateBrowserSettings: "POST /browserSettings",
      CreateDataProtectionSettings: "POST /dataProtectionSettings",
      CreateIdentityProvider: "POST /identityProviders",
      CreateIpAccessSettings: "POST /ipAccessSettings",
      CreateNetworkSettings: "POST /networkSettings",
      CreatePortal: "POST /portals",
      CreateSessionLogger: "POST /sessionLoggers",
      CreateTrustStore: "POST /trustStores",
      CreateUserAccessLoggingSettings: "POST /userAccessLoggingSettings",
      CreateUserSettings: "POST /userSettings",
      DeleteBrowserSettings: "DELETE /browserSettings/{browserSettingsArn+}",
      DeleteDataProtectionSettings:
        "DELETE /dataProtectionSettings/{dataProtectionSettingsArn+}",
      DeleteIdentityProvider:
        "DELETE /identityProviders/{identityProviderArn+}",
      DeleteIpAccessSettings: "DELETE /ipAccessSettings/{ipAccessSettingsArn+}",
      DeleteNetworkSettings: "DELETE /networkSettings/{networkSettingsArn+}",
      DeletePortal: "DELETE /portals/{portalArn+}",
      DeleteSessionLogger: "DELETE /sessionLoggers/{sessionLoggerArn+}",
      DeleteTrustStore: "DELETE /trustStores/{trustStoreArn+}",
      DeleteUserAccessLoggingSettings:
        "DELETE /userAccessLoggingSettings/{userAccessLoggingSettingsArn+}",
      DeleteUserSettings: "DELETE /userSettings/{userSettingsArn+}",
      DisassociateBrowserSettings:
        "DELETE /portals/{portalArn+}/browserSettings",
      DisassociateDataProtectionSettings:
        "DELETE /portals/{portalArn+}/dataProtectionSettings",
      DisassociateIpAccessSettings:
        "DELETE /portals/{portalArn+}/ipAccessSettings",
      DisassociateNetworkSettings:
        "DELETE /portals/{portalArn+}/networkSettings",
      DisassociateSessionLogger: "DELETE /portals/{portalArn+}/sessionLogger",
      DisassociateTrustStore: "DELETE /portals/{portalArn+}/trustStores",
      DisassociateUserAccessLoggingSettings:
        "DELETE /portals/{portalArn+}/userAccessLoggingSettings",
      DisassociateUserSettings: "DELETE /portals/{portalArn+}/userSettings",
      GetBrowserSettings: "GET /browserSettings/{browserSettingsArn+}",
      GetDataProtectionSettings:
        "GET /dataProtectionSettings/{dataProtectionSettingsArn+}",
      GetIdentityProvider: "GET /identityProviders/{identityProviderArn+}",
      GetIpAccessSettings: "GET /ipAccessSettings/{ipAccessSettingsArn+}",
      GetNetworkSettings: "GET /networkSettings/{networkSettingsArn+}",
      GetPortal: "GET /portals/{portalArn+}",
      GetPortalServiceProviderMetadata: "GET /portalIdp/{portalArn+}",
      GetSessionLogger: "GET /sessionLoggers/{sessionLoggerArn+}",
      GetTrustStore: "GET /trustStores/{trustStoreArn+}",
      GetTrustStoreCertificate: "GET /trustStores/{trustStoreArn+}/certificate",
      GetUserAccessLoggingSettings:
        "GET /userAccessLoggingSettings/{userAccessLoggingSettingsArn+}",
      GetUserSettings: "GET /userSettings/{userSettingsArn+}",
      ListBrowserSettings: "GET /browserSettings",
      ListDataProtectionSettings: "GET /dataProtectionSettings",
      ListIdentityProviders: "GET /portals/{portalArn+}/identityProviders",
      ListIpAccessSettings: "GET /ipAccessSettings",
      ListNetworkSettings: "GET /networkSettings",
      ListPortals: "GET /portals",
      ListSessionLoggers: "GET /sessionLoggers",
      ListTrustStoreCertificates:
        "GET /trustStores/{trustStoreArn+}/certificates",
      ListTrustStores: "GET /trustStores",
      ListUserAccessLoggingSettings: "GET /userAccessLoggingSettings",
      ListUserSettings: "GET /userSettings",
      UpdateBrowserSettings: "PATCH /browserSettings/{browserSettingsArn+}",
      UpdateDataProtectionSettings:
        "PATCH /dataProtectionSettings/{dataProtectionSettingsArn+}",
      UpdateIdentityProvider: "PATCH /identityProviders/{identityProviderArn+}",
      UpdateIpAccessSettings: "PATCH /ipAccessSettings/{ipAccessSettingsArn+}",
      UpdateNetworkSettings: "PATCH /networkSettings/{networkSettingsArn+}",
      UpdatePortal: "PUT /portals/{portalArn+}",
      UpdateSessionLogger: "POST /sessionLoggers/{sessionLoggerArn+}",
      UpdateTrustStore: "PATCH /trustStores/{trustStoreArn+}",
      UpdateUserAccessLoggingSettings:
        "PATCH /userAccessLoggingSettings/{userAccessLoggingSettingsArn+}",
      UpdateUserSettings: "PATCH /userSettings/{userSettingsArn+}",
    },
  },
  xray: {
    sdkId: "XRay",
    version: "2016-04-12",
    arnNamespace: "xray",
    cloudTrailEventSource: "xray.amazonaws.com",
    endpointPrefix: "xray",
    protocol: "restJson1",
    targetPrefix: "",
    operations: {
      BatchGetTraces: "POST /Traces",
      CancelTraceRetrieval: "POST /CancelTraceRetrieval",
      CreateGroup: "POST /CreateGroup",
      CreateSamplingRule: "POST /CreateSamplingRule",
      DeleteGroup: "POST /DeleteGroup",
      DeleteResourcePolicy: "POST /DeleteResourcePolicy",
      DeleteSamplingRule: "POST /DeleteSamplingRule",
      GetEncryptionConfig: "POST /EncryptionConfig",
      GetGroup: "POST /GetGroup",
      GetGroups: "POST /Groups",
      GetIndexingRules: "POST /GetIndexingRules",
      GetInsight: "POST /Insight",
      GetInsightEvents: "POST /InsightEvents",
      GetInsightImpactGraph: "POST /InsightImpactGraph",
      GetInsightSummaries: "POST /InsightSummaries",
      GetRetrievedTracesGraph: "POST /GetRetrievedTracesGraph",
      GetSamplingRules: "POST /GetSamplingRules",
      GetSamplingStatisticSummaries: "POST /SamplingStatisticSummaries",
      GetSamplingTargets: "POST /SamplingTargets",
      GetServiceGraph: "POST /ServiceGraph",
      GetTimeSeriesServiceStatistics: "POST /TimeSeriesServiceStatistics",
      GetTraceGraph: "POST /TraceGraph",
      GetTraceSegmentDestination: "POST /GetTraceSegmentDestination",
      GetTraceSummaries: "POST /TraceSummaries",
      ListResourcePolicies: "POST /ListResourcePolicies",
      ListRetrievedTraces: "POST /ListRetrievedTraces",
      ListTagsForResource: "POST /ListTagsForResource",
      PutEncryptionConfig: "POST /PutEncryptionConfig",
      PutResourcePolicy: "POST /PutResourcePolicy",
      PutTelemetryRecords: "POST /TelemetryRecords",
      PutTraceSegments: "POST /TraceSegments",
      StartTraceRetrieval: "POST /StartTraceRetrieval",
      TagResource: "POST /TagResource",
      UntagResource: "POST /UntagResource",
      UpdateGroup: "POST /UpdateGroup",
      UpdateIndexingRule: "POST /UpdateIndexingRule",
      UpdateSamplingRule: "POST /UpdateSamplingRule",
      UpdateTraceSegmentDestination: "POST /UpdateTraceSegmentDestination",
    },
  },
} as const;
