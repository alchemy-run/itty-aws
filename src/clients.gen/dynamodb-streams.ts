import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetRecordsInput extends Schema.Class<GetRecordsInput>("GetRecordsInput")({ShardIterator: Schema.String, Limit: Schema.optional(Schema.Number)}) {}
export class GetShardIteratorInput extends Schema.Class<GetShardIteratorInput>("GetShardIteratorInput")({StreamArn: Schema.String, ShardId: Schema.String, ShardIteratorType: Schema.String, SequenceNumber: Schema.optional(Schema.String)}) {}
export class ListStreamsInput extends Schema.Class<ListStreamsInput>("ListStreamsInput")({TableName: Schema.optional(Schema.String), Limit: Schema.optional(Schema.Number), ExclusiveStartStreamArn: Schema.optional(Schema.String)}) {}
export class ShardFilter extends Schema.Class<ShardFilter>("ShardFilter")({Type: Schema.optional(Schema.String), ShardId: Schema.optional(Schema.String)}) {}
export class DescribeStreamInput extends Schema.Class<DescribeStreamInput>("DescribeStreamInput")({StreamArn: Schema.String, Limit: Schema.optional(Schema.Number), ExclusiveStartShardId: Schema.optional(Schema.String), ShardFilter: Schema.optional(ShardFilter)}) {}
export class GetShardIteratorOutput extends Schema.Class<GetShardIteratorOutput>("GetShardIteratorOutput")({ShardIterator: Schema.optional(Schema.String)}) {}
export class Stream extends Schema.Class<Stream>("Stream")({StreamArn: Schema.optional(Schema.String), TableName: Schema.optional(Schema.String), StreamLabel: Schema.optional(Schema.String)}) {}
export const StreamList = Schema.Array(Stream);
export class InternalServerError extends Schema.Class<InternalServerError>("InternalServerError")({message: Schema.optional(Schema.String)}) {}
export class ListStreamsOutput extends Schema.Class<ListStreamsOutput>("ListStreamsOutput")({Streams: Schema.optional(StreamList), LastEvaluatedStreamArn: Schema.optional(Schema.String)}) {}
export class Identity extends Schema.Class<Identity>("Identity")({PrincipalId: Schema.optional(Schema.String), Type: Schema.optional(Schema.String)}) {}
export const StringSetAttributeValue = Schema.Array(Schema.String);
export const NumberSetAttributeValue = Schema.Array(Schema.String);
export const BinarySetAttributeValue = Schema.Array(StreamBody());
export const ListAttributeValue = Schema.Array(Schema.suspend(() => AttributeValue));
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: Schema.optional(Schema.String)}) {}
export class KeySchemaElement extends Schema.Class<KeySchemaElement>("KeySchemaElement")({AttributeName: Schema.String, KeyType: Schema.String}) {}
export const KeySchema = Schema.Array(KeySchemaElement);
export class SequenceNumberRange extends Schema.Class<SequenceNumberRange>("SequenceNumberRange")({StartingSequenceNumber: Schema.optional(Schema.String), EndingSequenceNumber: Schema.optional(Schema.String)}) {}
export const MapAttributeValue = Schema.Record({key: Schema.String, value: AttributeValue});
export class TrimmedDataAccessException extends Schema.Class<TrimmedDataAccessException>("TrimmedDataAccessException")({message: Schema.optional(Schema.String)}) {}
export class Shard extends Schema.Class<Shard>("Shard")({ShardId: Schema.optional(Schema.String), SequenceNumberRange: Schema.optional(SequenceNumberRange), ParentShardId: Schema.optional(Schema.String)}) {}
export const ShardDescriptionList = Schema.Array(Shard);
export const AttributeValue = Schema.Union(Schema.String, Schema.String, StreamBody(), StringSetAttributeValue, NumberSetAttributeValue, BinarySetAttributeValue, Schema.suspend(() => MapAttributeValue), Schema.suspend(() => ListAttributeValue), Schema.Boolean, Schema.Boolean);
export class StreamDescription extends Schema.Class<StreamDescription>("StreamDescription")({StreamArn: Schema.optional(Schema.String), StreamLabel: Schema.optional(Schema.String), StreamStatus: Schema.optional(Schema.String), StreamViewType: Schema.optional(Schema.String), CreationRequestDateTime: Schema.optional(Schema.Date), TableName: Schema.optional(Schema.String), KeySchema: Schema.optional(KeySchema), Shards: Schema.optional(ShardDescriptionList), LastEvaluatedShardId: Schema.optional(Schema.String)}) {}
export const AttributeMap = Schema.Record({key: Schema.String, value: AttributeValue});
export class DescribeStreamOutput extends Schema.Class<DescribeStreamOutput>("DescribeStreamOutput")({StreamDescription: Schema.optional(StreamDescription)}) {}
export class StreamRecord extends Schema.Class<StreamRecord>("StreamRecord")({ApproximateCreationDateTime: Schema.optional(Schema.Date), Keys: Schema.optional(AttributeMap), NewImage: Schema.optional(AttributeMap), OldImage: Schema.optional(AttributeMap), SequenceNumber: Schema.optional(Schema.String), SizeBytes: Schema.optional(Schema.Number), StreamViewType: Schema.optional(Schema.String)}) {}
export class Record extends Schema.Class<Record>("Record")({eventID: Schema.optional(Schema.String), eventName: Schema.optional(Schema.String), eventVersion: Schema.optional(Schema.String), eventSource: Schema.optional(Schema.String), awsRegion: Schema.optional(Schema.String), dynamodb: Schema.optional(StreamRecord), userIdentity: Schema.optional(Identity)}) {}
export const RecordList = Schema.Array(Record);
export class GetRecordsOutput extends Schema.Class<GetRecordsOutput>("GetRecordsOutput")({Records: Schema.optional(RecordList), NextShardIterator: Schema.optional(Schema.String)}) {}
export class ExpiredIteratorException extends Schema.Class<ExpiredIteratorException>("ExpiredIteratorException")({message: Schema.optional(Schema.String)}) {}
export class LimitExceededException extends Schema.Class<LimitExceededException>("LimitExceededException")({message: Schema.optional(Schema.String)}) {}

//# Errors
export class InternalServerErrorError extends Schema.TaggedError<InternalServerErrorError>()("InternalServerError", InternalServerError.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class TrimmedDataAccessExceptionError extends Schema.TaggedError<TrimmedDataAccessExceptionError>()("TrimmedDataAccessException", TrimmedDataAccessException.fields) {};
export class ExpiredIteratorExceptionError extends Schema.TaggedError<ExpiredIteratorExceptionError>()("ExpiredIteratorException", ExpiredIteratorException.fields) {};
export class LimitExceededExceptionError extends Schema.TaggedError<LimitExceededExceptionError>()("LimitExceededException", LimitExceededException.fields) {};

//# Operations
export const listStreams = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-08-10", uri: "/", method: "POST", sdkId: "DynamoDB Streams", sigV4ServiceName: "dynamodb", name: "DynamoDBStreams_20120810.ListStreams" }, ListStreamsInput, ListStreamsOutput, [InternalServerErrorError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getShardIterator = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-08-10", uri: "/", method: "POST", sdkId: "DynamoDB Streams", sigV4ServiceName: "dynamodb", name: "DynamoDBStreams_20120810.GetShardIterator" }, GetShardIteratorInput, GetShardIteratorOutput, [InternalServerErrorError, ResourceNotFoundExceptionError, TrimmedDataAccessExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeStream = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-08-10", uri: "/", method: "POST", sdkId: "DynamoDB Streams", sigV4ServiceName: "dynamodb", name: "DynamoDBStreams_20120810.DescribeStream" }, DescribeStreamInput, DescribeStreamOutput, [InternalServerErrorError, ResourceNotFoundExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getRecords = /*#__PURE__*/ makeOperation(() => Operation({ version: "2012-08-10", uri: "/", method: "POST", sdkId: "DynamoDB Streams", sigV4ServiceName: "dynamodb", name: "DynamoDBStreams_20120810.GetRecords" }, GetRecordsInput, GetRecordsOutput, [ExpiredIteratorExceptionError, InternalServerErrorError, LimitExceededExceptionError, ResourceNotFoundExceptionError, TrimmedDataAccessExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
