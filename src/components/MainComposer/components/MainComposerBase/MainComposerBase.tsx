import { ReactNode } from 'react';

import ComposerEditor from '../ComposerEditor/ComposerEditor';
import MediaInputs from '../MediaInputs/MediaInput';

import scss from './MainComposerBase.module.scss';

import { ErrorMapText } from '../ComposerEditor/ComposerEditor.types';
import { ErrorMediaInput } from '../MediaInputs/MediaInput.type';
import { TMainComposerBase } from './MainComposerBase.type';

function MainComposerBase(props: TMainComposerBase): ReactNode {
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
        onChange={props.onChange}
        onError={handleTextErrors}
        postMode={props.postMode}
        value={props.value ?? ''}
      />
      <div className={scss.bottomWrapper}>
        <hr className={scss.divider} />
        <div>
          <MediaInputs
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
