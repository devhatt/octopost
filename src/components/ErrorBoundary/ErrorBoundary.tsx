import React from 'react';

type TBoundaryProps = {
  fallBack: React.ReactNode;
  children: React.ReactNode;
};

type TErrorBoundaryState = {
  hasError: boolean;
  error: null;
};

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
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   // You can also log the error to an error reporting service
  //   console.log(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallBack;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;