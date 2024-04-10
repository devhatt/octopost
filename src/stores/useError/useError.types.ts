export type IUseError = {
  errors: IError;
  removeError: (idToRemove: string) => void;
  setError: (newErrorMessage: string) => string;
};

export type IError = Record<
  string,
  {
    id: string;
    message: string;
  }
>;
