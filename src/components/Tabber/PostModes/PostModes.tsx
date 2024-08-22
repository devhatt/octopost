import { ReactNode, useState } from 'react';

import classNames from 'classnames';

import { PostMode } from '~services/api/social-media/social-media.types';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { Checkbox } from '~components/Checkbox/Checkbox';

import scss from './PostModes.module.scss';

import { PostModesProps, SelectedPostMode } from './PostModes.types';

function PostModes(props: PostModesProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();
  const socialMedia = socialMedias.get(props.currentTab.socialMediaId);
  const currentTab = props.currentTab.id;

  const [selectedPostModes, setSelectedPostModes] = useState<SelectedPostMode>(
    {}
  );

  const addPostMode = (postModeId: PostMode['id']): SelectedPostMode => {
    const previousModes = selectedPostModes[currentTab] ?? [];
    const updatedModes = [...previousModes, postModeId];
    return {
      ...selectedPostModes,
      [currentTab]: updatedModes,
    };
  };

  const removePostMode = (postModeId: PostMode['id']): SelectedPostMode => {
    const previousModes = selectedPostModes[currentTab] ?? [];
    const updatedModes = previousModes.filter((id) => id !== postModeId);
    return {
      ...selectedPostModes,
      [currentTab]: updatedModes,
    };
  };

  const onChangeCheckBox = (
    postModeId: PostMode['id'],
    isChecked: boolean
  ): void => {
    if (isChecked) setSelectedPostModes(addPostMode(postModeId));
    else setSelectedPostModes(removePostMode(postModeId));
  };

  const isChecked = (postModeId: PostMode['id']): boolean =>
    Boolean(selectedPostModes[currentTab]?.includes(postModeId));

  const postModeClasses = (postModeId: PostMode['id']): string =>
    classNames({
      [scss.active]: props.currentPostModeId === postModeId,
      [scss.postModeTitle]: true,
      [scss.selectPostMode]: true,
    });

  const onChangeCheckBox = (postModeId: string, isChecked: boolean): void => {
    setSelectedPostModes((prev) => {
      const newSelection = new Set(prev);
      if (isChecked) {
        newSelection.add(postModeId);
      } else {
        newSelection.delete(postModeId);
      }
      return newSelection;
    });
  };

  const renderPostMode = (postMode: PostMode): ReactNode => (
    <button
      className={postModeClasses(postMode.id)}
      key={postMode.id}
      onClick={() => props.onChangePostMode(postMode)}
    >
      <Checkbox
        aria-label={`Check the post mode ${postMode.name}`}
        checked={isChecked(postMode.id)}
        onChange={(checked) => onChangeCheckBox(postMode.id, checked)}
      />
      {postMode.name}
    </button>
  );

  return (
    <div className={scss.postModesHeader}>
      <div className={scss.postModesWrapper}>
        {socialMedia?.postModes.map(renderPostMode)}
      </div>
    </div>
  );
}

export default PostModes;

