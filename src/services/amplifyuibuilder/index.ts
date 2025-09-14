import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AmplifyUIBuilder as _AmplifyUIBuilderClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "AmplifyUIBuilder",
  version: "2021-08-11",
  protocol: "restJson1",
  sigV4ServiceName: "amplifyuibuilder",
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
    DeleteForm: "DELETE /app/{appId}/environment/{environmentName}/forms/{id}",
    DeleteTheme:
      "DELETE /app/{appId}/environment/{environmentName}/themes/{id}",
    ExportComponents:
      "GET /export/app/{appId}/environment/{environmentName}/components",
    ExportForms: "GET /export/app/{appId}/environment/{environmentName}/forms",
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
    ListComponents: "GET /app/{appId}/environment/{environmentName}/components",
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
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const AmplifyUIBuilder = class extends AWSServiceClient {
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
} as unknown as typeof _AmplifyUIBuilderClient;
