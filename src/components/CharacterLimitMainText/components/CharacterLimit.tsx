import React, { useState, useEffect } from 'react';

import scss from './CharacterLimit.module.scss';

import { IModuleProps } from '../CharacterLimitMainText.types';

function CharacterLimit(props: IModuleProps) {
  const [counterZero, setCounterZero] = useState(false);
  const remainingCharacters = props.maxLength - props.value.length;

  useEffect(() => {
    if (remainingCharacters < 0) {
      setCounterZero(true);
      //console habilitado para verificar emissão de evento
      // eslint-disable-next-line no-console
      console.log(props.id);
    } else {
      setCounterZero(false);
    }
  }, [remainingCharacters]);

  const svgColor = counterZero
    ? `${scss.svgColor} ${scss.exceeded}`
    : scss.svgColor;
  const characterLimitClass = counterZero
    ? `${scss.characterLimit} ${scss.exceeded}`
    : scss.characterLimit;

  return (
    <div className={svgColor}>
      {props.svg}
      <div className={characterLimitClass}>
        <span>{remainingCharacters}</span>
      </div>
    </div>
  );
}

export default CharacterLimit;
