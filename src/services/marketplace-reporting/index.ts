import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../../error.ts";
import { AWSServiceClient } from "../../client.ts";

export class MarketplaceReporting extends AWSServiceClient {
  getBuyerDashboard(
    input: GetBuyerDashboardInput,
  ): Effect.Effect<
    GetBuyerDashboardOutput,
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | UnauthorizedException
    | CommonAwsError
  > {
    return this.call("GetBuyerDashboard", input);
  }
}

export default MarketplaceReporting;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export type DashboardIdentifier = string;

export type EmbeddingDomain = string;

export type EmbeddingDomains = Array<string>;
export interface GetBuyerDashboardInput {
  dashboardIdentifier: string;
  embeddingDomains: Array<string>;
}
export interface GetBuyerDashboardOutput {
  embedUrl: string;
  dashboardIdentifier: string;
  embeddingDomains: Array<string>;
}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export declare namespace GetBuyerDashboard {
  export type Input = GetBuyerDashboardInput;
  export type Output = GetBuyerDashboardOutput;
  export type Error =
    | AccessDeniedException
    | BadRequestException
    | InternalServerException
    | UnauthorizedException
    | CommonAwsError;
}
