import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

import { useSocialMediaStore } from '~stores/useSocialMediaStore.ts';

import scss from './ComposerEditor.module.scss';

import CharacterLimit from '../CharacterLimitMainText/CharacterLimit.tsx';
import { Social, TComposerEditorProps } from './ComposerEditor.types';

function ComposerEditor(props: TComposerEditorProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();
  const [inputValue, setInputValue] = useState('');
  const [socials, setSocials] = useState<Social[]>([]);
  const [totalMaxLength, setTotalMaxLength] = useState(0);
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  useEffect(() => {
    for (const [, socialMedia] of socialMedias) {
      const max = socialMedia.postModes.reduce((acc, data): number => {
        if (!('text' in data.validators)) {
          return 0;
        }
        const { maxLength } = data.validators.text;
        return acc > maxLength ? acc : maxLength;
      }, 0);
      const result = {
        id: socialMedia.id,
        maxLength: max,
        socialName: socialMedia.name,
        svg: socialMedia.icon,
      };
      setTotalMaxLength((prev) => (max > prev ? max : prev));
      setSocials((prev) => [...prev, result]);
    }
  }, [socialMedias]);

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
          maxLength={totalMaxLength}
          svg={null}
          value={inputValue}
        />
        <div className={scss.characterLimitWrapper}>
          {socials.map((module) => (
            <CharacterLimit
              key={module.id}
              maxLength={module.maxLength}
              svg={module.svg}
              value={inputValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComposerEditor;
