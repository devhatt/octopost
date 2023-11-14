import type { Story } from '@ladle/react';

import ErrorBoundary from './ErrorBoundary';

export const ErrorBoundaryComponent: Story<{ previewText: string }> = ({
  previewText,
}) => {
  return (
    <ErrorBoundary fallBack={<div>Error</div>}>{previewText}</ErrorBoundary>
  );
};

ErrorBoundaryComponent.args = {
  previewText: 'preview',
};
