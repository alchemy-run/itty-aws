import * as Schema from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const FilterValues = Schema.Array(Schema.String);
export class ActionFilter extends Schema.Class<ActionFilter>("ActionFilter")({key: Schema.String, matchOption: Schema.String, values: FilterValues}) {}
export const ActionFilterList = Schema.Array(ActionFilter);
export class RequestFilter extends Schema.Class<RequestFilter>("RequestFilter")({actions: Schema.optional(ActionFilterList)}) {}
export class ListRecommendedActionsRequest extends Schema.Class<ListRecommendedActionsRequest>("ListRecommendedActionsRequest")({filter: Schema.optional(RequestFilter), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)}) {}
export const NextSteps = Schema.Array(Schema.String);
export const Context = Schema.Record({key: Schema.String, value: Schema.String});
export class RecommendedAction extends Schema.Class<RecommendedAction>("RecommendedAction")({id: Schema.optional(Schema.String), type: Schema.optional(Schema.String), accountId: Schema.optional(Schema.String), severity: Schema.optional(Schema.String), feature: Schema.optional(Schema.String), context: Schema.optional(Context), nextSteps: Schema.optional(NextSteps), lastUpdatedTimeStamp: Schema.optional(Schema.String)}) {}
export const RecommendedActions = Schema.Array(RecommendedAction);
export class ListRecommendedActionsResponse extends Schema.Class<ListRecommendedActionsResponse>("ListRecommendedActionsResponse")({recommendedActions: RecommendedActions, nextToken: Schema.optional(Schema.String)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({message: Schema.String}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({message: Schema.String}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({message: Schema.String}) {}
export class ValidationExceptionField extends Schema.Class<ValidationExceptionField>("ValidationExceptionField")({name: Schema.String, message: Schema.String}) {}
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const listRecommendedActions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-11-14", uri: "/", method: "POST", sdkId: "BCM Recommended Actions", sigV4ServiceName: "bcm-recommended-actions", name: "AWSBillingAndCostManagementRecommendedActions.ListRecommendedActions" }, ListRecommendedActionsRequest, ListRecommendedActionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
