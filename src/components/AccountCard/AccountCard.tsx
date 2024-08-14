import { ReactNode, useState } from 'react';

import classNames from 'classnames';

import { Avatar } from '~components/Avatar/Avatar';
import { Switch } from '~components/Switch/Switch';

import scss from './AccountCard.module.scss';

import { AccountCardProps } from './AccountCard.types';

export function AccountCard({
  avatarURL,
  className,
  hasError = false,
  isEnabled = false,
  isFavorited = false,
  onEnableChange,
  onFavoriteChange,
  username,
  ...props
}: AccountCardProps): ReactNode {
  const [enabled, setEnabled] = useState(isEnabled);

  const handleFavoriteChange = (): void => {
    if (onFavoriteChange) onFavoriteChange(!isFavorited);
  };

  const handleEnableChange = (): void => {
    setEnabled(!enabled);
    if (onEnableChange) onEnableChange(!enabled);
  };

  return (
    <div className={classNames(scss.container, className)} {...props}>
      <Avatar className={scss.avatar} image={avatarURL} username={username} />
      <p className={scss.username}>{username}</p>
      <button className={scss.star} onClick={handleFavoriteChange} />
      <Switch
        checked={enabled}
        onChange={handleEnableChange}
        variant={hasError ? 'error' : 'default'}
      />
    </div>
  );
}
