import { useState } from 'react';

import { Story } from '@ladle/react';

import { PostMode } from '~services/api/social-media/social-media.types';

import PostModes from './PostModes';

const mock = {
  account: {
    id: '1',
    socialMediaId: 'DISCORD_EXAMPLE_ID',
    userName: 'Discord User 1',
  },
};

export const PostmodesStories: Story = () => {
  const [postModeOnView, setPostModeOnView] = useState(
    'DISCORD_STORY_POSTMODE_ID'
  );
  const changePostMode = (postMode: PostMode): void => {
    setPostModeOnView(postMode.id);
  };

  return (
    <PostModes
      currentPostModeId={postModeOnView}
      currentTab={mock.account}
      onChangePostMode={changePostMode}
    />
  );
};
