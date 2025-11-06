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
      traits: {},
      members: {},
    },
    AssociateVPCWithHostedZone: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/associatevpc",
      traits: {},
      members: {},
    },
    ChangeCidrCollection: {
      http: "POST /2013-04-01/cidrcollection/{Id}",
      traits: {},
      members: {},
    },
    ChangeResourceRecordSets: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/rrset",
      traits: {},
      members: {},
    },
    ChangeTagsForResource: {
      http: "POST /2013-04-01/tags/{ResourceType}/{ResourceId}",
      traits: {},
      members: {},
    },
    CreateCidrCollection: {
      http: "POST /2013-04-01/cidrcollection",
      traits: {
        Location: "Location",
      },
      members: {},
    },
    CreateHealthCheck: {
      http: "POST /2013-04-01/healthcheck",
      traits: {
        Location: "Location",
      },
      members: {},
    },
    CreateHostedZone: {
      http: "POST /2013-04-01/hostedzone",
      traits: {
        Location: "Location",
      },
      members: {},
    },
    CreateKeySigningKey: {
      http: "POST /2013-04-01/keysigningkey",
      traits: {
        Location: "Location",
      },
      members: {},
    },
    CreateQueryLoggingConfig: {
      http: "POST /2013-04-01/queryloggingconfig",
      traits: {
        Location: "Location",
      },
      members: {},
    },
    CreateReusableDelegationSet: {
      http: "POST /2013-04-01/delegationset",
      traits: {
        Location: "Location",
      },
      members: {},
    },
    CreateTrafficPolicy: {
      http: "POST /2013-04-01/trafficpolicy",
      traits: {
        Location: "Location",
      },
      members: {},
    },
    CreateTrafficPolicyInstance: {
      http: "POST /2013-04-01/trafficpolicyinstance",
      traits: {
        Location: "Location",
      },
      members: {},
    },
    CreateTrafficPolicyVersion: {
      http: "POST /2013-04-01/trafficpolicy/{Id}",
      traits: {
        Location: "Location",
      },
      members: {},
    },
    CreateVPCAssociationAuthorization: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation",
      traits: {},
      members: {},
    },
    DeactivateKeySigningKey: {
      http: "POST /2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate",
      traits: {},
      members: {},
    },
    DeleteCidrCollection: {
      http: "DELETE /2013-04-01/cidrcollection/{Id}",
      traits: {},
      members: {},
    },
    DeleteHealthCheck: {
      http: "DELETE /2013-04-01/healthcheck/{HealthCheckId}",
      traits: {},
      members: {},
    },
    DeleteHostedZone: {
      http: "DELETE /2013-04-01/hostedzone/{Id}",
      traits: {},
      members: {},
    },
    DeleteKeySigningKey: {
      http: "DELETE /2013-04-01/keysigningkey/{HostedZoneId}/{Name}",
      traits: {},
      members: {},
    },
    DeleteQueryLoggingConfig: {
      http: "DELETE /2013-04-01/queryloggingconfig/{Id}",
      traits: {},
      members: {},
    },
    DeleteReusableDelegationSet: {
      http: "DELETE /2013-04-01/delegationset/{Id}",
      traits: {},
      members: {},
    },
    DeleteTrafficPolicy: {
      http: "DELETE /2013-04-01/trafficpolicy/{Id}/{Version}",
      traits: {},
      members: {},
    },
    DeleteTrafficPolicyInstance: {
      http: "DELETE /2013-04-01/trafficpolicyinstance/{Id}",
      traits: {},
      members: {},
    },
    DeleteVPCAssociationAuthorization: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation",
      traits: {},
      members: {},
    },
    DisableHostedZoneDNSSEC: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/disable-dnssec",
      traits: {},
      members: {},
    },
    DisassociateVPCFromHostedZone: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc",
      traits: {},
      members: {},
    },
    EnableHostedZoneDNSSEC: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/enable-dnssec",
      traits: {},
      members: {},
    },
    GetAccountLimit: {
      http: "GET /2013-04-01/accountlimit/{Type}",
      traits: {},
      members: {},
    },
    GetChange: {
      http: "GET /2013-04-01/change/{Id}",
      traits: {},
      members: {},
    },
    GetCheckerIpRanges: {
      http: "GET /2013-04-01/checkeripranges",
      traits: {},
      members: {},
    },
    GetDNSSEC: {
      http: "GET /2013-04-01/hostedzone/{HostedZoneId}/dnssec",
      traits: {},
      members: {},
    },
    GetGeoLocation: {
      http: "GET /2013-04-01/geolocation",
      traits: {},
      members: {},
    },
    GetHealthCheck: {
      http: "GET /2013-04-01/healthcheck/{HealthCheckId}",
      traits: {},
      members: {},
    },
    GetHealthCheckCount: {
      http: "GET /2013-04-01/healthcheckcount",
      traits: {},
      members: {},
    },
    GetHealthCheckLastFailureReason: {
      http: "GET /2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason",
      traits: {},
      members: {},
    },
    GetHealthCheckStatus: {
      http: "GET /2013-04-01/healthcheck/{HealthCheckId}/status",
      traits: {},
      members: {},
    },
    GetHostedZone: {
      http: "GET /2013-04-01/hostedzone/{Id}",
      traits: {},
      members: {},
    },
    GetHostedZoneCount: {
      http: "GET /2013-04-01/hostedzonecount",
      traits: {},
      members: {},
    },
    GetHostedZoneLimit: {
      http: "GET /2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}",
      traits: {},
      members: {},
    },
    GetQueryLoggingConfig: {
      http: "GET /2013-04-01/queryloggingconfig/{Id}",
      traits: {},
      members: {},
    },
    GetReusableDelegationSet: {
      http: "GET /2013-04-01/delegationset/{Id}",
      traits: {},
      members: {},
    },
    GetReusableDelegationSetLimit: {
      http: "GET /2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}",
      traits: {},
      members: {},
    },
    GetTrafficPolicy: {
      http: "GET /2013-04-01/trafficpolicy/{Id}/{Version}",
      traits: {},
      members: {},
    },
    GetTrafficPolicyInstance: {
      http: "GET /2013-04-01/trafficpolicyinstance/{Id}",
      traits: {},
      members: {},
    },
    GetTrafficPolicyInstanceCount: {
      http: "GET /2013-04-01/trafficpolicyinstancecount",
      traits: {},
      members: {},
    },
    ListCidrBlocks: {
      http: "GET /2013-04-01/cidrcollection/{CollectionId}/cidrblocks",
      traits: {},
      members: {},
    },
    ListCidrCollections: {
      http: "GET /2013-04-01/cidrcollection",
      traits: {},
      members: {},
    },
    ListCidrLocations: {
      http: "GET /2013-04-01/cidrcollection/{CollectionId}",
      traits: {},
      members: {},
    },
    ListGeoLocations: {
      http: "GET /2013-04-01/geolocations",
      traits: {},
      members: {},
    },
    ListHealthChecks: {
      http: "GET /2013-04-01/healthcheck",
      traits: {},
      members: {},
    },
    ListHostedZones: {
      http: "GET /2013-04-01/hostedzone",
      traits: {},
      members: {},
    },
    ListHostedZonesByName: {
      http: "GET /2013-04-01/hostedzonesbyname",
      traits: {},
      members: {},
    },
    ListHostedZonesByVPC: {
      http: "GET /2013-04-01/hostedzonesbyvpc",
      traits: {},
      members: {},
    },
    ListQueryLoggingConfigs: {
      http: "GET /2013-04-01/queryloggingconfig",
      traits: {},
      members: {},
    },
    ListResourceRecordSets: {
      http: "GET /2013-04-01/hostedzone/{HostedZoneId}/rrset",
      traits: {},
      members: {},
    },
    ListReusableDelegationSets: {
      http: "GET /2013-04-01/delegationset",
      traits: {},
      members: {},
    },
    ListTagsForResource: {
      http: "GET /2013-04-01/tags/{ResourceType}/{ResourceId}",
      traits: {},
      members: {},
    },
    ListTagsForResources: {
      http: "POST /2013-04-01/tags/{ResourceType}",
      traits: {},
      members: {},
    },
    ListTrafficPolicies: {
      http: "GET /2013-04-01/trafficpolicies",
      traits: {},
      members: {},
    },
    ListTrafficPolicyInstances: {
      http: "GET /2013-04-01/trafficpolicyinstances",
      traits: {},
      members: {},
    },
    ListTrafficPolicyInstancesByHostedZone: {
      http: "GET /2013-04-01/trafficpolicyinstances/hostedzone",
      traits: {},
      members: {},
    },
    ListTrafficPolicyInstancesByPolicy: {
      http: "GET /2013-04-01/trafficpolicyinstances/trafficpolicy",
      traits: {},
      members: {},
    },
    ListTrafficPolicyVersions: {
      http: "GET /2013-04-01/trafficpolicies/{Id}/versions",
      traits: {},
      members: {},
    },
    ListVPCAssociationAuthorizations: {
      http: "GET /2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation",
      traits: {},
      members: {},
    },
    TestDNSAnswer: {
      http: "GET /2013-04-01/testdnsanswer",
      traits: {},
      members: {},
    },
    UpdateHealthCheck: {
      http: "POST /2013-04-01/healthcheck/{HealthCheckId}",
      traits: {},
      members: {},
    },
    UpdateHostedZoneComment: {
      http: "POST /2013-04-01/hostedzone/{Id}",
      traits: {},
      members: {},
    },
    UpdateTrafficPolicyComment: {
      http: "POST /2013-04-01/trafficpolicy/{Id}/{Version}",
      traits: {},
      members: {},
    },
    UpdateTrafficPolicyInstance: {
      http: "POST /2013-04-01/trafficpolicyinstance/{Id}",
      traits: {},
      members: {},
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
