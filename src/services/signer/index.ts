import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { signer as _signer } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "signer",
  version: "2017-08-25",
  protocol: "restJson1",
  sigV4ServiceName: "signer",
  endpointPrefix: "signer",
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
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const signer = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _signer;
