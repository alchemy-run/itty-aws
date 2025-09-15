import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EFS as _EFSClient } from "./types.ts";

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
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "EFS",
  version: "2015-02-01",
  protocol: "restJson1",
  sigV4ServiceName: "elasticfilesystem",
  endpointPrefix: "elasticfilesystem",
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
} as const satisfies ServiceMetadata;

export type _EFS = _EFSClient;
export interface EFS extends _EFS {}
export const EFS = class extends AWSServiceClient {
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
} as unknown as typeof _EFSClient;
