import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";
import { Effect } from "effect";
import { commonAwsErrorNames, isCommonAwsErrorName } from "../src/error.ts";
import type { Manifest, Shape } from "./manifest.ts";
import { loadAllLocalManifests } from "./manifest.ts";
import { servicePatches } from "./service-patches.ts";

// Configuration flags
const INCLUDE_DOCUMENTATION = false; // Set to false to disable JSDoc comments

// Fields that should support streaming in addition to regular blob types
const STREAMING_FIELDS = new Set([
  "Body", // S3 GetObject response
  "body", // Bedrock and other services use lowercase
  "StreamingBody", // Some AWS services use this name
  "StreamingBlob", // Some AWS services use this name
  "BlobStream", // Some services use this pattern
  "ReadSetPartStreamingBlob", // Omics service
  "ReadSetStreamingBlob", // Omics service
  "ReferenceStreamingBlob", // Omics service
  "ResponseStream", // Bedrock and other services
  "InvokeArgs", // Lambda service
  "inputStream", // Lex services
  "audioStream", // Lex services
  "payload", // Omics service
]);

// Helper to extract service name from shape ID
const extractShapeName = (shapeId: string): string => {
  const parts = shapeId.split("#");
  return parts[1] || "";
};

// Helper to check if a type name conflicts with built-in TypeScript types
const getTypescriptSafeName = (
  shapeName: string,
  servicePrefix: string,
): string => {
  // List of names that conflict with global TypeScript types and reserved words
  const conflictingNames = new Set([
    // Capitalized built-in types
    "Date",
    "String",
    "Number",
    "Boolean",
    "Record",
    "Array",
    "Object",
    "Promise",
    "Function",
    "Error",
    "RegExp",
    "Map",
    "Set",
    "Symbol",
    "Uint8Array",
    "DataView",
    "ArrayBuffer",
    "JSON",
    "Math",
    "Console",
    // Lowercase primitive types and reserved words
    "string",
    "number",
    "boolean",
    "object",
    "undefined",
    "null",
    "void",
    "any",
    "unknown",
    "never",
    "bigint",
    "symbol",
    // TypeScript keywords
    "type",
    "interface",
    "enum",
    "class",
    "function",
    "var",
    "let",
    "const",
    "import",
    "export",
    "default",
    "namespace",
    "module",
    "declare",
    "abstract",
    "async",
    "await",
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "delete",
    "do",
    "else",
    "finally",
    "for",
    "if",
    "in",
    "instanceof",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "while",
    "with",
    "yield",
    // Browser/Node globals that could conflict
    "document",
    "window",
    "global",
    "process",
    "Buffer",
    "console",
  ]);

  if (conflictingNames.has(shapeName)) {
    // Prefix with service name to avoid conflicts
    return `${servicePrefix}${shapeName}`;
  }

  return shapeName;
};

// Helper to convert to lowerCamelCase
const toLowerCamelCase = (name: string): string => {
  return name.charAt(0).toLowerCase() + name.slice(1);
};

// Helper to check if a field is required
const isRequired = (traits: Record<string, any> | undefined): boolean => {
  return !!(traits && "smithy.api#required" in traits);
};

// Helper to sanitize error names from waitable traits (remove dots, etc.)
const sanitizeWaitableErrorName = (errorType: string): string => {
  // Replace dots with empty string to create valid TypeScript identifiers
  // e.g., "InvalidVpcID.NotFound" -> "InvalidVpcIDNotFound"
  return errorType.replace(/\./g, "");
};

// Helper to extract error types from waitable traits
const extractWaitableErrors = (
  traits: Record<string, any> | undefined,
): Array<{ original: string; sanitized: string }> => {
  if (!traits || !traits["smithy.waiters#waitable"]) return [];

  const waitable = traits["smithy.waiters#waitable"];
  const errors = new Set<string>();

  // Iterate through each waiter
  for (const [_waiterName, waiterConfig] of Object.entries(waitable)) {
    const config = waiterConfig as any;
    if (config.acceptors && Array.isArray(config.acceptors)) {
      for (const acceptor of config.acceptors) {
        if (acceptor.matcher?.errorType) {
          errors.add(acceptor.matcher.errorType);
        }
      }
    }
  }

  return Array.from(errors).map((errorType) => ({
    original: errorType,
    sanitized: sanitizeWaitableErrorName(errorType),
  }));
};

// Helper to get patched errors for an operation
const getPatchedErrors = (
  serviceName: string,
  operationName: string,
): Array<{ original: string; sanitized: string }> => {
  const patches = servicePatches[serviceName];
  if (!patches) return [];

  const operationPatch = patches[operationName];
  if (!operationPatch?.errors) return [];

  return operationPatch.errors.map((errorType) => ({
    original: errorType,
    sanitized: sanitizeWaitableErrorName(errorType),
  }));
};

// Type generation options
interface TypeGenOptions {
  manifest: Manifest;
  crossServiceImports?: Set<string>;
  typeNameMapping?: Map<string, string>;
  responseErrorTypeName?: string;
  inputShapes?: Set<string>;
  outputShapes?: Set<string>;
}

// Helper to determine if a field should support streaming
const shouldSupportStreaming = (
  memberName: string,
  shapeName: string,
): boolean => {
  return STREAMING_FIELDS.has(memberName) || STREAMING_FIELDS.has(shapeName);
};

// Helper to map Smithy types to TypeScript
const mapSmithyTypeToTypeScript = (
  shape: Shape,
  shapeName: string,
  memberName?: string,
  contextShapeName?: string,
  options: TypeGenOptions = {} as TypeGenOptions,
): string => {
  const {
    responseErrorTypeName = "ResponseError",
    inputShapes,
    outputShapes,
  } = options;

  switch (shape.type) {
    case "string":
      return "string";
    case "integer":
    case "long":
    case "float":
    case "double":
      return "number";
    case "boolean":
      return "boolean";
    case "timestamp":
      return "Date | string";
    case "blob":
      // Check if this blob should support streaming
      if (memberName && shouldSupportStreaming(memberName, shapeName)) {
        if (contextShapeName && inputShapes && outputShapes) {
          if (outputShapes.has(contextShapeName)) {
            // Output types: only Stream with ResponseError
            return `Stream.Stream<Uint8Array, ${responseErrorTypeName}>`;
          } else if (inputShapes.has(contextShapeName)) {
            // Input types: union with Buffer support and flexible Stream error type
            return "Uint8Array | string | Buffer | Stream.Stream<Uint8Array>";
          }
        }
        // Default fallback for unknown context
        return "Uint8Array | string | Stream.Stream<Uint8Array>";
      }
      return "Uint8Array | string";
    case "document":
      return "unknown";
    default:
      return `_opaque_${shapeName}`;
  }
};

// Helper to generate type reference from shape target
const generateTypeReference = (
  serviceName: string,
  target: string,
  memberName?: string,
  contextShapeName?: string,
  options: TypeGenOptions = {} as TypeGenOptions,
): string => {
  const {
    manifest,
    crossServiceImports,
    typeNameMapping,
    responseErrorTypeName = "ResponseError",
    inputShapes,
    outputShapes,
  } = options;

  // Handle special Smithy built-in types
  if (target === "smithy.api#Unit") {
    return "{}";
  }

  // Handle common Smithy built-in primitive types
  if (target === "smithy.api#String") {
    return "string";
  }
  if (
    target === "smithy.api#Boolean" ||
    target === "smithy.api#PrimitiveBoolean"
  ) {
    return "boolean";
  }
  if (
    target === "smithy.api#Integer" ||
    target === "smithy.api#Long" ||
    target === "smithy.api#PrimitiveLong" ||
    target === "smithy.api#Float" ||
    target === "smithy.api#Double"
  ) {
    return "number";
  }
  if (target === "smithy.api#Timestamp") {
    return "Date | string";
  }
  if (target === "smithy.api#Blob") {
    // Check if this blob should support streaming
    if (memberName && shouldSupportStreaming(memberName, "")) {
      if (contextShapeName && inputShapes && outputShapes) {
        if (outputShapes.has(contextShapeName)) {
          // Output types: only Stream with ResponseError
          return `Stream.Stream<Uint8Array, ${responseErrorTypeName}>`;
        } else if (inputShapes.has(contextShapeName)) {
          // Input types: union with Buffer support and flexible Stream error type
          return "Uint8Array | string | Buffer | Stream.Stream<Uint8Array>";
        }
      }
      // Default fallback for unknown context
      return "Uint8Array | string | Stream.Stream<Uint8Array>";
    }
    return "Uint8Array | string";
  }
  if (target === "smithy.api#Document") {
    return "unknown";
  }

  // Check if target exists in manifest shapes
  const targetShape = manifest.shapes[target];
  if (!targetShape) {
    // Check if it's a cross-service reference
    if (target.startsWith("com.amazonaws.") && target.includes("#")) {
      const [serviceNamespace, typeName] = target.split("#");
      const serviceName = serviceNamespace.replace("com.amazonaws.", "");

      // Add to cross-service imports if provided
      if (crossServiceImports) {
        crossServiceImports.add(serviceName);
      }

      return typeName;
    }

    // If shape doesn't exist and it's not a recognized cross-service reference, this is an error
    throw new Error(`Cannot resolve type reference: ${target}`);
  }

  const shapeName = extractShapeName(target);

  // Check if we have a renamed version of this type
  const finalTypeName = typeNameMapping?.get(shapeName) || shapeName;

  switch (targetShape.type) {
    case "string":
    case "integer":
    case "long":
    case "float":
    case "double":
    case "boolean":
    case "timestamp":
    case "blob":
    case "document":
      return mapSmithyTypeToTypeScript(
        targetShape,
        shapeName,
        memberName,
        contextShapeName,
        options,
      );
    case "list":
      if (targetShape.member) {
        const memberType = generateTypeReference(
          serviceName,
          targetShape.member.target,
          memberName,
          contextShapeName,
          options,
        );
        return `Array<${memberType}>`;
      }
      return "Array<unknown>";
    case "map":
      if (targetShape.key && targetShape.value) {
        const keyType = generateTypeReference(
          serviceName,
          targetShape.key.target,
          undefined,
          contextShapeName,
          options,
        );
        const keyTypeShape = manifest.shapes[targetShape.key.target];
        const valueType = generateTypeReference(
          serviceName,
          targetShape.value.target,
          undefined,
          contextShapeName,
          options,
        );
        if (keyTypeShape?.type === "enum") {
          return `{ [key in ${keyType}]?: string }`;
        }
        return `Record<${keyType}, ${valueType}>`;
      }
      return "Record<string, unknown>";
    case "structure":
    case "union":
    case "enum":
      return finalTypeName;
    default:
      return finalTypeName;
  }
};

// Helper to get documentation from traits
const getDocumentation = (
  traits: Record<string, any> | undefined,
): string | undefined => {
  if (!INCLUDE_DOCUMENTATION || !traits) return undefined;

  const docTrait = traits["smithy.api#documentation"];
  if (!docTrait || typeof docTrait !== "string") return undefined;

  // Step 1: Normalize line endings
  let doc = docTrait.replace(/\r\n?/g, "\n");

  // Step 2: Handle special sections first (before stripping other tags)
  // Convert <note>...</note> to **Note:** sections
  doc = doc.replace(/<note>\s*([\s\S]*?)\s*<\/note>/gi, (_, content) => {
    const cleanContent = content.trim();
    return `\n\n**Note:** ${cleanContent}\n\n`;
  });

  // Convert <important>...</important> to **Important:** sections
  doc = doc.replace(
    /<important>\s*([\s\S]*?)\s*<\/important>/gi,
    (_, content) => {
      const cleanContent = content.trim();
      return `\n\n**Important:** ${cleanContent}\n\n`;
    },
  );

  // Step 3: Handle definition lists
  doc = doc.replace(/<dl>\s*([\s\S]*?)\s*<\/dl>/gi, (_, content) => {
    let result = "\n\n";
    // Process dt/dd pairs
    const processed = content.replace(
      /<dt>\s*([\s\S]*?)\s*<\/dt>\s*<dd>\s*([\s\S]*?)\s*<\/dd>/gi,
      (_match: string, term: string, definition: string) => {
        const cleanTerm = term.trim();
        const cleanDef = definition.trim();
        return `**${cleanTerm}**: ${cleanDef}\n\n`;
      },
    );
    result += processed;
    return result;
  });

  // Step 4: Handle lists - convert to markdown-style
  // First, clean up paragraph tags within list items (they interfere with formatting)
  doc = doc.replace(/<li>\s*([\s\S]*?)\s*<\/li>/gi, (_, content) => {
    // Remove paragraph tags within list items but preserve their content
    const cleanContent = content
      .replace(/<p[^>]*>\s*/gi, "")
      .replace(/<\/p>\s*/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
    return `<li>${cleanContent}</li>`;
  });

  // Process nested lists by handling them from inside out
  // Handle unordered lists
  doc = doc.replace(/<ul>\s*([\s\S]*?)\s*<\/ul>/gi, (_, content) => {
    const listItems = content
      .split(/<li>/)
      .slice(1) // Remove empty first element
      .map((item: string) => {
        const cleanItem = item.replace(/<\/li>\s*/i, "").trim();
        // Handle nested lists within list items
        const processedItem = cleanItem.replace(
          /<ul>\s*([\s\S]*?)\s*<\/ul>/gi,
          (_match: string, nestedContent: string) => {
            return nestedContent
              .split(/<li>/)
              .slice(1)
              .map((nestedItem: string) => {
                const cleanNested = nestedItem.replace(/<\/li>\s*/i, "").trim();
                return `  - ${cleanNested}`;
              })
              .join("\n");
          },
        );
        return `- ${processedItem}`;
      })
      .join("\n");
    return `\n${listItems}\n`;
  });

  // Handle ordered lists
  doc = doc.replace(/<ol>\s*([\s\S]*?)\s*<\/ol>/gi, (_, content) => {
    const listItems = content
      .split(/<li>/)
      .slice(1)
      .map((item: string, index: number) => {
        const cleanItem = item.replace(/<\/li>\s*/i, "").trim();
        return `${index + 1}. ${cleanItem}`;
      })
      .join("\n");
    return `\n${listItems}\n`;
  });

  // Step 5: Handle links - convert to markdown format
  doc = doc.replace(
    /<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi,
    (_, url, text) => {
      const cleanText = text.trim();
      const cleanUrl = url.trim();
      // If text is empty or just the URL, use the URL as text
      if (!cleanText || cleanText === cleanUrl) {
        return `<${cleanUrl}>`;
      }
      return `[${cleanText}](${cleanUrl})`;
    },
  );

  // Handle links without href (malformed)
  doc = doc.replace(/<a[^>]*>([\s\S]*?)<\/a>/gi, "$1");

  // Step 6: Handle emphasis and formatting
  // Bold text
  doc = doc.replace(/<(b|strong)>([\s\S]*?)<\/(?:b|strong)>/gi, "**$2**");

  // Italic text
  doc = doc.replace(/<(i|em)>([\s\S]*?)<\/(?:i|em)>/gi, "*$2*");

  // Step 7: Handle code blocks - keep inline code, handle block code better
  doc = doc.replace(/<code>([\s\S]*?)<\/code>/gi, (_, raw) => {
    let code = raw
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");

    // Heuristic: if there's an opening "{" but no closing "}", append one
    if (code.includes("{") && !code.includes("}")) code += "}";

    // Safety: never allow "*/" to appear literally inside the comment
    code = code.replace(/\*\//g, "*\u200B/");

    // If code contains newlines or is long, treat as block, otherwise inline
    if (code.includes("\n") || code.length > 50) {
      return `\n\`\`\`\n${code}\n\`\`\`\n`;
    }
    return `\`${code}\``;
  });

  // Step 8: Handle paragraphs - convert to proper line breaks
  doc = doc.replace(/<p[^>]*>\s*/gi, "\n\n");
  doc = doc.replace(/<\/p>\s*/gi, "\n\n");
  doc = doc.replace(/<p\/>\s*/gi, "\n\n");

  // Step 9: Handle line breaks
  doc = doc.replace(/<br\s*\/?>/gi, "\n");

  // Step 10: Clean up custom AWS tags by converting them to appropriate text
  // Handle <fullname>...</fullname> specially - just remove the tags
  doc = doc.replace(/<fullname>([\s\S]*?)<\/fullname>/gi, "$1");

  // Convert other placeholder tags to readable format
  doc = doc.replace(
    /<(account-id|region|partition|key|job-id|outpost-id|unique identifier|signature|credential|name|description|build|major|minor|patch|response|request|examples|example|my-bucket-name|Region|link[^>]*)>/gi,
    "[$1]",
  );
  doc = doc.replace(
    /<\/(account-id|region|partition|key|job-id|outpost-id|unique identifier|signature|credential|name|description|build|major|minor|patch|response|request|examples|example|my-bucket-name|Region|link)>/gi,
    "",
  );

  // Handle any remaining unclosed single tags
  doc = doc.replace(/<(replaceable|dt\/?)>/gi, "");
  doc = doc.replace(/<\/(replaceable)>/gi, "");

  // Step 11: Remove any remaining HTML tags as fallback
  doc = doc.replace(/<\/?[^>]+>/g, "");

  // Step 12: Decode HTML entities
  doc = doc
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");

  // Step 13: Final safety check for comment terminators
  doc = doc.replace(/\*\//g, "*\u200B/");

  // Step 14: Clean up whitespace
  doc = doc
    // Remove leading/trailing whitespace from lines
    .replace(/^\s+/gm, "")
    .replace(/\s+$/gm, "")
    // Normalize multiple newlines but preserve intentional breaks
    .replace(/\n{4,}/g, "\n\n\n") // Max 3 newlines
    .replace(/\n{2,}(\s*[-*]|\s*\d+\.)/g, "\n$1") // Single line before list items
    .trim();

  if (!doc) return undefined;

  // Step 15: Format as JSDoc comment
  const lines = doc.split("\n");
  let result = "/**\n";

  for (const line of lines) {
    if (line.trim() === "") {
      result += " *\n";
    } else {
      result += ` * ${line}\n`;
    }
  }

  result += " */";

  return result;
};

// Helper to generate error class (declare class extending EffectData.TaggedError)
const generateErrorInterface = (
  serviceName: string,
  shapeId: string,
  shape: any,
  options: TypeGenOptions,
): string => {
  const doc = getDocumentation(shape.traits);
  const shapeName = extractShapeName(shapeId);
  let code = "";

  if (doc) {
    code += `${doc}\n`;
  }

  code += `export declare class ${shapeName} extends EffectData.TaggedError(\n`;
  code += `  "${shapeName}",\n`;
  code += ")<{\n";

  // Add members if any
  if (shape.members) {
    for (const [memberName, member] of Object.entries(shape.members)) {
      const memberInfo = member as any;
      const fieldType = generateTypeReference(
        serviceName,
        memberInfo.target,
        memberName,
        shapeName,
        options,
      );
      const optional = !isRequired(memberInfo.traits);
      const memberDoc = getDocumentation(memberInfo.traits);

      if (memberDoc) {
        code += `  ${memberDoc
          .split("\n")
          .map((line) => `  ${line}`)
          .join("\n")}\n`;
      }

      code += `  readonly ${memberName}${optional ? "?" : ""}: ${fieldType};\n`;
    }
  }

  code += "}> {}";
  return code;
};

const sanitizeStructureName = (name: string) => {
  if (isCommonAwsErrorName(name)) {
    return `_${name}`;
  }
  return name;
};

// Helper to generate structure interface
const generateStructureInterface = (
  serviceName: string,
  name: string,
  shape: Extract<Shape, { type: "structure" }>,
  options: TypeGenOptions,
): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";

  (options.typeNameMapping ??= new Map()).set(
    name,
    sanitizeStructureName(name),
  );

  // Generate regular interface
  code += `export interface ${sanitizeStructureName(name)} {\n`;
  if (shape.members) {
    for (const [memberName, member] of Object.entries(shape.members)) {
      const memberDoc = getDocumentation(member.traits);
      if (memberDoc) {
        code += `  ${memberDoc
          .split("\n")
          .map((line) => line.replace(/^\s*\*/, "  *"))
          .join("\n")}\n`;
      }
      const isRequiredField = isRequired(member.traits);
      const questionMark = isRequiredField ? "" : "?";
      const fieldType = generateTypeReference(
        serviceName,
        member.target,
        memberName,
        name,
        options,
      );
      code += `  ${memberName}${questionMark}: ${fieldType};\n`;
    }
  }
  code += "}";

  return code;
};

// Helper to generate union type
const generateUnionType = (
  serviceName: string,
  name: string,
  shape: Extract<Shape, { type: "union" }>,
  options: TypeGenOptions,
): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";

  if (shape.members) {
    const baseName = `_${name}`;

    // Generate base interface with all properties as optional
    code += `interface ${baseName} {\n`;
    for (const [memberName, member] of Object.entries(shape.members)) {
      const memberType = generateTypeReference(
        serviceName,
        member.target,
        memberName,
        baseName,
        options,
      );

      const memberDoc = getDocumentation(member.traits);

      if (memberDoc) {
        code += `  ${memberDoc
          .split("\n")
          .map((line) => line.replace(/^\s*\*/, "  *"))
          .join("\n")}\n`;
      }

      code += `  ${memberName}?: ${memberType};\n`;
    }
    code += "}\n\n";

    // Generate union type using intersection with base interface
    const variants = Object.entries(shape.members).map(
      ([memberName, member]) => {
        const memberType = generateTypeReference(
          serviceName,
          member.target,
          memberName,
          baseName,
          options,
        );
        return `(${baseName} & { ${memberName}: ${memberType} })`;
      },
    );

    code += `export type ${name} = ${variants.join(" | ")};`;
  } else {
    code += `export type ${name} = never;`;
  }

  return code;
};

// Helper to generate enum type
const generateEnumType = (
  name: string,
  shape: Extract<Shape, { type: "enum" }>,
  _options: TypeGenOptions,
): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";

  if (shape.members) {
    const enumValues = Object.entries(shape.members).map(([key, member]) => {
      // Use smithy.api#enumValue trait if present, otherwise fallback to key
      const enumValue = member.traits?.["smithy.api#enumValue"] || key;
      return `"${enumValue}"`;
    });
    code += `export type ${name} = ${enumValues.join(" | ")};`;
  } else {
    code += `export type ${name} = never;`;
  }

  return code;
};

// Helper to generate list type
const generateListType = (
  serviceName: string,
  name: string,
  shape: Extract<Shape, { type: "list" }>,
  options: TypeGenOptions,
): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";

  if (shape.member) {
    const memberType = generateTypeReference(
      serviceName,
      shape.member.target,
      undefined,
      name,
      options,
    );
    code += `export type ${name} = Array<${memberType}>;`;
  } else {
    code += `export type ${name} = Array<unknown>;`;
  }

  return code;
};

// Helper to generate map type
const generateMapType = (
  serviceName: string,
  name: string,
  shape: Extract<Shape, { type: "map" }>,
  options: TypeGenOptions,
): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";

  if (shape.key && shape.value) {
    const keyType = generateTypeReference(
      serviceName,
      shape.key.target,
      undefined,
      name,
      options,
    );
    const valueType = generateTypeReference(
      serviceName,
      shape.value.target,
      undefined,
      name,
      options,
    );
    code += `export type ${name} = Record<${keyType}, ${valueType}>;`;
  } else {
    code += `export type ${name} = Record<string, unknown>;`;
  }

  return code;
};

// Helper to get protocol handler import
const getProtocolHandler = (
  protocol: string,
): { import: string; handler: string } => {
  switch (protocol) {
    case "awsJson1_0":
      return {
        import:
          'import { AwsJson10Handler } from "../../protocols/aws-json-1-0.ts";',
        handler: "new AwsJson10Handler()",
      };
    case "awsJson1_1":
      return {
        import:
          'import { AwsJson11Handler } from "../../protocols/aws-json-1-1.ts";',
        handler: "new AwsJson11Handler()",
      };
    case "restJson1":
      return {
        import:
          'import { RestJson1Handler } from "../../protocols/rest-json-1.ts";',
        handler: "new RestJson1Handler()",
      };
    case "ec2Query":
      return {
        import:
          'import { Ec2QueryHandler } from "../../protocols/ec2-query.ts";',
        handler: "new Ec2QueryHandler()",
      };
    case "awsQuery":
      return {
        import:
          'import { AwsQueryHandler } from "../../protocols/aws-query.ts";',
        handler: "new AwsQueryHandler(protocolMetadata)",
      };
    case "restXml":
      return {
        import: 'import { RestXmlHandler } from "../../protocols/rest-xml.ts";',
        handler: "new RestXmlHandler()",
      };
    default:
      return {
        import: "",
        handler: "undefined",
      };
  }
};

const getServiceErrorOverrides = (manifest: Manifest) => {
  const errorNames = new Set(
    Object.entries(manifest.shapes)
      .filter(([_, shape]) => shape.traits?.["smithy.api#error"])
      .map(([shapeId, _]) => extractShapeName(shapeId)),
  );
  return {
    overrides: commonAwsErrorNames.filter((n) => errorNames.has(n)),
    inherited: commonAwsErrorNames.filter((n) => !errorNames.has(n)),
  };
};

// Generate service index.ts file with proxy implementation
const generateServiceIndex = (
  manifest: Manifest,
  metadata: any,
  consistentInterfaceName: string,
  serviceName: string,
) => {
  const protocolInfo = getProtocolHandler(metadata.protocol);

  let code = `import type { AWSClientConfig, ServiceMetadata } from "../../client.ts";\n`;
  code += `import { AWSServiceClient, createServiceProxy } from "../../client.ts";\n`;
  if (protocolInfo.import) {
    code += `${protocolInfo.import}\n`;
  }
  // Add protocol metadata import for awsQuery services
  if (metadata.protocol === "awsQuery") {
    code += `import { metadata as protocolMetadata } from "../../awsquery-metadata/${serviceName}.ts";\n`;
  }
  code += `import type { ${consistentInterfaceName} as _${consistentInterfaceName}Client } from "./types.ts";\n\n`;
  code += `export * from "./types.ts";\n\n`;
  // console.log({ metadata, serviceName, manifest });

  const { inherited } = getServiceErrorOverrides(manifest);

  if (inherited.length === 0) {
    code += `export * from "../../error.ts";\n\n`;
  } else {
    code += `export {${inherited.join(", ")}, type CommonAwsError} from "../../error.ts";\n\n`;
  }

  // Service metadata
  code += "// Service metadata\n";
  code += "const metadata = {\n";
  code += `  sdkId: "${metadata.sdkId}",\n`;
  code += `  version: "${metadata.version}",\n`;
  code += `  protocol: "${metadata.protocol}",\n`;
  code += `  sigV4ServiceName: "${metadata.sigV4ServiceName}",\n`;
  if (metadata.endpointPrefix) {
    code += `  endpointPrefix: "${metadata.endpointPrefix}",\n`;
  }
  if (metadata.targetPrefix) {
    code += `  targetPrefix: "${metadata.targetPrefix}",\n`;
  }
  if (metadata.globalEndpoint) {
    code += `  globalEndpoint: "${metadata.globalEndpoint}",\n`;
  }
  if (metadata.signingRegion) {
    code += `  signingRegion: "${metadata.signingRegion}",\n`;
  }
  if (metadata.operations && Object.keys(metadata.operations).length > 0) {
    code += "  operations: {\n";
    Object.entries(metadata.operations).forEach(([opName, opSpec]) => {
      if (typeof opSpec === "string") {
        // Simple HTTP mapping (existing behavior)
        code += `    "${opName}": "${opSpec}",\n`;
      } else {
        // Complex mapping with traits
        code += `    "${opName}": {\n`;
        if ((opSpec as any).http) {
          code += `      http: "${(opSpec as any).http}",\n`;
        }
        if ((opSpec as any).traits) {
          code += "      traits: {\n";
          Object.entries((opSpec as any).traits).forEach(
            ([fieldName, trait]) => {
              code += `        "${fieldName}": "${trait}",\n`;
            },
          );
          code += "      },\n";
        }
        if ((opSpec as any).inputTraits) {
          code += "      inputTraits: {\n";
          Object.entries((opSpec as any).inputTraits).forEach(
            ([fieldName, inputTrait]) => {
              code += `        "${fieldName}": "${inputTrait}",\n`;
            },
          );
          code += "      },\n";
        }
        if ((opSpec as any).outputTraits) {
          code += "      outputTraits: {\n";
          Object.entries((opSpec as any).outputTraits).forEach(
            ([fieldName, outputTrait]) => {
              code += `        "${fieldName}": "${outputTrait}",\n`;
            },
          );
          code += "      },\n";
        }
        code += "    },\n";
      }
    });
    code += "  },\n";
  }
  if (
    metadata.retryableErrors &&
    Object.keys(metadata.retryableErrors).length > 0
  ) {
    code += "  retryableErrors: {\n";
    Object.entries(metadata.retryableErrors).forEach(([errorName, error]) => {
      code += `    "${errorName}": ${JSON.stringify(error)},\n`;
    });
    code += "  },\n";
  }
  code += "} as const satisfies ServiceMetadata;\n\n";

  // // Re-export all types from types.ts for backward compatibility
  // code += "// Re-export all types from types.ts for backward compatibility\n";
  // code += 'export type * from "./types.ts";\n\n';

  // Service class implementation
  // Attach service-level TSDoc if available
  if (metadata.documentation) {
    code += `${metadata.documentation}\n`;
  }

  /*
  import type { Lambda as _LambdaClient } from "./types.ts";
export * from "../../error.ts";
export * from "./types.ts";
export type _Lambda = _LambdaClient;
export interface Lambda extends _Lambda {}
export declare const Lambda: typeof _LambdaClient;

*/
  code += `export type _${consistentInterfaceName} = _${consistentInterfaceName}Client;\n`;
  code += `export interface ${consistentInterfaceName} extends _${consistentInterfaceName} {}\n`;
  code += `export const ${consistentInterfaceName} = class extends AWSServiceClient {\n`;
  code += "  constructor(cfg: Partial<AWSClientConfig> = {}) {\n";
  code += "    const config: AWSClientConfig = {\n";
  code += '      region: cfg.region ?? "us-east-1",\n';
  code += "      credentials: cfg.credentials,\n";
  code += "      endpoint: cfg.endpoint,\n";
  code += "    };\n";
  code += "    super(config);\n";
  code +=
    "    // biome-ignore lint/correctness/noConstructorReturn: deliberate proxy usage\n";
  if (protocolInfo.handler !== "undefined") {
    code += `    return createServiceProxy(metadata, this.config, ${protocolInfo.handler});\n`;
  } else {
    code += "    return createServiceProxy(metadata, this.config);\n";
  }
  code += "  }\n";
  code += `} as unknown as typeof _${consistentInterfaceName}Client;\n`;

  return code;
};

const getServicePascalCaseName = (serviceName: string): string => {
  return serviceName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
};

const generateServiceTypes = (serviceName: string, manifest: Manifest) =>
  Effect.gen(function* () {
    // Check if we need Data import (only if there are error classes)
    let needsDataImport = false;

    // Track cross-service imports needed
    const crossServiceImports = new Set<string>();

    // Check if there's a ResponseError conflict
    const hasResponseErrorConflict = Object.entries(manifest.shapes).some(
      ([shapeId, _shape]) => {
        if (shapeId.includes("#")) {
          const shapeName = extractShapeName(shapeId);
          return shapeName === "ResponseError";
        }
        return false;
      },
    );

    // Determine the ResponseError import name and type name
    const responseErrorImportName = hasResponseErrorConflict
      ? "EffectResponseError"
      : "ResponseError";
    const responseErrorTypeName = hasResponseErrorConflict
      ? "EffectResponseError"
      : "ResponseError";

    // Create type name mapping for conflicting types
    const typeNameMapping = new Map<string, string>();
    const servicePrefix = getServicePascalCaseName(serviceName);

    // Find service shape and extract metadata
    const serviceShapeEntry = Object.entries(manifest.shapes).find(
      ([, shape]) => shape.type === "service",
    );
    if (!serviceShapeEntry) {
      return yield* Effect.fail(
        new Error(`No service shape found in ${serviceName} manifest`),
      );
    }

    const [serviceShapeId, serviceShape] = serviceShapeEntry;
    const serviceShapeName = extractShapeName(serviceShapeId);

    // Extract service metadata
    const serviceTraits = serviceShape.traits || {};
    const serviceInfo = (serviceTraits["aws.api#service"] as any) || {};
    const sigV4ServiceInfo = (serviceTraits["aws.auth#sigv4"] as any) || {};
    const sdkId = serviceInfo.sdkId || "";
    const endpointPrefix = serviceInfo.endpointPrefix || undefined;
    const sigV4ServiceName = sigV4ServiceInfo?.name || undefined;

    // Extract version from service shape (direct property, not in traits)
    const version = (serviceShape as any).version || "";

    // Determine protocol
    let protocol = "unknown";
    if (serviceTraits["aws.protocols#awsJson1_0"]) {
      protocol = "awsJson1_0";
    } else if (serviceTraits["aws.protocols#awsJson1_1"]) {
      protocol = "awsJson1_1";
    } else if (serviceTraits["aws.protocols#restJson1"]) {
      protocol = "restJson1";
    } else if (serviceTraits["aws.protocols#awsQuery"]) {
      protocol = "awsQuery";
    } else if (serviceTraits["aws.protocols#ec2Query"]) {
      protocol = "ec2Query";
    } else if (serviceTraits["aws.protocols#restXml"]) {
      protocol = "restXml";
    }

    // For AWS JSON protocols, the targetPrefix is the service name itself
    // it's not needed for the other protocols
    const targetPrefix =
      protocol === "awsJson1_0" || protocol === "awsJson1_1"
        ? serviceShapeName
        : undefined;

    // Extract global endpoint and signing region from endpoint rules for global services
    let globalEndpoint: string | undefined;
    let signingRegion: string | undefined;

    // Handle known global services explicitly
    if (endpointPrefix === "iam") {
      globalEndpoint = "https://iam.amazonaws.com";
      signingRegion = "us-east-1";
    } else {
      // FIXME: add in the other services
    }

    // Operations can be defined at the top level of the Smithy spec,
    // and under the service. Sometimes even within the same service.
    // Collect operations from both places and merge
    const fromService = (
      serviceShape.type === "service" && serviceShape.operations
        ? serviceShape.operations
            .map((opRef: { target: string }) => {
              const op = manifest.shapes[opRef.target];
              return op?.type === "operation"
                ? { name: extractShapeName(opRef.target), shape: op }
                : null;
            })
            .filter(Boolean)
        : []
    ) as Array<{ name: string; shape: any }>;

    const fromShapes = Object.entries(manifest.shapes)
      .filter(([, shape]: any) => shape.type === "operation")
      .map(([shapeId, shape]) => ({
        name: extractShapeName(shapeId),
        shape: shape as any,
      }));

    // Merge with stable de-dupe by name
    const seen = new Set<string>();
    const operations: Array<{ name: string; shape: any }> = [
      ...fromService,
      ...fromShapes,
    ].filter((op) => {
      const key = op.name;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // Build maps of input and output shapes from operations
    const inputShapes = new Set<string>();
    const outputShapes = new Set<string>();

    for (const operation of operations) {
      if (operation.shape.input) {
        const inputShapeName = extractShapeName(operation.shape.input.target);
        inputShapes.add(inputShapeName);
      }
      if (operation.shape.output) {
        const outputShapeName = extractShapeName(operation.shape.output.target);
        outputShapes.add(outputShapeName);
      }
    }

    // Collect all waitable errors across all operations
    const allWaitableErrors = new Map<string, string>(); // sanitized -> original
    for (const operation of operations) {
      const waitableErrors = extractWaitableErrors(operation.shape.traits);
      for (const { original, sanitized } of waitableErrors) {
        allWaitableErrors.set(sanitized, original);
      }

      // Also collect patched errors
      const patchedErrors = getPatchedErrors(serviceName, operation.name);
      for (const { original, sanitized } of patchedErrors) {
        allWaitableErrors.set(sanitized, original);
      }
    }

    // Identify waitable errors that don't have existing shape definitions
    const waitableErrorsToGenerate = new Map<string, string>();
    for (const [sanitized, original] of allWaitableErrors.entries()) {
      const errorShapeId = `com.amazonaws.${serviceName}#${original}`;
      const shape = manifest.shapes[errorShapeId];
      // Only generate if:
      // 1. No shape exists or shape is not an error
      // 2. Not a common AWS error that's already defined
      if (
        (!shape || !shape.traits?.["smithy.api#error"]) &&
        !isCommonAwsErrorName(sanitized) &&
        !isCommonAwsErrorName(original)
      ) {
        waitableErrorsToGenerate.set(sanitized, original);
      }
    }

    // Create the base options object for type generation
    const createTypeGenOptions = (
      overrides: Partial<TypeGenOptions> = {},
    ): TypeGenOptions => ({
      manifest,
      crossServiceImports,
      typeNameMapping,
      responseErrorTypeName,
      inputShapes,
      outputShapes,
      ...overrides,
    });

    // Check if we need Data import by looking for error shapes or waitable errors
    for (const [_shapeId, shape] of Object.entries(manifest.shapes)) {
      if (
        shape.type === "structure" &&
        shape.traits &&
        "smithy.api#error" in shape.traits
      ) {
        needsDataImport = true;
        break;
      }
    }
    // Also need Data import if we're generating waitable errors
    if (waitableErrorsToGenerate.size > 0) {
      needsDataImport = true;
    }

    // Check if we need Stream import and Buffer support by looking for streaming fields
    let needsStreamImport = false;
    let needsBufferSupport = false;
    for (const [shapeId, shape] of Object.entries(manifest.shapes)) {
      if (shape.type === "structure" && shape.members) {
        const shapeName = extractShapeName(shapeId);
        for (const [memberName, member] of Object.entries(shape.members)) {
          const targetShape = manifest.shapes[member.target];
          // Check both custom blob shapes and primitive blob types
          if (shouldSupportStreaming(memberName, shapeName)) {
            if (targetShape && targetShape.type === "blob") {
              needsStreamImport = true;
              // Check if this is an input shape that needs Buffer support
              if (inputShapes.has(shapeName)) {
                needsBufferSupport = true;
              }
              break;
            }
            // Also check for primitive blob types
            if (member.target === "smithy.api#Blob") {
              needsStreamImport = true;
              // Check if this is an input shape that needs Buffer support
              if (inputShapes.has(shapeName)) {
                needsBufferSupport = true;
              }
              break;
            }
          }
        }
        if (needsStreamImport && needsBufferSupport) break;
      }
    }

    // Generate imports
    let code = `import type { Effect${needsStreamImport ? ", Stream" : ""}${needsDataImport ? ", Data as EffectData" : ""} } from "effect";\n`;
    if (needsStreamImport) {
      code += `import type { ${responseErrorImportName} } from "@effect/platform/HttpClientError";\n`;
    }
    if (needsBufferSupport) {
      code += `import type { Buffer } from "node:buffer";\n`;
    }
    const { inherited, overrides } = getServiceErrorOverrides(manifest);
    if (overrides.length === 0) {
      code += `import type { CommonAwsError } from "../../error.ts";\n`;
    } else {
      code += `import type { ${inherited.join(", ")} } from "../../error.ts";\n`;
      code += `type CommonAwsError = ${inherited.concat(overrides).join(" | ")};\n`;
    }

    code += `import { AWSServiceClient } from "../../client.ts";\n\n`;

    // First pass: Build type name mapping for conflicting types and track all type names
    const allShapes = Object.entries(manifest.shapes)
      .filter(([shapeId]) => shapeId.includes("#"))
      .sort(([a], [b]) => {
        const aName = extractShapeName(a);
        const bName = extractShapeName(b);
        return aName.localeCompare(bName);
      });

    // Track all shape names to detect duplicates
    const shapeNameCounts = new Map<string, number>();

    for (const [shapeId, _shape] of allShapes) {
      const shapeName = extractShapeName(shapeId);

      // Note: We no longer skip service-specific "Unit" types. Only smithy.api#Unit is mapped to `{}` at reference time.

      const currentCount = shapeNameCounts.get(shapeName) || 0;
      shapeNameCounts.set(shapeName, currentCount + 1);

      const safeTypeName = getTypescriptSafeName(shapeName, servicePrefix);
      if (safeTypeName !== shapeName) {
        typeNameMapping.set(shapeName, safeTypeName);
      }
    }

    // For duplicates, create unique names
    const processedShapes = new Map<string, string>(); // shapeName -> first shapeId that uses it

    for (const [shapeId, shape] of allShapes) {
      const shapeName = extractShapeName(shapeId);

      if (
        !shape.traits?.["smithy.api#error"] &&
        isCommonAwsErrorName(shapeName)
      ) {
        typeNameMapping.set(shapeName, sanitizeStructureName(shapeName));
      }

      if (shapeName === "Unit") {
        continue;
      }

      if (shapeNameCounts.get(shapeName)! > 1) {
        // This is a duplicate name, check if we've already processed one with this name
        if (processedShapes.has(shapeName)) {
        } else {
          // Mark this as the first one we're processing
          processedShapes.set(shapeName, shapeId);
        }
      }
    }

    // Generate service interface first at the top - use consistent naming based on sdkId
    let consistentInterfaceName = sdkId.replace(/\s+/g, ""); // Remove spaces to make valid TS identifier

    // Check if the interface name conflicts with any existing type names in the manifest
    const conflictsWithExistingType = Object.entries(manifest.shapes).some(
      ([shapeId, shape]) => {
        if (shapeId.includes("#")) {
          const shapeName = extractShapeName(shapeId);
          return (
            shapeName === consistentInterfaceName && shape.type !== "service"
          );
        }
        return false;
      },
    );

    // If there's a conflict, append "Client" to the interface name
    if (conflictsWithExistingType) {
      consistentInterfaceName = `${consistentInterfaceName}Client`;
    }

    // Service-level TSDoc (from service shape documentation)
    const serviceDoc = getDocumentation(serviceTraits);
    if (serviceDoc) {
      code += `${serviceDoc}\n`;
    }

    code += `export declare class ${consistentInterfaceName} extends AWSServiceClient {\n`;

    for (const operation of operations) {
      const methodName = toLowerCamelCase(operation.name);

      // Attach TSDoc for the operation method (if provided by Smithy)
      const methodDoc = getDocumentation(operation.shape.traits);

      // Get input and output types
      const inputType = operation.shape.input
        ? operation.shape.input.target === "smithy.api#Unit"
          ? "{}"
          : typeNameMapping.get(
              extractShapeName(operation.shape.input.target),
            ) || extractShapeName(operation.shape.input.target)
        : "{}";
      const outputType = operation.shape.output
        ? operation.shape.output.target === "smithy.api#Unit"
          ? "{}"
          : typeNameMapping.get(
              extractShapeName(operation.shape.output.target),
            ) || extractShapeName(operation.shape.output.target)
        : "{}";

      // Generate error union type
      const errors = operation.shape.errors || [];

      // Extract errors from waitable traits
      const waitableErrors = extractWaitableErrors(operation.shape.traits);

      // Extract patched errors
      const patchedErrors = getPatchedErrors(serviceName, operation.name);

      const errorTypes = errors.map(
        (error) =>
          typeNameMapping.get(extractShapeName(error.target)) ||
          extractShapeName(error.target),
      );

      // Add waitable errors (excluding common AWS errors that are already included)
      for (const { original, sanitized } of waitableErrors) {
        if (
          !isCommonAwsErrorName(sanitized) &&
          !isCommonAwsErrorName(original)
        ) {
          const mappedName = typeNameMapping.get(sanitized) || sanitized;
          if (!errorTypes.includes(mappedName)) {
            errorTypes.push(mappedName);
          }
        }
      }

      // Add patched errors (excluding common AWS errors that are already included)
      for (const { original, sanitized } of patchedErrors) {
        if (
          !isCommonAwsErrorName(sanitized) &&
          !isCommonAwsErrorName(original)
        ) {
          const mappedName = typeNameMapping.get(sanitized) || sanitized;
          if (!errorTypes.includes(mappedName)) {
            errorTypes.push(mappedName);
          }
        }
      }

      errorTypes.push("CommonAwsError");

      const errorUnion =
        errorTypes.length > 1 ? errorTypes.join(" | ") : errorTypes[0];
      const effectOutputType =
        !operation.shape.output ||
        operation.shape.output.target === "smithy.api#Unit"
          ? "{}"
          : outputType;

      if (methodDoc) {
        code += `${methodDoc
          .split("\n")
          .map((line) => `  ${line}`)
          .join("\n")}\n`;
      }
      code += `  ${methodName}(\n`;
      code += `    input: ${inputType},\n`;
      code += "  ): Effect.Effect<\n";
      code += `    ${effectOutputType},\n`;
      code += `    ${errorUnion}\n`;
      code += "  >;\n";
    }

    code += "}\n\n";

    // Add simplified service interface alias for easier use (only if different from consistent interface name)
    const simpleServiceName =
      serviceName === "dynamodb"
        ? "DynamoDB"
        : serviceName
            .split("-")
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join("");
    if (
      simpleServiceName !== consistentInterfaceName &&
      !shapeNameCounts.has(simpleServiceName)
    ) {
      if (serviceDoc) {
        code += `${serviceDoc}\n`;
      }
      code += `export declare class ${simpleServiceName} extends ${consistentInterfaceName} {}\n\n`;
    }

    // Track generated type names to avoid duplicates
    const generatedTypes = new Set<string>();

    // Generate type aliases, enums, and interfaces
    for (const [shapeId, shape] of allShapes) {
      const shapeName = extractShapeName(shapeId);
      const finalTypeName = typeNameMapping.get(shapeName) || shapeName;

      // We allow service-specific "Unit" types; built-in smithy.api#Unit is handled at reference level.

      // Skip duplicates - only process if this is the first occurrence we marked
      if (
        shapeNameCounts.get(shapeName)! > 1 &&
        processedShapes.get(shapeName) !== shapeId
      ) {
        continue;
      }

      // Skip if already generated
      if (generatedTypes.has(finalTypeName)) {
        continue;
      }

      generatedTypes.add(finalTypeName);

      switch (shape.type) {
        case "structure":
          // Check if it's an exception/error
          if (shape.traits && "smithy.api#error" in shape.traits) {
            code += generateErrorInterface(
              serviceName,
              shapeId,
              shape,
              createTypeGenOptions(),
            );
          } else {
            code += generateStructureInterface(
              serviceName,
              finalTypeName,
              shape,
              createTypeGenOptions(),
            );
          }
          code += "\n";
          break;
        case "union":
          code += generateUnionType(
            serviceName,
            finalTypeName,
            shape,
            createTypeGenOptions(),
          );
          code += "\n";
          break;
        case "enum":
          code += generateEnumType(
            finalTypeName,
            shape,
            createTypeGenOptions(),
          );
          code += "\n";
          break;
        case "list":
          code += generateListType(
            serviceName,
            finalTypeName,
            shape,
            createTypeGenOptions(),
          );
          code += "\n";
          break;
        case "map":
          code += generateMapType(
            serviceName,
            finalTypeName,
            shape,
            createTypeGenOptions(),
          );
          code += "\n";
          break;
        case "string":
        case "integer":
        case "long":
        case "float":
        case "double":
        case "boolean":
        case "timestamp":
        case "blob":
        case "document": {
          // Generate type alias for simple types that might have traits/constraints
          const baseType = mapSmithyTypeToTypeScript(
            shape,
            shapeName,
            undefined,
            finalTypeName,
            createTypeGenOptions(),
          );
          const doc = getDocumentation(shape.traits);
          if (doc) {
            code += `${doc}\n`;
          }
          code += `export type ${finalTypeName} = ${baseType};\n\n`;
          break;
        }
      }
    }

    // Generate error classes for waitable errors that don't have existing shapes
    for (const [sanitized, original] of waitableErrorsToGenerate.entries()) {
      // Skip if already generated
      if (generatedTypes.has(sanitized)) {
        continue;
      }

      generatedTypes.add(sanitized);

      code += `export declare class ${sanitized} extends EffectData.TaggedError(\n`;
      code += `  "${original}",\n`;
      code += ")<{}> {}\n\n";
    }

    // Generate operation namespaces for error types
    for (const operation of operations) {
      // Get input and output types
      const inputType = operation.shape.input
        ? operation.shape.input.target === "smithy.api#Unit"
          ? "{}"
          : typeNameMapping.get(
              extractShapeName(operation.shape.input.target),
            ) || extractShapeName(operation.shape.input.target)
        : "{}";
      const outputType = operation.shape.output
        ? operation.shape.output.target === "smithy.api#Unit"
          ? "{}"
          : typeNameMapping.get(
              extractShapeName(operation.shape.output.target),
            ) || extractShapeName(operation.shape.output.target)
        : "{}";

      // Generate error union type
      const errors = operation.shape.errors || [];

      // Extract errors from waitable traits
      const waitableErrors = extractWaitableErrors(operation.shape.traits);

      // Extract patched errors
      const patchedErrors = getPatchedErrors(serviceName, operation.name);

      const errorTypes = errors.map(
        (error) =>
          typeNameMapping.get(extractShapeName(error.target)) ||
          extractShapeName(error.target),
      );

      // Add waitable errors (excluding common AWS errors that are already included)
      for (const { original, sanitized } of waitableErrors) {
        if (
          !isCommonAwsErrorName(sanitized) &&
          !isCommonAwsErrorName(original)
        ) {
          const mappedName = typeNameMapping.get(sanitized) || sanitized;
          if (!errorTypes.includes(mappedName)) {
            errorTypes.push(mappedName);
          }
        }
      }

      // Add patched errors (excluding common AWS errors that are already included)
      for (const { original, sanitized } of patchedErrors) {
        if (
          !isCommonAwsErrorName(sanitized) &&
          !isCommonAwsErrorName(original)
        ) {
          const mappedName = typeNameMapping.get(sanitized) || sanitized;
          if (!errorTypes.includes(mappedName)) {
            errorTypes.push(mappedName);
          }
        }
      }

      errorTypes.push("CommonAwsError");

      const errorUnion = errorTypes.map((type) => `    | ${type}`).join("\n");
      const effectOutputType =
        !operation.shape.output ||
        operation.shape.output.target === "smithy.api#Unit"
          ? "{}"
          : outputType;

      code += `export declare namespace ${operation.name} {\n`;
      code += `  export type Input = ${inputType};\n`;
      code += `  export type Output = ${effectOutputType};\n`;
      code += "  export type Error =\n";
      code += errorUnion;
      code += ";\n";
      code += "}\n\n";
    }

    // Extract operation HTTP mappings and trait mappings
    let operationMappings: Record<string, any> = {};

    const extractRetryableError = (
      shapeId: string,
    ): [string, Record<string, string>] => {
      const shape = manifest.shapes[shapeId];
      if (!shape || shape.type !== "structure" || !shape.members)
        return ["", {}];

      if (shape.traits["smithy.api#retryable"] == null) return ["", {}];
      // const isEmptyTrait = Object.keys(shape.members).length === 0;

      // return shape;
      const name = extractShapeName(shapeId);

      return [
        name,
        {
          retryAfterSeconds:
            shape?.members?.retryAfterSeconds?.traits?.[
              "smithy.api#httpHeader"
            ],
          // members: Object.entries(shape.members).reduce(
          //   (acc, [key, value]) => {
          //     if (value?.traits?.["smithy.api#httpHeader"]) {
          //       acc[key] = value?.traits?.["smithy.api#httpHeader"];
          //     }
          //     return acc;
          //   },
          //   {} as Record<string, string>,
          // ),
          // ...(Object.keys(shape.traits["smithy.api#retryable"]).length > 0
          //   ? shape.traits["smithy.api#retryable"]
          //   : {}),
        },
      ];
    };

    const extractHttpTraits = (shapeId: string): Record<string, string> => {
      const shape = manifest.shapes[shapeId];
      if (!shape || shape.type !== "structure" || !shape.members) return {};

      return Object.fromEntries(
        Object.entries(shape.members).flatMap(
          ([field, member]: [string, any]) => {
            const t = member?.traits;
            if (!t) return [];

            if (t["smithy.api#httpPayload"]) {
              if (
                shouldSupportStreaming(member.target.split("#")?.[1], shapeId)
              ) {
                return [[field, "httpStreaming"]];
              } else {
                return [[field, "httpPayload"]];
              }
            }
            if (t["smithy.api#httpResponseCode"])
              return [[field, "httpResponseCode"]];
            if (t["smithy.api#httpHeader"])
              return [[field, t["smithy.api#httpHeader"]]];
            if (
              field === "Body" &&
              shouldSupportStreaming(member.target.split("#")?.[1], shapeId)
            ) {
            }

            return [];
          },
        ),
      ) as Record<string, string>;
    };

    let retryableErrors = {};

    if (protocol === "restJson1") {
      for (const operation of operations) {
        const httpTrait = operation.shape.traits?.["smithy.api#http"];
        if (httpTrait) {
          const { method, uri } = httpTrait;
          const httpMapping = `${method} ${uri}`;

          // Check if this operation's output has HTTP traits
          const outputTraits = operation.shape.output
            ? extractHttpTraits(operation.shape.output.target)
            : {};
          const errorList =
            operation?.shape?.errors
              ?.map((e) => extractRetryableError(e.target))
              .filter((error) => Object.keys(error[1]).length > 0) ?? [];
          for (const error of errorList) {
            retryableErrors[error[0]] = error[1];
          }

          if (Object.keys(outputTraits).length > 0) {
            // Store both HTTP mapping and trait mappings
            operationMappings[operation.name] = {
              http: httpMapping,
              traits: outputTraits,
            };
          } else {
            // Store just HTTP mapping (existing behavior)
            operationMappings[operation.name] = httpMapping;
          }
        }
      }
    } else if (protocol === "restXml") {
      for (const operation of operations) {
        const httpTrait = operation.shape.traits?.["smithy.api#http"];
        let httpMapping;
        if (httpTrait) {
          const { method, uri } = httpTrait;
          httpMapping = `${method} ${uri}`;
        }
        const outputTraits = operation.shape.output
          ? extractHttpTraits(operation.shape.output.target)
          : {};

        const inputTraits = operation.shape.input
          ? extractHttpTraits(operation.shape.input.target)
          : {};

        operationMappings[operation.name] = {};

        if (Object.keys(inputTraits).length > 0) {
          operationMappings[operation.name].inputTraits = inputTraits;
        }

        if (Object.keys(outputTraits).length > 0) {
          operationMappings[operation.name].outputTraits = outputTraits;
        }

        if (httpMapping != null) {
          operationMappings[operation.name].http = httpMapping;
        }
      }
    } else {
      // For non-restJson1 protocols, only check for trait mappings
      for (const operation of operations) {
        const outputTraits = operation.shape.output
          ? extractHttpTraits(operation.shape.output.target)
          : {};

        if (Object.keys(outputTraits).length > 0) {
          operationMappings[operation.name] = {
            traits: outputTraits,
          };
        }
      }
    }

    // Generate service-specific errors union type
    const allServiceErrors = Object.entries(manifest.shapes)
      .filter(([_, shape]) => shape.traits?.["smithy.api#error"])
      .map(([shapeId, _]) => extractShapeName(shapeId));
    // Add waitable errors
    for (const [sanitized, _] of waitableErrorsToGenerate.entries()) {
      if (!allServiceErrors.includes(sanitized)) {
        allServiceErrors.push(sanitized);
      }
    }
    allServiceErrors.push("CommonAwsError");
    code += `export type ${consistentInterfaceName}Errors = ${allServiceErrors.join(" | ")};\n\n`;

    // Store metadata for the service
    // FIXME: shouldn't this be typed to ServiceMetdata?
    const metadata = {
      sdkId,
      version,
      endpointPrefix,
      protocol,
      sigV4ServiceName,
      targetPrefix,
      globalEndpoint,
      signingRegion,
      // Include operations mapping if any exist
      ...(Object.keys(operationMappings).length > 0 && {
        operations: operationMappings,
      }),
      retryableErrors,
    };

    return { code, metadata };
  });

// Generate index file that exports all services
const generateIndexFile = (
  serviceExports: Array<{
    serviceName: string;
    serviceInterfaceName: string;
    friendlyName: string;
  }>,
) => {
  let code = "// Auto-generated service exports\n\n";

  // Sort exports alphabetically by export name
  const sortedExports = serviceExports
    .map(({ serviceName, serviceInterfaceName, friendlyName }) => ({
      serviceName,
      serviceInterfaceName,
      friendlyName,
    }))
    .sort((a, b) => a.friendlyName.localeCompare(b.friendlyName));

  // Export all services as namespaces using AWS's official naming
  // If the friendly name differs from the interface name, alias it

  sortedExports.forEach(
    ({ serviceName, serviceInterfaceName, friendlyName }) => {
      const exportName = friendlyName.replace(/\s+/g, "");

      if (exportName !== serviceInterfaceName) {
        code += `export { ${serviceInterfaceName} as ${exportName} } from "./${serviceName}/index.ts";\n`;
      } else {
        code += `export { ${serviceInterfaceName} } from "./${serviceName}/index.ts";\n`;
      }
    },
  );

  return code;
};

// Main program
const program = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem;
  const servicesMetadata: Record<string, any> = {};
  const serviceExports: Array<{ serviceName: string; sdkId: string }> = [];
  const awsServiceExports: Array<{
    serviceName: string;
    serviceInterfaceName: string;
    friendlyName: string;
  }> = [];

  // Load all manifests from aws-models/models/ directory
  const manifests = yield* loadAllLocalManifests();

  // Create services directory
  yield* fs.makeDirectory("src/services", { recursive: true });

  // Process each manifest
  for (const { serviceName, manifest } of manifests) {
    try {
      // Find service shape to get the sdkId and service interface name
      const serviceShapeEntry = Object.entries(manifest.shapes).find(
        ([, shape]) => shape.type === "service",
      );
      if (!serviceShapeEntry) {
        continue;
      }

      const [serviceShapeId, serviceShape] = serviceShapeEntry;
      const _serviceShapeName = extractShapeName(serviceShapeId);
      const serviceTraits = serviceShape.traits || {};
      const serviceInfo = (serviceTraits["aws.api#service"] as any) || {};
      const sdkId = serviceInfo.sdkId || serviceName;

      // Generate the types and metadata
      const { code: typesCode, metadata } = yield* generateServiceTypes(
        serviceName,
        manifest,
      );

      servicesMetadata[serviceName] = metadata;

      // Store export info with sdkId
      serviceExports.push({
        serviceName,
        sdkId,
      });

      // Store AWS service interface info - use consistent naming based on sdkId
      let awsInterfaceName = sdkId.replace(/\s+/g, ""); // Remove spaces to make valid TS identifier

      // Check if the interface name conflicts with any existing type names in the manifest
      const conflictsWithExistingType = Object.entries(manifest.shapes).some(
        ([shapeId, shape]) => {
          if (shapeId.includes("#")) {
            const shapeName = extractShapeName(shapeId);
            return shapeName === awsInterfaceName && shape.type !== "service";
          }
          return false;
        },
      );

      // If there's a conflict, append "Client" to the interface name
      if (conflictsWithExistingType) {
        awsInterfaceName = `${awsInterfaceName}Client`;
      }

      awsServiceExports.push({
        serviceName,
        serviceInterfaceName: awsInterfaceName,
        friendlyName: sdkId,
      });

      // Generate the service index code
      const indexCode = generateServiceIndex(
        manifest,
        metadata,
        awsInterfaceName,
        serviceName,
      );

      // Write both files
      const outputDir = `src/services/${serviceName}`;
      yield* fs.makeDirectory(outputDir, { recursive: true });
      yield* fs.writeFileString(`${outputDir}/types.ts`, typesCode);
      yield* fs.writeFileString(`${outputDir}/index.ts`, indexCode);
    } catch (_error) {
      // Continue with other services instead of failing completely
    }
  }

  // Generate index file
  const indexCode = generateIndexFile(awsServiceExports);
  yield* fs.writeFileString("src/services/index.ts", indexCode);
});

// Run the program
const runnable = program.pipe(Effect.provide(NodeFileSystem.layer));

await Effect.runPromise(runnable);
