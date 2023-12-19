// credits goes to https://stackoverflow.com/a/50375286
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type Values<T> = T[keyof T];

export type OverloadParams<Signatures> = UnionToIntersection<
  Values<Signatures>
>;
