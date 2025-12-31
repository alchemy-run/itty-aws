import { FileSystem, Path } from "@effect/platform";
import { BunContext, BunRuntime } from "@effect/platform-bun";
import dedent from "dedent";
import {
  Console,
  Context,
  Data,
  Deferred,
  Effect,
  LogLevel,
  Logger,
  Match,
  MutableHashMap,
  MutableHashSet,
  Option,
  Ref,
  Schema as S,
} from "effect";
import { GenericShape, ServiceShape, SmithyModel, type ShapeTypeMap } from "./model-schema.ts";
//todo(pear): swap out for effect platform path
import path from "pathe";

class SdkFile extends Context.Tag("SdkFile")<
  SdkFile,
  {
    map: MutableHashMap.MutableHashMap<string, Deferred.Deferred<string, never>>;
    schemas: Ref.Ref<Array<{ name: string; definition: string; deps: string[] }>>;
    errors: Ref.Ref<Array<{ name: string; definition: string }>>;
    operations: Ref.Ref<string>;
    // Set of schema names that are part of a cycle (populated before generation)
    cyclicSchemas: Set<string>;
    // Set of schema names that are cyclic AND are structs (will become classes)
    cyclicClasses: Set<string>;
    // Set of ALL struct names (classes can be used directly as types)
    allStructNames: Set<string>;
    // Set of shape IDs that are error shapes (should be inlined in TaggedError, not separate classes)
    errorShapeIds: Set<string>;
    // Map of error shape names to their inline fields definition
    errorFields: Ref.Ref<Map<string, string>>;
    // Track if middleware import is needed
    usesMiddleware: Ref.Ref<boolean>;
  }
>() {}

class ModelService extends Context.Tag("ModelService")<ModelService, SmithyModel>() {}

function getSdkFlag(): Option.Option<string> {
  const idx = process.argv.indexOf("--sdk");
  const arg = process.argv[idx + 1];
  return idx !== -1 && arg !== undefined ? Option.some(arg) : Option.none();
}

<<<<<<< HEAD
//todo(pear): add this to a category
//todo(pear): add details about the root error to this
class ShapeNotFound extends Data.TaggedError("ShapeNotFound")<{
  message: string;
}> {}
class ProtocolNotFound extends Data.TaggedError("ProtocolNotFound")<{}> {}

//* todo(pear): better error here - most of these need to be handled
class UnableToTransformShapeToSchema extends Data.TaggedError("UnableToTransformShapeToSchema")<{
  message: string;
}> {}

class ProtocolNotImplemented extends Data.TaggedError("ProtocolNotImplemented")<{
  message: string;
}> {}

const findServiceShape = Effect.gen(function* () {
  const model = yield* ModelService;
  const serviceEntry = Object.entries(model.shapes).find(([_, shape]) => shape.type === "service");

  return serviceEntry
    ? (serviceEntry as [string, ServiceShape])
    : yield* Effect.fail(new ShapeNotFound({ message: "service shape not found" }));
=======
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
        if ((opSpec as any).errorStatusCodes) {
          code += "      errorStatusCodes: {\n";
          Object.entries((opSpec as any).errorStatusCodes).forEach(
            ([statusCode, errorName]) => {
              code += `        ${statusCode}: "${errorName}",\n`;
            },
          );
          code += "      },\n";
        }
        code += "    },\n";
      }
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

        // Extract error status code mappings from operation errors
        const errors = operation.shape.errors || [];
        const errorStatusCodes: Record<number, string> = {};
        for (const error of errors) {
          const errorShape = manifest.shapes[error.target];
          if (errorShape && errorShape.traits) {
            const httpError = errorShape.traits["smithy.api#httpError"];
            if (httpError) {
              const errorName = extractShapeName(error.target);
              errorStatusCodes[httpError as number] = errorName;
            }
          }
        }

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

        if (Object.keys(errorStatusCodes).length > 0) {
          operationMappings[operation.name].errorStatusCodes = errorStatusCodes;
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
>>>>>>> main
});

//todo(pear): cache this
function findShape<T extends keyof ShapeTypeMap>(
  shapeId: string,
  type: T,
): Effect.Effect<[string, ShapeTypeMap[T]], ShapeNotFound, ModelService>;
function findShape(
  shapeId: string,
  type?: string,
): Effect.Effect<[string, GenericShape], ShapeNotFound, ModelService>;
function findShape(
  shapeId: string,
  type?: string,
): Effect.Effect<[string, GenericShape], ShapeNotFound, ModelService> {
  const effect = Effect.gen(function* () {
    yield* Effect.logDebug(`finding shape: \`${shapeId}\` of type: ${type ?? "any"}`);
    const model = yield* ModelService;
    const entry = Object.entries(model.shapes).find(
      ([id, shape]) => (type == null ? true : shape.type === type) && id === shapeId,
    );

    return entry
      ? (entry as any)
      : yield* Effect.fail(
          new ShapeNotFound({
            message: `unable to find ${type ?? "unknown"}: ${shapeId}`,
          }),
        );
  });

  return effect;
}

//todo(pear): move this to a ref
const aliasMappings: Record<string, string> = {};

function formatName(shapeId: string, lowercase = false) {
  let name = shapeId.split("#")[1] ?? "";
  // Apply alias mappings for reserved names
  name = aliasMappings[name] ?? name;
  if (lowercase) {
    name = name.charAt(0).toLowerCase() + name.slice(1);
  }
  return name;
}

// Helper to convert schema expression to TypeScript type for type aliases
// - allStructNames: set of all struct (class) names that can be used directly as types
// - cyclicSchemas: set of cyclic schemas that have explicit type aliases
function schemaExprToTsType(
  schemaExpr: string,
  allStructNames: Set<string>,
  cyclicSchemas: Set<string>,
): string {
  //todo(pear): move this to an effect matcher
  switch (schemaExpr) {
    case "S.String":
      return "string";
    case "S.Boolean":
      return "boolean";
    case "S.Number":
      return "number";
    case "S.Date":
      return "Date";
    case "S.Any":
      return "any";
    case "H.StreamBody()":
      return "H.StreamBody";
    case "S.Struct({})":
      return "Record<string, never>";
    default:
      // Named schemas:
      // - Structs (classes) can be used directly as types
      // - Cyclic arrays/unions have explicit type aliases, so can be used directly
      // - Non-cyclic arrays/unions/maps are just const, so need typeof extraction
      if (allStructNames.has(schemaExpr) || cyclicSchemas.has(schemaExpr)) {
        return schemaExpr;
      }
      return `typeof ${schemaExpr}["Type"]`;
  }
}

// Topological sort for schema definitions to ensure dependencies come before dependents
// Handles cycles by treating cyclic schemas specially (they will use S.Class and S.suspend)
function topologicalSortWithCycles(
  schemas: Array<{ name: string; definition: string; deps: string[] }>,
  cyclicSchemas: Set<string>,
): Array<{ name: string; definition: string; deps: string[] }> {
  const schemaMap = new Map(schemas.map((s) => [s.name, s]));
  const visited = new Set<string>();
  const result: Array<{ name: string; definition: string; deps: string[] }> = [];

  //todo(pear): rewrite this as an effect
  function visit(name: string) {
    if (visited.has(name)) return;
    visited.add(name);

    const schema = schemaMap.get(name);
    if (schema) {
      // For cyclic schemas, only require non-cyclic dependencies to be visited first
      // Cyclic dependencies will use S.suspend so order among them doesn't matter
      const effectiveDeps = cyclicSchemas.has(name)
        ? schema.deps.filter((dep) => !cyclicSchemas.has(dep))
        : schema.deps;

      for (const dep of effectiveDeps) {
        if (schemaMap.has(dep)) {
          visit(dep);
        }
      }
      result.push(schema);
    }
  }

  // Visit all schemas
  for (const schema of schemas) {
    visit(schema.name);
  }

  return result;
}

//todo(pear): rewrite as effect
// Collect all shape dependencies from the model to compute cycles before generation
function collectShapeDependencies(
  model: SmithyModel,
): Map<string, { deps: string[]; type: string }> {
  const shapeDeps = new Map<string, { deps: string[]; type: string }>();

  for (const [shapeId, shape] of Object.entries(model.shapes)) {
    const name = formatName(shapeId);
    if (!name) continue;

    const deps: string[] = [];

    if (shape.type === "structure") {
      for (const member of Object.values(shape.members)) {
        const depName = formatName(member.target);
        if (depName) deps.push(depName);
      }
    } else if (shape.type === "union") {
      for (const member of Object.values(shape.members)) {
        const depName = formatName(member.target);
        if (depName) deps.push(depName);
      }
    } else if (shape.type === "list") {
      const depName = formatName(shape.member.target);
      if (depName) deps.push(depName);
    } else if (shape.type === "map") {
      const keyName = formatName(shape.key.target);
      const valueName = formatName(shape.value.target);
      if (keyName) deps.push(keyName);
      if (valueName) deps.push(valueName);
    }

    shapeDeps.set(name, { deps, type: shape.type });
  }

  return shapeDeps;
}

//todo(pear): rewrite as effect
// Find all schemas that are part of a cycle using the pre-collected dependencies
function findCyclicSchemasFromDeps(shapeDeps: Map<string, { deps: string[]; type: string }>): {
  cyclicSchemas: Set<string>;
  cyclicClasses: Set<string>;
  allStructNames: Set<string>;
} {
  const cyclicSchemas = new Set<string>();

  let index = 0;
  const stack: string[] = [];
  const onStack = new Set<string>();
  const indices = new Map<string, number>();
  const lowlinks = new Map<string, number>();

  function strongConnect(name: string) {
    indices.set(name, index);
    lowlinks.set(name, index);
    index++;
    stack.push(name);
    onStack.add(name);

    const shapeInfo = shapeDeps.get(name);
    if (shapeInfo) {
      for (const dep of shapeInfo.deps) {
        if (shapeDeps.has(dep)) {
          if (!indices.has(dep)) {
            strongConnect(dep);
            lowlinks.set(name, Math.min(lowlinks.get(name)!, lowlinks.get(dep)!));
          } else if (onStack.has(dep)) {
            lowlinks.set(name, Math.min(lowlinks.get(name)!, indices.get(dep)!));
          }
        }
      }
    }

    if (lowlinks.get(name) === indices.get(name)) {
      const scc: string[] = [];
      let w: string;
      do {
        w = stack.pop()!;
        onStack.delete(w);
        scc.push(w);
      } while (w !== name);

      // If SCC has more than one node, mark all as cyclic
      if (scc.length > 1) {
        for (const node of scc) {
          cyclicSchemas.add(node);
        }
      } else {
        // Check for self-loop
        const info = shapeDeps.get(name);
        if (info && info.deps.includes(name)) {
          cyclicSchemas.add(name);
        }
      }
    }
  }

  for (const name of shapeDeps.keys()) {
    if (!indices.has(name)) {
      strongConnect(name);
    }
  }

  // Determine which cyclic schemas will become classes (structs only)
  const cyclicClasses = new Set<string>();
  // Collect ALL struct names (classes can be used directly as types)
  const allStructNames = new Set<string>();
  for (const [name, info] of shapeDeps) {
    if (info.type === "structure") {
      allStructNames.add(name);
      if (cyclicSchemas.has(name)) {
        cyclicClasses.add(name);
      }
    }
  }

  return { cyclicSchemas, cyclicClasses, allStructNames };
}

//todo(pear): is this redundant over error in the file
// Collect all error shape IDs from operation definitions
function collectErrorShapeIds(model: SmithyModel): Set<string> {
  const errorShapeIds = new Set<string>();

  for (const [shapeId, shape] of Object.entries(model.shapes)) {
    if (shape.type === "operation" && shape.errors) {
      for (const error of shape.errors) {
        errorShapeIds.add(error.target);
      }
    }
  }

  return errorShapeIds;
}

const convertShapeToSchema: (
  args_0: string,
) => Effect.Effect<
  Deferred.Deferred<string, never>,
  UnableToTransformShapeToSchema | ShapeNotFound,
  ModelService | SdkFile
> = Effect.fn(function* (target: string) {
  const sdkFile = yield* SdkFile;
  const cachedResult = Option.getOrNull(MutableHashMap.get(sdkFile.map, target));
  const deferredValue = yield* Deferred.make<string, never>();
  if (cachedResult != null) {
    return cachedResult;
  } else {
    MutableHashMap.set(sdkFile.map, target, deferredValue);
  }

  //todo(pear): this is stupid
  // Helper to get the schema name for this target
  const getSchemaName = () => formatName(target);

  const addAlias = Effect.fn(function* (
    definitionEffect: Effect.Effect<
      string,
      ShapeNotFound | UnableToTransformShapeToSchema,
      ModelService | SdkFile
    >,
    deps: string[],
  ) {
    const tsName = getSchemaName();
    yield* Deferred.succeed(deferredValue, tsName);
    const definition = yield* definitionEffect;

    yield* Ref.update(sdkFile.schemas, (arr) => [...arr, { name: tsName, definition, deps }]);
    return tsName;
  });

  const result = yield* Effect.if(target.startsWith("smithy.api"), {
    onTrue: () =>
      Match.value(target).pipe(
        Match.when(
          (s) => s === "smithy.api#String",
          () => Effect.succeed("S.String"),
        ),
        Match.when(
          (s) =>
            s === "smithy.api#Integer" ||
            s === "smithy.api#Double" ||
            s === "smithy.api#Long" ||
            s === "smithy.api#Float" ||
            s === "smithy.api#PrimitiveLong",
          () => Effect.succeed("S.Number"),
        ),
        Match.when(
          (s) => s === "smithy.api#Boolean" || s === "smithy.api#PrimitiveBoolean",
          () => Effect.succeed("S.Boolean"),
        ),
        Match.when(
          (s) => s === "smithy.api#Timestamp",
          () => Effect.succeed("S.Date"),
        ),
        Match.when(
          (s) => s === "smithy.api#Blob",
          () => Effect.succeed("H.StreamBody()"),
        ),
        Match.when(
          //todo(pear): should this be S.Never?
          (s) => s === "smithy.api#Unit",
          () => Effect.succeed("S.Struct({})"),
        ),
        Match.when(
          (s) => s === "smithy.api#Document",
          // TODO(sam): should we add our own JsonValue schema to handle documents? What are Documents?
          () => Effect.succeed("S.Any"),
        ),
        Match.orElse(() =>
          Effect.fail(
            new UnableToTransformShapeToSchema({
              message: `type ${target}`,
            }),
          ),
        ),
      ),
    onFalse: () =>
      Effect.gen(function* () {
        const [targetShapeId, targetShape] = yield* findShape(target);
        return yield* Match.value(targetShape).pipe(
          Match.when(
            (s) =>
              s.type === "integer" ||
              s.type === "long" ||
              s.type === "double" ||
              s.type === "float",
            () => Effect.succeed("S.Number"),
          ),
          Match.when(
            (s) => s.type === "string",
            () => Effect.succeed("S.String"),
          ),
          Match.when(
            (s) => s.type === "blob",
            () => Effect.succeed("H.StreamBody()"),
          ),
          Match.when(
            (s) => s.type === "boolean",
            () => Effect.succeed("S.Boolean"),
          ),
          Match.when(
            (s) => s.type === "timestamp",
            () => Effect.succeed("S.Date"),
          ),
          Match.when(
            (s) => s.type === "document",
            // TODO(sam): should we add our own JsonValue schema to handle documents? What are Documents?
            () => Effect.succeed("S.Any"),
          ),
          Match.when(
            (s) => s.type === "enum",
            (s) =>
              Effect.succeed(
                Object.values(s.members).map(
                  ({ traits }) => `S.Literal("${traits["smithy.api#enumValue"]}")`,
                ),
                //todo(pear): figure our a more typesafe way of doing this
                // ).pipe(Effect.map((members) => `S.Union(${members.join(", ")})`)),
              ).pipe(Effect.map(() => `S.String`)),
          ),
          Match.when(
            (s) => s.type === "intEnum",
            (s) =>
              Effect.succeed(
                Object.values(s.members).map(
                  ({ traits }) => `S.Literal("${traits["smithy.api#enumValue"]}")`,
                ),
                //todo(pear): figure our a more typesafe way of doing this
                // ).pipe(Effect.map((members) => `S.Union(${members.join(", ")})`)),
              ).pipe(Effect.map(() => `S.Number`)),
          ),
          Match.when(
            (s) => s.type === "list",
            (s) => {
              const memberName = formatName(s.member.target);
              const schemaName = getSchemaName();
              const isCyclic = sdkFile.cyclicSchemas.has(schemaName);
              const isMemberErrorShape = sdkFile.errorShapeIds.has(s.member.target);
              return addAlias(
                convertShapeToSchema(s.member.target).pipe(
                  Effect.flatMap(Deferred.await),
                  Effect.map((type) => {
                    //todo(pear): rewrite this in a more effectful way
                    // Wrap error shape references in S.suspend (they're defined after schemas)
                    let innerType = type;
                    if (isMemberErrorShape) {
                      innerType = `S.suspend(() => ${type})`;
                    }
                    // Wrap cyclic references in S.suspend
                    else if (sdkFile.cyclicSchemas.has(memberName)) {
                      innerType = sdkFile.cyclicClasses.has(memberName)
                        ? // TODO(sam): I had to add the any here because encoded type was creting circular errors. hopefully OK since we don't really need it
                          `S.suspend((): S.Schema<${type}, any> => ${type})`
                        : `S.suspend(() => ${type})`;
                    }

                    if (isCyclic) {
                      // For cyclic arrays, generate explicit type alias to help TypeScript inference
                      const memberTsType = schemaExprToTsType(
                        type,
                        sdkFile.allStructNames,
                        sdkFile.cyclicSchemas,
                      );
                      return `export type ${schemaName} = ${memberTsType}[];\nexport const ${schemaName} = S.Array(${innerType}) as any as S.Schema<${schemaName}>;`;
                    }

                    return `export const ${schemaName} = S.Array(${innerType});`;
                  }),
                ),
                [memberName],
              );
            },
          ),
          Match.when(
            (s) => s.type === "structure",
            (s) => {
              const memberTargets = Object.values(s.members).map((m) => formatName(m.target));
              const currentSchemaName = getSchemaName();
              const isCurrentCyclic = sdkFile.cyclicSchemas.has(currentSchemaName);
              const isErrorShape = sdkFile.errorShapeIds.has(target);

              const membersEffect = Effect.all(
                Object.entries(s.members).map(([memberName, member]) => {
                  const memberTargetName = formatName(member.target);
                  const isMemberErrorShape = sdkFile.errorShapeIds.has(member.target);
                  return convertShapeToSchema(member.target).pipe(
                    Effect.flatMap(Deferred.await),
                    Effect.map((baseSchema) => {
                      let schema = baseSchema;

                      // Wrap error shape references in S.suspend (they're defined after schemas)
                      if (isMemberErrorShape) {
                        schema = `S.suspend(() => ${schema})`;
                      }
                      // Wrap cyclic references in S.suspend (only if current schema is also cyclic)
                      else if (isCurrentCyclic && sdkFile.cyclicSchemas.has(memberTargetName)) {
                        if (sdkFile.cyclicClasses.has(memberTargetName)) {
                          // TODO(sam): I had to add the any here because encoded type was creting circular errors. hopefully OK since we don't really need it
                          schema = `S.suspend((): S.Schema<${schema}, any> => ${schema})`;
                        } else {
                          schema = `S.suspend(() => ${schema})`;
                        }
                      }

                      if (member.traits?.["smithy.api#httpHeader"] != null) {
                        if (baseSchema === "S.String") {
                          schema = `H.Header("${member.traits?.["smithy.api#httpHeader"]}")`;
                        } else {
                          schema = `H.Header("${member.traits?.["smithy.api#httpHeader"]}", ${schema})`;
                        }
                      }
                      if (member.traits?.["smithy.api#httpPayload"] != null) {
                        schema = `H.Body("${member.traits?.["smithy.api#xmlName"]}", ${schema})`;
                      }
                      if (
                        member.traits?.["smithy.api#httpLabel"] != null &&
                        member.traits?.["smithy.rules#contextParam"] != null
                      ) {
                        schema = `H.Path("${(member.traits?.["smithy.rules#contextParam"] as { name: string })?.name}", ${schema})`;
                      }

                      if (member.traits?.["smithy.api#required"] == null) {
                        schema = `S.optional(${schema})`;
                      }

                      return `${memberName}: ${schema}`;
                    }),
                  );
                }),
                { concurrency: "unbounded" },
              );

              // For error shapes, store the fields separately and don't generate a class
              if (isErrorShape) {
                return Effect.gen(function* () {
                  const tsName = currentSchemaName;
                  yield* Deferred.succeed(deferredValue, tsName);
                  const members = yield* membersEffect;
                  const fields = `{${members.join(", ")}}`;
                  // Store the fields for later use in TaggedError generation
                  yield* Ref.update(sdkFile.errorFields, (map) => {
                    map.set(tsName, fields);
                    return map;
                  });
                  return tsName;
                });
              }

              return addAlias(
                membersEffect.pipe(
                  Effect.map((members) => {
                    const fields = `{${members.join(", ")}}`;
                    // Always use S.Class for structs
                    return `export class ${currentSchemaName} extends S.Class<${currentSchemaName}>("${currentSchemaName}")(${fields}) {}`;
                  }),
                ),
                memberTargets,
              );
            },
          ),
          Match.when(
            (s) => s.type === "union",
            (s) => {
              const memberTargets = Object.values(s.members).map((m) => formatName(m.target));
              const schemaName = getSchemaName();
              const isCurrentCyclic = sdkFile.cyclicSchemas.has(schemaName);

              return addAlias(
                Effect.all(
                  Object.entries(s.members).map(([_memberName, member]) => {
                    const memberTargetName = formatName(member.target);
                    const isMemberErrorShape = sdkFile.errorShapeIds.has(member.target);
                    return convertShapeToSchema(member.target).pipe(
                      Effect.flatMap(Deferred.await),
                      Effect.map((schema) => {
                        // Track both raw schema (for type alias) and wrapped schema (for schema definition)
                        let wrappedSchema = schema;
                        // Wrap error shape references in S.suspend (they're defined after schemas)
                        if (isMemberErrorShape) {
                          wrappedSchema = `S.suspend(() => ${schema})`;
                        }
                        // Wrap cyclic references in S.suspend
                        else if (isCurrentCyclic && sdkFile.cyclicSchemas.has(memberTargetName)) {
                          if (sdkFile.cyclicClasses.has(memberTargetName)) {
                            // TODO(sam): I had to add the any here because encoded type was creting circular errors. hopefully OK since we don't really need it
                            wrappedSchema = `S.suspend((): S.Schema<${schema}, any> => ${schema})`;
                          } else {
                            wrappedSchema = `S.suspend(() => ${schema})`;
                          }
                        }
                        return { raw: schema, wrapped: wrappedSchema };
                      }),
                    );
                  }),
                  { concurrency: "unbounded" },
                ).pipe(
                  Effect.map((members) => {
                    const wrappedMembers = members.map((m) => m.wrapped);

                    if (isCurrentCyclic) {
                      // For cyclic unions, generate explicit type alias to help TypeScript inference
                      // Deduplicate the TypeScript types for cleaner output
                      const memberTsTypes = [
                        ...new Set(
                          members.map((m) =>
                            schemaExprToTsType(
                              m.raw,
                              sdkFile.allStructNames,
                              sdkFile.cyclicSchemas,
                            ),
                          ),
                        ),
                      ];
                      const typeAlias = `export type ${schemaName} = ${memberTsTypes.join(" | ")};`;
                      return `${typeAlias}\nexport const ${schemaName} = S.Union(${wrappedMembers.join(", ")}) as any as S.Schema<${schemaName}>;`;
                    }

                    return `export const ${schemaName} = S.Union(${wrappedMembers.join(", ")});`;
                  }),
                ),
                memberTargets,
              );
            },
          ),
          Match.when(
            (s) => s.type === "map",
            (s) => {
              const schemaName = getSchemaName();
              const isCyclic = sdkFile.cyclicSchemas.has(schemaName);
              const keyTargetName = formatName(s.key.target);
              const valueTargetName = formatName(s.value.target);
              const isKeyErrorShape = sdkFile.errorShapeIds.has(s.key.target);
              const isValueErrorShape = sdkFile.errorShapeIds.has(s.value.target);
              return addAlias(
                Effect.all(
                  [
                    convertShapeToSchema(s.key.target).pipe(Effect.flatMap(Deferred.await)),
                    convertShapeToSchema(s.value.target).pipe(Effect.flatMap(Deferred.await)),
                  ],
                  { concurrency: "unbounded" },
                ).pipe(
                  Effect.map(([keySchema, valueSchema]) => {
                    // Wrap error shape or cyclic references in S.suspend
                    let wrappedKey = keySchema;
                    let wrappedValue = valueSchema;

                    if (isKeyErrorShape) {
                      wrappedKey = `S.suspend(() => ${keySchema})`;
                    } else if (sdkFile.cyclicSchemas.has(keyTargetName)) {
                      wrappedKey = sdkFile.cyclicClasses.has(keyTargetName)
                        ? `S.suspend((): S.Schema<${keySchema}, any> => ${keySchema})`
                        : `S.suspend(() => ${keySchema})`;
                    }

                    if (isValueErrorShape) {
                      wrappedValue = `S.suspend(() => ${valueSchema})`;
                    } else if (sdkFile.cyclicSchemas.has(valueTargetName)) {
                      wrappedValue = sdkFile.cyclicClasses.has(valueTargetName)
                        ? `S.suspend((): S.Schema<${valueSchema}, any> => ${valueSchema})`
                        : `S.suspend(() => ${valueSchema})`;
                    }

                    if (isCyclic) {
                      // For cyclic maps, generate explicit type alias to help TypeScript inference
                      const keyTsType = schemaExprToTsType(
                        keySchema,
                        sdkFile.allStructNames,
                        sdkFile.cyclicSchemas,
                      );
                      const valueTsType = schemaExprToTsType(
                        valueSchema,
                        sdkFile.allStructNames,
                        sdkFile.cyclicSchemas,
                      );
                      return `export type ${schemaName} = { [key: ${keyTsType}]: ${valueTsType} };\nexport const ${schemaName} = S.Record({key: ${wrappedKey}, value: ${wrappedValue}}) as any as S.Schema<${schemaName}>;`;
                    }

                    return `export const ${schemaName} = S.Record({key: ${wrappedKey}, value: ${wrappedValue}});`;
                  }),
                ),
                [keyTargetName, valueTargetName],
              );
            },
          ),
          Match.orElse((s) =>
            Effect.fail(
              new UnableToTransformShapeToSchema({
                message: `type ${s.type} at ${targetShapeId}`,
              }),
            ),
          ),
          // Match.orElse(() => Effect.succeed("$$TEMP_SCHEMA")),
          // Match.exhaustive,
        );
      }),
  });

  yield* Deferred.succeed(deferredValue, result);
  yield* Effect.logDebug(`Converted shape: \`${target}\` to ${result}`);
  return deferredValue;
});

const addError = Effect.fn(function* (error: { name: string }) {
  const sdkFile = yield* SdkFile;
  const existingErrors = yield* Ref.get(sdkFile.errors);
  if (!existingErrors.some((e) => e.name === error.name)) {
    // Get the inline fields from errorFields map
    const errorFieldsMap = yield* Ref.get(sdkFile.errorFields);
    const fields = errorFieldsMap.get(error.name) ?? "{}";
    yield* Ref.update(sdkFile.errors, (errors) => [
      ...errors,
      {
        name: error.name,
        definition: `export class ${error.name} extends S.TaggedError<${error.name}>()("${error.name}", ${fields}) {};`,
      },
    ]);
  }
  return error.name;
});

const generateClient = Effect.fn(function* (modelPath: string, outputRootPath: string) {
  const fs = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;
  const clientImports = MutableHashSet.empty<string>();

  const model = yield* fs
    .readFileString(modelPath)
    .pipe(Effect.flatMap(S.decodeUnknown(S.parseJson(SmithyModel))));

  const client = Effect.gen(function* () {
    const [serviceShapeName, serviceShape] = yield* findServiceShape;

    const serviceName = serviceShapeName.split("#")[1];

    const protocol = Object.keys(serviceShape.traits).find((key) =>
      key.startsWith("aws.protocols#"),
    );

    if (protocol == null) {
      return yield* Effect.fail(new ProtocolNotFound());
    }

    //todo(pear): resource based models don't work, only operation based models get clients right now

    const sdkFile = yield* SdkFile;

    yield* Effect.forEach(
      serviceShape.operations ?? [],
      Effect.fn(function* ({ target: operationId }: { target: string }) {
        const [operationShapeName, operationShape] = yield* findShape(operationId, "operation");

        //todo(pear): we shouldn't default sigv4 to serviceName here, we should do that in client.ts so we don't take up as much space
        const operationName = `${serviceName}.${operationShapeName.split("#")[1]}`;
        const operationComment = htmlToJsdoc(
          operationShape["traits"]["smithy.api#documentation"] ?? "",
        );

        const input = yield* convertShapeToSchema(operationShape.input.target).pipe(
          Effect.flatMap(Deferred.await),
        );
        const output = yield* convertShapeToSchema(operationShape.output.target).pipe(
          Effect.flatMap(Deferred.await),
        );

        const operationErrors =
          operationShape.errors == null || operationShape.errors.length === 0
            ? "[]"
            : yield* Effect.forEach(operationShape.errors, ({ target: errorShapeReference }) =>
                convertShapeToSchema(errorShapeReference).pipe(
                  Effect.flatMap(Deferred.await),
                  Effect.flatMap(() =>
                    addError({
                      name: formatName(errorShapeReference),
                    }),
                  ),
                ),
              ).pipe(Effect.map((errors) => `[${errors.join(", ")}]`));

        const httpTrait = operationShape["traits"]["smithy.api#http"] ?? {
          method: "POST",
          uri: "/",
        };

        // Detect httpChecksum trait and find the algorithm header
        const httpChecksumTrait = operationShape["traits"]["aws.protocols#httpChecksum"] as
          | {
              requestAlgorithmMember?: string;
              requestChecksumRequired?: boolean;
            }
          | undefined;

        let checksumMiddleware: string | undefined;
        if (httpChecksumTrait?.requestAlgorithmMember) {
          // Find the input shape to get the header name for the algorithm member
          const [, inputShape] = yield* findShape(operationShape.input.target, "structure");
          const algorithmMember = inputShape.members[httpChecksumTrait.requestAlgorithmMember];
          if (algorithmMember) {
            const algorithmHeader = algorithmMember.traits?.["smithy.api#httpHeader"];
            if (algorithmHeader) {
              checksumMiddleware = `M.HttpChecksum({ algorithmHeader: "${algorithmHeader}" })`;
              yield* Ref.set(sdkFile.usesMiddleware, true);
            }
          }
        }

        const [responseParser, requestParser, errorParser] = yield* Match.value(protocol).pipe(
          Match.when("aws.protocols#restXml", () =>
            Effect.succeed(["FormatXMLRequest", "FormatXMLResponse", "FormatAwsXMLError"]),
          ),
          Match.when("aws.protocols#restJson1", () =>
            Effect.succeed(["FormatJSONRequest", "FormatJSONResponse", "FormatAwsRestJSONError"]),
          ),
          Match.when("aws.protocols#awsJson1_0", () =>
            Effect.succeed([
              "FormatAwsJSON10Request",
              "FormatJSONResponse",
              "FormatAwsRestJSONError",
            ]),
          ),
          Match.when("aws.protocols#awsJson1_1", () =>
            Effect.succeed([
              "FormatAwsJSON11Request",
              "FormatJSONResponse",
              "FormatAwsRestJSONError",
            ]),
          ),
          Match.when("aws.protocols#awsQuery", () =>
            Effect.succeed([
              "FormatAwsQueryRequest",
              "FormatAwsQueryResponse",
              "FormatAwsXMLError",
            ]),
          ),
          Match.when("aws.protocols#ec2Query", () =>
            Effect.succeed([
              "FormatAwsQueryRequest",
              "FormatAwsEc2QueryResponse",
              "FormatAwsXMLError",
            ]),
          ),
          Match.orElse(() =>
            Effect.fail(
              new ProtocolNotImplemented({
                message: `protocol \`${protocol}\` not implemented for  ${serviceShapeName}`,
              }),
            ),
          ),
        );

        MutableHashSet.add(clientImports, responseParser);
        MutableHashSet.add(clientImports, requestParser);
        MutableHashSet.add(clientImports, errorParser);

        const middlewareArgs = checksumMiddleware ? `, ${checksumMiddleware}` : "";
        // Build meta object, omitting uri if "/" and method if "POST"
        const metaParts: string[] = [`version: "${serviceShape.version}"`];
        if (httpTrait["uri"] !== "/") {
          metaParts.push(`uri: "${httpTrait["uri"]}"`);
        }
        if (httpTrait["method"] !== "POST") {
          metaParts.push(`method: "${httpTrait["method"]}"`);
        }
        metaParts.push(
          `sdkId: "${serviceShape.traits["aws.api#service"].sdkId}"`,
          `sigV4ServiceName: ${serviceShape.traits["aws.auth#sigv4"]?.name == null ? `"${serviceName}"` : `"${serviceShape.traits["aws.auth#sigv4"]?.name}"`}`,
          `name: "${operationName}"`,
        );
        const metaObject = `{ ${metaParts.join(", ")} }`;

        yield* sdkFile.operations.pipe(
          Ref.update(
            (c) =>
              c +
              operationComment +
              `export const ${formatName(operationShapeName, true)} = /*@__PURE__*/ /*#__PURE__*/ makeOperation(() => H.Operation(${metaObject}, ${input}, ${output}, ${operationErrors}), ${responseParser}, ${requestParser}, ${errorParser}${middlewareArgs});\n`,
          ),
        );
      }),
      {
        concurrency: "unbounded",
      },
    );

    // Get schemas and sort them topologically
    // Cycles were already computed before generation, so just sort
    const schemas = yield* Ref.get(sdkFile.schemas);
    const sortedSchemas = topologicalSortWithCycles(schemas, sdkFile.cyclicSchemas);
    const schemaDefinitions = sortedSchemas.map((s) => s.definition).join("\n");

    const errors = yield* Ref.get(sdkFile.errors);
    const errorDefinitions = errors.map((s) => s.definition).join("\n");

    const operations = yield* Ref.get(sdkFile.operations);
    const usesMiddleware = yield* Ref.get(sdkFile.usesMiddleware);

    //todo(pear): optimize imports
    const clientImportsArray = Array.from(clientImports);
    const middlewareImport = usesMiddleware ? `\nimport * as M from "../middleware/index.ts";` : "";
    const imports = dedent`
      import * as S from "effect/Schema"
      import { ${clientImportsArray.join(",")}${clientImportsArray.length > 0 ? "," : ""} makeOperation } from "../client.ts";
      import * as H from "../schema-helpers.ts";${middlewareImport}`;

    const fileContents = `${imports}\n\n//# Schemas\n${schemaDefinitions}\n\n//# Errors\n${errorDefinitions}\n\n//# Operations\n${operations}`;

    yield* fs.writeFileString(
      path.join(
        outputRootPath,
        `${serviceShape.traits["aws.api#service"].sdkId.toLowerCase().replaceAll(" ", "-")}.ts`,
      ),
      fileContents,
    );
  });

  // Pre-compute cyclic schemas from the model before generation
  const shapeDeps = collectShapeDependencies(model);
  const { cyclicSchemas, cyclicClasses, allStructNames } = findCyclicSchemasFromDeps(shapeDeps);

  // Pre-collect error shape IDs so we can inline their fields in TaggedError
  const errorShapeIds = collectErrorShapeIds(model);

  return yield* client.pipe(
    Effect.provideService(SdkFile, {
      schemas: yield* Ref.make<Array<{ name: string; definition: string; deps: string[] }>>([]),
      errors: yield* Ref.make<Array<{ name: string; definition: string }>>([]),
      operations: yield* Ref.make(""),
      map: MutableHashMap.empty<string, Deferred.Deferred<string, never>>(),
      cyclicSchemas,
      cyclicClasses,
      allStructNames,
      errorShapeIds,
      errorFields: yield* Ref.make<Map<string, string>>(new Map()),
      usesMiddleware: yield* Ref.make<boolean>(false),
    }),
    Effect.provideService(ModelService, model),
  );
});

const AWS_MODELS_PATH = "aws-models";
const RESULT_ROOT_PATH = path.resolve("src", "services");

BunRuntime.runMain(
  // generateClient(TEST_MODAL_PATH, TEST_OUTPUT_PATH)
  Effect.gen(function* () {
    const path = yield* Path.Path;
    const fs = yield* FileSystem.FileSystem;
    const rootModelsPath = path.join(AWS_MODELS_PATH, "models");
    const folders = yield* fs.readDirectory(rootModelsPath);

    yield* fs.makeDirectory(RESULT_ROOT_PATH, {
      recursive: true,
    });

    const sdkFlag = Option.getOrNull(getSdkFlag());

    yield* Effect.forEach(
      folders.filter((service) => sdkFlag == null || sdkFlag === service),
      (service) =>
        Effect.gen(function* () {
          yield* Console.log(`⏩ STARTED SERVICE: ${service}`);
          const baseModelPath = path.join(rootModelsPath, service, "service");
          const folder = (yield* fs.readDirectory(baseModelPath))[0]!;
          const modelPath = path.join(baseModelPath, folder, `${service}-${folder}.json`);
          yield* generateClient(modelPath, RESULT_ROOT_PATH);
        }).pipe(
          Effect.andThen(() => Console.log(`✅ SUCCEEDED SERVICE: ${service}`)),
          Effect.catchAll(
            (error) =>
              Console.error(`❌ FAILED SERVICE: ${service}\n\tUnable to generate client: ${error}`), //.pipe(Effect.andThen(() => Effect.die(error))),
          ),
        ),
    );
  }).pipe(Logger.withMinimumLogLevel(LogLevel.Error), Effect.provide(BunContext.layer)),
);

export function htmlToJsdoc(html: string): string {
  let text = html
    // Remove opening JSDoc comment if present
    .replace(/^\/\*\*\s*/, "")
    .replace(/\s*\*\/$/, "")
    // Convert common HTML elements
    .replace(/<\/?p>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?note>/gi, "\n")
    .replace(/<\/?important>/gi, "\n")
    .replace(/<li>\s*/gi, "\n- ")
    .replace(/<\/li>/gi, "")
    .replace(/<\/ul>/gi, "\n")
    .replace(/<ul>/gi, "")
    .replace(/<dt>(.*?)<\/dt>/gi, "\n### $1\n")
    .replace(/<dd>/gi, "")
    .replace(/<\/dd>/gi, "\n")
    .replace(/<dl>/gi, "")
    .replace(/<\/dl>/gi, "")
    // Handle code blocks
    .replace(/<code>(.*?)<\/code>/gi, "`$1`")
    // Handle links - extract text only
    .replace(/<a[^>]*>(.*?)<\/a>/gi, "$1")
    // Handle bold/emphasis
    .replace(/<b>(.*?)<\/b>/gi, "**$1**")
    .replace(/<i>(.*?)<\/i>/gi, "*$1*")
    // Remove any remaining HTML tags
    .replace(/<[^>]+>/g, "")
    // Decode HTML entities
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Clean up whitespace
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+/g, " ")
    .trim();

  // Format as JSDoc
  const lines = text.split("\n").map((line) => ` * ${line.trim()}`);
  const dedupedLines = lines.filter((line, i) => !(line === " * " && lines[i - 1] === " * "));
  return `/**\n${dedupedLines.join("\n")}\n */`;
}
