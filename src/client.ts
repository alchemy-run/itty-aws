import * as Effect from "effect/Effect";
import * as Context from "effect/Context";

export function makeOperation<
  Input,
  Ouput,
  Error,
  ClientTag extends Context.Tag<
    any,
    {
      call: (metadata: any) => (input: any) => Effect.Effect<any>;
      _endpointMetadataType: any;
    }
  >,
>(
  metadata: Context.Tag.Service<ClientTag>["_endpointMetadataType"],
  clientTag: ClientTag,
): (
  input: Input,
) => Effect.Effect<Ouput, Error, Context.Tag.Identifier<ClientTag>> {
  //todo(pear): remove to pipes
  return (input: any) =>
    Effect.gen(function* () {
      const client = yield* clientTag;
      return yield* client.call(metadata)(input);
    });
}
