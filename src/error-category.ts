import * as Effect from "effect/Effect";
import * as Predicate from "effect/Predicate";

export const ERROR_CATEGORIES = {
  AWS_ERROR: "AWS_ERROR",
  COMMON_ERROR: "COMMON_ERROR",
} as const;

export type ERROR_CATEGORY =
  (typeof ERROR_CATEGORIES)[keyof typeof ERROR_CATEGORIES];

export const categoriesKey = "@alchemy-run/itty-aws/error/categories";

export const withCategory =
  <Categories extends Array<ERROR_CATEGORY>>(...categories: Categories) =>
  <Args extends Array<any>, Ret, C extends { new (...args: Args): Ret }>(
    C: C,
  ): C & {
    new (
      ...args: Args
    ): Ret & { [categoriesKey]: { [Cat in Categories[number]]: true } };
  } => {
    // @ts-expect-error
    const Mixed = class extends C {};

    for (const category of categories) {
      if (!(categoriesKey in Mixed.prototype)) {
        // @ts-expect-error
        Mixed.prototype[categoriesKey] = {};
      }
      // @ts-expect-error
      Mixed.prototype[categoriesKey][category] = true;
    }

    return Mixed as any;
  };

export type AllKeys<E> = E extends { [categoriesKey]: infer Q }
  ? keyof Q
  : never;
export type ExtractAll<E, Cats extends PropertyKey> = Cats extends any
  ? Extract<E, { [categoriesKey]: { [K in Cats]: any } }>
  : never;

export const catchCategory =
  <E, const Categories extends Array<AllKeys<E>>, A2, E2, R2>(
    ...args: [
      ...Categories,
      f: (err: ExtractAll<E, Categories[number]>) => Effect.Effect<A2, E2, R2>,
    ]
  ) =>
  <A, R>(
    effect: Effect.Effect<A, E, R>,
  ): Effect.Effect<
    A | A2,
    E2 | Exclude<E, ExtractAll<E, Categories[number]>>,
    R | R2
  > => {
    const f = args.pop()!;
    const categories = args;
    return Effect.catchIf(
      effect,
      (e) => {
        if (Predicate.isObject(e) && Predicate.hasProperty(categoriesKey)(e)) {
          for (const cat of categories) {
            // @ts-expect-error
            if (cat in e[categoriesKey]) {
              return true;
            }
          }
        }
        return false;
      }, // @ts-expect-error
      (e) => f(e),
    ) as any;
  };
