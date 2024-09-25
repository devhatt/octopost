import React from 'react';

import Icon from '~components/Icon/Icon';

import scss from './PreviewModeSelector.module.scss';

import { PreviewModeProps } from './PreviewModeSelector.types';

export function PreviewMode(props: PreviewModeProps): React.JSX.Element {
  return (
    <div key={props.item.id}>
      <input
        className={scss.previewModeInput}
        id={props.item.id}
        name="device"
        onChange={props.onSelect}
        type="radio"
        value={props.item.id}
      />

      <label
        aria-label={props.item.name}
        className={scss.previewModeLabel}
        htmlFor={props.item.id}
      >
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
