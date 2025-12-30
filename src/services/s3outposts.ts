import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class CreateEndpointRequest extends S.Class<CreateEndpointRequest>("CreateEndpointRequest")({OutpostId: S.String, SubnetId: S.String, SecurityGroupId: S.String, AccessType: S.optional(S.String), CustomerOwnedIpv4Pool: S.optional(S.String)}) {}
export class DeleteEndpointRequest extends S.Class<DeleteEndpointRequest>("DeleteEndpointRequest")({EndpointId: S.String, OutpostId: S.String}) {}
export class ListEndpointsRequest extends S.Class<ListEndpointsRequest>("ListEndpointsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListOutpostsWithS3Request extends S.Class<ListOutpostsWithS3Request>("ListOutpostsWithS3Request")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListSharedEndpointsRequest extends S.Class<ListSharedEndpointsRequest>("ListSharedEndpointsRequest")({NextToken: S.optional(S.String), MaxResults: S.optional(S.Number), OutpostId: S.String}) {}
export class CreateEndpointResult extends S.Class<CreateEndpointResult>("CreateEndpointResult")({EndpointArn: S.optional(S.String)}) {}
export class NetworkInterface extends S.Class<NetworkInterface>("NetworkInterface")({NetworkInterfaceId: S.optional(S.String)}) {}
export const NetworkInterfaces = S.Array(NetworkInterface);
export class FailedReason extends S.Class<FailedReason>("FailedReason")({ErrorCode: S.optional(S.String), Message: S.optional(S.String)}) {}
export class Endpoint extends S.Class<Endpoint>("Endpoint")({EndpointArn: S.optional(S.String), OutpostsId: S.optional(S.String), CidrBlock: S.optional(S.String), Status: S.optional(S.String), CreationTime: S.optional(S.Date), NetworkInterfaces: S.optional(NetworkInterfaces), VpcId: S.optional(S.String), SubnetId: S.optional(S.String), SecurityGroupId: S.optional(S.String), AccessType: S.optional(S.String), CustomerOwnedIpv4Pool: S.optional(S.String), FailedReason: S.optional(FailedReason)}) {}
export const Endpoints = S.Array(Endpoint);
export class ListSharedEndpointsResult extends S.Class<ListSharedEndpointsResult>("ListSharedEndpointsResult")({Endpoints: S.optional(Endpoints), NextToken: S.optional(S.String)}) {}
export class Outpost extends S.Class<Outpost>("Outpost")({OutpostArn: S.optional(S.String), S3OutpostArn: S.optional(S.String), OutpostId: S.optional(S.String), OwnerId: S.optional(S.String), CapacityInBytes: S.optional(S.Number)}) {}
export const Outposts = S.Array(Outpost);
export class ListOutpostsWithS3Result extends S.Class<ListOutpostsWithS3Result>("ListOutpostsWithS3Result")({Outposts: S.optional(Outposts), NextToken: S.optional(S.String)}) {}
export class ListEndpointsResult extends S.Class<ListEndpointsResult>("ListEndpointsResult")({Endpoints: S.optional(Endpoints), NextToken: S.optional(S.String)}) {}

//# Errors
export class AccessDeniedException extends S.TaggedError<AccessDeniedException>()("AccessDeniedException", {}) {};
export class InternalServerException extends S.TaggedError<InternalServerException>()("InternalServerException", {}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String)}) {};
export class OutpostOfflineException extends S.TaggedError<OutpostOfflineException>()("OutpostOfflineException", {}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};

//# Operations
/**
 * Lists all endpoints associated with an Outpost that has been shared by Amazon Web Services Resource Access Manager (RAM).
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - CreateEndpoint
 * 
 * 
 * 
 * 
 * - DeleteEndpoint
 */export const listSharedEndpoints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/S3Outposts/ListSharedEndpoints", method: "GET", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.ListSharedEndpoints" }, ListSharedEndpointsRequest, ListSharedEndpointsResult, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates an endpoint and associates it with the specified Outpost.
 * 
 * 
 * 
 * 
 * It can take up to 5 minutes for this action to finish.
 * 
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - DeleteEndpoint
 * 
 * 
 * 
 * 
 * - ListEndpoints
 */export const createEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/S3Outposts/CreateEndpoint", method: "POST", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.CreateEndpoint" }, CreateEndpointRequest, CreateEndpointResult, [AccessDeniedException, ConflictException, InternalServerException, OutpostOfflineException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes an endpoint.
 * 
 * 
 * 
 * 
 * It can take up to 5 minutes for this action to finish.
 * 
 * 
 * 
 * 
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - CreateEndpoint
 * 
 * 
 * 
 * 
 * - ListEndpoints
 */export const deleteEndpoint = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/S3Outposts/DeleteEndpoint", method: "DELETE", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.DeleteEndpoint" }, DeleteEndpointRequest, S.Struct({}), [AccessDeniedException, InternalServerException, OutpostOfflineException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists endpoints associated with the specified Outpost.
 * 
 * 
 * Related actions include:
 * 
 * 
 * 
 * - CreateEndpoint
 * 
 * 
 * 
 * 
 * - DeleteEndpoint
 */export const listEndpoints = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/S3Outposts/ListEndpoints", method: "GET", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.ListEndpoints" }, ListEndpointsRequest, ListEndpointsResult, [AccessDeniedException, InternalServerException, ResourceNotFoundException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Lists the Outposts with S3 on Outposts capacity for your Amazon Web Services account.
 * Includes S3 on Outposts that you have access to as the Outposts owner, or as a shared user
 * from Resource Access Manager (RAM).
 */export const listOutpostsWithS3 = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2017-07-25", uri: "/S3Outposts/ListOutpostsWithS3", method: "GET", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.ListOutpostsWithS3" }, ListOutpostsWithS3Request, ListOutpostsWithS3Result, [AccessDeniedException, InternalServerException, ThrottlingException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
