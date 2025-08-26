import type { ServiceMetadata } from "./client.ts";

const metadataCache = new Map<string, ServiceMetadata>();

// Mapping from normalized service names to actual directory paths
// Only includes services where the metadata key differs from directory name
const servicePathMap: Record<string, string> = {
  acmpca: "acm-pca",
  apigateway: "api-gateway",
  appmesh: "app-mesh",
  applicationautoscaling: "application-auto-scaling",
  applicationdiscoveryservice: "application-discovery-service",
  applicationinsights: "application-insights",
  applicationsignals: "application-signals",
  arcregionswitch: "arc-region-switch",
  arczonalshift: "arc-zonal-shift",
  autoscaling: "auto-scaling",
  autoscalingplans: "auto-scaling-plans",
  backupgateway: "backup-gateway",
  bcmdataexports: "bcm-data-exports",
  bcmpricingcalculator: "bcm-pricing-calculator",
  bedrockagent: "bedrock-agent",
  bedrockagentruntime: "bedrock-agent-runtime",
  bedrockagentcore: "bedrock-agentcore",
  bedrockagentcorecontrol: "bedrock-agentcore-control",
  bedrockdataautomation: "bedrock-data-automation",
  bedrockdataautomationruntime: "bedrock-data-automation-runtime",
  bedrockruntime: "bedrock-runtime",
  chimesdkidentity: "chime-sdk-identity",
  chimesdkmediapipelines: "chime-sdk-media-pipelines",
  chimesdkmeetings: "chime-sdk-meetings",
  chimesdkmessaging: "chime-sdk-messaging",
  chimesdkvoice: "chime-sdk-voice",
  cloudhsmv2: "cloudhsm-v2",
  cloudsearchdomain: "cloudsearch-domain",
  cloudtraildata: "cloudtrail-data",
  cloudwatchevents: "cloudwatch-events",
  cloudwatchlogs: "cloudwatch-logs",
  codegurureviewer: "codeguru-reviewer",
  codegurusecurity: "codeguru-security",
  codestarconnections: "codestar-connections",
  codestarnotifications: "codestar-notifications",
  cognitoidentity: "cognito-identity",
  cognitoidentityprovider: "cognito-identity-provider",
  cognitosync: "cognito-sync",
  computeoptimizer: "compute-optimizer",
  configservice: "config-service",
  connectcontactlens: "connect-contact-lens",
  costandusagereportservice: "cost-and-usage-report-service",
  costexplorer: "cost-explorer",
  costoptimizationhub: "cost-optimization-hub",
  customerprofiles: "customer-profiles",
  datapipeline: "data-pipeline",
  databasemigrationservice: "database-migration-service",
  devicefarm: "device-farm",
  devopsguru: "devops-guru",
  directconnect: "direct-connect",
  directoryservice: "directory-service",
  directoryservicedata: "directory-service-data",
  docdbclastic: "docdb-elastic",
  dynamodbstreams: "dynamodb-streams",
  ec2instanceconnect: "ec2-instance-connect",
  ecrpublic: "ecr-public",
  eksauth: "eks-auth",
  elasticbeanstalk: "elastic-beanstalk",
  elasticloadbalancing: "elastic-load-balancing",
  elasticloadbalancingv2: "elastic-load-balancing-v2",
  elastictranscoder: "elastic-transcoder",
  elasticsearchservice: "elasticsearch-service",
  emrcontainers: "emr-containers",
  emrserverless: "emr-serverless",
  finspacedata: "finspace-data",
  gameliftstreams: "gameliftstreams",
  geomaps: "geo-maps",
  geoplaces: "geo-places",
  georoutes: "geo-routes",
  globalaccelerator: "global-accelerator",
  inspectorscan: "inspector-scan",
  iotdataplane: "iot-data-plane",
  ioteventsdata: "iot-events-data",
  iotevents: "iot-events",
  iotjobsdataplane: "iot-jobs-data-plane",
  iotmanagedintegrations: "iot-managed-integrations",
  iotwireless: "iot-wireless",
  iotthingsgraph: "iot-things-graph",
  ivsrealtime: "ivs-realtime",
  kendraranking: "kendra-ranking",
  keyspacesstreams: "keyspacesstreams",
  kinesisanalytics: "kinesis-analytics",
  kinesisanalyticsv2: "kinesis-analytics-v2",
  kinesisvideo: "kinesis-video",
  kinesisvideomedia: "kinesis-video-media",
  kinesisvideosignaling: "kinesis-video-signaling",
  kinesisvideoarchivedmedia: "kinesis-video-archived-media",
  kinesisvideowebrtcstorage: "kinesis-video-webrtc-storage",
  launchwizard: "launch-wizard",
  lexmodelbuildingservice: "lex-model-building-service",
  lexmodelsv2: "lex-models-v2",
  lexruntimeservice: "lex-runtime-service",
  lexruntimev2: "lex-runtime-v2",
  licensemanager: "license-manager",
  licensemanagerlinuxsubscriptions: "license-manager-linux-subscriptions",
  licensemanagerusersubscriptions: "license-manager-user-subscriptions",
  lookoutequipment: "lookoutequipment",
  lookoutmetrics: "lookoutmetrics",
  lookoutvision: "lookoutvision",
  machinelearning: "machine-learning",
  managedblockchain: "managedblockchain",
  managedblockchainquery: "managedblockchain-query",
  marketplaceagreement: "marketplace-agreement",
  marketplacecatalog: "marketplace-catalog",
  marketplacecommerceanalytics: "marketplace-commerce-analytics",
  marketplacedeployment: "marketplace-deployment",
  marketplaceentitlementservice: "marketplace-entitlement-service",
  marketplacemetering: "marketplace-metering",
  marketplacereporting: "marketplace-reporting",
  mediapackagevod: "mediapackage-vod",
  mediastoredata: "mediastore-data",
  medicalimaging: "medical-imaging",
  migrationhub: "migration-hub",
  migrationhubconfig: "migrationhub-config",
  migrationhuborchestrator: "migrationhuborchestrator",
  migrationhubrefactorspaces: "migration-hub-refactor-spaces",
  migrationhubstrategy: "migrationhubstrategy",
  neptunegraph: "neptune-graph",
  networkfirewall: "network-firewall",
  observabilityadmin: "observabilityadmin",
  partnercentralselling: "partnercentral-selling",
  paymentcryptography: "payment-cryptography",
  paymentcryptographydata: "payment-cryptography-data",
  pcaconnectorad: "pca-connector-ad",
  pcaconnectorscep: "pca-connector-scep",
  personalizeevents: "personalize-events",
  personalizeruntime: "personalize-runtime",
  pinpointemail: "pinpoint-email",
  pinpointsmsvoice: "pinpoint-sms-voice",
  pinpointsmsvoicev2: "pinpoint-sms-voice-v2",
  qldbsession: "qldb-session",
  rdsdata: "rds-data",
  redshiftdata: "redshift-data",
  redshiftserverless: "redshift-serverless",
  resourceexplorer2: "resource-explorer-2",
  resourcegroupstaggingapi: "resource-groups-tagging-api",
  resourcegroups: "resource-groups",
  route53: "route-53",
  route53domains: "route-53-domains",
  route53recoverycontrolconfig: "route53-recovery-control-config",
  route53recoverycluster: "route53-recovery-cluster",
  route53recoveryreadiness: "route53-recovery-readiness",
  s3control: "s3-control",
  sagemakerfeaturestoreruntime: "sagemaker-featurestore-runtime",
  sagemakera2iruntime: "sagemaker-a2i-runtime",
  sagemakeredge: "sagemaker-edge",
  sagemakergeospatial: "sagemaker-geospatial",
  sagemakermetrics: "sagemaker-metrics",
  sagemakerruntime: "sagemaker-runtime",
  securityir: "security-ir",
  secretsmanager: "secrets-manager",
  servicecatalog: "service-catalog",
  servicecatalogappregistry: "service-catalog-appregistry",
  servicequotas: "service-quotas",
  servicediscovery: "servicediscovery",
  snowdevicemanagement: "snow-device-management",
  ssmcontacts: "ssm-contacts",
  ssmguiconnect: "ssm-guiconnect",
  ssmincidents: "ssm-incidents",
  ssmquicksetup: "ssm-quicksetup",
  ssmsap: "ssm-sap",
  ssoadmin: "sso-admin",
  ssooidc: "sso-oidc",
  storagegateway: "storage-gateway",
  supportapp: "support-app",
  timestreamquery: "timestream-query",
  timestreamwrite: "timestream-write",
  timestreamInfluxdb: "timestream-influxdb",
  transcribestreaming: "transcribe-streaming",
  trustedadvisor: "trustedadvisor",
  verifiedpermissions: "verifiedpermissions",
  voiceid: "voice-id",
  vpclattice: "vpc-lattice",
  wafregional: "waf-regional",
  workspacesweb: "workspaces-web",
  workspacesinstances: "workspaces-instances",
  workspacesthinclient: "workspaces-thin-client",
} as const;

/**
 * Loads service metadata dynamically from individual service directories
 * @param serviceName The service name (can be in any case)
 * @returns Promise resolving to ServiceMetadata
 * @throws Error if metadata cannot be loaded
 */
export async function loadServiceMetadata(
  serviceName: string,
): Promise<ServiceMetadata> {
  const normalized = serviceName.toLowerCase();

  // Check cache first
  if (metadataCache.has(normalized)) {
    return metadataCache.get(normalized)!;
  }

  // Map service name to directory path
  const servicePath = servicePathMap[normalized] ?? normalized;

  try {
    const module = await import(`./services/${servicePath}/index.ts`);
    if (!module.metadata) {
      throw new Error(`No metadata exported from service: ${serviceName}`);
    }

    // Cache the metadata
    metadataCache.set(normalized, module.metadata);
    return module.metadata;
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("No metadata exported")
    ) {
      throw error; // Re-throw metadata-specific errors
    }
    throw new Error(
      `Failed to load metadata for service: ${serviceName} (${error})`,
    );
  }
}

/**
 * Clears the metadata cache (primarily for testing)
 */
export function clearMetadataCache(): void {
  metadataCache.clear();
}
