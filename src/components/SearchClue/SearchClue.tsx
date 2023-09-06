// import { useState } from 'react';

import scss from './SearchClue.module.scss';

import { ISearchClueProps } from './SearchClue.types';

function SearchClue(props: ISearchClueProps) {
  const { value, label } = props;
  return (
    <div className={scss.searchClueContainer}>
      <span>
        {label} {value}
      </span>
      <button className={scss.clearButton}>Clean</button>
    </div>
  );
}

export default SearchClue;
