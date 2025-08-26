import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { LookoutMetrics as _LookoutMetrics } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "LookoutMetrics",
  version: "2017-07-25",
  protocol: "restJson1",
  sigV4ServiceName: "lookoutmetrics",
  endpointPrefix: "lookoutmetrics",
  operations: {
    ActivateAnomalyDetector: "POST /ActivateAnomalyDetector",
    BackTestAnomalyDetector: "POST /BackTestAnomalyDetector",
    CreateAlert: "POST /CreateAlert",
    CreateAnomalyDetector: "POST /CreateAnomalyDetector",
    CreateMetricSet: "POST /CreateMetricSet",
    DeactivateAnomalyDetector: "POST /DeactivateAnomalyDetector",
    DeleteAlert: "POST /DeleteAlert",
    DeleteAnomalyDetector: "POST /DeleteAnomalyDetector",
    DescribeAlert: "POST /DescribeAlert",
    DescribeAnomalyDetectionExecutions:
      "POST /DescribeAnomalyDetectionExecutions",
    DescribeAnomalyDetector: "POST /DescribeAnomalyDetector",
    DescribeMetricSet: "POST /DescribeMetricSet",
    DetectMetricSetConfig: "POST /DetectMetricSetConfig",
    GetAnomalyGroup: "POST /GetAnomalyGroup",
    GetDataQualityMetrics: "POST /GetDataQualityMetrics",
    GetFeedback: "POST /GetFeedback",
    GetSampleData: "POST /GetSampleData",
    ListAlerts: "POST /ListAlerts",
    ListAnomalyDetectors: "POST /ListAnomalyDetectors",
    ListAnomalyGroupRelatedMetrics: "POST /ListAnomalyGroupRelatedMetrics",
    ListAnomalyGroupSummaries: "POST /ListAnomalyGroupSummaries",
    ListAnomalyGroupTimeSeries: "POST /ListAnomalyGroupTimeSeries",
    ListMetricSets: "POST /ListMetricSets",
    ListTagsForResource: "GET /tags/{ResourceArn}",
    PutFeedback: "POST /PutFeedback",
    TagResource: "POST /tags/{ResourceArn}",
    UntagResource: "DELETE /tags/{ResourceArn}",
    UpdateAlert: "POST /UpdateAlert",
    UpdateAnomalyDetector: "POST /UpdateAnomalyDetector",
    UpdateMetricSet: "POST /UpdateMetricSet",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const LookoutMetrics = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _LookoutMetrics;
