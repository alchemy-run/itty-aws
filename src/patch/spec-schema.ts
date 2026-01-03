import { FileSystem, Path } from "@effect/platform";
import * as Effect from "effect/Effect";
import * as S from "effect/Schema";

/**
 * Schema for service error patches discovered by the AI agent.
 * These are stored in spec/{service}.json and applied during client generation.
 */

/**
 * Error alias - maps an error tag to an alternative name
 */
export const ErrorAlias = S.Struct({
  /**
   * The original error tag (e.g., "NotFound")
   */
  from: S.String,
  /**
   * The canonical error tag it should be aliased to (e.g., "NoSuchBucket")
   */
  to: S.String,
});
export type ErrorAlias = typeof ErrorAlias.Type;

/**
 * Patches for a single operation
 */
export const OperationPatch = S.Struct({
  /**
   * Additional error types that should be included in this operation's error union.
   * These are error shape names (not full shape IDs).
   */
  errors: S.optional(S.Array(S.String)),
  /**
   * Error aliases - when AWS returns an error with one name that should be treated as another.
   * Useful for deduplicating errors like "Error" vs "ErrorException".
   */
  aliases: S.optional(S.Array(ErrorAlias)),
});
export type OperationPatch = typeof OperationPatch.Type;

/**
 * All patches for a service
 */
export const ServiceSpec = S.Struct({
  /**
   * Map of operation names to their patches
   */
  operations: S.Record({ key: S.String, value: OperationPatch }),
});
export type ServiceSpec = typeof ServiceSpec.Type;

/**
 * Load spec patches for a service from spec/{service}.json
 */
export const loadServiceSpecPatch = Effect.fn(function* (serviceSdkId: string) {
  const fs = yield* FileSystem.FileSystem;
  const p = yield* Path.Path;
  const specPath = p.join(
    "spec",
    `${serviceSdkId.toLowerCase().replaceAll(" ", "-")}.json`,
  );
  return yield* fs.readFileString(specPath).pipe(
    Effect.flatMap(S.decodeUnknown(S.parseJson(ServiceSpec))),
    Effect.catchAll(() => Effect.succeed({ operations: {} } as ServiceSpec)),
  );
});
