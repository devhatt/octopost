import React, { useState } from 'react';

import scss from './Textarea.module.scss';

import ITextAreaProps from './TextArea.types';

function CustomTextArea(props: ITextAreaProps) {
  const [inputValue, setInputValue] = useState(props.value);
  const [clicked, setClicked] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!clicked) {
      setInputValue(event.target.value);
    } else {
      setInputValue(event?.target.value);
    }
  };

  const handleFocus = () => {
    if (!clicked) {
      setClicked(true);
      setInputValue('');
    }
  };

  return (
    <textarea
      className={scss.textArea}
      value={inputValue}
      onChange={handleInputChange}
      onFocus={handleFocus}
    />
  );
};

export default CustomTextArea;
