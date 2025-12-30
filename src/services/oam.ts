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
export const TagMapOutput = S.Record({key: S.String, value: S.String});
export class GetLinkOutput extends S.Class<GetLinkOutput>("GetLinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Label: S.optional(S.String), LabelTemplate: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput), SinkArn: S.optional(S.String), Tags: S.optional(TagMapOutput), LinkConfiguration: S.optional(LinkConfiguration)}) {}
export class GetSinkOutput extends S.Class<GetSinkOutput>("GetSinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Tags: S.optional(TagMapOutput)}) {}
export class GetSinkPolicyOutput extends S.Class<GetSinkPolicyOutput>("GetSinkPolicyOutput")({SinkArn: S.optional(S.String), SinkId: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class ListTagsForResourceOutput extends S.Class<ListTagsForResourceOutput>("ListTagsForResourceOutput")({Tags: S.optional(TagMapOutput)}) {}
export class PutSinkPolicyOutput extends S.Class<PutSinkPolicyOutput>("PutSinkPolicyOutput")({SinkArn: S.optional(S.String), SinkId: S.optional(S.String), Policy: S.optional(S.String)}) {}
export class UpdateLinkOutput extends S.Class<UpdateLinkOutput>("UpdateLinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Label: S.optional(S.String), LabelTemplate: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput), SinkArn: S.optional(S.String), Tags: S.optional(TagMapOutput), LinkConfiguration: S.optional(LinkConfiguration)}) {}
export class ListAttachedLinksItem extends S.Class<ListAttachedLinksItem>("ListAttachedLinksItem")({Label: S.optional(S.String), LinkArn: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput)}) {}
export const ListAttachedLinksItems = S.Array(ListAttachedLinksItem);
export class ListLinksItem extends S.Class<ListLinksItem>("ListLinksItem")({Arn: S.optional(S.String), Id: S.optional(S.String), Label: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput), SinkArn: S.optional(S.String)}) {}
export const ListLinksItems = S.Array(ListLinksItem);
export class ListSinksItem extends S.Class<ListSinksItem>("ListSinksItem")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String)}) {}
export const ListSinksItems = S.Array(ListSinksItem);
export class CreateLinkInput extends S.Class<CreateLinkInput>("CreateLinkInput")({LabelTemplate: S.String, ResourceTypes: ResourceTypesInput, SinkIdentifier: S.String, Tags: S.optional(TagMapInput), LinkConfiguration: S.optional(LinkConfiguration)}) {}
export class CreateSinkOutput extends S.Class<CreateSinkOutput>("CreateSinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Name: S.optional(S.String), Tags: S.optional(TagMapOutput)}) {}
export class ListAttachedLinksOutput extends S.Class<ListAttachedLinksOutput>("ListAttachedLinksOutput")({Items: ListAttachedLinksItems, NextToken: S.optional(S.String)}) {}
export class ListLinksOutput extends S.Class<ListLinksOutput>("ListLinksOutput")({Items: ListLinksItems, NextToken: S.optional(S.String)}) {}
export class ListSinksOutput extends S.Class<ListSinksOutput>("ListSinksOutput")({Items: ListSinksItems, NextToken: S.optional(S.String)}) {}
export class CreateLinkOutput extends S.Class<CreateLinkOutput>("CreateLinkOutput")({Arn: S.optional(S.String), Id: S.optional(S.String), Label: S.optional(S.String), LabelTemplate: S.optional(S.String), ResourceTypes: S.optional(ResourceTypesOutput), SinkArn: S.optional(S.String), Tags: S.optional(TagMapOutput), LinkConfiguration: S.optional(LinkConfiguration)}) {}

//# Errors
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class InternalServiceFault extends S.TaggedError<InternalServiceFault>()("InternalServiceFault", {Message: S.optional(S.String), amznErrorType: S.optional(H.Header("x-amzn-ErrorType"))}) {};
export class ConflictException extends S.TaggedError<ConflictException>()("ConflictException", {Message: S.optional(S.String), amznErrorType: S.optional(H.Header("x-amzn-ErrorType"))}) {};
export class InvalidParameterException extends S.TaggedError<InvalidParameterException>()("InvalidParameterException", {}) {};
export class MissingRequiredParameterException extends S.TaggedError<MissingRequiredParameterException>()("MissingRequiredParameterException", {}) {};
export class ValidationException extends S.TaggedError<ValidationException>()("ValidationException", {}) {};
export class TooManyTagsException extends S.TaggedError<TooManyTagsException>()("TooManyTagsException", {Message: S.optional(S.String)}) {};
export class ServiceQuotaExceededException extends S.TaggedError<ServiceQuotaExceededException>()("ServiceQuotaExceededException", {}) {};

//# Operations
/**
 * Returns complete information about one link.
 * 
 * To use this operation, provide the link ARN. To retrieve a list of link ARNs, use ListLinks.
 */export const getLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/GetLink", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.GetLink" }, GetLinkInput, GetLinkOutput, [InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns complete information about one monitoring account sink.
 * 
 * To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks.
 */export const getSink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/GetSink", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.GetSink" }, GetSinkInput, GetSinkOutput, [InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.
 */export const getSinkPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/GetSinkPolicy", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.GetSinkPolicy" }, GetSinkPolicyInput, GetSinkPolicyOutput, [InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Displays the tags associated with a resource. Both sinks and links support tagging.
 */export const listTagsForResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/tags/{ResourceArn}", method: "GET", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.ListTagsForResource" }, ListTagsForResourceInput, ListTagsForResourceOutput, [ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.
 * 
 * You can also use a sink policy to limit the types of data that is shared. The six types of services with their respective resource types that you can allow or deny are:
 * 
 * - **Metrics** - Specify with `AWS::CloudWatch::Metric`
 * 
 * - **Log groups** - Specify with `AWS::Logs::LogGroup`
 * 
 * - **Traces** - Specify with `AWS::XRay::Trace`
 * 
 * - **Application Insights - Applications** - Specify with `AWS::ApplicationInsights::Application`
 * 
 * - **Internet Monitor** - Specify with `AWS::InternetMonitor::Monitor`
 * 
 * - **Application Signals** - Specify with `AWS::ApplicationSignals::Service` and `AWS::ApplicationSignals::ServiceLevelObjective`
 * 
 * See the examples in this section to see how to specify permitted source accounts and data types.
 */export const putSinkPolicy = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/PutSinkPolicy", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.PutSinkPolicy" }, PutSinkPolicyInput, PutSinkPolicyOutput, [InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Removes one or more tags from the specified resource.
 * 
 * Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the `oam:ResourceTag` permission. The `iam:TagResource` permission does not allow you to tag and untag links and sinks.
 */export const untagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/tags/{ResourceArn}", method: "DELETE", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.UntagResource" }, UntagResourceInput, UntagResourceOutput, [ResourceNotFoundException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation.
 * 
 * When you update a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
 * 
 * To update the list of tags associated with the sink, use TagResource.
 */export const updateLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/UpdateLink", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.UpdateLink" }, UpdateLinkInput, UpdateLinkOutput, [InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.
 */export const deleteLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/DeleteLink", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.DeleteLink" }, DeleteLinkInput, DeleteLinkOutput, [InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Deletes a sink. You must delete all links to a sink before you can delete that sink.
 */export const deleteSink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/DeleteSink", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.DeleteSink" }, DeleteSinkInput, DeleteSinkOutput, [ConflictException, InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns a list of source account links that are linked to this monitoring account sink.
 * 
 * To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks.
 * 
 * To find a list of links for one source account, use ListLinks.
 */export const listAttachedLinks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/ListAttachedLinks", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.ListAttachedLinks" }, ListAttachedLinksInput, ListAttachedLinksOutput, [InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use this operation in a source account to return a list of links to monitoring account sinks that this source account has.
 * 
 * To find a list of links for one monitoring account sink, use ListAttachedLinks from within the monitoring account.
 */export const listLinks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/ListLinks", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.ListLinks" }, ListLinksInput, ListLinksOutput, [InternalServiceFault, InvalidParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use this operation in a monitoring account to return the list of sinks created in that account.
 */export const listSinks = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/ListSinks", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.ListSinks" }, ListSinksInput, ListSinksOutput, [InternalServiceFault, InvalidParameterException, ResourceNotFoundException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged.
 * 
 * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
 * 
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.
 * 
 * You can use the `TagResource` action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.
 * 
 * You can associate as many as 50 tags with a resource.
 * 
 * Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the `oam:ResourceTag` permission. The `iam:ResourceTag` permission does not allow you to tag and untag links and sinks.
 */export const tagResource = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/tags/{ResourceArn}", method: "PUT", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.TagResource" }, TagResourceInput, TagResourceOutput, [ResourceNotFoundException, TooManyTagsException, ValidationException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Creates a link between a source account and a sink that you have created in a monitoring account. After the link is created, data is sent from the source account to the monitoring account. When you create a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
 * 
 * Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts.
 * 
 * For more information, see CreateSink and PutSinkPolicy.
 * 
 * Each monitoring account can be linked to as many as 100,000 source accounts.
 * 
 * Each source account can be linked to as many as five monitoring accounts.
 */export const createLink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/CreateLink", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.CreateLink" }, CreateLinkInput, CreateLinkOutput, [ConflictException, InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Use this to create a *sink* in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data.
 * 
 * After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see PutSinkPolicy.
 * 
 * Each account can contain one sink per Region. If you delete a sink, you can then create a new one in that Region.
 */export const createSink = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-06-10", uri: "/CreateSink", sdkId: "OAM", sigV4ServiceName: "oam", name: "oamservice.CreateSink" }, CreateSinkInput, CreateSinkOutput, [ConflictException, InternalServiceFault, InvalidParameterException, MissingRequiredParameterException, ServiceQuotaExceededException]), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
