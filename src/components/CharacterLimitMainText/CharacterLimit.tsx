import { ReactNode, useEffect, useState } from 'react';

import classNames from 'classnames';

import scss from './CharacterLimit.module.scss';

import { ModuleProps } from './CharacterLimit.types.ts';

function CharacterLimit(props: ModuleProps): ReactNode {
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

  const hasIcon = props.svg !== null;

  if (hasIcon) {
    return (
      <div className={svgColor}>
        {props.svg}
        <div className={characterLimitClass}>
          <span>{remainingCharacters}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={characterLimitClass}>
      <p>
        {props.value.length}/{props.maxLength}
      </p>
    </div>
  );
}

export default CharacterLimit;
