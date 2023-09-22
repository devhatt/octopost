import CharacterComp from './components/CharacterComp';

import scss from './CharacterLimit.module.scss';

import { ICharacterLimitMainTextProps } from './CharacterLimitMainText.types';

function CharacterLimitMainText(props: ICharacterLimitMainTextProps) {
  return (
    <div className={scss.compost}>
      <CharacterComp
        value={props.value}
        socialList={props.socialList}
      ></CharacterComp>
    </div>
  );
}

export default CharacterLimitMainText;
