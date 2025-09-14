import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Lambda as _LambdaClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Lambda",
  version: "2015-03-31",
  protocol: "restJson1",
  sigV4ServiceName: "lambda",
  endpointPrefix: "lambda",
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
    DeleteEventSourceMapping: "DELETE /2015-03-31/event-source-mappings/{UUID}",
    DeleteFunction: "DELETE /2015-03-31/functions/{FunctionName}",
    DeleteFunctionCodeSigningConfig:
      "DELETE /2020-06-30/functions/{FunctionName}/code-signing-config",
    DeleteFunctionConcurrency:
      "DELETE /2017-10-31/functions/{FunctionName}/concurrency",
    DeleteFunctionEventInvokeConfig:
      "DELETE /2019-09-25/functions/{FunctionName}/event-invoke-config",
    DeleteFunctionUrlConfig: "DELETE /2021-10-31/functions/{FunctionName}/url",
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
    ListVersionsByFunction: "GET /2015-03-31/functions/{FunctionName}/versions",
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
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export type Lambda = typeof Lambda;
export const Lambda = class extends AWSServiceClient {
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
} as unknown as typeof _LambdaClient;
