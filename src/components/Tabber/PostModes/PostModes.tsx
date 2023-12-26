import classNames from 'classnames';
import { IPostMode } from 'modules/types';

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
      // TODO: Remove this warning
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <span
        className={postModeClasses(index)}
        key={postModeId}
        onClick={() => { props.onChangePostMode(postMode, postModeId); }}
      >
        {postMode.name}
      </span>
    );
  };

  return (
    <div className={scss.postModesHeader}>
      {props.currentTab.postModes.map((element, index) =>
        renderPostMode(element, index)
      )}
    </div>
  );
}

export default PostModes;
