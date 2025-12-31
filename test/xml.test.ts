import * as S from "effect/Schema";
import { describe, expect, it } from "vitest";
import { formatXml, parseNode, parseXml } from "../src/xml.ts";

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
