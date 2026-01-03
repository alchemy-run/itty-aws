/**
 * Event Stream Parser
 *
 * Converts a ReadableStream of bytes into an Effect Stream of typed events.
 * Handles message framing, CRC validation, and event parsing.
 */

import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Ref from "effect/Ref";
import * as Stream from "effect/Stream";
import {
  decodeMessage,
  EventParseError,
  EventStreamDecodeError,
  getMessageLength,
  parseEvent,
  type StreamEvent,
} from "./codec.ts";

// ============================================================================
// Parser Types
// ============================================================================

/** Errors that can occur during event stream parsing */
export type EventStreamParseError = EventStreamDecodeError | EventParseError;

// ============================================================================
// Stream Parser
// ============================================================================

/**
 * Parse a ReadableStream of bytes into an Effect Stream of events.
 *
 * This handles:
 * - Buffering partial messages
 * - Message framing and CRC validation
 * - Event type parsing
 */
export const parseEventStream = (
  input: ReadableStream<Uint8Array>,
): Stream.Stream<StreamEvent, EventStreamParseError> => {
  // Convert ReadableStream to Effect Stream of chunks
  const chunkStream: Stream.Stream<Uint8Array, EventStreamDecodeError> =
    Stream.unfoldEffect(
      input.getReader(),
      (
        reader,
      ): Effect.Effect<
        Option.Option<
          readonly [Uint8Array, ReadableStreamDefaultReader<Uint8Array>]
        >,
        EventStreamDecodeError
      > =>
        Effect.tryPromise({
          try: () => reader.read(),
          catch: (e) =>
            new EventStreamDecodeError({
              message: `Failed to read from stream: ${e}`,
            }),
        }).pipe(
          Effect.map((result) =>
            result.done
              ? Option.none()
              : Option.some([result.value, reader] as const),
          ),
        ),
    );

  // Process chunks with buffering to extract complete messages
  return Stream.unwrap(
    Effect.gen(function* () {
      // Create a mutable buffer ref
      const bufferRef = yield* Ref.make(new Uint8Array(0));

      return chunkStream.pipe(
        // Append each chunk to the buffer and extract complete messages
        Stream.mapEffect((chunk: Uint8Array) =>
          Effect.gen(function* () {
            // Append chunk to buffer
            const currentBuffer = yield* Ref.get(bufferRef);
            const newBuffer = new Uint8Array(
              currentBuffer.length + chunk.length,
            );
            newBuffer.set(currentBuffer);
            newBuffer.set(chunk, currentBuffer.length);
            yield* Ref.set(bufferRef, newBuffer);

            // Extract all complete messages
            const events: StreamEvent[] = [];
            let buffer = yield* Ref.get(bufferRef);

            while (true) {
              const messageLength = getMessageLength(buffer);
              if (messageLength === 0) {
                break;
              }

              // Extract and decode the message
              const messageData = buffer.subarray(0, messageLength);
              const [message] = yield* decodeMessage(messageData);

              // Parse the message into a typed event
              const event = yield* parseEvent(message);
              events.push(event);

              // Remove processed message from buffer
              buffer = buffer.subarray(messageLength);
            }

            // Update buffer with remaining data
            yield* Ref.set(bufferRef, buffer);

            return events;
          }),
        ),
        // Flatten the arrays of events
        Stream.flatMap((events) => Stream.fromIterable(events)),
        // Add finalizer to check for incomplete data
        Stream.concat(
          Stream.unwrap(
            Effect.gen(function* () {
              const remainingBuffer = yield* Ref.get(bufferRef);
              if (remainingBuffer.length > 0) {
                return Stream.fail(
                  new EventStreamDecodeError({
                    message: `Stream ended with ${remainingBuffer.length} bytes of incomplete message data`,
                  }),
                );
              }
              return Stream.empty;
            }),
          ),
        ),
      );
    }),
  );
};
