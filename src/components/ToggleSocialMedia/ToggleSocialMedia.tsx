import { useState } from 'react';

import Switch from '../Switch/Switch';
import UserImage from './components/UserImage/UserImage';

import scss from './ToggleSocialMedia.module.scss';

import { ITogleSocialMedia } from './ToggleSocialMedia.types';

function ToggleSocialMedia(props: ITogleSocialMedia) {
  const [checked, setChecked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={scss.wrapper}>
      <div className={scss.accountInfo}>
        <UserImage accountName={props.accountName} image={props.accountImage} />
        <p className={scss.text}>{props.accountName}</p>
      </div>

      <div className={scss.accountInfo}>
        <button
          className={scss.button}
          onClick={() => setIsFavorite((prev) => !prev)}
        >
          {isFavorite ? 'starred' : 'star'}
        </button>
        <Switch checked={checked} setChecked={setChecked} />
      </div>
    </div>
  );
}

export default ToggleSocialMedia;
