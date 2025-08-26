import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { codeartifact as _codeartifact } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "codeartifact",
  version: "2018-09-22",
  protocol: "restJson1",
  sigV4ServiceName: "codeartifact",
  endpointPrefix: "codeartifact",
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
    DisassociateExternalConnection: "DELETE /v1/repository/external-connection",
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
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const codeartifact = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _codeartifact;
