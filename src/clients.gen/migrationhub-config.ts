import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetHomeRegionRequest extends Schema.Class<GetHomeRegionRequest>("GetHomeRegionRequest")({}) {}
export class DeleteHomeRegionControlRequest extends Schema.Class<DeleteHomeRegionControlRequest>("DeleteHomeRegionControlRequest")({ControlId: Schema.String}) {}
export class DeleteHomeRegionControlResult extends Schema.Class<DeleteHomeRegionControlResult>("DeleteHomeRegionControlResult")({}) {}
export class Target extends Schema.Class<Target>("Target")({Type: Schema.String, Id: Schema.optional(Schema.String)}) {}
export class DescribeHomeRegionControlsRequest extends Schema.Class<DescribeHomeRegionControlsRequest>("DescribeHomeRegionControlsRequest")({ControlId: Schema.optional(Schema.String), HomeRegion: Schema.optional(Schema.String), Target: Schema.optional(Target), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export class GetHomeRegionResult extends Schema.Class<GetHomeRegionResult>("GetHomeRegionResult")({HomeRegion: Schema.optional(Schema.String)}) {}
export class CreateHomeRegionControlRequest extends Schema.Class<CreateHomeRegionControlRequest>("CreateHomeRegionControlRequest")({HomeRegion: Schema.String, Target: Target, DryRun: Schema.optional(Schema.Boolean)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.optional(Schema.String)}) {}
export class InternalServerError extends Schema.Class<InternalServerError>("InternalServerError")({Message: Schema.optional(Schema.String)}) {}
export class HomeRegionControl extends Schema.Class<HomeRegionControl>("HomeRegionControl")({ControlId: Schema.optional(Schema.String), HomeRegion: Schema.optional(Schema.String), Target: Schema.optional(Target), RequestedTime: Schema.optional(Schema.Date)}) {}
export const HomeRegionControls = Schema.Array(HomeRegionControl);
export class CreateHomeRegionControlResult extends Schema.Class<CreateHomeRegionControlResult>("CreateHomeRegionControlResult")({HomeRegionControl: Schema.optional(HomeRegionControl)}) {}
export class InvalidInputException extends Schema.Class<InvalidInputException>("InvalidInputException")({Message: Schema.optional(Schema.String)}) {}
export class DescribeHomeRegionControlsResult extends Schema.Class<DescribeHomeRegionControlsResult>("DescribeHomeRegionControlsResult")({HomeRegionControls: Schema.optional(HomeRegionControls), NextToken: Schema.optional(Schema.String)}) {}
export class ServiceUnavailableException extends Schema.Class<ServiceUnavailableException>("ServiceUnavailableException")({Message: Schema.optional(Schema.String)}) {}
export class DryRunOperation extends Schema.Class<DryRunOperation>("DryRunOperation")({Message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.String, RetryAfterSeconds: Schema.optional(Header("Retry-After", Schema.Number))}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerErrorError extends Schema.TaggedError<InternalServerErrorError>()("InternalServerError", InternalServerError.fields) {};
export class InvalidInputExceptionError extends Schema.TaggedError<InvalidInputExceptionError>()("InvalidInputException", InvalidInputException.fields) {};
export class ServiceUnavailableExceptionError extends Schema.TaggedError<ServiceUnavailableExceptionError>()("ServiceUnavailableException", ServiceUnavailableException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class DryRunOperationError extends Schema.TaggedError<DryRunOperationError>()("DryRunOperation", DryRunOperation.fields) {};

//# Operations
export const describeHomeRegionControls = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls" }, DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult, [AccessDeniedExceptionError, InternalServerErrorError, InvalidInputExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getHomeRegion = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.GetHomeRegion" }, GetHomeRegionRequest, GetHomeRegionResult, [AccessDeniedExceptionError, InternalServerErrorError, InvalidInputExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createHomeRegionControl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.CreateHomeRegionControl" }, CreateHomeRegionControlRequest, CreateHomeRegionControlResult, [AccessDeniedExceptionError, DryRunOperationError, InternalServerErrorError, InvalidInputExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteHomeRegionControl = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.DeleteHomeRegionControl" }, DeleteHomeRegionControlRequest, DeleteHomeRegionControlResult, [AccessDeniedExceptionError, InternalServerErrorError, InvalidInputExceptionError, ServiceUnavailableExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
