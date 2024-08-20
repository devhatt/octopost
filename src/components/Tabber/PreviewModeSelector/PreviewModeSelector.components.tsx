import React from 'react';

import Icon from '~components/Icon/Icon';

import scss from './PreviewModeSelector.module.scss';

import { PreviewModeProps } from './PreviewModeSelector.type';

export function PreviewMode(props: PreviewModeProps): React.JSX.Element {
  return (
    <div key={props.item.id}>
      <input
        className={scss.previewModeInput}
        id={props.item.id}
        name="device"
        type="radio"
      />

      <label className={scss.previewModeLabel} htmlFor={props.item.id}>
        <span>{props.item.name}</span>
        <Icon
          className={scss.icon}
          icon={props.item.icon}
          name="device"
          size={48}
        />
      </label>
    </div>
  );
}
