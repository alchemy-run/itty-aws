import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const FilterValues = Schema.Array(Schema.String);
export const ActionFilter = Schema.Struct({key: Schema.String, matchOption: Schema.String, values: FilterValues});
export const ActionFilterList = Schema.Array(ActionFilter);
export const RequestFilter = Schema.Struct({actions: Schema.optional(ActionFilterList)});
export const ListRecommendedActionsRequest = Schema.Struct({filter: Schema.optional(RequestFilter), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const NextSteps = Schema.Array(Schema.String);
export const Context = Schema.Record({key: Schema.String, value: Schema.String});
export const RecommendedAction = Schema.Struct({id: Schema.optional(Schema.String), type: Schema.optional(Schema.String), accountId: Schema.optional(Schema.String), severity: Schema.optional(Schema.String), feature: Schema.optional(Schema.String), context: Schema.optional(Context), nextSteps: Schema.optional(NextSteps), lastUpdatedTimeStamp: Schema.optional(Schema.String)});
export const RecommendedActions = Schema.Array(RecommendedAction);
export const ListRecommendedActionsResponse = Schema.Struct({recommendedActions: RecommendedActions, nextToken: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({message: Schema.String});
export const InternalServerException = Schema.Struct({message: Schema.String});
export const ThrottlingException = Schema.Struct({message: Schema.String});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.String, reason: Schema.String, fieldList: Schema.optional(ValidationExceptionFieldList)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const listRecommendedActions = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-11-14", uri: "/", method: "POST", sdkId: "BCM Recommended Actions", sigV4ServiceName: "bcm-recommended-actions", name: "AWSBillingAndCostManagementRecommendedActions.ListRecommendedActions" }, ListRecommendedActionsRequest, ListRecommendedActionsResponse, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
