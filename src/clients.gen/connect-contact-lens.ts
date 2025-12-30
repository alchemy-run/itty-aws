import * as Schema from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class ListRealtimeContactAnalysisSegmentsRequest extends Schema.Class<ListRealtimeContactAnalysisSegmentsRequest>("ListRealtimeContactAnalysisSegmentsRequest")({InstanceId: Schema.String, ContactId: Schema.String, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)}) {}
export const MatchedCategories = Schema.Array(Schema.String);
export class PostContactSummary extends Schema.Class<PostContactSummary>("PostContactSummary")({Content: Schema.optional(Schema.String), Status: Schema.String, FailureCode: Schema.optional(Schema.String)}) {}
export class CharacterOffsets extends Schema.Class<CharacterOffsets>("CharacterOffsets")({BeginOffsetChar: Schema.Number, EndOffsetChar: Schema.Number}) {}
export class IssueDetected extends Schema.Class<IssueDetected>("IssueDetected")({CharacterOffsets: CharacterOffsets}) {}
export const IssuesDetected = Schema.Array(IssueDetected);
export class PointOfInterest extends Schema.Class<PointOfInterest>("PointOfInterest")({BeginOffsetMillis: Schema.Number, EndOffsetMillis: Schema.Number}) {}
export const PointsOfInterest = Schema.Array(PointOfInterest);
export class Transcript extends Schema.Class<Transcript>("Transcript")({Id: Schema.String, ParticipantId: Schema.String, ParticipantRole: Schema.String, Content: Schema.String, BeginOffsetMillis: Schema.Number, EndOffsetMillis: Schema.Number, Sentiment: Schema.optional(Schema.String), IssuesDetected: Schema.optional(IssuesDetected)}) {}
export class CategoryDetails extends Schema.Class<CategoryDetails>("CategoryDetails")({PointsOfInterest: PointsOfInterest}) {}
export const MatchedDetails = Schema.Record({key: Schema.String, value: CategoryDetails});
export class Categories extends Schema.Class<Categories>("Categories")({MatchedCategories: MatchedCategories, MatchedDetails: MatchedDetails}) {}
export class RealtimeContactAnalysisSegment extends Schema.Class<RealtimeContactAnalysisSegment>("RealtimeContactAnalysisSegment")({Transcript: Schema.optional(Transcript), Categories: Schema.optional(Categories), PostContactSummary: Schema.optional(PostContactSummary)}) {}
export const RealtimeContactAnalysisSegments = Schema.Array(RealtimeContactAnalysisSegment);
export class ListRealtimeContactAnalysisSegmentsResponse extends Schema.Class<ListRealtimeContactAnalysisSegmentsResponse>("ListRealtimeContactAnalysisSegmentsResponse")({Segments: RealtimeContactAnalysisSegments, NextToken: Schema.optional(Schema.String)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.String}) {}
export class InternalServiceException extends Schema.Class<InternalServiceException>("InternalServiceException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidRequestException extends Schema.Class<InvalidRequestException>("InvalidRequestException")({Message: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.String}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServiceExceptionError extends Schema.TaggedError<InternalServiceExceptionError>()("InternalServiceException", InternalServiceException.fields) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};

//# Operations
export const listRealtimeContactAnalysisSegments = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-08-21", uri: "/realtime-contact-analysis/analysis-segments", method: "POST", sdkId: "Connect Contact Lens", sigV4ServiceName: "connect", name: "AmazonConnectContactLens.ListRealtimeContactAnalysisSegments" }, ListRealtimeContactAnalysisSegmentsRequest, ListRealtimeContactAnalysisSegmentsResponse, [AccessDeniedExceptionError, InternalServiceExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
