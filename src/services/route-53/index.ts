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
      errorStatusCodes: {
        400: "InvalidKeySigningKeyStatus",
        404: "NoSuchKeySigningKey",
      },
    },
    AssociateVPCWithHostedZone: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/associatevpc",
      errorStatusCodes: {
        400: "PublicZoneVPCAssociation",
        401: "NotAuthorizedException",
        404: "NoSuchHostedZone",
      },
    },
    ChangeCidrCollection: {
      http: "POST /2013-04-01/cidrcollection/{Id}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchCidrCollectionException",
        409: "CidrCollectionVersionMismatchException",
      },
    },
    ChangeResourceRecordSets: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/rrset",
      errorStatusCodes: {
        400: "PriorRequestNotComplete",
        404: "NoSuchHostedZone",
      },
    },
    ChangeTagsForResource: {
      http: "POST /2013-04-01/tags/{ResourceType}/{ResourceId}",
      errorStatusCodes: {
        400: "ThrottlingException",
        404: "NoSuchHostedZone",
      },
    },
    CreateCidrCollection: {
      http: "POST /2013-04-01/cidrcollection",
      outputTraits: {
        Location: "Location",
      },
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    CreateHealthCheck: {
      http: "POST /2013-04-01/healthcheck",
      outputTraits: {
        Location: "Location",
      },
      errorStatusCodes: {
        400: "InvalidInput",
        409: "HealthCheckAlreadyExists",
      },
    },
    CreateHostedZone: {
      http: "POST /2013-04-01/hostedzone",
      outputTraits: {
        Location: "Location",
      },
      errorStatusCodes: {
        400: "TooManyHostedZones",
        409: "HostedZoneAlreadyExists",
      },
    },
    CreateKeySigningKey: {
      http: "POST /2013-04-01/keysigningkey",
      outputTraits: {
        Location: "Location",
      },
      errorStatusCodes: {
        400: "InvalidKeySigningKeyStatus",
        404: "NoSuchHostedZone",
        409: "KeySigningKeyAlreadyExists",
      },
    },
    CreateQueryLoggingConfig: {
      http: "POST /2013-04-01/queryloggingconfig",
      outputTraits: {
        Location: "Location",
      },
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHostedZone",
        409: "QueryLoggingConfigAlreadyExists",
      },
    },
    CreateReusableDelegationSet: {
      http: "POST /2013-04-01/delegationset",
      outputTraits: {
        Location: "Location",
      },
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    CreateTrafficPolicy: {
      http: "POST /2013-04-01/trafficpolicy",
      outputTraits: {
        Location: "Location",
      },
      errorStatusCodes: {
        400: "TooManyTrafficPolicies",
        409: "TrafficPolicyAlreadyExists",
      },
    },
    CreateTrafficPolicyInstance: {
      http: "POST /2013-04-01/trafficpolicyinstance",
      outputTraits: {
        Location: "Location",
      },
      errorStatusCodes: {
        400: "TooManyTrafficPolicyInstances",
        404: "NoSuchTrafficPolicy",
        409: "TrafficPolicyInstanceAlreadyExists",
      },
    },
    CreateTrafficPolicyVersion: {
      http: "POST /2013-04-01/trafficpolicy/{Id}",
      outputTraits: {
        Location: "Location",
      },
      errorStatusCodes: {
        400: "TooManyTrafficPolicyVersionsForCurrentPolicy",
        404: "NoSuchTrafficPolicy",
      },
    },
    CreateVPCAssociationAuthorization: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation",
      errorStatusCodes: {
        400: "TooManyVPCAssociationAuthorizations",
        404: "NoSuchHostedZone",
      },
    },
    DeactivateKeySigningKey: {
      http: "POST /2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate",
      errorStatusCodes: {
        400: "KeySigningKeyInParentDSRecord",
        404: "NoSuchKeySigningKey",
      },
    },
    DeleteCidrCollection: {
      http: "DELETE /2013-04-01/cidrcollection/{Id}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchCidrCollectionException",
      },
    },
    DeleteHealthCheck: {
      http: "DELETE /2013-04-01/healthcheck/{HealthCheckId}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHealthCheck",
      },
    },
    DeleteHostedZone: {
      http: "DELETE /2013-04-01/hostedzone/{Id}",
      errorStatusCodes: {
        400: "PriorRequestNotComplete",
        404: "NoSuchHostedZone",
      },
    },
    DeleteKeySigningKey: {
      http: "DELETE /2013-04-01/keysigningkey/{HostedZoneId}/{Name}",
      errorStatusCodes: {
        400: "InvalidKeySigningKeyStatus",
        404: "NoSuchKeySigningKey",
      },
    },
    DeleteQueryLoggingConfig: {
      http: "DELETE /2013-04-01/queryloggingconfig/{Id}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchQueryLoggingConfig",
      },
    },
    DeleteReusableDelegationSet: {
      http: "DELETE /2013-04-01/delegationset/{Id}",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    DeleteTrafficPolicy: {
      http: "DELETE /2013-04-01/trafficpolicy/{Id}/{Version}",
      errorStatusCodes: {
        400: "TrafficPolicyInUse",
        404: "NoSuchTrafficPolicy",
      },
    },
    DeleteTrafficPolicyInstance: {
      http: "DELETE /2013-04-01/trafficpolicyinstance/{Id}",
      errorStatusCodes: {
        400: "PriorRequestNotComplete",
        404: "NoSuchTrafficPolicyInstance",
      },
    },
    DeleteVPCAssociationAuthorization: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation",
      errorStatusCodes: {
        400: "InvalidVPCId",
        404: "VPCAssociationAuthorizationNotFound",
      },
    },
    DisableHostedZoneDNSSEC: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/disable-dnssec",
      errorStatusCodes: {
        400: "KeySigningKeyInParentDSRecord",
        404: "NoSuchHostedZone",
      },
    },
    DisassociateVPCFromHostedZone: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc",
      errorStatusCodes: {
        400: "LastVPCAssociation",
        404: "VPCAssociationNotFound",
      },
    },
    EnableHostedZoneDNSSEC: {
      http: "POST /2013-04-01/hostedzone/{HostedZoneId}/enable-dnssec",
      errorStatusCodes: {
        400: "InvalidKeySigningKeyStatus",
        404: "NoSuchHostedZone",
      },
    },
    GetAccountLimit: {
      http: "GET /2013-04-01/accountlimit/{Type}",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    GetChange: {
      http: "GET /2013-04-01/change/{Id}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchChange",
      },
    },
    GetCheckerIpRanges: {
      http: "GET /2013-04-01/checkeripranges",
    },
    GetDNSSEC: {
      http: "GET /2013-04-01/hostedzone/{HostedZoneId}/dnssec",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHostedZone",
      },
    },
    GetGeoLocation: {
      http: "GET /2013-04-01/geolocation",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchGeoLocation",
      },
    },
    GetHealthCheck: {
      http: "GET /2013-04-01/healthcheck/{HealthCheckId}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHealthCheck",
      },
    },
    GetHealthCheckCount: {
      http: "GET /2013-04-01/healthcheckcount",
    },
    GetHealthCheckLastFailureReason: {
      http: "GET /2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHealthCheck",
      },
    },
    GetHealthCheckStatus: {
      http: "GET /2013-04-01/healthcheck/{HealthCheckId}/status",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHealthCheck",
      },
    },
    GetHostedZone: {
      http: "GET /2013-04-01/hostedzone/{Id}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHostedZone",
      },
    },
    GetHostedZoneCount: {
      http: "GET /2013-04-01/hostedzonecount",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    GetHostedZoneLimit: {
      http: "GET /2013-04-01/hostedzonelimit/{HostedZoneId}/{Type}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHostedZone",
      },
    },
    GetQueryLoggingConfig: {
      http: "GET /2013-04-01/queryloggingconfig/{Id}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchQueryLoggingConfig",
      },
    },
    GetReusableDelegationSet: {
      http: "GET /2013-04-01/delegationset/{Id}",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    GetReusableDelegationSetLimit: {
      http: "GET /2013-04-01/reusabledelegationsetlimit/{DelegationSetId}/{Type}",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    GetTrafficPolicy: {
      http: "GET /2013-04-01/trafficpolicy/{Id}/{Version}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchTrafficPolicy",
      },
    },
    GetTrafficPolicyInstance: {
      http: "GET /2013-04-01/trafficpolicyinstance/{Id}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchTrafficPolicyInstance",
      },
    },
    GetTrafficPolicyInstanceCount: {
      http: "GET /2013-04-01/trafficpolicyinstancecount",
    },
    ListCidrBlocks: {
      http: "GET /2013-04-01/cidrcollection/{CollectionId}/cidrblocks",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchCidrLocationException",
      },
    },
    ListCidrCollections: {
      http: "GET /2013-04-01/cidrcollection",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    ListCidrLocations: {
      http: "GET /2013-04-01/cidrcollection/{CollectionId}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchCidrCollectionException",
      },
    },
    ListGeoLocations: {
      http: "GET /2013-04-01/geolocations",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    ListHealthChecks: {
      http: "GET /2013-04-01/healthcheck",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    ListHostedZones: {
      http: "GET /2013-04-01/hostedzone",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    ListHostedZonesByName: {
      http: "GET /2013-04-01/hostedzonesbyname",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    ListHostedZonesByVPC: {
      http: "GET /2013-04-01/hostedzonesbyvpc",
      errorStatusCodes: {
        400: "InvalidPaginationToken",
      },
    },
    ListQueryLoggingConfigs: {
      http: "GET /2013-04-01/queryloggingconfig",
      errorStatusCodes: {
        400: "InvalidPaginationToken",
        404: "NoSuchHostedZone",
      },
    },
    ListResourceRecordSets: {
      http: "GET /2013-04-01/hostedzone/{HostedZoneId}/rrset",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHostedZone",
      },
    },
    ListReusableDelegationSets: {
      http: "GET /2013-04-01/delegationset",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    ListTagsForResource: {
      http: "GET /2013-04-01/tags/{ResourceType}/{ResourceId}",
      errorStatusCodes: {
        400: "ThrottlingException",
        404: "NoSuchHostedZone",
      },
    },
    ListTagsForResources: {
      http: "POST /2013-04-01/tags/{ResourceType}",
      errorStatusCodes: {
        400: "ThrottlingException",
        404: "NoSuchHostedZone",
      },
    },
    ListTrafficPolicies: {
      http: "GET /2013-04-01/trafficpolicies",
      errorStatusCodes: {
        400: "InvalidInput",
      },
    },
    ListTrafficPolicyInstances: {
      http: "GET /2013-04-01/trafficpolicyinstances",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchTrafficPolicyInstance",
      },
    },
    ListTrafficPolicyInstancesByHostedZone: {
      http: "GET /2013-04-01/trafficpolicyinstances/hostedzone",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchTrafficPolicyInstance",
      },
    },
    ListTrafficPolicyInstancesByPolicy: {
      http: "GET /2013-04-01/trafficpolicyinstances/trafficpolicy",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchTrafficPolicyInstance",
      },
    },
    ListTrafficPolicyVersions: {
      http: "GET /2013-04-01/trafficpolicies/{Id}/versions",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchTrafficPolicy",
      },
    },
    ListVPCAssociationAuthorizations: {
      http: "GET /2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation",
      errorStatusCodes: {
        400: "InvalidPaginationToken",
        404: "NoSuchHostedZone",
      },
    },
    TestDNSAnswer: {
      http: "GET /2013-04-01/testdnsanswer",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHostedZone",
      },
    },
    UpdateHealthCheck: {
      http: "POST /2013-04-01/healthcheck/{HealthCheckId}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchHealthCheck",
        409: "HealthCheckVersionMismatch",
      },
    },
    UpdateHostedZoneComment: {
      http: "POST /2013-04-01/hostedzone/{Id}",
      errorStatusCodes: {
        400: "PriorRequestNotComplete",
        404: "NoSuchHostedZone",
      },
    },
    UpdateTrafficPolicyComment: {
      http: "POST /2013-04-01/trafficpolicy/{Id}/{Version}",
      errorStatusCodes: {
        400: "InvalidInput",
        404: "NoSuchTrafficPolicy",
      },
    },
    UpdateTrafficPolicyInstance: {
      http: "POST /2013-04-01/trafficpolicyinstance/{Id}",
      errorStatusCodes: {
        400: "PriorRequestNotComplete",
        404: "NoSuchTrafficPolicyInstance",
      },
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
