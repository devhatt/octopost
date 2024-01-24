import { useState } from 'react';

import scss from './SocialMediaList.module.scss';

import PlusIcon from './assets/plusIcon.svg';
import RemoveIcon from './assets/xIcon.svg';

import { ISocialMediaList } from './SocialMediaList.type';

function SocialMediaList(props: ISocialMediaList) {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState('');

  const addTag = (newTag: string): void => {
    if (!tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  const handleAddTag = (): void => {
    if (selectedOption.trim() !== '') {
      addTag(selectedOption);
      setSelectedOption('');
    }
  };

  const handleRemoveTag = (removedTag: string): void => {
    setTags(tags.filter((tag) => tag !== removedTag));
  };

  const renderEmptyTagsPlaceholder = (): JSX.Element => (
    <div className={scss.placeholderText}>Select Social Account</div>
  );

  const renderTags = () =>
    tags.map((tag) => (
      <div className={scss.tag} data-testid="tag" key={tag}>
        <div className={scss.iconContainer}>
          {props.socialMediaList.find((item) => item.name === tag)?.icon}
        </div>
        {tag}
        <button onClick={() => handleRemoveTag(tag)}>
          <img alt="Ícone de apagar uma tag" src={RemoveIcon} />
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
          <img alt="Icone de adicionar uma tag" src={PlusIcon} />
        </button>
      </div>
    </div>
  );
}

export default SocialMediaList;
