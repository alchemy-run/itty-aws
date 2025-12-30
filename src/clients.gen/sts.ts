import { Schema} from "effect"
import { FormatAwsQueryRequest,FormatAwsQueryResponse,FormatAWSXMLError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const GetCallerIdentityRequest = Schema.Struct({});
export const tagKeyListType = Schema.Array(Schema.String);
export const PolicyDescriptorType = Schema.Struct({arn: Schema.optional(Schema.String)});
export const policyDescriptorListType = Schema.Array(PolicyDescriptorType);
export const AssumeRoleWithSAMLRequest = Schema.Struct({RoleArn: Schema.String, PrincipalArn: Schema.String, SAMLAssertion: Schema.String, PolicyArns: Schema.optional(policyDescriptorListType), Policy: Schema.optional(Schema.String), DurationSeconds: Schema.optional(Schema.Number)});
export const AssumeRoleWithWebIdentityRequest = Schema.Struct({RoleArn: Schema.String, RoleSessionName: Schema.String, WebIdentityToken: Schema.String, ProviderId: Schema.optional(Schema.String), PolicyArns: Schema.optional(policyDescriptorListType), Policy: Schema.optional(Schema.String), DurationSeconds: Schema.optional(Schema.Number)});
export const AssumeRootRequest = Schema.Struct({TargetPrincipal: Schema.String, TaskPolicyArn: PolicyDescriptorType, DurationSeconds: Schema.optional(Schema.Number)});
export const DecodeAuthorizationMessageRequest = Schema.Struct({EncodedMessage: Schema.String});
export const GetAccessKeyInfoRequest = Schema.Struct({AccessKeyId: Schema.String});
export const GetCallerIdentityResponse = Schema.Struct({UserId: Schema.optional(Schema.String), Account: Schema.optional(Schema.String), Arn: Schema.optional(Schema.String)});
export const Tag = Schema.Struct({Key: Schema.String, Value: Schema.String});
export const tagListType = Schema.Array(Tag);
export const GetFederationTokenRequest = Schema.Struct({Name: Schema.String, Policy: Schema.optional(Schema.String), PolicyArns: Schema.optional(policyDescriptorListType), DurationSeconds: Schema.optional(Schema.Number), Tags: Schema.optional(tagListType)});
export const GetSessionTokenRequest = Schema.Struct({DurationSeconds: Schema.optional(Schema.Number), SerialNumber: Schema.optional(Schema.String), TokenCode: Schema.optional(Schema.String)});
export const ProvidedContext = Schema.Struct({ProviderArn: Schema.optional(Schema.String), ContextAssertion: Schema.optional(Schema.String)});
export const ProvidedContextsListType = Schema.Array(ProvidedContext);
export const AssumeRoleRequest = Schema.Struct({RoleArn: Schema.String, RoleSessionName: Schema.String, PolicyArns: Schema.optional(policyDescriptorListType), Policy: Schema.optional(Schema.String), DurationSeconds: Schema.optional(Schema.Number), Tags: Schema.optional(tagListType), TransitiveTagKeys: Schema.optional(tagKeyListType), ExternalId: Schema.optional(Schema.String), SerialNumber: Schema.optional(Schema.String), TokenCode: Schema.optional(Schema.String), SourceIdentity: Schema.optional(Schema.String), ProvidedContexts: Schema.optional(ProvidedContextsListType)});
export const Credentials = Schema.Struct({AccessKeyId: Schema.String, SecretAccessKey: Schema.String, SessionToken: Schema.String, Expiration: Schema.Date});
export const AssumedRoleUser = Schema.Struct({AssumedRoleId: Schema.String, Arn: Schema.String});
export const AssumeRoleWithWebIdentityResponse = Schema.Struct({Credentials: Schema.optional(Credentials), SubjectFromWebIdentityToken: Schema.optional(Schema.String), AssumedRoleUser: Schema.optional(AssumedRoleUser), PackedPolicySize: Schema.optional(Schema.Number), Provider: Schema.optional(Schema.String), Audience: Schema.optional(Schema.String), SourceIdentity: Schema.optional(Schema.String)});
export const AssumeRootResponse = Schema.Struct({Credentials: Schema.optional(Credentials), SourceIdentity: Schema.optional(Schema.String)});
export const DecodeAuthorizationMessageResponse = Schema.Struct({DecodedMessage: Schema.optional(Schema.String)});
export const GetAccessKeyInfoResponse = Schema.Struct({Account: Schema.optional(Schema.String)});
export const GetSessionTokenResponse = Schema.Struct({Credentials: Schema.optional(Credentials)});
export const FederatedUser = Schema.Struct({FederatedUserId: Schema.String, Arn: Schema.String});
export const AssumeRoleResponse = Schema.Struct({Credentials: Schema.optional(Credentials), AssumedRoleUser: Schema.optional(AssumedRoleUser), PackedPolicySize: Schema.optional(Schema.Number), SourceIdentity: Schema.optional(Schema.String)});
export const AssumeRoleWithSAMLResponse = Schema.Struct({Credentials: Schema.optional(Credentials), AssumedRoleUser: Schema.optional(AssumedRoleUser), PackedPolicySize: Schema.optional(Schema.Number), Subject: Schema.optional(Schema.String), SubjectType: Schema.optional(Schema.String), Issuer: Schema.optional(Schema.String), Audience: Schema.optional(Schema.String), NameQualifier: Schema.optional(Schema.String), SourceIdentity: Schema.optional(Schema.String)});
export const ExpiredTokenException = Schema.Struct({message: Schema.optional(Schema.String)});
export const RegionDisabledException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidAuthorizationMessageException = Schema.Struct({message: Schema.optional(Schema.String)});
export const GetFederationTokenResponse = Schema.Struct({Credentials: Schema.optional(Credentials), FederatedUser: Schema.optional(FederatedUser), PackedPolicySize: Schema.optional(Schema.Number)});
export const MalformedPolicyDocumentException = Schema.Struct({message: Schema.optional(Schema.String)});
export const IDPRejectedClaimException = Schema.Struct({message: Schema.optional(Schema.String)});
export const IDPCommunicationErrorException = Schema.Struct({message: Schema.optional(Schema.String)});
export const PackedPolicyTooLargeException = Schema.Struct({message: Schema.optional(Schema.String)});
export const InvalidIdentityTokenException = Schema.Struct({message: Schema.optional(Schema.String)});

//# Errors
export class ExpiredTokenExceptionError extends Schema.TaggedError<ExpiredTokenExceptionError>()("ExpiredTokenException", ExpiredTokenException) {};
export class RegionDisabledExceptionError extends Schema.TaggedError<RegionDisabledExceptionError>()("RegionDisabledException", RegionDisabledException) {};
export class InvalidAuthorizationMessageExceptionError extends Schema.TaggedError<InvalidAuthorizationMessageExceptionError>()("InvalidAuthorizationMessageException", InvalidAuthorizationMessageException) {};
export class MalformedPolicyDocumentExceptionError extends Schema.TaggedError<MalformedPolicyDocumentExceptionError>()("MalformedPolicyDocumentException", MalformedPolicyDocumentException) {};
export class PackedPolicyTooLargeExceptionError extends Schema.TaggedError<PackedPolicyTooLargeExceptionError>()("PackedPolicyTooLargeException", PackedPolicyTooLargeException) {};
export class IDPRejectedClaimExceptionError extends Schema.TaggedError<IDPRejectedClaimExceptionError>()("IDPRejectedClaimException", IDPRejectedClaimException) {};
export class IDPCommunicationErrorExceptionError extends Schema.TaggedError<IDPCommunicationErrorExceptionError>()("IDPCommunicationErrorException", IDPCommunicationErrorException) {};
export class InvalidIdentityTokenExceptionError extends Schema.TaggedError<InvalidIdentityTokenExceptionError>()("InvalidIdentityTokenException", InvalidIdentityTokenException) {};

//# Operations
export const getCallerIdentity = /*#__PURE__*/ makeOperation(() => Operation({ version: "2011-06-15", uri: "/", method: "POST", sdkId: "STS", sigV4ServiceName: "sts", name: "AWSSecurityTokenServiceV20110615.GetCallerIdentity" }, GetCallerIdentityRequest, GetCallerIdentityResponse, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAWSXMLError);
export const getAccessKeyInfo = /*#__PURE__*/ makeOperation(() => Operation({ version: "2011-06-15", uri: "/", method: "POST", sdkId: "STS", sigV4ServiceName: "sts", name: "AWSSecurityTokenServiceV20110615.GetAccessKeyInfo" }, GetAccessKeyInfoRequest, GetAccessKeyInfoResponse, []), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAWSXMLError);
export const getSessionToken = /*#__PURE__*/ makeOperation(() => Operation({ version: "2011-06-15", uri: "/", method: "POST", sdkId: "STS", sigV4ServiceName: "sts", name: "AWSSecurityTokenServiceV20110615.GetSessionToken" }, GetSessionTokenRequest, GetSessionTokenResponse, [RegionDisabledExceptionError]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAWSXMLError);
export const assumeRoot = /*#__PURE__*/ makeOperation(() => Operation({ version: "2011-06-15", uri: "/", method: "POST", sdkId: "STS", sigV4ServiceName: "sts", name: "AWSSecurityTokenServiceV20110615.AssumeRoot" }, AssumeRootRequest, AssumeRootResponse, [ExpiredTokenExceptionError, RegionDisabledExceptionError]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAWSXMLError);
export const decodeAuthorizationMessage = /*#__PURE__*/ makeOperation(() => Operation({ version: "2011-06-15", uri: "/", method: "POST", sdkId: "STS", sigV4ServiceName: "sts", name: "AWSSecurityTokenServiceV20110615.DecodeAuthorizationMessage" }, DecodeAuthorizationMessageRequest, DecodeAuthorizationMessageResponse, [InvalidAuthorizationMessageExceptionError]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAWSXMLError);
export const assumeRole = /*#__PURE__*/ makeOperation(() => Operation({ version: "2011-06-15", uri: "/", method: "POST", sdkId: "STS", sigV4ServiceName: "sts", name: "AWSSecurityTokenServiceV20110615.AssumeRole" }, AssumeRoleRequest, AssumeRoleResponse, [ExpiredTokenExceptionError, MalformedPolicyDocumentExceptionError, PackedPolicyTooLargeExceptionError, RegionDisabledExceptionError]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAWSXMLError);
export const assumeRoleWithWebIdentity = /*#__PURE__*/ makeOperation(() => Operation({ version: "2011-06-15", uri: "/", method: "POST", sdkId: "STS", sigV4ServiceName: "sts", name: "AWSSecurityTokenServiceV20110615.AssumeRoleWithWebIdentity" }, AssumeRoleWithWebIdentityRequest, AssumeRoleWithWebIdentityResponse, [ExpiredTokenExceptionError, IDPCommunicationErrorExceptionError, IDPRejectedClaimExceptionError, InvalidIdentityTokenExceptionError, MalformedPolicyDocumentExceptionError, PackedPolicyTooLargeExceptionError, RegionDisabledExceptionError]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAWSXMLError);
export const getFederationToken = /*#__PURE__*/ makeOperation(() => Operation({ version: "2011-06-15", uri: "/", method: "POST", sdkId: "STS", sigV4ServiceName: "sts", name: "AWSSecurityTokenServiceV20110615.GetFederationToken" }, GetFederationTokenRequest, GetFederationTokenResponse, [MalformedPolicyDocumentExceptionError, PackedPolicyTooLargeExceptionError, RegionDisabledExceptionError]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAWSXMLError);
export const assumeRoleWithSAML = /*#__PURE__*/ makeOperation(() => Operation({ version: "2011-06-15", uri: "/", method: "POST", sdkId: "STS", sigV4ServiceName: "sts", name: "AWSSecurityTokenServiceV20110615.AssumeRoleWithSAML" }, AssumeRoleWithSAMLRequest, AssumeRoleWithSAMLResponse, [ExpiredTokenExceptionError, IDPRejectedClaimExceptionError, InvalidIdentityTokenExceptionError, MalformedPolicyDocumentExceptionError, PackedPolicyTooLargeExceptionError, RegionDisabledExceptionError]), FormatAwsQueryRequest, FormatAwsQueryResponse, FormatAWSXMLError);
