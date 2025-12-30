import { Schema} from "effect"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export const SendSerialConsoleSSHPublicKeyRequest = Schema.Struct({InstanceId: Schema.String, SerialPort: Schema.optional(Schema.Number), SSHPublicKey: Schema.String});
export const SendSSHPublicKeyRequest = Schema.Struct({InstanceId: Schema.String, InstanceOSUser: Schema.String, SSHPublicKey: Schema.String, AvailabilityZone: Schema.optional(Schema.String)});
export const SendSerialConsoleSSHPublicKeyResponse = Schema.Struct({RequestId: Schema.optional(Schema.String), Success: Schema.optional(Schema.Boolean)});
export const SendSSHPublicKeyResponse = Schema.Struct({RequestId: Schema.optional(Schema.String), Success: Schema.optional(Schema.Boolean)});
export const AuthException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const EC2InstanceNotFoundException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const EC2InstanceStateInvalidException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const EC2InstanceUnavailableException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const EC2InstanceTypeInvalidException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const InvalidArgsException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const SerialConsoleAccessDisabledException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ServiceException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const SerialConsoleSessionLimitExceededException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const ThrottlingException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const SerialConsoleSessionUnavailableException = Schema.Struct({Message: Schema.optional(Schema.String)});
export const SerialConsoleSessionUnsupportedException = Schema.Struct({Message: Schema.optional(Schema.String)});

//# Errors
export class AuthExceptionError extends Schema.TaggedError<AuthExceptionError>()("AuthException", AuthException) {};
export class EC2InstanceNotFoundExceptionError extends Schema.TaggedError<EC2InstanceNotFoundExceptionError>()("EC2InstanceNotFoundException", EC2InstanceNotFoundException) {};
export class EC2InstanceStateInvalidExceptionError extends Schema.TaggedError<EC2InstanceStateInvalidExceptionError>()("EC2InstanceStateInvalidException", EC2InstanceStateInvalidException) {};
export class EC2InstanceUnavailableExceptionError extends Schema.TaggedError<EC2InstanceUnavailableExceptionError>()("EC2InstanceUnavailableException", EC2InstanceUnavailableException) {};
export class EC2InstanceTypeInvalidExceptionError extends Schema.TaggedError<EC2InstanceTypeInvalidExceptionError>()("EC2InstanceTypeInvalidException", EC2InstanceTypeInvalidException) {};
export class InvalidArgsExceptionError extends Schema.TaggedError<InvalidArgsExceptionError>()("InvalidArgsException", InvalidArgsException) {};
export class SerialConsoleAccessDisabledExceptionError extends Schema.TaggedError<SerialConsoleAccessDisabledExceptionError>()("SerialConsoleAccessDisabledException", SerialConsoleAccessDisabledException) {};
export class ServiceExceptionError extends Schema.TaggedError<ServiceExceptionError>()("ServiceException", ServiceException) {};
export class SerialConsoleSessionLimitExceededExceptionError extends Schema.TaggedError<SerialConsoleSessionLimitExceededExceptionError>()("SerialConsoleSessionLimitExceededException", SerialConsoleSessionLimitExceededException) {};
export class ThrottlingExceptionError extends Schema.TaggedError<ThrottlingExceptionError>()("ThrottlingException", ThrottlingException) {};
export class SerialConsoleSessionUnavailableExceptionError extends Schema.TaggedError<SerialConsoleSessionUnavailableExceptionError>()("SerialConsoleSessionUnavailableException", SerialConsoleSessionUnavailableException) {};
export class SerialConsoleSessionUnsupportedExceptionError extends Schema.TaggedError<SerialConsoleSessionUnsupportedExceptionError>()("SerialConsoleSessionUnsupportedException", SerialConsoleSessionUnsupportedException) {};

//# Operations
export const sendSSHPublicKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-04-02", uri: "/", method: "POST", sdkId: "EC2 Instance Connect", sigV4ServiceName: "ec2-instance-connect", name: "AWSEC2InstanceConnectService.SendSSHPublicKey" }, SendSSHPublicKeyRequest, SendSSHPublicKeyResponse, [AuthExceptionError, EC2InstanceNotFoundExceptionError, EC2InstanceStateInvalidExceptionError, EC2InstanceUnavailableExceptionError, InvalidArgsExceptionError, ServiceExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
export const sendSerialConsoleSSHPublicKey = /*#__PURE__*/ makeOperation(() => Operation({ version: "2018-04-02", uri: "/", method: "POST", sdkId: "EC2 Instance Connect", sigV4ServiceName: "ec2-instance-connect", name: "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey" }, SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse, [AuthExceptionError, EC2InstanceNotFoundExceptionError, EC2InstanceStateInvalidExceptionError, EC2InstanceTypeInvalidExceptionError, EC2InstanceUnavailableExceptionError, InvalidArgsExceptionError, SerialConsoleAccessDisabledExceptionError, SerialConsoleSessionLimitExceededExceptionError, SerialConsoleSessionUnavailableExceptionError, SerialConsoleSessionUnsupportedExceptionError, ServiceExceptionError, ThrottlingExceptionError]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
