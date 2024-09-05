export type Error = {
  message: string;
};

export type Errors = Record<string, Error>;

export type ErrorStore = {
  addError: (error: Error) => string;
  errors: Errors;
  removeError: (idToRemove: string) => void;
};
