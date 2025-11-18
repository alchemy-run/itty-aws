import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { PcaConnectorAd as _PcaConnectorAdClient } from "./types.ts";

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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Pca Connector Ad",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "pca-connector-ad",
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
  retryableErrors: {
    InternalServerException: {},
    ThrottlingException: {},
  },
} as const satisfies ServiceMetadata;

export type _PcaConnectorAd = _PcaConnectorAdClient;
export interface PcaConnectorAd extends _PcaConnectorAd {}
export const PcaConnectorAd = class extends AWSServiceClient {
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
} as unknown as typeof _PcaConnectorAdClient;
