import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class ListRealtimeContactAnalysisSegmentsRequest extends S.Class<ListRealtimeContactAnalysisSegmentsRequest>("ListRealtimeContactAnalysisSegmentsRequest")({InstanceId: S.String, ContactId: S.String, MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export const MatchedCategories = S.Array(S.String);
export class PostContactSummary extends S.Class<PostContactSummary>("PostContactSummary")({Content: S.optional(S.String), Status: S.String, FailureCode: S.optional(S.String)}) {}
export class CharacterOffsets extends S.Class<CharacterOffsets>("CharacterOffsets")({BeginOffsetChar: S.Number, EndOffsetChar: S.Number}) {}
export class IssueDetected extends S.Class<IssueDetected>("IssueDetected")({CharacterOffsets: CharacterOffsets}) {}
export const IssuesDetected = S.Array(IssueDetected);
export class PointOfInterest extends S.Class<PointOfInterest>("PointOfInterest")({BeginOffsetMillis: S.Number, EndOffsetMillis: S.Number}) {}
export const PointsOfInterest = S.Array(PointOfInterest);
export class Transcript extends S.Class<Transcript>("Transcript")({Id: S.String, ParticipantId: S.String, ParticipantRole: S.String, Content: S.String, BeginOffsetMillis: S.Number, EndOffsetMillis: S.Number, Sentiment: S.optional(S.String), IssuesDetected: S.optional(IssuesDetected)}) {}
export class CategoryDetails extends S.Class<CategoryDetails>("CategoryDetails")({PointsOfInterest: PointsOfInterest}) {}
export const MatchedDetails = S.Record({key: S.String, value: CategoryDetails});
export class Categories extends S.Class<Categories>("Categories")({MatchedCategories: MatchedCategories, MatchedDetails: MatchedDetails}) {}
export class RealtimeContactAnalysisSegment extends S.Class<RealtimeContactAnalysisSegment>("RealtimeContactAnalysisSegment")({Transcript: S.optional(Transcript), Categories: S.optional(Categories), PostContactSummary: S.optional(PostContactSummary)}) {}
export const RealtimeContactAnalysisSegments = S.Array(RealtimeContactAnalysisSegment);
export class ListRealtimeContactAnalysisSegmentsResponse extends S.Class<ListRealtimeContactAnalysisSegmentsResponse>("ListRealtimeContactAnalysisSegmentsResponse")({Segments: RealtimeContactAnalysisSegments, NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {Message: S.String}) {};
export class InternalServiceException extends S.TaggedError<InternalServiceException>()("InternalServiceException", {Message: S.optional(S.String)}) {};
export class InvalidRequestException extends S.TaggedError<InvalidRequestException>()("InvalidRequestException", {Message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {Message: S.optional(S.String)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {Message: S.String}) {};

//# Operations
/**
 * Provides a list of analysis segments for a real-time analysis session.
 */export const listRealtimeContactAnalysisSegments = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2020-08-21", uri: "/realtime-contact-analysis/analysis-segments", sdkId: "Connect Contact Lens", sigV4ServiceName: "connect", name: "AmazonConnectContactLens.ListRealtimeContactAnalysisSegments" }, ListRealtimeContactAnalysisSegmentsRequest, ListRealtimeContactAnalysisSegmentsResponse, [AccessDeniedException, InternalServiceException, InvalidRequestException, ResourceNotFoundException, ThrottlingException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
