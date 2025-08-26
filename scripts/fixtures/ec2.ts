import { EC2 } from "../../dist/services/ec2/index.js";

export const eff = new EC2({ region: "us-east-1" }).describeInstances({});
