import { ReactNode } from 'react';

import classNames from 'classnames';

import { Avatar } from '~components/Avatar/Avatar';
import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';
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
  const handleFavoriteChange = (): void => {
    if (onFavoriteChange) onFavoriteChange(!isFavorited);
  };

  const handleEnableChange = (): void => {
    if (onEnableChange) onEnableChange(!isEnabled);
  };

  return (
    <div className={classNames(scss.container, className)} {...props}>
      <Avatar className={scss.avatar} image={avatarURL} username={username} />
      <p className={scss.username}>{username}</p>
      <Button
        circle
        className={scss.favorite}
        color="primary"
        icon={<Icon icon={isFavorited ? 'star-filled' : 'star'} size={20} />}
        onClick={handleFavoriteChange}
      />
      <Switch
        checked={isEnabled}
        onChange={handleEnableChange}
        variant={hasError ? 'error' : 'default'}
      />
    </div>
  );
}
