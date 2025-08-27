import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { DirectoryServiceData as _DirectoryServiceData } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Directory Service Data",
  version: "2023-05-31",
  protocol: "restJson1",
  sigV4ServiceName: "ds-data",
  endpointPrefix: "ds-data",
  operations: {
    AddGroupMember: "POST /GroupMemberships/AddGroupMember",
    CreateGroup: "POST /Groups/CreateGroup",
    CreateUser: "POST /Users/CreateUser",
    DeleteGroup: "POST /Groups/DeleteGroup",
    DeleteUser: "POST /Users/DeleteUser",
    DescribeGroup: "POST /Groups/DescribeGroup",
    DescribeUser: "POST /Users/DescribeUser",
    DisableUser: "POST /Users/DisableUser",
    ListGroupMembers: "POST /GroupMemberships/ListGroupMembers",
    ListGroups: "POST /Groups/ListGroups",
    ListGroupsForMember: "POST /GroupMemberships/ListGroupsForMember",
    ListUsers: "POST /Users/ListUsers",
    RemoveGroupMember: "POST /GroupMemberships/RemoveGroupMember",
    SearchGroups: "POST /Groups/SearchGroups",
    SearchUsers: "POST /Users/SearchUsers",
    UpdateGroup: "POST /Groups/UpdateGroup",
    UpdateUser: "POST /Users/UpdateUser",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const DirectoryServiceData = class extends AWSServiceClient {
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
} as unknown as typeof _DirectoryServiceData;
