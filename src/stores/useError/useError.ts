import { create } from 'zustand';

import { IUseError } from './useError.types';

export const useError = create<IUseError>()((set) => ({
  errorMessage: 'we',
  setErrorMessage: (errorMessage) => set({ errorMessage }),
}));
