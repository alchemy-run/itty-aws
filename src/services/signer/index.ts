import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { signer as _signerClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "signer",
  version: "2017-08-25",
  protocol: "restJson1",
  sigV4ServiceName: "signer",
  endpointPrefix: "signer",
  operations: {
    "AddProfilePermission": "POST /signing-profiles/{profileName}/permissions",
    "CancelSigningProfile": "DELETE /signing-profiles/{profileName}",
    "DescribeSigningJob": "GET /signing-jobs/{jobId}",
    "GetRevocationStatus": "GET /revocations",
    "GetSigningPlatform": "GET /signing-platforms/{platformId}",
    "GetSigningProfile": "GET /signing-profiles/{profileName}",
    "ListProfilePermissions": "GET /signing-profiles/{profileName}/permissions",
    "ListSigningJobs": "GET /signing-jobs",
    "ListSigningPlatforms": "GET /signing-platforms",
    "ListSigningProfiles": "GET /signing-profiles",
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "PutSigningProfile": "PUT /signing-profiles/{profileName}",
    "RemoveProfilePermission": "DELETE /signing-profiles/{profileName}/permissions/{statementId}",
    "RevokeSignature": "PUT /signing-jobs/{jobId}/revoke",
    "RevokeSigningProfile": "PUT /signing-profiles/{profileName}/revoke",
    "SignPayload": "POST /signing-jobs/with-payload",
    "StartSigningJob": "POST /signing-jobs",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
  },
} as const satisfies ServiceMetadata;

export type _signer = _signerClient;
export interface signer extends _signer {}
export const signer = class extends AWSServiceClient {
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
} as unknown as typeof _signerClient;
