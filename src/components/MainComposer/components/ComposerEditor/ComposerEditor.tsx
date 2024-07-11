import { ChangeEvent, ReactNode, useCallback, useState } from 'react';

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

import { Action } from '../MainComposerBase/MainComposerBase.type';
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
  const [errors, setErrors] = useState<TextErrorMap>();

  const removeErrors = (textErrors: TEXT_ERRORS): void => {
    const newError = { ...errors };
    const errorId = newError[textErrors];
    const updateErrors = Object.entries(newError).reduce<TextErrorMap>(
      (acc, [key, value]) => {
        acc[key as unknown as TEXT_ERRORS] = value;
        return acc;
      },
      {}
    );
    props.removeError?.(errorId);
    setErrors(updateErrors);
  };

  const emitErrors = (text: string): void => {
    const textValidators = new TextValidators(text);
    const validators = props.postMode?.validators as TextValidator;

    if (
      props.postMode &&
      !textValidators.textLength(validators.text.maxLength)
    ) {
      const errorId = nanoid();
      setErrors({ ...errors, [TEXT_ERRORS.MAX_LENGTH_EXCEED]: errorId });
      props.addError?.(errorId, {
        accountId: props.accountId,
        action: Action.APPLY_ERROR,
        message: `Account ${props.accountId} on ${props.postMode.id} type of post overflowed the character limit`,
        postModeId: props.postMode.id,
      });
    } else {
      removeErrors(TEXT_ERRORS.MAX_LENGTH_EXCEED);
    }
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

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = event.target.value;
    updateMainContent(newValue);

    if (props.onChange) props.onChange(event);

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
          maxLength={socialLimits.maxLimit}
          svg={null}
          value={props.value ?? inputValue}
        />
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
      </div>
    </div>
  );
}

export default ComposerEditor;
