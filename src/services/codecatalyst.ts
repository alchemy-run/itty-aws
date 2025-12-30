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
/**
 * Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.
 */export const verifySession = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-28", uri: "/session", method: "GET", sdkId: "CodeCatalyst", sigV4ServiceName: "CodeCatalyst", name: "CodeCatalyst.VerifySession" }, S.Struct({}), VerifySessionResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
/**
 * Returns information about a user.
 */export const getUserDetails = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation({ version: "2022-09-28", uri: "/userDetails", method: "GET", sdkId: "CodeCatalyst", sigV4ServiceName: "CodeCatalyst", name: "CodeCatalyst.GetUserDetails" }, GetUserDetailsRequest, GetUserDetailsResponse, []), FormatJSONRequest, FormatJSONResponse, FormatAwsRestJSONError);
