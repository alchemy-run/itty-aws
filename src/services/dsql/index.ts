import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class DSQL extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | ServiceQuotaExceededException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<{}, ResourceNotFoundException | CommonAwsError>;
  createCluster(
    input: CreateClusterInput,
  ): Effect.Effect<
    CreateClusterOutput,
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterInput,
  ): Effect.Effect<
    DeleteClusterOutput,
    ConflictException | ResourceNotFoundException | CommonAwsError
  >;
  getCluster(
    input: GetClusterInput,
  ): Effect.Effect<
    GetClusterOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  getVpcEndpointServiceName(
    input: GetVpcEndpointServiceNameInput,
  ): Effect.Effect<
    GetVpcEndpointServiceNameOutput,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listClusters(
    input: ListClustersInput,
  ): Effect.Effect<
    ListClustersOutput,
    ResourceNotFoundException | CommonAwsError
  >;
  updateCluster(
    input: UpdateClusterInput,
  ): Effect.Effect<
    UpdateClusterOutput,
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Dsql extends DSQL {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Arn = string;

export type ClientToken = string;

export type ClusterArn = string;

export type ClusterArnList = Array<string>;
export type ClusterCreationTime = Date | string;

export type ClusterId = string;

export type ClusterList = Array<ClusterSummary>;
export type ClusterStatus =
  | "CREATING"
  | "ACTIVE"
  | "IDLE"
  | "INACTIVE"
  | "UPDATING"
  | "DELETING"
  | "DELETED"
  | "FAILED"
  | "PENDING_SETUP"
  | "PENDING_DELETE";
export interface ClusterSummary {
  identifier: string;
  arn: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId?: string;
  readonly resourceType?: string;
}> {}
export interface CreateClusterInput {
  deletionProtectionEnabled?: boolean;
  kmsEncryptionKey?: string;
  tags?: Record<string, string>;
  clientToken?: string;
  multiRegionProperties?: MultiRegionProperties;
}
export interface CreateClusterOutput {
  identifier: string;
  arn: string;
  status: ClusterStatus;
  creationTime: Date | string;
  multiRegionProperties?: MultiRegionProperties;
  encryptionDetails?: EncryptionDetails;
  deletionProtectionEnabled: boolean;
}
export interface DeleteClusterInput {
  identifier: string;
  clientToken?: string;
}
export interface DeleteClusterOutput {
  identifier: string;
  arn: string;
  status: ClusterStatus;
  creationTime: Date | string;
}
export type DeletionProtectionEnabled = boolean;

export interface EncryptionDetails {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
  encryptionStatus: EncryptionStatus;
}
export type EncryptionStatus =
  | "ENABLED"
  | "UPDATING"
  | "KMS_KEY_INACCESSIBLE"
  | "ENABLING";
export type EncryptionType = "AWS_OWNED_KMS_KEY" | "CUSTOMER_MANAGED_KMS_KEY";
export interface GetClusterInput {
  identifier: string;
}
export interface GetClusterOutput {
  identifier: string;
  arn: string;
  status: ClusterStatus;
  creationTime: Date | string;
  deletionProtectionEnabled: boolean;
  multiRegionProperties?: MultiRegionProperties;
  tags?: Record<string, string>;
  encryptionDetails?: EncryptionDetails;
}
export interface GetVpcEndpointServiceNameInput {
  identifier: string;
}
export interface GetVpcEndpointServiceNameOutput {
  serviceName: string;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type KmsEncryptionKey = string;

export type KmsKeyArn = string;

export interface ListClustersInput {
  maxResults?: number;
  nextToken?: string;
}
export interface ListClustersOutput {
  nextToken?: string;
  clusters: Array<ClusterSummary>;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: Record<string, string>;
}
export type MaxResults = number;

export interface MultiRegionProperties {
  witnessRegion?: string;
  clusters?: Array<string>;
}
export type NextToken = string;

export type Region = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ServiceName = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly serviceCode: string;
  readonly quotaCode: string;
}> {}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  resourceArn: string;
  tags: Record<string, string>;
}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UpdateClusterInput {
  identifier: string;
  deletionProtectionEnabled?: boolean;
  kmsEncryptionKey?: string;
  clientToken?: string;
  multiRegionProperties?: MultiRegionProperties;
}
export interface UpdateClusterOutput {
  identifier: string;
  arn: string;
  status: ClusterStatus;
  creationTime: Date | string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: ValidationExceptionReason;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "deletionProtectionEnabled"
  | "other";
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = {};
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterInput;
  export type Output = CreateClusterOutput;
  export type Error =
    | ConflictException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterInput;
  export type Output = DeleteClusterOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCluster {
  export type Input = GetClusterInput;
  export type Output = GetClusterOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace GetVpcEndpointServiceName {
  export type Input = GetVpcEndpointServiceNameInput;
  export type Output = GetVpcEndpointServiceNameOutput;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersInput;
  export type Output = ListClustersOutput;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace UpdateCluster {
  export type Input = UpdateClusterInput;
  export type Output = UpdateClusterOutput;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "DSQL",
  version: "2018-05-10",
  protocol: "restJson1",
  endpointPrefix: "dsql",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    CreateCluster: "POST /cluster",
    DeleteCluster: "DELETE /cluster/{identifier}",
    GetCluster: "GET /cluster/{identifier}",
    GetVpcEndpointServiceName:
      "GET /clusters/{identifier}/vpc-endpoint-service-name",
    ListClusters: "GET /cluster",
    UpdateCluster: "POST /cluster/{identifier}",
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;
