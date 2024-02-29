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
      <button
        className={postModeClasses(index)}
        key={postModeId}
        onClick={() => props.onChangePostMode(postMode, postModeId)}
        type="button"
      >
        {postMode.name}
      </button>
    );
  };

  const listPostModes: ReactNode = props.currentTab.postModes.map(
    (element: PostMode, index: number) => renderPostMode(element, index)
  );

  return <div className={scss.postModesHeader}>{listPostModes}</div>;
}

export default PostModes;
