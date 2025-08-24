import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export declare class NotificationsContacts extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  activateEmailContact(
    input: ActivateEmailContactRequest,
  ): Effect.Effect<
    ActivateEmailContactResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createEmailContact(
    input: CreateEmailContactRequest,
  ): Effect.Effect<
    CreateEmailContactResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteEmailContact(
    input: DeleteEmailContactRequest,
  ): Effect.Effect<
    DeleteEmailContactResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEmailContact(
    input: GetEmailContactRequest,
  ): Effect.Effect<
    GetEmailContactResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEmailContacts(
    input: ListEmailContactsRequest,
  ): Effect.Effect<
    ListEmailContactsResponse,
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  sendActivationCode(
    input: SendActivationCodeRequest,
  ): Effect.Effect<
    SendActivationCodeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Notificationscontacts extends NotificationsContacts {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface ActivateEmailContactRequest {
  arn: string;
  code: string;
}
export interface ActivateEmailContactResponse {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateEmailContactRequest {
  name: string;
  emailAddress: string;
  tags?: Record<string, string>;
}
export interface CreateEmailContactResponse {
  arn: string;
}
export type CreationTime = Date | string;

export interface DeleteEmailContactRequest {
  arn: string;
}
export interface DeleteEmailContactResponse {}
export interface EmailContact {
  arn: string;
  name: string;
  address: string;
  status: string;
  creationTime: Date | string;
  updateTime: Date | string;
}
export type EmailContactAddress = string;

export type EmailContactArn = string;

export type EmailContactName = string;

export type EmailContacts = Array<EmailContact>;
export type EmailContactStatus = string;

export type ErrorMessage = string;

export interface GetEmailContactRequest {
  arn: string;
}
export interface GetEmailContactResponse {
  emailContact: EmailContact;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export interface ListEmailContactsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListEmailContactsResponse {
  nextToken?: string;
  emailContacts: Array<EmailContact>;
}
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type QuotaCode = string;

export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResourceType = string;

export interface SendActivationCodeRequest {
  arn: string;
}
export interface SendActivationCodeResponse {}
export type SensitiveEmailContactAddress = string;

export type ServiceCode = string;

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

export type TagKeys = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  arn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly serviceCode?: string;
  readonly quotaCode?: string;
  readonly retryAfterSeconds?: number;
}> {}
export type Token = string;

export interface UntagResourceRequest {
  arn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UpdateTime = Date | string;

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
export type ValidationExceptionReason = "fieldValidationFailed" | "other";
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ActivateEmailContact {
  export type Input = ActivateEmailContactRequest;
  export type Output = ActivateEmailContactResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateEmailContact {
  export type Input = CreateEmailContactRequest;
  export type Output = CreateEmailContactResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEmailContact {
  export type Input = DeleteEmailContactRequest;
  export type Output = DeleteEmailContactResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEmailContact {
  export type Input = GetEmailContactRequest;
  export type Output = GetEmailContactResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEmailContacts {
  export type Input = ListEmailContactsRequest;
  export type Output = ListEmailContactsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendActivationCode {
  export type Input = SendActivationCodeRequest;
  export type Output = SendActivationCodeResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

// Service metadata
export const metadata = {
  sdkId: "NotificationsContacts",
  version: "2018-05-10",
  protocol: "restJson1",
  endpointPrefix: "notifications-contacts",
  operations: {
    ListTagsForResource: "GET /tags/{arn}",
    TagResource: "POST /tags/{arn}",
    UntagResource: "DELETE /tags/{arn}",
    ActivateEmailContact: "PUT /emailcontacts/{arn}/activate/{code}",
    CreateEmailContact: "POST /2022-09-19/emailcontacts",
    DeleteEmailContact: "DELETE /emailcontacts/{arn}",
    GetEmailContact: "GET /emailcontacts/{arn}",
    ListEmailContacts: "GET /emailcontacts",
    SendActivationCode: "POST /2022-10-31/emailcontacts/{arn}/activate/send",
  },
} as const satisfies import("../../protocols/interface.ts").ServiceMetadata;
