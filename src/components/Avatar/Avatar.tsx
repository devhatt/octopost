import { ReactNode } from 'react';

import classNames from 'classnames';

import scss from './Avatar.module.scss';

import { AvatarProps } from './Avatar.types';

export function Avatar(props: AvatarProps): ReactNode {
  const [firstLetter] = props.username.split('');

  if (props.image !== undefined) {
    return (
      <img
        {...props}
        alt={props.alt ?? props.username}
        className={classNames(scss.image, props.className)}
        src={props.image}
      />
    );
  }

  return (
    <p className={classNames(scss.username, props.className)} {...props}>
      {firstLetter}
    </p>
  );
}
