import { create } from 'zustand';

import { IUseFeedbackError } from './useFeedbackError.types';

export const useFeedbackError = create<IUseFeedbackError>()((set) => ({
  errorMessage: '',
  setErrorMessage: (errorMessage) => set({ errorMessage }),
}));
