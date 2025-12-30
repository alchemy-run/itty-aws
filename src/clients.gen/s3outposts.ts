import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const CreateEndpointRequest = Schema.Struct({OutpostId: Schema.String, SubnetId: Schema.String, SecurityGroupId: Schema.String, AccessType: Schema.optional(Schema.String), CustomerOwnedIpv4Pool: Schema.optional(Schema.String)});
export const DeleteEndpointRequest = Schema.Struct({EndpointId: Schema.String, OutpostId: Schema.String});
export const ListEndpointsRequest = Schema.Struct({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const ListOutpostsWithS3Request = Schema.Struct({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number)});
export const ListSharedEndpointsRequest = Schema.Struct({NextToken: Schema.optional(Schema.String), MaxResults: Schema.optional(Schema.Number), OutpostId: Schema.String});
export const CreateEndpointResult = Schema.Struct({EndpointArn: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const NetworkInterface = Schema.Struct({NetworkInterfaceId: Schema.optional(Schema.String)});
export const NetworkInterfaces = Schema.Array(NetworkInterface);
export const FailedReason = Schema.Struct({ErrorCode: Schema.optional(Schema.String), Message: Schema.optional(Schema.String)});
export const Endpoint = Schema.Struct({EndpointArn: Schema.optional(Schema.String), OutpostsId: Schema.optional(Schema.String), CidrBlock: Schema.optional(Schema.String), Status: Schema.optional(Schema.String), CreationTime: Schema.optional(Schema.Date), NetworkInterfaces: Schema.optional(NetworkInterfaces), VpcId: Schema.optional(Schema.String), SubnetId: Schema.optional(Schema.String), SecurityGroupId: Schema.optional(Schema.String), AccessType: Schema.optional(Schema.String), CustomerOwnedIpv4Pool: Schema.optional(Schema.String), FailedReason: Schema.optional(FailedReason)});
export const Endpoints = Schema.Array(Endpoint);
export const ListSharedEndpointsResult = Schema.Struct({Endpoints: Schema.optional(Endpoints), NextToken: Schema.optional(Schema.String)});
export const Outpost = Schema.Struct({OutpostArn: Schema.optional(Schema.String), S3OutpostArn: Schema.optional(Schema.String), OutpostId: Schema.optional(Schema.String), OwnerId: Schema.optional(Schema.String), CapacityInBytes: Schema.optional(Schema.Number)});
export const Outposts = Schema.Array(Outpost);
export const ConflictException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InternalServerException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ListOutpostsWithS3Result = Schema.Struct({Outposts: Schema.optional(Outposts), NextToken: Schema.optional(Schema.String)});
export const ResourceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const OutpostOfflineException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ListEndpointsResult = Schema.Struct({Endpoints: Schema.optional(Endpoints), NextToken: Schema.optional(Schema.String)});
export const ValidationException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class AccessDeniedExceptionError extends Schema.TaggedError<AccessDeniedExceptionError>()("AccessDeniedException", AccessDeniedException) {};
export class InternalServerExceptionError extends Schema.TaggedError<InternalServerExceptionError>()("InternalServerException", InternalServerException) {};
export class ConflictExceptionError extends Schema.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException) {};
export class OutpostOfflineExceptionError extends Schema.TaggedError<OutpostOfflineExceptionError>()("OutpostOfflineException", OutpostOfflineException) {};
export class ResourceNotFoundExceptionError extends Schema.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class ValidationExceptionError extends Schema.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException) {};

//# Operations
export const listSharedEndpoints = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/ListSharedEndpoints", method: "GET", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.ListSharedEndpoints" }, ListSharedEndpointsRequest, ListSharedEndpointsResult, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createEndpoint = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/CreateEndpoint", method: "POST", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.CreateEndpoint" }, CreateEndpointRequest, CreateEndpointResult, [AccessDeniedExceptionError, ConflictExceptionError, InternalServerExceptionError, OutpostOfflineExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteEndpoint = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/DeleteEndpoint", method: "DELETE", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.DeleteEndpoint" }, DeleteEndpointRequest, Schema.Struct({}), [AccessDeniedExceptionError, InternalServerExceptionError, OutpostOfflineExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listEndpoints = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/ListEndpoints", method: "GET", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.ListEndpoints" }, ListEndpointsRequest, ListEndpointsResult, [AccessDeniedExceptionError, InternalServerExceptionError, ResourceNotFoundExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listOutpostsWithS3 = /*#__PURE__*/ makeOperation(() => Operation({ version: "2017-07-25", uri: "/S3Outposts/ListOutpostsWithS3", method: "GET", sdkId: "S3Outposts", sigV4ServiceName: "s3-outposts", name: "S3Outposts.ListOutpostsWithS3" }, ListOutpostsWithS3Request, ListOutpostsWithS3Result, [AccessDeniedExceptionError, InternalServerExceptionError, ThrottlingExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
