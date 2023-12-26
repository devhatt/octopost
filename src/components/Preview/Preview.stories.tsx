import type { Story } from '@ladle/react';

import Preview from './Preview';

export const PreviewComponent: Story<{ previewText: string }> = (props) => {
  return <Preview>{props.previewText}</Preview>;
};

PreviewComponent.args = {
  previewText: 'preview',
};
