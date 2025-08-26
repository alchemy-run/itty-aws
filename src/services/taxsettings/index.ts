import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { TaxSettings as _TaxSettings } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "TaxSettings",
  version: "2018-05-10",
  protocol: "restJson1",
  sigV4ServiceName: "tax",
  operations: {
    BatchDeleteTaxRegistration: "POST /BatchDeleteTaxRegistration",
    BatchGetTaxExemptions: "POST /BatchGetTaxExemptions",
    BatchPutTaxRegistration: "POST /BatchPutTaxRegistration",
    DeleteSupplementalTaxRegistration:
      "POST /DeleteSupplementalTaxRegistration",
    DeleteTaxRegistration: "POST /DeleteTaxRegistration",
    GetTaxExemptionTypes: "POST /GetTaxExemptionTypes",
    GetTaxInheritance: "POST /GetTaxInheritance",
    GetTaxRegistration: "POST /GetTaxRegistration",
    GetTaxRegistrationDocument: "POST /GetTaxRegistrationDocument",
    ListSupplementalTaxRegistrations: "POST /ListSupplementalTaxRegistrations",
    ListTaxExemptions: "POST /ListTaxExemptions",
    ListTaxRegistrations: "POST /ListTaxRegistrations",
    PutSupplementalTaxRegistration: "POST /PutSupplementalTaxRegistration",
    PutTaxExemption: "POST /PutTaxExemption",
    PutTaxInheritance: "POST /PutTaxInheritance",
    PutTaxRegistration: "POST /PutTaxRegistration",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const TaxSettings = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _TaxSettings;
