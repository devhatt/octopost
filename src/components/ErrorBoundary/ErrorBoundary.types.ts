type TBoundaryProps = {
  fallBack: React.ReactNode;
  children: React.ReactNode;
};

type TErrorBoundaryState = {
  hasError: boolean;
  error: null;
};

export type { TBoundaryProps, TErrorBoundaryState };
