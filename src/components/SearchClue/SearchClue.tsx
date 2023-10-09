import { useState } from 'react';

import scss from './SearchClue.module.scss';

import { ISearchClueProps } from './SearchClue.types';

function SearchClue(props: ISearchClueProps) {
  const { label } = props;

  const [value, setValue] = useState(props.value || '');

  const handleClearClick = () => {
    setValue('');
  };
  return (
    <div className={scss.searchClueContainer}>
      <span className={scss.spanSearchClue}>
        {label} <span className={scss.searchWord}>{value}</span>
      </span>
      <button className={scss.clearButton} onClick={handleClearClick}>
        Clean
      </button>
    </div>
  );
}

export default SearchClue;
