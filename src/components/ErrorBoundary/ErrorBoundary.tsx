import React from 'react';

import { TBoundaryProps, TErrorBoundaryState } from './ErrorBoundary.types';

const initialState: TErrorBoundaryState = {
  hasError: false,
  error: null,
};

class ErrorBoundary extends React.Component<
  TBoundaryProps,
  TErrorBoundaryState
> {
  constructor(props: TBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallBack;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
