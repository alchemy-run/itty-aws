import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class SendSerialConsoleSSHPublicKeyRequest extends S.Class<SendSerialConsoleSSHPublicKeyRequest>("SendSerialConsoleSSHPublicKeyRequest")({InstanceId: S.String, SerialPort: S.optional(S.Number), SSHPublicKey: S.String}) {}
export class SendSSHPublicKeyRequest extends S.Class<SendSSHPublicKeyRequest>("SendSSHPublicKeyRequest")({InstanceId: S.String, InstanceOSUser: S.String, SSHPublicKey: S.String, AvailabilityZone: S.optional(S.String)}) {}
export class SendSerialConsoleSSHPublicKeyResponse extends S.Class<SendSerialConsoleSSHPublicKeyResponse>("SendSerialConsoleSSHPublicKeyResponse")({RequestId: S.optional(S.String), Success: S.optional(S.Boolean)}) {}
export class SendSSHPublicKeyResponse extends S.Class<SendSSHPublicKeyResponse>("SendSSHPublicKeyResponse")({RequestId: S.optional(S.String), Success: S.optional(S.Boolean)}) {}
export class AuthException extends S.Class<AuthException>("AuthException")({Message: S.optional(S.String)}) {}
export class EC2InstanceNotFoundException extends S.Class<EC2InstanceNotFoundException>("EC2InstanceNotFoundException")({Message: S.optional(S.String)}) {}
export class EC2InstanceStateInvalidException extends S.Class<EC2InstanceStateInvalidException>("EC2InstanceStateInvalidException")({Message: S.optional(S.String)}) {}
export class EC2InstanceUnavailableException extends S.Class<EC2InstanceUnavailableException>("EC2InstanceUnavailableException")({Message: S.optional(S.String)}) {}
export class EC2InstanceTypeInvalidException extends S.Class<EC2InstanceTypeInvalidException>("EC2InstanceTypeInvalidException")({Message: S.optional(S.String)}) {}
export class InvalidArgsException extends S.Class<InvalidArgsException>("InvalidArgsException")({Message: S.optional(S.String)}) {}
export class SerialConsoleAccessDisabledException extends S.Class<SerialConsoleAccessDisabledException>("SerialConsoleAccessDisabledException")({Message: S.optional(S.String)}) {}
export class ServiceException extends S.Class<ServiceException>("ServiceException")({Message: S.optional(S.String)}) {}
export class SerialConsoleSessionLimitExceededException extends S.Class<SerialConsoleSessionLimitExceededException>("SerialConsoleSessionLimitExceededException")({Message: S.optional(S.String)}) {}
export class ThrottlingException extends S.Class<ThrottlingException>("ThrottlingException")({Message: S.optional(S.String)}) {}
export class SerialConsoleSessionUnavailableException extends S.Class<SerialConsoleSessionUnavailableException>("SerialConsoleSessionUnavailableException")({Message: S.optional(S.String)}) {}
export class SerialConsoleSessionUnsupportedException extends S.Class<SerialConsoleSessionUnsupportedException>("SerialConsoleSessionUnsupportedException")({Message: S.optional(S.String)}) {}

//# Errors
export class AuthExceptionError extends S.TaggedError<AuthExceptionError>()("AuthException", AuthException.fields) {};
export class EC2InstanceNotFoundExceptionError extends S.TaggedError<EC2InstanceNotFoundExceptionError>()("EC2InstanceNotFoundException", EC2InstanceNotFoundException.fields) {};
export class EC2InstanceStateInvalidExceptionError extends S.TaggedError<EC2InstanceStateInvalidExceptionError>()("EC2InstanceStateInvalidException", EC2InstanceStateInvalidException.fields) {};
export class EC2InstanceUnavailableExceptionError extends S.TaggedError<EC2InstanceUnavailableExceptionError>()("EC2InstanceUnavailableException", EC2InstanceUnavailableException.fields) {};
export class EC2InstanceTypeInvalidExceptionError extends S.TaggedError<EC2InstanceTypeInvalidExceptionError>()("EC2InstanceTypeInvalidException", EC2InstanceTypeInvalidException.fields) {};
export class InvalidArgsExceptionError extends S.TaggedError<InvalidArgsExceptionError>()("InvalidArgsException", InvalidArgsException.fields) {};
export class SerialConsoleAccessDisabledExceptionError extends S.TaggedError<SerialConsoleAccessDisabledExceptionError>()("SerialConsoleAccessDisabledException", SerialConsoleAccessDisabledException.fields) {};
export class ServiceExceptionError extends S.TaggedError<ServiceExceptionError>()("ServiceException", ServiceException.fields) {};
export class SerialConsoleSessionLimitExceededExceptionError extends S.TaggedError<SerialConsoleSessionLimitExceededExceptionError>()("SerialConsoleSessionLimitExceededException", SerialConsoleSessionLimitExceededException.fields) {};
export class ThrottlingExceptionError extends S.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class SerialConsoleSessionUnavailableExceptionError extends S.TaggedError<SerialConsoleSessionUnavailableExceptionError>()("SerialConsoleSessionUnavailableException", SerialConsoleSessionUnavailableException.fields) {};
export class SerialConsoleSessionUnsupportedExceptionError extends S.TaggedError<SerialConsoleSessionUnsupportedExceptionError>()("SerialConsoleSessionUnsupportedException", SerialConsoleSessionUnsupportedException.fields) {};

//# Operations
export const sendSSHPublicKey = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-04-02", uri: "/", method: "POST", sdkId: "EC2 Instance Connect", sigV4ServiceName: "ec2-instance-connect", name: "AWSEC2InstanceConnectService.SendSSHPublicKey" }, SendSSHPublicKeyRequest, SendSSHPublicKeyResponse, [AuthExceptionError, EC2InstanceNotFoundExceptionError, EC2InstanceStateInvalidExceptionError, EC2InstanceUnavailableExceptionError, InvalidArgsExceptionError, ServiceExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const sendSerialConsoleSSHPublicKey = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-04-02", uri: "/", method: "POST", sdkId: "EC2 Instance Connect", sigV4ServiceName: "ec2-instance-connect", name: "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey" }, SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse, [AuthExceptionError, EC2InstanceNotFoundExceptionError, EC2InstanceStateInvalidExceptionError, EC2InstanceTypeInvalidExceptionError, EC2InstanceUnavailableExceptionError, InvalidArgsExceptionError, SerialConsoleAccessDisabledExceptionError, SerialConsoleSessionLimitExceededExceptionError, SerialConsoleSessionUnavailableExceptionError, SerialConsoleSessionUnsupportedExceptionError, ServiceExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
