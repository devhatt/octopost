export type TGenericObject<T = never> = {
  [key: string]: T extends never ? never : T;
};
