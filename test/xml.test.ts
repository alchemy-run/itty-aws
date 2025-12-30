import * as S from "effect/Schema";
import { describe, expect, it } from "vitest";
import { formatXml } from "../src/xml.ts";

describe("formatXml", () => {
  describe("simple class schemas", () => {
    it("formats a simple class with string properties", () => {
      class Person extends S.Class<Person>("Person")({
        Name: S.String,
        Email: S.String,
      }) {}

      const value = new Person({ Name: "John", Email: "john@example.com" });
      expect(formatXml(Person, value)).toBe(
        "<Person><Name>John</Name><Email>john@example.com</Email></Person>"
      );
    });

    it("formats a class with number properties", () => {
      class Product extends S.Class<Product>("Product")({
        Id: S.Number,
        Price: S.Number,
      }) {}

      const value = new Product({ Id: 123, Price: 99.99 });
      expect(formatXml(Product, value)).toBe(
        "<Product><Id>123</Id><Price>99.99</Price></Product>"
      );
    });

    it("formats a class with boolean properties", () => {
      class Settings extends S.Class<Settings>("Settings")({
        Enabled: S.Boolean,
        Active: S.Boolean,
      }) {}

      const value = new Settings({ Enabled: true, Active: false });
      expect(formatXml(Settings, value)).toBe(
        "<Settings><Enabled>true</Enabled><Active>false</Active></Settings>"
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
        "<Item><Name>Widget</Name><Count>5</Count><Available>true</Available></Item>"
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
        "<Person><Name>John</Name><Address><Street>123 Main St</Street><City>Boston</City></Address></Person>"
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
        "<Address><Street>123 Main St</Street><City><Name>Boston</Name><Country><Name>USA</Name></Country></City></Address>"
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
        "<Tagging><TagSet><Tag><Key>Environment</Key><Value>Test</Value></Tag><Tag><Key>Project</Key><Value>itty-aws</Value></Tag></TagSet></Tagging>"
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
        "<Container><Items><Item><Name>Only One</Name></Item></Items></Container>"
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
        "<Resource><Tags><Tag><Key>env</Key></Tag><Tag><Key>team</Key></Tag></Tags><Labels><Label><Name>production</Name></Label></Labels></Resource>"
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
        "<Text><Content>He said &quot;hello&quot;</Content></Text>"
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
        "<Text><Content>&lt;script&gt;alert(&quot;XSS &amp; more&quot;)&lt;/script&gt;</Content></Text>"
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
        "<Person><Name>John</Name><Nickname>Johnny</Nickname></Person>"
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
      expect(formatXml(Temperature, value)).toBe(
        "<Temperature><Value>-10</Value></Temperature>"
      );
    });

    it("handles floating point numbers", () => {
      class Measurement extends S.Class<Measurement>("Measurement")({
        Value: S.Number,
      }) {}

      const value = new Measurement({ Value: 3.14159 });
      expect(formatXml(Measurement, value)).toBe(
        "<Measurement><Value>3.14159</Value></Measurement>"
      );
    });
  });
});

