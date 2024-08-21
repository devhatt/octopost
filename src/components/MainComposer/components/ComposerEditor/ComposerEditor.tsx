import { ChangeEvent, ReactNode, useCallback, useState } from 'react';

import {
  PostMode,
  TextValidator,
} from '~services/api/social-media/social-media.types.ts';
import { usePostStore } from '~stores/usePost/usePost';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { TextValidators } from './utils/textValidator/textValidators';

import CharacterLimit from '~components/CharacterLimitMainText/CharacterLimit';

import scss from './ComposerEditor.module.scss';

import {
  ComposerEditorProps,
  ErrorMapText,
  ErrorText,
  HigherLimitSocial,
} from './ComposerEditor.types';

function ComposerEditor(props: ComposerEditorProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();
  const { updateMainContent } = usePostStore();
  const [inputValue, setInputValue] = useState('');
  const [errorMap, setErrorMap] = useState<ErrorMapText>({});

  const validatorText = (text: string): ErrorText[] => {
    if (props.postModeId && props.socialMediaId) {
      const postModes = socialMedias
        .get(props.socialMediaId)
        ?.postModes.find((postMode) => postMode.id === props.postModeId);
      const textValidators = new TextValidators(text);
      const validators = postModes?.validators as TextValidator;
      const errors: ErrorText[] = [];

      if (
        props.postModeId &&
        textValidators.textLength(validators.text.maxLength)
      ) {
        errors.push({
          accountId: props.accountId,
          message: 'text exceeded the limit',
          postModeId: props.postModeId,
        });
      }

      return errors;
    }

    return [];
  };

  const isBigger = useCallback(
    (
      currentValidator: PostMode['validators'],
      currentMax: number
    ): currentValidator is TextValidator =>
      'text' in currentValidator &&
      currentValidator.text.maxLength > currentMax,
    [socialMedias]
  );

  const getBiggestLimitBySocial = useCallback(() => {
    const socialLimits = [];
    for (const [, socialMedia] of socialMedias) {
      const higherLimit = socialMedia.postModes.reduce<HigherLimitSocial>(
        (acc, postMode): HigherLimitSocial => {
          if (isBigger(postMode.validators, acc.limit))
            acc.limit = postMode.validators.text.maxLength;
          return acc;
        },
        { limit: 0, socialMediaId: socialMedia.id }
      );
      socialLimits.push(higherLimit);
    }
    return socialLimits;
  }, [socialMedias]);
  const getGreatestLimitsSocial = useCallback(() => {
    const socialLimits = getBiggestLimitBySocial();
    const maxLimit = socialLimits.reduce(
      (acc, current) => (acc > current.limit ? acc : current.limit),
      0
    );
    return { maxLimit, socialLimits };
  }, [getBiggestLimitBySocial]);

  const setError = (newErrorMap: ErrorMapText): void => {
    setErrorMap((prevErrorMap) => {
      const updatedErrorMap = { ...prevErrorMap, ...newErrorMap };
      props.onError?.(updatedErrorMap);
      return updatedErrorMap;
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = event.target.value;
    const textErrors = validatorText(newValue);
    const newErrorMap = { ...errorMap };

    if (props.onChange) props.onChange(newValue);
    if (textErrors.length > 0) {
      newErrorMap[newValue] = textErrors;
      setError(newErrorMap);
    }

    updateMainContent({ text: newValue });
    setInputValue(newValue);
  };

  const socialLimits = getGreatestLimitsSocial();

  return (
    <div className={scss.inputContainer}>
      <textarea
        onChange={props.onChangePost ?? handleInputChange}
        placeholder="Digite algo aqui..."
        value={props.value ?? inputValue}
      />
      <div className={scss.charactersLimitContainer}>
        <CharacterLimit
          maxLength={props.maxCharacters ?? socialLimits.maxLimit}
          svg={null}
          value={props.value ?? inputValue}
        />
        {!props.postModeId && (
          <div className={scss.characterLimitWrapper}>
            {socialLimits.socialLimits.map((postMode) => (
              <CharacterLimit
                key={postMode.socialMediaId}
                maxLength={postMode.limit}
                svg={socialMedias.get(postMode.socialMediaId)?.icon}
                value={props.value ?? inputValue}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ComposerEditor;
