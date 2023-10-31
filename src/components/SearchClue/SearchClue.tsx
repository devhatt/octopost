import scss from './SearchClue.module.scss';

import { ISearchClueProps } from './SearchClue.types';

function SearchClue(props: ISearchClueProps) {
  const { label } = props;

  const handleClearClick = () => {
    if (props.clearInput) {
      props.clearInput();
    }
  };

  return (
    <div className={scss.searchClueContainer}>
      <span className={scss.spanSearchClue}>
        {label} <span className={scss.searchWord}>{props.value}</span>
      </span>
      <button className={scss.clearButton} onClick={handleClearClick}>
        Clean
      </button>
    </div>
  );
}

export default SearchClue;
