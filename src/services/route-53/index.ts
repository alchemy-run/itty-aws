import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestXmlHandler } from "../../protocols/rest-xml.ts";
import type { Route53 as _Route53Client } from "./types.ts";

export * from "./types.ts";

export {
  AccessDeniedException,
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
  ValidationException,
  type CommonAwsError,
} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "Route 53",
  version: "2013-04-01",
  protocol: "restXml",
  sigV4ServiceName: "route53",
  endpointPrefix: "route53",
  operations: {
    ActivateKeySigningKey: {
      http: "POST /2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate",
    },
    AssociateVPCWithHostedZone: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/associatevpc",
    },
    ChangeCidrCollection: {
      http: "POST /2013-04-01/cidrcollection/{Id}",
    },
    ChangeResourceRecordSets: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/rrset",
    },
    ChangeTagsForResource: {
      http: "POST /2013-04-01/tags/{ResourceType}/{ResourceId}",
    },
    CreateCidrCollection: {
      http: "POST /2013-04-01/cidrcollection",
      traits: {
        Location: "Location",
      },
    },
    CreateHealthCheck: {
      http: "POST /2013-04-01/healthcheck",
      traits: {
        Location: "Location",
      },
    },
    CreateHostedZone: {
      http: "POST /2013-04-01/hostedzone",
      traits: {
        Location: "Location",
      },
    },
    CreateKeySigningKey: {
      http: "POST /2013-04-01/keysigningkey",
      traits: {
        Location: "Location",
      },
    },
    CreateQueryLoggingConfig: {
      http: "POST /2013-04-01/queryloggingconfig",
      traits: {
        Location: "Location",
      },
    },
    CreateReusableDelegationSet: {
      http: "POST /2013-04-01/delegationset",
      traits: {
        Location: "Location",
      },
    },
    CreateTrafficPolicy: {
      http: "POST /2013-04-01/trafficpolicy",
      traits: {
        Location: "Location",
      },
    },
    CreateTrafficPolicyInstance: {
      http: "POST /2013-04-01/trafficpolicyinstance",
      traits: {
        Location: "Location",
      },
    },
    CreateTrafficPolicyVersion: {
      http: "POST /2013-04-01/trafficpolicy/{Id}",
      traits: {
        Location: "Location",
      },
    },
    CreateVPCAssociationAuthorization: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation",
    },
    DeactivateKeySigningKey: {
      http: "POST /2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate",
    },
    DeleteCidrCollection: {
      http: "DELETE /2013-04-01/cidrcollection/{Id}",
    },
    DeleteHealthCheck: {
      http: "DELETE /2013-04-01/healthcheck/{HealthCheckId}",
    },
    DeleteHostedZone: {
      http: "DELETE /2013-04-01/hostedzone/{Id}",
    },
    DeleteKeySigningKey: {
      http: "DELETE /2013-04-01/keysigningkey/{HostedZoneId}/{Name}",
    },
    DeleteQueryLoggingConfig: {
      http: "DELETE /2013-04-01/queryloggingconfig/{Id}",
    },
    DeleteReusableDelegationSet: {
      http: "DELETE /2013-04-01/delegationset/{Id}",
    },
    DeleteTrafficPolicy: {
      http: "DELETE /2013-04-01/trafficpolicy/{Id}/{Version}",
    },
    DeleteTrafficPolicyInstance: {
      http: "DELETE /2013-04-01/trafficpolicyinstance/{Id}",
    },
    DeleteVPCAssociationAuthorization: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation",
    },
    DisableHostedZoneDNSSEC: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/disable-dnssec",
    },
    DisassociateVPCFromHostedZone: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc",
    },
    EnableHostedZoneDNSSEC: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/enable-dnssec",
    },
    GetAccountLimit: {
      http: "GET /2013-04-01/accountlimit/{Type}",
    },
    GetChange: {
      http: "GET /2013-04-01/change/{Id}",
    },
    GetCheckerIpRanges: {
      http: "GET /2013-04-01/checkeripranges",
    },
    GetDNSSEC: {
      http: "GET /2013-04-01/hostedzone/{HostedZoneId}/dnssec",
    },
    GetGeoLocation: {
      http: "GET /2013-04-01/geolocation",
    },
    GetHealthCheck: {
      http: "GET /2013-04-01/healthcheck/{HealthCheckId}",
    },
    GetHealthCheckCount: {
      http: "GET /2013-04-01/healthcheckcount",
    },
    GetHealthCheckLastFailureReason: {
      http: "GET /2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason",
    },
    GetHealthCheckStatus: {
      http: "GET /2013-04-01/healthcheck/{HealthCheckId}/status",
    },
    GetHostedZone: {
      http: "GET /2013-04-01/hostedzone/{Id}",
    },
    GetHostedZoneCount: {
      http: "GET /2013-04-01/hostedzonecount",
    },
    GetHostedZoneLimit: {
      http: "GET /2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}",
    },
    GetQueryLoggingConfig: {
      http: "GET /2013-04-01/queryloggingconfig/{Id}",
    },
    GetReusableDelegationSet: {
      http: "GET /2013-04-01/delegationset/{Id}",
    },
    GetReusableDelegationSetLimit: {
      http: "GET /2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}",
    },
    GetTrafficPolicy: {
      http: "GET /2013-04-01/trafficpolicy/{Id}/{Version}",
    },
    GetTrafficPolicyInstance: {
      http: "GET /2013-04-01/trafficpolicyinstance/{Id}",
    },
    GetTrafficPolicyInstanceCount: {
      http: "GET /2013-04-01/trafficpolicyinstancecount",
    },
    ListCidrBlocks: {
      http: "GET /2013-04-01/cidrcollection/{CollectionId}/cidrblocks",
    },
    ListCidrCollections: {
      http: "GET /2013-04-01/cidrcollection",
    },
    ListCidrLocations: {
      http: "GET /2013-04-01/cidrcollection/{CollectionId}",
    },
    ListGeoLocations: {
      http: "GET /2013-04-01/geolocations",
    },
    ListHealthChecks: {
      http: "GET /2013-04-01/healthcheck",
    },
    ListHostedZones: {
      http: "GET /2013-04-01/hostedzone",
    },
    ListHostedZonesByName: {
      http: "GET /2013-04-01/hostedzonesbyname",
    },
    ListHostedZonesByVPC: {
      http: "GET /2013-04-01/hostedzonesbyvpc",
    },
    ListQueryLoggingConfigs: {
      http: "GET /2013-04-01/queryloggingconfig",
    },
    ListResourceRecordSets: {
      http: "GET /2013-04-01/hostedzone/{HostedZoneId}/rrset",
    },
    ListReusableDelegationSets: {
      http: "GET /2013-04-01/delegationset",
    },
    ListTagsForResource: {
      http: "GET /2013-04-01/tags/{ResourceType}/{ResourceId}",
    },
    ListTagsForResources: {
      http: "POST /2013-04-01/tags/{ResourceType}",
    },
    ListTrafficPolicies: {
      http: "GET /2013-04-01/trafficpolicies",
    },
    ListTrafficPolicyInstances: {
      http: "GET /2013-04-01/trafficpolicyinstances",
    },
    ListTrafficPolicyInstancesByHostedZone: {
      http: "GET /2013-04-01/trafficpolicyinstances/hostedzone",
    },
    ListTrafficPolicyInstancesByPolicy: {
      http: "GET /2013-04-01/trafficpolicyinstances/trafficpolicy",
    },
    ListTrafficPolicyVersions: {
      http: "GET /2013-04-01/trafficpolicies/{Id}/versions",
    },
    ListVPCAssociationAuthorizations: {
      http: "GET /2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation",
    },
    TestDNSAnswer: {
      http: "GET /2013-04-01/testdnsanswer",
    },
    UpdateHealthCheck: {
      http: "POST /2013-04-01/healthcheck/{HealthCheckId}",
    },
    UpdateHostedZoneComment: {
      http: "POST /2013-04-01/hostedzone/{Id}",
    },
    UpdateTrafficPolicyComment: {
      http: "POST /2013-04-01/trafficpolicy/{Id}/{Version}",
    },
    UpdateTrafficPolicyInstance: {
      http: "POST /2013-04-01/trafficpolicyinstance/{Id}",
    },
  },
} as const satisfies ServiceMetadata;

export type _Route53 = _Route53Client;
export interface Route53 extends _Route53 {}
export const Route53 = class extends AWSServiceClient {
  constructor(cfg: Partial<AWSClientConfig> = {}) {
    const config: AWSClientConfig = {
      region: cfg.region ?? "us-east-1",
      credentials: cfg.credentials,
      endpoint: cfg.endpoint,
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config, new RestXmlHandler());
  }
} as unknown as typeof _Route53Client;
