import omit from 'lodash.omit';
import { nanoid } from 'nanoid';
import { create } from 'zustand';

import { IUseError } from './useError.types';

export const useError = create<IUseError>((set) => ({
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
