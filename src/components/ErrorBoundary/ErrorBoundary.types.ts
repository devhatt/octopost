import { ReactNode } from 'react';

type TBoundaryProps = {
  children: ReactNode;
  fallBack: ReactNode;
};

type TErrorBoundaryState = {
  error: Error | null;
  hasError: boolean;
};

export type { TBoundaryProps, TErrorBoundaryState };
