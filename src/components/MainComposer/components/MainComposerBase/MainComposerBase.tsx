import { ReactNode, useState } from 'react';

import { useError } from '~stores/useError/useError';

import ComposerEditor from '../ComposerEditor/ComposerEditor';
import InputMediaGroup from '../InputMediaGroup/InputMediaGroup';

import scss from './MainComposerBase.module.scss';

import { Error, MainComposerBaseProps } from './MainComposerBase.type';

function MainComposerBase(props: MainComposerBaseProps): ReactNode {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { addError, removeError } = useError();

  const addErrors = (id: string, error: Error): void => {
    const { message } = error;
    const useErrorId = addError({ message });

    setErrors({ ...errors, [id]: useErrorId });
    props.onError?.(false);
  };

  const errorRemover = (id: string): void => {
    if (id) removeError(errors[id]);
  };

  const renderImputMediaGroup = (): ReactNode => {
    if (props.postMode && 'media' in props.postMode.validators) {
      return (
        <InputMediaGroup
          accountId={props.accountId}
          addError={addErrors}
          postMode={props.postMode}
          removeError={errorRemover}
        />
      );
    }
  };

  return (
    <div className={scss.container}>
      <ComposerEditor
        accountId={props.accountId}
        addError={addErrors}
        onChange={props.onChange}
        currentMaxLimit={props.currentMaxLimit ?? undefined}
        onChangePost={props.onChange}
        onError={handleTextErrors}
        postMode={props.postMode}
        removeError={errorRemover}
        value={props.value}
      />
      <div className={scss.bottomWrapper}>
        <hr className={scss.divider} />
        {props.postMode ? renderImputMediaGroup() : <InputMediaGroup />}
        <div />
      </div>
    </div>
  );
}

export default MainComposerBase;
