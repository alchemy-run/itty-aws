import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class S3Vectors extends AWSServiceClient {
  createIndex(
    input: CreateIndexInput,
  ): Effect.Effect<
    CreateIndexOutput,
    | ConflictException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createVectorBucket(
    input: CreateVectorBucketInput,
  ): Effect.Effect<
    CreateVectorBucketOutput,
    ConflictException | ServiceUnavailableException | CommonAwsError
  >;
  deleteIndex(
    input: DeleteIndexInput,
  ): Effect.Effect<
    DeleteIndexOutput,
    ServiceUnavailableException | CommonAwsError
  >;
  deleteVectorBucket(
    input: DeleteVectorBucketInput,
  ): Effect.Effect<
    DeleteVectorBucketOutput,
    ConflictException | ServiceUnavailableException | CommonAwsError
  >;
  deleteVectorBucketPolicy(
    input: DeleteVectorBucketPolicyInput,
  ): Effect.Effect<
    DeleteVectorBucketPolicyOutput,
    NotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  deleteVectors(
    input: DeleteVectorsInput,
  ): Effect.Effect<
    DeleteVectorsOutput,
    | AccessDeniedException
    | KmsDisabledException
    | KmsInvalidKeyUsageException
    | KmsInvalidStateException
    | KmsNotFoundException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getIndex(
    input: GetIndexInput,
  ): Effect.Effect<
    GetIndexOutput,
    NotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  getVectorBucket(
    input: GetVectorBucketInput,
  ): Effect.Effect<
    GetVectorBucketOutput,
    NotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  getVectorBucketPolicy(
    input: GetVectorBucketPolicyInput,
  ): Effect.Effect<
    GetVectorBucketPolicyOutput,
    NotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  getVectors(
    input: GetVectorsInput,
  ): Effect.Effect<
    GetVectorsOutput,
    | KmsDisabledException
    | KmsInvalidKeyUsageException
    | KmsInvalidStateException
    | KmsNotFoundException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listIndexes(
    input: ListIndexesInput,
  ): Effect.Effect<
    ListIndexesOutput,
    NotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  listVectorBuckets(
    input: ListVectorBucketsInput,
  ): Effect.Effect<
    ListVectorBucketsOutput,
    ServiceUnavailableException | CommonAwsError
  >;
  listVectors(
    input: ListVectorsInput,
  ): Effect.Effect<
    ListVectorsOutput,
    | AccessDeniedException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putVectorBucketPolicy(
    input: PutVectorBucketPolicyInput,
  ): Effect.Effect<
    PutVectorBucketPolicyOutput,
    NotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  putVectors(
    input: PutVectorsInput,
  ): Effect.Effect<
    PutVectorsOutput,
    | AccessDeniedException
    | KmsDisabledException
    | KmsInvalidKeyUsageException
    | KmsInvalidStateException
    | KmsNotFoundException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  queryVectors(
    input: QueryVectorsInput,
  ): Effect.Effect<
    QueryVectorsOutput,
    | KmsDisabledException
    | KmsInvalidKeyUsageException
    | KmsInvalidStateException
    | KmsNotFoundException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
}

export declare class S3vectors extends S3Vectors {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface CreateIndexInput {
  vectorBucketName?: string;
  vectorBucketArn?: string;
  indexName: string;
  dataType: DataType;
  dimension: number;
  distanceMetric: DistanceMetric;
  metadataConfiguration?: MetadataConfiguration;
}
export interface CreateIndexOutput {}
export interface CreateVectorBucketInput {
  vectorBucketName: string;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface CreateVectorBucketOutput {}
export type DataType = "FLOAT32";
export interface DeleteIndexInput {
  vectorBucketName?: string;
  indexName?: string;
  indexArn?: string;
}
export interface DeleteIndexOutput {}
export interface DeleteVectorBucketInput {
  vectorBucketName?: string;
  vectorBucketArn?: string;
}
export interface DeleteVectorBucketOutput {}
export interface DeleteVectorBucketPolicyInput {
  vectorBucketName?: string;
  vectorBucketArn?: string;
}
export interface DeleteVectorBucketPolicyOutput {}
export interface DeleteVectorsInput {
  vectorBucketName?: string;
  indexName?: string;
  indexArn?: string;
  keys: Array<string>;
}
export type DeleteVectorsInputList = Array<string>;
export interface DeleteVectorsOutput {}
export type Dimension = number;

export type DistanceMetric = "EUCLIDEAN" | "COSINE";
export interface EncryptionConfiguration {
  sseType?: SseType;
  kmsKeyArn?: string;
}
export type ExceptionMessage = string;

export type Float32VectorData = Array<number>;
export interface GetIndexInput {
  vectorBucketName?: string;
  indexName?: string;
  indexArn?: string;
}
export interface GetIndexOutput {
  index: Index;
}
export interface GetOutputVector {
  key: string;
  data?: VectorData;
  metadata?: unknown;
}
export interface GetVectorBucketInput {
  vectorBucketName?: string;
  vectorBucketArn?: string;
}
export interface GetVectorBucketOutput {
  vectorBucket: VectorBucket;
}
export interface GetVectorBucketPolicyInput {
  vectorBucketName?: string;
  vectorBucketArn?: string;
}
export interface GetVectorBucketPolicyOutput {
  policy?: string;
}
export interface GetVectorsInput {
  vectorBucketName?: string;
  indexName?: string;
  indexArn?: string;
  keys: Array<string>;
  returnData?: boolean;
  returnMetadata?: boolean;
}
export type GetVectorsInputList = Array<string>;
export interface GetVectorsOutput {
  vectors: Array<GetOutputVector>;
}
export type GetVectorsOutputList = Array<GetOutputVector>;
export interface Index {
  vectorBucketName: string;
  indexName: string;
  indexArn: string;
  creationTime: Date | string;
  dataType: DataType;
  dimension: number;
  distanceMetric: DistanceMetric;
  metadataConfiguration?: MetadataConfiguration;
}
export type IndexArn = string;

export type IndexName = string;

export interface IndexSummary {
  vectorBucketName: string;
  indexName: string;
  indexArn: string;
  creationTime: Date | string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export declare class KmsDisabledException extends EffectData.TaggedError(
  "KmsDisabledException",
)<{
  readonly message: string;
}> {}
export declare class KmsInvalidKeyUsageException extends EffectData.TaggedError(
  "KmsInvalidKeyUsageException",
)<{
  readonly message: string;
}> {}
export declare class KmsInvalidStateException extends EffectData.TaggedError(
  "KmsInvalidStateException",
)<{
  readonly message: string;
}> {}
export type KmsKeyArn = string;

export declare class KmsNotFoundException extends EffectData.TaggedError(
  "KmsNotFoundException",
)<{
  readonly message: string;
}> {}
export interface ListIndexesInput {
  vectorBucketName?: string;
  vectorBucketArn?: string;
  maxResults?: number;
  nextToken?: string;
  prefix?: string;
}
export type ListIndexesMaxResults = number;

export type ListIndexesNextToken = string;

export interface ListIndexesOutput {
  nextToken?: string;
  indexes: Array<IndexSummary>;
}
export type ListIndexesOutputList = Array<IndexSummary>;
export type ListIndexesPrefix = string;

export interface ListOutputVector {
  key: string;
  data?: VectorData;
  metadata?: unknown;
}
export interface ListVectorBucketsInput {
  maxResults?: number;
  nextToken?: string;
  prefix?: string;
}
export type ListVectorBucketsMaxResults = number;

export type ListVectorBucketsNextToken = string;

export interface ListVectorBucketsOutput {
  nextToken?: string;
  vectorBuckets: Array<VectorBucketSummary>;
}
export type ListVectorBucketsOutputList = Array<VectorBucketSummary>;
export type ListVectorBucketsPrefix = string;

export interface ListVectorsInput {
  vectorBucketName?: string;
  indexName?: string;
  indexArn?: string;
  maxResults?: number;
  nextToken?: string;
  segmentCount?: number;
  segmentIndex?: number;
  returnData?: boolean;
  returnMetadata?: boolean;
}
export type ListVectorsMaxResults = number;

export type ListVectorsNextToken = string;

export interface ListVectorsOutput {
  nextToken?: string;
  vectors: Array<ListOutputVector>;
}
export type ListVectorsOutputList = Array<ListOutputVector>;
export type ListVectorsSegmentCount = number;

export type ListVectorsSegmentIndex = number;

export interface MetadataConfiguration {
  nonFilterableMetadataKeys: Array<string>;
}
export type MetadataKey = string;

export type NonFilterableMetadataKeys = Array<string>;
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly message: string;
}> {}
export interface PutInputVector {
  key: string;
  data: VectorData;
  metadata?: unknown;
}
export interface PutVectorBucketPolicyInput {
  vectorBucketName?: string;
  vectorBucketArn?: string;
  policy: string;
}
export interface PutVectorBucketPolicyOutput {}
export interface PutVectorsInput {
  vectorBucketName?: string;
  indexName?: string;
  indexArn?: string;
  vectors: Array<PutInputVector>;
}
export type PutVectorsInputList = Array<PutInputVector>;
export interface PutVectorsOutput {}
export interface QueryOutputVector {
  key: string;
  data?: VectorData;
  metadata?: unknown;
  distance?: number;
}
export interface QueryVectorsInput {
  vectorBucketName?: string;
  indexName?: string;
  indexArn?: string;
  topK: number;
  queryVector: VectorData;
  filter?: unknown;
  returnMetadata?: boolean;
  returnDistance?: boolean;
}
export interface QueryVectorsOutput {
  vectors: Array<QueryOutputVector>;
}
export type QueryVectorsOutputList = Array<QueryOutputVector>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message: string;
}> {}
export type SseType = "AES256" | "AWS_KMS";
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly message: string;
}> {}
export type TopK = number;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  path: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export interface VectorBucket {
  vectorBucketName: string;
  vectorBucketArn: string;
  creationTime: Date | string;
  encryptionConfiguration?: EncryptionConfiguration;
}
export type VectorBucketArn = string;

export type VectorBucketName = string;

export type VectorBucketPolicy = string;

export interface VectorBucketSummary {
  vectorBucketName: string;
  vectorBucketArn: string;
  creationTime: Date | string;
}
interface _VectorData {
  float32?: Array<number>;
}

export type VectorData = _VectorData & { float32: Array<number> };
export type VectorKey = string;

export type VectorMetadata = unknown;

export declare namespace CreateIndex {
  export type Input = CreateIndexInput;
  export type Output = CreateIndexOutput;
  export type Error =
    | ConflictException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateVectorBucket {
  export type Input = CreateVectorBucketInput;
  export type Output = CreateVectorBucketOutput;
  export type Error =
    | ConflictException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteIndex {
  export type Input = DeleteIndexInput;
  export type Output = DeleteIndexOutput;
  export type Error = ServiceUnavailableException | CommonAwsError;
}

export declare namespace DeleteVectorBucket {
  export type Input = DeleteVectorBucketInput;
  export type Output = DeleteVectorBucketOutput;
  export type Error =
    | ConflictException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteVectorBucketPolicy {
  export type Input = DeleteVectorBucketPolicyInput;
  export type Output = DeleteVectorBucketPolicyOutput;
  export type Error =
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteVectors {
  export type Input = DeleteVectorsInput;
  export type Output = DeleteVectorsOutput;
  export type Error =
    | AccessDeniedException
    | KmsDisabledException
    | KmsInvalidKeyUsageException
    | KmsInvalidStateException
    | KmsNotFoundException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetIndex {
  export type Input = GetIndexInput;
  export type Output = GetIndexOutput;
  export type Error =
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetVectorBucket {
  export type Input = GetVectorBucketInput;
  export type Output = GetVectorBucketOutput;
  export type Error =
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetVectorBucketPolicy {
  export type Input = GetVectorBucketPolicyInput;
  export type Output = GetVectorBucketPolicyOutput;
  export type Error =
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetVectors {
  export type Input = GetVectorsInput;
  export type Output = GetVectorsOutput;
  export type Error =
    | KmsDisabledException
    | KmsInvalidKeyUsageException
    | KmsInvalidStateException
    | KmsNotFoundException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListIndexes {
  export type Input = ListIndexesInput;
  export type Output = ListIndexesOutput;
  export type Error =
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListVectorBuckets {
  export type Input = ListVectorBucketsInput;
  export type Output = ListVectorBucketsOutput;
  export type Error = ServiceUnavailableException | CommonAwsError;
}

export declare namespace ListVectors {
  export type Input = ListVectorsInput;
  export type Output = ListVectorsOutput;
  export type Error =
    | AccessDeniedException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutVectorBucketPolicy {
  export type Input = PutVectorBucketPolicyInput;
  export type Output = PutVectorBucketPolicyOutput;
  export type Error =
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutVectors {
  export type Input = PutVectorsInput;
  export type Output = PutVectorsOutput;
  export type Error =
    | AccessDeniedException
    | KmsDisabledException
    | KmsInvalidKeyUsageException
    | KmsInvalidStateException
    | KmsNotFoundException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace QueryVectors {
  export type Input = QueryVectorsInput;
  export type Output = QueryVectorsOutput;
  export type Error =
    | KmsDisabledException
    | KmsInvalidKeyUsageException
    | KmsInvalidStateException
    | KmsNotFoundException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}
