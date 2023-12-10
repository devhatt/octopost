import classNames from 'classnames';
import { IPostMode } from 'modules/types';

import { buildPostModeId } from '../utils';

import scss from '~components/Tabber/PostModes/PostModes.module.scss';

import { IPostModesProps } from './PostModes.types';

function PostModes(props: IPostModesProps) {
  const postModeClasses = (index: number) =>
    classNames(
      scss.postModeTitle,
      props.currentPostModeId === buildPostModeId(props.currentTab, index) &&
        scss.active
    );

  const renderPostModes = (postMode: IPostMode, index: number) => {
    const postModeId = buildPostModeId(props.currentTab, index);

    return (
      <span
        key={postModeId}
        className={postModeClasses(index)}
        onClick={() => props.handleCurrentPostMode(postMode, postModeId)}
      >
        {postMode.name}
      </span>
    );
  };

  return (
    <div className={scss.postModesHeader}>
      {props.currentTab.postModes.map(renderPostModes)}
    </div>
  );
}

export default PostModes;
