import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class CreateEndpointRequest extends Schema.Class<CreateEndpointRequest>("CreateEndpointRequest")({OutpostId: Schema.String, SubnetId: Schema.String, SecurityGroupId: Schema.String, AccessType: Schema.optional(Schema.String), CustomerOwnedIpv4Pool: Schema.optional(Schema.String)}) {}
export class DeleteEndpointRequest extends Schema.Class<DeleteEndpointRequest>("DeleteEndpointRequest")({EndpointId: Schema.String, OutpostId: Schema.String}) {}
export class ListEndpointsRequest extends Schema.Class<ListEndpointsRequest>("ListEndpointsRequest")({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class ListOutpostsWithS3Request extends Schema.Class<ListOutpostsWithS3Request>("ListOutpostsWithS3Request")({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)}) {}
export class ListSharedEndpointsRequest extends Schema.Class<ListSharedEndpointsRequest>("ListSharedEndpointsRequest")({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), OutpostId: Schema.String}) {}
export class CreateEndpointResult extends Schema.Class<CreateEndpointResult>("CreateEndpointResult")({EndpointArn: Schema.optional(Schema.String)}) {}
export class AccessDeniedException extends Schema.Class<AccessDeniedException>("AccessDeniedException")({Message: Schema.optional(Schema.String)}) {}
export class NetworkInterface extends Schema.Class<NetworkInterface>("NetworkInterface")({NetworkInterfaceId: Schema.optional(Schema.String)}) {}
export const NetworkInterfaces = Schema.Array(NetworkInterface);
export class FailedReason extends Schema.Class<FailedReason>("FailedReason")({ErrorCode: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)}) {}
export class Endpoint extends Schema.Class<Endpoint>("Endpoint")({EndpointArn: Schema.optional(Schema.String), OutpostsId: Schema.optional(Schema.String), CidrBlock: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), CreationTime: Schema.optional(Schema.Date), NetworkInterfaces: Schema.optional(NetworkInterfaces), VpcId: Schema.optional(Schema.String), SubnetId: Schema.optional(Schema.String), SecurityGroupId: Schema.optional(Schema.String), AccessType: Schema.optional(Schema.String), CustomerOwnedIpv4Pool: Schema.optional(Schema.String), FailedReason: Schema.optional(FailedReason)}) {}
export const Endpoints = Schema.Array(Endpoint);
export class ListSharedEndpointsResult extends Schema.Class<ListSharedEndpointsResult>("ListSharedEndpointsResult")({Endpoints: Schema.optional(Endpoints), NextToken: Schema.optional(Schema.String)}) {}
export class Outpost extends Schema.Class<Outpost>("Outpost")({OutpostArn: Schema.optional(Schema.String), S3OutpostArn: Schema.optional(Schema.String), OutpostId: Schema.optional(Schema.String), OwnerId: Schema.optional(Schema.String), CapacityInBytes: Schema.optional(Schema.Number)}) {}
export const Outposts = Schema.Array(Outpost);
export class ConflictException extends Schema.Class<ConflictException>("ConflictException")({Message: Schema.optional(Schema.String)}) {}
export class InternalServerException extends Schema.Class<InternalServerException>("InternalServerException")({Message: Schema.optional(Schema.String)}) {}
export class ListOutpostsWithS3Result extends Schema.Class<ListOutpostsWithS3Result>("ListOutpostsWithS3Result")({Outposts: Schema.optional(Outposts), NextToken: Schema.optional(Schema.String)}) {}
export class ResourceNotFoundException extends Schema.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class OutpostOfflineException extends Schema.Class<OutpostOfflineException>("OutpostOfflineException")({Message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.optional(Schema.String)}) {}
export class ListEndpointsResult extends Schema.Class<ListEndpointsResult>("ListEndpointsResult")({Endpoints: Schema.optional(Endpoints), NextToken: Schema.optional(Schema.String)}) {}
export class ValidationException extends Schema.Class<ValidationException>("ValidationException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException.fields) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException.fields) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class OutpostOfflineExceptionError extends Schema.TaggedError<OutpostOfflineExceptionError>()("OutpostOfflineException", OutpostOfflineException.fields) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};

//# Operations
export const listSharedEndpoints = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/ListSharedEndpoints", method: "GET", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.ListSharedEndpoints" }, ListSharedEndpointsRequest, ListSharedEndpointsResult, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createEndpoint = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/CreateEndpoint", method: "POST", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.CreateEndpoint" }, CreateEndpointRequest, CreateEndpointResult, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, OutpostOfflineExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteEndpoint = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/DeleteEndpoint", method: "DELETE", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.DeleteEndpoint" }, DeleteEndpointRequest, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, OutpostOfflineExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEndpoints = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/ListEndpoints", method: "GET", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.ListEndpoints" }, ListEndpointsRequest, ListEndpointsResult, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listOutpostsWithS3 = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/ListOutpostsWithS3", method: "GET", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.ListOutpostsWithS3" }, ListOutpostsWithS3Request, ListOutpostsWithS3Result, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
