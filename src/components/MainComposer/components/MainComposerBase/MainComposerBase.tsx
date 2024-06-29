import { ReactNode } from 'react';

import ComposerEditor from '../ComposerEditor/ComposerEditor';
import InputMediaGroup from '../InputMediaGroup/InputMediaGroup';

import scss from './MainComposerBase.module.scss';

import { ErrorMapText } from '../ComposerEditor/ComposerEditor.types';
import { ErrorMediaInput } from '../InputMediaGroup/InputMediaGroup.type';
import { MainComposerBaseProps } from './MainComposerBase.type';

function MainComposerBase(props: MainComposerBaseProps): ReactNode {
  const handleMediaErrors = (errors: ErrorMediaInput): void => {
    props.onErrorMedia?.(errors);
  };

  const handleTextErrors = (errors: ErrorMapText): void => {
    props.onErrorText?.(errors);
  };

  return (
    <div className={scss.container}>
      <ComposerEditor
        accountId={props.accountId}
        currentMaxLimit={props.currentMaxLimit ?? undefined}
        onChangePost={props.onChange}
        onError={handleTextErrors}
        postMode={props.postMode}
        value={props.value}
      />
      <div className={scss.bottomWrapper}>
        <hr className={scss.divider} />
        <div>
          <InputMediaGroup
            accountId={props.accountId}
            onError={handleMediaErrors}
            postMode={props.postMode}
          />
        </div>
      </div>
    </div>
  );
}

export default MainComposerBase;
