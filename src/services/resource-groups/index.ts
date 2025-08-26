import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { ResourceGroups as _ResourceGroups } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Resource Groups",
  version: "2017-11-27",
  protocol: "restJson1",
  sigV4ServiceName: "resource-groups",
  endpointPrefix: "resource-groups",
  operations: {
    CancelTagSyncTask: "POST /cancel-tag-sync-task",
    CreateGroup: "POST /groups",
    DeleteGroup: "POST /delete-group",
    GetAccountSettings: "POST /get-account-settings",
    GetGroup: "POST /get-group",
    GetGroupConfiguration: "POST /get-group-configuration",
    GetGroupQuery: "POST /get-group-query",
    GetTags: "GET /resources/{Arn}/tags",
    GetTagSyncTask: "POST /get-tag-sync-task",
    GroupResources: "POST /group-resources",
    ListGroupingStatuses: "POST /list-grouping-statuses",
    ListGroupResources: "POST /list-group-resources",
    ListGroups: "POST /groups-list",
    ListTagSyncTasks: "POST /list-tag-sync-tasks",
    PutGroupConfiguration: "POST /put-group-configuration",
    SearchResources: "POST /resources/search",
    StartTagSyncTask: "POST /start-tag-sync-task",
    Tag: "PUT /resources/{Arn}/tags",
    UngroupResources: "POST /ungroup-resources",
    Untag: "PATCH /resources/{Arn}/tags",
    UpdateAccountSettings: "POST /update-account-settings",
    UpdateGroup: "POST /update-group",
    UpdateGroupQuery: "POST /update-group-query",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const ResourceGroups = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _ResourceGroups;
