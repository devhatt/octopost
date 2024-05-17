import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

import { SocialMediaService } from '~services/api/social-media/social-media.ts';
import type { SocialMedia } from '~services/api/social-media/social-media.types';

import scss from './ComposerEditor.module.scss';

import CharacterLimit from '../CharacterLimitMainText/CharacterLimit.tsx';
import { TComposerEditorProps } from './ComposerEditor.types';

type Social = {
  id: string;
  maxLength: number;
  socialName: string;
  svg: string;
};

function ComposerEditor(props: TComposerEditorProps): ReactNode {
  const [inputValue, setInputValue] = useState('');
  const [socials, setSocials] = useState<Social[]>([]);
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const getSocialMedias = async (): Promise<void> => {
    const socialMedias: SocialMedia[] = await SocialMediaService.fetch([]);
    const value = socialMedias.map((socialMedia) => {
      const length: number = socialMedia.postModes.reduce((acc, data) => {
        if (!('text' in data.validators)) {
          return 0;
        }
        const { maxLength } = data.validators.text;
        return acc > maxLength ? acc : maxLength;
      }, 0);
      return {
        id: socialMedia.id,
        maxLength: length,
        socialName: socialMedia.name,
        svg: socialMedia.icon,
      };
    });
    setSocials(value);
  };

  useEffect(() => {
    void getSocialMedias();
  }, []);

  return (
    <div className={scss.inputContainer}>
      <textarea
        className={scss.textArea}
        onChange={handleInputChange}
        placeholder="Digite algo aqui..."
        value={inputValue}
      />
      <div className={scss.charactersLimitContainer}>
        <CharacterLimit maxLength={10} svg={null} value={inputValue} />
        <section className={scss.characterLimitWrapper}>
          {socials.map((module) => (
            <CharacterLimit
              key={module.id}
              maxLength={module.maxLength}
              svg={module.svg}
              value={inputValue}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default ComposerEditor;
