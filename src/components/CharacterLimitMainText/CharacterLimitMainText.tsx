import CharacterLimit from './components/CharacterLimit';

import scss from './CharacterLimit.module.scss';

import { ICharacterLimitMainTextProps } from './CharacterLimitMainText.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
