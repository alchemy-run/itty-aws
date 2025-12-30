import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class CompleteSnapshotRequest extends S.Class<CompleteSnapshotRequest>("CompleteSnapshotRequest")({SnapshotId: S.String, ChangedBlocksCount: H.Header("x-amz-ChangedBlocksCount", S.Number), Checksum: S.optional(H.Header("x-amz-Checksum")), ChecksumAlgorithm: S.optional(H.Header("x-amz-Checksum-Algorithm")), ChecksumAggregationMethod: S.optional(H.Header("x-amz-Checksum-Aggregation-Method"))}) {}
export class GetSnapshotBlockRequest extends S.Class<GetSnapshotBlockRequest>("GetSnapshotBlockRequest")({SnapshotId: S.String, BlockIndex: S.Number, BlockToken: S.String}) {}
export class ListChangedBlocksRequest extends S.Class<ListChangedBlocksRequest>("ListChangedBlocksRequest")({FirstSnapshotId: S.optional(S.String), SecondSnapshotId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), StartingBlockIndex: S.optional(S.Number)}) {}
export class ListSnapshotBlocksRequest extends S.Class<ListSnapshotBlocksRequest>("ListSnapshotBlocksRequest")({SnapshotId: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), StartingBlockIndex: S.optional(S.Number)}) {}
export class PutSnapshotBlockRequest extends S.Class<PutSnapshotBlockRequest>("PutSnapshotBlockRequest")({SnapshotId: S.String, BlockIndex: S.Number, BlockData: H.Body("undefined", H.StreamBody()), DataLength: H.Header("x-amz-Data-Length", S.Number), Progress: S.optional(H.Header("x-amz-Progress", S.Number)), Checksum: H.Header("x-amz-Checksum"), ChecksumAlgorithm: H.Header("x-amz-Checksum-Algorithm")}) {}
export class Tag extends S.Class<Tag>("Tag")({Key: S.optional(S.String), Value: S.optional(S.String)}) {}
export const Tags = S.Array(Tag);
export class CompleteSnapshotResponse extends S.Class<CompleteSnapshotResponse>("CompleteSnapshotResponse")({Status: S.optional(S.String)}) {}
export class GetSnapshotBlockResponse extends S.Class<GetSnapshotBlockResponse>("GetSnapshotBlockResponse")({DataLength: S.optional(H.Header("x-amz-Data-Length", S.Number)), BlockData: S.optional(H.Body("undefined", H.StreamBody())), Checksum: S.optional(H.Header("x-amz-Checksum")), ChecksumAlgorithm: S.optional(H.Header("x-amz-Checksum-Algorithm"))}) {}
export class PutSnapshotBlockResponse extends S.Class<PutSnapshotBlockResponse>("PutSnapshotBlockResponse")({Checksum: S.optional(H.Header("x-amz-Checksum")), ChecksumAlgorithm: S.optional(H.Header("x-amz-Checksum-Algorithm"))}) {}
export class StartSnapshotRequest extends S.Class<StartSnapshotRequest>("StartSnapshotRequest")({VolumeSize: S.Number, ParentSnapshotId: S.optional(S.String), Tags: S.optional(Tags), Description: S.optional(S.String), ClientToken: S.optional(S.String), Encrypted: S.optional(S.Boolean), KmsKeyArn: S.optional(S.String), Timeout: S.optional(S.Number)}) {}
export class ChangedBlock extends S.Class<ChangedBlock>("ChangedBlock")({BlockIndex: S.optional(S.Number), FirstBlockToken: S.optional(S.String), SecondBlockToken: S.optional(S.String)}) {}
export const ChangedBlocks = S.Array(ChangedBlock);
export class Block extends S.Class<Block>("Block")({BlockIndex: S.optional(S.Number), BlockToken: S.optional(S.String)}) {}
export const Blocks = S.Array(Block);
export class ListChangedBlocksResponse extends S.Class<ListChangedBlocksResponse>("ListChangedBlocksResponse")({ChangedBlocks: S.optional(ChangedBlocks), ExpiryTime: S.optional(S.Date), VolumeSize: S.optional(S.Number), BlockSize: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListSnapshotBlocksResponse extends S.Class<ListSnapshotBlocksResponse>("ListSnapshotBlocksResponse")({Blocks: S.optional(Blocks), ExpiryTime: S.optional(S.Date), VolumeSize: S.optional(S.Number), BlockSize: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class StartSnapshotResponse extends S.Class<StartSnapshotResponse>("StartSnapshotResponse")({Description: S.optional(S.String), SnapshotId: S.optional(S.String), OwnerId: S.optional(S.String), Status: S.optional(S.String), StartTime: S.optional(S.Date), VolumeSize: S.optional(S.Number), BlockSize: S.optional(S.Number), Tags: S.optional(Tags), ParentSnapshotId: S.optional(S.String), KmsKeyArn: S.optional(S.String), SseType: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class RequestThrottledException extends S.TaggedError<RequestThrottledException>()("RequestThrottledException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class ConcurrentLimitExceededException extends S.TaggedError<ConcurrentLimitExceededException>()("ConcurrentLimitExceededException", {Message: S.optional(S.String)}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Returns information about the blocks in an Amazon Elastic Block Store snapshot.
 * 
 * 
 * 
 * 
 * You should always retry requests that receive server (`5xx`)
 * error responses, and `ThrottlingException` and `RequestThrottledException`
 * client error responses. For more information see Error retries in the
 * *Amazon Elastic Compute Cloud User Guide*.
 */export const listSnapshotBlocks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-02", uri: "/snapshots/{SnapshotId}/blocks", method: "GET", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.ListSnapshotBlocks" }, ListSnapshotBlocksRequest, ListSnapshotBlocksResponse, [AccessDeniedException, InternalServerException, RequestThrottledException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Writes a block of data to a snapshot. If the specified block contains
 * data, the existing data is overwritten. The target snapshot must be in the
 * `pending` state.
 * 
 * 
 * Data written to a snapshot must be aligned with 512-KiB sectors.
 * 
 * 
 * 
 * 
 * You should always retry requests that receive server (`5xx`)
 * error responses, and `ThrottlingException` and `RequestThrottledException`
 * client error responses. For more information see Error retries in the
 * *Amazon Elastic Compute Cloud User Guide*.
 */export const putSnapshotBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-02", uri: "/snapshots/{SnapshotId}/blocks/{BlockIndex}", method: "PUT", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.PutSnapshotBlock" }, PutSnapshotBlockRequest, PutSnapshotBlockResponse, [AccessDeniedException, InternalServerException, RequestThrottledException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Seals and completes the snapshot after all of the required blocks of data have been
 * written to it. Completing the snapshot changes the status to `completed`. You
 * cannot write new blocks to a snapshot after it has been completed.
 * 
 * 
 * 
 * 
 * You should always retry requests that receive server (`5xx`)
 * error responses, and `ThrottlingException` and `RequestThrottledException`
 * client error responses. For more information see Error retries in the
 * *Amazon Elastic Compute Cloud User Guide*.
 */export const completeSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-02", uri: "/snapshots/completion/{SnapshotId}", method: "POST", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.CompleteSnapshot" }, CompleteSnapshotRequest, CompleteSnapshotResponse, [AccessDeniedException, InternalServerException, RequestThrottledException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the data in a block in an Amazon Elastic Block Store snapshot.
 * 
 * 
 * 
 * 
 * You should always retry requests that receive server (`5xx`)
 * error responses, and `ThrottlingException` and `RequestThrottledException`
 * client error responses. For more information see Error retries in the
 * *Amazon Elastic Compute Cloud User Guide*.
 */export const getSnapshotBlock = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-02", uri: "/snapshots/{SnapshotId}/blocks/{BlockIndex}", method: "GET", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.GetSnapshotBlock" }, GetSnapshotBlockRequest, GetSnapshotBlockResponse, [AccessDeniedException, InternalServerException, RequestThrottledException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about the blocks that are different between two
 * Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.
 * 
 * 
 * 
 * 
 * You should always retry requests that receive server (`5xx`)
 * error responses, and `ThrottlingException` and `RequestThrottledException`
 * client error responses. For more information see Error retries in the
 * *Amazon Elastic Compute Cloud User Guide*.
 */export const listChangedBlocks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-02", uri: "/snapshots/{SecondSnapshotId}/changedblocks", method: "GET", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.ListChangedBlocks" }, ListChangedBlocksRequest, ListChangedBlocksResponse, [AccessDeniedException, InternalServerException, RequestThrottledException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a new Amazon EBS snapshot. The new snapshot enters the `pending` state
 * after the request completes.
 * 
 * 
 * After creating the snapshot, use PutSnapshotBlock to
 * write blocks of data to the snapshot.
 * 
 * 
 * 
 * 
 * You should always retry requests that receive server (`5xx`)
 * error responses, and `ThrottlingException` and `RequestThrottledException`
 * client error responses. For more information see Error retries in the
 * *Amazon Elastic Compute Cloud User Guide*.
 */export const startSnapshot = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2019-11-02", uri: "/snapshots", method: "POST", sdkId: "EBS", sigV4ServiceName: "ebs", name: "Ebs.StartSnapshot" }, StartSnapshotRequest, StartSnapshotResponse, [AccessDeniedException, ConcurrentLimitExceededException, ConflictException, InternalServerException, RequestThrottledException, ResourceNotFoundException, ServiceQuotaExceededException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
