import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
export const TagKeys = Schema.Array(Schema.String);
export const ListTagsForResourceInput = Schema.Struct({resourceArn: Schema.String});
export const UntagResourceInput = Schema.Struct({resourceArn: Schema.String, tagKeys: TagKeys});
export const UntagResourceOutput = Schema.Struct({});
export const TagMap = Schema.Record({key: Schema.String, value: Schema.String});
export const ListTagsForResourceOutput = Schema.Struct({tags: TagMap});
export const TagResourceInput = Schema.Struct({resourceArn: Schema.String, tags: TagMap});
export const TagResourceOutput = Schema.Struct({});
export const ResourceNotFoundException = Schema.Struct({message: Schema.String, resourceId: Schema.String, resourceType: Schema.String});
export const ValidationExceptionField = Schema.Struct({name: Schema.String, message: Schema.String});
export const ValidationExceptionFieldList = Schema.Array(ValidationExceptionField);
export const ValidationException = Schema.Struct({message: Schema.optional(Schema.String), reason: Schema.optional(Schema.String), fieldList: Schema.optional(ValidationExceptionFieldList)});
export const TagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-02-17", uri: "/tags/{resourceArn}", method: "POST", sdkId: "CleanRooms", sigV4ServiceName: "cleanrooms", name: "AWSBastionControlPlaneServiceLambda.TagResource" }, TagResourceInput, TagResourceOutput, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const UntagResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-02-17", uri: "/tags/{resourceArn}", method: "DELETE", sdkId: "CleanRooms", sigV4ServiceName: "cleanrooms", name: "AWSBastionControlPlaneServiceLambda.UntagResource" }, UntagResourceInput, UntagResourceOutput, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const ListTagsForResource = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-02-17", uri: "/tags/{resourceArn}", method: "GET", sdkId: "CleanRooms", sigV4ServiceName: "cleanrooms", name: "AWSBastionControlPlaneServiceLambda.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, Schema.Union(ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException), ErrorAnnotation("ValidationException", ValidationException))), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
