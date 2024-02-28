import { ReactNode } from 'react';

import CharacterLimit from './components/CharacterLimit';

import scss from './CharacterLimitMainText.module.scss';

import { CharacterLimitMainTextProps } from './CharacterLimitMainText.types';

function CharacterLimitMainText(props: CharacterLimitMainTextProps): ReactNode {
  return (
    <div className={scss.compost}>
      {props.module.map((module) => (
        <CharacterLimit
          id={module.id}
          key={module.id}
          maxLength={module.maxLength}
          svg={module.svg}
          value={module.value}
        />
      ))}
    </div>
  );
}

export default CharacterLimitMainText;
