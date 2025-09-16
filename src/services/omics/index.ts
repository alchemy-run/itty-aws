import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { Omics as _OmicsClient } from "./types.ts";

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
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Omics",
  version: "2022-11-28",
  protocol: "restJson1",
  sigV4ServiceName: "omics",
  operations: {
    DeleteS3AccessPolicy: "DELETE /s3accesspolicy/{s3AccessPointArn}",
    GetS3AccessPolicy: "GET /s3accesspolicy/{s3AccessPointArn}",
    PutS3AccessPolicy: "PUT /s3accesspolicy/{s3AccessPointArn}",
    AbortMultipartReadSetUpload:
      "DELETE /sequencestore/{sequenceStoreId}/upload/{uploadId}/abort",
    AcceptShare: "POST /share/{shareId}",
    BatchDeleteReadSet:
      "POST /sequencestore/{sequenceStoreId}/readset/batch/delete",
    CancelAnnotationImportJob: "DELETE /import/annotation/{jobId}",
    CancelRun: "POST /run/{id}/cancel",
    CancelVariantImportJob: "DELETE /import/variant/{jobId}",
    CompleteMultipartReadSetUpload:
      "POST /sequencestore/{sequenceStoreId}/upload/{uploadId}/complete",
    CreateAnnotationStore: "POST /annotationStore",
    CreateAnnotationStoreVersion: "POST /annotationStore/{name}/version",
    CreateMultipartReadSetUpload:
      "POST /sequencestore/{sequenceStoreId}/upload",
    CreateReferenceStore: "POST /referencestore",
    CreateRunCache: "POST /runCache",
    CreateRunGroup: "POST /runGroup",
    CreateSequenceStore: "POST /sequencestore",
    CreateShare: "POST /share",
    CreateVariantStore: "POST /variantStore",
    CreateWorkflow: "POST /workflow",
    CreateWorkflowVersion: "POST /workflow/{workflowId}/version",
    DeleteAnnotationStore: "DELETE /annotationStore/{name}",
    DeleteAnnotationStoreVersions:
      "POST /annotationStore/{name}/versions/delete",
    DeleteReference: "DELETE /referencestore/{referenceStoreId}/reference/{id}",
    DeleteReferenceStore: "DELETE /referencestore/{id}",
    DeleteRun: "DELETE /run/{id}",
    DeleteRunCache: "DELETE /runCache/{id}",
    DeleteRunGroup: "DELETE /runGroup/{id}",
    DeleteSequenceStore: "DELETE /sequencestore/{id}",
    DeleteShare: "DELETE /share/{shareId}",
    DeleteVariantStore: "DELETE /variantStore/{name}",
    DeleteWorkflow: "DELETE /workflow/{id}",
    DeleteWorkflowVersion:
      "DELETE /workflow/{workflowId}/version/{versionName}",
    GetAnnotationImportJob: "GET /import/annotation/{jobId}",
    GetAnnotationStore: "GET /annotationStore/{name}",
    GetAnnotationStoreVersion:
      "GET /annotationStore/{name}/version/{versionName}",
    GetReadSet: {
      http: "GET /sequencestore/{sequenceStoreId}/readset/{id}",
      traits: {
        payload: "httpPayload",
      },
    },
    GetReadSetActivationJob:
      "GET /sequencestore/{sequenceStoreId}/activationjob/{id}",
    GetReadSetExportJob: "GET /sequencestore/{sequenceStoreId}/exportjob/{id}",
    GetReadSetImportJob: "GET /sequencestore/{sequenceStoreId}/importjob/{id}",
    GetReadSetMetadata:
      "GET /sequencestore/{sequenceStoreId}/readset/{id}/metadata",
    GetReference: {
      http: "GET /referencestore/{referenceStoreId}/reference/{id}",
      traits: {
        payload: "httpPayload",
      },
    },
    GetReferenceImportJob:
      "GET /referencestore/{referenceStoreId}/importjob/{id}",
    GetReferenceMetadata:
      "GET /referencestore/{referenceStoreId}/reference/{id}/metadata",
    GetReferenceStore: "GET /referencestore/{id}",
    GetRun: "GET /run/{id}",
    GetRunCache: "GET /runCache/{id}",
    GetRunGroup: "GET /runGroup/{id}",
    GetRunTask: "GET /run/{id}/task/{taskId}",
    GetSequenceStore: "GET /sequencestore/{id}",
    GetShare: "GET /share/{shareId}",
    GetVariantImportJob: "GET /import/variant/{jobId}",
    GetVariantStore: "GET /variantStore/{name}",
    GetWorkflow: "GET /workflow/{id}",
    GetWorkflowVersion: "GET /workflow/{workflowId}/version/{versionName}",
    ListAnnotationImportJobs: "POST /import/annotations",
    ListAnnotationStoreVersions: "POST /annotationStore/{name}/versions",
    ListAnnotationStores: "POST /annotationStores",
    ListMultipartReadSetUploads:
      "POST /sequencestore/{sequenceStoreId}/uploads",
    ListReadSetActivationJobs:
      "POST /sequencestore/{sequenceStoreId}/activationjobs",
    ListReadSetExportJobs: "POST /sequencestore/{sequenceStoreId}/exportjobs",
    ListReadSetImportJobs: "POST /sequencestore/{sequenceStoreId}/importjobs",
    ListReadSetUploadParts:
      "POST /sequencestore/{sequenceStoreId}/upload/{uploadId}/parts",
    ListReadSets: "POST /sequencestore/{sequenceStoreId}/readsets",
    ListReferenceImportJobs:
      "POST /referencestore/{referenceStoreId}/importjobs",
    ListReferenceStores: "POST /referencestores",
    ListReferences: "POST /referencestore/{referenceStoreId}/references",
    ListRunCaches: "GET /runCache",
    ListRunGroups: "GET /runGroup",
    ListRunTasks: "GET /run/{id}/task",
    ListRuns: "GET /run",
    ListSequenceStores: "POST /sequencestores",
    ListShares: "POST /shares",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListVariantImportJobs: "POST /import/variants",
    ListVariantStores: "POST /variantStores",
    ListWorkflowVersions: "GET /workflow/{workflowId}/version",
    ListWorkflows: "GET /workflow",
    StartAnnotationImportJob: "POST /import/annotation",
    StartReadSetActivationJob:
      "POST /sequencestore/{sequenceStoreId}/activationjob",
    StartReadSetExportJob: "POST /sequencestore/{sequenceStoreId}/exportjob",
    StartReadSetImportJob: "POST /sequencestore/{sequenceStoreId}/importjob",
    StartReferenceImportJob:
      "POST /referencestore/{referenceStoreId}/importjob",
    StartRun: "POST /run",
    StartVariantImportJob: "POST /import/variant",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateAnnotationStore: "POST /annotationStore/{name}",
    UpdateAnnotationStoreVersion:
      "POST /annotationStore/{name}/version/{versionName}",
    UpdateRunCache: "POST /runCache/{id}",
    UpdateRunGroup: "POST /runGroup/{id}",
    UpdateSequenceStore: "PATCH /sequencestore/{id}",
    UpdateVariantStore: "POST /variantStore/{name}",
    UpdateWorkflow: "POST /workflow/{id}",
    UpdateWorkflowVersion: "POST /workflow/{workflowId}/version/{versionName}",
    UploadReadSetPart:
      "PUT /sequencestore/{sequenceStoreId}/upload/{uploadId}/part",
  },
} as const satisfies ServiceMetadata;

export type _Omics = _OmicsClient;
export interface Omics extends _Omics {}
export const Omics = class extends AWSServiceClient {
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
} as unknown as typeof _OmicsClient;
