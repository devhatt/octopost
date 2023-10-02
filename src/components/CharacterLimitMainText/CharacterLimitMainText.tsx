import CharacterComposition from './components/CharacterComposition/CharacterComposition';

import scss from './CharacterLimit.module.scss';

import { ICharacterLimitMainTextProps } from './CharacterLimitMainText.types';

function CharacterLimitMainText(props: ICharacterLimitMainTextProps) {
  return (
    <div className={scss.compost}>
      <CharacterComposition value={props.value} socialList={props.socialList} />
    </div>
  );
}

export default CharacterLimitMainText;
