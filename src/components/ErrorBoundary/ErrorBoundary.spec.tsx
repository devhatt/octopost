import { render, screen } from '@testing-library/react';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  describe('when initializer', () => {
    it('render children', () => {
      render(
        <ErrorBoundary fallBack={<div>Error</div>}>
          <div>Content</div>
        </ErrorBoundary>
      );
      const content = screen.getByText('Content');
      expect(content).toBeInTheDocument();
    });
  });

  const ThrowErrorComponent = ({ error }: { error: Error }) => {
    throw error;
  };

  describe('when error', () => {
    const error = new Error('Error');
    it('render "fallback" element', () => {
      render(
        <ErrorBoundary fallBack={<div>Error</div>}>
          <ThrowErrorComponent error={error} />
        </ErrorBoundary>
      );
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });
});
