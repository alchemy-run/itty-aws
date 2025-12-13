/**
 * Service-specific patches for AWS Smithy model bugs and omissions.
 *
 * This file contains manual corrections for issues found in the upstream AWS models
 * that cannot be fixed directly (since aws-models is a git submodule).
 *
 * Structure:
 * - Key: service name (e.g., "ec2", "s3")
 * - Value: object mapping operation names to patches
 *
 * Patch types:
 * - errors: Array of error shape names to add to the operation's error list
 */

export interface OperationPatch {
  /**
   * Additional error types that should be included in this operation's error union.
   * These are error shape names (not full shape IDs).
   * Example: ["InvalidVpcID.NotFound", "ResourceNotFoundException"]
   */
  errors?: string[];
}

export interface ServicePatches {
  [operationName: string]: OperationPatch;
}

export const servicePatches: Record<string, ServicePatches> = {
  ec2: {
    // ========== Address / Elastic IP Operations ==========
    AllocateAddress: {
      errors: ["AddressLimitExceeded"],
    },
    AssociateAddress: {
      errors: [
        "InvalidAddressID.NotFound",
        "InvalidAllocationID.NotFound",
        "InvalidInstanceID.NotFound",
        "InvalidNetworkInterfaceID.NotFound",
      ],
    },
    DescribeAddresses: {
      errors: ["InvalidAddressID.NotFound", "InvalidAllocationID.NotFound"],
    },
    DisassociateAddress: {
      errors: ["InvalidAssociationID.NotFound"],
    },
    ReleaseAddress: {
      errors: ["InvalidAddressID.NotFound", "InvalidAllocationID.NotFound"],
    },

    // ========== AMI / Image Operations ==========
    CopyImage: {
      errors: ["InvalidAMIID.NotFound", "InvalidAMIID.Unavailable"],
    },
    CreateImage: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    DeregisterImage: {
      errors: ["InvalidAMIID.NotFound", "InvalidAMIID.Unavailable"],
    },
    DescribeImageAttribute: {
      errors: ["InvalidAMIID.NotFound", "InvalidAMIID.Unavailable"],
    },
    DescribeImages: {
      errors: ["InvalidAMIID.NotFound", "InvalidAMIID.Malformed"],
    },
    ModifyImageAttribute: {
      errors: ["InvalidAMIID.NotFound", "InvalidAMIID.Unavailable"],
    },
    ResetImageAttribute: {
      errors: ["InvalidAMIID.NotFound"],
    },

    // ========== Bundle Task Operations ==========
    CancelBundleTask: {
      errors: ["InvalidBundleID.NotFound"],
    },
    DescribeBundleTasks: {
      errors: ["InvalidBundleID.NotFound"],
    },

    // ========== Capacity Reservation Operations ==========
    CancelCapacityReservation: {
      errors: [
        "InvalidCapacityReservationId.NotFound",
        "InvalidCapacityReservationId.Malformed",
      ],
    },
    CancelCapacityReservationFleets: {
      errors: [
        "InvalidCapacityReservationFleetId.NotFound",
        "InvalidCapacityReservationFleetId.Malformed",
      ],
    },
    DescribeCapacityReservationFleets: {
      errors: [
        "InvalidCapacityReservationFleetId.NotFound",
        "InvalidCapacityReservationFleetId.Malformed",
      ],
    },
    DescribeCapacityReservations: {
      errors: [
        "InvalidCapacityReservationId.NotFound",
        "InvalidCapacityReservationId.Malformed",
      ],
    },
    GetCapacityReservationUsage: {
      errors: ["InvalidCapacityReservationId.NotFound"],
    },
    ModifyCapacityReservation: {
      errors: ["InvalidCapacityReservationId.NotFound"],
    },
    ModifyCapacityReservationFleet: {
      errors: ["InvalidCapacityReservationFleetId.NotFound"],
    },

    // ========== Carrier Gateway Operations ==========
    DeleteCarrierGateway: {
      errors: ["InvalidCarrierGatewayID.NotFound"],
    },
    DescribeCarrierGateways: {
      errors: ["InvalidCarrierGatewayID.NotFound"],
    },

    // ========== Client VPN Operations ==========
    ApplySecurityGroupsToClientVpnTargetNetwork: {
      errors: [
        "InvalidClientVpnEndpointId.NotFound",
        "InvalidSecurityGroupId.NotFound",
      ],
    },
    AssociateClientVpnTargetNetwork: {
      errors: [
        "InvalidClientVpnEndpointId.NotFound",
        "InvalidSubnetID.NotFound",
      ],
    },
    AuthorizeClientVpnIngress: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    CreateClientVpnRoute: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    DeleteClientVpnEndpoint: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    DeleteClientVpnRoute: {
      errors: [
        "InvalidClientVpnEndpointId.NotFound",
        "InvalidClientVpnRouteNotFound",
      ],
    },
    DescribeClientVpnAuthorizationRules: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    DescribeClientVpnConnections: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    DescribeClientVpnEndpoints: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    DescribeClientVpnRoutes: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    DescribeClientVpnTargetNetworks: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    DisassociateClientVpnTargetNetwork: {
      errors: [
        "InvalidClientVpnEndpointId.NotFound",
        "InvalidClientVpnAssociationIdNotFound",
      ],
    },
    ExportClientVpnClientCertificateRevocationList: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    ExportClientVpnClientConfiguration: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    ImportClientVpnClientCertificateRevocationList: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    ModifyClientVpnEndpoint: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },
    RevokeClientVpnIngress: {
      errors: [
        "InvalidClientVpnEndpointId.NotFound",
        "InvalidClientVpnEndpointAuthorizationRuleNotFound",
      ],
    },
    TerminateClientVpnConnections: {
      errors: ["InvalidClientVpnEndpointId.NotFound"],
    },

    // ========== Conversion Task Operations ==========
    CancelConversionTask: {
      errors: ["InvalidConversionTaskId"],
    },
    DescribeConversionTasks: {
      errors: ["InvalidConversionTaskId", "InvalidConversionTaskId.Malformed"],
    },

    // ========== Customer Gateway Operations ==========
    DeleteCustomerGateway: {
      errors: ["InvalidCustomerGatewayID.NotFound"],
    },
    DescribeCustomerGateways: {
      errors: [
        "InvalidCustomerGatewayID.NotFound",
        "InvalidCustomerGatewayId.Malformed",
      ],
    },

    // ========== DHCP Options Operations ==========
    AssociateDhcpOptions: {
      errors: ["InvalidDhcpOptionID.NotFound", "InvalidVpcID.NotFound"],
    },
    DeleteDhcpOptions: {
      errors: [
        "InvalidDhcpOptionID.NotFound",
        "InvalidDhcpOptionsId.Malformed",
      ],
    },
    DescribeDhcpOptions: {
      errors: [
        "InvalidDhcpOptionID.NotFound",
        "InvalidDhcpOptionsId.Malformed",
      ],
    },

    // ========== Export Task Operations ==========
    CancelExportTask: {
      errors: ["InvalidExportTaskID.NotFound"],
    },
    DescribeExportTasks: {
      errors: ["InvalidExportTaskID.NotFound"],
    },

    // ========== Flow Log Operations ==========
    CreateFlowLogs: {
      errors: [
        "InvalidVpcID.NotFound",
        "InvalidSubnetID.NotFound",
        "InvalidNetworkInterfaceID.NotFound",
      ],
    },
    DeleteFlowLogs: {
      errors: ["InvalidFlowLogId.NotFound"],
    },
    DescribeFlowLogs: {
      errors: ["InvalidFlowLogId.NotFound"],
    },

    // ========== FPGA Image Operations ==========
    CopyFpgaImage: {
      errors: ["InvalidFpgaImageID.NotFound", "InvalidFpgaImageID.Malformed"],
    },
    DeleteFpgaImage: {
      errors: ["InvalidFpgaImageID.NotFound", "InvalidFpgaImageID.Malformed"],
    },
    DescribeFpgaImageAttribute: {
      errors: ["InvalidFpgaImageID.NotFound", "InvalidFpgaImageID.Malformed"],
    },
    DescribeFpgaImages: {
      errors: ["InvalidFpgaImageID.NotFound", "InvalidFpgaImageID.Malformed"],
    },
    ModifyFpgaImageAttribute: {
      errors: ["InvalidFpgaImageID.NotFound"],
    },
    ResetFpgaImageAttribute: {
      errors: ["InvalidFpgaImageID.NotFound"],
    },

    // ========== Host Operations ==========
    AllocateHosts: {
      errors: ["InvalidHostConfiguration"],
    },
    DescribeHostReservationOfferings: {
      errors: ["InvalidHostReservationOfferingId.Malformed"],
    },
    DescribeHostReservations: {
      errors: ["InvalidHostReservationId.Malformed"],
    },
    DescribeHosts: {
      errors: ["InvalidHostID.NotFound", "InvalidHostID.Malformed"],
    },
    GetHostReservationPurchasePreview: {
      errors: ["InvalidHostID.NotFound"],
    },
    ModifyHosts: {
      errors: ["InvalidHostID.NotFound"],
    },
    PurchaseHostReservation: {
      errors: ["InvalidHostID.NotFound"],
    },
    ReleaseHosts: {
      errors: ["InvalidHostID.NotFound"],
    },

    // ========== Instance Operations ==========
    ConfirmProductInstance: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    CreateInstanceExportTask: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    DescribeInstanceAttribute: {
      errors: ["InvalidInstanceID.NotFound", "InvalidInstanceID.Malformed"],
    },
    DescribeInstances: {
      errors: ["InvalidInstanceID.NotFound", "InvalidInstanceID.Malformed"],
    },
    DescribeInstanceStatus: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    GetConsoleOutput: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    GetConsoleScreenshot: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    GetInstanceTypesFromInstanceRequirements: {
      errors: ["InvalidInstanceType"],
    },
    GetInstanceUefiData: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    GetPasswordData: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ModifyInstanceAttribute: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ModifyInstanceCapacityReservationAttributes: {
      errors: [
        "InvalidInstanceID.NotFound",
        "InvalidCapacityReservationId.NotFound",
      ],
    },
    ModifyInstanceCreditSpecification: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ModifyInstanceEventStartTime: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ModifyInstanceMaintenanceOptions: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ModifyInstanceMetadataDefaults: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ModifyInstanceMetadataOptions: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ModifyInstancePlacement: {
      errors: ["InvalidInstanceID.NotFound", "InvalidHostID.NotFound"],
    },
    MonitorInstances: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    RebootInstances: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ReportInstanceStatus: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ResetInstanceAttribute: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    SendDiagnosticInterrupt: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    StartInstances: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    StopInstances: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    TerminateInstances: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    UnmonitorInstances: {
      errors: ["InvalidInstanceID.NotFound"],
    },

    // ========== Instance Event Window Operations ==========
    AssociateInstanceEventWindow: {
      errors: ["InvalidInstanceEventWindowId.NotFound"],
    },
    DeleteInstanceEventWindow: {
      errors: ["InvalidInstanceEventWindowId.NotFound"],
    },
    DisassociateInstanceEventWindow: {
      errors: ["InvalidInstanceEventWindowId.NotFound"],
    },
    ModifyInstanceEventWindow: {
      errors: ["InvalidInstanceEventWindowId.NotFound"],
    },

    // ========== Internet Gateway Operations ==========
    AttachInternetGateway: {
      errors: ["InvalidInternetGatewayID.NotFound", "InvalidVpcID.NotFound"],
    },
    DeleteInternetGateway: {
      errors: ["InvalidInternetGatewayID.NotFound"],
    },
    DescribeInternetGateways: {
      errors: ["InvalidInternetGatewayID.NotFound"],
    },
    DetachInternetGateway: {
      errors: ["InvalidInternetGatewayID.NotFound", "InvalidVpcID.NotFound"],
    },

    // ========== Key Pair Operations ==========
    CreateKeyPair: {
      errors: ["InvalidKeyPair.Duplicate"],
    },
    DeleteKeyPair: {
      errors: ["InvalidKeyPair.NotFound"],
    },
    DescribeKeyPairs: {
      errors: ["InvalidKeyPair.NotFound"],
    },
    ImportKeyPair: {
      errors: ["InvalidKeyPair.Duplicate", "InvalidKeyPair.Format"],
    },

    // ========== Launch Template Operations ==========
    CreateLaunchTemplate: {
      errors: [
        "InvalidLaunchTemplateId.AlreadyExists",
        "InvalidLaunchTemplateName.AlreadyExistsException",
      ],
    },
    CreateLaunchTemplateVersion: {
      errors: [
        "InvalidLaunchTemplateId.NotFound",
        "InvalidLaunchTemplateName.NotFoundException",
        "InvalidLaunchTemplateId.Malformed",
      ],
    },
    DeleteLaunchTemplate: {
      errors: [
        "InvalidLaunchTemplateId.NotFound",
        "InvalidLaunchTemplateName.NotFoundException",
        "InvalidLaunchTemplateId.Malformed",
      ],
    },
    DeleteLaunchTemplateVersions: {
      errors: [
        "InvalidLaunchTemplateId.NotFound",
        "InvalidLaunchTemplateId.VersionNotFound",
        "InvalidLaunchTemplateId.Malformed",
      ],
    },
    DescribeLaunchTemplates: {
      errors: [
        "InvalidLaunchTemplateId.NotFound",
        "InvalidLaunchTemplateName.NotFoundException",
        "InvalidLaunchTemplateId.Malformed",
      ],
    },
    DescribeLaunchTemplateVersions: {
      errors: [
        "InvalidLaunchTemplateId.NotFound",
        "InvalidLaunchTemplateId.VersionNotFound",
        "InvalidLaunchTemplateId.Malformed",
      ],
    },
    GetLaunchTemplateData: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    ModifyLaunchTemplate: {
      errors: [
        "InvalidLaunchTemplateId.NotFound",
        "InvalidLaunchTemplateName.NotFoundException",
      ],
    },

    // ========== Local Gateway Operations ==========
    CreateLocalGatewayRoute: {
      errors: [
        "InvalidLocalGatewayID.NotFound",
        "InvalidLocalGatewayRouteTableVpcAssociationId.NotFound",
      ],
    },
    CreateLocalGatewayRouteTableVpcAssociation: {
      errors: ["InvalidLocalGatewayID.NotFound", "InvalidVpcID.NotFound"],
    },
    DeleteLocalGatewayRoute: {
      errors: ["InvalidLocalGatewayRouteTableVpcAssociationId.NotFound"],
    },
    DeleteLocalGatewayRouteTableVpcAssociation: {
      errors: ["InvalidLocalGatewayRouteTableVpcAssociationId.NotFound"],
    },
    DescribeLocalGatewayRouteTables: {
      errors: ["InvalidLocalGatewayID.NotFound"],
    },
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations: {
      errors: [
        "InvalidLocalGatewayRouteTableVirtualInterfaceGroupAssociationId.NotFound",
      ],
    },
    DescribeLocalGatewayRouteTableVpcAssociations: {
      errors: ["InvalidLocalGatewayRouteTableVpcAssociationId.NotFound"],
    },
    DescribeLocalGateways: {
      errors: ["InvalidLocalGatewayID.NotFound"],
    },
    DescribeLocalGatewayVirtualInterfaceGroups: {
      errors: ["InvalidLocalGatewayVirtualInterfaceGroupId.NotFound"],
    },

    // ========== NAT Gateway Operations ==========
    CreateNatGateway: {
      errors: [
        "InvalidSubnetID.NotFound",
        "InvalidAllocationID.NotFound",
        "InvalidElasticIpID.NotFound",
      ],
    },
    DeleteNatGateway: {
      errors: ["InvalidNatGatewayID.NotFound"],
    },
    DescribeNatGateways: {
      errors: ["InvalidNatGatewayID.NotFound"],
    },

    // ========== Network ACL Operations ==========
    CreateNetworkAclEntry: {
      errors: ["InvalidNetworkAclID.NotFound"],
    },
    DeleteNetworkAcl: {
      errors: ["InvalidNetworkAclID.NotFound", "InvalidNetworkAcl.InUse"],
    },
    DeleteNetworkAclEntry: {
      errors: [
        "InvalidNetworkAclID.NotFound",
        "InvalidNetworkAclEntry.NotFound",
      ],
    },
    DescribeNetworkAcls: {
      errors: ["InvalidNetworkAclID.NotFound"],
    },
    ReplaceNetworkAclAssociation: {
      errors: ["InvalidNetworkAclID.NotFound", "InvalidAssociationID.NotFound"],
    },
    ReplaceNetworkAclEntry: {
      errors: [
        "InvalidNetworkAclID.NotFound",
        "InvalidNetworkAclEntry.NotFound",
      ],
    },

    // ========== Network Insights Operations ==========
    DeleteNetworkInsightsAccessScope: {
      errors: ["InvalidNetworkInsightsAccessScopeId.NotFound"],
    },
    DeleteNetworkInsightsAccessScopeAnalysis: {
      errors: ["InvalidNetworkInsightsAccessScopeAnalysisId.NotFound"],
    },
    DeleteNetworkInsightsAnalysis: {
      errors: ["InvalidNetworkInsightsAnalysisId.NotFound"],
    },
    DeleteNetworkInsightsPath: {
      errors: ["InvalidNetworkInsightsPathId.NotFound"],
    },
    DescribeNetworkInsightsAccessScopeAnalyses: {
      errors: ["InvalidNetworkInsightsAccessScopeAnalysisId.NotFound"],
    },
    DescribeNetworkInsightsAccessScopes: {
      errors: ["InvalidNetworkInsightsAccessScopeId.NotFound"],
    },
    DescribeNetworkInsightsAnalyses: {
      errors: ["InvalidNetworkInsightsAnalysisId.NotFound"],
    },
    DescribeNetworkInsightsPaths: {
      errors: ["InvalidNetworkInsightsPathId.NotFound"],
    },
    GetNetworkInsightsAccessScopeAnalysisFindings: {
      errors: ["InvalidNetworkInsightsAccessScopeAnalysisId.NotFound"],
    },
    GetNetworkInsightsAccessScopeContent: {
      errors: ["InvalidNetworkInsightsAccessScopeId.NotFound"],
    },
    StartNetworkInsightsAccessScopeAnalysis: {
      errors: ["InvalidNetworkInsightsAccessScopeId.NotFound"],
    },
    StartNetworkInsightsAnalysis: {
      errors: ["InvalidNetworkInsightsPathId.NotFound"],
    },

    // ========== Network Interface Operations ==========
    AssignPrivateIpAddresses: {
      errors: ["InvalidNetworkInterfaceID.NotFound"],
    },
    AttachNetworkInterface: {
      errors: [
        "InvalidNetworkInterfaceID.NotFound",
        "InvalidInstanceID.NotFound",
      ],
    },
    CreateNetworkInterface: {
      errors: ["InvalidSubnetID.NotFound", "InvalidSecurityGroupId.NotFound"],
    },
    DeleteNetworkInterface: {
      errors: ["InvalidNetworkInterfaceID.NotFound"],
    },
    DescribeNetworkInterfaceAttribute: {
      errors: ["InvalidNetworkInterfaceID.NotFound"],
    },
    DescribeNetworkInterfaces: {
      errors: ["InvalidNetworkInterfaceID.NotFound"],
    },
    DetachNetworkInterface: {
      errors: [
        "InvalidAttachmentID.NotFound",
        "InvalidNetworkInterfaceAttachmentId.Malformed",
      ],
    },
    ModifyNetworkInterfaceAttribute: {
      errors: [
        "InvalidNetworkInterfaceID.NotFound",
        "InvalidSecurityGroupId.NotFound",
      ],
    },
    ResetNetworkInterfaceAttribute: {
      errors: ["InvalidNetworkInterfaceID.NotFound"],
    },
    UnassignPrivateIpAddresses: {
      errors: ["InvalidNetworkInterfaceID.NotFound"],
    },

    // ========== Placement Group Operations ==========
    CreatePlacementGroup: {
      errors: ["InvalidPlacementGroup.Duplicate"],
    },
    DeletePlacementGroup: {
      errors: ["InvalidPlacementGroup.Unknown", "InvalidPlacementGroup.InUse"],
    },
    DescribePlacementGroups: {
      errors: ["InvalidPlacementGroup.Unknown"],
    },

    // ========== Prefix List Operations ==========
    DeleteManagedPrefixList: {
      errors: ["InvalidPrefixListId.NotFound"],
    },
    DescribeManagedPrefixLists: {
      errors: ["InvalidPrefixListId.NotFound", "InvalidPrefixListId.Malformed"],
    },
    DescribePrefixLists: {
      errors: ["InvalidPrefixListId.NotFound"],
    },
    GetManagedPrefixListAssociations: {
      errors: ["InvalidPrefixListId.NotFound"],
    },
    GetManagedPrefixListEntries: {
      errors: ["InvalidPrefixListId.NotFound"],
    },
    ModifyManagedPrefixList: {
      errors: ["InvalidPrefixListId.NotFound"],
    },
    RestoreManagedPrefixListVersion: {
      errors: ["InvalidPrefixListId.NotFound"],
    },

    // ========== Replace Root Volume Task Operations ==========
    CreateReplaceRootVolumeTask: {
      errors: ["InvalidInstanceID.NotFound", "InvalidSnapshotId.Malformed"],
    },
    DescribeReplaceRootVolumeTasks: {
      errors: [
        "InvalidReplaceRootVolumeTaskId.NotFound",
        "InvalidReplaceRootVolumeTaskId.Malformed",
      ],
    },

    // ========== Reserved Instance Operations ==========
    DescribeReservedInstances: {
      errors: [
        "InvalidReservationID.NotFound",
        "InvalidReservationID.Malformed",
      ],
    },
    ModifyReservedInstances: {
      errors: ["InvalidReservationID.NotFound"],
    },

    // ========== Route Operations ==========
    CreateRoute: {
      errors: [
        "InvalidRouteTableID.NotFound",
        "InvalidGatewayID.NotFound",
        "InvalidInstanceID.NotFound",
        "InvalidNetworkInterfaceID.NotFound",
        "InvalidNatGatewayID.NotFound",
        "InvalidTransitGatewayId.NotFound",
        "InvalidVpcPeeringConnectionID.NotFound",
      ],
    },
    DeleteRoute: {
      errors: ["InvalidRouteTableID.NotFound", "InvalidRoute.NotFound"],
    },
    ReplaceRoute: {
      errors: ["InvalidRouteTableID.NotFound", "InvalidRoute.NotFound"],
    },

    // ========== Route Table Operations ==========
    AssociateRouteTable: {
      errors: [
        "InvalidRouteTableID.NotFound",
        "InvalidSubnetID.NotFound",
        "InvalidGatewayID.NotFound",
      ],
    },
    CreateRouteTable: {
      errors: ["InvalidVpcID.NotFound"],
    },
    DeleteRouteTable: {
      errors: ["InvalidRouteTableID.NotFound"],
    },
    DescribeRouteTables: {
      errors: ["InvalidRouteTableID.NotFound", "InvalidRouteTableId.Malformed"],
    },
    DisassociateRouteTable: {
      errors: ["InvalidAssociationID.NotFound"],
    },
    ReplaceRouteTableAssociation: {
      errors: ["InvalidRouteTableID.NotFound", "InvalidAssociationID.NotFound"],
    },

    // ========== Security Group Operations ==========
    AuthorizeSecurityGroupEgress: {
      errors: [
        "InvalidGroup.NotFound",
        "InvalidSecurityGroupId.NotFound",
        "InvalidPermission.Duplicate",
      ],
    },
    AuthorizeSecurityGroupIngress: {
      errors: [
        "InvalidGroup.NotFound",
        "InvalidSecurityGroupId.NotFound",
        "InvalidPermission.Duplicate",
      ],
    },
    CreateSecurityGroup: {
      errors: ["InvalidVpcID.NotFound", "InvalidGroup.Duplicate"],
    },
    DeleteSecurityGroup: {
      errors: [
        "InvalidGroup.NotFound",
        "InvalidSecurityGroupId.NotFound",
        "InvalidGroup.InUse",
      ],
    },
    DescribeSecurityGroupReferences: {
      errors: ["InvalidSecurityGroupId.NotFound"],
    },
    DescribeSecurityGroupRules: {
      errors: [
        "InvalidSecurityGroupId.NotFound",
        "InvalidSecurityGroupRuleId.NotFound",
      ],
    },
    DescribeSecurityGroups: {
      errors: [
        "InvalidGroup.NotFound",
        "InvalidSecurityGroupId.NotFound",
        "InvalidGroupId.Malformed",
      ],
    },
    DescribeStaleSecurityGroups: {
      errors: ["InvalidVpcID.NotFound"],
    },
    ModifySecurityGroupRules: {
      errors: [
        "InvalidSecurityGroupId.NotFound",
        "InvalidSecurityGroupRuleId.NotFound",
      ],
    },
    RevokeSecurityGroupEgress: {
      errors: [
        "InvalidGroup.NotFound",
        "InvalidSecurityGroupId.NotFound",
        "InvalidPermission.NotFound",
      ],
    },
    RevokeSecurityGroupIngress: {
      errors: [
        "InvalidGroup.NotFound",
        "InvalidSecurityGroupId.NotFound",
        "InvalidPermission.NotFound",
      ],
    },
    UpdateSecurityGroupRuleDescriptionsEgress: {
      errors: ["InvalidSecurityGroupId.NotFound"],
    },
    UpdateSecurityGroupRuleDescriptionsIngress: {
      errors: ["InvalidSecurityGroupId.NotFound"],
    },

    // ========== Snapshot Operations ==========
    CopySnapshot: {
      errors: ["InvalidSnapshot.NotFound", "InvalidSnapshotId.Malformed"],
    },
    CreateSnapshot: {
      errors: ["InvalidVolume.NotFound"],
    },
    CreateSnapshots: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    DeleteSnapshot: {
      errors: [
        "InvalidSnapshot.NotFound",
        "InvalidSnapshot.InUse",
        "InvalidSnapshotId.Malformed",
      ],
    },
    DescribeSnapshotAttribute: {
      errors: ["InvalidSnapshot.NotFound", "InvalidSnapshotId.Malformed"],
    },
    DescribeSnapshots: {
      errors: ["InvalidSnapshot.NotFound", "InvalidSnapshotId.Malformed"],
    },
    ModifySnapshotAttribute: {
      errors: ["InvalidSnapshot.NotFound"],
    },
    ResetSnapshotAttribute: {
      errors: ["InvalidSnapshot.NotFound"],
    },

    // ========== Spot Operations ==========
    CancelSpotFleetRequests: {
      errors: [
        "InvalidSpotFleetRequestId.NotFound",
        "InvalidSpotFleetRequestId.Malformed",
      ],
    },
    CancelSpotInstanceRequests: {
      errors: [
        "InvalidSpotInstanceRequestID.NotFound",
        "InvalidSpotInstanceRequestID.Malformed",
      ],
    },
    CreateSpotDatafeedSubscription: {
      errors: ["InvalidSpotDatafeed.NotFound"],
    },
    DeleteSpotDatafeedSubscription: {
      errors: ["InvalidSpotDatafeed.NotFound"],
    },
    DescribeSpotDatafeedSubscription: {
      errors: ["InvalidSpotDatafeed.NotFound"],
    },
    DescribeSpotFleetInstances: {
      errors: ["InvalidSpotFleetRequestId.NotFound"],
    },
    DescribeSpotFleetRequestHistory: {
      errors: ["InvalidSpotFleetRequestId.NotFound"],
    },
    DescribeSpotFleetRequests: {
      errors: [
        "InvalidSpotFleetRequestId.NotFound",
        "InvalidSpotFleetRequestId.Malformed",
      ],
    },
    DescribeSpotInstanceRequests: {
      errors: [
        "InvalidSpotInstanceRequestID.NotFound",
        "InvalidSpotInstanceRequestID.Malformed",
      ],
    },
    ModifySpotFleetRequest: {
      errors: ["InvalidSpotFleetRequestId.NotFound"],
    },

    // ========== Subnet Operations ==========
    CreateSubnet: {
      errors: ["InvalidVpcID.NotFound"],
    },
    CreateSubnetCidrReservation: {
      errors: ["InvalidSubnetID.NotFound"],
    },
    DeleteSubnet: {
      errors: ["InvalidSubnetID.NotFound"],
    },
    DeleteSubnetCidrReservation: {
      errors: ["InvalidSubnetCidrReservationId.NotFound"],
    },
    DescribeSubnets: {
      errors: ["InvalidSubnetID.NotFound", "InvalidSubnetId.Malformed"],
    },
    GetSubnetCidrReservations: {
      errors: ["InvalidSubnetID.NotFound"],
    },
    ModifySubnetAttribute: {
      errors: ["InvalidSubnetID.NotFound"],
    },

    // ========== Traffic Mirror Operations ==========
    CreateTrafficMirrorFilterRule: {
      errors: ["InvalidTrafficMirrorFilterId.NotFound"],
    },
    CreateTrafficMirrorSession: {
      errors: [
        "InvalidTrafficMirrorFilterId.NotFound",
        "InvalidTrafficMirrorTargetId.NotFound",
        "InvalidNetworkInterfaceID.NotFound",
      ],
    },
    CreateTrafficMirrorTarget: {
      errors: ["InvalidNetworkInterfaceID.NotFound"],
    },
    DeleteTrafficMirrorFilter: {
      errors: [
        "InvalidTrafficMirrorFilterId.NotFound",
        "InvalidTrafficMirrorFilter.InUse",
      ],
    },
    DeleteTrafficMirrorFilterRule: {
      errors: ["InvalidTrafficMirrorFilterRuleId.NotFound"],
    },
    DeleteTrafficMirrorSession: {
      errors: ["InvalidTrafficMirrorSessionId.NotFound"],
    },
    DeleteTrafficMirrorTarget: {
      errors: ["InvalidTrafficMirrorTargetId.NotFound"],
    },
    DescribeTrafficMirrorFilters: {
      errors: ["InvalidTrafficMirrorFilterId.NotFound"],
    },
    DescribeTrafficMirrorSessions: {
      errors: ["InvalidTrafficMirrorSessionId.NotFound"],
    },
    DescribeTrafficMirrorTargets: {
      errors: ["InvalidTrafficMirrorTargetId.NotFound"],
    },
    ModifyTrafficMirrorFilterNetworkServices: {
      errors: ["InvalidTrafficMirrorFilterId.NotFound"],
    },
    ModifyTrafficMirrorFilterRule: {
      errors: ["InvalidTrafficMirrorFilterRuleId.NotFound"],
    },
    ModifyTrafficMirrorSession: {
      errors: ["InvalidTrafficMirrorSessionId.NotFound"],
    },

    // ========== Transit Gateway Operations ==========
    AcceptTransitGatewayPeeringAttachment: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    AcceptTransitGatewayVpcAttachment: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    AssociateTransitGatewayMulticastDomain: {
      errors: [
        "InvalidTransitGatewayMulticastDomainId.NotFound",
        "InvalidTransitGatewayAttachmentId.NotFound",
        "InvalidSubnetID.NotFound",
      ],
    },
    AssociateTransitGatewayPolicyTable: {
      errors: [
        "InvalidTransitGatewayPolicyTableId.NotFound",
        "InvalidTransitGatewayAttachmentId.NotFound",
      ],
    },
    AssociateTransitGatewayRouteTable: {
      errors: [
        "InvalidTransitGatewayRouteTableId.NotFound",
        "InvalidTransitGatewayAttachmentId.NotFound",
      ],
    },
    CreateTransitGateway: {
      errors: ["InvalidTransitGatewayId.NotFound"],
    },
    CreateTransitGatewayConnect: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    CreateTransitGatewayConnectPeer: {
      errors: [
        "InvalidTransitGatewayAttachmentId.NotFound",
        "InvalidTransitGatewayConnectPeerId.Malformed",
      ],
    },
    CreateTransitGatewayMulticastDomain: {
      errors: ["InvalidTransitGatewayId.NotFound"],
    },
    CreateTransitGatewayPeeringAttachment: {
      errors: ["InvalidTransitGatewayId.NotFound"],
    },
    CreateTransitGatewayPolicyTable: {
      errors: ["InvalidTransitGatewayId.NotFound"],
    },
    CreateTransitGatewayPrefixListReference: {
      errors: [
        "InvalidTransitGatewayRouteTableId.NotFound",
        "InvalidPrefixListId.NotFound",
      ],
    },
    CreateTransitGatewayRoute: {
      errors: [
        "InvalidTransitGatewayRouteTableId.NotFound",
        "InvalidTransitGatewayAttachmentId.NotFound",
      ],
    },
    CreateTransitGatewayRouteTable: {
      errors: ["InvalidTransitGatewayId.NotFound"],
    },
    CreateTransitGatewayRouteTableAnnouncement: {
      errors: [
        "InvalidTransitGatewayRouteTableId.NotFound",
        "InvalidTransitGatewayAttachmentId.NotFound",
      ],
    },
    CreateTransitGatewayVpcAttachment: {
      errors: [
        "InvalidTransitGatewayId.NotFound",
        "InvalidVpcID.NotFound",
        "InvalidSubnetID.NotFound",
      ],
    },
    DeleteTransitGateway: {
      errors: [
        "InvalidTransitGatewayId.NotFound",
        "InvalidTransitGateway.NotFound",
      ],
    },
    DeleteTransitGatewayConnect: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    DeleteTransitGatewayConnectPeer: {
      errors: ["InvalidTransitGatewayConnectPeerId.NotFound"],
    },
    DeleteTransitGatewayMulticastDomain: {
      errors: ["InvalidTransitGatewayMulticastDomainId.NotFound"],
    },
    DeleteTransitGatewayPeeringAttachment: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    DeleteTransitGatewayPolicyTable: {
      errors: ["InvalidTransitGatewayPolicyTableId.NotFound"],
    },
    DeleteTransitGatewayPrefixListReference: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    DeleteTransitGatewayRoute: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    DeleteTransitGatewayRouteTable: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    DeleteTransitGatewayRouteTableAnnouncement: {
      errors: ["InvalidTransitGatewayRouteTableAnnouncementId.NotFound"],
    },
    DeleteTransitGatewayVpcAttachment: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    DeregisterTransitGatewayMulticastGroupMembers: {
      errors: ["InvalidTransitGatewayMulticastDomainId.NotFound"],
    },
    DeregisterTransitGatewayMulticastGroupSources: {
      errors: ["InvalidTransitGatewayMulticastDomainId.NotFound"],
    },
    DescribeTransitGatewayAttachments: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    DescribeTransitGatewayConnectPeers: {
      errors: ["InvalidTransitGatewayConnectPeerId.NotFound"],
    },
    DescribeTransitGatewayConnects: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    DescribeTransitGatewayMulticastDomains: {
      errors: ["InvalidTransitGatewayMulticastDomainId.NotFound"],
    },
    DescribeTransitGatewayPeeringAttachments: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    DescribeTransitGatewayPolicyTables: {
      errors: ["InvalidTransitGatewayPolicyTableId.NotFound"],
    },
    DescribeTransitGatewayRouteTableAnnouncements: {
      errors: ["InvalidTransitGatewayRouteTableAnnouncementId.NotFound"],
    },
    DescribeTransitGatewayRouteTables: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    DescribeTransitGateways: {
      errors: [
        "InvalidTransitGatewayId.NotFound",
        "InvalidTransitGateway.NotFound",
        "InvalidTransitGatewayId.Malformed",
      ],
    },
    DescribeTransitGatewayVpcAttachments: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    DisableTransitGatewayRouteTablePropagation: {
      errors: [
        "InvalidTransitGatewayRouteTableId.NotFound",
        "InvalidTransitGatewayAttachmentId.NotFound",
      ],
    },
    DisassociateTransitGatewayMulticastDomain: {
      errors: ["InvalidTransitGatewayMulticastDomainId.NotFound"],
    },
    DisassociateTransitGatewayPolicyTable: {
      errors: ["InvalidTransitGatewayPolicyTableId.NotFound"],
    },
    DisassociateTransitGatewayRouteTable: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    EnableTransitGatewayRouteTablePropagation: {
      errors: [
        "InvalidTransitGatewayRouteTableId.NotFound",
        "InvalidTransitGatewayAttachmentId.NotFound",
      ],
    },
    ExportTransitGatewayRoutes: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    GetTransitGatewayAttachmentPropagations: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    GetTransitGatewayMulticastDomainAssociations: {
      errors: ["InvalidTransitGatewayMulticastDomainId.NotFound"],
    },
    GetTransitGatewayPolicyTableAssociations: {
      errors: ["InvalidTransitGatewayPolicyTableId.NotFound"],
    },
    GetTransitGatewayPolicyTableEntries: {
      errors: ["InvalidTransitGatewayPolicyTableId.NotFound"],
    },
    GetTransitGatewayPrefixListReferences: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    GetTransitGatewayRouteTableAssociations: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    GetTransitGatewayRouteTablePropagations: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    ModifyTransitGateway: {
      errors: ["InvalidTransitGatewayId.NotFound"],
    },
    ModifyTransitGatewayPrefixListReference: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    ModifyTransitGatewayVpcAttachment: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    RegisterTransitGatewayMulticastGroupMembers: {
      errors: ["InvalidTransitGatewayMulticastDomainId.NotFound"],
    },
    RegisterTransitGatewayMulticastGroupSources: {
      errors: ["InvalidTransitGatewayMulticastDomainId.NotFound"],
    },
    RejectTransitGatewayPeeringAttachment: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    RejectTransitGatewayVpcAttachment: {
      errors: ["InvalidTransitGatewayAttachmentId.NotFound"],
    },
    ReplaceTransitGatewayRoute: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },
    SearchTransitGatewayMulticastGroups: {
      errors: ["InvalidTransitGatewayMulticastDomainId.NotFound"],
    },
    SearchTransitGatewayRoutes: {
      errors: ["InvalidTransitGatewayRouteTableId.NotFound"],
    },

    // ========== Verified Access Operations ==========
    AttachVerifiedAccessTrustProvider: {
      errors: [
        "InvalidVerifiedAccessInstanceId.NotFound",
        "InvalidVerifiedAccessTrustProviderId.NotFound",
      ],
    },
    CreateVerifiedAccessEndpoint: {
      errors: ["InvalidVerifiedAccessGroupId.NotFound"],
    },
    CreateVerifiedAccessGroup: {
      errors: ["InvalidVerifiedAccessInstanceId.NotFound"],
    },
    DeleteVerifiedAccessEndpoint: {
      errors: ["InvalidVerifiedAccessEndpointId.NotFound"],
    },
    DeleteVerifiedAccessGroup: {
      errors: ["InvalidVerifiedAccessGroupId.NotFound"],
    },
    DeleteVerifiedAccessInstance: {
      errors: ["InvalidVerifiedAccessInstanceId.NotFound"],
    },
    DeleteVerifiedAccessTrustProvider: {
      errors: ["InvalidVerifiedAccessTrustProviderId.NotFound"],
    },
    DescribeVerifiedAccessEndpoints: {
      errors: ["InvalidVerifiedAccessEndpointId.NotFound"],
    },
    DescribeVerifiedAccessGroups: {
      errors: ["InvalidVerifiedAccessGroupId.NotFound"],
    },
    DescribeVerifiedAccessInstanceLoggingConfigurations: {
      errors: ["InvalidVerifiedAccessInstanceId.NotFound"],
    },
    DescribeVerifiedAccessInstances: {
      errors: ["InvalidVerifiedAccessInstanceId.NotFound"],
    },
    DescribeVerifiedAccessTrustProviders: {
      errors: ["InvalidVerifiedAccessTrustProviderId.NotFound"],
    },
    DetachVerifiedAccessTrustProvider: {
      errors: [
        "InvalidVerifiedAccessInstanceId.NotFound",
        "InvalidVerifiedAccessTrustProviderId.NotFound",
      ],
    },
    GetVerifiedAccessEndpointPolicy: {
      errors: ["InvalidVerifiedAccessEndpointId.NotFound"],
    },
    GetVerifiedAccessGroupPolicy: {
      errors: ["InvalidVerifiedAccessGroupId.NotFound"],
    },
    ModifyVerifiedAccessEndpoint: {
      errors: ["InvalidVerifiedAccessEndpointId.NotFound"],
    },
    ModifyVerifiedAccessEndpointPolicy: {
      errors: ["InvalidVerifiedAccessEndpointId.NotFound"],
    },
    ModifyVerifiedAccessGroup: {
      errors: ["InvalidVerifiedAccessGroupId.NotFound"],
    },
    ModifyVerifiedAccessGroupPolicy: {
      errors: ["InvalidVerifiedAccessGroupId.NotFound"],
    },
    ModifyVerifiedAccessInstance: {
      errors: ["InvalidVerifiedAccessInstanceId.NotFound"],
    },
    ModifyVerifiedAccessInstanceLoggingConfiguration: {
      errors: ["InvalidVerifiedAccessInstanceId.NotFound"],
    },
    ModifyVerifiedAccessTrustProvider: {
      errors: ["InvalidVerifiedAccessTrustProviderId.NotFound"],
    },

    // ========== Volume Operations ==========
    AttachVolume: {
      errors: [
        "InvalidVolume.NotFound",
        "InvalidInstanceID.NotFound",
        "InvalidVolumeID.Malformed",
      ],
    },
    CreateVolume: {
      errors: [
        "InvalidSnapshot.NotFound",
        "InvalidVolumeID.Duplicate",
        "InvalidAvailabilityZone",
      ],
    },
    DeleteVolume: {
      errors: ["InvalidVolume.NotFound", "InvalidVolumeID.Malformed"],
    },
    DescribeVolumeAttribute: {
      errors: ["InvalidVolume.NotFound", "InvalidVolumeID.Malformed"],
    },
    DescribeVolumes: {
      errors: ["InvalidVolume.NotFound", "InvalidVolumeID.Malformed"],
    },
    DescribeVolumesModifications: {
      errors: ["InvalidVolume.NotFound"],
    },
    DescribeVolumeStatus: {
      errors: ["InvalidVolume.NotFound"],
    },
    DetachVolume: {
      errors: [
        "InvalidVolume.NotFound",
        "InvalidInstanceID.NotFound",
        "InvalidAttachment.NotFound",
      ],
    },
    EnableVolumeIO: {
      errors: ["InvalidVolume.NotFound"],
    },
    ModifyVolume: {
      errors: ["InvalidVolume.NotFound"],
    },
    ModifyVolumeAttribute: {
      errors: ["InvalidVolume.NotFound"],
    },

    // ========== VPC Operations ==========
    CreateVpc: {
      errors: ["VpcLimitExceeded"],
    },
    DeleteVpc: {
      errors: ["InvalidVpcID.NotFound"],
    },
    DescribeVpcAttribute: {
      errors: ["InvalidVpcID.NotFound"],
    },
    DescribeVpcClassicLink: {
      errors: ["InvalidVpcID.NotFound"],
    },
    DescribeVpcClassicLinkDnsSupport: {
      errors: ["InvalidVpcID.NotFound"],
    },
    DescribeVpcs: {
      errors: ["InvalidVpcID.NotFound", "InvalidVpcID.Malformed"],
    },
    DisableVpcClassicLink: {
      errors: ["InvalidVpcID.NotFound"],
    },
    DisableVpcClassicLinkDnsSupport: {
      errors: ["InvalidVpcID.NotFound"],
    },
    EnableVpcClassicLink: {
      errors: ["InvalidVpcID.NotFound"],
    },
    EnableVpcClassicLinkDnsSupport: {
      errors: ["InvalidVpcID.NotFound"],
    },
    ModifyVpcAttribute: {
      errors: ["InvalidVpcID.NotFound"],
    },
    ModifyVpcTenancy: {
      errors: ["InvalidVpcID.NotFound"],
    },

    // ========== VPC Endpoint Operations ==========
    AcceptVpcEndpointConnections: {
      errors: ["InvalidVpcEndpointServiceId.NotFound"],
    },
    CreateVpcEndpoint: {
      errors: [
        "InvalidVpcID.NotFound",
        "InvalidSubnetID.NotFound",
        "InvalidSecurityGroupId.NotFound",
        "InvalidRouteTableID.NotFound",
      ],
    },
    CreateVpcEndpointConnectionNotification: {
      errors: [
        "InvalidVpcEndpointId.NotFound",
        "InvalidVpcEndpointServiceId.NotFound",
      ],
    },
    CreateVpcEndpointServiceConfiguration: {
      errors: ["InvalidNetworkLoadBalancerArn.NotFound"],
    },
    DeleteVpcEndpointConnectionNotifications: {
      errors: ["InvalidVpcEndpointId.NotFound"],
    },
    DeleteVpcEndpoints: {
      errors: ["InvalidVpcEndpointId.NotFound"],
    },
    DeleteVpcEndpointServiceConfigurations: {
      errors: ["InvalidVpcEndpointServiceId.NotFound"],
    },
    DescribeVpcEndpointConnectionNotifications: {
      errors: ["InvalidVpcEndpointId.NotFound"],
    },
    DescribeVpcEndpointConnections: {
      errors: ["InvalidVpcEndpointServiceId.NotFound"],
    },
    DescribeVpcEndpoints: {
      errors: [
        "InvalidVpcEndpoint.NotFound",
        "InvalidVpcEndpointId.NotFound",
        "InvalidVpcEndpointId.Malformed",
      ],
    },
    DescribeVpcEndpointServiceConfigurations: {
      errors: ["InvalidVpcEndpointServiceId.NotFound"],
    },
    DescribeVpcEndpointServicePermissions: {
      errors: ["InvalidVpcEndpointServiceId.NotFound"],
    },
    ModifyVpcEndpoint: {
      errors: ["InvalidVpcEndpointId.NotFound"],
    },
    ModifyVpcEndpointConnectionNotification: {
      errors: ["InvalidVpcEndpointId.NotFound"],
    },
    ModifyVpcEndpointServiceConfiguration: {
      errors: ["InvalidVpcEndpointServiceId.NotFound"],
    },
    ModifyVpcEndpointServicePayerResponsibility: {
      errors: ["InvalidVpcEndpointServiceId.NotFound"],
    },
    ModifyVpcEndpointServicePermissions: {
      errors: ["InvalidVpcEndpointServiceId.NotFound"],
    },
    RejectVpcEndpointConnections: {
      errors: ["InvalidVpcEndpointServiceId.NotFound"],
    },

    // ========== VPC Peering Operations ==========
    AcceptVpcPeeringConnection: {
      errors: ["InvalidVpcPeeringConnectionID.NotFound"],
    },
    CreateVpcPeeringConnection: {
      errors: [
        "InvalidVpcID.NotFound",
        "VpcPeeringConnectionAlreadyExists",
        "VpcPeeringConnectionsPerVpcLimitExceeded",
      ],
    },
    DeleteVpcPeeringConnection: {
      errors: [
        "InvalidVpcPeeringConnectionID.NotFound",
        "InvalidVpcPeeringConnection.NotFound",
      ],
    },
    DescribeVpcPeeringConnections: {
      errors: [
        "InvalidVpcPeeringConnectionID.NotFound",
        "InvalidVpcPeeringConnection.NotFound",
        "InvalidVpcPeeringConnectionId.Malformed",
      ],
    },
    ModifyVpcPeeringConnectionOptions: {
      errors: ["InvalidVpcPeeringConnectionID.NotFound"],
    },
    RejectVpcPeeringConnection: {
      errors: ["InvalidVpcPeeringConnectionID.NotFound"],
    },

    // ========== VPN Connection Operations ==========
    CreateVpnConnection: {
      errors: [
        "InvalidCustomerGatewayID.NotFound",
        "InvalidVpnGatewayID.NotFound",
        "InvalidTransitGatewayId.NotFound",
        "VpnConnectionLimitExceeded",
      ],
    },
    CreateVpnConnectionRoute: {
      errors: ["InvalidVpnConnectionID.NotFound"],
    },
    DeleteVpnConnection: {
      errors: ["InvalidVpnConnectionID.NotFound"],
    },
    DeleteVpnConnectionRoute: {
      errors: ["InvalidVpnConnectionID.NotFound"],
    },
    DescribeVpnConnections: {
      errors: ["InvalidVpnConnectionID.NotFound", "InvalidVpnConnectionID"],
    },
    ModifyVpnConnection: {
      errors: ["InvalidVpnConnectionID.NotFound"],
    },
    ModifyVpnConnectionOptions: {
      errors: ["InvalidVpnConnectionID.NotFound"],
    },
    ModifyVpnTunnelCertificate: {
      errors: ["InvalidVpnConnectionID.NotFound"],
    },
    ModifyVpnTunnelOptions: {
      errors: ["InvalidVpnConnectionID.NotFound"],
    },

    // ========== VPN Gateway Operations ==========
    AttachVpnGateway: {
      errors: ["InvalidVpnGatewayID.NotFound", "InvalidVpcID.NotFound"],
    },
    CreateVpnGateway: {
      errors: ["VpnGatewayLimitExceeded"],
    },
    DeleteVpnGateway: {
      errors: ["InvalidVpnGatewayID.NotFound"],
    },
    DescribeVpnGateways: {
      errors: ["InvalidVpnGatewayID.NotFound"],
    },
    DetachVpnGateway: {
      errors: [
        "InvalidVpnGatewayID.NotFound",
        "InvalidVpcID.NotFound",
        "InvalidVpnGatewayAttachment.NotFound",
      ],
    },

    // ========== Egress-Only Internet Gateway Operations ==========
    CreateEgressOnlyInternetGateway: {
      errors: ["InvalidVpcID.NotFound"],
    },
    DeleteEgressOnlyInternetGateway: {
      errors: ["InvalidGatewayID.NotFound"],
    },
    DescribeEgressOnlyInternetGateways: {
      errors: ["InvalidGatewayID.NotFound"],
    },

    // ========== IPAM Operations ==========
    AllocateIpamPoolCidr: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    CreateIpamPool: {
      errors: ["InvalidIpamScopeId.NotFound"],
    },
    CreateIpamScope: {
      errors: ["InvalidIpamId.NotFound"],
    },
    DeleteIpam: {
      errors: ["InvalidIpamId.NotFound"],
    },
    DeleteIpamPool: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    DeleteIpamResourceDiscovery: {
      errors: ["InvalidIpamResourceDiscoveryId.NotFound"],
    },
    DeleteIpamScope: {
      errors: ["InvalidIpamScopeId.NotFound"],
    },
    DeprovisionIpamByoasn: {
      errors: ["InvalidIpamId.NotFound"],
    },
    DeprovisionIpamPoolCidr: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    DeprovisionPublicIpv4PoolCidr: {
      errors: ["InvalidPoolID.NotFound"],
    },
    DescribeIpamPools: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    DescribeIpamResourceDiscoveries: {
      errors: ["InvalidIpamResourceDiscoveryId.NotFound"],
    },
    DescribeIpamResourceDiscoveryAssociations: {
      errors: ["InvalidIpamResourceDiscoveryAssociationId.NotFound"],
    },
    DescribeIpamScopes: {
      errors: ["InvalidIpamScopeId.NotFound"],
    },
    DescribeIpams: {
      errors: ["InvalidIpamId.NotFound"],
    },
    DisassociateIpamByoasn: {
      errors: ["InvalidIpamId.NotFound"],
    },
    DisassociateIpamResourceDiscovery: {
      errors: ["InvalidIpamResourceDiscoveryAssociationId.NotFound"],
    },
    GetIpamAddressHistory: {
      errors: ["InvalidIpamScopeId.NotFound"],
    },
    GetIpamDiscoveredAccounts: {
      errors: ["InvalidIpamResourceDiscoveryId.NotFound"],
    },
    GetIpamDiscoveredPublicAddresses: {
      errors: ["InvalidIpamResourceDiscoveryId.NotFound"],
    },
    GetIpamDiscoveredResourceCidrs: {
      errors: ["InvalidIpamResourceDiscoveryId.NotFound"],
    },
    GetIpamPoolAllocations: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    GetIpamPoolCidrs: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    GetIpamResourceCidrs: {
      errors: ["InvalidIpamScopeId.NotFound"],
    },
    ModifyIpam: {
      errors: ["InvalidIpamId.NotFound"],
    },
    ModifyIpamPool: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    ModifyIpamResourceCidr: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    ModifyIpamResourceDiscovery: {
      errors: ["InvalidIpamResourceDiscoveryId.NotFound"],
    },
    ModifyIpamScope: {
      errors: ["InvalidIpamScopeId.NotFound"],
    },
    MoveByoipCidrToIpam: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    ProvisionIpamByoasn: {
      errors: ["InvalidIpamId.NotFound"],
    },
    ProvisionIpamPoolCidr: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },
    ProvisionPublicIpv4PoolCidr: {
      errors: ["InvalidPoolID.NotFound", "InvalidIpamPoolId.NotFound"],
    },
    ReleaseIpamPoolAllocation: {
      errors: ["InvalidIpamPoolId.NotFound"],
    },

    // ========== Public IPv4 Pool Operations ==========
    DescribePublicIpv4Pools: {
      errors: ["InvalidPoolID.NotFound", "InvalidPoolID.Malformed"],
    },

    // ========== Coip Pool Operations ==========
    DescribeCoipPools: {
      errors: ["InvalidCoipPoolId.NotFound", "InvalidCoipPoolId.Malformed"],
    },

    // ========== IAM Instance Profile Operations ==========
    AssociateIamInstanceProfile: {
      errors: ["InvalidInstanceID.NotFound"],
    },
    DescribeIamInstanceProfileAssociations: {
      errors: ["InvalidAssociationID.NotFound"],
    },
    DisassociateIamInstanceProfile: {
      errors: ["InvalidAssociationID.NotFound"],
    },
    ReplaceIamInstanceProfileAssociation: {
      errors: ["InvalidAssociationID.NotFound"],
    },
  },
};
