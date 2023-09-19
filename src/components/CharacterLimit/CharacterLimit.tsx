import React from 'react';

import scss from '~components/CharacterLimit/CharacterLimit.module.scss';

import { ICharacterLimitProps } from './CharacterLimit.types';

function CharacterLimit(props: ICharacterLimitProps) {
  const remainingCharacters = props.maxLength - props.value.length;

  return (
    <div className={scss.characterLimit}>
      <span className={scss.remainingCharacters}>{remainingCharacters}</span>
    </div>
  );
}

export default CharacterLimit;
