import { Schema} from "effect"
import { FormatXMLRequest, FormatXMLResponse, makeOperation } from "../client";
import { Operation, Path, Header, StreamBody, Body, ErrorAnnotation } from "../schema-helpers";
const GetUserDetailsRequest = Schema.Struct({id: Schema.optional(Schema.String), userName: Schema.optional(Schema.String)})
const VerifySessionResponse = Schema.Struct({identity: Schema.optional(Schema.String)})
export const VerifySession = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/session", method: "GET", sdkId: "CodeCatalyst", sigV4ServiceName: null, name: "VerifySession" }, Schema.Struct({}), VerifySessionResponse, Schema.Void), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
const EmailAddress = Schema.Struct({email: Schema.optional(Schema.String), verified: Schema.optional(Schema.Boolean)})
const GetUserDetailsResponse = Schema.Struct({userId: Schema.optional(Schema.String), userName: Schema.optional(Schema.String), displayName: Schema.optional(Schema.String), primaryEmail: Schema.optional(EmailAddress), version: Schema.optional(Schema.String)})
export const GetUserDetails = /*#__PURE__*/ makeOperation(() => Operation({ uri: "/userDetails", method: "GET", sdkId: "CodeCatalyst", sigV4ServiceName: null, name: "GetUserDetails" }, GetUserDetailsRequest, GetUserDetailsResponse, Schema.Void), FormatXMLRequest, FormatXMLResponse, FormatXMLResponse);
