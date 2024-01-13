import classNames from 'classnames';
import { IPostMode } from 'modules/types';

import { buildPostModeId } from '../utils';

import scss from '~components/Tabber/PostModes/PostModes.module.scss';

import { IPostModesProps } from './PostModes.types';

function PostModes(props: IPostModesProps) {
  const postModeClasses = (index: number) =>
    classNames({
      [scss.postModeTitle]: true,
      [scss.active]:
        props.currentPostModeId === buildPostModeId(props.currentTab, index),
    });

  const renderPostMode = (postMode: IPostMode, index: number) => {
    const postModeId = buildPostModeId(props.currentTab, index);

    return (
      <span
        key={postModeId}
        className={postModeClasses(index)}
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
