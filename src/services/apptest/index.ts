import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { AppTest as _AppTest } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "AppTest",
  version: "2022-12-06",
  protocol: "restJson1",
  sigV4ServiceName: "apptest",
  endpointPrefix: "apptest",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreateTestCase: "POST /testcase",
    CreateTestConfiguration: "POST /testconfiguration",
    CreateTestSuite: "POST /testsuite",
    DeleteTestCase: "DELETE /testcases/{testCaseId}",
    DeleteTestConfiguration: "DELETE /testconfigurations/{testConfigurationId}",
    DeleteTestRun: "DELETE /testruns/{testRunId}",
    DeleteTestSuite: "DELETE /testsuites/{testSuiteId}",
    GetTestCase: "GET /testcases/{testCaseId}",
    GetTestConfiguration: "GET /testconfigurations/{testConfigurationId}",
    GetTestRunStep: "GET /testruns/{testRunId}/steps/{stepName}",
    GetTestSuite: "GET /testsuites/{testSuiteId}",
    ListTestCases: "GET /testcases",
    ListTestConfigurations: "GET /testconfigurations",
    ListTestRunSteps: "GET /testruns/{testRunId}/steps",
    ListTestRunTestCases: "GET /testruns/{testRunId}/testcases",
    ListTestRuns: "GET /testruns",
    ListTestSuites: "GET /testsuites",
    StartTestRun: "POST /testrun",
    UpdateTestCase: "PATCH /testcases/{testCaseId}",
    UpdateTestConfiguration: "PATCH /testconfigurations/{testConfigurationId}",
    UpdateTestSuite: "PATCH /testsuites/{testSuiteId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const AppTest = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _AppTest;
