#!/usr/bin/env bun
/**
 * Service Operations Extractor for itty-aws Bundle Comparison
 * 
 * This script scans all services in src/services/ and extracts:
 * - Service directory names
 * - Client class names 
 * - Available operations (methods)
 * 
 * Generated data is used by bundle-compare.ts to create comprehensive
 * bundle size comparisons across all AWS services.
 */

import fs from "node:fs";
import path from "node:path";

interface ServiceOperations {
  service: string;
  className: string;
  operations: string[];
}

function extractOperationsFromTypesFile(typesPath: string): { className: string; operations: string[] } | null {
  if (!fs.existsSync(typesPath)) {
    return null;
  }

  const content = fs.readFileSync(typesPath, 'utf8');
  
  // Find the main service class declaration
  const classMatch = content.match(/export declare class (\w+) extends AWSServiceClient \{([\s\S]*?)\n\}/);
  if (!classMatch) {
    return null;
  }

  const className = classMatch[1];
  const classBody = classMatch[2];

  // Extract method names (operations)
  const methodMatches = classBody.matchAll(/^\s+(\w+)\(/gm);
  const operations = Array.from(methodMatches, match => match[1]);

  return { className, operations };
}

function getAllServices(): ServiceOperations[] {
  const servicesDir = path.join(process.cwd(), 'src', 'services');
  const services: ServiceOperations[] = [];

  const serviceDirs = fs.readdirSync(servicesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .sort();

  for (const serviceDir of serviceDirs) {
    const typesPath = path.join(servicesDir, serviceDir, 'types.ts');
    const extracted = extractOperationsFromTypesFile(typesPath);
    
    if (extracted && extracted.operations.length > 0) {
      services.push({
        service: serviceDir,
        className: extracted.className,
        operations: extracted.operations
      });
    }
  }

  return services;
}

// Main execution
const services = getAllServices();
console.log(`Found ${services.length} services with operations`);

// Output sample for verification
services.slice(0, 5).forEach(({ service, className, operations }) => {
  console.log(`\n${service} (${className}): ${operations.length} operations`);
  console.log(`  Sample operations: ${operations.slice(0, 3).join(', ')}`);
});

// Output JSON for consumption by bundle-compare script
const outputPath = path.join(process.cwd(), 'scripts', 'fixtures', 'all-services-operations.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify({ services }, null, 2));

console.log(`\nWrote service operations to ${outputPath}`);