import type { Story } from '@ladle/react';

import ErrorBoundary from './ErrorBoundary';

export const ErrorBoundaryComponent: Story<{ previewText: string }> = ({
  previewText,
}) => <ErrorBoundary fallBack={<div>Error</div>}>{previewText}</ErrorBoundary>;

ErrorBoundaryComponent.args = {
  previewText: 'preview',
};
