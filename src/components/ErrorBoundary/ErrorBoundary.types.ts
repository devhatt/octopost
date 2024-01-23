interface TBoundaryProps {
  children: React.ReactNode;
  fallBack: React.ReactNode;
}

interface TErrorBoundaryState {
  error: Error | null;
  hasError: boolean;
}

export type { TBoundaryProps, TErrorBoundaryState };
