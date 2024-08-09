import { ReactNode, useState } from 'react';

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
  const socialMedia = socialMedias.get(props.account.socialMediaId);
  const [postModeIdTeste, setPostModeIdTeste] = useState(props.postModeId);

  const postModeClasses = (
    postModeId: SocialMedia['postModes'][number]['id']
  ): string =>
    classNames({
      [scss.active]: postModeIdTeste === postModeId,
      [scss.postModeTitle]: true,
    });

  const changePostMode = (postMode: PostMode): void => {
    setPostModeIdTeste(postMode.id);
  };

  const renderPostMode = (postMode: PostMode): ReactNode => (
    <span
      className={postModeClasses(postMode.id)}
      key={postMode.id}
      onClick={() => changePostMode(postMode)}
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
