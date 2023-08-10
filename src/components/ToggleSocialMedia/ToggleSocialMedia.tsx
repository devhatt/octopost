import { useState } from 'react';

import Switch from '~components/Switch/Switch';

import scss from './ToggleSocialMedia.module.scss';

import { ITogleSocialMedia } from './ToggleSocialMedia.types';

function ToggleSocialMedia(props: ITogleSocialMedia) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={scss.wrapper}>
      <Switch checked={checked} setChecked={setChecked} />
      <span className={scss.socialMedia}>{props.socialMedia}</span>
    </div>
  );
}

export default ToggleSocialMedia;
