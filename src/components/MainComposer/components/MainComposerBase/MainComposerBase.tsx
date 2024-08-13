import { ReactNode, useState } from 'react';

import { useError } from '~stores/useError/useError';

import ComposerEditor from '../ComposerEditor/ComposerEditor';
import InputMediaGroup from '../InputMediaGroup/InputMediaGroup';

import scss from './MainComposerBase.module.scss';

import { Error, MainComposerBaseProps } from './MainComposerBase.type';

function MainComposerBase(props: MainComposerBaseProps): ReactNode {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const errorStore = useError();

  const addErrors = (id: string, error: Error): void => {
    const { message } = error;
    const useErrorId = errorStore.addError({ message });

    setErrors({ ...errors, [id]: useErrorId });
    props.onError?.(true);
  };

  const errorRemover = (id: string): void => {
    if (id) {
      props.onError?.(false);
      errorStore.removeError(errors[id]);
    }
  };

  const renderInputMediaGroupWithProps = (): ReactNode => {
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
        currentMaxLimit={props.currentMaxLimit ?? undefined}
        onChange={props.onChange}
        postMode={props.postMode}
        removeError={errorRemover}
        value={props.value}
      />
      <div className={scss.bottomWrapper}>
        <hr className={scss.divider} />
        {props.postMode ? (
          renderInputMediaGroupWithProps()
        ) : (
          <InputMediaGroup />
        )}
        <div />
      </div>
    </div>
  );
}

export default MainComposerBase;
