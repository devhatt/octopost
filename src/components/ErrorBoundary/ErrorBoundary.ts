import { Component } from 'react';

import { TBoundaryProps, TErrorBoundaryState } from './ErrorBoundary.types';

const initialState: TErrorBoundaryState = {
  error: null,
  hasError: false,
};

class ErrorBoundary extends Component<TBoundaryProps, TErrorBoundaryState> {
  constructor(props: TBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error, hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallBack;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
