import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SecurityIR as _SecurityIRClient } from "./types.ts";

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
  sdkId: "Security IR",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "security-ir",
  operations: {
    ListTagsForResource: "GET /v1/tags/{resourceArn}",
    TagResource: "POST /v1/tags/{resourceArn}",
    UntagResource: "DELETE /v1/tags/{resourceArn}",
    BatchGetMemberAccountDetails:
      "POST /v1/membership/{membershipId}/batch-member-details",
    CancelMembership: "PUT /v1/membership/{membershipId}",
    CloseCase: "POST /v1/cases/{caseId}/close-case",
    CreateCase: "POST /v1/create-case",
    CreateCaseComment: "POST /v1/cases/{caseId}/create-comment",
    CreateMembership: "POST /v1/membership",
    GetCase: "GET /v1/cases/{caseId}/get-case",
    GetCaseAttachmentDownloadUrl:
      "GET /v1/cases/{caseId}/get-presigned-url/{attachmentId}",
    GetCaseAttachmentUploadUrl: "POST /v1/cases/{caseId}/get-presigned-url",
    GetMembership: "GET /v1/membership/{membershipId}",
    ListCaseEdits: "POST /v1/cases/{caseId}/list-case-edits",
    ListCases: "POST /v1/list-cases",
    ListComments: "POST /v1/cases/{caseId}/list-comments",
    ListMemberships: "POST /v1/memberships",
    UpdateCase: "POST /v1/cases/{caseId}/update-case",
    UpdateCaseComment: "PUT /v1/cases/{caseId}/update-case-comment/{commentId}",
    UpdateCaseStatus: "POST /v1/cases/{caseId}/update-case-status",
    UpdateMembership: "PUT /v1/membership/{membershipId}/update-membership",
    UpdateResolverType: "POST /v1/cases/{caseId}/update-resolver-type",
  },
} as const satisfies ServiceMetadata;

export type _SecurityIR = _SecurityIRClient;
export interface SecurityIR extends _SecurityIR {}
export const SecurityIR = class extends AWSServiceClient {
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
} as unknown as typeof _SecurityIRClient;
