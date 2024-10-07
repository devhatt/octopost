import { ReactNode, useState } from 'react';

import classNames from 'classnames';

import { useHorizontalScroll } from '~hooks/useHorizontalScroll/useHorizontalScroll';
import { PostMode as PostModeTypes } from '~services/api/social-media/social-media.types';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import scss from './PostModes.module.scss';

import { PostMode } from './PostModes.components';
import { PostModesProps, SelectedPostMode } from './PostModes.types';

function PostModes(props: PostModesProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();
  const socialMedia = socialMedias.get(props.socialMediaId);
  const currentTab = props.postId;
  const {
    containerRef,
    firstGradient,
    handleMouseEnter,
    handleMouseLeave,
    lastGradient,
    scrollToElement,
  } = useHorizontalScroll();

  const handlePostModeClick = (postModeElement: HTMLElement): void => {
    scrollToElement(postModeElement);
  };

  const [selectedPostModes, setSelectedPostModes] = useState<SelectedPostMode>(
    {}
  );

  const addPostMode = (postModeId: PostModeTypes['id']): SelectedPostMode => {
    const previousModes = selectedPostModes[currentTab] ?? [];
    const updatedModes = [...previousModes, postModeId];
    return {
      ...selectedPostModes,
      [currentTab]: updatedModes,
    };
  };

  const removePostMode = (
    postModeId: PostModeTypes['id']
  ): SelectedPostMode => {
    const previousModes = selectedPostModes[currentTab] ?? [];
    const updatedModes = previousModes.filter((id) => id !== postModeId);
    return {
      ...selectedPostModes,
      [currentTab]: updatedModes,
    };
  };

  const onChangeCheckBox = (
    postModeId: PostModeTypes['id'],
    isChecked: boolean
  ): void => {
    if (isChecked) setSelectedPostModes(addPostMode(postModeId));
    else setSelectedPostModes(removePostMode(postModeId));
  };

  const isChecked = (postModeId: PostModeTypes['id']): boolean =>
    Boolean(selectedPostModes[currentTab]?.includes(postModeId));

  const postModeClasses = (postModeId: PostModeTypes['id']): string =>
    classNames({
      [scss.active]: props.postModeId === postModeId,
      [scss.postModeTitle]: true,
      [scss.selectPostMode]: true,
    });

  return (
    <div className={scss.postModesHeader}>
      <span className={scss.firstGradient} ref={firstGradient} />
      <div
        className={scss.postModesWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {socialMedia?.postModes.map((postMode) => (
          <PostMode
            changeCheckBox={onChangeCheckBox}
            changePostMode={props.changePostModeId}
            isChecked={isChecked}
            key={postMode.id}
            onClickPostMode={(element: HTMLElement) =>
              handlePostModeClick(element)
            }
            postMode={postMode}
            postModeClasses={postModeClasses}
          />
        ))}
      </div>
      <span className={scss.lastGradient} ref={lastGradient} />
    </div>
  );
}

export default PostModes;
