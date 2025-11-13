import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ManagedBlockchain as _ManagedBlockchainClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "ManagedBlockchain",
  version: "2018-09-24",
  protocol: "restJson1",
  sigV4ServiceName: "managedblockchain",
  endpointPrefix: "managedblockchain",
  operations: {
    "CreateAccessor": "POST /accessors",
    "CreateMember": "POST /networks/{NetworkId}/members",
    "CreateNetwork": "POST /networks",
    "CreateNode": "POST /networks/{NetworkId}/nodes",
    "CreateProposal": "POST /networks/{NetworkId}/proposals",
    "DeleteAccessor": "DELETE /accessors/{AccessorId}",
    "DeleteMember": "DELETE /networks/{NetworkId}/members/{MemberId}",
    "DeleteNode": "DELETE /networks/{NetworkId}/nodes/{NodeId}",
    "GetAccessor": "GET /accessors/{AccessorId}",
    "GetMember": "GET /networks/{NetworkId}/members/{MemberId}",
    "GetNetwork": "GET /networks/{NetworkId}",
    "GetNode": "GET /networks/{NetworkId}/nodes/{NodeId}",
    "GetProposal": "GET /networks/{NetworkId}/proposals/{ProposalId}",
    "ListAccessors": "GET /accessors",
    "ListInvitations": "GET /invitations",
    "ListMembers": "GET /networks/{NetworkId}/members",
    "ListNetworks": "GET /networks",
    "ListNodes": "GET /networks/{NetworkId}/nodes",
    "ListProposals": "GET /networks/{NetworkId}/proposals",
    "ListProposalVotes": "GET /networks/{NetworkId}/proposals/{ProposalId}/votes",
    "ListTagsForResource": "GET /tags/{ResourceArn}",
    "RejectInvitation": "DELETE /invitations/{InvitationId}",
    "TagResource": "POST /tags/{ResourceArn}",
    "UntagResource": "DELETE /tags/{ResourceArn}",
    "UpdateMember": "PATCH /networks/{NetworkId}/members/{MemberId}",
    "UpdateNode": "PATCH /networks/{NetworkId}/nodes/{NodeId}",
    "VoteOnProposal": "POST /networks/{NetworkId}/proposals/{ProposalId}/votes",
  },
} as const satisfies ServiceMetadata;

export type _ManagedBlockchain = _ManagedBlockchainClient;
export interface ManagedBlockchain extends _ManagedBlockchain {}
export const ManagedBlockchain = class extends AWSServiceClient {
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
} as unknown as typeof _ManagedBlockchainClient;
