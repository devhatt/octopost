import React, { ReactNode } from 'react';

import { TBoundaryProps, TErrorBoundaryState } from './ErrorBoundary.types';

class ErrorBoundary extends React.Component<TBoundaryProps, TErrorBoundaryState> {
  public constructor(props: TBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      hasError: false,
    };
  }

  public static getDerivedStateFromError(error: Error): TErrorBoundaryState {
    return { error: error, hasError: true };
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallBack;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
