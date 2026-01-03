/**
 * Event Stream Serializer
 *
 * Converts an Effect Stream of typed events into encoded bytes.
 */

import * as Stream from "effect/Stream";
import {
  encodeEvent,
  type EventStreamEncodeError,
  type StreamEvent,
} from "./codec.ts";

// ============================================================================
// Serializer Types
// ============================================================================

/** Errors that can occur during event stream serialization */
export type EventStreamSerializeError = EventStreamEncodeError;

// ============================================================================
// Stream Serializer
// ============================================================================

/**
 * Serialize an Effect Stream of events into a Stream of encoded bytes.
 */
export const serializeEventStream = (
  events: Stream.Stream<StreamEvent, EventStreamSerializeError>,
): Stream.Stream<Uint8Array, EventStreamSerializeError> => {
  return Stream.mapEffect(events, encodeEvent);
};
