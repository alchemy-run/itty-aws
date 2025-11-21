import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { Data, Effect, Context, Layer } from "effect";

export interface AwsCredentials {
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
  readonly sessionToken?: string;
}

//todo(pear): add this to a categeroy
//todo(pear): add details about the root error to this
export class AwsCredentialProviderError extends Data.TaggedError(
  "AwsCredentialProviderError",
)<{}> {}

export class Credentials extends Context.Tag("Credentials")<
  Credentials,
  {
    readonly getCredentials: () => Effect.Effect<
      AwsCredentials,
      AwsCredentialProviderError,
      never
    >;
  }
>() {}

export const NodeProviderChainCredentialsLive = Layer.succeed(Credentials, {
  getCredentials: () =>
    Effect.tryPromise({
      try: () => fromNodeProviderChain()(),
      catch: () => new AwsCredentialProviderError(),
    }),
});
