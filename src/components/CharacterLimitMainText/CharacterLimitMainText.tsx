import CharacterLimit from './components/CharacterLimit';

import scss from './CharacterLimitMainText.module.scss';

import { ICharacterLimitMainTextProps } from './CharacterLimitMainText.types';

function CharacterLimitMainText(props: ICharacterLimitMainTextProps) {
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
