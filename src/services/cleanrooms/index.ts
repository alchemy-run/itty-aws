import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { CleanRooms as _CleanRooms } from "./types.ts";

// Service metadata
const metadata = {
  sdkId: "CleanRooms",
  version: "2022-02-17",
  protocol: "restJson1",
  sigV4ServiceName: "cleanrooms",
  operations: {
    ListTagsForResource: "GET /tags/{resourceArn}",
    TagResource: "POST /tags/{resourceArn}",
    UntagResource: "DELETE /tags/{resourceArn}",
    BatchGetCollaborationAnalysisTemplate:
      "POST /collaborations/{collaborationIdentifier}/batch-analysistemplates",
    BatchGetSchema:
      "POST /collaborations/{collaborationIdentifier}/batch-schema",
    BatchGetSchemaAnalysisRule:
      "POST /collaborations/{collaborationIdentifier}/batch-schema-analysis-rule",
    CreateAnalysisTemplate:
      "POST /memberships/{membershipIdentifier}/analysistemplates",
    CreateCollaboration: "POST /collaborations",
    CreateConfiguredAudienceModelAssociation:
      "POST /memberships/{membershipIdentifier}/configuredaudiencemodelassociations",
    CreateConfiguredTable: "POST /configuredTables",
    CreateConfiguredTableAnalysisRule:
      "POST /configuredTables/{configuredTableIdentifier}/analysisRule",
    CreateConfiguredTableAssociation:
      "POST /memberships/{membershipIdentifier}/configuredTableAssociations",
    CreateConfiguredTableAssociationAnalysisRule:
      "POST /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule",
    CreateIdMappingTable:
      "POST /memberships/{membershipIdentifier}/idmappingtables",
    CreateIdNamespaceAssociation:
      "POST /memberships/{membershipIdentifier}/idnamespaceassociations",
    CreateMembership: "POST /memberships",
    CreatePrivacyBudgetTemplate:
      "POST /memberships/{membershipIdentifier}/privacybudgettemplates",
    DeleteAnalysisTemplate:
      "DELETE /memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}",
    DeleteCollaboration: "DELETE /collaborations/{collaborationIdentifier}",
    DeleteConfiguredAudienceModelAssociation:
      "DELETE /memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
    DeleteConfiguredTable:
      "DELETE /configuredTables/{configuredTableIdentifier}",
    DeleteConfiguredTableAnalysisRule:
      "DELETE /configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}",
    DeleteConfiguredTableAssociation:
      "DELETE /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
    DeleteConfiguredTableAssociationAnalysisRule:
      "DELETE /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
    DeleteIdMappingTable:
      "DELETE /memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}",
    DeleteIdNamespaceAssociation:
      "DELETE /memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
    DeleteMember:
      "DELETE /collaborations/{collaborationIdentifier}/member/{accountId}",
    DeleteMembership: "DELETE /memberships/{membershipIdentifier}",
    DeletePrivacyBudgetTemplate:
      "DELETE /memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
    GetAnalysisTemplate:
      "GET /memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}",
    GetCollaboration: "GET /collaborations/{collaborationIdentifier}",
    GetCollaborationAnalysisTemplate:
      "GET /collaborations/{collaborationIdentifier}/analysistemplates/{analysisTemplateArn}",
    GetCollaborationConfiguredAudienceModelAssociation:
      "GET /collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
    GetCollaborationIdNamespaceAssociation:
      "GET /collaborations/{collaborationIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
    GetCollaborationPrivacyBudgetTemplate:
      "GET /collaborations/{collaborationIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
    GetConfiguredAudienceModelAssociation:
      "GET /memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
    GetConfiguredTable: "GET /configuredTables/{configuredTableIdentifier}",
    GetConfiguredTableAnalysisRule:
      "GET /configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}",
    GetConfiguredTableAssociation:
      "GET /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
    GetConfiguredTableAssociationAnalysisRule:
      "GET /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
    GetIdMappingTable:
      "GET /memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}",
    GetIdNamespaceAssociation:
      "GET /memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
    GetMembership: "GET /memberships/{membershipIdentifier}",
    GetPrivacyBudgetTemplate:
      "GET /memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
    GetProtectedJob:
      "GET /memberships/{membershipIdentifier}/protectedJobs/{protectedJobIdentifier}",
    GetProtectedQuery:
      "GET /memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}",
    GetSchema: "GET /collaborations/{collaborationIdentifier}/schemas/{name}",
    GetSchemaAnalysisRule:
      "GET /collaborations/{collaborationIdentifier}/schemas/{name}/analysisRule/{type}",
    ListAnalysisTemplates:
      "GET /memberships/{membershipIdentifier}/analysistemplates",
    ListCollaborationAnalysisTemplates:
      "GET /collaborations/{collaborationIdentifier}/analysistemplates",
    ListCollaborationConfiguredAudienceModelAssociations:
      "GET /collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations",
    ListCollaborationIdNamespaceAssociations:
      "GET /collaborations/{collaborationIdentifier}/idnamespaceassociations",
    ListCollaborationPrivacyBudgetTemplates:
      "GET /collaborations/{collaborationIdentifier}/privacybudgettemplates",
    ListCollaborationPrivacyBudgets:
      "GET /collaborations/{collaborationIdentifier}/privacybudgets",
    ListCollaborations: "GET /collaborations",
    ListConfiguredAudienceModelAssociations:
      "GET /memberships/{membershipIdentifier}/configuredaudiencemodelassociations",
    ListConfiguredTableAssociations:
      "GET /memberships/{membershipIdentifier}/configuredTableAssociations",
    ListConfiguredTables: "GET /configuredTables",
    ListIdMappingTables:
      "GET /memberships/{membershipIdentifier}/idmappingtables",
    ListIdNamespaceAssociations:
      "GET /memberships/{membershipIdentifier}/idnamespaceassociations",
    ListMembers: "GET /collaborations/{collaborationIdentifier}/members",
    ListMemberships: "GET /memberships",
    ListPrivacyBudgetTemplates:
      "GET /memberships/{membershipIdentifier}/privacybudgettemplates",
    ListPrivacyBudgets:
      "GET /memberships/{membershipIdentifier}/privacybudgets",
    ListProtectedJobs: "GET /memberships/{membershipIdentifier}/protectedJobs",
    ListProtectedQueries:
      "GET /memberships/{membershipIdentifier}/protectedQueries",
    ListSchemas: "GET /collaborations/{collaborationIdentifier}/schemas",
    PopulateIdMappingTable:
      "POST /memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}/populate",
    PreviewPrivacyImpact:
      "POST /memberships/{membershipIdentifier}/previewprivacyimpact",
    StartProtectedJob: "POST /memberships/{membershipIdentifier}/protectedJobs",
    StartProtectedQuery:
      "POST /memberships/{membershipIdentifier}/protectedQueries",
    UpdateAnalysisTemplate:
      "PATCH /memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}",
    UpdateCollaboration: "PATCH /collaborations/{collaborationIdentifier}",
    UpdateConfiguredAudienceModelAssociation:
      "PATCH /memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}",
    UpdateConfiguredTable:
      "PATCH /configuredTables/{configuredTableIdentifier}",
    UpdateConfiguredTableAnalysisRule:
      "PATCH /configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}",
    UpdateConfiguredTableAssociation:
      "PATCH /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
    UpdateConfiguredTableAssociationAnalysisRule:
      "PATCH /memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}",
    UpdateIdMappingTable:
      "PATCH /memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}",
    UpdateIdNamespaceAssociation:
      "PATCH /memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
    UpdateMembership: "PATCH /memberships/{membershipIdentifier}",
    UpdatePrivacyBudgetTemplate:
      "PATCH /memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}",
    UpdateProtectedJob:
      "PATCH /memberships/{membershipIdentifier}/protectedJobs/{protectedJobIdentifier}",
    UpdateProtectedQuery:
      "PATCH /memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}",
  },
} as const satisfies ServiceMetadata;

// Re-export all types from types.ts for backward compatibility
export type * from "./types.ts";

export const CleanRooms = class extends AWSServiceClient {
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
} as unknown as typeof _CleanRooms;
