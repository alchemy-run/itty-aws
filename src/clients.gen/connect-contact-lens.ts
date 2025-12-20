import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const ListRealtimeContactAnalysisSegmentsRequest = Schema.Struct({InstanceId: Schema.String, ContactId: Schema.String, MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)})
const MatchedCategories = Schema.Array(Schema.String)
const PostContactSummary = Schema.Struct({Content: Schema.optional(Schema.String), Status: Schema.String, FailureCode: Schema.optional(Schema.String)})
const CharacterOffsets = Schema.Struct({BeginOffsetChar: Schema.Number, EndOffsetChar: Schema.Number})
const IssueDetected = Schema.Struct({CharacterOffsets: CharacterOffsets})
const IssuesDetected = Schema.Array(IssueDetected)
const PointOfInterest = Schema.Struct({BeginOffsetMillis: Schema.Number, EndOffsetMillis: Schema.Number})
const PointsOfInterest = Schema.Array(PointOfInterest)
const Transcript = Schema.Struct({Id: Schema.String, ParticipantId: Schema.String, ParticipantRole: Schema.String, Content: Schema.String, BeginOffsetMillis: Schema.Number, EndOffsetMillis: Schema.Number, Sentiment: Schema.optional(Schema.String), IssuesDetected: Schema.optional(IssuesDetected)})
const CategoryDetails = Schema.Struct({PointsOfInterest: PointsOfInterest})
const MatchedDetails = Schema.Record({key: Schema.String, value: CategoryDetails})
const Categories = Schema.Struct({MatchedCategories: MatchedCategories, MatchedDetails: MatchedDetails})
const RealtimeContactAnalysisSegment = Schema.Struct({Transcript: Schema.optional(Transcript), Categories: Schema.optional(Categories), PostContactSummary: Schema.optional(PostContactSummary)})
const RealtimeContactAnalysisSegments = Schema.Array(RealtimeContactAnalysisSegment)
const ListRealtimeContactAnalysisSegmentsResponse = Schema.Struct({Segments: RealtimeContactAnalysisSegments, NextToken: Schema.optional(Schema.String)})
const AccessDeniedException = Schema.Struct({Message: Schema.String})
const InternalServiceException = Schema.Struct({Message: Schema.optional(Schema.String)})
const InvalidRequestException = Schema.Struct({Message: Schema.optional(Schema.String)})
const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)})
const ThrottlingException = Schema.Struct({Message: Schema.String})
export const ListRealtimeContactAnalysisSegments = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/realtime-contact-analysis/analysis-segments", method: "POST", sdkId: "Connect Contact Lens", sigV4ServiceName: "connect", name: "ListRealtimeContactAnalysisSegments" }, ListRealtimeContactAnalysisSegmentsRequest, ListRealtimeContactAnalysisSegmentsResponse, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("InternalServiceException", InternalServiceException), ErrorAnnotation("InvalidRequestException", InvalidRequestException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ThrottlingException", ThrottlingException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
