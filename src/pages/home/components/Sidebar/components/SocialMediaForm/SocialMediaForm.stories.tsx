import { Story } from '@ladle/react';

import SocialMediaForm from './SocialMediaForm';

export const SocialMediaFormStories: Story = () => (
  <div style={{ width: 680 }}>
    <SocialMediaForm
      onHandleToggleModal={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  </div>
);
