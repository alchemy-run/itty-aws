import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetHomeRegionRequest extends S.Class<GetHomeRegionRequest>("GetHomeRegionRequest")({}) {}
export class DeleteHomeRegionControlRequest extends S.Class<DeleteHomeRegionControlRequest>("DeleteHomeRegionControlRequest")({ControlId: S.String}) {}
export class DeleteHomeRegionControlResult extends S.Class<DeleteHomeRegionControlResult>("DeleteHomeRegionControlResult")({}) {}
export class Target extends S.Class<Target>("Target")({Type: S.String, Id: S.optional(S.String)}) {}
export class DescribeHomeRegionControlsRequest extends S.Class<DescribeHomeRegionControlsRequest>("DescribeHomeRegionControlsRequest")({ControlId: S.optional(S.String), HomeRegion: S.optional(S.String), Target: S.optional(Target), MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class GetHomeRegionResult extends S.Class<GetHomeRegionResult>("GetHomeRegionResult")({HomeRegion: S.optional(S.String)}) {}
export class CreateHomeRegionControlRequest extends S.Class<CreateHomeRegionControlRequest>("CreateHomeRegionControlRequest")({HomeRegion: S.String, Target: Target, DryRun: S.optional(S.Boolean)}) {}
export class HomeRegionControl extends S.Class<HomeRegionControl>("HomeRegionControl")({ControlId: S.optional(S.String), HomeRegion: S.optional(S.String), Target: S.optional(Target), RequestedTime: S.optional(S.Date)}) {}
export const HomeRegionControls = S.Array(HomeRegionControl);
export class CreateHomeRegionControlResult extends S.Class<CreateHomeRegionControlResult>("CreateHomeRegionControlResult")({HomeRegionControl: S.optional(HomeRegionControl)}) {}
export class DescribeHomeRegionControlsResult extends S.Class<DescribeHomeRegionControlsResult>("DescribeHomeRegionControlsResult")({HomeRegionControls: S.optional(HomeRegionControls), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerError extends S.TaggedError<InternalServerError>()("InternalServerError", {}) {};
export class InvalidInputException extends S.TaggedError<InvalidInputException>()("InvalidInputException", {}) {};
export class ServiceUnavailableException extends S.TaggedError<ServiceUnavailableException>()("ServiceUnavailableException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class DryRunOperation extends S.TaggedError<DryRunOperation>()("DryRunOperation", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * This API permits filtering on the `ControlId` and `HomeRegion`
 * fields.
 */export const describeHomeRegionControls = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls" }, DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult, [AccessDeniedException, InternalServerError, InvalidInputException, ServiceUnavailableException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the calling account’s home region, if configured. This API is used by other AWS
 * services to determine the regional endpoint for calling AWS Application Discovery Service and
 * Migration Hub. You must call `GetHomeRegion` at least once before you call any
 * other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's
 * Migration Hub home region.
 */export const getHomeRegion = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.GetHomeRegion" }, GetHomeRegionRequest, GetHomeRegionResult, [AccessDeniedException, InternalServerError, InvalidInputException, ServiceUnavailableException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This API sets up the home region for the calling account only.
 */export const createHomeRegionControl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.CreateHomeRegionControl" }, CreateHomeRegionControlRequest, CreateHomeRegionControlResult, [AccessDeniedException, DryRunOperation, InternalServerError, InvalidInputException, ServiceUnavailableException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * This operation deletes the home region configuration for the calling account. The operation does not delete discovery or migration tracking data in the home region.
 */export const deleteHomeRegionControl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-06-30", uri: "/", method: "POST", sdkId: "MigrationHub Config", sigV4ServiceName: "mgh", name: "AWSMigrationHubMultiAccountService.DeleteHomeRegionControl" }, DeleteHomeRegionControlRequest, DeleteHomeRegionControlResult, [AccessDeniedException, InternalServerError, InvalidInputException, ServiceUnavailableException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
