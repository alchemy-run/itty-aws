import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GetHomeRegionRequest = Schema.Struct({});
export const DeleteHomeRegionControlRequest = Schema.Struct({ControlId: Schema.String});
export const DeleteHomeRegionControlResult = Schema.Struct({});
export const Target = Schema.Struct({Type: Schema.String, Id: Schema.optional(Schema.String)});
export const DescribeHomeRegionControlsRequest = Schema.Struct({ControlId: Schema.optional(Schema.String), HomeRegion: Schema.optional(Schema.String), Target: Schema.optional(Target), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const GetHomeRegionResult = Schema.Struct({HomeRegion: Schema.optional(Schema.String)});
export const CreateHomeRegionControlRequest = Schema.Struct({HomeRegion: Schema.String, Target: Target, DryRun: Schema.optional(Schema.Boolean)});
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InternalServerError = Schema.Struct({Message: Schema.optional(Schema.String)});
export const HomeRegionControl = Schema.Struct({ControlId: Schema.optional(Schema.String), HomeRegion: Schema.optional(Schema.String), Target: Schema.optional(Target), RequestedTime: Schema.optional(Schema.Date)});
export const HomeRegionControls = Schema.Array(HomeRegionControl);
export const CreateHomeRegionControlResult = Schema.Struct({HomeRegionControl: Schema.optional(HomeRegionControl)});
export const InvalidInputException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const DescribeHomeRegionControlsResult = Schema.Struct({HomeRegionControls: Schema.optional(HomeRegionControls), NextToken: Schema.optional(Schema.String)});
export const ServiceUnavailableException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const DryRunOperation = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.String, RetryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerErrorError extends Schema.TaggedError<InternalServerErrorError>()("InternalServerError", InternalServerError) {};
export class InvalidInputExceptionError extends Schema.TaggedError<InvalidInputExceptionError>()("InvalidInputException", InvalidInputException) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class DryRunOperationError extends Schema.TaggedError<DryRunOperationError>()("DryRunOperation", DryRunOperation) {};

//# Operations
export const describeHomeRegionControls = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls" }, DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult, [AccessDeniedExceptionError, InternalServerErrorError, InvalidInputExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getHomeRegion = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.GetHomeRegion" }, GetHomeRegionRequest, GetHomeRegionResult, [AccessDeniedExceptionError, InternalServerErrorError, InvalidInputExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createHomeRegionControl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.CreateHomeRegionControl" }, CreateHomeRegionControlRequest, CreateHomeRegionControlResult, [AccessDeniedExceptionError, DryRunOperationError, InternalServerErrorError, InvalidInputExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteHomeRegionControl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.DeleteHomeRegionControl" }, DeleteHomeRegionControlRequest, DeleteHomeRegionControlResult, [AccessDeniedExceptionError, InternalServerErrorError, InvalidInputExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
