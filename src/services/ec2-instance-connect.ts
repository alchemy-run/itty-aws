import * as S from "effect/Schema"
import { FormatAwsJSON11Request,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class SendSerialConsoleSSHPublicKeyRequest extends S.Class<SendSerialConsoleSSHPublicKeyRequest>("SendSerialConsoleSSHPublicKeyRequest")({InstanceId: S.String, SerialPort: S.optional(S.Number), SSHPublicKey: S.String}) {}
export class SendSSHPublicKeyRequest extends S.Class<SendSSHPublicKeyRequest>("SendSSHPublicKeyRequest")({InstanceId: S.String, InstanceOSUser: S.String, SSHPublicKey: S.String, AvailabilityZone: S.optional(S.String)}) {}
export class SendSerialConsoleSSHPublicKeyResponse extends S.Class<SendSerialConsoleSSHPublicKeyResponse>("SendSerialConsoleSSHPublicKeyResponse")({RequestId: S.optional(S.String), Success: S.optional(S.Boolean)}) {}
export class SendSSHPublicKeyResponse extends S.Class<SendSSHPublicKeyResponse>("SendSSHPublicKeyResponse")({RequestId: S.optional(S.String), Success: S.optional(S.Boolean)}) {}

//# Errors
export class AuthException extends S.TaggedError<AuthException>()("AuthException", {}) {};
export class EC2InstanceNotFoundException extends S.TaggedError<EC2InstanceNotFoundException>()("EC2InstanceNotFoundException", {}) {};
export class EC2InstanceStateInvalidException extends S.TaggedError<EC2InstanceStateInvalidException>()("EC2InstanceStateInvalidException", {}) {};
export class EC2InstanceUnavailableException extends S.TaggedError<EC2InstanceUnavailableException>()("EC2InstanceUnavailableException", {Message: S.optional(S.String)}) {};
export class EC2InstanceTypeInvalidException extends S.TaggedError<EC2InstanceTypeInvalidException>()("EC2InstanceTypeInvalidException", {Message: S.optional(S.String)}) {};
export class InvalidArgsException extends S.TaggedError<InvalidArgsException>()("InvalidArgsException", {}) {};
export class SerialConsoleAccessDisabledException extends S.TaggedError<SerialConsoleAccessDisabledException>()("SerialConsoleAccessDisabledException", {Message: S.optional(S.String)}) {};
export class ServiceException extends S.TaggedError<ServiceException>()("ServiceException", {Message: S.optional(S.String)}) {};
export class SerialConsoleSessionLimitExceededException extends S.TaggedError<SerialConsoleSessionLimitExceededException>()("SerialConsoleSessionLimitExceededException", {Message: S.optional(S.String)}) {};
export class ThrottlingException extends S.TaggedError<ThrottlingException>()("ThrottlingException", {Message: S.optional(S.String)}) {};
export class SerialConsoleSessionUnavailableException extends S.TaggedError<SerialConsoleSessionUnavailableException>()("SerialConsoleSessionUnavailableException", {Message: S.optional(S.String)}) {};
export class SerialConsoleSessionUnsupportedException extends S.TaggedError<SerialConsoleSessionUnsupportedException>()("SerialConsoleSessionUnsupportedException", {Message: S.optional(S.String)}) {};

//# Operations
/**
 * Pushes an SSH public key to the specified EC2 instance for use by the specified user.
 * The key remains for 60 seconds. For more information, see Connect to
 * your Linux instance using EC2 Instance Connect in the Amazon EC2
 * User Guide.
 */export const sendSSHPublicKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-04-02", sdkId: "EC2 Instance Connect", sigV4ServiceName: "ec2-instance-connect", name: "AWSEC2InstanceConnectService.SendSSHPublicKey" }, SendSSHPublicKeyRequest, SendSSHPublicKeyResponse, [AuthException, EC2InstanceNotFoundException, EC2InstanceStateInvalidException, EC2InstanceUnavailableException, InvalidArgsException, ServiceException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Pushes an SSH public key to the specified EC2 instance. The key remains for 60
 * seconds, which gives you 60 seconds to establish a serial console connection to the
 * instance using SSH. For more information, see EC2 Serial Console in
 * the *Amazon EC2 User Guide*.
 */export const sendSerialConsoleSSHPublicKey = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2018-04-02", sdkId: "EC2 Instance Connect", sigV4ServiceName: "ec2-instance-connect", name: "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey" }, SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse, [AuthException, EC2InstanceNotFoundException, EC2InstanceStateInvalidException, EC2InstanceTypeInvalidException, EC2InstanceUnavailableException, InvalidArgsException, SerialConsoleAccessDisabledException, SerialConsoleSessionLimitExceededException, SerialConsoleSessionUnavailableException, SerialConsoleSessionUnsupportedException, ServiceException, ThrottlingException]), FormatAwsJSON11Request, FormatJSONResponse, FormatAwsRestJSONError);
