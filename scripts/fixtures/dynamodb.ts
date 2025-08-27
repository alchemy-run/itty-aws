import { DynamoDB } from "../../dist/services/dynamodb/index.js";

// Keep the effect in the bundle by exporting it
export const eff = new DynamoDB({ region: "us-east-1" }).listTables({});
