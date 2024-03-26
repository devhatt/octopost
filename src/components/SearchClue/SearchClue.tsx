import { ReactNode } from 'react';

import scss from './SearchClue.module.scss';

import { ISearchClueProps } from './SearchClue.types';

function SearchClue(props: ISearchClueProps): ReactNode {
  const handleClearClick = (): void => {
    if (props.clearInput) {
      props.clearInput();
    }
  };

  return (
    <div className={scss.searchClueContainer}>
      <span className={scss.spanSearchClue}>
        {props.label} <span className={scss.searchWord}>{props.value}</span>
      </span>
      <button className={scss.clearButton} onClick={handleClearClick} type='button'>
        Clean
      </button>
    </div>
  );
}

export default SearchClue;
