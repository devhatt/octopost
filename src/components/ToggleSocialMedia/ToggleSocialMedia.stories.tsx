import type { Story } from '@ladle/react';

import ToggleSocialMedia from './ToggleSocialMedia';

export const ToggleSocialMediaComponent: Story<{
  socialMedia: string;
}> = ({ socialMedia }) => {
  return (
    <div style={{ maxWidth: '20rem' }}>
      <ToggleSocialMedia socialMedia={socialMedia} />
    </div>
  );
};

ToggleSocialMediaComponent.args = {
  socialMedia: 'Reddit',
};
