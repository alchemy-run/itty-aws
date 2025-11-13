import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CodeGuruProfiler as _CodeGuruProfilerClient } from "./types.ts";

export * from "./types.ts";

export {AccessDeniedException, ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "CodeGuruProfiler",
  version: "2019-07-18",
  protocol: "restJson1",
  sigV4ServiceName: "codeguru-profiler",
  endpointPrefix: "codeguru-profiler",
  operations: {
    "GetFindingsReportAccountSummary": "GET /internal/findingsReports",
    "ListTagsForResource": "GET /tags/{resourceArn}",
    "TagResource": "POST /tags/{resourceArn}",
    "UntagResource": "DELETE /tags/{resourceArn}",
    "AddNotificationChannels": "POST /profilingGroups/{profilingGroupName}/notificationConfiguration",
    "BatchGetFrameMetricData": "POST /profilingGroups/{profilingGroupName}/frames/-/metrics",
    "ConfigureAgent": {
      http: "POST /profilingGroups/{profilingGroupName}/configureAgent",
      traits: {
        "configuration": "httpPayload",
      },
    },
    "CreateProfilingGroup": {
      http: "POST /profilingGroups",
      traits: {
        "profilingGroup": "httpPayload",
      },
    },
    "DeleteProfilingGroup": "DELETE /profilingGroups/{profilingGroupName}",
    "DescribeProfilingGroup": {
      http: "GET /profilingGroups/{profilingGroupName}",
      traits: {
        "profilingGroup": "httpPayload",
      },
    },
    "GetNotificationConfiguration": "GET /profilingGroups/{profilingGroupName}/notificationConfiguration",
    "GetPolicy": "GET /profilingGroups/{profilingGroupName}/policy",
    "GetProfile": {
      http: "GET /profilingGroups/{profilingGroupName}/profile",
      traits: {
        "profile": "httpPayload",
        "contentType": "Content-Type",
        "contentEncoding": "Content-Encoding",
      },
    },
    "GetRecommendations": "GET /internal/profilingGroups/{profilingGroupName}/recommendations",
    "ListFindingsReports": "GET /internal/profilingGroups/{profilingGroupName}/findingsReports",
    "ListProfileTimes": "GET /profilingGroups/{profilingGroupName}/profileTimes",
    "ListProfilingGroups": "GET /profilingGroups",
    "PostAgentProfile": "POST /profilingGroups/{profilingGroupName}/agentProfile",
    "PutPermission": "PUT /profilingGroups/{profilingGroupName}/policy/{actionGroup}",
    "RemoveNotificationChannel": "DELETE /profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}",
    "RemovePermission": "DELETE /profilingGroups/{profilingGroupName}/policy/{actionGroup}",
    "SubmitFeedback": "POST /internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback",
    "UpdateProfilingGroup": {
      http: "PUT /profilingGroups/{profilingGroupName}",
      traits: {
        "profilingGroup": "httpPayload",
      },
    },
  },
  retryableErrors: {
    "InternalServerException": {},
    "ThrottlingException": {},
    "ServiceQuotaExceededException": {},
  },
} as const satisfies ServiceMetadata;

export type _CodeGuruProfiler = _CodeGuruProfilerClient;
export interface CodeGuruProfiler extends _CodeGuruProfiler {}
export const CodeGuruProfiler = class extends AWSServiceClient {
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
} as unknown as typeof _CodeGuruProfilerClient;
