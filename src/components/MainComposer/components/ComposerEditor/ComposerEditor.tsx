<<<<<<< HEAD:src/components/ComposerEditor/ComposerEditor.tsx
import { ChangeEvent, ReactNode, useCallback, useState } from 'react';

import {
  PostMode,
  TextValidator,
} from '~services/api/social-media/social-media.types.ts';
import { useSocialMediaStore } from '~stores/useSocialMediaStore.ts';

import scss from './ComposerEditor.module.scss';

import CharacterLimit from '../CharacterLimitMainText/CharacterLimit.tsx';
import {
  HigherLimitSocial,
  TComposerEditorProps,
} from './ComposerEditor.types';

function ComposerEditor(props: TComposerEditorProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();
  const [inputValue, setInputValue] = useState('');

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
=======
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing -- to change text*/
import { ChangeEvent, ReactNode, useState } from 'react';

import { TextValidator } from '~services/api/social-media/social-media.types';

import { TextValidators } from './utils/textValidator/textValidators';

import CharacterLimitMainText from '~components/CharacterLimitMainText/CharacterLimitMainText';

import scss from './ComposerEditor.module.scss';

import {
  ComposerEditorProps,
  ErrorMapText,
  ErrorText,
} from './ComposerEditor.types';

function ComposerEditor(props: ComposerEditorProps): ReactNode {
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
>>>>>>> 82f1af8 (chore: medias validator):src/components/MainComposer/components/ComposerEditor/ComposerEditor.tsx

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = event.target.value;
    const textErrors = validatorText(newValue);
    const newErrorMap = { ...errorMap };

    if (textErrors.length > 0) {
      newErrorMap[newValue] = textErrors;
      setErrorMap((prevErrorMap: ErrorMapText) => {
        const updatedErrorMap = { ...prevErrorMap, ...newErrorMap };
        props.onError?.(updatedErrorMap);
        return updatedErrorMap;
      });
    }

    setInputValue(newValue);
  };
  const socialLimits = getGreatestLimitsSocial();
  return (
    <div className={scss.inputContainer}>
      <textarea
        className={scss.textArea}
        onChange={props.onChange ?? handleInputChange}
        placeholder="Digite algo aqui..."
        value={props.value ?? inputValue}
      />
      <div className={scss.charactersLimitContainer}>
        <CharacterLimit
          maxLength={socialLimits.maxLimit}
          svg={null}
          value={inputValue}
        />
        <div className={scss.characterLimitWrapper}>
          {socialLimits.socialLimits.map((postMode) => (
            <CharacterLimit
              key={postMode.socialMediaId}
              maxLength={postMode.limit}
              svg={socialMedias.get(postMode.socialMediaId)?.icon}
              value={inputValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComposerEditor;
