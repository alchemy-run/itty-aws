import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const ListRealtimeContactAnalysisSegmentsRequest = Schema.Struct({InstanceId: Schema.String, ContactId: Schema.String, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const MatchedCategories = Schema.Array(Schema.String);
export const PostContactSummary = Schema.Struct({Content: Schema.optional(Schema.String), Status: Schema.String, FailureCode: Schema.optional(Schema.String)});
export const CharacterOffsets = Schema.Struct({BeginOffsetChar: Schema.Number, EndOffsetChar: Schema.Number});
export const IssueDetected = Schema.Struct({CharacterOffsets: CharacterOffsets});
export const IssuesDetected = Schema.Array(IssueDetected);
export const PointOfInterest = Schema.Struct({BeginOffsetMillis: Schema.Number, EndOffsetMillis: Schema.Number});
export const PointsOfInterest = Schema.Array(PointOfInterest);
export const Transcript = Schema.Struct({Id: Schema.String, ParticipantId: Schema.String, ParticipantRole: Schema.String, Content: Schema.String, BeginOffsetMillis: Schema.Number, EndOffsetMillis: Schema.Number, Sentiment: Schema.optional(Schema.String), IssuesDetected: Schema.optional(IssuesDetected)});
export const CategoryDetails = Schema.Struct({PointsOfInterest: PointsOfInterest});
export const MatchedDetails = Schema.Record({key: Schema.String, value: CategoryDetails});
export const Categories = Schema.Struct({MatchedCategories: MatchedCategories, MatchedDetails: MatchedDetails});
export const RealtimeContactAnalysisSegment = Schema.Struct({Transcript: Schema.optional(Transcript), Categories: Schema.optional(Categories), PostContactSummary: Schema.optional(PostContactSummary)});
export const RealtimeContactAnalysisSegments = Schema.Array(RealtimeContactAnalysisSegment);
export const ListRealtimeContactAnalysisSegmentsResponse = Schema.Struct({Segments: RealtimeContactAnalysisSegments, NextToken: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({Message: Schema.String});
export const InternalServiceException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidRequestException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.String});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServiceExceptionError extends Schema.TaggedError<InternalServiceExceptionError>()("InternalServiceException", InternalServiceException) {};
export class InvalidRequestExceptionError extends Schema.TaggedError<InvalidRequestExceptionError>()("InvalidRequestException", InvalidRequestException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};

//# Operations
export const listRealtimeContactAnalysisSegments = /*#__PURE__*/ makeOperation(() => Operation({ version: "2020-08-21", uri: "/realtime-contact-analysis/analysis-segments", method: "POST", sdkId: "Connect Contact Lens", sigV4ServiceName: "connect", name: "AmazonConnectContactLens.ListRealtimeContactAnalysisSegments" }, ListRealtimeContactAnalysisSegmentsRequest, ListRealtimeContactAnalysisSegmentsResponse, [AccessDeniedExceptionError, InternalServiceExceptionError, InvalidRequestExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
