import * as ServiceMap from "effect/ServiceMap";
import type { AwsCredentials } from "./client.ts";

export type Credentials = {
  getCredentials(): Promise<AwsCredentials>;
};

export const Credentials = ServiceMap.Service<Credentials>("Credentials");
