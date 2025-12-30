import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const FragmentNumberList = Schema.Array(Schema.String);
export const GetMediaForFragmentListInput = Schema.Struct({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), Fragments: FragmentNumberList});
export const FormatConfig = Schema.Record({key: Schema.String, value: Schema.String});
export const GetImagesInput = Schema.Struct({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), ImageSelectorType: Schema.String, StartTimestamp: Schema.Date, EndTimestamp: Schema.Date, SamplingInterval: Schema.optional(Schema.Number), Format: Schema.String, FormatConfig: Schema.optional(FormatConfig), WidthPixels: Schema.optional(Schema.Number), HeightPixels: Schema.optional(Schema.Number), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const GetMediaForFragmentListOutput = Schema.Struct({ContentType: Schema.optional(Header("Content-Type")), Payload: Schema.optional(Body("undefined", StreamBody()))});
export const ClipTimestampRange = Schema.Struct({StartTimestamp: Schema.Date, EndTimestamp: Schema.Date});
export const DASHTimestampRange = Schema.Struct({StartTimestamp: Schema.optional(Schema.Date), EndTimestamp: Schema.optional(Schema.Date)});
export const HLSTimestampRange = Schema.Struct({StartTimestamp: Schema.optional(Schema.Date), EndTimestamp: Schema.optional(Schema.Date)});
export const TimestampRange = Schema.Struct({StartTimestamp: Schema.Date, EndTimestamp: Schema.Date});
export const ClipFragmentSelector = Schema.Struct({FragmentSelectorType: Schema.String, TimestampRange: ClipTimestampRange});
export const DASHFragmentSelector = Schema.Struct({FragmentSelectorType: Schema.optional(Schema.String), TimestampRange: Schema.optional(DASHTimestampRange)});
export const HLSFragmentSelector = Schema.Struct({FragmentSelectorType: Schema.optional(Schema.String), TimestampRange: Schema.optional(HLSTimestampRange)});
export const FragmentSelector = Schema.Struct({FragmentSelectorType: Schema.String, TimestampRange: TimestampRange});
export const GetClipInput = Schema.Struct({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), ClipFragmentSelector: ClipFragmentSelector});
export const GetDASHStreamingSessionURLInput = Schema.Struct({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), PlaybackMode: Schema.optional(Schema.String), DisplayFragmentTimestamp: Schema.optional(Schema.String), DisplayFragmentNumber: Schema.optional(Schema.String), DASHFragmentSelector: Schema.optional(DASHFragmentSelector), Expires: Schema.optional(Schema.Number), MaxManifestFragmentResults: Schema.optional(Schema.Number)});
export const GetHLSStreamingSessionURLInput = Schema.Struct({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), PlaybackMode: Schema.optional(Schema.String), HLSFragmentSelector: Schema.optional(HLSFragmentSelector), ContainerFormat: Schema.optional(Schema.String), DiscontinuityMode: Schema.optional(Schema.String), DisplayFragmentTimestamp: Schema.optional(Schema.String), Expires: Schema.optional(Schema.Number), MaxMediaPlaylistFragmentResults: Schema.optional(Schema.Number)});
export const ClientLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ListFragmentsInput = Schema.Struct({StreamName: Schema.optional(Schema.String), StreamARN: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String), FragmentSelector: Schema.optional(FragmentSelector)});
export const Image = Schema.Struct({TimeStamp: Schema.optional(Schema.Date), Error: Schema.optional(Schema.String), ImageContent: Schema.optional(Schema.String)});
export const Images = Schema.Array(Image);
export const GetClipOutput = Schema.Struct({ContentType: Schema.optional(Header("Content-Type")), Payload: Schema.optional(Body("undefined", StreamBody()))});
export const GetDASHStreamingSessionURLOutput = Schema.Struct({DASHStreamingSessionURL: Schema.optional(Schema.String)});
export const GetHLSStreamingSessionURLOutput = Schema.Struct({HLSStreamingSessionURL: Schema.optional(Schema.String)});
export const GetImagesOutput = Schema.Struct({Images: Schema.optional(Images), NextToken: Schema.optional(Schema.String)});
export const InvalidArgumentException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const Fragment = Schema.Struct({FragmentNumber: Schema.optional(Schema.String), FragmentSizeInBytes: Schema.optional(Schema.Number), ProducerTimestamp: Schema.optional(Schema.Date), ServerTimestamp: Schema.optional(Schema.Date), FragmentLengthInMilliseconds: Schema.optional(Schema.Number)});
export const FragmentList = Schema.Array(Fragment);
export const InvalidCodecPrivateDataException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const MissingCodecPrivateDataException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const NoDataRetentionException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const NotAuthorizedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ListFragmentsOutput = Schema.Struct({Fragments: Schema.optional(FragmentList), NextToken: Schema.optional(Schema.String)});
export const InvalidMediaFrameException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const UnsupportedStreamMediaTypeException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class ClientLimitExceededExceptionError extends Schema.TaggedError<ClientLimitExceededExceptionError>()("ClientLimitExceededException", ClientLimitExceededException) {};
export class InvalidArgumentExceptionError extends Schema.TaggedError<InvalidArgumentExceptionError>()("InvalidArgumentException", InvalidArgumentException) {};
export class InvalidCodecPrivateDataExceptionError extends Schema.TaggedError<InvalidCodecPrivateDataExceptionError>()("InvalidCodecPrivateDataException", InvalidCodecPrivateDataException) {};
export class MissingCodecPrivateDataExceptionError extends Schema.TaggedError<MissingCodecPrivateDataExceptionError>()("MissingCodecPrivateDataException", MissingCodecPrivateDataException) {};
export class NoDataRetentionExceptionError extends Schema.TaggedError<NoDataRetentionExceptionError>()("NoDataRetentionException", NoDataRetentionException) {};
export class NotAuthorizedExceptionError extends Schema.TaggedError<NotAuthorizedExceptionError>()("NotAuthorizedException", NotAuthorizedException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class UnsupportedStreamMediaTypeExceptionError extends Schema.TaggedError<UnsupportedStreamMediaTypeExceptionError>()("UnsupportedStreamMediaTypeException", UnsupportedStreamMediaTypeException) {};
export class InvalidMediaFrameExceptionError extends Schema.TaggedError<InvalidMediaFrameExceptionError>()("InvalidMediaFrameException", InvalidMediaFrameException) {};

//# Operations
export const getHLSStreamingSessionURL = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-30", uri: "/getHLSStreamingSessionURL", method: "POST", sdkId: "Kinesis Video Archived Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityReader.GetHLSStreamingSessionURL" }, GetHLSStreamingSessionURLInput, GetHLSStreamingSessionURLOutput, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, InvalidCodecPrivateDataExceptionError, MissingCodecPrivateDataExceptionError, NoDataRetentionExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError, UnsupportedStreamMediaTypeExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getImages = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-30", uri: "/getImages", method: "POST", sdkId: "Kinesis Video Archived Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityReader.GetImages" }, GetImagesInput, GetImagesOutput, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, NoDataRetentionExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getMediaForFragmentList = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-30", uri: "/getMediaForFragmentList", method: "POST", sdkId: "Kinesis Video Archived Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityReader.GetMediaForFragmentList" }, GetMediaForFragmentListInput, GetMediaForFragmentListOutput, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listFragments = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-30", uri: "/listFragments", method: "POST", sdkId: "Kinesis Video Archived Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityReader.ListFragments" }, ListFragmentsInput, ListFragmentsOutput, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getClip = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-30", uri: "/getClip", method: "POST", sdkId: "Kinesis Video Archived Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityReader.GetClip" }, GetClipInput, GetClipOutput, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, InvalidCodecPrivateDataExceptionError, InvalidMediaFrameExceptionError, MissingCodecPrivateDataExceptionError, NoDataRetentionExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError, UnsupportedStreamMediaTypeExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getDASHStreamingSessionURL = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-09-30", uri: "/getDASHStreamingSessionURL", method: "POST", sdkId: "Kinesis Video Archived Media", sigV4ServiceName: "kinesisvideo", name: "AWSAcuityReader.GetDASHStreamingSessionURL" }, GetDASHStreamingSessionURLInput, GetDASHStreamingSessionURLOutput, [ClientLimitExceededExceptionError, InvalidArgumentExceptionError, InvalidCodecPrivateDataExceptionError, MissingCodecPrivateDataExceptionError, NoDataRetentionExceptionError, NotAuthorizedExceptionError, ResourceNotFoundExceptionError, UnsupportedStreamMediaTypeExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
