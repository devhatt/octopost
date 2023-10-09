import React, { useState } from 'react';

import { ITabsTabberProps } from '~components/Tabber/Tabber.types';

import scss from './TextAreaTabber.module.scss';

function TextAreaTabber({ socialItem, selectedTab }: ITabsTabberProps) {
  const { id } = socialItem;
  const isSelected = id === selectedTab;
  const [inputValue, setInputValue] = useState(
    'texto clonado, passar props aqui'
  );
  /* component provisório, deletar após criação do novo */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    </div>
  );
}

export default TextAreaTabber;

/* componente provisório, delete após novo ser construido */
