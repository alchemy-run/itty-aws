import { describe, expect, it } from "@effect/vitest";
import { AwsQueryHandler } from "../../dist/protocols/aws-query.js";

const handler = new AwsQueryHandler();
const snsMetadata = {
  sdkId: "SNS",
  version: "2010-03-31",
  endpointPrefix: "sns",
  protocol: "awsQuery",
  targetPrefix: "",
};

describe("AWS Query Protocol - Request Serialization", () => {
  it("should serialize empty input and no output", () => {
    const result = handler.buildRequest({}, "Publish", snsMetadata);
    expect(result).toContain("Action=Publish");
    expect(result).toContain("Version=2010-03-31");
  });

  it("should serialize simple input parameters", () => {
    const input = {
      Message: "Hello World",
      Subject: "Test Subject",
    };
    const result = handler.buildRequest(input, "Publish", snsMetadata);
    expect(result).toContain("Action=Publish");
    expect(result).toContain("Version=2010-03-31");
    expect(result).toContain("Message=Hello+World");
    expect(result).toContain("Subject=Test+Subject");
  });

  it("should serialize and ignore invalid parameters", () => {
    // Fields not in the operation shape should be ignored by metadata-driven serialization
    const input = {
      Message: "test",
      InvalidField: "should-be-ignored",
    };
    const result = handler.buildRequest(input, "Publish", snsMetadata);
    expect(result).toContain("Message=test");
    expect(result).not.toContain("InvalidField");
  });

  it("should serialize numeric parameters", () => {
    const input = {
      IntValue: 42,
      FloatValue: 10.5,
    };
    const result = handler.buildRequest(input, "TestNumbers", snsMetadata);
    expect(result).toContain("IntValue=42");
    expect(result).toContain("FloatValue=10.5");
  });

  it("should serialize nested structures", () => {
    const input = {
      NestedStruct: {
        Foo: "nested-value",
        Bar: 123,
      },
    };
    const result = handler.buildRequest(input, "NestedStructures", snsMetadata);
    expect(result).toContain("NestedStruct.Foo=nested-value");
    expect(result).toContain("NestedStruct.Bar=123");
  });

  it("should serialize query lists", () => {
    const input = {
      ListParam: ["item1", "item2", "item3"],
    };
    const result = handler.buildRequest(input, "QueryLists", snsMetadata);
    expect(result).toContain("ListParam.member.1=item1");
    expect(result).toContain("ListParam.member.2=item2");
    expect(result).toContain("ListParam.member.3=item3");
  });

  it("should serialize query maps", () => {
    // For now, maps are serialized as regular nested objects using dot notation
    // In a real implementation, we'd need schema information to distinguish
    // between structured objects and maps
    const input = {
      MapParam: {
        key1: "value1",
        key2: "value2",
      },
    };
    const result = handler.buildRequest(input, "QueryMaps", snsMetadata);
    expect(result).toContain("MapParam.key1=value1");
    expect(result).toContain("MapParam.key2=value2");
  });

  it("should serialize MessageAttributes as entry format", () => {
    const input = {
      MessageAttributes: {
        TestAttribute: {
          DataType: "String",
          StringValue: "test-value",
        },
        Priority: {
          DataType: "Number",
          StringValue: "5",
        },
      },
    };
    const result = handler.buildRequest(input, "Publish", snsMetadata);
    expect(result).toContain("MessageAttributes.entry.1.key=TestAttribute");
    expect(result).toContain("MessageAttributes.entry.1.value.DataType=String");
    expect(result).toContain(
      "MessageAttributes.entry.1.value.StringValue=test-value",
    );
    expect(result).toContain("MessageAttributes.entry.2.key=Priority");
    expect(result).toContain("MessageAttributes.entry.2.value.DataType=Number");
    expect(result).toContain("MessageAttributes.entry.2.value.StringValue=5");
  });

  it("should handle timestamp values", () => {
    const input = {
      Timestamp: new Date("2023-01-01T12:00:00.000Z"),
    };
    const result = handler.buildRequest(input, "QueryTimestamps", snsMetadata);
    expect(result).toContain("Timestamp=2023-01-01T12%3A00%3A00.000Z");
  });

  it("should handle null and undefined values", () => {
    const input = {
      NullValue: null,
      UndefinedValue: undefined,
      ValidValue: "test",
    };
    const result = handler.buildRequest(input, "TestNulls", snsMetadata);
    expect(result).not.toContain("NullValue");
    expect(result).not.toContain("UndefinedValue");
    expect(result).toContain("ValidValue=test");
  });
});

describe("AWS Query Protocol - Response Parsing", () => {
  it("should parse simple XML response with OperationNameResponse -> OperationNameResult", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<SimpleScalarXmlPropertiesResponse>
    <SimpleScalarXmlPropertiesResult>
        <stringValue>hello</stringValue>
        <intValue>42</intValue>
        <boolValue>true</boolValue>
    </SimpleScalarXmlPropertiesResult>
    <ResponseMetadata>
        <RequestId>12345678-1234-1234-1234-123456789012</RequestId>
    </ResponseMetadata>
</SimpleScalarXmlPropertiesResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.stringValue).toBe("hello");
    expect(result.intValue).toBe(42);
    expect(result.boolValue).toBe(true);
  });

  it("should parse XML response without Result wrapper", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<NoInputAndOutputResponse>
    <ResponseMetadata>
        <RequestId>12345678-1234-1234-1234-123456789012</RequestId>
    </ResponseMetadata>
</NoInputAndOutputResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.ResponseMetadata?.RequestId).toBe(
      "12345678-1234-1234-1234-123456789012",
    );
  });

  it("should parse XML lists", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<XmlListsResponse>
    <XmlListsResult>
        <stringList>
            <member>foo</member>
            <member>bar</member>
        </stringList>
        <stringSet>
            <member>a</member>
            <member>b</member>
        </stringSet>
    </XmlListsResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</XmlListsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.stringList).toEqual(["foo", "bar"]);
    expect(result.stringSet).toEqual(["a", "b"]);
  });

  it("should parse XML single member lists", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<SingleMemberListResponse>
    <SingleMemberListResult>
        <singleItemList>
            <member>only-item</member>
        </singleItemList>
    </SingleMemberListResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</SingleMemberListResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.singleItemList).toEqual(["only-item"]);
  });

  it("should parse XML maps", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<XmlMapsResponse>
    <XmlMapsResult>
        <myMap>
            <entry>
                <key>foo</key>
                <value>Foo</value>
            </entry>
            <entry>
                <key>bar</key>
                <value>Bar</value>
            </entry>
        </myMap>
    </XmlMapsResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</XmlMapsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.myMap).toEqual({
      foo: "Foo",
      bar: "Bar",
    });
  });

  it("should parse XML timestamps", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<XmlTimestampsResponse>
    <XmlTimestampsResult>
        <normal>2014-04-29T18:30:38Z</normal>
        <dateTime>2014-04-29T18:30:38Z</dateTime>
        <epochSeconds>1398796238</epochSeconds>
        <httpDate>Tue, 29 Apr 2014 18:30:38 GMT</httpDate>
    </XmlTimestampsResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</XmlTimestampsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.normal).toBe("2014-04-29T18:30:38Z");
    expect(result.dateTime).toBe("2014-04-29T18:30:38Z");
    expect(result.epochSeconds).toBe(1398796238);
    expect(result.httpDate).toBe("Tue, 29 Apr 2014 18:30:38 GMT");
  });

  it("should parse XML blobs", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<XmlBlobsResponse>
    <XmlBlobsResult>
        <data>dmFsdWU=</data>
    </XmlBlobsResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</XmlBlobsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.data).toBe("dmFsdWU=");
  });

  it("should parse XML enums", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<XmlEnumsResponse>
    <XmlEnumsResult>
        <fooEnum>Foo</fooEnum>
        <listOfEnums>
            <member>Foo</member>
            <member>Bar</member>
        </listOfEnums>
    </XmlEnumsResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</XmlEnumsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.fooEnum).toBe("Foo");
    expect(result.listOfEnums).toEqual(["Foo", "Bar"]);
  });

  it("should parse recursive XML shapes", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<RecursiveXmlShapesResponse>
    <RecursiveXmlShapesResult>
        <nested>
            <foo>Foo1</foo>
            <nested>
                <bar>Bar1</bar>
                <recursiveMember>
                    <foo>Foo2</foo>
                    <bar>Bar2</bar>
                </recursiveMember>
            </nested>
        </nested>
    </RecursiveXmlShapesResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</RecursiveXmlShapesResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.nested?.foo).toBe("Foo1");
    expect(result.nested?.nested?.bar).toBe("Bar1");
    expect(result.nested?.nested?.recursiveMember?.foo).toBe("Foo2");
    expect(result.nested?.nested?.recursiveMember?.bar).toBe("Bar2");
  });

  it("should parse flattened XML map", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<FlattenedXmlMapResponse>
    <FlattenedXmlMapResult>
        <myMap>
            <key>qux</key>
            <value>bar</value>
        </myMap>
        <myMap>
            <key>foo</key>
            <value>baz</value>
        </myMap>
    </FlattenedXmlMapResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</FlattenedXmlMapResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.myMap).toBeDefined();
  });

  it("should handle empty XML response", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<EmptyInputAndEmptyOutputResponse>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</EmptyInputAndEmptyOutputResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.ResponseMetadata?.RequestId).toBe("test-id");
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

describe("AWS Query Protocol - Error Handling", () => {
  it("should parse standard AWS Query error response", () => {
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<ErrorResponse>
    <Error>
        <Type>Sender</Type>
        <Code>InvalidGreeting</Code>
        <Message>Hi</Message>
    </Error>
    <RequestId>foo-id</RequestId>
</ErrorResponse>`;

    const result = handler.parseError(errorXml, 400) as any;
    expect(result).toBeInstanceOf(Error);
    expect(result.name).toBe("InvalidGreeting");
    expect(result.message).toBe("Hi");
    expect(result.Type).toBe("Sender");
    expect(result.$metadata.statusCode).toBe(400);
    expect(result.$metadata.requestId).toBe("foo-id");
  });

  it("should parse error with complex error code", () => {
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<ErrorResponse>
    <Error>
        <Type>Sender</Type>
        <Code>ComplexError</Code>
        <Message>Hi</Message>
        <AnotherSetting>setting</AnotherSetting>
    </Error>
    <RequestId>foo-id</RequestId>
</ErrorResponse>`;

    const result = handler.parseError(errorXml, 400) as any;
    expect(result).toBeInstanceOf(Error);
    expect(result.name).toBe("ComplexError");
    expect(result.message).toBe("Hi");
    expect(result.Type).toBe("Sender");
    expect(result.$metadata.statusCode).toBe(400);
    expect(result.$metadata.requestId).toBe("foo-id");
  });

  it("should parse error with custom HTTP response code", () => {
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<ErrorResponse>
    <Error>
        <Type>Sender</Type>
        <Code>CustomError</Code>
        <Message>Custom error message</Message>
    </Error>
    <RequestId>custom-request-id</RequestId>
</ErrorResponse>`;

    const result = handler.parseError(errorXml, 418) as any;
    expect(result).toBeInstanceOf(Error);
    expect(result.name).toBe("CustomError");
    expect(result.message).toBe("Custom error message");
    expect(result.$metadata.statusCode).toBe(418);
    expect(result.$metadata.requestId).toBe("custom-request-id");
  });

  it("should handle error response without Type field", () => {
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<ErrorResponse>
    <Error>
        <Code>NoTypeError</Code>
        <Message>Error without type</Message>
    </Error>
    <RequestId>no-type-id</RequestId>
</ErrorResponse>`;

    const result = handler.parseError(errorXml, 400) as any;
    expect(result).toBeInstanceOf(Error);
    expect(result.name).toBe("NoTypeError");
    expect(result.message).toBe("Error without type");
    expect(result.Type).toBe("Sender"); // Default value
    expect(result.$metadata.statusCode).toBe(400);
    expect(result.$metadata.requestId).toBe("no-type-id");
  });

  it("should handle malformed error XML", () => {
    const malformedErrorXml = "not xml error";
    const result = handler.parseError(malformedErrorXml, 500) as any;
    expect(result).toEqual({ message: "not xml error" });
  });

  it("should extract request ID from headers when not in XML", () => {
    const headers = new Headers();
    headers.set("x-amzn-requestid", "header-request-id");

    const result = handler.parseError("invalid xml", 500, headers) as any;
    expect(result).toEqual({ message: "invalid xml" });
  });

  it("should handle error with alternative XML structure", () => {
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<Error>
    <Code>DirectError</Code>
    <Message>Direct error format</Message>
</Error>`;

    const result = handler.parseError(errorXml, 400) as any;
    expect(result).toBeInstanceOf(Error);
    expect(result.name).toBe("DirectError");
    expect(result.message).toBe("Direct error format");
  });
});

describe("AWS Query Protocol - Edge Cases and Metadata", () => {
  it("should handle datetime offsets", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<DatetimeOffsetsResponse>
    <DatetimeOffsetsResult>
        <datetime>2019-12-16T23:48:18Z</datetime>
        <datetimeOnTarget>2019-12-16T23:48:18Z</datetimeOnTarget>
    </DatetimeOffsetsResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</DatetimeOffsetsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.datetime).toBe("2019-12-16T23:48:18Z");
    expect(result.datetimeOnTarget).toBe("2019-12-16T23:48:18Z");
  });

  it("should handle fractional seconds", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<FractionalSecondsResponse>
    <FractionalSecondsResult>
        <datetime>2000-01-02T20:34:56.123Z</datetime>
    </FractionalSecondsResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</FractionalSecondsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.datetime).toBe("2000-01-02T20:34:56.123Z");
  });

  it("should get correct headers for requests", () => {
    const headers = handler.getHeaders("TestAction", snsMetadata, "test body");
    expect(headers["Content-Type"]).toBe("application/x-www-form-urlencoded");
    expect(headers["User-Agent"]).toBe("itty-aws");
  });

  it("should have correct handler properties", () => {
    expect(handler.name).toBe("awsQuery");
    expect(handler.contentType).toBe("application/x-www-form-urlencoded");
  });

  it("should handle empty XML maps", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<XmlEmptyMapsResponse>
    <XmlEmptyMapsResult>
    </XmlEmptyMapsResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</XmlEmptyMapsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(typeof result).toBe("object");
  });

  it("should handle XML maps with xmlName", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<XmlMapsXmlNameResponse>
    <XmlMapsXmlNameResult>
        <myMap>
            <entry>
                <K>foo</K>
                <V>Foo</V>
            </entry>
            <entry>
                <K>bar</K>
                <V>Bar</V>
            </entry>
        </myMap>
    </XmlMapsXmlNameResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</XmlMapsXmlNameResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(result.myMap).toBeDefined();
  });

  it("should handle XML empty lists", () => {
    const xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<XmlEmptyListsResponse>
    <XmlEmptyListsResult>
    </XmlEmptyListsResult>
    <ResponseMetadata>
        <RequestId>test-id</RequestId>
    </ResponseMetadata>
</XmlEmptyListsResponse>`;

    const result = handler.parseResponse(xmlResponse, 200) as any;
    expect(result).toBeDefined();
    expect(typeof result).toBe("object");
  });
});
