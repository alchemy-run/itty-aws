import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { GreengrassV2 as _GreengrassV2Client } from "./types.ts";

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
  sdkId: "GreengrassV2",
  version: "2020-11-30",
  protocol: "restJson1",
  sigV4ServiceName: "greengrass",
  endpointPrefix: "greengrass",
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
    DeleteCoreDevice: "DELETE /greengrass/v2/coreDevices/{coreDeviceThingName}",
    DeleteDeployment: "DELETE /greengrass/v2/deployments/{deploymentId}",
    DescribeComponent: "GET /greengrass/v2/components/{arn}/metadata",
    DisassociateServiceRoleFromAccount: "DELETE /greengrass/servicerole",
    GetComponent: "GET /greengrass/v2/components/{arn}",
    GetComponentVersionArtifact:
      "GET /greengrass/v2/components/{arn}/artifacts/{artifactName+}",
    GetConnectivityInfo: "GET /greengrass/things/{thingName}/connectivityInfo",
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
} as const satisfies ServiceMetadata;

export type _GreengrassV2 = _GreengrassV2Client;
export interface GreengrassV2 extends _GreengrassV2 {}
export const GreengrassV2 = class extends AWSServiceClient {
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
} as unknown as typeof _GreengrassV2Client;
