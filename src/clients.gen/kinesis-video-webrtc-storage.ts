import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const JoinStorageSessionInput = Schema.Struct({channelArn: Schema.String})
const JoinStorageSessionAsViewerInput = Schema.Struct({channelArn: Schema.String, clientId: Schema.String})
const AccessDeniedException = Schema.Struct({message: Schema.optional(Schema.String)})
const ClientLimitExceededException = Schema.Struct({message: Schema.optional(Schema.String)})
const InvalidArgumentException = Schema.Struct({message: Schema.optional(Schema.String)})
export const JoinStorageSession = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/joinStorageSession", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "JoinStorageSession" }, JoinStorageSessionInput, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ClientLimitExceededException", ClientLimitExceededException), ErrorAnnotation("InvalidArgumentException", InvalidArgumentException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const ResourceNotFoundException = Schema.Struct({message: Schema.optional(Schema.String)})
export const JoinStorageSessionAsViewer = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/joinStorageSessionAsViewer", method: "POST", sdkId: "Kinesis Video WebRTC Storage", sigV4ServiceName: "kinesisvideo", name: "JoinStorageSessionAsViewer" }, JoinStorageSessionAsViewerInput, Schema.Struct({}), Schema.Union(ErrorAnnotation("AccessDeniedException", AccessDeniedException), ErrorAnnotation("ClientLimitExceededException", ClientLimitExceededException), ErrorAnnotation("InvalidArgumentException", InvalidArgumentException), ErrorAnnotation("ResourceNotFoundException", ResourceNotFoundException))), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
