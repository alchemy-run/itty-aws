import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { MedicalImaging as _MedicalImaging } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "Medical Imaging",
  version: "2023-07-19",
  protocol: "restJson1",
  sigV4ServiceName: "medical-imaging",
  endpointPrefix: "medical-imaging",
  operations: {
    CopyImageSet:
      "POST /datastore/{datastoreId}/imageSet/{sourceImageSetId}/copyImageSet",
    DeleteImageSet:
      "POST /datastore/{datastoreId}/imageSet/{imageSetId}/deleteImageSet",
    GetDICOMImportJob:
      "GET /getDICOMImportJob/datastore/{datastoreId}/job/{jobId}",
    GetImageFrame: {
      http: "POST /datastore/{datastoreId}/imageSet/{imageSetId}/getImageFrame",
      traits: {
        imageFrameBlob: "httpPayload",
        contentType: "Content-Type",
      },
    },
    GetImageSet:
      "POST /datastore/{datastoreId}/imageSet/{imageSetId}/getImageSet",
    GetImageSetMetadata: {
      http: "POST /datastore/{datastoreId}/imageSet/{imageSetId}/getImageSetMetadata",
      traits: {
        imageSetMetadataBlob: "httpPayload",
        contentType: "Content-Type",
        contentEncoding: "Content-Encoding",
      },
    },
    ListDICOMImportJobs: "GET /listDICOMImportJobs/datastore/{datastoreId}",
    ListImageSetVersions:
      "POST /datastore/{datastoreId}/imageSet/{imageSetId}/listImageSetVersions",
    ListTagsForResource: "GET /tags/{resourceArn}",
    SearchImageSets: "POST /datastore/{datastoreId}/searchImageSets",
    StartDICOMImportJob: "POST /startDICOMImportJob/datastore/{datastoreId}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateImageSetMetadata:
      "POST /datastore/{datastoreId}/imageSet/{imageSetId}/updateImageSetMetadata",
    CreateDatastore: "POST /datastore",
    DeleteDatastore: "DELETE /datastore/{datastoreId}",
    GetDatastore: "GET /datastore/{datastoreId}",
    ListDatastores: "GET /datastore",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const MedicalImaging = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _MedicalImaging;
