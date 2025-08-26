import { AWS } from "../../dist/index.js";

export const eff = new AWS.S3({ region: "us-east-1" }).listBuckets({});
