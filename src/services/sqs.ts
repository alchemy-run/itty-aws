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
export class CancelMessageMoveTaskResult extends S.Class<CancelMessageMoveTaskResult>("CancelMessageMoveTaskResult")({ApproximateNumberOfMessagesMoved: S.optional(S.Number)}) {}
export class ChangeMessageVisibilityBatchRequest extends S.Class<ChangeMessageVisibilityBatchRequest>("ChangeMessageVisibilityBatchRequest")({QueueUrl: S.String, Entries: ChangeMessageVisibilityBatchRequestEntryList}) {}
export class CreateQueueRequest extends S.Class<CreateQueueRequest>("CreateQueueRequest")({QueueName: S.String, Attributes: S.optional(QueueAttributeMap), tags: S.optional(TagMap)}) {}
export class DeleteMessageBatchRequest extends S.Class<DeleteMessageBatchRequest>("DeleteMessageBatchRequest")({QueueUrl: S.String, Entries: DeleteMessageBatchRequestEntryList}) {}
export class GetQueueAttributesResult extends S.Class<GetQueueAttributesResult>("GetQueueAttributesResult")({Attributes: S.optional(QueueAttributeMap)}) {}
export class GetQueueUrlResult extends S.Class<GetQueueUrlResult>("GetQueueUrlResult")({QueueUrl: S.optional(S.String)}) {}
export class ListDeadLetterSourceQueuesResult extends S.Class<ListDeadLetterSourceQueuesResult>("ListDeadLetterSourceQueuesResult")({queueUrls: QueueUrlList, NextToken: S.optional(S.String)}) {}
export class ListQueuesResult extends S.Class<ListQueuesResult>("ListQueuesResult")({QueueUrls: S.optional(QueueUrlList), NextToken: S.optional(S.String)}) {}
export class ListQueueTagsResult extends S.Class<ListQueueTagsResult>("ListQueueTagsResult")({Tags: S.optional(TagMap)}) {}
export class SendMessageBatchRequest extends S.Class<SendMessageBatchRequest>("SendMessageBatchRequest")({QueueUrl: S.String, Entries: SendMessageBatchRequestEntryList}) {}
export class StartMessageMoveTaskResult extends S.Class<StartMessageMoveTaskResult>("StartMessageMoveTaskResult")({TaskHandle: S.optional(S.String)}) {}
export class ListMessageMoveTasksResultEntry extends S.Class<ListMessageMoveTasksResultEntry>("ListMessageMoveTasksResultEntry")({TaskHandle: S.optional(S.String), Status: S.optional(S.String), SourceArn: S.optional(S.String), DestinationArn: S.optional(S.String), MaxNumberOfMessagesPerSecond: S.optional(S.Number), ApproximateNumberOfMessagesMoved: S.optional(S.Number), ApproximateNumberOfMessagesToMove: S.optional(S.Number), FailureReason: S.optional(S.String), StartedTimestamp: S.optional(S.Number)}) {}
export const ListMessageMoveTasksResultEntryList = S.Array(ListMessageMoveTasksResultEntry);
export class CreateQueueResult extends S.Class<CreateQueueResult>("CreateQueueResult")({QueueUrl: S.optional(S.String)}) {}
export class ListMessageMoveTasksResult extends S.Class<ListMessageMoveTasksResult>("ListMessageMoveTasksResult")({Results: S.optional(ListMessageMoveTasksResultEntryList)}) {}
export class SendMessageRequest extends S.Class<SendMessageRequest>("SendMessageRequest")({QueueUrl: S.String, MessageBody: S.String, DelaySeconds: S.optional(S.Number), MessageAttributes: S.optional(MessageBodyAttributeMap), MessageSystemAttributes: S.optional(MessageBodySystemAttributeMap), MessageDeduplicationId: S.optional(S.String), MessageGroupId: S.optional(S.String)}) {}
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
export class DeleteMessageBatchResult extends S.Class<DeleteMessageBatchResult>("DeleteMessageBatchResult")({Successful: DeleteMessageBatchResultEntryList, Failed: BatchResultErrorEntryList}) {}
export class ReceiveMessageResult extends S.Class<ReceiveMessageResult>("ReceiveMessageResult")({Messages: S.optional(MessageList)}) {}
export class SendMessageResult extends S.Class<SendMessageResult>("SendMessageResult")({MD5OfMessageBody: S.optional(S.String), MD5OfMessageAttributes: S.optional(S.String), MD5OfMessageSystemAttributes: S.optional(S.String), MessageId: S.optional(S.String), SequenceNumber: S.optional(S.String)}) {}
export class SendMessageBatchResult extends S.Class<SendMessageBatchResult>("SendMessageBatchResult")({Successful: SendMessageBatchResultEntryList, Failed: BatchResultErrorEntryList}) {}

//# Errors
export class InvalidAddress extends S.TaggedError<InvalidAddress>()("InvalidAddress", {}) {};
export class InvalidIdFormat extends S.TaggedError<InvalidIdFormat>()("InvalidIdFormat", {}) {};
export class InvalidSecurity extends S.TaggedError<InvalidSecurity>()("InvalidSecurity", {}) {};
export class QueueDoesNotExist extends S.TaggedError<QueueDoesNotExist>()("QueueDoesNotExist", {}) {};
export class RequestThrottled extends S.TaggedError<RequestThrottled>()("RequestThrottled", {}) {};
export class UnsupportedOperation extends S.TaggedError<UnsupportedOperation>()("UnsupportedOperation", {}) {};
export class MessageNotInflight extends S.TaggedError<MessageNotInflight>()("MessageNotInflight", {}) {};
export class ReceiptHandleIsInvalid extends S.TaggedError<ReceiptHandleIsInvalid>()("ReceiptHandleIsInvalid", {}) {};
export class InvalidAttributeName extends S.TaggedError<InvalidAttributeName>()("InvalidAttributeName", {}) {};
export class PurgeQueueInProgress extends S.TaggedError<PurgeQueueInProgress>()("PurgeQueueInProgress", {message: S.optional(S.String)}) {};
export class ResourceNotFoundException extends S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {}) {};
export class OverLimit extends S.TaggedError<OverLimit>()("OverLimit", {message: S.optional(S.String)}) {};
export class InvalidAttributeValue extends S.TaggedError<InvalidAttributeValue>()("InvalidAttributeValue", {}) {};
export class QueueDeletedRecently extends S.TaggedError<QueueDeletedRecently>()("QueueDeletedRecently", {message: S.optional(S.String)}) {};
export class BatchEntryIdsNotDistinct extends S.TaggedError<BatchEntryIdsNotDistinct>()("BatchEntryIdsNotDistinct", {}) {};
export class EmptyBatchRequest extends S.TaggedError<EmptyBatchRequest>()("EmptyBatchRequest", {}) {};
export class QueueNameExists extends S.TaggedError<QueueNameExists>()("QueueNameExists", {message: S.optional(S.String)}) {};
export class InvalidBatchEntryId extends S.TaggedError<InvalidBatchEntryId>()("InvalidBatchEntryId", {}) {};
export class KmsAccessDenied extends S.TaggedError<KmsAccessDenied>()("KmsAccessDenied", {message: S.optional(S.String)}) {};
export class InvalidMessageContents extends S.TaggedError<InvalidMessageContents>()("InvalidMessageContents", {message: S.optional(S.String)}) {};
export class KmsDisabled extends S.TaggedError<KmsDisabled>()("KmsDisabled", {}) {};
export class BatchRequestTooLong extends S.TaggedError<BatchRequestTooLong>()("BatchRequestTooLong", {message: S.optional(S.String)}) {};
export class KmsInvalidKeyUsage extends S.TaggedError<KmsInvalidKeyUsage>()("KmsInvalidKeyUsage", {}) {};
export class TooManyEntriesInBatchRequest extends S.TaggedError<TooManyEntriesInBatchRequest>()("TooManyEntriesInBatchRequest", {}) {};
export class KmsInvalidState extends S.TaggedError<KmsInvalidState>()("KmsInvalidState", {}) {};
export class KmsNotFound extends S.TaggedError<KmsNotFound>()("KmsNotFound", {}) {};
export class KmsOptInRequired extends S.TaggedError<KmsOptInRequired>()("KmsOptInRequired", {}) {};
export class KmsThrottled extends S.TaggedError<KmsThrottled>()("KmsThrottled", {}) {};

//# Operations
export const tagQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.TagQueue" }, TagQueueRequest, S.Struct({}), [InvalidAddress, InvalidSecurity, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const untagQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.UntagQueue" }, UntagQueueRequest, S.Struct({}), [InvalidAddress, InvalidSecurity, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteMessage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.DeleteMessage" }, DeleteMessageRequest, S.Struct({}), [InvalidAddress, InvalidIdFormat, InvalidSecurity, QueueDoesNotExist, ReceiptHandleIsInvalid, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.DeleteQueue" }, DeleteQueueRequest, S.Struct({}), [InvalidAddress, InvalidSecurity, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getQueueAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.GetQueueAttributes" }, GetQueueAttributesRequest, GetQueueAttributesResult, [InvalidAddress, InvalidAttributeName, InvalidSecurity, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const getQueueUrl = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.GetQueueUrl" }, GetQueueUrlRequest, GetQueueUrlResult, [InvalidAddress, InvalidSecurity, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listDeadLetterSourceQueues = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ListDeadLetterSourceQueues" }, ListDeadLetterSourceQueuesRequest, ListDeadLetterSourceQueuesResult, [InvalidAddress, InvalidSecurity, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listQueues = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ListQueues" }, ListQueuesRequest, ListQueuesResult, [InvalidAddress, InvalidSecurity, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listQueueTags = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ListQueueTags" }, ListQueueTagsRequest, ListQueueTagsResult, [InvalidAddress, InvalidSecurity, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const purgeQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.PurgeQueue" }, PurgeQueueRequest, S.Struct({}), [InvalidAddress, InvalidSecurity, PurgeQueueInProgress, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const removePermission = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.RemovePermission" }, RemovePermissionRequest, S.Struct({}), [InvalidAddress, InvalidSecurity, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const startMessageMoveTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.StartMessageMoveTask" }, StartMessageMoveTaskRequest, StartMessageMoveTaskResult, [InvalidAddress, InvalidSecurity, RequestThrottled, ResourceNotFoundException, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const addPermission = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.AddPermission" }, AddPermissionRequest, S.Struct({}), [InvalidAddress, InvalidSecurity, OverLimit, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const cancelMessageMoveTask = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.CancelMessageMoveTask" }, CancelMessageMoveTaskRequest, CancelMessageMoveTaskResult, [InvalidAddress, InvalidSecurity, RequestThrottled, ResourceNotFoundException, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const changeMessageVisibility = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ChangeMessageVisibility" }, ChangeMessageVisibilityRequest, S.Struct({}), [InvalidAddress, InvalidSecurity, MessageNotInflight, QueueDoesNotExist, ReceiptHandleIsInvalid, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const listMessageMoveTasks = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ListMessageMoveTasks" }, ListMessageMoveTasksRequest, ListMessageMoveTasksResult, [InvalidAddress, InvalidSecurity, RequestThrottled, ResourceNotFoundException, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const setQueueAttributes = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.SetQueueAttributes" }, SetQueueAttributesRequest, S.Struct({}), [InvalidAddress, InvalidAttributeName, InvalidAttributeValue, InvalidSecurity, OverLimit, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const createQueue = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.CreateQueue" }, CreateQueueRequest, CreateQueueResult, [InvalidAddress, InvalidAttributeName, InvalidAttributeValue, InvalidSecurity, QueueDeletedRecently, QueueNameExists, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const changeMessageVisibilityBatch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ChangeMessageVisibilityBatch" }, ChangeMessageVisibilityBatchRequest, ChangeMessageVisibilityBatchResult, [BatchEntryIdsNotDistinct, EmptyBatchRequest, InvalidAddress, InvalidBatchEntryId, InvalidSecurity, QueueDoesNotExist, RequestThrottled, TooManyEntriesInBatchRequest, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const deleteMessageBatch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.DeleteMessageBatch" }, DeleteMessageBatchRequest, DeleteMessageBatchResult, [BatchEntryIdsNotDistinct, EmptyBatchRequest, InvalidAddress, InvalidBatchEntryId, InvalidSecurity, QueueDoesNotExist, RequestThrottled, TooManyEntriesInBatchRequest, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const receiveMessage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.ReceiveMessage" }, ReceiveMessageRequest, ReceiveMessageResult, [InvalidAddress, InvalidSecurity, KmsAccessDenied, KmsDisabled, KmsInvalidKeyUsage, KmsInvalidState, KmsNotFound, KmsOptInRequired, KmsThrottled, OverLimit, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const sendMessage = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.SendMessage" }, SendMessageRequest, SendMessageResult, [InvalidAddress, InvalidMessageContents, InvalidSecurity, KmsAccessDenied, KmsDisabled, KmsInvalidKeyUsage, KmsInvalidState, KmsNotFound, KmsOptInRequired, KmsThrottled, QueueDoesNotExist, RequestThrottled, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
export const sendMessageBatch = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2012-11-05", uri: "/", method: "POST", sdkId: "SQS", sigV4ServiceName: "sqs", name: "AmazonSQS.SendMessageBatch" }, SendMessageBatchRequest, SendMessageBatchResult, [BatchEntryIdsNotDistinct, BatchRequestTooLong, EmptyBatchRequest, InvalidAddress, InvalidBatchEntryId, InvalidSecurity, KmsAccessDenied, KmsDisabled, KmsInvalidKeyUsage, KmsInvalidState, KmsNotFound, KmsOptInRequired, KmsThrottled, QueueDoesNotExist, RequestThrottled, TooManyEntriesInBatchRequest, UnsupportedOperation]), FormatAwsJSON10Request, FormatJSONResponse, FormatAwsRestJSONError);
