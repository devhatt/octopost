import { ChangeEvent, ReactNode, useCallback, useState } from 'react';

import {
  PostMode,
  TextValidator,
} from '~services/api/social-media/social-media.types.ts';
import { useSocialMediaStore } from '~stores/useSocialMediaStore.ts';

import scss from './ComposerEditor.module.scss';

import CharacterLimit from '../CharacterLimitMainText/CharacterLimit.tsx';
import { TComposerEditorProps } from './ComposerEditor.types';

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

  //TODO: rename this function
  const getBiggestPostModeLimitsBySocialMedia = useCallback(() => {
    const socialLimits = [];
    for (const [, socialMedia] of socialMedias) {
      //TODO: Create a type of result with {limit: number, socialMediaId: string} | rename result to a better name
      const result = socialMedia.postModes.reduce<{
        limit: number;
        socialMediaId: string;
      }>(
        (
          acc,
          postMode
        ): {
          limit: number;
          socialMediaId: string;
        } => {
          if (isBigger(postMode.validators, acc.limit))
            acc.limit = postMode.validators.text.maxLength;
          return acc;
        },
        { limit: 0, socialMediaId: socialMedia.id }
      );
      socialLimits.push(result);
    }
    return socialLimits;
  }, [socialMedias]);
  //TODO: rename this function
  const getBiggestPostModeLimitAndSocials = useCallback(() => {
    const socialLimits = getBiggestPostModeLimitsBySocialMedia();
    const maxLimit = socialLimits.reduce(
      (acc, current) => (acc > current.limit ? acc : current.limit),
      0
    );
    return { maxLimit, socialLimits };
  }, [getBiggestPostModeLimitsBySocialMedia]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };
  const socialLimits = getBiggestPostModeLimitAndSocials();
  return (
    <div className={scss.inputContainer}>
      <textarea
        className={scss.textArea}
        onChange={handleInputChange}
        placeholder="Digite algo aqui..."
        value={inputValue}
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
