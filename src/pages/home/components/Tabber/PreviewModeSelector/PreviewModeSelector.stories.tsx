import { ChangeEvent } from 'react';

import { Story } from '@ladle/react';

import { IconsType } from '~components/Icon/Icon.types';

import { PreviewModeSelector } from './PreviewModeSelector';

const previewModes = [
  {
    icon: 'mobile' as IconsType,
    id: 'mobile',
    name: 'mobile',
  },
  {
    icon: 'pc' as IconsType,
    id: 'pc',
    name: 'pc',
  },
  {
    icon: 'tablet' as IconsType,
    id: 'tablet',
    name: 'tablet',
  },
];

export const PreviewModeSelectorStories: Story = () => (
  <PreviewModeSelector
    changeDevice={(e: ChangeEvent<HTMLInputElement>) => e.target.value}
    list={previewModes}
  />
);
