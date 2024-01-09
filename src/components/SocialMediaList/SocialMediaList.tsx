import { useState } from 'react';

import scss from './SocialMediaList.module.scss';

import { ISocialMediaList } from './SocialMediaList.type';

function SocialMediaList(props: ISocialMediaList) {
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

  function renderEmptyTagsPlaceholder() {
    return <div className={scss.placeholderText}>Select Social Account</div>;
  }

  function renderTags() {
    return tags.map((tag) => (
      <div key={tag} className={scss.tag}>
        <div className={scss.iconContainer}>
          {props.SocialMediaList.find((item) => item.name === tag)?.icon}
        </div>
        {tag}
        <button onClick={() => handleRemoveTag(tag)}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z"
              fill="#1E192B"
            />
          </svg>
        </button>
      </div>
    ));
  }

  return (
    <div className={scss.mainContainer}>
      <div className={scss.tagContainer}>
        {tags.length === 0 ? renderEmptyTagsPlaceholder() : renderTags()}
      </div>
      <div>
        <button className={scss.addButton} onClick={handleAddTag}>
          +
        </button>
      </div>
    </div>
  );
}

export default SocialMediaList;
