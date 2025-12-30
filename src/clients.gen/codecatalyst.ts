import { Schema} from "effect"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import { Operation, Path, Header, StreamBody, Body } from "../schema-helpers.ts";

//# Schemas
export class GetUserDetailsRequest extends Schema.Class<GetUserDetailsRequest>("GetUserDetailsRequest")({id: Schema.optional(Schema.String), userName: Schema.optional(Schema.String)}) {}
export class VerifySessionResponse extends Schema.Class<VerifySessionResponse>("VerifySessionResponse")({identity: Schema.optional(Schema.String)}) {}
export class EmailAddress extends Schema.Class<EmailAddress>("EmailAddress")({email: Schema.optional(Schema.String), verified: Schema.optional(Schema.Boolean)}) {}
export class GetUserDetailsResponse extends Schema.Class<GetUserDetailsResponse>("GetUserDetailsResponse")({userId: Schema.optional(Schema.String), userName: Schema.optional(Schema.String), displayName: Schema.optional(Schema.String), primaryEmail: Schema.optional(EmailAddress), version: Schema.optional(Schema.String)}) {}

//# Errors


//# Operations
export const verifySession = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-28", uri: "/session", method: "GET", sdkId: "CodeCatalyst", sigV4ServiceName: null, name: "CodeCatalyst.VerifySession" }, Schema.Struct({}), VerifySessionResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getUserDetails = /*#__PURE__*/ makeOperation(() => Operation({ version: "2022-09-28", uri: "/userDetails", method: "GET", sdkId: "CodeCatalyst", sigV4ServiceName: null, name: "CodeCatalyst.GetUserDetails" }, GetUserDetailsRequest, GetUserDetailsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
