import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class SendSerialConsoleSSHPublicKeyRequest extends Schema.Class<SendSerialConsoleSSHPublicKeyRequest>("SendSerialConsoleSSHPublicKeyRequest")({InstanceId: Schema.String, SerialPort: Schema.optional(Schema.Number), SSHPublicKey: Schema.String}) {}
export class SendSSHPublicKeyRequest extends Schema.Class<SendSSHPublicKeyRequest>("SendSSHPublicKeyRequest")({InstanceId: Schema.String, InstanceOSUser: Schema.String, SSHPublicKey: Schema.String, AvailabilityZone: Schema.optional(Schema.String)}) {}
export class SendSerialConsoleSSHPublicKeyResponse extends Schema.Class<SendSerialConsoleSSHPublicKeyResponse>("SendSerialConsoleSSHPublicKeyResponse")({RequestId: Schema.optional(Schema.String), Success: Schema.optional(Schema.Boolean)}) {}
export class SendSSHPublicKeyResponse extends Schema.Class<SendSSHPublicKeyResponse>("SendSSHPublicKeyResponse")({RequestId: Schema.optional(Schema.String), Success: Schema.optional(Schema.Boolean)}) {}
export class AuthException extends Schema.Class<AuthException>("AuthException")({Message: Schema.optional(Schema.String)}) {}
export class EC2InstanceNotFoundException extends Schema.Class<EC2InstanceNotFoundException>("EC2InstanceNotFoundException")({Message: Schema.optional(Schema.String)}) {}
export class EC2InstanceStateInvalidException extends Schema.Class<EC2InstanceStateInvalidException>("EC2InstanceStateInvalidException")({Message: Schema.optional(Schema.String)}) {}
export class EC2InstanceUnavailableException extends Schema.Class<EC2InstanceUnavailableException>("EC2InstanceUnavailableException")({Message: Schema.optional(Schema.String)}) {}
export class EC2InstanceTypeInvalidException extends Schema.Class<EC2InstanceTypeInvalidException>("EC2InstanceTypeInvalidException")({Message: Schema.optional(Schema.String)}) {}
export class InvalidArgsException extends Schema.Class<InvalidArgsException>("InvalidArgsException")({Message: Schema.optional(Schema.String)}) {}
export class SerialConsoleAccessDisabledException extends Schema.Class<SerialConsoleAccessDisabledException>("SerialConsoleAccessDisabledException")({Message: Schema.optional(Schema.String)}) {}
export class ServiceException extends Schema.Class<ServiceException>("ServiceException")({Message: Schema.optional(Schema.String)}) {}
export class SerialConsoleSessionLimitExceededException extends Schema.Class<SerialConsoleSessionLimitExceededException>("SerialConsoleSessionLimitExceededException")({Message: Schema.optional(Schema.String)}) {}
export class ThrottlingException extends Schema.Class<ThrottlingException>("ThrottlingException")({Message: Schema.optional(Schema.String)}) {}
export class SerialConsoleSessionUnavailableException extends Schema.Class<SerialConsoleSessionUnavailableException>("SerialConsoleSessionUnavailableException")({Message: Schema.optional(Schema.String)}) {}
export class SerialConsoleSessionUnsupportedException extends Schema.Class<SerialConsoleSessionUnsupportedException>("SerialConsoleSessionUnsupportedException")({Message: Schema.optional(Schema.String)}) {}

//# Errors
export class AuthExceptionError extends Schema.TaggedError<AuthExceptionError>()("AuthException", AuthException.fields) {};
export class EC2InstanceNotFoundExceptionError extends Schema.TaggedError<EC2InstanceNotFoundExceptionError>()("EC2InstanceNotFoundException", EC2InstanceNotFoundException.fields) {};
export class EC2InstanceStateInvalidExceptionError extends Schema.TaggedError<EC2InstanceStateInvalidExceptionError>()("EC2InstanceStateInvalidException", EC2InstanceStateInvalidException.fields) {};
export class EC2InstanceUnavailableExceptionError extends Schema.TaggedError<EC2InstanceUnavailableExceptionError>()("EC2InstanceUnavailableException", EC2InstanceUnavailableException.fields) {};
export class EC2InstanceTypeInvalidExceptionError extends Schema.TaggedError<EC2InstanceTypeInvalidExceptionError>()("EC2InstanceTypeInvalidException", EC2InstanceTypeInvalidException.fields) {};
export class InvalidArgsExceptionError extends Schema.TaggedError<InvalidArgsExceptionError>()("InvalidArgsException", InvalidArgsException.fields) {};
export class SerialConsoleAccessDisabledExceptionError extends Schema.TaggedError<SerialConsoleAccessDisabledExceptionError>()("SerialConsoleAccessDisabledException", SerialConsoleAccessDisabledException.fields) {};
export class ServiceExceptionError extends Schema.TaggedError<ServiceExceptionError>()("ServiceException", ServiceException.fields) {};
export class SerialConsoleSessionLimitExceededExceptionError extends Schema.TaggedError<SerialConsoleSessionLimitExceededExceptionError>()("SerialConsoleSessionLimitExceededException", SerialConsoleSessionLimitExceededException.fields) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException.fields) {};
export class SerialConsoleSessionUnavailableExceptionError extends Schema.TaggedError<SerialConsoleSessionUnavailableExceptionError>()("SerialConsoleSessionUnavailableException", SerialConsoleSessionUnavailableException.fields) {};
export class SerialConsoleSessionUnsupportedExceptionError extends Schema.TaggedError<SerialConsoleSessionUnsupportedExceptionError>()("SerialConsoleSessionUnsupportedException", SerialConsoleSessionUnsupportedException.fields) {};

//# Operations
export const sendSSHPublicKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-04-02", uri: "/", method: "POST", sdkId: "EC2 Instance Connect", sigV4ServiceName: "ec2-instance-connect", name: "AWSEC2InstanceConnectService.SendSSHPublicKey" }, SendSSHPublicKeyRequest, SendSSHPublicKeyResponse, [AuthExceptionError, EC2InstanceNotFoundExceptionError, EC2InstanceStateInvalidExceptionError, EC2InstanceUnavailableExceptionError, InvalidArgsExceptionError, ServiceExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const sendSerialConsoleSSHPublicKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-04-02", uri: "/", method: "POST", sdkId: "EC2 Instance Connect", sigV4ServiceName: "ec2-instance-connect", name: "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey" }, SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse, [AuthExceptionError, EC2InstanceNotFoundExceptionError, EC2InstanceStateInvalidExceptionError, EC2InstanceTypeInvalidExceptionError, EC2InstanceUnavailableExceptionError, InvalidArgsExceptionError, SerialConsoleAccessDisabledExceptionError, SerialConsoleSessionLimitExceededExceptionError, SerialConsoleSessionUnavailableExceptionError, SerialConsoleSessionUnsupportedExceptionError, ServiceExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
