import { ReactNode } from 'react';

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
  const handleFavoriteChange = (): void => {
    if (onFavoriteChange) onFavoriteChange(!isFavorited);
  };

  const handleEnableChange = (): void => {
    if (onEnableChange) onEnableChange(!isEnabled);
  };

  return (
    <div className={classNames(scss.container, className)} {...props}>
      <Avatar image={avatarURL} username={username} />
      <p className={scss.username}>{username}</p>
      {/* TODO: [2025-04-01]: Replace this button for a <IconButton /> with star icon after #392 */}
      <button
        className={scss.star}
        onClick={handleFavoriteChange}
        type="button"
      >
        {isFavorited ? 'starred' : 'star'}
      </button>
      <Switch
        checked={isEnabled}
        onChange={handleEnableChange}
        variant={hasError ? 'error' : 'default'}
      />
    </div>
  );
}
