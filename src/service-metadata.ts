import { Schema as S } from "effect";

export const ServiceMetadata = S.Struct({
  sdkId: S.String,
  version: S.String,
  protocol: S.String,
  sigV4ServiceName: S.String,
});

export type ServiceMetadata = typeof ServiceMetadata.Type;
