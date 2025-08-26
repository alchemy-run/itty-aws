import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { EKS as _EKS } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "EKS",
  version: "2017-11-01",
  protocol: "restJson1",
  sigV4ServiceName: "eks",
  endpointPrefix: "eks",
  operations: {
    AssociateAccessPolicy:
      "POST /clusters/{clusterName}/access-entries/{principalArn}/access-policies",
    AssociateEncryptionConfig:
      "POST /clusters/{clusterName}/encryption-config/associate",
    AssociateIdentityProviderConfig:
      "POST /clusters/{clusterName}/identity-provider-configs/associate",
    CreateAccessEntry: "POST /clusters/{clusterName}/access-entries",
    CreateAddon: "POST /clusters/{clusterName}/addons",
    CreateCluster: "POST /clusters",
    CreateEksAnywhereSubscription: "POST /eks-anywhere-subscriptions",
    CreateFargateProfile: "POST /clusters/{clusterName}/fargate-profiles",
    CreateNodegroup: "POST /clusters/{clusterName}/node-groups",
    CreatePodIdentityAssociation:
      "POST /clusters/{clusterName}/pod-identity-associations",
    DeleteAccessEntry:
      "DELETE /clusters/{clusterName}/access-entries/{principalArn}",
    DeleteAddon: "DELETE /clusters/{clusterName}/addons/{addonName}",
    DeleteCluster: "DELETE /clusters/{name}",
    DeleteEksAnywhereSubscription: "DELETE /eks-anywhere-subscriptions/{id}",
    DeleteFargateProfile:
      "DELETE /clusters/{clusterName}/fargate-profiles/{fargateProfileName}",
    DeleteNodegroup:
      "DELETE /clusters/{clusterName}/node-groups/{nodegroupName}",
    DeletePodIdentityAssociation:
      "DELETE /clusters/{clusterName}/pod-identity-associations/{associationId}",
    DeregisterCluster: "DELETE /cluster-registrations/{name}",
    DescribeAccessEntry:
      "GET /clusters/{clusterName}/access-entries/{principalArn}",
    DescribeAddon: "GET /clusters/{clusterName}/addons/{addonName}",
    DescribeAddonConfiguration: "GET /addons/configuration-schemas",
    DescribeAddonVersions: "GET /addons/supported-versions",
    DescribeCluster: "GET /clusters/{name}",
    DescribeClusterVersions: "GET /cluster-versions",
    DescribeEksAnywhereSubscription: "GET /eks-anywhere-subscriptions/{id}",
    DescribeFargateProfile:
      "GET /clusters/{clusterName}/fargate-profiles/{fargateProfileName}",
    DescribeIdentityProviderConfig:
      "POST /clusters/{clusterName}/identity-provider-configs/describe",
    DescribeInsight: "GET /clusters/{clusterName}/insights/{id}",
    DescribeNodegroup:
      "GET /clusters/{clusterName}/node-groups/{nodegroupName}",
    DescribePodIdentityAssociation:
      "GET /clusters/{clusterName}/pod-identity-associations/{associationId}",
    DescribeUpdate: "GET /clusters/{name}/updates/{updateId}",
    DisassociateAccessPolicy:
      "DELETE /clusters/{clusterName}/access-entries/{principalArn}/access-policies/{policyArn}",
    DisassociateIdentityProviderConfig:
      "POST /clusters/{clusterName}/identity-provider-configs/disassociate",
    ListAccessEntries: "GET /clusters/{clusterName}/access-entries",
    ListAccessPolicies: "GET /access-policies",
    ListAddons: "GET /clusters/{clusterName}/addons",
    ListAssociatedAccessPolicies:
      "GET /clusters/{clusterName}/access-entries/{principalArn}/access-policies",
    ListClusters: "GET /clusters",
    ListEksAnywhereSubscriptions: "GET /eks-anywhere-subscriptions",
    ListFargateProfiles: "GET /clusters/{clusterName}/fargate-profiles",
    ListIdentityProviderConfigs:
      "GET /clusters/{clusterName}/identity-provider-configs",
    ListInsights: "POST /clusters/{clusterName}/insights",
    ListNodegroups: "GET /clusters/{clusterName}/node-groups",
    ListPodIdentityAssociations:
      "GET /clusters/{clusterName}/pod-identity-associations",
    ListTagsForResource: "GET /tags/{resourceArn}",
    ListUpdates: "GET /clusters/{name}/updates",
    RegisterCluster: "POST /cluster-registrations",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    UpdateAccessEntry:
      "POST /clusters/{clusterName}/access-entries/{principalArn}",
    UpdateAddon: "POST /clusters/{clusterName}/addons/{addonName}/update",
    UpdateClusterConfig: "POST /clusters/{name}/update-config",
    UpdateClusterVersion: "POST /clusters/{name}/updates",
    UpdateEksAnywhereSubscription: "POST /eks-anywhere-subscriptions/{id}",
    UpdateNodegroupConfig:
      "POST /clusters/{clusterName}/node-groups/{nodegroupName}/update-config",
    UpdateNodegroupVersion:
      "POST /clusters/{clusterName}/node-groups/{nodegroupName}/update-version",
    UpdatePodIdentityAssociation:
      "POST /clusters/{clusterName}/pod-identity-associations/{associationId}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const EKS = class extends AWSServiceClient {
  constructor(config: AWSClientConfig) {
    config = {
      ...config,
      protocolHandler: new RestJson1Handler(),
    };
    super(config);
    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage
    return createServiceProxy(metadata, this.config);
  }
} as unknown as typeof _EKS;
