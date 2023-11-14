import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  let shouldThrow = true;
  let valueToThrow: Error;
  describe('when initialize', () => {
    it('render children', () => {
      const container = document.createElement('div');
      const root = createRoot(container);
      act(() => {
        root.render(
          <ErrorBoundary fallBack={<div>Error</div>}>
            <div>Content</div>
          </ErrorBoundary>
        );
      });
      expect(container.textContent).toBe('Content');
    });
  });

  interface IPropsWithChildren {
    children?: React.ReactNode;
  }

  function MaybeThrows({ children }: IPropsWithChildren) {
    if (shouldThrow) {
      throw valueToThrow;
    }
    return children;
  }

  describe('when error', () => {
    it('render "fallBack" element', () => {
      shouldThrow = true;
      const container = document.createElement('div');
      const root = createRoot(container);
      act(() => {
        root.render(
          <ErrorBoundary fallBack={<div>Error</div>}>
            <MaybeThrows>Content</MaybeThrows>
          </ErrorBoundary>
        );
      });
      expect(container.textContent).toBe('Error');
    });
  });
});
