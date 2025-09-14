import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Glacier as _GlacierClient } from "./types.ts";

export * from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Glacier",
  version: "2012-06-01",
  protocol: "restJson1",
  sigV4ServiceName: "glacier",
  endpointPrefix: "glacier",
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
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const Glacier = class extends AWSServiceClient {
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
} as unknown as typeof _GlacierClient;
