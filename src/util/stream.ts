/**
 * Shared stream utilities for AWS protocols.
 * Provides helpers for converting between Effect Streams, ReadableStreams, and text.
 */

import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
import type { StreamingInputBody } from "../traits.ts";

export const readEffectStreamAsText = <Err>(
  stream: Stream.Stream<Uint8Array, Err>,
): Effect.Effect<string, Err> => readStreamAsText(effectStreamToReadable(stream));

/**
 * Read a ReadableStream as text (for non-streaming responses).
 * This is lazy - only consumes when called.
 */
export const readStreamAsText = (
  stream: string | ReadableStream<Uint8Array>,
): Effect.Effect<string> =>
  typeof stream === "string"
    ? Effect.succeed(stream)
    : Effect.promise(() => new globalThis.Response(stream).text());

/**
 * Convert Effect Stream to ReadableStream for fetch.
 */
export const effectStreamToReadable = <Err>(stream: Stream.Stream<Uint8Array, Err>) =>
  Stream.toReadableStream(stream);

/**
 * Check if a value is an Effect Stream.
 * Uses duck typing since Stream doesn't have a built-in type guard.
 */
export function isEffectStream(u: unknown): u is Stream.Stream<unknown, unknown, unknown> {
  return u !== null && typeof u === "object" && Symbol.for("effect/Stream") in (u as object);
}

/**
 * Convert various streaming input types to a format suitable for fetch.
 * Handles strings, Uint8Array, ArrayBuffer, Blob, ReadableStream, and Effect Stream.
 */
export function convertStreamingInput(
  value: string | StreamingInputBody,
): string | Uint8Array | ReadableStream<Uint8Array> {
  if (typeof value === "string") return value;
  if (value instanceof Uint8Array) return value;
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  if (typeof globalThis.Blob !== "undefined" && value instanceof globalThis.Blob) {
    return value.stream();
  }
  if (value instanceof ReadableStream) return value;
  // Effect Stream - convert to ReadableStream
  return effectStreamToReadable(value as Stream.Stream<Uint8Array>);
}

/**
 * Create an Effect Stream from a ReadableStream (for streaming responses).
 */
export const readableToEffectStream = (
  stream: string | ReadableStream<Uint8Array>,
): Stream.Stream<Uint8Array, Error, never> =>
  typeof stream === "string"
    ? Stream.fromIterable([new TextEncoder().encode(stream)])
    : Stream.fromReadableStream(
        () => stream,
        (e) => new Error(String(e)),
      );
