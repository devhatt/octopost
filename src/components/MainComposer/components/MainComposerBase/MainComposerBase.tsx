import { ReactNode, useState } from 'react';

import { useError } from '~stores/useError/useError';

import ComposerEditor from '../ComposerEditor/ComposerEditor';
import InputMediaGroup from '../InputMediaGroup/InputMediaGroup';

import scss from './MainComposerBase.module.scss';

import { Error, MainComposerBaseProps } from './MainComposerBase.type';

function MainComposerBase(props: MainComposerBaseProps): ReactNode {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { addError, removeError } = useError();

  const handleErrors = (id: string, error: Error): void => {
    const { message } = error;
    if (message) {
      const useErrorId = addError({ message });
      setErrors({ ...errors, [id]: useErrorId });
    }

    props.onError?.(false);
  };

  const errorRemover = (id: string | undefined): void => {
    if (id) removeError(errors[id]);
  };

  return (
    <div className={scss.container}>
      <ComposerEditor
        accountId={props.accountId}
        addError={handleErrors}
        onChange={props.onChange}
        postMode={props.postMode}
        removeError={errorRemover}
        value={props.value}
      />
      <div className={scss.bottomWrapper}>
        <hr className={scss.divider} />
        <div>
          <InputMediaGroup
            accountId={props.accountId}
            addError={handleErrors}
            postMode={props.postMode}
            removeError={errorRemover}
          />
        </div>
      </div>
    </div>
  );
}

export default MainComposerBase;
