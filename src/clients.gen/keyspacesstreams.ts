import { Schema} from "effect"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GetRecordsInput = Schema.Struct({shardIterator: Schema.String, maxResults: Schema.optional(Schema.Number)});
export const GetShardIteratorInput = Schema.Struct({streamArn: Schema.String, shardId: Schema.String, shardIteratorType: Schema.String, sequenceNumber: Schema.optional(Schema.String)});
export const ListStreamsInput = Schema.Struct({keyspaceName: Schema.optional(Schema.String), tableName: Schema.optional(Schema.String), maxResults: Schema.optional(Schema.Number), nextToken: Schema.optional(Schema.String)});
export const ShardFilter = Schema.Struct({type: Schema.optional(Schema.String), shardId: Schema.optional(Schema.String)});
export const GetShardIteratorOutput = Schema.Struct({shardIterator: Schema.optional(Schema.String)});
export const GetStreamInput = Schema.Struct({streamArn: Schema.String, maxResults: Schema.optional(Schema.Number), shardFilter: Schema.optional(ShardFilter), nextToken: Schema.optional(Schema.String)});
export const Stream = Schema.Struct({streamArn: Schema.String, keyspaceName: Schema.String, tableName: Schema.String, streamLabel: Schema.String});
export const StreamList = Schema.Array(Stream);
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ListStreamsOutput = Schema.Struct({streams: Schema.optional(StreamList), nextToken: Schema.optional(Schema.String)});
export const ShardIdList = Schema.Array(Schema.String);
export const KeyspacesCellList = Schema.Array(KeyspacesCell);
export const KeyspacesMetadata = Schema.Struct({expirationTime: Schema.optional(Schema.String), writeTime: Schema.optional(Schema.String)});
export const KeyspacesCellMapDefinition = Schema.Struct({key: Schema.optional(KeyspacesCellValue), value: Schema.optional(KeyspacesCellValue), metadata: Schema.optional(KeyspacesMetadata)});
export const KeyspacesCellMap = Schema.Array(KeyspacesCellMapDefinition);
export const KeyspacesUdtMap = Schema.Record({key: Schema.String, value: KeyspacesCell});
export const KeyspacesCellValue = Schema.Union(Schema.String, Schema.String, StreamBody(), Schema.Boolean, Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, KeyspacesCellList, KeyspacesCellMap, KeyspacesCellList, Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, Schema.String, KeyspacesCellList, Schema.String, Schema.String, Schema.String, KeyspacesUdtMap);
export const KeyspacesCell = Schema.Struct({value: Schema.optional(KeyspacesCellValue), metadata: Schema.optional(KeyspacesMetadata)});
export const KeyspacesCells = Schema.Record({key: Schema.String, value: KeyspacesCell});
export const InternalServerException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const KeyspacesRow = Schema.Struct({valueCells: Schema.optional(KeyspacesCells), staticCells: Schema.optional(KeyspacesCells), rowMetadata: Schema.optional(KeyspacesMetadata)});
export const SequenceNumberRange = Schema.Struct({startingSequenceNumber: Schema.optional(Schema.String), endingSequenceNumber: Schema.optional(Schema.String)});
export const Shard = Schema.Struct({shardId: Schema.optional(Schema.String), sequenceNumberRange: Schema.optional(SequenceNumberRange), parentShardIds: Schema.optional(ShardIdList)});
export const ShardDescriptionList = Schema.Array(Shard);
export const ThrottlingException = Schema.Struct({message: Schema.optional(Schema.String)});
export const GetStreamOutput = Schema.Struct({streamArn: Schema.String, streamLabel: Schema.String, streamStatus: Schema.String, streamViewType: Schema.String, creationRequestDateTime: Schema.Date, keyspaceName: Schema.String, tableName: Schema.String, shards: Schema.optional(ShardDescriptionList), nextToken: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), errorCode: Schema.optional(Schema.String)});
export const KeyspacesKeysMap = Schema.Record({key: Schema.String, value: KeyspacesCellValue});
export const Record = Schema.Struct({eventVersion: Schema.optional(Schema.String), createdAt: Schema.optional(Schema.Date), origin: Schema.optional(Schema.String), partitionKeys: Schema.optional(KeyspacesKeysMap), clusteringKeys: Schema.optional(KeyspacesKeysMap), newImage: Schema.optional(KeyspacesRow), oldImage: Schema.optional(KeyspacesRow), sequenceNumber: Schema.optional(Schema.String)});
export const RecordList = Schema.Array(Record);
export const GetRecordsOutput = Schema.Struct({changeRecords: Schema.optional(RecordList), nextShardIterator: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const getShardIterator = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.GetShardIterator" }, GetShardIteratorInput, GetShardIteratorOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getStream = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.GetStream" }, GetStreamInput, GetStreamOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listStreams = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.ListStreams" }, ListStreamsInput, ListStreamsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getRecords = /*#__PURE__*/ makeOperation(() => Operation({ version: "2024-09-09", uri: "/", method: "POST", sdkId: "KeyspacesStreams", sigV4ServiceName: "cassandra", name: "KeyspacesStreams.GetRecords" }, GetRecordsInput, GetRecordsOutput, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
