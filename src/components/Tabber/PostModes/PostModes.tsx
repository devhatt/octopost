import React from 'react';

import { PostMode as IPostMode } from '@octopost/module-manager';
import classNames from 'classnames';

import { buildPostModeId } from '../utils';

import scss from '~components/Tabber/PostModes/PostModes.module.scss';

import { IPostModesProps } from './PostModes.types';

function PostModes(props: IPostModesProps): React.JSX.Element {
  const postModeClasses = (index: number): string =>
    classNames({
      [scss.active]:
        props.currentPostModeId === buildPostModeId(props.currentTab, index),
      [scss.postModeTitle]: true,
    });

  const renderPostMode = (
    postMode: IPostMode,
    index: number
  ): React.JSX.Element => {
    const postModeId = buildPostModeId(props.currentTab, index);

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLButtonElement>
    ): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        props.onChangePostMode(postMode, postModeId);
      }
    };

    return (
      <button
        className={postModeClasses(index)}
        key={postModeId}
        onClick={() => props.onChangePostMode(postMode, postModeId)}
        onKeyDown={handleKeyDown}
        type="button"
      >
        {postMode.name}
      </button>
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
