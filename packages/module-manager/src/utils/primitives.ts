/* eslint-disable @typescript-eslint/no-explicit-any */
export type GenericObject<T = never> = {
  [key: string]: T extends never ? never : T;
};

export type GenericFunction<Args = any, Return = any> = (
  ...args: Args[]
) => Return;
