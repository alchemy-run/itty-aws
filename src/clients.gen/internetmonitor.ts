import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const InternalServerErrorException = Schema.Struct({message: Schema.optional(Schema.String)});
export const NotFoundException = Schema.Struct({message: Schema.optional(Schema.String)});
export const TooManyRequestsException = Schema.Struct({message: Schema.optional(Schema.String)});
export const TagResourceOutput = Schema.Struct({});
export const BadRequestException = Schema.Struct({message: Schema.optional(Schema.String)});
export const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)});
export const ListTagsForResourceOutput = Schema.Struct({Tags: Schema.optional(TagMap)});
export const UntagResourceOutput = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const UntagResourceInput = Schema.Struct({ResourceArn: Schema.String, TagKeys: TagKeys});
export const TagKeys = Schema.Array(Schema.String);
export const TagResourceInput = Schema.Struct({ResourceArn: Schema.String, Tags: TagMap});
export const ListTagsForResourceInput = Schema.Struct({ResourceArn: Schema.String});
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "POST", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/tags/{ResourceArn}", method: "GET", sdkId: "InternetMonitor", sigV4ServiceName: "internetmonitor", name: "InternetMonitor20210603.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("BadRequestException", BadRequestException), ErrorAnnotation("InternalServerErrorException", InternalServerErrorException), ErrorAnnotation("NotFoundException", NotFoundException), ErrorAnnotation("TooManyRequestsException", TooManyRequestsException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
