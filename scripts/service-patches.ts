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
    // DeleteVpc is missing the InvalidVpcID.NotFound error that can be thrown
    // when the VPC ID doesn't exist
    DeleteVpc: {
      errors: ["InvalidVpcID.NotFound"],
    },
    DeleteSubnet: {
      errors: ["InvalidSubnetID.NotFound"],
    },
    DescribeSubnets: {
      errors: ["InvalidSubnetID.NotFound"],
    },
    DescribeNetworkInterfaces: {
      errors: ["InvalidNetworkInterface.NotFound"],
    },
    DescribeInternetGateways: {
      errors: ["InvalidInternetGateway.NotFound"],
    },
    DescribeKeyPairs: {
      errors: ["InvalidKeyPair.NotFound"],
    },
    DescribeVolumes: {
      errors: ["InvalidVolume.NotFound"],
    },
    DescribeVpcPeeringConnections: {
      errors: ["InvalidVpcPeeringConnection.NotFound"],
    },
    DeleteNetworkInterface: {
      errors: ["InvalidNetworkInterface.NotFound"],
    },
    DeleteInternetGateway: {
      errors: ["InvalidInternetGateway.NotFound"],
    },
    DeleteKeyPair: {
      errors: ["InvalidKeyPair.NotFound"],
    },
    DeleteVolume: {
      errors: ["InvalidVolume.NotFound"],
    },
    DeleteVpcPeeringConnection: {
      errors: ["InvalidVpcPeeringConnection.NotFound"],
    },
    DeleteVpnConnection: {
      errors: ["InvalidVpnConnection.NotFound"],
    },
    DeleteVpnGateway: {
      errors: ["InvalidVpnGateway.NotFound"],
    },
  },
};
