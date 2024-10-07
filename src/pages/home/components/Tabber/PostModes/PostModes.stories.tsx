import { useState } from 'react';

import { Story } from '@ladle/react';

import { PostMode } from '~services/api/social-media/social-media.types';

import PostModes from './PostModes';

const mock = {
  account: {
    id: '1',
    socialMediaId: 'DISCORD_EXAMPLE_ID',
  },
};

export const PostmodesStories: Story = () => {
  const [postModeOnView, setPostModeOnView] = useState(
    'DISCORD_STORY_POSTMODE_ID'
  );
  const changePostMode = (postModeId: PostMode['id']): void => {
    setPostModeOnView(postModeId);
  };

  return (
    <PostModes
      changePostModeId={changePostMode}
      postId={mock.account.id}
      postModeId={postModeOnView}
      socialMediaId={mock.account.socialMediaId}
    />
  );
};
