import { useState } from 'react';

import scss from './SocialMediaList.module.scss';

import PlusIcon from './assets/plusIcon.svg';
import RemoveIcon from './assets/xIcon.svg';

import { ISocialMediaList } from './SocialMediaList.type';

const SocialMediaList = (props: ISocialMediaList) => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState('');

  const addTag = (newTag: string) => {
    if (!tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  const handleAddTag = () => {
    if (selectedOption.trim() !== '') {
      addTag(selectedOption);
      setSelectedOption('');
    }
  };

  const handleRemoveTag = (removedTag: string) => {
    setTags(tags.filter((tag) => tag !== removedTag));
  };

  const renderEmptyTagsPlaceholder = () => (
    <div className={scss.placeholderText}>Select Social Account</div>
  );

  const renderTags = () =>
    tags.map((tag) => (
      <div key={tag} className={scss.tag}>
        <div className={scss.iconContainer}>
          {props.SocialMediaList.find((item) => item.name === tag)?.icon}
        </div>
        {tag}
        <button onClick={() => handleRemoveTag(tag)}>
          <img src={RemoveIcon} alt="Ícone para apagar uma tag" />
        </button>
      </div>
    ));

  return (
    <div className={scss.mainContainer}>
      <div className={scss.tagContainer}>
        {tags.length === 0 ? renderEmptyTagsPlaceholder() : renderTags()}
      </div>
      <div>
        <button className={scss.addButton} onClick={handleAddTag}>
          <img src={PlusIcon} alt="Icone de mais" />
        </button>
      </div>
    </div>
  );
};

export default SocialMediaList;
