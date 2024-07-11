export type Error = {
  message: string;
};

export type UseError = {
  addError: (error: Error) => string;
  errors: Errors;
  removeError: (idToRemove: string) => void;
};

export type Errors = Record<string, Error>;
