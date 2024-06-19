import classNames from 'classnames';
import { ReactNode } from 'react';

import { PostMode, SocialMedia } from '~services/api/social-media/social-media.types';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import scss from './PostModes.module.scss';

import { IPostModesProps } from './PostModes.types';

function PostModes(props: IPostModesProps): ReactNode {
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
