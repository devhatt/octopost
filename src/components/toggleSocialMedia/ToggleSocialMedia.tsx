import { useState } from 'react';

import { Switch } from '../switch/Switch';

import scss from './ToggleSocialMedia.module.scss';

interface ITogleSocialMedia {
  socialMedia: string;
}

export const ToggleSocialMedia: React.FC<ITogleSocialMedia> = ({
  socialMedia,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={scss.wrapper}>
      <Switch checked={checked} setChecked={setChecked} />
      <span className={scss.socialMedia}>{socialMedia}</span>
    </div>
  );
};
