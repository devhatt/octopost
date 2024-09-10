import omit from 'lodash.omit';
import { nanoid } from 'nanoid';

import { create } from '~stores/zustand';

import { UseError } from './useErrorStore.types';

export const useError = create<UseError>((set) => ({
  errors: {},

  removeError: (idToRemove: string): void => {
    set((state) => {
      const errors = omit(state.errors, idToRemove);
      return { errors };
    });
  },

  setError: (newErrorMessage): string => {
    const id = nanoid();

    set((state) => ({
      errors: { ...state.errors, [id]: { id, message: newErrorMessage } },
    }));

    return id;
  },
}));
