import * as S from "effect/Schema";
import { describe, expect, it } from "vitest";
import * as A from "../src/annotations.ts";
import * as S3 from "../src/services/s3.ts";
import { formatXml, parseNode, parseXml } from "../src/util/xml.ts";

describe("formatXml", () => {
  describe("simple class schemas", () => {
    it("formats a simple class with string properties", () => {
      class Person extends S.Class<Person>("Person")({
        Name: S.String,
        Email: S.String,
      }) {}

      const value = new Person({ Name: "John", Email: "john@example.com" });
      expect(formatXml(Person, value)).toBe(
        "<Person><Name>John</Name><Email>john@example.com</Email></Person>",
      );
    });

    it("formats a class with number properties", () => {
      class Product extends S.Class<Product>("Product")({
        Id: S.Number,
        Price: S.Number,
      }) {}

      const value = new Product({ Id: 123, Price: 99.99 });
      expect(formatXml(Product, value)).toBe("<Product><Id>123</Id><Price>99.99</Price></Product>");
    });

    it("formats a class with boolean properties", () => {
      class Settings extends S.Class<Settings>("Settings")({
        Enabled: S.Boolean,
        Active: S.Boolean,
      }) {}

      const value = new Settings({ Enabled: true, Active: false });
      expect(formatXml(Settings, value)).toBe(
        "<Settings><Enabled>true</Enabled><Active>false</Active></Settings>",
      );
    });

    it("formats a class with mixed property types", () => {
      class Item extends S.Class<Item>("Item")({
        Name: S.String,
        Count: S.Number,
        Available: S.Boolean,
      }) {}

      const value = new Item({ Name: "Widget", Count: 5, Available: true });
      expect(formatXml(Item, value)).toBe(
        "<Item><Name>Widget</Name><Count>5</Count><Available>true</Available></Item>",
      );
    });
  });

  describe("nested class schemas", () => {
    it("formats nested classes", () => {
      class Address extends S.Class<Address>("Address")({
        Street: S.String,
        City: S.String,
      }) {}

      class Person extends S.Class<Person>("Person")({
        Name: S.String,
        Address: Address,
      }) {}

      const value = new Person({
        Name: "John",
        Address: new Address({ Street: "123 Main St", City: "Boston" }),
      });

      expect(formatXml(Person, value)).toBe(
        "<Person><Name>John</Name><Address><Street>123 Main St</Street><City>Boston</City></Address></Person>",
      );
    });

    it("formats deeply nested classes", () => {
      class Country extends S.Class<Country>("Country")({
        Name: S.String,
      }) {}

      class City extends S.Class<City>("City")({
        Name: S.String,
        Country: Country,
      }) {}

      class Address extends S.Class<Address>("Address")({
        Street: S.String,
        City: City,
      }) {}

      const value = new Address({
        Street: "123 Main St",
        City: new City({
          Name: "Boston",
          Country: new Country({ Name: "USA" }),
        }),
      });

      expect(formatXml(Address, value)).toBe(
        "<Address><Street>123 Main St</Street><City><Name>Boston</Name><Country><Name>USA</Name></Country></City></Address>",
      );
    });
  });

  describe("array schemas", () => {
    it("formats arrays with class elements (S3 Tagging example)", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);
      class Tagging extends S.Class<Tagging>("Tagging")({
        TagSet: TagSet,
      }) {}

      const value = new Tagging({
        TagSet: [
          new Tag({ Key: "Environment", Value: "Test" }),
          new Tag({ Key: "Project", Value: "itty-aws" }),
        ],
      });

      expect(formatXml(Tagging, value)).toBe(
        "<Tagging><TagSet><Tag><Key>Environment</Key><Value>Test</Value></Tag><Tag><Key>Project</Key><Value>itty-aws</Value></Tag></TagSet></Tagging>",
      );
    });

    it("formats empty arrays", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);
      class Tagging extends S.Class<Tagging>("Tagging")({
        TagSet: TagSet,
      }) {}

      const value = new Tagging({ TagSet: [] });

      expect(formatXml(Tagging, value)).toBe("<Tagging><TagSet></TagSet></Tagging>");
    });

    it("formats single item arrays", () => {
      class Item extends S.Class<Item>("Item")({
        Name: S.String,
      }) {}
      const Items = S.Array(Item);
      class Container extends S.Class<Container>("Container")({
        Items: Items,
      }) {}

      const value = new Container({
        Items: [new Item({ Name: "Only One" })],
      });

      expect(formatXml(Container, value)).toBe(
        "<Container><Items><Item><Name>Only One</Name></Item></Items></Container>",
      );
    });

    it("formats multiple arrays in same class", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
      }) {}
      class Label extends S.Class<Label>("Label")({
        Name: S.String,
      }) {}

      class Resource extends S.Class<Resource>("Resource")({
        Tags: S.Array(Tag),
        Labels: S.Array(Label),
      }) {}

      const value = new Resource({
        Tags: [new Tag({ Key: "env" }), new Tag({ Key: "team" })],
        Labels: [new Label({ Name: "production" })],
      });

      expect(formatXml(Resource, value)).toBe(
        "<Resource><Tags><Tag><Key>env</Key></Tag><Tag><Key>team</Key></Tag></Tags><Labels><Label><Name>production</Name></Label></Labels></Resource>",
      );
    });
  });

  describe("XML escaping", () => {
    it("escapes ampersands", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const value = new Text({ Content: "Tom & Jerry" });
      expect(formatXml(Text, value)).toBe("<Text><Content>Tom &amp; Jerry</Content></Text>");
    });

    it("escapes less-than signs", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const value = new Text({ Content: "a < b" });
      expect(formatXml(Text, value)).toBe("<Text><Content>a &lt; b</Content></Text>");
    });

    it("escapes greater-than signs", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const value = new Text({ Content: "a > b" });
      expect(formatXml(Text, value)).toBe("<Text><Content>a &gt; b</Content></Text>");
    });

    it("escapes quotes", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const value = new Text({ Content: 'He said "hello"' });
      expect(formatXml(Text, value)).toBe(
        "<Text><Content>He said &quot;hello&quot;</Content></Text>",
      );
    });

    it("escapes apostrophes", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const value = new Text({ Content: "It's working" });
      expect(formatXml(Text, value)).toBe("<Text><Content>It&apos;s working</Content></Text>");
    });

    it("escapes multiple special characters", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const value = new Text({ Content: '<script>alert("XSS & more")</script>' });
      expect(formatXml(Text, value)).toBe(
        "<Text><Content>&lt;script&gt;alert(&quot;XSS &amp; more&quot;)&lt;/script&gt;</Content></Text>",
      );
    });
  });

  describe("optional properties", () => {
    it("omits undefined optional properties", () => {
      class Person extends S.Class<Person>("Person")({
        Name: S.String,
        Nickname: S.optional(S.String),
      }) {}

      const value = new Person({ Name: "John" });
      expect(formatXml(Person, value)).toBe("<Person><Name>John</Name></Person>");
    });

    it("includes defined optional properties", () => {
      class Person extends S.Class<Person>("Person")({
        Name: S.String,
        Nickname: S.optional(S.String),
      }) {}

      const value = new Person({ Name: "John", Nickname: "Johnny" });
      expect(formatXml(Person, value)).toBe(
        "<Person><Name>John</Name><Nickname>Johnny</Nickname></Person>",
      );
    });
  });

  describe("edge cases", () => {
    it("handles empty strings", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const value = new Text({ Content: "" });
      expect(formatXml(Text, value)).toBe("<Text><Content></Content></Text>");
    });

    it("handles zero values", () => {
      class Count extends S.Class<Count>("Count")({
        Value: S.Number,
      }) {}

      const value = new Count({ Value: 0 });
      expect(formatXml(Count, value)).toBe("<Count><Value>0</Value></Count>");
    });

    it("handles false boolean values", () => {
      class Flag extends S.Class<Flag>("Flag")({
        Enabled: S.Boolean,
      }) {}

      const value = new Flag({ Enabled: false });
      expect(formatXml(Flag, value)).toBe("<Flag><Enabled>false</Enabled></Flag>");
    });

    it("handles negative numbers", () => {
      class Temperature extends S.Class<Temperature>("Temperature")({
        Value: S.Number,
      }) {}

      const value = new Temperature({ Value: -10 });
      expect(formatXml(Temperature, value)).toBe("<Temperature><Value>-10</Value></Temperature>");
    });

    it("handles floating point numbers", () => {
      class Measurement extends S.Class<Measurement>("Measurement")({
        Value: S.Number,
      }) {}

      const value = new Measurement({ Value: 3.14159 });
      expect(formatXml(Measurement, value)).toBe(
        "<Measurement><Value>3.14159</Value></Measurement>",
      );
    });
  });
});

describe("parseXml", () => {
  describe("simple class schemas", () => {
    it("parses a simple class with string properties", () => {
      class Person extends S.Class<Person>("Person")({
        Name: S.String,
        Email: S.String,
      }) {}

      const xml = "<Person><Name>John</Name><Email>john@example.com</Email></Person>";
      const result = parseXml(Person, xml);
      expect(result).toEqual({ Name: "John", Email: "john@example.com" });
    });

    it("parses a class with number properties", () => {
      class Product extends S.Class<Product>("Product")({
        Id: S.Number,
        Price: S.Number,
      }) {}

      const xml = "<Product><Id>123</Id><Price>99.99</Price></Product>";
      const result = parseXml(Product, xml);
      expect(result).toEqual({ Id: 123, Price: 99.99 });
    });

    it("parses a class with boolean properties", () => {
      class Settings extends S.Class<Settings>("Settings")({
        Enabled: S.Boolean,
        Active: S.Boolean,
      }) {}

      const xml = "<Settings><Enabled>true</Enabled><Active>false</Active></Settings>";
      const result = parseXml(Settings, xml);
      expect(result).toEqual({ Enabled: true, Active: false });
    });

    it("parses a class with mixed property types", () => {
      class Item extends S.Class<Item>("Item")({
        Name: S.String,
        Count: S.Number,
        Available: S.Boolean,
      }) {}

      const xml = "<Item><Name>Widget</Name><Count>5</Count><Available>true</Available></Item>";
      const result = parseXml(Item, xml);
      expect(result).toEqual({ Name: "Widget", Count: 5, Available: true });
    });
  });

  describe("nested class schemas", () => {
    it("parses nested classes", () => {
      class Address extends S.Class<Address>("Address")({
        Street: S.String,
        City: S.String,
      }) {}

      class Person extends S.Class<Person>("Person")({
        Name: S.String,
        Address: Address,
      }) {}

      const xml =
        "<Person><Name>John</Name><Address><Street>123 Main St</Street><City>Boston</City></Address></Person>";
      const result = parseXml(Person, xml);
      expect(result).toEqual({
        Name: "John",
        Address: { Street: "123 Main St", City: "Boston" },
      });
    });

    it("parses deeply nested classes", () => {
      class Country extends S.Class<Country>("Country")({
        Name: S.String,
      }) {}

      class City extends S.Class<City>("City")({
        Name: S.String,
        Country: Country,
      }) {}

      class Address extends S.Class<Address>("Address")({
        Street: S.String,
        City: City,
      }) {}

      const xml =
        "<Address><Street>123 Main St</Street><City><Name>Boston</Name><Country><Name>USA</Name></Country></City></Address>";
      const result = parseXml(Address, xml);
      expect(result).toEqual({
        Street: "123 Main St",
        City: {
          Name: "Boston",
          Country: { Name: "USA" },
        },
      });
    });
  });

  describe("array schemas", () => {
    it("parses arrays with class elements (S3 Tagging example)", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);
      class Tagging extends S.Class<Tagging>("Tagging")({
        TagSet: TagSet,
      }) {}

      const xml =
        "<Tagging><TagSet><Tag><Key>Environment</Key><Value>Test</Value></Tag><Tag><Key>Project</Key><Value>itty-aws</Value></Tag></TagSet></Tagging>";
      const result = parseXml(Tagging, xml);
      expect(result).toEqual({
        TagSet: [
          { Key: "Environment", Value: "Test" },
          { Key: "Project", Value: "itty-aws" },
        ],
      });
    });

    it("parses single item arrays (AWS returns object instead of array)", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);
      class Tagging extends S.Class<Tagging>("Tagging")({
        TagSet: TagSet,
      }) {}

      // When AWS returns a single item, it might be parsed as an object, not an array
      const xml =
        "<Tagging><TagSet><Tag><Key>Environment</Key><Value>Test</Value></Tag></TagSet></Tagging>";
      const result = parseXml(Tagging, xml);
      expect(result).toEqual({
        TagSet: [{ Key: "Environment", Value: "Test" }],
      });
    });

    it("parses empty arrays (missing element)", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);
      class Tagging extends S.Class<Tagging>("Tagging")({
        TagSet: TagSet,
      }) {}

      // When AWS returns no items, TagSet might be empty or missing
      const xml = "<Tagging><TagSet></TagSet></Tagging>";
      const result = parseXml(Tagging, xml);
      expect(result).toEqual({ TagSet: [] });
    });

    it("parses XML with declaration and namespace (AWS S3 response format)", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);
      class Tagging extends S.Class<Tagging>("Tagging")({
        TagSet: TagSet,
      }) {}

      const xml =
        '<?xml version="1.0" encoding="UTF-8"?>\n<Tagging xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><TagSet><Tag><Key>Project</Key><Value>itty-aws</Value></Tag><Tag><Key>Environment</Key><Value>Test</Value></Tag></TagSet></Tagging>';
      const result = parseXml(Tagging, xml);
      expect(result).toEqual({
        TagSet: [
          { Key: "Project", Value: "itty-aws" },
          { Key: "Environment", Value: "Test" },
        ],
      });
    });

    it("parses array directly without wrapper element (TagSet without Tagging)", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);

      const xml =
        "<TagSet><Tag><Key>Project</Key><Value>itty-aws</Value></Tag><Tag><Key>Environment</Key><Value>Test</Value></Tag></TagSet>";
      const result = parseXml(TagSet, xml);
      expect(result).toEqual([
        { Key: "Project", Value: "itty-aws" },
        { Key: "Environment", Value: "Test" },
      ]);
    });

    it("parses multiple arrays in same class", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
      }) {}
      class Label extends S.Class<Label>("Label")({
        Name: S.String,
      }) {}

      class Resource extends S.Class<Resource>("Resource")({
        Tags: S.Array(Tag),
        Labels: S.Array(Label),
      }) {}

      const xml =
        "<Resource><Tags><Tag><Key>env</Key></Tag><Tag><Key>team</Key></Tag></Tags><Labels><Label><Name>production</Name></Label></Labels></Resource>";
      const result = parseXml(Resource, xml);
      expect(result).toEqual({
        Tags: [{ Key: "env" }, { Key: "team" }],
        Labels: [{ Name: "production" }],
      });
    });
  });

  describe("optional properties", () => {
    it("handles missing optional properties", () => {
      class Person extends S.Class<Person>("Person")({
        Name: S.String,
        Nickname: S.optional(S.String),
      }) {}

      const xml = "<Person><Name>John</Name></Person>";
      const result = parseXml(Person, xml);
      expect(result).toEqual({ Name: "John" });
    });

    it("parses defined optional properties", () => {
      class Person extends S.Class<Person>("Person")({
        Name: S.String,
        Nickname: S.optional(S.String),
      }) {}

      const xml = "<Person><Name>John</Name><Nickname>Johnny</Nickname></Person>";
      const result = parseXml(Person, xml);
      expect(result).toEqual({ Name: "John", Nickname: "Johnny" });
    });
  });

  describe("XML unescaping", () => {
    it("unescapes ampersands", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const xml = "<Text><Content>Tom &amp; Jerry</Content></Text>";
      const result = parseXml(Text, xml);
      expect(result).toEqual({ Content: "Tom & Jerry" });
    });

    it("unescapes less-than signs", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const xml = "<Text><Content>a &lt; b</Content></Text>";
      const result = parseXml(Text, xml);
      expect(result).toEqual({ Content: "a < b" });
    });

    it("unescapes greater-than signs", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const xml = "<Text><Content>a &gt; b</Content></Text>";
      const result = parseXml(Text, xml);
      expect(result).toEqual({ Content: "a > b" });
    });

    it("unescapes quotes", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const xml = "<Text><Content>He said &quot;hello&quot;</Content></Text>";
      const result = parseXml(Text, xml);
      expect(result).toEqual({ Content: 'He said "hello"' });
    });

    it("unescapes apostrophes", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const xml = "<Text><Content>It&apos;s working</Content></Text>";
      const result = parseXml(Text, xml);
      expect(result).toEqual({ Content: "It's working" });
    });
  });

  describe("edge cases", () => {
    it("handles empty strings", () => {
      class Text extends S.Class<Text>("Text")({
        Content: S.String,
      }) {}

      const xml = "<Text><Content></Content></Text>";
      const result = parseXml(Text, xml);
      expect(result).toEqual({ Content: "" });
    });

    it("handles zero values", () => {
      class Count extends S.Class<Count>("Count")({
        Value: S.Number,
      }) {}

      const xml = "<Count><Value>0</Value></Count>";
      const result = parseXml(Count, xml);
      expect(result).toEqual({ Value: 0 });
    });

    it("handles negative numbers", () => {
      class Temperature extends S.Class<Temperature>("Temperature")({
        Value: S.Number,
      }) {}

      const xml = "<Temperature><Value>-10</Value></Temperature>";
      const result = parseXml(Temperature, xml);
      expect(result).toEqual({ Value: -10 });
    });

    it("handles floating point numbers", () => {
      class Measurement extends S.Class<Measurement>("Measurement")({
        Value: S.Number,
      }) {}

      const xml = "<Measurement><Value>3.14159</Value></Measurement>";
      const result = parseXml(Measurement, xml);
      expect(result).toEqual({ Value: 3.14159 });
    });
  });

  describe("date handling", () => {
    it("returns date values as strings (for schema to decode)", () => {
      class Event extends S.Class<Event>("Event")({
        Name: S.String,
        Timestamp: S.String, // Using String to verify what parseXml returns
      }) {}

      const xml = `<Event><Name>test</Name><Timestamp>2025-12-30T14:59:22.000Z</Timestamp></Event>`;
      const result = parseXml(Event, xml);

      expect(result).toEqual({
        Name: "test",
        Timestamp: "2025-12-30T14:59:22.000Z",
      });
      expect(typeof result.Timestamp).toBe("string");

      // Verify full round-trip with schema decode
      const decoded = S.decodeUnknownSync(Event)(result);
      expect(decoded.Name).toBe("test");
      expect(decoded.Timestamp).toBe("2025-12-30T14:59:22.000Z");
    });

    it("returns date values as strings with S.Date schema and decodes to Date", () => {
      // Note: parseXml should return strings, Schema.decode handles the Date transformation
      class Event extends S.Class<Event>("Event")({
        Name: S.String,
        Timestamp: S.Date, // S.Date = DateFromString, expects string input
      }) {}

      const xml = `<Event><Name>test</Name><Timestamp>2025-12-30T14:59:22.000Z</Timestamp></Event>`;
      const result = parseXml(Event, xml);

      // parseXml should return a string, not a Date
      expect(typeof result.Timestamp).toBe("string");
      expect(result.Timestamp).toBe("2025-12-30T14:59:22.000Z");

      // Verify full round-trip with schema decode - should transform string to Date
      const decoded = S.decodeUnknownSync(Event)(result);
      expect(decoded.Name).toBe("test");
      expect(decoded.Timestamp).toBeInstanceOf(Date);
      expect(decoded.Timestamp.toISOString()).toBe("2025-12-30T14:59:22.000Z");
    });

    it("works with optional S.Date and decodes to Date", () => {
      class Event extends S.Class<Event>("Event")({
        Name: S.String,
        Timestamp: S.optional(S.Date),
      }) {}

      const xml = `<Event><Name>test</Name><Timestamp>2025-12-30T14:59:22.000Z</Timestamp></Event>`;
      const result = parseXml(Event, xml);

      expect(typeof result.Timestamp).toBe("string");
      expect(result.Timestamp).toBe("2025-12-30T14:59:22.000Z");

      // Verify full round-trip with schema decode
      const decoded = S.decodeUnknownSync(Event)(result);
      expect(decoded.Name).toBe("test");
      expect(decoded.Timestamp).toBeInstanceOf(Date);
      expect(decoded.Timestamp?.toISOString()).toBe("2025-12-30T14:59:22.000Z");
    });

    it("handles missing optional date", () => {
      class Event extends S.Class<Event>("Event")({
        Name: S.String,
        Timestamp: S.optional(S.Date),
      }) {}

      const xml = `<Event><Name>test</Name></Event>`;
      const result = parseXml(Event, xml);

      expect(result).toEqual({ Name: "test" });
      expect(result.Timestamp).toBeUndefined();

      // Verify full round-trip with schema decode
      const decoded = S.decodeUnknownSync(Event)(result);
      expect(decoded.Name).toBe("test");
      expect(decoded.Timestamp).toBeUndefined();
    });

    it("works with optional S.Date in nested array (like S3 Buckets)", () => {
      class Bucket extends S.Class<Bucket>("Bucket")({
        Name: S.optional(S.String),
        CreationDate: S.optional(S.Date),
      }) {}
      const Buckets = S.Array(Bucket);

      class ListBucketsOutput extends S.Class<ListBucketsOutput>("ListBucketsOutput")({
        Buckets: S.optional(Buckets),
      }) {}

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <Buckets>
    <Bucket>
      <Name>test-bucket</Name>
      <CreationDate>2025-12-30T14:59:22.000Z</CreationDate>
    </Bucket>
  </Buckets>
</ListAllMyBucketsResult>`;

      const result = parseXml(ListBucketsOutput, xml, "ListAllMyBucketsResult");

      // Verify parseXml returns strings
      expect(result.Buckets[0].CreationDate).toBe("2025-12-30T14:59:22.000Z");
      expect(typeof result.Buckets[0].CreationDate).toBe("string");

      // Verify full round-trip with schema decode
      const decoded = S.decodeUnknownSync(ListBucketsOutput)(result);
      expect(decoded.Buckets?.[0].Name).toBe("test-bucket");
      expect(decoded.Buckets?.[0].CreationDate).toBeInstanceOf(Date);
      expect(decoded.Buckets?.[0].CreationDate?.toISOString()).toBe("2025-12-30T14:59:22.000Z");
    });
  });

  describe("xmlName parameter (S3 GetObjectTaggingOutput pattern)", () => {
    it("parses XML with different root tag using xmlName", () => {
      // This mimics GetObjectTaggingOutput which has xmlName="Tagging"
      // but the schema only contains TagSet at root level
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);

      // Schema is GetObjectTaggingOutput with TagSet property
      // but XML comes wrapped in <Tagging>
      class GetObjectTaggingOutput extends S.Class<GetObjectTaggingOutput>(
        "GetObjectTaggingOutput",
      )({
        TagSet: TagSet,
      }) {}

      const xml = `<Tagging>
        <TagSet>
          <Tag>
            <Key>Environment</Key>
            <Value>Test</Value>
          </Tag>
          <Tag>
            <Key>Project</Key>
            <Value>itty-aws</Value>
          </Tag>
        </TagSet>
      </Tagging>`;

      // Without xmlName, it would look for GetObjectTaggingOutput tag
      // With xmlName="Tagging", it unwraps the Tagging tag first
      const result = parseXml(GetObjectTaggingOutput, xml, "Tagging");
      expect(result).toEqual({
        TagSet: [
          { Key: "Environment", Value: "Test" },
          { Key: "Project", Value: "itty-aws" },
        ],
      });
    });

    it("parses XML with xmlName and single item array", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);

      class GetObjectTaggingOutput extends S.Class<GetObjectTaggingOutput>(
        "GetObjectTaggingOutput",
      )({
        TagSet: TagSet,
      }) {}

      const xml = `<Tagging>
        <TagSet>
          <Tag>
            <Key>SingleKey</Key>
            <Value>SingleValue</Value>
          </Tag>
        </TagSet>
      </Tagging>`;

      const result = parseXml(GetObjectTaggingOutput, xml, "Tagging");
      expect(result).toEqual({
        TagSet: [{ Key: "SingleKey", Value: "SingleValue" }],
      });
    });

    it("parses XML with xmlName and empty TagSet", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);

      class GetObjectTaggingOutput extends S.Class<GetObjectTaggingOutput>(
        "GetObjectTaggingOutput",
      )({
        TagSet: TagSet,
      }) {}

      const xml = `<Tagging><TagSet></TagSet></Tagging>`;

      const result = parseXml(GetObjectTaggingOutput, xml, "Tagging");
      expect(result).toEqual({ TagSet: [] });
    });

    it("parses real AWS S3 GetObjectTagging response format", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);

      class GetObjectTaggingOutput extends S.Class<GetObjectTaggingOutput>(
        "GetObjectTaggingOutput",
      )({
        TagSet: TagSet,
      }) {}

      // Actual AWS response format with XML declaration and namespace
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<Tagging xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <TagSet>
    <Tag>
      <Key>Project</Key>
      <Value>itty-aws</Value>
    </Tag>
    <Tag>
      <Key>Environment</Key>
      <Value>Test</Value>
    </Tag>
  </TagSet>
</Tagging>`;

      const result = parseXml(GetObjectTaggingOutput, xml, "Tagging");
      expect(result).toEqual({
        TagSet: [
          { Key: "Project", Value: "itty-aws" },
          { Key: "Environment", Value: "Test" },
        ],
      });
    });

    it("falls back to schema identifier when xmlName not found", () => {
      class SimpleOutput extends S.Class<SimpleOutput>("SimpleOutput")({
        Value: S.String,
      }) {}

      // XML uses the schema identifier
      const xml = `<SimpleOutput><Value>test</Value></SimpleOutput>`;

      // Even with xmlName that doesn't match, it should still work
      // by falling back to the actual content
      const result = parseXml(SimpleOutput, xml, "NonExistentWrapper");
      expect(result).toEqual({ Value: "test" });
    });

    it("parses S3 ListBuckets response with ListAllMyBucketsResult wrapper", () => {
      class Owner extends S.Class<Owner>("Owner")({
        DisplayName: S.optional(S.String),
        ID: S.optional(S.String),
      }) {}

      class Bucket extends S.Class<Bucket>("Bucket")({
        Name: S.optional(S.String),
        CreationDate: S.optional(S.String),
        BucketArn: S.optional(S.String),
      }) {}
      const Buckets = S.Array(Bucket);

      class ListBucketsOutput extends S.Class<ListBucketsOutput>("ListBucketsOutput")({
        Buckets: S.optional(Buckets),
        Owner: S.optional(Owner),
        ContinuationToken: S.optional(S.String),
        Prefix: S.optional(S.String),
      }) {}

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <Owner>
    <ID>f9b07fb071cddc6ce4423228700b629f3bba6c2f93fd8d649a52232d0fd3cce0</ID>
  </Owner>
  <Buckets>
    <Bucket>
      <Name>alchemy-test</Name>
      <CreationDate>2025-12-30T14:59:22.000Z</CreationDate>
      <BucketArn>arn:aws:s3:::alchemy-test</BucketArn>
    </Bucket>
    <Bucket>
      <Name>itty-aws-test</Name>
      <CreationDate>2025-12-31T08:57:02.000Z</CreationDate>
      <BucketArn>arn:aws:s3:::itty-aws-test</BucketArn>
    </Bucket>
  </Buckets>
</ListAllMyBucketsResult>`;

      const result = parseXml(ListBucketsOutput, xml, "ListAllMyBucketsResult");
      expect(result).toEqual({
        Owner: {
          ID: "f9b07fb071cddc6ce4423228700b629f3bba6c2f93fd8d649a52232d0fd3cce0",
        },
        Buckets: [
          {
            Name: "alchemy-test",
            CreationDate: "2025-12-30T14:59:22.000Z",
            BucketArn: "arn:aws:s3:::alchemy-test",
          },
          {
            Name: "itty-aws-test",
            CreationDate: "2025-12-31T08:57:02.000Z",
            BucketArn: "arn:aws:s3:::itty-aws-test",
          },
        ],
      });
    });
  });
});

describe("parseNode", () => {
  describe("xmlName parameter", () => {
    it("unwraps xmlName wrapper before parsing struct", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);

      class GetObjectTaggingOutput extends S.Class<GetObjectTaggingOutput>(
        "GetObjectTaggingOutput",
      )({
        TagSet: TagSet,
      }) {}

      // Simulates parsed XML like { Tagging: { TagSet: { Tag: [...] } } }
      const parsedXml = {
        Tagging: {
          TagSet: {
            Tag: [
              { Key: "Environment", Value: "Test" },
              { Key: "Project", Value: "itty-aws" },
            ],
          },
        },
      };

      const result = parseNode(GetObjectTaggingOutput.ast, parsedXml, "Tagging");
      expect(result).toEqual({
        TagSet: [
          { Key: "Environment", Value: "Test" },
          { Key: "Project", Value: "itty-aws" },
        ],
      });
    });

    it("works without xmlName (no unwrapping needed)", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);

      class Tagging extends S.Class<Tagging>("Tagging")({
        TagSet: TagSet,
      }) {}

      // Already unwrapped
      const parsedXml = {
        TagSet: {
          Tag: [{ Key: "Environment", Value: "Test" }],
        },
      };

      const result = parseNode(Tagging.ast, parsedXml);
      expect(result).toEqual({
        TagSet: [{ Key: "Environment", Value: "Test" }],
      });
    });

    it("ignores xmlName if wrapper not found in value", () => {
      class SimpleOutput extends S.Class<SimpleOutput>("SimpleOutput")({
        Value: S.String,
      }) {}

      const parsedXml = { Value: "test" };

      // xmlName doesn't exist in the object, so it should just parse as-is
      const result = parseNode(SimpleOutput.ast, parsedXml, "NonExistent");
      expect(result).toEqual({ Value: "test" });
    });
  });
});

describe("A.Body annotation (raw body content)", () => {
  it("should NOT escape JSON content in body-annotated string fields", () => {
    // Simulates PutBucketPolicyRequest with a JSON policy body
    // The Policy field contains raw JSON that should NOT be XML-escaped
    class PutBucketPolicyRequest extends S.Class<PutBucketPolicyRequest>("PutBucketPolicyRequest")({
      Bucket: S.String,
      Policy: A.Body("Policy", S.String),
    }) {}

    const policyJson = JSON.stringify({
      Version: "2012-10-17",
      Statement: [
        {
          Sid: "TestStatement",
          Effect: "Deny",
          Principal: "*",
          Action: "s3:DeleteBucket",
          Resource: "arn:aws:s3:::itty-aws-test",
          Condition: {
            StringNotEquals: {
              "aws:PrincipalAccount": "000000000000",
            },
          },
        },
      ],
    });

    const value = new PutBucketPolicyRequest({
      Bucket: "itty-aws-test",
      Policy: policyJson,
    });

    // The raw Policy value should NOT have escaped quotes
    // Currently formatXml escapes quotes which breaks JSON:
    // Bad:  '{"Version":"2012-10-17"...}' becomes '{&quot;Version&quot;:&quot;2012-10-17&quot;...}'
    // Good: '{"Version":"2012-10-17"...}' stays as '{"Version":"2012-10-17"...}'
    const xml = formatXml(PutBucketPolicyRequest, value);

    // The Policy field should contain the raw JSON, not XML-escaped JSON
    expect(xml).toEqual(policyJson);
    expect(xml).not.toContain("&quot;");
  });

  it("should output only body content for class body-annotated fields (S3 PutObjectTagging pattern)", () => {
    // Simulates PutObjectTaggingRequest where Tagging is a class with Body annotation
    class Tag extends S.Class<Tag>("Tag")({ Key: S.String, Value: S.String }) {}
    const TagSet = S.Array(Tag);
    class Tagging extends S.Class<Tagging>("Tagging")({ TagSet: TagSet }) {}

    class PutObjectTaggingRequest extends S.Class<PutObjectTaggingRequest>(
      "PutObjectTaggingRequest",
    )({
      Bucket: S.String,
      Key: S.String,
      Tagging: A.Body("Tagging", Tagging),
    }) {}

    const value = new PutObjectTaggingRequest({
      Bucket: "my-bucket",
      Key: "my-key",
      Tagging: new Tagging({
        TagSet: [
          new Tag({ Key: "Environment", Value: "Test" }),
          new Tag({ Key: "Project", Value: "itty-aws" }),
        ],
      }),
    });

    const xml = formatXml(PutObjectTaggingRequest, value);

    // Should output ONLY the Tagging body content, not wrapped in PutObjectTaggingRequest
    expect(xml).toEqual(
      "<Tagging><TagSet><Tag><Key>Environment</Key><Value>Test</Value></Tag><Tag><Key>Project</Key><Value>itty-aws</Value></Tag></TagSet></Tagging>",
    );
    // Should NOT include the outer request wrapper or other fields
    expect(xml).not.toContain("<PutObjectTaggingRequest>");
    expect(xml).not.toContain("<Bucket>");
    expect(xml).not.toContain("<Key>my-key</Key>");
  });
});

describe("xmlName annotation on struct members", () => {
  describe("formatXml with xmlName annotations", () => {
    it("uses xmlName annotation for array elements (S3 CORS pattern)", () => {
      // Simulates AllowedMethods with xmlName="AllowedMethod"
      const AllowedMethods = S.Array(S.String);

      class CORSRule extends S.Class<CORSRule>("CORSRule")({
        AllowedMethods: AllowedMethods.pipe(A.XmlName("AllowedMethod")),
      }) {}

      const value = new CORSRule({
        AllowedMethods: ["GET", "PUT"],
      });

      // Should output <AllowedMethod>GET</AllowedMethod><AllowedMethod>PUT</AllowedMethod>
      // NOT <AllowedMethods>...</AllowedMethods>
      expect(formatXml(CORSRule, value)).toBe(
        "<CORSRule><AllowedMethod>GET</AllowedMethod><AllowedMethod>PUT</AllowedMethod></CORSRule>",
      );
    });

    it("uses xmlName annotation for multiple array properties", () => {
      const AllowedHeaders = S.Array(S.String);
      const AllowedMethods = S.Array(S.String);
      const AllowedOrigins = S.Array(S.String);

      class CORSRule extends S.Class<CORSRule>("CORSRule")({
        AllowedHeaders: S.optional(AllowedHeaders.pipe(A.XmlName("AllowedHeader"))),
        AllowedMethods: AllowedMethods.pipe(A.XmlName("AllowedMethod")),
        AllowedOrigins: AllowedOrigins.pipe(A.XmlName("AllowedOrigin")),
      }) {}

      const value = new CORSRule({
        AllowedHeaders: ["Content-Type", "Authorization"],
        AllowedMethods: ["GET", "POST"],
        AllowedOrigins: ["https://example.com"],
      });

      expect(formatXml(CORSRule, value)).toBe(
        "<CORSRule>" +
          "<AllowedHeader>Content-Type</AllowedHeader><AllowedHeader>Authorization</AllowedHeader>" +
          "<AllowedMethod>GET</AllowedMethod><AllowedMethod>POST</AllowedMethod>" +
          "<AllowedOrigin>https://example.com</AllowedOrigin>" +
          "</CORSRule>",
      );
    });

    it("handles empty array with xmlName annotation", () => {
      const AllowedMethods = S.Array(S.String);

      class CORSRule extends S.Class<CORSRule>("CORSRule")({
        AllowedMethods: AllowedMethods.pipe(A.XmlName("AllowedMethod")),
      }) {}

      const value = new CORSRule({
        AllowedMethods: [],
      });

      // Empty array should produce no elements
      expect(formatXml(CORSRule, value)).toBe("<CORSRule></CORSRule>");
    });

    it("handles single item array with xmlName annotation", () => {
      const AllowedMethods = S.Array(S.String);

      class CORSRule extends S.Class<CORSRule>("CORSRule")({
        AllowedMethods: AllowedMethods.pipe(A.XmlName("AllowedMethod")),
      }) {}

      const value = new CORSRule({
        AllowedMethods: ["GET"],
      });

      expect(formatXml(CORSRule, value)).toBe(
        "<CORSRule><AllowedMethod>GET</AllowedMethod></CORSRule>",
      );
    });

    it("uses xmlName annotation for nested class arrays", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);

      class Tagging extends S.Class<Tagging>("Tagging")({
        TagSet: TagSet.pipe(A.XmlName("Tag")),
      }) {}

      const value = new Tagging({
        TagSet: [
          new Tag({ Key: "env", Value: "test" }),
          new Tag({ Key: "project", Value: "demo" }),
        ],
      });

      // Each Tag should be wrapped directly in <Tag> without a <TagSet> wrapper
      expect(formatXml(Tagging, value)).toBe(
        "<Tagging>" +
          "<Tag><Key>env</Key><Value>test</Value></Tag>" +
          "<Tag><Key>project</Key><Value>demo</Value></Tag>" +
          "</Tagging>",
      );
    });
  });

  describe("parseXml with xmlName annotations", () => {
    it("parses flattened array elements using xmlName annotation", () => {
      const AllowedMethods = S.Array(S.String);

      class CORSRule extends S.Class<CORSRule>("CORSRule")({
        AllowedMethods: AllowedMethods.pipe(A.XmlName("AllowedMethod")),
      }) {}

      // XML has flattened <AllowedMethod> elements, not wrapped in <AllowedMethods>
      const xml =
        "<CORSRule><AllowedMethod>GET</AllowedMethod><AllowedMethod>PUT</AllowedMethod></CORSRule>";
      const result = parseXml(CORSRule, xml);
      expect(result).toEqual({
        AllowedMethods: ["GET", "PUT"],
      });
    });

    it("parses multiple flattened array properties", () => {
      const AllowedHeaders = S.Array(S.String);
      const AllowedMethods = S.Array(S.String);

      class CORSRule extends S.Class<CORSRule>("CORSRule")({
        AllowedHeaders: S.optional(AllowedHeaders.pipe(A.XmlName("AllowedHeader"))),
        AllowedMethods: AllowedMethods.pipe(A.XmlName("AllowedMethod")),
      }) {}

      const xml =
        "<CORSRule>" +
        "<AllowedHeader>Content-Type</AllowedHeader><AllowedHeader>Authorization</AllowedHeader>" +
        "<AllowedMethod>GET</AllowedMethod><AllowedMethod>POST</AllowedMethod>" +
        "</CORSRule>";
      const result = parseXml(CORSRule, xml);
      expect(result).toEqual({
        AllowedHeaders: ["Content-Type", "Authorization"],
        AllowedMethods: ["GET", "POST"],
      });
    });

    it("parses single item flattened array", () => {
      const AllowedMethods = S.Array(S.String);

      class CORSRule extends S.Class<CORSRule>("CORSRule")({
        AllowedMethods: AllowedMethods.pipe(A.XmlName("AllowedMethod")),
      }) {}

      const xml = "<CORSRule><AllowedMethod>GET</AllowedMethod></CORSRule>";
      const result = parseXml(CORSRule, xml);
      expect(result).toEqual({
        AllowedMethods: ["GET"],
      });
    });

    it("parses missing optional flattened array as undefined", () => {
      const AllowedHeaders = S.Array(S.String);

      class CORSRule extends S.Class<CORSRule>("CORSRule")({
        ID: S.optional(S.String),
        AllowedHeaders: S.optional(AllowedHeaders.pipe(A.XmlName("AllowedHeader"))),
      }) {}

      const xml = "<CORSRule><ID>rule-1</ID></CORSRule>";
      const result = parseXml(CORSRule, xml);
      expect(result).toEqual({
        ID: "rule-1",
      });
    });

    it("parses nested class arrays with xmlName annotation", () => {
      class Tag extends S.Class<Tag>("Tag")({
        Key: S.String,
        Value: S.String,
      }) {}
      const TagSet = S.Array(Tag);

      class Tagging extends S.Class<Tagging>("Tagging")({
        TagSet: TagSet.pipe(A.XmlName("Tag")),
      }) {}

      const xml =
        "<Tagging>" +
        "<Tag><Key>env</Key><Value>test</Value></Tag>" +
        "<Tag><Key>project</Key><Value>demo</Value></Tag>" +
        "</Tagging>";
      const result = parseXml(Tagging, xml);
      expect(result).toEqual({
        TagSet: [
          { Key: "env", Value: "test" },
          { Key: "project", Value: "demo" },
        ],
      });
    });
  });
});

// ============================================================================
// S3 API Request Serialization Tests
// These tests ensure XML serialization is correct for actual S3 API calls
// ============================================================================

describe("S3 API XML Serialization", () => {
  it("PutBucketTaggingRequest", () => {
    const request = new S3.PutBucketTaggingRequest({
      Bucket: "my-bucket",
      Tagging: new S3.Tagging({
        TagSet: [
          new S3.Tag({ Key: "Environment", Value: "Test" }),
          new S3.Tag({ Key: "Project", Value: "itty-aws" }),
          new S3.Tag({ Key: "Team", Value: "Platform" }),
        ],
      }),
    });

    const xml = formatXml(S3.PutBucketTaggingRequest, request);
    expect(xml).toEqual(
      "<Tagging><TagSet><Tag><Key>Environment</Key><Value>Test</Value></Tag><Tag><Key>Project</Key><Value>itty-aws</Value></Tag><Tag><Key>Team</Key><Value>Platform</Value></Tag></TagSet></Tagging>",
    );
  });

  it("PutBucketPolicyRequest", () => {
    const policy = JSON.stringify({
      Version: "2012-10-17",
      Statement: [
        {
          Sid: "TestStatement",
          Effect: "Deny",
          Principal: "*",
          Action: "s3:DeleteBucket",
          Resource: "arn:aws:s3:::my-bucket",
        },
      ],
    });

    const request = new S3.PutBucketPolicyRequest({
      Bucket: "my-bucket",
      Policy: policy,
    });

    const xml = formatXml(S3.PutBucketPolicyRequest, request);
    expect(xml).toEqual(policy);
  });

  it("PutBucketCorsRequest", () => {
    const request = new S3.PutBucketCorsRequest({
      Bucket: "my-bucket",
      CORSConfiguration: new S3.CORSConfiguration({
        CORSRules: [
          new S3.CORSRule({
            AllowedMethods: ["GET", "PUT"],
            AllowedOrigins: ["https://example.com"],
            AllowedHeaders: ["*"],
            MaxAgeSeconds: 3600,
          }),
        ],
      }),
    });

    const xml = formatXml(S3.PutBucketCorsRequest, request);
    expect(xml).toEqual(
      "<CORSConfiguration><CORSRule><AllowedHeader>*</AllowedHeader><AllowedMethod>GET</AllowedMethod><AllowedMethod>PUT</AllowedMethod><AllowedOrigin>https://example.com</AllowedOrigin><MaxAgeSeconds>3600</MaxAgeSeconds></CORSRule></CORSConfiguration>",
    );
  });

  it("PutBucketVersioningRequest", () => {
    const request = new S3.PutBucketVersioningRequest({
      Bucket: "my-bucket",
      VersioningConfiguration: new S3.VersioningConfiguration({
        Status: "Enabled",
      }),
    });

    const xml = formatXml(S3.PutBucketVersioningRequest, request);
    expect(xml).toEqual(
      "<VersioningConfiguration><Status>Enabled</Status></VersioningConfiguration>",
    );
  });

  it("PutBucketWebsiteRequest", () => {
    const request = new S3.PutBucketWebsiteRequest({
      Bucket: "my-bucket",
      WebsiteConfiguration: new S3.WebsiteConfiguration({
        IndexDocument: new S3.IndexDocument({ Suffix: "index.html" }),
        ErrorDocument: new S3.ErrorDocument({ Key: "error.html" }),
      }),
    });

    const xml = formatXml(S3.PutBucketWebsiteRequest, request);
    expect(xml).toEqual(
      "<WebsiteConfiguration><ErrorDocument><Key>error.html</Key></ErrorDocument><IndexDocument><Suffix>index.html</Suffix></IndexDocument></WebsiteConfiguration>",
    );
  });

  it("PutBucketEncryptionRequest", () => {
    const request = new S3.PutBucketEncryptionRequest({
      Bucket: "my-bucket",
      ServerSideEncryptionConfiguration: new S3.ServerSideEncryptionConfiguration({
        Rules: [
          new S3.ServerSideEncryptionRule({
            ApplyServerSideEncryptionByDefault: new S3.ServerSideEncryptionByDefault({
              SSEAlgorithm: "AES256",
            }),
            BucketKeyEnabled: true,
          }),
        ],
      }),
    });

    const xml = formatXml(S3.PutBucketEncryptionRequest, request);
    expect(xml).toEqual(
      "<ServerSideEncryptionConfiguration><Rule><ApplyServerSideEncryptionByDefault><SSEAlgorithm>AES256</SSEAlgorithm></ApplyServerSideEncryptionByDefault><BucketKeyEnabled>true</BucketKeyEnabled></Rule></ServerSideEncryptionConfiguration>",
    );
  });

  it("PutBucketLifecycleConfigurationRequest", () => {
    const request = new S3.PutBucketLifecycleConfigurationRequest({
      Bucket: "my-bucket",
      LifecycleConfiguration: new S3.BucketLifecycleConfiguration({
        Rules: [
          new S3.LifecycleRule({
            ID: "ExpireOldObjects",
            Status: "Enabled",
            Filter: new S3.LifecycleRuleFilter({ Prefix: "logs/" }),
            Expiration: new S3.LifecycleExpiration({ Days: 90 }),
          }),
        ],
      }),
    });

    const xml = formatXml(S3.PutBucketLifecycleConfigurationRequest, request);
    expect(xml).toEqual(
      "<BucketLifecycleConfiguration><Rule><Expiration><Days>90</Days></Expiration><ID>ExpireOldObjects</ID><Filter><Prefix>logs/</Prefix></Filter><Status>Enabled</Status></Rule></BucketLifecycleConfiguration>",
    );
  });

  it("PutPublicAccessBlockRequest", () => {
    const request = new S3.PutPublicAccessBlockRequest({
      Bucket: "my-bucket",
      PublicAccessBlockConfiguration: new S3.PublicAccessBlockConfiguration({
        BlockPublicAcls: true,
        IgnorePublicAcls: true,
        BlockPublicPolicy: true,
        RestrictPublicBuckets: true,
      }),
    });

    const xml = formatXml(S3.PutPublicAccessBlockRequest, request);
    expect(xml).toEqual(
      "<PublicAccessBlockConfiguration><BlockPublicAcls>true</BlockPublicAcls><IgnorePublicAcls>true</IgnorePublicAcls><BlockPublicPolicy>true</BlockPublicPolicy><RestrictPublicBuckets>true</RestrictPublicBuckets></PublicAccessBlockConfiguration>",
    );
  });

  it("PutBucketOwnershipControlsRequest", () => {
    const request = new S3.PutBucketOwnershipControlsRequest({
      Bucket: "my-bucket",
      OwnershipControls: new S3.OwnershipControls({
        Rules: [new S3.OwnershipControlsRule({ ObjectOwnership: "BucketOwnerEnforced" })],
      }),
    });

    const xml = formatXml(S3.PutBucketOwnershipControlsRequest, request);
    expect(xml).toEqual(
      "<OwnershipControls><Rule><ObjectOwnership>BucketOwnerEnforced</ObjectOwnership></Rule></OwnershipControls>",
    );
  });

  it("PutBucketAccelerateConfigurationRequest", () => {
    const request = new S3.PutBucketAccelerateConfigurationRequest({
      Bucket: "my-bucket",
      AccelerateConfiguration: new S3.AccelerateConfiguration({ Status: "Enabled" }),
    });

    const xml = formatXml(S3.PutBucketAccelerateConfigurationRequest, request);
    expect(xml).toEqual(
      "<AccelerateConfiguration><Status>Enabled</Status></AccelerateConfiguration>",
    );
  });

  it("PutBucketRequestPaymentRequest", () => {
    const request = new S3.PutBucketRequestPaymentRequest({
      Bucket: "my-bucket",
      RequestPaymentConfiguration: new S3.RequestPaymentConfiguration({ Payer: "Requester" }),
    });

    const xml = formatXml(S3.PutBucketRequestPaymentRequest, request);
    expect(xml).toEqual(
      "<RequestPaymentConfiguration><Payer>Requester</Payer></RequestPaymentConfiguration>",
    );
  });
});
