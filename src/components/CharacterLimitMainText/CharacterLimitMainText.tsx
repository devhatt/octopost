import CharacterLimit from './components/CharacterLimit';

import scss from './CharacterLimitMainText.module.scss';

import { ICharacterLimitMainTextProps } from './CharacterLimitMainText.types';

function CharacterLimitMainText(props: ICharacterLimitMainTextProps) {
  return (
    <div className={scss.compost}>
      {props.module.map((module) => (
        <CharacterLimit
          maxLength={module.maxLength}
          value={module.value}
          id={module.id}
          svg={module.svg}
        />
      ))}
    </div>
  );
}

export default CharacterLimitMainText;
