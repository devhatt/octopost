import { create } from 'zustand';

import { UseError } from './useError.types';

export const useError = create<UseError>()((set) => ({
  errorMessage: '',
  setErrorMessage: (errorMessage): void => set({ errorMessage }),
}));
