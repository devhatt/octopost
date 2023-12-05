import { render, screen } from '@testing-library/react';

import ErrorBoundary from './ErrorBoundary';

// this prevents the error from being outputted in console.log when react boundary throws an error;
// https://github.com/facebook/react/issues/11098#issuecomment-412682721
function onError(e: Event) {
  e.preventDefault();
}

beforeEach(() => {
  window.addEventListener('error', onError);
});

afterEach(() => {
  window.removeEventListener('error', onError);
});

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

  describe('when error', () => {
    const error = new Error('Error');
    it('render "fallback" element', () => {
      const ThrowErrorComponent = ({ error }: { error: Error }) => {
        throw error;
      };
      render(
        <ErrorBoundary fallBack={<div>Error</div>}>
          <ThrowErrorComponent error={error} />
        </ErrorBoundary>
      );
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });
});
