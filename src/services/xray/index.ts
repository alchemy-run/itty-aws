import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { XRay as _XRay } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "XRay",
  version: "2016-04-12",
  protocol: "restJson1",
  sigV4ServiceName: "xray",
  endpointPrefix: "xray",
  operations: {
    BatchGetTraces: "POST /Traces",
    CancelTraceRetrieval: "POST /CancelTraceRetrieval",
    CreateGroup: "POST /CreateGroup",
    CreateSamplingRule: "POST /CreateSamplingRule",
    DeleteGroup: "POST /DeleteGroup",
    DeleteResourcePolicy: "POST /DeleteResourcePolicy",
    DeleteSamplingRule: "POST /DeleteSamplingRule",
    GetEncryptionConfig: "POST /EncryptionConfig",
    GetGroup: "POST /GetGroup",
    GetGroups: "POST /Groups",
    GetIndexingRules: "POST /GetIndexingRules",
    GetInsight: "POST /Insight",
    GetInsightEvents: "POST /InsightEvents",
    GetInsightImpactGraph: "POST /InsightImpactGraph",
    GetInsightSummaries: "POST /InsightSummaries",
    GetRetrievedTracesGraph: "POST /GetRetrievedTracesGraph",
    GetSamplingRules: "POST /GetSamplingRules",
    GetSamplingStatisticSummaries: "POST /SamplingStatisticSummaries",
    GetSamplingTargets: "POST /SamplingTargets",
    GetServiceGraph: "POST /ServiceGraph",
    GetTimeSeriesServiceStatistics: "POST /TimeSeriesServiceStatistics",
    GetTraceGraph: "POST /TraceGraph",
    GetTraceSegmentDestination: "POST /GetTraceSegmentDestination",
    GetTraceSummaries: "POST /TraceSummaries",
    ListResourcePolicies: "POST /ListResourcePolicies",
    ListRetrievedTraces: "POST /ListRetrievedTraces",
    ListTagsForResource: "POST /ListTagsForResource",
    PutEncryptionConfig: "POST /PutEncryptionConfig",
    PutResourcePolicy: "POST /PutResourcePolicy",
    PutTelemetryRecords: "POST /TelemetryRecords",
    PutTraceSegments: "POST /TraceSegments",
    StartTraceRetrieval: "POST /StartTraceRetrieval",
    TagResource: "POST /TagResource",
    UntagResource: "POST /UntagResource",
    UpdateGroup: "POST /UpdateGroup",
    UpdateIndexingRule: "POST /UpdateIndexingRule",
    UpdateSamplingRule: "POST /UpdateSamplingRule",
    UpdateTraceSegmentDestination: "POST /UpdateTraceSegmentDestination",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const XRay = class extends AWSServiceClient {
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
} as unknown as typeof _XRay;
