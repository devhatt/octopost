import { ReactNode } from 'react';

import { PostMode } from '@octopost/module-manager';
import classNames from 'classnames';

import { buildPostModeId } from '../utils';

import scss from './PostModes.module.scss';

import { IPostModesProps } from './PostModes.types';

function PostModes(props: IPostModesProps): ReactNode {
  const postModeClasses = (index: number): string =>
    classNames({
      [scss.active]:
        props.currentPostModeId === buildPostModeId(props.currentTab, index),
      [scss.postModeTitle]: true,
    });

  const renderPostMode = (postMode: PostMode, index: number): ReactNode => {
    const postModeId = buildPostModeId(props.currentTab, index);

    return (
      <span
        className={postModeClasses(index)}
        key={postModeId}
        onClick={() => props.onChangePostMode(postMode, postModeId)}
      >
        {postMode.name}
      </span>
    );
  };

  return (
    <div className={scss.postModesHeader}>
      {props.currentTab.postModes.map((postMode, index) =>
        renderPostMode(postMode, index)
      )}
    </div>
  );
}

export default PostModes;
