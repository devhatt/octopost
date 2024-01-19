import { PostMode as IPostMode } from '@octopost/module-manager';
import classNames from 'classnames';

import { buildPostModeId } from '../utils';

import scss from '~components/Tabber/PostModes/PostModes.module.scss';

import { IPostModesProps } from './PostModes.types';

function PostModes(props: IPostModesProps) {
  const postModeClasses = (index: number) =>
    classNames({
      [scss.active]:
        props.currentPostModeId === buildPostModeId(props.currentTab, index),
      [scss.postModeTitle]: true,
    });

  const renderPostMode = (postMode: IPostMode, index: number) => {
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
      {props.currentTab.postModes.map(renderPostMode)}
    </div>
  );
}

export default PostModes;
