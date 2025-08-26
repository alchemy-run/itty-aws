import { IAM } from "../../dist/services/iam/index.js";

export const eff = new IAM({ region: "us-east-1" }).listUsers({});
