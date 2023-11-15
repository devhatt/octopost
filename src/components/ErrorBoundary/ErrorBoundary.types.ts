type TBoundaryProps = {
  fallBack: React.ReactNode;
  children: React.ReactNode;
};

type TErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export type { TBoundaryProps, TErrorBoundaryState };
