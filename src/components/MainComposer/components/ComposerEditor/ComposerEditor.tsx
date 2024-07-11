import { ChangeEvent, ReactNode, useCallback, useState } from 'react';

import {
  PostMode,
  TextValidator,
} from '~services/api/social-media/social-media.types.ts';
import { useAccountStore } from '~stores/useAccountStore';
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
  const { updateMainContent } = useAccountStore();
  const [inputValue, setInputValue] = useState('');
  const [errorMap, setErrorMap] = useState<ErrorMapText>({});

  const validatorText = (text: string): ErrorText[] => {
    const textValidators = new TextValidators(text);
    const validators = props.postMode?.validators as TextValidator;
    const errors: ErrorText[] = [];

    if (
      props.postMode &&
      textValidators.textLength(validators.text.maxLength)
    ) {
      errors.push({
        accountId: props.accountId,
        message: 'text exceeded the limit',
        postModeId: props.postMode.id,
      });
    }

    return errors;
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
    updateMainContent(newValue);
    setInputValue(newValue);
  };

  const socialLimits = getGreatestLimitsSocial();

  return (
    <div className={scss.inputContainer}>
      <textarea
        className={scss.textArea}
        onChange={props.onChangePost ?? handleInputChange}
        placeholder="Digite algo aqui..."
        value={props.value ?? inputValue}
      />
      <div className={scss.charactersLimitContainer}>
        <CharacterLimit
          maxLength={props.currentMaxLimit ?? socialLimits.maxLimit}
          svg={null}
          value={props.value ?? inputValue}
        />
      </div>
    </div>
  );
}

export default ComposerEditor;
