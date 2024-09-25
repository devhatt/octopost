import { ReactNode } from 'react';

import { Checkbox } from '~components/Checkbox/Checkbox';

import { PostModeProps } from './PostModes.types';

export function PostMode(props: PostModeProps): ReactNode {
  return (
    <button
      className={props.postModeClasses(props.postMode.id)}
      onClick={() => props.changePostMode(props.postMode)}
    >
      <Checkbox
        aria-label={`Check the post mode ${props.postMode.name}`}
        checked={props.isChecked(props.postMode.id)}
        onChange={(checked) => props.changeCheckBox(props.postMode.id, checked)}
      />
      {props.postMode.name}
    </button>
  );
}
