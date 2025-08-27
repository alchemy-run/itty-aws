import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Panorama as _Panorama } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Panorama",
  version: "2019-07-24",
  protocol: "restJson1",
  sigV4ServiceName: "panorama",
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
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Panorama = class extends AWSServiceClient {
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
} as unknown as typeof _Panorama;
