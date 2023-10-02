import CharacterLimit from './CharacterLimit/CharacterLimit';

import {
  ICharacterLimitMainTextProps,
  ISocialItem,
} from '../../CharacterLimitMainText.types';

function CharacterComposition(props: ICharacterLimitMainTextProps) {
  return props.socialList.map((socialItem: ISocialItem) => (
    <div key={socialItem.id} className={`social-item-${socialItem.id}`}>
      <CharacterLimit
        maxLength={socialItem.maxLength}
        value={props.value}
        id={socialItem.id}
      />
    </div>
  ));
}

export default CharacterComposition;
