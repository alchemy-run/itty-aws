import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const FilterValues = S.Array(S.String);
export class ActionFilter extends S.Class<ActionFilter>("ActionFilter")({key: S.String, matchOption: S.String, values: FilterValues}) {}
export const ActionFilterList = S.Array(ActionFilter);
export class RequestFilter extends S.Class<RequestFilter>("RequestFilter")({actions: S.optional(ActionFilterList)}) {}
export class ListRecommendedActionsRequest extends S.Class<ListRecommendedActionsRequest>("ListRecommendedActionsRequest")({filter: S.optional(RequestFilter), maxResults: S.optional(S.Number), nextToken: S.optional(S.String)}) {}
export const NextSteps = S.Array(S.String);
export const Context = S.Record({key: S.String, value: S.String});
export class RecommendedAction extends S.Class<RecommendedAction>("RecommendedAction")({id: S.optional(S.String), type: S.optional(S.String), accountId: S.optional(S.String), severity: S.optional(S.String), feature: S.optional(S.String), context: S.optional(Context), nextSteps: S.optional(NextSteps), lastUpdatedTimeStamp: S.optional(S.String)}) {}
export const RecommendedActions = S.Array(RecommendedAction);
export class ListRecommendedActionsResponse extends S.Class<ListRecommendedActionsResponse>("ListRecommendedActionsResponse")({recommendedActions: RecommendedActions, nextToken: S.optional(S.String)}) {}
export class ValidationExceptionField extends S.Class<ValidationExceptionField>("ValidationExceptionField")({name: S.String, message: S.String}) {}
export const ValidationExceptionFieldList = S.Array(ValidationExceptionField);

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {message: S.String}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {message: S.String}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {message: S.String}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {message: S.String, reason: S.String, fieldList: S.optional(ValidationExceptionFieldList)}) {};

//# Operations
/**
 * Returns a list of recommended actions that match the filter criteria.
 */export const listRecommendedActions = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2024-11-14", uri: "/", method: "POST", sdkId: "BCM Recommended Actions", sigV4ServiceName: "bcm-recommended-actions", name: "AWSBillingAndCostManagementRecommendedActions.ListRecommendedActions" }, ListRecommendedActionsRequest, ListRecommendedActionsResponse, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
