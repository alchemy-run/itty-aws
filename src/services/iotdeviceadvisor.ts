import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const TagKeyList = S.Array(S.String);
export class DeleteSuiteDefinitionRequest extends S.Class<DeleteSuiteDefinitionRequest>("DeleteSuiteDefinitionRequest")({suiteDefinitionId: S.String}) {}
export class DeleteSuiteDefinitionResponse extends S.Class<DeleteSuiteDefinitionResponse>("DeleteSuiteDefinitionResponse")({}) {}
export class GetEndpointRequest extends S.Class<GetEndpointRequest>("GetEndpointRequest")({thingArn: S.optional(S.String), certificateArn: S.optional(S.String), deviceRoleArn: S.optional(S.String), authenticationMethod: S.optional(S.String)}) {}
export class GetSuiteDefinitionRequest extends S.Class<GetSuiteDefinitionRequest>("GetSuiteDefinitionRequest")({suiteDefinitionId: S.String, suiteDefinitionVersion: S.optional(S.String)}) {}
export class GetSuiteRunRequest extends S.Class<GetSuiteRunRequest>("GetSuiteRunRequest")({suiteDefinitionId: S.String, suiteRunId: S.String}) {}
export class GetSuiteRunReportRequest extends S.Class<GetSuiteRunReportRequest>("GetSuiteRunReportRequest")({suiteDefinitionId: S.String, suiteRunId: S.String}) {}
export class ListSuiteDefinitionsRequest extends S.Class<ListSuiteDefinitionsRequest>("ListSuiteDefinitionsRequest")({maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListSuiteRunsRequest extends S.Class<ListSuiteRunsRequest>("ListSuiteRunsRequest")({suiteDefinitionId: S.optional(S.String), suiteDefinitionVersion: S.optional(S.String), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export class ListTagsForResourceRequest extends S.Class<ListTagsForResourceRequest>("ListTagsForResourceRequest")({resourceArn: S.String}) {}
export class StopSuiteRunRequest extends S.Class<StopSuiteRunRequest>("StopSuiteRunRequest")({suiteDefinitionId: S.String, suiteRunId: S.String}) {}
export class StopSuiteRunResponse extends S.Class<StopSuiteRunResponse>("StopSuiteRunResponse")({}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagResourceRequest extends S.Class<TagResourceRequest>("TagResourceRequest")({resourceArn: S.String, tags: TagMap}) {}
export class TagResourceResponse extends S.Class<TagResourceResponse>("TagResourceResponse")({}) {}
export class UntagResourceRequest extends S.Class<UntagResourceRequest>("UntagResourceRequest")({resourceArn: S.String, tagKeys: TagKeyList}) {}
export class UntagResourceResponse extends S.Class<UntagResourceResponse>("UntagResourceResponse")({}) {}
export class DeviceUnderTest extends S.Class<DeviceUnderTest>("DeviceUnderTest")({thingArn: S.optional(S.String), certificateArn: S.optional(S.String), deviceRoleArn: S.optional(S.String)}) {}
export const DeviceUnderTestList = S.Array(DeviceUnderTest);
export class SuiteDefinitionConfiguration extends S.Class<SuiteDefinitionConfiguration>("SuiteDefinitionConfiguration")({suiteDefinitionName: S.String, devices: S.optional(DeviceUnderTestList), intendedForQualification: S.optional(S.Boolean), isLongDurationTest: S.optional(S.Boolean), rootGroup: S.String, devicePermissionRoleArn: S.String, protocol: S.optional(S.String)}) {}
export class UpdateSuiteDefinitionRequest extends S.Class<UpdateSuiteDefinitionRequest>("UpdateSuiteDefinitionRequest")({suiteDefinitionId: S.String, suiteDefinitionConfiguration: SuiteDefinitionConfiguration}) {}
export const SelectedTestList = S.Array(S.String);
export class SuiteRunConfiguration extends S.Class<SuiteRunConfiguration>("SuiteRunConfiguration")({primaryDevice: DeviceUnderTest, selectedTestList: S.optional(SelectedTestList), parallelRun: S.optional(S.Boolean)}) {}
export class GetEndpointResponse extends S.Class<GetEndpointResponse>("GetEndpointResponse")({endpoint: S.optional(S.String)}) {}
export class GetSuiteDefinitionResponse extends S.Class<GetSuiteDefinitionResponse>("GetSuiteDefinitionResponse")({suiteDefinitionId: S.optional(S.String), suiteDefinitionArn: S.optional(S.String), suiteDefinitionVersion: S.optional(S.String), latestVersion: S.optional(S.String), suiteDefinitionConfiguration: S.optional(SuiteDefinitionConfiguration), createdAt: S.optional(S.Date), lastModifiedAt: S.optional(S.Date), tags: S.optional(TagMap)}) {}
export class GetSuiteRunReportResponse extends S.Class<GetSuiteRunReportResponse>("GetSuiteRunReportResponse")({qualificationReportDownloadUrl: S.optional(S.String)}) {}
export class ListTagsForResourceResponse extends S.Class<ListTagsForResourceResponse>("ListTagsForResourceResponse")({tags: S.optional(TagMap)}) {}
export class StartSuiteRunRequest extends S.Class<StartSuiteRunRequest>("StartSuiteRunRequest")({suiteDefinitionId: S.String, suiteDefinitionVersion: S.optional(S.String), suiteRunConfiguration: SuiteRunConfiguration, tags: S.optional(TagMap)}) {}
export class UpdateSuiteDefinitionResponse extends S.Class<UpdateSuiteDefinitionResponse>("UpdateSuiteDefinitionResponse")({suiteDefinitionId: S.optional(S.String), suiteDefinitionArn: S.optional(S.String), suiteDefinitionName: S.optional(S.String), suiteDefinitionVersion: S.optional(S.String), createdAt: S.optional(S.Date), lastUpdatedAt: S.optional(S.Date)}) {}
export class SuiteDefinitionInformation extends S.Class<SuiteDefinitionInformation>("SuiteDefinitionInformation")({suiteDefinitionId: S.optional(S.String), suiteDefinitionName: S.optional(S.String), defaultDevices: S.optional(DeviceUnderTestList), intendedForQualification: S.optional(S.Boolean), isLongDurationTest: S.optional(S.Boolean), protocol: S.optional(S.String), createdAt: S.optional(S.Date)}) {}
export const SuiteDefinitionInformationList = S.Array(SuiteDefinitionInformation);
export class SuiteRunInformation extends S.Class<SuiteRunInformation>("SuiteRunInformation")({suiteDefinitionId: S.optional(S.String), suiteDefinitionVersion: S.optional(S.String), suiteDefinitionName: S.optional(S.String), suiteRunId: S.optional(S.String), createdAt: S.optional(S.Date), startedAt: S.optional(S.Date), endAt: S.optional(S.Date), status: S.optional(S.String), passed: S.optional(S.Number), failed: S.optional(S.Number)}) {}
export const SuiteRunsList = S.Array(SuiteRunInformation);
export class CreateSuiteDefinitionRequest extends S.Class<CreateSuiteDefinitionRequest>("CreateSuiteDefinitionRequest")({suiteDefinitionConfiguration: SuiteDefinitionConfiguration, tags: S.optional(TagMap), clientToken: S.optional(S.String)}) {}
export class ListSuiteDefinitionsResponse extends S.Class<ListSuiteDefinitionsResponse>("ListSuiteDefinitionsResponse")({suiteDefinitionInformationList: S.optional(SuiteDefinitionInformationList), nextToken: S.optional(S.String)}) {}
export class ListSuiteRunsResponse extends S.Class<ListSuiteRunsResponse>("ListSuiteRunsResponse")({suiteRunsList: S.optional(SuiteRunsList), nextToken: S.optional(S.String)}) {}
export class StartSuiteRunResponse extends S.Class<StartSuiteRunResponse>("StartSuiteRunResponse")({suiteRunId: S.optional(S.String), suiteRunArn: S.optional(S.String), createdAt: S.optional(S.Date), endpoint: S.optional(S.String)}) {}
export class CreateSuiteDefinitionResponse extends S.Class<CreateSuiteDefinitionResponse>("CreateSuiteDefinitionResponse")({suiteDefinitionId: S.optional(S.String), suiteDefinitionArn: S.optional(S.String), suiteDefinitionName: S.optional(S.String), createdAt: S.optional(S.Date)}) {}
export class TestCaseScenario extends S.Class<TestCaseScenario>("TestCaseScenario")({testCaseScenarioId: S.optional(S.String), testCaseScenarioType: S.optional(S.String), status: S.optional(S.String), failure: S.optional(S.String), systemMessage: S.optional(S.String)}) {}
export const TestCaseScenariosList = S.Array(TestCaseScenario);
export class TestCaseRun extends S.Class<TestCaseRun>("TestCaseRun")({testCaseRunId: S.optional(S.String), testCaseDefinitionId: S.optional(S.String), testCaseDefinitionName: S.optional(S.String), status: S.optional(S.String), startTime: S.optional(S.Date), endTime: S.optional(S.Date), logUrl: S.optional(S.String), warnings: S.optional(S.String), failure: S.optional(S.String), testScenarios: S.optional(TestCaseScenariosList)}) {}
export const TestCaseRuns = S.Array(TestCaseRun);
export class GroupResult extends S.Class<GroupResult>("GroupResult")({groupId: S.optional(S.String), groupName: S.optional(S.String), tests: S.optional(TestCaseRuns)}) {}
export const GroupResultList = S.Array(GroupResult);
export class TestResult extends S.Class<TestResult>("TestResult")({groups: S.optional(GroupResultList)}) {}
export class GetSuiteRunResponse extends S.Class<GetSuiteRunResponse>("GetSuiteRunResponse")({suiteDefinitionId: S.optional(S.String), suiteDefinitionVersion: S.optional(S.String), suiteRunId: S.optional(S.String), suiteRunArn: S.optional(S.String), suiteRunConfiguration: S.optional(SuiteRunConfiguration), testResult: S.optional(TestResult), startTime: S.optional(S.Date), endTime: S.optional(S.Date), status: S.optional(S.String), errorReason: S.optional(S.String), tags: S.optional(TagMap)}) {}

//# Errors
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {message: S.optional(S.String)}) {};

//# Operations
/**
 * Removes tags from an IoT Device Advisor resource.
 * 
 * 
 * Requires permission to access the UntagResource action.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.UntagResource" }, UntagResourceRequest, UntagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a Device Advisor test suite.
 * 
 * 
 * Requires permission to access the DeleteSuiteDefinition action.
 */export const deleteSuiteDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteDefinitions/{suiteDefinitionId}", method: "DELETE", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.DeleteSuiteDefinition" }, DeleteSuiteDefinitionRequest, DeleteSuiteDefinitionResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about an Device Advisor endpoint.
 */export const getEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/endpoint", method: "GET", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.GetEndpoint" }, GetEndpointRequest, GetEndpointResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Device Advisor test suite.
 * 
 * 
 * Requires permission to access the GetSuiteDefinition action.
 */export const getSuiteDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteDefinitions/{suiteDefinitionId}", method: "GET", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.GetSuiteDefinition" }, GetSuiteDefinitionRequest, GetSuiteDefinitionResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets a report download link for a successful Device Advisor qualifying test suite run.
 * 
 * 
 * Requires permission to access the GetSuiteRunReport action.
 */export const getSuiteRunReport = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report", method: "GET", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.GetSuiteRunReport" }, GetSuiteRunReportRequest, GetSuiteRunReportResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the tags attached to an IoT Device Advisor resource.
 * 
 * 
 * Requires permission to access the ListTagsForResource action.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/tags/{resourceArn}", method: "GET", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.ListTagsForResource" }, ListTagsForResourceRequest, ListTagsForResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Stops a Device Advisor test suite run that is currently running.
 * 
 * 
 * Requires permission to access the StopSuiteRun action.
 */export const stopSuiteRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop", method: "POST", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.StopSuiteRun" }, StopSuiteRunRequest, StopSuiteRunResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Adds to and modifies existing tags of an IoT Device Advisor resource.
 * 
 * 
 * Requires permission to access the TagResource action.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/tags/{resourceArn}", method: "POST", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.TagResource" }, TagResourceRequest, TagResourceResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Updates a Device Advisor test suite.
 * 
 * 
 * Requires permission to access the UpdateSuiteDefinition action.
 */export const updateSuiteDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteDefinitions/{suiteDefinitionId}", method: "PATCH", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.UpdateSuiteDefinition" }, UpdateSuiteDefinitionRequest, UpdateSuiteDefinitionResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Device Advisor test suites you have created.
 * 
 * 
 * Requires permission to access the ListSuiteDefinitions action.
 */export const listSuiteDefinitions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteDefinitions", method: "GET", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.ListSuiteDefinitions" }, ListSuiteDefinitionsRequest, ListSuiteDefinitionsResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists runs of the specified Device Advisor test suite. You can list all runs of the test
 * suite, or the runs of a specific version of the test suite.
 * 
 * 
 * Requires permission to access the ListSuiteRuns action.
 */export const listSuiteRuns = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteRuns", method: "GET", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.ListSuiteRuns" }, ListSuiteRunsRequest, ListSuiteRunsResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a Device Advisor test suite.
 * 
 * 
 * Requires permission to access the CreateSuiteDefinition action.
 */export const createSuiteDefinition = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteDefinitions", method: "POST", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.CreateSuiteDefinition" }, CreateSuiteDefinitionRequest, CreateSuiteDefinitionResponse, [InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Starts a Device Advisor test suite run.
 * 
 * 
 * Requires permission to access the StartSuiteRun action.
 */export const startSuiteRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns", method: "POST", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.StartSuiteRun" }, StartSuiteRunRequest, StartSuiteRunResponse, [ConflictException, InternalServerException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Gets information about a Device Advisor test suite run.
 * 
 * 
 * Requires permission to access the GetSuiteRun action.
 */export const getSuiteRun = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-09-18", uri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}", method: "GET", sdkId: "IotDeviceAdvisor", sigV4ServiceName: "iotdeviceadvisor", name: "IotSenateService.GetSuiteRun" }, GetSuiteRunRequest, GetSuiteRunResponse, [InternalServerException, ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
