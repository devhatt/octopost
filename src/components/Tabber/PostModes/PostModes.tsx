import { ReactNode } from 'react';

import classNames from 'classnames';

import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import scss from './PostModes.module.scss';

import { PostModesProps } from './PostModes.types';

function PostModes(props: PostModesProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();
  const socialMedia = socialMedias.get(props.currentTab.socialMediaId);

  const postModeClasses = (
    postModeId: SocialMedia['postModes'][number]['id']
  ): string =>
    classNames({
      [scss.active]: props.currentPostModeId === postModeId,
      [scss.postModeTitle]: true,
    });

  const renderPostMode = (postMode: PostMode): ReactNode => (
    <span
      className={postModeClasses(postMode.id)}
      key={postMode.id}
      onClick={() => props.onChangePostMode(postMode)}
    >
      {postMode.name}
    </span>
  );

  return (
    <div className={scss.postModesHeader}>
      {socialMedia?.postModes.map(renderPostMode)}
    </div>
  );
}

export default PostModes;
