import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { SageMakerGeospatial as _SageMakerGeospatial } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "SageMaker Geospatial",
  version: "2020-05-27",
  protocol: "restJson1",
  sigV4ServiceName: "sagemaker-geospatial",
  operations: {
    ListTagsForResource: "GET /tags/{ResourceArn}",
    TagResource: "PUT /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    DeleteEarthObservationJob: "DELETE /earth-observation-jobs/{Arn}",
    DeleteVectorEnrichmentJob: "DELETE /vector-enrichment-jobs/{Arn}",
    ExportEarthObservationJob: "POST /export-earth-observation-job",
    ExportVectorEnrichmentJob: "POST /export-vector-enrichment-jobs",
    GetEarthObservationJob: "GET /earth-observation-jobs/{Arn}",
    GetRasterDataCollection: "GET /raster-data-collection/{Arn}",
    GetTile: {
      http: "GET /tile/{z}/{x}/{y}",
      traits: {
        BinaryFile: "httpPayload",
      },
    },
    GetVectorEnrichmentJob: "GET /vector-enrichment-jobs/{Arn}",
    ListEarthObservationJobs: "POST /list-earth-observation-jobs",
    ListRasterDataCollections: "GET /raster-data-collections",
    ListVectorEnrichmentJobs: "POST /list-vector-enrichment-jobs",
    SearchRasterDataCollection: "POST /search-raster-data-collection",
    StartEarthObservationJob: "POST /earth-observation-jobs",
    StartVectorEnrichmentJob: "POST /vector-enrichment-jobs",
    StopEarthObservationJob: "POST /earth-observation-jobs/stop",
    StopVectorEnrichmentJob: "POST /vector-enrichment-jobs/stop",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const SageMakerGeospatial = class extends AWSServiceClient {
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
} as unknown as typeof _SageMakerGeospatial;
