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
    if (isChecked) {
      setSelectedPostModes(addPostMode(postModeId));
    } else {
      setSelectedPostModes(removePostMode(postModeId));
    }
  };

  const isChecked = (postModeId: PostMode['id']): boolean => {
    let checked = false;

    checked = Boolean(selectedPostModes[currentTab]?.includes(postModeId));

    return checked;
  };

  const postModeClasses = (postModeId: PostMode['id']): string =>
    classNames({
      [scss.active]: props.currentPostModeId === postModeId,
      [scss.postModeTitle]: true,
    });

  const renderPostMode = (postMode: PostMode): ReactNode => (
    <button
      className={`${scss.selectPostMode} ${postModeClasses(postMode.id)}`}
      key={postMode.id}
      onClick={() => props.onChangePostMode(postMode)}
    >
      <Checkbox
        checked={isChecked(postMode.id)}
        onChange={(checked) => onChangeCheckBox(postMode.id, checked)}
      />
      {postMode.name}
    </button>
  );

  return (
    <div className={scss.postModesHeader}>
      {socialMedia?.postModes.map(renderPostMode)}
    </div>
  );
}

export default PostModes;

