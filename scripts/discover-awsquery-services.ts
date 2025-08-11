#!/usr/bin/env bun

/**
 * Discover AWS services that use the awsQuery protocol
 *
 * This script scans the aws-models directory to find all services
 * that use the aws.protocols#awsQuery trait.
 *
 * Usage:
 *   bun scripts/discover-awsquery-services.ts
 */

import fs from "node:fs";
import path from "node:path";

interface AwsQueryService {
  serviceId: string;
  serviceName: string;
  version: string;
  modelPath: string;
  endpointPrefix?: string;
}

function scanDirectory(dirPath: string): string[] {
  try {
    return fs
      .readdirSync(dirPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => path.join(dirPath, dirent.name));
  } catch {
    return [];
  }
}

function findModelFiles(serviceDir: string): string[] {
  const modelFiles: string[] = [];

  try {
    const servicePath = path.join(serviceDir, "service");
    if (!fs.existsSync(servicePath)) return modelFiles;

    const versionDirs = scanDirectory(servicePath);

    for (const versionDir of versionDirs) {
      const files = fs
        .readdirSync(versionDir)
        .filter((f) => f.endsWith(".json"));

      for (const file of files) {
        const filePath = path.join(versionDir, file);
        modelFiles.push(filePath);
      }
    }
  } catch (error) {
    console.warn(`Error scanning service directory ${serviceDir}:`, error);
  }

  return modelFiles;
}

function parseModelFile(filePath: string): any {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Error parsing model file ${filePath}:`, error);
    return null;
  }
}

function usesAwsQueryProtocol(model: any): boolean {
  if (!model?.shapes) return false;

  // Look for service shape with aws.protocols#awsQuery trait
  for (const [_shapeId, shape] of Object.entries<any>(model.shapes)) {
    if (shape.type === "service" && shape.traits?.["aws.protocols#awsQuery"]) {
      return true;
    }
  }
  return false;
}

function extractServiceMetadata(
  model: any,
  modelPath: string,
): AwsQueryService | null {
  if (!model?.shapes) return null;

  // Find the service shape
  for (const [shapeId, shape] of Object.entries<any>(model.shapes)) {
    if (shape.type === "service" && shape.traits?.["aws.protocols#awsQuery"]) {
      const serviceId = shape.traits?.["aws.api#service"]?.sdkId;
      const serviceName = serviceId || shapeId.split("#").pop();
      const version =
        shape.traits?.["aws.protocols#awsQuery"]?.version ||
        shape.traits?.["aws.api#service"]?.apiVersion ||
        extractVersionFromPath(modelPath);
      const endpointPrefix = shape.traits?.["aws.api#service"]?.endpointPrefix;

      return {
        serviceId: serviceId || serviceName,
        serviceName,
        version,
        modelPath,
        endpointPrefix,
      };
    }
  }

  return null;
}

function extractVersionFromPath(modelPath: string): string {
  // Extract version from path like: .../service/2010-05-08/sns-2010-05-08.json
  const pathParts = modelPath.split(path.sep);
  const versionMatch = pathParts.find((part) =>
    /^\d{4}-\d{2}-\d{2}$/.test(part),
  );
  return versionMatch || "unknown";
}

function discoverAwsQueryServices(): AwsQueryService[] {
  const services: AwsQueryService[] = [];
  const modelsPath = path.join(process.cwd(), "aws-models", "models");

  if (!fs.existsSync(modelsPath)) {
    console.error(`AWS models directory not found: ${modelsPath}`);
    console.error(
      "Please ensure the aws-models git submodule is initialized and updated.",
    );
    process.exit(1);
  }

  console.log(`Scanning for awsQuery services in: ${modelsPath}`);

  const serviceDirs = scanDirectory(modelsPath);

  for (const serviceDir of serviceDirs) {
    const serviceName = path.basename(serviceDir);
    console.log(`Checking service: ${serviceName}`);

    const modelFiles = findModelFiles(serviceDir);

    for (const modelFile of modelFiles) {
      const model = parseModelFile(modelFile);
      if (model && usesAwsQueryProtocol(model)) {
        const serviceMetadata = extractServiceMetadata(model, modelFile);
        if (serviceMetadata) {
          services.push(serviceMetadata);
          console.log(
            `  ✅ Found awsQuery service: ${serviceMetadata.serviceName} (${serviceMetadata.version})`,
          );
        }
      }
    }
  }

  return services;
}

function main() {
  console.log("🔍 Discovering AWS services that use awsQuery protocol...\n");

  const services = discoverAwsQueryServices();

  console.log("\n📊 Discovery Summary:");
  console.log(`Found ${services.length} services using awsQuery protocol:\n`);

  // Sort services by name for consistent output
  services.sort((a, b) => a.serviceName.localeCompare(b.serviceName));

  for (const service of services) {
    console.log(`  • ${service.serviceName} (${service.version})`);
    console.log(`    Service ID: ${service.serviceId}`);
    console.log(
      `    Model Path: ${path.relative(process.cwd(), service.modelPath)}`,
    );
    if (service.endpointPrefix) {
      console.log(`    Endpoint Prefix: ${service.endpointPrefix}`);
    }
    console.log();
  }

  // Write results to JSON file for use by other scripts
  const outputPath = path.join(process.cwd(), "awsquery-services.json");
  fs.writeFileSync(outputPath, JSON.stringify(services, null, 2));
  console.log(`📝 Service list written to: ${outputPath}`);

  return services;
}

// CLI handling
if (import.meta.main) {
  main();
}

export { discoverAwsQueryServices, type AwsQueryService };
