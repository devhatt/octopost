import { ReactNode } from 'react';

import { Checkbox } from '~components/Checkbox/Checkbox';

import { PostModeProps } from './PostModes.types';

export function PostMode(props: PostModeProps): ReactNode {
  const handlePostModeClick = (postModeElement: HTMLElement): void => {
    props.onClickPostMode(postModeElement);
  };

  return (
    <button
      className={props.postModeClasses(props.postMode.id)}
      onClick={(e) => {
        props.changePostMode(props.postMode.id);
        handlePostModeClick(e.currentTarget);
      }}
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
