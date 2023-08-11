import * as zustand from 'zustand';

const actualCreate = zustand.create;
export const storeResetFns = new Set<() => void>();
export const myCustomCreate = <T>() => {
  return (stateCreator: zustand.StateCreator<T>) => {
    const store = actualCreate(stateCreator);
    const initialState = store.getState();
    storeResetFns.add(() => {
      store.setState(initialState, true);
    });
    return store;
  };
};
