import React, { useState } from 'react';

import scss from '~components/TextArea/TextArea.module.scss';

import { ICustomTextAreaProps } from './TextArea.types';

function CustomTextArea({ onTextChange }: ICustomTextAreaProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onTextChange && onTextChange(newValue);
  };

  return (
    <div className={scss.textAreaContainer}>
      <textarea
        className={scss.textArea}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite algo aqui..."
      />
      <div className={scss.textAreaFooter}></div>
    </div>
  );
}

export default CustomTextArea;
