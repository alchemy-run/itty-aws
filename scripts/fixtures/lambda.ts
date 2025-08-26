import { Lambda } from "../../dist/services/lambda/index.js";

// Keep the effect in the bundle by exporting it
export const eff = new Lambda({ region: "us-east-1" }).listFunctions({});
