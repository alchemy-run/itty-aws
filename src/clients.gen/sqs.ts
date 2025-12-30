import * as S from "effect/Schema"
import { FormatAwsJSON10Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export const AWSAccountIdList = S.Array(S.String);
export const ActionNameList = S.Array(S.String);
export const AttributeNameList = S.Array(S.String);
export const MessageSystemAttributeList = S.Array(S.String);
export const MessageAttributeNameList = S.Array(S.String);
export const TagKeyList = S.Array(S.String);
export class AddPermissionRequest extends S.Class<AddPermissionRequest>("AddPermissionRequest")({QueueUrl: S.String, Label: S.String, AWSAccountIds: AWSAccountIdList, Actions: ActionNameList}) {}
export class CancelMessageMoveTaskRequest extends S.Class<CancelMessageMoveTaskRequest>("CancelMessageMoveTaskRequest")({TaskHandle: S.String}) {}
export class ChangeMessageVisibilityRequest extends S.Class<ChangeMessageVisibilityRequest>("ChangeMessageVisibilityRequest")({QueueUrl: S.String, ReceiptHandle: S.String, VisibilityTimeout: S.Number}) {}
export class DeleteMessageRequest extends S.Class<DeleteMessageRequest>("DeleteMessageRequest")({QueueUrl: S.String, ReceiptHandle: S.String}) {}
export class InvalidIdFormat extends S.Class<InvalidIdFormat>("InvalidIdFormat")({}) {}
export class DeleteQueueRequest extends S.Class<DeleteQueueRequest>("DeleteQueueRequest")({QueueUrl: S.String}) {}
export class GetQueueAttributesRequest extends S.Class<GetQueueAttributesRequest>("GetQueueAttributesRequest")({QueueUrl: S.String, AttributeNames: S.optional(AttributeNameList)}) {}
export class GetQueueUrlRequest extends S.Class<GetQueueUrlRequest>("GetQueueUrlRequest")({QueueName: S.String, QueueOwnerAWSAccountId: S.optional(S.String)}) {}
export class ListDeadLetterSourceQueuesRequest extends S.Class<ListDeadLetterSourceQueuesRequest>("ListDeadLetterSourceQueuesRequest")({QueueUrl: S.String, NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListMessageMoveTasksRequest extends S.Class<ListMessageMoveTasksRequest>("ListMessageMoveTasksRequest")({SourceArn: S.String, MaxResults: S.optional(S.Number)}) {}
export class ListQueuesRequest extends S.Class<ListQueuesRequest>("ListQueuesRequest")({QueueNamePrefix: S.optional(S.String), NextToken: S.optional(S.String), MaxResults: S.optional(S.Number)}) {}
export class ListQueueTagsRequest extends S.Class<ListQueueTagsRequest>("ListQueueTagsRequest")({QueueUrl: S.String}) {}
export class PurgeQueueRequest extends S.Class<PurgeQueueRequest>("PurgeQueueRequest")({QueueUrl: S.String}) {}
export class ReceiveMessageRequest extends S.Class<ReceiveMessageRequest>("ReceiveMessageRequest")({QueueUrl: S.String, AttributeNames: S.optional(AttributeNameList), MessageSystemAttributeNames: S.optional(MessageSystemAttributeList), MessageAttributeNames: S.optional(MessageAttributeNameList), MaxNumberOfMessages: S.optional(S.Number), VisibilityTimeout: S.optional(S.Number), WaitTimeSeconds: S.optional(S.Number), ReceiveRequestAttemptId: S.optional(S.String)}) {}
export class RemovePermissionRequest extends S.Class<RemovePermissionRequest>("RemovePermissionRequest")({QueueUrl: S.String, Label: S.String}) {}
export const QueueAttributeMap = S.Record({key: S.String, value: S.String});
export class SetQueueAttributesRequest extends S.Class<SetQueueAttributesRequest>("SetQueueAttributesRequest")({QueueUrl: S.String, Attributes: QueueAttributeMap}) {}
export class StartMessageMoveTaskRequest extends S.Class<StartMessageMoveTaskRequest>("StartMessageMoveTaskRequest")({SourceArn: S.String, DestinationArn: S.optional(S.String), MaxNumberOfMessagesPerSecond: S.optional(S.Number)}) {}
export const TagMap = S.Record({key: S.String, value: S.String});
export class TagQueueRequest extends S.Class<TagQueueRequest>("TagQueueRequest")({QueueUrl: S.String, Tags: TagMap}) {}
export class UntagQueueRequest extends S.Class<UntagQueueRequest>("UntagQueueRequest")({QueueUrl: S.String, TagKeys: TagKeyList}) {}
export class ChangeMessageVisibilityBatchRequestEntry extends S.Class<ChangeMessageVisibilityBatchRequestEntry>("ChangeMessageVisibilityBatchRequestEntry")({Id: S.String, ReceiptHandle: S.String, VisibilityTimeout: S.optional(S.Number)}) {}
export const ChangeMessageVisibilityBatchRequestEntryList = S.Array(ChangeMessageVisibilityBatchRequestEntry);
export class DeleteMessageBatchRequestEntry extends S.Class<DeleteMessageBatchRequestEntry>("DeleteMessageBatchRequestEntry")({Id: S.String, ReceiptHandle: S.String}) {}
export const DeleteMessageBatchRequestEntryList = S.Array(DeleteMessageBatchRequestEntry);
export const QueueUrlList = S.Array(S.String);
export const StringList = S.Array(S.String);
export const BinaryList = S.Array(H.StreamBody());
export class MessageAttributeValue extends S.Class<MessageAttributeValue>("MessageAttributeValue")({StringValue: S.optional(S.String), BinaryValue: S.optional(H.StreamBody()), StringListValues: S.optional(StringList), BinaryListValues: S.optional(BinaryList), DataType: S.String}) {}
export const MessageBodyAttributeMap = S.Record({key: S.String, value: MessageAttributeValue});
export class MessageSystemAttributeValue extends S.Class<MessageSystemAttributeValue>("MessageSystemAttributeValue")({StringValue: S.optional(S.String), BinaryValue: S.optional(H.StreamBody()), StringListValues: S.optional(StringList), BinaryListValues: S.optional(BinaryList), DataType: S.String}) {}
export const MessageBodySystemAttributeMap = S.Record({key: S.String, value: MessageSystemAttributeValue});
export class SendMessageBatchRequestEntry extends S.Class<SendMessageBatchRequestEntry>("SendMessageBatchRequestEntry")({Id: S.String, MessageBody: S.String, DelaySeconds: S.optional(S.Number), MessageAttributes: S.optional(MessageBodyAttributeMap), MessageSystemAttributes: S.optional(MessageBodySystemAttributeMap), MessageDeduplicationId: S.optional(S.String), MessageGroupId: S.optional(S.String)}) {}
export const SendMessageBatchRequestEntryList = S.Array(SendMessageBatchRequestEntry);
export class InvalidAddress extends S.Class<InvalidAddress>("InvalidAddress")({message: S.optional(S.String)}) {}
export class CancelMessageMoveTaskResult extends S.Class<CancelMessageMoveTaskResult>("CancelMessageMoveTaskResult")({ApproximateNumberOfMessagesMoved: S.optional(S.Number)}) {}
export class InvalidSecurity extends S.Class<InvalidSecurity>("InvalidSecurity")({message: S.optional(S.String)}) {}
export class MessageNotInflight extends S.Class<MessageNotInflight>("MessageNotInflight")({}) {}
export class ChangeMessageVisibilityBatchRequest extends S.Class<ChangeMessageVisibilityBatchRequest>("ChangeMessageVisibilityBatchRequest")({QueueUrl: S.String, Entries: ChangeMessageVisibilityBatchRequestEntryList}) {}
export class CreateQueueRequest extends S.Class<CreateQueueRequest>("CreateQueueRequest")({QueueName: S.String, Attributes: S.optional(QueueAttributeMap), tags: S.optional(TagMap)}) {}
export class QueueDoesNotExist extends S.Class<QueueDoesNotExist>("QueueDoesNotExist")({message: S.optional(S.String)}) {}
export class DeleteMessageBatchRequest extends S.Class<DeleteMessageBatchRequest>("DeleteMessageBatchRequest")({QueueUrl: S.String, Entries: DeleteMessageBatchRequestEntryList}) {}
export class RequestThrottled extends S.Class<RequestThrottled>("RequestThrottled")({message: S.optional(S.String)}) {}
export class GetQueueAttributesResult extends S.Class<GetQueueAttributesResult>("GetQueueAttributesResult")({Attributes: S.optional(QueueAttributeMap)}) {}
export class GetQueueUrlResult extends S.Class<GetQueueUrlResult>("GetQueueUrlResult")({QueueUrl: S.optional(S.String)}) {}
export class ListDeadLetterSourceQueuesResult extends S.Class<ListDeadLetterSourceQueuesResult>("ListDeadLetterSourceQueuesResult")({queueUrls: QueueUrlList, NextToken: S.optional(S.String)}) {}
export class ListQueuesResult extends S.Class<ListQueuesResult>("ListQueuesResult")({QueueUrls: S.optional(QueueUrlList), NextToken: S.optional(S.String)}) {}
export class ListQueueTagsResult extends S.Class<ListQueueTagsResult>("ListQueueTagsResult")({Tags: S.optional(TagMap)}) {}
export class PurgeQueueInProgress extends S.Class<PurgeQueueInProgress>("PurgeQueueInProgress")({message: S.optional(S.String)}) {}
export class UnsupportedOperation extends S.Class<UnsupportedOperation>("UnsupportedOperation")({message: S.optional(S.String)}) {}
export class SendMessageBatchRequest extends S.Class<SendMessageBatchRequest>("SendMessageBatchRequest")({QueueUrl: S.String, Entries: SendMessageBatchRequestEntryList}) {}
export class InvalidAttributeName extends S.Class<InvalidAttributeName>("InvalidAttributeName")({message: S.optional(S.String)}) {}
export class StartMessageMoveTaskResult extends S.Class<StartMessageMoveTaskResult>("StartMessageMoveTaskResult")({TaskHandle: S.optional(S.String)}) {}
export class ListMessageMoveTasksResultEntry extends S.Class<ListMessageMoveTasksResultEntry>("ListMessageMoveTasksResultEntry")({TaskHandle: S.optional(S.String), Status: S.optional(S.String), SourceArn: S.optional(S.String), DestinationArn: S.optional(S.String), MaxNumberOfMessagesPerSecond: S.optional(S.Number), ApproximateNumberOfMessagesMoved: S.optional(S.Number), ApproximateNumberOfMessagesToMove: S.optional(S.Number), FailureReason: S.optional(S.String), StartedTimestamp: S.optional(S.Number)}) {}
export const ListMessageMoveTasksResultEntryList = S.Array(ListMessageMoveTasksResultEntry);
export class OverLimit extends S.Class<OverLimit>("OverLimit")({message: S.optional(S.String)}) {}
export class ResourceNotFoundException extends S.Class<ResourceNotFoundException>("ResourceNotFoundException")({message: S.optional(S.String)}) {}
export class ReceiptHandleIsInvalid extends S.Class<ReceiptHandleIsInvalid>("ReceiptHandleIsInvalid")({message: S.optional(S.String)}) {}
export class CreateQueueResult extends S.Class<CreateQueueResult>("CreateQueueResult")({QueueUrl: S.optional(S.String)}) {}
export class ListMessageMoveTasksResult extends S.Class<ListMessageMoveTasksResult>("ListMessageMoveTasksResult")({Results: S.optional(ListMessageMoveTasksResultEntryList)}) {}
export class SendMessageRequest extends S.Class<SendMessageRequest>("SendMessageRequest")({QueueUrl: S.String, MessageBody: S.String, DelaySeconds: S.optional(S.Number), MessageAttributes: S.optional(MessageBodyAttributeMap), MessageSystemAttributes: S.optional(MessageBodySystemAttributeMap), MessageDeduplicationId: S.optional(S.String), MessageGroupId: S.optional(S.String)}) {}
export class InvalidAttributeValue extends S.Class<InvalidAttributeValue>("InvalidAttributeValue")({message: S.optional(S.String)}) {}
export const MessageSystemAttributeMap = S.Record({key: S.String, value: S.String});
export class ChangeMessageVisibilityBatchResultEntry extends S.Class<ChangeMessageVisibilityBatchResultEntry>("ChangeMessageVisibilityBatchResultEntry")({Id: S.String}) {}
export const ChangeMessageVisibilityBatchResultEntryList = S.Array(ChangeMessageVisibilityBatchResultEntry);
export class BatchResultErrorEntry extends S.Class<BatchResultErrorEntry>("BatchResultErrorEntry")({Id: S.String, SenderFault: S.Boolean, Code: S.String, Message: S.optional(S.String)}) {}
export const BatchResultErrorEntryList = S.Array(BatchResultErrorEntry);
export class DeleteMessageBatchResultEntry extends S.Class<DeleteMessageBatchResultEntry>("DeleteMessageBatchResultEntry")({Id: S.String}) {}
export const DeleteMessageBatchResultEntryList = S.Array(DeleteMessageBatchResultEntry);
export class Message extends S.Class<Message>("Message")({MessageId: S.optional(S.String), ReceiptHandle: S.optional(S.String), MD5OfBody: S.optional(S.String), Body: S.optional(S.String), Attributes: S.optional(MessageSystemAttributeMap), MD5OfMessageAttributes: S.optional(S.String), MessageAttributes: S.optional(MessageBodyAttributeMap)}) {}
export const MessageList = S.Array(Message);
export class SendMessageBatchResultEntry extends S.Class<SendMessageBatchResultEntry>("SendMessageBatchResultEntry")({Id: S.String, MessageId: S.String, MD5OfMessageBody: S.String, MD5OfMessageAttributes: S.optional(S.String), MD5OfMessageSystemAttributes: S.optional(S.String), SequenceNumber: S.optional(S.String)}) {}
export const SendMessageBatchResultEntryList = S.Array(SendMessageBatchResultEntry);
export class ChangeMessageVisibilityBatchResult extends S.Class<ChangeMessageVisibilityBatchResult>("ChangeMessageVisibilityBatchResult")({Successful: ChangeMessageVisibilityBatchResultEntryList, Failed: BatchResultErrorEntryList}) {}
export class QueueDeletedRecently extends S.Class<QueueDeletedRecently>("QueueDeletedRecently")({message: S.optional(S.String)}) {}
export class DeleteMessageBatchResult extends S.Class<DeleteMessageBatchResult>("DeleteMessageBatchResult")({Successful: DeleteMessageBatchResultEntryList, Failed: BatchResultErrorEntryList}) {}
export class ReceiveMessageResult extends S.Class<ReceiveMessageResult>("ReceiveMessageResult")({Messages: S.optional(MessageList)}) {}
export class SendMessageResult extends S.Class<SendMessageResult>("SendMessageResult")({MD5OfMessageBody: S.optional(S.String), MD5OfMessageAttributes: S.optional(S.String), MD5OfMessageSystemAttributes: S.optional(S.String), MessageId: S.optional(S.String), SequenceNumber: S.optional(S.String)}) {}
export class SendMessageBatchResult extends S.Class<SendMessageBatchResult>("SendMessageBatchResult")({Successful: SendMessageBatchResultEntryList, Failed: BatchResultErrorEntryList}) {}
export class BatchEntryIdsNotDistinct extends S.Class<BatchEntryIdsNotDistinct>("BatchEntryIdsNotDistinct")({message: S.optional(S.String)}) {}
export class QueueNameExists extends S.Class<QueueNameExists>("QueueNameExists")({message: S.optional(S.String)}) {}
export class EmptyBatchRequest extends S.Class<EmptyBatchRequest>("EmptyBatchRequest")({message: S.optional(S.String)}) {}
export class KmsAccessDenied extends S.Class<KmsAccessDenied>("KmsAccessDenied")({message: S.optional(S.String)}) {}
export class InvalidMessageContents extends S.Class<InvalidMessageContents>("InvalidMessageContents")({message: S.optional(S.String)}) {}
export class BatchRequestTooLong extends S.Class<BatchRequestTooLong>("BatchRequestTooLong")({message: S.optional(S.String)}) {}
export class InvalidBatchEntryId extends S.Class<InvalidBatchEntryId>("InvalidBatchEntryId")({message: S.optional(S.String)}) {}
export class TooManyEntriesInBatchRequest extends S.Class<TooManyEntriesInBatchRequest>("TooManyEntriesInBatchRequest")({message: S.optional(S.String)}) {}
export class KmsDisabled extends S.Class<KmsDisabled>("KmsDisabled")({message: S.optional(S.String)}) {}
export class KmsInvalidKeyUsage extends S.Class<KmsInvalidKeyUsage>("KmsInvalidKeyUsage")({message: S.optional(S.String)}) {}
export class KmsInvalidState extends S.Class<KmsInvalidState>("KmsInvalidState")({message: S.optional(S.String)}) {}
export class KmsNotFound extends S.Class<KmsNotFound>("KmsNotFound")({message: S.optional(S.String)}) {}
export class KmsOptInRequired extends S.Class<KmsOptInRequired>("KmsOptInRequired")({message: S.optional(S.String)}) {}
export class KmsThrottled extends S.Class<KmsThrottled>("KmsThrottled")({message: S.optional(S.String)}) {}

//# Errors
export class InvalidAddressError extends S.TaggedError<InvalidAddressError>()("InvalidAddress", InvalidAddress.fields) {};
export class InvalidIdFormatError extends S.TaggedError<InvalidIdFormatError>()("InvalidIdFormat", InvalidIdFormat.fields) {};
export class InvalidSecurityError extends S.TaggedError<InvalidSecurityError>()("InvalidSecurity", InvalidSecurity.fields) {};
export class QueueDoesNotExistError extends S.TaggedError<QueueDoesNotExistError>()("QueueDoesNotExist", QueueDoesNotExist.fields) {};
export class RequestThrottledError extends S.TaggedError<RequestThrottledError>()("RequestThrottled", RequestThrottled.fields) {};
export class UnsupportedOperationError extends S.TaggedError<UnsupportedOperationError>()("UnsupportedOperation", UnsupportedOperation.fields) {};
export class MessageNotInflightError extends S.TaggedError<MessageNotInflightError>()("MessageNotInflight", MessageNotInflight.fields) {};
export class ReceiptHandleIsInvalidError extends S.TaggedError<ReceiptHandleIsInvalidError>()("ReceiptHandleIsInvalid", ReceiptHandleIsInvalid.fields) {};
export class InvalidAttributeNameError extends S.TaggedError<InvalidAttributeNameError>()("InvalidAttributeName", InvalidAttributeName.fields) {};
export class PurgeQueueInProgressError extends S.TaggedError<PurgeQueueInProgressError>()("PurgeQueueInProgress", PurgeQueueInProgress.fields) {};
export class ResourceNotFoundExceptionError extends S.TaggedError<ResourceNotFoundExceptionError>()("ResourceNotFoundException", ResourceNotFoundException.fields) {};
export class OverLimitError extends S.TaggedError<OverLimitError>()("OverLimit", OverLimit.fields) {};
export class InvalidAttributeValueError extends S.TaggedError<InvalidAttributeValueError>()("InvalidAttributeValue", InvalidAttributeValue.fields) {};
export class QueueDeletedRecentlyError extends S.TaggedError<QueueDeletedRecentlyError>()("QueueDeletedRecently", QueueDeletedRecently.fields) {};
export class BatchEntryIdsNotDistinctError extends S.TaggedError<BatchEntryIdsNotDistinctError>()("BatchEntryIdsNotDistinct", BatchEntryIdsNotDistinct.fields) {};
export class EmptyBatchRequestError extends S.TaggedError<EmptyBatchRequestError>()("EmptyBatchRequest", EmptyBatchRequest.fields) {};
export class QueueNameExistsError extends S.TaggedError<QueueNameExistsError>()("QueueNameExists", QueueNameExists.fields) {};
export class InvalidBatchEntryIdError extends S.TaggedError<InvalidBatchEntryIdError>()("InvalidBatchEntryId", InvalidBatchEntryId.fields) {};
export class KmsAccessDeniedError extends S.TaggedError<KmsAccessDeniedError>()("KmsAccessDenied", KmsAccessDenied.fields) {};
export class InvalidMessageContentsError extends S.TaggedError<InvalidMessageContentsError>()("InvalidMessageContents", InvalidMessageContents.fields) {};
export class KmsDisabledError extends S.TaggedError<KmsDisabledError>()("KmsDisabled", KmsDisabled.fields) {};
export class BatchRequestTooLongError extends S.TaggedError<BatchRequestTooLongError>()("BatchRequestTooLong", BatchRequestTooLong.fields) {};
export class KmsInvalidKeyUsageError extends S.TaggedError<KmsInvalidKeyUsageError>()("KmsInvalidKeyUsage", KmsInvalidKeyUsage.fields) {};
export class TooManyEntriesInBatchRequestError extends S.TaggedError<TooManyEntriesInBatchRequestError>()("TooManyEntriesInBatchRequest", TooManyEntriesInBatchRequest.fields) {};
export class KmsInvalidStateError extends S.TaggedError<KmsInvalidStateError>()("KmsInvalidState", KmsInvalidState.fields) {};
export class KmsNotFoundError extends S.TaggedError<KmsNotFoundError>()("KmsNotFound", KmsNotFound.fields) {};
export class KmsOptInRequiredError extends S.TaggedError<KmsOptInRequiredError>()("KmsOptInRequired", KmsOptInRequired.fields) {};
export class KmsThrottledError extends S.TaggedError<KmsThrottledError>()("KmsThrottled", KmsThrottled.fields) {};

//# Operations
export const tagQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.TagQueue" }, TagQueueRequest, S.Struct({}), [InvalidAddressError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.UntagQueue" }, UntagQueueRequest, S.Struct({}), [InvalidAddressError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteMessage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.DeleteMessage" }, DeleteMessageRequest, S.Struct({}), [InvalidAddressError, InvalidIdFormatError, InvalidSecurityError, QueueDoesNotExistError, ReceiptHandleIsInvalidError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.DeleteQueue" }, DeleteQueueRequest, S.Struct({}), [InvalidAddressError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getQueueAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.GetQueueAttributes" }, GetQueueAttributesRequest, GetQueueAttributesResult, [InvalidAddressError, InvalidAttributeNameError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getQueueUrl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.GetQueueUrl" }, GetQueueUrlRequest, GetQueueUrlResult, [InvalidAddressError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listDeadLetterSourceQueues = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ListDeadLetterSourceQueues" }, ListDeadLetterSourceQueuesRequest, ListDeadLetterSourceQueuesResult, [InvalidAddressError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listQueues = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ListQueues" }, ListQueuesRequest, ListQueuesResult, [InvalidAddressError, InvalidSecurityError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listQueueTags = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ListQueueTags" }, ListQueueTagsRequest, ListQueueTagsResult, [InvalidAddressError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const purgeQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.PurgeQueue" }, PurgeQueueRequest, S.Struct({}), [InvalidAddressError, InvalidSecurityError, PurgeQueueInProgressError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const removePermission = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.RemovePermission" }, RemovePermissionRequest, S.Struct({}), [InvalidAddressError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startMessageMoveTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.StartMessageMoveTask" }, StartMessageMoveTaskRequest, StartMessageMoveTaskResult, [InvalidAddressError, InvalidSecurityError, RequestThrottledError, ResourceNotFoundExceptionError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const addPermission = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.AddPermission" }, AddPermissionRequest, S.Struct({}), [InvalidAddressError, InvalidSecurityError, OverLimitError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const cancelMessageMoveTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.CancelMessageMoveTask" }, CancelMessageMoveTaskRequest, CancelMessageMoveTaskResult, [InvalidAddressError, InvalidSecurityError, RequestThrottledError, ResourceNotFoundExceptionError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const changeMessageVisibility = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ChangeMessageVisibility" }, ChangeMessageVisibilityRequest, S.Struct({}), [InvalidAddressError, InvalidSecurityError, MessageNotInflightError, QueueDoesNotExistError, ReceiptHandleIsInvalidError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listMessageMoveTasks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ListMessageMoveTasks" }, ListMessageMoveTasksRequest, ListMessageMoveTasksResult, [InvalidAddressError, InvalidSecurityError, RequestThrottledError, ResourceNotFoundExceptionError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const setQueueAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.SetQueueAttributes" }, SetQueueAttributesRequest, S.Struct({}), [InvalidAddressError, InvalidAttributeNameError, InvalidAttributeValueError, InvalidSecurityError, OverLimitError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.CreateQueue" }, CreateQueueRequest, CreateQueueResult, [InvalidAddressError, InvalidAttributeNameError, InvalidAttributeValueError, InvalidSecurityError, QueueDeletedRecentlyError, QueueNameExistsError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const changeMessageVisibilityBatch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ChangeMessageVisibilityBatch" }, ChangeMessageVisibilityBatchRequest, ChangeMessageVisibilityBatchResult, [BatchEntryIdsNotDistinctError, EmptyBatchRequestError, InvalidAddressError, InvalidBatchEntryIdError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, TooManyEntriesInBatchRequestError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteMessageBatch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.DeleteMessageBatch" }, DeleteMessageBatchRequest, DeleteMessageBatchResult, [BatchEntryIdsNotDistinctError, EmptyBatchRequestError, InvalidAddressError, InvalidBatchEntryIdError, InvalidSecurityError, QueueDoesNotExistError, RequestThrottledError, TooManyEntriesInBatchRequestError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const receiveMessage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ReceiveMessage" }, ReceiveMessageRequest, ReceiveMessageResult, [InvalidAddressError, InvalidSecurityError, KmsAccessDeniedError, KmsDisabledError, KmsInvalidKeyUsageError, KmsInvalidStateError, KmsNotFoundError, KmsOptInRequiredError, KmsThrottledError, OverLimitError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const sendMessage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.SendMessage" }, SendMessageRequest, SendMessageResult, [InvalidAddressError, InvalidMessageContentsError, InvalidSecurityError, KmsAccessDeniedError, KmsDisabledError, KmsInvalidKeyUsageError, KmsInvalidStateError, KmsNotFoundError, KmsOptInRequiredError, KmsThrottledError, QueueDoesNotExistError, RequestThrottledError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const sendMessageBatch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.SendMessageBatch" }, SendMessageBatchRequest, SendMessageBatchResult, [BatchEntryIdsNotDistinctError, BatchRequestTooLongError, EmptyBatchRequestError, InvalidAddressError, InvalidBatchEntryIdError, InvalidSecurityError, KmsAccessDeniedError, KmsDisabledError, KmsInvalidKeyUsageError, KmsInvalidStateError, KmsNotFoundError, KmsOptInRequiredError, KmsThrottledError, QueueDoesNotExistError, RequestThrottledError, TooManyEntriesInBatchRequestError, UnsupportedOperationError]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
