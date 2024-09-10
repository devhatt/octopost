import React from 'react';

import classNames from 'classnames';

import Icon from '~components/Icon/Icon';

import scss from './TextInput.module.scss';

import { RightIconProps } from './TextInput.types';

export function RightIcon(props: RightIconProps): React.JSX.Element | null {
  const { error, handleRightIconClick, rightIcon } = props;

  const rightIconClass = [scss.rightIcon];

  if (error) {
    rightIconClass.push(scss.rightIconError);
  }

  let iconElement;

  if (rightIcon)
    iconElement = (
      <Icon
        aria-label="input icon"
        className={classNames(rightIconClass)}
        icon={rightIcon}
      />
    );

  if (error)
    iconElement = (
      <Icon
        aria-label="alert-icon"
        className={classNames(rightIconClass)}
        icon="alert"
      />
    );

  if (!iconElement) return null;

  return handleRightIconClick ? (
    <button
      className={scss.rightIconButton}
      onClick={handleRightIconClick}
      type="button"
    >
      {iconElement}
    </button>
  ) : (
    iconElement
  );
}
