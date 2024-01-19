export type GenericObject<T = never> = Record<
  string,
  T extends never ? never : T
>;

export type GenericFunction<Args = unknown, Return = unknown> = (
  ...args: Args[]
) => Return;
