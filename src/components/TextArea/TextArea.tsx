import React, { useState } from 'react';

import scss from './TextArea.module.scss';

import { ICustomTextAreaProps } from './TextArea.types';

function CustomTextArea(props: ICustomTextAreaProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    props?.onTextChange(newValue);
  };

  return (
    <div>
      <textarea
        className={scss.textArea}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite algo aqui..."
      />
    </div>
  );
}

export default CustomTextArea;
