export type UseError = {
  errors: Error;
  removeError: (idToRemove: string) => void;
  setError: (newErrorMessage: string) => string;
};

export type Error = Record<
  string,
  {
    id: string;
    message: string;
  }
>;
