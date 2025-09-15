import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { tnb as _tnbClient } from "./types.ts";

export * from "./types.ts";

export {
  ExpiredTokenException,
  IncompleteSignature,
  InternalFailure,
  MalformedHttpRequestException,
  NotAuthorized,
  OptInRequired,
  RequestAbortedException,
  RequestEntityTooLargeException,
  RequestExpired,
  RequestTimeoutException,
  ServiceUnavailable,
  UnrecognizedClientException,
  UnknownOperationException,
  ValidationError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "tnb",
  version: "2008-10-21",
  protocol: "restJson1",
  sigV4ServiceName: "tnb",
  operations: {
    CancelSolNetworkOperation:
      "POST /sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}/cancel",
    CreateSolFunctionPackage: "POST /sol/vnfpkgm/v1/vnf_packages",
    CreateSolNetworkInstance: "POST /sol/nslcm/v1/ns_instances",
    CreateSolNetworkPackage: "POST /sol/nsd/v1/ns_descriptors",
    DeleteSolFunctionPackage: "DELETE /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}",
    DeleteSolNetworkInstance:
      "DELETE /sol/nslcm/v1/ns_instances/{nsInstanceId}",
    DeleteSolNetworkPackage: "DELETE /sol/nsd/v1/ns_descriptors/{nsdInfoId}",
    GetSolFunctionInstance: "GET /sol/vnflcm/v1/vnf_instances/{vnfInstanceId}",
    GetSolFunctionPackage: "GET /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}",
    GetSolFunctionPackageContent: {
      http: "GET /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content",
      traits: {
        contentType: "Content-Type",
        packageContent: "httpPayload",
      },
    },
    GetSolFunctionPackageDescriptor: {
      http: "GET /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/vnfd",
      traits: {
        contentType: "Content-Type",
        vnfd: "httpPayload",
      },
    },
    GetSolNetworkInstance: "GET /sol/nslcm/v1/ns_instances/{nsInstanceId}",
    GetSolNetworkOperation: "GET /sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}",
    GetSolNetworkPackage: "GET /sol/nsd/v1/ns_descriptors/{nsdInfoId}",
    GetSolNetworkPackageContent: {
      http: "GET /sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content",
      traits: {
        contentType: "Content-Type",
        nsdContent: "httpPayload",
      },
    },
    GetSolNetworkPackageDescriptor: {
      http: "GET /sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd",
      traits: {
        contentType: "Content-Type",
        nsd: "httpPayload",
      },
    },
    InstantiateSolNetworkInstance:
      "POST /sol/nslcm/v1/ns_instances/{nsInstanceId}/instantiate",
    ListSolFunctionInstances: "GET /sol/vnflcm/v1/vnf_instances",
    ListSolFunctionPackages: "GET /sol/vnfpkgm/v1/vnf_packages",
    ListSolNetworkInstances: "GET /sol/nslcm/v1/ns_instances",
    ListSolNetworkOperations: "GET /sol/nslcm/v1/ns_lcm_op_occs",
    ListSolNetworkPackages: "GET /sol/nsd/v1/ns_descriptors",
    ListTagsForResource: "GET /tags/{resourceArn}",
    PutSolFunctionPackageContent:
      "PUT /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content",
    PutSolNetworkPackageContent:
      "PUT /sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content",
    TagResource: "POST /tags/{resourceArn}",
    TerminateSolNetworkInstance:
      "POST /sol/nslcm/v1/ns_instances/{nsInstanceId}/terminate",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateSolFunctionPackage: "PATCH /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}",
    UpdateSolNetworkInstance:
      "POST /sol/nslcm/v1/ns_instances/{nsInstanceId}/update",
    UpdateSolNetworkPackage: "PATCH /sol/nsd/v1/ns_descriptors/{nsdInfoId}",
    ValidateSolFunctionPackageContent:
      "PUT /sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content/validate",
    ValidateSolNetworkPackageContent:
      "PUT /sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content/validate",
  },
} as const satisfies ServiceMetadata;

export type _tnb = _tnbClient;
export interface tnb extends _tnb {}
export const tnb = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestJson1Handler());
  }
} as unknown as typeof _tnbClient;
