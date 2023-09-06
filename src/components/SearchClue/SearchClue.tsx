import scss from './SearchClue.module.scss';

import { ISearchClueProps } from './SearchClue.types';

function SearchClue(props: ISearchClueProps) {
  const { value, label } = props;
  return (
    <div className={scss.searchClueContainer}>
      <span className={scss.spanSearchClue}>
        {label} <span className={scss.searchWord}>{value}</span>
      </span>
      <button className={scss.clearButton}>Clean</button>
    </div>
  );
}

export default SearchClue;
