import * as S from "effect/Schema";
import * as ErrorParser from "./error-parser.ts";
import type { Middleware } from "./middleware/middleware.ts";
import * as RequestFormatter from "./request-formatter.ts";
import * as ResponseParser from "./response-parser.ts";

export declare namespace Operation {
  export type Input<Op extends Operation> = S.Schema.Type<Op["inputSchema"]>;
  export type Output<Op extends Operation> = S.Schema.Type<Op["outputSchema"]>;
  export type Error<Op extends Operation> = Instance<Op["errors"][number]>;

  type Instance<T> = T extends new (...args: any) => infer U ? U : T;
}

export interface Operation<
  Input extends S.Schema.AnyNoContext = S.Schema.AnyNoContext,
  Output extends S.Schema.AnyNoContext = S.Schema.AnyNoContext,
  Error = any,
> {
  inputSchema: Input;
  outputSchema: Output;
  errors: Error[];
  uri?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
  sdkId: string;
  sigV4ServiceName: string;
  name: string;
  version: string;
  requestFormatter: RequestFormatter.FormatRequest;
  responseParser: ResponseParser.ParseResponse;
  errorParser: ErrorParser.ParseErrors;
  middleware?: Middleware[];
}
