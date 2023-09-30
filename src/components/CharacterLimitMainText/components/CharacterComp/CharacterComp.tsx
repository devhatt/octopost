import CharacterLimit from './CharacterLimit/CharacterLimit';

import {
  ICharacterLimitMainTextProps,
  ISocialItem,
} from '../../CharacterLimitMainText.types';

function CharacterComp(props: ICharacterLimitMainTextProps) {
  return props.socialList.map((socialItem: ISocialItem) => (
    <div key={socialItem.id} className={`social-item-${socialItem.id}`}>
      <div>
        <CharacterLimit
          maxLength={socialItem.maxLength}
          value={props.value}
          id={socialItem.id}
        />
      </div>
    </div>
  ));
}

export default CharacterComp;
