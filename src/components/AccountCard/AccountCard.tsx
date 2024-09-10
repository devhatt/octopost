import { ReactNode, useState } from 'react';

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
  invalid = false,
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

  const accountCardClassNames = classNames({
    className,
    [scss.container]: true,
    [scss.invalid]: invalid,
  });

  return (
    <div className={accountCardClassNames} {...props}>
      <Avatar className={scss.avatar} image={avatarURL} username={username} />
      <p className={scss.username}>{username}</p>
      <div className={scss.containerButton}>
        <Button
          circle
          icon={<Icon icon="star" size={20} />}
          onClick={handleFavoriteChange}
        />
        <Switch
          checked={enabled}
          invalid={invalid}
          onChange={handleEnableChange}
          variant={hasError ? 'error' : 'default'}
        />
      </div>
    </div>
  );
}
