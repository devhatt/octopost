export type TGenericObject<T = never> = Record<string, T extends never ? never : T>;
