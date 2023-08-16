import React from 'react';

import scss from '~components/CharacterLimit/CharacterLimit.module.scss';

import { ICharacterLimitProps } from './CharacterLimit.types';

function CharacterLimit(props: ICharacterLimitProps) {
  const remainingCharacters = props.maxLength - props.value.length;
  const percentageFilled = (props.value.length / props.maxLength) * 100;

  return (
    <div className={scss.characterLimit}>
      <span className={scss.remainingCharacters}>{remainingCharacters}</span>
      <div className={scss.circle}>
        <div
          className={scss.fill}
          style={{ width: `${percentageFilled}%` }}
        ></div>
      </div>
    </div>
  );
}

export default CharacterLimit;
