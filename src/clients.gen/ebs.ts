import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const CompleteSnapshotRequest = Schema.Struct({SnapshotId: Schema.String, ChangedBlocksCount: Header("x-amz-ChangedBlocksCount", Schema.Number), Checksum: Schema.optional(Header("x-amz-Checksum")), ChecksumAlgorithm: Schema.optional(Header("x-amz-Checksum-Algorithm")), ChecksumAggregationMethod: Schema.optional(Header("x-amz-Checksum-Aggregation-Method"))});
export const GetSnapshotBlockRequest = Schema.Struct({SnapshotId: Schema.String, BlockIndex: Schema.Number, BlockToken: Schema.String});
export const ListChangedBlocksRequest = Schema.Struct({FirstSnapshotId: Schema.optional(Schema.String), SecondSnapshotId: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), StartingBlockIndex: Schema.optional(Schema.Number)});
export const ListSnapshotBlocksRequest = Schema.Struct({SnapshotId: Schema.String, NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), StartingBlockIndex: Schema.optional(Schema.Number)});
export const PutSnapshotBlockRequest = Schema.Struct({SnapshotId: Schema.String, BlockIndex: Schema.Number, BlockData: Body("undefined", StreamBody()), DataLength: Header("x-amz-Data-Length", Schema.Number), Progress: Schema.optional(Header("x-amz-Progress", Schema.Number)), Checksum: Header("x-amz-Checksum"), ChecksumAlgorithm: Header("x-amz-Checksum-Algorithm")});
export const Tag = Schema.Struct({Key: Schema.optional(Schema.String), Value: Schema.optional(Schema.String)});
export const Tags = Schema.Array(Tag);
export const CompleteSnapshotResponse = Schema.Struct({Status: Schema.optional(Schema.String)});
export const GetSnapshotBlockResponse = Schema.Struct({DataLength: Schema.optional(Header("x-amz-Data-Length", Schema.Number)), BlockData: Schema.optional(Body("undefined", StreamBody())), Checksum: Schema.optional(Header("x-amz-Checksum")), ChecksumAlgorithm: Schema.optional(Header("x-amz-Checksum-Algorithm"))});
export const PutSnapshotBlockResponse = Schema.Struct({Checksum: Schema.optional(Header("x-amz-Checksum")), ChecksumAlgorithm: Schema.optional(Header("x-amz-Checksum-Algorithm"))});
export const StartSnapshotRequest = Schema.Struct({VolumeSize: Schema.Number, ParentSnapshotId: Schema.optional(Schema.String), Tags: Schema.optional(Tags), Description: Schema.optional(Schema.String), ClientToken: Schema.optional(Schema.String), Encrypted: Schema.optional(Schema.Boolean), KmsKeyArn: Schema.optional(Schema.String), Timeout: Schema.optional(Schema.Number)});
export const ChangedBlock = Schema.Struct({BlockIndex: Schema.optional(Schema.Number), FirstBlockToken: Schema.optional(Schema.String), SecondBlockToken: Schema.optional(Schema.String)});
export const ChangedBlocks = Schema.Array(ChangedBlock);
export const Block = Schema.Struct({BlockIndex: Schema.optional(Schema.Number), BlockToken: Schema.optional(Schema.String)});
export const Blocks = Schema.Array(Block);
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.String});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ListChangedBlocksResponse = Schema.Struct({ChangedBlocks: Schema.optional(ChangedBlocks), ExpiryTime: Schema.optional(Schema.Date), VolumeSize: Schema.optional(Schema.Number), BlockSize: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const ListSnapshotBlocksResponse = Schema.Struct({Blocks: Schema.optional(Blocks), ExpiryTime: Schema.optional(Schema.Date), VolumeSize: Schema.optional(Schema.Number), BlockSize: Schema.optional(Schema.Number), NextToken: Schema.optional(Schema.String)});
export const RequestThrottledException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)});
export const StartSnapshotResponse = Schema.Struct({Description: Schema.optional(Schema.String), SnapshotId: Schema.optional(Schema.String), OwnerId: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), StartTime: Schema.optional(Schema.Date), VolumeSize: Schema.optional(Schema.Number), BlockSize: Schema.optional(Schema.Number), Tags: Schema.optional(Tags), ParentSnapshotId: Schema.optional(Schema.String), KmsKeyArn: Schema.optional(Schema.String), SseType: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)});
export const ServiceQuotaExceededException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String), Reason: Schema.optional(Schema.String)});
export const ConcurrentLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class RequestThrottledExceptionError extends Schema.TaggedError<RequestThrottledExceptionError>()("RequestThrottledException", RequestThrottledException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ServiceQuotaExceededExceptionError extends Schema.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};
export class ConcurrentLimitExceededExceptionError extends Schema.TaggedError<ConcurrentLimitExceededExceptionError>()("ConcurrentLimitExceededException", ConcurrentLimitExceededException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};

//# Operations
export const listSnapshotBlocks = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-02", uri: "/snapshots/{SnapshotId}/blocks", method: "GET", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.ListSnapshotBlocks" }, ListSnapshotBlocksRequest, ListSnapshotBlocksResponse, [AccessDeniedExceptionError, InternalServerExceptionError, RequestThrottledExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putSnapshotBlock = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-02", uri: "/snapshots/{SnapshotId}/blocks/{BlockIndex}", method: "PUT", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.PutSnapshotBlock" }, PutSnapshotBlockRequest, PutSnapshotBlockResponse, [AccessDeniedExceptionError, InternalServerExceptionError, RequestThrottledExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const completeSnapshot = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-02", uri: "/snapshots/completion/{SnapshotId}", method: "POST", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.CompleteSnapshot" }, CompleteSnapshotRequest, CompleteSnapshotResponse, [AccessDeniedExceptionError, InternalServerExceptionError, RequestThrottledExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSnapshotBlock = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-02", uri: "/snapshots/{SnapshotId}/blocks/{BlockIndex}", method: "GET", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.GetSnapshotBlock" }, GetSnapshotBlockRequest, GetSnapshotBlockResponse, [AccessDeniedExceptionError, InternalServerExceptionError, RequestThrottledExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listChangedBlocks = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-02", uri: "/snapshots/{SecondSnapshotId}/changedblocks", method: "GET", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.ListChangedBlocks" }, ListChangedBlocksRequest, ListChangedBlocksResponse, [AccessDeniedExceptionError, InternalServerExceptionError, RequestThrottledExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const startSnapshot = /*#__PURE__*/ makeOperation(() => Operation({ version: "2019-11-02", uri: "/snapshots", method: "POST", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.StartSnapshot" }, StartSnapshotRequest, StartSnapshotResponse, [AccessDeniedExceptionError, ConcurrentLimitExceededExceptionError, ConflictExceptionError, InternalServerExceptionError, RequestThrottledExceptionError, ResourceNotFoundExceptionError, ServiceQuotaExceededExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
