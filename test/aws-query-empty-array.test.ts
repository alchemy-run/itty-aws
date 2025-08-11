import { describe, test, expect } from "vitest";
import { AwsQueryHandler } from "../src/protocols/aws-query.ts";

describe("AwsQuery empty array handling", () => {
  test("should handle empty DBInstances array correctly", () => {
    const handler = new AwsQueryHandler();
    
    // Simulate AWS response with empty DBInstances
    const xmlResponse = `
      <DescribeDBInstancesResponse xmlns="http://rds.amazonaws.com/doc/2014-10-31/">
        <DescribeDBInstancesResult>
          <DBInstances></DBInstances>
          <Marker></Marker>
        </DescribeDBInstancesResult>
        <ResponseMetadata>
          <RequestId>example-request-id</RequestId>
        </ResponseMetadata>
      </DescribeDBInstancesResponse>
    `;

    const result = handler.parseResponse(xmlResponse, 200);
    
    console.log("Parsed result:", JSON.stringify(result, null, 2));
    
    // DBInstances should be an empty array, not an empty string
    expect(result.DBInstances).toEqual([]);
    expect(Array.isArray(result.DBInstances)).toBe(true);
  });

  test("should handle non-empty DBInstances array correctly", () => {
    const handler = new AwsQueryHandler();
    
    // Simulate AWS response with one DB instance
    const xmlResponse = `
      <DescribeDBInstancesResponse xmlns="http://rds.amazonaws.com/doc/2014-10-31/">
        <DescribeDBInstancesResult>
          <DBInstances>
            <member>
              <DBInstanceIdentifier>test-db</DBInstanceIdentifier>
              <DBInstanceClass>db.t3.micro</DBInstanceClass>
              <Engine>mysql</Engine>
            </member>
          </DBInstances>
          <Marker></Marker>
        </DescribeDBInstancesResult>
        <ResponseMetadata>
          <RequestId>example-request-id</RequestId>
        </ResponseMetadata>
      </DescribeDBInstancesResponse>
    `;

    const result = handler.parseResponse(xmlResponse, 200);
    
    console.log("Parsed result with data:", JSON.stringify(result, null, 2));
    
    // DBInstances should be an array with one item
    expect(Array.isArray(result.DBInstances)).toBe(true);
    expect(result.DBInstances).toHaveLength(1);
  });
});