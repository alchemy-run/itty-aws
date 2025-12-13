/**
 * Discover EC2 API error codes by making calls with invalid IDs.
 * Usage: bun run scripts/discover-ec2-errors.ts
 */
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { Effect } from "effect";
import { EC2 } from "../src/services/ec2/index.ts";
import { servicePatches } from "./service-patches.ts";

const credentials = await fromNodeProviderChain()();
const client = new EC2({ region: "us-east-1", credentials });

// Fake IDs using valid format (17 hex chars after prefix for most)
const opParams: Record<string, Record<string, unknown>> = {
  // VPC resources (17 hex chars)
  DeleteVpc: { VpcId: "vpc-0a1b2c3d4e5f67890" },
  DescribeVpcs: { VpcIds: ["vpc-0a1b2c3d4e5f67890"] },
  DeleteSubnet: { SubnetId: "subnet-0a1b2c3d4e5f67890" },
  DescribeSubnets: { SubnetIds: ["subnet-0a1b2c3d4e5f67890"] },
  DeleteInternetGateway: { InternetGatewayId: "igw-0a1b2c3d4e5f67890" },
  DescribeInternetGateways: { InternetGatewayIds: ["igw-0a1b2c3d4e5f67890"] },
  DeleteNatGateway: { NatGatewayId: "nat-0a1b2c3d4e5f67890" },
  DescribeNatGateways: { NatGatewayIds: ["nat-0a1b2c3d4e5f67890"] },
  DeleteRouteTable: { RouteTableId: "rtb-0a1b2c3d4e5f67890" },
  DescribeRouteTables: { RouteTableIds: ["rtb-0a1b2c3d4e5f67890"] },
  DeleteNetworkAcl: { NetworkAclId: "acl-0a1b2c3d4e5f67890" },
  DescribeNetworkAcls: { NetworkAclIds: ["acl-0a1b2c3d4e5f67890"] },
  DeleteSecurityGroup: { GroupId: "sg-0a1b2c3d4e5f67890" },
  DescribeSecurityGroups: { GroupIds: ["sg-0a1b2c3d4e5f67890"] },
  DeleteNetworkInterface: { NetworkInterfaceId: "eni-0a1b2c3d4e5f67890" },
  DescribeNetworkInterfaces: { NetworkInterfaceIds: ["eni-0a1b2c3d4e5f67890"] },
  // Instance/AMI
  DescribeInstances: { InstanceIds: ["i-0a1b2c3d4e5f67890"] },
  DescribeImages: { ImageIds: ["ami-0a1b2c3d4e5f67890"] },
  // Volume/Snapshot
  DeleteVolume: { VolumeId: "vol-0a1b2c3d4e5f67890" },
  DescribeVolumes: { VolumeIds: ["vol-0a1b2c3d4e5f67890"] },
  DeleteSnapshot: { SnapshotId: "snap-0a1b2c3d4e5f67890" },
  DescribeSnapshots: { SnapshotIds: ["snap-0a1b2c3d4e5f67890"] },
  // Gateway resources
  DeleteCustomerGateway: { CustomerGatewayId: "cgw-0a1b2c3d4e5f67890" },
  DescribeCustomerGateways: { CustomerGatewayIds: ["cgw-0a1b2c3d4e5f67890"] },
  DeleteVpnGateway: { VpnGatewayId: "vgw-0a1b2c3d4e5f67890" },
  DescribeVpnGateways: { VpnGatewayIds: ["vgw-0a1b2c3d4e5f67890"] },
  DeleteVpnConnection: { VpnConnectionId: "vpn-0a1b2c3d4e5f67890" },
  DescribeVpnConnections: { VpnConnectionIds: ["vpn-0a1b2c3d4e5f67890"] },
  // DHCP
  DeleteDhcpOptions: { DhcpOptionsId: "dopt-0a1b2c3d4e5f67890" },
  DescribeDhcpOptions: { DhcpOptionsIds: ["dopt-0a1b2c3d4e5f67890"] },
  // Keys
  DeleteKeyPair: { KeyName: "nonexistent-key-12345" },
  DescribeKeyPairs: { KeyNames: ["nonexistent-key-12345"] },
  // Addresses
  DescribeAddresses: { AllocationIds: ["eipalloc-0a1b2c3d4e5f6789"] },
  // Egress-only IGW
  DeleteEgressOnlyInternetGateway: {
    EgressOnlyInternetGatewayId: "eigw-0a1b2c3d4e5f67890",
  },
  DescribeEgressOnlyInternetGateways: {
    EgressOnlyInternetGatewayIds: ["eigw-0a1b2c3d4e5f67890"],
  },
};

async function testOp(opName: string) {
  const params = opParams[opName];
  if (!params) return { op: opName, error: null, skip: "no params" };

  const methodName = opName.charAt(0).toLowerCase() + opName.slice(1);
  const method = (client as any)[methodName];
  if (!method) return { op: opName, error: null, skip: "no method" };

  try {
    await Effect.runPromise(method.call(client, params));
    return { op: opName, error: null, skip: "no error" };
  } catch (e: any) {
    // Extract error code from various possible locations
    let code = e?._tag || e?.name || e?.Code || e?.code;
    // Handle Effect's FiberFailure wrapper - look for the actual error inside
    if (e?.toString) {
      const str = e.toString();
      // Extract error code pattern like "InvalidVpcID.NotFound" or "NatGatewayMalformed"
      const match = str.match(
        /Invalid[\w.]+|[\w]+NotFound|[\w]+Malformed|[\w]+LimitExceeded|DependencyViolation|InsufficientInstanceCapacity/,
      );
      if (match) code = match[0];
    }
    return { op: opName, error: code || "Unknown" };
  }
}

const ops = Object.keys(servicePatches.ec2).filter(
  (op) => op.startsWith("Delete") || op.startsWith("Describe"),
);

console.log(`Testing ${ops.length} operations...\n`);

for (const op of ops) {
  const { error, skip } = await testOp(op);
  const expected = servicePatches.ec2[op]?.errors ?? [];
  const match = error ? expected.includes(error) : false;
  const icon = skip ? "⏭️" : match ? "✅" : "⚠️";
  console.log(
    `${icon} ${op}: ${error ?? skip} (expected: ${expected.join(", ") || "none"})`,
  );
}
