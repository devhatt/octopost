import { Story } from '@ladle/react';

import SocialMediaForm from './SocialMediaForm';

export const SocialMediaFormStories: Story = () => (
  <div style={{ width: 680 }}>
    <SocialMediaForm
      isOpen={false}
      onHandleToggleModal={function (): void {
        throw new Error('Function not implemented.');
      }}
      setIsOpen={function () {
        throw new Error('Function not implemented.');
      }}
    />
  </div>
);
