import { Effect } from "effect";
import {
  createTable,
  deleteItem,
  deleteTable,
  describeTable,
  getItem,
  listTables,
  putItem,
  query,
  scan,
  updateItem,
} from "../../src/services/dynamodb.ts";
import { test } from "../test.ts";

const TEST_TABLE_NAME = "itty-aws-test-table";

// Helper to wait for table to become active
function waitForTableActive(tableName: string) {
  return Effect.gen(function* () {
    let attempts = 0;
    const maxAttempts = 30;

    while (attempts < maxAttempts) {
      const result = yield* describeTable({ TableName: tableName });
      const status = result.Table?.TableStatus;

      if (status === "ACTIVE") {
        return result;
      }

      if (status === "DELETING") {
        return yield* Effect.fail(new Error("Table is being deleted"));
      }

      yield* Effect.sleep("1 second");
      attempts++;
    }

    return yield* Effect.fail(new Error("Table did not become active"));
  });
}

// Helper to ensure cleanup happens even on failure
function withTable<A, E, R>(
  testFn: (tableName: string) => Effect.Effect<A, E, R>,
) {
  return Effect.gen(function* () {
    const tableName = TEST_TABLE_NAME;

    // Clean up any existing table first
    yield* deleteTable({ TableName: tableName }).pipe(Effect.ignore);
    yield* Effect.sleep("1 second");

    // Create table with simple key schema
    yield* createTable({
      TableName: tableName,
      KeySchema: [
        { AttributeName: "pk", KeyType: "HASH" },
        { AttributeName: "sk", KeyType: "RANGE" },
      ],
      AttributeDefinitions: [
        { AttributeName: "pk", AttributeType: "S" },
        { AttributeName: "sk", AttributeType: "S" },
      ],
      BillingMode: "PAY_PER_REQUEST",
    });

    // Wait for table to become active
    yield* waitForTableActive(tableName);

    return yield* testFn(tableName).pipe(
      Effect.ensuring(
        deleteTable({ TableName: tableName }).pipe(Effect.ignore),
      ),
    );
  });
}

// ============================================================================
// Table Management Tests
// ============================================================================

test(
  "create table, describe table, list tables, and delete table",
  withTable((tableName) =>
    Effect.gen(function* () {
      // Describe table
      const describeResult = yield* describeTable({ TableName: tableName });

      if (describeResult.Table?.TableName !== tableName) {
        return yield* Effect.fail(
          new Error(
            `Table name mismatch: expected ${tableName}, got ${describeResult.Table?.TableName}`,
          ),
        );
      }

      if (describeResult.Table?.TableStatus !== "ACTIVE") {
        return yield* Effect.fail(
          new Error(
            `Expected TableStatus=ACTIVE, got ${describeResult.Table?.TableStatus}`,
          ),
        );
      }

      // Verify key schema
      const keySchema = describeResult.Table?.KeySchema;
      if (!keySchema || keySchema.length !== 2) {
        return yield* Effect.fail(
          new Error(`Expected 2 key attributes, got ${keySchema?.length}`),
        );
      }

      const hashKey = keySchema.find((k) => k.KeyType === "HASH");
      if (hashKey?.AttributeName !== "pk") {
        return yield* Effect.fail(
          new Error(`Expected HASH key=pk, got ${hashKey?.AttributeName}`),
        );
      }

      // List tables and verify our table is in the list
      const listResult = yield* listTables({});
      const foundTable = listResult.TableNames?.find((t) => t === tableName);
      if (!foundTable) {
        return yield* Effect.fail(new Error("Table not found in list"));
      }
    }),
  ),
);

// ============================================================================
// Item CRUD Tests
// ============================================================================

test(
  "putItem and getItem",
  withTable((tableName) =>
    Effect.gen(function* () {
      // DynamoDB uses AttributeValue tagged union - { S: string }, { N: string }, { BOOL: boolean }, etc.
      const item = {
        pk: { S: "user#123" },
        sk: { S: "profile" },
        name: { S: "John Doe" },
        email: { S: "john@example.com" },
        age: { N: "30" }, // Numbers are sent as strings in DynamoDB
        active: { BOOL: true },
      };

      // Put item
      yield* putItem({
        TableName: tableName,
        Item: item,
      });

      // Get item
      const getResult = yield* getItem({
        TableName: tableName,
        Key: {
          pk: { S: "user#123" },
          sk: { S: "profile" },
        },
      });

      if (!getResult.Item) {
        return yield* Effect.fail(new Error("Item not found"));
      }

      // Verify item attributes - DynamoDB returns AttributeValue tagged union
      const resultPk = getResult.Item.pk as { S: string };
      const resultSk = getResult.Item.sk as { S: string };
      const resultName = getResult.Item.name as { S: string };
      const resultEmail = getResult.Item.email as { S: string };

      if (resultPk.S !== "user#123") {
        return yield* Effect.fail(
          new Error(`pk mismatch: expected user#123, got ${resultPk.S}`),
        );
      }
      if (resultSk.S !== "profile") {
        return yield* Effect.fail(
          new Error(`sk mismatch: expected profile, got ${resultSk.S}`),
        );
      }
      if (resultName.S !== "John Doe") {
        return yield* Effect.fail(
          new Error(`name mismatch: expected John Doe, got ${resultName.S}`),
        );
      }
      if (resultEmail.S !== "john@example.com") {
        return yield* Effect.fail(
          new Error(
            `email mismatch: expected john@example.com, got ${resultEmail.S}`,
          ),
        );
      }
    }),
  ),
);

test(
  "putItem with condition expression",
  withTable((tableName) =>
    Effect.gen(function* () {
      const item = {
        pk: { S: "user#456" },
        sk: { S: "profile" },
        name: { S: "Jane Doe" },
        version: { N: "1" },
      };

      // Put item
      yield* putItem({
        TableName: tableName,
        Item: item,
      });

      // Try to put with condition that item doesn't exist (should fail)
      const conditionalPutResult = yield* putItem({
        TableName: tableName,
        Item: {
          ...item,
          version: { N: "2" },
        },
        ConditionExpression: "attribute_not_exists(pk)",
      }).pipe(
        Effect.map(() => "success" as const),
        Effect.catchAll(() => Effect.succeed("error" as const)),
      );

      if (conditionalPutResult !== "error") {
        return yield* Effect.fail(
          new Error("Conditional put should have failed"),
        );
      }

      // Conditional put with correct condition should succeed
      yield* putItem({
        TableName: tableName,
        Item: { ...item, version: { N: "2" } },
        ConditionExpression: "attribute_exists(pk)",
      });

      // Verify update
      const getResult = yield* getItem({
        TableName: tableName,
        Key: { pk: { S: "user#456" }, sk: { S: "profile" } },
      });

      const version = getResult.Item?.version as { N: string } | undefined;
      if (version?.N !== "2") {
        return yield* Effect.fail(
          new Error(`Expected version=2, got ${version?.N}`),
        );
      }
    }),
  ),
);

test(
  "updateItem",
  withTable((tableName) =>
    Effect.gen(function* () {
      const item = {
        pk: { S: "user#789" },
        sk: { S: "profile" },
        name: { S: "Bob Smith" },
        count: { N: "0" },
      };

      // Put initial item
      yield* putItem({
        TableName: tableName,
        Item: item,
      });

      // Update item
      yield* updateItem({
        TableName: tableName,
        Key: { pk: { S: "user#789" }, sk: { S: "profile" } },
        UpdateExpression: "SET #name = :newName, #count = #count + :inc",
        ExpressionAttributeNames: {
          "#name": "name",
          "#count": "count",
        },
        ExpressionAttributeValues: {
          ":newName": { S: "Robert Smith" },
          ":inc": { N: "1" },
        },
      });

      // Verify update
      const getResult = yield* getItem({
        TableName: tableName,
        Key: { pk: { S: "user#789" }, sk: { S: "profile" } },
      });

      const name = getResult.Item?.name as { S: string } | undefined;
      if (name?.S !== "Robert Smith") {
        return yield* Effect.fail(
          new Error(`Expected name=Robert Smith, got ${name?.S}`),
        );
      }

      // DynamoDB returns numbers as strings in the N field
      const count = getResult.Item?.count as { N: string } | undefined;
      if (count?.N !== "1") {
        return yield* Effect.fail(
          new Error(`Expected count=1, got ${count?.N}`),
        );
      }
    }),
  ),
);

test(
  "deleteItem",
  withTable((tableName) =>
    Effect.gen(function* () {
      const item = {
        pk: { S: "user#delete" },
        sk: { S: "profile" },
        name: { S: "Delete Me" },
      };

      // Put item
      yield* putItem({
        TableName: tableName,
        Item: item,
      });

      // Verify item exists
      const getBeforeDelete = yield* getItem({
        TableName: tableName,
        Key: { pk: { S: "user#delete" }, sk: { S: "profile" } },
      });

      if (!getBeforeDelete.Item) {
        return yield* Effect.fail(new Error("Item should exist before delete"));
      }

      // Delete item
      yield* deleteItem({
        TableName: tableName,
        Key: { pk: { S: "user#delete" }, sk: { S: "profile" } },
      });

      // Verify item is gone
      const getAfterDelete = yield* getItem({
        TableName: tableName,
        Key: { pk: { S: "user#delete" }, sk: { S: "profile" } },
      });

      if (getAfterDelete.Item) {
        return yield* Effect.fail(
          new Error("Item should not exist after delete"),
        );
      }
    }),
  ),
);

// ============================================================================
// Query and Scan Tests
// ============================================================================

test(
  "query items by partition key",
  withTable((tableName) =>
    Effect.gen(function* () {
      // Insert multiple items with same partition key
      const items = [
        {
          pk: { S: "order#100" },
          sk: { S: "item#1" },
          product: { S: "Widget" },
          quantity: { N: "2" },
        },
        {
          pk: { S: "order#100" },
          sk: { S: "item#2" },
          product: { S: "Gadget" },
          quantity: { N: "1" },
        },
        {
          pk: { S: "order#100" },
          sk: { S: "item#3" },
          product: { S: "Gizmo" },
          quantity: { N: "5" },
        },
        {
          pk: { S: "order#101" },
          sk: { S: "item#1" },
          product: { S: "Other" },
          quantity: { N: "1" },
        },
      ];

      for (const item of items) {
        yield* putItem({
          TableName: tableName,
          Item: item,
        });
      }

      // Query by partition key
      const queryResult = yield* query({
        TableName: tableName,
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
          ":pk": { S: "order#100" },
        },
      });

      if (queryResult.Count !== 3) {
        return yield* Effect.fail(
          new Error(`Expected Count=3, got ${queryResult.Count}`),
        );
      }

      if (!queryResult.Items || queryResult.Items.length !== 3) {
        return yield* Effect.fail(
          new Error(`Expected 3 items, got ${queryResult.Items?.length ?? 0}`),
        );
      }

      // Verify items are sorted by sort key
      const sortKeys = queryResult.Items.map(
        (item) => (item.sk as { S: string }).S,
      );
      const expectedSortKeys = ["item#1", "item#2", "item#3"];
      for (let i = 0; i < expectedSortKeys.length; i++) {
        if (sortKeys[i] !== expectedSortKeys[i]) {
          return yield* Effect.fail(
            new Error(
              `Sort key mismatch at index ${i}: expected ${expectedSortKeys[i]}, got ${sortKeys[i]}`,
            ),
          );
        }
      }
    }),
  ),
);

test(
  "query with sort key condition",
  withTable((tableName) =>
    Effect.gen(function* () {
      // Insert items
      const items = [
        {
          pk: { S: "user#1" },
          sk: { S: "order#2023-01-01" },
          total: { N: "100" },
        },
        {
          pk: { S: "user#1" },
          sk: { S: "order#2023-06-15" },
          total: { N: "250" },
        },
        {
          pk: { S: "user#1" },
          sk: { S: "order#2024-01-01" },
          total: { N: "175" },
        },
        { pk: { S: "user#1" }, sk: { S: "profile" }, name: { S: "User One" } },
      ] as const;

      for (const item of items) {
        yield* putItem({
          TableName: tableName,
          Item: item,
        });
      }

      // Query orders in 2023 using begins_with
      const queryResult = yield* query({
        TableName: tableName,
        KeyConditionExpression: "pk = :pk AND begins_with(sk, :skPrefix)",
        ExpressionAttributeValues: {
          ":pk": { S: "user#1" },
          ":skPrefix": { S: "order#2023" },
        },
      });

      if (queryResult.Count !== 2) {
        return yield* Effect.fail(
          new Error(
            `Expected Count=2 for 2023 orders, got ${queryResult.Count}`,
          ),
        );
      }

      // Query with ScanIndexForward = false (descending order)
      const queryDescResult = yield* query({
        TableName: tableName,
        KeyConditionExpression: "pk = :pk AND begins_with(sk, :skPrefix)",
        ExpressionAttributeValues: {
          ":pk": { S: "user#1" },
          ":skPrefix": { S: "order#" },
        },
        ScanIndexForward: false,
      });

      if (!queryDescResult.Items || queryDescResult.Items.length !== 3) {
        return yield* Effect.fail(
          new Error(
            `Expected 3 order items, got ${queryDescResult.Items?.length}`,
          ),
        );
      }

      // First item should be the latest order
      const firstSk = (queryDescResult.Items[0].sk as { S: string }).S;
      if (firstSk !== "order#2024-01-01") {
        return yield* Effect.fail(
          new Error(`Expected first item to be 2024 order, got ${firstSk}`),
        );
      }
    }),
  ),
);

test(
  "scan with filter expression",
  withTable((tableName) =>
    Effect.gen(function* () {
      // Insert items
      const items = [
        {
          pk: { S: "product#1" },
          sk: { S: "info" },
          name: { S: "Widget" },
          price: { N: "10" },
          inStock: { BOOL: true },
        },
        {
          pk: { S: "product#2" },
          sk: { S: "info" },
          name: { S: "Gadget" },
          price: { N: "25" },
          inStock: { BOOL: false },
        },
        {
          pk: { S: "product#3" },
          sk: { S: "info" },
          name: { S: "Gizmo" },
          price: { N: "15" },
          inStock: { BOOL: true },
        },
        {
          pk: { S: "product#4" },
          sk: { S: "info" },
          name: { S: "Thing" },
          price: { N: "50" },
          inStock: { BOOL: true },
        },
      ];

      for (const item of items) {
        yield* putItem({
          TableName: tableName,
          Item: item,
        });
      }

      // Scan all items
      const scanAllResult = yield* scan({
        TableName: tableName,
      });

      if (scanAllResult.Count !== 4) {
        return yield* Effect.fail(
          new Error(`Expected 4 total items, got ${scanAllResult.Count}`),
        );
      }

      // Scan with filter for inStock = true
      const scanFilteredResult = yield* scan({
        TableName: tableName,
        FilterExpression: "inStock = :inStock",
        ExpressionAttributeValues: {
          ":inStock": { BOOL: true },
        },
      });

      if (scanFilteredResult.Count !== 3) {
        return yield* Effect.fail(
          new Error(
            `Expected 3 in-stock items, got ${scanFilteredResult.Count}`,
          ),
        );
      }

      // Scan with filter for price > 20
      const scanPriceResult = yield* scan({
        TableName: tableName,
        FilterExpression: "price > :minPrice",
        ExpressionAttributeValues: {
          ":minPrice": { N: "20" },
        },
      });

      if (scanPriceResult.Count !== 2) {
        return yield* Effect.fail(
          new Error(
            `Expected 2 items with price > 20, got ${scanPriceResult.Count}`,
          ),
        );
      }
    }),
  ),
);

// ============================================================================
// Projection Expression Tests
// ============================================================================

test(
  "getItem with projection expression",
  withTable((tableName) =>
    Effect.gen(function* () {
      const item = {
        pk: { S: "user#proj" },
        sk: { S: "profile" },
        name: { S: "Projection Test" },
        email: { S: "proj@test.com" },
        password: { S: "secret" },
        age: { N: "25" },
      };

      yield* putItem({
        TableName: tableName,
        Item: item,
      });

      // Get with projection - only retrieve specific attributes
      const getResult = yield* getItem({
        TableName: tableName,
        Key: { pk: { S: "user#proj" }, sk: { S: "profile" } },
        ProjectionExpression: "#name, email",
        ExpressionAttributeNames: {
          "#name": "name",
        },
      });

      if (!getResult.Item) {
        return yield* Effect.fail(new Error("Item not found"));
      }

      // Should have name and email
      const name = getResult.Item.name as { S: string } | undefined;
      const email = getResult.Item.email as { S: string } | undefined;
      if (name?.S !== "Projection Test") {
        return yield* Effect.fail(new Error("name should be in projection"));
      }
      if (email?.S !== "proj@test.com") {
        return yield* Effect.fail(new Error("email should be in projection"));
      }

      // Should NOT have password (not in projection)
      if (getResult.Item.password !== undefined) {
        return yield* Effect.fail(
          new Error("password should NOT be in projection"),
        );
      }
    }),
  ),
);
