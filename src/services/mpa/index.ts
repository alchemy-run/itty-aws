import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MPA as _MPAClient } from "./types.ts";

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
  sdkId: "MPA",
  version: "2022-07-26",
  protocol: "restJson1",
  sigV4ServiceName: "mpa",
  operations: {
    GetPolicyVersion: "GET /policy-versions/{PolicyVersionArn}",
    GetResourcePolicy: "POST /GetResourcePolicy",
    ListPolicies: "POST /policies/?List",
    ListPolicyVersions: "POST /policies/{PolicyArn}/?List",
    ListResourcePolicies: "POST /resource-policies/{ResourceArn}/?List",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "PUT /tags/{ResourceArn}",
    UntagResource: "POST /tags/{ResourceArn}",
    CancelSession: "PUT /sessions/{SessionArn}",
    CreateApprovalTeam: "POST /approval-teams",
    CreateIdentitySource: "POST /identity-sources",
    DeleteIdentitySource: "DELETE /identity-sources/{IdentitySourceArn}",
    DeleteInactiveApprovalTeamVersion:
      "DELETE /approval-teams/{Arn}/{VersionId}",
    GetApprovalTeam: "GET /approval-teams/{Arn}",
    GetIdentitySource: "GET /identity-sources/{IdentitySourceArn}",
    GetSession: "GET /sessions/{SessionArn}",
    ListApprovalTeams: "POST /approval-teams/?List",
    ListIdentitySources: "POST /identity-sources/?List",
    ListSessions: "POST /approval-teams/{ApprovalTeamArn}/sessions/?List",
    StartActiveApprovalTeamDeletion: "POST /approval-teams/{Arn}?Delete",
    UpdateApprovalTeam: "PATCH /approval-teams/{Arn}",
  },
  retryableErrors: {
    InternalServerException: {},
  },
} as const satisfies ServiceMetadata;

export type _MPA = _MPAClient;
export interface MPA extends _MPA {}
export const MPA = class extends AWSServiceClient {
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
} as unknown as typeof _MPAClient;
