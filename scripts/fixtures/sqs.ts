import { SQS } from "../../dist/services/sqs/index.js";

// Keep the effect in the bundle by exporting it
export const eff = new SQS({ region: "us-east-1" }).listQueues({});
