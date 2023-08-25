import React, { useState } from 'react';

import CharacterLimit from '~components/CharacterLimit/CharacterLimit';
import { ITabsTabberProps } from '~components/Tabber/Tabber.types';

import scss from './TextAreaTabber.module.scss';

function TextAreaTabber({ socialItem, selectedTab }: ITabsTabberProps) {
  const { id } = socialItem;
  const isSelected = id === selectedTab;
  const [inputValue, setInputValue] = useState(
    'texto clonado, passar props aqui'
  );
  const [displayedText, setDisplayedText] = useState('');

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setDisplayedText(newValue);
  };

  const textAreaClass = `${scss.textArea} ${isSelected ? scss.selected : ''}`;

  return (
    <div>
      <textarea
        className={textAreaClass}
        value={inputValue}
        onChange={handleTextAreaChange}
        placeholder="Digite algo aqui..."
      />

      <CharacterLimit maxLength={140} value={displayedText} />
    </div>
  );
}

export default TextAreaTabber;

/* componente provisório, delete após novo ser construido */
