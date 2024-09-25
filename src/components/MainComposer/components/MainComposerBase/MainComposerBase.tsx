import { ReactNode, useState } from 'react';

import { useError } from '~stores/useErrorStore/useErrorStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import ComposerEditor from '../ComposerEditor/ComposerEditor';
import InputMediaGroup from '../InputMediaGroup/InputMediaGroup';

import scss from './MainComposerBase.module.scss';

import { PostModeInputMediaGroup } from './MainComposerBase.components';
import { Error, MainComposerBaseProps } from './MainComposerBase.type';

function MainComposerBase(props: MainComposerBaseProps): ReactNode {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { socialMedias } = useSocialMediaStore();
  let hasPostModeAndValidators;

  if (props.socialMediaId) {
    const postModes = socialMedias.get(props.socialMediaId)?.postModes;
    const currentPostMode = postModes?.find(
      (postMode) => postMode.id === props.postModeId
    );
    if (currentPostMode) {
      hasPostModeAndValidators =
        props.postModeId && 'media' in currentPostMode.validators;
    }
  }

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

  return (
    <div className={scss.container}>
      <ComposerEditor
        accountId={props.accountId}
        addError={addErrors}
        maxCharacters={props.maxCharacters ?? undefined}
        onChange={props.onChange}
        postModeId={props.postModeId}
        removeError={errorRemover}
        socialMediaId={props.socialMediaId}
        value={props.value}
      />
      <div className={scss.bottomWrapper}>
        <hr className={scss.divider} />
        {hasPostModeAndValidators ? (
          <PostModeInputMediaGroup
            accountId={props.accountId}
            addError={addErrors}
            errorRemover={errorRemover}
            postModeId={props.postModeId}
            socialMediaId={props.socialMediaId}
          />
        ) : (
          <InputMediaGroup />
        )}
        <div />
      </div>
    </div>
  );
}

export default MainComposerBase;
