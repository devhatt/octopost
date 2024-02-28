import { ReactNode, useState } from 'react';

import { Avatar } from '~components/Avatar/Avatar';
import { Switch } from '~components/Switch/Switch';

import scss from './ToggleSocialMedia.module.scss';

import { ITogleSocialMedia } from './ToggleSocialMedia.types';

function ToggleSocialMedia(props: ITogleSocialMedia): ReactNode {
  const [checked, setChecked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={scss.wrapper}>
      <div className={scss.accountInfo}>
        <Avatar image={props.accountImage} username={props.accountName} />
        <p className={scss.text}>{props.accountName}</p>
      </div>

      <div className={scss.accountInfo}>
        <button
          className={scss.button}
          onClick={() => setIsFavorite((prev) => !prev)}
          type="button"
        >
          {isFavorite ? 'starred' : 'star'}
        </button>
        <Switch checked={checked} onChange={setChecked} />
      </div>
    </div>
  );
}

export default ToggleSocialMedia;
