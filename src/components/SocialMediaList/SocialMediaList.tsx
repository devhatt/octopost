import { ReactNode, useState } from 'react';

import isEmpty from '~utils/isEmpty/isEmpty';

import scss from './SocialMediaList.module.scss';

import PlusIcon from './assets/plusIcon.svg';
import RemoveIcon from './assets/xIcon.svg';

import { ISocialMedia, ISocialMediaListProps } from './SocialMediaList.type';

const handleAddTag = (): void => {
  throw new Error('Not implemented');
};

function SocialMediaList(props: ISocialMediaListProps): ReactNode {
  const [tags, setTags] = useState(Array.from(props.tags));

  const handleRemoveTag = (removedTag: ISocialMedia): void => {
    setTags((currentTags: ISocialMedia[]) =>
      currentTags.filter((tag: ISocialMedia) => tag !== removedTag)
    );
  };

  const renderEmptyTagsPlaceholder = (): ReactNode => (
    <div className={scss.placeholderText}>Select Social Account</div>
  );

  const renderTags = (): ReactNode =>
    tags.map((tag: ISocialMedia) => (
      <div className={scss.tag} data-testid="tag" key={tag.id}>
        <div className={scss.iconContainer}>{tag.icon}</div>
        {tag.name}
        <button onClick={() => handleRemoveTag(tag)} type="button">
          <img alt="Ícone de apagar uma tag" src={RemoveIcon} />
        </button>
      </div>
    ));

  return (
    <div className={scss.mainContainer}>
      <div className={scss.tagContainer}>
        {isEmpty(tags) ? renderEmptyTagsPlaceholder() : renderTags()}
      </div>
      <div>
        <button className={scss.addButton} onClick={handleAddTag} type="button">
          <img alt="Icone de adicionar uma tag" src={PlusIcon} />
        </button>
      </div>
    </div>
  );
}

export default SocialMediaList;
