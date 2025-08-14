import { describe, expect, it } from "@effect/vitest";
import { Ec2QueryHandler } from "../../src/protocols/ec2-query.ts";

const handler = new Ec2QueryHandler();

describe("EC2 Query Protocol - Request Serialization", () => {
  it("should serialize simple string parameters", () => {
    const input = {
      Foo: "val1",
      Bar: "val2",
    };
    const result = handler.buildRequest(input, "TestOperation", {} as any);
    expect(result).toContain("Action=TestOperation");
    expect(result).toContain("Version=2016-11-15");
  });

  it("should serialize boolean parameters", () => {
    const input = {
      EnableFeature: true,
      DisableFeature: false,
    };
    const result = handler.buildRequest(input, "TestBooleans", {} as any);
    expect(result).toContain("Action=TestBooleans");
    expect(result).toContain("Version=2016-11-15");
  });

  it("should serialize numeric parameters", () => {
    const input = {
      IntValue: 42,
      FloatValue: 10.5,
    };
    const result = handler.buildRequest(input, "TestNumbers", {} as any);
    expect(result).toContain("Action=TestNumbers");
    expect(result).toContain("Version=2016-11-15");
  });

  it("should handle empty input", () => {
    const result = handler.buildRequest({}, "EmptyInput", {} as any);
    expect(result).toContain("Action=EmptyInput");
    expect(result).toContain("Version=2016-11-15");
  });

  it("should handle null input", () => {
    const result = handler.buildRequest(null, "NullInput", {} as any);
    expect(result).toContain("Action=NullInput");
    expect(result).toContain("Version=2016-11-15");
  });
});

describe("EC2 Query Protocol - Response Parsing", () => {
  it("should parse simple XML response", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<TestOperationResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>12345678-1234-1234-1234-123456789012</requestId>
    <stringValue>hello</stringValue>
    <intValue>42</intValue>
    <boolValue>true</boolValue>
</TestOperationResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(typeof result).toBe("object");
    expect(result.stringValue).toBe("hello");
    expect(result.intValue).toBe(42);
    expect(result.boolValue).toBe(true);
  });

  it("should parse XML response with lists", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<TestListsResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>12345678-1234-1234-1234-123456789012</requestId>
    <stringList>
        <member>foo</member>
        <member>bar</member>
        <member>baz</member>
    </stringList>
    <flattenedList>hello</flattenedList>
    <flattenedList>world</flattenedList>
</TestListsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.stringList).toBeDefined();
    expect(result.flattenedList).toBeDefined();
  });

  it("should parse XML response with nested structures", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<TestStructuresResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>12345678-1234-1234-1234-123456789012</requestId>
    <nestedStruct>
        <foo>nested value</foo>
        <bar>123</bar>
    </nestedStruct>
    <structList>
        <member>
            <name>item1</name>
            <value>value1</value>
        </member>
        <member>
            <name>item2</name>
            <value>value2</value>
        </member>
    </structList>
</TestStructuresResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.nestedStruct).toBeDefined();
    expect(result.structList).toBeDefined();
  });

  it("should handle empty XML response", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<EmptyResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>12345678-1234-1234-1234-123456789012</requestId>
</EmptyResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(typeof result).toBe("object");
  });

  it("should handle malformed XML gracefully", () => {
    const malformedXml = "not xml at all";
    const result = handler.parseResponse(malformedXml, 200);
    expect(result).toEqual({});
  });

  it("should handle empty response body", () => {
    const result = handler.parseResponse("", 200);
    expect(result).toEqual({});
  });
});

describe("EC2 Query Protocol - Error Handling", () => {
  it("should parse standard EC2 error response", () => {
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Errors>
        <Error>
            <Code>InvalidParameterValue</Code>
            <Message>The parameter value is not valid</Message>
        </Error>
    </Errors>
    <RequestID>12345678-1234-1234-1234-123456789012</RequestID>
</Response>`;

    const result = handler.parseError(errorXml, 400) as any;
    expect(result).toBeInstanceOf(Error);
    expect(result.name).toBe("InvalidParameterValue");
    expect(result.message).toBe("The parameter value is not valid");
    expect(result.$metadata.statusCode).toBe(400);
    expect(result.$metadata.requestId).toBe(
      "12345678-1234-1234-1234-123456789012",
    );
  });

  it("should parse alternative error response format", () => {
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<ErrorResponse>
    <Error>
        <Code>AccessDenied</Code>
        <Message>Access denied</Message>
    </Error>
    <RequestId>87654321-4321-4321-4321-210987654321</RequestId>
</ErrorResponse>`;

    const result = handler.parseError(errorXml, 403) as any;
    expect(result).toBeInstanceOf(Error);
    expect(result.name).toBe("AccessDenied");
    expect(result.message).toBe("Access denied");
    expect(result.$metadata.statusCode).toBe(403);
    expect(result.$metadata.requestId).toBe(
      "87654321-4321-4321-4321-210987654321",
    );
  });

  it("should handle error response with complex error data", () => {
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Errors>
        <Error>
            <Code>ComplexError</Code>
            <Message>Something went wrong</Message>
        </Error>
    </Errors>
    <RequestID>complex-error-id</RequestID>
</Response>`;

    const result = handler.parseError(errorXml, 400) as any;
    expect(result).toBeInstanceOf(Error);
    expect(result.name).toBe("ComplexError");
    expect(result.message).toBe("Something went wrong");
    expect(result.$metadata.requestId).toBe("complex-error-id");
  });

  it("should handle malformed error XML", () => {
    const malformedErrorXml = "not xml error";
    const result = handler.parseError(malformedErrorXml, 500) as any;
    expect(result).toBeInstanceOf(Error);
    expect(result.name).toBe("UnknownError");
    expect(result.message).toBe("Unknown error");
    expect(result.$metadata.statusCode).toBe(500);
  });

  it("should extract request ID from headers when not in XML", () => {
    const headers = new Headers();
    headers.set("x-amzn-RequestId", "header-request-id");

    const result = handler.parseError("invalid xml", 500, headers) as any;
    expect(result.$metadata.requestId).toBe("header-request-id");
  });
});

describe("EC2 Query Protocol - Data Type Handling", () => {
  it("should handle timestamp values", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<TimestampTestResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>test-id</requestId>
    <creationTime>2023-01-01T12:00:00.000Z</creationTime>
    <epochTime>1672574400</epochTime>
</TimestampTestResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.creationTime).toBe("2023-01-01T12:00:00.000Z");
    expect(result.epochTime).toBe(1672574400);
  });

  it("should handle blob values", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<BlobTestResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>test-id</requestId>
    <binaryData>aGVsbG8gd29ybGQ=</binaryData>
</BlobTestResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.binaryData).toBe("aGVsbG8gd29ybGQ=");
  });

  it("should handle special float values", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<FloatTestResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>test-id</requestId>
    <nanValue>NaN</nanValue>
    <positiveInfinity>Infinity</positiveInfinity>
    <negativeInfinity>-Infinity</negativeInfinity>
    <normalFloat>3.14159</normalFloat>
</FloatTestResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.normalFloat).toBe(Math.PI);
  });

  it("should handle enum values", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<EnumTestResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>test-id</requestId>
    <status>running</status>
    <enumList>
        <member>foo</member>
        <member>bar</member>
    </enumList>
</EnumTestResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.status).toBe("running");
    expect(result.enumList).toBeDefined();
  });
});

describe("EC2 Query Protocol - Edge Cases", () => {
  it("should handle response without namespace", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<TestResponse>
    <requestId>test-id</requestId>
    <value>test</value>
</TestResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.value).toBe("test");
  });

  it("should handle deeply nested structures", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<NestedTestResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>test-id</requestId>
    <level1>
        <level2>
            <level3>
                <level4>
                    <deepValue>found it</deepValue>
                </level4>
            </level3>
        </level2>
    </level1>
</NestedTestResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.level1?.level2?.level3?.level4?.deepValue).toBe("found it");
  });

  it("should handle mixed content types in lists", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<MixedListResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>test-id</requestId>
    <mixedList>
        <member>
            <stringValue>text</stringValue>
            <intValue>123</intValue>
            <boolValue>true</boolValue>
        </member>
        <member>
            <stringValue>more text</stringValue>
            <intValue>456</intValue>
            <boolValue>false</boolValue>
        </member>
    </mixedList>
</MixedListResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.mixedList).toBeDefined();
  });

  it("should handle single item lists", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<SingleItemListResponse xmlns="http://ec2.amazonaws.com/doc/2016-11-15/">
    <requestId>test-id</requestId>
    <items>
        <member>only-item</member>
    </items>
    <flattenedItems>single-flattened</flattenedItems>
</SingleItemListResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.items).toBeDefined();
    expect(result.flattenedItems).toBe("single-flattened");
  });

  it("should get correct headers for requests", () => {
    const headers = handler.getHeaders("TestAction", {} as any, "test body");
    expect(headers["Content-Type"]).toBe(
      "application/x-www-form-urlencoded; charset=utf-8",
    );
    expect(headers["User-Agent"]).toBe("itty-aws");
  });

  it("should have correct handler properties", () => {
    expect(handler.name).toBe("ec2Query");
    expect(handler.contentType).toBe(
      "application/x-www-form-urlencoded; charset=utf-8",
    );
  });
});
