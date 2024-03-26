import type { Story } from '@ladle/react';

import Preview from './Preview';

export const PreviewComponent: Story<{ previewText: string }> = ({
  previewText,
}) => <Preview>{previewText}</Preview>;

PreviewComponent.args = {
  previewText: 'preview',
};
