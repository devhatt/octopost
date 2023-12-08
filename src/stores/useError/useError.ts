import { create } from 'zustand';

import { IUseError } from './useError.types';

export const useError = create<IUseError>()((set) => ({
  errorMessage: '',
  setErrorMessage: (errorMessage) => set({ errorMessage }),
}));
