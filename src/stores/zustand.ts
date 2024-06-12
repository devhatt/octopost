import {
  create as ZustandCreate,
  StateCreator,
  StoreApi,
  UseBoundStore,
} from 'zustand';
import { devtools } from 'zustand/middleware';
import '@redux-devtools/extension';

export const create = <T>(
  store: StateCreator<T, [['zustand/devtools', never]]>
): UseBoundStore<StoreApi<T>> =>
  ZustandCreate<T>()(
    devtools(store, {
      enabled: import.meta.env.VITE_ENVIRONMENT === 'development',
    })
  );
