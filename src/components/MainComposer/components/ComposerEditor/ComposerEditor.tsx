import { ChangeEvent, ReactNode, useCallback, useState } from 'react';

import omit from 'lodash.omit';
import { nanoid } from 'nanoid';

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
  HigherLimitSocial,
  TEXT_ERRORS,
  TextErrorMap,
} from './ComposerEditor.types';

function ComposerEditor(props: ComposerEditorProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();
  const { updateMainContent } = useAccountStore();
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState<TextErrorMap>({} as TextErrorMap);

  const addErrors = (textErrors: TEXT_ERRORS): void => {
    const errorId = nanoid();
    const newError = { ...errors };
    const error = newError[textErrors];

    if (!error) {
      setErrors({ ...errors, [textErrors]: errorId });
      props.addError?.(errorId, {
        accountId: props.accountId,
        message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the character limit`,
        postModeId: props.postMode?.id,
      });
    }
  };

  const removeErrors = (textErrors: TEXT_ERRORS): void => {
    const newError = { ...errors };
    const errorId = newError[textErrors];
    const newErrors = omit(errors, [textErrors]);
    props.removeError?.(errorId);
    setErrors(newErrors as TextErrorMap);
  };

  const emitErrors = (text: string): void => {
    const textValidators = new TextValidators(text);
    const validators = props.postMode?.validators.text;
    const isTextTooLong =
      props.postMode &&
      validators &&
      !textValidators.textLength(validators.maxLength);

    if (isTextTooLong) {
      addErrors(TEXT_ERRORS.MAX_LENGTH_EXCEED);
    } else {
      removeErrors(TEXT_ERRORS.MAX_LENGTH_EXCEED);
    }
  };

  const isBigger = useCallback(
    (
      currentValidator: PostMode['validators'],
      currentMax: number
    ): currentValidator is { text: TextValidator } =>
      currentValidator.text !== undefined &&
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

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = event.target.value;
    updateMainContent(newValue);

    props.onChange?.(event);

    emitErrors(newValue);
    setInputValue(newValue);
  };

  const socialLimits = getGreatestLimitsSocial();

  return (
    <div className={scss.inputContainer}>
      <textarea
        className={scss.textArea}
        onChange={handleInputChange}
        placeholder="Digite algo aqui..."
        value={props.value ?? inputValue}
      />
      <div className={scss.charactersLimitContainer}>
        <CharacterLimit
          maxLength={props.currentMaxLimit ?? socialLimits.maxLimit}
          svg={null}
          value={props.value ?? inputValue}
        />
        {!props.postMode && (
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
