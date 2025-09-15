import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { WorkDocs as _WorkDocsClient } from "./types.ts";

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
  ThrottlingException,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  ValidationException,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "WorkDocs",
  version: "2016-05-01",
  protocol: "restJson1",
  sigV4ServiceName: "workdocs",
  endpointPrefix: "workdocs",
  operations: {
    AbortDocumentVersionUpload:
      "DELETE /api/v1/documents/{DocumentId}/versions/{VersionId}",
    ActivateUser: "POST /api/v1/users/{UserId}/activation",
    AddResourcePermissions: "POST /api/v1/resources/{ResourceId}/permissions",
    CreateComment:
      "POST /api/v1/documents/{DocumentId}/versions/{VersionId}/comment",
    CreateCustomMetadata: "PUT /api/v1/resources/{ResourceId}/customMetadata",
    CreateFolder: "POST /api/v1/folders",
    CreateLabels: "PUT /api/v1/resources/{ResourceId}/labels",
    CreateNotificationSubscription:
      "POST /api/v1/organizations/{OrganizationId}/subscriptions",
    CreateUser: "POST /api/v1/users",
    DeactivateUser: "DELETE /api/v1/users/{UserId}/activation",
    DeleteComment:
      "DELETE /api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}",
    DeleteCustomMetadata:
      "DELETE /api/v1/resources/{ResourceId}/customMetadata",
    DeleteDocument: "DELETE /api/v1/documents/{DocumentId}",
    DeleteDocumentVersion:
      "DELETE /api/v1/documentVersions/{DocumentId}/versions/{VersionId}",
    DeleteFolder: "DELETE /api/v1/folders/{FolderId}",
    DeleteFolderContents: "DELETE /api/v1/folders/{FolderId}/contents",
    DeleteLabels: "DELETE /api/v1/resources/{ResourceId}/labels",
    DeleteNotificationSubscription:
      "DELETE /api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}",
    DeleteUser: "DELETE /api/v1/users/{UserId}",
    DescribeActivities: "GET /api/v1/activities",
    DescribeComments:
      "GET /api/v1/documents/{DocumentId}/versions/{VersionId}/comments",
    DescribeDocumentVersions: "GET /api/v1/documents/{DocumentId}/versions",
    DescribeFolderContents: "GET /api/v1/folders/{FolderId}/contents",
    DescribeGroups: "GET /api/v1/groups",
    DescribeNotificationSubscriptions:
      "GET /api/v1/organizations/{OrganizationId}/subscriptions",
    DescribeResourcePermissions:
      "GET /api/v1/resources/{ResourceId}/permissions",
    DescribeRootFolders: "GET /api/v1/me/root",
    DescribeUsers: "GET /api/v1/users",
    GetCurrentUser: "GET /api/v1/me",
    GetDocument: "GET /api/v1/documents/{DocumentId}",
    GetDocumentPath: "GET /api/v1/documents/{DocumentId}/path",
    GetDocumentVersion:
      "GET /api/v1/documents/{DocumentId}/versions/{VersionId}",
    GetFolder: "GET /api/v1/folders/{FolderId}",
    GetFolderPath: "GET /api/v1/folders/{FolderId}/path",
    GetResources: "GET /api/v1/resources",
    InitiateDocumentVersionUpload: "POST /api/v1/documents",
    RemoveAllResourcePermissions:
      "DELETE /api/v1/resources/{ResourceId}/permissions",
    RemoveResourcePermission:
      "DELETE /api/v1/resources/{ResourceId}/permissions/{PrincipalId}",
    RestoreDocumentVersions:
      "POST /api/v1/documentVersions/restore/{DocumentId}",
    SearchResources: "POST /api/v1/search",
    UpdateDocument: "PATCH /api/v1/documents/{DocumentId}",
    UpdateDocumentVersion:
      "PATCH /api/v1/documents/{DocumentId}/versions/{VersionId}",
    UpdateFolder: "PATCH /api/v1/folders/{FolderId}",
    UpdateUser: "PATCH /api/v1/users/{UserId}",
  },
} as const satisfies ServiceMetadata;

export type _WorkDocs = _WorkDocsClient;
export interface WorkDocs extends _WorkDocs {}
export const WorkDocs = class extends AWSServiceClient {
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
} as unknown as typeof _WorkDocsClient;
