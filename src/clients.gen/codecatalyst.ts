import * as S from "effect/Schema"
import { FormatJSONRequest,FormatJSONResponse,FormatAwsRestJSONError, makeOperation } from "../client.ts";
import * as H from "../schema-helpers.ts";

//# Schemas
export class GetUserDetailsRequest extends S.Class<GetUserDetailsRequest>("GetUserDetailsRequest")({id: S.optional(S.String), userName: S.optional(S.String)}) {}
export class VerifySessionResponse extends S.Class<VerifySessionResponse>("VerifySessionResponse")({identity: S.optional(S.String)}) {}
export class EmailAddress extends S.Class<EmailAddress>("EmailAddress")({email: S.optional(S.String), verified: S.optional(S.Boolean)}) {}
export class GetUserDetailsResponse extends S.Class<GetUserDetailsResponse>("GetUserDetailsResponse")({userId: S.optional(S.String), userName: S.optional(S.String), displayName: S.optional(S.String), primaryEmail: S.optional(EmailAddress), version: S.optional(S.String)}) {}

//# Errors


//# Operations
export const verifySession = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-28", uri: "/session", method: "GET", sdkId: "CodeCatalyst", sigV4ServiceName: null, name: "CodeCatalyst.VerifySession" }, S.Struct({}), VerifySessionResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
export const getUserDetails = /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-28", uri: "/userDetails", method: "GET", sdkId: "CodeCatalyst", sigV4ServiceName: null, name: "CodeCatalyst.GetUserDetails" }, GetUserDetailsRequest, GetUserDetailsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
