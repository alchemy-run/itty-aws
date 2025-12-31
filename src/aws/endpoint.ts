import * as Context from "effect/Context";

export class Endpoint extends Context.Tag("Endpoint")<Endpoint, string>() {}
