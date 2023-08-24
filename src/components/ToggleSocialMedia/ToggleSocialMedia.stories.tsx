import type { Story } from '@ladle/react';

import ToggleSocialMedia from './ToggleSocialMedia';

import { ITogleSocialMedia } from './ToggleSocialMedia.types';

export const ToggleSocialMediaComponent: Story<ITogleSocialMedia> = (props) => {
  return (
    <div style={{ maxWidth: '20rem' }}>
      <ToggleSocialMedia
        accountImage={props.accountImage}
        accountName={props.accountName}
      />
    </div>
  );
};

ToggleSocialMediaComponent.args = {
  accountImage:
    'https://pbs.twimg.com/profile_images/1539832609315987456/vaTzT3Co_400x400.jpg',
  accountName: 'Jhon doe',
};
