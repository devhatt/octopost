import { ReactNode, useEffect, useState } from 'react';

import classNames from 'classnames';

import scss from './CharacterLimit.module.scss';

import { IModuleProps } from '../CharacterLimitMainText.types';

//TODO: Renomear para characterCounter

function CharacterLimit(props: IModuleProps): ReactNode {
  const [counterZero, setCounterZero] = useState(false);
  const remainingCharacters = props.maxLength - props.value.length;
  const zero = 0;

  useEffect(() => {
    setCounterZero(remainingCharacters < zero);
  }, [remainingCharacters]);

  const svgColor = classNames(scss.svgColor, {
    [scss.exceeded]: counterZero,
  });

  const characterLimitClass = classNames(scss.characterLimit, {
    [scss.exceeded]: counterZero,
  });

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
