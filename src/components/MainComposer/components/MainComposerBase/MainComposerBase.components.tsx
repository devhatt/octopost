import { ReactNode } from 'react';

import InputMediaGroup from '../InputMediaGroup/InputMediaGroup';

import { PostModeInputMediaGroupProps } from './MainComposerBase.type';

export function PostModeInputMediaGroup(
  props: PostModeInputMediaGroupProps
): ReactNode {
  return (
    <InputMediaGroup
      accountId={props.accountId}
      addError={props.addError}
      postModeId={props.postModeId}
      removeError={props.errorRemover}
    />
  );
}
