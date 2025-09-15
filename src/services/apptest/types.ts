import type { Effect, Data as EffectData } from "effect";
import type {
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
} from "../../error.ts";
type CommonAwsError =
  | ExpiredTokenException
  | IncompleteSignature
  | InternalFailure
  | MalformedHttpRequestException
  | NotAuthorized
  | OptInRequired
  | RequestAbortedException
  | RequestEntityTooLargeException
  | RequestExpired
  | RequestTimeoutException
  | ServiceUnavailable
  | UnrecognizedClientException
  | UnknownOperationException
  | ValidationError
  | AccessDeniedException
  | ThrottlingException;
import { AWSServiceClient } from "../../client.ts";

export declare class AppTest extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTestCase(
    input: CreateTestCaseRequest,
  ): Effect.Effect<
    CreateTestCaseResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTestConfiguration(
    input: CreateTestConfigurationRequest,
  ): Effect.Effect<
    CreateTestConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createTestSuite(
    input: CreateTestSuiteRequest,
  ): Effect.Effect<
    CreateTestSuiteResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTestCase(
    input: DeleteTestCaseRequest,
  ): Effect.Effect<
    DeleteTestCaseResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTestConfiguration(
    input: DeleteTestConfigurationRequest,
  ): Effect.Effect<
    DeleteTestConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTestRun(
    input: DeleteTestRunRequest,
  ): Effect.Effect<
    DeleteTestRunResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteTestSuite(
    input: DeleteTestSuiteRequest,
  ): Effect.Effect<
    DeleteTestSuiteResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTestCase(
    input: GetTestCaseRequest,
  ): Effect.Effect<
    GetTestCaseResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTestConfiguration(
    input: GetTestConfigurationRequest,
  ): Effect.Effect<
    GetTestConfigurationResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTestRunStep(
    input: GetTestRunStepRequest,
  ): Effect.Effect<
    GetTestRunStepResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getTestSuite(
    input: GetTestSuiteRequest,
  ): Effect.Effect<
    GetTestSuiteResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestCases(
    input: ListTestCasesRequest,
  ): Effect.Effect<
    ListTestCasesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestConfigurations(
    input: ListTestConfigurationsRequest,
  ): Effect.Effect<
    ListTestConfigurationsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestRunSteps(
    input: ListTestRunStepsRequest,
  ): Effect.Effect<
    ListTestRunStepsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestRunTestCases(
    input: ListTestRunTestCasesRequest,
  ): Effect.Effect<
    ListTestRunTestCasesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestRuns(
    input: ListTestRunsRequest,
  ): Effect.Effect<
    ListTestRunsResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTestSuites(
    input: ListTestSuitesRequest,
  ): Effect.Effect<
    ListTestSuitesResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startTestRun(
    input: StartTestRunRequest,
  ): Effect.Effect<
    StartTestRunResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTestCase(
    input: UpdateTestCaseRequest,
  ): Effect.Effect<
    UpdateTestCaseResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTestConfiguration(
    input: UpdateTestConfigurationRequest,
  ): Effect.Effect<
    UpdateTestConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateTestSuite(
    input: UpdateTestSuiteRequest,
  ): Effect.Effect<
    UpdateTestSuiteResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Apptest extends AppTest {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Arn = string;

export interface Batch {
  batchJobName: string;
  batchJobParameters?: Record<string, string>;
  exportDataSetNames?: Array<string>;
}
export type BatchJobParameters = Record<string, string>;
export interface BatchStepInput {
  resource: MainframeResourceSummary;
  batchJobName: string;
  batchJobParameters?: Record<string, string>;
  exportDataSetNames?: Array<string>;
  properties?: MainframeActionProperties;
}
export interface BatchStepOutput {
  dataSetExportLocation?: string;
  dmsOutputLocation?: string;
  dataSetDetails?: Array<DataSet>;
}
export interface BatchSummary {
  stepInput: BatchStepInput;
  stepOutput?: BatchStepOutput;
}
export type CaptureTool = "Precisely" | "AWS DMS";
export interface CloudFormation {
  templateLocation: string;
  parameters?: Record<string, string>;
}
export interface CloudFormationAction {
  resource: string;
  actionType?: CloudFormationActionType;
}
export type CloudFormationActionType = "Create" | "Delete";
interface _CloudFormationStepSummary {
  createCloudformation?: CreateCloudFormationSummary;
  deleteCloudformation?: DeleteCloudFormationSummary;
}

export type CloudFormationStepSummary =
  | (_CloudFormationStepSummary & {
      createCloudformation: CreateCloudFormationSummary;
    })
  | (_CloudFormationStepSummary & {
      deleteCloudformation: DeleteCloudFormationSummary;
    });
export interface CompareAction {
  input: Input;
  output?: Output;
}
export interface CompareActionSummary {
  type: File;
}
export interface CompareDatabaseCDCStepInput {
  sourceLocation: string;
  targetLocation: string;
  outputLocation?: string;
  sourceMetadata: SourceDatabaseMetadata;
  targetMetadata: TargetDatabaseMetadata;
}
export interface CompareDatabaseCDCStepOutput {
  comparisonOutputLocation: string;
  comparisonStatus: ComparisonStatusEnum;
}
export interface CompareDatabaseCDCSummary {
  stepInput: CompareDatabaseCDCStepInput;
  stepOutput?: CompareDatabaseCDCStepOutput;
}
export interface CompareDataSetsStepInput {
  sourceLocation: string;
  targetLocation: string;
  sourceDataSets: Array<DataSet>;
  targetDataSets: Array<DataSet>;
}
export interface CompareDataSetsStepOutput {
  comparisonOutputLocation: string;
  comparisonStatus: ComparisonStatusEnum;
}
export interface CompareDataSetsSummary {
  stepInput: CompareDataSetsStepInput;
  stepOutput?: CompareDataSetsStepOutput;
}
interface _CompareFileType {
  datasets?: CompareDataSetsSummary;
  databaseCDC?: CompareDatabaseCDCSummary;
}

export type CompareFileType =
  | (_CompareFileType & { datasets: CompareDataSetsSummary })
  | (_CompareFileType & { databaseCDC: CompareDatabaseCDCSummary });
export type ComparisonStatusEnum = "Different" | "Equivalent" | "Equal";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface CreateCloudFormationStepInput {
  templateLocation: string;
  parameters?: Record<string, string>;
}
export interface CreateCloudFormationStepOutput {
  stackId: string;
  exports?: Record<string, string>;
}
export interface CreateCloudFormationSummary {
  stepInput: CreateCloudFormationStepInput;
  stepOutput?: CreateCloudFormationStepOutput;
}
export interface CreateTestCaseRequest {
  name: string;
  description?: string;
  steps: Array<Step>;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateTestCaseResponse {
  testCaseId: string;
  testCaseVersion: number;
}
export interface CreateTestConfigurationRequest {
  name: string;
  description?: string;
  resources: Array<Resource>;
  properties?: Record<string, string>;
  clientToken?: string;
  tags?: Record<string, string>;
  serviceSettings?: ServiceSettings;
}
export interface CreateTestConfigurationResponse {
  testConfigurationId: string;
  testConfigurationVersion: number;
}
export interface CreateTestSuiteRequest {
  name: string;
  description?: string;
  beforeSteps?: Array<Step>;
  afterSteps?: Array<Step>;
  testCases: TestCases;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface CreateTestSuiteResponse {
  testSuiteId: string;
  testSuiteVersion: number;
}
export interface DatabaseCDC {
  sourceMetadata: SourceDatabaseMetadata;
  targetMetadata: TargetDatabaseMetadata;
}
export interface DataSet {
  type: DataSetType;
  name: string;
  ccsid: string;
  format: Format;
  length: number;
}
export type DataSetList = Array<DataSet>;
export type DataSetType = "PS";
export interface DeleteCloudFormationStepInput {
  stackId: string;
}
export interface DeleteCloudFormationStepOutput {}
export interface DeleteCloudFormationSummary {
  stepInput: DeleteCloudFormationStepInput;
  stepOutput?: DeleteCloudFormationStepOutput;
}
export interface DeleteTestCaseRequest {
  testCaseId: string;
}
export interface DeleteTestCaseResponse {}
export interface DeleteTestConfigurationRequest {
  testConfigurationId: string;
}
export interface DeleteTestConfigurationResponse {}
export interface DeleteTestRunRequest {
  testRunId: string;
}
export interface DeleteTestRunResponse {}
export interface DeleteTestSuiteRequest {
  testSuiteId: string;
}
export interface DeleteTestSuiteResponse {}
export type ExportDataSetNames = Array<string>;
interface _File {
  fileType?: CompareFileType;
}

export type File = _File & { fileType: CompareFileType };
interface _FileMetadata {
  dataSets?: Array<DataSet>;
  databaseCDC?: DatabaseCDC;
}

export type FileMetadata =
  | (_FileMetadata & { dataSets: Array<DataSet> })
  | (_FileMetadata & { databaseCDC: DatabaseCDC });
export type Format = "FIXED" | "VARIABLE" | "LINE_SEQUENTIAL";
export interface GetTestCaseRequest {
  testCaseId: string;
  testCaseVersion?: number;
}
export interface GetTestCaseResponse {
  testCaseId: string;
  testCaseArn: string;
  name: string;
  description?: string;
  latestVersion: TestCaseLatestVersion;
  testCaseVersion: number;
  status: TestCaseLifecycle;
  statusReason?: string;
  creationTime: Date | string;
  lastUpdateTime: Date | string;
  steps: Array<Step>;
  tags?: Record<string, string>;
}
export interface GetTestConfigurationRequest {
  testConfigurationId: string;
  testConfigurationVersion?: number;
}
export interface GetTestConfigurationResponse {
  testConfigurationId: string;
  name: string;
  testConfigurationArn: string;
  latestVersion: TestConfigurationLatestVersion;
  testConfigurationVersion: number;
  status: TestConfigurationLifecycle;
  statusReason?: string;
  creationTime: Date | string;
  lastUpdateTime: Date | string;
  description?: string;
  resources: Array<Resource>;
  properties: Record<string, string>;
  tags?: Record<string, string>;
  serviceSettings?: ServiceSettings;
}
export interface GetTestRunStepRequest {
  testRunId: string;
  stepName: string;
  testCaseId?: string;
  testSuiteId?: string;
}
export interface GetTestRunStepResponse {
  stepName: string;
  testRunId: string;
  testCaseId?: string;
  testCaseVersion?: number;
  testSuiteId?: string;
  testSuiteVersion?: number;
  beforeStep?: boolean;
  afterStep?: boolean;
  status: StepRunStatus;
  statusReason?: string;
  runStartTime: Date | string;
  runEndTime?: Date | string;
  stepRunSummary?: StepRunSummary;
}
export interface GetTestSuiteRequest {
  testSuiteId: string;
  testSuiteVersion?: number;
}
export interface GetTestSuiteResponse {
  testSuiteId: string;
  name: string;
  latestVersion: TestSuiteLatestVersion;
  testSuiteVersion: number;
  status?: TestSuiteLifecycle;
  statusReason?: string;
  testSuiteArn: string;
  creationTime: Date | string;
  lastUpdateTime: Date | string;
  description?: string;
  beforeSteps: Array<Step>;
  afterSteps: Array<Step>;
  testCases: TestCases;
  tags?: Record<string, string>;
}
export type IdempotencyTokenString = string;

export type Identifier = string;

interface _Input {
  file?: InputFile;
}

export type Input = _Input & { file: InputFile };
export interface InputFile {
  sourceLocation: string;
  targetLocation: string;
  fileMetadata: FileMetadata;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export interface ListTestCasesRequest {
  testCaseIds?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTestCasesResponse {
  testCases: Array<TestCaseSummary>;
  nextToken?: string;
}
export interface ListTestConfigurationsRequest {
  testConfigurationIds?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTestConfigurationsResponse {
  testConfigurations: Array<TestConfigurationSummary>;
  nextToken?: string;
}
export interface ListTestRunsRequest {
  testSuiteId?: string;
  testRunIds?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTestRunsResponse {
  testRuns: Array<TestRunSummary>;
  nextToken?: string;
}
export interface ListTestRunStepsRequest {
  testRunId: string;
  testCaseId?: string;
  testSuiteId?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTestRunStepsResponse {
  testRunSteps: Array<TestRunStepSummary>;
  nextToken?: string;
}
export interface ListTestRunTestCasesRequest {
  testRunId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTestRunTestCasesResponse {
  testRunTestCases: Array<TestCaseRunSummary>;
  nextToken?: string;
}
export interface ListTestSuitesRequest {
  testSuiteIds?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTestSuitesResponse {
  testSuites: Array<TestSuiteSummary>;
  nextToken?: string;
}
export interface M2ManagedActionProperties {
  forceStop?: boolean;
  importDataSetLocation?: string;
}
export type M2ManagedActionType = "Configure" | "Deconfigure";
export interface M2ManagedApplication {
  applicationId: string;
  runtime: M2ManagedRuntime;
  vpcEndpointServiceName?: string;
  listenerPort?: string;
}
export interface M2ManagedApplicationAction {
  resource: string;
  actionType: M2ManagedActionType;
  properties?: M2ManagedActionProperties;
}
export interface M2ManagedApplicationStepInput {
  applicationId: string;
  runtime: string;
  vpcEndpointServiceName?: string;
  listenerPort?: number;
  actionType: M2ManagedActionType;
  properties?: M2ManagedActionProperties;
}
export interface M2ManagedApplicationStepOutput {
  importDataSetSummary?: Record<string, string>;
}
export interface M2ManagedApplicationStepSummary {
  stepInput: M2ManagedApplicationStepInput;
  stepOutput?: M2ManagedApplicationStepOutput;
}
export interface M2ManagedApplicationSummary {
  applicationId: string;
  runtime: M2ManagedRuntime;
  listenerPort?: number;
}
export type M2ManagedRuntime = "MicroFocus";
export type M2NonManagedActionType = "Configure" | "Deconfigure";
export interface M2NonManagedApplication {
  vpcEndpointServiceName: string;
  listenerPort: string;
  runtime: M2NonManagedRuntime;
  webAppName?: string;
}
export interface M2NonManagedApplicationAction {
  resource: string;
  actionType: M2NonManagedActionType;
}
export interface M2NonManagedApplicationStepInput {
  vpcEndpointServiceName: string;
  listenerPort: number;
  runtime: M2NonManagedRuntime;
  webAppName?: string;
  actionType: M2NonManagedActionType;
}
export interface M2NonManagedApplicationStepOutput {}
export interface M2NonManagedApplicationStepSummary {
  stepInput: M2NonManagedApplicationStepInput;
  stepOutput?: M2NonManagedApplicationStepOutput;
}
export interface M2NonManagedApplicationSummary {
  vpcEndpointServiceName: string;
  listenerPort: number;
  runtime: M2NonManagedRuntime;
  webAppName?: string;
}
export type M2NonManagedRuntime = "BluAge";
export interface MainframeAction {
  resource: string;
  actionType: MainframeActionType;
  properties?: MainframeActionProperties;
}
export interface MainframeActionProperties {
  dmsTaskArn?: string;
}
interface _MainframeActionSummary {
  batch?: BatchSummary;
  tn3270?: TN3270Summary;
}

export type MainframeActionSummary =
  | (_MainframeActionSummary & { batch: BatchSummary })
  | (_MainframeActionSummary & { tn3270: TN3270Summary });
interface _MainframeActionType {
  batch?: Batch;
  tn3270?: TN3270;
}

export type MainframeActionType =
  | (_MainframeActionType & { batch: Batch })
  | (_MainframeActionType & { tn3270: TN3270 });
interface _MainframeResourceSummary {
  m2ManagedApplication?: M2ManagedApplicationSummary;
  m2NonManagedApplication?: M2NonManagedApplicationSummary;
}

export type MainframeResourceSummary =
  | (_MainframeResourceSummary & {
      m2ManagedApplication: M2ManagedApplicationSummary;
    })
  | (_MainframeResourceSummary & {
      m2NonManagedApplication: M2NonManagedApplicationSummary;
    });
export type MaxResults = number;

export type NextToken = string;

interface _Output {
  file?: OutputFile;
}

export type Output = _Output & { file: OutputFile };
export interface OutputFile {
  fileLocation?: string;
}
export type Properties = Record<string, string>;
export interface Resource {
  name: string;
  type: ResourceType;
}
interface _ResourceAction {
  m2ManagedApplicationAction?: M2ManagedApplicationAction;
  m2NonManagedApplicationAction?: M2NonManagedApplicationAction;
  cloudFormationAction?: CloudFormationAction;
}

export type ResourceAction =
  | (_ResourceAction & {
      m2ManagedApplicationAction: M2ManagedApplicationAction;
    })
  | (_ResourceAction & {
      m2NonManagedApplicationAction: M2NonManagedApplicationAction;
    })
  | (_ResourceAction & { cloudFormationAction: CloudFormationAction });
interface _ResourceActionSummary {
  cloudFormation?: CloudFormationStepSummary;
  m2ManagedApplication?: M2ManagedApplicationStepSummary;
  m2NonManagedApplication?: M2NonManagedApplicationStepSummary;
}

export type ResourceActionSummary =
  | (_ResourceActionSummary & { cloudFormation: CloudFormationStepSummary })
  | (_ResourceActionSummary & {
      m2ManagedApplication: M2ManagedApplicationStepSummary;
    })
  | (_ResourceActionSummary & {
      m2NonManagedApplication: M2NonManagedApplicationStepSummary;
    });
export type ResourceDescription = string;

export type ResourceList = Array<Resource>;
export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
interface _ResourceType {
  cloudFormation?: CloudFormation;
  m2ManagedApplication?: M2ManagedApplication;
  m2NonManagedApplication?: M2NonManagedApplication;
}

export type ResourceType =
  | (_ResourceType & { cloudFormation: CloudFormation })
  | (_ResourceType & { m2ManagedApplication: M2ManagedApplication })
  | (_ResourceType & { m2NonManagedApplication: M2NonManagedApplication });
export type S3Uri = string;

export interface Script {
  scriptLocation: string;
  type: ScriptType;
}
export interface ScriptSummary {
  scriptLocation: string;
  type: ScriptType;
}
export type ScriptType = "Selenium";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
}> {}
export interface ServiceSettings {
  kmsKeyId?: string;
}
export type SourceDatabase = "z/OS-DB2";
export interface SourceDatabaseMetadata {
  type: SourceDatabase;
  captureTool: CaptureTool;
}
export interface StartTestRunRequest {
  testSuiteId: string;
  testConfigurationId?: string;
  clientToken?: string;
  tags?: Record<string, string>;
}
export interface StartTestRunResponse {
  testRunId: string;
  testRunStatus: TestRunStatus;
}
export interface Step {
  name: string;
  description?: string;
  action: StepAction;
}
interface _StepAction {
  resourceAction?: ResourceAction;
  mainframeAction?: MainframeAction;
  compareAction?: CompareAction;
}

export type StepAction =
  | (_StepAction & { resourceAction: ResourceAction })
  | (_StepAction & { mainframeAction: MainframeAction })
  | (_StepAction & { compareAction: CompareAction });
export type StepList = Array<Step>;
export type StepRunStatus = "Success" | "Failed" | "Running";
interface _StepRunSummary {
  mainframeAction?: MainframeActionSummary;
  compareAction?: CompareActionSummary;
  resourceAction?: ResourceActionSummary;
}

export type StepRunSummary =
  | (_StepRunSummary & { mainframeAction: MainframeActionSummary })
  | (_StepRunSummary & { compareAction: CompareActionSummary })
  | (_StepRunSummary & { resourceAction: ResourceActionSummary });
export type String100 = string;

export type String50 = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TargetDatabase = "PostgreSQL";
export interface TargetDatabaseMetadata {
  type: TargetDatabase;
  captureTool: CaptureTool;
}
export type TestCaseIdList = Array<string>;
export interface TestCaseLatestVersion {
  version: number;
  status: TestCaseLifecycle;
  statusReason?: string;
}
export type TestCaseLifecycle = "Active" | "Deleting";
export type TestCaseList = Array<string>;
export type TestCaseRunStatus = "Success" | "Running" | "Failed";
export interface TestCaseRunSummary {
  testCaseId: string;
  testCaseVersion: number;
  testRunId: string;
  status: TestCaseRunStatus;
  statusReason?: string;
  runStartTime: Date | string;
  runEndTime?: Date | string;
}
export type TestCaseRunSummaryList = Array<TestCaseRunSummary>;
interface _TestCases {
  sequential?: Array<string>;
}

export type TestCases = _TestCases & { sequential: Array<string> };
export interface TestCaseSummary {
  testCaseId: string;
  testCaseArn: string;
  name: string;
  statusReason?: string;
  latestVersion: number;
  status: TestCaseLifecycle;
  creationTime: Date | string;
  lastUpdateTime: Date | string;
}
export type TestCaseSummaryList = Array<TestCaseSummary>;
export type TestConfigurationIdList = Array<string>;
export interface TestConfigurationLatestVersion {
  version: number;
  status: TestConfigurationLifecycle;
  statusReason?: string;
}
export type TestConfigurationLifecycle = "Active" | "Deleting";
export type TestConfigurationList = Array<TestConfigurationSummary>;
export interface TestConfigurationSummary {
  testConfigurationId: string;
  name: string;
  statusReason?: string;
  latestVersion: number;
  testConfigurationArn: string;
  status: TestConfigurationLifecycle;
  creationTime: Date | string;
  lastUpdateTime: Date | string;
}
export type TestRunIdList = Array<string>;
export type TestRunStatus = "Success" | "Running" | "Failed" | "Deleting";
export interface TestRunStepSummary {
  stepName: string;
  testRunId: string;
  testCaseId?: string;
  testCaseVersion?: number;
  testSuiteId?: string;
  testSuiteVersion?: number;
  beforeStep?: boolean;
  afterStep?: boolean;
  status: StepRunStatus;
  statusReason?: string;
  runStartTime: Date | string;
  runEndTime?: Date | string;
}
export type TestRunStepSummaryList = Array<TestRunStepSummary>;
export interface TestRunSummary {
  testRunId: string;
  testRunArn: string;
  testSuiteId: string;
  testSuiteVersion: number;
  testConfigurationId?: string;
  testConfigurationVersion?: number;
  status: TestRunStatus;
  statusReason?: string;
  runStartTime: Date | string;
  runEndTime?: Date | string;
}
export type TestRunSummaryList = Array<TestRunSummary>;
export type TestSuiteIdList = Array<string>;
export interface TestSuiteLatestVersion {
  version: number;
  status: TestSuiteLifecycle;
  statusReason?: string;
}
export type TestSuiteLifecycle =
  | "Creating"
  | "Updating"
  | "Active"
  | "Failed"
  | "Deleting";
export type TestSuiteList = Array<TestSuiteSummary>;
export interface TestSuiteSummary {
  testSuiteId: string;
  name: string;
  statusReason?: string;
  latestVersion: number;
  testSuiteArn: string;
  status: TestSuiteLifecycle;
  creationTime: Date | string;
  lastUpdateTime: Date | string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface TN3270 {
  script: Script;
  exportDataSetNames?: Array<string>;
}
export interface TN3270StepInput {
  resource: MainframeResourceSummary;
  script: ScriptSummary;
  exportDataSetNames?: Array<string>;
  properties?: MainframeActionProperties;
}
export interface TN3270StepOutput {
  dataSetExportLocation?: string;
  dmsOutputLocation?: string;
  dataSetDetails?: Array<DataSet>;
  scriptOutputLocation: string;
}
export interface TN3270Summary {
  stepInput: TN3270StepInput;
  stepOutput?: TN3270StepOutput;
}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateTestCaseRequest {
  testCaseId: string;
  description?: string;
  steps?: Array<Step>;
}
export interface UpdateTestCaseResponse {
  testCaseId: string;
  testCaseVersion: number;
}
export interface UpdateTestConfigurationRequest {
  testConfigurationId: string;
  description?: string;
  resources?: Array<Resource>;
  properties?: Record<string, string>;
  serviceSettings?: ServiceSettings;
}
export interface UpdateTestConfigurationResponse {
  testConfigurationId: string;
  testConfigurationVersion: number;
}
export interface UpdateTestSuiteRequest {
  testSuiteId: string;
  description?: string;
  beforeSteps?: Array<Step>;
  afterSteps?: Array<Step>;
  testCases?: TestCases;
}
export interface UpdateTestSuiteResponse {
  testSuiteId: string;
  testSuiteVersion?: number;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason?: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other";
export type Variable = string;

export type Version = number;

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTestCase {
  export type Input = CreateTestCaseRequest;
  export type Output = CreateTestCaseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTestConfiguration {
  export type Input = CreateTestConfigurationRequest;
  export type Output = CreateTestConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTestSuite {
  export type Input = CreateTestSuiteRequest;
  export type Output = CreateTestSuiteResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTestCase {
  export type Input = DeleteTestCaseRequest;
  export type Output = DeleteTestCaseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTestConfiguration {
  export type Input = DeleteTestConfigurationRequest;
  export type Output = DeleteTestConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTestRun {
  export type Input = DeleteTestRunRequest;
  export type Output = DeleteTestRunResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTestSuite {
  export type Input = DeleteTestSuiteRequest;
  export type Output = DeleteTestSuiteResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTestCase {
  export type Input = GetTestCaseRequest;
  export type Output = GetTestCaseResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTestConfiguration {
  export type Input = GetTestConfigurationRequest;
  export type Output = GetTestConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTestRunStep {
  export type Input = GetTestRunStepRequest;
  export type Output = GetTestRunStepResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTestSuite {
  export type Input = GetTestSuiteRequest;
  export type Output = GetTestSuiteResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestCases {
  export type Input = ListTestCasesRequest;
  export type Output = ListTestCasesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestConfigurations {
  export type Input = ListTestConfigurationsRequest;
  export type Output = ListTestConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestRunSteps {
  export type Input = ListTestRunStepsRequest;
  export type Output = ListTestRunStepsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestRunTestCases {
  export type Input = ListTestRunTestCasesRequest;
  export type Output = ListTestRunTestCasesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestRuns {
  export type Input = ListTestRunsRequest;
  export type Output = ListTestRunsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTestSuites {
  export type Input = ListTestSuitesRequest;
  export type Output = ListTestSuitesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartTestRun {
  export type Input = StartTestRunRequest;
  export type Output = StartTestRunResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTestCase {
  export type Input = UpdateTestCaseRequest;
  export type Output = UpdateTestCaseResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTestConfiguration {
  export type Input = UpdateTestConfigurationRequest;
  export type Output = UpdateTestConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTestSuite {
  export type Input = UpdateTestSuiteRequest;
  export type Output = UpdateTestSuiteResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
