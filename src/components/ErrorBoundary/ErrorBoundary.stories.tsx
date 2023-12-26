import type { Story } from '@ladle/react';

import ErrorBoundary from './ErrorBoundary';

export const ErrorBoundaryComponent: Story<{ previewText: string }> = (
  props
) => {
  return (
    <ErrorBoundary fallBack={<div>Error</div>}>
      {props.previewText}
    </ErrorBoundary>
  );
};

ErrorBoundaryComponent.args = {
  previewText: 'preview',
};
