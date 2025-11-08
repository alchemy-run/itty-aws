import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";
import { AWSServiceClient, createServiceProxy } from "../../client.ts";
import { RestJson1Handler } from "../../protocols/rest-json-1.ts";
import type { QuickSight as _QuickSightClient } from "./types.ts";

export * from "./types.ts";

export {ExpiredTokenException, IncompleteSignature, InternalFailure, MalformedHttpRequestException, NotAuthorized, OptInRequired, RequestAbortedException, RequestEntityTooLargeException, RequestExpired, RequestTimeoutException, ServiceUnavailable, UnrecognizedClientException, UnknownOperationException, ValidationError, ValidationException, type CommonAwsError} from "../../error.ts";

// Service metadata
const metadata = {
  sdkId: "QuickSight",
  version: "2018-04-01",
  protocol: "restJson1",
  sigV4ServiceName: "quicksight",
  endpointPrefix: "quicksight",
  operations: {
    "BatchCreateTopicReviewedAnswer": {
      http: "POST /accounts/{AwsAccountId}/topics/{TopicId}/batch-create-reviewed-answers",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "BatchDeleteTopicReviewedAnswer": {
      http: "POST /accounts/{AwsAccountId}/topics/{TopicId}/batch-delete-reviewed-answers",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CancelIngestion": {
      http: "DELETE /accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateAccountCustomization": {
      http: "POST /accounts/{AwsAccountId}/customizations",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateAccountSubscription": {
      http: "POST /account/{AwsAccountId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateAnalysis": {
      http: "POST /accounts/{AwsAccountId}/analyses/{AnalysisId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateBrand": "POST /accounts/{AwsAccountId}/brands/{BrandId}",
    "CreateCustomPermissions": "POST /accounts/{AwsAccountId}/custom-permissions",
    "CreateDashboard": {
      http: "POST /accounts/{AwsAccountId}/dashboards/{DashboardId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateDataSet": {
      http: "POST /accounts/{AwsAccountId}/data-sets",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateDataSource": {
      http: "POST /accounts/{AwsAccountId}/data-sources",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateFolder": {
      http: "POST /accounts/{AwsAccountId}/folders/{FolderId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateFolderMembership": "PUT /accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}",
    "CreateGroup": {
      http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/groups",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateGroupMembership": {
      http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateIAMPolicyAssignment": {
      http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateIngestion": {
      http: "PUT /accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateNamespace": {
      http: "POST /accounts/{AwsAccountId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateRefreshSchedule": {
      http: "POST /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateRoleMembership": {
      http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateTemplate": {
      http: "POST /accounts/{AwsAccountId}/templates/{TemplateId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateTemplateAlias": {
      http: "POST /accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateTheme": {
      http: "POST /accounts/{AwsAccountId}/themes/{ThemeId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateThemeAlias": {
      http: "POST /accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateTopic": {
      http: "POST /accounts/{AwsAccountId}/topics",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateTopicRefreshSchedule": {
      http: "POST /accounts/{AwsAccountId}/topics/{TopicId}/schedules",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "CreateVPCConnection": {
      http: "POST /accounts/{AwsAccountId}/vpc-connections",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteAccountCustomization": {
      http: "DELETE /accounts/{AwsAccountId}/customizations",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteAccountSubscription": {
      http: "DELETE /account/{AwsAccountId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteAnalysis": {
      http: "DELETE /accounts/{AwsAccountId}/analyses/{AnalysisId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteBrand": "DELETE /accounts/{AwsAccountId}/brands/{BrandId}",
    "DeleteBrandAssignment": "DELETE /accounts/{AwsAccountId}/brandassignments",
    "DeleteCustomPermissions": "DELETE /accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}",
    "DeleteDashboard": {
      http: "DELETE /accounts/{AwsAccountId}/dashboards/{DashboardId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteDataSet": {
      http: "DELETE /accounts/{AwsAccountId}/data-sets/{DataSetId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteDataSetRefreshProperties": {
      http: "DELETE /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteDataSource": {
      http: "DELETE /accounts/{AwsAccountId}/data-sources/{DataSourceId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteDefaultQBusinessApplication": {
      http: "DELETE /accounts/{AwsAccountId}/default-qbusiness-application",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteFolder": {
      http: "DELETE /accounts/{AwsAccountId}/folders/{FolderId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteFolderMembership": "DELETE /accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}",
    "DeleteGroup": {
      http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteGroupMembership": {
      http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteIAMPolicyAssignment": {
      http: "DELETE /accounts/{AwsAccountId}/namespace/{Namespace}/iam-policy-assignments/{AssignmentName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteIdentityPropagationConfig": {
      http: "DELETE /accounts/{AwsAccountId}/identity-propagation-config/{Service}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteNamespace": {
      http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteRefreshSchedule": {
      http: "DELETE /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteRoleCustomPermission": "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission",
    "DeleteRoleMembership": {
      http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteTemplate": {
      http: "DELETE /accounts/{AwsAccountId}/templates/{TemplateId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteTemplateAlias": {
      http: "DELETE /accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteTheme": {
      http: "DELETE /accounts/{AwsAccountId}/themes/{ThemeId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteThemeAlias": {
      http: "DELETE /accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteTopic": {
      http: "DELETE /accounts/{AwsAccountId}/topics/{TopicId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteTopicRefreshSchedule": {
      http: "DELETE /accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteUser": {
      http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteUserByPrincipalId": {
      http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteUserCustomPermission": {
      http: "DELETE /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/custom-permission",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DeleteVPCConnection": {
      http: "DELETE /accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeAccountCustomization": {
      http: "GET /accounts/{AwsAccountId}/customizations",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeAccountSettings": {
      http: "GET /accounts/{AwsAccountId}/settings",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeAccountSubscription": {
      http: "GET /account/{AwsAccountId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeAnalysis": {
      http: "GET /accounts/{AwsAccountId}/analyses/{AnalysisId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeAnalysisDefinition": {
      http: "GET /accounts/{AwsAccountId}/analyses/{AnalysisId}/definition",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeAnalysisPermissions": {
      http: "GET /accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeAssetBundleExportJob": {
      http: "GET /accounts/{AwsAccountId}/asset-bundle-export-jobs/{AssetBundleExportJobId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeAssetBundleImportJob": {
      http: "GET /accounts/{AwsAccountId}/asset-bundle-import-jobs/{AssetBundleImportJobId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeBrand": "GET /accounts/{AwsAccountId}/brands/{BrandId}",
    "DescribeBrandAssignment": "GET /accounts/{AwsAccountId}/brandassignments",
    "DescribeBrandPublishedVersion": "GET /accounts/{AwsAccountId}/brands/{BrandId}/publishedversion",
    "DescribeCustomPermissions": "GET /accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}",
    "DescribeDashboard": {
      http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDashboardDefinition": {
      http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/definition",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDashboardPermissions": {
      http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDashboardSnapshotJob": "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}",
    "DescribeDashboardSnapshotJobResult": {
      http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}/result",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDashboardsQAConfiguration": {
      http: "GET /accounts/{AwsAccountId}/dashboards-qa-configuration",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDataSet": {
      http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDataSetPermissions": {
      http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDataSetRefreshProperties": {
      http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDataSource": {
      http: "GET /accounts/{AwsAccountId}/data-sources/{DataSourceId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDataSourcePermissions": {
      http: "GET /accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeDefaultQBusinessApplication": {
      http: "GET /accounts/{AwsAccountId}/default-qbusiness-application",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeFolder": {
      http: "GET /accounts/{AwsAccountId}/folders/{FolderId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeFolderPermissions": {
      http: "GET /accounts/{AwsAccountId}/folders/{FolderId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeFolderResolvedPermissions": {
      http: "GET /accounts/{AwsAccountId}/folders/{FolderId}/resolved-permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeGroup": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeGroupMembership": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeIAMPolicyAssignment": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeIngestion": {
      http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeIpRestriction": {
      http: "GET /accounts/{AwsAccountId}/ip-restriction",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeKeyRegistration": "GET /accounts/{AwsAccountId}/key-registration",
    "DescribeNamespace": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeQPersonalizationConfiguration": {
      http: "GET /accounts/{AwsAccountId}/q-personalization-configuration",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeQuickSightQSearchConfiguration": {
      http: "GET /accounts/{AwsAccountId}/quicksight-q-search-configuration",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeRefreshSchedule": {
      http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeRoleCustomPermission": "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission",
    "DescribeTemplate": {
      http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeTemplateAlias": {
      http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeTemplateDefinition": {
      http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/definition",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeTemplatePermissions": {
      http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeTheme": {
      http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeThemeAlias": {
      http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeThemePermissions": {
      http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeTopic": {
      http: "GET /accounts/{AwsAccountId}/topics/{TopicId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeTopicPermissions": {
      http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeTopicRefresh": {
      http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/refresh/{RefreshId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeTopicRefreshSchedule": {
      http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeUser": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "DescribeVPCConnection": "GET /accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}",
    "GenerateEmbedUrlForAnonymousUser": {
      http: "POST /accounts/{AwsAccountId}/embed-url/anonymous-user",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "GenerateEmbedUrlForRegisteredUser": {
      http: "POST /accounts/{AwsAccountId}/embed-url/registered-user",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "GenerateEmbedUrlForRegisteredUserWithIdentity": {
      http: "POST /accounts/{AwsAccountId}/embed-url/registered-user-with-identity",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "GetDashboardEmbedUrl": {
      http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "GetSessionEmbedUrl": {
      http: "GET /accounts/{AwsAccountId}/session-embed-url",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListAnalyses": {
      http: "GET /accounts/{AwsAccountId}/analyses",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListAssetBundleExportJobs": {
      http: "GET /accounts/{AwsAccountId}/asset-bundle-export-jobs",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListAssetBundleImportJobs": {
      http: "GET /accounts/{AwsAccountId}/asset-bundle-import-jobs",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListBrands": "GET /accounts/{AwsAccountId}/brands",
    "ListCustomPermissions": {
      http: "GET /accounts/{AwsAccountId}/custom-permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListDashboards": {
      http: "GET /accounts/{AwsAccountId}/dashboards",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListDashboardVersions": {
      http: "GET /accounts/{AwsAccountId}/dashboards/{DashboardId}/versions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListDataSets": {
      http: "GET /accounts/{AwsAccountId}/data-sets",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListDataSources": {
      http: "GET /accounts/{AwsAccountId}/data-sources",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListFolderMembers": {
      http: "GET /accounts/{AwsAccountId}/folders/{FolderId}/members",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListFolders": {
      http: "GET /accounts/{AwsAccountId}/folders",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListFoldersForResource": {
      http: "GET /accounts/{AwsAccountId}/resource/{ResourceArn}/folders",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListGroupMemberships": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListGroups": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/groups",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListIAMPolicyAssignments": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/v2/iam-policy-assignments",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListIAMPolicyAssignmentsForUser": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/iam-policy-assignments",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListIdentityPropagationConfigs": {
      http: "GET /accounts/{AwsAccountId}/identity-propagation-config",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListIngestions": {
      http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListNamespaces": {
      http: "GET /accounts/{AwsAccountId}/namespaces",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListRefreshSchedules": {
      http: "GET /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListRoleMemberships": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListTagsForResource": {
      http: "GET /resources/{ResourceArn}/tags",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListTemplateAliases": {
      http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/aliases",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListTemplates": {
      http: "GET /accounts/{AwsAccountId}/templates",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListTemplateVersions": {
      http: "GET /accounts/{AwsAccountId}/templates/{TemplateId}/versions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListThemeAliases": {
      http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}/aliases",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListThemes": {
      http: "GET /accounts/{AwsAccountId}/themes",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListThemeVersions": {
      http: "GET /accounts/{AwsAccountId}/themes/{ThemeId}/versions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListTopicRefreshSchedules": {
      http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/schedules",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListTopicReviewedAnswers": {
      http: "GET /accounts/{AwsAccountId}/topics/{TopicId}/reviewed-answers",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListTopics": {
      http: "GET /accounts/{AwsAccountId}/topics",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListUserGroups": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListUsers": {
      http: "GET /accounts/{AwsAccountId}/namespaces/{Namespace}/users",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "ListVPCConnections": {
      http: "GET /accounts/{AwsAccountId}/vpc-connections",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "PredictQAResults": {
      http: "POST /accounts/{AwsAccountId}/qa/predict",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "PutDataSetRefreshProperties": {
      http: "PUT /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "RegisterUser": {
      http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/users",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "RestoreAnalysis": {
      http: "POST /accounts/{AwsAccountId}/restore/analyses/{AnalysisId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "SearchAnalyses": {
      http: "POST /accounts/{AwsAccountId}/search/analyses",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "SearchDashboards": {
      http: "POST /accounts/{AwsAccountId}/search/dashboards",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "SearchDataSets": {
      http: "POST /accounts/{AwsAccountId}/search/data-sets",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "SearchDataSources": {
      http: "POST /accounts/{AwsAccountId}/search/data-sources",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "SearchFolders": {
      http: "POST /accounts/{AwsAccountId}/search/folders",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "SearchGroups": {
      http: "POST /accounts/{AwsAccountId}/namespaces/{Namespace}/groups-search",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "SearchTopics": {
      http: "POST /accounts/{AwsAccountId}/search/topics",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "StartAssetBundleExportJob": {
      http: "POST /accounts/{AwsAccountId}/asset-bundle-export-jobs/export",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "StartAssetBundleImportJob": {
      http: "POST /accounts/{AwsAccountId}/asset-bundle-import-jobs/import",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "StartDashboardSnapshotJob": {
      http: "POST /accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "StartDashboardSnapshotJobSchedule": {
      http: "POST /accounts/{AwsAccountId}/dashboards/{DashboardId}/schedules/{ScheduleId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "TagResource": {
      http: "POST /resources/{ResourceArn}/tags",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UntagResource": {
      http: "DELETE /resources/{ResourceArn}/tags",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateAccountCustomization": {
      http: "PUT /accounts/{AwsAccountId}/customizations",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateAccountSettings": {
      http: "PUT /accounts/{AwsAccountId}/settings",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateAnalysis": {
      http: "PUT /accounts/{AwsAccountId}/analyses/{AnalysisId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateAnalysisPermissions": {
      http: "PUT /accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateApplicationWithTokenExchangeGrant": {
      http: "PUT /accounts/{AwsAccountId}/application-with-token-exchange-grant",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateBrand": "PUT /accounts/{AwsAccountId}/brands/{BrandId}",
    "UpdateBrandAssignment": "PUT /accounts/{AwsAccountId}/brandassignments",
    "UpdateBrandPublishedVersion": "PUT /accounts/{AwsAccountId}/brands/{BrandId}/publishedversion",
    "UpdateCustomPermissions": "PUT /accounts/{AwsAccountId}/custom-permissions/{CustomPermissionsName}",
    "UpdateDashboard": "PUT /accounts/{AwsAccountId}/dashboards/{DashboardId}",
    "UpdateDashboardLinks": {
      http: "PUT /accounts/{AwsAccountId}/dashboards/{DashboardId}/linked-entities",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateDashboardPermissions": {
      http: "PUT /accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateDashboardPublishedVersion": {
      http: "PUT /accounts/{AwsAccountId}/dashboards/{DashboardId}/versions/{VersionNumber}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateDashboardsQAConfiguration": {
      http: "PUT /accounts/{AwsAccountId}/dashboards-qa-configuration",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateDataSet": {
      http: "PUT /accounts/{AwsAccountId}/data-sets/{DataSetId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateDataSetPermissions": {
      http: "POST /accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateDataSource": {
      http: "PUT /accounts/{AwsAccountId}/data-sources/{DataSourceId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateDataSourcePermissions": {
      http: "POST /accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateDefaultQBusinessApplication": {
      http: "PUT /accounts/{AwsAccountId}/default-qbusiness-application",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateFolder": {
      http: "PUT /accounts/{AwsAccountId}/folders/{FolderId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateFolderPermissions": "PUT /accounts/{AwsAccountId}/folders/{FolderId}/permissions",
    "UpdateGroup": {
      http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateIAMPolicyAssignment": {
      http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateIdentityPropagationConfig": {
      http: "POST /accounts/{AwsAccountId}/identity-propagation-config/{Service}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateIpRestriction": {
      http: "POST /accounts/{AwsAccountId}/ip-restriction",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateKeyRegistration": "POST /accounts/{AwsAccountId}/key-registration",
    "UpdatePublicSharingSettings": {
      http: "PUT /accounts/{AwsAccountId}/public-sharing-settings",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateQPersonalizationConfiguration": {
      http: "PUT /accounts/{AwsAccountId}/q-personalization-configuration",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateQuickSightQSearchConfiguration": {
      http: "PUT /accounts/{AwsAccountId}/quicksight-q-search-configuration",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateRefreshSchedule": {
      http: "PUT /accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateRoleCustomPermission": "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission",
    "UpdateSPICECapacityConfiguration": {
      http: "POST /accounts/{AwsAccountId}/spice-capacity-configuration",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateTemplate": {
      http: "PUT /accounts/{AwsAccountId}/templates/{TemplateId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateTemplateAlias": {
      http: "PUT /accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateTemplatePermissions": {
      http: "PUT /accounts/{AwsAccountId}/templates/{TemplateId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateTheme": {
      http: "PUT /accounts/{AwsAccountId}/themes/{ThemeId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateThemeAlias": {
      http: "PUT /accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateThemePermissions": {
      http: "PUT /accounts/{AwsAccountId}/themes/{ThemeId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateTopic": {
      http: "PUT /accounts/{AwsAccountId}/topics/{TopicId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateTopicPermissions": {
      http: "PUT /accounts/{AwsAccountId}/topics/{TopicId}/permissions",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateTopicRefreshSchedule": {
      http: "PUT /accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateUser": {
      http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateUserCustomPermission": {
      http: "PUT /accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/custom-permission",
      traits: {
        "Status": "httpResponseCode",
      },
    },
    "UpdateVPCConnection": {
      http: "PUT /accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}",
      traits: {
        "Status": "httpResponseCode",
      },
    },
  },
} as const satisfies ServiceMetadata;

export type _QuickSight = _QuickSightClient;
export interface QuickSight extends _QuickSight {}
export const QuickSight = class extends AWSServiceClient {
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
} as unknown as typeof _QuickSightClient;
