import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetRecordsInput extends S.Class<GetRecordsInput>("GetRecordsInput")({ShardIterator: S.String, Limit: S.optional(S.Number)}) {}
export class GetShardIteratorInput extends S.Class<GetShardIteratorInput>("GetShardIteratorInput")({StreamArn: S.String, ShardId: S.String, ShardIteratorType: S.String, SequenceNumber: S.optional(S.String)}) {}
export class ListStreamsInput extends S.Class<ListStreamsInput>("ListStreamsInput")({TableName: S.optional(S.String), Limit: S.optional(S.Number), ExclusiveStartStreamArn: S.optional(S.String)}) {}
export class ShardFilter extends S.Class<ShardFilter>("ShardFilter")({Type: S.optional(S.String), ShardId: S.optional(S.String)}) {}
export class DescribeStreamInput extends S.Class<DescribeStreamInput>("DescribeStreamInput")({StreamArn: S.String, Limit: S.optional(S.Number), ExclusiveStartShardId: S.optional(S.String), ShardFilter: S.optional(ShardFilter)}) {}
export class GetShardIteratorOutput extends S.Class<GetShardIteratorOutput>("GetShardIteratorOutput")({ShardIterator: S.optional(S.String)}) {}
export class Stream extends S.Class<Stream>("Stream")({StreamArn: S.optional(S.String), TableName: S.optional(S.String), StreamLabel: S.optional(S.String)}) {}
export const StreamList = S.Array(Stream);
export class ListStreamsOutput extends S.Class<ListStreamsOutput>("ListStreamsOutput")({Streams: S.optional(StreamList), LastEvaluatedStreamArn: S.optional(S.String)}) {}
export class Identity extends S.Class<Identity>("Identity")({PrincipalId: S.optional(S.String), Type: S.optional(S.String)}) {}
export const StringSetAttributeValue = S.Array(S.String);
export const NumberSetAttributeValue = S.Array(S.String);
export const BinarySetAttributeValue = S.Array(H.StreamBody());
export type ListAttributeValue = AttributeValue[];
export const ListAttributeValue = S.Array(S.suspend(() => AttributeValue)) as any as S.Schema<ListAttributeValue>;
export class KeySchemaElement extends S.Class<KeySchemaElement>("KeySchemaElement")({AttributeName: S.String, KeyType: S.String}) {}
export const KeySchema = S.Array(KeySchemaElement);
export class SequenceNumberRange extends S.Class<SequenceNumberRange>("SequenceNumberRange")({StartingSequenceNumber: S.optional(S.String), EndingSequenceNumber: S.optional(S.String)}) {}
export type MapAttributeValue = { [key: string]: AttributeValue };
export const MapAttributeValue = S.Record({key: S.String, value: S.suspend(() => AttributeValue)}) as any as S.Schema<MapAttributeValue>;
export class Shard extends S.Class<Shard>("Shard")({ShardId: S.optional(S.String), SequenceNumberRange: S.optional(SequenceNumberRange), ParentShardId: S.optional(S.String)}) {}
export const ShardDescriptionList = S.Array(Shard);
export type AttributeValue = string | H.StreamBody | typeof StringSetAttributeValue["Type"] | typeof NumberSetAttributeValue["Type"] | typeof BinarySetAttributeValue["Type"] | MapAttributeValue | ListAttributeValue | boolean;
export const AttributeValue = S.Union(S.String, S.String, H.StreamBody(), StringSetAttributeValue, NumberSetAttributeValue, BinarySetAttributeValue, S.suspend(() => MapAttributeValue), S.suspend(() => ListAttributeValue), S.Boolean, S.Boolean) as any as S.Schema<AttributeValue>;
export class StreamDescription extends S.Class<StreamDescription>("StreamDescription")({StreamArn: S.optional(S.String), StreamLabel: S.optional(S.String), StreamStatus: S.optional(S.String), StreamViewType: S.optional(S.String), CreationRequestDateTime: S.optional(S.Date), TableName: S.optional(S.String), KeySchema: S.optional(KeySchema), Shards: S.optional(ShardDescriptionList), LastEvaluatedShardId: S.optional(S.String)}) {}
export const AttributeMap = S.Record({key: S.String, value: S.suspend(() => AttributeValue)});
export class DescribeStreamOutput extends S.Class<DescribeStreamOutput>("DescribeStreamOutput")({StreamDescription: S.optional(StreamDescription)}) {}
export class StreamRecord extends S.Class<StreamRecord>("StreamRecord")({ApproximateCreationDateTime: S.optional(S.Date), Keys: S.optional(AttributeMap), NewImage: S.optional(AttributeMap), OldImage: S.optional(AttributeMap), SequenceNumber: S.optional(S.String), SizeBytes: S.optional(S.Number), StreamViewType: S.optional(S.String)}) {}
export class Record extends S.Class<Record>("Record")({eventID: S.optional(S.String), eventName: S.optional(S.String), eventVersion: S.optional(S.String), eventSource: S.optional(S.String), awsRegion: S.optional(S.String), dynamodb: S.optional(StreamRecord), userIdentity: S.optional(Identity)}) {}
export const RecordList = S.Array(Record);
export class GetRecordsOutput extends S.Class<GetRecordsOutput>("GetRecordsOutput")({Records: S.optional(RecordList), NextShardIterator: S.optional(S.String)}) {}

//# Errors
export class InternalServerError extends S.TaggedError<InternalServerError>()("InternalServerError", {message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class TrimmedDataAccessException extends S.TaggedError<TrimmedDataAccessException>()("TrimmedDataAccessException", {message: S.optional(S.String)}) {};
export class ExpiredIteratorException extends S.TaggedError<ExpiredIteratorException>()("ExpiredIteratorException", {message: S.optional(S.String)}) {};
export class LimitExceededException extends S.TaggedError<LimitExceededException>()("LimitExceededException", {message: S.optional(S.String)}) {};

//# Operations
export const listStreams = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-08-10", uri: "/", method: "POST", sdkId: "DynamoDB Streams", sigV4ServiceName: "dynamodb", name: "DynamoDBStreams_20120810.ListStreams" }, ListStreamsInput, ListStreamsOutput, [InternalServerError, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getShardIterator = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-08-10", uri: "/", method: "POST", sdkId: "DynamoDB Streams", sigV4ServiceName: "dynamodb", name: "DynamoDBStreams_20120810.GetShardIterator" }, GetShardIteratorInput, GetShardIteratorOutput, [InternalServerError, ResourceNotFoundException, TrimmedDataAccessException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const describeStream = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-08-10", uri: "/", method: "POST", sdkId: "DynamoDB Streams", sigV4ServiceName: "dynamodb", name: "DynamoDBStreams_20120810.DescribeStream" }, DescribeStreamInput, DescribeStreamOutput, [InternalServerError, ResourceNotFoundException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getRecords = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-08-10", uri: "/", method: "POST", sdkId: "DynamoDB Streams", sigV4ServiceName: "dynamodb", name: "DynamoDBStreams_20120810.GetRecords" }, GetRecordsInput, GetRecordsOutput, [ExpiredIteratorException, InternalServerError, LimitExceededException, ResourceNotFoundException, TrimmedDataAccessException]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
