import { create } from 'zustand';

import { IUseError } from './useError.types';

export const useError = create<IUseError>((set) => ({
  errors: [],
  setErrors: (newErrorMessage): void =>
    set((state) => ({ errors: [...state.errors, newErrorMessage] })),
}));
