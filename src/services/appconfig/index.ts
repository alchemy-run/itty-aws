import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AppConfig as _AppConfigClient } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "AppConfig",
  version: "2019-10-09",
  protocol: "restJson1",
  sigV4ServiceName: "appconfig",
  endpointPrefix: "appconfig",
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
} as const satisfies ServiceMetadata;

export type _AppConfig = _AppConfigClient;
export interface AppConfig extends _AppConfig {}
export const AppConfig = class extends AWSServiceClient {
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
} as unknown as typeof _AppConfigClient;
