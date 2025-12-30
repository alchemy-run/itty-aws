import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const ResourceTypesInput = S.Array(S.String);
export const TagKeys = S.Array(S.String);
export const TagMapInput = S.Record({key: S.String, value: S.String});
export class CreateSinkInput extends S.Class<CreateSinkInput>("CreateSinkInput")({Name: S.String, Tags: S.optional(TagMapInput)}) {}
export class DeleteLinkInput extends S.Class<DeleteLinkInput>("DeleteLinkInput")({Identifier: S.String}) {}
export class DeleteLinkOutput extends S.Class<DeleteLinkOutput>("DeleteLinkOutput")({}) {}
export class DeleteSinkInput extends S.Class<DeleteSinkInput>("DeleteSinkInput")({Identifier: S.String}) {}
export class DeleteSinkOutput extends S.Class<DeleteSinkOutput>("DeleteSinkOutput")({}) {}
export class GetLinkInput extends S.Class<GetLinkInput>("GetLinkInput")({Identifier: S.String, IncludeTags: S.optional(S.Boolean)}) {}
export class GetSinkInput extends S.Class<GetSinkInput>("GetSinkInput")({Identifier: S.String, IncludeTags: S.optional(S.Boolean)}) {}
export class GetSinkPolicyInput extends S.Class<GetSinkPolicyInput>("GetSinkPolicyInput")({SinkIdentifier: S.String}) {}
export class ListAttachedLinksInput extends S.Class<ListAttachedLinksInput>("ListAttachedLinksInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String), SinkIdentifier: S.String}) {}
export class ListLinksInput extends S.Class<ListLinksInput>("ListLinksInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListSinksInput extends S.Class<ListSinksInput>("ListSinksInput")({MaxResults: S.optional(S.Number), NextToken: S.optional(S.String)}) {}
export class ListTagsForResourceInput extends S.Class<ListTagsForResourceInput>("ListTagsForResourceInput")({ResourceArn: S.String}) {}
export class PutSinkPolicyInput extends S.Class<PutSinkPolicyInput>("PutSinkPolicyInput")({SinkIdentifier: S.String, Policy: S.String}) {}
export class TagResourceInput extends S.Class<TagResourceInput>("TagResourceInput")({ResourceArn: S.String, Tags: TagMapInput}) {}
export class TagResourceOutput extends S.Class<TagResourceOutput>("TagResourceOutput")({}) {}
export class UntagResourceInput extends S.Class<UntagResourceInput>("UntagResourceInput")({ResourceArn: S.String, TagKeys: TagKeys}) {}
export class UntagResourceOutput extends S.Class<UntagResourceOutput>("UntagResourceOutput")({}) {}
export class LogGroupConfiguration extends S.Class<LogGroupConfiguration>("LogGroupConfiguration")({Filter: S.String}) {}
export class MetricConfiguration extends S.Class<MetricConfiguration>("MetricConfiguration")({Filter: S.String}) {}
export class LinkConfiguration extends S.Class<LinkConfiguration>("LinkConfiguration")({LogGroupConfiguration: S.optional(LogGroupConfiguration), MetricConfiguration: S.optional(MetricConfiguration)}) {}
export class UpdateLinkInput extends S.Class<UpdateLinkInput>("UpdateLinkInput")({Identifier: S.String, ResourceTypes: ResourceTypesInput, LinkConfiguration: S.optional(LinkConfiguration), IncludeTags: S.optional(S.Boolean)}) {}
export const ResourceTypesOutput = S.Array(S.String);
export class InternalServiceFault extends S.Class<InternalServiceFault>("InternalServiceFault")({Message: S.optional(S.String), amznErrorType: S.optional(H.Header("x-amzn-ErrorType"))}) {}
export class ConflictException extends S.Class<ConflictException>("ConflictException")({Message: S.optional(S.String), amznErrorType: S.optional(H.Header("x-amzn-ErrorType"))}) {}
export const TagMapOutput = S.Record({key: S.String, value: S.String});
export class GetLinkOutput extends S.Class<GetLinkOutput>("GetLinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Label: S.optional(S.String), LabelTemplate: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput), SinkArn: S.optional(S.String), Tags: S.optional(TagMapOutput), LinkConfiguration: S.optional(LinkConfiguration)}) {}
export class GetSinkOutput extends S.Class<GetSinkOutput>("GetSinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Tags: S.optional(TagMapOutput)}) {}
export class GetSinkPolicyOutput extends S.Class<GetSinkPolicyOutput>("GetSinkPolicyOutput")({SinkArn: S.optional(S.String), SinkId: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: S.optional(TagMapOutput)}) {}
export class PutSinkPolicyOutput extends S.Class<PutSinkPolicyOutput>("PutSinkPolicyOutput")({SinkArn: S.optional(S.String), SinkId: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({Message: S.optional(S.String), amznErrorType: S.optional(H.Header("x-amzn-ErrorType"))}) {}
export class ValidationException extends S.Class<ValidationException>("ValidationException")({Message: S.optional(S.String)}) {}
export class UpdateLinkOutput extends S.Class<UpdateLinkOutput>("UpdateLinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Label: S.optional(S.String), LabelTemplate: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput), SinkArn: S.optional(S.String), Tags: S.optional(TagMapOutput), LinkConfiguration: S.optional(LinkConfiguration)}) {}
export class ListAttachedLinksItem extends S.Class<ListAttachedLinksItem>("ListAttachedLinksItem")({Label: S.optional(S.String), LinkArn: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput)}) {}
export const ListAttachedLinksItems = S.Array(ListAttachedLinksItem);
export class ListLinksItem extends S.Class<ListLinksItem>("ListLinksItem")({Arn: S.optional(S.String), Id: S.optional(S.String), Label: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput), SinkArn: S.optional(S.String)}) {}
export const ListLinksItems = S.Array(ListLinksItem);
export class ListSinksItem extends S.Class<ListSinksItem>("ListSinksItem")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String)}) {}
export const ListSinksItems = S.Array(ListSinksItem);
export class CreateLinkInput extends S.Class<CreateLinkInput>("CreateLinkInput")({LabelTemplate: S.String, ResourceTypes: ResourceTypesInput, SinkIdentifier: S.String, Tags: S.optional(TagMapInput), LinkConfiguration: S.optional(LinkConfiguration)}) {}
export class CreateSinkOutput extends S.Class<CreateSinkOutput>("CreateSinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Tags: S.optional(TagMapOutput)}) {}
export class InvalidParameterException extends S.Class<InvalidParameterException>("InvalidParameterException")({message: S.optional(S.String), amznErrorType: S.optional(H.Header("x-amzn-ErrorType"))}) {}
export class MissingRequiredParameterException extends S.Class<MissingRequiredParameterException>("MissingRequiredParameterException")({message: S.optional(S.String), amznErrorType: S.optional(H.Header("x-amzn-ErrorType"))}) {}
export class ListAttachedLinksOutput extends S.Class<ListAttachedLinksOutput>("ListAttachedLinksOutput")({Items: ListAttachedLinksItems, NextToken: S.optional(S.String)}) {}
export class ListLinksOutput extends S.Class<ListLinksOutput>("ListLinksOutput")({Items: ListLinksItems, NextToken: S.optional(S.String)}) {}
export class ListSinksOutput extends S.Class<ListSinksOutput>("ListSinksOutput")({Items: ListSinksItems, NextToken: S.optional(S.String)}) {}
export class TooManyTagsException extends S.Class<TooManyTagsException>("TooManyTagsException")({Message: S.optional(S.String)}) {}
export class CreateLinkOutput extends S.Class<CreateLinkOutput>("CreateLinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Label: S.optional(S.String), LabelTemplate: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput), SinkArn: S.optional(S.String), Tags: S.optional(TagMapOutput), LinkConfiguration: S.optional(LinkConfiguration)}) {}
export class ServiceQuotaExceededException extends S.Class<ServiceQuotaExceededException>("ServiceQuotaExceededException")({Message: S.optional(S.String), amznErrorType: S.optional(H.Header("x-amzn-ErrorType"))}) {}

//# Errors
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class InternalServiceFaultError extends S.TaggedError<InternalServiceFaultError>()("InternalServiceFault", InternalServiceFault.fields) {};
export class ConflictExceptionError extends S.TaggedError<ConflictExceptionError>()("ConflictException", ConflictException.fields) {};
export class InvalidParameterExceptionError extends S.TaggedError<InvalidParameterExceptionError>()("InvalidParameterException", InvalidParameterException.fields) {};
export class MissingRequiredParameterExceptionError extends S.TaggedError<MissingRequiredParameterExceptionError>()("MissingRequiredParameterException", MissingRequiredParameterException.fields) {};
export class ValidationExceptionError extends S.TaggedError<ValidationExceptionError>()("ValidationException", ValidationException.fields) {};
export class TooManyTagsExceptionError extends S.TaggedError<TooManyTagsExceptionError>()("TooManyTagsException", TooManyTagsException.fields) {};
export class ServiceQuotaExceededExceptionError extends S.TaggedError<ServiceQuotaExceededExceptionError>()("ServiceQuotaExceededException", ServiceQuotaExceededException.fields) {};

//# Operations
export const getLink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/GetLink", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.GetLink" }, GetLinkInput, GetLinkOutput, [InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/GetSink", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.GetSink" }, GetSinkInput, GetSinkOutput, [InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getSinkPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/GetSinkPolicy", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.GetSinkPolicy" }, GetSinkPolicyInput, GetSinkPolicyOutput, [InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listTagsForResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const putSinkPolicy = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/PutSinkPolicy", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.PutSinkPolicy" }, PutSinkPolicyInput, PutSinkPolicyOutput, [InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const untagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ResourceNotFoundExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const updateLink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/UpdateLink", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.UpdateLink" }, UpdateLinkInput, UpdateLinkOutput, [InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteLink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/DeleteLink", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.DeleteLink" }, DeleteLinkInput, DeleteLinkOutput, [InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteSink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/DeleteSink", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.DeleteSink" }, DeleteSinkInput, DeleteSinkOutput, [ConflictExceptionError, InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listAttachedLinks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/ListAttachedLinks", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.ListAttachedLinks" }, ListAttachedLinksInput, ListAttachedLinksOutput, [InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listLinks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/ListLinks", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.ListLinks" }, ListLinksInput, ListLinksOutput, [InternalServiceFaultError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const listSinks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/ListSinks", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.ListSinks" }, ListSinksInput, ListSinksOutput, [InternalServiceFaultError, InvalidParameterExceptionError, ResourceNotFoundExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const tagResource = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.TagResource" }, TagResourceInput, TagResourceOutput, [ResourceNotFoundExceptionError, TooManyTagsExceptionError, ValidationExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createLink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/CreateLink", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.CreateLink" }, CreateLinkInput, CreateLinkOutput, [ConflictExceptionError, InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ServiceQuotaExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const createSink = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/CreateSink", method: "POST", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.CreateSink" }, CreateSinkInput, CreateSinkOutput, [ConflictExceptionError, InternalServiceFaultError, InvalidParameterExceptionError, MissingRequiredParameterExceptionError, ServiceQuotaExceededExceptionError]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
