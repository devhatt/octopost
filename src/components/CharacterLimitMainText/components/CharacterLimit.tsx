import { ReactNode, useEffect, useState } from 'react';

import classNames from 'classnames';

import scss from './CharacterLimit.module.scss';

import { IModuleProps } from '../CharacterLimitMainText.types';

function CharacterLimit(props: IModuleProps): ReactNode {
  const [counterZero, setCounterZero] = useState(false);
  const value = props.value ?? '';
  const remainingCharacters = props.maxLength - value.length;

  useEffect(() => {
    setCounterZero(remainingCharacters < 0);
  }, [remainingCharacters]);

  const svgColor = classNames(scss.svgColor, {
    [scss.exceeded]: counterZero,
  });

  const characterLimitClass = classNames(scss.characterLimit, {
    [scss.exceeded]: counterZero,
  });

  return (
    <div className={svgColor} role="alert">
      {props.svg}
      <div className={characterLimitClass}>
        <span>{remainingCharacters}</span>
      </div>
    </div>
  );
}

export default CharacterLimit;
