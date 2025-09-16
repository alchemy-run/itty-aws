import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { QApps as _QAppsClient } from "./types.ts";

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
  sdkId: "QApps",
  version: "2023-11-27",
  protocol: "restJson1",
  sigV4ServiceName: "qapps",
  endpointPrefix: "data.qapps",
  operations: {
    AssociateLibraryItemReview: "POST /catalog.associateItemRating",
    AssociateQAppWithUser: "POST /apps.install",
    BatchCreateCategory: "POST /catalog.createCategories",
    BatchDeleteCategory: "POST /catalog.deleteCategories",
    BatchUpdateCategory: "POST /catalog.updateCategories",
    CreateLibraryItem: "POST /catalog.createItem",
    CreatePresignedUrl: "POST /apps.createPresignedUrl",
    CreateQApp: "POST /apps.create",
    DeleteLibraryItem: "POST /catalog.deleteItem",
    DeleteQApp: "POST /apps.delete",
    DescribeQAppPermissions: "GET /apps.describeQAppPermissions",
    DisassociateLibraryItemReview: "POST /catalog.disassociateItemRating",
    DisassociateQAppFromUser: "POST /apps.uninstall",
    ExportQAppSessionData: "POST /runtime.exportQAppSessionData",
    GetLibraryItem: "GET /catalog.getItem",
    GetQApp: "GET /apps.get",
    GetQAppSession: "GET /runtime.getQAppSession",
    GetQAppSessionMetadata: "GET /runtime.getQAppSessionMetadata",
    ImportDocument: "POST /apps.importDocument",
    ListCategories: "GET /catalog.listCategories",
    ListLibraryItems: "GET /catalog.list",
    ListQApps: "GET /apps.list",
    ListQAppSessionData: "GET /runtime.listQAppSessionData",
    ListTagsForResource: "GET /tags/{resourceARN}",
    PredictQApp: "POST /apps.predictQApp",
    StartQAppSession: "POST /runtime.startQAppSession",
    StopQAppSession: "POST /runtime.deleteMiniAppRun",
    TagResource: "POST /tags/{resourceARN}",
    UntagResource: "DELETE /tags/{resourceARN}",
    UpdateLibraryItem: "POST /catalog.updateItem",
    UpdateLibraryItemMetadata: "POST /catalog.updateItemMetadata",
    UpdateQApp: "POST /apps.update",
    UpdateQAppPermissions: "POST /apps.updateQAppPermissions",
    UpdateQAppSession: "POST /runtime.updateQAppSession",
    UpdateQAppSessionMetadata: "POST /runtime.updateQAppSessionMetadata",
  },
} as const satisfies ServiceMetadata;

export type _QApps = _QAppsClient;
export interface QApps extends _QApps {}
export const QApps = class extends AWSServiceClient {
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
} as unknown as typeof _QAppsClient;
