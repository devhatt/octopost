import { ChangeEvent, ReactNode, useCallback, useState } from 'react';

import omit from 'lodash.omit';
import { nanoid } from 'nanoid';

import {
  PostMode,
  TextValidator,
} from '~services/api/social-media/social-media.types.ts';
import { usePostStore } from '~stores/usePostStore/usePostStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { textValidator } from './utils/textValidator/textValidator';

import CharacterLimit from '~components/CharacterLimitMainText/CharacterLimit';
import Icon from '~components/Icon/Icon';

import scss from './ComposerEditor.module.scss';

import { Error } from '../MainComposerBase/MainComposerBase.type';
import {
  ComposerEditorProps,
  HigherLimitSocial,
  TEXT_ERRORS,
  TextErrorMap,
} from './ComposerEditor.types';

function ComposerEditor(props: ComposerEditorProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();
  const { updateMainContent } = usePostStore();
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState<TextErrorMap>({});
  const hasPostMode = Boolean(props.postModeId);

  const addErrors = (textErrors: TEXT_ERRORS, errorForAdd: Error): void => {
    const errorId = nanoid();
    const error = errors[textErrors];

    if (!error) {
      setErrors({ ...errors, [textErrors]: errorId });
      props.addError?.(errorId, errorForAdd);
    }
  };

  const removeErrors = (textErrors: TEXT_ERRORS): void => {
    const errorId = errors[textErrors];
    const nextErrors = omit(errors, [textErrors]);

    if (errorId) props.removeError?.(errorId);

    setErrors(nextErrors as TextErrorMap);
  };

  const emitErrors = (text: string): void => {
    const postModes =
      props.socialMediaId && socialMedias.get(props.socialMediaId)?.postModes;
    const validatorRules =
      postModes &&
      postModes.find((postMode) => postMode.id === props.postModeId)?.validators
        .text;

    if (validatorRules) {
      const validators = Object.values(textValidator({ text, validatorRules }));
      for (const validator of validators) {
        const validate = validator(props);

        if (validate.error) addErrors(validate.type, validate.error);
        else removeErrors(validate.type);
      }
    }
  };

  const isBigger = useCallback(
    (
      currentValidator: PostMode['validators'],
      currentMax: number
    ): currentValidator is { text: TextValidator } => {
      let bigger = false;

      if (currentValidator.text && 'text' in currentValidator) {
        bigger = currentValidator.text.maxLength > currentMax;
      }

      return bigger;
    },
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
    const maxCharacters = socialLimits.reduce(
      (acc, current) => (acc > current.limit ? acc : current.limit),
      0
    );
    return { maxCharacters, socialLimits };
  }, [getBiggestLimitBySocial]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = event.target;

    updateMainContent({ text: value });

    props.onChange?.(event);

    emitErrors(value);
    setInputValue(value);
  };

  const renderIcon = (socialMediaId: string): ReactNode => {
    const icon = socialMedias.get(socialMediaId)?.icon;
    return icon ? <Icon icon={icon} size={24} /> : null;
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
          maxLength={props.maxCharacters ?? socialLimits.maxCharacters}
          svg={null}
          value={props.value ?? inputValue}
        />
        {!hasPostMode && (
          <div className={scss.characterLimitWrapper}>
            {socialLimits.socialLimits.map((postMode) => (
              <CharacterLimit
                key={postMode.socialMediaId}
                maxLength={postMode.limit}
                svg={renderIcon(postMode.socialMediaId)}
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
